# SB-P-1.17 — Lovable Build Prompt

```text
STATUS: APPROVED — LOCKED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED, blob f65ddd2a)
EIS: APPROVED — LOCKED (UNCHANGED, blob 5d681b0c)
FCTM: LOCKED (UNCHANGED, blob cb79088d; 630 rows, 404 IN SCOPE)
IMPLEMENTATION PACKAGE: APPROVED — LOCKED (Stage 13)
IMPLEMENTATION AUTHORIZATION: WITHHELD — IMPLEMENTATION NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
POS, AI, VOICE AND MESSAGING PROVIDER ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DEPLOYMENT: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission | SB-P-1.17 — Manager Operations |
| Document | Lovable Build Prompt (documentary planning) |
| Lifecycle stage | Source 18 v1.2 Stage 12 — Initial Implementation Package |
| Status | `APPROVED — LOCKED` |
| Authorization | Mission Control Stage 12 authorization (conversation-source): drafting only |
| Author | Claude Code (also author of Stages 2–9, the Stage 9 EIS draft and several Stage 10 corrections; not independent review) |
| Baseline | `main@ef3acbf5686fbb196efc0ee6d58f06d9bff78f42` (PR #1064 merge; PR #1063 merged at `8a4b19b1`) |
| Locked Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.17.md`, blob `f65ddd2a3c499d278b83f6ae83487669ed75670c` |
| Locked EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md`, blob `5d681b0c169dd12edc54a110a9fc9d54b87e2982` (157 requirements) |
| Canonical FCTM | `communication/missions/SB-P-1.17/claude-code/01-stage2-populated-fctm.md`, blob `cb79088d3fa59f8b3226fd9d11ff9c9573666670` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`, blob `0945bda60a93c99909c3b7a247d5427ebe256011` |
| Companion documents | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md` in `docs/implementation/SB-P-1.17/` |

## 2. What This Prompt Is

This is the **documentary planning** form of the future build prompt. It names bounded workstreams, their exact FCTM rows and EIS references, prerequisites, boundaries, prohibited behaviour and required verification. **It authorizes no build.** No builder may act on it until a separate Implementation Authorization names the builder, the workstream, the paths and the gates.

## 3. Read Before Any Future Build

`AGENTS.md`; Source 18 v1.2; the locked Blueprint, EIS and FCTM (Section 1); `engineering-contract.md`; `verification-checklist.md`; the upstream locked EIS SB-P-1.12 to SB-P-1.16; `docs/migration/README.md`.

## 4. Building Rules (apply to every workstream)

- Build only the rows of the authorized workstream and only the obligations they cite; behaviour outside them is forbidden.
- Consume upstream foundations; build no parallel permission, Ledger, inventory, import, AI, reminder, scheduler or notification authority.
- One governed write path per domain; no client DML on protected tables; every consequential write revalidates authority and consumes its confirmation in one transaction.
- Every new object is birth-safe (`EC17-SEC-01`); `SECURITY DEFINER` only through the SB-P-1.12 narrow-executor pattern (`EC17-SEC-02`).
- Fail narrowly and visibly; never guess, fabricate or zero-fill.
- Pause and escalate to Mission Control on any ambiguity, upstream gap, Product Truth question, T1–T8 trigger or hold that would need to be crossed.

## 5. Workstreams

Each `IN SCOPE` row belongs to exactly one workstream, by its Stage 7 component (Blueprint §20.8), following the Blueprint §7 workstream register.

### 5.1 SB-P-1.17/WS17-A — Stock Foundation, Signals and Supplier Memory

- **Scope:** Stage 7 components C-STK, C-SIG, C-SUP; Blueprint §8.1, §8.2, §8.3; **46 `IN SCOPE` rows** (Section 7).
- **Exact rows (46):** `7-§1-1`, `7-§1-2`, `7-§2-1`, `7-§2-2`, `7-§2-3`, `7-§2-4`, `7-§2-5`, `7-§2-6`, `7-§2-7`, `7-§2-8`, `7-§2-9`, `7-§2-10`, `7-§2-11`, `7-§2-12`, `7-§3-1`, `7-§3-2`, `7-§3-3`, `7-§3-4`, `7-§3-5`, `7-§3-6`, `7-§3-7`, `7-§3-8`, `7-§3-9`, `7-§8-1`, `7-§8-2`, `7-§8-3`, `7-§8-4`, `7-§8-5`, `7-§9-1`, `7-§9-2`, `7-§9-3`, `7-§16-6`, `3-§9-3`, `3-§11-6`, `3-§15-7`, `3-§15-10`, `BP-§10.3-S2`, `BP-§10.6-W1`, `BP-§10.6-W2`, `BP-§10.6-W3`, `BP-§10.6-W10`, `BP-§10.6-W11`, `BP-§10.6-W12`, `BP-§10.6-E3`, `BP-§11-7`, `GPCV-R7`.
- **EIS / Engineering Contract references (61):** ARC-01, ARC-02, ARC-04, ARC-05, STK-01, STK-02, STK-03, STK-04, STK-05, STK-06, STK-07, STK-08, SIG-01, SIG-02, SIG-03, SIG-04, SUP-01, SUP-02, SUP-03, SUP-04, SUP-05, SUP-06, SUP-07, RO-04, DOC-01, POS-11, TXN-02, TXN-03, TXN-04, TXN-06, TXN-09, TXN-10, AUTH-01, AUTH-03, WS-08, WS-10, WS-11, AUD-01, MIG-01, MIG-02, VER-01, VER-02, VER-03, VER-04, VER-05, VER-06, VER-08, VER-12, NEG-01, NEG-02, OPT-01, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-06, HOLD-07, HOLD-09, HOLD-13, HOLD-17, HOLD-22.
- **Prerequisites:** dependency codes on its rows: `D12` 29, `D14` 25, `DTX` 7, `D16` 2, `D13` 1, `DNTF` 1, `DPOS` 1, `DENT` 1. Upstream foundations implemented and accepted before any row is built; Implementation Authorization naming this workstream.
- **Retained holds:** HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-06, HOLD-07, HOLD-09, HOLD-13, HOLD-16, HOLD-17, HOLD-18, HOLD-21, HOLD-22.
- **Architecture boundary:** Extend the single SB-P-1.10 stock foundation additively (`inventory_items`, `inventory_movements`, `create_inventory_movement`); suppliers are SB-P-1.12 participants (`EIS-ID-03`); product identity is `catalog_products`. Supplier purchase prices are Reference Cost information released only through permissioned projections.
- **Permission boundary:** Owner by default; Managers only through capability 1 (view) and capability 3 (manage suppliers), scoped to items or suppliers. No Manager grant implies `catalog.cost.read`, `catalog.cost.write` or `catalog.margin.read`. Historical supplier attribution is Owner-confirmed only.
- **Prohibited:**
  - a second stock engine, a stock ledger outside `inventory_movements`, or dashboard-only stock state;
  - reinterpreting or backfilling historical movements, transactions or prices;
  - any automatically calculated threshold suggestion while the MC-507CM parameters (minimum observation duration, minimum outward-movement count, maximum staleness) are UNSET;
  - a universal numeric threshold default, or activating a threshold, alert or reorder action without explicit Owner confirmation;
  - inferring expiry, wastage, demand or "healthy stock";
  - linking a historical purchase to a supplier without explicit Owner confirmation, editing the original transaction, or creating a duplicate purchase;
  - exposing supplier purchase prices without `catalog.cost.read`, or any supplier-payable balance or settlement logic beyond FIN-01 PROVISIONAL;
- **Required verification before any later release:** row-keyed items for all 46 rows; negative checks NP-01, NP-06, NP-07, NP-08, NP-09, NP-14, NP-16, NP-21, NP-22, NP-26, NP-27, NP-34, NP-37; runtime scenarios RS-01, RS-11, RS-14; evidence classes T2 + T3 (32), DR (7), T2-NEG (5), T2-IDEM (4), EXP (3), T4 FRV-A (1), GATE (1).

### 5.2 SB-P-1.17/WS17-B — Reorder Intelligence, Standing Rules and Purchase Requests

- **Scope:** Stage 7 components C-RO; Blueprint §8.4; **31 `IN SCOPE` rows** (Section 7).
- **Exact rows (31):** `7-§4-1`, `7-§4-2`, `7-§4-3`, `7-§4-4`, `7-§4-5`, `7-§4-6`, `7-§4-7`, `7-§5-1`, `7-§5-2`, `7-§5-3`, `7-§5-4`, `7-§11-1.1`, `7-§11-1.2`, `7-§11-1.3`, `7-§11-1.4`, `7-§11-1.5`, `7-§11-1.6`, `7-§11-2.1`, `7-§11-2.2`, `7-§11-2.3`, `7-§11-2.4`, `7-§11-2.5`, `10-§13-6`, `12-§7-7`, `24-§18-3`, `24-§21-3`, `BP-§6.5-1`, `BP-§10.6-W4`, `BP-§10.6-W5`, `BP-§10.6-W6`, `BP-§11-6`.
- **EIS / Engineering Contract references (43):** ARC-01, STK-03, STK-05, STK-07, SIG-01, SIG-02, SIG-03, SUP-02, SUP-03, SUP-07, RO-01, RO-02, RO-03, RO-04, RO-05, RO-06, RO-07, RO-08, CTR-02, CC-04, AUTH-01, AUTH-02, AUTH-03, AUTH-04, AI-03, AI-04, AI-05, AI-06, FLR-03, VER-01, VER-02, VER-03, VER-06, VER-09, NEG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-10, HOLD-11, HOLD-12, HOLD-13.
- **Prerequisites:** dependency codes on its rows: `D12` 26, `D13` 25, `D14` 8, `D15` 6, `DAI` 6, `DSCH` 4, `DNTF` 2, `DV` 1. Upstream foundations implemented and accepted before any row is built; Implementation Authorization naming this workstream.
- **Retained holds:** HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-10, HOLD-11, HOLD-12, HOLD-13, HOLD-19, HOLD-22, HOLD-23.
- **Architecture boundary:** Suggestions are records with evidence; confirmation uses SB-P-1.12 `confirmation_bindings` (`EIS-CNF-01/02`); standing rules are Owner-only stored delegations (`EIS-AUT-01`, `EIS15-RUL-01` to `-06`); follow-ups use the SB-P-1.15 Reminder Engine.
- **Permission boundary:** Owner confirms by default; a Manager confirms, modifies or rejects only under capability 2 within item and supplier scope and any Owner-set value ceiling, revalidated at preview and commit. Standing-rule creation is Owner-only.
- **Prohibited:**
  - executing a reorder without Owner confirmation, a scoped capability-2 grant, or a valid Owner-created bounded standing rule;
  - treating a trigger, schedule or model output as permission;
  - fabricating demand forecasts, supplier availability or stock quantities;
  - showing a purchase request as sent or accepted, or recording a supplier reply, unless the merchant records it; any system dispatch before SB-P-1.20;
  - a separate reminder or scheduler path;
- **Required verification before any later release:** row-keyed items for all 31 rows; negative checks NP-01, NP-02, NP-04, NP-05, NP-06, NP-07, NP-08, NP-09, NP-11, NP-14, NP-15, NP-16, NP-26, NP-28, NP-30, NP-32, NP-35, NP-37; runtime scenarios RS-01, RS-05, RS-09; evidence classes T2 + T3 (21), T4 FRV-A (11), T2-NEG (11), DR (3).

### 5.3 SB-P-1.17/WS17-C — Standard POS Bridge, Intake Authority and Transaction Composition

- **Scope:** Stage 7 components C-POS; Blueprint §8.6, §20.9.1; **40 `IN SCOPE` rows** (Section 7).
- **Exact rows (40):** `7-§7-1`, `7-§7-2`, `7-§7-3`, `7-§7-4`, `13-§1-1`, `13-§1-2`, `13-§4-1`, `13-§4-2`, `13-§4-3`, `13-§4-4`, `13-§4-5`, `13-§4-6`, `13-§4-7`, `13-§4-8`, `13-§4-9`, `13-§4-10`, `13-§5-1`, `13-§5-2`, `13-§5-3`, `13-§5-4`, `13-§5-5`, `13-§5-6`, `13-§6-1`, `13-§6-2`, `13-§6-3`, `13-§6-4`, `13-§6-5`, `13-§6-6`, `13-§7-1`, `13-§7-2`, `13-§7-3`, `13-§7-4`, `13-§7-5`, `3-§15-11`, `22-§17-2`, `BP-§5.4-1`, `BP-§6.6-1`, `BP-§10.6-W7`, `BP-§10.6-E1`, `GPCV-R13`.
- **EIS / Engineering Contract references (45):** ARC-01, ARC-02, ARC-03, ARC-05, ARC-06, STK-02, STK-04, POS-01, POS-02, POS-03, POS-04, POS-05, POS-06, POS-07, POS-08, POS-09, POS-10, POS-11, POS-12, TXN-01, TXN-02, TXN-03, TXN-06, TXN-08, TXN-09, CTR-06, PRIV-01, PRIV-02, VER-01, VER-02, VER-03, VER-04, VER-05, VER-07, VER-08, NEG-01, HOLD-01, HOLD-03, HOLD-04, HOLD-07, HOLD-15, HOLD-16, HOLD-18, HOLD-20, HOLD-21.
- **Prerequisites:** dependency codes on its rows: `DPOS` 35, `D14` 14, `D12` 4, `DTX` 3. Upstream foundations implemented and accepted before any row is built; Implementation Authorization naming this workstream.
- **Retained holds:** HOLD-01, HOLD-03, HOLD-04, HOLD-07, HOLD-15, HOLD-16, HOLD-17, HOLD-18, HOLD-20, HOLD-21.
- **Architecture boundary:** One vendor-neutral bridge contract with two interface classes (`17:FPDR-2`). API/webhook intake follows Founder MC-507R A1: Owner-authorized, source-scoped `EIS-AUT-01` delegation, server-derived automation-run principal, `channel = integration`, `EIS-ISO-04` for protected execution. Ledger effects only through the sole SB-P-1.14 governed writer; stock only through `create_inventory_movement`; composition through the MC-507BT outer coordinator and SB-P-1.14 internal Ledger child (`EIS17-TXN-03`).
- **Permission boundary:** No fifth principal; provider authentication, source identity, credentials and `service_role` are never merchant authority; payload-supplied business, source, principal, role or actor identifiers are ignored. Commit revalidates credentials, source binding, delegation, grantor authority, scope and epochs.
- **Prohibited:**
  - custom client-specific POS modification in Smart Business core, or replacing the merchant's POS;
  - a second Ledger writer, direct `transactions` DML, a shadow revenue total, or a POS-specific Ledger type;
  - sequential independent Ledger and stock writes presented as atomic, or a mapped stock failure relabelled as mapping-pending to obtain a Ledger-only success;
  - reposting a Ledger sale on later stock application, or guessing a SKU, quantity or mapping;
  - auto-merging, suppressing or deleting a possible POS/manual duplicate;
  - activating any real POS source, credential or provider connection; synthetic fixtures presented as FRV-B or source feasibility;
  - a CSV-only downgrade of the committed bridge;
- **Required verification before any later release:** row-keyed items for all 40 rows; negative checks NP-03, NP-17, NP-18, NP-19, NP-20, NP-22, NP-23, NP-25, NP-31, NP-37; runtime scenarios RS-02, RS-04; evidence classes T2 + T3 (23), DR (13), T2-IDEM (8), T2-NEG (4), EXP (3), T4 FRV-B (1), GATE (1).

### 5.4 SB-P-1.17/WS17-D — Neutral Counter Review and Daily Closing Cash

- **Scope:** Stage 7 components C-CTR, C-CC; Blueprint §8.7, §8.8, §20.9.2; **59 `IN SCOPE` rows** (Section 7).
- **Exact rows (59):** `7-§14-1`, `7-§14-2`, `13-§2-6`, `13-§3-1`, `13-§3-2`, `13-§3-3`, `13-§3-4`, `13-§3-5`, `13-§3-6`, `13-§3-7`, `13-§8-1`, `13-§8-2`, `13-§8-3`, `13-§8-4`, `13-§8-5`, `13-§8-6`, `13-§8-7`, `13-§8-8`, `13-§8-9`, `13-§8-10`, `13-§9-1`, `13-§9-2`, `13-§9-3`, `13-§9-4`, `13-§9-5`, `13-§9-6`, `13-§9-7`, `13-§10-1`, `13-§10-2`, `13-§10-3`, `13-§10-4`, `13-§10-5`, `13-§10-6`, `13-§10-7`, `13-§10-8`, `13-§11-1`, `13-§11-2`, `13-§11-3`, `13-§11-4`, `13-§11-5`, `13-§11-6`, `13-§11-7`, `13-§15-1`, `13-§15-2`, `13-§15-3`, `13-§15-4`, `13-§15-5`, `13-§15-6`, `13-§15-7`, `13-§15-8`, `13-§18-1`, `13-§18-2`, `13-§18-3`, `13-§18-4`, `13-§18-5`, `BP-§3-1`, `BP-§10.6-W8`, `BP-§10.6-W9`, `BP-§10.6-E2`.
- **EIS / Engineering Contract references (47):** ARC-01, ARC-04, POS-10, POS-11, TXN-03, CTR-01, CTR-02, CTR-03, CTR-04, CTR-06, CTR-07, CC-01, CC-02, CC-03, CC-04, CC-05, CC-07, AUTH-02, AUTH-04, AUTH-08, FLR-03, AUD-01, AUD-03, PRIV-01, PRIV-02, PRIV-03, SEC-01, SEC-03, VER-01, VER-02, VER-03, VER-05, VER-07, VER-09, VER-11, NEG-01, OPT-01, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-10, HOLD-19, HOLD-20, HOLD-23.
- **Prerequisites:** dependency codes on its rows: `D12` 19, `DPOS` 17, `D14` 10, `D15` 7, `DSCH` 6, `DTX` 1, `D13` 1. Upstream foundations implemented and accepted before any row is built; Implementation Authorization naming this workstream.
- **Retained holds:** HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-10, HOLD-17, HOLD-19, HOLD-20, HOLD-21, HOLD-23.
- **Architecture boundary:** Counter signals derive only from source-declared fields; human context is a separate record. Closing follows Founder MC-507CG: daily only; local-midnight business-day cutoff under the historically effective timezone version (`tz.version_at`); affirmative per-source coverage (`EIS17-CC-03`); known opening float for COMPLETE; immutable linked closing versions.
- **Permission boundary:** Capability 4 views counter signals (scoped); capability 5 (operator-attributed detail) is Owner-only and non-delegable; capability 6 enters cash counts; capability 7 views variance. Only the Owner establishes or changes the opening float and closing-cash policy.
- **Prohibited:**
  - accusing staff, scoring employees, or any autonomous action (register lock, suspension, reversal, price change, checkout block, wage deduction);
  - processing identifiable operator data, matching neutral signals to a staff roster, or claiming neutral signals are anonymous (U-11 held);
  - shift closing, or inferring shift allocation for date-only records;
  - a COMPLETE result from missing, stale, unverified, superseded or contradictory source evidence, from an unknown float, before the period ends, or without a confirmed timezone version;
  - zero-filling a float, inventing timestamps, substituting `created_at` for occurrence time, or double-counting overlapping cash;
  - editing an earlier closing determination in place, or re-bucketing history after a prospective timezone change;
  - a fixed universal discount or anomaly threshold;
- **Required verification before any later release:** row-keyed items for all 59 rows; negative checks NP-01, NP-02, NP-03, NP-10, NP-11, NP-22, NP-28, NP-29, NP-30, NP-31, NP-33, NP-37; runtime scenarios RS-02, RS-03, RS-04, RS-09; evidence classes T2 + T3 (29), EXP (20), T2-NEG (19), T4 FRV-B (11), DR (7).

### 5.5 SB-P-1.17/WS17-E — Manager Workspace, Authorization and Conversation

- **Scope:** Stage 7 components C-WS, C-AUTH; Blueprint §8.9, §8.10; **95 `IN SCOPE` rows** (Section 7).
- **Exact rows (95):** `13-§12-1`, `13-§12-2`, `13-§12-3`, `13-§12-4`, `13-§12-5`, `13-§13-1`, `13-§13-2`, `13-§13-3`, `13-§13-4`, `13-§14-1a`, `13-§14-2`, `17-§1-1`, `17-§1-2`, `17-§2-9`, `17-§3-1`, `17-§3-2`, `17-§3-3`, `17-§3-4`, `17-§3-5`, `17-§3-6`, `17-§3-7`, `17-§4-1`, `17-§4-2`, `17-§4-3`, `17-§4-4`, `17-§4-5`, `17-§4-6`, `17-§4-7`, `17-§4-8`, `17-§4-9`, `17-§4-10`, `17-§4-11`, `17-§4-12`, `17-§4-13`, `17-§4-14`, `17-§4-16`, `17-§6-1`, `17-§6-2`, `17-§6-3`, `17-§6-4`, `17-§6-5`, `17-§6-6`, `17-§6-7`, `17-§6-8`, `17-§7-1`, `17-§7-2`, `17-§7-3`, `17-§7-4`, `17-§7-5`, `17-§7-6`, `17-§7-7`, `17-§7-8`, `17-§8-1`, `17-§8-2`, `17-§8-3`, `17-§8-4`, `17-§8-5`, `17-§8-6`, `17-§15-1`, `17-§15-2`, `17-§15-3`, `17-§15-4`, `17-§15-5`, `17-§15-6`, `17-§15-7`, `17-§15-8`, `17-§16-2`, `17-§16-3`, `17-§17-1`, `17-§17-2`, `17-§17-3`, `17-§17-4`, `17-§17-5`, `17-§17-6`, `17-§17-7`, `17-§17-8`, `17-§17-9`, `17-§18-3`, `17-§18-5`, `17-§19-1`, `17-§19-2`, `17-§21-1`, `17-§21-2`, `17-§21-3`, `17-§21-5`, `17-§23-2`, `17-§23-3`, `17-§23-4`, `9-§12-8`, `12-§4-4`, `BP-§6.1-1`, `BP-§8-1`, `BP-§10.6-O`, `BP-§10.6-X`, `GPCV-R17`.
- **EIS / Engineering Contract references (75):** ARC-01, ARC-02, ARC-03, ARC-05, ARC-06, STK-01, STK-03, STK-07, SIG-03, SIG-04, SUP-05, RO-01, RO-04, POS-11, TXN-08, TXN-11, TXN-12, CTR-01, CTR-02, CTR-06, CC-01, AUTH-01, AUTH-02, AUTH-03, AUTH-04, AUTH-05, AUTH-06, AUTH-07, AUTH-08, AI-01, AI-02, AI-03, AI-04, AI-06, WS-01, WS-02, WS-03, WS-04, WS-05, WS-06, WS-07, WS-08, WS-09, WS-10, WS-11, FLR-03, PRIV-02, SEC-01, SEC-02, SEC-03, MIG-05, VER-01, VER-02, VER-03, VER-05, VER-06, VER-07, VER-08, VER-09, VER-10, NEG-01, NEG-02, OPT-01, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06, HOLD-07, HOLD-09, HOLD-11, HOLD-12, HOLD-13, HOLD-14, HOLD-20.
- **Prerequisites:** dependency codes on its rows: `D12` 68, `D14` 19, `D13` 11, `DPOS` 9, `D15` 8, `D16` 3, `DENT` 3, `DAI` 2, `DPAY` 1, `DNTF` 1, `DV` 1. Upstream foundations implemented and accepted before any row is built; Implementation Authorization naming this workstream.
- **Retained holds:** HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06, HOLD-07, HOLD-09, HOLD-11, HOLD-12, HOLD-13, HOLD-14, HOLD-19, HOLD-20, HOLD-21.
- **Architecture boundary:** Role-aware cards read only governed feature readers; every read and command calls `authz.authorize` (`EIS-KER-01`) with a server-derived principal. Conversation, voice and Ask CFO consume SB-P-1.13 typed tools and SB-P-1.15 read-only Ask CFO.
- **Permission boundary:** Seven `17:FPDR-1` capabilities as server-owned normalized scoped grants (`delegated_grant → business_id → scope_type → object_id`); no union of partial grants; capability 5 non-delegable; Employees receive no Owner intelligence; no routine support browsing.
- **Prohibited:**
  - dashboard-only business logic or a second source of truth;
  - Owner intelligence, cost or margin exposed to Managers or Employees without the explicit grant;
  - caching that bypasses authorization or shows stale permissions;
  - manipulative engagement design or fear-based upsell;
  - AI that writes without a frozen confirmed proposal, places orders, invents quantities, infers theft, or receives unauthorized facts in context;
  - a merchant-facing grant interface while R15-11 is open;
- **Required verification before any later release:** row-keyed items for all 95 rows; negative checks NP-01, NP-02, NP-03, NP-06, NP-07, NP-08, NP-10, NP-11, NP-12, NP-13, NP-14, NP-18, NP-25, NP-30, NP-31, NP-32, NP-33, NP-36, NP-37; runtime scenarios RS-01, RS-02, RS-03, RS-10, RS-13; evidence classes T2 + T3 (57), T2-NEG (26), DR (19), EXP (17), T4 FRV-B (2), T4 FRV-A (1), GATE (1).

### 5.6 SB-P-1.17/WS17-F — Stock Documents, Failure Handling, Audit and Shared Foundations

- **Scope:** Stage 7 components C-DOC, C-FDN; Blueprint §8.5, §8.11; **99 `IN SCOPE` rows** (Section 7).
- **Exact rows (99):** `7-§6-1`, `7-§6-3`, `7-§6-4b`, `7-§6-5b`, `7-§12-1`, `7-§12-2`, `7-§12-3`, `7-§12-4`, `7-§12-5`, `7-§12-6`, `7-§12-7`, `7-§12-8`, `7-§12-9`, `7-§13-1`, `7-§13-2`, `7-§13-3`, `7-§13-4`, `7-§13-5`, `7-§13-6`, `7-§13-7`, `7-§13-8`, `7-§13-9`, `7-§13-10`, `7-§13-11`, `7-§13-12`, `7-§13-13`, `7-§16-1`, `7-§16-2`, `7-§16-3`, `7-§16-4`, `7-§16-5`, `13-§16-1`, `13-§16-2`, `13-§16-3`, `13-§16-4`, `13-§16-5`, `13-§16-6`, `13-§16-7`, `13-§16-8`, `13-§16-9`, `13-§16-10`, `13-§16-11`, `13-§16-12`, `13-§17-1`, `13-§17-2`, `13-§17-3`, `13-§17-4`, `13-§17-5`, `13-§17-6`, `13-§17-7`, `13-§17-8`, `13-§17-9`, `13-§17-10`, `13-§17-11`, `13-§17-12`, `13-§19-1`, `13-§19-2`, `13-§19-3`, `13-§19-4`, `13-§19-5`, `13-§19-6`, `13-§19-7`, `13-§19-8`, `13-§19-9`, `13-§19-10`, `13-§20-1`, `13-§20-2`, `13-§20-3`, `13-§20-4`, `13-§20-5`, `13-§20-6`, `13-§20-7`, `13-§22-1`, `13-§22-2`, `13-§22-3`, `13-§22-4`, `13-§22-5`, `17-§20-1`, `17-§20-2`, `17-§20-3`, `17-§20-4`, `17-§20-5`, `17-§20-6`, `17-§20-7`, `17-§20-8`, `17-§20-9`, `17-§20-10`, `17-§20-11`, `17-§20-12`, `5-§4-10`, `BP-§5.3-1`, `BP-§6.2-1`, `BP-§6.3-1`, `BP-§9-6`, `BP-§9-AL`, `BP-§13-1`, `BP-§13-9`, `BP-§14-1`, `GPCV-§11-2`.
- **EIS / Engineering Contract references (90):** ARC-01, ARC-02, ARC-03, ARC-04, ARC-05, STK-01, STK-04, STK-05, STK-06, STK-09, SUP-01, RO-02, RO-04, RO-05, RO-06, DOC-01, DOC-02, DOC-03, DOC-04, POS-02, POS-03, POS-05, POS-06, POS-08, POS-09, POS-10, POS-11, TXN-01, TXN-02, TXN-03, TXN-04, TXN-05, TXN-06, TXN-07, TXN-08, TXN-11, TXN-12, CTR-02, CTR-03, CTR-04, CTR-05, CTR-06, CTR-07, CC-01, CC-02, CC-03, CC-04, CC-06, AUTH-01, AUTH-06, AUTH-08, AI-01, AI-02, WS-09, FLR-01, FLR-02, FLR-03, AUD-01, AUD-02, AUD-03, PRIV-02, PRIV-03, SEC-01, SEC-02, SEC-04, MIG-01, MIG-03, MIG-04, VER-01, VER-02, VER-03, VER-04, VER-08, VER-10, NEG-01, NEG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-08, HOLD-10, HOLD-13, HOLD-15, HOLD-17, HOLD-18, HOLD-19, HOLD-20.
- **Prerequisites:** dependency codes on its rows: `D12` 42, `D14` 25, `DPOS` 24, `D15` 10, `D13` 5, `DNTF` 3, `DSCH` 1, `DSEC` 1, `DTX` 1. Upstream foundations implemented and accepted before any row is built; Implementation Authorization naming this workstream.
- **Retained holds:** HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-08, HOLD-10, HOLD-13, HOLD-15, HOLD-17, HOLD-18, HOLD-19, HOLD-20, HOLD-21, HOLD-23.
- **Architecture boundary:** Stock documents use SB-P-1.17 destination adapters on the single SB-P-1.14 UDI pipeline (modelled on `EIS14-ADP-02`). Failures fail narrowly with defined states; domain events are append-only; authority audit reuses SB-P-1.12.
- **Permission boundary:** Imports preview server-side, bind the confirmed material fingerprint and revalidate authority per row or bounded chunk (`EIS-CNF-05`). Audit records codes and references, not surveillance data.
- **Prohibited:**
  - a third import stack or direct promotion of the prior Lovable opening-stock code;
  - a failure that blocks unrelated operations or loses merchant input;
  - mutating or deleting originals; audit that captures operator surveillance data;
  - new objects that are usable by `PUBLIC`, `anon` or `authenticated` before RLS and intended grants, or `SECURITY DEFINER` without the SB-P-1.12 narrow-executor pattern;
- **Required verification before any later release:** row-keyed items for all 99 rows; negative checks NP-01, NP-02, NP-03, NP-04, NP-10, NP-13, NP-14, NP-15, NP-17, NP-18, NP-19, NP-20, NP-21, NP-22, NP-24, NP-25, NP-26, NP-28, NP-30, NP-31, NP-32, NP-33, NP-35, NP-37; runtime scenarios none; evidence classes DR (49), T2-NEG (39), T2 + T3 (37), T2-IDEM (7), GATE (2).

### 5.7 SB-P-1.17/WS17-G — Acceptance, Completion Gates and Founder Runtime Verification

- **Scope:** Stage 7 components C-ACC; Blueprint §8.12, §15; **34 `IN SCOPE` rows** (Section 7).
- **Exact rows (34):** `7-§15-1`, `7-§15-2b`, `7-§15-3`, `7-§15-4`, `7-§15-5`, `7-§15-6`, `7-§15-7`, `7-§15-8`, `7-§15-9`, `7-§15-11`, `7-§18-1`, `13-§21-1`, `13-§21-2`, `13-§21-3`, `13-§21-4`, `13-§21-5`, `13-§21-6`, `13-§21-7`, `13-§21-8`, `13-§21-9`, `13-§21-10`, `13-§21-11`, `13-§24-1`, `17-§22-1`, `17-§22-5`, `17-§22-6`, `17-§22-10b`, `17-§25-1`, `BP-§10.6-A1`, `BP-§10.6-A2`, `BP-§10.6-A3`, `BP-§10.6-A4`, `BP-§10.6-B1`, `BP-§10.6-B2`.
- **EIS / Engineering Contract references (58):** ARC-01, ARC-02, STK-05, STK-06, STK-07, STK-08, SIG-01, SIG-03, SIG-04, SUP-04, RO-01, RO-03, RO-04, RO-05, DOC-02, POS-01, POS-05, POS-06, POS-07, POS-09, POS-10, POS-11, POS-12, TXN-02, TXN-03, TXN-09, CTR-02, CTR-03, CC-02, CC-03, CC-04, AUTH-04, AI-02, WS-01, WS-05, WS-07, FLR-03, VER-01, VER-02, VER-03, VER-04, VER-05, VER-06, VER-07, VER-08, VER-09, VER-11, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-10, HOLD-16, HOLD-19, HOLD-21, HOLD-22.
- **Prerequisites:** dependency codes on its rows: `D12` 26, `D14` 17, `DPOS` 15, `D13` 6, `D15` 6, `DSCH` 1, `DTX` 1. Upstream foundations implemented and accepted before any row is built; Implementation Authorization naming this workstream.
- **Retained holds:** HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-05, HOLD-07, HOLD-10, HOLD-16, HOLD-17, HOLD-19, HOLD-21, HOLD-22, HOLD-23.
- **Architecture boundary:** Verification-only workstream. It realizes contract acceptance scenarios, completion gates and the Founder-reserved Scenarios A and B through the Verification Checklist; it builds no behaviour of its own.
- **Permission boundary:** FRV-A and FRV-B are Founder-reserved (Source 18 §4.2). FRV-B runs only on the first POS source evidenced to supply discount or void data (`17:FPDR-2`).
- **Prohibited:**
  - reporting any row, scenario or gate as passed without its evidence;
  - synthetic fixtures presented as FRV-B or as real-source evidence;
  - marking a dependency-, source-, calibration- or legal-held row as passed;
- **Required verification before any later release:** row-keyed items for all 34 rows; negative checks NP-04, NP-05, NP-11, NP-14, NP-15, NP-16, NP-19, NP-22, NP-23, NP-28, NP-30, NP-32, NP-34; runtime scenarios RS-01, RS-02, RS-03, RS-04, RS-05, RS-06, RS-07, RS-08, RS-09, RS-10, RS-11, RS-12, RS-13, RS-14, RS-15; evidence classes T2 + T3 (20), T4 FRV-A (5), T2-NEG (5), DR (4), GATE (3), T4 FRV-B (3), T2-IDEM (2), EXP (1).

## 6. Holds the Builder Must Not Cross

`HOLD-01` to `HOLD-23` of the locked EIS stay binding, including: MC410-R01 (`HOLD-15`), GA-03 assurance (`HOLD-16`), GA-04 atomicity (`HOLD-17`), GA-05 reversal (`HOLD-18`), closing source/time assurance (`HOLD-19`), U-11 (`HOLD-20`), DPOS/SA-04 (`HOLD-21`), MC-507CM calibration and T6/T8 (`HOLD-22`) and U-03 downstream assurance (`HOLD-23`). FIN-01 PROVISIONAL stands. A hold is crossed only by a separate Mission Control record.

## 7. Workstream-to-FCTM-Row Map (404 rows)

| # | FCTM row | Kind | Component | Workstream |
|---|---|---|---|---|
| 1 | `7-§1-1` | EXP | C-STK | WS17-A |
| 2 | `7-§1-2` | PRIN | C-STK | WS17-A |
| 3 | `7-§2-1` | OBL | C-STK | WS17-A |
| 4 | `7-§2-2` | OBL | C-STK | WS17-A |
| 5 | `7-§2-3` | OBL | C-STK | WS17-A |
| 6 | `7-§2-4` | OBL | C-STK | WS17-A |
| 7 | `7-§2-5` | OBL | C-STK | WS17-A |
| 8 | `7-§2-6` | OBL | C-SIG | WS17-A |
| 9 | `7-§2-7` | OBL | C-SIG | WS17-A |
| 10 | `7-§2-8` | OBL | C-SIG | WS17-A |
| 11 | `7-§2-9` | OBL | C-SIG | WS17-A |
| 12 | `7-§2-10` | OBL | C-STK | WS17-A |
| 13 | `7-§2-11` | OBL | C-STK | WS17-A |
| 14 | `7-§2-12` | RULE | C-STK | WS17-A |
| 15 | `7-§3-1` | RULE | C-SUP | WS17-A |
| 16 | `7-§3-2` | OBL | C-SUP | WS17-A |
| 17 | `7-§3-3` | OBL | C-SUP | WS17-A |
| 18 | `7-§3-4` | OBL | C-SUP | WS17-A |
| 19 | `7-§3-5` | OBL | C-SUP | WS17-A |
| 20 | `7-§3-6` | OBL | C-SUP | WS17-A |
| 21 | `7-§3-7` | OBL | C-SUP | WS17-A |
| 22 | `7-§3-8` | OBL | C-SUP | WS17-A |
| 23 | `7-§3-9` | NEG | C-SUP | WS17-A |
| 24 | `7-§4-1` | OBL | C-RO | WS17-B |
| 25 | `7-§4-2` | OBL | C-RO | WS17-B |
| 26 | `7-§4-3` | OBL | C-RO | WS17-B |
| 27 | `7-§4-4` | OBL | C-RO | WS17-B |
| 28 | `7-§4-5` | OBL | C-RO | WS17-B |
| 29 | `7-§4-6` | OBL | C-RO | WS17-B |
| 30 | `7-§4-7` | NEG | C-RO | WS17-B |
| 31 | `7-§5-1` | RULE | C-RO | WS17-B |
| 32 | `7-§5-2` | RULE | C-RO | WS17-B |
| 33 | `7-§5-3` | NEG | C-RO | WS17-B |
| 34 | `7-§5-4` | RULE | C-RO | WS17-B |
| 35 | `7-§6-1` | OBL | C-DOC | WS17-F |
| 36 | `7-§6-3` | OBL | C-DOC | WS17-F |
| 37 | `7-§6-4b` | RULE | C-DOC | WS17-F |
| 38 | `7-§6-5b` | NEG | C-DOC | WS17-F |
| 39 | `7-§7-1` | OBL | C-POS | WS17-C |
| 40 | `7-§7-2` | OBL | C-POS | WS17-C |
| 41 | `7-§7-3` | NEG | C-POS | WS17-C |
| 42 | `7-§7-4` | RULE | C-POS | WS17-C |
| 43 | `7-§8-1` | RULE | C-STK | WS17-A |
| 44 | `7-§8-2` | OBL | C-STK | WS17-A |
| 45 | `7-§8-3` | OBL | C-STK | WS17-A |
| 46 | `7-§8-4` | NEG | C-STK | WS17-A |
| 47 | `7-§8-5` | RULE | C-STK | WS17-A |
| 48 | `7-§9-1` | OBL | C-STK | WS17-A |
| 49 | `7-§9-2` | OBL | C-STK | WS17-A |
| 50 | `7-§9-3` | NEG | C-STK | WS17-A |
| 51 | `7-§11-1.1` | OBL | C-RO | WS17-B |
| 52 | `7-§11-1.2` | OBL | C-RO | WS17-B |
| 53 | `7-§11-1.3` | OBL | C-RO | WS17-B |
| 54 | `7-§11-1.4` | OBL | C-RO | WS17-B |
| 55 | `7-§11-1.5` | OBL | C-RO | WS17-B |
| 56 | `7-§11-1.6` | OBL | C-RO | WS17-B |
| 57 | `7-§11-2.1` | NEG | C-RO | WS17-B |
| 58 | `7-§11-2.2` | NEG | C-RO | WS17-B |
| 59 | `7-§11-2.3` | NEG | C-RO | WS17-B |
| 60 | `7-§11-2.4` | NEG | C-RO | WS17-B |
| 61 | `7-§11-2.5` | NEG | C-RO | WS17-B |
| 62 | `7-§12-1` | RULE | C-FDN | WS17-F |
| 63 | `7-§12-2` | RULE | C-FDN | WS17-F |
| 64 | `7-§12-3` | RULE | C-FDN | WS17-F |
| 65 | `7-§12-4` | RULE | C-FDN | WS17-F |
| 66 | `7-§12-5` | RULE | C-FDN | WS17-F |
| 67 | `7-§12-6` | RULE | C-FDN | WS17-F |
| 68 | `7-§12-7` | RULE | C-FDN | WS17-F |
| 69 | `7-§12-8` | RULE | C-FDN | WS17-F |
| 70 | `7-§12-9` | RULE | C-FDN | WS17-F |
| 71 | `7-§13-1` | OBL | C-FDN | WS17-F |
| 72 | `7-§13-2` | OBL | C-FDN | WS17-F |
| 73 | `7-§13-3` | OBL | C-FDN | WS17-F |
| 74 | `7-§13-4` | OBL | C-FDN | WS17-F |
| 75 | `7-§13-5` | OBL | C-FDN | WS17-F |
| 76 | `7-§13-6` | OBL | C-FDN | WS17-F |
| 77 | `7-§13-7` | OBL | C-FDN | WS17-F |
| 78 | `7-§13-8` | OBL | C-FDN | WS17-F |
| 79 | `7-§13-9` | OBL | C-FDN | WS17-F |
| 80 | `7-§13-10` | OBL | C-FDN | WS17-F |
| 81 | `7-§13-11` | OBL | C-FDN | WS17-F |
| 82 | `7-§13-12` | OBL | C-FDN | WS17-F |
| 83 | `7-§13-13` | RULE | C-FDN | WS17-F |
| 84 | `7-§14-1` | PRIN | C-CTR | WS17-D |
| 85 | `7-§14-2` | NEG | C-CTR | WS17-D |
| 86 | `7-§15-1` | SCN | C-ACC | WS17-G |
| 87 | `7-§15-2b` | SCN | C-ACC | WS17-G |
| 88 | `7-§15-3` | SCN | C-ACC | WS17-G |
| 89 | `7-§15-4` | SCN | C-ACC | WS17-G |
| 90 | `7-§15-5` | SCN | C-ACC | WS17-G |
| 91 | `7-§15-6` | SCN | C-ACC | WS17-G |
| 92 | `7-§15-7` | SCN | C-ACC | WS17-G |
| 93 | `7-§15-8` | SCN | C-ACC | WS17-G |
| 94 | `7-§15-9` | SCN | C-ACC | WS17-G |
| 95 | `7-§15-11` | SCN | C-ACC | WS17-G |
| 96 | `7-§16-1` | NEG | C-FDN | WS17-F |
| 97 | `7-§16-2` | NEG | C-FDN | WS17-F |
| 98 | `7-§16-3` | NEG | C-FDN | WS17-F |
| 99 | `7-§16-4` | NEG | C-FDN | WS17-F |
| 100 | `7-§16-5` | NEG | C-FDN | WS17-F |
| 101 | `7-§16-6` | NEG | C-SIG | WS17-A |
| 102 | `7-§18-1` | GATE | C-ACC | WS17-G |
| 103 | `13-§1-1` | EXP | C-POS | WS17-C |
| 104 | `13-§1-2` | EXP | C-POS | WS17-C |
| 105 | `13-§2-6` | PRIN | C-CTR | WS17-D |
| 106 | `13-§3-1` | PRIN | C-CTR | WS17-D |
| 107 | `13-§3-2` | PRIN | C-CTR | WS17-D |
| 108 | `13-§3-3` | PRIN | C-CTR | WS17-D |
| 109 | `13-§3-4` | PRIN | C-CTR | WS17-D |
| 110 | `13-§3-5` | PRIN | C-CTR | WS17-D |
| 111 | `13-§3-6` | PRIN | C-CTR | WS17-D |
| 112 | `13-§3-7` | NEG | C-CTR | WS17-D |
| 113 | `13-§4-1` | OBL | C-POS | WS17-C |
| 114 | `13-§4-2` | OBL | C-POS | WS17-C |
| 115 | `13-§4-3` | OBL | C-POS | WS17-C |
| 116 | `13-§4-4` | OBL | C-POS | WS17-C |
| 117 | `13-§4-5` | OBL | C-POS | WS17-C |
| 118 | `13-§4-6` | OBL | C-POS | WS17-C |
| 119 | `13-§4-7` | OBL | C-POS | WS17-C |
| 120 | `13-§4-8` | OBL | C-POS | WS17-C |
| 121 | `13-§4-9` | OBL | C-POS | WS17-C |
| 122 | `13-§4-10` | RULE | C-POS | WS17-C |
| 123 | `13-§5-1` | NEG | C-POS | WS17-C |
| 124 | `13-§5-2` | RULE | C-POS | WS17-C |
| 125 | `13-§5-3` | RULE | C-POS | WS17-C |
| 126 | `13-§5-4` | RULE | C-POS | WS17-C |
| 127 | `13-§5-5` | RULE | C-POS | WS17-C |
| 128 | `13-§5-6` | RULE | C-POS | WS17-C |
| 129 | `13-§6-1` | OBL | C-POS | WS17-C |
| 130 | `13-§6-2` | OBL | C-POS | WS17-C |
| 131 | `13-§6-3` | OBL | C-POS | WS17-C |
| 132 | `13-§6-4` | OBL | C-POS | WS17-C |
| 133 | `13-§6-5` | OBL | C-POS | WS17-C |
| 134 | `13-§6-6` | NEG | C-POS | WS17-C |
| 135 | `13-§7-1` | OBL | C-POS | WS17-C |
| 136 | `13-§7-2` | OBL | C-POS | WS17-C |
| 137 | `13-§7-3` | OBL | C-POS | WS17-C |
| 138 | `13-§7-4` | OBL | C-POS | WS17-C |
| 139 | `13-§7-5` | RULE | C-POS | WS17-C |
| 140 | `13-§8-1` | OBL | C-CTR | WS17-D |
| 141 | `13-§8-2` | OBL | C-CTR | WS17-D |
| 142 | `13-§8-3` | OBL | C-CTR | WS17-D |
| 143 | `13-§8-4` | OBL | C-CTR | WS17-D |
| 144 | `13-§8-5` | OBL | C-CTR | WS17-D |
| 145 | `13-§8-6` | OBL | C-CTR | WS17-D |
| 146 | `13-§8-7` | OBL | C-CTR | WS17-D |
| 147 | `13-§8-8` | RULE | C-CTR | WS17-D |
| 148 | `13-§8-9` | EXP | C-CTR | WS17-D |
| 149 | `13-§8-10` | NEG | C-CTR | WS17-D |
| 150 | `13-§9-1` | PRIN | C-CTR | WS17-D |
| 151 | `13-§9-2` | SCN | C-CTR | WS17-D |
| 152 | `13-§9-3` | SCN | C-CTR | WS17-D |
| 153 | `13-§9-4` | SCN | C-CTR | WS17-D |
| 154 | `13-§9-5` | SCN | C-CTR | WS17-D |
| 155 | `13-§9-6` | SCN | C-CTR | WS17-D |
| 156 | `13-§9-7` | OBL | C-CTR | WS17-D |
| 157 | `13-§10-1` | OBL | C-CC | WS17-D |
| 158 | `13-§10-2` | OBL | C-CC | WS17-D |
| 159 | `13-§10-3` | OBL | C-CC | WS17-D |
| 160 | `13-§10-4` | OBL | C-CC | WS17-D |
| 161 | `13-§10-5` | OBL | C-CC | WS17-D |
| 162 | `13-§10-6` | OBL | C-CC | WS17-D |
| 163 | `13-§10-7` | OBL | C-CC | WS17-D |
| 164 | `13-§10-8` | NEG | C-CC | WS17-D |
| 165 | `13-§11-1` | CONS | C-CC | WS17-D |
| 166 | `13-§11-2` | SCN | C-CC | WS17-D |
| 167 | `13-§11-3` | SCN | C-CC | WS17-D |
| 168 | `13-§11-4` | SCN | C-CC | WS17-D |
| 169 | `13-§11-5` | SCN | C-CC | WS17-D |
| 170 | `13-§11-6` | SCN | C-CC | WS17-D |
| 171 | `13-§11-7` | NEG | C-CC | WS17-D |
| 172 | `13-§12-1` | CONS | C-AUTH | WS17-E |
| 173 | `13-§12-2` | SCN | C-AUTH | WS17-E |
| 174 | `13-§12-3` | SCN | C-AUTH | WS17-E |
| 175 | `13-§12-4` | SCN | C-AUTH | WS17-E |
| 176 | `13-§12-5` | NEG | C-AUTH | WS17-E |
| 177 | `13-§13-1` | OBL | C-AUTH | WS17-E |
| 178 | `13-§13-2` | OBL | C-AUTH | WS17-E |
| 179 | `13-§13-3` | OBL | C-AUTH | WS17-E |
| 180 | `13-§13-4` | NEG | C-AUTH | WS17-E |
| 181 | `13-§14-1a` | OBL | C-AUTH | WS17-E |
| 182 | `13-§14-2` | RULE | C-AUTH | WS17-E |
| 183 | `13-§15-1` | NEG | C-CTR | WS17-D |
| 184 | `13-§15-2` | NEG | C-CTR | WS17-D |
| 185 | `13-§15-3` | NEG | C-CTR | WS17-D |
| 186 | `13-§15-4` | NEG | C-CTR | WS17-D |
| 187 | `13-§15-5` | NEG | C-CTR | WS17-D |
| 188 | `13-§15-6` | NEG | C-CTR | WS17-D |
| 189 | `13-§15-7` | NEG | C-CTR | WS17-D |
| 190 | `13-§15-8` | RULE | C-CTR | WS17-D |
| 191 | `13-§16-1` | OBL | C-FDN | WS17-F |
| 192 | `13-§16-2` | OBL | C-FDN | WS17-F |
| 193 | `13-§16-3` | OBL | C-FDN | WS17-F |
| 194 | `13-§16-4` | OBL | C-FDN | WS17-F |
| 195 | `13-§16-5` | OBL | C-FDN | WS17-F |
| 196 | `13-§16-6` | OBL | C-FDN | WS17-F |
| 197 | `13-§16-7` | OBL | C-FDN | WS17-F |
| 198 | `13-§16-8` | OBL | C-FDN | WS17-F |
| 199 | `13-§16-9` | OBL | C-FDN | WS17-F |
| 200 | `13-§16-10` | OBL | C-FDN | WS17-F |
| 201 | `13-§16-11` | OBL | C-FDN | WS17-F |
| 202 | `13-§16-12` | RULE | C-FDN | WS17-F |
| 203 | `13-§17-1` | OBL | C-FDN | WS17-F |
| 204 | `13-§17-2` | OBL | C-FDN | WS17-F |
| 205 | `13-§17-3` | OBL | C-FDN | WS17-F |
| 206 | `13-§17-4` | OBL | C-FDN | WS17-F |
| 207 | `13-§17-5` | OBL | C-FDN | WS17-F |
| 208 | `13-§17-6` | OBL | C-FDN | WS17-F |
| 209 | `13-§17-7` | OBL | C-FDN | WS17-F |
| 210 | `13-§17-8` | OBL | C-FDN | WS17-F |
| 211 | `13-§17-9` | OBL | C-FDN | WS17-F |
| 212 | `13-§17-10` | OBL | C-FDN | WS17-F |
| 213 | `13-§17-11` | OBL | C-FDN | WS17-F |
| 214 | `13-§17-12` | OBL | C-FDN | WS17-F |
| 215 | `13-§18-1` | NEG | C-CTR | WS17-D |
| 216 | `13-§18-2` | NEG | C-CTR | WS17-D |
| 217 | `13-§18-3` | NEG | C-CTR | WS17-D |
| 218 | `13-§18-4` | NEG | C-CTR | WS17-D |
| 219 | `13-§18-5` | PRIN | C-CTR | WS17-D |
| 220 | `13-§19-1` | RULE | C-FDN | WS17-F |
| 221 | `13-§19-2` | RULE | C-FDN | WS17-F |
| 222 | `13-§19-3` | RULE | C-FDN | WS17-F |
| 223 | `13-§19-4` | RULE | C-FDN | WS17-F |
| 224 | `13-§19-5` | RULE | C-FDN | WS17-F |
| 225 | `13-§19-6` | RULE | C-FDN | WS17-F |
| 226 | `13-§19-7` | RULE | C-FDN | WS17-F |
| 227 | `13-§19-8` | RULE | C-FDN | WS17-F |
| 228 | `13-§19-9` | RULE | C-FDN | WS17-F |
| 229 | `13-§19-10` | RULE | C-FDN | WS17-F |
| 230 | `13-§20-1` | NEG | C-FDN | WS17-F |
| 231 | `13-§20-2` | NEG | C-FDN | WS17-F |
| 232 | `13-§20-3` | NEG | C-FDN | WS17-F |
| 233 | `13-§20-4` | NEG | C-FDN | WS17-F |
| 234 | `13-§20-5` | NEG | C-FDN | WS17-F |
| 235 | `13-§20-6` | NEG | C-FDN | WS17-F |
| 236 | `13-§20-7` | NEG | C-FDN | WS17-F |
| 237 | `13-§21-1` | SCN | C-ACC | WS17-G |
| 238 | `13-§21-2` | SCN | C-ACC | WS17-G |
| 239 | `13-§21-3` | SCN | C-ACC | WS17-G |
| 240 | `13-§21-4` | SCN | C-ACC | WS17-G |
| 241 | `13-§21-5` | SCN | C-ACC | WS17-G |
| 242 | `13-§21-6` | SCN | C-ACC | WS17-G |
| 243 | `13-§21-7` | SCN | C-ACC | WS17-G |
| 244 | `13-§21-8` | SCN | C-ACC | WS17-G |
| 245 | `13-§21-9` | SCN | C-ACC | WS17-G |
| 246 | `13-§21-10` | SCN | C-ACC | WS17-G |
| 247 | `13-§21-11` | SCN | C-ACC | WS17-G |
| 248 | `13-§22-1` | NEG | C-FDN | WS17-F |
| 249 | `13-§22-2` | NEG | C-FDN | WS17-F |
| 250 | `13-§22-3` | NEG | C-FDN | WS17-F |
| 251 | `13-§22-4` | NEG | C-FDN | WS17-F |
| 252 | `13-§22-5` | NEG | C-FDN | WS17-F |
| 253 | `13-§24-1` | GATE | C-ACC | WS17-G |
| 254 | `17-§1-1` | EXP | C-WS | WS17-E |
| 255 | `17-§1-2` | RULE | C-WS | WS17-E |
| 256 | `17-§2-9` | PRIN | C-WS | WS17-E |
| 257 | `17-§3-1` | PRIN | C-WS | WS17-E |
| 258 | `17-§3-2` | PRIN | C-WS | WS17-E |
| 259 | `17-§3-3` | PRIN | C-WS | WS17-E |
| 260 | `17-§3-4` | PRIN | C-WS | WS17-E |
| 261 | `17-§3-5` | PRIN | C-WS | WS17-E |
| 262 | `17-§3-6` | PRIN | C-WS | WS17-E |
| 263 | `17-§3-7` | PRIN | C-WS | WS17-E |
| 264 | `17-§4-1` | OBL | C-WS | WS17-E |
| 265 | `17-§4-2` | OBL | C-WS | WS17-E |
| 266 | `17-§4-3` | CONS | C-WS | WS17-E |
| 267 | `17-§4-4` | OBL | C-WS | WS17-E |
| 268 | `17-§4-5` | OBL | C-WS | WS17-E |
| 269 | `17-§4-6` | OBL | C-WS | WS17-E |
| 270 | `17-§4-7` | OBL | C-WS | WS17-E |
| 271 | `17-§4-8` | OBL | C-WS | WS17-E |
| 272 | `17-§4-9` | OBL | C-WS | WS17-E |
| 273 | `17-§4-10` | OBL | C-WS | WS17-E |
| 274 | `17-§4-11` | OBL | C-WS | WS17-E |
| 275 | `17-§4-12` | OBL | C-WS | WS17-E |
| 276 | `17-§4-13` | OBL | C-WS | WS17-E |
| 277 | `17-§4-14` | OBL | C-WS | WS17-E |
| 278 | `17-§4-16` | RULE | C-WS | WS17-E |
| 279 | `17-§6-1` | OBL | C-WS | WS17-E |
| 280 | `17-§6-2` | OBL | C-WS | WS17-E |
| 281 | `17-§6-3` | CONS | C-WS | WS17-E |
| 282 | `17-§6-4` | OBL | C-WS | WS17-E |
| 283 | `17-§6-5` | CONS | C-WS | WS17-E |
| 284 | `17-§6-6` | OBL | C-WS | WS17-E |
| 285 | `17-§6-7` | RULE | C-WS | WS17-E |
| 286 | `17-§6-8` | NEG | C-WS | WS17-E |
| 287 | `17-§7-1` | OBL | C-WS | WS17-E |
| 288 | `17-§7-2` | OBL | C-WS | WS17-E |
| 289 | `17-§7-3` | OBL | C-WS | WS17-E |
| 290 | `17-§7-4` | OBL | C-WS | WS17-E |
| 291 | `17-§7-5` | OBL | C-WS | WS17-E |
| 292 | `17-§7-6` | OBL | C-WS | WS17-E |
| 293 | `17-§7-7` | OBL | C-WS | WS17-E |
| 294 | `17-§7-8` | NEG | C-WS | WS17-E |
| 295 | `17-§8-1` | OBL | C-WS | WS17-E |
| 296 | `17-§8-2` | OBL | C-WS | WS17-E |
| 297 | `17-§8-3` | OBL | C-WS | WS17-E |
| 298 | `17-§8-4` | OBL | C-WS | WS17-E |
| 299 | `17-§8-5` | OBL | C-WS | WS17-E |
| 300 | `17-§8-6` | NEG | C-WS | WS17-E |
| 301 | `17-§15-1` | RULE | C-WS | WS17-E |
| 302 | `17-§15-2` | OBL | C-WS | WS17-E |
| 303 | `17-§15-3` | OBL | C-WS | WS17-E |
| 304 | `17-§15-4` | OBL | C-WS | WS17-E |
| 305 | `17-§15-5` | OBL | C-WS | WS17-E |
| 306 | `17-§15-6` | OBL | C-WS | WS17-E |
| 307 | `17-§15-7` | OBL | C-WS | WS17-E |
| 308 | `17-§15-8` | NEG | C-WS | WS17-E |
| 309 | `17-§16-2` | RULE | C-WS | WS17-E |
| 310 | `17-§16-3` | RULE | C-WS | WS17-E |
| 311 | `17-§17-1` | OBL | C-WS | WS17-E |
| 312 | `17-§17-2` | OBL | C-WS | WS17-E |
| 313 | `17-§17-3` | OBL | C-WS | WS17-E |
| 314 | `17-§17-4` | OBL | C-WS | WS17-E |
| 315 | `17-§17-5` | OBL | C-WS | WS17-E |
| 316 | `17-§17-6` | OBL | C-WS | WS17-E |
| 317 | `17-§17-7` | OBL | C-WS | WS17-E |
| 318 | `17-§17-8` | OBL | C-WS | WS17-E |
| 319 | `17-§17-9` | RULE | C-WS | WS17-E |
| 320 | `17-§18-3` | NEG | C-WS | WS17-E |
| 321 | `17-§18-5` | NEG | C-WS | WS17-E |
| 322 | `17-§19-1` | OBL | C-WS | WS17-E |
| 323 | `17-§19-2` | NEG | C-WS | WS17-E |
| 324 | `17-§20-1` | RULE | C-FDN | WS17-F |
| 325 | `17-§20-2` | RULE | C-FDN | WS17-F |
| 326 | `17-§20-3` | RULE | C-FDN | WS17-F |
| 327 | `17-§20-4` | RULE | C-FDN | WS17-F |
| 328 | `17-§20-5` | RULE | C-FDN | WS17-F |
| 329 | `17-§20-6` | RULE | C-FDN | WS17-F |
| 330 | `17-§20-7` | RULE | C-FDN | WS17-F |
| 331 | `17-§20-8` | RULE | C-FDN | WS17-F |
| 332 | `17-§20-9` | RULE | C-FDN | WS17-F |
| 333 | `17-§20-10` | RULE | C-FDN | WS17-F |
| 334 | `17-§20-11` | RULE | C-FDN | WS17-F |
| 335 | `17-§20-12` | RULE | C-FDN | WS17-F |
| 336 | `17-§21-1` | NEG | C-WS | WS17-E |
| 337 | `17-§21-2` | NEG | C-WS | WS17-E |
| 338 | `17-§21-3` | NEG | C-WS | WS17-E |
| 339 | `17-§21-5` | NEG | C-WS | WS17-E |
| 340 | `17-§22-1` | SCN | C-ACC | WS17-G |
| 341 | `17-§22-5` | SCN | C-ACC | WS17-G |
| 342 | `17-§22-6` | SCN | C-ACC | WS17-G |
| 343 | `17-§22-10b` | SCN | C-ACC | WS17-G |
| 344 | `17-§23-2` | NEG | C-WS | WS17-E |
| 345 | `17-§23-3` | NEG | C-WS | WS17-E |
| 346 | `17-§23-4` | NEG | C-WS | WS17-E |
| 347 | `17-§25-1` | GATE | C-ACC | WS17-G |
| 348 | `3-§9-3` | OBL | C-SUP | WS17-A |
| 349 | `3-§11-6` | OBL | C-SUP | WS17-A |
| 350 | `3-§15-7` | RULE | C-SUP | WS17-A |
| 351 | `3-§15-10` | RULE | C-STK | WS17-A |
| 352 | `3-§15-11` | RULE | C-POS | WS17-C |
| 353 | `5-§4-10` | OBL | C-DOC | WS17-F |
| 354 | `9-§12-8` | OBL | C-AUTH | WS17-E |
| 355 | `10-§13-6` | OBL | C-RO | WS17-B |
| 356 | `12-§4-4` | OBL | C-AUTH | WS17-E |
| 357 | `12-§7-7` | OBL | C-RO | WS17-B |
| 358 | `22-§17-2` | RULE | C-POS | WS17-C |
| 359 | `24-§18-3` | SCN | C-RO | WS17-B |
| 360 | `24-§21-3` | OBL | C-RO | WS17-B |
| 361 | `BP-§3-1` | PRIN | C-CTR | WS17-D |
| 362 | `BP-§5.3-1` | RULE | C-FDN | WS17-F |
| 363 | `BP-§5.4-1` | RULE | C-POS | WS17-C |
| 364 | `BP-§6.1-1` | NEG | C-AUTH | WS17-E |
| 365 | `BP-§6.2-1` | RULE | C-FDN | WS17-F |
| 366 | `BP-§6.3-1` | RULE | C-FDN | WS17-F |
| 367 | `BP-§6.5-1` | RULE | C-RO | WS17-B |
| 368 | `BP-§6.6-1` | RULE | C-POS | WS17-C |
| 369 | `BP-§8-1` | RULE | C-AUTH | WS17-E |
| 370 | `BP-§9-6` | RULE | C-FDN | WS17-F |
| 371 | `BP-§9-AL` | RULE | C-FDN | WS17-F |
| 372 | `BP-§10.3-S2` | OBL | C-SUP | WS17-A |
| 373 | `BP-§10.6-O` | EXP | C-WS | WS17-E |
| 374 | `BP-§10.6-W1` | WORK | C-SUP | WS17-A |
| 375 | `BP-§10.6-W2` | WORK | C-SIG | WS17-A |
| 376 | `BP-§10.6-W3` | WORK | C-SIG | WS17-A |
| 377 | `BP-§10.6-W4` | WORK | C-RO | WS17-B |
| 378 | `BP-§10.6-W5` | WORK | C-RO | WS17-B |
| 379 | `BP-§10.6-W6` | WORK | C-RO | WS17-B |
| 380 | `BP-§10.6-W7` | WORK | C-POS | WS17-C |
| 381 | `BP-§10.6-W8` | WORK | C-CTR | WS17-D |
| 382 | `BP-§10.6-W9` | WORK | C-CC | WS17-D |
| 383 | `BP-§10.6-W10` | WORK | C-SUP | WS17-A |
| 384 | `BP-§10.6-W11` | WORK | C-STK | WS17-A |
| 385 | `BP-§10.6-W12` | WORK | C-SUP | WS17-A |
| 386 | `BP-§10.6-E1` | EXP | C-POS | WS17-C |
| 387 | `BP-§10.6-E2` | EXP | C-CTR | WS17-D |
| 388 | `BP-§10.6-E3` | EXP | C-STK | WS17-A |
| 389 | `BP-§10.6-A1` | FRV | C-ACC | WS17-G |
| 390 | `BP-§10.6-A2` | FRV | C-ACC | WS17-G |
| 391 | `BP-§10.6-A3` | FRV | C-ACC | WS17-G |
| 392 | `BP-§10.6-A4` | FRV | C-ACC | WS17-G |
| 393 | `BP-§10.6-B1` | FRV | C-ACC | WS17-G |
| 394 | `BP-§10.6-B2` | FRV | C-ACC | WS17-G |
| 395 | `BP-§10.6-X` | EXP | C-WS | WS17-E |
| 396 | `BP-§11-6` | RULE | C-RO | WS17-B |
| 397 | `BP-§11-7` | RULE | C-STK | WS17-A |
| 398 | `BP-§13-1` | RULE | C-FDN | WS17-F |
| 399 | `BP-§13-9` | RULE | C-FDN | WS17-F |
| 400 | `BP-§14-1` | RULE | C-FDN | WS17-F |
| 401 | `GPCV-§11-2` | NEG | C-DOC | WS17-F |
| 402 | `GPCV-R7` | RULE | C-STK | WS17-A |
| 403 | `GPCV-R13` | RULE | C-POS | WS17-C |
| 404 | `GPCV-R17` | RULE | C-WS | WS17-E |

## 8. Workstream Row Counts

| Workstream | Rows |
|---|---:|
| WS17-A Stock Foundation, Signals and Supplier Memory | 46 |
| WS17-B Reorder Intelligence, Standing Rules and Purchase Requests | 31 |
| WS17-C Standard POS Bridge, Intake Authority and Transaction Composition | 40 |
| WS17-D Neutral Counter Review and Daily Closing Cash | 59 |
| WS17-E Manager Workspace, Authorization and Conversation | 95 |
| WS17-F Stock Documents, Failure Handling, Audit and Shared Foundations | 99 |
| WS17-G Acceptance, Completion Gates and Founder Runtime Verification | 34 |
| **Total** | **404** |

## 9. Status

`APPROVED — LOCKED`. Documentary planning only. **Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
