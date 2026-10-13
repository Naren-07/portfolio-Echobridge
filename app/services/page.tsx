import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Sparkles, PenTool, Globe, Mic, Cpu, Smartphone, PlaySquare, Film } from "lucide-react";
import { getServices } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  PenTool: <PenTool className="w-5 h-5 text-[#D9967F]" />,
  Globe: <Globe className="w-5 h-5 text-[#D9967F]" />,
  Mic: <Mic className="w-5 h-5 text-[#D9967F]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#D9967F]" />,
  Smartphone: <Smartphone className="w-5 h-5 text-[#D9967F]" />,
  PlaySquare: <PlaySquare className="w-5 h-5 text-[#D9967F]" />,
  Film: <Film className="w-5 h-5 text-[#D9967F]" />,
};

export default function ServicesPage() {
  const services = getServices();
  const humanServices = services.filter((s) => s.pillar === "human");
  const aiServices = services.filter((s) => s.pillar === "ai");

  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="max-w-3xl mb-20">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-3">
          ✦ Comprehensive Capabilities
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#FBF3EE] font-normal leading-[1.1] mb-6">
          From Script to Screen to Every Language.
        </h1>
        <p className="text-[#CDBBB3] text-base sm:text-lg leading-relaxed font-sans font-light">
          We combine the nuanced artistry of seasoned screenwriters, native voice directors, and sound designers with high-velocity AI pipelines engineered for modern streamers and mobile audiences.
        </p>
      </div>

      {/* Pillar A: Human-Led Creative & Localization */}
      <section id="human-led" className="mb-24">
        <div className="flex items-center gap-3 pb-6 border-b border-[rgba(232,180,160,0.18)] mb-12">
          <span className="w-3 h-3 rounded-full bg-[#D9967F]" />
          <h2 className="font-display text-3xl sm:text-4xl text-[#FBF3EE] font-medium">
            Pillar I · Human-Led Creative & Localization Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {humanServices.map((service) => (
            <div
              key={service.slug}
              className="glass-card rounded-2xl p-8 flex flex-col justify-between border border-[rgba(232,180,160,0.18)] hover:border-[#D9967F]/50 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] flex items-center justify-center mb-6">
                  {ICON_MAP[service.icon] || <Sparkles className="w-5 h-5 text-[#D9967F]" />}
                </div>
                <h3 className="font-display text-2xl text-[#FBF3EE] font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-[#D9967F] font-mono uppercase tracking-wider mb-4">
                  {service.tagline}
                </p>
                <p className="text-sm text-[#CDBBB3] leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[rgba(232,180,160,0.1)] mb-6">
                  <h4 className="font-mono text-[11px] uppercase tracking-wider text-[#8C7A74] mb-3">
                    Deliverables & Outputs:
                  </h4>
                  <ul className="space-y-2.5">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#FBF3EE] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D9967F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-full text-xs font-semibold tracking-wider text-[#FBF3EE] bg-[#140E10] hover:bg-[#D9967F] hover:text-[#0B0809] border border-[rgba(232,180,160,0.2)] transition-all"
              >
                <span>Discuss {service.title}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Pillar B: AI-Powered Content Services */}
      <section id="ai-powered" className="mb-24">
        <div className="flex items-center gap-3 pb-6 border-b border-[rgba(232,180,160,0.18)] mb-12">
          <span className="w-3 h-3 rounded-full bg-[#D4AF6A]" />
          <h2 className="font-display text-3xl sm:text-4xl text-[#FBF3EE] font-medium">
            Pillar II · AI-Powered Content Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiServices.map((service) => (
            <div
              key={service.slug}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between border border-[rgba(232,180,160,0.18)] hover:border-[#D4AF6A]/50 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] flex items-center justify-center mb-6">
                  {ICON_MAP[service.icon] || <Sparkles className="w-5 h-5 text-[#D4AF6A]" />}
                </div>
                <h3 className="font-display text-2xl text-[#FBF3EE] font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-xs text-[#D4AF6A] font-mono uppercase tracking-wider mb-3">
                  {service.tagline}
                </p>
                <p className="text-xs text-[#CDBBB3] leading-relaxed mb-6 font-sans">
                  {service.description}
                </p>

                <div className="pt-4 border-t border-[rgba(232,180,160,0.1)] mb-6">
                  <h4 className="font-mono text-[10px] uppercase tracking-wider text-[#8C7A74] mb-3">
                    Deliverables:
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-[#FBF3EE] flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF6A] shrink-0 mt-0.5" />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider text-[#FBF3EE] bg-[#140E10] hover:bg-[#D4AF6A] hover:text-[#0B0809] border border-[rgba(232,180,160,0.2)] transition-all"
              >
                <span>Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Box */}
      <div className="glass-card rounded-3xl p-10 sm:p-14 text-center border border-[rgba(232,180,160,0.3)] shadow-glow">
        <h3 className="font-display text-3xl sm:text-5xl text-[#FBF3EE] font-normal mb-4">
          Need a tailored multi-format production pipeline?
        </h3>
        <p className="text-[#CDBBB3] text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans">
          We structure customized production agreements, episodic volume tiers, and dedicated recording bays for streaming networks and high-growth digital creators.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow hover:scale-105 transition-all"
        >
          <span>Submit Project Specifications</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
