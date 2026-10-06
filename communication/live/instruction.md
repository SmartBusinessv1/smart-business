# SMART BUSINESS MISSION CONTROL

# Instruction — SB-P-1.13 B6-01/B6-02 Canonical Reconciliation

**Mission ID:** SB-P-1.13  
**From:** Smart Business Mission Control  
**To:** Claude Code  
**Status:** AUTHORIZATION PENDING HUMAN MERGE  
**Date:** 2026-10-06 IST  
**Canonical Stage 6:** PR #783, `main@8d9fb3af6e1af9943a970d6ca75b8500b8d46715`

---

# Objective

Prepare one narrow post-Stage-6 reconciliation package.

Resolve only:

1. B6-01 — SB-P-1.12 authority/business-context dependency annotation.
2. B6-02 — canonical Founder decision for existing sale + payment_method=credit.

Do not begin Stage 7.

---

# B6-01

Use the locked SB-P-1.12 EIS §19.5 as controlling authority.

Correct Blueprint §12 and §15.1 so Scenario B remains WhatsApp-independent but is not falsely described as independent of SB-P-1.12 authority/business-context infrastructure.

Derive the exact FCTM rows that require `D12`.

Do not assume 139.

For each newly annotated row report:

- row ID;
- business-scoped reason;
- consumed SB-P-1.12 capability;
- source/Blueprint pointer;
- previous dependency;
- new dependency.

Preserve every other FCTM field.

---

# B6-02

Create:

`communication/missions/SB-P-1.13/founder/03-post-stage6-founder-product-decision-record.md`

Record the Founder decision exactly:

`Approved — allow existing credit-payment-method sales in SB-P-1.13; mature credit/repayment remains SB-P-1.14.`

Meaning:

- existing sale + payment_method=credit may be recorded here;
- no mature credit balance/owed-state/repayment/four-state Ledger state here;
- repayment remains SB-P-1.14;
- ambiguous statements that require unavailable mature credit truth must clarify or remain blocked.

Assign a new Founder Decision ID and annotate only exact affected Blueprint/FCTM rows.

Do not alter FPDR-1 through FPDR-4.

---

# Exact Writable Paths

Repository:

`SmartBusinessv1/smart-business`

Locked branch:

`mission/SB-P-1.13-b6-reconciliation`

Effective only after human merge of this authorization PR.

Writable:

- `docs/phase-1-mission-blueprint/active/SB-P-1.13.md`
- `communication/missions/SB-P-1.13/claude-code/02-stage2-populated-fctm.md`
- `communication/missions/SB-P-1.13/founder/03-post-stage6-founder-product-decision-record.md`
- `communication/missions/SB-P-1.13/claude-code/09-b6-reconciliation-report.md`
- `communication/live/report.md`
- `communication/missions/SB-P-1.13/README.md`
- `communication/missions/SB-P-1.13/decision-log.md`
- `communication/missions/SB-P-1.13/handover-log.md`

Read-only:

- prior Founder records;
- Stage 6 report;
- Mission Control records;
- contracts;
- Build Plan;
- SB-P-1.12 EIS;
- GPCV/OLE;
- app/code/SQL/migrations/config;
- Sections 20–21.

---

# Required Evidence

Return:

- DRAFT PR number;
- final head SHA;
- changed files;
- exact B6-01 newly-D12 row count and row-ID list;
- exact B6-02 annotated row count and row-ID list;
- proof FCTM remains 974 rows;
- proof no owner/disposition/build/commercial field changed;
- Blueprint section diffs;
- Founder Decision ID;
- T2/T3/T6/T7/T8 screen;
- local/check evidence.

End exactly:

**B6-01/B6-02 CANONICAL RECONCILIATION DRAFT PREPARED — AWAITING MISSION CONTROL REVIEW; STAGE 7/SECTIONS 20–21/BLUEPRINT LOCK/EIS/IMPLEMENTATION/PRODUCTION NOT AUTHORIZED.**
