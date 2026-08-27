import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Surface primitive: a rounded panel on the raised `surface` colour with
 * a hairline border. Padding and hover behaviour are left to the caller
 * so the same shell can hold a stat, a project, or a note.
 */
export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
