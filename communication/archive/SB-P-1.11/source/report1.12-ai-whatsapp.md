# SB-P-1.11 — EIS Refinement AI and WhatsApp Verification

```text
MISSION: SB-P-1.11 — Product Catalog & Pricing
VERIFICATION STAGE: EIS Refinement Verification
SPECIALIST SCOPE: AI and WhatsApp Architecture
SYNCHRONIZED BASE: 935ccaffe8394467444c20b369755e14bb67fccc
DISPOSITION: PARTIALLY VERIFIED — REFINEMENT REQUIRED
IMPLEMENTATION AUTHORITY: NONE
```

## 1. Verification Scope

This report verifies only the AI, WhatsApp, voice, photo, conversational-channel, confirmation, permission-propagation, retry, idempotency, uncertainty, and failure-handling refinements in:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `communication/live/report1.10.md`
- `communication/live/report1.10-ai-whatsapp.md`
- `communication/live/report1.11.md`

The refined EIS, Product Blueprint, Founder Product Decision Record, and all prior reports remain read-only.

## 2. Verification Summary

The refined EIS materially resolves most accepted AI and WhatsApp findings. It now correctly:

- removes catalog-owned intent taxonomy authority;
- removes the unsupported receipt-pipeline-to-product-photo generalization;
- preserves shared conversational-engine ownership;
- requires verified sender and canonical Smart Business identity/business resolution;
- revalidates current permissions at confirmation and command execution;
- prevents service-role access from becoming merchant authority;
- introduces pending-action and D-068 preview-token contracts;
- handles expiry, stale state, revoked permission, and reply-delivery failure;
- requires field-level provenance and uncertainty;
- prohibits invention of consequential catalog values and legal tax classification;
- requires durable text previews and results;
- preserves Owner-only voice-output rules;
- keeps AI as assistant rather than authority.

Two accepted areas remain incomplete enough to prevent this specialist from recommending EIS Lock:

1. confirmation-event deduplication and command-idempotency binding are not fully closed;
2. pre-command media/model failures are incorrectly classified through the command `UNKNOWN_OUTCOME` contract.

## 3. Stage 10 Finding Verification Matrix

| Original finding | Severity | Refined EIS section and subject | Exact correction found | Verification result | Remaining risk | Product Truth impact | Required next action |
|---|---|---|---|---|---|---|---|
| AIW-001 | HIGH | §15 — Removed catalog-owned intent taxonomy | The normative `catalog_update` taxonomy and named sub-intents are removed; the future shared-engine mission retains classifier and taxonomy authority. | `RESOLVED` | None identified. | None | No further action. |
| AIW-002 | HIGH | §15 — Removed media-pipeline generalization | The EIS no longer treats Source 04's receipt OCR pipeline as the product-photo architecture and defers model, OCR, storage, and media lifecycle design to the shared engine. | `RESOLVED` | None identified. | None | No further action. |
| AIW-003 | HIGH | §5.10, §11, §15 — pending actions, webhook deduplication, idempotency | A server-created pending action binds business, actor, action type, normalized payload fingerprint, channel, origin event, preview text, expiry, and optional D-068 preview token. Underlying commands use durable idempotency and same-key reconciliation. | `PARTIALLY RESOLVED` | The table has one `originating_channel_event_id`, representing the event that created the pending action. The EIS then claims the later confirmation webhook is deduplicated by the same uniqueness constraint, but the confirmation is a different event and no `confirming_channel_event_id`, confirmation-event receipt record, or explicit pending-action-to-command idempotency-key derivation is specified. Duplicate confirmation delivery is likely contained by consumed-state and command idempotency, but the binding is not implementation-ready or independently auditable. | None | Specify durable confirmation-event deduplication and state that one command idempotency key is generated and stored for the pending action, reused unchanged for every confirmation retry and reconciliation attempt. |
| AIW-004 | BLOCKING | §5.10, §15 — confirmation contract | Pending actions bind actor, business, action, payload fingerprint, preview, and expiry; confirmation rechecks permission and current state; D-068 passes through server-authoritative preview-token compare-and-commit. | `PARTIALLY RESOLVED` | The phrase that the confirming actor must match “or is otherwise separately authorized” leaves an undefined authority-transfer path. It weakens the required same-decision/same-authorizer binding and does not define who may confirm another person's preview, under which permission, or how that substitution is shown and audited. | None | Require the same canonical actor to confirm by default. Any delegated confirmer workflow must be separately governed and explicitly specified; otherwise reject actor mismatch and require a new preview under the new actor. |
| AIW-005 | HIGH | §7, §8, §15 — identity and current permission revalidation | The channel executor proves only trusted backend origin; canonical identity/business membership and action-specific permission are re-derived from live server state at pending-action creation and confirmation. Manager capability remains dependent on the shared permission engine; temporary delivery is Owner-only. | `RESOLVED` | Shared permission engine remains a transparent cross-mission dependency, not an EIS defect. | None | Preserve Phase 3 gating until the dependency is implemented and verified. |
| AIW-006 | MEDIUM | §15 — AI assistance boundaries | Consequential fields carry field-level provenance/confidence. Product identity, unit, price, tax, cost, identifiers, and link targets cannot be invented; uncertain fields remain blank or are requested. Automatic legal tax classification is prohibited. | `RESOLVED` | None identified. | None | No further action. |
| AIW-007 | MEDIUM | §15 — voice response boundaries | Every consequential preview and result has durable text. Voice output is Owner-only and requires enabled capability and preference; other roles receive text only. Protected cost information cannot be spoken to unauthorized users. | `RESOLVED` | None identified. | None | No further action. |
| AIW-008 | MEDIUM | §11, §15 — failure handling and `UNKNOWN_OUTCOME` | Command-call timeout uses same-key retry or outcome lookup; success is not acknowledged before committed result; reply-delivery failure never re-executes the write; unresolved failures are logged and escalated. | `PARTIALLY RESOLVED` | Section 15 groups media-download failure, transcription/OCR failure, and model timeout with command-call timeout and says all trigger command `UNKNOWN_OUTCOME` reconciliation. Failures occurring before command invocation cannot have committed a catalog write and should be confirmed preprocessing failures, not unknown command outcomes. Applying same-key command reconciliation to them is conceptually wrong and may create misleading status or unintended first execution. | None | Separate pre-command processing failures from ambiguous command outcomes. Only failures after command dispatch with unknown commit status may enter `UNKNOWN_OUTCOME`; earlier failures must report no authoritative write was attempted and allow safe retry of processing. |
| AIW-009 | LOW | §15 — deterministic checks before expensive processing | Identity, role, permission, subscription, safety, and business-relevance checks occur before model, transcription, or vision use where deterministic resolution is possible. | `RESOLVED` | “Unrecognized command” must not be used to bypass language understanding before intent processing, but the stated rule is acceptable as a deterministic boundary. | None | No further action. |

## 4. Mandatory AI and Conversational Verification Items

| Verification item | Result | Evidence and disposition |
|---|---|---|
| Removal of catalog-owned intent taxonomy | `RESOLVED` | §15 explicitly removes the normative taxonomy and preserves future shared-engine authority. |
| Removal of product-photo pipeline invention | `RESOLVED` | §15 removes the receipt-pipeline generalization and defines only the required capability boundary. |
| Sender verification and canonical identity/business resolution | `RESOLVED` | §15 requires verified channel event and sender plus canonical server-side identity and membership resolution. |
| Current permission revalidation | `RESOLVED` | §7 and §15 require current action-specific checks at pending-action creation, confirmation, and underlying command execution. |
| Same-action binding across preview and confirmation | `PARTIALLY RESOLVED` | Action type, payload fingerprint, preview token/text, business, actor, and expiry are stored, but the undefined alternate-confirmer path must be removed or separately governed. |
| Expiry, cancellation, stale state, and duplicate webhook handling | `PARTIALLY RESOLVED` | Expiry, stale state, consumed state, and cancellation are coherent. Initial-event deduplication is specified, but later confirmation-event deduplication is not represented by a distinct durable event key. |
| Same-key retry and `UNKNOWN_OUTCOME` reconciliation | `PARTIALLY RESOLVED` | The generic command contract is strong, but the pending action does not explicitly persist the command key, and preprocessing failures are incorrectly sent through command-outcome reconciliation. |
| Service-role misuse prevention | `RESOLVED` | Dedicated no-login `catalog_channel_executor` has only narrow function execution and no blanket service-role authority. |
| Field-level provenance and uncertainty | `RESOLVED` | §15 requires per-field provenance/confidence and explicit merchant input for uncertain consequential fields. |
| No invented tax, price, unit, cost, identifier, or link target | `RESOLVED` | Explicitly prohibited in §15. |
| Durable text representation | `RESOLVED` | `preview_text` and durable text result requirements are explicit. |
| Owner-only voice-output boundary | `RESOLVED` | Explicitly preserved in §15. |
| Failure and reply-delivery behavior | `PARTIALLY RESOLVED` | Reply-delivery behavior is safe; command ambiguity is safe; preprocessing failure classification needs correction. |
| AI Assistant, Not AI Judge | `RESOLVED` | The refined EIS preserves human confirmation, uncertainty disclosure, no invented authority, and no autonomous consequential writes. |

## 5. Unresolved Risks

### AIWV-001 — Confirmation Event and Command-Key Binding

**Severity:** `HIGH`

The refined EIS does not explicitly define a durable record for the confirming webhook event or show how the command idempotency key is generated from and stored against the pending action. The same logical confirmation must reuse exactly one command key across webhook redelivery, backend retry, timeout reconciliation, and outcome lookup.

**Required refinement:** Add a confirmation-event receipt or equivalent durable uniqueness boundary and persist the logical command idempotency key on the pending action before first command dispatch. A different confirmation event must not create a different logical write key for the same pending action.

### AIWV-002 — Undefined Alternate Confirmer

**Severity:** `HIGH`

The phrase “confirming actor matches (or is otherwise separately authorized)” creates an undefined delegation path. Authorization to perform an action is not automatically authorization to confirm another person's reviewed preview.

**Required refinement:** Require the same canonical actor to confirm. If actor substitution is desired later, it requires a separately governed workflow with a fresh preview, explicit delegation rules, and complete audit provenance.

### AIWV-003 — Incorrect `UNKNOWN_OUTCOME` Scope

**Severity:** `HIGH`

Media download, transcription/OCR, and model failures occur before an authoritative catalog command is dispatched. They are confirmed processing failures with no catalog commit possibility. Only command-call or transport failure after dispatch may have unknown commit state.

**Required refinement:** Split the failure model into:

1. pre-command processing failure — no authoritative write attempted;
2. confirmed command rejection or rollback — terminal non-commit result;
3. post-dispatch ambiguous transport failure — `UNKNOWN_OUTCOME`, same-key reconciliation required;
4. reply-delivery failure after terminal result — retry notification only, never the command.

## 6. Product Truth Assessment

No unresolved item requires a new Founder product decision or changes D-001 through D-068.

The remaining issues are engineering precision required to implement already-approved merchant confirmation, idempotency, failure recovery, and human decision ownership safely.

## 7. Specialist Disposition

```text
AI AND WHATSAPP REFINEMENT VERIFICATION: PARTIALLY VERIFIED — REFINEMENT REQUIRED
RESOLVED FINDINGS: AIW-001, AIW-002, AIW-005, AIW-006, AIW-007, AIW-009
PARTIALLY RESOLVED FINDINGS: AIW-003, AIW-004, AIW-008
UNRESOLVED FINDINGS: NONE
NEW BLOCKING ISSUES: NONE
NEW HIGH RISKS: AIWV-001, AIWV-002, AIWV-003
FOUNDER DECISION REQUIRED: NO
PRODUCT TRUTH CHANGE REQUIRED: NO
EIS LOCK RECOMMENDED: NO
IMPLEMENTATION AUTHORITY: NONE
```

A narrow EIS refinement is required before the AI and WhatsApp specialist can verify readiness for Founder EIS review.

## 8. Repository Evidence

```text
Repository: SmartBusinessv1/smart-business
Synchronized base commit: 935ccaffe8394467444c20b369755e14bb67fccc
Branch: mission/SB-P-1.11-eis-verification-ai-whatsapp
Changed file: communication/live/report1.12-ai-whatsapp.md
Pull request: recorded after creation
Commit SHA: recorded after creation
Self-approval: NO
Self-merge: NO
```

## 9. Scope Confirmation

- Refined EIS modified: **NO**
- Product Blueprint modified: **NO**
- Founder Product Decision Record modified: **NO**
- Prior report modified: **NO**
- Prompt, webhook, media pipeline, Edge Function, code, test, Supabase, Lovable, infrastructure, deployment, production, or governance source modified: **NO**
- EIS approved or locked: **NO**
- Pull request self-approved or self-merged: **NO**
