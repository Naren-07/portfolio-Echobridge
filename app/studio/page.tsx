import Link from "next/link";
import { getStudioData } from "@/lib/data";
import StudioGalleryClient from "@/components/StudioGalleryClient";
import { ShieldCheck, CheckCircle2, ArrowUpRight, Mic, Volume2, Cpu, Lock } from "lucide-react";

export default function StudioPage() {
  const studio = getStudioData();

  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-3">
          ✦ Acoustic Infrastructure & Security
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#FBF3EE] font-normal leading-[1.1] mb-6">
          The Sound Behind the Story.
        </h1>
        <p className="text-[#CDBBB3] text-base sm:text-lg leading-relaxed font-sans font-light">
          {studio.subheadline} From multi-track ADR isolation bays to TPN-approved media encryption, our facilities are built for mission-critical OTT delivery.
        </p>
      </div>

      {/* Stats Counter Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#140E10] border border-[rgba(232,180,160,0.18)] mb-20 shadow-glow">
        {studio.stats.map((s, idx) => (
          <div key={idx} className="flex flex-col items-center text-center">
            <span className="font-display text-4xl sm:text-5xl font-semibold gold-gradient-text mb-1">
              {s.value}
            </span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#FBF3EE] mb-1">
              {s.label}
            </span>
            <span className="text-[11px] text-[#8C7A74] max-w-[160px]">
              {s.description}
            </span>
          </div>
        ))}
      </div>

      {/* 6 Capabilities Pillars */}
      <section className="mb-24">
        <div className="flex items-center gap-3 pb-6 border-b border-[rgba(232,180,160,0.18)] mb-12">
          <span className="w-3 h-3 rounded-full bg-[#D9967F]" />
          <h2 className="font-display text-3xl sm:text-4xl text-[#FBF3EE] font-medium">
            Core Production Strengths
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studio.capabilities.map((cap, idx) => (
            <div
              key={idx}
              className="glass-card p-7 rounded-2xl border border-[rgba(232,180,160,0.15)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] uppercase text-[#D9967F] tracking-widest block mb-3">
                  0{idx + 1} · CAPABILITY
                </span>
                <h3 className="font-display text-2xl text-[#FBF3EE] font-medium mb-3">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#CDBBB3] leading-relaxed font-sans">
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Lightbox Photo Gallery */}
      <section className="mb-24">
        <div className="flex items-center justify-between pb-6 border-b border-[rgba(232,180,160,0.18)] mb-12">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-1">
              ✦ Acoustic Bays & Suites
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-[#FBF3EE] font-medium">
              Studio Environment Gallery
            </h2>
          </div>
          <span className="text-xs font-mono text-[#8C7A74] hidden sm:block">
            Click any suite to expand
          </span>
        </div>

        <StudioGalleryClient gallery={studio.gallery} />
      </section>

      {/* TPN Security Certification Block */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#140E10] border border-[#D9967F]/30 flex flex-col sm:flex-row items-center gap-8 justify-between shadow-glow">
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-[#1D1417] border border-[#D9967F]/40 flex items-center justify-center shrink-0 text-[#D9967F]">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-display text-2xl text-[#FBF3EE] font-medium">
                TPN Approved Security Standards
              </h3>
              <ShieldCheck className="w-5 h-5 text-[#D9967F]" />
            </div>
            <p className="text-xs text-[#CDBBB3] max-w-xl font-sans leading-relaxed">
              Our partner facilities adhere strictly to Trusted Partner Network (TPN) digital security guidelines — ensuring unreleased episodic content, audio stems, and character materials remain protected under end-to-end encryption.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow shrink-0"
        >
          <span>Book Studio Session</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
