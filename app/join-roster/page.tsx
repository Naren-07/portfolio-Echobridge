import RosterForm from "@/components/RosterForm";
import { Mic, ShieldCheck, Sparkles, Award } from "lucide-react";

export default function JoinRosterPage() {
  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-3">
          ✦ Voice Artists & Sound Engineers
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#FBF3EE] font-normal leading-[1.1] mb-6">
          Join the 100+ Talent Roster
        </h1>
        <p className="text-[#CDBBB3] text-base sm:text-lg leading-relaxed font-sans font-light">
          Are you a professional voice actor, dubbing artist, or sound designer? We are continuously casting across 20+ Indian and international languages for upcoming streaming series and commercial productions.
        </p>
      </div>

      {/* Network Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        <div className="glass-card p-6 rounded-2xl border border-[rgba(232,180,160,0.18)]">
          <div className="w-10 h-10 rounded-xl bg-[#140E10] flex items-center justify-center text-[#D9967F] mb-4">
            <Mic className="w-5 h-5" />
          </div>
          <h3 className="font-display text-xl text-[#FBF3EE] font-medium mb-1">
            Top Streaming Shows
          </h3>
          <p className="text-xs text-[#CDBBB3] leading-relaxed">
            Direct casting for OTT platforms including Story TV, Kuku TV, ShareChat, and international distribution partners.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-[rgba(232,180,160,0.18)]">
          <div className="w-10 h-10 rounded-xl bg-[#140E10] flex items-center justify-center text-[#D9967F] mb-4">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-display text-xl text-[#FBF3EE] font-medium mb-1">
            Fair & Prompt Pay
          </h3>
          <p className="text-xs text-[#CDBBB3] leading-relaxed">
            Transparent industry-standard contracts, timely disbursements, and consistent ongoing season bookings.
          </p>
        </div>

        <div className="glass-card p-6 rounded-2xl border border-[rgba(232,180,160,0.18)]">
          <div className="w-10 h-10 rounded-xl bg-[#140E10] flex items-center justify-center text-[#D9967F] mb-4">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-display text-xl text-[#FBF3EE] font-medium mb-1">
            Creative Direction
          </h3>
          <p className="text-xs text-[#CDBBB3] leading-relaxed">
            Collaborate directly with senior voice directors and sound supervisors who elevate your performance.
          </p>
        </div>
      </div>

      {/* Roster Application Form */}
      <RosterForm />
    </div>
  );
}
