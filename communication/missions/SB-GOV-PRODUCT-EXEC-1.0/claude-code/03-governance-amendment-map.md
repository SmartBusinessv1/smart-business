# SB-GOV-PRODUCT-EXEC-1.0 — Governance Amendment Map

**Mission ID:** `SB-GOV-PRODUCT-EXEC-1.0`

**Document:** `03-governance-amendment-map.md`

**From:** Claude Code — governance / engineering workflow reconciliation specialist

**To:** Mission Control

**Status:** `RECONCILED TO FOUNDER DECISIONS — NO GOVERNING SOURCE HAS BEEN EDITED — MISSION CONTROL REVIEW REQUIRED`

**Date:** 2026-09-19

**Baseline:** `main` at `953496660a0939ec89608505dc61070a69faddf1`. Every line number below refers to that commit.

**Revision:** two revisions are published on PR #605 (heads `194b9a4b9dfd2ece65a419501fc29b90f8bd85ac` and `440c3efaa8cfe8c11e10d7d7b678673dc69fde4a`). This third revision reconciles the map to the Founder decisions recorded in the PR #605 conversation on 2026-09-19 (comments 5740893113, 5740990250 and 5741014275), checked line by line against those comments and against Mission Control's pre-publication review (comment 5742096316). It is published under Mission Control's Final Reconciliation Draft Publication Authorization; the commit SHA is in the return message.

> Design context: [01 — analysis](./01-current-state-and-bottleneck-analysis.md), [02 — proposed lifecycle and Final Founder Decision Register](./02-proposed-optimized-product-mission-lifecycle.md). Nothing here is active. `SB-P-1.12` remains `NOT ACTIVATED`.
>
> **This map supersedes the earlier two-draft classification.** The final Founder Decision Register is 02 §14 and [§10](#10-disposition-of-the-founder-decisions-and-earlier-review-findings) tabulates each decision against the items it changes. Several proposals were decided differently, so **eight items are rejected** (`S18-18`, `CP-04`, `MG-01`, `MG-02`, `AG-01`, `CL-01`, `CG-01`, `PG-01`), parts of others are removed, and the gate 2 rewording is deferred.
>
> **Founder decisions fix the content direction only.** The redline needs Mission Control's separate authorization, a human merge and independent verification (§7). Nothing here authorizes editing a governing source, committing, pushing, activating `SB-P-1.12`, changing branch protection or executing a migration.

---

## 1. How to read this map

| Disposition | Meaning |
|---|---|
| **APPROVED** | Implements a Founder decision, cited by ID (`D-nn` or `L-01`, 02 §14). |
| **APPROVED with parts** | Contains an approved core plus parts that are `PROPOSED`, `DEFERRED`, `REJECTED` or `CORRECTION`, each named in the item's final-disposition line. |
| **PROPOSED — CONFIRM AT REDLINE REVIEW** | A lifecycle mechanic with **no individual Founder record**. It is neither Founder-decided nor excluded, depends on no rejected or deferred item, and is confirmed, altered or dropped when Mission Control reviews the redline. The references M-1 to M-10 are in 02 §14.3. |
| **CORRECTION** | A factual or consistency correction with no behaviour change; Mission Control approval is sufficient. Corrections to the Founder-approved Build Plan are reviewed by the Founder because the artifact is Founder-approved. |
| **REJECTED** | The Founder decided not to adopt it. Kept in this map only as a record, with what replaces it. |
| **DEFERRED** | No Founder decision; excluded from the redline. |

Each item states: exact file, exact sections, current problem, proposed replacement behaviour, authority impact, security impact, compatibility risk, and its final disposition. Proposed wording is given verbatim only where precision matters (the dual-intake rule and the Git authorization wording).

New subsections are numbered so **no existing section is renumbered**: Source 18 gains `§3.1`, `§3.2`, `§3.3` and `§9.1`. It gains **no** `§10.1`. Other documents cite Source 18 sections by number (for example Protocol §26 cites "Section 10"), so this keeps them valid.

**No new files are required.** Record formats (Truth Pack, FCTM, Intake Record, Stage Ledger, Implementation Authorization fields, Contract Reconciliation) live inside the amended documents. The FCTM itself is a mission artifact created per mission, not a repository template file.

**Abbreviations.** `FCTM` is the Feature Coverage and Product Truth Traceability Matrix (02 §16). `View` is `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` (titled "Global Product Completion Register" inside).

## 2. Files to amend, and files reviewed and not amended

### 2.1 Governing files to amend (exact list)

| # | File | Items | Decisions applied | Package (§6) |
|---|---|---|---|---|
| 1 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `S18-01` to `S18-17`, `S18-19` to `S18-22` (21 items; `S18-18` rejected) | D-04, D-05, D-06 (boundary only), D-07, D-11, D-12, D-13, D-14, D-15, L-01 | A, C |
| 2 | `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md` | `PF-01` to `PF-10` | D-05, D-07, D-11, D-13, L-01 | A, C |
| 3 | `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md` | `IE-01` to `IE-12` | D-04, D-05, D-07, D-11, D-12, D-13, D-15 | A, C |
| 4 | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `BP-01` to `BP-09` | D-11, L-01 | A, C |
| 5 | `communication/AI_Communication_and_Handover_Protocol.md` | `CP-01`, `CP-02`, `CP-03`, `CP-05`, `CP-06` (`CP-04` rejected) | D-02b, D-07, D-08, D-14, D-16, L-01 | A, B, C |
| 6 | `communication/README.md` | `CR-01` to `CR-04` | D-02b, D-07, D-16 | A, B, C |
| 7 | `docs/migration/README.md` | `MG-03` only (`MG-01` and `MG-02` rejected) | D-06 (default-deny text unchanged) | C |
| 8 | `AGENTS.md` | `AG-02`, `AG-03`, `AG-04` (`AG-01` rejected) | D-02b, D-08, D-16, L-01 | A, B |
| 9 | `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md` | `SS-01` | D-08, L-01 | A |
| 10 | `communication/Independent_Verification_Efficiency_Protocol.md` | `IVP-01` | D-04, D-11 | A |
| 11 | `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` | `RG-01`, `RG-02`, `RG-03` | D-12, D-15 | A |

Eleven files, 70 retained items. The five rejected items in these files (`S18-18`, `CP-04`, `MG-01`, `MG-02`, `AG-01`) do not amend them.

### 2.2 Files reviewed and deliberately not amended

| File or group | Reason |
|---|---|
| `CLAUDE.md` and `CHATGPT.md` | `CL-01` and `CG-01` are rejected. Their migration wording stays (D-06), their Git wording says only that authority expires on any governing state change and points to `AGENTS.md` and the Protocol, and neither assigns Stage 2 to 4, so removing Codex as the default Definition Actor needs no edit |
| Phase 1 institutional-memory guide | Left unchanged (D-09). `PG-01` is rejected. The Stage 2 delta already catches its stale statements |
| `docs/migration/README.md` default-deny rule (lines 13–26) and `docs/migration/README.md` status taxonomy | Unchanged (D-06). Only the `MG-03` factual rows are amended |
| `merge/active/12_Product_Execution_and_Release_Framework.md`, `17_AI_Operations_Manual.md` | Reviewed for contradiction: none |
| `merge/active/01_Smart_Business_Master_System_Manifesto.md`, `11_Smart_Business_Product_Truth_Map.md` | Out of scope; no contradiction surfaced |
| The 25 feature contracts, the Feature Library `README.md` and `00_Feature_Definition_Library_Coverage_Matrix.md` | The FCTM is derived from them and must not alter them. Contract 21's section layout differs from the README's Feature File Standard `[R]`; the FCTM cites each contract's actual sections, so no contract edit is proposed |
| `merge/active/README.md` | Lists Source 18 by description only; no version string |
| `communication/governance/branch-protection-verification.md` and every repository setting | Hardening is deferred (D-10); the gap is recorded in 02 §19.2 and no item mutates any setting |
| `.github/workflows/*`, `docs/engineering/assurance/Build_Assurance_Baseline.md` | CI architecture already describes Fast Gate and Full Assurance |
| `docs/engineering/eos/*` | Contain no stage-scoped expiry wording; their stage numbering is unrelated to Source 18 |
| `communication/live/instruction.md`, `communication/live/report.md` | Transient handoff files, not governing sources |
| `mission-control/mission_memory.md` | Mission Control-owned state; updated at this mission's closure |
| `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md` | Structural reference; must not move |
| `organizational-learning/**`, `communication/archive/**`, SB-P-1.11 and other completed mission records | Immutable historical evidence |

### 2.3 Classification summary (78 items)

Computed from the final-disposition line of each item in §3 and the three rejected former-conditional items in §4. An item with a rejected or deferred part appears once, under its principal disposition.

| Disposition | Count | Items |
|---|---|---|
| APPROVED | 20 | `S18-21`, `S18-22`, `PF-03`, `PF-10`, `IE-05`, `IE-11`, `IE-12`, `BP-05`, `BP-07`, `BP-09`, `CP-01`, `CP-02`, `CP-05`, `CR-04`, `AG-02`, `AG-03`, `AG-04`, `RG-01`, `RG-02`, `RG-03` |
| APPROVED with parts | 35 | `S18-01`, `S18-02`, `S18-03`, `S18-05` to `S18-17`, `PF-01`, `PF-02`, `PF-04`, `PF-05`, `PF-07`, `PF-08`, `PF-09`, `IE-01`, `IE-02`, `IE-03`, `IE-06`, `IE-08`, `IE-09`, `IE-10`, `BP-06`, `CP-03`, `CR-03`, `SS-01`, `IVP-01` |
| PROPOSED — CONFIRM AT REDLINE REVIEW | 10 | `S18-04`, `S18-19`, `PF-06`, `IE-04`, `IE-07`, `BP-01`, `BP-03`, `BP-08`, `CP-06`, `CR-02` |
| CORRECTION | 5 | `S18-20` (with proposed appendix parts), `BP-02`, `BP-04`, `CR-01`, `MG-03` |
| REJECTED | 8 | `S18-18`, `CP-04`, `MG-01`, `MG-02`, `AG-01`, `CL-01`, `CG-01`, `PG-01` |
| **Total** | **78** | The earlier drafts had 76 (71 MUST, 5 CONDITIONAL). The two additions are `AG-04` and `CR-04`; `AG-03` and `RG-03` moved from CONDITIONAL to APPROVED |

**Deferred parts.** The gate 2 rewording and the integrated Stage 6 to 7 mode, inside `S18-09` and `PF-07`. **Rejected parts inside retained items:** generic builder filenames (`S18-12`, `PF-08`, `IE-02`), the risk-based retest exemption (`S18-15`), and every Migration Execution Authorization field or probe (`S18-11`, `S18-14`, `S18-19`, `IE-06`, `IE-07`). **No item exists** for D-03 (verified-code-only merge, a separate proposal, 02 §19.1) or D-10 (branch-protection hardening, deferred, 02 §19.2).

---

## 3. Amendment items

### 3.1 Source 18 — `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`

#### S18-01 — Header, version, provenance, change log

- **Sections:** header lines 3–15; Source Change Log lines 580–587; closing "Active control" lines 589–591.
- **Current problem:** header states Version 1.1; the change log ends at 1.0 (2026-08-01) with no v1.1 row; the closing line still says "Source 18 Version 1.0". Provenance for the active version is incomplete.
- **Proposed behavior:** Version 1.2; "Created under" and "amended under" name `SB-GOV-LIFECYCLE-1.0`, `SB-GOV-IV-1.0`, `SB-GOV-PRODUCT-EXEC-1.0`; append a v1.1 row (2026-09-18, PR #598 at `4ddbb647…`) and a v1.2 row; closing line names v1.2. Append-only, as line 587 requires.
- **Authority impact:** none beyond recording approval.
- **Security impact:** none.
- **Compatibility risk:** low. The verification protocol and `communication/README.md` cite "Source 18 v1.1" and remain historically true; the conforming references are part of MUST item IVP-01.
- **Final disposition:** `APPROVED` in principle for Version 1.2 and the provenance names (D-07; active only with the human-merged, coherent redline). `CORRECTION` for the missing v1.1 change-log row and the stale closing line (Mission Control approval is sufficient).

#### S18-02 — Governing principles and Institutional Learning Intake (new §3.1)

- **Sections:** §3 lines 43–57; new §3.1.
- **Current problem:** nothing requires a mission to consume approved truth or institutional learning. The Founder's dual-intake rule is not carried anywhere in the lifecycle (register C-12, B-07).
- **Proposed behavior:** add four principles: consume approved truth and treat rediscovery of it as a defect; **keep Product Truth complete, so that no approved requirement is silently omitted, deferred, reclassified or allowed to drift (mechanism in new §3.2, item S18-21)**; record each stage as a Stage Ledger disposition (M-1); never infer production, migration, delivery or publication authority from any stage record, approval, acceptance or merge. New §3.1 carries this text verbatim:

  > Every Product Mission intake must consume both current validated OLE learning and the canonical Phase 1 institutional-memory guide until Mission Control verifies that the historical OLE backfill is complete.

  It then defines the Institutional Learning Intake Record (02 §4.1): baseline SHA; guide identity and §18 checklist; every promotion listed with one disposition (`APPLIED`, `ALREADY EMBEDDED IN ACTIVE GOVERNANCE`, `INFORMATIONAL`, `NOT APPLICABLE`); the scope caveat that promotions are `MISSION_SCOPED` unless a record says otherwise and unpromoted candidates are not authority; the status line `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`; conflict escalation; the delta-only rule after the first intake; non-substitution; and that any simplified rule requires a separate Mission Control authorization after verified completion.
- **Authority impact:** adds a Mission Control review duty (gate 10). No authority transfers. Learning is evidence, never authority.
- **Security impact:** positive: repeats fewer known mistakes. The record itself carries no secrets.
- **Compatibility risk:** low. Existing missions are unaffected. Does not require the backfill and does not block `SB-P-1.12`.
- **Final disposition:** `APPROVED` for the dual-intake rule, the consume-approved-truth principle, the Product Truth completeness principle and the never-infer-authority principle (L-01, D-11). The Stage Ledger principle is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-1).

#### S18-03 — Roles

- **Sections:** §4.2 lines 67–71; §4.3 lines 73–77; §4.4 lines 79–85; §4.5 lines 87–91; §4.6–§4.8 lines 93–103.
- **Current problem:** §4.3 makes Codex the mandatory owner of Founder-led discovery, Product Truth extraction, the Founder Product Decision Record and Sections 1–19, and Mission Control's review records that the Founder asked for the default Codex-led rediscovery and Founder-question sequence to be removed (C-19); Lovable is the only implementer (§4.5) and Claude Code supports a build only "if assigned" (Appendix A, line 472) although SB-P-1.11-IMPL-1 was built by Claude Code; specialists are advisory but nothing permits them to work in parallel.
- **Proposed behavior:** **§4.3 is rewritten around a Definition Actor:** a qualified actor appointed by Mission Control in the Stage 1 record (Claude Code or another authorized actor where fit) owns Stage 2, the preparation of Stage 3 and Stage 4. **Codex is not mandatory** and remains available for separately appointed review or research and for independent Stage 19 verification when selected under §4.9. The conditional Founder Decision Gate is unchanged: the Founder is asked only about genuine open decisions, and Mission Control designates who conducts any triggered dialogue. A new role-separation rule (02 §18.2) applies by role, not provider: where one actor holds both the Definition and Engineering Review or EIS roles, Mission Control records a separation assessment and, on a material-risk mission, a parallel specialist who did not author Sections 1–19 reviews the engineering findings; where the Definition Actor is also a workstream's builder, Mission Control records the assessment and prefers different actors where available. §4.4 Claude Code owns the integrated Stage 6–7 work package and the combined Stage 21–22 package, may be the Definition Actor where appointed, and may be an authorized builder where the Implementation Authorization names it, subject to §4.9 independence. §4.5 becomes "Authorized Builder(s)": Lovable is one builder; its duties and limits are preserved for Lovable-built workstreams; the existing report and prompt paths are kept and each artifact states its actual builder truthfully (D-05). §4.2 adds Founder-reserved runtime scenarios and the delegable human verifier. §4.6–4.8 permit parallel specialist review, keep every advisory limit, and name the mandatory-review triggers (02 §6.2).
- **Authority impact:** **actor allocation changes:** Codex loses its mandatory ownership of Stage 2 to 4 and Mission Control gains the power to appoint the Definition Actor. That changes a Founder-approved allocation, and the Founder approved the change (D-13). No actor gains approval power: Mission Control still approves Sections 1–19 at Stage 5 and the Founder still approves at Stage 8.
- **Security impact:** independence matrix (02 §8.2) prevents a builder verifying its own work or a transferer verifying what it transferred; the role-separation rule (02 §18.2) prevents one actor being the only challenge to its own definition on a material-risk mission.
- **Compatibility risk:** low for history: SB-P-1.10 and SB-P-1.11 records name their own roles. Medium going forward: the Elaboration template (PF-03) and Appendix A (S18-20) must change with it, and `CLAUDE.md` and `CHATGPT.md` need no change because neither assigns Stage 2 to 4 (§5).
- **Final disposition:** `APPROVED` (D-13; D-05 for the truthful builder attribution). The parallel specialist review permission and the Founder-reserved versus delegable runtime split are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-3, M-5).

#### S18-04 — Independent Verification Actor (§4.9): verification-plan preview

- **Sections:** §4.9 lines 105–113.
- **Current problem:** appointment is recorded "for Stage 19", so verifier identity, independence and Codex classification are settled late.
- **Proposed behavior:** add: before the Implementation Authorization is recorded, Mission Control records a verification-plan preview (intended verifier and eligible alternates, prior-contribution and independence assessment, Codex utilization classification, Class A boundaries). Formal activation remains a Stage 18 decision. A replacement remains a recorded Mission Control decision under this section. All existing text stays.
- **Authority impact:** none; Mission Control still appoints.
- **Security impact:** earlier independence assessment; nothing weakened.
- **Compatibility risk:** low.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-5). It has no individual Founder record.

#### S18-05 — Stage 1: Mission Initiation and Intake Pack

- **Sections:** Stage 1 lines 125–131.
- **Current problem:** outputs omit contract mapping, workstreams, delivery and production scope, the intake record and the verification-plan preview.
- **Proposed behavior:** add the Intake Pack outputs listed in 02 §5.1: the contracts advanced and their delegates, **the FCTM opened for them at a recorded baseline with each contract's blob SHA**, the workstream register draft, and the default lines `production mutation`, `migration execution` and `delivery sync and publication` each `NOT AUTHORIZED`.
- **Authority impact:** Mission Control records more at initiation; no new authority.
- **Security impact:** production and migration needs are declared at the start (addresses B-06).
- **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the FCTM, the Definition Actor appointment record and the default-deny lines (D-11, D-13, D-06). The remaining Intake Pack outputs are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2).

#### S18-06 — Stage 2: Mission Truth and Delta Reconciliation

- **Sections:** Stage 2 lines 133–139.
- **Current problem:** "Product Truth Extraction" re-derives truth already held in the 25 contracts and the Build Plan (C-01).
- **Proposed behavior:** retitle; inputs are approved sources, the Build Plan §10 section, the in-scope contracts and their delegates, the View and the current repository and runtime state; output is the five-part Truth Pack (02 §5.2): **the populated FCTM**, derived constraints, Delta, unresolved items and conflicts, and the Institutional Learning Intake Record. The FCTM replaces the former free-form Truth Table for requirement-bearing truth. Uncited claims are `UNRESOLVED`. **The Definition Actor appointed under S18-03 is the owner; Codex is not the default owner.**
- **Authority impact:** owner unchanged; Claude Code input is a finding, so §3 ("only the current stage owner modifies the deliverable") holds.
- **Security impact:** the Delta catches stale baselines (for example Build Plan §5.2 and the residual `anon` grants).
- **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the populated FCTM and the Definition Actor as owner (D-11, D-13). The five-part Truth Pack structure is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2).

#### S18-07 — Stage 3: conditional Founder Decision Gate

- **Sections:** Stage 3 lines 141–147.
- **Current problem:** Founder Discovery is unconditional for every mission.
- **Proposed behavior:** conditional gate with triggers T1 to T8 (02 §5.3), including **T7** (proposed omission, deferral, pull-forward, simplification or reclassification of an approved requirement, or any change of its build commitment, commercial classification or mission assignment) and **T8** (a Product Truth conflict or infeasibility found at any later stage). Triggered: Founder Product Decision Record for triggering items only. Not triggered: Gate Record listing each trigger checked, plus a one-page Founder Brief; **permitted only if the FCTM has no critical-path `UNRESOLVED FOUNDER DECISION` row and no `ESCALATED` row**. T7 and T8 reopen the gate at whatever stage they arise. Mission Control cannot decline a Founder request (T5).
- **Authority impact:** Founder decision ownership preserved and extended to every proposed change of an approved requirement. The change is which questions reach the Founder, and Stage 8 remains the backstop over the whole Blueprint.
- **Security impact:** none; the risk is misclassification, mitigated by the uncited-claim rule.
- **Compatibility risk:** medium. Existing templates assume the dialogue; PF-05 aligns them.
- **Final disposition:** `APPROVED` for T7, T8, the reopening rule and the Definition Actor's conduct of any dialogue (D-11, D-13). The conditional structure and T1 to T6 as drafted are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2).

#### S18-08 — Stage 4: Blueprint assembly by reference

- **Sections:** Stage 4 lines 149–155.
- **Current problem:** Sections 1–19 are authored fresh each time.
- **Proposed behavior:** assemble by citing approved truth; new prose only for scope selection, delta, dependencies and acceptance criteria; keep the `SB-P-1.10` structure and `Not applicable — justified`; seed Experience Anchors and Founder Runtime Scenarios into Section 15 from Build Plan §10; add a Section-to-source table to Section 19 **keyed by FCTM row ID**. Exact Blueprint sections (`SB-P-1.10` numbering): Section 8 carries in-scope functional rows, Section 10 business rules, Section 12 dependencies, Section 15 acceptance scenarios and experience anchors, **Section 11 (Out of Scope) lists every `ASSIGNED TO LATER MISSION`, `DELEGATED` and `OUT OF BUILD SCOPE` row as "still committed / not in this mission" with the owning mission or preserved classification**, and Section 19 holds the row map. Blueprint content that maps to no row is a recorded refinement or a scope expansion (T3 if it changes truth). No actor, including the Definition Actor, may omit, defer, simplify, reclassify or expand an approved requirement.
- **Authority impact:** none beyond S18-03; the Definition Actor remains the author of Sections 1–19 and Mission Control still reviews at Stage 5.
- **Security impact:** none; denial-path scenarios are seeded at the start, not late.
- **Compatibility risk:** low; no section renumbering.
- **Final disposition:** `APPROVED` for FCTM mapping, the Blueprint sections that carry each row and the no-omission rule (D-11). Assembly by reference is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2).

#### S18-09 — Stages 5–7: Stage 5 completeness check and specialist review; gate 2 deferred

- **Sections:** Stages 5–7 lines 157–179; §9 gates lines 349–357. **Gate 2 (line 350) is not amended.**
- **Current problem:** the Stage 5 review has no check that the mission's requirement set is complete, and specialist review sits serially at Stage 10 (B-02).
- **Proposed behavior (decided parts):** Stage 5 additionally checks the Institutional Learning Intake Record and runs the FCTM completeness test (02 §16.4) as new gate 10. Section 20 or 21 carries a feasibility and risk finding per `IN SCOPE` row; an infeasible, unsafe or blocked row stays `IN SCOPE`, is marked blocked and raises T8, and is never quietly narrowed or moved.
- **Proposed behavior (for confirmation, M-3):** specialist reviews run in parallel with each other and with Engineering Review, read-only and advisory, and are mandatory on the named risk triggers (02 §6.2). Section 20 or 21 also carries the early delivery plan, which is planning and rehearsal only and never execution.
- **Deferred:** the rewording of gate 2 and the integrated Stage 6 to 7 mode. Gate 2 ("Builder Review approved before Engineering Review begins") stays exactly as written, and Builder Review and Engineering Review stay sequential (canonical crossings 4 and 5, 02 §18.4). The proposal has no Founder decision, edits a Founder-approved mandatory gate, and is excluded from the redline.
- **Authority impact:** none. The mandatory gate list gains gate 10 and loses nothing.
- **Security impact:** specialist review is preserved and made mandatory on risk, satisfying the hard boundary against removing specialist review where risk requires.
- **Compatibility risk:** low. No existing gate moves.
- **Final disposition:** `APPROVED` for the Stage 5 intake-record and FCTM completeness check and new gate 10, and for the per-row feasibility and risk finding (L-01, D-11). **The gate 2 rewording and the integrated Stage 6 to 7 mode are `DEFERRED`:** gate 2 stays as it is today. Parallel read-only specialist review and the early delivery plan are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-3).

#### S18-10 — Stages 8–11: lock and EIS

- **Sections:** Stages 8–11 lines 181–213.
- **Current problem:** specialist reviews arrive after the EIS exists, producing multi-round refinement (v2.0, v2.1, v2.2 in SB-P-1.11).
- **Proposed behavior:** Stage 8 Founder approval also confirms the FCTM and Truth Pack summary, the Founder-reserved scenarios and the production and migration scope flags; **the lock freezes every FCTM row's disposition, build commitment, commercial classification and mission assignment**, so any later change needs a Founder decision; the Blueprint lock is a canonical record (crossing 5) and is never branch-effective. EIS is drafted with specialist findings integrated **and carries an FCTM traceability table (every `IN SCOPE` row to EIS requirement, and every EIS requirement back to a row; an orphan needs a recorded reason and, if it adds behaviour, raises T3)**; Stage 10 specialist confirmations run in parallel into one disposition and Mission Control runs the completeness test; refinements are re-reviewed finding by finding; the Stage 10 disposition and Stage 11 lock may be one record. Gates 3 and 4 are unchanged.
- **Authority impact:** none; locks stay with Mission Control.
- **Security impact:** neutral to positive: security findings are integrated before lock.
- **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the lock freezing every FCTM row's disposition, classification and assignment, and the EIS traceability table (D-11). The remaining EIS mechanics are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-4). The Blueprint lock is a canonical crossing and no merge label is added.

#### S18-11 — Stages 12–13: package and Implementation Authorization

- **Sections:** Stages 12–13 lines 217–249, including the authorization field list at lines 233–247.
- **Current problem:** authorization lacks workstreams, environments, CI baseline, delivery and migration scope, verification plan and expiry; the package is reviewed and locked document by document in practice.
- **Proposed behavior:** the three documents are authored and reviewed as a set (existing artifact names retained, D-05); **the Engineering Contract maps every `IN SCOPE` row to an obligation, the Verification Checklist maps every `IN SCOPE` row to an item with a planned evidence class (named negative-path items for permission, isolation and denial rows; a named runtime scenario for every experience row), and the Builder Prompt lists each workstream's rows and forbids behaviour outside them**; Stage 13 is one canonical record (crossing 7) combining package lock and Implementation Authorization with the eight field groups in 02 §7.3, including default `NOT AUTHORIZED` production, migration and delivery lines, the pre-appointed verifier and **the locked FCTM path, baseline SHA, per-workstream rows and Mission Control's completeness statement**. It carries **no Git authority**, which is granted separately in the bounded form of `CP-05`, and no migration authorization. Gate 5 gains: no authorization while an `IN SCOPE` row is unmapped.
- **Authority impact:** implementation authorization stays an explicit Mission Control record and still must exist before implementation. Recording it with the lock is already permitted ("Locked package and explicit implementation-authorization decision go forward").
- **Security impact:** positive: environments, scope and independence are fixed before code exists.
- **Compatibility risk:** medium. Existing implementation-authorization records lack the new fields; only missions authorized after activation are affected.
- **Final disposition:** `APPROVED` for the FCTM mapping requirements and the strengthened gate 5 (D-11). The combined Stage 13 record and its expanded field groups are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-4). The migration field group and any Git-authority field are **removed** (D-06, D-02b).

#### S18-12 — Stages 14–16: implementation by workstream; existing artifact names retained

- **Sections:** Stages 14–16 lines 251–273; §5 line 121 root list; Appendix A line 472.
- **Current problem:** the Founder Lovable Brief is unconditional; there is no rule for building outside the canonical repository; Claude Code supports a build only "if assigned" although SB-P-1.11-IMPL-1 was built by Claude Code; and nothing requires a report to say, row by row, what was and was not implemented.
- **Proposed behavior:**
  - **Existing artifact names are retained (D-05).** The Lovable-specific paths and file names (`lovable-build-prompt.md`, `lovable-build-completion-report.md`) are not renamed, and no generic name is made mandatory. **Truthful attribution rule:** wherever Claude Code or another actor is the assigned builder, the artifact at the existing path carries a byline and a builder-identity field that make the real actor unmistakable, and nothing in it implies that Lovable implemented work it did not. If keeping the existing name would genuinely mislead, the author flags the naming conflict to Mission Control instead of silently renaming or restructuring a historical artifact.
  - Stage 14 is conditional (`NOT APPLICABLE — JUSTIFIED` when the builder has direct authorized access) (M-5). Stage 15 is implementation by workstream with checkpoint commits, each with a green Fast Gate. Stage 16's report per workstream carries the `SB-IV-1.0` §5 Verification Packet and the canonical-transfer record where applicable.
  - **Per-row statuses (D-11).** The report states for every assigned row `IMPLEMENTED` (with evidence), `PARTIALLY IMPLEMENTED` (stating what remains) or `NOT IMPLEMENTED`. A missing row is a coverage defect. A builder does not drop, defer, simplify or reclassify a row or implement behaviour that maps to no authorized row.
- **Authority impact:** none; still no implementation without the Stage 13 record.
- **Security impact:** the transfer is mechanical, scope-preserving, manifest-checked and never counts as verification.
- **Compatibility risk:** low. Nothing renames an artifact or breaks an existing reference.
- **Final disposition:** `APPROVED` for retaining the existing artifact names with truthful builder attribution (D-05) and for per-row builder statuses (D-11). The conditional Stage 14 and workstream wording are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-5). **Mandatory generic filenames are `REJECTED`** (D-05).

#### S18-13 — Stages 17–18: runtime verification

- **Sections:** Stages 17–18 lines 275–289; §4.2 lines 67–71.
- **Current problem:** Stage 17 does not separate product-experience judgement from mechanical checks, loading the Founder with both.
- **Proposed behavior:** Founder-reserved scenarios (Build Plan §10 scenarios and any anchor Mission Control designates) versus delegable checks by a named human verifier; the Founder still confirms all submitted findings; evidence names environment, commit and deployment identity, actor, role, route, result **and the FCTM row IDs exercised**; Stage 18 applies the entry gate and activates the pre-appointed verifier.
- **Authority impact:** Founder judgement is reserved where it matters and delegation is by name. No removal of human runtime verification.
- **Security impact:** neutral; CI never substitutes for the human gate.
- **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for recording FCTM row IDs in runtime evidence (D-11). The Founder-reserved versus delegable split is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-5).

#### S18-14 — Stage 19: mandatory gate restated

- **Sections:** Stage 19 lines 291–299.
- **Current problem:** the gate verifies checklist obligations but nothing requires it to check that the mission's requirement set is complete, that classifications and assignments were not moved, or that implemented behaviour matches approved expected experience (B-10).
- **Proposed behavior:** keep the existing text and add that Stage 19 may run per workstream with one mission-level disposition; migration-related Class A probes run in the authorized test environment, and a production probe needs the explicit authorization of a separate migration mission (D-06); the verifier records independence and does not implement corrections. **Add the coverage and drift obligation (02 §16.7), performed for every mission whatever the Codex utilization classification:** (1) coverage completeness, with the verifier independently inventorying each in-scope contract's numbered sections at the intake blob SHA and comparing with the FCTM (Class C); (2) movement integrity, comparing each row's disposition, build commitment, commercial classification and assignment at Stage 8, Stage 13 and Stage 22 against the source text and Founder Decision IDs (Class C); (3) drift of implemented behaviour from approved expected experience, permissions, denial behaviour and business rules, by Class A for material rows and Class B or C otherwise. Findings `SILENT OMISSION`, `UNAUTHORIZED DEFERRAL`, `UNAUTHORIZED PULL-FORWARD`, `MISCLASSIFIED`, `DRIFT` and `ORPHAN` map onto `PASS`, `FAIL`, `FOLLOW-UP`, `NOT APPLICABLE`; a material coverage or drift `FAIL` is a material blocking failure; a row without evidence is not demonstrated. The verifier reports and does not decide Product Truth. Where the only eligible verifier authored the FCTM, Mission Control records a separation assessment and the check is made against the source contracts. The sentence "Every Product Mission retains this gate" stays unchanged.
- **Authority impact:** the verifier's remit widens to coverage and drift; its authority does not (it still cannot approve itself, accept the mission or decide Product Truth).
- **Security impact:** positive: permission, isolation and denial requirements cannot be silently dropped; reinforces default-deny.
- **Compatibility risk:** medium. The verifier's scope grows, which affects `SB-IV-1.0` budgeting (IVP-01) and verifier capacity; the mandatory status and independence rules are untouched.
- **Final disposition:** `APPROVED` for the coverage and drift obligation (D-11). Running Stage 19 per workstream is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-6). Production probes under an MX are **`REJECTED`** (D-06).

#### S18-15 — Stage 20: Corrective Cycle and mandatory human retest

- **Sections:** Stage 20 lines 301–309.
- **Current problem:** every material `FAIL` triggers a "corrective mission" with updated report, Founder retest, runtime review and reverification (B-05); the protocol can only scope it "under Mission Control's direction".
- **Proposed behavior:**
  - **Finding-scoped cycle.** A "Corrective Authorization" (a numbered record, not a Product Mission ID) names the finding IDs, allowed paths and the builder (never the verifier). The sequence follows `SB-IV-1.0` §9 (finding, narrow correction, deterministic CI, human retest, Mission Control correction review, finding-specific re-verification), and escalation follows `SB-IV-1.0` §10. Prior-report preservation stays. Naming the record a numbered Corrective Authorization is for confirmation (M-7).
  - **Mandatory human retest (D-04).** A human runtime retest is required after **every** correction, before correction acceptance and before re-verification closes. Its scope is the affected behaviour and its regression surface, as Mission Control determines. It records the actor, the target, the scenarios, the expected and actual results and the evidence. There is **no automated-only waiver**: CI, tests and static review never replace it. Founder-reserved scenarios stay with the Founder or a confirmed delegate. There is no risk-based exemption, and the status `HUMAN RETEST NOT REQUIRED` does not exist.
  - **No row escapes.** A correction never resolves a coverage finding by removing or deferring the row: it restores the approved behaviour or removes the unauthorized behaviour, and if that is impossible or unsafe the row goes to the Founder (T7 or T8).
- **Authority impact:** Mission Control still controls every repeat cycle.
- **Security impact:** positive: human coverage is never narrowed after a correction.
- **Compatibility risk:** low. The retest is heavier than the earlier draft and lighter than a full corrective mission, because its scope is finding-specific.
- **Final disposition:** `APPROVED` (D-04 mandatory human retest; D-11 no row removed or deferred). Naming the record a numbered Corrective Authorization is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-7). The risk-based retest exemption is **`REJECTED`** (D-04).

#### S18-16 — Stages 21–23: package and acceptance

- **Sections:** Stages 21–23 lines 311–335.
- **Current problem:** Evidence Package and Completion Report are reviewed separately; the Completion Report does not carry the mandatory Experience Verification Matrix (C-04) and nothing reconciles it against the approved feature contracts; acceptance boundaries are not stated; nothing stops an `IN SCOPE` requirement being accepted as a "follow-up".
- **Proposed behavior:** combined manifest-first package where appropriate, with separate Stage 21 and Stage 22 dispositions; nothing before Stage 19. **The Completion Report includes the Experience Verification Matrix and a Contract Reconciliation (02 §16.9): every FCTM row of every contract advanced, with status `DEMONSTRATED`, `DEMONSTRATED — CARRIED FORWARD (<original evidence>)`, `IMPLEMENTED — NOT DEMONSTRATED`, `PARTIALLY DEMONSTRATED — <what remains>`, `NOT IMPLEMENTED`, `ASSIGNED TO LATER MISSION`, `DELEGATED`, `OUT OF BUILD SCOPE`, `NOT APPLICABLE` or `DEFERRED WITH FOUNDER DECISION <ID>`, and per contract the list of Build Now requirements not demonstrated by this mission.** Stage 23 records acceptance against the reconciliation; **an `IN SCOPE` row that is not `DEMONSTRATED` is not an ordinary follow-up, and accepting it is a scope deviation needing a recorded Founder decision (Stage 23 already requires Founder approval for a scope deviation or a material unresolved follow-up); acceptance never states contract-level completion. The Global Product Completion View is updated at Stage 23, in the same change as the acceptance record, from the accepted reconciliation only (RG-01), by Mission Control and not by the builder.** Stage 23 also states what it does not authorize and carries the Release Handoff Statement and owned follow-ups. **Accepted mission progress is kept apart from complete feature demonstration (02 §18.6):** a mission that demonstrates only some rows is accepted for its authorized scope, records its residual and its evidence-backed progress, and produces **no mature-feature completion upgrade** in the View (D-15, Option B); `ACCEPTED WITH FOLLOW-UP` may carry only a bounded follow-up (an evidence gap outside every `IN SCOPE` row, or a non-blocking issue mapping to no `IN SCOPE` row, each with an owner and the mission or gate that will verify it); the closure record states that `COMPLETED — FORMALLY ACCEPTED` does not mean the feature is complete. Stages 22 and 23 are canonical crossings 11 and 12 (02 §18.4).
- **Authority impact:** acceptance and Founder conditions unchanged in kind; the Founder-approval trigger for a scope deviation is made explicit for non-demonstrated `IN SCOPE` rows. Mission Control, not the builder, updates the View.
- **Security impact:** acceptance can no longer be read as deployment or migration authority, or as proof that a permission or isolation requirement was met when it was not demonstrated.
- **Compatibility risk:** low. The D-15 question is closed (Option B): a partial mission may move a feature between the existing non-terminal states on evidence and never to the mature-feature states.
- **Final disposition:** `APPROVED` for the Contract Reconciliation, the no-follow-up-for-an-`IN SCOPE`-row rule and the View update at acceptance (D-11, D-12, D-15). The combined Stage 21 and 22 package is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-8).

#### S18-17 — Stage 24 and closure gates

- **Sections:** Stage 24 lines 337–343; §9 gate 9 line 357; §14 lines 455–459.
- **Current problem:** closure requires only a record; OLE disposition and communication archive are required elsewhere (C-03); nothing requires the feature-level status of each advanced contract to be evaluated separately from mission completion, or residual requirements to be carried to the mission that owns them.
- **Proposed behavior:** Stage 24 becomes the Closure Package in the order of 02 §10.3: closure record; OLE disposition; **feature-level completion evaluation per advanced contract (a mission can be `COMPLETED — FORMALLY ACCEPTED` while the feature remains `IMPLEMENTED BUT INCOMPLETE`, View §12 "At Mission Closure"), listing the remaining Build Now requirements; residual carry-forward, so every row not `DEMONSTRATED` or `NOT APPLICABLE` and every follow-up is recorded with its owning mission and inherited by that mission's FCTM**; archive. Gate 9 reads "Mission Control acceptance before formal documentation closure, with every `IN SCOPE` row `DEMONSTRATED` or covered by a recorded Founder decision"; new gate 11 (OLE disposition before `COMPLETED — FORMALLY ACCEPTED`); §14 formal completion adds the intake record, the FCTM and Contract Reconciliation, and the OLE disposition. The View is **not** updated at Stage 24: its own protocol updates rows at acceptance, so the update belongs to Stage 23 (S18-16). OLE promotion review does not block closure.
- **Authority impact:** none new; Founder or Mission Control still confirms closure before archive.
- **Security impact:** none.
- **Compatibility risk:** low; it codifies existing practice.
- **Final disposition:** `APPROVED` for the feature-level evaluation, residual carry-forward and the FCTM conditions of gate 9 (D-11); gate 11 restates the existing OLE-disposition rule (L-01). The closure order is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-8).

#### S18-22 — Preparation is not authority: fail-closed operating rules (new §3.3) (D-14)

- **Sections:** new §3.3 after new §3.2 (§3 ends at line 57); cross-referenced from §9 lines 345–359 and §12 lines 426–430.
- **Current problem:** Source 18 says a mission moves forward "only after the preceding mandatory gate" (§3) and requires explicit Mission Control authorization, but does not say what may be prepared ahead of a gate, or that a committed branch record is not authority. Mission Control's review asked for a practical fail-closed model that needs no branch-effective authority, and the Founder approved it (D-14).
- **Proposed behavior:** new §3.3 states, as normative rules: **FC-1** a commit or pull request head is preparation and never authority; **FC-2** one canonical Mission Control instruction may authorize the at-risk preparation of adjacent documentary artifacts marked `DRAFT — NOT AUTHORIZED`, listing artifacts, order and stop conditions, provided none needs an authority not yet merged; **FC-3** each gate crossing is one pull request holding the artifact and Mission Control's decision record naming the reviewed SHA, the human merge is the ratification, and refinement rounds are comments and commits on the same pull request; **FC-4** a Founder decision or approval record is written only after it is given; **FC-5** a T1 to T8 trigger stops dependent preparation; **FC-6** production or migration authority, a Founder Product Truth decision or classification change, the Blueprint lock, build authorization, acceptance and closure are never branch-effective. It adopts the "prepared together / must wait" table of 02 §18.4, which stays inside the current gate order.
- **Authority impact:** none new. It restates that authority is canonical only on human merge and permits only preparation ahead of it. It is the operating model the Founder approved (D-14) and depends on no rejected or deferred item.
- **Security impact:** positive: it forbids relying on an unmerged record and lists what may never be branch-effective.
- **Compatibility risk:** low. It formalizes practice Mission Control already uses when it bundles instructions; the Principle in §3 gains one sentence permitting at-risk preparation.
- **Final disposition:** `APPROVED` (D-14, with D-01 and D-02a).

#### S18-18 — Checkpoint and PR governance (new §10.1; edits to §10 and §12) — REJECTED (D-01, D-02a)

> **Not adopted.** The Founder kept canonical-merge authority. The branch-effective (Class 2) records, the five-gate merge model, PR-1 to PR-6, the Decision Provenance table and the merge points G1 to G5 are removed from the amendment scope, and no new §10.1 is written.

- **Sections:** none amended for this purpose. Source 18 §10 (lines 361–406) and §12 (lines 426–430) keep their current authority text.
- **What replaces it:** the fail-closed model of `S18-22`, which adds no gate and no branch-effective record. The one surviving idea, that handover records are written when the owner changes and at each canonical crossing, is carried by `S18-20` (Source 18 §12) and `CP-03` (Protocol §7) as `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-9).
- **Authority impact:** none. Every authority-bearing record is human-merged to `main`.
- **Security impact:** none. The self-issued-decision risk that Class 2 would have created does not arise.
- **Compatibility risk:** none. No retained item depends on it.
- **Final disposition:** `REJECTED` (D-01, D-02a).
#### S18-19 — Default-deny and release boundary: pointer restatement (new §9.1)

- **Sections:** new §9.1 after line 359.
- **Current problem:** no lifecycle statement links Source 18 to Source 12 Part 4 release governance or to `docs/migration/README.md` (B-06).
- **Founder decision that limits it.** The Founder removed the migration-authority changes and the dependent Source 18 migration-authority rewording from the amendment scope (D-06). This item therefore adds **no** migration authority, no migration vehicle and no wording that describes how a migration is authorized.
- **Proposed behavior (a pointer restatement only):** the default-deny lines already required in the Implementation Authorization (`PRODUCTION MUTATION`, `MIGRATION EXECUTION`, `DELIVERY SYNC AND PUBLICATION`, each `NOT AUTHORIZED`); early planning, rehearsal and cross-mission dependency mapping at Stages 1, 6–7 and 9–13, which is planning only; a pointer that migration execution is governed solely by `docs/migration/README.md`; delivery sync and publication as release actions under Source 12 Part 4; and the CI baseline and topology wording (02 §11.4, §11.5).
- **Authority impact:** none. **Security impact:** positive; no stage or acceptance can be read as production authority. **Compatibility risk:** low. Nothing in `docs/migration/README.md`, `AGENTS.md`, `CLAUDE.md` or `CHATGPT.md` changes with it, and the item may be dropped without effect on any other item.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-10), as a pointer restatement with no new authority. The MX content is **`REJECTED`** (D-06).

#### S18-20 — Status model, appendices

- **Sections:** §13 lines 432–453 (status at line 448); Appendix A lines 461–476; Appendix B lines 478–497; Appendix E lines 521–554; Appendix F lines 556–574.
- **Current problem:** status `VERIFICATION COMPLETE — ACCEPTANCE PENDING` (line 448) differs from Stage 22's `… MISSION CONTROL ACCEPTANCE PENDING` (line 323) (C-06); matrices and artifact list omit the new artifacts; handover template lacks ledger fields.
- **Proposed behavior:** align the status string to Stage 22's wording; add the stage disposition vocabulary (`COMPLETE`, `NOT TRIGGERED`, `NOT APPLICABLE — JUSTIFIED`, `COMBINED WITH STAGE n`); update Appendix A rows for discovery, build and runtime; add to Appendix B the Truth Pack, **FCTM, Contract Reconciliation**, Intake Record, Gate Record, workstream register, Stage Ledger, expanded Implementation Authorization, Closure Package (creator, timing and approval authority for each); add an Appendix A row for Product Truth coverage (owner: Stage 2 owner for the row set, each stage owner for its own mapping, verifier for coverage and drift, Mission Control for the completeness test, Founder for any change); Appendix E adds one line to cut each branch from freshly pulled `main` after a canonical crossing merges; Appendix F adds the Stage Ledger reference and a pointer to the bounded work-package Git form (`CP-05`). §12 records a handover when the owner changes and at each canonical crossing, not at every stage (M-9).
- **Authority impact:** none.
- **Security impact:** none.
- **Compatibility risk:** low.
- **Final disposition:** `CORRECTION` for the status-string alignment (Mission Control approval is sufficient). The appendix, Stage Ledger and handover-timing edits are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-1, M-9). No appendix or Ledger edit depends on any rejected or deferred item.

#### S18-21 — Product Truth Coverage and Traceability (new §3.2) — implements the Founder addendum

- **Sections:** new §3.2 after new §3.1 (§3 ends at line 57); cross-referenced from Stages 1, 2, 3, 4, 7, 9, 12–13, 16, 19, 20, 21–23, 24, §9 and §14 (items S18-05 to S18-17).
- **Current problem:** no requirement-level accounting exists inside a Product Mission (01 §3.9, B-10). The contracts' Anti-Drift Rule and Founder Build Commitment Rule state the principle without a mechanism, owner or check. The lifecycle's traceability is "source/decision traceability" (Stage 4) and checklist-to-obligation, and the mandatory Experience Verification Matrix is anchor-level only.
- **Proposed behavior:** new §3.2 defines, in normative form, the content of 02 §16:
  1. **Requirement.** No relevant requirement of the 25 mature contracts or the Founder-approved Build Plan may be silently omitted, deferred, moved between Build Now, Build Later, Add-on, Separate Product or Reject, simplified or allowed to drift. The FCTM accounts for approved truth and does not reopen it.
  2. **The FCTM.** Opened at Stage 1, populated at Stage 2 for every contract advanced and its delegates plus the Build Plan §10, §11, §12 and §16 material; one row per separately verifiable obligation; row ID `<contract>-§<section>-<ordinal>` citing the contract's actual section and blob SHA; every section of every in-scope contract has at least one row; each numbered acceptance scenario is its own row; grouping applicable obligations is allowed only if each is enumerated.
  3. **Dispositions.** Exactly one per row with a citation: `IN SCOPE`, `ALREADY DEMONSTRATED` (evidence-backed, never assumed `PASS`; item 11), `ASSIGNED TO LATER MISSION` (a `BUILD NOW` requirement scheduled elsewhere, only with an approved assignment source), `DELEGATED`, `NOT APPLICABLE`, `OUT OF BUILD SCOPE` (approved commitment is `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT`), `UNRESOLVED FOUNDER DECISION`, `ESCALATED`. **`BUILD LATER` is a product commitment; `ASSIGNED TO LATER MISSION` is mission scheduling; a `BUILD NOW` requirement assigned to a later mission stays `BUILD NOW`.**
  4. **Classification lock.** Build commitment, commercial classification and mission assignment of an approved requirement change only by a Founder decision cited by Decision ID in the row. `Add-on` is not `Build Later`. Follow-up cannot carry an `IN SCOPE` row.
  5. **Completeness test** (02 §16.4) at Stages 5, 8, 10 to 11 and 13, and by the verifier at Stage 19.
  6. **Downstream mapping keyed by row ID** in each stage's own deliverable (Blueprint, EIS, contract and checklist, report, verification, Completion Report), so Source 18 §3 ownership is unchanged.
  7. **Escalation.** Triggers T7 and T8 (S18-07); the finder stops, marks the row `ESCALATED`, and Mission Control brings it to the Founder; conflicts are surfaced and never resolved by a lower-level actor; Founder decisions and classification changes are never branch-effective.
  8. **Carry-forward.** A later mission rebuilds the FCTM from the contract text and inherits earlier missions' final statuses.
  9. **Verification and reconciliation** by pointer to Stage 19 (S18-14) and to the Contract Reconciliation and View update (S18-16).
  10. **One matrix, referenced not copied.** Requirement text lives only in the source contracts; the FCTM holds IDs, pointers, dispositions and citations; downstream artifacts carry ID-keyed mapping tables checked by set difference and never restate requirement text; the Contract Reconciliation is the final-status column of the same FCTM and the Experience Verification Matrix is a filtered view of it. **Granularity:** obligation-level rows for `IN SCOPE`, partially delivered and mixed sections; a single section-level row only when the whole section has one non-`IN SCOPE` disposition and one citation, expanding when a mission takes any part of it in scope.
  11. **`ALREADY DEMONSTRATED` is not `PASS`.** It needs the earlier mission's verified evidence cited by path and commit or run identity and a Delta impact check showing it remains valid (the `SB-IV-1.0` §9 carry-forward test); it is reported as `DEMONSTRATED — CARRIED FORWARD (<original evidence>)`, never as newly executed; without traceable evidence, or where the Delta invalidates it, the row is `IN SCOPE`.
  12. **Residual and reclassification.** An accepted partial foundational workstream marks its delivered rows `DEMONSTRATED` and records every remaining Build Now obligation of the same section or contract as `ASSIGNED TO LATER MISSION` or `IN SCOPE — NOT DEMONSTRATED`. **Technical incompleteness (difficulty, partial foundation, missing dependency, incomplete implementation, add-on status, an older label) is never a right to reclassify or defer;** the row stays `IN SCOPE`, marked partial or blocked, and the Founder decides (T7 or T8).
  13. **Calibration.** The per-contract row volume is unknown. On `SB-P-1.12` the Stage 2 record states the row count and effort per contract for Mission Control; tuning that would loosen a rule needs Founder approval; no effort saving is claimed.
- **Authority impact:** no authority transfers. Every actor's discretion over an approved requirement is removed; the Founder's decision ownership over classification, deferral and scope is made explicit and enforceable; Mission Control gains completeness checks.
- **Security impact:** positive. Permission, isolation, confirmation-binding, denial and privacy requirements are rows, so dropping one is a visible finding rather than an unnoticed omission.
- **Compatibility risk:** medium. It adds Stage 2 effort proportional to the contracts advanced (risk R-14; row volume and cost are unknown and unmeasured; the reference-not-copy and granularity rules in items 10 to 12 exist to limit repetition), and it must be adopted consistently in PF-10, IE-11, IE-12, BP-09, IVP-01, RG-01 and RG-02. Contracts are unchanged. Existing missions are unaffected.
- **Final disposition:** `APPROVED` (D-11).

### 3.2 Elaboration template — `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md`

All items are subordinate to Source 18 (§2 of Source 18; template §20 requires Mission Control approval and a new version). Because behaviour changes, each item's final-disposition line says which parts implement a Founder decision and which are proposed for confirmation. The redline is reviewed by Mission Control and merged by a human.

#### PF-01 — ID and change log

- **Sections:** header lines 5–13; §21 lines 778–784.
- **Current problem:** Template ID is `SB-P-PFEW-1.3` but the change log ends at 1.2 `ACTIVE`; PR #598 changed the file on 2026-09-18 `[G]`.
- **Proposed behavior:** ID `SB-P-PFEW-1.4`; mark 1.2 superseded; add a 1.3 row (verification wording aligned to Source 18 v1.1, reconstructed from PR #598 and marked as such) and a 1.4 row.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` in principle for `SB-P-PFEW-1.4` (D-07). `CORRECTION` for the missing 1.3 row.

#### PF-02 — Purpose and mission variables

- **Sections:** §1 lines 17–32; §2 lines 36–49.
- **Current problem:** variables cover ID, name, context, paths and source list only; there is nowhere to bind the mission to approved truth or to declare scope flags.
- **Proposed behavior:** add rows: contracts advanced and View identifiers, delegated contracts in scope, Build Plan section, intake baseline SHA, **FCTM path and per-contract blob SHAs**, dual-intake sources, workstream register, delivery, migration and production scope flags (default `NOT AUTHORIZED`), Founder-reserved scenarios source.
- **Authority impact:** none. **Security impact:** default-deny flags present from the start. **Compatibility risk:** low; earlier copies of the template are unaffected.
- **Final disposition:** `APPROVED` for the FCTM and dual-intake variables (D-11, L-01). The scope-flag rows are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2).

#### PF-03 — Roles

- **Sections:** §3 lines 53–121.
- **Current problem:** §3 makes Codex responsible for Founder-led discovery and Blueprint drafting and says Codex shall "conduct a structured dialogue with the Founder" (lines 71 and 79); Claude Code has separate Builder and Engineering phases; Lovable is the sole builder.
- **Proposed behavior:** mirror S18-03. The "Codex" subsection becomes **"Definition Actor"**: the actor Mission Control appoints (Codex, Claude Code or another authorized actor), with the same source-fidelity duties the template gives Codex today (read approved sources, separate confirmed truth from derived constraints and unresolved questions, never invent missing decisions). The structured dialogue is conditional and runs only for triggering items, conducted by the actor Mission Control designates. Claude Code owns the integrated review and may be an authorized builder; Lovable is one authorized builder.
- **Authority impact:** mirrors Source 18. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` (D-13).

#### PF-04 — Source pack, ingestion, extraction

- **Sections:** §5 lines 144–166; §6 lines 170–186; §7 lines 190–226.
- **Current problem:** a manual generic source pack is placed in the Codex workspace; extraction is repeated per mission.
- **Proposed behavior:** replace the source pack with the Intake Pack, naming the in-scope contracts at their intake blob SHAs; Phase A becomes reading those contracts, the Build Plan §10 to §12 and §16 material and the dual-intake sources; Phase B becomes the five-part Truth Pack (FCTM, derived constraints, Delta, unresolved items and conflicts, Intake Record). §7.1 (Confirmed Product Truth) is satisfied by the FCTM; §7.2 (Derived Constraints) and §7.3 (Unresolved Product Questions) remain. Keep the "never invent an answer" rule (line 210). Throughout §6 to §8 and §10 to §11, "Codex" becomes "the Definition Actor" (S18-03). The FCTM section itself is item PF-10.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` (L-01, D-11, D-13). Replacing the source pack with the Intake Pack is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2).

#### PF-05 — Founder dialogue and decision record

- **Sections:** §8 lines 230–258; §9 lines 262–288.
- **Current problem:** unconditional dialogue and decision record.
- **Proposed behavior:** the dialogue and record run only when Stage 3 is triggered (triggers T1 to T8), only for triggering items, and conducted by the actor Mission Control designates (the Definition Actor or Mission Control itself; Codex is not the default interviewer and no Founder-question sequence runs by default); otherwise a Gate Record `NOT TRIGGERED`, permitted only if the FCTM has no critical-path `UNRESOLVED FOUNDER DECISION` row and no `ESCALATED` row. The record's Decision IDs are cited in the FCTM rows they affect, and every change of build commitment, commercial classification or mission assignment is recorded here (§9 table, "Source Alignment" column: `NEW FOUNDER DECISION`). Keep "no material product decision shall exist only in chat history" (line 288).
- **Authority impact:** Founder decision ownership preserved. **Security impact:** none. **Compatibility risk:** medium; must match S18-07.
- **Final disposition:** `APPROVED` for the Definition Actor's conduct of the dialogue and for T7 and T8 (D-13, D-11). The conditional structure is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2).

#### PF-06 — Drafting rules and stage sequence

- **Sections:** §10 lines 292–321; §11 lines 325–347; "Required Stage Sequence" lines 468–486.
- **Current problem:** drafting is authoring, not assembly; the 17-step sequence encodes unconditional discovery and serial reviews.
- **Proposed behavior:** assembly rules from S18-08; replace the 17-step sequence with the sequence in 02 §2, keeping the canonical Section 20 and 21 headings and the rule that Builder Review receives no numbered heading.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2, M-3). The stage sequence keeps gate 2 as it is today.

#### PF-07 — Review and lock phases

- **Sections:** §12 lines 351–385; §13 lines 517–533; §14 lines 537–551; §15 lines 555–566.
- **Current problem:** Mission Control's review checklist has no requirement-completeness check, Engineering Review has no per-row feasibility finding, and the lock does not freeze the requirement set.
- **Proposed behavior:** §12 Mission Control's review checklist adds FCTM completeness (02 §16.4) and absence of orphans; §14 Engineering Review records a feasibility and risk finding per `IN SCOPE` row, and a blocked row stays `IN SCOPE` and raises T8; §15 lock freezes the FCTM dispositions, classifications and assignments, and any later change needs a Founder decision. **Phase F and Phase G stay sequential and gate 2 is unchanged: the proposed Integrated Review phase is deferred with the gate 2 rewording (`S18-09`).** Where the template names specialists it may state that they review in parallel and read-only (M-3). No merge label is added.
- **Authority impact:** none. **Security impact:** mandatory specialist review preserved. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the FCTM checks, the per-row feasibility finding and the lock freeze (D-11). The Integrated Review phase is **`DEFERRED`** with the gate 2 rewording. Parallel specialist review is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-3).

#### PF-08 — EIS, package, reports, lifecycle diagram

- **Sections:** §16 lines 570–587; §17 lines 591–728 (package review at line 605; "separate explicit Mission Control mission" at lines 607–609; builder report lines 611–636; completion conditions lines 640–650; lifecycle diagram lines 686–719).
- **Current problem:** "Each document requires separate Mission Control review and lock" (line 605); implementation "requires a separate explicit Mission Control mission" while Source 18 requires a record (lines 607–609); report and preconditions that presume Lovable is the only builder; diagram fixes the serial chain.
- **Proposed behavior:** package reviewed and locked as a set; authorization is the Implementation Authorization record, which may be recorded with the package lock; the existing artifact names are retained and the preconditions state the builder truthfully (D-05); combined evidence and completion package; updated diagram that keeps the sequential gate 2 order. **Coverage:** §16 EIS carries the FCTM traceability table (EIS requirement to row and back); §17 requires the Engineering Contract to map every `IN SCOPE` row to an obligation and the Verification Checklist to map every `IN SCOPE` row to an item with an evidence class, with no authorization while a row is unmapped; the Formal Completion Report (lines 638–662) carries the Contract Reconciliation and the Experience Verification Matrix.
- **Authority impact:** none; wording aligns to Source 18. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the FCTM traceability requirements (D-11) and for retaining the existing artifact names (D-05). The remaining EIS, package and diagram wording is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-4, M-8).

#### PF-09 — Completion conditions and reuse

- **Sections:** §19 lines 749–763; §20 lines 767–774.
- **Current problem:** completion conditions presume discovery, decision record and serial reviews.
- **Proposed behavior:** conditions reference the Truth Pack, FCTM completeness, Gate Record, intake record and integrated review: the FCTM was populated, every row has a cited disposition, no `ESCALATED` row remained at lock, and the Blueprint maps every row; reuse instruction unchanged (new version recorded, prior history preserved).
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the FCTM completion conditions (D-11). The rest is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-2).

#### PF-10 — Feature Coverage and Traceability section, drafting prohibitions, Blueprint mapping (new)

- **Sections:** new **§7.4 Feature Coverage and Product Truth Traceability Matrix** immediately after §7.3 (line 226); §10 lines 292–321 (Blueprint drafting); §11 lines 325–347 ("Codex shall not"); "Canonical Product Blueprint Structure" lines 389–415 and "Structural Ownership → Codex" lines 426–437; §18 Permanent Governance Boundaries lines 732–745.
- **Current problem:** the template has no requirement-level accounting. §7.1 records "only product decisions explicitly supported by approved sources" with a source, but as a list, without coverage of every contract section, without dispositions, and without a rule against moving a requirement between classifications. §11 forbids inventing truth but not dropping or deferring it.
- **Proposed behavior:**
  - New §7.4 defines the FCTM (02 §16.2 to §16.4): scope, row rule (every section of every in-scope contract at least once; each numbered acceptance scenario its own row; no "etc."), columns, the eight dispositions, and the completeness test.
  - §7.4 also carries the classification lock (02 §16.5) and the escalation route (T7, T8).
  - §10 requires the Blueprint to map every row: Section 8 functional scope, Section 10 business rules, Section 12 dependencies, Section 15 acceptance scenarios and experience anchors, **Section 11 (Out of Scope) listing every `ASSIGNED TO LATER MISSION`, `DELEGATED` and `OUT OF BUILD SCOPE` row as "still committed / not in this mission" with its owning mission or preserved classification**, and Section 19 holding the row map. Content that maps to no row is a recorded refinement or a scope expansion.
  - §11 adds to the "shall not" list (renamed from "Codex shall not" to the Definition Actor): omit, defer, simplify, reclassify or expand an approved requirement; treat an old label as a deferral; treat technical incompleteness as a right to reclassify; and resolve a source conflict silently.
  - "Structural Ownership → Codex authors" becomes "Definition Actor authors" and adds the FCTM. "Claude Code" preserves it and adds only its own mappings.
  - §7.4 also carries the FCTM efficiency and vocabulary rules of 02 §18.5: one matrix referenced not copied; obligation-level rows for in-scope, partial and mixed sections and section-level rows only for wholly non-in-scope sections; `ALREADY DEMONSTRATED` never assumed `PASS`; `BUILD LATER` (commitment) kept apart from `ASSIGNED TO LATER MISSION` (scheduling); residual Build Now obligations beside an accepted partial workstream; no right to reclassify for technical incompleteness.
  - §18 adds the boundary: no actor may change the build commitment, commercial classification or mission assignment of an approved requirement without a Founder decision.
- **Authority impact:** removes every actor's discretion over approved requirements; Founder decision ownership is made explicit. The Definition Actor is the author of Sections 1–19.
- **Security impact:** positive: permission, isolation and denial requirements become rows and cannot be dropped unnoticed.
- **Compatibility risk:** medium: adds Stage 2 effort; must match S18-21. Existing Blueprints are unaffected. The `SB-P-1.10` structure and section numbers are unchanged.
- **Final disposition:** `APPROVED` (D-11).

### 3.3 Implementation and Evidence template — `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md`

#### IE-01 — ID, opening paragraph, change log

- **Sections:** header lines 5–13; §1 line 34 (long paragraph); no change log exists.
- **Current problem:** no version history; the paragraph names the Stage 19 actor and gates but not builder neutrality, work packages or the new record classes.
- **Proposed behavior:** `SB-P-IVEW-1.2`; add a change log (1.1 reconstructed from PR #598, marked as such; 1.2); update the paragraph.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` in principle for `SB-P-IVEW-1.2` (D-07). `CORRECTION` for creating the missing change log.

#### IE-02 — Mission variables

- **Sections:** §2 lines 38–58.
- **Current problem:** single "Builder" row; no workstreams, environments, scope flags, CI baseline or verification plan.
- **Proposed behavior:** add workstream register, authorized builder per workstream, environments, delivery, migration and production flags (default `NOT AUTHORIZED`), CI baseline, verification plan, runtime plan, checkpoint plan, **locked FCTM path and baseline SHA with the rows assigned to each workstream**; existing artifact names retained (D-05).
- **Authority impact:** none. **Security impact:** default-deny fields present. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the FCTM fields (D-11). The workstream and environment rows are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-5). Artifact names are retained (D-05).

#### IE-03 — Roles and evidence capturers

- **Sections:** §3 lines 62–137.
- **Current problem:** Claude Code is limited to documents and "test engineering or corrective engineering when specifically authorized" (lines 92–102); Lovable is the builder.
- **Proposed behavior:** authorized builders per workstream, including Claude Code; independence matrix; evidence capturer list keeps its provenance rule.
- **Authority impact:** as S18-03. **Security impact:** independence preserved. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for builder attribution (D-05, D-13). Authorized builders per workstream and the independence matrix are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-5).

#### IE-04 — Entry conditions and Phases A–C

- **Sections:** §5 lines 160–172; §6 lines 176–199 (line 197: "locked before the Builder Prompt is locked"); §7 lines 201–223; §8 lines 225–253.
- **Current problem:** three documents are authored and locked sequentially (B-03).
- **Proposed behavior:** authored and reviewed as a set; remove the contract-before-prompt lock rule; one Mission Control review; "no package before both locks" stays.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-4).

#### IE-05 — Completion Report template

- **Sections:** §9 lines 255–287.
- **Current problem:** template list omits the Experience Verification Matrix that Build Plan §13 makes mandatory (C-04), and has no reconciliation of the report against the approved feature contracts.
- **Proposed behavior:** add the matrix (columns and statuses from Build Plan §13) **and a Contract Reconciliation section: for every contract advanced, one line per FCTM row with status `DEMONSTRATED` (evidence class and path, verifier result, runtime evidence), `DEMONSTRATED — CARRIED FORWARD (<original evidence>)`, `IMPLEMENTED — NOT DEMONSTRATED`, `PARTIALLY DEMONSTRATED — <what remains>`, `NOT IMPLEMENTED`, `ASSIGNED TO LATER MISSION`, `DELEGATED`, `OUT OF BUILD SCOPE`, `NOT APPLICABLE` or `DEFERRED WITH FOUNDER DECISION <ID>`; per contract, the count and list of Build Now requirements not demonstrated by this mission; and an explicit separation of the states committed, implemented, merged, migrated or configured, deployed, runtime-verified, independently verified, accepted and globally complete (Phase 1 guide §4)**; add the combined manifest-first evidence and completion package; keep the distinctions between implementation, verification, evidence and acceptance. The template's existing "implementation complete; verification complete; evidence complete; accepted; non-blocking follow-up; unresolved release-blocking defects" list (lines 278–285) gains "requirement demonstrated" and "requirement not demonstrated".
- **Authority impact:** none. **Security impact:** ensures denial and permission behaviour is reported. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` (D-11; D-15 for the state separation).

#### IE-06 — Implementation authorization

- **Sections:** §10 lines 289–305.
- **Current problem:** field list omits environments, CI baseline, migration and production scope, verification plan, expiry.
- **Proposed behavior:** the expanded field set (02 §7.3), including the FCTM reference and Mission Control's mapping-completeness statement; may be recorded together with the package lock. No authorization while an `IN SCOPE` row is unmapped.
- **Authority impact:** mirrors S18-11. **Security impact:** positive. **Compatibility risk:** medium for missions authorized after activation only.
- **Final disposition:** `APPROVED` for the FCTM reference and mapping-completeness statement (D-11). The expanded field groups are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-4). The migration field group is **removed** (D-06).

#### IE-07 — Builder implementation, evidence directory, provenance

- **Sections:** §11 lines 307–331; §12 lines 335–370; §13 lines 372–432 (test evidence "raw output" at line 427).
- **Current problem:** no workstream or checkpoint concept; test evidence requires raw output rather than a CI run identity; no transfer or migration evidence fields.
- **Proposed behavior:** checkpoints, canonical-transfer record, CI run and checkout SHA as acceptable test evidence (`SB-IV-1.0` §6), evidence index as manifest. The migration-evidence fields that supported a Migration Execution Authorization are not adopted (D-06).
- **Authority impact:** none. **Security impact:** stronger environment identity evidence. **Compatibility risk:** low.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-5). The migration-evidence fields that supported an MX are **`REJECTED`** (D-06).

#### IE-08 — Checklist execution, report update, review, corrective work

- **Sections:** §14 lines 436–452; §15 lines 456–471; §16 lines 475–497; §17 lines 501–528.
- **Current problem:** "Corrective Missions" repeat a full loop (§17 lines 520–528).
- **Proposed behavior:** Corrective Authorization and the finding-scoped cycle with carry-forward and escalation (S18-15). §14 checklist results and §15 report updates are recorded per FCTM row. §16 Mission Control's outcome `ACCEPTED WITH NON-BLOCKING FOLLOW-UP` cannot cover a non-demonstrated `IN SCOPE` row, consistent with line 451 ("cannot be downgraded to Follow-up without Mission Control approval"), which is extended to require a Founder decision. §17 a correction never removes or defers a row.
- **Authority impact:** none. **Security impact:** see S18-15. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the mandatory human retest and the no-removal-of-a-row rule (D-04, D-11). The numbered Corrective Authorization is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-7).

#### IE-09 — Runtime observation and acceptance conditions

- **Sections:** §19 lines 549–563; §20 lines 567–583.
- **Current problem:** no split between Founder-reserved and delegable runtime checks; acceptance conditions omit the matrix and the release boundary.
- **Proposed behavior:** mirror S18-13 and S18-16; acceptance conditions add: the matrix and the Contract Reconciliation are accurate; **every `IN SCOPE` row is `DEMONSTRATED` or covered by a recorded Founder decision**; the Global Product Completion View was updated from demonstrated completion only; and acceptance is not release or deployment. Runtime evidence names the FCTM row IDs exercised.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the acceptance conditions and row IDs (D-11, D-12). The Founder-reserved versus delegable split is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-5).

#### IE-10 — Reusable instruction and completion gate

- **Sections:** §23 lines 633–658; §24 lines 662–680.
- **Current problem:** the checklist lists separate approvals and locks for each document (lines 669–671).
- **Proposed behavior:** package-set lock; add authorization fields, scope flags, verification plan and the FCTM reference to the reusable instruction and the gate checklist; add checklist boxes "FCTM locked", "every `IN SCOPE` row mapped to an obligation and a checklist item" and "no orphan obligation".
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the FCTM checklist boxes (D-11). Package-set lock is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-4).

#### IE-11 — FCTM in the entry conditions, contract, prompt and checklist (new)

- **Sections:** §5 Entry Conditions lines 160–172; §6 Engineering Contract lines 176–199; §7 Builder Prompt lines 201–223; §8 Verification Checklist lines 225–253 (the 13-item list at lines 233–247).
- **Current problem:** entry conditions require locks but not a mapped requirement set. The Engineering Contract translates the Blueprint and EIS "into a builder-facing implementation contract" without a rule that every approved requirement in scope is carried into it. The checklist's 13 sections (locked authority, repository, backend, frontend, database, security and RLS, validation, concurrency, performance, automated testing, evidence, completion, final acceptance) have no section verifying coverage or drift, although "every checklist item shall be objective, traceable, and evidence-backed" (line 249).
- **Proposed behavior:** §5 adds "the FCTM is locked and every `IN SCOPE` row is mapped to an obligation and a checklist item". §6 requires the contract to map every `IN SCOPE` row to at least one obligation and to state what is out of scope as "still committed / not in this mission". §7 requires the prompt to list each workstream's rows and to prohibit building behaviour outside them. §8 inserts a new checklist section **"Product Truth coverage and drift verification"** before "Final acceptance statement" (which becomes item 14): row-to-item completeness, classification and assignment integrity, orphan detection, and named negative-path items for permission, isolation and denial rows. Every item carries its row ID and a planned evidence class. `ALREADY DEMONSTRATED` rows map to a regression or no-change item that cites the earlier evidence and the Delta impact check; they are never assumed `PASS`. Row text is referenced by ID and never restated.
- **Authority impact:** none; ownership of the three documents is unchanged. **Security impact:** positive: negative-path items for permission, isolation and denial rows are mandatory. **Compatibility risk:** low for new missions; existing checklists are locked history.
- **Final disposition:** `APPROVED` (D-11).

#### IE-12 — Builder conduct, evidence indexing, Mission Control review and boundaries (new)

- **Sections:** §11 lines 307–331 ("The builder shall not"); §12 lines 335–370 and §13 lines 372–432 (evidence directory and provenance); §16 lines 475–497 (Mission Control review); §22 lines 613–629 (Permanent Governance Boundaries).
- **Current problem:** the builder "shall not" change product truth (line 324) but nothing forbids omitting, deferring or simplifying an authorized requirement, or implementing behaviour outside the authorized set; evidence is indexed by artifact and checklist obligation, not by requirement; Mission Control's review list has no coverage item.
- **Proposed behavior:** §11 adds to "shall not": omit, defer, simplify or reclassify an authorized row, and implement behaviour that maps to no authorized row; the builder raises T7 or T8 through Mission Control instead. §12 and §13 add FCTM row IDs to the evidence index ("checklist obligation supported" becomes "checklist obligation and FCTM row supported"). §16 adds "requirement coverage and reconciliation" to Mission Control's review and adds the outcome rule that a non-demonstrated `IN SCOPE` row cannot be accepted as a follow-up without a Founder decision. §22 adds: no Part Two workflow may silently omit, defer, simplify, reclassify or expand an approved requirement.
- **Authority impact:** removes builder discretion over approved requirements; Founder decision ownership is explicit. **Security impact:** positive. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` (D-11).

### 3.4 Build Plan — `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`

The direction (nine missions, product outcomes, scenarios, unresolved decisions, §5.1, §5.4 examples, §5.5, §15, §16) is unchanged. Only the operational baseline moves.

#### BP-01 — Header

- **Sections:** lines 1–12.
- **Current problem:** the status block records 2026-09-12 only.
- **Proposed behavior:** add a line `Operational baseline revision: <date> (SB-GOV-PRODUCT-EXEC-1.0)`. Keep "NOT A FEATURE CONTRACT — NOT A 26TH FEATURE — NOT IMPLEMENTATION AUTHORIZATION".
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW`. The Build Plan is a Founder-approved artifact, so the Founder reviews this edit.

#### BP-02 — §5.2 CI gate

- **Sections:** §5.2 lines 161–167.
- **Current problem:** says the automatic pull-request workflow "historically runs the Markdown Quality Gate rather than a full application build/lint/test gate" and that `SB-P-1.12` "must establish" one (C-02). Fast Gate and Full Assurance exist (closed 2026-09-16).
- **Proposed behavior:** retitle as CI baseline maintenance. `SB-P-1.12` keeps Fast Gate green at every checkpoint, runs Full Assurance where path-triggered, extends tests for its own authority and isolation obligations, and surfaces (does not decide) whether Fast Gate becomes a required check. Remove "must establish".
- **Authority impact:** none. **Security impact:** prevents redundant work and a false sense of blocking coverage (O-01). **Compatibility risk:** low.
- **Final disposition:** `CORRECTION` of a stale statement. The Build Plan is a Founder-approved artifact, so the Founder reviews this edit.

#### BP-03 — §5.3 and §5.4 topology and planning

- **Sections:** §5.3 lines 169–181; §5.4 lines 183–191.
- **Current problem:** describes divergence as a past risk; topology is now settled and recorded.
- **Proposed behavior:** state the current topology (02 §11.5) with source and date; keep "A canonical GitHub merge alone must never be treated as proof that production contains the accepted application"; add that delivery sync, publication and production migrations are release actions needing separate authorization, and that needs are declared at Stages 1 and 6–7.
- **Authority impact:** none. **Security impact:** positive. **Compatibility risk:** low.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW`. Founder review as for BP-01.

#### BP-04 — §10.1 required work areas

- **Sections:** §10.1 line 400.
- **Current problem:** lists "automatic build/lint/test CI gate" as required work.
- **Proposed behavior:** replace with "CI baseline maintained and extended for this mission's authority and isolation obligations". Scenarios A and B (lines 424–430) unchanged.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `CORRECTION` of a stale statement. Founder review as for BP-01.

#### BP-05 — §13 Experience Verification Matrix

- **Sections:** §13 lines 859–880.
- **Current problem:** the matrix is required in the Completion Report but not seeded earlier, "Founder-reserved" is undefined, and the matrix covers only experience anchors, leaving the rest of each contract without a completion reconciliation.
- **Proposed behavior:** add rules: the matrix is seeded at Stage 4 from §10 scenarios; Founder-reserved scenarios are the §10 Founder Runtime Verification scenarios plus any anchor Mission Control designates and are locked at Stage 8; **the matrix is the experience subset of the Contract Reconciliation, which covers every FCTM row of every contract advanced, and both cite row IDs**. Rules 1 to 8 unchanged; rule 8 ("A later mission cannot use that deferral to erase accountability for the earlier portion") is cited as the basis of residual carry-forward.
- **Authority impact:** Founder retains product-experience verification. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` (D-11).

#### BP-06 — §14 Source 18 execution discipline

- **Sections:** §14 lines 884–916.
- **Current problem:** restates a stage list that omits conditional and combined stages and would drift from Source 18.
- **Proposed behavior:** replace the list with a pointer to the current Source 18 lifecycle and state the no-rediscovery, **Product Truth coverage (FCTM)** and dual-intake rules; keep the four closing statements (no self-approval; merge is not acceptance; green CI is not acceptance; tool access is not authority).
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for the no-rediscovery, dual-intake and FCTM statements (L-01, D-11). The pointer replacing the stage list is `PROPOSED — CONFIRM AT REDLINE REVIEW`.

#### BP-07 — §17 future-mission inputs

- **Sections:** §17 lines 988–990.
- **Current problem:** input list omits institutional learning, the completion view, the requirement-level accounting and topology verification.
- **Proposed behavior:** add current validated OLE learning and the Phase 1 guide (dual intake, verbatim rule), the Global Product Completion View, **the mission's Feature Coverage and Product Truth Traceability Matrix built from the full text of the relevant contracts**, and freshly verified delivery topology. The existing formula ("current Product Truth + this plan + relevant mature feature contracts + verified current repository/runtime state + only the unresolved Founder decisions relevant to that mission") is kept and made verifiable by the FCTM.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` (L-01, D-11).

#### BP-08 — New §19 Operational Baseline

- **Sections:** new §19 after §18 (before "Final Principle", line 1017).
- **Current problem:** operational facts are scattered across closure records.
- **Proposed behavior:** dated section with CI facts, topology, verification protocol status, OLE state (17 mission-scoped promotions; backfill not verified complete), migration authority state, the state of the Global Product Completion View (no contract yet proven complete, View §6), and early-gate status as verified at that date (§5.1 still open in the repository, §5.2 superseded). States it authorizes nothing and is superseded by later fresh verification.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low; dated, so staleness is visible.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW`. Founder review as for BP-01.

#### BP-09 — Assignment lock, non-exhaustive §10, approved assignment sources (new)

- **Sections:** §2 Authority and Anti-Drift Boundary lines 41–62 (after the permanent anti-drift rule, line 54–60); §9 lines 358–378 (after the sequence table, before line 374); §10 preamble, before §10.1 (line 382); §11 lines 824–842 and §12 lines 846–855; §15 lines 918–934 and §16 lines 938–961.
- **Current problem:** (1) the §10 subsections list "Required work areas" as short summaries; nothing says they are not the mission's complete requirement set, so a reader can treat contract material they do not name as out of scope (C-17). (2) The nine-mission table fixes mission assignment but does not say the assignment of a Build Now requirement is locked. (3) §11 and §12 hold the approved cross-mission splits but are not named as the only valid basis for deferring a requirement to a later mission. (4) §15 and §16 do not say how their items feed the FCTM.
- **Proposed behavior:**
  - §2 adds: the mission-level FCTM (Source 18 §3.2) is the operational enforcement of this anti-drift rule.
  - §9 adds: mission assignment of a Build Now requirement is locked; changing it needs a Founder decision. Internal workstreams remain free (they do not change assignment). **It also states the vocabulary:** the nine-mission table is **mission scheduling** (which mission builds a `BUILD NOW` requirement); `BUILD LATER` is a **product commitment** (the View §4.2 build-commitment value); a `BUILD NOW` requirement assigned to a later mission stays `BUILD NOW` and never becomes `BUILD LATER`; technical incompleteness never authorizes changing either.
  - §10 preamble adds: each subsection summarizes the mission's product outcome and is **not exhaustive**; the complete requirement set is the FCTM built from the full text of the mapped contracts.
  - §11 and §12 add: **the approved sources for the `ASSIGNED TO LATER MISSION` disposition are exactly §9, §10, §11 and §12 of this plan and the contract's own stated dependencies**; without one of them the disposition is unavailable and the change goes to the Founder.
  - §15 adds: an unresolved decision affects only the FCTM rows on its critical path (View §8 and §10); it does not block unrelated rows.
  - §16 adds: each explicit rejection is an FCTM `OUT OF BUILD SCOPE` row checked as "must not appear".
- **Authority impact:** none new; states existing locks and makes the assignment lock explicit. Founder decision ownership of assignment is unchanged.
- **Security impact:** positive: rejected behaviours (for example broad Super Admin access, hard credit blocking) are verified as absent, not merely omitted.
- **Compatibility risk:** low. No direction, sequence or product outcome changes.
- **Final disposition:** `APPROVED` (D-11).

### 3.5 Communication and Handover Protocol — `communication/AI_Communication_and_Handover_Protocol.md`

#### CP-01 — Version, status, change log

- **Sections:** header lines 1–14; Protocol Change Log lines 663–674; closing line 678.
- **Current problem:** Version 1.0.
- **Proposed behavior:** Version 1.1 with an appended log row (append-only, line 674); activation control line updated.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low; `communication/README.md` line 83 cites "Version 1.0" (CR-03).
- **Final disposition:** `APPROVED` in principle for Version 1.1 (D-07), **only if the Protocol is substantively amended as approved.** It is: `CP-05` (Package B) is a substantive Git-authority amendment, and `CP-02`, `CP-03` and `CP-06` (Package A) are further amendments. If neither package lands, no bump is made.

#### CP-02 — Required repository intake

- **Sections:** §5 lines 71–83.
- **Current problem:** the intake list does not include institutional learning for Product Missions.
- **Proposed behavior:** add an item: for a Product Mission, the intake record required by Source 18 §3.1.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` (D-08, L-01).

#### CP-03 — Communication structure and record updates

- **Sections:** §6 lines 85–104; §7 lines 106–118.
- **Current problem:** §7 requires stage report, decision log, handover log and README update "before handover" at every handover.
- **Proposed behavior:** Stage Ledger entry at each stage completion; handover records at owner change and at each canonical crossing; substantive stage reports live in the mission record; live files remain a pointer. **Refinement requests and Mission Control review comments may be recorded as comments on the open pull request that carries the artifact, with fixes as new commits on the same pull request, so no separate authorization pull request is needed per round (fail-closed rule FC-3, S18-22). The merged pull request is the record.** This is fail-closed rule FC-3 (D-14) and needs no other decision.
- **Authority impact:** none. **Security impact:** none; audit trail preserved by the Ledger and commit identity. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` for refinement comments and commits on the open pull request (D-14, FC-3). The Stage Ledger entry and handover timing are `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-1, M-9).

#### CP-04 — Mission-branch model, PR rules, PR handover — REJECTED (D-01, D-02a)

> **Not adopted**, with `S18-18`.

- **Sections:** none amended for this purpose. Protocol §8 (lines 120–152), §12 (lines 226–242) and §24 (lines 379–397) keep their current text.
- **What replaces it:** refinement rounds are review comments and commits on the open pull request (`CP-03`, FC-3); each gate crossing is one canonical pull request (`S18-22`). Neither changes §8, §12 or §24.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** none.
- **Final disposition:** `REJECTED` (D-01, D-02a).
#### CP-05 — Bounded work-package Git authority; commit-message and trailer rule (exact text)

> Approved in a **bounded form only** (D-02b) with the authorization-precision finding AP-1 applied (D-16). The narrow four-file grant used to publish the earlier drafts is not part of this change.

- **Sections:** §2 rule 2 (line 27); §11 (line 224); §16 lines 270–282; §21 lines 336–351 (the bullet at line 340).
- **Current problem:** authority "expires when the authorized stage is completed" (line 340), so every stage needs a new authorization (B-03). Neither §2 rule 2, §11 nor the §16 form addresses the standard `Co-Authored-By` attribution trailer, and the four-file grant used to publish the first draft did not state the commit-message authorization either (AP-1).
- **Proposed behavior:**
  1. **§16, existing form.** The wording stays. Add to the mandatory values: the attribution-trailer rule, stating that the standard `Co-Authored-By` trailer is **required**, **permitted** or **excluded**. Every grant, stage-scoped or work-package, states it.
  2. **§16, new work-package form.** Mission Control may authorize a work package in this form, with every bracketed value resolved:

     > Founder/Mission Control authorizes [AI NAME] for mission [MISSION-ID] to operate on repository [OWNER/REPOSITORY] under work package [WP-ID] covering [ORDERED STAGES OR STEPS], using [the repository's standard mission-branch convention `mission/[MISSION-ID]-[SHORT-SLUG]` | locked branch [LOCKED BRANCH NAME]], limited to [EXACT PATHS], permitted only to [LISTED GIT OPERATIONS], using [mission-scoped descriptive commit messages | the locked commit message [LOCKED COMMIT MESSAGE]], with the standard `Co-Authored-By` attribution trailer [required | permitted | excluded], until [END EVENT] or [END DATE], whichever comes first, stopping on any event in Section 21 or on revocation. This grants Git permission only. It grants no authority to approve, lock, authorize, execute, accept, close or merge.

  3. **Mandatory values for a work package:** AI name, Mission ID, repository, work package ID, the ordered stages or steps covered, the branch authorization, exact paths, the listed Git operations, the commit-message authorization, the trailer rule, and an end event and an end date. A missing or ambiguous value stops the AI (the existing §16 sentence). Unlisted operations are not permitted, there is no blanket scope and no `git add .`. **A work package may not include a step whose authority has not yet been merged to `main`.**
  4. **§2 rule 2 and §11 (line 224):** add the trailer rule beside the commit-message authorization.
  5. **§21:** the bullet at line 340 becomes "the authorized stage is completed or, for a work package, its named end event occurs or its end date passes;". Add "the authorized commit-message or trailer rule changes or cannot be followed;". Every other expiry bullet is unchanged, and each applies to a work package.
  6. One added sentence in §16: "A work-package authorization grants Git permission only. It never creates authority to approve, lock, authorize, execute, accept, close or merge, and it never permits a production or migration act."
- **Authority impact:** Git authority lasts longer per authorization but is bounded by named actor, paths, operations, commit-message and trailer rule, an end event and date, and every existing §21 event. Nothing about approval, lock, execution, acceptance, closure or merge authority changes, and canonical authority stays as decided (D-01, D-02a).
- **Security impact:** the window in which an AI may commit and push is wider than one stage. Mitigations: the ten mandatory elements above, an end date in every grant, no push to `main`, no self-approval, no self-merge, exact-file staging and unchanged secret checks. The trailer rule closes the precision gap behind AP-1.
- **Compatibility risk:** low mechanically. `AGENTS.md` (`AG-02`, `AG-04`) and `communication/README.md` (`CR-04`) mirror the same elements and must change in the same redline. `CLAUDE.md` and `CHATGPT.md` say only that authority expires on any governing state change and need no edit.
- **Final disposition:** `APPROVED` (D-02b, D-16).
#### CP-06 — Closure, archive and housekeeping

- **Sections:** §26 lines 428–537; §27 lines 539–630.
- **Current problem:** closure duties are defined here and in `communication/README.md` but not in Source 18; no explicit order relative to OLE disposition, feature-level completion evaluation and residual carry-forward.
- **Proposed behavior:** §26 references Source 18 Stage 24 as owner of the closure gate and states the order (acceptance merged and verified; closure record; OLE disposition; feature-level completion evaluation and residual carry-forward; archive). The Global Product Completion View is updated at Stage 23 acceptance (View §12), not here, and the archive preconditions add that the residual carry-forward is recorded. The wording that live files are a transient pointer during a Product Mission restates existing Protocol §27. Nothing in CP-06 depends on a rejected or deferred item.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-8, M-9). It depends on no rejected or deferred item.

### 3.6 Communication README — `communication/README.md`

#### CR-01 — Stale verification-protocol status

- **Sections:** "Independent Verification Efficiency Protocol", line 127.
- **Current problem:** "`SB-P-1.12` remains inactive until `SB-GOV-IV-1.0` closes cleanly." `SB-GOV-IV-1.0` closed via PR #603 (`f3d4869`).
- **Proposed behavior:** record that `SB-GOV-IV-1.0` closed via PR #603 and that `SB-P-1.12` remains not activated pending separate Mission Control activation.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** none.
- **Final disposition:** `CORRECTION` (Mission Control approval is sufficient).

#### CR-02 — OLE handoff and closure sequence

- **Sections:** "Mandatory OLE Learning Handoff Before Mission Closure", lines 133–162.
- **Current problem:** the rule lives only here (C-03); it does not say promotion review is non-blocking.
- **Proposed behavior:** point to Source 18 Stage 24 and gate 11 as the governing location; keep the two permitted states (handoff initiated, or explicit no-reusable-learning record) and the deferral of Stage 4B (Issue #590); state that promotion review does not block closure or activation of the next mission; align the closure sequence diagram to the Stage 24 order, adding the feature-level completion evaluation and residual carry-forward step after the OLE disposition.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-8).

#### CR-03 — Protocol version and live-file role (dependent on CP-01)

- **Sections:** "Historical Proposal Containment" line 83; "Live Communication Rules" lines 87–111.
- **Current problem:** line 83 names "Version 1.0" as current authority; nothing says live files are a pointer during a Product Mission.
- **Proposed behavior:** update the version reference; add one sentence that during a Product Mission the live pair points to the mission record where stage reports live.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` in principle for the version reference (D-07), following `CP-01`. The live-file sentence is `PROPOSED — CONFIRM AT REDLINE REVIEW` (M-9).


#### CR-04 — Git authorization elements mirror (exact text)

- **Sections:** "Controlled Git Operations and Founder Visibility", lines 279–293 (the paragraph at line 283).
- **Current problem:** line 283 mirrors the Protocol §16 and `AGENTS.md` list of required authorization elements. It has no attribution-trailer rule and no work-package form (AP-1, D-02b).
- **Proposed behavior:** add to line 283 "the attribution-trailer rule (the standard `Co-Authored-By` trailer is required, permitted or excluded)" and one sentence: "A work-package authorization additionally identifies the work package, the ordered stages or steps, the listed Git operations, and an end event and end date; it grants Git permission only." Line 285 ("Authority expires on any governing state change") is unchanged.
- **Authority impact:** as `CP-05`. **Security impact:** none beyond `CP-05`. **Compatibility risk:** low; it must change in the same redline as `CP-05`.
- **Final disposition:** `APPROVED` (D-02b, D-16).

### 3.7 Migration Authority Index — `docs/migration/README.md`

#### MG-01 — Default-deny execution rule (exact text) — REJECTED (D-06)

> **Not adopted.** The Founder retained separate migration mission IDs and the current default-deny execution authority. The Migration Execution Authorization (MX), its four added elements and the "workstream of a Product Mission" vehicle are removed from the amendment scope.

- **Sections:** none amended. `docs/migration/README.md` "Default-Deny Execution Rule" (lines 13–26) and "Status Taxonomy" (line 36) keep their current text.
- **Why nothing is needed:** the existing rule already requires "a new, current, explicit Founder- or Mission Control-authorized mission". A Product Mission never executes a migration, so it needs no carve-out, and `AGENTS.md`, `CLAUDE.md` and `CHATGPT.md` do not read as a stop condition for it (02 §11.3).
- **Authority impact:** none. **Security impact:** none; default-deny is untouched. **Compatibility risk:** none.
- **Final disposition:** `REJECTED` (D-06).
#### MG-02 — New section: MX record and lifecycle — REJECTED (D-06)

> **Not adopted**, with `MG-01`.

- **Sections:** none amended. The "Environment-Specific Historical Migrations" section (lines 75–81) is unchanged.
- **What survives as advice, not amendment:** the lessons of the SB-P-1.11 GC-40 incidents (an execution-method limitation, and a ledger bookkeeping error) are recorded in 02 §11.3 for whoever authorizes a future migration mission: state how a single migration is isolated and how the ledger is checked afterwards, use the repository wrapper and never a bare CLI, record a pre-execution target identity check, and require an independent post-execution check of the ledger and of effective grants and RLS. They are not amendment items and bind no mission until a migration mission adopts them.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** none.
- **Final disposition:** `REJECTED` (D-06).
#### MG-03 — SQL count and period-specific evidence rows (Mission Control confirmation needed)

- **Sections:** `supabase/migrations/**` family row line 55; "SQL History Boundary" line 85.
- **Current problem:** both state twelve files; 24 exist. Files 13 to 21 (nine SB-P-1.11 and SB-REL era files, versions dated 2026-08-06 to 2026-08-30) have no row; files 22 to 24 already have rows. The README does not enumerate files 1 to 12, so treating them as the twelve it counts is a presumption. The Founder retained MG-03 only as an **evidence-based factual reconciliation where verified** (D-06), and Mission Control requires precise period-specific evidence, with unknown production status kept `UNKNOWN`.
- **Proposed behavior:** correct the count to 24 as of the baseline and add the rows below in the README's own table format. Each states **only what a cited record shows**, with the date of the record, and carries the sentence "point-in-time; the current ledger was not re-verified". A ledger observation is evidence of state and never executable authority (default-deny is unchanged, D-06).

| Migration file(s) | Proposed classification | Execution or ledger evidence, by period | Executable now |
|---|---|---|---|
| 13 `20260806120000_…impl_1_stage1_schema`, 14 `20260806130000_…impl_1_stage2_functions`, 16 `20260808140000_…rr_3_tax_lifecycle_rls_remediation` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | **Report merged 2026-08-17 (PR #301; the observation is earlier or the same day):** the Stage 19 report (`communication/missions/SB-P-1.11/claude-code/19-independent-verification-report.md`) records production `supabase migration list --linked` output "identical for the first 16 migrations". **2026-08-28:** Mission Control GC-39 readiness review (`report1.181` §4, PR #409, read-only metadata) records production containing the SB-P-1.11 migrations through `20260808140000` | NO |
| 15 `20260808120000_…rr_2_category_select_grant` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | **2026-08-08:** `report1.67` (RR-2, PR #155) records `db push` applying it to production. The two ledger observations above also cover it. `report1.181` notes the remote **name** at this version differs from the test project's recorded name (metadata divergence; the version is present in both) | NO |
| 17 `20260810120000_…gc_1_catalog_import_support_schema` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | **2026-08-29, GC-40:** applied to production; history first recorded under a generated version `20260829085110` and reconciled by `GC-40A` (`report1.183`, `migration repair`, no DDL re-run) | NO |
| 18 `20260811090000_…gc_1_security_correction` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | **2026-08-29, GC-40:** `report1.185` (PASS) | NO |
| 19 `20260819120000_…gc_38r_parser_support_schema` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | **2026-08-29, GC-40:** `report1.186` (PASS). Also listed in the production ledger by the secondary 2026-09-13 retrospective (PR #558, §1.6) | NO |
| 20 `20260826120000_…gc_38r_parser_guard_ambiguity_fix` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | **2026-08-29, GC-40:** `report1.187` (PASS). Package-level independent read-only reconciliation: `report1.182` (2026-08-29): all four versions present, generated version absent. Compiled in `docs/implementation/SB-P-1.11/evidence/gc40-production-migration-reconciliation.md` (2026-08-29). Also listed in the production ledger by the secondary 2026-09-13 retrospective | NO |
| 21 `20260830120000_…gate2a_c1_inventory_anon_privilege_hardening` | **Mission Control decision needed.** `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` only if Mission Control accepts the secondary evidence; otherwise `DEFERRED OR PENDING — NON-EXECUTABLE`. Neither taxonomy value fits "reported, unverified" exactly. **Operative statement in either case: `PRODUCTION STATUS UNVERIFIED`** | **No primary application, authorization or raw ledger-output record was found.** The file's own header describes preparation and test validation only, and it post-dates GC-40. **Two secondary, documentation-only records dated 2026-09-13 exist:** the Supabase Backend Architecture retrospective (PR #558, §1.6) says "the production remote migration ledger visibly includes versions through" a list containing this version (and versions 19, 20 and the three 2026-09-02 files), and the Security & Permissions retrospective (PR #560, lines 144 to 153) reports a read-only production inspection in which `anon` is no longer a grantee on the three Inventory tables while it remains on `businesses`, `transactions` and `transaction_correction_events`. Neither cites raw ledger output or the authorizing mission | NO |

  - **File 11** (`20260724170000_6a0f8a74-…`) is not given a row (it falls in the aggregate files 1 to 12). Two records differ: the 2026-08-17 Stage 19 ledger observation covers it, while the post-completion continuity record (`SB-DOC-1.10-1.11-CONTINUITY-1.0`, 2026-09-03, §17) states that no source reviewed under its audit scope confirms whether it is on current production. **Its production status is recorded as `UNKNOWN` until Mission Control reconciles the two** (C-20). Nothing is inferred either way.
  - Every dated row is a **point-in-time** observation. The primary evidence periods are 2026-08-08, 2026-08-17, 2026-08-28 and 2026-08-29. The only later records are the two secondary, documentation-only retrospectives of 2026-09-13 (PR #558 and PR #560), which bear on files 19 to 21. A current read-only ledger comparison for production and test would settle currency but needs its own explicit authorization and was not performed.
- **Authority impact:** none; default-deny already covers unclassified files, and no row creates executable authority. **Security impact:** removes a misleading scope count and replaces an inference risk with cited evidence. **Compatibility risk:** none.
- **Final disposition:** `CORRECTION`. Mission Control decides whether to accept these records as the basis for the status text, which taxonomy value applies to file 21 given that only secondary evidence reports it applied, and the file 11 `UNKNOWN` treatment. It depends on no rejected item and creates no executable authority.

### 3.8 AGENTS.md — `AGENTS.md`

#### AG-01 — Migration authority wording (exact text) — REJECTED (D-06)

> **Not adopted.** No `AGENTS.md` migration wording changes.

- **Sections:** none amended. Line 29 keeps "execution requires a new explicit mission naming the exact package, environment, actor, scope, safeguards, and reporting workflow. Ambiguity requires a stop report."
- **Why:** the change existed only to accommodate an MX, which is not adopted (D-06). D-08 (necessary repository-instruction wording) therefore covers the Git wording (`AG-02`, `AG-04`) and the intake pointer (`AG-03`) and no migration wording.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** none.
- **Final disposition:** `REJECTED` (D-06).
#### AG-02 — Git authority expiry (exact text)

- **Sections:** "Git Rules", line 203.
- **Current problem:** "Authority expires when the authorized stage completes or mission, branch, …" mirrors Protocol §21 and would contradict the bounded work-package grant.
- **Proposed behavior:** "Authority expires when the authorized stage completes or, for a work package, its named end event occurs or its end date passes, or when mission, branch, scope, commit message, attribution trailer, repository, authentication, validation, conflict, fast-forward, or working-tree state changes. Resumption requires renewed authorization and state verification."
- **Authority impact:** as `CP-05`. **Security impact:** as `CP-05`. **Compatibility risk:** low; it must change in the same redline as `CP-05`. `CLAUDE.md` and `CHATGPT.md` say only "expires on any governing state change" and are unchanged.
- **Final disposition:** `APPROVED` (D-02b, D-16).

#### AG-03 — Short intake pointer (exact text)

- **Sections:** the intake paragraph at line 27.
- **Current problem:** the universal instruction file reaches the Canonical Source Set but not the Product Mission institutional intake, so an AI following `AGENTS.md` alone would not learn of it.
- **Proposed behavior:** add one short pointer at the end of line 27: "For a Product Mission, also follow the current Source 18 lifecycle (`merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`): complete the Institutional Learning Intake Record (§3.1, covering both the Phase 1 institutional-memory guide and current validated OLE learning) and the mission's Feature Coverage and Product Truth Traceability Matrix (§3.2)." It restates rules; it adds none, and it contains no migration wording (D-08, D-06).
- **Inspection result (D-08).** `AGENTS.md`, `CLAUDE.md` and `CHATGPT.md` were inspected for stale instructions or contradictions. `AGENTS.md` has two, both handled by `AG-02` and `AG-04` (the stage-scoped Git expiry at line 203 and the missing trailer rule at lines 171–180). `CLAUDE.md` and `CHATGPT.md` have none: their Git wording defers to `AGENTS.md` and the Protocol, and their migration sentence matches the retained migration README.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Final disposition:** `APPROVED` (D-08, L-01).

#### AG-04 — Git authorization elements: commit-message and trailer rule, listed operations (exact text)

- **Sections:** "Git Rules", lines 171–180 (the identification list and the form-of-authorization paragraph) and line 186 (the permitted operations).
- **Current problem:** the list requires the commit-message authorization but not the attribution-trailer rule, and has no work-package form (AP-1, D-02b).
- **Proposed behavior:** add to the list at lines 171–178: "the attribution-trailer rule: the standard `Co-Authored-By` trailer is required, permitted or excluded;". Add one paragraph after line 180: "A Mission Control work-package authorization additionally identifies the work package, the ordered stages or steps it covers, the listed Git operations it permits, and an end event and an end date, and is otherwise bound by every rule in this section. It grants Git permission only and never authority to approve, lock, authorize, execute, accept, close or merge." Line 186 gains "under a work package, only the operations the authorization lists".
- **Authority impact:** as `CP-05`. **Security impact:** the trailer and operation lists remove two ambiguities. **Compatibility risk:** low; it must change in the same redline as `CP-05` and `CR-04`.
- **Final disposition:** `APPROVED` (D-02b, D-16, D-08).
### 3.9 Canonical Source Set — `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`

#### SS-01 — Operational sources, intake pointers and the register (verified against the current repository)

- **Sections:** "Exact 20-File Register" row 18; "Active GitHub Operational Sources for AI Participants" table, lines 72–81; "Codex / ChatGPT Intake" lines 85–92; "Claude Code Intake" lines 94–101; "Change Control" lines 58–66.
- **Current problem (verified at `main` `953496660a0939ec89608505dc61070a69faddf1`):**
  1. The operational table omits the Independent Verification Efficiency Protocol and the two institutional-learning sources, and neither intake list reaches them (C-12), so the Founder's dual-intake rule has no operational entry point.
  2. **The register is already stale for Source 18.** Row 18 records Version 1.0, 31,683 bytes and SHA-256 `8d0865391d4709bf8602d943939aade7b3d8f267e7cd5d60966122f07bb8b4c8`. The file on `main` is Version 1.1, 34,986 bytes, SHA-256 `fafc2f96bbaa40c4c91b55ffa261adaa12a5597679ee6d90b5ef3aa86800961f`. PR #598 and PR #599 amended it without refreshing the register, and the register's baseline is still commit `efee4fa0a4db3cc69907d97f1da5ecb3dfe72d1e`. The Source Set states that a later approved change must refresh the register and identify its new Git baseline.
  3. **Project HQ.** The Source Set defines the Project HQ package as a synchronized reference copy and requires an HQ refresh to record the source commit and date. The only synchronization acceptance recorded in the repository is `SB-GOV-HOUSEKEEPING-1.5` on 2026-08-02 (`mission-control/mission_memory.md` line 173), which is before Source 18 changed on 2026-09-18. **Whether the external HQ package is current cannot be verified from the repository.**
  4. `merge/active/README.md` lists Source 18 by description only, with no version string, so a version change needs no edit there.
- **Proposed behavior:**
  - Add operational-table rows for the Independent Verification Efficiency Protocol and for Product Mission institutional intake (the Phase 1 institutional-memory guide and `organizational-learning/promotions/**`; dual intake until Mission Control verifies the backfill complete).
  - Add one short pointer to both intake lists, matching `AG-03`: "For a Product Mission, also follow the current Source 18 lifecycle: complete the Institutional Learning Intake Record (dual intake of the Phase 1 institutional-memory guide and current validated OLE learning) and the mission's Feature Coverage and Product Truth Traceability Matrix."
  - **Register refresh (a dependency, not a free choice).** Because the redline amends Source 18, one of the 20 registered files, row 18 and the baseline commit must be refreshed from the **final** merged text, so it is the last step of the redline and cannot be computed earlier. Alternatively Mission Control records a decision that the register refresh is done by a separate controlled mission, and states plainly that the register is stale until then. Neither is chosen here.
  - **Project HQ synchronization** is outside the repository. Mission Control decides whether and when it happens; Claude Code cannot perform it or claim it.
- **Authority impact:** none; an index of existing authority. **Security impact:** none. **Compatibility risk:** low for the rows and pointers; medium for the register, which is already stale and would otherwise widen.
- **Final disposition:** `APPROVED` for the operational rows and the short pointers (L-01, D-08), with the register refresh and the Project HQ question left as **`PROPOSED — CONFIRM AT REDLINE REVIEW`** decisions for Mission Control.

### 3.10 Independent Verification Efficiency Protocol — `communication/Independent_Verification_Efficiency_Protocol.md`

#### IVP-01 — Coverage and drift verification; conforming references

- **Sections:** line 22 and line 30 ("Source 18 v1.1"); §3 Verification pyramid lines 36–49; §4 lines 51–65 (the paragraph at line 63); §5 Builder Verification Packet table lines 71–83; §6 lines 89–101; §7 entry gate lines 105–109; §8 lines 113–120 (step 2); §9 lines 124–130 (line 126 "Under current Source 18 Stage 20…"); §13 lines 152–161; §15 risk table lines 179–188.
- **Current problem:** the protocol governs how Stage 19 is performed but has no method for coverage or drift. Step 2 of §8 maps "every locked checklist obligation" to A, B or C, which covers what the checklist contains and cannot detect a requirement that never reached the checklist. The packet (§5) carries no requirement-level status. Without a stated method and budget treatment, coverage checks would be treated as optional under "Codex Not Required".
- **Proposed behavior:** §3 adds a pyramid row for Product Truth coverage (FCTM owned by the Stage 2 owner and Mission Control; verifier performs Class C coverage and movement checks and Class A drift probes on material rows). §4 adds to line 63: the Class C coverage baseline is performed for every Product Mission whatever the Codex classification; classification governs only Class A drift effort. §5 adds a "Coverage" packet row: FCTM path and baseline SHA, per-row builder status, draft Contract Reconciliation, and every change to a disposition, classification or assignment since lock with its Founder Decision ID. §6 adds coverage examples: section-inventory comparison and set-difference checks (Class C), drift probes (Class A). §7 adds to the entry gate: locked FCTM and per-row builder statuses present, else `NOT READY`. §8 step 2 becomes "map every locked checklist obligation **and every FCTM row**". §9 correction packet lists affected rows; a correction never removes or defers a row. §13 maps the coverage findings (`SILENT OMISSION`, `UNAUTHORIZED DEFERRAL`, `UNAUTHORIZED PULL-FORWARD`, `MISCLASSIFIED`, `DRIFT`, `ORPHAN`) onto the existing results and states that a row without evidence is not demonstrated. §15 adds the risk "matrix authored by the verifier" with the control in 02 §16.7. Lines 22, 30 and 126 conform to Source 18 v1.2 and the renamed Stage 20. **§9 also states the mandatory human retest (D-04):** the default sequence gains a human runtime retest after every correction, before correction acceptance and before re-verification closes, scoped to the affected behaviour and regression surface, recorded with the actor, target, scenarios, expected and actual results and evidence, with no automated-only waiver; the sentence "Scope human retest to affected behaviour under Mission Control's direction" is conformed to say the retest is required and only its scope is directed. **No change** to Evidence Class definitions, budget classes, result vocabulary or the mandatory status of Stage 19.
- **Version proposal (explicit, for Mission Control and the Founder; not applied silently).** The protocol is `Version: 1.0`, Protocol ID `SB-IV-1.0`, Founder approved on 2026-09-18 and activated on PR #598, and it has no change log. D-07 approved no number for it. Assessment: `IVP-01` adds a verification obligation, a packet row, an entry-gate condition and a mandatory retest step, so it is a behavioural amendment of a Founder-approved active protocol, not editorial. **Proposal: Version 1.1**, with (a) the header `Version` line changed and an `Amended under` line naming `SB-GOV-PRODUCT-EXEC-1.0`; (b) a short change log recording 1.0 (approved and activated 2026-09-18, PR #598) and 1.1; (c) the existing approval lines kept as the record of 1.0, and the approval of 1.1 recorded only by the redline's approval record, so the amended text is never shown as approved before it is. Alternative not recommended: keep 1.0 with a dated amendment note, which leaves the active text and its approved version indistinguishable. The Protocol ID stays `SB-IV-1.0`.
- **Authority impact:** none; the verifier's remit widens, its authority does not. **Security impact:** positive: permission, isolation and denial requirements are checked for presence, not only for correctness once present. **Compatibility risk:** medium: verifier effort increases and budgets must reflect it; `SB-IV-1.0` was activated on PR #598 and this edits an active Founder-approved protocol.
- **Final disposition:** `APPROVED` for the coverage, drift and retest content (D-11, D-04). The version number and change log are **`PROPOSED — CONFIRM AT REDLINE REVIEW`** (Version 1.1 as above), because D-07 approved no number for this protocol.

### 3.11 Global Product Completion View — `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md`

**Why the View is amended.** The View already says Mission Control updates it only from verified evidence and accepted mission state, and that builder-only code, green CI, deployment and merged PRs do not prove completion (§2 rules 4 and 7); it has a Status Vocabulary (§4) and an Update Protocol (§12). Those rules are sound, and the two items below are the narrow gaps that stop them enforcing the Founder's requirement that the view be updated only from demonstrated completion: it works at contract level, has no requirement-level residual accounting, sets no criterion for its most upgrade-sensitive state, and contradicts itself on update timing.

#### RG-01 — Update Protocol: evidence-based updates, partial progress and residual accounting

- **Sections:** §12 lines 273–309 (At Mission Initiation lines 275–285; During Mission Execution 287–289; At Mission Acceptance 291–301; At Mission Closure 303–307); §7 line 193.
- **Current problem:** §12 lists the contract-level fields to update at acceptance (advancing mission, implementation state, acceptance state, dependencies, blockers, next advancement) but not what evidence they must be derived from, and it holds "Exact blocker / gap" as free prose, so a requirement a mission did not demonstrate can disappear from the row. §7 line 193 says "Future Mission Control closure shall update the relevant rows after formal acceptance" while §12 says the update happens "At Mission Acceptance" (C-14). §12 At Mission Initiation asks for the intended delta but not for the requirement-level accounting the mission will carry.
- **Proposed behavior:**
  - **At Initiation:** also record the mission's FCTM path and baseline and the rows inherited as residual from earlier missions for each contract advanced.
  - **During Execution:** unchanged; add that partial demonstration is recorded as progress, not as completion.
  - **At Acceptance:** update only from the accepted Contract Reconciliation, counting only `DEMONSTRATED` and `DEMONSTRATED — CARRIED FORWARD` rows. Derive "Exact blocker / gap", "Dependencies remaining", "Not authorized now" and "Next advancement" from rows that are not `DEMONSTRATED` plus `ASSIGNED TO LATER MISSION` rows, and cite the reconciliation's path in the row. Never upgrade from a builder report, merged PR, green CI, deployment, or acceptance with follow-up on a non-demonstrated row. **Partial progress (D-15, Option B):** a partial mission records the fact fields (latest verified advancing mission, dependencies closed and remaining, residual requirements, blockers, next advancement) and, **only where the accepted reconciliation shows that the destination label's explicit evidence criteria are met**, moves the feature between the existing **non-terminal** implementation states. The Founder's illustration is `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` to `IMPLEMENTED BUT INCOMPLETE`; it is not an automatic transition. **Every move cites the relevant FCTM row IDs and their `DEMONSTRATED` or carried-forward status, and every undemonstrated row stays listed.** Unknown stays `CANNOT CURRENTLY VERIFY`, and a verified divergence stays visible and is not progress. Neither the move nor mission acceptance changes a build commitment, a commercial classification or a mission assignment. **It can never produce a mature-feature completion upgrade** (`IMPLEMENTED + SUFFICIENTLY ALIGNED`, or an acceptance state other than `NOT YET ACCEPTED AS MATURE FEATURE` while any applicable Build Now obligation or the contract completion gate is unmet). No new status label is authorized. Record a downgrade when later drift is found. Mission Control applies or approves the edit and the builder does not.
  - **At Closure:** keep the existing sentence (a mission can be formally completed while the feature remains `IMPLEMENTED BUT INCOMPLETE`) and add that the feature-level evaluation lists the remaining Build Now requirements per contract.
  - **§7 line 193:** replace with a pointer stating rows are updated at acceptance (§12) and evaluated at closure.
- **Authority impact:** Mission Control keeps ownership of the view; its discretion to upgrade a row is narrowed to demonstrated completion. Product Truth, the 25 contracts and classifications are untouched. Founder decision ownership of classification and deferral is unchanged.
- **Security impact:** none directly; reduces the risk of overclaiming that a permission, isolation or denial requirement is met.
- **Compatibility risk:** low. No current row changes state on adoption; only future updates are constrained. Existing rows have no requirement-level residual list, so the first mission to touch a contract builds it from the contract text. Other documents citing the "Register" are unaffected.
- **Final disposition:** `APPROVED` (D-12, D-15).

#### RG-02 — Status vocabulary: criteria for the implementation states (no rename)

- **Sections:** §2 operational consequences lines 40–48 (add a consequence 8); §4.4 Implementation State lines 94–102; §4.5 Acceptance State lines 104–110.
- **Current problem:** `IMPLEMENTED + SUFFICIENTLY ALIGNED` (line 96) has no criterion, so it can be assigned on judgement; the other implementation values are listed without conditions; §4.5 says a mature feature must complete "the governed Product Mission lifecycle and Mission Control acceptance" but not that every applicable Build Now requirement of the contract be demonstrated.
- **Proposed behavior:** §2 adds consequence 8: partial demonstration of a contract records progress and never produces a mature-feature completion upgrade. §4.4 **keeps all seven status names** and states their criteria: `IMPLEMENTED + SUFFICIENTLY ALIGNED` only when every applicable Build Now requirement of the contract is `DEMONSTRATED` across the advancing missions, plus the contract's own completion gate and the required runtime and independent verification; `IMPLEMENTED BUT INCOMPLETE` where some, not all, are demonstrated; `IMPLEMENTED BUT MATERIALLY DIVERGENT` where a verified finding shows drift from approved behaviour (divergence stays visible and is never progress); `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` where a foundation slice is demonstrated and the feature workflow is not; `NOT IMPLEMENTED` where no applicable requirement is demonstrated; `CANNOT CURRENTLY VERIFY` where evidence cannot establish the state (unknown stays unknown); `HISTORICAL / PLACEHOLDER ONLY` unchanged. §4.5 states that the default acceptance state changes only when the contract's completion gate is met and Mission Control accepts. **A partial mission may move a feature between the existing non-terminal implementation values on evidence (D-15, Option B), and never to `IMPLEMENTED + SUFFICIENTLY ALIGNED` unless the criterion above is met in full.**
- **Authority impact:** as `RG-01`. **Security impact:** as `RG-01`. **Compatibility risk:** low; the seven existing values are kept and none is renamed.
- **Final disposition:** `APPROVED` (D-12, D-15).

#### RG-03 — Concise evidence-reference column (D-12)

- **Sections:** §5 table header (line 116); §1 (line 21).
- **Current problem:** the View cannot itself answer "What evidence supports that implementation state?" (C-16). `RG-01` derives "Exact blocker / gap" from the Contract Reconciliation, but the row does not point at it.
- **Proposed behavior:** add **one concise "Evidence reference" column** to the §5 table. Each populated cell holds concise pointers to the accepted mission, to its FCTM and Contract Reconciliation (path and row range), and to the verification evidence, and, for a state change, to the acceptance record. The View stays Founder-readable: it summarizes pointers and progress and never reproduces requirement rows. The detailed evidence stays in the FCTM and is never copied into the View. Every existing status name, the 25 rows and their current values are unchanged. Cells for rows no mission has advanced read "None: no advancing mission". **No rename and no terminology alias.** The "Register"/"View" naming observation (C-18) stays an observation.
- **Authority impact:** none; Mission Control keeps ownership. **Security impact:** none. **Compatibility risk:** low. Adding a column changes the table's width, and nothing in the repository parses it `[R]`.
- **Final disposition:** `APPROVED` (D-12).

---

## 4. Items not adopted, and the former conditional items

The three former conditional items that the Founder rejected are recorded here. The five rejected items in §3 (`S18-18`, `CP-04`, `MG-01`, `MG-02`, `AG-01`) are recorded in place.

| ID | File and sections | Disposition | Decision | Reason and what replaces it |
|---|---|---|---|---|
| `CL-01` | `CLAUDE.md` line 35 | **REJECTED** | D-06, D-08 | It only de-duplicated migration wording that existed to support `AG-01`, which is not adopted. `CLAUDE.md` keeps its migration sentence |
| `CG-01` | `CHATGPT.md` line 35 | **REJECTED** | D-06, D-08 | Mirror of `CL-01` |
| `PG-01` | Phase 1 institutional-memory guide: header line 4 and §16 | **REJECTED** | D-09 | The guide is left unchanged. The Stage 2 delta already catches the header status and the stale CI statement, so leaving it as it is is safe |

**Deferred and not implemented (no amendment item exists):**

| Matter | Disposition | Where recorded |
|---|---|---|
| Rewording of mandatory gate 2 and the integrated Stage 6 to 7 mode (`S18-09`, `PF-07` parts) | **DEFERRED**; gate 2 unchanged | `S18-09`, 02 §14.2 |
| Verified-code-only merge rule (D-03) | **NOT ADOPTED — separate proposal** needing later explicit approval | 02 §19.1 |
| Branch-protection hardening (D-10) | **DEFERRED**; the enforcement gap stays visible | 02 §18.7, §19.2; 01 §3.4 |

## 5. NO CHANGE — reasons that matter

- **Sources 12 and 17.** No contradiction. Source 12 §64 (Founder approval before deployment) and §67 (production migration requires explicit authorization) and Source 17 §A6.3 are compatible with the design and are relied on by it. Source 17's metadata (line 13) uses "Source 18" for a superseded Project Continuity file; the number collision is an observation, not a contradiction, and amending it would be stylistic.
- **Migration authority.** Not amended (D-06). `docs/migration/README.md` lines 13–26 stay exactly as they are, and `AGENTS.md`, `CLAUDE.md` and `CHATGPT.md` need no migration wording. Only the factual rows of `MG-03` change.
- **Branch protection and every repository setting.** No item mutates them. Hardening is deferred (D-10). The live state is presented in 01 §3.4 and 02 §18.7, and the gap is recorded in 02 §19.2.
- **CI workflows and the assurance baseline.** Already describe Fast Gate and Full Assurance. Only wording in the Build Plan and lifecycle changes.
- **EOS workflows.** Their "Stage 10 — GitHub Actions" and "Stage 11" numbering is unrelated to Source 18 stages, and they contain no stage-scoped expiry sentence.
- **The 25 feature contracts, the Feature Library README and the Coverage Matrix.** The FCTM is derived from them and must not change them. If the FCTM work finds an ambiguity or conflict inside a contract, the route is a Founder decision (T2 or T8), not a contract edit by this mission.
- **`CLAUDE.md` and `CHATGPT.md`.** Neither assigns Stage 2 to 4, and their Git wording only points to `AGENTS.md` and the Protocol and says authority expires on any governing state change, which stays true under the bounded work-package form.
- **The Phase 1 institutional-memory guide.** Unchanged (D-09).
- **The View's 25 rows and their values.** Not edited. `RG-01`, `RG-02` and `RG-03` change the update protocol, the vocabulary criteria and one column only; no row is upgraded or downgraded by adopting them.

## 6. Dependency-consistent packages and activation

The packages are units of approval and verification. They are ordered by dependency, and each keeps every document internally consistent.

| Package | Contents | Decisions | Depends on |
|---|---|---|---|
| **A — Lifecycle, Product Truth coverage and operating model** | `S18-02` to `S18-17`, `S18-19` to `S18-22`; `PF-02` to `PF-10`; `IE-02` to `IE-12`; `BP-01`, `BP-03`, `BP-05` to `BP-09`; `CP-02`, `CP-03`, `CP-06`; `CR-02`, `CR-03` (live-file sentence); `SS-01`; `AG-03`; `IVP-01`; `RG-01` to `RG-03` | D-04, D-05, D-08 (pointers), D-11, D-12, D-13, D-14, D-15, L-01; proposals M-1 to M-10 | Nothing in B or C. No rejected or deferred item |
| **B — Bounded work-package Git authority and the commit-message and trailer rule** | `CP-05`, `AG-02`, `AG-04`, `CR-04` | D-02b, D-16, D-08 (Git wording) | Nothing in A or C. **All-or-nothing:** the four items mirror one another |
| **C — Corrections and version numbers** | **C1 corrections:** `S18-01` (v1.1 row, closing line), `S18-20` (status string), `PF-01` (1.3 row), `IE-01` (change-log creation), `CR-01`, `MG-03`, `BP-02`, `BP-04`. **C2 versions:** `S18-01` (1.2), `PF-01` (1.4), `IE-01` (1.2), `CP-01` (1.1), `CR-03` (version reference) | C1 by Mission Control (Build Plan corrections reviewed by the Founder); C2 by D-07 | C1 has none. **C2 depends on A and B:** a version bump lands only with whatever amends that file |

**Dependency groups inside package A** (each ships whole, with every mirror file of the group):

| Group | Items | Why it cannot be split |
|---|---|---|
| Coverage | `S18-21`, `PF-10`, `IE-11`, `IE-12`, `BP-05`, `BP-09`, `IVP-01`, `RG-01`, `RG-02`, `RG-03`, and the FCTM enforcement points in `S18-05` to `S18-17`, `PF-02`, `PF-04`, `PF-05`, `PF-07` to `PF-09`, `IE-02`, `IE-06`, `IE-08` to `IE-10` (checklist: §9) | A requirement enforced in some documents and silent in others is the drift the Founder is guarding against |
| Definition Actor | `S18-03`, `S18-06`, `S18-07`, `S18-08`, `PF-03`, `PF-04`, `PF-05`, the Appendix A row in `S18-20` | Source 18 and the Elaboration template must name the same Stage 2 to 4 owner (Source 18 §2: a template conflict is not to be resolved silently) |
| Dual intake | `S18-02`, `PF-04`, `CP-02`, `SS-01`, `AG-03`, `BP-06`, `BP-07` | The rule must appear verbatim wherever it is placed, and each intake list must point to it |
| Fail-closed | `S18-22`, `CP-03` | The canonical-crossing model and the comment-and-commit refinement rule are one model |
| Retest | `S18-15`, `IE-08`, `IVP-01` (the correction packet) | The mandatory human retest must read the same in each document |
| View | `S18-16`, `RG-01`, `RG-02`, `RG-03`, `IE-05`, `IE-09` | Update timing, the D-15 Option B rule and the evidence column must agree |

`S18-01`, `S18-20`, `PF-01`, `IE-01` and `CR-03` are split across packages as the table shows: the behaviour-bearing part in A or B, the correction in C1, the version number in C2.

**Cross-package facts.**

- **Package B is independent of A.** If the Founder wants the bounded Git grant sooner, it can ship first.
- **The coverage group does not depend on B, on the Git model or on any migration item.** It works at the existing stage cadence, because canonical authority is unchanged.
- **No retained item depends on a rejected or deferred item.** The three matters the Founder set aside (gate 2, D-03, D-10) leave no dangling cross-reference: each cross-reference to them in §3 states the current rule.
- **Version numbers (D-07):** Source 18 v1.2, Elaboration template `SB-P-PFEW-1.4`, Implementation and Evidence template `SB-P-IVEW-1.2`, Communication and Handover Protocol v1.1. A number is applied only to a file that is actually amended. The Independent Verification Efficiency Protocol is currently Version 1.0 and D-07 approved no number for it. **Version 1.1 is proposed explicitly in `IVP-01`** with a change log and with the v1.0 approval record kept; it is not applied silently and needs Mission Control and Founder confirmation.

**Activation.** Applying all approved items in one governance change is the safest way to keep every document from being active in a contradictory state (Source 18 §2). Mission Control may instead sequence C1, then A, then B (in either order), then C2, provided each intermediate state respects the dependency groups above. Human merge only. `SB-P-1.12` requires its own activation after this mission closes.

## 7. Independent verification plan for the amendment package

The redline's author may not verify it. This specification was authored by Claude Code, so Claude Code is excluded as verifier of the redline and of this specification. Under `SB-IV-1.0` §4 a governance or operating-protocol change is not routine documentation.

- **Classification for Mission Control to record:** **Package B** is authority-related (Git permission) so **Codex Required**. **Package A** fits **Codex Spot Check** at minimum, and Mission Control may raise the coverage and retest groups to **Codex Required** because they edit the verification protocol itself and correlated assumptions are a real risk when the protocol's author is a same-provider actor. **Package C** fits **Codex Spot Check**. If Codex is unavailable, Mission Control may appoint another eligible actor with a documented separation assessment (Source 18 §4.9).
- **Sequence:** (1) the redline author runs the mechanical checks and records the results; (2) an appointed non-author verifier repeats the mechanical checks and performs the review checks; (3) Mission Control reviews; (4) a human merges. Nothing merges before step 3.
- **Checks:**
  1. Markdown Quality Gate on every amended file, and functional internal links.
  2. **Stale-term sweep** across the amended set. Must be absent: `Class 2`, `Class 1` (as a record class), `G1` to `G5` as merge gates, `PR-1` to `PR-6`, `DG-1`, `DG-2`, `five-gate`, `Decision Provenance`, `Migration Execution Authorization`, `MX`, `builder-prompt.md`, `builder-completion-report.md`, `HUMAN RETEST NOT REQUIRED`, `Register update` at Stage 24, `four-part Truth Pack`, and the free-form `Truth Table` (superseded by the FCTM). Must be resolved or deliberately retained: `Founder Lovable Brief` (kept as the conditional Stage 14 name), `Corrective Mission`, `SB-P-PFEW-1.3`, `Source 18 v1.1` where it should now read v1.2, `authorized stage is completed` (rewritten by `CP-05`), and `Twelve` or `12` next to SQL (rewritten by `MG-03`). **Must be present and unrenamed** (D-05): `lovable-build-prompt.md`, `lovable-build-completion-report.md`.
  3. **Gate-equivalence review** using the table below.
  4. **Dual intake.** The exact string appears verbatim wherever it is placed, and no amended file states or implies the historical OLE backfill is complete.
  5. **Authority-diff review** of every Git and migration change, including the questions "can any actor now authorize itself, merge, or execute in production?" and "does any Git permission create approval, lock, authorization, execution, acceptance, closure or merge authority?" (a Class A reasoning check, because static evidence alone is insufficient).
  6. **Hard-boundary checklist.** Nothing in the diff touches Product Truth, the nine-mission sequence, branch protection, Stage 19's mandatory status, human merge, production controls, the historical Phase 1 guide, `docs/migration/README.md` default-deny text, or Sources 01, 11, 12, 17 and the contracts.
  7. **Coverage consistency.** The eight dispositions, the ten Contract Reconciliation statuses, the eight trigger names (T1 to T8) and the classification lock are worded identically wherever they appear (Source 18 §3.2, Elaboration template §7.4, Implementation template §5, §8 and §9, Build Plan §13, the verification protocol and the View). Each Founder refinement has an enforcement point in each named document, using the §9 table as the checklist.
  8. **No follow-up escape.** No amended document allows `ACCEPTED WITH FOLLOW-UP` or `ACCEPTED WITH NON-BLOCKING FOLLOW-UP` to cover a non-demonstrated `IN SCOPE` row without a recorded Founder decision.
  9. **View.** All seven existing implementation-state names and the acceptance default are unchanged; the criteria and the D-15 Option B rule read identically in `S18-16`, `RG-01`, `RG-02`, `IE-05` and `IE-09`; no wording allows a mature-feature upgrade from a partial mission; the evidence column points to the Contract Reconciliation and copies no evidence; Source 18 Stage 23 and Stage 24, the closure sequence in `communication/README.md` and Protocol §26, and View §7 and §12 all place the update at acceptance and the feature-level evaluation at closure.
  10. **Decisions honoured.** The redline contains none of the rejected items and none of the deferred items: no Class 2 or five-gate text, no MX, no generic builder filenames, no retest exemption, no gate 2 rewording, no verified-code-only rule, no branch-protection change, no change to the historical guide, no migration wording change to `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md` or the migration README's default-deny text.
  11. **Definition Actor.** No amended document names Codex as the mandatory or default owner of Stage 2, Stage 3 preparation or Stage 4, or as the default Founder interviewer; every remaining "Codex" reference is a verifier, classification, review or research reference. The role-separation rule appears wherever the Definition Actor is defined.
  12. **Fail-closed.** No amended document describes a committed branch record as authority; the six FC-6 items are never described as branch-effective; the "prepared together / must wait" table stays inside the current gate order (gates 2, 3, 4, 5 and 8 are not bypassed); each crossing is one canonical human-merged pull request.
  13. **Git authority.** `CP-05`, `AG-02`, `AG-04` and `CR-04` carry the same ten mandatory elements and the same trailer-rule and expiry wording; the work-package form cannot include a step whose authority is not yet merged; no text permits a push to `main`, a self-merge or a self-approval; `CLAUDE.md` and `CHATGPT.md` are unchanged.
  14. **Human retest.** Source 18 Stage 20, the Implementation template, `SB-IV-1.0` §9 and the Elaboration template make the human retest mandatory after every correction, finding-scoped, with the five recorded fields and no automated-only waiver; no exemption status exists.
  15. **Vocabulary.** `BUILD LATER` and `ASSIGNED TO LATER MISSION` are defined identically wherever they appear and never used interchangeably; `ALREADY DEMONSTRATED` is never treated as `PASS`.
  16. **Migration.** No amended document marks a migration production-applied without a cited record, or infers executable authority from a ledger; every migration-status row cites its record and says it is point-in-time; the production default-deny fields are unchanged.
  17. **Versions.** Only the four approved numbers are applied, each only to a file that is actually amended; Mission Control has recorded a decision on the proposed Version 1.1 of the Independent Verification Efficiency Protocol and its change log.
  18. **Protection.** No item in any package mutates branch protection, rulesets or any repository setting.
- **After merge:** Mission Control verifies canonical `main`; this mission then follows its own completion condition (OLE disposition, archive, formal closure).

**Gate equivalence (Source 18 §9, current versus proposed)**

| Current gate | Proposed | Equivalent? |
|---|---|---|
| 1 Sections 1–19 approved before Builder Review | Unchanged | Yes |
| 2 Builder Review approved before Engineering Review | **Unchanged.** The rewording is deferred | Yes |
| 3 Blueprint lock before EIS creation | Unchanged | Yes |
| 4 EIS lock before package | Unchanged | Yes |
| 5 Package approval before implementation authorization | Recorded together; authorization still required before implementation; **and no authorization while an `IN SCOPE` row is unmapped** | Yes; stronger |
| 6 Builder report before runtime-review closure | Unchanged | Yes |
| 7 Runtime findings and review before verification | Unchanged | Yes |
| 8 Independent verification before Evidence and Completion Package | Unchanged; **verification includes material coverage and drift** | Yes; stronger |
| 9 Acceptance before documentation closure | Unchanged; **acceptance requires every `IN SCOPE` row `DEMONSTRATED` or covered by a recorded Founder decision** | Yes; stronger |
| — | 10 Intake record **and complete FCTM** approved before Blueprint approval | New |
| — | 11 OLE disposition before formal closure | New (already required by `communication/README.md`) |

## 8. Traceability

| Design outcome | Amendment items |
|---|---|
| DO-01 Stage 2 truth and delta | S18-06, PF-04 |
| DO-02 Conditional Founder gate | S18-07, PF-05 |
| DO-03 Blueprint assembly | S18-08, PF-06 |
| DO-04 Integrated review | S18-09, PF-07 (parallel specialist review kept; integrated mode and the gate 2 rewording **deferred**) |
| DO-05 Parallel specialist review | S18-03, S18-09, S18-10, PF-07 |
| DO-06 Builder-neutral lifecycle | S18-03, S18-12, PF-03, PF-08, IE-02, IE-03, IE-07 |
| DO-07 Conditional external-tool brief | S18-12 |
| DO-08 Workstreams without new IDs | S18-05, S18-11, IE-02 |
| DO-09 Founder-reserved runtime scenarios | S18-13, BP-05, IE-09 |
| DO-10 Mandatory Stage 19 | S18-14 (unchanged in substance) |
| DO-11 Finding-scoped Stage 20 | S18-15, IE-08, IVP-01 |
| DO-12 Combined Stage 21 and 22 | S18-16, IE-05, PF-08 |
| DO-13 Stage 24 closure package | S18-17, CP-06, CR-02 |
| DO-14 Stage does not require its own PR | **Not adopted** (D-01, D-02a): `S18-18` and `CP-04` rejected; each gate crossing is one canonical pull request (`S18-22`) |
| DO-15 Checkpointing | CP-03, CP-05, AG-02, AG-04, CR-04 (bounded work-package Git authority, D-02b) |
| DO-16 Migration authority as workstream | **Not adopted** (D-06): `MG-01`, `MG-02`, `AG-01` rejected; `S18-19` restates the boundary; `MG-03` is factual only |
| DO-17 CI baseline wording | BP-02, BP-04, BP-08, S18-19 |
| DO-18 Topology wording | BP-03, BP-08, S18-19 |
| Dual intake (verbatim) | S18-02, PF-04, SS-01, BP-06, BP-07, CP-02 |
| Backfill not claimed, not blocking | S18-02 status line, BP-08, verification check 4 |
| Human merge | S18-22 (every authority-bearing record human-merged), unchanged Protocol §13 and §22 |
| Founder Product Truth Coverage addendum (eight refinements) | S18-21 and the items in §9 |

## 9. Founder Product Truth Coverage addendum — enforcement map

The Founder requires that the optimized lifecycle prevent drift, omission or unauthorized deferral of any relevant requirement from the approved feature and foundation definitions, including expected merchant experience, workflows, permissions, business rules, dependencies, acceptance criteria and every Build Now, Build Later, Add-on, Separate Product and Reject classification. The design is 02 §16. This table gives, for each of the eight required refinements, the exact sections that enforce it. Line numbers refer to the baseline commit. `—` means the document needs no change for that refinement.

| # | Required refinement | Source 18 | Blueprint template (`PFEW`) | Implementation and Evidence template (`IVEW`) | Build Plan | Other |
|---|---|---|---|---|---|---|
| 1 | Mandatory Feature Coverage and Product Truth Traceability Matrix at intake | New §3.2 (S18-21); Stage 1 lines 125–131 (S18-05); Stage 2 lines 133–139 (S18-06); Appendix B lines 478–497 (S18-20) | §2 lines 36–49 (PF-02); §5 lines 144–166, §6 lines 170–186, §7 lines 190–226 with new §7.4 (PF-04, PF-10) | §2 lines 38–58 (IE-02); §5 lines 160–172 (IE-11) | §14 lines 884–916 (BP-06); §17 lines 988–990 (BP-07); new §19 (BP-08) | Source Set intake lists lines 85–101 (SS-01); View §12 At Mission Initiation lines 275–285 (RG-01) |
| 2 | Explicit handling of every applicable approved requirement | New §3.2 items 2 to 5 (S18-21) | New §7.4: row rule, eight dispositions, completeness test (PF-10) | §8 checklist lines 225–253, new item 13 (IE-11) | §10 preamble line 382; §11 lines 824–842; §12 lines 846–855; §15 lines 918–934; §16 lines 938–961 (BP-09) | — |
| 3 | No silent omission; no unauthorized movement between Build Now and Build Later (or any classification or assignment) | New §3.2 item 4 (S18-21); Stage 3 triggers T7, T8, lines 141–147 (S18-07); Stage 20 lines 301–309 (S18-15); Stage 23 lines 329–335 (S18-16) | New §7.4 classification lock (PF-10); §9 lines 262–288 (PF-05); §11 lines 341–347 and §18 lines 732–745 (PF-10) | §11 lines 322–331, §16 lines 475–497, §22 lines 613–629 (IE-12) | §9 lines 358–378 assignment lock; §2 lines 41–62 (BP-09) | View §2 consequence 8 (RG-02) |
| 4 | Blueprint to EIS to implementation to verification traceability | Stage 4 lines 149–155 (S18-08); Stages 6–7 lines 165–179 (S18-09); Stages 9–11 lines 191–213 (S18-10); Stages 12–13 lines 217–249 (S18-11); Stages 15–16 lines 259–273 (S18-12); Stages 17–18 lines 275–289 (S18-13) | §10 lines 292–321 and "Canonical Product Blueprint Structure" lines 389–415, Blueprint Sections 8, 10, 11, 12, 15, 19 (PF-10); §14 lines 537–551 (PF-07); §16 lines 570–587 and §17 lines 591–728 (PF-08) | §6 lines 176–199, §7 lines 201–223, §8 lines 225–253 (IE-11); §10 lines 289–305 (IE-06); §12–§13 lines 335–432 (IE-12); §14–§15 lines 436–471 (IE-08) | §13 lines 859–880 (BP-05) | — |
| 5 | Independent verification of material coverage and drift | Stage 19 lines 291–299 (S18-14); §4.9 lines 105–113 (S18-04) | §17 lines 640–650 preconditions (PF-08) | §8 checklist new item 13 (IE-11); §14 lines 436–452 (IE-08) | §13 rule 6 (BP-05) | Verification protocol §3, §4 line 63, §5, §6, §7, §8, §9, §13 (IVP-01) |
| 6 | Completion Report reconciliation against the approved feature contracts | Stage 22 lines 319–327 and Stage 23 lines 329–335 (S18-16); §14 lines 455–459 (S18-17) | §17 lines 638–662 (PF-08) | §9 lines 255–287 (IE-05); §20 lines 567–583 (IE-09) | §13 lines 859–880 (BP-05) | — |
| 7 | Global Product Completion View updated only from demonstrated completion | Stage 23 (S18-16); Stage 24 lines 337–343 (S18-17) | — | §20 lines 567–583 (IE-09) | §17 (BP-07); new §19 (BP-08) | View §2, §4.4, §4.5, §7 line 193, §12 (RG-01, RG-02); optional §5 header (RG-03) |
| 8 | Founder escalation for genuine Product Truth conflicts or proposed changes | Stage 3 lines 141–147 (S18-07); new §3.2 item 7 (S18-21); Stage 8 lines 181–187 (S18-10); Stage 23 (S18-16) | §8 and §9 lines 230–288 (PF-05) | §17 lines 501–528 (IE-08); §22 (IE-12) | §2 lines 41–62 (BP-09) | — |
| — | Dual-intake rule preserved verbatim | New §3.1 (S18-02) | §5 to §7 (PF-04) | — | §14, §17 (BP-06, BP-07) | Source Set (SS-01); Protocol §5 (CP-02) |

None of the eight refinements depends on any rejected or deferred item. The dual-intake rule is quoted unchanged.

## 10. Disposition of the Founder decisions and earlier review findings

### 10.1 Founder decisions (02 §14)

Source: the Founder decisions recorded in the PR #605 conversation on 2026-09-19, including the final D-15, as restated in Mission Control's reconciliation instruction. Design text is in 02; evidence is in 01.

| Decision | Request item | How applied | Items changed | Not done |
|---|---|---|---|---|
| D-01, D-02a | 1 | Authority stays canonical. The fail-closed model replaces the Class 2 and five-gate proposals | `S18-22`, `CP-03` approved; `S18-18`, `CP-04` rejected | No branch-effective record, no merge gates G1 to G5 |
| D-02b | 2 | Bounded work-package Git authority with the ten mandatory elements, including the commit-message and trailer rule and an end event and date | `CP-05`, `AG-02`, `AG-04`, `CR-04` | No broader Git authority, no Git permission in any authorization record |
| D-11 | 3, 4 | Mandatory FCTM and classification lock, enforced at every stage from intake to completion accounting | `S18-21`, `PF-10`, `IE-11`, `IE-12`, `BP-09`, `IVP-01` and the FCTM parts of the stage items | No silent omission, deferral, simplification or reclassification |
| L-01 | 5 | Dual intake, verbatim, with the backfill status line | `S18-02`, `PF-04`, `CP-02`, `SS-01`, `AG-03`, `BP-06`, `BP-07` | Backfill not claimed complete and not blocking |
| D-04 | 6 | Mandatory human retest after every correction, finding-scoped, recorded, no automated-only waiver | `S18-15`, `IE-08`, `IVP-01` | The risk-based exemption |
| D-05 | 7 | Existing Lovable-specific filenames retained, with a truthful byline and builder-identity field | `S18-12`, `S18-03`, `PF-08`, `IE-02`, `IE-03` | Mandatory generic builder filenames |
| D-06 | 8 | Separate migration missions and default-deny retained. Factual migration-status reconciliation only | `MG-03`, `S18-19` (restatement); `MG-01`, `MG-02`, `AG-01`, `CL-01`, `CG-01` rejected | MX, in-Product-Mission execution, any migration wording change |
| D-07 | 9 | Approved in principle: version numbers applied only to amended files (Protocol v1.1 only if substantively amended as approved); active only with the human-merged, coherent redline | `S18-01`, `PF-01`, `IE-01`, `CP-01`, `CR-03` | The verification protocol's number is proposed explicitly in `IVP-01` and not applied (D-07 approved none) |
| D-08 | 10 | Only necessary consistency edits and short intake pointers (dual memory plus validated OLE, FCTM, current Source 18); `AGENTS.md`, `CLAUDE.md` and `CHATGPT.md` inspected | `AG-02`, `AG-03`, `AG-04`, `CP-02`, `SS-01`, `CR-04` | Migration wording; any edit to `CLAUDE.md` or `CHATGPT.md`, which have no stale instruction |
| D-09 | 11 | Phase 1 guide unchanged | `PG-01` rejected | Any currency annotation |
| D-13 | 12 | MC-appointed qualified Definition Actor; Codex not the default; independence and role-separation assessment preserved | `S18-03`, `S18-06`, `S18-07`, `S18-08`, `PF-03`, `PF-04`, `PF-05` | Codex-led rediscovery as default |
| D-14 | 13 | Canonical fail-closed bundled-preparation model | `S18-22`, `CP-03`, `S18-20` | Any preparation treated as authority |
| D-15 | 14 | Movement between existing non-terminal states only when the destination's explicit evidence criteria are met, citing FCTM row IDs; no mature-feature upgrade from a partial mission; no new label | `S18-16`, `RG-01`, `RG-02`, `IE-05`, `IE-09` | A blanket ban on state movement |
| D-12 | 15 | Status names kept; criteria clarified; partial progress shown; concise evidence column; the View never reproduces requirement rows; detail stays in the FCTM | `RG-01`, `RG-02`, `RG-03` | Rename, new status, evidence copied into the View |
| D-16 | 16 | AP-1 recorded as a narrow administrative finding; every future grant states the commit-message and trailer rule | `CP-05`, `AG-04`, `CR-04` | History rewrite |
| D-03 | follow-up | The five-gate G3-only rule is rejected as drafted; a separate, self-contained proposal is requested if useful and is not drafted here (02 §19.1) | None | The rule itself; blocking the canonical fallback |
| D-10 | follow-up | Recorded as deferred with the gap visible and not described as remediated or as approved for permanent acceptance (02 §19.2) | None | Any GitHub protection change |

### 10.2 Earlier Mission Control review findings (PR #605)

Source: Mission Control review comment of 2026-09-19, `https://github.com/SmartBusinessv1/smart-business/pull/605#issuecomment-5740574835`. It is design review, not governance approval, a Founder decision or merge authorization. The Founder decisions above have since settled the open points.

| Finding | Final position | Amendment items | Decision |
|---|---|---|---|
| 1 Stage 2 and Stage 4 actor drift | Definition Actor approved; Codex not the default; role-separation rule; conditional Founder gate preserved; Codex remains available for review, research and Stage 19 | `S18-03`, `S18-06`, `S18-07`, `S18-08`, `S18-20`, `PF-03`, `PF-04`, `PF-05`, `PF-10` | D-13 |
| 2 Authority-speed proposals; fail-closed model | Class 2 and the five-gate model not adopted; bounded work-package Git authority approved; fail-closed model approved; verified-code-only rule not adopted; gate 2 rewording deferred | `S18-22`, `CP-03`, `CP-05`, `AG-02`, `AG-04`, `CR-04`; `S18-18`, `CP-04` rejected | D-01, D-02a, D-02b, D-03, D-14 |
| 3 FCTM efficiency and vocabulary | Approved as drafted | `S18-21`, `PF-10`, `IE-05`, `IE-11`, `BP-09` | D-11 |
| 4 Stage 23 and the View | Timing reconciliation kept; update at acceptance from the accepted Contract Reconciliation; evidence-backed non-terminal progress; no mature-feature upgrade from a partial mission; bounded follow-up defined | `S18-16`, `S18-17`, `RG-01`, `RG-02`, `RG-03` | D-12, D-15 |
| 5 Security and CI as a separate decision | Hardening deferred; exact live state and the gap recorded; no item mutates any setting | None (02 §18.7, §19.2; 01 §3.4) | D-10 |
| 6 Migration reconciliation | Evidence-based, period-specific rows for files 13 to 21; file 21 reported applied only by secondary retrospectives and left unverified, file 11 left unknown; no authority inferred from a ledger; default-deny unchanged | `MG-03`; `MG-01`, `MG-02`, `AG-01` rejected | D-06 |
| Publication issue | Recorded as AP-1; accepted as a narrow administrative finding; no history rewrite; future grants state the commit-message and trailer rule | `CP-05`, `AG-04`, `CR-04` | D-16 |

### 10.3 Counts

78 items reviewed: 20 approved, 35 approved with parts, 10 proposed for confirmation at redline review, 5 corrections and 8 rejected (§2.3). Eleven files are amended (70 retained items); the files reviewed and not amended are in §2.2. The earlier drafts had 76 items; the additions are `AG-04` and `CR-04`.
