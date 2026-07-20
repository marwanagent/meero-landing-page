/**
 * Single source of truth for ALL page copy and the booking URL (spec section 7).
 *
 * Rules encoded here (spec section 8):
 *  - No fabricated metrics or testimonials beyond what the spec provides.
 *  - No em dashes anywhere.
 *  - The banned technology-category word appears nowhere.
 *  - Every claim is one that can be defended on a sales call.
 *
 * Nothing in this file is a placeholder. If a component needs a string, it
 * imports it from here. No copy is duplicated in a component.
 */

export const site = {
  meta: {
    title: "Seknd \u00b7 Custom systems, built and run for you",
    description:
      "Seknd designs a custom system around the work you repeat every week, deploys it, and keeps it running, so you get the output without the hours.",
  },

  // The one action. Repeated verbatim at three scroll depths.
  cta: {
    label: "Get a free bottleneck audit",
    micro: "Free, and you leave with a map either way.",
    heroMicro: "Walk a way with a map breaking down under-used leverage",
  },

  // Calendly inline embed target (spec section 7). Also used as the plain-link
  // fallback if the embed fails to load (spec section 9).
  calendly: {
    url: "https://calendly.com/marwan-treehousemusic/bottleneck-audit",
  },

  hero: {
    wordmark: "Seknd",
    eyebrow: "Custom systems, built and run for you",
    // Headline is assembled in the Hero so "without you" can take Newsreader italic.
    headlineBefore: "The work that runs your week can run ",
    headlineEmphasis: "without you",
    headlineAfter: ".",
    subhead:
      "Seknd designs a custom system around the work you repeat every week, deploys it, and keeps it running, so you get the output without the hours. You control it from your phone or computer through a simple interface. No code, no tech knowledge, and nothing to learn or migrate. You keep the tools you already use. All you need is a phone, and a computer only if you want one.",
  },

  // Graphic 1 stages, left to right (plain-English labels, spec section 6).
  pipeline: {
    caption: "Each task, end to end",
    ariaLabel:
      "A single task flows through five stages and completes: find, then research, then personalize, then send, then follow up.",
    stages: ["Find", "Research", "Personalize", "Send", "Follow up"],
  },

  shift: {
    // Heading is assembled in Shift so "less" can take Newsreader italic.
    headingBefore: "You didn't start your business to spend ",
    headingEmphasis: "less",
    headingAfter: " time with your family.",
    body: [
      "I didn't start any of my businesses to spend every day on admin, outreach, and the repetitive tasks I knew were necessary but that never left any time for my wife. I knew I needed leverage, or my revenue was going to stay capped at whatever I could make in the hours of a day.",
      "You started a business to get out from under that ceiling, not to rebuild it by hand. Hiring looks like the way out, but when you try to hand the work off you just trade one time sink for another: now you're recruiting, training, and managing someone to do work that shouldn't need a person watching it. Either way the week fills up, and you're still the bottleneck.",
      "That's the exact reason I started building these systems for myself. Every hour I stopped spending there went back to the work that actually grows the business, and to the life meant to be had outside it.",
    ],
  },

  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "I find your bottleneck.",
        body: "On a free call, I map the work you repeat every week and pinpoint what could run without you. I only suggest a build if I can see it moving your business forward or giving you real time back. If I can't, I'll tell you. Either way, you leave with that map, whether or not we work together.",
      },
      {
        title: "I build it around your business.",
        body: "If I can see a build that moves the needle, I design a custom system for your exact workflow and wire it into the tools you already use. I deploy it and hand it over working. You don't build anything, learn any code, or switch platforms.",
      },
      {
        title: "It runs, and you stay in control.",
        body: "It runs on its own on a schedule. You watch and control it from a simple interface on your phone or computer. When you want to change or improve it as you learn what works, I'm right there.",
      },
    ],
  },

  examples: {
    heading: "What we've built",
    intro:
      "These are real systems I designed and run. I build them to run my own businesses, and I build the same for clients.",
    featured: {
      eyebrow: "Get clients",
      title: "Cold outreach that fills the calendar.",
      body: "A custom outreach system that finds the right prospects, researches each one individually, and writes a genuinely personal message to every one, not a template with a name swapped in. It sends on a schedule, follows up on its own when there is no reply, and knows to stop the moment someone responds, so nobody is ever double-contacted. Each batch waits for your one-tap approval before anything goes out. You wake up to replies and booked calls instead of spending your morning on outreach.",
      alsoBuilt:
        "Also built: a companion system that finds the right people inside your ideal customer profile on social and opens real, personalized conversations with them.",
    },
    others: [
      {
        eyebrow: "Get paid",
        title: "Invoicing that happens without you.",
        body: "You do the work, the invoice goes out, and it files itself. A custom system watches the calendar, generates the invoice the moment the work is done, sends it, and keeps its own record so a client is never billed twice. You stop chasing your own paperwork.",
      },
      {
        eyebrow: "Protect your attention",
        title: "An inbox that reads itself.",
        body: "Every morning, a custom system reads your inbox and hands you only the few messages that actually need you, each with a one-line reason. The noise is filtered out before you ever see it. You get your attention back and start the day on the things that matter.",
      },
    ],
    closing:
      "Every one of these was built for one specific business and the exact work it repeats. None of them is a template.",
  },

  whatChanges: {
    heading: "What changes for you",
    // Graphic 2 content.
    now: {
      label: "Your week now",
      alt: "A crowded week where every recurring task is a block you personally have to fill: outreach, follow-ups, invoicing, inbox, and admin, repeating across every day.",
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
        "Inbox",
        "Outreach",
      ],
    },
    after: {
      label: "Your week with Seknd",
      alt: "The same week with the recurring task blocks handled for you and greyed out, and the freed hours given back to vision, growth, family, and time off.",
      handled: ["Outreach", "Inbox", "Follow-ups", "Invoicing", "Admin"],
      freed: ["Vision", "Growth", "Family", "Off"],
    },
  },

  proof: {
    heading: "Proof",
    lead: "The research and outreach system I built for my own business took me from almost no outreach, because I never had the time for it, to 6 to 10 booked calls a month and a 10K close within the first month.",
    supporting:
      "The cold outreach system I built for myself gets replies at roughly 6x the national average.",
    quote: {
      text: "I used to lose hours every week researching opportunities for my work. Now that time is basically zero, and every week I get a clear list of the highest-leverage moves to make, including ones I never would have found on my own.",
      attribution: "T. Chavez",
    },
    authority:
      "These systems are not fragile scripts. They run on monitored infrastructure. When an external step fails, they retry automatically instead of silently dying. They are checked every day, and if something ever goes quiet, we know before you do. That is the difference between something that works in a demo and something you can actually stop thinking about.",
  },

  // Graphic 3: illustrative sample outputs. All invented, privacy-safe.
  samples: {
    caption: "Illustrative example",
    outreach: {
      kind: "Personalized outreach message",
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
    brief: {
      kind: "One-page prospect brief",
      title: "Northlake Dental Group",
      rows: [
        ["Fit", "Two locations, growing, owner-operated" ],
        ["Owner", "Dr. Dana Whitfield, hands-on"],
        ["Signal", "Opened Riverside location in May, hiring front desk"],
        ["Likely bottleneck", "Recall and intake handled by hand across both sites"],
        ["Angle", "Take the repeat front-desk work off the team, no new software"],
      ],
    },
    invoice: {
      kind: "Clean invoice",
      number: "1042",
      from: "Bright Harbor Studio",
      to: "Meridian Property Co.",
      items: [
        ["On-site session, Aug 12", "$850.00"],
        ["Editing and delivery", "$300.00"],
      ],
      total: ["Total due", "$1,150.00"],
      note: "Generated the moment the session closed. Filed automatically.",
    },
  },

  control: {
    heading: "You stay in control, and control is simple",
    body: `You are always in control, and control is simple. Approve, pause, or adjust from a clean interface on your phone or computer. You never open a terminal, write a line of code, or learn a new platform. If you can send a text, you can run this. And when you want to change how it works as you learn what is landing and what is not, you tell us, and we handle it.`,
  },

  scarcity: {
    heading: "Start with a free bottleneck audit",
    body: `Every build is custom and hands-on, so I take on a small number of clients at a time. If the work you repeat every week is holding you back, the place to start is a free bottleneck audit. We map exactly what could run without you.`,
  },

  faq: {
    heading: "Questions",
    items: [
      {
        q: "What kind of work can you take off my plate?",
        a: "Anything you do on a regular, repeating schedule: outreach, follow-up, invoicing, inbox triage, research, reporting. If it happens every week and it eats your time, it is a candidate.",
      },
      {
        q: "Do I need to be technical?",
        a: "No. You never touch code or learn a new system. You control everything from a simple interface, and we handle the building and the upkeep.",
      },
      {
        q: "Do I have to switch away from the tools I already use?",
        a: "No. It is built around your current tools, not on top of a new platform you have to migrate to.",
      },
      {
        q: "What happens if something breaks?",
        a: "It runs on monitored infrastructure that retries automatically and is checked every day. If something needs a human, that human is us, not you.",
      },
      {
        q: "What does it cost?",
        a: "Every build is scoped to the work it replaces, so pricing is specific to you. The bottleneck audit is free, and by the end of it you will know exactly what a build would involve.",
      },
      {
        q: "How do we start?",
        a: "With the free bottleneck audit. One call. You leave with a map of what could run without you, whether or not we work together.",
      },
    ],
  },

  footer: {
    wordmark: "Seknd",
    legalName: "Seknd",
  },
} as const;

export type Site = typeof site;
