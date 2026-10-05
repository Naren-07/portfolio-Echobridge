import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  hasRec?: boolean;
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  description,
  align = "left",
  hasRec = true,
  className,
}: SectionHeaderProps) {
  const alignClass =
    align === "center"
      ? "text-center items-center"
      : align === "right"
      ? "text-right items-end"
      : "text-left items-start";

  return (
    <div className={cn("flex flex-col gap-3 mb-10 md:mb-14", alignClass, className)}>
      {tag && (
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono uppercase tracking-widest text-[#8a8a8a]">
          {hasRec && <span className="rec-dot" aria-hidden="true" />}
          <span>{tag}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-[#f5f5f5] max-w-4xl leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-[#8a8a8a] max-w-2xl font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
