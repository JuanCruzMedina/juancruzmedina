"use client";

import { useState } from "react";

const FEATURED_SKILLS = [
  "Java",
  "Go",
  ".NET",
  "Python",
  "AWS",
  "React",
  "Next.js",
  "PostgreSQL",
  "Grafana",
  "Datadog",
  "Kubernetes",
  "Microservices",
  "DDD",
  "TDD",
  "FastAPI",
];

export function SkillsMarquee() {
  const [paused, setPaused] = useState(false);
  const track = [...FEATURED_SKILLS, ...FEATURED_SKILLS];

  return (
    <div
      className="relative w-full overflow-hidden border-t border-border py-10 md:py-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-surface to-transparent md:w-40"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-surface to-transparent md:w-40"
        aria-hidden
      />
      <div
        className={`flex animate-marquee gap-12 whitespace-nowrap md:gap-16 ${paused ? "animate-marquee-paused" : ""}`}
        aria-hidden="true"
      >
        {track.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="shrink-0 font-display text-lg tracking-widest text-muted uppercase md:text-2xl"
          >
            {skill}
          </span>
        ))}
      </div>
      <span className="sr-only">Skills: {FEATURED_SKILLS.join(", ")}</span>
    </div>
  );
}
