import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Socials } from "../layout/Socials";

export function Contact() {
  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something."
          description="The fastest way to reach me is email — I read everything and usually reply within a day."
        />
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
          <Button href="mailto:stevenbassey07@gmail.com" variant="accent">
            Email me
          </Button>

          <Socials />
        </div>
      </Reveal>
    </Section>
  );
}
