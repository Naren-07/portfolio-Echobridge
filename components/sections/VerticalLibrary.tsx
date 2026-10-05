"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Eye } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reel } from "@/lib/types";

interface VerticalLibraryProps {
  reels: Reel[];
}

export function VerticalLibrary({ reels }: VerticalLibraryProps) {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  // Take top 4 vertical reels
  const displayReels = reels.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08] bg-[#060606]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <SectionHeader
          tag="Vertical Archive // 08"
          title="NATIVE 9:16 COMMERCIAL REELS"
          description="Crafted natively for vertical storytelling. High-retention cuts that transform commercial messaging into viral brand equity."
          className="mb-0"
        />

        <Link
          href="/reels"
          className="mt-6 sm:mt-0 text-xs font-mono uppercase tracking-wider text-[#ff2d2d] hover:underline flex items-center gap-1.5 shrink-0"
        >
          <span>View All Vertical Work</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayReels.map((reel) => (
          <div
            key={reel.id}
            onClick={() =>
              setSelectedVideo({ url: reel.videoUrl, title: reel.title })
            }
            className="group relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-[#0d0d0d] cursor-pointer shadow-xl"
            data-cursor="play"
          >
            <Image
              src={reel.thumbnailUrl}
              alt={reel.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/20 group-hover:opacity-70 transition-opacity" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ff2d2d] group-hover:border-[#ff2d2d]">
                <Play className="w-4 h-4 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Top Views Badge */}
            {reel.views && (
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-white">
                <Eye className="w-3 h-3 text-[#ff2d2d]" />
                <span>{reel.views}</span>
              </div>
            )}

            {/* Bottom Meta */}
            <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff2d2d] block mb-1">
                {reel.brand}
              </span>
              <h4 className="text-base font-display font-bold text-white mb-2 leading-snug">
                {reel.title}
              </h4>
              <span className="text-[10px] font-mono text-[#8a8a8a] uppercase tracking-wider block">
                {reel.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || "Vertical Reel"}
      />
    </section>
  );
}
