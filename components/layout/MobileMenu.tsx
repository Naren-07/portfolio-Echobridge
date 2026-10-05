"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, ArrowRight, Phone, Mail, Film, Clapperboard, Sparkles } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Selected Work", href: "/portfolio", tag: "Archive" },
    { label: "Vertical Reels", href: "/reels", tag: "9:16 Feed" },
    { label: "Capabilities", href: "/services", tag: "3 Phases" },
    { label: "Our Story", href: "/about", tag: "Agency" },
    { label: "Ecosystem", href: "/production-ecosystem", tag: "Infrastructure" },
    { label: "The Treatment", href: "/blog", tag: "Editorial" },
    { label: "Vendor Registry", href: "/vendor-registration", tag: "Crew" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99990] bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8"
        >
          {/* Top Status Bar ("Mob_OS" Aesthetic) */}
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2">
              <span className="rec-dot" />
              <span className="text-[11px] font-mono tracking-widest text-[#f5f5f5]">
                ECHO_OS // {time || "00:00"}
              </span>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-white transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3 my-auto py-6 overflow-y-auto">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.3 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="flex items-center justify-between group py-2"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="text-xs font-mono text-[#8a8a8a] group-hover:text-[#ff2d2d] transition-colors">
                      0{idx + 1}
                    </span>
                    <span className="text-2xl sm:text-3xl font-display font-bold text-[#f5f5f5] group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[#8a8a8a] group-hover:border-[#ff2d2d]/40 group-hover:text-[#ff2d2d] transition-colors">
                    {link.tag}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom Actions & Socials */}
          <div className="border-t border-white/[0.08] pt-6 flex flex-col gap-4">
            <Link
              href="/#contact"
              onClick={onClose}
              className="w-full py-4 rounded-xl bg-[#ff2d2d] text-white text-center font-display font-medium text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,45,45,0.4)]"
            >
              <span>Step Into The Frame</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <div className="flex items-center justify-between text-xs text-[#8a8a8a] font-mono pt-2">
              <a
                href="tel:+18005550199"
                className="hover:text-white transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#ff2d2d]" />
                <span>Coffee? Let's talk</span>
              </a>

              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
