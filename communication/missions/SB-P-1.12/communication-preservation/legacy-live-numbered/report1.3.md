# SB-P-1.12 — MC-59 ESC-1 FPDR Draft Handover

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — MC-02-appointed Definition Actor, FPDR preparer only
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.3.md` (MC-59, effective through PR #648 and MC-60)
**Work package:** `SB-P-1.12-WP-ESC1-FPDR-DRAFT`
**Status:** `MC-59 ESC-1 FPDR DRAFT PACKET SUBMITTED — AWAITING MISSION CONTROL EXACT-HEAD REVIEW — FOUNDER CONFIRMATION PENDING — NOT APPROVED — ESC-1 T8 OPEN — NO STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/PRODUCTION AUTHORITY.`

## 1. Intake evidence

| Check | Result |
|---|---|
| Remote and tree | `origin` = `https://github.com/SmartBusinessv1/smart-business.git`; working tree clean |
| Canonical `main` | `5d707f5ded3cfb2d154433727425835ec73ed431`, the PR #648 merge (human-merged `2026-09-26T13:12:39Z`, approved head `4255281316d6c1d9d9c784763fa7901ca8809051`), verified by MC-60 |
| Brief canonical | PR #646 at `main@a619ae8381a4598e4097eb125e44a015a11c7d18` (MC-58) |
| Branch | `mission/SB-P-1.12-esc1-fpdr-draft`, absent locally and on `origin`; created from `5d707f5d` |
| Target paths | `claude-code/28-esc1-founder-decision-record-draft.md` and `communication/live/report1.3.md` were both absent |
| Read | Source 18 §6 Stage 3; Founder Records 03 and 04 (format and existing decisions); the ESC-1 brief; Blueprint §§20–21; the Security reports; Source 11; Contracts 03, 18, 20, 21 and 22; Build Plan §15 |

## 2. Exact diff

Two new files, and no other path:

1. `communication/missions/SB-P-1.12/claude-code/28-esc1-founder-decision-record-draft.md`
2. `communication/live/report1.3.md`

No Blueprint, FCTM, Founder Record, log, README, earlier live file, Security report, contract, payment code or configuration, SQL, workflow or provider change.

## 3. What the packet contains

- **Verbatim Founder replies:** the three blocks from `instruction1.3.md` §2, copied programmatically from the merged file and checked to be byte-identical.
- **Seven provisional decisions, each marked `PROPOSED RECORD WORDING — FOUNDER CONFIRMATION PENDING`:**
  - ESC1-D1 per-business independence;
  - D2 Pause up to three months;
  - D3 Stop with a choice between deletion and keeping history for three months, with download at any time;
  - D4 the three-month and 90-day clocks, recorded separately;
  - D5 history intact until a permitted deletion (Q2 yes);
  - D6 Manager and staff removal never deletes history;
  - D7 the Owner is transferred through dual verified approval, never removed.
- **Q3 and Q4** are kept as "Qualified", with what the directions answer and what stays open.
- **Source reconciliation**, with tensions flagged and not resolved.
- **Security, identity and payment obligations**, stated as conditions, not mechanisms.
- **Affected rows** (unchanged), next steps, and a Founder confirmation section.

## 4. Matters for Mission Control

- **Minimal Founder clarifications:**
  - C-1: what "account" means for automatic deletion (the business, or the person's login).
  - C-2: which clock governs when Pause or Stop overlaps a paid subscription, or both clocks run.
  - C-3: whether Stop is the only route for an Owner who leaves without transferring.
- **For Mission Control to decide whether to put to the Founder:**
  - C-4: the words "owns one or more businesses" may answer G-4.
  - C-5: allocation of Owner transfer and the Pause, Stop and timed-deletion lifecycle, between SB-P-1.12 and `SB-P-1.19`.
- **Flags:**
  - Owner transfer has no approved source or FCTM row; it is new behaviour (T3).
  - The three-month and 90-day periods appear to supply the retention duration left unresolved in Contract 18 §12 and Build Plan §15 item 6, which is `SB-P-1.19` scope.
  - Deletion under D3 and the windows raises the question of whether `22-§20-2` and Contract 21 §19 are being clarified (T1) or changed (T7).
- **Not blocking this record:** resumption, activity measures, calendar arithmetic, notifications, legal retention, payment settlement, approval strength and deletion-path engineering.

## 5. Holds

- ESC-1 is an open T8. `22-§20-2` stays `BLOCKED` and `IN SCOPE`, and the durability conclusions of `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5` and `BP-§7-1` stay held.
- G-3 to G-8 and S-2 to S-7 are unchanged, and G-6/T4 is `UNVERIFIED`.
- The packet is not approved and closes nothing. The final record, the reconciliation and the security design review each need separate authorization.

## 6. PR, head and CI

The draft PR number, the exact head containing this report and the exact-head CI results are recorded in the PR handover comment, because a file cannot contain the hash of its own commit. The local Markdown Quality Gate and pre-commit gate were run on both files before commit.

## 7. Stop

Stopping for Mission Control's exact-head review. No self-approval, no marking ready and no merge.
