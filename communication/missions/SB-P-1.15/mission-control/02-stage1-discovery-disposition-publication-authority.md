# SB-P-1.15 — Stage 1 Discovery Disposition and Intake Pack Preparation Authorization

**Mission Control decision:** SB-P-1.15-MC-02  
**Authority:** Source 18 Stage 1; SB-P-1.15-MC-01, canonical PR #855  
**Canonical discovery baseline:** `main@cc7ea06d3994774b2fb854eb6d0205a3c04d6500`  
**Status:** PREPARED — EFFECTIVE ONLY AFTER AUTHORIZED-HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION  
**Stage 1:** DISCOVERY RETURN REVIEWED — INTAKE PACK NOT YET ACCEPTED  
**Implementation:** NOT AUTHORIZED

## 1. Discovery disposition and authority findings

Claude Code returned a read-only discovery report, without repository modifications. Mission Control independently confirmed the canonical Build Plan assigns **SB-P-1.15 — Reminder, Daily Intelligence & Ask CFO** to primary Contracts **2, 4 and 11**, and Founder Decision **FPDR-1** assigns Contract **22 §12-1 through §12-9** to a distinct Shared Notification Foundation workstream *within SB-P-1.15*. This is **not** a fourth Product Mission. The relevant C22 shared Reminder/Scheduler slices also require documentary intake and row-by-row reconciliation.

Required source pack:
- Primary: C2 Ask CFO, C4 Daily Intelligence, C11 Smart Reminder & Delegated Automation; C22 shared notification/reminder/scheduler foundation slices per FPDR-1 and delegated rows.
- Delegates where touched: C21, C24, C9, C10, C12, C3, C17 and C20. C23 and C1/C6/C7/C8/C14/C16 are downstream seams only unless a specific governing source requires more.
- Build Plan §10.4 with §§6.2, 6.5, 8, 9, 11, 13–16 as applicable; canonical Global Product Completion View and Feature Coverage Matrix.
- Upstream SB-P-1.12, 1.13, 1.14 locked specs and nonterminal partial OLE, not live implementation evidence.

The discovery report's enumerated source paths/blob identities are **proposals requiring an immutable intake manifest**; use canonical `main` and identify any material drift when preparing the package.

## 2. Decision and protected uncertainties

**APPROVE BOUNDED STAGE 1 INTAKE PACK PREPARATION** (not Stage 1 acceptance) after this record is human-merged and verified.

Carry these as **unresolved, not decided**:
- **U-1:** no currently approved external outbound channel is evidenced for reminders before SB-P-1.20; do not infer email/Resend or SMS is a product channel. Assess whether Scenario A can be specified truthfully with documented app/Workspace/dashboard surfaces and a delivery hold; escalate genuine T1/T3 issue before downstream stages.
- **U-2:** FPDR-1 in-file DRAFT label versus canonical human-merged Founder decision. Do not amend Founder record silently; rely on actual canonical crossing with discrepancy noted.
- **U-3:** C20 §23-10 ambiguous split `SB-P-1.19/SB-P-1.15`. Do not unilaterally move or reclassify the row; hold and seek MC reconciliation if allocation is required.
- **U-4:** in-app reminder availability and unimplemented D13 Workspace dependency.
- **U-5:** applicable unresolved retention/cancellation decisions as they affect reminder/notification history.
- Stage 2 Delta candidates: missing scheduler/timezone implementation; absent notification consumer; existing transaction correction UI copy potentially asserting a nonexistent notification workflow; no CI passes.
- D12/D13/D14/DTX/PQ-2, AI and storage/provider/notification/scheduler, security, access, migration and test/runtime holds remain explicit.

The canonical Stage 1 opening makes **no FCTM dispositions**. Deduplicate inherited rows against each governing contract's actual text at Stage 2. If facts materially prevent a truthful Stage 1 pack, STOP and report the relevant Source 18 trigger.

## 3. Proposed Definition Actor and separation assessment

**Proposed for Stage 1 appointment:** Claude Code, Definition Actor for eventual Stages 2–4 only after the Stage 1 Intake Pack is accepted.

**Fit:** experience with the three upstream mission FCTMs and delegated kernel boundaries; can perform documentary definition without provider access.

**Material separation risk:** this same actor prepared upstream FCTMs, EIS and packages, and some upstream interpretation assumptions may be correlated. Mitigations: independent contract-text rebuild at Stage 2; MC obligation inventory checks at Stages 5 and 8; material-risk parallel specialist not author of Blueprint Sections 1–19 if Claude Code later handles EIS/engineering reviews; explicit security, concurrency/scheduler, AI and outbound provider-specialist review; Claude Code cannot verify its own implementation.

**Alternate:** Codex or another separately assessed, qualified actor; Codex availability and independence remain UNVERIFIED. Do not assume a separate Claude session provides independence. The Intake Pack must contain the detailed appointment record and final MC assessment; this preparatory grant does not waive it.

## 4. Exact publication boundaries — effective only after canonical crossing

**Actor:** Claude Code, limited to assembling the Stage 1 documentary Intake Pack.  
**Repository:** `SmartBusinessv1/smart-business`  
**Branch:** `mission/SB-P-1.15-stage1-intake-pack`, from then-verified canonical `main` at or descended from the discovery baseline.

**New files only, exact writable paths:**
1. `communication/missions/SB-P-1.15/README.md`
2. `communication/missions/SB-P-1.15/decision-log.md`
3. `communication/missions/SB-P-1.15/handover-log.md`
4. `communication/missions/SB-P-1.15/mission-control/02-stage1-intake-pack.md`
5. `communication/missions/SB-P-1.15/mission-control/03-stage1-fctm-open.md`
6. `communication/missions/SB-P-1.15/claude-code/01-stage1-intake-discovery-report.md`

**Authorized Git operations after the human-merged crossing:** inspect/verify exact paths and source SHAs; create named branch; write only six new documents; local checks/secret scan; commit/push only this branch; open **one DRAFT PR** into `main`; STOP for MC Stage 1 pack review. No self-merge or changes to the draft after submission without review instructions.

**Excluded:** `communication/live/**` (MC will reconcile separately), Product Truth, Build Plan, Completion View, contracts, `merge/**`, root `mission-control/**`, upstream mission folders, locked Blueprint/EIS/FCTM/package files, `src/**`, `supabase/**`, and MC-01. If any exact path is occupied or the baseline changes materially, STOP; do not overwrite or silently select alternative paths.

**Mandatory contents:** scope/mission ownership, contract+delegate manifest with exact blob SHAs, intake FCTM opened without row decisions, Definition Actor assessment, draft WS register (including distinct notification foundation WS-D), verification preview with Founder scenarios A/B, learning intake, initial communication and stage ledger, completion-view initiation fields reported not silently edited, provider/topology evidence limits, risk/hold register, and a proposed Stage 1 crossing/Stage 2 boundary.

**Default flags:** production mutation NOT AUTHORIZED; migration execution NOT AUTHORIZED; delivery sync/publication NOT AUTHORIZED; implementation, provider, Supabase, Lovable, scheduler and notification runtime activation NOT AUTHORIZED. A DRAFT documentation PR is not product delivery/publication.

## 5. Parallel recovery lane and next gate

GitHub #4816157, Supabase SU-494995 (including paused testing environment), Lovable Owner recovery, and Resend T-B48157 continue in parallel per MC-29; none blocks honest documentary intake by default or authorizes implementation.

**Next:** authorized-human merges MC-02 governance PR; Mission Control verifies the protected-main crossing; then Claude Code executes only the bounded six-file Stage 1 Intake Pack publication; MC separately reviews/accepts it before any Stage 2 authorization.

**STOP FOR HUMAN MERGE.**
