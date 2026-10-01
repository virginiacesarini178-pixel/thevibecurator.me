from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


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


@api_router.get("/")
async def root():
    return {"message": "The Vibe Curator API"}


@api_router.post("/contact")
async def create_enquiry(input: ContactEnquiryCreate):
    enquiry = ContactEnquiry(**input.model_dump())
    await db.enquiries.insert_one(enquiry.model_dump())
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
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
