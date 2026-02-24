import { FadeInSection } from "@/components/FadeInSection";
import { ProjectStackedList } from "@/components/ProjectPreviewItem";
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

        <FadeInSection delay={80}>
          <div className="mt-16 md:mt-20">
            <ProjectStackedList projects={featured} />
          </div>
        </FadeInSection>

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
