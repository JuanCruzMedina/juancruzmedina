import { AboutSection } from "@/components/home/AboutSection";
import { ContactSection } from "@/components/home/ContactSection";
import { Hero } from "@/components/home/Hero";
import { LastProjects } from "@/components/projects/LastProjects";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ml-4">
        <Hero />
      </section>

      <section className="mt-8">
        <AboutSection />
      </section>

      <section className="sm:mt-16">
        <LastProjects projects={siteConfig.projects} quantity={3} />
      </section>

      <section className="flex flex-col items-center mt-20 mb-14 ">
        <ContactSection />
      </section>
    </>
  );
}
