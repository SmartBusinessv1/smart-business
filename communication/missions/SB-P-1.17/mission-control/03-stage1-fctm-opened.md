# SB-P-1.17 — Stage 1 FCTM Opened (Empty Scaffold)

**State: OPENED FOR DISCOVERY — ZERO POPULATED OBLIGATION ROWS; NO CLASSIFICATIONS ADOPTED.**
**Baseline:** `main@0f0ca34bdb3b60720ff38d7ff0ec7cd70d7f10c4` (PRs #985 and #986 verified)
**Authority:** Source 18 §3.2, Stage 1; Build Plan §10.6; Global Product Completion View

| Advanced contract | Blob at intake | Acceptance scenarios to enumerate separately |
|---|---|---|
| C7 — Stock, Supplier & Reorder Intelligence | `65ad91b202def9cb4f42b97383bcc58475f59015` | 12 (C7 §15) |
| C13 — POS/Counter/Closing Cash | `4426e8b1f9e856047759bdb03e2f5b83820f8cc0` | 11 (C13 §21) |
| C17 — Operational Dashboard/Manager Workspace | `7943f74a88c2922acc697115f336b68baf7a503a` | 10 (C17 §22) |

**Source-linked row schema for population:** unique contract/section/scenario ID; exact source and blob; approved obligation wording/reference; Global Completion View assignment; mission scope class (IN SCOPE/PARTIAL/ASSIGNED TO OTHER MISSION/OUT OF SCOPE with authority); commercial category; status/evidence level; upstream/delegate dependency and hold; product/derived-truth marker; unresolved/T1–T8 trigger; verification target and evidence ID. Do not invent acceptance or implementation proof.

**Required audit:** one or more records for each section of every advanced/touched delegated contract; individual row per numbered acceptance scenario; trace source-delegated obligations across C7/C13/C17 to permission/identity, Ledger/stock, UDI, delegation/scheduler, AI, Product Master and other touched approved contracts. Confirm exact delegated blobs at the population baseline; do not assign wholesale later-mission contracts without touched behaviour. Do not silently omit missing-data, security, human-dignity, duplicate/mapping, and tenant-isolation obligations.

**Current status:** This file is an opening and schema, **not the populated FCTM**; row count is not yet known, 33 scenario seeds do not equal row count, and no `DEMONSTRATED` rows are claimed. Stage 2 population awaits explicit Mission Control go-ahead. STOP.
