# PathAble Engineering

The public engineering publication of [PathAble](https://pathableai.com) —
field notes, architecture notes, practice guides, and open-source work on
accessible, accountable, workflow-first software.

Built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Quick start

```sh
npm install
npm run dev      # http://localhost:4321
```

## Scripts

| Command                | Description                                        |
| ---------------------- | -------------------------------------------------- |
| `npm run dev`          | Start the dev server with hot reload               |
| `npm run build`        | Build the static site to `dist/` (+ RSS + sitemap) |
| `npm run preview`      | Preview the built site locally                     |
| `npm run check`        | Astro / TypeScript type check                      |
| `npm run lint`         | ESLint (includes accessibility rules)              |
| `npm run format`       | Format with Prettier                               |
| `npm run test:links`   | Internal link check against `dist/`                |
| `npm run test:a11y`    | Accessibility check (pa11y-ci; needs a server up)  |

## Writing an article

Add a Markdown file under `src/content/articles/` with front matter:

```md
---
title: 'Your title'
description: 'One-sentence summary.'
pubDate: 2026-06-23
category: field-notes # field-notes | architecture-notes | practice-guides | open-source
tags: ['accessibility']
maturity: experimental # experimental | evolving | stable
draft: false
---

Article body…
```

See `docs/editorial-and-ownership.md` for the review checklist and
`docs/decision-records/0001-static-site-generator.md` for why Astro was chosen.

## Structure

- `src/consts.ts` — site metadata + category taxonomy (drives nav and routes)
- `src/content/articles/` — Markdown articles
- `src/content.config.ts` — article front-matter schema
- `src/pages/` — routes (home, categories, articles, tags, RSS, 404)
- `src/styles/global.css` — brand tokens and global styles
- `.github/workflows/` — CI (lint/build/a11y/links) and Pages deploy

> All published examples are synthetic. We never publish PHI, customer details,
> or sensitive implementation details.
