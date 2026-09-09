import type { Article } from "./types";

export const article: Article = {
  "slug": "real-estate-brokerages",
  "title": "How real estate brokerages can coordinate showings and seller updates",
  "metaDescription": "Real estate brokerages can coordinate showing access, gather buyer-agent feedback, and prepare seller updates from recorded listing activity.",
  "icp": "Real estate brokerages",
  "publishedISO": "2026-09-08",
  "updatedISO": "2026-09-09",
  "intro": [
    "This guide is for real estate brokerage owners and listing coordinators managing showings, feedback, and seller communication on active listings. A requested showing is not a confirmed visit, and a completed visit does not automatically produce useful feedback. Keeping those events distinct gives the listing agent a reliable account of activity before speaking with the seller.",
    "The workflow begins with access arrangements and ends with a seller update that separates observed activity from advice. An agent can reconcile showing records, request feedback from the buyer’s agent, and assemble the weekly update. The listing agent remains responsible for interpreting interest, discussing a price adjustment, and advising the seller about offers."
  ],
  "nowAnswer": "Give each listing a current access record, distinct showing statuses, and a weekly seller-update outline. These can live in the calendar and listing tools your brokerage already uses.",
  "tasksAnswer": "A custom agent can coordinate showing windows, collect feedback after completed visits, and draft seller activity summaries. It can also track approved offer deadlines and organize open house follow-up.",
  "faqAnswer": "Listing coordination depends on accurate visit status and controlled access information. The questions here address seller reporting, buyer-agent feedback, and changes that affect scheduled activity.",
  "doThisNow": [
    {
      "heading": "Audit showing instructions for an active listing",
      "body": "Check the approved showing windows, required notice, occupancy restrictions, and person who confirms access. Put the current instructions in the listing’s designated scheduling record and remove obsolete notes from reusable messages. Keep lockbox details restricted to the authorized access channel. Ask a coordinator to process a sample request using only that record and note where they still need to call the listing agent. Resolve those gaps before the next busy showing period so a request cannot be mistaken for permission to enter."
    },
    {
      "heading": "Record completed visits separately from bookings",
      "body": "Add canceled, rescheduled, and completed statuses to the existing showing log. Decide who confirms completion and what evidence they use. A calendar event passing should not be enough to classify a visit as completed, especially when access failed or plans changed. Link the buyer’s agent to the visit so feedback goes to the correct person. Review recent activity for duplicate bookings that refer to a rescheduled showing, since those duplicates can distort both the follow-up list and the seller’s impression of interest."
    },
    {
      "heading": "Ask feedback questions that help the listing agent",
      "body": "Save a short feedback request asking about the buyer’s response to the property, obstacles to further interest, and whether another visit is being considered. Give the buyer’s agent a simple way to decline or say feedback is unavailable. Store responses with the actual showing instead of in a general contact note. Preserve the distinction between a quoted observation and the coordinator’s summary. Silence after a visit should remain missing feedback, not be translated into a negative opinion about the listing."
    },
    {
      "heading": "Prepare the seller update before writing the narrative",
      "body": "Create an outline containing completed showings, open house activity, feedback received, and decisions for the listing agent to discuss. Pull those facts from the activity log before drafting the message. Mark canceled appointments and unavailable feedback accurately rather than inflating activity with requests that never became visits. Reserve a separate space for the listing agent’s interpretation, including any discussion of comparable properties or a price adjustment. The seller should be able to distinguish what happened from what the agent recommends doing next."
    }
  ],
  "agentTasks": [
    {
      "name": "Coordinate showing times across agents",
      "todayItLooksLike": "A coordinator compares the buyer’s agent’s request with seller availability and existing bookings, then sends another message when the requested window conflicts. Changes can leave different calendars showing different arrangements.",
      "whoItSuits": "An agent can propose available windows from the listing’s approved instructions and record confirmation in the scheduling system. This works for brokerages with an authoritative access calendar. Exceptions involving occupants or special access conditions should reach the listing coordinator before any confirmation is sent."
    },
    {
      "name": "Collect feedback after completed showings",
      "todayItLooksLike": "The listing agent checks which visits actually happened and writes to each buyer’s agent for feedback. Replies arrive in different threads and are difficult to match to the correct appointment.",
      "whoItSuits": "An agent can request feedback against confirmed completed visits and attach replies to those visits. Brokerages benefit when the workflow stops requesting feedback after a response or a reported cancellation. Ambiguous comments can be preserved verbatim for the listing agent instead of being converted into a confident sentiment label."
    },
    {
      "name": "Draft the weekly seller activity update",
      "todayItLooksLike": "Someone gathers showing activity, open house notes, and buyer-agent replies before the listing agent can explain the week to the seller. Missing feedback often becomes invisible in the finished message.",
      "whoItSuits": "An agent can produce a factual draft with completed activity and clearly identified feedback gaps. The listing agent adds interpretation and approves the seller update. A price adjustment recommendation should come from the agent’s analysis, not from an automatic rule that treats unanswered feedback as weak demand."
    },
    {
      "name": "Maintain approved offer deadline reminders",
      "todayItLooksLike": "A listing coordinator checks messages and listing notes to confirm the current offer deadline. When the seller’s instructions change, an older reminder may still be waiting to go out.",
      "whoItSuits": "An agent can prepare notices using the listing agent’s approved deadline record and invalidate pending messages when that record changes. This suits teams that document seller instructions centrally. It should never invent a deadline, assess an offer’s merits, or tell someone that an unverified submission has been accepted."
    },
    {
      "name": "Organize open house attendee follow-up",
      "todayItLooksLike": "After an open house, staff reconcile sign-in notes, visitor questions, and promised property information. A handwritten preference or existing agent relationship may not make it into the contact record.",
      "whoItSuits": "An agent can organize the supplied contact preferences and prepare the specific information an attendee requested. The brokerage should define which contact is authorized and how represented visitors are handled. Stop further outreach when someone declines, and route property questions that need verification to the listing agent."
    }
  ],
  "claims": [],
  "faq": [
    {
      "q": "Can showing confirmations include lockbox access details?",
      "a": "Only through the brokerage’s approved access process for authorized recipients. Keep general scheduling messages separate from restricted entry instructions. Before enabling automated confirmations, establish which record governs access and how changed authorization is recognized. A confirmed time alone should not cause sensitive entry information to be distributed broadly."
    },
    {
      "q": "How should missing buyer-agent feedback appear in a seller update?",
      "a": "Label it as feedback not yet received. Report the completed showing independently so the seller sees the activity without an invented interpretation. The listing agent can decide whether another request is worthwhile and explain the limits of the available comments when discussing the property’s reception."
    },
    {
      "q": "What happens when an offer deadline changes after reminders are prepared?",
      "a": "Pending reminders should be held until they reference the revised, approved deadline. The coordinator should identify recipients of the earlier notice and prepare a correction for the listing agent to approve. Preserve the change history so the team can establish which instructions were communicated and avoid sending contradictory notices."
    },
    {
      "q": "Should open house comments automatically suggest a price adjustment?",
      "a": "No. Visitor comments are inputs for the listing agent to evaluate alongside the broader listing context and relevant comparables. The agent can group observations and preserve the original notes, but a recommendation to the seller requires the listing agent’s judgment. A handful of similar comments does not explain the whole market response."
    }
  ]
};
