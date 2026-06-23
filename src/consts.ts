/**
 * Site-wide constants and editorial taxonomy.
 *
 * The public label is intentionally configurable: the sub-brand name
 * (e.g. "PathAble Labs" vs "PathAble Technology") is not yet finalized,
 * so it is referenced through a single constant here.
 */

export const SITE_TITLE = 'PathAble Engineering';
export const SITE_TAGLINE = 'Accessible, accountable, workflow-first software.';
export const SITE_DESCRIPTION =
  'Field notes, architecture notes, practice guides, and open-source work from the PathAble engineering team. Human-centered, AI-enhanced.';

/** Umbrella company that owns this publication. */
export const PARENT_BRAND = 'PathAble';
export const PARENT_SITE = 'https://pathableai.com';

/**
 * Content categories define both the URL structure (`/<id>/`) and the
 * top-level navigation. This is the canonical source for the information
 * architecture described in the launch issue.
 */
export const CATEGORIES = [
  {
    id: 'field-notes',
    label: 'Field Notes',
    blurb:
      'Short, practical observations from building accessible, AI-enhanced software in the field.',
  },
  {
    id: 'architecture-notes',
    label: 'Architecture Notes',
    blurb:
      'How we design systems: trade-offs, decision records, and the reasoning behind them.',
  },
  {
    id: 'practice-guides',
    label: 'Practice Guides',
    blurb:
      'Repeatable, opinionated guides for accessible engineering practice and workflow-first delivery.',
  },
  {
    id: 'open-source',
    label: 'Open Source',
    blurb: 'Tools, libraries, and documentation we maintain in the open.',
  },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]['id'];

export const CATEGORY_IDS = CATEGORIES.map((c) => c.id) as [
  CategoryId,
  ...CategoryId[],
];

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

/** Maturity labels make the experimental status of work explicit. */
export const MATURITY_LEVELS = {
  experimental: {
    label: 'Experimental',
    description: 'Early exploration; expect changes.',
  },
  evolving: {
    label: 'Evolving',
    description: 'Actively developed and refined.',
  },
  stable: {
    label: 'Stable',
    description: 'Reviewed and considered reliable.',
  },
} as const;

export type MaturityLevel = keyof typeof MATURITY_LEVELS;

export const NAV_LINKS = [
  ...CATEGORIES.map((c) => ({ href: `/${c.id}/`, label: c.label })),
  { href: '/about/', label: 'About' },
];
