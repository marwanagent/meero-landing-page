import { site } from "@/content/site";

/**
 * Graphic 3: illustrative sample outputs (spec section 6). Every mock is
 * captioned "Illustrative example" and its content is invented, so it never
 * claims to be real client data. Used light (one mock) in the examples section
 * and full (three mocks) in the proof section.
 */
const s = site.samples;

function Caption() {
  return (
    <span className="mb-4 inline-block rounded-full border border-hairline px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted">
      {s.caption}
    </span>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-hairline bg-card p-6 shadow-[0_1px_0_0_rgba(23,32,58,0.03)]">
      {children}
    </div>
  );
}

function OutreachMock() {
  return (
    <Card>
      <Caption />
      <p className="text-xs font-medium uppercase tracking-wider text-muted">
        {s.outreach.kind}
      </p>
      <p className="mt-3 border-b border-hairline pb-3 text-sm text-ink">
        <span className="text-muted">Subject: </span>
        {s.outreach.subject}
      </p>
      <div className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
        {s.outreach.lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </Card>
  );
}

function BriefMock() {
  return (
    <Card>
      <Caption />
      <p className="text-xs font-medium uppercase tracking-wider text-muted">
        {s.brief.kind}
      </p>
      <p className="mt-3 font-serif text-lg font-medium text-ink">{s.brief.title}</p>
      <dl className="mt-3 space-y-2 text-sm">
        {s.brief.rows.map(([label, value]) => (
          <div key={label} className="flex gap-3">
            <dt className="w-32 shrink-0 text-muted">{label}</dt>
            <dd className="text-ink">{value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

function InvoiceMock() {
  return (
    <Card>
      <Caption />
      <div className="flex items-baseline justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">
          {s.invoice.kind}
        </p>
        <p className="text-sm text-muted">#{s.invoice.number}</p>
      </div>
      <p className="mt-3 font-serif text-lg font-medium text-ink">{s.invoice.from}</p>
      <p className="text-sm text-muted">Bill to: {s.invoice.to}</p>
      <table className="mt-4 w-full text-sm">
        <tbody>
          {s.invoice.items.map(([desc, amount]) => (
            <tr key={desc} className="border-b border-hairline">
              <td className="py-2 text-ink">{desc}</td>
              <td className="py-2 text-right text-ink">{amount}</td>
            </tr>
          ))}
          <tr>
            <td className="py-2 font-medium text-ink">{s.invoice.total[0]}</td>
            <td className="py-2 text-right font-medium text-ink">{s.invoice.total[1]}</td>
          </tr>
        </tbody>
      </table>
      <p className="mt-3 text-xs text-muted">{s.invoice.note}</p>
    </Card>
  );
}

export function SampleOutputs({ variant }: { variant: "light" | "full" }) {
  if (variant === "light") {
    return (
      <div className="mx-auto max-w-md">
        <OutreachMock />
      </div>
    );
  }
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <OutreachMock />
      <BriefMock />
      <InvoiceMock />
    </div>
  );
}
