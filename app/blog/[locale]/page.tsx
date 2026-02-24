import { getPosts } from "@/lib/blog";
import { blogCopy, isValidBlogLocale } from "@/lib/blog-i18n";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function BlogLocalePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidBlogLocale(locale)) notFound();

  const posts = getPosts(locale);
  const t = blogCopy[locale];

  return (
    <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
      <p className="text-[10px] font-medium tracking-[0.4em] text-muted uppercase">
        {t.eyebrow}
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-[0.04em] text-accent md:text-7xl">
        {t.title}
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted md:text-base">
        {t.description}
      </p>

      <div className="mt-8 flex gap-4 text-xs text-muted">
        <Link
          href="/blog/en"
          className={locale === "en" ? "text-accent" : "hover:opacity-80"}
        >
          English
        </Link>
        <Link
          href="/blog/es"
          className={locale === "es" ? "text-accent" : "hover:opacity-80"}
        >
          Español
        </Link>
      </div>

      <div className="mt-20">
        {posts.length === 0 ? (
          <p className="text-sm text-muted">{t.noPosts}</p>
        ) : (
          <div className="space-y-0">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${locale}/${post.slug}`}
                className="group block border-t border-border py-8 transition-colors first:border-t-0 md:py-10"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <h2 className="font-display text-xl tracking-[0.04em] text-accent transition-opacity group-hover:opacity-70 md:text-2xl">
                    {post.title.toUpperCase()}
                  </h2>
                  {post.date && (
                    <time className="shrink-0 text-xs text-muted">
                      {new Date(post.date).toLocaleDateString(t.dateLocale, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  )}
                </div>
                {post.excerpt && (
                  <p className="mt-2 max-w-2xl text-sm text-muted">
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
          className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
        >
          {t.backToHome}
        </Link>
      </div>
    </div>
  );
}
