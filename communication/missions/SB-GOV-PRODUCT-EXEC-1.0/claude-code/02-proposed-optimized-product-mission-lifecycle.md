# SB-GOV-PRODUCT-EXEC-1.0 — Proposed Optimized Product Mission Lifecycle

**Mission ID:** `SB-GOV-PRODUCT-EXEC-1.0`

**Document:** `02-proposed-optimized-product-mission-lifecycle.md`

**From:** Claude Code — governance / engineering workflow reconciliation specialist

**To:** Mission Control

**Status:** `PROPOSAL — NOT ACTIVE — MISSION CONTROL AND FOUNDER REVIEW REQUIRED`

**Date:** 2026-09-19

**Revision:** base draft published as PR #605 (head `194b9a4b9dfd2ece65a419501fc29b90f8bd85ac`); this revision adds the design addendum in §18 with conforming edits to §2, §3.3, §5, §6.1, §10.2, §12, §14, §15 and §16, and is published to PR #605 under Mission Control's Git authorization for this revision.

> Nothing in this document changes any governing source. It is a design for review. Evidence and bottleneck analysis: [01](./01-current-state-and-bottleneck-analysis.md). Exact file-by-file changes: [03](./03-governance-amendment-map.md). `SB-P-1.12` remains `NOT ACTIVATED`.
>
> **Founder decision gates — NOT APPROVED.** Two proposals in this draft are open Founder decisions and must not be read as approved: **DG-1**, the branch-effective (Class 2) authority-record model and the five-gate merge model that depends on it (§3); and **DG-2**, work-package-scoped Git authority (§3.4). The Git authority used to publish this draft is a separate, narrow grant for four files and is not evidence for either. The Product Truth coverage controls in §16 operate identically whether or not either gate is approved.
>
> **Founder addendum incorporated:** a mandatory Feature Coverage and Product Truth Traceability Matrix (**FCTM**) now runs from intake to completion accounting (§16). The dual-intake rule is unchanged (§4).
>
> **Mission Control review of PR #605 addressed** by the narrow design addendum in §18 (2026-09-19 review comment). That review is design review, not governance approval, a Founder decision or merge authorization. The addendum removes Codex as the mandatory default Stage 2 and Stage 4 actor (§18.2), keeps DG-1 and DG-2 unapproved and adds a fail-closed model (§18.4), refines the FCTM vocabulary and efficiency rules (§18.5), separates accepted mission progress from complete feature demonstration (§18.6), presents the exact live protection state (§18.7), restates the production migration default-deny boundary (§18.8) and records a Git authority-precision finding (§18.9).

---

## 1. Scope and design rules

**Objective:** `FAST + SECURE + TRACEABLE + SCALABLE`, with speed taken only from removing rediscovery, duplication and ceremony, never from removing security or human authority (activation basis, "Mission Control interpretation").

**Founder-approved invariants this design must not weaken**

1. Founder is final product authority; Mission Control orchestrates and accepts.
2. No self-approval and no self-verification.
3. Stage 19 independent verification is mandatory for every Product Mission.
4. Protected `main`, pull-request workflow, human merge.
5. Server/database-side authorization, cross-tenant isolation, execution-time revalidation, negative-path testing, environment identity verification (carried as verification obligations).
6. Production default-deny mutation controls.
7. Claim-specific evidence and runtime verification.
8. OLE learning disposition before formal closure.
9. The dual-intake rule, verbatim (§4).
10. The nine-mission sequence and Product Truth are unchanged.
11. **Product Truth completeness** (Founder addendum). The lifecycle may become faster; Product Truth must not become incomplete. No relevant requirement of the 25 approved feature and foundation contracts, or of the Founder-approved Build Plan, may be silently omitted, silently deferred, moved between Build Now, Build Later, Add-on, Separate Product or Reject, simplified, or allowed to drift, at any stage from intake to completion accounting (§16).

**Design decision:** the 24 stage identifiers are kept as stable audit anchors. Stage 19, `SB-IV-1.0`, OLE records, and 400-odd archived SB-P-1.11 files all cite stage numbers; renumbering would break them for no speed benefit. Speed comes from changing what a stage requires, when stages may overlap, and how they are recorded.

**Reconciling speed with completeness.** The FCTM is an accounting of truth the Founder has already approved. It is not a second discovery and does not reopen decisions. It is what makes "consume approved truth instead of rediscovering it" verifiable: without it, assembling a Blueprint by reference could quietly lose requirements, and a faster lifecycle could ship a materially incomplete product.

## 2. Lifecycle at a glance

Change classes: `KEEP`, `REFRAME` (same purpose, new input/output), `CONDITIONAL`, `PARALLEL`, `COMBINE` (one work package, separate recorded dispositions), `EXPAND`.

| Stage | Proposed name | Class | Owner | Principal record |
|---|---|---|---|---|
| 1 | Mission Initiation and Intake Pack | REFRAME | Mission Control | Intake Pack (§5.1); FCTM opened |
| 2 | Mission Truth and Delta Reconciliation | REFRAME | **Definition Actor** appointed by Mission Control (§18.2); Codex is not the default | Mission Truth Pack: **FCTM populated**, Delta, Institutional Learning Intake Record |
| 3 | Founder Decision Gate | CONDITIONAL | Definition Actor prepares; Founder decides genuine open decisions only | Gate Record: `TRIGGERED` or `NOT TRIGGERED`; reopened by any Product Truth conflict or proposed change |
| 4 | Blueprint Assembly, Sections 1–19 | REFRAME | **Definition Actor** appointed by Mission Control (§18.2) | Blueprint assembled by reference; every FCTM row mapped |
| 5 | Mission Control Product Review | KEEP | Mission Control | Approval of Sections 1–19 |
| 6 and 7 | Integrated Builder and Engineering Review | COMBINE, PARALLEL | Claude Code; specialists in parallel | Builder Review findings; Sections 20–21 |
| 8 | Founder Approval and Blueprint Lock | KEEP | Mission Control with Founder | Lock record — **gate G1** |
| 9 | EIS Creation | KEEP | Claude Code | EIS with specialist findings pre-integrated |
| 10 and 11 | EIS Review and Lock | PARALLEL, COMBINE | Mission Control; specialists in parallel | One disposition; lock in the same record when unrefined |
| 12 | Implementation Package | REFRAME | Claude Code | Three documents authored and reviewed as a set |
| 13 | Package Lock and Implementation Authorization | COMBINE | Mission Control | One record with expanded fields — **gate G2** |
| 14 | External-Tool or Human Brief | CONDITIONAL | Claude Code | Founder Brief, or `NOT APPLICABLE — JUSTIFIED` |
| 15 | Implementation by workstream | REFRAME | Authorized builder(s) | Checkpoint commits |
| 16 | Builder Completion Report and Verification Packet | REFRAME | Authorized builder(s) | Report per workstream |
| 17 | Human Runtime Verification | REFRAME | Founder for reserved scenarios; named human for delegable ones | Runtime findings |
| 18 | Mission Control Runtime Review | KEEP | Mission Control | Disposition; verifier activated |
| 19 | Independent Verification | **KEEP — MANDATORY** | Mission Control-appointed actor (§4.9) | Verification report, including coverage and drift results |
| 20 | Corrective Cycle | REFRAME | Mission Control assigns builder | Finding-scoped loop; no row removed or deferred |
| 21 and 22 | Evidence and Completion Package | COMBINE | Claude Code | Manifest-first evidence; Completion Report with **Contract Reconciliation** and Experience Verification Matrix — **gate G3** |
| 23 | Mission Control Acceptance | KEEP | Mission Control (Founder where required) | Disposition; **Global Product Completion View updated from demonstrated completion only** — **gate G4** |
| 24 | Closure Package | EXPAND | Assigned by Mission Control | Closure, OLE disposition, feature-level completion evaluation, residual carry-forward, archive — **gate G5** |

The FCTM (§16) is carried through every stage: opened at 1, populated at 2, escalated at 3, mapped in the Blueprint at 4, feasibility-checked at 6–7, mapped in the EIS at 9, in the package and Verification Checklist at 12–13, evidenced at 15–18, verified at 19, reconciled at 21–22, and applied to the completion view at 23.

```text
Phase A  Intake and product basis          Stages 1–5
Phase B  Integrated review and lock        Stages 6–8    ── G1  human merge: product authority
Phase C  Specification and authorization   Stages 9–13   ── G2  human merge: execution authority
Phase D  Build and runtime                 Stages 14–18
Phase E  Verification and correction       Stages 19–20  (per workstream where defined)
Phase F  Evidence, acceptance, closure     Stages 21–24  ── G3 verified delivery and evidence
                                                          ── G4 acceptance
                                                          ── G5 closure
```

Compared with SB-P-1.11 (266 merged PRs), the model has five mandatory human-merge gates. G3 may repeat once per workstream where Mission Control authorizes it. This is design intent, to be measured on `SB-P-1.12`, not a forecast.

### 2.1 Revised mandatory gate order (replaces Source 18 §9)

1. Sections 1–19 approval before Builder or Engineering Review.
2. Builder Review findings approved before Sections 20–21 are approved or locked (was: before Engineering Review begins).
3. Blueprint lock before EIS creation.
4. EIS lock before the Implementation Package.
5. Package approval and explicit Implementation Authorization before implementation, **with every `IN SCOPE` FCTM row mapped to an Engineering Contract obligation and a Verification Checklist item**.
6. Builder Completion Report before Founder runtime-review closure.
7. Human runtime findings and Mission Control review before independent verification.
8. Independent verification, **including material coverage and drift**, before the Evidence and Completion Package.
9. Mission Control acceptance before documentation closure, **with every `IN SCOPE` row `DEMONSTRATED` or covered by a recorded Founder decision**.
10. **New:** Institutional Learning Intake Record **and a complete FCTM** approved before Blueprint approval (Stage 5).
11. **New:** OLE disposition recorded before `COMPLETED — FORMALLY ACCEPTED`.

No actor may waive a gate governing its own work.

## 3. Mechanics: Stage Ledger, work packages, checkpoints and PR rules

> **Status of this section: PROPOSAL. DG-1 (§3.1 to §3.3) and DG-2 (§3.4) are open Founder decision gates, not approved.** Nothing here is in force. **Fallback if either is not approved:** the 24 stages, the conditional and combined stages, the FCTM and every control in §16 still apply; the fail-closed operating model in §18.4 applies. It still lets adjacent documentary steps be prepared together and gives roughly one canonical human-merged crossing per gate (about ten to thirteen, a design estimate) without any branch-effective authority; the larger reduction to five gates is what DG-1 would add. The Stage Ledger (§3.2) is useful under either outcome.

### 3.1 Rules (DG-1)

- **PR-1.** A lifecycle stage never by itself requires a separate pull request. Stages are recorded as commits on the mission branch.
- **PR-2.** A human merge to `main` is required at gates G1 to G5 and nowhere else by default.
- **PR-3.** A draft pull request may be opened at first push so the Fast Gate runs (it triggers only on PRs and pushes to `main`). A draft PR is not a merge event.
- **PR-4.** Only the human, or a separately approved mechanism under Protocol §22, merges. No AI merges, approves or self-reviews.
- **PR-5.** Mission Control may require an additional checkpoint PR at any time, for any reason.
- **PR-6.** Implementation code reaches `main` at G3, after Stage 19 records no material blocking failure. `main` therefore holds verified code. Mission Control may authorize earlier per-workstream G3 merges for dependent work. A merge deploys nothing (all AWS workflows are `workflow_dispatch` only; delivery is a separate release action, §11).

### 3.2 Stage Ledger

The mission `README.md` (Source 18 §10 already requires it) gains one table, updated at each stage completion:

| Stage | Disposition | Owner | Artifact | Checkpoint SHA | Decision reference | Date |
|---|---|---|---|---|---|---|

Dispositions: `COMPLETE`, `NOT TRIGGERED`, `NOT APPLICABLE — JUSTIFIED`, `COMBINED WITH STAGE n`. This preserves the per-stage audit trail that PR-per-stage used to provide, in one place, with commit identity.

### 3.3 Two classes of authority record (DG-1: branch-effective authority — NOT APPROVED)

A committed branch record is not approved canonical execution authority. Under DG-1 as proposed, a Class 2 record would do one narrow thing: **permit the next documentary preparation step to begin**. It would confer no authority to lock, authorize, execute, accept or close. Even that is a change to the approved authority model and needs an explicit Founder decision. If it is declined, §18.4 is the fail-closed operating model.

| Class | Examples | What it does |
|---|---|---|
| **Class 1** | Blueprint lock, which locks the FCTM dispositions and classifications (G1); Implementation Authorization, which includes the package lock, the pre-appointed verifier and every production or migration flag (G2); any migration or production authorization; Stage 23 acceptance (G4); Stage 24 closure (G5) | **Canonical authority; effective only when a human merges it to `main`** |
| **Class 2** (DG-1, not approved) | Stage approvals and returns for refinement, EIS review disposition and provisional EIS lock, Stage 18 runtime-review disposition, correction reviews, replacement-verifier decisions | **Sequencing only:** recorded on the mission branch with provenance so the next documentary step may be prepared; becomes canonical only through the human merge of the next gate, and is void if that merge does not happen |

The provisional EIS lock is Class 2 because Stage 12 preparation must be able to start before G2; the package it enables cannot take effect until the human merge at G2. The Blueprint lock is Class 1 because it fixes product authority and every later stage depends on it being canonical.

**Never branch-effective under any model,** whether or not DG-1 is approved: production or migration authority, a Founder Product Truth decision or classification change, the Blueprint lock, build authorization (the Implementation Authorization), acceptance, and closure. Each is Class 1 and effective only when a human merges it to `main`.

Class 2 records are valid only if they name (a) the Mission Control instruction that authorized the phase, (b) the exact artifact SHA reviewed, and (c) the decision. The actor that authored an artifact may transcribe but never originate the decision about it. Each gate PR carries a **Decision Provenance** table so the human merger can confirm every Class 2 record matches a decision Mission Control actually made.

No production, migration or irreversible authority is ever Class 2. No Founder decision, and no change to an approved requirement's classification or mission assignment, is ever Class 2 (§16.5).

### 3.4 Work packages and Git authority (DG-2: broader Git authority — NOT APPROVED)

Today Git authority expires when the authorized stage completes (Protocol §21; `AGENTS.md:203`). Extending it to a multi-stage work package is a security-relevant broadening and is an open Founder decision.

A **work package** is an ordered set of stages or workstream steps authorized by one Mission Control instruction: branch, exact paths, stop conditions, and an expiry. Git authority is scoped to the work package and still expires on every event in Protocol §21 (scope or branch change, unrelated working-tree change, validation failure, conflict, non-fast-forward, authentication or repository change, revocation). Recommended addition: every work-package authorization records an expiry date. Exact wording is in [03](./03-governance-amendment-map.md) items `CP-05` and `AG-02`.

### 3.5 Handover and communication

- Handover records (Source 18 §12) are written when the **owner changes** and at each gate, not at every stage.
- `communication/live/` remains a transient pointer. Substantive stage reports live in `communication/missions/[MISSION-ID]/` and the base pair is reused, as Protocol §27 already requires. Numbered chains stay a non-default option.

## 4. Institutional Learning Intake (dual intake)

**Rule, preserved verbatim from the Founder:**

> Every Product Mission intake must consume both current validated OLE learning and the canonical Phase 1 institutional-memory guide until Mission Control verifies that the historical OLE backfill is complete.

**Status statement that every intake record must carry:** `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`. This design does not claim completion, does not perform the backfill, and does not make it a prerequisite of `SB-P-1.12`.

### 4.1 What "consume" means

The **Institutional Learning Intake Record** is a section of the Stage 2 Truth Pack, prepared by the Stage 2 owner and reviewed by Mission Control at Stage 5 (gate 10). It contains:

1. **Baseline:** `main` SHA and date at intake.
2. **Phase 1 guide:** path, blob or commit identity, the guide's §18 mission-start checklist answered by reference to the Truth Pack, guide sections applied, and any guide statement found stale (a delta item).
3. **OLE promotions:** every record under `organizational-learning/promotions/**` at the intake SHA, listed by promotion ID, each with one disposition: `APPLIED — incorporated in <artifact>`, `ALREADY EMBEDDED IN ACTIVE GOVERNANCE — <cite>`, `INFORMATIONAL`, or `NOT APPLICABLE — <reason>`.
4. **Scope caveat:** all 17 current promotions are `VALIDATED` and `MISSION_SCOPED`. None is `ORGANIZATION_WIDE` or `INSTITUTIONALISED`, so none is a universal rule. A candidate that is not promoted (for example `SB-GOV-IV-1.0` Candidate 06) is not authority.
5. **Backfill status statement** (above).
6. **Conflicts:** where the guide and a promotion, or either and a governing source, disagree, the record surfaces it to Mission Control. Neither source substitutes for the other.

### 4.2 Keeping it cheap

- After the first intake, later missions record only promotions added or superseded since the previous intake baseline, plus applicability to the new mission.
- Line-by-line re-derivation is not required; disposition by promotion ID is.
- The Stage 19 verifier confirms the record exists and is complete (Class C, static), not that its judgements were correct.

### 4.3 Sunset

When Mission Control records that the historical backfill is verified complete, it may separately authorize a simplified rule. That decision is outside this mission.

## 5. Stages 1 to 3 — Intake, truth and the conditional Founder gate

### 5.1 Stage 1 — Intake Pack

Mission Control records, in addition to today's outputs:

- contracts advanced (Global Product Completion View identifiers) and the Build Plan §10 section that governs the mission, plus every contract those contracts delegate to where the mission touches the delegated behaviour (Coverage Matrix §6);
- the **Feature Coverage and Product Truth Traceability Matrix (FCTM) opened** for those contracts at a recorded intake baseline, with each contract's blob SHA (§16);
- a draft **workstream register** (§8.1);
- **delivery and production scope flags**, default `production mutation: NOT AUTHORIZED`, `migration execution: NOT AUTHORIZED`, `delivery sync and publication: NOT AUTHORIZED`;
- the dual-intake record opened;
- the merge-gate plan (G1 to G5, and any G3 split);
- a verification-plan preview seed (§7.3);
- the topology facts that must be freshly verified before any external action (§11.5).

### 5.2 Stage 2 — Mission Truth and Delta Reconciliation

The **Definition Actor** appointed by Mission Control owns Stage 2 (§18.2); Codex is not the default owner. Stage 2 stops being "extract truth" and becomes "consume approved truth, account for all of it, and find what changed". The Truth Pack has five parts:

1. **FCTM, populated** (§16). Every applicable approved requirement, each with exactly one disposition. It replaces the former free-form Truth Table for requirement-bearing truth, so approved requirements are enumerated rather than summarized.
2. **Derived constraints.** Interpretations that follow from approved truth but are not stated in it, each flagged as requiring confirmation when it could materially affect behaviour. A derived constraint is never an approved requirement and never fills an `UNRESOLVED` row.
3. **Delta.** Changes since each source was approved: repository, migrations, CI, topology, governance versions, OLE additions. Each is `NO PRODUCT EFFECT`, `ENGINEERING ONLY` or `PRODUCT-AFFECTING`.
4. **Unresolved and conflicts.** Extracted from `UNRESOLVED FOUNDER DECISION` and `ESCALATED` FCTM rows, plus any Build Plan §15 or Phase 1 guide §17 item this mission's scope actually needs. A claim with no citation is `UNRESOLVED` by definition.
5. **Institutional Learning Intake Record** (§4).

Where another actor is better placed to establish repository and runtime facts, Mission Control may direct it to submit a baseline finding; it does not become owner, and Source 18 §3 ("only the current stage owner modifies the deliverable") is unchanged.

### 5.3 Stage 3 — Founder Decision Gate (conditional)

Founder Discovery is an exception gate. It is `TRIGGERED` by any of:

- **T1** an unresolved product question that no approved source answers;
- **T2** a conflict among approved sources;
- **T3** a new product decision, or a Build Plan §15 or Phase 1 guide §17 unresolved decision that the mission needs;
- **T4** a Delta item classified `PRODUCT-AFFECTING`;
- **T5** a Founder request, which Mission Control cannot decline;
- **T6** a `DERIVED` item that Mission Control judges materially affects product behaviour;
- **T7** a **proposed omission, deferral, pull-forward, simplification or reclassification** of any approved requirement, including any change of its build commitment, commercial classification or mission assignment (§16.5);
- **T8** a **Product Truth conflict or infeasibility found at any later stage**: between a contract, the Build Plan, Source 11, the Blueprint, the EIS, the implementation or a security or integrity finding (§16.8).

When triggered, the existing Founder-led dialogue and Founder Product Decision Record run for **only** the triggering items, conducted by the actor Mission Control designates (the Definition Actor or Mission Control itself). Codex is not the default interviewer, and no Founder-question sequence runs by default. When none applies, Mission Control records `Founder Decision Gate — NOT TRIGGERED`, listing each trigger checked with its evidence. **A not-triggered record is permitted only if the FCTM has no `UNRESOLVED FOUNDER DECISION` row on this mission's critical path and no `ESCALATED` row.** A one-page Founder Brief summarizes the FCTM and the not-triggered determination. The Founder's objection at any point reopens the gate, and Stage 8 approval remains the backstop over the whole Blueprint. T7 and T8 can arise after Stage 3; when they do, the gate reopens at that point and the affected row blocks every lock, authorization and acceptance that relies on it until the Founder decides.

## 6. Stages 4 to 8 — Blueprint, integrated review, lock

### 6.1 Stage 4 — Assembly by reference

- Approved truth is cited (contract section, Build Plan §10 subsection), not re-authored.
- New prose is limited to mission scope selection, the delta, dependencies and acceptance criteria.
- The canonical Section 1–19 structure of `SB-P-1.10` is preserved. `Not applicable — justified` still applies.
- **Experience anchors and Founder runtime scenarios** are seeded into Section 15 (Acceptance Criteria) from Build Plan §10, so the Experience Verification Matrix required by Build Plan §13 exists from the start and the Founder-reserved scenarios (§9.1) are locked at Stage 8. Adding a scenario is a product decision and triggers T3.
- A Section-to-source traceability table is added to Section 19 (Governance History). It is **keyed by FCTM row ID**: each row maps to the Blueprint section that carries it (scope in Section 8, rules in Section 10, dependencies in Section 12, acceptance scenarios and experience anchors in Section 15).
- **Section 11 (Out of Scope) lists every `ASSIGNED TO LATER MISSION`, `DELEGATED` and `OUT OF BUILD SCOPE` row** as "still committed / not in this mission" (the contracts' own Anti-Drift Rule wording), with the owning mission or the preserved classification. Out of scope never means dropped.
- **No orphan content.** Blueprint content that maps to no FCTM row is either a recorded mission-specific refinement or a scope expansion. A refinement that changes approved truth triggers T3; the mature contract already requires a Blueprint to state any intentional refinement or difference.
- The Definition Actor does not omit, defer, simplify, reclassify or expand an approved requirement to fit a narrower draft.

### 6.2 Stages 6 and 7 — Integrated Builder and Engineering Review

After Stage 5 approves Sections 1–19, Claude Code may prepare Builder Review findings and Sections 20–21 as one work package, with specialist reviews in parallel. Conditions, all required:

- **S1** Sections 1–19 are approved and no Founder decision is open.
- **S2** Mission Control declares integrated mode with a reason. Otherwise the sequential path applies.
- **S3** Specialists are advisory and read-only, record findings under `specialists/`, and issue no competing instructions (Source 18 §4.6–4.8).
- **S4** If Builder Review is returned for refinement, only the dependent Engineering Review sections are re-reviewed.

**Specialist review is mandatory, not optional,** where the mission touches authority or permissions, RLS or grants, migrations, idempotency or concurrency, financial integrity, or a new external provider. Security and Supabase reviews run in parallel with each other and with the Engineering Review. Gate 2 still binds approval: Sections 20–21 cannot be approved or locked until Builder Review findings are approved. What changes is when drafting may begin, not when approval may occur.

Section 20 or 21 also carries the **early delivery plan**: environments, the list of migrations expected, the CI tiers that apply, and the production, migration and delivery scope flags carried from Stage 1.

Section 20 or 21 also records, **per `IN SCOPE` FCTM row, a feasibility and risk finding**. A row found infeasible, unsafe or blocked is **not** quietly narrowed or moved: it stays `IN SCOPE`, is marked blocked with the reason, and raises T8. A security, integrity or privacy finding may block an unsafe implementation path but may not be turned into an unapproved decision that the feature should not exist (Feature Library README, Founder Build Commitment Rule).

Stage 5 also checks the FCTM (§16.4 completeness test) together with the Institutional Learning Intake Record (gate 10).

### 6.3 Stage 8 — Founder approval and lock

The Founder approves Sections 1–21, confirms the FCTM and Truth Pack summary, and confirms the Founder-reserved runtime scenarios and the production and migration scope flags. Mission Control applies the lock. **The lock freezes every FCTM row's disposition, build commitment, commercial classification and mission assignment**; after it, any change requires a Founder decision (§16.5). The lock is a Class 1 record and reaches `main` at **G1**.

## 7. Stages 9 to 13 — EIS and build authorization

### 7.1 EIS (Stages 9 to 11)

- The EIS is drafted with specialist findings already integrated, so review confirms rather than discovers.
- **The EIS carries an FCTM traceability table**: every `IN SCOPE` row maps to the EIS requirement or requirements that realize it (data, RLS, services, validation, tests, observability), and every EIS requirement maps back to a row. An EIS requirement with no row is an orphan and needs a recorded reason. The EIS introduces no new product behaviour, so an orphan that adds behaviour raises T3. Mission Control's EIS review runs the same completeness test as Stage 5.
- Stage 10 specialist confirmations run in parallel, feed one consolidated Mission Control disposition, and any refinement is reviewed finding by finding, not restarted (`SB-IV-1.0` §9 pattern applied to design review).
- When the disposition has no blocking refinement, Stage 10 disposition and Stage 11 lock may be one record.
- Gate 3 and gate 4 (Blueprint lock before EIS, EIS lock before package) are unchanged.

### 7.2 Implementation package (Stage 12)

The three documents (Engineering Contract, Builder Prompt(s), Verification Checklist) are authored together and reviewed as a set in one Mission Control review. The template rule that the contract must be locked before the prompt (Implementation template line 197) is removed; cross-references are validated in the single review. "No package may exist before both locks" is unchanged.

**Row mapping in the package.** The Engineering Contract maps every `IN SCOPE` row to at least one obligation. The Verification Checklist maps every `IN SCOPE` row to at least one checklist item with a planned evidence class (A, B or C), including named negative-path items for permission, isolation and denial rows and a named runtime scenario for every experience row. `ALREADY DEMONSTRATED` rows map to a regression or no-change item or a justified `NOT APPLICABLE`, carry their traceable evidence, and are never assumed to pass (§18.5, E-3). The Builder Prompt lists the rows each workstream builds and forbids building behaviour outside them. Mission Control confirms completeness in the single package review; **an `IN SCOPE` row with no obligation or checklist item blocks the Implementation Authorization** (gate 5).

### 7.3 Package Lock and Implementation Authorization (Stage 13)

One Class 1 record. Source 18 already lists the minimum fields; the expanded set is:

1. authorized package version, locked Blueprint and EIS references, authorized branch, prohibited changes, date, Mission Control authority reference (unchanged);
2. **workstream register** with, per workstream, scope, authorized builder, paths, contracts advanced, risk class;
3. **environments**: test project identity, runtime-verification environment, and production stated as `NOT AUTHORIZED` unless a migration or production authorization is separately attached (§11);
4. **CI baseline**: Fast Gate results required at each checkpoint; Full Assurance applicability by trigger path (§11.4);
5. **verification plan**: appointed verifier and eligible alternates, prior-contribution and independence assessment (Source 18 §4.9), Codex utilization classification, Class A boundaries (`SB-IV-1.0` §4);
6. **runtime verification plan**: Founder-reserved scenarios and any delegated human verifier by name;
7. **checkpoint plan**: G3 split per workstream, if any;
8. **expiry**: work-package end and any date, plus the Protocol §21 events;
9. **FCTM reference**: the locked FCTM path and baseline SHA, the rows assigned to each workstream, and Mission Control's statement that the mapping completeness test (§16.4) passed against the Blueprint, EIS, contract and checklist.

Appointing the verifier here removes the late scramble; formal activation still happens at Stage 18, and a replacement remains a recorded Mission Control decision under §4.9.

## 8. Stages 14 to 16 — Workstreams and builder-neutral implementation

### 8.1 Workstreams

A **workstream** is a separately built and verified slice inside one Product Mission (for example `SB-P-1.18` Order and Delivery, Staff/HR, Compliance, which Build Plan §10.7 already calls "separately verifiable"). Identifier form `SB-P-1.18/WS-A`. Workstreams **never** create Product Mission IDs, matching Build Plan §9. The register is set at Stage 1, fixed at Stage 13, and needs no separate authorization per workstream unless scope changes. The `GC-n`, `IMPL-n`, `LOV-*` sub-mission pattern of SB-P-1.11 is replaced by workstream rows and checkpoint commits.

### 8.2 Builder neutrality

- "Lovable owns implementation" (Source 18 §4.5) becomes "the **authorized builder** for a workstream owns implementation", with Lovable one option. Claude Code is an authorized builder where the Implementation Authorization says so, which matches SB-P-1.11-IMPL-1.
- Artifact names for missions that start after activation: `builder-prompt.md` and `builder-completion-report.md`. Existing missions keep their names and are not renamed; the legacy names are acceptable aliases where the builder is Lovable. No tooling references these names `[R]`.
- **Independence matrix** (applies at Stage 13 and is checked at Stage 19): the verifier of a workstream did not implement, correct or transfer it; the actor that transfers code between repositories is not that workstream's verifier; a builder never approves its own work. Where Claude Code is builder, the verifier is another actor (Codex preferred for high-risk cases).
- Claude Code owning the Evidence and Completion Package while also being a builder is allowed only because the package records verifier findings by reference and Mission Control reviews it. It cannot summarize away a finding.

### 8.3 Stage 14 — conditional brief

Stage 14 applies only when the authorized builder can act solely through a human or an external tool (Lovable, a console, a dashboard). Then the Founder Brief (Source 18 §11 format) is produced as today. Otherwise the Ledger records `NOT APPLICABLE — JUSTIFIED — builder has direct authorized repository access`.

### 8.4 Stages 15 and 16 — build and report

- Builders commit checkpoints to the mission branch; every checkpoint has a green Fast Gate and, where triggered, Full Assurance.
- The **Builder Completion Report** (one file, sections per workstream) carries the `SB-IV-1.0` §5 Verification Packet: identities, exact diffs, authorship, tests authored versus executed, CI run and checkout SHAs, static deltas, platforms, runtime linkage, risk plan.
- **Canonical transfer** (a builder working outside `smart-business`, as Lovable does in the delivery repository): pre-authorized in the Implementation Authorization with a mechanical, scope-preserving method and a diff manifest. It is part of Stage 16, not a separate Mission Control cycle, and it is never verification.
- **Per-row reporting.** The Builder Completion Report states, for every row assigned to the workstream, `IMPLEMENTED` (with commit and test evidence), `PARTIALLY IMPLEMENTED` (stating exactly what remains) or `NOT IMPLEMENTED`. A row missing from the report is a coverage defect, not an implicit success. A builder does not drop, defer, simplify or reclassify a row, and does not implement behaviour that maps to no authorized row; either raises T7 or T8 through Mission Control.

## 9. Stages 17 to 20 — Runtime, verification, correction

### 9.1 Stage 17 — Human Runtime Verification

| Category | Who | What |
|---|---|---|
| **Founder-reserved** | Founder, or a delegate the Founder explicitly confirms | The Build Plan §10 Founder Runtime Verification scenarios for the mission, plus any product-experience anchor Mission Control designates: judgements of whether the experience is right for the merchant |
| **Delegable** | Named authorized human verifier | Mechanical walkthroughs: role and permission behaviour, negative paths, data visibility, using the Verification Checklist |

The Founder still confirms all submitted human findings before Mission Control closes runtime review (Source 18 §4.2). Evidence names environment, commit and deployment identity, actor, role, route, expected and actual result, **and the FCTM row IDs the scenario exercises**. CI is never a substitute (`SB-IV-1.0` §3).

### 9.2 Stage 18 — Mission Control Runtime Review

Unchanged in substance. It also applies the `SB-IV-1.0` §7 verification-ready entry gate and activates the pre-appointed verifier.

### 9.3 Stage 19 — Independent Verification (mandatory)

Unchanged in substance and in mandatory status. Restated for every Product Mission: risk determines method and effort, never existence. Additions:

- may run per workstream, with one mission-level Mission Control disposition;
- migration workstreams: Class A probes run in the authorized test environment; production probes require a migration authorization (§11.3) and are never implied;
- the verifier records independence and prior-contribution facts as §4.9 requires;
- the verifier does not implement the corrections it finds;
- **the verifier independently checks material coverage and drift** (§16.7): section-inventory completeness against the source contracts, classification and mission-assignment integrity, row-to-evidence mapping, drift of implemented behaviour from approved expected experience and permissions for material rows, and orphan implementation. This baseline is performed for every mission, whatever the Codex utilization classification.

### 9.4 Stage 20 — Corrective Cycle

Replaces "Corrective Mission". A **corrective authorization** (a numbered record, not a Product Mission ID) names finding IDs, allowed paths and the builder (never the verifier). Sequence per `SB-IV-1.0` §9: finding → narrow correction → full applicable deterministic CI → Mission Control correction review → finding-specific re-verification → bounded result. Escalation to broader re-verification follows `SB-IV-1.0` §10.

**Human retest rule (Founder decision D-04):** retest is required for any correction that changes user-observable behaviour, permission behaviour or data visible to a role, and always for a Founder-reserved scenario the correction touches. For a correction with no such effect, Mission Control records `HUMAN RETEST NOT REQUIRED — <reason>`. Prior reports and evidence are preserved as today.

**A correction never resolves a coverage finding by removing or deferring the row.** A correction for `SILENT OMISSION`, `DRIFT` or `ORPHAN` restores the approved behaviour or removes the unauthorized behaviour. If restoring it is impossible or unsafe, the row goes to the Founder (T7 or T8).

## 10. Stages 21 to 24 — Evidence, acceptance, closure

### 10.1 Stages 21 and 22 — combined package

After Stage 19 (neither may be created earlier) Mission Control authorizes one work package producing:

- an **Evidence Package that is manifest-first**: an index linking CI run IDs, the verification report, runtime evidence and provenance, storing only artifacts not otherwise durable;
- a **Completion Report** with two reconciliations: the **Experience Verification Matrix** required by Build Plan §13 (`PASS`, `FAIL`, `NOT APPLICABLE`, or justified `DEFERRED BY APPROVED DEPENDENCY`), which covers the experience anchors, and the **Contract Reconciliation** (§16.9), which covers **every** FCTM row against the approved feature contracts. The matrix is the experience subset of the reconciliation, and both cite row IDs.

One review; Stage 21 and Stage 22 dispositions are recorded separately in the Ledger. Reaches `main` at **G3** together with verified implementation code.

### 10.2 Stage 23 — Acceptance

Unchanged authority. Additions: the disposition states explicitly what it does not authorize (deployment, publication, migration execution, activation, pilot readiness, release, next mission) as SB-P-1.11's did; carried follow-ups each name an owner and the mission or gate in which they will be verified; a **Release Handoff Statement** records whether the accepted state is deployed, which migrations are applied in production, and what release authorization is still needed.

Acceptance is recorded against the Contract Reconciliation. An `IN SCOPE` row that is not `DEMONSTRATED` is **not** an ordinary follow-up: accepting it is a scope deviation and needs a recorded Founder decision (Source 18 Stage 23 already requires Founder approval for a scope deviation or a material unresolved follow-up). Acceptance never states contract-level completion.

**The Global Product Completion View is updated here**, in the same change as the acceptance record, because its own protocol updates affected rows "at Mission Acceptance" (View §12), and only from the accepted Contract Reconciliation (§16.10). The builder does not edit the view; Mission Control applies or approves the change. **Accepted mission progress is not complete feature demonstration, and no status upgrade follows from a partial mission (§18.6).** Class 1; effective at **G4**, or on the human merge of the acceptance record if DG-1 is not approved.

### 10.3 Stage 24 — Closure Package

Stage 24 is expanded to carry the duties now scattered across `communication/README.md`, Protocol §26 and Build Plan §11. Order:

1. G4 merged and canonical `main` verified.
2. **Documentation closure record** (`COMPLETED — FORMALLY ACCEPTED`, final commit, deployment reference, follow-ups).
3. **OLE disposition**: the handoff initiated with its closure-envelope reference, **or** an explicit no-reusable-learning record with supporting evidence. Promotion review then proceeds inside OLE and **does not block** closure or the next activation; the next intake reads whatever is promoted at that time.
4. **Feature-level completion evaluation.** Confirm the view rows were updated at Stage 23 and evaluate each advanced contract's status independently of mission completion, as View §12 "At Mission Closure" requires: a mission can be `COMPLETED — FORMALLY ACCEPTED` while its feature remains `IMPLEMENTED BUT INCOMPLETE`. Record the remaining Build Now requirements per contract.
5. **Residual carry-forward.** Every row not `DEMONSTRATED` or `NOT APPLICABLE`, and every follow-up, is recorded with its owning mission so that mission's FCTM inherits it (§16.6). Follow-ups are carried forward, never erased.
6. Communication archive and live reset per Protocol §26, after items 2 to 5 are recorded and Founder or Mission Control confirms closure.
7. Mission Control updates `mission-control/mission_memory.md`.

The package reaches `main` at **G5**.

## 11. Production, migration, delivery and CI boundary

### 11.1 Default-deny

No stage, record, acceptance or merge creates production mutation authority. Every Implementation Authorization carries the lines `PRODUCTION MUTATION: NOT AUTHORIZED`, `MIGRATION EXECUTION: NOT AUTHORIZED`, `DELIVERY SYNC AND PUBLICATION: NOT AUTHORIZED` unless a separate authorization below is attached.

### 11.2 Plan early

Scope flags at Stage 1, migration list and environment plan in Sections 20–21, pre-flight package in the EIS and contract, flags fixed at Stage 13. A need for a production migration is therefore known before the build, not discovered at Stage 19 as in SB-P-1.11.

### 11.3 Migration workstream and Migration Execution Authorization

Precisely authorized migration execution may exist as a Product Mission workstream. Its authority is a separate **Migration Execution Authorization** (MX) Class 1 record, never implied by the Blueprint, EIS, package, Implementation Authorization or acceptance. It must contain all eight default-deny elements of `docs/migration/README.md` and additionally:

- exact SQL file paths and the SHA-256 of each file, and the `main` commit they come from;
- target environment name and project reference, and the **recorded output of a pre-execution identity check** proving the target;
- the executing actor, who is not the Stage 19 verifier for that workstream;
- backup or recovery statement and validation queries;
- how a single migration will be isolated and how the migration ledger will be checked afterwards (the two SB-P-1.11 GC-40 incidents were an execution-method limitation and a ledger bookkeeping error);
- rehearsal evidence on the isolated test project, matched to the real trigger path (Phase 1 guide §11);
- an execution window and single-use expiry;
- approving authority: **Mission Control for a test environment; Founder for production** (aligned with Source 12 §64 and Source 17 §A6.3, choosing the more conservative reading; Founder decision D-06).

Standard method: the repository wrapper (`npm run supabase:test`, `npm run supabase:production`, `scripts/supabase-cli.mjs`), never a bare CLI. After execution: ledger check, effective grant and RLS check, independent confirmation, evidence recorded, authorization spent.

### 11.4 CI baseline wording

Fast Gate (lint, typecheck, build, Fast Tests) runs on every PR and push; Full Assurance (20 Supabase-dependent files) is path-filtered and manual. As of 2026-09-19 `[L]` the only required check on `main` is `Markdown Quality Gate`. Green Fast Gate is therefore a governance requirement at each checkpoint, not a branch-protection block, until the Founder decides otherwise (O-01). Full Assurance absence is `NOT APPLICABLE` only after checking both triggers and mission risk (`SB-IV-1.0` §6).

### 11.5 Topology wording

Canonical repository → production delivery repository → Lovable publication → production Supabase and domain, with a separate isolated test Supabase project. External facts are cited with source and date and freshly verified before any external action (Phase 1 guide §11). Delivery sync and publication remain release actions under Source 12 Part 4 with Founder approval; they are not part of any stage.

## 12. Control preservation

| Control | Where it lives today | In the proposed model | Changed |
|---|---|---|---|
| Founder final product authority | Source 18 §4.2, §2 | Stage 8 approval and lock; Stage 3 gate; Founder-reserved runtime scenarios | No |
| Mission Control acceptance | Stage 23 | Stage 23, Class 1, G4 | No |
| No self-approval or self-verification | Source 18 §3, §4.9 | Independence matrix (§8.2); Class 2 transcription rule (§3.3); Definition Actor role-separation rule (§18.2) | Strengthened |
| Separation of product definition and engineering challenge | Source 18 §3 ("separate product definition, engineering specification, implementation, verification, and acceptance") | Definition Actor may not be the only challenge to its own definition on a material-risk mission (§18.2) | Preserved when actor allocation becomes flexible |
| Mandatory Stage 19 | Stage 19 | Stage 19, restated | No |
| Human merge; protected `main` | Protocol §13, §22 | PR-4; five human gates | No (fewer, larger events) |
| Server/database-side authorization, isolation, revalidation, negative paths | Phase 1 guide §9; Build Plan §13 | Specialist review mandatory on risk trigger (§6.2); Class A negative-path probes; Experience Verification Matrix | No |
| Environment identity verification | Migration README; Phase 1 guide §11 | MX pre-execution identity check; runtime evidence names environment | Strengthened |
| Production default-deny | `docs/migration/README.md` | §11.1 lines in every authorization; MX Class 1 | No |
| Claim-specific evidence | Phase 1 guide §8; `SB-IV-1.0` §6 | Manifest-first evidence still binds claim, SHA, run ID, environment | No |
| Runtime verification | Stages 17–18 | Retained, split into reserved and delegable | No |
| Specialist review where risk requires | Source 18 §4.6–4.8 | Mandatory on named triggers, parallel | No |
| OLE disposition before closure | `communication/README.md` | Gate 11, Stage 24 item 3 | Formalized in Source 18 |
| Branch protection | `branch-protection-verification.md` | Unchanged; O-01 and O-02 raised as separate Founder decisions | No |
| No silent omission, deferral or reclassification of approved requirements | Contracts' Anti-Drift Rule; Founder Build Commitment Rule; Build Plan §9, §13 | FCTM, classification lock, T7 and T8, Stage 19 coverage and drift check (§16) | Strengthened |
| Completion state based only on verified evidence | View §2 rules 4 and 7; §12 | Contract Reconciliation; demonstrated-only view update (§16.9, §16.10) | Strengthened |
| Definition, implementation, verification, acceptance and completion kept distinct | Phase 1 guide §4; Feature Library README | Requirement status vocabulary and feature-level evaluation at closure (§16.9, §10.3) | Strengthened |

## 13. Risks of the optimization and mitigations

| ID | Risk | Mitigation |
|---|---|---|
| R-01 | Gate PRs are larger and harder to review | Ledger plus Decision Provenance table in every gate PR; PR-5 lets Mission Control require extra checkpoints |
| R-02 | A Class 2 decision on a branch is forged or self-issued by the actor that benefits | Transcription rule; provenance table confirmed by the human merger; verifier pre-appointed in Class 1; production authority never Class 2 |
| R-03 | Parallel review causes rework | S1–S4; sequential fallback; finding-scoped re-review |
| R-04 | Conditional Founder gate is misclassified | Uncited claims default to `UNRESOLVED`; Stage 8 backstop; T5 Founder override |
| R-05 | Builder neutrality creates independence conflicts or verifier scarcity | Independence matrix at Stage 13; alternates named up front; gate stays pending if none eligible |
| R-06 | Dual intake becomes a paper exercise | Per-promotion disposition with citations; Mission Control review at Stage 5; Class C existence check at Stage 19 |
| R-07 | Mission-scoped promotions applied as universal rules | Scope caveat in §4.1(4); applicability screen, not adoption |
| R-08 | Work-package Git authority is broader than stage-scoped authority | Explicit path list, stop conditions, all Protocol §21 events retained, recommended expiry date |
| R-09 | Combined Stage 21/22 hides evidence gaps | Manifest-first still binds claim to provenance; separate dispositions; nothing before Stage 19 |
| R-10 | Merging only verified code slows integration of dependent workstreams | Per-workstream G3 or Mission Control-authorized earlier merge |
| R-11 | Many simultaneous amendments create new drift | One atomic activation change; version and change-log rows; verification by a non-author (03 §7) |
| R-12 | Reliance on unverified external state | Stage 1 topology list; fresh verification before any external action |
| R-13 | The FCTM is filled in as a formality: rows are grouped so coarsely that omissions hide inside them | Row-granularity rule (§16.3): applicable requirements enumerated individually, no "etc."; the Stage 19 verifier re-derives each contract's section inventory from the source rather than trusting the matrix |
| R-14 | The coverage burden slows Stage 2 and erodes the speed goal | Rows are references, not prose; inapplicable and already-demonstrated sections may be single rows; downstream mapping is ID-keyed; completeness is a set-difference check (§16.11). Cost is not measured here and must be measured on `SB-P-1.12` |
| R-15 | The same actor writes the FCTM and later verifies coverage | The verifier checks against the contracts themselves; if the only eligible verifier authored the FCTM, Mission Control records a separation assessment (§16.7) |
| R-16 | Pressure to move an inconvenient requirement into "follow-up" or "later" | Classification lock; an `IN SCOPE` row cannot be an ordinary follow-up; any movement needs a Founder decision ID in the row (§16.5) |

## 14. Decisions needed from Mission Control and Founder

Status of every row is `OPEN — NOT APPROVED`. The recommendation column is advice for the decider, not a decision.

| ID | Decision | Recommendation (advice only) |
|---|---|---|
| **D-01 (DG-1)** | The five-gate merge model and PR-1 to PR-6. **Depends on D-02a**: without branch-effective records, mid-phase decisions cannot avoid a merge | Consider together with D-02a; if refused, stage-per-PR remains |
| **D-02a (DG-1)** | Branch-effective (Class 2) authority records with a Decision Provenance table | Security-sensitive; adopt only if the provenance control is judged sufficient. Separable from D-02b |
| **D-02b (DG-2)** | Work-package-scoped Git authority instead of stage-scoped (Protocol §21, `AGENTS.md:203`) | Security-sensitive; if adopted, require an explicit path list and an expiry date in every work package |
| D-03 | Code merges at G3 only (verified code), with per-workstream splits | Consider; requires D-01 |
| D-04 | Human retest rule for corrections (§9.4) | Consider as written |
| D-05 | New-mission artifact names `builder-prompt.md`, `builder-completion-report.md`; no renames of existing missions | Consider |
| D-06 | Production migration authorization requires Founder approval; test-environment authorization requires Mission Control | Consider; conservative reading of Source 12 §64 and Source 17 §A6.3 |
| D-07 | Version numbers: Source 18 v1.2; Elaboration template 1.4; Implementation template 1.2; Protocol 1.1 | Consider (stage identifiers and authority allocation are preserved) |
| D-08 | Whether `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md` gain intake pointers and the migration wording (03 conditional items) | `AGENTS.md` migration wording is needed only if migration authority inside a Product Mission is adopted; the pointers are optional |
| D-09 | Whether the Phase 1 guide gets currency annotations (header status and §16) | Optional; the Stage 2 delta already catches them |
| D-10 | Promote Fast Gate to a required check and address 0 required reviews | Out of scope here; consider a separate branch-protection mission |
| **D-11** | Adopt the mandatory FCTM and its rules (§16), including the row-granularity rule, the classification lock and the T7 and T8 triggers. **Implements the Founder addendum.** Independent of D-01, D-02a, D-02b | Founder-required; the open questions are only granularity and tooling |
| **D-12** | Narrow amendment of the Global Product Completion View (03 `RG-01`, `RG-02`; `RG-03` optional) so the view enforces demonstrated-only updates | Consider with D-11; the view otherwise keeps a looser standard than Source 18 |
| **D-13** | **Definition Actor.** Stage 2 and Stage 4 owned by a qualified actor appointed by Mission Control in the Stage 1 record (Claude Code or another authorized actor where fit); Codex not mandatory; role-separation rule (§18.2). Replaces the current Source 18 §4.3 allocation | Consider; changes actor allocation, so it needs the Founder |
| **D-14** | **Fail-closed operating model** (§18.4): preparation is not authority; bundled preparation of adjacent documentary steps; one canonical crossing per gate. Independent of DG-1 and DG-2, and the fallback if DG-1 is declined | Consider; it works within current gates and needs no branch-effective authority |
| **D-15** | Whether a partial mission may change a contract's non-terminal implementation state. Default until decided: **no status upgrade from a partial mission**; progress is recorded in fact fields only (§18.6) | Keep the strict default unless the Founder wants otherwise |
| **D-16** | Disposition of the Git authority-precision finding (§18.9): ratify as a narrow administrative finding, not precedent for DG-2; require commit-message authorization in future grants | Mission Control and Founder to dispose; no history rewrite |

## 15. Non-activating applicability check for SB-P-1.12

Preliminary, non-binding and not pre-work. It only tests whether the design behaves sensibly on the first mission it would govern.

- Stage 2 delta would already know: Build Plan §5.2 is stale (CI exists), §5.1 `anon` exposure is still open in the repository (O-03), and the topology is as in 01 §3.5.
- Founder Runtime scenarios A (bounded delegation) and B (revocation invalidates a stale action) already exist in Build Plan §10.1 and would be seeded and locked.
- The Build Plan §15 unresolved decisions (pricing, retention, KYC, marketplace, underwriting) appear unrelated to an authority model, so Stage 3 would likely be `NOT TRIGGERED`, subject to the Definition Actor's Stage 2 work.
- Authority, RLS and grants trigger mandatory parallel security and Supabase review and likely a Codex Required classification.
- Remediating grants probably needs a migration, so the scope flag and a pre-flight package would appear at Stage 1 and Stage 7, not at Stage 19.
- **FCTM illustration `[R]`.** Build Plan §9 maps `SB-P-1.12` to contracts 21, 22, 20 and 17 plus the Product & Price Master reconciliation. Contract 21 alone has 27 sections and 12 numbered acceptance scenarios, including support access (§14), entitlements (§16), delegated automation (§12) and supplier, customer and delivery participation (§13). Build Plan §10.1 lists a summary of required work areas and two Founder runtime scenarios; scenario B (revocation invalidates a stale action) corresponds to contract 21 acceptance scenario 8. Without a matrix, a mission could satisfy the Build Plan summary and never account for the rest of the contract. The FCTM would force each of those sections to carry an explicit disposition: in scope here, already demonstrated, assigned to a named later mission by an approved source, delegated, not applicable, or escalated. Which disposition each takes is the Definition Actor's Stage 2 work and, where it needs a decision, the Founder's; nothing here decides it.

## 16. Product Truth coverage and traceability (Founder addendum)

The Founder requires that the optimized lifecycle prevent drift, omission or unauthorized deferral of any relevant requirement from the detailed approved feature and foundation definitions, including expected merchant experience, user workflows, permissions, business rules, dependencies, acceptance criteria and every approved Build Now, Build Later, Add-on, Separate Product and Reject classification. **The workflow may become faster. Product Truth must not become incomplete.** This section is independent of DG-1 and DG-2.

### 16.1 Design stance and what already exists

The FCTM does not reopen approved truth and adds no new product decision. It is an accounting of the truth that exists, so that consuming it instead of rediscovering it is verifiable. Existing controls each work at a different granularity; none accounts for requirements inside one Product Mission:

| Existing control | Granularity | What it does not cover |
|---|---|---|
| Feature Library Coverage Matrix (`00_Feature_Definition_Library_Coverage_Matrix.md`) | Recovered behaviour lands in a contract (definition level) | Says nothing about a mission's build |
| Contracts' Anti-Drift Rule and Founder Build Commitment Rule (Feature Library README) | Principle: do not remove, postpone or simplify; record as "still committed / not in this mission" | No mechanism, owner or check |
| Global Product Completion View | One row per contract, 25 rows (program level) | No requirement-level residual; no evidence column |
| Build Plan §13 Experience Verification Matrix | A handful of experience anchors per mission | Not the full contract |

The FCTM fills the gap between them and replaces none (View §3: "No one artifact replaces the others").

### 16.2 The matrix

One row is one separately verifiable obligation, cited to a contract or Build Plan section at a recorded baseline. Row ID form: `<contract number>-§<section>-<ordinal>` (illustration: `21-§24-08` for acceptance scenario 8 of contract 21). Contracts do not share one section layout (contract 21 differs from the README's Feature File Standard), so rows cite each contract's actual numbered sections and its blob SHA at intake.

| Column | Content |
|---|---|
| Row ID and source | ID, contract or Build Plan section, blob SHA |
| Requirement | A pointer to the exact source text, not a paraphrase that can drift |
| Kind | Merchant experience, user journey, workflow, permission or role boundary, confirmation rule, business rule, data or memory requirement, error or denial behaviour, privacy or dignity, performance expectation, dependency or shared foundation, acceptance scenario, completion gate, non-goal or rejection, unresolved Founder decision |
| Build commitment | `BUILD NOW`, `ADD-ON + BUILD NOW`, `BUILD LATER`, `SEPARATE PRODUCT`, `REJECT` (View §4.2) |
| Commercial classification | `CORE`, `ADD-ON`, `INTERNAL PLATFORM`, `SEPARATE PRODUCT`, `REJECT` (View §4.1) |
| Assigned mission | Per Build Plan §9 to §12 |
| Disposition and citation | One of §16.4, with the source that supports it |
| Founder Decision ID | Present whenever anything above differs from the approved source |

Downstream stages add their own mapping keyed by row ID (§16.6). The Stage 2 owner owns the row set and dispositions until the Stage 8 lock. Each later stage owner owns only its own mapping in its own deliverable, so Source 18 §3 ("only the current stage owner modifies the primary deliverable") is unchanged.

### 16.3 What must be enumerated

**Scope:** every contract the mission advances (Build Plan §9), every contract those delegate to where the mission touches the delegated behaviour (Coverage Matrix §6), the Build Plan §10 section for the mission, §11 and §12 (cross-mission dependencies and the support split), §16 (explicit rejections), and View §9 (reject and separate-product boundaries).

**Rule:** every section of every in-scope contract appears in at least one row. **Granularity is refined in §18.5:** sections that are in scope, partially delivered or mixed are enumerated at obligation level; a section may be a single row only when the whole section has one non-`IN SCOPE` disposition and one citation. Applicable sections expand into obligation-level rows covering all of: merchant experience and user journeys; workflows; permission and role boundaries and confirmation rules; business rules and data requirements; error, exception and denial behaviour; privacy and dignity; performance expectations; dependencies and shared foundations; **each numbered acceptance scenario as its own row**; the contract's completion gate; every classification and sub-capability; explicit non-goals and superseded behaviours as "must not regress" rows; and in-scope unresolved Founder questions. A wholly inapplicable section may be a single row with its reason. Grouping applicable obligations into one row is allowed only if each obligation is enumerated inside it; "etc." is not permitted.

### 16.4 Dispositions and the completeness test

Every row has exactly one disposition, with a citation:

| Disposition | Meaning | Requires |
|---|---|---|
| `IN SCOPE` | Build Now in this mission and to be demonstrated here | Assignment to this mission by an approved source |
| `ALREADY DEMONSTRATED` | Shown by an earlier accepted mission. **Not assumed to pass** (§18.5, E-3) | The earlier mission's verified evidence cited by path and commit or run identity, plus a Delta impact check showing it is still valid. Without traceable evidence the disposition is unavailable and the row is `IN SCOPE` |
| `ASSIGNED TO LATER MISSION` | A **`BUILD NOW`** requirement scheduled to another mission. It stays `BUILD NOW`; it is scheduling, not a build-commitment change (§18.5, E-4) | An approved assignment source (Build Plan §9 to §12 or the contract's own dependency), naming the mission. No citation means the disposition is unavailable and T7 applies |
| `DELEGATED` | Owned by another contract | The delegation map entry and the mission that owns it |
| `NOT APPLICABLE` | Does not concern this mission | Specific reason |
| `OUT OF BUILD SCOPE` | The approved **commitment** is `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT`. `BUILD LATER` is a product commitment, not a mission schedule (§18.5, E-4) | Classification preserved verbatim. `REJECT` rows are "must not appear" checks |
| `UNRESOLVED FOUNDER DECISION` | On the approved unresolved list | Whether it is on this mission's critical path (View §8 and §10); if not, work continues |
| `ESCALATED` | Conflict or proposed change awaiting the Founder | Blocks every lock, authorization and acceptance that relies on the row |

**Completeness test** (objective, set-based): (a) every section of every in-scope contract has at least one row; (b) every row has exactly one disposition with a citation; (c) at lock, no `ESCALATED` row and no critical-path `UNRESOLVED FOUNDER DECISION` row; (d) each row's classification and assignment equal the source text; (e) at every later gate, no `IN SCOPE` row is unmapped and no downstream item is an orphan. Mission Control runs it at Stages 5, 8, 10 to 11 and 13; the verifier runs it at Stage 19.

### 16.5 Classification lock and the no-silent-movement rule

Three dimensions are locked for every approved requirement: **build commitment**, **commercial classification** and **mission assignment**. `Add-on` is commercial availability and does not mean `Build Later` (Feature Library README).

**No actor may change any of the three, or omit, defer, simplify or reclassify an approved requirement, without a Founder decision recorded in the Founder Product Decision Record and cited by Decision ID in the row.** This applies equally to Codex, Claude Code, builders, verifiers and Mission Control. Specifically prohibited without such a decision:

- moving a `BUILD NOW` row to `BUILD LATER`, to a later mission, or to "follow-up";
- pulling a `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT` row into scope, or reviving any `REJECT` row;
- changing `ADD-ON` and core packaging;
- simplifying expected experience, permission or denial behaviour;
- treating an old label ("MVP-only", "after pilot", "future") as a deferral;
- using an unresolved Founder decision as a blocker beyond its critical path;
- describing a partial implementation as complete.

Permitted without a Founder decision: ordering work inside the mission's assigned scope, and workstream splits (they never change mission assignment, §8.1). Technical dependencies may change build order but not product commitment. `ACCEPTED WITH FOLLOW-UP` cannot carry an `IN SCOPE` row (§10.2). **Technical incompleteness is never a right to reclassify or defer** (§18.5, E-6).

### 16.6 Traceability chain and carry-forward

| Stage | Artifact | Mapping keyed by row ID | Checked by |
|---|---|---|---|
| 2 | FCTM | Row set and dispositions | Mission Control, Stage 5 |
| 4 | Blueprint | Section 8, 10, 12, 15 carry rows; Section 11 lists out-of-scope rows; Section 19 holds the table | Mission Control, Stage 5 |
| 6 to 7 | Sections 20 to 21 | Feasibility and risk per `IN SCOPE` row | Mission Control, Stage 8 |
| 9 to 11 | EIS | EIS requirement to row, and back | Mission Control, Stage 10 to 11 |
| 12 to 13 | Contract, Prompt, Checklist | Obligation to row; checklist item and evidence class per row | Mission Control, Stage 13 |
| 15 to 16 | Builder Completion Report | `IMPLEMENTED`, `PARTIALLY IMPLEMENTED`, `NOT IMPLEMENTED` per row | Mission Control, Stage 18 |
| 17 to 18 | Runtime findings | Scenario to row | Founder and Mission Control |
| 19 | Verification report | Result per row plus coverage and drift findings | Mission Control |
| 21 to 22 | Completion Report | Contract Reconciliation | Mission Control, Stage 23 |

**Carry-forward.** A mission's FCTM for a contract is rebuilt from the contract text, not from an earlier FCTM, and inherits the final statuses recorded by earlier missions. Any row an earlier mission left `ASSIGNED TO LATER MISSION`, `PARTIALLY DEMONSTRATED` or `NOT DEMONSTRATED` reappears, and a later mission cannot use a deferral to erase accountability for the earlier portion (Build Plan §13, rule 8).

### 16.7 Independent verification of material coverage and drift (Stage 19)

Performed by the Stage 19 verifier for every mission, whatever the Codex utilization classification. Risk selects the method, never whether a row is accounted for.

1. **Coverage completeness (Class C, always).** The verifier independently inventories the numbered sections of each in-scope contract at the intake blob SHA and compares that inventory with the FCTM, then runs the §16.4 completeness test across Blueprint, EIS, contract, checklist and report. Going to the source contracts, not only the matrix, protects against a matrix that was incomplete from the start.
2. **Movement integrity (Class C).** Compare each row's disposition, build commitment, commercial classification and assignment at Stage 8 lock, Stage 13 and Stage 22 against the source text and the Founder Decision IDs. Any unexplained change is a finding.
3. **Drift (Class A on material rows, Class B or C otherwise).** Compare implemented behaviour with the approved expected experience, permissions, denial behaviour and business rules.

**Material rows** are those involving authority, permissions or isolation, financial integrity, irreversible actions, experience anchors and Founder-reserved scenarios, dependencies a later mission relies on, and every `REJECT` row for the mission's domain. Every `IN SCOPE` row is accounted for; materiality selects the evidence class.

**Findings:** `SILENT OMISSION`, `UNAUTHORIZED DEFERRAL`, `UNAUTHORIZED PULL-FORWARD`, `MISCLASSIFIED`, `DRIFT`, `ORPHAN`, each mapped onto `PASS`, `FAIL`, `FOLLOW-UP` or `NOT APPLICABLE` under `SB-IV-1.0` §13. A material coverage or drift `FAIL` is a material blocking failure. A row without evidence is **not demonstrated**; absence of failure is not `PASS`. The verifier reports and does not decide Product Truth: conflicts go to the Founder through Mission Control.

**Independence.** The FCTM is not implementation, so its author is not automatically excluded, but a verifier who wrote the FCTM has a weaker separation. If the only eligible verifier authored it, Mission Control records a separation assessment (§4.9) and the coverage check is made against the source contracts rather than the matrix.

### 16.8 Founder escalation for genuine conflicts or proposed changes

Triggers T7 and T8 (§5.3) apply at every stage. Procedure:

1. The actor who finds the conflict, infeasibility, or need to change an approved requirement **stops** work that depends on the row and does not resolve it.
2. The row is marked `ESCALATED` with the evidence and the conflicting sources.
3. Mission Control brings it to the Founder. Where a contract conflicts with Source 11 or the Build Plan, the rule already in the Feature Library README applies: the conflict is surfaced and reconciled through Founder and Mission Control, and a lower-level builder never resolves it by silently dropping behaviour.
4. The Founder's decision is recorded with a Decision ID and cited in the row.
5. Any locked artifact affected changes only through a Mission Control-authorized correction that cites the Decision ID.
6. **Founder decisions and classification changes are never Class 2 records** (§3.3).

### 16.9 Completion Report reconciliation against the contracts

The Completion Report carries a **Contract Reconciliation** for every contract advanced, one line per FCTM row, using this status vocabulary:

`DEMONSTRATED` (evidence class and path, verifier result, runtime evidence where applicable); `DEMONSTRATED — CARRIED FORWARD (<original evidence>)` for an inherited row whose earlier evidence was re-checked against the Delta and is not treated as newly executed (§18.5, E-3); `IMPLEMENTED — NOT DEMONSTRATED`; `PARTIALLY DEMONSTRATED — <what remains>`; `NOT IMPLEMENTED`; `ASSIGNED TO LATER MISSION`; `DELEGATED`; `OUT OF BUILD SCOPE`; `NOT APPLICABLE`; `DEFERRED WITH FOUNDER DECISION <ID>`.

It states, per contract, the count and list of Build Now requirements not demonstrated by this mission, and separately keeps apart the states the Phase 1 guide §4 distinguishes: committed, implemented, merged, migrated or configured, deployed, runtime-verified, independently verified, accepted, globally complete. The Experience Verification Matrix is the experience subset and cites the same row IDs. Mission Control reviews the reconciliation at Stage 23.

### 16.10 Global Product Completion View: demonstrated completion only

The view is `00_Global_Product_Completion_View.md`; it is titled "Global Product Completion Register" inside, and the Build Plan and Phase 1 guide use "Register". No rename is proposed. It already says Mission Control updates it only from verified evidence and accepted mission state, and that builder-only code, green CI, deployment or a merged PR do not prove completion (§2 rules 4 and 7). These rules add what it lacks (03 `RG-01`, `RG-02`):

- **(a)** update only from the accepted Contract Reconciliation, counting only `DEMONSTRATED` rows;
- **(b)** `IMPLEMENTED + SUFFICIENTLY ALIGNED` requires every applicable Build Now requirement demonstrated across the advancing missions, meeting the contract's own completion gate; otherwise the state stays `IMPLEMENTED BUT INCOMPLETE` or `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING`; unknown stays `CANNOT CURRENTLY VERIFY`;
- **(c)** "Exact blocker / gap", "Dependencies remaining", "Not authorized now" and "Next advancement" are derived from rows that are not `DEMONSTRATED` plus `ASSIGNED TO LATER MISSION` rows, and point to the mission's Contract Reconciliation, so no residual disappears into prose;
- **(d)** no upgrade from a builder report, merged PR, green CI, deployment, or acceptance-with-follow-up on a non-demonstrated row;
- **(e)** a downgrade is recorded when later drift is found;
- **(f)** timing follows View §12 ("At Mission Acceptance"), which conflicts with the sentence at View §7 that closure updates rows; the amendment reconciles them, and closure evaluates the feature-level status;
- **(g)** **no status upgrade from a partial mission.** A mission that demonstrates some rows records progress in the fact fields only (latest verified advancing mission, dependencies closed and remaining, residual requirements, blockers, next advancement). It cannot set `IMPLEMENTED + SUFFICIENTLY ALIGNED` or move the acceptance state off its default (§18.6).

### 16.11 Keeping the burden proportionate

Rows are references to source text, mapping is keyed by ID, wholly inapplicable or already-demonstrated sections can be single rows, and completeness is a set-difference check rather than a reading exercise. The Phase 1 guide §16 already lists "contract-to-code/test/runtime traceability" as recommended tooling; building any such tool would need separate authorization and is not proposed here. The cost is concentrated at Stage 2 and is not measured in this draft; it must be measured on `SB-P-1.12` and the rules tuned if it defeats the speed objective, but only with Founder approval, because the tuning would loosen a Founder requirement.

## 17. Traceability

**Founder addendum requirements**

| Requirement | Section |
|---|---|
| 1. Mandatory FCTM at intake | §5.1, §5.2, §16.2 to §16.4 |
| 2. Explicit handling of every applicable approved requirement | §16.3, §16.4 |
| 3. No silent omission or unauthorized Build Now or Build Later movement | §16.5, §5.3 (T7) |
| 4. Blueprint, EIS, implementation and verification traceability | §6.1, §7.1, §7.2, §8.4, §16.6 |
| 5. Independent verification of material coverage and drift | §9.3, §16.7 |
| 6. Completion Report reconciliation against the contracts | §10.1, §16.9 |
| 7. Completion view updated only from demonstrated completion | §10.2, §10.3, §16.10 |
| 8. Founder escalation for conflicts or proposed changes | §5.3 (T7, T8), §16.8 |

**Design outcomes**

| Design outcome (mission README) | Section |
|---|---|
| DO-01 Stage 2 truth and delta | §5.2 |
| DO-02 Conditional Founder gate | §5.3 |
| DO-03 Blueprint assembly | §6.1 |
| DO-04 Integrated or parallel Builder and Engineering review | §6.2 |
| DO-05 Parallel security and Supabase review | §6.2, §7.1 |
| DO-06 Builder-neutral lifecycle | §8.2 |
| DO-07 Conditional external-tool brief | §8.3 |
| DO-08 Workstreams without new mission IDs | §8.1 |
| DO-09 Human runtime with Founder-reserved scenarios | §9.1 |
| DO-10 Mandatory Stage 19 | §9.3 |
| DO-11 Finding-scoped Stage 20 | §9.4 |
| DO-12 Combined Stage 21 and 22 | §10.1 |
| DO-13 Stage 24 closure package | §10.3 |
| DO-14 Stage does not require its own PR | §3.1 PR-1 |
| DO-15 Checkpointing | §3.2, §3.3 |
| DO-16 Migration authority as workstream | §11.3 |
| DO-17 CI baseline wording | §11.4 |
| DO-18 Topology wording | §11.5 |

Mandatory requirements: dual intake preserved verbatim (§4); backfill not claimed complete and not blocking (§4); Stage 19 preserved (§9.3); production default-deny (§11); Founder decision ownership (§5.3, §6.3, §9.1); human merge (§3.1 PR-4).

Hard boundaries from the mission README are untouched by design: no activation of `SB-P-1.12`, no Product Truth change, nine-mission sequence unchanged, no removal of Stage 19, branch protection and human merge unchanged, production controls unweakened, human runtime verification kept, specialist review kept where risk requires, no application code, no Stage 4B, no claim of backfill completion, no automatic institutionalization of OLE candidates, no self-merge.

## 18. Design addendum — Mission Control review of PR #605 (2026-09-19)

### 18.1 Status and scope

This addendum answers the Mission Control review comment on PR #605. That review is design review, not governance approval, a Founder decision or merge authorization. The addendum is narrow: it corrects or clarifies the draft, edits no governing source, does not activate `SB-P-1.12`, and does not itself approve any decision gate.

Mission Control accepted for further design, and this addendum leaves unchanged: the dual historical-memory and applicable mission-scoped validated OLE intake (§4, verbatim); the Founder no-silent-omission and no-deferral rule; FCTM source-to-implementation-to-verification traceability; independent source-contract coverage review; the narrow View update protocol and status criteria (`RG-01`, `RG-02`); and the `IVP-01` coverage method. The nine-mission direction and the 25 contracts are preserved. **Only contract 21 was opened; the other 24 contracts have not been audited**, and nothing here claims otherwise.

| Mission Control finding | Where addressed |
|---|---|
| 1 Stage 2 and Stage 4 actor drift (Codex default) | §18.2 |
| 2 Authority-speed proposals stay unapproved; fail-closed fallback | §18.3, §18.4 |
| 3 FCTM efficiency and vocabulary | §18.5 |
| 4 Stage 23 and the View; progress versus demonstration | §18.6 |
| 5 Security and CI as a separate decision; exact live state | §18.7; 01 §3.4 |
| 6 Migration reconciliation; default-deny preserved | §18.8; 01 §3.7; 03 `MG-03` |
| Publication issue (commit-message authorization) | §18.9 |

### 18.2 Definition Actor: Codex is not the default (Finding 1)

Stage 2 (Mission Truth and Delta Reconciliation), the preparation of Stage 3, and Stage 4 (Blueprint Assembly) are owned by a **Definition Actor**: a qualified actor appointed by Mission Control in the Stage 1 record. Claude Code or another authorized actor may be appointed where fit. **Codex is not the mandatory or default owner.** The default Codex-led rediscovery and Founder-question sequence is removed. Codex remains available for separately appointed review or research, and for independent Stage 19 verification when selected under Source 18 §4.9.

**Stage 1 appointment record:** the actor, why it is fit for this mission's contract areas, its prior contributions, the separation assessment below, and named alternates.

**The conditional Founder Decision Gate is preserved unchanged** (§5.3, T1 to T8). The Founder is asked only about genuine open decisions, conflicts or proposed changes. Where the gate is triggered, Mission Control designates who conducts the dialogue, for the triggering items only.

**Role separation.** Making the definition role actor-flexible concentrates roles unless separation is stated. Source 18 §3 requires product definition, engineering specification, implementation, verification and acceptance to be separate. The rule is by role, not by provider:

| Role | Stages | Held by | Constraint |
|---|---|---|---|
| Definition Actor | 1 (appointment), 2, 3 (preparation), 4 | Mission Control-appointed qualified actor | Cannot approve its own Sections 1–19; Mission Control approves at Stage 5 |
| Engineering Review and EIS | 6 to 7, 9 | Mission Control-appointed (Claude Code under Source 18 §4.4 today) | If the same actor is also the Definition Actor, Mission Control records a separation assessment at Stage 1 **and**, on a material-risk mission (§6.2), a parallel specialist who did not author Sections 1–19 reviews the feasibility and risk findings |
| Builder | 15 to 16 | Authorized builder per workstream | Where the Definition Actor is also a workstream's builder, Mission Control records the assessment and prefers different actors where one is available |
| Independent verifier | 19 | Appointed under §4.9 (Codex when selected) | Not the implementer, corrector or transferer; checks coverage against the source contracts, and records a separation assessment if it authored the FCTM (§16.7) |
| Acceptance | 23 | Mission Control, with the Founder where required | Unchanged |

Unchanged: Stage 5 approval before Builder Review, no self-approval, Founder approval at Stage 8, and the verifier's Codex utilization classification.

### 18.3 Decision gates remain unapproved

The following are open Founder decisions and are not approved by this draft, by the Mission Control review, or by the Git grant used to publish the draft: **DG-1** (branch-effective Class 2 records and the five-gate merge model), **DG-2** (work-package-scoped Git authority), the **G3 verified-code-only merge rule** (D-03), and the **rewording of mandatory gate 2** (03 `S18-09`).

**A committed branch record is not approved canonical execution authority.** No text in this draft relies on a branch record for production or migration authority, a Founder Product Truth decision or classification change, the Blueprint lock, build authorization, acceptance or closure. Those are Class 1 under every model (§3.3).

### 18.4 Fail-closed operating model if the Founder declines branch-effective authority (Finding 2)

This is the operating model that applies today, because nothing is approved, and permanently if DG-1 is declined. It works within the current gates and the current canonical activation rule, which treats an authority-bearing record as effective only when a human merges it to `main`. It is not conditional on DG-1 or DG-2.

**Principles**

- **FC-1 Preparation is not authority.** A commit or pull request head is preparation. Nothing on an unmerged branch is relied on as an approval, lock, authorization, acceptance or closure.
- **FC-2 Bundled preparation.** One canonical Mission Control instruction may authorize the preparation of several adjacent documentary artifacts, each marked `DRAFT — NOT AUTHORIZED`, provided none needs an authority that has not yet been merged. The instruction lists the artifacts, the order and the stop conditions. Preparation is at risk: if an earlier artifact is returned, dependent drafts are reworked.
- **FC-3 One canonical crossing per gate.** Each gate crossing is one pull request containing the artifact and Mission Control's decision record, which names the exact reviewed SHA. The human merge is the ratification. A refinement round is a review comment and a new commit on the same pull request, not a new authorization pull request.
- **FC-4 Founder decisions are recorded after they are given.** A Founder decision or approval record is written only once the Founder has given it, and is effective on merge.
- **FC-5 Stop on any trigger.** If T1 to T8 fires, preparation of dependent artifacts stops until the Founder decides.
- **FC-6 Never branch-effective:** the six items listed in §18.3.

**What may be prepared together, and what may not**

| Prepared together, at risk, under one bundled instruction | Must wait for the earlier canonical record |
|---|---|
| FCTM, Delta, Institutional Learning Intake Record, Gate Record and the Blueprint 1–19 draft, when no T-trigger has fired (one Stage 5 record covers all) | Builder Review before Engineering Review, under **current** gate 2 (overlap only if `S18-09` is approved) |
| Parallel specialist reviews (read-only findings, not authority) | EIS creation before the canonical Blueprint lock (gate 3) |
| EIS review disposition and lock as one record when there is no refinement | Implementation package before the canonical EIS lock (gate 4) |
| Engineering Contract, Builder Prompt and Verification Checklist authored and reviewed as a set | Any implementation before the canonical Implementation Authorization (gate 5) |
| Package lock and Implementation Authorization as one record | Evidence Package and Completion Report before Stage 19 (gate 8) |
| Evidence Package and Completion Report as a set after Stage 19 | Closure before canonical acceptance |
| Closure items after canonical acceptance | **Any production or migration act, ever, without its own Class 1 authorization** |

**Canonical crossings for a typical mission** (design estimate, not measured; excludes implementation code pull requests and corrections)

| # | Crossing | Contents |
|---|---|---|
| 1 | Initiation | Intake Pack, appointments and the bundled preparation instruction (as today) |
| 2 | Founder decisions | Only if Stage 3 is triggered; recorded after the Founder decides |
| 3 | Stages 2 to 5 | FCTM, Delta, Intake Record, Gate Record, Blueprint 1–19 and Mission Control's Stage 5 approval |
| 4 | Stage 6 | Builder Review and its approval (merged with crossing 5 only if `S18-09` is approved) |
| 5 | Stages 7 and 8 | Sections 20–21, specialist findings, Mission Control review, the Founder's recorded approval and the Blueprint lock |
| 6 | Stages 9 to 11 | EIS, parallel specialist confirmations, one disposition and the EIS lock |
| 7 | Stages 12 and 13 | Package as a set, package lock and Implementation Authorization |
| 8 | Stages 15 to 18 | Implementation pull requests as the authorization permits (the verified-code-only rule is not adopted), builder report, runtime findings and Mission Control's runtime review |
| 9 | Stage 19 | Verification report and Mission Control's review |
| 10 | Stage 20 | Corrections, if any, finding by finding |
| 11 | Stages 21 and 22 | Evidence and Completion package |
| 12 | Stage 23 | Acceptance and the View update |
| 13 | Stage 24 | Closure package |

That is roughly ten to thirteen human merges before implementation code and corrections, against 266 pull requests for SB-P-1.11. Under DG-1 as proposed it would be five. The fail-closed model gives fewer, larger canonical records; it does not give fewer authority checks. Every crossing remains a human decision.

### 18.5 FCTM efficiency and vocabulary (Finding 3)

- **E-1 One matrix, referenced not copied.** Requirement text lives only in the source contracts. The FCTM stores row IDs, pointers, dispositions and citations. Downstream artifacts carry compact ID-keyed mapping tables that are checked by set difference against the FCTM and never restate requirement text. The Contract Reconciliation is the final-status column of the same FCTM, and the Experience Verification Matrix is a filtered view of the same rows. Nothing is typed twice.
- **E-2 Granularity.** Obligation-level rows are required for `IN SCOPE` rows, partially delivered sections and mixed sections. A section may be a single row only when the **whole** section has one non-`IN SCOPE` disposition and one citation (`NOT APPLICABLE`, `DELEGATED`, `OUT OF BUILD SCOPE`, `ASSIGNED TO LATER MISSION` for a wholly later section, or `ALREADY DEMONSTRATED` for a wholly demonstrated section with evidence). A section-level row expands to obligation level when a mission takes any part of it in scope, and it is carried forward until then, so it cannot be lost. The verifier's section-inventory check (§16.7) confirms no section is absent. Completeness of the obligations inside an assigned-later section is therefore deferred to the mission that takes it, not skipped.
- **E-3 `ALREADY DEMONSTRATED` is not `PASS`.** The disposition needs (a) the earlier mission's verified evidence cited by path and commit or run identity, (b) a Delta impact check showing code, permissions, configuration and environment relevant to it are unchanged (the `SB-IV-1.0` §9 carry-forward test), and (c) it is reported as `DEMONSTRATED — CARRIED FORWARD (<original evidence>)`, never relabelled as newly executed. With no traceable evidence, or a Delta finding that invalidates it, the row is `IN SCOPE`. No contract is currently proven complete (View §6), so most inherited rows will be foundation slices.
- **E-4 Vocabulary.** Two different things are kept apart.

  | Term | Dimension | Meaning |
  |---|---|---|
  | `BUILD LATER` | **Build commitment** (View §4.2), a product commitment | The Founder-approved position that the capability is committed but is not part of the Build Now set |
  | `ASSIGNED TO LATER MISSION` | **Mission assignment**, scheduling (Build Plan §9 to §12) | A `BUILD NOW` requirement scheduled to a mission other than this one by an approved source |

  A `BUILD NOW` requirement assigned to a later mission stays `BUILD NOW` and never becomes `BUILD LATER`. Only a Founder decision changes a commitment; moving an assignment beyond the approved sources also needs one. `OUT OF BUILD SCOPE` means the approved **commitment** is `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT`.
- **E-5 Residual Build Now beside an accepted partial workstream.** An accepted partial foundational workstream marks the rows it delivered `DEMONSTRATED`. Every remaining Build Now obligation of the same section or contract is recorded as `ASSIGNED TO LATER MISSION` (with the owning mission and source) or `IN SCOPE — NOT DEMONSTRATED`. Acceptance of the workstream never closes the residual.
- **E-6 Technical incompleteness gives no right to reclassify.** Difficulty, a partial foundation, a missing dependency, an incomplete implementation, cross-layer complexity, add-on status or an older label never authorizes a change of commitment or assignment. The row stays `IN SCOPE` (marked partial or blocked, with the reason) and the Founder decides through T7 or T8.
- **E-7 Row volume is unknown.** No per-contract row count has been measured, and only contract 21 was inspected. On `SB-P-1.12` the Stage 2 record states the row count and effort per contract, and Mission Control reports them. Any tuning that would loosen a rule needs Founder approval. No effort saving is claimed.

### 18.6 Accepted mission progress versus complete feature demonstration (Finding 4)

Four levels are kept apart:

| Level | Question | Where recorded | Can be reached by a partial mission |
|---|---|---|---|
| Mission acceptance | Was this mission's authorized scope verified and accepted? | Stage 23: `ACCEPTED` or `ACCEPTED WITH FOLLOW-UP` | Yes |
| Requirement demonstration | Is this requirement demonstrated with evidence? | FCTM final status, Contract Reconciliation | Yes, per row |
| Contract completion | Are all applicable Build Now requirements of the contract demonstrated, meeting its completion gate? | Contract Reconciliation totals; the contract's own completion gate | No, unless all rows across missions are demonstrated |
| Feature status | What state is the feature in program-wide? | The View | Only by the rule below |

**Bounded follow-up** means an evidence gap that is outside every `IN SCOPE` row, or a non-blocking issue that maps to no `IN SCOPE` row, with an owner and the mission or gate that will verify it (for example release verification, as in SB-P-1.11 `F23-04`). It never covers a non-demonstrated `IN SCOPE` row: that is a scope deviation needing a recorded Founder decision.

**View update.** At Mission Control acceptance, update the View from the accepted Contract Reconciliation. At closure, verify the resulting state. **No status upgrade from a partial mission:** progress is recorded in the fact fields only (latest verified advancing mission, dependencies closed and remaining, residual requirements, blockers, next advancement). `IMPLEMENTED + SUFFICIENTLY ALIGNED` and any move of the acceptance state off `NOT YET ACCEPTED AS MATURE FEATURE` require every applicable Build Now requirement demonstrated across the advancing missions and the contract's completion gate met. Whether a partial mission may move a feature between the non-terminal implementation values is left open as **D-15**; until it is decided the strict default applies. A closure record states plainly that `COMPLETED — FORMALLY ACCEPTED` does not mean the feature is complete.

### 18.7 Exact live protection state, and a separate decision (Finding 5)

Read-only `GET` calls against `SmartBusinessv1/smart-business` at **2026-09-19T08:55:38Z**. No write call was made and nothing was tested by attempting a merge.

| Item | State |
|---|---|
| Classic protection on `main` | Present |
| Required status checks | One: `Markdown Quality Gate` (GitHub Actions app), `strict: true`. **The Fast Gate jobs (Lint, Typecheck, Build, Fast Tests) are not required** |
| Pull request required | Yes; `required_approving_review_count: 0`; dismiss stale reviews `true`; code-owner review `false`; last-push approval `false` |
| Bypass pull-request allowances | None configured (`null`) |
| Administrator enforcement | `true` |
| Push restrictions | None (`null`) |
| Force push, deletion | Both `false` |
| Conversation resolution | `true` |
| Linear history, signed commits, branch lock | All `false` |
| Repository rulesets | None (`[]`); effective rules for `main`: none (`[]`); organization rulesets not applicable (the owner is a user account, the API returned 404) |
| CODEOWNERS | None in `CODEOWNERS`, `.github/CODEOWNERS` or `docs/CODEOWNERS` |
| This session's credential | `admin`, `maintain`, `push` all `true`. Merge capability was not tested |
| Merge methods | Merge commit, squash and rebase allowed; auto-merge disabled |

**Reading it.** A green Fast Gate does not block a merge. Human merge is enforced by policy and credential separation, not by review rules: a pull request needs no approving review, and there is no bypass actor, but a credential with administrator permission can merge once `Markdown Quality Gate` passes.

**Options for a separate, separately authorized decision, not recommended here beyond presenting them:** (a) keep the status quo; (b) require the Fast Gate jobs, which improves quality gating and adds no human-approval separation; (c) require at least one approving review from an identity other than the author, which works only if a second GitHub identity exists (unknown); (d) code-owner review on governance paths, with the same identity dependency; (e) reduce the AI credential's privileges so it cannot merge or change protection, which addresses AI self-merge directly and matches least privilege (Source 17 §A5: "AI permissions shall follow least privilege"). **No documentation package in this mission mutates branch protection or any repository setting.**

### 18.8 Production migration default-deny is preserved (Finding 6)

Nothing in this addendum, the fail-closed model, DG-1, DG-2, the Definition Actor, the FCTM, a View update, acceptance or a merge creates production or migration authority. A Migration Execution Authorization remains a Class 1 record, is never branch-effective, and never becomes Class 2 under any model. An `IN SCOPE` FCTM row that involves a database change authorizes **preparation**, not execution. A ledger match is evidence of state, not permission to execute.

**Reconciliation is evidence-based.** The 2026-08-06 to 2026-08-30 migration family is reconciled in 01 §3.7 and 03 `MG-03` against the actual GC-40 and Stage 19 records. In short: files 13 to 16 are evidenced by two independent point-in-time ledger observations (the GC-39 readiness report of 2026-08-28 and Stage 19), and file 15 also by an execution record; files 17 to 20 are the GC-40 four-migration package with a final independent read-only reconciliation; **file 21 has no production-application record in anything reviewed, and its own header describes preparation and test validation only, so its production status stays unverified.** No migration is marked production-applied by inference. The evidence is point-in-time; a current read-only ledger comparison needs its own authorization and has not been performed.

### 18.9 Publication authority-precision finding

**Finding AP-1.** The four-file Git grant used to publish PR #605 stated the AI, mission, repository, locked branch, base and scope, but **not commit-message authorization**. Protocol §16 and `AGENTS.md` require either permission to use mission-scoped descriptive commit messages or a specifically locked message. Commit `194b9a4b9dfd2ece65a419501fc29b90f8bd85ac` used a mission-scoped descriptive message, and that was disclosed in the report and the pull request.

- The history is not rewritten and nothing is force-pushed.
- It is recorded as a narrow administrative authorization-precision finding for Mission Control and Founder disposition (**D-16**). It is **not** precedent for DG-2 or for any broadening of Git authority.
- Future grants should state the commit-message clause in the Protocol §16 form, for example "using mission-scoped descriptive commit messages".
- **This revision was first prepared without Git authority and left uncommitted,** because the instruction for it granted none. Mission Control then issued a complete grant for publishing it: AI, mission, repository, locked branch, expected SHAs, exactly four files, and an approved mission-scoped descriptive commit message. That grant is limited to this four-file revision. It does not dispose of AP-1 (D-16), which remains open, and it is not precedent for DG-2.

### 18.10 What the addendum does not change

The dual-intake rule (verbatim); the conditional Founder Decision Gate and its eight triggers; the mandatory Stage 19; human merge; production default-deny; the nine-mission sequence; the 25 contracts; Product Truth; and every governing source.
