import { getLanguages } from "@/lib/data";
import LanguageMap from "@/components/LanguageMap";
import GoldenIndiaMap from "@/components/GoldenIndiaMap";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

export default function LanguagesPage() {
  const languages = getLanguages();

  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D4AF6A] block mb-3 flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF6A]" />
          <span>Pan-India & Global Acoustic Coverage</span>
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#FBF6EE] font-normal leading-[1.1] mb-6">
          20+ Languages. <br />
          <span className="gold-gradient-text italic font-serif">Infinite Cultural Resonance.</span>
        </h1>
        <p className="text-[#D9CBBF] text-base sm:text-lg leading-relaxed font-sans font-light">
          A great story deserves to be understood everywhere. From the heart of India&apos;s linguistic tapestry to Europe, the Americas, and Southeast Asia, we ensure your characters sound authentic in every market.
        </p>
      </div>

      {/* Featured: Golden Map of India Regional Hubs */}
      <div className="mb-24">
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF6A] block mb-1">
            ✦ National Dialect Corridors
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#FBF6EE] font-medium">
            India Recording Bays & Regional Centers
          </h2>
        </div>
        <GoldenIndiaMap />
      </div>

      {/* Interactive Global Dialect Map Component */}
      <div className="mb-20">
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#D4AF6A] block mb-1">
            ✦ Global Dialect Matrix
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-[#FBF6EE] font-medium">
            International Language Casting & Script Transcreation
          </h2>
        </div>
        <LanguageMap languages={languages} />
      </div>


      {/* Cultural Nuance Quality Standards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 rounded-3xl bg-[#140E10] border border-[rgba(232,180,160,0.18)] mb-20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-2">
            01 · Colloquial Transcreation
          </span>
          <p className="text-xs text-[#CDBBB3] leading-relaxed">
            We adapt idiomatic expressions, humor, and cultural references so dialogues sound natural, not machine-translated.
          </p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-2">
            02 · Precision Lip-Sync Matching
          </span>
          <p className="text-xs text-[#CDBBB3] leading-relaxed">
            Our dialogue adapters match mouth movements, labial consonants, and phrase duration with frame-perfect precision.
          </p>
        </div>
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-2">
            03 · 100+ Native Voice Artists
          </span>
          <p className="text-xs text-[#CDBBB3] leading-relaxed">
            Every dialect is performed by vetted native voice talent directed by experienced regional language supervisors.
          </p>
        </div>
      </div>

      {/* CTA Band */}
      <div className="glass-card rounded-2xl p-8 sm:p-12 text-center border border-[rgba(232,180,160,0.3)] shadow-glow max-w-3xl mx-auto">
        <h3 className="font-display text-3xl sm:text-4xl text-[#FBF3EE] font-medium mb-3">
          Need a dialect not listed here?
        </h3>
        <p className="text-sm text-[#CDBBB3] mb-6 font-sans">
          Our international casting network auditions and sources bespoke native talent within 48 to 72 hours.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow"
        >
          <span>Request Custom Language Cast</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
