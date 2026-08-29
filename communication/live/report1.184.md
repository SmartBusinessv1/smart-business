# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-40 — MIGRATION 2 EXECUTION-PATH STOP REPORT

**Report ID:** `report1.184`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-40 — Production Migration Controlled Execution`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.191.md`
**Date:** 2026-08-29

---

## 1. Exact Repository/Main SHA Used

`050152b7c961839fc46be33f81748739442efa03` (`HEAD` == `origin/main` at time of investigation).

Working tree carried one pre-existing, unrelated local modification (`src/routeTree.gen.ts`, a generated router file already modified before this session's work began) which was left untouched and is not part of any action described in this report.

## 2. Production Project Identity (Non-Secret)

- Project name: `smart-business`
- Project ref: `gysgzasfcjvtrgaigfyn`
- Region: `ap-south-1`
- Access path: the repository's guarded CLI wrapper (`scripts/supabase-cli.mjs production ...`), which prints the resolved target before any command and requires explicit `CONFIRM_PRODUCTION=yes` — used for every command below, all read-only.

## 3. Preflight Evidence (instruction1.191.md §2)

All six independently-verifiable preconditions were re-checked fresh against production and **PASS**:

1. **Project ref exactly `gysgzasfcjvtrgaigfyn`** — confirmed on every wrapper invocation header. **PASS**.
2. **Canonical Migration 1 recorded exactly as `20260810120000 — sb_p_1_11_gc_1_catalog_import_support_schema`** — confirmed via `supabase migration list --linked --project-ref gysgzasfcjvtrgaigfyn`: `{"local":"20260810120000","remote":"20260810120000", ...}`. **PASS**.
3. **Generated history version `20260829085110` absent** — confirmed: no such entry appears anywhere in the fresh `migration list` output. **PASS**.
4. **Migrations 2–4 remain unapplied** — confirmed via the same `migration list` call: `20260811090000`, `20260819120000`, `20260826120000` each show `"remote":""`. **PASS**.
5. **`catalog_import_batches` and `catalog_import_rows` exist with RLS enabled** — confirmed via a `pg_class`/`pg_namespace` existence-and-RLS query (this repository's established convention of using `pg_class` rather than `information_schema.tables` for existence checks, per the SB-INC-2026-001 incident lesson): both tables present, `relkind = 'r'`, `rls_enabled = true`. **PASS**.
6. **Locked Catalog command count exactly `19`** — confirmed via exact-name count query against `pg_proc`/`pg_namespace` for the 19 locked public Catalog command names: result `19`. **PASS**.
7. **Production recoverability available for the migration window** — per Mission Control's own instruction to execute ("Fresh production preflight is PASS, including recoverability confirmed from the current scheduled physical backup"), this item is stated as already confirmed by Mission Control. Claude Engineering has no tool access to independently verify Supabase backup/PITR status and did not attempt to; this item is recorded as Mission-Control-attested, not independently re-verified.

All preconditions in §2 that are within Claude Engineering's ability to check hold. **No precondition differs.** The STOP below is not a precondition failure — it is an execution-path finding under §3.

## 4. Investigation of the Authorized Execution Path (instruction1.191.md §3)

§3 directs: "Use the repository's guarded production Supabase migration path so the canonical migration version is preserved in migration history."

The Supabase CLI's remote-migration subcommands were enumerated (`supabase migration --help`) and each was checked against the requirement of applying **exactly** `20260811090000_sb_p_1_11_gc_1_security_correction.sql` without also applying `20260819120000` or `20260826120000`:

- **`supabase migration up`** — its own `--help` text states "Apply pending migrations **to local database**." This targets a local/dev Postgres instance, not a linked remote project, and is not applicable to production at all.
- **`supabase migration repair [version] --status applied|reverted`** — confirmed in GC-40A (`report1.183.md` §5) to only ever write rows in `supabase_migrations.schema_migrations`; it never executes a migration's SQL body. It cannot by itself apply Migration 2's schema changes.
- **`supabase db push [flags]`** — the only remote-apply mechanism. Its `--help` describes `--include-all` as "Include all migrations not found on remote history table," implying (and confirmed empirically below) that even the *default* invocation already targets every migration absent from remote history — there is no flag or variant that scopes it to a single named migration or a version range.

  A `--dry-run` was executed (no mutation) to confirm this empirically before drawing a conclusion:

  ```
  CONFIRM_PRODUCTION=yes node scripts/supabase-cli.mjs production db push --dry-run --linked --project-ref gysgzasfcjvtrgaigfyn
  ```

  Result — **all three currently-pending migrations, not just Migration 2**, are reported as what would be pushed:

  ```
  Would push these migrations:
   • 20260811090000_sb_p_1_11_gc_1_security_correction.sql
   • 20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql
   • 20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql
  ```

**Finding:** No supported invocation of the repository's guarded Supabase migration tooling exists that applies exactly Migration 2 against the linked production project while leaving Migrations 3 and 4 unapplied. Running `db push` as literally directed by §3 would, in a single operation, also apply Migration 3 and Migration 4 — both explicitly and repeatedly forbidden by instruction1.191.md §3 ("No later migration is authorized by this instruction"), §4 ("Do not proceed to Migration 3"), and §5 (Migration 3 and Migration 4 both listed under "Explicitly Not Authorized").

## 5. No Mutation Performed, No Workaround Improvised

Consistent with `docs/migration/README.md`'s Default-Deny Execution Rule ("Any missing element, contradictory evidence, stale status, or unclear target requires a stop report to Mission Control. No AI, script, or human may infer permission from repository content alone") and with instruction1.191.md's own repeated direction ("If any precondition differs, STOP and report to Mission Control. Do not improvise a repair" / "Any failed or ambiguous checkpoint is a STOP condition"):

- **No production mutation of any kind was performed.** Every command run against production in this task was read-only (`migration list`, `db query` SELECT statements) or a non-mutating `--dry-run`.
- **No migration file was moved, renamed, edited, or otherwise altered** — on disk or in the repository — at any point.
- No workaround (e.g., temporarily relocating or renaming Migration 3/4 files so `db push` would not see them, or executing Migration 2's SQL body through an ad hoc path outside the CLI's own migration runner and then using `migration repair` to record it) was executed. Two such candidate methods were identified during investigation and are surfaced below for Mission Control's consideration, but neither is explicitly authorized by instruction1.191.md as written, and this instruction — unlike `instruction1.189.md`/`instruction1.190.md` for GC-40A — does not delegate open-ended execution-method discretion to Claude Engineering. Selecting and executing one unilaterally on a production database, against an instruction whose literal directive cannot be carried out as written, would itself be the kind of improvisation the governing rules forbid.

## 6. Candidate Resolution Paths for Mission Control's Consideration

Presented for review only — **neither has been executed**:

**(a) Scoped `db push` via temporary, fully-reversible file relocation.** Move `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql` and `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql` out of `supabase/migrations/` (or rename their extension) for the sole duration of one `db push --linked --project-ref gysgzasfcjvtrgaigfyn` invocation, so the CLI's migration scanner sees only Migration 2 as pending; restore both files to their exact original path/name/content immediately afterward, verified via `git status`/`git diff` showing zero residual change. This uses the actual CLI migration-runner (so the canonical version and name are captured automatically, exactly as §3 intends) and touches no file content, only transient on-disk presence during the push.

**(b) Direct apply plus supported history repair.** Execute Migration 2's exact, unmodified SQL body via the guarded read/write query path, then run the already-proven `supabase migration repair 20260811090000 --status applied --linked --project-ref gysgzasfcjvtrgaigfyn` (the same supported mechanism used in `report1.183.md`) to record the canonical version in history. This avoids `db push` entirely but does not route the actual DDL execution through the CLI's own migration runner.

Both are technically capable of achieving exactly the scope instruction1.191.md §3 describes. Mission Control's explicit selection (or a revised instruction naming a different method) is required before either is attempted.

## 7. Confirmation — No Unrelated Action Occurred

- No AWS, Cloudflare, or Lovable action of any kind occurred.
- No application deployment occurred.
- No bulk-import feature was enabled.
- No Stage 21 or later lifecycle action occurred.
- No production business/application data was read beyond the exact non-secret metadata/existence queries in §3.
- Migration 2 was not applied. Migrations 3 and 4 were not applied.

## 8. Final Disposition

`GC-40 MIGRATION 2 EXECUTION — BLOCKED — NO SCOPED EXECUTION PATH AVAILABLE AS LITERALLY DIRECTED`

All independently-verifiable preflight preconditions pass. Migration 2 was not applied because the directed execution mechanism (`supabase db push` via the repository's guarded production path) has no way to apply `20260811090000_sb_p_1_11_gc_1_security_correction.sql` alone without also applying Migration 3 and Migration 4 in the same operation, which instruction1.191.md explicitly forbids. GC-40 remains stopped before Migration 2 pending Mission Control's review of §6 and a separate, explicit instruction naming an authorized execution method.
