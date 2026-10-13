# EchoBridge Studio — Portfolio Website
## Product Requirements Document (PRD) + Implementation Plan

| | |
|---|---|
| **Owner** | Sarika Sharma, Founder & Creative Director |
| **Product** | Cinematic portfolio website for EchoBridge Studio |
| **Reference** | oddframemedia.com (structure, flow, interactions — *not* copy or branding) |
| **Content source** | `EchoBridge_Studio_Portfolio_Sarika.pdf` + uploaded brand assets |
| **Theme** | Dark cinematic + Rose Gold / Champagne Gold |
| **Version** | 1.0 — 13 Oct 2026 |

---

## 1. Vision & Goals

### 1.1 One-line pitch
A cinematic, scroll-driven portfolio site that shows OTT platforms, YouTube creators and brands that EchoBridge Studio can **localize, voice, and produce** stories for global audiences — and makes it effortless to start a project.

### 1.2 Business goals
1. Convert visitors (OTT platforms, creators, agencies, brands) into **project enquiries**.
2. Establish credibility: partners worked with, studio infrastructure, language coverage, founder story.
3. Showcase **both** pillars: *human-led* localization/voice **and** *AI-powered* content production.
4. Give Sarika a site she can **update herself** (add work, partners, languages) without a developer.

### 1.3 Success metrics (first 90 days)
| Metric | Target |
|---|---|
| Enquiry form submissions | 15+ / month |
| Avg. time on page (Home) | > 1m 30s |
| Showreel play rate | > 30% of visitors |
| Lighthouse (mobile) | Perf ≥ 85, A11y ≥ 95, SEO ≥ 95 |
| LCP | < 2.5 s |

### 1.4 Non-goals (v1)
- No e-commerce / payments.
- No client login portal.
- No multi-language UI (site is English; the *languages supported* are showcased as content).

---

## 2. Target Audience

| Persona | Needs | Key pages |
|---|---|---|
| **OTT / micro-drama platform producers** (Story TV, Kuku TV, ShareChat, Dashverse, Master type) | Dubbing at volume, localization, fast turnaround | Services, Languages, Studio, Partners |
| **YouTube creators / channels** | Multi-language dubbing, voice, channel growth content | Services (YouTube), Languages, Work |
| **Brands & agencies** | Ads, promos, brand films, AI-assisted production | Services (AI + Brand), Work, Contact |
| **Voice artists / vendors** (secondary) | Join talent roster | Join Roster form |

---

## 3. Brand & Design System

### 3.1 Theme direction
The PDF uses yellow-gold on cream and black. The request is **rose gold or similar**. Recommendation: a **dark cinematic base** (like the reference site) with a **rose-gold → champagne gradient accent**. The existing gold EB logo sits well on dark; a rose-gold tinted variant is created for the nav/footer.

### 3.2 Colour tokens

```css
:root {
  /* Base */
  --bg-0:        #0B0809;   /* near-black, warm */
  --bg-1:        #140E10;   /* section alt */
  --bg-2:        #1D1417;   /* cards */
  --line:        rgba(232,180,160,0.18);

  /* Rose gold family */
  --rose-100:    #F8E4DA;   /* highlight / light text on dark */
  --rose-300:    #EBC2B0;   /* champagne rose */
  --rose-500:    #D9967F;   /* primary accent */
  --rose-600:    #B76E79;   /* deep rose gold */
  --gold-400:    #D4AF6A;   /* brand gold (from logo) */
  --gold-600:    #A9762F;

  /* Text */
  --text-hi:     #FBF3EE;
  --text-mid:    #CDBBB3;
  --text-low:    #8C7A74;

  /* Gradients */
  --grad-rose:   linear-gradient(135deg, #F1CDBE 0%, #D9967F 45%, #B76E79 100%);
  --grad-gold:   linear-gradient(135deg, #F2D58E 0%, #D4AF6A 50%, #A9762F 100%);
  --glow:        0 0 40px rgba(217,150,127,0.25);
}

/* Light/cream variant for About & Founder sections (matches PDF slides) */
[data-surface="cream"] {
  --bg-0: #FBF3EC; --bg-1:#F5E8DD; --bg-2:#FFFFFF;
  --text-hi:#2B1A14; --text-mid:#6B5249; --text-low:#9A8379;
}
```

### 3.3 Typography
| Role | Font | Notes |
|---|---|---|
| Display / headings | **Playfair Display** or **Cormorant Garamond** (serif, matches PDF "About Us" / "Meet the Founder") | Large, tight tracking, uppercase for hero |
| Body / UI | **Inter** or **DM Sans** | 16–18 px body |
| Script accent | **Great Vibes** / **Dancing Script** | Taglines only ("Travel Beyond Borders.") |
| Mono label | **JetBrains Mono** | Small labels like `REC`, `01 / 06` (reference-site vibe) |

### 3.4 Motion language
- Subtle **film-grain overlay** + slow **gold particle / light-streak** background (echoes PDF visuals).
- Scroll-triggered reveal (fade + 24 px rise), staggered.
- **Horizontal scroll showcase** for work (like the reference "Odd Archive 01/06").
- **Pinned process section** (Concept → Produce → Localize → Deliver).
- Cursor: custom ring that expands to "Play" over video cards.
- Respect `prefers-reduced-motion` — all heavy motion disabled.

### 3.5 Logo usage
| Asset | File | Use |
|---|---|---|
| Circular gold badge (black bg) | `Resized_logo.jpeg` | OG image, favicon source, footer seal |
| EB monogram, transparent | `Transparent.png` | Navbar, loader, section watermarks |
| Cream wide banner w/ tagline | `Plain_bg.png` | Hero / Services backdrop; can be cropped as page header |
| Founder photo | `My_Profile_Picture.jpeg` | About / Founder section |

> **Action:** Vectorize the EB monogram to SVG (trace, or ask designer) for crisp scaling and to allow rose-gold gradient fill via CSS.

---

## 4. Information Architecture

```
/                       Home (single long page with anchored sections)
/services               Services overview (3 pillars + AI)
/services/[slug]        (v1.1) Individual service detail
/work                   Portfolio / showreel library with filters
/work/[slug]            Case study page
/languages              Languages we support
/studio                 Studio & infrastructure
/about                  About + Founder
/partners               Partners & platforms (can live on Home too)
/contact                Contact + project brief form
/join-roster            Voice artist / vendor registration
/privacy  /terms        Legal
```

**Primary nav:** Work · Services · Languages · Studio · About · Contact + CTA button **"Start a Project"**.

---

## 5. Page-by-Page Requirements

### 5.1 Home `/`

| # | Section | Content (source) | Behaviour |
|---|---|---|---|
| 1 | **Loader** | EB monogram draws in, gold sweep | < 1.2 s, skippable, once per session |
| 2 | **Hero** | Headline: *"Bridging Stories Across Worlds."* Sub: *"AI-powered content, localization & voice for global audiences."* CTAs: **Watch Showreel**, **Explore Work** | Muted looping showreel / animated gold world-map background; "REC" mono label |
| 3 | **Genre/Capability marquee** | Romance · Thriller · Fantasy · Voice · Localization · Technology (from PDF cover slide) | Auto-scrolling poster cards using PDF cover artwork |
| 4 | **About teaser** | "One Vision. Infinite Stories." + philosophy quote: *We don't just translate words — we translate emotions…* | Cream surface section, link to /about |
| 5 | **Services snapshot** | 3 human-led pillars + 4 AI offerings (see 5.2) | Tabbed or card grid, hover reveal |
| 6 | **Selected Work** | 6 featured items | Horizontal pinned scroll, click → modal/case |
| 7 | **Languages strip** | Indian + International chips | Animated world map w/ pulsing nodes |
| 8 | **Partners** | Story TV, Kuku TV, ShareChat, Dashverse, Master, YouTube | Logo row, grayscale → color on hover |
| 9 | **Studio stats** | 100+ artists · TPN-approved network · High-volume capability · Multi-language · Fast turnaround | Count-up numbers |
| 10 | **Founder strip** | Photo + quote: *"Stories were never meant to stay in one language…"* | Link to /about |
| 11 | **FAQ** | 6–8 questions | Accordion, FAQ schema markup |
| 12 | **CTA + Brief form** | "Let's build stories that travel beyond borders." | Inline short form |
| 13 | **Footer** | Logo, nav, contact, socials, legal | — |

### 5.2 Services `/services`
Mirror the reference site's phased "Architecture" idea, adapted to EchoBridge.

**Pillar A — Creative & Localization Services (Human-Led)**
1. **Story Development** — Original IP Development, Script Development, Story Bibles, World Building, Pitch Deck Support
2. **Localization & Adaptation** — Translation, Cultural Adaptation, Dubbing Support, Subtitling, Multi-Language Content Support
3. **Voice & Audio Production** — Voice Over, Dubbing, Audio Drama, Sound Design, Mixing & Mastering

**Pillar B — AI-Powered Content Services**
1. **AI Content Production** — Long & short-form, script-to-screen, AI visuals & voice integration, multi-platform deliverables
2. **Micro Drama Production** — AI-powered micro dramas, episodic/serialized content, character & scene consistency, OTT & social ready
3. **YouTube Content Production** — Story content, script/voice/video, thumbnails/intros/outros, SEO-friendly editing, long-term creator support
4. **Brand & Commercial Films** — Brand films, product launch videos, promo campaigns, social ad creatives, commercial production

**UX:** Sticky left sub-nav (Human-Led / AI-Powered), right side scrolls cards; each card has icon, 1-line promise, bullet list, "Discuss this service" CTA that pre-fills the contact form.

### 5.3 Work `/work`
- **Filters:** Format (Micro Drama · Dubbing · Voice-over · Audio Drama · Brand Film · YouTube), Language, Platform.
- **Grid:** 16:9 and 9:16 cards (vertical content matters for micro dramas — reference site separates "Odd Films" vs "Odd Reels"; EchoBridge does the same: **Films** vs **Shorts/Micro Dramas**).
- **Card hover:** muted preview autoplay (desktop), tap to open on mobile.
- **Case study page `/work/[slug]`:** hero video, brief, what we did, languages, platform, credits, results, "More work" carousel.
- **Showreel modal:** full-screen, keyboard accessible.

> ⚠️ **Content gap:** The PDF has **no individual project samples**. Sarika needs to supply at least **6 pieces** (YouTube/Vimeo links, thumbnails, titles, brief credits). Until then, the site ships with clearly marked placeholder cards.

### 5.4 Languages `/languages`
- **Indian (9):** Hindi, Marathi, Tamil, Telugu, Kannada, Malayalam, Punjabi, Haryanavi, Gujarati — **+ more**
- **International (12):** Spanish, English (US & UK), Arabic, Thai, Bahasa (Indonesian), Portuguese, French, German, Italian, Turkish, Russian, Vietnamese — **+ more**
- Interactive world map (India highlighted) with glowing connection arcs; hover a language chip → highlights region.
- Native-script labels (हिंदी, मराठी, தமிழ், …) shown on chips.
- Optional **audio sample player** per language (v1.1).
- Quote: *"A great story deserves to be understood everywhere. We make that possible."*

### 5.5 Studio `/studio`
- Headline: **"The Sound Behind the Story."**
- 6 capability tiles: 100+ Voice & Dubbing Artists · TPN Approved Studio Network · High-Volume Dubbing · Professional Production Team · Multi-Language Content · Fast Turnaround
- Photo gallery with lightbox: Control Room, Production Console, Voice Recording, Studio Lobby, Facilities, Studio Rooms (extract from PDF slide 8 or replace with real photos).
- Sub-strip: *Record · Localize · Produce · Deliver*.

> ⚠️ **Verify before publishing:** "TPN Approved" is a specific industry security certification claim — confirm it is accurate and add proof/wording that matches the actual status. Also confirm "100+ artists" is current.

### 5.6 About & Founder `/about`
- **Studio story** (About Us text from PDF): premium content & voice production studio; localization, dubbing, subtitling, audio post; AI-assisted workflows for micro dramas, ads, promos; philosophy quote.
- **Meet the Founder — Sarika Sharma**: journey from media operations (Zee Entertainment Enterprises Ltd., Star Network / Star India Pvt. Ltd., PlanetCast) → localization, voice production, creative development → EchoBridge Studio. Photo + signature + Founder's Note.
- **Values strip:** Creativity · Cultural Insight · Voice Excellence.
- **Timeline** (animated) of her journey.

### 5.7 Partners (section on Home + `/partners`)
- Story TV, Kuku TV, ShareChat, Dashverse, Master + YouTube channel collaborations (storytelling, entertainment, family, challenge, creator-led).
- Each tile: logo, 1–2 line descriptor (from PDF).
- Tagline: *One Studio. Many Partners. Infinite Stories.*

> ⚠️ **Legal:** Third-party logos need permission (or a "Platforms we've worked with" disclaimer). Confirm each partner is OK being displayed.

### 5.8 Contact `/contact`
- **Contact cards:** Call **+91 8377086807** (business & project enquiries) · Email **echobridge.studio6@gmail.com** (localization & production queries) · LinkedIn **linkedin.com/in/sarikasharma06** (partnerships & networking).
- **Project Brief Form** (inspired by the reference site's interactive brief):
  1. Name, email, company, phone/WhatsApp
  2. **Project type** chips: Dubbing · Voice-over · Localization · Subtitling · Micro Drama · AI Content · YouTube · Brand Film · Other
  3. **Languages needed** (multi-select from list)
  4. **Volume** (episodes / minutes) slider
  5. **Budget range** (optional slider)
  6. Timeline, message, file/link attachment
  7. Consent checkbox
- **Alt CTAs:** "Prefer WhatsApp?" button, "Book a call" (Calendly/Cal.com embed, optional).
- Footer line: *Working across time zones · Founder-led creative studio · Quality. Culture. Impact.*

### 5.9 Join Roster `/join-roster`
Voice artist / vendor form: name, languages, gender/voice type, demo reel upload (≤ 20 MB or link), city, experience, rate (optional), consent. Goes to a separate Airtable/Sheet tab.

### 5.10 Global elements
- Sticky nav with scroll-hide; mobile full-screen menu.
- Floating **WhatsApp** button.
- Cookie/consent banner (only if analytics used that needs it).
- 404 page with brand art.
- Custom 'Thank you' page post-submit (use "Thank You" slide art).

---

## 6. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| F1 | Responsive layout 360 px → 2560 px | P0 |
| F2 | Hero showreel (self-hosted MP4/WebM or Vimeo/YouTube privacy mode) with poster fallback | P0 |
| F3 | Work grid with filters + case-study pages | P0 |
| F4 | Project brief form with validation, spam protection, email notification + auto-reply | P0 |
| F5 | Languages interactive map/chips | P0 |
| F6 | Services page with 2 pillars / 7 offerings | P0 |
| F7 | Studio gallery + lightbox | P1 |
| F8 | Founder/About with timeline | P0 |
| F9 | Partners logo wall | P0 |
| F10 | FAQ accordion + FAQPage JSON-LD | P1 |
| F11 | Join Roster form with file/link | P1 |
| F12 | Light CMS so Sarika can edit work/partners/languages | P1 |
| F13 | Audio sample players per language | P2 |
| F14 | Blog / "Stories Behind the Stories" | P2 |
| F15 | Downloadable PDF credentials deck (existing portfolio PDF) | P1 |
| F16 | Analytics (privacy-friendly) + event tracking on CTAs/form | P0 |
| F17 | Dark/cream surface switching per section | P1 |
| F18 | Multi-language landing pages (Hindi etc.) | P3 |

---

## 7. Non-Functional Requirements

- **Performance:** Next/Image optimization, AVIF/WebP, lazy-load below fold, video poster-first, font subsetting, JS budget < 200 KB gzipped on Home.
- **Accessibility:** WCAG 2.1 AA — contrast (rose-gold on dark ≥ 4.5:1 for text), focus states, captions for videos, alt text, reduced motion.
- **SEO:** Per-page metadata, OG/Twitter cards (use circular badge), `sitemap.xml`, `robots.txt`, JSON-LD (`Organization`, `LocalBusiness`/`ProfessionalService`, `FAQPage`, `VideoObject`).
  Target keywords: *dubbing studio India, voice-over studio, content localization India, micro drama production, AI content production, OTT dubbing services, regional language dubbing.*
- **Security/Privacy:** HTTPS, form rate-limit + honeypot + Turnstile/hCaptcha, no PII in logs, privacy policy (India DPDP Act aware).
- **Browser support:** Last 2 versions Chrome/Safari/Firefox/Edge; iOS Safari 16+.
- **Reliability:** Static-first (SSG/ISR) for near-100 % uptime.

---

## 8. Technical Architecture

### 8.1 Recommended stack
| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 14+ (App Router) + TypeScript** | SSG/ISR, SEO, same stack as reference |
| Styling | **Tailwind CSS** + CSS variables (tokens above) | Fast theming |
| Animation | **Framer Motion** + **GSAP ScrollTrigger** (pinned/horizontal scroll) + **Lenis** smooth scroll | Cinematic feel |
| 3D/FX (optional) | `@react-three/fiber` light-streak/particles, or canvas particles | Keep lightweight |
| CMS | **Sanity** (free tier) *or* **Notion/Airtable** if simpler | Editable work, partners, languages, FAQs |
| Forms | Next.js Route Handler → **Resend** (email) + **Airtable/Google Sheets** (lead log) | Free/cheap |
| Spam | Cloudflare Turnstile | Privacy-friendly |
| Media | **Cloudinary** or Vercel Blob for images; **Vimeo/YouTube** or **Mux/Bunny Stream** for video | Offload bandwidth |
| Analytics | **Plausible** or GA4 + Vercel Analytics | Track funnel |
| Hosting | **Vercel** + custom domain (e.g. `echobridgestudio.in` / `.com`) | Easy CI/CD |
| Code quality | ESLint, Prettier, Husky, Playwright smoke tests | — |

> **Simpler fallback:** if no developer is available, build with **Framer** or **Webflow** using the same IA/design tokens. This PRD still applies.

### 8.2 Folder structure
```
echobridge-site/
├─ app/
│  ├─ (marketing)/
│  │  ├─ page.tsx                # Home
│  │  ├─ services/page.tsx
│  │  ├─ work/page.tsx
│  │  ├─ work/[slug]/page.tsx
│  │  ├─ languages/page.tsx
│  │  ├─ studio/page.tsx
│  │  ├─ about/page.tsx
│  │  ├─ contact/page.tsx
│  │  └─ join-roster/page.tsx
│  ├─ api/
│  │  ├─ contact/route.ts
│  │  └─ roster/route.ts
│  ├─ layout.tsx  globals.css  not-found.tsx  sitemap.ts  robots.ts
├─ components/
│  ├─ layout/ (Navbar, Footer, MobileMenu, WhatsAppFab, Loader)
│  ├─ sections/ (Hero, MarqueeCards, AboutTeaser, ServicesGrid, WorkRail,
│  │             LanguageMap, PartnersWall, StudioStats, FounderStrip, Faq, CtaBand)
│  ├─ ui/ (Button, Chip, Card, Modal, Accordion, Slider, VideoPlayer, Lightbox)
│  └─ fx/ (GrainOverlay, ParticleField, CursorRing, Reveal)
├─ content/                      # local JSON/MDX until CMS is wired
│  ├─ services.json  languages.json  partners.json  faq.json  work.json  studio.json
├─ lib/ (seo.ts, validators.ts, analytics.ts, email.ts)
├─ public/
│  ├─ brand/ (logo-badge.jpg, eb-monogram.png, eb-monogram.svg, banner-cream.png)
│  ├─ founder/sarika.jpg
│  ├─ pdf-extract/ (slide-01.webp … slide-10.webp, cropped art)
│  ├─ partners/ (storytv.svg, kukutv.svg, sharechat.svg, dashverse.svg, master.svg, youtube.svg)
│  ├─ studio/ (control-room.webp, console.webp, …)
│  └─ og/og-cover.jpg
├─ styles/tokens.css
└─ tests/ (e2e)
```

### 8.3 Content data models (JSON / CMS schema)

```ts
type Service = {
  slug: string; pillar: 'human' | 'ai';
  title: string; tagline: string; icon: string;
  bullets: string[]; image?: string;
};

type WorkItem = {
  slug: string; title: string; client?: string;
  format: 'film' | 'vertical' | 'audio' | 'dubbing' | 'brand';
  aspect: '16:9' | '9:16';
  languages: string[]; platform?: string;
  videoUrl: string; poster: string; summary: string;
  credits?: { role: string; name: string }[];
  featured: boolean; order: number;
};

type Language = { name: string; native?: string; group: 'indian' | 'international'; code?: string; sampleAudio?: string };
type Partner  = { name: string; logo: string; blurb: string; url?: string };
type Faq      = { q: string; a: string };
type Lead     = { name; email; phone?; company?; projectType[]; languages[]; volume?; budget?; timeline?; message; createdAt };
```

### 8.4 API endpoints
| Route | Method | Behaviour |
|---|---|---|
| `/api/contact` | POST | Validate (zod) → Turnstile verify → save to Airtable/Sheet → email Sarika via Resend → auto-reply to sender |
| `/api/roster` | POST | Same, plus file link/upload (signed URL) |

---

## 9. Content Inventory & Extraction Plan (from the PDF)

The PDF has **10 slides**, all as images. Extract and reuse:

| Slide | Content | Use on site | Extract |
|---|---|---|---|
| 1 Cover | Genre posters: Romance, Thriller, Fantasy, Voice, Localization, Technology | Home marquee/hero | Crop each of 6 posters individually |
| 2 About Us | Copy + philosophy + hero art (couple, globe, mic) | About page, Home teaser | Crop right artwork; **retype** copy (don't use screenshots for text) |
| 3 Meet the Founder | Bio + founder's note + photo | About | Use `My_Profile_Picture.jpeg`; retype text |
| 4 Creative & Localization | 3 pillars with images | Services | Crop 3 card images (story desk, globe, mic console) |
| 5 AI-Powered Services | 4 offerings with images | Services | Crop 4 card images |
| 6 Languages | Map + two lists | Languages | Re-create map in SVG; retype lists |
| 7 Partners | 5 platforms + YouTube | Partners | Obtain official logos; retype blurbs |
| 8 Studio | Capabilities + 6 studio photos | Studio | Crop 6 photos (replace with real ones when possible) |
| 9 Contact | Phone, email, LinkedIn | Contact, Footer | Retype |
| 10 Thank You | Closing art | Footer CTA / form success page | Crop background |

**Extraction commands**
```bash
# 1) Rasterize each slide at high DPI
pdftoppm -r 200 -png EchoBridge_Studio_Portfolio_Sarika.pdf slide

# 2) Convert to WebP/AVIF for web
for f in slide-*.png; do cwebp -q 82 "$f" -o "${f%.png}.webp"; done

# 3) Crop regions (ImageMagick) — example
magick slide-01.png -crop 300x520+210+215 +repage poster-romance.png
```
> Tip: the slide art appears AI-generated at modest resolution. For hero-size use, upscale (e.g., Real-ESRGAN) or regenerate at 2–4K. Keep **text as real HTML text** everywhere (SEO + accessibility).

---

## 10. Copy Deck (starter — editable)

**Hero H1:** Bridging Stories Across Worlds.
**Hero sub:** AI-powered content, localization and voice — so your story feels native everywhere.
**Primary CTA:** Start a Project  **Secondary:** Watch Showreel

**Section headings (reference-site style, but EchoBridge voice):**
- *Selected Work* — "Stories we've carried across borders."
- *Services* — "From script to screen to every language."
- *Languages* — "Every story deserves to sound local."
- *Studio* — "The sound behind the story."
- *Partners* — "Our partners. Shared vision."
- *Contact* — "Let's build stories that travel beyond borders."

**Footer tagline:** One Vision. Infinite Stories.

**FAQ starters**
1. What does EchoBridge Studio do?
2. Which languages do you dub and localize into?
3. Do you work with OTT platforms and YouTube channels?
4. How does AI fit into your process — is everything AI-generated?
5. What is your typical turnaround for a dubbing project?
6. Can you handle high-volume series (100+ episodes)?
7. How do I share my content securely?
8. How do I get a quote?

> ⚠️ Note on messaging: the PDF labels the first services "Human-Led" and the second "AI-Powered." Keep that split clear on the site so clients know exactly which is which.

---

## 11. Implementation Plan

### Phase 0 — Discovery & Content (Week 0–1)
- [ ] Confirm domain name, email (prefer a business email over Gmail, e.g. `hello@echobridge…`), WhatsApp number.
- [ ] Collect **≥ 6 work samples** (links + thumbnails + credits), showreel (60–90 s), partner logos + permissions.
- [ ] Verify claims (TPN, 100+ artists, turnaround).
- [ ] Decide CMS (Sanity vs. JSON).
- [ ] Approve theme (rose-gold palette above) on a one-page moodboard.

### Phase 1 — Design (Week 1–2)
- [ ] Design tokens + typography in Figma.
- [ ] Desktop + mobile wireframes for Home, Services, Work, Languages, Studio, About, Contact.
- [ ] High-fidelity Home + one inner page; motion specs.
- [ ] Review → sign-off.

### Phase 2 — Foundation (Week 2)
- [ ] Repo setup (Next.js + TS + Tailwind), CI on Vercel (preview per PR).
- [ ] Tokens, fonts, global layout, Navbar/Footer, Loader, grain overlay.
- [ ] Asset pipeline: extract PDF slides, optimize, SVG logo.

### Phase 3 — Core Pages (Week 3–4)
- [ ] Home sections 1–13.
- [ ] Services (human + AI pillars).
- [ ] Work grid + filters + case-study template + showreel modal.
- [ ] Languages (map + chips).
- [ ] Studio, About/Founder, Partners.

### Phase 4 — Forms & Integrations (Week 4–5)
- [ ] Contact brief form + API + Turnstile + Resend + lead log.
- [ ] Join Roster form.
- [ ] Analytics + event tracking.
- [ ] WhatsApp FAB, Calendly (optional).

### Phase 5 — Polish & QA (Week 5–6)
- [ ] Motion tuning, reduced-motion fallback.
- [ ] SEO: metadata, JSON-LD, sitemap, OG images.
- [ ] Accessibility audit (axe, keyboard, screen reader pass).
- [ ] Performance pass (Lighthouse, image/video budgets).
- [ ] Cross-browser/device testing (iOS Safari, Android Chrome, desktop).
- [ ] Legal pages + cookie banner.

### Phase 6 — Launch (Week 6)
- [ ] DNS + SSL, redirects, 404.
- [ ] Submit to Google Search Console, Bing; create Google Business Profile.
- [ ] Smoke test forms in production; set up alerts.
- [ ] Announce on LinkedIn / Instagram / YouTube.

### Phase 7 — Post-launch (ongoing)
- [ ] Add case studies monthly; blog "Stories Behind the Stories."
- [ ] Audio samples per language; per-service detail pages.
- [ ] A/B test hero CTA and form length.
- [ ] Regional landing pages (Hindi, Tamil…) for SEO.

### Timeline summary
| Week | Milestone |
|---|---|
| 0–1 | Content + decisions locked |
| 1–2 | Design approved |
| 2 | Foundation live on preview URL |
| 3–4 | All core pages built |
| 4–5 | Forms, analytics, integrations |
| 5–6 | QA, SEO, a11y, performance |
| 6 | **Launch** |

---

## 12. Task Breakdown (build checklist for a developer / AI coding agent)

```
[ ] T01  Init Next.js + TS + Tailwind + ESLint/Prettier
[ ] T02  Add tokens.css + Tailwind theme mapping
[ ] T03  Load fonts (next/font): Playfair/Cormorant, Inter, Great Vibes, JetBrains Mono
[ ] T04  Layout: Navbar (scroll-hide), MobileMenu, Footer, WhatsAppFab
[ ] T05  FX: GrainOverlay, ParticleField (canvas), CursorRing, Reveal wrapper, Lenis
[ ] T06  Loader with EB monogram SVG stroke animation
[ ] T07  Hero (video bg + poster fallback + CTAs)
[ ] T08  MarqueeCards (6 genre posters)
[ ] T09  AboutTeaser (cream surface)
[ ] T10  ServicesGrid + /services page (pillar sub-nav)
[ ] T11  WorkRail (GSAP horizontal pin) + /work grid + filters
[ ] T12  VideoPlayer + showreel Modal
[ ] T13  /work/[slug] case-study template
[ ] T14  LanguageMap (SVG world + India highlight) + chips
[ ] T15  PartnersWall
[ ] T16  StudioStats (count-up) + Gallery + Lightbox
[ ] T17  FounderStrip + /about timeline
[ ] T18  FAQ accordion + FAQPage JSON-LD
[ ] T19  Contact page + BriefForm (multi-step) + zod validation
[ ] T20  /api/contact (Turnstile, Resend, Airtable/Sheet)
[ ] T21  /join-roster + /api/roster
[ ] T22  SEO: metadata helper, sitemap, robots, JSON-LD (Organization, FAQ, VideoObject)
[ ] T23  Analytics + custom events (cta_click, form_submit, showreel_play)
[ ] T24  A11y pass + reduced-motion
[ ] T25  Performance pass (images, video, bundle analysis)
[ ] T26  Playwright smoke tests (nav, forms, 404)
[ ] T27  Legal pages + cookie banner
[ ] T28  Deploy to Vercel, connect domain, production checks
```

---

## 13. Acceptance Criteria (key flows)

**Enquiry flow**
- Given a visitor on any page, when they click **Start a Project**, they reach the brief form in ≤ 1 click.
- Given valid input, when submitted, the lead appears in the sheet/Airtable, Sarika gets an email within 1 minute, and the visitor sees a branded thank-you state + receives an auto-reply.
- Given invalid/spam input, the form blocks submission with clear inline errors and no server-side record is created.

**Work browsing**
- Filters update the grid without page reload and are shareable via URL query.
- Every card opens a case study or video modal; Esc closes; focus returns to the trigger.

**Performance & a11y**
- Home mobile Lighthouse Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95.
- All interactive elements keyboard reachable; all images have alt text; videos have a pause control.

---

## 14. Risks & Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| No portfolio samples yet | Weak proof, low conversion | Collect 6+ pieces before design freeze; ship "Coming soon" cards only as last resort |
| Partner logos used without permission | Legal / relationship risk | Get written OK; add "platforms we've worked with" wording |
| Unverifiable claims (TPN, 100+) | Credibility | Verify and keep wording precise |
| AI-generated imagery looks generic / low-res | Brand dilution | Upscale or replace with real studio/behind-the-scenes photos |
| Heavy animation hurts mobile perf | Bounce | Motion budget, lazy FX, reduced-motion, static fallback |
| Gmail contact address looks less premium | Trust | Move to domain email before launch |
| Scope creep (blog, audio samples, i18n) | Delay | Locked as P2/P3, post-launch |
| Reference-site similarity | Brand/IP | Borrow *patterns* (horizontal rail, brief form, phased process), not copy, layout pixel-for-pixel, or assets |

---

## 15. Open Questions for Sarika

1. **Domain & email:** Which domain? Can we set up `hello@yourdomain`?
2. **Work samples:** Which 6–10 projects can be shown publicly (and which are under NDA)?
3. **Showreel:** Do you have one, or should we cut one from available samples?
4. **Partner logos:** Are you comfortable showing all 5 platforms + YouTube?
5. **Studio photos:** Are the studio images in the PDF real or illustrative? Can you share real photos?
6. **Pricing:** Show packages/"starting from", or keep "Request a quote"?
7. **Rose-gold vs gold:** Go fully rose-gold, or keep brand gold as the hero accent with rose-gold as support? (Recommended: gold logo + rose-gold UI accents.)
8. **Voice-artist roster page:** Needed at launch?
9. **WhatsApp number:** Same as +91 8377086807?
10. **Languages:** Any to add/remove from the list?

---

## 16. Appendix A — Reference-site Pattern Map

| oddframemedia.com pattern | EchoBridge adaptation |
|---|---|
| Fullscreen looping showreel hero + "REC" label | Hero with showreel + rose-gold world-map glow + "REC" mono label |
| "Odd Films" vs "Odd Reels" (16:9 vs 9:16) | **Films** vs **Shorts & Micro Dramas** rails |
| "Odd Archive 01/06" scrolling cards | "EchoBridge Archive 01/06" pinned horizontal rail |
| 3-phase Architecture (Concept / Shoot / Finish) | 4-step flow: **Adapt → Record → Mix → Deliver**, plus Human-Led vs AI-Powered pillars |
| "Trusted By" swipe logo deck | Partners marquee (grayscale → color) |
| In-house production partner block | Studio network block (TPN, artists, rooms) |
| Interactive brief form (project type chips + budget slider) | Brief form with project-type chips, language multi-select, volume + budget sliders |
| "Tired of forms? Coffee?" call link | "Prefer to talk? Call / WhatsApp us" |
| FAQ accordion | FAQ accordion with schema |
| Blog "The Odd Treatment" | (P2) "Stories Behind the Stories" |
| Join Vendor Roster | Join Voice Artist / Vendor Roster |

## 17. Appendix B — Quick SEO Metadata (Home)

```
<title>EchoBridge Studio | Dubbing, Localization & AI Content Production</title>
<meta name="description" content="EchoBridge Studio is a premium content and voice production studio — dubbing, voice-over, localization, subtitling and AI-powered micro dramas for OTT platforms, YouTube creators and brands.">
og:image  → /og/og-cover.jpg (1200×630, circular gold badge on dark)
theme-color → #0B0809
```

---

*End of document.*
