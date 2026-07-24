Document: Target Environment Verification Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2

# SB-MIG-1.2 — Target Environment Verification Report (Task 2)

Confirms whether the Team LIPS Supabase project (`gysgzasfcjvtrgaigfyn`), after this mission's Task 1 work, matches the approved repository state with zero drift. All checks below were run directly against the live project after the transactions-domain migrations were applied.

## 1. Migration Application Record

| Migration (repository) | Applied to Team LIPS Supabase |
| --- | --- |
| #1 `20260708210504` (businesses) | Yes (prior to this mission) |
| #2 `20260719102137` (transactions) | **Yes — applied this mission** |
| #3 `20260719140000` (transactions, near-duplicate) | **Deliberately not applied** — see `01-high-risk-resolution-report.md` MIG-3 and SB-MIG-1.1's MIG-2 finding |
| #4 `20260720142204` (correction events, `correct_transaction` v1) | **Yes — applied this mission** |
| #5 `20260720142248` (correction INSERT policy, `correct_transaction` v2 final) | **Yes — applied this mission** |
| #6 `20260721205714` (inventory foundation) | Yes (prior to this mission) |
| #7 `20260723200622` (data cleanup, prod-only) | Not applicable — production data cleanup, no schema effect, nothing to replay |
| #8 `20260723200718` (`GRANT ... sandbox_exec`) | Not applied — `sandbox_exec` role does not exist on this project; irrelevant Lovable-runtime-specific grant, no schema/business-logic effect (per SB-MIG-1.1 §4 Finding INF-1 context) |
| #9 `20260723200952` (`REVOKE ... sandbox_exec`) | Not applied — reverses #8, same reasoning |
| #10 `20260724085729` (search_path fix) | Yes (prior to this mission) |
| #11 `20260724170000` (idempotency-RLS fix) | Yes (prior to this mission) |

**Result: every migration that defines schema, business logic, or security policy has been applied. The three excluded migrations (#3, #8, #9) are excluded for documented, evidence-backed reasons, not omission.**

## 2. Object-Level Comparison Against Repository-Defined Schema

### 2.1 Tables

All 6 tables the repository's migrations define exist: `businesses`, `transactions`, `transaction_correction_events`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`. No extra, unexpected table exists in the `public` schema.

### 2.2 Functions

All 8 functions exist with signatures matching the repository: `update_updated_at_column()`, `correct_transaction(...)`, `inventory_items_guard()`, `inventory_movements_reject_mutation()`, `create_inventory_movement(...)`, `preview_inventory_movement(...)`, `inventory_current_stock_batch(uuid[])`, `inventory_movement_remaining_compensable(uuid)`.

- `correct_transaction`: confirmed `SECURITY INVOKER` (`prosecdef = false`), matching migration #5's final replacement, not migration #4's superseded `SECURITY DEFINER` draft.
- `create_inventory_movement`: confirmed to carry the SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 fix (plain `SELECT`, no `FOR UPDATE`, in the idempotency lookup; advisory lock acquired before the lookup; `search_path = public, extensions`) — this is the **more current** version than the Lovable-managed backend currently runs.

No extra, unexpected function exists.

### 2.3 Triggers

All 7 expected triggers exist, correctly attached: `update_businesses_updated_at`, `update_inventory_items_updated_at`, `inventory_items_guard_trg`, `inventory_movements_no_update`, `inventory_movements_no_delete`, `update_transactions_updated_at`, `update_transaction_correction_events_updated_at`. No extra trigger exists.

### 2.4 Indexes

22 indexes exist across all 6 tables; every index name and definition (columns, uniqueness, partial-index `WHERE` clauses) was directly compared against the repository's migration DDL and matches exactly — including the partial unique indexes (`inventory_movements_opening_stock_unique` on `WHERE movement_type = 'opening_stock'`) and composite indexes (`inventory_items_business_status_idx`, `inventory_movements_item_time_idx`, etc.). No extra, unexpected index exists.

### 2.5 Constraints

All CHECK, FOREIGN KEY, UNIQUE, and PRIMARY KEY constraints were enumerated and cross-checked by name against the migration source — including the inventory-ledger's cross-table integrity constraints (`inventory_movements_item_business_fk`, `inventory_movements_correcting_of_fk`, `inventory_movements_audit_completeness`, `inventory_movements_type_direction`, `inventory_movements_correction_link`, `inventory_movements_no_self_correction`). Every constraint name matches the repository exactly. No extra, unexpected constraint exists.

### 2.6 RLS Policies

16 policies exist, matching the repository's `CREATE POLICY` statements one-for-one by table, command, and role. Policy text was independently confirmed identical to the Lovable-managed production database for the policies that exist on both (i.e., everything except the newly-applied transactions-domain policies, which were just sourced from the same repository file production's own were built from — so identity is by construction, not independent re-comparison, for those specific 6). RLS is **enabled** on all 6 tables (`relrowsecurity = true` for every table, independently re-verified after this mission's changes).

### 2.7 Authentication Configuration

Application-code auth wiring is unaffected by this mission (no `src/` files were touched). At the database level: RLS-based authorization is confirmed structurally identical to the repository's design across every table. GoTrue-level settings (email confirmation policy, session lifetime, OAuth provider configuration) remain **outside what this audit's tools can inspect or configure** — see `03-migration-risk-register.md` MIG-7/MIG-11 from SB-MIG-1.1, unchanged status, and `04-production-configuration-report.md` in this mission for the current advisor-level read.

## 3. Drift Summary

**No drift found between the Team LIPS Supabase project's structural (schema, function, trigger, index, constraint, policy) state and the repository's approved migration history**, after this mission's Task 1 work and excluding the three migrations documented above as deliberately not replayed.

No corrective action is recommended for structural drift — there is none to correct.

The only remaining open items relate to **configuration this audit's tools cannot inspect** (GoTrue provider/session settings) rather than to schema drift, and are tracked in `04-production-configuration-report.md` and the risk register, not reported here as drift.
