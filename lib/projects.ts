import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { siteConfig } from "@/config/site";

const PROJECTS_ROOT = path.join(process.cwd(), "content/projects");

export type ProjectItem = (typeof siteConfig.projects.items)[number];

export interface CaseStudy {
  slug: string;
  content: string;
}

function getSlug(filename: string): string {
  return filename.replace(/\.md$/, "");
}

export function hasCaseStudy(slug: string): boolean {
  return fs.existsSync(path.join(PROJECTS_ROOT, `${slug}.md`));
}

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(PROJECTS_ROOT)) return [];
  return fs
    .readdirSync(PROJECTS_ROOT)
    .filter((f) => f.endsWith(".md"))
    .map(getSlug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const filePath = path.join(PROJECTS_ROOT, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const { content } = matter(fs.readFileSync(filePath, "utf-8"));
  return { slug, content };
}

export function getProjectById(id: string): ProjectItem | null {
  return siteConfig.projects.items.find((p) => p.id === id) ?? null;
}

export function getProjectPath(id: string): string {
  if (hasCaseStudy(id)) return `/projects/${id}`;
  return `/projects#${id}`;
}

export function getProjectSourceLink(project: ProjectItem): string | undefined {
  if ("sourceLink" in project && typeof project.sourceLink === "string") {
    return project.sourceLink;
  }
  return undefined;
}
