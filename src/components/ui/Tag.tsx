import type { ReactNode } from "react";

type Variant = "status" | "tech";

interface TagProps {
  children: ReactNode;
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  // Status / discipline labels — accent-tinted, spaced caps.
  status:
    "rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[0.6875rem] font-medium uppercase tracking-[0.13em] text-accent",
  // Tech stack chips — quiet, monospaced, code-like.
  tech: "rounded-md border border-border bg-surface px-2 py-1 font-mono text-xs text-muted",
};

export function Tag({ children, variant = "tech" }: TagProps) {
  return (
    <span className={`inline-flex items-center ${styles[variant]}`}>
      {children}
    </span>
  );
}
