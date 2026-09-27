import { firstPartyResult } from "@/content/home";

export function FirstPartyResult() {
  return (
    <figure className="mt-8 rounded-xl border border-hairline bg-card p-6">
      <figcaption className="font-semibold">{firstPartyResult.resultLabel}</figcaption>
      <p className="mt-4 text-lg">{firstPartyResult.lead}</p>
      <p className="mt-4 text-lg">{firstPartyResult.supporting}</p>
      <p className="mt-4 font-medium text-ink">{firstPartyResult.supportingDisclaimer}</p>
    </figure>
  );
}
