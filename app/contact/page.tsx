import { Suspense } from "react";
import ProjectBriefForm from "@/components/ProjectBriefForm";
import { Mail, Phone, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-3">
          ✦ Start a Project
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#FBF3EE] font-normal leading-[1.1] mb-6">
          Let’s Build Stories That Travel.
        </h1>
        <p className="text-[#CDBBB3] text-base sm:text-lg leading-relaxed font-sans font-light">
          Whether you need a multi-language OTT dubbing season, a high-impact vertical micro-drama, or ongoing YouTube creator localization, complete the brief below for a detailed proposal within 24 hours.
        </p>
      </div>

      {/* Direct Contact Fast-Track Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        <a
          href="tel:+918377086807"
          className="glass-card p-6 rounded-2xl border border-[rgba(232,180,160,0.18)] hover:border-[#D9967F] transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] flex items-center justify-center text-[#D9967F] shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase text-[#8C7A74] tracking-wider block">
              Call Direct
            </span>
            <span className="font-display text-lg text-[#FBF3EE] font-semibold block">
              +91 8377086807
            </span>
          </div>
        </a>

        <a
          href="mailto:echobridge.studio6@gmail.com"
          className="glass-card p-6 rounded-2xl border border-[rgba(232,180,160,0.18)] hover:border-[#D9967F] transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] flex items-center justify-center text-[#D9967F] shrink-0">
            <Mail className="w-5 h-5" />
          </div>
          <div className="truncate">
            <span className="font-mono text-[10px] uppercase text-[#8C7A74] tracking-wider block">
              Email Queries
            </span>
            <span className="font-display text-base text-[#FBF3EE] font-semibold block truncate">
              echobridge.studio6@gmail.com
            </span>
          </div>
        </a>

        <a
          href="https://wa.me/918377086807"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card p-6 rounded-2xl border border-[rgba(232,180,160,0.18)] hover:border-[#D9967F] transition-all flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] flex items-center justify-center text-[#25D366] shrink-0">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase text-[#8C7A74] tracking-wider block">
              WhatsApp Chat
            </span>
            <span className="font-display text-lg text-[#FBF3EE] font-semibold block">
              Immediate Response
            </span>
          </div>
        </a>
      </div>

      {/* Main Interactive Brief Form */}
      <Suspense fallback={<div className="text-center py-20 font-mono text-xs text-[#8C7A74]">Loading Project Brief...</div>}>
        <ProjectBriefForm />
      </Suspense>
    </div>
  );
}
