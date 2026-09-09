import Link from "next/link";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { articles } from "@/content/articles";
import type { Article } from "@/content/articles/types";
import { articleCopy } from "@/content/articles/ui";
import { ARTICLE_PATH, SITE_URL, site } from "@/content/site";
export function ArticleTemplate({ article }: { article: Article }) {
  const index = articles.findIndex((item) => item.slug === article.slug);
  const siblings = [
    articles[(index + 1) % articles.length],
    articles[(index + 2) % articles.length],
  ];
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      datePublished: article.publishedISO,
      dateModified: article.updatedISO,
      author: { "@type": "Person", name: site.brand.author },
      publisher: {
        "@type": "Organization",
        name: site.brand.legalName,
        url: SITE_URL,
      },
      mainEntityOfPage: `${SITE_URL}${ARTICLE_PATH}/${article.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: article.faq.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ];
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-14 sm:py-20">
        <Container>
          <article className="article-content mx-auto">
            <Link href="/" className="text-sm underline underline-offset-4">
              {site.nav.home}
            </Link>
            <h1 className="mt-8">{article.title}</h1>
            <div className="mt-8">
              {article.intro.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <section>
              <h2>{articleCopy.now}</h2>
              <p>{article.nowAnswer}</p>
              <ol className="mt-8 space-y-8">
                {article.doThisNow.map((item) => (
                  <li key={item.heading}>
                    <h3>{item.heading}</h3>
                    <p>{item.body}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h2>{articleCopy.tasks}</h2>
              <p>{article.tasksAnswer}</p>
              <dl className="mt-8 space-y-8">
                {article.agentTasks.map((task) => (
                  <div key={task.name}>
                    <dt>{task.name}</dt>
                    <dd>
                      <p>
                        <strong>{articleCopy.today}</strong>
                        {task.todayItLooksLike}
                      </p>
                      <p>
                        <strong>{articleCopy.suits}</strong>
                        {task.whoItSuits}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
            <section>
              <h2>{articleCopy.faq}</h2>
              <p>{article.faqAnswer}</p>
              <div className="mt-8 space-y-8">
                {article.faq.map((item) => (
                  <div key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="mt-12 border-t border-hairline pt-2">
              <h2>{articleCopy.ctaHeading}</h2>
              <p>{articleCopy.ctaBody}</p>
              <Cta className="mt-6" location={`article-${article.slug}`} />
            </section>
            <nav
              className="mt-14 border-t border-hairline pt-6"
              aria-label={articleCopy.related}
            >
              <p className="font-semibold">{articleCopy.related}</p>
              <ul className="mt-4 space-y-3">
                {siblings.map((item) => (
                  <li key={item.slug}>
                    <a
                      className="underline underline-offset-4"
                      href={`${ARTICLE_PATH}/${item.slug}`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </article>
        </Container>
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
