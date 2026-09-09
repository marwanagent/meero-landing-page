import type { Article } from "./types";

export const article: Article = {
  "slug": "bookkeeping-firms",
  "title": "How bookkeeping firms can stop chasing month-end documents",
  "metaDescription": "Bookkeeping firms can organize missing receipts, statement requests, and close exceptions by entity so document gaps stay visible through month-end.",
  "icp": "Bookkeeping firms",
  "publishedISO": "2026-09-08",
  "updatedISO": "2026-09-09",
  "intro": [
    "This guide is for bookkeeping firm owners and close leads who spend month-end searching for statements and receipts across client folders. The problem is rarely just an unanswered email: a document may cover the wrong period, belong to another entity, or fail to explain the transaction that prompted the request. A useful collection process tracks what is needed for reconciliation and why.",
    "Build the workflow around the per-entity close checklist, with source documents linked to specific gaps. An agent can compare expected documents with received files and organize unresolved questions for the bookkeeper. Account classification, reconciliation approval, and decisions about whether the books are ready stay with the person responsible for the close."
  ],
  "nowAnswer": "Use a per-entity document register to name the missing period, account, and source document before contacting a client. Pair it with a close checklist that distinguishes received files from reviewed evidence.",
  "tasksAnswer": "A custom agent can prepare targeted document requests, assemble uncategorized transaction questions, and surface close or AR aging exceptions. The bookkeeper still evaluates the evidence and approves accounting treatment.",
  "faqAnswer": "The main boundaries are document completeness, transaction classification, and close approval. These answers explain how to organize the supporting evidence without treating file collection as finished bookkeeping.",
  "doThisNow": [
    {
      "heading": "Replace broad document requests with a gap register",
      "body": "In the spreadsheet or task system you already use, list each client entity, expected bank statement, relevant period, and receiving folder. Compare the register with actual files before sending a request. A statement for a neighboring period should remain a gap, even if the filename looks plausible. Write a short explanation of what the client should supply, using recognizable account labels rather than internal shorthand. Give the assigned bookkeeper a place to mark an unusual account as intentionally excluded so it does not generate repeated requests."
    },
    {
      "heading": "Create a client question list from unresolved transactions",
      "body": "Review uncategorized transactions and group questions by the information required to resolve them. Ask for the business purpose or source document associated with a recognizable transaction, rather than asking the client to choose an accounting category. Include enough context for identification while keeping sensitive account information in the approved portal. Record the response beside the question and link the receipt if one arrives. Leave the chart of accounts decision to the bookkeeper so a casual client explanation does not become an unreviewed posting instruction."
    },
    {
      "heading": "Define evidence for each close checklist item",
      "body": "Take a recent month-end close and inspect what supported each completed step. Update the per-entity checklist so bank reconciliation, transaction review, and final approval have their own evidence and responsible person. Mark steps blocked by a missing source document instead of leaving them silently incomplete. A received bank statement should unlock review, not automatically mark reconciliation as done. Use the next close meeting to resolve blocked items from this view, with the underlying documents accessible directly from the checklist."
    },
    {
      "heading": "Separate receivables questions from document collection",
      "body": "Create a saved AR aging view and write down the exceptions that deserve investigation, such as an unapplied receipt or a disputed balance. Assign those items to the person who can inspect the supporting records. Do not mix them into the general request for bank statements because the client may need a different colleague to answer. Preserve the reason an item remains open and the last confirmed action. This creates a useful discussion list without assuming an old balance is necessarily collectible or even correct."
    }
  ],
  "agentTasks": [
    {
      "name": "Request statements and receipts by entity",
      "todayItLooksLike": "A bookkeeper opens each client folder and compares filenames with the accounts being reconciled. Missing receipts are then requested in separate messages that clients struggle to connect with the original transaction.",
      "whoItSuits": "An agent can compare the expected document register with available uploads and draft a consolidated request organized by entity and period. Firms with consistent folder permissions and account labels can use this without moving confidential files into a general inbox. Unreadable or ambiguous files should remain flagged."
    },
    {
      "name": "Prepare uncategorized transaction review",
      "todayItLooksLike": "The close lead exports unresolved entries, adds context from prior correspondence, and asks the client what each purchase was for. Answers often arrive separately from the transaction list.",
      "whoItSuits": "An agent can assemble the questions and attach client explanations to the corresponding entries. This helps firms that repeatedly reconcile client responses against bank activity. It should not invent a business purpose or select a chart of accounts category simply because a merchant name resembles a previous transaction."
    },
    {
      "name": "Maintain the per-entity close checklist",
      "todayItLooksLike": "Staff inspect multiple entities to see which reconciliations are complete and which depend on missing evidence. A client-level status can hide an unfinished entity behind another entity’s completed close.",
      "whoItSuits": "An agent can update administrative readiness from document and review records, then surface blocked steps to the assigned bookkeeper. Completion of a reconciliation or the month-end close requires the recorded reviewer approval. A file arriving in the portal should only update the corresponding document status."
    },
    {
      "name": "Surface AR aging exceptions for investigation",
      "todayItLooksLike": "The team compares receivables balances with notes about disputes, credits, and incoming payments. The aging report alone does not show which balance needs correction and which needs client attention.",
      "whoItSuits": "Firms that record receivables exceptions can have an agent compile the relevant invoice, payment, and explanation for review. It can highlight a stale unresolved item without deciding to write it off or initiating collection. The reviewer determines whether the issue is accounting, documentation, or a customer dispute."
    },
    {
      "name": "Prepare year-end document requests",
      "todayItLooksLike": "As year-end approaches, the firm rebuilds a list of supporting schedules and documents from the client’s current accounts and earlier correspondence. Old request lists can include items that no longer apply.",
      "whoItSuits": "An agent can draft an entity-specific request from the bookkeeper’s approved year-end checklist and distinguish documents already held from those still needed. This suits firms with different requirements across client entities. The responsible professional confirms the request contents and any accounting or tax implications."
    }
  ],
  "claims": [],
  "faq": [
    {
      "q": "Does receiving a bank statement complete the reconciliation step?",
      "a": "No. Receipt confirms that a document is available; reconciliation requires the bookkeeper’s work and review. Record document availability separately from reconciliation status. The close checklist should identify the reviewer and supporting evidence before that accounting step is marked complete, even when the statement arrived through an automated collection process."
    },
    {
      "q": "What should clients be asked about uncategorized transactions?",
      "a": "Ask for facts the client can provide, such as the business purpose and the associated receipt. Avoid presenting unexplained account codes as a multiple-choice accounting exercise. Link each answer to its transaction so the bookkeeper can assess it in context and choose the appropriate treatment using the firm’s normal review process."
    },
    {
      "q": "How do document requests stay separate for related entities?",
      "a": "Label every expected document with its entity, account, and period, then check those fields when a file is received. A shared client contact can receive an organized request, but the underlying records should preserve entity boundaries. Ambiguous uploads belong in a review queue until someone confirms where they should be filed."
    },
    {
      "q": "Should an AR aging exception trigger a collection email?",
      "a": "Not automatically. An apparent overdue amount may involve an unapplied payment, disputed invoice, or pending adjustment. Have the bookkeeper investigate the exception and establish the correct balance first. If client contact is appropriate, the authorized person can approve the purpose and wording based on that reviewed record."
    }
  ]
};
