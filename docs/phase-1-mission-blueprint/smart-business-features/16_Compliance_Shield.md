# Smart Business Feature Definition — Compliance Shield

**Status:** MATURE RECONCILED CONTRACT — FULL HYDRATION PASS  
**Build commitment:** **ADD-ON + BUILD NOW**  
**Commercial availability:** Ledger + Manager add-on  
**Authority boundary:** Compliance Shield remembers documents/deadlines and helps the merchant act in time. It is not a legal adviser, regulator or certification authority.

---

## 1. Feature Identity

Compliance Shield helps a merchant organize licences, certificates, renewals and recurring compliance dates, then receive timely reminders and retrieve the supporting documents when needed.

It should reduce missed deadlines without making unsupported legal claims.

---

## 2. Founder Problem Statement

Small merchants may need to remember items such as:

- FSSAI registrations/licences;
- Panchayat/Municipal trade licences;
- Fire Safety NOC/certificates where applicable;
- business/vehicle/asset renewals;
- other merchant-specific regulatory or operational documents.

These are often tracked in files, WhatsApp photos, calendars or memory. Missed dates create stress and avoidable disruption.

---

## 3. Lighthouse Principles

- Reduce mental load.
- Tell the merchant what Smart Business knows and does not know.
- Remind/organize; do not impersonate legal authority.
- Reuse shared Document Intelligence and Reminder foundations.
- Ask when document dates/identity are uncertain.
- Do not silently trust low-confidence OCR.
- Preserve privacy of licences/identity/business documents.

---

## 4. Supported Compliance Record

A compliance/renewal record may preserve:

- business scope;
- compliance/document type;
- document/licence identifier where relevant;
- issuing authority/source where known;
- issue/start date;
- expiry/renewal/due date;
- supporting document/file;
- responsible Owner/authorized user;
- reminder configuration;
- status/history;
- source/interpretation confidence;
- human-confirmed corrections;
- notes/context.

Exact fields depend on the document type; avoid a brittle one-size schema where flexibility is needed.

---

## 5. Document Intake

A merchant may add a compliance document through approved channels using:

- photo/image;
- PDF;
- supported file upload;
- manual entry;
- Conversation Workspace / WhatsApp where appropriate.

Universal Document Intelligence must be reused:

**upload → interpret → preview → clarify where needed → confirm → validated compliance record**.

OCR output alone is not trusted compliance truth when key dates/identity are uncertain.

---

## 6. Date Extraction and Clarification

The system should identify relevant dates when supported by the document, while distinguishing among:

- issue date;
- effective/start date;
- expiry date;
- renewal/due date;
- inspection/other date.

If multiple plausible dates exist or the document is unclear, ask the merchant to confirm the correct one.

Do not silently choose a date just because OCR returned a value.

---

## 7. Reminder Behavior

Compliance Shield must use the shared Reminder Engine.

It may create progressive reminders before a deadline according to approved product/configuration behavior.

Historical `60 / 30 / 7 / 1 day` cadence is useful provenance, not immutable Product Truth.

Reminder behavior should support:

- advance notice;
- nearer-deadline escalation;
- done/renewed acknowledgement;
- snooze/reschedule where appropriate;
- renewal-cycle continuation.

---

## 8. Renewal Flow

A typical flow:

1. Merchant has a confirmed compliance record/date.
2. Shared Reminder Engine schedules notifications.
3. Merchant receives timely reminder.
4. Merchant opens/retrieves document/context.
5. Merchant completes renewal outside or through any separately approved external workflow.
6. Merchant uploads/records updated evidence.
7. Smart Business interprets and previews new details.
8. Merchant confirms.
9. Current record/history is updated without erasing prior document history.
10. Next reminder cycle is established where applicable.

Smart Business must not mark a renewal complete simply because a reminder date passed.

---

## 9. Receipt / Document Cabinet Relationship

Compliance documents should reuse the shared secure document-memory foundation rather than create isolated storage.

The merchant should be able to retrieve approved records/documents conversationally or through the workspace, subject to permissions.

---

## 10. Users and Permissions

### Owner

Full compliance-record/reminder authority for the business.

### Manager

Only Owner-delegated compliance visibility/actions.

### Employee

No broad compliance-document access by default. A specific operational task may expose only what is required.

### Support / Platform

No routine document browsing. Purpose-limited support access follows current support/privacy governance.

---

## 11. WhatsApp and Conversation Workspace

Approved users should be able to:

- upload a licence/document;
- ask what renewals are coming;
- retrieve permitted documents;
- confirm/correct dates;
- mark/upload renewed evidence

through the same shared compliance/document truth.

Channels must not create duplicate reminders or document records.

---

## 12. Human Language

English, Malayalam and Manglish are first-class for reminders/questions/explanations.

Official document names may remain in their common/legal English form where that is clearer, while explanations should be natural for the merchant.

---

## 13. Ask CFO / Daily Intelligence Relationship

Ask CFO may answer authorized questions such as:

- `Which renewals are due soon?`
- `Show my FSSAI document.`

Daily Intelligence may surface a material near-term compliance reminder if useful, without turning routine compliance into fear-heavy messaging.

Neither feature should make legal conclusions beyond supported facts.

---

## 14. Notification Behavior

Use the shared Notification foundation.

Notifications should state:

- what record/deadline is involved;
- when it is due/expiring;
- what the merchant can do next;
- uncertainty where the date is not fully confirmed.

Avoid unsupported penalty claims or alarmist language.

---

## 15. AI Authority and Legal Boundary

AI may:

- interpret documents;
- identify candidate dates/fields;
- organize records;
- remind;
- explain stored facts;
- suggest that the merchant verify/renew.

AI must not:

- certify legal compliance;
- claim the merchant is legally compliant because a document is stored;
- fabricate current law/penalty amounts;
- file/renew with authorities unless a separately approved integration explicitly authorizes that workflow;
- silently change confirmed dates based on later OCR.

---

## 16. Error and Exception Behavior

Handle:

- unreadable/partial document;
- multiple dates;
- expired document discovered late;
- duplicate upload;
- renewal document superseding old record;
- reminder delivery failure;
- unsupported document type;
- permission denied;
- missing document but known deadline;
- law/requirement outside current knowledge.

Uncertainty must be visible and narrowly contained.

---

## 17. Privacy and Trust

Compliance documents may contain sensitive identity/business information.

Requirements:

- business isolation;
- permission-scoped retrieval;
- no unnecessary staff exposure;
- purpose-limited support access;
- current retention/deletion policy;
- no use of compliance data for secret manipulation/upsell.

---

## 18. Shared Foundations to Reuse

Reuse:

- Universal Document Intelligence;
- Receipt/Document Cabinet;
- Reminder Engine;
- Notification foundation;
- Permission Engine;
- Business Memory;
- Human Language Layer;
- Conversation channels;
- audit/history.

Do not create a compliance-only OCR pipeline, storage system or scheduler.

---

## 19. Explicit Non-goals

- legal advice/certification;
- immutable 60/30/7/1 cadence;
- hardcoded penalty/legal claims without current verification;
- OCR-to-trusted-date with no review when uncertain;
- duplicate reminder/document architecture.

---

## 20. Acceptance Scenarios

A future Blueprint/EIS must verify at least:

1. Clear licence photo → interpreted fields/date → preview → Owner confirmation.
2. Ambiguous date → clarification before record/reminder.
3. Renewal reminder uses shared Reminder Engine.
4. Expired/renewed document preserves historical record.
5. Reminder due does not falsely mark renewal complete.
6. Employee cannot access broad compliance documents by default.
7. WhatsApp and Workspace retrieve the same confirmed record.
8. Duplicate document/upload is handled safely.
9. Ask CFO reports stored renewal facts without legal certification.
10. Support cannot routinely browse documents without purpose/authorization.

---

## 21. Historical Corrections / Superseded Behavior

Preserve compliance-memory/reminder intent.

Historical-only:

- exact 60/30/7/1 cadence;
- fixed penalty claims;
- provider-specific document/storage assumptions.

Superseded:

- treating OCR as unquestioned authority;
- claiming Smart Business itself makes the merchant legally compliant.

---

## 22. Provenance and Hydration Coverage

Reconciled from Founder-origin Section 6 and Section 7; planning/project-room compliance history; Final Feature Reconciliation Register §23 and §§28–30; Source 01/11 and current Document/Reminder/Support privacy governance.

**Hydration result:** all current Compliance Shield behaviors, boundaries and shared-foundation rules recovered from Founder-origin evidence are represented here.

---

## 23. Completion Gate

Complete only when document intake, confirmed compliance facts, retrieval, shared reminders/notifications, renewal history, permissions/privacy, failure handling, legal-boundary messaging and runtime acceptance are proven end-to-end.
