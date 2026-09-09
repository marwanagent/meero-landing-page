import Link from "next/link";
import { site, ARTICLE_PATH } from "@/content/site";
import { Container } from "@/components/Container";
import { CtaCompact } from "@/components/Cta";

export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-hairline">
      <Container className="flex min-h-16 flex-wrap py-3 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif text-xl tracking-[-0.03em] text-ink sm:text-2xl"
        >
          {site.brand.wordmark}
        </Link>
        <nav
          aria-label={site.nav.label}
          className="flex items-center gap-4 text-sm"
        >
          <a href={ARTICLE_PATH} className="max-w-32 sm:max-w-none">
            {site.nav.articles}
          </a>
          <CtaCompact />
        </nav>
      </Container>
    </header>
  );
}
