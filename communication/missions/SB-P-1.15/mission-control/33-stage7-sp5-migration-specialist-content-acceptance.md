# SB-P-1.15 — MC-32 S7-SP-5 Migration/Data-Transition Specialist Content Acceptance

**Decision:** SB-P-1.15-MC-32  
**Reviewed DRAFT PR:** #890 at original specialist head `201b5807de7f144999723e222d1c648e24878050`  
**Specialist report blob:** `6561110273b07644181a67a4b8d0085cad1f0883`  
**Protected main at review:** `8e5a2d1e12ab0982d5843d93830d5469aad4fc91`  
**Engineering Review:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` — OPEN/DRAFT/UNMERGED  
**Status:** PROPOSED — effective after authorized-human merge and independent MC post-merge verification  
**Implementation / migration execution:** NOT AUTHORIZED

## 1. Publication and evidence verification

Mission Control independently fetched S7-SP-5's original report from the immutable specialist head and confirmed PR #890 was OPEN/DRAFT with **exactly one added specialist file (+467 / -0)** before this acceptance addition. MC independently checked **30 unique explicitly cited canonical FCTM identifiers** against the 803-row matrix: **zero missing**. Identifier validity is not runtime or interpretation proof.

The reviewer identifies an existing continuous ChatGPT / GPT-5.6 Sol / OpenAI Migration/Data-Transition conversation, discloses prior SB-P-1.14 migration work and correlated model/provider assumptions, declares no SB-P-1.15 Stages 2–7/PR #870 authorship and no S7-SP-1/2/3/4/6 or S7-PAR session overlap. Mission Control accepts this as MC-30/MC-31-level *conversation/repository documentary non-author independence*, without cryptographic verification. This specialist is excluded from S7-PAR.

The specialist reports a common secret-pattern scan with zero hits. The repository's Python Markdown Quality Gate was **not executed locally** owing to lack of checkout/network access. The original specialist head returned **no observable GitHub Actions workflow runs**, and Mission Control claims **no CI pass**. All migration/security/replay/restore negative tests are **PROPOSED — NOT EXECUTED**.

## 2. Mission Control substantive disposition

**S7-SP-5 MIGRATION/DATA-TRANSITION DOCUMENTARY CONTENT: ACCEPTED FOR CANONICAL PUBLICATION, SUBJECT TO HUMAN MERGE.** Its feasible-in-principle assessment does not establish a rehearsed, applied or safe production migration.

- **MIG15-S7-01 HIGH — RESTORATIVE CORRECTION REQUIRED:** reconcile PR #870 stale T1 to canonical FPDR-02 prospective-only correction notifications; no historical replay, backlog inferred from legacy `notification_status='pending'`, synthetic bulk status rewrites or invented cutoff; future boundary separately authorized; FDB-1(d2) UNASSIGNED. Preserve audit/legal/privacy/retention and recipient/activation holds.
- **MIG15-S7-02 HIGH — ACCEPT DIRECTION / FOUNDER HOLD:** DC-03 existing-business timezone default unresolved; no silent `Asia/Kolkata` backfill, NULL coercion, premature NOT NULL or historical Ledger-date re-interpretation. Additive nullable/held handling is an engineering option, not a Founder decision.
- **MIG15-S7-03 HIGH — CORRECTION REQUIRED:** atomic birth-safe table/sequence/function/RPC creation hardening, creator-role default ACLs, RLS/policies, effective grants, signatures/overloads, owners/search_path, current principal/business checks; no transient unsafe privilege window.
- **MIG15-S7-04 HIGH — CORRECTION REQUIRED:** durable business-effect/occurrence/briefing-slot/notification/financial command identities distinct from worker attempts/leases; schema uniqueness and authoritative DTX unknown-outcome recovery prevent duplicate effects after crashes, retries and restore.
- **MIG15-S7-05 HIGH — ACCEPT DIRECTION / HARD INVARIANT:** historical financial classification, dates, correction actors/reasons, repayment linkage and audit attribution must remain unchanged by SB-P-1.15 migration; require exact before/after evidence.
- **MIG15-S7-06 HIGH — CORRECTION REQUIRED:** pre-data rollback versus post-data forward-fix, partial migration recovery, PITR/backup restore and scheduler fencing/reconciliation, without destructive deletion of valid merchant records or duplicate downstream actions.
- **MIG15-S7-07 HIGH DEPENDENCY — ACCEPT DIRECTION / RETAIN HOLD:** D12 → D13 → D14/DTX → SB-P-1.15 sequencing remains; locked EIS and repository SQL are not evidence of applied migrations, effective access, command cutover or actual readiness.

Retain applicable `H-D12`, `H-D13`, `H-D14`, `H-DTX`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-IDEM`, `H-TZ`, `H-TZDEF`, `H-MIG`, `H-NTF` and legal/privacy/retention, backup/PITR, migration-ledger, negative-test and CI/runtime evidence holds. Production grants/RLS, row/status distributions, actual migration ledger, upstream DTX deployment, scheduler, notification, recovery and backups remain **UNVERIFIED — ACCESS REQUIRED**.

## 3. Source 18 and next gate

FPDR-02 resolves T1 product policy; FPDR-03 resolves missed-briefing T6. DC-03 remains an existing unresolved materiality watch and FDB-1(d2) remains unassigned. Restoring canonical Founder records in stale *unmerged* PR #870 does not by itself trigger a new T7; a genuine omission, deferral, pull-forward, simplification, reassignment or reclassification requires T7 screening. No engineering evidence establishes T8 infeasibility; dependency-held rows remain in scope.

MC-32 is appended as **one Mission Control record to specialist PR #890**, without altering the original specialist report. Following this change PR #890 should contain **exactly two new files**: original specialist review and MC-32 disposition. Only an authorized-human merge and subsequent protected-main verification make S7-SP-5 canonical.

S7-SP-1/2/3/4 are canonical. S7-SP-6 Notification Foundation and separately independent S7-PAR remain pending. Do not edit/merge PR #870 or alter Blueprint, FCTM, Founder/source records, code, SQL, migrations, providers, databases, backup, scheduler or production. No EIS, implementation, activation or deployment authority.

**STOP FOR AUTHORIZED-HUMAN MERGE OF PR #890.**
