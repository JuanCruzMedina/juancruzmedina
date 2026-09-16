import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPosts } from "@/lib/blog";
import { blogCopy, isValidBlogLocale } from "@/lib/blog-i18n";
import type { BlogLocale } from "@/lib/blog";
import { markdownProseClasses } from "@/lib/markdown-prose";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const locales: BlogLocale[] = ["en", "es"];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const posts = getPosts(locale);
    for (const p of posts) {
      params.push({ locale, slug: p.slug });
    }
  }
  return params;
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  if (!isValidBlogLocale(locale)) notFound();

  const post = getPostBySlug(slug, locale);
  if (!post) notFound();

  const t = blogCopy[locale];
  const hasEn = getPostBySlug(slug, "en");
  const hasEs = getPostBySlug(slug, "es");
  const showLangSwitcher = hasEn && hasEs;

  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
      <Link
        href={`/blog/${locale}`}
        className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
      >
        {t.backToLearnings}
      </Link>

      {showLangSwitcher && (
        <div className="mt-4 flex gap-4 text-xs text-muted">
          <Link
            href={locale === "en" ? "#" : `/blog/en/${slug}`}
            className={locale === "en" ? "text-accent" : "hover:opacity-80"}
          >
            English
          </Link>
          <Link
            href={locale === "es" ? "#" : `/blog/es/${slug}`}
            className={locale === "es" ? "text-accent" : "hover:opacity-80"}
          >
            Español
          </Link>
        </div>
      )}

      <header className="mt-12">
        <h1 className="font-display text-4xl tracking-[0.04em] text-accent md:text-6xl">
          {post.title.toUpperCase()}
        </h1>
        {post.date && (
          <time className="mt-4 block text-sm text-muted">
            {new Date(post.date).toLocaleDateString(t.dateLocale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>

      <div className={markdownProseClasses}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-20 border-t border-border pt-10">
        <Link
          href={`/blog/${locale}`}
          className="link-underline text-[11px] font-medium tracking-[0.3em] text-accent uppercase"
        >
          {t.backToLearnings}
        </Link>
      </div>
    </article>
  );
}
