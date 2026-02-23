import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function ProjectsPreview() {
  const { items: allProjects, featuredIds } = siteConfig.projects;
  const featured = featuredIds
    .map((id) => allProjects.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p != null);

  return (
    <section className="border-t-[0.5px] border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Selected Work
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-accent md:text-6xl">
            PROJECTS
          </h2>
        </FadeInSection>

        <div className="mt-16 md:mt-20">
          {featured.map((project, i) => (
            <FadeInSection key={project.id ?? project.title} delay={i * 80}>
              <Link
                href="/projects"
                className="group block border-t border-border py-8 transition-colors last:border-b last:border-border md:py-10"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-xl tracking-[0.04em] text-accent transition-opacity group-hover:opacity-70 md:text-2xl">
                    {project.title.toUpperCase()}
                  </h3>
                  <span className="flex items-center gap-2 shrink-0 text-xs text-muted">
                    {project.date}
                    <span className="transition-opacity md:opacity-0 md:group-hover:opacity-100">
                      &rarr;
                    </span>
                  </span>
                </div>

                <p className="mt-1.5 text-sm text-muted">{project.subtitle}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-border px-2.5 py-0.5 text-[10px] tracking-[0.15em] text-muted uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={200}>
          <div className="mt-14 text-center md:mt-20">
            <Link
              href="/projects"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              View all {allProjects.length} projects &rarr;
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
