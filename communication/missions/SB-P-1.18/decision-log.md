# SB-P-1.18 — Decision Log

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Standard:** Source 18 v1.2 §10; AI Communication and Handover Protocol v1.1 §7
**Created:** under MC-528, 2026-10-26. SB-P-1.18 had no decision log before this. Under MC-528 this log registers the Founder decision `18:FPDR-2` only. Entries for earlier Mission Control records are not reconstructed here.

**How to read this log.**

- **Index only.** This log points to records and does not reproduce decision wording. Where a record and this log differ, the record prevails.
- **Status** follows Source 18 §3.3: a decision is effective only when its record is human-merged to `main`.
- **Status reconciliation.** When a decision's status changes after merge, it is reconciled in place under a Mission Control authorization. The earlier status is kept as history in the same cell, and Git keeps the earlier blob.
- **Paths** are relative to `communication/missions/SB-P-1.18/`.

## Founder decisions

| ID | Decision | Status | Record |
|---|---|---|---|
| F-01 | `18:FPDR-2` (`SB-P-1.18 / F-2`): live tracking. Founder selected Option A (MC-520); T2 source conflict; T7 commitment reduction | **APPROVED — canonical.** Founder human-merged in PR #1082 at merge commit `959f50998f4e0ac7b65ef7aaa2f0bd6a7201a5b5`, 2026-10-26T09:52:03Z; Mission Control post-merge verification MC-533. *History:* first recorded as PROPOSED, for review on the MC-528 draft pull request (log blob `db59a0ad`); reconciled under MC-534 | `claude-code/11-stage3-founder-product-decision-record-18-fpdr-2.md`; authorization `mission-control/06-stage3-founder-decision-gate-and-f2-record-publication-authorization.md` (PR #1081) |

No other Founder decision is registered. F-1, F-3, F-4 and F-5 are open questions, not decisions, and Stage 3 remains open (`mission-control/06-…` §5, §9).
