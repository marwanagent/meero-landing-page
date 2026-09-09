import { site } from "./site";

export const pages = {
  about: {
    path: "/about",
    title: `About ${site.brand.author} | MEERO`,
    heading: site.brand.author,
    metaDescription: "Marwan Nassar operates Treehouse Music and builds custom agents himself, starting with the outreach work in his own business.",
    body: [
      "I’m Marwan Nassar. I operate Treehouse Music, and I built an outreach agent for that business myself. MEERO comes from using the thing I build in a business I actually run.",
      "The prospect finder and personalized email agent on the homepage is my own working example. Its results came from my business. That experience gives me something concrete to show and discuss, without pretending it predicts what another owner will get.",
      "MEERO is early. I have one external paying client. I want that distinction to be clear when you read my own results alongside the client quote: they describe different experiences, and neither stands in for a long client roster.",
      "I build each agent from scratch myself, which is why I take few clients. The starting point is the work in front of you: what keeps repeating, what information it needs, and where your decision belongs. Running my own agent first is how I approach that conversation as an operator."
    ],
  },
  privacy: {
    path: "/privacy",
    title: "Privacy | MEERO",
    heading: "Privacy",
    metaDescription: "A plain-language account of this site’s optional Plausible analytics, Calendly booking calendar, and contact details, pending legal review.",
    notice: "This is a plain-language summary pending legal review.",
    body: [
      "This summary describes the MEERO website operated by Marwan Nassar. The site presents information and offers a Calendly calendar for booking a call. Booking information is entered into Calendly’s service rather than submitted to a form handled by this static website.",
      "The homepage loads Plausible Analytics when a site analytics domain is configured. Without that configuration, the site does not load the Plausible script. When enabled, Plausible measures page visits using information such as the page address, referring site, browser, device type, and approximate location derived from the network request. Plausible describes its analytics as cookie-free; its data policy explains its handling of IP addresses and browser information.",
      "When Plausible is available, the site sends a CTA click event with the location of the booking link, such as the header or footer. It also sends a Booking completed event when the embedded Calendly calendar reports a scheduled appointment. That completion event contains no booking form fields: the site’s event handler does not forward your name, email address, or Calendly appointment details to Plausible.",
      "The homepage loads Calendly’s widget script from assets.calendly.com and initializes an embedded calendar at calendly.com. Loading the page therefore contacts Calendly before you submit a booking. Those requests expose network and browser information to the service. Details you enter in the calendar, including contact information and appointment choices, go to Calendly for scheduling and are available to Marwan as the meeting organizer. Calendly’s privacy notice describes its processing, including cookies and similar technologies.",
      "The booking links also take you directly to Calendly. If the embedded calendar fails, those links remain available. Choosing one opens Calendly’s service, where its own notices and booking interface apply.",
      "For questions about this website’s handling of information, write to Marwan Nassar at the postal address below."
    ],
    sources: [
      { label: "Plausible data policy", url: "https://plausible.io/data-policy" },
      { label: "Calendly privacy notice", url: "https://calendly.com/legal/privacy-notice" }
    ],
  },
} as const;
