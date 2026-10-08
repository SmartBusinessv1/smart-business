# SB-P-1.14 — Stage 3 Canonical Reconciliation and Stage 4 Blueprint Drafting Authorization

**Mission Control decision ID:** SB-P-1.14-MC-05  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Prepared:** 2026-10-08 IST  
**Status:** DRAFT — EFFECTIVE ONLY AFTER FOUNDER HUMAN MERGE OF THIS SEPARATE AUTHORIZATION PR  
**Canonical Stage 3 merge:** PR #815  
**Canonical Stage 3 main:** `a719766d1d20c15437e150da66ba8778a06f773d`  
**Stage 4 owner:** Claude Code — appointed Stage 2–4 Definition Actor

## 1. Verified Stage 3 crossing

Mission Control verifies:

- PR #815 is human-merged;
- canonical merge commit is `a719766d1d20c15437e150da66ba8778a06f773d`;
- Founder Product Decision Record is canonical;
- FPDR-1 through FPDR-3 are effective;
- canonical FCTM remains 766 rows;
- reconciled disposition totals are 563 `IN SCOPE`, 45 `ASSIGNED TO LATER MISSION`, 104 `DELEGATED`, 32 `NOT APPLICABLE`, 20 `OUT OF BUILD SCOPE`, 2 `UNRESOLVED FOUNDER DECISION`, 0 `ESCALATED`;
- `3-§9-12` is the only Stage 3 T7 mission-assignment reconciliation and now belongs to SB-P-1.16;
- Stage 3 is COMPLETE / CANONICAL;
- Stage 4 has not yet begun;
- no Blueprint file exists yet at `docs/phase-1-mission-blueprint/active/SB-P-1.14.md`.

## 2. Stage 4 authorization

After human merge of this authorization PR, Claude Code may prepare the **DRAFT Product Blueprint Sections 1–19** for SB-P-1.14 at:

`docs/phase-1-mission-blueprint/active/SB-P-1.14.md`

The Blueprint must be assembled by reference to canonical Product Truth rather than re-authoring requirements.

Claude Code prepares only; Mission Control performs Stage 5 Product Review.

## 3. Canonical inputs

Use:

- canonical Stage 2 Mission Truth Pack;
- canonical reconciled 766-row FCTM;
- source-first obligation inventory;
- Delta evidence;
- Institutional Learning Intake;
- Founder Product Decision Record FPDR-1 through FPDR-3;
- Stage 3 gate review;
- Build Plan §10.3 and all other applicable Build Plan pointers;
- Contracts 3, 5, 22 and 25;
- all FCTM-mapped delegated/inherited contract sections;
- Global Product Completion View;
- locked SB-P-1.12 and SB-P-1.13 specifications as dependency authority only;
- active governance and validated OLE promotions.

Do not replace source truth with summaries.

## 4. Blueprint drafting controls

The Blueprint must:

1. use the canonical Metadata, Mission Snapshot and Sections 1–19 structure;
2. preserve every FCTM obligation and disposition;
3. map every `IN SCOPE` row to an explicit mission obligation and acceptance path;
4. preserve `ASSIGNED TO LATER MISSION`, `DELEGATED`, `OUT OF BUILD SCOPE`, `NOT APPLICABLE` and unresolved-decision semantics without converting them into hidden scope;
5. place full later-mission/delegate accounting in Section 11;
6. seed Founder runtime scenarios and approved experience anchors in Section 15 by reference only;
7. include in Section 19 an FCTM row-ID → Blueprint section → source mapping;
8. carry all Stage 3 Founder decisions exactly;
9. keep legal/privacy retention durations out of the Blueprint unless already established by an approved source.

## 5. Founder-decision obligations to preserve

### FPDR-1 — Ledger / customer-credit boundary

The Blueprint must preserve:

- SB-P-1.14 owns the four Ledger states: income, expense, credit and repayment;
- existing `sale + payment_method=credit` history is not silently rewritten or reinterpreted;
- SB-P-1.14 records and retrieves underlying credit/repayment Ledger facts;
- authoritative per-customer owed-balance truth, including the `3-§9-12` experience, belongs to SB-P-1.16;
- repayment is settlement/cash movement against credit, not new revenue;
- totals and summaries must avoid double counting.

Do not pull customer-credit-specific balances, ageing or reconciliation into SB-P-1.14.

### FPDR-2 — Minimum retention / raw voice

The Blueprint must preserve:

- rejected, abandoned or expired unconfirmed uploads are retained only for a short bounded operational grace period needed for retry/recovery, dispute handling or security investigation;
- they are discarded after that period unless another approved legal/hold basis applies;
- the exact operational duration is implementation/configuration detail and is not a legal retention period;
- raw voice audio is not durably retained by default;
- transcript/structured meaning, resulting records and required audit/provenance may persist under their own approved policies;
- durable raw-audio retention requires a separately justified approved product purpose.

### FPDR-3 — Material changed-target re-prompt

The Blueprint must preserve:

- preview-to-commit re-prompt occurs when a target change could alter merchant business meaning or consequence;
- examples include changed counterparty, changed linked credit entry, changed opening-stock item, or a newly detected duplicate with meaningful double-recording risk;
- irrelevant internal state changes do not force repeat confirmation;
- permission, authority and revocation revalidation remain independently binding.

## 6. Upstream dependency boundary

Carry the exact dependency truth for SB-P-1.12 and SB-P-1.13:

- specification: available;
- implementation: not complete;
- evidence: not complete.

No temporary parallel authority/permission system.

No claim that conversation, AI, confirmation, governed transaction commands, isolation, media handoff or execution-time revalidation is already working merely because it is specified.

## 7. Required Blueprint treatment of mission boundaries

Preserve:

- four-state Ledger / Business Memory / UDI / Receipt Cabinet / governed durable media → SB-P-1.14;
- authoritative customer-credit balances / ageing / reconciliation → SB-P-1.16;
- Ask CFO / Reminder / Daily Intelligence → SB-P-1.15;
- Supplier maturity → SB-P-1.17;
- structured Customer-directory maturity → SB-P-1.18;
- Voice Plus / broader Support completion → SB-P-1.19;
- WhatsApp adapter → SB-P-1.20.

No feature-specific scheduler is created in SB-P-1.14. Scheduled execution remains dependent on the shared SB-P-1.15 Scheduler foundation unless a later T7 gate changes that truth.

## 8. Security, privacy, data-integrity and failure requirements

Sections 1–19 must explicitly carry, where mapped by the FCTM:

- cross-business document/media isolation;
- permission-scoped retrieval;
- create ≠ read-all/export-all;
- exact preview/confirmation binding;
- material changed-target re-prompt;
- execution-time authority revalidation;
- no second protected transaction-write path;
- idempotency/deduplication;
- immutable-original / correction continuity;
- provenance and audit attribution;
- malformed/untrusted document handling;
- document-borne prompt/instruction resistance;
- object-storage ownership/authorization metadata;
- retention/deletion/lifecycle controls without invented legal periods;
- provider/storage outage behavior;
- opening-stock/import convergence into UDI;
- truthful four-state Ledger totals without double counting.

Provider/runtime facts that remain unavailable are `UNVERIFIED — ACCESS REQUIRED`.

## 9. Stage 4 stop conditions

Any of the following stops dependent drafting and returns to Mission Control:

- new Product Truth conflict;
- required scope reassignment;
- new Founder decision;
- proposed new runtime scenario;
- need to alter the canonical FCTM;
- inability to preserve FPDR-1, FPDR-2 or FPDR-3 faithfully;
- discovery that approved requirements are infeasible without changing behavior.

Such events invoke T3/T7/T8 as applicable.

## 10. Not authorized

No:

- Sections 20/21;
- Stage 5 approval;
- Builder Review;
- Engineering Review;
- EIS;
- implementation package;
- application code;
- SQL/schema/migration;
- object-storage/provider activation;
- Cloudflare R2 purchase/configuration;
- Supabase/provider mutation;
- production access;
- Lovable build/publish;
- OLE promotion;
- Blueprint lock;
- self-merge.

## 11. Stage 4 completion gate

Claude Code must submit one DRAFT PR containing:

- complete Blueprint Metadata + Mission Snapshot + Sections 1–19;
- Section 11 disposition accounting;
- Section 15 Founder experience/runtime anchors;
- Section 19 FCTM mapping;
- Stage 4 drafting report;
- mission status/log updates;
- exact final head SHA;
- exact changed files;
- T3/T7/T8 stop-trigger findings;
- available validation/check evidence.

Mission Control then performs Stage 5 Product Review.

**STAGE 4 BLUEPRINT AUTHORIZATION PREPARED — STOP FOR FOUNDER HUMAN MERGE**
