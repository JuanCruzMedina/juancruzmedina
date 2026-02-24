import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

type Project = (typeof siteConfig.projects.items)[number];

export function ProjectStackedList({ projects }: { projects: Project[] }) {
  return (
    <div className="space-y-px">
      {projects.map((project) => (
        <Link
          key={project.id}
          href="/projects"
          className="group relative block border-t border-border py-8 md:py-10"
        >
          <div className="flex items-start justify-between gap-6">
            {/* Left: text content */}
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-2xl tracking-[0.04em] text-accent transition-opacity group-hover:opacity-70 md:text-3xl">
                {project.title.toUpperCase()}
              </h3>
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
            </div>

            {/* Image peek: small on mobile, expands on desktop hover */}
            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded bg-surface-elevated md:h-24 md:w-40 md:transition-[width] md:duration-300 md:group-hover:w-56">
              <Image
                src={`/${project.image}`}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 768px) 96px, 224px"
              />
            </div>
          </div>

          {/* Year - bottom right */}
          <span className="absolute right-0 bottom-3 text-[10px] tracking-[0.3em] text-muted uppercase md:bottom-4">
            {project.date}
          </span>
        </Link>
      ))}
      {/* Bottom border for last item */}
      <div className="border-t border-border" />
    </div>
  );
}
