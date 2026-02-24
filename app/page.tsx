import { Hero } from "@/components/Hero";
import { SkillsMarquee } from "@/components/SkillsMarquee";
import { AboutSection } from "@/components/AboutSection";
import { ExperiencePreview } from "@/components/ExperiencePreview";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { BlogPreview } from "@/components/BlogPreview";
import { ContactSection } from "@/components/ContactSection";
import { MobileAboutExperience } from "@/components/MobileAboutExperience";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SkillsMarquee />

      {/* Mobile: unified sticky scroll section */}
      <MobileAboutExperience />

      {/* Desktop: original separate sections */}
      <div className="hidden md:block">
        <AboutSection />
        <ExperiencePreview />
      </div>

      <ProjectsPreview />
      <BlogPreview />
      <ContactSection />
    </>
  );
}
