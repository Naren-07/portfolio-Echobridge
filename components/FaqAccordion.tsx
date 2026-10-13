"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/lib/types";

interface FaqAccordionProps {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`rounded-xl border transition-all duration-300 overflow-hidden ${
              isOpen
                ? "bg-[#1D1417]/90 border-[#D9967F]/40 shadow-glow"
                : "bg-[#140E10]/60 border-[rgba(232,180,160,0.15)] hover:border-[rgba(232,180,160,0.3)]"
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg sm:text-xl text-[#FBF3EE] font-medium">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border transition-transform duration-300 shrink-0 ${
                  isOpen
                    ? "rotate-180 bg-[#D9967F] text-[#0B0809] border-[#D9967F]"
                    : "bg-transparent text-[#CDBBB3] border-[rgba(232,180,160,0.2)]"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {isOpen && (
              <div className="px-6 pb-6 text-sm text-[#CDBBB3] leading-relaxed animate-in fade-in duration-200 border-t border-[rgba(232,180,160,0.08)] pt-4">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
