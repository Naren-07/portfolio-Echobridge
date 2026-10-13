import { getProjects } from "@/lib/data";
import WorkFilterGrid from "@/components/WorkFilterGrid";

export default function WorkPage() {
  const projects = getProjects();

  return (
    <div className="pt-32 pb-24 px-5 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-14">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#D9967F] block mb-3">
          ✦ Selected Production Archive
        </span>
        <h1 className="font-display text-5xl sm:text-7xl text-[#FBF3EE] font-normal leading-[1.1] mb-6">
          Selected Work & Case Studies
        </h1>
        <p className="text-[#CDBBB3] text-base sm:text-lg leading-relaxed font-sans font-light">
          Explore our productions across full-cast OTT dubbing, 9:16 vertical AI micro-dramas, immersive spatial audio dramas, and high-retention creator series.
        </p>
      </div>

      {/* Filterable Grid Component */}
      <WorkFilterGrid projects={projects} />
    </div>
  );
}
