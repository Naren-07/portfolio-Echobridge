"use client";

import { useState } from "react";
import Image from "next/image";
import { ZoomIn } from "lucide-react";
import StudioLightbox from "@/components/StudioLightbox";

interface GalleryItem {
  title: string;
  role: string;
  image: string;
}

interface StudioGalleryClientProps {
  gallery: GalleryItem[];
}

export default function StudioGalleryClient({ gallery }: StudioGalleryClientProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setLightboxIndex(idx)}
            className="group relative rounded-2xl overflow-hidden bg-[#140E10] border border-[rgba(232,180,160,0.18)] hover:border-[#D9967F]/60 cursor-pointer transition-all duration-300"
          >
            <div className="relative aspect-video w-full bg-black">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140E10] via-black/30 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                <div className="w-12 h-12 rounded-full bg-[#D9967F] text-[#0B0809] flex items-center justify-center shadow-glow">
                  <ZoomIn className="w-5 h-5" />
                </div>
              </div>
            </div>
            <div className="p-5">
              <span className="font-mono text-[10px] uppercase text-[#D9967F] tracking-widest block mb-1">
                {item.role}
              </span>
              <h3 className="font-display text-xl text-[#FBF3EE] font-medium">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <StudioLightbox
        isOpen={lightboxIndex !== null}
        onClose={() => setLightboxIndex(null)}
        items={gallery}
        currentIndex={lightboxIndex ?? 0}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </>
  );
}
