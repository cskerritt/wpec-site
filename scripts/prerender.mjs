/**
 * Prerender static HTML for each WPEC route by injecting the route's title +
 * meta description into the SPA shell, then writing dist/<route>/index.html.
 *
 * This gives Google a crawlable page per route without needing a full SSR
 * runtime. The React app still hydrates from /src/main.tsx and overwrites
 * meta tags client-side via usePageMeta.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const NEWS_SRC = join(ROOT, "src", "data", "news.ts");

const SHELL = readFileSync(join(DIST, "index.html"), "utf-8");
const BASE = "https://wpec.expert";

function parseNews() {
  const src = readFileSync(NEWS_SRC, "utf-8");
  const items = [];
  const re =
    /slug:\s*"([^"]+)",\s*title:\s*"((?:[^"\\]|\\.)*)",[\s\S]*?excerpt:\s*"((?:[^"\\]|\\.)*)"/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    items.push({
      slug: m[1],
      title: m[2].replace(/\\"/g, '"'),
      excerpt: m[3].replace(/\\"/g, '"'),
    });
  }
  return items;
}

const newsItems = parseNews();
if (newsItems.length === 0) {
  throw new Error(
    "parseNews() returned 0 items - src/data/news.ts format changed; update the regex in prerender.mjs",
  );
}

const routes = [
  {
    path: "/",
    title:
      "Wolstein Putts Expert Consulting | Vocational Experts for Employment Law & Matrimonial Matters",
    description:
      "We are a full-service vocational expert firm with a focus on employment law and matrimonial matters.",
  },
  {
    path: "/about",
    title: "About | Wolstein Putts Expert Consulting",
    description:
      "Wolstein Putts Expert Consulting is a full-service vocational expert firm with a focus on employment law and matrimonial matters.",
  },
  {
    path: "/contact",
    title: "Contact | Wolstein Putts Expert Consulting",
    description:
      "Get the guidance and support your legal matter deserves. Phone (917) 979-2040 or contact@wpec.expert.",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | Wolstein Putts Expert Consulting",
    description: "Privacy policy for Wolstein Putts Expert Consulting.",
    robots: "noindex,follow",
  },
  ...newsItems.map((n) => ({
    path: `/${n.slug}`,
    title: `${n.title} | Wolstein Putts Expert Consulting`,
    description: n.excerpt,
  })),
];

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inject(html, { title, description, canonical, robots }) {
  let out = html;
  out = out.replace(
    /<title>[\s\S]*?<\/title>/,
    `<title>${escapeHtml(title)}</title>`,
  );
  out = out.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>(\s*)/,
    `<meta name="description" content="${escapeHtml(description)}" />$1`,
  );
  if (robots) {
    out = out.replace(
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/,
      `<meta name="robots" content="${robots}" />`,
    );
  }
  if (/<link\s+rel="canonical"/.test(out)) {
    out = out.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>(\s*)/,
      `<link rel="canonical" href="${canonical}" />$1`,
    );
  } else {
    out = out.replace(
      "</head>",
      `    <link rel="canonical" href="${canonical}" />\n  </head>`,
    );
  }
  const ogReplace = (prop, content) => {
    const re = new RegExp(
      `<meta\\s+property="${prop}"\\s+content="[^"]*"\\s*\\/?>`,
    );
    const tag = `<meta property="${prop}" content="${escapeHtml(content)}" />`;
    if (re.test(out)) out = out.replace(re, tag);
    else out = out.replace("</head>", `    ${tag}\n  </head>`);
  };
  ogReplace("og:title", title);
  ogReplace("og:description", description);
  ogReplace("og:url", canonical);
  return out;
}

let count = 0;
for (const r of routes) {
  const canonical = `${BASE}${r.path === "/" ? "" : r.path}`;
  const html = inject(SHELL, { ...r, canonical });
  const target =
    r.path === "/"
      ? join(DIST, "index.html")
      : join(DIST, r.path.replace(/^\//, ""), "index.html");
  if (!existsSync(dirname(target))) mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, html);
  count++;
}

console.log(`Prerendered ${count} routes`);
