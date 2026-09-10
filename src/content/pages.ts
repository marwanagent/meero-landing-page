import { site } from "./site";

export const pages = {
  about: {
    path: "/about",
    title: `About ${site.brand.author} | MEERO`,
    heading: site.brand.author,
    metaDescription: "Marwan Nassar operates Treehouse Music and builds custom agents himself, starting with the outreach work in his own business.",
    body: [
      "I'm Marwan Nassar. I operate Treehouse Music, and I was tired of working in my company instead of on it. So I started building agents that handle all of my repeat work. MEERO comes from using the things I learned in my own business and making it for other owners.",
      "I started by looking at my endless to-do list and asking myself \"can this be automated?\". Every time, the answer was yes, and that's how I started. The prospect finder and personalized email agent on the homepage is my own working example. It not only gave me my time back, it also allowed me to grow Treehouse Music by doing way more outreach than I could've done on my own, or even with a full-time hire. I realized this was too valuable not to share.",
      "MEERO is early and in development. I build each agent from scratch myself, so I only take a few clients. Eventually I will have template builds, but if you're coming in now, you can get a fully customized agent built to handle exactly the things you need."
    ],
  },
  privacy: {
    path: "/privacy",
    title: "Privacy | MEERO",
    heading: "Privacy",
    metaDescription: "How MEERO handles client business data, plus website visitor information shared with Plausible and Calendly. Plain-language summary pending legal review.",
    notice: "This is a plain-language summary pending legal review.",
    sections: [
      {
        "heading": "Client data",
        "body": [
          "MEERO is operated by Marwan Nassar. Client business data is used only to operate that client’s agent. It is not sold or used to build another client’s agent.",
          "Agents run in EU facilities on infrastructure hosted by Hetzner, a German provider. Hetzner’s data centers hold ISO/IEC 27001:2022 certification and BSI C5 Type 2 attestation. These cover Hetzner’s own facilities and operations, not the configuration of an individual MEERO server.",
          "Marwan builds and operates each agent himself, so access is limited to him. Client credentials are never shared with other clients, and each agent is given only the access its task requires."
        ]
      },
      {
        "heading": "Website visitors",
        "body": [
          "The homepage loads Plausible Analytics only when a site analytics domain is configured. When enabled, it measures visits using the page address, referring site, browser, device type, and approximate location derived from the network request. Plausible describes its analytics as cookie-free; its data policy explains how it handles IP addresses and browser information.",
          "When Plausible is available, the site sends CTA click events with the booking link’s location and a Booking completed event when the embedded Calendly calendar reports a scheduled appointment. The completion event contains no booking form fields: the site does not forward your name, email address, or Calendly appointment details to Plausible.",
          "The homepage loads Calendly’s widget script from assets.calendly.com and embeds a calendar at calendly.com. This contacts Calendly before you book and exposes network and browser information to the service. Contact information and appointment choices entered in the calendar go to Calendly for scheduling and are available to Marwan as the meeting organizer. Booking information is entered into Calendly, not a form handled by this static website.",
          "Booking links also open Calendly directly and remain available if the embed fails. Calendly’s own privacy notice applies to its service and describes its processing, including cookies and similar technologies."
        ]
      }
    ],
    contact: "For questions about how MEERO handles client or website visitor information, write to Marwan Nassar at the postal address below.",
    sources: [
      { label: "Plausible data policy", url: "https://plausible.io/data-policy" },
      { label: "Calendly privacy notice", url: "https://calendly.com/legal/privacy-notice" }
    ],
  },
} as const;
