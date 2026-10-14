"use client";

import { useState } from "react";
import { Sparkles, Play, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PartnerItem {
  id: string;
  name: string;
  category: string;
  blurb: string;
  accent: string;
  badge: React.ReactNode;
}

export default function PartnersSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const partners: PartnerItem[] = [
    {
      id: "story-tv",
      name: "Story TV",
      category: "Streaming & Audio OTT",
      blurb: "Serialized audio & video storytelling platform reaching millions of daily active listeners.",
      accent: "#E5A93C",
      badge: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect width="48" height="48" rx="12" fill="#1E1710" stroke="#D4AF6A" strokeWidth="1.5" />
          <path d="M16 14 H32 V20 H26 V34 H20 V20 H16 Z" fill="#F8E3B6" />
          <polygon points="28,26 36,30 28,34" fill="#D4AF6A" />
        </svg>
      ),
    },
    {
      id: "kuku-tv",
      name: "Kuku TV",
      category: "Vernacular OTT & Audio",
      blurb: "Top vernacular serialized fiction app powering regional micro-dramas in 7+ languages.",
      accent: "#E63946",
      badge: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect width="48" height="48" rx="12" fill="#201013" stroke="#E63946" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="13" stroke="#F8E3B6" strokeWidth="2" strokeDasharray="3 2" />
          <path d="M18 16 V32 M18 24 L29 16 M18 24 L30 32" stroke="#E63946" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "sharechat",
      name: "ShareChat",
      category: "Social & Short-Form",
      blurb: "India's premier multilingual social ecosystem connecting Bharat audiences in 15+ dialects.",
      accent: "#2A9D8F",
      badge: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect width="48" height="48" rx="12" fill="#0E1A17" stroke="#2A9D8F" strokeWidth="1.5" />
          <circle cx="19" cy="21" r="5" fill="#E76F51" />
          <circle cx="31" cy="18" r="4" fill="#2A9D8F" />
          <circle cx="25" cy="31" r="6" fill="#F4A261" />
          <path d="M21 23 L29 20 M21 24 L24 28 M29 21 L26 28" stroke="#D4AF6A" strokeWidth="1.2" opacity="0.8" />
        </svg>
      ),
    },
    {
      id: "dashverse",
      name: "Dashverse",
      category: "Digital Entertainment & Gaming",
      blurb: "Next-generation digital narrative universe, 3D interactive storylines, and gaming audio.",
      accent: "#9D4EDD",
      badge: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect width="48" height="48" rx="12" fill="#17101E" stroke="#9D4EDD" strokeWidth="1.5" />
          <polygon points="24,14 34,20 34,30 24,36 14,30 14,20" stroke="#F8E3B6" strokeWidth="1.8" />
          <circle cx="24" cy="25" r="4" fill="#9D4EDD" />
        </svg>
      ),
    },
    {
      id: "master",
      name: "Master",
      category: "Content Distribution",
      blurb: "OTT and digital distribution network delivering premium regional series and films.",
      accent: "#D4AF6A",
      badge: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect width="48" height="48" rx="12" fill="#1C160F" stroke="#D4AF6A" strokeWidth="1.5" />
          <path d="M15 33 V16 L24 26 L33 16 V33" stroke="#D4AF6A" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "youtube-creators",
      name: "YouTube Creator Network",
      category: "Global Video Creators",
      blurb: "Multi-language dubbing and dialogue direction for high-growth channels with 20M+ subscribers.",
      accent: "#FF0000",
      badge: (
        <svg viewBox="0 0 48 48" className="w-10 h-10" fill="none">
          <rect width="48" height="48" rx="12" fill="#200B0B" stroke="#FF0000" strokeWidth="1.5" />
          <rect x="13" y="17" width="22" height="14" rx="4" fill="#FF0000" />
          <polygon points="22,21 28,24 22,27" fill="#FFFFFF" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Dynamic Animated Logo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partners.map((partner) => {
          const isHovered = hoveredId === partner.id;

          return (
            <div
              key={partner.id}
              onMouseEnter={() => setHoveredId(partner.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative rounded-2xl p-7 bg-[#140F0A]/90 border border-[rgba(212,175,106,0.2)] hover:border-[#D4AF6A] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(212,175,106,0.2)] flex flex-col justify-between"
            >
              <div>
                {/* Logo Badge & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {partner.badge}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#9E8D7F] group-hover:text-[#D4AF6A] transition-colors">
                    {partner.category}
                  </span>
                </div>

                {/* Partner Name */}
                <h3 className="font-display text-2xl text-[#FBF6EE] font-medium group-hover:text-[#F8E3B6] transition-colors mb-2">
                  {partner.name}
                </h3>

                {/* Blurb */}
                <p className="text-xs text-[#D9CBBF] leading-relaxed font-sans mb-6">
                  {partner.blurb}
                </p>
              </div>

              {/* Bottom active production status bar */}
              <div className="pt-4 border-t border-[rgba(212,175,106,0.12)] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#D4AF6A]">
                    Active Production
                  </span>
                </div>
                <Link
                  href={`/contact?platform=${encodeURIComponent(partner.name)}`}
                  className="inline-flex items-center gap-1 text-xs text-[#D4AF6A] group-hover:text-[#F8E3B6] transition-colors"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
