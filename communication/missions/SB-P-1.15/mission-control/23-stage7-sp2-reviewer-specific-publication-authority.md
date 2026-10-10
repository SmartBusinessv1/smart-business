# SB-P-1.15 — MC-22 S7-SP-2 Reviewer-Specific Publication Authorization

**Decision:** SB-P-1.15-MC-22  
**Authority:** Source 18 Stage 7 §4.8; MC-16, MC-21; canonical FPDR-02/03  
**Protected main baseline:** `a21d3c6ac15711222ec41a1fd7e9daacda6b739a`  
**Challenged Engineering draft:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` — OPEN/DRAFT  
**Status:** PROPOSED — effective only after authorized-human merge and independent MC post-merge verification  
**Implementation:** NOT AUTHORIZED

## 1. Reviewer appointment and limitations

Mission Control received the same existing **Infrastructure Specialist ChatGPT project room**'s read-only reconfirmation. It self-identifies as ChatGPT / GPT-5.6 Sol / OpenAI, declares continuous session with the earlier S7-SP-2 candidate assessment, prior SB-P-1.14 Infrastructure/Storage-Provider specialist work, and no SB-P-1.15 Stages 2–7 authorship. It declares no session/authorship overlap with the canonical S7-SP-1 Security reviewer and no work for S7-SP-3–6 or S7-PAR.

**S7-SP-2 reviewer: CONDITIONALLY APPOINTED for one non-author documentary specialist report, subject to continuing these declared boundaries at publication.** Mission Control accepts conversation/repository-level continuity, not cryptographic session authentication or independent provider-side proof. Shared OpenAI/model lineage and the candidate's earlier self-assessments must remain disclosed. This reviewer must not subsequently serve as S7-PAR or another purportedly separate specialist without new Mission Control independence disposition. If session separation or authorship facts cannot be maintained, STOP.

## 2. Exact single-report grant after crossing

Upon human merge of MC-22 and independent MC verification of protected main, the existing Infrastructure Specialist room may:

1. Create **only** branch `mission/SB-P-1.15-stage7-sp2-scheduler-concurrency-time-review` from freshly verified protected main. STOP if it already exists or protected sources drift materially.
2. Add **one file only**: `communication/missions/SB-P-1.15/specialists/02-stage7-scheduler-concurrency-time-review.md`.
3. Open **one DRAFT PR** to protected `main`; report its exact head SHA, base SHA, changed paths, check status and any drift. Do not self-merge.

No other branch, file or PR authority is conveyed.

## 3. Substantive report requirements

Independently challenge PR #870 with evidence rather than inherit its feasibility conclusions. Cover the eight candidate findings with severity, exact relevant FCTM IDs, engineering sections, specification refinements, residual holds and proposed test matrix:

- **SP2-01 HIGH:** restore **canonical FPDR-03**, now resolving the draft's stale skip-versus-late T6 question. Display the latest valid **native** briefing when available, showing scheduled business-local slot, actual generation timestamp, source-data as-of/limitations; no invented staleness cutoff, success guarantee, or delayed outbound channel.
- **SP2-02 HIGH:** separate logical reminder occurrence / Daily Intelligence slot, execution attempt, atomic claim and expiring lease/fencing-token identity.
- **SP2-03 HIGH:** protect unknown-outcome crash/retry windows through stable downstream DTX/PQ-2 command or notification-event idempotency keys; do not promise exactly-once scheduler execution.
- **SP2-04 HIGH:** bind each automation execution to the current approved grantor/principal, business, action, object limits and rule version; no implicit authority from service role or scheduler.
- **SP2-05 HIGH:** use 07:00/10:30/22:00 business-local named slot identity; define future timezone changes without rewriting history and deterministic repeated/nonexistent local-time behavior when relevant.
- **SP2-06 HIGH:** DC-03 existing-merchant timezone default remains **UNRESOLVED**, with no silent Asia/Kolkata backfill or historic Ledger date rewrite.
- **SP2-07 HIGH:** authorize all privileged operations from claimed persisted business scope and current authority; deny cross-business payload substitution/stale claims.
- **SP2-08 MEDIUM:** preserve only approved 07:00, 10:30 and 22:00 slots, not historical 06:00/09:15 schedules.

Include concurrent double-claims, fencing expiry, materialization races, crash-after-financial-commit, crash-after-notification-request, revoked/narrowed delegations, A/B tenant isolation, future timezone change/DST edge semantics, late/no briefing, duplicate retries, outage isolation and old schedule regression as **planned tests**, not executed proofs.

Independently discuss Source 18 T1–T8, including the interpretive ambiguity of the draft's numerous dependency-`BLOCKED` rows versus genuine feasibility-trigger T8; do not reclassify rows or waive a true trigger without MC authorization. Correctly recognize FPDR-02 prospective-only correction notifications and FPDR-03 resolved latest-valid native briefings. No new merchant-default selection or Product Truth change. Maintain `H-SCHED`, `H-TZDEF`, `H-PRIV`, `H-ISO`, `H-IDEM`, D12/D13/D14/DTX and related security/migration evidence holds.

Distinguish repository specification from actual deployed scheduler, SQL/RLS, provider, time-zone migration, runtime tests, CI and production facts: **UNVERIFIED — ACCESS REQUIRED** unless independently evidenced.

## 4. Validation / restrictions

Before branch creation and PR publication recheck the actual protected-main head, Source 18/MC-22, canonical FCTM and PR #870 exact head. Validate cited FCTM IDs and the authorized one-file diff. Run available Team LIPS Markdown Quality Gate and secret scan; report actual results without inventing GitHub Actions or runtime passes.

**Do not modify or merge PR #870, Blueprint, FCTM, Founder decisions, source documents, code, SQL/migrations, database, scheduler configuration/provider, production, implementation, EIS or other specialist files.** MC will review published contents and may append its own separately authorized disposition after independent verification. S7-SP-1 remains canonical; S7-SP-3–6 and separate non-author S7-PAR remain pending.

**STOP FOR AUTHORIZED-HUMAN MERGE OF MC-22; THEN EXACT REVIEWER HANDOVER.**
