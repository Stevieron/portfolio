import { Card } from "@/components/ui/Card";
import { CountUp } from "@/components/ui/CountUp";

interface StatCardProps {
  /** Headline figure, e.g. "3+". */
  value: string;
  /** Supporting line beneath the figure. */
  label: string;
}

/**
 * A single quantitative claim. The figure counts up the first time it
 * scrolls into view; on hover a cyan stroke — the same gradient as the
 * navbar scroll bar and the accent button — traces the top edge and runs
 * down the left side (roughly half the card), a faint glow lifts, and the
 * whole card rises a hair. Responsive, but never noisy next to two more.
 */
export function StatCard({ value, label }: StatCardProps) {
  const traceId = `stat-trace-${value.replace(/[^a-z0-9]/gi, "") || "n"}`;

  return (
    <Card className="group p-6 hover:-translate-y-0.5 hover:border-foreground/20 sm:p-7">
      {/* hover stroke: traces the top edge, then down the left side */}
      <svg
        aria-hidden
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full [transform:scaleX(-1)]"
      >
        <defs>
          <linearGradient id={traceId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          rx="16"
          stroke={`url(#${traceId})`}
          strokeWidth="2"
          pathLength={1}
          className="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:[stroke-dashoffset:0.5]"
        />
      </svg>

      {/* accent wash, revealed on hover */}
      <span
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, var(--accent), transparent 62%)",
        }}
      />

      <div className="relative">
        <div className="text-4xl font-semibold tabular-nums tracking-[-0.03em] text-foreground transition-transform duration-300 group-hover:translate-x-0.5 sm:text-[2.75rem]">
          <CountUp value={value} />
        </div>

        <p className="mt-3 max-w-[26ch] text-sm leading-6 text-muted">{label}</p>
      </div>
    </Card>
  );
}
