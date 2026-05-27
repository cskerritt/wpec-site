# Wolstein Putts Expert Consulting (wpec.expert)

## Project

Vocational expert firm focused on employment law and matrimonial matters. Affiliate of Kincaid Wolstein Vocational and Rehabilitation Services (kwvrs.com). Small site: Home, About (with team and news anchors), Contact, Privacy Policy, plus individual news posts.

## Tech Stack

- Vite + React 19 + TypeScript + Tailwind 4
- Build: `npm run build` (sitemap, tsc, vite build, prerender)
- Dev: `npm run dev`
- Production server: `node server.js` (serves `dist/` with SPA fallback)

## Deployment (Railway)

- **Dockerfile-based build** via `railway.json`
- Multi-stage: build with Node 20, serve with Node 20 Alpine
- Server uses Node built-in `http` module (zero runtime dependencies)
- Port: `$PORT` env var, defaults to 3000
- Custom domain: wpec.expert

### Local Docker test:
```bash
docker build -t wpec .
docker run --rm -p 3000:3000 wpec
```

## Brand

- **Full name:** Wolstein Putts Expert Consulting
- **Abbreviation:** WPEC
- **Tagline:** "Empowering Your Case with Vocational Expertise"
- **Phone:** (917) 979-2040
- **Email:** contact@wpec.expert
- **Service area:** New York City and Beyond
- **Affiliate:** Kincaid Wolstein Vocational and Rehabilitation Services

## Design System

- **Primary:** `#2649a7` (brand blue, from WP logomark)
- **Brand-dark:** `#1a3884`, **Brand-light:** `#3a63d4`
- **Text:** ink `#1c1c1c`, body `#333333`, muted `#667085`, muted-dark `#475467`
- **Border:** `#d0d5dd`
- **Surfaces:** white, `#f6f8fc`
- **Fonts:** Montserrat (display), Inter (body)
- Tokens in `src/index.css` via Tailwind `@theme`

## Content Rules

- Match the live wpec.expert copy. Five testimonials in `src/data/testimonials.ts`. Three team bios in `src/data/team.ts`. Three news posts in `src/data/news.ts`. Brand strings in `src/data/site.ts`.
- Site copy already serves both plaintiff and defense - keep tone objective.
- No em dashes - use hyphens.

## Site Routes

- `/` Home
- `/about` About + `#team` anchor + `#news` anchor
- `/contact` Contact form (POSTs to `/api/contact`)
- `/privacy-policy` Privacy policy
- `/:slug` Individual news posts (route matches against `src/data/news.ts`)

## Form Submissions

`POST /api/contact` - required: `name`, `email`, `message`. Saved to `data/submissions.jsonl` (ephemeral on Railway unless a volume is attached).

## Workflow

1. `npm run dev` - dev server
2. Make changes
3. `npm run build` - verify build passes
4. `docker build -t wpec . && docker run --rm -p 3000:3000 wpec` - test Docker locally
5. Git commit + push - Railway auto-deploys
