# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — POST-BUILD SECURITY IMPLEMENTATION VERIFICATION

**Report ID:** report1.85  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** `communication/live/instruction1.78.md`  
**Mission Type:** Read-only implementation verification  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Publish / Deploy / Domain-Cutover Authority:** NONE

---

## 1. Executive Verdict

Security reviewed the actual merged GC-1 implementation on latest `main` at:

`f612d8f736384ee298eb1cbf18fcbb26d63b20cf`

The implementation preserves several important locked boundaries: exactly nineteen public Catalog commands remain, ordinary `authenticated` users have SELECT-only access to the two import-support tables, service-role use is confined in code to those two support tables, Catalog Product Truth mutations still use the caller-JWT command surface, Owner-only Phase 1 import remains fail-closed for Manager/Employee, and cross-business support-table reads remain RLS-isolated.

However, the implementation is not ready for the production-migration gate.

Security confirmed multiple implementation-level weaknesses that require bounded correction before production migration is considered:

1. there is still no authenticated real-HTTP verification of the actual `createServerFn` boundary;
2. XLSX decompression protection trusts ZIP-declared uncompressed sizes rather than bounding produced decompressed bytes, leaving an authenticated availability/DoS path for maliciously crafted workbooks;
3. the 10-second parser limit is post-hoc and cannot interrupt a pathological parse;
4. `skipRowNumbers` is applied through the service-role bookkeeping client before the batch atomic-claim/status check, allowing an authenticated Owner to mutate `POSSIBLE_MATCH` / `NEEDS_CORRECTION` audit rows even after the batch is already `committed`, and allowing a losing concurrent request to mutate row state before it loses the claim;
5. price/tax/Reference Cost follow-up commands run after the row is permanently marked `CREATED`; failures are only transient response warnings, expected command-result rejection outcomes are not inspected, no durable retry state is retained, and the batch may still become `committed`;
6. row-level exceptions are logged as raw error objects, which can include internal database detail and, in at least one local throw path, imported Category text;
7. imported-product hard delete can surface a raw foreign-key failure instead of the command's normal sanitized `DEPENDENT_HISTORY_CONFLICT` outcome.

These are bounded implementation defects. They do not require Product Truth redesign or a twentieth Catalog command, but they do block production migration until corrected and re-verified.

**Final verdict:**

`SECURITY IMPLEMENTATION CHANGES REQUIRED BEFORE PRODUCTION-MIGRATION GATE`

---

## 2. Canonical Inputs and Implementation Files Inspected

Reviewed from latest merged `main`:

### Canonical authority / evidence

- `communication/live/instruction1.78.md`
- `communication/live/instruction1.77.md`
- `communication/live/report1.84.md`
- `communication/live/report1.83.md`
- `communication/live/report1.80.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 4.0

### Actual implementation / tests

- `src/server-functions/catalog-import.ts`
- `src/lib/catalog-import/parse.ts`
- `src/lib/catalog-import/content-type.ts`
- `src/lib/catalog-import/validate.ts`
- `src/lib/catalog-import/idempotency.ts`
- `src/routes/_authenticated/catalog.import.tsx`
- `src/integrations/supabase/auth-middleware.ts`
- `src/integrations/supabase/client.server.ts`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql` — existing Catalog command behavior relevant to hard delete / command outcomes
- `tests/catalog-import/support-schema-rls.test.ts`
- `tests/catalog-import/content-type.test.ts`
- `tests/catalog-import/parse.test.ts`
- supporting test claims and bundle evidence recorded in `report1.84.md`

No write test was executed against test or production Supabase under this mission.

---

## 3. SEC-IMP Disposition Matrix

| ID | Disposition | Security conclusion |
|---|---|---|
| SEC-IMP-1 — Real authenticated HTTP coverage | **CHANGE REQUIRED** | The actual authenticated `createServerFn` path remains untested end-to-end. Before production migration, a bounded real-HTTP test must exercise `requireSupabaseAuth`, real `FormData`, preview, batch read, commit, caller-JWT Catalog calls, privileged bookkeeping, cross-business/non-owner denial, and retry/concurrency behavior. |
| SEC-IMP-2 — Decompression-bomb enforcement depth | **CHANGE REQUIRED** | Current code sums ZIP central-directory declared sizes, then hands the full buffer to `exceljs`. A malicious XLSX can understate declared sizes and reach decompression beyond the intended 25 MB bound. The 5 MB compressed cap does not bound expansion ratio. This is a material authenticated availability/DoS weakness. |
| SEC-IMP-3 — Parser wall-clock limit | **CHANGE REQUIRED** | The 10-second limit is checked only after synchronous/awaited parsing returns. It is therefore not an enforced execution-time limit. Stronger containment/cancellation is required before production migration, especially in combination with SEC-IMP-2. |
| SEC-IMP-4 — Privileged bookkeeping implementation | **CHANGE REQUIRED** | The principal boundary is correct: caller JWT is validated first, business/Owner is re-derived, `supabaseAdmin` is dynamically imported server-side, and fixed table names are used. However, the commit handler performs privileged `skipRowNumbers` writes before the atomic batch claim. That creates a server-mediated audit-state mutation path on committed/in-progress batches and must be corrected. |
| SEC-IMP-5 — Multi-command row sequencing | **CHANGE REQUIRED** | Stable derived idempotency keys are good, but they are not sufficient. Rows are marked `CREATED` before price/tax/cost follow-ups; follow-up RPC `data.outcome` is not inspected; RPC errors become transient warnings only; the row is no longer retryable; and the batch may become `committed`. This weakens truthful outcome, replay, and audit integrity. |
| SEC-IMP-6 — Imported-product hard-delete interaction | **CHANGE REQUIRED** | The FK preserves import evidence, but `delete_catalog_product` does not pre-check the new support-table references and the delete can therefore propagate a raw FK exception. No cross-business authorization bypass was found, but schema/error leakage and inconsistent command error semantics require bounded correction before production migration. |
| SEC-IMP-7 — Parser / output safety regression | **CHANGE REQUIRED** | Core parsing protections are substantially preserved: literal CSV formula-like values, no formula evaluation, macro/content-type rejection, allowlisted snapshots, transient files, parameterized Supabase operations, and React text rendering. However, raw row exceptions are logged unsanitized, and real-HTTP error serialization remains unverified. |
| SEC-IMP-8 — Negative-test sufficiency | **CHANGE REQUIRED** | Database/RLS/parser unit evidence is useful but does not cover the implemented HTTP orchestration boundary or the newly identified sequencing defects. Missing tests are listed in §7. |

---

## 4. Required Severity Classification for Disclosed `report1.84.md` Findings

| `report1.84.md` finding | Severity | Security disposition | Required action before production migration |
|---|---|---|---|
| §9.1 — no authenticated real-HTTP server-function test | **HIGH — assurance / boundary-verification gap** | Blocking | Add a bounded real-HTTP authenticated verification harness or equivalent controlled test that exercises the compiled server-function endpoints and proves auth-before-privilege, tenant isolation, caller-JWT Catalog execution, privileged bookkeeping separation, and real retry/concurrency behavior. |
| §9.3 — declared-size-only decompression protection | **HIGH — availability / resource-exhaustion** | Blocking | Enforce the decompressed-byte ceiling using actual produced bytes or an equivalently strong parser-isolation/resource-limit boundary. Do not rely only on attacker-controlled ZIP size metadata. Add a malicious understated-size fixture/test. |
| §9.4 — post-hoc 10-second parser timeout | **MEDIUM — availability / event-loop containment** | Blocking in combination with parser exposure | Enforce a real execution budget through cancellable/isolated parsing (for example a worker/process boundary with termination) or another mechanism that actually stops work after the approved limit. Add a test demonstrating termination/containment, not merely rejection after completion. |
| §4.6 — raw FK error on hard delete | **MEDIUM — error sanitization / availability regression** | Blocking | Ensure imported/matched-product references are handled by the normal governed delete rejection path (or equivalently sanitized) so raw FK/constraint details are not exposed and hard-delete behavior remains predictable. |

---

## 5. Privileged Bookkeeping and Audit-Integrity Verification

### Verified correct

- `requireSupabaseAuth` validates the Bearer token and obtains claims before entering the server-function handler.
- `catalogImportPreview` and `catalogImportCommit` re-derive the Owner's business through `businesses.owner_id = userId` before dynamically importing `supabaseAdmin`.
- The browser does not supply an authoritative business ID, actor ID, role, permission flag, `resolved_product_id`, or audit timestamp.
- `supabaseAdmin` is dynamically imported from `client.server.ts` inside handler bodies.
- The implementation uses fixed `.from("catalog_import_batches")` / `.from("catalog_import_rows")` targets. No request-controlled table or column selector was found.
- Catalog duplicate reads and Catalog Product Truth mutations use the caller-JWT `supabase` client, not `supabaseAdmin`.
- `resolved_product_id` is assigned from `create_catalog_product`'s returned `product_id`.
- Owner-only Phase 1 behavior remains fail-closed for Manager/Employee because non-owners cannot resolve an owned business.
- Reference Cost values are only persisted to parsed snapshots when the current Owner authority check allows them; commit invokes the governed `record_catalog_reference_cost_change` command through the caller-JWT client.

### Confirmed defect — skip mutation occurs before claim

`catalogImportCommit` performs:

1. server-derived business/Owner check;
2. privileged update of selected `POSSIBLE_MATCH` / `NEEDS_CORRECTION` rows to `SKIPPED`;
3. only then attempts the atomic batch transition from `previewed|failed` to `committing`.

Consequences:

- a request against an already `committed` batch can still mutate eligible row statuses to `SKIPPED` before the function discovers the batch is already committed;
- a second concurrent request can mutate skip-state before losing the batch claim;
- the ordinary authenticated role still cannot forge rows directly through REST, but an authenticated Owner can cause a privileged server write outside the intended claimed lifecycle window.

This weakens the earlier RSB-3 audit-evidence guarantee and the Revision 4.0 rule that a committed batch does not reopen/change lifecycle evidence.

**Minimum correction:** acquire/validate the authoritative batch state first; only the winning claimed request may persist skip choices, and terminal `committed` batches must be immutable through the commit endpoint.

---

## 6. Multi-Command Row Sequencing / Idempotency Assessment

### Positive findings

- `create_catalog_product` reuses the persisted row idempotency key.
- follow-up selling-price/tax/Reference-Cost keys are deterministic UUIDv5 values derived from `(row_idempotency_key, operation)` and remain stable for the same row operation.
- all Product Truth commands use the caller-JWT client.
- Category creation uses the existing governed `create_catalog_category` command, never service-role table writes.

### Confirmed integrity weakness

After `create_catalog_product` succeeds, the implementation immediately marks the support row:

`CREATED + resolved_product_id + resolved_by + resolved_at`

Only afterward does it call:

- `record_catalog_selling_price_change`;
- `record_catalog_tax_change`;
- `record_catalog_reference_cost_change`.

For each follow-up, the implementation checks only the Supabase transport/PostgREST `error` field. It does not verify the returned governed command result's `outcome` / `rejection_reason`.

If a follow-up errors:

- the row remains `CREATED`;
- only an in-memory `warnings` entry is returned;
- the warning is not persisted as retry/audit state;
- the row will not be selected by a later retry because retries select only `READY` / `FAILED` rows;
- if there are no unrelated `FAILED` rows, the batch is marked `committed`;
- re-uploading the corrected file creates a new batch and therefore new row-derived follow-up keys rather than resuming the original operation identity.

This means stable follow-up keys exist but the orchestration does not actually provide a durable retry path that uses them after a follow-up failure. It can also report a committed import whose requested commercial fields are incomplete or whose governed command returned a rejection that was never interpreted.

**Minimum correction:** make follow-up outcome state durable and retryable without re-creating the product; inspect governed command results, preserve/reuse the deterministic follow-up keys, resolve ambiguous outcomes through the existing governed idempotency/outcome mechanisms, and do not declare the batch fully committed while required follow-up operations remain unresolved.

### Category creation

No material authorization expansion was found. The command is caller-JWT governed and archived-category conflict handling remains fail-closed. A stable category-creation idempotency key would improve retry hygiene, but the current category re-read plus business-name uniqueness materially limits duplication risk; this item is secondary to the blocking follow-up-state defect above.

---

## 7. Negative-Test Sufficiency / Missing-Test Matrix

### Directly executed and evidenced

| Test area | Evidence status |
|---|---|
| Authenticated direct INSERT/UPDATE/DELETE to support tables denied | **DIRECT** — real test-project PostgREST tests |
| Owner can read own support records | **DIRECT** |
| Cross-business batch/row SELECT hidden | **DIRECT** |
| `anon` support-table access denied | **DIRECT** |
| Tenant-binding batch/business FK | **DIRECT** |
| CREATED/non-CREATED resolution-evidence constraints | **DIRECT** |
| Batch committed/status timestamp coherence | **DIRECT** |
| Row idempotency-key uniqueness | **DIRECT** |
| Batch→row non-destructive delete restriction | **DIRECT** |
| Two simultaneous DB claim updates — exactly one winner | **DIRECT** |
| Already committed batch cannot be re-claimed at DB-claim level | **DIRECT** |
| CSV literal formula-like values | **DIRECT** pure-logic test |
| Macro-enabled/non-ZIP/missing-manifest workbook rejection | **DIRECT** pure-logic test |
| Declared decompressed-size overflow rejection | **DIRECT** pure-logic test |
| Row/column/cell limits | **DIRECT** pure-logic test |
| XLSX formula cached-result behavior | **DIRECT** pure-logic test |

### Indirectly covered / code-inspected only

| Test area | Evidence status |
|---|---|
| Caller JWT precedes privileged import writes | **INDIRECT** — code inspection; no authenticated real-HTTP transaction |
| Owner-only import / Manager and Employee denial through server function | **INDIRECT** — owner lookup logic; no real HTTP negative request |
| Browser business/actor spoof cannot redirect write | **INDIRECT** — server input shapes/code inspection |
| Service-role fixed-table-only use | **INDIRECT** — code inspection + reported bundle scan |
| Service-role absent from client bundle | **INDIRECT FOR THIS REVIEW** — `report1.84.md` build-scan evidence; repository source confirms dynamic import convention |
| Product mutation attributable to caller JWT | **INDIRECT** — code inspection of RPC client |
| Raw upload not persisted | **INDIRECT** — code path has no Storage/file persistence |
| React rendering of imported strings | **INDIRECT** — JSX text interpolation, no dangerous HTML sink found in inspected import UI |

### Still missing and required before production migration

1. authenticated real-HTTP `catalogImportPreview` happy path with real `FormData`;
2. missing/invalid/expired token real-HTTP rejection proving zero bookkeeping writes occur;
3. non-owner real-HTTP preview/commit denial;
4. cross-business real-HTTP `catalogImportGetBatch` and `catalogImportCommit` non-disclosure;
5. real-HTTP browser-supplied spoof fields proving they cannot redirect business/actor authority;
6. full real-HTTP preview → review → commit path proving caller-JWT Catalog mutation and service-role bookkeeping separation in one transaction flow;
7. real-HTTP concurrent commit requests proving the losing endpoint request performs **zero** support-row and Product Truth mutations;
8. committed-batch replay with `skipRowNumbers`, proving terminal rows cannot be altered — currently expected to fail due the confirmed defect;
9. partial retry using actual Catalog commands and persisted row idempotency keys;
10. follow-up price/tax/Reference-Cost failure/rejection and retry with the same deterministic follow-up operation identity;
11. unknown/ambiguous follow-up command outcome resolution;
12. Reference Cost non-disclosure through the actual HTTP preview/get-batch path;
13. malicious XLSX whose ZIP metadata understates actual expansion, proving produced decompressed bytes cannot exceed the bound — currently missing because the bound is not implemented;
14. parser execution-budget test proving work is actually cancelled/contained at the wall-clock limit — currently missing because the limit is post-hoc;
15. external-resource workbook fixture proving no network/resource fetch occurs during XLSX load;
16. raw-error/logging test proving imported values, database detail, service-role values and raw exceptions do not enter logs or HTTP responses;
17. imported-product hard-delete test proving the caller receives a sanitized governed rejection rather than a raw FK error — currently expected to fail;
18. command-result rejection test for each follow-up RPC proving `outcome != completed` is handled truthfully — currently not implemented.

---

## 8. Parser / Output Safety Assessment

### Preserved

- `.csv` and `.xlsx` only at the import handler.
- 5 MB compressed upload-size check before parsing.
- CSV rejects ZIP-magic payloads and invalid UTF-8.
- XLSX requires a ZIP central directory and a plain OOXML workbook content type.
- macro-enabled workbook content type is rejected.
- formulas are not evaluated; formula cells are converted from cached result values.
- unknown column values are not copied into durable snapshots; only recognized fields are mapped.
- unauthorized Reference Cost is excluded from the parsed snapshot.
- database operations use Supabase query/RPC parameterization, not SQL string concatenation.
- imported UI strings are rendered through normal React text interpolation; no `dangerouslySetInnerHTML`-style sink was found in the inspected import route.
- raw source files are kept in memory and are not persisted to Storage or a support table.

### Corrections required

#### Decompression depth

`verifyXlsxStructure` trusts attacker-controlled central-directory `uncompressedSize` fields to enforce the 25 MB total. It does not count actual bytes produced by decompression before `exceljs` receives the workbook. This is not a hard decompression bound.

#### Wall-clock containment

Both CSV and XLSX parsers measure elapsed time after parsing and reject only after work completes. The 10-second value is therefore an outcome-validation threshold, not an execution limit.

#### Raw exception logging

The row loop contains:

`console.error("[catalog-import] row ... failed:", err)`

This logs the raw error object. One local exception path includes the imported Category label in the thrown message; database/client errors may also contain internal details. Logging must be reduced to sanitized codes/context and must not emit merchant spreadsheet values or raw database exceptions.

#### HTTP error serialization

Preview catches only `ImportLimitError`; other server/database errors are re-thrown. The current UI displays a generic mutation error, but there is no authenticated real-HTTP evidence establishing what the compiled server function returns over the wire in production mode. This must be verified and, if necessary, sanitized.

---

## 9. Imported-Product Hard-Delete Security Classification

The new `matched_product_id` / `resolved_product_id` foreign keys intentionally retain import evidence and correctly prevent silent evidence deletion.

The existing `delete_catalog_product` command, however, pre-checks only its prior dependent-history sources. It then issues a physical `DELETE FROM catalog_products`. If an import-support row references that product, PostgreSQL can raise a foreign-key violation that the command does not map to its normal `DEPENDENT_HISTORY_CONFLICT` result.

### Security consequence

- **No authorization bypass found.** The command first resolves the caller's own business and product.
- **No cross-business enumeration oracle found.** Foreign-business products remain outside the caller's resolved business path.
- **Schema/error-detail leakage risk exists.** A raw Postgres/PostgREST FK error may reveal constraint/table details and produces inconsistent merchant-facing error semantics.
- **Availability/behavior regression exists.** A legitimate hard-delete operation fails through an unexpected exception path instead of the governed rejection contract.

**Severity:** `MEDIUM`.

**Required action:** bounded correction before production migration so import-support references produce the existing clean dependent-history rejection or an equivalently sanitized governed outcome.

---

## 10. Regression Check Matrix

| Locked boundary | Result |
|---|---|
| Exactly nineteen public Catalog commands | **PASS** |
| No twentieth public Catalog/import command | **PASS** |
| No `reactivate_catalog_category` | **PASS** |
| Caller JWT remains merchant authority source | **PASS** |
| Owner-only import under current permission infrastructure | **PASS** |
| Manager fail-closed | **PASS** |
| Employee denied | **PASS** |
| Authenticated support-table DML denied | **PASS** |
| Owner-only support-table SELECT / cross-business isolation | **PASS** |
| Reference Cost withheld from unauthorized snapshot | **PASS** for current Owner-only posture |
| Raw file remains transient/unretained | **PASS** |
| No automatic duplicate overwrite | **PASS** |
| No automatic Inventory creation | **PASS** |
| No global mutable taxonomy | **PASS** |
| No unit conversion | **PASS** |
| No browser service-role static import / source exposure | **PASS** by source inspection; bundle scan evidence recorded in `report1.84.md` |
| Service role never calls Catalog Product Truth commands | **PASS** |
| Server-only bookkeeping rows remain immutable after terminal commit | **FAIL** — `skipRowNumbers` mutation precedes batch claim/status check |
| Required commercial follow-up operations remain replayable until resolved | **FAIL** — row becomes `CREATED` and batch may commit despite follow-up error/rejection |
| Sanitized row-level logging | **FAIL** — raw `err` object logged |
| Hard-delete governed error contract after import FK introduction | **FAIL** — raw FK path disclosed/confirmed |
| Enforced produced-byte decompression ceiling | **FAIL** |
| Enforced preemptive parser wall-clock ceiling | **FAIL** |
| Authenticated real-HTTP import boundary tested | **FAIL / MISSING** |

---

## 11. Minimum Bounded Correction Package

Mission Control does not need to reopen Product Truth or the nineteen-command architecture. A bounded implementation correction can address the security blockers:

1. **Real authenticated HTTP verification**
   - add a live compiled-server test harness;
   - exercise preview/get-batch/commit with real signed-in test users and real HTTP requests;
   - include missing/invalid token, non-owner, cross-business, spoof input, concurrent commit, and replay cases.

2. **Hard decompression containment**
   - enforce the 25 MB ceiling from actual produced decompressed bytes or an equivalently strong isolated parser resource boundary;
   - add a dishonest-size decompression-bomb fixture.

3. **Real parser execution budget**
   - move parsing to a cancellable/terminable worker/process or equivalent isolation and enforce the approved wall-clock budget;
   - add a termination test.

4. **Atomic commit ordering / audit immutability**
   - perform authoritative batch claim/status validation before any privileged skip-row mutation;
   - only the winning request may apply skip choices;
   - committed batches must reject all lifecycle-row mutations.

5. **Durable multi-command row outcome**
   - inspect every governed follow-up command result, not only transport error;
   - persist unresolved follow-up state/warnings sufficiently for retry/audit;
   - reuse deterministic follow-up keys on retry;
   - do not declare the import fully committed while required follow-up commands remain unresolved;
   - resolve unknown outcomes through the governed idempotency/outcome mechanism rather than silently converting them to non-durable warnings.

6. **Sanitized error/log boundary**
   - never log raw row exceptions or imported cell/category values;
   - return only bounded merchant-safe server-function errors;
   - add real-HTTP response/log negative tests.

7. **Hard-delete error normalization**
   - include import-support references in the governed dependent-history behavior, or otherwise map the FK failure to the existing sanitized rejection contract.

After correction, Security should perform a focused implementation re-verification before Mission Control considers production migration.

---

## 12. Production-Migration Security Recommendation

**Do not authorize production migration yet.**

The test-project schema itself is directionally strong and the fundamental caller-JWT/service-role separation remains viable. The blockers are bounded to parser containment, server-function verification, privileged commit ordering/audit immutability, multi-command outcome persistence/retry, logging/error sanitization, and hard-delete normalization.

No production migration, deploy, publish, Lovable mutation, Product Truth redesign, or Catalog-command expansion is justified by this report.

---

## 13. No Implementation Confirmation

Under this Security mission:

- no application code was edited;
- no dependency was installed or changed;
- no migration was created or applied;
- no test or production Supabase data was mutated;
- no privileged credential was created, rotated, or used for mutation;
- no Catalog command was changed;
- no Lovable change occurred;
- no publish/deploy/domain cutover occurred;
- no production migration was authorized or executed.

Only this review report was created.

---

## 14. Final Verdict

`SECURITY IMPLEMENTATION CHANGES REQUIRED BEFORE PRODUCTION-MIGRATION GATE`

This verdict requires a bounded correction and re-verification. It does not authorize implementation from this Security room, production migration, release, publish, deploy, domain cutover, or self-merge.
