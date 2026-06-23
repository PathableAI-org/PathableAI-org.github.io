import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';
import { CATEGORY_IDS } from './consts';

/**
 * Article metadata schema. Every field that affects publication, SEO, or the
 * editorial/accessibility review is validated here so that builds fail fast on
 * malformed front matter.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: z.enum(CATEGORY_IDS),
      tags: z.array(z.string()).default([]),
      authors: z.array(z.string()).default(['PathAble Engineering']),
      reviewedBy: z.string().optional(),
      // Make experimental status explicit per the launch guardrails.
      maturity: z
        .enum(['experimental', 'evolving', 'stable'])
        .default('experimental'),
      // Drafts are excluded from production builds.
      draft: z.boolean().default(false),
      canonicalUrl: z.string().url().optional(),
      socialImage: image().optional(),
      heroImage: image().optional(),
      heroAlt: z.string().optional(),
    }),
});

export const collections = { articles };
