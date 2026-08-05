Document: Verification Checklist

Version: 1.1

Status: LOCKED — MISSION CONTROL ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Approval Status: ACCEPTED

Lock Status: LOCKED

Approval Date: 2026-08-05

Mission: SB-P-1.11

# SB-P-1.11 — Product Catalog & Pricing — Verification Checklist

```text
STATUS: LOCKED — MISSION CONTROL ACCEPTED
APPROVAL: GRANTED
LOCK: ACTIVE
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
IMPLEMENTATION AUTHORITY: NONE
```

**This document is accepted and locked by Mission Control at Version 1.1, but must not yet be used for live verification.** It carries no implementation, paste-into-Lovable, or Founder Lovable Brief authority. Live verification may begin only once a specific implementation phase is separately authorized and built, per Section 2's phase declaration. Acceptance and lock of this document does not authorize application code, SQL, migrations, RLS policies, RPC implementations, Edge Functions, scheduler workers, tests, Lovable project changes, infrastructure, deployment, or production activity of any kind.

**Unexecuted-template state of every checklist item in this draft (corrected per MC-VC-001):** this document is a template only. No SB-P-1.11 phase or gated component has been separately authorized for implementation as of this document's preparation, and no live verification run has occurred. Every checklist item's Actual Result, Outcome, Verifier Notes, and Defect Reference fields are therefore left as explicit unexecuted placeholders — never pre-populated with any outcome, including `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED` — because assigning any outcome before a real, separately authorized verification run begins would itself misrepresent this template as already executed. A future verifier conducting the first live run must complete Section 2's phase declaration, then: execute every mandatory cross-phase item (Sections 3–7, and every later item designated cross-phase) regardless of which phase is named — these may not receive the deferred outcome except where an item itself explicitly represents a separately unauthorized external activity (Section 2); execute every phase-exclusive item belonging to a phase actually named in the declaration; and select `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED` only for phase-exclusive items belonging to a phase or gated component genuinely absent from that declaration.

---

## 1. Document Authority and Lifecycle Status

| Field | Value |
|---|---|
| Mission ID | SB-P-1.11 |
| Mission Name | Product Catalog & Pricing |
| Stage | 12C — Verification Checklist Preparation, Refinement, and Lock |
| Package Position | Third and final document of the Stage 12 Initial Implementation Package (`engineering-contract.md` LOCKED, `lovable-build-prompt.md` LOCKED, `verification-checklist.md` this document, LOCKED — Stage 12 Initial Implementation Package documents now complete) |
| Prior Reviews | Version 1.0 prepared under `communication/live/instruction1.24.md` (`report1.24.md`) → Mission Control review recorded findings MC-VC-001 through MC-VC-003 → Version 1.1 refinement authorized by `communication/live/instruction1.25.md` (`report1.25.md`), resolving MC-VC-001 through MC-VC-003 → Mission Control re-review recorded `VERIFICATION CHECKLIST REVIEW: PASSED`, `VERIFICATION CHECKLIST: ACCEPTABLE` |
| This Revision | Lock-only status and metadata update authorized by `communication/live/instruction1.26.md`, accepting and locking Version 1.1; no substantive content changed |
| Authorizing Instruction | `communication/live/instruction1.26.md` |
| Contract Owner | Claude Code, under Mission Control governance |
| Document Type | Phase-scoped, evidence-driven verification instrument, for use only after separate Mission Control review, acceptance, and lock |

This checklist is subordinate to, and must never contradict, expand, weaken, or reinterpret, its governing sources (corrected terminology per MC-VC-003). This checklist derives from four locked Stage 12 authorities:

1. **SB-P-1.11 Product Blueprint** (`docs/phase-1-mission-blueprint/active/SB-P-1.11.md`), Sections 1–21, LOCKED.
2. **SB-P-1.11 Engineering Implementation Specification, Version 2.2, LOCKED** (`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`).
3. **SB-P-1.11 Engineering Contract, Version 1.1, LOCKED — MISSION CONTROL ACCEPTED** (`docs/implementation/SB-P-1.11/engineering-contract.md`).
4. **SB-P-1.11 Lovable Build Prompt, Version 1.1, LOCKED — MISSION CONTROL ACCEPTED** (`docs/implementation/SB-P-1.11/lovable-build-prompt.md`).

The **SB-P-1.11 Founder Product Decision Record, D-001 through D-068** (`docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`), is a mandatory preserved decision source governing the Blueprint and all downstream documents. It must remain independently traceable and unchanged. It is not counted among the four locked Stage 12 authorities above, but no checklist item may contradict, expand, weaken, or reinterpret it any more than it may the four authorities themselves.

If any checklist item appears to conflict with any of the four locked Stage 12 authorities or the Founder Product Decision Record, the locked source governs and this checklist is in error. Stop verification of that item, do not resolve the conflict by assumption or new design, and report it (Section 34).

### How to Use This Checklist

Every checklist item in Sections 8–30 uses the same ten-field structure:

- **Checklist ID** — a stable identifier, e.g. `CHK-P1-003`.
- **Phase / Component** — exactly one of the five groups in Section 2, or a cross-phase designation where stated.
- **Locked-Source Reference** — the exact Blueprint, Founder Decision, EIS, Engineering Contract, and/or Lovable Build Prompt citation the item verifies.
- **Expected Result** — the specific, objectively checkable condition that must hold.
- **Verification Method** — the exact procedure (query, inspection, test, read) a verifier performs.
- **Evidence Location** — where the supporting evidence is or will be stored (commit SHA, PR, query output file, screenshot path, test report).
- **Actual Result** — what was actually observed, filled in only when the item is executed.
- **Outcome** — exactly one of the five controlled values in Section 15... see below.
- **Verifier Notes** — free-text context, filled in only when the item is executed.
- **Defect Reference** — a Section 32 defect ID, required when Outcome is `FAIL`.

### Outcome Vocabulary (Section 15 of `instruction1.24.md`)

Use only these five outcomes, exactly as written:

- **`PASS`** — the expected result was objectively observed, with evidence sufficient for an independent reviewer to reproduce or validate it. Self-attestation without supporting evidence is not sufficient where objective evidence (query output, diff, test report, screenshot) is available.
- **`FAIL`** — the expected result was not observed. A `FAIL` must identify the violated locked requirement (exact section citation) and the required correction, and must have a Defect Reference (Section 32).
- **`NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`** — reserved exclusively for a phase-exclusive implementation obligation belonging to a phase or gated component not named in the current verification's Section 2 declaration. It is never a defect. This outcome must **not** be selected for a mandatory cross-phase precondition or governance-integrity check (Section 2 "Mandatory Cross-Phase Controls"), unless that specific item itself explicitly represents a separately unauthorized external activity.
- **`NOT APPLICABLE`** — the item does not apply to this mission's Build Now scope or to the specific implementation under review (e.g., a check specific to a component the locked authorities do not require in this configuration).
- **`BLOCKED — CLARIFICATION REQUIRED`** — verification cannot proceed because of an unresolved dependency, ambiguity, or apparent conflict with a locked authority. This stops further verification of the affected item and any item that depends on it; it does not authorize the verifier to invent a resolution. Report to Mission Control (Section 34).

---

## 2. Verification Scope and Named Implementation Phase

**[MANDATORY]** Before any check in Sections 8–30 begins, the verifier must complete this declaration, naming every phase or gated component actually covered by the implementation under review. Use exactly these five groups (Engineering Contract §24; Lovable Build Prompt §7, §11):

- **Phase 1 — Owner-only core catalog implementation.**
- **Phase 2a — shared permission-engine activation** on applicable commands and UI paths.
- **Phase 2b — CSV/Excel import and correction queue.**
- **Phase 3 — guided WhatsApp, voice, and photo catalog intent handling.**
- **Environment-gated scheduler — candidate listing and scheduled-price activation worker.**

```text
PHASE(S) OR GATED COMPONENT(S) UNDER VERIFICATION: [ to be completed by the verifier ]
AUTHORIZING MISSION CONTROL INSTRUCTION: [ cite the specific implementation authorization ]
VERIFICATION DATE: [ date ]
VERIFIER: [ name / role ]
BUILDER COMPLETION REPORT REFERENCE: [ path or identifier ]
```

### Mandatory Cross-Phase Controls (corrected per MC-VC-002)

This checklist distinguishes two different kinds of item, scored differently:

```text
Cross-phase preconditions and governance-integrity checks apply to every
live verification run, regardless of which implementation phase is named.

They must be executed and may not receive:

NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED

unless the checklist item itself explicitly represents a separately
unauthorized external activity.

Only implementation obligations belonging exclusively to an undeclared
phase or uncleared gated component receive the deferred outcome.
```

- **Mandatory cross-phase verification controls** — Sections 3 ("Preconditions and Required Authorization Evidence"), 4 ("Repository Synchronization and Branch Verification"), 5 ("Exact Changed-File and Changed-Component Inventory"), 6 ("Locked-Source Integrity Verification"), 7 ("Build Now and Exclusion-Boundary Verification"), and every later item whose Phase/Component field reads "Cross-phase." These verify that the mission's own governance and process were followed correctly — authorization exists, the repository was synchronized, the changed-file scope matches the authorization, the four locked Stage 12 authorities and the Founder Product Decision Record are untouched, and Build Now/exclusion boundaries hold. They apply, and must be executed, in every live run no matter which phase is declared above; authorization evidence, repository synchronization, changed-file scope, and locked-source integrity checks must never be deferred merely because a particular implementation phase is not named.
- **Phase-exclusive implementation obligations** — every item whose Phase/Component field names one specific phase or gate (Phase 1, Phase 2a, Phase 2b, Phase 3, or the environment-gated scheduler). Only these items may be scored `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`, and only when their named phase or gate is genuinely absent from this declaration.

This document, as prepared, has no completed declaration; every item below is an unexecuted template placeholder (header banner above), not a scored outcome of any kind — including the deferred outcome — until a real, separately authorized verification run begins and this distinction is applied.

A phase not yet separately authorized must never be verified as if it were built — doing so would itself violate Engineering Contract §27's conditional-obligation discipline and Lovable Build Prompt §24's phase-scoped evidence rule.

---

## 3. Preconditions and Required Authorization Evidence

- **CHK-PRE-001** — Mission Control implementation authorization exists for the phase(s) named in Section 2.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** Engineering Contract §3 "This mission does not authorize implementation... Implementation begins only under a separate, explicit Mission Control authorization"; Lovable Build Prompt §26.
  - **Expected Result:** A specific, named Mission Control instruction authorizing implementation of exactly the phase(s)/component(s) declared in Section 2 exists and is cited.
  - **Verification Method:** Locate and read the cited instruction; confirm it names the same phase(s) as Section 2's declaration and does not exceed them.
  - **Evidence Location:** `communication/live/instruction*.md` reference.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-PRE-002** — A separately authorized Founder Lovable Brief exists if the prompt was pasted into Lovable.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** Lovable Build Prompt front matter and §26; instruction1.24.md §4.
  - **Expected Result:** If any Lovable-side work exists, a Founder Lovable Brief authorization is cited; otherwise this item is `NOT APPLICABLE`.
  - **Verification Method:** Check for a Founder Lovable Brief document and its authorizing instruction.
  - **Evidence Location:** `docs/implementation/SB-P-1.11/` directory listing.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-PRE-003** — The Verification Checklist itself is locked before being used for live verification.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** This document's own header banner; instruction1.24.md §4.
  - **Expected Result:** This checklist's own `Status` field reads `LOCKED — MISSION CONTROL ACCEPTED` before any item below is executed against a real implementation.
  - **Verification Method:** Inspect this document's front matter.
  - **Evidence Location:** This file, front matter.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed — note that this checklist must not be used for live verification until it is itself locked]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 4. Repository Synchronization and Branch Verification

- **CHK-REPO-001** — The implementation branch was created from a fast-forward-synchronized `main`.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** Repository-wide Git Rules (`AGENTS.md`); Lovable Build Prompt §5 "Repository-First Discovery Requirements."
  - **Expected Result:** The implementing mission's own completion report states the base `main` SHA and confirms `git merge --ff-only origin/main` (or equivalent) succeeded before work began.
  - **Verification Method:** Read the Builder Completion Report; cross-check the cited base SHA against `git log` on `main`.
  - **Evidence Location:** Builder Completion Report; `git log --oneline`.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-REPO-002** — The implementation branch is a new, dedicated mission branch, not a reused or protected branch.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** Repository-wide Git Rules (`AGENTS.md`).
  - **Expected Result:** Branch name follows the `mission/[MISSION-ID]-[SHORT-SLUG]` convention and did not previously exist.
  - **Verification Method:** `git log --oneline --graph` and `git branch -r` inspection.
  - **Evidence Location:** `git branch -r`, pull request metadata.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-REPO-003** — Repository-first discovery was performed and its findings recorded before code was written.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** Lovable Build Prompt §5 "Repository-First Discovery Requirements."
  - **Expected Result:** The Builder Completion Report documents the pre-build repository state (existing routes, components, migrations, dependencies) and confirms it matched or diverged from Lovable Build Prompt §5's documented baseline, with any divergence reported as a stop condition (Lovable Build Prompt §25) rather than silently built around.
  - **Verification Method:** Read the Builder Completion Report's discovery section; spot-check against current repository state.
  - **Evidence Location:** Builder Completion Report.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 5. Exact Changed-File and Changed-Component Inventory

- **CHK-FILES-001** — The implementation's changed-file list matches exactly what its own authorization permitted, and does not touch any of the four locked Stage 12 authorities or the Founder Product Decision Record.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** Engineering Contract §30 "Explicit Implementation Prohibitions"; Lovable Build Prompt §23 "Explicit No-Go List."
  - **Expected Result:** `git diff --name-status` between the implementation's base and head commits shows only files the phase's authorization permits; none of `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`, the Founder Product Decision Record, `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`, `docs/implementation/SB-P-1.11/engineering-contract.md`, or `docs/implementation/SB-P-1.11/lovable-build-prompt.md` appears.
  - **Verification Method:** `git diff --name-status <base>..<head>`; compare against the authorization's named scope.
  - **Evidence Location:** Git diff output, stored with the Builder Completion Report.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-FILES-002** — Every new database object, function, route, and component is enumerated and individually traceable to an authorized phase.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** EIS §5, §16; Lovable Build Prompt §11.
  - **Expected Result:** A complete inventory of new tables, functions, roles, RLS policies, routes, and components exists, with each item labeled by the phase group (Section 2) that authorizes it.
  - **Verification Method:** Cross-reference migration files and route/component files against the phase-scoped command grouping (Section 14 below).
  - **Evidence Location:** Migration file list; `src/routes/` and `src/components/` diff.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 6. Locked-Source Integrity Verification

- **CHK-LOCK-001** — The Product Blueprint is byte-identical to its locked state.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`, Sections 1–21, LOCKED.
  - **Expected Result:** `git diff` shows no change to this file across the implementation's commit range.
  - **Verification Method:** `git diff <base>..<head> -- docs/phase-1-mission-blueprint/active/SB-P-1.11.md`.
  - **Evidence Location:** Git diff output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-LOCK-002** — The Founder Product Decision Record is byte-identical to its locked state.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`, D-001 through D-068.
  - **Expected Result:** No change across the implementation's commit range.
  - **Verification Method:** `git diff` on the file path.
  - **Evidence Location:** Git diff output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-LOCK-003** — The EIS Version 2.2 is byte-identical to its locked state.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`, Version 2.2, LOCKED.
  - **Expected Result:** No change across the implementation's commit range.
  - **Verification Method:** `git diff` on the file path.
  - **Evidence Location:** Git diff output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-LOCK-004** — The Engineering Contract Version 1.1 is byte-identical to its locked state.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** `docs/implementation/SB-P-1.11/engineering-contract.md`, Version 1.1, LOCKED — MISSION CONTROL ACCEPTED.
  - **Expected Result:** No change across the implementation's commit range.
  - **Verification Method:** `git diff` on the file path.
  - **Evidence Location:** Git diff output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-LOCK-005** — The Lovable Build Prompt Version 1.1 is byte-identical to its locked state.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** `docs/implementation/SB-P-1.11/lovable-build-prompt.md`, Version 1.1, LOCKED — MISSION CONTROL ACCEPTED.
  - **Expected Result:** No change across the implementation's commit range.
  - **Verification Method:** `git diff` on the file path.
  - **Evidence Location:** Git diff output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 7. Build Now and Exclusion-Boundary Verification

- **CHK-SCOPE-001** — Implemented functionality is a subset of the Blueprint §7/§8 Build Now scope, EIS §4–§23, and Engineering Contract §4.
  - **Phase / Component:** Cross-phase precondition — applies to whatever phase(s) were actually authorized and built, per Section 2's mandatory-cross-phase-controls rule.
  - **Locked-Source Reference:** Blueprint §7 "Core Deliverables", §8 "Detailed Functional Scope"; Engineering Contract §4.
  - **Expected Result:** No capability outside the Engineering Contract §4 / Lovable Build Prompt §3 list is present in the diff.
  - **Verification Method:** Manual review of changed files against the §4/§3 scope list, feature-by-feature.
  - **Evidence Location:** Reviewer notes cross-referenced to diff.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SCOPE-002** — No Build Later, Add-on, Separate Product, or Reject capability is present.
  - **Phase / Component:** Cross-phase precondition.
  - **Locked-Source Reference:** Blueprint §11 "Out of Scope"; Engineering Contract §5; Lovable Build Prompt §4.
  - **Expected Result:** None of the items enumerated in Lovable Build Prompt §4 (unit conversion, variants, price tiers, margin calculation, second stock ledger, custom POS modification, etc.) appears anywhere in the diff, schema, or UI.
  - **Verification Method:** Checklist walk-through of Lovable Build Prompt §4's four category lists against the diff.
  - **Evidence Location:** Reviewer notes; schema diff; UI screenshots.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 8. Phase 1 — Owner-Only Runtime Verification

Applies only if Phase 1 is named in Section 2. Otherwise every item below: `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.

- **CHK-P1-001** — Every implemented command's authorization check is `businesses.owner_id = auth.uid()`, and nothing else.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Lovable Build Prompt §8 (MC-LBP-001 corrected text); Engineering Contract §16 "Phase 1."
  - **Expected Result:** Every Phase 1 command function's authorization logic resolves caller business ownership via `businesses.owner_id`, with no other authorization path.
  - **Verification Method:** Read each Phase 1 command function's definition (`SELECT pg_get_functiondef(oid) FROM pg_proc WHERE proname = '<command>'`); confirm the ownership check.
  - **Evidence Location:** SQL function definitions, stored as evidence artifacts.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P1-002** — No future permission flag is queried, required, simulated, hard-coded, or locally recreated.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Lovable Build Prompt §8; instruction1.24.md §10.
  - **Expected Result:** No SQL, application code, or UI logic references `catalog_view`, `catalog_product_manage`, `catalog_lifecycle_manage`, `catalog_price_manage`, `catalog_tax_manage`, `catalog_cost_manage`, `catalog_inventory_link_manage`, `sale_use`, or `inventory_view` as a runtime-evaluated condition; no table or column simulating any of these flags exists.
  - **Verification Method:** Full-text search of the migration and application diff for the eight flag names and `inventory_view`; confirm zero runtime-conditional usage (citation/comment references are acceptable, evaluated checks are not).
  - **Evidence Location:** `grep`/search output, attached to the Builder Completion Report.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P1-003** — No temporary, local, duplicated, or mission-specific substitute permission engine exists.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Lovable Build Prompt §8; Engineering Contract §16.
  - **Expected Result:** No new roles table, permission-flag table, hard-coded Manager flag, or bespoke authorization mechanism was introduced.
  - **Verification Method:** Migration-file review for any new table resembling a roles/permissions store; schema diff.
  - **Evidence Location:** Migration files.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P1-004** — No UI path, route guard, or backend check grants Manager or Employee catalog access.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Lovable Build Prompt §8.
  - **Expected Result:** No route, component, or backend function exposes catalog functionality to a non-Owner authenticated user.
  - **Verification Method:** Authenticated runtime test: sign in as a non-owner business member (if any exists) or a second business's owner, and confirm catalog routes/actions are inaccessible or correctly scoped.
  - **Evidence Location:** Authenticated-session screenshots or automated test output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P1-005** — Command signatures, authorization interfaces, data structures, and UI gating remain forward-compatible with Phase 2a.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Lovable Build Prompt §8.
  - **Expected Result:** No Phase 1 command signature would need to change shape (parameters, return type) to add a permission-flag check in Phase 2a.
  - **Verification Method:** Design review of function signatures against the EIS §16 command table.
  - **Evidence Location:** Function signature listing.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 9. Phase 2a — Shared Permission-Engine Gate Verification

Applies only if Phase 2a is named in Section 2. Otherwise every item below: `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.

- **CHK-P2A-001** — The shared permission engine was itself separately authorized, implemented, verified, and available before Phase 2a activation began.
  - **Phase / Component:** Phase 2a.
  - **Locked-Source Reference:** Engineering Contract §16 "Phase 2a"; Lovable Build Prompt §9.
  - **Expected Result:** A cited, independent Mission Control record confirms the shared permission engine's own authorization, implementation, and verification, predating this activation.
  - **Verification Method:** Locate and read the cited shared-permission-engine mission's own completion/verification report.
  - **Evidence Location:** Cross-mission report reference.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P2A-002** — No new catalog command name was introduced for Phase 2a.
  - **Phase / Component:** Phase 2a.
  - **Locked-Source Reference:** Lovable Build Prompt §11 "Phase 2a — permission activation, not new commands."
  - **Expected Result:** The EIS §16 28-command list is unchanged; Phase 2a activates checks on existing Phase 1 commands only.
  - **Verification Method:** Diff of `pg_proc` command list before/after Phase 2a activation.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P2A-003** — All eight action-specific permission flags and the `inventory_view` dependency are enforced exactly as locked.
  - **Phase / Component:** Phase 2a.
  - **Locked-Source Reference:** Blueprint §8 "Permissions"; D-016, D-033–D-035, D-048; EIS §8.
  - **Expected Result:** Each of `catalog_view`, `catalog_product_manage`, `catalog_lifecycle_manage`, `catalog_price_manage`, `catalog_tax_manage`, `catalog_cost_manage`, `catalog_inventory_link_manage`, `sale_use`, and `inventory_view` (for linking) is independently checked by its assigned command, matching the EIS §8 flag-to-action mapping exactly.
  - **Verification Method:** Per-flag authenticated test: attempt each gated action as a user holding only that flag, and as a user lacking it.
  - **Evidence Location:** Authenticated test-run output/screenshots per flag.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P2A-004** — Employee default denial of owner financial intelligence is preserved after Phase 2a activation.
  - **Phase / Component:** Phase 2a.
  - **Locked-Source Reference:** D-014, D-016, D-035; Lovable Build Prompt §19.
  - **Expected Result:** A sale-authorized employee still cannot see reference cost, margin-adjacent data, or protected histories after permission-engine activation.
  - **Verification Method:** Authenticated test as an employee-role user against a read command returning cost fields.
  - **Evidence Location:** Test output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 10. Phase 2b — Import-Scope Verification

Applies only if Phase 2b is named in Section 2. Otherwise every item below: `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.

- **CHK-P2B-001** — Only `create_catalog_import_job`, `stage_catalog_import_rows`, and `apply_catalog_import_valid_rows`, plus locked supporting reads, are implemented.
  - **Phase / Component:** Phase 2b.
  - **Locked-Source Reference:** EIS §16; Lovable Build Prompt §11 "Phase 2b."
  - **Expected Result:** No import-related command exists outside this exact list.
  - **Verification Method:** `pg_proc` listing filtered to import-related names.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P2B-002** — Import is restricted to the owner or a manager holding product-creation permission.
  - **Phase / Component:** Phase 2b (interacts with Phase 2a if active).
  - **Locked-Source Reference:** D-058; Lovable Build Prompt §17.
  - **Expected Result:** An employee-role user cannot call `create_catalog_import_job`.
  - **Verification Method:** Authenticated test as an employee.
  - **Evidence Location:** Test output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 11. Phase 3 — Conversational-Engine Gate Verification

Applies only if Phase 3 is named in Section 2. Otherwise every item below: `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.

- **CHK-P3-001** — The shared conversational engine was itself separately authorized, implemented, verified, and available before Phase 3 work began.
  - **Phase / Component:** Phase 3.
  - **Locked-Source Reference:** Engineering Contract §20; Lovable Build Prompt §9.
  - **Expected Result:** A cited, independent Mission Control record confirms the shared conversational engine's (Source 04/05 pipeline) own authorization, implementation, and verification, predating this work.
  - **Verification Method:** Locate and read the cited shared-conversational-engine mission's own completion/verification report.
  - **Evidence Location:** Cross-mission report reference.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-P3-002** — Only `create_catalog_pending_action` and `confirm_catalog_pending_action`, plus the locked channel/outcome-reconciliation boundary, are implemented.
  - **Phase / Component:** Phase 3.
  - **Locked-Source Reference:** EIS §16; Lovable Build Prompt §11 "Phase 3."
  - **Expected Result:** No additional channel command exists.
  - **Verification Method:** `pg_proc` listing filtered to channel-related names.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 12. Environment-Gated Scheduler Verification

Applies only if the environment-gated scheduler is named in Section 2. Otherwise every item below: `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.

- **CHK-SCHED-001** — The scheduler uses the Pattern A external-worker design with no in-database multi-commit procedure.
  - **Phase / Component:** Environment-gated scheduler.
  - **Locked-Source Reference:** EIS §12; Engineering Contract §18; Lovable Build Prompt §18.
  - **Expected Result:** `list_due_catalog_price_schedule_candidates` and `activate_catalog_price_schedule` are ordinary `FUNCTION`s, not `PROCEDURE`s; neither contains `COMMIT`/`ROLLBACK`.
  - **Verification Method:** `SELECT prokind FROM pg_proc WHERE proname IN (...)`; read function source for transaction-control statements.
  - **Evidence Location:** SQL query output and function source.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SCHED-002** — Candidate listing occurs once per run, bounded and ordered; activation is attempted once per candidate.
  - **Phase / Component:** Environment-gated scheduler.
  - **Locked-Source Reference:** EIS §12 "Run Sequence"; Engineering Contract §18.
  - **Expected Result:** Worker logs show exactly one candidate-list call per run and one activation call per listed candidate, regardless of individual outcomes.
  - **Verification Method:** Inspect worker run logs across several runs, including at least one with a candidate failure.
  - **Evidence Location:** Worker/Edge Function logs.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SCHED-003** — Claiming is transaction-scoped only; no durable scheduler-claim field exists.
  - **Phase / Component:** Environment-gated scheduler.
  - **Locked-Source Reference:** EIS §5.3; Engineering Contract §18.
  - **Expected Result:** `catalog_pending_price_schedules` has no `claimed_at`, `claimed_by`, or equivalent column; `activate_catalog_price_schedule` uses `FOR UPDATE SKIP LOCKED`.
  - **Verification Method:** `\d catalog_pending_price_schedules`; function source review.
  - **Evidence Location:** Schema inspection output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SCHED-004** — Supabase Scheduled Edge Function or `pg_cron` + `pg_net` availability is objectively verified, and `catalog_scheduler_service` is properly credentialed with zero direct protected-table DML.
  - **Phase / Component:** Environment-gated scheduler. **[ENVIRONMENT VERIFICATION]**
  - **Locked-Source Reference:** EIS §20 step 12; Engineering Contract §18, §23, §27; Lovable Build Prompt §18.
  - **Expected Result:** The deployed environment demonstrably supports the chosen trigger mechanism; `catalog_scheduler_service`'s privilege set contains `EXECUTE` only on the two scheduler functions and no table-level grant.
  - **Verification Method:** Environment configuration inspection; `information_schema.role_table_grants` query for `catalog_scheduler_service`.
  - **Evidence Location:** Environment configuration screenshot/export; SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 13. Frontend Route, Navigation, Component, and UX Verification

- **CHK-FE-001** — New routes follow the existing TanStack Router file-based convention and reuse `authed-header.tsx` for navigation.
  - **Phase / Component:** Phase 1, Phase 2b.
  - **Locked-Source Reference:** Lovable Build Prompt §6 "Reuse Requirements."
  - **Expected Result:** No parallel navigation or routing mechanism was introduced; new routes live under `src/routes/_authenticated/`, guarded by the existing `beforeLoad` pattern.
  - **Verification Method:** File-tree review of `src/routes/` and `src/components/authed-header.tsx` diff.
  - **Evidence Location:** Repository diff.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-FE-002** — Permission-aware rendering: no action the current user cannot execute is presented as available.
  - **Phase / Component:** Phase 1, Phase 2a.
  - **Locked-Source Reference:** Lovable Build Prompt §10; Blueprint §9 "Permission Behaviour."
  - **Expected Result:** UI hides or disables unavailable actions without disclosing other-business data.
  - **Verification Method:** Authenticated runtime walkthrough as different role/business combinations.
  - **Evidence Location:** Screenshots per role/business combination.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-FE-003** — Current and pending price are visually distinct; business timezone and two-decimal precision are respected; tax-inclusive/exclusive mode is clearly stated.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Lovable Build Prompt §10 "Price Experience"; Blueprint §9 "Price Experience."
  - **Expected Result:** Price UI matches these requirements exactly.
  - **Verification Method:** Runtime UI walkthrough with a scheduled price present.
  - **Evidence Location:** Screenshots.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-FE-004** — The D-068 preview UI shows exactly the required content for both first-time assignment and replacement.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Lovable Build Prompt §15 "D-068"; Blueprint §9 "Inventory-Link Experience."
  - **Expected Result:** Preview screens match Section 18 of this checklist's D-068 expected content exactly.
  - **Verification Method:** Runtime walkthrough of both first-time assignment and replacement flows.
  - **Evidence Location:** Screenshots of both flows.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 14. Backend Schema, Function, Role, Grant, and Execution-Boundary Verification

- **CHK-BE-001** — The three-layer execution identity model matches EIS §7 exactly for every role/identity used by the authorized phase(s).
  - **Phase / Component:** Cross-phase, scoped to what is authorized.
  - **Locked-Source Reference:** EIS §7; Engineering Contract §15, §23; Lovable Build Prompt §11 "Security and Privilege Verification."
  - **Expected Result:** Layer 1 identities (`authenticated`, and `catalog_channel_service`/`catalog_scheduler_service` only if their phase is authorized) hold `EXECUTE` only; Layer 2 owner roles used by the authorized phase hold exactly their EIS §7 grant-table privileges and no others; Layer 3 `GRANT EXECUTE` is scoped to the correct Layer 1 identity per function.
  - **Verification Method:** `information_schema.role_table_grants`, `information_schema.routine_privileges`, and `\df+` inspection for every role/function the authorized phase uses.
  - **Evidence Location:** SQL privilege-inspection output, stored as evidence artifacts.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-BE-002** — `REVOKE EXECUTE ... FROM PUBLIC` is applied to every implemented command function.
  - **Phase / Component:** Cross-phase, scoped to what is authorized.
  - **Locked-Source Reference:** EIS §7 "Function-Level Requirements"; Engineering Contract §13, §27.
  - **Expected Result:** No implemented command function is callable by `PUBLIC`.
  - **Verification Method:** `SELECT has_function_privilege('public', '<function>', 'EXECUTE')` for every implemented function; expect `false`.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-BE-003** — Every implemented command function sets a fixed `search_path` and uses fully schema-qualified references.
  - **Phase / Component:** Cross-phase, scoped to what is authorized.
  - **Locked-Source Reference:** EIS §7.
  - **Expected Result:** `pg_get_functiondef` output shows `SET search_path = public` and no unqualified object reference.
  - **Verification Method:** Function source inspection.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-BE-004** — The locked, phase-scoped 28-command surface is exactly what is implemented for the authorized phase(s), with no alternate name, substitute RPC, or additional command.
  - **Phase / Component:** All phases (scoped per group below).
  - **Locked-Source Reference:** EIS §16; Engineering Contract §11, §13; Lovable Build Prompt §11.
  - **Expected Result:** For each authorized phase, exactly its named commands exist and no others, matching this grouping:
    - **Phase 1 (21 commands):** `create_catalog_product`, `update_catalog_product_identity`, `update_catalog_product_unit`, `create_catalog_category`, `archive_catalog_category`, `archive_catalog_product`, `reactivate_catalog_product`, `delete_catalog_product`, `record_catalog_selling_price_change`, `schedule_catalog_selling_price`, `cancel_scheduled_catalog_selling_price`, `record_catalog_tax_change`, `update_business_tax_settings`, `record_catalog_reference_cost_change`, `preview_catalog_inventory_link_change`, `assign_or_replace_catalog_inventory_link`, `remove_catalog_inventory_link`, `get_catalog_command_outcome`, `catalog_products_search`, `catalog_product_read`, `catalog_products_list_batch`.
    - **Phase 2a (0 new commands):** permission-engine enforcement activated on the Phase 1 commands above only.
    - **Phase 2b (3 commands):** `create_catalog_import_job`, `stage_catalog_import_rows`, `apply_catalog_import_valid_rows`.
    - **Phase 3 (2 commands):** `create_catalog_pending_action`, `confirm_catalog_pending_action`.
    - **Environment-gated scheduler (2 commands):** `list_due_catalog_price_schedule_candidates`, `activate_catalog_price_schedule`.
  - **Verification Method:** `SELECT proname FROM pg_proc WHERE pronamespace = 'public'::regnamespace AND proname LIKE 'catalog%' OR proname LIKE '%catalog%'`; diff against the phase's authorized list.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-BE-005** — No command outside the authorized phase(s) is implemented, scaffolded, exposed, granted, deployed, or partially activated.
  - **Phase / Component:** Cross-phase.
  - **Locked-Source Reference:** Lovable Build Prompt §11; instruction1.24.md §7, §8.
  - **Expected Result:** For every command in a phase group not named in Section 2's declaration, the command does not exist in `pg_proc`, has no route/UI surface, and has no `EXECUTE` grant to any Layer 1 identity.
  - **Verification Method:** `pg_proc` absence check; route/component absence check; grant absence check, for each unauthorized-phase command.
  - **Evidence Location:** SQL query output; repository search output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-BE-006** — Full-package privilege verification (all ten Layer 2 roles and both service identities) is required only once every phase and gated component is authorized and implemented.
  - **Phase / Component:** Structural exception to the mandatory-every-run rule (Section 2) — full-package completion is itself a distinct, separately tracked authorization milestone, not an ordinary "phase not named" deferral; this item alone may legitimately remain unexecuted until that milestone is reached.
  - **Locked-Source Reference:** Engineering Contract §26, §27; Lovable Build Prompt §24 (MC-LBP-003 corrected text).
  - **Expected Result:** Until all phases/gates are authorized and built, this item is correctly deferred, not failed.
  - **Verification Method:** N/A until full-package state is reached.
  - **Evidence Location:** N/A.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification — this item becomes executable only once every phase group is separately authorized and complete]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 15. Command-Only Write Verification

- **CHK-CMD-001** — No protected catalog table grants `INSERT`/`UPDATE`/`DELETE` to `authenticated` or any client-reachable role.
  - **Phase / Component:** Cross-phase, scoped to tables the authorized phase creates.
  - **Locked-Source Reference:** EIS §6; Engineering Contract §13; Lovable Build Prompt §12.
  - **Expected Result:** RLS policy inspection shows `INSERT`/`UPDATE`/`DELETE` policy count of zero for `authenticated` on every protected catalog table.
  - **Verification Method:** `SELECT * FROM pg_policies WHERE tablename = '<table>'` for every new table; confirm no write policy grants `authenticated`.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-CMD-002** — Attempting a direct client-side `INSERT`/`UPDATE`/`DELETE` against a protected table fails.
  - **Phase / Component:** Cross-phase, scoped to tables the authorized phase creates.
  - **Locked-Source Reference:** EIS §3, §6; Lovable Build Prompt §12.
  - **Expected Result:** A direct Supabase client write against any protected catalog table returns a permission-denied error.
  - **Verification Method:** Authenticated client-side write attempt against each new protected table.
  - **Evidence Location:** Test output/error capture.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 16. Business Isolation and Server-Derived Scope Verification

- **CHK-ISO-001** — Every new table carries `business_id` and the standard owner-subquery RLS pattern.
  - **Phase / Component:** Cross-phase, scoped to tables the authorized phase creates.
  - **Locked-Source Reference:** Engineering Contract §14; Lovable Build Prompt §13.
  - **Expected Result:** Every protected catalog table has a `business_id` column and an RLS `SELECT`/read policy scoped through `business_id IN (SELECT id FROM public.businesses WHERE owner_id = auth.uid())` (or the Phase 2a equivalent once active).
  - **Verification Method:** `\d` and `pg_policies` inspection per table.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-ISO-002** — `get_catalog_command_outcome` accepts no caller-supplied business parameter, and a cross-business idempotency-key probe returns the same result as a nonexistent key.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §11 (MC-VRF-009); Engineering Contract §14, §27.
  - **Expected Result:** Function signature has no `p_business_id` parameter; a valid key belonging to Business B, queried as a user of Business A, returns `not_found`, identical to a fabricated key.
  - **Verification Method:** Function signature inspection; two-business authenticated cross-probe test.
  - **Evidence Location:** SQL query output; test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-ISO-003** — Search, validation, duplicate checks, import, and error messages do not disclose another business's records.
  - **Phase / Component:** Phase 1, Phase 2b.
  - **Locked-Source Reference:** Blueprint §8 "Business Ownership and Isolation"; Rule 1, Rule 4.
  - **Expected Result:** No cross-business record, name, SKU, or barcode is ever surfaced to a caller outside its own business, in any response or error.
  - **Verification Method:** Two-business authenticated cross-probe on search, duplicate-name creation, and import.
  - **Evidence Location:** Test transcripts.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 17. Catalog and Inventory Separation Verification

- **CHK-SEP-001** — No catalog table, function, or code path writes to `inventory_items` or `inventory_movements`.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Engineering Contract §9; Lovable Build Prompt §14.
  - **Expected Result:** Zero write references to `inventory_items`/`inventory_movements` anywhere in the catalog diff outside read-only `SELECT`.
  - **Verification Method:** Full-text search of the diff for `inventory_items`/`inventory_movements`; confirm read-only usage only.
  - **Evidence Location:** Search output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SEP-002** — Stock-tracked/non-stock status is derived only from the inventory link; no separate editable type field exists.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Blueprint §8 "Stock-Tracked and Non-Stock Products"; D-050.
  - **Expected Result:** No `product_type` or equivalent independently-settable column exists on `catalog_products`.
  - **Verification Method:** `\d catalog_products` schema inspection.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SEP-003** — Ledger-derived current stock is exposed only through a permission-aware read path, never a raw table `SELECT`, and requires `inventory_view`.
  - **Phase / Component:** Phase 1 (full enforcement in Phase 2a).
  - **Locked-Source Reference:** Blueprint §20 "Privacy"; Lovable Build Prompt §14.
  - **Expected Result:** No client-reachable role holds direct `SELECT` on `inventory_items`/`inventory_movements`; stock display goes through a `SECURITY DEFINER` read path.
  - **Verification Method:** RLS/grant inspection on the inventory tables; UI stock-display trace.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 18. Price, Tax, Reference-Cost, D-047, and D-068 Integrity Verification

- **CHK-PTC-001** — Selling price, reference cost, and tax history are append-only, immutable event tables.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §5.0, §11; Engineering Contract §10.
  - **Expected Result:** `catalog_selling_price_events`, `catalog_tax_events`, `catalog_reference_cost_events` reject `UPDATE`/`DELETE` (trigger or privilege enforced).
  - **Verification Method:** Attempted `UPDATE`/`DELETE` against each table as the owning executor role; expect rejection.
  - **Evidence Location:** SQL test output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-PTC-002** — Selling price is optional during setup, required greater-than-zero for sale eligibility, two-decimal precision, no hidden rounding.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Blueprint §8 "Selling Price"; D-009, D-039, D-042.
  - **Expected Result:** Zero/negative price rejected for sale readiness; a fractional-paise value round-trips without silent rounding.
  - **Verification Method:** Boundary-value test (zero, negative, 2-decimal, 3-decimal input).
  - **Evidence Location:** Test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-D047-001** — The D-047 tenure-bounded predicate is enforced exactly as locked.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §9 (quoted verbatim in Engineering Contract §11, Lovable Build Prompt §15).
  - **Expected Result:** Link/unlink/replace is permitted before tenure-scoped sale or stock-event history exists and blocked after; a pre-tenure inventory movement does not count against the current tenure.
  - **Verification Method:** Scenario test: (a) link with no history → allowed to unlink; (b) link, record a movement, then attempt unlink → blocked; (c) link, unlink, relink to a previously-moved item, confirm pre-relink movements do not block the new tenure.
  - **Evidence Location:** Test transcripts covering all three scenarios.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-D068-001** — The D-068 safeguard is implemented as a single atomic RPC following the exact nine-step commit model.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §10; Engineering Contract §12; Lovable Build Prompt §15.
  - **Expected Result:** `assign_or_replace_catalog_inventory_link` is one transaction; auth/permission check, idempotency-first, token resolution, deterministic row locks, recompute-and-compare, confirmation completeness, atomic writes, bookkeeping finalization, and exception-only rollback all occur inside it, in that order.
  - **Verification Method:** Function source review against the nine steps; step-by-step test of each rejection category (`PERMISSION_DENIED`, `STALE_STATE` ×2, `PRICE_CONFIRMATION_REQUIRED`).
  - **Evidence Location:** Function source; test transcripts per rejection category.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-D068-002** — Cancellation, incomplete confirmation, validation failure, and save failure each leave the existing product, link state, unit, and price completely unchanged.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Blueprint §8; Rule 28; D-068.
  - **Expected Result:** All four no-change failure modes verified to leave zero side effects on protected state.
  - **Verification Method:** Before/after state snapshot comparison for each of the four failure modes.
  - **Evidence Location:** State snapshots (query output) per mode.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 19. Idempotency, Audit, Provenance, Stale-State, Rejection, and Unknown-Outcome Verification

- **CHK-IDEM-001** — Idempotency resolves before mutable-state evaluation, and `catalog_write_idempotency_keys.status` has exactly two terminal values.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §11; Engineering Contract §17.
  - **Expected Result:** Repeating a call with the same key and payload returns the original result without re-evaluating preconditions; `status` column type/check constraint allows only `completed`/`rejected`.
  - **Verification Method:** Repeat-call test; schema constraint inspection.
  - **Evidence Location:** Test transcript; schema inspection output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-IDEM-002** — Same key with a different payload fingerprint returns `rejected`/`IDEMPOTENCY_CONFLICT`.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §11.
  - **Expected Result:** Confirmed rejection category returned, no business write occurs.
  - **Verification Method:** Repeat-call test with altered payload.
  - **Evidence Location:** Test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-AUD-001** — Every dedicated event table and `catalog_audit_events` carry the full Section 5.0 provenance shape, including `authority_basis`.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §5.0; Engineering Contract §17.
  - **Expected Result:** `authorized_by_user_id`, `executed_by_actor_type`, `system_run_id`, `channel`, `request_id`, `authority_basis`, `recorded_at` present and populated correctly on every write.
  - **Verification Method:** Schema inspection plus a live write, inspecting the resulting row.
  - **Evidence Location:** Schema inspection output; sample row.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-STALE-001** — Stale-state comparisons (recompute-and-compare, token resolution) correctly reject drifted state.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §10.
  - **Expected Result:** A concurrent modification between preview and commit produces `rejected`/`STALE_STATE`.
  - **Verification Method:** Two-session concurrency test: preview, modify state in a second session, then commit the first.
  - **Evidence Location:** Test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-REJ-001** — Every named rejection category durably persists its idempotency-key row and token consumption.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §10; Engineering Contract §26, §27.
  - **Expected Result:** After each rejection type, `catalog_write_idempotency_keys` and (for D-068) `catalog_link_preview_tokens.consumed_at` are durably updated, verified by direct query, not only client response inspection.
  - **Verification Method:** Injected-fault test per rejection category, followed by direct database query.
  - **Evidence Location:** SQL query output per category.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-UNK-001** — Unknown-outcome reconciliation returns exactly one of `not_found`, `rejected`, or `completed`, and is never reported as "nothing changed" before reconciliation.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** EIS §11; Lovable Build Prompt §22.
  - **Expected Result:** A simulated transport failure after dispatch resolves to a definitive state via `get_catalog_command_outcome`, and the client-facing message does not claim "nothing changed" until that resolution completes.
  - **Verification Method:** Simulated timeout/connection-drop test after dispatch, followed by outcome-lookup call.
  - **Evidence Location:** Test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 20. Same-Actor Confirmation Verification

- **CHK-ACT-001** — `confirm_catalog_pending_action` requires `p_confirming_actor_user_id = catalog_channel_pending_actions.actor_user_id` exactly; any mismatch is an unconditional `rejected`/`ACTOR_MISMATCH`.
  - **Phase / Component:** Phase 3.
  - **Locked-Source Reference:** EIS §15; Lovable Build Prompt §16.
  - **Expected Result:** A confirmation attempt from any actor other than the pending action's original actor is rejected unconditionally, including from an actor holding the same permission flag.
  - **Verification Method:** Two-actor test: actor A creates the pending action, actor B (same business, same permission flag) attempts confirmation.
  - **Evidence Location:** Test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 21. File Scanning and Import-Safety Verification

- **CHK-SCAN-001** — `product_image` and `import_source` require server-recorded `clean` scan status; `not_required` is rejected.
  - **Phase / Component:** Phase 1 (image), Phase 2b (import).
  - **Locked-Source Reference:** EIS §14; Engineering Contract §19; Lovable Build Prompt §17.
  - **Expected Result:** Linking a file with `safety_scan_status` other than `clean` is rejected at every re-check point (`create_catalog_product`/`update_catalog_product_identity`, `create_catalog_import_job`, `stage_catalog_import_rows`).
  - **Verification Method:** Attempt linking with each non-`clean` status, including `not_required`, at each re-check point.
  - **Evidence Location:** Test transcripts per re-check point.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SCAN-002** — Client-supplied purpose or scan status is never authoritative.
  - **Phase / Component:** Phase 1, Phase 2b.
  - **Locked-Source Reference:** EIS §14.
  - **Expected Result:** A call parameter attempting to override purpose/scan status has no effect; the server-recorded `catalog_file_references` value governs.
  - **Verification Method:** Attempt to pass an overriding parameter; confirm no effect.
  - **Evidence Location:** Test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SCAN-003** — Invalid import rows are quarantined without creating live products; existing matches are never auto-overwritten.
  - **Phase / Component:** Phase 2b.
  - **Locked-Source Reference:** Blueprint §8 "CSV and Excel Bulk Import"; D-055–D-057.
  - **Expected Result:** An invalid row produces no live product; a name/SKU/barcode match enters the correction queue rather than silently overwriting.
  - **Verification Method:** Import test file containing an invalid row and a duplicate-matching row; inspect resulting state.
  - **Evidence Location:** Test transcript; database state after import.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 22. Employee Financial-Intelligence Restriction Verification

- **CHK-EMP-001** — A sale-authorized employee cannot see reference cost, margin-adjacent data, protected histories, or management controls.
  - **Phase / Component:** Phase 2a (full enforcement); Phase 1 (Owner-only, so implicitly satisfied by absence of employee access).
  - **Locked-Source Reference:** D-014, D-016, D-035; Lovable Build Prompt §19.
  - **Expected Result:** No response payload to an employee-role caller includes cost fields, margin-adjacent data, or history/management endpoints.
  - **Verification Method:** Authenticated employee-role test against every read command.
  - **Evidence Location:** Test transcripts per command.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 23. AI Assistant, Not AI Judge Verification

- **CHK-AI-001** — AI never invents a missing price, legal tax treatment, or permission, and never saves an uncertain consequential change without explicit human confirmation.
  - **Phase / Component:** Phase 1 (dashboard-guided), Phase 3 (channel).
  - **Locked-Source Reference:** Blueprint §5; Lovable Build Prompt §16, §21.
  - **Expected Result:** Every AI-assisted consequential change requires an explicit confirmation step; no code path allows an AI-originated write to bypass the D-068/idempotency-first/preview-token model.
  - **Verification Method:** Design review of AI-assisted flows against the confirmation requirement; attempt to trigger a save without confirmation.
  - **Evidence Location:** Design review notes; test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-AI-002** — Uncertain multilingual match suggestions are presented as suggestions only, never auto-applied.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Blueprint §5, §8 "Search and Filtering"; EIS §13.
  - **Expected Result:** A possible-match suggestion (Malayalam/Manglish/translation) never silently renames, merges, or overwrites a record.
  - **Verification Method:** Create near-duplicate records in different scripts/transliterations; confirm no auto-merge.
  - **Evidence Location:** Test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 24. English, Malayalam, and Manglish UX Verification

- **CHK-UX-001** — Product/category names, descriptions, and SKUs preserve exact merchant-entered wording in English, Malayalam, and Manglish, with no forced translation.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Blueprint §8, §9 "Multilingual Catalog Experience"; EIS §13.
  - **Expected Result:** Stored and displayed wording is byte-identical to merchant input regardless of script.
  - **Verification Method:** Create records in each script; inspect stored/displayed value.
  - **Evidence Location:** Test transcript/screenshots.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-UX-002** — Business-scoped uniqueness normalization (whitespace, Latin-case) does not alter stored display wording.
  - **Phase / Component:** Phase 1.
  - **Locked-Source Reference:** Blueprint Rule 8, Rule 9, Rule 27.
  - **Expected Result:** A name entered with irregular whitespace/case is correctly deduplicated against an equivalent existing name, while the original display value remains unmodified.
  - **Verification Method:** Attempt to create a near-duplicate with different whitespace/case; inspect stored value of both.
  - **Evidence Location:** Test transcript.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 25. Standard POS Bridge and Rejected Custom-POS Boundary Verification

- **CHK-POS-001** — No POS integration, synchronization, or bridge code, and no custom POS modification inside the Smart Business core, exists anywhere in the diff.
  - **Phase / Component:** Cross-phase.
  - **Locked-Source Reference:** Blueprint §2, §11; Lovable Build Prompt §20.
  - **Expected Result:** Zero POS-related code, table, or route in the diff.
  - **Verification Method:** Full-text search of the diff for POS-related terms; manual review.
  - **Evidence Location:** Search output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 26. Merchant-Safe Error and Rejection-Message Verification

- **CHK-MSG-001** — Every rejection category maps to a specific, plain-language, merchant-safe message; no raw error code, stack trace, or constraint name is exposed.
  - **Phase / Component:** Phase 1, Phase 3.
  - **Locked-Source Reference:** Lovable Build Prompt §22; Engineering Contract §25.
  - **Expected Result:** UI/reply text for each named rejection category is plain language and stable; no raw backend detail leaks.
  - **Verification Method:** Trigger each rejection category; inspect the exact user-facing message.
  - **Evidence Location:** Screenshots/reply transcripts per category.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-MSG-002** — The four channel failure categories (`PRE_COMMAND_PROCESSING_FAILED`, `COMMAND_REJECTED`, `UNKNOWN_OUTCOME`, `CONFIRMED_SUCCESS`) are distinguished correctly.
  - **Phase / Component:** Phase 3.
  - **Locked-Source Reference:** EIS §15; Lovable Build Prompt §22.
  - **Expected Result:** Each simulated failure type resolves to the correct one of the four categories, with `PRE_COMMAND_PROCESSING_FAILED` never producing a server-recorded idempotency-key row.
  - **Verification Method:** Simulated failure test per category, cross-checked against idempotency-key table state.
  - **Evidence Location:** Test transcripts; SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 27. Test Execution and Quality-Gate Verification

- **CHK-TEST-001** — Automated test coverage exists for every applicable item in EIS §21 "Testing and Verification Matrix" and Engineering Contract §26, scoped to the authorized phase.
  - **Phase / Component:** Cross-phase, scoped to what is authorized.
  - **Locked-Source Reference:** EIS §21; Engineering Contract §26; Lovable Build Prompt §24 (MC-LBP-003 corrected text).
  - **Expected Result:** Test suite exists and passes for every phase-applicable item; items outside the authorized phase are absent, not failing.
  - **Verification Method:** Run the test suite; inspect coverage report against the EIS §21 matrix.
  - **Evidence Location:** Test run output, coverage report.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-TEST-002** — The repository Markdown Quality Gate passes on every Markdown file the implementation touches.
  - **Phase / Component:** Cross-phase.
  - **Locked-Source Reference:** Repository-wide tooling (`tools/markdown/quality_gate.py`).
  - **Expected Result:** `python tools/markdown/quality_gate.py <files>` reports `QUALITY GATE PASSED` for every changed Markdown file.
  - **Verification Method:** Run the quality gate against the implementation's changed Markdown files.
  - **Evidence Location:** Quality gate output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 28. Lovable Implementation and Publication Verification

Applies only after a phase is separately authorized, implemented, and the Lovable Build Prompt has actually been pasted into Lovable under its own separate authorization. Otherwise: `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.

- **CHK-LOV-001** — Lovable implementation matches the locked, phase-scoped prompt exactly, with no independent scope expansion.
  - **Phase / Component:** Whichever phase(s) were pasted and built.
  - **Locked-Source Reference:** Lovable Build Prompt (entire document, as locked).
  - **Expected Result:** Lovable's generated code implements only the authorized phase's scope; no Build Later/Add-on/Separate Product/Reject capability appears.
  - **Verification Method:** Review Lovable's diff/edit history against the prompt's authorized scope.
  - **Evidence Location:** Lovable edit history export.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-LOV-002** — Lovable publish succeeded and the published preview reflects the reviewed implementation.
  - **Phase / Component:** Whichever phase(s) were pasted and built.
  - **Locked-Source Reference:** Engineering Contract §21 (evidence precedent); Lovable Build Prompt §24.
  - **Expected Result:** Publish status confirmed; preview URL matches the reviewed commit.
  - **Verification Method:** Lovable publish-status inspection.
  - **Evidence Location:** Lovable project status screenshot/export.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 29. Supabase Migration, RLS, RPC, Role, Privilege, and Environment Verification

- **CHK-SUPA-001** — Migrations apply cleanly and follow the existing `supabase/migrations/<UTC-timestamp>_<uuid>.sql` naming convention.
  - **Phase / Component:** Cross-phase, scoped to what is authorized.
  - **Locked-Source Reference:** Lovable Build Prompt §5.
  - **Expected Result:** Migration files apply without error on a clean database matching the pre-implementation schema.
  - **Verification Method:** `supabase db push` (or equivalent) against a test database; inspect result.
  - **Evidence Location:** Migration run output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SUPA-002** — RLS is enabled on every new table before any application code path is granted access.
  - **Phase / Component:** Cross-phase, scoped to what is authorized.
  - **Locked-Source Reference:** EIS §20 step 5; Engineering Contract §23.
  - **Expected Result:** `SELECT relrowsecurity FROM pg_class WHERE relname = '<table>'` returns `true` for every new protected table.
  - **Verification Method:** SQL query per table.
  - **Evidence Location:** SQL query output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

- **CHK-SUPA-003** — `get_advisors` (or equivalent Supabase security/lint tooling) reports no new critical finding introduced by this implementation.
  - **Phase / Component:** Cross-phase, scoped to what is authorized.
  - **Locked-Source Reference:** Repository-wide security practice.
  - **Expected Result:** No new critical/high advisory finding attributable to the new schema/functions.
  - **Verification Method:** Run Supabase advisors against the post-migration database.
  - **Evidence Location:** Advisor report output.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 30. Production-Domain Verification at `smartbusiness.teamlips.com`

Applies only after a phase is separately authorized, implemented, and deployed to production under its own separate authorization. Otherwise: `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.

- **CHK-PROD-001** — The authorized phase's functionality is live and correct at `smartbusiness.teamlips.com`, matching the reviewed implementation.
  - **Phase / Component:** Whichever phase(s) were deployed.
  - **Locked-Source Reference:** `AGENTS.md` Product Domain; Lovable Build Prompt §24.
  - **Expected Result:** Production runtime behaviour matches the verified pre-production behaviour for every item scored `PASS` above.
  - **Verification Method:** Authenticated production runtime walkthrough.
  - **Evidence Location:** Production screenshots/transcripts.
  - **Actual Result:** [To be completed during the authorized verification run]
  - **Outcome:** [Select one authorized outcome during verification]
  - **Verifier Notes:** [To be completed]
  - **Defect Reference:** [Required only for FAIL; otherwise —]

---

## 31. Phase-Scoped Deferred-Obligation Register

Every item elsewhere in this checklist scored `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED` must be listed here at the time of a live verification run, grouped by the phase or component it belongs to, so the register is a single place confirming nothing was silently skipped versus deliberately deferred. As prepared, this register is empty because no live verification run has occurred.

```text
DEFERRED — PHASE 1: [ populated at live verification time if Phase 1 is not the phase under review ]
DEFERRED — PHASE 2A: [ populated at live verification time if Phase 2a is not the phase under review ]
DEFERRED — PHASE 2B: [ populated at live verification time if Phase 2b is not the phase under review ]
DEFERRED — PHASE 3: [ populated at live verification time if Phase 3 is not the phase under review ]
DEFERRED — ENVIRONMENT-GATED SCHEDULER: [ populated at live verification time if the scheduler is not in scope ]
```

A deferred obligation must never be reclassified as a defect (Section 32) unless the phase's own authorization explicitly included it and it was not delivered.

---

## 32. Defect and Deviation Register

No defect exists yet, because no live verification run has occurred against this draft checklist. When used live, record every `FAIL` outcome here:

| Defect ID | Checklist ID | Phase | Violated Requirement | Description | Required Correction | Status |
|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — |

A `BLOCKED — CLARIFICATION REQUIRED` outcome is recorded here too, with "Required Correction" replaced by the specific clarification needed from Mission Control.

---

## 33. Evidence Index

An index of every evidence artifact referenced by a checklist item's Evidence Location field, to be populated during a live verification run. As prepared, this index is empty.

| Evidence ID | Checklist ID(s) | Type (documentary / repository / database / runtime / security / production) | Location / Path | Description |
|---|---|---|---|---|
| — | — | — | — | — |

---

## 34. Final Disposition and Recommended Next Action

```text
VERIFICATION RUN STATUS: NOT YET EXECUTED
ITEMS PASSED: 0
ITEMS FAILED: 0
ITEMS NOT AUTHORIZED IN THIS PHASE -- NOT IMPLEMENTED: 0
ITEMS NOT APPLICABLE: 0
ITEMS BLOCKED -- CLARIFICATION REQUIRED: 0
ITEMS AWAITING FIRST EXECUTION (UNEXECUTED TEMPLATE PLACEHOLDER): ALL
```

This document, as prepared, is an unexecuted template only (corrected per MC-VC-001): no item carries any scored outcome, including `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`, because no live verification run has occurred and no implementation exists to verify — implementation remains unauthorized (Section 20 of `instruction1.24.md`). Every item's Actual Result, Outcome, Verifier Notes, and Defect Reference fields carry explicit unexecuted placeholders (Section 1) awaiting the first authorized verification run. The recommended next action is Mission Control review, acceptance, and lock of this checklist, following the same pattern already applied to the Engineering Contract and Lovable Build Prompt.

---

## 35. Traceability to the Four Locked Stage 12 Authorities and the Founder Product Decision Record

| Checklist Section | Blueprint / Founder Decision | EIS v2.2 Reference | Engineering Contract v1.1 Reference | Lovable Build Prompt v1.1 Reference |
|---|---|---|---|---|
| 7. Build Now and Exclusion Boundaries | §7, §8, §11 | §4–§23 | §4, §5 | §3, §4 |
| 8. Phase 1 Owner-Only Runtime | §8 "Permissions" | §8 | §16 (Phase 1) | §8 |
| 9. Phase 2a Permission-Engine Gate | §8 "Permissions"; D-016, D-033–D-035, D-048 | §8 | §16 (Phase 2a) | §9 |
| 10. Phase 2b Import Scope | §8 "CSV and Excel Bulk Import"; D-055–D-058 | §14 | §19, §24 | §11 |
| 11. Phase 3 Conversational-Engine Gate | §8 "WhatsApp, Voice, Text, and Photo Assistance"; D-053, D-054 | §15 | §20, §24 | §9, §11 |
| 12. Environment-Gated Scheduler | §8 "Scheduled Selling Price" | §12 | §18 | §18 |
| 13. Frontend Route/Nav/Component/UX | §9 | §10, §17 | §22 | §6, §10 |
| 14. Backend Schema/Function/Role/Grant | §20 | §5, §7, §16 | §7, §13, §15 | §11 |
| 15. Command-Only Writes | §8 (Business Rules) | §3, §6, §7 | §13 | §12 |
| 16. Business Isolation | §8 "Business Ownership and Isolation" | §6, §11 | §14 | §13 |
| 17. Catalog/Inventory Separation | §2, §8 | §3, §9 | §9 | §14 |
| 18. Price/Tax/Cost/D-047/D-068 | §8, §9 | §9, §10, §11 | §10, §11, §12 | §15 |
| 19. Idempotency/Audit/Stale/Rejection/Unknown-Outcome | §5 | §5.0, §10, §11, §18 | §17, §25 | §17, §22 |
| 20. Same-Actor Confirmation | §5 | §15 | §20 | §16 |
| 21. File Scanning/Import Safety | §8 | §14 | §19 | §17 |
| 22. Employee Restrictions | §8 "Permissions"; D-014, D-016, D-035 | §8 | §16, §19 | §19 |
| 23. AI Assistant, Not AI Judge | §5 | §3, §13 | §21 | §16, §21 |
| 24. Multilingual UX | §5, §8, §9 | §13 | §21 | §21 |
| 25. POS Boundary | §2, §11 | — | §5 | §20 |
| 26. Merchant-Safe Messaging | §5 | §10, §11, §15 | §25 | §22 |
| 27. Tests and Quality Gates | §20 "Verification Expectations" | §21 | §26 | §24 |
| 28. Lovable Publish Evidence | — | — | §21 (precedent) | §24 |
| 29. Supabase/Migration/RLS/Privilege/Environment | §20 | §14, §19, §20 | §20, §23 | §11, §18 |
| 30. Production-Domain Verification | — | — | §21 (precedent) | §24 |

Founder Decisions D-001 through D-068 are cited inline within each section above rather than repeated in this table; every citation traces to the same decision numbers the Engineering Contract's own traceability table (§28) and the Lovable Build Prompt's own traceability table (§27) already map to their sections.

### Engineering Contract §29.1 / §29.2 Preservation

This checklist preserves the distinction exactly as locked:

- **§29.1 — six genuinely open dispositions:** `pg_trgm` similarity threshold, final CSV/Excel structural limits, final index set, scheduler run interval/lag budget, permission/conversational-engine sequencing ownership, Edge Function/`pg_net` availability. None of these is a checklist defect; each remains `SPECIALIST REVIEW REQUIRED` or `REFINEMENT REQUIRED` as the Engineering Contract already states.
- **§29.2 — one separately resolved and preserved disposition:** selling-unit/price treatment upon inventory-link removal, `RESOLVED — ACCEPTED AS WRITTEN`. This checklist does not verify it as an open item, does not treat it as a dependency or stop condition, and does not reopen or reinterpret it.

---

## 36. Document Change Log

| Version | Description |
|---|---|
| 1.0 | Initial draft Verification Checklist, translating the locked SB-P-1.11 Product Blueprint (Sections 1–21), Founder Decisions D-001–D-068, locked EIS (Version 2.2), locked Engineering Contract (Version 1.1), and locked Lovable Build Prompt (Version 1.1) into a phase-scoped, evidence-driven verification instrument, per `instruction1.24.md`. Covers all 36 mandatory structural areas. Every checklist item defaults to `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED` because no implementation phase has been separately authorized as of this document's preparation. No new Product Truth, Founder decision, scope, or engineering behaviour introduced; no MC-VRF, MC-EC, or MC-LBP finding reopened. Not approved, not locked, no Founder Lovable Brief, no paste-into-Lovable authority, no implementation authority. |
| 1.1 | Narrow refinement authorized by `instruction1.25.md`, correcting Mission Control findings MC-VC-001 through MC-VC-003 identified in review of Version 1.0. Replaced every checklist item's pre-populated `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED` outcome and "Not yet executed" actual result with explicit unexecuted-template placeholders (`[To be completed during the authorized verification run]` / `[Select one authorized outcome during verification]` / `[To be completed]` / `[Required only for FAIL; otherwise —]`), so an unexecuted template no longer contains completed item-level outcomes (MC-VC-001, all 81 items plus the header banner and Section 34 status block). Added a "Mandatory Cross-Phase Controls" rule to Section 2, and corrected the Outcome Vocabulary's `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED` definition, so cross-phase preconditions and governance-integrity checks (Sections 3–7 and every later item designated cross-phase) are mandatory in every live verification run and may not receive the deferred outcome except for the one explicit structural exception (CHK-BE-006, gated on full-package completion) (MC-VC-002). Corrected "four locked authorities" terminology throughout to "four locked Stage 12 authorities," with the Founder Product Decision Record D-001 through D-068 treated consistently as a mandatory preserved decision source, independently traceable and unchanged, not counted among the four (MC-VC-003, Section 1, Section 35 title, CHK-FILES-001). No previously accepted content was reopened; no new Product Truth, Founder decision, scope, or engineering behaviour was introduced. Status remains DRAFT — MISSION CONTROL REVIEW REQUIRED; not approved, not locked, no Founder Lovable Brief, no paste-into-Lovable authority, no implementation authority. |
| 1.1 (Lock) | Mission Control completed review of Version 1.1, resolving MC-VC-001 through MC-VC-003 as `RESOLVED` and recording `VERIFICATION CHECKLIST REVIEW: PASSED`, `VERIFICATION CHECKLIST: ACCEPTABLE`, `FURTHER REFINEMENT REQUIRED: NO`. Per `instruction1.26.md`, this is a lock-only documentation change: Version 1.1's substantive content — the five controlled outcomes, ten-field item structure, unexecuted-template placeholders, mandatory cross-phase controls, phase-exclusive deferred-outcome rule, the five phase/gated-component groups, the locked 28-command grouping, the Owner-only Phase 1 boundary, the prohibition on a substitute permission engine, the shared-system and environment gates, command-only writes, business isolation, catalog/inventory separation, D-047, D-068, idempotency/rejection/unknown-outcome rules, same-actor confirmation, clean-file scanning, employee restrictions, AI Assistant boundaries, multilingual verification, the POS boundary, merchant-safe messaging, the evidence and defect model, the Engineering Contract §29.1/§29.2 separation, the four-locked-Stage-12-authority terminology, and the Founder Product Decision Record's treatment as an independently traceable preserved decision source — is unchanged. Only document status, approval metadata, and lock metadata were updated: status changed from `DRAFT — MISSION CONTROL REVIEW REQUIRED` to `LOCKED — MISSION CONTROL ACCEPTED`; approval changed from not granted to `GRANTED`; lock changed from not authorized to `ACTIVE`. No live verification run was conducted. The Verification Checklist is now the locked, authoritative Stage 12C verification instrument, completing the three-document Stage 12 Initial Implementation Package; the Founder Lovable Brief, paste-into-Lovable authority, and implementation remain separately unauthorized. |
