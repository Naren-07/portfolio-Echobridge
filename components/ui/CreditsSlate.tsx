import { cn } from "@/lib/utils";

export interface CreditItem {
  role: string;
  name: string;
}

interface CreditsSlateProps {
  credits: CreditItem[];
  client?: string;
  year?: number | string;
  className?: string;
}

export function CreditsSlate({
  credits,
  client,
  year,
  className,
}: CreditsSlateProps) {
  if (!credits || credits.length === 0) return null;

  return (
    <div
      className={cn(
        "p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-sm",
        className
      )}
    >
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
        <span className="text-[10px] font-mono tracking-widest text-[#8a8a8a] uppercase flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2d2d]" />
          Production Credits Slate
        </span>
        {year && (
          <span className="text-[11px] font-mono text-[#8a8a8a]">
            REC // {year}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6">
        {client && (
          <div>
            <p className="text-[10px] font-mono uppercase tracking-wider text-[#8a8a8a]">
              Client
            </p>
            <p className="text-sm font-medium text-[#f5f5f5] mt-0.5 truncate">
              {client}
            </p>
          </div>
        )}

        {credits.map((item, idx) => (
          <div key={idx}>
            <p className="text-[10px] font-mono uppercase tracking-wider text-[#8a8a8a]">
              {item.role}
            </p>
            <p className="text-sm font-medium text-[#f5f5f5] mt-0.5 truncate">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
