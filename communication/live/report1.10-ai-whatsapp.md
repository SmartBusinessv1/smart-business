# SB-P-1.11 — Stage 10 AI and WhatsApp Architecture Review

```text
MISSION: SB-P-1.11 — Product Catalog & Pricing
REVIEW STAGE: Source 18 Stage 10 — EIS Review
SPECIALIST SCOPE: Section 4.2 — AI and WhatsApp Architecture Review
SYNCHRONIZED BASE: b98fb214e9a0dd86fed5c80e737dd89ba48a9447
DISPOSITION: REFINEMENT REQUIRED
IMPLEMENTATION AUTHORITY: NONE
```

## 1. Review Scope

This report reviews only the AI, WhatsApp, voice, photo, conversational-channel, confirmation, permission-propagation, retry, idempotency, and failure-handling aspects of:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- locked Blueprint `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- Founder Decisions D-001–D-068
- approved Sources 04 and 05

The Product Blueprint, Founder Product Decision Record, and draft EIS remain read-only.

## 2. Alignment Summary

The draft EIS is materially aligned with the locked Product Blueprint on the following points:

- conversational channels are adapters over one server-authoritative command layer;
- the shared conversational engine is a dependency and is not implemented by this mission;
- structured preview and explicit merchant confirmation precede consequential writes;
- low-confidence interpretation requires clarification rather than guessing;
- sender identity, business context, role, and permission resolution occur before catalog intent processing;
- conversational writes reuse the same permission-scoped catalog commands as dashboard and import paths;
- AI remains an assistant and does not become merchant authority;
- catalog-specific webhooks, prompts, media pipelines, or parallel write logic are prohibited before the shared engine exists.

These are consistent with D-053, D-054, Sources 04 and 05, and the channel-independence rules in the active Product Execution and Release Framework.

## 3. Findings

### AIW-001

- **Severity:** HIGH
- **EIS section and subject:** Section 14 — Supported Catalog Intents
- **Blueprint / Founder trace:** Blueprint §2 AI and Conversation Domain; §5 AI Assistant, Not AI Judge; D-053 and D-054
- **Governance evidence:** Source 05 §3 defines the approved intent taxonomy and requires clarification when confidence is low. Source 17 prohibits implementation sources from inventing unsupported behaviour.
- **Finding type:** Missing implementation-boundary precision / possible behaviour invention
- **Description:** The EIS states that the shared engine will use a new `catalog_update` intent family with create-product, edit-price, edit-tax, search/find-product, and link/unlink sub-intents. The locked Blueprint authorizes the workflows, but Sources 04 and 05 do not authorize this exact taxonomy or naming. As written, the EIS moves from a required capability contract into defining shared-engine behaviour owned outside SB-P-1.11.
- **Risk if unchanged:** A future conversational-engine mission may become constrained by catalog-specific taxonomy created inside this feature EIS, weakening shared-engine ownership and encouraging feature-specific classifier design.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** Replace the normative taxonomy with an implementation-neutral contract: the shared engine must map authorized catalog requests to approved catalog commands and may extend its governed taxonomy during the shared-engine mission. Keep examples non-binding and explicitly subordinate to that future mission.
- **Product Truth impact:** None. This preserves D-053/D-054 without changing approved user behaviour.

### AIW-002

- **Severity:** HIGH
- **EIS section and subject:** Section 14 — Media-Handling Boundary
- **Blueprint / Founder trace:** Blueprint §5 AI Assistant, Not AI Judge; §7 Guided Multichannel Experience; D-028, D-053, D-054
- **Governance evidence:** Source 04 §5 explicitly defines a receipt-image Vision/OCR pipeline. Source 05 §5 permits receipts, invoices, and stock documents after safety and business-relevance checks.
- **Finding type:** Actual source-boundary overreach
- **Description:** The EIS says the approved receipt Vision pipeline is “generalized to product images” and that Source 05 Vision Safety Rules apply “identically.” The Blueprint approves photo-assisted product creation, but Sources 04 and 05 do not define the technical interpretation pipeline for shelf, label, or packaging images. Product-image understanding may require OCR, vision extraction, image storage, or no permanent storage depending on the future shared-engine design.
- **Risk if unchanged:** The EIS may incorrectly lock a receipt-specific OCR pipeline as the implementation authority for product photos and may imply storage behaviour not yet governed.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** State only the approved outcome and boundary: the future shared engine must safety-check and business-relevance-check photo input, extract candidate catalog fields through an approved multimodal process, show uncertainty, and require preview plus confirmation. Defer the exact OCR/vision model, storage timing, and media lifecycle to the shared conversational-engine and storage specifications.
- **Product Truth impact:** None. Photo-assisted catalog workflows remain Build Now.

### AIW-003

- **Severity:** HIGH
- **EIS section and subject:** Section 14 — Webhook Idempotency and Retries
- **Blueprint / Founder trace:** D-053, D-054, D-064; Blueprint §5 Human Decision Ownership and Business Continuity
- **Governance evidence:** Source 04 defines inbound webhook routing but does not define retry/idempotency mechanics. P00 WhatsApp profile requires signature validation, safe retry handling, idempotency, duplicate prevention, and failure logging.
- **Finding type:** Missing implementation detail
- **Description:** The EIS proposes deriving a catalog command idempotency key from the inbound WhatsApp message ID “or equivalent.” This is insufficient for multi-turn confirmation. The initial merchant message, preview response, and later confirmation are distinct messages. A key derived only from the initiating message may not uniquely bind the final confirmed command, while a key derived only from the confirmation message may fail to bind it to the reviewed preview and proposed payload.
- **Risk if unchanged:** Retries, duplicate confirmations, stale confirmations, or confirmation of a changed preview could create incorrect or duplicated authoritative writes.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** Require a server-created pending-action or preview identifier that binds business, actor, permissions, normalized command payload, preview version/hash, expiry, and originating message correlation. The final confirmation command must use a durable idempotency key tied to that pending action and confirmation event. Duplicate webhook delivery must return the original result without re-execution.
- **Product Truth impact:** None. This strengthens the approved confirmation workflow.

### AIW-004

- **Severity:** BLOCKING
- **EIS section and subject:** Section 14 — Confirmation requirements and “same conversation turn or explicitly confirmed follow-up turn”
- **Blueprint / Founder trace:** D-054 and D-068
- **Governance evidence:** Source 05 requires clarification when uncertain and states that AI does not create permission. The locked Blueprint requires structured preview and explicit confirmation before permitted catalog changes.
- **Finding type:** Missing authoritative confirmation contract
- **Description:** The EIS requires confirmation but does not specify how the system verifies that a confirmation belongs to the exact preview, remains current, is issued by the same authorized identity, and still passes permission and business-state validation at execution time. “Same conversation turn” is not a safe authorization primitive, especially across webhook retries, delayed messages, channel continuity, manager permission changes, product edits, link-state changes, or scheduled-price changes.
- **Risk if unchanged:** A stale or ambiguous “yes” could authorize a different, expired, or no-longer-permitted price, tax, link, archive, delete, or cost change. This directly affects merchant decision ownership and authoritative financial writes.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** Add a normative confirmation contract: confirmation references a unique pending-action ID; preview includes exact old/new values and consequences; pending action expires; actor and business must match; permission and current state are revalidated inside the authoritative command; any payload/state drift invalidates confirmation and requires a new preview; cancellation, expiry, ambiguity, validation failure, or save failure commits nothing.
- **Product Truth impact:** None. This is required to faithfully implement D-054 and D-068.

### AIW-005

- **Severity:** HIGH
- **EIS section and subject:** Section 14 — Permission and Business-Context Resolution
- **Blueprint / Founder trace:** D-033–D-035, D-048–D-049, D-054
- **Governance evidence:** Source 04 identity router distinguishes Owner, Employee, Supplier, and Unknown. The locked Blueprint also authorizes explicitly permissioned Managers and sale-authorized Employees. Source 12 requires identical permission enforcement across channels.
- **Finding type:** Cross-mission dependency / missing permission-propagation detail
- **Description:** The EIS says the identity router supplies an already-resolved role and permission context, but it does not require permission revalidation at command execution, nor does it reconcile the legacy Source 04 role order with the Blueprint’s explicit Manager permissions. The conversational adapter must not trust a previously resolved or prompt-provided permission snapshot as authoritative.
- **Risk if unchanged:** Manager permissions could be omitted, stale permissions could survive revocation, or prompt-layer role data could be treated as authorization. This could expose cost, history, inventory quantity, or restricted catalog controls.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** Require the shared identity layer to resolve the canonical Smart Business user/business identity, including Manager where applicable, while every read and write command independently enforces current server-side permissions. Conversational context may carry identity references but never final authorization. Unknown, Supplier, Customer, or unauthorized Employee catalog-management requests must be rejected before expensive AI/media processing where deterministically possible.
- **Product Truth impact:** None. This preserves the locked permission model.

### AIW-006

- **Severity:** MEDIUM
- **EIS section and subject:** Section 14 — AI Assistant, Not AI Judge and interpretation limits
- **Blueprint / Founder trace:** Blueprint §5; D-017–D-019, D-036, D-053–D-054
- **Governance evidence:** Sources 04 and 05 require intent-first handling, uncertainty disclosure, safety checks, and human authority.
- **Finding type:** Missing implementation detail
- **Description:** The EIS correctly prohibits autonomous writes but does not explicitly prohibit AI from inventing missing product names, units, prices, tax rates, cost values, identifiers, link targets, or legal tax classification during extraction. Tax and reference-cost fields are financially and legally sensitive and require clearer fact/assumption separation.
- **Risk if unchanged:** A fluent preview could present inferred financial or tax data as extracted fact, pressuring the merchant into confirming an AI-generated value.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** Require field-level provenance and confidence in the preview. Missing consequential fields remain blank or are requested from the merchant. The assistant must label interpreted candidates, never auto-classify legal tax treatment, and never recommend confirmation through manipulative or judgmental language.
- **Product Truth impact:** None.

### AIW-007

- **Severity:** MEDIUM
- **EIS section and subject:** Section 14 — Voice behaviour and response channel
- **Blueprint / Founder trace:** D-053–D-054; Product Truth Basic Voice Assistant; role permission boundaries
- **Governance evidence:** Source 04 §7 and Source 05 §7 allow voice replies only for Owners when the voice capability and preference are enabled; Employees and Suppliers receive text replies only.
- **Finding type:** Missing implementation detail
- **Description:** The EIS treats voice as an input channel but does not restate the role-based reply boundary or require text fallback. This is relevant because confirmations may contain price, tax, cost, or inventory-link consequences that must remain reviewable.
- **Risk if unchanged:** A future implementation may send voice confirmations to Managers or Employees, expose sensitive information audibly, or omit the durable text preview needed for consequential review.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** Require every consequential preview and result to have a durable text representation. Voice replies remain Owner-only and only when enabled; Managers, Employees, Suppliers, and Customers receive text responses unless future Product Truth explicitly changes that rule. Sensitive cost information must never be spoken to an unauthorized user.
- **Product Truth impact:** None.

### AIW-008

- **Severity:** MEDIUM
- **EIS section and subject:** Section 14 — Failure handling and user recovery
- **Blueprint / Founder trace:** D-053–D-054, D-068; Blueprint §5 Business Continuity First
- **Governance evidence:** Source 04 requires failure-safe support escalation and continued business operations. P00 requires webhook failure logging, retry safety, duplicate prevention, and recovery ownership.
- **Finding type:** Missing implementation detail
- **Description:** The EIS states that failure results in no committed transaction but does not define conversational failure states for media download failure, transcription/OCR failure, model timeout, command timeout after uncertain execution, reply-delivery failure, or expired confirmation.
- **Risk if unchanged:** The assistant could incorrectly report failure after a successful write, report success before storage confirmation, duplicate a write on retry, or leave the merchant uncertain about whether a price or product change became authoritative.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** Define channel-level result semantics: never acknowledge success until the authoritative command returns a committed result; uncertain command outcomes require status lookup by idempotency/pending-action ID before retry; reply-delivery failure must not re-execute the command; processing failures produce a clear text recovery message and preserve the pending action only when safe; unresolved failures are logged and escalated without blocking unrelated business functions.
- **Product Truth impact:** None.

### AIW-009

- **Severity:** LOW
- **EIS section and subject:** Section 14 — FAQ and cost-protection sequencing
- **Blueprint / Founder trace:** General Smart Business operating sustainability; no catalog Product Truth change
- **Governance evidence:** Sources 04 and 05 require role checks, safety checks, and FAQ checks before expensive AI processing where applicable.
- **Finding type:** Scope note / optional improvement
- **Description:** The catalog contract does not state that deterministic help, permission denial, unsupported-role, or unsupported-feature responses should avoid model/media processing.
- **Risk if unchanged:** Unnecessary AI and vision calls could increase latency and operating cost and expose more data than required.
- **Required disposition:** REFINEMENT REQUIRED
- **Recommended refinement:** Add a non-product behavioural boundary: perform identity, role, permission, subscription, safety, business relevance, and deterministic help checks before model, transcription, or vision calls wherever the request can be resolved without them.
- **Product Truth impact:** None.

## 4. Mandatory Open Parameters — Specialist Disposition

| Parameter | Disposition | AI / WhatsApp review rationale |
|---|---|---|
| Multilingual similarity algorithm and threshold | REFINEMENT REQUIRED | `pg_trgm` may be acceptable for same-script typo assistance, but it does not satisfy cross-script Malayalam/Manglish interpretation. The EIS must avoid implying one similarity mechanism covers both deterministic catalog search and AI-assisted conversational interpretation. Any AI suggestion must remain labeled, business-scoped, non-authoritative, and confirmation-dependent. |
| CSV/Excel maximum rows and file size | ACCEPTED AS WRITTEN | The proposed values are explicitly reviewable operational parameters and do not alter conversational Product Truth. |
| Final index selection and query-plan validation | ACCEPTED AS WRITTEN | Outside this specialist’s deciding domain; no AI/WhatsApp conflict identified. |
| Scheduled-price polling interval | ACCEPTED AS WRITTEN | Outside this specialist’s deciding domain; conversational responses must display the authoritative stored state and not promise activation more precisely than the backend guarantees. |
| Shared permission-engine sequencing and ownership | REFINEMENT REQUIRED | Safe only if conversational adapters remain unavailable for non-Owner catalog actions until the shared permission engine exists and every command revalidates current permission server-side. |
| Shared conversational-engine sequencing and ownership | REFINEMENT REQUIRED | The EIS correctly defers implementation, but it must remove catalog-owned taxonomy/media architecture and define only the contract consumed from the future shared engine. |
| Inventory-link removal without D-068 price reconfirmation | ACCEPTED AS WRITTEN | Removal writes no new unit or price under the locked Blueprint. Conversational execution still requires structured preview, explicit confirmation, current-state validation, and no-write-on-failure. |

## 5. Product Truth Impact Assessment

No finding requires a new Founder product decision or changes D-001–D-068.

The required refinements are engineering controls needed to implement the already-approved behaviours safely:

- guided conversational product creation and search;
- explicit confirmation before permitted catalog changes;
- AI uncertainty handling;
- merchant authority;
- permission-scoped access;
- channel independence;
- no silent financial reinterpretation;
- failure-safe, idempotent authoritative writes.

## 6. Specialist Disposition

```text
AI AND WHATSAPP SPECIALIST DISPOSITION: REFINEMENT REQUIRED
BLOCKING FINDINGS: AIW-004
HIGH FINDINGS: AIW-001, AIW-002, AIW-003, AIW-005
MEDIUM FINDINGS: AIW-006, AIW-007, AIW-008
LOW FINDINGS: AIW-009
FOUNDER DECISION REQUIRED: NO
PRODUCT TRUTH CHANGE REQUIRED: NO
EIS LOCK RECOMMENDED: NO
IMPLEMENTATION AUTHORITY: NONE
```

The EIS should return to Claude Code only after Mission Control accepts the Stage 10 consolidated findings and issues a separate, scope-limited EIS refinement instruction.

## 7. Repository Evidence

```text
Repository: SmartBusinessv1/smart-business
Synchronized base commit: b98fb214e9a0dd86fed5c80e737dd89ba48a9447
Branch: mission/SB-P-1.11-stage10-ai-whatsapp-review
Changed file: communication/live/report1.10-ai-whatsapp.md
Protected artifacts changed: NONE
Application, database, webhook, prompt, Edge Function, infrastructure, deployment, production, or governance changes: NONE
Self-approval: NO
Self-merge: NO
```
