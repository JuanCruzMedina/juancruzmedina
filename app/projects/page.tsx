import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
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
        {items.map((project, i) => (
          <FadeInSection key={project.title} delay={i * 100}>
            <article className="group grid gap-8 md:grid-cols-2 md:gap-16">
              <div
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
              </div>
              <div
                className={`flex flex-col justify-center ${
                  i % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <span className="text-[10px] tracking-[0.3em] text-muted uppercase">
                  {project.date}
                </span>
                <h2 className="mt-3 font-display text-3xl tracking-[0.04em] text-accent md:text-4xl">
                  {project.title.toUpperCase()}
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
