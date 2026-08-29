# SB-P-1.11 — Evidence: GC-40 Production Migration Currency, Reconciliation, and Activation Boundary

**Mission:** SB-P-1.11 — Product Catalog & Pricing
**Stage:** 21 — Evidence Package (supporting document)
**Primary sources:** `communication/live/report1.182.md`, `report1.183.md`, `report1.184.md`, `report1.185.md`, `report1.186.md`, `report1.187.md`
**Date compiled:** 2026-08-29

This document traces the Stage 19 Material Finding (production migration currency) through to its final resolution, preserving the Migration 1 history incident visibly rather than rewriting it out, per `instruction1.195.md` §7 items 3–4.

---

## 1. The Stage 19 Material Finding

Stage 19's canonical report (`19-independent-verification-report.md`, "MATERIAL FINDING — Production Migration Currency Gap") found the production Supabase project (`gysgzasfcjvtrgaigfyn`) two migrations behind the fully-current test project (`drravyyauixltoihzmwo`): `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` and `20260811090000_sb_p_1_11_gc_1_security_correction.sql` were both unapplied in production. Consequence: `catalog_import_batches`/`catalog_import_rows` did not exist in production, and `delete_catalog_product` lacked the `SEC-IMP-6` dependent-history check. Stage 19 explicitly classified this as **non-blocking for the Initial Phase 1 19-command boundary** (which was independently confirmed correctly configured in production regardless) but as a **required pre-production-use action** before the already-canonical bulk-import entry point is exposed to real merchants.

A fourth migration, `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql` (correcting a PostgreSQL 42702 variable-naming ambiguity in two Lambda Parser support helpers), was authored and canonicalized after Stage 19 and joined the same production authorization package — see `report1.181.md`/`instruction1.188.md`. All four migrations were reviewed together as one authorized production package.

## 2. The Four-Migration Production Package, in Canonical Order

| # | File | Canonical version | Purpose |
|---|---|---|---|
| 1 | `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` | `20260810120000` | `catalog_import_batches`/`catalog_import_rows` schema (bulk-import support state) |
| 2 | `20260811090000_sb_p_1_11_gc_1_security_correction.sql` | `20260811090000` | SEC-IMP-5 (`follow_up_state` column + corrected resolution constraint), SEC-IMP-6 (`delete_catalog_product` dependent-history check against import rows) |
| 3 | `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql` | `20260819120000` | `parser_preview_guards`/`parser_upload_leases` schema and nine narrow `SECURITY DEFINER` Lambda Parser support helpers |
| 4 | `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql` | `20260826120000` | Forward-corrective `#variable_conflict use_column` fix to two of the nine helpers (PostgreSQL 42702 ambiguity) |

## 3. The Migration 1 History Incident — Preserved, Not Rewritten

Migration 1's SQL body applied successfully on first execution, but the execution path recorded it under a **generated** migration-history version, `20260829085110`, instead of the canonical repository version `20260810120000`. GC-40 stopped immediately rather than proceeding to Migration 2 with an unreconciled history.

A narrowly bounded corrective workstream, **GC-40A**, was separately authorized (`instruction1.189.md`, `instruction1.190.md`) to investigate and reconcile. `report1.183.md` (`GC-40A MIGRATION-HISTORY RECONCILIATION — PASS`) records:

- the root cause (a generated-timestamp version was recorded instead of the canonical filename version);
- the supported reconciliation method selected and why (Supabase's own `migration repair` command — metadata-only, never executes migration SQL — preferred over any raw `UPDATE`/`DELETE` against `supabase_migrations.schema_migrations`);
- the exact two-step mutation performed (`migration repair 20260810120000 --status applied`, then `migration repair 20260829085110 --status reverted`, in that order so Migration 1 was never momentarily unrepresented in history);
- before/after schema, RLS, and grant evidence proving zero drift — Migration 1's DDL was never re-executed, only its history bookkeeping was corrected.

This incident is deliberately kept visible in this evidence package rather than presented as if Migration 1 applied cleanly on the first attempt. It is real, it was contained without concealment, and its correction is independently verifiable.

## 4. Per-Migration Execution Reports

Each migration was applied individually, under its own narrow Mission Control authorization, through the repository's guarded production Supabase CLI migration path (never raw SQL for the schema mutation itself), with a fresh preflight and a full post-migration checkpoint every time:

- **Migration 1** — applied, then reconciled via GC-40A (§3 above). No separate per-migration report beyond `report1.183.md`, since Migration 1's application itself occurred before the reconciliation need was discovered.
- **Migration 2** — `report1.185.md`, disposition `GC-40 MIGRATION 2 SCOPED EXECUTION — PASS`. Applied via a temporary, fully-reversible local relocation of Migrations 3–4 (so `db push` could not sweep them in), verified via a scoped dry-run before the real push, with Migrations 3–4 restored byte-identical and zero residual repository diff immediately afterward. Post-migration checkpoint confirmed: `follow_up_state` column and corrected resolution constraint present as authored; `delete_catalog_product` retained its exact signature and `SECURITY DEFINER` posture with the new check; the migration's own temporary `postgres`/`catalog_lifecycle_executor` self-granted membership was cleanly revoked (distinguished from a separate, pre-existing `supabase_admin`-granted platform baseline present identically across all seven Catalog executor roles); Catalog count remained 19.
- **Migration 3** — `report1.186.md`, disposition `GC-40 MIGRATION 3 SCOPED EXECUTION — PASS`. Same relocate-and-scope method (Migration 4 relocated this time). Post-migration checkpoint confirmed: both parser tables' full schema/constraints/indexes match the authored migration exactly; RLS enabled with zero policies (default-deny) on both; all nine helper functions present with correct signatures, `SECURITY DEFINER`, and `search_path=''`; zero PUBLIC/`anon`/`authenticated` access anywhere; `service_role` narrowed to exactly `SELECT` on `parser_upload_leases` and `EXECUTE`-only on the nine helpers; Catalog count remained 19.
- **Migration 4** — `report1.187.md`, disposition `GC-40 MIGRATION 4 EXECUTION — PASS`. The final pending migration, so no relocation was needed. Post-migration checkpoint confirmed, via direct `pg_get_functiondef` comparison, that the two corrected functions changed by exactly one added line (`#variable_conflict use_column`) with signature/return shape/`LANGUAGE`/`SECURITY DEFINER`/`search_path` byte-for-byte unchanged; all nine function OIDs, ownership, and grants identical before and after (proving `CREATE OR REPLACE` preserved them exactly, as the migration's own design intended); the other seven helpers untouched; Catalog count remained 19; `migration list` confirmed zero pending migrations remained anywhere in the project.
- **Execution-path stop, for completeness:** `report1.184.md` records a deliberate STOP — before Migration 2, `db push` was found to have no native mechanism to apply a single pending migration in isolation (a `--dry-run` confirmed it would sweep in Migrations 3–4 too). No mutation was performed; the finding was reported to Mission Control, which then authorized the scoped relocate-and-push method used for Migrations 2–4. This is included here as evidence that ambiguity was escalated rather than resolved by unilateral improvisation.

## 5. Final Package-Level Reconciliation

`report1.182.md`, authored by Mission Control after `report1.187.md` was human-merged, performs a fresh independent read-only reconciliation against production and finds:

- all four canonical migration versions present with correct names;
- generated version `20260829085110` absent;
- RLS enabled on all four support/bookkeeping tables (`catalog_import_batches`, `catalog_import_rows`, `parser_preview_guards`, `parser_upload_leases`);
- both corrected parser functions contain `#variable_conflict use_column`;
- Catalog command count exactly 19;
- no fifth migration, no application deployment, no parser/bulk-import activation, no AWS/Cloudflare/Lovable/unrelated Supabase change, no Product Truth change, no twentieth Catalog command, no Manager/Employee permission expansion, and no Stage 21+ progression occurred under GC-40.

**Final disposition:** `GC-40 PRODUCTION MIGRATION EXECUTION — PASS`, with the report's own closing statement: "Upon human merge of this report, GC-40 may be declared CLOSED — PASS." This satisfies `instruction1.195.md` §2 entry-gate item 4 in full.

## 6. Parser-Support Schema/Security Evidence — Infrastructure Only, Not Activation

Migrations 3 and 4 install Lambda Parser support-state schema and nine narrow `SECURITY DEFINER` helper functions. This is infrastructure evidence only:

- neither `parser_preview_guards` nor `parser_upload_leases` is Catalog or Inventory Product Truth, is counted among the 19 public Catalog commands, or grants any Product Truth authority (migration's own header comment, independently confirmed in `report1.186.md` §9 items 5–6, 9);
- both tables are RLS-enabled with **zero policies** — default-deny for every role lacking `BYPASSRLS` — and PUBLIC/`anon`/`authenticated` have no grant path to either table or any of the nine functions (`report1.186.md` §9 items 9–11);
- nothing in the GC-40 workstream invoked, exercised, exposed, or activated any parser helper function, the parser upload flow, or the bulk-import UI entry point against production — every command run in every GC-40 step was either a schema-mutating migration (via the CLI's own migration runner) or a read-only verification `SELECT` (`report1.186.md` §10, `report1.187.md` §8, `report1.182.md` §10).

## 7. Explicit Boundary — Migration Success Is Not Activation, Deployment, or Publication

Every GC-40 execution and reconciliation report in this chain carries the same explicit confirmation, and this package restates it plainly rather than leaving it implicit: applying these four migrations to production changes only database schema, constraints, RLS, and function bodies. It does **not**:

- activate the parser or bulk-import feature for any merchant;
- deploy, publish, or release any application code;
- change any AWS, Lambda, S3, IAM, Cloudflare, or Lovable configuration;
- change any Product Truth, Catalog, or Inventory authority boundary;
- authorize Stage 21 or any later Source 18 lifecycle stage by itself.

`report1.182.md`'s own closing paragraph states this explicitly: "This closure does not authorize production parser/bulk-import activation, application deployment/publication, or Stage 21+ lifecycle progression. Those remain separate Mission Control decisions." This Stage 21/22 work is itself the first Source 18 lifecycle progression that GC-40's closure enabled — and it, in turn, does not authorize Stage 23 acceptance, parser/bulk-import activation, or deployment (see `completion-report.md`).

## Conclusion

The Stage 19 Material Finding is fully and traceably resolved. The Migration 1 history incident is preserved as real history, not concealed. All four migrations are independently verified applied correctly, in canonical version, with no schema/security drift beyond each migration's own authored intent, and with the Catalog 19-command boundary and Inventory/Product Truth authority unchanged throughout. Parser/bulk-import production activation and application deployment remain unauthorized and unperformed.
