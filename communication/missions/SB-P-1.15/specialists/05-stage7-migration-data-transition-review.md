# SB-P-1.15 — Stage 7 S7-SP-5 Migration / Data-Transition Safety Specialist Review

**Assignment:** S7-SP-5 — independent non-author Migration / Data-Transition Safety specialist review  
**Authority:** Source 18 Stage 7 §4.8; MC-16; MC-30; MC-31  
**Reviewer:** ChatGPT / GPT-5.6 Sol / OpenAI  
**Session:** existing continuous Migration / Data-Transition Safety specialist conversation  
**Protected-main baseline:** `8e5a2d1e12ab0982d5843d93830d5469aad4fc91`  
**Engineering draft challenged:** PR #870 @ `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`  
**Status:** DRAFT SPECIALIST REPORT FOR MISSION CONTROL CONTENT REVIEW  
**Implementation / migration execution:** NOT AUTHORIZED

## 1. Reviewer continuity, provenance and independence

This is the same continuous ChatGPT conversation that produced the S7-SP-5 candidate assessment and reviewer reconfirmation for SB-P-1.15. Continuity is established only at the conversation/repository-declaration level available to this session; I do **not** claim cryptographic, account-level or provider-side proof of session identity.

Prior Smart Business work in this conversation includes substantial independent **SB-P-1.14 Migration / Data-Transition Safety** review work: Stage 7 S7-SP-5 migration/data-transition review, Stage 10 migration/data-transition EIS review, and Stage 10 migration delta confirmation. That prior work creates correlated familiarity with additive PostgreSQL evolution, birth-safe grants/RLS, function/RPC identity transitions, migration-ledger uncertainty, historical financial-data preservation, idempotency, rollback/forward-fix and backup/restore evidence. Those prior assumptions are not treated as authority here; SB-P-1.15 was rechecked against its current canonical sources.

I did **not** author or materially contribute to SB-P-1.15 Stages 2–7, the canonical FCTM, Blueprint Sections 1–19, draft Blueprint Sections 20–21, Stage 6 Builder Review, Stage 7 Engineering Review or PR #870.

I did **not** participate as author/reviewer in S7-SP-1 Security, S7-SP-2 Scheduler/Infrastructure, S7-SP-3 Finance, or S7-SP-4 AI Behaviour. I have not participated in S7-SP-6 Notification Foundation or S7-PAR. Canonical S7-SP-1 through S7-SP-4 reports were read only as cross-specialist evidence where their accepted findings intersect migration safety.

Other specialist sessions use GPT-5.6 Sol/OpenAI lineage. Shared model/provider lineage, common canonical sources and inherited SB-P-1.14 architecture create correlated-assumption risk. This is a limitation on epistemic independence, not evidence of common authorship.

**Eligibility conclusion:** **ELIGIBLE** for S7-SP-5 independent non-author documentary review under MC-31. This reviewer must not serve as the independent S7-PAR reviewer.

## 2. Immutable evidence inspected

- Source 18 — `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` @ `0945bda60a93c99909c3b7a247d5427ebe256011`.
- MC-16 — `communication/missions/SB-P-1.15/mission-control/17-stage7-independent-specialist-review-authorization.md` @ `d93e645c1b71c0ba9ec22cacecef89f6fafaa7f4`.
- MC-30 — `communication/missions/SB-P-1.15/mission-control/31-stage7-sp5-migration-candidate-disposition.md` @ `241b5e276c5d89ed77a1664485adc33952c31048`.
- MC-31 — `communication/missions/SB-P-1.15/mission-control/32-stage7-sp5-reviewer-specific-publication-authority.md` @ `a306d88b4b94838eb8635aedc9a73a4e5e1aa510`.
- Canonical FCTM — `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md` @ `65eeaf8d31b81595b971c22895615a096555f84f`.
- Stage 6 Builder Review — `communication/missions/SB-P-1.15/claude-code/09-stage6-builder-review.md` @ `ac92759f9d02b1344c25840b2e8b26b9f121a50b`.
- PR #870 — exact head `6e21b3de414cf33c25b848a7a93fcfc51c1d6e13`, OPEN / DRAFT / UNMERGED.
- PR #870 Blueprint draft — `docs/phase-1-mission-blueprint/active/SB-P-1.15.md` @ blob `da1628804379cc58764a9adaa2819ce19884ab7a`.
- PR #870 Engineering Review report — `communication/missions/SB-P-1.15/claude-code/11-stage7-engineering-review-report.md` @ blob `5d3a23696b8a9c13e7a9d05e654463f56e204721`.
- FPDR-02 — `communication/missions/SB-P-1.15/founder/03-t1-prospective-only-correction-notifications-founder-decision.md` @ `373a31dfff67b11c9d342abe21554b777ccb89b8`.
- FPDR-03 — `communication/missions/SB-P-1.15/founder/04-t6-latest-valid-briefing-founder-decision.md` @ `2382846bc802df25f3e581d58648b6492f3316eb`.
- Contract 11 — Smart Reminder & Delegated Automation @ `e802745a93c3bacaebba5099aacfadbe52212bc8`.
- Contract 4 — Daily Intelligence Rhythm @ `ce940d258b036c5e93da5de5eaeaa8ce99c3b9fd`.
- Contract 22 — Shared Product Foundations @ `61e1bb91970be410e9daf1d3b80875c35f29db04`.
- Contract 3 — Ledger and Business Memory @ `d8c26c073b669b561def887e36d16b19ff759205`.
- Contract 21 — Permissions / Business Isolation / Role Authority @ `f4a05d5c3aa76f70f0bdea0a83acdb7d7e61b36d`.
- Locked SB-P-1.12 EIS @ `c444f7509477d0e8b997af538440d93bf2ca4d72`.
- Locked SB-P-1.13 EIS @ `9a1e723d4874011b6870a680f2a2080154537c30`.
- Locked SB-P-1.14 EIS @ `899a0fe1f98c62bbdfa621c97cdc5e8ee3ce65d3`.
- Canonical S7-SP-1 Security report @ `43b3b7a7a49b6acd3b8aaf3e75b2e0e081bcd6c2`.
- Canonical S7-SP-2 Scheduler / Concurrency / Time report @ `bd5041b6296e2e9723bd6424f8cd4f4892728580`.
- Canonical S7-SP-3 Financial Integrity report @ `34148818d6b8293b59a830f43c392aecbc6f0451`.
- Canonical S7-SP-4 AI Behaviour report @ `e0c512c3a4292742ca4694b719cd69db3315a6bf`.
- Migration authority/default-deny index — `docs/migration/README.md` on the reviewed protected-main baseline.

Repository evidence proves documentary requirements and repository state only. It is not evidence that the production database, scheduler, provider, backup or deployment environment implements them.

## 3. Overall specialist disposition

**S7-SP-5 RESULT: FEASIBLE, WITH FIVE HIGH-SEVERITY ENGINEERING CORRECTIONS / RESTORATIONS, TWO HIGH-SEVERITY ACCEPTED DIRECTIONS WITH HARD HOLDS, AND NO ESTABLISHED T8 INFEASIBILITY.**

PR #870 is directionally sound on additive migration sequencing, recurrence/history preservation, migration rehearsal, no timezone backfill, D12 → D13 → D14/DTX → SB-P-1.15 dependency order, and separation of documentary planning from runtime readiness.

Required corrections remain around canonical FPDR-02 reconciliation, atomic birth security, durable effect identities, rollback/restore semantics and exact post-restore replay prevention. DC-03 remains unresolved by design, and historical Ledger preservation is a hard invariant rather than a migration option.

## 4. Findings

### MIG15-S7-01 — Historical correction notification migration

**Severity:** HIGH  
**Disposition:** RESTORATIVE CORRECTION REQUIRED

PR #870 predates canonical FPDR-02 and still treats historical correction-notification policy as an open T1 Founder question. Canonical FPDR-02 has already resolved the product-policy question: correction notifications are **prospective-only** from a future separately authorized activation boundary.

A legacy `notification_status='pending'` value is not proof that a correction notification was never delivered, not proof that a live backlog exists, and not a valid replay/backfill selector.

A safe future migration/activation design must therefore preserve all of the following:

1. no automatic replay of historical correction events;
2. no bulk conversion of old statuses to `sent`, `cancelled`, `discarded` or another synthetic terminal state;
3. no invented fixed activation date/cutoff;
4. no guessed historical delivery history or recipient eligibility;
5. historical correction records retained/minimized only under applicable audit, privacy, legal and retention rules;
6. a separately governed, auditable future activation boundary;
7. FDB-1(d2) correction-event-to-notification integration ownership remains **UNASSIGNED**.

**Canonical FCTM IDs:** `22-§12-5`, `22-§12-6`, `22-§12-8`.

**Affected Engineering Review areas:** §20.3 F4; §20.4 legacy `notification_status` handling; §21.2 historical-notification risk; §21.4 `H-T1`/notification holds; §21.5 T1 boundary.

**Required correction:** restore FPDR-02 into PR #870 and replace stale “open T1” wording with prospective-only product truth while retaining technical activation, recipient, migration, retention and runtime evidence holds.

**Proposed negative tests — NOT EXECUTED:**
- legacy correction predates activation and has `pending` → no notification request created;
- notification foundation activation with historical rows present → zero historical replay;
- activation/reconciliation retried → zero historical replay;
- old status values remain unchanged unless another separately authorized lifecycle rule applies;
- future qualifying correction after the governed boundary → at most one request under current recipient authority.

**Residual holds:** `H-D12`, `H-D14`, `H-SEC`, `H-ISO`, `H-IDEM`, `H-MIG`, `H-NTF`, retention/privacy/legal validation, migration-ledger/runtime evidence.

**Trigger:** T1 is not reopened. Restorative reconciliation is not itself T7.

### MIG15-S7-02 — Existing-business timezone default and DC-03

**Severity:** HIGH  
**Disposition:** ACCEPT DIRECTION / FOUNDER-MATERIALITY HOLD

PR #870 correctly states that no timezone default/backfill for existing businesses and no historical Ledger-date reinterpretation is chosen.

That boundary must remain mechanically enforceable in the future migration package. Until DC-03 is separately decided, migration must not:

- silently set `Asia/Kolkata`;
- infer/persist timezone from locality, browser, device or historical behavior;
- coerce NULL existing-business timezone values to a guessed value;
- introduce `NOT NULL` before an approved transition exists;
- recalculate or rewrite historical Ledger `transaction_date` or equivalent business-date meaning to fit a later timezone decision.

A nullable additive field with timezone-dependent activation held for unresolved businesses is a feasible engineering sequence. It is **not** a Founder decision about the default.

**Canonical FCTM IDs:** `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§18-10`, `BP-§10.4-W5`, `BP-§10.4-A1`.

**Affected Engineering Review areas:** §20.3 F1/F5; §20.4 business-timezone migration; §21.1 EQ-02; §21.2 business-day mismatch risk; §21.4 `H-TZ`/`H-TZDEF`; §21.5 DC-03 watch.

**Required correction/evidence:** no product-text correction is required to the current “no default chosen” direction; retain an explicit migration hold so future SQL cannot turn the unresolved product question into a database default by convenience.

**Proposed negative tests — NOT EXECUTED:**
- existing business has NULL timezone when field lands → remains unresolved;
- migration attempts `DEFAULT 'Asia/Kolkata'` or mass update → rejected by review;
- migration adds `NOT NULL` while unresolved businesses exist → held;
- historical transaction/business dates before and after timezone introduction → unchanged;
- timezone-dependent reminder/briefing scheduling for unresolved business → safely unavailable/held, not silently guessed.

**Residual holds:** `H-D12`, `H-D13`, `H-D14`, `H-SCHED`, `H-TZ`, `H-TZDEF`, `H-MIG`.

**Trigger:** FPDR-03 T6 is not reopened. DC-03 remains the separate existing-business timezone-default materiality watch.

### MIG15-S7-03 — Atomic birth-safe schema security

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

PR #870 and canonical S7-SP-1 correctly identify inherited broad grants/default privileges as a design risk. The migration contract must be stronger than “secure later”: protected objects must be **born hardened in the same creation migration before they become usable**.

For each new protected table, function/RPC, view where applicable, and sequence, the migration package must account for:

- RLS and deny-by-default/current-capability policies on business-scoped tables;
- explicit removal of unintended `PUBLIC` / `anon` privileges;
- only intended authenticated/executor grants;
- sequence privileges;
- real creator-role default privileges;
- function/RPC exact identity and overload inventory;
- owner;
- `SECURITY INVOKER` or tightly controlled `SECURITY DEFINER`;
- pinned/hardened `search_path`;
- explicit `EXECUTE` rights and revocation of default `PUBLIC EXECUTE`;
- current actor/business/tenant authority;
- effective-access verification after the migration.

There must be no interval in which a newly created protected object is externally reachable under unintended authority.

**Canonical FCTM IDs:** `22-§23-2`, `22-§29-3`, `22-§18-7`, `BP-§10.4-W1`, `BP-§10.4-W2`, `BP-§10.4-W3`, `BP-§10.4-W4`, `BP-§10.4-W5`, `BP-§6.5`.

**Affected Engineering Review areas:** §20.3 F1/F2/F3/F4/F5/F7; §20.4 planned migration table; §20.5 B6-07/B6-14; §21.2 inherited-grant and tenant-isolation risks; §21.4 `H-BIRTH`, `H-SEC`, `H-PRIV`, `H-ISO`.

**Required correction:** make same-migration atomic birth hardening explicit, including creator-role defaults, functions/RPCs and sequences, and require effective privileges rather than textual RLS existence alone.

**Proposed negative tests — NOT EXECUTED:**
- inspect a newly created table immediately after migration → no unintended `PUBLIC`/`anon` access;
- enumerate table/sequence grants → only approved effective privileges;
- enumerate function signatures/overloads/owners/security/search paths → no legacy or accidental callable bypass;
- authenticated caller from business A attempts B read/write → denied;
- privileged background worker receives mismatched business identity → denied before protected work;
- create representative future object under actual creator role → default ACL still produces hardened effective state.

**Residual holds:** `H-D12`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-MIG`; current live ACL/RLS/function state remains **UNVERIFIED — ACCESS REQUIRED**.

### MIG15-S7-04 — Durable logical identities and replay safety

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

PR #870 correctly points toward deterministic occurrence/slot identities, claim/lease behavior and idempotency. The future schema and migration package must explicitly distinguish business truth from execution attempts.

At minimum, independently meaningful identities are required for:

1. reminder / standing-rule identity;
2. recurrence definition and version;
3. logical reminder occurrence;
4. Daily Intelligence business-local slot;
5. notification originating event/request;
6. worker execution attempt;
7. lease/claim;
8. consequential downstream DTX/PQ-2 command/idempotency identity.

A new worker attempt after crash/timeout may be legitimate. A second business effect is not.

Unknown-outcome recovery must survive worker restart, duplicate scheduler invocation, lease expiry, message replay, deployment interruption and lost acknowledgement.

**Canonical FCTM IDs:** `11-§7-1`, `11-§7-2`, `11-§7-3`, `11-§22-11`, `22-§12-6`, `22-§18-8`, `BP-§10.4-W2`, `BP-§10.4-W3`, `BP-§10.4-W4`, `BP-§6.2`, `BP-§6.5`.

**Affected Engineering Review areas:** §20.3 F1/F2/F3/F4/F5; §20.4 scheduler/run ledger; §21.1 EQ-03; §21.2 duplicate-occurrence/briefing/notification risk; §21.4 `H-IDEM`.

**Required correction:** future EIS must define the stable logical/effect keys and schema uniqueness/recovery behavior, not leave duplicate prevention solely to worker code.

**Proposed negative tests — NOT EXECUTED:**
- two workers race for the same occurrence → one logical occurrence/effect;
- worker crashes after notification request commit before acknowledgement → retry resolves same request;
- governed financial command commits, worker crashes before scheduler completion → retry recovers same DTX outcome; no second financial mutation;
- lease expires while original worker is slow → only one protected downstream effect;
- duplicate scheduler invocation after deployment restart → same logical slot/occurrence;
- adapter retry after network timeout → same notification request/effect identity.

**Residual holds:** `H-D12`, `H-D13`, `H-D14`, `H-DTX`, `H-SCHED`, `H-IDEM`, `H-NTF`, `H-MIG`, CI/runtime evidence.

### MIG15-S7-05 — Historical Ledger and audit preservation

**Severity:** HIGH  
**Disposition:** ACCEPT DIRECTION / HARD INVARIANT

SB-P-1.15 migration has no authority to reinterpret existing financial truth. Contract 3, Contract 22 and locked D14 require historical identity/audit preservation.

SB-P-1.15 schema or timezone migration must not:

- rewrite transaction IDs or recorded business dates;
- alter recorded financial classification;
- convert or reinterpret sale/purchase/income/expense/credit/repayment meaning;
- fabricate timezone attribution for old financial events;
- alter repayment linkage;
- invent missing correction actor/reason/context;
- reassign correction attribution;
- erase prior/new correction values or original event references;
- turn historical attribution into current authority.

New reminder, automation, scheduler or notification provenance may reference stable historical event IDs, but the historical event remains unchanged.

**Canonical FCTM IDs:** `11-§10-11`, `22-§29-12`, `BP-§10.4-W4`, `BP-§6.2`.

The deeper transaction/correction obligations remain inherited from locked D14/DTX rather than reassigned into SB-P-1.15.

**Affected Engineering Review areas:** §20.3 F2/F7; §20.4 dependency/timezone migration; §21.1 EQ-02; §21.2 business-day/financial-history risks; §21.4 `H-MIG` and relevant `H-FIN`.

**Required evidence:** before/after invariant evidence must verify protected IDs and financial/audit fields, not only row counts. Appropriate evidence may include deterministic field comparisons, checksums/signatures or equivalent reproducible queries.

**Proposed negative tests — NOT EXECUTED:**
- compare historical transaction identity/date/type before/after migration → unchanged;
- compare repayment links before/after → unchanged;
- compare correction actor/time/reason/prior/new values before/after → unchanged;
- add business timezone capability → no historical date recalculation;
- historical actor loses current authority → attribution may remain where valid, authority does not.

**Residual holds:** `H-D14`, `H-DTX`, `H-MIG`, `H-FIN`, legal/privacy/retention validation, migration-ledger evidence.

### MIG15-S7-06 — Rollback, partial migration and backup/PITR restoration

**Severity:** HIGH  
**Disposition:** CORRECTION REQUIRED

PR #870 correctly requires rehearsal, but recovery semantics are under-specified for stateful reminder/scheduler/notification data.

A future migration package must distinguish:

**Pre-new-data rollback:** before legitimate SB-P-1.15 merchant state exists, a tested rollback may restore the coherent prior schema if it does not recreate parallel authority/write paths.

**Post-new-data recovery:** after valid reminders, recurrence state, occurrences, standing rules, slots, notification requests or run history exist, destructive rollback is unsafe. Recovery should be forward-fix / compatibility repair preserving legitimate merchant history.

The package must also cover:

- partial-migration detection;
- failed/half-created constraints, indexes, functions or grants;
- migration resumability or explicit cleanup;
- scheduler/worker pause or fencing during restore/recovery;
- backup/PITR readiness;
- post-restore reconciliation.

The critical restore case is a database snapshot that predates a downstream effect which already committed elsewhere or in a later database state. After restore, workers must not reissue that effect merely because scheduler state appears incomplete. Stable logical/effect identity and outcome reconciliation are therefore part of restore safety, not only normal retry safety.

**Canonical FCTM IDs:** `11-§7-1`, `11-§7-3`, `11-§18-9`, `11-§18-10`, `11-§22-11`, `22-§12-5`, `22-§12-6`, `22-§18-8`, `22-§29-8`, `BP-§10.4-W1`, `BP-§10.4-W2`, `BP-§10.4-W3`, `BP-§10.4-W5`.

**Affected Engineering Review areas:** §20.4 migration rehearsal; §21.2 duplicate/recovery risks; §21.4 `H-MIG`, `H-IDEM`, scheduler/runtime holds.

**Required correction:** future EIS must state the pre-data rollback/post-data forward-fix boundary and require restore/replay reconciliation before workers resume.

**Proposed negative tests — NOT EXECUTED:**
- migration fails after subset of new objects created → partial state detected and safely recovered;
- rollback before any new merchant data → coherent old state restored;
- rollback attempted after valid reminder/rule history exists → destructive rollback rejected; forward-fix used;
- restore snapshot behind committed notification/DTX effect → reconciliation prevents duplicate reissue;
- scheduler starts before restore reconciliation → start is fenced/blocked;
- recovery repeated → no duplicate merchant state/effect.

**Residual holds:** `H-SCHED`, `H-IDEM`, `H-MIG`, `H-NTF`, backup/PITR/recovery evidence, migration-ledger evidence. Backup/restore runtime is **UNVERIFIED — ACCESS REQUIRED**.

### MIG15-S7-07 — Dependency-ordered migration and truthful readiness

**Severity:** HIGH DEPENDENCY / HOLD  
**Disposition:** ACCEPT DIRECTION WITH RESIDUAL HOLD

PR #870 §20.4 correctly orders the architecture:

1. D12 authority/kernel/capability/grant foundation;
2. D13 Workspace/AI/language/voice dependencies;
3. D14 governed Ledger/correction command and DTX/PQ-2 cut-over;
4. SB-P-1.15 scheduler/reminder/standing-rule/notification/Daily Intelligence/Ask CFO work.

This ordering must be preserved.

However, a locked upstream EIS or migration file in the repository is documentary specification/evidence only. It does not prove that:

- the migration is applied to the target environment;
- effective RLS/ACLs match the EIS;
- legacy write/RPC paths are retired;
- DTX/PQ-2 cut-over is complete;
- target migration ledger matches repository expectations;
- rehearsal passed;
- CI passed;
- runtime/provider dependencies are ready.

**Canonical FCTM IDs:** `4-§2-5`, `4-§13-5`, `4-§16-1`, `11-§4-5`, `11-§7-1`, `11-§11-1`, `22-§18-1`, `22-§18-7`, `BP-§10.4-W1`, `BP-§10.4-W4`, `BP-§10.4-W5`, `BP-§6.2`, `BP-§6.5`.

**Affected Engineering Review areas:** §20.2 environment assumptions; §20.3 dependency-consuming workstreams; §20.4 activation order; §21.4 D12/D13/D14/DTX and runtime holds.

**Required evidence:** actual target migration ledger, applied upstream versions, effective grants/RLS/function identities, accepted command cut-over, named test/rehearsal results and separately authorized runtime evidence before any SB-P-1.15 activation claim.

**Proposed negative tests — NOT EXECUTED:**
- upstream EIS exists but upstream migration absent → SB-P-1.15 activation held;
- migration file exists locally but target ledger lacks it → not treated as applied;
- D14 schema exists but legacy direct write remains callable → DTX prerequisite fails;
- effective privileges differ from repository expectation → activation fails closed;
- required upstream rehearsal/CI evidence absent → no readiness claim.

**Residual holds:** `H-D12`, `H-D13`, `H-D14`, `H-DTX`, `H-SCHED`, `H-SEC`, `H-BIRTH`, `H-PRIV`, `H-ISO`, `H-MIG`, CI/runtime/migration-ledger evidence.

## 5. Consolidated proposed negative-test matrix

**Every test in this section is PROPOSED — NOT EXECUTED BY THIS REVIEW.**

| Area | Test | Required result |
|---|---|---|
| FPDR-02 replay | Legacy correction predates activation | No new correction notification solely due to activation |
| Legacy status | Historical `notification_status='pending'` | No inferred backlog and no automatic bulk status cleanup |
| Activation retry | Prospective integration activation repeated | No historical replay; no duplicate new request |
| Null timezone | Existing merchant has no approved timezone | Remains unresolved; no silent default/backfill |
| NOT NULL | Constraint added before DC-03 transition | Migration held/rejected |
| Historical date | Add timezone capability | Existing Ledger business dates remain unchanged |
| Birth table | Protected table exists immediately after migration | RLS/ACL state already hardened |
| Birth function | New RPC/function created | Owner/security/search_path/signature/EXECUTE are hardened at birth |
| Default ACL | New object created by real creator role | No inherited unintended `PUBLIC`/`anon` privilege |
| Sequence | Client tests sequence privilege | Only explicitly intended access |
| Cross-business | A-context worker receives B identifier | No B read, write, notification or briefing effect |
| Recurrence | Same recurrence materialized concurrently | One logical occurrence |
| Slot | Two workers claim same Daily Intelligence slot | One logical slot/effect |
| Notification crash | Request commits; acknowledgement lost | Retry resolves same request, no duplicate |
| Financial crash | DTX commits; worker crashes before scheduler acknowledgement | Same DTX outcome reused; no second financial mutation |
| Lease expiry | Worker lease expires mid-work | No duplicate downstream effect |
| Historical Ledger | Compare protected financial fields before/after | IDs, dates, classifications and links unchanged |
| Correction audit | Compare correction provenance before/after | Actor/time/reason/prior/new values unchanged |
| Partial migration | Failure after subset of DDL | Detectable partial state; safe cleanup/forward-fix |
| Pre-data rollback | No valid SB-P-1.15 state exists | Tested rollback may restore coherent prior state |
| Post-data rollback | Legitimate reminder/rule/slot history exists | Destructive rollback rejected; forward-fix preserves history |
| PITR restore | Snapshot predates committed downstream effect | Reconciliation prevents replay |
| Worker restart | Restore/recovery not reconciled | Scheduler/worker remains fenced |
| Upstream readiness | D12/D13/D14 EIS exists only | SB-P-1.15 remains held |
| Migration ledger | Repository migration file exists | Presence alone never proves target application |
| Production readiness | Documentary specialist review passes | Runtime still requires separate evidence |

## 6. Residual holds

Retain, where applicable:

- `H-D12`
- `H-D13`
- `H-D14`
- `H-DTX`
- `H-SCHED`
- `H-SEC`
- `H-BIRTH`
- `H-PRIV`
- `H-ISO`
- `H-IDEM`
- `H-TZ`
- `H-TZDEF`
- `H-MIG`
- `H-NTF`
- backup/PITR/restore evidence hold
- migration-ledger evidence hold
- CI/runtime evidence hold

After restorative reconciliation, `H-T1` should not survive as an **open product-policy hold** because FPDR-02 resolves that question. Technical prospective-activation, migration, recipient, retention and runtime evidence remain held under their proper evidence holds.

## 7. Source 18 and Founder-decision compatibility

**FPDR-02:** preserved. T1 is not reopened. Correction notifications remain prospective-only from a future separately governed activation boundary. No historic replay, backlog inference or bulk status rewrite is authorized.

**FPDR-03:** preserved. The missed/delayed briefing T6 question is not reopened. Latest-valid native briefing behavior remains canonical with truthful scheduled time versus actual generation/source-as-of and no duplicate/misleading notification.

**DC-03:** remains unresolved. This report does not decide an existing-business timezone default.

**FDB-1(d2):** remains unassigned.

### Source 18 T1–T8 screen

| Trigger | Assessment |
|---|---|
| **T1** | NOT OPEN. FPDR-02 resolves the historical correction-notification product-policy question. |
| **T2** | NOT TRIGGERED. No conflict among approved canonical sources found; stale unmerged PR #870 is not competing canon. |
| **T3** | NOT TRIGGERED. No new product decision or mission assignment is made here. |
| **T4** | NOT TRIGGERED. |
| **T5** | NOT TRIGGERED by this specialist review. |
| **T6** | NOT REOPENED for missed briefings; FPDR-03 remains canonical. DC-03 remains a separate materiality watch. |
| **T7** | NOT TRIGGERED by restorative reconciliation or by these engineering-safety refinements. A genuine omission, deferral, pull-forward, simplification, reclassification, reassignment or build/commercial commitment change requires separate T7 screening. |
| **T8** | NOT TRIGGERED. No concrete engineering evidence proves Product Truth infeasible. If later implementation demonstrates that safety requires destructive history rewriting, unavoidable duplicate effects, unsafe object exposure or another Product Truth/security/integrity conflict, raise T8 rather than weakening the requirement. |

## 8. Repository evidence versus live/runtime evidence

### Repository/specification evidence establishes

- PR #870 is an open/draft unmerged engineering review at the exact challenged head.
- PR #870 predates canonical FPDR-02/03 and contains stale T1/T6 framing.
- the reviewed repository baseline contains no established business-timezone migration for existing merchants;
- the Stage 6 evidence records historical broad grants/default privileges and service-role concerns;
- Contract 11 requires recurrence/occurrence history discipline and idempotency;
- Contract 22 requires shared idempotency, audit, scheduler discipline and no cross-business leakage;
- locked D12 defines current-authority automation and shared idempotency;
- locked D13 requires dependency-ordered separately authorized migration rehearsal;
- locked D14 requires governed correction, protected write-path closure, atomic birth hardening, historical preservation and rollback/forward-fix discipline;
- `docs/migration/README.md` makes migration artifacts non-executable by mere file presence.

### UNVERIFIED — ACCESS REQUIRED

This review does not establish:

- current production migration ledger;
- live production application of historical hardening migrations;
- live table/sequence grants or creator-role default ACLs;
- live RLS policy definitions/effectiveness;
- live function owners, security modes, signatures or overloads;
- current production correction-event counts/status distribution;
- historical notification delivery history;
- any live correction backlog;
- D12/D13/D14/DTX deployed completion;
- scheduler implementation or scheduler-state correctness;
- production notification foundation;
- backup/PITR configuration;
- successful restore evidence;
- post-restore downstream-effect reconciliation;
- current isolated test-project ledger/state;
- execution/passing of the proposed negative tests;
- implementation CI success;
- production readiness.

No live SQL, migration, scheduler, restore, backfill, notification dispatch or transaction write was performed by this review.

## 9. Independent conclusion

**S7-SP-5 RESULT: FEASIBLE WITH REQUIRED MIGRATION-SAFETY CORRECTIONS AND MATERIAL EVIDENCE HOLDS.**

- **MIG15-S7-01 HIGH:** restorative correction required for canonical FPDR-02.
- **MIG15-S7-02 HIGH:** accept direction; retain DC-03 Founder/materiality hold.
- **MIG15-S7-03 HIGH:** correction required for atomic birth-safe schema security.
- **MIG15-S7-04 HIGH:** correction required for durable logical/effect identities and replay safety.
- **MIG15-S7-05 HIGH:** accept direction as hard historical-integrity invariant.
- **MIG15-S7-06 HIGH:** correction required for rollback/forward-fix, partial migration and PITR restore reconciliation.
- **MIG15-S7-07 HIGH DEPENDENCY / HOLD:** accept dependency order; retain upstream implementation/migration/runtime evidence holds.

No new Product Truth is proposed. FPDR-02 and FPDR-03 are preserved. T1/T6 are not reopened. DC-03 remains unresolved. No T8 infeasibility is established.

No PR #870, Blueprint, FCTM, Founder record, source contract, other specialist report, application code, SQL, migration, database, backup, provider or production state is modified by the substantive review.

**STOP FOR MISSION CONTROL S7-SP-5 CONTENT REVIEW.**
