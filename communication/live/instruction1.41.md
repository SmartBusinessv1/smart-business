# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-IMPL-1 — CHECKPOINT RECORD AND STAGE 3 VERIFICATION AUTHORIZATION

**Instruction ID:** instruction1.41  
**Mission:** SB-P-1.11-IMPL-1 — Initial Phase 1 Catalog Backend Implementation  
**Status:** ACTIVE  
**Authorized By:** Mission Control  
**Implementation Room:** Claude Code  
**Repository:** `SmartBusinessv1/smart-business`  
**Production Mutation:** PROHIBITED  
**Lovable Work:** NOT AUTHORIZED  

---

# 1. Purpose

This instruction does two things:

1. records the Stage 0, Stage 1, and Stage 2 communications previously exchanged between Mission Control and Claude Code outside the repository; and
2. authorizes the controlled Stage 3 non-production database verification mission, subject to two explicit prerequisite confirmations.

This file is the repository record for those checkpoint dispositions.

---

# 2. Binding Authority

Execute according to:

- `communication/live/instruction1.40.md`;
- `communication/live/report1.37.md`;
- the regenerated corrected executable engineering contract, where not overridden by `report1.37.md`;
- this checkpoint record and Stage 3 authorization.

No Product Truth, Founder decision, table boundary, function boundary, or permission boundary is changed by this instruction.

---

# 3. Recorded Checkpoint History

## 3.1 Stage 0 — Repository and Environment Verification

Claude Code reported and Mission Control accepted:

- PR #112 merged into `main` at merge commit `843f04e548f5dda174583a94d270b52a1a82f95e`;
- local `main` synchronized to that commit;
- clean working tree before branching;
- implementation branch created as `mission/SB-P-1.11-IMPL-1-initial-phase1-catalog`;
- twelve existing migrations matched between repository and production applied-migration history;
- existing live schema contained six pre-catalog tables;
- no catalog tables, catalog roles, or conflicting catalog objects existed;
- production was inspected read-only only;
- TanStack/Vite repair remained excluded;
- broad default privileges from `20260727000000_reconcile_default_grants.sql` were identified as requiring object-specific revocation for all new catalog objects;
- the dedicated test project `drravyyauixltoihzmwo` was identified as the intended non-production verification target, but remained paused and untouched.

Mission Control disposition:

- Stage 0 accepted;
- Stage 1 authorized;
- object-specific revocation required;
- no global default-privilege modification authorized;
- test-project reactivation not yet authorized at that checkpoint;
- production mutation prohibited.

## 3.2 Stage 1 — Schema and Immutable Foundations

Claude Code reported:

- local commit `318c1fb` on the mission branch;
- migration `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`;
- verification script `supabase/verification/sb-p-1-11-impl-1-stage1-privilege-check.sql`;
- exactly eleven initial Phase 1 catalog tables;
- exactly seven `NOLOGIN` executor roles;
- exactly four fixed result composites;
- no `catalog_file_references`;
- no `image_ref`;
- internal helpers in non-exposed `catalog_internal` schema;
- object-specific revocation from `PUBLIC`, `anon`, and `authenticated` after object creation;
- immutable event foundations;
- D-068 open-preview uniqueness and immutable-token safeguards;
- owner/dashboard provenance enforced by constraints;
- `recorded_at` used for selling-price events;
- closed audit allowlists and cost-adjacent-key rejection;
- no database application.

Mission Control accepted Stage 1 subject to one precision correction:

- remove any `FOR ALL` RLS policy on `catalog_write_idempotency_keys`;
- replace it with separate `FOR SELECT` and `FOR INSERT` policies;
- no UPDATE policy;
- no DELETE policy;
- only the six write executors may INSERT;
- `catalog_read_executor` may SELECT only as required for command 16;
- no direct `authenticated`, `anon`, or `PUBLIC` table policy.

Stage 2 was authorized only after this patch.

## 3.3 Stage 2 — Exact Nineteen Public Command Functions

Claude Code reported:

- local commit `c0ae904` on the mission branch;
- migration `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`;
- exactly nineteen public functions, no addition or omission;
- exact executor mapping from `report1.37.md`;
- three internal helper functions supporting fingerprinting and JSON construction;
- no twentieth public function;
- no twelfth table;
- no database application;
- no frontend, dependency, or Vite changes.

Claude Code also reported self-review corrections for:

- enum-to-text composite coercion;
- inconsistent lock ordering that could deadlock preview and confirmation flows;
- silent selling-price mutation without a corresponding selling-price event;
- service-role treatment aligned with the Stage 1 precedent.

Mission Control disposition:

- Stage 2 provisionally accepted;
- Stage 3 gated on two explicit prerequisite confirmations;
- production mutation remained prohibited.

---

# 4. Mandatory Prerequisite Confirmations

Before any Stage 3 database activity, Claude Code must add a clear written confirmation to its next report covering both items below.

## 4.1 Idempotency RLS Patch Confirmation

Confirm that the Stage 1 migration now contains:

- no `FOR ALL` policy on `catalog_write_idempotency_keys`;
- separate `FOR SELECT` and `FOR INSERT` policies;
- no UPDATE policy;
- no DELETE policy;
- INSERT authority only for the six write-command executor roles;
- SELECT authority only for the roles that require terminal-result lookup, including `catalog_read_executor` for command 16;
- no direct `authenticated`, `anon`, or `PUBLIC` table policy.

State the commit that contains this correction.

Also confirm that the migration still creates exactly:

- eleven initial Phase 1 tables;
- seven `NOLOGIN` executor roles.

## 4.2 Service-Role Boundary Confirmation

Confirm that leaving `service_role` privileges untouched is deliberate and limited to the existing Supabase platform boundary.

Stage 3 evidence must prove:

- no executor role belongs to `service_role`;
- no application user can obtain or use the service-role credential;
- `PUBLIC` and `anon` cannot execute any of the nineteen RPCs;
- `authenticated` can execute only the nineteen approved public RPCs;
- direct authenticated catalog-table access remains limited to the exact approved category columns;
- service-role capability does not weaken the Owner-only public application contract.

---

# 5. Stage 3 Authorization

After both prerequisite confirmations are provided, Claude Code is authorized to reactivate and use only the existing dedicated non-production Supabase project:

`drravyyauixltoihzmwo`

Purpose:

`SB-P-1.11-IMPL-1 Stage 3 non-production verification only`

Claude Code may:

1. confirm project identity before mutation;
2. capture the pre-migration schema, migration, privilege, and advisor baseline;
3. reactivate the paused test project only as necessary for this verification;
4. apply repository migrations in order to the test project only;
5. run Stage 1 and Stage 2 verification scripts;
6. test the exact eleven-table boundary;
7. test the exact nineteen-function boundary;
8. test the seven-role ownership, membership, and grants;
9. test RLS and Owner-only authorization;
10. test command-only writes;
11. test category-column read exposure;
12. test physical reference-cost omission from general product reads and audit payloads;
13. test D-068 same-actor, preview ownership, expiry, consumption, stale-state, fingerprint, and concurrency behavior;
14. test terminal idempotency, duplicate request handling, and advisory-lock concurrency;
15. test deterministic search, cursor validation, pagination stability, and tenant isolation;
16. test normalization regression vectors;
17. test archived identity reservation and lifecycle behavior;
18. run Supabase security and performance advisors;
19. record all failures, corrections, and reruns;
20. capture the final test-project state and evidence.

---

# 6. Explicit Prohibitions

Claude Code must not:

- apply any migration to production project `gysgzasfcjvtrgaigfyn`;
- use any database other than `drravyyauixltoihzmwo` for Stage 3;
- alter production data, schema, roles, grants, settings, or advisors;
- introduce a twentieth public function;
- introduce a twelfth Phase 1 table;
- alter Product Truth;
- alter the accepted Owner-only authority model;
- change global or repository-wide default privileges without separate authorization;
- repair TanStack/Vite;
- modify frontend dependencies;
- perform Lovable work;
- publish or deploy;
- self-approve or self-merge;
- proceed to production after successful test verification.

If the test project identity cannot be conclusively confirmed, stop before mutation.

If applying the migration requires changing the accepted architecture, stop and report.

---

# 7. Required Stage 3 Completion Report

Claude Code must produce a repository-backed completion report before proceeding further.

Preferred path:

`communication/live/report1.41.md`

The report must include:

- both prerequisite confirmations;
- branch and local commit evidence;
- test-project reactivation evidence;
- confirmed project reference and organization;
- pre-migration baseline;
- applied migration inventory;
- exact eleven-table inventory;
- exact nineteen-function inventory;
- seven-role ownership, membership, and grant evidence;
- RLS evidence;
- Owner-only authorization evidence;
- command-only-write evidence;
- category-column exposure evidence;
- service-role boundary evidence;
- reference-cost physical omission evidence;
- D-068 lifecycle and concurrency evidence;
- idempotency and advisory-lock evidence;
- deterministic search and cursor evidence;
- normalization regression results;
- security advisor results;
- performance advisor results;
- defects found;
- corrections made;
- rerun results;
- final test-project state;
- confirmation that production remained untouched;
- confirmation that excluded scope was not introduced;
- next logical step.

Do not push, open a PR, merge, publish, deploy, or proceed beyond Stage 3 unless the controlling mission instruction explicitly requires it.

---

# 8. Current Mission State

```text
Stage 0: ACCEPTED
Stage 1: ACCEPTED SUBJECT TO RECORDED RLS PATCH CONFIRMATION
Stage 2: PROVISIONALLY ACCEPTED
Stage 3: AUTHORIZED AFTER BOTH PREREQUISITE CONFIRMATIONS
Test project drravyyauixltoihzmwo: AUTHORIZED FOR STAGE 3 ONLY
Production project gysgzasfcjvtrgaigfyn: PROHIBITED
Lovable frontend work: NOT AUTHORIZED
Production migration or deployment: NOT AUTHORIZED
```

---

# 9. Next Logical Step

Claude Code must first confirm the idempotency RLS patch and service-role boundary in writing. After those confirmations, it may reactivate `drravyyauixltoihzmwo` and execute Stage 3 verification only.