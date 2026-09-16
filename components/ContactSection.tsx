"use client";

import { FadeInSection } from "@/components/FadeInSection";
import { siteConfig } from "@/config/site";
import { useState } from "react";

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
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <h2 className="sr-only">Get in touch</h2>
          <p className="max-w-md text-sm leading-relaxed text-muted md:text-base">
            Open to new opportunities and collaborations. Reach out for
            consulting, freelance work, or just to say hi.
          </p>
          <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <a
              href={siteConfig.sendEmail}
              className="font-display text-3xl tracking-[0.02em] text-accent transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:text-5xl"
            >
              {siteConfig.email}
            </a>
            <button
              type="button"
              onClick={handleCopy}
              className="link-underline text-[11px] font-medium tracking-[0.25em] text-muted uppercase transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {copied ? "Copied!" : "Copy email"}
            </button>
          </div>
          <div className="mt-6 flex gap-6">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[10px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-accent"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[10px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[10px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-accent"
            >
              X
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
