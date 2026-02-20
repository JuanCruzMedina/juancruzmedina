import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/blog");

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

export function getPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs.readdirSync(POSTS_DIR);
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(POSTS_DIR, filename);
      const { data } = matter(fs.readFileSync(filePath, "utf-8"));
      return {
        slug: getSlug(filename),
        title: data.title ?? getSlug(filename),
        date: data.date ?? "",
        excerpt: data.excerpt,
      };
    })
    .sort((a, b) => (b.date > a.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(POSTS_DIR, `${slug}.md`);
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
