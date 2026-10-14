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
      setScrolled(window.scrollY > 30);
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
            ? "bg-[#0C0A07]/92 backdrop-blur-md border-b border-[rgba(212,175,106,0.2)] py-3 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo & Brand Emblem */}
          <Link href="/" className="flex items-center gap-3.5 group select-none">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF6A] group-hover:border-[#F8E3B6] transition-colors shadow-glow shrink-0">
              <Image
                src="/assets/echobridge-emblem.jpg"
                alt="EchoBridge Studio Emblem"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg tracking-[0.2em] font-medium text-[#FBF6EE] group-hover:text-[#D4AF6A] transition-colors uppercase leading-tight">
                EchoBridge
              </span>
              <span className="text-[9px] tracking-[0.32em] font-mono text-[#D4AF6A] uppercase leading-tight">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Equal Spacing */}
          <nav className="hidden lg:flex items-center gap-[var(--nav-gap)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-colors relative py-1.5 select-none ${
                    isActive
                      ? "text-[#D4AF6A] font-medium"
                      : "text-[#D9CBBF] hover:text-[#FBF6EE]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#F8E3B6] to-[#D4AF6A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Buttons with Equal Height & Precise Spacing */}
          <div className="hidden md:flex items-center gap-[var(--cta-gap)]">
            {/* Outline Button: Join Roster */}
            <Link
              href="/join-roster"
              className="h-[var(--btn-h)] px-[var(--btn-px)] rounded-full text-xs font-medium tracking-wider text-[#FBF6EE] border border-[rgba(212,175,106,0.35)] hover:border-[#D4AF6A] hover:bg-[#1E1710] transition-all duration-300 flex items-center justify-center whitespace-nowrap active:scale-[0.98]"
            >
              <span>Join Roster</span>
            </Link>

            {/* Filled Button: Start a Project */}
            <Link
              href="/contact"
              className="h-[var(--btn-h)] px-[var(--btn-px)] rounded-full text-xs font-semibold tracking-wider text-[#0C0A07] bg-gradient-to-r from-[#F8E3B6] via-[#D4AF6A] to-[#B88E44] shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0C0A07]" />
              <span>Start a Project</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#FBF6EE] hover:text-[#D4AF6A] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0C0A07]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-display tracking-widest uppercase transition-colors flex items-center justify-between ${
                    isActive ? "text-[#D4AF6A]" : "text-[#FBF6EE]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-[#9E8D7F]" />
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-3 pt-6 border-t border-[rgba(212,175,106,0.2)]">
            <Link
              href="/join-roster"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center h-12 rounded-full text-xs font-medium tracking-wider text-[#FBF6EE] border border-[rgba(212,175,106,0.35)] flex items-center justify-center"
            >
              Join Talent Roster
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center h-12 rounded-full text-xs font-semibold tracking-wider text-[#0C0A07] bg-gradient-to-r from-[#F8E3B6] via-[#D4AF6A] to-[#B88E44] shadow-glow flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#0C0A07]" />
              <span>Start a Project</span>
            </Link>
            <p className="text-center font-mono text-[11px] text-[#9E8D7F] mt-2">
              echobridge.studio6@gmail.com · +91 8377086807
            </p>
          </div>
        </div>
      )}
    </>
  );
}
