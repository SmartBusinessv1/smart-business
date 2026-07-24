Document: Production Data Mapping Plan

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2A

**No production data was moved in producing this document — mapping only, per this mission's boundaries.**

# SB-MIG-1.2A — Production Data Mapping Plan (Task 8)

Authentication users are handled entirely separately (`02-authentication-recreation-plan.md`) from the public-schema business data mapped here, per this task's own instruction.

## 1. Insertion Order (dependency-driven)

1. `businesses`
2. `transactions`
3. `transaction_correction_events`
4. `inventory_items`
5. `inventory_movements` (0 rows — trivial)
6. `inventory_movement_idempotency_keys` (0 rows — trivial)

This is the same dependency order established in SB-MIG-1.2's `05-migration-dry-run-report.md` §2, now populated with exact production values instead of general guidance.

## 2. Table-by-Table Mapping

### `businesses`

| Field | Value |
| --- | --- |
| Source row count | 2 |
| Migration eligibility | **Migrate** |
| Column mapping | Identity — every column maps 1:1 to the same column on the target (schema confirmed identical, SB-MIG-1.2) |
| UUID preservation rule | **Preserve `businesses.id` exactly.** Nothing downstream references a business by any other key. |
| `owner_id` special handling | **Do not preserve as-is.** Must be written as a placeholder/staging value initially (or the row inserted after the corresponding recreated user exists — see `02-authentication-recreation-plan.md` §5) and then updated to the new, recreated `auth.users.id`. This is the one field in this entire table that isn't a simple carry-over. |
| Timestamp preservation rule | Preserve `created_at`/`updated_at` exactly — these are historical facts about when the business was created, not migration-time facts |
| Foreign-key dependency | `owner_id → auth.users(id)` — must exist before insert (or insert can happen with a temporary value only if the schema permitted a nullable/deferred FK, which it does not — `owner_id` is `NOT NULL` — so in practice, **business rows can only be inserted after their owner's recreated `auth.users` row exists**, tightening the sequencing beyond what §1's table-level order alone implies) |
| Validation query | `SELECT count(*), array_agg(id ORDER BY id) FROM public.businesses;` — compare count (2) and the two known IDs (`4a6741e2-...`, `28b2e43f-...`) exactly |
| Rollback action | `DELETE FROM public.businesses WHERE id IN ('4a6741e2-...', '28b2e43f-...');` (only safe before any dependent row exists — see Scenario D handling in SB-MIG-1.2's `06-rollback-procedure.md` for the case where dependents already exist) |

**Consequence of the `owner_id` NOT NULL constraint:** since User 2's recreated `auth.users` row cannot exist until their first post-cutover Google sign-in (`02-authentication-recreation-plan.md` §1), **Salamath Store's `businesses` row cannot be inserted into the target until after that sign-in occurs.** This is a real sequencing constraint for `09-cutover-runbook.md` to reflect precisely, not a detail to gloss over: Bhai Store (User 1) can be data-migrated ahead of Salamath Store (User 2).

### `transactions`

| Field | Value |
| --- | --- |
| Source row count | 5 (1 for Bhai Store, 4 for Salamath Store) |
| Migration eligibility | **Migrate** |
| Column mapping | Identity — 1:1 |
| UUID preservation rule | Preserve `id` exactly; preserve `business_id` exactly (already-migrated business row) |
| `creator_id` special handling | Same treatment as `businesses.owner_id` — must be remapped to the corresponding recreated user's new ID, not carried over from production |
| Timestamp preservation rule | Preserve `created_at`, `updated_at`, and `transaction_date` exactly — these are real business-history facts |
| Foreign-key dependency | `business_id → businesses(id)` (must exist first); `creator_id → auth.users(id)` (must exist first — same sequencing consequence as above) |
| Validation query | `SELECT business_id, count(*) FROM public.transactions GROUP BY business_id;` — compare against §4 of `01-production-user-inventory.md` (1 for Bhai Store, 4 for Salamath Store) |
| Rollback action | `DELETE FROM public.transactions WHERE business_id IN (...);` — safe as long as no `transaction_correction_events` row references them yet (respect reverse dependency order for rollback) |

### `transaction_correction_events`

| Field | Value |
| --- | --- |
| Source row count | 4 (all for Salamath Store) |
| Migration eligibility | **Migrate** |
| Column mapping | Identity — 1:1, including the `original_values`/`updated_values` JSONB audit-trail columns (must be preserved verbatim — they are themselves historical records, not data to be regenerated) |
| UUID preservation rule | Preserve `id`, `transaction_id`, `business_id` exactly |
| `edited_by` special handling | Same remapping treatment as `creator_id`/`owner_id` — these correction events were all authored by User 2 (Salamath Store's owner), so all 4 rows remap to the same new user ID |
| Timestamp preservation rule | Preserve `edited_at`, `created_at`, `updated_at` exactly |
| Foreign-key dependency | `transaction_id → transactions(id)`; `business_id → businesses(id)` — both must exist first |
| Validation query | `SELECT count(*) FROM public.transaction_correction_events WHERE business_id = '28b2e43f-...';` — expect exactly 4 |
| Rollback action | `DELETE FROM public.transaction_correction_events WHERE business_id = '28b2e43f-...';` |

### `inventory_items`

| Field | Value |
| --- | --- |
| Source row count | 1 (Salamath Store — the "Milk" item referenced throughout SB-P-1.10's own evidence) |
| Migration eligibility | **Migrate** |
| Column mapping | Identity — 1:1 |
| UUID preservation rule | Preserve `id`, `business_id` exactly |
| `created_by` special handling | Same remapping treatment — this row was created by User 2 |
| Timestamp preservation rule | Preserve `created_at`, `updated_at` exactly |
| Foreign-key dependency | `business_id → businesses(id)` — must exist first |
| Validation query | `SELECT count(*) FROM public.inventory_items WHERE business_id = '28b2e43f-...';` — expect exactly 1 |
| Rollback action | `DELETE FROM public.inventory_items WHERE business_id = '28b2e43f-...';` (safe only if no `inventory_movements` row references it — moot here, since there are none) |

### `inventory_movements`

| Field | Value |
| --- | --- |
| Source row count | **0** |
| Migration eligibility | **Migrate** (trivially — an empty `INSERT` set, or simply nothing to do) |
| Everything else | Not applicable — no rows exist. Confirmed consistent with every prior audit (SB-MIG-1.1, SB-MIG-1.2): the "Milk" inventory item has never had a real movement posted against it in production. |

### `inventory_movement_idempotency_keys`

| Field | Value |
| --- | --- |
| Source row count | **0** |
| Migration eligibility | **Migrate** (trivially, same as above) |

## 3. Explicit Classification Summary

| Table | Classification |
| --- | --- |
| `businesses` | Migrate (with `owner_id` requiring a manual decision on sequencing — resolved above: insert after owner recreation) |
| `transactions` | Migrate (`creator_id` same treatment) |
| `transaction_correction_events` | Migrate (`edited_by` same treatment) |
| `inventory_items` | Migrate (`created_by` same treatment) |
| `inventory_movements` | Migrate (trivial, 0 rows) |
| `inventory_movement_idempotency_keys` | Migrate (trivial, 0 rows) |
| `auth.users` / `auth.identities` | **Not mapped here — see `02-authentication-recreation-plan.md`.** Explicitly out of this document's scope per the task brief. |

**No table or row in this dataset is classified Exclude.** The production dataset is small enough (14 business rows total) and clean enough (zero orphaned/unexplained records, confirmed in `01-production-user-inventory.md`) that every single row has a clear, unambiguous migration path. The only genuine "requires manual decision" element is the `auth.users` recreation approach itself, already resolved by Mission Control's locked decision and elaborated in `02-authentication-recreation-plan.md`.
