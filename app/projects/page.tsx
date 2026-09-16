import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
import {
  getProjectPath,
  getProjectSourceLink,
  hasCaseStudy,
} from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const { items } = siteConfig.projects;

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
      <FadeInSection>
        <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
          Archive
        </p>
        <h1 className="mt-4 font-display text-5xl tracking-[0.04em] text-accent md:text-7xl">
          ALL PROJECTS
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {siteConfig.projects.subtitle}
        </p>
      </FadeInSection>

      <div className="mt-20 space-y-24 md:mt-28 md:space-y-32">
        {items.map((project, i) => {
          const caseStudy = hasCaseStudy(project.id);
          const href = getProjectPath(project.id);

          return (
            <FadeInSection key={project.id} delay={i * 100}>
              <article
                id={project.id}
                className="group grid scroll-mt-32 gap-8 md:grid-cols-2 md:gap-16"
              >
                <Link
                  href={href}
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
                  <h2 className="mt-3 font-display text-3xl tracking-[0.04em] text-accent md:text-4xl">
                    <Link href={href} className="hover:opacity-70">
                      {project.title.toUpperCase()}
                    </Link>
                  </h2>
                  <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
                  <p className="mt-5 text-sm leading-relaxed text-accent-muted">
                    {project.fullDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-3 py-1 text-[10px] tracking-[0.15em] text-muted uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-6">
                    {caseStudy && (
                      <Link
                        href={`/projects/${project.id}`}
                        className="link-underline text-[11px] font-medium tracking-[0.25em] text-accent uppercase"
                      >
                        Case Study
                      </Link>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[11px] font-medium tracking-[0.25em] text-muted uppercase"
                      >
                        View Live
                      </a>
                    )}
                    {getProjectSourceLink(project) && (
                      <a
                        href={getProjectSourceLink(project)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[11px] font-medium tracking-[0.25em] text-muted uppercase"
                      >
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </FadeInSection>
          );
        })}
      </div>

      <FadeInSection delay={200}>
        <div className="mt-20 text-center">
          <Link
            href="/"
            className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
          >
            Back to Home
          </Link>
        </div>
      </FadeInSection>
    </div>
  );
}
