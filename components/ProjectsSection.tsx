import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  const { items, featuredIds } = siteConfig.projects;
  const featured = featuredIds
    .map((id) => items.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => p != null);

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Selected Work
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-accent md:text-6xl">
            PROJECTS
          </h2>
        </FadeInSection>

        <div className="mt-16 space-y-20 md:mt-24 md:space-y-32">
          {featured.map((project, i) => (
            <FadeInSection key={project.id ?? project.title} delay={i * 100}>
              <article className="group grid gap-8 md:grid-cols-2 md:gap-16">
                <Link
                  href="/projects"
                  className={`image-zoom relative aspect-4/3 bg-surface-elevated ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={`/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i === 0}
                  />
                </Link>
                <div
                  className={`flex flex-col justify-center ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <span className="text-[10px] tracking-[0.3em] text-muted uppercase">
                    {project.date}
                  </span>
                  <h3 className="mt-3 font-display text-2xl tracking-[0.04em] text-accent md:text-3xl">
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-accent-muted">
                    {project.shortDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-3 py-1 text-[10px] tracking-[0.15em] text-muted uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-6">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[11px] font-medium tracking-[0.25em] text-accent uppercase"
                      >
                        View Live
                      </a>
                    )}
                    {project.sourceLink && (
                      <a
                        href={project.sourceLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[11px] tracking-[0.25em] text-muted uppercase"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={200}>
          <div className="mt-20 text-center md:mt-28">
            <Link
              href="/projects"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              View All Projects
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
