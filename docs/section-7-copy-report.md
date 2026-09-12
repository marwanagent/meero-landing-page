# Section 7 copy report

All edits remain unstaged. Earlier working-tree changes were preserved.

Counts use an editorial census of statements that constrain authority, prerequisites, evidence validity, confidentiality, or permitted communication. A sentence with several boundaries counts once in the sentence column; its distinct constraints remain separate in the boundary inventory. Procedural instructions without such a constraint are not boundary sentences. The inventories below expose every counted sentence for review.

Sentence endings are periods, question marks, or exclamation marks followed by whitespace, applied separately to each body string; semicolon clauses belong to the same sentence. Body totals exclude metadata, headings, FAQ questions, navigation, software-name lists, and shared button labels. They include opening copy, section answers, task descriptions, FAQ answers, closing CTA paragraphs, new direct answers, systems framing, scope blocks, and the complete HVAC evidence unit. Before totals include the former shared closing paragraph.

The original operational boundaries all survive; added distinctions concern unverified software access and the scope of first-party evidence. Repeated statements were removed from intros, task descriptions, and FAQ answers, with consolidated scope paragraphs and short FAQ answers preserving the decisions. Some related list items were combined; existing FAQ material was split into narrower questions.

| Article | Distinct boundaries, before → after | Boundary sentences, before → after | All body sentences, before → after | Now / tasks / FAQ |
| --- | --- | --- | --- | --- |
| law-firms | 13 → 14 | 43 → 32 | 67 → 57 | 3 / 4 / 5 |
| bookkeeping-firms | 12 → 13 | 43 → 32 | 73 → 65 | 3 / 5 / 5 |
| hvac-contractors | 14 → 17 | 40 → 35 | 71 → 70 | 5 / 5 / 4 |
| med-spas | 14 → 15 | 56 → 45 | 72 → 59 | 4 / 5 / 5 |
| real-estate-brokerages | 13 → 14 | 43 → 34 | 73 → 64 | 4 / 5 / 4 |
| commercial-cleaning | 14 → 15 | 39 → 33 | 73 → 66 | 3 / 5 / 4 |
| marketing-agencies | 10 → 11 | 31 → 23 | 70 → 62 | 4 / 4 / 4 |
| consulting-firms | 11 → 12 | 40 → 30 | 72 → 62 | 5 / 4 / 5 |

Evidence appears only on HVAC contractors because quote follow-up and maintenance renewal outreach are actual subjects of that guide. The adjacent context identifies Treehouse Music and explicitly excludes an HVAC client result. Law intake, bookkeeping collection, clinical booking, seller reporting, cleaning oversight, agency reporting, and consulting proposal preparation do not receive an outreach result. Incidental follow-up tasks in those guides do not justify using a prospecting metric.

FirstPartyResult takes no props. It reads the result and mandatory scope qualifier from the same proof content object and renders them in one figure. Both the homepage and HVAC article use it; the client quote remains separate on the homepage.

The hub has 515 words of original body copy. An independent normalized eight-word comparison found no overlap with any other source file, including all eight articles. The page-card titles and descriptions remain existing article references and are excluded from the original-body count.

Privacy copy follows Analytics.tsx, CalendlyEmbed.tsx, Cta.tsx, analytics.ts, and the homepage mount points. The summary identifies optional Plausible loading, click location and booking-completion events, Calendly requests before form submission, and booking data sent through Calendly. It uses the existing postal address for contact and links the actual providers’ policies. No compliance claim, retention promise, invented email address, or rights-request process was added. The pending-legal-review notice is above the privacy H1.

About copy uses only the confirmed operator facts, including one external paying client. No requested prose was declined. Unsupported results, integration claims, credentials, and citations were intentionally omitted; article claims arrays remain empty.

Validation: npm run build, npm run lint, the placeholder checker, and the article overlap checker all exit successfully. Additional checks confirm unchanged slugs, titles and publication dates; valid list ranges; direct answers immediately after H1 in exported HTML; the mandatory result qualifier; no unauthorized article-prose digits; and no unfinished markers in the final static output. The existing public text index’s privacy placeholder was replaced with the page description. Stale duplicate exports were preserved at /tmp/meero-old-export-tkolusls/out before rebuilding cleanly.

Overlap checker output:

```text
Articles checked: 8
Shingle size: 8 words
Highest pairwise overlap: 0.00% (none)
PASS: no shared phrasing across articles.
```

## law-firms

Retained distinct boundaries:

1. Lawyer retains legal judgment.
2. Lawyer clears conflicts, search results are not clearance.
3. Lawyer authorizes acceptance, signatures and appointments are not acceptance.
4. Intake stages require recorded prerequisites.
5. Lawyer defines collected information and privilege handling.
6. Source names and identities remain traceable.
7. Sensitive records and notifications have restricted access.
8. Urgency escalates to lawyer before scheduling.
9. Reported deadlines are not calculated or treated as approved docketing.
10. No promise of action or protection through acknowledgment.
11. Actual signature and retainer evidence governs paperwork status.
12. Ambiguous routing and advice requests reach reviewer.
13. Approved docketing transfers exactly, discrepancies return for review.

Added boundary: named software is context, with feasible access checked for the reader’s existing setup.

Before boundary sentence inventory:

1. `intro.1`: It can assemble names for a conflict check, identify incomplete intake questionnaires, and track an engagement letter without deciding whether representation should begin.
2. `intro.1`: Legal judgment, conflict decisions, and accepting a matter stay with the responsible lawyer.
3. `tasksAnswer`: A custom agent can prepare conflict-check records, route inquiries by practice area, and move approved intake paperwork between defined stages.
4. `tasksAnswer`: It cannot clear a conflict or accept a matter.
5. `faqAnswer`: Intake automation should preserve lawyer control over conflicts, urgent legal questions, and representation.
6. `doThisNow.0.body`: Ask the responsible lawyer to specify the names and relationships staff should collect before arranging a consultation.
7. `doThisNow.0.body`: Include a place for former names or related entities when the lawyer considers them relevant.
8. `doThisNow.0.body`: Keep the submitted wording alongside any normalized names so a reviewer can trace corrections.
9. `doThisNow.1.body`: Record the lawyer responsible for the review and require an explicit decision before staff advance through that gate.
10. `doThisNow.1.body`: Avoid using a scheduled meeting as evidence that the firm has accepted the matter.
11. `doThisNow.1.body`: If your system lacks custom stages, use a restricted checklist attached to the inquiry instead of creating a broadly shared document.
12. `doThisNow.2.body`: Add a field for any deadline the caller reports, preserving the caller’s wording and the date staff received it.
13. `doThisNow.2.body`: Name the lawyer who should assess urgency before a routine consultation slot is offered.
14. `doThisNow.2.body`: Staff should not calculate a legal deadline or imply that booking a consultation protects the caller’s position.
15. `doThisNow.2.body`: Keep reported dates separate from lawyer-approved docketing entries to prevent an unverified statement becoming an operational assumption.
16. `doThisNow.3.body`: Compare the lawyer-approved engagement letter with the version sent for signature and identify where its status is recorded.
17. `doThisNow.3.body`: Distinguish sent, signed, awaiting retainer, and authorized for matter opening according to the firm’s process.
18. `doThisNow.3.body`: Assign someone to reconcile a returned signature with the correct inquiry before opening records.
19. `doThisNow.3.body`: Use an existing completed matter to check that the assigned lawyer, access permissions, and approved documents reached the right location.
20. `doThisNow.3.body`: An email saying someone intends to sign should not silently replace the actual signature record.
21. `agentTasks.0.whoItSuits`: Firms with a lawyer-defined party collection process can have an agent assemble that review packet and identify missing fields.
22. `agentTasks.0.whoItSuits`: Possible matches should remain visible for human assessment; neither an empty search result nor a name match should produce an automated clearance.
23. `agentTasks.1.whoItSuits`: A firm with explicit routing categories can use an agent to suggest the appropriate intake queue from supplied facts.
24. `agentTasks.1.whoItSuits`: Unfamiliar jurisdictions, overlapping categories, and requests for advice should reach the designated reviewer without an invented classification.
25. `agentTasks.2.whoItSuits`: An agent can offer approved appointment windows only after the firm’s recorded prerequisites are satisfied.
26. `agentTasks.2.whoItSuits`: Any newly reported deadline should interrupt ordinary scheduling and alert the responsible lawyer for assessment, with the original message available.
27. `agentTasks.3.whoItSuits`: The agent can flag a missing signature or unresolved retainer condition and prepare an approved reminder, while the lawyer determines what those conditions mean for representation.
28. `agentTasks.4.todayItLooksLike`: Once acceptance is authorized, staff transfer approved contact details, permissions, and documents into a new matter.
29. `agentTasks.4.whoItSuits`: An agent can prepare the opening checklist from the accepted intake record and identify incomplete administrative fields.
30. `agentTasks.4.whoItSuits`: Lawyer-approved docketing instructions should be transferred exactly as authorized, with discrepancies returned for review rather than interpreted.
31. `faq.0.a`: No.
32. `faq.0.a`: A search result is material for the responsible lawyer’s conflict decision, not clearance by itself.
33. `faq.0.a`: Configure the intake record to require the lawyer’s recorded disposition before the next authorized stage.
34. `faq.0.a`: Preserve the search inputs and any unresolved identity questions so the lawyer can understand what was actually checked.
35. `faq.1.a`: The inquiry should go directly to the firm’s designated lawyer for urgency assessment.
36. `faq.1.a`: Store what the caller reported without converting it into a calculated deadline.
37. `faq.1.a`: Staff can explain the intake process using approved wording, but an automated acknowledgment must not promise that the firm will act or that a consultation resolves the urgency.
38. `faq.2.a`: Have the responsible lawyer define the information appropriate at each intake stage, including how to handle sensitive narratives and privilege questions.
39. `faq.2.a`: The administrative system should request the approved fields and restrict access to submitted material.
40. `faq.2.a`: Broad internal notifications can point to the protected record without reproducing the caller’s account.
41. `faq.3.a`: Only if the responsible lawyer has authorized that transition under the firm’s process.
42. `faq.3.a`: Signature status, retainer conditions, and acceptance can be separate requirements.
43. `faq.3.a`: The agent can show which requirements remain incomplete and prepare the matter record, but it should not infer acceptance from a signature alone.

After boundary sentence inventory:

1. `intro.1`: It can assemble names for a conflict check, identify incomplete intake questionnaires, and track an engagement letter without deciding whether representation should begin.
2. `tasksAnswer`: A custom agent can prepare conflict-check records, route inquiries by practice area, and move approved intake paperwork between defined stages.
3. `doThisNow.0.body`: Ask the responsible lawyer to specify the names and relationships staff should collect before arranging a consultation.
4. `doThisNow.0.body`: Include a place for former names or related entities when the lawyer considers them relevant.
5. `doThisNow.0.body`: Keep the submitted wording alongside any normalized names so a reviewer can trace corrections.
6. `doThisNow.1.body`: Record the lawyer responsible for the review and require an explicit decision before staff advance through that gate.
7. `doThisNow.1.body`: If your system lacks custom stages, use a restricted checklist attached to the inquiry instead of creating a broadly shared document.
8. `doThisNow.2.body`: Add a field for any deadline the caller reports, preserving the caller’s wording and the date staff received it.
9. `doThisNow.2.body`: Keep reported dates separate from lawyer-approved docketing entries to prevent an unverified statement becoming an operational assumption.
10. `doThisNow.2.body`: Compare the lawyer-approved engagement letter with the version sent for signature and identify where its status is recorded.
11. `doThisNow.2.body`: Distinguish sent, signed, awaiting retainer, and authorized for matter opening according to the firm’s process.
12. `doThisNow.2.body`: Assign someone to reconcile a returned signature with the correct inquiry before opening records.
13. `doThisNow.2.body`: Use an existing completed matter to check that the assigned lawyer, access permissions, and approved documents reached the right location.
14. `doThisNow.2.body`: An email saying someone intends to sign should not silently replace the actual signature record.
15. `agentTasks.0.whoItSuits`: Firms with a lawyer-defined party collection process can have an agent assemble that review packet and identify missing fields.
16. `agentTasks.1.whoItSuits`: A firm with explicit routing categories can use an agent to suggest the appropriate intake queue from supplied facts.
17. `agentTasks.1.whoItSuits`: Unfamiliar jurisdictions, overlapping categories, and requests for advice should reach the designated reviewer without an invented classification.
18. `agentTasks.2.whoItSuits`: An agent can offer approved appointment windows only after the firm’s recorded prerequisites are satisfied.
19. `agentTasks.3.todayItLooksLike`: Once acceptance is authorized, staff transfer approved contact details, permissions, and documents into a new matter.
20. `agentTasks.3.whoItSuits`: The agent can flag a missing signature or unresolved retainer condition and prepare an approved reminder, while the lawyer determines what those conditions mean for representation.
21. `agentTasks.3.whoItSuits`: An agent can prepare the opening checklist from the accepted intake record and identify incomplete administrative fields.
22. `agentTasks.3.whoItSuits`: Lawyer-approved docketing instructions should be transferred exactly as authorized, with discrepancies returned for review rather than interpreted.
23. `faq.0.a`: Conflict clearance requires a lawyer’s recorded decision, supported by the search inputs and unresolved identity questions.
24. `faq.1.a`: Route the reported deadline to the designated lawyer for urgency assessment, using an acknowledgment that promises neither representation nor protection through a consultation.
25. `faq.2.a`: Have the responsible lawyer define the information appropriate at each intake stage, including how to handle sensitive narratives and privilege questions.
26. `faq.2.a`: The administrative system should request the approved fields and restrict access to submitted material.
27. `faq.3.a`: Matter opening follows the lawyer’s authorization after the required signature and retainer conditions are recorded.
28. `faq.4.a`: Broad internal notifications can point to the protected record without reproducing the caller’s account.
29. `directAnswer`: Recorded lawyer decisions control consultation scheduling and matter opening.
30. `systemsContext`: Law practices commonly run the products listed here; the custom build starts with whichever systems your practice already uses, with access and feasible actions assessed for that workflow.
31. `scope`: The responsible lawyer retains legal judgment, conflict clearance, and matter acceptance; neither a search match nor an empty result, booked consultation, or signature establishes representation.
32. `scope`: Reported urgency goes to that lawyer before routine scheduling, with the caller’s original deadline wording preserved; staff and agents neither calculate legal deadlines nor promise protection through a consultation.

## bookkeeping-firms

Retained distinct boundaries:

1. Bookkeeper owns classification and accounting treatment.
2. No invented transaction purpose or merchant-based posting.
3. Evidence and reviewer approval required for reconciliation and close.
4. File receipt updates availability only.
5. Entity, account and period stay separate and verified.
6. Ambiguous or unreadable documents remain unresolved.
7. Confidential account information stays in protected channels.
8. Intentional checklist exclusions stop unnecessary requests.
9. AR issues stay separate from document requests.
10. Balances investigated before collection, contact requires authorization.
11. No autonomous write-off.
12. Professional approves year-end requests and tax implications.

Added boundary: named software is context, with feasible access checked for the reader’s existing setup.

Before boundary sentence inventory:

1. `intro.1`: Account classification, reconciliation approval, and decisions about whether the books are ready stay with the person responsible for the close.
2. `nowAnswer`: Pair it with a close checklist that distinguishes received files from reviewed evidence.
3. `tasksAnswer`: The bookkeeper still evaluates the evidence and approves accounting treatment.
4. `faqAnswer`: The main boundaries are document completeness, transaction classification, and close approval.
5. `faqAnswer`: These answers explain how to organize the supporting evidence without treating file collection as finished bookkeeping.
6. `doThisNow.0.body`: Compare the register with actual files before sending a request.
7. `doThisNow.0.body`: A statement for a neighboring period should remain a gap, even if the filename looks plausible.
8. `doThisNow.0.body`: Give the assigned bookkeeper a place to mark an unusual account as intentionally excluded so it does not generate repeated requests.
9. `doThisNow.1.body`: Ask for the business purpose or source document associated with a recognizable transaction, rather than asking the client to choose an accounting category.
10. `doThisNow.1.body`: Include enough context for identification while keeping sensitive account information in the approved portal.
11. `doThisNow.1.body`: Leave the chart of accounts decision to the bookkeeper so a casual client explanation does not become an unreviewed posting instruction.
12. `doThisNow.2.body`: Update the per-entity checklist so bank reconciliation, transaction review, and final approval have their own evidence and responsible person.
13. `doThisNow.2.body`: Mark steps blocked by a missing source document instead of leaving them silently incomplete.
14. `doThisNow.2.body`: A received bank statement should unlock review, not automatically mark reconciliation as done.
15. `doThisNow.3.body`: Assign those items to the person who can inspect the supporting records.
16. `doThisNow.3.body`: Do not mix them into the general request for bank statements because the client may need a different colleague to answer.
17. `doThisNow.3.body`: This creates a useful discussion list without assuming an old balance is necessarily collectible or even correct.
18. `agentTasks.0.whoItSuits`: An agent can compare the expected document register with available uploads and draft a consolidated request organized by entity and period.
19. `agentTasks.0.whoItSuits`: Firms with consistent folder permissions and account labels can use this without moving confidential files into a general inbox.
20. `agentTasks.0.whoItSuits`: Unreadable or ambiguous files should remain flagged.
21. `agentTasks.1.whoItSuits`: It should not invent a business purpose or select a chart of accounts category simply because a merchant name resembles a previous transaction.
22. `agentTasks.2.whoItSuits`: An agent can update administrative readiness from document and review records, then surface blocked steps to the assigned bookkeeper.
23. `agentTasks.2.whoItSuits`: Completion of a reconciliation or the month-end close requires the recorded reviewer approval.
24. `agentTasks.2.whoItSuits`: A file arriving in the portal should only update the corresponding document status.
25. `agentTasks.3.todayItLooksLike`: The aging report alone does not show which balance needs correction and which needs client attention.
26. `agentTasks.3.whoItSuits`: It can highlight a stale unresolved item without deciding to write it off or initiating collection.
27. `agentTasks.3.whoItSuits`: The reviewer determines whether the issue is accounting, documentation, or a customer dispute.
28. `agentTasks.4.whoItSuits`: An agent can draft an entity-specific request from the bookkeeper’s approved year-end checklist and distinguish documents already held from those still needed.
29. `agentTasks.4.whoItSuits`: The responsible professional confirms the request contents and any accounting or tax implications.
30. `faq.0.a`: No.
31. `faq.0.a`: Receipt confirms that a document is available; reconciliation requires the bookkeeper’s work and review.
32. `faq.0.a`: Record document availability separately from reconciliation status.
33. `faq.0.a`: The close checklist should identify the reviewer and supporting evidence before that accounting step is marked complete, even when the statement arrived through an automated collection process.
34. `faq.1.a`: Ask for facts the client can provide, such as the business purpose and the associated receipt.
35. `faq.1.a`: Avoid presenting unexplained account codes as a multiple-choice accounting exercise.
36. `faq.1.a`: Link each answer to its transaction so the bookkeeper can assess it in context and choose the appropriate treatment using the firm’s normal review process.
37. `faq.2.a`: Label every expected document with its entity, account, and period, then check those fields when a file is received.
38. `faq.2.a`: A shared client contact can receive an organized request, but the underlying records should preserve entity boundaries.
39. `faq.2.a`: Ambiguous uploads belong in a review queue until someone confirms where they should be filed.
40. `faq.3.a`: Not automatically.
41. `faq.3.a`: An apparent overdue amount may involve an unapplied payment, disputed invoice, or pending adjustment.
42. `faq.3.a`: Have the bookkeeper investigate the exception and establish the correct balance first.
43. `faq.3.a`: If client contact is appropriate, the authorized person can approve the purpose and wording based on that reviewed record.

After boundary sentence inventory:

1. `nowAnswer`: Pair it with a close checklist that distinguishes received files from reviewed evidence.
2. `doThisNow.0.body`: Compare the register with actual files before sending a request.
3. `doThisNow.0.body`: A statement for a neighboring period should remain a gap, even if the filename looks plausible.
4. `doThisNow.0.body`: Give the assigned bookkeeper a place to mark an unusual account as intentionally excluded so it does not generate repeated requests.
5. `doThisNow.1.body`: Ask for the business purpose or source document associated with a recognizable transaction, rather than asking the client to choose an accounting category.
6. `doThisNow.1.body`: Include enough context for identification while keeping sensitive account information in the approved portal.
7. `doThisNow.2.body`: Update the per-entity checklist so bank reconciliation, transaction review, and final approval have their own evidence and responsible person.
8. `doThisNow.2.body`: Mark steps blocked by a missing source document instead of leaving them silently incomplete.
9. `doThisNow.2.body`: Assign those items to the person who can inspect the supporting records.
10. `doThisNow.2.body`: Do not mix them into the general request for bank statements because the client may need a different colleague to answer.
11. `doThisNow.2.body`: This creates a useful discussion list without assuming an old balance is necessarily collectible or even correct.
12. `agentTasks.0.whoItSuits`: An agent can compare the expected document register with available uploads and draft a consolidated request organized by entity and period.
13. `agentTasks.0.whoItSuits`: Firms with consistent folder permissions and account labels can use this without moving confidential files into a general inbox.
14. `agentTasks.0.whoItSuits`: Unreadable or ambiguous files should remain flagged.
15. `agentTasks.1.whoItSuits`: It should not invent a business purpose or select a chart of accounts category simply because a merchant name resembles a previous transaction.
16. `agentTasks.2.whoItSuits`: An agent can update administrative readiness from document and review records, then surface blocked steps to the assigned bookkeeper.
17. `agentTasks.3.todayItLooksLike`: The aging report alone does not show which balance needs correction and which needs client attention.
18. `agentTasks.3.whoItSuits`: It can highlight a stale unresolved item without deciding to write it off or initiating collection.
19. `agentTasks.3.whoItSuits`: The reviewer determines whether the issue is accounting, documentation, or a customer dispute.
20. `agentTasks.4.whoItSuits`: An agent can draft an entity-specific request from the bookkeeper’s approved year-end checklist and distinguish documents already held from those still needed.
21. `agentTasks.4.whoItSuits`: The responsible professional confirms the request contents and any accounting or tax implications.
22. `faq.0.a`: Receipt confirms that a document is available; reconciliation requires the bookkeeper’s work and review.
23. `faq.1.a`: Ask for facts the client can provide, such as the business purpose and the associated receipt.
24. `faq.1.a`: Link each answer to its transaction so the bookkeeper can assess it in context and choose the appropriate treatment using the firm’s normal review process.
25. `faq.2.a`: Label every expected document with its entity, account, and period, then check those fields when a file is received.
26. `faq.2.a`: A shared client contact can receive an organized request, but the underlying records should preserve entity boundaries.
27. `faq.3.a`: An apparent overdue amount may involve an unapplied payment, disputed invoice, or pending adjustment.
28. `faq.3.a`: If client contact is appropriate, the authorized person can approve the purpose and wording based on that reviewed record.
29. `faq.4.a`: Ambiguous uploads belong in a review queue until someone confirms where they should be filed.
30. `systemsContext`: Common bookkeeping systems include these names; an agent is designed around your existing collection setup after checking the permissions and records available, rather than assuming a ready-made connection.
31. `scope`: The bookkeeper decides account classification and accounting treatment, reviews reconciliation evidence, and authorizes the close; receiving a file changes document availability alone.
32. `scope`: Receivables exceptions require investigation of the correct balance before an authorized person approves collection contact, and an agent cannot decide a write-off.

## hvac-contractors

Retained distinct boundaries:

1. Diagnosis and urgency remain technical decisions.
2. Repair findings and instructions require technical approval.
3. Only current approved quote and pricing used, revisions pause old messages.
4. Accepted quote leaves sales sequence.
5. Included tune-up differs from renewal, actual terms and equipment govern.
6. Uncertain coverage or equipment needs office review.
7. Contact preferences retained.
8. Requested windows and available slots are not dispatch confirmation.
9. Readiness depends on access, assignment and parts.
10. Dispatch controls rearrangements and arrival promises.
11. Compatibility and changed work require authorized review.
12. Warranty needs recorded determination, not availability or equipment age.
13. Callbacks interrupt sales and follow escalation route.
14. Updates cannot promise unapproved install dates.

Added boundary: named software is context, with feasible access checked for the reader’s existing setup.
Added evidence boundaries: results belong to Marwan’s business, not an HVAC customer; another business is not guaranteed the stated reply rate.

Before boundary sentence inventory:

1. `intro.1`: Technicians and office leads keep control of diagnosis, repair recommendations, warranty determinations, and commitments about when work can happen.
2. `doThisNow.0.body`: Record the approved quote version, customer decision, and any unresolved technical question.
3. `doThisNow.0.body`: Separate an estimate awaiting office completion from a quote actually sent to the customer.
4. `doThisNow.0.body`: If equipment age or condition matters to the conversation, preserve the technician’s recorded findings rather than adding an office interpretation.
5. `doThisNow.0.body`: Close obsolete quotes when a replacement version is approved so the customer is not asked to accept the wrong work.
6. `doThisNow.1.body`: Distinguish renewal from an unused seasonal tune-up already included in the current agreement.
7. `doThisNow.1.body`: Record the approved renewal offer and any customer preference about contact.
8. `doThisNow.1.body`: Use a saved view to review agreements with unclear dates or equipment that has been replaced.
9. `doThisNow.1.body`: This prevents the office from selling a renewal using an outdated equipment record or asking a customer to pay again for a visit that remains available under existing terms.
10. `doThisNow.2.body`: Mark a customer’s requested time separately from the window your office has confirmed.
11. `doThisNow.2.body`: Write down who may change that window and how the customer is informed.
12. `doThisNow.2.body`: Link any equipment-specific preparation instructions that the technician has approved.
13. `doThisNow.2.body`: An office colleague should be able to identify why a job cannot yet be confirmed without opening every note or assuming that an empty calendar slot means the job is ready.
14. `doThisNow.3.body`: Capture the customer’s description without converting it into a diagnosis.
15. `doThisNow.3.body`: Define the office’s escalation route for urgent or unclear reports using the technical lead’s instructions.
16. `doThisNow.3.body`: Keep callbacks out of ordinary quote follow-up so an unhappy customer does not receive a sales reminder while waiting for help.
17. `doThisNow.3.body`: Review the queue with the dispatch lead and assign a named person to decide the next technical or scheduling action.
18. `agentTasks.0.whoItSuits`: An agent can prepare a quote-specific message using the latest approved version and pause when the customer raises a technical issue.
19. `agentTasks.0.whoItSuits`: An accepted quote should move to the office’s scheduling process rather than remain in a sales sequence.
20. `agentTasks.1.whoItSuits`: An agent can prepare separate messages for an available seasonal tune-up and a renewal offer using approved agreement records.
21. `agentTasks.1.whoItSuits`: The office reviews uncertain coverage or missing equipment details.
22. `agentTasks.1.whoItSuits`: Renewal language should describe the actual agreement instead of implying that every customer has the same included services.
23. `agentTasks.2.whoItSuits`: An agent can prepare confirmations from the current dispatch board and hold messages when required readiness fields are unresolved.
24. `agentTasks.2.whoItSuits`: The dispatch lead decides how to rearrange jobs and approves promises about arrival windows.
25. `agentTasks.3.whoItSuits`: It can draft a factual update without promising an install date or warranty coverage.
26. `agentTasks.3.whoItSuits`: A technician or authorized office reviewer must resolve compatibility, coverage, and any changed work requirement.
27. `agentTasks.4.whoItSuits`: Technical urgency and diagnosis remain human responsibilities.
28. `agentTasks.4.whoItSuits`: Reports matching the contractor’s escalation instructions should interrupt routine communication rather than wait behind ordinary quote messages.
29. `faq.0.a`: Hold further messages about the earlier quote until the revised recommendation and pricing are approved.
30. `faq.0.a`: Keep both versions connected to the job ticket, with the current one clearly identified.
31. `faq.0.a`: The office should explain the change using the technician’s approved information before requesting a customer decision on the revised work.
32. `faq.1.a`: A renewal concerns the next agreement term; a tune-up reminder may concern work already included in the current term.
33. `faq.1.a`: Check the coverage record before choosing the message.
34. `faq.1.a`: Combining them without that distinction can confuse customers about what they have purchased and what still requires a new agreement.
35. `faq.2.a`: Only an authorized, recorded coverage determination should support that statement.
36. `faq.2.a`: Supplier availability and warranty eligibility are different facts.
37. `faq.2.a`: An agent can relay approved status and flag missing information, but it should not infer coverage from equipment age, a part order, or the fact that a previous visit involved warranty work.
38. `faq.3.a`: Pause the quote reminder while the callback is being assessed.
39. `faq.3.a`: The office should first connect the reported issue with the original visit and assign the appropriate reviewer.
40. `faq.3.a`: Once the contractor has established the next action, communication can reflect that decision instead of asking the customer to approve unrelated work during an unresolved service problem.

After boundary sentence inventory:

1. `doThisNow.0.body`: Record the approved quote version, customer decision, and any unresolved technical question.
2. `doThisNow.0.body`: Separate an estimate awaiting office completion from a quote actually sent to the customer.
3. `doThisNow.0.body`: Close obsolete quotes when a replacement version is approved so the customer is not asked to accept the wrong work.
4. `doThisNow.1.body`: Distinguish renewal from an unused seasonal tune-up already included in the current agreement.
5. `doThisNow.1.body`: Record the approved renewal offer and any customer preference about contact.
6. `doThisNow.1.body`: Use a saved view to review agreements with unclear dates or equipment that has been replaced.
7. `doThisNow.1.body`: This prevents the office from selling a renewal using an outdated equipment record or asking a customer to pay again for a visit that remains available under existing terms.
8. `doThisNow.2.body`: Mark a customer’s requested time separately from the window your office has confirmed.
9. `doThisNow.2.body`: Write down who may change that window and how the customer is informed.
10. `doThisNow.2.body`: Link any equipment-specific preparation instructions that the technician has approved.
11. `doThisNow.2.body`: An office colleague should be able to identify why a job cannot yet be confirmed without opening every note or assuming that an empty calendar slot means the job is ready.
12. `doThisNow.3.body`: Define the office’s escalation route for urgent or unclear reports using the technical lead’s instructions.
13. `doThisNow.3.body`: Keep callbacks out of ordinary quote follow-up so an unhappy customer does not receive a sales reminder while waiting for help.
14. `doThisNow.4.body`: Review the queue with the dispatch lead and assign a named person to decide the next technical or scheduling action.
15. `agentTasks.0.whoItSuits`: An agent can prepare a quote-specific message using the latest approved version and pause when the customer raises a technical issue.
16. `agentTasks.0.whoItSuits`: An accepted quote should move to the office’s scheduling process rather than remain in a sales sequence.
17. `agentTasks.1.whoItSuits`: An agent can prepare separate messages for an available seasonal tune-up and a renewal offer using approved agreement records.
18. `agentTasks.2.whoItSuits`: An agent can prepare confirmations from the current dispatch board and hold messages when required readiness fields are unresolved.
19. `agentTasks.3.whoItSuits`: A technician or authorized office reviewer must resolve compatibility, coverage, and any changed work requirement.
20. `faq.0.a`: Hold further messages about the earlier quote until the revised recommendation and pricing are approved.
21. `faq.0.a`: Keep both versions connected to the job ticket, with the current one clearly identified.
22. `faq.0.a`: The office should explain the change using the technician’s approved information before requesting a customer decision on the revised work.
23. `faq.1.a`: A renewal concerns the next agreement term; a tune-up reminder may concern work already included in the current term.
24. `faq.2.a`: Only an authorized, recorded coverage determination should support that statement.
25. `faq.2.a`: Supplier availability and warranty eligibility are different facts.
26. `faq.2.a`: An agent can relay approved status and flag missing information, but it should not infer coverage from equipment age, a part order, or the fact that a previous visit involved warranty work.
27. `faq.3.a`: Hold the sales reminder and connect the callback to its original visit for technical review.
28. `directAnswer`: HVAC contractors can organize quote follow-up around the current job ticket and the latest approved repair estimate.
29. `directAnswer`: An agent prepares customer messages from quote status and separates maintenance already included in an agreement from a renewal offer.
30. `systemsContext`: HVAC offices commonly use this dispatch and service software; your own working setup determines the custom agent’s design, and each proposed action needs an access check before it is built.
31. `scope`: Technicians retain diagnosis, urgency assessment, repair recommendations, and parts compatibility decisions; authorized office or technical reviewers determine warranty coverage, while dispatch approves job changes and arrival commitments.
32. `scope`: Customer callbacks interrupt sales reminders and follow the technical lead’s escalation instructions until a reviewer establishes the next action.
33. `evidenceContext`: The example below comes from Marwan’s prospecting at Treehouse Music, not HVAC work or a contractor’s results.
34. `firstPartyResult`: These are the numbers I got for my own business.
35. `firstPartyResult`: A specific reply rate is not guaranteed for yours.

## med-spas

Retained distinct boundaries:

1. All clinical matters route to licensed provider.
2. No reaction assessment, reassurance, diagnosis or treatment advice.
3. Provider defines urgent clinical pathway.
4. Aftercare content, assignment and sending timing are provider-approved.
5. Preserve symptom descriptions without interpretation.
6. Booking requires provider instructions, not package balance.
7. Clinical timing changes and new concerns pause booking for provider.
8. Respect pauses and deferral preferences.
9. Use actual reconciled deposit records and approved terms.
10. Payment credentials excluded from notes.
11. Unclear or disputed payments go to staff, no automatic cancellation.
12. Waivers, refunds and exceptions need authorized staff.
13. Reconcile conflicting membership records before messages.
14. Silence cannot authorize commitment or override cancellation.

Added boundary: named software is context, with feasible access checked for the reader’s existing setup.

Before boundary sentence inventory:

1. `intro.0`: Those gaps call for different workflows with clear boundaries around the provider’s treatment decisions.
2. `intro.1`: Begin with the booking policy and the provider-approved instructions associated with the appointment.
3. `intro.1`: An agent can check deposit status, prepare confirmations, and help clients arrange an authorized next session.
4. `intro.1`: Clinical questions, contraindications, and anything medical must route to a licensed provider, never to an agent.
5. `nowAnswer`: Reconcile deposit status with upcoming appointments and record whether package clients have an authorized next-session booking step.
6. `nowAnswer`: Use your existing scheduling system and approved aftercare templates to make those administrative gaps visible.
7. `tasksAnswer`: A custom agent can prepare deposit reminders, send approved aftercare check-ins, and coordinate rebooking within provider-authorized instructions.
8. `tasksAnswer`: It can also organize membership renewals and consultation-to-booking administration without making treatment recommendations.
9. `faqAnswer`: Med spa automation should handle booking and account administration while licensed providers handle care.
10. `doThisNow.0.body`: Review upcoming appointments in the scheduler and compare each deposit status with the applicable booking policy.
11. `doThisNow.0.body`: Record paid, pending, waived by an authorized person, or requiring reconciliation.
12. `doThisNow.0.body`: Use the actual payment record rather than an assumption based on a calendar label.
13. `doThisNow.0.body`: Save approved wording that explains the amount due through the secure payment process and what the client must do next.
14. `doThisNow.0.body`: Do not include payment credentials in appointment notes, and send disputed or unclear payments to the front desk before another request goes out.
15. `doThisNow.1.body`: Ask the licensed provider to identify which approved aftercare material belongs to each completed appointment and when administrative check-ins may be sent.
16. `doThisNow.1.body`: Store the approved version in the system staff already use, with a clear route for replies that mention symptoms or ask about care.
17. `doThisNow.1.body`: The front desk should not select instructions by guessing from an abbreviated appointment name.
18. `doThisNow.1.body`: Review a sample message to confirm that it invites the client to contact the clinical team through the appropriate channel without suggesting that an automated reply can assess their condition.
19. `doThisNow.2.body`: Add an administrative handoff to the checkout process indicating whether the provider has authorized another session and what scheduling instructions apply.
20. `doThisNow.2.body`: Distinguish ready to arrange, awaiting provider review, and client asked to pause.
21. `doThisNow.2.body`: Keep the package balance separate from permission to book a treatment: an unused session does not establish clinical suitability.
22. `doThisNow.2.body`: Give the front desk the approved scheduling instruction and contact preference so it can help arrange the next visit without interpreting the treatment plan or inventing a suitable interval.
23. `doThisNow.3.body`: Identify the approved terms the front desk should use when explaining renewal.
24. `doThisNow.3.body`: Separate an administrative benefit question from a question about whether a treatment is appropriate.
25. `doThisNow.3.body`: Create a short review list for accounts with conflicting status, and resolve those before preparing any renewal communication.
26. `doThisNow.3.body`: Clients should receive information that reflects their actual membership record, especially when they have already asked to change or end the arrangement.
27. `agentTasks.0.whoItSuits`: An agent can check the current deposit record before preparing the approved booking message and hold disputed payments for staff.
28. `agentTasks.0.whoItSuits`: Fee waivers, refunds, and exceptions require the authorized staff member’s decision.
29. `agentTasks.1.whoItSuits`: An agent can deliver the assigned material and route responses to the licensed provider whenever they involve symptoms, contraindications, or other medical questions.
30. `agentTasks.1.whoItSuits`: It must not evaluate a reaction, reassure a client about symptoms, or generate treatment advice.
31. `agentTasks.1.whoItSuits`: The provider defines the clinical response pathway, including urgent concerns.
32. `agentTasks.2.todayItLooksLike`: A balance alone does not show whether the provider wants a review first.
33. `agentTasks.2.whoItSuits`: An agent can offer booking assistance when the record contains provider-approved scheduling instructions and no unresolved hold.
34. `agentTasks.2.whoItSuits`: Any request to change timing for clinical reasons returns to the provider before options are offered.
35. `agentTasks.3.whoItSuits`: An agent can prepare a renewal message from the approved terms after reconciling the administrative status.
36. `agentTasks.3.whoItSuits`: Conflicting records should create a front-desk task.
37. `agentTasks.3.whoItSuits`: It should not interpret silence as permission for a new commitment or override a cancellation request because an older account field still says active.
38. `agentTasks.4.todayItLooksLike`: The front desk has to distinguish that situation from a consultation awaiting clinical review.
39. `agentTasks.4.whoItSuits`: An agent can prepare booking assistance for clients whose provider has authorized the next administrative step.
40. `agentTasks.4.whoItSuits`: It can answer approved scheduling or deposit questions and record a decision to defer.
41. `agentTasks.4.whoItSuits`: Questions about expected results, suitability, or a touch-up belong with the licensed provider, even when asked during a booking conversation.
42. `faq.0.a`: No.
43. `faq.0.a`: A statement about a reaction is clinical guidance and must come from a licensed provider.
44. `faq.0.a`: The agent should route the client’s message through the provider-defined response process, preserving the description rather than interpreting it.
45. `faq.0.a`: Approved administrative acknowledgment can explain how the clinical team will receive the concern without offering reassurance or a diagnosis.
46. `faq.1.a`: No.
47. `faq.1.a`: Package balance is an account fact, while timing depends on the provider’s instructions.
48. `faq.1.a`: The front desk can offer scheduling help only within the authorized booking parameters.
49. `faq.1.a`: If the client asks to change the interval or reports something that could affect care, pause rebooking and route the question to the licensed provider.
50. `faq.2.a`: Apply the med spa’s approved booking policy through its authorized staff and systems.
51. `faq.2.a`: Before taking action, reconcile recent payments, recorded waivers, and any dispute.
52. `faq.2.a`: An agent can identify an incomplete requirement and prepare a reminder, but unclear payment status should not become an automatic cancellation that the front desk then has to unwind.
53. `faq.3.a`: Treatment recommendations belong to the licensed provider.
54. `faq.3.a`: An administrative follow-up can help the client book an already authorized next step or request another clinical conversation.
55. `faq.3.a`: It should not select a package, suggest a touch-up, or change the treatment plan to encourage a booking.
56. `faq.3.a`: Record a client’s choice to wait so outreach respects that preference.

After boundary sentence inventory:

1. `intro.0`: At a med spa front desk, a reserved appointment, a paid deposit, and permission to rebook are different records.
2. `intro.1`: Begin with the booking policy and the provider-approved instructions associated with the appointment.
3. `intro.1`: An agent can check deposit status, prepare confirmations, and help clients arrange an authorized next session.
4. `nowAnswer`: Reconcile deposit status with upcoming appointments and record whether package clients have an authorized next-session booking step.
5. `nowAnswer`: Use your existing scheduling system and approved aftercare templates to make those administrative gaps visible.
6. `tasksAnswer`: A custom agent can prepare deposit reminders, send approved aftercare check-ins, and coordinate rebooking within provider-authorized instructions.
7. `tasksAnswer`: It can also organize membership renewals and consultation-to-booking administration without making treatment recommendations.
8. `doThisNow.0.body`: Review upcoming appointments in the scheduler and compare each deposit status with the applicable booking policy.
9. `doThisNow.0.body`: Record paid, pending, waived by an authorized person, or requiring reconciliation.
10. `doThisNow.0.body`: Use the actual payment record rather than an assumption based on a calendar label.
11. `doThisNow.0.body`: Save approved wording that explains the amount due through the secure payment process and what the client must do next.
12. `doThisNow.0.body`: Do not include payment credentials in appointment notes, and send disputed or unclear payments to the front desk before another request goes out.
13. `doThisNow.1.body`: Ask the licensed provider to identify which approved aftercare material belongs to each completed appointment and when administrative check-ins may be sent.
14. `doThisNow.1.body`: Store the approved version in the system staff already use, with a clear route for replies that mention symptoms or ask about care.
15. `doThisNow.1.body`: The front desk should not select instructions by guessing from an abbreviated appointment name.
16. `doThisNow.2.body`: Add an administrative handoff to the checkout process indicating whether the provider has authorized another session and what scheduling instructions apply.
17. `doThisNow.2.body`: Distinguish ready to arrange, awaiting provider review, and client asked to pause.
18. `doThisNow.2.body`: Keep the package balance separate from permission to book a treatment: an unused session does not establish clinical suitability.
19. `doThisNow.2.body`: Give the front desk the approved scheduling instruction and contact preference so it can help arrange the next visit without interpreting the treatment plan or inventing a suitable interval.
20. `doThisNow.3.body`: Identify the approved terms the front desk should use when explaining renewal.
21. `doThisNow.3.body`: Create a short review list for accounts with conflicting status, and resolve those before preparing any renewal communication.
22. `doThisNow.3.body`: Clients should receive information that reflects their actual membership record, especially when they have already asked to change or end the arrangement.
23. `agentTasks.0.whoItSuits`: An agent can check the current deposit record before preparing the approved booking message and hold disputed payments for staff.
24. `agentTasks.0.whoItSuits`: Fee waivers, refunds, and exceptions require the authorized staff member’s decision.
25. `agentTasks.1.whoItSuits`: An agent can deliver the assigned aftercare material.
26. `agentTasks.1.whoItSuits`: The provider defines the clinical response pathway, including urgent concerns.
27. `agentTasks.2.whoItSuits`: An agent can offer booking assistance when the record contains provider-approved scheduling instructions and no unresolved hold.
28. `agentTasks.3.whoItSuits`: An agent can prepare a renewal message from the approved terms after reconciling the administrative status.
29. `agentTasks.3.whoItSuits`: It should not interpret silence as permission for a new commitment or override a cancellation request because an older account field still says active.
30. `agentTasks.4.todayItLooksLike`: The front desk has to distinguish that situation from a consultation awaiting clinical review.
31. `agentTasks.4.whoItSuits`: An agent can prepare booking assistance for clients whose provider has authorized the next administrative step.
32. `agentTasks.4.whoItSuits`: It can answer approved scheduling or deposit questions and record a decision to defer.
33. `agentTasks.4.whoItSuits`: Questions about expected results, suitability, or a touch-up belong with the licensed provider, even when asked during a booking conversation.
34. `faq.0.a`: A licensed provider assesses reactions; the agent forwards the unchanged description through the clinical response pathway.
35. `faq.1.a`: Unused sessions do not authorize treatment timing; a changed interval or new care concern pauses scheduling for the licensed provider.
36. `faq.2.a`: Apply the med spa’s approved booking policy through its authorized staff and systems.
37. `faq.2.a`: Before taking action, reconcile recent payments, recorded waivers, and any dispute.
38. `faq.3.a`: A consultation follow-up can arrange an authorized appointment or another provider conversation, while treatment selection stays with the licensed provider and a client’s decision to wait is recorded.
39. `faq.4.a`: An agent can identify an incomplete requirement and prepare a reminder, but unclear payment status should not become an automatic cancellation that the front desk then has to unwind.
40. `directAnswer`: Med spas can organize attendance and package rebooking by reconciling appointment deposits and recording the provider-authorized next booking step.
41. `directAnswer`: An agent prepares confirmations, delivers assigned aftercare material, and arranges appointments from those records.
42. `systemsContext`: These platforms are common in med spa operations; the starting point for a bespoke agent is the scheduler and account process you already have, subject to checking how that setup permits access.
43. `scope`: All medical questions, including symptoms, contraindications, expected results, suitability, touch-ups, and treatment choices, go to a licensed provider through the provider-defined pathway for routine and urgent concerns; the agent never assesses reactions, reassures about symptoms, diagnoses, or recommends care.
44. `scope`: Only provider-authorized booking parameters permit another treatment appointment, regardless of unused package balance; clinical changes to timing or new care concerns pause rebooking for provider review.
45. `ctaBody`: We can work through its administrative steps and the point where a licensed provider must take over.

## real-estate-brokerages

Retained distinct boundaries:

1. Requested, confirmed and completed visits differ.
2. Completion requires evidence, cancellations and duplicates cannot inflate activity.
3. Access follows authorized windows, occupancy and notice.
4. Restricted lockbox details only to authorized recipients.
5. Access exceptions require coordinator review.
6. Feedback requests stop on reply, cancellation or decline.
7. Missing feedback stays missing, ambiguous comments preserved.
8. Facts and quoted comments remain separate from interpretation.
9. Listing agent owns advice, pricing, offer assessment and seller approval.
10. Offer deadlines require approved record, no invented deadline or acceptance.
11. Deadline changes hold pending notices and require approved corrections.
12. Attendee contact respects permissions, representation and opt-out.
13. Unverified property questions route to listing agent.

Added boundary: named software is context, with feasible access checked for the reader’s existing setup.

Before boundary sentence inventory:

1. `intro.0`: A requested showing is not a confirmed visit, and a completed visit does not automatically produce useful feedback.
2. `intro.1`: The workflow begins with access arrangements and ends with a seller update that separates observed activity from advice.
3. `intro.1`: The listing agent remains responsible for interpreting interest, discussing a price adjustment, and advising the seller about offers.
4. `faqAnswer`: Listing coordination depends on accurate visit status and controlled access information.
5. `doThisNow.0.body`: Check the approved showing windows, required notice, occupancy restrictions, and person who confirms access.
6. `doThisNow.0.body`: Put the current instructions in the listing’s designated scheduling record and remove obsolete notes from reusable messages.
7. `doThisNow.0.body`: Keep lockbox details restricted to the authorized access channel.
8. `doThisNow.0.body`: Resolve those gaps before the next busy showing period so a request cannot be mistaken for permission to enter.
9. `doThisNow.1.body`: Decide who confirms completion and what evidence they use.
10. `doThisNow.1.body`: A calendar event passing should not be enough to classify a visit as completed, especially when access failed or plans changed.
11. `doThisNow.1.body`: Review recent activity for duplicate bookings that refer to a rescheduled showing, since those duplicates can distort both the follow-up list and the seller’s impression of interest.
12. `doThisNow.2.body`: Give the buyer’s agent a simple way to decline or say feedback is unavailable.
13. `doThisNow.2.body`: Preserve the distinction between a quoted observation and the coordinator’s summary.
14. `doThisNow.2.body`: Silence after a visit should remain missing feedback, not be translated into a negative opinion about the listing.
15. `doThisNow.3.body`: Mark canceled appointments and unavailable feedback accurately rather than inflating activity with requests that never became visits.
16. `doThisNow.3.body`: Reserve a separate space for the listing agent’s interpretation, including any discussion of comparable properties or a price adjustment.
17. `doThisNow.3.body`: The seller should be able to distinguish what happened from what the agent recommends doing next.
18. `agentTasks.0.whoItSuits`: An agent can propose available windows from the listing’s approved instructions and record confirmation in the scheduling system.
19. `agentTasks.0.whoItSuits`: Exceptions involving occupants or special access conditions should reach the listing coordinator before any confirmation is sent.
20. `agentTasks.1.whoItSuits`: An agent can request feedback against confirmed completed visits and attach replies to those visits.
21. `agentTasks.1.whoItSuits`: Brokerages benefit when the workflow stops requesting feedback after a response or a reported cancellation.
22. `agentTasks.1.whoItSuits`: Ambiguous comments can be preserved verbatim for the listing agent instead of being converted into a confident sentiment label.
23. `agentTasks.2.whoItSuits`: An agent can produce a factual draft with completed activity and clearly identified feedback gaps.
24. `agentTasks.2.whoItSuits`: The listing agent adds interpretation and approves the seller update.
25. `agentTasks.2.whoItSuits`: A price adjustment recommendation should come from the agent’s analysis, not from an automatic rule that treats unanswered feedback as weak demand.
26. `agentTasks.3.whoItSuits`: An agent can prepare notices using the listing agent’s approved deadline record and invalidate pending messages when that record changes.
27. `agentTasks.3.whoItSuits`: It should never invent a deadline, assess an offer’s merits, or tell someone that an unverified submission has been accepted.
28. `agentTasks.4.whoItSuits`: The brokerage should define which contact is authorized and how represented visitors are handled.
29. `agentTasks.4.whoItSuits`: Stop further outreach when someone declines, and route property questions that need verification to the listing agent.
30. `faq.0.a`: Only through the brokerage’s approved access process for authorized recipients.
31. `faq.0.a`: Keep general scheduling messages separate from restricted entry instructions.
32. `faq.0.a`: Before enabling automated confirmations, establish which record governs access and how changed authorization is recognized.
33. `faq.0.a`: A confirmed time alone should not cause sensitive entry information to be distributed broadly.
34. `faq.1.a`: Label it as feedback not yet received.
35. `faq.1.a`: Report the completed showing independently so the seller sees the activity without an invented interpretation.
36. `faq.1.a`: The listing agent can decide whether another request is worthwhile and explain the limits of the available comments when discussing the property’s reception.
37. `faq.2.a`: Pending reminders should be held until they reference the revised, approved deadline.
38. `faq.2.a`: The coordinator should identify recipients of the earlier notice and prepare a correction for the listing agent to approve.
39. `faq.2.a`: Preserve the change history so the team can establish which instructions were communicated and avoid sending contradictory notices.
40. `faq.3.a`: No.
41. `faq.3.a`: Visitor comments are inputs for the listing agent to evaluate alongside the broader listing context and relevant comparables.
42. `faq.3.a`: The agent can group observations and preserve the original notes, but a recommendation to the seller requires the listing agent’s judgment.
43. `faq.3.a`: A handful of similar comments does not explain the whole market response.

After boundary sentence inventory:

1. `intro.0`: A requested showing is not a confirmed visit, and a completed visit does not automatically produce useful feedback.
2. `intro.1`: The workflow begins with access arrangements and ends with a seller update that separates observed activity from advice.
3. `faqAnswer`: Listing coordination depends on accurate visit status and controlled access information.
4. `doThisNow.0.body`: Check the approved showing windows, required notice, occupancy restrictions, and person who confirms access.
5. `doThisNow.0.body`: Put the current instructions in the listing’s designated scheduling record and remove obsolete notes from reusable messages.
6. `doThisNow.0.body`: Resolve those gaps before the next busy showing period so a request cannot be mistaken for permission to enter.
7. `doThisNow.1.body`: Decide who confirms completion and what evidence they use.
8. `doThisNow.1.body`: A calendar event passing should not be enough to classify a visit as completed, especially when access failed or plans changed.
9. `doThisNow.1.body`: Review recent activity for duplicate bookings that refer to a rescheduled showing, since those duplicates can distort both the follow-up list and the seller’s impression of interest.
10. `doThisNow.2.body`: Give the buyer’s agent a simple way to decline or say feedback is unavailable.
11. `doThisNow.2.body`: Preserve the distinction between a quoted observation and the coordinator’s summary.
12. `doThisNow.3.body`: Mark canceled appointments and unavailable feedback accurately rather than inflating activity with requests that never became visits.
13. `agentTasks.0.whoItSuits`: An agent can propose available windows from the listing’s approved instructions and record confirmation in the scheduling system.
14. `agentTasks.0.whoItSuits`: Exceptions involving occupants or special access conditions should reach the listing coordinator before any confirmation is sent.
15. `agentTasks.1.whoItSuits`: An agent can request feedback against confirmed completed visits and attach replies to those visits.
16. `agentTasks.1.whoItSuits`: Brokerages benefit when the workflow stops requesting feedback after a response or a reported cancellation.
17. `agentTasks.1.whoItSuits`: Ambiguous comments can be preserved verbatim for the listing agent instead of being converted into a confident sentiment label.
18. `agentTasks.2.whoItSuits`: An agent can produce a factual draft with completed activity and clearly identified feedback gaps.
19. `agentTasks.3.whoItSuits`: An agent can prepare notices using the listing agent’s approved deadline record and invalidate pending messages when that record changes.
20. `agentTasks.3.whoItSuits`: It should never invent a deadline, assess an offer’s merits, or tell someone that an unverified submission has been accepted.
21. `agentTasks.4.whoItSuits`: The brokerage should define which contact is authorized and how represented visitors are handled.
22. `agentTasks.4.whoItSuits`: Stop further outreach when someone declines, and route property questions that need verification to the listing agent.
23. `faq.0.a`: Lockbox details require recipient authorization through the brokerage’s access process, with a current record showing who can receive them.
24. `faq.1.a`: Label it as feedback not yet received.
25. `faq.1.a`: The listing agent can decide whether another request is worthwhile and explain the limits of the available comments when discussing the property’s reception.
26. `faq.2.a`: Pending reminders should be held until they reference the revised, approved deadline.
27. `faq.2.a`: The coordinator should identify recipients of the earlier notice and prepare a correction for the listing agent to approve.
28. `faq.2.a`: Preserve the change history so the team can establish which instructions were communicated and avoid sending contradictory notices.
29. `faq.3.a`: Visitor comments inform the listing agent’s analysis of the property and comparables; they do not authorize an automatic price recommendation.
30. `directAnswer`: Real estate brokerages can coordinate showings through a current access calendar and a log that distinguishes requests, confirmations, and completed visits.
31. `directAnswer`: An agent gathers buyer-agent feedback and drafts a seller activity update for the listing agent to review.
32. `systemsContext`: Brokerages commonly operate with the following systems; the agent’s workflow is planned around the tools already serving your listings, with the available access verified during scoping.
33. `scope`: The listing agent interprets interest, evaluates offers and comparable properties, recommends price changes, and approves seller advice; missing feedback and visitor comments cannot become automatic market conclusions.
34. `scope`: Entry instructions, including lockbox details, stay within the brokerage-authorized access channel and recipient permissions, independently of a confirmed appointment time.

## commercial-cleaning

Retained distinct boundaries:

1. Roster assignment is not crew confirmation, gaps escalate.
2. Supervisor approves replacement with access and training checks.
3. Inspection tied to contract and occupancy restrictions.
4. Photos and visits respect site restrictions.
5. Inspection requires actual findings, not calendar entry.
6. Issue closure needs agreed evidence and required supervisor verification.
7. Repeated issues retain connected history.
8. Reorder conditions, units and stock need verification.
9. Supply requisition is not purchase, substitutions require authorization.
10. Duplicate supply requests recognized.
11. Safety concerns escalate immediately.
12. Managers control scope, service frequency, staffing and price.
13. No unapproved extra work or claim of inclusion.
14. Cleaning method remains human decision.

Added boundary: named software is context, with feasible access checked for the reader’s existing setup.

Before boundary sentence inventory:

1. `intro.1`: Supervisors still decide staffing changes, assess cleaning quality, and agree any change to the contracted service.
2. `nowAnswer`: Add explicit coverage confirmation to your roster and connect each site’s inspection checklist to its scope of work.
3. `faqAnswer`: Cleaning operations need evidence of attendance, inspection, and issue resolution at the site level.
4. `faqAnswer`: The answers below distinguish those records from assumptions based on a completed roster or a checked task.
5. `doThisNow.0.body`: Choose an upcoming night crew assignment and identify who confirms attendance, when that confirmation is due, and which supervisor handles a gap.
6. `doThisNow.0.body`: Do not treat a name placed on the schedule as that person’s acknowledgment.
7. `doThisNow.0.body`: Include required site access or training conditions beside the assignment.
8. `doThisNow.0.body`: When coverage changes, record the supervisor’s approved replacement and notify the people affected through the normal handoff channel so parallel versions of the roster do not circulate.
9. `doThisNow.1.body`: Take the current scope of work on a walkthrough and identify the areas and tasks that the quality inspection should assess.
10. `doThisNow.1.body`: Separate routine requirements from occasional work and requests that need separate approval.
11. `doThisNow.1.body`: Define which observations need a photograph or a supervisor visit, respecting the site’s restrictions.
12. `doThisNow.1.body`: A generic checklist that misses the client’s contracted priorities will produce reassuring completion marks without showing whether the promised service was delivered.
13. `doThisNow.2.body`: Record what would demonstrate resolution, rather than closing an item because someone said they would handle it.
14. `doThisNow.2.body`: If a client raises the same issue again, connect it to the existing record so the team can see the recurrence.
15. `doThisNow.3.body`: Set approved reorder conditions in the current supply worksheet, including who verifies stock and who authorizes a purchase.
16. `doThisNow.3.body`: Distinguish a low-stock observation from an approved supply requisition.
17. `doThisNow.3.body`: The immediate benefit is a reliable request with the right site and item, not an automatic order based on an unverified count.
18. `agentTasks.0.whoItSuits`: The supervisor selects replacements and verifies site requirements; the agent should not fill a vacancy with whoever merely appears available.
19. `agentTasks.1.whoItSuits`: An agent can propose inspection windows that fit the approved site routine and identify inspections awaiting completion.
20. `agentTasks.1.whoItSuits`: The inspector records the actual findings, and a calendar appointment alone never counts as evidence that quality was checked.
21. `agentTasks.2.whoItSuits`: An agent can combine reported shortages with the site’s approved reorder rules and prepare a supply requisition for authorization.
22. `agentTasks.2.whoItSuits`: It should retain uncertain counts for verification and recognize an existing open request.
23. `agentTasks.2.whoItSuits`: Product substitutions or purchases beyond the approved process belong with the supervisor or purchasing owner.
24. `agentTasks.3.whoItSuits`: Safety concerns follow the company’s immediate escalation procedure instead of waiting for a routine quality review.
25. `agentTasks.4.whoItSuits`: It can highlight areas for discussion without rewriting the contract.
26. `agentTasks.4.whoItSuits`: The responsible manager assesses staffing, service frequency, and price after reviewing the actual site conditions with the client.
27. `faq.0.a`: No.
28. `faq.0.a`: Scheduling an assignment and receiving confirmation are separate events.
29. `faq.0.a`: Keep the acknowledgment visible and define when an unconfirmed assignment reaches the site supervisor.
30. `faq.0.a`: A supervisor-approved replacement should update the same roster so the office and incoming crew do not rely on different coverage information.
31. `faq.1.a`: Use the resolution standard agreed for that type of issue.
32. `faq.1.a`: Some items may require supervisor verification or another inspection before closure.
33. `faq.1.a`: Preserve the crew’s completion note as evidence of work performed, then record any required verification separately.
34. `faq.1.a`: Repeated complaints should remain connected to the history of the affected area.
35. `faq.2.a`: Record the condition and identify the relevant scope boundary for the manager’s review.
36. `faq.2.a`: Do not silently assign additional recurring work to the night crew or describe it to the client as included.
37. `faq.2.a`: The manager can discuss a service change while the inspection continues to assess the duties already agreed.
38. `faq.3.a`: The manager should compare actual service needs with the existing agreement and confirm proposed changes with the client.
39. `faq.3.a`: An agent can prepare that evidence, but it cannot establish the required cleaning method or approve new contract terms.

After boundary sentence inventory:

1. `intro.0`: A full janitorial roster tells an operations manager little about whether the crew has confirmed or the site passed inspection.
2. `nowAnswer`: Add explicit coverage confirmation to your roster and connect each site’s inspection checklist to its scope of work.
3. `faqAnswer`: Cleaning operations need evidence of attendance, inspection, and issue resolution at the site level.
4. `faqAnswer`: The answers below distinguish those records from assumptions based on a completed roster or a checked task.
5. `doThisNow.0.body`: Choose an upcoming night crew assignment and identify who confirms attendance, when that confirmation is due, and which supervisor handles a gap.
6. `doThisNow.0.body`: Include required site access or training conditions beside the assignment.
7. `doThisNow.0.body`: When coverage changes, record the supervisor’s approved replacement and notify the people affected through the normal handoff channel so parallel versions of the roster do not circulate.
8. `doThisNow.1.body`: Take the current scope of work on a walkthrough and identify the areas and tasks that the quality inspection should assess.
9. `doThisNow.1.body`: Separate routine requirements from occasional work and requests that need separate approval.
10. `doThisNow.1.body`: Define which observations need a photograph or a supervisor visit, respecting the site’s restrictions.
11. `doThisNow.1.body`: A generic checklist that misses the client’s contracted priorities will produce reassuring completion marks without showing whether the promised service was delivered.
12. `doThisNow.2.body`: Record what would demonstrate resolution, rather than closing an item because someone said they would handle it.
13. `doThisNow.2.body`: If a client raises the same issue again, connect it to the existing record so the team can see the recurrence.
14. `doThisNow.2.body`: Set approved reorder conditions in the current supply worksheet, including who verifies stock and who authorizes a purchase.
15. `agentTasks.1.whoItSuits`: An agent can propose inspection windows that fit the approved site routine and identify inspections awaiting completion.
16. `agentTasks.1.whoItSuits`: The inspector records the actual findings, and a calendar appointment alone never counts as evidence that quality was checked.
17. `agentTasks.2.whoItSuits`: An agent can combine reported shortages with the site’s approved reorder rules and prepare a supply requisition for authorization.
18. `agentTasks.2.whoItSuits`: It should retain uncertain counts for verification and recognize an existing open request.
19. `agentTasks.2.whoItSuits`: Product substitutions or purchases beyond the approved process belong with the supervisor or purchasing owner.
20. `agentTasks.3.whoItSuits`: Safety concerns follow the company’s immediate escalation procedure instead of waiting for a routine quality review.
21. `agentTasks.4.whoItSuits`: The responsible manager assesses staffing, service frequency, and price after reviewing the actual site conditions with the client.
22. `faq.0.a`: Coverage requires a recorded acknowledgment, with unconfirmed assignments escalated to the site supervisor.
23. `faq.1.a`: Use the resolution standard agreed for that type of issue.
24. `faq.1.a`: Preserve the crew’s completion note as evidence of work performed, then record any required verification separately.
25. `faq.1.a`: Repeated complaints should remain connected to the history of the affected area.
26. `faq.2.a`: Record the condition and identify the relevant scope boundary for the manager’s review.
27. `faq.2.a`: The manager can discuss a service change while the inspection continues to assess the duties already agreed.
28. `faq.3.a`: An agent can prepare that evidence, but it cannot establish the required cleaning method or approve new contract terms.
29. `directAnswer`: Commercial cleaning companies can confirm coverage by recording crew acknowledgments separately from shift assignments.
30. `directAnswer`: An agent flags missing confirmations, arranges scope-based inspections, and carries unresolved site issues into the supervisor handoff.
31. `systemsContext`: Cleaning operators commonly run these site-management products; the custom workflow takes shape around your current roster and inspection tools once their permitted access has been established.
32. `scope`: Supervisors choose replacement crews, verify access and training requirements, and assess quality and cleaning methods; service frequency, pricing, and contract changes remain decisions for the responsible manager with the client.
33. `scope`: Work outside the agreed janitorial scope needs manager approval before assignment or any statement that it is included.

## marketing-agencies

Retained distinct boundaries:

1. Report data needs agreed sources, period and metric definitions.
2. Missing or conflicting figures visible and resolved, no cherry-picking.
3. Account manager owns interpretation and recommendations.
4. Scope checked before assigning production.
5. Uncertain scope classification needs account manager.
6. Fees, trades and concessions require manager decision.
7. Approval tied to exact version and named approver.
8. Reply or requested edit is not approval to publish.
9. Delivery owner confirms changed client dates.
10. Error correction and new direction assessed against signed allowance.

Added boundary: named software is context, with feasible access checked for the reader’s existing setup.

Before boundary sentence inventory:

1. `intro.0`: A report needs reconciled campaign data; a request needs a scope decision before anyone promises another deliverable.
2. `intro.1`: Connecting those records lets an agent prepare reporting and expose scope questions without deciding what the agency should give away.
3. `intro.1`: The account manager still owns the relationship and any conversation about changed fees or expectations.
4. `tasksAnswer`: Account managers approve interpretations, concessions, and client-facing recommendations.
5. `doThisNow.0.body`: Mark metrics that cannot be reconciled instead of copying whatever figure appears first.
6. `doThisNow.1.body`: Translate the signed statement of work into a short reference for deliverable types, included revision rounds, and approval responsibilities.
7. `doThisNow.1.body`: When a request arrives, record the requested output and the relevant allowance before assigning production.
8. `doThisNow.1.body`: Label unclear requests for discussion with the account manager.
9. `doThisNow.1.body`: This gives the team a concrete way to distinguish a normal revision from a new concept without forcing a designer to negotiate scope in the middle of a production conversation.
10. `doThisNow.2.body`: Add the version link, named approver, request date, and blocked deliverable to the existing approval task.
11. `doThisNow.2.body`: Agree on where approval must be recorded if it arrives in a chat or email.
12. `doThisNow.2.body`: Do not treat a comment on an earlier draft as permission to publish the version currently in progress.
13. `doThisNow.3.body`: Ask the account manager to distinguish observed results from proposed explanations.
14. `agentTasks.0.whoItSuits`: Agencies with agreed metric definitions can have an agent prepare the report from approved sources and label unavailable data.
15. `agentTasks.0.whoItSuits`: It should keep the reporting period visible and preserve links back to the exports.
16. `agentTasks.0.whoItSuits`: Performance explanations and recommendations remain editorial work for the account manager.
17. `agentTasks.1.whoItSuits`: An agent can attach the relevant scope provision and draft a change request for review.
18. `agentTasks.1.whoItSuits`: It should distinguish a clear match from uncertain wording.
19. `agentTasks.1.whoItSuits`: The account manager chooses whether to charge, trade another deliverable, or make a documented concession.
20. `agentTasks.2.whoItSuits`: With a named approver and an authoritative version record, an agent can prepare a focused approval request showing the asset and affected delivery date.
21. `agentTasks.2.whoItSuits`: A requested edit should reopen the production task; it should not be recorded as approval merely because the client replied.
22. `agentTasks.3.whoItSuits`: Promising a revised client date still requires the person responsible for delivery.
23. `faq.0.a`: Keep the disagreement visible and identify the source, reporting window, and metric definition for each figure.
24. `faq.0.a`: The report owner should resolve the mismatch before presenting a consolidated total.
25. `faq.0.a`: An agent can highlight the discrepancy and preserve the original exports, but selecting whichever number looks better would undermine the reporting process.
26. `faq.1.a`: No.
27. `faq.1.a`: Compare the request with the included revision allowance and the agreed deliverable.
28. `faq.1.a`: Correcting an execution error may be different from developing a new direction, depending on the signed scope.
29. `faq.1.a`: The account manager should decide how the request is classified and record that decision so production has a clear instruction.
30. `faq.2.a`: It can describe an approved dependency, such as production waiting for the current creative version to be accepted.
31. `faq.2.a`: Avoid automatically announcing a new launch date unless the delivery owner has confirmed it.

After boundary sentence inventory:

1. `intro.0`: A report needs reconciled campaign data; a request needs a scope decision before anyone promises another deliverable.
2. `doThisNow.1.body`: Translate the signed statement of work into a short reference for deliverable types, included revision rounds, and approval responsibilities.
3. `doThisNow.1.body`: When a request arrives, record the requested output and the relevant allowance before assigning production.
4. `doThisNow.1.body`: This gives the team a concrete way to distinguish a normal revision from a new concept without forcing a designer to negotiate scope in the middle of a production conversation.
5. `doThisNow.2.body`: Add the version link, named approver, request date, and blocked deliverable to the existing approval task.
6. `doThisNow.2.body`: Agree on where approval must be recorded if it arrives in a chat or email.
7. `doThisNow.2.body`: Do not treat a comment on an earlier draft as permission to publish the version currently in progress.
8. `agentTasks.0.whoItSuits`: Agencies with agreed metric definitions can have an agent prepare the report from approved sources and label unavailable data.
9. `agentTasks.0.whoItSuits`: It should keep the reporting period visible and preserve links back to the exports.
10. `agentTasks.1.whoItSuits`: An agent can attach the relevant scope provision and draft a change request for review.
11. `agentTasks.1.whoItSuits`: The account manager chooses whether to charge, trade another deliverable, or make a documented concession.
12. `agentTasks.2.whoItSuits`: With a named approver and an authoritative version record, an agent can prepare a focused approval request showing the asset and affected delivery date.
13. `agentTasks.2.whoItSuits`: A requested edit should reopen the production task; it should not be recorded as approval merely because the client replied.
14. `faq.0.a`: The report owner should resolve the mismatch before presenting a consolidated total.
15. `faq.1.a`: Compare the request with the included revision allowance and the agreed deliverable.
16. `faq.1.a`: Correcting an execution error may be different from developing a new direction, depending on the signed scope.
17. `faq.2.a`: It can describe an approved dependency, such as production waiting for the current creative version to be accepted.
18. `faq.2.a`: Avoid automatically announcing a new launch date unless the delivery owner has confirmed it.
19. `directAnswer`: Marketing agencies can streamline client reporting by defining campaign data sources, reporting periods, and metric meanings before assembling the report.
20. `directAnswer`: An agent gathers that material, tracks creative approvals by version, and compares new requests with the signed scope.
21. `systemsContext`: Agency teams commonly work in these project and reporting systems; the build is scoped against whatever your team currently uses, including a check of data availability before any connection is proposed.
22. `scope`: Account managers own performance interpretations, recommendations, scope classification, fees, and concessions; uncertain requests go to them before production is assigned.
23. `scope`: Unreconciled or missing campaign figures stay visibly unresolved with their source and reporting definition until the report owner resolves them.

## consulting-firms

Retained distinct boundaries:

1. Scoping requirements traceable, gaps and assumptions not client agreement.
2. Uncertainty affecting feasibility resolved before commitment.
3. Only approved reusable material, no inherited concessions or confidential assumptions.
4. Partner controls recommendation, price, exclusions and commitments.
5. Delivery lead confirms skills and capacity before promised timing.
6. Tentative, bench and utilization records are not confirmed assignments.
7. Acceptance requires authoritative signed evidence, not verbal interest.
8. Kickoff uses signed version and separately approved changes.
9. Conflicting delivery and commercial instructions exposed.
10. Billing conditions require evidence and designated approval, not internal completion or date.
11. Delivery start requires authorized event and prerequisites.

Added boundary: named software is context, with feasible access checked for the reader’s existing setup.

Before boundary sentence inventory:

1. `intro.1`: Partners retain pricing decisions and commitments, while delivery leads confirm the team and milestone plan.
2. `doThisNow.0.body`: Read the notes from a recent scoping call and separate desired outcomes from proposed activities.
3. `doThisNow.0.body`: Attribute requirements to the relevant note or confirmed correspondence so a reviewer can see where they came from.
4. `doThisNow.0.body`: Leave gaps marked as unresolved instead of completing them from habit.
5. `doThisNow.1.body`: Give each component an owner and distinguish approved material from examples retained for reference.
6. `doThisNow.1.body`: An old successful proposal may contain a concession that should not become the next client’s default.
7. `doThisNow.1.body`: Write a short assembly checklist that identifies which sections require partner review.
8. `doThisNow.1.body`: This gives the person drafting a proposal a dependable starting point without encouraging them to copy another engagement’s assumptions or confidential details.
9. `doThisNow.2.body`: Distinguish confirmed assignments from tentative holds and people on the bench whose skills may not fit the work.
10. `doThisNow.2.body`: Note client dependencies that could move the start date.
11. `doThisNow.2.body`: Have the delivery lead review any overlap before the partner promises a kickoff.
12. `doThisNow.2.body`: A general utilization figure is not enough to establish whether the particular people required can perform the proposed work during the relevant period.
13. `doThisNow.3.body`: Identify the event that authorizes delivery to begin.
14. `doThisNow.3.body`: Keep proposal drafts out of the kickoff pack unless they are explicitly labeled as background.
15. `doThisNow.3.body`: For each billing trigger, record the agreed evidence and who confirms it.
16. `agentTasks.0.whoItSuits`: An agent can populate a proposal outline with requirements linked to scoping notes and mark unsupported sections for review.
17. `agentTasks.0.whoItSuits`: The partner should set the recommendation, price, and exclusions rather than accepting an agent’s invented completion of missing facts.
18. `agentTasks.1.todayItLooksLike`: A verbal indication of interest can be mistaken for acceptance while revisions to scope or terms are still unresolved.
19. `agentTasks.1.whoItSuits`: Firms negotiating discrete engagements can use this to avoid preparing delivery from an obsolete draft.
20. `agentTasks.1.whoItSuits`: Only the firm’s approved acceptance evidence should mark the statement of work as signed and effective.
21. `agentTasks.2.whoItSuits`: An agent can extract proposed milestone entries with the associated billing language and ask the responsible reviewer to confirm them.
22. `agentTasks.2.whoItSuits`: Once approved, it can surface conditions awaiting evidence.
23. `agentTasks.2.whoItSuits`: It should not assume a milestone has been accepted because a planned date passed or an internal task was marked complete.
24. `agentTasks.3.whoItSuits`: An agent can assemble the signed documents, approved delivery outline, contact roles, and outstanding prerequisites into a kickoff pack.
25. `agentTasks.3.whoItSuits`: Conflicting instructions should be highlighted before kickoff rather than blended into a seemingly consistent summary.
26. `agentTasks.4.whoItSuits`: An agent can compare proposed roles and timing with the staffing record, preserving the distinction between tentative and committed work.
27. `agentTasks.4.whoItSuits`: Staffing choices and changes to promised start dates remain commercial and operational decisions for the firm.
28. `faq.0.a`: It can include clearly labeled assumptions for partner review, but it should not present them as client agreement.
29. `faq.0.a`: Attach the unresolved question and explain which part of the approach depends on the answer.
30. `faq.0.a`: If the uncertainty changes effort or feasibility, resolve it before issuing a firm commitment in the statement of work.
31. `faq.1.a`: Use the signed, authoritative version identified by the firm’s acceptance process.
32. `faq.1.a`: Link later approved changes separately and make their status clear.
33. `faq.1.a`: The kickoff pack should expose any difference between the commercial agreement and the proposed delivery outline so the delivery lead can resolve it before briefing the team.
34. `faq.2.a`: Bench availability is an input, not a confirmed assignment.
35. `faq.2.a`: Check skills, planned leave, tentative holds, and the work required at each milestone.
36. `faq.2.a`: The delivery lead should confirm the staffing plan before a partner commits to a start date.
37. `faq.2.a`: Preserve uncertainty in the capacity view while the proposal remains under negotiation.
38. `faq.3.a`: Only the approved billing process can determine that.
39. `faq.3.a`: The agent can surface the contractual trigger and supporting delivery evidence, but internal completion may differ from client acceptance.
40. `faq.3.a`: Have the designated reviewer confirm that the agreed condition is satisfied before the billing action proceeds, especially when acceptance or another dependency remains unresolved.

After boundary sentence inventory:

1. `intro.0`: Turning a scoping conversation into a consulting proposal starts with separating the client’s ambitions from agreed deliverables.
2. `doThisNow.0.body`: Read the notes from a recent scoping call and separate desired outcomes from proposed activities.
3. `doThisNow.0.body`: Attribute requirements to the relevant note or confirmed correspondence so a reviewer can see where they came from.
4. `doThisNow.1.body`: Give each component an owner and distinguish approved material from examples retained for reference.
5. `doThisNow.1.body`: An old successful proposal may contain a concession that should not become the next client’s default.
6. `doThisNow.1.body`: Write a short assembly checklist that identifies which sections require partner review.
7. `doThisNow.1.body`: This gives the person drafting a proposal a dependable starting point without encouraging them to copy another engagement’s assumptions or confidential details.
8. `doThisNow.2.body`: Distinguish confirmed assignments from tentative holds and people on the bench whose skills may not fit the work.
9. `doThisNow.2.body`: Have the delivery lead review any overlap before the partner promises a kickoff.
10. `doThisNow.3.body`: Identify the event that authorizes delivery to begin.
11. `doThisNow.3.body`: Keep proposal drafts out of the kickoff pack unless they are explicitly labeled as background.
12. `doThisNow.4.body`: For each billing trigger, record the agreed evidence and who confirms it.
13. `agentTasks.0.whoItSuits`: An agent can populate a proposal outline with requirements linked to scoping notes and mark unsupported sections for review.
14. `agentTasks.1.todayItLooksLike`: A verbal indication of interest can be mistaken for acceptance while revisions to scope or terms are still unresolved.
15. `agentTasks.1.whoItSuits`: Only the firm’s approved acceptance evidence should mark the statement of work as signed and effective.
16. `agentTasks.2.whoItSuits`: An agent can extract proposed milestone entries with the associated billing language and ask the responsible reviewer to confirm them.
17. `agentTasks.2.whoItSuits`: Once approved, it can surface conditions awaiting evidence.
18. `agentTasks.3.whoItSuits`: An agent can assemble the signed documents, approved delivery outline, contact roles, and outstanding prerequisites into a kickoff pack.
19. `agentTasks.3.whoItSuits`: Conflicting instructions should be highlighted before kickoff rather than blended into a seemingly consistent summary.
20. `agentTasks.3.whoItSuits`: An agent can compare proposed roles and timing with the staffing record, preserving the distinction between tentative and committed work.
21. `faq.0.a`: A draft can carry labeled assumptions for partner review, with each unanswered question linked to the approach it affects.
22. `faq.1.a`: Use the accepted statement of work as the kickoff reference and link subsequent approved amendments with their status visible.
23. `faq.2.a`: A delivery lead must confirm the assignment before a start is promised, checking skills, leave, tentative reservations, and milestone needs.
24. `faq.3.a`: Have the designated reviewer confirm that the agreed condition is satisfied before the billing action proceeds, especially when acceptance or another dependency remains unresolved.
25. `faq.4.a`: If the uncertainty changes effort or feasibility, resolve it before issuing a firm commitment in the statement of work.
26. `directAnswer`: An agent assembles a reviewable draft from those notes and approved commercial material, then checks the proposed work against staffing records.
27. `systemsContext`: Consultancies commonly use the listed planning and proposal tools; an agent is built around your firm’s established documents and systems after the available records and access options are reviewed.
28. `scope`: Partners determine recommendations, exclusions, prices, and client commitments, while delivery leads confirm suitable people, milestones, and start dates; tentative holds, bench availability, and utilization alone do not establish a staffing commitment.
29. `scope`: Unsupported scoping assumptions remain labeled for review rather than becoming client agreement, and only the authoritative accepted contract plus approved changes governs kickoff.
30. `scope`: Billing follows the agreed contractual trigger and designated reviewer’s confirmation, never a passed date or internal completion alone.
