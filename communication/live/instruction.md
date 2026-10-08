# SMART BUSINESS MISSION CONTROL

# Instruction — SB-P-1.14 Stage 3 Founder Decision Gate

**Mission ID:** SB-P-1.14  
**Mission Name:** Business Memory, Documents & Durable Media  
**From:** Smart Business Mission Control  
**To:** Founder Riyas PK / Mission Control dialogue  
**Stage:** Source 18 v1.2 Stage 3 — Founder Decision Gate  
**Status:** AUTHORIZATION PENDING HUMAN MERGE  
**Date:** 2026-10-08  
**Canonical Stage 2:** PR #813, `main@44a89d3821e4864676f6c8609bb8ca8c32bbb815`

---

# Mission Objective

Resolve only the genuine Founder decisions identified by the canonical Stage 2 Truth Pack.

Do not draft the Blueprint yet.

Do not implement anything.

---

# Canonical Decision Inputs

Read:

- `communication/missions/SB-P-1.14/founder/01-stage2-decision-brief.md`
- `communication/missions/SB-P-1.14/claude-code/01-stage2-mission-truth-pack.md`
- `communication/missions/SB-P-1.14/claude-code/05-stage2-delta-evidence.md`
- `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md`
- `communication/missions/SB-P-1.14/mission-control/05-stage3-founder-decision-gate-authorization.md`

---

# Founder Decision Scope

## FDB-1 — Four-state Ledger / customer-credit boundary

Decide only the unresolved product semantics:

1. whether SB-P-1.14 may answer per-counterparty "what is still owed?" from its Ledger entries, or whether authoritative customer balance truth waits for SB-P-1.16;
2. how existing `sale + payment_method=credit` history should behave once the separate `credit` Ledger state exists;
3. whether SB-P-1.14 `credit` includes amounts the business owes as well as amounts owed to the business;
4. how credit and repayment affect merchant-visible totals without double counting.

Preserve the already-approved boundary that four-state Ledger widening is SB-P-1.14 and customer-credit-specific records/balances/ageing/reconciliation mature in SB-P-1.16 unless the Founder explicitly changes it.

## FDB-2 — Retention purpose for unconfirmed originals and raw voice

Decide:

1. whether rejected, abandoned or expired unconfirmed uploads are retained, and if so for what purpose;
2. whether any raw voice audio is retained once governed storage exists, and if so for what product purpose.

Do not decide or invent a legal retention duration here. Legal/privacy retention validation remains governed separately.

## FDB-3 — Scenario A changed-target definition

Decide what product-significant target changes require a fresh merchant review/re-prompt after preview and before commit.

Candidate target changes include:

- matched customer/supplier or other counterparty;
- linked credit entry selected for repayment;
- opening-stock inventory item;
- newly detected duplicate candidate.

The decision should protect truthful binding without creating unnecessary repeated confirmation for irrelevant internal changes.

---

# Existing decisions that are NOT reopened

Do not ask the Founder again about:

- whether four-state Ledger widening belongs to SB-P-1.14;
- whether customer-credit-specific maturity belongs to SB-P-1.16;
- whether SB-P-1.12/SB-P-1.13 specifications may be consumed while implementation remains suspended;
- whether a feature-specific scheduler may be created (it may not);
- whether AWS S3 transient staging is Product Truth (it is not);
- whether Cloudflare R2/provider activation is authorized (it is not);
- whether UDI may bypass governed authority or transaction commands (it may not).

These remain governed by canonical records unless the Founder explicitly chooses to change them during this gate.

---

# Completion

After Founder decisions are stated:

- record exact decisions and rationale;
- identify affected FCTM rows;
- identify any T7 effects;
- prepare a Founder Product Decision Record / Stage 3 reconciliation package;
- stop before Stage 4.

No direct source-contract, Blueprint, EIS, code, SQL, migration, provider/storage, production, OLE or GPCV mutation is authorized here.

**Required status after dialogue:**

**STAGE 3 FOUNDER DECISIONS CAPTURED — AWAITING CANONICAL DECISION-RECORD RECONCILIATION**
