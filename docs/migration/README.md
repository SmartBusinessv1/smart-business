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
| `SB-OPS-PROD-SYNC-1.0` instr1.6 Phase A (`20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql`) | `DRAFT OR PROPOSAL — NON-EXECUTABLE` | Authored and functionally verified against the isolated test project (`drravyyauixltoihzmwo`) only, via a real `supabase db push`; report1.6.md records full evidence | NO | Independent of the known Mango/Milma Milk duplicate (adds no constraint, only a server-side reuse check for future link attempts); still requires its own new, explicit production-execution mission per this index's Default-Deny rule before it may run against `gysgzasfcjvtrgaigfyn` |
| `SB-OPS-PROD-SYNC-1.0` instr1.6 Phase B (design only — [`communication/evidence/SB-OPS-PROD-SYNC-1.0-instr1-6/phase-b-design-and-proof.md`](../../communication/evidence/SB-OPS-PROD-SYNC-1.0-instr1-6/phase-b-design-and-proof.md)) | `DEFERRED OR PENDING — NON-EXECUTABLE` | Mission Control packaging correction (`smart-business#463`): removed from `supabase/migrations/**` because it is mechanically proven to fail against production's current known duplicate, and leaving a migration in that state on `main` is itself a deployment hazard. The invariant, rationale, and proof are preserved as a non-executable design/evidence document only — no `.sql` file for this exists anywhere in the repository | NO | Blocked ahead of Phase A: requires the Phase C repair (report1.6.md) to be designed, separately authorized, and executed against production first. Only then may this design be authored as a new, timestamped migration file and that file's own production execution separately authorized |

## Accepted and Completed Chain

The repository evidences a chain from discovery (`SB-MIG-1.1`) through hardening, rehearsal, OAuth, preview validation, infrastructure readiness, test isolation, reproducibility, incident recovery, production cutover, and OAuth domain alignment. That chain culminates in the current accepted production state recorded in `mission-control/mission_memory.md`:

- `SB-MIG-1.2F — Production Application Cutover: COMPLETE`;
- `SB-MIG-1.2F-A — Production OAuth Domain Alignment: COMPLETE`;
- Founder production runtime verification: PASSED; and
- production deployment: ACCEPTED.

Earlier documents retain their original chronological wording. Stale `DRAFT — submitted for Mission Control review` metadata describes the document state when written; it does not override later completion evidence or create present authority.

## SB-MIG-1.3 Boundary

The files named as an execution recommendation, readiness recommendation, or authorization package are proposals/candidates only. No current Mission Control instruction activates `SB-MIG-1.3`. They are non-executable unless a new mission meets every default-deny requirement above.

## SQL History Boundary

The 12 files under `supabase/migrations/**` are version-controlled schema history and possible inputs to a future authorized mission. They are not an executable package, must not be replayed or applied merely because they exist, and were not changed by `SB-GOV-HOUSEKEEPING-1.6`.

## Evidence and Escalation

Primary current-state evidence is `mission-control/mission_memory.md`. Family-level evidence remains under `docs/migration/`, with incident evidence at `docs/incidents/SB-INC-2026-001-production-schema-loss.md`. Historical reports and archived communication remain immutable chronological evidence.

If any instruction, status label, runbook, SQL comment, or report appears to conflict with this index, stop and ask Mission Control to reconcile the evidence. Do not select or execute a package independently.
