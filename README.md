# Engineering at PathAble

The public engineering publication of [PathAble](https://pathableai.com) —
field notes, architecture notes, practice guides, retrospectives, and open-source
work on accessible, accountable, workflow-first software.

Built with [Astro](https://astro.build) and deployed to GitHub Pages at
[https://pathableai-org.github.io/](https://pathableai-org.github.io/).

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
category: field-notes # field-notes | architecture-notes | practice-guides | open-source | retrospectives
tags: ['accessibility']
authors: ['PathAble Engineering']
maturity: experimental # experimental | evolving | stable
draft: false
reviewedBy: 'Editor name' # optional
canonicalUrl: https://example.com/cross-post # optional
---

Article body…
```

Set `draft: true` while an article is in progress. Drafts are visible in
`npm run dev` but excluded from production builds, RSS, and the sitemap.

See `docs/editorial-and-ownership.md` for the review checklist and
`docs/decision-records/0001-static-site-generator.md` for why Astro was chosen.

## Brand and accessibility

Visual identity follows the 2026 PathAble Brand Book:

- **Colors:** PathAble Blue (`#00365C`), Intelligent Jade (`#1CAE96`), Tech Teal
  (`#015A76`), Bright Blue Brooks (`#4899E8`), Shilling Silver (`#DDE2E8`), and
  Lived-In Lime (`#D3FF66`) as a sparing accent only.
- **Typography:** Fredoka (headings), Montserrat (subheadings), Nunito (body),
  self-hosted via `@fontsource/*` (no third-party font requests).
- **Logo:** approved PathAble mark in `public/images/` — do not modify, recolor,
  or recreate.

Brand tokens live in `src/styles/global.css`. Re-check color contrast whenever
tokens change. CI runs pa11y-ci accessibility checks on representative pages.

## Structure

- `src/consts.ts` — site metadata + category taxonomy (drives nav and routes)
- `src/content/articles/` — Markdown articles
- `src/content.config.ts` — article front-matter schema
- `src/pages/` — routes (home, categories, articles, tags, RSS, 404)
- `src/styles/global.css` — brand tokens and global styles
- `.github/workflows/` — CI (lint/build/a11y/links) and Pages deploy

## Deployment

Merging to `main` triggers `.github/workflows/deploy.yml`, which builds with
Astro and deploys to GitHub Pages. Pull requests run CI (type check, lint,
format, build, link check, accessibility).

## Relationship to pathableai.com

This site is the canonical home for technical writing. The main company website
remains focused on mission, services, products, and buyer journeys. Share
article canonical URLs on LinkedIn rather than duplicating full posts.

## Maturity status

This publication is an initial pilot. The public label **Engineering at
PathAble** is a working descriptor; the PathAble Technology / Labs sub-brand
name is not yet finalized. Custom domain, analytics, comments, and CMS
integration are intentionally deferred.

> All published examples are synthetic. We never publish PHI, customer details,
> or sensitive implementation details.
