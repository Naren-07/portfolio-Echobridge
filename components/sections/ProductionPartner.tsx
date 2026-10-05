import Link from "next/link";
import { ArrowUpRight, Camera, Cpu, Layers, Disc3 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ProductionPartner() {
  const capabilities = [
    {
      icon: Camera,
      title: "In-House Camera Packages",
      description: "ARRI Alexa 35, Phantom Flex4K, Sony Venice 2, and vintage Cooke Anamorphic glass.",
    },
    {
      icon: Cpu,
      title: "Motion Control & Chase Rigs",
      description: "Custom motorized camera dollies, sub-millimeter robotic arms, and alpine pursuit vehicles.",
    },
    {
      icon: Layers,
      title: "Acoustic Stages & Standing Sets",
      description: "12,000 sq ft sound stages equipped with full overhead lighting grids and cycloramas.",
    },
    {
      icon: Disc3,
      title: "Dolby Atmos Mastering Suites",
      description: "Dedicated 7.1.4 spatial audio monitoring, sound design suites, and DaVinci Resolve color theaters.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#8a8a8a] mb-6">
            <span className="rec-dot" />
            <span>Infrastructure // 10</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-6 leading-tight">
            IN-HOUSE PRODUCTION INFRASTRUCTURE
          </h2>

          <p className="text-base text-[#8a8a8a] leading-relaxed mb-8 font-light">
            We do not rely on third-party sub-rentals to guarantee our aesthetic standard. Echo Bridge owns and operates dedicated optical packages, high-speed camera sensors, and state-of-the-art post-production suites.
          </p>

          <Button href="/production-ecosystem" variant="secondary" size="md">
            <span>Explore The Ecosystem</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

        {/* Right Column: 2x2 Grid of capabilities (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#ff2d2d]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#ff2d2d] group-hover:border-[#ff2d2d] transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-display font-bold text-white mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#8a8a8a] leading-relaxed font-light">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
