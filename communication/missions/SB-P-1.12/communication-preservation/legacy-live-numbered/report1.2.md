# SB-P-1.12 — MC-54 ESC-1 Founder Decision Brief Handover

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — MC-02-appointed Definition Actor, documentary preparer only
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.2.md` (MC-54, effective through PR #645 and MC-55)
**Work package:** `SB-P-1.12-WP-ESC1-BRIEF`
**Status:** `MC-54 ESC-1 FOUNDER DECISION BRIEF DRAFT SUBMITTED — AWAITING MISSION CONTROL EXACT-HEAD REVIEW — NOT A FOUNDER DECISION — ESC-1 T8 OPEN — NO STAGE 8/BLUEPRINT LOCK/EIS/IMPLEMENTATION/PRODUCTION AUTHORITY.`

## 1. Intake evidence

| Check | Result |
|---|---|
| Remote and tree | `origin` = `https://github.com/SmartBusinessv1/smart-business.git`; working tree clean |
| Canonical `main` | `c39f96802a1814d23506446762f480351a4e5cb1`, the PR #645 merge (human-merged `2026-09-26T12:00:51Z`, approved head `4126f8de62a42996e3a7a133435948a93f731040`), verified by MC-55 |
| Stage 7 canonical | PR #641 merged at `main@f12513c509770e3f5e4c268edc0404601f159936` from head `192b6dc1a7ae93265048f1293e366fce16d4e2a2` (MC-53) |
| Branch | `mission/SB-P-1.12-esc1-founder-decision-brief`, absent locally and on `origin` before creation; created from `c39f9680` |
| Target paths | `claude-code/27-esc1-founder-decision-brief.md` and `communication/live/report1.2.md` were both absent |
| Read | Source 18 §6 Stage 3; Blueprint §§20.2, 20.5, 21.1; the Stage 7 report; the three `specialists/` reports; Founder Records 03 and 04; FCTM `22-§20-2` and the dependent rows; Contracts 03, 18, 21 and 22; Source 11; Build Plan §15 |

## 2. Exact diff

Two new files, and no other path:

1. `communication/missions/SB-P-1.12/claude-code/27-esc1-founder-decision-brief.md`
2. `communication/live/report1.2.md`

No Blueprint, FCTM, Founder Record, Stage 7 report, live base or earlier numbered file, specialist report, README, log, contract, code, SQL, migration or provider change.

## 3. What the brief contains

- The approved principles on data ownership, durable history, audit and cancellation, each with its exact source pointer.
- The two deletion paths (Owner API and Auth user), with repository evidence, the reviewer's inference, and unverified runtime facts kept separate. The 18-foreign-key count is labelled as Claude Code's unverified inventory. It explains why removing a UI action cannot close ESC-1.
- Candidate end-of-life directions, marked as proposals and not ranked: A (close, history retained), B (close, then scheduled deletion after notice and export) and C (Owner-requested final deletion of only the records that approved retention policy and legal or privacy requirements allow, conditional on later policy and verification).
- Two separate yes-or-no login questions that can both hold: login removal never by itself deletes the business or its history; and removal of the last active Owner's login waits until the business is closed or otherwise resolved (MC-56).
- Four decision questions, a "do not decide now" list, dependent rows and held assertions, and a short plain-language version for Mission Control to put to the Founder.

## 4. Outstanding Founder questions

1. **Q1 — End of life:** direction A, B, C or another; C conditional on a later approved retention policy and technical and legal verification.
2. **Q2 — History:** must financial and authority history stay intact until any final deletion, with no individual able to erase it?
3. **Q3 — Login removal and history (yes or no):** must login removal never by itself delete the business or its shared history?
4. **Q4 — Last active Owner (yes or no):** must removal of the last active Owner's login wait until the business is closed or otherwise resolved? Succession is not decided.

**Coupling flagged:** direction B, and any final removal under A, depend on the unresolved retention duration (Build Plan §15 item 6) and on Contract 18 lifecycle work owned by `SB-P-1.19`. The ESC-1 answer can set the principle without fixing the duration.

**Evidence gaps flagged:** no legal or regulatory retention source exists in the repository; runtime and production behaviour are unverified.

## 5. Holds

- ESC-1 is an open T8. `22-§20-2` stays `BLOCKED` and `IN SCOPE`. The durability conclusions of `21-§19-1`–`21-§19-8`, `22-§29-12`, `22-§14-5` and `BP-§7-1` stay held.
- G-3 to G-8 and S-2 to S-7 are unchanged, and G-6/T4 is `UNVERIFIED`.
- The brief is not a Founder Product Decision Record. Recording the decision and reconciling the Blueprint and FCTM each need separate authorization.

## 6. PR, head and CI

The draft PR number, the exact head that contains this report and the exact-head CI results are recorded in the PR handover comment, because a file cannot contain the hash of its own commit. The local Markdown Quality Gate and pre-commit gate were run on both files before commit.

## 7. MC-56 correction

MC-56 ([comment 5846151822](https://github.com/SmartBusinessv1/smart-business/pull/646#issuecomment-5846151822)) found that the former I-1 and I-2 options answered different questions. The brief's Sections 4, 5.1 (direction C), 5.2, 6 and 8 now present them as separate yes-or-no questions (Q3 and Q4), and every final-deletion wording is conditional on later approved retention policy and technical and legal verification. No evidence, principle, dependent row, hold or other section changed, and no mechanism, retention period or succession decision was introduced.

## 8. Stop

Stopping for Mission Control's exact-head review. No self-approval, no marking ready and no merge.
