import { getCollection, type CollectionEntry } from 'astro:content';

export type Article = CollectionEntry<'articles'>;

const isProd = import.meta.env.PROD;

/** Drafts are visible in dev but hidden from production builds. */
function isPublished(entry: Article): boolean {
  return isProd ? entry.data.draft !== true : true;
}

function byNewest(a: Article, b: Article): number {
  return b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
}

/** All published articles, newest first. */
export async function getPublishedArticles(): Promise<Article[]> {
  const all = await getCollection('articles');
  return all.filter(isPublished).sort(byNewest);
}

export async function getArticlesByCategory(
  category: string,
): Promise<Article[]> {
  const all = await getPublishedArticles();
  return all.filter((a) => a.data.category === category);
}

/** Map of tag -> articles, sorted by tag name. */
export async function getTagMap(): Promise<Map<string, Article[]>> {
  const all = await getPublishedArticles();
  const map = new Map<string, Article[]>();
  for (const article of all) {
    for (const tag of article.data.tags) {
      const list = map.get(tag) ?? [];
      list.push(article);
      map.set(tag, list);
    }
  }
  return new Map([...map.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

export function articleUrl(entry: Article): string {
  return `/articles/${entry.id}/`;
}

/** Comma-separated author list for display and RSS. */
export function formatAuthors(authors: string[]): string {
  return authors.join(', ');
}

export function tagUrl(tag: string): string {
  return `/tags/${tag.toLowerCase().replace(/\s+/g, '-')}/`;
}
