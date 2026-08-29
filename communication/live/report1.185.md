# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — PRODUCTION MIGRATION 2 SCOPED EXECUTION REPORT

**Report ID:** `report1.185`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-40 — Production Migration Controlled Execution`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.192.md`
**Date:** 2026-08-29

---

## 1. Exact Repository/Main SHA Used

`017bf4e8cbabeca8c859935931bd682f6783d6e4` (`HEAD` == `origin/main`, includes the merged `instruction1.192.md` and the merged `report1.184.md`).

The working tree carried one pre-existing, unrelated local modification (`src/routeTree.gen.ts`, a generated router file already modified before this task began) which was left untouched throughout and is not part of any action in this report.

## 2. Production Project Identity (Non-Secret)

- Project name: `smart-business`
- Project ref: `gysgzasfcjvtrgaigfyn`
- Region: `ap-south-1`
- Access path: the repository's guarded CLI wrapper (`scripts/supabase-cli.mjs production ...`), which prints the resolved target before any command and requires explicit `CONFIRM_PRODUCTION=yes` — used for every command below.

## 3. Fresh Preflight Evidence (instruction1.192.md §3)

All independently-verifiable preconditions re-checked immediately before execution:

1. Project ref exactly `gysgzasfcjvtrgaigfyn` — confirmed on every wrapper invocation header. **PASS**.
2. Migration 1 recorded exactly as `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema` — confirmed via `supabase migration list`. **PASS**.
3. Generated version `20260829085110` absent — confirmed absent from the full migration list. **PASS**.
4. Migration 2 still unapplied — `20260811090000` showed `remote:""`. **PASS**.
5. Migration 3 (`20260819120000`) and Migration 4 (`20260826120000`) still unapplied — both showed `remote:""`. **PASS**.
6. `catalog_import_batches` and `catalog_import_rows` exist with RLS enabled — confirmed via `pg_class`/`pg_namespace` query: both `relkind='r'`, `relrowsecurity=true`. **PASS**.
7. Locked Catalog command count exactly `19` — confirmed via exact-name count query. **PASS**.
8. Production recoverability — per instruction1.192.md §3.8, Mission Control has already verified the current scheduled physical backup with Restore capability; no condition change was reported. Recorded as Mission-Control-attested, not independently re-verifiable by Claude Engineering (no backup-status tool access).

## 4. Byte-Identity Evidence for Migration 3 and Migration 4 (Before Relocation)

SHA-256 recorded before any file movement:

```
42b809a1c7b5fcaf19cee70c58e667696bf1475bdfd8acc96f3288e37607b65e  20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql
15c091e32ced5a33ac98aa9f446bec013bdd76922f9b298f2b9c3afeb5906be0  20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql
```

Both files were then moved out of `supabase/migrations/` to a local, non-repository scratch location (never committed, never pushed), leaving `git status` showing them as ordinary unstaged working-tree deletions.

## 5. Scoped Dry-Run Evidence (instruction1.192.md §4.3)

With Migration 3 and 4 files relocated, a guarded production dry-run was executed:

```
CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --dry-run --linked --project-ref gysgzasfcjvtrgaigfyn
```

Result — **exactly one** migration listed:

```
Would push these migrations:
 • 20260811090000_sb_p_1_11_gc_1_security_correction.sql
```

This matched the required condition in instruction1.192.md §4.3–§4.4 exactly, authorizing the real push.

## 6. Exact Guarded Production Execution

```
CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --linked --project-ref gysgzasfcjvtrgaigfyn
```

Output:

```
Applying migration 20260811090000_sb_p_1_11_gc_1_security_correction.sql...
{"upToDate":false,"dryRun":false,"migrations":["20260811090000_sb_p_1_11_gc_1_security_correction.sql"],"seeds":[],"roles":[],"message":"Finished supabase db push."}
```

Only Migration 2 was applied, through the Supabase CLI's own migration runner (not `migration repair`, not direct SQL execution), so the canonical version `20260811090000` was captured automatically.

## 7. Immediate Restoration and Zero-Residual Verification

Migration 3 and 4 files were moved back to their exact original paths immediately after the push completed. Verification:

- SHA-256 after restoration: **identical, byte-for-byte**, to the before hashes in §4 (`diff` of the two hash files: zero differences).
- `git status --porcelain`: shows only the pre-existing unrelated `src/routeTree.gen.ts` modification — no residual change attributable to the relocation.
- `git diff --stat -- supabase/migrations/`: empty — zero diff on the migrations directory.

The temporary relocation was never committed or pushed, per instruction1.192.md §4's closing constraint.

## 8. Exact Recorded Migration Version/Name After Execution

`supabase_migrations.schema_migrations` (direct query) shows exactly two Catalog-package rows, in this exact form:

```json
[
  { "version": "20260810120000", "name": "sb_p_1_11_gc_1_catalog_import_support_schema" },
  { "version": "20260811090000", "name": "sb_p_1_11_gc_1_security_correction" }
]
```

No row exists for `20260829085110`, `20260819120000`, or `20260826120000`. Cross-checked independently via `supabase migration list`, which shows `20260811090000` with `local == remote == "20260811090000"`, and `20260819120000`/`20260826120000` both still `remote:""`.

## 9. Postflight Verification (instruction1.192.md §5)

| # | Checkpoint item | Result |
|---|---|---|
| 1 | Migration history records exactly `20260811090000 — sb_p_1_11_gc_1_security_correction` | **PASS** — §8 |
| 2 | No generated duplicate migration version exists | **PASS** — §8, exactly two rows, no `20260829085110` |
| 3 | Migration 1 remains correctly recorded | **PASS** — §8 |
| 4 | Migrations 3 and 4 remain unapplied | **PASS** — §8, both checks |
| 5 | `catalog_import_rows.follow_up_state` exists with authorized definition/default | **PASS** — column present: `data_type=jsonb`, `column_default='{}'::jsonb`, `is_nullable=NO`, matching the migration exactly |
| 6 | `catalog_import_rows_resolution_pair` is the corrected constraint | **PASS** — `pg_get_constraintdef` returned the exact corrected three-clause CHECK (CREATED/FAILED logic), matching the migration body verbatim |
| 7 | `delete_catalog_product(uuid, uuid)` retains signature; authorized body replacement present | **PASS** — identity args `p_idempotency_key uuid, p_product_id uuid` unchanged; `prosecdef=true`; function definition confirmed to reference `catalog_import_rows` (the new fifth dependent-history check) |
| 8 | `catalog_lifecycle_executor` has only the intended narrow SELECT path on `catalog_import_rows` | **PASS** — exactly one grant row (`SELECT`) and exactly one policy row (`lifecycle_executor_select_own_business`, `roles={catalog_lifecycle_executor}`, `cmd=SELECT`) |
| 9 | Temporary `postgres` membership in `catalog_lifecycle_executor` not left behind beyond pre-existing platform baseline | **PASS** — see §10 investigation below |
| 10 | Function ownership and effective grants match intended narrow posture | **PASS** — owner is still `catalog_lifecycle_executor` (no ownership transfer occurred); grants unchanged from narrow SELECT-only posture |
| 11 | Locked Catalog command count remains exactly `19` | **PASS** — re-queried post-migration, unchanged |
| 12 | No Inventory authority, Product Truth boundary, or unrelated production state changed | **PASS** — every command executed in this task was either read-only or the single authorized migration; the migration body itself touches only `catalog_import_rows` (column/constraint), `delete_catalog_product`, and `catalog_lifecycle_executor` grants/policy — no Inventory object was referenced |
| 13 | Relocated files restored byte-identical, no repository diff | **PASS** — §7 |

## 10. Investigation of Checkpoint Item 9 (Role-Membership Ambiguity, Resolved)

An initial membership query found `postgres` **is** a member of `catalog_lifecycle_executor` after the migration completed, which required investigation before it could be accepted as passing (an unexplained membership would be an ambiguous checkpoint under instruction1.192.md's STOP rule).

A detailed query against `pg_auth_members` resolved this precisely:

```json
{ "group_role": "catalog_lifecycle_executor", "member_role": "postgres", "grantor_role": "supabase_admin", "admin_option": true }
```

The remaining membership edge's grantor is `supabase_admin`, not `postgres` — this is **not** the edge Migration 2 created (Migration 2's own `GRANT catalog_lifecycle_executor TO postgres;` was executed, and necessarily granted, by `postgres` itself as grantor, per the migration's comment on its self-granting CREATEROLE mechanic). A cross-check across all seven `catalog_*_executor` roles confirmed `postgres` holds the identical `supabase_admin`-granted membership in every one of them (`catalog_cost_executor`, `catalog_identity_executor`, `catalog_lifecycle_executor`, `catalog_link_executor`, `catalog_pricing_executor`, `catalog_read_executor`, `catalog_tax_executor`) — a uniform, symmetric, platform-level baseline entirely independent of this migration.

This directly confirms the migration's own documented claim: the temporary self-granted edge that Migration 2 added was successfully revoked by its closing `REVOKE catalog_lifecycle_executor FROM postgres;`, and the only membership now present is the pre-existing `supabase_admin` baseline that this migration never touched and does not own. Checkpoint item 9 is **PASS**, not ambiguous.

## 11. Confirmation — No Unrelated Action Occurred

- No AWS, Cloudflare, or Lovable action of any kind occurred.
- No application deployment occurred.
- No bulk-import feature was enabled.
- No Stage 21 or later lifecycle action occurred.
- No production business/application data was read beyond the exact non-secret metadata/existence queries in this report.
- No migration file content, filename, or repository-tracked state was changed — the relocation was local-only, never committed, never pushed, and fully reversed with verified byte-identity.
- Migration 3 and Migration 4 were not applied.

## 12. Final Disposition

`GC-40 MIGRATION 2 SCOPED EXECUTION — PASS`

Migration 2 (`20260811090000_sb_p_1_11_gc_1_security_correction.sql`) was applied to production through the Supabase CLI's own guarded migration runner, scoped to exactly that one migration via the Mission-Control-authorized temporary, fully-reversible relocation of Migration 3 and Migration 4. The canonical version `20260811090000` is correctly recorded in migration history with no generated duplicate. All thirteen post-migration checkpoint items pass, including the role-membership item after direct investigation. Migration 3 and Migration 4 remain unapplied, and no unrelated production, application, or infrastructure state changed. GC-40 remains stopped after Migration 2 pending Mission Control's separate review and explicit authorization before Migration 3 may begin.
