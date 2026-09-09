import { INVOICE_MOCKUP as invoice, mockupCopy } from "@/content/mockups";
export function InvoiceCard() {
  return (
    <figure className="mock-figure">
      <figcaption className="mock-caption">
        {mockupCopy.label}
        <span className="sr-only">. {mockupCopy.invoiceAlt}</span>
      </figcaption>
      <div className="rounded-xl border border-hairline bg-card p-5">
        <div className="flex justify-between gap-3 text-sm text-muted">
          <h3>{invoice.kind}</h3>
          <span>#{invoice.number}</span>
        </div>
        <p className="mt-5 font-serif text-2xl">{invoice.from}</p>
        <p className="mt-1 text-sm text-muted">
          {mockupCopy.billTo} {invoice.to}
        </p>
        <table className="mt-6 w-full text-sm">
          <tbody>
            {invoice.items.map(([name, amount]) => (
              <tr key={name} className="border-b border-hairline">
                <th scope="row" className="py-3 text-left font-normal">
                  {name}
                </th>
                <td className="text-right">{amount}</td>
              </tr>
            ))}
            <tr>
              <th scope="row" className="py-4 text-left">
                {invoice.total[0]}
              </th>
              <td className="text-right font-semibold">{invoice.total[1]}</td>
            </tr>
          </tbody>
        </table>
        <p className="text-sm text-muted">{invoice.note}</p>
      </div>
    </figure>
  );
}
