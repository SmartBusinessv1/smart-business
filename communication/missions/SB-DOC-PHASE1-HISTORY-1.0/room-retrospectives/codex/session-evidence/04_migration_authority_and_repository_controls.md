# Codex Evidence 04 — Migration Authority and Repository Controls

## Session / Evidence Identity

- **Evidence number:** 04
- **Time period:** 2026-08-01 through 2026-08-02
- **Missions:** SB-GOV-HOUSEKEEPING-1.6 through 1.8
- **Role:** Migration-history auditor, authority-boundary verifier, repository-control executor/verifier
- **Repository/environment:** Canonical repository and GitHub repository settings evidence
- **Evidence basis:** `ARTIFACT-ATTRIBUTED CODEX EVIDENCE`
- **Primary artifacts:** Codex migration inventories/reconciliation reports and archived branch-protection evidence
- **Limitations:** Historical migration records describe execution at their recorded checkpoints; they are not current production verification. GitHub settings can change and require live revalidation before reliance.
- **Attribution confidence:** High for Codex reports; any database execution named inside them remains attributed to the recorded operator/platform actor.

## Work Codex Actually Performed

### Reviewed and Verified

- Inventoried 68 migration-related documents, SQL history, and their authority/status families.
- Separated executable authority from historical migration presence and contained draft families.
- Reconciled stale mission-memory and reference records without re-running migrations.
- Verified protected-main controls, pull-request requirement, Markdown Quality Gate, conversation resolution, force-push blocking, and deletion blocking.

### Challenged and Discovered

- Migration-file presence was repeatedly vulnerable to being mistaken for permission to execute.
- Historical completion records and current execution authority needed explicit separation.
- Branch protection claims required live API/control evidence, not policy prose alone.
- A blocked or unavailable credential/test path must remain a scoped limitation rather than be bypassed.

### Implemented Under Explicit Authority

- Added default-deny migration guidance and AI execution guards.
- Applied approved branch-protection configuration and recorded enforcement-test evidence.
- Corrected mission-memory/reference drift within exact authorized paths.

### Explicitly Did Not Do

- Did not execute or re-execute migrations during documentation housekeeping.
- Did not mutate Supabase or production.
- Did not weaken protection to make tests pass.
- Did not equate a successful push or CI check with Mission Control acceptance.

## Important Technical Judgements

- A migration is source history; execution requires separate environment- and actor-specific authority.
- Database execution state and repository file state are different evidence layers.
- Protection is credible only when denial paths—force push and deletion—are exercised or independently verified.
- Credentials intentionally unavailable to a reviewer are a security boundary, not a defect to circumvent.

## Mistakes / Weak Assumptions / Corrections

- **MISTAKE / FAILURE MODE:** Assume a committed migration is executable. **→ CORRECTION:** Require exact package, environment, actor, safeguards, and reporting authority. **→ DURABLE LESSON:** Migration presence is not migration execution.
- **MISTAKE / FAILURE MODE:** Infer branch protection from documentation. **→ CORRECTION:** Read live settings and test prohibited operations safely. **→ DURABLE LESSON:** Controls require enforcement evidence.
- **MISTAKE / FAILURE MODE:** Re-run production to correct documentation. **→ CORRECTION:** Repair the evidence layer narrowly. **→ DURABLE LESSON:** Documentation defects do not authorize runtime mutation.
- **MISTAKE / FAILURE MODE:** Mark blocked database tests as PASS. **→ CORRECTION:** Record `INSUFFICIENT EVIDENCE` or blocked with exact missing credential. **→ DURABLE LESSON:** Not disproven is not verified.

## Capabilities Demonstrated

- Migration lineage and authority-state reconstruction.
- Repository-versus-runtime evidence separation.
- Protected-branch configuration and denial-path verification.
- Default-deny execution guard design.
- Exact reference and mission-memory reconciliation.

## Tools / Systems Used

| Capability | Demonstrated use | Limitation | Authority boundary |
|---|---|---|---|
| Git/repository search | Migration and status inventory | Does not show live DB state | Documentation review |
| GitHub settings/API evidence | Branch protection and required checks | Point-in-time configuration | Authorized repository administration only |
| Safe push/denial tests | Force-push/deletion blocking evidence | Must not damage branches | Bounded verification |
| Markdown registers | Migration authority map | Records are not execution | No SQL authority |
| Supabase evidence records | Historical environment conclusions | Not independently current | No mutation |

## Current vs Historical Status

- **CURRENT — STILL VALID:** Default-deny migration execution and protected-main/no-self-merge principles.
- **HISTORICAL — SUPERSEDED:** Exact migration counts and live GitHub settings are checkpoint evidence; current state must be reverified.
- **ATTRIBUTION UNRESOLVED:** Some historical database execution actors cannot be established from Codex reports alone and must remain source-scoped.

## Evidence Pointers

- `communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/migration-inventory.md`
- `communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/migration-authority-evidence.md`
- `communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/ai-execution-guard-report.md`
- `communication/missions/SB-GOV-HOUSEKEEPING-1.6/codex/final-reconciliation-report.md`
- `communication/missions/SB-GOV-HOUSEKEEPING-1.7/codex/per-file-inventory-validation.md`
- `communication/archive/SB-GOV-HOUSEKEEPING-1.8/codex/branch-protection-configuration-report.md`
- `communication/archive/SB-GOV-HOUSEKEEPING-1.8/codex/enforcement-test-evidence.md`
- `docs/migration/README.md`

## Lessons for Final Synthesis

- Verify the actual control and environment state before relying on it.
- Never cure an evidence gap by broadening authority.
- Denial-path evidence is as important for repository administration as for application security.
