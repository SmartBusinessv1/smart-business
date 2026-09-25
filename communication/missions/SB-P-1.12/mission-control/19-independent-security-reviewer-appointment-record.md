# SB-P-1.12 — MC-33 Independent Security & Permissions Architecture Reviewer Appointment Record

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Decision:** MC-33
**Prepared by:** Claude Code, as documentary preparer at Mission Control's direction. Claude Code has no authority to appoint, approve or assess independence, and transcribes Mission Control's decision only.
**Status:** DRAFT — NOT EFFECTIVE. The appointment takes effect only after Founder/authorized-human merge of this separate communication PR and Mission Control's post-merge verification.
**Authority:** Source 18 v1.2 §§4.3 and 4.8; MC-05 §4 (`mission-control/02-stage2-authorization-and-activation-reconciliation.md`); MC-02 separation condition (`mission-control/02-stage1-intake-pack.md` §4.2); MC-30, canonical through PR #638 (with the MC-31A disposition of S-1); the MC-33 instruction.
**Companion live instruction:** `communication/live/instruction.md` (MC-33, hold only).

## 1. Canonical baseline

| Item | Evidence |
|---|---|
| Canonical `main` | `e934dbfe715dd6d132d625e6b61816565a0d7e1c`, the merge commit of PR #638 (human-merged `2026-09-25T12:03:13Z`, approved head `11bd13cf3038702870ec9c2c8b54c26643ef5027`, MC-31B) |
| MC-30 dispositions | Canonical. G-2 START prerequisites: the actual named reviewer appointment and a documented prior-contribution and independence assessment (MC-05 §4). The review may run in parallel with authorized Engineering Review; affected feasibility and risk findings are not accepted or relied on before the review is completed |
| Gate state before this record | G-1 (separate Stage 7 authorization) OPEN; G-2 PENDING; G-3 to G-8 as recorded in `claude-code/21-stage7-readiness-record.md` and `mission-control/17-stage7-prerequisite-disposition-and-reviewer-appointment-gate.md`; S-2 to S-7 flagged |
| FCTM, Blueprint, Founder Decisions | 373 rows (228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED`); Blueprint v0.3 unchanged; `FPDR-1`–`FPDR-4`; F-02, F-03, F-04(c) |
| Stage 7 | `NOT AUTHORIZED` |

## 2. Mission Control decision, transcribed

Mission Control has accepted the MC-32 appointment-verification report and selected the **existing Security & Permissions Architecture specialist room** as SB-P-1.12's independent Stage 7 security reviewer.

Mission Control determines that the room's declared absence of authorship of Blueprint Sections 1–19 and of the Stage 6 Builder Review, supported by canonical attribution, provides sufficient separation for the assigned role.

The room's earlier participation in SB-P-1.11 security architecture is disclosed. Mission Control states that it requires subject-specific correlated-assumption controls and is not a blanket disqualification.

This decision becomes canonical only through a separate Founder/authorized-human merge.

## 3. Appointment

| Field | Value |
|---|---|
| Actor | The existing **Security & Permissions Architecture** room in Smart Business Build HQ. No different room or AI instance is appointed |
| Role | Independent Security & Permissions Architecture specialist reviewer for SB-P-1.12 Stage 7 (MC-02 §4.2; Source 18 §§4.3 and 4.8) |
| Responsibility | Independently review the Stage 7 feasibility and risk findings in the mandatory review domains (Section 8) and report to Mission Control, so that the findings can later be accepted or relied on |
| Appointed by | Mission Control, effective only as stated in Section 12 |
| What the appointment is not | Not completion of the independent security review; not authorization of Stage 7; not approval of any finding, design or implementation; not a security certification |

## 4. Provenance of the MC-32 declaration

The declaration is **the specialist's own report, submitted through the Founder** and accepted by Mission Control as the MC-32 appointment-verification report. It is identified here by that provenance only.

- No MC-32 record or declaration file exists in the repository at `main@e934dbfe`. A repository search for "MC-32" returned no result, and this record does not attribute the declaration to any repository file.
- The declaration's full text was not supplied to the drafter, so it is neither quoted nor reproduced here. This record states only what the MC-33 instruction says about it: a declared absence of authorship of Blueprint Sections 1–19 and of the Stage 6 Builder Review, and a disclosure of earlier SB-P-1.11 security architecture participation.
- If Mission Control wants the declaration text preserved in the mission record, that needs a separate, authorized path. This record does not create one.

## 5. Contribution and authoring evidence

The drafter searched the repository. Each item is a fact about the repository, not a finding about independence.

**Canonical attribution of the material the room is declared not to have authored**

| Artifact | Repository attribution |
|---|---|
| Blueprint Sections 1–19 (`docs/phase-1-mission-blueprint/active/SB-P-1.12.md`) | Metadata: "Product Discovery and Drafting: Claude Code, MC-02 appointed Stage 2–4 Definition Actor"; commits from PRs #630 and #635 carry `Co-Authored-By: Claude` trailers |
| Stage 6 Builder Review (`claude-code/16-stage6-builder-review-report.md`) | "Prepared by: Claude Code"; PR #632 commit carries the trailer |
| Populated FCTM (`claude-code/03-stage2-populated-fctm.md`) | Commits from PRs #624 and #628 carry the trailer |
| Founder Record 04 | Prepared by Claude Code; PR #635 commit carries the trailer |

**The room's recorded prior contributions**

- **PR #560**, `Add Security & Permissions Phase 1 institutional retrospective`, human-merged `2026-09-13T09:11:52Z` (`efb993315b5ab35beb2ef952f31e40446e8bbd8f`), adding `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/security-permissions/01_Retrospective.md` and `02_Completion_Report.md`. Both are documentation only, with no implementation authority.
- **SB-P-1.11:** the room reviewed the Build-Now Gap-Closure EIS. `docs/phase-1-mission-blueprint/completed/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` cites its verdicts, and the instruction delivered to it by Founder copy and paste is in `communication/archive/SB-P-1.11/instruction.md`. The retrospective also records its role in the GC-42 and GC-43 provider-security verification work.

**Dates.** PR #560 predates the start of SB-P-1.12 (Stage 1 was canonical on 2026-09-22). The completion report states that no SB-P-1.12 or later Product Mission had started.

**Subject-matter overlap disclosed by the retrospective itself**

- It records `anon` grants on `businesses`, `transactions` and `transaction_correction_events` from a read-only inspection dated 2026-09-13 and refers to the "early SB-P-1.12 residual security gate". This is the same T4 subject matter that SB-P-1.12 carries.
- It names "Security & Permissions Architecture + Supabase Backend Architecture" as the "likely owner" of that subject under future SB-P-1.12 scope. This is a stated expectation, not an appointment.
- It sets out lessons on one shared permission engine across channels and on the distinction between authentication, authorization, role, permission and tenant isolation.

## 6. Mission Control's independence assessment

**Mission Control's determination (Section 2):** the declared absence of authorship of Sections 1–19 and the Stage 6 Builder Review, supported by canonical attribution, provides sufficient separation for the assigned role. The earlier SB-P-1.11 participation is disclosed and is handled by controls, not disqualification.

**Evidence limitations (recorded, not conditions of the determination)**

1. The declaration is the specialist's own statement. Mission Control accepted it, but no third party verified it.
2. Git attribution shows who committed and co-authored each file. It cannot show contributions relayed through Founder or Mission Control dialogue, and the absence of a trailer naming the room is not proof that it contributed nothing.
3. The commits for Contracts 21 and 22 (PRs #529 and #532, `SB-DOC-PHASE1-HISTORY-1.0`) carry no co-author trailer at all, and the Build Plan's commits carry only Claude trailers. None names a specialist. Whether the room influenced these sources through relayed dialogue is not recorded in git.
4. The "room" is a conversational context. The repository does not record its model, provider, session or continuity, so the repository cannot show that the same room instance is the one that made the declaration and the one that will review.
5. Same-provider or shared-assumption risk with other actors is not assessed by any repository record.
6. The retrospective's production observations date from 2026-09-13. `docs/migration/README.md` records that production cutover was later completed and accepted. Those observations may not describe the current production state. They are historical, they are not evidence about it, and T4 stays `UNVERIFIED`.
7. Source 18 §4.9's independence rules are written for the Independent Verification Actor. Their use for this specialist is an analogy (flagged S-6 in the MC-30 record), and S-6 is not resolved by this appointment.

## 7. Correlated-assumption controls

These are drafted for Mission Control's review and may be amended before merge. They apply to the SB-P-1.11 participation and the subject-matter overlap in Section 5.

1. **Disclose reliance.** Each review deliverable states which conclusions depend on SB-P-1.11-era designs or on the room's own earlier recommendations (owner-scoped RLS, catalog `SECURITY DEFINER` executors, the link-preview token pattern, the Inventory hardening approach). Those conclusions are treated as claims to verify, not settled premises.
2. **No reuse of historical evidence as current.** The 2026-09-13 production observations are not reused as current evidence. Any claim about production grants, RLS, functions or default privileges rests on a separately authorized read-only verification, and until then stays `UNVERIFIED`.
3. **Independent starting point.** The review starts from the canonical Blueprint, the FCTM, Founder Records and the accepted Stage 6 findings, not from the room's retrospective conclusions.
4. **No self-review of remediation.** If the room is later asked to design or execute WS-B remediation, or any part of the authority-kernel design, it cannot independently review that work. The "likely owner" expectation in the retrospective does not create an assignment.
5. **Mission Control challenge.** For any finding that restates a design on which the room previously gave a verdict, Mission Control decides whether an additional challenge or second opinion is needed before the finding is accepted.
6. **Provenance of every input.** Where material reaches the room by relay through the Founder, the deliverable says so.
7. **Independence is not inferred from a label.** The room label or a new session does not by itself establish independence. Mission Control's assessment in this record is the operative judgment.

## 8. Stage 7 review domains

Drawn from Source 18 §4.8 mandatory-review triggers and the workstreams in the intake pack §8. Drafted for Mission Control's review.

- **Authority and permissions:** the membership model implied by F-02, the permission matrix, field-level Reference Cost and margin delegation (F-03), and execution-time authorization and revalidation.
- **RLS, grants and function security:** the owner-scoped policies and `SECURITY DEFINER` functions, executor roles and default privileges, and the residual `anon` exposure (T4, WS-B).
- **Tenant isolation:** cross-business denial, active-business context and business-scoped roles.
- **Idempotency and concurrency:** duplicate-safe completion and revocation during a multi-row import (F-04(c)), and confirmation binding.
- **Migrations (planning only):** the migrations Stage 7 expects and the rehearsal they need. Execution is never part of a Product Mission.

## 9. Required deliverables

A written independent review, recorded under `communication/missions/SB-P-1.12/specialists/` (Source 18 §4.8 folder layout), containing:

1. for each reviewed Stage 7 feasibility and risk finding, a stated position (concur, challenge, or blocked pending evidence) with reasons;
2. the reliance disclosures required by Section 7;
3. a list of any evidence the reviewer needs that requires separate authorization;
4. any Product Truth conflict, infeasibility or security finding raised for escalation (Section 11);
5. a statement of the review's independence basis and its evidence limitations;
6. a statement that the review is an input and not an approval, and certifies no production state.

The review is complete only when Mission Control records that it is complete. Affected findings are not accepted or relied on before then.

## 10. Read-only boundary and separately authorized evidence access

- The reviewer's mandate is read-only fact-finding and review. It may not redefine Product Truth, authorize implementation, approve the mission, bypass Mission Control or issue an instruction that competes with the stage owner (Source 18 §4.8).
- The appointment grants no repository write authority. How findings are recorded under `specialists/` (for example a relayed report committed by an authorized actor) needs a separate authorization.
- The appointment grants no evidence access beyond the repository's public content. Production reads, provider consoles and database access, including any read-only T4 verification, topology verification and changes to required checks or workflows, each need their own authorization (MC-30, Section 7). None is granted here.
- Production mutation, migration execution, delivery and publication remain `NOT AUTHORIZED`.

## 11. Reporting and escalation

The reviewer reports to Mission Control. A Product Truth conflict, infeasibility or security finding raises **T8** and stops dependent work; an unresolved product question raises T1, a source conflict T2, a new product decision T3, and any proposed omission, deferral or reclassification of an approved requirement T7, in each case to Mission Control. Product questions reserved to the Founder go to the Founder only through Mission Control. Findings are inputs and never authority.

## 12. Effectiveness

The appointment is **not effective** on submission of this draft, on Mission Control's acceptance of it, or on the room's acceptance. It becomes effective only after:

1. Mission Control reviews this record at its exact head and records its decision;
2. the Founder or an authorized human merges this separate PR to `main`; and
3. Mission Control independently verifies the actual merge commit on canonical `main` and records that verification.

Until then G-2 stays `PENDING`. After merge and verification, Mission Control alone records what that does to G-2. The recorded position of this drafter is only that the review itself stays outstanding either way: the appointment and independence assessment are START prerequisites, and completion of the review is a separate condition for relying on the affected findings.

## 13. What is preserved and what is not decided

- The MC-30 start-gate versus dependent-gate distinction is preserved. G-3 to G-7 remain prerequisites only to the particular findings or actions that depend on them.
- G-1, the separate exact-scope Stage 7 authorization, remains OPEN and is not closed by this record.
- Open Founder decisions are untouched: the F-03 derived-value question and multiple-business ownership are unanswered. S-2 to S-7 remain flagged.
- T4 production state, WS-B, topology and the historical OLE backfill remain as recorded (`UNVERIFIED` or carried forward).
- No Stage 7 work, Sections 20–21, per-row finding, Blueprint or FCTM change, code, SQL, migration, production inspection, EIS, implementation or approval is authorized.

## 14. Changed-path inventory for this communication PR

Eight paths, all communication-only, checked as unused before writing:

| Path | Purpose |
|---|---|
| `communication/missions/SB-P-1.12/mission-control/19-independent-security-reviewer-appointment-record.md` | This record (new) |
| `communication/live/instruction.md` | Companion MC-33 hold instruction |
| `communication/live/report.md` | Handover for this draft |
| `communication/missions/SB-P-1.12/mission-control/20-independent-reviewer-gate-live-instruction-snapshot.md` | Prior live instruction, byte-identical (new) |
| `communication/missions/SB-P-1.12/claude-code/23-independent-reviewer-gate-live-report-snapshot.md` | Prior live report, byte-identical (new) |
| `communication/missions/SB-P-1.12/README.md` | Mission pointers and status |
| `communication/missions/SB-P-1.12/decision-log.md` | Append only |
| `communication/missions/SB-P-1.12/handover-log.md` | Append only |

## 15. Founder merge brief

**Status.** This PR records Mission Control's appointment decision and takes no effect until merged and verified. It changes no product, code, SQL, Blueprint or GitHub setting. Merge only after Mission Control records its exact-head decision.

**Security implications.** None from the merge itself. No secret, credential or application file is involved, and the record certifies nothing about production.

**Commands.** Run in PowerShell from the repository root. The first shows the PR, and its head SHA must equal the exact head Mission Control recorded.

```text
gh pr view mission/SB-P-1.12-independent-security-reviewer-appointment-record --repo SmartBusinessv1/smart-business --json number,state,isDraft,headRefOid,statusCheckRollup
gh pr ready mission/SB-P-1.12-independent-security-reviewer-appointment-record --repo SmartBusinessv1/smart-business
gh pr merge mission/SB-P-1.12-independent-security-reviewer-appointment-record --repo SmartBusinessv1/smart-business --squash
```

**Expected success evidence.** `state OPEN`, the reviewed head SHA and every check `SUCCESS`; after merge, `state MERGED` with a merge commit that Mission Control then verifies on `main`.

**Prohibited.** Do not merge if the head differs from the reviewed head, any check has not succeeded or Mission Control has not decided. Merging does not complete the security review, close G-1, or authorize Stage 7, Sections 20–21, EIS, implementation, migration, production or a Blueprint lock.

## 16. Decision

**MC-33 DECISION (TRANSCRIBED, NOT EFFECTIVE):** MISSION CONTROL HAS SELECTED THE EXISTING SECURITY & PERMISSIONS ARCHITECTURE SPECIALIST ROOM AS SB-P-1.12'S INDEPENDENT STAGE 7 SECURITY REVIEWER. THE APPOINTMENT IS EFFECTIVE ONLY AFTER HUMAN MERGE OF THIS PR AND MISSION CONTROL'S POST-MERGE VERIFICATION. G-2 STAYS PENDING UNTIL THEN. THE APPOINTMENT IS NOT THE INDEPENDENT REVIEW, AND STAGE 7 IS NOT AUTHORIZED.
