# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-GC-1 — ENGINEERING + SECURITY DESIGN LOCK RECONCILIATION

**Instruction ID:** instruction1.70  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Environment:** Claude Code in VS Code  
**Authorized By:** Mission Control  
**Implementation Authority:** NONE  
**Build Authority:** NONE  
**Status:** ACTIVE AFTER MERGE

---

## 1. Mission Objective

Reconcile the merged Engineering and Security review findings for the SB-P-1.11 Build Now Gap Closure EIS and produce a security-contract-complete, standalone implementation specification suitable for Build Lock review.

This is a **design-lock reconciliation mission only**.

Do not implement product code, migrations, schema, dependencies, server functions, UI, tests, Lovable changes, publish/deploy, or domain cutover under this instruction.

---

## 2. Required Canonical Inputs

Read and reconcile at minimum:

- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/research/kerala-market-catalog-glossary.md`
- `communication/live/instruction1.69.md`
- `communication/live/report1.75.md` — Claude Code Engineering Review
- `communication/live/report1.76.md` — Security & Permissions Architecture Review

Also inspect the current canonical repository and production/test architecture as needed to ensure the revised EIS is executable and does not rely on nonexistent capabilities.

---

## 3. Controlling Mission Control Decisions

The reconciliation must preserve these decisions:

1. **Exactly 19 public Catalog commands remain locked.**
2. Do **not** add `reactivate_catalog_category` under this mission.
3. Remove or replace any EIS wording that implies Category reactivation is currently available.
4. If a same-normalized-name Category exists only in Archived state, the flow must surface a truthful archived-name conflict and must not silently recreate, reuse, or reactivate it. The merchant may choose another/custom Category name. A future Category-reactivation capability requires separate governance.
5. Bulk import must use an authenticated **TanStack server-side function/action boundary using the caller's JWT-scoped Supabase client** wherever feasible, rather than treating service-role possession as authorization.
6. Successful Catalog mutations must continue through the existing governed Catalog RPC/command boundaries.
7. No direct browser Catalog-table writes are authorized.
8. No browser service-role exposure is authorized.
9. Owner import may be enabled. Manager import must fail closed until the approved runtime permission infrastructure actually exists and explicitly grants the D-058-compatible permission. Employee import remains denied.
10. Reference Cost requires its existing independent authority throughout parsing, preview, quarantine, duplicate handling, correction, commit, outcomes, logs and audit.
11. Raw spreadsheet processing should default to bounded transient processing with **no retained original upload**, unless a concrete implementation need proves persistence necessary.
12. Presets remain immutable application suggestions/configuration, not cross-business mutable Product Truth.
13. No unit conversion, automatic Product-to-Inventory creation, global Category taxonomy, automatic duplicate overwrite, or Product auto-categorization is authorized.
14. The tax-rate field must not be disabled merely because pricing mode is tax-exclusive. Tax-inclusive/exclusive mode and tax rate remain separate concepts; this mission is a clarity/UX refinement, not a tax-model change.

---

## 4. Engineering Findings That Must Be Closed

Resolve every finding in `report1.75.md`, including:

### ENG-1 — Server-function execution surface

Specify the exact TanStack Start server-function/action boundary for:

- upload receipt;
- parsing;
- preview creation;
- duplicate classification;
- confirmation;
- commit;
- retry/outcome retrieval if required.

State clearly that this will be the first real use of the existing server middleware/function execution surface in this app and define how it will be tested.

### ENG-2 — Category archived-name collision

Resolve the inconsistency between the EIS and current 19-command architecture using the controlling decision in Section 3.

No twentieth command is authorized.

### ENG-3 — Duplicate detection semantics

Define the exact `catalog_products_search` usage for import pre-checks.

Lock which exact match conditions/ranks count as:

- exact Barcode match;
- exact SKU match;
- exact normalized Product Name match;
- fuzzy/near match that must **not** be treated as identity conflict.

The design must prevent cross-business existence leakage and must not treat fuzzy matches as duplicates.

### ENG-4 — Batch and row idempotency

Define the persistence and lifecycle of:

- batch identifier;
- row number / stable row identity;
- row-operation idempotency key;
- preview state;
- commit state;
- terminal row outcome.

Row idempotency keys must be assigned/persisted before mutation and reused on retry. A batch already committed must not commit again. Concurrent confirmations must serialize safely.

### ENG-5 — CSV/XLSX parser choice

Lock a concrete maintained parser/library and justify it against the Security review.

State the dependency to be added later in Build Mode and why it is appropriate for untrusted `.csv`/`.xlsx` input.

Do not add the dependency under this mission.

### ENG-6 — File transport

Choose and specify the Phase 1 file transport.

Preferred boundary unless engineering evidence requires otherwise:

- multipart/transient upload directly to the authenticated server function;
- parse under hard limits;
- do not persist the original raw file.

If Storage staging is proposed instead, explain why and specify private bucket/access/retention requirements.

### ENG-7 — Server-function test architecture

Define the committed automated test architecture for the server orchestration layer, separate from direct RPC tests.

This must become the first durable Catalog import/server-function test pattern rather than relying on scratchpad-only verification.

---

## 5. Security Findings That Must Be Closed

Resolve every blocker and safeguard in `report1.76.md`.

At minimum, the revised EIS must lock the following.

### SEC-1 — Upload trust boundary

Files are untrusted input.

Lock:

- accepted formats: `.csv`, `.xlsx` only;
- content verification beyond extension;
- compressed upload-size limit;
- decompressed processing-size limit;
- worksheet limit;
- row limit;
- column limit;
- cell-length limit;
- parser runtime/timeout limit;
- malformed/encrypted/password-protected/macro-enabled/archive-disguised handling;
- safe original-filename treatment.

All limits must be server-enforced before Catalog mutation.

### SEC-2 — XLSX hostile-content controls

Lock handling for:

- formulas;
- macros;
- external workbook links;
- remote resources;
- embedded objects/scripts;
- hidden worksheets;
- cached scalar formula values;
- compressed expansion abuse;
- parser failure.

No executable spreadsheet behavior is authorized.

### SEC-3 — CSV/formula injection

Treat formula-triggering cell content as untrusted text.

Any future downloadable correction/export CSV must neutralize spreadsheet-formula injection.

### SEC-4 — Server authority

Every preview and commit must re-derive authenticated actor, business and permission server-side.

Never trust client-supplied:

- `business_id`;
- actor ID;
- role;
- permission flag;
- executor role;
- Product ownership;
- service-role authority.

### SEC-5 — D-058 Manager authorization

Lock fail-closed behavior:

- Owner: allowed;
- Manager: denied until real approved permission infrastructure exists and grants the relevant permission;
- Employee: denied.

Frontend role strings/JWT metadata/local storage/client flags alone cannot authorize import.

### SEC-6 — Reference Cost confidentiality

An unauthorized actor must not receive Reference Cost through preview, raw-row data, quarantine, duplicate results, correction output, audit JSON, logs, telemetry or final outcomes.

Define the exact import behavior when a file contains Reference Cost but the actor lacks authority.

### SEC-7 — Support-table schema / RLS / grants

If import support persistence is required, define the exact proposed schema before Build Lock.

Any support table must be tenant-bound by authoritative immutable server-derived `business_id` with RLS enabled before reachability.

Cross-business SELECT/INSERT/UPDATE/DELETE must be denied.

Foreign and nonexistent batch identifiers should be publicly indistinguishable where applicable.

If support tables are proposed, include exact intended grants and policies in the revised EIS or an attached executable schema design section.

### SEC-8 — Quarantine minimization

Quarantine must use an explicit allowlist and retain only fields necessary for correction.

Do not persist arbitrary unknown columns, formulas, workbook metadata, external links, raw binaries, unauthorized Reference Cost, or system/permission metadata.

### SEC-9 — Replay / concurrent commit protection

Lock batch-level and row-level idempotency, retry and concurrency semantics.

A successful row must never be recreated on partial retry.

### SEC-10 — Duplicate resolution authority ceiling

A duplicate result does not grant update authority.

If `Update existing product` is retained in the revised EIS, specify exactly which existing Catalog command(s) can represent the update safely and which permissions/expected-state/audit rules apply.

If this cannot be represented safely within the existing command surface, remove the option from Build Now import and leave the row unresolved for ordinary Catalog correction.

### SEC-11 — Privileged/service-role boundary

Prefer user-JWT-scoped RPC execution.

If any privileged server credential is genuinely required for support-table orchestration, define a narrow purpose-built boundary and prove that authorization is independently checked before privileged access.

No generic privileged arbitrary Catalog mutation helper is permitted.

### SEC-12 — Browser boundary

The browser may display sanitized preview and submit choices/confirmation, but may not authoritatively decide business, actor, permission, duplicate identity, final normalization, uniqueness, Reference Cost authority, row eligibility or commit state.

### SEC-13 — Audit model

Define batch-level and row-level audit evidence without dumping full spreadsheets or sensitive payloads.

### SEC-14 — Preset isolation

Confirm presets remain version-controlled application configuration and cannot create shared/global mutable merchant data.

### SEC-15 — Imported string/output safety

All imported strings are untrusted text and must be safe for database parameterization, rendering, logs and future exports.

### SEC-16 — Raw upload retention

Lock the Phase 1 policy.

Preferred policy: transient processing; no retained raw spreadsheet after preview/import lifecycle.

If persistence is required, define private storage, access, server-generated keys and fixed retention/deletion period.

---

## 6. Required Concrete Design Outputs

The revised standalone EIS must include enough detail that Build Mode does not need to invent architecture.

It must explicitly define:

1. server endpoint/function boundaries;
2. parser/library choice;
3. all hard upload/parser limits;
4. file transport;
5. batch lifecycle/state machine;
6. row lifecycle/state machine;
7. exact support tables/columns, if any;
8. exact planned RLS/grants, if support persistence is used;
9. idempotency algorithm;
10. duplicate detection algorithm;
11. duplicate-resolution options and authority;
12. Owner/Manager/Employee authorization behavior;
13. Reference Cost handling;
14. raw-file retention policy;
15. audit-event model;
16. preset configuration location;
17. server-function test architecture;
18. mandatory security-negative-test matrix;
19. implementation sequence;
20. migration/dependency sequence;
21. rollback/failure behavior;
22. confirmation that exactly 19 public Catalog commands remain.

Any unresolved implementation-critical decision must be marked `BLOCKED` rather than hidden behind `TBD`.

---

## 7. Required Reconciliation Report

Create:

`communication/live/report1.77.md`

The report must map every material finding from:

- `report1.75.md`; and
- `report1.76.md`

into one of:

- `RESOLVED`
- `ACCEPTED LIMITATION`
- `BLOCKED`

For every item include:

- finding ID/topic;
- resolution;
- exact revised EIS section;
- whether Product Truth changed (`NO` expected unless explicitly escalated);
- whether Build Mode is authorized (`NO` under this mission).

Final allowed verdicts:

- `READY FOR SECURITY RE-REVIEW`
- `CHANGES STILL REQUIRED`
- `BLOCKED — MISSION CONTROL DECISION REQUIRED`

---

## 8. Repository Deliverables

Under this mission, Claude Code may modify/create only the documentation required for design-lock reconciliation:

1. revise:
   `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`
2. create:
   `communication/live/report1.77.md`

No implementation files are authorized.

Run applicable repository/Markdown quality gates.

Open one completion PR and stop.

Do not self-merge.

---

## 9. Explicitly Not Authorized

Do not:

- implement server functions;
- install parser dependencies;
- create/apply Supabase migrations;
- create support tables;
- modify RLS/grants;
- add RPCs/public commands;
- add a twentieth Catalog command;
- modify production/test data;
- change Lovable;
- publish/deploy;
- cut over domain;
- self-merge.

---

## 10. Communication Protocol

This instruction is canonical only after human merge.

After merge, Founder may deliver the following short handoff to Claude Code:

```markdown
MISSION CONTROL HANDOFF

Execute the merged canonical instruction:

`communication/live/instruction1.70.md`

Mission:
`SB-P-1.11-GC-1 — Engineering + Security Design Lock Reconciliation`

Read the instruction and all referenced canonical inputs directly from the latest `main` branch.

Do not implement.

Revise the standalone EIS, create `communication/live/report1.77.md`, run documentation quality gates, open one completion PR, and stop.

Do not self-merge.
```

Claude Code's report must be merged into the repository before Mission Control relies on it for the next authorization.

---

## Next Logical Step

After this instruction is merged, Founder delivers the short handoff above to Claude Code. When Claude Code opens its completion PR, Mission Control reviews the revised EIS and `report1.77.md`. If the verdict is `READY FOR SECURITY RE-REVIEW`, the next canonical instruction must authorize a focused Security & Permissions Architecture re-review before any Build Lock.