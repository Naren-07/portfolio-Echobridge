"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, ChevronLeft, ChevronRight, Eye, ArrowUpRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Lightbox } from "@/components/ui/Lightbox";
import { Reel } from "@/lib/types";

interface ScrollStoppersProps {
  reels: Reel[];
}

export function ScrollStoppers({ reels }: ScrollStoppersProps) {
  const [selectedVideo, setSelectedVideo] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
        <SectionHeader
          tag="The Feed // 05"
          title="SCROLL STOPPERS: 9:16 REELS"
          description="Engineered specifically for the vertical feed. High-velocity visual hooks that demand pause on Instagram and TikTok."
          className="mb-0"
        />

        {/* Carousel Arrow Controls */}
        <div className="flex items-center gap-3 mt-6 sm:mt-0 shrink-0">
          <button
            type="button"
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#ff2d2d]"
            aria-label="Previous reel"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none focus:ring-2 focus:ring-[#ff2d2d]"
            aria-label="Next reel"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <Link
            href="/reels"
            className="ml-2 text-xs font-mono uppercase tracking-wider text-[#ff2d2d] hover:underline flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 9:16 Swipe Deck */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: "none" }}
      >
        {reels.map((reel) => (
          <div
            key={reel.id}
            className="snap-start shrink-0 w-64 sm:w-72 aspect-[9/16] rounded-2xl overflow-hidden relative border border-white/10 group bg-[#0d0d0d] cursor-pointer"
            onClick={() =>
              setSelectedVideo({ url: reel.videoUrl, title: reel.title })
            }
            data-cursor="play"
          >
            {/* Thumbnail Poster */}
            <Image
              src={reel.thumbnailUrl}
              alt={reel.title}
              fill
              sizes="(max-width: 768px) 260px, 300px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30 group-hover:opacity-60 transition-opacity" />

            {/* Play Button Icon */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ff2d2d] group-hover:border-[#ff2d2d] shadow-xl">
                <Play className="w-5 h-5 fill-current translate-x-0.5" />
              </div>
            </div>

            {/* Top View Count */}
            {reel.views && (
              <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white">
                <Eye className="w-3 h-3 text-[#ff2d2d]" />
                <span>{reel.views}</span>
              </div>
            )}

            {/* Bottom Meta */}
            <div className="absolute bottom-5 left-5 right-5 pointer-events-none">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff2d2d] block mb-1">
                {reel.brand}
              </span>
              <h4 className="text-lg font-display font-bold text-white leading-tight">
                {reel.title}
              </h4>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox for playing reel */}
      <Lightbox
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.url || ""}
        title={selectedVideo?.title || "Reel"}
      />
    </section>
  );
}
