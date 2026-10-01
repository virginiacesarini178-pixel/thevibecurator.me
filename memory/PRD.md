# THE VIBE CURATOR — PRD

## Original problem statement
Sophisticated, editorial, sensory one-page website for independent experiential design consultancy THE VIBE CURATOR (founder: Virginia Cesarini). Helps brands translate identity into memorable physical experiences (not digital marketing). Positioning: "I design experiences people come back for." / "You already have the story. I help people feel it." Aesthetic: fashion magazine meets theatre; burgundy/deep wine, warm cream, dark brown, gold; Limelight theatrical display titles + Cormorant Garamond serif + Plus Jakarta Sans; generous whitespace, tactile grain, rounded frames, slow elegant interactions. Sections: Hero, The Question, What I Actually Do (SPACE/SENSES/ATMOSPHERE/JOURNEY/INTERACTION/MEMORY/RETURN), How I Work (Vibe Audit / Vibe Blueprint / Experience Design), How Do You Know (4 evidence layers), Vibe Studies (speculative), How I See, The Person Behind the Vibe, Final Statement + conversational contact ("BRING ME SOMETHING YOU'RE BUILDING").

## User choices (locked)
- Contact email: hello@thevibecurator.me · LinkedIn: linkedin.com/in/thevibecurator · "London · UK & International"
- Title font: Limelight (theatrical). User has own photos to upload later — current imagery is curated placeholder editorial photography (Unsplash URLs in /app/frontend/src/data/images.js, from design_guidelines.json).
- Contact UX: CTA "START A CONVERSATION →" reveals 4-step conversational form (what are you working on → tell me about it → what to explore → details) with submit "LET'S TALK →" and confirmation "Something interesting starts here. / I'll be in touch soon. / London · UK & International". No corporate language.

## Architecture
- React (CRA/craco) + Tailwind + framer-motion + lenis (smooth scroll) + lucide. Backend: FastAPI + MongoDB (motor). No auth.
- /app/backend/server.py: POST /api/contact (saves enquiry {working_on, about, explore, name, company, email, id, created_at} to `enquiries` collection), GET /api/contact (list), GET /api/ health.
- /app/frontend/src/components/: Navbar, Hero (masked line reveal + parallax velvet image), Marquee (sectors), TheQuestion, WhatIDo (hover image reveal), HowIWork, HowDoYouKnow, VibeStudies, HowISee, Virginia, Contact (multi-step form), Footer, CustomCursor, Reveal (shared motion primitives), LogoMark (SVG, also favicon.svg).
- Design tokens: tailwind.config.js (colors ink/burgundy/wine/cream/creammute/espresso/gold/goldlight; fonts display/serif/sans). Grain overlay in index.css.

## Implemented
- 2026-07-01: Email delivery for enquiries via Emergent-managed Resend proxy. POST /api/contact now saves to MongoDB AND sends an email to OWNER_EMAIL (hello@thevibecurator.me) with all fields, subject "New The Vibe Curator Enquiry — [working_on]", Reply-To = visitor's email. Env keys in /app/backend/.env: EMERGENT_EMAIL_KEY, EMAIL_FROM_NAME, OWNER_EMAIL (server-side only). Email failure returns 502/500 so the frontend shows its existing error line instead of false success. Frontend untouched. Guardrail gate (_assert_safe_email) applied on every send per playbook. httpx added to requirements.txt. Verified: curl POST → 202 Accepted + email_id; UI form submission → confirmation + 202 + email_id. NOTE: actual inbox arrival could not be observed from the pod; user asked to confirm receipt (check spam). After Deploy, submit one test enquiry on the live site to confirm production delivery.
- 2026-07-01: Full 9-section editorial site, all copy verbatim from brief; Lenis momentum scroll; masked on-load hero reveal; slow marquee; custom gold cursor (pointer:fine only); hover micro-interactions; conversational 4-step contact form wired to MongoDB; original SVG logo mark + favicon; responsive 375/768/1366 verified.
- 2026-07-01: Real portrait of Virginia uploaded by user → saved locally at /app/frontend/public/images/virginia.webp (referenced in src/data/images.js). Replaced all Unsplash portrait usage.
- 2026-07-01: Concepts rebuild per user spec. React Router added: "/" home + "/concepts/wool-and-whispers" + "/concepts/the-bards-banquet" immersive editorial case-study pages. Home Vibe Studies section now shows two large concept cards (EXPLORE CONCEPT →). Case pages built from typed editorial blocks in /app/frontend/src/components/concepts/blocks.jsx; content in /app/frontend/src/data/concepts.js. Credibility rules honoured: everything labelled Independent Concept / Speculative Project; Wool & Whispers metrics labelled PROJECTED/ILLUSTRATIVE with visible disclaimer; Bard's Banquet has no invented metrics.
- 2026-07-01: Content sweep per user feedback. (a) Removed ALL em dashes from site copy (components, concepts data, index.html meta). (b) Bard's Banquet imagery replaced with historically accurate Shakespeare-era material: Bruegel "The Peasant Wedding" (1567, hero) and Dirck Hals "Banquet Scene in a Renaissance Hall" (1628, home card), both public domain via Wikimedia Commons; Globe Theatre + Hampton Court Great Hall photos (CC BY-SA 2.0, credit line rendered at bottom of Bard page via concept.credits in CaseStudyPage). (c) Wool & Whispers hero and image break replaced with fabric-only macro imagery (draped cashmere/wool, no people) — the red-lips portrait was removed. All replacement URLs verified HTTP 200 before use (design-agent Wikimedia URLs were 404; real files located via Commons API).
- 2026-07-01: Wool & Whispers denim-like images replaced per user feedback: hero now ribbed cashmere folds (photo-1634120455427), image break now burgundy chunky knit macro (photo-1731863891878), Tactile Immersion thumbnail now burgundy hand-knitting on needles (photo-1706864685919). All Unsplash, verified 200, clearly knitted, no people.
- 2026-07-01: Services (How I Work) section redesigned per user spec: scannable cards show only number, descriptor pill (UNDERSTAND/DEFINE/DESIGN), name, tagline, short description, EXPLORE →. Clicking EXPLORE expands a dark burgundy detail layer in place (staggered YOU RECEIVE deliverables + FORMAT / TIMELINE / BEST FOR), button becomes CLOSE with arrow rotating up; no separate page, no accordion chrome. Added progression line AUDIT → BLUEPRINT → DESIGN with the three questions and "connected, not a package" note, plus soft closing CTA ("Not sure where to start?" → START A CONVERSATION scrolls to contact). No prices, no salesy CTAs. Em-dash rule upheld in new copy.

## Verified
- POST /api/contact + GET list via curl (enquiry persisted).
- E2E form flow via Playwright: CTA → 4 steps → submit → confirmation shown.
- Screenshots at 375/768/1366 for hero, question, what-i-do, how-i-work, vibe-studies, virginia, contact confirmation.
- Concepts flow: home cards → wool page (senses, strategy flow, impact disclaimer) → next-concept → bard page (sequence, senses, flow) → CTA back to home #contact. Direct URL load of case pages works; mobile 375 case page verified; portrait renders in Virginia section.

## Backlog
- P2: Hover-reveal images in the What I Actually Do dimensions (SPACE/SENSES/etc.) were removed 2026-07-01 at user request ("no need"); text hover effects remain. Re-add only if user asks.
- P0: Replace remaining stock imagery with Virginia's own project photography if/when supplied (concepts use free stock per user choice).
- P1: Email notification to hello@thevibecurator.me on new enquiry (Resend integration).
- P1: Small private enquiries inbox page (would need auth).
- P2: SEO/OG meta expansion, sitemap; more concepts can be added by extending src/data/concepts.js; journal/notes section.

## Next tasks
1. Collect user's photos, replace placeholders.
2. Resend email notifications for enquiries.
3. Deploy when user is ready.
