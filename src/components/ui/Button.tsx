import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent";

interface ButtonProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
}

const base =
  "inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium transition-all duration-200 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  primary:
    "bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg hover:shadow-foreground/15",

  secondary:
    "border border-border bg-surface text-foreground hover:border-foreground/25 hover:bg-surface-hover",

  accent:
    "bg-[image:var(--accent-gradient)] text-[#04222e] shadow-sm hover:brightness-[1.06] hover:shadow-lg hover:shadow-accent/35",
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
