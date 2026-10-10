# SB-P-1.15 — Stage 7 S7-SP-2 Scheduler / Concurrency / Business-Local Time Review

**Assignment:** S7-SP-2 — independent non-author Infrastructure specialist review  
**Authority:** Source 18 Stage 7 §4.8; SB-P-1.15-MC-16, MC-21 and MC-22  
**Reviewer:** ChatGPT / GPT-5.6 Sol  
**Provider:** OpenAI  
**Session:** existing Team LIPS Infrastructure Specialist ChatGPT project session  
**Protected-main baseline:** `ba19d3b8839449b90aa105a316265b66bea0456a`  
**Engineering draft challenged:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13` — OPEN/DRAFT/UNMERGED  
**Status:** DRAFT SPECIALIST REPORT FOR MISSION CONTROL CONTENT REVIEW  
**Implementation / runtime authority:** NONE

## 1. Reviewer provenance, continuity and independence

This is the same continuous Team LIPS Infrastructure Specialist ChatGPT project conversation that produced the earlier S7-SP-2 candidate assessment and reviewer-reconfirmation response.

The reviewer self-identifies as **ChatGPT / GPT-5.6 Sol / OpenAI**. Session continuity is established only at the conversation/project level available in this room. No cryptographic session identifier, OpenAI internal audit record or independent provider-side proof is available, and none is claimed.

Prior Smart Business work in this session includes substantial **SB-P-1.14 Infrastructure / Storage-Provider specialist work**, including Stage 7 storage/provider review, Stage 10 EIS storage review and Stage 10 delta confirmation. That prior work creates correlated architectural familiarity with provider gating, idempotency, recovery and authority boundaries.

For **SB-P-1.15**, this reviewer did **not** author or materially contribute to Stages 2–7, the canonical FCTM, Blueprint Sections 1–19, the Stage 6 Builder Review, or PR #870. Before this publication, the only SB-P-1.15 contribution from this session was the read-only S7-SP-2 candidate assessment and the later reviewer continuity/publication proposal.

The canonical S7-SP-1 report identifies a separate **S7-SP-1 Security Specialist ChatGPT project session**. This Infrastructure session did not author that report or participate in that security assessment. Both reviewers share OpenAI / GPT-5.6 Sol lineage, so provider/model-level correlation exists; conversation/session authorship does not overlap based on the available evidence. No cryptographic proof of separate backend execution identities exists.

This session has not acted as S7-SP-3, S7-SP-4, S7-SP-5, S7-SP-6 or S7-PAR. Under MC-16/MC-22, **this reviewer must not serve as S7-PAR** after publishing this topical specialist review.

The review does not accept Claude Code conclusions as authority. PR #870 is treated as the challenged engineering draft. Findings below were independently checked against protected main, Source 18, MC-16/21/22, the canonical FCTM, Stage 6 evidence and canonical Founder decisions.

**Independence conclusion:** ELIGIBLE for S7-SP-2 as a non-author documentary specialist, within the provenance and correlated-assumption limitations above.

## 2. Exact evidence inspected

Read-only evidence inspected:

- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` — Source 18.
- `communication/missions/SB-P-1.15/mission-control/17-stage7-independent-specialist-review-authorization.md` — MC-16.
- `communication/missions/SB-P-1.15/mission-control/21-stage7-sp1-security-specialist-content-acceptance.md` — used only for cross-specialist separation and accepted overlapping security boundary.
- `communication/missions/SB-P-1.15/mission-control/22-stage7-sp2-infrastructure-candidate-disposition.md` — MC-21.
- `communication/missions/SB-P-1.15/mission-control/23-stage7-sp2-reviewer-specific-publication-authority.md` — MC-22.
- `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md` — canonical 803-row FCTM.
- `communication/missions/SB-P-1.15/claude-code/09-stage6-builder-review.md` — Stage 6 evidence/findings.
- `communication/missions/SB-P-1.15/founder/03-t1-prospective-only-correction-notifications-founder-decision.md` — FPDR-02.
- `communication/missions/SB-P-1.15/founder/04-t6-latest-valid-briefing-founder-decision.md` — FPDR-03.
- PR #870 exact head `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`, including `docs/phase-1-mission-blueprint/active/SB-P-1.15.md` Sections 20–21 and `communication/missions/SB-P-1.15/claude-code/11-stage7-engineering-review-report.md`.
- Protected-main repository tree for scheduler/runtime evidence.

Repository observations are documentary facts only. No live Supabase, scheduler/provider, production database, SQL/RLS state, job execution, concurrency behavior or production traffic was accessed.

## 3. Overall disposition

| Finding | Severity | Specialist disposition |
|---|---|---|
| SP2-01 — FPDR-03 reconciliation | HIGH | CORRECTION REQUIRED |
| SP2-02 — logical work versus execution-attempt identity | HIGH | CORRECTION REQUIRED |
| SP2-03 — crash/retry unknown-outcome idempotency | HIGH | CORRECTION REQUIRED |
| SP2-04 — standing-rule current-authority execution | HIGH | CORRECTION REQUIRED |
| SP2-05 — business-local slot and timezone-change semantics | HIGH | CORRECTION REQUIRED |
| SP2-06 — DC-03 existing-merchant timezone default | HIGH | UNRESOLVED FOUNDER/MC HOLD — DO NOT INVENT |
| SP2-07 — cross-business scheduler isolation | HIGH | CORRECTION REQUIRED |
| SP2-08 — fixed schedule integrity | MEDIUM | ACCEPT DIRECTION; NEGATIVE REGRESSION PROOF REQUIRED |

The scheduler architecture is feasible in principle, but Stage 7 should not treat the present wording as specification-complete. No scheduler implementation or runtime assurance is demonstrated.

## 4. SP2-01 — FPDR-03 reconciliation

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

### Evidence

PR #870 at the challenged head still describes missed or delayed Daily Intelligence behavior as an unresolved T6 choice, including skip-versus-late wording.

Canonical FPDR-03 now resolves that merchant-visible question:

- show the **latest valid native briefing when available**;
- show the originally scheduled business-local slot;
- show the actual generation timestamp;
- disclose source-data `as-of` context and material limitations;
- do not create duplicate or misleading notifications;
- do not invent a lateness cutoff, maximum staleness threshold, automatic expiry/skip policy or outbound catch-up delivery;
- preserve the fixed 07:00 / 10:30 / 22:00 business-local rhythm.

This is staleness in an open Engineering Review draft, not a conflict among canonical approved sources.

### Canonical affected FCTM IDs

`4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§13-1`, `4-§13-2`, `4-§13-6`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `4-§16-4`, `4-§16-5`, `BP-§10.4-W5`.

### Affected Engineering Review sections

- §20.3 F5 — Daily Intelligence Rhythm.
- §20.5 B6-03/B6-04/B6-09 carry-forward.
- §20.6 rows carrying `H-T6`.
- §21.1 EQ-08.
- §21.2 missed-briefing risk.
- §21.3 recommendation to seek a future T6 decision.
- §21.5 T6 trigger/policy-neutral boundary.

### Required correction

Reconcile PR #870 to FPDR-03 without inventing new policy. A late successful generation remains the same logical scheduled slot, not a new slot. The specification must distinguish scheduled slot time, actual generation time, and source-data `as-of` time.

### Residual holds

Keep `H-SCHED`, `H-TZ`, applicable `H-TZDEF`, `H-IDEM`, `H-ISO`, D12/D13/D14. FPDR-03 itself is **not** an unresolved product-policy hold.

## 5. SP2-02 — Scheduler identity, atomic claim, lease and fencing

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

### Evidence

PR #870 has the correct direction: deterministic occurrence/slot identity, claim or lease before work, a run ledger, bounded retries and observable outcomes. It does not yet specify a sufficiently strong concurrency contract.

A distributed scheduler must not assume exactly-once worker execution.

### Required specification model

The EIS should separate:

1. **logical work identity** — the reminder occurrence, standing-rule occurrence, scheduler job or Daily Intelligence slot;
2. **execution-attempt identity** — an individual worker attempt;
3. **claim/lease identity** — atomically acquired ownership with expiry;
4. **fencing token/version** — stale attempts cannot commit after a newer claimant has taken over;
5. **downstream effect identity** — stable idempotency key used by the governed domain command or notification foundation.

Required invariants:

- only one current lease may progress a logical item;
- lease acquisition/reclaim is atomic;
- retry increments attempt history without creating a new logical occurrence;
- a stale worker that resumes after lease expiry/reclaim cannot commit completion or downstream effects;
- logical completion and attempt completion are distinguishable.

### Canonical affected FCTM IDs

`11-§7-1`, `11-§7-2`, `11-§7-3`, `11-§22-3`, `11-§22-4`, `11-§22-11`, `22-§18-3`, `22-§18-8`, `22-§18-9`, `22-§18-10`, `4-§13-2`, `4-§13-9`, `22-§29-8`.

### Affected Engineering Review sections

- §20.3 F1 and F3.
- §20.4 Scheduler slot/run ledger planning.
- §20.5 B6-02/B6-03/B6-04.
- §21.1 EQ-03.
- §21.2 duplicate-occurrence/briefing/notification risk.

### Residual holds

Keep `H-SCHED`, `H-IDEM`, applicable `H-BIRTH`, `H-PRIV`, `H-ISO`, D12/D13/D14.

## 6. SP2-03 — Crash/retry idempotency across downstream commitment

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

### Evidence

A lease prevents normal concurrent ownership but cannot by itself prevent duplicate merchant-visible effects when a worker:

1. executes a downstream financial mutation or notification request successfully;
2. crashes before recording scheduler completion;
3. is retried or reclaimed.

Exactly-once scheduler execution is not a safe assumption.

### Required specification correction

For any consequential downstream action:

- derive a stable operation/idempotency key from the logical work item and exact authorized action;
- pass that key into the single governed DTX/PQ-2 command or notification-event/request foundation;
- make retries query/reuse the prior outcome;
- preserve an explicit `unknown outcome / reconcile` state when commitment cannot immediately be proven;
- never mint a fresh business-effect key merely because a scheduler attempt changed;
- keep business-event completion distinct from notification-delivery completion.

### Canonical affected FCTM IDs

`22-§18-3`, `22-§18-8`, `22-§18-10`, `22-§18-11`, `11-§16-3`, `11-§16-5`, `11-§22-6`, `11-§22-7`, `11-§22-10`, `11-§22-11`, `22-§12-5`, `22-§12-6`, `22-§12-8`, `22-§12-9`, `22-§29-7`, `22-§29-8`, `22-§29-10`.

### Affected Engineering Review sections

- §20.3 F2, F3 and F4.
- §20.4 scheduler and notification planned migrations.
- §21.1 EQ-03/EQ-04/EQ-06.
- §21.2 duplicate and second-write-path risks.

### Residual holds

Keep `H-SCHED`, `H-IDEM`, `H-PRIV`, `H-ISO`, applicable `H-NTF`, D12/D13/D14 and DTX/PQ-2.

## 7. SP2-04 — Standing-rule current-authority execution

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

### Evidence

Stage 6 and PR #870 correctly reject plain service-role authority and state that the acting principal comes from the stored rule plus the grantor's **current** authority.

The specification still needs an exact execution-time binding contract.

### Required specification correction

Each standing rule or consequential scheduled action must persist or derive:

- grantor/principal identifier and authority provenance;
- business scope;
- exact action type;
- exact target/object-set scope;
- quantity/value/limit where relevant;
- rule/delegation version;
- enabled/paused/revoked state;
- effective time constraints.

At each consequential execution:

1. derive the principal from trusted stored provenance, never from an untrusted payload;
2. revalidate current authority for the exact business/action/object-set;
3. verify the current rule version and limits;
4. deny if revoked, paused, narrowed, transferred or otherwise insufficient;
5. bind that decision into every privileged read/claim/write;
6. use the single governed downstream command for financial effects.

Scheduler credentials, environment identity or service-role possession are never merchant authority.

### Canonical affected FCTM IDs

`11-§11-1`, `11-§11-3`, `11-§11-4`, `11-§11-5`, `11-§11-6`, `11-§11-7`, `11-§11-9`, `11-§11-10`, `11-§11-11`, `11-§11-13`, `11-§11-14`, `11-§11-15`, `11-§16-1`, `11-§16-2`, `11-§16-3`, `11-§16-4`, `11-§16-5`, `11-§16-6`, `11-§22-8`, `11-§22-9`, `22-§18-7`, `22-§18-11`, `22-§29-7`.

### Affected Engineering Review sections

- §8.2 Delegated Automation and Consequential Continuation.
- §20.3 F2/F3.
- §20.5 B6-05.
- §21.1 EQ-04.
- §21.2 scheduled/service-role risk.

### Residual holds

Keep `H-PRIV`, `H-SEC`, `H-IDEM`, `H-SCHED`, applicable `H-ISO`, D12/D13 and DTX.

## 8. SP2-05 — Business-local named slots and timezone changes

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

### Evidence

Approved current Daily Intelligence slots are:

- **07:00** business-local;
- **10:30** business-local;
- **22:00** business-local.

PR #870 correctly recognizes the business timezone as authoritative and states that recurrence should recompute after timezone change. The future EIS needs a more precise identity and history contract.

### Required specification correction

For Daily Intelligence, prefer a logical slot identity equivalent to:

`business + business-local date + named slot code`

with schedule/rule version where needed, rather than identifying the slot only by a UTC instant.

For reminder recurrence, persist the recurrence rule separately from occurrences and keep stable occurrence identity/history.

A business timezone change should:

- affect future scheduling from an explicitly defined boundary;
- not rewrite completed occurrence identities;
- not reinterpret historical Ledger business dates;
- preserve audit history of the old/new timezone and recomputation boundary.

Where a supported timezone can produce repeated or nonexistent wall-clock instants, the scheduler must define one deterministic rule for occurrence materialization and prove that one logical slot cannot cause two business effects. This is an engineering requirement, not authorization to choose a merchant timezone default.

### Canonical affected FCTM IDs

`4-§2-5`, `4-§13-5`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `11-§4-4`, `11-§4-5`, `11-§7-1`, `11-§7-2`, `11-§7-3`, `11-§18-10`, `BP-§10.4-W5`.

### Affected Engineering Review sections

- §20.3 F1/F5.
- §20.4 Business timezone field.
- §20.5 B6-02/B6-04.
- §21.1 EQ-02/EQ-03.
- §21.2 business-day mismatch risk.
- §21.5 DC-03 watch.

### Residual holds

Keep `H-TZ`, `H-TZDEF`, `H-SCHED`, `H-IDEM`, `H-MIG`, D12/D13/D14 as applicable.

## 9. SP2-06 — DC-03 existing-merchant timezone default

**Severity:** HIGH  
**Disposition:** UNRESOLVED FOUNDER/MC HOLD — DO NOT INVENT

### Evidence

Canonical sources do not authorize:

- `Asia/Kolkata` as a silent default/backfill for existing merchants;
- any other silent existing-merchant timezone default;
- historical Ledger DATE reinterpretation caused by timezone migration.

FPDR-03 explicitly leaves the business-timezone default and historic Ledger date reinterpretation unresolved.

### Canonical affected FCTM IDs

`4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5`.

### Affected Engineering Review sections

- §20.4 Business timezone field.
- §21.1 EQ-02.
- §21.3 DC-03 recommendation.
- §21.4 `H-TZDEF`.
- §21.5 T6 watch.

### Required handling

The EIS may specify schema, validation, explicit merchant-setting mechanics, future scheduling behavior and migration test evidence. It must not select a merchant-visible default without the required authority.

Historical Ledger dates remain unchanged unless a separately approved migration/product decision says otherwise.

### Residual holds

Keep `H-TZDEF`, `H-TZ`, `H-MIG`, `H-SCHED` and relevant D12/D13/D14.

## 10. SP2-07 — Cross-business scheduler isolation and stale-worker denial

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

### Evidence

PR #870 correctly identifies background execution across many businesses as a primary isolation risk and calls for per-business execution context.

That phrase is insufficient unless bound to a trusted persisted business identity and current authority.

### Required specification correction

A global scheduler/claim process may discover eligible work, but after claim:

- the authoritative business identifier comes from the persisted logical work item, not a caller-supplied override;
- every protected read/write/aggregate is explicitly scoped to that business;
- privileged paths carry the current authorization decision where merchant authority is required;
- foreign object IDs or foreign business IDs in job payloads cannot widen scope;
- stale workers cannot commit after lease/fencing invalidation;
- a failing or poisoned Business A job cannot leak, block or mutate Business B state.

### Canonical affected FCTM IDs

`22-§18-1`, `22-§18-2`, `22-§18-3`, `22-§18-6`, `22-§18-7`, `22-§18-8`, `22-§18-9`, `22-§18-10`, `22-§18-11`, `22-§23-2`, `22-§29-3`, `22-§29-8`, `22-§29-10`, `4-§13-2`, `3-§14-1`.

### Affected Engineering Review sections

- §20.3 F3/F5/F7.
- §20.5 B6-14.
- §21.2 cross-business risk.
- §21.4 `H-ISO`.

### Residual holds

Keep `H-ISO`, `H-PRIV`, `H-IDEM`, `H-SCHED`, `H-SEC`, D12 and other upstream holds applying to the particular job.

## 11. SP2-08 — Fixed schedule integrity and historical timing regression

**Severity:** MEDIUM  
**Disposition:** ACCEPT DIRECTION; NEGATIVE REGRESSION PROOF REQUIRED

### Evidence

Canonical current Product Truth preserves:

- 07:00;
- 10:30;
- 22:00;

in business-local time.

Historical 06:00 / 09:15 schedules are provenance only and must not become active current scheduling truth.

### Canonical affected FCTM IDs

`4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§2-4`, `4-§17-1`, `3-§14-1`, `BP-§10.4-W5`.

### Affected Engineering Review sections

- §20.3 F5.
- §20.6 fixed-slot and rejection rows.
- §21.5 T6/FPDR boundary.

### Required proof

The future implementation/verification package should include source/configuration and runtime tests showing that historical schedule constants/configuration do not drive current execution.

### Residual holds

Keep `H-SCHED`, `H-TZ`, D12/D13/D14 until implementation and runtime evidence exists.

## 12. Proposed concurrency, fault-injection, negative-access and recovery test matrix

**All tests below are PROPOSED. None was executed by this specialist.**

| ID | Scenario | Required result |
|---|---|---|
| SP2-T01 | Two workers atomically claim the same Business A / local-date / 10:30 slot | One logical slot; at most one current fenced lease; no duplicate briefing |
| SP2-T02 | Worker A lease expires; Worker B reclaims; Worker A resumes | Worker A's stale fencing token cannot commit state or downstream effect |
| SP2-T03 | Two workers materialize the same recurring reminder occurrence | One logical occurrence identity and one occurrence/history row |
| SP2-T04 | Governed financial command commits; worker crashes before scheduler acknowledgment | Retry reuses/recovers same downstream idempotency key; no second financial mutation |
| SP2-T05 | Notification request commits; worker crashes before acknowledgment | Retry reuses/detects same request/event identity; no duplicate notification |
| SP2-T06 | Standing rule was valid when queued but revoked before execution | Current-authority check fails closed; no fallback to service-role authority |
| SP2-T07 | Standing-rule scope/limit narrows after queueing | Execution cannot exceed the current narrower scope |
| SP2-T08 | Business A job payload is tampered to include Business B identifiers | Business B reads/writes/effects denied; attempted scope escape observable |
| SP2-T09 | Stale worker for Business A resumes after Business B jobs progress | Stale worker cannot alter A or B; B remains unaffected |
| SP2-T10 | Business timezone changes before a future recurrence | Future occurrence/slot recomputed from defined boundary; completed history unchanged |
| SP2-T11 | Supported timezone has a repeated local wall-clock instant | One deterministic logical occurrence/slot; no duplicate effect |
| SP2-T12 | Supported timezone has a nonexistent local wall-clock instant | Deterministic documented handling; no silent duplicate/new product rule |
| SP2-T13 | Existing merchant has no approved timezone | No silent default/backfill; dependent activation remains held |
| SP2-T14 | 07:00 briefing succeeds at a later actual time | Same 07:00 slot; UI discloses scheduled slot, actual generation time and source as-of/limitations |
| SP2-T15 | No valid briefing can be produced | Truthful unavailable/partial native state; nothing fabricated; no outbound catch-up invented |
| SP2-T16 | Same external/retry event is delivered repeatedly | Stable logical/effect key yields one business effect and one appropriate native notification state |
| SP2-T17 | Scheduler/provider outage repeatedly fails Business A job | Business B and unrelated operations remain available; retries are bounded/observable |
| SP2-T18 | Source/configuration contains historical 06:00/09:15 values | They cannot become active scheduling rules; current slots remain 07:00/10:30/22:00 |

## 13. Founder decisions and policy compatibility

### FPDR-02

Prospective-only correction notifications remain unchanged. Historical correction events are not automatically replayed when notification capability appears. This review does not choose an activation cutoff, migration filter, backlog interpretation or FDB-1(d2) owner.

### FPDR-03

The missed-briefing product question is **resolved**: latest valid native briefing when available, with scheduled and actual generation times, source as-of/limitations and no duplicate/misleading notification.

This review does not invent:

- a lateness cutoff;
- a maximum staleness threshold;
- a guaranteed generation time;
- an outbound delayed-dispatch channel;
- a new Daily Intelligence slot.

### DC-03

Existing-merchant timezone default remains unresolved and held.

## 14. Source 18 T1–T8 analysis

| Trigger | S7-SP-2 result |
|---|---|
| T1 | No new trigger. FPDR-02 supplies the canonical historical-correction product decision. |
| T2 | **NOT TRIGGERED.** No conflict among canonical approved sources identified. PR #870 is a stale unmerged draft, not competing authority. |
| T3 | **NOT TRIGGERED.** No new Product Truth or merchant-visible product decision is introduced here. |
| T4 | **NOT TRIGGERED.** No new PRODUCT-AFFECTING Delta classification identified. |
| T5 | **NOT TRIGGERED.** |
| T6 | Missed-briefing T6 is already resolved by FPDR-03. DC-03 remains an existing materiality watch; this specialist does not decide it. |
| T7 | **RESTORATIVE RECONCILIATION REQUIRED** for the stale PR #870 T6 wording and finding-scoped engineering clarifications. No FCTM disposition, mission assignment or Product Truth change is authorized by this report. |
| T8 | **NOT ESTABLISHED.** No scheduler/concurrency requirement has been shown genuinely infeasible. Conditional escalation remains if later engineering proves current-authority execution, per-business isolation, duplicate-safe downstream effects or correct business-local scheduling cannot be achieved. |

### Source 18 `BLOCKED` terminology question

Source 18 Stage 7 says a row found "infeasible, unsafe or blocked" stays `IN SCOPE`, is marked blocked with the reason and raises T8. PR #870 also uses `BLOCKED` broadly for ordinary unbuilt upstream dependencies/evidence holds.

This specialist does **not** alter the FCTM or reinterpret Source 18. The engineering distinction should be made explicit during Mission Control/S7-PAR reconciliation:

- **dependency/evidence hold:** requirement remains feasible but cannot yet be implemented/demonstrated because D12/D13/D14/DTX/provider/runtime evidence is unavailable;
- **genuine engineering infeasibility/unsafe conflict:** the approved requirement cannot be satisfied safely or consistently — this is the T8 case.

Do not silently equate every dependency-held register row with genuine infeasibility, and do not use that distinction to waive a real T8.

## 15. Remaining holds

Retain all applicable holds, including:

- `H-SCHED` — scheduler runtime/provider not chosen, activated or evidenced;
- `H-TZDEF` — existing-business timezone default unresolved;
- `H-TZ` — business-local time correctness;
- `H-PRIV` — privileged execution/current-authority binding;
- `H-ISO` — cross-business isolation;
- `H-IDEM` — logical/effect idempotency and retries;
- `H-SEC` where scheduled/standing-rule operations are security-sensitive;
- `H-MIG` for timezone/scheduler schema and data-transition work;
- `H-NTF` where notification state/deduplication is involved;
- D12, D13, D14 and DTX/PQ-2 prerequisites as mapped by the canonical FCTM.

Also retain migration default-deny, CI/runtime evidence and test-environment/provider holds.

## 16. Repository evidence versus live/runtime evidence

Repository-supported facts include:

- PR #870 is OPEN/DRAFT at the reviewed head;
- FPDR-02 and FPDR-03 are present on protected main;
- PR #870 still contains stale missed-briefing T6 wording;
- the FCTM contains the scheduler/time/idempotency/authorization obligations cited above;
- Stage 6 records no business-timezone field and no scheduler runtime;
- the protected-main repository tree has no `supabase/functions/` directory and no demonstrated scheduler/cron implementation;
- current architecture documents keep scheduler/runtime selection open.

Still **UNVERIFIED — ACCESS REQUIRED**:

- actual deployed scheduler/provider;
- live Supabase schema/grants/RLS/function posture;
- live business timezone values;
- production job/run ledger state;
- production scheduler concurrency behavior;
- actual locking/isolation level behavior;
- provider retry/timeout guarantees;
- test-project availability/state;
- execution of the proposed concurrency/fault/negative tests;
- GitHub CI/runtime passes for any SB-P-1.15 implementation;
- production notification/financial side-effect behavior.

No runtime assurance is claimed.

## 17. Mission Control disposition requested

Mission Control should disposition:

- **SP2-01 HIGH:** correction required — restore canonical FPDR-03 into the Stage 7 Engineering Review.
- **SP2-02 HIGH:** correction required — explicit logical-work/attempt/lease/fencing model.
- **SP2-03 HIGH:** correction required — downstream idempotency across unknown-outcome crash windows.
- **SP2-04 HIGH:** correction required — current-authority standing-rule execution binding.
- **SP2-05 HIGH:** correction required — named local-slot/timezone-change/history semantics.
- **SP2-06 HIGH:** keep unresolved DC-03 hold; do not invent a default.
- **SP2-07 HIGH:** correction required — persisted business binding, current authority and stale-worker isolation.
- **SP2-08 MEDIUM:** accept direction with negative regression proof.

No edit to PR #870, Blueprint, FCTM, Founder decisions, contracts, source documents, other specialist reports, code, SQL, migrations, database, scheduler/provider configuration or production is made or authorized by this report.

This reviewer is not eligible to serve as S7-PAR.

**STOP FOR MISSION CONTROL S7-SP-2 CONTENT REVIEW.**
