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
      { direction: "out", text: "social media update", time: "17:00" },
      {
        direction: "in",
        text: "20 new prospects message on socials today.",
        time: "17:00",
      },
    ],
  },
] as const;
export type MessageThreadData = (typeof MESSAGE_THREADS)[number];
