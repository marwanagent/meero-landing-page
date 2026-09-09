import { StructuredData } from "@/components/StructuredData";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { articles } from "@/content/articles";
import { articleCopy } from "@/content/articles/ui";
import { ARTICLE_PATH, SITE_URL, socialImage } from "@/content/site";
export const metadata: Metadata = {
  title: articleCopy.hubTitle,
  description: articleCopy.hubDescription,
  alternates: { canonical: `${SITE_URL}${ARTICLE_PATH}` },
  openGraph: {
    images: [socialImage],
    title: articleCopy.hubTitle,
    description: articleCopy.hubDescription,
    url: `${SITE_URL}${ARTICLE_PATH}`,
    type: "website",
  },
  twitter: {
    images: [socialImage],
    card: "summary_large_image",
    title: articleCopy.hubTitle,
    description: articleCopy.hubDescription,
  },
};
export default function ArticleHub() {
  return (
    <>
      <StructuredData page="hub" />
      <SiteHeader />
      <main className="flex-1 py-16 sm:py-24">
        <Container>
          <h1 className="max-w-3xl font-serif text-5xl sm:text-6xl">
            {articleCopy.hubTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {articleCopy.hubDescription}
          </p>
          <section className="mt-12 max-w-3xl">
            <h2 className="font-serif text-3xl">{articleCopy.hubSection.heading}</h2>
            {articleCopy.hubSection.body.map((text, index) => (
              <p key={index} className="mt-4 leading-relaxed text-muted">{text}</p>
            ))}
          </section>
          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <li key={article.slug}>
                <a
                  href={`${ARTICLE_PATH}/${article.slug}`}
                  className="block h-full rounded-xl border border-hairline bg-card p-6 hover:border-ink"
                >
                  <p className="text-sm text-muted">{article.icp}</p>
                  <h2 className="mt-3 font-serif text-3xl leading-tight">
                    {article.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted">
                    {article.metaDescription}
                  </p>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </main>
      <Footer />
    </>
  );
}
