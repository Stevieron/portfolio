import type { ReactNode } from "react";

type Variant = "status" | "tech" | "active" | "date";

interface TagProps {
  children: ReactNode;
  variant?: Variant;
}

const base = "inline-flex items-center gap-1.5";

const styles: Record<Variant, string> = {
  status:
    "rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[0.6875rem] font-medium tracking-[0.13em] text-accent",
  // Tech stack chips — quiet, monospaced, code-like.
  tech: "rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs text-muted",

  active:
    "rounded-full border border-positive/30 bg-positive/10 px-2.5 py-1 text-[0.6875rem] font-medium  tracking-[0.13em] text-positive",
  // Neutral pill sitting on the page background — used for date ranges.
  date: "rounded-full border border-border bg-background px-2.5 py-1 text-[0.6875rem] font-medium  tracking-[0.12em] text-muted",
};

export function Tag({ children, variant = "tech" }: TagProps) {
  return (
    <span className={`${base} ${styles[variant]}`}>
      {variant === "active" && (
        <span aria-hidden className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" />
        </span>
      )}
      {children}
    </span>
  );
}
