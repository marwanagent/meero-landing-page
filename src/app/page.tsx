import { Analytics } from "@/components/Analytics";
import { Hero } from "@/components/sections/Hero";
import { Shift } from "@/components/sections/Shift";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Examples } from "@/components/sections/Examples";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Proof } from "@/components/sections/Proof";
import { Control } from "@/components/sections/Control";
import { Scarcity } from "@/components/sections/Scarcity";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <Shift />
        <HowItWorks />
        <Examples />
        <BeforeAfter />
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
