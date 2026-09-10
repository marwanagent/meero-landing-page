import { StructuredData } from "@/components/StructuredData";
import { Stack } from "@/components/sections/Stack";
import { site, SITE_URL, socialImage } from "@/content/site";
export const metadata = {
  alternates: { canonical: SITE_URL },
  twitter: {
    images: [socialImage],
    card: "summary_large_image" as const,
    ...site.meta,
  },
};
import { Analytics } from "@/components/Analytics";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Proof } from "@/components/sections/Proof";
import { Scarcity } from "@/components/sections/Scarcity";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <StructuredData page="home" />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <Stack />
        <Proof />
        <Scarcity />
        <Faq />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
