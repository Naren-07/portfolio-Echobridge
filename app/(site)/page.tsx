"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Lightbox } from "@/components/ui/Lightbox";

export default function HomePage() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Temporary Hero Preview while Stage 3 sections are assembled */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Ambient Dark Gradient Background */}
        <div className="absolute inset-0 bg-radial-gradient from-[#1a0a0a] via-[#050505] to-[#050505] opacity-80 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#ff2d2d]/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center flex flex-col items-center z-10">
          {/* Top Tagline with REC dot */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#8a8a8a] mb-8">
            <span className="rec-dot" aria-hidden="true" />
            <span>Echo Bridge Studios // Cinematic Direction</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight text-[#f5f5f5] leading-[1.05] mb-8">
            STORIES THAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#ff2d2d]">
              COMMAND
            </span>{" "}
            THE FRAME
          </h1>

          <p className="text-base sm:text-xl text-[#8a8a8a] max-w-2xl font-light leading-relaxed mb-10">
            A bespoke film production house crafting visionary commercial films, high-impact music videos, and scroll-stopping digital campaigns for world-class brands.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button
              onClick={() => setIsLightboxOpen(true)}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <Play className="w-4 h-4 fill-current mr-1" />
              Watch 2026 Showreel
            </Button>
            <Button
              href="/portfolio"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              Explore Archive
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Global Showreel Lightbox */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        videoUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        title="Echo Bridge 2026 Showreel"
      />
    </div>
  );
}
