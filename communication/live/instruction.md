# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `Gate 2A-C2 — Inventory Anonymous-Privilege Hardening Production Execution`

**From:** Mission Control

**To:** `Claude Code — Repository-Capable Engineering Operator`

**Status:** `ACTIVE — NARROW PRODUCTION SECURITY CORRECTION EXECUTION`

**Date:** `2026-08-30`

---

## Context

Gate 2A identified the production Inventory anonymous-privilege posture as:

`HARDENING REQUIRED BEFORE RELEASE APPROVAL`

Gate 2A-C1 prepared and test-validated exactly one forward security migration and closed with:

`PASS — CORRECTION PREPARED AND TEST-VALIDATED — PRODUCTION EXECUTION PENDING`

The Gate 2A-C1 implementation/evidence was merged through PR #435 at canonical `main` commit:

`6a4b92f23eac7d330a02757c3d42ea948403ba91`

This instruction authorizes the next bounded action only: execute the already-reviewed, already-test-validated migration against the current production Supabase project and verify the result.

This is a corrective security action within Gate 2. It is **not** a product release, application deployment, parser activation, F23-01 execution, or Founder release approval.

## Canonical Production Identity

Authorized production Supabase project:

`gysgzasfcjvtrgaigfyn`

Current isolated test project — reference only:

`drravyyauixltoihzmwo`

Before any production mutation, independently verify that the target is exactly `gysgzasfcjvtrgaigfyn` and STOP if production/test identity is ambiguous.

## Authorized Migration — Exact File Only

The only migration authorized for production execution is:

`supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`

The executing actor must verify that the file on current canonical `main` is byte-for-byte unchanged from the human-merged Gate 2A-C1 version.

No modification to this migration is authorized in Gate 2A-C2.

If the migration needs editing, if any additional migration is pending, or if production state differs materially from the validated assumptions, STOP and report to Mission Control.

## Authorized Objective

Apply exactly the above migration to production and prove that it removes the unnecessary Inventory anonymous authority while preserving the accepted authenticated/privileged behavior and existing RLS policy state.

The intended correction is limited to:

- removing unnecessary `anon` privileges from:
  - `public.inventory_items`;
  - `public.inventory_movements`;
  - `public.inventory_movement_idempotency_keys`;
- removing unnecessary anonymous/PUBLIC EXECUTE access from the six Inventory-domain functions exactly as encoded in the reviewed migration;
- correcting `postgres`-created public-schema default privileges exactly as encoded in that migration.

Nothing else is authorized.

## Required Pre-Execution Production Evidence

Before executing the migration, capture and report the current production state for:

1. exact project identity/ref, name, region, and healthy status;
2. exact canonical `main` commit and migration file identity/hash;
3. production migration history showing the new Gate 2A-C1 migration is not yet applied;
4. dry-run output proving **exactly one** migration is pending and that it is the authorized Gate 2A-C1 migration;
5. effective table privileges for `anon`, `authenticated`, `service_role`, `catalog_link_executor`, and `PUBLIC` on the three Inventory tables;
6. function EXECUTE privileges for the six Inventory-domain functions, including the two known `PUBLIC` EXECUTE paths;
7. `postgres` public-schema default privileges for tables/functions;
8. RLS enabled/forced state and exact policy inventory for the three Inventory tables;
9. current backup/recovery readiness suitable for this production security mutation, including direct evidence that a current recoverable backup/restore capability exists. Do not infer backup readiness from plan tier alone.

If current production evidence materially differs from the Gate 2A/Gate 2A-C1 assumptions, STOP before execution.

## Production Execution Authorization

After all required pre-checks pass, Mission Control authorizes execution of **exactly one** production migration:

`20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`

Use the repository's controlled production Supabase CLI path and its existing production-confirmation safeguard.

Required discipline:

- dry-run first;
- verify exactly one pending migration;
- explicit production confirmation only for this authorized execution;
- execute once;
- do not use migration repair;
- do not re-run if migration history shows it applied;
- do not execute any other migration;
- do not improvise SQL outside the already-reviewed migration.

If execution fails partially, reports unexpected DDL/ACL behavior, or migration history becomes uncertain, STOP. Do not repair, retry, manually compensate, or broaden scope without a new Mission Control authorization.

## Required Immediate Post-Execution Verification

After successful execution, verify directly in production:

1. migration history contains the authorized Gate 2A-C1 migration exactly once;
2. `anon` has no privileges on the three Inventory tables;
3. `anon` has no unintended EXECUTE on any of the six Inventory-domain functions;
4. `PUBLIC` EXECUTE is absent from:
   - `public.inventory_items_guard()`;
   - `public.inventory_movements_reject_mutation()`;
5. `authenticated`, `service_role`, and `catalog_link_executor` effective grants remain unchanged from pre-execution evidence;
6. the `postgres` default-privilege baseline no longer grants `anon` broad table rights or function EXECUTE on future public-schema objects;
7. RLS enabled/forced state remains unchanged;
8. all nine Inventory policies remain unchanged in name, command, and role scope;
9. safe read-only runtime checks as `anon` confirm hard authorization denial on representative table/function access, without creating or mutating production business data;
10. database health remains normal after the migration.

Do not perform authenticated business workflow writes in this gate. Product/runtime regression checks that require business-data mutation belong to later authorized validation gates.

## Known Residuals Explicitly Out of Scope

Gate 2A-C1 disclosed two separate residuals. They remain **out of scope** here:

1. `supabase_admin`-created-object default privileges;
2. the same-root-cause broad grants on:
   - `businesses`;
   - `transactions`;
   - `transaction_correction_events`.

Do not modify, correct, or expand into these surfaces under Gate 2A-C2.

Their existence does not authorize scope expansion. Report any new evidence about them only as a follow-up.

## Required Repository Output

After execution, update only:

`communication/live/report.md`

No new migration should be created. No existing migration should be edited.

Submit the report through a controlled branch and PR. Do not self-merge.

## Required Report Content

The report must include:

1. exact intake `main` commit;
2. verified production project identity;
3. exact authorized migration file and file hash/identity verification;
4. pre-execution migration-history state;
5. backup/recovery evidence;
6. complete pre-execution ACL/function/default-privilege/RLS-policy evidence;
7. exact dry-run result proving only the authorized migration was pending;
8. exact production execution command path at a semantic level and execution result;
9. post-execution migration-history result;
10. post-execution ACL/function/default-privilege evidence;
11. proof that authenticated, `service_role`, and `catalog_link_executor` grants were preserved;
12. RLS/policy unchanged evidence;
13. safe `anon` read-only runtime-denial checks;
14. database-health observation;
15. explicit statement that no unrelated production mutation occurred;
16. exact residual/follow-up items still open;
17. Gate 2A-C2 final result exactly one of:
   - `PASS — PRODUCTION HARDENING APPLIED AND VERIFIED`
   - `CORRECTION REQUIRED — PRODUCTION STATE NOT VERIFIED`
   - `BLOCKED — PRODUCTION EXECUTION NOT PERFORMED`
   - `STOP — PRODUCTION EXECUTION INCIDENT`

## Explicitly Not Authorized

This instruction does not authorize:

- editing the already-reviewed migration;
- creating another migration;
- executing any migration other than `20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`;
- migration repair/reconciliation;
- manual production SQL outside read-only verification and the authorized migration execution;
- changes to `businesses`, `transactions`, or `transaction_correction_events` permissions;
- `supabase_admin` role membership/default-privilege correction;
- RLS/policy redesign;
- function-body or schema changes;
- production business-data creation or mutation;
- F23-01 execution or creation of test identities/businesses;
- application deployment/publication;
- AWS, S3, IAM, Roles Anywhere, Lambda, Cloudflare, DNS, WAF, parser, certificate, secret, or environment-variable changes;
- parser/bulk-import activation;
- merchant feature exposure;
- product release execution;
- Founder release approval by inference;
- Product Truth changes;
- reopening SB-P-1.10 or SB-P-1.11 lifecycle stages;
- starting SB-P-1.12;
- self-approval or self-merge.

## Stop Conditions

STOP before mutation if:

- production identity cannot be proven;
- canonical `main` or migration file identity is uncertain;
- more than the one authorized migration is pending;
- the authorized migration already appears applied;
- current production ACL/RLS/default-privilege state materially differs from the validated baseline;
- current recoverable backup/restore capability cannot be positively verified;
- a Critical/High security or merchant-isolation issue is discovered;
- execution would require any migration/file modification or additional SQL.

STOP after mutation if:

- execution errors or appears partial;
- migration history is ambiguous;
- expected grants/default privileges are not achieved;
- authenticated/service-role/catalog-link-executor rights drift unexpectedly;
- RLS/policy state changes unexpectedly;
- database health degrades.

A STOP authorizes no repair, retry, rollback, compensation, or scope expansion.

## Continuation Boundary

A PASS closes the Inventory `anon` hardening production-execution condition only.

It does **not** close `F23-01`, complete Gate 2, authorize Founder release approval, or authorize production release/runtime activation.

After a PASS is independently reviewed and accepted by Mission Control, the next action will be separately authorized.

---

**Mission Control boundary:** Gate 2A-C2 authorizes one exact, test-validated security migration against production and immediate verification only. No other production change is authorized.