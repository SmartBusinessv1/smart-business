# SB-GOV-PRODUCT-EXEC-1.0 — Current-State and Bottleneck Analysis

**Mission ID:** `SB-GOV-PRODUCT-EXEC-1.0`

**Document:** `01-current-state-and-bottleneck-analysis.md`

**From:** Claude Code — governance / engineering workflow reconciliation specialist

**To:** Mission Control

**Status:** `DRAFT — MISSION CONTROL REVIEW REQUIRED`

**Date:** 2026-09-19

**Baseline:** `main` at `953496660a0939ec89608505dc61070a69faddf1` (PR #604), fast-forwarded from `origin/main` before analysis

**Revision:** revised after Mission Control's review of PR #605 (previous published head `194b9a4b9dfd2ece65a419501fc29b90f8bd85ac`) and published to PR #605 under Mission Control's Git authorization for this revision. Changes: exact live protection state (§3.4), evidence-based migration reconciliation (§3.7), register entries C-19 to C-21, observations O-01 and O-02, sources and limits.

> Analysis only. No governing source, template, protocol, instruction file or Product Mission artifact was edited. `SB-P-1.12` remains `NOT ACTIVATED`. Companion documents: [02 — proposed lifecycle](./02-proposed-optimized-product-mission-lifecycle.md) and [03 — amendment map](./03-governance-amendment-map.md).

---

## 1. Method and evidence classes

Every finding carries one evidence tag.

| Tag | Meaning |
|---|---|
| `[R]` | Read directly in the repository at the baseline commit; line numbers refer to that commit. |
| `[G]` | Measured from `git log` of `main`. Counts use commit titles as a proxy and are reproducible, but a title is not proof of a PR's content. |
| `[L]` | Live read-only GitHub API `GET` made on 2026-09-19. No write call was made. |
| `[N]` | Not verified. Stated as a limit, never as a finding. |

No production system, Supabase project or Lovable project was accessed. The Lovable connector requires authorization that this non-interactive session cannot perform, and it was not needed for this analysis.

## 2. What was read

All fifteen "Read First" items in the instruction were read. Sources 12 and 17 were read for contradiction only.

| # | Source | Path | Result |
|---|---|---|---|
| 1–2 | Mission README and activation basis | `communication/missions/SB-GOV-PRODUCT-EXEC-1.0/` | Read in full |
| 3 | Source 18 v1.1 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | Read in full (591 lines) |
| 4 | Elaboration template | `docs/phase-1-mission-blueprint/templates/SB-P-Product-Feature-Elaboration-Workflow-Template.md` | Read in full (784 lines) |
| 5 | Implementation and Evidence template | `docs/implementation/templates/SB-P-Implementation-and-Evidence-Workflow-Template.md` | Read in full (680 lines) |
| 6 | Founder-approved Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | Read in full (1019 lines) |
| 7 | Communication and Handover Protocol | `communication/AI_Communication_and_Handover_Protocol.md` | Read in full (678 lines) |
| 8 | Migration Authority Index | `docs/migration/README.md` | Read in full (91 lines) |
| 9–10 | Repository instructions | `AGENTS.md`, `CLAUDE.md` | Read in full; `CHATGPT.md` inspected for copied wording |
| 11 | Verification protocol | `communication/Independent_Verification_Efficiency_Protocol.md` | Read in full (192 lines) |
| 12 | Phase 1 institutional-memory guide | `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md` | Read in full (458 lines) |
| 13 | OLE promotion records | `organizational-learning/promotions/**` | All 17 records summarized programmatically; SB-GOV-IV-1.0 decision record read |
| 14 | SB-P-1.11 history | `communication/missions/SB-P-1.11/`, `communication/archive/SB-P-1.11/`, `git log` | README, acceptance record, Lovable operating model, archive chronology read; history measured |
| 15 | CI and production-sync closure | `.github/workflows/`, `docs/engineering/assurance/Build_Assurance_Baseline.md`, `communication/missions/SB-OPS-CI-ARCHITECTURE-1.0/`, `communication/missions/SB-OPS-PROD-SYNC-1.0/`, `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md` | Read; branch protection queried `[L]` |

Also inspected for the amendment map: `communication/README.md`, `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`, `merge/active/README.md`, `mission-control/mission_memory.md`, `communication/governance/branch-protection-verification.md`, Sources 12 and 17, and the SB-P-1.10 Blueprint section list.

For the Founder Product Truth coverage addendum: the Feature Library `README.md`, `00_Feature_Definition_Library_Coverage_Matrix.md` (§2, §6, §9), `00_Global_Product_Completion_View.md` (§1 to §8, the §5 table, §12) and contract `21_Permissions_Business_Isolation_and_Role_Authority.md` (section structure and acceptance scenarios) under `docs/phase-1-mission-blueprint/smart-business-features/`. **The other 24 contracts were not opened**; statements about "the contracts" rest on the README and on contract 21.

For the Mission Control review of PR #605 (design addendum): the review comment itself; live read-only GitHub API `GET` calls for branch protection, repository and effective rulesets, organization rulesets, repository permissions and merge settings (§3.4); the GC-40 evidence record `docs/implementation/SB-P-1.11/evidence/gc40-production-migration-reconciliation.md`, the Stage 19 report's production-migration section, and archived reports `report1.67` and `report1.181` (§3.7); and the SB-REL archive index. No production or Supabase system was queried.

## 3. Current state — what governs a Product Mission today

### 3.1 Lifecycle `[R]`

Source 18 v1.1 defines 24 stages in three parts (Blueprint 1–8, EIS 9–11, Implementation and Verification 12–24) and nine mandatory gates (§9, lines 345–359). Stage 19 independent verification is mandatory for every Product Mission (line 299). The two templates are subordinate operational instruments (§2, line 39). Source 18 gives Codex Product Truth extraction and Blueprint Sections 1–19, Claude Code the review sections, EIS and package, and Lovable implementation (§4.3–4.5).

### 3.2 Verification `[R]`

`SB-IV-1.0` (Independent Verification Efficiency Protocol) is active, Founder approved on 2026-09-18, activated on PR #598. It defines Evidence Classes A/B/C, a Codex utilization classification that "controls involvement, not the gate", a builder Verification Packet, a verification-ready entry gate, finding-scoped re-verification with named escalation triggers, and result vocabulary. Its five originating learnings are recorded as `VALIDATED` / `MISSION_SCOPED` OLE promotions.

### 3.3 Communication and Git `[R]`

Protocol v1.0 is active. AI work reaches `main` only through a mission-branch pull request (§8, §12); mission-scoped Git authority "expires when the authorized stage is completed" (§21, line 340; mirrored at `AGENTS.md:203`). Numbered live chains are a non-default option (§27). Closure follows §26 (archive) and the standing OLE rule in `communication/README.md` lines 133–162.

### 3.4 CI `[R]` `[L]`

| Workflow | Trigger | Required by branch protection |
|---|---|---|
| `build-assurance.yml` — Fast Gate (lint, typecheck, build, 8 fast test files) | every PR and push to `main` | **No** |
| `full-assurance.yml` — 20 Supabase-dependent test files, isolated `smart-business-test` environment | path-filtered PR/push and manual | **No** (deliberately, `Build_Assurance_Baseline.md` line 44) |
| `markdown-quality-gate.yml` | Markdown changes | **Yes** — the only required check |

**Exact live protection state `[L]`** (revised after Mission Control's PR #605 review). Read-only `GET` calls at **2026-09-19T08:55:38Z**; no write call and no merge attempt.

| Item | State |
|---|---|
| Classic protection on `main` | Present |
| Required status checks | One: `Markdown Quality Gate` (GitHub Actions app id 15368), `strict: true`. The Fast Gate jobs are **not** required |
| Pull request required | Yes. `required_approving_review_count: 0`; `dismiss_stale_reviews: true`; `require_code_owner_reviews: false`; `require_last_push_approval: false` |
| Bypass pull-request allowances | None configured (`null`) |
| Administrator enforcement | `enforce_admins: true` |
| Push restrictions | None (`restrictions: null`) |
| Force push, deletion | Both `false` |
| Conversation resolution | `true` |
| Linear history, required signatures, branch lock | All `false` |
| Repository rulesets | None (`GET /rulesets` returned `[]`) |
| Effective rules for `main` | None (`GET /rules/branches/main` returned `[]`) |
| Organization rulesets | Not applicable: the repository owner is a user account (`GET /orgs/…/rulesets` returned 404) |
| CODEOWNERS | None found at `CODEOWNERS`, `.github/CODEOWNERS` or `docs/CODEOWNERS` |
| This session's credential on the repository | `admin`, `maintain`, `push` and `triage` all `true` (merge capability not tested) |
| Merge methods | Merge commit, squash and rebase allowed; auto-merge disabled |

A green Fast Gate is therefore **not** equivalent to a required merge check: it does not block a merge, and a pull request needs no approving review. There is no bypass actor, but a credential with administrator permission can merge once `Markdown Quality Gate` passes. Options are presented in 02 §18.7 as a separate decision; no package proposes any change to protection.

`SB-OPS-CI-ARCHITECTURE-1.0` closed accepted on 2026-09-16 (PR #581, merge `8a6f0df`); the automated baseline is 28 files / 169 tests (8 fast / 61 tests; 20 full / 108 tests). All AWS workflows are `workflow_dispatch` only, so a merge to `main` triggers no deployment.

### 3.5 Delivery and runtime topology `[R]`

Source: `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md` §16 and `mission-control/mission_memory.md` lines 106–113.

| Component | Current value |
|---|---|
| Canonical implementation repository | `SmartBusinessv1/smart-business` (`main`) |
| Production delivery repository | `SmartBusinessv1/starter-supab-shell` (`main`) |
| Production Lovable project | `f3e992ec-06df-4d49-b157-b92ec064c078`, published |
| Production domain | `https://smartbusiness.teamlips.com` |
| Production Supabase project | `gysgzasfcjvtrgaigfyn` |
| Isolated test Supabase project | `smart-business-test` (`drravyyauixltoihzmwo`) |

The path is canonical repo → delivery repo → Lovable publication → production. The delivery sync and publication steps are outside any Product Mission stage today.

### 3.6 Institutional learning `[R]`

- 17 OLE promotion records exist under `organizational-learning/promotions/` (SB-GOV-IV-1.0: 5; SB-OPS-CI-ARCHITECTURE-1.0: 4; SB-ORG-LEARNING-1.1: 8). Every record is `VALIDATED` and `MISSION_SCOPED`. None is `ORGANIZATION_WIDE` or `INSTITUTIONALISED`.
- `SB-GOV-IV-1.0` Candidate 06 is retained as a candidate and explicitly not promoted (decision record §3).
- OLE Stage 4B automation (Issue #590) remains deferred; the human-initiated handoff rule stays in force.
- **The historical OLE backfill has not been performed.** `SB-ORG-LEARNING-HIST-1.0` appears only in the mission README as a possible future mission; no mission folder, record or candidate exists for it. It cannot be described as complete, and its absence does not need to delay `SB-P-1.12`.
- The Phase 1 guide's header still reads "Historical closeout candidate; becomes the durable institutional-memory guide when the closeout PR is Founder-merged and Mission Control verifies `main`" (line 4). The file is on `main` and the Founder activation basis designates it canonical, but the header records no such transition.

### 3.7 Migration authority `[R]`

`docs/migration/README.md`: current active migration mission `NONE`; current executable package `NONE`; default-deny execution requires a "new, current, explicit Founder- or Mission Control-authorized mission" identifying eight elements (lines 13–26). It has no concept of migration authority held inside a Product Mission. Its SQL count is stale: it states twelve files (lines 55 and 85); `supabase/migrations/` holds 24 `.sql` files `[R]`.

**Evidence-based reconciliation of files 13 to 21 (2026-08-06 to 2026-08-30) `[R]`.** Mission Control's review required this to rest on the actual GC-40 and Stage 19 records, without inferring status. Files 1 to 12 and 22 to 24 are outside this table (1 to 12 are presumably the twelve the README counts, which the README does not enumerate; 22 to 24 already have README rows).

| # | File | Evidence in the repository | What it does **not** show |
|---|---|---|---|
| 13 | `20260806120000_…impl_1_stage1_schema` | GC-39 readiness report `report1.181` §4 (2026-08-28, Mission Control, read-only metadata): "Production currently contains the SB-P-1.11 migrations through" this version. Also Stage 19 report line 209: production ledger "identical for the first 16 migrations" by direct `supabase migration list --linked` output when 18 local files existed | Current ledger; both observations are point-in-time |
| 14 | `20260806130000_…impl_1_stage2_functions` | Same two sources | Same |
| 15 | `20260808120000_…rr_2_category_select_grant` | Same two sources, plus an execution record: archived `report1.67` (`db push` applied it, one migration pending, 14 prior matched). `report1.181` notes the remote **name** differs from the test project's recorded name (metadata divergence, version present in both) | Current ledger; the name divergence is unresolved metadata |
| 16 | `20260808140000_…rr_3_tax_lifecycle_rls_remediation` | Same two sources (`report1.181` §4; Stage 19 line 209) | Current ledger |
| 17 | `20260810120000_…gc_1_catalog_import_support_schema` | GC-40 package migration 1: applied, history incident reconciled by `GC-40A` (`migration repair`, no DDL re-run); confirmed by Mission Control's final read-only reconciliation (`report1.182`), per `docs/implementation/SB-P-1.11/evidence/gc40-production-migration-reconciliation.md` §3 to §5 | Current ledger |
| 18 | `20260811090000_…gc_1_security_correction` | GC-40 migration 2: `report1.185` PASS; `report1.182` | Current ledger |
| 19 | `20260819120000_…gc_38r_parser_support_schema` | GC-40 migration 3: `report1.186` PASS; `report1.182` | Current ledger |
| 20 | `20260826120000_…gc_38r_parser_guard_ambiguity_fix` | GC-40 migration 4: `report1.187` PASS; `migration list` showed zero pending; `report1.182` | Current ledger |
| 21 | `20260830120000_…gate2a_c1_inventory_anon_privilege_hardening` | **No production-application record found.** Its own header says "Preparation & Test Validation"; it post-dates GC-40; the SB-REL archive found concerns a different gate (test-project credential containment) | Any production status at all |

Findings from this reconciliation: (1) files 13 to 16 are evidenced by two independent point-in-time ledger observations (`report1.181`, 2026-08-28, and Stage 19), and file 15 additionally by an execution record, so they are evidenced but not currently re-verified; (2) files 17 to 20 are well evidenced; (3) **file 21's production status is unverified and must not be inferred**; (4) the post-completion continuity record (§17) says no direct evidence was found that the idempotency-fix migration `20260724170000` (file 11) is on current production, while the Stage 19 ledger observation covers it, so the two records should be reconciled by Mission Control rather than by this analysis; (5) a ledger match is evidence of state and never executable authority. A current read-only ledger comparison would settle this and needs its own authorization; none was performed.

### 3.8 Build Plan `[R]`

Nine-mission sequence locked (§9); per-mission outcomes, Founder Runtime Verification scenarios and exit principles (§10); standing early gates (§5); mandatory Experience Verification Matrix in every Completion Report (§13); unresolved Founder decisions (§15); "future Product Mission should use current Product Truth + this plan + relevant contracts + verified repository/runtime state + only the unresolved Founder decisions relevant to that mission" (§17, lines 988–990).

### 3.9 Product Truth definition and completion controls `[R]`

Four existing controls protect approved feature truth. Each works at a different granularity.

| Control | What it says | Granularity |
|---|---|---|
| Feature Library README | Founder Build Commitment Rule (historical labels must not silently demote a capability; `Add-on` does not mean `Build Later`); Anti-Drift Rule (no AI, specialist or narrow mission may remove, postpone or simplify approved behaviour; record it as "still committed / not in this mission"); a Blueprint "should state any intentional refinement/difference from the mature feature contract" | Principle |
| Coverage Matrix | Recovered Founder-origin behaviour must land in a contract, a delegation, an unresolved decision, historical detail or a rejection (§2); a delegation map (§6); it "does not prove" code, runtime behaviour or release (§9) | Definition: behaviour to contract |
| Global Product Completion View (titled "Register" inside) | One row per contract, 25 rows; status vocabulary (§4); Mission Control updates only from verified evidence and accepted state; builder-only code, green CI, deployment and merged PRs do not prove completion (§2); Update Protocol at initiation, during execution, acceptance and closure (§12) | Program: contract row |
| Build Plan §13 Experience Verification Matrix | Mandatory in every Completion Report from `SB-P-1.12` | A handful of experience anchors per mission |

**Gap `[R]`:** none of them accounts for the requirements inside one Product Mission, from Blueprint to completion. Build Plan §10 gives each mission a short "Required work areas" list and two Founder runtime scenarios; contract 21 alone has 27 sections and 12 numbered acceptance scenarios. The lifecycle's own traceability is "source/decision traceability" at Stage 4 (Source 18, line 155) and a checklist that traces to contract obligations, not to approved feature requirements.

## 4. SB-P-1.11 execution history — measured

`[G]` unless marked. Window: 2026-08-03 to 2026-08-30. The lifecycle began on 2026-08-04 (Stage 1 activation, PR #26), acceptance merged on 2026-08-29, closure PR #426 on 2026-08-30.

| Measure | Value |
|---|---|
| Merged PRs with `SB-P-1.11` in the title | 266 |
| Titles beginning `Authorize` | 74 |
| Titles beginning `Authorize`, `Lock`, `Apply`, `Record` or `Accept` | 92 (35%) |
| PRs on 2026-08-04 and 2026-08-05 (Stages 1–13 burst) | 79, of which 35 begin with a clerical verb |
| PRs concerning the EIS (Stages 9–11) | 25, spanning EIS v2.0, v2.1, v2.2 |
| PRs for the three implementation-package documents (Stage 12–13) | 18 |
| PRs mentioning Lovable, dependency, transfer or sync work | 38 |
| Distinct `GC-*` gap-closure identifiers | 39 (plus IMPL, LOV, DEP, RR and SR sub-identifiers) |
| PRs mentioning migration or production | 21 |
| Live exchange files at closure `[R]` | 197 instruction-side, 193 report-side, 393-file source snapshot |
| State at Stage 23 acceptance `[R]` | Application not deployed; five follow-ups open (`F23-01` to `F23-05`) |
| First production publication `[R]` | 2026-09-03 under `SB-OPS-PROD-SYNC-1.0`, five days after acceptance |

Limits: titles classify PRs imperfectly; a title starting `Lock` may carry substantive content. The figures show order of magnitude and shape, not a cost accounting.

## 5. Bottleneck analysis

### B-01 — Default rediscovery of approved truth

- **Cause `[R]`:** Stage 2–3 (Source 18 lines 133–147) and the Elaboration template §5–§9 (lines 144–288) require full source ingestion, Product Truth extraction, a structured Founder dialogue "before drafting Sections 1–19" (line 232) and a Founder Product Decision Record for every mission, unconditionally.
- **Conflict `[R]`:** the Build Plan already carries, per mission, the product outcome, Founder-approved experience, two Founder Runtime scenarios and exit principle (§10), plus the unresolved-decision list (§15), and §17 says a mission should consume that truth plus only the relevant unresolved decisions. The 25 contracts did not exist when the templates were written.
- **Honest impact:** in SB-P-1.11 the early stages were not the slow part (Stage 1 to Blueprint lock took one day, PRs #26–#43). The risk for `SB-P-1.12` to `SB-P-1.20` is structural: the lifecycle would reopen decisions the Founder already approved, inviting contradictory re-decisions and consuming Founder attention.

### B-02 — Serial review chain and multi-round EIS

- **Cause `[R]`:** Gate 2 (Source 18 line 350) requires Builder Review approval before Engineering Review begins; specialist review sits at Stage 10 after the EIS exists.
- **Evidence `[G]`:** PR chronology shows separate Supabase/backend (#47), frontend (#49) and security/permissions (#50) reviews, a consolidation (#51), then EIS v2.0 (#53), v2.1 (#61), a correction (#65) and v2.2 lock (#69) across two days. Merge order is not execution order, so this shows sequencing overhead in the record, not proof of serial execution.

### B-03 — Stage-to-PR coupling and authorization micro-cycles

- **Causes `[R]`:** (a) Protocol §21 expires Git authority when the authorized stage completes (line 340; `AGENTS.md:203`); (b) Protocol §12 and Source 18 §12 (line 428) treat each handover as incomplete until repository synchronization is verified; (c) the Implementation template requires sequential locking — "The Engineering Contract shall be locked before the Builder Prompt is locked" (line 197) — and the Elaboration template requires "separate Mission Control review and lock" for each package document (line 605); (d) Mission Control authorization is issued per micro-step.
- **Evidence `[G]`:** Section 4 table. The three package documents took 18 PRs; the pattern was authorize → prepare → authorize refinement → authorize lock → lock, per document.
- **Consequence:** every stage boundary became a human-merge event, so human review capacity, not engineering, set the pace.

### B-04 — Provider-specific lifecycle assumptions

- **Cause `[R]`:** Source 18 §4.5 makes Lovable the implementer; Stage 12 fixes the file name `lovable-build-prompt.md`; Stage 14 is an unconditional "Founder Lovable Brief"; Stage 16 fixes `lovable-build-completion-report.md`.
- **Reality `[R]`:** `SB-P-1.11-IMPL-1` (authorization `instruction1.40.md`, executing rooms "Lovable Builder / Claude Engineering"; `instruction1.41.md`, "Implementation Room: Claude Code", "Lovable Work: NOT AUTHORIZED") implemented the Catalog backend in Claude Code. The Lovable frontend then needed a workspace operating model, a repository-transfer step and drift investigations (38 related PRs `[G]`).
- **Consequence:** governance text describes one builder while practice used several, so each mission improvises builder authority and transfer rules through sub-missions.

### B-05 — Repeated deterministic re-execution

- **Status:** largely addressed by `SB-IV-1.0` (§3–§10). The protocol records that the prior broad re-verification duplicated deterministic execution (§15).
- **Residual `[R]`:** Source 18 Stage 20 (lines 301–309) still prescribes a full repeat — corrective mission, updated report, Founder retest, runtime review, reverification — for every material `FAIL`, and the protocol can only scope it "under Mission Control's direction" (§9, line 126). The lifecycle text has not caught up with the protocol.

### B-06 — Late production and delivery planning

- **Evidence `[R]`:** SB-P-1.11 was accepted with the application undeployed (`23-mission-control-acceptance.md` §5). The Stage 19 material finding concerned production migration currency and was resolved through `GC-39`/`GC-40`, which included a migration-history bookkeeping incident (a generated version recorded, repaired without re-running DDL) and a `db push` isolation stop resolved by an ad hoc Mission Control-authorized method (archive chronology items 7–8). After acceptance, `SB-OPS-PROD-SYNC-1.0` found the approved application had not reached the production delivery repository, plus a runtime-compatibility defect and a Product↔Inventory integrity defect (`post-completion-continuity.md` §4, item 4). `F23-01` to `F23-04` remain open.
- **Cause `[R]`:** Source 18 has no delivery, release or migration-planning field at Stages 1, 8, 11 or 13. Source 12 Part 4 governs release (§62–§74) but no Source 18 artifact connects to it. Build Plan §5.3 records the divergence as a risk, not as process.

### B-07 — Continuity reconstruction

- **Evidence `[R]`:** a dedicated mission (`SB-DOC-PHASE1-HISTORY-1.0`) was needed to turn a 393-file archive and scattered reports into the 25 contracts, the Build Plan and the Phase 1 guide. Source 18 §10 intake (lines 382–390) lists only the mission README, logs, the preceding report and named artifacts; it does not require the guide or OLE learning.
- **Consequence:** without an intake requirement, a Product Mission can start without institutional memory. The Founder's dual-intake rule closes this gap; the lifecycle does not yet carry it.

### B-08 — Founder attention

- **Evidence `[R]`:** unconditional Stage 3 dialogue, unconditional Stage 14 Founder Brief, and Stage 17 with no separation between product-experience judgement and mechanical runtime checks. `AGENTS.md` and Protocol §15 both require the Founder to be protected from acting as a manual message bus.

### B-09 — Closure sprawl

- **Evidence `[R]` `[G]`:** Stage 24 (lines 337–343) requires only a closure record. Actual closure also required an OLE handoff (`communication/README.md` lines 133–162), a communication archive with a byte-identical 393-file snapshot (PR #427) and a consolidation housekeeping action (PR #429). `SB-GOV-IV-1.0` needed PRs #600 to #603 to close. Closure duties live in three documents and none of them is Source 18.

### B-10 — Omission and drift risk created by acceleration (Founder addendum)

- **Cause `[R]`:** the proposed no-rediscovery consumption, Blueprint assembly by reference and combined stages would remove redundancy that today can re-surface a requirement by accident. The lifecycle has no requirement-level accounting to replace it (§3.9 gap).
- **Evidence of the underlying risk `[R]`:** the Feature Library README states that a high-level Product Truth statement "can correctly say **what** a feature is while omitting enough workflow depth for a builder to produce a materially incomplete product". Build Plan §7 records the current Catalog surface as "product-surface drift relative to recovered Product Truth". The View §11 records a former "builder-drift ambiguity" over the opening-stock import. SB-P-1.11 was accepted with `F23-01` to `F23-05` carried as follow-ups: four were verification obligations not fully performed, which shows a follow-up is how an unfinished obligation travels, and there was no place to see whether any corresponded to an approved requirement.
- **Measured impact:** none. The 25 contracts were produced after SB-P-1.11, so omission cannot be measured retrospectively `[N]`. The risk is structural and prospective.
- **Consequence:** a faster lifecycle without requirement-level accounting would trade Product Truth completeness for speed, which the Founder has ruled out.

## 6. Contradiction and staleness register

| ID | Location | Finding | Evidence | Severity |
|---|---|---|---|---|
| C-01 | Build Plan §14, §17 vs Source 18 Stage 2–3 and Elaboration template §8 | No-rediscovery intent vs mandatory discovery dialogue | `[R]` | High |
| C-02 | Build Plan §5.2 (161–167), §10.1 (400) | States CI is missing and `SB-P-1.12` must establish it; Fast Gate and Full Assurance exist and closed 2026-09-16 | `[R]` | High |
| C-03 | Source 18 Stage 24 vs `communication/README.md` 133–162 and Protocol §26 | Closure duties (OLE disposition, archive) absent from the governing lifecycle | `[R]` | High |
| C-04 | Build Plan §13 vs Implementation template §9 and Source 18 Stage 22 | Mandatory Experience Verification Matrix is not in the Completion Report template or stage output. Even when added it is anchor-level only: no requirement-level reconciliation against the contracts exists anywhere in the lifecycle | `[R]` | High |
| C-05 | Source 18 lines 4, 580–591 | Header says v1.1; Source Change Log has no v1.1 row; closing "Active control" line says Version 1.0 | `[R]` | Medium |
| C-06 | Source 18 line 448 vs line 323 | Status `VERIFICATION COMPLETE — ACCEPTANCE PENDING` vs `… MISSION CONTROL ACCEPTANCE PENDING` | `[R]` | Low |
| C-07 | Elaboration template lines 5, 784; Implementation template | Header `SB-P-PFEW-1.3`, change log ends at 1.2 (PR #598 changed the file after 2026-07-31); Implementation template has no change log | `[R]` `[G]` | Medium |
| C-08 | `communication/README.md:127` | "`SB-P-1.12` remains inactive until `SB-GOV-IV-1.0` closes cleanly" — that mission closed via PR #603 | `[R]` | Medium |
| C-09 | `docs/migration/README.md` lines 55, 85 | "Twelve" / "12" SQL files; 24 exist. Files 13 to 21 have no family row; evidence per file is reconciled in §3.7 (files 13 to 20 evidenced by GC-39, Stage 19 and GC-40 records; file 21 unverified) | `[R]` | Medium |
| C-10 | `AGENTS.md:29`, `CLAUDE.md:35`, `CHATGPT.md:35` vs the design outcome of migration authority inside a Product Mission | "Execution requires a new explicit mission" would read as a stop condition for workstream-held authority | `[R]` | Design dependency |
| C-11 | Phase 1 guide line 4 and §16 | Header records a pre-merge state; §16 lists application build/lint/test CI as future tooling although it now exists | `[R]` | Low |
| C-12 | Canonical Source Set doc lines 85–101 | Codex and Claude Code intake lists omit the Phase 1 guide, OLE promotions and the verification protocol | `[R]` | High (Founder rule not operationalized) |
| C-13 | Source 17 metadata (line 13) | "Source 18 — Project Continuity and Handover Framework" is a superseded historical file that shares a number with the active Source 18 | `[R]` | Observation only |
| C-14 | Global Product Completion View §7 (line 193) vs §12 (lines 291–301) | §7: "Future Mission Control closure shall update the relevant rows after formal acceptance"; §12: Mission Control updates the affected rows "At Mission Acceptance". Update timing is ambiguous | `[R]` | Medium |
| C-15 | View §4.4 (lines 94–102) and §4.5 | `IMPLEMENTED + SUFFICIENTLY ALIGNED` has no stated criterion, so an upgrade rests on discretion; nothing requires every applicable Build Now requirement of the contract to be demonstrated | `[R]` | High |
| C-16 | View §1 (line 21) vs §5 table header (line 116) | §1 promises an answer to "What evidence supports that implementation state?"; the table has no evidence column and no pointer to requirement-level residuals. "Exact blocker / gap" is free prose | `[R]` | Medium |
| C-17 | Build Plan §10 subsection titles "Required work areas" | Summaries presented as the mission's requirement list; contract sections not named there could be read as out of scope. Not stated to be non-exhaustive | `[R]` | High |
| C-18 | View file name and title | File `00_Global_Product_Completion_View.md`, title "Global Product Completion Register"; the Build Plan and Phase 1 guide say "Register", the Founder addendum says "View" | `[R]` | Observation only; no rename proposed |
| C-19 | Source 18 §4.3 (line 75) and Appendix A; Elaboration template §3 (line 71) and §8 (line 232) | Codex is the mandatory owner of Founder-led discovery, Product Truth extraction, Sections 1–19 and the Founder dialogue. Mission Control's review of PR #605 records that the Founder asked for the default Codex-led rediscovery and Founder-question sequence to be removed. **My first draft still named Codex as default owner of Stages 2 to 4 (02 §2, §5.2, §5.3, §6.1); corrected in the addendum** | `[R]` | High |
| C-20 | `post-completion-continuity.md` §17 vs Stage 19 report line 209 and `report1.181` §4 | The continuity record says no direct evidence was found that the idempotency-fix migration `20260724170000` is on current production; two earlier point-in-time ledger observations cover it. Not a contradiction of fact, an unreconciled residual | `[R]` | Low; for Mission Control |
| C-21 | The four-file Git grant for PR #605 vs Protocol §16 and `AGENTS.md` (Git Rules) | The grant named the AI, mission, repository, locked branch, base and scope, but not commit-message authorization, which both documents list as mandatory. Recorded as authorization-precision finding AP-1 (02 §18.9); no history rewrite | `[R]` | Medium; for Mission Control and Founder |

Sources 12 and 17 contain **no contradiction** with the proposed direction. Source 12 §64 (Founder approval before authorized deployment), §67 ("Production migration requires explicit authorization") and Source 17 §A6.3 (production deployments and migrations require explicit Founder or Mission Control approval) are compatible with, and reinforce, the default-deny requirements.

## 7. Controls learned in SB-P-1.11 that must survive optimization

Each maps to its preserved location in [02](./02-proposed-optimized-product-mission-lifecycle.md) §12.

| Control | Evidence of value |
|---|---|
| Real test-environment execution, not mocks | `SB-IV-1.0` Class A/B; Full Assurance against `smart-business-test` |
| RLS, grant and effective-permission verification | Phase 1 guide §9; Stage 19 production-security claim corrected with direct read-only evidence (`MC-S19-001/002`) |
| Concurrency and idempotency evidence | `F23-02` shows what happens when it is deferred |
| Migration and environment identity checks | GC-40 history incident; SB-INC-2026-001 |
| Production drift detection and default-deny | `SB-OPS-PROD-SYNC-1.0`; `docs/migration/README.md` |
| Independent verification and Mission Control acceptance | Stage 19 and Stage 23 findings changed outcomes |
| Human merge and protected `main` | Protocol §22 |
| Claim-specific evidence | Phase 1 guide §8 |
| Product Truth completeness: no silent removal, postponement or simplification of approved behaviour | Feature Library README Anti-Drift Rule; Build Plan §7 Catalog drift and View §11 opening-stock drift show it is needed |
| Completion recorded only from verified evidence | View §2 rules 4 and 7; Phase 1 guide §4 |

## 8. Security and authority observations (no amendment proposed)

| ID | Observation | Evidence | Suggested owner |
|---|---|---|---|
| O-01 | Fast Gate is not a required status check. `SB-P-1.12`'s standing engineering-quality gate (Build Plan §5.2) is therefore satisfied by a check that does not block merge. Fast Gate success alone is not a required merge check. | `[L]` exact state in §3.4 | Founder decision; separate, separately authorized branch-protection mission |
| O-02 | `required_approving_review_count` is 0, there is no bypass actor, no ruleset and no CODEOWNERS, and this session's credential holds administrator permission. Human merge is a governance rule enforced by policy and credential separation, not by GitHub review rules. Merge capability was not tested and no write call was made. | `[L]` exact state in §3.4 | Founder decision; options in 02 §18.7; any mutation must be separately authorized and is in no package |
| O-03 | Build Plan §5.1 (residual `anon` grants on `businesses`, `transactions`, `transaction_correction_events`) remains valid in the repository. `20260830120000_…inventory_anon_privilege_hardening.sql` states these tables were left "completely untouched", and no migration revokes `anon` on them. Live grant state was not checked. | `[R]` `[N]` | `SB-P-1.12` Stage 2 delta and early gate |
| O-04 | Every OLE promotion is `MISSION_SCOPED`. Treating a promotion as a universal rule would over-apply it; intake must screen for applicability rather than adopt wholesale. | `[R]` | Design item in 02 §4 |
| O-05 | The historical OLE backfill does not exist as a mission. The dual-intake rule therefore applies to `SB-P-1.12` and every later Product Mission. | `[R]` | Mission Control |
| O-06 | External topology (Lovable project, delivery repository, domain) is volatile; the Phase 1 guide §11 requires fresh verification before mutation. | `[R]` | Design item in 02 §11 |
| O-07 | `communication/live/report.md` is a shared transient file; the amendment package must not treat it as durable authority. | `[R]` | Protocol §27 |

## 9. Dual-intake position

The Founder-approved rule, preserved verbatim:

> Every Product Mission intake must consume both current validated OLE learning and the canonical Phase 1 institutional-memory guide until Mission Control verifies that the historical OLE backfill is complete.

- **Backfill status:** not verified complete; not started. This analysis makes no claim otherwise.
- **`SB-P-1.12`:** not blocked by the backfill. The guide already protects continuity.
- **Substitution:** neither source may substitute for the other until Mission Control records verified completion; after that, a simplified rule needs a separate Mission Control authorization.
- **Relationship to Product Truth coverage:** the Feature Coverage and Product Truth Traceability Matrix required by the Founder addendum is a separate intake obligation. It consumes the feature contracts and Build Plan; it neither replaces nor is replaced by the dual-intake record.
- **Where the rule is not yet operational `[R]`:** Source 18 (no intake requirement), the two templates (Source Pack lists), the Build Plan §17 list and the Source Set intake lists (C-12). The amendment map assigns each.

## 10. Limits and unverified items

- No production or Lovable state was inspected `[N]`; topology values come from repository records dated 2026-09-03.
- The live `anon` grant state, the current contents of the production migration ledger, and whether `F23-01` to `F23-04` have been closed by any later record were not verified `[N]`.
- `[G]` counts depend on title keywords. They were recomputed with a conservative filter (`SB-P-1.11` in the title) and are stated as order-of-magnitude evidence.
- The Global Product Completion View's 25 rows were not audited for accuracy; the design constrains how they are updated, not their present values.
- Only contract 21 was opened. Whether the other 24 share its structure, and how many requirement rows a full FCTM would hold for any mission, was not measured `[N]`.
- The Founder branch-effective authority proposal and the broader Git authority proposal are decision gates in documents 02 and 03. Nothing in this analysis treats either as approved.
- Migration status in §3.7 rests on point-in-time repository records (2026-08-28 to 2026-09-03). The **current** production and test migration ledgers were not read, and the production status of file 21 is unverified.
- Live protection state in §3.4 is a snapshot at 2026-09-19T08:55:38Z and can change.
- No claim is made about how long any proposed change will take to implement or how much time it will save. Expected effects in document 02 are design intent to be measured on `SB-P-1.12`.
