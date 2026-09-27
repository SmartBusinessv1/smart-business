# SB-P-1.12 — MC-97 R-2 Source-Coverage Assessment Handover and STOP Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — MC-02 Definition Actor, source and accounting evidence preparation only
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.10.md` (MC-97, activated by MC-98); parent gate `communication/live/instruction1.9.md` (MC-92)
**Work package:** `SB-P-1.12-WP-R2-SOURCE-COVERAGE-ASSESSMENT`
**Status:** `MC-97 R-2 SOURCE-COVERAGE ASSESSMENT SUBMITTED — STOP FOR MISSION CONTROL EXACT-HEAD REVIEW AND NEXT SOURCE-COVERAGE DISPOSITION — R-2 OPEN / CRITICAL PATH — ESC-1 T8 OPEN — NO APPROVAL GIVEN.`

## 1. Intake evidence

| Check | Result |
|---|---|
| Remote and tree | `origin` = `https://github.com/SmartBusinessv1/smart-business.git`; working tree clean |
| Canonical `main` | `c1b5ab64d80a3b8c48d5b9d71af3810030732cd9`, the PR #661 merge (human-merged `2026-09-27T12:23:44Z`, approved head `f21ff0dc0c617af3ad56ba5c2cc5e5ef63194426`), verified by MC-98 |
| Instructions | `instruction1.10.md` blob `14789ba90e286ce85000564e79bb00dad1765e15`; `instruction1.9.md` blob `dab5d3097b20667fa9cee3f891f5b64ea92ed7ed` |
| Branch | `mission/SB-P-1.12-r2-source-coverage-assessment`, absent locally and on `origin`; created from `c1b5ab64` |
| Target paths | Both absent before this work |

## 2. Exact diff

Two new files, and no other path:

1. `communication/missions/SB-P-1.12/claude-code/32-r2-positive-identity-deletion-source-coverage-assessment.md`
2. `communication/live/report1.10.md`

The Blueprint, FCTM, contracts, Build Plan, Founder Records, Source 18, source registry, Security findings, earlier live files, code, SQL, billing and production are unchanged.

## 3. Evidence inventory (summary; full table in the assessment §2)

24 source entries, each with path, blob, section or line, bounded evidence and a classification (approved obligation, Founder decision, candidate anchor, unresolved input or historical evidence):

- Founder Record 05 ESC1-6, ESC1-7 and ESC1-8;
- Contract 18 §§1, 8, 10–12, 19, scenario 8 and §25;
- Build Plan §§9, 10.8, 11 and §15 item 6;
- Contracts 20, 21 and 22;
- Source 11 and the Manifesto;
- the Lighthouse Constitution and Constitution Design Principles (no deletion provisions found);
- Source 18 §3.2 and Stage 3;
- the SB-P-1.12 Blueprint §15, FCTM and `report1.8.md` §9.2;
- `instruction1.9.md` and the MC-90 to MC-98 dispositions;
- the Global Product Completion View.

**Finding:** no approved numbered source in C20, C21, C22, the Build Plan, Source 11 or the constitutions states a positive personal-identity deletion obligation. Contract 18 (`SB-P-1.19` by Build Plan §9) is the only approved contract that addresses final deletion, and it speaks of the "account/business". Whether that includes the personal identity is not stated.

## 4. Unresolved source gaps

- **R-2A:** the positive personal-identity deletion action has no approved source anchor for any mission. The responsible mission is not determined by any approved source.
- **R-2B:** no approved source defines "all relevant obligations". The input register (assessment §5) lists L-1 to L-3 (legal, privacy and retention), C-1 and C-2 (Finance & Payments; `SB-P-1.19`) and F-1 to F-3 (facts and owners), each with a stop condition. The Founder's 90-day business windows are not applied to identity retention.
- **Crosswalk:** FA-15 to FA-18 cover only negative guards. The positive trigger, timing, obligations content, the deletion action's own acceptance and its proof owner are uncovered, so the Source 18 §3.2 completeness check cannot yet be applied to the positive action.
- **ESC-1:** the `auth.users` cascade contradicts FA-11 and FA-15, and the Owner API delete path bypasses FA-18. No mechanism is designed.

## 5. Options presented (not ranked or enacted)

- **(i)** A supplementary row-keyed acceptance line on existing SB-P-1.12 sections. Not faithful as-is: those sections do not state a deletion obligation, so using them would invent an anchor.
- **(ii)** A source amendment or new approved numbered source. Needs approval of the source text; creates a new row in the owning mission.
- **(iii)** A cross-mission interface with `SB-P-1.19` under Contract 18. Requires Mission Control to confirm that Contract 18's "account" includes the personal identity; otherwise option (ii) applies.

For each option, the assessment states whether Source 18 §3.2 allows it as-is, the triggers, whether a Founder decision is needed, what is outside this actor's authority, and the FCTM impact.

## 6. STOP report

- No source conflict was found. The Global Product Completion View's "no advancing mission yet" for Contract 18 is a progress column and is consistent with Build Plan §9.
- No anchor was invented, and no source, assignment or commitment was changed.
- Options (ii) and (iii) need authority beyond this work package. The next step is Mission Control's source finding (assessment §7, step 1), with all approvals **not yet given**.
- The external privacy-policy page named in the Manifesto was not read; it is not a repository source.

## 7. Holds

R-2 OPEN / CRITICAL PATH / SOURCE-COVERAGE HOLD. ESC-1 OPEN T8. `22-§20-2` `BLOCKED` and `IN SCOPE`; related durability held. G-6/T4 `UNVERIFIED`. G-4 design gated. R-1 and R-3 unchanged. No EIS, implementation, SQL, migration, identity deletion, payment or provider, or production action.

## 8. PR, head and CI

The draft PR number, exact head, blobs and exact-head CI results are recorded in the PR handover comment, because a file cannot contain the hash of its own commit. The local Markdown Quality Gate and pre-commit gate were run on both files before commit.

## 9. Stop

Stopping for Mission Control's exact-head review and next source-coverage disposition. No self-approval, no marking ready and no merge.
