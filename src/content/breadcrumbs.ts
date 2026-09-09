import type { Article } from "./articles/types";
import { ARTICLE_PATH, site } from "./site";

export type Breadcrumb = { name: string; path: string };

export function articleBreadcrumbs(article: Article): Breadcrumb[] {
  return [
    { name: site.nav.home, path: "/" },
    { name: site.nav.articles, path: ARTICLE_PATH },
    { name: article.title, path: `${ARTICLE_PATH}/${article.slug}` },
  ];
}
