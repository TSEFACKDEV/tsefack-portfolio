import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { getProjects } from "@/lib/projects";

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Projects projects={projects} />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}
