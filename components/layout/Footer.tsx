import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, YoutubeIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.08] text-[#8a8a8a] overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#ff2d2d]/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Col 1: Brand & Manifesto */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <span className="rec-dot" aria-hidden="true" />
                <span className="text-2xl font-display font-extrabold text-[#f5f5f5] tracking-tight">
                  ECHO BRIDGE
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-[#8a8a8a] max-w-sm font-light">
                A dark, cinematic creative agency crafting high-impact brand films, commercials, and viral scroll-stopping digital content. We engineer visual stories that demand attention.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-mono text-[#8a8a8a]">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Studio Availability: Q1 / Q2 Booking Open
              </span>
            </div>
          </div>

          {/* Col 2: Work & Archive */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#f5f5f5] mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/portfolio?format=horizontal"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>16:9 Films</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/reels"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>9:16 Vertical Reels</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Case Studies</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/production-ecosystem"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Production Ecosystem</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#f5f5f5] mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
              Agency
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Our Story</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Capabilities</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>The Treatment</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/vendor-registration"
                  className="hover:text-white transition-colors flex items-center justify-between group"
                >
                  <span>Vendor & Crew Signup</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Studio */}
          <div>
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#f5f5f5] mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
              Connect
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:naren@echobridge.studio"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#ff2d2d]" />
                  <span>naren@echobridge.studio</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+18005550199"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#ff2d2d]" />
                  <span>+1 (800) 555-0199</span>
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-[#8a8a8a] shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed text-[#8a8a8a]">
                  Global Studios // Los Angeles · London · Mumbai
                </span>
              </li>
            </ul>

            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:bg-[#ff2d2d] hover:border-[#ff2d2d] transition-all"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:bg-[#ff2d2d] hover:border-[#ff2d2d] transition-all"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white hover:bg-[#ff2d2d] hover:border-[#ff2d2d] transition-all"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Slate */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff2d2d]" />
            <span>© {currentYear} ECHO BRIDGE STUDIOS INC. ALL RIGHTS RESERVED.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/admin/login" className="text-[#8a8a8a]/60 hover:text-white transition-colors">
              Admin CMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
