import {
  site,
  ARTICLE_PATH,
  ABOUT_PATH,
  PRIVACY_PATH,
  POSTAL_ADDRESS,
} from "@/content/site";
import { Container } from "@/components/Container";
import { Cta } from "@/components/Cta";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline py-16">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="font-serif text-2xl tracking-[-0.03em] text-ink">
            {site.brand.wordmark}
          </p>
          <nav
            aria-label={site.footer.label}
            className="flex flex-wrap gap-x-6 gap-y-2"
          >
            <a href={ARTICLE_PATH} className="underline underline-offset-4">
              {site.nav.articles}
            </a>
            <a href={ABOUT_PATH} className="underline underline-offset-4">
              {site.nav.about}
            </a>
            <a href={PRIVACY_PATH} className="underline underline-offset-4">
              {site.nav.privacy}
            </a>
          </nav>
          <Cta location="footer" />
        </div>
        <address className="mt-8 text-sm not-italic text-muted">{POSTAL_ADDRESS}</address>
        <p className="mt-12 text-xs text-muted">
          &copy; {year} {site.brand.legalName}. {site.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
