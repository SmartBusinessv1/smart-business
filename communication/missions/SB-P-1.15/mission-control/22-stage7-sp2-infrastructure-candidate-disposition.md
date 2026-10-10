# SB-P-1.15 — MC-21 S7-SP-2 Infrastructure Candidate Assessment Disposition

**Decision:** SB-P-1.15-MC-21  
**Authority:** Source 18 Stage 7 §4.8; MC-16 through MC-20  
**Protected main:** `377a2a4be976cc4af777ce4d964e493039272981`  
**Engineering draft:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` (OPEN/DRAFT)  
**Status:** PROPOSED — effective only after authorized-human merge and independent MC verification  
**Implementation:** NOT AUTHORIZED

## 1. Candidate review and eligibility

A read-only S7-SP-2 Infrastructure candidate assessment identifies its reviewer as **ChatGPT / GPT-5.6 Sol / OpenAI**, in the existing Team LIPS Infrastructure ChatGPT project room. It declares non-authorship of SB-P-1.15 Stages 2–7, prior SB-P-1.14 infrastructure/storage-provider specialist work, and no use of the Claude Code authoring session.

**Disposition: CONDITIONALLY ELIGIBLE FOR NON-AUTHOR S7-SP-2 CANDIDACY, subject to continuity and independence reconfirmation.** The candidate self-reports session/model/provider provenance; Mission Control cannot independently authenticate a cryptographic session identity or independently establish unseen prior participation from the repository alone. The actor must disclose whether it is the same reviewer/session as S7-SP-1 or any other specialist; reuse of the same underlying reviewer/session across supposedly independent reviews must be surfaced to MC before an appointment. **No reviewer-specific publication right or report PR is granted here.**

## 2. Findings accepted for engineering correction triage

- **SP2-01 HIGH — stale T6 Founder decision in PR #870.** MC independently verified canonical `communication/missions/SB-P-1.15/founder/04-t6-latest-valid-briefing-founder-decision.md` blob `2382846bc802df25f3e581d58648b6492f3316eb`. Exact PR #870 Stage 7 report blob `5d3a23696b8a9c13e7a9d05e654463f56e204721` still describes T6 as a future Founder choice, including "skip versus late." The draft requires restorative reconciliation with FPDR-03: latest valid native briefing if available, distinguish scheduled slot / actual generation / source as-of, no duplicate/misleading notifications, no invented cutoff or outbound catch-up delivery. This is **staleness of an open draft**, not conflict between canonical approved sources.
- **SP2-02 HIGH — occurrence versus attempt:** explicit unique logical occurrence/slot IDs, attempts, atomic claims, bounded leases and fencing against stale workers.
- **SP2-03 HIGH — unknown-outcome recovery:** stable downstream governed-command and notification idempotency keys across crashes after side effect and before job completion. Distinguish exactly-once business outcome from at-least-once scheduler attempts.
- **SP2-04 HIGH — delegated automation authority:** current principal, business, action, object-set and rule-version binding revalidated at each consequential execution; service role and scheduler environment never constitute merchant authorization.
- **SP2-05 HIGH — business-local slot/timezone semantics:** named 07:00/10:30/22:00 local slots; distinct slot identity; deterministic treatment of repeated/nonexistent local clock instants; future-only timezone recalculation and stable past history.
- **SP2-06 HIGH — DC-03:** existing-merchant timezone default remains unresolved; neither choose a default nor rewrite historical business dates.
- **SP2-07 HIGH — scheduler tenant isolation:** persisted authorized business identity and current authority at every privileged query; disallow foreign payload scope and stale-worker effects.
- **SP2-08 MEDIUM — fixed slots:** preserve 07:00/10:30/22:00, avoid historical 06:00/09:15 values.

The assessment proposes 17 negative/concurrent/time/recovery scenarios covering double claims, fencing, crash-after-financial-commit, crash-after-notification request, revoked grants, cross-business tampering, timezone shifts and late/stale briefings. These are **proposed tests, not performed runtime tests**.

## 3. Source 18 and holds

**T7 restorative reconciliation candidate: CONFIRMED** for the existing Founder-resolved FPDR-03 T6 policy omitted from the unmerged Engineering draft; engineering specification clarification is required for scheduler occurrence/attempt, crash recovery, privilege binding, local-time and tenancy. **T8: NOT ESTABLISHED** by this assessment; no impossibility was shown. A Source 18 terminology issue requires separate MC/S7-PAR review: PR #870 uses `BLOCKED` for dependency/evidence holds, whereas Source 18's T8 wording may associate a genuinely blocked requirement with an escalation trigger. Do not silently equate dependency hold with engineering infeasibility or silently waive a true T8; resolve at final register reconciliation.

Keep `H-SCHED`, `H-TZDEF`, `H-PRIV`, `H-ISO`, `H-IDEM` and relevant `D12/D13/D14/DTX` prerequisites. Production scheduler/provider selection, live SQL/RLS, execution environment, grants, concurrency tests and deployment remain **UNVERIFIED — ACCESS REQUIRED**. No evidence supports silent existing-merchant timezone assignment. T1 FPDR-02 prospective-only correction policy unchanged. FDB-1(d2), U-3/U-5 and DC-06 unchanged.

## 4. Next authority crossing

Following human merge and protected-main verification of MC-21, request that the existing Infrastructure room supply an exact **read-only reviewer/session continuity and cross-specialist correlation statement**, complete evidence summary and one-report publication plan. MC may then issue a separate named-actor, one-branch/one-report DRAFT PR publication authority for reserved `communication/missions/SB-P-1.15/specialists/02-stage7-scheduler-concurrency-time-review.md`.

No publication/branch permission is granted by this record. No modification to PR #870, Blueprint, FCTM, contracts, Source 18, Founder records, code, SQL, migrations, providers, scheduler, notification runtime, CI or production; no implementation or EIS authorization.

**STOP FOR AUTHORIZED-HUMAN MERGE OF MC-21.**
