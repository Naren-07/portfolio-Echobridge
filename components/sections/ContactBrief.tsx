"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle2, Phone, ShieldCheck, Sparkles, Loader2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const briefSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid work email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Select a project category"),
  budget: z.number().min(1000),
  currency: z.enum(["USD", "INR"]),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please share a brief description of the vision"),
});

type BriefFormData = z.infer<typeof briefSchema>;

export function ContactBrief() {
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [budgetValue, setBudgetValue] = useState<number>(35000);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    "Commercial Film",
    "Brand Film",
    "Music Video",
    "Socials / 9:16",
    "Post / VFX",
    "Other",
  ];

  const timelines = [
    "Immediate (1-2 weeks)",
    "Next Month",
    "Next Quarter",
    "Flexible / Exploring",
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<BriefFormData>({
    resolver: zodResolver(briefSchema),
    defaultValues: {
      currency: "USD",
      budget: 35000,
      projectType: "Commercial Film",
      timeline: "Next Month",
    },
  });

  const selectedProjectType = watch("projectType");
  const selectedTimeline = watch("timeline");

  // Dynamic Tier Calculation
  const getTier = (val: number, curr: "USD" | "INR") => {
    if (curr === "USD") {
      if (val < 15000) return { label: "Indie Production", desc: "Lean crew, single location, high social impact" };
      if (val < 45000) return { label: "Commercial Grade", desc: "Full camera package, cinema optics, studio lighting" };
      if (val < 100000) return { label: "Premium Production", desc: "Multi-day shoot, talent casting, chase rigs, DaVinci grade" };
      return { label: "Blockbuster Energy", desc: "Full scale, international locations, high-end VFX & Dolby Atmos" };
    } else {
      if (val < 100000) return { label: "Indie Production", desc: "Lean crew, agile shooting, quick social turnaround" };
      if (val < 500000) return { label: "Commercial Grade", desc: "Full camera package, cinema optics, studio lighting" };
      if (val < 1500000) return { label: "Premium Production", desc: "High production value, talent, dedicated post suite" };
      return { label: "Blockbuster Energy", desc: "National broadcast, large scale sets, complex stunts & VFX" };
    }
  };

  const handleCurrencyChange = (newCurr: "USD" | "INR") => {
    setCurrency(newCurr);
    setValue("currency", newCurr);
    if (newCurr === "INR") {
      const inrDefault = 750000;
      setBudgetValue(inrDefault);
      setValue("budget", inrDefault);
    } else {
      const usdDefault = 35000;
      setBudgetValue(usdDefault);
      setValue("budget", usdDefault);
    }
  };

  const currentTier = getTier(budgetValue, currency);

  const onSubmit = async (data: BriefFormData) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        // Fallback for mock phase: still set submitted state
        setIsSubmitted(true);
      }
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <SectionHeader
        tag="The Final Cut // 14"
        title="COMMISSION A PRODUCTION"
        description="Ready to build a visual piece that leaves an indelible mark? Share your vision below and receive an initial director treatment & estimate within 24 hours."
      />

      <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-2xl relative overflow-hidden">
        {/* Glow ambient background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff2d2d]/10 blur-[100px] pointer-events-none rounded-full" />

        {isSubmitted ? (
          <div className="py-16 text-center flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-display font-bold text-white mb-3">
              BRIEF TRANSMITTED
            </h3>
            <p className="text-sm text-[#8a8a8a] max-w-md mx-auto mb-8 font-light">
              Our executive director and production team are reviewing your project parameters. Expect our initial response within one business day.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              size="sm"
            >
              Submit Another Brief
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10 relative z-10">
            {/* Step 1: Client Coordinates */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
                01. Coordinates
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-[#8a8a8a] uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    placeholder="e.g. Jordan Hayes"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-[#8a8a8a]/50 text-sm focus:outline-none focus:border-[#ff2d2d] transition-colors"
                  />
                  {errors.name && (
                    <p className="text-xs text-[#ff2d2d] mt-1.5">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8a8a8a] uppercase mb-2">
                    Work Email *
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="jordan@brand.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-[#8a8a8a]/50 text-sm focus:outline-none focus:border-[#ff2d2d] transition-colors"
                  />
                  {errors.email && (
                    <p className="text-xs text-[#ff2d2d] mt-1.5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8a8a8a] uppercase mb-2">
                    Company / Brand / Agency
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    placeholder="e.g. Acme Corp"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-[#8a8a8a]/50 text-sm focus:outline-none focus:border-[#ff2d2d] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#8a8a8a] uppercase mb-2">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-[#8a8a8a]/50 text-sm focus:outline-none focus:border-[#ff2d2d] transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Step 2: Project Scope Chips */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
                02. Project Classification
              </h4>

              <div className="flex flex-wrap gap-3">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setValue("projectType", type)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                      selectedProjectType === type
                        ? "bg-[#ff2d2d] text-white shadow-[0_0_15px_rgba(255,45,45,0.4)]"
                        : "bg-black/60 text-[#8a8a8a] border border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Interactive Budget Slider with Live Tiers */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-mono uppercase tracking-widest text-white/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
                  03. Target Budget Tier
                </h4>

                {/* Currency Switcher */}
                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-white/10">
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange("USD")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors ${
                      currency === "USD"
                        ? "bg-white/20 text-white font-bold"
                        : "text-[#8a8a8a] hover:text-white"
                    }`}
                  >
                    $ USD
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCurrencyChange("INR")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono transition-colors ${
                      currency === "INR"
                        ? "bg-white/20 text-white font-bold"
                        : "text-[#8a8a8a] hover:text-white"
                    }`}
                  >
                    ₹ INR
                  </button>
                </div>
              </div>

              {/* Live Tier Card */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/10 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-[#ff2d2d]/10 border border-[#ff2d2d]/30 text-[#ff2d2d] text-xs font-mono uppercase tracking-wider mb-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{currentTier.label}</span>
                  </div>
                  <p className="text-xs text-[#8a8a8a] font-light">
                    {currentTier.desc}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {currency === "USD" ? `$${budgetValue.toLocaleString()}` : `₹${budgetValue.toLocaleString()}`}
                  </span>
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min={currency === "USD" ? 5000 : 50000}
                max={currency === "USD" ? 150000 : 2500000}
                step={currency === "USD" ? 2500 : 50000}
                value={budgetValue}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setBudgetValue(val);
                  setValue("budget", val);
                }}
                className="w-full accent-[#ff2d2d] cursor-pointer h-2 bg-white/10 rounded-lg appearance-none"
              />
            </div>

            {/* Step 4: Timeline & Narrative Brief */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-white/90 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
                04. Timeline & Vision
              </h4>

              <div className="flex flex-wrap gap-2.5 mb-6">
                {timelines.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setValue("timeline", time)}
                    className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-colors ${
                      selectedTimeline === time
                        ? "bg-white/20 text-white border border-white/40"
                        : "bg-black/40 text-[#8a8a8a] border border-white/[0.08] hover:text-white"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>

              <div>
                <label className="block text-xs font-mono text-[#8a8a8a] uppercase mb-2">
                  Project Vision & Scope *
                </label>
                <textarea
                  {...register("message")}
                  rows={4}
                  placeholder="Share details regarding deliverables, visual references, deliverables, and targets..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/10 text-white placeholder-[#8a8a8a]/50 text-sm focus:outline-none focus:border-[#ff2d2d] transition-colors"
                />
                {errors.message && (
                  <p className="text-xs text-[#ff2d2d] mt-1.5">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            {/* Submission & Alternative Contact */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/[0.08]">
              <div className="flex items-center gap-3 text-xs font-mono text-[#8a8a8a]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Encrypted transmission. No third-party sales.</span>
              </div>

              <div className="flex items-center gap-4 w-full sm:w-auto">
                <a
                  href="tel:+18005550199"
                  className="text-xs font-mono text-[#8a8a8a] hover:text-white transition-colors flex items-center gap-1.5 hidden md:flex"
                >
                  <Phone className="w-3.5 h-3.5 text-[#ff2d2d]" />
                  <span>Prefer coffee?</span>
                </a>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Transmit Brief</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
