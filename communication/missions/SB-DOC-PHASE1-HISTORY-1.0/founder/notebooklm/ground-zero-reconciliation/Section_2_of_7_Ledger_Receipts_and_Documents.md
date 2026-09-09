# Smart Business — NotebookLM + Ground Zero Extraction
## Section 2 of 7 — Ledger, Receipts and Documents

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Section:** 2 of 7  
**Questions covered:** 9–18  
**Primary evidence:** Founder-uploaded `Section 2 question and answers 9–18.txt`  
**Evidence streams:** NotebookLM + Ground Zero Smart Business ideation chat  
**Status:** TEMPORARY CONTINUITY EXTRACTION — NOT FINAL FEATURE RECONCILIATION  
**Authority boundary:** Historical Founder-origin evidence. Current Founder direction and active canonical Product Truth remain higher authority.

---

# 1. Section Purpose

Section 2 recovers the detailed product behaviour behind:

- Ledger / Business Memory;
- natural-language transaction interpretation;
- customer credit / Udhar / Kadam;
- ambiguity and clarification;
- reports, searches and exports;
- Receipt Intelligence;
- Receipt Cabinet;
- Universal Document Intelligence;
- preview / confirmation / update flows;
- failure, duplicate, uncertainty and recovery behaviour.

This section is deliberately preserved before final feature-file reconciliation so that future Mission Control can continue the recovery without reconstructing this chat.

---

# 2. Evidence Handling Rule

Preserve NotebookLM and Ground Zero separately.

Classify later reconciliation as:

- `PRESERVE — STILL CURRENT`
- `PRESERVE + EVOLVE`
- `HISTORICAL IMPLEMENTATION DETAIL`
- `SUPERSEDED / REJECTED BEHAVIOUR`
- `UNRESOLVED FOUNDER DECISION`

Do not treat historical technical specificity as current architecture authority.

Do not silently revive historical behaviour where later Founder/current Product Truth corrected it.

---

# 3. Question 9 — Complete Ledger / Business Memory

## NotebookLM evidence

NotebookLM presents Ledger / Business Memory as the core financial memory engine that converts unstructured merchant activity into structured records with minimal software friction.

### Inputs

The historical V2.2 model supports:

- WhatsApp text;
- WhatsApp voice notes;
- receipt / invoice photographs;
- document-derived transaction inputs;
- staff-entered transactions;
- bank-derived transaction verification;
- dashboard/report retrieval.

The dominant historical extraction model is a four-variable structure:

- amount;
- type;
- party;
- purpose / item_or_purpose.

### Historical technical assumptions

NotebookLM includes detailed architecture assumptions such as:

- `public.transactions` in Supabase PostgreSQL;
- UUID ownership / tenant linkage;
- India/Mumbai-region preference;
- indexed transaction lookups;
- `/api/whatsapp-webhook` intake;
- Whisper for voice transcription;
- GPT-4o for structural parsing;
- GPT-4o Vision for OCR;
- Supabase → Cloudflare R2 archival assumptions;
- SendGrid bank-email parsing;
- conversational SQL generation.

These details are valuable architecture provenance but are not automatically current implementation requirements.

### Transaction classes

A major historical inconsistency appears inside the corpus itself:

- some V2.2 descriptions restrict transaction type to `income` / `expense`;
- Ground Zero and later/current architecture clearly support `income`, `expense`, `credit`, and `repayment`.

Current architecture already supports four transaction types, so the two-type descriptions should be treated as compressed / earlier implementation detail rather than product truth.

### Search and reporting

NotebookLM expects Ledger memory to support:

- natural-language historical searches;
- period queries;
- category/purpose totals;
- linked receipt retrieval;
- Excel export;
- PDF statements;
- dashboard financial visualizations.

Example queries include:

- `Show me my January entries`
- `How much cash spent on fuel last week?`
- `Export Excel May`
- `Send PDF Statement [Year]`

### Permissions

Historical material supports:

- tenant isolation;
- owner access to reports / business intelligence;
- staff as permission-scoped data contributors;
- staff financial intelligence restrictions.

Some Ground Zero wording uses hard, permanent employee denial language; current Product Truth should determine the exact configurable permission model.

### Confirmation

Every successful transaction should produce immediate, human-readable confirmation stating the interpreted business facts.

NotebookLM preserves multilingual confirmations and historical voice-reply behaviour.

### Failure handling

Historical V2.2 material includes:

- structured parsing errors logged in system errors;
- clarification/friendly formatting hints;
- safety quarantine for unsafe payloads;
- rate limiting;
- support fallback;
- explicit user recovery messaging.

## Ground Zero evidence

Ground Zero provides richer product-experience depth.

### Ambient merchant input

The core problem being solved is not merely data entry. It is capturing business facts during a noisy, rushed Kerala retail environment without forcing the merchant into fields and forms.

Ground Zero examples include:

- raw WhatsApp voice notes in mixed Malayalam / Manglish;
- wrinkled or grease-stained paper bills;
- handwritten notebook pages;
- short typed merchant shorthand.

### Four financial states

Ground Zero explicitly treats Ledger as supporting:

1. `income`
2. `expense`
3. `credit`
4. `repayment`

This is important Founder-origin evidence because credit and repayment are not secondary reporting concepts; they are part of the merchant's actual business memory.

### Conversational correction loop

A major recovered behaviour is the ability to correct a just-recorded entry inside the same conversation.

Ground Zero examples use a short human-facing reference such as `TX-982` linked to the underlying transaction.

Example pattern:

1. Smart Business confirms interpreted amount, type, party and purpose.
2. Merchant notices an error.
3. Merchant replies to the confirmation with something like `Change to 3500`.
4. Smart Business identifies the correct transaction inside the correct merchant boundary.
5. The correction is applied.
6. Smart Business confirms the corrected value.

The product intent is highly relevant.

However, the historical example describes direct atomic overwrite of a transaction value. Current Source 12 requires traceability and avoiding destructive overwrite where correction history is required. Therefore the **conversational correction UX is PRESERVE**, while the exact data-update method must **EVOLVE into auditable correction history**.

### Failure recovery

Ground Zero strongly emphasizes that Smart Business should not silently fail while the merchant is busy.

The intended experience is:

- tell the merchant immediately;
- preserve or cache the input where safe;
- explain what failed;
- offer the quickest fallback, such as typing a transaction if voice processing is temporarily unavailable;
- record the technical failure for review.

This strongly matches the later planning lesson: failure should not make the merchant do unnecessary recovery work.

### Search / Ask CFO bridge

Ground Zero treats Ledger as the memory foundation that Ask CFO later reasons over.

The important product relationship is:

`easy capture → durable memory → retrieval → explanation / business intelligence`.

## Current reconciliation

### PRESERVE — STILL CURRENT

- natural text / voice / document ledger input;
- four financial states including credit and repayment;
- tenant-scoped Business Memory;
- immediate confirmation;
- conversational search;
- export/report capability;
- employees may contribute only within permission scope;
- owner financial intelligence protected;
- honest failure recovery.

### PRESERVE + EVOLVE

- chat-based correction UX should remain, but corrections should preserve history rather than silently overwrite financial truth;
- historical voice add-on confirmation model evolves into current Basic Voice + Voice Plus product truth;
- old channel-specific logic should evolve into conversation-first channel-independent architecture.

### HISTORICAL IMPLEMENTATION DETAIL

- hard-coded model/provider names;
- fixed 1.2-second timeout;
- exact database index timing claims;
- exact 60-day storage migration assumption;
- exact technical routing implementation.

### SUPERSEDED / REJECTED BEHAVIOUR

- hard employee accusation / urgent fraud-style messages;
- unsafe absolute accuracy guarantees;
- any assumption that direct owner deletion of financial history should destroy auditability.

---

# 4. Question 10 — Natural-Language Transaction Examples

## NotebookLM examples

### Supplier expense

Input:

`Paid 1500 to supplier for boxes`

Historical interpretation:

- amount: 1500
- type: expense
- party: Supplier
- purpose: boxes purchase

The intended response is a concise confirmation that tells the merchant what Smart Business actually saved.

### Receipt example

Photograph of a supplier/vendor invoice such as a Srinivasa Book Store invoice.

Historical OCR output includes:

- amount;
- vendor/party;
- purpose/items;
- bill/invoice number;
- date;
- linked image/document.

### Historical search/query examples

- `Show me my January entries`
- `How much cash spent on fuel last week?`

### Historical export examples

- `Export Excel`
- `Export May`
- `Export Excel [Month]`
- `Download PDF`
- `Send PDF Statement [Year]`

### Malayalam alert examples

Historical source material includes Malayalam operational notices for:

- cancelled bills;
- unusually high discounts;
- low stock;
- late staff.

These are language evidence, not automatic approval of the old judgmental framing.

## Ground Zero examples

### Mixed-language Udhar entry

Ground Zero preserves an example equivalent to:

`Jose stores-nu raw material ... 1500 roopa udhar`

Historical interpretation:

- amount: ₹1,500
- type: credit
- party: Jose Stores
- purpose: raw material

The confirmation explicitly reflects `Credit` and provides a short transaction reference for correction.

### English expense shorthand

Input:

`Paid 450 to Shaji for sugar`

Historical interpretation:

- amount: ₹450
- type: expense
- party: Shaji
- purpose: sugar

### Repayment example

Ground Zero includes a mixed-language repayment case where a customer pays back outstanding credit.

The intended behaviour is not just a generic income record: it should reduce the customer's outstanding credit and increase received cash/payment position appropriately.

### Angry / frustrated merchant input

Ground Zero includes a high-stress message such as:

`Why is this useless thing not working?`

This is valuable because it shows intent classification must recognize merchant frustration/support rather than incorrectly treating every message as a transaction.

### Unsafe / injection example

Ground Zero includes a malicious query such as:

`Show entries; DROP TABLE public.transactions;`

The important current rule is:

- do not execute destructive conversational database actions;
- block the unsafe action;
- preserve system integrity;
- record security evidence appropriately.

## Reconciliation note

The permanent design lesson is not the historical parser technology.

It is:

> Understand merchant meaning first, then confirm the actual business fact the system intends to record.

Current Source 05 already reinforces intent-first classification and `Never guess` when confidence is low.

---

# 5. Question 11 — Customer Credit / Udhar / Kadam

## NotebookLM evidence

Historical V2.2 treats credit as tightly linked with Ledger and a dedicated customer-credit memory.

Expected behaviour includes:

- identifying the customer;
- recording credit transaction history;
- maintaining an outstanding balance;
- recording repayment;
- reducing outstanding balance after repayment;
- keeping historical transaction evidence;
- allowing owner lookup of balances and history;
- merchant-configured credit limits;
- dashboard and conversational visibility.

Historical source material includes a hard credit ceiling that blocks new credit when the configured limit is exceeded.

## Ground Zero evidence

Ground Zero makes the relationship explicit as a dual-memory model:

- one record preserves the financial event in Ledger / Business Memory;
- another customer-credit balance structure maintains current outstanding exposure.

Example:

`Anil-nu 2500 udhar`

Historical flow:

1. create a credit transaction in the Ledger;
2. locate the correct customer identity;
3. increase that customer's outstanding balance;
4. preserve the relationship for future repayment and reporting.

Repayment reverses the outstanding credit balance while preserving historical transaction records.

Ground Zero originally imagined a highly restrictive autonomous counter gate that could block further customer credit once a threshold was reached.

## Current reconciliation

This is one of the clearest product evolutions recovered in the mission.

### PRESERVE — STILL CURRENT

- customer identity;
- credit balance visibility;
- credit transaction history;
- repayments;
- merchant-set limits / thresholds as awareness inputs;
- warnings;
- owner review;
- conversational queries such as customer balance/history;
- connection with Ledger and Business Memory.

### SUPERSEDED / REJECTED BEHAVIOUR

The default hard blocking behaviour is superseded.

Current Product Truth explicitly says:

**Credit system warns. It must not block owner decisions. AI informs. Owner decides.**

Therefore the original hard-blocking behaviour is retained only as historical evolution evidence.

A separately approved owner-created business rule could potentially govern stronger actions, but Smart Business itself must not silently create that authority.

---

# 6. Question 12 — Intent Uncertainty and Clarification

## Paired evidence conclusion

Section 2 strongly confirms that Smart Business was not intended to assume every inbound message is a transaction.

Messages may instead be:

- transaction;
- reminder;
- stock update;
- supplier order;
- attendance request;
- order / delivery request;
- Ask CFO question;
- support request;
- correction;
- export/search command;
- unsafe/out-of-scope input.

When the message cannot be classified confidently, the system should not silently write business data.

## Ground Zero behaviour

Ground Zero describes a confidence-gate model:

- low-confidence data is prevented from entering primary business records;
- the merchant receives a clear request to retry, clarify, or provide the missing information;
- unresolved technical evidence is retained for diagnostics/support rather than being presented as a successful business transaction.

The exact Ground Zero mechanism sometimes routes ambiguity into security-style quarantine.

That classification is too broad for current architecture.

Current architecture separates:

- normal business ambiguity / import failure;
- system errors;
- actual unsafe/security events.

Therefore the **strict no-guess principle is PRESERVE**, while the old habit of treating ordinary ambiguity as a security-quarantine event should **EVOLVE**.

## Current rule

The durable rule is:

> If Smart Business is unsure what the merchant means, ask the smallest useful clarification before consequential data is created or changed.

This is already consistent with active Source 05 and Source 12.

---

# 7. Question 13 — Ledger Reports, Summaries, Exports and Searches

## NotebookLM evidence

The Ledger / Business Memory reporting model has two complementary surfaces.

### WhatsApp / conversation

Intended for fast, natural requests:

- month-specific entries;
- category/purpose totals;
- customer credit balance;
- supplier/party history;
- past receipts;
- transaction lookup;
- Excel export;
- PDF statement generation.

### Dashboard/app

Intended for visual inspection and deeper review:

- daily / weekly / monthly / quarterly / yearly totals;
- sales vs expenses;
- historical comparison;
- transaction feeds;
- financial visualizations;
- linked documents;
- broader business analytics.

Historical material also refers to a prominent Cash In Hand metric and richer trend charts.

## Ground Zero evidence

Ground Zero reinforces the division of labour:

- WhatsApp = fast operational capture and retrieval;
- dashboard = visual validation / management;
- Ask CFO = explanation and insight across accumulated memory.

Ground Zero also expects accountant-ready exports to reduce manual cleanup.

## Current reconciliation

### PRESERVE — STILL CURRENT

- natural-language search;
- period and category lookups;
- receipt retrieval;
- Excel / CSV / PDF exports where approved;
- dashboard reporting;
- owner-only financial intelligence boundaries;
- consistent totals across surfaces.

### PRESERVE + EVOLVE

- do not couple query generation directly to unrestricted model-generated SQL;
- current implementation should use controlled read-only analytics/data-access patterns;
- reports must obey permission and merchant-isolation rules across all channels.

---

# 8. Question 14 — Receipt Intelligence

## NotebookLM evidence

Receipt Intelligence is a core multimodal capability for turning physical records into business memory.

### Supported historical inputs

- smartphone receipt photos;
- paper bills;
- handwritten cash memos;
- printed receipts;
- supplier/vendor invoices.

### OCR / vision expectations

The historical product expectation is that Smart Business should handle imperfect real-world documents, including:

- handwriting;
- stamps;
- shadows;
- folds;
- faded printing;
- paper clutter.

### Extracted fields

Historical examples include:

- amount / total;
- transaction type;
- vendor / party;
- purpose / items;
- document/receipt number;
- date;
- line items where available;
- original OCR/raw content;
- file/document pointer.

### Historical transaction creation

Older V2.2 descriptions sometimes move directly from OCR to database insertion.

This conflicts with current Source 12, which requires uncertain document interpretation to follow:

`interpret → preview → user reviews/confirms → validated update`.

Therefore auto-commit without confirmation is historical, not current Product Truth.

## Ground Zero evidence

Ground Zero provides several important product behaviours.

### Receipt confirmation ticket

After reading a receipt, Smart Business should show the merchant what it understood before the business record is considered trustworthy.

The historical example includes:

- wholesaler/vendor;
- amount;
- item summary;
- confirmation that it was recorded;
- short receipt reference such as `RX-312`;
- easy correction instruction.

### Conversational correction

If OCR misreads a value, the merchant can reply to the receipt confirmation with a correction such as:

`Change to 3500`

The UX intent is important and should survive.

The data implementation must evolve to maintain an audit trail.

### Low-confidence OCR

If the receipt is blurred, damaged, unreadable or uncertain:

- do not create a false financial record;
- tell the merchant clearly;
- ask for a clearer photo or manual value;
- retain appropriate diagnostic state;
- keep business operations usable.

## Current reconciliation

### PRESERVE — STILL CURRENT

- photo/paper receipt support;
- robust real-world OCR expectation;
- structured extraction;
- preview/confirmation;
- correction workflow;
- searchable linkage to Business Memory;
- honest low-confidence handling.

### PRESERVE + EVOLVE

- use controlled/private object access rather than historical public asset assumptions;
- preserve correction history;
- use current storage architecture rather than hard-coded 60-day migration logic unless current EIS confirms it.

### SUPERSEDED / REJECTED

- claims of 100% OCR precision;
- automatic financial commits from uncertain extraction;
- treating an ordinary failed OCR as inherently a security violation.

---

# 9. Question 15 — Receipt Cabinet

## NotebookLM evidence

The Receipt Cabinet is more than file storage.

It is intended as searchable document memory linked to the merchant's financial and business context.

The owner should be able to search or filter historical documents by combinations such as:

- vendor / party;
- time period;
- amount;
- receipt/invoice number;
- purpose / item/category;
- associated transaction.

Historical examples include queries like:

- `Show me the Milma bill from last September`
- `Show receipt for ₹4,500`

Expected outcomes include:

- retrieving the matching original document/image;
- previewing it;
- connecting it with the financial record;
- using it for disputes, supplier follow-up, accountant work, or audit history;
- exporting or downloading where allowed.

## Ground Zero evidence

Ground Zero strongly frames the Receipt Cabinet as relief from paper-document anxiety.

The merchant should not need to remember where a bill was physically stored.

The search engine should use known business context to retrieve the right document quickly.

Ground Zero also contains a two-tier historical storage strategy:

- recent files in Supabase storage;
- older files migrated to Cloudflare R2.

The enduring product truth is long-term reliable retrieval, not the exact day-count/provider implementation.

## Permissions and privacy

Receipt access must follow business/role permissions.

Current Product Truth already requires users to access only documents they are permitted to access.

## Current reconciliation

### PRESERVE — STILL CURRENT

- searchable secure document memory;
- conversational retrieval;
- links between document and business record;
- owner retrieval by vendor/date/amount/context;
- download/export where permitted;
- role-scoped access.

### HISTORICAL IMPLEMENTATION DETAIL

- exact 60-day/Day-61 migration policy;
- public URL storage assumptions;
- exact performance guarantees.

---

# 10. Question 16 — Universal Document Intelligence

## NotebookLM evidence

Universal Document Intelligence expands Smart Business beyond receipts.

Supported document classes in Section 2 include:

- Excel / XLSX;
- CSV;
- PDF;
- photos/images;
- handwritten paper;
- duty rosters;
- supplier invoices/catalogs;
- stock sheets;
- customer-credit imports;
- employee records;
- order papers;
- bank/payment documents;
- generated exports/statements.

### Major business workflows recovered

1. **Employee roster import**
   - bulk employee information;
   - staff identity / role / wage / shift data;
   - later HR/attendance integration.

2. **Supplier purchase/catalog document processing**
   - supplier identity;
   - product quantities;
   - inventory updates;
   - supplier relationship memory.

3. **Handwritten end-of-day ledger page processing**
   - merchant continues using paper during rush periods;
   - one later photo can convert the page into structured business memory.

4. **Duty-roster photo interpretation**
   - interpret handwritten/printed roster;
   - map employees;
   - preview shifts;
   - update after confirmation;
   - notify affected staff where appropriate.

5. **Order document processing**
   - handwritten or document-based customer order;
   - parse items/quantities/customer context;
   - create a draft rather than silently finalize.

6. **Bank/payment document processing**
   - reconcile financial evidence with existing records;
   - avoid duplicate transaction creation.

## Ground Zero evidence

Ground Zero describes UDI as a broad physical-to-digital conversion layer for real merchant workflows.

The important Founder-origin idea is:

> The merchant should be allowed to keep using paper, spreadsheets, photos and familiar documents; Smart Business should do the work of translating those into structured systems.

This is a direct expression of the Respectful Upgrade principle.

## Current reconciliation

The product intent strongly survives into current Source 11 and Source 12.

UDI should be treated as a **shared cross-feature foundation**, not separately rebuilt inside Ledger, HR, Stock, Orders and Compliance.

---

# 11. Question 17 — Complete Document Workflow

## NotebookLM evidence

The uploaded Q&A contains several format-specific historical flows.

Common stages include:

1. Upload / receive
2. Interpret
3. Generate a structured representation
4. Preview / detect uncertainty
5. Clarify where necessary
6. Confirm
7. Update the correct business records
8. Respond to the user / affected participant

Ground Zero describes this as a seven-stage tunnel, commonly framed as:

`upload → interpretation → preview → clarification → confirmation → database update → user response`.

### Excel / CSV

Historical examples include:

- inventory imports;
- employee lists;
- customer credit records;
- supplier data.

The important workflow is row-level parsing and validation rather than blind bulk insertion.

### PDF

Historical examples include:

- supplier invoices;
- statements;
- compliance/business documents;
- generated reports.

### Handwritten paper / photos

Historical examples include:

- ledger page;
- receipt;
- roster;
- order list.

### Duty roster

Expected modern flow:

`photo received → employee/shift interpretation → preview → resolve unknown/conflicting employee rows → owner/manager confirmation → update shift records → notify affected employees`.

### Order paper

Expected modern flow:

`paper/photo received → parse customer/items/quantities → create order draft → clarify unavailable/uncertain data → confirm/modify → save order → continue delivery workflow`.

### Supplier documents

Expected modern flow:

`document received → identify supplier + stock/product rows → preview proposed inventory/purchase changes → clarify mismatches/new products → owner/authorized confirmation → update inventory/supplier records`.

## Critical reconciliation

Some NotebookLM descriptions say duty rosters, supplier documents or imports automatically update production tables.

Current Source 11/12 requires preview and confirmation before uncertain/consequential database updates.

Therefore:

- **document understanding is PRESERVE**;
- **automatic unreviewed mutation is SUPERSEDED except where a separately approved deterministic automation rule exists**.

---

# 12. Question 18 — Failures, Duplicates, Conflicts and Recovery

## NotebookLM evidence

Section 2 contains a broad error-handling matrix.

### Missing fields / malformed text / uncertain OCR

Merchant should see:

- a clear, friendly request to retry or provide missing information;
- an example of acceptable input where helpful.

System should record:

- parsing/system error details;
- processing status;
- enough evidence for diagnosis without falsely claiming success.

### Unreadable document / failed OCR

Merchant should see:

- that the document could not be read safely;
- request for clearer image/manual input;
- no false transaction confirmation.

System should record:

- failed processing status;
- document/file reference where appropriate;
- processing error.

### Duplicate transaction / bank evidence

Historical bank-sync behaviour compares new bank evidence with recent manual records.

If a match exists:

- do not create a duplicate financial transaction;
- attach verification/evidence status to the existing record.

The exact historical fuzzy matching algorithm is implementation provenance.

### Duplicate import

The deeper product rule is:

- identify duplicate rows/files;
- do not silently create duplicates;
- show the merchant what was accepted, skipped, conflicted or failed.

### Conflicting rows

Do not silently choose one value.

Generate a conflict state and ask for review/confirmation.

### Unsupported file

Merchant should receive a simple explanation of supported alternatives rather than a generic failure.

### Failed upload

A failed file upload must not produce a record claiming that storage or processing succeeded.

Current P00 explicitly requires reconciliation between metadata and object-storage state.

### Spam/high-frequency input

Historical V2.2 includes hard numeric rate limits and temporary muting.

The current principle to preserve is abuse protection and operational sustainability, not necessarily the historical exact threshold.

### Complex support/admin issue

If automated support cannot resolve the issue:

- create/route a support request;
- keep ordinary business functions active where safe;
- communicate status honestly.

## Ground Zero evidence

Ground Zero strongly supports strict fail-closed behaviour for uncertain consequential writes.

Its durable principle is:

> Ambiguity must stop the affected write, not corrupt the merchant's business memory.

However, several Ground Zero recovery mechanisms overuse security quarantine for ordinary data ambiguity.

Current architecture should distinguish:

- business clarification state;
- import/document processing failure;
- technical system error;
- actual security event.

## Current reconciliation

### PRESERVE — STILL CURRENT

- no guessing;
- no silent partial success;
- no duplicate financial records;
- preview conflicts;
- row-level error visibility for imports;
- failed uploads must not look successful;
- merchant receives actionable recovery guidance;
- support escalation does not unnecessarily stop bookkeeping;
- evidence/audit trail retained.

### PRESERVE + EVOLVE

- historical rate limiting should become current fair-usage/abuse protection tuned to genuine merchant behaviour;
- ordinary ambiguity should not be mislabeled as a security threat;
- direct overwrite corrections should become auditable corrections.

### HISTORICAL IMPLEMENTATION DETAIL

- fixed >5 messages/60 seconds → 10 minute mute;
- exact OCR confidence threshold;
- exact provider/model implementation;
- exact timeout numbers.

---

# 13. Section 2 — Cross-Feature Findings

Section 2 reveals several shared foundations that must not be duplicated when features are implemented.

## Shared Business Memory

Used by:

- Ledger;
- Credit;
- Receipt Intelligence;
- Receipt Cabinet;
- Ask CFO;
- Daily Intelligence;
- bank/payment verification;
- reports/exports.

## Shared Document Intelligence

Used by:

- receipts;
- stock imports;
- supplier records;
- customer credit imports;
- employee lists;
- duty rosters;
- order papers;
- compliance/business documents.

## Shared Correction / Confirmation Pattern

Repeated product pattern:

`interpret → show what Smart Business understood → user confirms/corrects → commit auditable truth`.

This pattern should be reusable across features.

## Shared Identity / Permissions

Documents and transactions must resolve:

- business/merchant;
- actor/user;
- role;
- permission;
- related customer/supplier/employee identity where applicable.

## Shared Failure Model

A cross-feature failure model is emerging:

- do not guess;
- preserve input/evidence safely;
- stop only the unsafe/uncertain write;
- tell the user what happened;
- offer the shortest recovery path;
- keep unrelated functions available;
- record technical evidence;
- escalate only when necessary.

This should later influence final feature contracts and the shared execution architecture.

---

# 14. Major Historical Evolution / Conflict Register

## E2-01 — Transaction type compression

Historical NotebookLM material sometimes uses only income/expense.

Ground Zero and current architecture support income/expense/credit/repayment.

**Current direction:** preserve four-state business memory.

## E2-02 — Credit hard blocker

Historical Ground Zero/V2.2 includes a hard Udhar limit blocker.

Current Product Truth explicitly replaces this with warning/awareness and owner decision ownership.

**Status:** historical blocker superseded.

## E2-03 — Direct correction overwrite

Ground Zero UX supports instant conversational correction.

Historical implementation performs direct row update.

Current governance requires traceability/auditability.

**Status:** UX preserved; storage mutation pattern must evolve.

## E2-04 — Receipt auto-commit

Some historical descriptions insert OCR results immediately.

Current Source 12 requires preview/confirmation for uncertain/consequential document interpretation.

**Status:** auto-commit superseded except separately approved deterministic workflows.

## E2-05 — Public document URL assumptions

Historical material often uses public Supabase links passed to vision models.

Current privacy architecture requires controlled merchant file access.

**Status:** historical implementation detail; current secure storage rules prevail.

## E2-06 — Security quarantine overreach

Ground Zero sometimes puts ambiguous/unreadable business input into security quarantine.

Current architecture separates system errors, business records and security events.

**Status:** strict no-guess behaviour preserved; classification must evolve.

## E2-07 — Voice packaging

Historical V2.2 treats Malayalam voice replies as a paid add-on.

Current Product Truth includes Basic Voice in Ledger/Manager and Voice Plus for deeper premium conversation.

**Status:** historical packaging superseded.

## E2-08 — Historical exact performance claims

Ground Zero and NotebookLM contain claims such as sub-2ms queries, under-1.5-second transcription, 100%/99.8% precision.

Current governance treats speed as a target to verify and forbids weakening correctness/security for apparent speed.

**Status:** preserve fast-experience intent; reject unverified absolute guarantees.

---

# 15. Feature-Library Impact After Final Reconciliation

Section 2 provides substantial evidence for future deepening of:

- `Ledger / Business Memory`
- `Receipt Intelligence`
- `Receipt Cabinet`
- `Universal Document Intelligence`
- `Smart Credit Awareness`
- `Payment Verification / Bank Reconciliation`
- shared `Correction / Confirmation` behaviour
- shared `Import / Document Failure` behaviour

Do not finalize these feature contracts solely from Section 2 if later sections contain relevant cross-feature evidence.

The final feature files should preserve both:

- rich Founder-origin workflow depth;
- later/current human-authority, security, auditability and reuse corrections.

---

# 16. Continuity Handover State

If Mission Control changes now, the successor should know:

- Section 1 of 7 is already preserved in this workspace.
- Section 2 of 7 is now preserved in this file.
- Questions 1–18 have therefore been extracted into temporary durable repository records.
- Sections 3–7 remain incomplete.
- Do not restart Questions 1–18.
- Do not yet delete this temporary workspace.
- Do not yet declare the Feature Definition Library fully reconciled.
- Current Product Truth remains higher authority than historical technical implementation details.
- The Ground Zero source is historically valuable but may include early unsafe/autonomous behaviours later corrected by Founder decisions.

---

# 17. Next Section

## Section 3 of 7 — Questions 19–34

Focus:

- Ask CFO detailed conversations and reasoning;
- factual vs advisory responses;
- incomplete/stale/conflicting data;
- Ask CFO voice and follow-up;
- Smart Reminder complete behaviour;
- reminder creation from other features;
- reminder vs automation boundary;
- owner-delegated automation;
- Daily Intelligence 7:00 AM / 10:30 AM / 10:00 PM content;
- Ledger vs Manager Daily Intelligence;
- alert/noise control;
- Daily Intelligence failure/inactivity behaviour.

Status:

**READY FOR FOUNDER Q&A COLLECTION — NotebookLM + Ground Zero**
