import type { Claim } from "@/content/articles/types";

export function SourcedClaim({ claim }: { claim: Claim }) {
  return (
    <p className="rounded-xl border border-hairline bg-card p-5">
      <a href={claim.url} className="underline underline-offset-4">{claim.source}</a>
      {" ("}<time dateTime={claim.date}>{claim.date.slice(0, 4)}</time>{"): "}
      {claim.text}
    </p>
  );
}
