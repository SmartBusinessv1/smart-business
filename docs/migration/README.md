# Smart Business Migration Authority Index

## Current Authority

- **Current production state:** LIVE — production cutover and OAuth domain alignment complete and accepted
- **Current active migration mission:** NONE
- **CURRENT EXECUTABLE PACKAGE:** NONE
- **Current authoritative migration state:** `SB-MIG-1.2F` production application cutover and `SB-MIG-1.2F-A` production OAuth domain alignment are complete; their records are evidence, not reusable permission
- **Operational source of truth:** GitHub repository `SmartBusinessv1/smart-business`

No migration artifact is executable by default. File presence, a runbook, recommendation, draft authorization package, completion report, historical approval, SQL filename, or earlier mission does not create present execution authority.

## Default-Deny Execution Rule

A migration may be executed only through a new, current, explicit Founder- or Mission Control-authorized mission that identifies:

1. the exact migration package and SQL files;
2. the target environment;
3. the authorized actor;
4. the authorized repository, branch, and paths;
5. prerequisites and verified backups;
6. validation, evidence, and rollback controls;
7. the approved execution window; and
8. the approved commit and reporting workflow.

Any missing element, contradictory evidence, stale status, or unclear target requires a stop report to Mission Control. No AI, script, or human may infer permission from repository content alone.

## Status Taxonomy

- `CURRENT STATE — ACCEPTED, NOT EXECUTABLE`
- `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE`
- `SUPERSEDED — HISTORICAL EVIDENCE, NOT EXECUTABLE`
- `DRAFT OR PROPOSAL — NON-EXECUTABLE`
- `DEFERRED OR PENDING — NON-EXECUTABLE`
- `REJECTED OR CANCELLED — NON-EXECUTABLE`
- `ACTIVE AND EXECUTABLE — REQUIRES CURRENT EXPLICIT MISSION AUTHORITY`

`ACTIVE AND EXECUTABLE` applies only while a complete, unexpired mission expressly authorizes the exact execution. A completed or accepted mission never authorizes repetition.

## Migration-Family Status

| Family or mission | Evidence-backed current classification | Execution/acceptance evidence | Executable now | Treatment |
|---|---|---|---|---|
| `SB-MIG-1.0` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | Parent Phase 1 mission referenced by `SB-MIG-1.1`; no reusable execution authority | NO | Preserve references as predecessor evidence |
| [`SB-MIG-1.1`](./SB-MIG-1.1/README.md) | `SUPERSEDED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | Read-only discovery and draft planning; superseded by later preparation and cutover chain | NO | Preserve six audit/planning documents |
| [`SB-MIG-1.2`](./SB-MIG-1.2/README.md) | `SUPERSEDED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | Draft hardening/dry-run package; recommends but does not activate `SB-MIG-1.3` | NO | Preserve eight preparation documents |
| [`SB-MIG-1.2A`](./SB-MIG-1.2A/README.md) | `SUPERSEDED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | Draft rehearsal/runbook/readiness package; explicitly requires future authorization | NO | Preserve thirteen preparation documents |
| [`SB-MIG-1.2B`](./SB-MIG-1.2B/README.md) | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | OAuth implementation and completion evidence exists despite stale Draft headers | NO | Preserve eight evidence documents; Draft metadata is historical |
| [`SB-MIG-1.2C`](./SB-MIG-1.2C/README.md) | `SUPERSEDED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | Readiness and draft `SB-MIG-1.3` authorization candidate; no activation record | NO | Preserve ten readiness documents |
| [`SB-MIG-1.2D`](./SB-MIG-1.2D/README.md) and `SB-MIG-1.2D-A` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | Founder-guided follow-up resolved preview blocker; completion recorded in family reports | NO | Preserve eleven documents; stale Draft headers do not reopen work |
| [`SB-MIG-1.2E`](./SB-MIG-1.2E/README.md), `1.2E-A`, `1.2E-B`, `1.2E-C` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | Accepted hardening, test isolation, reproducibility, safety guard, and incident-recovery evidence | NO | Preserve twelve accepted documents and related incident evidence |
| `SB-MIG-1.2F` | `CURRENT STATE — ACCEPTED, NOT EXECUTABLE` | Mission Control memory records production application cutover COMPLETE | NO | Current production-state evidence |
| `SB-MIG-1.2F-A` | `CURRENT STATE — ACCEPTED, NOT EXECUTABLE` | Mission Control memory records OAuth domain alignment COMPLETE and deployment accepted | NO | Current production-state evidence |
| `SB-MIG-1.3` proposals | `DRAFT OR PROPOSAL — NON-EXECUTABLE` | Recommendation/readiness/authorization-candidate files exist; no explicit activation record exists | NO | Retain only as future mission inputs |
| `supabase/migrations/**` | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | Twelve SQL files record schema/implementation history and reproducibility inputs | NO | Never execute from presence; exact files require a new mission |
| `SB-OPS-PROD-SYNC-1.0` instr1.6 Phase A (`20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql`) | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | instruction1.7 authorized and executed production application on `gysgzasfcjvtrgaigfyn`; independently confirmed applied (`supabase migration list`, `local == remote`) and functioning (both link functions carry the reuse-guard logic; `postgres`'s temporary `catalog_link_executor` grant left zero residue). report1.7.md records full evidence | NO | Applied; a completed migration is not re-executable by policy regardless of file presence |
| `SB-OPS-PROD-SYNC-1.0` instr1.7 repair (`20260902140000_sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair.sql`) | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | instruction1.7 authorized and executed the single narrow repair separating `Mango`/`Milma Milk` into their own dedicated Inventory identities and neutralizing the controlled `+5` test movement via an auditable correction. Independently verified against production after execution: distinct non-null `inventory_item_id` values, zero duplicate `(business_id, inventory_item_id)` groups anywhere, `AVT Tea Powder`'s net stock at zero with its original movement preserved unmodified. report1.7.md records full evidence, including a full rehearsal against the isolated test project before this ran. instruction1.9/report1.9.md subsequently reconciled the isolated test project's own migration ledger (`migration repair --status applied`, metadata only — see "Environment-Specific Historical Migrations" below) so ordinary test `db push` runs no longer need this file temporarily removed; the migration itself was not touched | NO | Applied; a completed, precondition-guarded, self-verifying migration is not re-executable by policy regardless of file presence |
| `SB-OPS-PROD-SYNC-1.0` instr1.8 Phase B (`20260902150000_sb_ops_prod_sync_1_0_instr1_8_phase_b_inventory_item_uniqueness.sql`) | `COMPLETED — HISTORICAL EVIDENCE, NOT EXECUTABLE` | instruction1.8 authorized and executed production application on `gysgzasfcjvtrgaigfyn`, promoting the invariant preserved at `communication/evidence/SB-OPS-PROD-SYNC-1.0-instr1-6/phase-b-design-and-proof.md` unchanged. Immediately before this ran, production was independently re-confirmed at zero duplicate `(business_id, inventory_item_id)` groups. After deployment, independently confirmed: the constraint exists with exactly `(business_id, inventory_item_id)`; zero duplicate groups remain; `Mango`/`Milma Milk`'s dedicated links are byte-for-byte unchanged; the Phase A reuse guard is still present; RLS policy counts on `catalog_products`/`inventory_items` unchanged. Rehearsed against the isolated test project first, including a live proof there that the constraint rejects a second product reusing an already-claimed item. report1.8.md records full evidence | NO | Applied; a completed migration is not re-executable by policy regardless of file presence |

## Accepted and Completed Chain

The repository evidences a chain from discovery (`SB-MIG-1.1`) through hardening, rehearsal, OAuth, preview validation, infrastructure readiness, test isolation, reproducibility, incident recovery, production cutover, and OAuth domain alignment. That chain culminates in the current accepted production state recorded in `mission-control/mission_memory.md`:

- `SB-MIG-1.2F — Production Application Cutover: COMPLETE`;
- `SB-MIG-1.2F-A — Production OAuth Domain Alignment: COMPLETE`;
- Founder production runtime verification: PASSED; and
- production deployment: ACCEPTED.

Earlier documents retain their original chronological wording. Stale `DRAFT — submitted for Mission Control review` metadata describes the document state when written; it does not override later completion evidence or create present authority.

## SB-MIG-1.3 Boundary

The files named as an execution recommendation, readiness recommendation, or authorization package are proposals/candidates only. No current Mission Control instruction activates `SB-MIG-1.3`. They are non-executable unless a new mission meets every default-deny requirement above.

## Environment-Specific Historical Migrations

Some historical migrations are intentionally production-data-specific: their precondition checks are written to match one exact known runtime state (a specific business/product/item, verified before authorization) and correctly refuse to run anywhere else (`20260902140000_sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair.sql` is the first such case). Such a migration must never be edited, weakened, renamed, or removed to make it runnable elsewhere, and its data statements must never be executed against an environment whose data does not match its preconditions — including the isolated test project.

When that migration has already executed and is recorded in the environment it targeted, but the isolated test project's own migration ledger has it correctly unrecorded (because it was never, and should never be, executed there), the narrow, approved reconciliation is `supabase migration repair --status <applied|reverted> <version> --linked` (via `scripts/supabase-cli.mjs test migration repair ...`, never a bare CLI call) — targeted at the test project only, only after establishing that the target environment does not contain the identities the migration's preconditions reference. This writes one row to that environment's own `supabase_migrations.schema_migrations` bookkeeping table; it never executes the migration's SQL body and touches no application table. instruction1.9/report1.9.md is the precedent and full evidence for this pattern.

This is not a general license to mark migrations applied without execution. It applies only when a migration's authorized effect is intentionally tied to a specific, already-verified data state, and that state's absence from the target environment has been independently confirmed first.

## SQL History Boundary

The 12 files under `supabase/migrations/**` are version-controlled schema history and possible inputs to a future authorized mission. They are not an executable package, must not be replayed or applied merely because they exist, and were not changed by `SB-GOV-HOUSEKEEPING-1.6`.

## Evidence and Escalation

Primary current-state evidence is `mission-control/mission_memory.md`. Family-level evidence remains under `docs/migration/`, with incident evidence at `docs/incidents/SB-INC-2026-001-production-schema-loss.md`. Historical reports and archived communication remain immutable chronological evidence.

If any instruction, status label, runbook, SQL comment, or report appears to conflict with this index, stop and ask Mission Control to reconcile the evidence. Do not select or execute a package independently.
