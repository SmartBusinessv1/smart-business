# SB-P-1.12 — MC-35 Stage 7 Engineering Review Activation Record

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Decision:** MC-35
**Prepared by:** Claude Code, as documentary preparer at Mission Control's direction. Claude Code has no authority to authorize, approve or activate anything, and transcribes Mission Control's decision only.
**Status:** DRAFT — NOT EFFECTIVE. Before its human merge, G-1 is OPEN and Stage 7 is NOT AUTHORIZED. It takes effect only as stated in Section 13.
**Authority:** Source 18 v1.2 §§4.3, 4.4, 4.8, §6 Stage 7 and §9.1; MC-02 separation condition (`mission-control/02-stage1-intake-pack.md` §4.2); MC-05 §4; MC-30 as canonical through PR #638, including MC-31A; MC-33 as effective through PR #639 and MC-34; `communication/AI_Communication_and_Handover_Protocol.md` §§16, 16.1, 21 and 27; the MC-35 instruction.
**Companion live instruction:** `communication/live/instruction.md` (MC-35, hold until the effect in Section 13).

## 1. Canonical baseline

Verified by Claude Code on a fresh fetch of `origin/main` on 2026-09-26.

| Item | Evidence |
|---|---|
| Canonical `main` | `df5d5257e1d22072f2163b2d04d04e72e73f0a0c`, equal to the verified starting checkpoint. No intervening commit |
| PR #637 (MC-28 reconciliation and Stage 7 readiness) | Human-merged `2026-09-25T11:40:06Z`, approved head `7500ce8336d4c7efbb4ba5803736b898ff03745f`, merge `55d96de24e8511d84528eebfdb36148c93866575`; MC-29B acceptance and post-merge verification in the PR comments. Ancestor of `main` |
| PR #638 (MC-30 prerequisite dispositions, with MC-31A's G-2 timing correction) | Human-merged `2026-09-25T12:03:13Z`, approved head `11bd13cf3038702870ec9c2c8b54c26643ef5027`, merge `e934dbfe715dd6d132d625e6b61816565a0d7e1c`; MC-31B acceptance and post-merge verification in the PR comments. Ancestor of `main` |
| PR #639 (MC-33 reviewer appointment) | Human-merged `2026-09-25T12:41:08Z`, approved head `6cb3b72e1dc73c005a4654d293ed755961091e20`, merge `df5d5257e1d22072f2163b2d04d04e72e73f0a0c`; MC-34 exact-head approval in the PR comments |
| MC-34 post-merge verification | PR #639 comment of `2026-09-25T12:41:57Z`: MC-33 appointment now effective; G-2's appointment and prior-contribution and independence-assessment START prerequisite satisfied; not completion of the independent review; G-1 open; G-3 to G-8 and S-2 to S-7 unchanged |
| Stage 6 | Builder Review findings F-01 to F-11 accepted as findings, not implementation decisions (MC-24, PR #632) |
| Founder Decisions and Blueprint | Founder Record 03 (`FPDR-1`–`FPDR-4`); Founder Record 04 (F-02 Option B, F-03 Option B, F-04(c) Option C); Blueprint v0.3, Sections 1–19 approved only (PRs #630 and #635) |
| FCTM | 373 rows: 228 `IN SCOPE`, 113 `ASSIGNED TO LATER MISSION`, 2 `DELEGATED`, 30 `NOT APPLICABLE`, 0 `ESCALATED` (Disposition column re-counted for this record) |
| Stage 7 readiness | `claude-code/21-stage7-readiness-record.md` (ledger G-1 to G-8) as dispositioned by `mission-control/17-stage7-prerequisite-disposition-and-reviewer-appointment-gate.md` |
| Scope flags (Stage 1) | Production mutation, migration execution, delivery synchronization and publication: `NOT AUTHORIZED` |
| Branch availability | `mission/SB-P-1.12-stage7-engineering-review` absent locally and on `origin` at drafting time |

Historical draft-status wording in earlier records, including the Blueprint Metadata table, is read together with the later merges and verifications above. It does not state current authority.

## 2. Mission Control decision, transcribed

Mission Control authorizes SB-P-1.12 to enter Source 18 Stage 7 Engineering Review on the exact scope in Sections 4 to 12, effective only as stated in Section 13. The decision does not repeat the MC-32 appointment verification and does not reopen the MC-33 appointment.

## 3. Start-gate determination

Two distinct facts.

| Gate | Status | Basis |
|---|---|---|
| **G-2** Independent reviewer appointment | **SATISFIED for Stage 7 START** | MC-33, human-merged in PR #639 (head `6cb3b72e1dc73c005a4654d293ed755961091e20`, merge `df5d5257e1d22072f2163b2d04d04e72e73f0a0c`) and verified post-merge by MC-34, with its independence assessment, seven evidence limitations and correlated-assumption controls. **This is not completion of the independent security review.** The review is outstanding |
| **G-1** Stage 7 authorization | **OPEN** until this record is human-merged and Mission Control verifies that merge | Neither MC-30 nor MC-33 is Stage 7 authorization. This record is |

On the effect in Section 13, G-1 is satisfied by this record itself. No later status-only PR is needed.

## 4. Stage 7 actors

| Role | Actor | Responsibility | Limits |
|---|---|---|---|
| Engineering Review owner (Source 18 §4.4) | **Claude Code** | Prepare Blueprint Sections 20 and 21; address the 228 `IN SCOPE` FCTM rows with traceable feasibility and risk findings; prepare the early delivery plan; identify dependent holds and escalation triggers; report to Mission Control | Authored Sections 1–19, the FCTM, Founder Record 04 and the Stage 6 Builder Review. It is not, and may not present its work as, independent specialist review |
| Independent specialist reviewer (MC-02 §4.2; Source 18 §§4.3, 4.8) | **The existing Security & Permissions Architecture room in Smart Business Build HQ**, appointed by MC-33 | Independently challenge Stage 7 security-sensitive feasibility and risk findings; apply the MC-33 correlated-assumption controls; disclose reliance on earlier SB-P-1.11 designs and recommendations; separate supported findings from evidence-blocked conclusions; report to Mission Control | May proceed in parallel with Engineering Review. May not issue a competing Engineering Review instruction, silently redefine Product Truth, or approve its own review. The appointment grants no Git or privileged-provider authority |

## 5. Authorized Stage 7 deliverables

This record authorizes the following engineering outputs and no later lifecycle output.

### A. Blueprint Section 20 — `20. Engineering Review`

### B. Blueprint Section 21 — `21. Engineering Questions, Risks & Recommendations`

### C. Per-row assessment

A finding for each of the 228 `IN SCOPE` FCTM rows, carried in Section 20 or 21 as Source 18 §6 Stage 7 requires, one entry per FCTM row ID, so that the count can be checked 228 of 228 against the FCTM. Each entry preserves:

- the FCTM row identity and its unchanged disposition;
- the applicable Product Truth and Blueprint reference;
- the feasibility and risk finding;
- the relevant security, data, integrity or experience dependencies;
- any evidence gap or blocking issue, naming the retained gate (Section 7) where one applies;
- any required specialist review or escalation, with the independent-review status of security-sensitive findings shown as pending until Mission Control dispositions the review.

A row found infeasible, unsafe or blocked **remains `IN SCOPE`**, with the exact reason recorded, and raises T8 where required. No requirement is moved to a later mission to avoid a difficult implementation problem. No FCTM row, disposition, build commitment, commercial classification or mission assignment is changed.

### D. Early delivery plan

In Section 20 or 21:

- expected environments and the evidence needed to establish them;
- expected migration classes and rehearsal needs (planning only, Source 18 §9.1);
- cross-mission dependencies;
- the applicable Fast Gate and Full Assurance CI tiers;
- the Source 18 Stage 1 scope flags, carried unchanged as `NOT AUTHORIZED`;
- the boundary between engineering planning and separately authorized infrastructure or production execution.

### E. Stage 7 report

A traceable report to Mission Control identifying: completed review coverage; blocked or conditional findings; independent specialist review status; unanswered Founder questions; required follow-on evidence work; T1–T8 triggers; and the precise next approval decision requested.

## 6. Independent security review conditions

The MC-33 appointment (`mission-control/19-independent-security-reviewer-appointment-record.md`, Sections 3 to 12) is incorporated by reference. In addition:

1. The specialist starts from canonical sources and current mission artifacts, not earlier verdicts.
2. Earlier SB-P-1.11 recommendations are disclosed when relevant.
3. Findings resting on those recommendations receive fresh challenge.
4. Historic provider observations are not reused as current evidence.
5. A specialist who designs remediation does not independently verify that remediation.
6. Mission Control determines whether an additional specialist challenge is needed for a materially correlated finding.
7. Affected Engineering Review findings are not accepted or relied on before the independent review is completed and Mission Control has dispositioned it.

**Reporting and handoff path.**

- The specialist delivers its written report to Mission Control, through the Founder where it is relayed. The report's eventual home is `communication/missions/SB-P-1.12/specialists/`.
- **Neither this record nor MC-35 grants any actor Git write authority for specialist findings.** A further exact-scope authorization is required to commit them. It must name the committing actor, the exact path under `specialists/`, the branch, and a requirement that the relayed text be committed unedited, with its provenance stated. Claude Code, as the reviewed Engineering Review owner, is excluded from `specialists/**` under the grant in Section 10.
- **Integration.** Claude Code does not paraphrase, summarize away or respond on behalf of the specialist inside Sections 20–21. Any Section 20–21 change prompted by the specialist's findings needs a Mission Control instruction recorded on the Stage 7 PR, or a later authorization, identifying the findings being applied.

## 7. Retained dependent gates

The MC-30 classification is preserved. Each open gate blocks only the finding, design or action that depends on it. None is a blanket Stage 7 start blocker unless a later Mission Control record says so.

| Gate | Remains open | Allowed in Stage 7 | Not allowed |
|---|---|---|---|
| **G-3** F-03 derived-value inference | The Founder approved separate Reference Cost and margin delegation. Disclosure by inference is unanswered | Independent, unrelated authorization design. Describing the question and its decision need | An inference-proof secrecy guarantee; prohibiting an approved delegation; relying on a conclusion that needs the answer, which is held |
| **G-4** Multiple-business ownership | Multiple-business membership with clear active-business context is approved. Ownership is a separate, unanswered question | Membership and active-business context design that does not depend on the ownership answer | Equating ownership with membership; silently deciding the ownership model. Ownership-dependent conclusions are held and the exact decision need is escalated to Mission Control |
| **G-5** F-06 required-check governance | Two separate facts: database isolation tests existing and passing in an identified environment; making them required under branch protection. The path-filtered Full Assurance workflow is not automatically suitable as a required check | Describing the tests, their environment and the governance decision need | Modifying workflows or branch protection; representing the governance decision as made |
| **G-6** T4 / WS-B | Production grants, RLS, privileged functions, default privileges, migration state and remediation execution are `UNVERIFIED`. The 2026-09-13 observations are not current production proof | The design dependency and a verification plan | Claiming remediation complete; basing production-security acceptance on unverified state; any privileged production inspection or remediation, each of which needs separate authority |
| **G-7** Topology | Environment and provider identities are not freshly verified | Documenting the exact facts needed and their evidence owners | Relying on stale identities for topology-specific engineering or delivery conclusions; any topology verification, which stays outside this record |
| **G-8** Institutional learning | `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force` | Carrying the status forward | Restarting extraction; promoting OLE candidates |

**S-2 to S-7** keep their unresolved status unless a later actual Mission Control or Founder decision resolves a specific item.

## 8. Protected Product Truth and stage boundaries

Preserved unchanged: Blueprint Sections 1–19 (subject only to the narrow status permission in Section 10.3); Founder Record 03 and Founder Record 04; F-02 Option B; F-03 Option B; F-04(c) Option C; Founder Scenarios A and B; `FPDR-1`–`FPDR-4`; all 373 FCTM dispositions and their source traceability; and the distinction between accepted Stage 6 findings and approved implementation decisions.

Claude Code does not silently choose technical mechanics on the Founder's behalf. Where a finding needs a mechanism the Founder left unselected (for example the F-04(c) mechanism), Stage 7 may state options and consequences as recommendations. Selecting one remains a later decision.

Not authorized by this record: an EIS; an implementation package; a Blueprint lock; a migration execution plan represented as execution authority; a production deployment instruction; a Product Mission Completion Report; code, SQL, migration, workflow, branch-protection, provider or production changes. **Stage 8, Founder approval and Blueprint lock, remains a later and separate gate.**

## 9. Scope flags

`PRODUCTION MUTATION: NOT AUTHORIZED`. `MIGRATION EXECUTION: NOT AUTHORIZED`. `DELIVERY SYNC AND PUBLICATION: NOT AUTHORIZED`. No stage, record, approval, merge or Git permission under this record changes them (Source 18 §9.1; `docs/migration/README.md`).

## 10. Stage 7 engineering Git authority

### 10.1 Grant

Effective only as stated in Section 13, in the form of Protocol §16.1:

> Mission Control authorizes **Claude Code** for mission **SB-P-1.12** to operate on repository **SmartBusinessv1/smart-business** under work package **SB-P-1.12-WP-S7** covering **(1) Stage 7 Engineering Review drafting of deliverables A to E in Section 5; (2) submission of one DRAFT pull request with its handover report; (3) Mission Control-directed corrections on that same pull request**, using locked branch **`mission/SB-P-1.12-stage7-engineering-review`**, limited to **the exact paths in Section 10.2, within the regions in Section 10.3**, permitted only to **the Git operations in Section 10.4**, using **mission-scoped descriptive commit messages**, with the standard `Co-Authored-By` attribution trailer **required**, until **the end event in Section 10.5** or **2026-10-17T23:59:59Z**, whichever comes first, stopping on any event in Protocol Section 21 or on revocation. This grants Git permission only. It grants no authority to approve, lock, authorize, execute, accept, close or merge.

### 10.2 Exact writable paths

| # | Path | Permitted change |
|---|---|---|
| 1 | `docs/phase-1-mission-blueprint/active/SB-P-1.12.md` | Only the regions in Section 10.3 |
| 2 | `communication/missions/SB-P-1.12/claude-code/25-stage7-engineering-review-report.md` | New file: the Stage 7 report (deliverable E) |
| 3 | `communication/missions/SB-P-1.12/claude-code/26-stage7-activation-live-report-snapshot.md` | New file: byte-identical copy of `communication/live/report.md` as it stands on `main` at branch creation, made before that file is replaced |
| 4 | `communication/live/report.md` | Replaced with the Stage 7 handover report |
| 5 | `communication/missions/SB-P-1.12/README.md` | Status line, stage ownership, stage ledger, communication index, next action and one new dated note. Earlier notes are kept as history |
| 6 | `communication/missions/SB-P-1.12/decision-log.md` | Append only |
| 7 | `communication/missions/SB-P-1.12/handover-log.md` | Append only |

Nothing else is writable. In particular: `communication/live/instruction.md` (owned by Mission Control), the FCTM, Founder Records, every file under `mission-control/`, `founder/` and `specialists/`, Source 18, contracts, the Build Plan, application code, SQL, `supabase/migrations/**`, `.github/**` and branch protection. The numbers 25 and 26 were unused at drafting time. If either is in use at branch creation, Claude Code stops and reports. It does not renumber.

### 10.3 Blueprint regions

1. **Append** `## 20. Engineering Review` and `## 21. Engineering Questions, Risks & Recommendations` after the end of Section 19.
2. **Metadata table, status only.** Only the `Lifecycle Stage`, `Status`, `Builder Review`, `Engineering Review` and `Next Lifecycle Gate` rows may be changed, and only to state the current factual stage and status with references to the merged records. Each before and after value is recorded in the Stage 7 report. No other Metadata row and no Mission Snapshot row changes.
3. **Section 18 Blueprint Change Log.** Append exactly one row, for version 0.4, describing the addition of Sections 20–21. Existing rows are unchanged.
4. Every other byte of the file, including Sections 1–17 and all of Section 19, is unchanged. The Stage 7 report shows this with a diff limited to the three regions above.

Items 2 and 3 are the only narrow metadata and status permissions. Mission Control may strike either before merge. If it does, that region stays byte-identical.

### 10.4 Git operations

Permitted: `git fetch`; fast-forward-only pull; creating the locked branch once, after verifying it is absent locally and on `origin`, from canonical `main` at or after this record's merge commit (Section 13); switching to it; staging the exact paths in Section 10.2 by name; committing; pushing that branch without force; opening one DRAFT pull request to `main`; updating that pull request's description and adding comments.

Not permitted: `git add .` or any wildcard staging; force push; rebase or any history rewrite; branch deletion; marking the pull request ready for review; merging, approving or self-merging; pushing to `main`; any other branch; resolving a conflict silently; changing branch protection, workflows or repository settings.

### 10.5 End event and expiry

The authority ends at the first of:

- Mission Control's recorded final exact-head acceptance of the Stage 7 DRAFT pull request;
- Mission Control's recorded explicit rejection of that pull request, or its closure;
- `2026-10-17T23:59:59Z`, the outside expiry, which no correction cycle extends;
- any event in Protocol §21;
- Mission Control revocation.

A return for correction is not an end event. After the Stage 7 draft is submitted, commits are permitted only to apply Mission Control-directed, finding-scoped corrections recorded on that pull request, within the unchanged paths in Section 10.2 and regions in Section 10.3, until an end event above occurs. A correction request that would change scope, paths, regions, branch, governing sources or authority is not a correction under this grant. It stops the work under Protocol §21 and needs renewed authorization.

After expiry, any further Git action needs a new, exact, human-merged authorization.

### 10.6 Stop conditions and finding-scoped holds

**Mission-wide stop.** Claude Code stops all Stage 7 work, commits nothing further and reports to Mission Control if:

- canonical `main` does not contain this record's merge commit, or Mission Control has not recorded its post-merge verification;
- governing state, a governing source or the target changes, including `main` moving after this record's merge with an intervening change that touches a writable path or a governing source, until Mission Control dispositions it;
- the locked branch or file number 25 or 26 is already in use, or any other branch-safety event in Protocol §21 occurs: validation or CI fails, a pull cannot fast-forward, a conflict occurs or unrelated working-tree changes appear;
- a change outside the paths in Section 10.2 or the regions in Section 10.3 would be needed;
- production, provider, privileged database, branch-protection or workflow access or change would be needed;
- Stage 7 cannot proceed at all without an unauthorized change, access or decision.

**Finding-scoped hold.** Where a finding would need an answer to G-3 or G-4, a resolution of S-2 to S-7, fresh evidence under G-5 to G-7, or raises T1, T2, T3 or T7, Claude Code:

- records the exact affected FCTM row IDs and the reason, and keeps each affected row `IN SCOPE`;
- does not decide the issue and does not rely on any conclusion that depends on it;
- reports and escalates it to Mission Control in the Stage 7 report and the handover;
- continues unrelated authorized drafting and read-only planning.

**T8.** A Product Truth conflict, infeasibility or security finding stops the affected work immediately. The affected rows stay `IN SCOPE` and are marked blocked with the reason, and the T8 is escalated to Mission Control at once. This does not mean that unrelated rows are accepted, and it does not by itself stop the whole of authorized Stage 7. Mission Control decides whether wider work stops.

**Prohibited statements.** No text may claim that the independent review is complete, that T4 remediation is done, that production is secure, or that a gate other than G-1 is closed. If a statement would need such a claim, the affected finding is held on the finding-scoped basis above.

### 10.7 Required closing line for the Stage 7 report

`SB-P-1.12 STAGE 7 ENGINEERING REVIEW DRAFT SUBMITTED — AWAITING MISSION CONTROL REVIEW; INDEPENDENT SECURITY REVIEW [STATUS]; AFFECTED FINDINGS NOT ACCEPTED OR RELIED ON UNTIL REVIEW DISPOSITION; STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/MIGRATION/PRODUCTION NOT AUTHORIZED.`

`[STATUS]` is the review's actual recorded status. It never reads `COMPLETE` unless Mission Control has recorded completion.

## 11. Reporting and escalation

Claude Code reports to Mission Control. Product questions reserved to the Founder go to the Founder only through Mission Control. T1 to T8 are raised as defined in Source 18 §6 Stage 3. T7 and T8 reopen the Founder gate at the stage where they arise. Findings are inputs and never authority.

## 12. Approval after Stage 7

Mission Control reviews the complete Blueprint and the independent review, and the Founder resolves product decisions (Source 18 §6 Stage 7). Stage 8, Founder approval and Blueprint lock, needs its own later authorization.

## 13. Effectiveness

**Before its human merge:** G-1 OPEN; Stage 7 NOT AUTHORIZED. Submission of this draft, Mission Control's exact-head review of it and any comment do not change that.

**After its human merge and Mission Control's verification:** once (1) Mission Control records its decision on this record at the exact head, (2) the Founder or an authorized human merges this separate PR to `main`, and (3) Mission Control independently verifies the actual merge commit on canonical `main` and records that verification on this PR, the Stage 7 scope in Sections 4 to 12 becomes effective, and G-1 is satisfied by this record. G-2's appointment is already satisfied. The independent review stays outstanding.

## 14. What is not decided

The F-03 derived-value question and multiple-business ownership are unanswered. F-06 required-check governance is undecided. T4 production state, WS-B and topology are `UNVERIFIED`. The historical OLE backfill is `NOT VERIFIED COMPLETE`. S-2 to S-7 remain flagged. The independent security review is not complete.

## 15. Changed-path inventory for this communication PR

Eight paths, all communication-only, checked as unused or existing before writing:

| Path | Purpose |
|---|---|
| `communication/missions/SB-P-1.12/mission-control/21-stage7-engineering-review-activation-record.md` | This record (new) |
| `communication/live/instruction.md` | Companion MC-35 instruction, hold until Section 13 |
| `communication/live/report.md` | Handover for this draft |
| `communication/missions/SB-P-1.12/mission-control/22-reviewer-appointment-live-instruction-snapshot.md` | Prior live instruction (MC-33), byte-identical (new) |
| `communication/missions/SB-P-1.12/claude-code/24-reviewer-appointment-live-report-snapshot.md` | Prior live report (MC-33 handover), byte-identical (new) |
| `communication/missions/SB-P-1.12/README.md` | Mission pointers and status |
| `communication/missions/SB-P-1.12/decision-log.md` | Append only |
| `communication/missions/SB-P-1.12/handover-log.md` | Append only |

This PR touches no Blueprint, FCTM, Founder Record, contract, Source 18, application, SQL, migration, workflow, branch-protection or provider file.

## 16. Founder merge brief

**Status.** This PR records Mission Control's Stage 7 activation decision and takes no effect until merged and verified. It changes no product, code, SQL, Blueprint or GitHub setting. Merge only after Mission Control records its exact-head decision.

**Security implications.** None from the merge itself. No secret, credential or application file is involved, and the record certifies nothing about production.

**Commands.** Run in PowerShell from the repository root. The first shows the PR, and its head SHA must equal the exact head Mission Control recorded.

```text
gh pr view mission/SB-P-1.12-stage7-activation-gate --repo SmartBusinessv1/smart-business --json number,state,isDraft,headRefOid,statusCheckRollup
gh pr ready mission/SB-P-1.12-stage7-activation-gate --repo SmartBusinessv1/smart-business
gh pr merge mission/SB-P-1.12-stage7-activation-gate --repo SmartBusinessv1/smart-business --squash
```

**Expected success evidence.** `state OPEN`, the reviewed head SHA and every check `SUCCESS`; after merge, `state MERGED` with a merge commit that Mission Control then verifies on `main`.

**Prohibited.** Do not merge if the head differs from the reviewed head, any check has not succeeded or Mission Control has not decided. Merging does not complete the independent security review, answer any Founder question, or authorize Stage 8, a Blueprint lock, EIS, implementation, migration, production or delivery.

## 17. Decision

**MC-35 DECISION (TRANSCRIBED, NOT EFFECTIVE):** STAGE 7 ENGINEERING REVIEW OF SB-P-1.12 IS AUTHORIZED ON THE EXACT SCOPE OF SECTIONS 4 TO 12, EFFECTIVE ONLY AFTER HUMAN MERGE OF THIS PR AND MISSION CONTROL'S POST-MERGE VERIFICATION. UNTIL THEN G-1 IS OPEN AND STAGE 7 IS NOT AUTHORIZED. G-2'S APPOINTMENT IS SATISFIED; THE INDEPENDENT SECURITY REVIEW IS OUTSTANDING.
