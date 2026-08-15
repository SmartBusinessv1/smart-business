# SMART BUSINESS — IMPLEMENTATION AUTHORIZATION RECORD

## SB-P-1.11 — Product Catalog & Pricing

**Authorization Record:** `communication/missions/SB-P-1.11/mission-control/implementation-authorization.md`  
**Authorized Phase:** Initial Phase 1 — Catalog Foundation  
**Original Authorization Date:** 2026-08-15  
**Workspace Operating Model Amendment Date:** 2026-08-16  
**Authorizing Authority:** Founder / Smart Business Mission Control  
**Authorized Builder:** Lovable  
**Activation Condition:** The original authorization became active after human merge. The 2026-08-16 workspace operating model amendment becomes active only after the pull request containing this amended record and `lovable-workspace-operating-model.md` is human-reviewed and merged to `main`.

---

## 1. Authority State

- **Stage 15 Implementation Authority:** `GRANTED — INITIAL PHASE 1 ONLY`
- **Paste-Into-Lovable Authority:** `GRANTED — FOR THIS AUTHORIZED INITIAL PHASE 1 RUN ONLY, SUBJECT TO THE MERGED WORKSPACE OPERATING MODEL`
- **Lovable Plan Mode Authority:** `GRANTED — FOR THIS AUTHORIZED INITIAL PHASE 1 RUN ONLY, SUBJECT TO THE MERGED WORKSPACE OPERATING MODEL`
- **Lovable Build Mode Authority:** `GRANTED — FOR THIS AUTHORIZED INITIAL PHASE 1 RUN ONLY, SUBJECT TO THE MERGED WORKSPACE OPERATING MODEL`
- **Canonical Repository Transfer Authority:** `NONE — SEPARATE MISSION CONTROL AUTHORIZATION REQUIRED AFTER LOVABLE IMPLEMENTATION`
- **Deployment / Production Authority:** `NONE`
- **Scope Expansion Authority:** `NONE`

The original Stage 15 authorization remains valid in scope. The workspace/repository execution path described in this amended record is dormant until the amendment PR is human-reviewed and merged to `main`. Until then, do not begin the Lovable run because the earlier direct-repository assumption is no longer accepted as the execution path.

---

## 2. Authorized Mission and Phase

- Mission: `SB-P-1.11 — Product Catalog & Pricing`
- Authorized phase: `Initial Phase 1 — Catalog Foundation`
- Public Catalog command boundary: exactly **19** public Catalog commands; **no twentieth public Catalog command**.

No later-phase capability is authorized by this record.

---

## 3. Authorized Package

The authorized implementation package is exactly:

1. `docs/implementation/SB-P-1.11/engineering-contract.md` — Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED`
2. `docs/implementation/SB-P-1.11/lovable-build-prompt.md` — Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED`
3. `docs/implementation/SB-P-1.11/verification-checklist.md` — Version 1.2 — `LOCKED — MISSION CONTROL ACCEPTED`

Implementation must conform to these locked artifacts. This authorization does not amend them.

---

## 4. Locked Architecture and Product Basis

The following remain governing constraints for this authorized run:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — locked Product Blueprint;
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` — locked EIS Version 2.2;
- `communication/live/report1.126.md` — canonical Lambda Parser EIS — `LAMBDA PARSER EIS — APPROVED — LOCKED`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md` — including GC-27-amended D-023 and D-024;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md` — FWR-001 through FWR-005;
- `docs/implementation/SB-P-1.11/founder-lovable-brief.md` — Version 1.1 — `LOCKED — MISSION CONTROL ACCEPTED`, Stage 14 Founder Handoff Authority `GRANTED`;
- `communication/missions/SB-P-1.11/mission-control/lovable-workspace-operating-model.md` — current Lovable workspace / repository authority operating model after its human merge.

Where a later accepted locked source or explicit Mission Control operational amendment supersedes an earlier execution assumption without changing Product Truth, the later accepted record governs that execution detail.

---

## 5. Authorized Builder and Lovable Workspace

**Authorized Builder:** `Lovable`

For this run, the authorized Lovable project is exactly:

- **Display name:** `Smart Business Implementation Workspace`
- **Lovable project ID:** `f3e992ec-06df-4d49-b157-b92ec064c078`
- **Connected derivative repository:** `SmartBusinessv1/starter-supab-shell`

The historical project:

- **Display name:** `Smart Business Legacy Lovable Workspace`
- **Lovable project ID:** `64c2b9b1-2461-4045-9acc-19e2658b8ca2`

is not authorized for new implementation under this mission.

After this amended record and the operating-model record are human-reviewed and merged to `main`, the Founder may use the locked Founder Lovable Brief Version 1.1 as the Stage 14 handoff/reference together with the amended execution instruction supplied by Mission Control for the Implementation Workspace.

No other Lovable project, builder, phase, or scope is authorized by this record.

---

## 6. Canonical Repository and Authorized Branch

The canonical implementation repository remains exactly:

`SmartBusinessv1/smart-business`

The canonical implementation branch remains exactly:

`implementation/SB-P-1.11-Initial-Phase-1-Catalog-Foundation`

Because Lovable cannot safely import/bind the existing canonical repository into the verified external-Supabase-first Implementation Workspace, the branch requirement is applied at the **canonical repository transfer stage**, not by pretending the Lovable-connected derivative repository is canonical.

Therefore:

1. Lovable performs the authorized build only in `Smart Business Implementation Workspace`.
2. Lovable-generated code may be recorded in `SmartBusinessv1/starter-supab-shell` as implementation evidence / transfer source.
3. `starter-supab-shell` does not become canonical and must not be treated as the authorized branch.
4. After Lovable reports implementation, Mission Control must separately authorize a mechanical repository-transfer step onto `implementation/SB-P-1.11-Initial-Phase-1-Catalog-Foundation` in `SmartBusinessv1/smart-business`.
5. That canonical branch must descend from the then-current approved `main` containing this amended authorization and operating-model record.
6. The transfer actor must preserve the verified Lovable delta exactly within authorized scope and must not redesign, modernize, reinterpret, or expand it.
7. The transfer actor may not approve its own transfer as independent verification.

If any actor attempts to substitute `starter-supab-shell` for `smart-business`, or to bypass the separately authorized canonical-transfer gate, STOP and escalate to Mission Control.

---

## 7. Authorized Scope

Authorize only the Initial Phase 1 Catalog Foundation defined by the locked package and Founder Lovable Brief, including exactly the 19 public Catalog commands and the supporting code, schema, security, verification, and user-facing behavior required by those locked artifacts.

Implementation must preserve the locked command/security boundaries, business isolation, owner-only Phase 1 posture, auditability, Catalog/Inventory truth separation, D-047 safeguards, D-068 lifecycle protections, and the approved Product Truth.

---

## 8. Explicitly Prohibited Changes

This authorization does **not** permit:

- any twentieth or additional public Catalog command;
- scheduled-price execution or scheduler activation;
- manager or employee permission expansion;
- CSV/XLSX bulk import implementation;
- AWS Lambda parser implementation or infrastructure mutation unless separately authorized at its later phase;
- WhatsApp, text, voice, photo, or other conversational-channel implementation;
- later Inventory onboarding / Opening Stock bulk workflow;
- later Inventory-first orchestration;
- custom POS modifications inside the core platform;
- unrelated application features;
- governance or locked-document edits during implementation;
- direct table-write shortcuts that bypass locked command/security boundaries;
- deployment, production publication, or production mutation;
- custom-domain reassignment;
- GitHub repository rename, disconnection, reconnection, or source-of-truth substitution;
- use of `Smart Business Legacy Lovable Workspace` for new implementation;
- treating `starter-supab-shell` as canonical;
- any scope expansion beyond Initial Phase 1.

Deployment / Production Authority remains `NONE`. Scope Expansion Authority remains `NONE`.

---

## 9. Mandatory Builder Completion Report

The authorized implementation run must create or update the lifecycle artifact at exactly:

`docs/implementation/SB-P-1.11/lovable-build-completion-report.md`

Its immediate post-implementation status must be:

`IMPLEMENTATION REPORTED — VERIFICATION PENDING`

During the Lovable workspace build, the report may first exist in the derivative implementation source if that is where Lovable writes. It does not become the canonical lifecycle artifact until the separately authorized repository-transfer step reproduces the verified report and authorized implementation delta into `SmartBusinessv1/smart-business` on the exact canonical implementation branch.

A `communication/live/report*.md` file must not be substituted for this lifecycle artifact.

---

## 10. Required Stop Conditions

Lovable / the implementing operator must STOP and escalate to Mission Control if:

- current canonical `main` does not contain the merged implementation authorization and merged workspace operating model;
- the Lovable project is not `Smart Business Implementation Workspace` / `f3e992ec-06df-4d49-b157-b92ec064c078`;
- any attempt is made to use `Smart Business Legacy Lovable Workspace` for new implementation;
- any actor treats `starter-supab-shell` as the canonical Smart Business repository;
- any actor attempts canonical transfer before Mission Control separately authorizes that transfer;
- the future canonical implementation branch name differs from `implementation/SB-P-1.11-Initial-Phase-1-Catalog-Foundation`;
- any locked package artifact differs from Version 1.2 / locked state;
- the Founder Lovable Brief is not Version 1.1 / locked state;
- requested work includes anything outside Initial Phase 1;
- a Product Truth, architecture, security, command-signature, or phase-boundary conflict is found;
- repository hygiene regresses or a credential-grade secret is discovered;
- the required verification evidence cannot be produced without altering scope.

No guessing, silent substitution, scope expansion, repository-authority substitution, or workaround around a locked boundary is permitted.

---

## 11. Merge and Execution Boundary

This record is a governance authorization artifact, not implementation itself.

The original Stage 15 scope authorization was already merged. However, after discovery of the Lovable project/repository topology, Mission Control placed execution on HOLD rather than allowing implementation under an incorrect direct-repository assumption.

Until the pull request containing this amended record and `lovable-workspace-operating-model.md` is human-reviewed and merged to `main`:

- do not paste the Stage 15 build instruction into Lovable;
- do not begin Lovable Plan Mode for this implementation run;
- do not begin Lovable Build Mode for this implementation run;
- do not create or perform the canonical repository-transfer step.

After that merge, and only for the exact Initial Phase 1 run defined above:

- Lovable execution may proceed in `Smart Business Implementation Workspace`;
- the canonical-transfer step remains separately gated and unauthorized until Mission Control explicitly authorizes it after Lovable implementation evidence exists.

No deployment or production authority is granted at any point by this record.

---

## 12. Mission Control Decision

`SB-P-1.11 INITIAL PHASE 1 IMPLEMENTATION AUTHORIZATION — PRESERVED IN SCOPE; LOVABLE WORKSPACE EXECUTION PATH AMENDED; CANONICAL TRANSFER SEPARATELY GATED`
