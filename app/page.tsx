import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Play, Sparkles, Globe, Mic, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { getFeaturedProjects, getServices, getStudioData, getPartners, getFaqs, getLanguages } from "@/lib/data";
import FaqAccordion from "@/components/FaqAccordion";

import { getOrganizationJsonLd, getFaqJsonLd } from "@/lib/seo";

export default function HomePage() {
  const featuredWork = getFeaturedProjects();
  const services = getServices();
  const studio = getStudioData();
  const partners = getPartners();
  const faqs = getFaqs();
  const languages = getLanguages();

  const orgJsonLd = getOrganizationJsonLd();
  const faqJsonLd = getFaqJsonLd(faqs);

  return (
    <div className="flex flex-col gap-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 px-5 sm:px-8 overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-b from-[#D9967F]/15 via-[#D4AF6A]/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
          {/* Top mono indicator */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#1D1417]/90 border border-[rgba(232,180,160,0.25)] mb-8 shadow-glow">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F]">
              REC · GLOBAL VOICE & AI PRODUCTION
            </span>
          </div>

          {/* Main H1 Headline */}
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl text-[#FBF3EE] font-normal leading-[1.05] tracking-tight max-w-5xl mb-6">
            Bridging Stories <br className="hidden sm:inline" />
            <span className="rose-gradient-text italic font-serif">Across Worlds.</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base sm:text-xl text-[#CDBBB3] max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            AI-powered content, localization, and broadcast-certified voice production — so your story resonates with native impact everywhere.
          </p>

          {/* Dual Primary CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow hover:scale-105 transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-medium tracking-wider text-[#FBF3EE] border border-[rgba(232,180,160,0.3)] hover:border-[#D9967F] hover:bg-[#1D1417] transition-all duration-300"
            >
              <Play className="w-4 h-4 text-[#D9967F] fill-current" />
              <span>Explore Selected Work</span>
            </Link>
          </div>

          {/* Key Metric Snapshot */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 pt-10 border-t border-[rgba(232,180,160,0.12)] w-full max-w-4xl">
            {studio.stats.map((s, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="font-display text-3xl sm:text-4xl font-semibold gold-gradient-text">
                  {s.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-[#8C7A74] mt-1 text-center">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. GENRE MARQUEE SECTION */}
      <section className="py-12 bg-[#140E10] border-y border-[rgba(232,180,160,0.12)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 mb-6 text-center">
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#8C7A74]">
            GENRES · STORYTELLING · AUDIO & VISUAL ADAPTATION
          </span>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-6">
            {[
              "ROMANCE & DRAMA",
              "THRILLER & CRIME",
              "MYTHOLOGY & FANTASY",
              "VOICE DUBBING",
              "AI MICRO-DRAMAS",
              "CULTURAL LOCALIZATION",
              "YOUTUBE SERIALS",
              "SPATIAL AUDIO",
              "ROMANCE & DRAMA",
              "THRILLER & CRIME",
              "MYTHOLOGY & FANTASY",
              "VOICE DUBBING",
              "AI MICRO-DRAMAS",
              "CULTURAL LOCALIZATION",
            ].map((genre, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full bg-[#1D1417] border border-[rgba(232,180,160,0.18)] whitespace-nowrap text-xs font-mono tracking-widest text-[#FBF3EE] flex items-center gap-3 shrink-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#D9967F]" />
                <span>{genre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ABOUT TEASER ON CREAM SURFACE */}
      <section className="py-24 px-5 sm:px-8 transition-colors" data-surface="cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#B76E79]">
                ✦ Studio Philosophy
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#2B1A14] font-normal leading-tight">
                One Vision. <br />
                <span className="italic font-serif">Infinite Stories.</span>
              </h2>
              <blockquote className="text-xl sm:text-2xl text-[#6B5249] font-display italic leading-relaxed border-l-2 border-[#B76E79] pl-6 my-2">
                &ldquo;We don’t just translate words — we translate emotions, timing, and cultural soul so every narrative feels born in that tongue.&rdquo;
              </blockquote>
              <p className="text-sm sm:text-base text-[#6B5249] leading-relaxed font-sans">
                EchoBridge Studio was founded by media broadcast veteran <strong>Sarika Sharma</strong> to bridge the gap between world-class content creators and regional audiences worldwide. From TPN-approved acoustic isolation rooms to cutting-edge AI pipelines, we deliver stories with unmatched cultural fidelity.
              </p>
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#B76E79] hover:text-[#2B1A14] transition-colors uppercase tracking-wider font-mono"
                >
                  <span>Meet Founder Sarika Sharma & Journey</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#B76E79]/30 shadow-2xl">
                <Image
                  src="/assets/founder.jpg"
                  alt="Founder Sarika Sharma"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-[#B76E79]/20 max-w-xs">
                <span className="font-mono text-[10px] text-[#9A8379] uppercase block mb-1">
                  Founder & Creative Director
                </span>
                <span className="font-display text-lg text-[#2B1A14] font-semibold block">
                  Sarika Sharma
                </span>
                <span className="text-xs text-[#6B5249]">
                  Zee · Star Network · PlanetCast
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICES SNAPSHOT */}
      <section className="py-24 px-5 sm:px-8 bg-[#0B0809]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-2">
                ✦ Two Pillars of Excellence
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FBF3EE] font-normal">
                Human-Led Craft. AI Speed.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D9967F] hover:text-[#F8E4DA] transition-colors"
            >
              <span>Explore All 7 Offerings</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <div
                key={service.slug}
                className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#D9967F]">
                      {service.pillarTitle}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#D9967F]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#FBF3EE] font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#CDBBB3] leading-relaxed mb-6">
                    {service.tagline}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-xs text-[#8C7A74] flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D9967F] shrink-0" />
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#D9967F] hover:text-[#F8E4DA] pt-4 border-t border-[rgba(232,180,160,0.1)] transition-colors"
                >
                  <span>Discuss This Service</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK HORIZONTAL RAIL */}
      <section className="py-24 px-5 sm:px-8 bg-[#140E10] border-t border-[rgba(232,180,160,0.12)]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-2">
                ✦ Portfolio Showcase
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FBF3EE] font-normal">
                Stories Carried Across Borders
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D9967F] hover:text-[#F8E4DA] transition-colors"
            >
              <span>View Full Archive ({featuredWork.length})</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredWork.slice(0, 4).map((project) => (
              <div
                key={project.id}
                className="group relative rounded-2xl overflow-hidden bg-[#1D1417] border border-[rgba(232,180,160,0.18)] hover:border-[#D9967F]/60 transition-all duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1417] via-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-10 bg-[#0B0809]/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[#FBF3EE] border border-[rgba(232,180,160,0.2)]">
                    {project.category} · {project.format}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs font-mono text-[#8C7A74] mb-2">
                    <span>{project.client}</span>
                    <span>{project.platform}</span>
                  </div>
                  <h3 className="font-display text-2xl text-[#FBF3EE] font-medium group-hover:text-[#D9967F] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#CDBBB3] line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(232,180,160,0.1)]">
                    <span className="text-xs font-mono text-[#D9967F]">
                      {project.languages.join(" · ")}
                    </span>
                    <Link
                      href={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs text-[#FBF3EE] group-hover:text-[#D9967F] transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. LANGUAGES MATRIX STRIP */}
      <section className="py-24 px-5 sm:px-8 bg-[#0B0809]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-5">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F]">
                ✦ 20+ Languages Matrix
              </span>
              <h2 className="font-display text-4xl sm:text-5xl text-[#FBF3EE] font-normal leading-tight">
                Every Story Deserves to Sound Local.
              </h2>
              <p className="text-sm text-[#CDBBB3] leading-relaxed font-sans">
                We cast, adapt, and record in 9 major Indian languages and 12 international languages with native accents, cultural humor transcreation, and sync precision.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Link
                  href="/languages"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] to-[#D9967F] shadow-glow"
                >
                  <Globe className="w-4 h-4" />
                  <span>Interactive World Map</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {languages.slice(0, 9).map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card p-4 rounded-xl flex flex-col justify-between"
                >
                  <span className="font-serif text-sm text-[#D9967F] block mb-1">
                    {lang.native}
                  </span>
                  <span className="font-display text-base text-[#FBF3EE] font-medium">
                    {lang.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PARTNERS ECOSYSTEM */}
      <section className="py-20 bg-[#140E10] border-y border-[rgba(232,180,160,0.12)]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-2">
              ✦ Ecosystem Collaborations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#FBF3EE] font-normal">
              Trusted by Streaming & Creator Platforms
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {partners.map((p, idx) => (
              <div
                key={idx}
                className="glass-card p-5 rounded-2xl flex flex-col items-center text-center justify-center hover:border-[#D9967F]/40 transition-colors"
              >
                <span className="font-display text-lg text-[#FBF3EE] font-semibold mb-1">
                  {p.name}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#8C7A74]">
                  {p.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <section className="py-24 px-5 sm:px-8 bg-[#0B0809]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-2">
              ✦ Producer & Client Inquiries
            </span>
            <h2 className="font-display text-4xl sm:text-5xl text-[#FBF3EE] font-normal">
              Frequently Asked Questions
            </h2>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* 9. BOTTOM CTA BAND */}
      <section className="py-24 px-5 sm:px-8 bg-gradient-to-b from-[#140E10] to-[#0B0809] border-t border-[rgba(232,180,160,0.15)] text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] mb-4">
            ✦ Fast-Track Your Production
          </span>
          <h2 className="font-display text-4xl sm:text-6xl text-[#FBF3EE] font-normal mb-6">
            Have a series, commercial, or channel to localize?
          </h2>
          <p className="text-[#CDBBB3] max-w-xl text-base mb-10 leading-relaxed font-sans">
            Submit your project parameters through our interactive brief form or connect directly with our founder.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow hover:scale-105 transition-all"
            >
              Start Interactive Brief
            </Link>
            <a
              href="https://wa.me/918377086807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium tracking-wider text-[#FBF3EE] border border-[rgba(232,180,160,0.3)] hover:border-[#D9967F] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#D9967F]" />
              <span>WhatsApp +91 8377086807</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
