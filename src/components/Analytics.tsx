import Script from "next/script";

/**
 * Loads Plausible ONLY when a domain is configured via
 * NEXT_PUBLIC_PLAUSIBLE_DOMAIN. Choosing/pointing the domain is a setup task
 * outside the code (spec section 10), so with no domain set this renders
 * nothing and ships no placeholder script. The track() helper stays a safe
 * no-op until the script is present.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}
