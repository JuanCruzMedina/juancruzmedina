import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { AboutSection } from "@/components/AboutSection";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { BlogPreview } from "@/components/BlogPreview";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsMarquee />
      <AboutSection />
      <ExperiencePreview />
      <ProjectsPreview />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
