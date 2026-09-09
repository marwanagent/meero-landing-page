import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { ARTICLE_PATH, SITE_URL } from "@/content/site";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}${ARTICLE_PATH}` },
    ...articles.map((article) => ({
      url: `${SITE_URL}${ARTICLE_PATH}/${article.slug}`,
      lastModified: article.updatedISO,
    })),
  ];
}
