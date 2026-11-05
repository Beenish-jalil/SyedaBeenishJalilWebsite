import { useEffect } from "react";
import { IMG } from "@/data/site";

export default function SEO({
  title = "Heart to Soul Psychotherapy",
  description = "Professional mental health and wellness consulting services for individuals, communities, and organizations. Virtual therapy, community programs, and organizational support.",
  keywords = "mental health, therapy, counseling, wellness, virtual therapy, community programs, organizational support",
  ogImage = IMG.ogDefault,
  type = "website",
  structuredData = null,
}) {
  useEffect(() => {
    document.title = title;
    const tags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
    ];
    tags.forEach(({ name, property, content }) => {
      const attr = name ? "name" : "property";
      const key = name || property;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    });
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"]');
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, ogImage, type, structuredData]);
  return null;
}
