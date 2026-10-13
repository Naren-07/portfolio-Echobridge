"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("eb_loader_seen");
    if (hasLoaded) {
      setLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("eb_loader_seen", "true");
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#0B0809] flex flex-col items-center justify-center transition-opacity duration-700 animate-out fade-out">
      <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 rounded-full border border-[rgba(217,150,127,0.3)] animate-ping" />
        <div className="relative w-full h-full rounded-full overflow-hidden border border-[#D4AF6A] shadow-glow">
          <Image
            src="/assets/echobridge-emblem.jpg"
            alt="EchoBridge Studio"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="font-display text-2xl tracking-[0.3em] font-semibold text-[#FBF3EE] uppercase">
          EchoBridge
        </span>
        <span className="font-mono text-[10px] tracking-[0.4em] text-[#D9967F] uppercase">
          Studio · Worldwide
        </span>
      </div>
    </div>
  );
}
