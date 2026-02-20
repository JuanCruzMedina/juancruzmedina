import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="flex min-h-[80dvh] flex-col items-center justify-center px-6">
      <p className="font-mono text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
        404
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-[0.04em] text-[var(--color-accent)] md:text-7xl">
        PAGE NOT FOUND
      </h1>
      <p className="mt-6 max-w-md text-center text-sm text-[var(--color-muted)]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="link-underline mt-10 text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
      >
        Back to {siteConfig.displayName}
      </Link>
    </div>
  );
}
