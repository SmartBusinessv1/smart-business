# SB-P-1.12 — MC-30 Stage 7 Prerequisite Disposition and Independent Security Reviewer Appointment Gate

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Decision:** MC-30
**Prepared by:** Claude Code, as documentary drafter at Mission Control's direction. Claude Code has no authority to approve, appoint or authorize anything in this record.
**Status:** DRAFT — PROPOSED DISPOSITIONS FOR MISSION CONTROL REVIEW. EFFECTIVE ONLY ON HUMAN MERGE OF THIS SEPARATE COMMUNICATION PR, AND EVEN THEN IT AUTHORIZES NO STAGE 7 WORK.
**Authority:** Source 18 v1.2 §§3, 4.3, 4.8 and §6 Stage 7; MC-02 separation condition (intake pack §4.2); MC-05 §4 (`mission-control/02-stage2-authorization-and-activation-reconciliation.md`); `communication/AI_Communication_and_Handover_Protocol.md` §§15, 16, 16.1, 21 and 27; the MC-30 instruction to prepare this record for review.
**Companion live instruction:** `communication/live/instruction.md` (MC-30, hold and disposition only).

## 1. Canonical baseline

| Item | Evidence |
|---|---|
| MC-28 documentary preparation canonical | PR #637 human-merged `2026-09-25T11:40:06Z`; approved head `7500ce8336d4c7efbb4ba5803736b898ff03745f`; merge commit `main@55d96de24e8511d84528eebfdb36148c93866575`. MC-29B acceptance at the exact head and Mission Control's post-merge verification are recorded in the PR #637 comments |
| MC-28 authorization | PR #636, `main@7f247759340fb2edf496bef1a7302abcd4633d20`; R-4 struck (MC-28A); the entire Blueprint stayed read-only |
| Controlling readiness evidence | `communication/missions/SB-P-1.12/claude-code/21-stage7-readiness-record.md` (ledger G-1 to G-8), canonical on `main@55d96de2` |
| Founder Record 04 and Blueprint v0.3 | PR #635, `main@3a6afae9d1b34628d6670cff3a6fdebcfc32d2b9` (MC-27) |
| Stage 5, 6 | PR #630 (Sections 1–19 approved only); PR #632 (Builder Review findings accepted, MC-24) |
| FCTM | 373 rows: 228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED` |
| Founder Decisions | `FPDR-1`–`FPDR-4`; F-02 Option B, F-03 Option B, F-04(c) Option C |
| Scope flags | Production mutation, migration execution, delivery synchronization and publication: `NOT AUTHORIZED` |
| Stage 7 | `NOT AUTHORIZED`; Sections 20–21 do not exist |
| Verification at drafting time | `origin/main` equals the #637 merge commit; #636 is an ancestor; the branch for this draft did not exist; worktree clean. A read-only GitHub API read on 2026-09-25 showed required checks on `main` of `Markdown Quality Gate` only, strict, admins enforced, force pushes disallowed |

Sources read for this record: the readiness record, Source 18 v1.2 (§4.3, §4.8, §4.9, §6 Stages 5–8), the communication protocol, the Stage 1 intake pack (§§4.2, 8, 9, 10), the MC-05 Stage 2 authorization record (§4; omitted from the first draft and added under MC-31A), MC-24, MC-27, MC-28, the PR #637 review comments, Founder Record 04 and the canonical Blueprint.

## 2. What this record is, and is not

It documents **proposed** dispositions of the eight readiness gates and separates five kinds of matter: start-gate prerequisites; conditions that block particular dependent findings; evidence-gathering tasks that need separate authority; Founder-reserved matters; and matters Mission Control may disposition without inventing Product Truth. It does not close any gate, appoint anyone, answer any Founder question, verify any production state, alter any GitHub setting, or authorize Stage 7. The readiness ledger's open gates remain open.

## 3. Gate classes used here

| Class | Meaning |
|---|---|
| START | Must close before Mission Control may authorize the start of Stage 7 |
| DEPENDENT | Does not by itself prevent Stage 7 from starting, but blocks specific findings or designs from being produced or relied on |
| EVIDENCE TASK | Needs separate, exact-scope authority to gather; MC-30 permits none of it |
| FOUNDER-RESERVED | A product decision that only the Founder may make |
| MC-DISPOSITIONABLE | Mission Control may decide without creating Product Truth |
| FLAGGED | The existing sources do not determine the class. It is left open for Mission Control and no final status is assigned |

## 4. Disposition table for G-1 to G-8

Status after MC-30 means the status if Mission Control accepts these dispositions as drafted. No gate becomes closed.

| Gate | Proposed disposition to document | Class | Basis in sources | Owner | Evidence needed | Status after MC-30 |
|---|---|---|---|---|---|---|
| G-1 Stage 7 authorization | A distinct, exact-scope Stage 7 authorization is still required. MC-30 is not that authorization and carries no Stage 7 Git authority | START | Source 18 §6 Stage 7; Protocol §16.1 (a work package may not include a step whose authority is not merged) | Mission Control, then human merge | A separate authorization merged to `main` (contents in Section 10) | OPEN — not issued |
| G-2 Independent Security & Permissions Architecture actor | Mission Control disposition (MC-31A): the actual named reviewer appointment and a documented prior-contribution and independence assessment are Stage 7 START prerequisites. The independent review may run in parallel with authorized Engineering Review, and relevant feasibility and risk findings cannot be accepted or relied on before it is completed. Appointment is recorded as PENDING until Mission Control names the actual actor and verifies independence. The existing specialist room is a candidate only. Claude Code cannot serve | START (appointment and independence assessment); DEPENDENT (acceptance of affected findings, until the review is completed) | MC-05 §4; MC-02 intake §4.2; Source 18 §4.3 role-separation table and §4.8 | Mission Control | A completed appointment record (Section 5) | PENDING |
| G-3 F-03 derived-value question | Not answered. Founder-approved separate field delegations preserved. Findings or design that assume an answer are held | DEPENDENT; resolution FOUNDER-RESERVED or MC-DISPOSITIONABLE (technical feasibility only) | Founder Record 04 (F-03 limits); MC-26; MC-27 §3 | Founder clarification, or an explicit bounded Mission Control technical-feasibility disposition | A recorded Founder clarification or a bounded disposition | OPEN |
| G-4 Multiple-business ownership | Approved multi-business **membership** is distinguished from unanswered multiple-business **ownership**. Whether a Founder decision is needed before ownership-dependent design is relied on is a Mission Control determination the sources do not make | FLAGGED (S-2); any product answer FOUNDER-RESERVED | Founder Record 04 (F-02 limits); MC-27 §3 | Mission Control determines; the Founder decides if a decision is needed | The determination, and the decision if required | OPEN — determination pending |
| G-5 F-06 | Evidence that database isolation testing exists and passes is kept separate from the governance choice to make it a required check. Recorded state is preserved until independently reverified. No workflow or protection change | DEPENDENT (only for any statement of required-check status); the required-check choice is MC-DISPOSITIONABLE governance | MC-24 §1; Stage 6 report F-06; `full-assurance.yml` header; Section 7 below | Mission Control (governance and infrastructure) | Independent verification of protection state, then a recorded decision | OPEN |
| G-6 T4 and WS-B | Production grants, RLS, functions, default privileges, migration and remediation-execution status stay `UNVERIFIED`. A separate privileged read-only verification may be recorded as a possible next work package, not an action MC-30 permits. WS-B is not claimed complete and no certification is made | DEPENDENT for remediation and isolation-dependent findings (intake §10); EVIDENCE TASK; whether it must precede Stage 7 start is FLAGGED (S-3) | `FPDR-4`; MC-27 §3; intake pack §§8, 10; `docs/migration/README.md` | Mission Control or Founder authorizes any privileged read-only verification | A separately authorized read-only verification record | OPEN — `UNVERIFIED` |
| G-7 Topology | Unverified environment and provider topology carried forward. Current evidence is required before topology-specific engineering or delivery assumptions are relied on | DEPENDENT; EVIDENCE TASK | Intake pack §10 | Mission Control | Fresh verification under separate authority | UNVERIFIED |
| G-8 Institutional learning | Dual intake and `Historical OLE backfill: NOT VERIFIED COMPLETE` carried forward until appropriately verified | Carry-forward (MC-DISPOSITIONABLE) | Stage 2 intake record; Blueprint Section 19 | Mission Control | Appropriate verification of the historical backfill | CARRIED FORWARD |

### Notes on individual gates

**G-1.** The authorization must be a new record. It cannot be inferred from MC-28, MC-29B, MC-30 or the readiness record.

**G-3.** The Founder chose independent field permissions. There is no approved inference-proof guarantee and no approved prohibition on either delegation, and this record invents neither. Section 6 lists the two routes by which the question can be resolved.

**G-5.** Two things are kept apart. First, database isolation testing exists in the repository (the Full Assurance suite) and its last run on `main`, on 2026-09-18, succeeded against the isolated test environment. That is not evidence about production. Second, whether that testing should be a required branch-protection check is a governance choice. See Section 7 for a design constraint recorded in the workflow itself.

**G-6.** Read-only verification means verification only. Anything that changes production or a migration needs its own explicit mission (`docs/migration/README.md`).

## 5. Independent Security & Permissions Architecture reviewer

### 5.0 Mission Control disposition of S-1 (MC-31A)

Three sources bear on timing. MC-05 §4 says the actual specialist appointment and contribution check "remain pending before Stage 7". Source 18 §§4.3 and 4.8 permit specialist review to run in parallel with Engineering Review as read-only fact-finding. MC-02 (intake pack §4.2) requires the independent review before the affected Stage 7 feasibility and risk findings are relied on. Mission Control's disposition, recorded here as directed and not decided by the drafter:

- The actual named reviewer appointment and a documented prior-contribution and independence assessment are **Stage 7 START prerequisites**.
- The independent specialist review may run **in parallel** with authorized Engineering Review.
- Relevant feasibility and risk findings **cannot be accepted or relied on** before the independent review is completed.
- The reviewer remains **PENDING**. This disposition appoints no actor and closes no gate.

### 5.1 Recorded appointment status

**PENDING.** No actor has been named by Mission Control, no independence assessment has been made and no appointment record exists. The reason is precise: the only fact in the repository is that a specialist room reviewed earlier mission material. That fact is not appointment evidence, and the repository holds no assessment of that room's independence from SB-P-1.12.

### 5.2 Why Claude Code cannot fill the role

Claude Code, in its Definition Actor role, authored Blueprint Sections 1–19, the populated FCTM and Founder Record 04, and, as Builder Review actor, the Stage 6 report. Source 18 §4.3 requires, on a material-risk mission where the Definition Actor also conducts Engineering Review, a parallel specialist who **did not author Sections 1–19**. MC-02 states that Mission Control's ordinary approval is not a substitute. Claude Code cannot use its own prior work as independent specialist review, and the Stage 6 report already disclaims independence.

### 5.3 Proposed appointment criteria (for Mission Control to adopt, amend or reject)

- The actor did not author Blueprint Sections 1–19 (MC-02; Source 18 §4.3).
- The actor is not Claude Code acting in any prior SB-P-1.12 role, and a new session or model label alone is not treated as independence (Source 18 §4.9 states this rule for the verification actor; applying it here is an analogy, see S-6).
- The actor's prior contributions to SB-P-1.12 and to the material SB-P-1.12 builds on are recorded, and Mission Control assesses contribution separation and correlated-assumption risk.
- The actor is capable in the mandatory review domain: authority or permissions, RLS or grants, tenant isolation (Source 18 §4.8).
- The actor's mandate is read-only fact-finding and review. It may not redefine Product Truth, authorize implementation, approve the mission, bypass Mission Control or issue competing instructions (Source 18 §4.8).
- Findings are recorded in the mission repository record under `specialists/` (Source 18 §4.8 folder layout) and are inputs, never authority.

### 5.4 Candidate identified, not appointed

The Security & Permissions Architecture specialist room is a candidate that Mission Control may consider.

- **Repository evidence of prior use:** the room reviewed the SB-P-1.11 Build-Now Gap-Closure EIS, and its verdicts are cited in that document; instructions to it were delivered by Founder copy and paste (`communication/archive/SB-P-1.11/`).
- **What the evidence does not establish:** the room is not recorded as an actor identity, model, provider or session. No repository record shows any contribution by it to SB-P-1.12 Sections 1–19, and absence of a record is not proof of independence.
- **Assessment items for Mission Control:** whether the room's earlier endorsement of the SB-P-1.11 authority and catalog design creates correlated assumptions for a mission that builds on that design; and what exact actor would perform the review.

### 5.5 Appointment record (template, every field undetermined)

| Field | Value |
|---|---|
| Actor (identity, provider, session) | NOT DETERMINED |
| Responsibility | Parallel review of Stage 7 feasibility and risk findings for the mandatory domains, per MC-02 §4.2 (to be confirmed) |
| Timing (MC-31A) | Appointment and independence assessment recorded before Stage 7 starts; review may run in parallel with authorized Engineering Review; affected findings not accepted or relied on until the review is completed |
| Prior contribution to SB-P-1.12 and to the material it builds on | NOT ASSESSED |
| Independence assessment (Mission Control) | NOT MADE |
| Review deliverables and location | Findings under `communication/missions/SB-P-1.12/specialists/` (to be confirmed) |
| Scope limits | Read-only; no scope redefinition, implementation, approval or competing instruction |
| Escalation route | To Mission Control; a Product Truth conflict or infeasibility raises T8 |
| Alternates | NOT NAMED |
| If no eligible independent actor exists | Per the intake pack, the Stage 7 feasibility and risk-finding gate stays pending, and nothing proceeds without the parallel review |
| Effective on | A Mission Control record merged to `main` |

## 6. Founder-reserved questions and Mission Control-dispositionable matters

Stated without proposed answers.

**Founder-reserved**

1. F-03 derived-value question, if the resolution route is a product clarification: may a separately delegated Reference Cost or margin value, combined with other available values, disclose the other, and what is intended?
2. Multiple-business ownership, if Mission Control determines that a product decision is needed: may one person own more than one business?
3. Stage 8, Founder approval and Blueprint lock, is separate and later.

**Mission Control may disposition without inventing Product Truth**

1. Whether and when to authorize Stage 7, and its actor, branch, paths and expiry.
2. The appointment of the independent reviewer and the independence assessment.
3. Whether the F-03 question is resolved by the Founder or by an explicit, bounded technical-feasibility disposition. Such a disposition may not assert inference-proof secrecy or prohibit an approved delegation.
4. Whether an ownership decision is needed at all (S-2).
5. The F-06 required-check governance decision, after verification.
6. Whether to authorize a read-only T4 verification work package, and whether it must precede Stage 7 (S-3).
7. Whether each gate is a START or DEPENDENT gate where Section 8 flags the sources as silent.

## 7. Separate decision boundaries: read-only verification and CI governance

| Next action | Required evidence | Authorized owner | Separate authority needed | Permitted by MC-30? |
|---|---|---|---|---|
| Independent re-verification of branch protection on `main` | A fresh read of the protection settings and required checks | Mission Control | A decision before any change; the current recorded state is `Markdown Quality Gate` only, strict, admins enforced, force pushes disallowed | No change permitted. This drafting read was read-only |
| Decide whether DB isolation testing becomes a required check | Evidence that the suite exists and passes; resolution of the design constraint that `full-assurance.yml` is path-filtered and deliberately not required because a required check that never starts would leave non-matching PRs blocked | Mission Control (governance and infrastructure) | Its own decision and, if changed, its own authorized infrastructure work | No |
| Privileged read-only verification of production grants, RLS, function and default privileges, migration state | A verification record | Mission Control or Founder authorizes; the executing actor is to be named | A new exact-scope authorization. Production mutation and migration stay `NOT AUTHORIZED` | No |
| Fresh topology verification | Current facts for the production delivery repository, Lovable project, Supabase production and test projects | Mission Control | A separate authorization | No |

## 8. Source ambiguities flagged for Mission Control

S-1 has been dispositioned by Mission Control (above). S-2 to S-7 remain flagged, and none of them is silently resolved.

- **S-1 (G-2) — DISPOSITIONED by Mission Control (MC-31A); no longer flagged.** The first draft said the sources did not settle whether the appointment must precede the start of Stage 7 or only reliance on its findings. That was incomplete: it did not cite MC-05 §4, which says the actual appointment and contribution check remain pending before Stage 7. Mission Control's disposition (Section 5.0, citing MC-05 §4, MC-02 and Source 18 §§4.3 and 4.8): appointment and independence assessment are Stage 7 START prerequisites; the review may run in parallel with authorized Engineering Review; affected findings are not accepted or relied on before it is completed. The reviewer remains PENDING.
- **S-2 (G-4).** MC-27 §3 separates ownership from membership but does not say whether an ownership decision is needed before dependent design is relied on.
- **S-3 (G-6).** The intake pack requires fresh re-verification "before any remediation design". It does not say whether it must precede Stage 7 start.
- **S-4 (G-7).** The sources do not say which topology facts are material to which Stage 7 output.
- **S-5.** Whether a technical-feasibility disposition of G-3 by Mission Control alone is sufficient, or whether a Founder clarification is always required, is left to Mission Control. MC-26 and MC-27 permit either route.
- **S-6.** Source 18 §4.9's independence rules are written for the Independent Verification Actor. Their use for the security specialist is an analogy, not a stated rule.
- **S-7 (G-5).** The path-filter design of Full Assurance and the requirement that a required check always start are recorded in the workflow and in a prior mission decision. The record does not say how they should be reconciled.

## 9. Explicit unresolved issues

- The independent reviewer is unappointed and no independence assessment exists.
- The F-03 derived-value question is unanswered.
- Whether multiple-business ownership needs a decision, and its answer, are undetermined.
- F-06 required-check governance is undecided.
- T4 production state, WS-B and topology are `UNVERIFIED`.
- The historical OLE backfill is `NOT VERIFIED COMPLETE`.
- No Stage 7 authorization exists, and the Blueprint's Metadata table still shows historical draft wording that no authorization has allowed to be refreshed.

## 10. Distinct future Stage 7 authorization boundary

A future Stage 7 authorization must be a separate record, reviewed by Mission Control and human-merged before it takes effect. It should at minimum name, in the form of Protocol §16 or §16.1:

- the actor, repository, locked branch and exact writable paths;
- the deliverables (Sections 20 and 21 with the early delivery plan and the per-`IN SCOPE`-row findings required by Source 18 §6 Stage 7), and that a row found blocked stays `IN SCOPE` and raises T8;
- the reference to a merged reviewer-appointment record (actor, prior contribution, independence assessment, deliverables, escalation route), which is a START prerequisite for Stage 7 (MC-31A; MC-05 §4), and the statement that the independent review may run in parallel with authorized Engineering Review but that affected feasibility and risk findings are not accepted or relied on before it is completed;
- which DEPENDENT gates are held and how the actor must treat the affected findings. Open DEPENDENT gates G-3 to G-7, and separately authorized evidence or CI-governance work, are prerequisites only to the particular finding, design or action that depends on them, and are not blanket blockers of unrelated Stage 7 planning, unless a later Mission Control record says otherwise;
- expiry, stop conditions, reporting requirements and the required closing line;
- that no migration, production action, EIS, implementation or Blueprint lock is included.

MC-30 is not that authorization, and nothing in it may be read as one.

## 11. Stop conditions

Any actor working from this record stops and reports if: a source or canonical state differs from Section 1; a statement would imply that a gate is closed, an actor is appointed or Stage 7 is authorized; an open question would have to be answered; a production, provider, branch-protection or workflow change would be needed; a new Product Truth ambiguity or source conflict appears (T1, T2, T3, T7 or T8); or a security certification claim would be needed.

## 12. Changed-path inventory for this communication PR

Eight paths, all communication-only:

| Path | Purpose |
|---|---|
| `communication/missions/SB-P-1.12/mission-control/17-stage7-prerequisite-disposition-and-reviewer-appointment-gate.md` | This record (new) |
| `communication/live/instruction.md` | Companion MC-30 instruction, hold and disposition only |
| `communication/live/report.md` | Handover for this draft |
| `communication/missions/SB-P-1.12/mission-control/18-stage7-readiness-live-instruction-snapshot.md` | Prior live instruction, byte-identical (new) |
| `communication/missions/SB-P-1.12/claude-code/22-stage7-readiness-live-report-snapshot.md` | Prior live report, byte-identical (new) |
| `communication/missions/SB-P-1.12/README.md` | Mission pointers and status |
| `communication/missions/SB-P-1.12/decision-log.md` | Append only |
| `communication/missions/SB-P-1.12/handover-log.md` | Append only |

The numbers 17, 18 and 22 were checked as unused before writing. This PR touches no Blueprint, FCTM, Founder Record, contract, Source 18, application, SQL, migration, workflow, branch-protection or provider file.

## 13. Founder merge brief

**Status.** This PR records proposed dispositions and a hold. It changes no product, code, SQL, Blueprint or GitHub setting. Merge only after Mission Control records its exact-head decision.

**Security implications.** None. No secret, credential or application file is involved, and the record certifies nothing about production.

**Commands.** Run in PowerShell from the repository root. The first shows the PR, and its head SHA must equal the exact head Mission Control recorded.

```text
gh pr view mission/SB-P-1.12-stage7-prerequisite-disposition-authorization --repo SmartBusinessv1/smart-business --json number,state,isDraft,headRefOid,statusCheckRollup
gh pr ready mission/SB-P-1.12-stage7-prerequisite-disposition-authorization --repo SmartBusinessv1/smart-business
gh pr merge mission/SB-P-1.12-stage7-prerequisite-disposition-authorization --repo SmartBusinessv1/smart-business --squash
```

**Expected success evidence.** `state OPEN`, the reviewed head SHA and every check `SUCCESS`; after merge, `state MERGED` with a merge commit that Mission Control verifies on `main`.

**Prohibited.** Do not merge if the head differs from the reviewed head, any check has not succeeded or Mission Control has not decided. Merging does not appoint a reviewer, close a gate or authorize Stage 7, Sections 20–21, EIS, implementation, migration, production or a Blueprint lock.

## 14. Decision

**MC-30 DECISION (PROPOSED, NOT EFFECTIVE):** THE DISPOSITIONS IN SECTION 4, THE REVIEWER APPOINTMENT STATUS IN SECTION 5 (PENDING) AND THE BOUNDARIES IN SECTIONS 6–11 ARE PROPOSED FOR MISSION CONTROL REVIEW. S-1 IS DISPOSITIONED PER MC-31A (SECTION 5.0); S-2 TO S-7 REMAIN FLAGGED. NO GATE IS CLOSED, NO REVIEWER IS APPOINTED AND STAGE 7 IS NOT AUTHORIZED.
