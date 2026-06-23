# AGENTS.md

## Cursor Cloud specific instructions

### Repository overview

This repository is a **GitHub Pages user/org site** (`PathableAI-org.github.io`). GitHub
Pages serves it as a static website from the repository root on the default branch (`main`).

As of this writing the repo is a **placeholder**: it contains only `README.md` and has no
application code, package manager, lockfiles, build system, tests, or lint configuration.
There are therefore no dependencies to install and no services that must run.

### Running / previewing locally

There is no build step yet. To preview the static content locally, serve the repo root with
any static file server, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000/`.

Note: GitHub Pages renders Markdown (and `index.html`) via Jekyll by default. A plain static
server like the one above does **not** run Jekyll, so it shows the raw directory listing /
raw Markdown rather than the rendered HTML. If real site content is added later (for example
a Jekyll `_config.yml`/`Gemfile`, or a JS-based static-site generator with a `package.json`),
update this file and the environment update script with the appropriate install/build/run
commands for that toolchain.
