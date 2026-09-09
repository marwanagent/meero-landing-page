import { proof } from "@/content/home";

export function FirstPartyResult() {
  return (
    <figure className="mt-8 rounded-xl border border-hairline bg-card p-6">
      <figcaption className="font-semibold">{proof.resultLabel}</figcaption>
      <p className="mt-4 text-lg">{proof.lead}</p>
      <p className="mt-4 text-lg">{proof.supporting}</p>
      <p className="mt-4 font-medium text-ink">{proof.supportingDisclaimer}</p>
    </figure>
  );
}
