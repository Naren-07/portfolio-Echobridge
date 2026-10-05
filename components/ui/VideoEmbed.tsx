"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoEmbedProps {
  id?: string;
  videoUrl?: string;
  poster: string;
  title?: string;
  aspectRatio?: "16/9" | "9/16" | "4/3" | "1/1";
  className?: string;
  autoplayOnClick?: boolean;
}

export function VideoEmbed({
  id = "",
  videoUrl,
  poster,
  title = "Video player",
  aspectRatio = "16/9",
  className,
}: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  // If a direct YouTube embed ID or full URL is passed
  const youtubeId = id || (videoUrl?.includes("youtube.com") || videoUrl?.includes("youtu.be")
    ? videoUrl.split("v=")[1]?.split("&")[0] || videoUrl.split("/").pop()
    : "");

  const aspectClass =
    aspectRatio === "9/16"
      ? "aspect-[9/16]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : "aspect-video";

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl bg-[#0d0d0d] border border-[#1a1a1a] group",
        aspectClass,
        className
      )}
      data-cursor="play"
    >
      {isPlaying ? (
        youtubeId ? (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=0&playsinline=1&rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : videoUrl ? (
          <video
            src={videoUrl}
            controls
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        ) : null
      ) : (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="relative w-full h-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2d2d]"
          aria-label={`Play ${title}`}
        >
          {poster && (
            <Image
              src={poster}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 1200px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}

          {/* Cinematic Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 transition-opacity duration-300 group-hover:opacity-60" />

          {/* Play Button Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#ff2d2d] group-hover:border-[#ff2d2d] shadow-2xl">
              <Play className="w-6 h-6 fill-current translate-x-0.5" />
            </div>
          </div>

          {/* Film format indicator tag */}
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase font-mono tracking-widest text-[#f5f5f5]">
            {aspectRatio === "9/16" ? "9:16 VERTICAL" : "16:9 4K CINEMA"}
          </div>
        </button>
      )}
    </div>
  );
}
