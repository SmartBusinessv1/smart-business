# SB-P-1.12 — MC-151 Stage 10 T8-EIS-1 Correction Handover and STOP Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — EIS owner
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.24.md` (MC-151)
**Work package:** `SB-P-1.12-WP-STAGE10-T8-EIS1-CORRECTION`
**Status:** `EIS VERSION 0.2 FINDING-SCOPED CORRECTION SUBMITTED ON PR #687 — AWAITING MISSION CONTROL STAGE 10 RE-REVIEW — EIS NOT ACCEPTED OR LOCKED.`

## 1. Intake

| Check | Result |
|---|---|
| Canonical `main` | `cd71847a378efca60fe4675ca036937bdcdaf316` (PR #688). Since the PR #687 base `24730a68`, it adds only `instruction1.24.md` (blob `fc92bb4d…`), Founder Decision Record 09 (blob `84d61d4d62cc33ae81ec372ac725059665ebc9d9`) and the MC-150 record (blob `95a5c5df32a09dc3a49e0d0f6366e73331c2af72`). None is one of the six paths |
| PR #687 branch | `mission/SB-P-1.12-stage9-eis-draft` at the reviewed head `9a9a4f390dbf04f6eb77e4f800bbb25ca2eab701` on `origin`; same lineage; no drift. The branch is usable, so no new PR was opened |
| Reproducibility | The EIS generator reproduced the reviewed EIS byte for byte before the correction was applied |

## 2. Changed paths and blobs

| Path | Blob |
|---|---|
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` (version 0.2) | `0ebd7c2b4298a81b467021dfb8a52cf42b8c293d` |
| `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md` (new §11 only) | `5c64004b3dc27e5040fa6d2032db49ff07baa34b` |
| `communication/missions/SB-P-1.12/README.md` | `637f9bc8c0172ce349fb64b187623f07f4d793b0` |
| `communication/missions/SB-P-1.12/decision-log.md` (appended) | `10630eed631439a821fa30d82a5ef92414fce07a` |
| `communication/missions/SB-P-1.12/handover-log.md` (appended, H-39) | `f61c4e2c1fcf14849243783d405e3138fc5b84b1` |
| `communication/live/report1.24.md` (new) | This file; its blob, the new head and CI are in the PR handover comment |

The locked Blueprint (`77d52096…`), FCTM (`1650ff95b2fbdd63e1b0f60d8135da14a7a9d259`), Founder Records including Record 09, Security reports, Mission Control records, contracts, code, schema, SQL, migrations and provider configuration are unchanged.

## 3. Correction applied

- **Section 12.4** was rewritten to Founder Decision Record 09:
  - exact delegated Reference Cost may appear with an otherwise-authorized selling price;
  - human arithmetic on separately authorized values is not a Smart Business margin output;
  - without `catalog.margin.read`, Smart Business never computes, labels, displays, returns, reports, aggregates or exposes margin;
  - holding margin permission does not by itself approve any particular margin output.
- **History kept:** the version 0.1 provenance is recorded in the section.
- **`EIS-PPM-04`** was rewritten and is no longer held. Its FCTM rows are unchanged.
- **Aggregate-only margin semantics are removed.** The version 0.1 group-size rule and the three options are gone. EQ-S9-2 is withdrawn.
- **No margin formula is invented.** No per-product or aggregate margin semantics are selected; if later Product Truth defines them, the Section 12.3 projection enforces them.
- **T8-EIS-1 / EQ-S9-1:** marked **RESOLVED BY FOUNDER DECISION RECORD 09**, with the history kept.
- **Dependent status references** in Sections 1, 3, 19.4, 19.5, 20, 21 and 23 were updated, and a version 0.2 change-log row was added. The diff was inspected: no other line of the EIS changed.

## 4. Traceability

| Measure | Before (version 0.1) | After (version 0.2) |
|---|---|---|
| EIS requirements | 80 | 80 (unchanged; no ID added or removed) |
| `IN SCOPE` rows covered | 267 of 267 | 267 of 267 |
| Requirement-to-row links | 460 | 460 (every mapping identical) |
| Engineering-only requirements | 1 (`EIS-ENV-02`) | 1 |
| Behaviour-adding orphans | 0 | 0 |

The independent script parsed the finished file. The forward and reverse tables agree, the rows are in FCTM order, every reference is defined, and no row outside `IN SCOPE` is cited.

## 5. Preserved

- The ESC-1 safe-design direction (Section 14) is unchanged; ESC-1 stays OPEN T8.
- `22-§20-2` stays `BLOCKED` / `IN SCOPE`.
- G-6/T4 stays `UNVERIFIED`.
- Legal, privacy and retention validation stays deferred.
- Workstreams are unchanged, apart from removing the T8-EIS-1 status reference in the SB-P-1.13 gated list.
- SB-P-1.13 dependency boundaries are unchanged.

## 6. Stop conditions

None was met:

- no other locked Product Truth rule needed to change;
- no unrelated architecture changed;
- every FCTM mapping is valid;
- there was no branch drift;
- no new Product Truth question arose.

## 7. Stop

The Markdown Quality Gate passed on all six files, and `git diff --check` is clean. Stopping for Mission Control's Stage 10 disposition: no acceptance, no lock, no self-approval, no marking ready and no merge.
