import { siteConfig } from "@/config/site";
import Link from "next/link";

const social = [
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "X", href: siteConfig.links.twitter },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl tracking-widest text-accent md:text-3xl">
              {siteConfig.name.toUpperCase()}
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] text-muted uppercase">
              Navigation
            </p>
            <nav className="mt-4 flex flex-col gap-3">
              {siteConfig.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="link-underline w-fit text-sm text-accent-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-[10px] font-medium tracking-[0.3em] text-muted uppercase">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {social.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline w-fit text-sm text-accent-muted transition-colors hover:text-accent"
                >
                  {label}
                </a>
              ))}
              <a
                href={siteConfig.sendEmail}
                className="link-underline w-fit text-sm text-accent-muted transition-colors hover:text-accent"
              >
                Email
              </a>
              <a
                href="/feed.xml"
                className="link-underline w-fit text-sm text-accent-muted transition-colors hover:text-accent"
              >
                RSS
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-border pt-8">
          <p className="text-[10px] tracking-[0.2em] text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}
          </p>
          <p className="text-[10px] tracking-[0.2em] text-muted">
            {siteConfig.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
