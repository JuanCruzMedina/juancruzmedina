import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { LastProjects } from "@/components/projects/LastProjects";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ml-4">
        <Hero />
      </section>

      <section className="py-8 mt-4">
        <About />
      </section>

      <section>
        <LastProjects projects={siteConfig.projects} quantity={3} />
      </section>

      <section className="flex flex-col items-center mt-36 mb-14 ">
        <Contact />
      </section>
    </>
  );
}
