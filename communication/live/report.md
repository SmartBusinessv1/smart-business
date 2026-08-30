# SMART BUSINESS — REPOSITORY COMMUNICATION

# Report

**Mission ID:** `SB-REL-1.10-1.11`

**Mission Name:** `SB-P-1.10 + SB-P-1.11 Production Release & Runtime Activation — Gate 2A Security & Isolation Evidence Closure`

**From:** `Security & Permissions Architecture`

**To:** Mission Control

**In Reply To:** `communication/live/instruction.md`

**Status:** `GATE 2A EXECUTED — SECURITY CONDITION OPEN / F23-01 PREREQUISITE BLOCKED`

**Date:** `2026-08-30`

---

## 1. Exact Intake `main` Commit

Canonical `main` reviewed and used as the controlled-branch base:

`9c05f5f388915cefc54ded65979acad302877493`

The active Gate 2A instruction and report shell were read from this exact commit before any direct platform inspection.

## 2. Exact Verified Production Project Identity

The instruction names production Supabase project:

`gysgzasfcjvtrgaigfyn`

Direct Supabase project inspection confirmed:

- project ref: `gysgzasfcjvtrgaigfyn`;
- project name: `smart-business`;
- region: `ap-south-1`;
- status: `ACTIVE_HEALTHY`.

A direct SQL connection against that project returned database `postgres` and a live connected session. The isolated test project `drravyyauixltoihzmwo` was not used.

**Production identity result: VERIFIED.**

## 3. Evidence Sources and Direct Checks Performed

Repository evidence reviewed:

- canonical `communication/live/instruction.md`;
- accepted Gate 1 `communication/live/report.md` at PR #431 merge baseline;
- canonical Inventory/Catalog migrations and accepted security history where needed for comparison;
- repository search for any explicitly designated F23-01 production test users/businesses.

Direct production checks performed against `gysgzasfcjvtrgaigfyn` were read-only and included:

1. table columns and release-relevant surface identification;
2. effective table ACLs using PostgreSQL catalog ACL expansion;
3. RLS enabled/forced state and table owners;
4. complete applicable RLS policy inventory on the three Inventory tables;
5. role inheritance / `BYPASSRLS` state for `anon`, `authenticated`, `service_role`, `catalog_link_executor`, and `postgres`;
6. Inventory-related function ownership, `SECURITY DEFINER`/invoker state, and effective EXECUTE rights;
7. view dependency inspection for Inventory tables;
8. trigger inventory for the Inventory tables;
9. public-schema default privileges for tables/functions/sequences;
10. a read-only transaction executed as database role `anon` to measure actual visible rows on all three Inventory tables;
11. search of existing production business/user identity metadata for clearly designated `test`, `qa`, `demo`, `sandbox`, or `verification` identities/businesses;
12. repository search for an explicitly designated F23-01 production identity pair.

No write statement, migration, grant change, role change, RLS change, claim change, data creation, deployment, or configuration mutation was executed.

## 4. Effective Inventory Privilege Matrix

Relevant Inventory tables:

- `inventory_items`
- `inventory_movements`
- `inventory_movement_idempotency_keys`

All three tables are owned by `postgres`, have RLS **enabled**, and have `FORCE ROW LEVEL SECURITY = false`.

| Role | Table ACL posture | RLS / bypass posture | Effective release observation |
|---|---|---|---|
| `anon` | Broad table rights on all three tables: `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, `REFERENCES`, `TRIGGER`, `MAINTAIN` | no role inheritance; `BYPASSRLS=false`; no applicable Inventory RLS policy | read-only runtime probe returned zero visible rows on all three tables |
| `authenticated` | Same broad table rights on all three tables | `BYPASSRLS=false`; owner-scoped Inventory policies apply | row access is intended to be constrained by owner/business RLS |
| `service_role` | Same broad table rights on all three tables | `BYPASSRLS=true` | privileged server role can bypass RLS by design |
| `catalog_link_executor` | `SELECT` only on `inventory_items` and `inventory_movements`; no grant observed on idempotency table | `BYPASSRLS=false`; dedicated own-business SELECT policy | narrow executor path |
| `PUBLIC` | no direct Inventory table grant found | no applicable policy | no direct Inventory table access path found |
| `postgres` | owner privileges | `BYPASSRLS=true` | administrative/database-owner path only |

### Direct `anon` runtime read result

A transaction was opened `READ ONLY`, `SET LOCAL ROLE anon` was applied, and no JWT user identity was present (`auth.uid() = NULL`). Actual production results:

- `inventory_items` visible rows: `0`
- `inventory_movements` visible rows: `0`
- `inventory_movement_idempotency_keys` visible rows: `0`

The transaction was rolled back. No row was modified.

## 5. RLS and Policy Analysis

### `inventory_items`

Policies apply only to:

- `authenticated` owner-scoped SELECT/INSERT/UPDATE;
- `catalog_link_executor` own-business SELECT.

No policy applies to `anon` or `PUBLIC`.

### `inventory_movements`

Policies apply only to:

- `authenticated` owner-scoped SELECT/INSERT;
- `catalog_link_executor` own-business SELECT.

No policy applies to `anon` or `PUBLIC`.

### `inventory_movement_idempotency_keys`

Policies apply only to:

- `authenticated` owner-scoped SELECT/INSERT.

No policy applies to `anon` or `PUBLIC`.

Therefore normal row-oriented anonymous reads/writes are currently default-denied by RLS despite the raw ACL grant.

## 6. Function / RPC / View / Trigger / Inheritance Analysis

### Inventory-related functions exposed to `anon`

The following Inventory-related public functions are currently executable by `anon` and are `SECURITY INVOKER` (`SECURITY DEFINER = false`):

- `create_inventory_movement(...)`
- `inventory_current_stock_batch(...)`
- `inventory_items_guard()`
- `inventory_movement_remaining_compensable(...)`
- `inventory_movements_reject_mutation()`
- `preview_inventory_movement(...)`

Because they are invoker-rights, they do not independently bypass the caller's RLS role. The Catalog link preview function that is `SECURITY DEFINER` is not executable by `anon`.

No Inventory-dependent view was found.

Inventory triggers found are guard/rejection/update-time triggers only; no trigger path was found that grants `anon` owner or privileged execution authority.

Role inspection showed:

- `anon`: no inherited roles, `BYPASSRLS=false`;
- `authenticated`: no inherited roles, `BYPASSRLS=false`;
- `catalog_link_executor`: no inherited roles, `BYPASSRLS=false`;
- `service_role`: `BYPASSRLS=true`;
- `postgres`: privileged owner/admin role with `BYPASSRLS=true`.

No anonymous role-inheritance bypass was found.

## 7. Default Privilege Finding

Public-schema default privileges for objects created by `postgres` currently grant broad rights automatically to `anon`, `authenticated`, and `service_role`:

- tables: broad table privileges;
- functions: EXECUTE;
- sequences: write/use as configured.

Equivalent broad public-schema defaults also exist for objects created by `supabase_admin`.

This means the current Inventory ACL posture is not only historical per-table state; the default-privilege model can reproduce broad anonymous table/function rights on future objects unless explicitly revoked by later migrations.

## 8. Independent `anon` Grant Security Disposition

### What is secure today

The direct production `anon` read probe confirms RLS currently prevents anonymous row visibility on all three Inventory tables. No applicable `anon`/`PUBLIC` policy, role inheritance bypass, Inventory view bypass, or anon-executable `SECURITY DEFINER` Inventory RPC was found.

### Why the current posture is not acceptable as release-ready least privilege

The raw anonymous grants materially exceed what the Smart Business anonymous actor needs:

- `anon` has `TRUNCATE`, `TRIGGER`, `REFERENCES`, `MAINTAIN`, and full CRUD table privileges on all three Inventory tables;
- PostgreSQL RLS is a row-operation boundary and does not turn these unrelated table privileges into least-privilege grants; notably `TRUNCATE` is not a row-policy operation;
- multiple Inventory functions are executable by `anon` only because the broad public-schema function defaults remain in force;
- the default-privilege configuration can silently recreate broad anonymous authority on future tables/functions;
- this is materially weaker defense-in-depth than the accepted Catalog `REVOKE`-first / narrow-regrant model;
- there is no current evidence of an active anonymous row leak, but absence of a current RLS bypass does not make unnecessary database authority acceptable under Smart Business deny-by-default and merchant-isolation principles.

### Exact final `anon` grant security disposition

`HARDENING REQUIRED BEFORE RELEASE APPROVAL`

### Narrow corrective action recommended — NOT IMPLEMENTED

Mission Control should separately authorize a migration/security correction that, at minimum:

1. revokes unnecessary Inventory table privileges from `anon` on the three named tables, preferably `REVOKE ALL` followed by no anonymous re-grant unless a specific anonymous use case is proven;
2. revokes `anon` EXECUTE on Inventory-domain functions/RPCs that are not explicitly intended for anonymous use;
3. corrects relevant public-schema default privileges so new Smart Business tables/functions do not automatically regain broad anonymous authority;
4. preserves the existing owner-scoped authenticated policies, the narrow `catalog_link_executor` path, and intentional `service_role` privileged behavior;
5. obtains independent verification after the correction.

Gate 2A itself performs none of these changes.

## 9. F23-01 Production Test Identity / Data Prerequisite Check

The instruction permits F23-01 only with **pre-existing, clearly designated production test users/businesses/data**.

Direct production search found **no business/user explicitly designated** through business name, owner email, or user metadata using common controlled-test markers (`test`, `qa`, `demo`, `sandbox`, `verification`).

Repository search found no canonical record designating an existing pair of production owners/businesses as safe F23-01 test identities.

Production contains business identities, but none can be safely reclassified by this room as test identities. Using real merchant identities merely because they exist would violate the instruction's designation requirement and the Lighthouse privacy/trust posture.

### Required bounded prerequisite

Mission Control must provide or establish, through a separately authorized process, **two clearly designated production-safe test owner identities and two corresponding businesses with pre-existing release-relevant Inventory and Catalog/Pricing rows**, or point Security to an already-existing canonical designation that was not discoverable from current production/repository evidence.

The prerequisite must be established without Gate 2A creating or mutating production data.

## 10. F23-01 Inventory Probe

Required proof:

1. Business A owner reads Business A Inventory;
2. Business A owner cannot read Business B Inventory;
3. Business B owner reads Business B Inventory;
4. Business B owner cannot read Business A Inventory.

**Result:** not executed after the prerequisite check failed.

No production identity was impersonated and no real merchant account was repurposed as a test actor.

## 11. F23-01 Catalog/Pricing Probe

Required equivalent same-business/cross-business proof for Catalog/Pricing and relevant read helpers.

**Result:** not executed after the same prerequisite check failed.

No production Catalog/Pricing row was modified or created.

## 12. RPC / Read-Helper Isolation for F23-01

Static/direct-platform privilege inspection was completed for Inventory helpers, but the required two-tenant authenticated runtime proof could not be executed without designated identities.

Therefore no F23-01 RPC/read-helper isolation PASS is claimed.

## 13. F23-01 Status

`BLOCKED — PREREQUISITE REQUIRED`

F23-01 remains open. It may be closed only after a separately authorized read-only live probe uses two clearly designated pre-existing production test owners/businesses and passes both Inventory and Catalog/Pricing cross-tenant checks.

## 14. Critical / High Security Finding

No proven active anonymous cross-tenant row disclosure or current `anon` RLS bypass was found.

The broad anonymous ACL/default-privilege posture is nevertheless a **material release hardening requirement** because it grants unnecessary database authority outside the intended anonymous surface and is inconsistent with deny-by-default. It is carried as a release-approval condition rather than labeled an active Critical/High exploit on the available evidence.

If future evidence demonstrates a remotely reachable path that can exercise `anon`'s non-row privileges such as `TRUNCATE`, severity must be escalated immediately.

## 15. No-Mutation Confirmation

During Gate 2A:

- production row INSERT/UPDATE/DELETE: **NO**;
- production test user/business/data creation: **NO**;
- `GRANT` / `REVOKE`: **NO**;
- RLS or policy mutation: **NO**;
- role/claim/auth mutation: **NO**;
- function/view/trigger/schema mutation: **NO**;
- migration creation/execution: **NO**;
- Supabase configuration mutation: **NO**;
- application deployment/publication: **NO**;
- AWS/Cloudflare/DNS/parser/secret mutation: **NO**;
- production release action: **NO**.

All production SQL used for evidence was read-only; the explicit `anon` runtime check used a `READ ONLY` transaction and was rolled back.

Repository changes are limited to this Gate 2A report on a controlled branch for human review.

## 16. Gate 2A Final Result

The Inventory anonymous grant condition is **not closed** because hardening is required before release approval.

F23-01 is **not closed** because suitable clearly designated pre-existing production test identities/businesses/data were not available from the evidence this room was authorized to use.

`BLOCKED — EVIDENCE INSUFFICIENT`
