import rss from '@astrojs/rss';
import { getPublishedArticles, articleUrl } from '../lib/articles';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const articles = await getPublishedArticles();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.pubDate,
      link: articleUrl(article),
      categories: [article.data.category, ...article.data.tags],
      author: article.data.author,
    })),
  });
}
