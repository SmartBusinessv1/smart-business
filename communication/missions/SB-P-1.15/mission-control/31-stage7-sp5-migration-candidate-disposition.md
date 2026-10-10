# SB-P-1.15 — MC-30 S7-SP-5 Migration/Data-Transition Specialist Candidate Disposition

**Decision:** SB-P-1.15-MC-30  
**Authority:** Source 18 Stage 7; MC-16; MC-29; FPDR-02/03  
**Verified protected main:** `f30fc1582aee8977c0f00fe8a9ed16a2c3cf50a6`  
**Challenged Engineering Review:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` (OPEN/DRAFT)  
**Status:** PROPOSED — effective only following authorized-human merge and Mission Control independent post-merge verification  
**Implementation:** NOT AUTHORIZED

## 1. Reviewer eligibility and scope

The existing Migration/Data-Transition Specialist ChatGPT room self-identifies as GPT-5.6 Sol / OpenAI, previously involved in independent SB-P-1.14 Stage 7 and Stage 10 migration/EIS/delta reviews. It declares **no authorship or material contribution to SB-P-1.15 Stages 2–7, FCTM, Blueprint or PR #870**, and no session/authorship overlap with S7-SP-1 Security, S7-SP-2 Infrastructure, S7-SP-3 Finance, S7-SP-4 AI Behaviour, proposed S7-SP-6 Notification Foundation or S7-PAR.

**S7-SP-5: CONDITIONALLY ELIGIBLE for independent non-author documentary migration review**, subject to a second same-session/cross-specialist reconfirmation. Shared GPT-5.6 Sol/OpenAI lineage and correlated upstream migration assumptions must be disclosed. Conversation-level identity evidence does not provide cryptographic or provider-side proof. An S7-SP-5 reviewer must not be appointed independent S7-PAR.

**No specialist publication, branch/file/PR, schema change, data migration or implementation authority is granted here.**

## 2. Candidate finding dispositions

Mission Control accepts seven findings **for candidate triage and future specialist challenge**, not as production evidence or Stage 7 acceptance:

1. **MIG15-S7-01 HIGH — RESTORATIVE CORRECTION REQUIRED.** PR #870 still treats T1 historical correction notifications as undecided, whereas canonical FPDR-02 (blob `373a31dfff67b11c9d342abe21554b777ccb89b8`) requires prospective-only requests. Legacy `notification_status='pending'` is neither proof of undelivered backlog nor a migration replay trigger. No historical replay, bulk status rewrite, invented activation date or assumed FDB-1(d2) owner; preserve record/audit/privacy/retention obligations.
2. **MIG15-S7-02 HIGH — ACCEPT DIRECTION / FOUNDER HOLD.** DC-03 existing-merchant timezone default unresolved. Do not silently backfill `Asia/Kolkata`, coerce null to `NOT NULL`, infer merchant timezone, or reinterpret historical Ledger dates. Nullable/additive schema with timezone-dependent work held is a proposed safe sequence, not approval of a default.
3. **MIG15-S7-03 HIGH — CORRECTION REQUIRED.** New protected objects need **atomic birth-safe grants/RLS/function hardening** in the creation migration; account for creator-role ACLs, sequences, RPC signatures/overloads, `PUBLIC`/`anon`/other effective privileges and current principal/tenant authority. Do not overstate later migration grants as live deployment proof.
4. **MIG15-S7-04 HIGH — CORRECTION REQUIRED.** Persist stable recurring-rule/occurrence/briefing-slot/notification-request/financial-effect identities separate from worker execution attempts, leases and retries; uniqueness, recovery and DTX/PQ-2 unknown-outcome lookup must prevent duplicate effects.
5. **MIG15-S7-05 HIGH — ACCEPT DIRECTION / HARD INVARIANT.** Historical Ledger transaction dates/types, credit/repayment meanings, correction reason/actor/audit attribution and original event references must not be rewritten or fabricated by SB-P-1.15 schema or timezone migration. Before/after invariants required.
6. **MIG15-S7-06 HIGH — CORRECTION REQUIRED.** Explicit pre-data rollback, post-data forward-fix, partial-migration detection, backup/PITR restore, scheduler pause and post-restore reconciliation without deletion of legitimate reminder/rule/slot/notification history or replay of downstream effects.
7. **MIG15-S7-07 HIGH DEPENDENCY / HOLD — ACCEPT DIRECTION.** D12 → D13 → D14/DTX → SB-P-1.15 ordering is directionally sound but EIS documentation is not deployed implementation, effective-access/command-cutover proof, migration-ledger evidence or rehearsed readiness.

The specialist's migration, recovery, ACL, tenant-isolation, historical-record, notification, timezone and ledger test matrix is **PROPOSED ONLY — NOT EXECUTED**. Retain applicable `H-D12`, `H-D13`, `H-D14`, `H-DTX`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-TZ`, `H-TZDEF`, `H-MIG`, `H-NTF`, and backup/CI/migration-ledger/runtime evidence holds. Live production counts, grants/default ACLs, migration ledger, deployment, scheduler, backup/restore and test-project facts remain **UNVERIFIED — ACCESS REQUIRED**.

## 3. Source 18 trigger interpretation

FPDR-02 resolves the historical notification **T1 product-policy question**, and FPDR-03 resolves missed-briefing **T6** latest-valid native display. **DC-03 remains an existing materiality watch**. Stale unmerged PR #870 wording requires finding-scoped restorative reconciliation; this is not by itself a new T7 omission/deferral/reclassification, but any actual proposed movement of approved requirements triggers T7 and any demonstrated infeasible/unsafe migration condition triggers T8 rather than weakening commitments. No fresh T8 evidence is established. Do not independently edit the FCTM or classify broad dependency-`BLOCKED` rows as actual T8 infeasibility without the required evidence and MC screening.

## 4. Next gate / restrictions

After human merge and protected-main verification, request a fresh **READ-ONLY same-session continuity and cross-specialist independence reconfirmation**, together with an exact one-branch/one-report DRAFT PR publication proposal for the reserved report:

`communication/missions/SB-P-1.15/specialists/05-stage7-migration-data-transition-review.md`

Only a separately authorized, human-merged reviewer-specific MC record may permit publication. S7-SP-1/2/3/4 are canonical. S7-SP-6 Notification Foundation and independent S7-PAR remain outstanding.

**Do not modify PR #870, Blueprint, FCTM, Founder records, sources, contracts, other specialist reports, application code, SQL, migrations, live Supabase, providers, backups or production. Do not activate jobs, generate financial/notification effects, create EIS or implement anything.**

**STOP FOR AUTHORIZED-HUMAN MERGE OF MC-30.**
