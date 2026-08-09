# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-1 — NARROW SECURITY CONFIRMATION

**Report ID:** report1.80  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** SB-P-1.11-GC-1 — Build Now Gap Closure  
**Executing Room:** Security & Permissions Architecture  
**Authorized By:** `communication/live/instruction1.73.md`  
**Implementation Authority:** NONE  
**Build Authority:** NONE

---

## 1. Executive Verdict

Security & Permissions Architecture performed the narrow confirmation required by `communication/live/instruction1.73.md` against the latest merged `main` at:

`5efeb7de34ccd9cf3aa1fedbc3c3382d2116603b`

Reviewed canonical inputs:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md` — Revision 3.0;
2. `communication/live/report1.78.md`;
3. `communication/live/instruction1.72.md`;
4. `communication/live/report1.79.md`;
5. current repository architecture where needed for read-only verification, including:
   - `src/integrations/supabase/client.server.ts`;
   - `src/integrations/supabase/auth-middleware.ts`.

The confirmation scope was limited to RSB-1, RSB-2, RSB-3, and the mandatory regression/negative-test design checks in `instruction1.73.md`.

Revision 3.0 closes all three residual blockers at the design-contract level without changing Product Truth, expanding the public Catalog command surface, or weakening the previously accepted security boundaries.

**Final verdict:**

`SECURITY READY FOR BUILD LOCK`

This verdict confirms the security design-lock gate only. It does not authorize Build Mode or implementation.

---

## 2. Exact Revision 3.0 Sections Reviewed

The following EIS sections were reviewed directly because they contain the RSB corrections or their security regressions:

- §3 — Existing Architecture That Must Not Be Broken;
- §12 — Bulk Import Mutation Architecture;
- §13 — Idempotency / Repeat Upload Safety;
- §14 — Permissions;
- §32B / mandatory Revision 3.0 negative-security tests;
- §45.1 — Server-function execution surface;
- §45.1.1 — Narrow server-only bookkeeping client;
- §45.5 — Import-support persistence;
- §45.5.3 — RLS and grants;
- §45.5.4 — Batch/row lifecycle and idempotency algorithm;
- §45.7 — Reference Cost handling;
- §45.9 — Raw upload retention;
- §45.12 — Privileged/service-role boundary;
- §45.13 — Preset isolation;
- §45.14 — Audit-event model;
- §45.15 — Server-function test architecture;
- §46 — Explicit confirmation of exactly nineteen public Catalog commands.

Repository read-only verification also confirmed that:

- `requireSupabaseAuth` constructs a caller-JWT-scoped Supabase client and validates the Bearer token before exposing the request context;
- `client.server.ts` contains the server-only `supabaseAdmin` service-role client and explicitly documents the dynamic-import/server-only bundling rule used by Revision 3.0.

---

## 3. RSB Resolution Matrix

| Security Blocker | Status | Confirmation |
|---|---|---|
| RSB-1 — Import-support writes must be server-only | `VERIFIED RESOLVED` | `authenticated` is granted `SELECT` only on `catalog_import_batches` and `catalog_import_rows`; `INSERT`, `UPDATE`, and `DELETE` are revoked. All bookkeeping writes move to the narrow server-only client after caller-JWT authentication and Owner/business re-derivation. The privileged client is restricted to fixed operations on exactly the two support tables and is explicitly barred from Catalog Product Truth and the nineteen Catalog commands. |
| RSB-2 — Executable batch commit concurrency | `VERIFIED RESOLVED` | Revision 3.0 removes the server-layer `pg_advisory_xact_lock(...)` design and replaces it with a single atomic conditional update of the authoritative batch row, predicated on `batch_id`, server-derived `business_id`, and allowed pre-commit states. Exactly one concurrent claimant can transition to `committing`; a zero-row claim performs only a re-read and returns `NOT_FOUND`, `IN_PROGRESS`, or `ALREADY_COMMITTED`. Persisted row idempotency keys are reused across retries. |
| RSB-3 — Non-forgeable batch audit evidence | `VERIFIED RESOLVED` | Ordinary authenticated REST writes cannot modify support tables. `initiated_by` and `resolved_by` are server-derived, `resolved_product_id` is written only from a governed Catalog-command result, lifecycle states are server-produced, and timestamps are system-produced. The resulting batch/row records are credible import lifecycle/audit evidence under this write model. |

No RSB item is `CHANGE REQUIRED` or `EVIDENCE GAP`.

---

## 4. RSB-1 Detailed Confirmation — Server-Only Import-Support Writes

Revision 3.0 now specifies without ambiguity:

- `authenticated` receives `SELECT` only on both support tables;
- `authenticated` has no `INSERT`, `UPDATE`, or `DELETE` grant on either table;
- Owner/business-scoped RLS remains on authenticated reads;
- caller-JWT authentication and authorization occur before the server-only bookkeeping client is loaded/used;
- actor and business are re-derived from the authenticated request;
- browser-supplied business ID, actor ID, role, permission, lifecycle state, resolved Product ID, or timestamps do not establish authority;
- the privileged client is used only for fixed `INSERT`/`UPDATE` operations on `catalog_import_batches` and `catalog_import_rows`;
- the privileged client never performs Catalog Product Truth mutation;
- the privileged client never invokes or substitutes for any of the nineteen Catalog commands;
- all Catalog reads/mutations continue through the caller-JWT-scoped client;
- the privileged credential is loaded only inside server handlers using the repository's documented dynamic-import convention and is barred from frontend bundles, client environment variables, logs, responses, downloads, and telemetry.

### RSB-1 conclusion

`VERIFIED RESOLVED`

---

## 5. RSB-2 Detailed Confirmation — Executable Batch Commit Concurrency

Revision 3.0's batch-acquisition design is executable through the selected TanStack/Supabase architecture because it requires no session-held transaction across multiple HTTP/PostgREST requests.

The authoritative claim is one conditional database update:

- target batch ID is supplied as the opaque batch reference but is not sufficient authority;
- `business_id` is independently server-derived from the caller;
- current state must be an allowed pre-commit state (`previewed` or retryable `failed`);
- the transition is atomically changed to `committing` by one statement;
- PostgreSQL statement/row atomicity allows only one concurrent request to satisfy the same state predicate;
- a losing claimant updates zero rows and performs no Catalog mutation;
- the loser re-reads only to return the truthful state (`NOT_FOUND`, `IN_PROGRESS`, `ALREADY_COMMITTED`, or defined equivalent);
- every row uses the idempotency key persisted at preview time;
- retry never mints a replacement idempotency key for a previously attempted row;
- already successful Catalog writes are replay-safe through the existing command idempotency contract;
- Catalog mutation continues through `create_catalog_product` or another existing governed command using the caller-JWT client, never the privileged bookkeeping client.

### RSB-2 conclusion

`VERIFIED RESOLVED`

---

## 6. RSB-3 Detailed Confirmation — Audit Evidence Integrity

Revision 3.0 closes the REST-level forgery path identified in `report1.78.md`.

The intended audit/lifecycle fields are now system-controlled:

- `initiated_by` — derived from the authenticated actor at preview creation;
- `resolved_by` — derived from the authenticated actor handling the governed result;
- `resolved_product_id` — accepted only from the actual governed Catalog command result;
- batch status — server-produced through the defined lifecycle;
- row status — server-produced from validation/command outcomes;
- `created_at` — database/system-produced;
- `resolved_at` — server/database-produced at actual resolution;
- `committed_at` — server/database-produced at terminal batch completion;
- correction/result state — server-produced and not ordinary REST-writable.

Because `authenticated` has no direct write grant on either support table, an Owner retains legitimate Product Truth authority through approved commands without gaining the ability to forge system-produced import evidence.

Cross-business authenticated reads remain RLS-isolated. The server-only write path explicitly derives and predicates on the current business rather than trusting a browser-provided business ID.

Reference Cost confidentiality is unchanged: the bookkeeping client is not authorized as a Catalog/cost mutation client; unauthorized Reference Cost remains omitted from persisted snapshots and output surfaces, and an authorized cost mutation still uses the existing cost-governed command through the caller-JWT path.

### RSB-3 conclusion

`VERIFIED RESOLVED`

---

## 7. Mandatory Regression Check

| Regression boundary | Result | Confirmation |
|---|---|---|
| Exactly nineteen public Catalog commands remain unchanged | PASS | Revision 3.0 introduces no new `SECURITY DEFINER` Catalog RPC and explicitly preserves the nineteen-command set. |
| No twentieth public Catalog/import command | PASS | Import orchestration remains a TanStack server workflow; bookkeeping writes are direct server-only support-table persistence, not a new public Catalog command. |
| Caller JWT remains merchant authority source | PASS | `requireSupabaseAuth` validates the Bearer token and supplies the caller-scoped client; Owner/business authority is re-derived before bookkeeping writes. |
| Catalog Product Truth mutations remain existing governed commands | PASS | Product creation and Reference Cost changes continue through existing RPCs using the caller-JWT client. |
| Browser receives no service-role credential | PASS | `supabaseAdmin` remains server-only; Revision 3.0 requires handler-local dynamic import and prohibits browser/log/response exposure. |
| Cross-business Product Truth and support-table isolation | PASS | Catalog boundaries are unchanged; support-table authenticated reads remain Owner/business RLS-scoped and privileged writes use server-derived business predicates. |
| Manager fail-closed | PASS | No Revision 3.0 change enables Manager import before approved permission infrastructure exists. |
| Employee import denied | PASS | No Revision 3.0 change grants Employee import or support-table access. |
| Reference Cost independently protected | PASS | §45.7 remains intact; privileged bookkeeping usage does not bypass cost-command authority. |
| Raw file transient/unretained | PASS | Phase 1 remains multipart transient processing with no raw file persistence or Storage bucket. |
| No automatic duplicate overwrite | PASS | Duplicate-resolution boundary remains unchanged. |
| No automatic Inventory creation | PASS | Unchanged and still prohibited. |
| No global mutable taxonomy | PASS | Presets remain version-controlled application suggestions; categories remain business-owned. |
| No unit conversion | PASS | Unchanged and prohibited. |
| No category reactivation | PASS | Still Build Later; no new command is introduced. |

No regression was identified.

---

## 8. Mandatory Verification-Matrix Assessment

This mission does not execute write tests. The Revision 3.0 design is sufficiently concrete to support all sixteen Build Mode negative tests required by `instruction1.73.md`.

| # | Required negative test | Design assessment |
|---|---|---|
| 1 | Browser REST INSERT to `catalog_import_batches` denied | SUPPORTED — no authenticated INSERT grant |
| 2 | Browser REST UPDATE to `catalog_import_batches` denied | SUPPORTED — no authenticated UPDATE grant |
| 3 | Browser REST INSERT to `catalog_import_rows` denied | SUPPORTED — no authenticated INSERT grant |
| 4 | Browser REST UPDATE to `catalog_import_rows` denied | SUPPORTED — no authenticated UPDATE grant |
| 5 | Cross-business SELECT denied | SUPPORTED — Owner/business RLS SELECT policy |
| 6 | Browser business ID cannot redirect privileged write | SUPPORTED — write uses server-derived business ID and fixed business predicate |
| 7 | Browser actor ID cannot become `initiated_by` / `resolved_by` | SUPPORTED — actor comes from validated caller JWT |
| 8 | Browser `resolved_product_id` cannot become audit evidence | SUPPORTED — Product ID comes only from governed Catalog result |
| 9 | Concurrent claims yield at most one `committing` acquisition | SUPPORTED — atomic conditional state transition |
| 10 | Losing concurrent request performs no duplicate Catalog mutation | SUPPORTED — zero-row claim exits before row mutation |
| 11 | Retry reuses persisted row idempotency key | SUPPORTED — row key is generated/persisted at preview and never replaced on retry |
| 12 | Successful Catalog mutation attributable to caller-JWT actor | SUPPORTED — Catalog RPC uses caller-JWT client, not privileged bookkeeping client |
| 13 | Privileged client cannot enter browser bundle | SUPPORTED — server-only module plus required handler-local dynamic import convention |
| 14 | Bookkeeping operation cannot target arbitrary table/column from client input | SUPPORTED — fixed operations against exactly two named support tables |
| 15 | Service-role credential absent from logs/responses/client env/downloads | SUPPORTED — explicit prohibited-exposure contract and existing server-only credential location |
| 16 | Authenticated users cannot forge terminal batch completion/audit state | SUPPORTED — no authenticated write grants; terminal state server-produced |

The EIS also specifies the extended Revision 3.0 test set covering partial retry, already-created rows, traceability of `resolved_product_id`, actor/timestamp non-forgeability, partial-failure consistency, and end-to-end business isolation.

---

## 9. Residual Blockers / Evidence Gaps

None within the authorized narrow confirmation scope.

No Revision 3.0 change directly regresses an already-verified SEC-1 through SEC-16 boundary.

The privileged bookkeeping client is intentionally a high-trust server boundary because `service_role` bypasses RLS. The design compensates by making its use narrow, fixed-table, post-authorization, server-derived, and non-Catalog. Build Mode must implement and test those constraints exactly; this review does not authorize deviation from them.

---

## 10. Locked Boundaries Confirmed

- Product Truth remains unchanged.
- D-001 through D-068 remain unchanged.
- Exactly nineteen public Catalog commands remain unchanged.
- No twentieth public Catalog command is authorized.
- No `reactivate_catalog_category` is authorized.
- No new product capability is introduced by Revision 3.0.
- No automatic duplicate overwrite is introduced.
- No automatic Inventory-row creation is introduced.
- No unit conversion is introduced.
- No compulsory/global mutable Category taxonomy is introduced.
- No Product auto-categorization is introduced.
- D-058 remains Owner-enabled / Manager fail-closed until approved infrastructure / Employee denied.
- Reference Cost remains separately protected.
- Raw source spreadsheets remain transient and unretained.
- No publish/deploy/domain cutover is authorized.

---

## 11. No Implementation Confirmation

Under this mission:

- no application code was implemented;
- no dependency was installed;
- no migration was created or applied;
- no schema, RLS, grant, role, or Supabase data was changed;
- no production or test database write was performed;
- no privileged credential was created, rotated, or used;
- no Lovable mutation occurred;
- no Build Mode occurred;
- no publish/deploy/domain cutover occurred.

Only this Security confirmation report was created.

---

## 12. Next Logical Step

After `communication/live/report1.80.md` is human-reviewed and merged, Mission Control may evaluate whether all SB-P-1.11-GC-1 design gates are satisfied.

If Mission Control determines the design gates are complete, it may issue a separate canonical Build Lock / implementation authorization.

This report itself does not authorize implementation.

---

## 13. Final Verdict

`SECURITY READY FOR BUILD LOCK`
