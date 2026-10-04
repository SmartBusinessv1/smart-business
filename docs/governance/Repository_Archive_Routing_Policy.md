# Repository Archive Routing Policy

**Type:** Operational routing guidance. This is **not** constitutional or governance authority. Authority and precedence are defined by Source 17 (`merge/active/17_AI_Operations_Manual.md`); communication archiving is governed by the Communication Protocol §26 (`communication/AI_Communication_and_Handover_Protocol.md`).
**Established:** 2026-10-04 (SB-OPS-REPO-HOUSEKEEPING-1.7, HK-071)

## Purpose

The repository has six locations that hold archived, completed or historical material. Each one serves a different material class under different rules. This policy describes what each location holds today, whether it remains in use, and where new material of the same class should go.

There is **no single universal archive**. The repository evidence does not support one, and existing contents stay where they are for provenance.

## Routing Table

| # | Location | What it holds today | State | Existing contents | Forward destination for new material of this class |
|---:|---|---|---|---|---|
| 1 | `communication/archive/<MISSION-ID>/` | Frozen copies of completed `communication/live/` exchanges per mission (18 packages, including pre-format packages and archive-only missions such as SB-GOV-HOUSEKEEPING-1.8) | **Active** archive mechanism | Immutable. Protocol §26: never rewritten; pre-format packages are not retrofitted | Continue here: at mission closure, archive the live exchange into `communication/archive/<MISSION-ID>/` per Protocol §26. The durable mission record **stays** in `communication/missions/<MISSION-ID>/` and is not moved |
| 2 | `docs/engineering/eos/archive/` | `README.md` only, a boundary marker created 2026-08-03 | **Active boundary, empty** | Keep the README; no other content exists | Historical EOS artifacts only, and only under the README's rules: clearly historical name, recorded justification, manifest entry, and explicit Mission Control authorization |
| 3 | `Project Source File Archive/` | The 25 legacy project-source files replaced by the Canonical Project Source Set (archived by SB-GOV-HOUSEKEEPING-1.3, 2026-08-02), plus a successor-mapping README | **Closed legacy archive** | Must stay in place, byte-identical. Its README prohibits deletion, modification, rewrite, restoration or reactivation without Founder-approved governance | **None.** Do not add material. A future superseded canonical source is handled by the Source Set change control (`docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`); Git history preserves predecessors |
| 4 | `docs/phase-1-mission-blueprint/completed/` | Completed Product Blueprints and approved historical Blueprint-area records (16 files) | **Active lifecycle stage** (not a general archive) | Stay in place; other records link to them | Product Blueprints only: move from `active/` to `completed/` when the mission completes through the approved governance process (`docs/phase-1-mission-blueprint/README.md`) |
| 5 | `merge/merged/` | `.gitkeep` only. The planned consolidation output location was never used; consolidations landed directly as canonical sources in `merge/active/` | **Unused (historical plan)** | Keep `.gitkeep` | **None.** Not a destination. Canonical-source consolidation follows the Source Set change control (see `merge/README.md`, Current Role) |
| 6 | `reports/` (repository root) | Two governance comparison reports from 2026-07-30 (`SB-GOV-COMPARE-1.0`, `-1.1`), cited as replacement evidence by `Project Source File Archive/README.md` | **Legacy, historical** | Must stay in place; the legacy archive cites these paths | **None.** New mission reports go in `communication/missions/<MISSION-ID>/`. Repository-wide audit reports go in `docs/audits/` |

## Related Destinations (not archives)

| Material | Location |
|---|---|
| Durable mission records (README, reports, decision and handover logs) | `communication/missions/<MISSION-ID>/` (index: `communication/missions/README.md`) |
| Implementation records and evidence | `docs/implementation/` (index and forward naming: `docs/implementation/README.md`) |
| Repository-wide audits | `docs/audits/` |
| Incident records | `docs/incidents/` |
| Superseded or historical canonical-source text | Git history and the Source Set change-control record; not a new archive folder |

## Rules

1. **Never move existing archived material** to harmonize locations. Paths are provenance and are cited by other records.
2. **Archived material is never rewritten** to modernize status, paths or wording (Protocol §26). Corrections go in a new record that references the archived one.
3. **Choose the destination by material class**, using the table above. Do not create a new archive folder without a separately authorized mission.
4. **Exclusion from Git is not archiving.** Ignored local artifacts (toolkit backups, local drafts) are not preserved by any continuity track. If something must be kept, admit it under a governed mission.

## Maintenance

Review this table during the periodic repository health check (`docs/governance/Repository_Health_Checklist.md`). Changes to an archive location's rules belong to that location's own governing record. This document is updated to reflect them, not to create them.
