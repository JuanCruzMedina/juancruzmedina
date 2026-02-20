"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <div className="overflow-hidden">
          <p className="animate-fade-up stagger-1 font-mono text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase md:text-xs">
            {siteConfig.location}
          </p>
        </div>

        <div className="mt-6 overflow-hidden md:mt-8">
          <h1 className="animate-fade-up stagger-2 font-display text-[clamp(3.5rem,15vw,13rem)] leading-[0.85] tracking-[0.04em] text-[var(--color-accent)]">
            {siteConfig.displayName.split(" ").slice(0, 2).join(" ").toUpperCase()}
          </h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="animate-fade-up stagger-3 font-display text-[clamp(3.5rem,15vw,13rem)] leading-[0.85] tracking-[0.04em] text-[var(--color-accent)]">
            {siteConfig.displayName.split(" ").slice(2).join(" ").toUpperCase()}
          </h1>
        </div>

        <div className="mt-8 overflow-hidden md:mt-10">
          <p className="animate-fade-up stagger-4 max-w-md text-sm leading-relaxed tracking-wide text-[var(--color-muted)] md:text-base">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="mt-10 flex animate-fade-up stagger-5 gap-8 md:mt-12">
          <Link
            href={siteConfig.sendEmail}
            className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
          >
            Contact
          </Link>
          <Link
            href="/projects"
            className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
          >
            Projects
          </Link>
          <Link
            href="/experience"
            className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
          >
            Experience
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in stagger-6">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.4em] text-[var(--color-muted)] uppercase">
            Scroll
          </span>
          <div className="animate-scroll-hint">
            <svg
              width="16"
              height="24"
              viewBox="0 0 16 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-[var(--color-muted)]"
            >
              <path d="M8 4v8M8 12l-3-3M8 12l3-3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
