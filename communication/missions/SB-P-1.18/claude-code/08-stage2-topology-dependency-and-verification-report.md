# SB-P-1.18 — Stage 2 Topology, Dependency and Verification Report

**Mission:** SB-P-1.18 — Controlled Business Add-ons
**Status:** `DRAFT STAGE 2 OUTPUT — NOT CANONICAL UNTIL MISSION CONTROL STAGE 2 REVIEW AND FOUNDER HUMAN MERGE`
**Prepared by:** Claude Code, Definition Actor, under `mission-control/05-stage2-mission-truth-and-delta-authorization.md` (PR #1079)
**Baseline:** `main@ccfdd28a322073be67a0ea7c3658ec8685b7d2cc`, 2026-10-25
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Scope and method

This report separates **specified** dependencies (locked upstream documents) from **implemented** ones (evidence in the repository or on a platform). Every fact below was read without mutation:

- `git` against `origin/main@ccfdd28a`;
- `gh run list` and `gh api` GET requests against `SmartBusinessv1/smart-business`;
- existing mission records.

No database, Supabase project, Lovable project, provider console, production domain or delivery repository was queried. Under the guide's evidence doctrine (§8), repository text does not prove deployed state, and unknown stays unknown.

## 2. Repository facts (`REPO`)

| Fact | Evidence |
|---|---|
| Migrations | 24 files in `supabase/migrations/`; the last change to `supabase/` or `src/` is `6c71abe7` (2026-09-14) |
| Tables | 21, all `CREATE TABLE`: `businesses`, `business_tax_settings`, `transactions`, `transaction_correction_events`, `inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`, twelve `catalog_*` tables, `parser_preview_guards`, `parser_upload_leases` |
| SB-P-1.18 objects | **None.** No order, order line, delivery, assignment, proof, customer, employee, shift, roster, attendance, leave, payroll, compliance, renewal, membership, role, entitlement or location table, function or route |
| Authorization model | 87 `CREATE POLICY` statements; the predicate shape is `business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid())`. Isolation is **Owner-only**; no Manager, Employee, Delivery Staff or Customer principal exists |
| `anon` exposure | A default-grant migration grants `ALL ON TABLES` and function execution to `anon`. A table-level `REVOKE … FROM anon` exists for `inventory_items`, but **none** for `businesses`, `transactions` or `transaction_correction_events` (Build Plan §5.1 still open in repository text; live grants not verified; Δ-13) |
| Application routes | Public: `index`, `start`, `auth`, `reset-password`, `how-it-works`, `contact`, `privacy-policy`, `terms-of-service`, `super-admin` (a reserved placeholder; "Functionality is not implemented"). Authenticated: `dashboard`, `transactions`, `inventory`, `catalog` (+ import, detail) |
| Server functions | `catalog-import.ts`, `parser-lease.ts` |
| CI definitions | `build-assurance.yml`, `full-assurance.yml`, `markdown-quality-gate.yml`, plus three AWS parser workflows from SB-P-1.11 |

## 3. Upstream dependency register: specified versus implemented

| Code | What SB-P-1.18 needs | Specified in | Implemented at this baseline | `IN SCOPE` rows carrying it |
|---|---|---|---|---|
| `D12` | Memberships and roles for Manager, Employee, Delivery Staff and Customer; capability grants; self-service mechanics (21-§10); participant minimum-information rules (21-§13); support access (21-§14); entitlements (21-§16); revalidation (21-§17); confirmation binding (21-§18); audit and idempotency (22-§14, 22-§15) | SB-P-1.12 Blueprint `77d52096`, EIS `8b0aaa79`, Stage 13 package (locked) | **No.** Owner-only RLS; no membership or role object | 276 |
| `D13` | Conversation Workspace, Human Language Layer, AI intent and tools, clarification and confirmation | SB-P-1.13 Blueprint `bbf65429`, EIS `58199842` | **No** | 120 |
| `D14` | Business Memory and Ledger, UDI pipeline (customer/order lists, rosters, licences), Receipt Cabinet, governed storage | SB-P-1.14 Blueprint `256828d2`, EIS `7dfad7b5` | **No.** Parser primitives exist (SB-P-1.11); no shared UDI pipeline or durable object storage | 121 |
| `D15` | Reminder Engine, Notification Foundation (native only, `12:FPDR-1`), Daily Intelligence, Ask CFO | SB-P-1.15 Blueprint `0ab2ad6f`, EIS `75dcf385` | **No** | 52 |
| `D16` | COD and payment-evidence linkage (15-§15), credit linkage (14-§13), one financial truth | SB-P-1.16 Blueprint `305571a6`, EIS `46fffd7b`; FIN-01 PROVISIONAL | **No** | 17 |
| `D17` | Stock availability (7-§2) for substitution; Manager workspace shell for 17-§9 and 17-§10 | SB-P-1.17 Blueprint `f65ddd2a`, EIS `5d681b0c` | **No.** `inventory_items` and movements exist (SB-P-1.10), but there is no availability service or Manager workspace | 25 |
| `DTX` | One governed transactions-family write path for COD linkage | SB-P-1.13/1.14 PQ-2 | **No.** Cut-over undecided; migration NOT AUTHORIZED | 5 |
| `DSCH` | Scheduler and business timezone (renewals, shifts) | SB-P-1.15 | **Unverified**; activation NOT AUTHORIZED | 9 |
| `DAI`, `DV` | AI and voice providers behind SB-P-1.13 | SB-P-1.13 | **Unverified**; activation NOT AUTHORIZED | 43, 6 |
| `DR2` | Durable object storage for documents and proof media | SB-P-1.14 (BP §5.4) | **Unverified**; activation NOT AUTHORIZED | (through `D14`) |
| `DENT` | Add-on entitlement state | 21-§16 (SB-P-1.12); C18 (SB-P-1.19) | **No.** No entitlement object | 13 |
| `DNTF` | Out-of-app channel to customers or delivery staff | None before SB-P-1.20 | **No** (U-01) | 22 |
| `DPAY` | Payment-evidence source | SB-P-1.16 | **No source selected**; NOT AUTHORIZED | 2 |
| `DLOC` | Point-in-time device location and QR attendance | This mission (WS-D, `12:FPDR-2`) | **No.** Nothing exists | 39 |
| `DMAP` | Map/address handling | — | **No.** Provider choice is an EIS item (U-13) | 1 |
| `DLEG` | Qualified legal and privacy validation | — | **Not obtained** (U-14) | 0 (carried by the `ESCALATED` row `22-§16-6`) |
| `D19`, `D20` | SB-P-1.19 support access and entitlement; SB-P-1.20 WhatsApp | Not yet specified (no Stage 2) | **No** | 5, 1 |
| `DPOS`, `DSEC` | POS source; server-side secret home | SB-P-1.17 | Not needed by any SB-P-1.18 row; `DSEC` arises only if a map or OTP provider is adopted | 0 |

**Reading.** Nearly every `IN SCOPE` row depends on at least one upstream kernel that is specified but not implemented. Exactly as in SB-P-1.12 to SB-P-1.17, SB-P-1.18 can reach a truthful documentary boundary, but none of its rows can be demonstrated before `D12`, `D13`, `D14` and `D15` exist. That is a sequencing fact. It is not a reason to move or simplify any row (Source 18 §3.2 item 5).

## 4. Topology (`TOPO`, `PROV`)

| Item | Observation (2026-10-25 unless stated) | Status |
|---|---|---|
| Canonical repository | `SmartBusinessv1/smart-business`, default branch `main`, `origin/main` = `ccfdd28a` (PR #1079 merge), verified as containing `ccfdd28a322073be67a0ea7c3658ec8685b7d2cc` | Verified |
| Repository visibility | `gh repo view`: `visibility: PUBLIC`, `isPrivate: false` (viewer permission ADMIN) | Verified. **Differs from SB-P-1.16 records (PRIVATE, MC-189)**; Δ-06 |
| Branch protection on `main` | `GET branches/main/protection` → 404 "Branch not protected"; `GET rules/branches/main` → `[]`; `GET rulesets` → `[]` | Verified. **Differs from `CLAUDE.md`** ("configured and independently verified"); Δ-06 |
| CI on `main` | "Team LIPS Markdown Quality Gate" and "Team LIPS Application Build Assurance" `success` on `ccfdd28a` (13:56:38Z), `8d69714c` and `49f28419` | Verified for configured checks only |
| GitHub provider state | Restriction provider-cleared (MC-72, 2026-10-19); Actions executed successfully at this baseline | Partially re-verified (Actions run) |
| Lovable | Owner ownership verified; GitHub sync "needs fresh verification" (MC-72) | **Not re-verified** |
| Supabase | Account and both projects Founder-verified accessible; GitHub-independent resilience not established (MC-72) | **Not re-verified**; no grant, RLS or schema state read live |
| Resend | Secondary admin deferred (MC-72) | Not re-verified |
| Delivery repository and production domain | Volatile (Build Plan §5.3) | **Not inspected** |

Before any external action, the following must be freshly verified: delivery repository sync, Lovable publication path, production and test Supabase effective grants and RLS (including Δ-13), the CI required-check state, and the repository visibility and protection settings (Δ-06).

## 5. Security, permission and isolation unknowns

1. **Principals.** Every SB-P-1.18 role (Manager, Employee, Delivery Staff, Customer) depends on `D12`; Owner-only RLS cannot represent them.
2. **Cross-business isolation** for new order, staff, compliance and location tables must follow the same server-side pattern, with negative tests (C1 §26 b13, C6 §14 b10). No test fixtures exist.
3. **Location data** is personal data. Its retention (U-03), access-end and audience rules (`22-§16-4`, `-7`) and legal validation (U-14) are open.
4. **Customer data** (contacts, addresses) is merchant-owned and must never be reused across merchants (C1 §25 b7); export controls depend on `D12`.
5. **Support access** to employee data and compliance documents depends on 21-§14 (SB-P-1.12) and SB-P-1.19 tooling.
6. **Residual `anon` grants** (Δ-13) and **unprotected `main` on a public repository** (Δ-06) are open platform-level risks that the Definition Actor cannot resolve.

## 6. Verification-plan seed (no verification performed)

| Element | Seed |
|---|---|
| Mandatory specialist reviews (Source 18 §4.8; Stage 1 disposition §2) | Security/RLS and permissions; Supabase schema, idempotency and concurrency; financial integrity (COD, Ledger non-duplication); legal/privacy (`DLEG`) |
| Material-risk separation | A specialist who did not author Sections 1–19 independently reviews the Sections 20–21 feasibility and risk findings if Claude Code is the Engineering Review or EIS actor (Stage 1 disposition §2 item 2) |
| Independent verifier | Codex is the provisional preferred non-author candidate (not appointed). Claude Code cannot verify rows it defined or built |
| Founder-reserved | Build Plan §10.7 Scenarios A, B and C (`BP-§10.7-AS1`, `-BS1`, `-CS1`) |
| Delegable checks | Role denials, cross-business isolation, delivery-staff minimum information, employee self-view limits, support-access denial |
| Negative families seeded in the FCTM | Rows with verification target `NEG` or `IDEM` |

Nothing above is a test, a result or evidence of behaviour.

**STOP FOR MISSION CONTROL STAGE 2 REVIEW.**
