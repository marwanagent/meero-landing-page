/**
 * Single source of truth for ALL page copy and the booking URL (spec section 7).
 *
 * Rules encoded here (spec section 8):
 *  - No fabricated metrics or testimonials beyond what the spec provides.
 *  - No em dashes anywhere.
 *  - The banned technology-category word appears nowhere.
 *  - The reader is assumed to know nothing about this field, so no trade
 *    language: no "custom system", "workflow", "deploy", or "platform".
 *  - Every claim is one that can be defended on a sales call.
 *
 * Nothing in this file is a placeholder. If a component needs a string, it
 * imports it from here. No copy is duplicated in a component.
 */

export const site = {
  brand: {
    wordmark: "MEEROO",
    legalName: "MEEROO",
  },

  meta: {
    title: "MEEROO \u00b7 A virtual assistant built for your business alone",
    description:
      "I find what is capping your time and your revenue, then build you a virtual assistant that takes that work over for good. One call, and you leave with clear steps either way.",
  },

  // The one action. Repeated verbatim at three scroll depths.
  cta: {
    label: "Save me time",
    micro: "One call, leave with clear steps.",
  },

  // Calendly inline embed target (spec section 7). Also used as the plain-link
  // fallback if the embed fails to load (spec section 9).
  calendly: {
    url: "https://calendly.com/marwan-treehousemusic/bottleneck-audit",
  },

  // Copy for the booking embed and each of its failure states (spec section 9).
  booking: {
    failed: "The calendar did not load. You can still book your call here.",
    calendarLabel: "Booking calendar for a free call",
    loading: "Loading the calendar\u2026",
    troublePrefix: "Trouble with the calendar?",
    troubleLink: "Open the booking page directly",
    noscript: "Open the booking page to book your free call",
  },

  hero: {
    eyebrow: "A virtual assistant built for your business alone",
    // Headline is assembled in the Hero so "without you" can take the display italic.
    headlineBefore: "The work that runs your week can run ",
    headlineEmphasis: "without you",
    headlineAfter: ".",
    subhead:
      "I look at how your business actually runs, find what is holding your time and your revenue down, and when it makes sense I build you a virtual assistant that takes that work over for good. It is not a person, and it is not an app you have to learn. Most tasks that eat up your time on a regular basis, can probably be automated.",
  },

  shift: {
    // Heading is assembled in Shift so "smaller" can take the display italic.
    headingBefore: "You did not quit your 9-5 so you can work ",
    headingEmphasis: "24/7",
    headingAfter: ".",
    body: [
      "You run a business. You love what you do, and you're getting clients and making profit, but it is not where you want it to be yet. Maybe you tried doing everything yourself at first, then you tried hiring, but you're still working too many hours to have time for the things that matter, and your revenue is still capped.",
      "This is where I come in. One conversation, you leave with a clear idea of what's in the way of freeing your time and breaking your revenue ceiling. These are actionable things you can act on right away, whether on your own, or with a highly bespoke virtual assistant I build from scratch specifically for your business. You get something out of it whether we work together or not.",
    ],
  },

  // Small side graphic beside the shift copy: the same week, before and after.
  weekGraphic: {
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
      label: "Your week with MEEROO",
      alt: "The same week with those repeating blocks handled for you and crossed out, and the hours they took given back to vision, growth, family, and time off.",
      handled: ["Outreach", "Inbox", "Follow-ups", "Invoicing", "Admin"],
      freed: ["Vision", "Growth", "Family", "Off"],
    },
  },

  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "I find what is really holding you back.",
        body: "On one free call, I go through how your business actually runs week to week and pin down what is capping your time and your revenue. You leave with clear steps you can act on, whether or not we build you something.",
      },
      {
        title: "I build it from scratch for your business.",
        body: "If building something makes sense, I make it around the way you already work and the tools you already use. You do not set anything up, learn anything, or move your business somewhere new. I hand it over working.",
      },
      {
        title: "It works on its own, and you stay in charge.",
        body: "It does its job on a set schedule. You can see what it did, and stop it or change it from one screen on your phone. When your business changes, you tell me and I change it.",
      },
    ],
  },

  proof: {
    heading: "Proof",
    lead: "The research and outreach assistant I built for my own business took me from almost no outreach, because I never had the time for it, to 6 to 10 booked calls a month and a 10K close within the first month.",
    supporting:
      "The research and email list building is so good it gets an 18.6% reply rate.",
    supportingDisclaimer:
      "These are the numbers I got for my own business. A specific reply rate is not guaranteed for yours.",
    takenOffIntro: "Work it already handles for me, every week, without me:",
    takenOff: [
      "Finding the right people to contact, writing to each one personally, following up when there is no reply, and stopping the moment someone answers.",
      "Invoices that go out the moment the work is done, and never twice for the same job.",
      "A morning pass over the inbox that hands me only the few messages that actually need me.",
    ],
    quote: {
      text: "I used to lose hours every week researching opportunities for my work. Now that time is basically zero, and every week I get a clear list of the highest-leverage moves to make, including ones I never would have found on my own.",
      attribution: "T. Chavez",
    },
    authority:
      "None of this is a script that quietly dies. It runs on machines that are watched every day. If a step fails, it tries again on its own, and if something ever goes quiet, I know the moment it does. That is the difference between something that looks good in a demo and something you can actually stop thinking about.",
  },

  // Illustrative sample outputs. All invented, privacy-safe.
  samples: {
    caption: "Illustrative example",
    outreach: {
      kind: "A message written for one person",
      subject: "Loved what you're doing at Marlow & Field",
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
    invoice: {
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
    },
  },

  control: {
    heading: "You stay in charge, and it stays simple",
    body: "Approve, pause, or change anything from one screen on your phone or computer. If you can send a text, you can run this. And when you want it to work differently, you tell me and I handle it.",
  },

  scarcity: {
    heading: "Start with one call",
    body: "I make each one from scratch myself, so I only take on a few clients at a time. If your week is full and your revenue is stuck where it is, start with one call. You leave with clear steps either way.",
  },

  faq: {
    heading: "Questions",
    items: [
      {
        q: "What kind of work can you take off my plate?",
        a: "Anything you do on a regular, repeating schedule: contacting people, following up, invoicing, sorting the inbox, research, reporting. If it happens every week and it eats your time, it is worth looking at.",
      },
      {
        q: "Do I need to be good with technology?",
        a: "No. You never write anything or learn a new program, and you do not move off the tools you already use. You run it from one screen, and I handle the building and the upkeep.",
      },
      {
        q: "What does it cost?",
        a: "It is priced against the work it takes over, so the number is specific to you. The first call is free, and by the end of it you will know what building something would involve.",
      },
      {
        q: "What if it stops working?",
        a: "It is watched every day. A step that fails tries again on its own, and if something needs a person, that person is me, not you.",
      },
    ],
  },
} as const;

export type Site = typeof site;
