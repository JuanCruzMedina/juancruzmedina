import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { LastProjects } from "@/components/lastProjects";

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
        <LastProjects quantity={3} />
      </section>

      <section className="flex flex-col items-center mt-36 mb-14 ">
        <Contact />
      </section>
    </>
  );
}
