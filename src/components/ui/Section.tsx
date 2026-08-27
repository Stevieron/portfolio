import type { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <Container>
        <div className="border-t border-border py-20 sm:py-24 lg:py-28">
          {children}
        </div>
      </Container>
    </section>
  );
}
