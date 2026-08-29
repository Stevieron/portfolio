import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

interface Job {
  title: string;
  active?: boolean;
  period: string;
  meta: string;
  points: string[];
}

const jobs: Job[] = [
  {
    title: "Frontend Software Engineer",
    active: true,
    period: "Nov. 2025 — Present",
    meta: "Iklass Africa · Remote - Geneva",
    points: [
      "Lead frontend development across the iKlass Africa web app and admin dashboard, delivering scalable solutions that empower learners, instructors, and administrators while establishing frontend engineering standards for the team.",
      "Architect reusable frontend infrastructure, including SEO systems, shared UI components, and request abstractions, to improve maintainability, consistency, and development velocity across multiple products.",

      "Drive frontend architecture and reusable design systems that improve UI consistency, accelerate feature delivery, and support long-term platform scalability.",
      "Collaborate closely with product, backend, and design teams to translate business requirements into reliable, production-ready features while continuously improving application performance and user experience.",
    ],
  },
  {
    title: "Frontend Software Developer",
    period: "Jun. 2023 — Oct. 2025",
    meta: "MindByte Technologies · Remote - Europe & Africa",
    points: [
      "Designed user interface in Figma and developed responsive React interfaces for Smart-Repo, a legal research platform focused on Smart Transportation Systems.",
      "Collaborated with backend engineers to integrate aggregated legal and regulatory content from government sources, improving access to transportation legislation.",

      "Wrote unit and integration tests, lifting coverage on core booking and checkout flows.",
      "Mentored two junior developers through structured code review and pairing.",
    ],
  },
];

const activeThread =
  "linear-gradient(to bottom, color-mix(in oklab, var(--accent) 40%, var(--border)) 0%, var(--border) 20%)";

const railClass =
  "grid grid-cols-[1rem_1fr] gap-x-4 sm:grid-cols-[1.25rem_1fr] sm:gap-x-6";

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've Contributed." />
      </Reveal>

      <Reveal delay={0.05}>
        <ol className="mt-12 lg:mt-16">
          {jobs.map((job, i) => {
            const isLast = i === jobs.length - 1;

            return (
              <li key={job.title} className={railClass}>
                <div className="flex flex-col items-center" aria-hidden>
                  <span
                    className={`shrink-0 rounded-full ${
                      job.active
                        ? "mt-2 h-2.5 w-2.5 bg-accent ring-4 ring-accent/15"
                        : "mt-[0.6rem] h-2 w-2 border border-border bg-background"
                    }`}
                  />
                  <span
                    className="mt-1.5 w-px flex-1"
                    style={{
                      background: job.active ? activeThread : "var(--border)",
                    }}
                  />
                </div>

                {/* Entry */}
                <div className={`min-w-0 ${isLast ? "" : "pb-12"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-foreground">
                      {job.title}
                    </h3>

                    <div className="flex shrink-0 items-center gap-2">
                      {job.active && <Tag variant="active">Active</Tag>}
                      <Tag variant="date">{job.period}</Tag>
                    </div>
                  </div>

                  <p className="mt-1.5 text-[0.8125rem] text-muted">
                    {job.meta}
                  </p>

                  <ul className="mt-4  space-y-3">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-[1.6] text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--accent-gradient)" }}
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-14 lg:mt-16">
          <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted">
            <span aria-hidden className="h-px w-8 rounded-full bg-border" />
            Education
          </span>

          <div className={`mt-5 ${railClass}`}>
            <div className="flex flex-col items-center" aria-hidden>
              <span className="mt-[0.5rem] h-2 w-2 shrink-0 rounded-full border border-border bg-background" />
              <span className="mt-1.5 w-px flex-1 bg-border" />
            </div>

            <div className="min-w-0 space-y-2">
              <p className="text-base font-semibold tracking-[-0.01em] text-foreground">
                Adekunle Ajasin University, Akungba
              </p>
              <p className="text-sm text-muted font-semibold">
                B.Sc. (Hons) Geology
              </p>
              <p className="font-mono text-[0.58rem] tracking-[0.14em] text-muted/70">
                May 2019
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
