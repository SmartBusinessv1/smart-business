# SB-P-1.17 — Engineering Contract

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED, blob f65ddd2a)
EIS: APPROVED — LOCKED (UNCHANGED, blob 5d681b0c)
FCTM: LOCKED (UNCHANGED, blob cb79088d; 630 rows, 404 IN SCOPE)
IMPLEMENTATION PACKAGE: DRAFT — MISSION CONTROL REVIEW REQUIRED (Stage 13)
IMPLEMENTATION AUTHORIZATION: WITHHELD — IMPLEMENTATION NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
POS, AI, VOICE AND MESSAGING PROVIDER ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DEPLOYMENT: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.17 — Manager Operations |
| Document | Engineering Contract |
| Lifecycle stage | Source 18 v1.2 Stage 12 — Initial Implementation Package |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Authorization | Mission Control Stage 12 authorization (conversation-source): drafting only |
| Author | Claude Code (also author of Stages 2–9, the Stage 9 EIS draft and several Stage 10 corrections; not independent review) |
| Baseline | `main@ef3acbf5686fbb196efc0ee6d58f06d9bff78f42` (PR #1064 merge; PR #1063 merged at `8a4b19b1`) |
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.17.md`, blob `f65ddd2a3c499d278b83f6ae83487669ed75670c` |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, blob `5d681b0c169dd12edc54a110a9fc9d54b87e2982` (157 requirements) |
| Canonical FCTM | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md`, blob `cb79088d3fa59f8b3226fd9d11ff9c9573666670` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011` |
| Companion documents | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md` in `docs/implementation/SB-P-1.17/` |

## 2. Purpose and Authority

This contract translates the locked EIS into explicit engineering obligations for a future, separately authorized build. Each obligation `EC17-X` realizes exactly the locked requirement `EIS17-X` and inherits its FCTM rows unchanged (EIS §30.2). It adds no product behaviour or permission, changes no FCTM row, disposition, Founder decision, upstream contract or hold, and authorizes nothing. Where this contract and the locked EIS differ, the EIS prevails and the difference is a Stage 13 finding.

## 3. Locked References

| Reference | Identity |
|---|---|
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.17.md`, blob `f65ddd2a3c499d278b83f6ae83487669ed75670c` |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, blob `5d681b0c169dd12edc54a110a9fc9d54b87e2982`; Stage 11 disposition MC-507CU; metadata aligned in PR #1064 |
| Canonical FCTM | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md`, blob `cb79088d3fa59f8b3226fd9d11ff9c9573666670` (630 rows; 404 `IN SCOPE`; 0 `ALREADY DEMONSTRATED`) |
| Founder decisions | `17:FPDR-1` to `-7`; Stage 8 (MC-426); MC-499 GA-03 Option A; MC-507R A1, A2, B1; MC-507CG; MC-507CM — as recorded in the locked EIS and mission records |
| Upstream locked EIS | SB-P-1.12, SB-P-1.13, SB-P-1.14 (with the MC-507BT bounded amendments, PR #1061), SB-P-1.15 and SB-P-1.16 — specified, not implemented |

## 4. Preserved Holds and Gates

| Item | Boundary |
|---|---|
| Sole Ledger writer | Every Ledger effect goes through the SB-P-1.14 governed writer (`create_transaction_governed`, `EIS14-CMD-01`) or its MC-507BT internal child; no second writer, direct `transactions` DML or shadow revenue total |
| MC-499 GA-03 Option A | A financially trusted POS sale posts once; only genuinely unresolved mapping-dependent stock effects are held as linked exceptions; mapping later never reposts revenue (`EC17-TXN-09`; `HOLD-16` OPEN for assurance) |
| GA-04 atomic execution | Ledger, stock, source-event state and links commit in one PostgreSQL transaction or none through the MC-507BT coordinator (`EC17-TXN-03`; `HOLD-17` OPEN; blocks M17-9 activation) |
| GA-05 governed reversal | Original-preserving, original-linked SB-P-1.14 reversal with atomic compensation of committed movements only (`EC17-TXN-06/07`; `HOLD-18` OPEN; `14-Q6(a)` residual and `EIS16-RVS-04` stay with their owners) |
| MC-507CG closing | Daily-only Phase 1 closing; local-midnight cutoff under the historically effective timezone version; Owner-only evidenced opening float required for COMPLETE (`EC17-CC-01` to `-06`; `HOLD-19`, `HOLD-23` OPEN) |
| MC-507CM calibration | Bounded Mission Control selection of three threshold-evidence parameters after test-data validation and T6 screening; all UNSET; no automatic threshold suggestion displayed until recorded (`EC17-SIG-02`; `HOLD-22` OPEN) |
| MC-507R A1 POS intake | Owner-authorized source-scoped `EIS-AUT-01` delegation; no fifth principal (`EC17-POS-02`; `HOLD-15` OPEN) |
| Permissions | Seven scoped `17:FPDR-1` capabilities as normalized server-owned grants; capability 5 and standing-rule creation Owner-only; cost read, cost write and margin are separate SB-P-1.12 grants (`EC17-AUTH-02/03`) |
| FIN-01 | PROVISIONAL; supplier payable balance, settlement and correction are not built (`EC17-SUP-06`) |
| U-11 | Identifiable operator processing held pending qualified Indian legal and privacy validation (`EC17-CTR-06`, `EC17-PRIV-02`; `HOLD-20`) |
| DPOS / SA-04 | No real POS source activated; eleven-item dossier and independent qualified POS assurance outstanding (`EC17-POS-11`; `HOLD-21`) |
| Dependency gates | `HOLD-01` to `HOLD-14` (`D12`, `D13`, `D14`, `DTX`, `D15`, `D16`, `DPOS`, `DSEC`, `DENT`, `DSCH`, `DAI`, `DV`, `DNTF`, `DPAY`) |
| T6 / T8 | T6 delegated under MC-507CM with screening pending; T8 WATCH, not established |

No hold is closed, and no open question becomes approved, because it appears in this package.

## 5. System Boundaries and Exclusions

- **In scope:** the 404 `IN SCOPE` rows through the obligations below.
- **Not authorized by this package:** implementation, application code, SQL, migrations, deployment, production change, POS, AI, voice or messaging provider activation, staff or operator-data processing, runtime testing, Lovable or other builder execution, hold closure and Stage 13 approval.
- **Ownership boundaries:** SB-P-1.12 owns authority, identity, confirmation and delegated automation; SB-P-1.13 the gateway, tools and language; SB-P-1.14 the Ledger, governed commands, UDI and storage; SB-P-1.15 timezone, scheduler, reminders, standing-rule runtime, Ask CFO and Daily Intelligence; SB-P-1.16 customer balances. SB-P-1.17 consumes them and re-specifies none.

## 6. Obligation Types

| Type | Meaning |
|---|---|
| `BUILD — DEPENDENCY GATED` | Implement exactly as the locked EIS specifies, under a future Implementation Authorization, after the rows' upstream dependencies are implemented and accepted |
| `BUILD — OPEN, FAIL-CLOSED` | The requirement carries an open technical contract or hold; build only the fail-closed behaviour the EIS states until the hold is accepted |
| `BUILD — SOURCE GATED (DPOS)` | Build against the vendor-neutral contract and fixtures only; no real source, credential or activation until the dossier is evidenced and separately authorized |
| `BUILD — PROVISIONAL (FIN-01)` | Do not build supplier payable balance, settlement or correction logic until FIN-01 is finalized |
| `BUILD — DISABLED UNTIL CALIBRATED (MC-507CM)` | Build the evidence predicate disabled; no automatic suggestion is displayed until the three parameters are validated, screened and recorded |
| `BUILD — HELD (U-11)` | Build only default non-attribution and exclusion; no identifiable operator processing until U-11 is resolved |
| `BUILD — OPTIONAL (17:FPDR-7)` | Optional approach; verified only if adopted |
| `MIGRATION-DESIGN` | Fixes classes, ordering, rollback and rehearsal; writing or executing a migration needs an explicit migration mission (`docs/migration/README.md`) |
| `VERIFICATION` | Verification architecture and evidence; adds no behaviour |
| `VERIFICATION — FOUNDER-RESERVED` | Founder Runtime Verification; executed only by the Founder process |
| `GOVERNANCE` | Constrains every workstream; adds no behaviour |
| `GATE` | Not builder work; Mission Control enforces it through dependency evidence |

## 7. Engineering Obligations

Verification references name the Verification Checklist negative-path checks (`NP-*`) and runtime scenarios (`RS-*`); every row also has a row-keyed item (`VC17-###`). "Retained holds" lists the holds named in the requirement and the dependency gates of its rows. Row lists of 25 or fewer are shown; larger sets are exactly the rows citing the obligation in Section 10.

### 7.1 Target Architecture, Interfaces and Trust Boundaries (EIS Section 6)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-ARC-01` | `EIS17-ARC-01` | Consume, never duplicate | AF/PR | `GOVERNANCE` | WS17-A, WS17-B, WS17-C, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-06, HOLD-07, HOLD-08, HOLD-09, HOLD-10, HOLD-11, HOLD-12, HOLD-13, HOLD-14 | Row items (VC17-*) | 404 rows (Section 10) |
| `EC17-ARC-02` | `EIS17-ARC-02` | Component and module map | TR | `GOVERNANCE` | WS17-A, WS17-C, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-10, HOLD-13 | Row items (VC17-*) | 36 rows (Section 10) |
| `EC17-ARC-03` | `EIS17-ARC-03` | Trust zones and data flow | AF/TR | `GOVERNANCE` | WS17-C, WS17-E, WS17-F | HOLD-01, HOLD-03, HOLD-07 | NP-18 | `7-§12-9`, `13-§5-4`, `13-§19-9`, `22-§17-2`, `BP-§5.4-1`, `BP-§6.1-1`, `BP-§6.3-1` |
| `EC17-ARC-04` | `EIS17-ARC-04` | One Business Command path | PR | `GOVERNANCE` | WS17-A, WS17-D, WS17-F | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05 | Row items (VC17-*) | `7-§8-1`, `7-§12-8`, `13-§15-8`, `13-§19-8`, `17-§20-12`, `BP-§6.2-1` |
| `EC17-ARC-05` | `EIS17-ARC-05` | Specified versus built; delivery accounting | PR | `GOVERNANCE` | WS17-A, WS17-C, WS17-E, WS17-F | — | Row items (VC17-*) | `BP-§5.3-1`, `BP-§9-AL`, `BP-§11-7`, `BP-§14-1`, `GPCV-R7`, `GPCV-R13`, `GPCV-R17` |
| `EC17-ARC-06` | `EIS17-ARC-06` | Native-first; thin channel adapters | PR | `GOVERNANCE` | WS17-C, WS17-E | HOLD-02, HOLD-07 | Row items (VC17-*) | `13-§5-2`, `17-§1-2`, `17-§3-2`, `17-§21-5`, `17-§23-4`, `BP-§6.6-1`, `BP-§8-1` |

### 7.2 Stock Foundation Extension (EIS Section 7)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-STK-01` | `EIS17-STK-01` | One stock foundation, extended additively | AF/PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-E, WS17-F | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-06, HOLD-07, HOLD-09 | Row items (VC17-*) | 28 rows (Section 10) |
| `EC17-STK-02` | `EIS17-STK-02` | Movement-type widening | TR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-C | HOLD-01, HOLD-03, HOLD-04, HOLD-07 | Row items (VC17-*) | `7-§2-3`, `7-§2-9`, `7-§2-12`, `7-§8-2`, `7-§8-3`, `13-§4-8` |
| `EC17-STK-03` | `EIS17-STK-03` | Batch and expiry only where recorded | TR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B, WS17-E | HOLD-01, HOLD-02, HOLD-03 | Row items (VC17-*) | `7-§2-7`, `7-§2-12`, `7-§4-6`, `17-§7-3`, `BP-§10.6-W3` |
| `EC17-STK-04` | `EIS17-STK-04` | Unit conversion | TR/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-A, WS17-C, WS17-F | HOLD-01, HOLD-03, HOLD-07 | Row items (VC17-*) | `7-§2-2`, `7-§2-12`, `7-§13-4`, `13-§7-2`, `13-§16-4` |
| `EC17-STK-05` | `EIS17-STK-05` | Append-only corrections | AF/PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03 | NP-26 | `7-§2-5`, `7-§8-4`, `7-§11-2.3`, `7-§13-6`, `7-§15-3` |
| `EC17-STK-06` | `EIS17-STK-06` | One product identity | AF/PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-04 | RS-11 | `7-§2-1`, `7-§2-10`, `7-§12-1`, `13-§19-2`, `17-§20-9`, `BP-§10.6-W11`, `BP-§10.6-E3`, `BP-§10.6-A4` |
| `EC17-STK-07` | `EIS17-STK-07` | Governed stock readers | PR/TR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B, WS17-E, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-11 | RS-14 | `7-§1-1`, `7-§1-2`, `7-§2-3`, `7-§2-11`, `7-§11-1.1`, `7-§15-1`, `17-§7-1` |
| `EC17-STK-08` | `EIS17-STK-08` | Opening stock consumed from SB-P-1.14 | AF | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-G | HOLD-01, HOLD-03 | Row items (VC17-*) | `7-§2-4`, `7-§15-1`, `BP-§10.6-W12` |
| `EC17-STK-09` | `EIS17-STK-09` | Negative-stock policy | AF/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-F | HOLD-01, HOLD-03 | Row items (VC17-*) | `7-§13-5`, `7-§13-13` |

### 7.3 Stock Signals and Owner-Confirmed Thresholds (EIS Section 8)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-SIG-01` | `EIS17-SIG-01` | Owner-confirmed thresholds (`17:FPDR-6`) | PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-22 | NP-16, RS-07 | `7-§2-6`, `7-§4-4`, `7-§15-4`, `7-§16-6`, `BP-§10.6-W2`, `BP-§10.6-A1` |
| `EC17-SIG-02` | `EIS17-SIG-02` | Evidence-sufficiency rule (`17:FPDR-6`; Founder MC-507CM Option B: bounded parameter-selection delegation APPROVED, numeric calibration pending) | UQ | `BUILD — DISABLED UNTIL CALIBRATED (MC-507CM)` | WS17-A, WS17-B | HOLD-01, HOLD-02, HOLD-03, HOLD-11, HOLD-22 | NP-16, RS-07 | `7-§2-6`, `7-§11-1.2`, `7-§16-6` |
| `EC17-SIG-03` | `EIS17-SIG-03` | Low, slow and dead-capital signals | PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B, WS17-E, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-11 | RS-14 | `7-§2-6`, `7-§2-7`, `7-§2-8`, `7-§2-9`, `7-§11-1.2`, `7-§15-4`, `7-§15-5`, `7-§16-6`, `17-§7-2`, `17-§7-4`, `BP-§10.6-W2`, `BP-§10.6-W3` |
| `EC17-SIG-04` | `EIS17-SIG-04` | Expiry and wastage from recorded facts | PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-E, WS17-G | HOLD-01, HOLD-03 | RS-14 | `7-§2-7`, `7-§2-9`, `7-§15-5`, `17-§7-3`, `17-§7-4`, `BP-§10.6-W3` |

### 7.4 Supplier Identity, Memory and Protected Prices (EIS Section 9)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-SUP-01` | `EIS17-SUP-01` | Supplier as SB-P-1.12 participant | AF/PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-F | HOLD-01, HOLD-03, HOLD-04, HOLD-06, HOLD-13 | RS-08 | `7-§3-1`, `7-§3-2`, `7-§3-3`, `7-§3-4`, `7-§3-5`, `7-§3-6`, `7-§3-7`, `7-§3-8`, `7-§3-9`, `7-§12-5`, `17-§20-11`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `BP-§10.3-S2`, `BP-§10.6-W1`, `BP-§10.6-W10`, `BP-§10.6-W12` |
| `EC17-SUP-02` | `EIS17-SUP-02` | Supplier–product relation | TR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B | HOLD-01, HOLD-02, HOLD-11 | RS-08 | `7-§3-3`, `7-§3-8`, `7-§11-1.4`, `BP-§10.6-W1` |
| `EC17-SUP-03` | `EIS17-SUP-03` | Purchase-price history as cost information (`17:FPDR-4`) | PR/TR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B | HOLD-01, HOLD-02, HOLD-03 | NP-06 | `7-§3-5`, `7-§4-5` |
| `EC17-SUP-04` | `EIS17-SUP-04` | Owner-confirmed historical attribution (`17:FPDR-5`) | PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-G | HOLD-01, HOLD-03 | NP-14, NP-34, RS-08 | `7-§3-4`, `7-§15-6` |
| `EC17-SUP-05` | `EIS17-SUP-05` | Request and communication history | PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-E | HOLD-01, HOLD-03, HOLD-13 | RS-06 | `7-§3-6`, `17-§7-5`, `17-§7-7` |
| `EC17-SUP-06` | `EIS17-SUP-06` | Supplier payment and credit only where authorized | AF/PR | `BUILD — PROVISIONAL (FIN-01)` | WS17-A | HOLD-01, HOLD-03, HOLD-04, HOLD-06 | NP-27 | `7-§3-7`, `7-§8-5` |
| `EC17-SUP-07` | `EIS17-SUP-07` | Supplier isolation | AF/PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B | HOLD-01, HOLD-02, HOLD-03 | NP-09 | `7-§3-9`, `7-§11-2.5`, `3-§11-6` |

### 7.5 Reorder Intelligence, Confirmation, Standing Rules and Purchase Requests (EIS Section 10)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-RO-01` | `EIS17-RO-01` | Reorder suggestion record | PR/TR | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-E, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-10, HOLD-11, HOLD-12, HOLD-13 | RS-05 | 34 rows (Section 10) |
| `EC17-RO-02` | `EIS17-RO-02` | No fabricated demand or availability | PR | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-F | HOLD-01, HOLD-02, HOLD-03 | NP-32 | `7-§4-7`, `7-§11-2.1`, `7-§13-7` |
| `EC17-RO-03` | `EIS17-RO-03` | Confirmation-gated reorder | PR/AF | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-G | HOLD-01, HOLD-02, HOLD-05, HOLD-13 | NP-05, NP-14, RS-05 | `7-§5-1`, `7-§11-2.4`, `7-§15-7`, `10-§13-6`, `24-§21-3`, `BP-§10.6-W5`, `BP-§10.6-A3` |
| `EC17-RO-04` | `EIS17-RO-04` | Merchant-controlled purchase request (`17:FPDR-3`) | PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-13 | NP-35, RS-06 | `7-§3-6`, `7-§5-1`, `7-§13-8`, `17-§7-7`, `BP-§10.6-A4` |
| `EC17-RO-05` | `EIS17-RO-05` | Owner-created bounded standing rules | PR/AF | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-F, WS17-G | HOLD-01, HOLD-05, HOLD-10 | NP-04, NP-15 | `7-§5-2`, `7-§5-3`, `7-§5-4`, `7-§13-12`, `7-§15-8`, `BP-§10.6-W6` |
| `EC17-RO-06` | `EIS17-RO-06` | Follow-up through the Reminder Engine | AF | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-F | HOLD-02, HOLD-05, HOLD-10, HOLD-13 | Row items (VC17-*) | `7-§12-4`, `13-§19-10`, `17-§20-8`, `24-§18-3`, `BP-§6.5-1` |
| `EC17-RO-07` | `EIS17-RO-07` | AI assistance for stock and reorder | PR | `BUILD — DEPENDENCY GATED` | WS17-B | HOLD-01, HOLD-02, HOLD-11, HOLD-12 | Row items (VC17-*) | `7-§11-1.1`, `7-§11-1.2`, `7-§11-1.3`, `7-§11-1.4`, `7-§11-1.5`, `7-§11-1.6`, `12-§7-7` |
| `EC17-RO-08` | `EIS17-RO-08` | Downstream interface for orders | PR | `BUILD — DEPENDENCY GATED` | WS17-B | — | Row items (VC17-*) | `BP-§11-6` |

### 7.6 Stock Documents Through UDI (EIS Section 11)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-DOC-01` | `EIS17-DOC-01` | SB-P-1.14 UDI adapters for stock documents | AF/TR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-F | HOLD-01, HOLD-03 | RS-12 | `7-§6-1`, `7-§6-3`, `7-§6-4b`, `7-§6-5b`, `7-§12-6`, `17-§20-7`, `5-§4-10`, `BP-§10.6-W12`, `GPCV-§11-2` |
| `EC17-DOC-02` | `EIS17-DOC-02` | Preview, confirmation and idempotent import | AF | `BUILD — DEPENDENCY GATED` | WS17-F, WS17-G | HOLD-01, HOLD-03 | RS-12 | `7-§6-4b`, `7-§6-5b`, `7-§13-1`, `7-§13-10`, `7-§15-2b` |
| `EC17-DOC-03` | `EIS17-DOC-03` | Prior Lovable opening-stock code is evidence only | PR | `BUILD — DEPENDENCY GATED` | WS17-F | HOLD-03 | Row items (VC17-*) | `GPCV-§11-2` |
| `EC17-DOC-04` | `EIS17-DOC-04` | Supplier invoice split | TR/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-F | HOLD-01, HOLD-03, HOLD-17 | Row items (VC17-*) | `7-§6-3` |

### 7.7 Standard POS Bridge (EIS Section 12)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-POS-01` | `EIS17-POS-01` | Vendor-neutral bridge, two interface classes (`17:FPDR-2`) | PR | `BUILD — SOURCE GATED (DPOS)` | WS17-C, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07 | Row items (VC17-*) | 41 rows (Section 10) |
| `EC17-POS-02` | `EIS17-POS-02` | POS intake authority (Founder MC-507R A1; MC410-R01 route documentarily specified, HOLD-15 retained) | UQ/TR | `BUILD — SOURCE GATED (DPOS)` | WS17-C, WS17-F | HOLD-01, HOLD-07, HOLD-08, HOLD-15 | NP-17, NP-18 | `13-§4-1`, `13-§5-3`, `13-§16-8`, `13-§17-1`, `22-§17-2`, `BP-§5.4-1` |
| `EC17-POS-03` | `EIS17-POS-03` | Credentials in the approved secret home | PD | `BUILD — SOURCE GATED (DPOS)` | WS17-C, WS17-F | HOLD-07, HOLD-08, HOLD-15 | NP-17 | `13-§16-8`, `BP-§5.4-1` |
| `EC17-POS-04` | `EIS17-POS-04` | Per-source capability declaration | PR | `BUILD — SOURCE GATED (DPOS)` | WS17-C | HOLD-01, HOLD-07, HOLD-21 | Row items (VC17-*) | `13-§4-5`, `13-§4-6`, `13-§4-7`, `13-§5-5`, `13-§5-6` |
| `EC17-POS-05` | `EIS17-POS-05` | Raw and normalized event records | TR | `BUILD — SOURCE GATED (DPOS)` | WS17-C, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-07 | Row items (VC17-*) | `13-§4-2`, `13-§4-3`, `13-§6-2`, `13-§17-2`, `13-§17-4`, `13-§17-5`, `13-§21-1` |
| `EC17-POS-06` | `EIS17-POS-06` | Item mapping and conflict queue | PR/TR | `BUILD — SOURCE GATED (DPOS)` | WS17-C, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-07 | NP-19, RS-15 | `7-§13-2`, `7-§13-3`, `13-§4-4`, `13-§7-1`, `13-§16-3`, `13-§16-4`, `13-§17-3`, `13-§21-4` |
| `EC17-POS-07` | `EIS17-POS-07` | Stock eligibility | PR | `BUILD — SOURCE GATED (DPOS)` | WS17-C, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07 | Row items (VC17-*) | `7-§7-2`, `13-§4-8`, `13-§7-1`, `13-§7-2`, `13-§7-3`, `13-§7-4`, `13-§21-3` |
| `EC17-POS-08` | `EIS17-POS-08` | Export-file class and manual fallback | PR | `BUILD — SOURCE GATED (DPOS)` | WS17-C, WS17-F | HOLD-03, HOLD-07 | NP-37 | `13-§4-10`, `13-§20-7` |
| `EC17-POS-09` | `EIS17-POS-09` | Works without POS; outage-safe | PR | `BUILD — DEPENDENCY GATED` | WS17-C, WS17-F, WS17-G | HOLD-07 | RS-04 | `7-§7-1`, `13-§16-1`, `13-§16-7`, `13-§16-12`, `13-§21-10` |
| `EC17-POS-10` | `EIS17-POS-10` | Extension edge only | PR | `BUILD — DEPENDENCY GATED` | WS17-C, WS17-D, WS17-F, WS17-G | HOLD-07 | NP-37, RS-04 | `7-§7-3`, `7-§16-3`, `13-§3-1`, `13-§3-2`, `13-§3-7`, `13-§5-1`, `13-§20-1`, `13-§20-2`, `13-§21-11`, `13-§22-3` |
| `EC17-POS-11` | `EIS17-POS-11` | Source eligibility dossier (SA-04 / ENG17-03) | PR/PD | `BUILD — SOURCE GATED (DPOS)` | WS17-A, WS17-C, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-08, HOLD-21 | Row items (VC17-*) | 101 rows (Section 10) |
| `EC17-POS-12` | `EIS17-POS-12` | POS data for intelligence and closing | PR | `BUILD — SOURCE GATED (DPOS)` | WS17-C, WS17-G | HOLD-03, HOLD-04, HOLD-07 | RS-04 | `7-§7-2`, `7-§15-9`, `13-§1-1`, `13-§1-2`, `13-§4-9`, `3-§15-11`, `BP-§10.6-E1` |

### 7.8 Transaction Identity, Atomicity, Idempotency and Concurrency (EIS Section 13)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-TXN-01` | `EIS17-TXN-01` | Identities | TR | `BUILD — DEPENDENCY GATED` | WS17-C, WS17-F | HOLD-01, HOLD-03, HOLD-07 | NP-20 | `7-§12-8`, `13-§6-1`, `13-§6-2`, `13-§6-5`, `13-§17-2`, `13-§17-6`, `13-§19-8` |
| `EC17-TXN-02` | `EIS17-TXN-02` | INV-A1 — one outcome per source event | AF/PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-C, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07 | NP-20 | `7-§6-4b`, `7-§6-5b`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§13-1`, `7-§13-11`, `7-§15-2b`, `13-§4-3`, `13-§6-1`, `13-§6-2`, `13-§6-3`, `13-§6-4`, `13-§6-5`, `13-§6-6`, `13-§16-2`, `13-§16-5`, `13-§17-6`, `13-§21-2`, `3-§15-10`, `3-§15-11` |
| `EC17-TXN-03` | `EIS17-TXN-03` | INV-A2 — atomic composition (EQ17-13 hard hold) | UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-A, WS17-C, WS17-D, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-06, HOLD-07, HOLD-17 | NP-22 | `7-§2-10`, `7-§3-7`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§8-5`, `13-§4-8`, `13-§6-6`, `13-§10-4`, `13-§21-2`, `3-§15-10`, `3-§15-11`, `BP-§6.2-1` |
| `EC17-TXN-04` | `EIS17-TXN-04` | INV-A3 — commit-time event-link validation | TR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-F | HOLD-01, HOLD-03, HOLD-04, HOLD-07, HOLD-17 | NP-21 | `7-§2-10`, `7-§8-1`, `13-§17-7` |
| `EC17-TXN-05` | `EIS17-TXN-05` | INV-A4 — unknown outcome | AF | `BUILD — DEPENDENCY GATED` | WS17-F | HOLD-01, HOLD-03, HOLD-07 | Row items (VC17-*) | `7-§13-11`, `13-§17-6` |
| `EC17-TXN-06` | `EIS17-TXN-06` | INV-A5 — ordinary correction versus original-preserving dual-domain reversal | PR/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-A, WS17-C, WS17-F | HOLD-01, HOLD-03, HOLD-07, HOLD-18 | NP-24 | `7-§2-5`, `7-§13-6`, `13-§6-3`, `13-§16-6`, `13-§17-7` |
| `EC17-TXN-07` | `EIS17-TXN-07` | INV-A6 — out-of-order events held | TR | `BUILD — DEPENDENCY GATED` | WS17-F | HOLD-07, HOLD-18 | NP-24 | `13-§16-5` |
| `EC17-TXN-08` | `EIS17-TXN-08` | INV-A7 — overlap review, never auto-merge | PR/TR | `BUILD — DEPENDENCY GATED` | WS17-C, WS17-E, WS17-F | HOLD-01, HOLD-03, HOLD-07 | NP-25, RS-15 | `7-§7-4`, `7-§13-9`, `7-§16-5`, `13-§6-1`, `13-§7-5`, `13-§16-11`, `17-§17-7` |
| `EC17-TXN-09` | `EIS17-TXN-09` | INV-A8 — financial eligibility, independent stock eligibility and GA-03 Option A (Founder-decided) | PR/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-A, WS17-C, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07, HOLD-16 | NP-19, NP-22, NP-23, RS-15 | `7-§8-3`, `13-§4-2`, `13-§6-6`, `13-§7-3`, `13-§21-3`, `13-§21-4`, `3-§15-11` |
| `EC17-TXN-10` | `EIS17-TXN-10` | INV-A9 — purchase receipt classification | PR/AF | `BUILD — DEPENDENCY GATED` | WS17-A | HOLD-01, HOLD-03, HOLD-04, HOLD-06 | NP-27 | `7-§3-7`, `7-§8-2`, `7-§8-5` |
| `EC17-TXN-11` | `EIS17-TXN-11` | Concurrency and authority serialization | AF | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-F | HOLD-01, HOLD-03, HOLD-07 | NP-13 | `7-§13-6`, `13-§17-6`, `17-§17-3` |
| `EC17-TXN-12` | `EIS17-TXN-12` | Narrow failure | AF | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-F | HOLD-01, HOLD-03 | Row items (VC17-*) | `7-§13-13`, `13-§16-12`, `17-§17-9` |

### 7.9 Neutral Counter Review (EIS Section 14)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-CTR-01` | `EIS17-CTR-01` | Signals from declared fields only | PR | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-E | HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-10 | RS-03 | 45 rows (Section 10) |
| `EC17-CTR-02` | `EIS17-CTR-02` | Neutral review language | PR | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-11 | NP-30, RS-03 | `7-§11-1.5`, `7-§11-2.2`, `7-§14-1`, `7-§14-2`, `7-§15-11`, `7-§16-4`, `13-§2-6`, `13-§3-3`, `13-§3-4`, `13-§8-8`, `13-§8-9`, `13-§8-10`, `13-§18-1`, `13-§18-2`, `13-§18-5`, `13-§20-3`, `13-§21-5`, `13-§22-1`, `17-§8-6`, `BP-§3-1`, `BP-§10.6-W8`, `BP-§10.6-E2`, `BP-§10.6-B2` |
| `EC17-CTR-03` | `EIS17-CTR-03` | Authorized human context | PR | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-07 | RS-03 | `13-§9-1`, `13-§9-2`, `13-§9-3`, `13-§9-4`, `13-§9-5`, `13-§9-6`, `13-§9-7`, `13-§17-10`, `13-§21-6` |
| `EC17-CTR-04` | `EIS17-CTR-04` | No autonomous action | PR | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-F | HOLD-01, HOLD-02, HOLD-03 | NP-30 | `13-§3-5`, `13-§15-1`, `13-§15-2`, `13-§15-3`, `13-§15-4`, `13-§15-5`, `13-§15-6`, `13-§15-7`, `13-§15-8`, `13-§20-4`, `13-§22-2` |
| `EC17-CTR-05` | `EIS17-CTR-05` | No historical mechanisms as Product Truth | PR | `BUILD — DEPENDENCY GATED` | WS17-F | — | Row items (VC17-*) | `13-§20-5`, `13-§20-6`, `13-§22-4`, `13-§22-5` |
| `EC17-CTR-06` | `EIS17-CTR-06` | Operator data separated and held (U-11) | PR/UQ | `BUILD — HELD (U-11)` | WS17-C, WS17-D, WS17-E, WS17-F | HOLD-01, HOLD-07, HOLD-20 | NP-03 | `13-§4-7`, `13-§13-3`, `13-§17-8`, `13-§18-3`, `17-§18-5` |
| `EC17-CTR-07` | `EIS17-CTR-07` | Explanation and provenance | PR | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-F | HOLD-01, HOLD-07 | Row items (VC17-*) | `13-§3-6`, `13-§17-9` |

### 7.10 Closing Cash (EIS Section 15)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-CC-01` | `EIS17-CC-01` | Closing session record | TR | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-E, WS17-F | HOLD-01, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-10, HOLD-19 | RS-09 | `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8`, `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `13-§11-7`, `13-§17-11`, `17-§8-4`, `17-§8-5`, `BP-§10.6-W9` |
| `EC17-CC-02` | `EIS17-CC-02` | Completeness decision table | PR | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07 | NP-28, RS-09 | `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8`, `13-§16-9`, `13-§16-10`, `13-§21-7` |
| `EC17-CC-03` | `EIS17-CC-03` | Affirmative completeness evidence (MC410-R04B) | UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-D, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07, HOLD-19 | NP-28, RS-09 | `13-§10-1`, `13-§10-4`, `13-§10-7`, `13-§16-7`, `13-§21-7` |
| `EC17-CC-04` | `EIS17-CC-04` | Period model (U-03; Founder MC-507CG DECIDED) | UQ/AF | `BUILD — OPEN, FAIL-CLOSED` | WS17-B, WS17-D, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-10, HOLD-13, HOLD-19, HOLD-23 | NP-28, RS-09 | `7-§5-2`, `7-§12-4`, `7-§15-8`, `13-§10-3`, `13-§10-4`, `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `24-§18-3`, `BP-§6.5-1`, `BP-§10.6-W6` |
| `EC17-CC-05` | `EIS17-CC-05` | Cash count, float evidence and variance authority | PR | `BUILD — DEPENDENCY GATED` | WS17-D | HOLD-01, HOLD-03 | NP-29, RS-09 | `13-§10-6`, `13-§10-7`, `13-§10-8` |
| `EC17-CC-06` | `EIS17-CC-06` | Post-close reopen | UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-F | HOLD-01, HOLD-03, HOLD-07, HOLD-19 | RS-09 | `13-§17-11`, `13-§17-12` |
| `EC17-CC-07` | `EIS17-CC-07` | Night Closing Intelligence consumption | AF | `BUILD — DEPENDENCY GATED` | WS17-D | HOLD-01, HOLD-05, HOLD-10 | NP-11 | `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `13-§11-7` |

### 7.11 Authorization, Capabilities, Denial and Isolation (EIS Section 16)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-AUTH-01` | `EIS17-AUTH-01` | Kernel consumption | AF | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-B, WS17-E, WS17-F | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-06, HOLD-07, HOLD-09, HOLD-10, HOLD-11, HOLD-12, HOLD-13, HOLD-14 | NP-01 | 145 rows (Section 10) |
| `EC17-AUTH-02` | `EIS17-AUTH-02` | Seven capabilities (`17:FPDR-1`) | PR/AF | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-D, WS17-E | HOLD-01, HOLD-02, HOLD-05, HOLD-10, HOLD-13 | NP-01, NP-02 | `7-§5-1`, `13-§10-6`, `13-§13-1`, `13-§13-2`, `BP-§10.6-W6` |
| `EC17-AUTH-03` | `EIS17-AUTH-03` | Reference Cost read, cost-event write and margin | PR/UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-A, WS17-B, WS17-E | HOLD-01, HOLD-02, HOLD-03 | NP-06, NP-07, NP-08 | `7-§3-5`, `7-§4-5`, `17-§4-14`, `17-§6-1`, `17-§6-2` |
| `EC17-AUTH-04` | `EIS17-AUTH-04` | Owner intelligence and employee denial | AF/PR | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-D, WS17-E, WS17-G | HOLD-01, HOLD-02, HOLD-05 | NP-11 | `7-§11-2.5`, `13-§11-7`, `13-§13-3`, `13-§21-9`, `17-§3-3`, `17-§3-4` |
| `EC17-AUTH-05` | `EIS17-AUTH-05` | No routine platform access | AF | `BUILD — DEPENDENCY GATED` | WS17-E | HOLD-01 | NP-12 | `13-§13-4`, `17-§18-3` |
| `EC17-AUTH-06` | `EIS17-AUTH-06` | Revocation stops prepared work | AF | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-F | HOLD-01, HOLD-05 | NP-13 | `7-§13-12`, `17-§17-3` |
| `EC17-AUTH-07` | `EIS17-AUTH-07` | Grant interface not assumed | UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-E | HOLD-01 | Row items (VC17-*) | `13-§13-2` |
| `EC17-AUTH-08` | `EIS17-AUTH-08` | Business and reference isolation | AF | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-E, WS17-F | HOLD-01 | NP-02, NP-10 | `13-§18-4`, `17-§19-2`, `17-§20-11` |

### 7.12 Conversation, Ask CFO, Voice and AI Authority (EIS Section 17)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-AI-01` | `EIS17-AI-01` | Typed tools and confirmation | AF | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-F | HOLD-01, HOLD-02, HOLD-05, HOLD-11, HOLD-12, HOLD-13 | NP-14, RS-13 | `7-§12-7`, `13-§12-1`, `13-§12-2`, `13-§12-3`, `13-§12-4`, `13-§12-5`, `13-§13-1`, `13-§13-2`, `13-§13-3`, `13-§13-4`, `13-§14-1a`, `13-§14-2`, `13-§19-5`, `17-§20-3`, `17-§20-4`, `9-§12-8`, `12-§4-4`, `BP-§6.1-1`, `BP-§8-1` |
| `EC17-AI-02` | `EIS17-AI-02` | Ask CFO read-only | AF/PR | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-05 | NP-32, RS-13 | `13-§12-1`, `13-§12-2`, `13-§12-3`, `13-§12-4`, `13-§12-5`, `13-§19-6`, `13-§21-8`, `17-§4-6`, `17-§20-5` |
| `EC17-AI-03` | `EIS17-AI-03` | Basic Voice | AF | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-E | HOLD-02, HOLD-12 | RS-13 | `12-§4-4`, `12-§7-7` |
| `EC17-AI-04` | `EIS17-AI-04` | Authorization before retrieval | AF | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-E | HOLD-01, HOLD-02, HOLD-05, HOLD-11 | NP-06 | `7-§11-1.1`, `7-§11-1.2`, `7-§11-1.3`, `7-§11-1.4`, `7-§11-1.5`, `7-§11-1.6`, `7-§11-2.5`, `13-§12-5`, `13-§14-1a`, `9-§12-8` |
| `EC17-AI-05` | `EIS17-AI-05` | AI must-nots enforced below the model | PR | `BUILD — DEPENDENCY GATED` | WS17-B | HOLD-01, HOLD-02 | NP-32 | `7-§11-2.1`, `7-§11-2.2`, `7-§11-2.3`, `7-§11-2.4`, `7-§11-2.5` |
| `EC17-AI-06` | `EIS17-AI-06` | Language layer | AF | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-E | HOLD-01, HOLD-02, HOLD-11, HOLD-12 | RS-13 | `13-§14-1a`, `9-§12-8`, `12-§7-7` |

### 7.13 Manager Workspace and Governed Readers (EIS Section 18)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-WS-01` | `EIS17-WS-01` | Workspace reads feature services | PR | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06, HOLD-07, HOLD-09, HOLD-13, HOLD-14 | NP-36, RS-10 | 82 rows (Section 10) |
| `EC17-WS-02` | `EIS17-WS-02` | Card catalogue | PR/TR | `BUILD — DEPENDENCY GATED` | WS17-E | HOLD-01, HOLD-03, HOLD-05, HOLD-06, HOLD-07, HOLD-09, HOLD-13, HOLD-14 | RS-10 | 37 rows (Section 10) |
| `EC17-WS-03` | `EIS17-WS-03` | Truthful metrics | PR | `BUILD — DEPENDENCY GATED` | WS17-E | HOLD-01, HOLD-03, HOLD-09 | RS-10 | `17-§6-7`, `17-§6-8`, `17-§17-6` |
| `EC17-WS-04` | `EIS17-WS-04` | Non-manipulative personalization | PR | `BUILD — DEPENDENCY GATED` | WS17-E | HOLD-01, HOLD-09 | RS-10 | `17-§15-1`, `17-§15-2`, `17-§15-3`, `17-§15-4`, `17-§15-5`, `17-§15-6`, `17-§15-7`, `17-§15-8` |
| `EC17-WS-05` | `EIS17-WS-05` | Resilience | PR | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-G | HOLD-01, HOLD-03, HOLD-07 | RS-10 | `17-§17-1`, `17-§17-2`, `17-§17-3`, `17-§17-4`, `17-§17-5`, `17-§17-6`, `17-§17-7`, `17-§17-8`, `17-§17-9`, `17-§22-6` |
| `EC17-WS-06` | `EIS17-WS-06` | Performance without bypass | PR | `BUILD — DEPENDENCY GATED` | WS17-E | HOLD-01 | NP-36 | `17-§19-1`, `17-§19-2` |
| `EC17-WS-07` | `EIS17-WS-07` | Stable identifiers for tests | PR | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-G | — | Row items (VC17-*) | `17-§3-6`, `17-§16-2`, `17-§16-3`, `17-§22-10b` |
| `EC17-WS-08` | `EIS17-WS-08` | Calm, role-appropriate design | PR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-E | HOLD-01, HOLD-03 | RS-10 | `17-§1-1`, `17-§2-9`, `17-§3-1`, `17-§3-2`, `17-§3-3`, `17-§3-4`, `17-§3-5`, `17-§3-6`, `17-§3-7`, `17-§4-16`, `17-§21-1`, `17-§21-2`, `BP-§10.6-O`, `BP-§10.6-W10`, `BP-§10.6-X` |
| `EC17-WS-09` | `EIS17-WS-09` | Readers for SB-P-1.15 | AF | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-F | HOLD-01, HOLD-05 | Row items (VC17-*) | `13-§19-7`, `17-§4-6`, `17-§4-7`, `17-§20-6` |
| `EC17-WS-10` | `EIS17-WS-10` | Entitlement awareness | AF | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-E | HOLD-01, HOLD-09 | Row items (VC17-*) | `7-§9-2`, `17-§4-8`, `17-§6-7`, `17-§15-3` |
| `EC17-WS-11` | `EIS17-WS-11` | Consumed views | AF | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-E | HOLD-01, HOLD-03, HOLD-04, HOLD-06, HOLD-14 | Row items (VC17-*) | `7-§3-7`, `7-§8-5`, `17-§4-2`, `17-§4-3`, `17-§4-4`, `17-§6-3`, `17-§6-5` |

### 7.14 Failure, Retry and Recovery (EIS Section 19)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-FLR-01` | `EIS17-FLR-01` | Failure catalogue | PR/TR | `BUILD — DEPENDENCY GATED` | WS17-F | HOLD-01, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-13 | Row items (VC17-*) | `7-§13-1`, `7-§13-2`, `7-§13-3`, `7-§13-4`, `7-§13-5`, `7-§13-6`, `7-§13-7`, `7-§13-8`, `7-§13-9`, `7-§13-10`, `7-§13-11`, `7-§13-12`, `7-§13-13`, `13-§16-1`, `13-§16-2`, `13-§16-3`, `13-§16-4`, `13-§16-5`, `13-§16-6`, `13-§16-7`, `13-§16-8`, `13-§16-9`, `13-§16-10`, `13-§16-11`, `13-§16-12` |
| `EC17-FLR-02` | `EIS17-FLR-02` | Supplier unavailability and communication failure | PR | `BUILD — DEPENDENCY GATED` | WS17-F | HOLD-01, HOLD-03, HOLD-13 | Row items (VC17-*) | `7-§13-7`, `7-§13-8` |
| `EC17-FLR-03` | `EIS17-FLR-03` | Bounded retries | AF | `BUILD — DEPENDENCY GATED` | WS17-B, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-10, HOLD-13 | Row items (VC17-*) | 39 rows (Section 10) |

### 7.15 Audit, Corrections and Provenance (EIS Section 20)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-AUD-01` | `EIS17-AUD-01` | Domain events | TR | `BUILD — DEPENDENCY GATED` | WS17-A, WS17-D, WS17-F | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-08, HOLD-10, HOLD-13 | Row items (VC17-*) | 95 rows (Section 10) |
| `EC17-AUD-02` | `EIS17-AUD-02` | Authority audit reuse | AF | `BUILD — DEPENDENCY GATED` | WS17-F | HOLD-01 | Row items (VC17-*) | `7-§12-3`, `13-§19-4` |
| `EC17-AUD-03` | `EIS17-AUD-03` | Evidence, interpretation and action kept apart | AF | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-F | HOLD-01, HOLD-03, HOLD-07 | Row items (VC17-*) | `13-§9-7`, `13-§17-4`, `13-§17-9`, `13-§17-10` |

### 7.16 Privacy and Data Minimization (EIS Section 21)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-PRIV-01` | `EIS17-PRIV-01` | POS field allowlist and operator-field exclusion | TR | `BUILD — DEPENDENCY GATED` | WS17-C, WS17-D | HOLD-01, HOLD-07, HOLD-20 | NP-31 | `13-§4-7`, `13-§18-3` |
| `EC17-PRIV-02` | `EIS17-PRIV-02` | Default non-attribution under U-11; indirect identification | UQ | `BUILD — HELD (U-11)` | WS17-C, WS17-D, WS17-E, WS17-F | HOLD-01, HOLD-07, HOLD-20 | NP-31 | `13-§4-7`, `13-§13-3`, `13-§17-8`, `13-§18-2`, `13-§18-3`, `17-§18-5` |
| `EC17-PRIV-03` | `EIS17-PRIV-03` | Retention not invented | UQ | `BUILD — OPEN, FAIL-CLOSED` | WS17-D, WS17-F | HOLD-01, HOLD-07, HOLD-20 | Row items (VC17-*) | `13-§17-12`, `13-§18-3` |

### 7.17 Database Security and Birth-Safe Objects (EIS Section 22)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-SEC-01` | `EIS17-SEC-01` | Birth-safe objects | TR | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-E, WS17-F | HOLD-01, HOLD-03 | NP-33 | `7-§12-8`, `13-§18-4`, `17-§23-3`, `BP-§6.3-1` |
| `EC17-SEC-02` | `EIS17-SEC-02` | Commands as the write boundary | AF | `BUILD — DEPENDENCY GATED` | WS17-E, WS17-F | HOLD-01, HOLD-02, HOLD-04 | NP-33 | `17-§23-3`, `BP-§6.2-1` |
| `EC17-SEC-03` | `EIS17-SEC-03` | Effective-access verification | AF | `BUILD — DEPENDENCY GATED` | WS17-D, WS17-E | HOLD-01 | NP-33 | `13-§18-4`, `17-§19-2` |
| `EC17-SEC-04` | `EIS17-SEC-04` | Upstream anon-grant gate | AF | `BUILD — DEPENDENCY GATED` | WS17-F | HOLD-03 | Row items (VC17-*) | `BP-§6.3-1` |

### 7.18 Migration Design (Design Only; Not Executed) (EIS Section 23)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-MIG-01` | `EIS17-MIG-01` | Classes M17-1 to M17-9; install versus activate | TR | `MIGRATION-DESIGN` | WS17-A, WS17-F | HOLD-01, HOLD-03, HOLD-07 | Row items (VC17-*) | `7-§2-9`, `7-§2-12`, `13-§17-4`, `BP-§5.3-1` |
| `EC17-MIG-02` | `EIS17-MIG-02` | Additive, live-safe, no reinterpretation | TR | `MIGRATION-DESIGN` | WS17-A | HOLD-01, HOLD-03 | Row items (VC17-*) | `7-§2-3`, `7-§2-12`, `7-§3-4` |
| `EC17-MIG-03` | `EIS17-MIG-03` | Rollback and forward-fix boundaries | TR | `MIGRATION-DESIGN` | WS17-F | — | Row items (VC17-*) | `BP-§5.3-1` |
| `EC17-MIG-04` | `EIS17-MIG-04` | No execution; fresh rehearsal environment | PR | `MIGRATION-DESIGN` | WS17-F | HOLD-03 | Row items (VC17-*) | `BP-§5.3-1`, `BP-§6.3-1` |
| `EC17-MIG-05` | `EIS17-MIG-05` | Type synchronization and compatibility | TR | `MIGRATION-DESIGN` | WS17-E | — | Row items (VC17-*) | `17-§16-3` |

### 7.19 Verification Contract (EIS Section 24)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-VER-01` | `EIS17-VER-01` | Runtime tests (RT) | PR | `VERIFICATION` | WS17-A, WS17-B, WS17-C, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-06, HOLD-07, HOLD-08, HOLD-09, HOLD-10, HOLD-11, HOLD-12, HOLD-13, HOLD-14 | Row items (VC17-*) | 219 rows (Section 10) |
| `EC17-VER-02` | `EIS17-VER-02` | Negative tests (NEG) | PR | `VERIFICATION` | WS17-A, WS17-B, WS17-C, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-08, HOLD-09, HOLD-10, HOLD-13 | Row items (VC17-*) | 109 rows (Section 10) |
| `EC17-VER-03` | `EIS17-VER-03` | Design inspection (INSP) | PR | `VERIFICATION` | WS17-A, WS17-B, WS17-C, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-06, HOLD-07, HOLD-09, HOLD-10, HOLD-13 | Row items (VC17-*) | 102 rows (Section 10) |
| `EC17-VER-04` | `EIS17-VER-04` | Replay tests (IDEM) | PR | `VERIFICATION` | WS17-A, WS17-C, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07 | Row items (VC17-*) | `7-§6-4b`, `7-§6-5b`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§13-1`, `7-§13-11`, `7-§15-2b`, `13-§4-3`, `13-§6-1`, `13-§6-2`, `13-§6-3`, `13-§6-4`, `13-§6-5`, `13-§6-6`, `13-§16-2`, `13-§16-5`, `13-§17-6`, `13-§21-2`, `3-§15-10`, `3-§15-11` |
| `EC17-VER-05` | `EIS17-VER-05` | Experience review (EXP) | PR | `VERIFICATION` | WS17-A, WS17-C, WS17-D, WS17-E, WS17-G | HOLD-01, HOLD-03, HOLD-07 | Row items (VC17-*) | 44 rows (Section 10) |
| `EC17-VER-06` | `EIS17-VER-06` | Founder Runtime Verification A | FC | `VERIFICATION — FOUNDER-RESERVED` | WS17-A, WS17-B, WS17-E, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-10, HOLD-11, HOLD-13 | RS-01 | `7-§2-6`, `7-§4-1`, `7-§4-2`, `7-§4-3`, `7-§4-4`, `7-§4-5`, `7-§4-6`, `7-§5-1`, `7-§5-2`, `7-§11-1.3`, `7-§15-7`, `17-§7-6`, `10-§13-6`, `24-§18-3`, `BP-§10.6-A1`, `BP-§10.6-A2`, `BP-§10.6-A3`, `BP-§10.6-A4` |
| `EC17-VER-07` | `EIS17-VER-07` | Founder Runtime Verification B | FC | `VERIFICATION — FOUNDER-RESERVED` | WS17-C, WS17-D, WS17-E, WS17-G | HOLD-01, HOLD-03, HOLD-07 | RS-02 | `13-§8-1`, `13-§8-2`, `13-§8-3`, `13-§8-4`, `13-§8-5`, `13-§8-6`, `13-§8-7`, `13-§8-8`, `13-§8-9`, `13-§8-10`, `13-§21-5`, `17-§8-3`, `17-§8-6`, `BP-§10.6-E1`, `BP-§10.6-E2`, `BP-§10.6-B1`, `BP-§10.6-B2` |
| `EC17-VER-08` | `EIS17-VER-08` | Completion gates and Experience Verification Matrix | PR | `VERIFICATION` | WS17-A, WS17-C, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07 | Row items (VC17-*) | `7-§18-1`, `13-§24-1`, `17-§25-1`, `BP-§13-1`, `BP-§13-9`, `GPCV-R7`, `GPCV-R13`, `GPCV-R17` |
| `EC17-VER-09` | `EIS17-VER-09` | Scenario tests (SCN) | PR | `VERIFICATION` | WS17-B, WS17-D, WS17-E, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-10, HOLD-13 | Row items (VC17-*) | 39 rows (Section 10) |
| `EC17-VER-10` | `EIS17-VER-10` | CI tiers | TR | `VERIFICATION` | WS17-E, WS17-F | — | Row items (VC17-*) | `17-§16-3`, `BP-§5.3-1` |
| `EC17-VER-11` | `EIS17-VER-11` | Closing decision-table tests | PR | `VERIFICATION` | WS17-D, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07 | Row items (VC17-*) | `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8`, `13-§21-7` |
| `EC17-VER-12` | `EIS17-VER-12` | Inventory regression | AF | `VERIFICATION` | WS17-A | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-06, HOLD-07, HOLD-09 | Row items (VC17-*) | `7-§1-1`, `7-§1-2`, `7-§2-1`, `7-§2-2`, `7-§2-3`, `7-§2-4`, `7-§2-5`, `7-§2-10`, `7-§2-11`, `7-§2-12`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§8-4`, `7-§8-5`, `7-§9-1`, `7-§9-2`, `7-§9-3`, `3-§15-10`, `BP-§10.6-W11`, `BP-§10.6-E3`, `BP-§11-7`, `GPCV-R7` |

### 7.20 Must-Not Checks (EIS Section 25)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-NEG-01` | `EIS17-NEG-01` | Must-not rows enforced below the UI | PR | `GOVERNANCE` | WS17-A, WS17-B, WS17-C, WS17-D, WS17-E, WS17-F | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07 | NP-37 | 66 rows (Section 10) |
| `EC17-NEG-02` | `EIS17-NEG-02` | Rejected approaches stay out | PR | `GOVERNANCE` | WS17-A, WS17-E, WS17-F | HOLD-01, HOLD-02 | NP-37 | `7-§16-1`, `7-§16-2`, `7-§16-3`, `7-§16-4`, `7-§16-5`, `7-§16-6`, `13-§20-1`, `13-§20-2`, `13-§20-3`, `13-§20-4`, `13-§20-5`, `13-§20-6`, `13-§20-7`, `13-§22-1`, `13-§22-2`, `13-§22-3`, `13-§22-4`, `13-§22-5`, `17-§21-1`, `17-§21-2`, `17-§21-3`, `17-§21-5`, `17-§23-2`, `17-§23-3`, `17-§23-4` |

### 7.21 Optional Implementation Approaches (`17:FPDR-7`) (EIS Section 26)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-OPT-01` | `EIS17-OPT-01` | Permissive examples are optional | FC | `BUILD — OPTIONAL (17:FPDR-7)` | WS17-A, WS17-D, WS17-E | HOLD-01, HOLD-03, HOLD-05, HOLD-06, HOLD-07, HOLD-09, HOLD-14 | Row items (VC17-*) | `7-§3-5`, `7-§3-8`, `13-§8-3`, `13-§8-4`, `13-§8-5`, `13-§8-7`, `17-§4-1`, `17-§4-2`, `17-§4-3`, `17-§4-5`, `17-§4-13`, `17-§4-14`, `17-§6-1`, `17-§6-2`, `17-§6-3`, `17-§6-4`, `17-§6-5`, `17-§6-6`, `17-§15-2`, `17-§15-3`, `17-§15-5`, `17-§15-6`, `17-§15-7` |

### 7.22 Holds and Dependency Gates (EIS Section 27)

| Obligation | Realizes | Title | Basis | Type | Workstreams | Retained holds | Verification | FCTM rows |
|---|---|---|---|---|---|---|---|---|
| `EC17-HOLD-01` | `EIS17-HOLD-01` | `D12` gate | UQ | `GATE` | WS17-A, WS17-B, WS17-C, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-06, HOLD-07, HOLD-09, HOLD-10, HOLD-11, HOLD-13, HOLD-14 | Row items (VC17-*) | 214 rows (Section 10) |
| `EC17-HOLD-02` | `EIS17-HOLD-02` | `D13` gate | UQ | `GATE` | WS17-A, WS17-B, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-10, HOLD-11, HOLD-12, HOLD-13 | Row items (VC17-*) | 49 rows (Section 10) |
| `EC17-HOLD-03` | `EIS17-HOLD-03` | `D14` gate | UQ | `GATE` | WS17-A, WS17-B, WS17-C, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-04, HOLD-05, HOLD-06, HOLD-07, HOLD-13 | Row items (VC17-*) | 118 rows (Section 10) |
| `EC17-HOLD-04` | `EIS17-HOLD-04` | `DTX` gate | UQ | `GATE` | WS17-A, WS17-C, WS17-D, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 | Row items (VC17-*) | `7-§2-10`, `7-§3-7`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§8-5`, `13-§4-8`, `13-§6-6`, `13-§10-4`, `13-§21-2`, `3-§15-10`, `3-§15-11`, `BP-§6.2-1` |
| `EC17-HOLD-05` | `EIS17-HOLD-05` | `D15` gate | UQ | `GATE` | WS17-B, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-10, HOLD-13 | Row items (VC17-*) | 37 rows (Section 10) |
| `EC17-HOLD-06` | `EIS17-HOLD-06` | `D16` gate | UQ | `GATE` | WS17-A, WS17-E | HOLD-01, HOLD-03, HOLD-04, HOLD-14 | Row items (VC17-*) | `7-§3-7`, `7-§8-5`, `17-§4-3`, `17-§6-3`, `17-§6-5` |
| `EC17-HOLD-07` | `EIS17-HOLD-07` | `DPOS` gate | UQ | `GATE` | WS17-A, WS17-C, WS17-D, WS17-E, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-08 | Row items (VC17-*) | 101 rows (Section 10) |
| `EC17-HOLD-08` | `EIS17-HOLD-08` | `DSEC` gate | UQ | `GATE` | WS17-F | HOLD-07 | Row items (VC17-*) | `13-§16-8` |
| `EC17-HOLD-09` | `EIS17-HOLD-09` | `DENT` gate | UQ | `GATE` | WS17-A, WS17-E | HOLD-01 | Row items (VC17-*) | `7-§9-2`, `17-§4-8`, `17-§6-7`, `17-§15-3` |
| `EC17-HOLD-10` | `EIS17-HOLD-10` | `DSCH` gate | UQ | `GATE` | WS17-B, WS17-D, WS17-F, WS17-G | HOLD-01, HOLD-02, HOLD-05, HOLD-13 | Row items (VC17-*) | `7-§5-2`, `7-§12-4`, `7-§15-8`, `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `24-§18-3`, `BP-§6.5-1`, `BP-§10.6-W6` |
| `EC17-HOLD-11` | `EIS17-HOLD-11` | `DAI` gate | UQ | `GATE` | WS17-B, WS17-E | HOLD-01, HOLD-02 | Row items (VC17-*) | `7-§11-1.1`, `7-§11-1.2`, `7-§11-1.3`, `7-§11-1.4`, `7-§11-1.5`, `7-§11-1.6`, `13-§14-1a`, `9-§12-8` |
| `EC17-HOLD-12` | `EIS17-HOLD-12` | `DV` gate | UQ | `GATE` | WS17-B, WS17-E | HOLD-02 | Row items (VC17-*) | `12-§4-4`, `12-§7-7` |
| `EC17-HOLD-13` | `EIS17-HOLD-13` | `DNTF` gate | UQ | `GATE` | WS17-A, WS17-B, WS17-E, WS17-F | HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-10 | Row items (VC17-*) | `7-§3-6`, `7-§5-1`, `7-§12-7`, `7-§13-8`, `13-§19-10`, `17-§7-7`, `24-§18-3` |
| `EC17-HOLD-14` | `EIS17-HOLD-14` | `DPAY` gate | UQ | `GATE` | WS17-E | HOLD-01, HOLD-06 | Row items (VC17-*) | `17-§6-5` |
| `EC17-HOLD-15` | `EIS17-HOLD-15` | MC410-R01 POS intake authority | UQ | `GATE` | WS17-C, WS17-F | HOLD-01, HOLD-07, HOLD-08 | Row items (VC17-*) | `13-§4-1`, `13-§16-8`, `13-§17-1`, `BP-§5.4-1` |
| `EC17-HOLD-16` | `EIS17-HOLD-16` | MC410-R02 / GA-03 — Founder policy and Stage 10 normative contract accepted; implementation assurance OPEN | UQ | `GATE` | WS17-C, WS17-G | HOLD-01, HOLD-03, HOLD-04, HOLD-07, HOLD-15 | Row items (VC17-*) | `13-§4-2`, `13-§6-6`, `13-§7-3`, `13-§21-4` |
| `EC17-HOLD-17` | `EIS17-HOLD-17` | EQ17-13 atomic composition | UQ | `GATE` | WS17-A, WS17-F | HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07 | Row items (VC17-*) | `7-§8-1`, `7-§8-2`, `7-§8-3`, `BP-§6.2-1` |
| `EC17-HOLD-18` | `EIS17-HOLD-18` | MC410-R04A dual-domain reversal | UQ | `GATE` | WS17-C, WS17-F | HOLD-03, HOLD-07 | Row items (VC17-*) | `13-§6-3`, `13-§16-6` |
| `EC17-HOLD-19` | `EIS17-HOLD-19` | MC410-R04B — Stage 10 closing integration contract accepted; source/time implementation assurance OPEN | UQ | `GATE` | WS17-D, WS17-F, WS17-G | HOLD-01, HOLD-03, HOLD-07 | Row items (VC17-*) | `13-§10-1`, `13-§16-7`, `13-§21-7` |
| `EC17-HOLD-20` | `EIS17-HOLD-20` | U-11 operator data | UQ | `GATE` | WS17-C, WS17-D, WS17-E, WS17-F | HOLD-01, HOLD-07 | Row items (VC17-*) | `13-§4-7`, `13-§13-3`, `13-§17-8`, `13-§18-3`, `17-§18-5` |
| `EC17-HOLD-21` | `EIS17-HOLD-21` | SA-04 POS assurance and real-source dossier | UQ | `GATE` | WS17-C, WS17-G | HOLD-07 | Row items (VC17-*) | `13-§5-6`, `BP-§10.6-W7`, `BP-§10.6-B1` |
| `EC17-HOLD-22` | `EIS17-HOLD-22` | T6 authority DELEGATED by Founder MC-507CM; calibration and T6 screening PENDING; T8 WATCH (not established) | UQ | `GATE` | WS17-A, WS17-G | HOLD-01, HOLD-03, HOLD-07 | Row items (VC17-*) | `7-§2-6`, `BP-§10.6-B1`, `BP-§10.6-B2` |
| `EC17-HOLD-23` | `EIS17-HOLD-23` | U-03 closing cadence — Founder policy decided (MC-507CG); downstream assurance OPEN | UQ | `GATE` | WS17-D | HOLD-01, HOLD-03, HOLD-04, HOLD-07, HOLD-19 | Row items (VC17-*) | `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8` |

## 8. Founder Decisions and Rulings Realized

| Decision | Obligations |
|---|---|
| `17:FPDR-1` Manager delegation | EC17-AUTH-02, EC17-RO-03, EC17-CC-05, EC17-CTR-06 |
| `17:FPDR-2` POS bridge | EC17-POS-01, EC17-POS-04, EC17-POS-11, EC17-VER-07 |
| `17:FPDR-3` merchant-sent requests | EC17-RO-04, EC17-SUP-05 |
| `17:FPDR-4` cost-protected prices | EC17-SUP-03, EC17-AUTH-03 |
| `17:FPDR-5` historical attribution | EC17-SUP-04 |
| `17:FPDR-6` Owner-confirmed thresholds | EC17-SIG-01, EC17-SIG-02 |
| `17:FPDR-7` optional examples | EC17-OPT-01 |
| MC-499 GA-03 Option A | EC17-TXN-09, EC17-HOLD-16 |
| MC-507R A1 POS intake | EC17-POS-02, EC17-HOLD-15 |
| MC-507CG daily closing and float | EC17-CC-01, EC17-CC-03 to EC17-CC-06, EC17-HOLD-19, EC17-HOLD-23 |
| MC-507CM calibration delegation | EC17-SIG-02, EC17-HOLD-22 |
| MC-507BT upstream composite and reversal contract (GA-04, GA-05) | EC17-TXN-03, EC17-TXN-06, EC17-TXN-07, EC17-HOLD-17, EC17-HOLD-18 |

## 9. Integrity Checks

| Check | Result |
|---|---|
| Obligations (one per locked EIS requirement) | 157 / 157 |
| `IN SCOPE` rows covered by at least one obligation | 404 / 404 |
| Missing / extra / non-`IN SCOPE` rows | 0 / 0 / 0 |
| Obligations without rows (orphans) | 0 |
| Row-to-obligation links | 3040 |
| Obligations per row (min / max) | 3 / 14 |
| Product behaviour or permission added beyond the EIS | None (one-to-one realization) |

## 10. FCTM Row to Obligation (404 rows)

| # | FCTM row | Kind | Workstream | Stage 7 status | Obligations (`EC17-`) |
|---|---|---|---|---|---|
| 1 | `7-§1-1` | EXP | WS17-A | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, STK-01, STK-07, VER-05, VER-12 |
| 2 | `7-§1-2` | PRIN | WS17-A | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, STK-01, STK-07, VER-05, VER-12 |
| 3 | `7-§2-1` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-06, VER-01, VER-12, HOLD-01 |
| 4 | `7-§2-2` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-04, VER-01, VER-12, HOLD-01, HOLD-03 |
| 5 | `7-§2-3` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-02, STK-07, MIG-02, VER-01, VER-12, HOLD-01, HOLD-03 |
| 6 | `7-§2-4` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-08, VER-01, VER-12, HOLD-03 |
| 7 | `7-§2-5` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-05, TXN-06, AUD-01, VER-01, VER-12, HOLD-01, HOLD-03 |
| 8 | `7-§2-6` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SIG-01, SIG-02, SIG-03, VER-01, VER-06, HOLD-01, HOLD-03, HOLD-22 |
| 9 | `7-§2-7` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-03, SIG-03, SIG-04, VER-01, HOLD-03 |
| 10 | `7-§2-8` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SIG-03, VER-01, HOLD-01, HOLD-03 |
| 11 | `7-§2-9` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-02, SIG-03, SIG-04, MIG-01, VER-01, HOLD-01, HOLD-03 |
| 12 | `7-§2-10` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-06, TXN-03, TXN-04, VER-01, VER-12, HOLD-01, HOLD-03, HOLD-04 |
| 13 | `7-§2-11` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-07, VER-01, VER-12, HOLD-01, HOLD-02 |
| 14 | `7-§2-12` | RULE | WS17-A | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, STK-01, STK-02, STK-03, STK-04, MIG-01, MIG-02, VER-03, VER-12 |
| 15 | `7-§3-1` | RULE | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, AUTH-01, VER-01, HOLD-01 |
| 16 | `7-§3-2` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, AUTH-01, VER-01, HOLD-01 |
| 17 | `7-§3-3` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-02, AUTH-01, VER-01, HOLD-01 |
| 18 | `7-§3-4` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-04, AUTH-01, MIG-02, VER-01, HOLD-01, HOLD-03 |
| 19 | `7-§3-5` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-03, AUTH-01, AUTH-03, VER-01, OPT-01, HOLD-01, HOLD-03 |
| 20 | `7-§3-6` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-05, RO-04, AUTH-01, VER-01, HOLD-01, HOLD-13 |
| 21 | `7-§3-7` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-06, TXN-03, TXN-10, AUTH-01, WS-11, VER-01, HOLD-01, HOLD-03, HOLD-04, HOLD-06 |
| 22 | `7-§3-8` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-02, AUTH-01, VER-01, OPT-01, HOLD-01 |
| 23 | `7-§3-9` | NEG | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-07, AUTH-01, VER-02, NEG-01, HOLD-01 |
| 24 | `7-§4-1` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| 25 | `7-§4-2` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| 26 | `7-§4-3` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| 27 | `7-§4-4` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, SIG-01, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| 28 | `7-§4-5` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, SUP-03, RO-01, AUTH-01, AUTH-03, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| 29 | `7-§4-6` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, STK-03, RO-01, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| 30 | `7-§4-7` | NEG | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-02, AUTH-01, VER-02, NEG-01, HOLD-01, HOLD-02, HOLD-03 |
| 31 | `7-§5-1` | RULE | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-03, RO-04, AUTH-01, AUTH-02, VER-01, VER-02, VER-06, HOLD-01, HOLD-02, HOLD-13 |
| 32 | `7-§5-2` | RULE | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-05, CC-04, AUTH-01, FLR-03, VER-01, VER-02, VER-06, HOLD-01, HOLD-05, HOLD-10 |
| 33 | `7-§5-3` | NEG | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-05, AUTH-01, FLR-03, VER-02, NEG-01, HOLD-01, HOLD-05 |
| 34 | `7-§5-4` | RULE | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-05, AUTH-01, FLR-03, VER-02, VER-03, HOLD-01, HOLD-05 |
| 35 | `7-§6-1` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, DOC-01, VER-01, HOLD-01, HOLD-03 |
| 36 | `7-§6-3` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, DOC-01, DOC-04, VER-01, HOLD-01, HOLD-03 |
| 37 | `7-§6-4b` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, DOC-01, DOC-02, TXN-02, VER-01, VER-04, HOLD-01, HOLD-03 |
| 38 | `7-§6-5b` | NEG | WS17-F | DEPENDENCY-HELD | ARC-01, DOC-01, DOC-02, TXN-02, VER-02, VER-04, NEG-01, HOLD-03 |
| 39 | `7-§7-1` | OBL | WS17-C | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-01, POS-09, VER-01 |
| 40 | `7-§7-2` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-07, POS-11, POS-12, VER-01, HOLD-07 |
| 41 | `7-§7-3` | NEG | WS17-C | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-01, POS-10, VER-02, VER-03, NEG-01 |
| 42 | `7-§7-4` | RULE | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, TXN-08, VER-01, VER-03, HOLD-03, HOLD-07 |
| 43 | `7-§8-1` | RULE | WS17-A | DEPENDENCY-HELD | ARC-01, ARC-04, STK-01, TXN-02, TXN-03, TXN-04, VER-03, VER-04, VER-12, HOLD-03, HOLD-04, HOLD-17 |
| 44 | `7-§8-2` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-02, TXN-02, TXN-03, TXN-10, VER-01, VER-04, VER-12, HOLD-03, HOLD-04, HOLD-17 |
| 45 | `7-§8-3` | OBL | WS17-A | SOURCE-HELD | ARC-01, STK-01, STK-02, POS-11, TXN-02, TXN-03, TXN-09, VER-01, VER-04, VER-12, HOLD-03, HOLD-04, HOLD-07, HOLD-17 |
| 46 | `7-§8-4` | NEG | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-05, VER-02, VER-12, NEG-01, HOLD-03 |
| 47 | `7-§8-5` | RULE | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, SUP-06, TXN-03, TXN-10, WS-11, VER-01, VER-03, VER-12, HOLD-03, HOLD-04, HOLD-06 |
| 48 | `7-§9-1` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, VER-01, VER-12, HOLD-01 |
| 49 | `7-§9-2` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, WS-10, VER-01, VER-12, HOLD-01, HOLD-09 |
| 50 | `7-§9-3` | NEG | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, VER-02, VER-03, VER-12, NEG-01, HOLD-01 |
| 51 | `7-§11-1.1` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, STK-07, RO-01, RO-07, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| 52 | `7-§11-1.2` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, SIG-02, SIG-03, RO-01, RO-07, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| 53 | `7-§11-1.3` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-07, AUTH-01, AI-04, VER-01, VER-06, HOLD-01, HOLD-02, HOLD-11 |
| 54 | `7-§11-1.4` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, SUP-02, RO-01, RO-07, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| 55 | `7-§11-1.5` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-07, CTR-02, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| 56 | `7-§11-1.6` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-07, AUTH-01, AI-04, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| 57 | `7-§11-2.1` | NEG | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-02, AUTH-01, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| 58 | `7-§11-2.2` | NEG | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, CTR-02, AUTH-01, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| 59 | `7-§11-2.3` | NEG | WS17-B | DEPENDENCY-HELD | ARC-01, STK-05, RO-01, AUTH-01, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| 60 | `7-§11-2.4` | NEG | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-03, AUTH-01, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| 61 | `7-§11-2.5` | NEG | WS17-B | DEPENDENCY-HELD | ARC-01, SUP-07, RO-01, AUTH-01, AUTH-04, AI-04, AI-05, VER-02, NEG-01, HOLD-01, HOLD-02 |
| 62 | `7-§12-1` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, STK-01, STK-06, AUD-01, VER-03, HOLD-01 |
| 63 | `7-§12-2` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AUD-01, VER-03, HOLD-03 |
| 64 | `7-§12-3` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AUTH-01, AUD-01, AUD-02, VER-03, HOLD-01 |
| 65 | `7-§12-4` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, RO-06, CC-04, FLR-03, AUD-01, VER-03, HOLD-05, HOLD-10 |
| 66 | `7-§12-5` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, SUP-01, AUD-01, VER-03, HOLD-01 |
| 67 | `7-§12-6` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, DOC-01, AUD-01, VER-03, HOLD-03 |
| 68 | `7-§12-7` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AI-01, FLR-03, AUD-01, VER-03, HOLD-02, HOLD-05, HOLD-13 |
| 69 | `7-§12-8` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, ARC-04, TXN-01, AUD-01, SEC-01, VER-03, HOLD-01 |
| 70 | `7-§12-9` | RULE | WS17-F | SOURCE-HELD | ARC-01, ARC-02, ARC-03, POS-11, AUD-01, VER-03, HOLD-07 |
| 71 | `7-§13-1` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, DOC-02, TXN-02, FLR-01, AUD-01, VER-04, HOLD-01, HOLD-03 |
| 72 | `7-§13-2` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, POS-06, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| 73 | `7-§13-3` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, POS-06, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| 74 | `7-§13-4` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, STK-04, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| 75 | `7-§13-5` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, STK-09, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| 76 | `7-§13-6` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, STK-05, TXN-06, TXN-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| 77 | `7-§13-7` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, RO-02, FLR-01, FLR-02, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| 78 | `7-§13-8` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, RO-04, FLR-01, FLR-02, AUD-01, VER-01, VER-02, HOLD-03, HOLD-13 |
| 79 | `7-§13-9` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, TXN-08, FLR-01, AUD-01, VER-01, VER-02, HOLD-03, HOLD-07 |
| 80 | `7-§13-10` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, DOC-02, FLR-01, AUD-01, VER-01, VER-02, HOLD-03 |
| 81 | `7-§13-11` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, TXN-02, TXN-05, FLR-01, FLR-03, AUD-01, VER-04, HOLD-01, HOLD-03 |
| 82 | `7-§13-12` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, RO-05, AUTH-06, FLR-01, FLR-03, AUD-01, VER-01, VER-02, HOLD-01, HOLD-05 |
| 83 | `7-§13-13` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, STK-09, TXN-12, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-03 |
| 84 | `7-§14-1` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-02, VER-02, VER-05 |
| 85 | `7-§14-2` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-02, VER-02, VER-05, NEG-01 |
| 86 | `7-§15-1` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, STK-07, STK-08, VER-01, VER-09, HOLD-01, HOLD-03 |
| 87 | `7-§15-2b` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, DOC-02, TXN-02, VER-01, VER-04, VER-09, HOLD-01, HOLD-03 |
| 88 | `7-§15-3` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, STK-05, VER-01, VER-09, HOLD-01, HOLD-03 |
| 89 | `7-§15-4` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, SIG-01, SIG-03, VER-01, VER-09, HOLD-01, HOLD-03 |
| 90 | `7-§15-5` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, SIG-03, SIG-04, VER-01, VER-09, HOLD-01, HOLD-03 |
| 91 | `7-§15-6` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, SUP-04, VER-01, VER-09, HOLD-01 |
| 92 | `7-§15-7` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, RO-01, RO-03, VER-01, VER-06, VER-09, HOLD-01, HOLD-02 |
| 93 | `7-§15-8` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, RO-05, CC-04, FLR-03, VER-01, VER-02, VER-09, HOLD-01, HOLD-05, HOLD-10 |
| 94 | `7-§15-9` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-11, POS-12, VER-01, VER-03, VER-09, HOLD-07 |
| 95 | `7-§15-11` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, CTR-02, VER-02, VER-05, VER-09, HOLD-01, HOLD-03 |
| 96 | `7-§16-1` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUD-01, VER-02, NEG-01, NEG-02 |
| 97 | `7-§16-2` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, STK-01, AUD-01, VER-02, NEG-01, NEG-02 |
| 98 | `7-§16-3` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-10, AUD-01, VER-02, NEG-01, NEG-02 |
| 99 | `7-§16-4` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-02, AUD-01, VER-02, NEG-01, NEG-02 |
| 100 | `7-§16-5` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, TXN-08, AUD-01, VER-02, NEG-01, NEG-02 |
| 101 | `7-§16-6` | NEG | WS17-A | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, SIG-01, SIG-02, SIG-03, VER-02, NEG-01, NEG-02 |
| 102 | `7-§18-1` | GATE | WS17-G | SOURCE-HELD | ARC-01, POS-11, FLR-03, VER-08, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07 |
| 103 | `13-§1-1` | EXP | WS17-C | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-01, POS-12, VER-05 |
| 104 | `13-§1-2` | EXP | WS17-C | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-01, POS-12, VER-05 |
| 105 | `13-§2-6` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-02, VER-05 |
| 106 | `13-§3-1` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-10, CTR-01, VER-03, VER-05 |
| 107 | `13-§3-2` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-10, CTR-01, VER-03, VER-05 |
| 108 | `13-§3-3` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-02, VER-03, VER-05 |
| 109 | `13-§3-4` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-02, VER-03, VER-05 |
| 110 | `13-§3-5` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-04, VER-03, VER-05 |
| 111 | `13-§3-6` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-07, AUD-01, VER-03, VER-05 |
| 112 | `13-§3-7` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-10, CTR-01, VER-02, VER-03, NEG-01 |
| 113 | `13-§4-1` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-02, POS-11, VER-01, HOLD-07, HOLD-15 |
| 114 | `13-§4-2` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-05, POS-11, TXN-09, VER-01, HOLD-07, HOLD-16 |
| 115 | `13-§4-3` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-05, POS-11, TXN-02, VER-01, VER-04, HOLD-07 |
| 116 | `13-§4-4` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-06, POS-11, VER-01, HOLD-01, HOLD-07 |
| 117 | `13-§4-5` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-04, POS-11, VER-01, HOLD-07 |
| 118 | `13-§4-6` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-04, POS-11, VER-01, HOLD-07 |
| 119 | `13-§4-7` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-04, POS-11, CTR-06, PRIV-01, PRIV-02, VER-01, HOLD-01, HOLD-07, HOLD-20 |
| 120 | `13-§4-8` | OBL | WS17-C | SOURCE-HELD | ARC-01, STK-02, POS-01, POS-07, POS-11, TXN-03, VER-01, HOLD-03, HOLD-04, HOLD-07 |
| 121 | `13-§4-9` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, POS-12, VER-01, HOLD-07 |
| 122 | `13-§4-10` | RULE | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-08, POS-11, VER-03, HOLD-03, HOLD-07 |
| 123 | `13-§5-1` | NEG | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-10, POS-11, VER-02, VER-03, NEG-01, HOLD-07 |
| 124 | `13-§5-2` | RULE | WS17-C | SOURCE-HELD | ARC-01, ARC-06, POS-01, POS-11, VER-03, HOLD-07 |
| 125 | `13-§5-3` | RULE | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-02, POS-11, VER-03, HOLD-07 |
| 126 | `13-§5-4` | RULE | WS17-C | SOURCE-HELD | ARC-01, ARC-03, POS-01, POS-11, VER-03, HOLD-07 |
| 127 | `13-§5-5` | RULE | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-04, POS-11, VER-03, HOLD-07 |
| 128 | `13-§5-6` | RULE | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-04, POS-11, VER-03, HOLD-07, HOLD-21 |
| 129 | `13-§6-1` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, TXN-01, TXN-02, TXN-08, VER-01, VER-04, HOLD-03, HOLD-07 |
| 130 | `13-§6-2` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-05, POS-11, TXN-01, TXN-02, VER-01, VER-04, HOLD-03, HOLD-07 |
| 131 | `13-§6-3` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, TXN-02, TXN-06, VER-01, VER-04, HOLD-03, HOLD-07, HOLD-18 |
| 132 | `13-§6-4` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, TXN-02, VER-01, VER-04, HOLD-03, HOLD-07 |
| 133 | `13-§6-5` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, TXN-01, TXN-02, VER-01, VER-04, HOLD-03, HOLD-07 |
| 134 | `13-§6-6` | NEG | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, TXN-02, TXN-03, TXN-09, VER-02, VER-04, NEG-01, HOLD-03, HOLD-04, HOLD-07, HOLD-16 |
| 135 | `13-§7-1` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-06, POS-07, POS-11, VER-01, HOLD-01, HOLD-07 |
| 136 | `13-§7-2` | OBL | WS17-C | SOURCE-HELD | ARC-01, STK-04, POS-01, POS-07, POS-11, VER-01, HOLD-03, HOLD-07 |
| 137 | `13-§7-3` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-07, POS-11, TXN-09, VER-01, HOLD-03, HOLD-07, HOLD-16 |
| 138 | `13-§7-4` | OBL | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-07, POS-11, VER-01, HOLD-03, HOLD-07 |
| 139 | `13-§7-5` | RULE | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, TXN-08, VER-01, VER-02, HOLD-03, HOLD-07 |
| 140 | `13-§8-1` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, VER-01, VER-07, HOLD-07 |
| 141 | `13-§8-2` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, VER-01, VER-07, HOLD-07 |
| 142 | `13-§8-3` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, VER-01, VER-07, OPT-01, HOLD-07 |
| 143 | `13-§8-4` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, VER-01, VER-07, OPT-01, HOLD-07 |
| 144 | `13-§8-5` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, VER-01, VER-07, OPT-01, HOLD-07 |
| 145 | `13-§8-6` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, VER-01, VER-07, HOLD-03, HOLD-07 |
| 146 | `13-§8-7` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, VER-01, VER-07, OPT-01, HOLD-07 |
| 147 | `13-§8-8` | RULE | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, CTR-02, VER-05, VER-07, HOLD-07 |
| 148 | `13-§8-9` | EXP | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-02, VER-05, VER-07 |
| 149 | `13-§8-10` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-02, VER-02, VER-07, NEG-01 |
| 150 | `13-§9-1` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-03, VER-05 |
| 151 | `13-§9-2` | SCN | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| 152 | `13-§9-3` | SCN | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| 153 | `13-§9-4` | SCN | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| 154 | `13-§9-5` | SCN | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| 155 | `13-§9-6` | SCN | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-07 |
| 156 | `13-§9-7` | OBL | WS17-D | DEPENDENCY-HELD | ARC-01, CTR-01, CTR-03, AUD-03, VER-01, VER-02, HOLD-01, HOLD-03 |
| 157 | `13-§10-1` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CC-01, CC-02, CC-03, VER-01, VER-11, HOLD-03, HOLD-07, HOLD-19, HOLD-23 |
| 158 | `13-§10-2` | OBL | WS17-D | SOURCE-HELD | ARC-01, POS-11, CC-01, CC-02, VER-01, VER-11, HOLD-03, HOLD-07, HOLD-23 |
| 159 | `13-§10-3` | OBL | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-02, CC-04, VER-01, VER-11, HOLD-01, HOLD-03, HOLD-23 |
| 160 | `13-§10-4` | OBL | WS17-D | DEPENDENCY-HELD | ARC-01, TXN-03, CC-01, CC-02, CC-03, CC-04, VER-01, VER-11, HOLD-03, HOLD-04, HOLD-23 |
| 161 | `13-§10-5` | OBL | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-02, VER-01, VER-11, HOLD-01, HOLD-03, HOLD-23 |
| 162 | `13-§10-6` | OBL | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-02, CC-05, AUTH-02, VER-01, VER-11, HOLD-01, HOLD-23 |
| 163 | `13-§10-7` | OBL | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-02, CC-03, CC-05, VER-01, VER-11, HOLD-01, HOLD-03, HOLD-23 |
| 164 | `13-§10-8` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CC-01, CC-02, CC-05, VER-02, VER-05, VER-11, NEG-01, HOLD-23 |
| 165 | `13-§11-1` | CONS | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, HOLD-05, HOLD-10 |
| 166 | `13-§11-2` | SCN | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| 167 | `13-§11-3` | SCN | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| 168 | `13-§11-4` | SCN | WS17-D | DEPENDENCY-HELD | ARC-01, CTR-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| 169 | `13-§11-5` | SCN | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| 170 | `13-§11-6` | SCN | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-04, CC-07, FLR-03, VER-01, VER-09, HOLD-05, HOLD-10 |
| 171 | `13-§11-7` | NEG | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, CC-07, AUTH-04, FLR-03, VER-02, NEG-01, HOLD-01, HOLD-05 |
| 172 | `13-§12-1` | CONS | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, AI-02, FLR-03, VER-01, HOLD-02, HOLD-05 |
| 173 | `13-§12-2` | SCN | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, AI-02, FLR-03, VER-01, VER-09, HOLD-02, HOLD-05 |
| 174 | `13-§12-3` | SCN | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, AI-02, FLR-03, VER-01, VER-09, HOLD-02, HOLD-05 |
| 175 | `13-§12-4` | SCN | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, AI-02, FLR-03, VER-01, VER-09, HOLD-02, HOLD-05 |
| 176 | `13-§12-5` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, AI-02, AI-04, FLR-03, VER-02, NEG-01, HOLD-01, HOLD-05 |
| 177 | `13-§13-1` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-02, AI-01, VER-01, VER-02, HOLD-01 |
| 178 | `13-§13-2` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-02, AUTH-07, AI-01, VER-01, VER-02, HOLD-01 |
| 179 | `13-§13-3` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, CTR-06, AUTH-01, AUTH-04, AI-01, PRIV-02, VER-02, HOLD-01, HOLD-20 |
| 180 | `13-§13-4` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-05, AI-01, VER-02, NEG-01, HOLD-01 |
| 181 | `13-§14-1a` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, AI-04, AI-06, VER-01, HOLD-01, HOLD-02, HOLD-11 |
| 182 | `13-§14-2` | RULE | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, VER-02, VER-03, HOLD-01, HOLD-02 |
| 183 | `13-§15-1` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| 184 | `13-§15-2` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| 185 | `13-§15-3` | NEG | WS17-D | DEPENDENCY-HELD | ARC-01, CTR-01, CTR-04, VER-02, NEG-01, HOLD-03 |
| 186 | `13-§15-4` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| 187 | `13-§15-5` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| 188 | `13-§15-6` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| 189 | `13-§15-7` | NEG | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-04, VER-02, NEG-01 |
| 190 | `13-§15-8` | RULE | WS17-D | DEPENDENCY-HELD | ARC-01, ARC-04, CTR-01, CTR-04, VER-01, HOLD-01, HOLD-02 |
| 191 | `13-§16-1` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-09, POS-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-07 |
| 192 | `13-§16-2` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, TXN-02, FLR-01, FLR-03, AUD-01, VER-04, HOLD-07 |
| 193 | `13-§16-3` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-06, POS-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-01, HOLD-07 |
| 194 | `13-§16-4` | OBL | WS17-F | SOURCE-HELD | ARC-01, STK-04, POS-06, POS-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-07 |
| 195 | `13-§16-5` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, TXN-02, TXN-07, FLR-01, AUD-01, VER-04, HOLD-07 |
| 196 | `13-§16-6` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, TXN-06, FLR-01, AUD-01, VER-01, VER-02, HOLD-07, HOLD-18 |
| 197 | `13-§16-7` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-09, POS-11, CC-03, FLR-01, AUD-01, VER-01, VER-02, HOLD-07, HOLD-19 |
| 198 | `13-§16-8` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-02, POS-03, POS-11, FLR-01, AUD-01, VER-01, VER-02, HOLD-07, HOLD-08, HOLD-15 |
| 199 | `13-§16-9` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, CC-02, FLR-01, AUD-01, VER-01, VER-02, HOLD-01 |
| 200 | `13-§16-10` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, CC-02, FLR-01, AUD-01, VER-01, VER-02, HOLD-01 |
| 201 | `13-§16-11` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, TXN-08, FLR-01, AUD-01, VER-01, VER-02, HOLD-07 |
| 202 | `13-§16-12` | RULE | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-09, TXN-12, FLR-01, AUD-01, VER-01, VER-02 |
| 203 | `13-§17-1` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-02, POS-11, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07, HOLD-15 |
| 204 | `13-§17-2` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-05, POS-11, TXN-01, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| 205 | `13-§17-3` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-06, POS-11, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| 206 | `13-§17-4` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-05, POS-11, AUD-01, AUD-03, MIG-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| 207 | `13-§17-5` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-05, POS-11, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| 208 | `13-§17-6` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, TXN-01, TXN-02, TXN-05, TXN-11, AUD-01, VER-04, HOLD-01, HOLD-07 |
| 209 | `13-§17-7` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, TXN-04, TXN-06, AUD-01, VER-01, VER-03, HOLD-01, HOLD-07 |
| 210 | `13-§17-8` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, CTR-06, AUD-01, PRIV-02, VER-01, VER-03, HOLD-01, HOLD-07, HOLD-20 |
| 211 | `13-§17-9` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, CTR-07, AUD-01, AUD-03, VER-01, VER-03, HOLD-01, HOLD-07 |
| 212 | `13-§17-10` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, CTR-03, AUD-01, AUD-03, VER-01, VER-03, HOLD-01, HOLD-07 |
| 213 | `13-§17-11` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, CC-01, CC-06, AUD-01, VER-01, VER-03, HOLD-01, HOLD-03 |
| 214 | `13-§17-12` | OBL | WS17-F | SOURCE-HELD | ARC-01, POS-11, CC-06, AUD-01, PRIV-03, VER-01, VER-03, HOLD-01, HOLD-07 |
| 215 | `13-§18-1` | NEG | WS17-D | DEPENDENCY-HELD | ARC-01, CTR-01, CTR-02, VER-02, VER-05, NEG-01, HOLD-01 |
| 216 | `13-§18-2` | NEG | WS17-D | DEPENDENCY-HELD | ARC-01, CTR-01, CTR-02, PRIV-02, VER-02, VER-05, NEG-01, HOLD-01 |
| 217 | `13-§18-3` | NEG | WS17-D | DEPENDENCY-HELD | ARC-01, CTR-01, CTR-06, PRIV-01, PRIV-02, PRIV-03, VER-02, VER-05, NEG-01, HOLD-01, HOLD-20 |
| 218 | `13-§18-4` | NEG | WS17-D | DEPENDENCY-HELD | ARC-01, CTR-01, AUTH-08, SEC-01, SEC-03, VER-02, VER-05, NEG-01, HOLD-01 |
| 219 | `13-§18-5` | PRIN | WS17-D | DEPENDENCY-HELD | ARC-01, CTR-01, CTR-02, VER-02, VER-05, HOLD-01 |
| 220 | `13-§19-1` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AUD-01, VER-03, HOLD-03 |
| 221 | `13-§19-2` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, STK-06, AUD-01, VER-03, HOLD-01 |
| 222 | `13-§19-3` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, STK-01, AUD-01, VER-03, HOLD-01 |
| 223 | `13-§19-4` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AUTH-01, AUD-01, AUD-02, VER-03, HOLD-01 |
| 224 | `13-§19-5` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AI-01, AUD-01, VER-03, HOLD-02 |
| 225 | `13-§19-6` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AI-02, FLR-03, AUD-01, VER-03, HOLD-05 |
| 226 | `13-§19-7` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, WS-09, FLR-03, AUD-01, VER-03, HOLD-05 |
| 227 | `13-§19-8` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, ARC-04, TXN-01, AUD-01, VER-03, HOLD-01 |
| 228 | `13-§19-9` | RULE | WS17-F | SOURCE-HELD | ARC-01, ARC-02, ARC-03, POS-11, AUD-01, VER-03, HOLD-07 |
| 229 | `13-§19-10` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, RO-06, FLR-03, AUD-01, VER-03, HOLD-05, HOLD-13 |
| 230 | `13-§20-1` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-10, AUD-01, VER-02, NEG-01, NEG-02 |
| 231 | `13-§20-2` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-10, AUD-01, VER-02, NEG-01, NEG-02 |
| 232 | `13-§20-3` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-02, AUD-01, VER-02, NEG-01, NEG-02 |
| 233 | `13-§20-4` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-04, AUD-01, VER-02, NEG-01, NEG-02 |
| 234 | `13-§20-5` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-05, AUD-01, VER-02, NEG-01, NEG-02 |
| 235 | `13-§20-6` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-05, AUD-01, VER-02, NEG-01, NEG-02 |
| 236 | `13-§20-7` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-08, AUD-01, VER-02, NEG-01, NEG-02 |
| 237 | `13-§21-1` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-05, POS-11, VER-01, VER-09, HOLD-01, HOLD-07 |
| 238 | `13-§21-2` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-11, TXN-02, TXN-03, VER-04, VER-09, HOLD-03, HOLD-04, HOLD-07 |
| 239 | `13-§21-3` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-07, POS-11, TXN-09, VER-01, VER-09, HOLD-01, HOLD-03, HOLD-07 |
| 240 | `13-§21-4` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-06, POS-11, TXN-09, VER-01, VER-02, VER-09, HOLD-01, HOLD-07, HOLD-16 |
| 241 | `13-§21-5` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-11, CTR-02, VER-01, VER-07, VER-09, HOLD-01, HOLD-07 |
| 242 | `13-§21-6` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, CTR-03, VER-01, VER-09, HOLD-01, HOLD-03 |
| 243 | `13-§21-7` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, CC-02, CC-03, VER-01, VER-09, VER-11, HOLD-01, HOLD-03, HOLD-19 |
| 244 | `13-§21-8` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, AI-02, FLR-03, VER-02, VER-09, HOLD-02, HOLD-05 |
| 245 | `13-§21-9` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, AUTH-04, VER-02, VER-09, HOLD-01 |
| 246 | `13-§21-10` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-09, POS-11, VER-01, VER-09, HOLD-07 |
| 247 | `13-§21-11` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-10, POS-11, VER-03, VER-09, HOLD-07 |
| 248 | `13-§22-1` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-02, AUD-01, VER-02, NEG-01, NEG-02 |
| 249 | `13-§22-2` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-04, AUD-01, VER-02, NEG-01, NEG-02 |
| 250 | `13-§22-3` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, POS-10, AUD-01, VER-02, NEG-01, NEG-02 |
| 251 | `13-§22-4` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-05, AUD-01, VER-02, NEG-01, NEG-02 |
| 252 | `13-§22-5` | NEG | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-05, AUD-01, VER-02, NEG-01, NEG-02 |
| 253 | `13-§24-1` | GATE | WS17-G | SOURCE-HELD | ARC-01, POS-11, FLR-03, VER-08, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07 |
| 254 | `17-§1-1` | EXP | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-08, VER-05 |
| 255 | `17-§1-2` | RULE | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-06, AUTH-01, WS-01, VER-03 |
| 256 | `17-§2-9` | PRIN | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-08, VER-05 |
| 257 | `17-§3-1` | PRIN | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-08, VER-03, VER-05 |
| 258 | `17-§3-2` | PRIN | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-06, AUTH-01, WS-01, WS-08, VER-03, VER-05 |
| 259 | `17-§3-3` | PRIN | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, AUTH-04, WS-01, WS-08, VER-03, VER-05 |
| 260 | `17-§3-4` | PRIN | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-04, WS-01, WS-08, VER-03, VER-05, HOLD-01 |
| 261 | `17-§3-5` | PRIN | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-08, VER-03, VER-05, HOLD-01, HOLD-03 |
| 262 | `17-§3-6` | PRIN | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-07, WS-08, VER-03, VER-05 |
| 263 | `17-§3-7` | PRIN | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-08, VER-03, VER-05 |
| 264 | `17-§4-1` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, VER-01, OPT-01, HOLD-01 |
| 265 | `17-§4-2` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, OPT-01, HOLD-01, HOLD-03 |
| 266 | `17-§4-3` | CONS | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, OPT-01, HOLD-01, HOLD-06 |
| 267 | `17-§4-4` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, HOLD-01, HOLD-03 |
| 268 | `17-§4-5` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, FLR-03, VER-01, OPT-01, HOLD-01, HOLD-05 |
| 269 | `17-§4-6` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-02, WS-01, WS-02, WS-09, FLR-03, VER-01, HOLD-01, HOLD-05 |
| 270 | `17-§4-7` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-09, FLR-03, VER-01, HOLD-01, HOLD-05 |
| 271 | `17-§4-8` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-10, VER-01, HOLD-01, HOLD-09 |
| 272 | `17-§4-9` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01 |
| 273 | `17-§4-10` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01 |
| 274 | `17-§4-11` | OBL | WS17-E | SOURCE-HELD | ARC-01, POS-11, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| 275 | `17-§4-12` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| 276 | `17-§4-13` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| 277 | `17-§4-14` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-03, WS-01, WS-02, VER-01, OPT-01, HOLD-01 |
| 278 | `17-§4-16` | RULE | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-08, VER-03, HOLD-01 |
| 279 | `17-§6-1` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-03, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| 280 | `17-§6-2` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-03, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| 281 | `17-§6-3` | CONS | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, OPT-01, HOLD-01, HOLD-06 |
| 282 | `17-§6-4` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| 283 | `17-§6-5` | CONS | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-11, VER-01, OPT-01, HOLD-01, HOLD-06, HOLD-14 |
| 284 | `17-§6-6` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, VER-01, OPT-01, HOLD-01, HOLD-03 |
| 285 | `17-§6-7` | RULE | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-03, WS-10, VER-02, VER-03, HOLD-01, HOLD-09 |
| 286 | `17-§6-8` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-02, WS-03, VER-02, NEG-01, HOLD-01, HOLD-03 |
| 287 | `17-§7-1` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, STK-07, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| 288 | `17-§7-2` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, SIG-03, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| 289 | `17-§7-3` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, STK-03, SIG-04, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| 290 | `17-§7-4` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, SIG-03, SIG-04, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| 291 | `17-§7-5` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, SUP-05, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03 |
| 292 | `17-§7-6` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, RO-01, AUTH-01, WS-01, WS-02, VER-01, VER-06, HOLD-01, HOLD-03 |
| 293 | `17-§7-7` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, SUP-05, RO-04, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-03, HOLD-13 |
| 294 | `17-§7-8` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, STK-01, AUTH-01, WS-01, WS-02, VER-02, VER-03, NEG-01, HOLD-01, HOLD-03 |
| 295 | `17-§8-1` | OBL | WS17-E | SOURCE-HELD | ARC-01, POS-11, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| 296 | `17-§8-2` | OBL | WS17-E | SOURCE-HELD | ARC-01, POS-11, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| 297 | `17-§8-3` | OBL | WS17-E | SOURCE-HELD | ARC-01, POS-11, CTR-01, AUTH-01, WS-01, WS-02, VER-01, VER-07, HOLD-01, HOLD-07 |
| 298 | `17-§8-4` | OBL | WS17-E | SOURCE-HELD | ARC-01, POS-11, CC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| 299 | `17-§8-5` | OBL | WS17-E | SOURCE-HELD | ARC-01, POS-11, CC-01, AUTH-01, WS-01, WS-02, VER-01, HOLD-01, HOLD-07 |
| 300 | `17-§8-6` | NEG | WS17-E | SOURCE-HELD | ARC-01, POS-11, CTR-02, AUTH-01, WS-01, WS-02, VER-02, VER-05, VER-07, NEG-01, HOLD-01, HOLD-07 |
| 301 | `17-§15-1` | RULE | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-04, VER-05, HOLD-01 |
| 302 | `17-§15-2` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-04, VER-01, OPT-01, HOLD-01 |
| 303 | `17-§15-3` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-04, WS-10, VER-01, OPT-01, HOLD-01, HOLD-09 |
| 304 | `17-§15-4` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-04, VER-01, HOLD-01 |
| 305 | `17-§15-5` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-04, VER-01, OPT-01, HOLD-01 |
| 306 | `17-§15-6` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-04, VER-01, OPT-01, HOLD-01 |
| 307 | `17-§15-7` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-04, VER-05, OPT-01, HOLD-01 |
| 308 | `17-§15-8` | NEG | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-04, VER-02, VER-05, NEG-01 |
| 309 | `17-§16-2` | RULE | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-07, VER-03 |
| 310 | `17-§16-3` | RULE | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-07, MIG-05, VER-03, VER-10 |
| 311 | `17-§17-1` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| 312 | `17-§17-2` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| 313 | `17-§17-3` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, TXN-11, AUTH-01, AUTH-06, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| 314 | `17-§17-4` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| 315 | `17-§17-5` | OBL | WS17-E | SOURCE-HELD | ARC-01, POS-11, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01, HOLD-07 |
| 316 | `17-§17-6` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-03, WS-05, VER-01, VER-02, HOLD-01 |
| 317 | `17-§17-7` | OBL | WS17-E | SOURCE-HELD | ARC-01, POS-11, TXN-08, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01, HOLD-03, HOLD-07 |
| 318 | `17-§17-8` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| 319 | `17-§17-9` | RULE | WS17-E | DEPENDENCY-HELD | ARC-01, TXN-12, AUTH-01, WS-01, WS-05, VER-01, VER-02, HOLD-01 |
| 320 | `17-§18-3` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-05, WS-01, VER-02, NEG-01, HOLD-01 |
| 321 | `17-§18-5` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, CTR-06, AUTH-01, WS-01, PRIV-02, VER-02, VER-05, NEG-01, HOLD-01, HOLD-20 |
| 322 | `17-§19-1` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, WS-06, VER-01, HOLD-01 |
| 323 | `17-§19-2` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AUTH-08, WS-01, WS-06, SEC-03, VER-02, NEG-01, HOLD-01 |
| 324 | `17-§20-1` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AUD-01, VER-03, HOLD-03 |
| 325 | `17-§20-2` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AUTH-01, AUD-01, VER-03, HOLD-01 |
| 326 | `17-§20-3` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AI-01, AUD-01, VER-03, HOLD-02 |
| 327 | `17-§20-4` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AI-01, AUD-01, VER-03, HOLD-02 |
| 328 | `17-§20-5` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, AI-02, FLR-03, AUD-01, VER-03, HOLD-05 |
| 329 | `17-§20-6` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, WS-09, FLR-03, AUD-01, VER-03, HOLD-05 |
| 330 | `17-§20-7` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, DOC-01, AUD-01, VER-03, HOLD-03 |
| 331 | `17-§20-8` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, RO-06, FLR-03, AUD-01, VER-03, HOLD-05 |
| 332 | `17-§20-9` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, STK-01, STK-06, AUD-01, VER-03, HOLD-01 |
| 333 | `17-§20-10` | RULE | WS17-F | SOURCE-HELD | ARC-01, ARC-02, POS-11, AUD-01, VER-03, HOLD-07 |
| 334 | `17-§20-11` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, SUP-01, AUTH-08, AUD-01, VER-03, HOLD-01 |
| 335 | `17-§20-12` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-02, ARC-04, FLR-03, AUD-01, VER-03, HOLD-01, HOLD-05 |
| 336 | `17-§21-1` | NEG | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-08, VER-03, NEG-01, NEG-02 |
| 337 | `17-§21-2` | NEG | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-08, VER-05, NEG-01, NEG-02 |
| 338 | `17-§21-3` | NEG | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, VER-02, VER-03, NEG-01, NEG-02 |
| 339 | `17-§21-5` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, ARC-06, AUTH-01, WS-01, VER-03, NEG-01, NEG-02, HOLD-02 |
| 340 | `17-§22-1` | SCN | WS17-G | DEPENDENCY-HELD | ARC-01, WS-01, VER-01, VER-09, HOLD-01, HOLD-03 |
| 341 | `17-§22-5` | SCN | WS17-G | SOURCE-HELD | ARC-01, ARC-02, POS-11, WS-01, VER-01, VER-03, VER-09, HOLD-01, HOLD-03, HOLD-07 |
| 342 | `17-§22-6` | SCN | WS17-G | SOURCE-HELD | ARC-01, POS-11, WS-05, VER-01, VER-09, HOLD-01, HOLD-07 |
| 343 | `17-§22-10b` | SCN | WS17-G | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, WS-07, VER-01, VER-03, VER-09 |
| 344 | `17-§23-2` | NEG | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, VER-03, NEG-01, NEG-02 |
| 345 | `17-§23-3` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, WS-01, SEC-01, SEC-02, VER-02, NEG-01, NEG-02, HOLD-01 |
| 346 | `17-§23-4` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, ARC-06, AUTH-01, WS-01, VER-03, NEG-01, NEG-02, HOLD-02 |
| 347 | `17-§25-1` | GATE | WS17-G | SOURCE-HELD | ARC-01, POS-11, FLR-03, VER-08, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07 |
| 348 | `3-§9-3` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, AUTH-01, VER-01, HOLD-01, HOLD-03 |
| 349 | `3-§11-6` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-07, AUTH-01, VER-02, HOLD-01, HOLD-03 |
| 350 | `3-§15-7` | RULE | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, AUTH-01, VER-03, HOLD-01, HOLD-03 |
| 351 | `3-§15-10` | RULE | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, TXN-02, TXN-03, VER-03, VER-04, VER-12, HOLD-03, HOLD-04 |
| 352 | `3-§15-11` | RULE | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, POS-12, TXN-02, TXN-03, TXN-09, VER-03, VER-04, HOLD-03, HOLD-04, HOLD-07 |
| 353 | `5-§4-10` | OBL | WS17-F | DEPENDENCY-HELD | ARC-01, DOC-01, VER-01, HOLD-01, HOLD-03 |
| 354 | `9-§12-8` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, AI-04, AI-06, VER-01, HOLD-02, HOLD-11 |
| 355 | `10-§13-6` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-03, AUTH-01, VER-01, VER-06, HOLD-01, HOLD-02 |
| 356 | `12-§4-4` | OBL | WS17-E | DEPENDENCY-HELD | ARC-01, AUTH-01, AI-01, AI-03, VER-01, HOLD-02, HOLD-12 |
| 357 | `12-§7-7` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-07, AUTH-01, AI-03, AI-06, VER-01, HOLD-02, HOLD-12 |
| 358 | `22-§17-2` | RULE | WS17-C | SOURCE-HELD | ARC-01, ARC-03, POS-01, POS-02, POS-11, VER-03, HOLD-01, HOLD-07 |
| 359 | `24-§18-3` | SCN | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-06, CC-04, AUTH-01, FLR-03, VER-01, VER-06, VER-09, HOLD-02, HOLD-05, HOLD-10, HOLD-13 |
| 360 | `24-§21-3` | OBL | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-03, AUTH-01, VER-01, VER-02, HOLD-01, HOLD-02 |
| 361 | `BP-§3-1` | PRIN | WS17-D | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, CTR-01, CTR-02, VER-05 |
| 362 | `BP-§5.3-1` | RULE | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-05, AUD-01, MIG-01, MIG-03, MIG-04, VER-03, VER-10 |
| 363 | `BP-§5.4-1` | RULE | WS17-C | SOURCE-HELD | ARC-01, ARC-03, POS-01, POS-02, POS-03, POS-11, VER-03, HOLD-07, HOLD-15 |
| 364 | `BP-§6.1-1` | NEG | WS17-E | DEPENDENCY-HELD | ARC-01, ARC-03, AUTH-01, AI-01, VER-02, NEG-01, HOLD-01 |
| 365 | `BP-§6.2-1` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-04, TXN-03, AUD-01, SEC-02, VER-01, VER-03, HOLD-01, HOLD-02, HOLD-04, HOLD-17 |
| 366 | `BP-§6.3-1` | RULE | WS17-F | DEPENDENCY-HELD | ARC-01, ARC-03, AUD-01, SEC-01, SEC-04, MIG-04, VER-03, HOLD-03 |
| 367 | `BP-§6.5-1` | RULE | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-06, CC-04, AUTH-01, FLR-03, VER-03, HOLD-05, HOLD-10 |
| 368 | `BP-§6.6-1` | RULE | WS17-C | SOURCE-HELD | ARC-01, ARC-06, POS-01, POS-11, VER-03, HOLD-07 |
| 369 | `BP-§8-1` | RULE | WS17-E | DEPENDENCY-HELD | ARC-01, ARC-06, AUTH-01, AI-01, VER-01, HOLD-02 |
| 370 | `BP-§9-6` | RULE | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-02, AUD-01, VER-03 |
| 371 | `BP-§9-AL` | RULE | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-05, AUD-01, VER-03 |
| 372 | `BP-§10.3-S2` | OBL | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, AUTH-01, VER-01, HOLD-01, HOLD-03 |
| 373 | `BP-§10.6-O` | EXP | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-08, VER-05 |
| 374 | `BP-§10.6-W1` | WORK | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, SUP-02, AUTH-01, VER-01, HOLD-01 |
| 375 | `BP-§10.6-W2` | WORK | WS17-A | DEPENDENCY-HELD | ARC-01, SIG-01, SIG-03, VER-01, HOLD-03 |
| 376 | `BP-§10.6-W3` | WORK | WS17-A | DEPENDENCY-HELD | ARC-01, STK-03, SIG-03, SIG-04, VER-01, HOLD-03 |
| 377 | `BP-§10.6-W4` | WORK | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, AUTH-01, VER-01, HOLD-02, HOLD-03 |
| 378 | `BP-§10.6-W5` | WORK | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-03, AUTH-01, VER-01, HOLD-01, HOLD-02 |
| 379 | `BP-§10.6-W6` | WORK | WS17-B | DEPENDENCY-HELD | ARC-01, RO-01, RO-05, CC-04, AUTH-01, AUTH-02, FLR-03, VER-01, HOLD-01, HOLD-05, HOLD-10 |
| 380 | `BP-§10.6-W7` | WORK | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, VER-01, HOLD-07, HOLD-21 |
| 381 | `BP-§10.6-W8` | WORK | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, CTR-02, VER-01, HOLD-01, HOLD-07 |
| 382 | `BP-§10.6-W9` | WORK | WS17-D | DEPENDENCY-HELD | ARC-01, CC-01, VER-01, HOLD-01, HOLD-03 |
| 383 | `BP-§10.6-W10` | WORK | WS17-A | DEPENDENCY-HELD | ARC-01, SUP-01, AUTH-01, WS-08, VER-01, HOLD-01 |
| 384 | `BP-§10.6-W11` | WORK | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-06, VER-01, VER-12, HOLD-01 |
| 385 | `BP-§10.6-W12` | WORK | WS17-A | DEPENDENCY-HELD | ARC-01, STK-08, SUP-01, DOC-01, AUTH-01, VER-01, HOLD-03 |
| 386 | `BP-§10.6-E1` | EXP | WS17-C | SOURCE-HELD | ARC-01, POS-01, POS-11, POS-12, VER-05, VER-07, HOLD-07 |
| 387 | `BP-§10.6-E2` | EXP | WS17-D | SOURCE-HELD | ARC-01, POS-11, CTR-01, CTR-02, VER-05, VER-07, HOLD-07 |
| 388 | `BP-§10.6-E3` | EXP | WS17-A | DEPENDENCY-HELD | ARC-01, STK-01, STK-06, VER-05, VER-12, HOLD-01 |
| 389 | `BP-§10.6-A1` | FRV | WS17-G | DEPENDENCY-HELD | ARC-01, SIG-01, VER-06, HOLD-01, HOLD-03 |
| 390 | `BP-§10.6-A2` | FRV | WS17-G | DEPENDENCY-HELD | ARC-01, RO-01, VER-06, HOLD-01, HOLD-02, HOLD-03 |
| 391 | `BP-§10.6-A3` | FRV | WS17-G | DEPENDENCY-HELD | ARC-01, RO-03, FLR-03, VER-06, HOLD-01, HOLD-05 |
| 392 | `BP-§10.6-A4` | FRV | WS17-G | DEPENDENCY-HELD | ARC-01, STK-06, RO-04, VER-06, HOLD-01 |
| 393 | `BP-§10.6-B1` | FRV | WS17-G | SOURCE-HELD | ARC-01, POS-01, POS-11, VER-07, HOLD-07, HOLD-21, HOLD-22 |
| 394 | `BP-§10.6-B2` | FRV | WS17-G | SOURCE-HELD | ARC-01, POS-11, CTR-02, VER-07, HOLD-07, HOLD-22 |
| 395 | `BP-§10.6-X` | EXP | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUTH-01, WS-01, WS-08, VER-05 |
| 396 | `BP-§11-6` | RULE | WS17-B | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, RO-01, RO-08, AUTH-01, VER-03 |
| 397 | `BP-§11-7` | RULE | WS17-A | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-05, STK-01, VER-03, VER-12 |
| 398 | `BP-§13-1` | RULE | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUD-01, VER-08 |
| 399 | `BP-§13-9` | RULE | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, AUD-01, VER-08 |
| 400 | `BP-§14-1` | RULE | WS17-F | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-05, AUD-01, VER-03 |
| 401 | `GPCV-§11-2` | NEG | WS17-F | DEPENDENCY-HELD | ARC-01, DOC-01, DOC-03, VER-03, NEG-01, HOLD-03 |
| 402 | `GPCV-R7` | RULE | WS17-A | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-02, ARC-05, STK-01, VER-08, VER-12 |
| 403 | `GPCV-R13` | RULE | WS17-C | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-02, ARC-05, POS-01, VER-08 |
| 404 | `GPCV-R17` | RULE | WS17-E | DESIGN ACCEPTED — EVIDENCE HOLD | ARC-01, ARC-02, ARC-05, AUTH-01, WS-01, VER-08 |

## 11. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. **Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
