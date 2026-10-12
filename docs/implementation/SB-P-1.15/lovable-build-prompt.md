# SB-P-1.15 — Lovable Build Prompt

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: DRAFT — STAGE 13 REVIEW REQUIRED
IMPLEMENTATION AUTHORIZATION: WITHHELD — IMPLEMENTATION NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
SCHEDULER / AI PROVIDER / EXTERNAL CHANNEL ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DELIVERY: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.15 |
| Mission Name | Reminder, Daily Intelligence & Ask CFO |
| Document | Lovable Build Prompt (Source 18 Stage 12; package template Phase B) |
| Package set | `engineering-contract.md`, `lovable-build-prompt.md`, `verification-checklist.md`, authored and reviewed as one set |
| Version | 0.1 |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code — Source 18 Stage 12 initial implementation package owner |
| Authorizing record | SB-P-1.15-MC-86 (`communication/missions/SB-P-1.15/mission-control/86-stage11-eis-lock-and-stage12-documentary-authority.md`, blob `2d625f32`, §4), canonical through PR #948; Stage 12 handoff by Mission Control against `main@5c485ebb2c037047bf9fbd7d5a6470b0c7dba57d` |
| Canonical baseline | `main@5c485ebb2c037047bf9fbd7d5a6470b0c7dba57d` |
| Date | 2026-10-12 |
| Next gate | Source 18 Stage 13 — Implementation Package Review by Mission Control; Implementation Authorization is a separate later disposition and remains WITHHELD |

## 2. Builder Identity and Artifact Name

Source 18 Section 4.5 keeps the artifact path `lovable-build-prompt.md` whatever builder is assigned. **No builder is named.** When an Implementation Authorization names a builder for a workstream, that builder's identity is recorded on this artifact. **Do not execute this prompt** until the package is `APPROVED — LOCKED` at Stage 13 **and** a separate Implementation Authorization explicitly permits it. Under the Phase 1 operating pattern that authorization is currently **WITHHELD — IMPLEMENTATION NOT AUTHORIZED**.

## 3. Read Before Building

Read, in this order, and treat each as binding:

1. `AGENTS.md` and `CLAUDE.md`;
2. the locked Product Blueprint, blob `0ab2ad6f12cedc54836d766bac7a2e9c0e1e03e5`;
3. the locked EIS, blob `75dcf38593f79e17e101e0efa80bef20fe24b31f`;
4. Founder decisions FPDR-01, FPDR-02, FPDR-03, MC-74, MC-75 D1–D3 and MC-80;
5. the SB-P-1.12, SB-P-1.13 and SB-P-1.14 locked EIS consumption conditions;
6. the Engineering Contract (`engineering-contract.md`) once locked;
7. this Build Prompt once locked;
8. the Verification Checklist (`verification-checklist.md`) once locked;
9. the Implementation Authorization and any migration mission for the workstream;
10. `docs/migration/README.md` before anything that touches `supabase/migrations/**`.

This prompt references the Engineering Contract and does not restate or alter its obligations. Where they differ, the Engineering Contract prevails and the builder pauses (Section 10).

## 4. What This Prompt Does Not Authorize

No build. No code, schema, SQL, migration or its execution; no scheduler runtime selection or activation; no AI provider selection, configuration or activation; no email, SMS, push, Resend or WhatsApp channel; no secrets or environment change; no Supabase or production mutation; no deployment, release or delivery; no crossing of any hold in Section 9.

## 5. Repository Scope and Paths

| Path | Treatment |
|---|---|
| `src/**`, `tests/**` | Candidate implementation paths, writable only for the workstreams and paths an Implementation Authorization lists (candidate module paths per workstream in Section 7) |
| `supabase/migrations/**` | Writable only under an explicit migration mission meeting `docs/migration/README.md`; never executed from file presence |
| `supabase/functions/**`, scheduler or cron configuration | Not authorized; scheduler runtime selection is gated (`EC15-SCH-10`) |
| `docs/implementation/SB-P-1.15/evidence/**` | Evidence only, created when an authorized stage produces evidence |
| `docs/phase-1-mission-blueprint/**` (locked Blueprint and EIS) | **Prohibited** |
| `communication/missions/SB-P-1.15/claude-code/03-stage2-populated-fctm.md`, `founder/**` | **Prohibited** |
| `.github/workflows/**`, branch protection, repository settings | **Prohibited** |
| `merge/active/**`, `AGENTS.md`, `CLAUDE.md`, governance sources | **Prohibited** |
| Secrets, environment files, credentials, provider consoles | **Prohibited**; never committed or printed |

## 6. Building Rules

- Work repository-first and reuse upstream specifications instead of building parallel foundations: the SB-P-1.12 kernel, capability registry, idempotency and privileged-operation contract; the SB-P-1.13 Workspace, gateway, tool registry and governed command; the SB-P-1.14 governed Ledger read model and correction command. **Do not claim or simulate any of these exists**: until implemented and accepted, dependent obligations wait (`EC15-HOLD-01` to `-04`).
- Build only the assigned FCTM rows of the authorized workstream, through the Engineering Contract obligations listed for them. No feature expansion.
- **Current principal and business scope** on every read, command, job and notification; the business is server-derived and persisted on work items.
- **No Manager intelligence or Ask CFO access by role alone.** Access only through explicit, current Owner delegation, enforced on data access with required-scope AND semantics. **Build no merchant-facing DC-06 permission UX**: no grant screen, label, default bundle or delegation workflow (DC-06 is PROPOSED).
- Timezone confirmation and change are Owner-only and non-delegable.
- **Zero-write Ask CFO**: no write grant, no write tool, no DTX reachability; retrieved content is untrusted data.
- **Native first**: no external channel before SB-P-1.20; a notification request is never delivery.
- **Standard POS bridge only**: no client-specific POS modification or fork inside the core.
- No feature flag, test flag or environment switch that weakens a permission, isolation, confirmation, revocation or denial check.
- Every authority-bearing change ships with its Verification Checklist items: named negative-path checks and runtime scenarios for its rows.
- AI calls only through the SB-P-1.13 gateway; tests use mocked or recorded providers and no live key in CI.
- Never verify, approve or accept your own work.

## 7. Workstreams

A row appears under every workstream whose obligations realize it; a workstream builds only its own obligations for that row. Rows realized only by cross-cutting or gate obligations are listed under their accountable workstream (Engineering Contract Section 13.1).

### 7.1 SB-P-1.15/WS-A — Shared Reminder Engine

| Field | Value |
|---|---|
| Scope | Blueprint §8.1; obligations below |
| Owning mission | SB-P-1.15 |
| Prerequisites | WS-C (scheduler, timezone); D12 kernel; D13 Human Language Layer for text/voice creation |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P2 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/reminders/**`, `src/server-functions/reminders*`, `src/routes/_authenticated/**` (due surfaces only), `tests/reminders/**` |
| Expected schema (migration mission only) | M3 reminder tables |
| EIS requirements advanced | `EIS15-TZ-05`, `EIS15-REM-01`, `EIS15-REM-02`, `EIS15-REM-03`, `EIS15-REM-04`, `EIS15-REM-05`, `EIS15-REM-06`, `EIS15-REM-07`, `EIS15-REM-08` |
| Obligations | `EC15-TZ-05`, `EC15-REM-01`, `EC15-REM-02`, `EC15-REM-03`, `EC15-REM-04`, `EC15-REM-05`, `EC15-REM-06`, `EC15-REM-07`, `EC15-REM-08` |
| Negative tests | NP-03, NP-14, NP-19 |
| Runtime scenarios | RS-01, RS-06, RS-07, RS-08, RS-09 |
| Verification evidence | Verification Checklist row items for every row below, with their planned evidence classes; all PROPOSED — NOT EXECUTED |
| FCTM rows (265) | `2-§2-4`, `2-§2-7`, `2-§3-2`, `2-§3-5`, `2-§3-8`, `2-§3-16`, `2-§3-18`, `2-§5-12`, `2-§5-13`, `2-§7-3`, `2-§7-10`, `2-§8-10`, `2-§9-3`, `2-§10-1`, `2-§10-2`, `2-§10-4`, `2-§10-7`, `2-§11-3`, `2-§11-5`, `2-§11-6`, `2-§11-8`, `2-§11-10`, `2-§11-11`, `2-§12-2`, `2-§12-4`, `2-§12-6`, `2-§12-9`, `2-§12-10`, `2-§14-4`, `2-§14-7`, `2-§15-1`, `2-§15-2`, `2-§15-3`, `2-§15-4`, `2-§15-5`, `2-§15-7`, `2-§17-7`, `2-§17-8`, `2-§18-2`, `2-§18-3`, `2-§18-4`, `2-§19-7`, `2-§20-5`, `2-§23-5`, `2-§24-6`, `2-§24-7`, `2-§25-3`, `2-§25-7`, `2-§25-8`, `2-§25-9`, `2-§25-18`, `2-§25-22a`, `2-§26-5`, `2-§26-7`, `2-§27-5`, `2-§27-6`, `2-§29-4`, `2-§29-10`, `4-§2-5`, `4-§3-2`, `4-§3-3`, `4-§3-4`, `4-§3-5`, `4-§3-6`, `4-§3-7`, `4-§3-8`, `4-§4-4`, `4-§4-5`, `4-§4-6`, `4-§5-4`, `4-§5-5`, `4-§5-7`, `4-§5-9`, `4-§6-3`, `4-§6-5`, `4-§6-7`, `4-§6-8`, `4-§6-9`, `4-§6-10`, `4-§6-11`, `4-§9-7`, `4-§10-8`, `4-§11-3`, `4-§11-5`, `4-§11-6`, `4-§13-3`, `4-§13-5`, `4-§14-2`, `4-§15-3`, `4-§16-1`, `4-§16-8`, `11-§1-1`, `11-§1-2`, `11-§2-9`, `11-§3-1`, `11-§3-2`, `11-§3-3`, `11-§3-4`, `11-§3-5`, `11-§3-6`, `11-§3-7`, `11-§3-8`, `11-§4-1`, `11-§4-2`, `11-§4-3`, `11-§4-4`, `11-§4-5`, `11-§4-6`, `11-§4-7`, `11-§4-8`, `11-§4-9`, `11-§4-10`, `11-§4-11`, `11-§4-12`, `11-§4-13`, `11-§5-1`, `11-§5-2`, `11-§5-3`, `11-§5-4`, `11-§5-5`, `11-§6-1`, `11-§6-2`, `11-§6-3`, `11-§6-4`, `11-§6-5`, `11-§6-6`, `11-§6-7`, `11-§7-1`, `11-§7-2`, `11-§7-3`, `11-§8-1`, `11-§8-2`, `11-§8-3`, `11-§8-4`, `11-§8-5`, `11-§8-6`, `11-§8-7`, `11-§8-8`, `11-§8-9`, `11-§9-1`, `11-§9-2`, `11-§9-3`, `11-§9-4`, `11-§9-5`, `11-§9-6`, `11-§9-7`, `11-§10-1`, `11-§10-2`, `11-§10-4`, `11-§10-11`, `11-§11-12`, `11-§11-13`, `11-§11-14`, `11-§12-1`, `11-§12-2`, `11-§13-1`, `11-§13-2`, `11-§13-3`, `11-§13-4`, `11-§14-1`, `11-§14-3`, `11-§15-1`, `11-§15-2`, `11-§17-3`, `11-§17-5`, `11-§18-1`, `11-§18-2`, `11-§18-3`, `11-§18-4`, `11-§18-5`, `11-§18-6`, `11-§18-7`, `11-§18-8`, `11-§18-9`, `11-§18-10`, `11-§18-11`, `11-§18-12`, `11-§19-1`, `11-§19-2`, `11-§19-3`, `11-§19-4`, `11-§20-1`, `11-§20-2`, `11-§20-3`, `11-§20-4`, `11-§20-5`, `11-§20-6`, `11-§20-7`, `11-§20-8`, `11-§21-1`, `11-§21-2`, `11-§21-3`, `11-§21-4`, `11-§21-5`, `11-§21-6`, `11-§22-1`, `11-§22-2`, `11-§22-3`, `11-§22-4`, `11-§22-6`, `11-§22-7`, `11-§22-8`, `11-§22-9`, `11-§22-10`, `11-§22-11`, `11-§22-12`, `11-§23-1`, `11-§23-2`, `11-§23-3`, `11-§23-4`, `11-§23-5`, `22-§11-1`, `22-§11-2`, `22-§11-3`, `22-§11-4`, `22-§11-5`, `22-§11-6`, `22-§11-7`, `22-§11-8`, `22-§11-9`, `22-§12-2`, `22-§12-5`, `22-§12-9`, `22-§18-2`, `22-§28-4`, `22-§28-6`, `22-§29-4`, `22-§29-12`, `24-§13-1`, `24-§18-2`, `24-§31-10`, `9-§12-2`, `9-§12-3`, `9-§12-6`, `9-§17-5`, `9-§17-6`, `10-§5-7`, `10-§11-4`, `10-§13-4`, `12-§4-2`, `12-§4-3`, `12-§11-6`, `12-§12-1`, `12-§12-3`, `12-§13-1`, `12-§13-2`, `12-§21-3`, `12-§21-4`, `3-§13-3`, `3-§15-6`, `BP-§9-4`, `BP-§10.4-W1`, `BP-§10.4-W2`, `BP-§10.4-W3`, `BP-§10.4-W5`, `BP-§10.4-E1`, `BP-§10.4-A1`, `BP-§10.4-A2`, `BP-§10.4-B1`, `BP-§10.4-B3`, `BP-§6.2`, `BP-§6.5`, `BP-§8`, `BP-§11-4`, `BP-§13` |

Forbidden in this workstream, in addition to Section 8:

- feature-specific reminder tables or schedulers;
- recording a payment, order, renewal or delivery because a reminder is due or done;
- creating occurrences or dispatch for a business without a confirmed timezone;

### 7.2 SB-P-1.15/WS-B — Delegated Automation and Consequential Continuation

| Field | Value |
|---|---|
| Scope | Blueprint §8.2; obligations below |
| Owning mission | SB-P-1.15 |
| Prerequisites | WS-A, WS-C; D12 kernel (`EIS-AUT-01`); DTX/PQ-2 for financial effects |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P3 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/standing-rules/**`, `src/server-functions/standing-rules*`, `tests/standing-rules/**` |
| Expected schema (migration mission only) | M4 standing-rule tables |
| EIS requirements advanced | `EIS15-PRIV-04`, `EIS15-RUL-01`, `EIS15-RUL-02`, `EIS15-RUL-03`, `EIS15-RUL-04`, `EIS15-RUL-05`, `EIS15-RUL-06` |
| Obligations | `EC15-PRIV-04`, `EC15-RUL-01`, `EC15-RUL-02`, `EC15-RUL-03`, `EC15-RUL-04`, `EC15-RUL-05`, `EC15-RUL-06` |
| Negative tests | NP-05, NP-12, NP-19 |
| Runtime scenarios | RS-02, RS-16 |
| Verification evidence | Verification Checklist row items for every row below, with their planned evidence classes; all PROPOSED — NOT EXECUTED |
| FCTM rows (105) | `2-§2-9`, `2-§3-5`, `2-§3-6`, `2-§3-10`, `2-§5-13`, `2-§7-12`, `2-§8-10`, `2-§11-11`, `2-§14-7`, `2-§14-8`, `2-§15-6`, `2-§17-2`, `2-§18-1`, `2-§20-6`, `2-§25-17`, `2-§25-22a`, `2-§29-7`, `2-§29-11`, `4-§2-4`, `4-§3-3`, `4-§7-2`, `4-§10-1`, `4-§11-7`, `4-§16-8`, `4-§17-2`, `11-§3-4`, `11-§3-5`, `11-§3-6`, `11-§3-8`, `11-§4-10`, `11-§5-4`, `11-§6-7`, `11-§8-1`, `11-§9-7`, `11-§10-1`, `11-§10-2`, `11-§10-3`, `11-§10-4`, `11-§10-5`, `11-§10-6`, `11-§10-7`, `11-§10-8`, `11-§10-9`, `11-§10-10`, `11-§10-11`, `11-§11-1`, `11-§11-2`, `11-§11-3`, `11-§11-4`, `11-§11-5`, `11-§11-6`, `11-§11-7`, `11-§11-8`, `11-§11-9`, `11-§11-10`, `11-§11-11`, `11-§11-12`, `11-§11-13`, `11-§11-14`, `11-§11-15`, `11-§12-1`, `11-§12-2`, `11-§12-3`, `11-§13-1`, `11-§13-2`, `11-§13-4`, `11-§16-1`, `11-§16-2`, `11-§16-3`, `11-§16-4`, `11-§16-5`, `11-§16-6`, `11-§18-6`, `11-§18-7`, `11-§18-8`, `11-§19-4`, `11-§20-8`, `11-§21-2`, `11-§21-3`, `11-§21-5`, `11-§22-3`, `11-§22-6`, `11-§22-7`, `11-§22-8`, `11-§22-9`, `11-§23-3`, `22-§11-7`, `22-§11-8`, `22-§18-7`, `22-§18-11`, `22-§21-6`, `22-§29-7`, `24-§12-9`, `24-§13-1`, `24-§18-2`, `9-§12-6`, `10-§9-2`, `12-§13-2`, `3-§13-3`, `BP-§10.4-W3`, `BP-§10.4-W4`, `BP-§10.4-W9`, `BP-§10.4-A2`, `BP-§10.4-B2`, `BP-§6.2` |

Forbidden in this workstream, in addition to Section 8:

- a standing rule that widens itself or is created by AI;
- any Ledger write outside the governed DTX/PQ-2 command;
- executing a consequential action on stale confirmation or revoked authority;

### 7.3 SB-P-1.15/WS-C — Scheduler, Background-Job Foundation and Business Timezone

| Field | Value |
|---|---|
| Scope | Blueprint §8.3; obligations below |
| Owning mission | SB-P-1.15 |
| Prerequisites | D12 kernel; scheduler runtime selection and authorization (EQ15-01) |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P1 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/scheduler/**`, `src/lib/business-timezone/**`, `src/server-functions/scheduler*`, `timezone*`, `tests/scheduler/**`, `tests/timezone/**` |
| Expected schema (migration mission only) | M1 timezone tables; M2 slot registry and scheduler tables |
| EIS requirements advanced | `EIS15-AUTHZ-03`, `EIS15-PRIV-02`, `EIS15-PRIV-03`, `EIS15-TZ-01`, `EIS15-TZ-02`, `EIS15-TZ-03`, `EIS15-TZ-04`, `EIS15-TZ-06`, `EIS15-TZ-07`, `EIS15-TZ-08`, `EIS15-TZ-09`, `EIS15-TZ-10`, `EIS15-SCH-01`, `EIS15-SCH-02`, `EIS15-SCH-03`, `EIS15-SCH-04`, `EIS15-SCH-05`, `EIS15-SCH-06`, `EIS15-SCH-07`, `EIS15-SCH-08`, `EIS15-SCH-09`, `EIS15-SCH-10`, `EIS15-SCH-11` |
| Obligations | `EC15-AUTHZ-03`, `EC15-PRIV-02`, `EC15-PRIV-03`, `EC15-TZ-01`, `EC15-TZ-02`, `EC15-TZ-03`, `EC15-TZ-04`, `EC15-TZ-06`, `EC15-TZ-07`, `EC15-TZ-08`, `EC15-TZ-09`, `EC15-TZ-10`, `EC15-SCH-01`, `EC15-SCH-02`, `EC15-SCH-03`, `EC15-SCH-04`, `EC15-SCH-05`, `EC15-SCH-06`, `EC15-SCH-07`, `EC15-SCH-08`, `EC15-SCH-09`, `EC15-SCH-10`, `EC15-SCH-11` |
| Negative tests | NP-01, NP-06, NP-08, NP-13, NP-14, NP-17, NP-18, SR6-10 |
| Runtime scenarios | RS-09, RS-10, RS-11, RS-12, RS-18 |
| Verification evidence | Verification Checklist row items for every row below, with their planned evidence classes; all PROPOSED — NOT EXECUTED |
| FCTM rows (349) | `2-§3-4`, `2-§3-8`, `2-§4-6`, `2-§4-9`, `2-§7-2`, `2-§7-9`, `2-§8-2`, `2-§8-10`, `2-§10-3`, `2-§10-7`, `2-§11-8`, `2-§11-11`, `2-§11-14`, `2-§12-14`, `2-§14-7`, `2-§17-4`, `2-§17-7`, `2-§17-8`, `2-§18-1`, `2-§18-2`, `2-§18-3`, `2-§18-4`, `2-§19-1`, `2-§19-2`, `2-§19-9`, `2-§21-3`, `2-§22-5`, `2-§23-7`, `2-§24-6`, `2-§24-9`, `2-§25-22a`, `2-§25-29`, `2-§26-9`, `2-§26-11`, `2-§27-2`, `4-§1-1`, `4-§1-2`, `4-§1-3`, `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§2-4`, `4-§2-5`, `4-§3-1`, `4-§3-2`, `4-§3-3`, `4-§3-4`, `4-§3-5`, `4-§3-6`, `4-§3-7`, `4-§3-8`, `4-§3-9`, `4-§3-10`, `4-§4-1`, `4-§4-2`, `4-§4-3`, `4-§4-4`, `4-§4-5`, `4-§4-6`, `4-§4-7`, `4-§4-8`, `4-§5-1`, `4-§5-2`, `4-§5-3`, `4-§5-4`, `4-§5-5`, `4-§5-6`, `4-§5-7`, `4-§5-8`, `4-§5-9`, `4-§5-10`, `4-§6-1`, `4-§6-2`, `4-§6-3`, `4-§6-4`, `4-§6-5`, `4-§6-6`, `4-§6-7`, `4-§6-8`, `4-§6-9`, `4-§6-10`, `4-§6-11`, `4-§6-12`, `4-§7-1`, `4-§7-2`, `4-§7-3`, `4-§7-4`, `4-§8-2`, `4-§8-3`, `4-§8-4`, `4-§9-1`, `4-§9-2`, `4-§9-3`, `4-§9-4`, `4-§9-5`, `4-§9-6`, `4-§9-8`, `4-§10-1`, `4-§10-2`, `4-§10-3`, `4-§10-4`, `4-§10-5`, `4-§10-6`, `4-§10-7`, `4-§10-8`, `4-§11-1`, `4-§11-2`, `4-§11-3`, `4-§11-4`, `4-§11-5`, `4-§11-6`, `4-§11-7`, `4-§12-1`, `4-§12-2`, `4-§12-3`, `4-§12-4`, `4-§12-5`, `4-§13-1`, `4-§13-2`, `4-§13-3`, `4-§13-5`, `4-§13-6`, `4-§13-7`, `4-§13-8`, `4-§13-9`, `4-§14-1`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `4-§16-4`, `4-§16-5`, `4-§16-7`, `4-§16-8`, `4-§16-9`, `4-§16-10`, `4-§16-11`, `4-§17-1`, `11-§1-1`, `11-§1-2`, `11-§3-1`, `11-§3-2`, `11-§3-3`, `11-§3-4`, `11-§3-5`, `11-§3-6`, `11-§3-7`, `11-§3-8`, `11-§4-1`, `11-§4-2`, `11-§4-3`, `11-§4-4`, `11-§4-5`, `11-§4-6`, `11-§4-7`, `11-§4-8`, `11-§4-9`, `11-§4-10`, `11-§4-11`, `11-§4-12`, `11-§4-13`, `11-§5-1`, `11-§5-2`, `11-§5-3`, `11-§5-4`, `11-§5-5`, `11-§6-1`, `11-§6-2`, `11-§6-3`, `11-§6-4`, `11-§6-5`, `11-§6-6`, `11-§6-7`, `11-§7-1`, `11-§7-2`, `11-§7-3`, `11-§8-1`, `11-§8-2`, `11-§8-3`, `11-§8-4`, `11-§8-5`, `11-§8-6`, `11-§8-7`, `11-§8-8`, `11-§8-9`, `11-§9-1`, `11-§9-2`, `11-§9-3`, `11-§9-4`, `11-§9-5`, `11-§9-6`, `11-§9-7`, `11-§10-1`, `11-§10-2`, `11-§10-3`, `11-§10-4`, `11-§10-5`, `11-§10-6`, `11-§10-7`, `11-§10-8`, `11-§10-9`, `11-§10-10`, `11-§10-11`, `11-§11-1`, `11-§11-2`, `11-§11-3`, `11-§11-4`, `11-§11-5`, `11-§11-6`, `11-§11-7`, `11-§11-8`, `11-§11-9`, `11-§11-10`, `11-§11-11`, `11-§11-12`, `11-§11-13`, `11-§11-14`, `11-§11-15`, `11-§12-1`, `11-§12-2`, `11-§12-3`, `11-§14-1`, `11-§14-3`, `11-§15-2`, `11-§16-1`, `11-§16-2`, `11-§16-3`, `11-§16-4`, `11-§16-5`, `11-§16-6`, `11-§17-1`, `11-§17-2`, `11-§17-3`, `11-§17-4`, `11-§17-5`, `11-§17-6`, `11-§17-7`, `11-§17-8`, `11-§18-1`, `11-§18-2`, `11-§18-3`, `11-§18-4`, `11-§18-5`, `11-§18-6`, `11-§18-7`, `11-§18-9`, `11-§18-10`, `11-§18-11`, `11-§18-12`, `11-§20-7`, `11-§21-1`, `11-§21-4`, `11-§22-1`, `11-§22-2`, `11-§22-3`, `11-§22-4`, `11-§22-6`, `11-§22-8`, `11-§22-10`, `11-§22-11`, `11-§22-12`, `11-§23-1`, `11-§23-4`, `11-§23-5`, `22-§11-1`, `22-§11-2`, `22-§11-3`, `22-§11-4`, `22-§11-5`, `22-§11-6`, `22-§11-7`, `22-§11-8`, `22-§11-9`, `22-§12-1`, `22-§12-2`, `22-§12-3`, `22-§12-4`, `22-§12-5`, `22-§12-6`, `22-§12-7`, `22-§12-8`, `22-§12-9`, `22-§18-1`, `22-§18-2`, `22-§18-3`, `22-§18-4`, `22-§18-5`, `22-§18-6`, `22-§18-7`, `22-§18-8`, `22-§18-9`, `22-§18-10`, `22-§18-11`, `22-§19-8`, `22-§19-1`, `22-§19-2`, `22-§19-5`, `22-§22-3`, `22-§27-4`, `22-§27-8`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§29-4`, `22-§29-8`, `22-§29-10`, `24-§5-4`, `24-§12-4`, `24-§13-1`, `24-§16-1`, `24-§16-2`, `24-§16-3`, `24-§16-4`, `24-§16-5`, `24-§16-6`, `24-§16-7`, `24-§18-1b`, `24-§18-2`, `24-§31-10`, `9-§12-3`, `9-§17-5`, `10-§5-7`, `10-§9-2`, `10-§11-4`, `10-§13-4`, `12-§4-3`, `12-§13-1`, `12-§13-2`, `12-§21-4`, `3-§13-3`, `3-§14-1`, `3-§15-6`, `17-§11-1`, `17-§11-3`, `BP-§10.4-W1`, `BP-§10.4-W2`, `BP-§10.4-W3`, `BP-§10.4-W4`, `BP-§10.4-W5`, `BP-§10.4-W7`, `BP-§10.4-W9`, `BP-§10.4-E2`, `BP-§10.4-A1`, `BP-§10.4-A2`, `BP-§6.2`, `BP-§6.5`, `BP-§11-4` |

Forbidden in this workstream, in addition to Section 8:

- any slot other than 07:00, 10:30, 22:00 business-local;
- a timezone default, `NOT NULL` or backfill;
- Manager or staff timezone confirmation;
- scheduler or runtime activation in production;

### 7.4 SB-P-1.15/WS-D — Shared Notification Foundation (native only)

| Field | Value |
|---|---|
| Scope | Blueprint §8.4; obligations below |
| Owning mission | SB-P-1.15 |
| Prerequisites | WS-C; D12 recipient authority; SB-P-1.20 for any channel |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P4 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/notifications/**`, `src/server-functions/notifications*`, `tests/notifications/**` |
| Expected schema (migration mission only) | M5 notification tables and activation boundary |
| EIS requirements advanced | `EIS15-NTF-01`, `EIS15-NTF-02`, `EIS15-NTF-03`, `EIS15-NTF-04`, `EIS15-NTF-05`, `EIS15-NTF-06`, `EIS15-NTF-07`, `EIS15-NTF-08`, `EIS15-NTF-09`, `EIS15-NTF-10` |
| Obligations | `EC15-NTF-01`, `EC15-NTF-02`, `EC15-NTF-03`, `EC15-NTF-04`, `EC15-NTF-05`, `EC15-NTF-06`, `EC15-NTF-07`, `EC15-NTF-08`, `EC15-NTF-09`, `EC15-NTF-10` |
| Negative tests | NP-04, NP-14, NP-15, NP-16 |
| Runtime scenarios | RS-17 |
| Verification evidence | Verification Checklist row items for every row below, with their planned evidence classes; all PROPOSED — NOT EXECUTED |
| FCTM rows (109) | `2-§2-4`, `2-§3-9`, `2-§3-18`, `2-§7-3`, `2-§11-9`, `2-§11-14`, `2-§13-6`, `2-§14-8`, `2-§14-9`, `2-§17-8`, `2-§19-7`, `2-§19-9`, `2-§22-5`, `2-§22-12`, `2-§24-9`, `2-§25-27`, `2-§26-5`, `2-§26-11`, `2-§29-10`, `4-§1-3`, `4-§2-5`, `4-§3-8`, `4-§3-10`, `4-§5-6`, `4-§6-9`, `4-§8-2`, `4-§8-3`, `4-§8-4`, `4-§9-7`, `4-§11-6`, `4-§13-2`, `4-§13-3`, `4-§13-8`, `4-§13-9`, `4-§14-2`, `4-§15-3`, `4-§16-2`, `4-§16-5`, `4-§17-6`, `11-§3-7`, `11-§4-12`, `11-§5-1`, `11-§7-3`, `11-§8-7`, `11-§9-6`, `11-§11-8`, `11-§13-4`, `11-§14-1`, `11-§14-3`, `11-§16-3`, `11-§17-1`, `11-§17-2`, `11-§17-3`, `11-§17-4`, `11-§17-5`, `11-§17-6`, `11-§17-7`, `11-§17-8`, `11-§18-4`, `11-§18-5`, `11-§18-11`, `11-§19-1`, `11-§19-3`, `11-§20-4`, `11-§20-5`, `11-§20-6`, `11-§21-1`, `11-§22-1`, `11-§22-4`, `11-§22-10`, `11-§22-11`, `11-§23-4`, `22-§11-6`, `22-§12-1`, `22-§12-2`, `22-§12-3`, `22-§12-4`, `22-§12-5`, `22-§12-6`, `22-§12-7`, `22-§12-8`, `22-§12-9`, `22-§19-7`, `22-§21-5`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§27-3`, `22-§27-4`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§29-3`, `22-§29-8`, `22-§29-10`, `22-§29-13`, `9-§12-2`, `9-§12-3`, `9-§12-6`, `9-§17-6`, `10-§5-7`, `3-§15-6`, `17-§11-3`, `BP-§10.4-A1`, `BP-§10.4-A2`, `BP-§8` |

Forbidden in this workstream, in addition to Section 8:

- any email, SMS, push, Resend or WhatsApp sender;
- historical correction-notification replay or bulk status rewrite;
- correction-specific integration (`H-CORR`);

### 7.5 SB-P-1.15/WS-E — Daily Intelligence Rhythm and Deterministic Financial Facts

| Field | Value |
|---|---|
| Scope | Blueprint §8.5; obligations below |
| Owning mission | SB-P-1.15 |
| Prerequisites | WS-C, WS-G; D14 governed read model; D13 gateway for narrative; D16–D19 for later-owned sections |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P5 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/daily-intelligence/**`, `src/lib/intel-facts/**`, `src/server-functions/daily-intelligence*`, `tests/daily-intelligence/**` |
| Expected schema (migration mission only) | M6 Daily Intelligence tables; M7 aggregation functions (shared with WS-F) |
| EIS requirements advanced | `EIS15-DI-01`, `EIS15-DI-02`, `EIS15-DI-03`, `EIS15-DI-04`, `EIS15-DI-05`, `EIS15-DI-06`, `EIS15-DI-07`, `EIS15-DI-08`, `EIS15-FIN-01`, `EIS15-FIN-02`, `EIS15-FIN-03`, `EIS15-FIN-06` |
| Obligations | `EC15-DI-01`, `EC15-DI-02`, `EC15-DI-03`, `EC15-DI-04`, `EC15-DI-05`, `EC15-DI-06`, `EC15-DI-07`, `EC15-DI-08`, `EC15-FIN-01`, `EC15-FIN-02`, `EC15-FIN-03`, `EC15-FIN-06` |
| Negative tests | NP-14, NP-18, NP-23, SR6-01, SR6-05, SR6-06, SR6-08, SR6-13 |
| Runtime scenarios | RS-09, RS-11, RS-12, RS-13, RS-20 |
| Verification evidence | Verification Checklist row items for every row below, with their planned evidence classes; all PROPOSED — NOT EXECUTED |
| FCTM rows (432) | `2-§2-1`, `2-§2-9`, `2-§3-5`, `2-§3-12`, `2-§3-14`, `2-§4-1`, `2-§4-2`, `2-§4-3`, `2-§4-4`, `2-§4-5`, `2-§4-6`, `2-§4-7`, `2-§4-8`, `2-§4-9`, `2-§4-10`, `2-§5-1`, `2-§5-2`, `2-§5-3`, `2-§5-4`, `2-§5-5`, `2-§5-6`, `2-§5-7`, `2-§5-8`, `2-§5-9`, `2-§5-10`, `2-§5-11`, `2-§5-12`, `2-§5-13`, `2-§5-14`, `2-§5-15`, `2-§5-16`, `2-§5-17`, `2-§5-18`, `2-§6-1`, `2-§6-2`, `2-§6-3`, `2-§6-4`, `2-§7-2`, `2-§7-11`, `2-§7-12`, `2-§8-1`, `2-§8-2`, `2-§8-3`, `2-§8-4`, `2-§8-5`, `2-§8-6`, `2-§8-7`, `2-§8-8`, `2-§8-9`, `2-§8-11`, `2-§8-12`, `2-§8-13`, `2-§8-14`, `2-§8-15`, `2-§8-16`, `2-§9-3`, `2-§10-1`, `2-§10-2`, `2-§10-3`, `2-§10-4`, `2-§10-5`, `2-§10-6`, `2-§10-7`, `2-§11-1`, `2-§11-2`, `2-§11-3`, `2-§11-4`, `2-§11-5`, `2-§11-6`, `2-§11-7`, `2-§11-8`, `2-§11-9`, `2-§11-10`, `2-§11-11`, `2-§11-12`, `2-§11-13`, `2-§11-14`, `2-§11-15`, `2-§12-1`, `2-§12-2`, `2-§12-3`, `2-§12-4`, `2-§12-5`, `2-§12-6`, `2-§12-7`, `2-§12-8`, `2-§12-9`, `2-§12-10`, `2-§12-11`, `2-§12-12`, `2-§12-13`, `2-§12-14`, `2-§12-15`, `2-§13-1`, `2-§13-6`, `2-§14-1`, `2-§14-2`, `2-§14-3`, `2-§14-4`, `2-§14-5`, `2-§14-6`, `2-§14-8`, `2-§14-9`, `2-§15-1`, `2-§15-2`, `2-§15-3`, `2-§15-4`, `2-§15-5`, `2-§15-6`, `2-§15-7`, `2-§17-1`, `2-§17-2`, `2-§17-3`, `2-§17-4`, `2-§17-5`, `2-§17-6`, `2-§17-8`, `2-§19-1`, `2-§19-2`, `2-§19-3`, `2-§19-4`, `2-§19-5`, `2-§19-6`, `2-§19-7`, `2-§19-8`, `2-§19-9`, `2-§21-1`, `2-§21-2`, `2-§21-3`, `2-§21-4`, `2-§21-5`, `2-§21-6`, `2-§21-7`, `2-§22-1`, `2-§22-2`, `2-§22-3`, `2-§22-4`, `2-§22-5`, `2-§22-6`, `2-§22-7`, `2-§22-8`, `2-§22-9`, `2-§22-10`, `2-§22-11`, `2-§22-12`, `2-§23-1`, `2-§23-2`, `2-§23-3`, `2-§23-4`, `2-§23-5`, `2-§23-6`, `2-§23-7`, `2-§23-8`, `2-§24-1`, `2-§24-2`, `2-§24-3`, `2-§24-4`, `2-§24-6`, `2-§24-7`, `2-§24-8`, `2-§24-9`, `2-§24-10`, `2-§25-1`, `2-§25-6`, `2-§25-7`, `2-§25-8`, `2-§25-9`, `2-§25-10`, `2-§25-11`, `2-§25-12`, `2-§25-13`, `2-§25-14`, `2-§25-15`, `2-§25-16`, `2-§25-17`, `2-§25-18`, `2-§25-28`, `2-§25-29`, `2-§25-30`, `2-§26-6`, `2-§26-8`, `2-§26-11`, `2-§27-1`, `2-§29-1`, `2-§29-2`, `2-§29-6`, `4-§1-1`, `4-§1-2`, `4-§1-3`, `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§2-4`, `4-§2-5`, `4-§3-1`, `4-§3-2`, `4-§3-3`, `4-§3-4`, `4-§3-5`, `4-§3-6`, `4-§3-7`, `4-§3-8`, `4-§3-9`, `4-§3-10`, `4-§4-1`, `4-§4-2`, `4-§4-3`, `4-§4-4`, `4-§4-5`, `4-§4-6`, `4-§4-7`, `4-§4-8`, `4-§5-1`, `4-§5-2`, `4-§5-3`, `4-§5-4`, `4-§5-5`, `4-§5-6`, `4-§5-7`, `4-§5-8`, `4-§5-9`, `4-§5-10`, `4-§6-1`, `4-§6-2`, `4-§6-3`, `4-§6-4`, `4-§6-5`, `4-§6-6`, `4-§6-7`, `4-§6-8`, `4-§6-9`, `4-§6-10`, `4-§6-11`, `4-§6-12`, `4-§7-1`, `4-§7-2`, `4-§7-3`, `4-§7-4`, `4-§8-2`, `4-§8-3`, `4-§8-4`, `4-§9-1`, `4-§9-2`, `4-§9-3`, `4-§9-4`, `4-§9-5`, `4-§9-6`, `4-§9-7`, `4-§9-8`, `4-§10-1`, `4-§10-2`, `4-§10-3`, `4-§10-4`, `4-§10-5`, `4-§10-6`, `4-§10-7`, `4-§10-8`, `4-§11-1`, `4-§11-2`, `4-§11-3`, `4-§11-4`, `4-§11-5`, `4-§11-6`, `4-§11-7`, `4-§12-1`, `4-§12-2`, `4-§12-3`, `4-§12-4`, `4-§12-5`, `4-§13-1`, `4-§13-2`, `4-§13-3`, `4-§13-5`, `4-§13-6`, `4-§13-7`, `4-§13-8`, `4-§13-9`, `4-§14-1`, `4-§14-2`, `4-§15-1`, `4-§15-2`, `4-§15-3`, `4-§15-4`, `4-§15-5`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `4-§16-4`, `4-§16-5`, `4-§16-7`, `4-§16-8`, `4-§16-9`, `4-§16-10`, `4-§16-11`, `4-§17-1`, `4-§17-2`, `4-§17-3`, `4-§17-4`, `4-§17-5`, `4-§17-6`, `11-§3-1`, `11-§3-6`, `11-§3-7`, `11-§4-5`, `11-§4-6`, `11-§4-7`, `11-§4-8`, `11-§4-10`, `11-§5-3`, `11-§6-1`, `11-§6-2`, `11-§6-5`, `11-§6-6`, `11-§6-7`, `11-§7-1`, `11-§7-2`, `11-§7-3`, `11-§8-4`, `11-§9-1`, `11-§9-5`, `11-§9-7`, `11-§10-1`, `11-§10-2`, `11-§10-3`, `11-§10-5`, `11-§10-6`, `11-§10-7`, `11-§10-8`, `11-§10-9`, `11-§10-10`, `11-§10-11`, `11-§11-14`, `11-§13-3`, `11-§16-1`, `11-§16-2`, `11-§16-3`, `11-§16-4`, `11-§16-5`, `11-§16-6`, `11-§17-6`, `11-§18-4`, `11-§18-8`, `11-§18-9`, `11-§18-10`, `11-§20-1`, `11-§20-7`, `11-§20-8`, `11-§21-1`, `11-§21-3`, `11-§22-3`, `11-§22-4`, `11-§22-6`, `11-§22-7`, `11-§22-9`, `11-§22-11`, `11-§23-4`, `22-§11-4`, `22-§12-5`, `22-§12-6`, `22-§18-1`, `22-§18-2`, `22-§18-3`, `22-§18-4`, `22-§18-5`, `22-§18-6`, `22-§18-7`, `22-§18-8`, `22-§18-9`, `22-§18-10`, `22-§18-11`, `22-§19-8`, `22-§19-2`, `22-§21-3`, `22-§22-2`, `22-§27-3`, `22-§27-4`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§29-3`, `22-§29-7`, `22-§29-8`, `24-§5-4`, `24-§12-1`, `24-§12-2`, `24-§12-3`, `24-§12-4`, `24-§12-5`, `24-§12-6`, `24-§12-7`, `24-§12-9`, `24-§13-1`, `24-§16-1`, `24-§16-2`, `24-§16-3`, `24-§16-4`, `24-§16-5`, `24-§16-6`, `24-§16-7`, `24-§18-1b`, `24-§18-2`, `24-§27-3`, `9-§12-3`, `9-§17-6`, `10-§5-5`, `10-§9-1`, `10-§9-2`, `12-§4-2`, `12-§11-6`, `12-§12-1`, `12-§21-3`, `3-§13-1`, `3-§13-3`, `3-§14-1`, `3-§15-6`, `17-§11-1`, `17-§11-3`, `BP-§10.4-W2`, `BP-§10.4-W3`, `BP-§10.4-W4`, `BP-§10.4-W5`, `BP-§10.4-W6`, `BP-§10.4-W8`, `BP-§10.4-W9`, `BP-§10.4-E2`, `BP-§10.4-A2`, `BP-§10.4-B1`, `BP-§6.2`, `BP-§11-4` |

Forbidden in this workstream, in addition to Section 8:

- computing an Owner-wide result and filtering it for a viewer;
- storing facts or narrative in the revision row;
- an invented staleness cutoff or late outbound send;

### 7.6 SB-P-1.15/WS-F — Ask CFO Read-Only Intelligence

| Field | Value |
|---|---|
| Scope | Blueprint §8.6; obligations below |
| Owning mission | SB-P-1.15 |
| Prerequisites | WS-E facts, WS-G manifest; D13 Workspace, gateway and tool registry; D14 read model; AI provider gate |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P6 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/ask-cfo/**`, `src/server-functions/ask-cfo*`, `tests/ask-cfo/**` |
| Expected schema (migration mission only) | M7 read-only role, views and aggregation functions |
| EIS requirements advanced | `EIS15-FIN-04`, `EIS15-CFO-01`, `EIS15-CFO-02`, `EIS15-CFO-03`, `EIS15-CFO-04`, `EIS15-CFO-05`, `EIS15-CFO-06`, `EIS15-CFO-07`, `EIS15-AI-01`, `EIS15-AI-02`, `EIS15-AI-03`, `EIS15-AI-04`, `EIS15-AI-05` |
| Obligations | `EC15-FIN-04`, `EC15-CFO-01`, `EC15-CFO-02`, `EC15-CFO-03`, `EC15-CFO-04`, `EC15-CFO-05`, `EC15-CFO-06`, `EC15-CFO-07`, `EC15-AI-01`, `EC15-AI-02`, `EC15-AI-03`, `EC15-AI-04`, `EC15-AI-05` |
| Negative tests | NP-02, NP-09, NP-10, NP-11, NP-21, NP-23, SR6-02, SR6-04, SR6-07, SR6-13 |
| Runtime scenarios | RS-03, RS-05, RS-14, RS-15 |
| Verification evidence | Verification Checklist row items for every row below, with their planned evidence classes; all PROPOSED — NOT EXECUTED |
| FCTM rows (408) | `2-§2-1`, `2-§2-2`, `2-§2-3`, `2-§2-4`, `2-§2-5`, `2-§2-6`, `2-§2-7`, `2-§2-8`, `2-§2-9`, `2-§3-1`, `2-§3-2`, `2-§3-3`, `2-§3-4`, `2-§3-5`, `2-§3-6`, `2-§3-7`, `2-§3-8`, `2-§3-9`, `2-§3-10`, `2-§3-11`, `2-§3-12`, `2-§3-13`, `2-§3-14`, `2-§3-15`, `2-§3-16`, `2-§3-17`, `2-§3-18`, `2-§4-1`, `2-§4-2`, `2-§4-3`, `2-§4-4`, `2-§4-5`, `2-§4-6`, `2-§4-7`, `2-§4-8`, `2-§4-9`, `2-§4-10`, `2-§5-1`, `2-§5-2`, `2-§5-3`, `2-§5-4`, `2-§5-5`, `2-§5-6`, `2-§5-7`, `2-§5-8`, `2-§5-9`, `2-§5-10`, `2-§5-11`, `2-§5-12`, `2-§5-13`, `2-§5-14`, `2-§5-15`, `2-§5-16`, `2-§5-17`, `2-§5-18`, `2-§6-1`, `2-§6-2`, `2-§6-3`, `2-§6-4`, `2-§7-1`, `2-§7-2`, `2-§7-3`, `2-§7-4`, `2-§7-5`, `2-§7-6`, `2-§7-7`, `2-§7-8`, `2-§7-9`, `2-§7-10`, `2-§7-11`, `2-§7-12`, `2-§8-1`, `2-§8-2`, `2-§8-3`, `2-§8-4`, `2-§8-5`, `2-§8-6`, `2-§8-7`, `2-§8-8`, `2-§8-9`, `2-§8-10`, `2-§8-11`, `2-§8-12`, `2-§8-13`, `2-§8-14`, `2-§8-15`, `2-§8-16`, `2-§9-1`, `2-§9-2`, `2-§9-3`, `2-§9-4`, `2-§9-5`, `2-§9-6`, `2-§9-7`, `2-§9-8`, `2-§10-1`, `2-§10-2`, `2-§10-3`, `2-§10-4`, `2-§10-5`, `2-§10-6`, `2-§10-7`, `2-§11-1`, `2-§11-2`, `2-§11-3`, `2-§11-4`, `2-§11-5`, `2-§11-6`, `2-§11-7`, `2-§11-8`, `2-§11-9`, `2-§11-10`, `2-§11-11`, `2-§11-12`, `2-§11-13`, `2-§11-14`, `2-§11-15`, `2-§12-1`, `2-§12-2`, `2-§12-3`, `2-§12-4`, `2-§12-5`, `2-§12-6`, `2-§12-7`, `2-§12-8`, `2-§12-9`, `2-§12-10`, `2-§12-11`, `2-§12-12`, `2-§12-13`, `2-§12-14`, `2-§12-15`, `2-§13-1`, `2-§13-6`, `2-§14-1`, `2-§14-2`, `2-§14-3`, `2-§14-4`, `2-§14-5`, `2-§14-6`, `2-§14-7`, `2-§14-8`, `2-§14-9`, `2-§15-1`, `2-§15-2`, `2-§15-3`, `2-§15-4`, `2-§15-5`, `2-§15-6`, `2-§15-7`, `2-§17-1`, `2-§17-2`, `2-§17-3`, `2-§17-4`, `2-§17-5`, `2-§17-6`, `2-§17-7`, `2-§17-8`, `2-§18-1`, `2-§18-2`, `2-§18-3`, `2-§18-4`, `2-§19-1`, `2-§19-2`, `2-§19-3`, `2-§19-4`, `2-§19-5`, `2-§19-6`, `2-§19-7`, `2-§19-8`, `2-§19-9`, `2-§20-1`, `2-§20-2`, `2-§20-3`, `2-§20-4`, `2-§20-5`, `2-§20-6`, `2-§21-1`, `2-§21-2`, `2-§21-3`, `2-§21-4`, `2-§21-5`, `2-§21-6`, `2-§21-7`, `2-§22-1`, `2-§22-2`, `2-§22-3`, `2-§22-4`, `2-§22-5`, `2-§22-6`, `2-§22-7`, `2-§22-8`, `2-§22-9`, `2-§22-10`, `2-§22-11`, `2-§22-12`, `2-§23-1`, `2-§23-2`, `2-§23-3`, `2-§23-4`, `2-§23-5`, `2-§23-6`, `2-§23-7`, `2-§23-8`, `2-§24-1`, `2-§24-2`, `2-§24-3`, `2-§24-4`, `2-§24-5`, `2-§24-6`, `2-§24-7`, `2-§24-8`, `2-§24-9`, `2-§24-10`, `2-§25-1`, `2-§25-2`, `2-§25-3`, `2-§25-4`, `2-§25-5`, `2-§25-6`, `2-§25-7`, `2-§25-8`, `2-§25-9`, `2-§25-10`, `2-§25-11`, `2-§25-12`, `2-§25-13`, `2-§25-14`, `2-§25-15`, `2-§25-16`, `2-§25-17`, `2-§25-18`, `2-§25-22a`, `2-§25-24`, `2-§25-25`, `2-§25-26`, `2-§25-27`, `2-§25-28`, `2-§25-29`, `2-§25-30`, `2-§26-1`, `2-§26-2`, `2-§26-3`, `2-§26-4`, `2-§26-5`, `2-§26-6`, `2-§26-7`, `2-§26-8`, `2-§26-9`, `2-§26-10`, `2-§26-11`, `2-§27-1`, `2-§27-2`, `2-§27-3`, `2-§27-4`, `2-§27-5`, `2-§27-6`, `2-§29-1`, `2-§29-2`, `2-§29-3`, `2-§29-4`, `2-§29-5`, `2-§29-6`, `2-§29-7`, `2-§29-8`, `2-§29-9`, `2-§29-10`, `2-§29-11`, `2-§29-12`, `4-§3-1`, `4-§3-2`, `4-§3-3`, `4-§3-8`, `4-§3-10`, `4-§4-3`, `4-§4-6`, `4-§5-4`, `4-§6-3`, `4-§8-2`, `4-§8-4`, `4-§9-3`, `4-§9-7`, `4-§9-8`, `4-§10-1`, `4-§10-2`, `4-§10-3`, `4-§10-6`, `4-§10-7`, `4-§11-2`, `4-§11-5`, `4-§11-7`, `4-§12-1`, `4-§12-4`, `4-§14-2`, `4-§15-2`, `4-§15-5`, `4-§16-10`, `4-§16-11`, `4-§17-5`, `11-§1-1`, `11-§2-9`, `11-§3-1`, `11-§3-2`, `11-§3-3`, `11-§3-4`, `11-§3-5`, `11-§3-6`, `11-§3-7`, `11-§3-8`, `11-§4-7`, `11-§4-8`, `11-§4-13`, `11-§5-1`, `11-§6-6`, `11-§8-4`, `11-§8-6`, `11-§9-3`, `11-§10-1`, `11-§10-6`, `11-§10-9`, `11-§11-4`, `11-§11-11`, `11-§12-1`, `11-§12-2`, `11-§13-4`, `11-§15-1`, `11-§16-1`, `11-§16-6`, `11-§17-5`, `11-§17-8`, `11-§18-2`, `11-§18-5`, `11-§18-6`, `11-§18-7`, `11-§18-8`, `11-§20-5`, `11-§20-8`, `11-§21-2`, `11-§21-3`, `11-§22-7`, `11-§22-9`, `11-§23-1`, `11-§23-3`, `22-§11-4`, `22-§11-8`, `22-§12-4`, `22-§18-7`, `22-§19-1`, `22-§19-7`, `22-§21-7`, `22-§27-3`, `22-§28-3`, `22-§28-9`, `22-§29-3`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `24-§5-4`, `24-§12-1`, `24-§12-2`, `24-§12-3`, `24-§12-4`, `24-§12-5`, `24-§12-6`, `24-§12-7`, `24-§12-8`, `24-§12-9`, `24-§13-1`, `24-§16-1`, `24-§16-2`, `24-§16-3`, `24-§16-4`, `24-§16-5`, `24-§16-6`, `24-§16-7`, `24-§18-1b`, `24-§18-2`, `24-§27-3`, `24-§31-9`, `9-§12-2`, `9-§17-6`, `10-§5-5`, `10-§9-1`, `10-§9-2`, `10-§13-4`, `10-§23-4`, `12-§4-2`, `12-§11-6`, `12-§12-1`, `12-§12-3`, `12-§21-3`, `3-§13-1`, `3-§13-2`, `3-§13-3`, `17-§11-1`, `17-§11-2`, `17-§22-7`, `BP-§10.4-W6`, `BP-§10.4-W7`, `BP-§10.4-W8`, `BP-§10.4-W9`, `BP-§10.4-E1`, `BP-§10.4-E3`, `BP-§10.4-B1`, `BP-§10.4-B3`, `BP-§10.4-X`, `BP-§6.2`, `BP-§11-4` |

Forbidden in this workstream, in addition to Section 8:

- any write tool, write grant or DTX reachability;
- figures produced by model text;
- authoritative customer balances (SB-P-1.16);

### 7.7 SB-P-1.15/WS-G — Cross-Cutting Assurance: Security, Authorization, Isolation, Audit, Failure

| Field | Value |
|---|---|
| Scope | Blueprint §8.7; obligations below |
| Owning mission | SB-P-1.15 |
| Prerequisites | D12 kernel; effective-access inventory tooling; test-project access |
| Authorized builder | `NOT YET AUTHORIZED` |
| Phase | P1 |
| Candidate paths (only if an Implementation Authorization lists them) | `src/lib/intel-access/**` (manifest and scope checks), `tests/security/**`, Audit and observability modules named by the Implementation Authorization |
| Expected schema (migration mission only) | M8 capability registrations and the access manifest |
| EIS requirements advanced | `EIS15-SEC-01`, `EIS15-SEC-02`, `EIS15-SEC-03`, `EIS15-SEC-04`, `EIS15-SEC-05`, `EIS15-SEC-06`, `EIS15-AUTHZ-01`, `EIS15-AUTHZ-02`, `EIS15-AUTHZ-04`, `EIS15-AUTHZ-05`, `EIS15-AUTHZ-06`, `EIS15-AUTHZ-07`, `EIS15-AUTHZ-08`, `EIS15-AUTHZ-09`, `EIS15-AUTHZ-10`, `EIS15-AUTHZ-11`, `EIS15-PRIV-01`, `EIS15-AUD-01`, `EIS15-AUD-02`, `EIS15-AUD-03`, `EIS15-RET-01`, `EIS15-RET-02`, `EIS15-FAIL-01`, `EIS15-FAIL-02`, `EIS15-OPS-01`, `EIS15-OPS-02` |
| Obligations | `EC15-SEC-01`, `EC15-SEC-02`, `EC15-SEC-03`, `EC15-SEC-04`, `EC15-SEC-05`, `EC15-SEC-06`, `EC15-AUTHZ-01`, `EC15-AUTHZ-02`, `EC15-AUTHZ-04`, `EC15-AUTHZ-05`, `EC15-AUTHZ-06`, `EC15-AUTHZ-07`, `EC15-AUTHZ-08`, `EC15-AUTHZ-09`, `EC15-AUTHZ-10`, `EC15-AUTHZ-11`, `EC15-PRIV-01`, `EC15-AUD-01`, `EC15-AUD-02`, `EC15-AUD-03`, `EC15-RET-01`, `EC15-RET-02`, `EC15-FAIL-01`, `EC15-FAIL-02`, `EC15-OPS-01`, `EC15-OPS-02` |
| Negative tests | NP-01, NP-02, NP-03, NP-04, NP-05, NP-07, NP-08, NP-11, NP-22, NP-23, SR6-01, SR6-02, SR6-03, SR6-04, SR6-06, SR6-07, SR6-08, SR6-09, SR6-11, SR6-12, SR6-13, SR6-14, SR6-15, SR6-16, SR6-17, SR6-18 |
| Runtime scenarios | RS-04, RS-18 |
| Verification evidence | Verification Checklist row items for every row below, with their planned evidence classes; all PROPOSED — NOT EXECUTED |
| FCTM rows (626) | `2-§2-1`, `2-§2-3`, `2-§2-4`, `2-§2-5`, `2-§2-6`, `2-§2-7`, `2-§2-8`, `2-§2-9`, `2-§3-1`, `2-§3-2`, `2-§3-3`, `2-§3-4`, `2-§3-5`, `2-§3-6`, `2-§3-7`, `2-§3-8`, `2-§3-9`, `2-§3-10`, `2-§3-11`, `2-§3-12`, `2-§3-13`, `2-§3-14`, `2-§3-15`, `2-§3-16`, `2-§3-17`, `2-§3-18`, `2-§4-1`, `2-§4-2`, `2-§4-3`, `2-§4-4`, `2-§4-5`, `2-§4-6`, `2-§4-7`, `2-§4-8`, `2-§4-9`, `2-§4-10`, `2-§5-1`, `2-§5-2`, `2-§5-3`, `2-§5-4`, `2-§5-5`, `2-§5-6`, `2-§5-7`, `2-§5-8`, `2-§5-9`, `2-§5-10`, `2-§5-11`, `2-§5-12`, `2-§5-13`, `2-§5-14`, `2-§5-15`, `2-§5-16`, `2-§5-17`, `2-§5-18`, `2-§6-1`, `2-§6-2`, `2-§6-3`, `2-§6-4`, `2-§7-1`, `2-§7-2`, `2-§7-3`, `2-§7-12`, `2-§8-1`, `2-§8-2`, `2-§8-3`, `2-§8-4`, `2-§8-5`, `2-§8-6`, `2-§8-7`, `2-§8-8`, `2-§8-9`, `2-§8-10`, `2-§8-11`, `2-§8-12`, `2-§8-13`, `2-§8-14`, `2-§8-15`, `2-§8-16`, `2-§9-3`, `2-§9-4`, `2-§9-5`, `2-§9-6`, `2-§9-7`, `2-§9-8`, `2-§10-1`, `2-§10-2`, `2-§10-3`, `2-§10-4`, `2-§10-5`, `2-§10-6`, `2-§10-7`, `2-§11-1`, `2-§11-2`, `2-§11-3`, `2-§11-4`, `2-§11-5`, `2-§11-6`, `2-§11-7`, `2-§11-8`, `2-§11-9`, `2-§11-10`, `2-§11-11`, `2-§11-12`, `2-§11-13`, `2-§11-14`, `2-§11-15`, `2-§12-1`, `2-§12-2`, `2-§12-3`, `2-§12-4`, `2-§12-5`, `2-§12-6`, `2-§12-7`, `2-§12-8`, `2-§12-9`, `2-§12-10`, `2-§12-11`, `2-§12-12`, `2-§12-13`, `2-§12-14`, `2-§12-15`, `2-§13-1`, `2-§13-6`, `2-§14-1`, `2-§14-2`, `2-§14-3`, `2-§14-4`, `2-§14-5`, `2-§14-6`, `2-§14-7`, `2-§14-8`, `2-§14-9`, `2-§15-1`, `2-§15-2`, `2-§15-3`, `2-§15-4`, `2-§15-5`, `2-§15-6`, `2-§15-7`, `2-§17-1`, `2-§17-2`, `2-§17-3`, `2-§17-4`, `2-§17-5`, `2-§17-6`, `2-§17-7`, `2-§18-1`, `2-§18-2`, `2-§18-4`, `2-§19-1`, `2-§19-2`, `2-§19-3`, `2-§19-4`, `2-§19-5`, `2-§19-6`, `2-§19-7`, `2-§19-8`, `2-§19-9`, `2-§20-1`, `2-§20-2`, `2-§20-3`, `2-§20-4`, `2-§20-5`, `2-§21-1`, `2-§21-2`, `2-§21-3`, `2-§21-4`, `2-§21-5`, `2-§21-6`, `2-§21-7`, `2-§22-1`, `2-§22-2`, `2-§22-3`, `2-§22-4`, `2-§22-5`, `2-§22-6`, `2-§22-7`, `2-§22-8`, `2-§22-9`, `2-§22-10`, `2-§22-11`, `2-§22-12`, `2-§23-1`, `2-§23-2`, `2-§23-3`, `2-§23-4`, `2-§23-5`, `2-§23-6`, `2-§23-7`, `2-§23-8`, `2-§24-1`, `2-§24-2`, `2-§24-3`, `2-§24-4`, `2-§24-5`, `2-§24-6`, `2-§24-7`, `2-§24-8`, `2-§24-9`, `2-§24-10`, `2-§25-1`, `2-§25-2`, `2-§25-3`, `2-§25-4`, `2-§25-5`, `2-§25-6`, `2-§25-7`, `2-§25-8`, `2-§25-9`, `2-§25-10`, `2-§25-11`, `2-§25-12`, `2-§25-13`, `2-§25-14`, `2-§25-15`, `2-§25-16`, `2-§25-17`, `2-§25-18`, `2-§25-22a`, `2-§25-24`, `2-§25-25`, `2-§25-26`, `2-§25-27`, `2-§25-28`, `2-§25-29`, `2-§25-30`, `2-§26-2`, `2-§26-10`, `2-§26-11`, `2-§27-1`, `2-§27-3`, `2-§27-4`, `2-§27-5`, `2-§29-2`, `2-§29-5`, `2-§29-6`, `2-§29-7`, `2-§29-8`, `2-§29-9`, `2-§29-11`, `2-§29-12`, `4-§1-1`, `4-§1-2`, `4-§1-3`, `4-§2-1`, `4-§2-2`, `4-§2-3`, `4-§2-4`, `4-§2-5`, `4-§3-1`, `4-§3-2`, `4-§3-3`, `4-§3-4`, `4-§3-5`, `4-§3-6`, `4-§3-7`, `4-§3-8`, `4-§3-9`, `4-§3-10`, `4-§4-1`, `4-§4-2`, `4-§4-3`, `4-§4-4`, `4-§4-5`, `4-§4-6`, `4-§4-7`, `4-§5-1`, `4-§5-2`, `4-§5-3`, `4-§5-4`, `4-§5-5`, `4-§5-6`, `4-§5-7`, `4-§5-8`, `4-§5-9`, `4-§5-10`, `4-§6-1`, `4-§6-2`, `4-§6-3`, `4-§6-4`, `4-§6-5`, `4-§6-6`, `4-§6-7`, `4-§6-8`, `4-§6-9`, `4-§6-10`, `4-§6-11`, `4-§6-12`, `4-§7-1`, `4-§7-2`, `4-§7-3`, `4-§7-4`, `4-§8-2`, `4-§8-3`, `4-§8-4`, `4-§9-1`, `4-§9-2`, `4-§9-3`, `4-§9-4`, `4-§9-5`, `4-§9-6`, `4-§9-7`, `4-§9-8`, `4-§10-1`, `4-§10-2`, `4-§10-3`, `4-§10-4`, `4-§10-5`, `4-§10-6`, `4-§10-7`, `4-§10-8`, `4-§11-1`, `4-§11-2`, `4-§11-3`, `4-§11-4`, `4-§11-5`, `4-§11-6`, `4-§12-1`, `4-§12-2`, `4-§12-3`, `4-§12-4`, `4-§12-5`, `4-§13-1`, `4-§13-2`, `4-§13-3`, `4-§13-5`, `4-§13-6`, `4-§13-7`, `4-§13-8`, `4-§13-9`, `4-§14-1`, `4-§15-1`, `4-§15-2`, `4-§15-3`, `4-§16-1`, `4-§16-2`, `4-§16-3`, `4-§16-4`, `4-§16-5`, `4-§16-7`, `4-§16-8`, `4-§16-9`, `4-§16-10`, `4-§16-11`, `4-§17-2`, `4-§17-3`, `4-§17-4`, `4-§17-5`, `11-§1-1`, `11-§2-9`, `11-§3-1`, `11-§3-2`, `11-§3-4`, `11-§3-5`, `11-§3-6`, `11-§3-8`, `11-§4-1`, `11-§4-2`, `11-§4-3`, `11-§4-4`, `11-§4-5`, `11-§4-6`, `11-§4-7`, `11-§4-8`, `11-§4-9`, `11-§4-10`, `11-§4-11`, `11-§4-12`, `11-§4-13`, `11-§5-1`, `11-§5-2`, `11-§5-3`, `11-§5-4`, `11-§5-5`, `11-§6-1`, `11-§6-2`, `11-§6-3`, `11-§6-4`, `11-§6-5`, `11-§6-6`, `11-§6-7`, `11-§7-1`, `11-§7-3`, `11-§8-1`, `11-§8-2`, `11-§8-3`, `11-§8-4`, `11-§8-5`, `11-§8-6`, `11-§8-7`, `11-§8-8`, `11-§9-2`, `11-§9-3`, `11-§9-5`, `11-§9-7`, `11-§10-1`, `11-§10-2`, `11-§10-3`, `11-§10-4`, `11-§10-5`, `11-§10-6`, `11-§10-7`, `11-§10-8`, `11-§10-9`, `11-§10-10`, `11-§10-11`, `11-§11-1`, `11-§11-2`, `11-§11-3`, `11-§11-4`, `11-§11-5`, `11-§11-6`, `11-§11-7`, `11-§11-8`, `11-§11-9`, `11-§11-10`, `11-§11-11`, `11-§11-12`, `11-§11-13`, `11-§11-14`, `11-§11-15`, `11-§12-1`, `11-§12-2`, `11-§12-3`, `11-§13-1`, `11-§13-2`, `11-§13-3`, `11-§13-4`, `11-§14-1`, `11-§14-3`, `11-§15-1`, `11-§16-1`, `11-§16-2`, `11-§16-3`, `11-§16-4`, `11-§16-5`, `11-§16-6`, `11-§17-1`, `11-§17-2`, `11-§17-3`, `11-§17-4`, `11-§17-5`, `11-§17-6`, `11-§17-7`, `11-§17-8`, `11-§18-1`, `11-§18-2`, `11-§18-3`, `11-§18-4`, `11-§18-5`, `11-§18-6`, `11-§18-7`, `11-§18-8`, `11-§18-9`, `11-§18-10`, `11-§18-11`, `11-§18-12`, `11-§19-1`, `11-§19-2`, `11-§19-3`, `11-§19-4`, `11-§20-1`, `11-§20-2`, `11-§20-3`, `11-§20-4`, `11-§20-5`, `11-§20-6`, `11-§20-7`, `11-§20-8`, `11-§21-2`, `11-§21-5`, `11-§21-6`, `11-§22-1`, `11-§22-2`, `11-§22-3`, `11-§22-4`, `11-§22-6`, `11-§22-7`, `11-§22-8`, `11-§22-9`, `11-§22-10`, `11-§22-11`, `11-§22-12`, `11-§23-2`, `11-§23-3`, `22-§11-1`, `22-§11-2`, `22-§11-3`, `22-§11-4`, `22-§11-5`, `22-§11-6`, `22-§11-7`, `22-§11-8`, `22-§11-9`, `22-§12-1`, `22-§12-2`, `22-§12-3`, `22-§12-4`, `22-§12-5`, `22-§12-6`, `22-§12-7`, `22-§12-8`, `22-§12-9`, `22-§17-9`, `22-§18-1`, `22-§18-2`, `22-§18-3`, `22-§18-4`, `22-§18-5`, `22-§18-6`, `22-§18-7`, `22-§18-8`, `22-§18-9`, `22-§18-10`, `22-§18-11`, `22-§19-8`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§21-1`, `22-§21-2`, `22-§21-3`, `22-§21-4`, `22-§21-5`, `22-§21-6`, `22-§21-7`, `22-§22-2`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§27-3`, `22-§27-8`, `22-§28-2`, `22-§28-3`, `22-§28-6`, `22-§28-7`, `22-§28-9`, `22-§29-3`, `22-§29-7`, `22-§29-10`, `22-§29-12`, `22-§29-13`, `24-§5-4`, `24-§12-1`, `24-§12-2`, `24-§12-3`, `24-§12-4`, `24-§12-5`, `24-§12-6`, `24-§12-7`, `24-§13-1`, `24-§16-1`, `24-§16-2`, `24-§16-3`, `24-§16-4`, `24-§16-5`, `24-§16-6`, `24-§16-7`, `24-§18-1b`, `24-§18-2`, `24-§27-3`, `24-§31-9`, `24-§31-10`, `9-§12-3`, `9-§12-6`, `9-§17-5`, `9-§17-6`, `10-§5-5`, `10-§5-7`, `10-§9-1`, `10-§9-2`, `10-§11-4`, `10-§13-4`, `10-§23-4`, `12-§4-2`, `12-§4-3`, `12-§11-6`, `12-§12-1`, `12-§13-1`, `12-§13-2`, `12-§21-3`, `12-§21-4`, `3-§13-1`, `3-§13-3`, `3-§14-1`, `3-§15-6`, `17-§11-1`, `17-§11-2`, `17-§11-3`, `17-§22-7`, `BP-§10.4-O`, `BP-§10.4-W1`, `BP-§10.4-W2`, `BP-§10.4-W3`, `BP-§10.4-W4`, `BP-§10.4-W5`, `BP-§10.4-W6`, `BP-§10.4-W7`, `BP-§10.4-W8`, `BP-§10.4-W9`, `BP-§10.4-E1`, `BP-§10.4-E3`, `BP-§10.4-A1`, `BP-§10.4-A2`, `BP-§10.4-B1`, `BP-§10.4-B2`, `BP-§6.2`, `BP-§6.5`, `BP-§11-4`, `22-§17-1`, `22-§22-1`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§27-1`, `22-§27-2`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§28-8`, `22-§28-10`, `22-§29-14` |

Forbidden in this workstream, in addition to Section 8:

- a merchant-facing Manager grant UI, label, default bundle or delegation right (DC-06 is PROPOSED);
- OR semantics for multi-scope objects;
- relying on revoke statements without effective-access evidence;

### 7.8 Cross-cutting — governance, migration design and verification applying to every builder workstream

| Field | Value |
|---|---|
| Obligations | `EC15-ARC-01`, `EC15-ARC-02`, `EC15-ARC-03`, `EC15-ARC-04`, `EC15-FIN-05`, `EC15-UX-01`, `EC15-UX-02`, `EC15-UX-03`, `EC15-MIG-01`, `EC15-MIG-02`, `EC15-MIG-03`, `EC15-MIG-04`, `EC15-MIG-05`, `EC15-MIG-06`, `EC15-MIG-07`, `EC15-CI-01`, `EC15-VER-01`, `EC15-VER-02`, `EC15-VER-03`, `EC15-VER-04`, `EC15-VER-05`, `EC15-VER-06`, `EC15-VER-07`, `EC15-VER-08`, `EC15-VER-09`, `EC15-VER-10`, `EC15-VER-11`, `EC15-VER-LEG`, `EC15-CRIT-01`, `EC15-CRIT-02`, `EC15-CRIT-03`, `EC15-CRIT-04`, `EC15-CRIT-05`, `EC15-NG-01`, `EC15-NG-02` |
| Rows | 684 |

### 7.9 Gates — Mission Control holds; not a builder workstream

| Field | Value |
|---|---|
| Obligations | `EC15-HOLD-01`, `EC15-HOLD-02`, `EC15-HOLD-03`, `EC15-HOLD-04`, `EC15-HOLD-05`, `EC15-HOLD-06`, `EC15-HOLD-07`, `EC15-HOLD-08`, `EC15-HOLD-PAR`, `EC15-HOLD-CORR`, `EC15-HOLD-ENGQ`, `EC15-HOLD-ENV` |
| Rows | 652 |

## 8. Behaviour Outside the Assigned Rows Is Forbidden

No workstream builds anything that no assigned row requires. In particular, no workstream builds:

- any row that is `ASSIGNED TO LATER MISSION` (25 plus the U-3 row `20-§23-10`), `DELEGATED` (40), `NOT APPLICABLE` (23), `OUT OF BUILD SCOPE` (20) or `UNRESOLVED FOUNDER DECISION` (1);
- authoritative customer balances or ageing (SB-P-1.16); stock, supplier and POS domain behaviour (SB-P-1.17); SB-P-1.18 and SB-P-1.19 domain behaviour; any WhatsApp, Meta or external channel adapter (SB-P-1.20);
- any SB-P-1.12, SB-P-1.13 or SB-P-1.14 surface, or a temporary parallel version of one;
- correction-specific notification integration or interim copy (`H-CORR`, MC-75 D1);
- a merchant-facing Manager permission UX, label, default or delegation right (DC-06);
- a new merchant-facing feature, label, retention period, consent policy or commercial classification.

Anything believed needed but not assigned is raised under Section 10, never built.

## 9. Holds the Builder Must Not Cross

| Hold or gate | Rows | Condition | Carried by |
|---|---|---|---|
| `D12` / `H-D12` | 548 | SB-P-1.12 kernel specified, **not implemented** | `EC15-HOLD-01`: no obligation on a `D12` row is built until SB-P-1.12 is implemented, verified and accepted for consumption; no temporary parallel authorization |
| `D13` / `H-D13` | 534 | SB-P-1.13 Workspace, gateway, tool registry and governed command specified, **not implemented** | `EC15-HOLD-02` |
| `D14` / `H-D14` | 298 | SB-P-1.14 governed Ledger read model and correction command specified, **not implemented** | `EC15-HOLD-03` |
| `DTX` / `H-DTX` | 33 | Single governed transactions-family write path (PQ-2) not cut over | `EC15-HOLD-04`, `EC15-FIN-05`: no SB-P-1.15 Ledger write path exists |
| Later missions / `H-LATER` | 61 | D16–D19 data owned by SB-P-1.16 to SB-P-1.19 | `EC15-HOLD-05`: shown as not available until those missions exist |
| AI provider / `H-PROV` | 200 | SB-P-1.13 gateway and provider gate | `EC15-HOLD-06`, `EC15-AI-05`; provider selection and activation NOT AUTHORIZED |
| Scheduler runtime / `H-SCHED` | 268 | Runtime not selected (EQ15-01) | `EC15-HOLD-07`, `EC15-SCH-10`; activation NOT AUTHORIZED |
| Notification channels / `H-NTF` | 54 | Native only before SB-P-1.20 (FDB-2) | `EC15-HOLD-08`, `EC15-NTF-05` |
| `H-PAR` | 235 | Private per-row review limits | `EC15-HOLD-PAR`; no claim of per-row private incorporation |
| `H-CORR` | 3 | MC-75 D1 corrective mission not activated | `EC15-HOLD-CORR`, `EC15-NTF-07`; no correction-specific notification built or claimed |
| `H-ENGQ` | 11 | Contract 2 §29 engineering questions | `EC15-HOLD-ENGQ`; answered in EIS Section 30 |
| Birth-safe objects / `H-BIRTH` | 265 | Object-specific effective-privilege proof | `EC15-SEC-01`, `EC15-SEC-02` |
| Privileged execution / `H-PRIV` | 169 | Bound current-authority principal | `EC15-PRIV-01`, `EC15-SEC-04` |
| Isolation / `H-ISO` | 133 | Cross-business isolation | `EC15-SEC-05` |
| Idempotency / `H-IDEM` | 59 | Work, attempt, fence and effect identities | `EC15-SCH-05`, `EC15-SCH-06` |
| Timezone / `H-TZ`, `H-TZC` | 57 / 6 | Owner-confirmed versioned timezone (MC-74, MC-75 D2/D3) | `EC15-TZ-01` to `-10` |
| `H-LVB` | 8 | FPDR-03 latest-valid briefing | `EC15-DI-04` |
| `H-ACT` | 3 | FPDR-02 activation boundary | `EC15-NTF-06`, `EC15-MIG-05` |
| Read-only Ask CFO / `H-RO` | 306 | Zero-write below the prompt layer | `EC15-CFO-02`, `EC15-CFO-03` |
| Financial truth / `H-FIN` | 91 | Deterministic, correction-aware facts; FDB-3 | `EC15-FIN-01`, `EC15-FIN-06` |
| AI behaviour / `H-AI` | 283 | Grounding, injection containment, dignity | `EC15-AI-02`, `EC15-AI-04` |
| Migration / `H-MIG` | 62 | Migration package and rehearsal | `EC15-MIG-01` to `-07`; migration execution NOT AUTHORIZED |
| `H-EVID` | 8 | Runtime and acceptance evidence only | `EC15-VER-11` |
| DC-06 | — | Capability catalogue, source access manifest and required-scope sets are **PROPOSED** | No merchant-facing grant, label, default or delegation right without Founder T6/T3 |
| U-5 | — | Retention durations undecided | `EC15-RET-01`: no cleanup or purge job |
| U-3 | — | `20-§23-10` split responsibility (MC-80) | SB-P-1.15 enforces the schedule; SB-P-1.19 owns onboarding acceptance |
| Environment and evidence | — | Test project SU-494995, live grants, production `cron.job`, CI: `UNVERIFIED — ACCESS REQUIRED` | `EC15-HOLD-ENV`; every test PROPOSED — NOT EXECUTED |

## 10. Pause-and-Escalate Rule

Stop the dependent work, record what was found with evidence, and report to Mission Control when:

- a locked source is ambiguous or conflicts with another or with repository state;
- an assigned row cannot be built as the locked EIS specifies (the row stays `IN SCOPE`, marked partial or blocked with the reason);
- a change would add, remove, narrow or reclassify behaviour, or touch an unassigned row;
- a step needs a migration, provider, channel, production action, credential or environment not explicitly authorized;
- an upstream D12, D13, D14 or DTX capability is missing or differs from its locked specification;
- a DC-06 scope, manifest entry or required-scope set would become merchant-facing (Founder T6/T3);
- any Source 18 trigger T1 to T8 fires;
- a hold in Section 9 would be crossed;
- repository state differs from the baseline the authorization names.

Do not resolve a conflict by dropping, narrowing or inventing behaviour. Resume only on a recorded Mission Control decision.

## 11. Tests, Evidence, Checklist and Completion Duties

- Run the Verification Checklist items for every assigned row: its `VC-R` item, its named negative-path checks and its runtime scenarios.
- Record each result with its evidence class. A missing run is `NOT RUN`, never a pass.
- Write the Builder Completion Report with a status per assigned FCTM row (`IMPLEMENTED — NOT DEMONSTRATED`, `NOT IMPLEMENTED`, partial or blocked with the reason). Demonstration is decided after independent verification, not by the builder.
- Keep D12, D13, D14, DTX, provider, runtime, migration, DC-06 and every `UNVERIFIED — ACCESS REQUIRED` fact visible in every report.

## 12. Workstream-to-FCTM-Row Map

One line per `IN SCOPE` FCTM row, in EIS Section 29.2 order.

| # | FCTM row | Workstreams | Obligations |
|---|---|---|---|
| 1 | `2-§2-1` | WS-E, WS-F, WS-G, Cross-cutting | AUTHZ-10, DI-08, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, CFO-07, AI-02, AI-04, VER-04 |
| 2 | `2-§2-2` | WS-F, Cross-cutting | CFO-01, CFO-02, CFO-03, CFO-06, CFO-07, VER-04 |
| 3 | `2-§2-3` | WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, CFO-07, VER-04 |
| 4 | `2-§2-4` | WS-A, WS-D, WS-F, WS-G, Cross-cutting | AUTHZ-10, REM-05, NTF-05, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-02, AI-04, UX-02, VER-04 |
| 5 | `2-§2-5` | WS-F, WS-G, Cross-cutting | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-02, AI-04, VER-04 |
| 6 | `2-§2-6` | WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, CFO-06, CFO-07, VER-04 |
| 7 | `2-§2-7` | WS-A, WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, REM-07, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, CFO-07, AI-02, AI-04, VER-04 |
| 8 | `2-§2-8` | WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, CFO-07, VER-04 |
| 9 | `2-§2-9` | WS-B, WS-E, WS-F, WS-G, Cross-cutting | AUTHZ-10, RUL-01, DI-08, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-01, VER-04, VER-10 |
| 10 | `2-§3-1` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| 11 | `2-§3-2` | WS-A, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, REM-05, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| 12 | `2-§3-3` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| 13 | `2-§3-4` | WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, TZ-01, TZ-04, TZ-07, TZ-09, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-07, HOLD-01, HOLD-02 |
| 14 | `2-§3-5` | WS-A, WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-04, REM-07, RUL-06, FIN-01, FIN-02, FIN-03, FIN-04, FIN-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 15 | `2-§3-6` | WS-B, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| 16 | `2-§3-7` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| 17 | `2-§3-8` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-03, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| 18 | `2-§3-9` | WS-D, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, NTF-03, CFO-01, CFO-02, CFO-03, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| 19 | `2-§3-10` | WS-B, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, RUL-01, CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02 |
| 20 | `2-§3-11` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, CFO-01, CFO-02, CFO-03, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| 21 | `2-§3-12` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, FIN-01, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| 22 | `2-§3-13` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, CFO-01, CFO-02, CFO-03, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| 23 | `2-§3-14` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, FIN-01, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| 24 | `2-§3-15` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, CFO-01, CFO-02, CFO-03, CFO-04, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| 25 | `2-§3-16` | WS-A, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, REM-07, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 26 | `2-§3-17` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 27 | `2-§3-18` | WS-A, WS-D, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, REM-07, NTF-02, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-08 |
| 28 | `2-§4-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 29 | `2-§4-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 30 | `2-§4-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 31 | `2-§4-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 32 | `2-§4-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 33 | `2-§4-6` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-07, SCH-09, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 34 | `2-§4-7` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 35 | `2-§4-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 36 | `2-§4-9` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 37 | `2-§4-10` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 38 | `2-§5-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 39 | `2-§5-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 40 | `2-§5-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 41 | `2-§5-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 42 | `2-§5-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 43 | `2-§5-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 44 | `2-§5-7` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-03, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 45 | `2-§5-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 46 | `2-§5-9` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 47 | `2-§5-10` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 48 | `2-§5-11` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 49 | `2-§5-12` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-07, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 50 | `2-§5-13` | WS-A, WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-07, RUL-01, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 51 | `2-§5-14` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 52 | `2-§5-15` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 53 | `2-§5-16` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 54 | `2-§5-17` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 55 | `2-§5-18` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 56 | `2-§6-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 57 | `2-§6-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 58 | `2-§6-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 59 | `2-§6-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 60 | `2-§7-1` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-02, CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02 |
| 61 | `2-§7-2` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, SCH-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 62 | `2-§7-3` | WS-A, WS-D, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, REM-05, NTF-05, CFO-01, CFO-02, CFO-03, CFO-04, AI-02, AUD-02, UX-02, VER-01, VER-04, NG-01, HOLD-01, HOLD-02 |
| 63 | `2-§7-4` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02 |
| 64 | `2-§7-5` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 65 | `2-§7-6` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 66 | `2-§7-7` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 67 | `2-§7-8` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 68 | `2-§7-9` | WS-C, WS-F, Cross-cutting, Gate | SCH-09, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 69 | `2-§7-10` | WS-A, WS-F, Cross-cutting, Gate | REM-07, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 70 | `2-§7-11` | WS-E, WS-F, Cross-cutting, Gate | FIN-01, FIN-03, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 71 | `2-§7-12` | WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-09, RUL-05, FIN-01, FIN-03, FIN-05, FIN-06, CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02, HOLD-04 |
| 72 | `2-§8-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 73 | `2-§8-2` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-09, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 74 | `2-§8-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 75 | `2-§8-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 76 | `2-§8-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 77 | `2-§8-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 78 | `2-§8-7` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 79 | `2-§8-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 80 | `2-§8-9` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 81 | `2-§8-10` | WS-A, WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| 82 | `2-§8-11` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 83 | `2-§8-12` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, AI-01, AI-02, AI-03, AI-04, AI-05, VER-01, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 84 | `2-§8-13` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 85 | `2-§8-14` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 86 | `2-§8-15` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 87 | `2-§8-16` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-02, VER-01, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 88 | `2-§9-1` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, CFO-07, VER-04, HOLD-02 |
| 89 | `2-§9-2` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-02 |
| 90 | `2-§9-3` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, REM-07, FIN-01, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-02 |
| 91 | `2-§9-4` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| 92 | `2-§9-5` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| 93 | `2-§9-6` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, AI-02, AI-04, VER-04, HOLD-02 |
| 94 | `2-§9-7` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, AI-02, AI-04, VER-04, HOLD-02 |
| 95 | `2-§9-8` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| 96 | `2-§10-1` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 97 | `2-§10-2` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 98 | `2-§10-3` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, AUTHZ-11, SCH-09, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 99 | `2-§10-4` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 100 | `2-§10-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 101 | `2-§10-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 102 | `2-§10-7` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, SCH-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 103 | `2-§11-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 104 | `2-§11-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 105 | `2-§11-3` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 106 | `2-§11-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 107 | `2-§11-5` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 108 | `2-§11-6` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 109 | `2-§11-7` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 110 | `2-§11-8` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 |
| 111 | `2-§11-9` | WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, NTF-02, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06, HOLD-08 |
| 112 | `2-§11-10` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 113 | `2-§11-11` | WS-A, WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-04, RUL-06, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 |
| 114 | `2-§11-12` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 115 | `2-§11-13` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-03, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 116 | `2-§11-14` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, AUTHZ-11, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-06, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 117 | `2-§11-15` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 118 | `2-§12-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 119 | `2-§12-2` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 120 | `2-§12-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 121 | `2-§12-4` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 122 | `2-§12-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 123 | `2-§12-6` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-01, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 124 | `2-§12-7` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 125 | `2-§12-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 126 | `2-§12-9` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 127 | `2-§12-10` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 128 | `2-§12-11` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 129 | `2-§12-12` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 130 | `2-§12-13` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 131 | `2-§12-14` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, SCH-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 132 | `2-§12-15` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-01, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 133 | `2-§13-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 134 | `2-§13-6` | WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-04, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, NTF-02, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-08 |
| 135 | `2-§14-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 136 | `2-§14-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 137 | `2-§14-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 138 | `2-§14-4` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 139 | `2-§14-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 140 | `2-§14-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 141 | `2-§14-7` | WS-A, WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| 142 | `2-§14-8` | WS-B, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-04, SEC-06, AUTHZ-10, AUTHZ-11, RUL-04, NTF-02, DI-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-08 |
| 143 | `2-§14-9` | WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-04, AUTHZ-10, AUTHZ-11, NTF-02, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-08 |
| 144 | `2-§15-1` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-05, FIN-01, FIN-02, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 145 | `2-§15-2` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 146 | `2-§15-3` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 147 | `2-§15-4` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 148 | `2-§15-5` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 149 | `2-§15-6` | WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, RUL-04, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 150 | `2-§15-7` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 151 | `2-§17-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 152 | `2-§17-2` | WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, RUL-04, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 153 | `2-§17-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 154 | `2-§17-4` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 155 | `2-§17-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 156 | `2-§17-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 157 | `2-§17-7` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, NG-02, HOLD-01, HOLD-02, HOLD-07 |
| 158 | `2-§17-8` | WS-A, WS-C, WS-D, WS-E, WS-F, Cross-cutting, Gate | ARC-01, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, NTF-04, DI-02, CFO-01, CFO-02, CFO-03, VER-04, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| 159 | `2-§18-1` | WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, NG-02, HOLD-01, HOLD-02, HOLD-07 |
| 160 | `2-§18-2` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| 161 | `2-§18-3` | WS-A, WS-C, WS-F, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 162 | `2-§18-4` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-05, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-03, AI-04, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| 163 | `2-§19-1` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-09, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 164 | `2-§19-2` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07 |
| 165 | `2-§19-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 166 | `2-§19-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 167 | `2-§19-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 168 | `2-§19-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 169 | `2-§19-7` | WS-A, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-02, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 170 | `2-§19-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-02, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 171 | `2-§19-9` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, AUTHZ-11, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-06, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 172 | `2-§20-1` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| 173 | `2-§20-2` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-02, VER-04, HOLD-02 |
| 174 | `2-§20-3` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-02, VER-04, HOLD-02 |
| 175 | `2-§20-4` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-02, VER-04, HOLD-02 |
| 176 | `2-§20-5` | WS-A, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, REM-05, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-02 |
| 177 | `2-§20-6` | WS-B, WS-F, Cross-cutting, Gate | RUL-01, CFO-01, CFO-02, CFO-03, CFO-07, VER-04, HOLD-02 |
| 178 | `2-§21-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 179 | `2-§21-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 180 | `2-§21-3` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 181 | `2-§21-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 182 | `2-§21-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 183 | `2-§21-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 184 | `2-§21-7` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 185 | `2-§22-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, UX-01, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 186 | `2-§22-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-03, DI-08, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 187 | `2-§22-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 188 | `2-§22-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 189 | `2-§22-5` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, AUTHZ-11, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 190 | `2-§22-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 191 | `2-§22-7` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 192 | `2-§22-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 193 | `2-§22-9` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, SEC-05, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-02, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 194 | `2-§22-10` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 195 | `2-§22-11` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 196 | `2-§22-12` | WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, NTF-03, NTF-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, RET-02, OPS-02, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 197 | `2-§23-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-07, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 198 | `2-§23-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-06, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 199 | `2-§23-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 200 | `2-§23-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 201 | `2-§23-5` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 202 | `2-§23-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 203 | `2-§23-7` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-09, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 204 | `2-§23-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 205 | `2-§24-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 206 | `2-§24-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-06, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 207 | `2-§24-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, AUD-03, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 208 | `2-§24-4` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 209 | `2-§24-5` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-02 |
| 210 | `2-§24-6` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, TZ-01, TZ-04, TZ-07, TZ-09, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 211 | `2-§24-7` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 212 | `2-§24-8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-06, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 213 | `2-§24-9` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-07, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 214 | `2-§24-10` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 215 | `2-§25-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03 |
| 216 | `2-§25-2` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| 217 | `2-§25-3` | WS-A, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, REM-07, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| 218 | `2-§25-4` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| 219 | `2-§25-5` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| 220 | `2-§25-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 221 | `2-§25-7` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-07, FIN-01, FIN-02, FIN-03, FIN-04, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 222 | `2-§25-8` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-02, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-06 |
| 223 | `2-§25-9` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-02, AUTHZ-10, AUTHZ-11, REM-07, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 224 | `2-§25-10` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 225 | `2-§25-11` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 226 | `2-§25-12` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 227 | `2-§25-13` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 228 | `2-§25-14` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 229 | `2-§25-15` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 230 | `2-§25-16` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, CFO-06, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 231 | `2-§25-17` | WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, RUL-04, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 232 | `2-§25-18` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 233 | `2-§25-22a` | WS-A, WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-05, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 234 | `2-§25-24` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| 235 | `2-§25-25` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, SEC-05, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-02, VER-04, VER-10, HOLD-01 |
| 236 | `2-§25-26` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| 237 | `2-§25-27` | WS-D, WS-F, WS-G, Cross-cutting, Gate | SEC-03, SEC-05, AUTHZ-01, AUTHZ-10, NTF-08, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-02, VER-04, VER-10, HOLD-01 |
| 238 | `2-§25-28` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 239 | `2-§25-29` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-09, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 240 | `2-§25-30` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, OPS-02, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 241 | `2-§26-1` | WS-F, Cross-cutting | ARC-02, CFO-01, CFO-02, CFO-03, VER-04 |
| 242 | `2-§26-2` | WS-F, WS-G, Cross-cutting | ARC-02, SEC-03, AUTHZ-01, AUTHZ-02, CFO-01, CFO-02, CFO-03, VER-04 |
| 243 | `2-§26-3` | WS-F, Cross-cutting | CFO-01, CFO-02, CFO-03, VER-04 |
| 244 | `2-§26-4` | WS-F, Cross-cutting | CFO-01, CFO-02, CFO-03, AI-03, VER-04 |
| 245 | `2-§26-5` | WS-A, WS-D, WS-F, Cross-cutting | ARC-02, REM-05, NTF-05, CFO-01, CFO-02, CFO-03, UX-02, VER-04 |
| 246 | `2-§26-6` | WS-E, WS-F, Cross-cutting | FIN-01, CFO-01, CFO-02, CFO-03, CFO-04, VER-04 |
| 247 | `2-§26-7` | WS-A, WS-F, Cross-cutting | REM-01, CFO-01, CFO-02, CFO-03, VER-04 |
| 248 | `2-§26-8` | WS-E, WS-F, Cross-cutting, Gate | FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, VER-04, HOLD-03 |
| 249 | `2-§26-9` | WS-C, WS-F, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, CFO-01, CFO-02, CFO-03, CFO-04, VER-04, HOLD-07 |
| 250 | `2-§26-10` | WS-F, WS-G, Cross-cutting | ARC-01, SEC-03, AUTHZ-01, CFO-01, CFO-02, CFO-03, AUD-01, VER-04 |
| 251 | `2-§26-11` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, SCH-02, SCH-05, SCH-06, SCH-09, NTF-04, DI-02, DI-08, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-01, VER-04, VER-06, NG-01 |
| 252 | `2-§27-1` | WS-E, WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, FIN-01, FIN-03, FIN-06, CFO-01, CFO-02, CFO-03, VER-04 |
| 253 | `2-§27-2` | WS-C, WS-F, Cross-cutting | SCH-09, CFO-01, CFO-02, CFO-03, VER-04, NG-02 |
| 254 | `2-§27-3` | WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, CFO-01, CFO-02, CFO-03, VER-04 |
| 255 | `2-§27-4` | WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, AUTHZ-05, CFO-01, CFO-02, CFO-03, VER-04 |
| 256 | `2-§27-5` | WS-A, WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-05, CFO-01, CFO-02, CFO-03, CFO-04, VER-04 |
| 257 | `2-§27-6` | WS-A, WS-F, Cross-cutting | REM-05, CFO-01, CFO-02, CFO-03, VER-04 |
| 258 | `2-§29-1` | WS-E, WS-F, Cross-cutting, Gate | FIN-01, CFO-01, CFO-02, CFO-03, VER-04, HOLD-ENGQ |
| 259 | `2-§29-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, DI-03, FIN-01, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-02, AI-04, VER-04, HOLD-ENGQ |
| 260 | `2-§29-3` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, HOLD-ENGQ |
| 261 | `2-§29-4` | WS-A, WS-F, Cross-cutting, Gate | REM-05, CFO-01, CFO-02, CFO-03, AI-03, VER-04, HOLD-ENGQ |
| 262 | `2-§29-5` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-11, CFO-01, CFO-02, CFO-03, OPS-02, VER-04, HOLD-ENGQ |
| 263 | `2-§29-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-06, DI-03, CFO-01, CFO-02, CFO-03, VER-04, HOLD-ENGQ |
| 264 | `2-§29-7` | WS-B, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, RUL-06, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, AUD-01, AUD-03, OPS-02, VER-04, HOLD-ENGQ |
| 265 | `2-§29-8` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, AI-05, VER-04, HOLD-ENGQ |
| 266 | `2-§29-9` | WS-F, WS-G, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, OPS-02, VER-04, HOLD-ENGQ |
| 267 | `2-§29-10` | WS-A, WS-D, WS-F, Cross-cutting, Gate | REM-05, NTF-05, CFO-01, CFO-02, CFO-03, AI-05, VER-04, HOLD-ENGQ |
| 268 | `2-§29-11` | WS-B, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, RUL-01, RUL-04, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, HOLD-01, HOLD-ENGQ |
| 269 | `2-§29-12` | WS-F, WS-G, Cross-cutting | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, FAIL-01, VER-04 |
| 270 | `4-§1-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 271 | `4-§1-2` | WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-02, SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, UX-01, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 272 | `4-§1-3` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, NTF-01, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, AUD-02, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| 273 | `4-§2-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 274 | `4-§2-2` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 275 | `4-§2-3` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 276 | `4-§2-4` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, RUL-06, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, AUD-01, AUD-02, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 277 | `4-§2-5` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-03, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-02, DI-01, DI-02, DI-04, DI-06, DI-07, FIN-02, FIN-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-02, VER-05, VER-07, VER-09, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| 278 | `4-§3-1` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 279 | `4-§3-2` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-05, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, AI-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 280 | `4-§3-3` | WS-A, WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, RUL-01, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 281 | `4-§3-4` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, REM-03, REM-06, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 282 | `4-§3-5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 283 | `4-§3-6` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 284 | `4-§3-7` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 285 | `4-§3-8` | WS-A, WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-02, CFO-03, MIG-02, VER-02, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-PAR |
| 286 | `4-§3-9` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 287 | `4-§3-10` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, FAIL-01, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 288 | `4-§4-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 289 | `4-§4-2` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 290 | `4-§4-3` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 291 | `4-§4-4` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 292 | `4-§4-5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 293 | `4-§4-6` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 294 | `4-§4-7` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 295 | `4-§4-8` | WS-C, WS-E, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-05, DI-06, FIN-02, FIN-03, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 296 | `4-§5-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 297 | `4-§5-2` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 298 | `4-§5-3` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 299 | `4-§5-4` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 300 | `4-§5-5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 301 | `4-§5-6` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-PAR |
| 302 | `4-§5-7` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, REM-08, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 303 | `4-§5-8` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 304 | `4-§5-9` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 305 | `4-§5-10` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-06, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 306 | `4-§6-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 307 | `4-§6-2` | WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 308 | `4-§6-3` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 309 | `4-§6-4` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 310 | `4-§6-5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 311 | `4-§6-6` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 312 | `4-§6-7` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 313 | `4-§6-8` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 314 | `4-§6-9` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-PAR |
| 315 | `4-§6-10` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 316 | `4-§6-11` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-03, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 317 | `4-§6-12` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 318 | `4-§7-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| 319 | `4-§7-2` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, DI-01, DI-02, DI-04, DI-06, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| 320 | `4-§7-3` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| 321 | `4-§7-4` | WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-02, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| 322 | `4-§8-2` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, AI-03, MIG-02, VER-02, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 323 | `4-§8-3` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-02, ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, UX-01, MIG-02, VER-02, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 324 | `4-§8-4` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-02, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| 325 | `4-§9-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 326 | `4-§9-2` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 327 | `4-§9-3` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, CFO-05, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 328 | `4-§9-4` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, DI-08, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 329 | `4-§9-5` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 330 | `4-§9-6` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 331 | `4-§9-7` | WS-A, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, REM-05, NTF-05, DI-01, DI-02, DI-04, DI-06, CFO-05, CFO-06, AI-02, AI-04, UX-02, NG-01, HOLD-02, HOLD-PAR |
| 332 | `4-§9-8` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, CFO-03, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 333 | `4-§10-1` | WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, RUL-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 334 | `4-§10-2` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 335 | `4-§10-3` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 336 | `4-§10-4` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 337 | `4-§10-5` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-06, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 338 | `4-§10-6` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 339 | `4-§10-7` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-04, CFO-05, AI-02, AI-04, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 340 | `4-§10-8` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, REM-08, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 341 | `4-§11-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 342 | `4-§11-2` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| 343 | `4-§11-3` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, REM-01, REM-04, DI-01, DI-02, DI-04, DI-06, MIG-02, VER-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| 344 | `4-§11-4` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 345 | `4-§11-5` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-PAR |
| 346 | `4-§11-6` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-05, HOLD-07, HOLD-08, HOLD-PAR |
| 347 | `4-§11-7` | WS-B, WS-C, WS-E, WS-F, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, RUL-05, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-05, CFO-03, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, HOLD-PAR |
| 348 | `4-§12-1` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, NG-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 349 | `4-§12-2` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 350 | `4-§12-3` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 351 | `4-§12-4` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 352 | `4-§12-5` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-05, DI-06, FIN-02, FIN-03, FAIL-01, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 353 | `4-§13-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 354 | `4-§13-2` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, NTF-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 355 | `4-§13-3` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-07, SCH-08, SCH-10, REM-07, NTF-02, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| 356 | `4-§13-5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-03, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-07, FIN-02, FIN-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-02, VER-05, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 357 | `4-§13-6` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-06, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 358 | `4-§13-7` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-07, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-05, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 359 | `4-§13-8` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| 360 | `4-§13-9` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, NTF-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 361 | `4-§14-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, SEC-06, PRIV-01, PRIV-02, DI-01, DI-02, DI-04, DI-06, UX-02, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 362 | `4-§14-2` | WS-A, WS-D, WS-E, WS-F, Cross-cutting, Gate | REM-05, NTF-05, DI-01, DI-02, DI-04, DI-06, CFO-07, UX-02, HOLD-02, HOLD-PAR |
| 363 | `4-§15-1` | WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-09, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-03, FIN-06, NG-01, HOLD-01, HOLD-02, HOLD-PAR |
| 364 | `4-§15-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-10, DI-01, DI-02, DI-04, DI-06, CFO-05, CFO-06, AI-02, AI-04, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-PAR |
| 365 | `4-§15-3` | WS-A, WS-D, WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, REM-07, NTF-03, NTF-08, DI-01, DI-02, DI-04, DI-06, RET-02, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-PAR |
| 366 | `4-§15-4` | WS-E, Cross-cutting, Gate | DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-01, HOLD-02, HOLD-PAR |
| 367 | `4-§15-5` | WS-E, WS-F, Gate | DI-01, DI-02, DI-04, DI-06, CFO-07, HOLD-01, HOLD-02, HOLD-PAR |
| 368 | `4-§16-1` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-03, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, DI-07, FIN-02, FIN-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-02, VER-05, VER-07, VER-08, VER-09, VER-10, VER-LEG, CRIT-01, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 369 | `4-§16-2` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-09, SCH-10, NTF-04, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-05, VER-06, VER-07, VER-08, VER-10, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 370 | `4-§16-3` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-08, VER-10, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 371 | `4-§16-4` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-05, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 372 | `4-§16-5` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-08, SCH-10, NTF-01, NTF-02, NTF-04, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-05, VER-06, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| 373 | `4-§16-7` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 374 | `4-§16-8` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-01, RUL-04, RUL-05, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, FIN-05, AUD-02, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-04, HOLD-07, HOLD-PAR |
| 375 | `4-§16-9` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, UX-02, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 376 | `4-§16-10` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, FIN-01, FIN-02, FIN-03, CFO-05, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 377 | `4-§16-11` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, CFO-05, CFO-06, AI-02, AI-04, MIG-02, VER-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 378 | `4-§17-1` | WS-C, WS-E, Cross-cutting, Gate | TZ-01, TZ-04, TZ-07, TZ-09, DI-01, DI-02, DI-04, DI-06, VER-07, NG-01, HOLD-PAR |
| 379 | `4-§17-2` | WS-B, WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, RUL-04, DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-PAR |
| 380 | `4-§17-3` | WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-PAR |
| 381 | `4-§17-4` | WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-PAR |
| 382 | `4-§17-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, DI-01, DI-02, DI-03, DI-04, DI-06, CFO-05, AI-02, AI-04, NG-01, HOLD-PAR |
| 383 | `4-§17-6` | WS-D, WS-E, Cross-cutting, Gate | NTF-01, NTF-02, DI-01, DI-02, DI-04, DI-06, NG-01, HOLD-08, HOLD-PAR |
| 384 | `11-§1-1` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-02, CFO-03, MIG-02, VER-04, HOLD-01, HOLD-02, HOLD-07 |
| 385 | `11-§1-2` | WS-A, WS-C, Cross-cutting, Gate | ARC-01, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, VER-07, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 386 | `11-§2-9` | WS-A, WS-F, WS-G | SEC-03, AUTHZ-01, REM-01, REM-03, CFO-07 |
| 387 | `11-§3-1` | WS-A, WS-C, WS-E, WS-F, WS-G, Gate | AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, DI-08, CFO-05, CFO-06, CFO-07, AI-02, AI-04, HOLD-01, HOLD-02, HOLD-07 |
| 388 | `11-§3-2` | WS-A, WS-C, WS-F, WS-G, Gate | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-07, HOLD-01, HOLD-02, HOLD-07 |
| 389 | `11-§3-3` | WS-A, WS-C, WS-F, Gate | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, CFO-07, HOLD-01, HOLD-02, HOLD-07 |
| 390 | `11-§3-4` | WS-A, WS-B, WS-C, WS-F, WS-G, Gate | SEC-03, AUTHZ-01, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-07, AUD-02, HOLD-01, HOLD-02, HOLD-07 |
| 391 | `11-§3-5` | WS-A, WS-B, WS-C, WS-F, WS-G, Gate | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-04, CFO-07, HOLD-01, HOLD-02, HOLD-07 |
| 392 | `11-§3-6` | WS-A, WS-B, WS-C, WS-E, WS-F, WS-G, Gate | SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-01, DI-08, CFO-05, CFO-07, AI-02, AI-04, AUD-02, HOLD-01, HOLD-02, HOLD-07 |
| 393 | `11-§3-7` | WS-A, WS-C, WS-D, WS-E, WS-F, Cross-cutting, Gate | ARC-01, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, NTF-04, DI-02, CFO-07, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| 394 | `11-§3-8` | WS-A, WS-B, WS-C, WS-F, WS-G, Gate | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, RUL-06, CFO-07, AUD-01, AUD-02, OPS-02, HOLD-01, HOLD-02, HOLD-07 |
| 395 | `11-§4-1` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 396 | `11-§4-2` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 397 | `11-§4-3` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 398 | `11-§4-4` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-06, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 399 | `11-§4-5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, AUTHZ-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, DI-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-05, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 400 | `11-§4-6` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 401 | `11-§4-7` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, REM-03, REM-07, FIN-01, FIN-03, FIN-04, FIN-06, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 402 | `11-§4-8` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, DI-03, AI-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 403 | `11-§4-9` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 404 | `11-§4-10` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, RUL-06, DI-02, AUD-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 405 | `11-§4-11` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 406 | `11-§4-12` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-06, REM-07, NTF-01, NTF-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 407 | `11-§4-13` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, AUTHZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-05, AI-02, AI-04, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 408 | `11-§5-1` | WS-A, WS-C, WS-D, WS-F, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-04, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, NTF-02, AI-03, MIG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 409 | `11-§5-2` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, REM-05, MIG-02, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 410 | `11-§5-3` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, DI-08, MIG-02, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 411 | `11-§5-4` | WS-A, WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, RUL-04, MIG-02, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 412 | `11-§5-5` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| 413 | `11-§6-1` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, DI-02, MIG-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| 414 | `11-§6-2` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, DI-02, MIG-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| 415 | `11-§6-3` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, MIG-02, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| 416 | `11-§6-4` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-04, MIG-02, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| 417 | `11-§6-5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, DI-02, MIG-02, VER-05, VER-06, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| 418 | `11-§6-6` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, REM-03, FIN-02, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07 |
| 419 | `11-§6-7` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, RUL-04, DI-02, MIG-02, VER-05, VER-06, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| 420 | `11-§7-1` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 421 | `11-§7-2` | WS-A, WS-C, WS-E, Cross-cutting, Gate | TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, DI-02, VER-05, VER-06, VER-07, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 422 | `11-§7-3` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-10, REM-01, REM-03, NTF-02, NTF-04, NTF-05, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-09, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 423 | `11-§8-1` | WS-A, WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, RUL-04, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| 424 | `11-§8-2` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 425 | `11-§8-3` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 426 | `11-§8-4` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, FIN-01, FIN-03, FIN-04, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 427 | `11-§8-5` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 428 | `11-§8-6` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 429 | `11-§8-7` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, NTF-02, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07, HOLD-08 |
| 430 | `11-§8-8` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SEC-06, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-02, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 431 | `11-§8-9` | WS-A, WS-C, Cross-cutting, Gate | TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, VER-07, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 432 | `11-§9-1` | WS-A, WS-C, WS-E, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, FIN-01, FIN-03, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 433 | `11-§9-2` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, REM-08, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 434 | `11-§9-3` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, CFO-03, VER-01, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 435 | `11-§9-4` | WS-A, WS-C, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 436 | `11-§9-5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, FIN-01, FIN-03, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 437 | `11-§9-6` | WS-A, WS-C, WS-D, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, REM-08, NTF-02, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 438 | `11-§9-7` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-08, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-07 |
| 439 | `11-§10-1` | WS-A, WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-01, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-04 |
| 440 | `11-§10-2` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-08, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 441 | `11-§10-3` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-05, HOLD-PAR |
| 442 | `11-§10-4` | WS-A, WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-07, RUL-01, RUL-02, RUL-04, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-05, HOLD-PAR |
| 443 | `11-§10-5` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, FIN-02, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-05 |
| 444 | `11-§10-6` | WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 445 | `11-§10-7` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 446 | `11-§10-8` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, AUTHZ-09, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, FIN-06, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 447 | `11-§10-9` | WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, CFO-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 448 | `11-§10-10` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 449 | `11-§10-11` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-01, REM-04, RUL-01, RUL-02, RUL-05, RUL-06, FIN-01, FIN-03, FIN-05, AUD-01, AUD-02, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 450 | `11-§11-1` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 451 | `11-§11-2` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 452 | `11-§11-3` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 453 | `11-§11-4` | WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-04, CFO-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 454 | `11-§11-5` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 455 | `11-§11-6` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 456 | `11-§11-7` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 457 | `11-§11-8` | WS-B, WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, NTF-02, NTF-05, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-08 |
| 458 | `11-§11-9` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-06, AUD-01, AUD-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 459 | `11-§11-10` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 460 | `11-§11-11` | WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, AUTHZ-11, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-03, AI-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-03, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 461 | `11-§11-12` | WS-A, WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-04, RUL-01, RUL-02, RUL-06, AUD-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 462 | `11-§11-13` | WS-A, WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-04, RUL-01, RUL-02, RUL-06, AUD-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 463 | `11-§11-14` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-10, REM-04, RUL-01, RUL-02, RUL-06, DI-02, AUD-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 464 | `11-§11-15` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-03, AUD-02, VER-01, NG-01, HOLD-01, HOLD-07, HOLD-PAR |
| 465 | `11-§12-1` | WS-A, WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-10, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-07, RUL-01, RUL-02, CFO-05, AI-02, AI-04, MIG-02, VER-10, HOLD-01, HOLD-05, HOLD-07 |
| 466 | `11-§12-2` | WS-A, WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-07, RUL-01, RUL-02, CFO-03, MIG-02, VER-10, HOLD-01, HOLD-05, HOLD-07, HOLD-PAR |
| 467 | `11-§12-3` | WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, AUD-02, VER-01, NG-01, HOLD-01, HOLD-05, HOLD-07, HOLD-PAR |
| 468 | `11-§13-1` | WS-A, WS-B, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, REM-01, REM-03, RUL-01, MIG-02, HOLD-01 |
| 469 | `11-§13-2` | WS-A, WS-B, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-01, REM-03, RUL-01, AUD-02, MIG-02, HOLD-01 |
| 470 | `11-§13-3` | WS-A, WS-E, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, AUTHZ-09, REM-01, REM-03, FIN-01, FIN-03, FIN-06, VER-01, NG-01, HOLD-01 |
| 471 | `11-§13-4` | WS-A, WS-B, WS-D, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-05, REM-01, REM-03, RUL-01, NTF-03, CFO-03, VER-01, NG-01, HOLD-01 |
| 472 | `11-§14-1` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, NTF-02, NTF-05, MIG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 473 | `11-§14-3` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-07, SCH-10, REM-01, REM-03, REM-07, NTF-01, NTF-02, NTF-05, MIG-02, NG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 474 | `11-§15-1` | WS-A, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, SEC-06, REM-01, REM-03, CFO-03, UX-02, MIG-02, HOLD-02 |
| 475 | `11-§15-2` | WS-A, WS-C, Cross-cutting, Gate | TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, REM-01, REM-03, REM-05, VER-07, NG-01, HOLD-02 |
| 476 | `11-§16-1` | WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 477 | `11-§16-2` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 478 | `11-§16-3` | WS-B, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-05, SCH-06, RUL-01, RUL-02, RUL-05, NTF-04, DI-02, FIN-01, FIN-03, FIN-05, MIG-02, VER-06, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 479 | `11-§16-4` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-05, RUL-06, FIN-01, FIN-03, FIN-05, AUD-01, AUD-02, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 480 | `11-§16-5` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-07, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, FAIL-01, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 481 | `11-§16-6` | WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, NG-01, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 482 | `11-§17-1` | WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| 483 | `11-§17-2` | WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-07, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, NTF-03, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| 484 | `11-§17-3` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-05, NTF-01, NTF-02, NTF-05, UX-02, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 485 | `11-§17-4` | WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, NTF-05, MIG-02, VER-02, NG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| 486 | `11-§17-5` | WS-A, WS-C, WS-D, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-10, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, REM-07, NTF-01, NTF-02, NTF-05, CFO-05, AI-02, AI-04, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 487 | `11-§17-6` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, NTF-01, NTF-02, NTF-04, DI-02, MIG-02, VER-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| 488 | `11-§17-7` | WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-01, NTF-02, NTF-03, NTF-08, RET-02, OPS-02, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| 489 | `11-§17-8` | WS-C, WS-D, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, NTF-01, NTF-02, CFO-03, UX-03, NG-01, HOLD-01, HOLD-02, HOLD-07, HOLD-08, HOLD-PAR |
| 490 | `11-§18-1` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| 491 | `11-§18-2` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, AI-03, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| 492 | `11-§18-3` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, AUTHZ-06, SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, REM-03, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| 493 | `11-§18-4` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, NTF-04, DI-02, MIG-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-07 |
| 494 | `11-§18-5` | WS-A, WS-C, WS-D, WS-F, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-07, SCH-10, REM-01, REM-03, NTF-01, NTF-02, NTF-05, NTF-09, AI-05, MIG-02, NG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 495 | `11-§18-6` | WS-A, WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, AUTHZ-06, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-03, AI-03, MIG-02, VER-03, HOLD-01, HOLD-02, HOLD-07 |
| 496 | `11-§18-7` | WS-A, WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-06, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-01, RUL-03, AI-03, MIG-02, VER-03, HOLD-01, HOLD-02, HOLD-07 |
| 497 | `11-§18-8` | WS-A, WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, REM-01, REM-03, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, FAIL-02, MIG-02, HOLD-01, HOLD-02, HOLD-04 |
| 498 | `11-§18-9` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, DI-02, MIG-02, VER-05, VER-06, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| 499 | `11-§18-10` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, AUTHZ-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, DI-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-05, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 500 | `11-§18-11` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, NTF-02, NTF-05, NTF-09, FAIL-01, MIG-02, NG-02, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 501 | `11-§18-12` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-09, SCH-10, REM-01, REM-03, FAIL-01, FAIL-02, NG-01, HOLD-01, HOLD-02, HOLD-07 |
| 502 | `11-§19-1` | WS-A, WS-D, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-05, REM-01, REM-03, NTF-03, NTF-08, RET-02, VER-01, NG-01, HOLD-01 |
| 503 | `11-§19-2` | WS-A, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, REM-01, REM-03, MIG-02, HOLD-01 |
| 504 | `11-§19-3` | WS-A, WS-D, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, REM-01, REM-03, REM-05, NTF-03, NTF-08, RET-02, VER-01, NG-01, HOLD-01 |
| 505 | `11-§19-4` | WS-A, WS-B, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, REM-01, REM-03, REM-04, RUL-06, AUD-01, AUD-02, MIG-02, HOLD-01 |
| 506 | `11-§20-1` | WS-A, WS-E, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-04, REM-01, REM-03, FIN-02, MIG-02, HOLD-03 |
| 507 | `11-§20-2` | WS-A, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-04, REM-01, REM-03, MIG-02, HOLD-01 |
| 508 | `11-§20-3` | WS-A, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, REM-01, REM-03, MIG-02, HOLD-01 |
| 509 | `11-§20-4` | WS-A, WS-D, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-04, REM-01, REM-03, REM-05, NTF-05, UX-02, MIG-02, HOLD-02 |
| 510 | `11-§20-5` | WS-A, WS-D, WS-F, WS-G, Cross-cutting, Gate | ARC-02, ARC-04, SEC-01, SEC-02, SEC-04, REM-01, REM-03, NTF-02, NTF-05, AI-03, MIG-02, HOLD-02, HOLD-08 |
| 511 | `11-§20-6` | WS-A, WS-D, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, REM-01, REM-03, NTF-01, NTF-02, MIG-02, HOLD-08 |
| 512 | `11-§20-7` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, SCH-02, SCH-05, SCH-06, REM-01, REM-03, DI-02, AUD-01, AUD-02, MIG-02, VER-06, HOLD-01 |
| 513 | `11-§20-8` | WS-A, WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-04, REM-01, REM-03, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-04 |
| 514 | `11-§21-1` | WS-A, WS-C, WS-D, WS-E, Cross-cutting | ARC-01, SCH-02, SCH-05, SCH-06, REM-01, REM-03, NTF-04, DI-02, VER-06, NG-01 |
| 515 | `11-§21-2` | WS-A, WS-B, WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, PRIV-04, REM-01, REM-03, CFO-05, AI-02, AI-04, VER-01, NG-01 |
| 516 | `11-§21-3` | WS-A, WS-B, WS-E, WS-F, Cross-cutting | REM-01, REM-03, RUL-05, FIN-01, FIN-03, CFO-02, CFO-03, VER-04, NG-01 |
| 517 | `11-§21-4` | WS-A, WS-C, Cross-cutting | TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, REM-01, REM-03, REM-06, REM-08, VER-07, NG-01 |
| 518 | `11-§21-5` | WS-A, WS-B, WS-G, Cross-cutting | SEC-03, AUTHZ-01, REM-01, REM-03, REM-07, RUL-05, NG-01 |
| 519 | `11-§21-6` | WS-A, WS-G, Cross-cutting, Gate | ARC-01, REM-01, REM-03, FAIL-01, VER-11, NG-01, HOLD-PAR |
| 520 | `11-§22-1` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, NTF-05, UX-02, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 521 | `11-§22-2` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 522 | `11-§22-3` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, REM-04, RUL-06, DI-02, AUD-01, MIG-02, VER-05, VER-06, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 523 | `11-§22-4` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, NTF-04, DI-02, MIG-02, VER-05, VER-06, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 524 | `11-§22-6` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-06, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-07 |
| 525 | `11-§22-7` | WS-A, WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, REM-01, REM-03, RUL-01, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, AUD-02, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04 |
| 526 | `11-§22-8` | WS-A, WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-01, RUL-03, MIG-02, VER-10, HOLD-01, HOLD-07 |
| 527 | `11-§22-9` | WS-A, WS-B, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, AUTHZ-06, AUTHZ-09, AUTHZ-11, TZ-05, REM-01, REM-03, RUL-03, RUL-05, FIN-01, FIN-03, FIN-05, FIN-06, AI-03, MIG-02, VER-03, VER-10, HOLD-01, HOLD-04 |
| 528 | `11-§22-10` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-07, SCH-10, REM-01, REM-03, REM-04, NTF-01, NTF-02, NTF-10, UX-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07, HOLD-08 |
| 529 | `11-§22-11` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, NTF-04, DI-02, MIG-02, VER-05, VER-06, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 530 | `11-§22-12` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-07, SCH-09, SCH-10, REM-01, REM-03, FAIL-01, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 531 | `11-§23-1` | WS-A, WS-C, WS-F, Gate | SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-07, HOLD-01, HOLD-02, HOLD-07 |
| 532 | `11-§23-2` | WS-A, WS-G, Cross-cutting | SEC-03, AUTHZ-01, REM-01, REM-03, NG-01 |
| 533 | `11-§23-3` | WS-A, WS-B, WS-F, WS-G, Cross-cutting | SEC-03, AUTHZ-01, AUTHZ-10, PRIV-04, REM-01, REM-03, CFO-05, AI-02, AI-04, VER-01, NG-01 |
| 534 | `11-§23-4` | WS-A, WS-C, WS-D, WS-E, Cross-cutting | ARC-01, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-05, SCH-06, REM-01, REM-03, NTF-04, DI-02, VER-06, VER-07, NG-01 |
| 535 | `11-§23-5` | WS-A, WS-C, Cross-cutting | TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, SCH-01, REM-01, REM-03, VER-07, VER-LEG, NG-01 |
| 536 | `22-§11-1` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, AUTHZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, RET-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 537 | `22-§11-2` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 538 | `22-§11-3` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 539 | `22-§11-4` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, FIN-01, FIN-03, FIN-04, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 540 | `22-§11-5` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07 |
| 541 | `22-§11-6` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, NTF-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-05, HOLD-07, HOLD-08 |
| 542 | `22-§11-7` | WS-A, WS-B, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, RUL-04, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 543 | `22-§11-8` | WS-A, WS-B, WS-C, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, RUL-01, CFO-05, AI-02, AI-04, AUD-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 544 | `22-§11-9` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-07, VER-09, HOLD-01, HOLD-02, HOLD-07 |
| 545 | `22-§12-1` | WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-07, PRIV-01, PRIV-02, NTF-01, NTF-02, NTF-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR |
| 546 | `22-§12-2` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, REM-05, NTF-01, NTF-02, NTF-05, UX-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, HOLD-01, HOLD-02, HOLD-08 |
| 547 | `22-§12-3` | WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, NTF-01, NTF-02, NTF-05, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, NG-02, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR |
| 548 | `22-§12-4` | WS-C, WS-D, WS-F, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, SCH-09, NTF-01, NTF-02, NTF-05, AI-05, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, NG-02, HOLD-01, HOLD-02, HOLD-08 |
| 549 | `22-§12-5` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-05, SCH-06, SCH-07, REM-07, NTF-01, NTF-02, NTF-06, NTF-07, NTF-09, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-05, MIG-07, VER-02, VER-06, VER-08, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR, HOLD-CORR |
| 550 | `22-§12-6` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-05, SCH-06, NTF-01, NTF-02, NTF-04, NTF-06, NTF-07, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-05, MIG-07, VER-02, VER-06, VER-08, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR, HOLD-CORR |
| 551 | `22-§12-7` | WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, NTF-01, NTF-02, NTF-03, NTF-08, RET-02, OPS-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR |
| 552 | `22-§12-8` | WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, NTF-01, NTF-02, NTF-06, NTF-07, MIG-01, MIG-02, MIG-03, MIG-04, MIG-05, MIG-07, VER-02, VER-08, VER-09, NG-02, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR, HOLD-CORR |
| 553 | `22-§12-9` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, REM-04, REM-07, NTF-01, NTF-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-09, HOLD-01, HOLD-02, HOLD-08, HOLD-PAR |
| 554 | `22-§17-1` | Cross-cutting, accountable: WS-G | ARC-01, VER-11 |
| 555 | `22-§17-9` | WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, NG-01, HOLD-PAR |
| 556 | `22-§18-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, FIN-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 557 | `22-§18-2` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, REM-01, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 558 | `22-§18-3` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-08, SCH-10, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 559 | `22-§18-4` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, FIN-02, RET-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-03, HOLD-07 |
| 560 | `22-§18-5` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-05, HOLD-07 |
| 561 | `22-§18-6` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, DI-03, FIN-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 562 | `22-§18-7` | WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, PRIV-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, DI-02, CFO-03, VER-05, VER-06, NG-01, HOLD-01, HOLD-07, HOLD-PAR |
| 563 | `22-§18-8` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 564 | `22-§18-9` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, SCH-11, DI-02, OPS-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 565 | `22-§18-10` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-08, SCH-10, DI-02, FAIL-01, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-07, HOLD-PAR |
| 566 | `22-§18-11` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-02, AUTHZ-06, AUTHZ-09, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, RUL-05, DI-02, FIN-01, FIN-03, FIN-05, FIN-06, AUD-02, MIG-01, MIG-02, MIG-03, MIG-04, MIG-07, VER-02, VER-05, VER-06, VER-09, HOLD-01, HOLD-04, HOLD-07, HOLD-PAR |
| 567 | `22-§19-8` | WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SCH-02, SCH-05, SCH-06, SCH-09, DI-02, DI-05, FAIL-01, VER-06, HOLD-PAR |
| 568 | `22-§19-1` | WS-C, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, SCH-07, CFO-05, AI-02, AI-04, FAIL-02, HOLD-PAR |
| 569 | `22-§19-2` | WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SCH-02, SCH-05, SCH-06, SCH-07, DI-02, FAIL-02, VER-06, HOLD-PAR |
| 570 | `22-§19-3` | WS-G, Cross-cutting, Gate | ARC-01, FAIL-02, UX-03, HOLD-PAR |
| 571 | `22-§19-4` | WS-G, Cross-cutting, Gate | ARC-01, FAIL-02, HOLD-PAR |
| 572 | `22-§19-5` | WS-C, WS-G, Cross-cutting, Gate | ARC-01, SCH-11, OPS-01, HOLD-PAR |
| 573 | `22-§19-6` | WS-G, Cross-cutting, Gate | ARC-01, FAIL-01, HOLD-PAR |
| 574 | `22-§19-7` | WS-D, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, NTF-05, AI-05, FAIL-01, HOLD-PAR |
| 575 | `22-§21-1` | WS-G, Cross-cutting | ARC-01, SEC-03, AUTHZ-01, OPS-02, UX-01 |
| 576 | `22-§21-2` | WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, OPS-02, NG-01, HOLD-PAR |
| 577 | `22-§21-3` | WS-E, WS-G, Cross-cutting, Gate | ARC-01, FIN-01, FIN-03, OPS-02, NG-01, HOLD-PAR |
| 578 | `22-§21-4` | WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, OPS-02, NG-01, HOLD-PAR |
| 579 | `22-§21-5` | WS-D, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, NTF-03, NTF-08, RET-02, OPS-02, NG-01, HOLD-PAR |
| 580 | `22-§21-6` | WS-B, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, RUL-06, AUD-01, OPS-02, NG-01, HOLD-PAR |
| 581 | `22-§21-7` | WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, AUTHZ-11, CFO-05, AI-02, AI-04, OPS-02, HOLD-PAR |
| 582 | `22-§22-1` | Cross-cutting, Gate, accountable: WS-G | ARC-01, UX-01, HOLD-PAR |
| 583 | `22-§22-2` | WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-09, DI-03, FIN-01, FIN-03, FIN-06, CI-01, HOLD-PAR |
| 584 | `22-§22-3` | WS-C, Cross-cutting, Gate | ARC-01, SCH-07, CI-01, HOLD-PAR |
| 585 | `22-§22-4` | Cross-cutting, Gate, accountable: WS-G | ARC-01, VER-11, HOLD-PAR |
| 586 | `22-§22-5` | Cross-cutting, Gate, accountable: WS-G | ARC-01, VER-11, HOLD-PAR |
| 587 | `22-§22-6` | Cross-cutting, accountable: WS-G | ARC-01, CI-01, VER-11, NG-01 |
| 588 | `22-§23-2` | WS-D, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, SEC-05, AUTHZ-01, NTF-08, VER-02, CRIT-03, HOLD-01, HOLD-PAR |
| 589 | `22-§23-3` | WS-D, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, SEC-05, SEC-06, AUTHZ-01, AUTHZ-05, NTF-03, HOLD-01, HOLD-PAR |
| 590 | `22-§23-5` | WS-D, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-05, NTF-03, HOLD-01, HOLD-PAR |
| 591 | `22-§27-1` | Cross-cutting, Gate, accountable: WS-G | ARC-01, ARC-03, HOLD-PAR |
| 592 | `22-§27-2` | Cross-cutting, Gate, accountable: WS-G | ARC-01, ARC-03, HOLD-PAR |
| 593 | `22-§27-3` | WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, ARC-03, ARC-04, AUTHZ-10, NTF-02, NTF-05, DI-08, CFO-05, AI-02, AI-04, HOLD-08, HOLD-PAR |
| 594 | `22-§27-4` | WS-C, WS-D, WS-E, Cross-cutting, Gate | ARC-01, ARC-03, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, VER-06, HOLD-PAR |
| 595 | `22-§27-5` | Cross-cutting, Gate, accountable: WS-G | ARC-01, ARC-03, NG-02, HOLD-PAR |
| 596 | `22-§27-6` | Cross-cutting, Gate, accountable: WS-G | ARC-01, ARC-03, HOLD-PAR |
| 597 | `22-§27-7` | Cross-cutting, Gate, accountable: WS-G | ARC-01, ARC-03, VER-11, HOLD-PAR |
| 598 | `22-§27-8` | WS-C, WS-G, Cross-cutting | ARC-01, SCH-09, FAIL-01, VER-11, NG-01, NG-02 |
| 599 | `22-§28-1` | WS-C, WS-D, WS-E, Cross-cutting, Gate | ARC-01, ARC-02, ARC-04, SCH-02, SCH-05, SCH-06, NTF-02, NTF-04, NTF-05, DI-02, VER-06, NG-01, HOLD-08, HOLD-PAR |
| 600 | `22-§28-2` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, SEC-03, AUTHZ-01, AUTHZ-02, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, VER-01, VER-06, NG-01, HOLD-PAR |
| 601 | `22-§28-3` | WS-C, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, ARC-04, AUTHZ-10, SCH-02, SCH-05, SCH-06, NTF-02, NTF-04, NTF-05, DI-02, DI-08, CFO-05, AI-02, AI-04, VER-06, NG-01, HOLD-08, HOLD-PAR |
| 602 | `22-§28-4` | WS-A, WS-C, WS-D, WS-E, Cross-cutting, Gate | ARC-01, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-05, SCH-06, REM-01, NTF-04, DI-02, VER-06, VER-07, NG-01, HOLD-PAR |
| 603 | `22-§28-5` | WS-C, WS-D, WS-E, Cross-cutting, Gate | ARC-01, SCH-02, SCH-05, SCH-06, NTF-04, DI-02, VER-06, NG-01, HOLD-PAR |
| 604 | `22-§28-6` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, SCH-02, SCH-05, SCH-06, REM-07, NTF-04, DI-02, VER-06, NG-01, HOLD-PAR |
| 605 | `22-§28-7` | WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, AUTHZ-05, VER-01, NG-01, HOLD-PAR |
| 606 | `22-§28-8` | Cross-cutting, accountable: WS-G | ARC-01, VER-11, NG-01 |
| 607 | `22-§28-9` | WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-10, CFO-03, CFO-05, AI-02, AI-04, VER-01, CRIT-04, NG-01, HOLD-PAR |
| 608 | `22-§28-10` | Cross-cutting, accountable: WS-G | ARC-01, VER-11, NG-01 |
| 609 | `22-§29-3` | WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, ARC-04, SEC-03, SEC-05, AUTHZ-01, AUTHZ-10, NTF-02, NTF-05, DI-08, CFO-03, CFO-05, AI-02, AI-04, VER-02, VER-10, CRIT-05, HOLD-01, HOLD-08, HOLD-PAR |
| 610 | `22-§29-4` | WS-A, WS-C, Cross-cutting, Gate | ARC-01, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, VER-10, HOLD-01, HOLD-02, HOLD-07, HOLD-PAR |
| 611 | `22-§29-7` | WS-B, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, AUTHZ-06, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, VER-10, HOLD-01, HOLD-04, HOLD-PAR |
| 612 | `22-§29-8` | WS-C, WS-D, WS-E, Cross-cutting, Gate | ARC-01, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-07, SCH-10, NTF-04, DI-02, VER-05, VER-06, VER-10, HOLD-01, HOLD-07, HOLD-PAR |
| 613 | `22-§29-10` | WS-C, WS-D, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SCH-02, SCH-03, SCH-04, SCH-07, SCH-10, NTF-02, NTF-05, NTF-09, AI-05, FAIL-01, VER-10, HOLD-07, HOLD-08, HOLD-PAR |
| 614 | `22-§29-12` | WS-A, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, REM-05, AI-03, AUD-01, AUD-02, VER-10, HOLD-01, HOLD-PAR |
| 615 | `22-§29-13` | WS-D, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-01, AUTHZ-10, AUTHZ-11, NTF-09, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, FAIL-01, VER-10, HOLD-06, HOLD-PAR |
| 616 | `22-§29-14` | Cross-cutting, Gate, accountable: WS-G | ARC-01, ARC-03, VER-10, HOLD-PAR |
| 617 | `24-§5-4` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-08, SCH-10, DI-02, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, VER-05, VER-06, VER-07, HOLD-02, HOLD-06, HOLD-07, HOLD-PAR |
| 618 | `24-§12-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 619 | `24-§12-2` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 620 | `24-§12-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 621 | `24-§12-4` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-07, SCH-09, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-04, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 622 | `24-§12-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 623 | `24-§12-6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 624 | `24-§12-7` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, DI-08, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 625 | `24-§12-8` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 626 | `24-§12-9` | WS-B, WS-E, WS-F, Cross-cutting, Gate | RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-01, CFO-02, CFO-03, VER-04, HOLD-01, HOLD-02, HOLD-04 |
| 627 | `24-§13-1` | WS-A, WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, REM-04, REM-05, RUL-01, RUL-06, DI-02, DI-08, CFO-05, AI-02, AI-04, AUD-01, MIG-02, VER-05, VER-06, VER-07, HOLD-01, HOLD-02, HOLD-07 |
| 628 | `24-§16-1` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, DI-08, FIN-01, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, CRIT-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| 629 | `24-§16-2` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| 630 | `24-§16-3` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| 631 | `24-§16-4` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| 632 | `24-§16-5` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| 633 | `24-§16-6` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, PRIV-03, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, MIG-02, VER-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07, HOLD-PAR |
| 634 | `24-§16-7` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, CFO-05, AI-02, AI-04, AUD-02, VER-01, VER-07, NG-01, HOLD-01, HOLD-07, HOLD-PAR |
| 635 | `24-§18-1b` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 |
| 636 | `24-§18-2` | WS-A, WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-05, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-07, HOLD-PAR |
| 637 | `24-§27-3` | WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-01, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 638 | `24-§31-9` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| 639 | `24-§31-10` | WS-A, WS-C, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 640 | `9-§12-2` | WS-A, WS-D, WS-F, Cross-cutting, Gate | ARC-01, ARC-02, REM-05, NTF-05, CFO-01, CFO-02, CFO-03, UX-02, VER-04, HOLD-02 |
| 641 | `9-§12-3` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, REM-05, NTF-05, DI-01, DI-02, DI-04, DI-06, UX-02, MIG-02, VER-02, HOLD-02, HOLD-PAR |
| 642 | `9-§12-6` | WS-A, WS-B, WS-D, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-11, REM-01, REM-03, REM-05, RUL-01, NTF-05, UX-02, MIG-02, HOLD-02 |
| 643 | `9-§17-5` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-05, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, VER-07, VER-10, HOLD-02, HOLD-07 |
| 644 | `9-§17-6` | WS-A, WS-D, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, NTF-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, UX-02, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 645 | `10-§5-5` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 646 | `10-§5-7` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-02, ARC-04, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-06, NTF-05, MIG-02, NG-02, HOLD-01, HOLD-02, HOLD-07 |
| 647 | `10-§9-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 648 | `10-§9-2` | WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-02, AUTHZ-10, AUTHZ-11, SCH-07, RUL-04, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 649 | `10-§11-4` | WS-A, WS-C, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-04, SEC-06, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, HOLD-02, HOLD-07 |
| 650 | `10-§13-4` | WS-A, WS-C, WS-F, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, CFO-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 651 | `10-§23-4` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, AUD-02, VER-04, VER-10, HOLD-01, HOLD-02 |
| 652 | `12-§4-2` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, SEC-06, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 653 | `12-§4-3` | WS-A, WS-C, WS-G, Cross-cutting, Gate | ARC-02, SEC-01, SEC-02, SEC-04, SEC-06, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, HOLD-02, HOLD-07 |
| 654 | `12-§11-6` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 655 | `12-§12-1` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 656 | `12-§12-3` | WS-A, WS-F, Cross-cutting, Gate | REM-05, CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 657 | `12-§13-1` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, HOLD-02, HOLD-07 |
| 658 | `12-§13-2` | WS-A, WS-B, WS-C, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, RUL-04, MIG-02, HOLD-02, HOLD-07 |
| 659 | `12-§21-3` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, AUTHZ-11, REM-05, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 660 | `12-§21-4` | WS-A, WS-C, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-05, MIG-02, VER-10, HOLD-02, HOLD-07 |
| 661 | `3-§13-1` | WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-10, AUTHZ-11, FIN-01, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 662 | `3-§13-2` | WS-F, Cross-cutting, Gate | CFO-01, CFO-02, CFO-03, VER-04, NG-01, HOLD-01, HOLD-02 |
| 663 | `3-§13-3` | WS-A, WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-07, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-07, HOLD-PAR |
| 664 | `3-§14-1` | WS-C, WS-E, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-01, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, DI-01, DI-02, DI-04, DI-06, FIN-01, FIN-02, FIN-03, MIG-02, VER-02, VER-07, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 665 | `3-§15-6` | WS-A, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-01, ARC-02, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, NTF-04, DI-02, FIN-01, FIN-02, FIN-03, MIG-02, VER-05, VER-06, HOLD-01, HOLD-02, HOLD-03, HOLD-07 |
| 666 | `17-§11-1` | WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-02, AUTHZ-10, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, HOLD-01, HOLD-02, HOLD-03, HOLD-06, HOLD-07 |
| 667 | `17-§11-2` | WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, NG-01, HOLD-01, HOLD-02 |
| 668 | `17-§11-3` | WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-04, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-08, SCH-10, NTF-02, NTF-05, DI-01, DI-02, DI-04, DI-06, FIN-02, FIN-03, MIG-02, VER-02, VER-07, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-08, HOLD-PAR |
| 669 | `17-§22-7` | WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01, HOLD-02 |
| 670 | `BP-§9-4` | WS-A, Cross-cutting, Gate | ARC-04, REM-01, VER-11, HOLD-PAR |
| 671 | `BP-§10.4-O` | WS-G, Cross-cutting | ARC-04, SEC-03, AUTHZ-01, UX-01, VER-10 |
| 672 | `BP-§10.4-W1` | WS-A, WS-C, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 673 | `BP-§10.4-W2` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-03, REM-04, DI-02, MIG-02, VER-05, VER-06, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 674 | `BP-§10.4-W3` | WS-A, WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-05, SCH-06, SCH-10, REM-01, REM-02, REM-03, REM-04, RUL-06, DI-02, AUD-01, MIG-02, VER-05, VER-06, VER-07, VER-10, HOLD-01, HOLD-02, HOLD-07 |
| 675 | `BP-§10.4-W4` | WS-B, WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-11, PRIV-01, PRIV-02, SCH-02, SCH-03, SCH-04, SCH-10, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, MIG-02, VER-10, HOLD-01, HOLD-04, HOLD-07, HOLD-PAR |
| 676 | `BP-§10.4-W5` | WS-A, WS-C, WS-E, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, SEC-05, AUTHZ-03, PRIV-01, PRIV-02, PRIV-03, TZ-01, TZ-02, TZ-03, TZ-04, TZ-05, TZ-06, TZ-07, TZ-08, TZ-09, TZ-10, SCH-01, SCH-02, SCH-03, SCH-04, SCH-08, SCH-09, SCH-10, DI-01, DI-02, DI-03, DI-04, DI-06, DI-07, FIN-02, FIN-03, MIG-01, MIG-02, MIG-03, MIG-04, MIG-06, MIG-07, VER-02, VER-05, VER-07, VER-08, VER-09, VER-10, VER-LEG, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 677 | `BP-§10.4-W6` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 678 | `BP-§10.4-W7` | WS-C, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-08, AUTHZ-10, SCH-07, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, VER-04, VER-10, HOLD-01 |
| 679 | `BP-§10.4-W8` | WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, AUTHZ-10, AUTHZ-11, FIN-02, FIN-03, CFO-01, CFO-02, CFO-03, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-04, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 680 | `BP-§10.4-W9` | WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, PRIV-01, PRIV-02, RUL-01, RUL-02, RUL-04, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, CFO-05, AI-02, AI-04, MIG-02, VER-10, HOLD-01, HOLD-02, HOLD-04, HOLD-PAR |
| 681 | `BP-§10.4-E1` | WS-A, WS-F, WS-G, Cross-cutting, Gate | AUTHZ-10, REM-05, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-04, UX-01, VER-04, VER-10, HOLD-01, HOLD-02 |
| 682 | `BP-§10.4-E2` | WS-C, WS-E, Cross-cutting, Gate | SCH-02, SCH-03, SCH-04, SCH-10, DI-01, DI-02, DI-04, DI-06, DI-08, FIN-02, FIN-03, UX-01, VER-10, HOLD-01, HOLD-02, HOLD-03, HOLD-07, HOLD-PAR |
| 683 | `BP-§10.4-E3` | WS-F, WS-G, Cross-cutting, Gate | SEC-03, AUTHZ-01, AUTHZ-02, AUTHZ-04, AUTHZ-05, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, CFO-01, CFO-02, CFO-03, CFO-05, AI-02, AI-03, AI-04, UX-01, VER-04, VER-10, HOLD-01, HOLD-02 |
| 684 | `BP-§10.4-A1` | WS-A, WS-C, WS-D, WS-G, Cross-cutting, Gate | ARC-04, SEC-03, AUTHZ-01, TZ-01, TZ-04, TZ-07, TZ-09, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-05, REM-07, NTF-05, VER-07, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-07 |
| 685 | `BP-§10.4-A2` | WS-A, WS-B, WS-C, WS-D, WS-E, WS-G, Cross-cutting, Gate | ARC-04, SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-11, SCH-02, SCH-03, SCH-04, SCH-10, REM-03, REM-06, RUL-01, RUL-04, RUL-05, NTF-05, FIN-01, FIN-03, FIN-05, FIN-06, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-04, HOLD-07 |
| 686 | `BP-§10.4-B1` | WS-A, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-04, SEC-03, AUTHZ-01, AUTHZ-09, AUTHZ-10, AUTHZ-11, REM-05, FIN-01, FIN-02, FIN-03, FIN-04, FIN-06, CFO-05, AI-01, AI-02, AI-03, AI-04, AI-05, VER-10, NG-02, HOLD-01, HOLD-02, HOLD-03, HOLD-06 |
| 687 | `BP-§10.4-B2` | WS-B, WS-G, Cross-cutting, Gate | ARC-04, SEC-03, AUTHZ-01, AUTHZ-04, AUTHZ-08, AUTHZ-09, AUTHZ-10, AUTHZ-11, RUL-01, VER-01, VER-10, HOLD-01, HOLD-02 |
| 688 | `BP-§10.4-B3` | WS-A, WS-F, Cross-cutting, Gate | ARC-04, REM-08, CFO-02, CFO-03, VER-04, VER-10, HOLD-01, HOLD-02 |
| 689 | `BP-§10.4-X` | WS-F, Cross-cutting, Gate | ARC-04, CFO-07, UX-01, VER-10, HOLD-PAR |
| 690 | `BP-§6.2` | WS-A, WS-B, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, PRIV-01, PRIV-02, REM-01, RUL-01, RUL-02, RUL-05, FIN-01, FIN-03, FIN-05, CFO-03, MIG-02, HOLD-01, HOLD-04, HOLD-PAR |
| 691 | `BP-§6.5` | WS-A, WS-C, WS-G, Cross-cutting, Gate | ARC-01, SEC-01, SEC-02, SEC-04, TZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| 692 | `BP-§8` | WS-A, WS-D, Cross-cutting, Gate | ARC-04, REM-08, NTF-02, NTF-05, NG-02, HOLD-02, HOLD-08 |
| 693 | `BP-§11-4` | WS-A, WS-C, WS-E, WS-F, WS-G, Cross-cutting, Gate | SEC-01, SEC-02, SEC-03, SEC-04, AUTHZ-01, TZ-05, SCH-02, SCH-03, SCH-04, SCH-10, REM-01, REM-03, REM-07, FIN-01, FIN-03, FIN-04, MIG-02, HOLD-01, HOLD-02, HOLD-07 |
| 694 | `BP-§13` | WS-A, Cross-cutting, Gate | ARC-04, REM-04, UX-01, VER-11, HOLD-PAR |

Obligation IDs omit the `EC15-` prefix.

## 13. Workstream Row Counts

| Workstream | Obligations | Rows (through obligations) | Rows (accountable only) |
|---|---|---|---|
| WS-A | 9 | 265 | 0 |
| WS-B | 7 | 105 | 0 |
| WS-C | 23 | 349 | 0 |
| WS-D | 10 | 109 | 0 |
| WS-E | 12 | 432 | 0 |
| WS-F | 13 | 408 | 0 |
| WS-G | 26 | 613 | 13 |
| Cross-cutting | 35 | 684 | 0 |
| Gate | 12 | 652 | 0 |

Every one of the 694 rows is assigned to at least one workstream. 13 rows reach no builder workstream through their obligations; each carries package-level accountability (Engineering Contract Section 13.1). No row is assigned outside SB-P-1.15.

## 14. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. Nothing may be built from this prompt until the package is locked at Stage 13 **and** a separate Implementation Authorization is recorded; that authorization is currently **WITHHELD — IMPLEMENTATION NOT AUTHORIZED**.

## 15. Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-12 | Claude Code (SB-P-1.15-MC-86 §4) | Initial Stage 12 draft |
