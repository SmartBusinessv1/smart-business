# SB-P-1.14 — Stage 10 Consolidated EIS Refinement Authorization

**Mission Control decision ID:** SB-P-1.14-MC-16  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Lifecycle:** Stage 10 — EIS Review / Refinement  
**Prepared:** 2026-10-08 IST  
**Canonical baseline:** `main@40bfe25cb9a0ca6bf84b9bdc4136f38b29d8d133`  
**Draft EIS PR:** #831  
**Reviewed Stage 9 head:** `254e40a723e4c74af69d425cb918bb03dc9817e2`  
**Reviewed EIS blob:** `20fd97177348ad9b02bbb8d1be9e53f05ad18bde`  
**Stage 10 specialist evidence:** canonical through PR #835  
**Founder T7 Security disposition:** canonical through PR #836  
**Owner:** Claude Code  
**Status:** DRAFT AUTHORIZATION — EFFECTIVE ONLY AFTER FOUNDER / AUTHORIZED-HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION

## 1. Authorization

After this authorization becomes canonical, Claude Code may perform **one consolidated documentary refinement pass** on PR #831.

The purpose is to correct the accepted Stage 10 findings without reopening Product Truth, changing locked FCTM product-definition fields, or beginning implementation.

## 2. Required branch synchronization

Before editing the EIS, Claude Code must synchronize the existing PR #831 branch:

`mission/SB-P-1.14-stage9-eis-draft`

with canonical:

`main@40bfe25cb9a0ca6bf84b9bdc4136f38b29d8d133`.

A merge of current `main` into the PR branch is authorized for this synchronization.

If overlapping mission governance/status files conflict, preserve the current canonical `main` version unless this instruction explicitly authorizes a new update. Do not discard the Stage 9 EIS or Stage 9 report. Do not force-push rewritten history unless ordinary merge synchronization is technically impossible; if it is impossible, STOP and return to Mission Control.

After synchronization, PR #831 remains the same DRAFT pull request.

## 3. Consolidated required refinement set

Claude Code must refine the EIS finding-by-finding.

### Security / permissions / RLS & grants

**R10-SEC-01 / MC10-PRE-01** — replace uniform “RLS enabled” language with object-type-specific born-hardened semantics for protected tables, views, functions/RPCs, sequences, creator-role default privileges, ownership/security mode/search-path/EXECUTE controls and effective-access verification.

**R10-SEC-02** — state explicitly that SB-P-1.14 provenance is domain provenance only; authority allow/deny truth and durable security-denial handling consume the locked SB-P-1.12 authority-event/denial contract and must not become a parallel mutable authority ledger.

**R10-SEC-03** — strengthen Full Assurance / verification requirements to cover complete effective access, callable surfaces, exact function signatures/overloads, owners/security mode/search path, view semantics, sequence access, creator/default ACLs, bypass roles, legacy callable retirement, privileged-handler inventory, direct-DML negatives, cross-business/role/revocation negatives and stale-link/retrieval tests.

### Transaction / financial integrity

**R10-FI-01 / MC10-PRE-02** — one canonical classification/aggregation source must preserve truthful distinct sales, generic income, purchases and generic expense measures. Broader combined rollups may exist only when explicitly named. Credit-method sale counts once; standalone credit does not become sales/income; repayment is never revenue. Dashboard, summaries, conversation answers, exports and migration regression evidence must consume the same classification truth.

**R10-FI-02** — the governed repayment command must revalidate inside the commit transaction that the target still exists, belongs to the same business and remains an FPDR-4-valid target (standalone credit or current sale with `payment_method=credit`). A material target change stops and returns to the existing clarification/review/re-confirmation path. Do not introduce SB-P-1.16 balance/ageing/allocation/reconciliation rules.

**R10-FI-03** — explicitly close all ordinary authenticated direct mutation paths: no direct INSERT/UPDATE/DELETE on protected Ledger transactions; correction-event records are append-only and not directly INSERT/UPDATE/DELETE-capable by ordinary clients; only approved governed commands may mutate; verification must inspect actual privileges, RLS/policies, executable functions/RPCs and legacy paths.

### UDI / AI interpretation safety

**R10-AI-01** — make spreadsheet formula protection type-sensitive: never evaluate inbound formulas; retain formula/cached-value provenance; neutralize only untrusted textual values that spreadsheet software could interpret as formulas; preserve genuine typed numeric/date/boolean values; require round-trip and negative-number regression tests.

**R10-AI-02** — explicitly deny document-controlled outbound fetches, URL/resource loading, callbacks and automatic recursive embedded-object traversal. Any supported embedded object must re-enter the normal untrusted intake/validation pipeline.

**R10-AI-03** — bind every UDI provider call to the currently accepted versioned SB-P-1.13 provider configuration identity; material provider/model/account/routing/data-control change invalidates affected evidence and blocks merchant-document flow until re-verification; deterministic non-AI paths remain available.

**R10-AI-04** — no separate financial model change; implement R10-FI-01 strongly enough that AI answers and exports cannot relabel generic income as sales or generic expense as purchases.

**R10-AI-05** — make English, Malayalam, Manglish/transliterated and mixed/code-switched prompt-injection fixtures explicit, including OCR text, filenames/metadata, headers and line items, proving injected instructions remain data and cannot alter tool/destination/authority.

### Storage / provider readiness

**R10-STO-01** — server-mediated retrieval is the safe default for zero-window revocation. Direct bearer signed URLs may satisfy the requirement only if provider-specific evidence proves an immediately revocable or authorization-indirection mechanism. Short expiry/authorized issuance alone is insufficient. An intentional non-zero revocation window remains a T3 candidate.

**R10-STO-02** — legal/dispute hold must prevent lifecycle eligibility before provider deletion; held transient objects must be excluded from expiring lifecycle treatment; release of hold is an authorized transition. Asynchronous provider deletion must reconcile to durable Smart Business deletion/discard proof without retaining deleted content. “Held metadata + missing object” is an integrity incident.

**R10-STO-03** — merged into R10-SEC-01; do not create duplicate or conflicting security wording.

**R10-STO-04** — specify secure-upload outcomes rather than asserting unverified R2 mechanics: authorized key, bounded size, expected checksum/integrity evidence, narrow upload authority, server-side post-upload verification and origin-limited CORS. Exact key/length/checksum presign/header enforcement remains conditional on DR2 provider evidence.

### Migration / data-transition safety

**R10-MIG-01** — merged into R10-SEC-01; preserve same-migration birth hardening and creator-default/effective-access verification.

**R10-MIG-02** — explicitly consume the locked multi-row import contract: row/bounded-chunk commit, fresh authority before each transaction, stable business-scoped row fingerprint/outcome, committed-row preservation after revocation, stop later rows, completed/failed/remaining accounting, authorized duplicate-safe resumption, no duplicate Ledger/opening-stock writes. Opening stock still terminates through `create_inventory_movement`.

**R10-MIG-03** — require a target-safe index-build/recovery strategy based on real table size/activity and lock window; low-downtime/concurrent build where necessary; account for non-transactional DDL behavior; detect/recover invalid or failed index artifacts; rehearse concurrent read/write; capture query-plan/index-validity evidence; do not use `IF NOT EXISTS` as proof of definition correctness.

**R10-MIG-04** — require reproducible generated-type provenance: exact generator procedure/tool version, source project/environment and migration/schema identity, generated diff/signature comparison, hand-written union/caller/UI synchronization, old-app/new-schema compatibility where that state can exist, new-app/final-schema compatibility and no breaking RPC deployment before callers are ready.

**R10-MIG-05** — merged into R10-FI-01; migration regression must separately prove historical sale and purchase classifications/totals remain unchanged.

## 4. Trigger discipline

Founder has already resolved the finding-scoped Security T7 in favor of restorative refinement.

During refinement, Claude Code must screen every change for T2/T3/T6/T7/T8.

If a required correction would:
- create new Product Truth;
- change merchant-visible behavior beyond already-approved truth;
- change FCTM disposition/build commitment/commercial classification/mission assignment;
- defer/reassign an approved requirement;
- require an intentional non-zero post-revocation window;
- prove an approved security/integrity invariant infeasible;

STOP the affected item and return it to Mission Control. Do not solve it by silently narrowing the EIS.

## 5. Writable scope

Authorized content changes:

1. `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md`
2. `communication/missions/SB-P-1.14/claude-code/13-stage10-eis-refinement-report.md`

Branch synchronization may also reconcile pre-existing PR #831 overlaps with canonical `main`, but those conflict resolutions must preserve canonical main and must not introduce unrelated governance changes.

The locked Blueprint, FCTM, Founder records, specialist reports and upstream locked EIS contracts are READ ONLY.

## 6. Required completion report

The refinement report must include:

- synchronized base/main SHA and resulting PR #831 head;
- exact EIS blob;
- exact changed-file list;
- finding-by-finding disposition for every R10 item above;
- mapping from each correction to exact EIS requirement IDs and affected FCTM rows;
- confirmation that 563/563 IN SCOPE traceability remains complete with 0 missing/extra/orphan;
- confirmation that locked FCTM product-definition fields did not change;
- T2/T3/T6/T7/T8 screen after refinement;
- unresolved evidence holds and all `UNVERIFIED — ACCESS REQUIRED` facts;
- CI/check evidence if any, with absence never treated as pass.

## 7. Prohibited work

This authorization does not permit:

- implementation/code changes;
- SQL/schema/migration creation or execution;
- provider configuration/activation;
- R2/Supabase/AWS mutation;
- production access/mutation;
- delivery/publication;
- Stage 10 acceptance;
- EIS lock;
- implementation package preparation;
- self-merge.

## 8. Return gate

Return the refined DRAFT PR #831 and the Stage 10 refinement report to Mission Control.

Mission Control will then:
- review each accepted specialist finding;
- request targeted delta specialist confirmation where needed;
- re-run FCTM completeness/traceability;
- determine Stage 10 acceptance separately.

**STOP FOR MISSION CONTROL DISPOSITION.**
