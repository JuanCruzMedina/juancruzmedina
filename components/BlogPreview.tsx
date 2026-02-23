import Link from "next/link";
import { getPosts } from "@/lib/blog";
import { FadeInSection } from "@/components/FadeInSection";

const PREVIEW_COUNT = 3;

export function BlogPreview() {
  const allPosts = getPosts("en");
  const posts = allPosts.slice(0, PREVIEW_COUNT);

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-t-[0.5px] border-[var(--color-border)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <p className="text-[10px] font-medium tracking-[0.4em] text-[var(--color-muted)] uppercase">
            Latest Learnings
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-[var(--color-accent)] md:text-6xl">
            LEARNINGS
          </h2>
        </FadeInSection>

        <div className="mt-16 md:mt-20">
          {posts.map((post, i) => (
            <FadeInSection key={post.slug} delay={i * 80}>
              <Link
                href={`/blog/en/${post.slug}`}
                className="group block border-t border-t-[0.5px] border-[var(--color-border)] py-8 transition-colors last:border-b last:border-b-[0.5px] last:border-[var(--color-border)] md:py-10"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-xl tracking-[0.04em] text-[var(--color-accent)] transition-opacity group-hover:opacity-70 md:text-2xl">
                    {post.title.toUpperCase()}
                  </h3>
                  <span className="flex items-center gap-2 shrink-0">
                    {post.date && (
                      <time className="text-xs text-[var(--color-muted)]">
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    )}
                    <span className="text-xs text-[var(--color-muted)] transition-opacity md:opacity-0 md:group-hover:opacity-100">
                      &rarr;
                    </span>
                  </span>
                </div>
                {post.excerpt && (
                  <p className="mt-2 max-w-2xl text-sm text-[var(--color-muted)]">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={200}>
          <div className="mt-14 text-center md:mt-20">
            <Link
              href="/blog/en"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
            >
              View all {allPosts.length} posts &rarr;
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
