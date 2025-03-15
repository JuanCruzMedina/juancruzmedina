import { simpleTitleResponsive, textParagraph } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import LargeProjectCard from "@/components/projects/LargeProjectCard";

export default function ProjectsPage() {
  const { projects } = siteConfig;

  return (
    <section className="flex flex-col items-start justify-center gap-4">
      <div className="inline-block max-w-lg text-start justify-center">
        <span className={simpleTitleResponsive({ size: "sm" })}>
          {projects.title}
        </span>
        <br />
        <span className={simpleTitleResponsive({ color: "gradientViolet" })}>
          {projects.titleMark}&nbsp;
        </span>
      </div>
      <div className={textParagraph({ size: "lg", class: "mt-4" })}>
        {projects.subtitle}
      </div>
      <div className="md:py-8 py-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {projects.items.map((project, index) => {
            return <LargeProjectCard key={index} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
}
