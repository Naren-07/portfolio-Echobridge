"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    // Show/hide based on scroll direction
    if (latest > previous && latest > 150) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & REC Dot */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Echo Bridge Home"
          >
            <div className="flex items-center gap-2">
              <span className="rec-dot" aria-hidden="true" />
              <span className="text-[10px] font-mono tracking-widest text-[#ff2d2d] uppercase hidden sm:inline">
                REC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-display font-extrabold tracking-tight text-[#f5f5f5] group-hover:text-white transition-colors">
                ECHO BRIDGE
              </span>
              <span className="text-[8px] font-mono tracking-widest text-[#8a8a8a] uppercase -mt-1">
                STUDIOS // 01
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#8a8a8a]">
            <Link
              href="/portfolio"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Work</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/[0.06] text-[#f5f5f5]">
                16:9
              </span>
            </Link>
            <Link
              href="/reels"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Reels</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-[#ff2d2d]/20 text-[#ff2d2d]">
                9:16
              </span>
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              Our Story
            </Link>
            <Link href="/blog" className="hover:text-white transition-colors">
              The Treatment
            </Link>
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-5">
            {/* Direct Phone shortcut */}
            <a
              href="tel:+18005550199"
              className="text-xs font-mono text-[#8a8a8a] hover:text-white transition-colors flex items-center gap-1.5"
              title="Call Studio"
            >
              <Phone className="w-3.5 h-3.5 text-[#ff2d2d]" />
              <span className="hidden xl:inline">Coffee?</span>
            </a>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-3 pl-2 border-l border-white/[0.08] text-[#8a8a8a]">
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

            {/* Primary Brief CTA */}
            <Button href="/#contact" variant="primary" size="sm">
              Step Into The Frame
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08] focus:outline-none"
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
