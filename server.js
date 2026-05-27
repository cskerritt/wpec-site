import { createServer } from "http";
import { readFileSync, existsSync, statSync, appendFileSync, mkdirSync } from "fs";
import { join, dirname, extname } from "path";
import { fileURLToPath } from "url";
import { gzipSync } from "zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const DIST = join(__dirname, "dist");

// Ensure data directory exists for form submissions
mkdirSync(join(__dirname, "data"), { recursive: true });

// Parse JSON request body
function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => (body += chunk));
    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch {
        reject(new Error("Invalid JSON"));
      }
    });
  });
}

// Save a form submission to JSON Lines file
function saveSubmission(type, data) {
  const entry = { type, timestamp: new Date().toISOString(), ...data };
  appendFileSync(
    join(__dirname, "data", "submissions.jsonl"),
    JSON.stringify(entry) + "\n"
  );
}

// CORS headers for API responses
const API_CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".xml": "application/xml",
  ".txt": "text/plain",
};

const COMPRESSIBLE = new Set([
  "text/html",
  "application/javascript",
  "text/css",
  "application/json",
  "image/svg+xml",
  "application/xml",
  "text/plain",
]);

const SECURITY_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

const gzipCache = new Map();

const indexHtml = readFileSync(join(DIST, "index.html"));
const indexHtmlGz = gzipSync(indexHtml);

function getGzipped(filePath, content) {
  if (gzipCache.has(filePath)) {
    return gzipCache.get(filePath);
  }
  const gz = gzipSync(content);
  gzipCache.set(filePath, gz);
  return gz;
}

function acceptsGzip(req) {
  const ae = req.headers["accept-encoding"] || "";
  return ae.includes("gzip");
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);
  const filePath = join(DIST, url.pathname);

  // Handle CORS preflight for API routes
  if (req.method === "OPTIONS" && url.pathname.startsWith("/api/")) {
    res.writeHead(204, API_CORS_HEADERS);
    res.end();
    return;
  }

  // POST /api/contact
  if (req.method === "POST" && url.pathname === "/api/contact") {
    try {
      const data = await parseBody(req);
      const { name, email, message } = data;
      if (!name || !email || !message) {
        res.writeHead(400, API_CORS_HEADERS);
        res.end(JSON.stringify({ error: "name, email, and message are required" }));
        return;
      }
      saveSubmission("contact", data);
      res.writeHead(200, API_CORS_HEADERS);
      res.end(JSON.stringify({ success: true }));
    } catch (err) {
      res.writeHead(500, API_CORS_HEADERS);
      res.end(JSON.stringify({ error: err.message || "Server error" }));
    }
    return;
  }

  // POST /api/consultation
  if (req.method === "POST" && url.pathname === "/api/consultation") {
    try {
      const data = await parseBody(req);
      const { name, email } = data;
      if (!name || !email) {
        res.writeHead(400, API_CORS_HEADERS);
        res.end(JSON.stringify({ error: "name and email are required" }));
        return;
      }
      saveSubmission("consultation", data);
      res.writeHead(200, API_CORS_HEADERS);
      res.end(JSON.stringify({ success: true }));
    } catch (err) {
      res.writeHead(500, API_CORS_HEADERS);
      res.end(JSON.stringify({ error: err.message || "Server error" }));
    }
    return;
  }

  // Resolve a static file to serve. Order:
  //   1. Exact file at filePath (e.g., /favicon.svg, /assets/foo.js)
  //   2. Prerendered HTML at filePath/index.html (e.g., /about -> dist/about/index.html)
  //   3. SPA fallback to dist/index.html with HTTP 200 (handles client-only routes)
  //   4. NOT FOUND - HTTP 404 with the SPA shell so React's NotFound renders
  // The prerendered-HTML lookup is critical: without it, every directory-style
  // route (/about, /services/short-form-report/new-york, etc.) falls through
  // to SPA fallback and loses its per-page metadata, schema, and content.
  let resolvedPath = null;
  let resolvedExt = null;
  if (existsSync(filePath) && statSync(filePath).isFile()) {
    resolvedPath = filePath;
    resolvedExt = extname(filePath);
  } else {
    // Look up dist/<route>/index.html for prerendered routes.
    const indexCandidate = join(filePath, "index.html");
    if (existsSync(indexCandidate) && statSync(indexCandidate).isFile()) {
      resolvedPath = indexCandidate;
      resolvedExt = ".html";
    }
  }

  if (resolvedPath) {
    const mime = MIME_TYPES[resolvedExt] || "application/octet-stream";
    const content = readFileSync(resolvedPath);

    // Cache control
    let cacheControl;
    if (url.pathname.startsWith("/assets/")) {
      cacheControl = "public, max-age=31536000, immutable";
    } else if (resolvedExt === ".html") {
      cacheControl = "no-cache, no-store, must-revalidate";
    } else {
      cacheControl = "public, max-age=86400";
    }

    const headers = {
      "Content-Type": mime,
      "Cache-Control": cacheControl,
      ...SECURITY_HEADERS,
    };

    // Gzip compressible text-based responses
    if (COMPRESSIBLE.has(mime) && acceptsGzip(req)) {
      const gz = getGzipped(resolvedPath, content);
      headers["Content-Encoding"] = "gzip";
      headers["Vary"] = "Accept-Encoding";
      res.writeHead(200, headers);
      res.end(gz);
      return;
    }

    res.writeHead(200, headers);
    res.end(content);
    return;
  }

  // SPA fallback - serve index.html with HTTP 404 for unknown routes so the
  // React NotFound page renders with a proper status code (rather than the
  // soft-404 a 200 would create). The bare SPA shell on a known prerendered
  // route is no longer hit because of the dist/<route>/index.html lookup
  // above, so reaching this branch genuinely means "route not found".
  const headers = {
    "Content-Type": "text/html",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    ...SECURITY_HEADERS,
  };

  if (acceptsGzip(req)) {
    headers["Content-Encoding"] = "gzip";
    headers["Vary"] = "Accept-Encoding";
    res.writeHead(404, headers);
    res.end(indexHtmlGz);
    return;
  }

  res.writeHead(404, headers);
  res.end(indexHtml);
});

server.listen(PORT, () => {
  console.log(`WPEC server running on port ${PORT}`);
});
