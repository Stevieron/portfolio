import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StatCard } from "@/components/ui/StatCard";

// Placeholder copy — written to be replaced. Keep three short paragraphs.
const paragraphs = [
  "I'm a frontend engineer who spends most days turning ambiguous product requirements into interfaces people can actually rely on. My work sits close to the user: layout, state, performance, and the small interactions that decide whether a product feels considered.",
  "Over the last few years I've shipped production applications for teams across Europe and Africa, working alongside designers and backend engineers to move features from first sketch to release. I care about accessible markup, predictable state, and design systems that stay coherent as they grow.",
  "Lately I've been focused on the frontend of data-heavy products ranging from dashboards, internal tooling, and customer-facing platforms, where clarity under complexity matters more than flourish. I like leaving codebases calmer than I found them.",
];

const stats = [
  { value: "3+", label: "Years building production web applications" },
  { value: "5+", label: "Projects taken from first sketch to release" },
  { value: "2", label: "Regions — Europe and Africa" },
];

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading
          eyebrow="About"
          title="Engineering the frontend of products people depend on."
        />
      </Reveal>

      <div className="mt-14 grid gap-x-16 gap-y-14 lg:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        {/* Left: narrative */}
        <div className="max-w-xl space-y-6">
          {paragraphs.map((text, i) => (
            <Reveal key={i} delay={0.05 * i}>
              <p className="text-base leading-7 text-muted sm:text-[1.0625rem] sm:leading-8">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        {/* Right: stat cards */}
        <div className="flex flex-col gap-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.value} delay={0.08 * i}>
              <StatCard {...stat} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
