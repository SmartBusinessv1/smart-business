# Smart Business SB-P Mission Lifecycle and Delivery Framework

- **Source:** 18
- **Version:** 1.2
- **Status:** AMENDMENT PROPOSED — INDEPENDENT VERIFICATION AND ACTIVATION PENDING
- **Authority:** FOUNDER APPROVED — AUTHORITATIVE (v1.1). The v1.2 amendment is not authoritative until activated
- **Approved By:** Founder — Riyas PK (v1.0 on 2026-08-01; v1.1 on 2026-09-18). v1.2: PENDING
- **Approval Date:** v1.1: 2026-09-18. v1.2: PENDING
- **Activated By:** v1.1: Smart Business Mission Control. v1.2: PENDING — Mission Control activation after independent verification and human merge
- **Activation Date:** v1.1: 2026-09-18. v1.2: PENDING
- **Repository publication:** v1.0 publication complete at historical commit `bd9b362`; v1.1 amendment/publication merged in PR #598 at `4ddbb647cfb413e43af38a7e362130c5fd16133c` and activated in PR #599; v1.2 amendment published for review in the `SB-GOV-PRODUCT-EXEC-1.0` governance-redline pull request, merge commit pending
- **Scope:** Every Smart Business Product Mission (`SB-P-*`)
- **Created under:** `SB-GOV-LIFECYCLE-1.0`; amended under `SB-GOV-IV-1.0` and `SB-GOV-PRODUCT-EXEC-1.0`

> **Authority notice:** Source 18 v1.1 was active and authoritative for all `SB-P-*` mission lifecycle and delivery work. This v1.2 amendment implements the Founder decisions recorded on PR #605 (comments `5740893113`, `5740990250`, `5741014275` and `5742411779`) and Mission Control's amendment-scope review (comment `5742307415`). **It is not active until it has been independently verified, reviewed by Mission Control, merged by a human and activated by Mission Control.** Until then no Product Mission may rely on the amended clauses, and the operative text is Source 18 v1.1 as it stood at commit `c3ef55fe0cf94f4491cb2ae257b084f90b49b40b`. On activation, v1.2 becomes authoritative for all `SB-P-*` mission lifecycle and delivery work. It remains subordinate to the Lighthouse Constitution, Smart Business constitutional authority, and the approved governance order.

---

## 1. Purpose

This source defines the permanent governance framework for discovery, definition, engineering, implementation, verification, acceptance, documentation closure, and repository handover of every `SB-P-*` mission.

A Product Mission is not a single AI task. It is a governed chain of responsibility in which each participant receives approved inputs, performs only its authorized role, records its outputs in the repository, and hands the mission to the next authorized participant.

Chat history is not the permanent mission record. All material decisions, instructions, approvals, findings, handovers, reports, and unresolved issues must be recorded in the repository.

## 2. Authority and Interpretation

The canonical authority order established by Source 17 applies:

1. Founder.
2. Lighthouse Constitution.
3. Smart Business constitutional authority for Phase 1, formed jointly by Source 01 and Source 11.
4. Approved Governance Sources.
5. Mission Control.
6. Authorized specialist and engineering execution.
7. Repository, platform, and mission-specific instructions.

Within that order, this Source 18 governs the lifecycle of every `SB-P-*` mission. The approved Product Feature Elaboration Workflow Template and Implementation and Evidence Workflow Template are subordinate operational instruments. Mission-specific instructions and AI interpretation remain subordinate to this framework. A template conflict must be corrected through a separate authorized mission; it must not be resolved by silently weakening this framework.

Founder decisions remain final. Capability, tool access, technical convenience, deployment success, and AI confidence do not create authority.

## 3. Governing Principles

Every Product Mission shall:

- begin with an explicit Mission Control authorization;
- preserve confirmed Product Truth and Founder decision ownership;
- separate product definition, engineering specification, implementation, verification, and acceptance;
- prevent an actor from approving its own work;
- use repository artifacts as the durable record;
- move forward only after the preceding mandatory gate;
- identify the current owner and next authorized action;
- preserve business isolation, permissions, auditability, security, and merchant trust;
- consume approved Product Truth and current validated institutional learning instead of rediscovering them (Section 3.1);
- keep Product Truth complete, so that no approved requirement is silently omitted, deferred, simplified, reclassified or allowed to drift (Section 3.2);
- treat a commit, pull request head or draft as preparation and never as authority (Section 3.3);
- never infer production, migration, delivery or publication authority from any stage record, approval, acceptance, merge or Git permission;
- stop and escalate when authority, scope, or evidence is unclear.

Only the current stage owner may modify the primary stage deliverable. Other participants may submit findings within their assigned domain but may not create competing instructions or rewrite the primary deliverable without Mission Control authorization.

### 3.1 Institutional Learning Intake

Every Product Mission intake must consume both current validated OLE learning and the canonical Phase 1 institutional-memory guide until Mission Control verifies that the historical OLE backfill is complete.

Every intake record carries the status statement `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`. This source does not claim that the historical backfill is complete, does not perform it and does not make it a prerequisite of any mission.

The **Institutional Learning Intake Record** is part of the Stage 2 Truth Pack. The Stage 2 owner prepares it and Mission Control reviews it at Stage 5. It records:

1. the baseline: the `main` commit and date at intake;
2. the Phase 1 guide: its path and commit identity, its mission-start checklist answered by reference to the Truth Pack, the sections applied, and any statement found stale (a Delta item);
3. the OLE promotions: every record under `organizational-learning/promotions/**` at the intake commit, listed by promotion ID with exactly one disposition: `APPLIED` (naming the artifact that incorporates it), `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` (with citation), `INFORMATIONAL`, or `NOT APPLICABLE` (with reason);
4. the scope caveat: a promotion is `MISSION_SCOPED` unless its own record says otherwise, so it is an applicability screen and not a universal rule, and a candidate that has not been promoted is not authority;
5. conflicts: where the guide and a promotion, or either and a governing source, disagree, the record surfaces the conflict to Mission Control, and neither source substitutes for the other.

After the first intake, a later mission records only the promotions added or superseded since the previous intake baseline and their applicability to the mission. Disposition by promotion ID is required and line-by-line re-derivation is not. The Stage 19 verifier confirms that the record exists and is complete and does not re-judge its dispositions.

When Mission Control records that the historical backfill is verified complete, it may separately authorize a simplified rule. Nothing in this section does so.

### 3.2 Product Truth Coverage and Traceability

The lifecycle may become faster. Product Truth must not become incomplete. No relevant requirement of the mature feature and foundation contracts, or of the Founder-approved Build Plan, may be silently omitted, silently deferred, moved between `BUILD NOW`, `BUILD LATER`, `ADD-ON`, `SEPARATE PRODUCT` or `REJECT`, simplified, or allowed to drift, at any stage from intake to completion accounting.

The **Feature Coverage and Product Truth Traceability Matrix (FCTM)** is an accounting of approved truth. It does not reopen an approved decision and adds no product decision.

1. **The matrix.** Mission Control opens the FCTM at Stage 1 for every contract the mission advances, every contract those delegate to where the mission touches the delegated behaviour, and the Build Plan sections that govern the mission. The Stage 2 owner populates it. One row is one separately verifiable obligation, cited to the contract's or Build Plan's actual numbered section at a recorded baseline that includes the contract's blob SHA. The row ID has the form `<contract number>-§<section>-<ordinal>`. A row stores the ID and source, a pointer to the exact source text, its kind, its build commitment (`BUILD NOW`, `ADD-ON + BUILD NOW`, `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT`), its commercial classification, its assigned mission, its disposition with citation, and a Founder Decision ID whenever anything differs from the approved source.
2. **What is enumerated.** Every section of every in-scope contract appears in at least one row, and each numbered acceptance scenario is its own row. Sections that are in scope, partially delivered or mixed are enumerated at obligation level. A section may be a single row only when the whole section has one non-`IN SCOPE` disposition and one citation, and it expands to obligation level when a mission takes any part of it in scope. Grouping applicable obligations is allowed only if each is enumerated, and "etc." is not permitted.
3. **Dispositions.** Every row has exactly one, with a citation.

| Disposition | Meaning | Requires |
|---|---|---|
| `IN SCOPE` | `BUILD NOW` in this mission and to be demonstrated here | Assignment to this mission by an approved source |
| `ALREADY DEMONSTRATED` | Shown by an earlier accepted mission; never assumed to pass | The earlier mission's verified evidence cited by path and commit or run identity, and a Delta impact check showing it is still valid. Without traceable evidence the row is `IN SCOPE` |
| `ASSIGNED TO LATER MISSION` | A `BUILD NOW` requirement scheduled to another mission; it stays `BUILD NOW` | An approved assignment source (Build Plan Section 9 to 12 or the contract's own dependency) naming the mission. Without one the disposition is unavailable |
| `DELEGATED` | Owned by another contract | The delegation-map entry and the owning mission |
| `NOT APPLICABLE` | Does not concern this mission | A specific reason |
| `OUT OF BUILD SCOPE` | The approved commitment is `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT` | The classification preserved verbatim; a `REJECT` row is a "must not appear" check |
| `UNRESOLVED FOUNDER DECISION` | On the approved unresolved list | Whether it is on this mission's critical path; if not, work continues |
| `ESCALATED` | A conflict or proposed change awaiting the Founder | It blocks every lock, authorization and acceptance that relies on the row |

4. **Vocabulary.** `BUILD LATER` is a product commitment (a build-commitment value in the Global Product Completion View). `ASSIGNED TO LATER MISSION` is mission scheduling. A `BUILD NOW` requirement assigned to a later mission stays `BUILD NOW` and never becomes `BUILD LATER`. `ADD-ON` is commercial availability and does not mean `BUILD LATER`. `OUT OF BUILD SCOPE` means the approved commitment is `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT`.
5. **Classification lock.** Build commitment, commercial classification and mission assignment of an approved requirement change only by a Founder decision recorded in the Founder Product Decision Record and cited by Decision ID in the row. No actor, including the Definition Actor, Mission Control, a builder or a verifier, may omit, defer, simplify or reclassify an approved requirement without one. Prohibited without a Founder decision: moving a `BUILD NOW` row to `BUILD LATER`, to a later mission or to a follow-up; pulling a `BUILD LATER`, `SEPARATE PRODUCT` or `REJECT` row into scope; reviving a `REJECT` row; changing add-on and core packaging; simplifying expected experience, permission or denial behaviour; treating an old label such as "MVP-only" or "future" as a deferral; treating an unresolved Founder decision as a blocker beyond its critical path; and describing a partial implementation as complete. Ordering work inside the mission's assigned scope and splitting it into workstreams need no Founder decision. **Technical difficulty, a partial foundation, a missing dependency, incomplete implementation or an older label never authorizes a change of commitment or assignment.** The row stays `IN SCOPE`, marked partial or blocked with the reason, and the Founder decides.
6. **Completeness test.** It is objective and set-based: (a) every section of every in-scope contract has at least one row; (b) every row has exactly one disposition with a citation; (c) at lock, there is no `ESCALATED` row and no critical-path `UNRESOLVED FOUNDER DECISION` row; (d) each row's classification and assignment equal the source text; (e) at every later gate, no `IN SCOPE` row is unmapped and no downstream item is an orphan. Mission Control runs it at Stages 5, 8, 10, 11 and 13, and the Stage 19 verifier runs it again.
7. **One matrix, referenced and not copied.** Requirement text lives only in the source contracts. The FCTM stores IDs, pointers, dispositions and citations. Each stage's own deliverable carries a compact mapping keyed by row ID, checked by set difference against the FCTM, and never restates requirement text: the Blueprint (Sections 8, 10, 12 and 15 carry rows, Section 11 lists out-of-scope rows and Section 19 holds the row map), Sections 20–21 (a feasibility and risk finding per `IN SCOPE` row), the EIS (each `IN SCOPE` row to the EIS requirements that realize it, and each EIS requirement back to a row), the Engineering Contract (an obligation per row), the Verification Checklist (an item and a planned evidence class per row), the Builder Completion Report (a status per assigned row), the verification report (a result per row) and the Completion Report (the Contract Reconciliation). The Contract Reconciliation is the final-status column of the same matrix and the Experience Verification Matrix is its experience subset. Each stage owner owns only its own mapping, so the ownership rule of Section 3 is unchanged.
8. **`ALREADY DEMONSTRATED` is not `PASS`.** It needs the earlier mission's verified evidence and a Delta impact check showing the evidence still holds (the carry-forward test of the Independent Verification Efficiency Protocol). It is reported as `DEMONSTRATED — CARRIED FORWARD` with the original evidence and is never relabelled as newly executed.
9. **Residual and carry-forward.** An accepted partial workstream marks the rows it delivered `DEMONSTRATED` and records every remaining `BUILD NOW` obligation of the same section or contract as `ASSIGNED TO LATER MISSION` (naming the owning mission and source) or `IN SCOPE — NOT DEMONSTRATED`. A later mission rebuilds its FCTM from the contract text, inherits the final statuses earlier missions recorded, and cannot use a deferral to erase accountability for the earlier portion.
10. **Escalation.** A proposed omission, deferral, pull-forward, simplification or reclassification, and any Product Truth conflict or infeasibility found at any stage, triggers Founder escalation (Stage 3, triggers T7 and T8). The actor who finds it stops dependent work, marks the row `ESCALATED` with the evidence and the conflicting sources, and Mission Control brings it to the Founder. A lower-level actor never resolves a conflict by silently dropping behaviour. The Founder's decision is recorded with a Decision ID and cited in the row.
11. **Verification.** The Stage 19 verifier checks material coverage and drift as Stage 19 requires. The Completion Report carries a Contract Reconciliation whose statuses are `DEMONSTRATED`, `DEMONSTRATED — CARRIED FORWARD`, `IMPLEMENTED — NOT DEMONSTRATED`, `PARTIALLY DEMONSTRATED`, `NOT IMPLEMENTED`, `ASSIGNED TO LATER MISSION`, `DELEGATED`, `OUT OF BUILD SCOPE`, `NOT APPLICABLE` and `DEFERRED WITH FOUNDER DECISION <ID>`. A row without evidence is not demonstrated, and absence of failure is not `PASS`.
12. **Calibration.** The row volume of a mission is not known in advance. The Stage 2 record states the row count and effort per contract for Mission Control. A change that would loosen any rule of this section needs Founder approval.

### 3.3 Canonical Authority and Fail-Closed Preparation

An authority-bearing record is effective only when a human merges it to `main`, which this source calls canonical. An approval, lock, authorization, acceptance or closure never rests on an unmerged branch record.

1. **Preparation is not authority.** A commit, a pull request head or a draft is preparation. Nothing on an unmerged branch is relied on as an approval, lock, authorization, acceptance or closure.
2. **Bundled preparation.** One canonical Mission Control instruction may authorize the preparation of several adjacent documentary artifacts, each marked `DRAFT — NOT AUTHORIZED`, provided none needs an authority that has not yet been merged. The instruction lists the artifacts, the order and the stop conditions. Preparation is at risk: if an earlier artifact is returned, dependent drafts are reworked.
3. **One canonical crossing per gate.** Each gate crossing is one pull request holding the artifact and Mission Control's decision record, which names the exact reviewed commit. The human merge is the ratification. A refinement round is a review comment and a new commit on the same pull request and does not need a new authorization pull request. Mission Control may require an additional pull request at any time.
4. **Founder decisions are recorded after they are given** and are effective when their record is merged.
5. **Stop on any trigger.** If a Stage 3 trigger fires, preparation of dependent artifacts stops until the Founder decides.
6. **Never branch-effective:** production or migration authority; a Founder Product Truth decision or classification change; the Blueprint lock; build authorization; acceptance; closure.

| May be prepared together, at risk, under one bundled instruction | Must wait for the earlier canonical record |
|---|---|
| The FCTM, Delta, Institutional Learning Intake Record, Gate Record and the Sections 1–19 draft, when no Stage 3 trigger has fired | Builder Review before Engineering Review (Gate 2) |
| Read-only specialist fact-finding in parallel (findings, never authority) | EIS creation before the canonical Blueprint lock (Gate 3) |
| The Engineering Contract, Lovable Build Prompt and Verification Checklist authored and reviewed as one set, **only after both the Blueprint lock and the EIS lock are canonical** | The Implementation Package before the canonical EIS lock (Gate 4) |
| The Evidence Package and formal Completion Report as one set, after Stage 19 | Any implementation before the canonical Implementation Authorization (Gate 5) |
| Closure items after canonical acceptance | The Evidence Package and Completion Report before Stage 19 (Gate 8) |
| | Closure before canonical acceptance |
| | Any production or migration act, without a separately authorized migration mission or explicit release authorization |

A draft pull request may be opened at first push so continuous integration runs. A draft pull request is not a merge event. Only a human, or a separately approved mechanism under the AI Communication and Handover Protocol, merges. No AI merges, approves or reviews its own work. A merge deploys nothing: delivery is a release action under Section 9.1. When implementation code reaches `main` follows the Implementation Authorization for the mission.

## 4. Responsibility and Authority Model

### 4.1 Mission Control

Mission Control owns governance, sequencing, review, authorization, acceptance, and closure. It issues missions, defines source packs and permitted files, names the current owner, reviews outputs, obtains Founder decisions, controls Blueprint and EIS locks, authorizes implementation, reviews runtime findings, requests independent verification, issues Corrective Authorizations, accepts or rejects outcomes, and controls documentation closure.

Mission Control shall not invent Founder decisions, implement merely to bypass the assigned builder, treat self-reporting as independent evidence, or close a mission before all required gates.

### 4.2 Founder

The Founder owns unresolved and final product decisions, approves the locked product intent, performs or delegates required human runtime verification, supplies observations and evidence, and gives the final human authority required by Mission Control. The Founder does not need to perform technical verification personally and shall not be asked to resolve repository conflicts without guided review.

Where runtime verification is delegated, Mission Control shall name the authorized human verifier. The Founder remains responsible for confirming the submitted human runtime findings before Mission Control closes the runtime-review stage.

Two categories of human runtime check are distinguished. **Founder-reserved** checks are the Founder Runtime Verification scenarios that the Build Plan defines for the mission and any product-experience anchor Mission Control designates: judgements of whether the experience is right for the merchant. They stay with the Founder or a delegate the Founder explicitly confirms. **Delegable** checks are mechanical walkthroughs such as role and permission behaviour, negative paths and data visibility, performed by a named authorized human verifier against the Verification Checklist. Continuous integration, automated tests and an AI never displace a human runtime check.

### 4.3 Definition Actor and Codex

The **Definition Actor** owns Stage 2 (Mission Truth and Delta Reconciliation), the preparation of Stage 3, and Stage 4 (Sections 1–19), including the populated FCTM, the Founder Product Decision Record for any triggered item, Product Blueprint Metadata and the Mission Snapshot. Mission Control appoints a qualified Definition Actor in the Stage 1 record and records the actor, why it is fit for the mission's contract areas, its prior contributions to the mission's subject, the separation assessment below and named alternates. Codex, Claude Code or another authorized actor may be appointed where fit. **Codex is not the default or the mandatory Definition Actor.** No Founder-question sequence runs by default: the Founder is asked only about genuine open decisions, conflicts or proposed changes (Stage 3), and Mission Control designates who conducts a triggered dialogue.

The Definition Actor shall not invent Product Truth; omit, defer, simplify, reclassify or expand an approved requirement (Section 3.2); author canonical Sections 20–21; create an EIS before Blueprint lock; implement code without a separate engineering authorization; approve its own Sections 1–19, which Mission Control approves at Stage 5; or accept its own work.

Codex remains available for authorized governance maintenance, repository documentation, stage reports and Founder Briefs, for separately appointed review or research, and as an Independent Verification Actor when appointed under Section 4.9. Its independence and responsibilities there are unchanged.

**Role separation.** Section 3 requires product definition, engineering specification, implementation, verification and acceptance to be separate. The rule applies by role and not by provider:

| Role | Stages | Held by | Constraint |
|---|---|---|---|
| Definition Actor | 1 (appointment), 2, 3 (preparation), 4 | Mission Control-appointed qualified actor | Cannot approve its own Sections 1–19; Mission Control approves at Stage 5 |
| Engineering Review and EIS | 6, 7 and 9 | Mission Control-appointed actor (Claude Code under Section 4.4) | If the same actor is also the Definition Actor, Mission Control records a separation assessment at Stage 1 and, on a material-risk mission, a parallel specialist who did not author Sections 1–19 reviews the feasibility and risk findings |
| Builder | 15 and 16 | Authorized builder per workstream | Where the Definition Actor is also a workstream's builder, Mission Control records the assessment and prefers different actors where one is available |
| Independent verifier | 19 | Appointed under Section 4.9 | Not the implementer, corrector or transferer; records a separation assessment if it authored the FCTM |
| Acceptance | 23 | Mission Control, with the Founder where required | Unchanged |

### 4.4 Claude Code

Claude Code owns Builder Review, Engineering Review, Product Blueprint Sections 20–21, the post-lock EIS, the initial implementation package, the Evidence Package, the formal Completion Report, repository verification, stage reports, and Founder Briefs assigned to its stages. Claude Code may own independent post-build verification only when appointed under Section 4.9 and independent of the implementation and corrections being verified. Claude Code may be appointed Definition Actor where fit and may be an authorized builder where the Implementation Authorization names it, subject to the role-separation rule of Section 4.3 and the independence rules of Section 4.9.

Claude Code shall preserve approved Sections 1–19, apply architecture, security, RLS, integrity, audit, migration, testing, performance, and observability analysis, and classify verification items as `PASS`, `FAIL`, `FOLLOW-UP`, or `NOT APPLICABLE`.

Claude Code shall not redefine locked Product Truth, create an EIS before Blueprint lock, create an implementation package before EIS lock, authorize its own package, accept a Builder Completion Report as proof, create the formal Completion Report before independent verification, or mark formal acceptance.

### 4.5 Lovable and Other Authorized Builders

Lovable owns authorized product implementation and the Builder Completion Report at `docs/implementation/[MISSION-ID]/lovable-build-completion-report.md`. It shall inspect the current repository, implement only the locked prompt, preserve routes, permissions, authentication, business isolation, and product behaviour, avoid unauthorized redesign, and report files, build activity, migrations, deployment status, checks, limitations, deviations, and unresolved issues.

Lovable shall not define Product Truth, alter locked artifacts, expand scope, claim verification, create the formal Completion Report, or authorize acceptance.

Another authorized builder, including Claude Code, may own the implementation of a workstream where the Implementation Authorization names it, and the duties and limits above apply to it. **The existing artifact paths and file names are retained** (`lovable-build-prompt.md` and `lovable-build-completion-report.md`), and no generic replacement filename is required. Where a builder other than Lovable is assigned, the artifact at the existing path carries a byline and a builder-identity field that make the real actor unmistakable, and nothing in it implies that Lovable implemented work it did not. If keeping the existing name would genuinely mislead, the author flags the naming conflict to Mission Control and does not rename or restructure an artifact silently.

### 4.6 Supabase Specialist AI

When requested, the Supabase specialist reviews schema, migrations, RLS, authentication, storage, Edge Functions, business isolation, concurrency, idempotency, integrity, auditability, and destructive-migration risk. It records findings in the mission repository record. It may not redefine scope, approve the full mission, override Mission Control, or implement outside authorization.

### 4.7 AI, WhatsApp, and Integration Specialist

When requested, this specialist reviews assistant-not-authority behaviour, interpretation limits, confirmation requirements, webhooks, retries, idempotency, media, voice, failure handling, privacy, permissions, and merchant decision ownership. It may not permit AI to commit merchant decisions without authorized confirmation, redefine the mission, or approve implementation independently.

### 4.8 Other Specialists

Research, Brand, Customer Success, Legal, Finance, Security, and other specialists review only their assigned operational domain. They may identify risks, recommend refinements, classify findings, and create repository reports. They may not redefine approved Product Truth, authorize implementation, approve the whole mission, bypass Mission Control, or create competing instructions. Mission Control decides when specialist review is required.

**Parallel and mandatory review.** Specialist reviews may run in parallel with one another and with Engineering Review as read-only fact-finding. They record findings under `specialists/` and issue no instruction that competes with the stage owner. Their findings are inputs and never authority, and parallel fact-finding does not change Gate 2. Specialist review is **mandatory** where the mission touches authority or permissions, RLS or grants, migrations, idempotency or concurrency, financial integrity, or a new external provider.

### 4.9 Independent Verification Actor

Mission Control shall appoint a capable Independent Verification Actor for Stage 19 and record the actor, scope, environment, affected artifacts, prior contributions and independence assessment in the mission record. Codex is preferred for the highest-risk cases where eligible and available; Claude Code or another approved actor may be appointed when the same independence and capability conditions are satisfied.

The actor shall not independently verify implementation or corrections it authored, approve its own report, accept the mission or merge its own work. A new session, model or role label alone does not establish independence. A same-provider appointment requires a distinct actor and a documented Mission Control assessment of contribution separation and correlated-assumption risk.

When the appointed actor is unavailable, Mission Control may appoint an eligible replacement under these conditions, recording authority, capability, preserved evidence and remaining obligations before resumption. If none is available, the gate remains pending. No builder self-verification or silent substitution is permitted.

Before the Implementation Authorization is recorded, Mission Control records a **verification-plan preview**: the intended verifier and eligible alternates, the prior-contribution and independence assessment, the Codex utilization classification and the Class A boundaries. Formal activation of the verifier remains a Stage 18 decision, and a replacement remains a recorded Mission Control decision under this section.

**Independence rules.** The verifier of a workstream did not implement, correct or transfer it. The actor that transfers code between repositories is not that workstream's verifier. A builder never approves its own work. Where Claude Code is a builder, the verifier is another actor.

This appointment changes only independent-verification ownership. Discovery, engineering/package ownership, human runtime verification, Evidence Package and formal Completion Report ownership, mandatory stage order, Mission Control acceptance and Founder authority remain unchanged.

## 5. Lifecycle Artifact Roots

- Product Blueprint: `docs/phase-1-mission-blueprint/active/[MISSION-ID].md`
- Locked Product Blueprint: `docs/phase-1-mission-blueprint/completed/[MISSION-ID].md`
- EIS: `docs/phase-1-mission-blueprint/implementation/[MISSION-ID]-EIS.md`
- Implementation package: `docs/implementation/[MISSION-ID]/`
- Mission communication: `communication/missions/[MISSION-ID]/`

## 6. Part One — Product Blueprint

### Stage 1 — Mission Initiation and Intake Pack

- **Owner:** Mission Control
- **Inputs:** Founder direction, approved sources, repository state.
- **Output:** Mission ID, scope, owner, source pack, permitted paths, initial communication record, and the **Intake Pack**:
  - the contracts advanced (Global Product Completion View identifiers), the Build Plan section that governs the mission, and every contract those delegate to where the mission touches the delegated behaviour;
  - the FCTM opened for those contracts at a recorded intake baseline, with each contract's blob SHA (Section 3.2);
  - the **Definition Actor appointment record** (Section 4.3): the actor, why it is fit, its prior contributions, the separation assessment and named alternates;
  - a draft workstream register (Section 8);
  - delivery and production scope flags, each defaulting to `NOT AUTHORIZED`: `production mutation`, `migration execution` and `delivery sync and publication`;
  - the Institutional Learning Intake Record opened (Section 3.1);
  - the canonical crossing plan, naming which artifacts are prepared together (Section 3.3);
  - a verification-plan preview seed (Section 4.9);
  - the topology facts that must be freshly verified before any external action.
- **Approval:** Mission Control issues the mission.
- **Handover:** Repository record names the Definition Actor and the exact discovery inputs.

### Stage 2 — Mission Truth and Delta Reconciliation

- **Owner:** Definition Actor appointed under Section 4.3.
- **Inputs:** Authorized mission, Intake Pack, the approved sources (the in-scope contracts and their delegates, the Build Plan section, the Global Product Completion View), and current repository and runtime state.
- **Output:** the **Mission Truth Pack**, in five parts: (1) the populated FCTM, which replaces the free-form truth table for requirement-bearing truth; (2) derived constraints, each flagged for confirmation where it could materially affect behaviour, and never treated as an approved requirement; (3) the **Delta**, meaning changes since each source was approved (repository, migrations, CI, topology, governance versions, OLE additions), each classified `NO PRODUCT EFFECT`, `ENGINEERING ONLY` or `PRODUCT-AFFECTING`; (4) unresolved items and conflicts, drawn from `UNRESOLVED FOUNDER DECISION` and `ESCALATED` rows and from any unresolved decision the mission needs; (5) the Institutional Learning Intake Record. A claim with no citation is `UNRESOLVED`.
- **Approval:** Mission Control confirms discovery may proceed.
- **Handover:** The Definition Actor records findings and unresolved items. Where another actor is better placed to establish repository or runtime facts, Mission Control may direct it to submit a baseline finding; it does not become the owner.

### Stage 3 — Founder Decision Gate (conditional)

- **Owner:** The Definition Actor prepares; the Founder decides genuine open decisions.
- **Inputs:** The Truth Pack.
- **Output:** either a Founder Product Decision Record for the triggering items only, or a Gate Record `Founder Decision Gate — NOT TRIGGERED` listing each trigger checked with its evidence.
- **Approval:** Founder confirms decisions; Mission Control records stage completion.
- **Handover:** Repository record authorizes Blueprint drafting.

The gate is **triggered** by any of:

- **T1** an unresolved product question that no approved source answers;
- **T2** a conflict among approved sources;
- **T3** a new product decision, or an approved-unresolved Build Plan or Phase 1 guide decision that the mission needs;
- **T4** a Delta item classified `PRODUCT-AFFECTING`;
- **T5** a Founder request, which Mission Control cannot decline;
- **T6** a derived constraint that Mission Control judges materially affects product behaviour;
- **T7** a proposed omission, deferral, pull-forward, simplification or reclassification of any approved requirement, including any change of its build commitment, commercial classification or mission assignment;
- **T8** a Product Truth conflict or infeasibility found at any later stage, between a contract, the Build Plan, Source 11, the Blueprint, the EIS, the implementation, or a security or integrity finding.

When triggered, the Founder-led dialogue and Founder Product Decision Record run for the triggering items only, conducted by the actor Mission Control designates. **A `NOT TRIGGERED` record is permitted only if the FCTM has no `UNRESOLVED FOUNDER DECISION` row on this mission's critical path and no `ESCALATED` row.** A one-page Founder Brief summarizes the FCTM and the determination. The Founder's objection at any point reopens the gate, Stage 8 remains the backstop over the whole Blueprint, and T7 and T8 reopen the gate at whatever stage they arise. Until the Founder decides, the affected row blocks every lock, authorization and acceptance that relies on it.

### Stage 4 — Product Blueprint Sections 1–19

- **Owner:** Definition Actor
- **Inputs:** Sources, the FCTM and any Founder Product Decision Record.
- **Output:** Metadata, Mission Snapshot, and Sections 1–19, **assembled by reference**: approved truth is cited (contract section, Build Plan subsection) and not re-authored, and new prose is limited to mission scope selection, the Delta, dependencies and acceptance criteria. The canonical Section 1–19 structure and `Not applicable — justified` still apply. Experience anchors and Founder runtime scenarios are seeded into Section 15 from the Build Plan, and adding a scenario is a product decision (T3). A section-to-source table keyed by FCTM row ID sits in Section 19, and Section 11 (Out of Scope) lists every `ASSIGNED TO LATER MISSION`, `DELEGATED` and `OUT OF BUILD SCOPE` row as "still committed / not in this mission" with its owning mission or preserved classification. Assembly by reference must preserve full FCTM obligation coverage. Blueprint content that maps to no row is a recorded refinement or a scope expansion (T3 if it changes truth). The Definition Actor does not omit, defer, simplify, reclassify or expand an approved requirement to fit a narrower draft.
- **Approval:** Mission Control review required.
- **Handover:** The Definition Actor submits the draft and source/decision traceability.

### Stage 5 — Mission Control Product Review

- **Owner:** Mission Control
- **Inputs:** Draft through Section 19 and the Definition Actor's stage report.
- **Output:** Refinement request or Sections 1–19 approval, after Mission Control confirms the Institutional Learning Intake Record and runs the FCTM completeness test (Gate 10).
- **Approval:** Mission Control; this is not complete Blueprint approval.
- **Handover:** Approved Sections 1–19 and exact Builder Review authorization go to Claude Code.

### Stage 6 — Builder Review

- **Owner:** Claude Code
- **Inputs:** Mission Control-approved Sections 1–19 and current repository.
- **Output:** Product-experience and build-feasibility findings without renumbering the Blueprint.
- **Approval:** Mission Control.
- **Handover:** Approved Builder Review and open engineering matters authorize Engineering Review.

### Stage 7 — Engineering Review

- **Owner:** Claude Code
- **Inputs:** Approved Sections 1–19, approved Builder Review, repository, and applicable specialist findings.
- **Output:** `20. Engineering Review` and `21. Engineering Questions, Risks & Recommendations`. Section 20 or 21 also carries the **early delivery plan** (environments, the migrations expected and the rehearsal they need, cross-mission dependencies, the continuous-integration tiers that apply, and the scope flags carried from Stage 1) and a **feasibility and risk finding per `IN SCOPE` FCTM row**. A row found infeasible, unsafe or blocked stays `IN SCOPE`, is marked blocked with the reason, and raises T8; it is never quietly narrowed or moved. Planning and rehearsal are early, and execution is never part of a Product Mission (Section 9.1).
- **Approval:** Mission Control reviews the complete Blueprint; Founder resolves product decisions.
- **Handover:** Complete Blueprint and unresolved decisions go to final approval.

### Stage 8 — Founder Approval and Blueprint Lock

- **Owner:** Mission Control with Founder approval.
- **Inputs:** Complete Blueprint Sections 1–21 and review records.
- **Output:** Founder approval record, `APPROVED — LOCKED` status, and authorized move from `active/` to `completed/`. Founder approval also confirms the FCTM and Truth Pack summary, the Founder-reserved runtime scenarios and the production and migration scope flags. **The lock freezes every FCTM row's disposition, build commitment, commercial classification and mission assignment**, so any later change needs a Founder decision. The lock is a canonical record and is never branch-effective.
- **Approval:** Founder approves product decisions; Mission Control applies the lock.
- **Handover:** Locked Blueprint and EIS authorization go to Claude Code.

## 7. Part One Point Five — Engineering Implementation Specification

### Stage 9 — EIS Creation

- **Owner:** Claude Code
- **Inputs:** Locked Product Blueprint and current repository architecture.
- **Output:** `docs/phase-1-mission-blueprint/implementation/[MISSION-ID]-EIS.md`, drafted with the specialist findings already integrated. The EIS carries an **FCTM traceability table**: every `IN SCOPE` row maps to the EIS requirements that realize it, and every EIS requirement maps back to a row. An orphan needs a recorded reason and, if it adds product behaviour, raises T3.
- **Approval:** Mission Control review required.
- **Handover:** Draft EIS and traceability report go to reviewers.

### Stage 10 — EIS Review

- **Owner:** Mission Control; specialists review when applicable.
- **Inputs:** Draft EIS, locked Blueprint, architecture and specialist evidence.
- **Output:** Findings, refinements, and review disposition. Specialist confirmations run in parallel and feed one consolidated disposition, Mission Control runs the FCTM completeness test, and a refinement is reviewed finding by finding and not restarted.
- **Approval:** Mission Control, with Founder decisions where Product Truth is affected.
- **Handover:** Accepted EIS goes to the lock stage; rejected EIS returns to Claude Code.

### Stage 11 — EIS Lock

- **Owner:** Mission Control
- **Inputs:** Reviewed EIS with resolved blocking findings.
- **Output:** `APPROVED — LOCKED` EIS and implementation-package authorization.
- **Approval:** Mission Control.
- **Handover:** Locked Blueprint and locked EIS go to Claude Code. No package may exist before both locks.

The Stage 10 disposition and the Stage 11 lock are **separate recorded dispositions**, each with its own identity, and the gate order is unchanged. They may be carried in one pull request only when no refinement is outstanding and each is recorded separately, in order.

## 8. Part Two — Implementation and Verification

A **workstream** is a separately built and verified slice inside one Product Mission. Its identifier has the form `[MISSION-ID]/WS-A`. A workstream never creates a Product Mission ID. The workstream register is drafted at Stage 1, fixed at Stage 13, and needs no separate authorization unless scope changes. Splitting a mission into workstreams never changes its mission assignment.

### Stage 12 — Initial Implementation Package

- **Owner:** Claude Code
- **Inputs:** Locked Blueprint and locked EIS.
- **Output:** `engineering-contract.md`, `lovable-build-prompt.md`, and `verification-checklist.md` only, status `DRAFT — MISSION CONTROL REVIEW REQUIRED`. The three documents are authored and reviewed as one set, **only after both the Blueprint lock and the EIS lock are canonical**. The Engineering Contract maps every `IN SCOPE` row to at least one obligation. The Verification Checklist maps every `IN SCOPE` row to at least one item with a planned evidence class, with named negative-path items for permission, isolation and denial rows and a named runtime scenario for every experience row. The Build Prompt lists the rows each workstream builds and forbids behaviour outside them. `ALREADY DEMONSTRATED` rows map to a regression or no-change item that cites the earlier evidence and are never assumed to pass.
- **Approval:** Mission Control review required.
- **Handover:** Three-document package and traceability report go to Mission Control.

### Stage 13 — Implementation Package Review

- **Owner:** Mission Control
- **Inputs:** The three draft package documents.
- **Output:** Refinement request or `APPROVED — LOCKED` package. **No implementation authorization is recorded while an `IN SCOPE` row has no obligation or no checklist item.**
- **Approval:** Mission Control.
- **Handover:** Locked package and explicit implementation-authorization decision go forward.

Package approval and the Implementation Authorization are separately identified dispositions, and Gate 5 is unchanged. Mission Control shall record implementation authorization in:

`communication/missions/[MISSION-ID]/mission-control/implementation-authorization.md`

The record shall identify:

- authorized package version;
- locked Blueprint reference;
- locked EIS reference;
- authorized branch;
- authorized builder or builders;
- authorized implementation scope;
- prohibited changes;
- authorization date;
- Mission Control authority reference;
- the workstream register: for each workstream, its scope, authorized builder, paths, contracts advanced and risk class;
- the environments: the test project identity and the runtime-verification environment, with production, migration and delivery each stated as `NOT AUTHORIZED`;
- the continuous-integration baseline: Fast Gate results required at each checkpoint, and Full Assurance applicability by trigger path;
- the verification plan: the verification-plan preview of Section 4.9, confirmed;
- the runtime verification plan: the Founder-reserved scenarios and any delegated human verifier by name;
- the FCTM reference: the locked FCTM path and baseline commit, the rows assigned to each workstream, and Mission Control's statement that the mapping completeness test passed.

The record carries no Git authority, which is granted separately under the AI Communication and Handover Protocol, and it authorizes no production, migration or delivery action.

Implementation shall not begin until this record exists.

### Stage 14 — Founder Lovable Brief (conditional)

- **Owner:** Claude Code
- **Inputs:** Approved package and actual Git state.
- **Output:** Founder Brief containing exact Lovable instruction, prompt path, branch/pull requirements, expected output, Builder Completion Report path, and only necessary PowerShell commands. **This stage applies only when the authorized builder can act solely through a human or an external tool.** Otherwise the record states `NOT APPLICABLE — JUSTIFIED` with the reason, for example that the builder has direct authorized repository access.
- **Approval:** Mission Control authorizes use.
- **Handover:** Founder receives the exact approved instruction and files.

### Stage 15 — Implementation by the Authorized Builder

- **Owner:** The authorized builder for each workstream (Lovable unless the Implementation Authorization names another).
- **Inputs:** Approved build prompt, locked artifacts, current authorized branch.
- **Output:** Scope-limited implementation and implementation facts, committed as checkpoints, each with a green Fast Gate and, where triggered, Full Assurance. A builder does not drop, defer, simplify or reclassify an authorized row, and does not implement behaviour that maps to no authorized row. It raises T7 or T8 through Mission Control instead.
- **Approval:** Implementation must have prior Mission Control authorization; completion remains unverified.
- **Handover:** Changed-file and build information goes to the Builder Completion Report.

### Stage 16 — Builder Completion Report

- **Owner:** The authorized builder.
- **Inputs:** Actual implementation and checks performed.
- **Output:** `lovable-build-completion-report.md` (with the truthful byline of Section 4.5), status `IMPLEMENTATION REPORTED — VERIFICATION PENDING`, with one section per workstream and the Verification Packet defined by the Independent Verification Efficiency Protocol. For every row assigned to the workstream the report states `IMPLEMENTED` (with evidence), `PARTIALLY IMPLEMENTED` (stating what remains) or `NOT IMPLEMENTED`. A row missing from the report is a coverage defect, and not an implicit success. Where a builder works outside the canonical repository, the report carries the canonical-transfer record, which is mechanical, scope-preserving and manifest-checked and never counts as verification.
- **Approval:** Mission Control checks report sufficiency but does not treat it as verification.
- **Handover:** Report, commits, limitations, and deviations go to human runtime verification.

### Stage 17 — Human Runtime Verification

- **Owner:** Founder for the Founder-reserved scenarios; a named authorized human verifier for delegable checks (Section 4.2).
- **Inputs:** Approved Verification Checklist and accessible runtime.
- **Output:** Tests performed, pass/fail observations, screenshots or evidence references, unexpected behaviour, device, environment, and the FCTM row IDs each scenario exercises.
- **Approval:** Mission Control determines whether runtime evidence is sufficient. The Founder confirms all submitted findings.
- **Handover:** Findings go to Mission Control runtime review.

### Stage 18 — Mission Control Runtime Review

- **Owner:** Mission Control
- **Inputs:** Builder Completion Report, human runtime findings, communication record, unresolved issues.
- **Output:** Runtime-review disposition and independent-verification authorization or correction request. Mission Control applies the verification-ready entry gate of the Independent Verification Efficiency Protocol and activates the pre-appointed verifier.
- **Approval:** Mission Control.
- **Handover:** Complete verified input pack goes to the Mission Control-appointed Independent Verification Actor.

### Stage 19 — Independent Verification

- **Owner:** Independent Verification Actor appointed by Mission Control under Section 4.9.
- **Inputs:** Locked Blueprint, locked EIS, package, Builder report and Verification Packet, human runtime findings, Mission Control runtime review, the locked FCTM, repository, tests, and accessible deployment state.
- **Output:** Independent verification report classifying every item `PASS`, `FAIL`, `FOLLOW-UP`, or `NOT APPLICABLE`, with evidence provenance, methods and limitations, including the coverage and drift results below.
- **Approval:** Mission Control reviews; the verifier cannot approve itself or accept the mission.
- **Handover:** Material failures go to correction. Results with no material blocking failure go to Mission Control for authorization of the Evidence Package and formal Completion Report.

Every Product Mission retains this gate. Risk classification determines verification method and effort, not whether Stage 19 exists. The verifier shall independently exercise material risk boundaries and may inspect authoritative automated evidence or perform static inspection where those methods sufficiently support the obligation. Missing mandatory evidence keeps verification incomplete.

Stage 19 may run per workstream **only under an explicitly appointed, eligible independent verifier and with one aggregate mission-level disposition.** Every FCTM row is covered, no workstream is verified by its implementer, corrector or transferer, and the mandatory gate is never waived. Migration-related probes run only in the authorized test environment, and Stage 19 implies no production probe or execution.

**Coverage and drift, for every Product Mission whatever the Codex utilization classification.** The verifier records independence and does not implement corrections. It (1) inventories the numbered sections of each in-scope contract at the intake baseline and compares them with the FCTM (coverage completeness); (2) compares each row's disposition, build commitment, commercial classification and mission assignment at the Stage 8 lock, Stage 13 and Stage 22 with the source text and the Founder Decision IDs (movement integrity); and (3) compares implemented behaviour with the approved expected experience, permissions, denial behaviour and business rules, by direct probing for material rows and by other evidence otherwise (drift). Findings named `SILENT OMISSION`, `UNAUTHORIZED DEFERRAL`, `UNAUTHORIZED PULL-FORWARD`, `MISCLASSIFIED`, `DRIFT` and `ORPHAN` map onto `PASS`, `FAIL`, `FOLLOW-UP` and `NOT APPLICABLE`. A material coverage or drift `FAIL` is a material blocking failure. The verifier reports and never decides Product Truth. Where the only eligible verifier authored the FCTM, Mission Control records a separation assessment and the check is made against the source contracts.

### Stage 20 — Corrective Cycle

- **Owner:** Mission Control assigns the appropriate builder, never the verifier.
- **Inputs:** Material `FAIL` findings.
- **Output:** A numbered **Corrective Authorization**, a record within the existing mission and never a new Product Mission ID, naming the finding IDs, the allowed paths and the builder. The cycle is: finding, narrow correction, full applicable deterministic checks, updated Builder report, **human runtime retest**, Mission Control correction review, and finding-specific independent re-verification, as the Independent Verification Efficiency Protocol prescribes.
- **Approval:** Mission Control controls every repeat cycle.
- **Handover:** The cycle returns to the applicable build and verification stages until no material failure remains. A broader boundary change escalates under the same protocol.

**Human retest after every correction.** A human runtime retest is required after every correction, before correction acceptance and before re-verification closes. Its scope may be specific to the finding and is not automatically the whole mission: it covers the affected behaviour and its regression surface as Mission Control determines. Each retest records the actor, the target, the scenarios, the expected and actual results, and the evidence. **No automated-only waiver exists**: continuous integration, tests and static review never replace it. Founder-reserved scenarios remain with the Founder or a confirmed delegate.

**A correction never resolves a coverage finding by removing or deferring the row.** It restores the approved behaviour or removes the unauthorized behaviour, and if that is impossible or unsafe the row goes to the Founder (T7 or T8).

Corrective cycles shall preserve prior reports and evidence. Updated artifacts shall use either versioned filenames or an internal version history. No prior Builder Completion Report, verification result, or evidence record may be silently overwritten.

### Stage 21 — Evidence Package

- **Owner:** Claude Code
- **Inputs:** Mission Control-reviewed independent-verification results with no unresolved material blocking failure.
- **Output:** `docs/implementation/[MISSION-ID]/evidence/` with traceable evidence, **manifest-first**: an index that links continuous-integration run identities, the verification report, runtime evidence and provenance, and stores only artifacts that are not otherwise durable.
- **Approval:** Mission Control reviews provenance and completeness.
- **Handover:** Evidence package goes to formal reporting.

### Stage 22 — Formal Completion Report

- **Owner:** Claude Code
- **Inputs:** Builder Completion Report, human runtime evidence, Mission Control runtime review, the appointed actor's independent-verification results, and all available verified evidence.
- **Output:** `completion-report.md`, status `VERIFICATION COMPLETE — MISSION CONTROL ACCEPTANCE PENDING`. It includes the **Experience Verification Matrix** required by the Build Plan and a **Contract Reconciliation** for every contract advanced: one line per FCTM row with the status vocabulary of Section 3.2, and per contract the count and list of `BUILD NOW` requirements not demonstrated by this mission. It keeps apart the states that the Phase 1 guide distinguishes: committed, implemented, merged, migrated or configured, deployed, runtime-verified, independently verified, accepted and globally complete.
- **Approval:** Mission Control; report creation is not acceptance.
- **Handover:** Formal report and evidence go to acceptance.

Neither the Evidence Package nor the formal Completion Report may be created before independent verification. After it, Mission Control may authorize their **combined preparation and review**, with the Stage 21 and Stage 22 dispositions recorded separately.

### Stage 23 — Mission Control Acceptance

- **Owner:** Mission Control with Founder authority where required.
- **Inputs:** Formal Completion Report and complete evidence chain.
- **Output:** `ACCEPTED`, `ACCEPTED WITH FOLLOW-UP`, `CORRECTION REQUIRED`, or `REJECTED`, recorded against the Contract Reconciliation. The disposition states what it does not authorize (deployment, publication, migration execution, activation, pilot readiness, release and the next mission), names an owner and a verifying mission or gate for every carried follow-up, and carries a **Release Handoff Statement** recording whether the accepted state is deployed, which migrations are applied in production, and what release authorization is still needed.
- **Approval:** Mission Control records the mission disposition. Founder approval is additionally required where acceptance includes a new product decision, a scope deviation, a material unresolved follow-up, or a change to previously approved Product Truth. **An `IN SCOPE` row that is not `DEMONSTRATED` is not an ordinary follow-up: accepting it is a scope deviation that needs a recorded Founder decision.** `ACCEPTED WITH FOLLOW-UP` may carry only a bounded follow-up, meaning an evidence gap outside every `IN SCOPE` row or a non-blocking issue that maps to no `IN SCOPE` row, each with an owner and the mission or gate that will verify it. Acceptance never states contract-level completion.
- **Handover:** Accepted missions proceed to documentation closure; others receive explicit next actions.

**Global Product Completion View.** At acceptance, and in the same change as the acceptance record, Mission Control updates the Global Product Completion View from the accepted Contract Reconciliation, and never the builder. Accepted mission progress is not complete feature demonstration. A partial mission records evidence-backed progress and may move a contract between the View's existing non-terminal implementation states only where the destination label's explicit evidence criteria are met, citing the FCTM row IDs and their status; it can never produce a mature-feature completion upgrade, and the View's own protocol governs the detail.

### Stage 24 — Documentation Closure

- **Owner:** Mission Control assigns Claude Code or Codex.
- **Inputs:** Acceptance disposition, final commits, deployment reference, and follow-up list.
- **Output:** The closure package, in this order: (1) confirmation that the acceptance record is merged and canonical `main` is verified; (2) the `COMPLETED — FORMALLY ACCEPTED` closure record with approval date, final commit, deployment reference, follow-up missions, non-blocking issues, and repository status; (3) the **OLE disposition**: the learning handoff initiated with its closure-envelope reference, or an explicit no-reusable-learning record with supporting evidence, after which promotion review proceeds inside OLE and does not block closure or the next mission; (4) the **feature-level completion evaluation**: confirmation that the View was updated at Stage 23, and an evaluation of each advanced contract's status independently of mission completion, listing its remaining `BUILD NOW` requirements, because a mission can be `COMPLETED — FORMALLY ACCEPTED` while its feature remains `IMPLEMENTED BUT INCOMPLETE`; (5) the **residual carry-forward**, meaning every row not `DEMONSTRATED` or `NOT APPLICABLE` and every follow-up, recorded with its owning mission so that mission's FCTM inherits it; (6) the communication archive and live reset under the AI Communication and Handover Protocol, after items (2) to (5) are recorded and closure is confirmed; and (7) the update of `mission-control/mission_memory.md`.
- **Approval:** Mission Control.
- **Handover:** Repository synchronization is verified and the mission is closed or transferred to named follow-up missions.

## 9. Mandatory Non-Bypassable Gates

The following order is mandatory:

1. Sections 1–19 approval before Builder Review.
2. Builder Review approval before Engineering Review.
3. Complete Product Blueprint lock before EIS creation.
4. EIS lock before the Implementation Package.
5. Implementation Package approval before implementation authorization, and no implementation authorization while an `IN SCOPE` FCTM row has no Engineering Contract obligation or no Verification Checklist item.
6. Builder Completion Report before Founder runtime-review closure.
7. Founder runtime findings and Mission Control review before independent verification.
8. Independent verification, including material coverage and drift, before the Evidence Package and formal Completion Report.
9. Mission Control acceptance before formal documentation closure, with every `IN SCOPE` row `DEMONSTRATED` or covered by a recorded Founder decision.
10. The Institutional Learning Intake Record and a complete FCTM confirmed by Mission Control before Sections 1–19 are approved.
11. The OLE disposition recorded before `COMPLETED — FORMALLY ACCEPTED`.

No actor may waive a gate governing its own work.

### 9.1 Production, Migration and Delivery Boundary

Every Implementation Authorization states `PRODUCTION MUTATION: NOT AUTHORIZED`, `MIGRATION EXECUTION: NOT AUTHORIZED` and `DELIVERY SYNC AND PUBLICATION: NOT AUTHORIZED`. No stage, record, approval, acceptance, merge or Git permission creates production mutation, migration execution, delivery or publication authority.

A Product Mission may plan migrations early (scope flags, the migrations expected and their rehearsal, cross-mission dependencies) and never executes one. Migration execution is governed solely by `docs/migration/README.md`. Delivery synchronization and publication are release actions under Source 12 Part 4 and are not part of any stage.

## 10. Repository Communication Governance

Each Product Mission shall use:

```text
communication/missions/[MISSION-ID]/
├── README.md
├── mission-control/
├── codex/
├── claude-code/
├── lovable/
├── specialists/
├── founder/
├── handover-log.md
└── decision-log.md
```

Empty folders need not be committed. A `.gitkeep` may be used only when repository policy permits it.

The mission `README.md` shall state identity, current stage and owner, last completed action, next authorized action, blockers, authoritative files, branch, latest relevant commit, and Mission Control status.

The mission `README.md` also carries a lightweight **Stage Ledger**, one row per stage with the stage, its disposition (`COMPLETE`, `NOT TRIGGERED`, `NOT APPLICABLE — JUSTIFIED` or `COMBINED WITH STAGE n`), its owner, its artifact, the exact commit each Mission Control decision reviewed, the decision reference and the date. The Stage Ledger is an index only. It is never an authority record and can neither approve, lock, authorize, accept nor close anything.

Before beginning an authorized stage, every AI participant shall read:

- the mission `README.md`;
- the `handover-log.md`;
- the `decision-log.md`;
- the latest stage report from the preceding actor;
- all authoritative artifacts named in the handover.

An AI shall not rely on chat history as a substitute for this repository intake.

Material AI communication files shall use:

`[STAGE-NUMBER]-[STAGE-SLUG]-[DOCUMENT-TYPE].md`

Examples:

- `04-blueprint-drafting-stage-report.md`
- `06-builder-review-handover.md`
- `19-independent-verification-report.md`

The mission README and handover log shall link to every material communication file.

The `decision-log.md` shall preserve all material scope, behaviour, architecture, permission, security, sequence, acceptance, and follow-up decisions. AI stage reports belong under the actor's folder. A Lovable handover may link to its Builder Completion Report instead of duplicating it.

Communication records preserve continuity but do not replace the Blueprint, EIS, Engineering Contract, Build Prompt, Verification Checklist, Builder Completion Report, Evidence Package, Completion Report, or Mission Control acceptance. Higher-authority approved artifacts prevail over communication records.

During a Product Mission, `communication/live/` remains a transient pointer and substantive stage reports live in `communication/missions/[MISSION-ID]/`. A refinement request may be a review comment on the open pull request that carries the artifact, with corrections as new commits on that pull request, and the merged pull request is the record.

## 11. Founder Brief Governance

Every stage requiring Founder action shall create `communication/missions/[MISSION-ID]/founder/[STAGE]-founder-brief.md` with:

1. Mission.
2. Current Status.
3. What Has Been Completed.
4. What You Need to Do Now.
5. Where to Perform the Action.
6. Exact Text to Copy.
7. Files Involved.
8. PowerShell Commands.
9. What Success Looks Like.
10. What to Send Back to Mission Control.
11. Do Not Do.

Commands must reflect actual repository state and include only necessary operations. Branch must be verified before commit or push. Use exact-file staging; do not use `git add .` unless every working-tree change is expressly authorized. Use `git pull --ff-only origin main` when a fast-forward pull is required. If it cannot fast-forward, stop and return the result to Mission Control.

## 12. Handover Standard

Before a handover, the current owner shall complete and verify its deliverable, record a stage report, update the handover log and mission README, provide a Founder Brief when required, commit and push or supply exact Founder commands, name the next authorized AI and exact input files, and state what is not yet authorized. Handover is incomplete until repository synchronization is verified.

A handover record is written when ownership actually changes and at each canonical gate crossing. It is not repeated at every stage, and no administrative pull request is created solely to restate what the merged pull request and the Stage Ledger already record.

Each handover shall record date, mission, sender, recipient, completed stage, work, files, commit SHA, verification, open issues, next authorized action, action not yet authorized, and Mission Control approval reference.

## 13. Status Model

| Status | Authorized assigning authority |
|---|---|
| `NOT STARTED` | Mission Control |
| `ACTIVE` | Mission Control |
| `DRAFT — REVIEW REQUIRED` | Authorized artifact creator |
| `RETURNED FOR REFINEMENT` | Mission Control |
| `APPROVED` | Mission Control; Founder where product decisions require it |
| `APPROVED — LOCKED` | Mission Control after required approval |
| `IMPLEMENTATION AUTHORIZED` | Mission Control |
| `IMPLEMENTATION IN PROGRESS` | Authorized builder, after authorization |
| `IMPLEMENTATION REPORTED — VERIFICATION PENDING` | Authorized builder |
| `RUNTIME REVIEW PENDING` | Mission Control |
| `INDEPENDENT VERIFICATION IN PROGRESS` | Mission Control authorizes; verifier records start |
| `CORRECTION REQUIRED` | Mission Control |
| `VERIFICATION COMPLETE — MISSION CONTROL ACCEPTANCE PENDING` | Independent verifier records completion; Mission Control confirms acceptance-stage entry |
| `ACCEPTED` | Mission Control with required Founder authority |
| `ACCEPTED WITH FOLLOW-UP` | Mission Control with required Founder authority |
| `COMPLETED — FORMALLY ACCEPTED` | Mission Control after documentation closure |
| `SUPERSEDED` | Mission Control under Founder-approved governance |
| `ARCHIVED` | Mission Control under authorized archive action |

## 14. Formal Completion Definition

A mission is not complete merely because code exists, Lovable reports completion, deployment succeeds, one workflow works, tests pass, or Claude Code creates a report.

Formal completion requires an approved Product Blueprint (with its Institutional Learning Intake Record and a complete FCTM), locked EIS, approved implementation package, authorized implementation, Builder Completion Report, human runtime verification, Mission Control runtime review, independent verification by the Mission Control-appointed actor, Evidence Package, formal Completion Report with its Contract Reconciliation, Mission Control acceptance, the OLE disposition, repository synchronization, and documentation closure.

## Appendix A — AI Responsibility Matrix

| Stage group | Mission Control | Codex | Claude Code | Lovable | Specialist AI | Founder | Required output | Approval gate |
|---|---|---|---|---|---|---|---|---|
| Initiation | Owns | Receives | Informed | Not authorized | As named | Directs | Mission record | Mission issued |
| Discovery (Founder Decision Gate) | Reviews | Owns only if appointed Definition Actor | Owns only if appointed Definition Actor | Not authorized | Advises if asked | Decides triggered items | Decision record or Gate Record | Founder/Mission Control |
| Sections 1–19 | Reviews and approves | Owns only if appointed Definition Actor | Owns only if appointed Definition Actor | Not authorized | Advises if asked | Clarifies | Blueprint draft | Mission Control |
| Builder Review | Approves | Supports | Owns | Not authorized | Advises | Informed | Review findings | Mission Control |
| Engineering Review | Reviews | Preserves 1–19 | Owns 20–21 | Not authorized | Reviews domain | Decides product matters | Complete Blueprint | Founder/Mission Control |
| EIS | Locks | Not authorized | Owns | Not authorized | Reviews domain | Decides product changes | Locked EIS | Mission Control |
| Package | Approves | Not authorized | Owns | Not authorized | Advises | Receives brief | Three locked documents | Mission Control |
| Build | Governs | Not authorized | Owns a workstream if named the authorized builder | Owns unless another builder is named | Reviews if asked | Initiates approved prompt | Implementation/report | Mission Control review |
| Runtime | Reviews | Not authorized | Awaits authorization | Supplies report | Advises | Owns Founder-reserved scenarios and confirms delegated findings | Runtime findings | Mission Control |
| Independent verification | Appoints and reviews | Owns only if appointed and independent | Owns only if appointed and independent | Cannot verify itself | Supplies findings; may own only if appointed and independent | Supplies evidence | Verification report | Mission Control |
| Correction | Authorizes each Corrective Authorization | Verifies only if appointed and independent | Corrects only if assigned | Corrects only if assigned | Advises | Retests Founder-reserved scenarios | Corrective Authorization and retest record | Mission Control |
| Evidence/report | Reviews | Supports if assigned | Owns | Not authorized | Supplies evidence | Informed | Evidence and report | Mission Control |
| Product Truth coverage | Runs the completeness test | Verifies coverage and drift only if appointed verifier | Owns its own mapping, and the row set if Definition Actor | Reports a status per assigned row | Advises | Decides any change of classification or assignment | FCTM and stage mappings | Mission Control at Stages 5, 8, 10, 11 and 13 |
| Acceptance/closure | Owns | Updates if assigned | Updates if assigned | Not authorized | Not authorized | Final authority | Disposition/closure | Mission Control |

## Appendix B — Required Repository Artifacts

| Artifact | Creator | Timing | Approval authority |
|---|---|---|---|
| Mission communication README | Current owner | Initiation and every handover | Mission Control |
| Intake Pack and Definition Actor appointment | Mission Control | Stage 1 | Mission Control |
| Workstream register | Mission Control | Drafted at Stage 1 and fixed at Stage 13 | Mission Control |
| Mission Truth Pack (FCTM, derived constraints, Delta, unresolved items and conflicts, Institutional Learning Intake Record) | Definition Actor | Stage 2 | Mission Control |
| Gate Record and Founder Product Decision Record (triggered items only) | Definition Actor | Stage 3 | Founder/Mission Control |
| Product Blueprint Sections 1–19 | Definition Actor | Before Builder Review | Mission Control |
| Builder Review | Claude Code | After Sections 1–19 approval | Mission Control |
| Product Blueprint Sections 20–21 | Claude Code | After Builder Review approval | Founder/Mission Control |
| EIS | Claude Code | After Blueprint lock | Mission Control |
| Engineering Contract | Claude Code | After EIS lock | Mission Control |
| Lovable Build Prompt | Claude Code | After EIS lock | Mission Control |
| Verification Checklist | Claude Code | After EIS lock | Mission Control |
| Implementation Authorization (with the expanded fields of Stage 13) | Mission Control | After implementation-package approval and before implementation | Mission Control |
| Builder Completion Report | Lovable | After implementation | Mission Control reviews |
| Founder runtime findings | Founder | After Builder report | Mission Control reviews |
| Independent verification report (with coverage and drift results) | Mission Control-appointed Independent Verification Actor | After runtime review | Mission Control reviews |
| Corrective Authorization | Mission Control | Stage 20, once per correction | Mission Control |
| Evidence Package | Claude Code | After verification | Mission Control |
| Formal Completion Report (with Experience Verification Matrix and Contract Reconciliation) | Claude Code | After independent verification | Mission Control |
| Acceptance and Global Product Completion View update | Mission Control | Stage 23 | Mission Control with required Founder authority |
| Closure Package | Mission Control/assigned recorder | Stage 24 | Mission Control |
| Stage Ledger | Current owner | Each stage completion | Index only; never an authority record |

## Appendix C — Communication Folder Standard

Use the tree in Section 10. Actor reports shall be dated, mission-specific, linked from the mission README, and referenced by the handover log. Do not duplicate authoritative artifacts inside communication folders.

## Appendix D — Founder Brief Template

```markdown
# Founder Brief

## Mission
## Current Status
## What Has Been Completed
## What You Need to Do Now
## Where to Perform the Action
## Exact Text to Copy
## Files Involved
## PowerShell Commands
## What Success Looks Like
## What to Send Back to Mission Control
## Do Not Do
```

## Appendix E — PowerShell Command Templates

Branch and pull verification:

```powershell
git branch --show-current
git switch main
git pull --ff-only origin main
git status
```

Exact-file commit and push (authorized mission branch):

```powershell
git switch -c mission/[MISSION-ID]-[SHORT-SLUG] origin/main
git branch --show-current
git status
git diff --check
git add "exact/path/to/file.md"
git commit -m "Authorized mission-scoped commit message"
git push -u origin mission/[MISSION-ID]-[SHORT-SLUG]
git status
git log -1 --oneline
```

Multiple authorized files:

```powershell
git add `
  "exact/path/file-one.md" `
  "exact/path/file-two.md"
```

An authorized AI pushes only the mission branch and then opens or updates a pull request targeting `main`. Direct AI push to protected `main` is prohibited; merge to `main` is performed only by the Founder, a Mission Control-authorized human maintainer, or a separately approved automated merge mechanism after required reviews and checks. If the branch is unexpected, a pull cannot fast-forward, validation fails, or unrelated files appear, stop and report to Mission Control. After a canonical crossing is merged, the next preparation branch is cut from freshly pulled `main`. An AI operates only under a Git authorization in the form the AI Communication and Handover Protocol defines, stage-scoped or a bounded work package, and a Git authorization never creates approval, lock, authorization, acceptance, closure or merge authority.

## Appendix F — Mission Handover Template

```markdown
## Handover [NUMBER]

- Date:
- Mission:
- From:
- To:
- Stage completed:
- Work completed:
- Files created or modified:
- Commit SHA:
- Verification performed:
- Open issues:
- Next authorized action:
- Action not yet authorized:
- Git authorization reference (stage-scoped or work package):
- Stage Ledger row updated:
- Mission Control approval reference:
```

## Appendix G — Lifecycle Status Matrix

The status table in Section 13 is canonical for `SB-P-*` lifecycle records. An artifact creator may record draft or factual work-in-progress states, but only Mission Control may authorize transition across governance gates. Founder approval is mandatory wherever final product truth or Founder authority is implicated.

## Source Change Log

| Version | Date | Change | Authority | Status |
|---|---|---|---|---|
| Draft 1.0 | 2026-07-31 | Initial SB-P Mission Lifecycle and Delivery Framework draft | Founder through Mission Control | DRAFT |
| 1.0 | 2026-08-01 | Founder approval and Mission Control activation recorded through `SB-GOV-HOUSEKEEPING-1.2` | Founder — Riyas PK | SUPERSEDED BY 1.1 |
| 1.1 | 2026-09-18 | Actor-flexibility and Independent Verification Actor amendment (Section 4.9 and related clauses). Merged in PR #598 at `4ddbb647cfb413e43af38a7e362130c5fd16133c`; activated in PR #599 at `fec2ac81a6c5a412ec47cea951b64efe68c66417` | Founder — Riyas PK, under `SB-GOV-IV-1.0` | ACTIVE — AUTHORITATIVE |
| 1.2 | 2026-09-19 | Product Mission execution reconciliation: Institutional Learning Intake (Section 3.1); Product Truth Coverage and Traceability (Section 3.2); canonical authority and fail-closed preparation (Section 3.3); Definition Actor; conditional Founder Decision Gate; assembly by reference; Corrective Authorization with mandatory human retest; combined Stage 21 and 22 preparation; Global Product Completion View update at acceptance; expanded closure; Gates 10 and 11; production, migration and delivery boundary (Section 9.1); Stage Ledger. Existing Lovable-specific artifact names retained; Gate 2 unchanged | Founder decisions recorded on PR #605 under `SB-GOV-PRODUCT-EXEC-1.0` | AMENDMENT PROPOSED — ACTIVATION PENDING |

Future refinements must append rather than replace earlier history.

---

**Active control:** Source 18 Version 1.1 is Founder approved, active, and authoritative for every `SB-P-*` mission until Version 1.2 is independently verified, merged and activated by Mission Control. Version 1.2 then becomes the active version. Source 18 remains subordinate to higher-authority constitutional and governance sources.
