import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Socials } from "../layout/Socials";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(56,189,248,0.14),transparent_30%)]" />

      <Container>
        <div className="relative flex min-h-[calc(100vh-4rem)] items-center py-24 lg:py-32">
          <div className="grid w-full gap-16 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-4xl">
              <Reveal>
                <h1 className="mt-8 text-5xl font-semibold tracking-[-0.04em] text-foreground sm:text-6xl lg:text-7xl">
                  Hey, I&rsquo;m Stephen
                </h1>
              </Reveal>

              <Reveal delay={0.08}>
                <h3 className="mt-3 text-3xl font-bold max-w-2xl leading-7 text-muted sm:text-2xl lg:text-2xl">
                  Software Engineering & Product Development
                </h3>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
                  I&rsquo;m a frontend software engineer with 3+ years building
                  and
                  shipping production web applications and data-driven products
                  across Europe and Africa, turning complex requirements into
                  reliable, intuitive experiences.{" "}
                </p>
              </Reveal>

              <Reveal delay={0.24}>
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Button href="#work" variant="accent">
                    View Projects
                  </Button>

                  <Button href="/resume.pdf" variant="secondary">
                    Download CV
                  </Button>

                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  >
                    Reach Me
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="mt-4">
                  <Socials />
                </div>
              </Reveal>
            </div>
          </div>

          <div className="absolute bottom-8 right-0 hidden items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted/60 sm:flex">
            Available for opportunities
            <ArrowUpRight size={12} />
          </div>
        </div>
      </Container>
    </section>
  );
}
