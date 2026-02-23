import { getPosts } from "@/lib/blog";
import { siteConfig } from "@/config/site";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://juanmedina.com.ar";

export async function GET() {
  const postsEn = getPosts("en");
  const postsEs = getPosts("es");
  const items = [
    ...postsEn.map((post) => ({ ...post, locale: "en" as const })),
    ...postsEs.map((post) => ({ ...post, locale: "es" as const })),
  ].sort((a, b) => (b.date > a.date ? 1 : -1));

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} - Learnings</title>
    <link>${baseUrl}/blog/en</link>
    <description>${siteConfig.description}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.locale}/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.locale}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      ${post.excerpt ? `<description><![CDATA[${post.excerpt}]]></description>` : ""}
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
