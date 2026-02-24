import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { ExperienceClient } from "./ExperienceClient";

export default function ExperiencePage() {
  const {
    education,
    languages,
    certifications,
    experienceDescription,
    experienceStats,
  } = siteConfig.resume;

  const resolvedStats = experienceStats.map((stat) => ({
    label: stat.label,
    value:
      "value" in stat && stat.value !== undefined
        ? stat.value
        : String(
            (stat as { getValue: (c: typeof siteConfig) => number }).getValue(
              siteConfig,
            ),
          ),
  }));

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Career
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-[0.04em] text-accent md:text-7xl">
            EXPERIENCE
          </h1>
        </div>
        <div className="flex flex-col justify-end gap-8">
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            {experienceDescription}
          </p>
          <div className="flex flex-wrap gap-10">
            {resolvedStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-bold tracking-tight text-accent md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-medium tracking-[0.3em] text-muted uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ExperienceClient />

      <div className="mt-20 grid gap-16 border-t border-border pt-20 md:mt-28 md:grid-cols-3 md:pt-28">
        <div>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Education
          </p>
          <div className="mt-6 space-y-6">
            {education.map((edu) => (
              <div key={edu.title} className="flex gap-4">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden border border-border bg-surface-elevated">
                  <Image
                    src={edu.image}
                    alt=""
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-accent">{edu.title}</p>
                  <p className="text-xs text-muted">{edu.institution}</p>
                  <p className="text-xs text-muted">{edu.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Languages
          </p>
          <div className="mt-6 space-y-3">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-baseline justify-between"
              >
                <p className="text-sm text-accent">{lang.name}</p>
                <p className="text-xs text-muted">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Certifications
          </p>
          <div className="mt-6 space-y-4">
            {certifications.map((cert) => (
              <a
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cert block"
              >
                <p className="text-sm text-accent transition-opacity group-hover/cert:opacity-70">
                  {cert.title}
                </p>
                <p className="text-xs text-muted">
                  {cert.company} &middot; {cert.date}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/"
          className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
