# SB-P-1.12 — Stage 2 Institutional Learning Intake Record

**Status statement (Source 18 §3.1, verbatim, mandatory):** `Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`

**Baseline:** `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`, 2026-09-22.

---

## 1. Phase 1 institutional-memory guide

- **Path:** `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md`
- **Blob SHA:** `3da3d6d3f9b7fbd89de028ca0191d99484049ba9` — unchanged from the Stage 1 intake baseline, re-verified at this baseline.
- **Sections applied to this Truth Pack:** §2 Authority model (governs the escalation posture throughout this document); §5 Current future-build sequence (the source for the FCTM's `ASSIGNED TO LATER MISSION` split-assignment reasoning); §6.2 Product & Price Master / Inventory / Transactions architecture (the source for the current Catalog↔Inventory separation Delta baseline); §8 Evidence doctrine (governs why no row above is marked `ALREADY DEMONSTRATED` from CI or file presence alone); §9 Security and permission guardrails (directly informs the `anon`-grant Delta finding, §3 of `06-stage2-delta-evidence.md`); §13 UX anti-drift guardrail (informs why dashboard/onboarding acceptance scenarios stay `ASSIGNED TO LATER MISSION` rather than claimed complete from backend work alone); §17 Unresolved Founder decision queue (cross-checked against Build Plan §15, same nine items, none critical-path for this mission); §18 Mission-start checklist (answered below).
- **Stale statements found (Delta):** none. Every section applied above remained consistent with current repository state as independently checked in `06-stage2-delta-evidence.md`.

## 2. Mission-start checklist (§18), answered by citation to this Truth Pack

1. **What exact contracts does this mission advance?** Contracts 21, 22, 20, 17 (Build Plan §9), plus a limited opening of Contract 7 (MC-03/MC-04) and Build Plan §7/§10.1. Full detail: `03-stage2-populated-fctm.md`.
2. **What current Founder/Product Truth controls this behavior?** The four primary contracts and Build Plan §7/§10.1 at the blob SHAs recorded in `04-stage2-obligation-inventory.md` §1; the Global Product Completion View register rows (Stage 1 `03-stage1-fctm-open.md` §6, unchanged).
3. **What UX anchors apply?** The two Founder-reserved runtime scenarios (Bounded delegation; Revocation invalidates stale action), preserved verbatim in Stage 1's FCTM opening record and re-cited throughout the FCTM above.
4. **What is already implemented and proven?** Nothing specific to Contracts 21's authority model or Contract 20 §16/Contract 17 §13-14's permission surfaces. Existing precedent is owner-only RLS isolation, Supabase session authentication, and SB-P-1.10/1.11's Catalog/Inventory persistence and idempotency patterns — all cited as `PARTIAL` evidence in the FCTM, never `ALREADY DEMONSTRATED` for this mission's own rows. Detail: `06-stage2-delta-evidence.md` §1.
5. **What is historical only?** The three-vs-ten-screen onboarding layout debate, historical trial-policy conflict, and superseded `06:00` Daily Intelligence timing (Contract 20 §24) — none touch SB-P-1.12's own `IN SCOPE` rows.
6. **What repository/environment/runtime is authoritative for this step?** `origin/main` at this baseline for source text; `supabase/migrations/**` as files (not executed state) for schema Delta; `docs/migration/README.md` for migration-execution status; live GitHub branch-protection API for CI-requirement status. No production/test Supabase project was probed.
7. **What permissions/security boundaries are involved?** The entire Contract 21 authority model; the residual `anon` grant on `businesses`/`transactions`/`transaction_correction_events` (critical, unverified-in-production finding, `06-stage2-delta-evidence.md` §3).
8. **What success and denial/error scenarios prove the behavior?** The 60 acceptance scenarios in the FCTM, most centrally 21-§24-3/4/8 (Manager delegation, Employee scope, revocation-blocks-commit) and their dashboard-surface counterparts 17-§22-2/3/9.
9. **What shared foundations must be reused?** Contract 22 §5/§6 (Identity, Permission/Isolation foundations) — this mission builds them; later missions reuse what this mission produces (Build Plan §11: "1.12 Authority/Identity underpins all later role/permission behavior").
10. **What remains outside this mission but still committed?** 78 `ASSIGNED TO LATER MISSION` FCTM rows, each naming its owning mission — none reclassified to `BUILD LATER`.
11. **What requires Founder or Mission Control decision?** Nothing on this mission's critical path — see Part 4 (`06-stage2-delta-evidence.md` §4) for the full T1–T8 screen and the two ambiguous-assignment flags routed to Mission Control (not the Founder).
12. **Who builds, who verifies, who accepts?** Builder: not yet authorized (Stage 15 remains far downstream). Verifier: Codex intended for Stage 19 (MC-02), not yet appointed. Acceptance: Mission Control, with Founder authority where required (Source 18 §4.1).

**If these cannot be answered without guessing, stop and reconcile first** (§18's own closing instruction): none of the twelve answers above required guessing; each cites a specific Truth Pack section.

## 3. OLE promotion dispositions

All 17 records inventoried at the Stage 1 baseline remain the complete set at this Stage 2 baseline — re-verified: `organizational-learning/promotions/**` still totals 18 files (17 promotions + README), same filenames, no addition or supersession since Stage 1. All 17 carry `resulting_maturity: "VALIDATED"` and `promotion_scope: "MISSION_SCOPED"` — per Source 18 §3.1 item 4, `MISSION_SCOPED` is an applicability screen, not a universal rule; an `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` disposition below means the *governing protocol text* already embodies the lesson, not that the promotion record itself grants SB-P-1.12 new authority.

### `SB-GOV-IV-1.0/`

| Promotion | Disposition | Reason |
|---|---|---|
| `promotion-01-lifecycle-authority-operating-method-separation` | `INFORMATIONAL` | A governance-authoring lesson (keep Source 18 lean, put operating mechanics in a subordinate protocol) — informs how governance documents are *written*, not how SB-P-1.12 itself should behave |
| `promotion-02-actor-flexible-verifier-without-weakening-mandatory-gate` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | This is Source 18 §4.9's actor-flexible Independent Verification Actor model, already the active rule this Truth Pack's verification-plan seed (Stage 1 §8) relies on |
| `promotion-03-risk-triggered-verification-budget-classification` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | This is IV Protocol §4's `Codex Required`/`Spot Check`/`Not Required` classification, already applied to seed SB-P-1.12's `Codex Required` verifier classification (Stage 1 §8) |
| `promotion-04-evidence-classes-prevent-redundant-reexecution` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | IV Protocol §6's Evidence Classes A/B/C, already active and cited in the same seed |
| `promotion-05-finding-scoped-reverification-with-named-escalation-triggers` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | Source 18 Stage 20 / IV Protocol §9's finding-scoped re-verification default, already active governance (not yet exercised by this mission, which has no correction cycle) |

### `SB-OPS-CI-ARCHITECTURE-1.0/`

| Promotion | Disposition | Reason |
|---|---|---|
| `promotion-01-two-tier-ci-architecture` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | The Fast Gate (`build-assurance.yml`) + selective Full Assurance (`full-assurance.yml`) architecture is the live CI this mission's own Stage 1/2 pushes were checked against (run IDs cited throughout) |
| `promotion-02-exact-run-level-closure-evidence` | `APPLIED` | This Truth Pack and the Stage 1 preparation/correction reports cite exact CI run IDs (e.g. `35700832165`, `35706191745`) rather than "CI passed," directly applying this practice |
| `promotion-03-explicit-followup-retention` | `INFORMATIONAL` | A validated *observation* about a documentary inconsistency in another mission's closure record — no action item transfers to SB-P-1.12 |
| `promotion-04-explicit-closure-scope-boundary` | `INFORMATIONAL` | Relevant to how SB-P-1.12's own eventual closure record should disclaim scope (Stage 24, far downstream); nothing to apply at Stage 2 |

### `SB-ORG-LEARNING-1.1/`

| Promotion | Disposition | Reason |
|---|---|---|
| `promotion-01-narrow-finding-scoped-correction-cycle` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | Directly practiced in this mission's own MC-02/MC-03/MC-04 narrow-correction cycles on PR #622 (Stage 1) |
| `promotion-02-fail-closed-filesystem-ancestry` | `NOT APPLICABLE` | A filesystem-tooling lesson (directory-ancestry validation) unrelated to SB-P-1.12's authority/permission product domain |
| `promotion-03-windows-linux-lstat-error-code-divergence` | `NOT APPLICABLE` | A Windows/Linux CI-tooling lesson unrelated to this mission's product scope |
| `promotion-04-direct-api-ci-confirmation-and-capacity-resumption` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | This Truth Pack's own CI verification used `gh api`/`gh run list` direct confirmation, not watch-command exit codes, consistent with this lesson |
| `promotion-05-duplicate-envelope-identity-belongs-in-planner` | `NOT APPLICABLE` | An OLE-pipeline architecture lesson about candidate-generation planning, unrelated to SB-P-1.12 |
| `promotion-06-deterministic-proof-before-automation` | `INFORMATIONAL` | An OLE-automation acceptance lesson; loosely analogous in spirit to this Truth Pack's preference for file-level evidence over assumed state, but not a directly actionable instruction for this mission |
| `promotion-07-candidate-generation-versus-promotion-authority-separation` | `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` | This is the structural principle already governing how these very 17 promotions were reviewed here (candidate generation vs. Mission Control/Founder promotion decision, kept separate) |
| `promotion-08-manual-ole-trigger-dependency-risk` | `INFORMATIONAL` | A risk record about OLE's manual-trigger dependency, relevant to SB-P-1.12's own eventual closure handoff (Stage 24) but not actionable now |

**Conflicts found:** none. No promotion disagrees with a governing source or with another promotion.

**Summary (17 total):** 8 `ALREADY EMBEDDED IN ACTIVE GOVERNANCE` (4 IV Protocol/Source 18 mechanics + 1 CI architecture + 3 correction-cycle/API-confirmation/candidate-separation practices, all already followed in this session's own work), 1 `APPLIED` (CI run-ID citation practice), 5 `INFORMATIONAL`, 3 `NOT APPLICABLE`. None grants new authority; none is treated as binding beyond its `MISSION_SCOPED` origin.
