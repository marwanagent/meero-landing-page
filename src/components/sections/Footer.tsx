import { site, ARTICLE_PATH } from "@/content/site";
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
          <a href={ARTICLE_PATH} className="underline underline-offset-4">
            {site.nav.articles}
          </a>
          <Cta location="footer" />
        </div>
        <p className="mt-12 text-xs text-muted">
          &copy; {year} {site.brand.legalName}. {site.footer.rights}
        </p>
      </Container>
    </footer>
  );
}
