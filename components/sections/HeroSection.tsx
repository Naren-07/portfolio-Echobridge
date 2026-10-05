"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ArrowDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Lightbox } from "@/components/ui/Lightbox";

interface HeroSectionProps {
  showreelUrl?: string;
}

export function HeroSection({
  showreelUrl = "https://www.youtube.com/watch?v=ScMzIvxBSi4",
}: HeroSectionProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#050505]">
      {/* Background Ambient Poster & Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=2000&q=80"
          alt="Cinematic background atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25 scale-105 filter blur-[1px]"
        />

        {/* Ambient Dark Gradient Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/80" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050505]/50 to-[#050505]" />
        
        {/* Glow Spheres */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#ff2d2d]/10 blur-[140px] rounded-full" />
      </div>

      {/* Content Container */}
      <div className="relative max-w-6xl mx-auto text-center flex flex-col items-center z-10">
        {/* Top Tagline with live REC dot */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#8a8a8a] mb-8 backdrop-blur-md"
        >
          <span className="rec-dot" aria-hidden="true" />
          <span>Echo Bridge Studios // Film & Digital Direction</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-extrabold tracking-tight text-[#f5f5f5] leading-[1.03] mb-8 max-w-5xl"
        >
          STORIES THAT <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#f5f5f5] to-[#ff2d2d]">
            COMMAND
          </span>{" "}
          THE FRAME
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-xl md:text-2xl text-[#8a8a8a] max-w-3xl font-light leading-relaxed mb-10"
        >
          A dark, cinematic production house and creative agency engineering high-velocity commercial films, music videos, and scroll-stopping digital content for ambitious brands.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Button
            type="button"
            onClick={() => setIsLightboxOpen(true)}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Play className="w-4 h-4 fill-current mr-2" />
            Watch Showreel (2026)
          </Button>

          <Button
            href="#cinematic-evidence"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
          >
            Explore Portfolio
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll For More Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] font-mono tracking-widest text-[#8a8a8a] uppercase select-none pointer-events-none"
      >
        <span className="text-[9px] tracking-widest text-[#8a8a8a]/80">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-[#ff2d2d]" />
        </motion.div>
      </motion.div>

      {/* Showreel Lightbox Modal */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        videoUrl={showreelUrl}
        title="Echo Bridge 2026 Reel"
      />
    </section>
  );
}
