"use client";

import { siteConfig } from "@/config/site";
import { useEffect, useMemo, useRef, useState } from "react";

const MONTHS: Record<string, number> = {
  jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
  jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11,
};

function parseDateToken(value: string): Date | null {
  const clean = value.trim();
  if (!clean) return null;
  const yearOnly = clean.match(/^(\d{4})$/);
  if (yearOnly) return new Date(Number(yearOnly[1]), 0, 1);
  const monthYear = clean.match(/^([a-zA-Z]{3,})\s+(\d{4})$/);
  if (monthYear) {
    const month = MONTHS[monthYear[1].slice(0, 3).toLowerCase()];
    if (month === undefined) return null;
    return new Date(Number(monthYear[2]), month, 1);
  }
  return null;
}

function parseDateRange(value: string) {
  const clean = value.trim();
  const isCurrent = /current/i.test(clean);
  const now = new Date();
  const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);

  if (clean.includes("-")) {
    const [startRaw, endRaw] = clean.split("-").map((s) => s.trim());
    const start = parseDateToken(startRaw);
    const end = /current/i.test(endRaw)
      ? currentMonth
      : (parseDateToken(endRaw) ?? currentMonth);
    return { start, end, isCurrent };
  }

  if (clean.includes(",")) {
    const years = clean
      .split(",")
      .map((p) => Number(p.trim()))
      .filter(Number.isFinite);
    if (years.length >= 2) {
      return {
        start: new Date(years[0], 0, 1),
        end: new Date(years[1], 11, 1),
        isCurrent: years[1] >= now.getFullYear(),
      };
    }
  }

  const singleDate = parseDateToken(clean);
  return { start: singleDate, end: singleDate, isCurrent };
}

function monthDiff(start: Date | null, end: Date | null) {
  if (!start || !end) return null;
  const diff =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;
  return diff > 0 ? diff : null;
}

function formatDuration(totalMonths: number | null) {
  if (!totalMonths) return null;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  if (years === 0) return `${months} mo`;
  if (months === 0) return `${years} yr${years === 1 ? "" : "s"}`;
  return `${years} yr${years === 1 ? "" : "s"} ${months} mo`;
}

function formatYearRange(start: Date | null, end: Date | null): string {
  if (!start || !end) return "";
  const sy = start.getFullYear();
  const ey = end.getFullYear();
  return sy === ey ? String(sy) : `${sy}\u2013${ey}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const MD = "\u00B7";

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function TimelineEntry({
  role,
  index,
}: {
  role: ReturnType<typeof useProcessedRoles>[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const { ref, visible } = useInView();

  return (
    <article
      ref={ref}
      id={role.id}
      className="relative pl-8 md:pl-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 60}ms, transform 0.5s cubic-bezier(0.22,1,0.36,1) ${index * 60}ms`,
      }}
    >
      {/* Dot centered on timeline */}
      <div
        className={`absolute left-0 top-[3px] h-[9px] w-[9px] -translate-x-1/2 rounded-full border-2 ${
          role.isCurrent
            ? "border-emerald-500 bg-emerald-500"
            : "border-[var(--color-accent)] bg-[var(--color-surface)]"
        }`}
        aria-hidden
      />

      {/* Year + duration */}
      <p className="text-[11px] leading-none text-[var(--color-muted)]">
        {role.yearLabel}
        {role.durationLabel && (
          <span className="ml-1.5 uppercase tracking-[0.06em]">
            {MD} {role.durationLabel}
          </span>
        )}
        {role.isCurrent && (
          <span className="ml-1.5 font-medium text-emerald-600 uppercase tracking-wider dark:text-emerald-400">
            {MD} Present
          </span>
        )}
      </p>

      {/* Title */}
      <h3 className="mt-1.5 text-base font-bold uppercase tracking-[0.03em] text-[var(--color-accent)] md:text-lg">
        {role.charge}
      </h3>

      {/* Company · Location · Type */}
      <p className="mt-0.5 text-sm text-[var(--color-muted)]">
        {role.company} {MD} {role.location} {MD} {role.type}
      </p>

      {/* Achievement */}
      {role.achievement && (
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-accent-muted)]">
          {role.achievement}
        </p>
      )}

      {/* Tech stack */}
      {role.techStack.length > 0 && (
        <p className="mt-2 text-[11px] text-[var(--color-muted)]">
          {role.techStack.join(` ${MD} `)}
        </p>
      )}

      {/* Expand toggle + details */}
      {role.descriptionItems.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={`exp-detail-${role.index}`}
            className="mt-2.5 flex cursor-pointer items-center gap-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            {open ? "Less" : "Details"}
          </button>

          <div
            id={`exp-detail-${role.index}`}
            role="region"
            aria-label={`Details for ${role.charge} at ${role.company}`}
            className={`grid overflow-hidden transition-all duration-300 ease-out ${
              open ? "mt-3 max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--color-accent-muted)]">
              {role.descriptionItems.map((item, idx) => (
                <li key={idx} className="flex gap-2.5">
                  <span className="mt-[9px] h-px w-2 shrink-0 bg-[var(--color-border)]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </article>
  );
}

function useProcessedRoles() {
  const { workExperience } = siteConfig.resume;
  return useMemo(() => {
    return workExperience.map((role, index) => {
      const { start, end, isCurrent } = parseDateRange(role.date);
      return {
        ...role,
        index,
        id: `${slugify(role.company)}-${slugify(role.charge)}-${index}`,
        yearLabel: formatYearRange(start, end),
        durationLabel: formatDuration(monthDiff(start, end)),
        isCurrent,
      };
    });
  }, [workExperience]);
}

export function ExperienceClient() {
  const roles = useProcessedRoles();

  return (
    <div
      className="relative mt-20 leading-[1.7] md:mt-28"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      {/* Download CV */}
      <div className="mb-10 flex justify-end">
        <a
          href="/resume/Juan-Cruz-Medina-CV.pdf"
          download
          className="text-[11px] font-medium uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          Download CV &darr;
        </a>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-px bg-[var(--color-border)]"
          aria-hidden
        />

        <div className="space-y-16">
          {roles.map((role, i) => (
            <TimelineEntry key={role.id} role={role} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
