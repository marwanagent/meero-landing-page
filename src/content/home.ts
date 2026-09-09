import { CATEGORY_NOUN } from "./site";

export const booking = {
  failed: "The calendar did not load. You can still book your call here.",
  calendarLabel: "Booking calendar for a free call",
  loading: "Loading the calendar…",
  troublePrefix: "Trouble with the calendar?",
  troubleLink: "Open the booking page directly",
  noscript: "Open the booking page to book your free call",
} as const;

export const hero = {
  eyebrow: `An ${CATEGORY_NOUN} built for your business alone`,
  headlineBefore: "Run your business in ",
  headlineEmphasis: "half the time",
  headlineAfter: "",
  body: [
    "I look at how your business actually runs, find what is eating your time and capping your revenue, and tell you straight whether it can be automated.",
    "It is not a person you have to train, and it is not an app you have to learn. It runs on its own schedule and pings you when something needs your call.",
  ],
  ctaLead:
    "Want to see how much of your week you can get back? Start with one call.",
  bullets: [
    "Outbound that goes out whether or not you had time for it that week",
    "Inbound inquiries answered the moment they land",
    "Invoices that send themselves",
    "Ideal clients found without you spending hours on research",
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
      title: "Clarity",
      body: "One call, we break down your bottlenecks and what things can be automated to save you time",
    },
    {
      title: "Build",
      body: "I build your agent from scratch, custom. It handles tasks on a schedule and integrates with any apps you already use. You talk with it through messages or email so you don't have to learn how to use any new apps or tools.",
    },
    {
      title: "You sit back, I keep it running",
      body: "You see the work getting done, and don't have to lift a finger. Your emails sent, your client capture and follow-up handled, your invoices paid. And a whole lot more.",
    },
  ],
} as const;

export const proof = {
  resultLabel: "Marwan’s own business: Treehouse Music",
  heading: "Agents I've built",
  // Two distinct proof types, deliberately labelled and separated: Marwan's own
  // business results, then a client he built for. Merging them makes it unclear
  // whose numbers are whose.
  lead: "Prospect finder and personalized email agent. Took me from basically zero to 15 booked calls a month and a 10K close within the first month.",
  supporting:
    "The emails are so personalized, I got an 18.6% reply rate.",
  supportingDisclaimer:
    "These are the numbers I got for my own business. A specific reply rate is not guaranteed for yours.",
  takenOffIntro: "Work it already handles for me, every week, without me:",
  takenOff: [
    "Personal outreach and follow-up",
    "Invoices sent when work is done",
    "An inbox sorted before the day starts",
  ],
  clientProofLabel: "From a client I built an agent for",
  quote: {
    text: "I used to lose hours every week researching opportunities for my work. Now that time is basically zero, and every week I get a clear list of the highest-leverage moves to make, including ones I never would have found on my own.",
    attribution: "T. Chavez",
  },
} as const;

export const control = {
  heading: "You stay in charge, and it stays simple",
  body: "Approve, pause, or change anything from one screen on your phone or computer. If you can send a text, you can run this. And when you want it to work differently, you tell me and I handle it.",
} as const;

export const scarcity = {
  heading: "Start with one call",
  body: "I make each one from scratch myself, so I only take on a few clients at a time. If your week is full and your revenue is stuck, start with one call. You leave with clarity either way.",
} as const;

export const faq = {
  heading: "Questions",
  items: [
    {
      q: "What kind of work can you take off my plate?",
      a: "Anything you do on a regular, repeating schedule: contacting people, following up, invoicing, sorting the inbox, research, reporting. If it happens every week and it eats your time, it is worth looking at.",
    },
    {
      q: "Do I need to be good with technology?",
      a: "No, you keep the tools you already use and never learn a new program. You run it from one screen, and I handle the building and upkeep.",
    },
    {
      q: "What does it cost?",
      a: "Each agent is different so the number is specific to you. I won't offer to build you an agent if it isn't the best fit. You leave the call with clarity on your bottlenecks regardless.",
    },
    {
      q: "What if it stops working?",
      a: "It is watched every day. A step that fails tries again on its own, and if something needs a person, that person is me, not you.",
    },
  ],
} as const;

export const stack = {
  heading: "Works with what you already use.",
  body: "Nothing moves. Nothing gets replaced.",
} as const;
