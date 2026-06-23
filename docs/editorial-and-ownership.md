# Editorial process and ownership

This document records how articles are reviewed and who is responsible for the
PathAble Engineering publication. Update it as the team and process evolve.

## Ownership

- **Site / repository owner:** PathAble Engineering team (maintainers of
  `PathableAI-org/PathableAI-org.github.io`).
- **Editorial owner:** the maintainer who approves publication-ready content.
- **Accessibility reviewer:** a maintainer responsible for the pre-publication
  accessibility check.

> Replace the placeholders above with named owners once assigned.

## Authoring workflow

1. Create a Markdown file under `src/content/articles/`.
2. Fill in the required front matter (validated by `src/content.config.ts`):
   - `title`, `description`, `pubDate`, `category`
   - optional: `tags`, `author`, `maturity`, `updatedDate`,
     `heroImage`, `heroAlt`
   - set `draft: true` while in progress (drafts are hidden from production
     builds but visible in `npm run dev`).
3. Open a pull request. CI runs type-check, lint, format check, build, internal
   link check, and the accessibility check.

## Review checklist (before merge)

- [ ] **Synthetic data only** — no PHI, customer details, or sensitive
      architecture. All examples are illustrative.
- [ ] **Accessibility** — headings form a logical outline; images have
      appropriate `alt` text; color contrast is acceptable; pa11y-ci passes.
- [ ] **Maturity label** — `maturity` accurately reflects the work
      (experimental / evolving / stable).
- [ ] **Claims** — no unsupported security, accessibility, or compliance
      claims.
- [ ] **Links** — internal links resolve (link check passes).
- [ ] **Canonical URL** — the article has a stable URL suitable for sharing on
      LinkedIn.

## Publishing & distribution

- Merging to `main` triggers `deploy.yml`, which builds and deploys to GitHub
  Pages.
- Share the article's canonical URL (e.g. `https://pathableai-org.github.io/
  articles/<slug>/`) on LinkedIn.
- The RSS feed is available at `/rss.xml`.

## Guardrails

- Preserve **PathAble** as the dominant umbrella brand; this site is the
  clearly labeled **Engineering / Labs** property.
- Follow the PathAble visual guidelines for logo, color, typography, contrast,
  and spacing (brand tokens live in `src/styles/global.css`).
- Clearly label experimental work and maturity status.
