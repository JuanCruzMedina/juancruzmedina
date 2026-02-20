"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export function SkillsMarquee() {
  const [paused, setPaused] = useState(false);
  const skills = siteConfig.resume.skills;
  const track = [...skills, ...skills];

  return (
    <div
      className="relative w-full overflow-hidden border-t border-[var(--color-border)] py-10 md:py-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[var(--color-surface)] to-transparent md:w-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[var(--color-surface)] to-transparent md:w-40"
        aria-hidden
      />
      <div
        className={`flex animate-marquee gap-12 whitespace-nowrap md:gap-16 ${paused ? "animate-marquee-paused" : ""}`}
      >
        {track.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="shrink-0 font-display text-lg tracking-[0.1em] text-[var(--color-muted)] uppercase md:text-2xl"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
