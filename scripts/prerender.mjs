// Turns each page of the built site into real HTML, so search engines and AI
// assistants that don't run JavaScript can read it, and so GitHub Pages serves
// every page with a 200 status instead of falling back to 404.html.
//
// Runs after `vite build`: loads every route in headless Chromium, saves the
// rendered page as dist/<route>.html, and writes dist/sitemap.xml.
// The browser app still loads on top as before, so the site looks the same.
import { createServer } from "node:http";
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, extname, join } from "node:path";
import { chromium } from "playwright";

const SITE_URL = "https://hearttosoulpsychotherapy.ca";
const DIST = new URL("../dist/", import.meta.url).pathname;
const SERVICES = ["adult-teen-psychotherapy", "family-psychotherapy", "parental-consultation", "community-programs"];

// [route, output file, in sitemap?]
const ROUTES = [
  ["/", "index.html", true],
  ["/about", "about.html", true],
  ["/services", "services.html", true],
  ...SERVICES.map((id) => [`/service/${id}`, `service/${id}.html`, true]),
  ["/fees", "fees.html", true],
  ["/faq", "faq.html", true],
  ["/contact", "contact.html", true],
  ["/blog", "blog.html", false], // add to sitemap once posts are published
  ["/home", "home.html", false], // logo link; canonical points to "/"
];

const TYPES = { ".js": "text/javascript", ".css": "text/css", ".html": "text/html", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml", ".webp": "image/webp", ".txt": "text/plain", ".xml": "application/xml" };
const template = await readFile(join(DIST, "index.html"));

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
  try {
    if (!extname(path)) throw new Error("route");
    const body = await readFile(join(DIST, path));
    res.writeHead(200, { "content-type": TYPES[extname(path).toLowerCase()] || "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(template); // SPA fallback: always the original, un-prerendered shell
  }
}).listen(0);
const origin = `http://localhost:${server.address().port}`;

const browser = await chromium.launch();
const failures = [];
for (const [route, file] of ROUTES) {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await page.goto(origin + route, { waitUntil: "networkidle" });
  await page.waitForSelector("#root > *");
  const html = await page.evaluate(() => {
    // Match the app's first render so nothing jumps when JavaScript takes over.
    document.querySelectorAll(".scroll-fade-in").forEach((el) => el.classList.remove("scroll-fade-in"));
    return "<!DOCTYPE html>\n" + document.documentElement.outerHTML;
  });
  const title = await page.title();
  await page.close();
  if (errors.length || !html.includes('rel="canonical"')) failures.push(`${route}: ${errors.join("; ") || "no canonical tag"}`);
  await mkdir(dirname(join(DIST, file)), { recursive: true });
  await writeFile(join(DIST, file), html);
  console.log(`prerendered ${route.padEnd(36)} -> ${file.padEnd(40)} ${title}`);
}
await browser.close();
server.close();

const today = new Date().toISOString().slice(0, 10);
const urls = ROUTES.filter(([, , inSitemap]) => inSitemap)
  .map(([route]) => `  <url><loc>${SITE_URL}${route}</loc><lastmod>${today}</lastmod></url>`);
await writeFile(join(DIST, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
console.log(`wrote sitemap.xml with ${urls.length} pages`);

if (failures.length) {
  console.error("Prerender problems:\n" + failures.join("\n"));
  process.exit(1);
}
