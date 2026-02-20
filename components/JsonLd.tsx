import { siteConfig } from "@/config/site";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://juanmedina.com.ar";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: baseUrl,
    email: siteConfig.email,
    jobTitle: "Backend Engineer",
    description: siteConfig.description,
    knowsAbout: siteConfig.resume.skills.slice(0, 15),
    sameAs: [
      siteConfig.links.github,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Córdoba",
      addressCountry: "AR",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
