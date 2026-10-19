# SB-P-1.16 — Lovable Build Prompt

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

## 2. Builder Identity and Artifact Name

Source 18 Section 4.5 keeps the artifact path `lovable-build-prompt.md` whatever builder is assigned. **No builder is named.** When an Implementation Authorization names a builder for a workstream, that builder's identity is recorded here. **Do not execute this prompt under MC-266.**

## 3. Read Before Building

- The locked Blueprint, EIS and Stage 11 record (Section 1).
- `engineering-contract.md` (obligations and types) and `verification-checklist.md` (checks per row) in this folder.
- `docs/migration/README.md` (migrations are default-deny).
- The locked SB-P-1.12 to SB-P-1.15 EIS for every consumed foundation.

## 4. What This Prompt Does Not Authorize

Execution of any part of this prompt; application code; SQL; migrations; deployment; production change; payment or messaging provider activation; historical profiling; changes to locked documents; any behaviour not listed for an authorized workstream.

## 5. Repository Scope and Paths

Candidate paths are listed per workstream and apply only if an Implementation Authorization lists them. Existing application functionality — catalog import, inventory, parser ingress, authentication, current Ledger entry and routes — must keep working unchanged except where a listed obligation requires a governed replacement; regression suites must stay green (`REG`).

## 6. Building Rules

- Reuse the locked upstream foundations; build no parallel ledger, identity, permission, scheduler, reminder or messaging model.
- Build only the assigned FCTM rows of the authorized workstream, through the Engineering Contract obligations listed for them. No feature expansion.
- Every financial write goes through one governed command with authority revalidation, confirmation binding, idempotency and audit in one transaction; no client DML.
- Balances come only from authorized Ledger facts; evidence status is shown beside them and never changes them.
- Excess, ambiguity, mismatch and reversal stop and go to the Owner; nothing is automatic.
- Owner-reserved actions stay Owner-only; Managers act only within explicit scoped delegation; proposing a repayment never records it; Employees see no balances.
- **Standard integrations only:** no custom, client-specific POS modification or fork inside the core.
- No feature flag, test flag or environment switch that weakens a permission, isolation, confirmation, revocation or denial check.
- Providers only behind the provider-agnostic adapter contract, with a fake adapter in tests; no live key or credential in code, CI or migrations.
- AI only through the SB-P-1.13 gateway, as an assistant whose output is previewed and confirmed by a human.
- Every authority-bearing change ships with its Verification Checklist items.
- Never verify, approve or accept your own work.

## 7. Workstreams

A row appears under every workstream whose obligations realize it; a workstream builds only its own obligations for that row.

### 7.1 SB-P-1.16/WS-A — Customer Identity, Credit Facts and Due Dates

| Field | Value |
|---|---|
| Owning mission | SB-P-1.16 |
| Prerequisites | WS-G foundations; `D12` participants and kernel; `D14`/`DTX` four-state Ledger and governed commands; P-1 to P-4 |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P1 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/credit/**`, `src/server-functions/credit*`, `src/routes/_authenticated/**` (credit capture and customer surfaces only), `tests/credit/**` |
| Expected schema (migration mission only) | M16-1 credit columns (migration mission only) |
| Obligations | `EC16-ID-01`, `EC16-ID-02`, `EC16-ID-03`, `EC16-ID-04`, `EC16-ID-05`, `EC16-LDG-01`, `EC16-LDG-02`, `EC16-LDG-03`, `EC16-DUE-01`, `EC16-DUE-02`, `EC16-DUE-03`, `EC16-DUE-04` |
| Negative tests | NP-05, NP-24 |
| Runtime scenarios | RS-04, RS-07, RS-14 |
| Verification evidence | Verification Checklist row items for every row below; all PROPOSED — NOT EXECUTED |
| FCTM rows (48) | `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-6`, `14-§5-7`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§13-1`, `14-§18-1`, `14-§18-3`, `14-§20-2`, `14-§22-1`, `14-§22-3`, `15-§7-5`, `15-§14-3`, `15-§23-2`, `15-§25-6`, `3-§9-12`, `BP-§10.3-C2`, `BP-§10.5-W1`, `BP-§10.5-W2`, `BP-§10.5-W3`, `BP-§10.5-A1` |

### 7.2 SB-P-1.16/WS-B — Balances, Repayment, Allocation and Customer Advance

| Field | Value |
|---|---|
| Owning mission | SB-P-1.16 |
| Prerequisites | WS-A; WS-G concurrency and authorization; for `EC16-CAD-03` to `-05`, the finalized FIN-01 representation |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P2 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/credit/**`, `src/server-functions/credit*`, `tests/credit/**` |
| Expected schema (migration mission only) | M16-1, M16-4 (migration mission only) |
| Obligations | `EC16-BAL-01`, `EC16-BAL-02`, `EC16-BAL-03`, `EC16-BAL-04`, `EC16-BAL-05`, `EC16-REP-01`, `EC16-REP-02`, `EC16-REP-03`, `EC16-REP-04`, `EC16-CAD-01`, `EC16-CAD-02`, `EC16-CAD-03`, `EC16-CAD-04`, `EC16-CAD-05`, `EC16-CAD-06`, `EC16-CAD-07`, `EC16-CAD-08`, `EC16-RVS-04` |
| Negative tests | NP-03, NP-05, NP-10, NP-12, NP-13 |
| Runtime scenarios | RS-05, RS-06, RS-11, RS-12, RS-13 |
| Verification evidence | Verification Checklist row items for every row below; all PROPOSED — NOT EXECUTED |
| FCTM rows (74) | `14-§3-1`, `14-§3-5`, `14-§3-6`, `14-§5-7`, `14-§5-8`, `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `14-§14-1`, `14-§14-2`, `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `14-§18-3`, `14-§21-6`, `14-§22-2`, `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-7`, `15-§4-8`, `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§11-4`, `15-§11-5`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `15-§17-1`, `15-§17-2`, `15-§21-10`, `3-§9-12`, `BP-§6.2-1`, `BP-§10.5-W2`, `BP-§10.5-W10`, `BP-§10.5-W11`, `BP-§10.5-E2`, `BP-§10.5-E4`, `BP-§10.5-X` |

### 7.3 SB-P-1.16/WS-C — Thresholds, Follow-up and Communication Preparation

| Field | Value |
|---|---|
| Owning mission | SB-P-1.16 |
| Prerequisites | WS-B balances; `D15`/`DSCH` scheduler and reminders; `DNTF` for any delivery |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P3 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/credit/**`, `src/server-functions/credit*`, `src/routes/_authenticated/**` (warning, follow-up and draft surfaces only), `tests/credit/**` |
| Expected schema (migration mission only) | M16-2 (migration mission only) |
| Obligations | `EC16-THR-01`, `EC16-THR-02`, `EC16-THR-03`, `EC16-THR-04`, `EC16-FUP-01`, `EC16-FUP-02`, `EC16-FUP-03`, `EC16-LANG-01` |
| Negative tests | NP-04, NP-05, NP-11, NP-15 |
| Runtime scenarios | RS-01, RS-07 |
| Verification evidence | Verification Checklist row items for every row below; all PROPOSED — NOT EXECUTED |
| FCTM rows (40) | `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§14-3`, `14-§14-4`, `14-§15-1a`, `14-§15-2`, `14-§22-7`, `14-§22-9`, `15-§18-1a`, `15-§18-2`, `9-§12-11`, `BP-§6.5-1`, `BP-§8-1`, `BP-§10.5-W4` |

### 7.4 SB-P-1.16/WS-D — Payment Evidence, Upload Intake, Matching, Linking and Review

| Field | Value |
|---|---|
| Owning mission | SB-P-1.16 |
| Prerequisites | WS-B; `D14` governed storage and UDI; `D13` for conversational surfaces |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P3 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/reconciliation/**`, `src/server-functions/recon*`, `src/routes/_authenticated/**` (evidence and review-queue surfaces only), `tests/reconciliation/**` |
| Expected schema (migration mission only) | M16-3 (migration mission only) |
| Obligations | `EC16-EVD-01`, `EC16-EVD-02`, `EC16-EVD-03`, `EC16-EVD-04`, `EC16-EVD-05`, `EC16-EVD-06`, `EC16-SRC-06`, `EC16-MAT-01`, `EC16-MAT-02`, `EC16-MAT-03`, `EC16-LNK-01`, `EC16-LNK-02`, `EC16-LNK-03`, `EC16-REV-01`, `EC16-REV-02`, `EC16-REV-03`, `EC16-IDM-01`, `EC16-IDM-02`, `EC16-IDM-03`, `EC16-RVS-01` |
| Negative tests | NP-02, NP-10, NP-14, NP-16, NP-17, NP-18 |
| Runtime scenarios | RS-02, RS-08, RS-09, RS-10 |
| Verification evidence | Verification Checklist row items for every row below; all PROPOSED — NOT EXECUTED |
| FCTM rows (135) | `14-§4-4`, `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§13-2`, `14-§16-1`, `14-§16-2`, `14-§16-3`, `14-§16-4`, `14-§16-5`, `14-§16-6`, `14-§18-1`, `14-§18-2`, `14-§18-3`, `14-§20-10`, `14-§21-6`, `14-§22-2`, `15-§1-1`, `15-§1-2`, `15-§2-8`, `15-§3-1`, `15-§3-2`, `15-§3-3`, `15-§3-4`, `15-§3-5`, `15-§3-6`, `15-§3-7`, `15-§4-1`, `15-§4-2`, `15-§4-3`, `15-§4-4`, `15-§4-5`, `15-§4-6`, `15-§4-7`, `15-§4-8`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `15-§6-1`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§6-12`, `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§9-1`, `15-§9-2`, `15-§9-3`, `15-§9-4`, `15-§9-5`, `15-§9-6`, `15-§10-1`, `15-§10-2`, `15-§10-3`, `15-§10-4`, `15-§10-5`, `15-§11-1`, `15-§11-2`, `15-§11-3`, `15-§11-4`, `15-§11-5`, `15-§12-1`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-5`, `15-§12-6`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4`, `15-§15-7`, `15-§19-1`, `15-§19-2`, `15-§19-3`, `15-§19-4`, `15-§19-5`, `15-§21-4`, `15-§21-10`, `15-§23-4`, `15-§24-2`, `15-§25-2`, `15-§25-7`, `15-§25-12`, `15-§28-1`, `3-§15-8`, `3-§15-9`, `24-§21-4`, `24-§21-5`, `10-§17-5`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W2`, `BP-§10.5-W5`, `BP-§10.5-W6`, `BP-§10.5-W7`, `BP-§10.5-W8`, `BP-§10.5-W9`, `BP-§10.5-W10`, `BP-§10.5-E2`, `BP-§10.5-E4`, `BP-§10.5-B3` |

### 7.5 SB-P-1.16/WS-E — Provider Adapter, Binding, Intake, Reversal Ordering and Settlement (provider-gated)

| Field | Value |
|---|---|
| Owning mission | SB-P-1.16 |
| Prerequisites | WS-D; separate payment-provider authorization (`DPAY`); EQ16-02 secret home; 12-Q1 and 12-Q2 findings |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P5 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/reconciliation/adapters/**`, `src/server-functions/recon*`, `tests/reconciliation/**` (fake adapter only until authorized) |
| Expected schema (migration mission only) | M16-3 binding objects (migration mission only) |
| Obligations | `EC16-SRC-01`, `EC16-SRC-02`, `EC16-SRC-03`, `EC16-SRC-04`, `EC16-SRC-05`, `EC16-SRC-07`, `EC16-SRC-08`, `EC16-RVS-02`, `EC16-RVS-03`, `EC16-STL-01` |
| Negative tests | NP-05, NP-09, NP-17, NP-18, NP-22 |
| Runtime scenarios | RS-03 |
| Verification evidence | Verification Checklist row items for every row below; all PROPOSED — NOT EXECUTED |
| FCTM rows (48) | `14-§5-12`, `14-§18-8`, `15-§1-2`, `15-§3-7`, `15-§4-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§7-2`, `15-§7-8`, `15-§10-2`, `15-§11-5`, `15-§12-1`, `15-§12-6`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§20-5`, `15-§21-1`, `15-§21-3`, `15-§21-10`, `15-§22-1`, `15-§22-6`, `15-§25-2`, `15-§25-9`, `15-§25-12`, `15-§28-1`, `22-§17-3`, `BP-§5.4-1`, `BP-§10.5-W5`, `BP-§10.5-W6`, `BP-§10.5-E2`, `BP-§10.5-B1` |

### 7.6 SB-P-1.16/WS-F — Readers, Intelligence, Order Linkage and AI Boundaries

| Field | Value |
|---|---|
| Owning mission | SB-P-1.16 |
| Prerequisites | WS-B balances; SB-P-1.15 readers (`D15`); SB-P-1.13 gateway (`D13`, `DAI`); `D18` for order demonstration |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P4 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/credit/readers/**`, `src/server-functions/credit*`, `tests/credit/**` |
| Expected schema (migration mission only) | M16-4 reader cut-over (migration mission only) |
| Obligations | `EC16-AI-01`, `EC16-AI-02`, `EC16-READ-01`, `EC16-ORD-01` |
| Negative tests | NP-01, NP-16 |
| Runtime scenarios | RS-11 |
| Verification evidence | Verification Checklist row items for every row below; all PROPOSED — NOT EXECUTED |
| FCTM rows (45) | `14-§1-1`, `14-§1-2`, `14-§2-8`, `14-§3-1`, `14-§3-2`, `14-§3-3`, `14-§3-4`, `14-§3-5`, `14-§3-6`, `14-§3-7`, `14-§6-1`, `14-§6-2`, `14-§6-3`, `14-§6-4`, `14-§6-5`, `14-§6-6`, `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `14-§13-2`, `14-§13-3`, `14-§19-5`, `15-§15-1`, `15-§15-2`, `15-§15-3`, `15-§15-4`, `15-§15-5`, `15-§15-6`, `15-§15-7`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `BP-§6.1-1`, `BP-§11-1` |

### 7.7 SB-P-1.16/WS-G — Cross-Cutting Assurance: Authorization, Security, Isolation, Concurrency, Audit, Privacy, Recovery

| Field | Value |
|---|---|
| Owning mission | SB-P-1.16 |
| Prerequisites | `D12` kernel and capability registry; SB-P-1.14 closure (`EIS14-CMD-03`); P-2 to P-4 |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P1 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/credit/**`, `src/lib/reconciliation/**`, `tests/credit/**`, `tests/reconciliation/**` |
| Expected schema (migration mission only) | Birth-safe hardening in every M16 class (migration mission only) |
| Obligations | `EC16-CNC-01`, `EC16-CNC-02`, `EC16-CNC-03`, `EC16-CNC-04`, `EC16-AUTHZ-01`, `EC16-AUTHZ-02`, `EC16-AUTHZ-03`, `EC16-AUTHZ-04`, `EC16-AUTHZ-05`, `EC16-AUTHZ-06`, `EC16-AUTHZ-07`, `EC16-AUTHZ-08`, `EC16-AUTHZ-09`, `EC16-SEC-01`, `EC16-SEC-02`, `EC16-SEC-03`, `EC16-SEC-04`, `EC16-SEC-05`, `EC16-SEC-06`, `EC16-AUD-01`, `EC16-AUD-02`, `EC16-AUD-03`, `EC16-AUD-04`, `EC16-PRIV-01`, `EC16-PRIV-02`, `EC16-PRIV-03`, `EC16-PRIV-04`, `EC16-PRIV-05`, `EC16-PRIV-06`, `EC16-ERR-01`, `EC16-ERR-02`, `EC16-ERR-03`, `EC16-ERR-04`, `EC16-OPS-01`, `EC16-OPS-02` |
| Negative tests | NP-01, NP-02, NP-04, NP-05, NP-06, NP-07, NP-08, NP-09, NP-19, NP-21, NP-23 |
| Runtime scenarios | RS-10, RS-12, RS-13 |
| Verification evidence | Verification Checklist row items for every row below; all PROPOSED — NOT EXECUTED |
| FCTM rows (231) | `14-§1-1`, `14-§1-2`, `14-§2-8`, `14-§3-1`, `14-§3-2`, `14-§3-3`, `14-§3-4`, `14-§3-5`, `14-§3-6`, `14-§3-7`, `14-§4-1`, `14-§4-2`, `14-§4-3`, `14-§4-4`, `14-§4-5`, `14-§4-6`, `14-§5-1`, `14-§5-2`, `14-§5-3`, `14-§5-4`, `14-§5-5`, `14-§5-6`, `14-§5-7`, `14-§5-8`, `14-§5-9`, `14-§5-10`, `14-§5-11`, `14-§5-12`, `14-§5-13`, `14-§7-1`, `14-§7-2`, `14-§7-3`, `14-§7-4`, `14-§7-5`, `14-§7-6`, `14-§7-7`, `14-§8-1`, `14-§8-2`, `14-§8-3`, `14-§8-4`, `14-§8-5`, `14-§8-6`, `14-§8-7`, `14-§9-1`, `14-§9-2`, `14-§9-3`, `14-§9-4`, `14-§9-5`, `14-§9-6`, `14-§9-7`, `14-§9-8`, `14-§9-9`, `14-§10-1`, `14-§10-2`, `14-§10-3`, `14-§10-4`, `14-§10-5`, `14-§10-6`, `14-§11-1`, `14-§11-2`, `14-§11-3`, `14-§11-4`, `14-§11-5`, `14-§12-1`, `14-§12-2`, `14-§12-3`, `14-§12-4`, `14-§12-5`, `14-§12-6`, `14-§13-1`, `14-§14-1`, `14-§14-2`, `14-§14-3`, `14-§14-4`, `14-§16-1`, `14-§16-2`, `14-§16-3`, `14-§16-4`, `14-§16-5`, `14-§16-6`, `14-§17-1`, `14-§17-2`, `14-§17-3`, `14-§17-4`, `14-§17-5`, `14-§18-1`, `14-§18-2`, `14-§18-3`, `14-§18-4`, `14-§18-5`, `14-§18-6`, `14-§18-7`, `14-§18-8`, `14-§18-9`, `14-§19-1`, `14-§19-2`, `14-§19-3`, `14-§19-4`, `14-§19-5`, `14-§20-3`, `14-§20-10`, `14-§22-1`, `14-§22-2`, `14-§22-6`, `14-§22-9`, `14-§22-11`, `15-§1-2`, `15-§3-6`, `15-§3-7`, `15-§4-7`, `15-§5-1`, `15-§5-2`, `15-§5-3`, `15-§5-4`, `15-§5-5`, `15-§5-6`, `15-§5-7`, `15-§5-8`, `15-§6-1`, `15-§6-2`, `15-§6-3`, `15-§6-4`, `15-§6-5`, `15-§6-6`, `15-§6-7`, `15-§6-8`, `15-§6-9`, `15-§6-10`, `15-§6-11`, `15-§6-12`, `15-§7-1`, `15-§7-2`, `15-§7-3`, `15-§7-4`, `15-§7-5`, `15-§7-6`, `15-§7-7`, `15-§7-8`, `15-§7-9`, `15-§7-10`, `15-§8-1`, `15-§8-2`, `15-§8-3`, `15-§8-4`, `15-§8-5`, `15-§8-6`, `15-§8-7`, `15-§9-5`, `15-§10-1`, `15-§10-4`, `15-§10-5`, `15-§11-2`, `15-§12-1`, `15-§12-2`, `15-§12-3`, `15-§12-4`, `15-§12-5`, `15-§12-6`, `15-§13-1`, `15-§13-2`, `15-§13-3`, `15-§14-1`, `15-§14-2`, `15-§14-3`, `15-§14-4`, `15-§16-1`, `15-§16-2`, `15-§16-3`, `15-§16-4`, `15-§16-5`, `15-§16-6`, `15-§17-1`, `15-§17-2`, `15-§17-3`, `15-§17-4`, `15-§18-2`, `15-§19-1`, `15-§19-2`, `15-§19-3`, `15-§19-4`, `15-§19-5`, `15-§20-1`, `15-§20-2`, `15-§20-3`, `15-§20-4`, `15-§20-5`, `15-§21-1`, `15-§21-2`, `15-§21-3`, `15-§21-4`, `15-§21-5`, `15-§21-6`, `15-§21-7`, `15-§21-8`, `15-§21-9`, `15-§21-10`, `15-§21-11`, `15-§22-1`, `15-§22-2`, `15-§22-3`, `15-§22-4`, `15-§22-5`, `15-§22-6`, `15-§23-3`, `15-§23-4`, `15-§24-5`, `15-§25-2`, `15-§25-6`, `15-§25-8`, `15-§25-9`, `15-§26-6`, `3-§9-12`, `3-§11-6`, `24-§21-4`, `24-§21-5`, `22-§17-3`, `BP-§5.4-1`, `BP-§6.1-1`, `BP-§6.2-1`, `BP-§6.5-1`, `BP-§10.3-C2`, `BP-§10.5-W1`, `BP-§10.5-W2`, `BP-§10.5-W3`, `BP-§10.5-W4`, `BP-§10.5-W5`, `BP-§10.5-W6`, `BP-§10.5-W7`, `BP-§10.5-W9`, `BP-§10.5-W11`, `BP-§10.5-A2` |

### 7.8 Cross-cutting — governance, migration design and verification

Obligations: `EC16-ARC-01`, `EC16-ARC-02`, `EC16-ARC-03`, `EC16-MIG-01`, `EC16-MIG-02`, `EC16-MIG-03`, `EC16-MIG-04`, `EC16-MIG-05`, `EC16-MIG-06`, `EC16-VER-01`, `EC16-VER-02`, `EC16-VER-03`, `EC16-VER-04`, `EC16-VER-05`, `EC16-VER-06`, `EC16-VER-07`, `EC16-NEG-01`, `EC16-GOV-01`, `EC16-GOV-02`. They constrain every workstream and add no behaviour.

### 7.9 Gates — Mission Control holds; not builder work

Obligations: `EC16-HOLD-01`, `EC16-HOLD-02`, `EC16-HOLD-03`, `EC16-HOLD-04`, `EC16-HOLD-05`, `EC16-HOLD-06`, `EC16-HOLD-07`, `EC16-HOLD-08`, `EC16-HOLD-09`.

## 8. Forbidden Behaviour

- Automatic credit blocking, credit scores, risk labels, lending or underwriting.
- Automatic repayment, allocation, offset, refund, customer advance, income, expense or fee entry; AI choosing a match or committing a financial action.
- Any balance change from evidence alone; any reversal changing the Ledger before an Owner-run governed correction.
- A provider-verified label on merchant-submitted evidence.
- Sending, or marking sent or delivered, any customer message before an approved channel.
- Provider integration, credentials, secrets or activation; generic direct-bank or bank-email adapters (`16:FPDR-9`).
- Building `EC16-CAD-03` to `-05` or `EC16-STL-01` before the FIN-01 representation is finalized and accepted.
- Any retention, deletion, cancellation, backup or restore deletion, export lifecycle or upload-grace behaviour (U-08).
- Historical profiling, backfill, bulk attribution or reinterpretation (OQ-05; MQ-02).
- A merchant-facing grant screen or delegation workflow (R15-11), or a new dispute label (MQ-04).
- Custom client-specific POS modification inside the core.
- Behaviour for any row outside the authorized workstream.

## 9. Holds the Builder Must Not Cross

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

## 10. Pause-and-Escalate Rule

Stop and report to Mission Control, without working around it, when: a required upstream foundation is missing or differs from its locked EIS; an obligation cannot be met without new product behaviour (possible T3); an FCTM row appears infeasible or unsafe (possible T8); a returned upstream finding conflicts with a hold (watches T2-W1, T2-W2, T8-W2); a check would need weakening; or a provider, credential or production action appears necessary.

## 11. Tests, Evidence and Completion Duties

Each workstream delivers its Verification Checklist items with the planned evidence classes, reports them honestly in the Builder Completion Report, and claims no PASS without executed evidence. Independent verification is Stage 19 by another actor.

## 12. Workstream-to-FCTM-Row Map

One line per `IN SCOPE` row, in EIS Section 35.2 order.

| # | FCTM row | Workstreams | Obligations (`EC16-`) |
|---|---|---|---|
| 1 | `14-§1-1` | WS-F, WS-G, Cross-cutting | ARC-01, AI-01, NEG-01, PRIV-02, VER-06 |
| 2 | `14-§1-2` | WS-F, WS-G, Cross-cutting | ARC-01, AI-01, NEG-01, PRIV-02 |
| 3 | `14-§2-8` | WS-F, WS-G, Cross-cutting | ARC-01, AI-01, NEG-01, PRIV-02 |
| 4 | `14-§3-1` | WS-B, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AI-01, NEG-01, PRIV-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-04 |
| 5 | `14-§3-2` | WS-F, WS-G, Cross-cutting | ARC-01, AI-01, NEG-01, PRIV-02 |
| 6 | `14-§3-3` | WS-F, WS-G, Cross-cutting | ARC-01, AI-01, NEG-01, PRIV-02 |
| 7 | `14-§3-4` | WS-F, WS-G, Cross-cutting | ARC-01, AI-01, NEG-01, PRIV-02 |
| 8 | `14-§3-5` | WS-B, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AI-01, NEG-01, PRIV-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-04, CAD-04, AUD-01 |
| 9 | `14-§3-6` | WS-B, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AI-01, NEG-01, PRIV-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, AUD-01 |
| 10 | `14-§3-7` | WS-F, WS-G, Cross-cutting | ARC-01, AI-01, NEG-01, PRIV-02, AUTHZ-03, VER-02 |
| 11 | `14-§4-1` | WS-A, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, AUD-01 |
| 12 | `14-§4-2` | WS-A, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 13 | `14-§4-3` | WS-A, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 14 | `14-§4-4` | WS-A, WS-D, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, IDM-02 |
| 15 | `14-§4-5` | WS-A, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, HOLD-03, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 16 | `14-§4-6` | WS-A, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-02, MIG-05, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 17 | `14-§5-1` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, ID-02, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06 |
| 18 | `14-§5-2` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06 |
| 19 | `14-§5-3` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 20 | `14-§5-4` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 21 | `14-§5-5` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 22 | `14-§5-6` | WS-A, WS-G, Cross-cutting, Gate | DUE-01, DUE-02, DUE-03, DUE-04, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 23 | `14-§5-7` | WS-A, WS-B, WS-G, Cross-cutting, Gate | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-01, CAD-03 |
| 24 | `14-§5-8` | WS-A, WS-B, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 25 | `14-§5-9` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 26 | `14-§5-10` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 27 | `14-§5-11` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, HOLD-04, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 28 | `14-§5-12` | WS-A, WS-E, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 29 | `14-§5-13` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-01, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, AUD-03 |
| 30 | `14-§6-1` | WS-A, WS-C, WS-F, Gate | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| 31 | `14-§6-2` | WS-A, WS-C, WS-F, Gate | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| 32 | `14-§6-3` | WS-A, WS-C, WS-F, Gate | LDG-03, ID-02, AI-01, LANG-01, HOLD-01, HOLD-03 |
| 33 | `14-§6-4` | WS-A, WS-C, WS-F, Gate | LDG-03, ID-02, AI-01, LANG-01, HOLD-03 |
| 34 | `14-§6-5` | WS-A, WS-C, WS-F, Gate | LDG-03, ID-02, AI-01, LANG-01, HOLD-03, HOLD-07 |
| 35 | `14-§6-6` | WS-A, WS-C, WS-F, Gate | LDG-03, ID-02, AI-01, LANG-01, HOLD-02, HOLD-03 |
| 36 | `14-§7-1` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| 37 | `14-§7-2` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, AUD-01 |
| 38 | `14-§7-3` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, CAD-03 |
| 39 | `14-§7-4` | WS-A, WS-B, WS-G, Cross-cutting, Gate | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-01, CAD-03, CAD-04 |
| 40 | `14-§7-5` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, CAD-05 |
| 41 | `14-§7-6` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, AUD-01 |
| 42 | `14-§7-7` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| 43 | `14-§8-1` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| 44 | `14-§8-2` | WS-C, WS-G, Cross-cutting | THR-01, THR-02, THR-03, THR-04, AUD-02, MIG-01, MIG-03, SEC-01 |
| 45 | `14-§8-3` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| 46 | `14-§8-4` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-04, MIG-01, MIG-03, SEC-01 |
| 47 | `14-§8-5` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-04, MIG-01, MIG-03, SEC-01 |
| 48 | `14-§8-6` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, MIG-01, MIG-03, SEC-01 |
| 49 | `14-§8-7` | WS-C, WS-G, Cross-cutting | THR-01, THR-02, THR-03, THR-04, AUD-02, NEG-01, VER-02, MIG-01, MIG-03, SEC-01 |
| 50 | `14-§9-1` | WS-C, WS-G, Cross-cutting | THR-01, THR-02, THR-03, THR-04, AUD-02, AUTHZ-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01 |
| 51 | `14-§9-2` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, VER-06, MIG-01, MIG-03, SEC-01 |
| 52 | `14-§9-3` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 53 | `14-§9-4` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 54 | `14-§9-5` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 55 | `14-§9-6` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 56 | `14-§9-7` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 57 | `14-§9-8` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, HOLD-03, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 58 | `14-§9-9` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 59 | `14-§10-1` | WS-C, WS-G, Gate | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04 |
| 60 | `14-§10-2` | WS-C, WS-G, Gate | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06 |
| 61 | `14-§10-3` | WS-C, WS-G, Cross-cutting, Gate | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| 62 | `14-§10-4` | WS-C, WS-G, Cross-cutting, Gate | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| 63 | `14-§10-5` | WS-C, WS-G, Cross-cutting, Gate | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02 |
| 64 | `14-§10-6` | WS-C, WS-G, Cross-cutting, Gate | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04, HOLD-06, NEG-01, VER-02, PRIV-01 |
| 65 | `14-§11-1` | WS-B, WS-F, WS-G, Cross-cutting, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| 66 | `14-§11-2` | WS-B, WS-F, WS-G, Cross-cutting, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| 67 | `14-§11-3` | WS-B, WS-F, WS-G, Cross-cutting, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| 68 | `14-§11-4` | WS-B, WS-F, WS-G, Cross-cutting, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, VER-06 |
| 69 | `14-§11-5` | WS-B, WS-F, WS-G, Cross-cutting, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, NEG-01, VER-02 |
| 70 | `14-§12-1` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 71 | `14-§12-2` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 72 | `14-§12-3` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 73 | `14-§12-4` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 74 | `14-§12-5` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04 |
| 75 | `14-§12-6` | WS-B, WS-F, WS-G, Cross-cutting, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-01, NEG-01, VER-02 |
| 76 | `14-§13-1` | WS-A, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-07, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 77 | `14-§13-2` | WS-D, WS-F, Cross-cutting, Gate | ORD-01, HOLD-07, HOLD-03, NEG-01, VER-02, IDM-02 |
| 78 | `14-§13-3` | WS-F, Gate | ORD-01, HOLD-07 |
| 79 | `14-§14-1` | WS-B, WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, CAD-04, CAD-05, REP-03, MIG-01 |
| 80 | `14-§14-2` | WS-B, WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| 81 | `14-§14-3` | WS-C, WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, THR-04 |
| 82 | `14-§14-4` | WS-C, WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-04, HOLD-06, FUP-02, VER-01 |
| 83 | `14-§15-1a` | WS-C, Gate | LANG-01, HOLD-02 |
| 84 | `14-§15-2` | WS-C, Gate | LANG-01, HOLD-02 |
| 85 | `14-§16-1` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 86 | `14-§16-2` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 87 | `14-§16-3` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 88 | `14-§16-4` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 89 | `14-§16-5` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, VER-03, CNC-02, VER-01 |
| 90 | `14-§16-6` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-02, NEG-01, VER-02, VER-03, CNC-02, VER-01 |
| 91 | `14-§17-1` | WS-B, WS-G, Cross-cutting, Gate | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, PRIV-05, VER-01, PRIV-03 |
| 92 | `14-§17-2` | WS-B, WS-G, Cross-cutting, Gate | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01 |
| 93 | `14-§17-3` | WS-B, WS-G, Cross-cutting, Gate | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, VER-01 |
| 94 | `14-§17-4` | WS-B, WS-G, Cross-cutting, Gate | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01 |
| 95 | `14-§17-5` | WS-B, WS-G, Cross-cutting, Gate | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-03, NEG-01, VER-02, VER-01, MIG-01 |
| 96 | `14-§18-1` | WS-A, WS-D, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-01, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, IDM-02 |
| 97 | `14-§18-2` | WS-D, WS-G, Cross-cutting, Gate | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03, VER-01, IDM-02 |
| 98 | `14-§18-3` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01 |
| 99 | `14-§18-4` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| 100 | `14-§18-5` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| 101 | `14-§18-6` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03, AUTHZ-01 |
| 102 | `14-§18-7` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-04 |
| 103 | `14-§18-8` | WS-E, WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08 |
| 104 | `14-§18-9` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-01, HOLD-03 |
| 105 | `14-§19-1` | WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01, GOV-02, PRIV-03 |
| 106 | `14-§19-2` | WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01, AUTHZ-01 |
| 107 | `14-§19-3` | WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, NEG-01, VER-02, VER-01, PRIV-03 |
| 108 | `14-§19-4` | WS-G, Cross-cutting | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, NEG-01, VER-02, VER-01, PRIV-02 |
| 109 | `14-§19-5` | WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-08, AUTHZ-03, NEG-01, VER-02, VER-01, AI-01, AUD-04 |
| 110 | `14-§20-1` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-03 |
| 111 | `14-§20-2` | WS-A, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, ID-02 |
| 112 | `14-§20-3` | WS-G, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, AUTHZ-01 |
| 113 | `14-§20-4` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-02 |
| 114 | `14-§20-5` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-04 |
| 115 | `14-§20-6` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-04 |
| 116 | `14-§20-7` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-04 |
| 117 | `14-§20-8` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-04 |
| 118 | `14-§20-9` | WS-G (accountable), Cross-cutting | ARC-01, ARC-02 |
| 119 | `14-§20-10` | WS-D, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, IDM-02, AUD-01 |
| 120 | `14-§21-1` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 121 | `14-§21-2` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 122 | `14-§21-3` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 123 | `14-§21-4` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 124 | `14-§21-5` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 125 | `14-§21-6` | WS-B, WS-D, Cross-cutting, Gate | NEG-01, VER-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, IDM-02 |
| 126 | `14-§22-1` | WS-A, WS-G, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, ID-02, ID-04, MIG-05, VER-01, MIG-04, AUD-01 |
| 127 | `14-§22-2` | WS-B, WS-D, WS-G, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, IDM-02, AUD-01 |
| 128 | `14-§22-3` | WS-A, Cross-cutting, Gate | VER-06, HOLD-02, ID-02, VER-01 |
| 129 | `14-§22-4` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01 |
| 130 | `14-§22-5` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01 |
| 131 | `14-§22-6` | WS-G, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01, AUD-01 |
| 132 | `14-§22-7` | WS-C, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01, THR-04 |
| 133 | `14-§22-8` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-04, HOLD-08, VER-01 |
| 134 | `14-§22-9` | WS-C, WS-G, Cross-cutting, Gate | VER-06, HOLD-04, HOLD-06, FUP-02, VER-01, PRIV-04 |
| 135 | `14-§22-10` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01 |
| 136 | `14-§22-11` | WS-G, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01, MIG-01, AUD-01 |
| 137 | `14-§23-1` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 138 | `14-§23-2` | WS-G (accountable), Cross-cutting | NEG-01, VER-02, MIG-01 |
| 139 | `14-§23-3` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 140 | `14-§23-4` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 141 | `14-§25-1` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, VER-01 |
| 142 | `15-§1-1` | WS-D, Cross-cutting | EVD-02, NEG-01, VER-06 |
| 143 | `15-§1-2` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| 144 | `15-§2-8` | WS-D, Cross-cutting | EVD-02, NEG-01 |
| 145 | `15-§3-1` | WS-D, Cross-cutting | EVD-02, NEG-01 |
| 146 | `15-§3-2` | WS-D, Cross-cutting | EVD-02, NEG-01 |
| 147 | `15-§3-3` | WS-D, Cross-cutting | EVD-02, NEG-01, IDM-02 |
| 148 | `15-§3-4` | WS-D, Cross-cutting | EVD-02, NEG-01 |
| 149 | `15-§3-5` | WS-D, Cross-cutting | EVD-02, NEG-01 |
| 150 | `15-§3-6` | WS-D, WS-G, Cross-cutting | EVD-02, NEG-01, AUD-01 |
| 151 | `15-§3-7` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 152 | `15-§4-1` | WS-B, WS-D, Cross-cutting, Gate | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 153 | `15-§4-2` | WS-B, WS-D, Cross-cutting, Gate | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 154 | `15-§4-3` | WS-B, WS-D, Cross-cutting, Gate | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 155 | `15-§4-4` | WS-B, WS-D, Cross-cutting, Gate | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 156 | `15-§4-5` | WS-B, WS-D, Cross-cutting, Gate | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 157 | `15-§4-6` | WS-B, WS-D, Cross-cutting, Gate | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 158 | `15-§4-7` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, BAL-02, EVD-03, SRC-01, EVD-04, SRC-08, MIG-01, MIG-03, SEC-01, VER-01 |
| 159 | `15-§4-8` | WS-B, WS-D, Cross-cutting, Gate | EVD-02, EVD-03, EVD-04, HOLD-03, BAL-02, VER-01 |
| 160 | `15-§5-1` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| 161 | `15-§5-2` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, SRC-07, MIG-01, MIG-03, SEC-01, VER-01 |
| 162 | `15-§5-3` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 163 | `15-§5-4` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01, STL-01 |
| 164 | `15-§5-5` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-03, EVD-04, PRIV-05, MIG-01, MIG-03, SEC-01, VER-01, EVD-06 |
| 165 | `15-§5-6` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-07, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 166 | `15-§5-7` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 167 | `15-§5-8` | WS-D, WS-E, WS-G, Cross-cutting | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 168 | `15-§6-1` | WS-D, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-01, MIG-01, MIG-03, SEC-01 |
| 169 | `15-§6-2` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 170 | `15-§6-3` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 171 | `15-§6-4` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 172 | `15-§6-5` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 173 | `15-§6-6` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 174 | `15-§6-7` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 175 | `15-§6-8` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, PRIV-05, SRC-08, MIG-01, MIG-03, SEC-01, PRIV-06, EVD-06, AUTHZ-08, AUD-01 |
| 176 | `15-§6-9` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 177 | `15-§6-10` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01 |
| 178 | `15-§6-11` | WS-D, WS-E, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, IDM-02 |
| 179 | `15-§6-12` | WS-D, WS-G, Cross-cutting, Gate | EVD-01, EVD-05, PRIV-01, HOLD-03, PRIV-05, MIG-01, MIG-03, SEC-01, EVD-06 |
| 180 | `15-§7-1` | WS-D, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 181 | `15-§7-2` | WS-D, WS-E, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-05, SRC-08 |
| 182 | `15-§7-3` | WS-D, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 183 | `15-§7-4` | WS-D, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 184 | `15-§7-5` | WS-A, WS-D, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-01, ID-02 |
| 185 | `15-§7-6` | WS-D, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 186 | `15-§7-7` | WS-D, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, HOLD-07 |
| 187 | `15-§7-8` | WS-D, WS-E, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-05, SRC-08, STL-01 |
| 188 | `15-§7-9` | WS-D, WS-G, Cross-cutting | MAT-01, MAT-02, MAT-03, OPS-01, NEG-01, VER-02, MIG-01 |
| 189 | `15-§7-10` | WS-D, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, IDM-02 |
| 190 | `15-§8-1` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 191 | `15-§8-2` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 192 | `15-§8-3` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 193 | `15-§8-4` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01, CAD-05, IDM-02 |
| 194 | `15-§8-5` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01, AUD-01 |
| 195 | `15-§8-6` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-04, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 196 | `15-§8-7` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 197 | `15-§9-1` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-02, NEG-01, VER-02, VER-01 |
| 198 | `15-§9-2` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| 199 | `15-§9-3` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| 200 | `15-§9-4` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| 201 | `15-§9-5` | WS-D, WS-G, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01, CNC-03, AUTHZ-01 |
| 202 | `15-§9-6` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-03, VER-01 |
| 203 | `15-§10-1` | WS-D, WS-G, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-03, PRIV-05, VER-01, EVD-06 |
| 204 | `15-§10-2` | WS-D, WS-E, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-03, VER-01, STL-01 |
| 205 | `15-§10-3` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-03, NEG-01, VER-02, VER-01 |
| 206 | `15-§10-4` | WS-D, WS-G, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, HOLD-03, VER-01, AUD-01 |
| 207 | `15-§10-5` | WS-D, WS-G, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, VER-01, MIG-01, AUD-01 |
| 208 | `15-§11-1` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-03, VER-01 |
| 209 | `15-§11-2` | WS-D, WS-G, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-03, PRIV-05, VER-01, EVD-06 |
| 210 | `15-§11-3` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, HOLD-04, VER-01 |
| 211 | `15-§11-4` | WS-B, WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01 |
| 212 | `15-§11-5` | WS-B, WS-D, WS-E, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, VER-01, STL-01 |
| 213 | `15-§12-1` | WS-D, WS-E, WS-G, Cross-cutting, Gate | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-03 |
| 214 | `15-§12-2` | WS-D, WS-G, Cross-cutting, Gate | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 215 | `15-§12-3` | WS-D, WS-G, Cross-cutting, Gate | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 216 | `15-§12-4` | WS-D, WS-G, Cross-cutting, Gate | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 217 | `15-§12-5` | WS-D, WS-G, Cross-cutting, Gate | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-04, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-01 |
| 218 | `15-§12-6` | WS-D, WS-E, WS-G, Cross-cutting, Gate | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-01, HOLD-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-03 |
| 219 | `15-§13-1` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, SRC-01, EVD-04, PRIV-05, SRC-08, MIG-01, MIG-03, SEC-01, VER-01, ERR-01 |
| 220 | `15-§13-2` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, NEG-01, VER-02, PRIV-05, MIG-01, MIG-03, SEC-01, VER-01, PRIV-06 |
| 221 | `15-§13-3` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, MIG-01, MIG-03, SEC-01, VER-01, AUD-01 |
| 222 | `15-§14-1` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 223 | `15-§14-2` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 224 | `15-§14-3` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-03, ID-02, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 225 | `15-§14-4` | WS-B, WS-D, WS-G, Cross-cutting, Gate | LNK-01, LNK-02, LNK-03, CNC-01, CNC-02, BAL-02, HOLD-02, NEG-01, VER-02, MIG-01, MIG-03, SEC-01, VER-03, VER-01 |
| 226 | `15-§15-1` | WS-F, Gate | ORD-01, HOLD-07 |
| 227 | `15-§15-2` | WS-F, Gate | ORD-01, HOLD-07, HOLD-03 |
| 228 | `15-§15-3` | WS-F, Gate | ORD-01, HOLD-07, HOLD-03 |
| 229 | `15-§15-4` | WS-F, Gate | ORD-01, HOLD-07, HOLD-03 |
| 230 | `15-§15-5` | WS-F, Gate | ORD-01, HOLD-07, HOLD-03 |
| 231 | `15-§15-6` | WS-F, Gate | ORD-01, HOLD-07, HOLD-03 |
| 232 | `15-§15-7` | WS-D, WS-F, Cross-cutting, Gate | ORD-01, HOLD-07, HOLD-03, NEG-01, VER-02, IDM-02 |
| 233 | `15-§16-1` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 234 | `15-§16-2` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 235 | `15-§16-3` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 236 | `15-§16-4` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 237 | `15-§16-5` | WS-B, WS-F, WS-G, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08 |
| 238 | `15-§16-6` | WS-B, WS-F, WS-G, Cross-cutting, Gate | READ-01, BAL-03, BAL-05, OPS-02, AI-02, HOLD-04, HOLD-08, NEG-01, VER-02 |
| 239 | `15-§17-1` | WS-B, WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| 240 | `15-§17-2` | WS-B, WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01, REP-03 |
| 241 | `15-§17-3` | WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, VER-01 |
| 242 | `15-§17-4` | WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-07, NEG-01, VER-02, VER-01, AUTHZ-07 |
| 243 | `15-§18-1a` | WS-C, Gate | LANG-01, HOLD-02 |
| 244 | `15-§18-2` | WS-C, WS-G, Cross-cutting, Gate | LANG-01, HOLD-02, NEG-01, VER-02, PRIV-01 |
| 245 | `15-§19-1` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 246 | `15-§19-2` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01, AUD-01 |
| 247 | `15-§19-3` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 248 | `15-§19-4` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 249 | `15-§19-5` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 250 | `15-§20-1` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 251 | `15-§20-2` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03, PRIV-05, PRIV-06, ERR-03 |
| 252 | `15-§20-3` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 253 | `15-§20-4` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 254 | `15-§20-5` | WS-E, WS-G, Cross-cutting, Gate | ERR-01, ERR-02, ERR-04, HOLD-05, NEG-01, VER-02, SRC-08, ERR-03 |
| 255 | `15-§21-1` | WS-E, WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08, ERR-03 |
| 256 | `15-§21-2` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 257 | `15-§21-3` | WS-E, WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-05, SRC-08 |
| 258 | `15-§21-4` | WS-D, WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03, IDM-02 |
| 259 | `15-§21-5` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 260 | `15-§21-6` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 261 | `15-§21-7` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-03 |
| 262 | `15-§21-8` | WS-G, Cross-cutting, Gate | ERR-01, ERR-02, ERR-04, HOLD-03, VER-03 |
| 263 | `15-§21-9` | WS-G, Cross-cutting, Gate | ERR-01, ERR-02, ERR-04, HOLD-01, VER-03, AUTHZ-01 |
| 264 | `15-§21-10` | WS-B, WS-D, WS-E, WS-G, Cross-cutting, Gate | RVS-01, RVS-02, RVS-03, RVS-04, HOLD-09, HOLD-03, HOLD-05, SRC-01, EVD-04, SRC-08, MIG-01, MIG-03, SEC-01, VER-01 |
| 265 | `15-§21-11` | WS-G, Gate | ERR-01, ERR-02, ERR-04, HOLD-04 |
| 266 | `15-§22-1` | WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-05, SRC-08, VER-01 |
| 267 | `15-§22-2` | WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-03, PRIV-05, VER-01, AUTHZ-08 |
| 268 | `15-§22-3` | WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01 |
| 269 | `15-§22-4` | WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, VER-01 |
| 270 | `15-§22-5` | WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-01, PRIV-05, VER-01, GOV-02, PRIV-03, AUD-01 |
| 271 | `15-§22-6` | WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, AUTHZ-07, HOLD-05, NEG-01, VER-02, SRC-08, VER-01 |
| 272 | `15-§23-1` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-03 |
| 273 | `15-§23-2` | WS-A, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, ID-02 |
| 274 | `15-§23-3` | WS-G, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, AUTHZ-01 |
| 275 | `15-§23-4` | WS-D, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, IDM-02, AUD-01 |
| 276 | `15-§23-5` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-04 |
| 277 | `15-§23-6` | WS-G (accountable), Cross-cutting | ARC-01, ARC-02 |
| 278 | `15-§23-7` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-07 |
| 279 | `15-§23-8` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-04 |
| 280 | `15-§24-1` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 281 | `15-§24-2` | WS-D, Cross-cutting | NEG-01, VER-02, IDM-02 |
| 282 | `15-§24-3` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 283 | `15-§24-4` | WS-G (accountable), Cross-cutting | NEG-01, VER-02, MIG-01 |
| 284 | `15-§24-5` | WS-G, Cross-cutting | NEG-01, VER-02, ERR-01 |
| 285 | `15-§24-6` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 286 | `15-§25-1` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-03, VER-01 |
| 287 | `15-§25-2` | WS-D, WS-E, WS-G, Cross-cutting, Gate | VER-06, HOLD-03, HOLD-05, SRC-08, VER-01, ERR-03, IDM-02 |
| 288 | `15-§25-3` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-02, VER-01 |
| 289 | `15-§25-4` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01 |
| 290 | `15-§25-5` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01 |
| 291 | `15-§25-6` | WS-A, WS-G, Cross-cutting, Gate | VER-06, HOLD-03, ID-02, VER-01, AUD-01 |
| 292 | `15-§25-7` | WS-D, Cross-cutting, Gate | VER-06, HOLD-07, HOLD-03, VER-01, IDM-02 |
| 293 | `15-§25-8` | WS-G, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01, AUTHZ-01 |
| 294 | `15-§25-9` | WS-E, WS-G, Cross-cutting, Gate | VER-06, HOLD-05, SRC-08, VER-01, ERR-01 |
| 295 | `15-§25-10` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-04, HOLD-08, VER-01 |
| 296 | `15-§25-11` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01 |
| 297 | `15-§25-12` | WS-D, WS-E, Cross-cutting, Gate | VER-06, HOLD-03, HOLD-05, SRC-01, EVD-04, SRC-08, VER-01, MIG-01 |
| 298 | `15-§26-4` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 299 | `15-§26-5` | WS-G (accountable), Cross-cutting | NEG-01, VER-02 |
| 300 | `15-§26-6` | WS-G, Cross-cutting | NEG-01, VER-02, ERR-01 |
| 301 | `15-§28-1` | WS-D, WS-E, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, SRC-08, VER-01, SRC-07, IDM-02 |
| 302 | `3-§9-12` | WS-A, WS-B, WS-G, Cross-cutting, Gate | BAL-01, BAL-02, BAL-03, BAL-04, BAL-05, ID-05, OPS-01, HOLD-03, ID-02, ID-04, MIG-05, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-06, MIG-01, MIG-03, SEC-01, MIG-04, VER-01, CAD-03, PRIV-02 |
| 303 | `3-§11-6` | WS-G, Cross-cutting, Gate | AUTHZ-01, AUTHZ-02, AUTHZ-03, AUTHZ-04, AUTHZ-05, AUTHZ-06, AUTHZ-09, HOLD-01, HOLD-03, VER-01 |
| 304 | `3-§15-8` | WS-D, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, HOLD-03, IDM-02 |
| 305 | `3-§15-9` | WS-D, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, HOLD-03, IDM-02 |
| 306 | `3-§23` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, VER-01 |
| 307 | `24-§21-4` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 308 | `24-§21-5` | WS-D, WS-G, Cross-cutting, Gate | CNC-03, CNC-04, REV-01, AUTHZ-06, HOLD-01, HOLD-02, VER-03, CNC-02, VER-01 |
| 309 | `9-§12-11` | WS-C, Gate | LANG-01, HOLD-02 |
| 310 | `10-§17-5` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-02, VER-01 |
| 311 | `22-§17-3` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, MIG-01, MIG-03, SEC-01, VER-01 |
| 312 | `BP-§5.3-1` | WS-G (accountable), Cross-cutting | GOV-01, VER-07, GOV-02 |
| 313 | `BP-§5.4-1` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01, ERR-01 |
| 314 | `BP-§6.1-1` | WS-F, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, NEG-01, VER-02, AI-01, AUD-04 |
| 315 | `BP-§6.2-1` | WS-B, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, HOLD-01, HOLD-02, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, MIG-06, CAD-04, AUD-01 |
| 316 | `BP-§6.3-1` | WS-G (accountable), Cross-cutting, Gate | ARC-01, ARC-02, HOLD-03 |
| 317 | `BP-§6.5-1` | WS-C, WS-G, Gate | FUP-01, FUP-02, FUP-03, PRIV-02, PRIV-04, HOLD-04 |
| 318 | `BP-§8-1` | WS-C, Gate | LANG-01, HOLD-02 |
| 319 | `BP-§9-2` | WS-G (accountable), Cross-cutting | GOV-01, VER-07, GOV-02 |
| 320 | `BP-§9-AL` | WS-G (accountable), Cross-cutting | GOV-01, VER-07, GOV-02 |
| 321 | `BP-§10.3-C2` | WS-A, WS-G, Cross-cutting, Gate | LDG-01, LDG-02, ARC-02, AUD-01, SEC-02, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 322 | `BP-§10.5-O` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01 |
| 323 | `BP-§10.5-W1` | WS-A, WS-G, Cross-cutting, Gate | ID-01, ID-02, ID-04, ID-05, AUTHZ-05, SEC-03, HOLD-03, MIG-01, MIG-03, SEC-01, MIG-02, VER-01, MIG-06, MIG-05 |
| 324 | `BP-§10.5-W2` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | REP-01, REP-02, REP-03, REP-04, ID-03, CNC-01, IDM-02, BAL-04, HOLD-03, MIG-01, MIG-03, SEC-01, VER-03, CNC-02, VER-01, MIG-05 |
| 325 | `BP-§10.5-W3` | WS-A, WS-G, Cross-cutting, Gate | DUE-01, DUE-02, DUE-03, DUE-04, HOLD-03, HOLD-04, MIG-01, MIG-03, SEC-01, MIG-02, VER-01 |
| 326 | `BP-§10.5-W4` | WS-C, WS-G, Cross-cutting, Gate | THR-01, THR-02, THR-03, THR-04, AUD-02, HOLD-01, AUTHZ-03, MIG-01, MIG-03, SEC-01 |
| 327 | `BP-§10.5-W5` | WS-D, WS-E, WS-G, Cross-cutting, Gate | SRC-01, SRC-02, SRC-03, SRC-04, SRC-05, SRC-06, SRC-08, SEC-06, ARC-03, HOLD-03, HOLD-05, EVD-04, MIG-01, MIG-03, SEC-01, VER-01 |
| 328 | `BP-§10.5-W6` | WS-D, WS-E, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03, HOLD-05, SRC-08 |
| 329 | `BP-§10.5-W7` | WS-D, WS-G, Gate | MAT-01, MAT-02, MAT-03, OPS-01, HOLD-03 |
| 330 | `BP-§10.5-W8` | WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-01, HOLD-02, VER-01 |
| 331 | `BP-§10.5-W9` | WS-D, WS-G, Cross-cutting, Gate | IDM-01, IDM-02, IDM-03, ERR-02, HOLD-03, MIG-01, MIG-03, SEC-01, VER-01 |
| 332 | `BP-§10.5-W10` | WS-B, WS-D, Cross-cutting, Gate | REV-01, REV-02, REV-03, HOLD-03, HOLD-04, BAL-02, EVD-03, VER-01 |
| 333 | `BP-§10.5-W11` | WS-B, WS-G, Cross-cutting, Gate | AUD-01, AUD-02, AUD-03, BAL-04, ERR-04, HOLD-01, HOLD-03, VER-01 |
| 334 | `BP-§10.5-E1` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, VER-01 |
| 335 | `BP-§10.5-E2` | WS-B, WS-D, WS-E, Cross-cutting, Gate | VER-06, HOLD-03, HOLD-05, BAL-02, EVD-03, SRC-08, VER-01 |
| 336 | `BP-§10.5-E3` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-02, VER-01 |
| 337 | `BP-§10.5-E4` | WS-B, WS-D, Cross-cutting, Gate | VER-06, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01, CAD-03, IDM-02 |
| 338 | `BP-§10.5-A1` | WS-A, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, DUE-01, VER-01, VER-04 |
| 339 | `BP-§10.5-A2` | WS-G, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, AUTHZ-03, VER-01, VER-04 |
| 340 | `BP-§10.5-A3` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, VER-01, VER-04 |
| 341 | `BP-§10.5-B1` | WS-E, Cross-cutting, Gate | VER-06, HOLD-03, HOLD-05, SRC-08, VER-01, VER-05 |
| 342 | `BP-§10.5-B2` | WS-G (accountable), Cross-cutting, Gate | VER-06, HOLD-01, HOLD-02, VER-01, VER-05 |
| 343 | `BP-§10.5-B3` | WS-D, Cross-cutting, Gate | VER-06, HOLD-03, VER-01, VER-05, IDM-02 |
| 344 | `BP-§10.5-X` | WS-B, Cross-cutting, Gate | VER-06, HOLD-01, HOLD-03, CAD-01, CAD-02, CAD-06, CAD-07, CAD-08, HOLD-09, VER-01 |
| 345 | `BP-§11-1` | WS-F, Gate | ORD-01, HOLD-07 |
| 346 | `BP-§11-5` | WS-G (accountable), Cross-cutting | GOV-01, VER-07, GOV-02 |
| 347 | `BP-§13-1` | WS-G (accountable), Cross-cutting | GOV-01, VER-07, GOV-02 |
| 348 | `BP-§13-9` | WS-G (accountable), Cross-cutting | GOV-01, VER-07, GOV-02, VER-04, VER-05 |
| 349 | `BP-§14-1` | WS-G (accountable), Cross-cutting | GOV-01, VER-07, GOV-02 |

## 13. Workstream Row Counts

| Workstream | Obligations | Rows (through obligations) |
|---|---|---|
| WS-A | 12 | 48 |
| WS-B | 18 | 74 |
| WS-C | 8 | 40 |
| WS-D | 20 | 135 |
| WS-E | 10 | 48 |
| WS-F | 4 | 45 |
| WS-G | 35 | 231 |
| Cross-cutting | 19 | 288 |
| Gate | 9 | 301 |

Every one of the 349 rows is assigned to at least one workstream. 52 rows reach no builder workstream through their obligations and are carried by WS-G as accountable workstream. No row is assigned outside SB-P-1.16.

## 14. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. Nothing may be built from this prompt until the package is locked at Stage 13 **and** a separate Implementation Authorization is recorded; that authorization is currently **WITHHELD — IMPLEMENTATION NOT AUTHORIZED**.
