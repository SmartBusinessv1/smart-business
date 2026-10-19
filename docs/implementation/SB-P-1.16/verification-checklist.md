# SB-P-1.16 — Verification Checklist

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED, blob 305571a6)
EIS: APPROVED — LOCKED (UNCHANGED, blob 46fffd7b; Stage 11 record 87a63f40)
IMPLEMENTATION PACKAGE: DRAFT — MISSION CONTROL REVIEW REQUIRED (Stage 13)
IMPLEMENTATION AUTHORIZATION: WITHHELD — IMPLEMENTATION NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
PAYMENT AND MESSAGING PROVIDER ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DEPLOYMENT: NOT AUTHORIZED
```

## Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.16 — Financial Integrity & Credit |
| Lifecycle stage | Source 18 v1.2 Stage 12 — Initial Implementation Package |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Authorization | MC-266 (Stage 12 drafting only) |
| Author | Claude Code (also author of Stages 2–9; not independent review) |
| Baseline | `main@4e5b69a063982420f1f33bedee846007d0572654` |
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.16.md`, blob `305571a66af4a4683bd967466fc83645de5dfbd3` |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.16-EIS.md`, blob `46fffd7b140940854c9b2b847517dde2f17584df` (Stage 11 record `mission-control/11-…`, blob `87a63f40`) |
| Canonical FCTM | `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md`, blob `94dd52202ad040f64394f07f95389d02ffcc5dd0` (555 rows; 349 `IN SCOPE`) |
| Stage 8 record | `mission-control/10-stage8-founder-approval-and-lock-record.md`, blob `dea8d9f5711a468a254584fc1e4f91c38bc5ac87` |
| Package | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md` in `docs/implementation/SB-P-1.16/` — one coordinated package |

## How to Use This Checklist

Each item names its planned evidence class, the obligations or rows it supports and its status. **Every item is `PROPOSED — NOT EXECUTED`; no item may be marked PASS** until executed in an authorized environment at its verification stage. Section 14.4 is the row-keyed item for every `IN SCOPE` row.

## Preserved Holds

These holds bound every item below; no item verifies or implies their resolution.

| Item | Boundary |
|---|---|
| Founder approvals | Stage 8 F-1 to F-7 and `16:FPDR-1` to `16:FPDR-10` stand unchanged |
| OQ-04 | Option C APPROVED: Scenario B Phase 1 (merchant upload, human-reviewed, never provider-verified) and Phase 2 (gateway evidence after provider authorization) are verified separately; neither proves the other |
| EQ16-01 | Preferred **conditional** direction: participant reference as columns on the transactions family after SB-P-1.14 M14-1, subject to SB-P-1.14 findings; link table admissible |
| EQ16-02 | OPEN, fail-closed: no provider secret storage, binding activation or intake until Mission Control chooses the secret home |
| EQ16-03 | OPEN, fail-closed: a reversed advance refund is a governed exception with no automatic Ledger change |
| FIN-01 | PROVISIONAL: advance representation, application relation, refund semantics and settlement mechanism are not approved; `EC16-CAD-03` to `-05` and `EC16-STL-01` are built only after the representation is finalized and accepted |
| OQ-02 | Provider-dependent: fees are explained variance only; no automatic or pre-filled expense entry |
| OQ-05 | Not authorized: no historical profile or reinterpretation |
| U-08 | Excluded: no retention duration, deletion, cancellation treatment, backup or restore deletion, export lifecycle or upload grace beyond SB-P-1.14 `FPDR-2` |
| `DPAY`, `DNTF` | 41 provider-held and 7 channel-held rows stay `IN SCOPE` and are never reported as passed |
| Upstream and preconditions | 14-Q1 to 14-Q6 and 12-Q1 to 12-Q3 open; watches T2-W1, T2-W2, T8-W2 not fired; P-1 to P-4 are Implementation Authorization preconditions; `D12`, `D13`, `D14`, `DTX`, `D15`, `DSCH`, `DAI`, `D18`–`D20` dependencies |

## Evidence Classes

| Class | Meaning |
|---|---|
| `UNIT` | Unit or component test in the Fast Gate |
| `INT` | Server-function integration test on the isolated test project |
| `DB` | Database-level behavioural test on the isolated test project |
| `CONC` | Concurrency, race, replay or crash test with proven overlap |
| `INV` | Machine-generated effective-access or repository inventory |
| `AUDIT` | Inspection of audit and decision events produced by a test |
| `EVAL` | Recorded-provider evaluation of AI behaviour |
| `PERF` | Latency or plan measurement |
| `REH` | Migration rehearsal evidence in an authorized test environment |
| `RT` | Human runtime verification in an authorized non-production environment |
| `FRT` | Founder runtime observation of a Founder-reserved scenario |
| `REG` | Regression re-run of existing suites |
| `REPO` | Repository evidence: diff, inventory, locked documents unchanged |
| `PROV` | Separately authorized provider or environment evidence; never inferred from files |
| `DOC` | Documentary design review; not runtime evidence |

## 1. Locked Authority Verification

| Item | Check | Planned evidence class | Status |
|---|---|---|---|
| VC-AUTH-01 | Blueprint, EIS, FCTM, Stage 8 and Stage 11 blobs on `main` equal Section Document Metadata | `REPO` | PROPOSED — NOT EXECUTED |
| VC-AUTH-02 | A recorded Implementation Authorization names the workstream, builder and paths before any build | `REPO` | PROPOSED — NOT EXECUTED |
| VC-AUTH-03 | Stage 13 package lock is canonical before any build | `REPO` | PROPOSED — NOT EXECUTED |

## 2. Repository Verification

| Item | Check | Planned evidence class | Status |
|---|---|---|---|
| VC-REPO-01 | Changed files stay within the authorized workstream paths | `REPO` | PROPOSED — NOT EXECUTED |
| VC-REPO-02 | No locked document changed | `REPO` | PROPOSED — NOT EXECUTED |
| VC-REPO-03 | No provider credential, secret or live key in code, CI or migrations | `REPO, INV` | PROPOSED — NOT EXECUTED |
| VC-REG-01 | Existing suites (catalog import, inventory, parser lease, authentication, Ledger entry) re-run green; existing functionality unchanged | `REG` | PROPOSED — NOT EXECUTED |

## 3. Named Negative-Path Checks

Every permission, isolation, privilege and denial row carries at least one named check (Section 14.1).

| Check | Name | Verifies | Planned evidence class | FCTM rows | Status |
|---|---|---|---|---|---|
| NP-01 | Cross-business isolation: every reader, command, job and AI context acting for business A returns or changes nothing of business B | `EC16-SEC-03`, `EC16-SEC-05`, `EC16-AUTHZ-05`, `EC16-AI-02` | `DB, INT` | 46 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-02 | Manager with no delegated scope is denied every credit and reconciliation read and command (no access by role alone) | `EC16-AUTHZ-02`, `EC16-REV-01` | `DB, INT` | 41 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-03 | Manager holding only `credit.propose_repayment` cannot record a repayment; proposal never confers recording (MQ-07) | `EC16-REP-03` | `DB, INT` | 12 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-04 | Employee receives no balance, outstanding, threshold or advance value in any view or command response (OQ-03) | `EC16-AUTHZ-03`, `EC16-THR-04` | `DB, INT` | 30 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-05 | Non-Owner is denied every Owner-reserved action: threshold, override, attribution, binding, communication approval, advance retain, apply and refund | `EC16-AUTHZ-01`, `EC16-THR-01`, `EC16-ID-04`, `EC16-SRC-02`, `EC16-FUP-02`, `EC16-CAD-03`, `EC16-CAD-04`, `EC16-CAD-05` | `DB, INT` | 73 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-06 | Revocation between preview and commit blocks only the pending action | `EC16-AUTHZ-06`, `EC16-CNC-03`, `EC16-CNC-04` | `DB, CONC` | 23 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-07 | Effective-access inventory: `PUBLIC` and `anon` hold no privilege; `authenticated` only approved `SELECT`/`EXECUTE`; no client DML on protected objects | `EC16-SEC-01`, `EC16-SEC-02`, `EC16-ARC-02` | `INV, DB` | 133 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-08 | Service role is used only inside bound privileged operations; handler inventory shows no unbound path | `EC16-SEC-04` | `INV, REPO` | 11 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-09 | A forged, stale or wrong-binding provider request creates no evidence row, review item or link | `EC16-SRC-04`, `EC16-SEC-06` | `INT, DB` | 13 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-10 | Evidence alone never changes a balance or creates a repayment; automatic linking never uses link type (2) | `EC16-BAL-02`, `EC16-MAT-02`, `EC16-LNK-02` | `DB, INT` | 36 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-11 | Crossing a threshold never blocks a credit sale by default | `EC16-THR-02` | `INT, RT` | 17 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-12 | Excess never produces an automatic advance, offset, refund, income or AI decision | `EC16-CAD-01`, `EC16-CAD-02`, `EC16-CAD-06` | `DB, INT` | 26 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-13 | A correction that would break the repayment-to-target invariant is rejected before commit; no negative outstanding | `EC16-BAL-04` | `DB, CONC` | 17 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-14 | Merchant-submitted evidence never receives a provider-authenticated or provider-verified label | `EC16-EVD-04`, `EC16-SRC-06` | `INT, DB` | 24 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-15 | No customer message is sent or marked sent or delivered without an approved channel | `EC16-FUP-02` | `INT, REPO` | 9 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-16 | AI output never commits a financial action or chooses a match | `EC16-AI-01`, `EC16-MAT-03` | `EVAL, INT` | 30 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-17 | Ambiguous business meaning never creates income or expense; no automatic or pre-filled fee expense | `EC16-REV-02`, `EC16-STL-01` | `DB, INT` | 21 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-18 | A reversal, refund, dispute or out-of-order event never changes the Ledger before an Owner-run governed correction | `EC16-RVS-01`, `EC16-RVS-02`, `EC16-RVS-03` | `DB, CONC` | 5 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-19 | Platform and support have no write path to SB-P-1.16 data | `EC16-AUTHZ-07` | `DB, INV` | 12 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-20 | Must-not sweep: no automatic block, score, lending, message, income, expense, offset, refund, advance or AI decision; no parallel foundation | `EC16-NEG-01`, `EC16-VER-02` | `REPO, DB, INT` | 76 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-21 | Raw evidence objects are denied without the separate raw-evidence capability | `EC16-AUTHZ-08`, `EC16-PRIV-01` | `DB, INT` | 25 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-22 | No provider secret in client code, repository or migrations; no provider activation | `EC16-SRC-05`, `EC16-SRC-08` | `REPO, INV` | 44 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-23 | A customer participant has no Ledger capability | `EC16-AUTHZ-04` | `DB` | 9 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| NP-24 | No automatic identity resolution, bulk attribution or historical conversion | `EC16-ID-02`, `EC16-ID-04`, `EC16-MIG-05` | `DB, INT` | 25 rows (Section 14.4) | PROPOSED — NOT EXECUTED |

## 4. Named Runtime Scenarios

Every experience row carries at least one named scenario. None adds behaviour.

| Scenario | Name | Source anchor | Planned evidence class | Verifies | FCTM rows | Status |
|---|---|---|---|---|---|---|
| RS-01 | Founder Scenario A: overdue customer, factual ageing, Owner proceeds, overrides or declines; decision recorded | Blueprint §15.1, `BP-§10.5-A1` to `-A3` | `FRT, RT` | `EC16-VER-04`, `EC16-THR-02`, `EC16-THR-03` | 37 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-02 | Founder Scenario B Phase 1: merchant-uploaded evidence plausibly matching several sales is reviewed by a human, labelled merchant-submitted, never provider-verified; no duplicate on repeat | Stage 8 §2.1; `BP-§10.5-B1` to `-B3` | `FRT, RT` | `EC16-VER-05`, `EC16-EVD-04`, `EC16-REV-01` | 58 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-03 | Founder Scenario B Phase 2 (HELD until provider authorization): gateway-authenticated evidence tested independently; Phase 1 does not satisfy it | Stage 8 §2.1; OQ-04 Option C | `FRT, RT, PROV` | `EC16-VER-05`, `EC16-SRC-03` | 17 rows (Section 14.4) | HELD — provider authorization; PROPOSED — NOT EXECUTED |
| RS-04 | Credit sale with customer selection; ambiguous name returns clarification | Blueprint §8.1 | `RT` | `EC16-ID-01`, `EC16-ID-02`, `EC16-LDG-03` | 24 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-05 | Repayment and lump-sum allocation update the authoritative balance | Blueprint §8.2 | `RT` | `EC16-REP-01`, `EC16-REP-02`, `EC16-BAL-01` | 11 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-06 | Excess repayment: Owner clarification; retain, apply and refund an advance (ADV-01 to ADV-10) | Blueprint §15.6 | `RT, FRT` | `EC16-CAD-01`, `EC16-CAD-03`, `EC16-CAD-04`, `EC16-CAD-05`, `EC16-CAD-08` | 26 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-07 | Threshold warning, due date and ageing, follow-up list and draft preparation | Blueprint §8.3 | `RT` | `EC16-THR-02`, `EC16-DUE-02`, `EC16-FUP-01`, `EC16-FUP-02` | 28 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-08 | Evidence upload, verification states and review queue | Blueprint §8.4 | `RT` | `EC16-EVD-02`, `EC16-EVD-03`, `EC16-REV-01`, `EC16-MAT-01` | 61 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-09 | Duplicate replay and concurrent resolution produce exactly one link | Blueprint §8.5 | `RT, CONC` | `EC16-IDM-01`, `EC16-IDM-02`, `EC16-LNK-01`, `EC16-REV-03` | 66 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-10 | Reversal or refund is flagged; Owner corrects through the governed path | Blueprint §8.5 | `RT` | `EC16-RVS-01`, `EC16-AUD-01` | 43 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-11 | Ask CFO and Daily Intelligence read authoritative balances with disclosure of missing facts | Blueprint §8.6 | `RT` | `EC16-READ-01`, `EC16-BAL-05` | 20 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-12 | Manager works within delegated, object-scoped credit and reconciliation access | Blueprint §8.7 | `RT` | `EC16-AUTHZ-02`, `EC16-REP-03` | 17 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-13 | Correction preserves prior values with audit history | Blueprint §8.8 | `RT` | `EC16-AUD-01`, `EC16-BAL-04` | 48 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-14 | Owner attributes a historical credit sale with preview and confirmation | Blueprint §8.1 | `RT` | `EC16-ID-04`, `EC16-ID-05` | 13 rows (Section 14.4) | PROPOSED — NOT EXECUTED |
| RS-15 | Shared foundations reused; no parallel ledger, identity, reminder or messaging behaviour visible | Blueprint §8.9 | `RT, REPO` | `EC16-ARC-01` | 33 rows (Section 14.4) | PROPOSED — NOT EXECUTED |

## 5. Ledger Invariants

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-LDG-01 | Balance algebra: outstanding = target − Σ active repayments; customer balance over attributed open targets | `UNIT, DB` | `EC16-BAL-01` | PROPOSED — NOT EXECUTED |
| VC-LDG-02 | Evidence status never changes a balance (MQ-01) | `DB, INT` | `EC16-BAL-02` | PROPOSED — NOT EXECUTED |
| VC-LDG-03 | Correction guard rejects invariant-breaking corrections; D-5 exception raised | `DB, CONC` | `EC16-BAL-04` | PROPOSED — NOT EXECUTED |
| VC-LDG-04 | Outstanding, collected and held advance are distinct; repayments count in no sales or income measure | `UNIT, DB` | `EC16-BAL-03` | PROPOSED — NOT EXECUTED |
| VC-LDG-05 | Reader parity across Ask CFO, Daily Intelligence, warnings, review queue and exports | `INT` | `EC16-BAL-05` | PROPOSED — NOT EXECUTED |
| VC-LDG-06 | Single governed write path; no history rewrite or duplicate credit | `DB, INV` | `EC16-ARC-02`, `EC16-LDG-01` | PROPOSED — NOT EXECUTED |

## 6. Repayment Authority

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-REP-01 | Owner records repayments; Manager only with `credit.record_repayment` in valid scope; proposal never records (MQ-07) | `DB, INT` | `EC16-REP-03` | PROPOSED — NOT EXECUTED |
| VC-REP-02 | Allocation atomic; per-target ≤ outstanding; sum equals payment | `DB, CONC` | `EC16-REP-02` | PROPOSED — NOT EXECUTED |
| VC-REP-03 | Repayment participant derived from its target (CF-1) | `DB` | `EC16-ID-03` | PROPOSED — NOT EXECUTED |

## 7. Idempotency and Concurrency

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-IDC-01 | Three-layer idempotency; same-ID different-payload conflict never applied | `DB, CONC` | `EC16-IDM-01` | PROPOSED — NOT EXECUTED |
| VC-IDC-02 | Replay returns the original outcome; unknown outcome resolved by key | `DB, INT` | `EC16-IDM-02`, `EC16-ERR-02` | PROPOSED — NOT EXECUTED |
| VC-IDC-03 | Proven-overlap concurrency: resolvers, allocation, correction racing repayment, advance racing repayment, revocation | `CONC` | `EC16-VER-03`, `EC16-CNC-01`, `EC16-CNC-02` | PROPOSED — NOT EXECUTED |
| VC-IDC-04 | Key-scope collisions rejected, never merged (CF-5) | `DB` | `EC16-IDM-03` | PROPOSED — NOT EXECUTED |

## 8. Customer Advance and FIN-01 Boundary

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-CAD-01 | Excess stops and asks the Owner; no automatic advance, offset, refund or income (D-1, D-4) | `DB, INT` | `EC16-CAD-01`, `EC16-CAD-06` | PROPOSED — NOT EXECUTED |
| VC-CAD-02 | Conservation: Σ retained − Σ applied − Σ refunded = remaining ≥ 0 per customer | `UNIT, DB, CONC` | `EC16-CAD-07` | PROPOSED — NOT EXECUTED |
| VC-CAD-03 | Acceptance cases ADV-01 to ADV-10 | `RT, FRT, DB` | `EC16-CAD-08` | PROPOSED — NOT EXECUTED |
| VC-CAD-04 | FIN-01 boundary: no representation built before acceptance; tests for `EC16-CAD-03` to `-05` and `EC16-STL-01` written against the accepted representation only | `REPO, DOC` | `EC16-CAD-03`, `EC16-CAD-04`, `EC16-CAD-05`, `EC16-STL-01` | PROPOSED — NOT EXECUTED |
| VC-CAD-05 | EQ16-03: a reversed advance refund routes to the Owner with no automatic Ledger change | `DB` | `EC16-CAD-07` | PROPOSED — NOT EXECUTED |

## 9. Evidence Provenance and OQ-04 Option C

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-EVD-01 | Four independent fields; state machine transitions only as reviewed | `UNIT, DB` | `EC16-EVD-02`, `EC16-EVD-03` | PROPOSED — NOT EXECUTED |
| VC-EVD-02 | Phase 1 (RS-02) and Phase 2 (RS-03) are recorded separately; a Phase 1 pass is never reported as Phase 2 | `FRT, REPO` | `EC16-VER-05` | PROPOSED — NOT EXECUTED |
| VC-EVD-03 | Submitted evidence survives the staging grace; no retention period set (MQ-03; U-08) | `DB` | `EC16-EVD-06`, `EC16-PRIV-05` | PROPOSED — NOT EXECUTED |
| VC-EVD-04 | Exact minor-unit conversion; non-INR never rounded | `UNIT` | `EC16-EVD-05` | PROPOSED — NOT EXECUTED |

## 10. Provider and Messaging Holds

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-HOLD-01 | 41 `DPAY` rows reported provider-held, never passed; no provider activation | `REPO, PROV` | `EC16-HOLD-05`, `EC16-SRC-08` | PROPOSED — NOT EXECUTED |
| VC-HOLD-02 | 7 `DNTF` rows reported channel-held; no customer message delivered | `REPO` | `EC16-HOLD-06`, `EC16-FUP-02` | PROPOSED — NOT EXECUTED |
| VC-HOLD-03 | EQ16-02: no secret storage, binding activation or intake before the secret home is chosen | `REPO, INV` | `EC16-SRC-05` | PROPOSED — NOT EXECUTED |
| VC-HOLD-04 | OQ-02: settlement fees shown as explained variance only | `UNIT, INT` | `EC16-STL-01` | PROPOSED — NOT EXECUTED |

## 11. Already Demonstrated Rows

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-AD-01 | The canonical FCTM has **0** `ALREADY DEMONSTRATED` rows; no earlier evidence is relied on, so no carried-forward regression item applies beyond VC-REG-01 | `REPO` | `EC16-GOV-01` | PROPOSED — NOT EXECUTED |

## 12. Migration Rehearsal and Deployment Readiness (later gates)

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-MIG-01 | M16 classes rehearsed in an authorized test environment with ACL, RLS, effective access, backup/PITR, version order and totals invariant | `REH` | `EC16-MIG-01`, `EC16-MIG-03` | PROPOSED — NOT EXECUTED |
| VC-MIG-02 | M16-4 acceptance and rollback oracle is the historical-totals invariant | `REH` | `EC16-MIG-04` | PROPOSED — NOT EXECUTED |
| VC-MIG-03 | Baseline ledger and ACL reconciliation (P-1) before rehearsal | `REH, INV` | `EC16-MIG-06` | PROPOSED — NOT EXECUTED |
| VC-MIG-04 | Restore and rollback never resurrect superseded verification state | `REH` | `EC16-PRIV-06` | PROPOSED — NOT EXECUTED |
| VC-MIG-05 | Deployment readiness: CI green, test project available, migration mission authorized — each at its own later gate | `PROV, REPO` | `EC16-VER-07`, `EC16-HOLD-03` | PROPOSED — NOT EXECUTED |

## 13. Founder-Reserved Scenarios

| Item | Check | Planned evidence class | Obligations | Status |
|---|---|---|---|---|
| VC-FRS-01 | Scenario A observed by the Founder (RS-01) | `FRT` | `EC16-VER-04` | PROPOSED — NOT EXECUTED |
| VC-FRS-02 | Scenario B Phase 1 observed by the Founder (RS-02) | `FRT` | `EC16-VER-05` | PROPOSED — NOT EXECUTED |
| VC-FRS-03 | Scenario B Phase 2 observed separately after provider authorization (RS-03) | `FRT, PROV` | `EC16-VER-05` | PROPOSED — NOT EXECUTED |

## 14. Product Truth Coverage and Drift Verification

### 14.1 Classification rules

- **Permission, isolation, privilege and denial row:** FCTM kind `NEG`, or a row realized by an obligation verified by a named negative-path check (Section 3). Each carries at least one named check; every `NEG` row also carries NP-20.
- **Experience row:** FCTM kind `SCN`, `EXP`, `FRV` or `WORK`. Each carries at least one named scenario; where no obligation-specific scenario applies, the scenario for its Blueprint Section 8 home is used. Scenario B rows carry both RS-02 and RS-03.
- **Planned evidence class:** the union of the classes of the row's obligations, negative-path checks and runtime scenarios.
- **Stage 7 status and holds:** carried from the locked EIS; held and `FOLLOW-UP` rows stay `IN SCOPE`.

### 14.2 Coverage summary

| Measure | Value |
|---|---|
| `IN SCOPE` FCTM rows | 349 |
| Rows with a checklist item and planned evidence class | 349 of 349 |
| Rows missing a checklist item | 0 |
| Permission, isolation, privilege and denial rows | 291; all carry a named negative-path check |
| `NEG` rows | 59; all carry NP-20 |
| Experience rows | 54; all carry a named runtime scenario |
| Named negative-path checks | 24, each used by at least one row |
| Named runtime scenarios | 15, each used by at least one row |
| `ALREADY DEMONSTRATED` rows | 0 in the canonical FCTM |
| Items marked PASS | 0 |

### 14.3 Drift and completeness checks to execute

| Item | Check | Planned evidence class | Status |
|---|---|---|---|
| VC-PT-01 | Every `IN SCOPE` row has an obligation and a Section 14.4 item, by set difference against the FCTM | `REPO`, `DOC` | PROPOSED — NOT EXECUTED |
| VC-PT-02 | Each row's disposition, build commitment, commercial classification and mission assignment equal the locked FCTM | `REPO`, `DOC` | PROPOSED — NOT EXECUTED |
| VC-PT-03 | No obligation, item, test or built behaviour lacks a row | `REPO`, `DOC` | PROPOSED — NOT EXECUTED |
| VC-PT-04 | No `OUT OF BUILD SCOPE` row, including custom client-specific POS modification inside core, appears in the built product | `REPO`, `DOC` | PROPOSED — NOT EXECUTED |
| VC-PT-05 | No delegated, later-mission or unresolved row is built here as hidden scope | `REPO`, `DOC` | PROPOSED — NOT EXECUTED |

### 14.4 Row-keyed checklist items

| Item | FCTM row | Obligations (`EC16-`) | Planned evidence class | Negative-path checks | Runtime scenarios | Stage 7 status | Holds | Status |
|---|---|---|---|---|---|---|---|---|
| VC-R-001 | `14-§1-1` | ARC-01, AI-01, NEG-01, PRIV-02, VER-06 | INT, DB, INV, EVAL, RT, REPO, DOC | NP-16, NP-20 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-002 | `14-§1-2` | ARC-01, AI-01, NEG-01, PRIV-02 | INT, DB, INV, EVAL, RT, REPO, DOC | NP-16, NP-20 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-003 | `14-§2-8` | ARC-01, AI-01, NEG-01, PRIV-02 | INT, DB, INV, EVAL, RT, REPO, DOC | NP-16, NP-20 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-004 | `14-§3-1` | ARC-01, AI-01, NEG-01, PRIV-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-04 | UNIT, INT, DB, CONC, INV, AUDIT, EVAL, RT, FRT, REPO, PROV, DOC | NP-12, NP-16, NP-20 | RS-06, RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-005 | `14-§3-2` | ARC-01, AI-01, NEG-01, PRIV-02 | INT, DB, INV, EVAL, RT, REPO, DOC | NP-16, NP-20 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-006 | `14-§3-3` | ARC-01, AI-01, NEG-01, PRIV-02 | INT, DB, INV, EVAL, RT, REPO, DOC | NP-16, NP-20 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-007 | `14-§3-4` | ARC-01, AI-01, NEG-01, PRIV-02 | INT, DB, INV, EVAL, RT, REPO, DOC | NP-16, NP-20 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-008 | `14-§3-5` | ARC-01, AI-01, NEG-01, PRIV-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-04, CAD-04, AUD-01 | UNIT, INT, DB, CONC, INV, AUDIT, EVAL, RT, FRT, REPO, PROV, DOC | NP-05, NP-12, NP-16, NP-20 | RS-06, RS-10, RS-13, RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-009 | `14-§3-6` | ARC-01, AI-01, NEG-01, PRIV-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-01 | UNIT, INT, DB, CONC, INV, AUDIT, EVAL, RT, FRT, REPO, PROV, DOC | NP-12, NP-16, NP-20 | RS-06, RS-10, RS-13, RS-15 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-010 | `14-§3-7` | ARC-01, AI-01, NEG-01, PRIV-02, AUTHZ-03, VER-02 | INT, DB, INV, EVAL, RT, REPO, DOC | NP-04, NP-16, NP-20 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-011 | `14-§4-1` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, AUD-01 | UNIT, INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-10, RS-13, RS-14 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-012 | `14-§4-2` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | UNIT, INT, DB, INV, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-14 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-013 | `14-§4-3` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | UNIT, INT, DB, INV, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-14 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-014 | `14-§4-4` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, IDM-02 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-09, RS-14 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-015 | `14-§4-5` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | UNIT, INT, DB, INV, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-14 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-016 | `14-§4-6` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-02, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | UNIT, INT, DB, INV, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-14 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-017 | `14-§5-1` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, ID-02, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06 | UNIT, INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07, NP-24 | RS-04, RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-018 | `14-§5-2` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-019 | `14-§5-3` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-020 | `14-§5-4` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-021 | `14-§5-5` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-022 | `14-§5-6` | DUE-01, DUE-02, DUE-03, DUE-04, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | UNIT, INT, DB, INV, REH, RT, REPO, PROV, DOC | NP-07 | RS-07 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-023 | `14-§5-7` | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-01, CAD-03 | UNIT, INT, DB, CONC, INV, AUDIT, PERF, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-10, NP-12, NP-13 | RS-05, RS-06, RS-11, RS-13, RS-14 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-024 | `14-§5-8` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-07, NP-12 | RS-06, RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-025 | `14-§5-9` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-026 | `14-§5-10` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-027 | `14-§5-11` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, HOLD-04, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D14, D15 | PROPOSED — NOT EXECUTED |
| VC-R-028 | `14-§5-12` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07, NP-22 | RS-10, RS-13 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-029 | `14-§5-13` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-01, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, AUD-03 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-030 | `14-§6-1` | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 | UNIT, INT, DB, EVAL, RT, PROV, DOC | NP-16, NP-24 | RS-04 | DEPENDENCY-HELD | D13, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-031 | `14-§6-2` | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 | UNIT, INT, DB, EVAL, RT, PROV, DOC | NP-16, NP-24 | RS-04 | DEPENDENCY-HELD | D13, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-032 | `14-§6-3` | LDG-03, ID-02, AI-01, LANG-01, HOLD-01, HOLD-03 | UNIT, INT, DB, EVAL, RT, PROV, DOC | NP-16, NP-24 | RS-04 | DEPENDENCY-HELD | D12, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-033 | `14-§6-4` | LDG-03, ID-02, AI-01, LANG-01, HOLD-03 | UNIT, INT, DB, EVAL, RT, PROV, DOC | NP-16, NP-24 | RS-04 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-034 | `14-§6-5` | LDG-03, ID-02, AI-01, LANG-01, HOLD-03, HOLD-07 | UNIT, INT, DB, EVAL, RT, PROV, DOC | NP-16, NP-24 | RS-04 | LATER-MISSION-HELD | D14, DTX, D18 | PROPOSED — NOT EXECUTED |
| VC-R-035 | `14-§6-6` | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 | UNIT, INT, DB, EVAL, RT, PROV, DOC | NP-16, NP-24 | RS-04 | DEPENDENCY-HELD | D13, D14 | PROPOSED — NOT EXECUTED |
| VC-R-036 | `14-§7-1` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-03, NP-07, NP-13 | RS-05, RS-09, RS-12, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-037 | `14-§7-2` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, AUD-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-03, NP-07, NP-12, NP-13 | RS-05, RS-06, RS-09, RS-10, RS-12, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-038 | `14-§7-3` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, CAD-03 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-03, NP-05, NP-07, NP-12, NP-13 | RS-05, RS-06, RS-09, RS-12, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-039 | `14-§7-4` | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-01, CAD-03, CAD-04 | UNIT, INT, DB, CONC, INV, AUDIT, PERF, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-10, NP-12, NP-13 | RS-05, RS-06, RS-11, RS-13, RS-14 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-040 | `14-§7-5` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, CAD-05 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-03, NP-05, NP-07, NP-12, NP-13, NP-20 | RS-05, RS-06, RS-09, RS-12, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-041 | `14-§7-6` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, AUD-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-03, NP-07, NP-12, NP-13 | RS-05, RS-06, RS-09, RS-10, RS-12, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-042 | `14-§7-7` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-03, NP-07, NP-13 | RS-05, RS-09, RS-12, RS-13 | DEPENDENCY-HELD | D13, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-043 | `14-§8-1` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-044 | `14-§8-2` | THR-01, THR-02, THR-03, THR-04, AUD-02, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-045 | `14-§8-3` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-046 | `14-§8-4` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-04, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-047 | `14-§8-5` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-04, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-048 | `14-§8-6` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-049 | `14-§8-7` | THR-01, THR-02, THR-03, THR-04, AUD-02, NEG-01, VER-02, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, REPO, DOC | NP-04, NP-05, NP-07, NP-11, NP-20 | RS-01, RS-07 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-050 | `14-§9-1` | THR-01, THR-02, THR-03, THR-04, AUD-02, AUTHZ-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, REPO, DOC | NP-04, NP-05, NP-07, NP-11, NP-20 | RS-01, RS-07 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-051 | `14-§9-2` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, VER-06, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-052 | `14-§9-3` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12, DTX | PROPOSED — NOT EXECUTED |
| VC-R-053 | `14-§9-4` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12, DTX | PROPOSED — NOT EXECUTED |
| VC-R-054 | `14-§9-5` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12, DTX | PROPOSED — NOT EXECUTED |
| VC-R-055 | `14-§9-6` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12, DTX | PROPOSED — NOT EXECUTED |
| VC-R-056 | `14-§9-7` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12, DTX | PROPOSED — NOT EXECUTED |
| VC-R-057 | `14-§9-8` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-058 | `14-§9-9` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-059 | `14-§10-1` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-15 | RS-07 | DEPENDENCY-HELD | D15, DSCH | PROPOSED — NOT EXECUTED |
| VC-R-060 | `14-§10-2` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-15 | RS-07 | CHANNEL-HELD | D15, DNTF | PROPOSED — NOT EXECUTED |
| VC-R-061 | `14-§10-3` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-15, NP-20 | RS-07 | CHANNEL-HELD | D15, DNTF | PROPOSED — NOT EXECUTED |
| VC-R-062 | `14-§10-4` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-15, NP-20 | RS-07 | CHANNEL-HELD | D15, DNTF | PROPOSED — NOT EXECUTED |
| VC-R-063 | `14-§10-5` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-15, NP-20 | RS-07 | CHANNEL-HELD | D15, DNTF | PROPOSED — NOT EXECUTED |
| VC-R-064 | `14-§10-6` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02, PRIV-01 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-15, NP-20, NP-21 | RS-07 | CHANNEL-HELD | D15, DNTF | PROPOSED — NOT EXECUTED |
| VC-R-065 | `14-§11-1` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 | UNIT, INT, DB, CONC, EVAL, PERF, RT, REPO, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-066 | `14-§11-2` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 | UNIT, INT, DB, CONC, EVAL, PERF, RT, REPO, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-067 | `14-§11-3` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 | UNIT, INT, DB, CONC, EVAL, PERF, RT, REPO, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-068 | `14-§11-4` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 | UNIT, INT, DB, CONC, EVAL, PERF, RT, REPO, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-069 | `14-§11-5` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, NEG-01, VER-02 | UNIT, INT, DB, CONC, EVAL, PERF, RT, REPO, PROV, DOC | NP-01, NP-20 | RS-11 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-070 | `14-§12-1` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DSCH | PROPOSED — NOT EXECUTED |
| VC-R-071 | `14-§12-2` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DSCH | PROPOSED — NOT EXECUTED |
| VC-R-072 | `14-§12-3` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DSCH | PROPOSED — NOT EXECUTED |
| VC-R-073 | `14-§12-4` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DSCH | PROPOSED — NOT EXECUTED |
| VC-R-074 | `14-§12-5` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DSCH | PROPOSED — NOT EXECUTED |
| VC-R-075 | `14-§12-6` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-01, NEG-01, VER-02 | UNIT, INT, DB, CONC, EVAL, PERF, RT, REPO, PROV, DOC | NP-01, NP-20 | RS-11 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-076 | `14-§13-1` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-07, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | UNIT, INT, DB, INV, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-14 | LATER-MISSION-HELD | D18 | PROPOSED — NOT EXECUTED |
| VC-R-077 | `14-§13-2` | ORD-01, HOLD-07, HOLD-03, NEG-01, VER-02, IDM-02 | INT, DB, CONC, RT, REPO, PROV, DOC | NP-20 | RS-09 | LATER-MISSION-HELD | D18, DTX | PROPOSED — NOT EXECUTED |
| VC-R-078 | `14-§13-3` | ORD-01, HOLD-07 | INT, PROV, DOC | — | — | LATER-MISSION-HELD | D18 | PROPOSED — NOT EXECUTED |
| VC-R-079 | `14-§14-1` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, CAD-04, CAD-05, REP-03, MIG-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-01, NP-02, NP-03, NP-04, NP-05, NP-06, NP-12, NP-23 | RS-06, RS-12 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-080 | `14-§14-2` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-01, NP-02, NP-03, NP-04, NP-05, NP-06, NP-23 | RS-12 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-081 | `14-§14-3` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, THR-04 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-01, NP-02, NP-04, NP-05, NP-06, NP-23 | RS-12 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-082 | `14-§14-4` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-04, HOLD-06, FUP-02, VER-01 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-01, NP-02, NP-04, NP-05, NP-06, NP-15, NP-23 | RS-07, RS-12 | CHANNEL-HELD | D12, D15, DNTF | PROPOSED — NOT EXECUTED |
| VC-R-083 | `14-§15-1a` | LANG-01, HOLD-02 | RT, PROV, DOC | — | — | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-084 | `14-§15-2` | LANG-01, HOLD-02 | RT, PROV, DOC | — | — | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-085 | `14-§16-1` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-086 | `14-§16-2` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-087 | `14-§16-3` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-088 | `14-§16-4` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-089 | `14-§16-5` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-090 | `14-§16-6` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, NEG-01, VER-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06, NP-20 | RS-02, RS-08 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-091 | `14-§17-1` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, PRIV-05, VER-01, PRIV-03 | UNIT, INT, DB, CONC, INV, AUDIT, RT, FRT, REPO, PROV, DOC | NP-12, NP-13 | RS-06, RS-10, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-092 | `14-§17-2` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01 | UNIT, INT, DB, CONC, AUDIT, RT, REPO, PROV, DOC | NP-13, NP-20 | RS-10, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-093 | `14-§17-3` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, VER-01 | UNIT, INT, DB, CONC, AUDIT, RT, FRT, REPO, PROV, DOC | NP-12, NP-13, NP-20 | RS-06, RS-10, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-094 | `14-§17-4` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01 | UNIT, INT, DB, CONC, AUDIT, RT, REPO, PROV, DOC | NP-13, NP-20 | RS-10, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-095 | `14-§17-5` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01, MIG-01 | UNIT, INT, DB, CONC, AUDIT, REH, RT, REPO, PROV, DOC | NP-13, NP-20 | RS-10, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-096 | `14-§18-1` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, IDM-02 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-09, RS-14 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-097 | `14-§18-2` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03, VER-01, IDM-02 | INT, DB, CONC, RT, REPO, PROV, DOC | — | RS-09 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-098 | `14-§18-3` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-03, NP-07, NP-12, NP-13 | RS-05, RS-06, RS-09, RS-12, RS-13 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-099 | `14-§18-4` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-100 | `14-§18-5` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-101 | `14-§18-6` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03, AUTHZ-01 | INT, DB, CONC, INV, PROV, DOC | NP-05 | — | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-102 | `14-§18-7` | ERR-01, ERR-02, ERR-04, HOLD-04 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-103 | `14-§18-8` | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08 | INT, CONC, INV, REPO, PROV, DOC | NP-22 | — | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-104 | `14-§18-9` | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-105 | `14-§19-1` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01, GOV-02, PRIV-03 | INT, DB, INV, REPO, PROV, DOC | NP-01, NP-07, NP-08, NP-19, NP-21 | — | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-106 | `14-§19-2` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01, AUTHZ-01 | INT, DB, INV, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-08, NP-19, NP-21 | — | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-107 | `14-§19-3` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, NEG-01, VER-02, VER-01, PRIV-03 | INT, DB, INV, REPO, PROV, DOC | NP-01, NP-07, NP-08, NP-19, NP-20, NP-21 | — | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-108 | `14-§19-4` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, NEG-01, VER-02, VER-01, PRIV-02 | INT, DB, INV, REPO, DOC | NP-01, NP-07, NP-08, NP-19, NP-20, NP-21 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-109 | `14-§19-5` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-08, AUTHZ-03, NEG-01, VER-02, VER-01, AI-01, AUD-04 | INT, DB, INV, AUDIT, EVAL, REPO, PROV, DOC | NP-01, NP-04, NP-07, NP-08, NP-16, NP-19, NP-20, NP-21 | — | DEPENDENCY-HELD | DAI | PROPOSED — NOT EXECUTED |
| VC-R-110 | `14-§20-1` | ARC-01, ARC-02, HOLD-03 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-111 | `14-§20-2` | ARC-01, ARC-02, HOLD-01, ID-02 | UNIT, INT, DB, INV, RT, REPO, PROV, DOC | NP-07, NP-24 | RS-04, RS-15 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-112 | `14-§20-3` | ARC-01, ARC-02, HOLD-01, AUTHZ-01 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-07 | RS-15 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-113 | `14-§20-4` | ARC-01, ARC-02, HOLD-02 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-114 | `14-§20-5` | ARC-01, ARC-02, HOLD-04 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-115 | `14-§20-6` | ARC-01, ARC-02, HOLD-04 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-116 | `14-§20-7` | ARC-01, ARC-02, HOLD-04 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-117 | `14-§20-8` | ARC-01, ARC-02, HOLD-04 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-118 | `14-§20-9` | ARC-01, ARC-02 | DB, INV, RT, REPO, DOC | NP-07 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-119 | `14-§20-10` | ARC-01, ARC-02, HOLD-01, IDM-02, AUD-01 | DB, CONC, INV, AUDIT, RT, REPO, PROV, DOC | NP-07 | RS-09, RS-10, RS-13, RS-15 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-120 | `14-§21-1` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-121 | `14-§21-2` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-122 | `14-§21-3` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-123 | `14-§21-4` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-124 | `14-§21-5` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-125 | `14-§21-6` | NEG-01, VER-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, IDM-02 | UNIT, INT, DB, CONC, AUDIT, RT, FRT, REPO, PROV, DOC | NP-12, NP-20 | RS-06, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-126 | `14-§22-1` | VER-06, HOLD-01, HOLD-03, ID-02, ID-04, MIG-05, VER-01, MIG-04, AUD-01 | UNIT, INT, DB, AUDIT, REH, RT, REPO, PROV, DOC | NP-05, NP-24 | RS-04, RS-10, RS-13, RS-14 | DEPENDENCY-HELD | D12, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-127 | `14-§22-2` | VER-06, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, IDM-02, AUD-01 | UNIT, INT, DB, CONC, AUDIT, RT, FRT, REPO, PROV, DOC | NP-12 | RS-06, RS-09, RS-10, RS-13 | DEPENDENCY-HELD | D12, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-128 | `14-§22-3` | VER-06, HOLD-02, ID-02, VER-01 | UNIT, INT, DB, RT, REPO, PROV, DOC | NP-24 | RS-04 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-129 | `14-§22-4` | VER-06, HOLD-01, HOLD-03, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-130 | `14-§22-5` | VER-06, HOLD-01, HOLD-03, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-131 | `14-§22-6` | VER-06, HOLD-01, HOLD-03, VER-01, AUD-01 | DB, AUDIT, RT, REPO, PROV, DOC | — | RS-10, RS-13 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-132 | `14-§22-7` | VER-06, HOLD-01, HOLD-03, VER-01, THR-04 | INT, DB, RT, FRT, REPO, PROV, DOC | NP-04 | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-133 | `14-§22-8` | VER-06, HOLD-04, HOLD-08, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-134 | `14-§22-9` | VER-06, HOLD-04, HOLD-06, FUP-02, VER-01, PRIV-04 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-15 | RS-07 | CHANNEL-HELD | D15, DNTF | PROPOSED — NOT EXECUTED |
| VC-R-135 | `14-§22-10` | VER-06, HOLD-01, HOLD-03, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-136 | `14-§22-11` | VER-06, HOLD-01, HOLD-03, VER-01, MIG-01, AUD-01 | DB, AUDIT, REH, RT, REPO, PROV, DOC | — | RS-10, RS-13 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-137 | `14-§23-1` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-138 | `14-§23-2` | NEG-01, VER-02, MIG-01 | INT, DB, REH, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-139 | `14-§23-3` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-140 | `14-§23-4` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-141 | `14-§25-1` | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, VER-01 | REPO, PROV, DOC | — | — | LATER-MISSION-HELD | D12, D13, D14, D15, D20 | PROPOSED — NOT EXECUTED |
| VC-R-142 | `15-§1-1` | EVD-02, NEG-01, VER-06 | UNIT, INT, DB, RT, REPO, DOC | NP-20 | RS-08 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-143 | `15-§1-2` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-144 | `15-§2-8` | EVD-02, NEG-01 | UNIT, INT, DB, RT, REPO | NP-20 | RS-08 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-145 | `15-§3-1` | EVD-02, NEG-01 | UNIT, INT, DB, RT, REPO | NP-20 | RS-08 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-146 | `15-§3-2` | EVD-02, NEG-01 | UNIT, INT, DB, RT, REPO | NP-20 | RS-08 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-147 | `15-§3-3` | EVD-02, NEG-01, IDM-02 | UNIT, INT, DB, CONC, RT, REPO | NP-20 | RS-08, RS-09 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-148 | `15-§3-4` | EVD-02, NEG-01 | UNIT, INT, DB, RT, REPO | NP-20 | RS-08 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-149 | `15-§3-5` | EVD-02, NEG-01 | UNIT, INT, DB, RT, REPO | NP-20 | RS-08 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-150 | `15-§3-6` | EVD-02, NEG-01, AUD-01 | UNIT, INT, DB, AUDIT, RT, REPO | NP-20 | RS-08, RS-10, RS-13 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-151 | `15-§3-7` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-152 | `15-§4-1` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-10, NP-14 | RS-02, RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-153 | `15-§4-2` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-10, NP-14 | RS-02, RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-154 | `15-§4-3` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-10, NP-14 | RS-02, RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-155 | `15-§4-4` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-10, NP-14 | RS-02, RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-156 | `15-§4-5` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-10, NP-14 | RS-02, RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-157 | `15-§4-6` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-10, NP-14 | RS-02, RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-158 | `15-§4-7` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, BAL-02, EVD-03, SRC-01, EVD-04, SRC-08, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-07, NP-10, NP-14, NP-18, NP-22 | RS-02, RS-08, RS-10 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-159 | `15-§4-8` | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-10, NP-14 | RS-02, RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-160 | `15-§5-1` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-161 | `15-§5-2` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-162 | `15-§5-3` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-163 | `15-§5-4` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01, STL-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-17, NP-22 | RS-02, RS-03 | FOLLOW-UP | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-164 | `15-§5-5` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-03, EVD-04, PRIV-05, MIG-01, MIG-03, SEC-01, VER-01, EVD-06 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-165 | `15-§5-6` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-07, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | LATER-MISSION-HELD | D18 | PROPOSED — NOT EXECUTED |
| VC-R-166 | `15-§5-7` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-167 | `15-§5-8` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 | INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-20, NP-22 | RS-03 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-168 | `15-§6-1` | EVD-01, EVD-05, PRIV-01, HOLD-01, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, PROV, DOC | NP-07, NP-21 | — | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-169 | `15-§6-2` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, REPO, PROV, DOC | NP-07, NP-21, NP-22 | — | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-170 | `15-§6-3` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, REPO, PROV, DOC | NP-07, NP-21, NP-22 | — | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-171 | `15-§6-4` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, REPO, PROV, DOC | NP-07, NP-21, NP-22 | — | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-172 | `15-§6-5` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, REPO, PROV, DOC | NP-07, NP-21, NP-22 | — | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-173 | `15-§6-6` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, REPO, PROV, DOC | NP-07, NP-21, NP-22 | — | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-174 | `15-§6-7` | EVD-01, EVD-05, PRIV-01, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, REPO, PROV, DOC | NP-07, NP-21, NP-22 | — | PROVIDER-HELD | D12, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-175 | `15-§6-8` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, PRIV-05, SRC-08, MIG-01, MIG-03, SEC-01, PRIV-06, EVD-06, AUTHZ-08, AUD-01 | UNIT, INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07, NP-21, NP-22 | RS-10, RS-13 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-176 | `15-§6-9` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, REPO, PROV, DOC | NP-07, NP-21, NP-22 | — | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-177 | `15-§6-10` | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 | UNIT, INT, DB, INV, REH, REPO, PROV, DOC | NP-07, NP-21, NP-22 | — | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-178 | `15-§6-11` | EVD-01, EVD-05, PRIV-01, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, IDM-02 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-21, NP-22 | RS-09 | PROVIDER-HELD | D12, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-179 | `15-§6-12` | EVD-01, EVD-05, PRIV-01, HOLD-03, PRIV-05, MIG-01, MIG-03, SEC-01, EVD-06 | UNIT, INT, DB, INV, REH, PROV, DOC | NP-07, NP-21 | — | DEPENDENCY-HELD | D14, DUF6 | PROPOSED — NOT EXECUTED |
| VC-R-180 | `15-§7-1` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 | UNIT, INT, DB, EVAL, PERF, RT, PROV, DOC | NP-10, NP-16 | RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-181 | `15-§7-2` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-05, SRC-08 | UNIT, INT, DB, INV, EVAL, PERF, RT, REPO, PROV, DOC | NP-10, NP-16, NP-22 | RS-08 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-182 | `15-§7-3` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 | UNIT, INT, DB, EVAL, PERF, RT, PROV, DOC | NP-10, NP-16 | RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-183 | `15-§7-4` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 | UNIT, INT, DB, EVAL, PERF, RT, PROV, DOC | NP-10, NP-16 | RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-184 | `15-§7-5` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-01, ID-02 | UNIT, INT, DB, EVAL, PERF, RT, PROV, DOC | NP-10, NP-16, NP-24 | RS-04, RS-08 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-185 | `15-§7-6` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 | UNIT, INT, DB, EVAL, PERF, RT, PROV, DOC | NP-10, NP-16 | RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-186 | `15-§7-7` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, HOLD-07 | UNIT, INT, DB, EVAL, PERF, RT, PROV, DOC | NP-10, NP-16 | RS-08 | LATER-MISSION-HELD | D14, D18 | PROPOSED — NOT EXECUTED |
| VC-R-187 | `15-§7-8` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-05, SRC-08, STL-01 | UNIT, INT, DB, INV, EVAL, PERF, RT, REPO, PROV, DOC | NP-10, NP-16, NP-17, NP-22 | RS-08 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-188 | `15-§7-9` | MAT-01, MAT-02, MAT-03, OPS-01, NEG-01, VER-02, MIG-01 | UNIT, INT, DB, EVAL, PERF, REH, RT, REPO, DOC | NP-10, NP-16, NP-20 | RS-08 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-189 | `15-§7-10` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, IDM-02 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-10, NP-16 | RS-08, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-190 | `15-§8-1` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-10 | RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-191 | `15-§8-2` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-10 | RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-192 | `15-§8-3` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-10 | RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-193 | `15-§8-4` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01, CAD-05, IDM-02 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-10, NP-12, NP-20 | RS-06, RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-194 | `15-§8-5` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01, AUD-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07, NP-10 | RS-09, RS-10, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-195 | `15-§8-6` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-04, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-10 | RS-09 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-196 | `15-§8-7` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-10 | RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-197 | `15-§9-1` | REV-01, REV-02, REV-03, HOLD-02, NEG-01, VER-02, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17, NP-20 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-198 | `15-§9-2` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-199 | `15-§9-3` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-200 | `15-§9-4` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-201 | `15-§9-5` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01, CNC-03, AUTHZ-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-05, NP-06, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-202 | `15-§9-6` | REV-01, REV-02, REV-03, HOLD-03, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-203 | `15-§10-1` | REV-01, REV-02, REV-03, HOLD-03, PRIV-05, VER-01, EVD-06 | UNIT, INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-204 | `15-§10-2` | REV-01, REV-02, REV-03, HOLD-03, VER-01, STL-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-205 | `15-§10-3` | REV-01, REV-02, REV-03, HOLD-03, NEG-01, VER-02, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17, NP-20 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-206 | `15-§10-4` | REV-01, REV-02, REV-03, HOLD-01, HOLD-03, VER-01, AUD-01 | INT, DB, CONC, AUDIT, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09, RS-10, RS-13 | DEPENDENCY-HELD | D12, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-207 | `15-§10-5` | REV-01, REV-02, REV-03, HOLD-01, VER-01, MIG-01, AUD-01 | INT, DB, CONC, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09, RS-10, RS-13 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-208 | `15-§11-1` | REV-01, REV-02, REV-03, HOLD-03, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-209 | `15-§11-2` | REV-01, REV-02, REV-03, HOLD-03, PRIV-05, VER-01, EVD-06 | UNIT, INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-210 | `15-§11-3` | REV-01, REV-02, REV-03, HOLD-01, HOLD-04, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D12, D15 | PROPOSED — NOT EXECUTED |
| VC-R-211 | `15-§11-4` | REV-01, REV-02, REV-03, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01 | UNIT, INT, DB, CONC, AUDIT, RT, FRT, REPO, PROV, DOC | NP-02, NP-12, NP-17 | RS-02, RS-06, RS-08, RS-09 | DEPENDENCY-HELD | D12, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-212 | `15-§11-5` | REV-01, REV-02, REV-03, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, VER-01, STL-01 | UNIT, INT, DB, CONC, AUDIT, RT, FRT, REPO, PROV, DOC | NP-02, NP-12, NP-17, NP-20 | RS-02, RS-06, RS-08, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-213 | `15-§12-1` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-03 | INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-22 | RS-09 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-214 | `15-§12-2` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 | INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-20 | RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-215 | `15-§12-3` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 | INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-20 | RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-216 | `15-§12-4` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 | INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-20 | RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-217 | `15-§12-5` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-04, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 | INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-20 | RS-09 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-218 | `15-§12-6` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-03 | INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-22 | RS-09 | PROVIDER-HELD | D12, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-219 | `15-§13-1` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, SRC-01, EVD-04, PRIV-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-07, NP-14, NP-18, NP-22 | RS-02, RS-10 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-220 | `15-§13-2` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, NEG-01, VER-02, PRIV-05, MIG-01, MIG-03, SEC-01, VER-01, PRIV-06 | INT, DB, CONC, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07, NP-18, NP-20 | RS-10 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-221 | `15-§13-3` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, MIG-01, MIG-03, SEC-01, VER-01, AUD-01 | INT, DB, CONC, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07, NP-18 | RS-10, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-222 | `15-§14-1` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-07, NP-10, NP-12 | RS-06, RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-223 | `15-§14-2` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-07, NP-10, NP-12, NP-20 | RS-06, RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-224 | `15-§14-3` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, ID-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-07, NP-10, NP-12, NP-20, NP-24 | RS-04, RS-06, RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-225 | `15-§14-4` | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-02, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07, NP-10, NP-20 | RS-09 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-226 | `15-§15-1` | ORD-01, HOLD-07 | INT, PROV, DOC | — | — | LATER-MISSION-HELD | D18 | PROPOSED — NOT EXECUTED |
| VC-R-227 | `15-§15-2` | ORD-01, HOLD-07, HOLD-03 | INT, PROV, DOC | — | — | LATER-MISSION-HELD | D18, D14 | PROPOSED — NOT EXECUTED |
| VC-R-228 | `15-§15-3` | ORD-01, HOLD-07, HOLD-03 | INT, PROV, DOC | — | — | LATER-MISSION-HELD | D18, D14 | PROPOSED — NOT EXECUTED |
| VC-R-229 | `15-§15-4` | ORD-01, HOLD-07, HOLD-03 | INT, PROV, DOC | — | — | LATER-MISSION-HELD | D18, D14 | PROPOSED — NOT EXECUTED |
| VC-R-230 | `15-§15-5` | ORD-01, HOLD-07, HOLD-03 | INT, PROV, DOC | — | — | LATER-MISSION-HELD | D18, D14 | PROPOSED — NOT EXECUTED |
| VC-R-231 | `15-§15-6` | ORD-01, HOLD-07, HOLD-03 | INT, PROV, DOC | — | — | LATER-MISSION-HELD | D18, D14 | PROPOSED — NOT EXECUTED |
| VC-R-232 | `15-§15-7` | ORD-01, HOLD-07, HOLD-03, NEG-01, VER-02, IDM-02 | INT, DB, CONC, RT, REPO, PROV, DOC | NP-20 | RS-09 | LATER-MISSION-HELD | D18, DTX | PROPOSED — NOT EXECUTED |
| VC-R-233 | `15-§16-1` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-234 | `15-§16-2` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-235 | `15-§16-3` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-236 | `15-§16-4` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-237 | `15-§16-5` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 | UNIT, INT, DB, CONC, EVAL, PERF, RT, PROV, DOC | NP-01 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-238 | `15-§16-6` | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, NEG-01, VER-02 | UNIT, INT, DB, CONC, EVAL, PERF, RT, REPO, PROV, DOC | NP-01, NP-20 | RS-11 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-239 | `15-§17-1` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-01, NP-02, NP-03, NP-04, NP-05, NP-06, NP-23 | RS-12 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-240 | `15-§17-2` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-01, NP-02, NP-03, NP-04, NP-05, NP-06, NP-23 | RS-12 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-241 | `15-§17-3` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-01, NP-02, NP-04, NP-05, NP-06, NP-23 | RS-12 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-242 | `15-§17-4` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-07, NEG-01, VER-02, VER-01, AUTHZ-07 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-01, NP-02, NP-04, NP-05, NP-06, NP-19, NP-20, NP-23 | RS-12 | LATER-MISSION-HELD | D12, D19 | PROPOSED — NOT EXECUTED |
| VC-R-243 | `15-§18-1a` | LANG-01, HOLD-02 | RT, PROV, DOC | — | — | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-244 | `15-§18-2` | LANG-01, HOLD-02, NEG-01, VER-02, PRIV-01 | INT, DB, INV, RT, REPO, PROV, DOC | NP-20, NP-21 | — | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-245 | `15-§19-1` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-246 | `15-§19-2` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01, AUD-01 | INT, DB, CONC, INV, AUDIT, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08, RS-10, RS-13 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-247 | `15-§19-3` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-248 | `15-§19-4` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-249 | `15-§19-5` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-250 | `15-§20-1` | ERR-01, ERR-02, ERR-04, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-251 | `15-§20-2` | ERR-01, ERR-02, ERR-04, HOLD-03, PRIV-05, PRIV-06, ERR-03 | INT, DB, CONC, INV, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-252 | `15-§20-3` | ERR-01, ERR-02, ERR-04, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-253 | `15-§20-4` | ERR-01, ERR-02, ERR-04, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-254 | `15-§20-5` | ERR-01, ERR-02, ERR-04, HOLD-05, NEG-01, VER-02, SRC-08, ERR-03 | INT, DB, CONC, INV, REPO, PROV, DOC | NP-20, NP-22 | — | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-255 | `15-§21-1` | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08, ERR-03 | INT, CONC, INV, REPO, PROV, DOC | NP-22 | — | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-256 | `15-§21-2` | ERR-01, ERR-02, ERR-04, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-257 | `15-§21-3` | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08 | INT, CONC, INV, REPO, PROV, DOC | NP-22 | — | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-258 | `15-§21-4` | ERR-01, ERR-02, ERR-04, HOLD-03, IDM-02 | INT, DB, CONC, RT, PROV, DOC | — | RS-09 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-259 | `15-§21-5` | ERR-01, ERR-02, ERR-04, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-260 | `15-§21-6` | ERR-01, ERR-02, ERR-04, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-261 | `15-§21-7` | ERR-01, ERR-02, ERR-04, HOLD-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-262 | `15-§21-8` | ERR-01, ERR-02, ERR-04, HOLD-03, VER-03 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-263 | `15-§21-9` | ERR-01, ERR-02, ERR-04, HOLD-01, VER-03, AUTHZ-01 | INT, DB, CONC, INV, PROV, DOC | NP-05 | — | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-264 | `15-§21-10` | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, SRC-01, EVD-04, SRC-08, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-07, NP-14, NP-18, NP-22 | RS-02, RS-10 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-265 | `15-§21-11` | ERR-01, ERR-02, ERR-04, HOLD-04 | INT, CONC, PROV, DOC | — | — | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-266 | `15-§22-1` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-05, SRC-08, VER-01 | INT, DB, INV, REPO, PROV, DOC | NP-01, NP-07, NP-08, NP-19, NP-21, NP-22 | — | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-267 | `15-§22-2` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-03, PRIV-05, VER-01, AUTHZ-08 | INT, DB, INV, REPO, PROV, DOC | NP-01, NP-07, NP-08, NP-19, NP-21 | — | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-268 | `15-§22-3` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01 | INT, DB, INV, REPO, PROV, DOC | NP-01, NP-07, NP-08, NP-19, NP-21 | — | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-269 | `15-§22-4` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01 | INT, DB, INV, REPO, PROV, DOC | NP-01, NP-07, NP-08, NP-19, NP-21 | — | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-270 | `15-§22-5` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, PRIV-05, VER-01, GOV-02, PRIV-03, AUD-01 | INT, DB, INV, AUDIT, RT, REPO, PROV, DOC | NP-01, NP-07, NP-08, NP-19, NP-21 | RS-10, RS-13 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-271 | `15-§22-6` | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-05, NEG-01, VER-02, SRC-08, VER-01 | INT, DB, INV, REPO, PROV, DOC | NP-01, NP-07, NP-08, NP-19, NP-20, NP-21, NP-22 | — | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-272 | `15-§23-1` | ARC-01, ARC-02, HOLD-03 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-273 | `15-§23-2` | ARC-01, ARC-02, HOLD-01, ID-02 | UNIT, INT, DB, INV, RT, REPO, PROV, DOC | NP-07, NP-24 | RS-04, RS-15 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-274 | `15-§23-3` | ARC-01, ARC-02, HOLD-01, AUTHZ-01 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-07 | RS-15 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-275 | `15-§23-4` | ARC-01, ARC-02, HOLD-01, IDM-02, AUD-01 | DB, CONC, INV, AUDIT, RT, REPO, PROV, DOC | NP-07 | RS-09, RS-10, RS-13, RS-15 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-276 | `15-§23-5` | ARC-01, ARC-02, HOLD-04 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-277 | `15-§23-6` | ARC-01, ARC-02 | DB, INV, RT, REPO, DOC | NP-07 | RS-15 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-278 | `15-§23-7` | ARC-01, ARC-02, HOLD-07 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | LATER-MISSION-HELD | D18 | PROPOSED — NOT EXECUTED |
| VC-R-279 | `15-§23-8` | ARC-01, ARC-02, HOLD-04 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-280 | `15-§24-1` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-281 | `15-§24-2` | NEG-01, VER-02, IDM-02 | INT, DB, CONC, RT, REPO, DOC | NP-20 | RS-09 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-282 | `15-§24-3` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-283 | `15-§24-4` | NEG-01, VER-02, MIG-01 | INT, DB, REH, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-284 | `15-§24-5` | NEG-01, VER-02, ERR-01 | INT, DB, CONC, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-285 | `15-§24-6` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-286 | `15-§25-1` | VER-06, HOLD-03, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-287 | `15-§25-2` | VER-06, HOLD-03, HOLD-05, SRC-08, VER-01, ERR-03, IDM-02 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-22 | RS-09 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-288 | `15-§25-3` | VER-06, HOLD-01, HOLD-02, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-289 | `15-§25-4` | VER-06, HOLD-01, HOLD-03, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-290 | `15-§25-5` | VER-06, HOLD-01, HOLD-03, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-291 | `15-§25-6` | VER-06, HOLD-03, ID-02, VER-01, AUD-01 | UNIT, INT, DB, AUDIT, RT, REPO, PROV, DOC | NP-24 | RS-04, RS-10, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-292 | `15-§25-7` | VER-06, HOLD-07, HOLD-03, VER-01, IDM-02 | DB, CONC, RT, REPO, PROV, DOC | — | RS-09 | LATER-MISSION-HELD | D18, DTX | PROPOSED — NOT EXECUTED |
| VC-R-293 | `15-§25-8` | VER-06, HOLD-01, HOLD-03, VER-01, AUTHZ-01 | INT, DB, INV, RT, FRT, REPO, PROV, DOC | NP-05 | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-294 | `15-§25-9` | VER-06, HOLD-05, SRC-08, VER-01, ERR-01 | INT, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-22 | RS-01 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-295 | `15-§25-10` | VER-06, HOLD-04, HOLD-08, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D15, DAI | PROPOSED — NOT EXECUTED |
| VC-R-296 | `15-§25-11` | VER-06, HOLD-01, HOLD-03, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-297 | `15-§25-12` | VER-06, HOLD-03, HOLD-05, SRC-01, EVD-04, SRC-08, VER-01, MIG-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-14, NP-22 | RS-02 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-298 | `15-§26-4` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-299 | `15-§26-5` | NEG-01, VER-02 | INT, DB, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-300 | `15-§26-6` | NEG-01, VER-02, ERR-01 | INT, DB, CONC, REPO, DOC | NP-20 | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-301 | `15-§28-1` | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, SRC-08, VER-01, SRC-07, IDM-02 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-22 | RS-09 | PROVIDER-HELD | D12, D13, D14, D15, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-302 | `3-§9-12` | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, ID-02, ID-04, MIG-05, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-06, MIG-01, MIG-03, SEC-01, MIG-04, VER-01, CAD-03, PRIV-02 | UNIT, INT, DB, CONC, INV, AUDIT, PERF, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-10, NP-12, NP-13, NP-24 | RS-04, RS-05, RS-06, RS-11, RS-13, RS-14 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-303 | `3-§11-6` | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-03, VER-01 | INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-01, NP-02, NP-04, NP-05, NP-06, NP-23 | RS-12 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-304 | `3-§15-8` | ARC-01, ARC-02, HOLD-01, HOLD-03, IDM-02 | DB, CONC, INV, RT, REPO, PROV, DOC | NP-07 | RS-09, RS-15 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-305 | `3-§15-9` | ARC-01, ARC-02, HOLD-01, HOLD-03, IDM-02 | DB, CONC, INV, RT, REPO, PROV, DOC | NP-07 | RS-09, RS-15 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-306 | `3-§23` | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, VER-01 | REPO, PROV, DOC | — | — | LATER-MISSION-HELD | D12, D13, D14, D15, D20 | PROPOSED — NOT EXECUTED |
| VC-R-307 | `24-§21-4` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-308 | `24-§21-5` | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 | INT, DB, CONC, INV, RT, FRT, REPO, PROV, DOC | NP-02, NP-06 | RS-02, RS-08 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-309 | `9-§12-11` | LANG-01, HOLD-02 | RT, PROV, DOC | — | — | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-310 | `10-§17-5` | REV-01, REV-02, REV-03, HOLD-02, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-311 | `22-§17-3` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, MIG-01, MIG-03, SEC-01, VER-01 | INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-03 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-312 | `BP-§5.3-1` | GOV-01, VER-07, GOV-02 | REPO, DOC | — | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-313 | `BP-§5.4-1` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01, ERR-01 | UNIT, INT, DB, CONC, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | PROVIDER-HELD | DPAY | PROPOSED — NOT EXECUTED |
| VC-R-314 | `BP-§6.1-1` | ARC-01, ARC-02, HOLD-01, NEG-01, VER-02, AI-01, AUD-04 | INT, DB, INV, AUDIT, EVAL, RT, REPO, PROV, DOC | NP-07, NP-16, NP-20 | RS-15 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-315 | `BP-§6.2-1` | ARC-01, ARC-02, HOLD-01, HOLD-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-06, CAD-04, AUD-01 | UNIT, INT, DB, CONC, INV, AUDIT, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-12 | RS-06, RS-10, RS-13, RS-15 | DEPENDENCY-HELD | D12, D13, DTX | PROPOSED — NOT EXECUTED |
| VC-R-316 | `BP-§6.3-1` | ARC-01, ARC-02, HOLD-03 | DB, INV, RT, REPO, PROV, DOC | NP-07 | RS-15 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-317 | `BP-§6.5-1` | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04 | INT, DB, INV, RT, REPO, PROV, DOC | NP-05, NP-15 | RS-07 | DEPENDENCY-HELD | D15 | PROPOSED — NOT EXECUTED |
| VC-R-318 | `BP-§8-1` | LANG-01, HOLD-02 | RT, PROV, DOC | — | — | DEPENDENCY-HELD | D13 | PROPOSED — NOT EXECUTED |
| VC-R-319 | `BP-§9-2` | GOV-01, VER-07, GOV-02 | REPO, DOC | — | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-320 | `BP-§9-AL` | GOV-01, VER-07, GOV-02 | REPO, DOC | — | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-321 | `BP-§10.3-C2` | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | INT, DB, INV, AUDIT, REH, RT, REPO, PROV, DOC | NP-07 | RS-10, RS-13 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-322 | `BP-§10.5-O` | VER-06, HOLD-01, HOLD-03, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-323 | `BP-§10.5-W1` | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06, MIG-05 | UNIT, INT, DB, INV, REH, RT, REPO, PROV, DOC | NP-01, NP-05, NP-07, NP-24 | RS-04, RS-14 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-324 | `BP-§10.5-W2` | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, MIG-05 | UNIT, INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-03, NP-07, NP-13, NP-24 | RS-05, RS-09, RS-12, RS-13 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-325 | `BP-§10.5-W3` | DUE-01, DUE-02, DUE-03, DUE-04, HOLD-03, HOLD-04, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 | UNIT, INT, DB, INV, REH, RT, REPO, PROV, DOC | NP-07 | RS-07 | DEPENDENCY-HELD | D14, D15 | PROPOSED — NOT EXECUTED |
| VC-R-326 | `BP-§10.5-W4` | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, MIG-01, MIG-03, SEC-01 | INT, DB, INV, AUDIT, REH, RT, FRT, PROV, DOC | NP-04, NP-05, NP-07, NP-11 | RS-01, RS-07 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-327 | `BP-§10.5-W5` | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 | UNIT, INT, DB, INV, REH, RT, FRT, REPO, PROV, DOC | NP-05, NP-07, NP-09, NP-14, NP-22 | RS-02, RS-03 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-328 | `BP-§10.5-W6` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, HOLD-05, SRC-08 | UNIT, INT, DB, INV, EVAL, PERF, RT, REPO, PROV, DOC | NP-10, NP-16, NP-22 | RS-08 | PROVIDER-HELD | D14, DPAY, DTX | PROPOSED — NOT EXECUTED |
| VC-R-329 | `BP-§10.5-W7` | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 | UNIT, INT, DB, EVAL, PERF, RT, PROV, DOC | NP-10, NP-16 | RS-08 | DEPENDENCY-HELD | D14 | PROPOSED — NOT EXECUTED |
| VC-R-330 | `BP-§10.5-W8` | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 | INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-331 | `BP-§10.5-W9` | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-01 | INT, DB, CONC, INV, REH, RT, REPO, PROV, DOC | NP-07 | RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-332 | `BP-§10.5-W10` | REV-01, REV-02, REV-03, HOLD-03, HOLD-04, BAL-02, EVD-03, VER-01 | UNIT, INT, DB, CONC, RT, FRT, REPO, PROV, DOC | NP-02, NP-10, NP-17 | RS-02, RS-08, RS-09 | DEPENDENCY-HELD | D14, D15 | PROPOSED — NOT EXECUTED |
| VC-R-333 | `BP-§10.5-W11` | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-01, HOLD-03, VER-01 | UNIT, INT, DB, CONC, AUDIT, RT, REPO, PROV, DOC | NP-13 | RS-10, RS-13 | DEPENDENCY-HELD | D12, D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-334 | `BP-§10.5-E1` | VER-06, HOLD-01, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12 | PROPOSED — NOT EXECUTED |
| VC-R-335 | `BP-§10.5-E2` | VER-06, HOLD-03, HOLD-05, BAL-02, EVD-03, SRC-08, VER-01 | UNIT, INT, DB, CONC, INV, RT, REPO, PROV, DOC | NP-10, NP-22 | RS-08 | PROVIDER-HELD | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-336 | `BP-§10.5-E3` | VER-06, HOLD-01, HOLD-02, VER-01 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-337 | `BP-§10.5-E4` | VER-06, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, CAD-03, IDM-02 | UNIT, INT, DB, CONC, AUDIT, RT, FRT, REPO, PROV, DOC | NP-05, NP-12 | RS-06, RS-09 | DEPENDENCY-HELD | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-338 | `BP-§10.5-A1` | VER-06, HOLD-01, HOLD-03, DUE-01, VER-01, VER-04 | UNIT, DB, RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-339 | `BP-§10.5-A2` | VER-06, HOLD-01, HOLD-03, AUTHZ-03, VER-01, VER-04 | INT, DB, INV, RT, FRT, REPO, PROV, DOC | NP-04 | RS-01 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-340 | `BP-§10.5-A3` | VER-06, HOLD-01, HOLD-03, VER-01, VER-04 | RT, FRT, REPO, PROV, DOC | — | RS-01 | DEPENDENCY-HELD | D12, DTX | PROPOSED — NOT EXECUTED |
| VC-R-341 | `BP-§10.5-B1` | VER-06, HOLD-03, HOLD-05, SRC-08, VER-01, VER-05 | INT, INV, RT, FRT, REPO, PROV, DOC | NP-22 | RS-02, RS-03 | FOLLOW-UP | D14, DPAY | PROPOSED — NOT EXECUTED |
| VC-R-342 | `BP-§10.5-B2` | VER-06, HOLD-01, HOLD-02, VER-01, VER-05 | RT, FRT, REPO, PROV, DOC | — | RS-02, RS-03 | FOLLOW-UP | D12, D13 | PROPOSED — NOT EXECUTED |
| VC-R-343 | `BP-§10.5-B3` | VER-06, HOLD-03, VER-01, VER-05, IDM-02 | DB, CONC, RT, FRT, REPO, PROV, DOC | — | RS-02, RS-03, RS-09 | FOLLOW-UP | D14, DTX | PROPOSED — NOT EXECUTED |
| VC-R-344 | `BP-§10.5-X` | VER-06, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01 | UNIT, INT, DB, CONC, AUDIT, RT, FRT, REPO, PROV, DOC | NP-12 | RS-06 | DEPENDENCY-HELD | D12, D14 | PROPOSED — NOT EXECUTED |
| VC-R-345 | `BP-§11-1` | ORD-01, HOLD-07 | INT, PROV, DOC | — | — | LATER-MISSION-HELD | D18 | PROPOSED — NOT EXECUTED |
| VC-R-346 | `BP-§11-5` | GOV-01, VER-07, GOV-02 | REPO, DOC | — | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-347 | `BP-§13-1` | GOV-01, VER-07, GOV-02 | REPO, DOC | — | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-348 | `BP-§13-9` | GOV-01, VER-07, GOV-02, VER-04, VER-05 | RT, FRT, REPO, PROV, DOC | — | RS-01, RS-02, RS-03 | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |
| VC-R-349 | `BP-§14-1` | GOV-01, VER-07, GOV-02 | REPO, DOC | — | — | DESIGN ACCEPTED — EVIDENCE HOLD | — | PROPOSED — NOT EXECUTED |

## 15. Verification-Stage Ownership

| Stage | Owner | Uses |
|---|---|---|
| 15–16 | Authorized builder | Writes and runs `UNIT`, `INT`, `DB`, `CONC`, `INV`, `AUDIT`, `REG` items for its workstream; reports honestly |
| 17 | Human runtime verifier | `RT` items |
| 18 | Mission Control | Runtime review |
| 19 | Independent Verification Actor (Source 18 §4.9) | Every item, coverage and drift |
| Founder | Founder | `FRT` items RS-01, RS-02, RS-03 (Phase 2 after provider authorization) |

## 16. Final Acceptance Statement

This checklist plans verification only. Nothing in it is executed or passed. Acceptance requires executed evidence at the named stages, Stage 19 independent verification and Mission Control acceptance.
