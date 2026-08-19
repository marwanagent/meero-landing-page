import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { CtaCompact } from "@/components/Cta";

/**
 * Slim sticky header: the wordmark and the one action, nothing else. No nav
 * links, because any second destination competes with the single action.
 *
 * The translucent blur keeps the copy underneath legible while scrolling; it
 * degrades to plain paper where backdrop-filter is unsupported.
 */
export function SiteHeader() {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-hairline">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="font-serif text-xl tracking-[-0.03em] text-ink sm:text-2xl"
        >
          {site.brand.wordmark}
        </a>
        <CtaCompact />
      </Container>
    </header>
  );
}
