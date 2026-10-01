# SB-P-1.12 — MC-161 Narrow SEC-EIS10-04 Refinement Handover and STOP Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — EIS owner
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.28.md` (MC-161)
**Work package:** `SB-P-1.12-WP-STAGE10-SEC-EIS10-04-REFINEMENT`
**Status:** `EIS VERSION 0.4 SUBMITTED ON PR #687 — AWAITING MISSION CONTROL REVIEW — EIS NOT ACCEPTED OR LOCKED.`

## 1. Intake

| Check | Result |
|---|---|
| Canonical `main` | `4edcc2f20132bad9bc5bb8ffe5eb2954b8e6ba5b` (PR #696) |
| Sources read | MC-161 record `mission-control/34-stage10-sec-eis10-04-refinement-authorization.md`; delta re-review `specialists/05-stage10-eis-security-delta-rereview.md` (blob `363da0024c86f11055a4954b13aa63af3f0ec999`); `communication/live/report1.27.md` (blob `720ee2d2d839e7b0400717ad56f1ec912b3a127d`); the PR #687 EIS; locked Blueprint; FCTM; Founder Decision Record 09 (boundary check) |
| PR #687 branch | `mission/SB-P-1.12-stage9-eis-draft` at the expected head `022aefbd49f483b8bca1ad469fd8980718670f67`, with the expected EIS blob `28f713581ffea5312f36e3508380c38539b05e90`; same lineage. `main` has changed none of the six paths since the branch base; no drift |
| Reproducibility | The EIS generator reproduced version 0.3 exactly before the refinement |

## 2. Changed paths and blobs

| Path | Blob |
|---|---|
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` (version 0.4) | `7879c106474b71d2ea70f7355db69a4ee61f0e37` |
| `communication/missions/SB-P-1.12/claude-code/36-stage9-eis-creation-report.md` (new §13 only) | `1d5efb213460adb3039f14cb2e86c962a9327710` |
| `communication/missions/SB-P-1.12/README.md` | `d2a0f34eaeff5ac927b5ab672f8837a13fcafa14` |
| `communication/missions/SB-P-1.12/decision-log.md` (appended) | `2e65d8251426c3f9857938f1cc1e8991e57d224e` |
| `communication/missions/SB-P-1.12/handover-log.md` (appended, H-41) | `68ee891ddd5a2f766b2085618c28905deda857d9` |
| `communication/live/report1.28.md` (new) | This file; its blob and the new head are in the PR handover comment |

- **Locked Blueprint:** `77d52096c020668311b039721a4de9248ddd460e` (unchanged).
- **FCTM:** `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` (unchanged).
- **No Product Truth change.**

## 3. SEC-EIS10-04 changes (the only finding refined)

| Required correction | Where | Change |
|---|---|---|
| Business lifecycle under the business authority-state epoch and lock | §10.2; `EIS-CNF-02` | Lifecycle status (`active`/`deleted`) is listed on the business authority-state row. Every lifecycle transition that can change authorization, including governed deletion and tombstoning (EIS-ESC-06), takes `FOR UPDATE` on that row and increments its epoch in the same transaction. No protected operation can commit on an `active` decision after the business has concurrently become `deleted` |
| Lock every relied-on person row | §10.2; `EIS-CNF-02` | `FOR SHARE` on every person row whose current state the decision relies on, not only the initiating principal |
| Deterministic same-type order | §10.2; `EIS-CNF-02` | By type: registry, then person rows, then the business authority-state row. Within a type: ascending canonical UUID |
| Transfer completion | §10.2; `EIS-FRL-04` | Locks the current and incoming Owner person rows in ascending UUID order, then takes `FOR UPDATE` on the business authority-state row, and revalidates both identities and approvals in that transaction. Transfer semantics are unchanged |
| Kernel result contract | `EIS-KER-01` | It now states the Section 8.1 contract: allow or deny, reason code, principal, authority epochs, grant identifiers and decision identifier. `membership_version` remains only as a change detector (§10.2, `EIS-CNF-02`) |

Dependent text was updated for the same finding only:

- §18.1 revocation suite: lifecycle-race, transfer-race and lock-order tests;
- the §20 SEC-EIS10-04 row;
- metadata, inputs and a version 0.4 change-log row.

## 4. Traceability

| Measure | Before (version 0.3) | After (version 0.4) |
|---|---|---|
| EIS requirements | 81 | 81 (no requirement added) |
| Requirement-to-row links | 463 | 463 (no mapping changed) |
| `IN SCOPE` rows covered | 267 of 267 | 267 of 267 |
| Behaviour-adding orphans | 0 | 0 |

The independent script re-verified the finished file in both directions.

## 5. Preservation of the ten closed findings

SEC-EIS10-01, -02, -03, -05, -06, -07, -08, -09, -10 and -11 are unchanged in substance. Their requirements are untouched: `EIS-ID-*`, `EIS-KER-02`, `EIS-AUT-01`, `EIS-SUP-01`, `EIS-FRL-02`, `EIS-FRL-03`, `EIS-CNF-01`, `EIS-ISO-04`, `EIS-AUD-02`, `EIS-ISO-10`, `EIS-ESC-06`, `EIS-ESC-07`, `EIS-TST-03` and `EIS-DEP-01`. So are their sections (§8.1 principal model, §§9, 10.1, 11, 13, 14, 18.3 and 19.5).

`EIS-FRL-04` was changed only by the transfer lock wording that SEC-EIS10-04 requires; its SEC-EIS10-03 single-Owner invariant is unchanged. §12 (Founder Decision Record 09), §§15–17 and §22 are byte-identical to version 0.3.

## 6. Holds

- R-2 CLOSED / SATISFIED.
- ESC-1 OPEN T8.
- `22-§20-2` `BLOCKED` / `IN SCOPE`.
- G-6/T4 `UNVERIFIED`.
- Professional legal, privacy and retention validation deferred.
- EIS DRAFT, not accepted or locked.
- No implementation, schema, SQL, migration, provider or production action.

## 7. Stop conditions and validation

- **Stop conditions:** none was met. No new requirement was needed.
- **Local validation:** the Markdown Quality Gate passed on all six files, and `git diff --check` is clean.
- **GitHub Actions:** the state for the new head is reported in the PR handover comment exactly as observed. A missing run is reported as missing.

**SEC-EIS10-04 REFINEMENT SUBMITTED — STOP FOR MISSION CONTROL REVIEW**
