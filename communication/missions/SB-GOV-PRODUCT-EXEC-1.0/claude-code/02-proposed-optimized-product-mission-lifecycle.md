# SB-GOV-PRODUCT-EXEC-1.0 — Proposed Optimized Product Mission Lifecycle

**Mission ID:** `SB-GOV-PRODUCT-EXEC-1.0`

**Document:** `02-proposed-optimized-product-mission-lifecycle.md`

**From:** Claude Code — governance / engineering workflow reconciliation specialist

**To:** Mission Control

**Status:** `DESIGN RECONCILED TO FOUNDER DECISIONS — NOT ACTIVE GOVERNANCE — MISSION CONTROL REVIEW REQUIRED`

**Date:** 2026-09-19

**Revision:** two revisions of this design are published on PR #605 (commit `194b9a4b9dfd2ece65a419501fc29b90f8bd85ac`, then `440c3efaa8cfe8c11e10d7d7b678673dc69fde4a`). This third revision reconciles the design to the Founder decisions recorded in the PR #605 conversation on 2026-09-19 (first tranche, comment 5740893113; second tranche, comment 5740990250; D-15, comment 5741014275) and to Mission Control's pre-publication review (comment 5742096316). It was checked line by line against those comments before publication, and the corrections that check required are described in the publication report. It is published to PR #605 under Mission Control's narrow Final Reconciliation Draft Publication Authorization; the resulting commit SHA is given in the return message, not in this file.

> Nothing in this document changes any governing source. It is a design for review, and none of it becomes active governance until a coherent redline is human-merged. Evidence and bottleneck analysis: [01](./01-current-state-and-bottleneck-analysis.md). Exact file-by-file changes: [03](./03-governance-amendment-map.md). `SB-P-1.12` remains `NOT ACTIVATED`.
>
> **The final Founder Decision Register is §14, and it supersedes every earlier status in this document and in earlier drafts, including the D-01 to D-16 table of the first published draft. The Founder's own PR #605 comments are the authoritative evidence: the register only reconciles them, and if the two ever differ, the comments control.** Several entries were decided differently from the original proposals: the branch-effective Class 2 model and the five-gate model were **not adopted** (canonical authority is kept); work-package Git authority was **approved only in a narrowly bounded form**; the risk-based retest exemption was replaced by **mandatory human retest after every correction**; the proposed generic builder filenames were **not adopted**; in-Product-Mission migration execution authority was **not adopted**; and D-15 was **approved as Option B**, which lets a partial mission move a feature between existing non-terminal states only on evidence. The verified-code-only merge rule (D-03) is an open separate proposal and branch-protection hardening (D-10) is deferred.
>
> Earlier sections that described a rejected proposal have been rewritten. The design text that remains is either Founder-decided, a necessary consequence of a decided item, or listed in §14.3 as proposed for confirmation at redline review.

---

## 1. Scope and design rules

**Objective:** `FAST + SECURE + TRACEABLE + SCALABLE`, with speed taken only from removing rediscovery, duplication and ceremony, never from removing security or human authority (activation basis, "Mission Control interpretation").

**Founder-approved invariants this design must not weaken**

1. Founder is final product authority; Mission Control orchestrates and accepts.
2. No self-approval and no self-verification.
3. Stage 19 independent verification is mandatory for every Product Mission.
4. Protected `main`, pull-request workflow, human merge. This is a governance rule. Its technical enforcement gap (§18.7, deferred decision D-10) stays visible and is never described as remediated.
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

Change classes: `KEEP`, `REFRAME` (same purpose, new input/output), `CONDITIONAL`, `PARALLEL`, `COMBINE` (one canonical record or one bundled preparation, separate recorded dispositions), `EXPAND`. "Crossing n" refers to the canonical crossings in §18.4.

| Stage | Proposed name | Class | Owner | Principal record |
|---|---|---|---|---|
| 1 | Mission Initiation and Intake Pack | REFRAME | Mission Control | Intake Pack (§5.1); FCTM opened |
| 2 | Mission Truth and Delta Reconciliation | REFRAME | **Definition Actor** appointed by Mission Control (§18.2); Codex is not the default | Mission Truth Pack: **FCTM populated**, Delta, Institutional Learning Intake Record |
| 3 | Founder Decision Gate | CONDITIONAL | Definition Actor prepares; Founder decides genuine open decisions only | Gate Record: `TRIGGERED` or `NOT TRIGGERED`; reopened by any Product Truth conflict or proposed change |
| 4 | Blueprint Assembly, Sections 1–19 | REFRAME | **Definition Actor** appointed by Mission Control (§18.2) | Blueprint assembled by reference; every FCTM row mapped |
| 5 | Mission Control Product Review | KEEP | Mission Control | Approval of Sections 1–19 |
| 6 | Builder Review | KEEP | Claude Code | Builder Review findings and its approval (crossing 4) |
| 7 | Engineering Review | KEEP, PARALLEL specialists | Claude Code; specialist reviews in parallel, read-only | Sections 20–21 |
| 8 | Founder Approval and Blueprint Lock | KEEP | Mission Control with Founder | Founder's recorded approval and the lock (crossing 5) |
| 9 | EIS Creation | KEEP | Claude Code | EIS with specialist findings pre-integrated |
| 10 and 11 | EIS Review and Lock | PARALLEL, COMBINE | Mission Control; specialists in parallel | One disposition; lock in the same record when unrefined (crossing 6) |
| 12 | Implementation Package | REFRAME | Claude Code | Three documents authored and reviewed as a set |
| 13 | Package Lock and Implementation Authorization | COMBINE | Mission Control | One record with expanded fields (crossing 7) |
| 14 | External-Tool or Human Brief | CONDITIONAL | Claude Code | Founder Brief, or `NOT APPLICABLE — JUSTIFIED` |
| 15 | Implementation by workstream | REFRAME | Authorized builder(s) | Implementation pull requests as the authorization permits |
| 16 | Builder Completion Report and Verification Packet | REFRAME | Authorized builder(s) | Report per workstream; existing `lovable-build-…` paths kept, with an unmistakable builder byline (§8.2) |
| 17 | Human Runtime Verification | REFRAME | Founder for reserved scenarios; named human for delegable ones | Runtime findings |
| 18 | Mission Control Runtime Review | KEEP | Mission Control | Disposition; verifier activated (crossing 8) |
| 19 | Independent Verification | **KEEP — MANDATORY** | Mission Control-appointed actor (§4.9) | Verification report, including coverage and drift results (crossing 9) |
| 20 | Corrective Cycle | REFRAME | Mission Control assigns builder | Finding-scoped correction, then **mandatory human retest** of the affected behaviour; no row removed or deferred (crossing 10) |
| 21 and 22 | Evidence and Completion Package | COMBINE | Claude Code | Manifest-first evidence; Completion Report with **Contract Reconciliation** and Experience Verification Matrix (crossing 11) |
| 23 | Mission Control Acceptance | KEEP | Mission Control (Founder where required) | Disposition; **Global Product Completion View updated from the accepted Contract Reconciliation, on evidence only** (crossing 12) |
| 24 | Closure Package | EXPAND | Assigned by Mission Control | Closure, OLE disposition, feature-level completion evaluation, residual carry-forward, archive (crossing 13) |

The FCTM (§16) is carried through every stage: opened at 1, populated at 2, escalated at 3, mapped in the Blueprint at 4, feasibility-checked at 6–7, mapped in the EIS at 9, in the package and Verification Checklist at 12–13, evidenced at 15–18, verified at 19, reconciled at 21–22, and applied to the completion view at 23.

```text
Phase A  Intake and product basis          Stages 1–5     crossings 1–3
Phase B  Review and lock                   Stages 6–8     crossings 4–5
Phase C  Specification and authorization   Stages 9–13    crossings 6–7
Phase D  Build and runtime                 Stages 14–18   crossing 8, plus implementation pull requests
Phase E  Verification and correction       Stages 19–20   crossings 9–10 (per workstream where defined)
Phase F  Evidence, acceptance, closure     Stages 21–24   crossings 11–13
```

The Founder decided (D-01, D-02a, D-14) that authority stays canonical: an authority-bearing record is effective only when a human merges it to `main`. Each crossing is one human-merged pull request holding the artifact and Mission Control's decision record. That is roughly ten to thirteen human merges before implementation code and corrections, against 266 merged pull requests for SB-P-1.11. It is a design estimate to be measured on `SB-P-1.12`, not a forecast. The five-gate model with branch-effective records was not adopted.

### 2.1 Revised mandatory gate order (replaces Source 18 §9)

1. Sections 1–19 approval before Builder or Engineering Review.
2. Builder Review approval before Engineering Review begins. **Unchanged.** The proposed rewording (approval, not drafting, as the binding point) has no Founder decision and is excluded from the redline (§14.3).
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

## 3. Mechanics: canonical crossings, Stage Ledger and bounded Git work packages

> **Status.** §3.1 is **Founder-decided** (D-01, D-02a, D-14): authority stays canonical. §3.3 is **Founder-approved design in a narrowly bounded form** (D-02b). Neither is active governance until a coherent redline is human-merged. §3.2 is proposed for confirmation at redline review (§14.3).

### 3.1 Canonical authority and fail-closed preparation (decided)

A committed branch record is **never** approved authority. An authority-bearing record is effective only when a human merges it to `main`, which this document calls canonical.

The branch-effective ("Class 2") records, the five-gate merge model and the Decision Provenance table proposed in earlier drafts were **not adopted** (D-01, D-02a). Nothing that gates a stage, meaning an approval, lock, authorization, acceptance or closure, may rest on an unmerged branch record. The EIS lock is canonical like every other lock: it is merged at crossing 6, and the package is prepared only after that merge (§18.4).

What applies instead is the fail-closed model of §18.4 (D-14): preparation is not authority; one canonical instruction may authorize at-risk bundled preparation of adjacent draft artifacts; each gate crossing is one pull request holding the artifact and Mission Control's decision record; refinement rounds are review comments and commits on the same pull request.

Existing rules kept, restated:

- A draft pull request may be opened at first push so the Fast Gate runs (it triggers only on pull requests and pushes to `main`). A draft pull request is not a merge event.
- Only a human, or a separately approved mechanism under Protocol §22, merges. No AI merges, approves or reviews its own work.
- Mission Control may require an additional pull request at any time.
- A merge deploys nothing: all AWS workflows are `workflow_dispatch` only, and delivery is a release action (§11).
- When implementation code reaches `main` follows the Implementation Authorization. The verified-code-only rule is **not adopted** (D-03 is an open separate proposal, §19.1).

**Never branch-effective:** production or migration authority; a Founder Product Truth decision or classification change; the Blueprint lock; build authorization; acceptance; closure.

### 3.2 Stage Ledger (proposed for confirmation)

The mission `README.md` (Source 18 §10 already requires it) gains one table, updated at each stage completion:

| Stage | Disposition | Owner | Artifact | Reviewed head SHA | Decision reference | Date |
|---|---|---|---|---|---|---|

Dispositions: `COMPLETE`, `NOT TRIGGERED`, `NOT APPLICABLE — JUSTIFIED`, `COMBINED WITH STAGE n`. It gives one place to see the stage trail and the exact SHA each Mission Control decision reviewed. It is an audit aid, not an authority record.

### 3.3 Bounded work-package Git authority (D-02b, approved design)

Today Git authority expires when the authorized stage completes (Protocol §21; `AGENTS.md:203`). The Founder approved a **work-package** alternative **only in the following bounded form**. Every element is mandatory; a missing or ambiguous element means the AI stops and asks (Protocol §16 already says so).

1. **Named actor:** the AI.
2. **Mission** identifier.
3. **Repository.**
4. **Locked branch,** or the standard mission-branch pattern.
5. **Exact paths or scope.** No blanket scope; no `git add .`.
6. **Permitted Git operations,** listed (for example fetch, fast-forward pull, create or switch to the authorized branch, exact-file staging, commit, push of the authorized branch, open or update a pull request). Anything unlisted is not permitted.
7. **Commit-message and trailer rule:** either mission-scoped descriptive messages or an approved subject text, **and** whether the standard `Co-Authored-By` attribution trailer is permitted, required or excluded. This closes the gap recorded as AP-1.
8. **Expiry:** an end event and an end date, whichever comes first.
9. **Stop and revocation conditions:** every event in Protocol §21 plus Mission Control revocation.
10. **The ordered stages or steps** the work package covers.

**Limits, all preserved.** Git permission never creates execution authority: no production or migration act, and no approval, lock, authorization, acceptance, closure or merge. No self-approval and no self-merge. Canonical authority stays as decided in D-01 and D-02a. A work package cannot include a step whose authority has not yet been merged.

**Illustrative grant wording** (the form the Protocol §16 sentence would take):

> Founder/Mission Control authorizes [AI NAME] for mission [MISSION-ID] to operate on repository [OWNER/REPOSITORY] under work package [WP-ID] covering [ordered stages or steps], using [the standard mission-branch convention | locked branch NAME], limited to [EXACT PATHS], permitted only to [LISTED GIT OPERATIONS], using [mission-scoped descriptive commit messages | the approved commit subject TEXT] with [the standard Co-Authored-By trailer required | permitted | excluded], until [END EVENT] or [DATE], whichever is first, stopping on any event in Protocol §21 or on revocation. This grants Git permission only. It grants no authority to approve, lock, authorize, execute, accept, close or merge.

**Safeguard comparison** (requested in the Founder's first tranche):

| | Stage-scoped (today) | Bounded work package (approved design) |
|---|---|---|
| Grants per mission | One per stage | One per named work package |
| Actor, mission, repository, branch, paths | Required | Required |
| Operations | Implied by Protocol §8 | **Listed; unlisted is not permitted** |
| Commit message and trailer | Message only (trailer unaddressed) | **Both stated** |
| Expiry | Stage completion and Protocol §21 events | Named end event **and date**, plus every §21 event |
| Execution or approval authority from Git permission | None | None |
| Self-approval or self-merge | Prohibited | Prohibited |
| Branch protection | Unchanged | Unchanged |

### 3.4 Handover and communication

- Handover records (Source 18 §12) are written when the **owner changes** and at each canonical crossing, not at every stage.
- `communication/live/` remains a transient pointer. Substantive stage reports live in `communication/missions/[MISSION-ID]/` and the base pair is reused, as Protocol §27 already requires. Numbered chains stay a non-default option.
- A refinement request may be a review comment on the open pull request that carries the artifact; the merged pull request is the record.

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
- the canonical crossing plan (§18.4), naming which artifacts are prepared together;
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

## 6. Stages 4 to 8 — Blueprint, review, lock

### 6.1 Stage 4 — Assembly by reference

- Approved truth is cited (contract section, Build Plan §10 subsection), not re-authored.
- New prose is limited to mission scope selection, the delta, dependencies and acceptance criteria.
- The canonical Section 1–19 structure of `SB-P-1.10` is preserved. `Not applicable — justified` still applies.
- **Experience anchors and Founder runtime scenarios** are seeded into Section 15 (Acceptance Criteria) from Build Plan §10, so the Experience Verification Matrix required by Build Plan §13 exists from the start and the Founder-reserved scenarios (§9.1) are locked at Stage 8. Adding a scenario is a product decision and triggers T3.
- A Section-to-source traceability table is added to Section 19 (Governance History). It is **keyed by FCTM row ID**: each row maps to the Blueprint section that carries it (scope in Section 8, rules in Section 10, dependencies in Section 12, acceptance scenarios and experience anchors in Section 15).
- **Section 11 (Out of Scope) lists every `ASSIGNED TO LATER MISSION`, `DELEGATED` and `OUT OF BUILD SCOPE` row** as "still committed / not in this mission" (the contracts' own Anti-Drift Rule wording), with the owning mission or the preserved classification. Out of scope never means dropped.
- **No orphan content.** Blueprint content that maps to no FCTM row is either a recorded mission-specific refinement or a scope expansion. A refinement that changes approved truth triggers T3; the mature contract already requires a Blueprint to state any intentional refinement or difference.
- The Definition Actor does not omit, defer, simplify, reclassify or expand an approved requirement to fit a narrower draft.

### 6.2 Stages 6 and 7 — Builder Review, then Engineering Review, with parallel specialist review

After Stage 5 approves Sections 1–19, Builder Review (Stage 6) is prepared and approved, and then Engineering Review (Stage 7) begins. **Gate 2 is unchanged.** The earlier proposal to overlap the two reviews by rewording gate 2 has no Founder decision and is excluded from the redline (§14.3). The two reviews remain separate canonical crossings (crossings 4 and 5, §18.4).

Specialist reviews run in parallel with each other and with the Engineering Review. They are advisory and read-only, record findings under `specialists/`, and issue no competing instructions (Source 18 §4.6–4.8). Their findings are preparation inputs, not authority.

**Specialist review is mandatory, not optional,** where the mission touches authority or permissions, RLS or grants, migrations, idempotency or concurrency, financial integrity, or a new external provider.

Section 20 or 21 also carries the **early delivery plan**: environments, the list of migrations expected and the rehearsal they need, cross-mission dependencies, the CI tiers that apply, and the production, migration and delivery scope flags carried from Stage 1. **Planning and rehearsal are early; execution is never part of a Product Mission** and needs a separately authorized migration mission (§11.3).

Section 20 or 21 also records, **per `IN SCOPE` FCTM row, a feasibility and risk finding**. A row found infeasible, unsafe or blocked is **not** quietly narrowed or moved: it stays `IN SCOPE`, is marked blocked with the reason, and raises T8. A security, integrity or privacy finding may block an unsafe implementation path but may not be turned into an unapproved decision that the feature should not exist (Feature Library README, Founder Build Commitment Rule).

Stage 5 also checks the FCTM (§16.4 completeness test) together with the Institutional Learning Intake Record (gate 10).

### 6.3 Stage 8 — Founder approval and lock

The Founder approves Sections 1–21, confirms the FCTM and Truth Pack summary, and confirms the Founder-reserved runtime scenarios and the production and migration scope flags. Mission Control applies the lock. **The lock freezes every FCTM row's disposition, build commitment, commercial classification and mission assignment**; after it, any change requires a Founder decision (§16.5). The Founder's approval is recorded only after the Founder gives it, and the lock is a canonical record, effective when a human merges it (crossing 5).

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

One canonical record (crossing 7), effective when a human merges it. Source 18 already lists the minimum fields; the expanded set is (items 2, 4, 5 and 6 are proposed for confirmation, §14.3; items 1, 3, 7 and 8 follow decided items):

1. authorized package version, locked Blueprint and EIS references, authorized branch, prohibited changes, date, Mission Control authority reference (unchanged);
2. **workstream register** with, per workstream, scope, authorized builder, paths, contracts advanced, risk class;
3. **environments**: test project identity, runtime-verification environment, and production, migration and delivery stated as `NOT AUTHORIZED`; migration execution needs a separately authorized migration mission (§11.3);
4. **CI baseline**: Fast Gate results required at each checkpoint; Full Assurance applicability by trigger path (§11.4);
5. **verification plan**: appointed verifier and eligible alternates, prior-contribution and independence assessment (Source 18 §4.9), Codex utilization classification, Class A boundaries (`SB-IV-1.0` §4);
6. **runtime verification plan**: Founder-reserved scenarios and any delegated human verifier by name;
7. **Git authority** is **not** part of this record. It is granted separately under the bounded work-package form (§3.3), and this record grants no Git permission;
8. **FCTM reference**: the locked FCTM path and baseline SHA, the rows assigned to each workstream, and Mission Control's statement that the mapping completeness test (§16.4) passed against the Blueprint, EIS, contract and checklist.

Appointing the verifier here removes the late scramble; formal activation still happens at Stage 18, and a replacement remains a recorded Mission Control decision under §4.9.

## 8. Stages 14 to 16 — Workstreams and builder-neutral implementation

### 8.1 Workstreams

A **workstream** is a separately built and verified slice inside one Product Mission (for example `SB-P-1.18` Order and Delivery, Staff/HR, Compliance, which Build Plan §10.7 already calls "separately verifiable"). Identifier form `SB-P-1.18/WS-A`. Workstreams **never** create Product Mission IDs, matching Build Plan §9. The register is set at Stage 1, fixed at Stage 13, and needs no separate authorization per workstream unless scope changes. The `GC-n`, `IMPL-n`, `LOV-*` sub-mission pattern of SB-P-1.11 is replaced by workstream rows and checkpoint commits.

### 8.2 Builder neutrality

- "Lovable owns implementation" (Source 18 §4.5) becomes "the **authorized builder** for a workstream owns implementation", with Lovable one option. Claude Code is an authorized builder where the Implementation Authorization says so, which matches SB-P-1.11-IMPL-1.
- **Artifact names are kept (D-05).** The existing Lovable-specific paths (`lovable-build-prompt.md`, `lovable-build-completion-report.md`) are not renamed, and the proposed generic filenames are **not** introduced. Builder neutrality lives in the roles of Source 18, not in filenames. **Truthful attribution rule:** wherever Claude Code or another actor is the assigned builder, the artifact at the existing path must carry a byline and a builder-identity field that make the real actor unmistakable, and nothing in it may imply that Lovable implemented work it did not. If keeping the existing name would genuinely mislead, the author flags the naming conflict to Mission Control instead of silently renaming or restructuring a historical artifact.
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
- migration planning and rehearsal artifacts are verified like any other deliverable; **no production probe or execution is ever implied by Stage 19**, and a migration's actual execution and its own verification belong to a separately authorized migration mission (§11.3);
- the verifier records independence and prior-contribution facts as §4.9 requires;
- the verifier does not implement the corrections it finds;
- **the verifier independently checks material coverage and drift** (§16.7): section-inventory completeness against the source contracts, classification and mission-assignment integrity, row-to-evidence mapping, drift of implemented behaviour from approved expected experience and permissions for material rows, and orphan implementation. This baseline is performed for every mission, whatever the Codex utilization classification.

### 9.4 Stage 20 — Corrective Cycle

Each material `FAIL` is corrected by a **finding-scoped corrective authorization** (a numbered record, not a Product Mission ID) naming finding IDs, allowed paths and the builder (never the verifier). Sequence: finding → narrow correction → full applicable deterministic CI → **human runtime retest** → Mission Control correction review → finding-specific independent re-verification → bounded result. Escalation to broader re-verification follows `SB-IV-1.0` §10.

**Human retest rule (Founder decision D-04, approved).** A human runtime retest is required after **every** correction, before correction acceptance and before re-verification closes. Its **scope may be finding-specific** and is not automatically the whole mission: it covers the affected behaviour and its regression surface, as Mission Control determines. Each retest records the **actor, the target, the scenarios, the expected and actual results, and the evidence**. There is **no automated-only waiver**: CI, tests and static review never replace it. Founder-reserved scenarios remain the Founder's or a confirmed delegate's. The earlier risk-based exemption (`HUMAN RETEST NOT REQUIRED`) is withdrawn. Prior reports and evidence are preserved as today.

**A correction never resolves a coverage finding by removing or deferring the row.** A correction for `SILENT OMISSION`, `DRIFT` or `ORPHAN` restores the approved behaviour or removes the unauthorized behaviour. If restoring it is impossible or unsafe, the row goes to the Founder (T7 or T8).

## 10. Stages 21 to 24 — Evidence, acceptance, closure

### 10.1 Stages 21 and 22 — combined package

After Stage 19 (neither may be created earlier) Mission Control authorizes one bundled preparation producing:

- an **Evidence Package that is manifest-first**: an index linking CI run IDs, the verification report, runtime evidence and provenance, storing only artifacts not otherwise durable;
- a **Completion Report** with two reconciliations: the **Experience Verification Matrix** required by Build Plan §13 (`PASS`, `FAIL`, `NOT APPLICABLE`, or justified `DEFERRED BY APPROVED DEPENDENCY`), which covers the experience anchors, and the **Contract Reconciliation** (§16.9), which covers **every** FCTM row against the approved feature contracts. The matrix is the experience subset of the reconciliation, and both cite row IDs.

One review; Stage 21 and Stage 22 dispositions are recorded separately in the Ledger. It is canonical crossing 11 (§18.4).

### 10.2 Stage 23 — Acceptance

Unchanged authority. Additions: the disposition states explicitly what it does not authorize (deployment, publication, migration execution, activation, pilot readiness, release, next mission) as SB-P-1.11's did; carried follow-ups each name an owner and the mission or gate in which they will be verified; a **Release Handoff Statement** records whether the accepted state is deployed, which migrations are applied in production, and what release authorization is still needed.

Acceptance is recorded against the Contract Reconciliation. An `IN SCOPE` row that is not `DEMONSTRATED` is **not** an ordinary follow-up: accepting it is a scope deviation and needs a recorded Founder decision (Source 18 Stage 23 already requires Founder approval for a scope deviation or a material unresolved follow-up). Acceptance never states contract-level completion.

**The Global Product Completion View is updated here**, in the same change as the acceptance record, because its own protocol updates affected rows "at Mission Acceptance" (View §12), and only from the accepted Contract Reconciliation (§16.10). The builder does not edit the view; Mission Control applies or approves the change. **Accepted mission progress is not complete feature demonstration.** A partial mission may record evidence-backed progress, including a move between existing non-terminal implementation states when the destination's criteria are met (D-15, Option B), and can never produce a mature-feature completion upgrade (§16.10, §18.6). The acceptance record and the view update are canonical crossing 12, effective when a human merges them.

### 10.3 Stage 24 — Closure Package

Stage 24 is expanded to carry the duties now scattered across `communication/README.md`, Protocol §26 and Build Plan §11. Order:

1. The acceptance record (crossing 12) is merged and canonical `main` is verified.
2. **Documentation closure record** (`COMPLETED — FORMALLY ACCEPTED`, final commit, deployment reference, follow-ups).
3. **OLE disposition**: the handoff initiated with its closure-envelope reference, **or** an explicit no-reusable-learning record with supporting evidence. Promotion review then proceeds inside OLE and **does not block** closure or the next activation; the next intake reads whatever is promoted at that time.
4. **Feature-level completion evaluation.** Confirm the view rows were updated at Stage 23 and evaluate each advanced contract's status independently of mission completion, as View §12 "At Mission Closure" requires: a mission can be `COMPLETED — FORMALLY ACCEPTED` while its feature remains `IMPLEMENTED BUT INCOMPLETE`. Record the remaining Build Now requirements per contract.
5. **Residual carry-forward.** Every row not `DEMONSTRATED` or `NOT APPLICABLE`, and every follow-up, is recorded with its owning mission so that mission's FCTM inherits it (§16.6). Follow-ups are carried forward, never erased.
6. Communication archive and live reset per Protocol §26, after items 2 to 5 are recorded and Founder or Mission Control confirms closure.
7. Mission Control updates `mission-control/mission_memory.md`.

The package is canonical crossing 13.

## 11. Production, migration, delivery and CI boundary

### 11.1 Default-deny

No stage, record, acceptance or merge creates production mutation authority. Every Implementation Authorization carries the lines `PRODUCTION MUTATION: NOT AUTHORIZED`, `MIGRATION EXECUTION: NOT AUTHORIZED`, `DELIVERY SYNC AND PUBLICATION: NOT AUTHORIZED`. A Product Mission never attaches an authorization that changes those lines: migration execution needs a separately authorized migration mission (§11.3), and delivery and publication are release actions.

### 11.2 Plan early

Scope flags at Stage 1, migration list and environment plan in Sections 20–21, pre-flight package in the EIS and contract, flags fixed at Stage 13. A need for a production migration is therefore known before the build, not discovered at Stage 19 as in SB-P-1.11.

### 11.3 Migration execution stays a separate mission (D-06, decided)

The Founder decided to keep the current migration boundary. Under `docs/migration/README.md`, a migration may be executed only through a new, current, explicit Founder- or Mission Control-authorized **migration mission** that identifies the eight elements it lists, and no completed or accepted mission authorizes repetition. That document, `AGENTS.md`, `CLAUDE.md` and `CHATGPT.md` need no migration-authority change. **The proposed in-Product-Mission Migration Execution Authorization (MX), its four extra elements and the related wording changes were not adopted and are removed from the amendment scope.**

| A Product Mission may | A Product Mission may not |
|---|---|
| Plan migrations early: Stage 1 scope flags, the migration list and rehearsal need in Sections 20–21, pre-flight content in the EIS | Execute a migration in any environment under Product Mission authority |
| Specify rehearsal on the isolated test project, matched to the real trigger path (Phase 1 guide §11) | Treat an `IN SCOPE` FCTM row that involves a database change as execution authority; it authorizes **preparation** only |
| Map cross-mission dependencies that a later migration mission will need | Infer permission from a Blueprint, EIS, package, Implementation Authorization, acceptance, merge or migration-ledger match |
| Draft SQL as a reviewed deliverable | Mark a historical migration production-applied without a cited record |

**Advisory notes for whoever later authorizes a migration mission** (not amendments): the two SB-P-1.11 GC-40 incidents were an execution-method limitation (`db push` cannot isolate one pending migration) and a ledger bookkeeping error; a future authorization should therefore state how a single migration is isolated and how the ledger is checked afterwards, use the repository wrapper (`npm run supabase:test`, `npm run supabase:production`) and never a bare CLI, record a pre-execution target identity check, and require an independent post-execution check of the ledger and of effective grants and RLS.

**Evidence-based factual reconciliation is retained** (03 `MG-03`), limited to what a cited record shows. Migration file 21's production status stays unverified (two secondary retrospectives of 2026-09-13 report it, and no primary record was located), and the file 11 ledger discrepancy stays an evidence question for Mission Control. Neither is a licence to infer an applied or executable state.

### 11.4 CI baseline wording

Fast Gate (lint, typecheck, build, Fast Tests) runs on every PR and push; Full Assurance (20 Supabase-dependent files) is path-filtered and manual. As of 2026-09-19 `[L]` the only required check on `main` is `Markdown Quality Gate`. Green Fast Gate is therefore a governance requirement at each checkpoint, not a branch-protection block, until the Founder decides otherwise (O-01). Full Assurance absence is `NOT APPLICABLE` only after checking both triggers and mission risk (`SB-IV-1.0` §6).

### 11.5 Topology wording

Canonical repository → production delivery repository → Lovable publication → production Supabase and domain, with a separate isolated test Supabase project. External facts are cited with source and date and freshly verified before any external action (Phase 1 guide §11). Delivery sync and publication remain release actions under Source 12 Part 4 with Founder approval; they are not part of any stage.

## 12. Control preservation

| Control | Where it lives today | In the proposed model | Changed |
|---|---|---|---|
| Founder final product authority | Source 18 §4.2, §2 | Stage 8 approval and lock; Stage 3 gate; Founder-reserved runtime scenarios | No |
| Mission Control acceptance | Stage 23 | Stage 23; canonical crossing 12; never branch-effective | No |
| No self-approval or self-verification | Source 18 §3, §4.9 | Independence matrix (§8.2); Definition Actor role-separation rule (§18.2); no AI approves or merges its own work (§3.1) | Strengthened |
| Separation of product definition and engineering challenge | Source 18 §3 ("separate product definition, engineering specification, implementation, verification, and acceptance") | Definition Actor may not be the only challenge to its own definition on a material-risk mission (§18.2) | Preserved when actor allocation becomes flexible |
| Mandatory Stage 19 | Stage 19 | Stage 19, restated | No |
| Human merge; protected `main` | Protocol §13, §22 | Every authority-bearing record human-merged to `main` at the 13 canonical crossings (§18.4); no branch-effective authority | No (fewer, larger events) |
| Server/database-side authorization, isolation, revalidation, negative paths | Phase 1 guide §9; Build Plan §13 | Specialist review mandatory on risk trigger (§6.2); Class A negative-path probes; Experience Verification Matrix | No |
| Environment identity verification | Migration README; Phase 1 guide §11 | Unchanged migration README; runtime evidence names environment; a future migration mission records its own identity check (§11.3 advisory) | No |
| Production default-deny; migration execution | `docs/migration/README.md` | §11.1 lines in every authorization; execution only through a separate migration mission (§11.3, D-06) | No |
| Claim-specific evidence | Phase 1 guide §8; `SB-IV-1.0` §6 | Manifest-first evidence still binds claim, SHA, run ID, environment | No |
| Runtime verification | Stages 17–18 | Retained, split into reserved and delegable | No |
| Specialist review where risk requires | Source 18 §4.6–4.8 | Mandatory on named triggers, parallel | No |
| OLE disposition before closure | `communication/README.md` | Gate 11, Stage 24 item 3 | Formalized in Source 18 |
| Branch protection | `branch-protection-verification.md` | Unchanged; the enforcement gap (O-01, O-02) is deferred (D-10) and stays visible (§19.2) | No |
| No silent omission, deferral or reclassification of approved requirements | Contracts' Anti-Drift Rule; Founder Build Commitment Rule; Build Plan §9, §13 | FCTM, classification lock, T7 and T8, Stage 19 coverage and drift check (§16) | Strengthened |
| Completion state based only on verified evidence | View §2 rules 4 and 7; §12 | Contract Reconciliation; demonstrated-only view update (§16.9, §16.10) | Strengthened |
| Definition, implementation, verification, acceptance and completion kept distinct | Phase 1 guide §4; Feature Library README | Requirement status vocabulary and feature-level evaluation at closure (§16.9, §10.3) | Strengthened |

## 13. Risks of the optimization and mitigations

| ID | Risk | Mitigation |
|---|---|---|
| R-01 | Bundled preparation makes a crossing pull request larger and harder to review | One artifact plus Mission Control's decision record per crossing; the Stage Ledger gives the reviewed SHA; Mission Control may require an extra pull request at any time (§3.1) |
| R-02 | Adjacent draft artifacts are prepared at risk before the gate that authorizes them, and the prepared work is later rejected or changed | Preparation is not authority and every dependent step waits for its canonical merge (§18.4, FC-1 to FC-6); rework cost is bounded to draft documents; nothing executable is prepared at risk |
| R-03 | Parallel review causes rework | S1–S4; sequential fallback; finding-scoped re-review |
| R-04 | Conditional Founder gate is misclassified | Uncited claims default to `UNRESOLVED`; Stage 8 backstop; T5 Founder override |
| R-05 | Builder neutrality creates independence conflicts or verifier scarcity | Independence matrix at Stage 13; alternates named up front; gate stays pending if none eligible |
| R-06 | Dual intake becomes a paper exercise | Per-promotion disposition with citations; Mission Control review at Stage 5; Class C existence check at Stage 19 |
| R-07 | Mission-scoped promotions applied as universal rules | Scope caveat in §4.1(4); applicability screen, not adoption |
| R-08 | Work-package Git authority is broader than stage-scoped authority | The ten mandatory elements of §3.3: named actor, exact paths, listed operations, commit-message and trailer rule, end event and date, every Protocol §21 stop event, revocation; Git permission never creates approval, lock, execution or merge authority |
| R-09 | Combined Stage 21/22 hides evidence gaps | Manifest-first still binds claim to provenance; separate dispositions; nothing before Stage 19 |
| R-10 | When implementation code reaches `main` stays undecided, so long-lived branches and late integration remain possible | The verified-code-only merge rule is not adopted (D-03) and is an open separate proposal (§19.1); timing follows the Implementation Authorization until the Founder decides |
| R-11 | Many simultaneous amendments create new drift | One atomic activation change; version and change-log rows; verification by a non-author (03 §7) |
| R-12 | Reliance on unverified external state | Stage 1 topology list; fresh verification before any external action |
| R-13 | The FCTM is filled in as a formality: rows are grouped so coarsely that omissions hide inside them | Row-granularity rule (§16.3): applicable requirements enumerated individually, no "etc."; the Stage 19 verifier re-derives each contract's section inventory from the source rather than trusting the matrix |
| R-14 | The coverage burden slows Stage 2 and erodes the speed goal | Rows are references, not prose; inapplicable and already-demonstrated sections may be single rows; downstream mapping is ID-keyed; completeness is a set-difference check (§16.11). Cost is not measured here and must be measured on `SB-P-1.12` |
| R-15 | The same actor writes the FCTM and later verifies coverage | The verifier checks against the contracts themselves; if the only eligible verifier authored the FCTM, Mission Control records a separation assessment (§16.7) |
| R-16 | Pressure to move an inconvenient requirement into "follow-up" or "later" | Classification lock; an `IN SCOPE` row cannot be an ordinary follow-up; any movement needs a Founder decision ID in the row (§16.5) |

## 14. Final Founder Decision Register

**Source.** The Founder decision comments on PR #605 of 2026-09-19: the first tranche (comment 5740893113), the second tranche (comment 5740990250) and the D-15 decision (comment 5741014275). Each row below was checked against the text of those comments, and Mission Control's pre-publication review (comment 5742096316) is the reference for the proposed-versus-approved boundary. **The comments are the authoritative record and this register is a reconciliation of them; on any difference the comments control.** This register supersedes every earlier status in this document and in earlier drafts, including the D-01 to D-16 table of the first published draft, several entries of which were decided differently. Where a decision refined a proposal, the refinement governs.

Nothing here is active governance. A decision is applied only when a coherent redline is human-merged (03 §6), and this register does not authorize the redline, the activation of `SB-P-1.12`, any Git operation, any migration or any change to branch protection.

### 14.1 The register

| ID | Request item | Founder decision | Status | Design section | Amendment items (03) |
|---|---|---|---|---|---|
| **D-01, D-02a** | 1 | Authority stays **canonical**: an authority-bearing record is effective only when a human merges it to `main`. The branch-effective (Class 2) record model, the five-gate merge model (PR-1 to PR-6) and the Decision Provenance table are **not adopted** | DECIDED — CANONICAL AUTHORITY RETAINED; PROPOSAL NOT ADOPTED | §3.1, §18.3, §18.4 | S18-18 and CP-04 rejected; S18-22 approved |
| **D-02b** | 2 | **Work-package Git authority, bounded form only.** Every grant names the actor, mission, repository, locked branch or standard convention, exact paths, listed Git operations, commit-message and trailer permission, an expiry (end event and date), the stop conditions and revocation, and the ordered steps covered. Git permission never creates approval, lock, authorization, execution, acceptance, closure or merge authority | DECIDED — APPROVED, BOUNDED | §3.3 | CP-05, CP-06, AG-02, AG-04, CR-04 |
| **D-03** | follow-up | The Founder **rejected the five-gate, G3-only verified-code merge rule as drafted**, because it depended on the declined DG-1, and requested a **separate, self-contained proposal if useful**. Any early or late implementation-merge rule needs a new independent proposal and a Founder decision. The rule is not adopted, and the canonical fallback is not blocked waiting for it | NOT ADOPTED — OPEN, SEPARATE DESIGN PROPOSAL (not drafted here beyond §19.1) | §3.1, §19.1 | None |
| **D-04** | 6 | **Human retest after every correction**, scoped to the affected behaviour and regression surface, recorded with actor, target, scenarios, expected and actual result and evidence. No risk-based exemption and no automated-only waiver | DECIDED — APPROVED | §9.4 | S18-15, IE-08 |
| **D-05** | 7 | **Retain the existing Lovable-specific artifact filenames** with truthful builder attribution. No mandatory generic builder filenames | DECIDED — APPROVED, REFINED | §8.2 | S18-12, PF-08, IE-02 |
| **D-06** | 8 | **Retain separate migration mission IDs and the current default-deny execution authority.** A Product Mission never executes a migration. No Migration Execution Authorization (MX) | DECIDED — APPROVED | §11.1, §11.3 | MG-01, MG-02, AG-01, CL-01, CG-01 rejected; MG-03 and S18-19 retained in reduced form |
| **D-07** | 9 | **Approved in principle:** Source 18 v1.2; Elaboration template `SB-P-PFEW-1.4`; Implementation and Evidence template `SB-P-IVEW-1.2`; Communication and Handover Protocol v1.1 **only if that protocol is substantively amended as approved**. The version changes become active only with a human-merged, coherent redline. No number was approved for the Independent Verification Efficiency Protocol, so its version is proposed explicitly (§14.4, 03 `IVP-01`) | DECIDED — APPROVED IN PRINCIPLE | — | S18-01, PF-01, IE-01, CP-01 |
| **D-08** | 10 | **Only necessary consistency edits and short intake pointers** (dual memory plus validated OLE, the FCTM, and the current Source 18), not the rejected migration-execution wording. `AGENTS.md`, `CLAUDE.md` and `CHATGPT.md` are amended only where an actual stale instruction or contradiction exists. Inspection result: `AGENTS.md` has two (the stage-scoped Git expiry and the missing trailer rule); `CLAUDE.md` and `CHATGPT.md` have none | DECIDED — APPROVED, RECONCILED WITH D-06 | §4, §3.3 | CP-02, AG-02, AG-03, AG-04, CR-04, SS-01 |
| **D-09** | 11 | **The historical Phase 1 institutional-memory guide is left unchanged.** Its stale statements are caught by the Stage 2 delta | DECIDED — UNCHANGED | §4.1 | PG-01 rejected |
| **D-10** | follow-up | **Branch-protection hardening is deferred as a separate decision.** No branch-protection mutation is made in this mission. The observed gap (Fast Gate not required; zero required approving reviews) stays an explicitly carried technical-enforcement gap, and is **not represented as remediated or as approved for permanent acceptance** | DEFERRED | §18.7, §19.2 | None |
| **D-11** | 3, 4 | **Mandatory Feature Coverage and Product Truth Traceability Matrix.** No silent omission, deferral, simplification or reclassification of Product Truth | DECIDED — APPROVED | §5, §16 | S18-21, PF-10, IE-11, IE-12, BP-09, IVP-01 and the FCTM parts of S18-05 to S18-17 |
| **D-12** | 15 | **Global Product Completion View:** keep the existing status names, clarify the criteria, show partial progress more clearly, and add an explicit evidence-reference column. The View stays simple and Founder-readable: it summarizes pointers and progress and never reproduces requirement rows, and the detailed evidence stays in the FCTM. Partial delivery never silently upgrades complete-feature status. The exact redline is reviewed before activation | DECIDED — APPROVED, REFINED | §16.10 | RG-01, RG-02, RG-03 |
| **D-13** | 12 | **Definition Actor.** A qualified actor appointed by Mission Control owns Stage 2, the preparation of Stage 3 and Stage 4. **Codex is not the default (and not mandatory).** Independence and the role-separation assessment are preserved | DECIDED — APPROVED | §18.2 | S18-03 and the Stage 2 to 4 items, PF-03, PF-04, PF-05 |
| **D-14** | 13 | **Canonical fail-closed bundled-preparation model:** preparation is not authority; one canonical instruction may authorize at-risk bundled preparation of adjacent draft artifacts; each gate crossing is one human-merged pull request | DECIDED — APPROVED | §18.4 | S18-22, CP-03 |
| **D-15** | 14 | **Option B, closed.** A partial mission may move a contract or feature between the **existing non-terminal implementation-state values** only when the destination label's explicit evidence criteria are met. It is a factual state update: not mature-feature acceptance, not a Build Now or Build Later change and not permission to omit a residual. Every movement cites the relevant FCTM row IDs and their `DEMONSTRATED` or carried-forward status, and undemonstrated rows stay listed. No new status label is authorized. The prohibition on mature-feature completion upgrades from partial work stays | DECIDED — CLOSED, OPTION B | §16.10, §18.6 | RG-01, RG-02, S18-16 |
| **D-16** | 16 | **AP-1** (the four-file grant lacked commit-message authorization) is accepted as a narrow administrative authorization-precision finding. No history rewrite and no precedent for DG-2. Future grants explicitly cover the approved subject or form and the standard trailer where allowed | DECIDED — ACCEPTED | §18.9 | AG-04, CP-05, CR-04 |
| **L-01** | 5 | **Dual intake**, Founder-locked and reaffirmed: "Every Product Mission intake must consume both current validated OLE learning and the canonical Phase 1 institutional-memory guide until Mission Control verifies that the historical OLE backfill is complete." Backfill: `NOT VERIFIED COMPLETE`, not started, not blocking `SB-P-1.12` | FOUNDER-LOCKED — REAFFIRMED | §4 | S18-02, PF-04, CP-02, SS-01, BP-06, BP-07 |

### 14.2 What was not adopted, and what is deferred

**Not adopted (removed from the amendment scope):** the branch-effective Class 2 model, the five-gate merge model, PR-1 to PR-6 and the Decision Provenance table; the Migration Execution Authorization and every wording change that existed only to support it; the mandatory generic builder filenames `builder-prompt.md` and `builder-completion-report.md`; the risk-based human-retest exemption; the "no state change from a partial mission" default (replaced by D-15 Option B); any change to the historical Phase 1 guide; any migration wording change to `AGENTS.md`, `CLAUDE.md` or `CHATGPT.md`.

**Deferred:** the rewording of mandatory gate 2 and the integrated Stage 6 to 7 mode (no Founder decision; gate 2 stays as it is today), the verified-code-only merge rule (D-03) and branch-protection hardening (D-10).

The item-by-item classification is in 03 §2.3 and §3.

### 14.3 Proposed for confirmation at redline review

These are lifecycle mechanics with **no individual Founder record**. **None of the ten is Founder-approved**, and Mission Control's pre-publication review (comment 5742096316) confirms they remain proposals and not granted policy. They do not depend on any deferred item, and they stay in the specification only for Mission Control to confirm, alter or drop when it reviews the redline. Dropping one does not disturb a decided item.

| Ref | Proposal |
|---|---|
| M-1 | The Stage Ledger table in the mission `README.md` (§3.2) |
| M-2 | Stage 1 to 4 mechanics beyond the FCTM and the Definition Actor: the Intake Pack contents, the five-part Truth Pack, Blueprint assembly by reference, and the conditional Founder Decision Gate with triggers T1 to T6 as previously drafted (T7 and T8 follow from D-11) |
| M-3 | Parallel read-only specialist review with named risk triggers, sequenced after Builder Review under unchanged gate 2 (§6.2), and the early delivery plan in Sections 20 to 21 |
| M-4 | Stage 9 to 13 mechanics: EIS with specialist findings integrated, one combined EIS disposition and lock, the implementation package authored and reviewed as a set, and the combined Stage 13 record with its expanded field groups (§7.3) |
| M-5 | Stage 14 to 18 mechanics: conditional Stage 14, workstreams without new mission IDs, Founder-reserved versus delegable runtime checks, and the verification-plan preview |
| M-6 | Running Stage 19 per workstream with one mission-level disposition |
| M-7 | Stage 20 as a numbered Corrective Authorization, finding-scoped under `SB-IV-1.0` §9 |
| M-8 | Combined Stage 21 and 22 package and the Stage 24 closure order (§10) |
| M-9 | The `communication/README.md`, Protocol and Source 18 statements of handover timing at owner change and at canonical crossings |
| M-10 | A Source 18 §9.1 pointer restatement limited to the default-deny lines and a pointer to `docs/migration/README.md`. The Founder removed the dependent Source 18 migration-authority rewording (D-06), so this adds no authority and may be dropped without effect |

### 14.4 Open questions for Mission Control (none is a Founder decision)

- **No blocker is asserted, and none is accepted by assertion.** The specification's author found no retained item that depends on D-03 or D-10, and nothing in 03 needs a deferred item to work. That is a finding for Mission Control to test, not an acceptance, and each question below stays open until Mission Control disposes of it.
- **The ten proposed mechanics (§14.3).** None is Founder-approved. Mission Control confirms, alters or drops each at the redline review.
- **Versioning of the Independent Verification Efficiency Protocol.** It is Version 1.0 with no change log, and D-07 approved no number for it. It is assessed and proposed explicitly in 03 `IVP-01`: because `IVP-01` adds a verification obligation, a packet row and an entry-gate condition, the proposal is Version 1.1 with a new change log and with the original approval record kept as the record of 1.0. It is a proposal for Mission Control and the Founder, and it is not applied silently.
- **`SS-01` and Project HQ.** Verified against the current repository (03 `SS-01`): the Source Set's 20-file register already records Source 18 as Version 1.0 with a byte size and SHA-256 that no longer match `main` (Version 1.1, changed by PR #598 and #599), and the last recorded Project HQ synchronization acceptance in the repository is dated 2026-08-02, before that change. Whether the external Project HQ package is current cannot be verified from the repository. The register refresh and any HQ synchronization are Mission Control decisions and are not claimed here.
- **`MG-03`.** Rewritten with period-specific evidence for each file (03 `MG-03`). Files 11 and 21 are stated as `PRODUCTION STATUS UNKNOWN`, not as applied, and no authority is inferred from any ledger observation.
- **The Codex utilization classification** for the independent verification of the amendment package (03 §7).
- **Known limits.** Only contract 21 was opened, so the row volume of the FCTM is unmeasured. Nothing was verified about live production or test ledgers or the external Project HQ, and merge capability was not tested.

## 15. Non-activating applicability check for SB-P-1.12

Preliminary, non-binding and not pre-work. It only tests whether the design behaves sensibly on the first mission it would govern.

- Stage 2 delta would already know: Build Plan §5.2 is stale (CI exists), §5.1 `anon` exposure is still open in the repository (O-03), and the topology is as in 01 §3.5.
- Founder Runtime scenarios A (bounded delegation) and B (revocation invalidates a stale action) already exist in Build Plan §10.1 and would be seeded and locked.
- The Build Plan §15 unresolved decisions (pricing, retention, KYC, marketplace, underwriting) appear unrelated to an authority model, so Stage 3 would likely be `NOT TRIGGERED`, subject to the Definition Actor's Stage 2 work.
- Authority, RLS and grants trigger mandatory parallel security and Supabase review and likely a Codex Required classification.
- Remediating grants probably needs a migration, so the scope flag and a pre-flight package would appear at Stage 1 and Stage 7, not at Stage 19. Executing it would need a separately authorized migration mission (§11.3), scheduled by Mission Control, not a Product Mission authority.
- **FCTM illustration `[R]`.** Build Plan §9 maps `SB-P-1.12` to contracts 21, 22, 20 and 17 plus the Product & Price Master reconciliation. Contract 21 alone has 27 sections and 12 numbered acceptance scenarios, including support access (§14), entitlements (§16), delegated automation (§12) and supplier, customer and delivery participation (§13). Build Plan §10.1 lists a summary of required work areas and two Founder runtime scenarios; scenario B (revocation invalidates a stale action) corresponds to contract 21 acceptance scenario 8. Without a matrix, a mission could satisfy the Build Plan summary and never account for the rest of the contract. The FCTM would force each of those sections to carry an explicit disposition: in scope here, already demonstrated, assigned to a named later mission by an approved source, delegated, not applicable, or escalated. Which disposition each takes is the Definition Actor's Stage 2 work and, where it needs a decision, the Founder's; nothing here decides it.

## 16. Product Truth coverage and traceability (Founder addendum)

The Founder requires that the optimized lifecycle prevent drift, omission or unauthorized deferral of any relevant requirement from the detailed approved feature and foundation definitions, including expected merchant experience, user workflows, permissions, business rules, dependencies, acceptance criteria and every approved Build Now, Build Later, Add-on, Separate Product and Reject classification. **The workflow may become faster. Product Truth must not become incomplete.** The Founder approved it as decision D-11, and it does not depend on any deferred or open item.

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
6. **Founder decisions and classification changes are never branch-effective** (§3.1). A Founder decision is recorded only after it is given and is effective when its record is human-merged to `main`.

### 16.9 Completion Report reconciliation against the contracts

The Completion Report carries a **Contract Reconciliation** for every contract advanced, one line per FCTM row, using this status vocabulary:

`DEMONSTRATED` (evidence class and path, verifier result, runtime evidence where applicable); `DEMONSTRATED — CARRIED FORWARD (<original evidence>)` for an inherited row whose earlier evidence was re-checked against the Delta and is not treated as newly executed (§18.5, E-3); `IMPLEMENTED — NOT DEMONSTRATED`; `PARTIALLY DEMONSTRATED — <what remains>`; `NOT IMPLEMENTED`; `ASSIGNED TO LATER MISSION`; `DELEGATED`; `OUT OF BUILD SCOPE`; `NOT APPLICABLE`; `DEFERRED WITH FOUNDER DECISION <ID>`.

It states, per contract, the count and list of Build Now requirements not demonstrated by this mission, and separately keeps apart the states the Phase 1 guide §4 distinguishes: committed, implemented, merged, migrated or configured, deployed, runtime-verified, independently verified, accepted, globally complete. The Experience Verification Matrix is the experience subset and cites the same row IDs. Mission Control reviews the reconciliation at Stage 23.

### 16.10 Global Product Completion View: demonstrated completion only

The view is `00_Global_Product_Completion_View.md`; it is titled "Global Product Completion Register" inside, and the Build Plan and Phase 1 guide use "Register". No rename is proposed. It already says Mission Control updates it only from verified evidence and accepted mission state, and that builder-only code, green CI, deployment or a merged PR do not prove completion (§2 rules 4 and 7). The Founder decided (D-12, D-15) to **keep every existing status name**, clarify the criteria, show partial progress, and add a **concise evidence-reference column** while the detailed evidence stays in the FCTM. The rules below add what the view lacks (03 `RG-01`, `RG-02`, `RG-03`):

- **(a)** update only from the accepted Contract Reconciliation, counting only `DEMONSTRATED` and `DEMONSTRATED — CARRIED FORWARD` rows;
- **(b)** the criteria for the implementation states, with no status renamed. `IMPLEMENTED + SUFFICIENTLY ALIGNED` requires every applicable Build Now requirement demonstrated across the advancing missions, meeting the contract's own completion gate. `IMPLEMENTED BUT INCOMPLETE` means some but not all applicable Build Now requirements are demonstrated. `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` means a foundation slice is demonstrated and the feature workflow is not. `IMPLEMENTED BUT MATERIALLY DIVERGENT` means a verified finding shows drift from approved behaviour. `CANNOT CURRENTLY VERIFY` means the evidence cannot establish a state, and unknown stays unknown. A verified divergence stays visible and is never represented as progress. `IMPLEMENTED + SUFFICIENTLY ALIGNED` also requires the runtime and independent verification the contract calls for;
- **(c)** "Exact blocker / gap", "Dependencies remaining", "Not authorized now" and "Next advancement" are derived from rows that are not `DEMONSTRATED` plus `ASSIGNED TO LATER MISSION` rows, and point to the mission's Contract Reconciliation, so no residual disappears into prose;
- **(d)** no upgrade from a builder report, merged PR, green CI, deployment, or acceptance-with-follow-up on a non-demonstrated row;
- **(e)** a downgrade is recorded when later drift is found;
- **(f)** timing follows View §12 ("At Mission Acceptance"), which conflicts with the sentence at View §7 that closure updates rows; the amendment reconciles them, and closure evaluates the feature-level status;
- **(g)** **partial progress on evidence (D-15, Option B).** A mission that demonstrates some rows records that progress: the fact fields (latest verified advancing mission, dependencies closed and remaining, residual requirements, blockers, next advancement) **and**, only where the accepted Contract Reconciliation shows that the destination label's explicit evidence criteria are met, a move between the existing **non-terminal** implementation states. It is a factual state update and not mature-feature acceptance. It can **never** set `IMPLEMENTED + SUFFICIENTLY ALIGNED` unless (b) is satisfied in full, and never moves the acceptance state off `NOT YET ACCEPTED AS MATURE FEATURE` while any applicable Build Now obligation or the contract completion gate is unmet (§18.6). **Every such move cites the relevant FCTM row IDs and their `DEMONSTRATED` or carried-forward status, and every undemonstrated row stays listed.** Neither the move nor mission acceptance changes a build commitment, a commercial classification or a mission assignment, and an actor escalates any proposed removal, deferral, simplification, reclassification or unwarranted completion claim to the Founder through Mission Control. No new status label is authorized.
- **(h)** **evidence-reference column (D-12).** The view's §5 table gains one concise "Evidence reference" column with pointers to the accepted mission, the FCTM and Contract Reconciliation, and the verification evidence. The view stays Founder-readable: detailed requirement rows and provenance stay in the FCTM and are never copied into the view.

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
| DO-04 Integrated or parallel Builder and Engineering review | §6.2 (parallel read-only specialist review kept; integrated mode and the gate 2 rewording deferred, §14.2) |
| DO-05 Parallel security and Supabase review | §6.2, §7.1 |
| DO-06 Builder-neutral lifecycle | §8.2 |
| DO-07 Conditional external-tool brief | §8.3 |
| DO-08 Workstreams without new mission IDs | §8.1 |
| DO-09 Human runtime with Founder-reserved scenarios | §9.1 |
| DO-10 Mandatory Stage 19 | §9.3 |
| DO-11 Finding-scoped Stage 20 | §9.4 |
| DO-12 Combined Stage 21 and 22 | §10.1 |
| DO-13 Stage 24 closure package | §10.3 |
| DO-14 Stage does not require its own PR | Not adopted (D-01, D-02a): each gate crossing is one canonical pull request, refinements are comments and commits on it (§3.1, §18.4) |
| DO-15 Checkpointing | §3.2, §3.3 (bounded work-package Git authority) |
| DO-16 Migration authority as workstream | Not adopted (D-06): migration execution stays a separate migration mission; early planning only (§11.3) |
| DO-17 CI baseline wording | §11.4 |
| DO-18 Topology wording | §11.5 |

Mandatory requirements: dual intake preserved verbatim (§4); backfill not claimed complete and not blocking (§4); Stage 19 preserved (§9.3); production default-deny (§11); Founder decision ownership (§5.3, §6.3, §9.1); human merge of every authority-bearing record (§3.1, §18.4).

Hard boundaries from the mission README are untouched by design: no activation of `SB-P-1.12`, no Product Truth change, nine-mission sequence unchanged, no removal of Stage 19, branch protection and human merge unchanged, production controls unweakened, human runtime verification kept, specialist review kept where risk requires, no application code, no Stage 4B, no claim of backfill completion, no automatic institutionalization of OLE candidates, no self-merge.

## 18. Design addendum — Mission Control review of PR #605 (2026-09-19)

### 18.1 Status and scope

This addendum answers the Mission Control review comment on PR #605. That review is design review, not governance approval, a Founder decision or merge authorization. The addendum is narrow: it corrects or clarifies the draft, edits no governing source and does not activate `SB-P-1.12`.

**The Founder has since decided the items this addendum left open.** The outcomes are recorded in §14, which controls wherever a later subsection still uses the wording of the question. This section has been reconciled to those decisions.

Mission Control accepted for further design, and this addendum leaves unchanged: the dual historical-memory and applicable mission-scoped validated OLE intake (§4, verbatim); the Founder no-silent-omission and no-deferral rule; FCTM source-to-implementation-to-verification traceability; independent source-contract coverage review; the narrow View update protocol and status criteria (`RG-01`, `RG-02`); and the `IVP-01` coverage method. The nine-mission direction and the 25 contracts are preserved. **Only contract 21 was opened; the other 24 contracts have not been audited**, and nothing here claims otherwise.

| Mission Control finding | Where addressed |
|---|---|
| 1 Stage 2 and Stage 4 actor drift (Codex default) | §18.2 |
| 2 Authority-speed proposals; fail-closed model | §18.3, §18.4 (decided: D-01, D-02a not adopted, D-02b bounded, D-14 adopted) |
| 3 FCTM efficiency and vocabulary | §18.5 (D-11) |
| 4 Stage 23 and the View; progress versus demonstration | §18.6 (D-12, D-15) |
| 5 Security and CI as a separate decision; exact live state | §18.7; 01 §3.4 (deferred: D-10) |
| 6 Migration reconciliation; default-deny preserved | §18.8; 01 §3.7; 03 `MG-03` (D-06) |
| Publication issue (commit-message authorization) | §18.9 (D-16) |

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

### 18.3 Decision gates: how the Founder decided them

- **DG-1** (branch-effective Class 2 records and the five-gate merge model): **not adopted** (D-01, D-02a). Authority stays canonical.
- **DG-2** (work-package-scoped Git authority): **approved in a bounded form only** (D-02b, §3.3).
- The **G3 verified-code-only merge rule** (D-03): **rejected as drafted** (it depended on the declined DG-1); the Founder requested a separate, self-contained proposal if useful, which is open and not adopted (§19.1).
- The **rewording of mandatory gate 2** (03 `S18-09`): **not adopted and excluded from the redline.** Gate 2 stays as it is today (§14.2).

**A committed branch record is not approved canonical execution authority.** Nothing in this design relies on a branch record for production or migration authority, a Founder Product Truth decision or classification change, the Blueprint lock, build authorization, acceptance or closure. The Git grant used to publish this draft was a narrow four-file grant and was not evidence for any of these decisions.

### 18.4 Canonical fail-closed operating model (Finding 2; decided, D-14)

This is the operating model the Founder approved. It works within the current gates and the current canonical activation rule, which treats an authority-bearing record as effective only when a human merges it to `main`. It needs no branch-effective authority and no change to Git authority.

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
| FCTM, Delta, Institutional Learning Intake Record, Gate Record and the Blueprint 1–19 draft, when no T-trigger has fired (one Stage 5 record covers all) | Builder Review before Engineering Review, under **current** gate 2 (no overlap: the rewording is deferred) |
| Parallel specialist reviews (read-only findings, not authority) | EIS creation before the canonical Blueprint lock (gate 3) |
| EIS review disposition and lock as one record when there is no refinement | Implementation package before the canonical EIS lock (gate 4) |
| Engineering Contract, Builder Prompt and Verification Checklist authored and reviewed as a set | Any implementation before the canonical Implementation Authorization (gate 5) |
| Package lock and Implementation Authorization as one record | Evidence Package and Completion Report before Stage 19 (gate 8) |
| Evidence Package and Completion Report as a set after Stage 19 | Closure before canonical acceptance |
| Closure items after canonical acceptance | **Any production or migration act, ever, without its own separately authorized migration mission or explicit release authorization** |

**Canonical crossings for a typical mission** (design estimate, not measured; excludes implementation code pull requests and corrections)

| # | Crossing | Contents |
|---|---|---|
| 1 | Initiation | Intake Pack, appointments and the bundled preparation instruction (as today) |
| 2 | Founder decisions | Only if Stage 3 is triggered; recorded after the Founder decides |
| 3 | Stages 2 to 5 | FCTM, Delta, Intake Record, Gate Record, Blueprint 1–19 and Mission Control's Stage 5 approval |
| 4 | Stage 6 | Builder Review and its approval |
| 5 | Stages 7 and 8 | Sections 20–21, specialist findings, Mission Control review, the Founder's recorded approval and the Blueprint lock |
| 6 | Stages 9 to 11 | EIS, parallel specialist confirmations, one disposition and the EIS lock |
| 7 | Stages 12 and 13 | Package as a set, package lock and Implementation Authorization |
| 8 | Stages 15 to 18 | Implementation pull requests as the authorization permits (the verified-code-only rule is not adopted), builder report, runtime findings and Mission Control's runtime review |
| 9 | Stage 19 | Verification report and Mission Control's review |
| 10 | Stage 20 | Corrections, if any, finding by finding |
| 11 | Stages 21 and 22 | Evidence and Completion package |
| 12 | Stage 23 | Acceptance and the View update |
| 13 | Stage 24 | Closure package |

That is roughly ten to thirteen human merges before implementation code and corrections, against 266 pull requests for SB-P-1.11. The fail-closed model gives fewer, larger canonical records; it does not give fewer authority checks. Every crossing remains a human decision.

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
| Feature status | What state is the feature in program-wide? | The View | Between existing non-terminal states on evidence; never to the mature-feature states by a partial mission (rule below) |

**Bounded follow-up** means an evidence gap that is outside every `IN SCOPE` row, or a non-blocking issue that maps to no `IN SCOPE` row, with an owner and the mission or gate that will verify it (for example release verification, as in SB-P-1.11 `F23-04`). It never covers a non-demonstrated `IN SCOPE` row: that is a scope deviation needing a recorded Founder decision.

**View update (D-15, Option B, decided).** At Mission Control acceptance, update the View from the accepted Contract Reconciliation. At closure, verify the resulting state. A partial mission **records evidence-backed progress**: the fact fields (latest verified advancing mission, dependencies closed and remaining, residual requirements, blockers, next advancement), and, where the accepted Contract Reconciliation shows that the destination state's criteria are met, a move between the existing **non-terminal** implementation states. The Founder's illustration is a move from `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` to `IMPLEMENTED BUT INCOMPLETE`, and only when the current evidence actually satisfies the destination definition. It is an illustration and not an automatic transition or a statement about any actual feature. Every movement cites the relevant FCTM row IDs and their `DEMONSTRATED` or carried-forward status, and undemonstrated rows stay listed. Unknown stays `CANNOT CURRENTLY VERIFY`, and a verified divergence stays visible and is not progress. Neither a move nor mission acceptance changes a build commitment, a commercial classification or a mission assignment, and it is not permission to omit a residual. **A partial mission can never produce a mature-feature completion upgrade:** `IMPLEMENTED + SUFFICIENTLY ALIGNED` and any move of the acceptance state off `NOT YET ACCEPTED AS MATURE FEATURE` require every applicable Build Now requirement demonstrated across the advancing missions and the contract's completion gate met. A closure record states plainly that `COMPLETED — FORMALLY ACCEPTED` does not mean the feature is complete. The statuses named here are the seven values the View already lists in §4.4; none is renamed, added or removed (03 `RG-02`).

### 18.7 Exact live protection state; hardening deferred (Finding 5, D-10)

**Founder decision D-10: branch-protection hardening is deferred.** This design implements no GitHub protection change, and the enforcement gap recorded below is known and stays visible (§19.2). Human merge remains a governance rule enforced by policy and credential separation, not by branch-protection review rules.

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

**Options recorded for the deferred decision, not recommended here beyond presenting them:** (a) keep the status quo; (b) require the Fast Gate jobs, which improves quality gating and adds no human-approval separation; (c) require at least one approving review from an identity other than the author, which works only if a second GitHub identity exists (unknown); (d) code-owner review on governance paths, with the same identity dependency; (e) reduce the AI credential's privileges so it cannot merge or change protection, which addresses AI self-merge directly and matches least privilege (Source 17 §A5: "AI permissions shall follow least privilege"). **No documentation package in this mission mutates branch protection or any repository setting.**

### 18.8 Production migration default-deny is preserved (Finding 6)

Nothing in this addendum, the fail-closed model, bounded work-package Git authority, the Definition Actor, the FCTM, a View update, acceptance or a merge creates production or migration authority. **The Founder kept separate migration missions and the current default-deny rule (D-06):** execution needs a new, current, explicit Founder- or Mission Control-authorized migration mission under `docs/migration/README.md` (§11.3). An `IN SCOPE` FCTM row that involves a database change authorizes **preparation**, not execution. A ledger match is evidence of state, not permission to execute.

**Reconciliation is evidence-based.** The 2026-08-06 to 2026-08-30 migration family is reconciled in 01 §3.7 and 03 `MG-03` against the actual GC-40 and Stage 19 records. In short: files 13 to 16 are evidenced by two independent point-in-time ledger observations (the GC-39 readiness report of 2026-08-28 and Stage 19), and file 15 also by an execution record; files 17 to 20 are the GC-40 four-migration package with a final independent read-only reconciliation; **for file 21 no primary application, authorization or ledger-output record was found, and its own header describes preparation and test validation only; two secondary, documentation-only retrospectives dated 2026-09-13 report it in the production ledger and its grant effect observed, so its production status stays `UNVERIFIED`, neither asserted applied nor asserted unapplied.** No migration is marked production-applied by inference. The evidence is point-in-time; a current read-only ledger comparison needs its own authorization and has not been performed.

### 18.9 Publication authority-precision finding

**Finding AP-1.** The four-file Git grant used to publish PR #605 stated the AI, mission, repository, locked branch, base and scope, but **not commit-message authorization**. Protocol §16 and `AGENTS.md` require either permission to use mission-scoped descriptive commit messages or a specifically locked message. Commit `194b9a4b9dfd2ece65a419501fc29b90f8bd85ac` used a mission-scoped descriptive message, and that was disclosed in the report and the pull request.

- The history is not rewritten and nothing is force-pushed.
- **The Founder accepted it as a narrow administrative authorization-precision finding (D-16), with no history rewrite.** It is not precedent for broadening Git authority.
- Every future grant, stage-scoped or work-package, states the commit-message clause **and** whether the standard `Co-Authored-By` trailer is permitted, required or excluded (§3.3; 03 `CP-05`, `AG-04`, `CR-04`). The trailer was a second element that no grant addressed: both published commits (`194b9a4`, `440c3ef`) carry the standard `Co-Authored-By` trailer.
- **The second revision (`440c3ef`) was first prepared without Git authority and left uncommitted,** because the instruction for it granted none. Mission Control then issued a complete grant: AI, mission, repository, locked branch, expected SHAs, exactly four files, and an approved commit message. That grant was limited to that revision. **This third revision was again prepared first without Git authority and left uncommitted,** because the instruction for it granted none, and it was published only after Mission Control issued a second complete grant (AI, mission, repository, locked branch, expected SHAs, exactly four files, an approved commit subject and a permitted standard trailer, and an expiry). That grant is likewise limited to this four-file revision and is not precedent for broader Git authority.

### 18.10 What the addendum does not change

The dual-intake rule (verbatim); the conditional Founder Decision Gate and its eight triggers; the mandatory Stage 19; human merge; production default-deny; the nine-mission sequence; the 25 contracts; Product Truth; and every governing source.

## 19. Recorded separate items

These are recorded so they stay visible. **Neither is a dependency of anything else in this design, and neither is implemented by it.**

### 19.1 D-03: the verified-code-only merge rule (separate proposal)

**As drafted, the rule is not adopted.** The draft would have let implementation code reach `main` only after independent verification (a "G3" merge), with per-workstream splits. The Founder rejected it as drafted because it depended on the five-gate model, which was declined (DG-1), and requested a **separate, self-contained proposal if useful**. The Founder also said the canonical fallback is not to be blocked waiting for it, and that any early or late implementation-merge rule needs a new independent proposal and a Founder decision.

- **Status.** Open, separate design proposal. **No self-contained proposal has been drafted here**; this section only records what such a proposal would have to settle. Nothing in this design assumes it.
- **Until then.** When implementation code reaches `main` follows the Implementation Authorization for the mission, as it does today.
- **What a proposal would need to settle.** How dependent workstreams integrate while unverified code is kept off `main`; how a verified branch is kept current with `main`; and what happens to code that fails Stage 19. It would have to be restated in canonical-authority terms, with no branch-effective record.
- **Dependencies.** None for the redline. If it is ever adopted it needs its own amendment items and its own independent verification.

### 19.2 D-10: branch-protection hardening (deferred), with the enforcement gap visible

**Deferred by the Founder as a separate decision.** No branch-protection mutation is made in this mission. Nothing here implements any GitHub setting, and no document may describe the gap as remediated **or as approved for permanent acceptance.**

The gap, as observed on 2026-09-19 and recorded in §18.7 and 01 §3.4:

- The only required status check on `main` is `Markdown Quality Gate`. The Fast Gate jobs (Lint, Typecheck, Build, Fast Tests) are not required, so a failing Fast Gate does not by itself block a merge.
- A pull request is required, but `required_approving_review_count` is `0`, so no second reviewer is enforced by the platform.
- The session credential used for this work holds `admin`, `maintain` and `push`. Merge capability was not tested. Human merge therefore rests on policy and credential separation, not on a platform rule.

**What the design relies on meanwhile:** the governance rules that no AI approves or merges its own work, that the Fast Gate is a governance requirement at each checkpoint and at Stage 19, and that every authority-bearing record is human-merged. **What it does not claim:** that these are technically enforced.

**Options for the later decision** are listed in §18.7 and are not recommended here.

### 19.3 Proposals superseded by the Founder decisions

For readers of the two published drafts, these no longer apply:

| Earlier proposal | Outcome |
|---|---|
| Class 2 (branch-effective) records, the five-gate merge model, PR-1 to PR-6, the Decision Provenance table | Not adopted (D-01, D-02a) |
| Stage-boundary merge gates G1 to G5 | Replaced by the 13 canonical crossings (§18.4) |
| Work-package Git authority in its earlier, broader form | Approved only in the bounded form of §3.3 (D-02b) |
| Migration Execution Authorization and the four added migration-README elements | Not adopted (D-06) |
| Mandatory `builder-prompt.md` and `builder-completion-report.md` | Not adopted; existing names retained (D-05) |
| Risk-based human-retest exemption (`HUMAN RETEST NOT REQUIRED`) | Withdrawn; mandatory human retest (D-04) |
| "No status upgrade from a partial mission" | Replaced by evidence-backed non-terminal progress, still with no mature-feature upgrade (D-15, Option B) |
| Currency annotations to the Phase 1 guide | Not adopted (D-09) |
| Rewording of mandatory gate 2 | Deferred; excluded from the redline |
