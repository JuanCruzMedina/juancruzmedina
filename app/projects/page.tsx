import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import LargeProjectCard from "@/components/projects/LargeProjectCard";

export default function ProjectsPage() {
  const { projects } = siteConfig;

  return (
    <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-start justify-center">
        <span className={title({ size: "lg" })}>{projects.title}</span>
        <br />
        <span className={title({ color: "violet", size: "xxl" })}>
          {projects.titleMark}&nbsp;
        </span>
      </div>
      <div className={subtitle({ class: "mt-4" })}>{projects.subtitle}</div>
      <div className="py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {projects.items.map((project, index) => {
            return <LargeProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
