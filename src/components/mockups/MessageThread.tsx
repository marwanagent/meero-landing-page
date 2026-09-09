import { mockupCopy, type MessageThreadData } from "@/content/mockups";
export function MessageThread({ thread }: { thread: MessageThreadData }) {
  return (
    <figure className="mock-figure">
      <figcaption className="mock-caption">{mockupCopy.label}</figcaption>
      <div className="sr-only">
        <p>{mockupCopy.fiction}</p>
        {thread.messages.map((message, i) => (
          <p key={i}>
            {message.direction === "out"
              ? mockupCopy.outgoing
              : mockupCopy.incoming}
            : {message.text} {message.time}{" "}
            {message.direction === "out" ? mockupCopy.read : null}
          </p>
        ))}
      </div>
      <div aria-hidden="true" className="message-panel">
        {thread.messages.map((message, i) => (
          <div
            key={i}
            className={`message-bubble message-${message.direction}`}
          >
            <span>{message.text}</span>
            <span className="message-meta">
              {message.time}
              {message.direction === "out" && (
                <svg viewBox="0 0 20 12" width="20" height="12" fill="none">
                  <path
                    d="m1 6 4 4 8-8M9 8l2 2 8-8"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
          </div>
        ))}
      </div>
    </figure>
  );
}
