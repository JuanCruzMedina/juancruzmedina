import { MetadataRoute } from "next";
import { getPosts } from "@/lib/blog";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://juanmedina.com.ar";

export default function sitemap(): MetadataRoute.Sitemap {
  const postsEn = getPosts("en");
  const postsEs = getPosts("es");
  const blogUrls = [
    ...postsEn.map((post) => ({
      url: `${baseUrl}/blog/en/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...postsEs.map((post) => ({
      url: `${baseUrl}/blog/es/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/es`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
