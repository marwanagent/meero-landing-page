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
    metaDescription: "How MEERO handles client data and access: a dedicated server per client, encrypted credentials, access you can revoke, and deletion when service ends.",
    sections: [
      {
        "heading": "How your data and access are handled",
        "body": [
          "You stay in control of access. Your agent connects to your tools through access you grant from your own accounts, and you can revoke it at any time. Where your tools support it, including Google, revoking access cuts off the agent's access to that account.",
          "Your agent runs on its own server, dedicated to your business alone. No other client's agent runs on it.",
          "Your credentials are stored encrypted on that server and are loaded only by your agent. They are never stored in code.",
          "The server is operated by Marwan Nassar. Login is by secure key only; password login is disabled. Security updates are applied automatically.",
          "Each agent gets only the permissions its job requires, nothing broader.",
          "Your data is used only to run your agent. Agents use an AI provider to process text, under terms that do not use API data for model training.",
          "When service ends, access is revoked and your credentials, server, and backups are deleted."
        ]
      }
    ],
    contact: "For questions about how MEERO handles your data, email Marwan Nassar at",
    contactEmail: "marwan@getmeero.com",
    sources: [
      { label: "Plausible data policy", url: "https://plausible.io/data-policy" },
      { label: "Calendly privacy notice", url: "https://calendly.com/legal/privacy-notice" }
    ],
  },
} as const;
