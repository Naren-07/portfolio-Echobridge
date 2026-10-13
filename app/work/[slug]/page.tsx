import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getProjects } from "@/lib/data";
import { ArrowLeft, ArrowUpRight, Play, CheckCircle2, Globe, Film, Award, Clock } from "lucide-react";

import { getVideoObjectJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  const projects = getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const videoJsonLd = getVideoObjectJsonLd(project);

  return (
    <article className="pt-28 pb-24 px-5 sm:px-8 max-w-5xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
      />
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8C7A74] hover:text-[#D9967F] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Archive</span>
        </Link>
      </div>

      {/* Header Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <span className="px-3.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-[#1D1417] text-[#D9967F] border border-[#D9967F]/30">
          {project.category}
        </span>
        <span className="font-mono text-xs text-[#8C7A74]">
          {project.client} · {project.platform}
        </span>
      </div>

      <h1 className="font-display text-4xl sm:text-6xl text-[#FBF3EE] font-normal leading-tight mb-8">
        {project.title}
      </h1>

      {/* Hero Visual Poster / Player */}
      <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black border border-[rgba(232,180,160,0.2)] shadow-2xl mb-14 group">
        <Image
          src={project.posterUrl || project.thumbnailUrl}
          alt={project.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <a
          href={project.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center group-hover:scale-105 transition-transform"
          aria-label="Watch video reel"
        >
          <div className="w-20 h-20 rounded-full bg-[#D9967F] text-[#0B0809] flex items-center justify-center shadow-glow">
            <Play className="w-8 h-8 fill-current ml-1" />
          </div>
        </a>
      </div>

      {/* Quick Specs Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#140E10] border border-[rgba(232,180,160,0.15)] mb-16">
        <div>
          <span className="font-mono text-[10px] uppercase text-[#8C7A74] block mb-1">
            Client / Platform
          </span>
          <span className="font-display text-base text-[#FBF3EE] font-medium">
            {project.client}
          </span>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase text-[#8C7A74] block mb-1">
            Format & Aspect
          </span>
          <span className="font-display text-base text-[#FBF3EE] font-medium">
            {project.format}
          </span>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase text-[#8C7A74] block mb-1">
            Duration / Scope
          </span>
          <span className="font-display text-base text-[#FBF3EE] font-medium">
            {project.duration || "Multi-Episode Series"}
          </span>
        </div>
        <div>
          <span className="font-mono text-[10px] uppercase text-[#8C7A74] block mb-1">
            Languages Delivered
          </span>
          <span className="font-display text-base text-[#D9967F] font-medium">
            {project.languages.length} Dialects
          </span>
        </div>
      </div>

      {/* Case Study Story Breakdown: Challenge -> Approach -> Results */}
      <div className="space-y-12 mb-16">
        <section className="glass-card p-8 rounded-2xl border border-[rgba(232,180,160,0.15)]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-2">
            01 · The Creative Challenge
          </span>
          <p className="text-[#CDBBB3] leading-relaxed text-base font-sans">
            {project.challenge}
          </p>
        </section>

        <section className="glass-card p-8 rounded-2xl border border-[rgba(232,180,160,0.15)]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-2">
            02 · Studio Approach & Direction
          </span>
          <p className="text-[#CDBBB3] leading-relaxed text-base font-sans">
            {project.approach}
          </p>
        </section>

        <section className="glass-card p-8 rounded-2xl border border-[rgba(232,180,160,0.15)]">
          <span className="font-mono text-xs uppercase tracking-widest text-[#D9967F] block mb-2">
            03 · Measured Impact & Results
          </span>
          <p className="text-[#FBF3EE] leading-relaxed text-base font-sans font-medium">
            {project.results}
          </p>
        </section>
      </div>

      {/* Credits Slate */}
      <section className="p-8 rounded-2xl bg-[#140E10] border border-[rgba(232,180,160,0.15)] mb-16">
        <h3 className="font-mono text-xs uppercase tracking-widest text-[#D9967F] mb-6">
          Production Credits Slate
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {project.credits.map((c, i) => (
            <div key={i}>
              <span className="font-mono text-[10px] uppercase text-[#8C7A74] block mb-1">
                {c.role}
              </span>
              <span className="font-display text-lg text-[#FBF3EE] font-medium">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Footer Bar */}
      <div className="pt-8 border-t border-[rgba(232,180,160,0.15)] flex items-center justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase text-[#8C7A74] block">
            Next Case Study
          </span>
          <Link
            href={`/work/${nextProject.slug}`}
            className="font-display text-2xl text-[#FBF3EE] hover:text-[#D9967F] transition-colors"
          >
            {nextProject.title} →
          </Link>
        </div>
        <Link
          href={`/contact?projectRef=${encodeURIComponent(project.title)}`}
          className="px-6 py-3 rounded-full text-xs font-semibold tracking-wider text-[#0B0809] bg-gradient-to-r from-[#F1CDBE] to-[#D9967F] shadow-glow"
        >
          Discuss Similar Project
        </Link>
      </div>
    </article>
  );
}
