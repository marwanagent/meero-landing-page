import type { Article } from "./types";

export const article: Article = {
  "slug": "marketing-agencies",
  "title": "How marketing agencies can automate client reporting and scope requests",
  "metaDescription": "Marketing agencies can assemble campaign reports, track creative approvals, and flag requests outside the signed scope before assigning work.",
  "icp": "Marketing agencies",
  "publishedISO": "2026-09-08",
  "updatedISO": "2026-09-09",
  "intro": [
    "This guide is for marketing agency owners and account managers running recurring client retainers. Monthly reporting, creative approval, and small requests all draw on the same delivery team, but they need different handling. A report needs reconciled campaign data; a request needs a scope decision before anyone promises another deliverable.",
    "The useful starting point is the signed statement of work, the campaign calendar, and the record of client approvals. Connecting those records lets an agent prepare reporting and expose scope questions without deciding what the agency should give away. The account manager still owns the relationship and any conversation about changed fees or expectations."
  ],
  "nowAnswer": "Create a report specification and connect each active deliverable to its scope allowance and approval owner. That gives your team a usable monthly routine inside its current spreadsheets and project boards.",
  "tasksAnswer": "A custom agent can assemble campaign reporting, compare incoming requests with the signed scope, and identify creative approvals blocking delivery. Account managers approve interpretations, concessions, and client-facing recommendations.",
  "faqAnswer": "Reporting automation works best when metric definitions, creative versions, and scope allowances are explicit. These answers address the places recurring agency work tends to become ambiguous.",
  "doThisNow": [
    {
      "heading": "Write the reporting specification before the next reporting cycle",
      "body": "Open the last monthly report and identify the source for every chart, reporting period, and comparison. Note whether spend includes fees, which campaign naming convention applies, and where the narrative comes from. Save this specification beside the report template using your current shared drive. Mark metrics that cannot be reconciled instead of copying whatever figure appears first. Ask the account manager to remove charts that do not support a client decision, so the reporting routine does not preserve unnecessary work simply because it appeared last month."
    },
    {
      "heading": "Make scope allowances visible on the project board",
      "body": "Translate the signed statement of work into a short reference for deliverable types, included revision rounds, and approval responsibilities. Link it from the client’s project board. When a request arrives, record the requested output and the relevant allowance before assigning production. Label unclear requests for discussion with the account manager. This gives the team a concrete way to distinguish a normal revision from a new concept without forcing a designer to negotiate scope in the middle of a production conversation."
    },
    {
      "heading": "Track approval against the exact creative version",
      "body": "Choose a current asset and check whether anyone can tell which version the client approved. Add the version link, named approver, request date, and blocked deliverable to the existing approval task. Agree on where approval must be recorded if it arrives in a chat or email. Make dependencies visible so a delayed response does not look like unexplained production lateness. Do not treat a comment on an earlier draft as permission to publish the version currently in progress."
    },
    {
      "heading": "Prepare an account review from decisions",
      "body": "Set up an account review document with spaces for campaign outcomes, unfinished commitments, scope questions, and decisions needed from the client. Populate it during the month instead of reconstructing events immediately before the meeting. Link each open decision to the underlying report or deliverable. Ask the account manager to distinguish observed results from proposed explanations. A useful review ends with decisions about the next campaign period, not a collection of screenshots that the client has to interpret unaided."
    }
  ],
  "agentTasks": [
    {
      "name": "Assemble the monthly client report",
      "todayItLooksLike": "The reporting owner exports campaign data, cleans naming differences, updates charts, and checks whether the narrative still describes the current period. A missing export can make a finished-looking report incomplete.",
      "whoItSuits": "Agencies with agreed metric definitions can have an agent prepare the report from approved sources and label unavailable data. It should keep the reporting period visible and preserve links back to the exports. Performance explanations and recommendations remain editorial work for the account manager."
    },
    {
      "name": "Identify requests outside the signed scope",
      "todayItLooksLike": "A client asks for another format or an additional revision round in a delivery thread. Production begins before anyone compares the request with the statement of work, leaving the account manager to discuss fees after effort has been spent.",
      "whoItSuits": "An agent can attach the relevant scope provision and draft a change request for review. It should distinguish a clear match from uncertain wording. The account manager chooses whether to charge, trade another deliverable, or make a documented concession."
    },
    {
      "name": "Chase creative approvals that block production",
      "todayItLooksLike": "The creative team checks email and asset comments to discover whether a client has approved the latest version. Meanwhile, dependent campaign work waits without a clear explanation on the schedule.",
      "whoItSuits": "With a named approver and an authoritative version record, an agent can prepare a focused approval request showing the asset and affected delivery date. A requested edit should reopen the production task; it should not be recorded as approval merely because the client replied."
    },
    {
      "name": "Track deliverable dependencies and due dates",
      "todayItLooksLike": "An account manager compares the content calendar with production tasks and notices that copy, design, or creative approval is not ready for the planned campaign release. Individual tasks may look current while the overall delivery is at risk.",
      "whoItSuits": "An agent can identify dependencies that threaten a deliverable and draft an updated internal sequence. Agencies with shared production calendars can use this to discuss priorities early. Promising a revised client date still requires the person responsible for delivery."
    },
    {
      "name": "Prepare the recurring account review",
      "todayItLooksLike": "Before a review, the account manager searches previous meeting notes for commitments and compares them with the monthly report. Scope questions and unresolved feedback can disappear behind the latest campaign results.",
      "whoItSuits": "An agent can assemble an agenda that pairs each decision with its evidence, lists outstanding commitments, and separates reporting from change requests. This suits recurring retainers where the same review rhythm repeats but the client’s decisions and campaign context change."
    }
  ],
  "claims": [],
  "faq": [
    {
      "q": "How should a monthly report handle conflicting campaign totals?",
      "a": "Keep the disagreement visible and identify the source, reporting window, and metric definition for each figure. The report owner should resolve the mismatch before presenting a consolidated total. An agent can highlight the discrepancy and preserve the original exports, but selecting whichever number looks better would undermine the reporting process."
    },
    {
      "q": "Is another creative revision always a change request?",
      "a": "No. Compare the request with the included revision allowance and the agreed deliverable. Correcting an execution error may be different from developing a new direction, depending on the signed scope. The account manager should decide how the request is classified and record that decision so production has a clear instruction."
    },
    {
      "q": "Can an approval reminder explain that a campaign launch will move?",
      "a": "It can describe an approved dependency, such as production waiting for the current creative version to be accepted. Avoid automatically announcing a new launch date unless the delivery owner has confirmed it. Show the account manager which downstream tasks are affected so the client receives a realistic explanation and a specific decision to make."
    },
    {
      "q": "What belongs in an account review beyond campaign metrics?",
      "a": "Include decisions about upcoming deliverables, unresolved creative feedback, outstanding commitments, and scope changes awaiting agreement. Connect each item to the relevant evidence rather than repeating the full monthly report. The account manager can then use the meeting to agree priorities and responsibilities for the next period of the retainer."
    }
  ]
};
