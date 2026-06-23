# DR-0001: Static-site generator and repository strategy

- **Status:** Accepted
- **Date:** 2026-06-23
- **Context issue:** "Pilot GitHub Pages as the PathAble engineering publication"

## Context

We need a publishing space for PathAble's engineering articles (field notes,
architecture notes, practice guides, open-source docs). Requirements:

- Markdown-authored content with front-matter metadata.
- Accessible defaults; accessibility and link checks in CI.
- RSS feed, tags, and stable canonical URLs (for LinkedIn cross-posting).
- Low maintenance overhead and a good contributor experience.
- Hosted on GitHub Pages from an organization Pages repository
  (`PathableAI-org.github.io`), deployed via GitHub Actions.

## Options considered

### Option A — Astro (chosen)

- Content collections give typed, schema-validated front matter (builds fail
  fast on bad metadata).
- First-class RSS (`@astrojs/rss`) and sitemap (`@astrojs/sitemap`).
- Ships zero JavaScript by default → fast, accessible static HTML.
- `eslint-plugin-astro` includes `jsx-a11y` rules; integrates cleanly with
  pa11y-ci and linkinator in CI.
- TypeScript-friendly; component model eases consistent, accessible layouts.
- Trade-off: a Node/npm toolchain and build step (vs. zero-config Markdown).

### Option B — Jekyll (GitHub Pages default)

- Native to GitHub Pages; can deploy with no Actions workflow.
- Mature, Markdown-first, large theme ecosystem.
- Trade-offs: Ruby toolchain is heavier to standardize locally; no typed
  content schema; weaker first-class TypeScript/component DX; accessibility and
  link checking still require bolt-on tooling anyway.

### Option C — Eleventy (11ty)

- Lightweight, flexible, JavaScript-based, Markdown-first.
- Trade-offs: less batteries-included than Astro (RSS, image handling,
  content schemas are more manual); no built-in typed content layer.

## Decision

Adopt **Astro**. It best balances accessibility, maintainability, and
contributor experience while meeting the RSS/sitemap/canonical-URL and CI
requirements with minimal custom code. Since we already need CI for
accessibility and link checks, the Actions-based build (vs. Jekyll's zero-config
path) is not a meaningful added cost.

## Consequences

- Build/deploy runs through GitHub Actions (`.github/workflows/deploy.yml`)
  using `withastro/action`.
- CI (`.github/workflows/ci.yml`) runs type-check, lint, format check, build,
  internal link check (linkinator), and accessibility check (pa11y-ci).
- Brand decisions live as CSS custom properties in `src/styles/global.css`,
  to be replaced with official PathAble visual-guideline tokens.
- The information architecture is encoded in `src/consts.ts` (`CATEGORIES`),
  which drives both navigation and the category routes.
