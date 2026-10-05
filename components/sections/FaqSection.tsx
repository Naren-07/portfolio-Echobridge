"use client";

import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { FaqItem } from "@/lib/types";

interface FaqSectionProps {
  faqs: FaqItem[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const tabs = ["About", "Work & Services", "Budgets & Timelines"] as const;
  const [activeTab, setActiveTab] =
    useState<(typeof tabs)[number]>("Work & Services");

  const filteredFaqs = faqs.filter((f) => f.group === activeTab);

  // Generate structured data for FAQPage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-b border-white/[0.08]">
      {/* Structured Data Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SectionHeader
        tag="Intel // 13"
        title="FREQUENTLY ASKED QUESTIONS"
        description="Clear answers regarding our creative pipeline, travel capabilities, turnaround speed, and production investments."
      />

      {/* Group Selector Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/[0.08]">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
              activeTab === tab
                ? "bg-[#ff2d2d] text-white shadow-[0_0_15px_rgba(255,45,45,0.4)]"
                : "bg-white/[0.04] text-[#8a8a8a] hover:text-white hover:bg-white/[0.08]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <Accordion items={filteredFaqs} allowMultiple={false} />
    </section>
  );
}
