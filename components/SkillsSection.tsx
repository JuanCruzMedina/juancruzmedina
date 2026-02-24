import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function SkillsSection() {
  const categories = siteConfig.resume.skillsByCategory;

  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Expertise
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-accent md:text-6xl">
            STACK & SKILLS
          </h2>
        </FadeInSection>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {categories.map((category, i) => (
            <FadeInSection key={category.label} delay={i * 100}>
              <h3 className="text-[10px] font-medium tracking-[0.3em] text-accent uppercase">
                {category.label}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="border border-border px-3 py-1.5 text-[11px] tracking-wide text-muted transition-colors hover:border-muted hover:text-accent"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={400}>
          <div className="mt-16">
            <Link
              href="/experience"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              Full Experience
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
