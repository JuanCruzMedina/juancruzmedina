import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  return (
    <section className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
            Let&apos;s work together
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-[var(--color-accent)] md:text-6xl">
            GET IN TOUCH
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            Open to new opportunities and collaborations. Reach out for consulting, freelance work, or just to say hi.
          </p>
          <a
            href={siteConfig.sendEmail}
            className="link-underline mt-8 inline-block text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
          >
            Contact me
          </a>
        </FadeInSection>
      </div>
    </section>
  );
}
