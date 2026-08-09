# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — FOCUSED SECURITY RE-REVIEW

**Instruction ID:** instruction1.71  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Authorized By:** Mission Control  
**Executing Room:** Security & Permissions Architecture  
**Mission Status:** ACTIVE AFTER MERGE  
**Implementation Authority:** NONE  
**Build Authority:** NONE

---

## 1. Mission Objective

Perform a focused Security & Permissions Architecture re-review of the revised:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

Revision 2.0 was produced under `communication/live/instruction1.70.md` after reconciliation of:

- `communication/live/report1.75.md` — Claude Code Engineering Review;
- `communication/live/report1.76.md` — original Security & Permissions Architecture Review.

Claude Code has now returned:

`communication/live/report1.77.md`

with verdict:

`READY FOR SECURITY RE-REVIEW`

This mission is a verification and design-lock review only.

Do not implement.

---

## 2. Canonical Inputs

Read the latest merged versions of:

1. `communication/live/instruction1.70.md`
2. `communication/live/report1.75.md`
3. `communication/live/report1.76.md`
4. `communication/live/report1.77.md`
5. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`
6. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
7. `docs/research/kerala-market-catalog-glossary.md`

The original sixteen Security findings in `report1.76.md` remain the review baseline.

---

## 3. Review Standard

Verify whether Revision 2.0 actually closes the security findings in a concrete, internally consistent, buildable way.

Do not accept a finding as resolved merely because `report1.77.md` labels it resolved.

Check the revised EIS itself.

Where useful, compare the design against the current canonical repository architecture and previously verified Supabase authorization model.

Do not redesign Product Truth.

Do not introduce new product scope.

---

## 4. Mandatory Re-Review Areas

Re-review all original Security findings, with special attention to:

### 4.1 Upload and Parser Trust Boundary

Verify:

- CSV and XLSX parser choices;
- hard compressed and decompressed limits;
- worksheet, row, column, cell-length and runtime limits;
- malformed/encrypted/macro-enabled workbook handling;
- formula handling;
- external links and embedded content;
- CSV formula-injection protections;
- no authoritative browser-side parsing.

### 4.2 Server Authorization Boundary

Verify:

- authenticated TanStack server-function design;
- caller JWT-scoped Supabase client usage;
- actor and business re-derivation on preview and commit;
- no trust in client-provided business/actor/role/permission identifiers;
- no service-role credential as the authorization model;
- existing governed Catalog commands remain mutation authority.

### 4.3 D-058 Import Permissions

Verify the fail-closed Phase 1 contract:

- Owner: allowed;
- Manager: denied until real approved permission infrastructure exists;
- Employee: denied;
- no frontend/display-role/JWT-metadata shortcut grants import authority.

### 4.4 Reference Cost Confidentiality

Verify Reference Cost cannot leak through:

- upload preview;
- parsed row snapshot;
- quarantine/correction data;
- duplicate results;
- audit evidence;
- logs;
- downloadable correction output;
- final outcome payload.

### 4.5 Import Persistence and Business Isolation

Verify the proposed import batch/row support-table design, including:

- authoritative `business_id` derivation;
- exact RLS posture;
- exact grants;
- Owner-only import access under current Phase 1 capability;
- cross-business denial;
- foreign/nonexistent batch-ID indistinguishability where applicable;
- row/batch lifecycle integrity.

### 4.6 Idempotency, Replay and Concurrency

Verify:

- batch-level commit-once semantics;
- row-operation idempotency keys persisted before mutation;
- retry reuse of the same row keys;
- concurrent commit serialization;
- partial retry cannot recreate successful products;
- keys cannot cross business/batch/row/operation boundaries.

### 4.7 Duplicate Resolution

Verify:

- `catalog_products_search` semantics are used correctly;
- only exact identity matches become duplicate conflicts;
- fuzzy results cannot create false duplicate authority;
- cross-business identity existence is not disclosed;
- automatic overwrite remains forbidden;
- `Update existing product` is correctly removed from Build Now import scope.

### 4.8 Preset Isolation

Verify:

- Selling Unit and Category presets remain version-controlled application suggestions;
- no mutable global master-data table is introduced;
- unused presets create no database rows;
- Category selection only creates/selects business-owned categories after explicit merchant action;
- aliases support search only and do not silently mutate merchant wording.

### 4.9 Audit and Sensitive Payload Handling

Verify:

- batch/row attribution is adequate;
- general audit does not dump raw spreadsheets;
- unknown columns/unsafe content are not persisted;
- sensitive values do not leak to ordinary logs or Employee-visible surfaces.

### 4.10 Raw File Retention

Verify the Phase 1 decision:

- raw upload is processed transiently;
- no Supabase Storage bucket is required for the import source file;
- raw file is not retained after the processing lifecycle.

---

## 5. Mandatory Decision — Accepted Limitation In `report1.77.md`

`report1.77.md` records one explicit accepted limitation:

The proposed `catalog_import_batches` and `catalog_import_rows` support tables are ordinary authenticated-role RLS tables in order to avoid creating a twentieth `SECURITY DEFINER` Catalog command.

Under the proposed design, a technically sophisticated authorized business user could potentially bypass the intended server-function UI flow and alter bookkeeping rows belonging to their own business through the ordinary database REST surface.

Claude Code argues that:

- RLS prevents cross-business access;
- forged bookkeeping rows cannot create, modify or delete actual Catalog Product Truth;
- real Product mutations still require the existing governed Catalog commands;
- the bounded consequence is corruption of that business's own import-history/bookkeeping display.

Security & Permissions Architecture must make an explicit decision on this trade-off.

Allowed outcomes for this item:

### `ACCEPTED FOR PHASE 1`

Only if Security concludes the blast radius is genuinely bounded and the design does not create privilege escalation, cross-business leakage, Product Truth mutation authority, or a material audit-trust failure.

### `CHANGES REQUIRED`

If Security concludes the bookkeeping rows must not be directly mutable through the authenticated REST surface.

If changes are required, propose the narrowest architecture that:

- preserves exactly 19 public Catalog commands;
- does not expose service role to the browser;
- does not create a generic privileged mutation bypass;
- preserves business isolation;
- does not redesign Product Truth.

Do not authorize a twentieth public Catalog command in this review.

---

## 6. Architecture Boundaries That Remain Locked

This re-review must preserve:

- exactly 19 public Catalog commands;
- no `reactivate_catalog_category` in this mission;
- no automatic duplicate overwrite;
- no direct browser Catalog-table writes;
- no browser service-role exposure;
- no unit conversion;
- no automatic Inventory-row creation;
- no compulsory global category taxonomy;
- no product auto-categorization;
- no publish/deploy/domain cutover authorization.

---

## 7. Required Verification Output

Create:

`communication/live/report1.78.md`

The report must include:

1. executive verdict;
2. original SEC-1 through SEC-16 resolution verification;
3. explicit accepted-limitation decision;
4. any residual blocker or required EIS correction;
5. confirmation that Product Truth and the 19-command boundary remain unchanged;
6. confirmation that no implementation occurred;
7. Next Logical Step.

For every original Security finding, use one of:

- `VERIFIED RESOLVED`
- `PARTIALLY RESOLVED — CHANGE REQUIRED`
- `NOT RESOLVED — BLOCKER`

For the accepted limitation, use exactly one of:

- `ACCEPTED FOR PHASE 1`
- `CHANGES REQUIRED`

---

## 8. Final Verdict Options

Return exactly one overall verdict:

### `SECURITY READY FOR BUILD LOCK`

Use only if:

- all original Security blockers are verified closed;
- no new blocker is introduced by Revision 2.0;
- the accepted limitation is either accepted for Phase 1 or replaced by an equally bounded design that is already fully specified in the EIS.

### `SECURITY CHANGES REQUIRED BEFORE BUILD LOCK`

Use if any security-contract change remains necessary.

### `SECURITY STOPPED — EVIDENCE GAP`

Use only if the re-review cannot reach a defensible conclusion from the available canonical evidence.

---

## 9. Authority Boundary

This mission does not authorize:

- implementation;
- code changes;
- dependency installation;
- migrations;
- schema or RLS changes;
- Supabase writes;
- Lovable changes;
- Build Mode;
- publish/deploy/domain cutover;
- self-merge.

Security may recommend changes, but Mission Control controls the next authorization.

---

## 10. Communication Protocol

After execution:

1. create `communication/live/report1.78.md`;
2. open one completion PR containing only the Security re-review report, unless a documentation-only correction is explicitly necessary to accurately report the finding;
3. do not self-merge;
4. stop and return the PR to Founder/Mission Control.

The report must be merged before Mission Control relies on it for Build Lock.

---

## Next Logical Step

If the Security re-review returns `SECURITY READY FOR BUILD LOCK` and the report is human-reviewed and merged, Mission Control may then evaluate whether to issue the canonical SB-P-1.11-GC-1 Build Mode authorization.

If Security returns changes required, Mission Control must resolve those changes before Build Mode.