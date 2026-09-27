import { PRIVACY_PATH } from "./site";

export const booking = {
  failed: "The calendar did not load. You can still book your call here.",
  calendarLabel: "Booking calendar for a free call",
  loading: "Loading the calendar…",
  troublePrefix: "Trouble with the calendar?",
  troubleLink: "Open the booking page directly",
  noscript: "Open the booking page to book your free call",
} as const;

export const hero = {
  eyebrow: "Custom AI agents for small business owners",
  headline: "Get your week back with an AI agent built for your business alone.",
  body: [
    "I'm Marwan. I run a music education company, and I built AI agents to handle my own busywork first. Now I build them for other owners, so you spend less time at a screen and more time with your family.",
    "It runs on its own schedule. You choose how it checks in with you: approve each batch before it goes out, get a summary when the work is done, or hear from it only when something needs your decision.",
  ],
  ctaUnder: "Free call. You leave with a clear plan, even if we don't work together.",
  bullets: [
    "Personalized emails to new prospects go out every week, even when you're busy",
    "Your inbox is sorted before your day starts, with what needs your reply at the top",
    "Invoices are created and sent from your calendar events",
    "New prospects are researched and found for you, without hours of digging",
  ],
  taskCards: [
    "Personal outreach and follow-up",
    "Invoices sent from my calendar",
    "An inbox sorted before the day starts",
  ],
} as const;

export const weekGraphic = {
  description: "An illustrative working week. Repeating work fills the first calendar; crossed-out tasks are handled by MEERO in the second.",
  days: ["Mon", "Tue", "Wed", "Thu", "Fri"],
  times: ["9 AM", "11 AM", "1 PM", "3 PM", "5 PM"],
  handledLabel: "Repeating work handled",
  nowLine: "Wednesday, 12:30 PM",

  now: {
    label: "Your week now",
    alt: "A crowded week where every repeating task is a block you personally have to fill: outreach, follow-ups, invoicing, inbox, and admin, over and over.",
    tasks: [
      "Outreach",
      "Inbox",
      "Follow-ups",
      "Invoicing",
      "Admin",
      "Inbox",
      "Outreach",
      "Follow-ups",
      "Admin",
      "Invoicing",
    ],
  },
  after: {
    label: "Your week with MEERO",
    alt: "The same week with those repeating blocks handled for you and crossed out, and the hours they took given back to vision, growth, family, and time off.",
    handled: ["Outreach", "Inbox", "Follow-ups", "Invoicing", "Admin"],
    freed: ["Vision", "Growth", "Family", "Off"],
  },
} as const;

export const howItWorks = {
  heading: "How it works",
  steps: [
    {
      title: "Find the bottlenecks",
      body: "In one free call, we look at where your week goes and which tasks can be automated.",
    },
    {
      title: "I build your agent",
      body: "I build it from scratch around the apps you already use, and it works the way you prefer. It can ask for your approval, report back, or run quietly and flag only what needs you.",
    },
    {
      title: "It runs, I maintain it",
      body: "Your emails go out, your inbox gets sorted, and your invoices get sent. If something breaks, I fix it.",
    },
  ],
} as const;

export const proof = {
  heading: "My own business: Treehouse Music",
  body: "My prospect-finding and email agent took me from basically zero to 15 booked calls a month. Its cold emails get an 18.6% reply rate. These are my own business's numbers, and a specific reply rate is not guaranteed for yours.",
  clientProofLabel: "Testimonials",
  quote: {
    text: "I used to lose hours every week researching opportunities for my work. Now that time is basically zero, and every week I get a clear list of the highest-leverage moves to make, including ones I never would have found on my own.",
    attribution: "T. Chavez",
  },
} as const;

// Shared first-party result card used by the industry articles.
export const firstPartyResult = {
  resultLabel: "Marwan’s own business: Treehouse Music",
  lead: "Prospect finder and personalized email agent. Took me from basically zero to 15 booked calls a month.",
  supporting: "Its cold emails get an 18.6% reply rate.",
  supportingDisclaimer:
    "These are the numbers I got for my own business. A specific reply rate is not guaranteed for yours.",
} as const;

export const dataAndCredentials = {
  heading: "Your data and credentials",
  intro: "The real guarantee is that you can cut off access at any time, from your own accounts, without asking me.",
  items: [
    {
      lead: "Revocable by you.",
      text: "Your agent only reaches the accounts you connect. You can revoke its access from your own account settings at any time. Where your tools support it, including Google, that cuts it off.",
    },
    {
      lead: "Stored encrypted.",
      text: "Your credentials are stored encrypted, never as plain text files.",
    },
    {
      lead: "Your own server.",
      text: "Your agent runs on a server set up for your business alone. No other client's agent or data is on it.",
    },
    {
      lead: "Operated by me.",
      text: "I build and maintain the server. Login is by secure key only, and I'm the only one with access.",
    },
    {
      lead: "Processed by an AI provider.",
      text: "The text your agent reads and writes is processed through an AI provider's API, under terms that do not use API data for model training.",
    },
  ],
} as const;

export const scarcity = {
  heading: "Start with a call",
  body: "I make each one from scratch, so I only take on a few clients at a time. If your week is full and your revenue is stuck, let's talk.",
} as const;

export const faq = {
  heading: "Questions",
  items: [
    {
      q: "What can you take off my plate?",
      a: "Anything you do over and over: following up with people, sending invoices, sorting your inbox, research, and reports. If it happens every week and eats your time, it's worth a look.",
    },
    {
      q: "Do I need to be good with technology?",
      a: "No. You keep the apps you already use. Your agent reaches you where you already are, and I handle the building and upkeep.",
    },
    {
      q: "What does it cost?",
      a: "Every agent is built for one business, so the price is specific to yours. It depends on how many tasks the agent handles, how many apps it connects to, and how much volume it runs. You get a firm quote after our call, covering the build and the monthly upkeep: your server, security updates, and fixes.",
    },
    {
      q: "Is my data safe?",
      a: "Your agent runs on its own server, used only for your business. Your credentials are stored encrypted, and only I can log in. You can revoke its access to any account at any time from that account's own settings. See the Privacy Policy for details.",
      link: { text: "Privacy Policy", href: PRIVACY_PATH },
    },
    {
      q: "What happens if I cancel?",
      a: "I shut your agent down and send you an export of your data if you want one. Then I delete your server and everything on it within 30 days. You can also revoke its access from your accounts the moment you cancel.",
    },
    {
      q: "What if it stops working?",
      a: "Your agent checks in with an outside monitor on a schedule. If it goes quiet or a step fails, I get an alert and I fix it. You don't have to watch it.",
    },
  ],
} as const;

export const stack = {
  heading: "Works with what you already use.",
  body: "Nothing moves. Nothing gets replaced.",
} as const;
