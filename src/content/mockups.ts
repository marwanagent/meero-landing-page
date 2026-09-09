export const mockupCopy = {
  label: "Illustrative example",
  fiction: "Fictional correspondence for illustration.",
  to: "To",
  subject: "Subject",
  send: "Send",
  compose: "New message",
  read: "Read",
  outgoing: "You",
  incoming: "Agent",
  billTo: "Bill to:",
  invoiceAlt: "An illustrative invoice created and sent after a session.",
} as const;
export const MESSAGE_THREADS = [
  {
    id: "approval",
    messages: [
      {
        direction: "out",
        text: "Approve outreach",
        time: "16:42",
      },
      {
        direction: "in",
        text: "500 personalized emails to your ICP go out between 7 and 9am tomorrow. Reply STOP to cancel.",
        time: "16:42",
      },
    ],
  },
  {
    id: "invoice",
    messages: [
      {
        direction: "in",
        text: "Your invoice to Sanders Consulting was created and sent from your calendar event. View invoice.",
        time: "14:05",
      },
    ],
  },
  {
    id: "social",
    messages: [
      {
        direction: "in",
        text: "Successfully messaged 20 prospects on your socials today.",
        time: "17:00",
      },
    ],
  },
] as const;
export type MessageThreadData = (typeof MESSAGE_THREADS)[number];
export const EMAIL_MOCKUPS = [
  {
    id: "sent",
    state: "sent",
    title: "A message written for one person",
    sender: "Daniel",
    address: "daniel@northbeam.example",
    to: "priya@marlow-field.example",
    subject: "Loved what you're doing at Marlow & Field",
    time: "10:24 AM",
    lines: [
      "Hi Priya,",
      "I'm Daniel, founder of Northbeam Bookkeeping. We handle the books for independent shops and studios so owners can stop losing their Sundays to spreadsheets.",
      "I saw Marlow & Field just opened a second location on Grant Ave. Congratulations. Two locations usually means twice the receipts and half the time to reconcile them, which is right where we come in.",
      "Would you be open to a quick call this week? I can work around whatever's easiest for you.",
      "Best,",
      "Daniel",
      "Northbeam Bookkeeping",
    ],
  },
  {
    id: "composing",
    state: "composing",
    title: "A first introduction, ready for review",
    sender: "Elira Venn",
    address: "elira@vellunook.example",
    to: "oren@tessaveld.example",
    subject: "Bookkeeping for Tessaveld Atelier",
    time: "10:26 AM",
    lines: [
      "Hi Oren, I’m Elira from Vellunook Ledger. We help independent studios keep their books in order.",
      "Does reconciling project expenses pull you away from client work at Tessaveld Atelier? I can handle that recurring admin around the tools you already use.",
      "Would a short call this week be useful?",
    ],
  },
] as const;
export type EmailMockup = (typeof EMAIL_MOCKUPS)[number];
export const INVOICE_MOCKUP = {
  kind: "An invoice that sent itself",
  number: "1042",
  from: "Bright Harbor Studio",
  to: "Meridian Property Co.",
  items: [
    ["On-site session, Aug 12", "$850.00"],
    ["Editing and delivery", "$300.00"],
  ],
  total: ["Total due", "$1,150.00"],
  note: "Sent the moment the session closed. Filed on its own.",
} as const;
