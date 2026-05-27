# Wolstein Putts Expert Consulting (wpec.expert)

Site for [Wolstein Putts Expert Consulting](https://wpec.expert), a full-service vocational expert firm focused on employment law and matrimonial matters. WPEC is an affiliate of [Kincaid Wolstein Vocational and Rehabilitation Services](https://kwvrs.com).

## Tech Stack

- Vite + React 19 + TypeScript + Tailwind 4
- Node 20 production server (built-in `http` module, gzip + caching)
- Dockerfile-based deploy on Railway

## Local Development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # generates sitemap, type-checks, builds, prerenders
npm run preview      # preview the production build
npm run lint
npm test
```

### Local Docker

```bash
docker build -t wpec .
docker run --rm -p 3000:3000 wpec
```

## Deploy

The repo is connected to Railway; pushing to `main` triggers a Dockerfile build. Set the custom domain (`wpec.expert`) in Railway's Settings panel.

## Form Submissions

Contact form submissions are saved server-side to `data/submissions.jsonl` (JSON Lines). The `data/` directory is ephemeral on Railway - attach a volume to persist across deploys, or wire `/api/contact` to an external inbox.

- `POST /api/contact` - required: `name`, `email`, `message`

## Site Structure

- `/` Home (hero, pillars, news, testimonials, contact CTA)
- `/about` About + Team (`#team`) + News (`#news`)
- `/contact` Contact form
- `/privacy-policy` Privacy policy
- `/<news-slug>` Individual news post

## Design

- Primary brand color: `#2649a7` (matches the WP logomark)
- Typography: Montserrat (display) + Inter (body)
- Tokens defined in `src/index.css` via Tailwind `@theme`

## Content

Site copy lives in `src/data/`:
- `site.ts` - brand strings, contact info
- `team.ts` - team bios and credentials
- `news.ts` - blog posts
- `testimonials.ts` - attorney testimonials
