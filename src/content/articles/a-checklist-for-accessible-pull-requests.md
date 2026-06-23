---
title: 'A checklist for accessible pull requests'
description: 'The lightweight accessibility checklist we run on every front-end pull request.'
pubDate: 2026-06-12
category: practice-guides
tags: ['accessibility', 'code-review', 'process']
author: 'PathAble Engineering'
maturity: stable
---

> Synthetic, illustrative example for demonstration purposes.

Accessibility regressions are easiest to catch at review time. Here's the short
checklist we keep in our pull-request template. It's intentionally small so it
actually gets used.

## The checklist

- [ ] **Semantics first.** Interactive elements are real `<button>` /
      `<a>` elements, not click-handled `<div>`s.
- [ ] **Labels.** Every input has an associated `<label>` (or `aria-label`).
- [ ] **Focus.** Keyboard focus is visible and the tab order is logical.
- [ ] **Contrast.** Text meets WCAG AA contrast against its background.
- [ ] **Images.** Meaningful images have `alt` text; decorative ones use
      `alt=""`.
- [ ] **Motion.** Animations respect `prefers-reduced-motion`.
- [ ] **Announcements.** Dynamic updates use a live region where appropriate.

## Why a checklist beats good intentions

Checklists move accessibility from "something we care about" to "something we
verify." They also make the expectation explicit for new contributors, which
shortens onboarding.

## Make it cheap to run

Pair the checklist with automated help so reviewers aren't doing everything by
hand:

- A linter rule for missing `alt` and label associations.
- An automated contrast and link check in CI.
- A keyboard-only pass for any PR that touches an interactive component.

The goal isn't perfection on every line — it's catching the obvious issues
before they reach users.
