"use client";

import { useState } from "react";
import { Language } from "@/lib/types";
import { Globe, MapPin, Sparkles } from "lucide-react";

interface LanguageMapProps {
  languages: Language[];
}

export default function LanguageMap({ languages }: LanguageMapProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "indian" | "international">("all");
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  const filtered = languages.filter((l) => {
    if (activeFilter === "all") return true;
    return l.group === activeFilter;
  });

  return (
    <div className="flex flex-col gap-10">
      {/* Interactive Map Canvas Container */}
      <div className="relative w-full aspect-[21/9] min-h-[300px] sm:min-h-[420px] rounded-3xl overflow-hidden bg-[#140E10] border border-[rgba(232,180,160,0.2)] shadow-2xl flex items-center justify-center p-6">
        {/* Subtle grid background */}
        <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,#e8b4a0_1px,transparent_1px),linear-gradient(to_bottom,#e8b4a0_1px,transparent_1px)] bg-[size:3.5rem_3.5rem]" />

        {/* Global Connection SVG */}
        <svg
          viewBox="0 0 1000 450"
          className="w-full h-full relative z-10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle World Map Silhouette Points */}
          <g opacity="0.35" fill="#D9967F">
            {/* North America */}
            <circle cx="220" cy="140" r="14" />
            <circle cx="250" cy="160" r="10" />
            <circle cx="190" cy="180" r="12" />
            {/* South America */}
            <circle cx="310" cy="300" r="16" />
            <circle cx="330" cy="340" r="12" />
            {/* Europe */}
            <circle cx="510" cy="130" r="14" />
            <circle cx="530" cy="150" r="12" />
            {/* Middle East */}
            <circle cx="580" cy="200" r="12" />
            {/* Africa */}
            <circle cx="530" cy="260" r="16" />
            <circle cx="560" cy="320" r="14" />
            {/* Southeast Asia */}
            <circle cx="760" cy="250" r="14" />
            <circle cx="790" cy="270" r="12" />
            {/* East Asia */}
            <circle cx="780" cy="160" r="14" />
            {/* Australia */}
            <circle cx="830" cy="350" r="16" />
          </g>

          {/* India Hub (Core Pulsing Node) */}
          <g>
            <circle cx="670" cy="225" r="28" fill="#D4AF6A" fillOpacity="0.15" className="animate-ping" />
            <circle cx="670" cy="225" r="18" fill="#D4AF6A" fillOpacity="0.3" />
            <circle cx="670" cy="225" r="8" fill="#D4AF6A" />
            <text x="670" y="260" textAnchor="middle" fill="#FBF3EE" fontSize="11" fontFamily="sans-serif" letterSpacing="2" fontWeight="600">
              INDIA HUB
            </text>
          </g>

          {/* Radiating Arcs from India to Global Hubs */}
          <path
            d="M 670 225 Q 450 60 220 140"
            stroke="url(#arcGradientRose)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.75"
          />
          <path
            d="M 670 225 Q 570 120 510 130"
            stroke="url(#arcGradientGold)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.8"
          />
          <path
            d="M 670 225 Q 620 180 580 200"
            stroke="url(#arcGradientRose)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.8"
          />
          <path
            d="M 670 225 Q 720 220 760 250"
            stroke="url(#arcGradientGold)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.8"
          />
          <path
            d="M 670 225 Q 500 240 310 300"
            stroke="url(#arcGradientRose)"
            strokeWidth="1.5"
            strokeDasharray="6 4"
            opacity="0.7"
          />

          <defs>
            <linearGradient id="arcGradientRose" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D9967F" stopOpacity="1" />
              <stop offset="100%" stopColor="#F1CDBE" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="arcGradientGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF6A" stopOpacity="1" />
              <stop offset="100%" stopColor="#A9762F" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Selected Language Floating Card */}
        {selectedLanguage && (
          <div className="absolute bottom-6 left-6 z-20 glass-card px-5 py-3.5 rounded-xl border border-[#D9967F]/40 shadow-glow animate-in fade-in duration-150">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#D9967F] block">
              {selectedLanguage.group === "indian" ? "Indian Regional" : "International Territory"}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-xl font-display font-semibold text-[#FBF3EE]">
                {selectedLanguage.name}
              </span>
              <span className="text-base text-[#D9967F] font-serif">
                ({selectedLanguage.native})
              </span>
            </div>
            {selectedLanguage.description && (
              <p className="text-xs text-[#CDBBB3] mt-1 max-w-xs font-sans">
                {selectedLanguage.description}
              </p>
            )}
          </div>
        )}

        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-[#0B0809]/80 px-4 py-2 rounded-full border border-[rgba(232,180,160,0.2)]">
          <Globe className="w-3.5 h-3.5 text-[#D9967F]" />
          <span className="font-mono text-[11px] text-[#CDBBB3] tracking-wider uppercase">
            20+ Simultaneous Dialects
          </span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveFilter("all")}
          className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
            activeFilter === "all"
              ? "bg-[#D9967F] text-[#0B0809] shadow-glow"
              : "bg-[#140E10] text-[#CDBBB3] border border-[rgba(232,180,160,0.2)] hover:border-[#D9967F]"
          }`}
        >
          All Languages ({languages.length})
        </button>
        <button
          onClick={() => setActiveFilter("indian")}
          className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
            activeFilter === "indian"
              ? "bg-[#D9967F] text-[#0B0809] shadow-glow"
              : "bg-[#140E10] text-[#CDBBB3] border border-[rgba(232,180,160,0.2)] hover:border-[#D9967F]"
          }`}
        >
          Indian Dialects (9)
        </button>
        <button
          onClick={() => setActiveFilter("international")}
          className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase transition-all ${
            activeFilter === "international"
              ? "bg-[#D9967F] text-[#0B0809] shadow-glow"
              : "bg-[#140E10] text-[#CDBBB3] border border-[rgba(232,180,160,0.2)] hover:border-[#D9967F]"
          }`}
        >
          International (12)
        </button>
      </div>

      {/* Language Chips Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5">
        {filtered.map((lang) => {
          const isSelected = selectedLanguage?.name === lang.name;
          return (
            <button
              key={lang.name}
              onClick={() => setSelectedLanguage(lang)}
              className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between ${
                isSelected
                  ? "bg-[#1D1417] border-[#D9967F] shadow-glow scale-[1.02]"
                  : "bg-[#140E10]/70 border-[rgba(232,180,160,0.15)] hover:border-[#D9967F]/50 hover:bg-[#1D1417]/50"
              }`}
            >
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#8C7A74]">
                  {lang.code.toUpperCase()}
                </span>
                <span className="font-serif text-sm text-[#D9967F]">
                  {lang.native}
                </span>
              </div>
              <span className="font-display text-base font-semibold text-[#FBF3EE]">
                {lang.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
