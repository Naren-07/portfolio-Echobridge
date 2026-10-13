import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="relative bg-[#0B0809] border-t border-[rgba(232,180,160,0.18)] pt-20 pb-12 overflow-hidden z-10">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[rgba(217,150,127,0.08)] to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Top CTA Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-end pb-16 border-b border-[rgba(232,180,160,0.12)]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-3">
              ✦ Ready to Scale Globally
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#FBF3EE] font-normal leading-[1.1]">
              Let’s build stories that travel beyond borders.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow hover:scale-105 transition-all duration-300"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/918377086807"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-full text-sm font-medium tracking-wider text-[#FBF3EE] border border-[rgba(232,180,160,0.3)] hover:border-[#D9967F] hover:bg-[#1D1417] transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 text-[#D9967F]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Middle Navigation & Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF6A]/40 shadow-glow">
                <Image
                  src="/assets/echobridge-emblem.jpg"
                  alt="EchoBridge Studio Seal"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-display text-xl tracking-[0.2em] font-semibold text-[#FBF3EE] uppercase block">
                  EchoBridge
                </span>
                <span className="text-[10px] tracking-[0.3em] font-mono text-[#8C7A74] uppercase block">
                  Studio
                </span>
              </div>
            </div>
            <p className="text-sm text-[#CDBBB3] leading-relaxed max-w-sm font-sans">
              Transforming stories into culturally resonant global experiences through voice-over, dubbing, localization, and AI-assisted vertical drama production.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://linkedin.com/in/sarikasharma06"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-[rgba(232,180,160,0.2)] flex items-center justify-center text-[#CDBBB3] hover:text-[#D9967F] hover:border-[#D9967F] transition-all"
                aria-label="Sarika Sharma LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:echobridge.studio6@gmail.com"
                className="w-10 h-10 rounded-full border border-[rgba(232,180,160,0.2)] flex items-center justify-center text-[#CDBBB3] hover:text-[#D9967F] hover:border-[#D9967F] transition-all"
                aria-label="Email EchoBridge Studio"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Pillars & Services */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D9967F] mb-1">
              Services
            </h4>
            <Link href="/services#human-led" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              Story Development
            </Link>
            <Link href="/services#human-led" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              Localization & Dubbing
            </Link>
            <Link href="/services#human-led" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              Voice & Sound Design
            </Link>
            <Link href="/services#ai-powered" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              AI Micro Dramas
            </Link>
            <Link href="/services#ai-powered" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              YouTube Production
            </Link>
            <Link href="/services#ai-powered" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              Brand & Commercial Films
            </Link>
          </div>

          {/* Col 4: Platform & Studio */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D9967F] mb-1">
              Studio
            </h4>
            <Link href="/work" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              Selected Work
            </Link>
            <Link href="/languages" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              20+ Languages Matrix
            </Link>
            <Link href="/studio" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              TPN Infrastructure
            </Link>
            <Link href="/studio" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              Facilities Gallery
            </Link>
            <Link href="/join-roster" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors">
              Join Talent Roster
            </Link>
          </div>

          {/* Col 5: Direct Inquiries */}
          <div className="flex flex-col gap-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#D9967F] mb-1">
              Get in Touch
            </h4>
            <a href="tel:+918377086807" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#D9967F]" />
              <span>+91 8377086807</span>
            </a>
            <a href="mailto:echobridge.studio6@gmail.com" className="text-sm text-[#CDBBB3] hover:text-[#FBF3EE] transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#D9967F]" />
              <span className="truncate">echobridge.studio6@gmail.com</span>
            </a>
            <p className="text-sm text-[#8C7A74] flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D9967F]" />
              <span>Mumbai · Delhi · Global</span>
            </p>
          </div>
        </div>

        {/* Bottom Copyright & Compliance */}
        <div className="pt-8 border-t border-[rgba(232,180,160,0.1)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#8C7A74]">
            © {new Date().getFullYear()} EchoBridge Studio. Founder & Creative Director: Sarika Sharma. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#8C7A74]">
            <Link href="/privacy" className="hover:text-[#CDBBB3] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#CDBBB3] transition-colors">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
