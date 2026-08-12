# SMART BUSINESS — SECURITY & PERMISSIONS ARCHITECTURE

# SB-P-1.11-FWR-7 — SECURITY & PERMISSIONS ARCHITECTURE REVIEW

**Report ID:** report1.102  
**Mission ID:** SB-P-1.11-FWR-7  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Founder Workflow Reconciliation  
**Authorized By:** `communication/live/instruction1.96.md`  
**Mode:** REVIEW MODE — SECURITY & PERMISSIONS ONLY  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE

---

## 1. Mission Identity and Exact Merged `main` SHA Reviewed

Exact latest merged `main` SHA reviewed:

`9f323f3125063927a33f088f22e8fb0eea926b13`

This is the merge commit for PR #225, which human-merged `communication/live/instruction1.96.md` and activated this mission.

No newer `main` commit existed when this review began.

Selected review baseline:

- primary Founder workflow architecture: `communication/live/report1.96.md`;
- corrected backend architecture: `communication/live/report1.98.md`;
- Inventory composite-FK correction: `communication/live/report1.100.md`;
- final Supabase confirmation: `communication/live/report1.101.md`.

Interpretation followed the canonical rule from `instruction1.96.md`: `report1.98.md` is the corrected BKR-1 through BKR-5 backend contract; `report1.100.md` supersedes only the incorrect Inventory-side FK-order clauses; `report1.101.md` confirms that correction as backend-valid.

---

## 2. Sources and Repository Evidence Inspected

Reviewed from merged `main`:

- `communication/live/instruction1.96.md`;
- `communication/live/report1.96.md`;
- `communication/live/report1.98.md`;
- `communication/live/report1.100.md`;
- `communication/live/report1.101.md`;
- current Catalog import orchestration and security precedent in `src/server-functions/catalog-import.ts`;
- current Catalog import parser/validation/idempotency support under `src/lib/catalog-import/**`;
- current server-only privileged-client boundary in `src/integrations/supabase/client.server.ts`;
- current authenticated caller-JWT middleware / caller-scoped Supabase pattern;
- canonical Inventory schema evidence, including `inventory_items` tenant key ordering;
- canonical Catalog schema evidence, including `catalog_products` tenant key ordering;
- current Inventory movement architecture and the existing governed Opening Stock movement path;
- current D-068 preview/confirm Catalog↔Inventory linking architecture;
- existing Catalog import support-table RLS/grant pattern used as the precedent for the proposed Inventory import support tables.

Repository-confirmed key facts used in this review include:

1. `inventory_items` uses the eligible tenant reference key `UNIQUE (id, business_id)`.
2. `catalog_products` uses `UNIQUE (business_id, id)`.
3. The corrected Inventory-side proposed FKs therefore correctly use `(inventory_item_id, business_id) -> inventory_items (id, business_id)`.
4. Existing Catalog import support tables use authenticated read-only + Owner-scoped RLS and server-only privileged lifecycle writes.
5. Product Truth Catalog mutations are kept on the caller-JWT governed-command path rather than the service-role bookkeeping path.
6. The current public Catalog command surface remains exactly nineteen commands; no twentieth command is required by the reviewed architecture.
7. The parser/runtime isolation decision remains an independent security gate and is not changed by this mission.

---

## 3. Security Threat Model Summary

The reviewed workflow accepts merchant-controlled CSV/XLSX data and uses it to orchestrate potentially consequential operations across Catalog identity, Inventory identity, Catalog↔Inventory linking, and Opening Stock.

Primary threat classes are:

- horizontal tenant breakout through forged business/product/item UUIDs;
- role escalation by Manager/Employee or future channels bypassing Owner-only Phase 1 authority;
- alternate Product Truth writes through privileged support-table bookkeeping;
- replay and unknown-outcome duplication of products, inventory items, links, or opening movements;
- stale confirmation replay against D-068 link state;
- partial-workflow corruption after interruption;
- silent duplicate merge/link or normalization bypass;
- forged terminal import state or manipulated correction state;
- sensitive merchant/import data leaking through logs/errors/support fields;
- parser/runtime exhaustion weakening the import security boundary;
- generated SKU collision/predictability being used to bypass business-scoped uniqueness.

The architecture is acceptable only if authorization is derived from authenticated identity at the authoritative boundary, tenant references are structurally constrained, support tables remain bookkeeping-only, and every consequential mutation remains governed and replay-safe.

---

# 4. SEC-1 Through SEC-12 Findings

## SEC-1 — Actor and Role Authority

**Disposition: PASS AT ARCHITECTURE LEVEL; Build Mode enforcement/tests mandatory.**

The reviewed architecture keeps Phase 1 Inventory/Catalog bulk onboarding Owner-only. Business identity is re-derived from the authenticated caller rather than accepted from browser state. Manager permission infrastructure remains absent and therefore Manager remains fail-closed. Employee remains unauthorized.

The proposed `create_inventory_item` operation is explicitly `SECURITY INVOKER`, using `auth.uid()` and the existing Owner-scoped Inventory RLS model. It does not create a service-role or executor-based identity shortcut.

Security invariant:

- every future UI, WhatsApp, voice, photo, API, or automation channel must invoke the same authoritative server/RLS permission path;
- no channel-specific role shortcut is permitted;
- frontend visibility, route availability, or possession of a batch/row ID is never authorization.

No implicit role escalation is present in the reviewed architecture.

---

## SEC-2 — Business Isolation and Tenant Binding

**Disposition: PASS.**

The proposed Inventory import support model binds every batch and row to a server-derived `business_id`.

Structural tenant integrity is correctly designed through:

- `inventory_import_rows (business_id, batch_id) -> inventory_import_batches (business_id, id)`;
- Catalog candidate/resolution references using the existing Catalog tenant key order `(business_id, catalog_product_id) -> catalog_products (business_id, id)`;
- Inventory candidate/resolution references, as corrected by `report1.100.md`, using `(inventory_item_id, business_id) -> inventory_items (id, business_id)`.

`report1.101.md` independently confirms that the corrected Inventory FK order is valid and preserves same-business referential enforcement.

A browser-supplied `business_id`, product UUID, item UUID, user UUID, `resolved_by`, or similar field must never override server-derived authority.

No architecture path reviewed requires a cross-business reference.

---

## SEC-3 — Product Truth Mutation Authority

**Disposition: PASS.**

The architecture preserves the separation between support-state authority and Product Truth authority.

Catalog Product Truth remains behind the existing governed Catalog commands. The workflow reuses existing Catalog creation/search/link operations rather than adding a generic privileged import command.

Inventory item creation is proposed through a narrow Inventory-domain `SECURITY INVOKER` RPC, `create_inventory_item`, with caller-JWT/RLS authority. It is not a Catalog command and does not count toward the nineteen-command Catalog surface.

Opening Stock remains behind the approved Inventory movement operation.

The server-only privileged bookkeeping client is limited to lifecycle/support state on the import tables. It must never:

- insert/update/delete `catalog_products`;
- insert/update/delete `inventory_items` as a Product Truth shortcut;
- call Catalog commands under service-role authority;
- create links directly;
- write current quantity directly;
- record Opening Stock by bypassing the Inventory movement operation.

No twentieth Catalog command is introduced or implied.

---

## SEC-4 — RLS, Grants, and Privileged Bookkeeping

**Disposition: PASS SUBJECT TO EXPLICIT BUILD INVARIANTS.**

The proposed support-table posture is consistent with the previously security-reviewed Catalog import pattern:

- `anon`: no access;
- `authenticated`: `SELECT` only;
- authenticated read policy: Owner-scoped by authoritative business ownership;
- no Manager/Employee support-table policy in Phase 1;
- no authenticated `INSERT`, `UPDATE`, or `DELETE` grant/policy;
- lifecycle writes only through the narrow server-only bookkeeping client after caller JWT validation + Owner/business re-derivation;
- no ordinary application DELETE path for import evidence;
- explicit neutralization of broad/default grants before narrow grants are applied.

The BKR-4 extension for `catalog_lifecycle_executor` is acceptable only as the same narrow precedent already used for Catalog import evidence: SELECT-only, business-scoped, solely for dependent-history evaluation in `delete_catalog_product`.

### Mandatory RLS/grant invariants for Build Mode

1. `anon` receives no table privilege on `inventory_import_batches`, `inventory_import_rows`, or any new idempotency support table.
2. `authenticated` receives no support-table DML privilege.
3. authenticated support-table SELECT is Owner-scoped at RLS, not merely filtered in application code.
4. Manager/Employee receive no policy by role assumption or future-intent inference.
5. service-role usage is fixed-table/fixed-operation bookkeeping only.
6. no service-role Catalog/Inventory truth mutation is introduced.
7. any executor-role grant is SELECT-only and business-scoped.
8. default privileges must not silently regrant broader DML.
9. support-table sequence/function/schema privileges must also be checked so no alternate DML surface is accidentally exposed.
10. direct REST attempts to forge lifecycle/step/outcome state must fail.

---

## SEC-5 — Idempotency, Replay, and Unknown-Outcome Safety

**Disposition: PASS AT ARCHITECTURE LEVEL.**

The architecture correctly gives every consequential step a durable replay identity.

### Inventory item creation

BKR-1 defines `create_inventory_item` with:

- business-scoped idempotency tuple;
- payload fingerprint;
- same-key/same-payload durable replay;
- same-key/different-payload `IDEMPOTENCY_CONFLICT`;
- concurrency serialization;
- original durable result replay after ambiguous acknowledgement.

This closes the unknown-outcome gap that a raw direct INSERT would not safely solve for bulk orchestration.

### Per-row step derivation

The row's stable `row_idempotency_key` is the root identity. Per-step keys must be deterministic and operation-separated so one row/step cannot replay another row/step.

At minimum:

- Catalog creation key;
- Inventory creation key;
- D-068 link-confirm key;
- Opening Stock movement key.

### D-068 confirm generation

The link-confirm key is correctly generation-scoped to the `preview_token_id`. Retrying the same preview reuses the same confirm idempotency key; re-preview creates a distinct key.

### Required replay guarantees

A retry must not create:

- a second Catalog product;
- a second Inventory item;
- a second Catalog↔Inventory link event for the same confirmed operation;
- a second Opening Stock movement;
- a cross-row replay;
- a cross-business replay.

Unknown outcomes must be reconciled from the governed operation's durable outcome state where that operation supports outcome recovery; the orchestrator must never assume failure merely because an HTTP response was lost.

---

## SEC-6 — D-068 Stale-State and Confirmation Protection

**Disposition: PASS.**

The reviewed workflow preserves the existing preview/confirm Catalog↔Inventory link model rather than bypassing it.

Security-positive properties:

- preview state is generated by the governed preview operation;
- confirmation is bound to the specific preview generation;
- stale/expired preview fails closed;
- a re-preview produces a new token/generation;
- the confirmation idempotency key changes with the new preview token;
- old terminal outcomes remain historical and are not overwritten;
- `PRICE_CONFIRMATION_REQUIRED` and other D-068 semantics remain inside the governed command and are not interpreted away by import orchestration.

An old preview token/key must never authorize a new Inventory/link state.

Bulk import therefore cannot silently reinterpret price or silently replace a link merely because a row was previously confirmed.

---

## SEC-7 — Import Lifecycle and Partial-Failure Safety

**Disposition: PASS SUBJECT TO STATE-MACHINE TESTING.**

The batch lifecycle is correctly modeled as:

`previewed -> committing -> committed|failed`

with an atomic compare-and-set claim. A losing concurrent claim must perform zero row or Product Truth mutation.

Row classification is separated from execution progress:

- classification: `READY`, `POSSIBLE_MATCH`, `NEEDS_CORRECTION`, `SKIPPED`;
- execution: `PENDING`, `IN_PROGRESS`, `FAILED`, `COMPLETE`.

This is security-relevant because a row can remain a valid merchant decision while an execution step fails and is retried; the architecture does not overload one state field to mean both business classification and execution completion.

The batch terminal-state rule is sufficiently strict: `committed` is permitted only when every included row has reached its required terminal business outcome and no required Catalog creation, Inventory creation, link confirmation, D-068 requirement, or Opening Stock operation remains unresolved.

Required Build Mode behavior:

- invalid/unconfirmed rows cannot reach truth mutation;
- `POSSIBLE_MATCH` cannot silently become a chosen match;
- a platform/process interruption leaves durable step state sufficient for safe retry;
- support state must be written only after the corresponding governed operation's outcome is known or safely reconciled;
- a batch must never be marked committed merely because the server loop finished.

---

## SEC-8 — Duplicate and Match Handling

**Disposition: PASS.**

The reviewed architecture maintains human decision ownership around uncertain matches.

Required behavior is correctly defined:

- exact authorized matches may be surfaced/resolved according to deterministic business rules;
- fuzzy or uncertain matches are review-only evidence, not mutation authority;
- uncertain candidates must not auto-create, auto-link, auto-merge, or overwrite;
- Inventory with stock history cannot be silently retro-linked merely because Catalog matching found a probable identity;
- Catalog uniqueness remains enforced in governed Catalog creation/update paths;
- whitespace/case/normalization must use the canonical normalized identity behavior already governing Catalog uniqueness/search rather than an import-only normalization rule.

### Generated SKU assessment

The proposed generated SKU architecture is security-acceptable because it is business-scoped, non-sensitive, non-sequential/high-entropy, and database uniqueness remains authoritative.

Build Mode must not encode:

- business name;
- owner/user ID;
- phone number;
- timestamp-derived sequential identity;
- another merchant's namespace.

Collision handling must be bounded and must never relax the existing uniqueness constraint.

---

## SEC-9 — Opening Stock and Financial/Operational Integrity

**Disposition: PASS.**

The architecture preserves Inventory ledger truth.

Opening Stock must be recorded only through the approved `create_inventory_movement` operation. Import orchestration must never set or overwrite current quantity directly.

The required sequence is security-sound:

1. Catalog identity resolved/created;
2. Inventory identity resolved/created;
3. governed Catalog↔Inventory preview/confirm link completed where required;
4. Opening Stock movement created through the Inventory movement operation.

This order preserves actor attribution, idempotency, D-068 confirmation, tenant integrity, and auditability.

The movement's existing one-opening-stock/idempotency protections remain authoritative. Retrying a row must reuse the same Opening Stock operation identity so a committed-but-unacknowledged movement cannot be duplicated.

`opening_stock_movement_id` persistence may be implemented using either the previously allowed validated same-business FK form or a validated loose reference, but Build Mode must prove business + item coherence and must not permit a row to point at another business's movement.

---

## SEC-10 — Data Minimization, Logs, Errors, and Merchant Privacy

**Disposition: PASS SUBJECT TO SANITIZATION INVARIANTS.**

The proposed support-row snapshot is appropriately allowlisted:

- item name;
- base unit;
- optional opening quantity;
- optional SKU/barcode match hints;
- lifecycle/resolution IDs and closed-vocabulary state required for retry/audit.

Raw uploaded file bytes are not part of the persistence contract and must remain transient unless separately authorized in a future mission.

Support/error fields must never persist:

- JWTs;
- Authorization headers;
- Supabase keys;
- service-role credentials;
- environment values;
- raw SQL;
- database stack traces/details/hints;
- parser stack traces;
- whole spreadsheet rows beyond the allowlisted snapshot;
- unrecognized-column values;
- arbitrary thrown exception text.

`correction_reason` and operation-state failures must use closed/sanitized vocabularies suitable for merchant support and audit without exposing internals.

Logs must follow the existing sanitized Catalog-import discipline: allowlisted event + opaque IDs + bounded code, not raw merchant values or raw error objects.

---

## SEC-11 — Parser/Runtime Gate Interaction

**Disposition: WORKFLOW SECURITY CAN PASS INDEPENDENTLY; PARSER GATE REMAINS OPEN.**

The corrected Founder workflow architecture does not introduce a new parser authority path and does not require weakening the independent parser/runtime gate.

The parser gate remains responsible for hostile-input execution/resource containment before this workflow can be production-authorized.

This review does not redesign or select parser runtime architecture.

Workflow-level invariant carried forward regardless of the parser resolution:

**untrusted file parsing and required validation/classification must complete before privileged import-support mutation or Product Truth mutation begins, except for narrowly-authorized non-truth request/admission controls required by the separate parser architecture.**

No pending parser decision may be used to justify:

- retaining raw files;
- expanding service-role authority;
- moving Product Truth writes earlier;
- bypassing Owner/business re-derivation;
- weakening the structural/decompression limits;
- adding a twentieth Catalog command.

The workflow security review therefore passes independently, while production import remains dependent on the separate parser gate.

---

## SEC-12 — Abuse-Case Review

**Disposition: PASS WITH MANDATORY BUILD TESTS.**

See the matrix in §13.

No abuse class reviewed requires a Product Truth redesign or permission expansion.

---

# 5. RLS / Grant and Privileged-Authority Assessment

The proposed access model is security-acceptable and consistent with least privilege.

### Ordinary authenticated user

Permitted:

- Owner-scoped support-table reads required to render own import status/history;
- caller-JWT governed Catalog operations;
- caller-JWT/RLS-governed Inventory operations.

Not permitted:

- support-table DML;
- writing another business's support state;
- service-role access;
- arbitrary executor-role access;
- terminal-state fabrication.

### Manager / Employee

Current Phase 1 posture:

- no bulk-import authority;
- no support-table read/write policy inferred from future intent;
- fail closed.

### Server-only bookkeeping client

Permitted only:

- fixed-table import batch/row lifecycle/support state;
- fixed allowlisted columns necessary to record authoritative orchestration state.

Never permitted as an architectural authority to:

- mutate Catalog truth;
- mutate Inventory truth;
- call Catalog commands under service-role identity;
- bypass D-068;
- create Opening Stock directly.

### `catalog_lifecycle_executor`

Any BKR-4 access is limited to business-scoped SELECT of import evidence strictly for governed hard-delete dependency evaluation.

This is acceptable least privilege.

---

# 6. Tenant-Isolation Assessment

**PASS.**

Tenant isolation is protected at multiple independent layers:

1. authenticated Owner identity;
2. server-side business re-derivation;
3. RLS on truth/support reads and governed Inventory writes;
4. composite tenant FKs on support relationships;
5. business-scoped idempotency keys;
6. governed Catalog command business resolution;
7. same-business validation for links and movements.

A forged UUID alone cannot become sufficient authority under the reviewed architecture.

The corrected difference in composite-key ordering between Catalog and Inventory is intentional and now correctly represented:

- Catalog: `(business_id, id)`;
- Inventory: `(id, business_id)`.

No new unique key is required merely to normalize those orders.

---

# 7. Idempotency / Replay / Unknown-Outcome Assessment

**PASS.**

The architecture is sufficient to support safe retries if Build Mode preserves operation-scoped deterministic key derivation and authoritative durable outcomes.

Mandatory properties:

- root row idempotency identity persists across retries;
- operation labels are closed/fixed;
- link-confirm includes preview generation;
- same-key/same-payload replays original result;
- same-key/different-payload fails closed;
- concurrent identical requests serialize/claim safely;
- completed steps are not re-applied merely because a later step failed;
- unknown network outcome is reconciled, not guessed;
- no batch terminal state is inferred from browser acknowledgement.

---

# 8. D-068 Confirmation / Stale-State Assessment

**PASS.**

D-068 remains a governed confirmation boundary, not an import UX convention.

The architecture specifically prevents reusing one confirm-idempotency identity across different preview generations by including `preview_token_id` in the derived key.

Build Mode must prove:

- expired preview rejection;
- stale fingerprint/state rejection;
- old preview after re-preview cannot authorize change;
- same-preview retry is idempotent;
- re-preview yields distinct confirmation identity;
- required price confirmation cannot be bypassed by row replay or support-state manipulation.

---

# 9. Import Lifecycle / Partial-Failure Assessment

**PASS.**

The architecture prevents false completeness if implemented as specified.

Key security properties:

- atomic batch claim precedes privileged row-state mutation;
- row classification and execution are distinct;
- every step has durable state;
- failed rows remain retryable where appropriate;
- unresolved required steps block batch commit;
- terminal support state is server-authored;
- imported truth is never rolled back by unsafe compensating deletes merely because a later step failed;
- retry continues from durable governed outcomes instead of recreating identity.

---

# 10. Opening Stock Integrity Assessment

**PASS.**

Opening Stock remains an Inventory ledger event, not an import-table field that directly sets quantity.

Mandatory invariant:

`Opening quantity input -> validated import row -> governed create_inventory_movement(opening_stock, ...) -> durable movement evidence`

No direct quantity update path is security-acceptable.

---

# 11. Data Minimization / Error / Privacy Assessment

**PASS.**

The support contract is minimal enough for retry, review, audit, and correction without retaining raw files.

Build Mode must preserve sanitized fixed-shape errors and logs and must ensure support-state JSON cannot become an unbounded dumping ground for parser output or raw worksheet contents.

Reference Cost and other owner financial intelligence remain independently protected; this Inventory onboarding contract does not authorize wider staff access.

---

# 12. Parser-Gate Interaction Statement

The parser/runtime gate remains independent and unresolved under its own Mission Control chain.

This report does not claim parser production readiness.

The Founder workflow architecture is security-compatible with the parser gate so long as the later parser implementation preserves:

- Owner/auth admission before expensive/private workflow access where applicable;
- hostile-input/resource containment;
- raw-file transience;
- parse/validate/classify before support/truth writes;
- sanitized failure handling;
- zero service-role/secret exposure.

A positive verdict in this report is therefore not parser-gate closure and cannot authorize production import.

---

# 13. Abuse-Case Matrix

| Abuse case | Architecture disposition | Build Mode requirement |
|---|---|---|
| Forged `business_id` | Prevented by design | Ignore client business identity; re-derive from authenticated Owner; test spoofed fields |
| Foreign Catalog UUID | Prevented by tenant FK/governed command | Cross-business RPC/import negative test |
| Foreign Inventory UUID | Prevented by corrected composite FK + RLS | Cross-business candidate/resolution/link negative test |
| Manager invokes bulk workflow | Fail-closed architecture | Authenticated Manager test must deny before privileged writes |
| Employee invokes bulk workflow | Fail-closed architecture | Authenticated Employee test must deny before privileged writes |
| Replay same import row | Safe by durable row/step idempotency | Same row/key replay must not duplicate truth |
| Cross-row key replay | Prevented if derivation is operation/row-scoped | Deterministic-key collision-domain tests |
| Duplicate browser submit | Atomic claim + idempotency | Concurrent endpoint test: one claimant; loser zero mutations |
| Lost response after Catalog create | Safe if durable command outcome reconciled | Failure-injection / outcome-recovery test |
| Lost response after Inventory create | Safe under BKR-1 | Same-key replay / ambiguous outcome test |
| Lost response after Opening Stock | Safe if movement idempotency reused | Confirm exactly one movement after retry |
| Replayed old preview token | Prevented by preview generation | Re-preview then old-confirm negative test |
| Stale D-068 state | Governed fail-closed | STALE_STATE / expired-token tests |
| Force batch `committed` via REST | Prevented by no authenticated DML | Direct REST UPDATE/INSERT denial tests |
| Malicious spreadsheet values stored in errors | Prevented by minimization contract | Log/response/support-field sanitization tests |
| Raw SQL/stack detail leak | Prohibited | Deliberately-triggered backend failure sanitization test |
| Fuzzy match auto-link | Prohibited by architecture | Fuzzy/POSSIBLE_MATCH cannot mutate truth test |
| Whitespace/case duplicate bypass | Governed normalization required | Normalization-equivalence duplicate tests |
| Generated SKU collision | Database uniqueness + bounded retry | Forced-collision test; no uniqueness relaxation |
| Generated SKU enumeration/privacy | Prevented by non-sensitive high-entropy format | Assert no owner/business/timestamp/sequential encoding |
| Existing stock-history Inventory silently retro-linked | Prohibited | Existing-history match must require explicit safe resolution path |
| Premature row COMPLETE | Prohibited by terminal-state contract | Step-state consistency tests |
| Premature batch committed | Prohibited by BKR-5 | Any unresolved required step must keep batch failed/non-committed |
| Browser forges `resolved_by`/step state | Prevented by server-only support DML | Spoofed-field + direct REST DML denial tests |
| Service role used as Catalog authority | Prohibited | Static/code-review assertion + integration evidence caller JWT performs truth command |

No abuse case in this matrix remains an architecture blocker provided the mandatory invariants are carried into Build Mode and verified before any production gate.

---

# 14. Blocking Findings

**None.**

No `SEC-FWR-*` blocker is opened by this review.

The independent parser/runtime security gate remains open, but it is not a contradiction in the corrected Founder workflow architecture and is already separately governed.

Implementation evidence is still required for all Build Mode invariants below; absence of implementation today is expected because this mission is architecture review only.

---

# 15. Build Mode Security Invariants and Mandatory Tests

These requirements must be copied into the eventual EIS / Build Mode contract if Mission Control later authorizes implementation.

## 15.1 Authority invariants

- Owner-only Phase 1 bulk onboarding.
- Manager fail-closed until approved permission infrastructure exists.
- Employee denied.
- business identity server-derived from authenticated caller.
- no client actor/business field is authoritative.
- all channels inherit the same authority checks.

## 15.2 Product Truth invariants

- exactly nineteen public Catalog commands remain.
- no twentieth generic import command.
- Catalog truth only through governed Catalog commands.
- Inventory truth only through RLS-governed Inventory operations.
- `create_inventory_item` remains `SECURITY INVOKER` and caller-JWT/RLS governed.
- Opening Stock only through `create_inventory_movement`.
- service-role client never becomes Product Truth authority.

## 15.3 Support-table/RLS invariants

- `anon`: zero access.
- `authenticated`: Owner-scoped SELECT only.
- no authenticated DML.
- no Manager/Employee policy.
- explicit default-privilege neutralization.
- server-only fixed-table/fixed-column lifecycle writes.
- narrow business-scoped executor SELECT only where BKR-4 requires it.

## 15.4 Tenant invariants

- batch→row composite tenant FK.
- Catalog candidate/resolution composite tenant FK.
- corrected Inventory candidate/resolution FK order `(item_id, business_id) -> inventory_items(id,business_id)`.
- no cross-business movement/link/support reference.

## 15.5 Idempotency invariants

- stable root row key.
- deterministic operation-separated step keys.
- durable BKR-1 Inventory-create outcome.
- same-key/different-payload conflict.
- link-confirm key includes preview token generation.
- Opening Stock retry reuses the same movement identity.
- completed step never re-applied because a later step failed.

## 15.6 Lifecycle invariants

- parse/validate/classify before Product Truth mutation.
- atomic batch claim before privileged row-state mutation.
- uncertain matches never mutate until explicit resolution.
- unresolved required step prevents row COMPLETE/batch committed.
- server-authored terminal state only.
- safe retry from failed batch.

## 15.7 Privacy/error invariants

- raw file not retained.
- allowlisted parsed snapshot only.
- closed correction/error vocabulary.
- no raw exceptions/errors/SQL/JWT/env values in logs, support rows, or responses.
- generated SKU contains no sensitive/predictable merchant identity.

## 15.8 Mandatory tests

At minimum:

1. Owner authenticated happy-path Inventory import orchestration.
2. missing/invalid auth denied before privileged writes.
3. Manager denied.
4. Employee denied.
5. spoofed business/actor fields ignored.
6. cross-business support read denied.
7. cross-business Catalog candidate/resolution reference denied.
8. cross-business Inventory candidate/resolution reference denied.
9. authenticated direct INSERT/UPDATE/DELETE on both support tables denied.
10. `anon` support-table access denied.
11. service-role secret absent from browser bundle/log/response.
12. service-role code path cannot call Catalog truth commands.
13. concurrent batch commits: one claimant; loser zero mutation.
14. committed-batch replay cannot mutate row state.
15. same-row retry does not duplicate Catalog product.
16. same-row retry does not duplicate Inventory item.
17. same-row retry does not duplicate Opening Stock movement.
18. BKR-1 same-key/different-payload returns idempotency conflict.
19. transport/unknown-outcome recovery for Inventory create.
20. transport/unknown-outcome recovery for Catalog/create or other governed steps where supported.
21. D-068 stale preview rejected.
22. expired preview rejected.
23. re-preview creates a distinct confirm idempotency generation.
24. old confirm cannot authorize new preview state.
25. price-confirmation requirement cannot be bypassed.
26. fuzzy/uncertain match never auto-links/merges/overwrites.
27. normalization-equivalent duplicates cannot bypass Catalog uniqueness.
28. existing Inventory with stock history is not silently retro-linked.
29. generated SKU forced-collision path is bounded and preserves uniqueness.
30. generated SKU contains no owner/business/user/timestamp-derived identifier.
31. invalid row produces zero Product Truth mutation.
32. unresolved required step prevents row COMPLETE.
33. unresolved required row prevents batch committed.
34. retry after partial sequence continues from durable completed steps.
35. imported Catalog product hard delete returns governed dependent-history conflict while support evidence exists.
36. support/error/log fields do not contain raw merchant rows, SQL detail, stack trace, JWT, service-role key, or environment values.
37. raw upload is not persisted.
38. Opening Stock current quantity is never directly written by import.
39. exactly nineteen public Catalog commands after implementation.
40. no `reactivate_catalog_category` or other unauthorized command appears.
41. parser-runtime gate tests remain separately mandatory before production authorization.

---

# 16. Explicit Scope-Integrity Statement

This mission performed architecture review only.

It did **not**:

- implement application code;
- modify dependencies;
- create/edit SQL or migrations;
- mutate test or production Supabase;
- change RLS or grants;
- expand service-role/privileged authority;
- change Lovable;
- redesign the parser;
- introduce R2;
- change Product Truth;
- change D-001 through D-068;
- change merchant-visible scope;
- expand Manager or Employee permissions;
- add a twentieth Catalog command;
- authorize Build Lock;
- enter Build Mode;
- deploy;
- perform production migration/cutover;
- accept or close SB-P-1.11.

The only repository change produced by this mission is this review report.

---

# 17. Final Verdict

**`SECURITY & PERMISSIONS ARCHITECTURE REVIEW — PASS`**

The corrected Founder workflow architecture in `report1.96.md`, interpreted through the final backend baseline in `report1.98.md`, `report1.100.md`, and `report1.101.md`, is sufficiently defined from the Security & Permissions Architecture perspective to advance to the next Mission Control gate.

This PASS is architecture-only.

It does **not** authorize:

- Build Lock;
- Build Mode;
- parser gate closure;
- runtime verification;
- production migration;
- deployment;
- public release;
- SB-P-1.11 acceptance.

Mission Control must human-review and merge this report before deciding the next action.
