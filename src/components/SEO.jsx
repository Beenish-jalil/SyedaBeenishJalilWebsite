import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IMG, SITE_URL } from "@/data/site";

const absolute = (url) => (/^https?:\/\//.test(url) ? url : `${SITE_URL}${url.startsWith("/") ? "" : "/"}${url}`);

export default function SEO({
  title = "Heart to Soul Psychotherapy",
  description = "Professional mental health and wellness consulting services for individuals, communities, and organizations. Virtual therapy, community programs, and organizational support.",
  keywords = "mental health, therapy, counseling, wellness, virtual therapy, community programs, organizational support",
  ogImage = IMG.ogDefault,
  type = "website",
  structuredData = null,
  noindex = false,
}) {
  const { pathname } = useLocation();
  useEffect(() => {
    // Nav links are lowercase (/about); "/home" is the same page as "/".
    const path = pathname.toLowerCase().replace(/\/$/, "");
    const url = `${SITE_URL}${!path || path === "/home" ? "/" : path}`;
    const image = absolute(ogImage);
    document.title = title;
    const tags = [
      { name: "description", content: description },
      { name: "keywords", content: keywords },
      { name: "robots", content: noindex ? "noindex" : "index, follow" },
      { property: "og:site_name", content: "Heart to Soul Psychotherapy" },
      { property: "og:locale", content: "en_CA" },
      { property: "og:url", content: url },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
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

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // One JSON-LD block per page; removed when a page has none so data never leaks between routes.
    let script = document.querySelector('script[type="application/ld+json"][data-seo]');
    if (structuredData) {
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute("data-seo", "");
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    } else if (script) {
      script.remove();
    }
  }, [pathname, title, description, keywords, ogImage, type, structuredData, noindex]);
  return null;
}
