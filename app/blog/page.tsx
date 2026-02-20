import Link from "next/link";
import { getPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
      <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
        Writing
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-[0.04em] text-[var(--color-accent)] md:text-7xl">
        BLOG
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-[var(--color-muted)] md:text-base">
        Articles and notes on software engineering.
      </p>

      <div className="mt-20">
        {posts.length === 0 ? (
          <p className="text-sm text-[var(--color-muted)]">No posts yet.</p>
        ) : (
          <div className="space-y-0">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block border-t border-[var(--color-border)] py-8 transition-colors first:border-t-0 md:py-10"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h2 className="font-display text-xl tracking-[0.04em] text-[var(--color-accent)] transition-opacity group-hover:opacity-70 md:text-2xl">
                    {post.title.toUpperCase()}
                  </h2>
                  {post.date && (
                    <time className="shrink-0 text-xs text-[var(--color-muted)]">
                      {new Date(post.date).toLocaleDateString("es-AR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </div>
                {post.excerpt && (
                  <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="mt-20 text-center">
        <Link
          href="/"
          className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
