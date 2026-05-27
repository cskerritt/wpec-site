import { news } from "@/data/news";

const STATIC_PAGES = ["/", "/about", "/contact", "/privacy-policy"];

function urlEntry(loc: string, priority: string): string {
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    "    <changefreq>monthly</changefreq>",
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
}

export function generateSitemap(baseUrl: string = "https://wpec.expert"): string {
  const entries: string[] = [];

  for (const page of STATIC_PAGES) {
    entries.push(
      urlEntry(`${baseUrl}${page === "/" ? "" : page}`, page === "/" ? "1.0" : "0.8"),
    );
  }

  for (const post of news) {
    entries.push(urlEntry(`${baseUrl}/${post.slug}`, "0.7"));
  }

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...entries,
    `</urlset>`,
  ].join("\n");
}
