import { StructuredData } from "@/components/StructuredData";
import { FirstPartyResult } from "@/components/FirstPartyResult";
import { SourcedClaim } from "@/components/SourcedClaim";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { articles } from "@/content/articles";
import type { Article } from "@/content/articles/types";
import { articleCopy } from "@/content/articles/ui";
import { articleBreadcrumbs } from "@/content/breadcrumbs";
import { ARTICLE_PATH, site } from "@/content/site";
export function ArticleTemplate({ article }: { article: Article }) {
  const breadcrumbs = articleBreadcrumbs(article);
  const index = articles.findIndex((item) => item.slug === article.slug);
  const siblings = [
    articles[(index + 1) % articles.length],
    articles[(index + 2) % articles.length],
  ];
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-14 sm:py-20">
        <Container>
          <article className="article-content mx-auto">
            <nav aria-label={articleCopy.breadcrumbLabel}>
              <ol className="flex flex-wrap items-center gap-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <li key={crumb.path} className="inline-flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true">&gt;</span>}
                    {index === breadcrumbs.length - 1 ? (
                      <span aria-current="page">{crumb.name}</span>
                    ) : (
                      <Link href={crumb.path} className="underline underline-offset-4">
                        {crumb.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <h1 className="mt-8">{article.title}</h1>
            <p className="mt-6 text-xl leading-relaxed">{article.directAnswer}</p>
            <p className="mt-4 text-sm">
              {articleCopy.byline}{" "}
              <Link href="/about" rel="author" className="underline underline-offset-4">
                {site.brand.author}
              </Link>
            </p>
            <div className="mt-8">
              {article.intro.map((text) => (
                <p key={text}>{text}</p>
              ))}
              {article.claims.map((claim) => (
                <SourcedClaim key={claim.url + claim.text} claim={claim} />
              ))}
            </div>
            <aside className="mt-8 rounded-xl border border-hairline bg-card p-5">
              <p className="font-semibold">{articleCopy.systemsLabel}</p>
              <p>{article.systemsContext}</p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {article.commonSystems.map((system) => <li key={system}>{system}</li>)}
              </ul>
            </aside>
            <section className="mt-8 border-l-2 border-accent pl-5">
              <h2>{articleCopy.scopeLabel}</h2>
              {article.scope.map((text) => <p key={text}>{text}</p>)}
            </section>
            <section>
              <h2>{article.nowHeading}</h2>
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
              <h2>{article.tasksHeading}</h2>
              <p>{article.tasksAnswer}</p>
              <div className="mt-8 space-y-8">
                {article.agentTasks.map((task) => (
                  <div key={task.name}>
                    <h3 id={task.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}>{task.name}</h3>
                    <div>
                      <p>
                        <strong>{articleCopy.today}</strong>
                        {task.todayItLooksLike}
                      </p>
                      <p>
                        <strong>{articleCopy.suits}</strong>
                        {task.whoItSuits}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h2>{article.faqHeading}</h2>
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
            {article.outreachEvidence && (
              <aside className="mt-12">
                <p>{article.evidenceContext}</p>
                <FirstPartyResult />
              </aside>
            )}
            <section className="mt-12 border-t border-hairline pt-2">
              <h2>{articleCopy.ctaHeading}</h2>
              <p>{article.ctaBody}</p>
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
      <StructuredData page={article} breadcrumbs={breadcrumbs} />
    </>
  );
}
