import { Stack } from "@/components/sections/Stack";
import { site, SITE_URL } from "@/content/site";
export const metadata = {
  alternates: { canonical: SITE_URL },
  twitter: { card: "summary" as const, ...site.meta },
};
import { Analytics } from "@/components/Analytics";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Shift } from "@/components/sections/Shift";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Proof } from "@/components/sections/Proof";
import { Control } from "@/components/sections/Control";
import { Scarcity } from "@/components/sections/Scarcity";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Shift />
        <HowItWorks />
        <Stack />
        <Proof />
        <Control />
        <Scarcity />
        <Faq />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}
