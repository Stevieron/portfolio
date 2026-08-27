import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { Socials } from "./Socials";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="flex flex-col gap-10 py-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-lg font-medium">Stephen Okon</p>

            <p className="mt-2 max-w-sm text-sm leading-6 text-muted">
              Software engineer and researcher building thoughtful digital
              products and systems.
            </p>
          </div>
          <Socials />
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Stephen Okon.</p>

          <Link
            href="#top"
            className="group inline-flex items-center gap-1 hover:text-foreground"
          >
            Back to top
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}
