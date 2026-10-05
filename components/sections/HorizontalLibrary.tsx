"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Film } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CreditsSlate } from "@/components/ui/CreditsSlate";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { Project } from "@/lib/types";

interface HorizontalLibraryProps {
  projects: Project[];
}

export function HorizontalLibrary({ projects }: HorizontalLibraryProps) {
  const horizontalProjects = projects.filter((p) => p.format === "HORIZONTAL");
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = horizontalProjects[activeIndex] || horizontalProjects[0];

  if (!activeProject) return null;

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
      <SectionHeader
        tag="Library Index // 07"
        title="16:9 CINEMA ARCHIVE"
        description="Select any production to inspect cinematography notes, director credits, and narrative execution."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 mt-12 items-start">
        {/* Left Side: Title List Index (5 cols) */}
        <div className="lg:col-span-5 divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {horizontalProjects.map((project, index) => {
            const isActive = index === activeIndex;
            const itemNumber = String(index + 1).padStart(2, "0");

            return (
              <div
                key={project.id}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`py-5 sm:py-6 cursor-pointer group transition-all duration-300 flex items-center justify-between ${
                  isActive ? "opacity-100" : "opacity-45 hover:opacity-80"
                }`}
              >
                <div className="flex items-baseline gap-4 pr-4">
                  <span
                    className={`text-xs font-mono transition-colors ${
                      isActive ? "text-[#ff2d2d]" : "text-[#8a8a8a]"
                    }`}
                  >
                    {itemNumber}
                  </span>

                  <div>
                    <h3
                      className={`text-xl sm:text-2xl font-display font-bold transition-colors ${
                        isActive
                          ? "text-white"
                          : "text-[#f5f5f5] group-hover:text-white"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#8a8a8a] mt-0.5">
                      {project.brand} // {project.category}
                    </p>
                  </div>
                </div>

                <div
                  className={`w-2 h-2 rounded-full shrink-0 transition-all ${
                    isActive
                      ? "bg-[#ff2d2d] scale-125 shadow-[0_0_8px_#ff2d2d]"
                      : "bg-transparent group-hover:bg-white/20"
                  }`}
                />
              </div>
            );
          })}

          <div className="pt-6">
            <Link
              href="/portfolio?format=horizontal"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#ff2d2d] hover:underline"
            >
              <span>Explore Complete 16:9 Archive</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Side: Active Project Live Preview & Credits Slate (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6"
            >
              {/* Video Preview Facade */}
              <VideoEmbed
                id={activeProject.videoId}
                videoUrl={activeProject.videoUrl}
                poster={activeProject.thumbnailUrl}
                title={activeProject.title}
                aspectRatio="16/9"
              />

              {/* Title & Brand Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#ff2d2d] block mb-1">
                    {activeProject.brand}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {activeProject.title}
                  </h3>
                </div>

                <Link
                  href={`/portfolio/${activeProject.slug}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-[#050505] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#ff2d2d] hover:text-white transition-all shrink-0 self-start sm:self-auto shadow-lg"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Description */}
              <p className="text-sm text-[#8a8a8a] leading-relaxed font-light">
                {activeProject.description}
              </p>

              {/* Full Film Production Credits Slate */}
              <CreditsSlate
                credits={activeProject.credits}
                client={activeProject.brand}
                year={activeProject.year}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
