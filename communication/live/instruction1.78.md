# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — POST-BUILD SECURITY IMPLEMENTATION VERIFICATION

**Instruction ID:** instruction1.78  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** Mission Control  
**Mission Type:** Read-only implementation verification  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Publish / Deploy / Domain-Cutover Authority:** NONE

---

## 1. Mission Objective

Perform a focused, implementation-level security verification of the completed GC-1 Build Mode work now merged on `main`.

This is not a design re-review and not a new implementation mission.

The purpose is to determine whether the actual code and test evidence produced under `communication/live/instruction1.77.md` preserve the already-approved security design strongly enough for Mission Control to continue toward a separate production-migration decision.

Do not implement fixes. Do not modify application code, migrations, dependencies, Supabase data, Lovable, deployment, or production.

---

## 2. Canonical Inputs

Read from the latest merged `main`:

1. `communication/live/instruction1.77.md`;
2. `communication/live/report1.84.md`;
3. `communication/live/report1.80.md`;
4. `communication/live/report1.83.md`;
5. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 4.0;
6. the actual implementation files and tests referenced by `report1.84.md`, especially:
   - `src/server-functions/catalog-import.ts`;
   - `src/lib/catalog-import/**`;
   - `src/integrations/supabase/client.server.ts`;
   - `src/integrations/supabase/auth-middleware.ts`;
   - `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`;
   - `tests/catalog-import/**`;
   - `package.json` / `package-lock.json`;
   - generated bundle evidence where repository-accessible.

Use repository evidence first. You may inspect the dedicated test Supabase project read-only where necessary to validate claims, but do not mutate it under this mission.

---

## 3. Mission Control Evaluation Before This Review

Mission Control has read `report1.84.md` in full.

The implementation evidence is strong overall:

- full approved Build Now scope is implemented;
- test-project migration is applied and schema/grants/RLS were behaviorally verified;
- 133 automated tests pass, including 18 live integration tests;
- the real two-request atomic-claim race passed;
- exactly 19 public Catalog commands remain;
- no production migration or release action occurred;
- service-role use is reported as bookkeeping-only;
- client-bundle scanning found no service-role credential exposure.

However, production migration is **not authorized yet** because `report1.84.md` discloses implementation-level deviations/gaps that require specialist judgment rather than Mission Control silently accepting them.

---

## 4. Required Security Questions

### SEC-IMP-1 — Real authenticated HTTP coverage

`report1.84.md` §9.1 states that the locked direct-handler server-function test architecture could not be implemented in this TanStack Start version.

There is therefore no committed automated test exercising the actual authenticated HTTP path through:

- `requireSupabaseAuth`;
- `FormData` handling;
- `catalogImportPreview`;
- `catalogImportCommit`;
- `catalogImportGetBatch`;
- caller-JWT vs privileged bookkeeping client separation in one real request flow.

A running-server smoke test only proved module loading / route rendering, not an authenticated import transaction.

Determine whether this is:

- acceptable before production migration;
- acceptable only if a bounded authenticated real-HTTP verification is completed first; or
- a security blocker requiring implementation change.

Do not accept the gap merely because pure-logic and DB tests pass. Evaluate the missing boundary itself.

### SEC-IMP-2 — Decompression-bomb enforcement depth

`report1.84.md` §9.3 says the 25 MB decompressed-size limit is enforced using ZIP central-directory declared uncompressed sizes before `exceljs` load, not a streaming byte counter.

A malicious XLSX with dishonest understated declared sizes could therefore reach the parser beyond the intended bound.

Determine whether this residual gap is acceptable under the Phase 1 threat model and 5 MB compressed-file cap, or whether it must be corrected before production migration.

Classify severity and required action explicitly.

### SEC-IMP-3 — Parser wall-clock limit

`report1.84.md` §9.4 states the 10-second parser limit is post-hoc measurement, not preemptive cancellation.

Determine whether this is acceptable defense-in-depth for Phase 1 under the other file-size limits, or whether preemptive cancellation / stronger containment is required before production migration.

### SEC-IMP-4 — Privileged bookkeeping implementation

Inspect the actual implementation and verify that:

- caller JWT is validated before privileged bookkeeping access;
- actor/business/Owner authority is re-derived on every request;
- browser-provided business/actor/role/permission fields do not establish authority;
- `supabaseAdmin` is dynamically/server-only imported;
- privileged writes are fixed to only `catalog_import_batches` / `catalog_import_rows`;
- privileged code cannot choose arbitrary table/column from client input;
- service role never mutates Catalog Product Truth and never invokes/substitutes for the 19 Catalog commands;
- `resolved_product_id` originates only from an actual governed Catalog command result;
- Reference Cost is independently protected;
- Manager remains fail-closed and Employee denied.

### SEC-IMP-5 — Multi-command row sequencing

Review the disclosed engineering decisions in `report1.84.md` §8, especially:

- deterministic follow-up idempotency keys for selling price / tax / Reference Cost;
- marking a row `CREATED` after `create_catalog_product` succeeds even if a later price/tax/cost command returns a warning;
- category creation at commit time;
- `skipRowNumbers` handling;
- re-upload-as-new-batch correction behavior.

Determine whether any decision creates a security, authorization, auditability, or replay/idempotency weakness.

### SEC-IMP-6 — Imported-product hard-delete interaction

`report1.84.md` §4.6 discloses that support-table FKs may cause `delete_catalog_product` to fail with a raw FK violation for a product referenced by import evidence rather than the command's normal clean dependent-history outcome.

For this Security review, determine whether the raw-error path risks:

- sensitive schema leakage;
- inconsistent error sanitization;
- an authorization or enumeration oracle;
- audit/availability issues that must block production migration.

Do not redesign the command here; simply classify the security consequence and whether a follow-up correction is mandatory before production migration.

### SEC-IMP-7 — Parser / output safety regression

Verify the implementation preserves the earlier SEC requirements for:

- CSV formula-like values treated as untrusted text;
- no formula/macro/external-resource execution;
- unknown columns excluded from durable snapshots;
- sanitized merchant-facing errors;
- no raw spreadsheet dumps in logs/audit;
- parameterized database operations;
- safe rendering of imported strings;
- no raw upload persistence.

### SEC-IMP-8 — Negative-test sufficiency

Assess whether the existing test evidence is sufficient for the implemented boundary.

Explicitly state which security-negative tests are:

- directly executed and evidenced;
- only indirectly covered;
- still missing.

Pay particular attention to the missing authenticated real-HTTP import flow.

---

## 5. Regression Boundaries

Confirm implementation has not regressed:

- exactly 19 public Catalog commands;
- no twentieth public Catalog/import command;
- no `reactivate_catalog_category`;
- caller JWT remains merchant authority source;
- Owner-only import under current permission infrastructure;
- Manager fail-closed;
- Employee denied;
- business isolation;
- Reference Cost confidentiality;
- transient raw file policy;
- no automatic duplicate overwrite;
- no automatic Inventory creation;
- no global mutable taxonomy;
- no unit conversion;
- no browser service-role exposure.

---

## 6. Required Output

Create:

`communication/live/report1.85.md`

The report must include:

1. exact latest `main` SHA reviewed;
2. exact implementation files inspected;
3. SEC-IMP-1 through SEC-IMP-8 disposition matrix;
4. explicit severity for §9.1, §9.3, §9.4, and §4.6 report1.84 findings;
5. regression-check matrix;
6. missing-test matrix;
7. production-migration security recommendation;
8. one final verdict exactly from the allowed set below.

---

## 7. Allowed Final Verdicts

Return exactly one:

`SECURITY IMPLEMENTATION READY FOR PRODUCTION-MIGRATION GATE`

or

`SECURITY IMPLEMENTATION CHANGES REQUIRED BEFORE PRODUCTION-MIGRATION GATE`

or

`SECURITY IMPLEMENTATION STOPPED — EVIDENCE GAP`

A READY verdict means Security is satisfied with the **implemented** boundary for Mission Control to continue to other production-migration gates. It does not itself authorize production migration.

---

## 8. Authority Boundary

This mission authorizes review only.

Do not:

- edit implementation code;
- install/change dependencies;
- create/apply migrations;
- mutate test or production Supabase data;
- create/rotate/use privileged credentials for mutation;
- alter Product Truth;
- add/change Catalog commands;
- mutate Lovable;
- publish/deploy;
- perform domain cutover;
- authorize production migration;
- self-merge.

Human review and merge are required for the completion PR.

---

## 9. Stop Rule

If a claimed security property cannot be established from repository/read-only evidence, return `SECURITY IMPLEMENTATION STOPPED — EVIDENCE GAP` rather than assuming it.

If a material implementation weakness is confirmed, return `SECURITY IMPLEMENTATION CHANGES REQUIRED BEFORE PRODUCTION-MIGRATION GATE` and identify the minimum bounded correction.

---

## 10. Next Logical Step

After this report is human-reviewed and merged, Mission Control will decide whether:

- a bounded correction mission is required;
- a Supabase Backend Architecture implementation spot-check is still required;
- or the implementation may proceed to a separate production-migration authorization gate.
