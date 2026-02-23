import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_ROOT = path.join(process.cwd(), "content/blog");

export type BlogLocale = "en" | "es";

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
}

export interface Post extends PostMeta {
  content: string;
}

function getSlug(filename: string): string {
  return filename.replace(/\.md$/, "");
}

function getPostsDir(locale: BlogLocale): string {
  return path.join(BLOG_ROOT, locale);
}

export function getPosts(locale: BlogLocale): PostMeta[] {
  const postsDir = getPostsDir(locale);
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir);
  return files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(postsDir, filename);
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      return {
        slug: getSlug(filename),
        title: data.title ?? getSlug(filename),
        date: data.date ?? "",
        excerpt: data.excerpt,
      };
    })
    .sort((a, b) => (b.date > a.date ? 1 : -1));
}

export function getPostBySlug(slug: string, locale: BlogLocale): Post | null {
  const filePath = path.join(getPostsDir(locale), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt,
    content,
  };
}
