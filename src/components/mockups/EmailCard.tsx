import { mockupCopy, type EmailMockup } from "@/content/mockups";
export function EmailCard({
  email,
  state,
}: {
  email: EmailMockup;
  state: "sent" | "composing";
}) {
  return (
    <figure className="mock-figure">
      <figcaption className="mock-caption">
        {mockupCopy.label}
        <span className="sr-only">. {mockupCopy.fiction}</span>
      </figcaption>
      <div className="email-window">
        {state === "sent" ? (
          <>
            <h3 className="email-subject">{email.subject}</h3>
            <div className="email-sender">
              <span aria-hidden="true" className="email-avatar">
                {email.sender[0]}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-semibold">{email.sender}</p>
                <p className="break-all text-xs text-muted">{email.address}</p>
                <p className="mt-1 break-all text-xs text-muted">
                  {mockupCopy.to}: {email.to}
                </p>
              </div>
              <span className="text-xs text-muted">{email.time}</span>
            </div>
          </>
        ) : (
          <>
            <div className="compose-heading">{mockupCopy.compose}</div>
            <div className="compose-field">
              <span>{mockupCopy.to}</span>
              <span>{email.to}</span>
            </div>
            <div className="compose-field">
              <span>{mockupCopy.subject}</span>
              <span>{email.subject}</span>
            </div>
          </>
        )}
        <div className="email-body">
          {email.lines.map((line, i) => (
            <p key={i}>
              {line}
              {state === "composing" && i === email.lines.length - 1 && (
                <span aria-hidden="true" className="compose-caret" />
              )}
            </p>
          ))}
        </div>
        {state === "composing" && (
          <div className="px-5 pb-5" aria-hidden="true">
            <span className="mock-send">{mockupCopy.send}</span>
          </div>
        )}
      </div>
      <p className="mt-3 text-sm text-muted">{email.title}</p>
    </figure>
  );
}
