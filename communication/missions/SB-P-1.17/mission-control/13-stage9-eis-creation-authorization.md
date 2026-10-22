# SB-P-1.17 — Stage 9 EIS Creation Authorization (MC-429)

**Mission:** SB-P-1.17 — Manager Operations  
**Sender:** Mission Control  
**Recipient:** Claude Code — Stage 9 Engineering Implementation Specification Actor  
**Date:** 2026-10-22  
**Baseline:** `main@5fadee63bfa7e99c49ddf717f17e09bf1d44a71a` (PR #1017 Founder Stage 8 Blueprint Lock)  
**Status:** PROPOSED — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE OF THIS HANDOFF PR AND MISSION CONTROL POST-MERGE VERIFICATION  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## Authority and scope

Mission Control authorizes **Stage 9 EIS documentary creation only**, conditional on publication of this record to canonical `main`. Source 18 v1.2 §7 identifies Claude Code as Stage 9 owner. Founder Stage 8 Blueprint approval is canonical under PR #1017, and the Blueprint is locked. This does not authorize Stage 10 approval, Stage 11 EIS Lock, Stage 12 implementation packaging, SQL, migrations, code, runtime activity or external systems.

### Required intake

Read `AGENTS.md`, communication protocol v1.1, Source 18 v1.2, mission `README.md`, decision and handover logs, the locked `docs/phase-1-mission-blueprint/completed/SB-P-1.17.md` (blob `bc4615f84959a79e6b242f622aae928901fbe959`), canonical FCTM (`cb79088d`), Truth Pack (`8d541153`), Founder decisions `17:FPDR-1` through `17:FPDR-7`, approved upstream EIS/specifications SB-P-1.12 through SB-P-1.16, and specialist evidence under `communication/missions/SB-P-1.17/specialists/` including SA-01 through SA-05, MC-410A and MC-411B. Treat unverified implementation and third-party POS feasibility as unknown.

### Deliverable

Draft only `docs/phase-1-mission-blueprint/implementation/SB-P-1.17-EIS.md` and necessary Stage 9 mission report/traceability records within `communication/missions/SB-P-1.17/claude-code/`, plus strictly necessary README, stage ledger, decision and handover log references. Include:
- A **bidirectional FCTM traceability table**: all 404 `IN SCOPE` row IDs map to EIS requirements; each EIS requirement maps back to an approved row or a recorded justified orphan. An orphan that introduces product behavior raises T3; no invented Product Truth.
- Explicit architecture, data boundaries, authorization and denial, merchant isolation, transaction/idempotency/concurrency, failure/retry/reversal, data minimization, test/negative-path and migration-planning obligations.
- Findings integrated *as proposals subject to Stage 10 review*, not automatically approved controls.
- Clear EIS blockers and unresolved decisions without changing the locked Blueprint or FCTM.

### Hard engineering holds

1. **MC410-R01**: authenticated POS source and business binding; define a kernel-compatible principal/authorization route jointly with SB-P-1.12. No invented fifth integration principal and no use of channel identity as authorization.
2. **MC410-R02**: distinguish financial trust from inventory mapping. Design governed Ledger eligibility and posting timing with SB-P-1.14 authority; neither automatic posting nor blanket suppression already approved.
3. **EQ17-13 / INV-A2**: demonstrate a genuinely atomic same-business-command composition for SB-P-1.14 Ledger and stock effects where both are required; two sequential independent writes cannot be treated as atomic.
4. **MC410-R04A/R04B**: safe dual-domain reversal and affirmative closing-source completeness proof; avoid false complete closing results.
5. **U-11**: identifiable operator processing remains held pending qualified legal/privacy determination; do not assume consent or authorize staff surveillance.
6. **SA-04 / DPOS**: independent qualified POS assurance and real-source dossier outstanding; Scenario B cannot pass on fixtures.
7. T6/T8 remain WATCH; if new evidence establishes material Product Truth conflict or infeasibility, STOP for Mission Control and Founder process.

Preserve Owner-only financial intelligence, independently scoped Manager grants, merchant confirmation, neutral counter signals, one governed SB-P-1.14 Ledger, one inventory movement authority, append-only correction auditability and source-event dedupe. No core custom POS modifications.

### Publication, review and stop

Claude Code may prepare an EIS **draft PR** under the repository's protected mission-branch convention and provide exact changed files, bidirectional 404-row accounting, traceability proof, evidence classes, unresolved matrix, independent specialist review requests and quality checks.

**Git authorization:** Mission Control authorizes Claude Code, for mission SB-P-1.17, repository SmartBusinessv1/smart-business, standard `mission/[MISSION-ID]-[SHORT-SLUG]` branch convention, only the EIS draft and necessary SB-P-1.17 mission documentation files, using mission-scoped descriptive commit messages; truthful standard Co-Authored-By trailer permitted; fetch, fast-forward-only pull, stage exact paths, commit, push mission branch and open a PR. No direct main push, force push or self-merge.

**STOP FOR MISSION CONTROL STAGE 9 REVIEW.** Stage 10 and Stage 11 are not approved; EIS is not locked. No code, migrations, production/test environment changes, Lovable actions, external POS connections, provider actions, or implementation authorization.
