"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { useState, useEffect, useCallback } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navBg =
    scrolled || open
      ? open
        ? "bg-[var(--color-surface)]"
        : "bg-[var(--color-surface)]/95 backdrop-blur-md"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Link
          href="/"
          className="font-display text-xl tracking-[0.15em] text-[var(--color-accent)] transition-opacity hover:opacity-60 md:text-2xl"
        >
          {siteConfig.name.split(" ")[0].toUpperCase()}{" "}
          <span className="font-sans text-[10px] font-light tracking-[0.3em] text-[var(--color-muted)] md:text-xs">
            {siteConfig.name.split(" ").slice(1).join(" ").toUpperCase()}
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex gap-8">
            {siteConfig.navItems
              .filter((item) => item.label !== "Home")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`link-underline text-[10px] font-medium tracking-[0.25em] uppercase transition-opacity hover:opacity-60 ${
                      item.href.startsWith("/#")
                        ? "text-[var(--color-muted)]"
                        : pathname === item.href || pathname.startsWith(item.href + "/")
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-muted)]"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="relative z-[60] flex h-10 w-10 flex-col items-center justify-center gap-[5px]"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-px w-5 bg-[var(--color-accent)] transition-all duration-300 ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-[var(--color-accent)] transition-all duration-300 ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-[var(--color-surface)] transition-all duration-500 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex flex-1 flex-col items-center justify-center gap-8">
          {siteConfig.navMenuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-4xl tracking-[0.1em] text-[var(--color-accent)] transition-opacity hover:opacity-60"
              onClick={() => setOpen(false)}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-8 pb-12">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[10px] tracking-[0.3em] text-[var(--color-muted)] uppercase"
          >
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[10px] tracking-[0.3em] text-[var(--color-muted)] uppercase"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-[10px] tracking-[0.3em] text-[var(--color-muted)] uppercase"
          >
            X
          </a>
        </div>
      </div>
    </header>
  );
}
