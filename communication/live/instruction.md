# SMART BUSINESS — REPOSITORY COMMUNICATION

# Instruction — Phase 1 Blueprint Lifecycle Classification Cleanup

**Mission ID:** `SB-DOC-PHASE1-CLASSIFICATION-1.0`

**Mission Name:** `Phase 1 Blueprint Lifecycle Classification Cleanup`

**From:** Mission Control

**To:** `Claude Code / Repository Documentation Operator`

**Status:** `ACTIVE AFTER HUMAN MERGE OF ACTIVATION PR`

**Date:** `2026-09-03`

---

## 1. Objective

Make the Phase 1 Blueprint area truthfully communicate lifecycle state to a future AI or human reader.

This is a **classification correction, not consolidation**. Do not move all SB-P-1.11 material into one folder. Preserve the repository's layered structure for Blueprints, implementation specifications, implementation evidence, operations, verification, and historical communication.

## 2. Canonical Baseline

Start only after the activation/archive PR for this instruction is human-merged.

Pull latest `SmartBusinessv1/smart-business/main` and verify PR `#472` is present with merge commit `e84f212e9e65aa6bb3ba22b14655e6402611a50e` or a later descendant.

## 3. Required Classification Correction

Move the remaining completed SB-P-1.11 gap-closure specification:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

→

`docs/phase-1-mission-blueprint/completed/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

Reason: its own lifecycle continuity note already records that its Build Now gap-closure scope was subsequently authorized, implemented, and absorbed into the formally accepted SB-P-1.11 mission. Leaving it under `active/` now falsely suggests unfinished active SB-P-1.11 work.

Preserve its historical body and lock-time metadata. Do not rewrite old status text as though it had always been completed; the existing lifecycle note supplies the temporal distinction.

## 4. Repair Current References

Search the current repository for references to the old `active/` path.

Update **current, forward-looking or traceability references** that would otherwise become stale, including at minimum if still present:

- `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md`
- `docs/implementation/SB-P-1.11/evidence/README.md`
- `src/lib/catalog-presets.ts` traceability comment
- `docs/phase-1-mission-blueprint/README.md` if needed so its folder/lifecycle explanation matches the resulting repository state

Do not mechanically rewrite historical communication archives merely because they mention the old path. Those references are evidence of where the file lived at that historical time and should remain unchanged unless a current index explicitly needs a present-location pointer.

## 5. Desired Resulting Structure

After the change:

- `docs/phase-1-mission-blueprint/active/` should contain no active SB-P-1.11 mission artifact; `.gitkeep` may remain.
- completed Product Blueprint and directly coupled completed blueprint-stage records remain under `completed/`.
- implementation EIS files already under `implementation/` stay there.
- `docs/implementation/SB-P-1.11/**` stays where it is.
- `docs/operations/**` stays where it is.
- `docs/verification/**` stays where it is.
- `communication/missions/**` and `communication/archive/**` remain historical evidence in place.

Do not create a giant SB-P-1.11 completed folder and do not flatten repository layers.

## 6. Reader-Clarity Test

A new AI or human entering the repository should be able to infer, without chat history:

1. SB-P-1.10 and SB-P-1.11 are completed/formally accepted Product Missions.
2. The old gap-closure EIS is completed historical specification evidence, not current active work.
3. `active/` represents genuinely active Phase 1 Blueprint work only.
4. implementation, operations, verification, and archived communication remain discoverable in their specialized locations.
5. the canonical cross-mission continuity record remains the bridge from historical state to current production state.

If a current path/index contradicts these five statements, repair the smallest necessary reference.

## 7. Boundaries

Documentation classification/reference cleanup only, except for path-only traceability comments in source files.

Do not change application behavior, Product Truth, SQL, migrations, RLS, grants, Auth, Supabase, Lovable, DNS, AWS, dependencies, runtime configuration, or production data.

Do not reopen SB-P-1.10 or SB-P-1.11 product decisions.

Do not modify historical archive bodies merely to modernize paths.

No self-merge.

## 8. Verification

Before reporting:

- confirm the old file no longer exists under `active/`;
- confirm the moved file exists under `completed/`;
- confirm no **current** broken reference to the old path remains outside intentionally historical archives;
- confirm `active/` accurately represents current lifecycle state;
- run the repository Markdown Quality Gate;
- run `git diff --check`;
- verify changed paths are bounded to the classification/reference cleanup;
- verify no secrets/credentials were introduced.

## 9. Required Reply

Reply only through:

`communication/live/report.md`

Include exact files moved/updated, references intentionally left historical, verification results, PR number/head SHA, and final status `PASS`, `PARTIAL`, or `BLOCKED`.
