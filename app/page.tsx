import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { AboutSection } from "@/components/AboutSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsMarquee />
      <AboutSection />
      <ProjectsSection />
    </>
  );
}
