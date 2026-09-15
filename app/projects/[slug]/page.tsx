import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
import { markdownProseClasses } from "@/lib/markdown-prose";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
  getProjectById,
  getProjectSourceLink,
} from "@/lib/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectById(slug);
  if (!project) return {};

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.shortDescription,
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectById(slug);
  const caseStudy = getCaseStudyBySlug(slug);
  if (!project || !caseStudy) notFound();

  const sourceLink = getProjectSourceLink(project);

  return (
    <article className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
      <Link
        href="/projects"
        className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
      >
        All Projects
      </Link>

      <FadeInSection>
        <header className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-[10px] tracking-[0.3em] text-muted uppercase">
              {project.date}
            </span>
            <h1 className="mt-4 font-display text-4xl tracking-[0.04em] text-accent md:text-6xl">
              {project.title.toUpperCase()}
            </h1>
            <p className="mt-3 text-sm text-muted md:text-base">
              {project.subtitle}
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
              {sourceLink && (
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[11px] font-medium tracking-[0.25em] text-muted uppercase"
                >
                  Source
                </a>
              )}
            </div>
          </div>
          <div className="image-zoom relative aspect-4/3 bg-surface-elevated">
            <Image
              src={`/${project.image}`}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </header>
      </FadeInSection>

      <div className={`mx-auto max-w-3xl ${markdownProseClasses}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {caseStudy.content}
        </ReactMarkdown>
      </div>

      <div className="mx-auto mt-20 max-w-3xl border-t border-border pt-10">
        <Link
          href="/projects"
          className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
        >
          All Projects
        </Link>
      </div>
    </article>
  );
}
