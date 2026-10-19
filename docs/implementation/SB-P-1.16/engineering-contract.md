# SB-P-1.16 — Engineering Contract

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

## 1. Document Metadata

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
| Obligations | 135 (`EC16-*`), one per locked `EIS16-*` requirement |

## 2. Purpose and Authority

This contract translates the locked EIS into explicit engineering obligations for a future, separately authorized build. Each obligation `EC16-X` realizes exactly the locked requirement `EIS16-X` and inherits its FCTM rows unchanged (EIS Section 35.2). It adds no product behaviour, changes no FCTM row, and authorizes nothing.

## 3. Locked References

| Reference | Identity |
|---|---|
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.16.md`, blob `305571a66af4a4683bd967466fc83645de5dfbd3` |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.16-EIS.md`, blob `46fffd7b140940854c9b2b847517dde2f17584df` (Stage 11 record `mission-control/11-…`, blob `87a63f40`) |
| Canonical FCTM | `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md`, blob `94dd52202ad040f64394f07f95389d02ffcc5dd0` (555 rows; 349 `IN SCOPE`) |
| Stage 8 record | `mission-control/10-stage8-founder-approval-and-lock-record.md`, blob `dea8d9f5711a468a254584fc1e4f91c38bc5ac87` |
| Upstream locked EIS | SB-P-1.12 (`c444f750`), SB-P-1.13, SB-P-1.14 (`899a0fe1`), SB-P-1.15 — specified, not implemented |

## 4. Preserved Holds and Gates

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

No unresolved question becomes approved because it appears in this package.

## 5. System Boundaries and Exclusions

### 5.1 In scope

The 349 `IN SCOPE` rows, through the obligations below: credit identity, Ledger credit facts, authoritative balances, repayment and allocation, excess and customer advance, thresholds, follow-up preparation, payment-evidence states, upload intake, matching, linking, review, idempotency, reversal handling, provider adapter contract (provider-gated), readers, authorization, isolation, audit, privacy, recovery, migration design and verification.

### 5.2 Not authorized by this package

Implementation, application code, SQL, migrations, deployment, production change, payment or messaging provider activation, historical profiling, Lovable or other builder execution, and Stage 13 approval.

### 5.3 Data integrity and authorization boundaries

- Balances derive only from authorized Ledger facts; evidence status never moves a balance (MQ-01).
- One governed write path; no client DML on protected objects; every write revalidates authority and consumes its confirmation binding in one transaction.
- Tenant isolation through kernel RLS and composite `(business_id, id)` references on every surface, including jobs and integration paths.
- Owner-reserved financial decisions; Managers act only within explicit object-scoped delegation (MQ-07); Employees receive no balances (OQ-03); customers hold no Ledger capability.
- AI assists and never authorizes a repayment, refund, offset, advance, correction or match.

### 5.4 Dependencies

SB-P-1.12 kernel and identity (`D12`); SB-P-1.13 gateway and UDI (`D13`, `DAI`); SB-P-1.14 Ledger, governed commands, storage and the `DTX`/PQ-2 cut-over (`D14`, `DTX`); SB-P-1.15 timezone, scheduler, reminders and readers (`D15`, `DSCH`); payment provider (`DPAY`); approved customer channel (`DNTF`); SB-P-1.18 to SB-P-1.20 demonstrations (`D18`–`D20`).

## 6. Obligation Types

| Type | Meaning |
|---|---|
| `BUILD — DEPENDENCY GATED` | Implement exactly as the locked EIS specifies, under a future Implementation Authorization, after the row's upstream holds are satisfied by implemented, accepted upstream work |
| `BUILD — CONDITIONAL DIRECTION (EQ16-01)` | Implement the preferred columns direction only after the SB-P-1.14 findings confirm it; the link-table alternative stays admissible |
| `BUILD — PROVISIONAL (FIN-01)` | Do not build until the FIN-01 representation is finalized through engineering specification and accepted; the product behaviour (D-1 to D-6) is binding meanwhile |
| `BUILD — OPEN, FAIL-CLOSED` | The open question stays open; build only the fail-closed behaviour the EIS states (no secret storage, no automatic Ledger change, no erasure) |
| `BUILD — PROVIDER GATED` | Build against the provider-agnostic contract and a fake adapter only; no provider, credential or activation until separately authorized |
| `MIGRATION-DESIGN` | Fixes objects, ordering, rollback, forward-fix and rehearsal; writing or executing a migration needs an explicit migration mission (`docs/migration/README.md`) |
| `VERIFICATION` | Verification architecture and acceptance evidence; adds no behaviour |
| `GOVERNANCE` | Constrains every workstream; adds no behaviour |
| `GATE` | Not builder work; Mission Control enforces it through dependency evidence |

## 7. Engineering Obligations

Verification references name the Verification Checklist's negative-path checks (`NP-*`) and runtime scenarios (`RS-*`); every row also has a row-keyed item in Verification Checklist Section 14.4. Row lists of 25 or fewer are shown; larger lists are exactly the rows citing the obligation in Section 12.

### 7.1 Target Architecture, Interfaces and Trust Boundaries (EIS Section 6)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-ARC-01` | `EIS16-ARC-01` | Consume, never duplicate | AF/PR | `GOVERNANCE` | Cross-cutting | REPO, DOC | RS-15 | 33 rows (Section 12) |
| `EC16-ARC-02` | `EIS16-ARC-02` | One governed write path | PR/TR | `GOVERNANCE` | Cross-cutting | REPO, DOC | NP-07 | 35 rows (Section 12) |
| `EC16-ARC-03` | `EIS16-ARC-03` | Trust zones and data flow | AF/TR | `GOVERNANCE` | Cross-cutting | REPO, DOC | Section 14.4 row items | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` (13) |

### 7.2 Customer Identity Reference (EIS Section 7)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-ID-01` | `EIS16-ID-01` | Composite participant reference | PR/TR | `BUILD — CONDITIONAL DIRECTION (EQ16-01)` | WS-A | UNIT, DB, INT | RS-04 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§18-1`, `BP-§10.5-W1` (9) |
| `EC16-ID-02` | `EIS16-ID-02` | No automatic identity resolution | PR | `BUILD — DEPENDENCY GATED` | WS-A | UNIT, DB, INT | NP-24, RS-04 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§5-1`, `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§13-1`, `14-§18-1`, `14-§20-2`, `14-§22-1`, `14-§22-3`, `15-§7-5`, `15-§14-3`, `15-§23-2`, `15-§25-6`, `3-§9-12`, `BP-§10.5-W1` (24) |
| `EC16-ID-03` | `EIS16-ID-03` | Repayment participant is derived (CF-1) | PR/TR | `BUILD — DEPENDENCY GATED` | WS-A | UNIT, DB, INT | Section 14.4 row items | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2` (8) |
| `EC16-ID-04` | `EIS16-ID-04` | Owner-only historical attribution (`16:FPDR-2`) | PR | `BUILD — DEPENDENCY GATED` | WS-A | UNIT, DB, INT | NP-05, NP-24, RS-14 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§18-1`, `14-§22-1`, `3-§9-12`, `BP-§10.5-W1` (11) |
| `EC16-ID-05` | `EIS16-ID-05` | Unattributed disclosure | PR/TR | `BUILD — DEPENDENCY GATED` | WS-A | UNIT, DB, INT | RS-14 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§5-7`, `14-§7-4`, `14-§13-1`, `14-§18-1`, `3-§9-12`, `BP-§10.5-W1` (12) |

### 7.3 Credit Facts on the Shared Ledger (EIS Section 8)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-LDG-01` | `EIS16-LDG-01` | Four-state model reused | AF/PR | `BUILD — DEPENDENCY GATED` | WS-A | DB, INT | Section 14.4 row items | `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `BP-§10.3-C2` (12) |
| `EC16-LDG-02` | `EIS16-LDG-02` | Credit direction | AF | `BUILD — DEPENDENCY GATED` | WS-A | DB, INT | Section 14.4 row items | `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `BP-§10.3-C2` (12) |
| `EC16-LDG-03` | `EIS16-LDG-03` | Capture through the governed create command | PR | `BUILD — DEPENDENCY GATED` | WS-A | DB, INT | RS-04 | `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6` (6) |

### 7.4 Authoritative Balances and Financial Invariants (EIS Section 9)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-BAL-01` | `EIS16-BAL-01` | Single hardened definition | PR/TR | `BUILD — DEPENDENCY GATED` | WS-B | UNIT, DB, CONC | RS-05 | `14-§5-7`, `14-§7-4`, `3-§9-12` (3) |
| `EC16-BAL-02` | `EIS16-BAL-02` | Verification never moves a balance (MQ-01 reading A) | PR | `BUILD — DEPENDENCY GATED` | WS-B | UNIT, DB, CONC | NP-10 | `14-§5-7`, `14-§7-4`, `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-7`, `15-§4-8`, `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4`, `3-§9-12`, `BP-§10.5-W10`, `BP-§10.5-E2` (24) |
| `EC16-BAL-03` | `EIS16-BAL-03` | Distinct measures | PR/TR | `BUILD — DEPENDENCY GATED` | WS-B | UNIT, DB, CONC | Section 14.4 row items | `14-§5-7`, `14-§7-4`, `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `3-§9-12` (20) |
| `EC16-BAL-04` | `EIS16-BAL-04` | Correction guard (C-01) | PR | `BUILD — DEPENDENCY GATED` | WS-B | UNIT, DB, CONC | NP-13, RS-13 | `14-§5-7`, `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `14-§18-3`, `3-§9-12`, `BP-§10.5-W2`, `BP-§10.5-W11` (17) |
| `EC16-BAL-05` | `EIS16-BAL-05` | Reader parity | PR | `BUILD — DEPENDENCY GATED` | WS-B | UNIT, DB, CONC | RS-11 | `14-§5-7`, `14-§7-4`, `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `3-§9-12` (20) |

### 7.5 Due Dates and Ageing (EIS Section 10)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-DUE-01` | `EIS16-DUE-01` | Optional `due_on` (`16:FPDR-5`) | PR/TR | `BUILD — DEPENDENCY GATED` | WS-A | UNIT, DB | Section 14.4 row items | `14-§5-6`, `BP-§10.5-W3`, `BP-§10.5-A1` (3) |
| `EC16-DUE-02` | `EIS16-DUE-02` | Overdue predicate | PR | `BUILD — DEPENDENCY GATED` | WS-A | UNIT, DB | RS-07 | `14-§5-6`, `BP-§10.5-W3` (2) |
| `EC16-DUE-03` | `EIS16-DUE-03` | Ageing | PR | `BUILD — DEPENDENCY GATED` | WS-A | UNIT, DB | Section 14.4 row items | `14-§5-6`, `BP-§10.5-W3` (2) |
| `EC16-DUE-04` | `EIS16-DUE-04` | `due_on` lifecycle | TR | `BUILD — DEPENDENCY GATED` | WS-A | UNIT, DB | Section 14.4 row items | `14-§5-6`, `BP-§10.5-W3` (2) |

### 7.6 Repayment and Allocation (EIS Section 11)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-REP-01` | `EIS16-REP-01` | One settlement target | AF/PR | `BUILD — DEPENDENCY GATED` | WS-B | DB, INT, CONC | RS-05 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2` (8) |
| `EC16-REP-02` | `EIS16-REP-02` | Allocation command | PR/TR | `BUILD — DEPENDENCY GATED` | WS-B | DB, INT, CONC | RS-05 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2` (8) |
| `EC16-REP-03` | `EIS16-REP-03` | Recording authority (MQ-07) | PR | `BUILD — DEPENDENCY GATED` | WS-B | DB, INT, CONC | NP-03, RS-12 | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§14-1`, `14-§14-2`, `14-§18-3`, `15-§17-1`, `15-§17-2`, `BP-§10.5-W2` (12) |
| `EC16-REP-04` | `EIS16-REP-04` | Retry deduplication | AF | `BUILD — DEPENDENCY GATED` | WS-B | DB, INT, CONC | Section 14.4 row items | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `BP-§10.5-W2` (8) |

### 7.7 Excess Payment and Customer Advance (`16:FPDR-10`) (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-CAD-01` | `EIS16-CAD-01` | Excess stops (D-1) | PR | `BUILD — DEPENDENCY GATED` | WS-B | UNIT, DB, CONC, AUDIT | NP-12, RS-06 | 26 rows (Section 12) |
| `EC16-CAD-02` | `EIS16-CAD-02` | Excess is not a mismatch | PR | `BUILD — DEPENDENCY GATED` | WS-B | UNIT, DB, CONC, AUDIT | NP-12 | 26 rows (Section 12) |
| `EC16-CAD-03` | `EIS16-CAD-03` | Retain (D-2, D-3, M-1) | PR/TR | `BUILD — PROVISIONAL (FIN-01)` | WS-B | UNIT, DB, CONC, AUDIT | NP-05, RS-06 | `14-§5-7`, `14-§7-3`, `14-§7-4`, `3-§9-12`, `BP-§10.5-E4` (5) |
| `EC16-CAD-04` | `EIS16-CAD-04` | Apply (M-2) | PR/TR | `BUILD — PROVISIONAL (FIN-01)` | WS-B | UNIT, DB, CONC, AUDIT | NP-05, RS-06 | `14-§3-5`, `14-§7-4`, `14-§14-1`, `BP-§6.2-1` (4) |
| `EC16-CAD-05` | `EIS16-CAD-05` | Refund (M-3) | PR/TR | `BUILD — PROVISIONAL (FIN-01)` | WS-B | UNIT, DB, CONC, AUDIT | NP-05, RS-06 | `14-§7-5`, `14-§14-1`, `15-§8-4` (3) |
| `EC16-CAD-06` | `EIS16-CAD-06` | No automation (D-4, D-5) | PR | `BUILD — DEPENDENCY GATED` | WS-B | UNIT, DB, CONC, AUDIT | NP-12 | 26 rows (Section 12) |
| `EC16-CAD-07` | `EIS16-CAD-07` | Conservation and audit (D-6) | PR/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS-B | UNIT, DB, CONC, AUDIT | Section 14.4 row items | 26 rows (Section 12) |
| `EC16-CAD-08` | `EIS16-CAD-08` | Acceptance | PR | `BUILD — DEPENDENCY GATED` | WS-B | RT, FRT, DB | RS-06 | 26 rows (Section 12) |

### 7.8 Thresholds and Warn-Not-Block (EIS Section 13)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-THR-01` | `EIS16-THR-01` | Owner configuration | PR | `BUILD — DEPENDENCY GATED` | WS-C | INT, DB, RT | NP-05 | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `BP-§10.5-W4` (17) |
| `EC16-THR-02` | `EIS16-THR-02` | Warn, never block by default | PR | `BUILD — DEPENDENCY GATED` | WS-C | INT, DB, RT | NP-11, RS-01, RS-07 | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `BP-§10.5-W4` (17) |
| `EC16-THR-03` | `EIS16-THR-03` | Re-evaluation at confirmation (DC-08) | PR | `BUILD — DEPENDENCY GATED` | WS-C | INT, DB, RT | RS-01 | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `BP-§10.5-W4` (17) |
| `EC16-THR-04` | `EIS16-THR-04` | Routing | PR | `BUILD — DEPENDENCY GATED` | WS-C | INT, DB, RT | NP-04 | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `14-§14-3`, `14-§22-7`, `BP-§10.5-W4` (19) |

### 7.9 Owner Follow-up and Communication Preparation (EIS Section 14)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-FUP-01` | `EIS16-FUP-01` | Factual follow-up | PR | `BUILD — DEPENDENCY GATED` | WS-C | INT, RT | RS-07 | `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `BP-§6.5-1` (7) |
| `EC16-FUP-02` | `EIS16-FUP-02` | Preparation only | PR | `BUILD — DEPENDENCY GATED` | WS-C | INT, RT | NP-05, NP-15, RS-07 | `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§14-4`, `14-§22-9`, `BP-§6.5-1` (9) |
| `EC16-FUP-03` | `EIS16-FUP-03` | Shared reminder engine | AF | `BUILD — DEPENDENCY GATED` | WS-C | INT, RT | Section 14.4 row items | `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `BP-§6.5-1` (7) |

### 7.10 Payment-Evidence Record, Provenance and Verification States (EIS Section 15)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-EVD-01` | `EIS16-EVD-01` | Normalized evidence record | PR/TR | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, DB, INT | Section 14.4 row items | `15-§6-1`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§6-12` (12) |
| `EC16-EVD-02` | `EIS16-EVD-02` | Four independent concepts | PR | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, DB, INT | RS-08 | `15-§1-1`, `15-§2-8`, `15-§3-1`, `15-§3-2`, `15-§3-3`, `15-§3-4`, `15-§3-5`, `15-§3-6`, `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-8` (15) |
| `EC16-EVD-03` | `EIS16-EVD-03` | Verification state machine | PR/TR | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, DB, INT | RS-08 | `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-7`, `15-§4-8`, `BP-§10.5-W10`, `BP-§10.5-E2` (10) |
| `EC16-EVD-04` | `EIS16-EVD-04` | Upload ceiling (OQ-04 Option C) | PR | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, DB, INT | NP-14, RS-02 | `15-§1-2`, `15-§3-7`, `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-7`, `15-§4-8`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§13-1`, `15-§21-10`, `15-§25-12`, `BP-§5.4-1`, `BP-§10.5-W5` (22) |
| `EC16-EVD-05` | `EIS16-EVD-05` | Exact amounts | PR | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, DB, INT | Section 14.4 row items | `15-§6-1`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§6-12` (12) |
| `EC16-EVD-06` | `EIS16-EVD-06` | Preservation (MQ-03) | PR/UQ | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, DB, INT | Section 14.4 row items | `15-§5-5`, `15-§6-8`, `15-§6-12`, `15-§10-1`, `15-§11-2` (5) |

### 7.11 Evidence Sources, Provider-Account Binding and Intake (EIS Section 16)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-SRC-01` | `EIS16-SRC-01` | Provider-agnostic adapter contract | PR/TR | `BUILD — PROVIDER GATED` | WS-E | INT, PROV | Section 14.4 row items | `15-§1-2`, `15-§3-7`, `15-§4-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `15-§13-1`, `15-§21-10`, `15-§25-12`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` (17) |
| `EC16-SRC-02` | `EIS16-SRC-02` | Binding | PR/PD | `BUILD — PROVIDER GATED` | WS-E | INT, PROV | NP-05 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` (13) |
| `EC16-SRC-03` | `EIS16-SRC-03` | Accept-then-process intake | TR/UQ/PD | `BUILD — PROVIDER GATED` | WS-E | INT, PROV | RS-03 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` (13) |
| `EC16-SRC-04` | `EIS16-SRC-04` | Failed verification is not evidence | PR | `BUILD — PROVIDER GATED` | WS-E | INT, PROV | NP-09 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` (13) |
| `EC16-SRC-05` | `EIS16-SRC-05` | Secrets | PD/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS-E | INT, PROV | NP-22 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` (13) |
| `EC16-SRC-06` | `EIS16-SRC-06` | Upload path | AF/PR | `BUILD — DEPENDENCY GATED` | WS-D | INT, PROV | NP-14 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` (13) |
| `EC16-SRC-07` | `EIS16-SRC-07` | Deferred channels (`16:FPDR-9`) | PR | `BUILD — PROVIDER GATED` | WS-E | INT, PROV | Section 14.4 row items | `15-§1-2`, `15-§5-1`, `15-§5-2`, `15-§28-1` (4) |
| `EC16-SRC-08` | `EIS16-SRC-08` | Activation gate | PD | `BUILD — PROVIDER GATED` | WS-E | INT, PROV | NP-22 | 44 rows (Section 12) |

### 7.12 Deterministic Matching (EIS Section 17)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-MAT-01` | `EIS16-MAT-01` | Deterministic candidates | PR/TR | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, INT | RS-08 | `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `BP-§10.5-W6`, `BP-§10.5-W7` (12) |
| `EC16-MAT-02` | `EIS16-MAT-02` | Automatic link limits | PR | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, INT | NP-10 | `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `BP-§10.5-W6`, `BP-§10.5-W7` (12) |
| `EC16-MAT-03` | `EIS16-MAT-03` | No AI resolution | PR | `BUILD — DEPENDENCY GATED` | WS-D | UNIT, INT | NP-16 | `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `BP-§10.5-W6`, `BP-§10.5-W7` (12) |

### 7.13 Linking and Review (EIS Section 18)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-LNK-01` | `EIS16-LNK-01` | Link types | PR | `BUILD — DEPENDENCY GATED` | WS-D | DB, CONC | RS-09 | `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4` (11) |
| `EC16-LNK-02` | `EIS16-LNK-02` | Atomic create-and-link | PR | `BUILD — DEPENDENCY GATED` | WS-D | DB, CONC | NP-10 | `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4` (11) |
| `EC16-LNK-03` | `EIS16-LNK-03` | Linked-amount invariants | PR | `BUILD — DEPENDENCY GATED` | WS-D | DB, CONC | Section 14.4 row items | `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4` (11) |
| `EC16-REV-01` | `EIS16-REV-01` | Review queue | PR | `BUILD — DEPENDENCY GATED` | WS-D | INT, DB, CONC | NP-02, RS-02, RS-08 | 32 rows (Section 12) |
| `EC16-REV-02` | `EIS16-REV-02` | No auto-creation | PR | `BUILD — DEPENDENCY GATED` | WS-D | INT, DB, CONC | NP-17 | `15-§9-1`, `15-§9-2`, `15-§9-3`, `15-§9-4`, `15-§9-5`, `15-§9-6`, `15-§10-1`, `15-§10-2`, `15-§10-3`, `15-§10-4`, `15-§10-5`, `15-§11-1`, `15-§11-2`, `15-§11-3`, `15-§11-4`, `15-§11-5`, `10-§17-5`, `BP-§10.5-W8`, `BP-§10.5-W10` (19) |
| `EC16-REV-03` | `EIS16-REV-03` | Concurrent resolution | TR | `BUILD — DEPENDENCY GATED` | WS-D | INT, DB, CONC | RS-09 | `15-§9-1`, `15-§9-2`, `15-§9-3`, `15-§9-4`, `15-§9-5`, `15-§9-6`, `15-§10-1`, `15-§10-2`, `15-§10-3`, `15-§10-4`, `15-§10-5`, `15-§11-1`, `15-§11-2`, `15-§11-3`, `15-§11-4`, `15-§11-5`, `10-§17-5`, `BP-§10.5-W8`, `BP-§10.5-W10` (19) |

### 7.14 Idempotency and Exactly-Once Financial Meaning (EIS Section 19)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-IDM-01` | `EIS16-IDM-01` | Three layers | TR | `BUILD — DEPENDENCY GATED` | WS-D | DB, CONC | RS-09 | `15-§12-1`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-5`, `15-§12-6`, `BP-§10.5-W9` (7) |
| `EC16-IDM-02` | `EIS16-IDM-02` | Command keys | AF | `BUILD — DEPENDENCY GATED` | WS-D | DB, CONC | RS-09 | 37 rows (Section 12) |
| `EC16-IDM-03` | `EIS16-IDM-03` | Single key-scope scheme (CF-5) | TR | `BUILD — DEPENDENCY GATED` | WS-D | DB, CONC | Section 14.4 row items | `15-§12-1`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-5`, `15-§12-6`, `BP-§10.5-W9` (7) |

### 7.15 Reversals, Refunds, Disputes and Settlement (EIS Section 20)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-RVS-01` | `EIS16-RVS-01` | Fail-closed reversal | PR | `BUILD — DEPENDENCY GATED` | WS-D | DB, CONC, AUDIT | NP-18, RS-10 | `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10` (5) |
| `EC16-RVS-02` | `EIS16-RVS-02` | Ordering (CF-3) | TR | `BUILD — PROVIDER GATED` | WS-E | DB, CONC, AUDIT | NP-18 | `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10` (5) |
| `EC16-RVS-03` | `EIS16-RVS-03` | Partial and dispute states (CF-4) | TR/FC | `BUILD — PROVIDER GATED` | WS-E | DB, CONC, AUDIT | NP-18 | `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10` (5) |
| `EC16-RVS-04` | `EIS16-RVS-04` | Governed void | UQ | `BUILD — OPEN, FAIL-CLOSED` | WS-B | DB, CONC, AUDIT | Section 14.4 row items | `15-§4-7`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§21-10` (5) |
| `EC16-STL-01` | `EIS16-STL-01` | Settlement | PR/PD/FC | `BUILD — PROVISIONAL (FIN-01)` | WS-E | UNIT, PROV | NP-17 | `15-§5-4`, `15-§7-8`, `15-§10-2`, `15-§11-5` (4) |

### 7.16 Concurrency (EIS Section 21)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-CNC-01` | `EIS16-CNC-01` | Serialization points | PR/TR | `BUILD — DEPENDENCY GATED` | WS-G | CONC, DB | Section 14.4 row items | `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§18-3`, `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4`, `BP-§10.5-W2` (19) |
| `EC16-CNC-02` | `EIS16-CNC-02` | Total lock order | TR | `BUILD — DEPENDENCY GATED` | WS-G | CONC, DB | Section 14.4 row items | 32 rows (Section 12) |
| `EC16-CNC-03` | `EIS16-CNC-03` | Version-bound confirmation | PR | `BUILD — DEPENDENCY GATED` | WS-G | CONC, DB | NP-06 | `14-§16-1`, `14-§16-2`, `14-§16-3`, `14-§16-4`, `14-§16-5`, `14-§16-6`, `15-§9-5`, `15-§19-1`, `15-§19-2`, `15-§19-3`, `15-§19-4`, `15-§19-5`, `24-§21-4`, `24-§21-5` (14) |
| `EC16-CNC-04` | `EIS16-CNC-04` | Commit revalidation | AF/UQ | `BUILD — DEPENDENCY GATED` | WS-G | CONC, DB | NP-06 | `14-§16-1`, `14-§16-2`, `14-§16-3`, `14-§16-4`, `14-§16-5`, `14-§16-6`, `15-§19-1`, `15-§19-2`, `15-§19-3`, `15-§19-4`, `15-§19-5`, `24-§21-4`, `24-§21-5` (13) |

### 7.17 Authorization: Owner, Manager, Employee, Customer (EIS Section 22)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-AUTHZ-01` | `EIS16-AUTHZ-01` | Capability registry | PR/TR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | NP-05 | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `14-§18-6`, `14-§19-2`, `14-§20-3`, `15-§9-5`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `15-§21-9`, `15-§23-3`, `15-§25-8`, `3-§11-6` (16) |
| `EC16-AUTHZ-02` | `EIS16-AUTHZ-02` | Scoped Manager delegation (`16:FPDR-7`; MQ-07) | PR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | NP-02, RS-12 | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6` (9) |
| `EC16-AUTHZ-03` | `EIS16-AUTHZ-03` | Employee confidentiality (OQ-03) | PR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | NP-04 | `14-§3-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `14-§19-5`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6`, `BP-§10.5-W4`, `BP-§10.5-A2` (22) |
| `EC16-AUTHZ-04` | `EIS16-AUTHZ-04` | Customer | PR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | NP-23 | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6` (9) |
| `EC16-AUTHZ-05` | `EIS16-AUTHZ-05` | Server-derived authority | AF | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | NP-01 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `14-§18-1`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6`, `BP-§10.5-W1` (18) |
| `EC16-AUTHZ-06` | `EIS16-AUTHZ-06` | Revocation | PR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | NP-06 | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `14-§16-1`, `14-§16-2`, `14-§16-3`, `14-§16-4`, `14-§16-5`, `14-§16-6`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `15-§19-1`, `15-§19-2`, `15-§19-3`, `15-§19-4`, `15-§19-5`, `3-§11-6`, `24-§21-4`, `24-§21-5` (22) |
| `EC16-AUTHZ-07` | `EIS16-AUTHZ-07` | Platform and support (CF-2) | PR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | NP-19 | `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§17-4`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6` (12) |
| `EC16-AUTHZ-08` | `EIS16-AUTHZ-08` | Raw evidence capability | PR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | NP-21 | `15-§6-8`, `15-§22-2` (2) |
| `EC16-AUTHZ-09` | `EIS16-AUTHZ-09` | Grant experience (R15-11) | FC | `BUILD — DEPENDENCY GATED` | WS-G | DB, INT, INV | Section 14.4 row items | `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `3-§11-6` (9) |

### 7.18 Security, Tenant Isolation and Birth-Safe Objects (EIS Section 23)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-SEC-01` | `EIS16-SEC-01` | Birth-safe objects | AF | `BUILD — DEPENDENCY GATED` | WS-G | INV, DB, INT | NP-07 | 110 rows (Section 12) |
| `EC16-SEC-02` | `EIS16-SEC-02` | Privilege closure (C-09) | PR | `BUILD — DEPENDENCY GATED` | WS-G | INV, DB, INT | NP-07 | `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6`, `BP-§10.3-C2` (23) |
| `EC16-SEC-03` | `EIS16-SEC-03` | RLS and composite keys | AF/PR | `BUILD — DEPENDENCY GATED` | WS-G | INV, DB, INT | NP-01 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§13-1`, `14-§18-1`, `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6`, `BP-§10.5-W1` (20) |
| `EC16-SEC-04` | `EIS16-SEC-04` | Service role confinement | AF | `BUILD — DEPENDENCY GATED` | WS-G | INV, DB, INT | NP-08 | `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6` (11) |
| `EC16-SEC-05` | `EIS16-SEC-05` | Cross-business matrix | PR | `BUILD — DEPENDENCY GATED` | WS-G | INV, DB, INT | NP-01 | `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6` (11) |
| `EC16-SEC-06` | `EIS16-SEC-06` | Webhook validation | PR/PD | `BUILD — PROVIDER GATED` | WS-G | INV, DB, INT | NP-09 | `15-§1-2`, `15-§3-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5` (13) |

### 7.19 Corrections, Audit and Decision Records (EIS Section 24)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-AUD-01` | `EIS16-AUD-01` | Governed correction | AF/PR | `BUILD — DEPENDENCY GATED` | WS-G | AUDIT, DB | RS-10, RS-13 | 39 rows (Section 12) |
| `EC16-AUD-02` | `EIS16-AUD-02` | Decision records | PR | `BUILD — DEPENDENCY GATED` | WS-G | AUDIT, DB | Section 14.4 row items | `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `BP-§10.5-W4`, `BP-§10.5-W11` (23) |
| `EC16-AUD-03` | `EIS16-AUD-03` | Legacy history | TR | `BUILD — DEPENDENCY GATED` | WS-G | AUDIT, DB | Section 14.4 row items | `14-§5-13`, `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `BP-§10.5-W11` (7) |
| `EC16-AUD-04` | `EIS16-AUD-04` | AI provenance | PR | `BUILD — DEPENDENCY GATED` | WS-G | AUDIT, DB | Section 14.4 row items | `14-§3-1`, `14-§3-5`, `14-§19-5`, `BP-§6.1-1` (4) |

### 7.20 Privacy, Confidentiality and Evidence Lifecycle Boundary (EIS Section 25)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-PRIV-01` | `EIS16-PRIV-01` | Minimization | PR/TR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INV, DOC | NP-21 | `14-§10-6`, `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `15-§6-1`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§6-12`, `15-§18-2`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6` (25) |
| `EC16-PRIV-02` | `EIS16-PRIV-02` | Dignity | PR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INV, DOC | Section 14.4 row items | `14-§1-1`, `14-§1-2`, `14-§2-8`, `14-§3-1`, `14-§3-2`, `14-§3-3`, `14-§3-4`, `14-§3-5`, `14-§3-6`, `14-§3-7`, `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§19-4`, `3-§9-12`, `BP-§6.5-1` (19) |
| `EC16-PRIV-03` | `EIS16-PRIV-03` | Correction and de-identification path | UQ | `BUILD — OPEN, FAIL-CLOSED` | WS-G | DB, INV, DOC | Section 14.4 row items | `14-§17-1`, `14-§19-1`, `14-§19-3`, `15-§22-5` (4) |
| `EC16-PRIV-04` | `EIS16-PRIV-04` | Draft record class | TR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INV, DOC | Section 14.4 row items | `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§22-9`, `BP-§6.5-1` (8) |
| `EC16-PRIV-05` | `EIS16-PRIV-05` | U-08 exclusions (Stage 8 F-3, F-5) | FC | `GOVERNANCE` | WS-G | DB, INV, DOC | Section 14.4 row items | `14-§17-1`, `15-§5-5`, `15-§6-8`, `15-§6-12`, `15-§10-1`, `15-§11-2`, `15-§13-1`, `15-§13-2`, `15-§20-2`, `15-§22-2`, `15-§22-5` (11) |
| `EC16-PRIV-06` | `EIS16-PRIV-06` | No resurrection | PR | `BUILD — DEPENDENCY GATED` | WS-G | DB, INV, DOC | Section 14.4 row items | `15-§6-8`, `15-§13-2`, `15-§20-2` (3) |

### 7.21 AI and Communication Authority (EIS Section 26)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-AI-01` | `EIS16-AI-01` | Assistant, not judge | PR | `BUILD — DEPENDENCY GATED` | WS-F | EVAL, INT | NP-16 | `14-§1-1`, `14-§1-2`, `14-§2-8`, `14-§3-1`, `14-§3-2`, `14-§3-3`, `14-§3-4`, `14-§3-5`, `14-§3-6`, `14-§3-7`, `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§19-5`, `BP-§6.1-1` (18) |
| `EC16-AI-02` | `EIS16-AI-02` | Scoped context | AF | `BUILD — DEPENDENCY GATED` | WS-F | EVAL, INT | NP-01 | `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6` (17) |

### 7.22 Errors, Retries and Recovery (EIS Section 27)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-ERR-01` | `EIS16-ERR-01` | Narrow failure | AF/PR | `BUILD — DEPENDENCY GATED` | WS-G | INT, CONC | Section 14.4 row items | 27 rows (Section 12) |
| `EC16-ERR-02` | `EIS16-ERR-02` | Unknown outcome | AF | `BUILD — DEPENDENCY GATED` | WS-G | INT, CONC | Section 14.4 row items | 29 rows (Section 12) |
| `EC16-ERR-03` | `EIS16-ERR-03` | Provider outage | PD | `BUILD — DEPENDENCY GATED` | WS-G | INT, CONC | Section 14.4 row items | `15-§12-1`, `15-§12-6`, `15-§20-2`, `15-§20-5`, `15-§21-1`, `15-§25-2` (6) |
| `EC16-ERR-04` | `EIS16-ERR-04` | Observability | TR | `BUILD — DEPENDENCY GATED` | WS-G | INT, CONC | Section 14.4 row items | 28 rows (Section 12) |

### 7.23 Readers, Intelligence and Order Linkage (EIS Section 28)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-READ-01` | `EIS16-READ-01` | Readers consume the balance | PR | `BUILD — DEPENDENCY GATED` | WS-F | INT, RT | RS-11 | `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6` (17) |
| `EC16-ORD-01` | `EIS16-ORD-01` | Order and COD link | PR/TR | `BUILD — DEPENDENCY GATED` | WS-F | INT | Section 14.4 row items | `14-§13-2`, `14-§13-3`, `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4`, `15-§15-5`, `15-§15-6`, `15-§15-7`, `BP-§11-1` (10) |
| `EC16-LANG-01` | `EIS16-LANG-01` | Native surfaces and channel parity | PR | `BUILD — DEPENDENCY GATED` | WS-C | RT | Section 14.4 row items | `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§15-1a`, `14-§15-2`, `15-§18-1a`, `15-§18-2`, `9-§12-11`, `BP-§8-1` (12) |

### 7.24 Migration Design (Design Only; Not Executed) (EIS Section 29)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-MIG-01` | `EIS16-MIG-01` | Classes M16-0 to M16-5 | TR | `MIGRATION-DESIGN` | Cross-cutting | REH, DOC | Section 14.4 row items | 107 rows (Section 12) |
| `EC16-MIG-02` | `EIS16-MIG-02` | M16-1 characterization | TR | `MIGRATION-DESIGN` | Cross-cutting | REH, DOC | Section 14.4 row items | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-6`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `14-§13-1`, `14-§18-1`, `BP-§10.3-C2`, `BP-§10.5-W1`, `BP-§10.5-W3` (23) |
| `EC16-MIG-03` | `EIS16-MIG-03` | Rehearsal assertions | TR | `MIGRATION-DESIGN` | Cross-cutting | REH, DOC | Section 14.4 row items | 99 rows (Section 12) |
| `EC16-MIG-04` | `EIS16-MIG-04` | M16-4 oracle | TR | `MIGRATION-DESIGN` | Cross-cutting | REH, DOC | Section 14.4 row items | `14-§22-1`, `3-§9-12` (2) |
| `EC16-MIG-05` | `EIS16-MIG-05` | No historical reinterpretation (OQ-05; MQ-02) | PR/FC | `MIGRATION-DESIGN` | Cross-cutting | REH, DOC | NP-24 | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§22-1`, `3-§9-12`, `BP-§10.5-W1`, `BP-§10.5-W2` (10) |
| `EC16-MIG-06` | `EIS16-MIG-06` | Baseline reconciliation (P-1) | AF | `MIGRATION-DESIGN` | Cross-cutting | REH, DOC | Section 14.4 row items | `14-§5-1`, `14-§5-2`, `BP-§6.2-1`, `BP-§10.5-W1` (4) |

### 7.25 Verification Contract (EIS Section 30)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-VER-01` | `EIS16-VER-01` | Tiers | TR | `VERIFICATION` | Cross-cutting | REPO, DOC | Section 14.4 row items | 174 rows (Section 12) |
| `EC16-VER-02` | `EIS16-VER-02` | Negative paths | PR | `VERIFICATION` | Cross-cutting | REPO, DOC | NP-20 | 59 rows (Section 12) |
| `EC16-VER-03` | `EIS16-VER-03` | Proven overlap | TR | `VERIFICATION` | Cross-cutting | CONC | Section 14.4 row items | 34 rows (Section 12) |
| `EC16-VER-04` | `EIS16-VER-04` | Founder Scenario A | FC | `VERIFICATION` | Cross-cutting | FRT, RT | RS-01 | `BP-§10.5-A1`, `BP-§10.5-A2`, `BP-§10.5-A3`, `BP-§13-9` (4) |
| `EC16-VER-05` | `EIS16-VER-05` | Founder Scenario B (OQ-04 Option C) | FC/PD | `VERIFICATION` | Cross-cutting | FRT, RT, PROV | RS-02, RS-03 | `BP-§10.5-B1`, `BP-§10.5-B2`, `BP-§10.5-B3`, `BP-§13-9` (4) |
| `EC16-VER-06` | `EIS16-VER-06` | Completion honesty | PR | `VERIFICATION` | Cross-cutting | REPO, DOC | Section 14.4 row items | 46 rows (Section 12) |
| `EC16-VER-07` | `EIS16-VER-07` | CI status | AF | `VERIFICATION` | Cross-cutting | REPO | Section 14.4 row items | `BP-§5.3-1`, `BP-§9-2`, `BP-§9-AL`, `BP-§11-5`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1` (7) |

### 7.26 Performance and Reliability (EIS Section 31)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-OPS-01` | `EIS16-OPS-01` | Indexed reads | TR | `BUILD — DEPENDENCY GATED` | WS-G | PERF | Section 14.4 row items | `14-§5-7`, `14-§7-4`, `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `3-§9-12`, `BP-§10.5-W6`, `BP-§10.5-W7` (15) |
| `EC16-OPS-02` | `EIS16-OPS-02` | Cache safety | TR | `BUILD — DEPENDENCY GATED` | WS-G | PERF | Section 14.4 row items | `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6` (17) |

### 7.27 Must-Not Checks (EIS Section 32)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-NEG-01` | `EIS16-NEG-01` | Must-not checks | PR | `GOVERNANCE` | Cross-cutting | REPO, DB, INT | NP-20 | 76 rows (Section 12) |

### 7.28 Holds and Dependency Gates (EIS Section 33)

| Obligation | Realizes | Title | Basis | Type | Workstream | Evidence | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC16-HOLD-01` | `EIS16-HOLD-01` | `D12` hold | AF | `GATE` | Gate | PROV, DOC | Section 14.4 row items | 99 rows (Section 12) |
| `EC16-HOLD-02` | `EIS16-HOLD-02` | `D13` hold | AF | `GATE` | Gate | PROV, DOC | Section 14.4 row items | 41 rows (Section 12) |
| `EC16-HOLD-03` | `EIS16-HOLD-03` | `D14` hold | AF | `GATE` | Gate | PROV, DOC | Section 14.4 row items | 164 rows (Section 12) |
| `EC16-HOLD-04` | `EIS16-HOLD-04` | `D15` hold | AF | `GATE` | Gate | PROV, DOC | Section 14.4 row items | 46 rows (Section 12) |
| `EC16-HOLD-05` | `EIS16-HOLD-05` | `DPAY` hold | AF | `GATE` | Gate | PROV, DOC | Section 14.4 row items | 41 rows (Section 12) |
| `EC16-HOLD-06` | `EIS16-HOLD-06` | `DNTF` hold | AF | `GATE` | Gate | PROV, DOC | Section 14.4 row items | `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§14-4`, `14-§22-9` (7) |
| `EC16-HOLD-07` | `EIS16-HOLD-07` | `D18` hold | AF | `GATE` | Gate | PROV, DOC | Section 14.4 row items | `14-§6-5`, `14-§13-1`, `14-§13-2`, `14-§13-3`, `14-§25-1`, `15-§5-6`, `15-§7-7`, `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4`, `15-§15-5`, `15-§15-6`, `15-§15-7`, `15-§17-4`, `15-§23-7`, `15-§25-7`, `3-§23`, `BP-§11-1` (19) |
| `EC16-HOLD-08` | `EIS16-HOLD-08` | `DAI` hold | AF | `GATE` | Gate | PROV, DOC | Section 14.4 row items | `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§19-5`, `14-§22-8`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `15-§25-10` (13) |
| `EC16-HOLD-09` | `EIS16-HOLD-09` | Upstream findings | UQ | `GATE` | Gate | PROV, DOC | Section 14.4 row items | 31 rows (Section 12) |
| `EC16-GOV-01` | `EIS16-GOV-01` | Mission accounting | PR | `GOVERNANCE` | Cross-cutting | REPO, DOC | Section 14.4 row items | `BP-§5.3-1`, `BP-§9-2`, `BP-§9-AL`, `BP-§11-5`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1` (7) |
| `EC16-GOV-02` | `EIS16-GOV-02` | Artifact confidentiality (MQ-06) | PR | `GOVERNANCE` | Cross-cutting | REPO, DOC | Section 14.4 row items | `14-§19-1`, `15-§22-5`, `BP-§5.3-1`, `BP-§9-2`, `BP-§9-AL`, `BP-§11-5`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1` (9) |

## 8. Founder Decisions and Rulings Realized

| Decision | Obligations |
|---|---|
| `16:FPDR-1` identity, no automatic match | EC16-ID-01, EC16-ID-02 |
| `16:FPDR-2` historical attribution | EC16-ID-04, EC16-MIG-05 |
| `16:FPDR-3` verified amount | EC16-BAL-02, EC16-EVD-03 |
| `16:FPDR-4`, OQ-03 Employee access | EC16-AUTHZ-03, EC16-THR-04 |
| `16:FPDR-5` optional due date | EC16-DUE-01 to -04 |
| `16:FPDR-6` evidence channels | EC16-SRC-01, EC16-EVD-04 |
| `16:FPDR-7` delegation; MQ-07 | EC16-AUTHZ-01, EC16-AUTHZ-02, EC16-REP-03 |
| `16:FPDR-8` communication | EC16-FUP-02 |
| `16:FPDR-9` deferred channels | EC16-SRC-07 |
| `16:FPDR-10` customer advance | EC16-CAD-01 to -08, EC16-BAL-03, EC16-BAL-04 |
| MQ-01 | EC16-BAL-02, EC16-LNK-01, EC16-MAT-02 |
| MQ-03 | EC16-EVD-06 |
| OQ-04 Option C | EC16-VER-05, EC16-EVD-04 |

## 9. Specialist Findings

All 63 Stage 7 specialist findings reach obligations through EIS Section 35.5; the mapping is unchanged.

## 10. Integrity Checks

| Check | Result |
|---|---|
| `IN SCOPE` rows with at least one obligation | 349 / 349 |
| Obligations | 135 (1:1 with `EIS16-*`) |
| Row-to-obligation links | 2809 (equal to EIS Section 35.2) |
| Obligations without rows | 0 |
| Behaviour-adding orphan obligations | 0 |
| Locked source changes | 0 |

## 11. Workstream Accountability

| Workstream | Title | Phase | Obligations |
|---|---|---|---|
| WS-A | Customer Identity, Credit Facts and Due Dates | P1 | 12 |
| WS-B | Balances, Repayment, Allocation and Customer Advance | P2 | 18 |
| WS-C | Thresholds, Follow-up and Communication Preparation | P3 | 8 |
| WS-D | Payment Evidence, Upload Intake, Matching, Linking and Review | P3 | 20 |
| WS-E | Provider Adapter, Binding, Intake, Reversal Ordering and Settlement (provider-gated) | P5 | 10 |
| WS-F | Readers, Intelligence, Order Linkage and AI Boundaries | P4 | 4 |
| WS-G | Cross-Cutting Assurance: Authorization, Security, Isolation, Concurrency, Audit, Privacy, Recovery | P1 | 35 |
| Cross-cutting | Governance, migration design, verification | All | 19 |
| Gate | Dependency holds (Mission Control) | — | 9 |

## 12. FCTM Row to Obligation Map (349 rows)

One line per `IN SCOPE` row, in EIS Section 35.2 order.

| # | FCTM row | Blueprint | Kind | Stage 7 status | Obligations (`EC16-`) |
|---|---|---|---|---|---|
| 1 | `14-§1-1` | §8.1, §15 | EXP | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02, VER-06 |
| 2 | `14-§1-2` | §8.1, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02 |
| 3 | `14-§2-8` | §8.1, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02 |
| 4 | `14-§3-1` | §8.1, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-04 |
| 5 | `14-§3-2` | §8.1, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02 |
| 6 | `14-§3-3` | §8.1, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02 |
| 7 | `14-§3-4` | §8.1, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02 |
| 8 | `14-§3-5` | §8.1, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-04, CAD-04, AUD-01 |
| 9 | `14-§3-6` | §8.1, §10.2, §12 | PRIN | DEPENDENCY-HELD | ARC-01, AI-01, NEG-01, PRIV-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-01 |
| 10 | `14-§3-7` | §8.1, §10.1, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AI-01, NEG-01, PRIV-02, AUTHZ-03, VER-02 |
| 11 | `14-§4-1` | §8.1, §10.1, §12 | OBL | DEPENDENCY-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, AUD-01 |
| 12 | `14-§4-2` | §8.1, §10.1, §12 | OBL | DEPENDENCY-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 13 | `14-§4-3` | §8.1, §10.1, §12 | OBL | DEPENDENCY-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 14 | `14-§4-4` | §8.1, §10.1, §12 | OBL | DEPENDENCY-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, IDM-02 |
| 15 | `14-§4-5` | §8.1, §10.1, §12 | OBL | DEPENDENCY-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 16 | `14-§4-6` | §8.1, §10.1, §12 | OBL | DEPENDENCY-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-02, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 17 | `14-§5-1` | §8.2, §10.1, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, ID-02, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06 |
| 18 | `14-§5-2` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06 |
| 19 | `14-§5-3` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 20 | `14-§5-4` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 21 | `14-§5-5` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 22 | `14-§5-6` | §8.2, §10.1, §12 | OBL | DEPENDENCY-HELD | DUE-01, DUE-02, DUE-03, DUE-04, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 23 | `14-§5-7` | §8.2, §12 | OBL | DEPENDENCY-HELD | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-01, CAD-03 |
| 24 | `14-§5-8` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 25 | `14-§5-9` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 26 | `14-§5-10` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 27 | `14-§5-11` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, HOLD-04, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 28 | `14-§5-12` | §8.2, §12 | OBL | PROVIDER-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 29 | `14-§5-13` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-01, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, AUD-03 |
| 30 | `14-§6-1` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| 31 | `14-§6-2` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| 32 | `14-§6-3` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-03, ID-02, AI-01, LANG-01, HOLD-01, HOLD-03 |
| 33 | `14-§6-4` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-03, ID-02, AI-01, LANG-01, HOLD-03 |
| 34 | `14-§6-5` | §8.2, §12 | OBL | LATER-MISSION-HELD | LDG-03, ID-02, AI-01, LANG-01, HOLD-03, HOLD-07 |
| 35 | `14-§6-6` | §8.2, §12 | OBL | DEPENDENCY-HELD | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| 36 | `14-§7-1` | §8.2, §10.2, §12 | RULE | DEPENDENCY-HELD | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| 37 | `14-§7-2` | §8.2, §12 | OBL | DEPENDENCY-HELD | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, AUD-01 |
| 38 | `14-§7-3` | §8.2, §12 | OBL | DEPENDENCY-HELD | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, CAD-03 |
| 39 | `14-§7-4` | §8.2, §12 | OBL | DEPENDENCY-HELD | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-01, CAD-03, CAD-04 |
| 40 | `14-§7-5` | §8.2, §10.3, §12 | NEG | DEPENDENCY-HELD | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, CAD-05 |
| 41 | `14-§7-6` | §8.2, §12 | OBL | DEPENDENCY-HELD | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, AUD-01 |
| 42 | `14-§7-7` | §8.2, §12 | OBL | DEPENDENCY-HELD | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| 43 | `14-§8-1` | §8.3, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| 44 | `14-§8-2` | §8.3, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | THR-01, THR-02, THR-03, THR-04, AUD-02, MIG-01, MIG-03, SEC-01 |
| 45 | `14-§8-3` | §8.3, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| 46 | `14-§8-4` | §8.3, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-04, MIG-01, MIG-03, SEC-01 |
| 47 | `14-§8-5` | §8.3, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-04, MIG-01, MIG-03, SEC-01 |
| 48 | `14-§8-6` | §8.3, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| 49 | `14-§8-7` | §8.3, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | THR-01, THR-02, THR-03, THR-04, AUD-02, NEG-01, VER-02, MIG-01, MIG-03, SEC-01 |
| 50 | `14-§9-1` | §8.3, §10.1, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | THR-01, THR-02, THR-03, THR-04, AUD-02, AUTHZ-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01 |
| 51 | `14-§9-2` | §8.3, §10.1, §12, §15 | SCN | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, VER-06, MIG-01, MIG-03, SEC-01 |
| 52 | `14-§9-3` | §8.3, §10.1, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 53 | `14-§9-4` | §8.3, §10.1, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 54 | `14-§9-5` | §8.3, §10.1, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 55 | `14-§9-6` | §8.3, §10.1, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 56 | `14-§9-7` | §8.3, §10.1, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 57 | `14-§9-8` | §8.3, §10.1, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 58 | `14-§9-9` | §8.3, §10.1, §12 | OBL | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 59 | `14-§10-1` | §8.3, §10.1, §12 | OBL | DEPENDENCY-HELD | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04 |
| 60 | `14-§10-2` | §8.3, §10.1, §12 | OBL | CHANNEL-HELD | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06 |
| 61 | `14-§10-3` | §8.3, §10.1, §10.3, §12 | NEG | CHANNEL-HELD | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| 62 | `14-§10-4` | §8.3, §10.1, §10.3, §12 | NEG | CHANNEL-HELD | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| 63 | `14-§10-5` | §8.3, §10.1, §10.3, §12 | NEG | CHANNEL-HELD | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| 64 | `14-§10-6` | §8.3, §10.1, §10.3, §12 | NEG | CHANNEL-HELD | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02, PRIV-01 |
| 65 | `14-§11-1` | §8.6, §12, §15 | SCN | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| 66 | `14-§11-2` | §8.6, §12, §15 | SCN | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| 67 | `14-§11-3` | §8.6, §12, §15 | SCN | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| 68 | `14-§11-4` | §8.6, §12, §15 | SCN | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| 69 | `14-§11-5` | §8.6, §10.3, §12 | NEG | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, NEG-01, VER-02 |
| 70 | `14-§12-1` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 71 | `14-§12-2` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 72 | `14-§12-3` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 73 | `14-§12-4` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 74 | `14-§12-5` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 75 | `14-§12-6` | §8.6, §10.3, §12 | NEG | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-01, NEG-01, VER-02 |
| 76 | `14-§13-1` | §8.1, §10.1, §12 | OBL | LATER-MISSION-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-07, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 77 | `14-§13-2` | §8.1, §10.3, §12 | NEG | LATER-MISSION-HELD | ORD-01, HOLD-07, HOLD-03, NEG-01, VER-02, IDM-02 |
| 78 | `14-§13-3` | §8.1, §12 | OBL | LATER-MISSION-HELD | ORD-01, HOLD-07 |
| 79 | `14-§14-1` | §8.7, §12 | OBL | DEPENDENCY-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, CAD-04, CAD-05, REP-03, MIG-01 |
| 80 | `14-§14-2` | §8.7, §10.1, §12 | OBL | DEPENDENCY-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| 81 | `14-§14-3` | §8.7, §12 | OBL | DEPENDENCY-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, THR-04 |
| 82 | `14-§14-4` | §8.7, §10.1, §12 | OBL | CHANNEL-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-04, HOLD-06, FUP-02, VER-01 |
| 83 | `14-§15-1a` | §8.7, §12 | OBL | DEPENDENCY-HELD | LANG-01, HOLD-02 |
| 84 | `14-§15-2` | §8.7, §12 | OBL | DEPENDENCY-HELD | LANG-01, HOLD-02 |
| 85 | `14-§16-1` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 86 | `14-§16-2` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 87 | `14-§16-3` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 88 | `14-§16-4` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 89 | `14-§16-5` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 90 | `14-§16-6` | §8.7, §10.3, §12 | NEG | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, NEG-01, VER-02, VER-03, CNC-02, VER-01 |
| 91 | `14-§17-1` | §8.8, §12 | OBL | DEPENDENCY-HELD | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, PRIV-05, VER-01, PRIV-03 |
| 92 | `14-§17-2` | §8.8, §10.3, §12 | NEG | DEPENDENCY-HELD | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01 |
| 93 | `14-§17-3` | §8.8, §10.3, §12 | NEG | DEPENDENCY-HELD | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, VER-01 |
| 94 | `14-§17-4` | §8.8, §10.3, §12 | NEG | DEPENDENCY-HELD | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01 |
| 95 | `14-§17-5` | §8.8, §10.3, §12 | NEG | DEPENDENCY-HELD | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01, MIG-01 |
| 96 | `14-§18-1` | §8.8, §10.1, §12 | OBL | DEPENDENCY-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, IDM-02 |
| 97 | `14-§18-2` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03, VER-01, IDM-02 |
| 98 | `14-§18-3` | §8.8, §12 | OBL | DEPENDENCY-HELD | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| 99 | `14-§18-4` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| 100 | `14-§18-5` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| 101 | `14-§18-6` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03, AUTHZ-01 |
| 102 | `14-§18-7` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-04 |
| 103 | `14-§18-8` | §8.8, §12 | OBL | PROVIDER-HELD | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08 |
| 104 | `14-§18-9` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| 105 | `14-§19-1` | §8.8, §12 | OBL | DEPENDENCY-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01, GOV-02, PRIV-03 |
| 106 | `14-§19-2` | §8.8, §12 | OBL | DEPENDENCY-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01, AUTHZ-01 |
| 107 | `14-§19-3` | §8.8, §10.3, §12 | NEG | DEPENDENCY-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, NEG-01, VER-02, VER-01, PRIV-03 |
| 108 | `14-§19-4` | §8.8, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, NEG-01, VER-02, VER-01, PRIV-02 |
| 109 | `14-§19-5` | §8.8, §10.1, §10.3, §12 | NEG | DEPENDENCY-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-08, AUTHZ-03, NEG-01, VER-02, VER-01, AI-01, AUD-04 |
| 110 | `14-§20-1` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-03 |
| 111 | `14-§20-2` | §8.9, §10.1, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, ID-02 |
| 112 | `14-§20-3` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, AUTHZ-01 |
| 113 | `14-§20-4` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-02 |
| 114 | `14-§20-5` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-04 |
| 115 | `14-§20-6` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-04 |
| 116 | `14-§20-7` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-04 |
| 117 | `14-§20-8` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-04 |
| 118 | `14-§20-9` | §8.9, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-02 |
| 119 | `14-§20-10` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, IDM-02, AUD-01 |
| 120 | `14-§21-1` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 121 | `14-§21-2` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 122 | `14-§21-3` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 123 | `14-§21-4` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 124 | `14-§21-5` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 125 | `14-§21-6` | §8.9, §10.3, §12 | NEG | DEPENDENCY-HELD | NEG-01, VER-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, IDM-02 |
| 126 | `14-§22-1` | §8.10, §10.1, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, ID-02, ID-04, MIG-05, VER-01, MIG-04, AUD-01 |
| 127 | `14-§22-2` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, IDM-02, AUD-01 |
| 128 | `14-§22-3` | §8.10, §10.1, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-02, ID-02, VER-01 |
| 129 | `14-§22-4` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01 |
| 130 | `14-§22-5` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01 |
| 131 | `14-§22-6` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01, AUD-01 |
| 132 | `14-§22-7` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01, THR-04 |
| 133 | `14-§22-8` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-04, HOLD-08, VER-01 |
| 134 | `14-§22-9` | §8.10, §10.1, §12, §15 | SCN | CHANNEL-HELD | VER-06, HOLD-04, HOLD-06, FUP-02, VER-01, PRIV-04 |
| 135 | `14-§22-10` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01 |
| 136 | `14-§22-11` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01, MIG-01, AUD-01 |
| 137 | `14-§23-1` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 138 | `14-§23-2` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02, MIG-01 |
| 139 | `14-§23-3` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 140 | `14-§23-4` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 141 | `14-§25-1` | §8.10, §12, §15 | GATE | LATER-MISSION-HELD | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, VER-01 |
| 142 | `15-§1-1` | §8.4, §15 | EXP | DESIGN ACCEPTED — EVIDENCE HOLD | EVD-02, NEG-01, VER-06 |
| 143 | `15-§1-2` | §8.4, §10.1, §10.2, §11.6, §12 | RULE | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| 144 | `15-§2-8` | §8.4, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | EVD-02, NEG-01 |
| 145 | `15-§3-1` | §8.4, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | EVD-02, NEG-01 |
| 146 | `15-§3-2` | §8.4, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | EVD-02, NEG-01 |
| 147 | `15-§3-3` | §8.4, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | EVD-02, NEG-01, IDM-02 |
| 148 | `15-§3-4` | §8.4, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | EVD-02, NEG-01 |
| 149 | `15-§3-5` | §8.4, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | EVD-02, NEG-01 |
| 150 | `15-§3-6` | §8.4, §10.2 | PRIN | DESIGN ACCEPTED — EVIDENCE HOLD | EVD-02, NEG-01, AUD-01 |
| 151 | `15-§3-7` | §8.4, §10.1, §10.2, §12 | PRIN | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 152 | `15-§4-1` | §8.4, §10.1, §12 | OBL | DEPENDENCY-HELD | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 153 | `15-§4-2` | §8.4, §10.1, §12 | OBL | DEPENDENCY-HELD | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 154 | `15-§4-3` | §8.4, §10.1, §12 | OBL | DEPENDENCY-HELD | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 155 | `15-§4-4` | §8.4, §10.1, §12 | OBL | DEPENDENCY-HELD | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 156 | `15-§4-5` | §8.4, §10.1, §12 | OBL | DEPENDENCY-HELD | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 157 | `15-§4-6` | §8.4, §10.1, §12 | OBL | DEPENDENCY-HELD | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 158 | `15-§4-7` | §8.4, §10.1, §12 | OBL | PROVIDER-HELD | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, BAL-02, EVD-03, SRC-01, EVD-04, SRC-08, MIG-01, MIG-03, SEC-01, VER-01 |
| 159 | `15-§4-8` | §8.4, §10.1, §10.2, §12 | RULE | DEPENDENCY-HELD | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 160 | `15-§5-1` | §8.4, §10.1, §11.6, §12 | OBL | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| 161 | `15-§5-2` | §8.4, §10.1, §11.6, §12 | OBL | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| 162 | `15-§5-3` | §8.4, §10.1, §12 | OBL | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 163 | `15-§5-4` | §8.4, §10.1, §12 | OBL | FOLLOW-UP | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01, STL-01 |
| 164 | `15-§5-5` | §8.4, §10.1, §12 | OBL | DEPENDENCY-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-03, EVD-04, PRIV-05, MIG-01, MIG-03, SEC-01, VER-01, EVD-06 |
| 165 | `15-§5-6` | §8.4, §10.1, §12 | OBL | LATER-MISSION-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-07, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 166 | `15-§5-7` | §8.4, §10.1, §12 | OBL | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 167 | `15-§5-8` | §8.4, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 168 | `15-§6-1` | §8.4, §12 | OBL | DEPENDENCY-HELD | EVD-01, EVD-05, PRIV-01, HOLD-01, MIG-01, MIG-03, SEC-01 |
| 169 | `15-§6-2` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 170 | `15-§6-3` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 171 | `15-§6-4` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 172 | `15-§6-5` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 173 | `15-§6-6` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 174 | `15-§6-7` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 175 | `15-§6-8` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, PRIV-05, SRC-08, MIG-01, MIG-03, SEC-01, PRIV-06, EVD-06, AUTHZ-08, AUD-01 |
| 176 | `15-§6-9` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 177 | `15-§6-10` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 178 | `15-§6-11` | §8.4, §12 | OBL | PROVIDER-HELD | EVD-01, EVD-05, PRIV-01, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, IDM-02 |
| 179 | `15-§6-12` | §8.4, §12 | OBL | DEPENDENCY-HELD | EVD-01, EVD-05, PRIV-01, HOLD-03, PRIV-05, MIG-01, MIG-03, SEC-01, EVD-06 |
| 180 | `15-§7-1` | §8.5, §12 | OBL | DEPENDENCY-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 181 | `15-§7-2` | §8.5, §12 | OBL | PROVIDER-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-05, SRC-08 |
| 182 | `15-§7-3` | §8.5, §12 | OBL | DEPENDENCY-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 183 | `15-§7-4` | §8.5, §12 | OBL | DEPENDENCY-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 184 | `15-§7-5` | §8.5, §10.1, §12 | OBL | DEPENDENCY-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-01, ID-02 |
| 185 | `15-§7-6` | §8.5, §12 | OBL | DEPENDENCY-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 186 | `15-§7-7` | §8.5, §12 | OBL | LATER-MISSION-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, HOLD-07 |
| 187 | `15-§7-8` | §8.5, §12 | OBL | PROVIDER-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-05, SRC-08, STL-01 |
| 188 | `15-§7-9` | §8.5, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | MAT-01, MAT-02, MAT-03, OPS-01, NEG-01, VER-02, MIG-01 |
| 189 | `15-§7-10` | §8.5, §12 | OBL | DEPENDENCY-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, IDM-02 |
| 190 | `15-§8-1` | §8.5, §12 | OBL | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 191 | `15-§8-2` | §8.5, §12 | OBL | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 192 | `15-§8-3` | §8.5, §12 | OBL | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 193 | `15-§8-4` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01, CAD-05, IDM-02 |
| 194 | `15-§8-5` | §8.5, §12 | OBL | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01, AUD-01 |
| 195 | `15-§8-6` | §8.5, §12 | OBL | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-04, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 196 | `15-§8-7` | §8.5, §10.2, §12 | RULE | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 197 | `15-§9-1` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-02, NEG-01, VER-02, VER-01 |
| 198 | `15-§9-2` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| 199 | `15-§9-3` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| 200 | `15-§9-4` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| 201 | `15-§9-5` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01, CNC-03, AUTHZ-01 |
| 202 | `15-§9-6` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-03, VER-01 |
| 203 | `15-§10-1` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-03, PRIV-05, VER-01, EVD-06 |
| 204 | `15-§10-2` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-03, VER-01, STL-01 |
| 205 | `15-§10-3` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-03, NEG-01, VER-02, VER-01 |
| 206 | `15-§10-4` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, HOLD-03, VER-01, AUD-01 |
| 207 | `15-§10-5` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, VER-01, MIG-01, AUD-01 |
| 208 | `15-§11-1` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-03, VER-01 |
| 209 | `15-§11-2` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-03, PRIV-05, VER-01, EVD-06 |
| 210 | `15-§11-3` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, HOLD-04, VER-01 |
| 211 | `15-§11-4` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01 |
| 212 | `15-§11-5` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, VER-01, STL-01 |
| 213 | `15-§12-1` | §8.5, §12 | OBL | PROVIDER-HELD | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-03 |
| 214 | `15-§12-2` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 215 | `15-§12-3` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 216 | `15-§12-4` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 217 | `15-§12-5` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-04, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 218 | `15-§12-6` | §8.5, §10.2, §12 | RULE | PROVIDER-HELD | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-03 |
| 219 | `15-§13-1` | §8.5, §10.1, §12 | OBL | PROVIDER-HELD | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, SRC-01, EVD-04, PRIV-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-01 |
| 220 | `15-§13-2` | §8.5, §10.3, §12 | NEG | DEPENDENCY-HELD | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, NEG-01, VER-02, PRIV-05, MIG-01, MIG-03, SEC-01, VER-01, PRIV-06 |
| 221 | `15-§13-3` | §8.5, §10.2, §12 | RULE | DEPENDENCY-HELD | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, MIG-01, MIG-03, SEC-01, VER-01, AUD-01 |
| 222 | `15-§14-1` | §8.6, §12 | OBL | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 223 | `15-§14-2` | §8.6, §10.3, §12 | NEG | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 224 | `15-§14-3` | §8.6, §10.1, §10.3, §12 | NEG | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, ID-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 225 | `15-§14-4` | §8.6, §10.3, §12 | NEG | DEPENDENCY-HELD | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-02, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 226 | `15-§15-1` | §8.6, §10.2, §12 | RULE | LATER-MISSION-HELD | ORD-01, HOLD-07 |
| 227 | `15-§15-2` | §8.6, §12 | OBL | LATER-MISSION-HELD | ORD-01, HOLD-07, HOLD-03 |
| 228 | `15-§15-3` | §8.6, §12 | OBL | LATER-MISSION-HELD | ORD-01, HOLD-07, HOLD-03 |
| 229 | `15-§15-4` | §8.6, §12 | OBL | LATER-MISSION-HELD | ORD-01, HOLD-07, HOLD-03 |
| 230 | `15-§15-5` | §8.6, §12 | OBL | LATER-MISSION-HELD | ORD-01, HOLD-07, HOLD-03 |
| 231 | `15-§15-6` | §8.6, §12 | OBL | LATER-MISSION-HELD | ORD-01, HOLD-07, HOLD-03 |
| 232 | `15-§15-7` | §8.6, §10.3, §12 | NEG | LATER-MISSION-HELD | ORD-01, HOLD-07, HOLD-03, NEG-01, VER-02, IDM-02 |
| 233 | `15-§16-1` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 234 | `15-§16-2` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 235 | `15-§16-3` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 236 | `15-§16-4` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 237 | `15-§16-5` | §8.6, §12 | OBL | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 238 | `15-§16-6` | §8.6, §10.3, §12 | NEG | DEPENDENCY-HELD | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, NEG-01, VER-02 |
| 239 | `15-§17-1` | §8.7, §12 | OBL | DEPENDENCY-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| 240 | `15-§17-2` | §8.7, §10.1, §12 | OBL | DEPENDENCY-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| 241 | `15-§17-3` | §8.7, §12 | OBL | DEPENDENCY-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01 |
| 242 | `15-§17-4` | §8.7, §10.3, §12 | NEG | LATER-MISSION-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-07, NEG-01, VER-02, VER-01, AUTHZ-07 |
| 243 | `15-§18-1a` | §8.7, §12 | OBL | DEPENDENCY-HELD | LANG-01, HOLD-02 |
| 244 | `15-§18-2` | §8.7, §10.3, §12 | NEG | DEPENDENCY-HELD | LANG-01, HOLD-02, NEG-01, VER-02, PRIV-01 |
| 245 | `15-§19-1` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 246 | `15-§19-2` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01, AUD-01 |
| 247 | `15-§19-3` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 248 | `15-§19-4` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 249 | `15-§19-5` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 250 | `15-§20-1` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 251 | `15-§20-2` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03, PRIV-05, PRIV-06, ERR-03 |
| 252 | `15-§20-3` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 253 | `15-§20-4` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 254 | `15-§20-5` | §8.8, §10.3, §12 | NEG | PROVIDER-HELD | ERR-01, ERR-02, ERR-04, HOLD-05, NEG-01, VER-02, SRC-08, ERR-03 |
| 255 | `15-§21-1` | §8.8, §12 | OBL | PROVIDER-HELD | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08, ERR-03 |
| 256 | `15-§21-2` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 257 | `15-§21-3` | §8.8, §12 | OBL | PROVIDER-HELD | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08 |
| 258 | `15-§21-4` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03, IDM-02 |
| 259 | `15-§21-5` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 260 | `15-§21-6` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 261 | `15-§21-7` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 262 | `15-§21-8` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-03, VER-03 |
| 263 | `15-§21-9` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-01, VER-03, AUTHZ-01 |
| 264 | `15-§21-10` | §8.8, §10.1, §12 | OBL | PROVIDER-HELD | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, SRC-01, EVD-04, SRC-08, MIG-01, MIG-03, SEC-01, VER-01 |
| 265 | `15-§21-11` | §8.8, §12 | OBL | DEPENDENCY-HELD | ERR-01, ERR-02, ERR-04, HOLD-04 |
| 266 | `15-§22-1` | §8.8, §12 | OBL | PROVIDER-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-05, SRC-08, VER-01 |
| 267 | `15-§22-2` | §8.8, §12 | OBL | DEPENDENCY-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-03, PRIV-05, VER-01, AUTHZ-08 |
| 268 | `15-§22-3` | §8.8, §12 | OBL | DEPENDENCY-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01 |
| 269 | `15-§22-4` | §8.8, §12 | OBL | DEPENDENCY-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01 |
| 270 | `15-§22-5` | §8.8, §12 | OBL | DEPENDENCY-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, PRIV-05, VER-01, GOV-02, PRIV-03, AUD-01 |
| 271 | `15-§22-6` | §8.8, §10.3, §12 | NEG | PROVIDER-HELD | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-05, NEG-01, VER-02, SRC-08, VER-01 |
| 272 | `15-§23-1` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-03 |
| 273 | `15-§23-2` | §8.9, §10.1, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, ID-02 |
| 274 | `15-§23-3` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, AUTHZ-01 |
| 275 | `15-§23-4` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, IDM-02, AUD-01 |
| 276 | `15-§23-5` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-04 |
| 277 | `15-§23-6` | §8.9, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-02 |
| 278 | `15-§23-7` | §8.9, §10.2, §12 | RULE | LATER-MISSION-HELD | ARC-01, ARC-02, HOLD-07 |
| 279 | `15-§23-8` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-04 |
| 280 | `15-§24-1` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 281 | `15-§24-2` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02, IDM-02 |
| 282 | `15-§24-3` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 283 | `15-§24-4` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02, MIG-01 |
| 284 | `15-§24-5` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02, ERR-01 |
| 285 | `15-§24-6` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 286 | `15-§25-1` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-03, VER-01 |
| 287 | `15-§25-2` | §8.10, §12, §15 | SCN | PROVIDER-HELD | VER-06, HOLD-03, HOLD-05, SRC-08, VER-01, ERR-03, IDM-02 |
| 288 | `15-§25-3` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-02, VER-01 |
| 289 | `15-§25-4` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01 |
| 290 | `15-§25-5` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01 |
| 291 | `15-§25-6` | §8.10, §10.1, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-03, ID-02, VER-01, AUD-01 |
| 292 | `15-§25-7` | §8.10, §12, §15 | SCN | LATER-MISSION-HELD | VER-06, HOLD-07, HOLD-03, VER-01, IDM-02 |
| 293 | `15-§25-8` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01, AUTHZ-01 |
| 294 | `15-§25-9` | §8.10, §12, §15 | SCN | PROVIDER-HELD | VER-06, HOLD-05, SRC-08, VER-01, ERR-01 |
| 295 | `15-§25-10` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-04, HOLD-08, VER-01 |
| 296 | `15-§25-11` | §8.10, §12, §15 | SCN | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01 |
| 297 | `15-§25-12` | §8.10, §10.1, §12, §15 | SCN | PROVIDER-HELD | VER-06, HOLD-03, HOLD-05, SRC-01, EVD-04, SRC-08, VER-01, MIG-01 |
| 298 | `15-§26-4` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 299 | `15-§26-5` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02 |
| 300 | `15-§26-6` | §8.9, §10.3 | NEG | DESIGN ACCEPTED — EVIDENCE HOLD | NEG-01, VER-02, ERR-01 |
| 301 | `15-§28-1` | §8.10, §12, §15 | GATE | PROVIDER-HELD | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, SRC-08, VER-01, SRC-07, IDM-02 |
| 302 | `3-§9-12` | §8.2, §10.1, §12, §15 | SCN | DEPENDENCY-HELD | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, ID-02, ID-04, MIG-05, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-06, MIG-01, MIG-03, SEC-01, MIG-04, VER-01, CAD-03, PRIV-02 |
| 303 | `3-§11-6` | §8.7, §12 | OBL | DEPENDENCY-HELD | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-03, VER-01 |
| 304 | `3-§15-8` | §8.2, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, HOLD-03, IDM-02 |
| 305 | `3-§15-9` | §8.4, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, HOLD-03, IDM-02 |
| 306 | `3-§23` | §8.10, §12, §15 | GATE | LATER-MISSION-HELD | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, VER-01 |
| 307 | `24-§21-4` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 308 | `24-§21-5` | §8.7, §12 | OBL | DEPENDENCY-HELD | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 309 | `9-§12-11` | §8.7, §12 | OBL | DEPENDENCY-HELD | LANG-01, HOLD-02 |
| 310 | `10-§17-5` | §8.5, §12 | OBL | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-02, VER-01 |
| 311 | `22-§17-3` | §8.4, §10.2, §12 | RULE | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, MIG-01, MIG-03, SEC-01, VER-01 |
| 312 | `BP-§5.3-1` | §8.9, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | GOV-01, VER-07, GOV-02 |
| 313 | `BP-§5.4-1` | §8.4, §10.1, §10.2, §12 | RULE | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01, ERR-01 |
| 314 | `BP-§6.1-1` | §8.9, §10.3, §12 | NEG | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, NEG-01, VER-02, AI-01, AUD-04 |
| 315 | `BP-§6.2-1` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-01, HOLD-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-06, CAD-04, AUD-01 |
| 316 | `BP-§6.3-1` | §8.9, §10.2, §12 | RULE | DEPENDENCY-HELD | ARC-01, ARC-02, HOLD-03 |
| 317 | `BP-§6.5-1` | §8.3, §10.2, §12 | RULE | DEPENDENCY-HELD | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04 |
| 318 | `BP-§8-1` | §8.7, §10.2, §12 | RULE | DEPENDENCY-HELD | LANG-01, HOLD-02 |
| 319 | `BP-§9-2` | §8.10, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | GOV-01, VER-07, GOV-02 |
| 320 | `BP-§9-AL` | §8.10, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | GOV-01, VER-07, GOV-02 |
| 321 | `BP-§10.3-C2` | §8.2, §10.2, §12 | RULE | DEPENDENCY-HELD | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 322 | `BP-§10.5-O` | §8.10, §12, §15 | EXP | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01 |
| 323 | `BP-§10.5-W1` | §8.2, §10.1, §12 | WORK | DEPENDENCY-HELD | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06, MIG-05 |
| 324 | `BP-§10.5-W2` | §8.2, §12 | WORK | DEPENDENCY-HELD | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, MIG-05 |
| 325 | `BP-§10.5-W3` | §8.3, §10.1, §12 | WORK | DEPENDENCY-HELD | DUE-01, DUE-02, DUE-03, DUE-04, HOLD-03, HOLD-04, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 326 | `BP-§10.5-W4` | §8.3, §10.1, §12 | WORK | DEPENDENCY-HELD | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 327 | `BP-§10.5-W5` | §8.4, §10.1, §12 | WORK | PROVIDER-HELD | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 328 | `BP-§10.5-W6` | §8.5, §12 | WORK | PROVIDER-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, HOLD-05, SRC-08 |
| 329 | `BP-§10.5-W7` | §8.5, §12 | WORK | DEPENDENCY-HELD | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 330 | `BP-§10.5-W8` | §8.5, §12 | WORK | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| 331 | `BP-§10.5-W9` | §8.5, §12 | WORK | DEPENDENCY-HELD | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-01 |
| 332 | `BP-§10.5-W10` | §8.5, §10.1, §12 | WORK | DEPENDENCY-HELD | REV-01, REV-02, REV-03, HOLD-03, HOLD-04, BAL-02, EVD-03, VER-01 |
| 333 | `BP-§10.5-W11` | §8.5, §12 | WORK | DEPENDENCY-HELD | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-01, HOLD-03, VER-01 |
| 334 | `BP-§10.5-E1` | §8.10, §12, §15 | EXP | DEPENDENCY-HELD | VER-06, HOLD-01, VER-01 |
| 335 | `BP-§10.5-E2` | §8.10, §10.1, §12, §15 | EXP | PROVIDER-HELD | VER-06, HOLD-03, HOLD-05, BAL-02, EVD-03, SRC-08, VER-01 |
| 336 | `BP-§10.5-E3` | §8.10, §12, §15 | EXP | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-02, VER-01 |
| 337 | `BP-§10.5-E4` | §8.10, §12, §15 | EXP | DEPENDENCY-HELD | VER-06, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, CAD-03, IDM-02 |
| 338 | `BP-§10.5-A1` | §8.10, §10.1, §12, §15 | FRV | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, DUE-01, VER-01, VER-04 |
| 339 | `BP-§10.5-A2` | §8.10, §10.1, §12, §15 | FRV | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, AUTHZ-03, VER-01, VER-04 |
| 340 | `BP-§10.5-A3` | §8.10, §12, §15 | FRV | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, VER-01, VER-04 |
| 341 | `BP-§10.5-B1` | §8.10, §12, §15 | FRV | FOLLOW-UP | VER-06, HOLD-03, HOLD-05, SRC-08, VER-01, VER-05 |
| 342 | `BP-§10.5-B2` | §8.10, §12, §15 | FRV | FOLLOW-UP | VER-06, HOLD-01, HOLD-02, VER-01, VER-05 |
| 343 | `BP-§10.5-B3` | §8.10, §12, §15 | FRV | FOLLOW-UP | VER-06, HOLD-03, VER-01, VER-05, IDM-02 |
| 344 | `BP-§10.5-X` | §8.10, §12, §15 | EXP | DEPENDENCY-HELD | VER-06, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01 |
| 345 | `BP-§11-1` | §8.6, §10.2, §12 | RULE | LATER-MISSION-HELD | ORD-01, HOLD-07 |
| 346 | `BP-§11-5` | §8.9, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | GOV-01, VER-07, GOV-02 |
| 347 | `BP-§13-1` | §8.10, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | GOV-01, VER-07, GOV-02 |
| 348 | `BP-§13-9` | §8.10, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | GOV-01, VER-07, GOV-02, VER-04, VER-05 |
| 349 | `BP-§14-1` | §8.9, §10.2 | RULE | DESIGN ACCEPTED — EVIDENCE HOLD | GOV-01, VER-07, GOV-02 |

## 13. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. **Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
