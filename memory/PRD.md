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

## Implemented (2026-07-01)
- Full 9-section editorial site, all copy verbatim from brief; Lenis momentum scroll; masked on-load hero reveal; slow marquee; custom gold cursor (pointer:fine only); hover micro-interactions; conversational 4-step contact form wired to MongoDB; original SVG logo mark + favicon; responsive 375/768/1366 verified.

## Verified
- POST /api/contact + GET list via curl (enquiry persisted).
- E2E form flow via Playwright: CTA → 4 steps → submit → confirmation shown.
- Screenshots at 375/768/1366 for hero, question, what-i-do, how-i-work, vibe-studies, virginia, contact confirmation.

## Backlog
- P0: Swap in Virginia's real photography/portrait when uploaded (replace URLs in src/data/images.js).
- P1: Email notification to hello@thevibecurator.me on new enquiry (Resend integration).
- P1: Small private enquiries inbox page (would need auth).
- P2: SEO/OG meta expansion, sitemap; more Vibe Studies entries; journal/notes section.

## Next tasks
1. Collect user's photos, replace placeholders.
2. Resend email notifications for enquiries.
3. Deploy when user is ready.
