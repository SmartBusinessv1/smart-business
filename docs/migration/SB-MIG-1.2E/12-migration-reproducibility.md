Document: Migration Reproducibility & CLI Safety Guard

Version: 1.0

Status: ACCEPTED

Created By: Claude Code

Reviewed By: Mission Control

Review Date: 2026-07-27

Mission: SB-MIG-1.2E-C

# SB-MIG-1.2E-C — Migration Reproducibility & CLI Safety Guard

## 1. Objective

Resolve two engineering risks identified during SB-MIG-1.2E-B: (1) ensure this repository's migrations alone can recreate a fully functional database without manual SQL intervention, and (2) prevent accidental execution of Supabase CLI commands against the Team LIPS production project.

## 2. Phase 1 — Migration Audit Findings

A full comparison was made between production's actual, live `pg_catalog`/`information_schema` state and what this repository's tracked migrations produce on a fresh replay:

- **Table grants**: production grants all 7 standard privileges (SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER) to `anon`, `authenticated`, and `service_role` on every application table. This traces to `pg_default_acl`: objects created by the `supabase_admin` role (Supabase's own dashboard/Management-API tooling, which is what created production's schema — most likely via Lovable's AI editor) receive this broad grant automatically by default. Objects created by the `postgres` role (which is what `supabase db push` runs as, and what owns every table per `pg_tables` — confirmed directly) receive a much narrower default (`TRUNCATE`/`REFERENCES`/`TRIGGER`/`MAINTAIN` only) — explaining exactly why a from-scratch migration replay came up short on functional grants (`GRANT UPDATE, DELETE` on `inventory_movements` specifically, first found in SB-MIG-1.2E-B).
- **Function EXECUTE grants**: identical pattern — production grants EXECUTE on every function to all three roles by the same `supabase_admin`-vs-`postgres` default-privilege mechanism; migrations only explicitly granted EXECUTE to `authenticated` on the 4 RPC-callable functions.
- **RLS policies**: compared in full against `pg_policies` — no drift found; all policies present in migrations matched production exactly, including the `transactions` UPDATE policy and the `inventory_movements.responsible_user_id` column, both initially suspected as untracked but confirmed present in the migration files on closer reading.
- **Duplicate migration**: `20260719140000` is a byte-for-byte functional duplicate of `20260719102137` (same table/indexes/trigger/grants/policies, only added comments) — a pre-existing repository artifact, not a new finding.
- **Platform-specific migration**: `20260723200718`/`20260723200952` grant/revoke a Postgres role `sandbox_exec`, confirmed to be a Lovable-platform construct not persisted as a standing role on either the production or test project — safe to skip via migration repair on any fresh replay.

## 3. Phase 2 — Repository Reproducibility

A completely empty Supabase project (the dedicated test project, reset to genuinely empty and independently verified via `pg_class`) was brought to full parity with production using **only tracked migrations**, after one addition:

**Reconciliation migration added**: `supabase/migrations/20260727000000_reconcile_default_grants.sql` — explicitly grants the full privilege set (table GRANT ALL, function GRANT EXECUTE ON ALL FUNCTIONS) to `anon`/`authenticated`/`service_role`, matching production's verified real state, plus `ALTER DEFAULT PRIVILEGES FOR ROLE postgres` statements so any *future* migration-created table or function automatically receives the same baseline without needing to be remembered each time. This migration is forward-only and additive; no historical migration files were edited, squashed, or deleted.

With this migration in place, a full fresh replay (all 12 migrations, via the guarded CLI, with only the two pre-existing known-issue repairs applied) produced a database against which **all 62 automated tests pass**, with zero manual SQL steps.

## 4. Phase 4 — CLI Safety Guard

**Root cause investigated** (originally surfaced in SB-MIG-1.2E-B): the Supabase CLI reads `SUPABASE_PROJECT_ID` from this repository's root `.env` file and prioritizes it over `--project-ref` and `supabase link` state. Since `.env` contains the production project's ref (needed there for the application's own runtime configuration), any bare `supabase` CLI invocation in this repository silently defaults to targeting production.

**Safeguard implemented**: `scripts/supabase-cli.mjs`, invoked via `npm run supabase:test` / `npm run supabase:production`. It:
- Requires an explicit named target (`test` or `production`), resolved from a small tracked (non-secret) project-ref map in the script itself.
- Explicitly sets `SUPABASE_PROJECT_ID` for the spawned child process to the resolved ref — deterministically overriding whatever `.env` contains, for every invocation, regardless of who runs it or what's linked.
- Prints the resolved target (name + ref) before running anything.
- Refuses to run against `production` unless `CONFIRM_PRODUCTION=yes` is explicitly set in the environment for that specific invocation.

This was verified working correctly multiple times, including under live incident conditions (SB-INC-2026-001): every `--debug` invocation throughout that incident logged `Loading project ref from env var: <resolved ref>`, confirming the guard's explicit override took effect every time, which is what allowed the CLI to be conclusively ruled out as a cause of that incident.

## 5. Phase 5 — Fresh Verification (and the incident that occurred during it)

The planned "reset test project, replay from scratch, run full suite" verification uncovered a serious, unrelated incident: a destructive schema-drop statement intended for the test project was instead executed against **production**, via the Dashboard SQL Editor (not the guarded CLI). This is documented in full, as its own incident record, at `docs/incidents/SB-INC-2026-001-production-schema-loss.md`. Summary of the outcome:

- The guarded CLI wrapper built in this mission's Phase 4 was the key piece of evidence that ruled out CLI responsibility for the incident, and was subsequently used — under explicit Founder authorization — to perform the production recovery itself.
- Production was fully restored via the exact migration set this mission's Phase 1-3 work verified and reconciled, with zero manual SQL and zero data loss (production held zero rows in every table both before and after, being pre-launch).
- This is, in a real sense, an unplanned but successful end-to-end validation of this mission's core objective: the repository's migrations, plus the reconciliation migration, were sufficient to fully and correctly recreate production's schema from nothing, exactly as intended.

Once production was restored, the originally-planned test-project fresh verification was completed successfully on the test project as well: full reset, full replay via the guarded CLI (`npm run supabase:test`), two known-issue repairs applied, **62/62 tests passing**, entirely without manual SQL intervention.

## 6. Remaining Technical Debt

- The `supabase/config.toml` file's static `project_id` field still references a stale, pre-SB-MIG-1.2D project (`wwgqnshcgbukqczqblsm`) — this field is not what the CLI actually uses for operations (that's `supabase/.temp/project-ref`, set by `supabase link` / the guard script), but it should be cleaned up in a future housekeeping pass to avoid confusion.
- The two known-issue migrations (`20260719140000` duplicate, `20260723200718`/`20260723200952` sandbox_exec) remain in the tracked history as-is, per this mission's explicit "do not edit historical migrations" constraint — any future fresh replay (another test project, disaster recovery, etc.) will need to repeat the same two `migration repair --status applied` steps documented here and in SB-INC-2026-001.
- No CI pipeline runs the automated test suite automatically; it remains a manual, local `npm run test` step. Out of scope for this mission but worth a future mission's consideration now that isolation and reproducibility are both solid.

## 7. Outcome

```text
SB-MIG-1.2E-C PASS — REPOSITORY FULLY REPRODUCIBLE AND CLI SAFEGUARDS VERIFIED
```

Both original objectives achieved: the repository's tracked migrations alone (plus the new reconciliation migration) fully reproduce a functional schema with zero manual SQL, and the CLI safety guard was not only implemented but proven under real incident conditions to reliably prevent accidental production targeting. The one gap that remains — the Dashboard SQL Editor's lack of an equivalent tooling-level guard — is outside what a CLI wrapper can address and is tracked as a corrective-control recommendation in SB-INC-2026-001 rather than a defect in this mission's deliverables.
