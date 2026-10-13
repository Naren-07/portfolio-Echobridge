# 08: Interactive Project Brief, Talent Roster & API Handlers

**What to build:** The complete enquiry and talent ingestion pipeline: multi-step Project Brief Form on `/contact` (project type chips, language multi-select, volume slider, budget slider, file/link attachment), the `/join-roster` voice talent application form, `/api/contact` and `/api/roster` Route Handlers with Zod validation, local lead logging, and an instant pre-filled WhatsApp brief button fallback.

**Blocked by:** 01: Next.js Foundation & Design Token Engine

**Status:** ready-for-agent

- [ ] Interactive Project Brief Form on `/contact` with real-time reactive volume (episodes/minutes) and budget sliders
- [ ] Format pill selector (Dubbing, Voice-over, Localization, Subtitling, Micro-Drama, AI Content, YouTube, Brand Film)
- [ ] Language requirements multi-select picker from supported dialects
- [ ] Route Handler `/api/contact` with Zod schema validation, email notification dispatch (Resend/SMTP), and JSON lead logging
- [ ] Dedicated `/join-roster` page and `/api/roster` handler for voice artists and studio engineers
- [ ] Fallback "Instant WhatsApp Brief" button formatting the form inputs directly into a pre-filled WhatsApp message to `+91 8377086807`
