import { FadeInSection } from "@/components/FadeInSection";
import { getPosts } from "@/lib/blog";
import Link from "next/link";

const PREVIEW_COUNT = 3;

export function BlogPreview() {
  const allPosts = getPosts("en");
  const posts = allPosts.slice(0, PREVIEW_COUNT);

  if (posts.length === 0) return null;

  return (
    <section className="border-t-[0.5px] border-border">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-32">
        <FadeInSection>
          <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
            Latest Learnings
          </p>
          <h2 className="mt-4 font-display text-4xl tracking-[0.04em] text-accent md:text-6xl">
            LEARNINGS
          </h2>
        </FadeInSection>

        <FadeInSection delay={80}>
          <div className="mt-16 md:mt-20">
            {/* Desktop header */}
            <div className="hidden border-b border-border pb-3 text-[10px] font-medium tracking-[0.3em] text-muted uppercase md:grid md:grid-cols-[2.5rem_1fr_6rem]">
              <span>#</span>
              <span>Title</span>
              <span className="text-right">Date</span>
            </div>

            {posts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/en/${post.slug}`}
                className="group grid grid-cols-[2rem_1fr] items-baseline gap-x-3 border-b border-border py-6 transition-colors md:grid-cols-[2.5rem_1fr_6rem] md:py-5"
              >
                <span className="font-display text-lg tabular-nums text-muted/50 md:text-xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="font-display text-lg tracking-[0.04em] text-accent transition-opacity group-hover:opacity-70 md:text-2xl">
                    {post.title.toUpperCase()}
                  </h3>
                  {post.excerpt && (
                    <p className="mt-1 truncate text-xs text-muted md:text-sm">
                      {post.excerpt}
                    </p>
                  )}
                  {post.date && (
                    <time className="mt-1 block text-[11px] text-muted md:hidden">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </div>

                {post.date && (
                  <time className="hidden text-right text-xs text-muted md:block">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                )}
              </Link>
            ))}
          </div>
        </FadeInSection>

        <FadeInSection delay={200}>
          <div className="mt-14 text-center md:mt-20">
            <Link
              href="/blog/en"
              className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
            >
              View all {allPosts.length} posts &rarr;
            </Link>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
