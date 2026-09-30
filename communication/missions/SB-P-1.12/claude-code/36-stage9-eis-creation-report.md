# SB-P-1.12 — Stage 9 EIS Creation Report (MC-148)

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Prepared by:** Claude Code, Source 18 §4.4 EIS owner
**Authority:** MC-148, `communication/live/instruction1.23.md`, work package `SB-P-1.12-WP-STAGE9-EIS-CREATION`
**Branch:** `mission/SB-P-1.12-stage9-eis-draft`
**Date:** 2026-09-30
**Status:** `DRAFT — AWAITING MISSION CONTROL STAGE 10 REVIEW`

## 1. Canonical baseline

| Item | Evidence |
|---|---|
| Canonical `main` at branch creation | `24730a684f7ab8d0550066db1ad1acdde0128192`, the PR #686 merge |
| Named baseline | `e1ecbe39f66509d9606d48f09a86b3c3611d64ad` (PR #685 merge). The only difference to `24730a68` is `communication/live/instruction1.23.md` |
| Branch | `mission/SB-P-1.12-stage9-eis-draft`, absent locally and on `origin` before creation. `mission/SB-P-1.12-stage9-eis-creation-authorization` is Mission Control's instruction branch and was not reused |

No baseline drift was found. Every blob named in the instruction matched (locked Blueprint `77d52096…`, FCTM `1650ff95…`, Stage 7 report `b023b044…`, MC-144 record `6b63f2d4…`).

## 2. Sources read

- The locked Blueprint, in full (Sections 1–21 and the Stage 8 section).
- The FCTM.
- The Stage 7 report.
- The MC-144 gate disposition.
- Founder Record 08 and the MC-146 lock record.
- The MC-40, MC-42 and MC-44 specialist reports (`specialists/01`–`03`) and `communication/live/report1.19.md` and `communication/live/report1.21.md`.
- The R-2 closure record.
- Founder Records 04 (F-02, F-03, F-04(c)), 05, 06 and 07.
- Source 18 (Stage 9 to Stage 11).
- The SB-P-1.10 and SB-P-1.11 EIS documents (structural precedent).
- Repository architecture:
  - all 24 migrations, especially `businesses`, `transactions`, `transaction_correction_events`, the SB-P-1.11 stage 1 schema and stage 2 functions, and default grants;
  - `src/integrations/supabase/*`;
  - both server functions;
  - the authenticated routes and first run;
  - `tests/**`;
  - `.github/workflows/*`.

## 3. Changed paths and resulting blobs

| Path | Blob |
|---|---|
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` (new) | `4129dba12cd89cec0fc84594b00cb11dc7b1482a` |
| `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md` (this report, new) | Recorded in `report1.23.md` and the PR handover |
| `communication/missions/SB-P-1.12/README.md` | Recorded in `report1.23.md` |
| `communication/missions/SB-P-1.12/decision-log.md` (appended) | Recorded in `report1.23.md` |
| `communication/missions/SB-P-1.12/handover-log.md` (appended, H-38) | Recorded in `report1.23.md` |
| `communication/live/report1.23.md` (new) | Recorded in the PR handover |

These are exactly the six paths authorized by the instruction §8. The locked Blueprint, FCTM (`1650ff95…`), source contracts, Founder Records, Security reports, Mission Control records, code, schema, SQL, migrations and provider configuration are unchanged.

## 4. Requirement and traceability counts

| Measure | Value |
|---|---|
| EIS requirements | 80, in 18 groups (ID, KER, AUT, SUP, EXT, ISO, CNF, AUD, UX, PPM, FRL, ESC, DEL, LEG, GOV, TST, ENV, DEP) |
| `IN SCOPE` rows covered | 267 of 267 |
| Rows mapped to one requirement | 130 |
| Rows mapped to more than one requirement | 137 (96 to two, 31 to three, 8 to four, 1 to five, 1 to eight) |
| Requirements mapped to more than one row | 76 |
| Requirement-to-row links | 460 |
| Engineering-only requirements | 1: `EIS-ENV-02` (EQ-6 token-lifetime evidence; adds no behaviour) |
| Orphan requirements adding product behaviour | 0 |

**Validation method.** An independent script parsed the finished EIS, not the generator data, and checked the following:

- The forward requirement tables and the reverse row table agree exactly.
- The reverse table lists the 267 FCTM `IN SCOPE` rows in FCTM order.
- No requirement cites a row that is not `IN SCOPE`.
- Every requirement referenced is defined exactly once.

That check found one generator defect in an intermediate build: the requirement tables rendered empty. It was fixed before commit, and the final file passes. The Markdown Quality Gate passes.

## 5. Workstream proposal

| Workstream | Purpose | Depends on | Migration class |
|---|---|---|---|
| WS-0 | Evidence (separately authorized, read-only) | Authorization | None |
| WS-A1 | Persons and memberships | EIS lock | M1, M2 |
| WS-A2 | Kernel and registry | WS-A1 | M1, M3 |
| WS-A3 | Source-complete inventory, then RLS and commands per table family | WS-A2 | M3, M4 |
| WS-B | Effective-access reconciliation | G-6 evidence | M5 |
| WS-C | Product & Price Master | WS-A3 catalog family | M3, M6 |
| WS-D | Binding, revalidation, idempotency and import ledger | WS-A2 | M1, M3 |
| WS-E | Audit and denial durability | WS-A1 | M1, M6 |
| WS-F | History integrity (ESC-1) | WS-A1 | M6 |
| WS-G | First run, invitations and transfer | WS-A2, WS-D, WS-F | M1, M3 |
| WS-H | Tests and CI | Runs throughout | None |

Identity deletion (§33) is design only. EIS §19.1 gives each workstream's FCTM-mapped requirements, verification, rollback and early-consumption status.

**SB-P-1.13 may depend on** the kernel contract, capability registry, channel values, confirmation binding, idempotency, authority events, the denial contract and explicit active business. This applies only after WS-A1, WS-A2 and WS-D are implemented, verified and accepted, and the EIS is locked.

**Gated for SB-P-1.13:** production state (G-6), WS-B, Product & Price Master projection (T8-EIS-1), lifecycle and deletion behaviour, and transfer runtime (EIS §19.5).

## 6. ESC-1 design summary

ESC-1 stays OPEN T8. EIS Section 14 proposes the following:

- **Owner business API `DELETE`:** revoke the grant, drop the policy, and add a delete guard that admits only a governed lifecycle owner role, including against `service_role`.
- **`businesses.owner_id` and `transactions.creator_id`:** re-point both, and every other historical actor column, from `auth.users` to a new application-owned `persons(id)` with `RESTRICT`. `persons.id` equals the Auth user ID, so no historical value is rewritten or reassigned.
- **`transaction_correction_events` and retained `business_id` keys:** change them from `CASCADE` to `RESTRICT`, with delete guards on transactions and corrections.
- **Uncontrolled Auth deletion:** contain it with `persons.auth_user_id` `RESTRICT`. The governed path de-identifies and unlinks the person before any Auth-user deletion.
- **Transfer and deletion kept distinct:** transfer changes memberships and the `owner_id` mirror and deletes nothing. Business deletion runs only through a lifecycle hook that handles each retained record class explicitly.
- **Migration and backfill:** a design-level migration and backfill order (EIS §14.4).
- **Negative paths:** seven negative-path tests (EIS §18.3).

## 7. `22-§20-2`, G-6/T4 and legal treatment

- **`22-§20-2`:** it remains `BLOCKED` / `IN SCOPE`. `EIS-ESC-07` lists the evidence needed before Mission Control could consider unblocking it. No unblocking is proposed.
- **G-6/T4:** it remains `UNVERIFIED`. EIS Section 17 lists the separately authorized evidence and when each item is needed.
- **Legal:** Founder Record 06 and MC-117 are applied only as far as engineering needs:
  - identity is separated from retained records;
  - no universal period is coded;
  - record-class rules are held as data and can be substituted later;
  - legal and dispute holds are preserved;
  - no professional-finality claim is made.

## 8. Specialist-finding coverage

SEC-S7-01 to SEC-S7-09, SEC-128-02 and the engineering-relevant SEC-137 findings are integrated into the architecture sections themselves, and EIS Section 20 cross-references them. Items addressed include:

- the source-complete authority-surface inventory precondition;
- the ER-4 `RETURNING` and read-all handling;
- WS-B gating on live evidence, with no blanket revocation;
- caller-specific projection inside `SECURITY DEFINER` functions;
- the five revocation points in imports, with truthful counts;
- the privileged-operation contract;
- out-of-transaction denial recording;
- the transaction-history cascade.

## 9. Unresolved engineering questions and triggers

**T8-EIS-1 (new; EIS §12.4).** A Manager delegated Reference Cost but not margin, who also sees the selling price (Founder Scenario A), can compute per-product unit margin by subtraction. No response shaping prevents that arithmetic without withholding the delegated cost or the price.

- **Why it matters:** Founder Record 04 makes the two separately delegable and does not define margin display. MC-143 §3.1 says evidence of this kind triggers T8 and Founder routing.
- **What the EIS does:** it gives a faithful direction for the margin-only case (aggregated, non-invertible margin output). It holds `EIS-PPM-04` for the per-product cost-only case, lists three options without choosing one, and leaves all FCTM rows unchanged.

**Stop-condition note.** Instruction §11 says to STOP if faithful design requires changing locked Product Truth. I did not treat this as a full stop, for three reasons:

- MC-143 §3.1 prescribes T8 and Founder routing for exactly this evidence.
- The narrow item can be held inside the draft without changing any FCTM value.
- The rest of the EIS is independent of it.

Mission Control may instead treat it as a stop and hold the whole draft.

**Other questions (EIS §21.1):**

- EQ-S9-2: the aggregated-margin group size.
- EQ-S9-3: provider Auth-deletion and backup behaviour (evidence).
- EQ-S9-4: record-class decisions for operational cascades.
- EQ-S9-5: the locked Blueprint's line 1 has a Metadata table row before the H1. This is formatting only, with no Product Truth effect. I did not edit the locked file.

**T1–T8 screen.**

| Trigger | Result |
|---|---|
| T1–T3, T5–T7 | None |
| T4 | Unchanged |
| T8 | ESC-1 open, with a design direction proposed; T8-EIS-1 raised |

## 10. Readiness

The draft is ready for Mission Control's Stage 10 review, with specialist review where applicable, subject to routing T8-EIS-1. It is not locked. No implementation package, implementation, schema, SQL, migration, provider mutation, identity-deletion runtime or production action is authorized.

`SB-P-1.12 STAGE 9 EIS DRAFT SUBMITTED (MC-148) — 267/267 ROWS TRACED — ESC-1 SAFE-DESIGN DIRECTION PROPOSED, NOT CLOSED — T8-EIS-1 RAISED — STOP FOR MISSION CONTROL STAGE 10 DISPOSITION.`

## 11. Stage 10 correction under MC-151 (2026-09-30)

Sections 1 to 10 above record the version 0.1 submission as made and are kept as provenance. Founder Decision Record 09 (`founder/09-reference-cost-margin-permission-semantics.md`, blob `84d61d4d62cc33ae81ec372ac725059665ebc9d9`) resolved T8-EIS-1. MC-150 (`mission-control/28-t8-eis1-founder-decision-disposition.md`) found the version 0.1 aggregate-only margin behaviour unapproved. Under MC-151 (`communication/live/instruction1.24.md`), work package `SB-P-1.12-WP-STAGE10-T8-EIS1-CORRECTION`, the EIS was corrected to version 0.2 on the same PR #687 branch.

**What changed in the EIS:**

- Section 12.4 was rewritten to the Founder rule. The aggregate-only margin output and the three options were removed. Exact delegated Reference Cost may appear alongside an otherwise-authorized selling price, and a person's own arithmetic on separately authorized values is not a Smart Business margin output.
- Without `catalog.margin.read`, Smart Business never computes, labels, displays, returns, reports, aggregates or exposes margin.
- No margin formula and no per-product or aggregate margin semantics are selected.
- `EIS-PPM-04` was rewritten and is no longer held.
- EQ-S9-1 (T8-EIS-1) is marked **RESOLVED BY FOUNDER DECISION RECORD 09**. EQ-S9-2 (aggregate group size) is withdrawn.
- Dependent status references in Sections 1, 3, 19.4, 19.5, 20, 21 and 23 were updated, and a change-log row was added.

**Unchanged:**

- Requirements: 80 before and 80 after. No requirement ID was added or removed, and every FCTM mapping is identical.
- Coverage: 267 of 267 rows, re-verified by the independent script.
- Orphans: one engineering-only requirement (`EIS-ENV-02`) and 0 behaviour-adding orphans.
- Everything else: the ESC-1 design, `22-§20-2` treatment, G-6/T4, the legal boundary, workstreams and SB-P-1.13 boundaries.

Section 9's T8-EIS-1 discussion and its stop-condition note are superseded by this section for current status.
