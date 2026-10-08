# SB-P-1.14 — Stage 9 EIS Creation Authorization

**Mission Control decision ID:** SB-P-1.14-MC-13  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Stage:** 9 — Engineering Implementation Specification Creation  
**Prepared:** 2026-10-08 IST  
**Canonical Stage 8 baseline:** `main@e5d12aa773b57405c91be5f6aed42264459ae356`  
**Locked Blueprint:** `docs/phase-1-mission-blueprint/completed/SB-P-1.14.md`  
**Locked Blueprint blob:** `256828d2c26fba7dab6f52975efb8b574b1563f1`  
**Canonical FCTM blob:** `01e9856aca0afdb1267230a1932fe34054449a4b`  
**Actor:** Claude Code  
**Status:** DRAFT AUTHORIZATION — EFFECTIVE ONLY AFTER FOUNDER/AUTHORIZED-HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION

## 1. Preconditions

Mission Control verifies:

- Stage 8 is COMPLETE / CANONICAL through PR #829;
- the complete SB-P-1.14 Blueprint Sections 1–21 is `APPROVED — LOCKED`;
- the locked Blueprint is under `completed/`;
- the FCTM is canonical and unchanged at 766 rows, including 563 `IN SCOPE`;
- FPDR-1 through FPDR-4 are canonical;
- all five Stage 7 specialist reports are canonical;
- Stage 7 final trigger screen is T2/T3/T6/T7/T8 NOT TRIGGERED;
- the two unresolved Founder-decision rows remain assigned to SB-P-1.19 and are not on SB-P-1.14's critical path;
- production, migration execution, provider activation, Lovable build/publish and delivery/publication remain NOT AUTHORIZED.

## 2. Authorization

After this authorization is human-merged and Mission Control verifies canonical main, Claude Code is authorized to create only the Stage 9 EIS draft for SB-P-1.14.

Required EIS path:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md`

Required Stage 9 report path:

`communication/missions/SB-P-1.14/claude-code/12-stage9-eis-creation-report.md`

The EIS status must remain:

`DRAFT — MISSION CONTROL REVIEW REQUIRED`

until Stage 10 review and the later EIS lock stage are complete.

## 3. Mandatory EIS inputs

Claude Code must read fresh canonical:

- locked SB-P-1.14 Blueprint;
- canonical 766-row FCTM;
- FPDR-1 through FPDR-4;
- Stage 6 Builder Review;
- Stage 7 Engineering Review;
- S7-SP-1 Security / Permissions / RLS & Grants review;
- S7-SP-2 Transaction & Financial Integrity review;
- S7-SP-3 UDI / AI Interpretation Safety review;
- S7-SP-4 Storage / Provider Readiness review;
- S7-SP-5 Migration / Data-Transition Safety review;
- locked SB-P-1.12 Blueprint and EIS where SB-P-1.14 consumes authority/kernel behaviour;
- locked SB-P-1.13 Blueprint and EIS where SB-P-1.14 consumes conversation, AI-gateway, attachment or governed-transaction behaviour;
- Build Plan §10.3;
- all contracts/delegates mapped by the FCTM;
- current repository architecture;
- Source 18;
- applicable institutional learning.

Do not rely on stale conversation summaries where canonical repository evidence exists.

## 4. Required EIS content

The Stage 9 EIS must define the engineering realization of the locked product intent without changing it.

At minimum, the EIS must specify:

- four-state Ledger schema and domain model for income / expense / credit / repayment;
- credit direction representation;
- repayment-target linkage to standalone credit or credit-method sale without rewriting or duplicating the sale;
- one governed create/correction command path and elimination of protected parallel direct DML;
- one canonical totals/aggregation rule across readers, summaries and exports;
- correction/audit atomicity and prior-truth preservation;
- request/command idempotency distinct from content/document fingerprinting;
- unknown-outcome reconciliation and retry semantics;
- opening-stock/import convergence without fabricating financial events;
- Universal Document Intelligence intake architecture;
- deterministic CSV/XLSX routing and parser boundaries;
- non-executing PDF/image handling and active-content safety;
- document-as-untrusted-data / instruction-data separation;
- spreadsheet formula provenance and outbound neutralization;
- interpretation schema validation and ambiguity handling;
- destination-specific FPDR-3 material fingerprint;
- preview / correction / confirmation binding;
- execution-time authority revalidation independent of confirmation;
- layered interpretation / storage / business-record success states;
- two-phase media ingest and orphan reconciliation;
- provider-independent object identity and Smart Business control-plane authority;
- revocation-safe authorization-checked retrieval and export;
- service-role / privileged-handler authority binding;
- object/media ownership metadata and provenance;
- raw voice non-retention by default and purpose-limited durable raw audio only where separately approved;
- FPDR-2 bounded discard mechanism without a feature-specific scheduler;
- Receipt Cabinet / original-proof versioning;
- search by period, party/counterparty reference and purpose within the locked 1.14 boundary;
- no authoritative customer-balance / ageing / reconciliation claim before SB-P-1.16;
- birth-safe RLS, revokes, default-ACL reconciliation and effective-access verification for every new protected object;
- migration M14-1 through M14-4 design, ordering and prerequisites;
- actual-target migration-ledger / function-identity / ACL inventory requirements;
- generated Supabase types plus hand-written domain-union/caller synchronization;
- zero historical sale/purchase rewrite;
- zero duplicate-credit backfill;
- pre-new-data rollback and post-new-data forward-fix / compatibility-recovery boundary;
- migration rehearsal assertions and backup/PITR/restore evidence needs;
- provider/runtime/storage/AI evidence gates;
- environment, secrets and credential boundaries;
- CI/test architecture, negative tests and acceptance evidence;
- graceful failure and recovery for upload, interpretation, storage, confirmation, retrieval and partial activation.

## 5. 563-row bidirectional traceability

Every one of the 563 `IN SCOPE` FCTM rows must map to one or more EIS requirement IDs.

Every EIS requirement must map back to at least one FCTM row or carry an explicit recorded reason.

Required integrity checks:

- 563/563 `IN SCOPE` rows mapped;
- 0 missing rows;
- 0 extra FCTM row IDs;
- no duplicate EIS requirement IDs;
- no orphan EIS requirement that adds product behaviour;
- no FCTM disposition/owner/build/commercial/mission-assignment change.

An orphan that adds product behaviour triggers T3.

A required product behaviour that appears infeasible or conflicts with locked truth triggers T8.

A proposed omission, deferral, pull-forward, simplification, reassignment or reclassification triggers T7.

## 6. Locked-artifact boundary

The following are READ ONLY:

- `docs/phase-1-mission-blueprint/completed/SB-P-1.14.md`;
- the FCTM;
- Founder Product Decision Records;
- all five specialist reports;
- Source 18;
- locked upstream SB-P-1.12 and SB-P-1.13 artifacts.

Claude Code may not “improve” Product Truth inside the EIS.

Where an engineering mechanism is not fixed by Product Truth, choose the simplest architecture that preserves:

- human decision ownership;
- permission/isolation truth;
- deterministic financial and inventory truth;
- provider replaceability;
- graceful failure;
- auditability/evidenceability;
- technical sustainability.

## 7. Carried holds

The EIS must preserve, model and explicitly label unresolved dependencies and evidence gates, including:

- `D12` — 225 rows;
- `D13` — 92 rows;
- `DTX` — 42 rows;
- AI provider evidence — 97 rows;
- storage activation / DR2 — 124 rows;
- retention/legal basis — 11 rows;
- later-mission dependencies — 13 rows;
- birth-safe object hardening;
- revocation-safe retrieval/export;
- privileged-handler binding;
- financial-integrity design;
- command idempotency / unknown-outcome handling;
- FPDR-3 material fingerprint;
- UDI safety;
- layered failure/ingest states;
- FPDR-2 discard mechanism;
- migration package/rehearsal evidence;
- all `UNVERIFIED — ACCESS REQUIRED` provider/runtime/production facts.

A held dependency does not disappear because the EIS can describe its intended implementation.

## 8. Migration and production boundary

Stage 9 may design:

- expected additive schema changes;
- migration ordering;
- rehearsal requirements;
- rollback / forward-fix strategy;
- test-project evidence needs;
- production-readiness evidence requirements.

Stage 9 may not execute:

- migrations;
- schema changes;
- SQL;
- Supabase mutation;
- production mutation.

Migration execution remains governed separately.

## 9. Provider boundary

Stage 9 may define:

- normalized provider interfaces;
- required provider capabilities;
- object-storage and AI-provider evidence;
- activation/disable/rollback behavior;
- secrets/configuration boundaries.

Stage 9 may not:

- purchase or activate Cloudflare R2 or any provider;
- create/change provider accounts;
- change credentials;
- select a provider as Product Truth beyond already approved direction;
- send merchant data to an unapproved provider;
- claim unverified provider settings.

Unavailable provider facts remain:

`UNVERIFIED — ACCESS REQUIRED`

## 10. Exact writable scope

After effectiveness, Claude Code uses branch:

`mission/SB-P-1.14-stage9-eis-draft`

Writable paths only:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md`
- `communication/missions/SB-P-1.14/claude-code/12-stage9-eis-creation-report.md`
- `communication/live/report.md`
- `communication/missions/SB-P-1.14/README.md`
- `communication/missions/SB-P-1.14/decision-log.md`
- `communication/missions/SB-P-1.14/handover-log.md`

No other path is writable.

## 11. Trigger handling

During Stage 9:

- T2 — conflict among approved sources;
- T3 — new merchant-visible Product Truth or orphan behaviour;
- T6 — material derived constraint that may affect product behaviour;
- T7 — omission / deferral / pull-forward / simplification / reclassification / reassignment;
- T8 — Product Truth conflict, infeasibility or material security/integrity conflict.

For T7/T8:

- keep affected rows in scope;
- stop dependent drafting;
- record exact evidence;
- return to Mission Control.

Do not resolve Founder-reserved truth inside the EIS.

## 12. Not authorized

No:

- Stage 10 acceptance;
- EIS lock;
- Stage 12 implementation package;
- implementation authorization;
- code;
- SQL/schema/migration;
- Lovable implementation;
- provider activation;
- R2 activation;
- production access/mutation;
- delivery/publication;
- OLE promotion;
- self-approval/self-merge.

## 13. Submission

Claude Code must submit one DRAFT PR containing:

- complete EIS draft;
- 563-row traceability;
- Stage 9 report;
- exact changed files;
- final head SHA;
- EIS requirement count;
- FCTM mapping count;
- orphan count;
- T2/T3/T6/T7/T8 screen;
- validation results;
- explicit list of `UNVERIFIED — ACCESS REQUIRED` provider/runtime facts.

End exactly:

**STAGE 9 EIS DRAFT SUBMITTED — AWAITING MISSION CONTROL STAGE 10 REVIEW; EIS LOCK / IMPLEMENTATION PACKAGE / IMPLEMENTATION / MIGRATION / PROVIDER / PRODUCTION NOT AUTHORIZED.**
