import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Work() {
  return (
    <Section id="work">
      <Reveal>
        <SectionHeading
          eyebrow="Work"
          title="Selected projects, written up properly."
          description="Case studies are on the way. In the meantime the code speaks on GitHub — or reach out for a walkthrough."
        />
      </Reveal>
    </Section>
  );
}
