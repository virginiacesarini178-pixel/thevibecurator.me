from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import re
import ipaddress
import logging
from html import escape
from html.parser import HTMLParser
from urllib.parse import urlparse
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logger = logging.getLogger(__name__)

EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ["EMERGENT_EMAIL_KEY"]
EMAIL_FROM_NAME = os.environ["EMAIL_FROM_NAME"]
OWNER_EMAIL = os.environ["OWNER_EMAIL"]

_SHORTENERS = ("bit.ly", "tinyurl.com", "t.co", "is.gd", "cutt.ly", "goo.gl", "rebrand.ly")
_CRED_ASK = ("reply with your password", "reply with the code", "send your password", "cvv",
             "send us your password", "enter your password below", "confirm your card number",
             "your full card number", "seed phrase", "recovery phrase", "verify your card",
             "social security number", "confirm your bank details")
_HOSTISH = re.compile(r"\b(?:https?://)?((?:[a-z0-9-]+\.)+[a-z]{2,})", re.I)


def _host_ok(host: str) -> bool:
    if not host or "xn--" in host:
        return False
    try:
        ipaddress.ip_address(host)
        return False
    except ValueError:
        pass
    return not any(host == s or host.endswith("." + s) for s in _SHORTENERS)


def _same_site(shown: str, real: str) -> bool:
    return shown == real or real.endswith("." + shown) or shown.endswith("." + real)


class _EmailScan(HTMLParser):
    def __init__(self):
        super().__init__()
        self.tags, self.urls, self.anchors = set(), [], []
        self._href, self._text = None, []

    def handle_starttag(self, tag, attrs):
        self.tags.add(tag.lower())
        self.urls += [v for k, v in attrs if k.lower() in ("href", "src") and v]
        if tag.lower() == "a":
            self._href = dict((k.lower(), v) for k, v in attrs).get("href")
            self._text = []

    def handle_data(self, data):
        if self._href is not None:
            self._text.append(data)

    def handle_endtag(self, tag):
        if tag.lower() == "a" and self._href is not None:
            self.anchors.append((self._href, "".join(self._text)))
            self._href, self._text = None, []


def _assert_safe_email(subject: str, html: str) -> None:
    scan = _EmailScan()
    scan.feed(html)
    if scan.tags & {"form", "input", "textarea", "select"}:
        raise ValueError("No forms or input fields in email (G2)")
    body = f"{subject}\n{html}".lower()
    for p in _CRED_ASK:
        if p in body:
            raise ValueError(f"Email asks the recipient for credentials: {p!r} (G2)")
    for url in scan.urls:
        low = url.strip().lower()
        if low.startswith(("mailto:", "tel:", "cid:", "#")):
            continue
        if not low.startswith("https://"):
            raise ValueError(f"Email links/assets must be absolute https: {url!r} (G3)")
        host = urlparse(low).hostname or ""
        if not _host_ok(host) or urlparse(low).username is not None:
            raise ValueError(f"Shortened, numeric-host or credential-bearing URL: {url!r} (G3)")
    for href, text in scan.anchors:
        real = urlparse(href.strip().lower()).hostname or ""
        if not real:
            continue
        for m in _HOSTISH.finditer(text):
            if not _same_site(m.group(1).lower(), real):
                raise ValueError(f"Anchor text {m.group(1)!r} != real link host {real!r} (G3)")


async def send_email(*, to: str, subject: str, html: str, reply_to: Optional[str] = None) -> Optional[str]:
    _assert_safe_email(subject, html)
    payload = {"to": [to], "subject": subject, "html": html, "from_name": EMAIL_FROM_NAME}
    if reply_to:
        payload["contact_email"] = reply_to
    try:
        async with httpx.AsyncClient(timeout=30) as client:
            resp = await client.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=payload,
            )
        resp.raise_for_status()
        return resp.json().get("id")
    except httpx.HTTPStatusError as e:
        logger.error(f"Email send failed: {e.response.status_code} {e.response.text}")
        raise HTTPException(status_code=502, detail="Failed to send email")
    except Exception as e:
        logger.error(f"Email send error: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send email")


class ContactEnquiryCreate(BaseModel):
    working_on: str
    about: str
    explore: str
    name: str
    company: Optional[str] = ""
    email: str


class ContactEnquiry(ContactEnquiryCreate):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


def _enquiry_email_html(e: ContactEnquiry) -> str:
    def row(label, value):
        return (
            f'<tr><td style="padding:8px 24px 8px 0;font-family:Arial,sans-serif;'
            f'font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#8a6d3b;'
            f'vertical-align:top;white-space:nowrap">{escape(label)}</td>'
            f'<td style="padding:8px 0;font-family:Georgia,serif;font-size:15px;'
            f'color:#24070a">{value}</td></tr>'
        )

    about_html = escape(e.about).replace("\n", "<br>")
    return (
        '<table role="presentation" width="100%" style="background:#fdfbf7;padding:32px 0">'
        '<tr><td align="center">'
        '<table role="presentation" width="560" style="background:#ffffff;border:1px solid #e8ddc8;'
        'border-radius:12px;padding:32px">'
        '<tr><td>'
        '<p style="font-family:Georgia,serif;font-size:22px;color:#3b0c11;margin:0 0 4px">'
        'New enquiry</p>'
        '<p style="font-family:Arial,sans-serif;font-size:12px;color:#8a6d3b;margin:0 0 24px">'
        'via thevibecurator contact form</p>'
        '<table role="presentation" width="100%">'
        + row("Name", escape(e.name))
        + row("Company", escape(e.company) if e.company else "&mdash;")
        + row("Email", f'<a href="mailto:{escape(e.email)}" style="color:#5c131d">{escape(e.email)}</a>')
        + row("Working on", escape(e.working_on))
        + row("Wants to explore", escape(e.explore))
        + row("About the project", about_html)
        + "</table>"
        '<p style="font-family:Arial,sans-serif;font-size:12px;color:#8a6d3b;margin:24px 0 0">'
        "Reply directly to this email to respond to "
        + escape(e.name)
        + ".</p>"
        '<p style="font-family:Arial,sans-serif;font-size:11px;color:#b8a98a;margin:16px 0 0">'
        "Sent by The Vibe Curator website.</p>"
        "</td></tr></table></td></tr></table>"
    )


@api_router.get("/")
async def root():
    return {"message": "The Vibe Curator API"}


@api_router.post("/contact")
async def create_enquiry(input: ContactEnquiryCreate):
    enquiry = ContactEnquiry(**input.model_dump())
    await db.enquiries.insert_one(enquiry.model_dump())
    subject = f"New The Vibe Curator Enquiry — {enquiry.working_on}"
    email_id = await send_email(
        to=OWNER_EMAIL,
        subject=subject,
        html=_enquiry_email_html(enquiry),
        reply_to=enquiry.email,
    )
    logger.info(f"Enquiry {enquiry.id} emailed, email_id={email_id}")
    return {
        "status": "ok",
        "title": "Something interesting starts here.",
        "message": "I'll be in touch soon.",
        "location": "London · UK & International",
    }


@api_router.get("/contact", response_model=List[ContactEnquiry])
async def list_enquiries():
    return await db.enquiries.find({}, {"_id": 0}).to_list(1000)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
