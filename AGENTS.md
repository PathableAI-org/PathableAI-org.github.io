# AGENTS.md

## Cursor Cloud specific instructions

### What this is

`PathableAI-org.github.io` is the **PathAble Engineering** publication — an
[Astro](https://astro.build) static blog deployed to GitHub Pages from the repo
root on `main`. It is the public engineering/labs presence for PathAble
(company site: https://pathableai.com).

The information architecture (Field Notes, Architecture Notes, Practice Guides,
Open Source) is data-driven from `src/consts.ts` (`CATEGORIES`), which powers
both the navigation and the `/[category]/` routes. Articles are Markdown files
in `src/content/articles/` with front matter validated by
`src/content.config.ts`.

### Commands (see `package.json` scripts)

- `npm run dev` — dev server with hot reload at `http://localhost:4321`.
- `npm run build` — static build into `dist/` (also generates RSS + sitemap).
- `npm run preview` — serve the built `dist/` at `http://localhost:4321`.
- `npm run check` — Astro/TypeScript type check.
- `npm run lint` / `npm run format:check` — ESLint (incl. jsx-a11y) / Prettier.
- `npm run test:links` — internal link check against `dist/` (run after build).
- `npm run test:a11y` — pa11y-ci accessibility check; **requires a running
  server first** (`npm run preview &` then `npx wait-on http://localhost:4321/`).

CI runs all of the above (`.github/workflows/ci.yml`); deploy is
`.github/workflows/deploy.yml` via `withastro/action`.

### Non-obvious notes

- **Node version:** the project targets Node 22. `eslint-plugin-astro`'s parser
  declares a tight engine range (`node ^22.22.3 || ...`); the cloud VM's default
  Node (22.14.x) is slightly below it and only prints an `EBADENGINE` warning —
  lint still runs and passes. Do not chase this warning by downgrading the lint
  stack.
- **Drafts:** front matter `draft: true` hides an article from production
  (`build`) but it stays visible in `npm run dev`.
- **`z` import:** import zod via `astro:schema` (not `astro:content`) in
  `src/content.config.ts` — the latter is deprecated in Astro 7.
- **Brand tokens** are placeholder CSS custom properties in
  `src/styles/global.css`, meant to be replaced with the official PathAble
  visual-guideline tokens. Keep colors/fonts expressed as tokens there.
- **Synthetic content only:** never publish PHI, customer data, or sensitive
  architecture. See `docs/editorial-and-ownership.md` and
  `docs/decision-records/` for the editorial process and generator decision.
