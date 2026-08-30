# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `Gate 2A-C1 — Inventory Anonymous-Privilege Hardening Preparation & Test Validation`

**From:** Mission Control

**To:** `Claude Code — Repository-Capable Engineering Operator`

**Status:** `ACTIVE — NARROW CORRECTIVE SECURITY AUTHORIZATION — TEST-ONLY EXECUTION`

**Date:** `2026-08-30`

---

## Context

Gate 2A Security & Isolation Evidence Closure is canonical on `main` at:

`259ca4acd71b524f653e5be5ebea92361db20bcf`

The independent Security & Permissions Architecture disposition is:

`HARDENING REQUIRED BEFORE RELEASE APPROVAL`

The accepted Gate 2A report established that production `anon` currently has unnecessary broad privileges on the Inventory surface and that public-schema default privileges can reproduce broad anonymous authority on future objects.

This corrective action exists only to prepare and prove the narrow least-privilege correction before any production mutation is considered.

## Authorized Objective

Create the smallest forward-only security migration required to harden the Inventory anonymous-access posture and validate that migration in the isolated Smart Business test project only.

This instruction does **not** authorize applying the correction to production.

## Canonical Environment Identity

Production — reference only, **NO MUTATION AUTHORIZED**:

`gysgzasfcjvtrgaigfyn`

Authorized test environment for execution/validation:

`drravyyauixltoihzmwo`

Before any test execution, independently verify the target is the test project and STOP if target identity is ambiguous.

## Authorized Correction Scope

The migration may modify only security grants/default privileges necessary to address the Gate 2A finding.

At minimum, evaluate and implement the narrowest safe form of:

1. revoke unnecessary `anon` privileges on:
   - `public.inventory_items`
   - `public.inventory_movements`
   - `public.inventory_movement_idempotency_keys`
2. remove unnecessary `anon` EXECUTE rights on Inventory-domain functions/RPCs unless an explicit anonymous product use case is proven from canonical Product Truth or implementation requirements;
3. correct relevant public-schema default privileges for future tables/functions so broad anonymous rights are not automatically recreated;
4. preserve all intentional authenticated Owner behavior;
5. preserve the narrow `catalog_link_executor` access path;
6. preserve intentional `service_role` privileged behavior;
7. preserve existing RLS policies and merchant isolation unless a grant-only correction cannot safely close the condition, in which case STOP and report rather than broadening scope.

Do not change business logic, Product Truth, schemas, function bodies, RLS policy predicates, role membership, application code, or unrelated permissions.

## Required Pre-Change Evidence

Capture from the test project before applying the migration:

- exact project identity;
- effective ACLs for the three Inventory tables;
- Inventory-domain function EXECUTE privileges for `anon`;
- relevant default privileges for objects created by `postgres` and `supabase_admin`;
- current RLS enabled state and policy inventory;
- authenticated/service-role/catalog-link-executor rights required to preserve intended behavior.

## Test-Only Migration Execution Authorization

You may:

- create exactly one new forward migration under `supabase/migrations/`;
- apply that migration to `drravyyauixltoihzmwo` only;
- run read-only or safely transactional verification in the test project;
- use existing designated test data already present in the test project;
- run automated tests relevant to the affected security boundary.

You may **not** execute the migration against production.

## Required Verification After Test Execution

Prove in the test project that:

- `anon` has no unnecessary table privileges on the three Inventory tables;
- `anon` cannot read, insert, update, delete, truncate, maintain, trigger, or otherwise exercise unintended authority on those tables;
- unintended Inventory-domain RPC/function EXECUTE rights for `anon` are removed;
- default privileges no longer automatically recreate broad anonymous table/function authority for the relevant object creators;
- authenticated Owner access remains correct;
- `catalog_link_executor` remains limited to its intended narrow read path;
- `service_role` retains required privileged behavior;
- RLS remains enabled and unchanged unless explicitly proven otherwise in the diff;
- no unrelated table/function/grant/default-privilege surface changed;
- repository test suite and Markdown Quality Gate pass where applicable.

## Required Repository Scope

Expected code change is limited to:

- one new security migration under `supabase/migrations/`;
- `communication/live/report.md` for the completion report;
- narrowly necessary test/evidence files only if required by existing repository practice.

If implementation would require application code changes, Product Truth changes, RLS policy redesign, role redesign, or more than one migration, STOP and report to Mission Control.

## Required Output

Write the complete result to:

`communication/live/report.md`

The report must state:

1. exact intake `main` commit;
2. exact test-project identity used;
3. new migration filename and purpose;
4. exact SQL security changes at a semantic level;
5. pre-change privilege/default-privilege evidence;
6. test migration execution result;
7. post-change privilege/default-privilege evidence;
8. regression verification for authenticated, `catalog_link_executor`, and `service_role` paths;
9. RLS/policy unchanged confirmation;
10. repository files changed;
11. test and Markdown Quality Gate results;
12. any deviations or unresolved risks;
13. explicit confirmation that production `gysgzasfcjvtrgaigfyn` was not mutated;
14. recommended exact production execution gate if test validation passes;
15. final result exactly one of:
   - `PASS — CORRECTION PREPARED AND TEST-VALIDATED — PRODUCTION EXECUTION PENDING`
   - `CORRECTION REQUIRED`
   - `BLOCKED — SAFE NARROW CORRECTION NOT PROVEN`

## Explicitly Not Authorized

This instruction does not authorize:

- any production database mutation;
- migration push/apply/repair against `gysgzasfcjvtrgaigfyn`;
- production `GRANT`, `REVOKE`, default-privilege, policy, RLS, function, schema, or role changes;
- creation or mutation of production test data;
- application deployment/publication;
- Supabase production configuration changes;
- AWS, S3, IAM, Roles Anywhere, Lambda, Cloudflare, DNS, certificate, WAF, parser, or secret changes;
- F23-01 execution or test-identity creation;
- release approval or release execution;
- Founder approval by inference;
- reopening SB-P-1.10 or SB-P-1.11 lifecycle stages;
- Product Truth changes;
- starting SB-P-1.12;
- self-approval or self-merge.

## Stop Conditions

STOP if:

- test-project identity cannot be proven;
- the correction cannot be expressed as one narrow forward security migration;
- authenticated Owner behavior would need to change;
- `catalog_link_executor` or required `service_role` behavior cannot be preserved;
- RLS policy logic must be changed to make the correction work;
- application code must change;
- the migration creates material uncertainty about existing production behavior;
- verification reveals a new Critical/High security issue;
- any required step would mutate production.

A STOP authorizes no production action.

## Continuation Boundary

A PASS here authorizes **nothing further automatically**.

Mission Control must separately review the implementation/evidence and issue a new explicit production-execution authorization before the migration may be applied to `gysgzasfcjvtrgaigfyn`.

After production hardening is independently verified, `F23-01` still remains a separate prerequisite requiring designated production-safe test identities/businesses.

---

**Mission Control boundary:** Gate 2A-C1 prepares and test-validates the least-privilege correction only. Production remains untouched.