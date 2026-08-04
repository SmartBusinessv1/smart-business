# SMART BUSINESS MISSION CONTROL

# SB-P-1.11 — Stage 10 Frontend and Lovable Architecture Review

## Review Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.11 — Product Catalog & Pricing |
| Stage | Source 18 Stage 10 — EIS Specialist Review |
| Assigned scope | Section 4.4 — Frontend and Lovable Architecture Review |
| Repository | `SmartBusinessv1/smart-business` |
| Synchronized base commit | `b98fb214e9a0dd86fed5c80e737dd89ba48a9447` |
| Branch | `mission/SB-P-1.11-stage10-lovable-frontend-review` |
| Report path | `communication/live/report1.10-lovable-frontend.md` |
| Product Blueprint | Read-only; unchanged |
| Founder Product Decision Record | Read-only; unchanged |
| Draft EIS | Read-only; unchanged |
| Implementation authority | None |
| Specialist disposition | `REFINEMENT REQUIRED` |

## 1. Review Boundary

This review assesses whether the draft EIS gives Lovable and the frontend a safe, clear, accessible, merchant-respectful contract without transferring business authority from the backend to the client.

The review covers:

- frontend versus backend authority;
- protected command use;
- D-068 preview and confirmation;
- cancellation, incomplete confirmation, validation failure, and save failure;
- loading, retry, duplicate-submission, and stale-data behaviour;
- multilingual entry, search, and uncertain-match presentation;
- CSV/Excel import preview and correction;
- accessibility, dignity, simplicity, and merchant clarity;
- phased delivery while shared permission and conversational engines remain unavailable.

No EIS, Blueprint, Founder decision, code, test, database, migration, infrastructure, deployment, or governance file was modified.

## 2. Overall Assessment

The EIS establishes the correct high-level architecture:

- the frontend is a presentation and interaction layer, not the source of product, price, tax, cost, permission, inventory-link, or audit truth;
- every protected write routes through a server-authoritative command;
- the D-068 link/unit/price operation is one atomic backend transaction;
- cost visibility is omitted server-side rather than trusted to frontend hiding;
- Manager/Employee UI is gated until the shared permission engine exists;
- conversational catalog work is gated until the shared conversational engine exists;
- import uses staged preview and ordinary protected write commands rather than a second mutation path.

These are strong and implementation-appropriate boundaries.

However, the frontend contract is not yet sufficiently deterministic for a locked EIS. Several critical interaction states are named but not fully specified. The largest gap is that D-068 defines the final write command but does not define a server-authoritative preview contract. Without that contract, Lovable could be forced to assemble the preview by combining client-side reads and calculations, weakening stale-state protection and risking a mismatch between what the merchant confirms and what the command finally evaluates.

The EIS therefore requires refinement before lock. No new Founder product decision is required for the findings below.

---

# 3. Findings Register

## LF-01 — D-068 lacks a server-authoritative preview contract

- **Severity:** `HIGH`
- **Type:** Missing implementation detail
- **EIS subject:** Sections 8, 9, 15, and 16 — inventory-link preview and final command
- **Blueprint / Founder trace:** D-005, D-047, D-048, D-054, D-068
- **Evidence:** D-068 requires the preview to show current link/unit/price, proposed link/new unit, and the price requiring confirmation. The EIS defines `assign_or_replace_catalog_inventory_link` and frontend rendering, but no dedicated preview command or versioned preview payload.

### Finding

The EIS states that the frontend must render a D-068 preview, while also stating that the frontend must not compute D-068 outcomes. The only formal link command is the final mutation command. The EIS does not identify a protected read/preview command that atomically resolves:

- current inventory link;
- current selling unit;
- current selling price;
- proposed inventory item identity and immutable base unit;
- whether the unit changes;
- whether price reconfirmation is required;
- permitted/locked state under D-047;
- merchant-visible validation warnings;
- precondition values or a preview/version token for the final commit.

### Risk if unchanged

Lovable may calculate the proposed state from multiple client reads. The merchant could confirm a preview that is incomplete, internally inconsistent, permission-inappropriate, or stale before the final command runs.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Define a non-mutating server-authoritative command such as:

```text
preview_catalog_inventory_link_change(...)
```

Its response should contain the exact merchant-facing current/proposed state, `unit_changed`, `price_confirmation_required`, D-047 eligibility, stable validation categories, and opaque or explicit preconditions consumed by the final command. The final command must still recalculate under lock and reject stale state.

### Product Truth impact

None. This implements D-068; it does not change it.

---

## LF-02 — Stale-state recovery is detected but not specified as a complete UX flow

- **Severity:** `HIGH`
- **Type:** Missing implementation detail
- **EIS subject:** Sections 8, 9, 15, and 16 — `STALE_STATE`
- **Blueprint / Founder trace:** D-047, D-054, D-068
- **Evidence:** The command rejects mismatched preconditions with `STALE_STATE`; Section 16 says error categories map to merchant-understandable states.

### Finding

The EIS does not require Lovable to invalidate the existing confirmation, refresh authoritative state, regenerate the preview, and obtain a new explicit confirmation after `STALE_STATE`.

### Risk if unchanged

A generic retry could resubmit old confirmation data, or the UI could refresh silently and continue without the merchant confirming the changed meaning.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Specify that `STALE_STATE` must:

1. stop the mutation flow;
2. preserve no optimistic local success state;
3. fetch a new server preview;
4. visibly explain that the product or price changed since review;
5. require a fresh explicit merchant confirmation;
6. never auto-retry the mutation with updated values.

### Product Truth impact

None. This preserves explicit confirmation and merchant decision ownership.

---

## LF-03 — Duplicate submission and ambiguous network retry behaviour need a frontend idempotency contract

- **Severity:** `HIGH`
- **Type:** Missing implementation detail
- **EIS subject:** Sections 9, 10, 13, 15, and 16 — idempotency, loading, retry
- **Blueprint / Founder trace:** D-011, D-037, D-064, D-068
- **Evidence:** Commands accept idempotency keys, but Section 16 does not define how the frontend creates, retains, rotates, or retries those keys.

### Finding

Backend idempotency is sound in principle, but the EIS does not tell Lovable:

- when one logical action receives its idempotency key;
- that the same key must survive button re-click protection, timeout, reconnect, and explicit retry;
- when a new key may be generated;
- how an ambiguous network outcome is reconciled before offering another submission;
- how final confirmation buttons remain disabled while a request is pending.

### Risk if unchanged

A frontend may generate a fresh key for each retry, defeating duplicate protection and allowing double price, tax, cost, link, archive, or import writes.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Add a shared frontend command-submission contract:

- generate one idempotency key per confirmed logical action;
- persist it for the full request/reconciliation lifecycle;
- disable repeat submission while pending;
- on timeout or connection loss, query/retry using the same key;
- generate a new key only after a terminal result or a materially edited payload;
- treat `IDEMPOTENCY_CONFLICT` as a non-retriable review state.

### Product Truth impact

None. This strengthens integrity and merchant clarity.

---

## LF-04 — Save failure and unknown commit outcome are not fully normalized for safe presentation

- **Severity:** `HIGH`
- **Type:** Missing implementation detail
- **EIS subject:** Sections 9, 15, 16, and 17 — failure categories and rollback
- **Blueprint / Founder trace:** D-054, D-064, D-068
- **Evidence:** The EIS promises stable rejection categories and atomic rollback, but does not define a stable category or reconciliation rule when the client loses the response after the server may have committed.

### Finding

A database exception before commit can safely return a known failure. A network interruption after commit but before response creates an **unknown client outcome**, not necessarily a save failure. The current frontend section does not distinguish these cases.

### Risk if unchanged

The UI could incorrectly tell the merchant that nothing changed when the command actually committed, or show success without verifying stored state.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Define client-safe result categories including:

- confirmed validation rejection;
- confirmed permission rejection;
- confirmed transactional failure/no commit;
- unknown outcome requiring idempotency reconciliation;
- confirmed success.

The UI must never present “not saved” for an unknown outcome until the same idempotency key is reconciled against authoritative state.

### Product Truth impact

None. This is required to make D-068’s no-change guarantee truthful in the user experience.

---

## LF-05 — Multilingual possible-match UX requires a clearer uncertainty contract

- **Severity:** `MEDIUM`
- **Type:** Unresolved technical parameter and missing UX detail
- **EIS subject:** Sections 12 and 16 — multilingual normalization and search
- **Blueprint / Founder trace:** D-023, D-024, D-026, D-045; Rules 8, 9, and 27 as traced by the EIS
- **Evidence:** The EIS separates exact matches from “possible matches — review” and leaves similarity threshold/algorithm open.

### Finding

The separation is correct, but the EIS does not fully define how possible matches appear during product/category creation and import correction, how confidence is communicated without implying equivalence, or how keyboard/screen-reader users distinguish exact from uncertain results.

### Risk if unchanged

Merchants may interpret a weak trigram suggestion as a confirmed duplicate, especially across Malayalam, Manglish, and English where character overlap is not semantic equivalence.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Require that possible matches:

- are labelled as suggestions, never duplicates;
- show the original merchant-entered script unchanged;
- require an explicit user choice to open/use an existing record;
- never preselect an overwrite/update action;
- remain visually and semantically distinct without relying on color alone;
- provide accessible status text for assistive technology;
- fall back gracefully when no reliable cross-script match exists.

The threshold and algorithm remain engineering decisions subject to measured validation.

### Product Truth impact

None. This protects the no-silent-merge boundary.

---

## LF-06 — Import preview and apply flow needs job-level confirmation, revalidation, and resumable outcome rules

- **Severity:** `HIGH`
- **Type:** Missing implementation detail
- **EIS subject:** Sections 13, 15, and 16 — CSV/Excel import
- **Blueprint / Founder trace:** D-055, D-056, D-057, D-058
- **Evidence:** The EIS stages rows, groups valid/invalid/conflict states, and applies rows through ordinary commands.

### Finding

The EIS does not yet define:

- the final job-level summary the merchant confirms before applying valid rows;
- whether valid rows are revalidated immediately before apply;
- how changed catalog state converts a formerly valid row into a conflict;
- duplicate-click prevention for “apply valid rows”;
- progress, cancellation boundary, interruption recovery, and safe resume;
- whether a bulk apply is one transaction or a series of independently auditable row commands;
- how partial success is explained without suggesting failed rows were saved.

### Risk if unchanged

A long-running import could apply against stale validation, duplicate rows after retry, or leave the merchant unclear about which rows became live products.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Specify:

- a final confirmation summary with counts and explicit exclusions;
- mandatory server revalidation at apply time;
- per-row idempotency and terminal status;
- independently committed rows with clear resumability unless a bounded all-or-nothing batch is deliberately chosen;
- one active apply operation per job;
- reconnect-safe progress fetched from server state;
- exact merchant wording for applied, skipped, quarantined, conflicted, and failed rows;
- no automatic update or overwrite.

### Product Truth impact

None. This operationalizes D-056 and D-057.

---

## LF-07 — Accessibility requirements are directionally correct but insufficiently testable

- **Severity:** `MEDIUM`
- **Type:** Missing implementation detail
- **EIS subject:** Sections 16 and 20 — accessibility and critical UI states
- **Blueprint / Founder trace:** Blueprint §9 accessibility and mobile expectations, as cited by the EIS
- **Repository/governance evidence:** The EIS cites Source 03’s static-element directive in traceability but does not carry it into the frontend requirements.

### Finding

“Labels, validation, focus, contrast, and confirmations” is a good baseline, but the EIS does not define testable requirements for:

- stable `id` and `data-testid` values on critical catalog controls;
- keyboard-only completion;
- focus trapping and restoration in confirmation dialogs;
- screen-reader announcement of validation, stale state, save outcome, import progress, and possible-match uncertainty;
- mobile handling of wide import tables;
- non-color indicators for valid/invalid/conflict groups;
- reduced-motion behaviour where loading or progress animation is used.

### Risk if unchanged

A visually acceptable build may still fail keyboard, screen-reader, automation, or mobile usability requirements.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Add explicit accessibility and stable-identifier acceptance obligations for every critical catalog flow, especially D-068 confirmation and import correction.

### Product Truth impact

None. This makes the approved accessibility expectation verifiable.

---

## LF-08 — Phased frontend delivery is safe, with one clarification required for route exposure

- **Severity:** `LOW`
- **Type:** Cross-mission dependency and scope note
- **EIS subject:** Sections 4, 7, 14, 16, and 19 — phased delivery
- **Blueprint / Founder trace:** D-033 through D-035, D-048, D-053, D-054
- **Evidence:** Owner-only Phase 1 is explicit; Manager/Employee and conversational UI must not appear before their shared engines exist.

### Finding

The dependency treatment is sound. The EIS should additionally state that route/nav exposure must follow the active phase and runtime capability state, not merely the existence of frontend files.

### Risk if unchanged

A Products nav entry or staff-facing affordance could become visible before the corresponding commands, permission engine, or phase flag is active.

### Required disposition

`REFINEMENT REQUIRED`

### Recommended refinement

Require that:

- Products navigation is enabled only after Phase 1 commands and Owner-scoped reads are deployed and verified;
- staff/manager controls remain absent until permission enforcement is active end to end;
- conversational entry points remain absent until the shared conversational engine is authorized and available;
- feature-flag off states do not expose dead routes or misleading “coming soon” controls inside the active workspace unless separately approved.

### Product Truth impact

None.

---

# 4. Areas Accepted as Architecturally Sound

The following do not require product or frontend redesign:

1. **Backend authority:** The frontend does not compute sale readiness, uniqueness, protected cost visibility, D-047 eligibility, or D-068 atomic outcomes.
2. **Protected commands:** Dashboard, import, and future conversational channels reuse the same command layer.
3. **Single D-068 mutation:** Link, unit, confirmed price, idempotency registration, and audit history commit in one transaction.
4. **Cost confidentiality:** Cost is omitted server-side, not hidden only in the UI.
5. **No optimistic financial mutation:** The EIS does not authorize local-only price, tax, cost, or inventory-link success.
6. **Import quarantine:** Invalid and conflict rows do not silently create or overwrite live products.
7. **Dependency gating:** Manager/Employee and conversational phases remain unavailable until shared engines exist.
8. **Dignity:** Error categories and uncertain matches are intended to be explained without blame, accusation, or technical database language.

---

# 5. Mandatory Open-Parameter Dispositions

| Open parameter | Specialist disposition | Frontend/Lovable reasoning |
|---|---|---|
| 1. Multilingual similarity algorithm and possible-match threshold | `REFINEMENT REQUIRED` | The parameter may remain an engineering decision, but the EIS must define measurable evaluation and the non-authoritative, accessible UX contract. `pg_trgm` alone must not be represented as cross-script understanding. |
| 2. CSV/Excel row-count and file-size limits | `REFINEMENT REQUIRED` | The proposed 5,000-row/10-MB limits are reasonable candidates, but final values need backend/performance confirmation plus clear preflight, rejection, and merchant guidance. No Founder decision is required unless the final limit materially weakens the approved Build Now import promise. |
| 3. Final index selection and query-plan validation | `ACCEPTED AS WRITTEN` | Deferring final indexes to realistic query-plan validation is appropriate. Frontend requires only that list/search/import response budgets and pagination contracts be verified before exposure. |
| 4. Scheduled-price activation polling interval | `REFINEMENT REQUIRED` | A one-minute candidate is technically plausible, but D-043 says exact future date/time. The EIS must define the merchant-visible delayed-activation state, refresh/reconciliation behaviour, and accepted lag wording before lock. |
| 5. Shared permission-engine sequencing and ownership | `REFINEMENT REQUIRED` | Owner-only Phase 1 is safe. Manager/Employee UI must remain entirely unavailable until shared permission enforcement exists. Mission Control must assign ownership and sequence. |
| 6. Shared conversational-engine sequencing and ownership | `ACCEPTED AS WRITTEN` | Phase 3 is correctly blocked behind the shared engine, and no catalog-specific workaround is authorized. Mission Control still records the owning mission before Phase 3 begins. |
| 7. Inventory-link removal without D-068 price reconfirmation | `ACCEPTED AS WRITTEN` | Removal changes neither selling unit nor current price, so it does not reinterpret a numeric price. The removal confirmation UI should clearly state that the existing unit and price remain and that any later unit edit is a separate governed action. |

No open parameter requires a Founder decision based on this frontend review.

---

# 6. Required EIS Refinements by Section

## Sections 8–9

- Add a protected, non-mutating D-068 preview contract.
- Bind final confirmation to authoritative preview/precondition data.
- Define stale-state re-preview and reconfirmation.

## Sections 9–10 and 15

- Define frontend idempotency-key lifecycle.
- Distinguish confirmed rollback from unknown network outcome.
- Define reconciliation using the same idempotency key.

## Sections 12 and 16

- Define accessible, non-authoritative possible-match presentation.
- Preserve original merchant-entered language/script.
- Require explicit choice before using a suggested existing record.

## Sections 13, 15, and 16

- Define final import confirmation summary.
- Revalidate at apply time.
- Define duplicate prevention, progress, resume, and partial-success semantics.

## Sections 16 and 20

- Add stable IDs/data-testid requirements.
- Add keyboard, focus, screen-reader, mobile table, non-color, and reduced-motion checks.

## Sections 11, 16, and 19

- Define scheduled-price delayed-activation presentation and refresh.
- Tie nav/routes to deployed and verified phase capability.

---

# 7. Product Truth Impact Assessment

The findings do not request any change to:

- product identity;
- D-001 through D-068;
- Build Now, Build Later, Add-on, Separate Product, or Reject classifications;
- permissions promised by the Blueprint;
- catalog versus inventory authority;
- merchant decision ownership.

All recommended changes are implementation-detail refinements needed to make the locked product behaviour safe and testable.

---

# 8. Final Specialist Disposition

```text
FRONTEND / LOVABLE ARCHITECTURE REVIEW: REFINEMENT REQUIRED
BLOCKING PRODUCT-TRUTH CONFLICT: NONE
FOUNDER DECISION REQUIRED: NO
EIS LOCK RECOMMENDED NOW: NO
IMPLEMENTATION PACKAGE AUTHORIZED: NO
IMPLEMENTATION AUTHORIZED: NO
```

The EIS has a strong frontend/backend authority model and is directionally implementation-ready, but it should not be locked until the D-068 preview contract, stale/retry/idempotency behaviour, ambiguous save-outcome handling, import apply lifecycle, multilingual uncertainty presentation, and testable accessibility obligations are made explicit.

---

# 9. Publication and Review Record

| Field | Value |
|---|---|
| Commit SHA | To be confirmed from the protected review branch after publication |
| Pull request | To be confirmed after creation |
| Pull-request state | Expected: Open — authorized human review required |
| Exact changed files | `communication/live/report1.10-lovable-frontend.md` only |
| Self-approved | No |
| Self-merged | No |

## Validation

- Exact changed-file scope: PASS by connector write scope; PR diff verification required after PR creation.
- Protected artifacts changed: NO.
- Product or implementation files changed: NO.
- Secret or credential content introduced: NO.
- Markdown structure: reviewed for headings, tables, fenced blocks, and line endings.
- Final merge remains subject to repository quality gates and authorized human review.
