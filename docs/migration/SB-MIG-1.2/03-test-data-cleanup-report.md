Document: Test Data Cleanup Report

Version: 1.0

Status: DRAFT — submitted for Mission Control review

Created By: Claude Code

Reviewed By: Mission Control (pending)

Mission: SB-MIG-1.2

# SB-MIG-1.2 — Test Data Cleanup Report (Task 3)

## 1. Justification

SB-MIG-1.1's data inventory (Audit 4) confirmed every row in the Team LIPS Supabase project's data tables was created by the automated Vitest test suite (`tests/inventory/*.test.ts`) across the SB-P-1.10-TESTS-1.0 and SB-P-1.10-FIX-IDEMPOTENCY-RLS-1.0 missions and every subsequent local test run — identified by the exact email pattern `sb-p-1-10-tests+<label>-<uuid>@example.com` hard-coded in `tests/setup/test-clients.ts`. This mission is explicitly authorized to remove test data (and only test data) before the project can be considered a candidate production target.

## 2. Pre-Cleanup Verification

Before removing anything, every `auth.users` row was checked against the exact test-account email pattern:

| Check | Result |
| --- | --- |
| Rows matching `sb-p-1-10-tests+%@example.com` | 188 |
| Rows NOT matching that pattern | **0** |
| Total `auth.users` rows | 188 |

**100% of accounts on this project were confirmed test-created before any deletion occurred.** No row required a judgment call about whether it was test or real data.

## 3. Row Counts — Before Cleanup

| Table | Row count |
| --- | --- |
| `businesses` | 188 |
| `transactions` | 0 |
| `transaction_correction_events` | 0 |
| `inventory_items` | 333 |
| `inventory_movements` | 940 |
| `inventory_movement_idempotency_keys` | 925 |
| `auth.users` | 188 |
| `auth.identities` | 188 |

(`transactions` and `transaction_correction_events` show 0 because their migrations were applied earlier in this same mission, under Task 1 — no test run has ever exercised them, so they started empty.)

## 4. Cleanup Executed

Two statements, in order:

```sql
TRUNCATE public.inventory_movement_idempotency_keys,
         public.inventory_movements,
         public.inventory_items,
         public.transaction_correction_events,
         public.transactions,
         public.businesses
CASCADE;

DELETE FROM auth.users WHERE email LIKE 'sb-p-1-10-tests+%@example.com';
```

The `TRUNCATE` targets all six data tables in a single statement so that cross-table foreign keys (including `inventory_movements`' self-referencing `correcting_of` and the append-only ledger's `RESTRICT`-based constraints, which specifically prevent naive per-table deletion in the wrong order — this exact problem was encountered and solved during SB-P-1.10-TESTS-1.0's own test-fixture design) are satisfied atomically rather than requiring a specific deletion order. `CASCADE` was included to also clear anything referencing these tables that might exist outside the six named (none did, in practice). `auth.users` was cleared separately, scoped precisely to the verified test-email pattern — not a blanket deletion — as a second, independent safety measure beyond the pre-cleanup verification in §2.

## 5. Row Counts — After Cleanup

| Table | Row count |
| --- | --- |
| `businesses` | 0 |
| `transactions` | 0 |
| `transaction_correction_events` | 0 |
| `inventory_items` | 0 |
| `inventory_movements` | 0 |
| `inventory_movement_idempotency_keys` | 0 |
| `auth.users` | 0 |
| `auth.identities` | 0 |

**Every table is now empty.** Since 100% of pre-cleanup data was independently confirmed to be test data (§2), this is the fully correct outcome, not an approximation.

## 6. Structural Objects — Confirmed Preserved

Re-counted immediately after cleanup, compared against the pre-cleanup counts from Task 1/2:

| Object type | Count after cleanup | Unchanged from before cleanup? |
| --- | --- | --- |
| Tables (`public` schema) | 6 | Yes |
| Functions (`public` schema) | 8 | Yes |
| RLS policies | 16 | Yes |
| Indexes | 22 | Yes |
| RLS-enabled tables | 6 of 6 | Yes |
| Extensions installed | 5 (unchanged: `pgcrypto`, `uuid-ossp`, `plpgsql`, `supabase_vault`, `pg_stat_statements`) | Yes |
| Storage buckets | 0 (unchanged) | Yes |
| Realtime publication tables | 0 (unchanged) | Yes |

**No schema, migration record, function, trigger, policy, index, extension, or authentication *configuration* was touched.** Only row-level data (in the six named tables and `auth.users`/`auth.identities`, the latter via cascade from the `auth.users` deletion) was removed.

## 7. Exactly What Was Removed

- 188 `businesses` rows (all test-created)
- 333 `inventory_items` rows (all test-created)
- 940 `inventory_movements` rows (all test-created)
- 925 `inventory_movement_idempotency_keys` rows (all test-created)
- 188 `auth.users` rows, and their 188 corresponding `auth.identities` rows (all test-created, email pattern `sb-p-1-10-tests+%@example.com`)
- 0 rows from `transactions` and `transaction_correction_events` (none existed)

**Total: 2,574 data rows removed, 0 structural objects removed, 0 rows removed that did not match the verified test-account pattern.**
