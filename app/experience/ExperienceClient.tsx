"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useMemo, useState } from "react";

type WorkRole = (typeof siteConfig.resume.workExperience)[number];

const MONTHS: Record<string, number> = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11,
};

const TYPE_ORDER = ["Full-time", "Freelance", "Part-time"];

const ACHIEVEMENT_BY_COMPANY: Record<string, string> = {
  "mercado libre": "Builds high-throughput backend flows at LATAM scale.",
  "prestige rewards":
    "Leads product + engineering execution for loyalty systems.",
  wizippo: "Raised technical hiring quality through senior-level screenings.",
  "voxel group":
    "Improved certificate update flow and reduced repetitive manual work.",
  "neumáticos usados córdoba":
    "Migrated desktop workflow to web and increased operational accessibility.",
  corace:
    "Delivered infrastructure migration with direct stakeholder alignment.",
  "fulltrace s.a.":
    "Shipped livestock platform with zero reported post-release issues.",
  "agi system developments":
    "Enabled Alexa-driven IoT control with stable cloud operations.",
  "juan toselli intl. tours":
    "Standardized supplier data pipelines for faster travel booking operations.",
  "procoop srl":
    "Built reusable backend services for cooperative management systems.",
  pentamedia:
    "Contributed to e-commerce modules during digital transformation.",
};

const TECH_PATTERNS: Array<{ tag: string; pattern: RegExp }> = [
  {
    tag: ".NET",
    pattern: /\b\.net|c#|asp\.?net|dapper|linq|entity framework\b/i,
  },
  { tag: "Python", pattern: /\bpython|fastapi|flask|spacy|nltk\b/i },
  { tag: "React", pattern: /\breact|next\.js|redux\b/i },
  { tag: "SQL", pattern: /\bsql|postgres|oracle|mysql|sql server\b/i },
  { tag: "MongoDB", pattern: /\bmongodb|nosql\b/i },
  { tag: "AWS", pattern: /\baws|lambda|s3\b/i },
  { tag: "Redis", pattern: /\bredis\b/i },
  { tag: "Windows Forms", pattern: /\bwindows forms?\b/i },
  { tag: "TypeScript", pattern: /\btypescript\b/i },
  { tag: "JavaScript", pattern: /\bjavascript|js\b/i },
];

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
    const [startRaw, endRaw] = clean.split("-").map((item) => item.trim());
    const start = parseDateToken(startRaw);
    const end = /current/i.test(endRaw)
      ? currentMonth
      : (parseDateToken(endRaw) ?? currentMonth);
    return { start, end, isCurrent };
  }

  if (clean.includes(",")) {
    const years = clean
      .split(",")
      .map((part) => Number(part.trim()))
      .filter((part) => Number.isFinite(part));
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

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function roleIntersectsYear(
  start: Date | null,
  end: Date | null,
  year: number,
) {
  if (!start || !end) return false;
  return start.getFullYear() <= year && end.getFullYear() >= year;
}

function inferTechStack(role: WorkRole) {
  const haystack = [role.charge, ...role.descriptionItems].join(" ");
  return TECH_PATTERNS.filter((entry) => entry.pattern.test(haystack))
    .map((entry) => entry.tag)
    .slice(0, 6);
}

function getAchievement(role: WorkRole) {
  const key = role.company.toLowerCase();
  return ACHIEVEMENT_BY_COMPANY[key] ?? null;
}

export function ExperienceClient() {
  const { workExperience } = siteConfig.resume;
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [selectedYear, setSelectedYear] = useState<number | "all">("all");

  const roles = useMemo(() => {
    return workExperience.map((role, index) => {
      const { start, end, isCurrent } = parseDateRange(role.date);
      return {
        ...role,
        index,
        id: `${slugify(role.company)}-${slugify(role.charge)}-${index}`,
        start,
        end,
        isCurrent,
        durationLabel: formatDuration(monthDiff(start, end)),
        achievement: getAchievement(role),
        techStack: inferTechStack(role),
      };
    });
  }, [workExperience]);

  const timelineYears = useMemo(() => {
    const yearSet = new Set<number>();
    for (const role of roles) {
      if (role.start) yearSet.add(role.start.getFullYear());
      if (role.end) yearSet.add(role.end.getFullYear());
    }
    return Array.from(yearSet).sort((a, b) => b - a);
  }, [roles]);

  const filteredRoles = useMemo(() => {
    if (selectedYear === "all") return roles;
    return roles.filter((role) =>
      roleIntersectsYear(role.start, role.end, selectedYear),
    );
  }, [roles, selectedYear]);

  const groupedRoles = useMemo(() => {
    return TYPE_ORDER.map((type) => ({
      type,
      items: filteredRoles.filter(
        (role) => role.type.toLowerCase() === type.toLowerCase(),
      ),
    })).filter((group) => group.items.length > 0);
  }, [filteredRoles]);

  const toggle = (index: number) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="mt-20 md:mt-28">
      {/* Year filter + Download CV */}
      <div className="mb-6 flex flex-col gap-4 md:mb-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setSelectedYear("all")}
            className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
              selectedYear === "all"
                ? "text-[var(--color-accent)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-accent)]"
            }`}
          >
            All
          </button>
          {timelineYears.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => setSelectedYear(year)}
              className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors ${
                selectedYear === year
                  ? "text-[var(--color-accent)]"
                  : "text-[var(--color-muted)] hover:text-[var(--color-accent)]"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        <a
          href="/resume/Juan-Cruz-Medina-CV.pdf"
          download
          className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
        >
          Download CV ↓
        </a>
      </div>

      {/* Grouped entries */}
      <div className="space-y-0">
        {groupedRoles.map((group) => (
          <section key={group.type}>
            <div className="flex items-center gap-3 py-3">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
                {group.type}
              </span>
              <span className="h-px flex-1 bg-[var(--color-border)]" />
            </div>

            {group.items.map((role) => {
              const isExpanded = expanded.has(role.index);

              return (
                <article
                  id={role.id}
                  key={role.id}
                  className={`border-t border-[var(--color-border)] transition-colors ${
                    isExpanded ? "bg-[var(--color-surface-elevated)]/30" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(role.index)}
                    aria-expanded={isExpanded}
                    aria-controls={`experience-details-${role.index}`}
                    className="grid w-full cursor-pointer grid-cols-[auto_1fr] gap-4 py-5 text-left transition-colors hover:bg-[var(--color-surface-elevated)]/40 md:grid-cols-[200px_1fr] md:gap-10 md:py-6"
                  >
                    {/* Left column: logo + date */}
                    <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-4">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm border border-[var(--color-border)] bg-white md:h-14 md:w-14">
                        <Image
                          src={role.companyLogo}
                          alt=""
                          fill
                          className="object-contain p-1.5"
                          sizes="(max-width: 768px) 48px, 56px"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-[var(--color-muted)] md:text-sm">
                          {role.date}
                        </p>
                        {role.durationLabel && (
                          <p className="mt-0.5 text-[10px] tracking-[0.15em] text-[var(--color-muted)] uppercase">
                            {role.durationLabel}
                          </p>
                        )}
                        {role.isCurrent && (
                          <span className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right column: title, company, achievement, badges */}
                    <div className="flex min-w-0 items-start justify-between gap-4">
                      <div className="flex min-w-0 flex-col gap-1">
                        <h3 className="font-display text-xl tracking-[0.04em] text-[var(--color-accent)] md:text-2xl">
                          {role.charge.toUpperCase()}
                        </h3>
                        <p className="text-base font-semibold text-[var(--color-accent-muted)] md:text-lg">
                          {role.company}
                          <span className="ml-2 font-normal text-[var(--color-muted)]">
                            · {role.location}
                            <span className="md:hidden">
                              {" "}
                              · {role.type}
                            </span>
                          </span>
                        </p>

                        {role.achievement && (
                          <p className="mt-1 text-sm text-[var(--color-muted)]">
                            {role.achievement}
                          </p>
                        )}

                        {role.techStack.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {role.techStack.map((tech) => (
                              <span
                                key={`${role.id}-${tech}`}
                                className="border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-muted)]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {!isExpanded && (
                          <span className="mt-2 text-xs font-medium tracking-[0.15em] text-[var(--color-muted)] uppercase">
                            View details
                          </span>
                        )}
                      </div>

                      <div
                        className={`flex shrink-0 items-center transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                        aria-hidden
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="text-[var(--color-muted)]"
                        >
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Expandable details */}
                  <div
                    id={`experience-details-${role.index}`}
                    role="region"
                    aria-label={`Details for ${role.charge} at ${role.company}`}
                    className={`grid overflow-hidden transition-all duration-300 ease-out md:grid-cols-[200px_1fr] md:gap-10 ${
                      isExpanded
                        ? "max-h-[2000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="hidden md:block" aria-hidden />
                    <div className="border-t border-[var(--color-border)] bg-[var(--color-surface-elevated)]/40 px-0 pb-6 pt-5 md:pb-10 md:pt-6">
                      <ul className="space-y-2">
                        {role.descriptionItems.map((item, idx) => (
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
                  </div>
                </article>
              );
            })}
          </section>
        ))}
      </div>
    </div>
  );
}
