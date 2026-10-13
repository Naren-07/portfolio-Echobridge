# 09: FAQ Accordions, SEO Meta & Schema Markup

**What to build:** Content credibility and discovery layer: 8 FAQ items with accessible interactive accordions on Homepage and dedicated views, JSON-LD structured data (`Organization`, `ProfessionalService`, `FAQPage`, `VideoObject`), per-route metadata, Open Graph & Twitter preview cards, dynamic `sitemap.xml`, and `robots.txt`.

**Blocked by:** 02: Home Cinematic Core & Brand Visuals, 03: Services Pillar System & Dedicated Page, 04: Languages World Matrix & Dedicated Page, 05: Curated Showcase Rails, Filter Library & Case Studies, 06: Studio Infrastructure, Stats & Lightbox Gallery, 07: Founder Story, Timeline & About Experience, 08: Interactive Project Brief, Talent Roster & API Handlers

**Status:** completed

- [x] Typed FAQ dataset in `content/faq.json` addressing 8 essential client queries (dubbing turnaround, AI integration, OTT workflow, NDA security)
- [x] Accessible accordion component with smooth height animation and Schema `FAQPage` markup
- [x] Comprehensive SEO metadata helper (`lib/seo.ts`) generating page titles, descriptions, and Open Graph cards using the circular EB badge
- [x] JSON-LD structured data for `Organization` and `ProfessionalService` including studio contact info, address, and social links
- [x] Dynamic `app/sitemap.ts` and `app/robots.ts` indexing all public routes and dynamic `/work/[slug]` pages
