import { siteConfig } from "@/config/site";
import Link from "next/link";
import Image from "next/image";

export default function ExperiencePage() {
  const { workExperience, education, languages, certifications } =
    siteConfig.resume;

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
      <div className="grid gap-8 md:grid-cols-2 md:gap-16">
        <div>
          <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
            Career
          </p>
          <h1 className="mt-4 font-display text-5xl tracking-[0.04em] text-[var(--color-accent)] md:text-7xl">
            EXPERIENCE
          </h1>
        </div>
        <div className="flex items-end">
          <p className="max-w-md text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            {siteConfig.resume.descriptionShort}
          </p>
        </div>
      </div>

      <div className="mt-20 md:mt-28">
        <div className="space-y-0">
          {workExperience.map((job) => (
            <article
              key={`${job.company}-${job.date}`}
              className="group grid gap-6 border-t border-[var(--color-border)] py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-14"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
                  <Image
                    src={job.companyLogo}
                    alt=""
                    fill
                    className="object-contain p-1"
                    sizes="40px"
                  />
                </div>
                <div className="md:hidden">
                  <p className="text-sm font-medium text-[var(--color-accent)]">
                    {job.company}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {job.date}
                  </p>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs text-[var(--color-muted)]">
                    {job.date}
                  </p>
                  <p className="mt-1 text-[10px] tracking-[0.2em] text-[var(--color-muted)] uppercase">
                    {job.type}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl tracking-[0.04em] text-[var(--color-accent)] md:text-2xl">
                  {job.charge.toUpperCase()}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {job.company} &middot; {job.location}
                  <span className="ml-2 md:hidden">
                    &middot; {job.type}
                  </span>
                </p>
                <ul className="mt-4 space-y-2">
                  {job.descriptionItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--color-accent-muted)]"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-[var(--color-border)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-20 grid gap-16 border-t border-[var(--color-border)] pt-20 md:mt-28 md:grid-cols-3 md:pt-28">
        <div>
          <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
            Education
          </p>
          <div className="mt-6 space-y-6">
            {education.map((edu) => (
              <div key={edu.title} className="flex gap-4">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
                  <Image
                    src={edu.image}
                    alt=""
                    fill
                    className="object-contain p-0.5"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--color-accent)]">
                    {edu.title}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    {edu.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
            Languages
          </p>
          <div className="mt-6 space-y-3">
            {languages.map((lang) => (
              <div key={lang.name} className="flex items-baseline justify-between">
                <p className="text-sm text-[var(--color-accent)]">{lang.name}</p>
                <p className="text-xs text-[var(--color-muted)]">{lang.level}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
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
                <p className="text-sm text-[var(--color-accent)] transition-opacity group-hover/cert:opacity-70">
                  {cert.title}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
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
          className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
