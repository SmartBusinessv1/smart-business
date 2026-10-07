# SB-P-1.13 — Stage 10 Independent Security / Permissions EIS Review

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**Specialist ID:** S10-SP-1 — Security & Permissions Architecture
**Authority:** `communication/missions/SB-P-1.13/mission-control/21-stage10-eis-security-review-instruction.md` and SB-P-1.13-MC-15 / `mission-control/20-stage10-eis-review-and-specialist-authorization.md`
**Review type:** Independent complete-EIS documentary security review
**Status:** SUBMITTED TO MISSION CONTROL — NO EIS ACCEPTANCE / LOCK / IMPLEMENTATION AUTHORITY

## 1. Reviewer identity and independence

**Actual actor/model:** ChatGPT — GPT-5.6 Sol
**Provider:** OpenAI
**Session / room:** Team LIPS Smart Business — Security & Permissions Architecture room
**Prior SB-P-1.13 contribution:** this same room authored the canonical Stage 7 independent Security & Permissions review at `communication/missions/SB-P-1.13/specialists/01-stage7-security-permissions-review.md`.

This actor/session did **not** author or materially shape:

- SB-P-1.13 Blueprint Sections 1–21;
- the canonical FCTM;
- Stage 6 Builder Review;
- Stage 7 Engineering Review;
- Stage 9 EIS v0.1;
- FPDR-1 through FPDR-5.

The Stage 9 EIS identifies Claude Code as its author.

**Independence assessment:** **VALID FOR S10-SP-1.**

There is correlated-assumption risk because this room previously reviewed the upstream SB-P-1.12 authority architecture and the SB-P-1.13 Stage 7 security design. I therefore treated those prior findings as evidence only and re-read the complete Stage 9 EIS, locked upstream EIS, locked Blueprint, current repository implementation and Stage 10 authorization independently.

No provider dashboard, production database, test project or live runtime was inspected. No implementation/runtime/production claim is made.

## 2. Exact Stage 10 target

| Item | Exact identity reviewed |
|---|---|
| Canonical Stage 10 authorization baseline | `main@4e758da187c449e11c81a97e764e8f5d40c0dfcb` |
| PR | `#793` |
| PR state at final pre-report check | OPEN / DRAFT / UNMERGED / MERGEABLE |
| Exact PR head | `970128762d0cd039ee6eeaa45967b7ca7a6b02e5` |
| EIS path | `docs/phase-1-mission-blueprint/implementation/SB-P-1.13-EIS.md` |
| Exact EIS blob | `f8cbb35895887e9e3ef706b9743cb84d6ca489a7` |
| Locked SB-P-1.13 Blueprint blob | `bbf65429e3c1f18b9dacdda62e1c175d9eb395a1` |
| Canonical SB-P-1.13 FCTM blob | `97ddc752dcbbdb6586110a782ef1e24405b6dd22` |
| Locked SB-P-1.12 EIS blob | `c444f7509477d0e8b997af538440d93bf2ca4d72` |
| Canonical Stage 7 Security report blob | `e6158bc64944a4ddde915c613ea91e245362fcc7` |

Independent structural spot-check confirmed:

- 72 unique EIS requirement IDs;
- 651 mapped `IN SCOPE` rows;
- 252 `D12` rows;
- 17 `DTX` rows;
- all 17 DTX rows are represented by `EIS13-CMD-02` and `EIS13-HOLD-02`;
- the candidate head and EIS blob match the Stage 10 instruction exactly.

These structural checks do not imply substantive security acceptance.

## 3. Executive security disposition

The EIS correctly carries many of the Stage 7 security constraints:

- SB-P-1.12 authority is consumed, not duplicated;
- D12 remains a hard fail-closed dependency;
- active business is explicit requested context;
- protected data is intended to be authorized before model exposure;
- Employee Owner-intelligence denial is placed before model context;
- confirmation binding, execution-time revalidation and idempotency are consumed from SB-P-1.12;
- all 17 DTX rows remain held;
- the structured Transactions UI is intended to converge on the governed transaction command;
- Voice uses the same authority/command path;
- raw audio is explicitly transient;
- provider secrets are server-only;
- provider and runtime facts remain evidence-gated.

However, the complete EIS is **not yet security-sufficient for Stage 10 acceptance**.

The most material defect is an internal contradiction between `EIS13-CMD-02` and the locked SB-P-1.12 command-only target:

> `EIS13-CMD-02` fixes the new transaction command as `SECURITY INVOKER`, while the locked upstream target explicitly revokes direct DML from `authenticated` and requires protected commands to execute through narrow executor-owned `SECURITY DEFINER` functions.

Under the target grant model, a true `SECURITY INVOKER` function called by `authenticated` cannot perform the protected transaction insert once direct INSERT is revoked, unless the implementation quietly re-grants direct DML and recreates the bypass that the cut-over is meant to remove.

Additional EIS corrections are required for:

- security posture of the new SB-P-1.13 tables/functions;
- protected conversation/cache content after permission revocation;
- service-role / privileged-handler boundaries;
- transaction cut-over sequencing;
- transient attachment staging.

No new Founder Product Truth decision is required by these findings.

## 4. Material findings

### SEC13-EIS-S10-01 — `SECURITY INVOKER` transaction command conflicts with the locked command-only grant model

**Severity:** CRITICAL
**Affected EIS:** §5 repository baseline; §13; `EIS13-CMD-02`; §23 `EIS13-MIG-01`; §27 `EIS13-HOLD-02`; §24 `EIS13-VER-01`

**Exact evidence**

The candidate says:

- current `transactions` creation is direct client INSERT;
- the target `create_transaction_governed` is a **`SECURITY INVOKER`** function;
- the structured Transactions UI moves onto the same command during the SB-P-1.12 transactions-family cut-over;
- no permanent parallel direct-write path remains.

The locked SB-P-1.12 EIS says:

- commands are the only protected-table write boundary;
- `authenticated` has **no direct DML** on protected tables;
- transaction creation inserts through a **narrow executor**;
- executor roles are `NOLOGIN NOINHERIT`;
- executor roles own **`SECURITY DEFINER`** functions with narrow table/column grants;
- all definer functions must satisfy the hardened `EIS-ISO-10` invariant.

Current repository evidence still shows the old direct-grant model:

- `authenticated` has `INSERT` on `transactions`;
- `createTransaction()` writes directly from the client;
- current RLS is Owner-only.

**Security consequence**

The proposed security mode cannot realize the locked target as written.

If `authenticated` direct INSERT is correctly revoked, a `SECURITY INVOKER` function has no elevated insert privilege and cannot perform the write.

If direct INSERT is retained so that the invoker function can work, the direct-write bypass remains effective and the following controls can be bypassed through the old path:

- confirmation binding;
- execution-time revalidation;
- Employee/Manager capability rules;
- idempotency/outcome recording;
- unified audit/provenance;
- command-only object projection.

This is exactly the Stage 7 dual-write-path risk that C-8 and `H-DTX` were intended to prevent.

**Classification:** **EIS design defect requiring correction.**

**Precise correction required**

`EIS13-CMD-02` must be reconciled to the locked SB-P-1.12 protected-command model.

The EIS should either:

1. specify the command as a hardened `SECURITY DEFINER` function owned by the appropriate `NOLOGIN NOINHERIT` narrow executor role, with:
   - explicit empty/hardened `search_path`;
   - schema-qualified references;
   - immediate `PUBLIC` / `anon` EXECUTE revocation;
   - narrow `authenticated` EXECUTE only where the command is direct-RPC-safe;
   - narrow executor table/column grants;
   - no direct `authenticated` DML on `transactions`;
   - kernel authorization and EIS-CNF-02 revalidation inside the protected transaction;

or

2. avoid fixing the function security mode in SB-P-1.13 and explicitly state that the exact transaction command adopts the already-locked SB-P-1.12 executor/function-owner contract during the coordinated transactions-family cut-over.

A plain `SECURITY INVOKER` design must not be retained if the target still revokes client INSERT.

**T2/T3/T6/T7/T8 screen**

- T2: not triggered; the conflict is between a draft EIS and a locked upstream source, not between two approved sources.
- T3: not triggered.
- T6: not newly triggered; the narrow-executor rule is already locked upstream.
- T7: not triggered.
- **T8: finding-scoped material security conflict — YES.** Hold Stage 10 acceptance until corrected.

**Stage 10 implication:** **CORRECTION REQUIRED.**

---

### SEC13-EIS-S10-02 — New SB-P-1.13 tables lack a complete RLS/grant/object-scope security contract

**Severity:** HIGH
**Affected EIS:** §7 `EIS13-WSP-05`; §8 `EIS13-AUTH-04`; §12 proposal/binding model; §15 `EIS13-TEL-01`; §23 `EIS13-MIG-01`; §24 `EIS13-VER-01`

**Exact evidence**

`EIS13-MIG-01` proposes:

- `conversation_threads`;
- `conversation_messages`;
- `ai_tool_proposals`;
- transaction idempotency/outcome records;
- support FAQ entries;
- transcript/result records;
- aggregate telemetry.

It says business-scoped tables are "enforced through the SB-P-1.12 kernel."

The complete EIS does **not** define, for these new objects:

- whether RLS is enabled/forced;
- exact policy shape;
- direct DML grants;
- whether writes are command-only;
- function owner / executor role;
- default privilege treatment;
- `PUBLIC` / `anon` / `authenticated` effective grants;
- composite business reference requirements;
- safe response projection;
- source-complete effective-access verification.

For conversation history specifically, `EIS13-WSP-05` says only "business-scoped." That is not sufficient authorization semantics for a store that may contain previously authorized Owner-only financial or staff-sensitive content.

A person being in the same business is not proof that every stored conversation message in that business is readable to that person.

**Security consequence**

An implementation could satisfy "business-scoped" while accidentally allowing:

- one Employee to read another person's conversation;
- an Employee to read an Owner thread containing Owner intelligence;
- direct client writes to proposal/message stores;
- broad `authenticated` table access;
- default `PUBLIC` / `anon` function execution;
- unsafe `RETURNING` or outcome projections.

That would create a new authority surface even though the EIS says no second Permission Engine exists.

**Classification:** **EIS design defect requiring correction.**

**Precise correction required**

Add a cross-cutting SB-P-1.13 persistence/enforcement requirement that every new object is created under the locked SB-P-1.12 access model.

At minimum:

- every business-scoped table has deny-by-default kernel RLS;
- no policy derives authority from client state or a bare `business_id`;
- protected writes use governed commands where required;
- `PUBLIC` / `anon` get no business-data privileges;
- `authenticated` receives only the minimum direct read/execute access intentionally allowed;
- definer functions follow upstream `EIS-ISO-10`;
- creator-role default privileges are reconciled;
- business references use the upstream business-isolation pattern;
- outcome/proposal reads return safe projections;
- conversation/thread/message access is checked using kernel capability and object scope, not business membership alone;
- the EIS does **not** need to invent merchant-visible sharing semantics: if thread-sharing semantics are not fixed by Product Truth, default deny beyond the actor/object scope until separately authorized;
- Full Assurance inventories effective grants/policies/functions for the new objects.

**T2/T3/T6/T7/T8 screen**

- T2: not triggered.
- T3: not triggered by requiring least-privilege enforcement.
- T6: not newly triggered; this applies existing locked isolation/security principles.
- T7: not triggered.
- **T8: finding-scoped security conflict if left uncorrected — YES.**

**Stage 10 implication:** **CORRECTION REQUIRED.**

---

### SEC13-EIS-S10-03 — Cached and historical conversational context is not safely invalidated after permission revocation

**Severity:** HIGH
**Affected EIS:** §7 `EIS13-WSP-05`; §8 `EIS13-AUTH-02` through `EIS13-AUTH-04`; §9 `EIS13-GW-05`; §10 `EIS13-CTX-02`, `EIS13-CTX-03`; §12 `EIS13-CNF-02`

**Exact evidence**

The EIS correctly requires authorization before protected retrieval and says caches are scoped by business and principal.

However:

- `EIS13-GW-05` permits caching by business and principal;
- `EIS13-WSP-05` persists conversation messages;
- `EIS13-CTX-02` scopes caches and conversation state by business/principal;
- `EIS13-CTX-03` checks record version and authority epochs only before a proposal is previewed.

The EIS does not define how previously authorized protected content is prevented from re-entering model context after the same principal's capability is revoked.

Example:

1. a Manager with temporary Owner-intelligence capability receives a profit answer;
2. that answer or retrieved context is stored/cached in the Manager's conversation context;
3. the capability is revoked;
4. the same business/principal cache key still matches;
5. the next model call can receive the old sensitive content unless the context layer re-authorizes or invalidates it.

The principal and business have not changed, so business+principal scoping alone is insufficient.

**Security consequence**

A revocation can stop new database retrieval while leaving already-cached or historical protected content available to the model or UI.

That would violate:

- execution-time/current-authority semantics;
- Employee/Manager denial;
- permission change during conversation;
- "protected data withheld before model exposure."

**Classification:** **EIS design defect requiring correction.**

**Precise correction required**

The EIS must define protected-context reuse under authority change.

A safe design must require one of, or an equivalent combination of:

- every cached/history segment carrying the capability/object scope under which it was exposed and being re-authorized at read/context-assembly time;
- cache keys including relevant authority epoch(s), with automatic miss/invalidation after any allow→deny authority change;
- protected conversation messages being filtered/redacted from model context and UI when current authority no longer permits them;
- no cache of Owner-sensitive values unless the cache contract has current-authority validation.

The same rule must apply to:

- conversation history replay;
- summarization;
- model-context construction;
- cached deterministic output;
- voice/text parity.

`EIS13-CTX-03` should protect retrieval/model exposure, not only the later proposal-preview step.

**T2/T3/T6/T7/T8 screen**

- T2: not triggered.
- T3: not triggered.
- T6: not newly triggered; this realizes the already-approved revocation/current-permission rule.
- T7: not triggered.
- **T8: material information-disclosure risk if left uncorrected — YES.**

**Stage 10 implication:** **CORRECTION REQUIRED.**

---

### SEC13-EIS-S10-04 — Privileged `service_role` use is prohibited for model context but not governed across all SB-P-1.13 server paths

**Severity:** HIGH
**Affected EIS:** §6 module architecture; §8; §10 `EIS13-CTX-02`; §13 commands; §19 attachments; §23 migration design

**Exact evidence**

The EIS explicitly says:

- model-context retrieval never uses the service-role client.

That is good but narrower than the locked upstream privileged-operation contract.

The complete EIS does not state whether other SB-P-1.13 handlers may use `service_role`, for example:

- conversation/thread persistence;
- proposal/outcome lookup;
- attachment handoff/status;
- telemetry write paths;
- background/provider callbacks;
- command bookkeeping.

The current repository already has an RLS-bypassing admin client and existing service-role handlers, so "server function" alone is not a least-privilege guarantee.

The locked SB-P-1.12 EIS requires every privileged read/write/claim/lease/bookkeeping/follow-up operation to bind:

- verified principal;
- business;
- action;
- object set;

and to carry those predicates in the privileged query, with current-authority revalidation for protected access.

**Security consequence**

An implementer could correctly avoid service role for model retrieval while still using it for proposal, conversation, attachment or bookkeeping operations with only caller-supplied IDs.

That would bypass RLS and create a cross-business/actor trust gap.

**Classification:** **EIS design defect requiring correction.**

**Precise correction required**

Add an explicit SB-P-1.13 privileged-handler rule:

- caller-JWT RLS-bound client is the default for all business data;
- `service_role` possession is never authority;
- any exceptional privileged handler must consume the locked SB-P-1.12 `EIS-ISO-04` decision-binding contract;
- actor/business/action/object scope is derived from verified state, never trusted from model/tool/request payload;
- every privileged query contains the bound business/object predicates;
- protected reads/writes revalidate through EIS-CNF-02;
- a source-complete SB-P-1.13 privileged-handler/admin-client inventory is required before acceptance;
- if no SB-P-1.13 path needs service role, the EIS should say so and prohibit it.

**T2/T3/T6/T7/T8 screen**

- T2: not triggered.
- T3: not triggered.
- T6: not newly triggered; upstream privileged-operation security already exists.
- T7: not triggered.
- T8: security defect if privileged paths remain unconstrained; no Product Truth gate.

**Stage 10 implication:** **CORRECTION REQUIRED.**

---

### SEC13-EIS-S10-05 — Transaction cut-over sequencing is internally ambiguous and can create a circular dependency

**Severity:** HIGH
**Affected EIS:** §13 `EIS13-CMD-02`; §23 `EIS13-MIG-01`, `EIS13-MIG-02`; §24 `EIS13-VER-01`; §27 `EIS13-HOLD-01`, `EIS13-HOLD-02`

**Exact evidence**

The locked Blueprint Stage 7 constraint C-8 states:

- the governed command becomes the single protected transaction-write boundary;
- the structured UI and Conversation/Voice converge;
- the 17 DTX rows remain blocked;
- sequencing/mechanics are engineering questions.

The EIS says:

- SB-P-1.13 creates `create_transaction_governed`;
- the structured UI moves to that command **during** the SB-P-1.12 transactions-family cut-over;
- `EIS13-MIG-02` says SB-P-1.13 migrations run **after** the SB-P-1.12 families they depend on.

Those statements do not provide an executable dependency order.

If the SB-P-1.12 transaction-family cut-over must finish before the SB-P-1.13 command migration begins, the cut-over cannot converge the structured UI onto the SB-P-1.13-owned command.

If SB-P-1.13 creates the command first while direct INSERT remains live, two effective write paths exist until the coordinated cut-over.

**Security consequence**

A poorly sequenced implementation can create a window where:

- direct INSERT and governed command coexist;
- direct DML is revoked before the replacement command has valid executor access;
- structured UI breaks;
- one surface has confirmation/revalidation/idempotency while another bypasses it.

**Classification:** **EIS design defect requiring correction.**

**Precise correction required**

The EIS must define the dependency as a **coordinated transactions-family cut-over package**, not merely "after upstream."

The later implementation/migration plan must have an exact order such as:

1. prerequisite SB-P-1.12 identity/kernel/binding work implemented and verified;
2. create the final governed transaction command using the upstream executor/grant model;
3. add idempotency/outcome/audit support;
4. verify the command against Owner/Manager/Employee and cross-business fixtures;
5. migrate the structured Transactions UI plus Conversation/Voice callers to the command;
6. revoke direct authenticated transaction DML and remove/replace the old direct-insert policy in the same governed cut-over window;
7. verify effective access proves no alternate protected write path;
8. only then satisfy `H-DTX` / `EIS13-HOLD-02`.

The exact migration grouping may be chosen later; the EIS must make the ordering and no-dual-path invariant explicit.

**T2/T3/T6/T7/T8 screen**

- T2: not triggered.
- T3: not triggered.
- T6: not newly triggered.
- T7: not triggered; no work moves missions.
- **T8: material cut-over/integrity risk if left ambiguous — YES.**

**Stage 10 implication:** **CORRECTION REQUIRED.**

---

### SEC13-EIS-S10-06 — Attachment "transient" handling is under-specified compared with the raw-audio security contract

**Severity:** MEDIUM-HIGH
**Affected EIS:** §19 `EIS13-ATT-01`; §20 `EIS13-FAIL-02`; §15 `EIS13-TEL-01`; §23 `EIS13-MIG-01`

**Exact evidence**

The Voice contract is explicit:

- raw audio remains in memory;
- no temp files;
- no buckets;
- no logs/APM/error capture;
- no retry/dead-letter storage;
- no fixtures/backups/analytics;
- payload logging is redacted.

Attachment handling says only:

- attachments are "held transiently";
- content-type and size checks apply;
- no Supabase storage bucket is created;
- handoff targets SB-P-1.14 UDI.

It does not specify:

- where bytes are held;
- maximum lifetime;
- actor/business binding;
- cleanup on success, timeout, crash or provider failure;
- logging/APM/error-capture exclusions;
- backup/queue/dead-letter exclusions;
- whether a remote transient store may be used;
- authorization at download/status/handoff time.

**Security consequence**

Sensitive merchant documents could become durably retained in:

- runtime temp storage;
- request/error capture;
- object storage;
- logs;
- retry queues;
- provider-side staging;

despite the product boundary that this mission does not create durable media storage.

A transient object referenced only by business ID could also be fetched cross-user or cross-business if the access contract is not explicit.

**Classification:** **EIS design defect requiring correction.**

**Precise correction required**

Define the attachment transient-data contract to the same security standard as raw audio, adapted for file size/runtime constraints:

- exact allowed staging class;
- business + verified-principal binding;
- unguessable object/reference identifiers;
- short maximum TTL;
- explicit deletion on success, failure, expiry and abandoned session;
- no telemetry/log/error payload copy;
- no backup or dead-letter persistence;
- no provider handoff except through the authorized downstream interface/evidence gate;
- reauthorization before status/download/handoff;
- content is always untrusted data;
- if no safe transient staging mechanism exists in the chosen runtime, attachment intake remains held rather than silently adding durable storage.

This does not decide the SB-P-1.14 durable-media architecture.

**T2/T3/T6/T7/T8 screen**

- T2: not triggered.
- T3: not triggered.
- T6: not newly triggered; this preserves the locked transient/handoff boundary.
- T7: not triggered.
- T8: not required if corrected before acceptance; otherwise material privacy/security risk.

**Stage 10 implication:** **CORRECTION REQUIRED.**

---

### SEC13-EIS-S10-07 — D12 fail-closed gate is correctly preserved

**Severity:** INFO / GATE
**Affected EIS:** §8; §27 `EIS13-HOLD-01`; all 252 D12 rows

**Exact evidence**

The EIS explicitly says:

- all consumed SB-P-1.12 surfaces are specification-available but implementation/evidence incomplete;
- no D12-mapped requirement is implemented until the relevant upstream workstreams are implemented, verified and accepted for SB-P-1.13;
- 252 D12 rows map to `EIS13-HOLD-01`.

This faithfully preserves EIS-DEP-01.

**Classification:** **Evidence / activation gate only.**

**Required correction:** none for this finding.

**Remaining evidence**

For each consumed capability:

- upstream workstream implementation;
- family-specific WS-A3 cut-over where applicable;
- WS-D evidence for confirmation/idempotency;
- WS-E evidence for authority events/denial behavior;
- Mission Control dependency acceptance.

**T-screen:** no trigger.

**Stage 10 implication:** favorable; does not close the hold.

---

### SEC13-EIS-S10-08 — Employee denial / authorization-before-model exposure is sound at design level

**Severity:** INFO / IMPLEMENTATION VERIFICATION
**Affected EIS:** `EIS13-AUTH-02`, `EIS13-AUTH-03`, `EIS13-CTX-02`, `EIS13-HOLD-01`

**Exact evidence**

The EIS requires:

- server-side authorization before protected retrieval;
- caller RLS-bound client for model-context retrieval;
- no service-role client for model context;
- Owner-intelligence capability gates before data is retrieved;
- protected aggregates never enter unauthorized Employee context;
- prompt wording never creates permission.

This matches the Stage 7 finding.

**Classification:** **Implementation verification requirement**, subject to SEC13-EIS-S10-03 cache/history correction.

**Required correction:** no separate correction beyond SEC13-EIS-S10-03.

**Required later tests**

- Employee denial before retrieval;
- no protected field in prompt/tool context;
- permission revoked mid-conversation;
- prompt/tool injection;
- text/voice parity;
- no leak through errors/aggregates/caches/history.

**Stage 10 implication:** favorable design direction.

---

### SEC13-EIS-S10-09 — Confirmation binding and execution-time revalidation are correctly consumed

**Severity:** INFO / IMPLEMENTATION VERIFICATION
**Affected EIS:** `EIS13-CNF-01`, `EIS13-CNF-02`; `EIS13-IDM-01`, `EIS13-IDM-02`; `EIS13-HOLD-01`

**Exact evidence**

The EIS correctly requires:

- canonical server-side proposal;
- frozen fingerprint;
- SB-P-1.12 confirmation binding;
- no material model change after confirmation;
- same-transaction execution-time authorization under EIS-CNF-02;
- idempotency bound to business, actor, operation and fingerprint;
- stored-outcome replay;
- explicit `outcome_unknown`;
- no automatic re-execution.

**Classification:** **Implementation verification requirement / evidence gate.**

**Required correction:** no separate correction.

**Security verification note**

Outcome lookup must inherit the same server-derived principal/business authorization and safe object scoping; the idempotency key is a lookup key, not authority.

**Stage 10 implication:** favorable, with runtime concurrency evidence still required.

---

### SEC13-EIS-S10-10 — Audit/provenance direction is acceptable, but denial durability remains upstream-evidence dependent

**Severity:** MEDIUM / GATE
**Affected EIS:** §15 `EIS13-AUD-01`; §8; §27 `EIS13-HOLD-01`

**Exact evidence**

The EIS records consequential-action provenance and links it to SB-P-1.12 authority events.

The consumed upstream surface explicitly includes the authority-event and denial contract.

The locked SB-P-1.12 EIS is responsible for durable security-relevant denial behavior across direct RPC/server-boundary invocation types.

**Classification:** **Evidence / activation gate plus implementation verification.**

**Required correction:** no separate EIS correction if the final EIS explicitly continues to consume the upstream denial contract for all relevant SB-P-1.13 permission/tool denials.

**Required later evidence**

- denied pre-retrieval authorization produces the required durable denial event;
- command denial cannot disappear through rollback;
- routine denial remains non-accusatory;
- AI/provider telemetry is not substituted for the authoritative audit event;
- provenance links to the same committed command outcome, not a separate AI truth.

**Stage 10 implication:** favorable but held on D12/WS-E.

---

### SEC13-EIS-S10-11 — Voice transient-data security is strong at design level

**Severity:** INFO / PROVIDER GATE
**Affected EIS:** `EIS13-VOI-02`, `EIS13-VOI-03`, `EIS13-VOI-04`, `EIS13-PRV-01`, `EIS13-TEL-01`

**Exact evidence**

Raw-audio handling explicitly excludes:

- temp files;
- buckets;
- logs;
- error capture/APM;
- retry/dead-letter queues;
- analytics;
- fixtures;
- backups.

Interim transcripts cannot execute. Spoken confirmation binds to the pending frozen proposal. Provider-side retention remains unverified and activation-gated.

**Classification:** **Implementation verification requirement / provider evidence gate.**

**Required correction:** none from Security.

**Required later evidence**

- actual runtime contains no hidden request-body/error logging;
- provider retention/training/logging verified before merchant data is sent;
- interrupted upload and timeout cleanup;
- raw audio absent from telemetry and backups.

**Stage 10 implication:** favorable.

---

### SEC13-EIS-S10-12 — Provider-secret custody is appropriately server-side but remains activation evidence

**Severity:** MEDIUM / GATE
**Affected EIS:** `EIS13-GW-01`, `EIS13-ENV-01`, `EIS13-PRV-01`

**Exact evidence**

Provider credentials are specified as:

- server-only environment values;
- never `VITE_*`;
- never committed;
- provider identity/account/credential custody remains `UNVERIFIED — ACCESS REQUIRED`.

**Classification:** **Evidence / activation gate only.**

**Required correction:** none for this finding.

**Required later evidence**

- actual secret store and access control;
- no client bundle exposure;
- key rotation/disable path;
- provider account identity;
- least-privilege provider credentials;
- no logging of secrets.

**Stage 10 implication:** favorable but unverified.

## 5. All 17 DTX rows — Security disposition

The EIS correctly maps all 17 DTX rows to both `EIS13-CMD-02` and `EIS13-HOLD-02`.

The row set remains:

1. `24-§21-2`
2. `24-§31-13`
3. `9-§17-1`
4. `10-§11-2`
5. `10-§13-1`
6. `10-§13-2`
7. `10-§23-1`
8. `10-§23-9`
9. `12-§4-1`
10. `12-§21-1`
11. `12-§21-9`
12. `22-§29-8`
13. `17-§5-7`
14. `BP-§6.2-1`
15. `BP-§6.4-8`
16. `BP-§10.2-W9`
17. `BP-§10.2-SA1`

**Security conclusion:** mapping/hold coverage is correct, but the mechanism under `EIS13-CMD-02` must be corrected per SEC13-EIS-S10-01 and the coordinated cut-over defined per SEC13-EIS-S10-05.

No DTX row may be treated as security-ready merely because the EIS maps it.

## 6. Active-business context / RLS / isolation screen

### Active business

**Design direction:** acceptable.

- client state supplies requested context only;
- server derives verified principal and verifies the active business through SB-P-1.12;
- single-ownership inference is prohibited.

### Cross-business isolation

**Design direction:** acceptable, but incomplete for new-object enforcement.

The EIS correctly requires business scoping, but SEC13-EIS-S10-02 must add the exact RLS/grant/object-scope posture for newly created SB-P-1.13 tables.

### Employee denial

**Design direction:** acceptable after SEC13-EIS-S10-03.

Authorization-before-retrieval is correct. Historical/cached protected context must also obey current authority after revocation.

## 7. Service-role and function/executor screen

| Area | Security result |
|---|---|
| Model-context retrieval | Correctly restricted to caller RLS client |
| General SB-P-1.13 privileged handlers | **Under-specified — SEC13-EIS-S10-04** |
| Transaction command security mode | **Incorrect against locked target — SEC13-EIS-S10-01** |
| New definer function hardening | Not explicitly stated for SB-P-1.13 new functions — must consume upstream EIS-ISO-10 |
| New table effective grants/default ACL | Under-specified — SEC13-EIS-S10-02 |
| Direct transaction DML | Correctly intended to disappear, but final cut-over sequencing needs correction |
| Service-role as authority | Not authorized by Product Truth/upstream EIS; must remain prohibited |

## 8. Cache, telemetry and retained-context screen

Positive controls:

- non-sensitive caching only;
- business + principal cache scoping;
- no raw prompt/transcript shadow telemetry archive;
- identifiers/latency/errors/usage/cost only;
- no raw audio telemetry.

Required correction:

- current-authority invalidation/filtering for previously protected conversation/cache content, per SEC13-EIS-S10-03.

Implementation verification must include role/grant revocation with warm caches and existing conversation history.

## 9. Migration sequencing screen

The EIS correctly states:

- migration is design-only at this stage;
- execution needs a separately authorized migration mission;
- isolated test rehearsal is required;
- unknown production migration state is not inferred.

But two security-sensitive sequencing corrections are required:

1. the transactions-family command creation and direct-DML revocation must be one coordinated cut-over plan (SEC13-EIS-S10-05);
2. new SB-P-1.13 tables/functions must be born with their intended RLS/grants/definer posture rather than created broadly and tightened later (SEC13-EIS-S10-02).

No production execution is authorized.

## 10. Product Truth / FCTM / Blueprint screen

### Product Truth

**No new Product Truth / Founder decision required.**

All required corrections are engineering/security realizations of already locked principles:

- one authority kernel;
- command-only protected writes;
- current permission at execution;
- business isolation;
- no protected data before authorization;
- no durable raw audio;
- no new durable-media store in SB-P-1.13.

### FCTM

**No FCTM disposition/owner/build/commercial correction identified.**

The structural 651-row mapping is adequate for this security review.

The findings concern the implementation mechanism attached to mapped rows, not missing product obligations.

### Locked Blueprint

**No locked Blueprint correction identified.**

Stage 7 C-8 already states the single effective protected transaction-write boundary and leaves only sequencing/mechanics/evidence to the EIS.

## 11. Trigger screen

| Trigger | Security conclusion |
|---|---|
| T2 — conflict among approved sources | **NOT TRIGGERED.** Draft-EIS conflicts are corrected at Stage 10; locked Product Truth sources do not conflict. |
| T3 — new Product Truth | **NOT TRIGGERED.** No new merchant-visible decision is required. |
| T6 — material derived constraint | **NOT TRIGGERED anew.** Required constraints derive from already locked authority/isolation/transient-data principles and accepted Stage 7 constraints. |
| T7 — omission/deferral/pull-forward/simplification/reclassification | **NOT TRIGGERED.** No FCTM ownership/timing/classification move is required by these corrections. |
| T8 — material security/integrity conflict | **TRIGGERED FINDING-SCOPED** by SEC13-EIS-S10-01, -02, -03 and -05 unless corrected. EIS acceptance must stop on those findings; this does not create a Founder gate. |

## 12. Stage 10 correction register

| Finding | Severity | Classification | Required before Stage 10 acceptance |
|---|---:|---|---|
| SEC13-EIS-S10-01 | CRITICAL | EIS design defect | YES |
| SEC13-EIS-S10-02 | HIGH | EIS design defect | YES |
| SEC13-EIS-S10-03 | HIGH | EIS design defect | YES |
| SEC13-EIS-S10-04 | HIGH | EIS design defect | YES |
| SEC13-EIS-S10-05 | HIGH | EIS design defect | YES |
| SEC13-EIS-S10-06 | MEDIUM-HIGH | EIS design defect | YES |
| SEC13-EIS-S10-07 | INFO/GATE | Evidence gate | NO |
| SEC13-EIS-S10-08 | INFO | Implementation verification | NO separate correction |
| SEC13-EIS-S10-09 | INFO | Implementation verification | NO |
| SEC13-EIS-S10-10 | MEDIUM/GATE | Evidence gate | NO separate correction |
| SEC13-EIS-S10-11 | INFO/GATE | Provider/implementation gate | NO |
| SEC13-EIS-S10-12 | MEDIUM/GATE | Provider evidence gate | NO |

## 13. Preserved holds and authority boundaries

Preserved:

- all 252 `D12` rows remain held until the exact SB-P-1.12 consumption evidence is accepted;
- all 17 `DTX` rows remain held;
- AI/Voice provider facts remain `UNVERIFIED — ACCESS REQUIRED`;
- provider selection/activation remains unauthorized;
- Malayalam/Manglish evaluation remains evidence-gated;
- transient-audio proof remains evidence-gated;
- later-mission dependency rows remain held for their owning slices;
- runtime/acceptance evidence remains future work;
- PR #793 remains DRAFT / unaccepted;
- EIS lock is not authorized by this report;
- Stage 11 is not authorized by this report;
- implementation package is not authorized;
- implementation is not authorized;
- SQL/schema/migration execution is not authorized;
- provider/production mutation is not authorized.

## 14. Mission Control disposition requested

Return PR #793 for narrow EIS refinement addressing:

1. transaction command security mode/executor compatibility;
2. new-object RLS/grants/default-privilege/object-scope posture;
3. revocation-safe conversation/cache context reuse;
4. complete privileged-handler/service-role contract;
5. coordinated transaction-family cut-over order;
6. explicit transient attachment security contract.

After those corrections, Security delta re-review may be limited to the exact changed EIS requirements if the candidate's locked Blueprint/FCTM/source boundaries remain unchanged.

SECURITY REFINEMENT REQUIRED
