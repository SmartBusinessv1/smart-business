# SB-P-1.12 — MC-63 ESC-1 Refined Founder Decision Proposal Handover

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — MC-02-appointed Definition Actor, documentary preparer only
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.4.md` (MC-63, effective through PR #650 and MC-66)
**Work package:** `SB-P-1.12-WP-ESC1-REFINED-FPDR-PROPOSAL`
**Status:** `MC-63 ESC-1 REFINED FOUNDER DECISION PROPOSAL SUBMITTED — AWAITING MISSION CONTROL EXACT-HEAD REVIEW — FOUNDER CONFIRMATION PENDING — NOT APPROVED — ESC-1 T8 OPEN — NO STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/PRODUCTION AUTHORITY.`

## 1. Intake evidence

| Check | Result |
|---|---|
| Remote and tree | `origin` = `https://github.com/SmartBusinessv1/smart-business.git`; working tree clean |
| Canonical `main` | `a81e90346e4fd1a883279f2cd52445a997c76c8d`, the PR #650 merge (human-merged `2026-09-26T15:39:50Z`, approved head `d72720af198caf7ceab86368f1d174dfecfbbcaf`), verified by MC-66 |
| Historical draft | `claude-code/28` canonical as non-approved evidence through PR #649 (MC-62); not edited |
| Branch | `mission/SB-P-1.12-esc1-refined-fpdr-proposal`, absent locally and on `origin`; created from `a81e9034` |
| Target paths | `claude-code/29-esc1-refined-founder-decision-proposal.md` and `communication/live/report1.4.md` were both absent |

## 2. Exact diff

Two new files, and no other path:

1. `communication/missions/SB-P-1.12/claude-code/29-esc1-refined-founder-decision-proposal.md`
2. `communication/live/report1.4.md`

No change to `claude-code/28`, earlier live files, Founder Records, the FCTM, the Blueprint, contracts, logs, README, Security evidence, code, SQL, workflows, or payment or external systems.

## 3. What the proposal contains

- **Founder statements:** F-1 to F-5, copied by script from the merged `instruction1.4.md` and checked to be verbatim.
- **Seven provisional decisions,** each marked `PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING`:
  - ESC1-R1: one person, independent businesses;
  - R2: Pause up to 90 days, with return;
  - R3: cancellation without transfer, with the paid period protected and 90 days from the subscription end;
  - R4: Stop is Delete, either after an optional 90-day no-charge period or immediately, with download offered but not required;
  - R5: dual-approved transfer, with the former Owner losing all access (F-4);
  - R6: personal identity deleted after the final business, with transferred-business independence (F-5);
  - R7: history integrity and governed, law-limited deletion.
- **A correction table** against `claude-code/28`: Pause and Stop meanings, and the three-month wording superseded by 90 days.
- **Trigger implications** (T8, T1 or T7, T3, allocation), affected rows, held Stage 8 assertions, and security obligations as conditions only.

## 4. For Mission Control and the Founder

- **FC-1:** confirm ESC1-R1 to R7.
- **FC-2:** G-4. Confirm that one person may own more than one business, to be recorded in the final record, not closed here.
- **FC-3:** confirm the C-5 split. SB-P-1.12 owns the authority, integrity, transfer-authorization and former-Owner-denial foundations; `SB-P-1.19` owns the merchant-facing lifecycle, transfer, payment and contact experience; no existing row moves.
- **Q-A:** what happens when a Pause reaches 90 days without a return.
- **Q-B:** whether a person's identity is kept when they own no business but still hold memberships in others' businesses.
- **Q-C:** when Stop is chosen during a paid period, whether the 90 days run from the Stop date or from the end of the paid period (example: 40 paid days left means deletion on day 90 or day 130).
- **Recorded as an experience note only:** rotating per-business staff responsibilities and business-labelled assignment notifications. No scope or FCTM change.

## 5. Holds

- ESC-1 is an open T8, and the `auth.users` cascade issue stays within it. `22-§20-2` stays `BLOCKED` and `IN SCOPE`, and the durability conclusions of `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5` and `BP-§7-1` stay held.
- G-3, G-5 to G-8 and S-2 to S-7 are unchanged. G-4 is proposed for confirmation only. G-6/T4 is `UNVERIFIED`.
- The final record, the reconciliation and the security design review each need separate authorization.

## 6. PR, head and CI

The draft PR number, the exact head containing this report and the exact-head CI results are recorded in the PR handover comment, because a file cannot contain the hash of its own commit. The local Markdown Quality Gate and pre-commit gate were run on both files before commit.

## 7. Stop

Stopping for Mission Control's exact-head review. No self-approval, no marking ready and no merge.
