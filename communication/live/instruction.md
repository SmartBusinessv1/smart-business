# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `SB-P-1.10 + SB-P-1.11 Production Release & Runtime Activation — Gate 1 Release Readiness Assessment`

**From:** Mission Control

**To:** `Claude Code — Repository-Capable Engineering Operator`

**Status:** `ACTIVE — READ-ONLY RELEASE READINESS GATE`

**Date:** `2026-08-30`

---

## Mission Objective

Open the fresh governed communication cycle for the combined production release/runtime-activation path for the already accepted capabilities from:

- `SB-P-1.10 — Inventory Foundation`; and
- `SB-P-1.11 — Product Catalog & Pricing`.

Gate 1 is a **read-only release-readiness assessment only**.

Determine whether the current canonical repository, production environment, migrations, permissions, external parser infrastructure, recovery posture, support/legal posture, and outstanding acceptance follow-ups are sufficiently verified to advance to a separately authorized production release/runtime-activation execution gate.

This instruction does **not** authorize deployment, publication, parser activation, feature exposure, database mutation, infrastructure mutation, migration execution, secret changes, or production write testing.

## Governing Release Framework

Execute according to:

- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/02_Supabase_Architecture_Framework.md`
- `merge/active/03_Lovable_Build_Framework.md`
- `merge/active/04_API_WhatsApp_OpenAI_Framework.md`
- `merge/active/05_AI_Behaviour_and_Model_Training_Framework.md`
- `merge/active/09_Master_Roadmap_Command.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- current accepted SB-P-1.10 and SB-P-1.11 implementation, evidence, acceptance, closure, archive, and Mission Control records.

For this workstream, **Source 12 is the primary release-governance framework**. Source 18 lifecycle stages for SB-P-1.10 and SB-P-1.11 are already closed and must not be reopened.

Source 12 requires the release path to distinguish implementation completion, feature acceptance, pilot readiness where applicable, the release checklist, Mission Control recommendation, Founder approval, and authorized deployment. Deployment capability alone is not release authority.

## Canonical Intake Baseline

At instruction preparation, canonical `main` is:

`3d2d3a44e67d82755ca79ebf37e6ae408b1e2329`

The execution actor must freshly verify `main` at mission intake and report any later movement before relying on this baseline.

Known accepted-state references to verify, not merely assume:

- `docs/implementation/SB-P-1.10/completion-report.md` records `SB-P-1.10 — COMPLETED — FORMALLY ACCEPTED`.
- `communication/missions/SB-P-1.11/mission-control/24-documentation-closure.md` and associated mission records close SB-P-1.11 as `COMPLETED — FORMALLY ACCEPTED`.
- `communication/archive/SB-P-1.11/` is the closed SB-P-1.11 communication archive.
- The full 393-file SB-P-1.11 forensic source snapshot remains retained through Phase 1 and is not in scope for modification.

## Required Gate 1 Assessment

### 1. Canonical release baseline

Verify and record:

- current canonical `main` commit;
- open PRs or branches that could materially alter the release baseline;
- exact application commit intended for eventual production deployment;
- whether SB-P-1.10 and SB-P-1.11 accepted code and migration artifacts are both present in that baseline;
- whether any accepted implementation exists only in a non-canonical Lovable or derivative repository state.

Do not perform code transfer or reconciliation in this gate. Report any mismatch as a blocker or required corrective action.

### 2. Accepted-mission continuity

Verify the final accepted/closed status and material unresolved follow-ups for both product missions.

For SB-P-1.11, explicitly carry forward:

- `F23-01` — live multi-business/cross-tenant RLS runtime probe;
- `F23-02` — live concurrent-retry / actor-mismatch idempotency probe;
- `F23-03` — parameter-signature parity verification for the remaining 16 of 19 Catalog commands;
- `F23-04` — live `smartbusiness.teamlips.com` browser/HTTP verification after authorized deployment;
- `F23-05` — exhaustive GC-1 historical provenance re-derivation.

Classify which are release-gating, post-deployment validation, pilot-readiness, or documentation-only. Do not silently discard any accepted follow-up.

### 3. Production environment identity

Resolve the **current actual production identity from evidence**. Historical records contain environment-identity changes and older project references; do not trust an old label merely because it appears in an accepted historical report.

Verify, as far as available tooling permits:

- production Supabase project identity/ref;
- isolated test/staging project identity/ref;
- production application/Lovable project identity and publication state;
- production domain routing for `smartbusiness.teamlips.com`;
- which environment currently serves the accepted application;
- whether any environment naming or ownership ambiguity remains.

If direct external-platform verification is not available to Claude Code, identify the exact specialist/platform evidence required rather than guessing.

### 4. Production migration parity

Build the exact migration/parity assessment for both accepted missions.

For SB-P-1.10, verify whether all accepted inventory schema/functions/security corrections — including later idempotency and function-setting corrections — are present in the **actual current production database**, not merely repository history or an old Lovable-managed backend.

For SB-P-1.11, verify the accepted GC-40 production migration state, including the four canonical migration versions and the resolved migration-history bookkeeping incident.

Do not execute, repair, reconcile, or re-run any migration in Gate 1.

If production parity cannot be proven read-only, identify the exact bounded verification or corrective gate required.

### 5. Authentication, permissions, RLS, and isolation readiness

Assess release readiness for:

- authentication and protected routes;
- business/merchant isolation;
- Owner-only or permission-scoped Catalog/Inventory actions;
- employee financial-intelligence restrictions;
- service-role or privileged-path boundaries;
- current RLS state for all SB-P-1.10 and SB-P-1.11 production tables;
- relevant storage policies and parser-support tables/functions.

Map `F23-01` and any SB-P-1.10 isolation evidence into the release verification plan.

No production write probe is authorized in Gate 1.

### 6. Parser and bulk-import activation readiness

Assess the current non-production and production-readiness state of the SB-P-1.11 parser/bulk-import path.

Verify or identify evidence required for:

- AWS Lambda parser deployment package/version;
- S3 buckets/prefixes and access boundaries;
- IAM roles and least-privilege posture;
- AWS Roles Anywhere / certificate-chain posture where applicable;
- Cloudflare routing/configuration where applicable;
- production environment variables/configuration;
- parser upload leases/preview guards and related database support;
- failure/retry/idempotency controls;
- logging/monitoring;
- rollback/deactivation path;
- merchant feature exposure/feature gating.

The preferred release posture is **feature-gated merchant bulk import**, not automatic universal exposure. Gate 1 must recommend the safest bounded activation sequence without activating anything.

### 7. Source 12 release checklist assessment

For every Source 12 §65 checklist item, classify:

- `PASS — EVIDENCE VERIFIED`
- `READY — REQUIRES EXECUTION-GATE VERIFICATION`
- `FOLLOW-UP — NON-BLOCKING`
- `BLOCKED`
- `NOT APPLICABLE`

Cover at minimum:

- approved scope;
- branch and commit;
- target environment;
- acceptance evidence;
- pilot evidence where required;
- database migration status;
- backup readiness;
- rollback path;
- secrets/configuration;
- authentication/permissions;
- RLS/merchant isolation;
- monitoring/logging;
- support readiness;
- legal/policy readiness;
- known limitations;
- release owner;
- recovery owner;
- Founder approval.

Do **not** mark Founder approval PASS in Gate 1 unless explicit release approval for this exact release scope already exists in canonical evidence.

### 8. Pilot-readiness applicability

Source 12 states pilot readiness is required where applicable and separately defines product-level pilot-readiness criteria.

Determine whether this combined capability release should be treated as:

- a phased production feature release into an already-live product;
- a controlled pilot release;
- or another Source 12 release type.

Explain what Part 3 evidence is already reusable, what must be revalidated for these capabilities, and what can legitimately remain outside this release scope.

Do not infer pilot approval.

### 9. Backup, rollback, and incident readiness

Assess and document the required recovery posture before any execution authorization, including:

- database backup/recovery readiness;
- migration rollback or forward-recovery path;
- application rollback target;
- parser feature kill switch/deactivation path;
- infrastructure rollback/reversion path;
- evidence/log preservation;
- explicit release operator and recovery owner requirements.

### 10. Post-release validation plan

Prepare the exact safe validation plan required by Source 12 §69 after any later authorized release.

It must include, where applicable:

- application availability;
- authentication;
- protected routes;
- Inventory workflow;
- Catalog/Pricing workflow;
- safe transaction integration/regression checks;
- database health;
- permissions and RLS;
- `F23-01` cross-tenant runtime isolation probe;
- `F23-02` concurrent retry / actor-mismatch probe;
- `F23-03` remaining Catalog command signature parity verification;
- `F23-04` production-domain browser/HTTP verification;
- parser/bulk-import controlled smoke test only if separately activated;
- logs/monitoring/error-rate checks;
- support-channel readiness.

Production validation must use safe controlled test data and separately authorized write probes where writes are required.

## Required Gate 1 Output

Write the complete response only to:

`communication/live/report.md`

The report must contain:

1. exact intake `main` commit;
2. release type recommendation;
3. current production/test/application environment identity assessment;
4. SB-P-1.10 production-parity assessment;
5. SB-P-1.11 GC-40 production-parity assessment;
6. permissions/RLS/security readiness;
7. parser/AWS/S3/Roles Anywhere/Cloudflare/configuration readiness;
8. Source 12 §65 release-checklist matrix;
9. mapping of all F23-01 through F23-05;
10. backup/rollback/recovery assessment;
11. post-release validation plan;
12. exact blockers and non-blocking follow-ups;
13. exact external specialist/platform evidence still required;
14. recommended next controlled gate;
15. explicit statement whether Gate 1 result is `READY FOR FOUNDER RELEASE-APPROVAL REVIEW`, `READY WITH CONDITIONS`, or `NOT READY`.

The report must distinguish repository-verified facts, directly platform-verified facts, historical accepted evidence, and unresolved claims.

## Explicitly Not Authorized

Gate 1 does not authorize:

- application deployment or Lovable publication;
- production release;
- Founder approval by inference;
- production database writes;
- migration execution, repair, push, reconciliation, or rollback;
- Supabase configuration mutation;
- AWS Lambda deployment/update;
- S3 mutation other than read-only inspection where available;
- IAM, Roles Anywhere, certificate, or policy mutation;
- Cloudflare mutation;
- secret/environment-variable mutation;
- parser or bulk-import production activation;
- merchant feature exposure;
- destructive tests;
- creation of production test business data;
- SB-P-1.10 or SB-P-1.11 Product Truth changes;
- reopening Source 18 lifecycle stages;
- starting SB-P-1.12;
- self-approval or self-merge.

## Stop Conditions

STOP and report to Mission Control if any of the following is encountered:

- production environment identity cannot be resolved sufficiently to distinguish production from test/staging;
- the accepted application baseline is not clearly traceable to canonical `main`;
- SB-P-1.10 or SB-P-1.11 production migration parity is materially uncertain;
- merchant isolation, authentication, or permissions have a critical/high unresolved finding;
- required recovery/rollback posture for a material production change is absent;
- a required verification would need a production mutation not authorized here;
- an external platform must be changed rather than inspected;
- a contradiction with Product Truth or accepted mission scope is discovered;
- release execution would require Founder approval that has not yet been explicitly recorded.

A STOP in one domain does not authorize improvisation in another.

---

**Mission Control boundary:** Gate 1 establishes release readiness evidence and the next authorization decision only. It creates no production execution authority.
