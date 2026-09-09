import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles } from "@/content/articles";
import { ArticleTemplate } from "@/components/ArticleTemplate";
import { SITE_URL, ARTICLE_PATH, socialImage } from "@/content/site";
export const dynamicParams = false;
export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const url = `${SITE_URL}${ARTICLE_PATH}/${article.slug}`;
  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      images: [socialImage],
      type: "article",
      title: article.seoTitle,
      description: article.metaDescription,
      url,
      publishedTime: article.publishedISO,
      modifiedTime: article.updatedISO,
    },
    twitter: {
      images: [socialImage],
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
    },
  };
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  return <ArticleTemplate article={article} />;
}
