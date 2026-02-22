import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPosts } from "@/lib/blog";
import { blogCopy, isValidBlogLocale } from "@/lib/blog-i18n";
import type { BlogLocale } from "@/lib/blog";

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

const proseClasses =
  "mt-12 space-y-6 text-base leading-[1.8] text-[var(--color-accent-muted)] [&_h1]:mt-10 [&_h1]:font-display [&_h1]:text-2xl [&_h1]:tracking-wide [&_h1]:text-[var(--color-accent)] [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:tracking-wide [&_h2]:text-[var(--color-accent)] [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-medium [&_h3]:tracking-wider [&_h3]:uppercase [&_h3]:text-[var(--color-accent)] [&_a]:text-[var(--color-accent)] [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:opacity-70 [&_code]:bg-[var(--color-surface-elevated)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-[var(--color-border)] [&_pre]:bg-[var(--color-surface-elevated)] [&_pre]:p-5 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--color-border)] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[var(--color-muted)] [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_table]:rounded-lg [&_table]:overflow-hidden [&_table]:border [&_table]:border-[var(--color-border)] [&_thead]:bg-[var(--color-surface-elevated)] [&_th]:border-b [&_th]:border-[var(--color-border)] [&_th]:px-4 [&_th]:py-3 [&_th]:text-left [&_th]:text-sm [&_th]:font-semibold [&_th]:text-[var(--color-accent)] [&_td]:border-b [&_td]:border-[var(--color-border)] [&_td]:px-4 [&_td]:py-3 [&_td]:text-sm [&_tbody_tr:last-child_td]:border-b-0";

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
        className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
      >
        {t.backToLearnings}
      </Link>

      {showLangSwitcher && (
        <div className="mt-4 flex gap-4 text-xs text-[var(--color-muted)]">
          <Link
            href={locale === "en" ? "#" : `/blog/en/${slug}`}
            className={locale === "en" ? "text-[var(--color-accent)]" : "hover:opacity-80"}
          >
            English
          </Link>
          <Link
            href={locale === "es" ? "#" : `/blog/es/${slug}`}
            className={locale === "es" ? "text-[var(--color-accent)]" : "hover:opacity-80"}
          >
            Español
          </Link>
        </div>
      )}

      <header className="mt-12">
        <h1 className="font-display text-4xl tracking-[0.04em] text-[var(--color-accent)] md:text-6xl">
          {post.title.toUpperCase()}
        </h1>
        {post.date && (
          <time className="mt-4 block text-sm text-[var(--color-muted)]">
            {new Date(post.date).toLocaleDateString(t.dateLocale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>

      <div className={proseClasses}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      <div className="mt-20 border-t border-[var(--color-border)] pt-10">
        <Link
          href={`/blog/${locale}`}
          className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
        >
          {t.backToLearnings}
        </Link>
      </div>
    </article>
  );
}
