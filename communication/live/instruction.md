# SMART BUSINESS MISSION CONTROL — MC-35

# SB-P-1.12 — Stage 7 Engineering Review Activation (HOLD UNTIL EFFECT)

**From:** Smart Business Mission Control
**To:** Claude Code — Engineering Review owner once effective; documentary preparer until then
**Status:** DRAFT — HOLD. Effective only as stated in Section 13 of the activation record.
**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**Prepared by:** Claude Code as documentary preparer at Mission Control's direction; not approved by Claude Code.
**Verified canonical baseline:** `main@df5d5257e1d22072f2163b2d04d04e72e73f0a0c` (PR #639 human-merged `2026-09-25T12:41:08Z`, approved head `6cb3b72e1dc73c005a4654d293ed755961091e20`, verified post-merge by MC-34).
**Activation record:** `communication/missions/SB-P-1.12/mission-control/21-stage7-engineering-review-activation-record.md`.
**Prior live pair, preserved byte-identically:** `mission-control/22-reviewer-appointment-live-instruction-snapshot.md` and `claude-code/24-reviewer-appointment-live-report-snapshot.md`.

## Current state

- **G-2** independent reviewer appointment: **SATISFIED for Stage 7 START** (MC-33, PR #639, MC-34). The independent security review is **not complete**.
- **G-1** Stage 7 authorization: **OPEN** until the activation record is human-merged and Mission Control records its verification of that merge.
- **Stage 7: NOT YET AUTHORIZED.**

## Standing instruction to Claude Code

**HOLD.** Until Mission Control records its post-merge verification of the activation record on its pull request, no Claude Code action beyond reading is authorized.

- No Git authority is granted by this instruction. The MC-35 preparation authority expired on submission of the draft activation PR and its handover report.
- Do not create `mission/SB-P-1.12-stage7-engineering-review`, draft Sections 20–21 or write any per-row finding before that verification.

## Once effective

When Mission Control records its verification of the activation record's merge, the activation record's Sections 4 to 12 become the operative Stage 7 instruction, with no further status-only PR. Claude Code then acts only within them, in particular:

- deliverables A to E in Section 5, with all 228 `IN SCOPE` rows addressed and none moved or narrowed;
- the independent-review conditions and handoff path in Section 6. Claude Code does not write to `specialists/**`, and affected findings are not accepted or relied on before the review is completed and dispositioned;
- the retained gates G-3 to G-8 and S-2 to S-7 in Section 7, each blocking only the dependent finding or action;
- the protected Product Truth and stage boundaries in Section 8, and the scope flags in Section 9;
- the Git grant, exact paths, Blueprint regions, operations, expiry and stop conditions in Section 10;
- the closing line in Section 10.7.

## Not authorized at any point by this instruction

Stage 8, Blueprint lock, EIS, implementation package, code, SQL, migration execution, production inspection or mutation, workflow or branch-protection change, delivery or publication, and any answer to the F-03 derived-value question or multiple-business ownership. No self-approval or self-merge.

## Stop conditions

**While on HOLD** (until the human merge and Mission Control's recorded post-merge verification): stop and report, without guessing, if canonical state differs from Section 1 of the activation record, if any statement would imply that the independent review is complete or a gate other than G-1 is closed, if an open question would have to be answered, or if a production, provider, branch-protection or workflow change would be needed.

**Once effective**, Section 10.6 of the activation record governs, and it separates two cases:

- **Mission-wide stop:** a missing canonical authorization or verification; changed governing state, source or target; path, region, branch or CI safety events under Protocol §21; forbidden access; or inability to proceed without an unauthorized change. All Stage 7 work stops and is reported.
- **Finding-scoped hold:** G-3 or G-4, S-2 to S-7, evidence under G-5 to G-7, T1, T2, T3 or T7. Record the exact affected rows, keep them `IN SCOPE`, do not decide or rely on the issue, escalate to Mission Control, and continue unrelated authorized drafting and read-only planning.
- **T8:** stop the affected work immediately and escalate. Unrelated rows are not thereby accepted, and Mission Control decides whether wider work stops.

A Mission Control return for correction does not end the authority. Section 10.5 governs the end events and the `2026-10-17T23:59:59Z` outside expiry.

**Required closing line for the preparation report under this instruction:** `MC-35 STAGE 7 ACTIVATION GATE DRAFT SUBMITTED — AWAITING MISSION CONTROL EXACT-HEAD REVIEW AND FOUNDER HUMAN MERGE; G-2 APPOINTMENT SATISFIED; G-1 OPEN UNTIL ACTIVATION MERGE VERIFICATION; STAGE 7 NOT YET AUTHORIZED.`
