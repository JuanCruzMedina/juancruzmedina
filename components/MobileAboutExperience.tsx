"use client";

import { useRef, useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const PREVIEW_COUNT = 4;
const MD = "\u00B7";

export function MobileAboutExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const allRoles = siteConfig.resume.workExperience;
  const roles = allRoles.slice(0, PREVIEW_COUNT);
  const totalSteps = roles.length;

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = container.offsetHeight;
      const viewportHeight = window.innerHeight;

      const scrolled = -rect.top;
      const scrollableDistance = containerHeight - viewportHeight;

      if (scrollableDistance <= 0) return;

      const rawProgress = scrolled / scrollableDistance;
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));

      const index = Math.min(
        Math.floor(clampedProgress * totalSteps),
        totalSteps - 1,
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [totalSteps]);

  return (
    <section
      ref={containerRef}
      className="relative border-t border-border md:hidden"
      style={{ height: `${(totalSteps + 1) * 60}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center">
        <div className="px-6 pb-12 pt-20">
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            About & Experience
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-accent">
            THE DEVELOPER
          </h2>
          <p className="mt-4 text-xs leading-[1.8] text-accent-muted">
            {siteConfig.resume.descriptionShort}
          </p>

          {/* Progress bar */}
          <div className="mt-8 flex gap-1.5">
            {roles.map((_, i) => (
              <div
                key={i}
                className={`h-[3px] flex-1 rounded-full transition-all duration-500 ${
                  i <= activeIndex ? "bg-accent" : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* Experience card */}
          <div className="relative mt-8 min-h-[170px]">
            {roles.map((role, i) => {
              const isCurrent = /current|present/i.test(role.date);
              return (
                <div
                  key={i}
                  className={`absolute inset-x-0 top-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    i === activeIndex
                      ? "opacity-100 translate-y-0"
                      : i < activeIndex
                        ? "-translate-y-4 opacity-0"
                        : "translate-y-4 opacity-0"
                  }`}
                  aria-hidden={i !== activeIndex}
                >
                  <p className="text-[11px] leading-none text-muted">
                    {role.date}
                    {isCurrent && (
                      <span className="ml-1.5 font-medium tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                        {MD} Present
                      </span>
                    )}
                  </p>

                  <h3 className="mt-2 text-lg font-bold tracking-[0.03em] text-accent uppercase">
                    {role.charge}
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    {role.company} {MD} {role.location}
                  </p>

                  {role.achievement && (
                    <p className="mt-3 text-sm leading-relaxed text-accent-muted">
                      {role.achievement}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Links */}
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Link
              href="/experience"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              View all {allRoles.length} roles &rarr;
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

          {/* Scroll indicator */}
          <div className="mt-6 flex items-center gap-1.5 text-muted/50">
            <span className="animate-scroll-hint text-[10px]">&darr;</span>
          </div>
        </div>
      </div>
    </section>
  );
}
