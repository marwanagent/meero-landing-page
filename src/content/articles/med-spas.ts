import type { Article } from "./types";

export const article: Article = {
  "slug": "med-spas",
  "title": "How med spas can reduce no-shows and rebook treatment packages",
  "metaDescription": "Med spas can track appointment deposits, prepare approved aftercare check-ins, and coordinate package rebooking while providers handle clinical questions.",
  "icp": "Med spas",
  "publishedISO": "2026-09-08",
  "updatedISO": "2026-09-09",
  "intro": [
    "This guide is for med spa owners and front-desk managers coordinating high-value appointments, treatment packages, and memberships. An appointment may be reserved without its required deposit, while a package holder may leave without an administrative plan for arranging the next session. Those gaps call for different workflows with clear boundaries around the provider’s treatment decisions.",
    "Begin with the booking policy and the provider-approved instructions associated with the appointment. An agent can check deposit status, prepare confirmations, and help clients arrange an authorized next session. Clinical questions, contraindications, and anything medical must route to a licensed provider, never to an agent."
  ],
  "nowAnswer": "Reconcile deposit status with upcoming appointments and record whether package clients have an authorized next-session booking step. Use your existing scheduling system and approved aftercare templates to make those administrative gaps visible.",
  "tasksAnswer": "A custom agent can prepare deposit reminders, send approved aftercare check-ins, and coordinate rebooking within provider-authorized instructions. It can also organize membership renewals and consultation-to-booking administration without making treatment recommendations.",
  "faqAnswer": "Med spa automation should handle booking and account administration while licensed providers handle care. These questions clarify deposits, treatment-series scheduling, aftercare replies, and membership changes.",
  "doThisNow": [
    {
      "heading": "Distinguish a reservation from a completed deposit requirement",
      "body": "Review upcoming appointments in the scheduler and compare each deposit status with the applicable booking policy. Record paid, pending, waived by an authorized person, or requiring reconciliation. Use the actual payment record rather than an assumption based on a calendar label. Save approved wording that explains the amount due through the secure payment process and what the client must do next. Do not include payment credentials in appointment notes, and send disputed or unclear payments to the front desk before another request goes out."
    },
    {
      "heading": "Connect aftercare messages to the provider’s approved instructions",
      "body": "Ask the licensed provider to identify which approved aftercare material belongs to each completed appointment and when administrative check-ins may be sent. Store the approved version in the system staff already use, with a clear route for replies that mention symptoms or ask about care. The front desk should not select instructions by guessing from an abbreviated appointment name. Review a sample message to confirm that it invites the client to contact the clinical team through the appropriate channel without suggesting that an automated reply can assess their condition."
    },
    {
      "heading": "Record the next booking step before package clients leave",
      "body": "Add an administrative handoff to the checkout process indicating whether the provider has authorized another session and what scheduling instructions apply. Distinguish ready to arrange, awaiting provider review, and client asked to pause. Keep the package balance separate from permission to book a treatment: an unused session does not establish clinical suitability. Give the front desk the approved scheduling instruction and contact preference so it can help arrange the next visit without interpreting the treatment plan or inventing a suitable interval."
    },
    {
      "heading": "Audit membership renewal and pause records",
      "body": "Open the membership list and compare upcoming renewals with recorded cancellation, pause, or account-change requests. Identify the approved terms the front desk should use when explaining renewal. Separate an administrative benefit question from a question about whether a treatment is appropriate. Create a short review list for accounts with conflicting status, and resolve those before preparing any renewal communication. Clients should receive information that reflects their actual membership record, especially when they have already asked to change or end the arrangement."
    }
  ],
  "agentTasks": [
    {
      "name": "Prepare deposit requests and appointment confirmations",
      "todayItLooksLike": "Front-desk staff compare the appointment book with payment status and message clients whose booking requirements remain incomplete. A payment received after a draft was prepared can make the next request inaccurate.",
      "whoItSuits": "An agent can check the current deposit record before preparing the approved booking message and hold disputed payments for staff. This suits med spas with clear deposit policies and connected appointment records. Fee waivers, refunds, and exceptions require the authorized staff member’s decision."
    },
    {
      "name": "Send provider-approved aftercare check-ins",
      "todayItLooksLike": "After a completed visit, staff identify the appropriate approved aftercare message and make sure replies reach someone who can handle them. Administrative outreach can become a clinical conversation as soon as a client describes a concern.",
      "whoItSuits": "An agent can deliver the assigned material and route responses to the licensed provider whenever they involve symptoms, contraindications, or other medical questions. It must not evaluate a reaction, reassure a client about symptoms, or generate treatment advice. The provider defines the clinical response pathway, including urgent concerns."
    },
    {
      "name": "Arrange the next session in an authorized series",
      "todayItLooksLike": "The front desk looks through package balances and appointment notes to find clients who can be contacted about another session. A balance alone does not show whether the provider wants a review first.",
      "whoItSuits": "An agent can offer booking assistance when the record contains provider-approved scheduling instructions and no unresolved hold. Med spas with structured checkout handoffs can use this to keep a series administratively organized. Any request to change timing for clinical reasons returns to the provider before options are offered."
    },
    {
      "name": "Prepare membership renewal communication",
      "todayItLooksLike": "Staff check whether an account is active, paused, or awaiting a requested change before explaining renewal terms. Membership notes and billing records can disagree.",
      "whoItSuits": "An agent can prepare a renewal message from the approved terms after reconciling the administrative status. Conflicting records should create a front-desk task. It should not interpret silence as permission for a new commitment or override a cancellation request because an older account field still says active."
    },
    {
      "name": "Support booking after a consultation",
      "todayItLooksLike": "A consultation ends with a provider’s recorded recommendation, but the client may still need help choosing an available appointment or understanding the booking process. The front desk has to distinguish that situation from a consultation awaiting clinical review.",
      "whoItSuits": "An agent can prepare booking assistance for clients whose provider has authorized the next administrative step. It can answer approved scheduling or deposit questions and record a decision to defer. Questions about expected results, suitability, or a touch-up belong with the licensed provider, even when asked during a booking conversation."
    }
  ],
  "claims": [],
  "faq": [
    {
      "q": "Can an automated aftercare reply tell a client that a reaction is normal?",
      "a": "No. A statement about a reaction is clinical guidance and must come from a licensed provider. The agent should route the client’s message through the provider-defined response process, preserving the description rather than interpreting it. Approved administrative acknowledgment can explain how the clinical team will receive the concern without offering reassurance or a diagnosis."
    },
    {
      "q": "Can unused package sessions determine the next treatment date?",
      "a": "No. Package balance is an account fact, while timing depends on the provider’s instructions. The front desk can offer scheduling help only within the authorized booking parameters. If the client asks to change the interval or reports something that could affect care, pause rebooking and route the question to the licensed provider."
    },
    {
      "q": "Should a missed deposit automatically cancel a high-value appointment?",
      "a": "Apply the med spa’s approved booking policy through its authorized staff and systems. Before taking action, reconcile recent payments, recorded waivers, and any dispute. An agent can identify an incomplete requirement and prepare a reminder, but unclear payment status should not become an automatic cancellation that the front desk then has to unwind."
    },
    {
      "q": "Can a consultation follow-up recommend a different treatment package?",
      "a": "Treatment recommendations belong to the licensed provider. An administrative follow-up can help the client book an already authorized next step or request another clinical conversation. It should not select a package, suggest a touch-up, or change the treatment plan to encourage a booking. Record a client’s choice to wait so outreach respects that preference."
    }
  ]
};
