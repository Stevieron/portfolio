import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Building() {
  return (
    <Section id="building">
      <Reveal>
        <SectionHeading
          eyebrow="Building"
          title="What I'm making right now."
          description="A running log of side projects and experiments. This space fills in soon."
        />
      </Reveal>
    </Section>
  );
}
