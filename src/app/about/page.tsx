import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SiteHeader } from "@/components/SiteHeader";
import { Footer } from "@/components/sections/Footer";
import { StructuredData } from "@/components/StructuredData";
import { pages } from "@/content/pages";
import { SITE_URL } from "@/content/site";

const page = pages.about;
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
          <h1 className="font-serif text-5xl">{page.heading}</h1>
          {page.body.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-3xl leading-relaxed">{paragraph}</p>
          ))}
        </Container>
      </main>
      <Footer />
      <StructuredData page="about" />
    </>
  );
}
