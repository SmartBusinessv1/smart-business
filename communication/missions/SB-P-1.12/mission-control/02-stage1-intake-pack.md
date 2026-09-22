# SB-P-1.12 — Stage 1 Mission Initiation and Intake Pack (DRAFT)

**Mission ID:** SB-P-1.12
**Mission Name:** Authority, Identity & Product Surface Foundation
**Lifecycle stage:** Source 18 v1.2, Stage 1 — Mission Initiation and Intake Pack (§6)
**Status:** `DRAFT — MISSION CONTROL REVIEW REQUIRED`. Not canonical until this pull request is human-merged. Preparation only (Source 18 §3.3); grants no approval, lock, authorization, acceptance or closure.
**Prepared by:** Claude Code, as Stage 1 documentation-preparation support under the mission-scoped Git authority in `communication/live/instruction.md`
**Prepared:** 2026-09-22
**Intake baseline:** `main@d1bffd0d21180daea0613f62b2757ea127ccdc6b` (PR #621, merged by the Founder 2026-09-22T07:40:56Z — verified `is_bot: false`, merge commit matches `origin/main` HEAD at intake, re-verified immediately before this branch was cut; no intervening merge, no open pull request, no conflicting mission branch)
**Owner of this record:** Mission Control (Source 18 §6 Stage 1 owner). Claude Code drafts; Mission Control approves, appoints and issues.

---

## 1. Mission identity, scope and owner

| Field | Value |
|---|---|
| Mission ID | `SB-P-1.12` |
| Mission Name | Authority, Identity & Product Surface Foundation |
| Mission type | Product Mission (`SB-P-*`), governed by Source 18 v1.2 |
| Sequence position | First mission of the Build Plan §9 "Locked Nine-Mission Build Sequence" (`SB-P-1.12` → `SB-P-1.20`) |
| Product outcome (Build Plan §10.1, verbatim) | "Make all later work safe by establishing durable authority, identity, isolation, and the correct product-surface model." |
| Stage 1 owner | Mission Control |
| Stage 1 documentation-preparation support | Claude Code (this package) |
| Stage 2–4 Definition Actor | **Recommended, not appointed** — see Section 4 |
| Stage 19 Independent Verification Actor | **Not appointed; seeded** — see Section 8 |
| Founder authority for this Stage 1 preparation | PR #621 (merged), MC decision `SB-P-1.12-MC-01`/`MC-01-A`/`MC-01-B`, live instruction `communication/live/instruction.md` |

**Scope, as bounded by the live instruction and Build Plan §9/§10.1:** authority, identity, tenant isolation, execution-time authorization, and Product & Price Master surface reconciliation. This is **not** the entire nine-mission product sequence, and it is not a general RBAC or security-hardening mission beyond what Contracts 21, 22, 20 and 17 and Build Plan §7/§10.1 actually require.

**Not in scope of this Stage 1 record:** Stage 2 Mission Truth Pack population, Stage 3 Founder Decision Gate, Stage 4 Blueprint Sections 1–19, any FCTM row disposition, any OLE promotion disposition, any implementation, any production/migration/delivery action. This record only opens what Source 18 §6 requires opened.

---

## 2. Source pack (what governs this mission, at this baseline)

Read in the order Source 17 establishes (Founder → Lighthouse Constitution → Sources 01+11 jointly → approved governance → Mission Control → authorized actors → repository instructions):

**Governance framework**
- `AGENTS.md`, `CLAUDE.md`
- `merge/active/README.md` (canonical index) and `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md` (register)
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` — Source 18 **v1.2** (active from the PR #608 activation event, `merged_at` 2026-09-20T11:34:43Z UTC; register blob for Source 18 must be re-verified at this intake — see Section 9)
- `communication/AI_Communication_and_Handover_Protocol.md` v1.1
- `communication/Independent_Verification_Efficiency_Protocol.md` (`SB-IV-1.0`) v1.1
- `communication/README.md`

**Mission-specific record**
- `communication/missions/SB-P-1.12/README.md`, `decision-log.md`, `handover-log.md`
- `communication/missions/SB-P-1.12/mission-control/01-stage1-communication-and-actor-allocation-decision.md` (MC-01)
- `communication/live/instruction.md` (this Stage 1 authorization)

**Product Truth and Build Plan**
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`, §§4–8, 9–12, 15, and specifically **§10.1** (mission-specific plan) and **§7** (Product & Price Master Founder decision) — blob `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` — blob `ee76d920146008056781fced41be938675c4be0b`
- Primary mature contracts **21, 22, 20, 17** — blob SHAs and structure in Section 5 below

**Institutional learning (dual intake, Source 18 §3.1)**
- `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md` — blob `3da3d6d3f9b7fbd89de028ca0191d99484049ba9`
- `organizational-learning/promotions/**` at this baseline (17 records — Section 7)

**Mission-control context (advisory, not governing authority)**
- `mission-control/SB-P-1.12_Successor_Mission_Control_Handover.md`
- `mission-control/mission-control-25-26.md` and `mission-control/Accelerating_Smart_Business_Product_Missions_Without_Sacrificing_Security.md` (PR #617, **explicitly non-governing** — see Section 10)
- `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md`
- `docs/migration/README.md` (read; no migration-related work is authorized or proposed by this mission)

---

## 3. Permitted paths for this Stage 1 preparation

Exactly the eight paths named in the mission-scoped Git authority of `communication/live/instruction.md`:

```
communication/live/report.md
communication/missions/SB-P-1.12/README.md
communication/missions/SB-P-1.12/decision-log.md
communication/missions/SB-P-1.12/handover-log.md
communication/missions/SB-P-1.12/mission-control/02-stage1-intake-pack.md
communication/missions/SB-P-1.12/mission-control/03-stage1-fctm-open.md
communication/missions/SB-P-1.12/claude-code/01-stage1-preparation-report.md
communication/missions/SB-P-1.12/founder/01-stage1-merge-brief.md
```

No other path is touched by this preparation. No application code, SQL, configuration, or governance-source file is modified.

**Initial communication record:** `communication/live/instruction.md` (canonical, merged in PR #621) and this Stage 1 package, which is the artifact that Section 6 Stage 1 of Source 18 calls "the Intake Pack."

---

## 4. Definition Actor appointment — recommendation for Mission Control decision

Source 18 §4.3 requires Mission Control to appoint a qualified Definition Actor and record the actor, why it is fit, its prior contributions, a separation assessment, and named alternates. The live instruction explicitly prohibits automatic appointment of Codex and requires a reasoned assessment, with any contribution/independence tradeoff surfaced to Mission Control before naming an actor. **Claude Code does not appoint itself or any other actor here — this section is a reasoned recommendation for Mission Control's decision at review/merge.**

### 4.1 Candidates considered

Only Codex and Claude Code have an established track record on this repository's product-definition and engineering work (Source 18 §§4.3–4.9; Institutional Memory §15). No specialist AI (§§4.6–4.8) is eligible for the Definition Actor role — specialists review within a domain and may not redefine scope or author Sections 1–19.

### 4.2 Why the mission's contract areas matter to fitness

Contracts 21 and 22 are dense, backend-and-authorization-heavy (RLS, grants, execution-time revalidation, delegated-authority, entitlement) with 27 and 32 sections respectively; Contracts 20 and 17 are experience/workflow-heavy but still route every surface through "the Permission Engine" (Contract 21) and "shared identities" (Contract 22) by cross-reference. Stage 2–4 requires synthesizing this by reference (Source 18 §3.2 item 7: "requirement text lives only in the source contracts") into Blueprint Sections 1–19 without redefining Product Truth, plus a Delta classification against actual current repository/runtime state (Source 18 §2 Stage 2).

### 4.3 Claude Code — prior contributions and fitness

- Authored `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md` (`SB-DOC-1.10-1.11-CONTINUITY-1.0`, merged), the canonical bridge record this mission's Delta classification must consult — meaning first-hand, recent familiarity with the exact current Catalog/Inventory/Auth topology, the Catalog↔Inventory identity-linkage defect history, and the present rule that "Catalog and Inventory remain separate records" that Product & Price Master reconciliation must preserve.
- Performed Builder Review and Engineering Review (Sections 20–21) on SB-P-1.11, the immediately preceding Product Catalog & Pricing mission whose data this mission's Product & Price Master reclassification directly touches.
- Is presently performing this Stage 1 documentation-preparation work itself, under Mission Control's bounded authorization — direct demonstrated fitness for contract-synthesis and structured mission-record drafting at this repository's evidentiary standard.
- Institutional Memory §15 records "Claude/Claude Code repository-aware engineering and verification" as an acquired Team LIPS capability; the CI baseline record separately shows the recurring pattern "Owner: Claude Code (…implementation…corrected per Codex Stage 2 review)."

### 4.4 Codex — prior contributions and fitness

- Performed Product Discovery and Drafting on SB-P-1.11 (the pre-Source-18-v1.2 equivalent of the Definition Actor role) and authored the Independent Verification Efficiency Protocol itself.
- Institutional Memory §15 records "Codex independent technical review and repository archaeology" as its acquired capability; IV Protocol §1 states plainly: **"Codex is a scarce verifier, not a builder."**

### 4.5 The tradeoff Mission Control should weigh

This mission's own risk profile — authority, permissions, tenant isolation, execution-time security — is **exactly** the IV Protocol §4 "Codex Required" trigger for the Stage 19 Independent Verification Actor ("Authority, financial integrity, permissions/isolation, security, irreversible actions or complex failure modes"), and Source 18 §4.9 states Codex "is preferred for the highest-risk cases where eligible and available" at that gate. Two coherent appointment patterns follow, and they conflict:

| Option | Definition Actor (Stages 2–4) | Consequence |
|---|---|---|
| **A — recommended** | Claude Code | Preserves Codex, uncommitted by this mission, as the natural, independent, preferred Stage 19 verifier for a mission the IV Protocol itself classifies "Codex Required." Triggers the Source 18 §4.3 role-separation table's own condition — Claude Code would then hold both Definition Actor (Stages 2–4) and, by §4.4 default, Engineering Review (Stages 6–7) — which the table requires Mission Control to record as a separation assessment, and because this is a material-risk mission, to have "a parallel specialist who did not author Sections 1–19" review the Stage 7 feasibility and risk findings. |
| B | Codex | Reuses Codex's SB-P-1.11 discovery/drafting precedent and cleanly separates from Claude Code's Stage 6–7 Engineering Review role (no same-actor conflict there). But it spends Codex's independence on a mission Codex would then be the *least* independent to verify at Stage 19 — the only fallback is Source 18 §3.2 item 6 / IV Protocol §6's "if the only eligible verifier authored the FCTM, Mission Control records a separation assessment and checks against the source contracts," which is explicitly the less-preferred path, not the default one. |

**Recommendation:** Option A (Claude Code as Definition Actor for Stages 2–4), with the required separation assessment recorded now: Mission Control should name a parallel specialist (or reserve its own Stage 7 review) for Stage 7 feasibility/risk findings given this mission's material-risk profile, and should not treat Claude Code's Stage 2–4 authorship as qualifying it as this mission's Stage 19 verifier without a further independence review at that gate. Codex is named the primary alternate for Definition Actor if Mission Control instead prioritizes builder/reviewer role separation over verifier-capacity preservation — that is Mission Control's tradeoff to make, not Claude Code's.

### 4.6 Named alternates

1. **Codex** — alternate Definition Actor (Section 4.5, Option B); primary intended Stage 19 Independent Verification Actor under Option A.
2. No third AI actor is currently established as eligible under Source 18 §4.3.

---

## 5. Contracts advanced and the FCTM opening

Full detail, including blob SHAs, structural counts and the delegated-contract boundary question, is in `communication/missions/SB-P-1.12/mission-control/03-stage1-fctm-open.md`. Summary:

| # | Contract | Build commitment (GPCV) | Current implementation (GPCV) |
|---|---|---|---|
| 21 | Permissions, Business Isolation and Role Authority | BUILD NOW — core shared foundation | `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` |
| 22 | Shared Product Foundations | BUILD NOW — cross-product architecture | `IMPLEMENTED BUT INCOMPLETE` |
| 20 | Onboarding and First Experience | BUILD NOW | `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING` |
| 17 | Operational Dashboard and Manager Workspace | BUILD NOW | `IMPLEMENTED BUT INCOMPLETE` |

Plus Build Plan §10.1 (mission-specific plan) and §7 (Product & Price Master Founder decision) as governing Build Plan sections. None of the four contracts is yet `ACCEPTED AS MATURE FEATURE`.

---

## 6. Draft workstream register (Source 18 §8; fixed only at Stage 13)

| ID | Workstream | Primary sources | Risk class | Mandatory specialist review (§4.8) |
|---|---|---|---|---|
| WS-A | Authority & Identity Kernel — Owner/Manager/Employee role model, business membership and shared identity primitives, permission matrix, delegated authority boundaries, execution-time authorization/revalidation, entitlement primitives | Contracts 21, 22 | Material | Yes — authority/permissions |
| WS-B | Business Isolation & Database Security Remediation — cross-tenant denial, RLS/grants/function-security review, residual `anon` privilege remediation (Build Plan §5.1 names migration `20260727000000_reconcile_default_grants.sql` and tables `businesses`, `transactions`, `transaction_correction_events` as still exposed at last record), CI baseline extension (Build Plan §5.2) | Contract 21 | Material | Yes — RLS/grants |
| WS-C | Product & Price Master Reconciliation — reclassification to "CORE SHARED FOUNDATION," safe contextualization/demotion plan for `/catalog`, preservation of existing product/pricing/inventory data and deep-link continuity | Build Plan §7; Contract 22 | Material (data-preservation) | As Mission Control determines |
| WS-D | Dashboard & Onboarding Permission-Surface Integration — role-appropriate visibility wiring for Contracts 17 and 20 consuming the WS-A Authority & Identity Kernel, without building those contracts' full remaining feature scope | Contracts 17, 20 | Standard | As Mission Control determines |

This register is draft and unauthorized for build. Builder assignment, exact scope boundaries and risk classification are fixed at Stage 13, after Blueprint and EIS locks.

---

## 7. Institutional Learning Intake Record — opened

**Status statement (Source 18 §3.1, verbatim, mandatory):** `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`

- **Baseline:** `main@d1bffd0d21180daea0613f62b2757ea127ccdc6b`, 2026-09-22.
- **Phase 1 guide:** `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md`, blob `3da3d6d3f9b7fbd89de028ca0191d99484049ba9`, 458 lines, 20 sections. Its §18 mission-start checklist (12 questions) is answered by the Stage 2 Definition Actor against the Truth Pack, not here.
- **OLE promotions at this baseline — 17 records, all `resulting_maturity: VALIDATED`, all `promotion_scope: MISSION_SCOPED`** (none `ORGANIZATION_WIDE`/institutionalised, so none binds this mission automatically — each needs its own Stage 2 applicability disposition):
  - `SB-GOV-IV-1.0/` (5): `promotion-01-lifecycle-authority-operating-method-separation`, `promotion-02-actor-flexible-verifier-without-weakening-mandatory-gate`, `promotion-03-risk-triggered-verification-budget-classification`, `promotion-04-evidence-classes-prevent-redundant-reexecution`, `promotion-05-finding-scoped-reverification-with-named-escalation-triggers`
  - `SB-OPS-CI-ARCHITECTURE-1.0/` (4): `promotion-01-two-tier-ci-architecture`, `promotion-02-exact-run-level-closure-evidence`, `promotion-03-explicit-followup-retention`, `promotion-04-explicit-closure-scope-boundary`
  - `SB-ORG-LEARNING-1.1/` (8): `promotion-01-narrow-finding-scoped-correction-cycle`, `promotion-02-fail-closed-filesystem-ancestry`, `promotion-03-windows-linux-lstat-error-code-divergence`, `promotion-04-direct-api-ci-confirmation-and-capacity-resumption`, `promotion-05-duplicate-envelope-identity-belongs-in-planner`, `promotion-06-deterministic-proof-before-automation`, `promotion-07-candidate-generation-versus-promotion-authority-separation`, `promotion-08-manual-ole-trigger-dependency-risk`
- **Disposition:** not yet assigned. Per Source 18 §3.1, the Stage 2 Definition Actor prepares each promotion's `APPLIED` / `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` / `INFORMATIONAL` / `NOT APPLICABLE` disposition as part of the Mission Truth Pack; Mission Control reviews it at Stage 5.
- **Conflicts:** none identified at this opening. None of the 17 promotions appears to conflict with a governing source at first inspection; the Stage 2 owner confirms.

---

## 8. Verification-plan preview seed (Source 18 §4.9)

- **Codex utilization classification (IV Protocol §4):** `Codex Required` — this mission's subject matter (authority, permissions/isolation, security) is a named trigger for that classification.
- **Intended Stage 19 Independent Verification Actor:** Codex, subject to formal activation at Stage 18 and to whichever Definition Actor appointment Mission Control makes at Stage 1 (Section 4).
- **Eligible alternate:** another appointed, independent actor if Codex is unavailable at Stage 18 (IV Protocol §12); not Claude Code by default, to preserve the independence the role-separation analysis in Section 4.5 is designed to protect.
- **Class A boundary seed** (IV Protocol §6, drawn from Build Plan §10.1's two Founder-reserved runtime scenarios — see Section 10): permission bypass and cross-business denial; delegated-capability boundary (Manager sees only delegated operational areas, Owner financial surfaces remain denied); and revocation-before-commit (a consequential preview, e.g. a Product & Price Master bulk-import preview, must fail at commit once the authorizing permission is revoked, because authority is rechecked at execution time).
- This is a seed only. Formal verifier activation is a Stage 18 Mission Control decision; a replacement remains a recorded Mission Control decision under Source 18 §4.9.

---

## 9. Delivery and production scope flags

| Flag | Value |
|---|---|
| Production mutation | `NOT AUTHORIZED` |
| Migration execution | `NOT AUTHORIZED` |
| Delivery synchronization and publication | `NOT AUTHORIZED` |

Migration boundary confirmed against `docs/migration/README.md` at this baseline: "No migration artifact is executable by default," "Current active migration mission: NONE," and execution requires a new explicit mission naming the exact package, environment, actor, scope, safeguards and reporting workflow. Nothing in this Stage 1 package proposes, executes or authorizes a migration.

---

## 10. Topology facts requiring fresh verification before any external action

None of these are touched, probed, or relied on by this Stage 1 preparation. They are flagged because `mission-control/SB-P-1.12_Successor_Mission_Control_Handover.md` records them as "last-recorded," not freshly live-verified, and Stage 2 or later work must not treat them as current without re-verification:

- Production delivery repository `SmartBusinessv1/starter-supab-shell` (distinct from this canonical repository).
- Production Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078`.
- Production Supabase project `gysgzasfcjvtrgaigfyn`.
- Isolated test Supabase project `drravyyauixltoihzmwo`.
- The residual `anon` grant on `businesses`, `transactions` and `transaction_correction_events` named in Build Plan §5.1 (migration `20260727000000_reconcile_default_grants.sql`) — last recorded as still live; this is directly inside WS-B scope and must be freshly re-verified, not assumed, before any remediation design.
- Whether `Team LIPS Application Build Assurance` has since become a required branch-protection check (Build Plan §5.2 records only the Markdown Quality Gate as required, as of 2026-09-19) — SB-P-1.12 must surface this, not decide it.

---

## 11. Canonical crossing plan (Source 18 §3.3)

This Stage 1 Intake Pack — this file, the FCTM opening record, the updated mission README/decision-log/handover-log, the Claude Code preparation report and the Founder merge brief — is **one bundled preparation, one canonical crossing**: a single pull request, reviewed by Mission Control and human-merged by the Founder or an authorized maintainer. No part of it is separately authority-bearing before that merge.

**What may not proceed before this crossing is merged:** Stage 2 Mission Truth Pack preparation (populated FCTM, Delta, Institutional Learning Intake Record disposition), Stage 3 Founder Decision Gate preparation, and Stage 4 Blueprint Sections 1–19 drafting. Source 18 §3.3 table: "The FCTM, Delta, Institutional Learning Intake Record, Gate Record and the Sections 1–19 draft" may be prepared together **only** once Stage 1 is canonical and no Stage 3 trigger has fired — that determination belongs to whoever Mission Control appoints Definition Actor, not to this record.

**No Stage 3 trigger (Source 18 §3, T1–T8) has been identified during this Stage 1 preparation.** The two Definition Actor appointment options in Section 4.5 are a Mission Control staffing decision, not a Founder product-truth trigger, and are not treated as one here.

---

## 12. Evidence at this intake

- Remote verified: `origin` resolves to `https://github.com/SmartBusinessv1/smart-business.git`.
- Base verified: `origin/main` at `d1bffd0d21180daea0613f62b2757ea127ccdc6b`, re-fetched and re-checked immediately before branch creation; no open pull request; no existing or conflicting `mission/SB-P-1.12-stage1-intake` branch (local or remote) before this one was created.
- CI at intake baseline: `Team LIPS Markdown Quality Gate` run `35700832165` — SUCCESS; `Team LIPS Application Build Assurance` run `35700832075` — SUCCESS; both against commit `d1bffd0`, completed 2026-09-22T07:40:58Z.
- Working tree: clean before branch creation; mission branch `mission/SB-P-1.12-stage1-intake` created from `origin/main` at the same commit.

---

## 13. What this package does not do

- It does not appoint a Definition Actor (Mission Control decision).
- It does not populate a single FCTM row or assign any disposition.
- It does not answer the Institutional Learning Intake mission-start checklist or dispose any OLE promotion.
- It does not activate Stage 2, lock anything, or authorize implementation, production, migration or delivery action.
- It does not reduce, omit, defer, simplify or reclassify any approved requirement of Contracts 21, 22, 20, 17 or Build Plan §7/§10.1.
