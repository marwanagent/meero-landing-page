export const mockupCopy = {
  fiction: "Fictional correspondence for illustration.",
  read: "Read",
  outgoing: "You",
  incoming: "Agent",
} as const;
export const MESSAGE_THREADS = [
  {
    id: "approval",
    messages: [
      {
        direction: "in",
        text: "40 personalized emails to your ideal clients are ready. Preview them here. Reply APPROVE to send them tomorrow between 7 and 9am.",
        time: "16:42",
      },
      {
        direction: "out",
        text: "APPROVE",
        time: "16:43",
      },
    ],
  },
  {
    id: "invoice",
    messages: [
      {
        direction: "in",
        text: "Your invoice to Sanders Consulting was created from your calendar event and sent. View invoice.",
        time: "14:05",
      },
    ],
  },
  {
    id: "research",
    messages: [
      {
        direction: "in",
        text: "This week's research is done. 12 new prospects that match your ideal client were added to your list.",
        time: "09:00",
      },
    ],
  },
] as const;
export type MessageThreadData = (typeof MESSAGE_THREADS)[number];
