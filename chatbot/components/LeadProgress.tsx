import { Check } from "lucide-react";
import type { QuestionProgress } from "../types";

export default function LeadProgress({ progress }: { progress: QuestionProgress[] }) {
  const complete = progress.filter((item) => item.complete).length;

  return (
    <div className="border-b border-secondary/20 bg-[#0b0b0b]/95 px-4 py-2.5">
      <div className="mb-2 flex items-center justify-between text-[10px] font-bold text-white/50">
        <span>Your enquiry</span>
        <span>{complete} of {progress.length} details</span>
      </div>
      <div className="grid gap-1.5" style={{ gridTemplateColumns: `repeat(${Math.max(progress.length, 1)}, minmax(0, 1fr))` }} aria-label={`${complete} of ${progress.length} required details collected`}>
        {progress.map((item) => (
          <div
            key={item.id}
            className={`flex min-w-0 items-center justify-center gap-1 rounded-full px-1.5 py-1 text-[9px] font-bold transition-colors ${
              item.complete
                ? "bg-gradient-to-r from-primary-1 to-primary-2 text-black"
                : "border border-white/8 bg-white/[0.04] text-white/35"
            }`}
            title={item.label}
          >
            {item.complete && <Check className="h-2.5 w-2.5 shrink-0" strokeWidth={3} />}
            <span className="truncate">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
