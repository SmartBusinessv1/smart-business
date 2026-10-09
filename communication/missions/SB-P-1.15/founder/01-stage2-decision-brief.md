# SB-P-1.15 — Stage 2 Draft Founder Issue Brief

**Mission:** SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO  
**Status:** `DRAFT ISSUE BRIEF — NOT A FOUNDER DECISION RECORD — NOT AN AUTHORIZATION TO BEGIN FOUNDER DIALOGUE`  
**Prepared by:** Claude Code, appointed Definition Actor, under SB-P-1.15-MC-05  
**Baseline:** `main@eacc46104b43b4db137693ab5e84728da14a249c`, 2026-10-09

## What this brief is

Source 18 Stage 3 asks for a one-page brief that summarizes the FCTM and the trigger determination. This draft lists the issues Stage 2 found that **may** need a Founder decision, with their evidence.

- It records no decision and proposes no answer.
- Mission Control decides whether Stage 3 is triggered and which items, if any, go to the Founder (MC-05 §4).
- Mission Control may add its own decision record during review.

## The mission in one paragraph

SB-P-1.15 builds the shared Reminder Engine, bounded delegated automation, the scheduler foundation, the Shared Notification Foundation (Founder decision SB-P-1.12 FPDR-1), Daily Intelligence at 7:00 AM, 10:30 AM and 10:00 PM, and read-only Ask CFO. The Stage 2 FCTM has 803 rows, 694 of them `IN SCOPE`. No row is moved, deferred or escalated. Nothing is implemented, and all upstream foundations (authority, conversation/AI, Business Memory) are specifications only.

## Issues that may need a Founder decision

### FDB-1 — Transaction-correction notification promise (Δ-04; T4 candidate, possibly T1)

- **What a merchant sees today:** before saving a correction, the app says the correction "will also be reported to the business owner through the approved notification workflow" (`src/routes/_authenticated/transactions.tsx`, line 936).
- **Where that came from:** the SB-P-1.9 engineering contract (approved 2026-07-20) required an owner WhatsApp notification on every correction.
- **What the repository shows:** each correction is stored as "notification pending" and nothing in the repository sends it. Only the Owner can make a correction, so the corrector and the notified person are the same Owner. Whether anything outside the repository ever sent such a notification is unknown without runtime access.
- **What current Product Truth says:** no mature contract, Build Plan section or Product Truth source requires correction notifications.
- **The open question:** is owner notification of corrections current Product Truth, or historical engineering that the shipped wording should no longer promise? Who owns the outcome is also open; this brief does not assume SB-P-1.15 does.
- **FCTM rows touched:** `22-§12-8` (marker only).

### FDB-2 — Reminders and briefings before WhatsApp (DC-01; T6 candidate, material)

- **What approved sources say:** Daily Intelligence and reminders reach users through WhatsApp, the Conversation Workspace and dashboard surfaces. WhatsApp arrives in SB-P-1.20. No email, SMS or push channel is approved.
- **Consequence:** between SB-P-1.15 and SB-P-1.20, an Owner who does not open the app would not receive a due reminder or a 7:00 AM briefing.
- **The open question:** is in-app-only delivery acceptable for that period, or is another approved out-of-app channel wanted? Any new channel would be a new product decision (T3). This brief proposes none.
- **FCTM rows touched (15):** `4-§8-1` to `4-§8-3`, `4-§13-3`, `11-§14-3`, `11-§17-4`, `11-§18-5`, `11-§18-11`, `22-§12-3`, `22-§12-4`, `10-§5-7`, `17-§11-3`, `BP-§10.4-A1`, `BP-§10.4-A2`, `BP-§8`.

### FDB-3 — "Who owes me money?" before customer-credit maturity (DC-02; T6 candidate, needs evidence)

- **What the Founder scenario says:** Build Plan Scenario B: the Owner asks "Who owes me money?" and receives contextual authorized information.
- **What an earlier Founder decision says:** SB-P-1.14 FPDR-1 places the authoritative owed balance — "including the exact answer to 'What does Shameer still owe me?'" — in SB-P-1.16. Before then, credit and repayment entries can be retrieved by counterparty.
- **Consequence:** at SB-P-1.15, Ask CFO can show credit and repayment entries by counterparty and must say that balances are not yet authoritative. It must never invent a balance.
- **The open question:** does that qualified, entry-level answer satisfy Scenario B for this mission, with authoritative balances arriving in SB-P-1.16? The scenario is not downgraded in the FCTM.
- **FCTM rows touched (6):** `2-§5-3`, `2-§5-13`, `2-§11-3`, `2-§12-4`, `2-§25-7`, `BP-§10.4-B1`.

## Items that are not Founder questions at this stage

- **U-3** (`20-§23-10` split assignment): held for Mission Control reconciliation; T7 only if a changed approved assignment is needed.
- **DC-06** (Manager Ask CFO permission granularity): a security and authority design question for the Blueprint/EIS with specialist review; not assumed binary.
- **U-5** (retention after cancellation): Build Plan §15 item 6; not on this mission's critical path.
- **U-2** (FPDR-1 draft label): canonical decision stands; label discrepancy noted.

**DRAFT — STOP FOR MISSION CONTROL STAGE 2 CONTENT REVIEW. NO FOUNDER DIALOGUE IS AUTHORIZED BY THIS BRIEF.**
