# SB-P-1.14 — Independent Stage 7 Security / Permissions / RLS & Grants Review

**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Specialist:** S7-SP-1 — Security / Permissions / RLS & Grants  
**Authority:** `communication/missions/SB-P-1.14/mission-control/14-stage7-security-rls-specialist-instruction.md` and SB-P-1.14-MC-11 / `mission-control/13-stage7-engineering-and-specialist-authorization.md`  
**Canonical review baseline:** `main@cdb94b21284ba18d3bee523009eb4dbe3e8d7b11`  
**Review type:** Independent read-only Stage 7 specialist review  
**Status:** SUBMITTED TO MISSION CONTROL — FINDINGS ONLY / NO APPROVAL AUTHORITY

## 1. Actor, session, prior contribution and independence

**Actual actor/model:** ChatGPT — GPT-5.6 Sol  
**Provider:** OpenAI  
**Session / room:** Team LIPS Smart Business — Security & Permissions Architecture room

### Prior contribution to SB-P-1.14

This room/session did **not** author or materially contribute to:

- SB-P-1.14 Blueprint Sections 1–19;
- the SB-P-1.14 Stage 6 Builder Review;
- the SB-P-1.14 FCTM;
- FPDR-1 through FPDR-4.

Canonical repository records identify **Claude Code** as:

- Stage 2–4 Definition Actor;
- author of Blueprint Sections 1–19;
- Stage 6 Builder Review owner.

This room has substantial prior Security / Permissions review history on upstream SB-P-1.12 and SB-P-1.13. That creates correlated-assumption risk around the authority-kernel design, so I re-read the locked upstream EIS material and current SB-P-1.14 repository evidence rather than treating prior Security acceptance as proof of SB-P-1.14 readiness.

### Independence conclusion

**INDEPENDENCE ESTABLISHED for S7-SP-1.**

The specialist instruction itself still names an older baseline `feb0f522...`; Mission Control activated this review against later canonical `main@cdb94b21284ba18d3bee523009eb4dbe3e8d7b11`. I reviewed the Mission-Control-supplied canonical baseline.

No provider dashboard, production database, test project, R2 account or external runtime was accessed.

## 2. Read-only evidence used

Primary canonical evidence:

- `docs/phase-1-mission-blueprint/active/SB-P-1.14.md` — blob `55adeb0f1ec14ac5d61de3ad3e10f55cee1e0054`;
- `communication/missions/SB-P-1.14/claude-code/02-stage2-populated-fctm.md` — blob `01e9856aca0afdb1267230a1932fe34054449a4b`;
- `communication/missions/SB-P-1.14/claude-code/08-stage6-builder-review.md` — blob `11dbd47b77e68eced7a4b4a3e190cfbd4f818239`;
- `communication/missions/SB-P-1.14/mission-control/13-stage7-engineering-and-specialist-authorization.md` — blob `c20b5bc2d0ba7226de8da59d2560086d2cef79b1`;
- locked SB-P-1.12 EIS — `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md`, blob `c444f7509477d0e8b997af538440d93bf2ca4d72`;
- locked SB-P-1.13 EIS — current canonical locked version;
- `supabase/migrations/20260727000000_reconcile_default_grants.sql` — blob `4e2d3fa1bb44a42f2ecfd13ff237b31cf7834303`;
- `supabase/migrations/20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql` — blob `b79ad8e79f0a13d72ae63ef6a8debe25643ee22d`;
- `supabase/migrations/20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql` — blob `62f250f47c3af70f7ef69a3193a675a4cc02a275`;
- `src/integrations/supabase/transactions.ts` — blob `fe12c70255b78693d0c3b9e7c150e0eb52885b15`.

Repository facts independently confirmed:

1. `authenticated` currently has direct `SELECT, INSERT` on `transactions`;
2. current transaction INSERT RLS is Owner-only through `businesses.owner_id = auth.uid()`;
3. current application transaction creation is a direct client `.insert()`;
4. Owner UPDATE exists on `transactions`;
5. `authenticated` can invoke `correct_transaction`;
6. historical default privileges grant broad table/function access to `anon`, `authenticated` and `service_role`, including future `postgres`-owned objects;
7. there is no durable SB-P-1.14 object-storage implementation, R2 client, storage policy or signed-retrieval implementation in the canonical repository;
8. SB-P-1.12 and SB-P-1.13 specifications are locked, but their implementation/acceptance evidence required by D12/D13 is not complete.

## 3. Executive Security disposition

SB-P-1.14 is **architecturally feasible in the assigned Security domain**, but several Stage 7 findings must remain held and no implementation may rely on the target behavior yet.

The approved source direction is sound:

- one SB-P-1.12 authority kernel;
- explicit active-business context;
- Owner/Manager/Employee capability separation;
- create does not imply read-all/edit-all/export-all;
- files/exports/object storage remain kernel-scoped;
- confirmation and execution-time revalidation are shared;
- service-role possession is never authority;
- document/AI paths do not create a parallel write path;
- retrieval uses current permission;
- audit/provenance remains Smart Business truth, not provider logs.

The current repository, however, is still materially behind that target:

- current transaction writes can bypass the governed command/audit path;
- current grants/default privileges would make a newly created table broadly reachable unless the same migration explicitly hardens it;
- current Owner-only RLS cannot express approved Manager/Employee scoped contribution;
- durable object-storage authorization does not exist yet;
- signed-link revocation semantics are not yet chosen;
- D12 upstream implementation evidence is absent.

The most important Stage 7 requirement is therefore **not to collapse design feasibility into runtime readiness**.

## 4. Findings

### SEC14-S7-01 — D12 is a hard authority-consumption gate for all permission-sensitive SB-P-1.14 behavior

**Severity:** HIGH  
**Classification:** Dependency / evidence hold  
**Stage 7 effect:** affected Engineering findings must remain held from runtime-ready acceptance

#### Evidence

Blueprint §12.1 correctly records:

- SB-P-1.12 specification AVAILABLE / locked;
- implementation NOT COMPLETE;
- evidence NOT COMPLETE;
- consumption governed by SB-P-1.12 `EIS-DEP-01`;
- no temporary parallel authority/permission system.

Canonical FCTM contains **225 IN SCOPE rows carrying D12**.

Locked SB-P-1.12 `EIS-DEP-01` permits a later mission to consume a capability only after:

- providing workstreams are implemented and verified;
- every touched table family has completed its authority/RLS cut-over and isolation tests;
- Mission Control accepts dependency evidence for the consumer.

#### Security consequence

SB-P-1.14 may design against the locked authority kernel, but it cannot truthfully claim:

- Manager/Employee document permissions work;
- file/export isolation works;
- current-permission retrieval works;
- confirmation/revalidation works;
- governed document/transaction command enforcement works;
- authority audit/denial behavior works;

until the exact upstream surfaces are implemented and accepted.

#### Affected FCTM rows

**All 225 IN SCOPE rows carrying `D12`.**

High-risk representative rows include:

- `3-§5-10`, `3-§10-1`, `3-§11-1` through `3-§11-4`, `3-§11-7`, `3-§18-2`, `3-§19-10`, `3-§19-11`;
- `5-§7-8`, `5-§10-9`, `5-§12-1` through `5-§12-6`, `5-§16-1`, `5-§16-2`, `5-§16-6`, `5-§18-9`;
- `22-§10-1`, `22-§10-4`, `22-§29-3`;
- `25-§4-2`, `25-§4-4`, `25-§4-9`, `25-§8-3`, `25-§9-1`, `25-§9-2`, `25-§9-4`, `25-§9-6`, `25-§9-7`, `25-§13-3`, `25-§17-3`, `25-§19-1`, `25-§19-7`, `25-§20-13`, `25-§23-8`, `25-§25-2`, `25-§26-11`;
- `17-§12-2`;
- `BP-§10.3-W10`.

#### Required Stage 7 treatment

Engineering may record documentary feasibility, but the affected rows must retain an explicit **D12 implementation/evidence hold**.

No temporary SB-P-1.14 role table, owner check, file permission engine or feature-specific authority path is acceptable.

No Product Truth correction is required.

---

### SEC14-S7-02 — Broad default privileges make every new SB-P-1.14 table unsafe unless it is born hardened

**Severity:** CRITICAL  
**Classification:** Security architecture requirement / implementation hold  
**Stage 7 effect:** any Engineering finding that assumes safe new-table defaults must remain held

#### Evidence

Canonical `20260727000000_reconcile_default_grants.sql`:

- grants `ALL` on listed tables to `anon`, `authenticated`, `service_role`;
- grants `EXECUTE` on all public functions to those roles;
- sets `postgres` default privileges so future tables receive `ALL`;
- sets `postgres` default function privileges so future functions receive `EXECUTE`.

Stage 6 B6-10 correctly identifies this as HIGH risk.

SB-P-1.14 will need new document/media/provenance/import/control-plane objects.

Locked SB-P-1.12 `EIS-ISO-03` requires effective-access reconciliation across:

- `PUBLIC`;
- `anon`;
- `authenticated`;
- `service_role`;
- executor roles;
- every real creator role's default ACL.

#### Security consequence

Creating a new document/media table and planning to "add RLS later" is unsafe.

Under current defaults, an object can be born broadly privileged. If RLS/policies or revokes are missing/misordered, merchant documents or metadata can become cross-business readable/writable.

Owner-only RLS is also insufficient for the approved Manager/Employee capability model.

#### Affected FCTM rows

Primary rows:

- `3-§18-1`, `3-§18-2`;
- `5-§16-1`, `5-§16-2`, `5-§16-6`;
- `22-§23-2`, `22-§29-3`;
- `25-§19-1` through `25-§19-8`;
- `25-§26-2`, `25-§26-11`;
- `BP-§10.3-W10`.

Delegated upstream enforcement rows include `21-§6`, `21-§11`, `BP-§10.1-7`, `BP-§10.1-8`.

#### Required Stage 7 / EIS rule

Every new SB-P-1.14 business-data table/function must be created in a **birth-safe migration** that, in the same migration:

1. enables the intended RLS posture;
2. installs kernel-based policies/object-scope checks;
3. revokes unauthorized `PUBLIC` / `anon` access;
4. narrows `authenticated` to only intentional SELECT/EXECUTE;
5. gives no protected direct DML where the command-only model applies;
6. hardens any `SECURITY DEFINER` function under upstream EIS-ISO-10;
7. reconciles creator-role default privileges;
8. verifies effective grants after creation.

**Implementation of new protected tables is BLOCKED until this is designed and later independently verified.**

This is not new Product Truth.

---

### SEC14-S7-03 — Owner / Manager / Employee permissions require action-and-object separation; upload/create must not widen read/export authority

**Severity:** HIGH  
**Classification:** Security design requirement / D12 hold

#### Evidence

Canonical FCTM explicitly requires:

- `3-§11-1`: Owner full authorized Ledger records/corrections/exports;
- `3-§11-2`: Manager only delegated access; not automatically Owner;
- `3-§11-3`: Employee/staff add or view only permitted operational records;
- `3-§11-4`: staff do not receive Owner profit intelligence / unrestricted analytics;
- `5-§12-2`: Owner document authority;
- `5-§12-3`: Manager operational documents only where delegated;
- `5-§12-4`: Employee upload/use only for permitted operational tasks;
- `5-§12-5`: document access cannot leak Owner financial intelligence;
- delegated Contract 21 §5 and §11 distinguish actions and explicitly state create ≠ read-all/edit-all/export/analytics.

Current repository policies are Owner-only and cannot yet express this model.

#### Security consequence

A staff member permitted to upload a receipt must not automatically gain:

- access to all receipts;
- the linked transaction;
- other employees' uploads;
- Owner totals;
- CSV/Excel/PDF exports;
- delete/replace rights;
- storage listing rights.

Likewise, a Manager's delegated operational read does not imply export or analytics.

#### Affected FCTM rows

- `3-§10-1`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`;
- `3-§11-1`, `3-§11-2`, `3-§11-3`, `3-§11-4`, `3-§11-7`;
- `3-§18-2`, `3-§19-10`, `3-§19-11`;
- `5-§10-9`;
- `5-§12-2`, `5-§12-3`, `5-§12-4`, `5-§12-5`;
- `5-§18-9`;
- `22-§10-4`;
- `25-§4-4`, `25-§8-3`, `25-§9-2`, `25-§19-1`, `25-§25-2`;
- `17-§12-2`.

#### Required Stage 7 / EIS rule

SB-P-1.14 must register/consume distinct action/object capabilities through SB-P-1.12 and enforce them at:

- upload/create;
- metadata read;
- object retrieval;
- replacement/versioning;
- correction;
- export;
- deletion/lifecycle;
- sensitive analytics.

UI visibility is never the enforcement boundary.

**Engineering findings claiming Manager/Employee support must remain held until the exact D12 capability/RLS evidence exists.**

---

### SEC14-S7-04 — Current transaction and correction DML bypasses the governed command/audit model

**Severity:** CRITICAL  
**Classification:** Security/integrity hold  
**Stage 7 effect:** all 42 DTX rows remain held

#### Evidence

Current canonical state:

- application `createTransaction()` performs direct client INSERT;
- `authenticated` has direct INSERT;
- Owner can UPDATE transactions directly;
- transaction correction events have direct table grants;
- existing correction logic does not represent the final locked command-only target.

Locked SB-P-1.12 EIS-ISO-02 requires commands to be the protected write boundary.

Locked SB-P-1.13 `EIS13-CMD-02` defines the coordinated transaction-family cut-over and final governed create-transaction command.

Blueprint §8.1 and §8.3 correctly require all four-state/document-derived writes to reuse that one governed command.

#### Security consequence

Any SB-P-1.14 four-state or document write path added before the upstream cut-over could:

- bypass confirmation binding;
- bypass execution-time revalidation;
- bypass role/capability checks;
- bypass correction/audit continuity;
- create a second protected write path.

Current direct UPDATE can also bypass the intended correction-event path.

#### Affected FCTM rows

All **42 DTX rows**:

`3-§4-1`, `3-§4-2`, `3-§4-3`, `3-§4-4`, `3-§5-2`, `3-§5-3`, `3-§5-4`, `3-§5-5`, `3-§5-6`, `3-§6-1`, `3-§6-2`, `3-§6-3`, `3-§6-4`, `3-§6-5`, `3-§6-6`, `3-§6-7`, `3-§6-8`, `3-§6-9`, `3-§8-1`, `3-§8-8`, `3-§19-1`, `3-§19-2`, `3-§19-3`, `3-§22-1`, `3-§22-2`, `5-§7-2`, `5-§17-6`, `5-§18-1`, `22-§29-7`, `25-§8-9`, `24-§18-1a`, `10-§13-3`, `BP-§6.2-1`, `BP-§10.3-W1`, `BP-§10.3-W2`, `BP-§10.3-W3`, `BP-§10.3-W7`, `BP-§10.3-C1`, `BP-§10.3-SA1`, `BP-§10.3-SA2`, `BP-§10.3-SB1`, `BP-§10.3-SB2`.

Correction-continuity rows `3-§8-1` through `3-§8-16` are additionally security-sensitive.

#### Required Stage 7 treatment

The 42 DTX findings must remain **held** until:

1. SB-P-1.12 transaction-family authority cut-over is implemented/verified;
2. SB-P-1.13 governed command exists under the narrow executor model;
3. direct authenticated protected DML is revoked;
4. structured UI / Conversation / Voice / SB-P-1.14 document adapters converge on one command;
5. SB-P-1.14 four-state widening extends that command rather than adding a parallel command;
6. corrections become governed atomic command + immutable correction event;
7. effective-access evidence shows no bypass remains.

No new Founder decision is required.

---

### SEC14-S7-05 — Confirmation binding and execution-time revalidation must remain independent of material-target fingerprinting

**Severity:** HIGH  
**Classification:** Security design / D12 evidence hold

#### Evidence

Blueprint §8.3 correctly separates:

- merchant-reviewed interpretation;
- material target-change re-prompt under FPDR-3;
- execution-time authority/revocation revalidation under SB-P-1.12 EIS-CNF-02.

Locked SB-P-1.12:

- `EIS-CNF-01` binds actor, business, action, target, reviewed-state fingerprint, authority epochs, channel, expiry and consumption state;
- `EIS-CNF-02` revalidates current authority under serialization at commit;
- `EIS-CNF-05` governs multi-row import under revocation.

#### Security consequence

A confirmed document proposal is not authority forever.

Even if its material target is unchanged, commit must fail if:

- membership/role/capability was revoked;
- active business changed;
- entitlement changed;
- target object authorization changed.

Conversely, irrelevant internal changes must not force new merchant confirmation merely because the implementation fingerprints too much.

#### Affected FCTM rows

- `5-§9-1` through `5-§9-10`;
- `5-§10-1` through `5-§10-10`;
- `22-§29-7`;
- `24-§21-7`;
- `10-§13-3`, `10-§17-4`, `10-§23-3b`;
- `12-§4-5`;
- `BP-§6.1-1`, `BP-§6.2-1`, `BP-§10.3-W7`, `BP-§10.3-W11`, `BP-§10.3-SA1`, `BP-§10.3-SA2`.

Delegated upstream rows: `21-§17`, `21-§18`, `22-§13-4`.

#### Required Stage 7 treatment

Engineering may mark the design feasible, but acceptance must remain held until confirmation-binding and execution-time revalidation are implemented and concurrency-tested.

No local SB-P-1.14 confirmation-token mechanism is allowed.

---

### SEC14-S7-06 — A plain signed retrieval URL cannot guarantee immediate revocation after permission changes

**Severity:** HIGH  
**Classification:** Retrieval security design decision / implementation hold

#### Evidence

FCTM requires:

- `25-§19-7`: access governed by **current** permissions, not historical access;
- `25-§20-13`: handle retrieval permission change between request and delivery;
- `25-§26-11`: object access revoked when underlying permission is revoked;
- `25-§9-8`: signed/temporary URLs **or** controlled proxy/edge retrieval; exact mechanism is security/engineering design.

Stage 6 B6-08 correctly notes that an already-issued signed URL remains usable until expiry.

Locked SB-P-1.12 EIS-ISO-05 requires file/object access to be issued through kernel-checked signed operations.

There is no current durable storage or signed-retrieval implementation to prove behavior.

#### Security consequence

If a user receives a self-validating provider URL and then loses permission, database/RLS revocation cannot invalidate that URL unless the provider/access design supports revocation or the URL expires.

A long-lived signed URL therefore violates the plain reading of current-permission access.

#### Affected FCTM rows

- `3-§19-9`;
- `5-§6-3`, `5-§6-4`, `5-§16-2`, `5-§16-6`, `5-§18-7`;
- `22-§10-1`, `22-§10-4`;
- `25-§9-1` through `25-§9-8`;
- `25-§13-3`;
- `25-§19-7`;
- `25-§20-13`;
- `25-§23-8`;
- `25-§24-1`;
- `25-§25-2`;
- `25-§26-2`, `25-§26-3`, `25-§26-11`;
- `10-§5-10`;
- `BP-§6.3-2`.

#### Required Stage 7 / EIS treatment

The EIS must state a retrieval design that actually satisfies revocation.

Security-acceptable directions include:

- authorization-checked proxy/edge delivery where every retrieval request rechecks the kernel; or
- a provider/token mechanism with equivalent server-controlled revocation semantics.

A short-lived signed URL can reduce exposure but **must not silently be treated as immediate revocation** unless the approved requirement allows that bounded stale-access window.

If Engineering proposes a non-zero post-revocation access window as intended behavior, Mission Control should treat that as a **T3 candidate** rather than letting Security invent the tolerance.

Until the mechanism is defined and tested, the affected retrieval/revocation findings remain **held**.

---

### SEC14-S7-07 — Active-business isolation requires authoritative metadata scope; provider keys and client-supplied business IDs are never authority

**Severity:** HIGH  
**Classification:** Security architecture / D12 hold

#### Evidence

Blueprint requires:

- every Ledger/document/object business-scoped through SB-P-1.12;
- provider-independent object identity;
- Supabase/Smart Business authoritative for ownership/permissions/linkage/retrieval;
- no cross-business retrieval.

Locked SB-P-1.12 EIS:

- active business is requested, never trusted;
- no client-supplied `business_id` is authority;
- file/export/object storage remains kernel-scoped;
- business/object references use business-bound isolation patterns.

#### Security consequence

Security cannot be based on:

- an R2 key prefix alone;
- a provider URL;
- a guessed object ID;
- a client request saying "business X";
- possession of a signed token issued for another business.

Document/object metadata must carry authoritative business scope and be checked against the verified principal and current active business.

Duplicate/fingerprint checks must also be business-scoped so one merchant cannot infer another merchant's uploaded content.

#### Affected FCTM rows

- `3-§11-7`, `3-§17-*`;
- `5-§11-*`, `5-§16-6`;
- `22-§10-1` through `22-§10-7`, `22-§29-3`;
- `25-§4-1` through `25-§4-12`;
- `25-§8-1` through `25-§8-11`;
- `25-§9-1` through `25-§9-8`;
- `25-§13-3`;
- `25-§14-1` through `25-§14-7`;
- `25-§19-1` through `25-§19-8`;
- `25-§25-2`;
- `25-§26-3`, `25-§26-11`;
- `BP-§10.3-W10`.

#### Required Stage 7 treatment

Every storage-control-plane design must bind:

- verified principal;
- explicit active business;
- object identity;
- object/business relation;
- requested action;
- current permission.

Cross-business negative tests are mandatory before acceptance.

No provider-side path/key convention substitutes for kernel authorization.

---

### SEC14-S7-08 — Service-role / privileged handlers must inherit EIS-ISO-04; service_role is never document authority

**Severity:** HIGH  
**Classification:** Privileged-boundary requirement / D12 hold

#### Evidence

Locked SB-P-1.12 EIS-ISO-04 requires any privileged path to bind:

- verified principal;
- business;
- action;
- object set;

and to carry the bound business/object predicates in every privileged query because `service_role` bypasses RLS.

The current repository already has service-role admin-client patterns in other domains.

SB-P-1.14 will likely need server-side storage/control-plane actions even if object bytes live in R2.

#### Security consequence

A storage server function using `service_role` and trusting request-supplied `business_id` or object ID could bypass every RLS guarantee.

Object-store credentials likewise must not turn into merchant authority.

#### Affected FCTM rows

- `5-§16-1`, `5-§16-2`, `5-§16-6`;
- `22-§10-1`, `22-§10-4`;
- `25-§4-2`, `25-§4-4`, `25-§4-9`;
- `25-§8-1` through `25-§8-11`;
- `25-§9-1` through `25-§9-8`;
- `25-§19-1`, `25-§19-7`;
- `25-§20-13`;
- `25-§25-1`, `25-§25-2`, `25-§25-3`, `25-§25-4`;
- `BP-§6.3-2`.

#### Required Stage 7 / EIS rule

Default: caller-JWT / kernel-scoped access.

Where a privileged server path is actually necessary:

1. resolve verified principal through the ordinary caller path;
2. authorize business/action/object through the kernel;
3. bind that decision to the privileged operation;
4. include business/object predicates in every admin query;
5. revalidate protected/consequential access where current authority matters;
6. never derive authority from `service_role`, R2 credentials or model/tool payload;
7. inventory every privileged handler for independent verification.

Any Engineering finding that treats "server-side" or "service_role" as sufficient authorization must remain held.

---

### SEC14-S7-09 — Audit/provenance must be authoritative, durable and independent of provider logs

**Severity:** MEDIUM-HIGH  
**Classification:** Audit / D12 evidence hold

#### Evidence

SB-P-1.14 requires provenance for:

- uploader/actor;
- channel;
- interpretation;
- confirmation/rejection;
- destination link;
- corrections;
- sensitive retrieval where material;
- deletion/lifecycle;
- storage migration.

FCTM explicitly states audit belongs in governed Smart Business storage, not only provider logs.

Locked SB-P-1.12 defines append-only `authority_events` and durable denial handling.

#### Security consequence

Provider access logs are useful operational evidence but cannot be the only proof of:

- who was authorized;
- which business/object was accessed;
- which permission was used;
- why a document-derived record was committed;
- whether a denied access occurred;
- who deleted/replaced/migrated an object.

Audit also must not disappear because a transaction rolls back.

#### Affected FCTM rows

- `3-§8-1` through `3-§8-16`;
- `5-§15-1` through `5-§15-11`;
- `22-§29-12`;
- `25-§23-1` through `25-§23-12`;
- `25-§25-2`;
- `BP-§6.2-1`, `BP-§6.3-2`.

#### Required Stage 7 treatment

The later EIS must distinguish:

- domain provenance;
- authority/audit event;
- provider operational log.

They may reference each other, but provider logs never become Smart Business authority truth.

Sensitive retrieval audit must avoid logging private document content.

Affected Engineering findings remain held where they depend on unimplemented SB-P-1.12 audit/denial surfaces.

---

### SEC14-S7-10 — Exports must use the same permission truth as retrieval and must not become an access-escalation path

**Severity:** HIGH  
**Classification:** Security design / D12 hold

#### Evidence

FCTM requires:

- summaries/exports permission-scoped;
- CSV/Excel/PDF exports;
- create does not imply export;
- files/exports governed through the shared authority kernel.

Locked SB-P-1.12 EIS-ISO-05 explicitly says exports run as kernel-checked commands.

No current export implementation exists.

#### Security consequence

An Employee permitted to contribute transactions/documents must not be able to export:

- all Ledger history;
- Owner financial data;
- other staff documents;
- object URLs;
- metadata outside their object scope.

Export also cannot precompute a privileged dataset and later serve it after revocation without current authorization.

#### Affected FCTM rows

- `3-§10-1`, `3-§10-6`, `3-§10-7`, `3-§10-8`, `3-§10-9`;
- `3-§11-1` through `3-§11-4`;
- `3-§18-2`;
- `5-§12-2` through `5-§12-5`;
- `21-§5`, `21-§11` (delegated);
- file/export isolation through delegated `22-§6-8`.

#### Required Stage 7 / EIS rule

Exports must:

- perform a fresh kernel decision for export action/object scope;
- generate only currently authorized rows/fields;
- not inherit create/read permission as export permission;
- use revocation-safe retrieval if a downloadable artifact is created;
- avoid durable export files unless the approved document/media lifecycle explicitly governs them.

Acceptance remains D12-held.

## 5. Stage 6 findings — Security specialist disposition

### B6-04 — governed transaction command / audit-safe writes

**Security disposition:** **CONFIRMED — HIGH / IMPLEMENTATION HOLD.**

Stage 6 evidence is correct. The current direct DML path is incompatible with final authority/audit guarantees.

All DTX-dependent Stage 7 findings remain held until upstream cut-over evidence exists.

### B6-06 — material-field fingerprint

**Security disposition:** **CONFIRMED — FEASIBLE WITH D12 HOLD.**

FPDR-3 material-target fingerprint and authority revalidation are distinct controls and must stay distinct.

### B6-08 — storage control plane / signed access / ingest

**Security disposition:** **CONFIRMED WITH STRONGER REVOCATION NOTE.**

A short signed URL is not equivalent to immediate revocation. The EIS must either use a revocable/authorization-checked delivery path or explicitly return to Mission Control before accepting any residual stale-access window.

### B6-10 — default privileges / RLS-grants

**Security disposition:** **CONFIRMED — CRITICAL IMPLEMENTATION HOLD.**

New tables/functions must be born hardened in the same migration.

### B6-11 — idempotency / unknown outcome

**Security disposition:** **CONFIRMED insofar as it intersects authorization.**

Multi-row imports must revalidate per row/bounded chunk under EIS-CNF-05. A retry must not execute under revoked authority.

### B6-16 — upstream implementation chain

**Security disposition:** **CONFIRMED — HARD DEPENDENCY HOLD.**

Documentary Stage 7 may proceed; implementation/runtime claims may not.

### B6-17 — failure states

**Security disposition:** **CONFIRMED.**

Permission change and revocation are security-relevant failure states and must fail closed without false success or partial unauthorized business writes.

### B6-18 — migration/topology

**Security disposition:** **CONFIRMED for Security intersection.**

Default privilege/RLS hardening and migration order behind D12/D13 are mandatory.

## 6. Stage 7 Engineering findings that must remain held

No canonical Sections 20–21 Engineering Review exists on the reviewed baseline yet, so I do **not invent Engineering finding IDs**.

When Claude Code emits Stage 7 per-row findings, Mission Control should keep the following categories from being accepted as runtime-ready:

| Engineering finding category | Required status / hold |
|---|---|
| Any of the 225 `D12` rows whose feasibility claim depends on actual authority/RLS/revalidation/audit behavior | **HOLD — upstream implementation/evidence required** |
| All 42 `DTX` rows | **HOLD — governed command cut-over/effective-access evidence required** |
| New document/media/provenance/import tables | **HOLD for implementation until birth-safe RLS/grants/default ACL plan exists** |
| Manager/Employee permission behavior | **HOLD — kernel capability/object-scope evidence required** |
| Employee upload + Owner-intelligence denial | **HOLD — create/read/export separation and negative tests required** |
| Signed/controlled document retrieval | **HOLD — revocation mechanism/window unresolved** |
| Current-permission retrieval after role/grant change | **HOLD — execution-time/current-access evidence required** |
| Any service-role/admin-client storage handler | **HOLD — EIS-ISO-04 binding/inventory required** |
| Document/transaction confirmation execution | **HOLD — EIS-CNF-01/-02 implementation evidence required** |
| Multi-row document/import execution during revocation | **HOLD — EIS-CNF-05 evidence required** |
| Export permission behavior | **HOLD — kernel-checked export action/object-scope evidence required** |
| Sensitive retrieval / storage audit completeness | **HOLD — authoritative audit/denial surfaces required** |
| R2/storage-provider behavior | **HOLD — DR2 / provider evidence required** |

A row may remain technically `PASS` for *documentary feasibility* only if the Engineering Review separately records the dependency hold and does not imply implementation/readiness/acceptance.

## 7. Required later EIS / verification assertions from Security

The later SB-P-1.14 EIS should explicitly cover:

1. **Authority consumption only:** no SB-P-1.14 permission engine.
2. **Active-business binding:** every document/object action starts from a verified principal + explicit requested business; never a client-trusted business ID.
3. **Action/object capabilities:** create/read/update/replace/delete/export/admin are distinct.
4. **Role defaults:** Owner, Manager and Employee behavior consumes upstream role/capability facts; Manager is not Owner by default.
5. **Birth-safe database objects:** same-migration RLS/revokes/default-ACL reconciliation.
6. **Governed writes:** no protected direct DML; all Ledger/document-derived writes converge on governed commands.
7. **Confirmation/revalidation:** exact reviewed proposal binding + execution-time authority recheck.
8. **Revocation during import:** per-row/bounded-chunk revalidation and truthful completed/remaining outcomes.
9. **File/object retrieval:** kernel checked at request; mechanism must meet revocation requirement through delivery.
10. **Signed-link semantics:** no silent acceptance of a stale-access window.
11. **Privileged handlers:** caller-derived authority binding; service role never authority.
12. **Exports:** kernel-checked export command, field/row projection, revocation-safe delivery.
13. **Audit/provenance:** authoritative Smart Business events; provider logs supplemental only.
14. **Negative tests:** cross-business, Employee Owner-intelligence, Manager no-Owner-default, create≠read/export, revoked access, stale link, direct-DML denial, anon access, default privilege leakage.
15. **Effective-access inventory:** `PUBLIC`, `anon`, `authenticated`, `service_role`, executor/function-owner roles and creator-role defaults.
16. **Provider/storage evidence:** no runtime claim until DR2 is independently evidenced and activated.

## 8. Trigger screen

| Trigger | Security conclusion |
|---|---|
| **T2 — conflict among approved sources** | **NOT TRIGGERED.** Blueprint/FCTM/upstream locked authority sources are aligned. |
| **T3 — new Product Truth / Founder decision** | **NOT TRIGGERED by the canonical design.** **T3 CANDIDATE only if Engineering proposes accepting a non-zero post-revocation signed-link access window as intended behavior.** Security must not invent that tolerance. |
| **T6 — material derived constraint** | **NOT TRIGGERED anew.** Birth-safe RLS/grants, command-only writes, current authorization and privileged binding derive from already locked upstream security rules. |
| **T7 — omission / deferral / pull-forward / reclassification / reassignment** | **NOT TRIGGERED.** No row needs to move missions or change disposition. All held rows remain `IN SCOPE`. |
| **T8 — infeasibility / Product Truth conflict / material security conflict** | **NOT TRIGGERED at documentary feasibility level.** Approved remediation paths exist. **T8 must be raised finding-scoped if Engineering proposes shipping new protected tables under inherited broad grants, retaining a parallel direct-DML write path, bypassing D12, or claiming revoked object access while a non-revocable issued link remains valid without an approved tolerance.** |

## 9. Security acceptance boundary

This report does **not** certify:

- SB-P-1.12 implementation;
- SB-P-1.13 implementation;
- R2/provider readiness;
- any new RLS policy;
- any grant/default-ACL state in production;
- signed-link revocation behavior;
- service-role handler safety;
- audit durability;
- transaction-command cut-over;
- export security;
- Stage 7 acceptance.

It establishes only the independent Security / Permissions / RLS & Grants disposition needed for Mission Control's Stage 7 review.

## 10. Final specialist conclusion

SB-P-1.14 is **security-feasible at documentary architecture level** provided Stage 7 and the later EIS preserve the approved upstream authority model.

The mission must not advance any affected Engineering finding from documentary feasibility to runtime-ready acceptance until the corresponding D12/DTX/DR2 evidence exists.

The most important mandatory holds are:

1. all authority-dependent D12 behavior;
2. all 42 DTX rows;
3. new-table RLS/default-grant hardening;
4. Manager/Employee create/read/export separation;
5. signed-link/current-permission revocation semantics;
6. privileged service-role storage paths;
7. authoritative audit/provenance;
8. current-authority retrieval and export.

No Founder/Product Truth correction is required on the evidence reviewed.

**INDEPENDENT STAGE 7 SECURITY / PERMISSIONS / RLS & GRANTS REVIEW SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
