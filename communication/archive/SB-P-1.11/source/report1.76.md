# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — BUILD NOW GAP CLOSURE

## SECURITY & PERMISSIONS ARCHITECTURE REVIEW

**Report ID:** report1.76  
**Review Scope:** Security, Authorization, Business Isolation and Abuse Boundaries  
**Implementation Authority:** NONE  
**Build Authority:** NONE  
**Document Reviewed:** `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`  
**Historical Transport:** Founder-mediated copy/paste  
**Registration:** Retrospective under `communication/live/instruction1.69.md`

> Historical accuracy note: this review was returned before this repository record was created. It is preserved here as the Security & Permissions Architecture evidence supplied back to Mission Control. This file must not be interpreted as proof that GitHub carried the original instruction before execution.

---

# 1. Executive Status

The Gap Closure EIS is directionally aligned with the approved Smart Business security model.

It correctly preserves:

- server-side bulk-import orchestration;
- no direct browser writes to protected Catalog tables;
- no browser exposure of service-role credentials;
- explicit upload → preview → confirmation → commit stages;
- business-scoped Product Truth;
- no automatic duplicate overwrite;
- ordinary Catalog command governance for successful mutations;
- Employee denial for import;
- conditional Manager authorization under D-058;
- separate Reference Cost authority;
- quarantined invalid rows instead of live Product Truth;
- presets as application suggestions rather than mutable global merchant data.

However, several security-critical implementation boundaries remain intentionally unresolved in the merged EIS.

The document itself requires Engineering to resolve before Build Mode:

- the exact server-side parser/commit boundary;
- whether import persistence tables are required and their exact RLS;
- file-size and row-count limits;
- the XLSX parser and malicious-workbook controls;
- batch and row idempotency;
- partial-failure retry behaviour;
- D-058 Manager authorization representation;
- Reference Cost authorization.

These questions must be converted into binding implementation safeguards before Build Lock.

---

# 2. Security Blockers

## SEC-B1 — Upload Trust Boundary Is Not Yet Closed

**Severity:** BLOCKER

The EIS permits `.csv` and `.xlsx`, but leaves maximum file size, row count, parser, and hostile-workbook handling to later engineering definition.

An uploaded spreadsheet is untrusted attacker-controlled input.

### Required safeguard

The implementation contract must state:

> The browser never parses an uploaded spreadsheet for authoritative import decisions.
>
> CSV/XLSX files are processed only inside an authenticated server-side import boundary.
>
> The server accepts only `.csv` and `.xlsx`.
>
> Extension alone is not trusted.
>
> The server verifies the accepted content format before parsing.
>
> Unsupported, malformed, encrypted, password-protected, macro-enabled, archive-disguised, or structurally invalid files are rejected before Catalog mutation.
>
> File-size, decompressed-size, worksheet-count, row-count, column-count, cell-length, and parser-runtime limits are mandatory hard limits, not UI-only guidance.
>
> Exceeding any limit terminates parsing before mutation.
>
> The original filename is treated only as display metadata and is never used as a storage path or executable identifier.

---

## SEC-B2 — XLSX Abuse Controls Are Missing

**Severity:** BLOCKER

`.xlsx` is a ZIP/XML container and can carry structures that cause excessive memory/CPU use or unsafe interpretation.

### Required safeguard

> XLSX parsing must use a maintained server-side parser configured for bounded processing.
>
> Import must never:
>
> - execute formulas;
> - evaluate spreadsheet functions;
> - execute macros;
> - follow external workbook links;
> - load remote resources;
> - execute embedded scripts;
> - trust hidden worksheets as authority;
> - interpret embedded objects as application instructions.
>
> Formula cells are treated only as inert imported values when an explicitly safe cached scalar value is available; otherwise the row is rejected or marked `NEEDS_CORRECTION`.
>
> The parser must defend against compressed-file expansion abuse by enforcing both compressed upload size and decompressed processing limits.
>
> Import processing must have bounded memory and execution time.
>
> Parser failure returns a sanitized import error and causes no Catalog mutation.

---

## SEC-B3 — CSV Formula Injection Must Be Explicitly Neutralized

**Severity:** HIGH

CSV is plain text but can contain cells beginning with spreadsheet formula characters. Those values become dangerous if later exported or reopened in spreadsheet applications.

### Required safeguard

> CSV input is never executed.
>
> Imported text beginning with formula-trigger characters such as `=`, `+`, `-`, or `@` is treated as untrusted text.
>
> No formula is evaluated during import.
>
> Any later downloadable correction CSV or export must neutralize spreadsheet-formula injection while preserving the merchant-visible value.
>
> Raw imported cells must never become HTML, SQL, code, or spreadsheet formulas through implicit interpretation.

---

## SEC-B4 — Server-Side Orchestration Authority Is Underspecified

**Severity:** BLOCKER

The EIS says the workflow may invoke existing Catalog commands/executors, but the exact privileged boundary remains undecided.

A new import endpoint must not become a parallel privileged write API.

### Required safeguard

> The bulk-import orchestration endpoint is an authenticated server-side workflow, not a browser database mutation interface.
>
> It must re-derive:
>
> - authenticated actor;
> - current business;
> - current authorization;
>
> on every preview and every commit request.
>
> Client-supplied `business_id`, actor ID, role, permission flag, executor role, Product ID authority, or service-role authority is never trusted.
>
> Successful row mutations must pass through the same governed Catalog mutation rules as interactive creation/update.
>
> The orchestration layer may coordinate existing commands but may not directly bypass:
>
> - Catalog validation;
> - uniqueness;
> - authorization;
> - RLS;
> - idempotency;
> - audit;
> - D-057 duplicate rules.
>
> No generic privileged “insert arbitrary catalog row” helper is authorized.

---

# 3. D-058 Owner / Manager Authorization

## SEC-B5 — Manager Import Must Fail Closed Until Real Permission Infrastructure Exists

**Severity:** BLOCKER

The EIS correctly states:

- Owner: allowed;
- Manager: allowed only if real permission architecture grants product creation/import;
- Employee: denied.

It also correctly says not to invent a placeholder Manager role check.

This must become a hard security contract.

### Required safeguard

> Initial import authorization is evaluated server-side.
>
> Owner authorization is derived from the authoritative business ownership relation.
>
> Manager authorization is allowed only when the approved runtime permission system exists and explicitly grants the D-058-compatible import/product-creation permission.
>
> A display role string such as `"manager"` is not sufficient authority.
>
> JWT metadata, frontend state, local storage, route visibility, or client-provided permission flags must not independently authorize import.
>
> If the approved Manager permission store is not operational when this mission is implemented:
>
> - Owner import is enabled;
> - Manager import is denied;
> - Employee import is denied.
>
> No temporary Manager bypass is permitted.

This preserves D-058 without prematurely inventing its permission engine.

---

# 4. Reference Cost Boundary

## SEC-B6 — Reference Cost Must Not Leak Through Import Preview or Quarantine

**Severity:** BLOCKER

The EIS states that Reference Cost import requires the same authority as interactive Reference Cost management.

That protection must cover more than final mutation.

### Required safeguard

> Reference Cost authority is checked independently from ordinary Catalog-import authority.
>
> An actor without Reference Cost authority must not receive Reference Cost through:
>
> - parsed preview;
> - raw-row response;
> - validation message;
> - quarantine record;
> - duplicate-match result;
> - correction download;
> - audit JSON;
> - browser telemetry;
> - ordinary logs;
> - final outcome payload.
>
> For an unauthorized actor, the server must either reject a file containing Reference Cost before exposing parsed cost values or process the column through a protected server-only path that never releases its contents.
>
> Reference Cost mutation must use the existing cost-authorized Catalog mutation boundary.
>
> General import orchestration receives no broader Reference Cost read privilege than necessary.

---

# 5. Business Isolation and RLS

## SEC-B7 — Import Persistence Requires Exact Tenant-Bound RLS Before Creation

**Severity:** BLOCKER IF PERSISTENCE IS ADDED

The EIS permits support persistence for:

- batch metadata;
- source metadata;
- row snapshots;
- statuses;
- correction reasons;
- resolved Product IDs;
- actors and timestamps.

That is acceptable only with a closed tenant contract.

### Required safeguard

Any new import-support table must include authoritative `business_id` and be governed by:

> Every import batch and row belongs to exactly one business.
>
> Business assignment is server-derived and immutable through client-visible operations.
>
> The browser may never create or update an import row with arbitrary `business_id`.
>
> RLS is enabled before the table becomes reachable.
>
> Cross-business SELECT, INSERT, UPDATE, and DELETE are denied.
>
> Import-row access requires both:
>
> - current membership/authority for the owning business;
> - the import-specific permission applicable to the actor.
>
> Ordinary Employees receive no import-batch or quarantine access.
>
> A foreign batch ID and a nonexistent batch ID must be publicly indistinguishable.

If Engineering proposes support tables, Supabase Backend Architecture must define exact schema/grants/RLS before Build Lock.

---

# 6. Quarantine and Correction Records

## SEC-B8 — Quarantine Must Not Become a Raw Data Disclosure Store

**Severity:** HIGH

The EIS correctly separates quarantined rows from Product Truth, but the stored snapshot boundary is too broad.

### Required safeguard

> Quarantine stores only data necessary to explain and correct the import.
>
> It must not persist:
>
> - arbitrary unknown spreadsheet columns;
> - hidden workbook metadata;
> - formulas;
> - external links;
> - file binary contents;
> - raw database identifiers;
> - unauthorized Reference Cost;
> - system or permission metadata.
>
> Unknown columns are ignored or represented only as an allowlisted validation finding.
>
> Parsed snapshots use an explicit field allowlist.
>
> Quarantine access is limited to authorized Owner/Manager actors for the owning business.
>
> Successful resolution records the resolving actor and timestamp.
>
> A resolved quarantine record cannot silently be reassigned to another business.

---

# 7. Idempotency and Replay Protection

## SEC-B9 — Batch and Row Idempotency Must Be Defined Before Build

**Severity:** BLOCKER

The EIS requires idempotency but does not yet define the authoritative key model.

### Required safeguard

> Every preview creates a cryptographically unguessable opaque batch identifier bound server-side to:
>
> - business;
> - initiating actor;
> - normalized import definition;
> - batch lifecycle state.
>
> Batch possession alone provides no authority.
>
> Commit re-derives actor and business.
>
> A committed batch cannot be committed again.
>
> Concurrent commit attempts serialize and produce one authoritative outcome.
>
> Each mutation-bearing row receives a stable row-operation idempotency key derived or generated server-side for that batch.
>
> Successful row outcomes are durable.
>
> Retrying a partially completed batch never recreates an already successful product.
>
> An idempotency key from one business, batch, row, or operation cannot authorize another.
>
> Re-uploading the same file as a new batch remains permitted and is governed by normal Catalog duplicate detection.
>
> File hash is evidence only and never an authorization or automatic deduplication decision.

---

# 8. Duplicate Resolution

## SEC-B10 — Duplicate Resolution Cannot Expand Update Authority

**Severity:** HIGH

The EIS correctly rejects automatic overwrite.

The optional future `Update existing product` route needs an explicit authority ceiling.

### Required safeguard

> A duplicate/match result provides no mutation authority.
>
> `POSSIBLE_MATCH` exposes only same-business records the current actor is authorized to see.
>
> Foreign-business identity matches must never be returned.
>
> No cross-business existence oracle may arise from Product Name, SKU, or Barcode matching.
>
> Import cannot directly overwrite an existing Catalog row.
>
> If `Update existing product` is exposed, each requested change must pass through the existing approved Catalog update command with the actor’s current authorization, audit, validation, lifecycle, and expected-state rules.
>
> The importer may not combine several protected updates into a privileged bypass.
>
> If the existing command surface cannot safely represent the requested change, the result remains unresolved and the merchant is directed to the ordinary Catalog workflow.

---

# 9. Service-Role and Privileged Backend Boundary

## SEC-B11 — Service Role Must Not Become the Import Authorization Model

**Severity:** BLOCKER

“No service-role exposure to client code” is necessary but not sufficient.

A server that blindly uses service role can bypass RLS.

### Required safeguard

> The browser never receives a Supabase service-role key.
>
> Import authorization must not depend on the fact that server code possesses a privileged credential.
>
> Where a server-side privileged credential is technically required, the server must first independently verify:
>
> - authenticated user;
> - current business;
> - Owner/approved Manager authority;
> - row-level business ownership;
> - command-specific permission.
>
> Privileged server code must operate through narrow purpose-built functions and not arbitrary database queries constructed from client data.
>
> Service-role access must not be passed into frontend JavaScript, Lovable client code, browser environment variables, downloadable files, logs, or error payloads.
>
> Prefer existing executor/RPC boundaries over direct service-role mutation wherever feasible.

---

# 10. Browser Privilege Boundary

## SEC-B12 — Preview Data Must Be Treated as Untrusted Presentation Data

**Severity:** HIGH

### Required safeguard

The browser may:

- upload;
- display sanitized preview data;
- submit correction choices;
- confirm an authorized batch.

The browser may not decide authoritatively:

- business ID;
- actor ID;
- role;
- permission;
- duplicate identity;
- final normalization;
- Catalog uniqueness;
- Reference Cost permission;
- row eligibility;
- existing Product ownership;
- whether a batch was previously committed;
- whether a row is already successfully processed.

All of those decisions are server-derived.

---

# 11. Auditability

## SEC-B13 — Import Requires Batch-Level and Row-Level Attribution Without Sensitive Payload Dumping

**Severity:** HIGH

### Required safeguard

> Import audit evidence must identify:
>
> - business;
> - authorized actor;
> - batch identifier;
> - original safe filename metadata;
> - import initiation;
> - preview generation;
> - commit confirmation;
> - row operation;
> - resulting Product ID where created;
> - duplicate/correction disposition;
> - terminal outcome;
> - timestamps.
>
> Audit must not dump the entire spreadsheet.
>
> Sensitive or rejected raw cells are not copied into general audit JSON.
>
> Reference Cost remains outside general audit JSON.
>
> Audit records are business-isolated and are not ordinary Employee-visible data.
>
> Expected validation failures remain distinguishable internally without leaking database exceptions or cross-business identifiers to the merchant.

---

# 12. Preset Isolation

## SEC-B14 — Presets Must Remain Immutable Application Suggestions

**Severity:** HIGH — CURRENT EIS DIRECTION ACCEPTED

The EIS explicitly recommends keeping Selling Unit and Category preset vocabulary in version-controlled application configuration rather than business tables, and says unused presets must not create database rows.

This is the correct security and isolation model.

### Binding safeguard

> Selling Unit and Category preset definitions are immutable application configuration for this mission.
>
> They are not global mutable Product Truth.
>
> Merchants cannot modify the shared preset source through the application.
>
> Selecting a Category preset creates or selects an ordinary business-owned category only after explicit merchant action.
>
> Category lookup is restricted to the current business.
>
> A category preset must never reuse a category belonging to another business.
>
> No preset selection creates shared cross-business category rows.
>
> No signup or migration pre-populates all preset categories.
>
> Unused presets create no database rows.
>
> Alias maps influence search suggestions only and never silently rewrite merchant-entered Product Truth.

This preserves D-008 and prevents a global mutable category master from being accidentally introduced.

---

# 13. Malicious Content and Display Safety

## SEC-B15 — Imported Strings Need Output-Safe Handling

**Severity:** HIGH

### Required safeguard

> Product names, categories, descriptions, SKU values, filenames, and correction messages derived from uploaded content are treated as untrusted text.
>
> They are parameterized for database operations and safely escaped by the rendering layer.
>
> No imported string is inserted into:
>
> - raw HTML;
> - SQL;
> - shell commands;
> - filenames or paths;
> - URLs;
> - logs with executable interpretation.
>
> Spreadsheet markup or formula syntax has no executable meaning in Smart Business.

---

# 14. Retention and File Storage

## SEC-B16 — Raw Upload Retention Is Not Yet Defined

**Severity:** BLOCKER IF RAW FILES ARE PERSISTED

The EIS correctly says uploaded spreadsheets should not be stored indefinitely and requires retention/access control if persistence is used.

### Required safeguard

Preferred Phase 1 boundary:

> Parse the file in bounded transient server processing and do not persist the raw spreadsheet after the preview/import lifecycle unless Engineering demonstrates a required operational reason.

If persistence is required:

> Raw upload storage must use a private, business-isolated location.
>
> Object keys are server-generated.
>
> Browser-controlled paths are prohibited.
>
> Direct public URLs are prohibited.
>
> Access requires current business/import authority.
>
> A fixed deletion/retention period must be defined before Build Lock.
>
> Quarantine metadata retention and original-file retention are separate policies.
>
> Deleting the raw file must not destroy required audit evidence.

---

# 15. Required Security Verification Before Build Lock

Engineering must return a closed design proving:

1. exact server endpoint/function boundary for upload, preview and commit;
2. chosen CSV/XLSX parser;
3. hard compressed and decompressed file limits;
4. worksheet, row, column, cell-size and runtime limits;
5. formula/external-link/macro/embedded-object handling;
6. support-table schema if any;
7. exact RLS and grants for batch/quarantine records;
8. raw-file retention decision;
9. Owner/Manager/Employee authorization decision;
10. Reference Cost import authority;
11. batch and row idempotency algorithm;
12. duplicate-resolution authorization;
13. privileged/service-role boundary;
14. audit event model;
15. cross-business negative-test matrix;
16. preset configuration location and confirmation that presets create no global mutable merchant data.

These are narrow implementation-security decisions.

They do not require Product Truth redesign.

---

# 16. Mandatory Negative Security Tests

Before the import capability can pass verification, tests must demonstrate at minimum:

- Employee cannot upload, preview protected data, or commit.
- Manager without the actual approved permission cannot import.
- Manager permission cannot be forged through browser state or request payload.
- Business A cannot access Business B batch ID.
- Business A cannot access Business B quarantine rows.
- Business A duplicate lookup cannot reveal Business B products.
- Foreign and nonexistent batch IDs are indistinguishable where applicable.
- Replaying the same commit does not create products twice.
- Concurrent confirmation does not duplicate products.
- Partial retry does not recreate successful rows.
- Oversized files are rejected before mutation.
- Malformed XLSX is rejected safely.
- Compressed expansion abuse is bounded.
- Formula content is never executed.
- External workbook references are never followed.
- Spreadsheet values cannot inject HTML/SQL/code.
- Reference Cost is invisible without its independent authority.
- Raw `business_id`, actor IDs, Inventory IDs, or database IDs from the spreadsheet cannot establish authority.
- Browser code never receives service-role credentials.
- Import orchestration cannot mutate Catalog tables outside the governed mutation boundary.
- Presets cannot create or mutate another business’s categories.
- Selecting an unused preset does not create global/shared data.
- Audit evidence identifies who imported what batch without storing unauthorized sensitive payloads.

---

# 17. Non-Blocking Security Observations

The following existing EIS decisions are security-positive and should remain unchanged:

- exactly `.csv` and `.xlsx`; no `.xls`, ZIP, PDF or OCR scope;
- explicit preview before mutation;
- valid rows may succeed independently while invalid rows remain quarantined;
- automatic duplicate overwrite is forbidden;
- Inventory IDs from spreadsheets are forbidden;
- stock quantity is not imported as Catalog Product Truth;
- imported files cannot auto-create Inventory rows;
- Employee import is forbidden;
- Manager support must wait for real permission infrastructure if necessary;
- no twentieth public Catalog command;
- no direct browser Catalog insertion;
- no browser service-role key;
- presets remain suggestions rather than compulsory global taxonomy;
- unused presets create no rows;
- alias matching does not silently rewrite merchant wording.

---

# 18. Mission Control Decision

The EIS is **product-scope ready**, but its import subsystem is not yet **security-contract complete**.

The remaining issues are not requests to redesign the feature.

They are implementation safeguards required to prevent:

- hostile file processing;
- privilege escalation;
- cross-business leakage;
- replay and duplicate creation;
- service-role bypass;
- Reference Cost disclosure;
- quarantine-data exposure;
- global preset-data contamination.

No implementation should begin until Engineering converts the safeguards above into the executable implementation contract.

# FINAL VERDICT

**SECURITY CHANGES REQUIRED**