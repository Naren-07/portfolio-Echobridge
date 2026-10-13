"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  title: string;
  role: string;
  image: string;
}

interface StudioLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  items: GalleryItem[];
  currentIndex: number;
  onSelectIndex: (index: number) => void;
}

export default function StudioLightbox({
  isOpen,
  onClose,
  items,
  currentIndex,
  onSelectIndex,
}: StudioLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onSelectIndex((currentIndex - 1 + items.length) % items.length);
      }
      if (e.key === "ArrowRight") {
        onSelectIndex((currentIndex + 1) % items.length);
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, currentIndex, items.length, onSelectIndex]);

  if (!isOpen || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0B0809]/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Studio Facility Lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#D9967F] text-[#FBF3EE] hover:text-[#0B0809] flex items-center justify-center transition-all border border-[rgba(232,180,160,0.3)]"
        aria-label="Close Lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelectIndex((currentIndex - 1 + items.length) % items.length);
        }}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#D9967F] text-[#FBF3EE] hover:text-[#0B0809] flex items-center justify-center transition-all border border-[rgba(232,180,160,0.3)] hidden sm:flex"
        aria-label="Previous Facility"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelectIndex((currentIndex + 1) % items.length);
        }}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-[#D9967F] text-[#FBF3EE] hover:text-[#0B0809] flex items-center justify-center transition-all border border-[rgba(232,180,160,0.3)] hidden sm:flex"
        aria-label="Next Facility"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-4xl w-full bg-[#140E10] rounded-2xl overflow-hidden border border-[rgba(217,150,127,0.3)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-video w-full">
          <Image
            src={current.image}
            alt={current.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 bg-[#1D1417]/95 border-t border-[rgba(232,180,160,0.15)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-[#D9967F]">
              {current.role}
            </span>
            <h3 className="font-display text-2xl text-[#FBF3EE] font-medium">
              {current.title}
            </h3>
          </div>
          <span className="font-mono text-xs text-[#8C7A74]">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
