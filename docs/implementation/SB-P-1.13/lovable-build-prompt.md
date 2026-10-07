# SB-P-1.13 — Lovable Build Prompt

```text
STATUS: DRAFT — MISSION CONTROL REVIEW REQUIRED
PRODUCT BLUEPRINT: APPROVED — LOCKED (UNCHANGED)
EIS: APPROVED — LOCKED (UNCHANGED)
IMPLEMENTATION PACKAGE: STAGE 12 DRAFT — NOT APPROVED, NOT LOCKED
IMPLEMENTATION: NOT AUTHORIZED
SCHEMA / SQL / MIGRATIONS: NOT AUTHORIZED
PROVIDER SELECTION / ACTIVATION: NOT AUTHORIZED
PRODUCTION MUTATION / DELIVERY: NOT AUTHORIZED
```

## 1. Document Metadata

| Field | Value |
|---|---|
| Mission ID | SB-P-1.13 |
| Mission Name | Native Conversation & AI Intelligence Foundation |
| Document | Builder Prompt (Source 18 Stage 12; package template Phase B) |
| Version | 0.1 |
| Status | `DRAFT — MISSION CONTROL REVIEW REQUIRED` |
| Author | Claude Code — initial implementation package owner |
| Builder identity | **Not yet named.** The Implementation Authorization names the builder for each workstream |
| Repository | `SmartBusinessv1/smart-business` |
| Canonical baseline | `main@654811df61fb59a0f0de35af7be2bc6614aae9ef` (Stage 11 EIS lock, PR #806) |
| Date | 2026-10-07 |

## 2. Builder Identity and Artifact Name

Source 18 Section 4.5 retains the artifact path `lovable-build-prompt.md` whatever builder is assigned. The builder is not named here. When the Implementation Authorization names a builder other than Lovable for a workstream, that builder's byline and identity are recorded on this artifact, and nothing here implies Lovable built work it did not. No actor may build from this prompt until the package is approved and locked at Stage 13 and an Implementation Authorization is recorded.

## 3. Read Before Building

Read, in this order, and treat each as binding:

1. `AGENTS.md` and `CLAUDE.md`;
2. the locked Product Blueprint, blob `bbf65429e3c1f18b9dacdda62e1c175d9eb395a1`;
3. the locked EIS, blob `9a1e723d4874011b6870a680f2a2080154537c30`;
4. Founder Product Decision Records `FPDR-1` to `FPDR-5`;
5. the SB-P-1.12 locked EIS Section 19.5 consumption conditions;
6. the Engineering Contract (`engineering-contract.md`) once locked;
7. this Build Prompt once locked;
8. the Verification Checklist (`verification-checklist.md`) once locked;
9. the Implementation Authorization and any migration mission for the workstream;
10. `docs/migration/README.md` before anything that touches `supabase/migrations/**`.

This prompt references the Engineering Contract and does not restate or alter its obligations. Where they differ, the Engineering Contract prevails, and the builder pauses (Section 10).

## 4. What This Prompt Does Not Authorize

This draft authorizes no build. It does not authorize code, schema, SQL, migrations, the transactions-family cut-over, Lovable execution or publication, AI or voice provider selection, purchase, configuration or activation, sending merchant data to a provider, secrets or environment changes, production mutation or delivery, or crossing any hold in Section 9.

## 5. Repository Scope and Paths

| Path | Treatment |
|---|---|
| `src/**`, `tests/**` | Candidate implementation paths. Writable only for the workstreams and paths the Implementation Authorization lists |
| `supabase/migrations/**` | Writable only under an explicit migration mission meeting `docs/migration/README.md`; never executed from file presence |
| `supabase/functions/**` | Not expected (EIS: server logic in TanStack Start server functions). Any change needs explicit authorization |
| `docs/implementation/SB-P-1.13/evidence/**` | Evidence only, created when an authorized stage produces evidence |
| `docs/implementation/SB-P-1.13/lovable-build-completion-report.md` | Builder Completion Report, at Stage 16 |
| `docs/phase-1-mission-blueprint/**` (locked Blueprint and EIS) | **Prohibited** |
| `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md` (FCTM) and `founder/**` | **Prohibited** |
| `.github/workflows/**`, branch protection, repository settings | **Prohibited** |
| `merge/active/**`, `AGENTS.md`, `CLAUDE.md`, governance sources | **Prohibited** |
| Secrets, environment files, credentials, provider consoles | **Prohibited**; never committed or printed |

## 6. Building Rules

- Work repository-first: inspect existing code, migrations and tests before changing anything, and reuse the patterns the EIS names (`requireSupabaseAuth`, the `create_inventory_movement` idempotency and outcome-lookup pattern without its `SECURITY INVOKER` mode, catalog-import file checks, SB-P-1.12 kernel surfaces).
- Build only the assigned FCTM rows of the authorized workstream, through the Engineering Contract obligations listed for them.
- No redesign, unrelated refactoring, duplicate code, dead code, workarounds, placeholders, bypasses or undocumented assumptions.
- No feature flag, test flag or environment switch that weakens a permission, isolation, confirmation or denial check.
- Every authority-bearing change ships with its Verification Checklist items: the named negative-path checks and runtime scenarios for its rows.
- Provider calls only through the gateway or voice adapter with a recorded provider configuration identity; tests use mocked or recorded providers; no live provider key in CI.
- Keep existing suites green at every checkpoint.
- Record evidence as package template Sections 12 and 13 require, and update the Builder Completion Report with a status per assigned row.
- Never verify, approve or accept your own work.

## 7. Workstreams

Workstreams are the Stage 1 draft register (WS-A to WS-G), fixed by Mission Control at Stage 13. Order follows Blueprint Section 20.4.1: P0 gates; P1 foundations without business data (WS-C gateway, WS-B, WS-E, WS-G failure and telemetry); P2 business-scoped Workspace (WS-A, WS-C authority propagation); P3 governed actions (WS-C); P4 Basic Voice (WS-D); P5 boundary and verification (WS-F, WS-G Scenario B, paired parity runs). Cross-cutting obligations apply to every builder workstream. Gate obligations are Mission Control gates, not builder work. Splitting into workstreams changes no mission assignment.

A row appears under every workstream whose obligations realize it. A workstream builds only its own obligations for that row.

### 7.1 SB-P-1.13/WS-A — Native Conversation Workspace

| Field | Value |
|---|---|
| Obligations | `EC13-WSP-01`, `EC13-WSP-02`, `EC13-WSP-03`, `EC13-WSP-04`, `EC13-WSP-05`, `EC13-WSP-06` |
| Phase | P2 |
| Depends on | `D12` active-business context and kernel (EIS13-HOLD-01); WS-C gateway |
| Expected schema | `conversation_threads`, `conversation_messages` (EIS13-MIG-01) |
| Verification | NP-01, NP-03, NP-05, NP-13, RS-05, RS-15, RS-16; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Additive: route and navigation entries removed; new tables kept or dropped only under a migration mission |
| FCTM rows (58) | `24-§25-4`, `24-§28-7`, `10-§4-1`, `10-§5-1`, `10-§5-3`, `10-§5-4`, `10-§5-6`, `10-§5-8`, `10-§5-9`, `10-§5-11`, `10-§6-1`, `10-§6-2`, `10-§6-3`, `10-§6-4`, `10-§6-5`, `10-§6-6`, `10-§6-7`, `10-§6-8`, `10-§6-9`, `10-§6-10`, `10-§6-11`, `10-§6-12`, `10-§6-13`, `10-§16-1`, `10-§16-2`, `10-§16-3`, `10-§16-4`, `10-§16-5`, `10-§16-6`, `10-§16-7`, `10-§16-8`, `10-§20-1`, `10-§20-2`, `10-§20-3`, `10-§20-4`, `10-§20-5`, `10-§20-6`, `22-§4-2`, `22-§7-2`, `22-§7-3`, `22-§7-5`, `22-§7-6`, `22-§7-8`, `22-§21`, `17-§5-1`, `17-§5-2`, `17-§5-3`, `17-§5-5`, `17-§5-6`, `17-§5-8`, `17-§22-4`, `17-§22-8`, `20-§15-3`, `BP-§8.3-1`, `BP-§10.2-W1`, `BP-§10.2-W3`, `BP-§10.2-E1`, `BP-§10.2-E4` |

Forbidden in this workstream, in addition to Section 8:

- sharing a thread beyond its actor, or any access by business membership alone (default deny);
- per-page `businesses.maybeSingle()` lookups or single-ownership business inference on SB-P-1.13 surfaces;
- a conversation store that holds Business Memory, documents, audit or pending confirmations;
- a retention period chosen in code (DC-12 stays an open policy dependency).

### 7.2 SB-P-1.13/WS-B — Language & Context

| Field | Value |
|---|---|
| Obligations | `EC13-LANG-01`, `EC13-LANG-02`, `EC13-LANG-03`, `EC13-LANG-04`, `EC13-LANG-05`, `EC13-LANG-06` |
| Phase | P1, P2 |
| Depends on | WS-C gateway; provider evidence for live evaluation (EIS13-PRV-01) |
| Expected schema | Language preference storage with the user profile, if a schema change is needed (migration mission) |
| Verification | NP-11, NP-12, RS-06, RS-13; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Additive; preference falls back to mixed-language understanding |
| FCTM rows (101) | `24-§6-3`, `24-§8-1`, `24-§8-2`, `24-§31-5`, `9-§3-1`, `9-§3-2`, `9-§3-3`, `9-§3-4`, `9-§3-5`, `9-§3-6`, `9-§3-7`, `9-§3-8`, `9-§3-9`, `9-§4-1`, `9-§4-2`, `9-§4-3`, `9-§4-4`, `9-§4-5`, `9-§5-1`, `9-§5-2`, `9-§6-1`, `9-§6-2`, `9-§7-1`, `9-§7-2`, `9-§7-3`, `9-§8-1`, `9-§8-2`, `9-§8-4`, `9-§9-1`, `9-§9-2`, `9-§9-3`, `9-§9-4`, `9-§9-5`, `9-§9-6`, `9-§9-7`, `9-§9-8`, `9-§10-1`, `9-§10-2`, `9-§10-3`, `9-§11-1`, `9-§11-2`, `9-§11-3`, `9-§11-4`, `9-§11-5`, `9-§11-6`, `9-§11-7`, `9-§12-4`, `9-§12-13`, `9-§13-1`, `9-§13-2`, `9-§13-3`, `9-§13-4`, `9-§13-5`, `9-§13-6`, `9-§13-7`, `9-§13-8`, `9-§13-11`, `9-§14-1`, `9-§14-2`, `9-§14-3`, `9-§14-4`, `9-§14-5`, `9-§14-6`, `9-§14-7`, `9-§14-8`, `9-§15-1`, `9-§15-2`, `9-§15-3`, `9-§15-4`, `9-§15-5`, `9-§16-1`, `9-§16-2`, `9-§16-3`, `9-§16-4`, `9-§17-1`, `9-§17-2`, `9-§17-3`, `9-§17-4`, `9-§17-8`, `9-§17-10`, `10-§12-1`, `10-§12-2`, `10-§12-3`, `10-§17-1`, `10-§17-2`, `10-§17-3`, `10-§17-6`, `10-§17-7`, `22-§8-1`, `22-§8-2`, `22-§8-3`, `22-§8-4`, `22-§8-5`, `22-§8-6`, `22-§8-7`, `20-§14-1`, `20-§14-2`, `20-§14-3`, `20-§14-4`, `BP-§10.2-W2`, `BP-§10.2-E2` |

Forbidden in this workstream, in addition to Section 8:

- a feature-specific dictionary as the sole language mechanism, or an English-only or literal-translation path;
- a consequential write from ambiguous input or a silent identity merge;
- treating a corpus size or confidence threshold as Product Truth.

### 7.3 SB-P-1.13/WS-C — AI Orchestration & Governed Tool Kernel

| Field | Value |
|---|---|
| Obligations | `EC13-ARC-01`, `EC13-ARC-02`, `EC13-ARC-03`, `EC13-AUTH-01`, `EC13-AUTH-02`, `EC13-AUTH-03`, `EC13-AUTH-04`, `EC13-AUTH-05`, `EC13-GW-01`, `EC13-GW-02`, `EC13-GW-03`, `EC13-GW-04`, `EC13-GW-05`, `EC13-CTX-01`, `EC13-CTX-02`, `EC13-CTX-03`, `EC13-TOOL-01`, `EC13-TOOL-02`, `EC13-CNF-01`, `EC13-CNF-02`, `EC13-CNF-03`, `EC13-CMD-01`, `EC13-CMD-02`, `EC13-CMD-03`, `EC13-IDM-01`, `EC13-IDM-02`, `EC13-AUD-01`, `EC13-TEL-02`, `EC13-ENV-01` |
| Phase | P1, P2, P3 |
| Depends on | `D12` (EIS13-HOLD-01); `DTX` cut-over (EIS13-HOLD-02); provider evidence (EIS13-PRV-01) |
| Expected schema | `ai_tool_proposals`, `create_transaction_governed` with idempotency and outcome records (EIS13-MIG-01; Section 13 cut-over) |
| Verification | NP-01, NP-02, NP-03, NP-04, NP-05, NP-06, NP-07, NP-08, NP-09, NP-10, NP-12, NP-15, NP-16, NP-17, NP-18, NP-19, NP-20, NP-21, NP-22, NP-23, NP-24, NP-26, RS-01, RS-02, RS-04, RS-06, RS-09, RS-10, RS-14, RS-15, RS-18, RS-19; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Kill switch disables AI; transactions-family rollback follows the SB-P-1.12 per-family revert pattern and restores one path, never both |
| FCTM rows (230) | `24-§4-1`, `24-§5-1`, `24-§5-3`, `24-§5-7`, `24-§5-8`, `24-§6-1`, `24-§6-2`, `24-§7-1`, `24-§7-5`, `24-§8-3`, `24-§9-1`, `24-§9-2`, `24-§9-3`, `24-§9-4`, `24-§10-1`, `24-§10-2`, `24-§10-3`, `24-§10-4`, `24-§10-5`, `24-§10-6`, `24-§10-7`, `24-§10-8`, `24-§10-9`, `24-§10-10`, `24-§10-11`, `24-§11-1`, `24-§11-2`, `24-§11-3`, `24-§11-4`, `24-§11-5`, `24-§11-6`, `24-§11-7`, `24-§11-8`, `24-§11-9`, `24-§11-10`, `24-§13-2`, `24-§19-1`, `24-§19-2`, `24-§19-3`, `24-§19-4`, `24-§20-1`, `24-§20-2`, `24-§20-3`, `24-§20-4`, `24-§20-5`, `24-§20-6`, `24-§20-7`, `24-§20-8`, `24-§20-9`, `24-§20-10`, `24-§21-1`, `24-§21-2`, `24-§21-8`, `24-§21-9`, `24-§21-10`, `24-§22-1`, `24-§22-2`, `24-§22-3`, `24-§22-4`, `24-§22-5`, `24-§22-6`, `24-§22-7`, `24-§22-8`, `24-§23-8`, `24-§23-9`, `24-§23-12`, `24-§23-14`, `24-§23-18`, `24-§24-1`, `24-§24-2`, `24-§24-3`, `24-§24-4`, `24-§24-5`, `24-§24-6`, `24-§24-7`, `24-§24-8`, `24-§24-9`, `24-§24-10`, `24-§25-1`, `24-§25-2`, `24-§25-3`, `24-§25-5`, `24-§25-6`, `24-§25-7`, `24-§25-8`, `24-§25-9`, `24-§26-1`, `24-§26-2`, `24-§26-3`, `24-§26-4`, `24-§26-5`, `24-§26-6`, `24-§26-7`, `24-§26-8`, `24-§26-9`, `24-§26-10`, `24-§27-2`, `24-§27-6`, `24-§27-7`, `24-§27-8`, `24-§27-9`, `24-§27-10`, `24-§27-11`, `24-§28-1`, `24-§28-2`, `24-§28-3`, `24-§28-4`, `24-§28-5`, `24-§28-6`, `24-§28-8`, `24-§28-9`, `24-§28-10`, `24-§28-11`, `24-§28-12`, `24-§29-1`, `24-§29-2`, `24-§29-3`, `24-§29-4`, `24-§29-5`, `24-§29-6`, `24-§31-1`, `24-§31-3`, `24-§31-4`, `24-§31-6`, `24-§31-7`, `24-§31-11`, `24-§31-13`, `24-§31-14`, `24-§31-15`, `24-§31-16`, `9-§9-4`, `9-§13-9`, `9-§13-10`, `9-§17-1`, `9-§17-9`, `9-§19`, `10-§7-2`, `10-§7-3`, `10-§7-4`, `10-§7-5`, `10-§7-6`, `10-§8-1`, `10-§8-2`, `10-§8-3`, `10-§8-4`, `10-§9-3`, `10-§11-2`, `10-§13-1`, `10-§13-2`, `10-§13-8`, `10-§13-9`, `10-§13-10`, `10-§13-11`, `10-§13-12`, `10-§15-1`, `10-§15-2`, `10-§15-3`, `10-§15-4`, `10-§15-5`, `10-§15-6`, `10-§15-7`, `10-§17-8`, `10-§17-9`, `10-§18-7`, `10-§19-1`, `10-§19-2`, `10-§19-3`, `10-§19-4`, `10-§19-5`, `10-§19-6`, `10-§19-7`, `10-§23-1`, `10-§23-5`, `10-§23-8`, `10-§23-9`, `10-§23-10`, `12-§4-1`, `12-§7-5`, `12-§7-6`, `12-§17-8`, `12-§21-1`, `12-§21-9`, `8-§7-11`, `22-§7-1`, `22-§7-4`, `22-§7-7`, `22-§7-9`, `22-§7-10`, `22-§17`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§24-1`, `22-§24-2`, `22-§24-3`, `22-§29-1`, `22-§29-2`, `22-§29-3`, `22-§29-7`, `22-§29-8`, `22-§29-12`, `17-§5-4`, `17-§5-7`, `7-§11-2`, `BP-§6.2-1`, `BP-§6.2-2`, `BP-§6.4-1`, `BP-§6.4-2`, `BP-§6.4-3`, `BP-§6.4-4`, `BP-§6.4-5`, `BP-§6.4-6`, `BP-§6.4-7`, `BP-§6.4-8`, `BP-§6.4-9`, `BP-§6.4-10`, `BP-§6.6-1`, `BP-§8.4-1`, `BP-§8.4-3`, `BP-§10.2-W5`, `BP-§10.2-W6`, `BP-§10.2-W7`, `BP-§10.2-W8`, `BP-§10.2-W9`, `BP-§10.2-W10`, `BP-§10.2-E3`, `BP-§10.2-SA1`, `BP-§10.2-SA2`, `BP-§11-1` |

Forbidden in this workstream, in addition to Section 8:

- any authority table, single-ownership lookup or temporary parallel authorization (SB-P-1.12 EIS §19.5);
- raw `transactions.insert` reachable from AI or Voice, or a second live transaction write path;
- authority fields in tool schemas or taken from model output;
- `service_role` for business data or model context;
- a standing-automation or delegated-execution path that skips per-turn confirmation;
- customer-credit balance, owed state, repayment allocation or four-state Ledger state;
- executing an intent owned by SB-P-1.14 to SB-P-1.20.

### 7.4 SB-P-1.13/WS-D — Basic Voice

| Field | Value |
|---|---|
| Obligations | `EC13-VOI-01`, `EC13-VOI-02`, `EC13-VOI-03`, `EC13-VOI-04`, `EC13-VOI-05`, `EC13-VOI-06`, `EC13-VOI-07`, `EC13-VOI-08`, `EC13-VOI-09`, `EC13-VOI-10`, `EC13-SNS-01` |
| Phase | P4, P5 |
| Depends on | `DV` voice provider gate (EIS13-PRV-01); WS-C governed path; SB-P-1.14 for `FPDR-2` portions |
| Expected schema | Transcript and structured-result records; no audio (EIS13-MIG-01) |
| Verification | NP-16, NP-18, NP-23, NP-29, NP-30, NP-31, NP-32, NP-33, NP-34, RS-04, RS-11, RS-12, RS-14, RS-17; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Voice kill switch; text path stays usable |
| FCTM rows (108) | `24-§5-5`, `24-§7-2`, `24-§15-1`, `24-§15-2`, `24-§15-3`, `24-§15-4`, `24-§15-5`, `24-§15-6`, `24-§15-7`, `24-§15-8`, `24-§27-4`, `24-§31-2`, `10-§4-2`, `10-§5-2`, `10-§11-1`, `10-§11-2`, `10-§11-3`, `10-§11-5`, `10-§11-6`, `10-§11-7`, `10-§11-8`, `10-§23-2`, `12-§3-1`, `12-§4-1`, `12-§4-6`, `12-§4-7`, `12-§4-8`, `12-§4-9`, `12-§6-1`, `12-§6-2`, `12-§6-3`, `12-§6-4`, `12-§6-5`, `12-§6-6`, `12-§7-1`, `12-§7-2`, `12-§7-3`, `12-§7-4`, `12-§7-5`, `12-§7-6`, `12-§7-8`, `12-§7-9`, `12-§7-10`, `12-§8-1`, `12-§8-2`, `12-§8-3`, `12-§8-5`, `12-§9-1`, `12-§9-2`, `12-§9-3`, `12-§11-1`, `12-§11-2`, `12-§11-3`, `12-§11-4`, `12-§11-5`, `12-§11-7`, `12-§11-8`, `12-§11-9`, `12-§13-3`, `12-§14-1`, `12-§14-2`, `12-§14-3`, `12-§14-4`, `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§15-4`, `12-§15-5`, `12-§16-1`, `12-§16-2`, `12-§16-3`, `12-§16-4`, `12-§16-5`, `12-§16-6`, `12-§16-7`, `12-§16-8`, `12-§17-1`, `12-§17-2`, `12-§17-3`, `12-§17-4`, `12-§17-5`, `12-§17-6`, `12-§17-7`, `12-§17-9`, `12-§17-10`, `12-§17-11`, `12-§17-12`, `12-§17-13`, `12-§17-14`, `12-§17-15`, `12-§18-1`, `12-§18-2`, `12-§18-3`, `12-§20-1`, `12-§20-2`, `12-§20-3`, `12-§20-4`, `12-§20-5`, `12-§20-6`, `12-§21-1`, `12-§21-2`, `12-§21-7`, `12-§21-8`, `12-§21-10`, `12-§21-12`, `BP-§5.4-1`, `BP-§10.2-W4`, `BP-§10.2-I1` |

Forbidden in this workstream, in addition to Section 8:

- storing raw audio in any of the nine EIS13-VOI-02 layers;
- ambient listening, speaker or bystander inference, location or any new sensing;
- executing from partial, interim or background speech, or accepting spoken confirmation outside an armed capture;
- gating Basic Voice behind Voice Plus, or building Voice Plus;
- selecting, purchasing or activating a voice provider.

### 7.5 SB-P-1.13/WS-E — FAQ-first Support Foundation

| Field | Value |
|---|---|
| Obligations | `EC13-FAQ-01`, `EC13-FAQ-02`, `EC13-FAQ-03`, `EC13-FAQ-04` |
| Phase | P1 |
| Depends on | WS-C gateway for AI explanation only |
| Expected schema | `support_faq_entries` (no business data) |
| Verification | NP-27, NP-28, RS-07; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Additive; support path disabled without affecting operations |
| FCTM rows (58) | `24-§17-1`, `24-§17-2`, `24-§17-4`, `24-§17-5`, `9-§12-10`, `9-§17-7`, `8-§3-1`, `8-§3-2`, `8-§3-3`, `8-§3-4`, `8-§3-5`, `8-§3-8`, `8-§4-1`, `8-§5-1`, `8-§5-2`, `8-§5-3`, `8-§6-1`, `8-§6-2`, `8-§6-3`, `8-§6-4`, `8-§6-5`, `8-§7-1`, `8-§7-2`, `8-§7-3`, `8-§7-6`, `8-§7-7`, `8-§7-8`, `8-§7-9`, `8-§7-10`, `8-§7-12`, `8-§11-1`, `8-§11-2`, `8-§11-4`, `8-§11-5`, `8-§12-1`, `8-§12-5`, `8-§13-1`, `8-§15-1`, `8-§15-2`, `8-§15-3`, `8-§15-4`, `8-§15-6`, `8-§15-7`, `8-§15-10`, `8-§15-11`, `8-§16-1`, `8-§16-2`, `8-§16-3`, `8-§16-4`, `8-§16-5`, `8-§16-9`, `8-§17-2`, `8-§17-3`, `8-§17-4`, `8-§17-6`, `BP-§10.2-W12`, `BP-§12-1`, `BP-§12-3` |

Forbidden in this workstream, in addition to Section 8:

- human support escalation handling, onboarding or mature support (SB-P-1.19);
- business data in `support_faq_entries`;
- answers that invent policy, grant permission or claim account actions.

### 7.6 SB-P-1.13/WS-F — Attachment Handoff Boundary

| Field | Value |
|---|---|
| Obligations | `EC13-ATT-01` |
| Phase | P5 |
| Depends on | WS-A; transient-mechanism evidence (EIS13-ATT-01); SB-P-1.14 UDI contract |
| Expected schema | None; no storage bucket |
| Verification | NP-35, NP-36, RS-08; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Intake stays held if a safe transient mechanism cannot be shown |
| FCTM rows (11) | `10-§4-3`, `10-§4-4`, `10-§4-5`, `10-§4-6`, `10-§4-7`, `10-§4-8`, `10-§10-2`, `10-§10-6`, `10-§10-8`, `10-§23-3a`, `BP-§10.2-W11` |

Forbidden in this workstream, in addition to Section 8:

- a storage bucket, durable attachment store, OCR, extraction or UDI interpretation (SB-P-1.14);
- any staging class other than in-request server memory;
- any consequential update from attachment content.

### 7.7 SB-P-1.13/WS-G — Failure, Observability & Provider Independence

| Field | Value |
|---|---|
| Obligations | `EC13-TEL-01`, `EC13-FAIL-01`, `EC13-FAIL-02`, `EC13-FAIL-03`, `EC13-PRV-01`, `EC13-PRV-02` |
| Phase | P0, P1, P2, P5 |
| Depends on | WS-C; provider evidence pack |
| Expected schema | Aggregate telemetry (EIS13-MIG-01) |
| Verification | NP-16, NP-25, NP-37, NP-38, NP-39, RS-03, RS-09; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Kill switch; telemetry sink removable without content loss |
| FCTM rows (381) | `24-§4-1`, `24-§4-2`, `24-§4-3`, `24-§4-4`, `24-§4-5`, `24-§4-6`, `24-§4-7`, `24-§4-8`, `24-§5-1`, `24-§5-3`, `24-§5-5`, `24-§6-1`, `24-§6-2`, `24-§6-3`, `24-§7-1`, `24-§7-2`, `24-§7-5`, `24-§8-1`, `24-§8-2`, `24-§8-3`, `24-§9-1`, `24-§11-1`, `24-§11-2`, `24-§11-3`, `24-§11-4`, `24-§11-5`, `24-§11-6`, `24-§11-7`, `24-§11-8`, `24-§11-9`, `24-§15-1`, `24-§15-2`, `24-§15-3`, `24-§15-4`, `24-§15-5`, `24-§15-6`, `24-§15-7`, `24-§15-8`, `24-§17-1`, `24-§17-2`, `24-§17-4`, `24-§19-1`, `24-§19-2`, `24-§19-3`, `24-§19-4`, `24-§20-1`, `24-§20-2`, `24-§20-3`, `24-§20-4`, `24-§20-5`, `24-§20-6`, `24-§20-7`, `24-§20-8`, `24-§20-9`, `24-§20-10`, `24-§22-1`, `24-§22-2`, `24-§22-3`, `24-§22-4`, `24-§22-5`, `24-§22-6`, `24-§22-7`, `24-§22-8`, `24-§23-1`, `24-§23-2`, `24-§23-3`, `24-§23-4`, `24-§23-5`, `24-§23-7`, `24-§23-8`, `24-§23-9`, `24-§23-10`, `24-§23-11`, `24-§23-12`, `24-§23-13`, `24-§23-14`, `24-§23-15`, `24-§23-16`, `24-§23-17`, `24-§23-18`, `24-§24-10`, `24-§25-1`, `24-§25-2`, `24-§25-3`, `24-§25-4`, `24-§25-5`, `24-§25-6`, `24-§25-7`, `24-§25-8`, `24-§26-1`, `24-§26-2`, `24-§26-3`, `24-§26-4`, `24-§26-5`, `24-§26-6`, `24-§26-7`, `24-§26-8`, `24-§26-9`, `24-§27-2`, `24-§27-4`, `24-§27-6`, `24-§27-7`, `24-§27-8`, `24-§27-9`, `24-§27-10`, `24-§27-11`, `24-§28-1`, `24-§28-2`, `24-§28-3`, `24-§28-4`, `24-§28-5`, `24-§28-6`, `24-§28-7`, `24-§28-8`, `24-§28-9`, `24-§28-10`, `24-§28-11`, `24-§28-12`, `24-§29-1`, `24-§29-2`, `24-§29-3`, `24-§29-4`, `24-§29-5`, `24-§29-6`, `24-§31-1`, `24-§31-2`, `24-§31-3`, `24-§31-4`, `24-§31-5`, `24-§31-6`, `24-§31-7`, `24-§31-11`, `24-§31-12`, `24-§31-14`, `24-§31-16`, `9-§3-1`, `9-§3-2`, `9-§3-3`, `9-§3-4`, `9-§3-5`, `9-§3-6`, `9-§3-7`, `9-§3-8`, `9-§3-9`, `9-§5-1`, `9-§5-2`, `9-§6-1`, `9-§6-2`, `9-§7-1`, `9-§7-2`, `9-§7-3`, `9-§8-1`, `9-§8-2`, `9-§8-4`, `9-§9-1`, `9-§9-2`, `9-§9-3`, `9-§9-4`, `9-§9-5`, `9-§9-6`, `9-§9-7`, `9-§9-8`, `9-§10-3`, `9-§11-1`, `9-§11-2`, `9-§11-3`, `9-§11-4`, `9-§11-5`, `9-§11-6`, `9-§11-7`, `9-§12-4`, `9-§12-10`, `9-§13-1`, `9-§13-2`, `9-§13-3`, `9-§13-4`, `9-§13-5`, `9-§13-6`, `9-§13-7`, `9-§13-8`, `9-§13-11`, `9-§14-1`, `9-§14-2`, `9-§14-3`, `9-§14-4`, `9-§14-5`, `9-§14-6`, `9-§14-7`, `9-§14-8`, `9-§15-2`, `9-§15-3`, `9-§15-4`, `9-§16-1`, `9-§16-2`, `9-§16-3`, `9-§16-4`, `9-§17-1`, `9-§17-2`, `9-§17-3`, `9-§17-4`, `9-§17-7`, `9-§17-8`, `9-§17-10`, `10-§4-1`, `10-§4-2`, `10-§5-2`, `10-§5-11`, `10-§11-1`, `10-§11-2`, `10-§11-3`, `10-§11-5`, `10-§11-6`, `10-§11-7`, `10-§11-8`, `10-§12-1`, `10-§12-2`, `10-§12-3`, `10-§14-1`, `10-§17-1`, `10-§17-2`, `10-§17-3`, `10-§17-6`, `10-§17-7`, `10-§18-1`, `10-§18-2`, `10-§18-3`, `10-§18-4`, `10-§18-5`, `10-§18-6`, `10-§18-8`, `10-§18-9`, `10-§18-10`, `10-§18-12`, `10-§18-13`, `10-§19-4`, `10-§20-1`, `10-§23-1`, `10-§23-2`, `10-§23-5`, `10-§23-7`, `12-§3-1`, `12-§4-1`, `12-§4-6`, `12-§4-7`, `12-§4-8`, `12-§4-9`, `12-§6-1`, `12-§6-2`, `12-§6-3`, `12-§6-4`, `12-§6-5`, `12-§6-6`, `12-§7-1`, `12-§7-2`, `12-§7-3`, `12-§7-4`, `12-§7-5`, `12-§7-6`, `12-§7-8`, `12-§7-9`, `12-§7-10`, `12-§8-1`, `12-§8-2`, `12-§8-3`, `12-§8-5`, `12-§9-1`, `12-§9-2`, `12-§9-3`, `12-§11-1`, `12-§11-2`, `12-§11-3`, `12-§11-4`, `12-§11-5`, `12-§11-7`, `12-§11-8`, `12-§11-9`, `12-§13-3`, `12-§14-1`, `12-§14-2`, `12-§14-3`, `12-§14-4`, `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§15-4`, `12-§15-5`, `12-§16-1`, `12-§16-2`, `12-§16-3`, `12-§16-4`, `12-§16-5`, `12-§16-6`, `12-§16-7`, `12-§16-8`, `12-§17-1`, `12-§17-2`, `12-§17-3`, `12-§17-4`, `12-§17-5`, `12-§17-6`, `12-§17-7`, `12-§17-8`, `12-§17-9`, `12-§17-10`, `12-§17-11`, `12-§17-12`, `12-§17-13`, `12-§17-14`, `12-§17-15`, `12-§18-1`, `12-§18-2`, `12-§18-3`, `12-§20-1`, `12-§20-2`, `12-§20-3`, `12-§20-4`, `12-§20-5`, `12-§20-6`, `12-§21-1`, `12-§21-2`, `12-§21-7`, `12-§21-8`, `12-§21-9`, `12-§21-10`, `12-§21-12`, `8-§3-5`, `8-§5-1`, `8-§5-2`, `8-§5-3`, `8-§7-1`, `8-§7-2`, `8-§7-3`, `8-§7-6`, `8-§15-4`, `8-§16-2`, `8-§16-3`, `8-§16-5`, `22-§7-1`, `22-§7-4`, `22-§7-10`, `22-§8-1`, `22-§8-3`, `22-§8-4`, `22-§8-5`, `22-§8-6`, `22-§8-7`, `22-§17`, `22-§19-1`, `22-§19-2`, `22-§19-3`, `22-§19-4`, `22-§19-5`, `22-§19-6`, `22-§19-7`, `22-§21`, `22-§24-1`, `22-§29-2`, `22-§29-10`, `22-§29-13`, `17-§5-6`, `20-§14-1`, `20-§14-2`, `20-§14-3`, `20-§14-4`, `BP-§5.4-1`, `BP-§6.4-3`, `BP-§6.4-4`, `BP-§6.4-5`, `BP-§6.4-6`, `BP-§6.4-9`, `BP-§8.4-2`, `BP-§10.2-W4`, `BP-§10.2-W5`, `BP-§10.2-W13`, `BP-§10.2-I1`, `BP-§10.2-E1`, `BP-§10.2-E2`, `BP-§10.2-E5`, `BP-§10.2-SA1`, `BP-§10.2-SA2`, `BP-§10.2-SB` |

340 of these rows enter WS-G only through the provider gate and kill switch (`EC13-PRV-01`, `EC13-PRV-02`); for them WS-G builds no feature behaviour (Engineering Contract PQ-6).

Forbidden in this workstream, in addition to Section 8:

- a raw-audio, transcript or prompt archive kept for telemetry;
- a WhatsApp or Meta adapter (SB-P-1.20);
- automatic replay of a consequential command on provider restoration.

### 7.8 Cross-cutting — Governance and verification applying to every builder workstream

| Field | Value |
|---|---|
| Obligations | `EC13-MIG-01`, `EC13-MIG-02`, `EC13-VER-01`, `EC13-VER-02`, `EC13-NG-01`, `EC13-DOC-01` |
| Phase | All |
| Depends on | — |
| Expected schema | Design only (`EC13-MIG-01`, `EC13-MIG-02`) |
| Verification | NP-14, NP-40, RS-01, RS-02, RS-03, RS-04, RS-20; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Not applicable |
| FCTM rows (53) | `24-§4-2`, `24-§4-3`, `24-§4-4`, `24-§4-5`, `24-§4-6`, `24-§4-7`, `24-§4-8`, `24-§30-1`, `24-§30-2`, `24-§30-3`, `24-§30-4`, `24-§30-5`, `24-§30-6`, `24-§30-7`, `24-§30-8`, `9-§18-1`, `9-§18-2`, `9-§18-3`, `9-§18-4`, `9-§18-5`, `9-§18-6`, `9-§18-7`, `10-§22-1`, `10-§22-2`, `10-§22-3`, `10-§22-4`, `10-§22-5`, `10-§22-6`, `22-§22-1`, `22-§22-2`, `22-§22-3`, `22-§22-4`, `22-§22-5`, `22-§22-6`, `22-§27-1`, `22-§27-2`, `22-§27-3`, `22-§27-4`, `22-§27-5`, `22-§27-6`, `22-§27-7`, `22-§28-1`, `22-§28-2`, `22-§28-3`, `22-§28-4`, `22-§28-5`, `22-§28-6`, `22-§28-7`, `22-§28-8`, `22-§28-9`, `22-§28-10`, `22-§29-14`, `BP-§13-1` |

### 7.9 Gates — Mission Control holds; not a builder workstream

| Field | Value |
|---|---|
| Obligations | `EC13-HOLD-01`, `EC13-HOLD-02`, `EC13-HOLD-03` |
| Phase | P0, P3 |
| Depends on | Mission Control dependency evidence |
| Expected schema | None |
| Verification | NP-09, NP-22; row items in Verification Checklist Section 13.4 |
| Rollback and recovery | Not applicable |
| FCTM rows (269) | `24-§5-1`, `24-§5-3`, `24-§6-2`, `24-§7-5`, `24-§9-1`, `24-§9-2`, `24-§9-3`, `24-§10-1`, `24-§10-2`, `24-§10-3`, `24-§10-4`, `24-§10-5`, `24-§10-6`, `24-§10-7`, `24-§10-8`, `24-§10-9`, `24-§10-10`, `24-§10-11`, `24-§11-1`, `24-§11-2`, `24-§11-3`, `24-§11-4`, `24-§11-5`, `24-§11-6`, `24-§11-7`, `24-§11-8`, `24-§11-9`, `24-§11-10`, `24-§15-5`, `24-§17-5`, `24-§20-5`, `24-§20-6`, `24-§20-8`, `24-§20-9`, `24-§21-1`, `24-§21-2`, `24-§21-8`, `24-§21-9`, `24-§21-10`, `24-§22-8`, `24-§23-9`, `24-§23-10`, `24-§23-18`, `24-§24-1`, `24-§24-2`, `24-§24-3`, `24-§24-4`, `24-§24-5`, `24-§24-6`, `24-§24-7`, `24-§24-8`, `24-§24-9`, `24-§25-1`, `24-§25-2`, `24-§25-3`, `24-§25-5`, `24-§26-6`, `24-§27-7`, `24-§27-8`, `24-§27-10`, `24-§28-5`, `24-§28-6`, `24-§28-7`, `24-§28-8`, `24-§28-12`, `24-§29-4`, `24-§29-5`, `24-§31-1`, `24-§31-2`, `24-§31-3`, `24-§31-4`, `24-§31-7`, `24-§31-11`, `24-§31-13`, `24-§31-15`, `9-§4-1`, `9-§8-2`, `9-§9-2`, `9-§9-5`, `9-§9-6`, `9-§10-1`, `9-§10-2`, `9-§10-3`, `9-§11-7`, `9-§13-9`, `9-§13-10`, `9-§16-4`, `9-§17-1`, `9-§17-3`, `9-§17-9`, `9-§17-10`, `9-§19`, `10-§4-3`, `10-§4-4`, `10-§4-5`, `10-§4-6`, `10-§4-7`, `10-§4-8`, `10-§5-8`, `10-§5-9`, `10-§6-1`, `10-§6-2`, `10-§6-3`, `10-§6-4`, `10-§6-5`, `10-§6-6`, `10-§6-7`, `10-§6-8`, `10-§6-9`, `10-§6-10`, `10-§6-11`, `10-§6-12`, `10-§7-2`, `10-§7-3`, `10-§7-4`, `10-§7-5`, `10-§7-6`, `10-§8-1`, `10-§8-2`, `10-§8-3`, `10-§8-4`, `10-§9-3`, `10-§10-2`, `10-§10-6`, `10-§11-1`, `10-§11-2`, `10-§11-5`, `10-§13-1`, `10-§13-2`, `10-§13-8`, `10-§13-9`, `10-§13-10`, `10-§13-11`, `10-§13-12`, `10-§14-1`, `10-§15-1`, `10-§15-2`, `10-§15-3`, `10-§15-4`, `10-§15-5`, `10-§15-6`, `10-§15-7`, `10-§16-2`, `10-§16-3`, `10-§16-4`, `10-§16-5`, `10-§16-6`, `10-§16-7`, `10-§17-2`, `10-§17-6`, `10-§17-7`, `10-§17-8`, `10-§17-9`, `10-§18-1`, `10-§18-6`, `10-§18-7`, `10-§18-8`, `10-§19-1`, `10-§19-2`, `10-§19-3`, `10-§19-4`, `10-§19-5`, `10-§19-6`, `10-§19-7`, `10-§20-5`, `10-§23-1`, `10-§23-2`, `10-§23-3a`, `10-§23-5`, `10-§23-7`, `10-§23-8`, `10-§23-9`, `10-§23-10`, `12-§4-1`, `12-§4-7`, `12-§4-8`, `12-§6-1`, `12-§6-6`, `12-§7-3`, `12-§7-6`, `12-§7-8`, `12-§11-2`, `12-§11-3`, `12-§11-4`, `12-§11-5`, `12-§11-7`, `12-§11-8`, `12-§14-1`, `12-§14-2`, `12-§14-3`, `12-§14-4`, `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§15-4`, `12-§15-5`, `12-§16-1`, `12-§16-2`, `12-§16-3`, `12-§16-4`, `12-§16-5`, `12-§16-6`, `12-§16-7`, `12-§16-8`, `12-§17-7`, `12-§17-8`, `12-§18-3`, `12-§21-1`, `12-§21-8`, `12-§21-9`, `12-§21-12`, `8-§7-9`, `8-§7-10`, `8-§15-11`, `22-§7-2`, `22-§7-3`, `22-§7-5`, `22-§7-6`, `22-§7-7`, `22-§7-8`, `22-§22-2`, `22-§23-2`, `22-§23-3`, `22-§23-5`, `22-§23-7`, `22-§24-1`, `22-§24-2`, `22-§24-3`, `22-§29-1`, `22-§29-2`, `22-§29-3`, `22-§29-7`, `22-§29-8`, `22-§29-12`, `22-§29-13`, `17-§5-3`, `17-§5-4`, `17-§5-5`, `17-§5-7`, `17-§5-8`, `17-§22-4`, `20-§14-1`, `7-§11-2`, `BP-§6.2-1`, `BP-§6.2-2`, `BP-§6.4-1`, `BP-§6.4-2`, `BP-§6.4-4`, `BP-§6.4-6`, `BP-§6.4-7`, `BP-§6.4-8`, `BP-§6.4-9`, `BP-§6.4-10`, `BP-§8.4-2`, `BP-§10.2-W1`, `BP-§10.2-W3`, `BP-§10.2-W4`, `BP-§10.2-W6`, `BP-§10.2-W7`, `BP-§10.2-W8`, `BP-§10.2-W9`, `BP-§10.2-W10`, `BP-§10.2-W11`, `BP-§10.2-E1`, `BP-§10.2-E3`, `BP-§10.2-E5`, `BP-§10.2-SA1`, `BP-§10.2-SA2`, `BP-§10.2-SB` |

No builder builds anything for a gate. A gate is satisfied only by Mission Control acceptance of the named evidence.

## 8. Behaviour Outside the Assigned Rows Is Forbidden

A workstream builds nothing that no assigned row requires. In particular, no workstream builds:

- any row that is `ASSIGNED TO LATER MISSION` (126), `DELEGATED` (121), `NOT APPLICABLE` (52), `OUT OF BUILD SCOPE` (21) or `UNRESOLVED FOUNDER DECISION` (3) in the FCTM (Blueprint Section 11; Engineering Contract Section 5.3);
- the four-state Ledger, customer-credit balance, owed state, repayment allocation, UDI, OCR or durable media storage (SB-P-1.14);
- Ask CFO, the Reminder Engine, Daily Intelligence or the Notification Foundation (SB-P-1.15), or SB-P-1.16 to SB-P-1.18 domain behaviour;
- Voice Plus, mature support, human support escalation handling or onboarding (SB-P-1.19);
- a WhatsApp or Meta adapter, or second-channel behaviour (SB-P-1.20);
- authority tables, a single-ownership business lookup, a temporary parallel permission system or any SB-P-1.12 surface;
- a standing-automation or delegated-execution path, ambient listening, bystander or location sensing;
- a new merchant-facing feature, retention period, consent policy, commercial classification or pricing;
- any experience beyond Blueprint Section 9 and the Section 15 acceptance lines.

Anything a builder believes is needed but not assigned is raised under Section 10, never built.

## 9. Holds the Builder Must Not Cross

| Hold or gate | Status carried by this package | Effect |
|---|---|---|
| `D12` / H-D12 | 252 rows; SPECIFICATION AVAILABLE, IMPLEMENTATION NOT COMPLETE, EVIDENCE NOT COMPLETE | `EC13-HOLD-01`: no obligation mapped to a `D12` row is built until the SB-P-1.12 workstreams it consumes are implemented, verified and accepted for SB-P-1.13 (SB-P-1.12 EIS §19.5). No authority table, single-ownership lookup or temporary parallel authorization |
| `DTX` / H-DTX | 17 rows; held | `EC13-HOLD-02`: satisfiable only after EIS Section 13 cut-over step 8. `EC13-CMD-02` is delivered with the SB-P-1.12 WS-A3 transactions-family package under a separate migration mission |
| Provider evidence / H-PROV | 367 rows (`DAI` or `DV`) | `EC13-PRV-01`: no merchant data reaches an AI or voice provider until an evidence pack is accepted for a versioned provider configuration identity. Provider selection, purchase and activation: NOT AUTHORIZED |
| Multilingual evaluation / H-LANG | 111 rows | `EC13-LANG-06`: governed suite results recorded against a configuration identity gate provider activation and acceptance |
| Transient-audio proof / H-AUDIO | 9 rows | `EC13-VOI-02`: per-layer evidence for all nine layers; provider retention separately governed |
| Confirmation and idempotency / H-CONF | 66 rows | `EC13-CNF-01`, `-02`, `EC13-IDM-01`, `-02`: binding, revalidation and replay evidence |
| `FPDR-4` context / H-FPDR4 | 5 rows | `EC13-SNS-01`: trustworthy-context evidence; no new sensing |
| Later-mission dependencies / H-LATER | 54 rows | `EC13-HOLD-03`: only the SB-P-1.13 slice is built; the dependent slice waits for the owning mission |
| Runtime and acceptance evidence / H-EVID | 61 rows | `EC13-VER-02`: Stage 17 and Stage 19 evidence |
| `FPDR-2` | Credit and repayment portions of `12-§4-1`, `12-§7-6`, `12-§21-1` | `EC13-VOI-07`: `PARTIALLY DEMONSTRATED` or dependency-blocked until SB-P-1.14; no complete claim |
| Attachment transient mechanism | `EIS13-ATT-01` | Intake stays held if a safe in-request transient mechanism cannot be shown for the runtime; no durable storage is added |
| Retention default (DC-12, `DUF6`) | Open policy dependency, off the critical path | Retention controls are built; no period is chosen in code |
| `UNVERIFIED — ACCESS REQUIRED` register | 17 facts (EIS Section 28) | None is inferred from repository files; each needs separately authorized evidence |
| Migration execution | NOT AUTHORIZED | Each migration needs a separately authorized migration mission under `docs/migration/README.md`, rehearsed on the isolated test project |
| GitHub Actions | Impaired since 2026-09-30 | A missing run or status is reported as missing, never as a pass |

## 10. Pause-and-Escalate Rule

Stop the dependent work, record what was found with evidence, and report to Mission Control when:

- a locked source is ambiguous, conflicts with another, or with repository state;
- an assigned row cannot be built as the locked EIS specifies (technical difficulty never changes a commitment; the row stays `IN SCOPE`, marked partial or blocked with the reason);
- a change would add, remove, narrow or reclassify behaviour, or touch a row not assigned to the workstream;
- a step needs a migration, provider action, production action, credential or environment not explicitly authorized;
- a safe transient mechanism for audio or attachments cannot be shown on the runtime;
- any Stage 3 trigger T1 to T8 fires, including any new Product Truth question;
- a hold in Section 9 would be crossed;
- repository state differs from the baseline the authorization names.

Do not resolve a conflict by dropping, narrowing or inventing behaviour. Resume only on a recorded Mission Control decision.

## 11. Tests, Evidence, Checklist and Completion Duties

- Run the Verification Checklist items for every assigned row: its `VC-R` item, its named negative-path checks (`NP-*`) and its named runtime scenarios (`RS-*`).
- Record each result with its evidence class. A missing run is `NOT RUN`, never a pass.
- Write the Builder Completion Report with a status per assigned FCTM row, using `IMPLEMENTED — NOT DEMONSTRATED` or `NOT IMPLEMENTED`, or marking the row partial or blocked with the reason (Source 18 Section 3.2 item 5). Demonstration is decided after independent verification, not by the builder.
- Keep `D12`, `DTX`, provider evidence, transient-audio, `FPDR-2`, `FPDR-4` and every `UNVERIFIED — ACCESS REQUIRED` fact visible in every report.

## 12. Workstream-to-FCTM-Row Map

One line per `IN SCOPE` FCTM row, in FCTM order.

| # | FCTM row | Workstreams | Obligations |
|---|---|---|---|
| 1 | `24-§4-1` | WS-C, WS-G | `EC13-GW-01`, `EC13-PRV-01` |
| 2 | `24-§4-2` | WS-G, Cross-cutting | `EC13-PRV-01`, `EC13-NG-01` |
| 3 | `24-§4-3` | WS-G, Cross-cutting | `EC13-PRV-01`, `EC13-NG-01` |
| 4 | `24-§4-4` | WS-G, Cross-cutting | `EC13-PRV-01`, `EC13-NG-01` |
| 5 | `24-§4-5` | WS-G, Cross-cutting | `EC13-PRV-01`, `EC13-NG-01` |
| 6 | `24-§4-6` | WS-G, Cross-cutting | `EC13-PRV-01`, `EC13-NG-01` |
| 7 | `24-§4-7` | WS-G, Cross-cutting | `EC13-PRV-01`, `EC13-NG-01` |
| 8 | `24-§4-8` | WS-G, Cross-cutting | `EC13-PRV-01`, `EC13-NG-01` |
| 9 | `24-§5-1` | WS-C, WS-G, Gate | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 10 | `24-§5-3` | WS-C, WS-G, Gate | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 11 | `24-§5-5` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 12 | `24-§5-7` | WS-C | `EC13-ARC-02` |
| 13 | `24-§5-8` | WS-C | `EC13-ARC-01` |
| 14 | `24-§6-1` | WS-C, WS-G | `EC13-GW-03`, `EC13-PRV-01` |
| 15 | `24-§6-2` | WS-C, WS-G, Gate | `EC13-GW-03`, `EC13-PRV-01`, `EC13-HOLD-03` |
| 16 | `24-§6-3` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 17 | `24-§7-1` | WS-C, WS-G | `EC13-ARC-02`, `EC13-PRV-01` |
| 18 | `24-§7-2` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 19 | `24-§7-5` | WS-C, WS-G, Gate | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 20 | `24-§8-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 21 | `24-§8-2` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 22 | `24-§8-3` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 23 | `24-§9-1` | WS-C, WS-G, Gate | `EC13-CTX-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 24 | `24-§9-2` | WS-C, Gate | `EC13-CTX-02`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 25 | `24-§9-3` | WS-C, Gate | `EC13-ARC-03`, `EC13-HOLD-03` |
| 26 | `24-§9-4` | WS-C | `EC13-ARC-03` |
| 27 | `24-§10-1` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 28 | `24-§10-2` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 29 | `24-§10-3` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 30 | `24-§10-4` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 31 | `24-§10-5` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 32 | `24-§10-6` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 33 | `24-§10-7` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 34 | `24-§10-8` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 35 | `24-§10-9` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 36 | `24-§10-10` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 37 | `24-§10-11` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 38 | `24-§11-1` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 39 | `24-§11-2` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 40 | `24-§11-3` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 41 | `24-§11-4` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 42 | `24-§11-5` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 43 | `24-§11-6` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 44 | `24-§11-7` | WS-C, WS-G, Gate | `EC13-CNF-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 45 | `24-§11-8` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 46 | `24-§11-9` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 47 | `24-§11-10` | WS-C, Gate | `EC13-TOOL-01`, `EC13-HOLD-01` |
| 48 | `24-§13-2` | WS-C | `EC13-CNF-03` |
| 49 | `24-§15-1` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 50 | `24-§15-2` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 51 | `24-§15-3` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 52 | `24-§15-4` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 53 | `24-§15-5` | WS-D, WS-G, Gate | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 54 | `24-§15-6` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 55 | `24-§15-7` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 56 | `24-§15-8` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 57 | `24-§17-1` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 58 | `24-§17-2` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 59 | `24-§17-4` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 60 | `24-§17-5` | WS-E, Gate | `EC13-FAQ-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 61 | `24-§19-1` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 62 | `24-§19-2` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 63 | `24-§19-3` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 64 | `24-§19-4` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 65 | `24-§20-1` | WS-C, WS-G | `EC13-TOOL-02`, `EC13-PRV-01` |
| 66 | `24-§20-2` | WS-C, WS-G | `EC13-TOOL-02`, `EC13-PRV-01` |
| 67 | `24-§20-3` | WS-C, WS-G | `EC13-TOOL-02`, `EC13-PRV-01` |
| 68 | `24-§20-4` | WS-C, WS-G | `EC13-TOOL-02`, `EC13-PRV-01` |
| 69 | `24-§20-5` | WS-C, WS-G, Gate | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 70 | `24-§20-6` | WS-C, WS-G, Gate | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 71 | `24-§20-7` | WS-C, WS-G | `EC13-TOOL-02`, `EC13-PRV-01` |
| 72 | `24-§20-8` | WS-C, WS-G, Gate | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 73 | `24-§20-9` | WS-C, WS-G, Gate | `EC13-TOOL-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 74 | `24-§20-10` | WS-C, WS-G | `EC13-TOOL-02`, `EC13-PRV-01` |
| 75 | `24-§21-1` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 76 | `24-§21-2` | WS-C, Gate | `EC13-CNF-03`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 77 | `24-§21-8` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 78 | `24-§21-9` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 79 | `24-§21-10` | WS-C, Gate | `EC13-CNF-02`, `EC13-HOLD-01` |
| 80 | `24-§22-1` | WS-C, WS-G | `EC13-AUTH-05`, `EC13-PRV-01` |
| 81 | `24-§22-2` | WS-C, WS-G | `EC13-AUTH-05`, `EC13-PRV-01` |
| 82 | `24-§22-3` | WS-C, WS-G | `EC13-AUTH-05`, `EC13-PRV-01` |
| 83 | `24-§22-4` | WS-C, WS-G | `EC13-AUTH-05`, `EC13-PRV-01` |
| 84 | `24-§22-5` | WS-C, WS-G | `EC13-AUTH-05`, `EC13-PRV-01` |
| 85 | `24-§22-6` | WS-C, WS-G | `EC13-AUTH-05`, `EC13-PRV-01` |
| 86 | `24-§22-7` | WS-C, WS-G | `EC13-AUTH-05`, `EC13-PRV-01` |
| 87 | `24-§22-8` | WS-C, WS-G, Gate | `EC13-AUTH-05`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 88 | `24-§23-1` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 89 | `24-§23-2` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 90 | `24-§23-3` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 91 | `24-§23-4` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 92 | `24-§23-5` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 93 | `24-§23-7` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 94 | `24-§23-8` | WS-C, WS-G | `EC13-IDM-02`, `EC13-PRV-01` |
| 95 | `24-§23-9` | WS-C, WS-G, Gate | `EC13-CTX-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 96 | `24-§23-10` | WS-G, Gate | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 97 | `24-§23-11` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 98 | `24-§23-12` | WS-C, WS-G | `EC13-IDM-02`, `EC13-PRV-01` |
| 99 | `24-§23-13` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 100 | `24-§23-14` | WS-C, WS-G | `EC13-IDM-02`, `EC13-PRV-01` |
| 101 | `24-§23-15` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 102 | `24-§23-16` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 103 | `24-§23-17` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 104 | `24-§23-18` | WS-C, WS-G, Gate | `EC13-IDM-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 105 | `24-§24-1` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 106 | `24-§24-2` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 107 | `24-§24-3` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 108 | `24-§24-4` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 109 | `24-§24-5` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 110 | `24-§24-6` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 111 | `24-§24-7` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 112 | `24-§24-8` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 113 | `24-§24-9` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 114 | `24-§24-10` | WS-C, WS-G | `EC13-AUD-01`, `EC13-PRV-01` |
| 115 | `24-§25-1` | WS-C, WS-G, Gate | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 116 | `24-§25-2` | WS-C, WS-G, Gate | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 117 | `24-§25-3` | WS-C, WS-G, Gate | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 118 | `24-§25-4` | WS-A, WS-G | `EC13-WSP-05`, `EC13-PRV-01` |
| 119 | `24-§25-5` | WS-C, WS-G, Gate | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 120 | `24-§25-6` | WS-C, WS-G | `EC13-AUTH-04`, `EC13-PRV-01` |
| 121 | `24-§25-7` | WS-C, WS-G | `EC13-AUTH-04`, `EC13-PRV-01` |
| 122 | `24-§25-8` | WS-C, WS-G | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-ENV-01` |
| 123 | `24-§25-9` | WS-C | `EC13-AUTH-04` |
| 124 | `24-§26-1` | WS-C, WS-G | `EC13-GW-05`, `EC13-PRV-01` |
| 125 | `24-§26-2` | WS-C, WS-G | `EC13-GW-05`, `EC13-PRV-01` |
| 126 | `24-§26-3` | WS-C, WS-G | `EC13-GW-05`, `EC13-PRV-01` |
| 127 | `24-§26-4` | WS-C, WS-G | `EC13-GW-05`, `EC13-PRV-01` |
| 128 | `24-§26-5` | WS-C, WS-G | `EC13-GW-05`, `EC13-PRV-01` |
| 129 | `24-§26-6` | WS-C, WS-G, Gate | `EC13-GW-05`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 130 | `24-§26-7` | WS-C, WS-G | `EC13-GW-05`, `EC13-PRV-01` |
| 131 | `24-§26-8` | WS-C, WS-G | `EC13-GW-05`, `EC13-PRV-01` |
| 132 | `24-§26-9` | WS-C, WS-G | `EC13-GW-05`, `EC13-TEL-01`, `EC13-PRV-01` |
| 133 | `24-§26-10` | WS-C | `EC13-GW-05` |
| 134 | `24-§27-2` | WS-C, WS-G | `EC13-ARC-02`, `EC13-PRV-01` |
| 135 | `24-§27-4` | WS-D, WS-G | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` |
| 136 | `24-§27-6` | WS-C, WS-G | `EC13-ARC-02`, `EC13-PRV-01` |
| 137 | `24-§27-7` | WS-C, WS-G, Gate | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 138 | `24-§27-8` | WS-C, WS-G, Gate | `EC13-ARC-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 139 | `24-§27-9` | WS-C, WS-G | `EC13-ARC-02`, `EC13-PRV-01` |
| 140 | `24-§27-10` | WS-C, WS-G, Gate | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 141 | `24-§27-11` | WS-C, WS-G | `EC13-ARC-02`, `EC13-PRV-01` |
| 142 | `24-§28-1` | WS-C, WS-G | `EC13-GW-01`, `EC13-PRV-01` |
| 143 | `24-§28-2` | WS-C, WS-G | `EC13-GW-04`, `EC13-PRV-01` |
| 144 | `24-§28-3` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 145 | `24-§28-4` | WS-C, WS-G | `EC13-TOOL-02`, `EC13-PRV-01` |
| 146 | `24-§28-5` | WS-C, WS-G, Gate | `EC13-TOOL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 147 | `24-§28-6` | WS-C, WS-G, Gate | `EC13-CTX-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 148 | `24-§28-7` | WS-A, WS-G, Gate | `EC13-WSP-05`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 149 | `24-§28-8` | WS-C, WS-G, Gate | `EC13-CMD-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 150 | `24-§28-9` | WS-C, WS-G | `EC13-GW-01`, `EC13-PRV-01` |
| 151 | `24-§28-10` | WS-C, WS-G | `EC13-GW-05`, `EC13-PRV-01` |
| 152 | `24-§28-11` | WS-C, WS-G | `EC13-GW-04`, `EC13-PRV-01` |
| 153 | `24-§28-12` | WS-C, WS-G, Gate | `EC13-AUD-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 154 | `24-§29-1` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 155 | `24-§29-2` | WS-C, WS-G | `EC13-ARC-03`, `EC13-PRV-01` |
| 156 | `24-§29-3` | WS-C, WS-G | `EC13-ARC-03`, `EC13-PRV-01` |
| 157 | `24-§29-4` | WS-C, WS-G, Gate | `EC13-GW-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 158 | `24-§29-5` | WS-C, WS-G, Gate | `EC13-GW-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 159 | `24-§29-6` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 160 | `24-§30-1` | Cross-cutting | `EC13-NG-01` |
| 161 | `24-§30-2` | Cross-cutting | `EC13-NG-01` |
| 162 | `24-§30-3` | Cross-cutting | `EC13-NG-01` |
| 163 | `24-§30-4` | Cross-cutting | `EC13-NG-01` |
| 164 | `24-§30-5` | Cross-cutting | `EC13-NG-01` |
| 165 | `24-§30-6` | Cross-cutting | `EC13-NG-01` |
| 166 | `24-§30-7` | Cross-cutting | `EC13-NG-01` |
| 167 | `24-§30-8` | Cross-cutting | `EC13-NG-01` |
| 168 | `24-§31-1` | WS-C, WS-G, Gate | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 169 | `24-§31-2` | WS-D, WS-G, Gate | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 170 | `24-§31-3` | WS-C, WS-G, Gate | `EC13-AUTH-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 171 | `24-§31-4` | WS-C, WS-G, Gate | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 172 | `24-§31-5` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 173 | `24-§31-6` | WS-C, WS-G | `EC13-TOOL-02`, `EC13-PRV-01` |
| 174 | `24-§31-7` | WS-C, WS-G, Gate | `EC13-CNF-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 175 | `24-§31-11` | WS-C, WS-G, Gate | `EC13-IDM-02`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 176 | `24-§31-12` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 177 | `24-§31-13` | WS-C, Gate | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 178 | `24-§31-14` | WS-C, WS-G | `EC13-AUD-01`, `EC13-TEL-01`, `EC13-PRV-01` |
| 179 | `24-§31-15` | WS-C, Gate | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 180 | `24-§31-16` | WS-C, WS-G | `EC13-GW-02`, `EC13-PRV-01` |
| 181 | `9-§3-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 182 | `9-§3-2` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 183 | `9-§3-3` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 184 | `9-§3-4` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 185 | `9-§3-5` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 186 | `9-§3-6` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 187 | `9-§3-7` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 188 | `9-§3-8` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 189 | `9-§3-9` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 190 | `9-§4-1` | WS-B, Gate | `EC13-LANG-02`, `EC13-HOLD-01` |
| 191 | `9-§4-2` | WS-B | `EC13-LANG-02` |
| 192 | `9-§4-3` | WS-B | `EC13-LANG-02` |
| 193 | `9-§4-4` | WS-B | `EC13-LANG-02` |
| 194 | `9-§4-5` | WS-B | `EC13-LANG-02` |
| 195 | `9-§5-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 196 | `9-§5-2` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 197 | `9-§6-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 198 | `9-§6-2` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 199 | `9-§7-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 200 | `9-§7-2` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 201 | `9-§7-3` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 202 | `9-§8-1` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 203 | `9-§8-2` | WS-B, WS-G, Gate | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 204 | `9-§8-4` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 205 | `9-§9-1` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 206 | `9-§9-2` | WS-B, WS-G, Gate | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 207 | `9-§9-3` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 208 | `9-§9-4` | WS-B, WS-C, WS-G | `EC13-LANG-03`, `EC13-CMD-03`, `EC13-PRV-01` |
| 209 | `9-§9-5` | WS-B, WS-G, Gate | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-03` |
| 210 | `9-§9-6` | WS-B, WS-G, Gate | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 211 | `9-§9-7` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 212 | `9-§9-8` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 213 | `9-§10-1` | WS-B, Gate | `EC13-LANG-04`, `EC13-HOLD-01` |
| 214 | `9-§10-2` | WS-B, Gate | `EC13-LANG-04`, `EC13-HOLD-01` |
| 215 | `9-§10-3` | WS-B, WS-G, Gate | `EC13-LANG-04`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 216 | `9-§11-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 217 | `9-§11-2` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 218 | `9-§11-3` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 219 | `9-§11-4` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 220 | `9-§11-5` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 221 | `9-§11-6` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 222 | `9-§11-7` | WS-B, WS-G, Gate | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 223 | `9-§12-4` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 224 | `9-§12-10` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 225 | `9-§12-13` | WS-B | `EC13-LANG-01` |
| 226 | `9-§13-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 227 | `9-§13-2` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 228 | `9-§13-3` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 229 | `9-§13-4` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 230 | `9-§13-5` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 231 | `9-§13-6` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 232 | `9-§13-7` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 233 | `9-§13-8` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 234 | `9-§13-9` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 235 | `9-§13-10` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 236 | `9-§13-11` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 237 | `9-§14-1` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 238 | `9-§14-2` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 239 | `9-§14-3` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 240 | `9-§14-4` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 241 | `9-§14-5` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 242 | `9-§14-6` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 243 | `9-§14-7` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 244 | `9-§14-8` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 245 | `9-§15-1` | WS-B | `EC13-LANG-03` |
| 246 | `9-§15-2` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 247 | `9-§15-3` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 248 | `9-§15-4` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 249 | `9-§15-5` | WS-B | `EC13-LANG-03` |
| 250 | `9-§16-1` | WS-B, WS-G | `EC13-LANG-05`, `EC13-PRV-01` |
| 251 | `9-§16-2` | WS-B, WS-G | `EC13-LANG-05`, `EC13-PRV-01` |
| 252 | `9-§16-3` | WS-B, WS-G | `EC13-LANG-05`, `EC13-PRV-01`, `EC13-PRV-02` |
| 253 | `9-§16-4` | WS-B, WS-G, Gate | `EC13-LANG-05`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 254 | `9-§17-1` | WS-B, WS-C, WS-G, Gate | `EC13-LANG-06`, `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 255 | `9-§17-2` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01` |
| 256 | `9-§17-3` | WS-B, WS-G, Gate | `EC13-LANG-04`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 257 | `9-§17-4` | WS-B, WS-G | `EC13-LANG-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 258 | `9-§17-7` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 259 | `9-§17-8` | WS-B, WS-G | `EC13-LANG-02`, `EC13-PRV-01` |
| 260 | `9-§17-9` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 261 | `9-§17-10` | WS-B, WS-G, Gate | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 262 | `9-§18-1` | Cross-cutting | `EC13-NG-01` |
| 263 | `9-§18-2` | Cross-cutting | `EC13-NG-01` |
| 264 | `9-§18-3` | Cross-cutting | `EC13-NG-01` |
| 265 | `9-§18-4` | Cross-cutting | `EC13-NG-01` |
| 266 | `9-§18-5` | Cross-cutting | `EC13-NG-01` |
| 267 | `9-§18-6` | Cross-cutting | `EC13-NG-01` |
| 268 | `9-§18-7` | Cross-cutting | `EC13-NG-01` |
| 269 | `9-§19` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 270 | `10-§4-1` | WS-A, WS-G | `EC13-WSP-02`, `EC13-PRV-01` |
| 271 | `10-§4-2` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 272 | `10-§4-3` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-03` |
| 273 | `10-§4-4` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-03` |
| 274 | `10-§4-5` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-03` |
| 275 | `10-§4-6` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-03` |
| 276 | `10-§4-7` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-03` |
| 277 | `10-§4-8` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-03` |
| 278 | `10-§5-1` | WS-A | `EC13-WSP-02` |
| 279 | `10-§5-2` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 280 | `10-§5-3` | WS-A | `EC13-WSP-02` |
| 281 | `10-§5-4` | WS-A | `EC13-WSP-02` |
| 282 | `10-§5-6` | WS-A | `EC13-WSP-02` |
| 283 | `10-§5-8` | WS-A, Gate | `EC13-WSP-02`, `EC13-HOLD-01` |
| 284 | `10-§5-9` | WS-A, Gate | `EC13-WSP-02`, `EC13-HOLD-01` |
| 285 | `10-§5-11` | WS-A, WS-G | `EC13-WSP-02`, `EC13-PRV-01`, `EC13-PRV-02` |
| 286 | `10-§6-1` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 287 | `10-§6-2` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 288 | `10-§6-3` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 289 | `10-§6-4` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 290 | `10-§6-5` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 291 | `10-§6-6` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-03` |
| 292 | `10-§6-7` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 293 | `10-§6-8` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 294 | `10-§6-9` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 295 | `10-§6-10` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 296 | `10-§6-11` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 297 | `10-§6-12` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 298 | `10-§6-13` | WS-A | `EC13-WSP-03` |
| 299 | `10-§7-2` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 300 | `10-§7-3` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 301 | `10-§7-4` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 302 | `10-§7-5` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 303 | `10-§7-6` | WS-C, Gate | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 304 | `10-§8-1` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 305 | `10-§8-2` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 306 | `10-§8-3` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 307 | `10-§8-4` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 308 | `10-§9-3` | WS-C, Gate | `EC13-CNF-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 309 | `10-§10-2` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 310 | `10-§10-6` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 311 | `10-§10-8` | WS-F | `EC13-ATT-01` |
| 312 | `10-§11-1` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 313 | `10-§11-2` | WS-C, WS-D, WS-G, Gate | `EC13-CMD-02`, `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 314 | `10-§11-3` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 315 | `10-§11-5` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 316 | `10-§11-6` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 317 | `10-§11-7` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 318 | `10-§11-8` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 319 | `10-§12-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 320 | `10-§12-2` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 321 | `10-§12-3` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 322 | `10-§13-1` | WS-C, Gate | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 323 | `10-§13-2` | WS-C, Gate | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 324 | `10-§13-8` | WS-C, Gate | `EC13-CMD-01`, `EC13-HOLD-01` |
| 325 | `10-§13-9` | WS-C, Gate | `EC13-CMD-01`, `EC13-HOLD-01` |
| 326 | `10-§13-10` | WS-C, Gate | `EC13-CMD-01`, `EC13-HOLD-01` |
| 327 | `10-§13-11` | WS-C, Gate | `EC13-CMD-01`, `EC13-HOLD-01` |
| 328 | `10-§13-12` | WS-C, Gate | `EC13-CMD-01`, `EC13-HOLD-01` |
| 329 | `10-§14-1` | WS-G, Gate | `EC13-FAIL-03`, `EC13-HOLD-01` |
| 330 | `10-§15-1` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 331 | `10-§15-2` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 332 | `10-§15-3` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 333 | `10-§15-4` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 334 | `10-§15-5` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 335 | `10-§15-6` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 336 | `10-§15-7` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 337 | `10-§16-1` | WS-A | `EC13-WSP-05` |
| 338 | `10-§16-2` | WS-A, Gate | `EC13-WSP-05`, `EC13-HOLD-03` |
| 339 | `10-§16-3` | WS-A, Gate | `EC13-WSP-05`, `EC13-HOLD-01` |
| 340 | `10-§16-4` | WS-A, Gate | `EC13-WSP-05`, `EC13-HOLD-03` |
| 341 | `10-§16-5` | WS-A, Gate | `EC13-WSP-05`, `EC13-HOLD-03` |
| 342 | `10-§16-6` | WS-A, Gate | `EC13-WSP-05`, `EC13-HOLD-01` |
| 343 | `10-§16-7` | WS-A, Gate | `EC13-WSP-05`, `EC13-HOLD-01` |
| 344 | `10-§16-8` | WS-A | `EC13-WSP-05` |
| 345 | `10-§17-1` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 346 | `10-§17-2` | WS-B, WS-G, Gate | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 347 | `10-§17-3` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 348 | `10-§17-6` | WS-B, WS-G, Gate | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 349 | `10-§17-7` | WS-B, WS-G, Gate | `EC13-LANG-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 350 | `10-§17-8` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 351 | `10-§17-9` | WS-C, Gate | `EC13-CNF-02`, `EC13-HOLD-01` |
| 352 | `10-§18-1` | WS-G, Gate | `EC13-FAIL-03`, `EC13-HOLD-01` |
| 353 | `10-§18-2` | WS-G | `EC13-FAIL-02` |
| 354 | `10-§18-3` | WS-G | `EC13-FAIL-02` |
| 355 | `10-§18-4` | WS-G | `EC13-FAIL-02` |
| 356 | `10-§18-5` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 357 | `10-§18-6` | WS-G, Gate | `EC13-FAIL-02`, `EC13-HOLD-01` |
| 358 | `10-§18-7` | WS-C, Gate | `EC13-IDM-01`, `EC13-HOLD-01` |
| 359 | `10-§18-8` | WS-G, Gate | `EC13-FAIL-02`, `EC13-HOLD-01` |
| 360 | `10-§18-9` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 361 | `10-§18-10` | WS-G | `EC13-FAIL-02` |
| 362 | `10-§18-12` | WS-G | `EC13-FAIL-02` |
| 363 | `10-§18-13` | WS-G | `EC13-FAIL-02` |
| 364 | `10-§19-1` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 365 | `10-§19-2` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 366 | `10-§19-3` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 367 | `10-§19-4` | WS-C, WS-G, Gate | `EC13-AUTH-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 368 | `10-§19-5` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 369 | `10-§19-6` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 370 | `10-§19-7` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 371 | `10-§20-1` | WS-A, WS-G | `EC13-WSP-06`, `EC13-PRV-01` |
| 372 | `10-§20-2` | WS-A | `EC13-WSP-06` |
| 373 | `10-§20-3` | WS-A | `EC13-WSP-06` |
| 374 | `10-§20-4` | WS-A | `EC13-WSP-06` |
| 375 | `10-§20-5` | WS-A, Gate | `EC13-WSP-06`, `EC13-HOLD-01` |
| 376 | `10-§20-6` | WS-A | `EC13-WSP-01` |
| 377 | `10-§22-1` | Cross-cutting | `EC13-NG-01` |
| 378 | `10-§22-2` | Cross-cutting | `EC13-NG-01` |
| 379 | `10-§22-3` | Cross-cutting | `EC13-NG-01` |
| 380 | `10-§22-4` | Cross-cutting | `EC13-NG-01` |
| 381 | `10-§22-5` | Cross-cutting | `EC13-NG-01` |
| 382 | `10-§22-6` | Cross-cutting | `EC13-NG-01` |
| 383 | `10-§23-1` | WS-C, WS-G, Gate | `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 384 | `10-§23-2` | WS-D, WS-G, Gate | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 385 | `10-§23-3a` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 386 | `10-§23-5` | WS-C, WS-G, Gate | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 387 | `10-§23-7` | WS-G, Gate | `EC13-FAIL-03`, `EC13-HOLD-01` |
| 388 | `10-§23-8` | WS-C, Gate | `EC13-CNF-02`, `EC13-HOLD-01` |
| 389 | `10-§23-9` | WS-C, Gate | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 390 | `10-§23-10` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 391 | `12-§3-1` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 392 | `12-§4-1` | WS-C, WS-D, WS-G, Gate | `EC13-CMD-02`, `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02`, `EC13-HOLD-03` |
| 393 | `12-§4-6` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 394 | `12-§4-7` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 395 | `12-§4-8` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 396 | `12-§4-9` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 397 | `12-§6-1` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 398 | `12-§6-2` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 399 | `12-§6-3` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 400 | `12-§6-4` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 401 | `12-§6-5` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 402 | `12-§6-6` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 403 | `12-§7-1` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 404 | `12-§7-2` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 405 | `12-§7-3` | WS-D, WS-G, Gate | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 406 | `12-§7-4` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 407 | `12-§7-5` | WS-C, WS-D, WS-G | `EC13-CMD-03`, `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 408 | `12-§7-6` | WS-C, WS-D, WS-G, Gate | `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-03` |
| 409 | `12-§7-8` | WS-D, WS-G, Gate | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 410 | `12-§7-9` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 411 | `12-§7-10` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 412 | `12-§8-1` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 413 | `12-§8-2` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 414 | `12-§8-3` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 415 | `12-§8-5` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 416 | `12-§9-1` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 417 | `12-§9-2` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 418 | `12-§9-3` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 419 | `12-§11-1` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 420 | `12-§11-2` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 421 | `12-§11-3` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 422 | `12-§11-4` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 423 | `12-§11-5` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 424 | `12-§11-7` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 425 | `12-§11-8` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 426 | `12-§11-9` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 427 | `12-§13-3` | WS-D, WS-G | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 428 | `12-§14-1` | WS-D, WS-G, Gate | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 429 | `12-§14-2` | WS-D, WS-G, Gate | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 430 | `12-§14-3` | WS-D, WS-G, Gate | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 431 | `12-§14-4` | WS-D, WS-G, Gate | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 432 | `12-§15-1` | WS-D, WS-G, Gate | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 433 | `12-§15-2` | WS-D, WS-G, Gate | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 434 | `12-§15-3` | WS-D, WS-G, Gate | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 435 | `12-§15-4` | WS-D, WS-G, Gate | `EC13-VOI-02`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 436 | `12-§15-5` | WS-D, WS-G, Gate | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 437 | `12-§16-1` | WS-D, WS-G, Gate | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 438 | `12-§16-2` | WS-D, WS-G, Gate | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 439 | `12-§16-3` | WS-D, WS-G, Gate | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 440 | `12-§16-4` | WS-D, WS-G, Gate | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 441 | `12-§16-5` | WS-D, WS-G, Gate | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 442 | `12-§16-6` | WS-D, WS-G, Gate | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 443 | `12-§16-7` | WS-D, WS-G, Gate | `EC13-VOI-04`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 444 | `12-§16-8` | WS-D, WS-G, Gate | `EC13-VOI-02`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-03` |
| 445 | `12-§17-1` | WS-D, WS-G | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` |
| 446 | `12-§17-2` | WS-D, WS-G | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` |
| 447 | `12-§17-3` | WS-D, WS-G | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` |
| 448 | `12-§17-4` | WS-D, WS-G | `EC13-VOI-03`, `EC13-PRV-01`, `EC13-PRV-02` |
| 449 | `12-§17-5` | WS-D, WS-G | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 450 | `12-§17-6` | WS-D, WS-G | `EC13-VOI-02`, `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 451 | `12-§17-7` | WS-D, WS-G, Gate | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 452 | `12-§17-8` | WS-C, WS-G, Gate | `EC13-IDM-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 453 | `12-§17-9` | WS-D, WS-G | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 454 | `12-§17-10` | WS-D, WS-G | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 455 | `12-§17-11` | WS-D, WS-G | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 456 | `12-§17-12` | WS-D, WS-G | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 457 | `12-§17-13` | WS-D, WS-G | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 458 | `12-§17-14` | WS-D, WS-G | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 459 | `12-§17-15` | WS-D, WS-G | `EC13-VOI-08`, `EC13-PRV-01`, `EC13-PRV-02` |
| 460 | `12-§18-1` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 461 | `12-§18-2` | WS-D, WS-G | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02` |
| 462 | `12-§18-3` | WS-D, WS-G, Gate | `EC13-VOI-06`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 463 | `12-§20-1` | WS-D, WS-G | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` |
| 464 | `12-§20-2` | WS-D, WS-G | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` |
| 465 | `12-§20-3` | WS-D, WS-G | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` |
| 466 | `12-§20-4` | WS-D, WS-G | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` |
| 467 | `12-§20-5` | WS-D, WS-G | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` |
| 468 | `12-§20-6` | WS-D, WS-G | `EC13-VOI-09`, `EC13-PRV-01`, `EC13-PRV-02` |
| 469 | `12-§21-1` | WS-C, WS-D, WS-G, Gate | `EC13-CMD-02`, `EC13-CMD-03`, `EC13-VOI-07`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02`, `EC13-HOLD-03` |
| 470 | `12-§21-2` | WS-D, WS-G | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` |
| 471 | `12-§21-7` | WS-D, WS-G | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` |
| 472 | `12-§21-8` | WS-D, WS-G, Gate | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 473 | `12-§21-9` | WS-C, WS-G, Gate | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 474 | `12-§21-10` | WS-D, WS-G | `EC13-VOI-05`, `EC13-PRV-01`, `EC13-PRV-02` |
| 475 | `12-§21-12` | WS-D, WS-G, Gate | `EC13-SNS-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 476 | `8-§3-1` | WS-E | `EC13-FAQ-02` |
| 477 | `8-§3-2` | WS-E | `EC13-FAQ-02` |
| 478 | `8-§3-3` | WS-E | `EC13-FAQ-02` |
| 479 | `8-§3-4` | WS-E | `EC13-FAQ-02` |
| 480 | `8-§3-5` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 481 | `8-§3-8` | WS-E | `EC13-FAQ-02` |
| 482 | `8-§4-1` | WS-E | `EC13-FAQ-01` |
| 483 | `8-§5-1` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 484 | `8-§5-2` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 485 | `8-§5-3` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 486 | `8-§6-1` | WS-E | `EC13-FAQ-01` |
| 487 | `8-§6-2` | WS-E | `EC13-FAQ-01` |
| 488 | `8-§6-3` | WS-E | `EC13-FAQ-01` |
| 489 | `8-§6-4` | WS-E | `EC13-FAQ-03` |
| 490 | `8-§6-5` | WS-E | `EC13-FAQ-03` |
| 491 | `8-§7-1` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 492 | `8-§7-2` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 493 | `8-§7-3` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 494 | `8-§7-6` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 495 | `8-§7-7` | WS-E | `EC13-FAQ-03` |
| 496 | `8-§7-8` | WS-E | `EC13-FAQ-03` |
| 497 | `8-§7-9` | WS-E, Gate | `EC13-FAQ-03`, `EC13-HOLD-01` |
| 498 | `8-§7-10` | WS-E, Gate | `EC13-FAQ-03`, `EC13-HOLD-01` |
| 499 | `8-§7-11` | WS-C | `EC13-TEL-02` |
| 500 | `8-§7-12` | WS-E | `EC13-FAQ-03` |
| 501 | `8-§11-1` | WS-E | `EC13-FAQ-04` |
| 502 | `8-§11-2` | WS-E | `EC13-FAQ-04` |
| 503 | `8-§11-4` | WS-E | `EC13-FAQ-04` |
| 504 | `8-§11-5` | WS-E | `EC13-FAQ-04` |
| 505 | `8-§12-1` | WS-E | `EC13-FAQ-02` |
| 506 | `8-§12-5` | WS-E | `EC13-FAQ-01` |
| 507 | `8-§13-1` | WS-E | `EC13-FAQ-03` |
| 508 | `8-§15-1` | WS-E | `EC13-FAQ-03` |
| 509 | `8-§15-2` | WS-E | `EC13-FAQ-03` |
| 510 | `8-§15-3` | WS-E | `EC13-FAQ-03` |
| 511 | `8-§15-4` | WS-E, WS-G | `EC13-FAQ-03`, `EC13-PRV-01` |
| 512 | `8-§15-6` | WS-E | `EC13-FAQ-03` |
| 513 | `8-§15-7` | WS-E | `EC13-FAQ-03` |
| 514 | `8-§15-10` | WS-E | `EC13-FAQ-03` |
| 515 | `8-§15-11` | WS-E, Gate | `EC13-FAQ-03`, `EC13-HOLD-03` |
| 516 | `8-§16-1` | WS-E | `EC13-FAQ-02` |
| 517 | `8-§16-2` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 518 | `8-§16-3` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 519 | `8-§16-4` | WS-E | `EC13-FAQ-02` |
| 520 | `8-§16-5` | WS-E, WS-G | `EC13-FAQ-02`, `EC13-PRV-01` |
| 521 | `8-§16-9` | WS-E | `EC13-FAQ-04` |
| 522 | `8-§17-2` | WS-E | `EC13-FAQ-03` |
| 523 | `8-§17-3` | WS-E | `EC13-FAQ-03` |
| 524 | `8-§17-4` | WS-E | `EC13-FAQ-03` |
| 525 | `8-§17-6` | WS-E | `EC13-FAQ-03` |
| 526 | `22-§4-2` | WS-A | `EC13-WSP-03` |
| 527 | `22-§7-1` | WS-C, WS-G | `EC13-ARC-01`, `EC13-PRV-01` |
| 528 | `22-§7-2` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01` |
| 529 | `22-§7-3` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01` |
| 530 | `22-§7-4` | WS-C, WS-G | `EC13-ARC-01`, `EC13-PRV-01` |
| 531 | `22-§7-5` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01` |
| 532 | `22-§7-6` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01` |
| 533 | `22-§7-7` | WS-C, Gate | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 534 | `22-§7-8` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01` |
| 535 | `22-§7-9` | WS-C | `EC13-ARC-01` |
| 536 | `22-§7-10` | WS-C, WS-G | `EC13-ARC-01`, `EC13-PRV-01` |
| 537 | `22-§8-1` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 538 | `22-§8-2` | WS-B | `EC13-LANG-01` |
| 539 | `22-§8-3` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 540 | `22-§8-4` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 541 | `22-§8-5` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 542 | `22-§8-6` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 543 | `22-§8-7` | WS-B, WS-G | `EC13-LANG-01`, `EC13-PRV-01` |
| 544 | `22-§17` | WS-C, WS-G | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 545 | `22-§19-1` | WS-G | `EC13-FAIL-02`, `EC13-PRV-01` |
| 546 | `22-§19-2` | WS-G | `EC13-FAIL-02`, `EC13-PRV-01` |
| 547 | `22-§19-3` | WS-G | `EC13-FAIL-02`, `EC13-PRV-01` |
| 548 | `22-§19-4` | WS-G | `EC13-FAIL-02`, `EC13-PRV-01` |
| 549 | `22-§19-5` | WS-G | `EC13-FAIL-02`, `EC13-PRV-01` |
| 550 | `22-§19-6` | WS-G | `EC13-FAIL-02`, `EC13-PRV-01` |
| 551 | `22-§19-7` | WS-G | `EC13-FAIL-02`, `EC13-PRV-01` |
| 552 | `22-§21` | WS-A, WS-G | `EC13-WSP-06`, `EC13-PRV-01` |
| 553 | `22-§22-1` | Cross-cutting | `EC13-VER-01` |
| 554 | `22-§22-2` | Cross-cutting, Gate | `EC13-VER-01`, `EC13-HOLD-01` |
| 555 | `22-§22-3` | Cross-cutting | `EC13-VER-01` |
| 556 | `22-§22-4` | Cross-cutting | `EC13-VER-01` |
| 557 | `22-§22-5` | Cross-cutting | `EC13-VER-01` |
| 558 | `22-§22-6` | Cross-cutting | `EC13-VER-01` |
| 559 | `22-§23-2` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 560 | `22-§23-3` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 561 | `22-§23-5` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 562 | `22-§23-7` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 563 | `22-§24-1` | WS-C, WS-G, Gate | `EC13-ARC-03`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 564 | `22-§24-2` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 565 | `22-§24-3` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 566 | `22-§27-1` | Cross-cutting | `EC13-DOC-01` |
| 567 | `22-§27-2` | Cross-cutting | `EC13-DOC-01` |
| 568 | `22-§27-3` | Cross-cutting | `EC13-DOC-01` |
| 569 | `22-§27-4` | Cross-cutting | `EC13-DOC-01` |
| 570 | `22-§27-5` | Cross-cutting | `EC13-DOC-01` |
| 571 | `22-§27-6` | Cross-cutting | `EC13-DOC-01` |
| 572 | `22-§27-7` | Cross-cutting | `EC13-DOC-01` |
| 573 | `22-§28-1` | Cross-cutting | `EC13-NG-01` |
| 574 | `22-§28-2` | Cross-cutting | `EC13-NG-01` |
| 575 | `22-§28-3` | Cross-cutting | `EC13-NG-01` |
| 576 | `22-§28-4` | Cross-cutting | `EC13-NG-01` |
| 577 | `22-§28-5` | Cross-cutting | `EC13-NG-01` |
| 578 | `22-§28-6` | Cross-cutting | `EC13-NG-01` |
| 579 | `22-§28-7` | Cross-cutting | `EC13-NG-01` |
| 580 | `22-§28-8` | Cross-cutting | `EC13-NG-01` |
| 581 | `22-§28-9` | Cross-cutting | `EC13-NG-01` |
| 582 | `22-§28-10` | Cross-cutting | `EC13-NG-01` |
| 583 | `22-§29-1` | WS-C, Gate | `EC13-ARC-02`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 584 | `22-§29-2` | WS-C, WS-G, Gate | `EC13-ARC-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 585 | `22-§29-3` | WS-C, Gate | `EC13-AUTH-04`, `EC13-HOLD-01` |
| 586 | `22-§29-7` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 587 | `22-§29-8` | WS-C, Gate | `EC13-CMD-02`, `EC13-IDM-01`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 588 | `22-§29-10` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-PRV-02` |
| 589 | `22-§29-12` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 590 | `22-§29-13` | WS-G, Gate | `EC13-FAIL-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 591 | `22-§29-14` | Cross-cutting | `EC13-DOC-01` |
| 592 | `17-§5-1` | WS-A | `EC13-WSP-01` |
| 593 | `17-§5-2` | WS-A | `EC13-WSP-01` |
| 594 | `17-§5-3` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01` |
| 595 | `17-§5-4` | WS-C, Gate | `EC13-ARC-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 596 | `17-§5-5` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01` |
| 597 | `17-§5-6` | WS-A, WS-G | `EC13-WSP-03`, `EC13-PRV-01` |
| 598 | `17-§5-7` | WS-C, Gate | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 599 | `17-§5-8` | WS-A, Gate | `EC13-WSP-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 600 | `17-§22-4` | WS-A, Gate | `EC13-WSP-04`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 601 | `17-§22-8` | WS-A | `EC13-WSP-01` |
| 602 | `20-§14-1` | WS-B, WS-G, Gate | `EC13-LANG-02`, `EC13-PRV-01`, `EC13-HOLD-03` |
| 603 | `20-§14-2` | WS-B, WS-G | `EC13-LANG-02`, `EC13-PRV-01` |
| 604 | `20-§14-3` | WS-B, WS-G | `EC13-LANG-02`, `EC13-PRV-01` |
| 605 | `20-§14-4` | WS-B, WS-G | `EC13-LANG-02`, `EC13-PRV-01` |
| 606 | `20-§15-3` | WS-A | `EC13-WSP-01` |
| 607 | `7-§11-2` | WS-C, Gate | `EC13-AUTH-03`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 608 | `BP-§5.4-1` | WS-D, WS-G | `EC13-VOI-10`, `EC13-PRV-01`, `EC13-PRV-02` |
| 609 | `BP-§6.2-1` | WS-C, Gate | `EC13-CMD-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 610 | `BP-§6.2-2` | WS-C, Gate | `EC13-CMD-01`, `EC13-HOLD-01` |
| 611 | `BP-§6.4-1` | WS-C, Gate | `EC13-ARC-01`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 612 | `BP-§6.4-2` | WS-C, Gate | `EC13-ARC-01`, `EC13-HOLD-01` |
| 613 | `BP-§6.4-3` | WS-C, WS-G | `EC13-ARC-01`, `EC13-PRV-01` |
| 614 | `BP-§6.4-4` | WS-C, WS-G, Gate | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 615 | `BP-§6.4-5` | WS-C, WS-G | `EC13-ARC-01`, `EC13-PRV-01` |
| 616 | `BP-§6.4-6` | WS-C, WS-G, Gate | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 617 | `BP-§6.4-7` | WS-C, Gate | `EC13-ARC-01`, `EC13-HOLD-01` |
| 618 | `BP-§6.4-8` | WS-C, Gate | `EC13-ARC-01`, `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 619 | `BP-§6.4-9` | WS-C, WS-G, Gate | `EC13-ARC-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 620 | `BP-§6.4-10` | WS-C, Gate | `EC13-ARC-01`, `EC13-HOLD-01` |
| 621 | `BP-§6.6-1` | WS-C | `EC13-ARC-01` |
| 622 | `BP-§8.3-1` | WS-A | `EC13-WSP-01` |
| 623 | `BP-§8.4-1` | WS-C | `EC13-ARC-02` |
| 624 | `BP-§8.4-2` | WS-G, Gate | `EC13-FAIL-03`, `EC13-HOLD-01` |
| 625 | `BP-§8.4-3` | WS-C | `EC13-ARC-02` |
| 626 | `BP-§10.2-W1` | WS-A, Gate | `EC13-WSP-01`, `EC13-HOLD-01` |
| 627 | `BP-§10.2-W2` | WS-B | `EC13-LANG-01` |
| 628 | `BP-§10.2-W3` | WS-A, Gate | `EC13-WSP-05`, `EC13-HOLD-01` |
| 629 | `BP-§10.2-W4` | WS-D, WS-G, Gate | `EC13-VOI-01`, `EC13-PRV-01`, `EC13-PRV-02`, `EC13-HOLD-01` |
| 630 | `BP-§10.2-W5` | WS-C, WS-G | `EC13-GW-01`, `EC13-PRV-01` |
| 631 | `BP-§10.2-W6` | WS-C, Gate | `EC13-TOOL-01`, `EC13-HOLD-01` |
| 632 | `BP-§10.2-W7` | WS-C, Gate | `EC13-AUTH-01`, `EC13-HOLD-01` |
| 633 | `BP-§10.2-W8` | WS-C, Gate | `EC13-CNF-01`, `EC13-HOLD-01` |
| 634 | `BP-§10.2-W9` | WS-C, Gate | `EC13-CMD-02`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 635 | `BP-§10.2-W10` | WS-C, Gate | `EC13-AUD-01`, `EC13-HOLD-01` |
| 636 | `BP-§10.2-W11` | WS-F, Gate | `EC13-ATT-01`, `EC13-HOLD-01`, `EC13-HOLD-03` |
| 637 | `BP-§10.2-W12` | WS-E | `EC13-FAQ-01` |
| 638 | `BP-§10.2-W13` | WS-G | `EC13-FAIL-01`, `EC13-PRV-01` |
| 639 | `BP-§10.2-I1` | WS-D, WS-G | `EC13-VOI-10`, `EC13-PRV-01`, `EC13-PRV-02` |
| 640 | `BP-§10.2-E1` | WS-A, WS-G, Gate | `EC13-WSP-01`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 641 | `BP-§10.2-E2` | WS-B, WS-G | `EC13-LANG-03`, `EC13-PRV-01` |
| 642 | `BP-§10.2-E3` | WS-C, Gate | `EC13-AUTH-02`, `EC13-HOLD-01` |
| 643 | `BP-§10.2-E4` | WS-A | `EC13-WSP-01` |
| 644 | `BP-§10.2-E5` | WS-G, Gate | `EC13-FAIL-03`, `EC13-HOLD-01` |
| 645 | `BP-§10.2-SA1` | WS-C, WS-G, Gate | `EC13-CMD-02`, `EC13-PRV-01`, `EC13-HOLD-01`, `EC13-HOLD-02` |
| 646 | `BP-§10.2-SA2` | WS-C, WS-G, Gate | `EC13-AUTH-03`, `EC13-PRV-01`, `EC13-HOLD-01` |
| 647 | `BP-§10.2-SB` | WS-G, Gate | `EC13-FAIL-03`, `EC13-HOLD-01` |
| 648 | `BP-§11-1` | WS-C | `EC13-ARC-01` |
| 649 | `BP-§12-1` | WS-E | `EC13-FAQ-01` |
| 650 | `BP-§12-3` | WS-E | `EC13-FAQ-01` |
| 651 | `BP-§13-1` | Cross-cutting | `EC13-VER-02` |

## 13. Workstream Row Counts

| Workstream | Obligations | Rows |
|---|---|---|
| WS-A | 6 | 58 |
| WS-B | 6 | 101 |
| WS-C | 29 | 230 |
| WS-D | 11 | 108 |
| WS-E | 4 | 58 |
| WS-F | 1 | 11 |
| WS-G | 6 | 381 |
| Cross-cutting | 6 | 53 |
| Gate | 3 | 269 |

Every one of the 651 rows is assigned to at least one workstream; 500 rows are shared by two or more. 46 rows are realized only by cross-cutting obligations (must-not, CI, dependency-rule and Experience Verification Matrix rows) and apply to every builder workstream. No row is assigned outside SB-P-1.13.

## 14. Status

`DRAFT — MISSION CONTROL REVIEW REQUIRED`. No builder is named and nothing may be built from this prompt.

## 15. Change Log

| Version | Date | Author | Change |
|---|---|---|---|
| 0.1 | 2026-10-07 | Claude Code (MC-19) | Initial Stage 12 draft |
