"use client";

import { useState } from "react";
import { Sparkles, MapPin } from "lucide-react";

interface RegionalHub {
  id: string;
  name: string;
  native: string;
  dialect: string;
  cx: number;
  cy: number;
  artists: string;
  isHQ?: boolean;
}

export default function GoldenIndiaMap() {
  const [activeHub, setActiveHub] = useState<RegionalHub | null>(null);

  const hubs: RegionalHub[] = [
    {
      id: "mumbai",
      name: "Mumbai",
      native: "मराठी · हिन्दी",
      dialect: "Bollywood & Marathi Core Hub",
      cx: 215,
      cy: 350,
      artists: "35+ Master Artists",
      isHQ: true,
    },
    {
      id: "delhi",
      name: "Delhi NCR",
      native: "हिन्दी · हरियाणवी",
      dialect: "Standard Broadcast Hindi",
      cx: 275,
      cy: 195,
      artists: "28+ Artists",
    },
    {
      id: "punjab",
      name: "Chandigarh",
      native: "ਪੰਜਾਬੀ",
      dialect: "Punjabi Folk & Contemporary",
      cx: 235,
      cy: 150,
      artists: "15+ Artists",
    },
    {
      id: "chennai",
      name: "Chennai",
      native: "தமிழ்",
      dialect: "Tamil Cinematic & Vernacular",
      cx: 305,
      cy: 475,
      artists: "22+ Artists",
    },
    {
      id: "hyderabad",
      name: "Hyderabad",
      native: "తెలుగు",
      dialect: "Telugu OTT & Micro-Drama",
      cx: 295,
      cy: 385,
      artists: "24+ Artists",
    },
    {
      id: "bengaluru",
      name: "Bengaluru",
      native: "ಕನ್ನಡ",
      dialect: "Kannada Studio Dubbing",
      cx: 255,
      cy: 455,
      artists: "18+ Artists",
    },
    {
      id: "kochi",
      name: "Kochi",
      native: "മലയാളം",
      dialect: "Malayalam Naturalist Sync",
      cx: 245,
      cy: 515,
      artists: "16+ Artists",
    },
    {
      id: "kolkata",
      name: "Kolkata",
      native: "বাংলা",
      dialect: "Bengali Narrative & Drama",
      cx: 410,
      cy: 295,
      artists: "19+ Artists",
    },
    {
      id: "ahmedabad",
      name: "Ahmedabad",
      native: "ગુજરાતી",
      dialect: "Gujarati Commercial & Folk",
      cx: 175,
      cy: 285,
      artists: "14+ Artists",
    },
  ];

  const hq = hubs.find((h) => h.isHQ) || hubs[0];
  const selectedHub = activeHub || hq;

  return (
    <div className="w-full rounded-3xl bg-[#140F0A]/90 border border-[rgba(212,175,106,0.3)] shadow-[0_0_50px_rgba(212,175,106,0.12)] p-6 sm:p-10 relative overflow-hidden select-none">
      {/* Background golden lighting glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#D4AF6A]/15 via-[#F8E3B6]/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Interactive Details Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E1710] border border-[rgba(212,175,106,0.3)] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#D4AF6A] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#D4AF6A]">
                BHARAT VOICE NETWORK
              </span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-[#FBF6EE] font-medium leading-tight mb-3">
              India Linguistic Map
            </h3>
            <p className="text-xs sm:text-sm text-[#D9CBBF] font-sans leading-relaxed mb-6">
              9 major Indian linguistic territories recorded with native dialect accents, colloquial humor transcreation, and broadcast lip-sync.
            </p>

            {/* Selected Territory Spotlight Card */}
            <div className="p-5 rounded-2xl bg-[#1E1710]/95 border border-[#D4AF6A]/50 shadow-glow mb-6 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#D4AF6A]">
                  {selectedHub.isHQ ? "National Production HQ" : "Regional Recording Hub"}
                </span>
                <span className="text-xs font-mono text-[#D4AF6A] px-2.5 py-0.5 rounded-full bg-[#0C0A07] border border-[#D4AF6A]/30">
                  {selectedHub.artists}
                </span>
              </div>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="font-display text-2xl text-[#FBF6EE] font-semibold">
                  {selectedHub.name}
                </span>
                <span className="font-serif text-lg text-[#F8E3B6]">
                  ({selectedHub.native})
                </span>
              </div>
              <p className="text-xs text-[#D9CBBF] font-sans">
                {selectedHub.dialect}
              </p>
            </div>
          </div>

          {/* Quick Hub Buttons */}
          <div className="flex flex-wrap gap-2 pt-2">
            {hubs.map((hub) => (
              <button
                key={hub.id}
                onClick={() => setActiveHub(hub)}
                onMouseEnter={() => setActiveHub(hub)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-200 border ${
                  selectedHub.id === hub.id
                    ? "bg-[#D4AF6A] text-[#0C0A07] font-semibold border-[#D4AF6A] shadow-glow"
                    : "bg-[#0C0A07] text-[#D9CBBF] border-[rgba(212,175,106,0.2)] hover:border-[#D4AF6A]"
                }`}
              >
                {hub.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right SVG India Golden Map */}
        <div className="lg:col-span-7 relative flex items-center justify-center min-h-[460px]">
          <svg
            viewBox="0 0 540 580"
            className="w-full max-w-[480px] h-auto drop-shadow-[0_15px_30px_rgba(212,175,106,0.25)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Golden metallic gradient */}
              <linearGradient id="indiaGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBF0D9" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#D4AF6A" stopOpacity="0.8" />
                <stop offset="70%" stopColor="#A9762F" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#6E4A1A" stopOpacity="0.7" />
              </linearGradient>

              <linearGradient id="indiaLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F8E3B6" />
                <stop offset="50%" stopColor="#D4AF6A" />
                <stop offset="100%" stopColor="#A9762F" />
              </linearGradient>

              <filter id="goldGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Stylized Silhouette Contour of India in Warm Gold */}
            <path
              d="M 235 55 
                 C 250 45, 270 45, 280 60
                 C 295 75, 310 90, 310 115
                 C 310 130, 290 145, 285 160
                 C 285 175, 330 185, 360 195
                 C 390 205, 420 220, 430 240
                 C 440 255, 460 260, 480 250
                 C 500 240, 520 250, 515 270
                 C 510 290, 490 300, 465 295
                 C 450 290, 425 295, 410 320
                 C 395 345, 370 345, 350 365
                 C 335 380, 335 410, 330 435
                 C 325 460, 315 500, 290 535
                 C 275 555, 260 560, 250 550
                 C 240 530, 230 490, 225 450
                 C 220 420, 215 390, 190 370
                 C 170 350, 160 330, 150 305
                 C 140 280, 130 265, 145 250
                 C 160 235, 195 240, 210 230
                 C 220 215, 215 185, 215 160
                 C 215 130, 205 105, 215 85
                 Z"
              fill="url(#indiaGoldGrad)"
              stroke="url(#indiaLineGrad)"
              strokeWidth="2"
              className="transition-all duration-700"
              style={{ filter: "drop-shadow(0 0 15px rgba(212,175,106,0.3))" }}
            />

            {/* Inner Topographical Matrix Hatching */}
            <g stroke="rgba(248,227,182,0.18)" strokeWidth="1" strokeDasharray="3 4">
              <line x1="215" y1="200" x2="360" y2="200" />
              <line x1="180" y1="280" x2="430" y2="280" />
              <line x1="190" y1="360" x2="350" y2="360" />
              <line x1="220" y1="440" x2="330" y2="440" />
              <line x1="275" y1="120" x2="275" y2="520" />
            </g>

            {/* Connecting Radio / Acoustic Arcs from Mumbai HQ to other hubs */}
            <g fill="none">
              {hubs
                .filter((h) => !h.isHQ)
                .map((hub) => {
                  const midX = (hq.cx + hub.cx) / 2;
                  const midY = (hq.cy + hub.cy) / 2 - 25;
                  const isCurActive = selectedHub.id === hub.id;

                  return (
                    <g key={`arc-${hub.id}`}>
                      <path
                        d={`M ${hq.cx} ${hq.cy} Q ${midX} ${midY} ${hub.cx} ${hub.cy}`}
                        stroke={isCurActive ? "#FFF" : "url(#indiaLineGrad)"}
                        strokeWidth={isCurActive ? 2.5 : 1.2}
                        strokeDasharray={isCurActive ? "none" : "4 3"}
                        opacity={isCurActive ? 1 : 0.65}
                      />
                    </g>
                  );
                })}
            </g>

            {/* Hub Nodes */}
            {hubs.map((hub) => {
              const isSelected = selectedHub.id === hub.id;

              return (
                <g
                  key={`hub-${hub.id}`}
                  transform={`translate(${hub.cx}, ${hub.cy})`}
                  className="cursor-pointer group"
                  onClick={() => setActiveHub(hub)}
                >
                  {/* Pulse rings */}
                  {hub.isHQ && (
                    <circle
                      r="16"
                      fill="none"
                      stroke="#D4AF6A"
                      strokeWidth="1.5"
                      opacity="0.6"
                      className="animate-ping"
                    />
                  )}

                  {isSelected && (
                    <circle
                      r="14"
                      fill="none"
                      stroke="#FFF"
                      strokeWidth="1.5"
                      opacity="0.8"
                    />
                  )}

                  <circle
                    r={hub.isHQ ? 7 : isSelected ? 6 : 4.5}
                    fill={hub.isHQ ? "#F8E3B6" : isSelected ? "#FFF" : "#D4AF6A"}
                    filter="url(#goldGlow)"
                    className="transition-all duration-200 group-hover:scale-125"
                  />
                  <circle
                    r={hub.isHQ ? 3.5 : 2}
                    fill={hub.isHQ ? "#0C0A07" : "#0C0A07"}
                  />

                  {/* Label text */}
                  <text
                    x={hub.cx > 260 ? 12 : -12}
                    y={4}
                    textAnchor={hub.cx > 260 ? "start" : "end"}
                    fill={isSelected ? "#FFF" : "#FBF6EE"}
                    fontSize={isSelected ? "11" : "9.5"}
                    fontFamily="monospace"
                    fontWeight={isSelected ? "700" : "500"}
                    className="transition-colors pointer-events-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                  >
                    {hub.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}
