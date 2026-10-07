# SB-P-1.13 — Stage 10 Security Delta Review

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation  
**Specialist:** S10-DR-1 — Security & Permissions Architecture  
**Authority:** SB-P-1.13-MC-17 and `communication/missions/SB-P-1.13/mission-control/27-stage10-security-delta-review-instruction.md`  
**Review type:** Finding-closure delta review only  
**Status:** SUBMITTED TO MISSION CONTROL — NO EIS ACCEPTANCE / LOCK / IMPLEMENTATION AUTHORITY

## 1. Reviewer identity and independence

**Actual actor/model:** ChatGPT — GPT-5.6 Sol  
**Provider:** OpenAI  
**Session / room:** Team LIPS Smart Business — Security & Permissions Architecture room

This same room authored the canonical SB-P-1.13 Stage 7 Security review and the initial Stage 10 Security EIS review.

This room did **not** author or materially edit the MC-16 EIS refinement commit at PR #793 head `90311eb7d7ea2a4a4d1619e5a969e69790fe3295`.

The corrected EIS/refinement remains authored by Claude Code. I re-read the exact corrected requirements and did not rely on the prior report's conclusions alone.

**Independence assessment:** valid for the authorized delta-review purpose, with disclosed correlated-assumption risk from prior SB-P-1.12 and SB-P-1.13 Security review work.

## 2. Exact target reviewed

| Item | Exact identity |
|---|---|
| Canonical MC-17 activation baseline | `main@47ebaa2af9a513f3724c2e67f2650e62f20e835f` |
| PR | `#793` |
| PR state at review | OPEN / DRAFT / UNMERGED |
| Exact candidate head | `90311eb7d7ea2a4a4d1619e5a969e69790fe3295` |
| Corrected EIS blob | `821badea37ba349f6aa83ed7d5a83b405c3038bd` |
| Pre-refinement head | `970128762d0cd039ee6eeaa45967b7ca7a6b02e5` |
| Pre-refinement EIS blob | `f8cbb35895887e9e3ef706b9743cb84d6ca489a7` |
| Prior Security Stage 10 report | `communication/missions/SB-P-1.13/specialists/04-stage10-eis-security-review.md` |
| Prior Security report blob | `4fd819c0e029d7bf2fc05e7896fc4f937d22dea1` |

Mission Control has already verified the structural delta as exactly two changed files, no requirement-ID changes, 651/651 IN SCOPE traceability preserved, all 252 D12 rows still mapped to `EIS13-HOLD-01`, and all 17 DTX rows still mapped to `EIS13-CMD-02` and `EIS13-HOLD-02`.

This review therefore focuses only on closure of SEC13-EIS-S10-01 through -06 and the authorized C4/C7 security intersections.

## 3. Executive security delta disposition

All six originating Security findings are **RESOLVED at EIS design level** on the exact corrected candidate.

The corrected EIS now:

- adopts the locked SB-P-1.12 narrow-executor / `SECURITY DEFINER` command model;
- does not depend on restoring authenticated direct DML;
- defines a coordinated transaction-family cut-over with one effective protected write path;
- defines the new-object RLS/grants/default-privilege/effective-access contract;
- binds conversation/history/cache reuse to current authority;
- prohibits SB-P-1.13 `service_role` use unless a later EIS revision explicitly adopts the upstream privileged-handler contract;
- defines transient attachment handling with bounded in-memory staging and fail-closed behavior;
- preserves D12 and all 17 DTX holds;
- adds verification requirements for effective access, privileged handlers, revocation-safe reuse and transient-data handling.

The C4 armed-spoken-confirmation correction introduces no new Security blocker: it requires deliberate arming, exact proposal/binding/fingerprint binding, actor/business matching, stale/replay/background rejection and execution-time authority revalidation without bystander surveillance.

The C7 versioned provider-configuration correction also introduces no new Security blocker: merchant data may flow only through a configuration identity with accepted evidence, material provider/model/routing/data-control changes invalidate that evidence, and stale evidence engages the kill switch.

No new Product Truth or Founder decision is required.

Remaining items are implementation / evidence gates, not EIS design defects.

## 4. Finding-by-finding closure table

| Finding | Prior status | Delta status | Exact corrected evidence |
|---|---|---|---|
| `SEC13-EIS-S10-01` | EIS design defect | **RESOLVED** | §13 coordinated cut-over; `EIS13-CMD-01`; `EIS13-CMD-02`; `EIS13-MIG-02`; `EIS13-HOLD-02`; `EIS13-VER-01` |
| `SEC13-EIS-S10-02` | EIS design defect | **RESOLVED** | `EIS13-AUTH-04`; `EIS13-MIG-01`; `EIS13-VER-01` |
| `SEC13-EIS-S10-03` | EIS design defect | **RESOLVED** | `EIS13-WSP-05`; `EIS13-GW-05`; `EIS13-CTX-02`; `EIS13-CTX-03`; `EIS13-VER-01` |
| `SEC13-EIS-S10-04` | EIS design defect | **RESOLVED** | §6 request path; `EIS13-AUTH-01`; `EIS13-CTX-02`; `EIS13-VER-01` |
| `SEC13-EIS-S10-05` | EIS design defect | **RESOLVED** | §13 steps 1–8; `EIS13-CMD-02`; `EIS13-MIG-02`; `EIS13-HOLD-02`; `EIS13-VER-01` |
| `SEC13-EIS-S10-06` | EIS design defect | **RESOLVED** | `EIS13-ATT-01`; `EIS13-VER-01`; related C6 transient-audio evidence in `EIS13-VOI-02` |

No originating Security finding remains NOT RESOLVED.

## 5. Detailed closure findings

### SEC13-EIS-S10-01 — Narrow-executor / command-only compatibility

**Delta status: RESOLVED**

The corrected `EIS13-CMD-02` no longer specifies `SECURITY INVOKER`.

It now explicitly adopts the locked SB-P-1.12 executor model:

- `SECURITY DEFINER`;
- `NOLOGIN NOINHERIT` executor owner;
- only required transaction table/column privileges;
- empty hardened `search_path`;
- schema-qualified references;
- `PUBLIC` / `anon` EXECUTE revoked in the creating migration;
- narrow `authenticated` EXECUTE only at cut-over;
- no dynamic object names;
- kernel revalidation and idempotency inside the protected transaction;
- no dependency on authenticated direct DML.

`EIS13-CMD-01` also now states that protected writes use kernel-checked command functions only and never authenticated direct DML.

This is compatible with locked SB-P-1.12 `EIS-ISO-02`, `EIS-ISO-10` and the executor-role target.

**Remaining implementation/evidence dependency**

Full Assurance must still prove:

- actual function owner and role attributes;
- effective EXECUTE grants;
- hardened search path;
- absence of direct authenticated INSERT/UPDATE/DELETE;
- safe RETURNING / response projection;
- no alternate write RPC or service-role bypass.

No further EIS correction is required for this finding.

---

### SEC13-EIS-S10-02 — New-object access contract

**Delta status: RESOLVED**

Corrected `EIS13-MIG-01` now gives the new-object security posture:

- RLS enabled and forced on every business-scoped table;
- deny-by-default policies;
- SB-P-1.12 kernel helpers for capability and object scope;
- no bare `business_id` / client-state authority;
- composite business references;
- no `PUBLIC` or `anon` privilege on business-data objects;
- revocation in the creating migration;
- creator-role default-privilege reconciliation;
- minimum intentional `authenticated` read/EXECUTE;
- governed command writes where protected;
- `EIS-ISO-10` for definer functions;
- `NOLOGIN NOINHERIT` function owner;
- safe outcome/proposal projections;
- business-independent FAQ table separated from merchant data.

Corrected `EIS13-AUTH-04` also closes the conversation-history object-scope gap:

- thread/message visibility is kernel capability/object-scope controlled;
- business membership alone is insufficient;
- default deny applies beyond the actor until separate approved sharing behavior exists.

`EIS13-VER-01` requires an effective-access inventory covering grants, default privileges, RLS, function owner/security mode and search path.

This is sufficient at EIS design level.

**Remaining implementation/evidence dependency**

The later migration/implementation package must instantiate these invariants object-by-object and prove the effective grants/policies from the target database.

The generic EIS contract is not runtime proof.

No further EIS correction is required for this finding.

---

### SEC13-EIS-S10-03 — Revocation-safe protected-context reuse

**Delta status: RESOLVED**

The corrected EIS directly addresses the prior history/cache leak.

`EIS13-WSP-05` requires persisted protected segments to retain:

- capability;
- object scope;
- sensitivity class;
- source provenance.

`EIS13-CTX-02` now binds caches and conversation state to:

- business;
- principal;
- relevant authority epochs;
- source-state version.

An allow→deny authority change or active-business change is a cache miss.

`EIS13-CTX-03` now makes **current** authorization control:

- cache serving;
- history rendering;
- summarization;
- prior-content re-injection into model context.

Role, capability, membership, entitlement and active-business changes invalidate or re-authorize prior protected content. Historical permission does not continue.

`EIS13-GW-05` prohibits a protected cache hit from bypassing current authorization.

This closes the Stage 10 defect.

**Remaining implementation/evidence dependency**

Full Assurance must test warm-cache and persisted-history behavior under:

- role downgrade;
- capability revocation;
- membership removal;
- entitlement change;
- active-business switch;
- object-scope revocation.

No further EIS correction is required.

---

### SEC13-EIS-S10-04 — Service-role / privileged-handler boundary

**Delta status: RESOLVED**

Corrected §6 and `EIS13-AUTH-01` now state:

- caller-JWT RLS-bound client is the default for all business data;
- no SB-P-1.13 handler currently needs `service_role`;
- `service_role` is not permitted for conversation, proposals, outcomes, attachments, telemetry or model context;
- possession of `service_role` is never authority;
- any future privileged path requires a later EIS revision and the locked SB-P-1.12 `EIS-ISO-04` contract;
- that contract must bind verified principal, business, action and object set;
- bound predicates must appear in every privileged query;
- EIS-CNF-02 revalidation applies;
- request/model/tool payload cannot supply authority;
- a source-complete privileged-handler inventory is an acceptance artifact.

This is materially stronger than the original "no service-role for model context" statement and closes the gap across all SB-P-1.13 server paths.

**Remaining implementation/evidence dependency**

Full Assurance must prove the implementation contains no undeclared admin client or privileged path.

No further EIS correction is required.

---

### SEC13-EIS-S10-05 — Coordinated no-dual-path transaction cut-over

**Delta status: RESOLVED**

Section 13 now defines an explicit eight-step cut-over:

1. upstream SB-P-1.12 authority prerequisites implemented/verified;
2. create the governed command under the narrow executor contract without authenticated EXECUTE;
3. add idempotency/outcome/audit support;
4. test Owner/Manager/Employee/cross-business behavior;
5. grant narrow command EXECUTE and move structured UI / Conversation / Voice callers;
6. revoke authenticated direct DML and remove/replace the direct-insert policy in the same governed cut-over;
7. verify effective access shows no alternate protected path;
8. only then may `EIS13-HOLD-02` be satisfied.

The EIS also says:

- steps 5 and 6 form one coordinated/atomic cut-over;
- rollback restores one path, never both;
- no window may exist where both protected write paths are effective;
- no window may exist where direct DML is revoked before a valid governed command is available.

`EIS13-MIG-02` now treats the transaction family as the exception to simple "after upstream" ordering and places it in the coordinated SB-P-1.12 WS-A3 cut-over.

`EIS13-HOLD-02` is satisfiable only after effective-access verification confirms the direct path is gone.

This resolves the EIS sequencing ambiguity.

**Remaining implementation/evidence dependency**

The phrase "atomic cut-over" is a design invariant, not yet implementation evidence.

The later implementation/migration mission must prove that deployment choreography, database privilege transition, old-session behavior and rollback actually preserve:

- no dual effective protected write path;
- fail-closed behavior for stale clients;
- no broken-authority fallback;
- no restoration of direct authenticated DML.

If the chosen deployment/runtime cannot realize the invariant, implementation must stop and return for design refinement.

That is an implementation gate, not a remaining Stage 10 EIS defect.

---

### SEC13-EIS-S10-06 — Transient attachment boundary

**Delta status: RESOLVED**

Corrected `EIS13-ATT-01` now defines:

- allowed staging class: in-request server memory only;
- any different staging class requires later EIS revision/evidence;
- verified-principal + active-business binding;
- unguessable reference;
- bounded TTL;
- deterministic cleanup on success/failure/expiry/abandonment;
- no log, telemetry or error-payload copy;
- no backup or dead-letter persistence;
- kernel reauthorization before status/retrieval/download/handoff;
- provider handoff only through the authorized interface/evidence gate;
- fail closed if the runtime cannot demonstrate a safe transient mechanism;
- no new Supabase storage bucket.

This closes the prior under-specification.

The C6 raw-audio expansion also strengthens the adjacent transient-data boundary by covering browser buffers, request/framework spill, edge/proxy capture, logs/APM, queues, analytics/test fixtures, backups and provider transport.

**Remaining implementation/evidence dependency**

The implementation must prove the chosen runtime actually supports the claimed memory-only attachment path for allowed file sizes.

If runtime behavior requires filesystem/object-store spill, the EIS must be revised before that mechanism is used.

No further Stage 10 EIS correction is required now.

## 6. C4 security intersection — armed spoken confirmation

**Security result: ACCEPTABLE AT EIS DESIGN LEVEL**

The corrected spoken-confirmation path is security-compatible with FPDR-1 and the shared confirmation system.

It requires:

- proposal preview first;
- deliberate user action to arm confirmation capture;
- binding to exact proposal;
- binding identifier + reviewed-state fingerprint;
- actor match;
- active-business match;
- valid / unexpired / unconsumed binding;
- confirm/reject-only interpretation;
- no business-field regeneration;
- stale, duplicate, replayed, background and out-of-window speech rejected;
- no ambient listening;
- no speaker/bystander inference;
- execution-time authority revalidation.

This does not create a second authority system.

Security implication: the trusted event is not "voice identity"; it is the authenticated session plus deliberate arming plus exact binding plus final execution-time authorization.

That is consistent with the no-surveillance boundary.

**Implementation verification required**

- capture cannot arm implicitly;
- browser/UI race cannot bind one spoken response to a different proposal;
- active-business switch invalidates the binding;
- stale/replayed audio does not execute;
- background speech before/after the armed window does not execute;
- confirm/reject parser cannot mutate material fields.

No Security refinement is required from C4.

## 7. C7 security intersection — versioned provider configuration evidence

**Security result: ACCEPTABLE AT EIS DESIGN LEVEL**

The corrected provider evidence gate now binds evidence to a versioned configuration identity including, as applicable:

- provider/service/model;
- organization/account/project;
- routing;
- retention/training/abuse-monitoring/data-control settings;
- regional processing;
- Smart Business adapter/config version;
- evidence date/verifier.

Runtime calls carry the accepted configuration identity.

A material provider/model/account/routing/data-control change invalidates evidence and prevents merchant data from continuing through that changed configuration until re-verification is accepted.

The kill switch remains available while evidence is stale.

Provider request IDs remain provenance only.

`EIS13-GW-02`, `EIS13-VOI-10` and `EIS13-ENV-01` bind runtime/provider selection to the same governed configuration identity.

This is security-positive and introduces no new authority path.

**Implementation verification required**

- provider configuration identity is server-derived/version-controlled, not caller/model supplied;
- stale evidence actually blocks outbound merchant-data requests;
- kill switch cannot be bypassed by alternate adapters;
- credential/account identity matches the accepted evidence pack;
- configuration rollback does not replay consequential commands.

No Security refinement is required from C7.

## 8. Regression screen

No material Security regression caused by the MC-16 correction was identified.

Specifically:

- D12 remains held;
- all 17 DTX rows remain held;
- confirmation remains bound to the exact frozen proposal;
- execution-time revalidation remains mandatory;
- idempotency / unknown-outcome behavior remains intact;
- Employee protected-context denial is strengthened, not weakened;
- active-business isolation remains server-authorized;
- no new `service_role` authority is introduced;
- no direct DML dependency is reintroduced;
- no new durable attachment/audio store is introduced;
- provider evidence remains an activation gate;
- Product Truth / Blueprint / FCTM / FPDR records are unchanged.

## 9. Remaining evidence and activation gates

Resolution of the six EIS defects does **not** satisfy the underlying implementation/runtime holds.

Still required later:

- D12 capability-by-capability upstream implementation/acceptance;
- 17-row DTX command-only effective-access evidence;
- object-by-object RLS/grant/default-ACL/function-owner inventory;
- direct-DML absence proof;
- transaction cut-over deployment/revert rehearsal;
- concurrent confirmation/idempotency/revalidation tests;
- revocation-safe cache/history tests;
- privileged-handler inventory;
- denial-audit durability evidence;
- transient attachment/audio per-layer evidence;
- provider account/data-control/configuration evidence;
- multilingual/provider runtime evaluation;
- Stage 17 and Stage 19 acceptance evidence.

None is claimed complete by this report.

## 10. Trigger screen

| Trigger | Delta-review result |
|---|---|
| T2 — approved-source conflict | **NOT TRIGGERED** |
| T3 — new Product Truth | **NOT TRIGGERED** |
| T6 — new material derived constraint | **NOT TRIGGERED anew** |
| T7 — omission/deferral/reclassification/reassignment | **NOT TRIGGERED** |
| T8 — material security/integrity conflict | **RESOLVED for the originating finding-scoped Stage 10 defects. No new T8 condition identified.** |

No Founder/Product Truth gate is required.

## 11. Final closure register

| Originating finding | Final delta disposition |
|---|---|
| `SEC13-EIS-S10-01` | **RESOLVED** |
| `SEC13-EIS-S10-02` | **RESOLVED** |
| `SEC13-EIS-S10-03` | **RESOLVED** |
| `SEC13-EIS-S10-04` | **RESOLVED** |
| `SEC13-EIS-S10-05` | **RESOLVED** |
| `SEC13-EIS-S10-06` | **RESOLVED** |

## 12. Authority boundary

This delta review does not:

- accept or lock the EIS;
- authorize PR #793 merge;
- authorize Stage 11;
- authorize an implementation package;
- authorize code, SQL, schema or migrations;
- authorize provider selection or activation;
- verify production;
- mutate production;
- close D12;
- close DTX;
- replace later independent implementation verification.

## 13. Handoff

The corrected Security delta is ready for Mission Control's consolidated Stage 10 disposition.

SECURITY DELTA READY FOR MISSION CONTROL STAGE 10 DISPOSITION
