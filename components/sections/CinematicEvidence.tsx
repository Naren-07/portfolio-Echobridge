"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "@/lib/types";

gsap.registerPlugin(ScrollTrigger);

interface CinematicEvidenceProps {
  projects: Project[];
}

export function CinematicEvidence({ projects }: CinematicEvidenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Take the top 3-4 hero projects for the pinned showcase
  const showcaseProjects = projects.slice(0, 4);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Responsive check: Only pin on desktop / screens above 768px
      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const slides = slidesRef.current.filter(Boolean) as HTMLElement[];

        slides.forEach((slide, i) => {
          // Pin each slide except the last one
          if (i < slides.length - 1) {
            ScrollTrigger.create({
              trigger: slide,
              start: "top top",
              end: "+=100%",
              pin: true,
              pinSpacing: false,
            });
          }
        });
      });

      return () => mm.revert();
    }, containerRef);

    return () => ctx.revert();
  }, [showcaseProjects.length]);

  return (
    <section
      id="cinematic-evidence"
      ref={containerRef}
      className="relative bg-[#050505] text-[#f5f5f5]"
    >
      {/* Section Header Banner */}
      <div className="pt-20 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-white/[0.08]">
        <div className="flex items-center gap-3">
          <span className="rec-dot" aria-hidden="true" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#8a8a8a]">
            Section 02 // Pinned Archive
          </span>
        </div>
        <div className="text-xs font-mono uppercase tracking-widest text-[#8a8a8a] hidden sm:block">
          Scroll Down to Advance Slides
        </div>
      </div>

      {/* Pinned Slides Container */}
      <div className="relative">
        {showcaseProjects.map((project, index) => {
          const slideNumber = String(index + 1).padStart(2, "0");

          return (
            <div
              key={project.id}
              ref={(el) => {
                slidesRef.current[index] = el;
              }}
              className="slide min-h-screen w-full flex items-center justify-center p-4 sm:p-8 md:p-12 sticky top-0 bg-[#050505] border-b border-white/[0.06]"
            >
              <div className="relative w-full max-w-6xl aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
                {/* Background Image */}
                <Image
                  src={project.thumbnailUrl}
                  alt={project.title}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />

                {/* Film Darkness Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/30" />

                {/* Top Metatags */}
                <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/90">
                  <div className="flex items-center gap-2 px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
                    <span>ARCHIVE // {slideNumber}</span>
                  </div>

                  <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>

                {/* Bottom Film Details & Action */}
                <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                  <div className="max-w-2xl">
                    <p className="text-xs sm:text-sm font-mono text-[#ff2d2d] uppercase tracking-widest mb-1.5">
                      {project.brand}
                    </p>
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-base text-neutral-300 font-light line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-[#050505] font-display font-semibold text-xs uppercase tracking-wider hover:bg-[#ff2d2d] hover:text-white transition-all duration-300 shrink-0 shadow-lg"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
