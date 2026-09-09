import type { Article } from "./types";

export const article: Article = {
  "slug": "hvac-contractors",
  "title": "How HVAC contractors can follow up on quotes and renew maintenance agreements",
  "metaDescription": "HVAC contractors can track post-visit quotes, renew service agreements, and coordinate parts and callbacks using current job-ticket details.",
  "icp": "HVAC contractors",
  "publishedISO": "2026-09-08",
  "updatedISO": "2026-09-09",
  "intro": [
    "This guide is for HVAC contractor owners and office teams managing the work left after a technician leaves a property. A quote may need customer approval, a repair may depend on a part, and a service agreement may be approaching renewal. Putting all of that into a generic reminder list loses the equipment and job context that determines the next useful action.",
    "Organize the office workflow around the job ticket and its actual unresolved condition. An agent can use approved quote status, dispatch details, and service agreement dates to prepare specific communication. Technicians and office leads keep control of diagnosis, repair recommendations, warranty determinations, and commitments about when work can happen."
  ],
  "nowAnswer": "Connect each open quote to its job ticket, separate parts delays from customer decisions, and review upcoming service agreement renewals. Those changes can be made in your current dispatch software or office worksheet.",
  "tasksAnswer": "A custom agent can track quotes after technician visits, prepare seasonal tune-up renewal messages, and reconcile dispatch confirmations. It can also surface parts dependencies and callbacks for the appropriate office or technical review.",
  "faqAnswer": "HVAC follow-through depends on knowing whether a job awaits a customer, a part, or technical attention. These answers cover quote changes, renewal records, warranty uncertainty, and callback escalation.",
  "doThisNow": [
    {
      "heading": "Review quotes against the technician’s completed visit",
      "body": "Choose the open quote view in your existing job system and verify that each entry points to the completed job ticket. Record the approved quote version, customer decision, and any unresolved technical question. Separate an estimate awaiting office completion from a quote actually sent to the customer. If equipment age or condition matters to the conversation, preserve the technician’s recorded findings rather than adding an office interpretation. Close obsolete quotes when a replacement version is approved so the customer is not asked to accept the wrong work."
    },
    {
      "heading": "Build a renewal list from actual service agreement terms",
      "body": "Check upcoming service agreement end dates and the equipment covered by each agreement. Distinguish renewal from an unused seasonal tune-up already included in the current agreement. Record the approved renewal offer and any customer preference about contact. Use a saved view to review agreements with unclear dates or equipment that has been replaced. This prevents the office from selling a renewal using an outdated equipment record or asking a customer to pay again for a visit that remains available under existing terms."
    },
    {
      "heading": "Separate dispatch readiness from a requested appointment",
      "body": "Inspect the next dispatch board for jobs missing access details, technician assignment, or required parts. Mark a customer’s requested time separately from the window your office has confirmed. Write down who may change that window and how the customer is informed. Link any equipment-specific preparation instructions that the technician has approved. An office colleague should be able to identify why a job cannot yet be confirmed without opening every note or assuming that an empty calendar slot means the job is ready."
    },
    {
      "heading": "Give callbacks their own review queue",
      "body": "Label a reported problem after a visit as a callback and connect it to the original job ticket. Capture the customer’s description without converting it into a diagnosis. Define the office’s escalation route for urgent or unclear reports using the technical lead’s instructions. Keep callbacks out of ordinary quote follow-up so an unhappy customer does not receive a sales reminder while waiting for help. Review the queue with the dispatch lead and assign a named person to decide the next technical or scheduling action."
    }
  ],
  "agentTasks": [
    {
      "name": "Follow up on an approved quote after a service call",
      "todayItLooksLike": "Office staff read the technician’s notes, locate the sent quote, and check whether the customer has accepted or asked a question. A later technical revision can make an earlier reminder misleading.",
      "whoItSuits": "An agent can prepare a quote-specific message using the latest approved version and pause when the customer raises a technical issue. Contractors with reliable job-ticket status can delegate this comparison. An accepted quote should move to the office’s scheduling process rather than remain in a sales sequence."
    },
    {
      "name": "Prepare seasonal tune-up and agreement renewal outreach",
      "todayItLooksLike": "Someone sorts service agreement dates and tries to distinguish customers due for included maintenance from customers whose coverage is ending. Replaced equipment and changed contact preferences complicate the list.",
      "whoItSuits": "An agent can prepare separate messages for an available seasonal tune-up and a renewal offer using approved agreement records. The office reviews uncertain coverage or missing equipment details. Renewal language should describe the actual agreement instead of implying that every customer has the same included services."
    },
    {
      "name": "Reconcile dispatch confirmations with job readiness",
      "todayItLooksLike": "Dispatch sends appointment details while checking technician availability, access instructions, and whether the work can proceed. A parts delay or a changed assignment may arrive after a confirmation was drafted.",
      "whoItSuits": "An agent can prepare confirmations from the current dispatch board and hold messages when required readiness fields are unresolved. This helps offices where scheduling changes throughout the day. The dispatch lead decides how to rearrange jobs and approves promises about arrival windows."
    },
    {
      "name": "Track warranty and parts dependencies",
      "todayItLooksLike": "The office checks supplier updates and technician requests to establish which part is needed and whether warranty review is complete. Customers ask for progress while the job remains unscheduled.",
      "whoItSuits": "An agent can assemble the latest recorded supplier status and identify which dependency prevents the next step. It can draft a factual update without promising an install date or warranty coverage. A technician or authorized office reviewer must resolve compatibility, coverage, and any changed work requirement."
    },
    {
      "name": "Route callbacks using the original job context",
      "todayItLooksLike": "A customer reports that the problem has returned, and office staff search for the earlier visit and technician findings. Without that context, the report can be handled as an unrelated new request.",
      "whoItSuits": "An agent can connect the callback to the prior job ticket and notify the designated technical reviewer with the customer’s original description. Technical urgency and diagnosis remain human responsibilities. Reports matching the contractor’s escalation instructions should interrupt routine communication rather than wait behind ordinary quote messages."
    }
  ],
  "claims": [],
  "faq": [
    {
      "q": "What if a technician changes the recommended repair after a quote is sent?",
      "a": "Hold further messages about the earlier quote until the revised recommendation and pricing are approved. Keep both versions connected to the job ticket, with the current one clearly identified. The office should explain the change using the technician’s approved information before requesting a customer decision on the revised work."
    },
    {
      "q": "How is a service agreement renewal different from a tune-up reminder?",
      "a": "A renewal concerns the next agreement term; a tune-up reminder may concern work already included in the current term. Check the coverage record before choosing the message. Combining them without that distinction can confuse customers about what they have purchased and what still requires a new agreement."
    },
    {
      "q": "Can a parts update promise that a repair is covered by warranty?",
      "a": "Only an authorized, recorded coverage determination should support that statement. Supplier availability and warranty eligibility are different facts. An agent can relay approved status and flag missing information, but it should not infer coverage from equipment age, a part order, or the fact that a previous visit involved warranty work."
    },
    {
      "q": "Should a callback receive the normal quote reminder?",
      "a": "Pause the quote reminder while the callback is being assessed. The office should first connect the reported issue with the original visit and assign the appropriate reviewer. Once the contractor has established the next action, communication can reflect that decision instead of asking the customer to approve unrelated work during an unresolved service problem."
    }
  ]
};
