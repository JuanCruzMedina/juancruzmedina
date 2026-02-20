import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <FadeInSection>
            <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
              About
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-[var(--color-accent)] md:text-6xl">
              THE DEVELOPER
            </h2>
          </FadeInSection>

          <FadeInSection delay={150}>
            <p className="text-base leading-[1.8] text-[var(--color-accent-muted)] md:text-lg md:leading-[1.9]">
              {siteConfig.resume.description}
            </p>
            <div className="mt-8">
              <Link
                href="/experience"
                className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
              >
                View Experience
              </Link>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
