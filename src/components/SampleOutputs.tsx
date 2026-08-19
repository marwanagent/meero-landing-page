import { site } from "@/content/site";

/**
 * Graphic B (spec section 6): illustrative sample outputs. Every mock is
 * captioned "Illustrative example" and its content is invented, so it never
 * claims to be real client data.
 *
 * Two mocks, not three: the old prospect brief was cut because its labels read
 * as insider shorthand to an owner who does not work in this field.
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
    <div className="card-raised rounded-2xl bg-card p-6">{children}</div>
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
      <p className="mt-3 font-serif text-lg text-ink">{s.invoice.from}</p>
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

export function SampleOutputs() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <OutreachMock />
      <InvoiceMock />
    </div>
  );
}
