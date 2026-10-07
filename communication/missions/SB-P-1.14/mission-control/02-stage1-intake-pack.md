# SB-P-1.14 — Stage 1 Mission Initiation and Intake Pack

**Mission ID:** SB-P-1.14  
**Mission Name:** Business Memory, Documents & Durable Media  
**Lifecycle:** Source 18 v1.2 — Stage 1  
**Status:** DRAFT — MISSION CONTROL REVIEW / HUMAN MERGE REQUIRED  
**Intake baseline:** `main@8a44bc986d86addd6c7d97fb0c278abaa5a28ead`  
**Stage 1 owner:** Mission Control  
**Definition Actor after canonical merge:** Claude Code

## 1. Product outcome

Build Plan §10.3:

> Turn Smart Business into a trustworthy Business Memory that accepts the real documents merchants already use.

Founder experience anchors:

- merchant can provide the documents already used in real business;
- Smart Business interprets them but does not silently commit ambiguity;
- merchant reviews/corrects consequential interpretation before commit;
- the exact reviewed interpretation is what gets committed;
- the original proof remains linked and retrievable under proper authority;
- income, expense, credit and repayment all persist correctly without damaging existing sale/purchase history.

## 2. Primary source pack

| Source | Path | Intake blob |
|---|---|---|
| Build Plan | `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` | `9dfdd924b81e0eefe8f3b25a0ec2f2b78621cb2a` |
| Global Product Completion View | `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` | `ee76d920146008056781fced41be938675c4be0b` |
| Contract 3 | `docs/phase-1-mission-blueprint/smart-business-features/03_Ledger_and_Business_Memory.md` | `d8c26c073b669b561def887e36d16b19ff759205` |
| Contract 5 | `docs/phase-1-mission-blueprint/smart-business-features/05_Universal_Document_and_Receipt_Intelligence.md` | `80ac648e6764f0288f04a4591902ba029d01ab58` |
| Contract 22 | `docs/phase-1-mission-blueprint/smart-business-features/22_Shared_Product_Foundations.md` | `61e1bb91970be410e9daf1d3b80875c35f29db04` |
| Contract 25 | `docs/phase-1-mission-blueprint/smart-business-features/25_Document_Media_Storage_and_Retention_Foundation.md` | `406ce0892451d2a71e28687fd53ad5f818085242` |
| Phase 1 Institutional Memory | `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md` | `3da3d6d3f9b7fbd89de028ca0191d99484049ba9` |
| Source 18 | `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda60a93c99909c3b7a247d5427ebe256011` |

Build Plan governing section: **§10.3**.

## 3. Scope boundaries

### Contract 3 — Ledger / Business Memory maturity

SB-P-1.14 owns the four-state transaction maturity explicitly assigned by the Build Plan:

- income;
- expense;
- credit;
- repayment.

The required transaction-type widening belongs here, not in SB-P-1.16.

SB-P-1.16 later adds customer-credit-specific structures and financial-integrity capabilities on top of this mature Ledger foundation.

### Contract 5 — Universal Document Intelligence

SB-P-1.14 advances approved image/PDF/Excel/CSV/document interpretation, ambiguity handling, review/correction, preview-confirm-update, provenance, and convergence of opening-stock/import flows into the shared UDI path.

UDI may interpret and propose. It does not create independent authority or a parallel protected-write path.

### Contract 25 — governed durable media

SB-P-1.14 advances governed object/document storage, ownership, permission metadata, provenance, lifecycle/retention and retrieval foundations required by the contract.

Cloudflare R2 is a known candidate infrastructure seam in the Build Plan, but no provider is selected or activated by Stage 1.

### Search sequencing

By mission end, Business Memory may be searchable through currently available human concepts such as period, party/counterparty reference, purpose or document.

Structured Customer/Supplier-directory-indexed search remains dependent on identities established in later missions and must not be pulled forward as a new directory product.

### Later-mission seams

The following remain later-mission concerns unless Stage 2 finds a contract-delegated obligation that must be opened for compatibility:

- customer-credit-specific maturity / financial integrity — SB-P-1.16;
- supplier maturity — SB-P-1.17;
- customer/order/delivery identity maturity — later assigned missions;
- reminder/automation — SB-P-1.15;
- WhatsApp adapter — SB-P-1.20.

Stage 2 must inspect all delegates referenced by Contracts 3/5/22/25 and open delegated contracts where this mission actually touches the delegated behavior.

## 4. Draft workstream register

| Workstream | Draft scope |
|---|---|
| WS-A — Ledger / Business Memory Maturity | four-state transaction model, retrieval continuity, authoritative business fact model |
| WS-B — UDI Intake & Interpretation | approved document/file intake, parsing, ambiguity, normalized proposals, parser/import convergence |
| WS-C — Review, Confirmation & Correction | preview/correct/confirm binding, stale-target protection, correction continuity |
| WS-D — Receipt Cabinet & Provenance | original proof linkage, document provenance, business-record association, retrieval |
| WS-E — Durable Media / Object Storage | governed storage abstraction, ownership/permission metadata, lifecycle/retention, provider activation gate |
| WS-F — Search & Retrieval | period/purpose/party/document-oriented search within currently available identities and authority |
| WS-G — Audit, Idempotency, Failure & Evidence | audit continuity, dedupe/idempotency, failure behavior, observability/evidence boundaries |

Draft only; fixed at Stage 13.

## 5. Founder runtime verification anchors

### A. Document interpret → preview → confirm binding

Merchant uploads a receipt/invoice/image/PDF, corrects an ambiguous interpreted field and confirms. The committed record uses the exact reviewed interpretation. If the underlying resolvable target changes between preview and commit, Smart Business re-prompts rather than silently retargeting.

### B. Four-state Ledger recording

Owner records income, expense, credit and repayment. All four states persist and retrieve correctly without damaging existing sale/purchase history.

These anchors must be traced through the FCTM and later Experience Verification Matrix.

## 6. Upstream dependency state

### SB-P-1.12

Provides locked documentary specifications for authority, identity, permissions/isolation and protected command execution.

Implementation Authorization remains WITHHELD. Runtime behavior must not be assumed.

### SB-P-1.13

Provides locked documentary specifications for the Conversation/AI kernel, governed proposal/confirmation/action model and attachment handoff seam.

Implementation Authorization remains WITHHELD. Native conversation, AI orchestration, provider/runtime and attachment-handoff behavior must not be treated as demonstrated runtime fact.

Stage 2 must distinguish:

- specification dependency satisfied by locked artifacts;
- implementation dependency still blocked;
- evidence dependency still unverified.

## 7. Institutional Learning Intake

Opened for Stage 2.

Required status statement:

`Historical OLE backfill: NOT VERIFIED COMPLETE — dual intake in force`

The Definition Actor must consume:

- the Phase 1 Institutional Memory guide at the intake blob above;
- current canonical `organizational-learning/promotions/**`;
- SB-P-1.12 partial learning where relevant to provider/recovery/readiness;
- SB-P-1.13 partial learning where relevant to authority propagation, provider evidence, confirmation, transient media and resumable traceability.

Stage 2 records dispositions by promotion/learning reference and does not re-derive accepted history without a freshness reason.

## 8. Verification-plan preview seed

Risk areas requiring independent challenge later include:

- cross-business document/media isolation;
- authority-scoped document retrieval;
- exact interpretation/preview/confirmation binding;
- stale-target and correction behavior;
- transaction widening without historical data damage;
- idempotency/deduplication across document/import paths;
- file-type/parser safety;
- object-storage ownership metadata and durable authorization;
- retention/deletion/lifecycle behavior;
- original-proof integrity and provenance;
- provider failure/degradation;
- accidental authority leakage from AI/document interpretation.

Preferred Stage 19 candidate: Codex if eligible and independent at activation time.

## 9. Topology facts requiring fresh verification before external action

Before any later external/provider/runtime action, verify only the mutable facts required by that action, including:

- current Ledger/transaction schema and command surfaces;
- current receipt/document/import/parser surfaces;
- current file-upload and storage topology;
- current Supabase Storage or other object-storage usage;
- current Cloudflare/R2 account/provider availability if considered;
- current test/runtime environment availability;
- current GitHub Actions/assurance state;
- current provider administrative access where relevant.

Stage 1 records these as future freshness requirements; it does not perform provider activation.

## 10. Canonical crossing plan

Stage 1 crossing consists of:

- Mission Control initiation/actor-allocation record;
- this Intake Pack;
- FCTM Opening Record;
- mission README;
- decision log;
- handover log.

After human merge, Mission Control verifies the exact crossing and separately authorizes Stage 2.

## 11. Explicitly not authorized

No:

- Stage 2 population yet;
- Founder decision gate;
- Blueprint drafting;
- EIS drafting;
- implementation package;
- code;
- SQL/schema/migration execution;
- object-storage/provider selection or activation;
- Cloudflare R2 purchase/configuration;
- Supabase mutation;
- production mutation;
- delivery publication.

**STAGE 1 INTAKE PACK PREPARED — STOP FOR FOUNDER HUMAN MERGE**
