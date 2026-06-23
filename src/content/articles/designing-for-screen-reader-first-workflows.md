---
title: 'Designing screen-reader-first workflows'
description: 'A pattern for designing complex forms where the screen reader experience leads, not follows.'
pubDate: 2026-06-18
category: architecture-notes
tags: ['accessibility', 'forms', 'design-patterns']
authors: ['PathAble Engineering']
maturity: evolving
---

> Synthetic, illustrative example. No real customer workflows are described.

When we design data-entry workflows, we try to flip the usual order: we sketch
the **screen reader experience first**, then layer the visual design on top.
This note describes the pattern and why it changes outcomes.

## The problem with visual-first forms

A form that looks clean can still be a maze with a screen reader: unlabeled
inputs, ambiguous button text, and focus that jumps unpredictably after
validation. These problems are usually discovered late, during an audit, when
they're expensive to fix.

## The pattern

1. **Write the spoken script.** Before any UI, write what a screen reader user
   should hear, field by field, including error states.
2. **Map landmarks and headings.** Decide the heading outline and ARIA
   landmarks so the page is navigable by structure.
3. **Define focus order explicitly.** Especially after async validation —
   focus should move to the first error with a clear, spoken message.
4. **Only then, design visuals.** The visual layout must satisfy the script,
   not the other way around.

## A small example

```html
<label for="county">County</label>
<select id="county" aria-describedby="county-help">
  <!-- options -->
</select>
<p id="county-help">Choose the county where services are needed.</p>
```

The `aria-describedby` association means the helper text is spoken with the
field — not orphaned visually nearby.

## Where we are with this

This is an **evolving** pattern. It has improved our audit results, but we're
still refining how we document the "spoken script" so it stays in sync with the
implementation.
