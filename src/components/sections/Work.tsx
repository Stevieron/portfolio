import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard, type Project } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Placeholder descriptions — written to be replaced.
const projects: Project[] = [
  {
    title: "Iklass Africa Web App",
    tags: ["Production", "Product Engineering"],
    description:
      "The public-facing platform for iKlass Africa, supporting course discovery, enrolment, and learner experiences. Contributed significantly to building the frontend with an emphasis on fast navigation, accessibility, and a scalable design system across the product.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    deployment:
      "Deployed to production. Supports students across Africa in discovering and accessing learning opportunities.",
    image: {
      src: "/images/projects/iklass-web.jpg",
      alt: "Iklass Africa web app interface",
    },
    href: "https://iklass.africa",
  },
  {
    title: "Iklass Africa Admin Dashboard",
    tags: ["Production", "Product Engineering"],
    description:
      "The internal back office powering iKlass Africa by supporting content management, cohort operations, and reporting. Built interfaces for dense data, bulk workflows, and role-aware views that help admins manage the platform efficiently.",
    stack: ["React.js", "TypeScript", "Tailwind"],
    deployment:
      "Deployed to production. Equips the Iklass Africa team to manage courses, learners, and daily operations at scale.",
    image: {
      src: "/images/projects/iklass-backoffice.jpg",
      alt: "Iklass Africa admin dashboard interface",
    },
    href: "https://mngt.iklass.africa/",
  },
];

export function Work() {
  return (
    <Section id="work">
      <Reveal>
        <SectionHeading
          eyebrow="Work"
          title="Selected Projects"
          description="Production web apps I've built and contributed to, across Edtech and research in Smart Transportation."
        />
      </Reveal>

      <div className="mt-12 flex flex-col gap-8 lg:mt-16">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.08}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
