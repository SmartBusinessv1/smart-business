# SMART BUSINESS MISSION CONTROL

# Report 1.12 — EIS Refinement Verification Consolidation

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Refined EIS independent verification

**From:** Mission Control

**To:** Founder and Authorized Engineering Actors

**Status:** VERIFICATION COMPLETE — REFINEMENT REQUIRED

**Date:** 2026-08-05

---

## 1. Purpose

This report consolidates the four specialist verification reports authorized by:

`communication/live/instruction1.12.md`

The verification assessed whether the refined Engineering Implementation Specification version 2.0 at:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

fully resolved the accepted Stage 10 findings recorded in:

`communication/live/report1.10.md`

This report records Mission Control's verification disposition only.

It does not modify the EIS, apply EIS Lock, authorize an implementation package, authorize implementation, or change Product Truth.

---

## 2. Synchronized Repository State

Repository:

`SmartBusinessv1/smart-business`

Synchronized base commit for this consolidation:

`a1f0ef220ed021d36f0c9e5786bf31f4f785b64b`

Base commit message:

`Verify SB-P-1.11 refined frontend and Lovable EIS (#58)`

---

## 3. Specialist Reports Reviewed

Mission Control reviewed:

- `communication/live/report1.12-supabase-backend.md`
- `communication/live/report1.12-ai-whatsapp.md`
- `communication/live/report1.12-security-permissions.md`
- `communication/live/report1.12-lovable-frontend.md`

Specialist dispositions:

| Domain | Disposition |
|---|---|
| Supabase and Backend Architecture | `PARTIALLY VERIFIED — REFINEMENT REQUIRED` |
| AI and WhatsApp Architecture | `PARTIALLY VERIFIED — REFINEMENT REQUIRED` |
| Security and Permissions Architecture | `PARTIALLY VERIFIED — REFINEMENT REQUIRED` |
| Frontend and Lovable Architecture | `VERIFIED — READY FOR MISSION CONTROL CONSOLIDATION` |

---

## 4. Verification Summary

The refined EIS version 2.0 successfully resolves the major Stage 10 architecture defects in substance.

Verified improvements include:

- stable pending scheduled-price state separated from immutable price history;
- removal of the invalid `now()`-dependent uniqueness design;
- command-only protected writes with authenticated direct DML denied;
- action-specific Manager permissions;
- server-authoritative D-068 preview and compare-and-commit behavior;
- corrected idempotency ordering;
- explicit `UNKNOWN_OUTCOME` reconciliation using the same idempotency key;
- tenure-aware D-047 enforcement;
- restricted conversational-channel authority;
- hardened cost and margin read boundaries;
- business-bound file references and import controls;
- deterministic frontend stale-state, retry, accessibility, import, and route-gating behavior;
- tax pricing-mode enforcement moved from an invalid table check to a command invariant;
- improved deletion integrity and audit design.

The EIS is not yet ready for Founder EIS review or EIS Lock because a small set of engineering precision issues remain unresolved.

No remaining issue requires a Product Truth change or Founder product decision.

---

## 5. D-047 Interpretation Disposition

Mission Control accepts the verified engineering interpretation:

```text
Any authoritative inventory movement recorded during the current
product–inventory link tenure counts as linked stock-event history.

Inventory movements recorded before the current link tenure do not count.
```

This interpretation:

- preserves D-047;
- protects historical integrity;
- avoids attaching unrelated pre-link stock history to a later catalog relationship;
- does not change merchant-visible Product Truth;
- does not require Founder escalation.

Disposition:

`RESOLVED — ENGINEERING INTERPRETATION CONFIRMED`

---

## 6. Consolidated Remaining Findings

### MC-VRF-001 — Executor identity contradiction

**Severity:** `BLOCKING`

**Source reports:** Supabase/Backend and Security/Permissions.

The EIS describes executor roles as `NOLOGIN` database roles while also describing them as authenticating through credentials.

A PostgreSQL `NOLOGIN` role cannot directly authenticate.

**Required refinement:**

Separate clearly:

- the external authenticated runtime identity or service account;
- the database login role, where one is required;
- the `NOLOGIN` function-owner or privilege role;
- the controlled `SET ROLE` or function-execution boundary, if used.

The refined contract must not imply that a `NOLOGIN` role stores or uses credentials.

---

### MC-VRF-002 — Over-broad command executor authority

**Severity:** `HIGH`

**Source report:** Security/Permissions.

The proposed `catalog_command_executor` has broad DML authority across protected catalog tables.

This weakens least privilege and increases blast radius.

**Required refinement:**

Narrow privileges by command group, table, and operation.

Prefer function-owned authority and minimal grants over a general-purpose executor with full catalog DML.

The EIS must explicitly prohibit one executor identity from becoming unrestricted merchant authority.

---

### MC-VRF-003 — Scheduler transaction model contradiction

**Severity:** `BLOCKING`

**Source report:** Supabase/Backend.

The EIS requires per-row independent scheduler commits while describing execution inside one ordinary PostgreSQL function invocation.

A normal PostgreSQL function cannot independently commit each processed row.

**Required refinement:**

Choose one implementable model:

- an external worker invokes one bounded command per schedule row;
- a procedure or job framework with valid transaction control is used where supported;
- a bounded batch is processed atomically with failure semantics stated truthfully.

The EIS must define retry, claiming, isolation, and partial-failure behavior consistently with the chosen transaction model.

---

### MC-VRF-004 — Durable rejection evidence versus full rollback

**Severity:** `BLOCKING`

**Source report:** Supabase/Backend.

The EIS requires durable rejection, confirmation-token, and idempotency bookkeeping while also claiming that every exception fully rolls back the transaction.

A record written inside the same rolled-back transaction cannot remain durable.

**Required refinement:**

Distinguish:

- business-state writes that must roll back;
- successful idempotent result records committed atomically with the business write;
- terminal validation or authorization rejections returned without claiming durable database evidence unless recorded through a separate valid mechanism;
- operational logs or external telemetry that may persist independently;
- unknown outcomes that require same-key reconciliation.

Do not promise durable rejection evidence and total rollback through the same transaction unless the mechanism is technically valid.

---

### MC-VRF-005 — Webhook deduplication and command idempotency binding

**Severity:** `HIGH`

**Source report:** AI/WhatsApp.

The EIS does not yet fully bind inbound webhook deduplication to the final confirmed command idempotency record.

**Required refinement:**

Define separate but linked identifiers for:

- inbound channel event deduplication;
- pending-action identity;
- confirmation event identity;
- final command idempotency.

The final command must be bound to the exact pending action and confirmation event, while duplicate webhook delivery must not create a new command attempt.

---

### MC-VRF-006 — Alternate confirmer authority

**Severity:** `HIGH`

**Source report:** AI/WhatsApp.

The EIS does not define whether a different authorized user may confirm an action initiated by another user.

**Required refinement:**

Use the safe default:

```text
Only the same verified actor who received and reviewed the pending-action
preview may confirm it.
```

Any future delegated or alternate-confirmer capability requires separate Product Truth and permission authority.

This clarification does not create a new product feature; it prevents accidental authority expansion.

---

### MC-VRF-007 — Pre-command failure classification

**Severity:** `HIGH`

**Source report:** AI/WhatsApp.

Media-download, transcription, OCR, model, or interpretation failures that occur before a protected command is invoked are incorrectly grouped with command `UNKNOWN_OUTCOME`.

**Required refinement:**

Separate:

- `PRE_COMMAND_PROCESSING_FAILED`: no authoritative command started; safe to tell the merchant that no catalog change was submitted;
- `COMMAND_REJECTED`: definitive terminal command response;
- `UNKNOWN_OUTCOME`: command may have committed but the result was lost; reconcile with the same idempotency key;
- `CONFIRMED_SUCCESS`.

Only post-invocation ambiguous outcomes use idempotency reconciliation.

---

### MC-VRF-008 — Audit provenance fields incomplete

**Severity:** `HIGH`

**Source report:** Security/Permissions.

The EIS claims audit records include the authority basis and outcome, but the proposed schema does not consistently contain them.

**Required refinement:**

For every protected audit or event record, define where applicable:

- actor identity;
- actor type;
- business;
- channel;
- request or correlation ID;
- operation;
- permission or authority basis;
- confirmation or pending-action reference;
- outcome;
- recorded time;
- effective time;
- system job/run identity for automated execution.

The EIS must not claim evidence that the proposed data model cannot store.

---

### MC-VRF-009 — Outcome lookup trusts caller-supplied business scope

**Severity:** `HIGH`

**Source report:** Security/Permissions.

`get_catalog_command_outcome` still accepts caller-supplied business scope as part of its authority boundary.

**Required refinement:**

Derive business scope server-side from the authenticated or verified channel identity.

The caller may provide operation and idempotency identifiers but must not choose the authoritative business context.

Cross-business guessing must return the same result as a missing record.

---

### MC-VRF-010 — Mandatory file scanning can be bypassed

**Severity:** `HIGH`

**Source report:** Security/Permissions.

The file metadata contract permits `scan_status = not_required` even for purposes where scanning is mandatory.

**Required refinement:**

Define file-purpose policy so that catalog import and any other scan-required purpose can be linked or parsed only when:

```text
scan_status = clean
```

`not_required` may be used only for explicitly approved purposes where scanning is genuinely unnecessary.

The command must enforce this policy server-side.

---

## 7. Findings Accepted as Resolved

Mission Control accepts the following as resolved in the refined EIS:

- scheduled-price state and immutable-history separation;
- stable one-pending-schedule enforcement;
- denial of direct authenticated DML;
- action-specific Manager permission separation;
- Employee default denial of owner financial intelligence;
- D-068 server-authoritative preview and token binding;
- stale-state re-preview and fresh confirmation;
- idempotency lookup before mutable-state checks;
- same-key `UNKNOWN_OUTCOME` reconciliation;
- D-047 tenure interpretation;
- protected cost and margin read architecture;
- import formula-injection and resource-limit controls in principle;
- frontend duplicate-submission handling;
- frontend import confirmation and resumability;
- multilingual uncertainty presentation;
- accessibility and stable selector obligations;
- route and navigation gating;
- tax pricing-mode command invariant;
- deletion eligibility architecture;
- temporary Owner-only sequencing.

These items must remain unchanged except where a remaining finding requires a narrow consistency correction.

---

## 8. Product Truth Assessment

```text
PRODUCT TRUTH CHANGE REQUIRED: NO
FOUNDER PRODUCT DECISION REQUIRED: NO
D-001–D-068: UNCHANGED
BUILD NOW / BUILD LATER / ADD-ON / SEPARATE PRODUCT / REJECT: UNCHANGED
```

The remaining findings are engineering precision and enforceability issues.

They must not be used to broaden the mission or introduce new merchant-facing capabilities.

---

## 9. Required Next Lifecycle Action

Mission Control shall issue a separate, narrowly scoped EIS refinement instruction.

That instruction may authorize modification only of:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

And creation only of a new refinement completion report.

The refinement must address MC-VRF-001 through MC-VRF-010 without reopening findings already verified as resolved.

After the second refinement:

- Mission Control shall perform focused verification of only the changed sections and these ten findings;
- full four-room re-review is not required unless the refinement materially changes a previously verified domain;
- EIS Lock remains a later, separate lifecycle action.

---

## 10. Scope and Boundary Confirmation

- Refined EIS modified: **NO**
- Product Blueprint modified: **NO**
- Founder Product Decision Record modified: **NO**
- Prior reports modified: **NO**
- Product Truth changed: **NO**
- Founder decision created: **NO**
- EIS accepted or locked: **NO**
- Implementation package created: **NO**
- Application code or tests modified: **NO**
- SQL, migrations, RLS, RPCs, Supabase, Lovable, infrastructure, deployment, or production modified: **NO**
- Governance source modified: **NO**

Authorized changed path:

`communication/live/report1.12.md`

---

## 11. Final Mission Control Disposition

```text
SB-P-1.11 EIS REFINEMENT VERIFICATION: COMPLETE
OVERALL DISPOSITION: REFINEMENT REQUIRED
D-047 INTERPRETATION: RESOLVED
PRODUCT TRUTH CHANGE REQUIRED: NO
FOUNDER DECISION REQUIRED: NO
FOUNDER EIS REVIEW: NOT READY
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
NEXT ACTION: NARROW SECOND EIS REFINEMENT AUTHORIZATION
```
