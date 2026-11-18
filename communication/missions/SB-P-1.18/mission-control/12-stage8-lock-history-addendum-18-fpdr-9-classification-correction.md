# SB-P-1.18 — Stage 8 Lock-History Addendum: Post-Lock Build-Commitment Correction (`18:FPDR-9`)

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Supplements:** `mission-control/09-stage8-founder-approval-and-blueprint-lock-record.md` (`18:S8-FAR`), blob `4f64e647c796aba0c753fba295ff2eea54567ca0`, which this addendum does not modify
**Kind:** append-only lock-history reconciliation. Not a Founder decision, not a lock and not a reopening of Stage 8
**Prepared by:** Claude Code, SB-P-1.18 Definition Actor (non-independent preparer), under MC41 ([PR #1111 comment 6911608223](https://github.com/SmartBusinessv1/smart-business/pull/1111#issuecomment-6911608223) §C item 3)
**Baseline:** `main@9ce09247c752b26c6a39eeeb4fda1613a43bd55f`
**Status:** DRAFT — NOT EFFECTIVE until Founder human merge and Mission Control post-merge verification
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. What the Stage 8 lock approved (unchanged)

`18:S8-FAR` records the Founder's Stage 8 approval of the 769-row FCTM at blob `2bbe6e227d714996bcead10385952c78283e20e8` and freezes every row's disposition, build commitment, commercial classification and mission assignment (§4). That statement, the Founder's verbatim decision (§1) and every identity in §3 stay as written. In the approved matrix, the 22 rows listed in Section 3 carried build commitment `ADD-ON + BUILD NOW` (nine with the C1 suffix `— before first 10 pilot merchants`). **The Stage 8 lock did not contain the corrected cells.**

## 2. Post-lock FCTM history

| # | Change | FCTM blob | Authority | State |
|---|---|---|---|---|
| 0 | Stage 8 Founder-approved matrix | `2bbe6e227d714996bcead10385952c78283e20e8` | `18:S8-FAR` | Canonical history |
| 1 | Track A: row `S11-L443-1` verification seed, four to three origins (metadata only; no frozen field) | `ed2ff0f99e6982a15b650b5aee09e01e9355e0fd` | MC-817 Track A; PR #1123, merge `90b84eebbf66c047c9b6bd87f12bc1dc21e1ec8f` | Canonical |
| 2 | This correction: frozen Build commitment of 22 rows, to `REJECT` | `842a89566929a96b507167a8714d7946bd8a72bd` | Founder decision `18:FPDR-9` (`claude-code/20-stage10-founder-product-decision-record-18-fpdr-9.md`), as required by `18:S8-FAR` §4 and Source 18 v1.3 §3.2 item 5 | DRAFT — effective only on Founder human merge and Mission Control verification |

## 3. Rows affected by change 2

`1-§4-1` to `1-§4-6`, `1-§28-2` to `1-§28-4`, `6-§15-1` to `6-§15-6`, `16-§19-1` to `16-§19-5`, `16-§21-5` and `16-§21-6` (22 rows). Only the Build commitment field changes. The old and new values per row are in `18:FPDR-9` §4.

## 4. Effect on the Stage 8 record

- **Census unchanged:** the `18:S8-FAR` §4 disposition counts (592 / 77 / 48 / 27 / 17 / 8; 769 rows) and the mission assignments stay true after change 2.
- **Frozen fields:** after change 2 is canonical, the current frozen build commitment of the 22 rows is `REJECT` under `18:FPDR-9`. Every other frozen field of every row is as locked.
- **Fail-closed identity:** `18:S8-FAR` §3 names FCTM blob `2bbe6e22` as the locked identity. That statement is history. The current canonical FCTM identity is the one Mission Control records at post-merge verification of each authorized post-lock change.
- **Locked Blueprint:** `docs/phase-1-mission-blueprint/completed/SB-P-1.18.md` (blob `f9bfd0a2f6995f9956c76425fef3bff673cc7266`) §11.3 still shows the pre-correction build commitment for the 22 rows. It is not edited here; Mission Control decides any reconciliation.

## 5. Not authorized

No Blueprint, Source, contract, EIS, earlier Founder record or other SB-P mission edit; no change to PR #1111; no implementation, SQL, migration, provider action or runtime test.

**STOP FOR INDEPENDENT REVIEW, MISSION CONTROL DISPOSITION AND FOUNDER MERGE.**
