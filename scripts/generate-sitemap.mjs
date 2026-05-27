import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const BASE = "https://wpec.expert";

// Extract news slugs from src/data/news.ts so this script doesn't need to
// import TS at build time.
const newsSource = readFileSync(join(ROOT, "src", "data", "news.ts"), "utf-8");
const newsSlugs = [...newsSource.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const STATIC = ["/", "/about", "/contact", "/privacy-policy"];

const today = new Date().toISOString().split("T")[0];
const urls = new Set([...STATIC, ...newsSlugs.map((s) => `/${s}`)]);

function priorityFor(u) {
  if (u === "/") return "1.0";
  if (STATIC.includes(u)) return "0.8";
  return "0.7";
}

const entries = [...urls]
  .sort()
  .map((u) => {
    const loc = `${BASE}${u === "/" ? "" : u}`;
    return `  <url><loc>${loc}</loc><lastmod>${today}</lastmod><changefreq>monthly</changefreq><priority>${priorityFor(u)}</priority></url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;

writeFileSync(join(ROOT, "public", "sitemap.xml"), xml);
console.log(`Sitemap generated: ${urls.size} URLs`);
