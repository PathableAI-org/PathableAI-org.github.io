---
title: 'Draft pilot: what we learned from our first accessibility audit'
description: 'A synthetic retrospective draft used to verify draft exclusion from production builds.'
pubDate: 2026-06-20
category: retrospectives
tags: ['accessibility', 'process', 'draft']
authors: ['PathAble Engineering']
maturity: experimental
draft: true
reviewedBy: 'PathAble Engineering editorial'
---

> **Draft article.** This post is visible in `npm run dev` but excluded from
> production builds when `draft: true`.

This is a synthetic retrospective used to validate the publishing pipeline. It
contains no customer data, no protected health information, and no sensitive
implementation details.

## What we were testing

We wanted to confirm that:

1. Draft articles render locally for editorial review.
2. Production builds omit draft routes from the sitemap and RSS feed.
3. The retrospectives category appears in navigation and listing pages.

## What we would do differently

In a real retrospective we would capture specific outcomes, metrics we are
comfortable sharing publicly, and follow-up actions. This placeholder simply
proves the content model and build filters work as intended.

## Next steps

When this draft is ready for publication, set `draft: false` and open a pull
request for editorial and accessibility review.
