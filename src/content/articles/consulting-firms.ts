import type { Article } from "./types";

export const article: Article = {
  "slug": "consulting-firms",
  "title": "How consulting firms can turn scoping calls into proposals faster",
  "metaDescription": "Consulting firms can turn scoping notes into proposal drafts, reconcile statement-of-work versions, and check delivery capacity before kickoff.",
  "icp": "Consulting firms",
  "publishedISO": "2026-09-08",
  "updatedISO": "2026-09-09",
  "intro": [
    "This guide is for consulting firm partners and operations leads turning scoping calls into discrete project engagements. Proposal work slows when the call notes contain ambitions but no agreed boundaries, or when the proposed start date assumes people who are already committed elsewhere. The drafting process needs a clear connection between client requirements, commercial terms, and delivery capacity.",
    "A useful agent prepares that connection rather than generating a persuasive proposal from thin notes. It can assemble an evidence-backed draft, identify unresolved assumptions, and package the approved engagement for kickoff. Partners retain pricing decisions and commitments, while delivery leads confirm the team and milestone plan."
  ],
  "nowAnswer": "Structure scoping notes around outcomes, exclusions, dependencies, and acceptance criteria, then compare the proposed engagement with available delivery capacity. Existing documents and a staffing spreadsheet are enough to begin.",
  "tasksAnswer": "A custom agent can build proposal drafts from scoping notes, track statement-of-work versions, and assemble kickoff packs. It can also expose milestone billing conditions and capacity conflicts before commitments are made.",
  "faqAnswer": "Proposal automation should make assumptions and commitments easier to inspect. These questions focus on incomplete scoping, commercial versions, staffing uncertainty, and the evidence required to start delivery.",
  "doThisNow": [
    {
      "heading": "Turn the last scoping call into a decision record",
      "body": "Read the notes from a recent scoping call and separate desired outcomes from proposed activities. Add headings for exclusions, client dependencies, acceptance criteria, and unanswered questions. Attribute requirements to the relevant note or confirmed correspondence so a reviewer can see where they came from. Leave gaps marked as unresolved instead of completing them from habit. Ask the delivery lead which missing answer would change the approach, then prioritize that question before polishing a proposal that might need to be restructured."
    },
    {
      "heading": "Create a controlled proposal assembly folder",
      "body": "Use your current document storage to collect approved service descriptions, the current rate card, and reusable statement-of-work clauses. Give each component an owner and distinguish approved material from examples retained for reference. An old successful proposal may contain a concession that should not become the next client’s default. Write a short assembly checklist that identifies which sections require partner review. This gives the person drafting a proposal a dependable starting point without encouraging them to copy another engagement’s assumptions or confidential details."
    },
    {
      "heading": "Compare the proposed timeline with named capacity",
      "body": "Open the staffing spreadsheet and map the proposed milestones to the skills and availability they need. Distinguish confirmed assignments from tentative holds and people on the bench whose skills may not fit the work. Note client dependencies that could move the start date. Have the delivery lead review any overlap before the partner promises a kickoff. A general utilization figure is not enough to establish whether the particular people required can perform the proposed work during the relevant period."
    },
    {
      "heading": "Write down the handoff from signature to kickoff",
      "body": "Create a kickoff checklist that names the signed statement of work, client sponsor, delivery lead, agreed milestones, access prerequisites, and unresolved dependencies. Identify the event that authorizes delivery to begin. Keep proposal drafts out of the kickoff pack unless they are explicitly labeled as background. For each billing trigger, record the agreed evidence and who confirms it. Walk through a completed engagement to see whether delivery had to rediscover a promise that was made during scoping but never included in the handoff."
    }
  ],
  "agentTasks": [
    {
      "name": "Assemble a proposal from scoping evidence",
      "todayItLooksLike": "A partner converts call notes into an approach, searches past proposals for suitable language, and tries to remember which assumptions the client actually confirmed. Drafting can hide unresolved questions behind fluent prose.",
      "whoItSuits": "An agent can populate a proposal outline with requirements linked to scoping notes and mark unsupported sections for review. This suits firms with defined offerings and approved commercial language. The partner should set the recommendation, price, and exclusions rather than accepting an agent’s invented completion of missing facts."
    },
    {
      "name": "Track proposal and statement-of-work versions",
      "todayItLooksLike": "Different document versions circulate among the partner, client, and delivery lead. A verbal indication of interest can be mistaken for acceptance while revisions to scope or terms are still unresolved.",
      "whoItSuits": "An agent can maintain the proposal’s current stage, record the authoritative version, and show outstanding commercial questions. Firms negotiating discrete engagements can use this to avoid preparing delivery from an obsolete draft. Only the firm’s approved acceptance evidence should mark the statement of work as signed and effective."
    },
    {
      "name": "Identify milestone and billing conditions",
      "todayItLooksLike": "Operations reads the statement of work to work out whether billing depends on a date, delivery of an artifact, or client acceptance. Those conditions may not appear in the delivery tracker.",
      "whoItSuits": "An agent can extract proposed milestone entries with the associated billing language and ask the responsible reviewer to confirm them. Once approved, it can surface conditions awaiting evidence. It should not assume a milestone has been accepted because a planned date passed or an internal task was marked complete."
    },
    {
      "name": "Prepare the engagement kickoff pack",
      "todayItLooksLike": "A delivery lead searches proposal threads for the agreed objective, dependencies, and sponsor details. The team may begin with the right presentation but the wrong version of the commercial scope.",
      "whoItSuits": "An agent can assemble the signed documents, approved delivery outline, contact roles, and outstanding prerequisites into a kickoff pack. This is useful when partners hand engagements to separate delivery teams. Conflicting instructions should be highlighted before kickoff rather than blended into a seemingly consistent summary."
    },
    {
      "name": "Match proposed work against available capacity",
      "todayItLooksLike": "Partners discuss likely engagements while operations tracks utilization and bench availability elsewhere. A promising proposal can assume the same specialist already reserved for another project.",
      "whoItSuits": "An agent can compare proposed roles and timing with the staffing record, preserving the distinction between tentative and committed work. It can expose collisions and skill gaps for the delivery lead. Staffing choices and changes to promised start dates remain commercial and operational decisions for the firm."
    }
  ],
  "claims": [],
  "faq": [
    {
      "q": "Can a proposal draft include assumptions the scoping call did not resolve?",
      "a": "It can include clearly labeled assumptions for partner review, but it should not present them as client agreement. Attach the unresolved question and explain which part of the approach depends on the answer. If the uncertainty changes effort or feasibility, resolve it before issuing a firm commitment in the statement of work."
    },
    {
      "q": "Which statement-of-work version should the kickoff pack use?",
      "a": "Use the signed, authoritative version identified by the firm’s acceptance process. Link later approved changes separately and make their status clear. The kickoff pack should expose any difference between the commercial agreement and the proposed delivery outline so the delivery lead can resolve it before briefing the team."
    },
    {
      "q": "Can bench availability be used to promise a project start?",
      "a": "Bench availability is an input, not a confirmed assignment. Check skills, planned leave, tentative holds, and the work required at each milestone. The delivery lead should confirm the staffing plan before a partner commits to a start date. Preserve uncertainty in the capacity view while the proposal remains under negotiation."
    },
    {
      "q": "Should completing a milestone automatically release an invoice?",
      "a": "Only the approved billing process can determine that. The agent can surface the contractual trigger and supporting delivery evidence, but internal completion may differ from client acceptance. Have the designated reviewer confirm that the agreed condition is satisfied before the billing action proceeds, especially when acceptance or another dependency remains unresolved."
    }
  ]
};
