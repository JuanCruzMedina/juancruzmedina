import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function AboutSection() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:gap-20">
          <FadeInSection>
            <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
              About
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-accent md:text-6xl">
              THE DEVELOPER
            </h2>
          </FadeInSection>

          <FadeInSection delay={150}>
            <p className="text-base leading-[1.8] text-accent-muted md:text-lg md:leading-[1.9]">
              {siteConfig.resume.descriptionShort}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href="/experience"
                className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
              >
                More about me &rarr;
              </Link>
              <a
                href="https://drive.google.com/uc?export=download&id=1ZSRUiKi03RxlbEuYkUqfOmGlqcI9ngOV"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-[11px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-accent"
              >
                Download CV &darr;
              </a>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
