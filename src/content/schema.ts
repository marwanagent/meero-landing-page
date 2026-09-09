import type { Article } from "./articles/types";
import { articleCopy } from "./articles/ui";
import { hero } from "./home";
import { ARTICLE_PATH, SITE_URL, site } from "./site";

const ids = {
  organization: `${SITE_URL}/#organization`,
  person: `${SITE_URL}/#person`,
  website: `${SITE_URL}/#website`,
  service: `${SITE_URL}/#service`,
};
const ref = (id: string) => ({ "@id": id });

function sharedNodes() {
  return [
    {
      "@type": "Organization",
      "@id": ids.organization,
      name: site.brand.legalName,
      url: SITE_URL,
      founder: ref(ids.person),
    },
    {
      "@type": "Person",
      "@id": ids.person,
      name: site.brand.author,
    },
    {
      "@type": "WebSite",
      "@id": ids.website,
      name: site.brand.wordmark,
      url: SITE_URL,
      publisher: ref(ids.organization),
    },
  ];
}

export function pageGraph(kind: "home" | "hub" | Article) {
  const article = typeof kind === "object" ? kind : undefined;
  const url = article
    ? `${SITE_URL}${ARTICLE_PATH}/${article.slug}`
    : kind === "hub" ? `${SITE_URL}${ARTICLE_PATH}` : `${SITE_URL}/`;
  const name = article?.title ?? (kind === "hub" ? articleCopy.hubTitle : site.meta.title);
  const description = article?.metaDescription ?? (kind === "hub" ? articleCopy.hubDescription : site.meta.description);
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...sharedNodes(),
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: ref(ids.website),
        ...(article ? { mainEntity: ref(`${url}#article`) } : {}),
        ...(kind === "home" ? { mainEntity: ref(ids.service) } : {}),
      },
      ...(kind === "home" ? [{
        "@type": "Service",
        "@id": ids.service,
        name: hero.eyebrow,
        description: hero.body[0],
        provider: ref(ids.organization),
        mainEntityOfPage: ref(`${url}#webpage`),
      }] : []),
      ...(article ? [
        {
          "@type": "Article",
          "@id": `${url}#article`,
          headline: article.title,
          description: article.metaDescription,
          datePublished: article.publishedISO,
          dateModified: article.updatedISO,
          author: ref(ids.person),
          publisher: ref(ids.organization),
          mainEntityOfPage: ref(`${url}#webpage`),
          hasPart: ref(`${url}#faq`),
        },
        {
          "@type": "FAQPage",
          "@id": `${url}#faq`,
          isPartOf: ref(`${url}#webpage`),
          mainEntity: article.faq.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        },
      ] : []),
    ],
  };
}

export function serializeGraph(graph: ReturnType<typeof pageGraph>) {
  return JSON.stringify(graph).replace(/</g, "\\u003c");
}
