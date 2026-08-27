import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked, and what I shipped."
          description="A timeline of roles, teams, and the things I helped put into production. Currently being assembled."
        />
      </Reveal>
    </Section>
  );
}
