"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Languages", href: "/languages" },
    { label: "Studio", href: "/studio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0B0809]/90 backdrop-blur-md border-b border-[rgba(232,180,160,0.15)] py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-[#D4AF6A]/40 group-hover:border-[#D9967F] transition-colors shadow-glow">
              <Image
                src="/assets/echobridge-emblem.jpg"
                alt="EchoBridge Studio Emblem"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-[0.2em] font-semibold text-[#FBF3EE] group-hover:text-[#D9967F] transition-colors uppercase">
                EchoBridge
              </span>
              <span className="text-[9px] tracking-[0.3em] font-mono text-[#8C7A74] uppercase">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-1 ${
                    isActive
                      ? "text-[#D9967F] font-medium"
                      : "text-[#CDBBB3] hover:text-[#FBF3EE]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#D9967F] to-[#EBC2B0]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/join-roster"
              className="text-xs tracking-wider text-[#CDBBB3] hover:text-[#D9967F] transition-colors flex items-center gap-1.5"
            >
              <span>Join Roster</span>
            </Link>
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start a Project</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#FBF3EE] hover:text-[#D9967F] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B0809]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-display tracking-widest uppercase transition-colors flex items-center justify-between ${
                    isActive ? "text-[#D9967F]" : "text-[#FBF3EE]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#8C7A74]" />
                </Link>
              );
            })}
            <Link
              href="/join-roster"
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-display tracking-widest uppercase text-[#CDBBB3] hover:text-[#D9967F] transition-colors pt-4 border-t border-[rgba(232,180,160,0.15)]"
            >
              Join Voice Talent Roster
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-4 rounded-full text-sm font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow"
            >
              Start a Project
            </Link>
            <p className="text-center font-mono text-[11px] text-[#8C7A74]">
              echobridge.studio6@gmail.com · +91 8377086807
            </p>
          </div>
        </div>
      )}
    </>
  );
}
