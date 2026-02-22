import type { BlogLocale } from "./blog";

export const blogCopy: Record<
  BlogLocale,
  {
    eyebrow: string;
    title: string;
    description: string;
    noPosts: string;
    backToLearnings: string;
    backToHome: string;
    dateLocale: string;
  }
> = {
  en: {
    eyebrow: "What I've learned",
    title: "LEARNINGS",
    description:
      "A bit of everything: articles and notes on software engineering, technology and other topics.",
    noPosts: "No posts yet.",
    backToLearnings: "Back to Learnings",
    backToHome: "Back to Home",
    dateLocale: "en-US",
  },
  es: {
    eyebrow: "Lo que he aprendido",
    title: "APRENDIZAJES",
    description:
      "Un poco de todo: artículos y notas sobre ingeniería de software, tecnología y otros temas.",
    noPosts: "Aún no hay entradas.",
    backToLearnings: "Volver a Aprendizajes",
    backToHome: "Volver al inicio",
    dateLocale: "es-AR",
  },
};

export function isValidBlogLocale(s: string): s is BlogLocale {
  return s === "en" || s === "es";
}
