"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";
import { Play, ArrowUpRight, Film, Smartphone, Headphones } from "lucide-react";
import VideoModal from "@/components/VideoModal";

interface WorkFilterGridProps {
  projects: Project[];
}

const CATEGORIES = [
  "All",
  "OTT Dubbing",
  "AI Micro-Drama",
  "Audio Drama",
  "Brand Film",
  "YouTube Growth",
];

export default function WorkFilterGrid({ projects }: WorkFilterGridProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<{ url: string; title: string } | null>(null);

  const filtered = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  return (
    <>
      {/* Category Filter Pills */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? "bg-[#D9967F] text-[#0B0809] shadow-glow"
                : "bg-[#140E10] text-[#CDBBB3] border border-[rgba(232,180,160,0.2)] hover:border-[#D9967F]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#140E10] border border-[rgba(232,180,160,0.18)] hover:border-[#D9967F]/60 transition-all duration-300 hover:shadow-glow"
          >
            {/* Visual Card / Poster */}
            <div className={`relative w-full overflow-hidden bg-black ${
              project.format === "9:16" ? "aspect-[9/16] max-h-[460px]" : "aspect-video"
            }`}>
              <Image
                src={project.thumbnailUrl}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E10] via-black/40 to-transparent" />

              {/* Format Badge Top Left */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#0B0809]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[rgba(232,180,160,0.2)]">
                {project.format === "9:16" && <Smartphone className="w-3 h-3 text-[#D9967F]" />}
                {project.format === "16:9" && <Film className="w-3 h-3 text-[#D9967F]" />}
                {project.format === "AUDIO" && <Headphones className="w-3 h-3 text-[#D9967F]" />}
                <span className="font-mono text-[10px] uppercase text-[#FBF3EE] tracking-wider">
                  {project.category}
                </span>
              </div>

              {/* Play Button Trigger */}
              <button
                onClick={() => setActiveVideo({ url: project.videoUrl, title: project.title })}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40"
                aria-label={`Play showreel for ${project.title}`}
              >
                <div className="w-14 h-14 rounded-full bg-[#D9967F] text-[#0B0809] flex items-center justify-center shadow-glow transform scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </div>
              </button>
            </div>

            {/* Content Details */}
            <div className="p-6 flex flex-col flex-grow justify-between bg-[#140E10]">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8C7A74] mb-2">
                  <span>{project.client}</span>
                  <span>{project.platform}</span>
                </div>
                <h3 className="font-display text-2xl text-[#FBF3EE] font-medium group-hover:text-[#D9967F] transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-[#CDBBB3] line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Footer: Languages Chips & Case Study Link */}
              <div className="pt-4 border-t border-[rgba(232,180,160,0.1)] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {project.languages.slice(0, 3).map((lang) => (
                    <span
                      key={lang}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#1D1417] text-[#CDBBB3] border border-[rgba(232,180,160,0.1)]"
                    >
                      {lang}
                    </span>
                  ))}
                  {project.languages.length > 3 && (
                    <span className="text-[10px] font-mono text-[#8C7A74]">
                      +{project.languages.length - 3} more
                    </span>
                  )}
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs text-[#D9967F] hover:text-[#F8E4DA] transition-colors font-medium shrink-0"
                >
                  <span>Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Lightbox Modal */}
      {activeVideo && (
        <VideoModal
          isOpen={true}
          onClose={() => setActiveVideo(null)}
          videoUrl={activeVideo.url}
          title={activeVideo.title}
        />
      )}
    </>
  );
}
