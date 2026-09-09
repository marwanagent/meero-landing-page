import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { StructuredData } from "@/components/StructuredData";
import { pages } from "@/content/pages";
import { SITE_URL, POSTAL_ADDRESS } from "@/content/site";

const page = pages.privacy;
export const metadata: Metadata = {
  title: page.title,
  description: page.metaDescription,
  alternates: { canonical: `${SITE_URL}${page.path}` },
};

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 py-16 sm:py-24">
        <Container>
          <p className="mb-6 max-w-3xl rounded-xl border border-ink bg-card p-5 font-semibold">{page.notice}</p>
          <h1 className="font-serif text-5xl">{page.heading}</h1>
          {page.body.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-3xl leading-relaxed">{paragraph}</p>
          ))}
          <ul className="mt-6 space-y-2">
            {page.sources.map((source) => (
              <li key={source.url}><a href={source.url} className="underline underline-offset-4">{source.label}</a></li>
            ))}
          </ul>
          <address className="mt-8 not-italic">{POSTAL_ADDRESS}</address>
        </Container>
      </main>
      <Footer />
      <StructuredData page="privacy" />
    </>
  );
}
