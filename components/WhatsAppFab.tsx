"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  return (
    <aside aria-label="Quick Communication">
      <a
        href="https://wa.me/918377086807?text=Hello%20EchoBridge%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20localization%20or%20production%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct Chat with EchoBridge Studio on WhatsApp"
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#1D1417]/90 hover:bg-[#25D366] text-[#FBF3EE] hover:text-[#0B0809] border border-[rgba(232,180,160,0.3)] hover:border-[#25D366] shadow-2xl backdrop-blur-md transition-all duration-300 group hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]"></span>
        </span>
        <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-[#0B0809] transition-colors" />
        <span className="text-xs font-semibold tracking-wider pr-1 hidden sm:inline-block">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}
