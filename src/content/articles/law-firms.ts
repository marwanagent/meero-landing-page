import type { Article } from "./types";

export const article: Article = {
  "slug": "law-firms",
  "title": "How law firms can automate client intake and conflict-check preparation",
  "metaDescription": "Law firms can organize conflict-check preparation, consultation routing, and engagement letters while lawyers retain every acceptance decision.",
  "icp": "Law firms",
  "publishedISO": "2026-09-08",
  "updatedISO": "2026-09-09",
  "intro": [
    "This guide is for law firm owners and intake staff handling the path from first contact to a signed engagement letter. An inquiry can stall because an opposing party is unnamed, the practice area is unclear, or a consultation is booked before the responsible lawyer has reviewed the intake. Treat those as separate gates with specific requirements, rather than one undifferentiated list of prospective clients.",
    "Useful intake automation prepares the administrative work around those gates. It can assemble names for a conflict check, identify incomplete intake questionnaires, and track an engagement letter without deciding whether representation should begin. Legal judgment, conflict decisions, and accepting a matter stay with the responsible lawyer."
  ],
  "nowAnswer": "Build an intake checklist that separates party identification, lawyer review, consultation scheduling, and engagement paperwork. Your existing matter system and calendar can show which gate each inquiry has reached.",
  "tasksAnswer": "A custom agent can prepare conflict-check records, route inquiries by practice area, and move approved intake paperwork between defined stages. It cannot clear a conflict or accept a matter.",
  "faqAnswer": "Intake automation should preserve lawyer control over conflicts, urgent legal questions, and representation. The practical questions below concern the administrative records needed before those decisions.",
  "doThisNow": [
    {
      "heading": "Define the information needed for a conflict check",
      "body": "Ask the responsible lawyer to specify the names and relationships staff should collect before arranging a consultation. Put those fields in the intake questionnaire, distinguishing the person making contact from other parties associated with the matter. Include a place for former names or related entities when the lawyer considers them relevant. A paralegal should be able to see which names are missing without reading a lengthy account of the dispute. Keep the submitted wording alongside any normalized names so a reviewer can trace corrections."
    },
    {
      "heading": "Separate intake stages in the matter system",
      "body": "Create distinct statuses for awaiting party details, awaiting conflict review, consultation authorized, and engagement paperwork pending. Record the lawyer responsible for the review and require an explicit decision before staff advance through that gate. Avoid using a scheduled meeting as evidence that the firm has accepted the matter. Review a recently completed intake against the stages and identify where approval actually happened. If your system lacks custom stages, use a restricted checklist attached to the inquiry instead of creating a broadly shared document."
    },
    {
      "heading": "Give reported deadlines a visible escalation path",
      "body": "Add a field for any deadline the caller reports, preserving the caller’s wording and the date staff received it. Name the lawyer who should assess urgency before a routine consultation slot is offered. Staff should not calculate a legal deadline or imply that booking a consultation protects the caller’s position. Put the escalation instruction beside the scheduling fields so it is available during a phone call. Keep reported dates separate from lawyer-approved docketing entries to prevent an unverified statement becoming an operational assumption."
    },
    {
      "heading": "Audit the engagement handoff",
      "body": "Compare the lawyer-approved engagement letter with the version sent for signature and identify where its status is recorded. Distinguish sent, signed, awaiting retainer, and authorized for matter opening according to the firm’s process. Assign someone to reconcile a returned signature with the correct inquiry before opening records. Use an existing completed matter to check that the assigned lawyer, access permissions, and approved documents reached the right location. An email saying someone intends to sign should not silently replace the actual signature record."
    }
  ],
  "agentTasks": [
    {
      "name": "Prepare party records for conflict review",
      "todayItLooksLike": "A paralegal extracts names from forms and emails, checks spelling, and assembles the party relationships a lawyer needs to examine. Similar names and incomplete company details create additional back-and-forth before the review can even start.",
      "whoItSuits": "Firms with a lawyer-defined party collection process can have an agent assemble that review packet and identify missing fields. Possible matches should remain visible for human assessment; neither an empty search result nor a name match should produce an automated clearance."
    },
    {
      "name": "Route inquiries to the appropriate practice area",
      "todayItLooksLike": "Intake staff read descriptions and ask around to find the lawyer who handles that kind of work in the stated jurisdiction. An unclear category can leave the inquiry in a general mailbox.",
      "whoItSuits": "A firm with explicit routing categories can use an agent to suggest the appropriate intake queue from supplied facts. Unfamiliar jurisdictions, overlapping categories, and requests for advice should reach the designated reviewer without an invented classification."
    },
    {
      "name": "Schedule consultations after the required review",
      "todayItLooksLike": "Staff compare lawyer availability with intake readiness and reported urgency. A calendar invitation sometimes goes out while essential party details are still absent or review is pending.",
      "whoItSuits": "An agent can offer approved appointment windows only after the firm’s recorded prerequisites are satisfied. Any newly reported deadline should interrupt ordinary scheduling and alert the responsible lawyer for assessment, with the original message available."
    },
    {
      "name": "Track engagement letters and retainer status",
      "todayItLooksLike": "Someone checks the signature system, the matter record, and payment information to establish whether approved engagement paperwork is complete. Different versions of a letter can make that reconciliation difficult.",
      "whoItSuits": "Practices that record document versions and payment status can delegate the administrative comparison. The agent can flag a missing signature or unresolved retainer condition and prepare an approved reminder, while the lawyer determines what those conditions mean for representation."
    },
    {
      "name": "Assemble the matter opening checklist",
      "todayItLooksLike": "Once acceptance is authorized, staff transfer approved contact details, permissions, and documents into a new matter. Missing ownership or an incorrect document version can send work back to intake.",
      "whoItSuits": "An agent can prepare the opening checklist from the accepted intake record and identify incomplete administrative fields. Lawyer-approved docketing instructions should be transferred exactly as authorized, with discrepancies returned for review rather than interpreted."
    }
  ],
  "claims": [],
  "faq": [
    {
      "q": "Can intake software clear a conflict when no matching name appears?",
      "a": "No. A search result is material for the responsible lawyer’s conflict decision, not clearance by itself. Configure the intake record to require the lawyer’s recorded disposition before the next authorized stage. Preserve the search inputs and any unresolved identity questions so the lawyer can understand what was actually checked."
    },
    {
      "q": "What happens if a caller mentions an imminent filing deadline?",
      "a": "The inquiry should go directly to the firm’s designated lawyer for urgency assessment. Store what the caller reported without converting it into a calculated deadline. Staff can explain the intake process using approved wording, but an automated acknowledgment must not promise that the firm will act or that a consultation resolves the urgency."
    },
    {
      "q": "Should the intake questionnaire request a full account before conflict review?",
      "a": "Have the responsible lawyer define the information appropriate at each intake stage, including how to handle sensitive narratives and privilege questions. The administrative system should request the approved fields and restrict access to submitted material. Broad internal notifications can point to the protected record without reproducing the caller’s account."
    },
    {
      "q": "Does a signed engagement letter automatically open a matter?",
      "a": "Only if the responsible lawyer has authorized that transition under the firm’s process. Signature status, retainer conditions, and acceptance can be separate requirements. The agent can show which requirements remain incomplete and prepare the matter record, but it should not infer acceptance from a signature alone."
    }
  ]
};
