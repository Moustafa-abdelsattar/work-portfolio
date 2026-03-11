import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatIBuild from "@/components/WhatIBuild";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsBento from "@/components/SkillsBento";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhatIBuild />
        <ProjectsGrid />
        <SkillsBento />
        <Timeline />
        <Contact />
      </main>
    </>
  );
}
