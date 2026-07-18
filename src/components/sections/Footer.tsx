import { site } from "@/content/site";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";

/**
 * Footer (spec section 4). Minimal: wordmark, one line of contact, the primary
 * CTA one last time, legal. No secondary links that pull attention off the
 * single action.
 */
export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline py-16">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-serif text-2xl font-medium text-ink">
              {site.footer.wordmark}
            </p>
            <p className="mt-3 max-w-[40ch] text-sm text-muted">{site.footer.contact}</p>
          </div>
          <Cta location="footer" />
        </div>
        <p className="mt-12 text-xs text-muted">
          &copy; {year} {site.footer.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
