export const CATEGORY_NOUN = "AI agent";
export const CTA_LABEL = "I want to save time";
export const CTA_SUBLABEL = "One call, leave with clear steps.";
export const BOOKING_URL =
  "https://calendly.com/marwan-treehousemusic/bottleneck-audit";
export const SITE_URL = "https://getmeero.com";
export const ARTICLE_PATH = "/what-an-agent-can-do";
export const site = {
  brand: { wordmark: "MEERO", legalName: "MEERO", author: "Marwan" },
  meta: {
    title: `MEERO · An ${CATEGORY_NOUN} built for your business alone`,
    description: `Find what is capping your time and revenue, then get an ${CATEGORY_NOUN} built around your business. Leave your first call with clear steps.`,
  },
  nav: {
    articles: "What an agent can do",
    home: "Home",
    label: "Main navigation",
  },
  footer: { rights: "All rights reserved." },
} as const;

export const socialImage = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: site.meta.title,
} as const;
