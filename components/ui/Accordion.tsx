"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-white/[0.08] border-y border-white/[0.08]", className)}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);

        return (
          <div key={item.id} className="py-5 sm:py-6">
            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              className="flex w-full items-start justify-between text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff2d2d] rounded-md"
              aria-expanded={isOpen}
            >
              <span className="text-lg sm:text-xl font-display font-medium text-[#f5f5f5] group-hover:text-white transition-colors pr-6">
                {item.question}
              </span>
              <span
                className={cn(
                  "p-2 rounded-full bg-white/[0.04] border border-white/10 text-[#8a8a8a] transition-transform duration-300 shrink-0",
                  isOpen && "rotate-180 text-white bg-white/10"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <p className="pt-4 text-sm sm:text-base text-[#8a8a8a] leading-relaxed max-w-3xl font-light">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
