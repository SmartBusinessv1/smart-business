# SMART BUSINESS MISSION CONTROL

# Instruction 1.1

**Mission ID:** SB-P-1.11-READINESS-1.1

**Mission Name:** SB-P-1.11 Engineering Readiness Review — Claude Code

**From:** Mission Control

**To:** Claude Code

**Status:** ACTIVE AFTER CODEX REPORT MERGE

**Date:** 2026-08-03

---

# Mission Objective

Perform an independent engineering-readiness review for SB-P-1.11 — Product Catalog & Pricing after the Codex readiness report has been completed, reviewed, and merged to `main`.

Determine whether the architecture, repository, test strategy, Lovable implementation environment, Supabase environment separation, and Claude Code operating capability are ready for the next governed stage.

This is a read-only review. No implementation is authorized.

Reply only in:

`communication/live/report1.1.md`

---

# Activation Condition

Do not execute this instruction until all of the following are true:

1. `communication/live/report.md` contains the completed Codex readiness assessment.
2. The Codex report pull request has been reviewed and merged to `main`.
3. Your local `main` is fast-forward synchronized with `origin/main`.
4. Mission Control or the Founder has activated Claude Code for this continuation review.

If any condition is missing, stop and report the missing activation condition without performing the assessment.

---

# Context

Mission Control's preliminary platform review found:

1. SB-P-1.10 is recorded as formally completed and accepted.
2. Lovable is published and its observed latest edit matched the GitHub baseline at readiness-instruction issuance.
3. The Lovable-managed production database contains the current business, transaction, correction-event, and inventory foundation tables with RLS enabled.
4. The Supabase connector currently exposes a dedicated test-only project rather than the Lovable-managed production backend.
5. The test Supabase project is healthy and has no security-advisor findings, but it has performance-advisor observations involving foreign-key indexes, RLS initialization plans, unused indexes, and Auth connection allocation.
6. No standalone approved SB-P-1.11 Blueprint, EIS, Engineering Contract, acceptance package, Lovable prompt, or migration package was found during the preliminary search.
7. The repository reference currently identifies SB-P-1.11 as `Product Catalog & Pricing` and as a future mission depending on the Inventory Foundation.

The Codex report is the preceding actor's evidence, not automatic authority. Verify its conclusions independently.

---

# Execute According To

Read and apply, in authority order and only as relevant:

1. `merge/active/README.md`
2. `merge/active/00_Lighthouse_Constitution.md`
3. `merge/active/01_Smart_Business_Master_System_Manifesto.md`
4. `merge/active/11_Smart_Business_Product_Truth_Map.md`
5. `merge/active/12_Product_Execution_and_Release_Framework.md`
6. `merge/active/17_AI_Operations_Manual.md`
7. `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
8. `merge/active/02_Supabase_Architecture_Framework.md`
9. `merge/active/03_Lovable_Build_Framework.md`
10. `merge/active/09_Master_Roadmap_Command.md`
11. `AGENTS.md`
12. `CLAUDE.md`
13. `communication/AI_Communication_and_Handover_Protocol.md`
14. `communication/README.md`
15. `mission-control/mission_memory.md`
16. `communication/live/instruction.md`
17. `communication/live/report.md`
18. `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md`
19. `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md`
20. `docs/implementation/SB-P-1.10/engineering-contract.md`
21. `docs/implementation/SB-P-1.10/completion-report.md`
22. Relevant current code, migrations, generated types, tests, workflows, implementation evidence, and runtime records.

Do not use archived, superseded, draft, or historical migration material as current execution authority.

---

# Scope

You are authorized to:

1. Inspect the current repository and Git history.
2. Inspect current application architecture and code relevant to Product Catalog & Pricing readiness.
3. Inspect tests, generated types, migrations, RLS patterns, route conventions, and data-access layers.
4. Review the Codex report and independently confirm or dispute every load-bearing conclusion.
5. Assess production-versus-test Supabase separation and the safe future migration path.
6. Assess Lovable readiness from repository evidence and any read-only platform access available to you.
7. Assess Claude Code operational readiness, tooling, repository access, test capability, branch and pull-request capability, and blockers.
8. Produce the required report only.

---

# Required Work

## 1. Validate the Codex Readiness Report

For each major Codex conclusion, classify it as:

- `CONFIRMED`
- `PARTIALLY CONFIRMED`
- `NOT CONFIRMED`
- `DISPUTED`

Provide repository evidence and explain every difference.

## 2. Review Architecture Readiness

Assess whether the current architecture can safely support a future Product Catalog & Pricing mission without redesigning the Inventory Foundation.

Review at minimum:

- identity boundary between a catalog product and an inventory item;
- one-to-one, one-to-many, or optional relationships that require product-governance decisions;
- base stock unit versus selling unit;
- packaging and unit conversion;
- sale price, purchase price, price history, and effective dates;
- tax classification and rounding implications;
- SKU, barcode, merchant naming, and uniqueness scope;
- active, archived, and discontinued states;
- business ownership and multi-business isolation;
- permission-scoped employee access;
- transaction and inventory linkage;
- append-only or correction requirements for price-sensitive records;
- migration compatibility with existing inventory data;
- generated Supabase types and data-access boundaries;
- route, component, and shared-workspace conventions.

Do not decide the product model. Identify decisions that must be made before engineering specification.

## 3. Review Database and Migration Readiness

Determine:

- whether current production and test schemas are sufficiently aligned for specification work;
- whether the production Lovable-managed database has an approved controlled migration path for the future mission;
- whether the connected test Supabase project can serve as a valid verification environment;
- what schema-comparison evidence is required before implementation;
- what rollback, forward-fix, seed, and data-migration rules will be required;
- whether current performance-advisor findings should be corrected before, during, or after SB-P-1.11;
- whether any current warning is an implementation blocker.

Do not execute SQL or create migrations.

## 4. Review Test and Release Readiness

Identify the minimum governed verification package required before SB-P-1.11 implementation can be accepted, including:

- unit tests;
- database contract tests;
- RLS and multi-owner isolation tests;
- pricing precision and rounding tests;
- inventory-linking tests;
- idempotency and concurrency tests where relevant;
- generated-type validation;
- route and UI tests;
- migration verification;
- production runtime verification;
- rollback or forward-fix evidence.

Assess whether the existing repository test and CI structure can support these obligations.

## 5. Assess Lovable and GitHub Engineering Readiness

Report whether:

- Lovable is synchronized with current `main`;
- the application is in a stable published state;
- the Lovable project knowledge is sufficient and current for a governed mission;
- the repository and branch-protection workflow can support implementation branches and reviewed merges;
- required CI and quality gates are available;
- any Lovable credit, connector, publication, or environment limitation remains unknown or blocking.

Clearly separate confirmed platform evidence from repository inference.

## 6. Assess Claude Code Readiness

Verify and report:

- repository read access;
- shell and Git access;
- authentication and push access;
- mission-branch creation capability;
- exact-file staging capability;
- pull-request creation capability;
- ability to run current tests, type checks, build checks, and Markdown Quality Gate;
- ability to inspect migrations and generated types;
- ability to produce engineering artifacts without changing product truth;
- unavailable tools, permissions, or environments;
- human actions required before implementation.

## 7. Give a Stage-by-Stage Decision

For each stage, classify the current state as exactly one of:

- `READY`
- `READY WITH CONDITIONS`
- `NOT READY`

Stages:

1. Product Blueprint preparation
2. Engineering Implementation Specification preparation
3. Engineering Contract and acceptance-package preparation
4. Application and database implementation
5. Test-environment verification
6. Production deployment

For every classification, provide exact evidence and conditions.

## 8. Recommend the Next Controlled Mission

Recommend one next mission only.

State:

- proposed Mission ID and name;
- objective;
- correct first owner or specialist room;
- required authoritative inputs;
- expected deliverables;
- explicit exclusions;
- stop conditions.

Do not authorize the mission yourself.

---

# Constraints

You must not:

- modify application code;
- modify tests;
- modify canonical sources;
- create or modify migrations;
- execute SQL;
- access or modify production data;
- change Supabase configuration;
- change Lovable configuration or publish state;
- deploy application changes or Edge Functions;
- modify environment variables or secrets;
- change GitHub Actions or branch protection;
- create the SB-P-1.11 Blueprint, EIS, contract, acceptance package, Lovable prompt, or implementation;
- infer product decisions that have not been approved;
- treat the test Supabase project as production;
- expand beyond readiness review.

The only authorized repository content change is:

`communication/live/report1.1.md`

---

# Git and Reporting Authorization

After activation and after the Codex report is merged to `main`, execute from current `origin/main` using:

`mission/SB-P-1.11-readiness-claude`

You may create only:

`communication/live/report1.1.md`

Approved commit message:

`Report Claude Code readiness for SB-P-1.11`

Push only the mission branch and open a pull request targeting `main`.

Do not merge your own pull request.

---

# Deliverables

Produce one complete report in:

`communication/live/report1.1.md`

The report must include:

1. Executive engineering-readiness summary
2. Codex conclusion-validation matrix
3. Architecture-readiness findings
4. Database and migration-readiness findings
5. Test and release-readiness findings
6. Lovable and GitHub readiness findings
7. Claude Code capability and readiness statement
8. Stage-by-stage readiness table
9. Risks, unknowns, and blockers
10. Required Founder or Mission Control actions
11. One recommended next controlled mission
12. Commit, branch, pull-request, and validation evidence

---

# Completion Status

Conclude with exactly one of:

`SB-P-1.11 CLAUDE CODE READINESS REVIEW: READY`

`SB-P-1.11 CLAUDE CODE READINESS REVIEW: READY WITH CONDITIONS`

`SB-P-1.11 CLAUDE CODE READINESS REVIEW: NOT READY`

Completion means the report is committed to the authorized branch, pushed, submitted through a pull request, and awaiting Mission Control review.
