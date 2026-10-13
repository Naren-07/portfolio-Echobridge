"use client";

import { useState } from "react";
import { Sparkles, CheckCircle2, MessageCircle, Send, AlertCircle, Loader2 } from "lucide-react";

const PROJECT_TYPES = [
  "OTT Dubbing",
  "Voice-Over",
  "Localization & Transcreation",
  "Subtitling & Closed Captioning",
  "AI Micro-Drama Production",
  "YouTube Channel Expansion",
  "Brand & Commercial Film",
  "Audio Drama & Foley",
  "Other Custom Project",
];

const QUICK_LANGUAGES = [
  "Hindi",
  "Tamil",
  "Telugu",
  "Kannada",
  "Malayalam",
  "Marathi",
  "Punjabi",
  "English (US/UK)",
  "Spanish",
  "Arabic",
  "Thai",
  "Bahasa Indonesia",
  "Portuguese",
  "French",
  "German",
];

export default function ProjectBriefForm({ initialService = "" }: { initialService?: string }) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>(
    initialService ? [initialService] : ["OTT Dubbing"]
  );
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(["Hindi", "Tamil", "Telugu"]);
  const [volume, setVolume] = useState<number>(20);
  const [budget, setBudget] = useState<number>(5000);
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [timeline, setTimeline] = useState("Within 2–4 Weeks");
  const [message, setMessage] = useState("");
  const [attachmentLink, setAttachmentLink] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleType = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          projectTypes: selectedTypes,
          languages: selectedLanguages,
          volume,
          budget,
          currency,
          timeline,
          message,
          attachmentLink,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit brief. Please try again or reach out on WhatsApp.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred. Please try again or message us on WhatsApp.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Pre-fill WhatsApp message URL
  const whatsappBriefText = encodeURIComponent(
    `*EchoBridge Project Brief*\n` +
      `*Name:* ${name || "Client"}\n` +
      `*Company:* ${company || "Not provided"}\n` +
      `*Services:* ${selectedTypes.join(", ")}\n` +
      `*Languages:* ${selectedLanguages.join(", ")}\n` +
      `*Volume:* ${volume} Episodes / Minutes\n` +
      `*Budget:* ${currency === "USD" ? "$" : "₹"}${budget}\n` +
      `*Timeline:* ${timeline}\n` +
      `*Message:* ${message || "Interested in starting a project."}`
  );
  const whatsappUrl = `https://wa.me/918377086807?text=${whatsappBriefText}`;

  if (submitted) {
    return (
      <div className="glass-card rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center justify-center max-w-2xl mx-auto shadow-glow border border-[#D9967F]/40">
        <div className="w-16 h-16 rounded-full bg-[#D9967F]/20 flex items-center justify-center mb-6 text-[#D9967F]">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-display text-3xl sm:text-4xl text-[#FBF3EE] font-semibold mb-3">
          Brief Received!
        </h3>
        <p className="text-[#CDBBB3] max-w-md mx-auto mb-8 text-sm leading-relaxed">
          Thank you, <strong className="text-[#FBF3EE]">{name}</strong>. Our creative director Sarika Sharma and production team will review your project requirements and follow up within 24 hours.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] to-[#D9967F] shadow-glow hover:scale-105 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Fast-Track on WhatsApp</span>
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-widest text-[#8C7A74] hover:text-[#CDBBB3] transition-colors py-2"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-10 max-w-4xl mx-auto border border-[rgba(232,180,160,0.2)]">
      {error && (
        <div className="mb-8 p-4 rounded-xl bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Step 1: Project Types */}
      <div className="mb-10">
        <label className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-3">
          01 · Select Required Services (Multi-Select)
        </label>
        <div className="flex flex-wrap gap-2.5">
          {PROJECT_TYPES.map((type) => {
            const isSelected = selectedTypes.includes(type);
            return (
              <button
                type="button"
                key={type}
                onClick={() => toggleType(type)}
                className={`px-4 py-2.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 border ${
                  isSelected
                    ? "bg-[#D9967F] text-[#0B0809] border-[#D9967F] shadow-glow"
                    : "bg-[#140E10] text-[#CDBBB3] border-[rgba(232,180,160,0.2)] hover:border-[#D9967F]/50"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Language Requirements */}
      <div className="mb-10">
        <label className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-3">
          02 · Target Languages Needed ({selectedLanguages.length} selected)
        </label>
        <div className="flex flex-wrap gap-2">
          {QUICK_LANGUAGES.map((lang) => {
            const isSelected = selectedLanguages.includes(lang);
            return (
              <button
                type="button"
                key={lang}
                onClick={() => toggleLanguage(lang)}
                className={`px-3.5 py-1.5 rounded-full text-xs transition-all border ${
                  isSelected
                    ? "bg-[#EBC2B0]/20 text-[#FBF3EE] border-[#D9967F]"
                    : "bg-[#140E10]/80 text-[#8C7A74] border-[rgba(232,180,160,0.1)] hover:text-[#CDBBB3]"
                }`}
              >
                {lang}
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 3: Volume & Budget Sliders */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 p-6 rounded-xl bg-[#140E10]/80 border border-[rgba(232,180,160,0.12)]">
        {/* Volume Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#CDBBB3]">
              Project Volume
            </span>
            <span className="font-mono text-sm font-semibold text-[#D9967F]">
              {volume} {volume >= 100 ? "100+ Eps / Hours" : "Episodes / Mins"}
            </span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-full accent-[#D9967F] h-1.5 bg-[#2A1C20] rounded-lg cursor-pointer"
          />
          <span className="text-[10px] text-[#8C7A74] block mt-1">
            Slide to indicate episode count or total duration
          </span>
        </div>

        {/* Budget Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#CDBBB3]">
                Estimated Budget
              </span>
              <div className="flex rounded-md border border-[rgba(232,180,160,0.2)] overflow-hidden text-[10px]">
                <button
                  type="button"
                  onClick={() => setCurrency("USD")}
                  className={`px-2 py-0.5 ${currency === "USD" ? "bg-[#D9967F] text-black" : "text-[#8C7A74]"}`}
                >
                  USD
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency("INR")}
                  className={`px-2 py-0.5 ${currency === "INR" ? "bg-[#D9967F] text-black" : "text-[#8C7A74]"}`}
                >
                  INR
                </button>
              </div>
            </div>
            <span className="font-mono text-sm font-semibold text-[#D9967F]">
              {currency === "USD" ? `$${budget.toLocaleString()}` : `₹${(budget * 80).toLocaleString()}`}
            </span>
          </div>
          <input
            type="range"
            min="1000"
            max="50000"
            step="1000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full accent-[#D9967F] h-1.5 bg-[#2A1C20] rounded-lg cursor-pointer"
          />
          <span className="text-[10px] text-[#8C7A74] block mt-1">
            Flexible custom packages tailored to project specifications
          </span>
        </div>
      </div>

      {/* Step 4: Contact Credentials & Details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#8C7A74] mb-2">
            Your Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Maya Sen"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] text-[#FBF3EE] text-sm focus:outline-none focus:border-[#D9967F] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#8C7A74] mb-2">
            Business Email *
          </label>
          <input
            type="email"
            required
            placeholder="maya@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] text-[#FBF3EE] text-sm focus:outline-none focus:border-[#D9967F] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#8C7A74] mb-2">
            WhatsApp / Phone (Optional)
          </label>
          <input
            type="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] text-[#FBF3EE] text-sm focus:outline-none focus:border-[#D9967F] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#8C7A74] mb-2">
            Company / Platform / Channel
          </label>
          <input
            type="text"
            placeholder="e.g. Netflix, Kuku, YouTube Channel"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] text-[#FBF3EE] text-sm focus:outline-none focus:border-[#D9967F] transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#8C7A74] mb-2">
            Project Timeline
          </label>
          <select
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] text-[#FBF3EE] text-sm focus:outline-none focus:border-[#D9967F] transition-colors"
          >
            <option>Immediate (Within 48–72 Hours)</option>
            <option>Within 2–4 Weeks</option>
            <option>Next Quarter</option>
            <option>Exploratory / Budget Planning</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase font-mono tracking-wider text-[#8C7A74] mb-2">
            Script / Reference Reel Link (Optional)
          </label>
          <input
            type="url"
            placeholder="https://drive.google.com/..."
            value={attachmentLink}
            onChange={(e) => setAttachmentLink(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] text-[#FBF3EE] text-sm focus:outline-none focus:border-[#D9967F] transition-colors"
          />
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-xs uppercase font-mono tracking-wider text-[#8C7A74] mb-2">
          Project Details & Narrative Notes
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about the storyline, character tones, specific accents, or deliverable schedule..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-3 rounded-xl bg-[#140E10] border border-[rgba(232,180,160,0.2)] text-[#FBF3EE] text-sm focus:outline-none focus:border-[#D9967F] transition-colors resize-none"
        />
      </div>

      {/* Submit button & WhatsApp alternative */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[rgba(232,180,160,0.1)]">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] via-[#D9967F] to-[#B76E79] shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Transmitting Brief...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Project Brief</span>
            </>
          )}
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#CDBBB3] hover:text-[#D9967F] transition-colors flex items-center gap-1.5"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span>Or send directly via WhatsApp</span>
        </a>
      </div>
    </form>
  );
}
