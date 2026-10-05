import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { Service } from "@/lib/types";

interface ServicesOverviewProps {
  services: Service[];
}

export function ServicesOverview({ services }: ServicesOverviewProps) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <SectionHeader
          tag="Capabilities // 09"
          title="END-TO-END CINEMATIC PRODUCTION"
          description="From high-concept scriptwriting to international location filming, sound stages, DaVinci Resolve color suites, and Dolby Atmos audio delivery."
          className="mb-0"
        />

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
          <Button href="/#contact" variant="primary" size="md">
            <span>Ready to Brief Us?</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
          <Button href="/services" variant="outline" size="md">
            All Services
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#ff2d2d] mb-4">
                Phase {service.phaseNumber} // {service.tagline}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                {service.title}
              </h3>
              <p className="text-sm text-[#8a8a8a] leading-relaxed mb-6 font-light">
                {service.description}
              </p>
            </div>

            <ul className="space-y-2 border-t border-white/[0.06] pt-6 text-xs text-[#8a8a8a]">
              {service.deliverables.slice(0, 4).map((d, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#ff2d2d]" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
