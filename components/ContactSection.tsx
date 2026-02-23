"use client";

import { useState } from "react";
import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = siteConfig.email;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: open mailto
      window.location.href = siteConfig.sendEmail;
    }
  };

  return (
    <section id="contact" className="border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
            Let&apos;s work together
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-[var(--color-accent)] md:text-6xl">
            GET IN TOUCH
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
            Open to new opportunities and collaborations. Reach out for
            consulting, freelance work, or just to say hi.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.sendEmail}
              className="font-mono text-sm text-[var(--color-accent-muted)] transition-colors hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="link-underline text-[11px] font-medium tracking-[0.25em] text-[var(--color-muted)] uppercase transition-colors hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
          <div className="mt-6 flex gap-6">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase transition-colors hover:text-[var(--color-accent)]"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase transition-colors hover:text-[var(--color-accent)]"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[10px] tracking-[0.25em] text-[var(--color-muted)] uppercase transition-colors hover:text-[var(--color-accent)]"
            >
              X
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
