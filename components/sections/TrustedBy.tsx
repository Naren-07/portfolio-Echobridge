"use client";

import { Marquee } from "@/components/ui/Marquee";
import { Client } from "@/lib/types";

interface TrustedByProps {
  clients: Client[];
}

export function TrustedBy({ clients }: TrustedByProps) {
  return (
    <section className="py-16 sm:py-20 border-b border-white/[0.08] bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8">
        <p className="text-xs font-mono uppercase tracking-widest text-[#8a8a8a] flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
          <span>Trusted by Visionary Brands & Global Networks</span>
          <span className="text-[10px] text-[#8a8a8a]/60 hidden sm:inline">
            (Hover to reveal colors)
          </span>
        </p>
      </div>

      <Marquee speed={30} pauseOnHover={true}>
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex items-center gap-3 px-8 py-4 rounded-xl bg-white/[0.02] border border-white/[0.06] shrink-0 group hover:border-[#ff2d2d]/40 transition-colors"
          >
            {/* Visual Icon Avatar */}
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-display font-black text-sm text-[#8a8a8a] group-hover:text-[#ff2d2d] group-hover:bg-[#ff2d2d]/10 transition-colors">
              {client.name.charAt(0)}
            </div>

            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-display font-bold text-[#8a8a8a] group-hover:text-white transition-colors">
                {client.name}
              </span>
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#8a8a8a]/60 group-hover:text-[#ff2d2d]/80 transition-colors">
                {client.industry}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
