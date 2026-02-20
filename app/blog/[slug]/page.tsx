import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPosts } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28">
      <Link
        href="/blog"
        className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
      >
        Back to Blog
      </Link>

      <header className="mt-12">
        <h1 className="font-display text-4xl tracking-[0.04em] text-[var(--color-accent)] md:text-6xl">
          {post.title.toUpperCase()}
        </h1>
        {post.date && (
          <time className="mt-4 block text-sm text-[var(--color-muted)]">
            {new Date(post.date).toLocaleDateString("es-AR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>

      <div className="mt-12 space-y-6 text-base leading-[1.8] text-[var(--color-accent-muted)] [&_h1]:mt-10 [&_h1]:font-display [&_h1]:text-2xl [&_h1]:tracking-wide [&_h1]:text-[var(--color-accent)] [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-xl [&_h2]:tracking-wide [&_h2]:text-[var(--color-accent)] [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-medium [&_h3]:tracking-wider [&_h3]:uppercase [&_h3]:text-[var(--color-accent)] [&_a]:text-[var(--color-accent)] [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:opacity-70 [&_code]:bg-[var(--color-surface-elevated)] [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-sm [&_pre]:overflow-x-auto [&_pre]:border [&_pre]:border-[var(--color-border)] [&_pre]:bg-[var(--color-surface-elevated)] [&_pre]:p-5 [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_blockquote]:border-l-2 [&_blockquote]:border-[var(--color-border)] [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-[var(--color-muted)]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      <div className="mt-20 border-t border-[var(--color-border)] pt-10">
        <Link
          href="/blog"
          className="link-underline text-[11px] font-medium tracking-[0.3em] text-[var(--color-accent)] uppercase"
        >
          Back to Blog
        </Link>
      </div>
    </article>
  );
}
