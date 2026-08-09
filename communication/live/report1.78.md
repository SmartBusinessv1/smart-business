# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — FOCUSED SECURITY RE-REVIEW

**Report ID:** report1.78  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** `communication/live/instruction1.71.md`  
**Implementation Authority:** NONE  
**Build Authority:** NONE

---

## 1. Executive Verdict

Security & Permissions Architecture independently re-reviewed Revision 2.0 of:

`docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

against:

- `communication/live/instruction1.70.md`;
- `communication/live/report1.75.md`;
- `communication/live/report1.76.md`;
- `communication/live/report1.77.md`;
- the Founder Product Decision Record;
- the Kerala Market Catalog Glossary;
- the locked nineteen-command Catalog architecture.

Revision 2.0 materially improves the security contract and closes most original findings. The upload trust boundary, parser controls, D-058 fail-closed behavior, Reference Cost handling, duplicate-resolution ceiling, preset isolation, transient-file policy, browser authority boundary, and no-service-role-as-authorization principle are all concretely specified.

However, the proposed import-support persistence model leaves `catalog_import_batches` and `catalog_import_rows` directly mutable by `authenticated` actors within their own business while simultaneously treating those rows as the batch/row audit trail and commit/retry state machine. This is not accepted as a harmless display-only limitation.

A technically sophisticated authorized owner could forge import status, `resolved_product_id`, `resolved_by`, `resolved_at`, correction state, and batch state through the ordinary REST surface. Although this does not grant direct Catalog Product Truth mutation or cross-business access, it materially weakens the trustworthiness of the import audit trail and of the orchestration state used to reason about replay and completion.

Revision 2.0 also specifies `pg_advisory_xact_lock(...)` as a server-orchestration primitive while the same design limits the server to a caller-JWT-scoped Supabase client and introduces no database function or transaction-capable boundary through which the TanStack server function can directly acquire and hold that PostgreSQL transaction lock across the orchestration sequence. The existing Catalog commands use advisory locks internally, but that does not make the primitive directly available to the server-function layer.

These are security-contract defects in SEC-7, SEC-9 and SEC-13. They require a narrow EIS correction before Build Lock.

**Overall verdict:**

`SECURITY CHANGES REQUIRED BEFORE BUILD LOCK`

---

## 2. Original SEC-1 Through SEC-16 Resolution Verification

| ID | Original finding | Focused re-review result | Verification |
|---|---|---|---|
| SEC-1 | Upload trust boundary | **VERIFIED RESOLVED** | `.csv`/`.xlsx` only; server-side structural content verification; 5 MB compressed limit; 25 MB XLSX decompressed limit; worksheet/row/column/cell/runtime limits; malformed/encrypted/macro-enabled/archive-disguised rejection; filename treated as display metadata only. |
| SEC-2 | XLSX hostile-content controls | **VERIFIED RESOLVED** | `exceljs` is locked; no formula evaluation engine; cached scalar handling only; macros, encrypted workbooks and incompatible content types rejected; external links/embedded executable behavior not followed; decompressed-size bound is separate from upload-size bound. |
| SEC-3 | CSV/formula injection | **VERIFIED RESOLVED** | Formula-trigger text remains inert during parse; future correction/download output is neutralized before spreadsheet re-open. |
| SEC-4 | Server-side authority | **VERIFIED RESOLVED** | TanStack server functions use the authenticated caller context; actor/business/authority are re-derived on preview and commit; client business/actor/role/permission/executor authority is not trusted; Catalog mutations remain existing governed RPCs. |
| SEC-5 | D-058 Manager authorization | **VERIFIED RESOLVED** | Phase 1 fails closed: Owner allowed; Manager denied until approved runtime permission infrastructure exists; Employee denied; no display-role/JWT-metadata/local-state shortcut. |
| SEC-6 | Reference Cost confidentiality | **VERIFIED RESOLVED** | Unauthorized Reference Cost is omitted from persisted row snapshots rather than merely hidden in UI; no preview/quarantine/duplicate/audit/output disclosure is authorized; final mutation reuses the cost-authorized command boundary. |
| SEC-7 | Support-table schema/RLS/grants | **PARTIALLY RESOLVED — CHANGE REQUIRED** | Exact tables, grants and cross-business RLS are specified, but authenticated direct INSERT/UPDATE allows the Owner to forge their own import bookkeeping and audit state. This is not acceptable when those same rows are relied on as authoritative import lifecycle/audit evidence. |
| SEC-8 | Quarantine minimization | **VERIFIED RESOLVED** | Persisted snapshots use a recognized-field allowlist; unknown column values, formulas, workbook metadata, links, raw binaries and system metadata are excluded; Reference Cost is separately gated. |
| SEC-9 | Replay/concurrent commit protection | **PARTIALLY RESOLVED — CHANGE REQUIRED** | Persisted row idempotency keys and retry reuse are correct. The proposed batch advisory-lock step is not executable as written from the caller-JWT Supabase server-function boundary without an additional DB transaction-capable mechanism, and directly mutable batch status weakens commit-once state trust. |
| SEC-10 | Duplicate-resolution authority ceiling | **VERIFIED RESOLVED** | `Update existing product` is removed from Build Now import scope; possible matches grant no update authority; ordinary Catalog UI remains the only correction path for existing products. |
| SEC-11 | Privileged/service-role boundary | **VERIFIED RESOLVED AS A PRINCIPLE; NARROW CORRECTION REQUIRED BY SEC-7/9** | Service role is not used as the current authorization model and is never exposed to the browser. A narrow server-only bookkeeping credential is the recommended correction below, with caller authority still independently verified first. |
| SEC-12 | Browser authority boundary | **VERIFIED RESOLVED** | Browser is limited to upload/display/choice/confirmation; business, actor, permission, normalization, uniqueness, cost authority, row eligibility and commit state remain server decisions. |
| SEC-13 | Audit model | **PARTIALLY RESOLVED — CHANGE REQUIRED** | Per-product audit remains trustworthy through existing Catalog commands. Batch/row bookkeeping cannot simultaneously serve as trusted audit evidence while the same authenticated actor can arbitrarily mutate its lifecycle/result columns through REST. |
| SEC-14 | Preset isolation | **VERIFIED RESOLVED** | Presets are version-controlled application constants; no global mutable master-data table; unused presets create no rows; explicit merchant selection creates/selects only normal business-owned categories. |
| SEC-15 | Imported string/output safety | **VERIFIED RESOLVED** | Imported values remain untrusted text, use parameterized governed write paths, are safely rendered, and formula-like output is neutralized for spreadsheet downloads. |
| SEC-16 | Raw upload retention | **VERIFIED RESOLVED** | Multipart transient processing is locked; original spreadsheet is not persisted; no import-source Storage bucket is required in Phase 1. |

---

## 3. Explicit Accepted-Limitation Decision

### Decision

`CHANGES REQUIRED`

The accepted limitation recorded in `report1.77.md` is **not accepted for Phase 1** in its current form.

### Reason

The blast radius is business-local, but the affected data is not merely cosmetic UI history.

Revision 2.0 explicitly uses `catalog_import_batches` and `catalog_import_rows` for:

- batch lifecycle state;
- row lifecycle state;
- persisted row idempotency keys;
- resolved Product IDs;
- resolving actor/timestamps;
- correction outcomes;
- batch-level audit evidence;
- retry/completion reasoning.

Direct authenticated mutation of these fields therefore creates a material audit-trust and orchestration-integrity weakness even though it does not directly bypass `create_catalog_product` or cross tenant boundaries.

An Owner must be allowed to control Product Truth through authorized product commands. That does not imply they should be able to forge system-produced evidence saying an import row was created, resolved by a particular actor, or committed at a particular point in the server workflow.

---

## 4. Required Narrow Architecture Correction

The EIS should be corrected using the narrowest design that preserves all locked Product Truth and the exact nineteen public Catalog commands.

### 4.1 Keep the two support tables

Retain:

- `catalog_import_batches`;
- `catalog_import_rows`.

They remain support/bookkeeping records, not Catalog Product Truth.

### 4.2 Remove authenticated write grants

Replace the proposed direct grants with:

```sql
GRANT SELECT ON catalog_import_batches, catalog_import_rows TO authenticated;
REVOKE INSERT, UPDATE, DELETE ON catalog_import_batches, catalog_import_rows FROM authenticated;
```

Owner-scoped RLS remains on authenticated SELECT so the browser may read only the current Owner business's own preview/outcome data.

Employees and unauthorized users continue to receive no rows.

### 4.3 Use a narrow server-only bookkeeping client

The authenticated TanStack server function must continue to establish authority using the caller's JWT-scoped client first.

After successful authentication and Owner/business re-derivation, the server may use a **server-only privileged Supabase client solely for the two import-support tables**.

This credential:

- is never sent to browser code;
- is never used to authorize the actor;
- is never used for Catalog Product Truth mutation;
- is never used to call `create_catalog_product` or other Catalog commands on the actor's behalf;
- is never exposed through client environment variables, logs, responses or downloadable artifacts;
- receives business ID, actor ID and allowed state transitions only from server-derived values;
- performs no arbitrary client-selected table or column operation.

All Catalog reads/mutations, duplicate checks and row-level Product creation continue through the caller-JWT-scoped client and the existing governed nineteen-command surface.

This does **not** create a twentieth public Catalog command.

### 4.4 Replace the unexecutable server advisory-lock design with atomic state acquisition

Do not require the TanStack server function itself to execute and hold `pg_advisory_xact_lock(...)` across multiple PostgREST/RPC requests.

Use an atomic compare-and-set transition on the server-owned batch row instead:

1. commit request re-authenticates and re-derives Owner/business;
2. server-only bookkeeping write attempts to transition the matching batch from `previewed` or retryable `failed` to `committing` using a conditional update;
3. exactly one concurrent request may obtain that transition;
4. a request that updates zero rows re-reads the batch and returns the appropriate `IN_PROGRESS` or `ALREADY_COMMITTED` result;
5. rows use their already-persisted `row_idempotency_key` when calling the existing `create_catalog_product` command through the caller-JWT client;
6. successful row state is written server-side only;
7. retry reuses the same row key and skips/replays completed rows according to the existing Catalog command's idempotency outcome;
8. terminal batch state is written server-side only.

The database update that claims the batch must predicate on both:

- authoritative `business_id`;
- expected current lifecycle state.

The client cannot provide the business scope or final state transition authority.

### 4.5 Preserve audit trust

With authenticated writes removed:

- `initiated_by` is server-derived;
- `resolved_by` is server-derived;
- `created_at`, `resolved_at` and `committed_at` are system-produced;
- `resolved_product_id` comes only from the actual governed Catalog command result;
- lifecycle status is produced only by server orchestration;
- ordinary authenticated users cannot forge completion evidence through REST.

General audit continues not to store full spreadsheets or Reference Cost.

---

## 5. Residual Blockers / Required EIS Corrections

### RSB-1 — Import-support writes must be server-only

**Status:** BLOCKER

Revision 2.0 must remove direct authenticated INSERT/UPDATE access to import-support tables.

### RSB-2 — Batch commit concurrency primitive must be executable from the chosen architecture

**Status:** BLOCKER

Revision 2.0 must replace the server-layer `pg_advisory_xact_lock(...)` step with a fully specified mechanism executable through the selected TanStack/Supabase boundary. The atomic server-owned status transition above is accepted.

### RSB-3 — Batch audit evidence must be non-forgeable by the ordinary authenticated REST role

**Status:** BLOCKER

If the support rows remain the batch-level audit record, actor/result/timestamp/lifecycle fields must be server-generated and protected from ordinary authenticated writes.

No other original SEC-1 through SEC-16 issue remains blocking after these corrections.

---

## 6. Locked Boundaries Confirmed Unchanged

This focused re-review confirms:

- Product Truth is unchanged;
- D-055 through D-058 remain unchanged;
- D-008 preset/business-isolation behavior remains unchanged;
- Reference Cost authority remains separate;
- exactly nineteen public Catalog commands remain locked;
- no `reactivate_catalog_category` is authorized;
- no automatic duplicate overwrite is authorized;
- no browser direct Catalog-table writes are authorized;
- no browser service-role exposure is authorized;
- no unit conversion is authorized;
- no automatic Inventory-row creation is authorized;
- no compulsory global Category taxonomy is authorized;
- no Product auto-categorization is authorized;
- no publish/deploy/domain cutover is authorized.

The required correction is an implementation-security boundary for import bookkeeping only. It does not redesign Product Truth or expand Build Now scope.

---

## 7. No Implementation Confirmation

Under this mission:

- no application code was implemented;
- no dependency was installed;
- no migration was created or applied;
- no Supabase table, grant, RLS policy or data was modified;
- no Lovable change occurred;
- no Build Mode occurred;
- no publish/deploy/domain cutover occurred.

Only this focused Security re-review report was created.

---

## 8. Next Logical Step

Mission Control should authorize a documentation-only reconciliation of Revision 2.0 limited to RSB-1 through RSB-3:

1. make import-support writes server-only;
2. replace the unexecutable server advisory-lock step with atomic server-owned batch-state acquisition;
3. preserve caller-JWT authorization and existing Catalog RPC mutation authority;
4. update the audit wording so the batch/row record is trustworthy under the revised grant model;
5. return the corrected EIS for a narrow Security confirmation.

No broad Product or Engineering redesign is required.

After those corrections are merged and verified, Mission Control may reconsider Build Lock.

---

## 9. Final Verdict

`SECURITY CHANGES REQUIRED BEFORE BUILD LOCK`
