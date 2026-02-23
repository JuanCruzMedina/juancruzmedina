import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FadeInSection } from "@/components/FadeInSection";

const PREVIEW_COUNT = 4;
const MD = "\u00B7";

export function ExperiencePreview() {
  const allRoles = siteConfig.resume.workExperience;
  const roles = allRoles.slice(0, PREVIEW_COUNT);

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Recent Roles
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-accent md:text-6xl">
            EXPERIENCE
          </h2>
        </FadeInSection>

        <div className="relative mt-16 md:mt-20">
          <div
            className="absolute left-0 top-0 bottom-0 w-px bg-border"
            aria-hidden
          />

          <div className="space-y-10">
            {roles.map((role, i) => {
              const isCurrent = /current|present/i.test(role.date);

              return (
                <FadeInSection key={`${role.company}-${i}`} delay={i * 80}>
                  <article className="relative pl-8 md:pl-10">
                    <div
                      className={`absolute left-0 top-[3px] h-[9px] w-[9px] -translate-x-1/2 rounded-full border-2 ${
                        isCurrent
                          ? "border-emerald-500 bg-emerald-500"
                          : "border-accent bg-surface"
                      }`}
                      aria-hidden
                    />

                    <p className="text-[11px] leading-none text-muted">
                      {role.date}
                      {isCurrent && (
                        <span className="ml-1.5 font-medium text-emerald-600 uppercase tracking-wider dark:text-emerald-400">
                          {MD} Present
                        </span>
                      )}
                    </p>

                    <h3 className="mt-1.5 text-base font-bold uppercase tracking-[0.03em] text-accent md:text-lg">
                      {role.charge}
                    </h3>

                    <p className="mt-0.5 text-sm text-muted">
                      {role.company} {MD} {role.location}
                    </p>

                    {role.achievement && (
                      <p className="mt-2 text-sm leading-relaxed text-accent-muted">
                        {role.achievement}
                      </p>
                    )}
                  </article>
                </FadeInSection>
              );
            })}
          </div>
        </div>

        <FadeInSection delay={200}>
          <div className="mt-14 text-center md:mt-20">
            <Link
              href="/experience"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              View all {allRoles.length} roles &rarr;
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
