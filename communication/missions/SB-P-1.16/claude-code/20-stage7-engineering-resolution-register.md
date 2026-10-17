# SB-P-1.16 — Stage 7 Engineering Resolution Register (Draft)

**DRAFT — LOCAL — NOT PUBLISHED — FOR MISSION CONTROL SPECIALIST FINDINGS AND STAGE 7 RESOLUTION REVIEW**

**Mission:** SB-P-1.16 — Financial Integrity & Credit  
**Stage:** Source 18 v1.2 Stage 7 — Engineering Resolution and Mandatory Specialist Review  
**Authority:** MC-183 (conversation-source)  
**Prepared by:** Claude Code, Stage 7 Engineering Review Actor and coordinator of the six specialist reviews. This register is the author's consolidation; it is not independent assurance  
**Baseline:** `main@abd5e0d547aabc315513e8901edecfd327edaaf9` (PR #968 merge)  
**Date:** 2026-10-17  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

This register records findings, proposed resolutions and open items. It applies no correction to the Stage 7 drafts and changes no Blueprint section, FCTM row, Founder decision, Source 11 entry or source contract. Every resolution below is a proposal; every item is OPEN until Mission Control disposes of it.

## 1. Inputs and specialist reports

**Canonical inputs (verified at the baseline):**

| Record | Blob |
|---|---|
| Stage 7 draft Sections 20–21 `claude-code/18-…` | `1064ab18d1fca98d3fa31f64345bd9b240407165` |
| Stage 7 report `claude-code/19-…` | `a3b644f0fa8a41d6d5fe0a61ac2464366b68ed76` |
| Approved Blueprint Sections 1–19 | `8e79636f856bbfbb3c1ed08c717e2fda8b0b44bc` |
| Canonical FCTM | `5ff7742f6d3849ffab8767333a54eda07be268ab` |
| Stage 6 Builder Review `claude-code/17-…` | `c9a935662d79e6466b0e250c3c2a68217e8bdf8c` |
| Founder decisions `claude-code/09-…` | `30b19a80352b100e79cadc216daae14b07e24f9a` |

**Specialist reports (local, untracked; preserved unmodified as separate artifacts under `communication/missions/SB-P-1.16/specialists/`):**

| Review | Path | Blob | Size | Findings H / M / L |
|---|---|---|---|---|
| SR-01 Financial Integrity | `01-sr01-financial-integrity-review.md` | `c1152cd16cc5294a9e04815f049a7fb34ed41640` | 28,728 bytes; 188 lines | 3 / 5 / 1 |
| SR-02 Security, RLS, Grants and Authority | `02-sr02-security-rls-grants-authority-review.md` | `75d3926005666cd9cabca9971a77f7217d210d03` | 40,840 bytes; 224 lines | 3 / 6 / 1 |
| SR-03 Concurrency and Idempotency | `03-sr03-concurrency-idempotency-review.md` | `508d51a339b5d153e65095d72730cd45e4395631` | 39,575 bytes; 297 lines | 5 / 5 / 2 |
| SR-04 Migration and Historical Data Transition | `04-sr04-migration-historical-data-review.md` | `a01b497084c0f74f15780b48cfc67773b38dbb3b` | 43,364 bytes; 316 lines | 3 / 7 / 1 |
| SR-05 External Payment Provider Architecture | `05-sr05-payment-provider-architecture-review.md` | `87da91b2cdd7f70cffcbf1a9bfafa4d348d4b332` | 38,325 bytes; 233 lines | 5 / 5 / 1 |
| SR-06 Legal, Privacy and Evidence Lifecycle | `06-sr06-legal-privacy-evidence-lifecycle-review.md` | `210796915ac91d89d9fb28d5d25a072be15443fb` | 32,177 bytes; 208 lines | 1 / 6 / 3 |
| **Total** | | | | **20 / 34 / 9 (63)** |

No finding is CRITICAL. No specialist raised a STOP.

## 2. Reviewer identity, prior involvement and independence

| Item | Record |
|---|---|
| Actor for each review | A separate fresh-context Claude subagent (general-purpose agent; Anthropic, Claude model family), one per review, each spawned on 2026-10-17 |
| Briefing | All six received one shared written brief plus a domain-scope instruction from Claude Code, the Stage 2–4, 6 and 7 author |
| Prior involvement | None of the six had prior SB-P-1.16 context, and none authored a mission artifact. Each wrote only its own report. All six returned confirmation that `git status --short` showed no tracked-file change, and the coordinator verified this independently |
| Independence | **NOT INDEPENDENT.** All six share the author's provider and model family and were briefed by the author. Source 18 §4.9: "A new session, model or role label alone does not establish independence." Each report carries this label |
| Domain discipline | Each brief limited the reviewer to one domain and listed the out-of-scope domains. Cross-domain observations appear only where a finding changes that domain's own conclusion |

**Recommendation on independence.** The SB-P-1.15 precedent used separate, non-Claude specialist sessions. Mission Control should decide whether these six reports suffice as Source 18 §4.8 "mandatory" reviews, or whether non-author, non-Claude reviews are needed before Stage 7 approval. If they are needed, the most important domains to re-review are SR-01, SR-02 and SR-03, which hold 11 of the 20 HIGH findings. This register treats the mandatory reviews as **performed but not independently assured**.

## 3. Specialist findings register (63 findings)

Resolution classes:

- **DC:** correction to the Stage 7 draft Sections 20–21 (a v0.2 round).
- **EIS:** obligation carried into the EIS.
- **PRE:** implementation precondition.
- **MC:** Mission Control disposition.
- **FQ:** Founder question, routed by Mission Control.
- **UP:** interpretation or amendment by an upstream specification owner.

Titles are quoted from the reports. The proposed resolutions are the coordinator's summaries of each report's "required correction"; the reports themselves are authoritative.

| Finding | Severity | Title (as in the report) | Stage 6 links | Resolution class | Target | Proposed resolution (not applied) | Status |
|---|---|---|---|---|---|---|---|
| SR01-01 | HIGH | Corrections can break the repayment-to-target invariant; §20.4.4 relies on a check that does not run at correction time | SB16-B6-04, SB16-B6-05, SB16-B6-07 | DC; EIS | §20.4.4, §20.4.11 | Correction guard: a correction that would orphan linked repayments or drive a target below zero stops and returns to review | OPEN |
| SR01-02 | HIGH | The path from verified evidence to a balance reduction is undefined, and §20.7.8 contradicts §20.4.4 | SB16-B6-04, SB16-B6-14, SB16-B6-15 | MC (MQ-01); DC | §20.4.4, §20.4.9, §20.7.8 | Define link types; balance from Ledger rows only, verification shown beside it; confirm `16:FPDR-3` reading | OPEN |
| SR01-03 | HIGH | Reversal of a repayment cannot be expressed through the governed correction path as specified | SB16-B6-07, SB16-B6-15 | DC; UP (SB-P-1.14) | §20.4.10; §21.1 EQ-03, EQ-11 | Repayment reversal needs a governed void/correction mechanism; likely `EIS14-CMD-02` extension | OPEN |
| SR01-04 | MEDIUM | Lump-sum allocation conflicts with "at most one active link per evidence item" | SB16-B6-05, SB16-B6-14 | DC | §20.4.2, §20.4.9 | Reconcile lump-sum allocation with one-active-link-per-evidence | OPEN |
| SR01-05 | MEDIUM | The verified part-payment versus mismatch predicate is not defined | SB16-B6-11, SB16-B6-12 | DC | §20.4.7 | Define the verified part-payment versus mismatch predicate | OPEN |
| SR01-06 | MEDIUM | A repayment's own participant reference creates a second identity source | SB16-B6-04, SB16-B6-06 | DC | §20.4.1 | One identity source: repayment identity derived from its target | OPEN |
| SR01-07 | MEDIUM | The unattributed total and the historical attribution preview need defined arithmetic and disclosure | SB16-B6-06 | DC | §20.4.4, §20.4.5 | Arithmetic and disclosure for the unattributed total and attribution preview | OPEN |
| SR01-08 | MEDIUM | "Collected" and "repaid" measures are claimed as designed but are not defined | SB16-B6-11, SB16-B6-21 | DC | §20.4.4 | Define collected and repaid measures | OPEN |
| SR01-09 | LOW | Register defects in C-REP, C-AUD and duplicate-credit rows | SB16-B6-05, SB16-B6-07 | DC | §20.8 | Register pointer and wording defects | OPEN |
| SR02-01 | HIGH | The closure and revoke rules are worded as "DML" and miss privileges that RLS does not govern | SB16-B6-07, SB16-B6-08 | PRE; DC | §20.4.11, §20.5 | Closure covers every privilege incl. TRUNCATE, REFERENCES, TRIGGER; adopt `EIS15-SEC-01`, `-02` | OPEN |
| SR02-02 | MEDIUM | The current-state description of grants and write paths is imprecise; repository text supports a more exact statement | SB16-B6-07, SB16-B6-08, SB16-B6-19, SB16-B6-24 | DC | §20.3 | Exact current-state grants and write paths | OPEN |
| SR02-03 | MEDIUM | "All keys composite with `business_id`" has an unstated prerequisite on the Ledger table | SB16-B6-07, SB16-B6-24 | DC; EIS | §20.5 | Composite business key prerequisite on the Ledger table | OPEN |
| SR02-04 | HIGH | G-W1: reading of `EIS-AUT-01` for provider events, and a second gap in the execution path | SB16-B6-09, SB16-B6-24 | UP (G-W1); DC | §20.4.8, §21.2 | G-W1 has two parts: principal admissibility and the no-JWT execution path | OPEN |
| SR02-05 | HIGH | The ingestion path must be server-boundary-only, and per-binding secrets need a defined home | SB16-B6-08, SB16-B6-09, SB16-B6-24 | DC; EIS | §20.5, §20.4.8 | Server-boundary-only ingestion; defined home for per-binding secrets | OPEN |
| SR02-06 | MEDIUM | Storing failed-verification events as `unauthenticated` evidence conflicts with "business from the binding only" | SB16-B6-09, SB16-B6-12 | DC | §20.4.8, §20.5 | Failed-verification events without a resolvable binding are not stored as business evidence | OPEN |
| SR02-07 | MEDIUM | The capability list matches `16:FPDR-7` §§1–2, but Owner-reserved wording is weaker than the decision and several designed actions have no capability | SB16-B6-17 | DC | §20.5 | Owner-reserved wording to match `16:FPDR-7` §3; capabilities for every named action | OPEN |
| SR02-08 | MEDIUM | Employee boundary: "explicitly allowed" is not the same as the existing create capability, and command responses can leak balances | SB16-B6-17, SB16-B6-18 | DC | §20.5 | Employee: explicit allowance; command responses filtered to visible data | OPEN |
| SR02-09 | MEDIUM | The service-role row lacks the handler inventory, negative tests and privilege narrowing that the precedents already require | SB16-B6-24 | PRE; DC | §20.5 | Service-role handler inventory, negative tests, privilege narrowing | OPEN |
| SR02-10 | LOW | No platform or support boundary row in §20.5 | SB16-B6-24 | DC | §20.5 | Add platform and support boundary row | OPEN |
| SR03-01 | HIGH | The serialization point and a global lock order are not stated | SB16-B6-05, SB16-B6-14 | DC; EIS | §20.4.9 | State the serialization point and a global lock order | OPEN |
| SR03-02 | HIGH | The target-amount guard conflates two invariants and omits the correction path | SB16-B6-05, SB16-B6-14 | DC; EIS | §20.4.9 | Separate allocation and link invariants; corrections take the same lock | OPEN |
| SR03-03 | HIGH | Evidence idempotency keys on event ID only, which departs from DC-05 and misses cross-source duplicates | SB16-B6-14 | DC | §20.4.10 | Evidence dedupe also keyed on payment reference (DC-05); cross-source duplicates | OPEN |
| SR03-04 | HIGH | Out-of-order provider events and reversals racing confirmation are undefined | SB16-B6-14, SB16-B6-15 | DC; EIS | §20.4.10 | Event-ordering and reversal-versus-confirmation rules | OPEN |
| SR03-05 | MEDIUM | Concurrent resolution of one evidence item: loser outcome, supersession and the automatic-link path | SB16-B6-14 | DC | §20.4.9 | Loser outcome, supersession and the automatic-link path | OPEN |
| SR03-06 | HIGH | Recording a repayment from evidence is not a single atomic command | SB16-B6-05, SB16-B6-14 | DC | §20.4.9 | Create-repayment-and-link as one atomic governed command | OPEN |
| SR03-07 | MEDIUM | The idempotency envelope should follow the corrected precedents, not the cited pre-fix one | SB16-B6-05, SB16-B6-14 | DC | §20.3, §20.4.10 | Cite the corrected idempotency precedents | OPEN |
| SR03-08 | MEDIUM | Provider event receipt: key namespace, forged-event pre-emption and derived command keys | SB16-B6-14 | DC | §20.4.10 | Provider key namespace; forged-event pre-emption; derived command keys | OPEN |
| SR03-09 | MEDIUM | Revocation between preview and commit depends on new object-scope facts being serialized | SB16-B6-14 | UP (SB-P-1.12); EIS | §20.5 | Serialize new object-scope facts under `EIS-CNF-02` | OPEN |
| SR03-10 | MEDIUM | The CONC tier and Scenario B concurrency coverage are too narrow, and their method does not prove overlap | SB16-B6-14, SB16-B6-15, SB16-B6-26 | DC | §20.7.5, §20.7.8 | Widen CONC tier; prove transaction overlap | OPEN |
| SR03-11 | LOW | C-REP register rows cite the wrong section | SB16-B6-05 | DC | §20.8 | C-REP pointer §20.4.5 → §20.4.2 | OPEN |
| SR03-12 | LOW | Scenario A stale-warning serialization is unstated | — | DC | §20.7.8 | Scenario A stale-warning serialization | OPEN |
| SR04-01 | HIGH | The target migration ledger and creator-role ACL baseline for the transactions family are not reconciled, so M16 rehearsal cannot yet be representative | SB16-B6-01, SB16-B6-08, SB16-B6-26 | PRE; MC | §20.7.1, §20.7.2 | Reconcile production and test migration ledgers and creator-role ACL baseline (read-only metadata) | OPEN |
| SR04-02 | HIGH | The stated revocation scope ("DML") is narrower than the privileges the repository actually grants, and new columns on an existing table have no "creating migration" | SB16-B6-07, SB16-B6-08 | PRE; DC | §20.5, §20.7.2 | Revocation scope beyond DML; fail-closed in-migration check | OPEN |
| SR04-03 | MEDIUM | M16-1 is labelled "Additive" but contains live-table operations with different locking and transaction semantics, and unattributed history can still be erased by existing cascades | SB16-B6-01, SB16-B6-06 | DC | §20.7.2 | M16-1 is not merely additive: locks, FK actions, cascades | OPEN |
| SR04-04 | MEDIUM | A second widening of the governed transaction commands after M14-1 is not tied to the function-identity, type-synchronization and compatibility obligations | SB16-B6-07 | DC; UP (SB-P-1.14) | §20.7.2 | Second command widening tied to `EIS14-MIG-06` obligations | OPEN |
| SR04-05 | HIGH | Historical repayments recorded as `sale` have no stated treatment once historical credit sales are attributed | SB16-B6-06 | MC (MQ-02); FQ possible; DC | §20.4.5 | Treatment of historical repayments recorded as `sale`; possible T3 | OPEN |
| SR04-06 | MEDIUM | Historical correction history is not reliable audit evidence, and its JSON snapshots predate the new fields | SB16-B6-07 | DC | §20.4.11 | Legacy correction history is not reliable audit evidence | OPEN |
| SR04-07 | MEDIUM | The `due_on` lifecycle under correction and its migration-time constraint are not defined | SB16-B6-03 | DC | §20.4.3 | `due_on` lifecycle under correction | OPEN |
| SR04-08 | MEDIUM | M16-4's "parity test against the previous reader output" cannot serve as its acceptance or rollback oracle | SB16-B6-04, SB16-B6-21, SB16-B6-22 | DC | §20.7.2 | Replace M16-4 parity oracle with a defined acceptance oracle | OPEN |
| SR04-09 | MEDIUM | Rehearsal and rollback omit backup and PITR readiness, the historical-totals invariant and version-order discipline | SB16-B6-01, SB16-B6-26 | DC | §20.7.2 | Backup/PITR readiness, historical-totals invariant, version order | OPEN |
| SR04-10 | MEDIUM | The OQ-05 profile is unplanned, overlaps an existing SB-P-1.14 evidence gap, and its recommended timing is not justified | SB16-B6-06 | MC (OQ-05) | §21.2 | OQ-05 before the EIS fixes §20.4.5 | OPEN |
| SR04-11 | LOW | No production-shaped rehearsal environment is identified | SB16-B6-26 | DC; MC | §20.7.1 | Production-shaped rehearsal environment | OPEN |
| SR05-01 | HIGH | Inbound event routing and proof of provider-account control are unspecified | SB16-B6-09, SB16-B6-10 | DC; EIS | §20.4.8 | Event routing and proof of provider-account control; one binding per account | OPEN |
| SR05-02 | HIGH | No per-business credential and secret storage model for a Cloudflare-hosted server | SB16-B6-10 | DC; MC | §20.4.8, §20.5 | Per-business secret storage model for the Cloudflare-hosted server | OPEN |
| SR05-03 | HIGH | The webhook intake path does not fit `EIS-AUT-01` and `EIS-ISO-04` as written, and the accept-then-process boundary is missing | SB16-B6-09 | UP (G-W1); DC | §20.4.8 | Accept-then-process intake boundary | OPEN |
| SR05-04 | HIGH | No event-ordering rule and no missed-webhook reconciliation; the scheduler dependency is not recorded for the affected rows | SB16-B6-14, SB16-B6-15 | DC | §20.4.10, §20.8 | Ordering rule; missed-webhook reconciliation needs `DSCH`/`D15` | OPEN |
| SR05-05 | HIGH | Reversal handling is too coarse for partial refunds and dispute lifecycles | SB16-B6-13, SB16-B6-15 | DC; MC (MQ-04) | §20.4.10 | Partial refunds and dispute lifecycle; T3 watch on a new label | OPEN |
| SR05-06 | MEDIUM | Idempotency key shapes are inconsistent across provider, binding and actor scopes | SB16-B6-14 | DC | §20.4.10 | Consistent idempotency key scopes | OPEN |
| SR05-07 | MEDIUM | Settlement evidence: source authentication, missing line detail and the `15-§5-4` classification | SB16-B6-11, SB16-B6-13 | DC | §20.4.9, §20.8 | Settlement authentication; missing lines; `15-§5-4` status | OPEN |
| SR05-08 | MEDIUM | The adapter contract is not yet sufficient to avoid provider lock-in, and `15-§24-3` has no concrete check | SB16-B6-10 | DC | §20.4.8 | Adapter contract and a concrete `15-§24-3` check | OPEN |
| SR05-09 | MEDIUM | Build Plan §5.4 activation items, kill switch, disconnect, rollback and pre-provider test strategy are not specified | SB16-B6-10 | DC | §20.7.4 | Map Build Plan §5.4 items; kill switch, disconnect, fake-adapter tests | OPEN |
| SR05-10 | MEDIUM | The `16:FPDR-9` deferred branches are labelled `PROVIDER-HELD`, and §21.5 says they are "held, not deferred" | — | DC; MC | §20.8, §21.5 | `16:FPDR-9` deferred rows: deferred, not provider-held | OPEN |
| SR05-11 | LOW | Register and record precision: upload rows carry provider risks; payer hints missing from the normalized record | SB16-B6-12 | DC | §20.8, §20.4.8 | Upload rows' risk text; payer hints | OPEN |
| SR06-01 | HIGH | Bounded upload grace can discard payment evidence that is still under review | SB16-B6-12, SB16-B6-25 | DC; MC (MQ-03) | §20.4.8 | Upload promotion point so evidence under review survives the staging grace | OPEN |
| SR06-02 | MEDIUM | Evidence record omits payer, payee and account hints, and "where permitted" is undefined | SB16-B6-13, SB16-B6-25 | DC | §20.4.8 | Restore payer/payee/account hints (`15-§6-7`), minimized | OPEN |
| SR06-03 | MEDIUM | Upstream retention, hold and deletion foundations are not consumed | SB16-B6-25 | DC | §20.4.8 | Consume `EIS-LEG-01` to `-03`, `EIS14-STO-07`, `EIS14-RET-01`, `-03` | OPEN |
| SR06-04 | MEDIUM | Customer personal data may be copied into append-only records with no correction or de-identification path | SB16-B6-02, SB16-B6-19 | DC; EIS | §20.4.1, §20.4.11 | Correction/de-identification path for customer data in append-only records | OPEN |
| SR06-05 | MEDIUM | Raw evidence objects can contain third-party data, and access to them is not separated from access to the evidence record | SB16-B6-17, SB16-B6-24, SB16-B6-25 | DC | §20.5 | Separate raw-evidence object access | OPEN |
| SR06-06 | MEDIUM | The OQ-05 historical-data profile has no privacy conditions | SB16-B6-06 | MC (OQ-05) | §21.2 | Privacy conditions for the OQ-05 profile | OPEN |
| SR06-07 | LOW | Communication drafts hold customer financial data with no record class | SB16-B6-19 | DC | §20.4.11 | Record class for communication drafts | OPEN |
| SR06-08 | MEDIUM | U-08 hold is understated; lifecycle-dependent designs are not inventoried before Stage 8 | SB16-B6-25 | MC; FQ (U-08) | §21.4 | Inventory lifecycle-dependent designs; U-08 questions | OPEN |
| SR06-09 | LOW | Restoration and rollback can resurrect deleted evidence or superseded verification state | SB16-B6-25, SB16-B6-26 | DC | §20.7.2 | Restore and rollback must not resurrect deleted evidence or superseded states | OPEN |
| SR06-10 | LOW | Public repository disclosure: none found; future verification artifacts need a rule | SB16-B6-26 | MC | §21.6 | Publication rule for future verification artifacts | OPEN |

## 4. Stage 6 findings (26): updated status

| Finding | Stage 7 disposition (draft §20.6) | Specialist findings bearing on it | Updated status |
|---|---|---|---|
| SB16-B6-01 No objects exist | PRECONDITION | SR04-01, SR04-03, SR04-09 | **PRECONDITION**; scope widened by SR04-01 (migration-ledger and ACL baseline reconciliation) |
| SB16-B6-02 Identity link | DESIGNED | SR06-04 (and SR01-06) | DESIGNED — corrections required (single identity source; correction or de-identification path) |
| SB16-B6-03 Due date | DESIGNED | SR04-07 | DESIGNED — correction required (`due_on` lifecycle) |
| SB16-B6-04 Balance definition | DESIGNED | SR01-01, SR01-02, SR01-06, SR04-08 | **REOPENED** — HIGH corrections; MQ-01 |
| SB16-B6-05 Lump-sum and excess | DESIGNED / ROUTED | SR01-01, SR01-04, SR01-09, SR03-01, SR03-02, SR03-06, SR03-07, SR03-11 | **REOPENED** — HIGH corrections; OQ-01 open |
| SB16-B6-06 Historical data | DESIGNED / ROUTED | SR01-06, SR01-07, SR04-03, SR04-05, SR04-10, SR06-06 | **REOPENED** — MQ-02 (possible T3); OQ-05 |
| SB16-B6-07 Audit bypass | PRECONDITION | SR01-01, SR01-03, SR01-09, SR02-01, SR02-02, SR02-03, SR04-02, SR04-04, SR04-06 | **PRECONDITION**; scope widened to every privilege, not only DML |
| SB16-B6-08 Default grants | PRECONDITION | SR02-01, SR02-02, SR02-05, SR04-01, SR04-02 | **PRECONDITION**; scope widened (all privileges; creator-role ACL baseline) |
| SB16-B6-09 Provider principal | DESIGNED / ROUTED | SR02-04, SR02-05, SR02-06, SR05-01, SR05-03 | **REOPENED** — G-W1 widened to two parts |
| SB16-B6-10 Gateway binding and credentials | DESIGNED / GATED | SR05-01, SR05-02, SR05-08, SR05-09 | REOPENED — HIGH corrections (routing, secrets); `DPAY` still NOT AUTHORIZED |
| SB16-B6-11 Settlement fees | DESIGNED / ROUTED | SR01-05, SR01-08, SR05-07 | DESIGNED — corrections required; OQ-02 open |
| SB16-B6-12 Provenance versus state | DESIGNED | SR01-05, SR02-06, SR05-11, SR06-01 | DESIGNED — corrections required; MQ-03 |
| SB16-B6-13 Amounts and currency | DESIGNED | SR05-05, SR05-07, SR06-02 | DESIGNED — corrections required (`15-§6-7` hints) |
| SB16-B6-14 Concurrency and replay | DESIGNED | SR01-02, SR01-04, SR03-01 to SR03-10, SR05-04, SR05-06 | **REOPENED** — five HIGH corrections (serialization, invariants, keys, ordering, atomicity) |
| SB16-B6-15 Reversals | DESIGNED | SR01-02, SR01-03, SR03-04, SR03-10, SR05-04, SR05-05 | **REOPENED** — HIGH; upstream `EIS14-CMD-02` question (SR01-03) |
| SB16-B6-16 Scheduler and timezone | GATED | — (SR05-04 adds a `DSCH` dependency on provider recovery) | GATED; unchanged |
| SB16-B6-17 Manager scope and R15-11 | DESIGNED / ROUTED | SR02-07, SR02-08, SR06-05 | DESIGNED — corrections required; R15-11 open |
| SB16-B6-18 Employee exposure | DESIGNED / ROUTED | SR02-08 | DESIGNED — correction required; OQ-03 open |
| SB16-B6-19 Customer preparation-only | DESIGNED | SR02-02, SR06-04, SR06-07 | DESIGNED — corrections required |
| SB16-B6-20 No native surface | DESIGNED | — | DESIGNED; unchanged |
| SB16-B6-21 Sales versus collected | DESIGNED | SR01-08, SR04-08 | DESIGNED — corrections required (measures undefined) |
| SB16-B6-22 Ask CFO and DI | GATED | SR04-08 | GATED; correction to the M16-4 oracle |
| SB16-B6-23 COD | GATED | — | GATED; unchanged |
| SB16-B6-24 Service role | PRECONDITION | SR02-02, SR02-03, SR02-04, SR02-05, SR02-09, SR02-10, SR06-05 | **PRECONDITION**; scope widened (handler inventory, negative tests, server-only ingestion) |
| SB16-B6-25 Retention | GATED | SR06-01, SR06-02, SR06-03, SR06-05, SR06-08, SR06-09 | GATED (U-08); SR-06 recommends raising severity from LOW to MEDIUM; SR06-01 is HIGH |
| SB16-B6-26 No CI or runtime | CARRIED | SR03-10, SR04-01, SR04-09, SR04-11, SR06-09, SR06-10 | CARRIED; unchanged |

## 5. Mandatory implementation preconditions

These must be satisfied, and evidenced, before any Implementation Authorization:

| Precondition | Scope after specialist review | Findings |
|---|---|---|
| P-1 (SB16-B6-01) | Upstream foundations built and verified: `D12`, `D14` (M14-1 to M14-3), the `DTX` / PQ-2 cut-over, and the `D15` timezone. **Added:** a reconciled production and test migration ledger for the transactions family, and a creator-role ACL baseline (read-only metadata, separately authorized) | SR04-01, SR04-09 |
| P-2 (SB16-B6-07) | Direct mutation closed for **every** privilege on `transactions` and `transaction_correction_events`: INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES and TRIGGER, for `anon`, `authenticated` and `PUBLIC`. Client-insertable correction events removed. Verified by an in-migration, fail-closed check | SR02-01, SR04-02 |
| P-3 (SB16-B6-08) | Revoke-at-creation for every new object, covering all privileges and the default privileges of every creator role (`postgres`, `supabase_admin`). Effective-access proof per `EIS-ISO-03` and `EIS15-SEC-01`, `-02` | SR02-01, SR02-02, SR04-01, SR04-02 |
| P-4 (SB16-B6-24) | Service-role use only under `EIS-ISO-04`; a handler inventory; negative tests; ingestion functions server-only and not executable by `anon` or `authenticated` | SR02-05, SR02-09 |

## 6. FCTM row impact (`IN SCOPE` rows affected by specialist findings)

Of the 349 `IN SCOPE` rows, **142** are cited by at least one specialist finding. The other **207** are cited by none, and their Stage 7 register entries are unchanged by this round. In addition, five non-`IN SCOPE` rows are cited, all by SR-06 on lifecycle boundaries: `5-§6-1`, `25-§17-4`, `25-§17-5` (`DELEGATED`) and `25-§17-1`, `BP-§15-6` (`UNRESOLVED FOUNDER DECISION`). No FCTM disposition changes.

**Proposed register (§20.8) status corrections.** These are review findings, not FCTM changes:

| Rows | Current §20.8 status | Proposed | Source |
|---|---|---|---|
| `15-§5-1`, `15-§5-2`, `15-§1-2` | `PROVIDER-HELD` | A distinct label, for example `DEFERRED (16:FPDR-9) — F-7 OPEN`. The rows stay `IN SCOPE`; no mission is assigned | SR05-10 |
| `15-§5-4` | `FOLLOW-UP` | `PROVIDER-HELD`, with a note that only fee booking waits on OQ-02 | SR05-07 |
| `15-§6-12` | `PROVIDER-HELD` (`DUF6` outside the vocabulary) | A policy-held label citing U-08 / DC-11 | SR06-08 |
| Provider-event rows needing missed-webhook recovery | No `DSCH` note | Add a documentary `DSCH` / `D15` dependency note (not an FCTM change) | SR05-04 |
| C-REP rows (component pointer §20.4.5) | Wrong section | §20.4.2 | SR03-11, SR01-09 |
| C-THR rows (component pointer §20.4.6) | Wrong section (§20.4.6 is the overpayment control) | Point to §20.5 (decision capabilities) and §20.4.4 (balance); a dedicated threshold subsection is recommended in v0.2 | Coordinator self-finding |

**Affected rows and the findings that cite them:**

| Row | FCTM disposition | Specialist findings |
|---|---|---|
| `14-§3-6` | IN SCOPE | SR01-01 |
| `14-§4-1` | IN SCOPE | SR01-06, SR06-04, SR06-06 |
| `14-§5-1` | IN SCOPE | SR04-01, SR04-03 |
| `14-§5-2` | IN SCOPE | SR04-01, SR04-05 |
| `14-§5-6` | IN SCOPE | SR04-07 |
| `14-§5-7` | IN SCOPE | SR01-07 |
| `14-§5-13` | IN SCOPE | SR04-03, SR04-06 |
| `14-§7-1` | IN SCOPE | SR01-09, SR03-11 |
| `14-§7-2` | IN SCOPE | SR01-06, SR01-09, SR03-11 |
| `14-§7-3` | IN SCOPE | SR01-09, SR03-11 |
| `14-§7-4` | IN SCOPE | SR01-01, SR03-02 |
| `14-§7-5` | IN SCOPE | SR01-01, SR01-09, SR03-02, SR03-06, SR03-07, SR03-11 |
| `14-§7-6` | IN SCOPE | SR01-01, SR01-09, SR03-11 |
| `14-§7-7` | IN SCOPE | SR01-04, SR01-09, SR03-01, SR03-11 |
| `14-§8-1` | IN SCOPE | SR03-12 |
| `14-§8-2` | IN SCOPE | SR03-12 |
| `14-§9-1` | IN SCOPE | SR02-08 |
| `14-§10-2` | IN SCOPE | SR02-02, SR06-07 |
| `14-§11-4` | IN SCOPE | SR01-08 |
| `14-§12-4` | IN SCOPE | SR01-08 |
| `14-§12-6` | IN SCOPE | SR02-08 |
| `14-§14-1` | IN SCOPE | SR02-07 |
| `14-§14-2` | IN SCOPE | SR02-07 |
| `14-§14-3` | IN SCOPE | SR02-08 |
| `14-§17-1` | IN SCOPE | SR01-01, SR02-01, SR02-02, SR04-02, SR04-04, SR04-06, SR06-04 |
| `14-§17-2` | IN SCOPE | SR01-01 |
| `14-§17-3` | IN SCOPE | SR01-01, SR01-03, SR01-09 |
| `14-§18-2` | IN SCOPE | SR01-09 |
| `14-§18-3` | IN SCOPE | SR01-01, SR01-04, SR01-09, SR03-02, SR03-11 |
| `14-§18-8` | IN SCOPE | SR01-05 |
| `14-§18-9` | IN SCOPE | SR03-01 |
| `14-§19-1` | IN SCOPE | SR02-01, SR06-02, SR06-04, SR06-06, SR06-07, SR06-10 |
| `14-§19-2` | IN SCOPE | SR02-07, SR02-08, SR06-05 |
| `14-§19-3` | IN SCOPE | SR02-01, SR06-04, SR06-06 |
| `14-§19-4` | IN SCOPE | SR06-07 |
| `14-§20-10` | IN SCOPE | SR02-01, SR02-02, SR04-02, SR04-04 |
| `14-§21-6` | IN SCOPE | SR02-03 |
| `14-§22-1` | IN SCOPE | SR01-07, SR04-05, SR04-08, SR04-09, SR04-10 |
| `14-§22-2` | IN SCOPE | SR01-01, SR01-02 |
| `14-§22-5` | IN SCOPE | SR02-07 |
| `14-§22-6` | IN SCOPE | SR02-07 |
| `14-§22-7` | IN SCOPE | SR02-08 |
| `14-§22-9` | IN SCOPE | SR06-07 |
| `14-§22-10` | IN SCOPE | SR02-02, SR02-03, SR02-09 |
| `14-§22-11` | IN SCOPE | SR02-01, SR02-02, SR04-02, SR04-06, SR04-09 |
| `14-§23-3` | IN SCOPE | SR02-08 |
| `15-§1-2` | IN SCOPE | SR05-10 |
| `15-§3-7` | IN SCOPE | SR05-01, SR05-02, SR05-08 |
| `15-§4-3` | IN SCOPE | SR01-05 |
| `15-§4-5` | IN SCOPE | SR01-05 |
| `15-§4-7` | IN SCOPE | SR01-03, SR03-04, SR05-04, SR05-05 |
| `15-§4-8` | IN SCOPE | SR01-05 |
| `15-§5-1` | IN SCOPE | SR02-04, SR02-05, SR05-01, SR05-10 |
| `15-§5-2` | IN SCOPE | SR05-10 |
| `15-§5-3` | IN SCOPE | SR05-01 |
| `15-§5-4` | IN SCOPE | SR05-07 |
| `15-§5-5` | IN SCOPE | SR05-11, SR06-01, SR06-05 |
| `15-§5-7` | IN SCOPE | SR05-08 |
| `15-§5-8` | IN SCOPE | SR05-11 |
| `15-§6-1` | IN SCOPE | SR02-03, SR02-04, SR05-01 |
| `15-§6-4` | IN SCOPE | SR05-05 |
| `15-§6-7` | IN SCOPE | SR05-11, SR06-02, SR06-08 |
| `15-§6-8` | IN SCOPE | SR05-03, SR06-01, SR06-03, SR06-05, SR06-08, SR06-09 |
| `15-§6-10` | IN SCOPE | SR05-03 |
| `15-§6-11` | IN SCOPE | SR05-06 |
| `15-§6-12` | IN SCOPE | SR06-01, SR06-03, SR06-08, SR06-09 |
| `15-§7-8` | IN SCOPE | SR05-07, SR05-08 |
| `15-§8-1` | IN SCOPE | SR01-02, SR01-04 |
| `15-§8-4` | IN SCOPE | SR01-02, SR03-02, SR03-06 |
| `15-§8-7` | IN SCOPE | SR01-02 |
| `15-§9-1` | IN SCOPE | SR02-06 |
| `15-§9-4` | IN SCOPE | SR03-01, SR03-04, SR03-05 |
| `15-§9-5` | IN SCOPE | SR03-01, SR03-05, SR03-09 |
| `15-§10-1` | IN SCOPE | SR06-01 |
| `15-§10-2` | IN SCOPE | SR05-07 |
| `15-§10-5` | IN SCOPE | SR04-06 |
| `15-§11-2` | IN SCOPE | SR06-01 |
| `15-§11-4` | IN SCOPE | SR01-02, SR03-06 |
| `15-§11-5` | IN SCOPE | SR01-02, SR05-07 |
| `15-§12-1` | IN SCOPE | SR03-03, SR03-08, SR05-04, SR05-06 |
| `15-§12-2` | IN SCOPE | SR03-03 |
| `15-§12-3` | IN SCOPE | SR03-02, SR03-03, SR03-05, SR03-07, SR05-06 |
| `15-§12-4` | IN SCOPE | SR03-02, SR03-03, SR03-06, SR03-07 |
| `15-§12-5` | IN SCOPE | SR03-07 |
| `15-§12-6` | IN SCOPE | SR03-03, SR03-08, SR05-04, SR05-06 |
| `15-§13-1` | IN SCOPE | SR01-03, SR03-04, SR03-10, SR05-04, SR05-05, SR06-03 |
| `15-§13-2` | IN SCOPE | SR01-03, SR02-01, SR02-02, SR03-04, SR03-10, SR05-05, SR06-03, SR06-09 |
| `15-§13-3` | IN SCOPE | SR01-03, SR03-04 |
| `15-§14-1` | IN SCOPE | SR01-02, SR01-04, SR03-06 |
| `15-§14-2` | IN SCOPE | SR01-02, SR03-02, SR03-03, SR03-06 |
| `15-§14-3` | IN SCOPE | SR01-06 |
| `15-§14-4` | IN SCOPE | SR01-04, SR03-05 |
| `15-§15-3` | IN SCOPE | SR01-08 |
| `15-§16-6` | IN SCOPE | SR01-08 |
| `15-§17-1` | IN SCOPE | SR02-07 |
| `15-§17-2` | IN SCOPE | SR02-07 |
| `15-§17-3` | IN SCOPE | SR02-08 |
| `15-§17-4` | IN SCOPE | SR02-09, SR02-10, SR06-05 |
| `15-§19-5` | IN SCOPE | SR03-01, SR03-09 |
| `15-§20-1` | IN SCOPE | SR03-01 |
| `15-§20-2` | IN SCOPE | SR05-03, SR06-01, SR06-09 |
| `15-§20-5` | IN SCOPE | SR05-03, SR05-04, SR05-09 |
| `15-§21-1` | IN SCOPE | SR03-08, SR05-03, SR05-04, SR05-09 |
| `15-§21-3` | IN SCOPE | SR05-03 |
| `15-§21-8` | IN SCOPE | SR03-01, SR03-02, SR03-04, SR03-10 |
| `15-§21-9` | IN SCOPE | SR03-09, SR03-10 |
| `15-§21-10` | IN SCOPE | SR01-03, SR03-04, SR05-05 |
| `15-§22-1` | IN SCOPE | SR02-04, SR02-05, SR02-06, SR05-01, SR05-02 |
| `15-§22-2` | IN SCOPE | SR02-05, SR05-02, SR06-02, SR06-05 |
| `15-§22-3` | IN SCOPE | SR02-01, SR02-03, SR02-06, SR02-09, SR05-01 |
| `15-§22-4` | IN SCOPE | SR02-01, SR02-07, SR02-09, SR02-10, SR05-02, SR06-05 |
| `15-§22-5` | IN SCOPE | SR02-10, SR05-11, SR06-02, SR06-04, SR06-05, SR06-06, SR06-10 |
| `15-§22-6` | IN SCOPE | SR02-05, SR02-06, SR05-01, SR05-03 |
| `15-§24-3` | IN SCOPE | SR05-08 |
| `15-§24-5` | IN SCOPE | SR05-09 |
| `15-§24-6` | IN SCOPE | SR02-05, SR02-06 |
| `15-§25-2` | IN SCOPE | SR02-04, SR03-03, SR03-08, SR03-10, SR05-04, SR05-06 |
| `15-§25-3` | IN SCOPE | SR03-05 |
| `15-§25-8` | IN SCOPE | SR03-09, SR03-10 |
| `15-§25-9` | IN SCOPE | SR05-03, SR05-04, SR05-09 |
| `15-§25-11` | IN SCOPE | SR02-03, SR02-09 |
| `15-§25-12` | IN SCOPE | SR01-03, SR03-04, SR03-10, SR05-05 |
| `15-§28-1` | IN SCOPE | SR05-04, SR05-10 |
| `3-§9-12` | IN SCOPE | SR01-06, SR01-07, SR04-03, SR04-05, SR04-08, SR04-10 |
| `3-§11-6` | IN SCOPE | SR06-04 |
| `24-§21-5` | IN SCOPE | SR03-01, SR03-05 |
| `10-§17-5` | IN SCOPE | SR03-05 |
| `22-§17-3` | IN SCOPE | SR02-04, SR02-05, SR05-01, SR05-02, SR05-08, SR05-09 |
| `5-§6-1` | DELEGATED | SR06-01, SR06-03, SR06-08 |
| `25-§17-1` | UNRESOLVED FOUNDER DECISION | SR06-08 |
| `25-§17-5` | DELEGATED | SR06-03, SR06-08 |
| `25-§17-4` | DELEGATED | SR06-03, SR06-08 |
| `BP-§5.4-1` | IN SCOPE | SR05-02, SR05-09 |
| `BP-§6.2-1` | IN SCOPE | SR04-01, SR04-02, SR04-04 |
| `BP-§10.5-W1` | IN SCOPE | SR01-07, SR04-01, SR04-03, SR04-09, SR04-10, SR04-11 |
| `BP-§10.5-W2` | IN SCOPE | SR01-06, SR01-09, SR03-02, SR03-06, SR03-11, SR04-05 |
| `BP-§10.5-W5` | IN SCOPE | SR02-04, SR05-01, SR05-03 |
| `BP-§10.5-W6` | IN SCOPE | SR05-07 |
| `BP-§10.5-W9` | IN SCOPE | SR03-01, SR03-07 |
| `BP-§10.5-E2` | IN SCOPE | SR01-05, SR05-05, SR05-07 |
| `BP-§10.5-E4` | IN SCOPE | SR03-02, SR03-06 |
| `BP-§10.5-A1` | IN SCOPE | SR04-07 |
| `BP-§10.5-B1` | IN SCOPE | SR01-02, SR06-10 |
| `BP-§10.5-B3` | IN SCOPE | SR03-03, SR03-07, SR03-10 |
| `BP-§10.5-X` | IN SCOPE | SR01-08 |
| `BP-§13-9` | IN SCOPE | SR06-10 |
| `BP-§15-6` | UNRESOLVED FOUNDER DECISION | SR06-08 |

## 7. Questions for Mission Control and the Founder

### 7.1 Register of open questions

| ID | Question | Kind | Recommended interim restriction (adds no behaviour) | Owner |
|---|---|---|---|---|
| OQ-01 | Does an excess repayment create a lasting customer advance? | Founder (T3-W1). SR01-01 adds a second route: a correction lowering a target below its repayments | Stop and clarify. No advance or negative outstanding is stored. Corrections that would cause one stop (SR01-01) | Founder |
| OQ-02 | Are gateway fees ever recorded as business expenses? | Founder (T3-W2) | Explained settlement variance only | Founder |
| OQ-03 | What does an Employee see when their credit sale crosses a threshold? | Founder (T3-W3) | No Employee visibility. Command responses filtered to what the actor may see (SR02-08) | Founder |
| OQ-04 | Must Scenario B's Founder runtime check use provider-authenticated gateway evidence? | Founder (`BP-§13-9`) | Both forms designed; upload form never labelled provider-verified | Founder |
| OQ-05 | Authorize a read-only historical-data profile? | Mission Control | Not performed. Plan in §8. SR-04 recommends authorizing it before the EIS fixes §20.4.5 | Mission Control (Founder consent recommended) |
| G-W1 | (a) Can provider events enter under `EIS-AUT-01`? (b) How does `EIS-ISO-04` work with no caller session or JWT? | Upstream engineering specification | Keep open. Ask the SB-P-1.12 owner about "exact target" and "server-only trusted invocation"; SR-02 leans towards admissible under (a) via the SB-P-1.15 standing-rule pattern | Mission Control / SB-P-1.12 owner |
| MQ-01 | How should the `16:FPDR-3` sentence "Only that verified amount may reduce the corresponding outstanding balance" be read? | Mission Control reading; possible Founder question. Conditional T8 screen against `14:FPDR-4` (SR01-02) | Balance computed from Ledger rows only; verification shown beside it, never changing it; evidence-backed repayments reduce only by the verified amount | Mission Control (Founder if not settled) |
| MQ-02 | May an Owner correct a historical `sale` that was really a repayment into a `repayment` linked to an attributed target? | Possible T3 (SR04-05) | No conversion path designed. Attribution preview discloses that earlier repayments may not be reflected | Mission Control screen → Founder if T3 |
| MQ-03 | Is the payment-evidence upload "promotion point" (when an upload stops being subject to the SB-P-1.14 staging grace) an engineering statement or a product choice? | Mission Control (SR06-01). If a product choice, it joins the open U-08 T3 | Treat explicit submission into the evidence workflow as promotion; evidence under review or unlinked must never expire | Mission Control |
| MQ-04 | Is a "partially reversed" or dispute-pending merchant label new product behaviour? | T3 watch (SR05-05) | Partial refunds and open disputes do not move the whole original to `reversed/invalidated`; use existing Contract 15 §4 states with history | Mission Control screen |
| MQ-05 | Accept these six reports as the Source 18 §4.8 mandatory reviews, or require non-author, non-Claude reviews? | Mission Control | Treat as performed, not independently assured (§2) | Mission Control |
| MQ-06 | Adopt a publication rule for future verification artifacts in this public repository? | Mission Control (SR06-10, SR04 6A.7) | Aggregates only; no merchant identifiers | Mission Control |

### 7.2 Founder question packets (prepared for Mission Control; not decided)

#### OQ-01 — Excess repayment

- **Exact question.** When a customer pays more than the outstanding amount on the credit records selected, or a correction lowers a credit below what has already been repaid, should Smart Business keep the excess as a customer advance that later credit can use, or must the Owner resolve it before anything is recorded?
- **Source position.**
  - Contract 14 §18 b3 (`14-§18-3`) names "repayment greater than expected balance" as an exception but sets no outcome.
  - `14:FPDR-4` and `16:FPDR-3` permit only verified amounts to reduce balances and forbid duplicate entries.
  - No source defines an advance.
- **Alternatives.**
  - (A) Clarify-and-stop only; no advance concept.
  - (B) An Owner-confirmed customer advance recorded as a distinct Ledger fact (new behaviour).
  - (C) Record the excess as unlinked evidence for later Owner classification.
- **Recommended interim restriction.** (A) until decided.

#### OQ-02 — Gateway fees

- **Exact question.** When gateway settlement shows fees, taxes or adjustments, may Smart Business record them as business expenses, and if so only by explicit Owner action?
- **Source position.**
  - `16:FPDR-6` §2 requires fee visibility "to the extent supported".
  - `15-§11-5` forbids automatic income or expense entries when business meaning is ambiguous.
  - No source authorizes fee booking.
- **Alternatives.**
  - (A) Explained variance only.
  - (B) An Owner-confirmed expense entry per settlement.
  - (C) Automatic expense entry (conflicts with `15-§11-5` unless unambiguous; not recommended).
- **Recommended interim restriction.** (A).

#### OQ-03 — Employee threshold exposure

- **Exact question.** When an Employee records a permitted credit sale that crosses an Owner threshold, what may the Employee see or do?
- **Source position.**
  - Contract 14 §14 p3: no automatic credit visibility.
  - `16:FPDR-4`: "Manager and Employee access must not expand".
  - Contract 14 §23 b3 (`14-§23-3`) rejects a silent warning that does not reach the Owner.
- **Alternatives.**
  - (A) Employee sees nothing beyond the sale; the Owner receives the awareness item natively.
  - (B) Employee sees a neutral "Owner review may be needed" notice with no balance.
  - (C) Employee sees the balance (expands access; conflicts with `16:FPDR-4` unless explicitly delegated).
- **Recommended interim restriction.** (A).

#### OQ-04 — Scenario B evidence form

- **Exact question.** For the Founder runtime verification of Scenario B, must the evidence be provider-authenticated gateway evidence, or may merchant-submitted evidence reviewed by a human demonstrate it while no provider is authorized?
- **Source position.**
  - `BP-§10.5-B1` to `-B3` are Founder-reserved (`BP-§13-9`).
  - `16:FPDR-6` §3 and `16:FPDR-9` §7 keep uploads distinct from provider verification.
  - `BP-§10.5-B1` carries `DPAY`.
- **Alternatives.**
  - (A) Gateway evidence required. Scenario B then waits for provider authorization.
  - (B) Upload evidence acceptable for clauses B1 to B3, labelled as reviewed.
  - (C) Both are required: upload now, gateway when authorized.
- **Recommended interim restriction.** Design for both; claim neither until the Founder decides.

#### MQ-01 — Reading of `16:FPDR-3` (Founder only if Mission Control cannot settle it)

- **Exact question.** Does "Only that verified amount may reduce the corresponding outstanding balance" apply only to repayments arising from payment evidence, or does it mean that an Owner-recorded cash or UPI repayment without evidence does not reduce the balance?
- **Source conflict risk.** The second reading would conflict with `14:FPDR-4`, `14-§7-4` and Blueprint §8.2 ("A repayment reduces the correct credit relationship"). That conflict would be T8.
- **Alternatives.**
  - (A) Evidence path only. The draft assumes this; SR-01 recommends it.
  - (B) All reductions need verification. This needs T8 screening and a Founder decision.
- **Recommended interim restriction.** Balance from Ledger rows; verification displayed beside it.

#### MQ-02 — Historical repayments recorded as sales (possible T3)

- **Exact question.** May an Owner, row by row and with confirmation and audit, correct a historical `sale` row that actually recorded a customer's repayment into a `repayment` linked to the attributed credit sale?
- **Source position.**
  - `16:FPDR-2` requires balances to account for "all supported repayments" and to disclose missing facts. It does not name this conversion.
  - `EIS14-LDG-04` forbids automatic reinterpretation.
  - `EIS14-CMD-02` is silent on changing a row's type.
- **Alternatives.**
  - (A) Disclosure only; no conversion.
  - (B) An Owner-only, per-row, audited conversion through a governed correction (new behaviour; T3).
  - (C) The Owner records a new repayment, and a separate governed correction voids the duplicate sale (needs the SR01-03 void mechanism).
- **Recommended interim restriction.** (A).

### 7.3 U-08 / DC-11 lifecycle questions

SR-06 (finding SR06-08) inventories the designs that depend on the U-08 lifecycle decision, and drafts 12 exact questions for the Founder and for legal review. Those questions are in the SR-06 report and are not restated here. **U-08 stays OPEN.** No retention, deletion, backup, restoration or legal-hold rule is proposed. SR-06 states that its report is not legal advice; every legal point needs qualified counsel.

## 8. OQ-05 proposed read-only data-access plan (proposal only — NOT AUTHORIZED — not executed)

The complete proposal is SR-04 §6A (`04-sr04-migration-historical-data-review.md`, blob `a01b4970`), with the privacy conditions of SR-06 finding SR06-06. In summary:

| Element | Proposal |
|---|---|
| Purpose | Establish, with aggregates only, whether historical credit-method sales, possible repayments recorded as `sale`, and legacy correction history exist at a scale that changes the §20.4.5 design, MQ-02 and the migration plan |
| Questions | Eleven aggregate measures (SR-04 6A.2), described in prose. Among them: counts by type; credit-method sale counts and banded distributions; distinct-counterparty bands; repayment-wording share from an approved term list; correction-history counts; an audit-bypass indicator count; lock-planning sizes |
| Minimization | Aggregates only; suppression below a threshold; no names, identifiers, exact amounts or row exports; text matching inside the database; no AI processing of row-level output (SR06-06) |
| Environment | Preferred: an isolated point-in-time restore. Fallback: a read replica with a database-level read-only role. Never the production primary. Availability of either is `UNVERIFIED` |
| Executor | A named human or separately authorized actor, with a second reviewer. Not the Stage 7 author alone |
| Approvals | A new explicit Mission Control instruction, with Founder consent, naming questions, environment, actor, credentials, prerequisites, output, retention and window, outside SB-P-1.16 stage authority (Source 18 §9.1) |
| Output | Full aggregates to a restricted, non-public record. The public repository carries only banded, suppressed summaries approved by Mission Control |
| Retention | No extract; restored copy deleted within the authorized period; credentials revoked; record retention follows U-08 |
| Stop conditions | As SR-04 6A.9, including any sign of the production primary, any write capability, or any proposal to act on rows |

**Separate observation for Mission Control (outside SB-P-1.16 scope).** SR-04 reports that an existing public file, `docs/migration/SB-MIG-1.2A/08-production-data-mapping-plan.md`, contains store names and partial business identifiers. This register does not reproduce them. Mission Control may wish to review that file under its own authority.

## 9. Holds preserved

| Hold | State |
|---|---|
| U-08 / DC-11 | OPEN. SR-06 adds the upload promotion point (MQ-03) and an inventory of lifecycle-dependent designs |
| U-10 | OPEN; nothing designed depends on it |
| R15-11 (F-4) | OPEN; no merchant-facing grant UI |
| `DPAY` (41 rows) | Provider selection, credentials and activation NOT AUTHORIZED. SR-05 adds design obligations; no provider is selected or named |
| `DNTF` (7 rows) | No approved channel; `CHANNEL-HELD`; incomplete (F-5) |
| F-7 | OPEN. SR05-10 asks that the `16:FPDR-9` deferred rows be labelled as deferred and not merged into `PROVIDER-HELD` |
| CI | UNVERIFIED |
| Stage 1 scope flags | Production mutation, migration execution and delivery sync and publication: all NOT AUTHORIZED |

## 10. Trigger register

**No T3, T7 or T8 trigger fired in this round. No specialist found an infeasible, unsafe, omitted, narrowed or reassigned `IN SCOPE` row. No STOP was raised.**

| ID | Kind | Status | Rows | Condition |
|---|---|---|---|---|
| T8-C1 | Conditional T8 | Screen pending (MQ-01) | `14-§7-4`, `14-§22-2`, `15-§8-*` | Only if `16:FPDR-3` is read as gating every balance reduction (SR01-02) |
| T8-C2 | Conditional T8 | Watch | `15-§22-1`, `15-§5-3` | Only if an authorized provider evaluation finds no eligible provider that signs events and allows account binding to be proven (SR-05 dissent) |
| T3-P1 | Possible T3 | Mission Control screen (MQ-02) | `14-§22-1`, `BP-§10.5-W2` | An Owner conversion of a historical `sale` into a `repayment` (SR04-05) |
| T3-W1 to T3-W4 | T3 watches | Open (OQ-01 to OQ-04) | Per Stage 6 | Unchanged |
| T3-W5 | T3 watch | New (MQ-04) | `15-§4-7`, `15-§13-*` | A new "partially reversed" merchant label (SR05-05) |
| T3-W6 | T3 watch | New | `14-§19-*` | A future customer-erasure requirement (SR06-04) |
| T3-U08 | Pre-existing T3 | Open | `25-§17-1`, `BP-§15-6` | U-08 lifecycle decision before any lifecycle-dependent lock. SR-06 dissents that draft §21.5 omits it; it should be listed (correction C-21) |
| T7-C1 | Conditional T7 | Avoidable | `15-§6-7` | Only if the payer/payee/account-hint field were intentionally dropped; SR06-02 recommends restoring it (correction C-17) |
| T7-W1 | T7 watch | Open | `DPAY`, `DNTF`, `D18`, `16:FPDR-9` rows | Unchanged |
| G-W1 | Governance | Open, widened | Provider-event rows | Two parts (§7.1) |

**Holds on dependent EIS paths (not STOPs).** These EIS designs should not be fixed until the named question is disposed of:

- the balance definition (MQ-01);
- historical attribution and repayment-conversion handling (MQ-02, OQ-05);
- upload storage promotion (MQ-03);
- the provider-event principal (G-W1);
- the excess-repayment outcome (OQ-01).

## 11. Proposed corrections to Sections 20–21 (not applied)

These would form a Stage 7 draft v0.2 round if Mission Control authorizes one. None is applied to `18-…` (blob `1064ab18`).

| ID | Section | Correction | Findings |
|---|---|---|---|
| C-01 | §20.4.4 | Correction guard against orphaned repayments and negative outstanding; balance from Ledger rows only; verification displayed beside it | SR01-01, SR01-02 |
| C-02 | §20.4.9 | Define link types (verify existing repayment; create-repayment-and-link atomically; verify a sale paid at sale time) | SR01-02, SR03-06 |
| C-03 | §20.4.10, §21.1 | Repayment reversal through a governed void or correction; revisit EQ-03 and EQ-11 "no upstream amendment" | SR01-03 |
| C-04 | §20.4.2, §20.4.9 | Reconcile allocation with one active link per evidence item | SR01-04 |
| C-05 | §20.4.7 | Define the verified part-payment versus mismatch predicate | SR01-05 |
| C-06 | §20.4.1 | Single identity source (a repayment derives its identity from its target) | SR01-06 |
| C-07 | §20.4.4, §20.4.5 | Arithmetic and disclosure for the unattributed total and the attribution preview; disclosure of possibly unrecorded earlier repayments | SR01-07, SR04-05 |
| C-08 | §20.4.4 | Define collected and repaid measures | SR01-08 |
| C-09 | §20.4.11, §20.5, §20.7.2 | Closure and revocation cover every privilege; fail-closed in-migration check; adopt `EIS15-SEC-01`, `-02` | SR02-01, SR04-02 |
| C-10 | §20.3, §20.5 | Exact current-state grants; composite-key prerequisite; service-role inventory; platform and support row | SR02-02, SR02-03, SR02-09, SR02-10 |
| C-11 | §20.4.8, §21.2 | G-W1 in two parts; accept-then-process intake; reuse SB-P-1.15 standing rules; split ingest from auto-link | SR02-04, SR05-03 |
| C-12 | §20.4.8, §20.5 | Server-only ingestion; per-binding secret storage model; event routing and proof of account control; one binding per provider account | SR02-05, SR05-01, SR05-02 |
| C-13 | §20.4.8 | Failed-verification events without a resolvable binding are not business evidence | SR02-06 |
| C-14 | §20.5 | Owner-reserved wording per `16:FPDR-7` §3; capabilities for every named action; Employee response filtering; separate raw-evidence object access | SR02-07, SR02-08, SR06-05 |
| C-15 | §20.4.9 | Serialization point; global lock order; two separate invariants; corrections take the same lock; loser and supersession outcomes | SR03-01, SR03-02, SR03-05 |
| C-16 | §20.4.10 | Keys include payment reference (DC-05); one key-scope scheme; ordering rules; partial refunds and dispute lifecycle; missed-webhook reconciliation (`DSCH`); forged-event pre-emption; cite the corrected idempotency precedents, not the pre-fix inventory one | SR03-03, SR03-04, SR03-07, SR03-08, SR05-04, SR05-05, SR05-06 |
| C-17 | §20.4.8 | Restore minimized payer/payee/account hints (`15-§6-7`); consume upstream retention and hold specifications; upload promotion point | SR06-01, SR06-02, SR06-03, SR05-11 |
| C-18 | §20.7.1, §20.7.2, §20.7.4, §20.7.5 | M16-1 not merely additive; `EIS14-MIG-06` obligations; replace the M16-4 oracle; backup/PITR, historical-totals invariant, version order; production-shaped rehearsal; Build Plan §5.4 mapping, kill switch, fake-adapter tests; wider CONC tier; restore must not resurrect deleted state | SR03-10, SR04-03, SR04-04, SR04-08, SR04-09, SR04-11, SR05-09, SR06-09 |
| C-19 | §20.4.3, §20.4.11 | `due_on` under correction; legacy correction history not treated as reliable audit; communication-draft record class; customer-data correction or de-identification path | SR04-06, SR04-07, SR06-04, SR06-07 |
| C-20 | §20.8 | Register: `16:FPDR-9` deferred label; `15-§5-4`; `15-§6-12`; C-REP and C-THR pointers; upload-row risk text; `DSCH` notes; duplicate-credit row wording | SR01-09, SR03-11, SR05-07, SR05-10, SR05-11, SR06-08 |
| C-21 | §21.4, §21.5 | List the open U-08 T3; reword "held, not deferred" for the `16:FPDR-9` rows; add T8-C1, T8-C2, T3-P1, T3-W5, T3-W6 | SR05-10, SR06-08 |
| C-22 | §20.7.8 | Align Scenario B wording with C-01; Scenario A stale-warning serialization | SR01-02, SR03-12 |
| C-23 | §20.4.8, §20.5 | Adapter contract sufficient against lock-in, with a concrete `15-§24-3` check | SR05-08 |

## 12. Recommendation

**Recommendation: do not approve Stage 7 yet. Return the Stage 7 draft for a bounded v0.2 correction round after Mission Control's dispositions.** This is the coordinator's recommendation, not an approval.

Reasons:

1. **Corrections required.** The specialists found 20 HIGH design gaps in the draft's financial-integrity, security, concurrency, migration and provider designs. None makes a row infeasible, but each must be corrected before the EIS can rely on Sections 20–21 (C-01 to C-23).
2. **Dispositions first.** Five dependent EIS paths should wait for Mission Control (MQ-01 to MQ-03, G-W1) or the Founder (OQ-01 to OQ-04, possibly MQ-02).
3. **Independence not met.** The reviews are not independent (§2). Mission Control should decide whether non-author, non-Claude reviews are required (MQ-05).

**Proposed sequence:**

1. Mission Control disposes of MQ-01 to MQ-06, OQ-05 and G-W1, and routes the Founder packets.
2. Mission Control authorizes a v0.2 correction round of Sections 20–21 that applies C-01 to C-23 and re-runs the register reconciliation.
3. Specialists, independent where Mission Control requires it, confirm the corrections finding by finding.
4. Stage 7 disposition.

**Not done.** No tracked file changed. Nothing was committed, pushed, opened as a PR or merged. No Sections 20–21 incorporation, EIS, Implementation Package, SQL, migration, rehearsal, profiling, production access, provider activation or implementation. The Stage 7 drafts and the six specialist reports are unmodified.

**STOP FOR MISSION CONTROL SPECIALIST FINDINGS AND STAGE 7 RESOLUTION REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
