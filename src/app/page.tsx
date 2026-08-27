import { About } from "@/components/sections/About";
import { Building } from "@/components/sections/Building";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Work } from "@/components/sections/Work";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Building />
      <Experience />
      <Contact />
    </>
  );
}
