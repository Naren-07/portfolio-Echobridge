import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BtsImage } from "@/lib/types";

interface OnSetSectionProps {
  btsImages: BtsImage[];
}

export function OnSetSection({ btsImages }: OnSetSectionProps) {
  const row1 = btsImages.slice(0, 4);
  const row2 = btsImages.slice(4, 8);

  return (
    <section className="py-24 sm:py-32 overflow-hidden border-b border-white/[0.08] bg-[#070707]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <SectionHeader
          tag="On Set // BTS Gallery 04"
          title="CELLULOID, RIGS & CINEMA IN THE WILD"
          description="Behind every 60-second commercial lies weeks of alpine rigging, optical calibration, and relentless pursuit of the impossible take."
        />
      </div>

      <div className="space-y-6">
        {/* Row 1: Leftward Marquee */}
        <Marquee direction="left" speed={38} pauseOnHover={true}>
          {row1.map((item) => (
            <div
              key={item.id}
              className="relative w-80 sm:w-96 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shrink-0 bg-[#0d0d0d]"
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                sizes="400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff2d2d] block mb-1">
                  {item.project}
                </span>
                <p className="text-xs text-white/90 font-light truncate">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </Marquee>

        {/* Row 2: Rightward Marquee */}
        <Marquee direction="right" speed={42} pauseOnHover={true}>
          {row2.map((item) => (
            <div
              key={item.id}
              className="relative w-80 sm:w-96 aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group shrink-0 bg-[#0d0d0d]"
            >
              <Image
                src={item.url}
                alt={item.caption}
                fill
                sizes="400px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff2d2d] block mb-1">
                  {item.project}
                </span>
                <p className="text-xs text-white/90 font-light truncate">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
