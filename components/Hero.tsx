import { siteConfig } from "@/config/site";
import Link from "next/link";

const social = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "X", href: siteConfig.links.twitter },
] as const;

export function Hero() {
  const nameParts = siteConfig.displayName.split(" ");

  return (
    <section className="relative flex min-h-dvh flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center text-center">
        <div className="overflow-hidden">
          <p className="animate-fade-up stagger-1 font-mono text-[10px] font-medium tracking-[0.4em] text-muted uppercase md:text-xs">
            {siteConfig.location}
          </p>
        </div>

        <div className="mt-6 overflow-hidden md:mt-8">
          <h1 className="font-display text-[clamp(3.5rem,15vw,13rem)] leading-[0.85] tracking-[0.04em] text-accent">
            <span className="block animate-fade-up stagger-2">
              {nameParts.slice(0, 2).join(" ").toUpperCase()}
            </span>
            <span className="block animate-fade-up stagger-3">
              {nameParts.slice(2).join(" ").toUpperCase()}
            </span>
          </h1>
        </div>

        <div className="mt-8 overflow-hidden md:mt-10">
          <p className="animate-fade-up stagger-4 max-w-md text-sm leading-relaxed tracking-wide text-muted md:text-base">
            {siteConfig.tagline}
          </p>
        </div>

        <div className="mt-10 flex animate-fade-up stagger-5 flex-col items-center gap-6 md:mt-12">
          <a
            href="#contact"
            className="border border-accent px-6 py-3 text-[11px] font-medium tracking-[0.3em] text-accent uppercase transition-colors hover:bg-accent hover:text-surface"
          >
            Contact
          </a>
          <div className="flex items-center gap-6 md:hidden">
            <Link
              href="/projects"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              Experience
            </Link>
            <Link
              href="/blog/en"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              Learnings
            </Link>
          </div>
        </div>

        <div className="mt-8 flex animate-fade-up stagger-6 gap-6">
          {social.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-[10px] tracking-[0.25em] text-muted uppercase transition-colors hover:text-accent"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in stagger-7">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[9px] tracking-[0.4em] text-muted uppercase">
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
              className="text-muted"
            >
              <path d="M8 4v8M8 12l-3-3M8 12l3-3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
