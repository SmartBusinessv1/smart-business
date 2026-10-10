# SB-P-1.15 — MC-31 S7-SP-5 Reviewer-Specific Migration/Data-Transition Publication Authority

**Decision:** SB-P-1.15-MC-31  
**Authority:** Source 18 Stage 7 §4.8, MC-16 and canonical MC-30  
**Verified protected main:** `278157310ecac055c8963e36ee8a0c1ebbdcad4a`  
**Engineering Review challenged:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` (OPEN/DRAFT/UNMERGED)  
**Status:** PROPOSED — effective only after authorized-human merge and independent Mission Control protected-main verification  
**Implementation/migration execution:** NOT AUTHORIZED

## 1. Reviewer appointment and provenance

Mission Control received the same existing **Migration / Data-Transition Safety ChatGPT conversation's** read-only reviewer reconfirmation and proposal. Reviewer self-identifies **ChatGPT / GPT-5.6 Sol / OpenAI**, with prior independent SB-P-1.14 Stage 7 and Stage 10 migration/data-transition specialist work and related delta confirmation. Reviewer declares no authorship or material contribution to SB-P-1.15 Stages 2–7, canonical FCTM, Blueprint or PR #870, and no session/authorship overlap with S7-SP-1 Security, S7-SP-2 Infrastructure, S7-SP-3 Finance, S7-SP-4 AI Behaviour, S7-SP-6 Notification Foundation or S7-PAR.

**S7-SP-5 reviewer: CONDITIONALLY APPOINTED** to publish exactly one independent non-author documentary migration/data-transition specialist report, contingent on continuing the same-session and independence declarations. Shared GPT-5.6 Sol/OpenAI lineage and inherited SB-P-1.14 migration assumptions create correlated-review risk; conversation-level continuity is not cryptographic identity or provider-side verification. The specialist may **not** act as separate independent S7-PAR. If conditions change, STOP.

## 2. Exact reviewer-specific publication authority — effective only after human crossing

After Founder/authorized-human merge of MC-31 and independent MC verification on protected `main`, the same specialist room may:

1. Reconfirm protected `main`, canonical MC-31, canonical FCTM/FPDR-02/03 and PR #870 status/head. Stop on material drift or occupied target branch/path.
2. Create **only** dedicated branch `specialist/SB-P-1.15-s7-sp5-migration-data-transition-review` from that newly verified protected `main`.
3. Add **exactly one new specialist-authored file**: `communication/missions/SB-P-1.15/specialists/05-stage7-migration-data-transition-review.md`.
4. Open **exactly one DRAFT PR** against protected `main`, **do not self-merge**, and return exact PR number/URL, base/head SHA, file blob, diff, tests, scan and observed CI status for independent Mission Control content review.

No other file, branch, PR, source contract, model prompt, SQL migration or runtime authorization is granted.

## 3. Required report findings

Document independent immutable evidence, seven severity-qualified findings, canonical FCTM IDs, affected Stage 7 sections, correct-versus-hold dispositions, residual dependencies, negative tests and Source 18 trigger screening:

- **MIG15-S7-01 HIGH — RESTORATIVE CORRECTION:** canonical FPDR-02 requires prospective-only historical-correction notification activation. No replay of old correction events, `notification_status='pending'` backlog inference, bulk legacy status rewriting, invented activation cutoff or guessed delivery; preserve lawful audit/privacy/retention and FDB-1(d2) UNASSIGNED.
- **MIG15-S7-02 HIGH — ACCEPT DIRECTION / FOUNDER HOLD:** DC-03 existing-business timezone default unresolved. No silent `Asia/Kolkata`/other backfill, browser/locality inference, premature non-null constraint or historical Ledger date reinterpretation; nullable schema with dependent activation held is an engineering option, not a Founder decision.
- **MIG15-S7-03 HIGH — CORRECTION:** protected table/function/sequence/RPC security born atomically in creation migration: RLS/ACL, intended current actor/tenant authority, default creator privileges, function ownership/search_path/signature/overloads, effective `PUBLIC`/`anon`/authenticated/executor access. No temporary unsafe object exposure.
- **MIG15-S7-04 HIGH — CORRECTION:** distinguish durable reminder rule/recurrence/occurrence, business-local briefing slot, notification request, worker attempt/lease and consequential DTX command identities; crash, retry, concurrency, restore and lost acknowledgement cannot duplicate effects.
- **MIG15-S7-05 HIGH — ACCEPT DIRECTION / HARD INVARIANT:** historical Ledger/correction/audit identity, business dates, classifications, repayment links and attribution must not be rewritten or fabricated. Proposed before/after protection evidence required.
- **MIG15-S7-06 HIGH — CORRECTION:** pre-data rollback versus post-data forward-fix, partial migration recovery, PITR/backup restore, worker pause/fencing, reconciliation to prevent reissuing effects absent from restored database snapshot; never destroy legitimate merchant history.
- **MIG15-S7-07 HIGH DEPENDENCY / RETAIN HOLD:** D12 → D13 → D14/DTX → SB-P-1.15 build/migration order is directionally correct; locked EIS documents are **not** proof of applied migrations, effective access, command cut-over, CI, rehearsal or production readiness.

Include proposed safety matrix covering historical correction replay, timezone-null, grants-at-birth, RLS/service-role tenant isolation, logical identity replay, duplicate financial/notification effects, Ledger invariants, restore/forward-fix and migration-ledger readiness. Tests must be **PROPOSED — NOT EXECUTED** unless direct evidence actually exists.

Preserve FPDR-03 latest-valid native briefing (with truthful scheduled vs generation time/source-as-of) and do not reopen T6. DC-03 remains separately unresolved. FPDR-02 closes historical-notification T1 product policy, not technical activation evidence. Restoring approved truth into stale unmerged PR #870 is not by itself a new T7 scope change; any real omission/deferral/pull-forward/reclassification/mission reassignment requires T7 screening. Raise T8 only with specific supported infeasibility, not dependency `BLOCKED` assertions.

Retain relevant `H-D12`, `H-D13`, `H-D14`, `H-DTX`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-TZ`, `H-TZDEF`, `H-MIG`, `H-NTF`, backup/recovery, migration-ledger and test/production evidence holds. S7-SP-1/2/3/4 findings stay canonical, without other-reviewer authorship rights.

## 4. Verification and hard restrictions

Before report PR publication validate all cited canonical FCTM identifiers, one-report diff, repository Markdown Quality Gate locally when possible and secret-pattern scan. Report only GitHub Actions runs actually observable. Distinguish documentary repository proof from **UNVERIFIED — ACCESS REQUIRED** production SQL/RLS/default ACLs, scheduler, notifications, backup/PITR, D12–14/DTX deployments, recovery, tests and merchant records.

**Do not change PR #870**, Blueprint/FCTM, Founder decisions, source contracts, other specialist reports, application code, SQL/migrations, database, provider, CI configuration, scheduler, backups or production. No EIS, implementation, migration, reset, backfill, restore, notification dispatch, financial transaction or deployment is authorized.

**STOP FOR AUTHORIZED-HUMAN MERGE OF MC-31. THEN EXACT S7-SP-5 REPORT PUBLICATION HANDOVER.**
