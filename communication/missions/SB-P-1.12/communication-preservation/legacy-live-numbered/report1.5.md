# SB-P-1.12 — MC-69 ESC-1 Founder-Confirmed FPDR Candidate Handover

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — MC-02-appointed Definition Actor, documentary preparer only
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.5.md` (MC-69, effective through PR #652 and MC-71)
**Work package:** `SB-P-1.12-WP-ESC1-FOUNDER-CONFIRMED-FPDR-CANDIDATE`
**Status:** `MC-69 ESC-1 FOUNDER-CONFIRMED FPDR CANDIDATE SUBMITTED — AWAITING MISSION CONTROL EXACT-HEAD REVIEW AND FOUNDER FINAL RECORD PUBLICATION — ESC-1 T8 OPEN — 22-§20-2 BLOCKED AND IN SCOPE — NO STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/PAYMENT-PROVIDER/PRODUCTION AUTHORITY.`

## 1. Intake evidence

| Check | Result |
|---|---|
| Remote and tree | `origin` = `https://github.com/SmartBusinessv1/smart-business.git`; working tree clean |
| Canonical `main` | `9f8345109cf4d06d0c24e0be1582051f1a5d585e`, the PR #652 merge (human-merged `2026-09-27T09:42:35Z`, approved head `011905faef8f8018ceadcb7c0afa0b48e9b520c0`), verified by MC-71 |
| Proposal | `claude-code/29` canonical through PR #651 (MC-68); read only |
| Branch | `mission/SB-P-1.12-esc1-founder-confirmed-fpdr-candidate`, absent locally and on `origin`; created from `9f834510` |
| Target paths | `claude-code/30-esc1-founder-confirmed-fpdr-candidate.md` and `communication/live/report1.5.md` were both absent |

## 2. Exact diff

Two new files, and no other path:

1. `communication/missions/SB-P-1.12/claude-code/30-esc1-founder-confirmed-fpdr-candidate.md`
2. `communication/live/report1.5.md`

No change to `claude-code/28` or `29`, earlier live files, Founder Records, the Blueprint, the FCTM, contracts, README, logs, Security evidence, code, SQL, payment or provider configuration, workflows or production.

## 3. What the candidate contains

- **All Founder source evidence, verbatim:** the MC-59 replies (three blocks), F-1 to F-5, the six final answers and the Pause clarification. All were copied by script from the merged instructions and checked complete.
- **Founder-confirmed policy CP-1 to CP-8** (R1 to R7 as qualified by Q-A, Q-B and Q-C, plus FC-2 and FC-3):
  - **Pause freezes unused paid days.** 40 paid days before a full 90-day Pause means 40 paid days after it, and the Pause returns to normal status without deletion.
  - **Delete after 90 days** uses the remaining paid days first; with 40 left, deletion eligibility is day 130. **Delete now** has no such period.
  - **An identity is kept** while other authorized memberships remain.
  - **Transfer** removes all former-Owner access, and the transferred business survives the former Owner's identity deletion.
- **A table of the three 90-day periods,** each with its own trigger, showing they are not interchangeable.
- **What is not settled:** payment, legal retention, the T1-or-T7 source reconciliation, and all technical and security design.
- **An evidence map** from every rule to its sources, and G-4 recorded as answered but pending reconciliation.
- **Affected rows, triggers and held assertions** (nothing changed), a cross-mission experience note, and the next gates.

## 4. Holds and gates

- ESC-1 is an open T8, including `auth.users ON DELETE CASCADE`. `22-§20-2` stays `BLOCKED` and `IN SCOPE`, and the durability conclusions of `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5` and `BP-§7-1` stay held.
- G-4 is answered by the Founder, but the registry, Blueprint and FCTM are unchanged. G-3, G-5 to G-8 and S-2 to S-7 are unchanged. G-6/T4 is `UNVERIFIED`.
- Next: Mission Control documentary review; Founder final record publication and merge; a controlled reconciliation; an independent security design review; ESC-1 disposition; then Stage 8, each separately.

## 5. PR, head and CI

The draft PR number, the exact head containing this report and the exact-head CI results are recorded in the PR handover comment, because a file cannot contain the hash of its own commit. The local Markdown Quality Gate and pre-commit gate were run on both files before commit.

## 6. Stop

Stopping for Mission Control's exact-head review. No self-approval, no marking ready and no merge.
