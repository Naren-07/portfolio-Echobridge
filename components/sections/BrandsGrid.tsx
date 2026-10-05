import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Client } from "@/lib/types";

interface BrandsGridProps {
  clients: Client[];
}

export function BrandsGrid({ clients }: BrandsGridProps) {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
      <SectionHeader
        tag="Client Roster // 11"
        title="BRANDS WE'VE FRAMED"
        description="A curated roster of forward-thinking automotive, technology, fashion, and cultural brands."
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-12">
        {clients.map((client) => (
          <Link
            key={client.id}
            href={`/clients/${client.slug}`}
            className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#ff2d2d]/50 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center font-display font-extrabold text-sm text-[#f5f5f5] group-hover:text-[#ff2d2d] group-hover:bg-[#ff2d2d]/10 transition-colors">
                {client.name.charAt(0)}
              </span>
              <ArrowUpRight className="w-4 h-4 text-[#8a8a8a] group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
            </div>

            <div>
              <h3 className="text-lg font-display font-bold text-white mb-1 group-hover:text-[#ff2d2d] transition-colors">
                {client.name}
              </h3>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#8a8a8a]">
                {client.industry}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
