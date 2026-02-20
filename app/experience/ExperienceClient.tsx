"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const INITIAL_VISIBLE = 4;

export function ExperienceClient() {
  const [expandedCount, setExpandedCount] = useState(INITIAL_VISIBLE);
  const { workExperience } = siteConfig.resume;
  const hasMore = workExperience.length > INITIAL_VISIBLE;
  const showAll = expandedCount >= workExperience.length;

  const visibleJobs = workExperience.slice(0, expandedCount);

  return (
    <div className="mt-20 md:mt-28">
      <div className="space-y-0">
        {visibleJobs.map((job) => (
            <article
              key={`${job.company}-${job.date}`}
              className="group grid gap-6 border-t border-[var(--color-border)] py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-14"
            >
              <div className="flex items-start gap-4">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
                  <Image
                    src={job.companyLogo}
                    alt=""
                    fill
                    className="object-contain p-1"
                    sizes="40px"
                  />
                </div>
                <div className="md:hidden">
                  <p className="text-sm font-medium text-[var(--color-accent)]">
                    {job.company}
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">{job.date}</p>
                </div>
                <div className="hidden md:block">
                  <p className="text-xs text-[var(--color-muted)]">{job.date}</p>
                  <p className="mt-1 text-[10px] tracking-[0.2em] text-[var(--color-muted)] uppercase">
                    {job.type}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-display text-xl tracking-[0.04em] text-[var(--color-accent)] md:text-2xl">
                  {job.charge.toUpperCase()}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  {job.company} &middot; {job.location}
                  <span className="ml-2 md:hidden">&middot; {job.type}</span>
                </p>
                <ul className="mt-4 space-y-2">
                  {job.descriptionItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-sm leading-relaxed text-[var(--color-accent-muted)]"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-[var(--color-border)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
      </div>

      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={() =>
              setExpandedCount(showAll ? INITIAL_VISIBLE : workExperience.length)
            }
            className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
          >
            {showAll ? "Show less" : `Show ${workExperience.length - INITIAL_VISIBLE} more`}
          </button>
        </div>
      )}
    </div>
  );
}
