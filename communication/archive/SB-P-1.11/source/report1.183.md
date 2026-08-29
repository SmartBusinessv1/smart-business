# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40A — PRODUCTION MIGRATION-HISTORY RECONCILIATION REPORT

**Report ID:** `report1.183`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-40A — Production Migration-History Reconciliation`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.190.md` (and parent `communication/live/instruction1.189.md`)
**Date:** 2026-08-29

---

## 1. Exact Repository/Main SHA Used

`c88f41d09a32b19be418d6aaf6cda4cf923f6686` (`origin/main`, merge commit for PR #412 — `instruction1.190.md` itself).

## 2. Production Project Identity (Non-Secret)

- Project name: `smart-business`
- Project ref: `gysgzasfcjvtrgaigfyn`
- Region: `ap-south-1`
- Access path: the repository's guarded CLI wrapper (`scripts/supabase-cli.mjs production ...`), which prints the resolved target before doing anything and requires explicit `CONFIRM_PRODUCTION=yes` before any command against this project — used for every command in this mission, both read-only and corrective.

## 3. Read-Only Before-State Evidence

### 3.1 Migration history (`supabase migration list`)

- `20260810120000` (canonical Migration 1 version): `local=20260810120000`, `remote=""` — **absent from production history**.
- `20260829085110`: `local=""`, `remote=20260829085110` — **present in production history with no corresponding local migration file**.
- `20260811090000`, `20260819120000`, `20260826120000` (Migrations 2–4): all `remote=""` — confirmed unapplied.

### 3.2 Exact history row (`supabase_migrations.schema_migrations`, via `supabase db query`)

```json
{
  "version": "20260829085110",
  "name": "sb_p_1_11_gc_1_catalog_import_support_schema",
  "has_statements_recorded": true
}
```

No row existed for version `20260810120000`, `20260811090000`, `20260819120000`, or `20260826120000`.

### 3.3 Migration 1 schema state (`pg_class`, per this repository's own incident-derived convention of using `pg_class` rather than `information_schema.tables` for existence checks)

| table_name | relkind | rls_enabled |
|---|---|---|
| `catalog_import_batches` | `r` | `true` |
| `catalog_import_rows` | `r` | `true` |

### 3.4 Browser-role grants (`information_schema.role_table_grants`)

- `anon`: no privilege on either table.
- `authenticated`: `SELECT` only on both tables.
- `service_role`: full unrestricted privilege on both tables (the default grant state from `CREATE TABLE`, not yet narrowed by any later migration — expected, since no later migration has been applied).

### 3.5 Locked Catalog boundary

Exact-name count of the nineteen locked public Catalog commands: **19**.

## 4. Root Cause Determined

Migration 1's SQL body was applied to production successfully, but the execution path that applied it recorded the migration under a freshly generated timestamp-based version (`20260829085110`, matching when the statement was actually executed) rather than preserving the canonical repository filename's version prefix (`20260810120000`). This is a migration-history bookkeeping discrepancy only — the schema effects themselves are correct and match the canonical migration's intent exactly (confirmed in §3.3–§3.5 against the expected Migration 1 contract recorded in `report1.181.md`).

## 5. Supported Reconciliation Method Selected, and Why It Is Minimum-Safe

The Supabase CLI (`supabase migration repair [version] --status applied|reverted`) is a purpose-built, officially supported command whose own description is exactly "Repair the migration history table." It only ever mutates rows in `supabase_migrations.schema_migrations`; it does not execute any migration SQL body, and it has no code path that touches application tables, RLS, grants, functions, or runtime configuration. This directly satisfies `instruction1.190.md` §2's investigation requirements:

- a supported mechanism exists (confirmed via `supabase migration repair --help`);
- reconciliation can be performed without re-running Migration 1 DDL (confirmed by the command's own scope and by direct before/after comparison in §7 below);
- the method changes only migration-history metadata (confirmed by identical schema/RLS/grant state before and after, §7).

This is preferred over any direct edit of `supabase_migrations.schema_migrations` via raw `UPDATE`/`DELETE`/`INSERT` SQL, per `instruction1.189.md` §5's explicit preference for "a supported Supabase migration-history repair mechanism over direct system-table editing." No direct system-table SQL mutation was used at any point.

## 6. Exact Production Mutation Performed

Two `migration repair` invocations, in this order (canonical version recorded first, so at no point during the operation was Migration 1 unrepresented in history):

1. `supabase migration repair 20260810120000 --status applied --linked --project-ref gysgzasfcjvtrgaigfyn`
   Result: `Repaired migration history: [20260810120000] => applied`
2. `supabase migration repair 20260829085110 --status reverted --linked --project-ref gysgzasfcjvtrgaigfyn`
   Result: `Repaired migration history: [20260829085110] => reverted`

No other command was run against production. No secret value, database password, service-role key, or access token was displayed, printed, or included in any output used for this report.

## 7. Exact After-State Migration-History Evidence

### 7.1 Migration history (`supabase migration list`)

- `20260810120000`: `local=20260810120000`, `remote=20260810120000` — **now reconciled**.
- `20260829085110`: **no longer appears in the list at all**.
- `20260811090000`, `20260819120000`, `20260826120000`: still `remote=""` — confirmed still unapplied.

### 7.2 Exact history row (`supabase_migrations.schema_migrations`)

```json
{
  "version": "20260810120000",
  "name": "sb_p_1_11_gc_1_catalog_import_support_schema",
  "has_statements_recorded": true
}
```

Exactly one row, matching the canonical repository migration identity. No row exists for `20260829085110`, `20260811090000`, `20260819120000`, or `20260826120000`.

## 8. Exact Schema/RLS/Grant/19-Command Verification Evidence (After)

- `pg_class` re-query: `catalog_import_batches` and `catalog_import_rows` both present, `relrowsecurity = true` for both — **byte-identical to the before-state in §3.3**.
- Browser-role grants re-query: diffed programmatically against the exact before-state result from §3.4 — **zero differences**.
- Locked Catalog command count re-query: **19** — unchanged from §3.5.

## 9. Confirmation — Migration 1 DDL Was Not Reapplied

`migration repair` never executes a migration's SQL body under any status value; it only writes to the history table. No `db push`, no manual `CREATE TABLE`/`ALTER TABLE`, and no other DDL-executing command was run against production at any point in this mission. The identical before/after schema, RLS, and grant state in §8 is direct empirical confirmation that no DDL executed.

## 10. Confirmation — Migrations 2–4 Remain Unapplied

Confirmed twice, independently: via `supabase migration list` (§7.1) and via direct query of `supabase_migrations.schema_migrations` (§7.2). `20260811090000`, `20260819120000`, and `20260826120000` are absent from production history in both checks.

## 11. Confirmation — No Unrelated Production Mutation Occurred

- No production business/application data was read beyond the exact non-secret metadata/existence queries described in this report.
- No production Supabase configuration, Auth setting, secret, Edge Function, storage, or networking setting was changed.
- No AWS, Cloudflare, or Lovable action of any kind occurred.
- No application deployment occurred.
- No bulk-import feature was enabled.
- No Stage 21 or later lifecycle action occurred.
- GC-40 Migration 2 was not resumed under this instruction.

## 12. Final Disposition

`GC-40A MIGRATION-HISTORY RECONCILIATION — PASS`

Production migration history now correctly records `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema` as the sole entry for Migration 1, with no residual generated-version row, no DDL reapplication, no application-data mutation, and no change to any Migration 1 schema/RLS/grant object. Migrations 2–4 remain unapplied. GC-40 remains STOPPED pending Mission Control's separate review of this report and explicit authorization to resume from Migration 2.
