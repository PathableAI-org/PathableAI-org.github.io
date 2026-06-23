---
title: 'Opening up our accessibility tokens'
description: 'Notes on packaging our color and spacing tokens as an open, contrast-checked design-token set.'
pubDate: 2026-06-05
category: open-source
tags: ['design-tokens', 'accessibility', 'open-source']
author: 'PathAble Engineering'
maturity: experimental
---

> Synthetic, illustrative example. Token values shown here are placeholders.

We're exploring publishing our design tokens — colors, spacing, and typography
scales — as a small open package, with contrast guarantees baked in.

## The idea

Design tokens are only as good as the constraints around them. A color token
isn't trustworthy unless you know which foreground/background pairs are
guaranteed to meet contrast requirements. So the package wouldn't just ship
values; it would ship **validated pairings**.

```json
{
  "color": {
    "text": { "value": "#161c23" },
    "bg": { "value": "#f7f9fb" }
  },
  "contrastPairs": [{ "fg": "color.text", "bg": "color.bg", "min": "AA" }]
}
```

A build step would fail if any declared pairing dropped below its target ratio.

## Why open it

- It forces us to keep our own tokens honest and documented.
- It lets collaborators reuse the constraints, not just the colors.
- It creates a clear, public artifact of how we think about contrast.

## Status: experimental

This is early exploration. We're still deciding on the token format and the
contrast-checking toolchain. Expect changes — and follow along via the
[RSS feed](/rss.xml) if you're interested.
