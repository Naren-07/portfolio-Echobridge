import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Service } from "@/lib/types";

interface ArchitectureSectionProps {
  services: Service[];
}

export function ArchitectureSection({ services }: ArchitectureSectionProps) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
      <SectionHeader
        tag="Creative Architecture // 03"
        title="THE 3-PHASE PRODUCTION ECOSYSTEM"
        description="We eliminate agency bloat. From the initial treatment to the final Dolby Atmos sound master, our production framework is built for surgical precision."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative flex flex-col justify-between p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#ff2d2d]/50 transition-all duration-500 group"
          >
            {/* Top Phase Number & Tagline */}
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/[0.06]">
                <span className="text-4xl sm:text-5xl font-display font-extrabold text-[#ff2d2d]">
                  {service.phaseNumber}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#8a8a8a]">
                  Phase {service.phase}
                </span>
              </div>

              <h3 className="text-2xl font-display font-bold text-[#f5f5f5] mb-2 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              <p className="text-xs font-mono text-[#8a8a8a] mb-6">
                {service.tagline}
              </p>

              <p className="text-sm text-[#8a8a8a] font-light leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5 mb-8">
                <p className="text-[10px] font-mono uppercase tracking-wider text-white/90">
                  Core Capabilities
                </p>
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#8a8a8a]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#ff2d2d] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Link */}
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center justify-between pt-6 border-t border-white/[0.06] text-xs font-mono uppercase tracking-wider text-white group-hover:text-[#ff2d2d] transition-colors"
            >
              <span>Explore Phase Deep-Dive</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
