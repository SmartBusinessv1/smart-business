# SB-GOV-PRODUCT-EXEC-1.0 — Governance Amendment Map

**Mission ID:** `SB-GOV-PRODUCT-EXEC-1.0`

**Document:** `03-governance-amendment-map.md`

**From:** Claude Code — governance / engineering workflow reconciliation specialist

**To:** Mission Control

**Status:** `DRAFT — NO GOVERNING SOURCE HAS BEEN EDITED — MISSION CONTROL AND FOUNDER REVIEW REQUIRED`

**Date:** 2026-09-19

**Baseline:** `main` at `953496660a0939ec89608505dc61070a69faddf1`. Every line number below refers to that commit.

**Revision:** base draft published as PR #605 (head `194b9a4b9dfd2ece65a419501fc29b90f8bd85ac`); this revision responds to Mission Control's review of 2026-09-19 and is published to PR #605 under Mission Control's Git authorization for this revision. Disposition of each finding is in [§10](#10-disposition-of-mission-control-review-findings-pr-605).

> Design context: [01 — analysis](./01-current-state-and-bottleneck-analysis.md), [02 — proposed lifecycle](./02-proposed-optimized-product-mission-lifecycle.md). Nothing here is active. `SB-P-1.12` remains `NOT ACTIVATED`.
>
> **Founder Product Truth Coverage addendum incorporated.** The exact Source 18, Blueprint template, Implementation and Evidence template and Build Plan sections that enforce it are collected in [§9](#9-founder-product-truth-coverage-addendum--enforcement-map). The Global Product Completion View, previously `NO CHANGE`, is now `MUST` (`RG-01`, `RG-02`) with one `CONDITIONAL` item (`RG-03`); the verification protocol moves from `CONDITIONAL` to `MUST` for the coverage additions (`IVP-01`).
>
> **Founder decision gates — NOT APPROVED.** `DG-1` (branch-effective authority records and the five-gate merge model) and `DG-2` (work-package-scoped Git authority) are open. Items that depend on them are labelled below and are held pending a Founder decision. The coverage controls do not depend on either.

---

## 1. How to read this map

| Class | Meaning |
|---|---|
| **MUST** | Required to activate a Founder-approved design outcome cleanly, or to remove a contradiction or stale authority statement. |
| **CONDITIONAL** | Needed only if a named condition holds; each states the condition and the default. |
| **NO CHANGE** | Reviewed and deliberately not amended, with the reason. |

Each MUST item states: exact file, exact sections, current problem, proposed replacement behavior, authority impact, security impact, compatibility risk, and whether Founder approval is required before mutation. Proposed wording is given verbatim only where precision matters (the dual-intake rule, Git authority, migration authority); elsewhere the behavior is specified and the wording is left to the redline stage.

New subsections are numbered so **no existing section is renumbered**: Source 18 gains `§3.1`, `§3.2`, `§3.3`, `§9.1` and `§10.1`. Other documents cite Source 18 sections by number (for example Protocol §26 cites "Section 10"), so this keeps them valid.

**No new files are required.** Record formats (Truth Pack, FCTM, Intake Record, Stage Ledger, Implementation Authorization fields, MX record, Contract Reconciliation) live inside the amended documents. The FCTM itself is a mission artifact created per mission, not a repository template file.

**Approval packages** (§6): **A** lifecycle, operating model and Product Truth coverage; **B** authority and security (contains the open decision gates); **C** corrections with no behavior change.

**Abbreviations.** `FCTM` is the Feature Coverage and Product Truth Traceability Matrix defined in 02 §16. `View` is `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` (titled "Global Product Completion Register" inside).

## 2. Master classification

| # | File | Class | Items | One-line reason |
|---|---|---|---|---|
| 1 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | MUST | S18-01 to S18-22 | The governing lifecycle; S18-21 adds §3.2 for the FCTM; S18-22 adds §3.3 (preparation is not authority) |
| 2 | `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md` | MUST | PF-01 to PF-10 | Aligned Blueprint template (Founder outcome 2); PF-10 adds the FCTM section |
| 3 | `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md` | MUST | IE-01 to IE-12 | Aligned implementation template (outcome 3); IE-11 and IE-12 carry coverage |
| 4 | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | MUST | BP-01 to BP-09 | Operational baseline update (outcome 4); BP-09 locks assignment and non-exhaustive §10 |
| 5 | `communication/AI_Communication_and_Handover_Protocol.md` | MUST | CP-01 to CP-06 | Communication and Git rules (outcome 5); CP-04 and CP-05 are decision gates |
| 6 | `communication/README.md` | MUST | CR-01 to CR-03 | Stale status; closure alignment |
| 7 | `docs/migration/README.md` | MUST | MG-01 to MG-03 | Migration authority (outcome 5) |
| 8 | `AGENTS.md` | MUST | AG-01, AG-02 | Universal Git and migration authority wording; AG-02 is a decision gate |
| 9 | `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md` | MUST | SS-01 | Operationalizes the dual-intake rule and coverage intake |
| 10 | `communication/Independent_Verification_Efficiency_Protocol.md` | **MUST** (was CONDITIONAL) | IVP-01 | Coverage and drift verification; conforming references |
| 11 | `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` | **MUST** (was NO CHANGE) | RG-01, RG-02 (RG-03 conditional) | Its Update Protocol and vocabulary are contract-level; demonstrated-only updates need requirement-level accounting |
| 12 | `CLAUDE.md` | CONDITIONAL | CL-01 | De-duplicate migration wording |
| 13 | `CHATGPT.md` | CONDITIONAL | CG-01 | Mirror of CL-01 |
| 14 | `AGENTS.md` (intake pointer) | CONDITIONAL | AG-03 | Optional Product Mission intake pointer |
| 15 | Phase 1 institutional-memory guide | CONDITIONAL | PG-01 | Currency annotations only |
| 16 | The View: evidence pointer and terminology alias | CONDITIONAL | RG-03 | Optional table and header additions |
| 17 | `merge/active/12_Product_Execution_and_Release_Framework.md` | NO CHANGE | — | Reviewed for contradiction: none |
| 18 | `merge/active/17_AI_Operations_Manual.md` | NO CHANGE | — | Reviewed for contradiction: none |
| 19 | `merge/active/01_Smart_Business_Master_System_Manifesto.md`, `11_Smart_Business_Product_Truth_Map.md` | NO CHANGE | — | Out of scope; no contradiction surfaced |
| 20 | The 25 feature contracts, the Feature Library `README.md` and `00_Feature_Definition_Library_Coverage_Matrix.md` | NO CHANGE | — | The FCTM is derived from them and must not alter them. The Anti-Drift and Build Commitment rules and the delegation map are relied on as written. Contract 21's section layout differs from the README's Feature File Standard `[R]`; the FCTM cites each contract's actual sections, so no contract edit is proposed |
| 21 | `merge/active/README.md` | NO CHANGE | — | Lists Source 18 by description only; no version string |
| 22 | `communication/governance/branch-protection-verification.md` and the repository's protection settings | NO CHANGE | — | Protection is not amended here; O-01 and O-02 are separate Founder decisions |
| 23 | `.github/workflows/*`, `docs/engineering/assurance/Build_Assurance_Baseline.md` | NO CHANGE | — | CI architecture already describes Fast Gate and Full Assurance |
| 24 | `docs/engineering/eos/*` (including both actor workflows) | NO CHANGE | — | Contain no stage-scoped expiry wording; their stage numbering is unrelated to Source 18 |
| 25 | `communication/live/instruction.md`, `communication/live/report.md` | NO CHANGE | — | Transient handoff files, not governing sources |
| 26 | `mission-control/mission_memory.md` | NO CHANGE | — | Mission Control-owned state; updated at this mission's closure |
| 27 | `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md` | NO CHANGE | — | Structural reference; must not move |
| 28 | `organizational-learning/**`, `communication/archive/**`, SB-P-1.11 and other completed mission records | NO CHANGE | — | Immutable historical evidence |

---

## 3. MUST changes

### 3.1 Source 18 — `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`

#### S18-01 — Header, version, provenance, change log (Package A for version, Package C for missing row)

- **Sections:** header lines 3–15; Source Change Log lines 580–587; closing "Active control" lines 589–591.
- **Current problem:** header states Version 1.1; the change log ends at 1.0 (2026-08-01) with no v1.1 row; the closing line still says "Source 18 Version 1.0". Provenance for the active version is incomplete.
- **Proposed behavior:** Version 1.2; "Created under" and "amended under" name `SB-GOV-LIFECYCLE-1.0`, `SB-GOV-IV-1.0`, `SB-GOV-PRODUCT-EXEC-1.0`; append a v1.1 row (2026-09-18, PR #598 at `4ddbb647…`) and a v1.2 row; closing line names v1.2. Append-only, as line 587 requires.
- **Authority impact:** none beyond recording approval.
- **Security impact:** none.
- **Compatibility risk:** low. The verification protocol and `communication/README.md` cite "Source 18 v1.1" and remain historically true; the conforming references are part of MUST item IVP-01.
- **Founder approval before mutation:** Yes for the version bump (with the package). No for the missing v1.1 row (Mission Control approval sufficient).

#### S18-02 — Governing principles and Institutional Learning Intake (new §3.1)

- **Sections:** §3 lines 43–57; new §3.1.
- **Current problem:** nothing requires a mission to consume approved truth or institutional learning. The Founder's dual-intake rule is not carried anywhere in the lifecycle (register C-12, B-07).
- **Proposed behavior:** add four principles: consume approved truth and treat rediscovery of it as a defect; **keep Product Truth complete, so that no approved requirement is silently omitted, deferred, reclassified or allowed to drift (mechanism in new §3.2, item S18-21)**; record each stage as a Stage Ledger disposition (that a stage does not itself require a pull request belongs to decision gate DG-1, held in S18-18, and is not asserted here); never infer production, migration, delivery or publication authority from any stage record, approval, acceptance or merge. New §3.1 carries this text verbatim:

  > Every Product Mission intake must consume both current validated OLE learning and the canonical Phase 1 institutional-memory guide until Mission Control verifies that the historical OLE backfill is complete.

  It then defines the Institutional Learning Intake Record (02 §4.1): baseline SHA; guide identity and §18 checklist; every promotion listed with one disposition (`APPLIED`, `ALREADY EMBEDDED IN ACTIVE GOVERNANCE`, `INFORMATIONAL`, `NOT APPLICABLE`); the scope caveat that promotions are `MISSION_SCOPED` unless a record says otherwise and unpromoted candidates are not authority; the status line `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`; conflict escalation; the delta-only rule after the first intake; non-substitution; and that any simplified rule requires a separate Mission Control authorization after verified completion.
- **Authority impact:** adds a Mission Control review duty (gate 10). No authority transfers. Learning is evidence, never authority.
- **Security impact:** positive: repeats fewer known mistakes. The record itself carries no secrets.
- **Compatibility risk:** low. Existing missions are unaffected. Does not require the backfill and does not block `SB-P-1.12`.
- **Founder approval before mutation:** Yes. It writes the Founder's own rule into governing text.

#### S18-03 — Roles

- **Sections:** §4.2 lines 67–71; §4.3 lines 73–77; §4.4 lines 79–85; §4.5 lines 87–91; §4.6–§4.8 lines 93–103.
- **Current problem:** §4.3 makes Codex the mandatory owner of Founder-led discovery, Product Truth extraction, the Founder Product Decision Record and Sections 1–19, and Mission Control's review records that the Founder asked for the default Codex-led rediscovery and Founder-question sequence to be removed (C-19); Lovable is the only implementer (§4.5) and Claude Code supports a build only "if assigned" (Appendix A, line 472) although SB-P-1.11-IMPL-1 was built by Claude Code; specialists are advisory but nothing permits them to work in parallel.
- **Proposed behavior:** **§4.3 is rewritten around a Definition Actor:** a qualified actor appointed by Mission Control in the Stage 1 record (Claude Code or another authorized actor where fit) owns Stage 2, the preparation of Stage 3 and Stage 4. **Codex is not mandatory** and remains available for separately appointed review or research and for independent Stage 19 verification when selected under §4.9. The conditional Founder Decision Gate is unchanged: the Founder is asked only about genuine open decisions, and Mission Control designates who conducts any triggered dialogue. A new role-separation rule (02 §18.2) applies by role, not provider: where one actor holds both the Definition and Engineering Review or EIS roles, Mission Control records a separation assessment and, on a material-risk mission, a parallel specialist who did not author Sections 1–19 reviews the engineering findings; where the Definition Actor is also a workstream's builder, Mission Control records the assessment and prefers different actors where available. §4.4 Claude Code owns the integrated Stage 6–7 work package and the combined Stage 21–22 package, may be the Definition Actor where appointed, and may be an authorized builder where the Implementation Authorization names it, subject to §4.9 independence. §4.5 becomes "Authorized Builder(s)": Lovable is one builder; its duties and limits are preserved for Lovable-built workstreams; the report path is builder-neutral. §4.2 adds Founder-reserved runtime scenarios and the delegable human verifier. §4.6–4.8 permit parallel specialist review, keep every advisory limit, and name the mandatory-review triggers (02 §6.2).
- **Authority impact:** **actor allocation changes:** Codex loses its mandatory ownership of Stage 2 to 4 and Mission Control gains the power to appoint the Definition Actor. That is a change to a Founder-approved allocation and needs the Founder (D-13). No actor gains approval power: Mission Control still approves Sections 1–19 at Stage 5 and the Founder still approves at Stage 8.
- **Security impact:** independence matrix (02 §8.2) prevents a builder verifying its own work or a transferer verifying what it transferred; the role-separation rule (02 §18.2) prevents one actor being the only challenge to its own definition on a material-risk mission.
- **Compatibility risk:** low for history: SB-P-1.10 and SB-P-1.11 records name their own roles. Medium going forward: the Elaboration template (PF-03) and Appendix A (S18-20) must change with it, and `CLAUDE.md` and `CHATGPT.md` need no change because neither assigns Stage 2 to 4 (§5).
- **Founder approval before mutation:** Yes (Package A, decision D-13).

#### S18-04 — Independent Verification Actor (§4.9): verification-plan preview

- **Sections:** §4.9 lines 105–113.
- **Current problem:** appointment is recorded "for Stage 19", so verifier identity, independence and Codex classification are settled late.
- **Proposed behavior:** add: before the Implementation Authorization is recorded, Mission Control records a verification-plan preview (intended verifier and eligible alternates, prior-contribution and independence assessment, Codex utilization classification, Class A boundaries). Formal activation remains a Stage 18 decision. A replacement remains a recorded Mission Control decision under this section. All existing text stays.
- **Authority impact:** none; Mission Control still appoints.
- **Security impact:** earlier independence assessment; nothing weakened.
- **Compatibility risk:** low.
- **Founder approval before mutation:** Yes (§4.9 was Founder approved in PR #598).

#### S18-05 — Stage 1: Mission Initiation and Intake Pack

- **Sections:** Stage 1 lines 125–131.
- **Current problem:** outputs omit contract mapping, workstreams, delivery and production scope, the intake record and the verification-plan preview.
- **Proposed behavior:** add the Intake Pack outputs listed in 02 §5.1: the contracts advanced and their delegates, **the FCTM opened for them at a recorded baseline with each contract's blob SHA**, the workstream register draft, and the default lines `production mutation`, `migration execution` and `delivery sync and publication` each `NOT AUTHORIZED`.
- **Authority impact:** Mission Control records more at initiation; no new authority.
- **Security impact:** production and migration needs are declared at the start (addresses B-06).
- **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### S18-06 — Stage 2: Mission Truth and Delta Reconciliation

- **Sections:** Stage 2 lines 133–139.
- **Current problem:** "Product Truth Extraction" re-derives truth already held in the 25 contracts and the Build Plan (C-01).
- **Proposed behavior:** retitle; inputs are approved sources, the Build Plan §10 section, the in-scope contracts and their delegates, the View and the current repository and runtime state; output is the five-part Truth Pack (02 §5.2): **the populated FCTM**, derived constraints, Delta, unresolved items and conflicts, and the Institutional Learning Intake Record. The FCTM replaces the former free-form Truth Table for requirement-bearing truth. Uncited claims are `UNRESOLVED`. **The Definition Actor appointed under S18-03 is the owner; Codex is not the default owner.**
- **Authority impact:** owner unchanged; Claude Code input is a finding, so §3 ("only the current stage owner modifies the deliverable") holds.
- **Security impact:** the Delta catches stale baselines (for example Build Plan §5.2 and the residual `anon` grants).
- **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### S18-07 — Stage 3: conditional Founder Decision Gate

- **Sections:** Stage 3 lines 141–147.
- **Current problem:** Founder Discovery is unconditional for every mission.
- **Proposed behavior:** conditional gate with triggers T1 to T8 (02 §5.3), including **T7** (proposed omission, deferral, pull-forward, simplification or reclassification of an approved requirement, or any change of its build commitment, commercial classification or mission assignment) and **T8** (a Product Truth conflict or infeasibility found at any later stage). Triggered: Founder Product Decision Record for triggering items only. Not triggered: Gate Record listing each trigger checked, plus a one-page Founder Brief; **permitted only if the FCTM has no critical-path `UNRESOLVED FOUNDER DECISION` row and no `ESCALATED` row**. T7 and T8 reopen the gate at whatever stage they arise. Mission Control cannot decline a Founder request (T5).
- **Authority impact:** Founder decision ownership preserved and extended to every proposed change of an approved requirement. The change is which questions reach the Founder, and Stage 8 remains the backstop over the whole Blueprint.
- **Security impact:** none; the risk is misclassification, mitigated by the uncited-claim rule.
- **Compatibility risk:** medium. Existing templates assume the dialogue; PF-05 aligns them.
- **Founder approval before mutation:** Yes.

#### S18-08 — Stage 4: Blueprint assembly by reference

- **Sections:** Stage 4 lines 149–155.
- **Current problem:** Sections 1–19 are authored fresh each time.
- **Proposed behavior:** assemble by citing approved truth; new prose only for scope selection, delta, dependencies and acceptance criteria; keep the `SB-P-1.10` structure and `Not applicable — justified`; seed Experience Anchors and Founder Runtime Scenarios into Section 15 from Build Plan §10; add a Section-to-source table to Section 19 **keyed by FCTM row ID**. Exact Blueprint sections (`SB-P-1.10` numbering): Section 8 carries in-scope functional rows, Section 10 business rules, Section 12 dependencies, Section 15 acceptance scenarios and experience anchors, **Section 11 (Out of Scope) lists every `ASSIGNED TO LATER MISSION`, `DELEGATED` and `OUT OF BUILD SCOPE` row as "still committed / not in this mission" with the owning mission or preserved classification**, and Section 19 holds the row map. Blueprint content that maps to no row is a recorded refinement or a scope expansion (T3 if it changes truth). Codex may not omit, defer, simplify, reclassify or expand an approved requirement.
- **Authority impact:** none beyond S18-03; the Definition Actor remains the author of Sections 1–19 and Mission Control still reviews at Stage 5.
- **Security impact:** none; denial-path scenarios are seeded at the start, not late.
- **Compatibility risk:** low; no section renumbering.
- **Founder approval before mutation:** Yes.

#### S18-09 — Stages 5–7 and mandatory gate 2

- **Sections:** Stages 5–7 lines 157–179; §9 gate 2 line 350.
- **Current problem:** Builder Review must be approved before Engineering Review **begins**, and specialist review sits serially at Stage 10 (B-02).
- **Proposed behavior:** Stage 5 additionally checks the intake record **and runs the FCTM completeness test (02 §16.4)** (new gate 10). Stages 6 and 7 may be one work package when Mission Control declares integrated mode under conditions S1 to S4 (02 §6.2), with specialist reviews in parallel and mandatory on named risk triggers. Gate 2 becomes: Builder Review findings must be approved before Sections 20–21 are approved or locked. Section 20 or 21 carries the early delivery plan **and a feasibility and risk finding per `IN SCOPE` row; an infeasible, unsafe or blocked row stays `IN SCOPE`, is marked blocked and raises T8; it is never quietly narrowed or moved**.
- **Authority impact:** gate 2 is on the "Mandatory Non-Bypassable Gates" list. Its binding moves from when drafting starts to when approval occurs. Every approval remains Mission Control's.
- **Security impact:** specialist review is preserved and made mandatory on risk, satisfying the hard boundary "remove specialist review where risk requires".
- **Compatibility risk:** medium: possible rework if Builder Review is returned (mitigated by S4). Sequential mode remains available.
- **Founder approval before mutation:** Yes, because a listed gate is reworded.

#### S18-10 — Stages 8–11: lock and EIS

- **Sections:** Stages 8–11 lines 181–213.
- **Current problem:** specialist reviews arrive after the EIS exists, producing multi-round refinement (v2.0, v2.1, v2.2 in SB-P-1.11).
- **Proposed behavior:** Stage 8 Founder approval also confirms the FCTM and Truth Pack summary, the Founder-reserved scenarios and the production and migration scope flags; **the lock freezes every FCTM row's disposition, build commitment, commercial classification and mission assignment**, so any later change needs a Founder decision; the Blueprint lock is Class 1 and merges at G1. EIS is drafted with specialist findings integrated **and carries an FCTM traceability table (every `IN SCOPE` row to EIS requirement, and every EIS requirement back to a row; an orphan needs a recorded reason and, if it adds behaviour, raises T3)**; Stage 10 specialist confirmations run in parallel into one disposition and Mission Control runs the completeness test; refinements are re-reviewed finding by finding; the Stage 10 disposition and Stage 11 lock may be one record. Gates 3 and 4 are unchanged.
- **Authority impact:** none; locks stay with Mission Control.
- **Security impact:** neutral to positive: security findings are integrated before lock.
- **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### S18-11 — Stages 12–13: package and Implementation Authorization

- **Sections:** Stages 12–13 lines 217–249, including the authorization field list at lines 233–247.
- **Current problem:** authorization lacks workstreams, environments, CI baseline, delivery and migration scope, verification plan and expiry; the package is reviewed and locked document by document in practice.
- **Proposed behavior:** the three documents are authored and reviewed as a set (builder-neutral names, §8.2 of 02); **the Engineering Contract maps every `IN SCOPE` row to an obligation, the Verification Checklist maps every `IN SCOPE` row to an item with a planned evidence class (named negative-path items for permission, isolation and denial rows; a named runtime scenario for every experience row), and the Builder Prompt lists each workstream's rows and forbids behaviour outside them**; Stage 13 is one Class 1 record combining package lock and Implementation Authorization with the nine expanded field groups in 02 §7.3, including default `NOT AUTHORIZED` production, migration and delivery lines, the pre-appointed verifier and **the locked FCTM path, baseline SHA, per-workstream rows and Mission Control's completeness statement**. Gate 5 gains: no authorization while an `IN SCOPE` row is unmapped. Merges at G2.
- **Authority impact:** implementation authorization stays an explicit Mission Control record and still must exist before implementation. Recording it with the lock is already permitted ("Locked package and explicit implementation-authorization decision go forward").
- **Security impact:** positive: environments, scope and independence are fixed before code exists.
- **Compatibility risk:** medium. Existing implementation-authorization records lack the new fields; only missions authorized after activation are affected.
- **Founder approval before mutation:** Yes.

#### S18-12 — Stages 14–16: builder-neutral implementation

- **Sections:** Stages 14–16 lines 251–273; §5 line 121 root list and Stage 12 file names.
- **Current problem:** Founder Lovable Brief is unconditional; report path and prompt names are Lovable-specific; no rule for building outside the canonical repository.
- **Proposed behavior:** Stage 14 conditional (`NOT APPLICABLE — JUSTIFIED` when the builder has direct authorized access). Stage 15 is implementation by workstream with checkpoint commits, each with a green Fast Gate. Stage 16 Builder Completion Report per workstream carries the `SB-IV-1.0` §5 Verification Packet and the canonical-transfer record where applicable, **and states for every assigned row `IMPLEMENTED` (with evidence), `PARTIALLY IMPLEMENTED` (stating what remains) or `NOT IMPLEMENTED`; a missing row is a coverage defect, and a builder does not drop, defer, simplify or reclassify a row or implement behaviour that maps to no authorized row**. New-mission names `builder-prompt.md` and `builder-completion-report.md`; existing names remain valid aliases and are not renamed.
- **Authority impact:** none; still no implementation without the Stage 13 record.
- **Security impact:** the transfer is mechanical, scope-preserving, manifest-checked and never counts as verification.
- **Compatibility risk:** low. No tooling references the names `[R]`.
- **Founder approval before mutation:** Yes.

#### S18-13 — Stages 17–18: runtime verification

- **Sections:** Stages 17–18 lines 275–289; §4.2 lines 67–71.
- **Current problem:** Stage 17 does not separate product-experience judgement from mechanical checks, loading the Founder with both.
- **Proposed behavior:** Founder-reserved scenarios (Build Plan §10 scenarios and any anchor Mission Control designates) versus delegable checks by a named human verifier; the Founder still confirms all submitted findings; evidence names environment, commit and deployment identity, actor, role, route, result **and the FCTM row IDs exercised**; Stage 18 applies the entry gate and activates the pre-appointed verifier.
- **Authority impact:** Founder judgement is reserved where it matters and delegation is by name. No removal of human runtime verification.
- **Security impact:** neutral; CI never substitutes for the human gate.
- **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### S18-14 — Stage 19: mandatory gate restated

- **Sections:** Stage 19 lines 291–299.
- **Current problem:** the gate verifies checklist obligations but nothing requires it to check that the mission's requirement set is complete, that classifications and assignments were not moved, or that implemented behaviour matches approved expected experience (B-10).
- **Proposed behavior:** keep the existing text and add that Stage 19 may run per workstream with one mission-level disposition; migration-workstream Class A probes run in the authorized test environment and production probes require an MX; the verifier records independence and does not implement corrections. **Add the coverage and drift obligation (02 §16.7), performed for every mission whatever the Codex utilization classification:** (1) coverage completeness, with the verifier independently inventorying each in-scope contract's numbered sections at the intake blob SHA and comparing with the FCTM (Class C); (2) movement integrity, comparing each row's disposition, build commitment, commercial classification and assignment at Stage 8, Stage 13 and Stage 22 against the source text and Founder Decision IDs (Class C); (3) drift of implemented behaviour from approved expected experience, permissions, denial behaviour and business rules, by Class A for material rows and Class B or C otherwise. Findings `SILENT OMISSION`, `UNAUTHORIZED DEFERRAL`, `UNAUTHORIZED PULL-FORWARD`, `MISCLASSIFIED`, `DRIFT` and `ORPHAN` map onto `PASS`, `FAIL`, `FOLLOW-UP`, `NOT APPLICABLE`; a material coverage or drift `FAIL` is a material blocking failure; a row without evidence is not demonstrated. The verifier reports and does not decide Product Truth. Where the only eligible verifier authored the FCTM, Mission Control records a separation assessment and the check is made against the source contracts. The sentence "Every Product Mission retains this gate" stays unchanged.
- **Authority impact:** the verifier's remit widens to coverage and drift; its authority does not (it still cannot approve itself, accept the mission or decide Product Truth).
- **Security impact:** positive: permission, isolation and denial requirements cannot be silently dropped; reinforces default-deny.
- **Compatibility risk:** medium. The verifier's scope grows, which affects `SB-IV-1.0` budgeting (IVP-01) and verifier capacity; the mandatory status and independence rules are untouched.
- **Founder approval before mutation:** Yes. This edits a Founder-approved mandatory gate and implements the Founder's coverage requirement.

#### S18-15 — Stage 20: Corrective Cycle

- **Sections:** Stage 20 lines 301–309.
- **Current problem:** every material `FAIL` triggers a "corrective mission" with updated report, Founder retest, runtime review and reverification (B-05); the protocol can only scope it "under Mission Control's direction".
- **Proposed behavior:** "Corrective Authorization" (a numbered record, not a Product Mission ID); sequence per `SB-IV-1.0` §9; escalation per `SB-IV-1.0` §10; the human retest rule in 02 §9.4 (required for user-observable, permission or role-visible changes and any Founder-reserved scenario touched; otherwise `HUMAN RETEST NOT REQUIRED — <reason>`). Preservation of prior reports stays. **A correction never resolves a coverage finding by removing or deferring the row: it restores the approved behaviour or removes the unauthorized behaviour, and if that is impossible or unsafe the row goes to the Founder (T7 or T8).**
- **Authority impact:** Mission Control still controls every repeat cycle.
- **Security impact:** the retest exemption narrows human coverage for purely internal corrections; the recorded reason and the exclusion of user-observable and permission changes bound it. Founder decision D-04.
- **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### S18-16 — Stages 21–23: package and acceptance

- **Sections:** Stages 21–23 lines 311–335.
- **Current problem:** Evidence Package and Completion Report are reviewed separately; the Completion Report does not carry the mandatory Experience Verification Matrix (C-04) and nothing reconciles it against the approved feature contracts; acceptance boundaries are not stated; nothing stops an `IN SCOPE` requirement being accepted as a "follow-up".
- **Proposed behavior:** combined manifest-first package where appropriate, with separate Stage 21 and Stage 22 dispositions; nothing before Stage 19. **The Completion Report includes the Experience Verification Matrix and a Contract Reconciliation (02 §16.9): every FCTM row of every contract advanced, with status `DEMONSTRATED`, `DEMONSTRATED — CARRIED FORWARD (<original evidence>)`, `IMPLEMENTED — NOT DEMONSTRATED`, `PARTIALLY DEMONSTRATED — <what remains>`, `NOT IMPLEMENTED`, `ASSIGNED TO LATER MISSION`, `DELEGATED`, `OUT OF BUILD SCOPE`, `NOT APPLICABLE` or `DEFERRED WITH FOUNDER DECISION <ID>`, and per contract the list of Build Now requirements not demonstrated by this mission.** Stage 23 records acceptance against the reconciliation; **an `IN SCOPE` row that is not `DEMONSTRATED` is not an ordinary follow-up, and accepting it is a scope deviation needing a recorded Founder decision (Stage 23 already requires Founder approval for a scope deviation or a material unresolved follow-up); acceptance never states contract-level completion. The Global Product Completion View is updated at Stage 23, in the same change as the acceptance record, from the accepted reconciliation only (RG-01), by Mission Control and not by the builder.** Stage 23 also states what it does not authorize and carries the Release Handoff Statement and owned follow-ups. **Accepted mission progress is kept apart from complete feature demonstration (02 §18.6):** a mission that demonstrates only some rows is accepted for its authorized scope, records its residual, and produces **no status upgrade** in the View; `ACCEPTED WITH FOLLOW-UP` may carry only a bounded follow-up (an evidence gap outside every `IN SCOPE` row, or a non-blocking issue mapping to no `IN SCOPE` row, each with an owner and the mission or gate that will verify it); the closure record states that `COMPLETED — FORMALLY ACCEPTED` does not mean the feature is complete. Merge points G3 and G4 are part of DG-1; without DG-1 each stays a separate authorization and pull request.
- **Authority impact:** acceptance and Founder conditions unchanged in kind; the Founder-approval trigger for a scope deviation is made explicit for non-demonstrated `IN SCOPE` rows. Mission Control, not the builder, updates the View.
- **Security impact:** acceptance can no longer be read as deployment or migration authority, or as proof that a permission or isolation requirement was met when it was not demonstrated.
- **Compatibility risk:** low, with one open question: whether a partial mission may move a feature between non-terminal implementation values (D-15). The strict default (no status upgrade) applies until decided.
- **Founder approval before mutation:** Yes.

#### S18-17 — Stage 24 and closure gates

- **Sections:** Stage 24 lines 337–343; §9 gate 9 line 357; §14 lines 455–459.
- **Current problem:** closure requires only a record; OLE disposition and communication archive are required elsewhere (C-03); nothing requires the feature-level status of each advanced contract to be evaluated separately from mission completion, or residual requirements to be carried to the mission that owns them.
- **Proposed behavior:** Stage 24 becomes the Closure Package in the order of 02 §10.3: closure record; OLE disposition; **feature-level completion evaluation per advanced contract (a mission can be `COMPLETED — FORMALLY ACCEPTED` while the feature remains `IMPLEMENTED BUT INCOMPLETE`, View §12 "At Mission Closure"), listing the remaining Build Now requirements; residual carry-forward, so every row not `DEMONSTRATED` or `NOT APPLICABLE` and every follow-up is recorded with its owning mission and inherited by that mission's FCTM**; archive. Gate 9 reads "Mission Control acceptance before formal documentation closure, with every `IN SCOPE` row `DEMONSTRATED` or covered by a recorded Founder decision"; new gate 11 (OLE disposition before `COMPLETED — FORMALLY ACCEPTED`); §14 formal completion adds the intake record, the FCTM and Contract Reconciliation, and the OLE disposition. The View is **not** updated at Stage 24: its own protocol updates rows at acceptance, so the update belongs to Stage 23 (S18-16). OLE promotion review does not block closure.
- **Authority impact:** none new; Founder or Mission Control still confirms closure before archive.
- **Security impact:** none.
- **Compatibility risk:** low; it codifies existing practice.
- **Founder approval before mutation:** Yes.

#### S18-22 — Preparation is not authority: fail-closed operating rules (new §3.3) — not a decision gate

- **Sections:** new §3.3 after new §3.2 (§3 ends at line 57); cross-referenced from §9 lines 345–359 and §12 lines 426–430.
- **Current problem:** Source 18 says a mission moves forward "only after the preceding mandatory gate" (§3) and requires explicit Mission Control authorization, but does not say what may be prepared ahead of a gate, or that a committed branch record is not authority. Mission Control's review asked for a practical fail-closed fallback if the Founder declines branch-effective authority (D-14).
- **Proposed behavior:** new §3.3 states, as normative rules: **FC-1** a commit or pull request head is preparation and never authority; **FC-2** one canonical Mission Control instruction may authorize the at-risk preparation of adjacent documentary artifacts marked `DRAFT — NOT AUTHORIZED`, listing artifacts, order and stop conditions, provided none needs an authority not yet merged; **FC-3** each gate crossing is one pull request holding the artifact and Mission Control's decision record naming the reviewed SHA, the human merge is the ratification, and refinement rounds are comments and commits on the same pull request; **FC-4** a Founder decision or approval record is written only after it is given; **FC-5** a T1 to T8 trigger stops dependent preparation; **FC-6** production or migration authority, a Founder Product Truth decision or classification change, the Blueprint lock, build authorization, acceptance and closure are never branch-effective. It adopts the "prepared together / must wait" table of 02 §18.4, which stays inside the current gate order.
- **Authority impact:** none new. It restates that authority is canonical only on human merge and permits only preparation ahead of it. It does not depend on DG-1 or DG-2 and is what remains if DG-1 is declined.
- **Security impact:** positive: it forbids relying on an unmerged record and lists what may never be branch-effective.
- **Compatibility risk:** low. It formalizes practice Mission Control already uses when it bundles instructions; the Principle in §3 gains one sentence permitting at-risk preparation.
- **Founder approval before mutation:** Yes (Package A, decision D-14), because it amends a Founder-approved principle.

#### S18-18 — Checkpoint and PR governance (new §10.1; edits to §10 and §12) — DECISION GATE DG-1, NOT APPROVED

> Held pending a Founder decision. Nothing in the other items depends on this item being approved. If it is not approved, stage boundaries keep their own Mission Control authorization and pull request, and the fail-closed rules of S18-22 apply. **A committed branch record is not approved canonical execution authority:** Class 2, if adopted, only permits the next documentary step to be prepared.

- **Sections:** new §10.1 after line 406; §10 lines 361–406; §12 lines 426–430.
- **Current problem:** §12 makes a handover incomplete until commit, push and synchronization are verified, which in practice means a pull request per stage; no rule states that a stage does not require its own PR (B-03).
- **Proposed behavior:** new §10.1 with PR-1 to PR-6, the Stage Ledger, Class 1 and Class 2 records with the transcription rule and Decision Provenance table, and the work-package concept (02 §3). Class 2 is defined as **sequencing only**: it permits the next documentary preparation step, confers no authority to lock, authorize, execute, accept or close, and is void if the ratifying human merge does not happen. §10 tree unchanged. §12 handover recorded at owner change and at gates.
- **Authority impact:** significant. It would let mid-phase Mission Control review outcomes be recorded on a branch so preparation can continue without a merge; **nothing recorded that way is canonical authority**, and the human merge at the next gate is what ratifies it. The six items in FC-6 (S18-22) are never Class 2 or branch-effective. Every merge to `main` remains human, and no AI approves or merges.
- **Security impact:** the main risk is an actor self-issuing a decision on its branch. Mitigations: transcription rule; provenance table confirmed by the human merger; verifier pre-appointed in Class 1; production, migration and irreversible authority never Class 2.
- **Compatibility risk:** medium. The Class 2 model (D-02a) and the five-gate merge model (D-01) are coupled: without D-02a, mid-phase decisions cannot avoid a merge. CP-04 belongs with this item; CP-05 and AG-02 are the separate gate DG-2.
- **Founder approval before mutation:** **Yes, and it is an open decision, not an assumed one** (Package B, decisions D-01 and D-02a). Held until the Founder decides.

#### S18-19 — Production, migration and delivery boundary (new §9.1)

- **Sections:** new §9.1 after line 359.
- **Current problem:** no lifecycle statement links Source 18 to Source 12 Part 4 release governance or to `docs/migration/README.md` (B-06).
- **Proposed behavior:** the default-deny lines; early planning at Stages 1, 6–7, 9–13; the MX authorization as a Class 1 record referencing `docs/migration/README.md`; delivery sync and publication as release actions under Source 12 Part 4; CI baseline and topology wording (02 §11.4, §11.5).
- **Authority impact:** none new. It states the existing rule inside the lifecycle.
- **Security impact:** positive; no stage or acceptance can be read as production authority.
- **Compatibility risk:** low, but MG-01 and MG-02 must be approved with it.
- **Founder approval before mutation:** Yes (Package B).

#### S18-20 — Status model, appendices

- **Sections:** §13 lines 432–453 (status at line 448); Appendix A lines 461–476; Appendix B lines 478–497; Appendix E lines 521–554; Appendix F lines 556–574.
- **Current problem:** status `VERIFICATION COMPLETE — ACCEPTANCE PENDING` (line 448) differs from Stage 22's `… MISSION CONTROL ACCEPTANCE PENDING` (line 323) (C-06); matrices and artifact list omit the new artifacts; handover template lacks ledger fields.
- **Proposed behavior:** align the status string to Stage 22's wording; add the stage disposition vocabulary (`COMPLETE`, `NOT TRIGGERED`, `NOT APPLICABLE — JUSTIFIED`, `COMBINED WITH STAGE n`); update Appendix A rows for discovery, build and runtime; add to Appendix B the Truth Pack, **FCTM, Contract Reconciliation**, Intake Record, Gate Record, workstream register, Stage Ledger, expanded Implementation Authorization, MX, Closure Package (creator, timing and approval authority for each); add an Appendix A row for Product Truth coverage (owner: Stage 2 owner for the row set, each stage owner for its own mapping, verifier for coverage and drift, Mission Control for the completeness test, Founder for any change); Appendix E adds one line to cut each phase branch from freshly pulled `main` after a gate merge; Appendix F adds Stage Ledger and work-package references.
- **Authority impact:** none.
- **Security impact:** none.
- **Compatibility risk:** low.
- **Founder approval before mutation:** the status-string alignment is Package C (Mission Control sufficient); the rest is Package A. Appendix E and the Stage Ledger references depend on DG-1.

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
  7. **Escalation.** Triggers T7 and T8 (S18-07); the finder stops, marks the row `ESCALATED`, and Mission Control brings it to the Founder; conflicts are surfaced and never resolved by a lower-level actor; Founder decisions and classification changes are never Class 2 records.
  8. **Carry-forward.** A later mission rebuilds the FCTM from the contract text and inherits earlier missions' final statuses.
  9. **Verification and reconciliation** by pointer to Stage 19 (S18-14) and to the Contract Reconciliation and View update (S18-16).
  10. **One matrix, referenced not copied.** Requirement text lives only in the source contracts; the FCTM holds IDs, pointers, dispositions and citations; downstream artifacts carry ID-keyed mapping tables checked by set difference and never restate requirement text; the Contract Reconciliation is the final-status column of the same FCTM and the Experience Verification Matrix is a filtered view of it. **Granularity:** obligation-level rows for `IN SCOPE`, partially delivered and mixed sections; a single section-level row only when the whole section has one non-`IN SCOPE` disposition and one citation, expanding when a mission takes any part of it in scope.
  11. **`ALREADY DEMONSTRATED` is not `PASS`.** It needs the earlier mission's verified evidence cited by path and commit or run identity and a Delta impact check showing it remains valid (the `SB-IV-1.0` §9 carry-forward test); it is reported as `DEMONSTRATED — CARRIED FORWARD (<original evidence>)`, never as newly executed; without traceable evidence, or where the Delta invalidates it, the row is `IN SCOPE`.
  12. **Residual and reclassification.** An accepted partial foundational workstream marks its delivered rows `DEMONSTRATED` and records every remaining Build Now obligation of the same section or contract as `ASSIGNED TO LATER MISSION` or `IN SCOPE — NOT DEMONSTRATED`. **Technical incompleteness (difficulty, partial foundation, missing dependency, incomplete implementation, add-on status, an older label) is never a right to reclassify or defer;** the row stays `IN SCOPE`, marked partial or blocked, and the Founder decides (T7 or T8).
  13. **Calibration.** The per-contract row volume is unknown. On `SB-P-1.12` the Stage 2 record states the row count and effort per contract for Mission Control; tuning that would loosen a rule needs Founder approval; no effort saving is claimed.
- **Authority impact:** no authority transfers. Every actor's discretion over an approved requirement is removed; the Founder's decision ownership over classification, deferral and scope is made explicit and enforceable; Mission Control gains completeness checks.
- **Security impact:** positive. Permission, isolation, confirmation-binding, denial and privacy requirements are rows, so dropping one is a visible finding rather than an unnoticed omission.
- **Compatibility risk:** medium. It adds Stage 2 effort proportional to the contracts advanced (risk R-14; row volume and cost are unknown and unmeasured; the reference-not-copy and granularity rules in items 10 to 12 exist to limit repetition), and it must be adopted consistently in PF-10, IE-11, IE-12, BP-09, IVP-01, RG-01 and RG-02. Contracts are unchanged. Existing missions are unaffected.
- **Founder approval before mutation:** Yes (Package A, decision D-11). It implements a Founder requirement and is independent of DG-1 and DG-2.

### 3.2 Elaboration template — `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md`

All items are subordinate to Source 18 (§2 of Source 18; template §20 requires Mission Control approval and a new version). Because behavior changes, Founder approval is requested for the whole package.

#### PF-01 — ID and change log (Package C for the missing row; Package A for 1.4)

- **Sections:** header lines 5–13; §21 lines 778–784.
- **Current problem:** Template ID is `SB-P-PFEW-1.3` but the change log ends at 1.2 `ACTIVE`; PR #598 changed the file on 2026-09-18 `[G]`.
- **Proposed behavior:** ID `SB-P-PFEW-1.4`; mark 1.2 superseded; add a 1.3 row (verification wording aligned to Source 18 v1.1, reconstructed from PR #598 and marked as such) and a 1.4 row.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Mission Control for the 1.3 row; Founder with the package for 1.4.

#### PF-02 — Purpose and mission variables

- **Sections:** §1 lines 17–32; §2 lines 36–49.
- **Current problem:** variables cover ID, name, context, paths and source list only; there is nowhere to bind the mission to approved truth or to declare scope flags.
- **Proposed behavior:** add rows: contracts advanced and View identifiers, delegated contracts in scope, Build Plan section, intake baseline SHA, **FCTM path and per-contract blob SHAs**, dual-intake sources, workstream register, delivery, migration and production scope flags (default `NOT AUTHORIZED`), Founder-reserved scenarios source.
- **Authority impact:** none. **Security impact:** default-deny flags present from the start. **Compatibility risk:** low; earlier copies of the template are unaffected.
- **Founder approval before mutation:** package approval.

#### PF-03 — Roles

- **Sections:** §3 lines 53–121.
- **Current problem:** §3 makes Codex responsible for Founder-led discovery and Blueprint drafting and says Codex shall "conduct a structured dialogue with the Founder" (lines 71 and 79); Claude Code has separate Builder and Engineering phases; Lovable is the sole builder.
- **Proposed behavior:** mirror S18-03. The "Codex" subsection becomes **"Definition Actor"**: the actor Mission Control appoints (Codex, Claude Code or another authorized actor), with the same source-fidelity duties the template gives Codex today (read approved sources, separate confirmed truth from derived constraints and unresolved questions, never invent missing decisions). The structured dialogue is conditional and runs only for triggering items, conducted by the actor Mission Control designates. Claude Code owns the integrated review and may be an authorized builder; Lovable is one authorized builder.
- **Authority impact:** mirrors Source 18. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### PF-04 — Source pack, ingestion, extraction

- **Sections:** §5 lines 144–166; §6 lines 170–186; §7 lines 190–226.
- **Current problem:** a manual generic source pack is placed in the Codex workspace; extraction is repeated per mission.
- **Proposed behavior:** replace the source pack with the Intake Pack, naming the in-scope contracts at their intake blob SHAs; Phase A becomes reading those contracts, the Build Plan §10 to §12 and §16 material and the dual-intake sources; Phase B becomes the five-part Truth Pack (FCTM, derived constraints, Delta, unresolved items and conflicts, Intake Record). §7.1 (Confirmed Product Truth) is satisfied by the FCTM; §7.2 (Derived Constraints) and §7.3 (Unresolved Product Questions) remain. Keep the "never invent an answer" rule (line 210). Throughout §6 to §8 and §10 to §11, "Codex" becomes "the Definition Actor" (S18-03). The FCTM section itself is item PF-10.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### PF-05 — Founder dialogue and decision record

- **Sections:** §8 lines 230–258; §9 lines 262–288.
- **Current problem:** unconditional dialogue and decision record.
- **Proposed behavior:** the dialogue and record run only when Stage 3 is triggered (triggers T1 to T8), only for triggering items, and conducted by the actor Mission Control designates (the Definition Actor or Mission Control itself; Codex is not the default interviewer and no Founder-question sequence runs by default); otherwise a Gate Record `NOT TRIGGERED`, permitted only if the FCTM has no critical-path `UNRESOLVED FOUNDER DECISION` row and no `ESCALATED` row. The record's Decision IDs are cited in the FCTM rows they affect, and every change of build commitment, commercial classification or mission assignment is recorded here (§9 table, "Source Alignment" column: `NEW FOUNDER DECISION`). Keep "no material product decision shall exist only in chat history" (line 288).
- **Authority impact:** Founder decision ownership preserved. **Security impact:** none. **Compatibility risk:** medium; must match S18-07.
- **Founder approval before mutation:** package approval.

#### PF-06 — Drafting rules and stage sequence

- **Sections:** §10 lines 292–321; §11 lines 325–347; "Required Stage Sequence" lines 468–486.
- **Current problem:** drafting is authoring, not assembly; the 17-step sequence encodes unconditional discovery and serial reviews.
- **Proposed behavior:** assembly rules from S18-08; replace the 17-step sequence with the sequence in 02 §2, keeping the canonical Section 20 and 21 headings and the rule that Builder Review receives no numbered heading.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### PF-07 — Review and lock phases

- **Sections:** §12 lines 351–385; §13 lines 517–533; §14 lines 537–551; §15 lines 555–566.
- **Current problem:** Phase F and Phase G are strictly serial.
- **Proposed behavior:** an Integrated Review phase with two recorded dispositions, the S1 to S4 conditions and mandatory parallel specialist triggers; §12 Mission Control's review checklist adds FCTM completeness (02 §16.4) and absence of orphans; §14 Engineering Review records a feasibility and risk finding per `IN SCOPE` row, and a blocked row stays `IN SCOPE` and raises T8; §15 lock freezes the FCTM dispositions, classifications and assignments, and any later change needs a Founder decision. The G1 merge label is part of DG-1; the lock itself already requires human merge today.
- **Authority impact:** mirrors S18-09. **Security impact:** mandatory specialist review preserved. **Compatibility risk:** medium.
- **Founder approval before mutation:** package approval.

#### PF-08 — EIS, package, reports, lifecycle diagram

- **Sections:** §16 lines 570–587; §17 lines 591–728 (package review at line 605; "separate explicit Mission Control mission" at lines 607–609; builder report lines 611–636; completion conditions lines 640–650; lifecycle diagram lines 686–719).
- **Current problem:** "Each document requires separate Mission Control review and lock" (line 605); implementation "requires a separate explicit Mission Control mission" while Source 18 requires a record (lines 607–609); Lovable-specific report and preconditions; diagram fixes the serial chain.
- **Proposed behavior:** package reviewed and locked as a set; authorization is the Implementation Authorization record, which may be recorded with the package lock; builder-neutral report and preconditions; combined evidence and completion package; updated diagram. **Coverage:** §16 EIS carries the FCTM traceability table (EIS requirement to row and back); §17 requires the Engineering Contract to map every `IN SCOPE` row to an obligation and the Verification Checklist to map every `IN SCOPE` row to an item with an evidence class, with no authorization while a row is unmapped; the Formal Completion Report (lines 638–662) carries the Contract Reconciliation and the Experience Verification Matrix.
- **Authority impact:** none; wording aligns to Source 18. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### PF-09 — Completion conditions and reuse

- **Sections:** §19 lines 749–763; §20 lines 767–774.
- **Current problem:** completion conditions presume discovery, decision record and serial reviews.
- **Proposed behavior:** conditions reference the Truth Pack, FCTM completeness, Gate Record, intake record and integrated review: the FCTM was populated, every row has a cited disposition, no `ESCALATED` row remained at lock, and the Blueprint maps every row; reuse instruction unchanged (new version recorded, prior history preserved).
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

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
- **Founder approval before mutation:** package approval (Package A, decision D-11).

### 3.3 Implementation and Evidence template — `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md`

#### IE-01 — ID, opening paragraph, change log

- **Sections:** header lines 5–13; §1 line 34 (long paragraph); no change log exists.
- **Current problem:** no version history; the paragraph names the Stage 19 actor and gates but not builder neutrality, work packages or the new record classes.
- **Proposed behavior:** `SB-P-IVEW-1.2`; add a change log (1.1 reconstructed from PR #598, marked as such; 1.2); update the paragraph.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Mission Control for the log creation (Package C); Founder with the package for 1.2.

#### IE-02 — Mission variables

- **Sections:** §2 lines 38–58.
- **Current problem:** single "Builder" row; no workstreams, environments, scope flags, CI baseline or verification plan.
- **Proposed behavior:** add workstream register, authorized builder per workstream, environments, delivery, migration and production flags (default `NOT AUTHORIZED`), CI baseline, verification plan, runtime plan, checkpoint plan, **locked FCTM path and baseline SHA with the rows assigned to each workstream**; builder-neutral artifact names.
- **Authority impact:** none. **Security impact:** default-deny fields present. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### IE-03 — Roles and evidence capturers

- **Sections:** §3 lines 62–137.
- **Current problem:** Claude Code is limited to documents and "test engineering or corrective engineering when specifically authorized" (lines 92–102); Lovable is the builder.
- **Proposed behavior:** authorized builders per workstream, including Claude Code; independence matrix; evidence capturer list keeps its provenance rule.
- **Authority impact:** as S18-03. **Security impact:** independence preserved. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### IE-04 — Entry conditions and Phases A–C

- **Sections:** §5 lines 160–172; §6 lines 176–199 (line 197: "locked before the Builder Prompt is locked"); §7 lines 201–223; §8 lines 225–253.
- **Current problem:** three documents are authored and locked sequentially (B-03).
- **Proposed behavior:** authored and reviewed as a set; remove the contract-before-prompt lock rule; one Mission Control review; "no package before both locks" stays.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### IE-05 — Completion Report template

- **Sections:** §9 lines 255–287.
- **Current problem:** template list omits the Experience Verification Matrix that Build Plan §13 makes mandatory (C-04), and has no reconciliation of the report against the approved feature contracts.
- **Proposed behavior:** add the matrix (columns and statuses from Build Plan §13) **and a Contract Reconciliation section: for every contract advanced, one line per FCTM row with status `DEMONSTRATED` (evidence class and path, verifier result, runtime evidence), `DEMONSTRATED — CARRIED FORWARD (<original evidence>)`, `IMPLEMENTED — NOT DEMONSTRATED`, `PARTIALLY DEMONSTRATED — <what remains>`, `NOT IMPLEMENTED`, `ASSIGNED TO LATER MISSION`, `DELEGATED`, `OUT OF BUILD SCOPE`, `NOT APPLICABLE` or `DEFERRED WITH FOUNDER DECISION <ID>`; per contract, the count and list of Build Now requirements not demonstrated by this mission; and an explicit separation of the states committed, implemented, merged, migrated or configured, deployed, runtime-verified, independently verified, accepted and globally complete (Phase 1 guide §4)**; add the combined manifest-first evidence and completion package; keep the distinctions between implementation, verification, evidence and acceptance. The template's existing "implementation complete; verification complete; evidence complete; accepted; non-blocking follow-up; unresolved release-blocking defects" list (lines 278–285) gains "requirement demonstrated" and "requirement not demonstrated".
- **Authority impact:** none. **Security impact:** ensures denial and permission behaviour is reported. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### IE-06 — Implementation authorization

- **Sections:** §10 lines 289–305.
- **Current problem:** field list omits environments, CI baseline, migration and production scope, verification plan, expiry.
- **Proposed behavior:** the expanded field set (02 §7.3), including the FCTM reference and Mission Control's mapping-completeness statement; may be recorded together with the package lock. No authorization while an `IN SCOPE` row is unmapped.
- **Authority impact:** mirrors S18-11. **Security impact:** positive. **Compatibility risk:** medium for missions authorized after activation only.
- **Founder approval before mutation:** package approval.

#### IE-07 — Builder implementation, evidence directory, provenance

- **Sections:** §11 lines 307–331; §12 lines 335–370; §13 lines 372–432 (test evidence "raw output" at line 427).
- **Current problem:** no workstream or checkpoint concept; test evidence requires raw output rather than a CI run identity; no transfer or migration evidence fields.
- **Proposed behavior:** checkpoints, canonical-transfer record, CI run and checkout SHA as acceptable test evidence (`SB-IV-1.0` §6), migration evidence fields (target identity check, ledger check, grants and RLS check), evidence index as manifest.
- **Authority impact:** none. **Security impact:** stronger environment identity evidence. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### IE-08 — Checklist execution, report update, review, corrective work

- **Sections:** §14 lines 436–452; §15 lines 456–471; §16 lines 475–497; §17 lines 501–528.
- **Current problem:** "Corrective Missions" repeat a full loop (§17 lines 520–528).
- **Proposed behavior:** Corrective Authorization and the finding-scoped cycle with carry-forward and escalation (S18-15). §14 checklist results and §15 report updates are recorded per FCTM row. §16 Mission Control's outcome `ACCEPTED WITH NON-BLOCKING FOLLOW-UP` cannot cover a non-demonstrated `IN SCOPE` row, consistent with line 451 ("cannot be downgraded to Follow-up without Mission Control approval"), which is extended to require a Founder decision. §17 a correction never removes or defers a row.
- **Authority impact:** none. **Security impact:** see S18-15. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### IE-09 — Runtime observation and acceptance conditions

- **Sections:** §19 lines 549–563; §20 lines 567–583.
- **Current problem:** no split between Founder-reserved and delegable runtime checks; acceptance conditions omit the matrix and the release boundary.
- **Proposed behavior:** mirror S18-13 and S18-16; acceptance conditions add: the matrix and the Contract Reconciliation are accurate; **every `IN SCOPE` row is `DEMONSTRATED` or covered by a recorded Founder decision**; the Global Product Completion View was updated from demonstrated completion only; and acceptance is not release or deployment. Runtime evidence names the FCTM row IDs exercised.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### IE-10 — Reusable instruction and completion gate

- **Sections:** §23 lines 633–658; §24 lines 662–680.
- **Current problem:** the checklist lists separate approvals and locks for each document (lines 669–671).
- **Proposed behavior:** package-set lock; add authorization fields, scope flags, verification plan and the FCTM reference to the reusable instruction and the gate checklist; add checklist boxes "FCTM locked", "every `IN SCOPE` row mapped to an obligation and a checklist item" and "no orphan obligation".
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval.

#### IE-11 — FCTM in the entry conditions, contract, prompt and checklist (new)

- **Sections:** §5 Entry Conditions lines 160–172; §6 Engineering Contract lines 176–199; §7 Builder Prompt lines 201–223; §8 Verification Checklist lines 225–253 (the 13-item list at lines 233–247).
- **Current problem:** entry conditions require locks but not a mapped requirement set. The Engineering Contract translates the Blueprint and EIS "into a builder-facing implementation contract" without a rule that every approved requirement in scope is carried into it. The checklist's 13 sections (locked authority, repository, backend, frontend, database, security and RLS, validation, concurrency, performance, automated testing, evidence, completion, final acceptance) have no section verifying coverage or drift, although "every checklist item shall be objective, traceable, and evidence-backed" (line 249).
- **Proposed behavior:** §5 adds "the FCTM is locked and every `IN SCOPE` row is mapped to an obligation and a checklist item". §6 requires the contract to map every `IN SCOPE` row to at least one obligation and to state what is out of scope as "still committed / not in this mission". §7 requires the prompt to list each workstream's rows and to prohibit building behaviour outside them. §8 inserts a new checklist section **"Product Truth coverage and drift verification"** before "Final acceptance statement" (which becomes item 14): row-to-item completeness, classification and assignment integrity, orphan detection, and named negative-path items for permission, isolation and denial rows. Every item carries its row ID and a planned evidence class. `ALREADY DEMONSTRATED` rows map to a regression or no-change item that cites the earlier evidence and the Delta impact check; they are never assumed `PASS`. Row text is referenced by ID and never restated.
- **Authority impact:** none; ownership of the three documents is unchanged. **Security impact:** positive: negative-path items for permission, isolation and denial rows are mandatory. **Compatibility risk:** low for new missions; existing checklists are locked history.
- **Founder approval before mutation:** package approval (Package A, decision D-11).

#### IE-12 — Builder conduct, evidence indexing, Mission Control review and boundaries (new)

- **Sections:** §11 lines 307–331 ("The builder shall not"); §12 lines 335–370 and §13 lines 372–432 (evidence directory and provenance); §16 lines 475–497 (Mission Control review); §22 lines 613–629 (Permanent Governance Boundaries).
- **Current problem:** the builder "shall not" change product truth (line 324) but nothing forbids omitting, deferring or simplifying an authorized requirement, or implementing behaviour outside the authorized set; evidence is indexed by artifact and checklist obligation, not by requirement; Mission Control's review list has no coverage item.
- **Proposed behavior:** §11 adds to "shall not": omit, defer, simplify or reclassify an authorized row, and implement behaviour that maps to no authorized row; the builder raises T7 or T8 through Mission Control instead. §12 and §13 add FCTM row IDs to the evidence index ("checklist obligation supported" becomes "checklist obligation and FCTM row supported"). §16 adds "requirement coverage and reconciliation" to Mission Control's review and adds the outcome rule that a non-demonstrated `IN SCOPE` row cannot be accepted as a follow-up without a Founder decision. §22 adds: no Part Two workflow may silently omit, defer, simplify, reclassify or expand an approved requirement.
- **Authority impact:** removes builder discretion over approved requirements; Founder decision ownership is explicit. **Security impact:** positive. **Compatibility risk:** low.
- **Founder approval before mutation:** package approval (Package A, decision D-11).

### 3.4 Build Plan — `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`

The direction (nine missions, product outcomes, scenarios, unresolved decisions, §5.1, §5.4 examples, §5.5, §15, §16) is unchanged. Only the operational baseline moves.

#### BP-01 — Header

- **Sections:** lines 1–12.
- **Current problem:** the status block records 2026-09-12 only.
- **Proposed behavior:** add a line `Operational baseline revision: <date> (SB-GOV-PRODUCT-EXEC-1.0)`. Keep "NOT A FEATURE CONTRACT — NOT A 26TH FEATURE — NOT IMPLEMENTATION AUTHORIZATION".
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes (Founder-approved artifact).

#### BP-02 — §5.2 CI gate

- **Sections:** §5.2 lines 161–167.
- **Current problem:** says the automatic pull-request workflow "historically runs the Markdown Quality Gate rather than a full application build/lint/test gate" and that `SB-P-1.12` "must establish" one (C-02). Fast Gate and Full Assurance exist (closed 2026-09-16).
- **Proposed behavior:** retitle as CI baseline maintenance. `SB-P-1.12` keeps Fast Gate green at every checkpoint, runs Full Assurance where path-triggered, extends tests for its own authority and isolation obligations, and surfaces (does not decide) whether Fast Gate becomes a required check. Remove "must establish".
- **Authority impact:** none. **Security impact:** prevents redundant work and a false sense of blocking coverage (O-01). **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### BP-03 — §5.3 and §5.4 topology and planning

- **Sections:** §5.3 lines 169–181; §5.4 lines 183–191.
- **Current problem:** describes divergence as a past risk; topology is now settled and recorded.
- **Proposed behavior:** state the current topology (02 §11.5) with source and date; keep "A canonical GitHub merge alone must never be treated as proof that production contains the accepted application"; add that delivery sync, publication and production migrations are release actions needing separate authorization, and that needs are declared at Stages 1 and 6–7.
- **Authority impact:** none. **Security impact:** positive. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### BP-04 — §10.1 required work areas

- **Sections:** §10.1 line 400.
- **Current problem:** lists "automatic build/lint/test CI gate" as required work.
- **Proposed behavior:** replace with "CI baseline maintained and extended for this mission's authority and isolation obligations". Scenarios A and B (lines 424–430) unchanged.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### BP-05 — §13 Experience Verification Matrix

- **Sections:** §13 lines 859–880.
- **Current problem:** the matrix is required in the Completion Report but not seeded earlier, "Founder-reserved" is undefined, and the matrix covers only experience anchors, leaving the rest of each contract without a completion reconciliation.
- **Proposed behavior:** add rules: the matrix is seeded at Stage 4 from §10 scenarios; Founder-reserved scenarios are the §10 Founder Runtime Verification scenarios plus any anchor Mission Control designates and are locked at Stage 8; **the matrix is the experience subset of the Contract Reconciliation, which covers every FCTM row of every contract advanced, and both cite row IDs**. Rules 1 to 8 unchanged; rule 8 ("A later mission cannot use that deferral to erase accountability for the earlier portion") is cited as the basis of residual carry-forward.
- **Authority impact:** Founder retains product-experience verification. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### BP-06 — §14 Source 18 execution discipline

- **Sections:** §14 lines 884–916.
- **Current problem:** restates a stage list that omits conditional and combined stages and would drift from Source 18.
- **Proposed behavior:** replace the list with a pointer to the current Source 18 lifecycle and state the no-rediscovery, **Product Truth coverage (FCTM)** and dual-intake rules; keep the four closing statements (no self-approval; merge is not acceptance; green CI is not acceptance; tool access is not authority).
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### BP-07 — §17 future-mission inputs

- **Sections:** §17 lines 988–990.
- **Current problem:** input list omits institutional learning, the completion view, the requirement-level accounting and topology verification.
- **Proposed behavior:** add current validated OLE learning and the Phase 1 guide (dual intake, verbatim rule), the Global Product Completion View, **the mission's Feature Coverage and Product Truth Traceability Matrix built from the full text of the relevant contracts**, and freshly verified delivery topology. The existing formula ("current Product Truth + this plan + relevant mature feature contracts + verified current repository/runtime state + only the unresolved Founder decisions relevant to that mission") is kept and made verifiable by the FCTM.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes.

#### BP-08 — New §19 Operational Baseline

- **Sections:** new §19 after §18 (before "Final Principle", line 1017).
- **Current problem:** operational facts are scattered across closure records.
- **Proposed behavior:** dated section with CI facts, topology, verification protocol status, OLE state (17 mission-scoped promotions; backfill not verified complete), migration authority state, the state of the Global Product Completion View (no contract yet proven complete, View §6), and early-gate status as verified at that date (§5.1 still open in the repository, §5.2 superseded). States it authorizes nothing and is superseded by later fresh verification.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low; dated, so staleness is visible.
- **Founder approval before mutation:** Yes.

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
- **Founder approval before mutation:** Yes (Package A, decision D-11).

### 3.5 Communication and Handover Protocol — `communication/AI_Communication_and_Handover_Protocol.md`

#### CP-01 — Version, status, change log (Package B with the changes)

- **Sections:** header lines 1–14; Protocol Change Log lines 663–674; closing line 678.
- **Current problem:** Version 1.0.
- **Proposed behavior:** Version 1.1 with an appended log row (append-only, line 674); activation control line updated.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low; `communication/README.md` line 83 cites "Version 1.0" (CR-03).
- **Founder approval before mutation:** Yes.

#### CP-02 — Required repository intake

- **Sections:** §5 lines 71–83.
- **Current problem:** the intake list does not include institutional learning for Product Missions.
- **Proposed behavior:** add an item: for a Product Mission, the intake record required by Source 18 §3.1.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes (Package A).

#### CP-03 — Communication structure and record updates

- **Sections:** §6 lines 85–104; §7 lines 106–118.
- **Current problem:** §7 requires stage report, decision log, handover log and README update "before handover" at every handover.
- **Proposed behavior:** Stage Ledger entry at each stage completion; handover records at owner change and at gates; substantive stage reports live in the mission record; live files remain a pointer. **Refinement requests and Mission Control review comments may be recorded as comments on the open pull request that carries the artifact, with fixes as new commits on the same pull request, so no separate authorization pull request is needed per round (fail-closed rule FC-3, S18-22). The merged pull request is the record.** This needs neither DG-1 nor DG-2.
- **Authority impact:** none. **Security impact:** none; audit trail preserved by the Ledger and commit identity. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes (Package A).

#### CP-04 — Mission-branch model, PR rules, PR handover — DECISION GATE DG-1, NOT APPROVED

> Held pending a Founder decision, together with S18-18.

- **Sections:** §8 lines 120–152; §12 lines 226–242; §24 lines 379–397.
- **Current problem:** the model authorizes a pull request as the vehicle for verified mission work without saying a stage does not need its own.
- **Proposed behavior:** add PR-1 to PR-6 (02 §3.1): draft PR permitted for CI; human merge at gates G1 to G5 by default; PR handover record adds the Stage Ledger extract and Decision Provenance table.
- **Authority impact:** see S18-18. **Security impact:** see S18-18; protected-`main` pull-request workflow and human merge unchanged. **Compatibility risk:** medium; must be approved with S18-18.
- **Founder approval before mutation:** **Yes, and it is an open decision** (Package B, D-01 and D-02a). Held until the Founder decides.

#### CP-05 — Explicit authorization wording and Git authority expiry (exact text) — DECISION GATE DG-2, NOT APPROVED

> The Git authority granted to publish this draft is a narrow four-file grant. It is not evidence for, and does not anticipate, this change.

- **Sections:** §16 lines 270–282; §21 lines 336–351 (the bullet at line 340).
- **Current problem:** authority "expires when the authorized stage is completed" (line 340), so every stage needs new authorization (B-03).
- **Proposed behavior:** §16 gains: "Mission Control may authorize a work package: an ordered set of stages or workstream steps under one instruction, naming the repository, branch, exact authorized paths, stop conditions and an expiry. Authority under a work package expires on any event in Section 21." §21 line 340 changes from `- the authorized stage is completed;` to `- the authorized stage or work package is completed, or a Mission Control-recorded expiry date passes;`. Every other expiry bullet (revocation, pause, closure, scope or branch change, locked-text change, unrelated changes, validation failure, conflict, non-fast-forward, repository or authentication change) is unchanged.
- **Authority impact:** Git authority lasts longer per authorization but stays bounded by named paths, stop conditions, expiry and every existing event.
- **Security impact:** this broadens the window in which an AI may commit and push. Mitigations: explicit path list, expiry date recommended for every work package, no push to `main`, no self-merge, exact-file staging, secret checks unchanged.
- **Compatibility risk:** low mechanically; the mirrored `AGENTS.md:203` (AG-02) must change in the same package. Separable from DG-1.
- **Founder approval before mutation:** **Yes, and it is an open decision** (Package B, D-02b). Held until the Founder decides.

#### CP-06 — Closure, archive and housekeeping

- **Sections:** §26 lines 428–537; §27 lines 539–630.
- **Current problem:** closure duties are defined here and in `communication/README.md` but not in Source 18; no explicit order relative to OLE disposition, feature-level completion evaluation and residual carry-forward.
- **Proposed behavior:** §26 references Source 18 Stage 24 as owner of the closure gate and states the order (acceptance merged and verified; closure record; OLE disposition; feature-level completion evaluation and residual carry-forward; archive). The Global Product Completion View is updated at Stage 23 acceptance (View §12), not here, and the archive preconditions add that the residual carry-forward is recorded. §27's sentence that an authorization instruction may cover a work package is part of DG-2 and is held with it. The wording that live files are a transient pointer during a Product Mission restates existing Protocol §27 and needs no gate. The rest of CP-06 does not depend on either gate.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes (Package A).

### 3.6 Communication README — `communication/README.md`

#### CR-01 — Stale verification-protocol status (Package C)

- **Sections:** "Independent Verification Efficiency Protocol", line 127.
- **Current problem:** "`SB-P-1.12` remains inactive until `SB-GOV-IV-1.0` closes cleanly." `SB-GOV-IV-1.0` closed via PR #603 (`f3d4869`).
- **Proposed behavior:** record that `SB-GOV-IV-1.0` closed via PR #603 and that `SB-P-1.12` remains not activated pending separate Mission Control activation.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** none.
- **Founder approval before mutation:** No. Mission Control approval is sufficient (factual correction).

#### CR-02 — OLE handoff and closure sequence (Package A)

- **Sections:** "Mandatory OLE Learning Handoff Before Mission Closure", lines 133–162.
- **Current problem:** the rule lives only here (C-03); it does not say promotion review is non-blocking.
- **Proposed behavior:** point to Source 18 Stage 24 and gate 11 as the governing location; keep the two permitted states (handoff initiated, or explicit no-reusable-learning record) and the deferral of Stage 4B (Issue #590); state that promotion review does not block closure or activation of the next mission; align the closure sequence diagram to the Stage 24 order, adding the feature-level completion evaluation and residual carry-forward step after the OLE disposition.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes (aligns a standing Mission Control rule to a Founder-approved source).

#### CR-03 — Protocol version and live-file role (dependent on CP-01)

- **Sections:** "Historical Proposal Containment" line 83; "Live Communication Rules" lines 87–111.
- **Current problem:** line 83 names "Version 1.0" as current authority; nothing says live files are a pointer during a Product Mission.
- **Proposed behavior:** update the version reference; add one sentence that during a Product Mission the live pair points to the mission record where stage reports live.
- **Authority impact:** none. **Security impact:** none. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes with CP-01 (Package A).

### 3.7 Migration Authority Index — `docs/migration/README.md`

#### MG-01 — Default-deny execution rule (exact text)

- **Sections:** "Default-Deny Execution Rule", lines 13–26; "Status Taxonomy" line 36.
- **Current problem:** execution requires "a new, current, explicit Founder- or Mission Control-authorized mission" (line 15). It has no concept of authority held for a workstream of a Product Mission, so the rule and `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md` would read as a stop condition (C-10).
- **Proposed behavior:** replace the lead-in with: "A migration may be executed only through a new, current, explicit authorization: either a new Founder- or Mission Control-authorized mission, or a Migration Execution Authorization (MX) issued for an identified workstream of a Product Mission under Source 18. The authorization must identify:" then the existing eight elements, plus four more: (9) the SHA-256 of each SQL file and the `main` commit it comes from; (10) the recorded output of a pre-execution check proving the target environment and project reference; (11) an executor who is not the Stage 19 verifier for that workstream; (12) a single-use expiry. Add: "No Blueprint, EIS, package, Implementation Authorization, acceptance, merge or completed mission is an MX. An MX is effective only when merged to `main` by a human. A production MX requires Founder approval." The final paragraph (lines 26–27) is unchanged. In the taxonomy, "REQUIRES CURRENT EXPLICIT MISSION AUTHORITY" becomes "… MISSION OR MX AUTHORIZATION".
- **Authority impact:** defines a second qualifying vehicle for the same authority; requirements increase (four added elements), Founder approval is required for production, and no existing artifact becomes executable.
- **Security impact:** strengthens default-deny: target identity proof, file integrity binding, executor and verifier separation, single use. The two SB-P-1.11 GC-40 incidents were an execution-method limitation and a ledger bookkeeping error, which items in MG-02 address.
- **Compatibility risk:** medium. It must ship with AG-01. CLAUDE.md and CHATGPT.md wording is CONDITIONAL (CL-01, CG-01). It does not depend on DG-1 or DG-2: an MX is effective only when a human merges it, which is today's model.
- **Founder approval before mutation:** Yes (Package B, decision D-06). Held with the rest of Package B until the Founder decides.

#### MG-02 — New section: MX record and lifecycle

- **Sections:** new section after "Default-Deny Execution Rule" (after line 26).
- **Current problem:** no standard record; each production migration in SB-P-1.11 needed ad hoc Mission Control decisions (GC-39, GC-40, GC-40A).
- **Proposed behavior:** define the MX record fields (02 §11.3), the standard method (repository wrapper `npm run supabase:test` and `supabase:production`, never a bare CLI), the requirement to state how a single migration is isolated and how the ledger is checked afterwards, rehearsal on the isolated test project matched to the real trigger path, the post-execution check set (ledger equality, effective grants and RLS, independent confirmation), and that the MX is spent on execution or window end. The "Environment-Specific Historical Migrations" section (lines 75–81) is unchanged.
- **Authority impact:** none beyond MG-01. **Security impact:** removes ad hoc execution methods. **Compatibility risk:** low; new missions only.
- **Founder approval before mutation:** Yes (Package B).

#### MG-03 — SQL count and evidence-based coverage (Package C, Mission Control confirmation needed)

- **Sections:** `supabase/migrations/**` family row line 55; "SQL History Boundary" line 85.
- **Current problem:** both state twelve files; 24 exist. Files 13 to 21 (nine SB-P-1.11 and SB-REL era files dated 2026-08-06 to 2026-08-30) have no row; files 22 to 24 have rows. Mission Control's review requires reconciliation against the actual GC-40 and current-environment evidence, without marking any migration production-applied by inference and without inferring executable authority from a ledger.
- **Proposed behavior:** correct the count to 24 as of the baseline and add file-by-file rows, each stating **only what a cited record shows**, with the record, its date, and the sentence "point-in-time; current ledger not re-verified". The evidence found (01 §3.7):
  - **Files 13 to 16:** evidenced by the GC-39 readiness report `report1.181` §4 (2026-08-28) and by the Stage 19 report's production ledger output (line 209); file 15 also by archived `report1.67` (`db push` execution), with an unresolved remote-name divergence noted in `report1.181`.
  - **Files 17 to 20:** the GC-40 four-migration package, per `docs/implementation/SB-P-1.11/evidence/gc40-production-migration-reconciliation.md` (reports `report1.182` to `report1.187`), including the `GC-40A` history repair for file 17.
  - **File 21 (`20260830120000…anon_privilege_hardening`):** **no production-application record found**; its header describes preparation and test validation. Row text: `NOT EXECUTABLE — PRODUCTION APPLICATION UNVERIFIED`.
  - Every row keeps the README status `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` (or the file-21 wording above). **Evidence of application is never executable authority** (default-deny, MG-01).
  - The `20260724170000` (file 11) discrepancy between the continuity record §17 and the Stage 19 ledger is left for Mission Control to reconcile (C-20).
  - A current read-only ledger comparison for production and test would settle currency but requires its own explicit authorization and was not performed.
- **Authority impact:** none; default-deny already covers unclassified files, and no row creates executable authority. **Security impact:** removes a misleading scope count and replaces an inference risk with cited evidence. **Compatibility risk:** none.
- **Founder approval before mutation:** No. Mission Control decides whether to accept these records as the basis for the status text; Package B's migration-authority items (MG-01, MG-02, AG-01, S18-19) are separate and remain all-or-nothing within their stated dependencies.

### 3.8 AGENTS.md — `AGENTS.md`

#### AG-01 — Migration authority wording (exact text)

- **Sections:** line 29.
- **Current problem:** "execution requires a new explicit mission naming the exact package, environment, actor, scope, safeguards, and reporting workflow." A workstream-held MX would trigger the stop rule.
- **Proposed behavior:** "…execution requires new explicit authorization, either a new mission or a Migration Execution Authorization issued for a Product Mission workstream in the form defined by `docs/migration/README.md`, naming the exact package, environment, actor, scope, safeguards, and reporting workflow. No workstream, Blueprint, EIS, package or acceptance authorizes execution. Ambiguity requires a stop report."
- **Authority impact:** same as MG-01. **Security impact:** the stop rule and non-authorization statement are kept and sharpened. **Compatibility risk:** low.
- **Founder approval before mutation:** Yes (Package B, decision D-06).

#### AG-02 — Git authority expiry (exact text) — DECISION GATE DG-2, NOT APPROVED

- **Sections:** "Git Rules", line 203.
- **Current problem:** "Authority expires when the authorized stage completes or mission, branch, …" mirrors Protocol §21.
- **Proposed behavior:** "Authority expires when the authorized stage or work package completes, a Mission Control-recorded expiry date passes, or mission, branch, scope, commit message, repository, authentication, validation, conflict, fast-forward, or working-tree state changes."
- **Authority impact:** as CP-05. **Security impact:** as CP-05. **Compatibility risk:** low; `CLAUDE.md` and `CHATGPT.md` say only "expires on any governing state change".
- **Founder approval before mutation:** **Yes, and it is an open decision** (Package B, D-02b). Held until the Founder decides.

### 3.9 Canonical Source Set — `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`

#### SS-01 — Operational sources and intake lists

- **Sections:** "Active GitHub Operational Sources for AI Participants" table, lines 72–81; "Codex / ChatGPT Intake" lines 85–92; "Claude Code Intake" lines 94–101.
- **Current problem:** the operational table omits the verification protocol and the two institutional-learning sources; neither intake list reaches them (C-12), so the Founder's rule has no operational entry point.
- **Proposed behavior:** add rows for the Independent Verification Efficiency Protocol and for Product Mission institutional intake (Phase 1 guide and `organizational-learning/promotions/**`, dual intake until Mission Control verifies the backfill complete); add to both intake lists: "For a Product Mission, complete the Institutional Learning Intake Record required by Source 18 §3.1."
- **Authority impact:** none; an index of existing authority. **Security impact:** none. **Compatibility risk:** low, with one open question. "Change Control" (lines 58–66) requires synchronized updates to this manifest, `merge/active/README.md` and the Project HQ package for a substantive amendment. The edited table is stated to sit outside the 20 canonical files, so `merge/active/README.md` needs no change; whether an external Project HQ update applies is a Mission Control decision, and Claude Code cannot perform or claim it.
- **Founder approval before mutation:** Yes.

### 3.10 Independent Verification Efficiency Protocol — `communication/Independent_Verification_Efficiency_Protocol.md` (moved from CONDITIONAL to MUST)

#### IVP-01 — Coverage and drift verification; conforming references

- **Sections:** line 22 and line 30 ("Source 18 v1.1"); §3 Verification pyramid lines 36–49; §4 lines 51–65 (the paragraph at line 63); §5 Builder Verification Packet table lines 71–83; §6 lines 89–101; §7 entry gate lines 105–109; §8 lines 113–120 (step 2); §9 lines 124–130 (line 126 "Under current Source 18 Stage 20…"); §13 lines 152–161; §15 risk table lines 179–188.
- **Current problem:** the protocol governs how Stage 19 is performed but has no method for coverage or drift. Step 2 of §8 maps "every locked checklist obligation" to A, B or C, which covers what the checklist contains and cannot detect a requirement that never reached the checklist. The packet (§5) carries no requirement-level status. Without a stated method and budget treatment, coverage checks would be treated as optional under "Codex Not Required".
- **Proposed behavior:** §3 adds a pyramid row for Product Truth coverage (FCTM owned by the Stage 2 owner and Mission Control; verifier performs Class C coverage and movement checks and Class A drift probes on material rows). §4 adds to line 63: the Class C coverage baseline is performed for every Product Mission whatever the Codex classification; classification governs only Class A drift effort. §5 adds a "Coverage" packet row: FCTM path and baseline SHA, per-row builder status, draft Contract Reconciliation, and every change to a disposition, classification or assignment since lock with its Founder Decision ID. §6 adds coverage examples: section-inventory comparison and set-difference checks (Class C), drift probes (Class A). §7 adds to the entry gate: locked FCTM and per-row builder statuses present, else `NOT READY`. §8 step 2 becomes "map every locked checklist obligation **and every FCTM row**". §9 correction packet lists affected rows; a correction never removes or defers a row. §13 maps the coverage findings (`SILENT OMISSION`, `UNAUTHORIZED DEFERRAL`, `UNAUTHORIZED PULL-FORWARD`, `MISCLASSIFIED`, `DRIFT`, `ORPHAN`) onto the existing results and states that a row without evidence is not demonstrated. §15 adds the risk "matrix authored by the verifier" with the control in 02 §16.7. Lines 22, 30 and 126 conform to Source 18 v1.2 and the renamed Stage 20. **No change** to Evidence Class definitions, budget classes, result vocabulary or the mandatory status of Stage 19.
- **Authority impact:** none; the verifier's remit widens, its authority does not. **Security impact:** positive: permission, isolation and denial requirements are checked for presence, not only for correctness once present. **Compatibility risk:** medium: verifier effort increases and budgets must reflect it; `SB-IV-1.0` was activated on PR #598 and this edits an active Founder-approved protocol.
- **Founder approval before mutation:** Yes (Package A, decision D-11).

### 3.11 Global Product Completion View — `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` (moved from NO CHANGE to MUST)

**Why the earlier `NO CHANGE` was wrong.** The View already says Mission Control updates it only from verified evidence and accepted mission state, and that builder-only code, green CI, deployment and merged PRs do not prove completion (§2 rules 4 and 7); it has a Status Vocabulary (§4) and an Update Protocol (§12). Those rules are sound, and the two items below are the narrow gaps that stop them enforcing the Founder's requirement that the view be updated only from demonstrated completion: it works at contract level, has no requirement-level residual accounting, sets no criterion for its most upgrade-sensitive state, and contradicts itself on update timing.

#### RG-01 — Update Protocol: demonstrated-only updates and residual accounting

- **Sections:** §12 lines 273–309 (At Mission Initiation lines 275–285; During Mission Execution 287–289; At Mission Acceptance 291–301; At Mission Closure 303–307); §7 line 193.
- **Current problem:** §12 lists the contract-level fields to update at acceptance (advancing mission, implementation state, acceptance state, dependencies, blockers, next advancement) but not what evidence they must be derived from, and it holds "Exact blocker / gap" as free prose, so a requirement a mission did not demonstrate can disappear from the row. §7 line 193 says "Future Mission Control closure shall update the relevant rows after formal acceptance" while §12 says the update happens "At Mission Acceptance" (C-14). §12 At Mission Initiation asks for the intended delta but not for the requirement-level accounting the mission will carry.
- **Proposed behavior:**
  - **At Initiation:** also record the mission's FCTM path and baseline and the rows inherited as residual from earlier missions for each contract advanced.
  - **During Execution:** unchanged; add that partial demonstration is not an upgrade.
  - **At Acceptance:** update only from the accepted Contract Reconciliation, counting only `DEMONSTRATED` and `DEMONSTRATED — CARRIED FORWARD` rows; derive "Exact blocker / gap", "Dependencies remaining", "Not authorized now" and "Next advancement" from rows that are not `DEMONSTRATED` plus `ASSIGNED TO LATER MISSION` rows, and cite the reconciliation's path in the row; never upgrade from a builder report, merged PR, green CI, deployment, or acceptance with follow-up on a non-demonstrated row; **no status upgrade from a partial mission: progress is recorded in the fact fields only (latest verified advancing mission, dependencies closed and remaining, residual requirements, blockers, next advancement)**; record a downgrade when later drift is found; Mission Control applies or approves the edit and the builder does not.
  - **At Closure:** keep the existing sentence (a mission can be formally completed while the feature remains `IMPLEMENTED BUT INCOMPLETE`) and add that the feature-level evaluation lists the remaining Build Now requirements per contract.
  - **§7 line 193:** replace with a pointer stating rows are updated at acceptance (§12) and evaluated at closure.
- **Authority impact:** Mission Control keeps ownership of the view; its discretion to upgrade a row is narrowed to demonstrated completion. Product Truth, the 25 contracts and classifications are untouched. Founder decision ownership of classification and deferral is unchanged.
- **Security impact:** none directly; reduces the risk of overclaiming that a permission, isolation or denial requirement is met.
- **Compatibility risk:** low. No current row changes state on adoption; only future upgrades are constrained. Existing rows have no requirement-level residual list, so the first mission to touch a contract builds it from the contract text. Other documents citing the "Register" are unaffected.
- **Founder approval before mutation:** Yes (Package A, decision D-12). Mission Control owns the document, but the change implements a Founder requirement and narrows Mission Control's own discretion.

#### RG-02 — Status vocabulary: criteria for the upgrade-sensitive states

- **Sections:** §2 operational consequences lines 40–48 (add a consequence 8); §4.4 Implementation State lines 94–102; §4.5 Acceptance State lines 104–110.
- **Current problem:** `IMPLEMENTED + SUFFICIENTLY ALIGNED` (line 96) has no criterion, so it can be assigned on judgement; `CANNOT CURRENTLY VERIFY` and `IMPLEMENTED BUT MATERIALLY DIVERGENT` are listed without conditions; §4.5 says a mature feature must complete "the governed Product Mission lifecycle and Mission Control acceptance" but not that every applicable Build Now requirement of the contract be demonstrated.
- **Proposed behavior:** §2 adds consequence 8: partial demonstration of a contract never upgrades its feature-level state. §4.4 states the criteria: `IMPLEMENTED + SUFFICIENTLY ALIGNED` only when every applicable Build Now requirement of the contract is `DEMONSTRATED` across the advancing missions, with runtime and independent verification evidence, meeting the contract's own completion gate; `IMPLEMENTED BUT INCOMPLETE` where some, not all, are demonstrated; `IMPLEMENTED BUT MATERIALLY DIVERGENT` where a verified finding shows drift from approved behaviour; `CANNOT CURRENTLY VERIFY` where evidence cannot establish the state (unknown stays unknown). §4.5 states that the default acceptance state changes only when the contract's completion gate is met and Mission Control accepts. **Whether a partial mission may move a feature between the non-terminal implementation values is not decided here (D-15); the strict default is that it may not.**
- **Authority impact:** as RG-01. **Security impact:** as RG-01. **Compatibility risk:** low; the seven existing values are kept and none is renamed.
- **Founder approval before mutation:** Yes (Package A, decision D-12).

---

## 4. CONDITIONAL changes

| ID | File and sections | Condition | Default | Approval |
|---|---|---|---|---|
| RG-03 | Global Product Completion View: §1 line 21 (the evidence question), §5 table header line 116, header (line 1) and file-name terminology | If Mission Control wants the View itself to answer "What evidence supports that implementation state?" (C-16) and to reconcile the "Register"/"View" naming (C-18) | No schema change: the pointer from RG-01 inside "Exact blocker / gap" carries the evidence path. If chosen: add an "Evidence reference" column to the §5 table and one header line stating the file is also called the Global Product Completion View. No rename | Mission Control; Founder informed |
| CL-01 | `CLAUDE.md` line 35 | Applies if AG-01 is approved | Replace the duplicated migration sentence with a pointer to `AGENTS.md` and `docs/migration/README.md`. CLAUDE.md says AGENTS.md takes precedence and it should not duplicate AGENTS rules | Founder, in Package B |
| CG-01 | `CHATGPT.md` line 35 | Same as CL-01 | Same | Founder, in Package B |
| AG-03 | `AGENTS.md` line 27 (intake paragraph) | If Founder wants the Product Mission intake reachable from the universal instruction file | Add one sentence pointing to Source 18 §3.1. Not required, because SS-01 and Source 18 already carry it | Founder |
| PG-01 | Phase 1 guide: header line 4 and §16 (build/lint/test CI listed as future tooling) | If Mission Control wants the guide self-consistent for intake | Annotate the header as designated canonical by the Founder on 2026-09-19 and note that build/lint/test CI now exists. The Stage 2 delta already catches both, so leaving it unchanged is safe | Mission Control; the guide is institutional memory, not lifecycle authority |

## 5. NO CHANGE — reasons that matter

- **Sources 12 and 17.** No contradiction. Source 12 §64 (Founder approval before deployment) and §67 (production migration requires explicit authorization) and Source 17 §A6.3 are compatible with the proposal and are relied on by it. Source 17's metadata (line 13) uses "Source 18" for a superseded Project Continuity file; the number collision is an observation, not a contradiction, and amending it would be stylistic.
- **Branch protection.** Not amended. O-01 (Fast Gate not required) and O-02 (0 required approving reviews) are recorded for a separate Founder decision. The design keeps human merge intact regardless and does not depend on either change.
- **CI workflows and the assurance baseline.** Already describe Fast Gate and Full Assurance. Only wording in the Build Plan and lifecycle changes.
- **EOS workflows.** Their "Stage 10 — GitHub Actions" and "Stage 11" numbering is unrelated to Source 18 stages, and they contain no stage-scoped expiry sentence.
- **The 25 feature contracts, the Feature Library README and the Coverage Matrix.** The FCTM is derived from them and must not change them. The README's Founder Build Commitment Rule and Anti-Drift Rule and the Coverage Matrix's delegation map are relied on as written. If the FCTM work finds an ambiguity or conflict inside a contract, the route is a Founder decision (T2 or T8), not a contract edit by this mission.
- **`CLAUDE.md` and `CHATGPT.md` responsibility lists.** Neither assigns Stage 2 to 4. `CHATGPT.md` lists architecture, planning, prompts, code generation and repository review for Codex; `CLAUDE.md` lists implementation, analysis, refactoring, architecture validation, engineering review and tests. Actor assignment comes from Mission Control's appointment under Source 18, so removing Codex as default Definition Actor needs no edit to either file.
- **Branch protection and every repository setting.** No item in any package mutates them. The live state is presented in 01 §3.4 and options in 02 §18.7 for a separate decision that must be separately authorized (D-10).
- **The View's 25 rows and their values.** Not edited. `RG-01` and `RG-02` change the update protocol and the vocabulary criteria only; no row is upgraded or downgraded by adopting them.

## 6. Approval packaging and activation

| Package | Contents | Founder decision |
|---|---|---|
| **A — Lifecycle, operating model and Product Truth coverage** | S18-01 (version), S18-02 to S18-17, S18-20 (except status string), **S18-21**, **S18-22**, PF-01 (1.4) to **PF-10**, IE-01 (1.2) to **IE-12**, BP-01 to **BP-09**, CP-02, CP-03, CP-06, CR-02, CR-03, SS-01, **IVP-01**, **RG-01**, **RG-02** | D-04, D-05, D-07, **D-11**, **D-12**, **D-13** (Definition Actor), **D-14** (fail-closed model), **D-15** (partial-mission state rule) |
| **B — Authority and security** (contains the open decision gates) | **DG-1:** S18-18, CP-04. **DG-2:** CP-05, AG-02. **Migration authority:** S18-19, MG-01, MG-02, AG-01. **Other:** CP-01, CL-01, CG-01 | **D-01, D-02a** (DG-1); **D-02b** (DG-2); D-03, D-06, D-08 |
| **C — Corrections, no behavior change** | S18-01 (v1.1 row), S18-20 (status string), PF-01 (1.3 row), IE-01 (log creation), CR-01, MG-03 | Mission Control approval sufficient; Founder informed |

**Nothing in Package B is approved, and nothing in Package A or C is either.** DG-1 and DG-2 are explicit Founder decision gates; so are the G3 verified-code-only rule (D-03) and the gate 2 rewording (S18-09). The fail-closed model (S18-22) is what applies if DG-1 is declined. Package B is all-or-nothing **within** its stated dependency groups (DG-1 group, DG-2 group, migration group), not as one bundle. A separate publication authority-precision finding (AP-1, D-16) is recorded in 02 §18.9 and is not a package item. The Git authority granted to publish this draft is a separate, narrow grant for four files and is not evidence for either.

**Coverage set.** S18-21, PF-10, IE-11, IE-12, BP-09, IVP-01, RG-01 and RG-02 implement the Founder's Product Truth coverage requirement and should ship together. They do not depend on DG-1, DG-2 or the migration items. Package A's references to gates G1 to G5, and to the Stage Ledger, are conditional on DG-1; without it the coverage set operates at the existing stage-per-PR cadence.

**Dependencies.** Package A is usable without Package B: stages, gates and records work, but every stage keeps its own Git authorization and pull request. The three A items that reference MX (S18-11 field group, IE-06, S18-19 cross-reference) must then read "migration authorization per `docs/migration/README.md`". Within Package B: **DG-1 items (S18-18, CP-04) ship together or not at all; DG-2 items (CP-05, AG-02) ship together or not at all; DG-1 and DG-2 are separable from each other; the migration items (MG-01, MG-02, AG-01, S18-19) ship together or not at all and depend on neither gate.** If the Founder approves only part, Mission Control must trim this map before the redline stage.

**Activation.** Apply all approved items in one governance change so no document is ever active in a contradictory state (Source 18 §2: a template conflict is not to be resolved silently). Version bumps: Source 18 v1.2, Elaboration template 1.4, Implementation template 1.2, Protocol 1.1. Human merge only. `SB-P-1.12` requires its own activation after this mission closes.

## 7. Verification plan for the amendment package

The author (Claude Code) may not verify it. Under `SB-IV-1.0` §4 a governance or operating-protocol change is not routine documentation.

- **Classification for Mission Control to record:** Package B is authority and security related, so **Codex Required**; Package C fits **Codex Spot Check**; Package A fits **Codex Spot Check** at minimum, and Mission Control may raise the coverage set to **Codex Required** because it edits the verification protocol itself and correlated assumptions are a real risk when the author of the protocol is a same-provider actor. If Codex is unavailable, Mission Control may appoint another eligible actor with a documented separation assessment (§4.9). Claude Code is excluded as author.
- **Checks:**
  1. Markdown Quality Gate, and functional internal links.
  2. Stale-term sweep across the amended set: `Founder Lovable Brief`, `lovable-build-prompt`, `lovable-build-completion-report`, `Corrective Mission`, `SB-P-PFEW-1.3`, `Source 18 v1.1` (where it should now read v1.2), `authorized stage is completed`, `new explicit mission`, `Twelve` and `12` next to SQL. Each hit is resolved or deliberately retained.
  3. Gate-equivalence review using the table below.
  4. Exact-string check that the dual-intake rule appears verbatim wherever it is placed, and that no amended file states or implies the historical OLE backfill is complete.
  5. Authority-diff review of every Git and migration change, including the question "can any actor now authorize itself, or execute in production without a Class 1 record?" (Class A reasoning check, static evidence alone is insufficient).
  6. Hard-boundary checklist: nothing in the diff touches Product Truth, the nine-mission sequence, branch protection, Stage 19 mandatory status, human merge, production controls, or Sources 01, 11, 12, 17 and the contracts.
  7. **Coverage consistency.** The eight dispositions, the ten Contract Reconciliation statuses, the eight trigger names (T1 to T8) and the classification lock are worded identically wherever they appear (Source 18 §3.2, Elaboration template §7.4, Implementation template §5, §8 and §9, Build Plan §13, the verification protocol and the View). Each of the eight Founder refinements has an enforcement point in each of the four named documents, using the §9 table as the checklist.
  8. **No follow-up escape.** No amended document allows `ACCEPTED WITH FOLLOW-UP` or `ACCEPTED WITH NON-BLOCKING FOLLOW-UP` to cover a non-demonstrated `IN SCOPE` row without a recorded Founder decision.
  9. **View timing.** Source 18 Stage 23, Stage 24, the closure sequence in `communication/README.md` and Protocol §26, and View §7 and §12 all place the view update at acceptance and the feature-level evaluation at closure.
  10. **Decision gates held.** No item labelled DG-1 or DG-2 appears in an activation change unless the Founder has recorded approval of that gate; the coverage set is verified to work without them.
  11. **Definition Actor.** No amended document names Codex as the mandatory or default owner of Stage 2, Stage 3 preparation or Stage 4, or as the default Founder interviewer; every remaining "Codex" reference is a verifier, classification, review or research reference. The role-separation rule appears wherever the Definition Actor is defined.
  12. **Fail-closed and non-conflation.** No amended document describes a committed branch record as canonical authority; the six FC-6 items are never described as branch-effective; the "prepared together / must wait" table stays inside the current gate order (gates 3, 4, 5 and 8 are not bypassed).
  13. **Vocabulary.** `BUILD LATER` and `ASSIGNED TO LATER MISSION` are defined identically wherever they appear and never used interchangeably; `ALREADY DEMONSTRATED` is never treated as `PASS`; no document permits a status upgrade from a partial mission.
  14. **Migration.** No amended document marks a migration production-applied without a cited record, or infers executable authority from a ledger; every migration-status row cites its record and says it is point-in-time; the production default-deny fields are unchanged.
  15. **Protection.** No item in any package mutates branch protection, rulesets or any repository setting.
  16. Additional stale-term sweep: `Register update` at Stage 24, `four-part Truth Pack`, `Truth Table` (superseded by the FCTM), and "Global Product Completion Register" where the View is meant.
- **After merge:** Mission Control verifies canonical `main`; this mission then follows its own completion condition (OLE disposition, archive, formal closure).

**Gate equivalence (Source 18 §9, current versus proposed)**

| Current gate | Proposed | Equivalent? |
|---|---|---|
| 1 Sections 1–19 approved before Builder Review | Unchanged | Yes |
| 2 Builder Review approved before Engineering Review | Approved before Sections 20–21 are approved or locked | Binding moves from start to approval; Founder decision |
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
| DO-04 Integrated review | S18-09, PF-07 |
| DO-05 Parallel specialist review | S18-03, S18-09, S18-10, PF-07 |
| DO-06 Builder-neutral lifecycle | S18-03, S18-12, PF-03, PF-08, IE-02, IE-03, IE-07 |
| DO-07 Conditional external-tool brief | S18-12 |
| DO-08 Workstreams without new IDs | S18-05, S18-11, IE-02 |
| DO-09 Founder-reserved runtime scenarios | S18-13, BP-05, IE-09 |
| DO-10 Mandatory Stage 19 | S18-14 (unchanged in substance) |
| DO-11 Finding-scoped Stage 20 | S18-15, IE-08, IVP-01 |
| DO-12 Combined Stage 21 and 22 | S18-16, IE-05, PF-08 |
| DO-13 Stage 24 closure package | S18-17, CP-06, CR-02 |
| DO-14 Stage does not require its own PR | S18-18, CP-04 (**DG-1, not approved**) |
| DO-15 Checkpointing | S18-18, CP-03, CP-05, AG-02 (**DG-1 and DG-2, not approved**; the Stage Ledger in CP-03 is independent) |
| DO-16 Migration authority as workstream | S18-19, MG-01, MG-02, AG-01 |
| DO-17 CI baseline wording | BP-02, BP-04, BP-08, S18-19 |
| DO-18 Topology wording | BP-03, BP-08, S18-19 |
| Dual intake (verbatim) | S18-02, PF-04, SS-01, BP-06, BP-07, CP-02 |
| Backfill not claimed, not blocking | S18-02 status line, BP-08, verification check 4 |
| Human merge | S18-18 PR-4, CP-04, unchanged Protocol §13 and §22 |
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

None of the eight refinements depends on DG-1 or DG-2. The dual-intake rule is quoted unchanged.

## 10. Disposition of Mission Control review findings (PR #605)

Source: Mission Control review comment of 2026-09-19, `https://github.com/SmartBusinessv1/smart-business/pull/605#issuecomment-5740574835`. It is design review, not governance approval, a Founder decision or merge authorization. Design text is in 02 §18; evidence is in 01.

| Finding | Disposition | Amendment items | Decision |
|---|---|---|---|
| 1 Stage 2 and Stage 4 actor drift | Codex is no longer the default owner. A Mission Control-appointed Definition Actor owns Stage 2, Stage 3 preparation and Stage 4; role-separation rule added; conditional Founder gate preserved; Codex remains available for review, research and Stage 19 | S18-03, S18-06, S18-07, S18-08, S18-20, PF-03, PF-04, PF-05, PF-10; `CLAUDE.md` and `CHATGPT.md` need no edit (§5) | D-13 |
| 2 Authority speed proposals; fail-closed fallback | DG-1, DG-2, the G3 verified-code-only rule and the gate 2 rewording remain **not approved**. Class 2 redefined as sequencing only and never canonical authority. Fail-closed model added (preparation is not authority; bundled at-risk preparation; one canonical crossing per gate; six items never branch-effective) | S18-22 (new), S18-18 and CP-04 (DG-1), CP-05 and AG-02 (DG-2), CP-03 | D-01, D-02a, D-02b, D-03, D-14 |
| 3 FCTM efficiency and vocabulary | One matrix referenced not copied; refined granularity; `ALREADY DEMONSTRATED` never assumed `PASS` (new status `DEMONSTRATED — CARRIED FORWARD`); `BUILD LATER` (commitment) kept apart from `ASSIGNED TO LATER MISSION` (scheduling); residual Build Now recorded beside an accepted partial workstream; technical incompleteness gives no right to reclassify; row volume stated as unknown with first-mission calibration | S18-21 (items 3, 10 to 13), PF-10, IE-05, IE-11, BP-09 | D-11 |
| 4 Stage 23 and the View | Timing reconciliation kept; acceptance uses the accepted Contract Reconciliation; closure verifies the state; accepted mission progress kept apart from complete feature demonstration; **no status upgrade from a partial mission**; bounded follow-up defined | S18-16, S18-17, RG-01, RG-02 | D-12, D-15 |
| 5 Security and CI as a separate decision | Exact live state presented, including rulesets, required reviews and checks, and bypass actors, before any option. Fast Gate success is not a required merge check. No package mutates protection or any setting | None (no package item); 01 §3.4; 02 §18.7 | D-10 |
| 6 Migration reconciliation | Evidence-based reconciliation against GC-39, Stage 19 and GC-40 records; file 21 unverified; no migration marked applied by inference; no authority inferred from a ledger; current ledger check needs separate authorization; Package B all-or-nothing within its stated dependency groups | MG-03 (rewritten); MG-01, MG-02, AG-01, S18-19 unchanged; C-20 left for Mission Control | D-06 |
| Publication issue | Recorded as authorization-precision finding AP-1; no history rewrite, no force-push; not precedent for DG-2; this revision was published only after Mission Control issued a complete grant including the commit-message clause, which is limited to this revision and does not dispose of D-16 | None (no package item); 02 §18.9 | D-16 |

**Counts after this revision:** MUST 11 files and 71 items (Source 18 22, Elaboration template 10, Implementation template 12, Build Plan 9, Protocol 6, `communication/README.md` 3, migration README 3, `AGENTS.md` 2, Source Set 1, verification protocol 1, View 2); CONDITIONAL 5; NO CHANGE 12 groups. The only new MUST item is `S18-22`.
