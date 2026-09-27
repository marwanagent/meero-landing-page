import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { site, SITE_URL, socialImage } from "@/content/site";
import { Analytics } from "@vercel/analytics/next"

// Single face for headings and body.
const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: site.meta.title,
  description: site.meta.description,
  openGraph: {
    images: [socialImage],
    title: site.meta.title,
    description: site.meta.description,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-US"
      className={`${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
