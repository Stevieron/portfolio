"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Building", href: "#building" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navigation.map((item) => item.href.slice(1));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;

      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio =
        docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0;
      setProgress(ratio);

      // The active section is the last one whose top has crossed a probe
      // line ~35% down the viewport (just below the sticky navbar).
      const probe = scrollTop + window.innerHeight * 0.35;
      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollTop;
        if (top - 96 <= probe) current = id;
      }

      // Snap to the final section once the page bottoms out.
      if (ratio > 0.995 && sectionIds.length > 0) {
        current = sectionIds[sectionIds.length - 1];
      }

      setActiveId(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="group flex items-center gap-3"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs font-medium text-foreground transition-all duration-200 group-hover:border-accent group-hover:text-accent">
              SO
            </span>

            <span className="hidden text-sm font-medium sm:block">
              Stephen Okon
            </span>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => {
              const isActive = activeId === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative py-1 text-sm transition-colors duration-200 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-0.5 left-0 h-px w-full origin-left rounded-full transition-transform duration-300 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                    style={{ background: "var(--accent-gradient)" }}
                  />
                </a>
              );
            })}

            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />

            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface text-muted transition-all duration-200 hover:border-foreground/30 hover:text-foreground"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile navigation */}
        {open && (
          <div className="border-t border-border py-6 md:hidden">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => {
                const isActive = activeId === item.href.slice(1);

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "true" : undefined}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-3 text-base transition-colors ${
                      isActive
                        ? "bg-surface text-foreground"
                        : "text-muted hover:bg-surface hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </Container>

      {/* Scroll progress, riding the navbar's bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 overflow-hidden"
      >
        <div
          className="h-full w-full origin-left will-change-transform"
          style={{
            transform: `scaleX(${progress})`,
            background: "var(--accent-gradient)",
          }}
        />
      </div>
    </header>
  );
}
