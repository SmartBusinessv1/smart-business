# SB-P-1.12 — Stage 13 Supabase Implementation Readiness Review

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Work package:** `SB-P-1.12-WP-SUPABASE-IMPLEMENTATION-READINESS-REVIEW`  
**Executing specialist:** Supabase Backend Architecture  
**Authorizing instruction:** `communication/live/instruction1.34.md`  
**Mission Control authority:** MC-171 — `communication/missions/SB-P-1.12/mission-control/42-package-lock-metadata-reconciliation-and-specialist-readiness-authorization.md`  
**Reviewed canonical baseline:** `main@a894cf1052a9754653a01f79e15d2c7098d23579`  
**Mode:** Review only — no implementation, SQL, migration creation/execution, provider mutation or implementation authorization  
**Disposition:** `READINESS REFINEMENTS AND EVIDENCE GATES REQUIRED`

## 1. Authority and baseline verification

The authorized baseline and all five locked artifact identities were verified before review.

| Artifact | Canonical path | Required blob | Observed blob | Result |
|---|---|---|---|---|
| Product Blueprint | `docs/phase-1-mission-blueprint/completed/SB-P-1.12.md` | `77d52096c020668311b039721a4de9248ddd460e` | same | PASS |
| EIS | `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f7509477d0e8b997af538440d93bf2ca4d72` | same | PASS |
| Engineering Contract | `docs/implementation/SB-P-1.12/engineering-contract.md` | `3c9b01d9df49d9bfff39f22ee2a866c6d40f316e` | same | PASS |
| Build Prompt | `docs/implementation/SB-P-1.12/lovable-build-prompt.md` | `3993b77776b9576ac4000599e55a62479182b963` | same | PASS |
| Verification Checklist | `docs/implementation/SB-P-1.12/verification-checklist.md` | `453b598a5b79171ddf26903d2055fef1d3d19e5b` | same | PASS |

Primary readiness input reviewed:

`communication/missions/SB-P-1.12/claude-code/37-stage13-implementation-readiness-report.md`  
blob `248a0d618a8d96a4f89e914cffa938d6b7ee02cd`.

The candidate `SB-MIG-1.4 — SB-P-1.12 Authority, Identity and History-Integrity Schema` remains a **non-executable proposal**. This review does not activate it.

## 2. Read-only current-state observations

The following read-only Supabase observations were taken during this specialist review. They are current observations, not mutation authority.

- The connected Supabase account currently exposes production project `smart-business`, ref `gysgzasfcjvtrgaigfyn`, region `ap-south-1`, status `ACTIVE_HEALTHY`, PostgreSQL 17 / observed database version `17.6.1.141`.
- No Supabase development branches are currently visible for that production project.
- The connected provider view does **not** currently expose historical test project `drravyyauixltoihzmwo`. Repository and historical evidence still establish that it existed and was used as `smart-business-test`; current absence from this provider view does not prove deletion, ownership transfer or inaccessibility reason.
- Production's read-only migration ledger currently reports all 24 repository-era migration versions through `20260902150000`, including `20260724170000` and `20260830120000`. This supersedes the readiness report's point-in-time statement that those two production-ledger entries were unknown/unverified as a **current observation only**. It does not establish migration-byte equivalence, effective grants, default privileges, backups/PITR, test-project alignment or execution authority.
- Current public tables returned by the provider inspection report RLS enabled. That is not a complete authorization verdict; grants, policies, function execution, service-role paths and denial behavior remain separate evidence.
- Current schema still visibly contains the pre-SB-P-1.12 shape relevant to this migration plan, including `businesses.owner_id` as unique and linked to `auth.users`, and historical actor columns such as `transactions.creator_id` linked to Auth-era identity.

No raw SQL was executed to obtain these observations.

## 3. Overall readiness disposition

The candidate architecture is technically viable, and the high-level M-01 through M-20 order is aligned with the locked EIS. It is **not ready for migration-plan activation or application implementation authorization without finding-scoped refinement and evidence closure**.

The review identifies no need to reopen Product Truth, the locked Blueprint, the locked EIS or the locked implementation package. The findings below are implementation-readiness conditions inside the already-locked architecture.

### 3.1 Material blockers before migration-plan activation

1. **SUPA-RDY-01 — Test target not presently evidenced.** Positive current identity, migration-ledger alignment, schema/grant baseline and clean replay evidence for `drravyyauixltoihzmwo` are missing.
2. **SUPA-RDY-02 — Backfill/orphan census absent.** M-04 cannot be safely specified for execution until every historical actor-bearing column is inventoried and every referenced identity is reconciled without rewriting attribution.
3. **SUPA-RDY-03 — Source-complete cascade classification absent.** M-10 needs the full foreign-key inventory and record-class disposition before changing `ON DELETE CASCADE` to `RESTRICT`.
4. **SUPA-RDY-04 — Kernel helper RLS execution path needs physical-contract refinement.** M-06 must state how the dedicated `NOLOGIN` definer owner reads RLS-protected authority tables without policy recursion or implicit bypass.
5. **SUPA-RDY-05 — Existing function-signature retirement is underspecified.** M-13d must prevent stale old Catalog signatures/overloads when the nineteen functions gain requested-business arguments.
6. **SUPA-RDY-06 — M-07/M-08 schema allocation needs a bounded decision.** Human-context audit support and generalized confirmation/preview must reuse the locked shared structures without creating competing event or preview systems.
7. **SUPA-RDY-07 — CI/assurance gate remains unresolved.** The specialist cannot approve an assurance substitute; Stage 15 evidence remains a Mission Control blocker while required CI cannot run.

### 3.2 Additional blockers before any production migration execution

8. **SUPA-RDY-08 — Production-shaped rehearsal and lock evidence absent.** M-04, M-09 through M-11 and M-13 need realistic non-production rehearsal, including lock duration/contention observations.
9. **SUPA-RDY-09 — G-6 effective-access evidence absent.** M-17 requires actual effective grants/default privileges/function execution evidence, including creator roles.
10. **SUPA-RDY-10 — Backup/PITR readiness absent.** A production migration window must not be authorized without current backup/PITR/restore evidence.
11. **SUPA-RDY-11 — G-7 provider/storage evidence remains absent.** M-20 and identity-deletion runtime remain gated exactly as the locked EIS states.

The observed 24-version production migration ledger is **not** a remaining blocker by itself. It is current read-only state evidence only and creates no execution authority.

## 4. Question-by-question specialist disposition

### Q-1 — Proposed M-01 through M-20 order

**Classification: `SUPPORTED`**

The proposed order is consistent with EIS Sections 14.4 and 19.2:

- identity and membership foundations precede kernel construction;
- M-04 reconciliation precedes historical FK validation;
- M-09 through M-12 / WS-F occur before authority family cut-over;
- M-13 proceeds one family at a time with its corresponding application change;
- M-17 remains after G-6 evidence;
- M-20 remains after G-7 storage evidence;
- M-19 remains separately runtime-authorized.

M-09 through M-11 should indeed precede M-13b. Replacing direct transaction DML before actor/history containment would create a cut-over atop unresolved historical identity integrity.

**Condition:** “supported” does not waive Q-2, Q-3, Q-5, Q-8, Q-15, Q-16 or Q-17 evidence gates.

### Q-2 — M-04 actor census, thresholds and orphan handling

**Classification: `BLOCKED — EVIDENCE REQUIRED`**

Before M-04 is executable, the package needs a source-complete read-only census of every actor identity column, including at minimum the columns already named by the EIS and any additional UUID actor/authorizer/resolver columns discovered from the live catalog.

Required evidence should establish:

1. distinct referenced identity count by source column;
2. union of all referenced identity UUIDs;
3. correspondence to Auth identities where provider access permits;
4. expected `persons.id` set after backfill;
5. duplicate/conflicting binding checks;
6. exact row-count reconciliation by source;
7. zero unresolved identities before M-09 FK validation.

Acceptance threshold for FK validation is **zero unresolved actor references**.

An orphan with no provable Auth identity must not be reassigned, rewritten to another person, or converted into active authority merely to make validation pass. Historical attribution is immutable. The orphan must be surfaced and dispositioned through a separately authorized reconciliation rule consistent with the locked EIS before M-09. This specialist review does not invent that rule.

### Q-3 — Which business cascades become RESTRICT

**Classification: `BLOCKED — EVIDENCE REQUIRED`**

The locked EIS already decides the governing rule: retained financial, correction, Catalog, Inventory, audit and deletion-history record classes use stable business attribution and must not disappear through business cascade.

The candidate cannot safely classify the reported 18 cascade edges from count alone. A source-complete live FK inventory is required, with each edge classified as:

- retained history → `RESTRICT`;
- operational/transient data explicitly allowed to disappear by the locked lifecycle rules → cascade may remain;
- unresolved → blocks M-10.

The classification must include child table, FK name, delete action, record class, retention/lifecycle rationale and verification item. No “all cascades” bulk rewrite is supported.

### Q-4 — M-10 reversibility

**Classification: `REFINEMENT REQUIRED`**

The EIS states the correct principle but the migration package needs an explicit point-of-no-safe-reversal.

- Before governed deletion/tombstone behavior or later data relies on the new retained-history invariant, previous FK definitions may be restored if the reversal was rehearsed and integrity checks pass.
- Once governed lifecycle behavior or post-cut-over records rely on `RESTRICT`/stable-history semantics, restoring old cascade behavior is no longer a safe rollback. Use a forward correction or, for catastrophic execution failure, the separately governed recovery plan.
- PITR is a disaster-recovery control, not the routine logical rollback for a migration, because restoring a database can discard unrelated writes after the restore point.

The migration package should encode the rollback boundary as a gate, not leave it as operator judgment during execution.

### Q-5 — M-13 under production write load

**Classification: `BLOCKED — EVIDENCE REQUIRED`**

No current evidence establishes production write rate, relation sizes, lock duration, contention or acceptable maintenance-window behavior for the M-13 family cut-overs.

Before a production step is authorized:

- rehearse each family on a production-shaped non-production dataset;
- record relation/index sizes and observed lock duration;
- run concurrent representative traffic;
- verify timeout/failure leaves exactly one authority path active;
- choose `lock_timeout`, `statement_timeout`, batching or maintenance-window parameters from measured evidence, not guessed constants.

Per-family cut-over remains the correct design. A family must not be left half switched between old Owner-only authority and the new kernel.

### Q-6 — Per-family revert versus PITR

**Classification: `REFINEMENT REQUIRED`**

Both controls have distinct roles.

- A rehearsed per-family revert/forward-correction path is required for logical M-13 rollback.
- Current backup/PITR evidence is additionally required before high-risk production execution.
- PITR must not be the default rollback because it can discard unrelated writes after the restore point.
- The production runbook needs a decision threshold distinguishing logical revert/forward fix from full restore.

A “revert migration exists” alone is insufficient production recovery evidence.

### Q-7 — Kernel helper, RLS recursion and performance

**Classification: `REFINEMENT REQUIRED`**

The locked mechanism is viable: policy-safe `STABLE SECURITY DEFINER` helpers, dedicated `NOLOGIN NOINHERIT` owner, narrow grants and indexed membership lookup are appropriate.

The physical M-06 contract must additionally state how that function owner reads the authority tables when those tables themselves have RLS enabled. A security-definer function does not become an authorization bypass merely by being `SECURITY DEFINER`; its owner still needs an explicit, non-recursive access path unless table ownership/BYPASSRLS is deliberately used, which the locked design does not authorize.

Therefore M-06 must lock one non-recursive pattern consistent with the EIS, for example narrow executor-role policies/grants over authority tables, and verify:

- no helper policy calls itself recursively;
- no broad `USING (true)` client policy is introduced;
- the executor has only the reads the helper needs;
- explicit hardened `search_path` and schema-qualified references;
- list/search timing and query plans do not materially regress.

No Product Truth or EIS change is required.

### Q-8 — G-6 evidence before M-17

**Classification: `BLOCKED — EVIDENCE REQUIRED`**

M-17 must be based on **effective state**, not repository grant text.

Required G-6 evidence:

- table/view/sequence privileges for `PUBLIC`, `anon`, `authenticated`, `service_role`, executor roles and relevant platform roles;
- RLS enablement and actual policies;
- function owner, `SECURITY DEFINER/INVOKER`, `search_path` and effective `EXECUTE`;
- schema privileges;
- default privileges for every actual creator role, at minimum `postgres` and `supabase_admin` where visible/applicable;
- role memberships that change effective privilege;
- an explicit list of any anonymous workflow approved by Product Truth/architecture and the exact objects it needs.

The repository proves why this is necessary: `20260727000000_reconcile_default_grants.sql` established broad defaults; later hardening removed `anon` from the migration-driven `postgres` default baseline for Inventory, while the historical `supabase_admin` default posture remained a disclosed residual.

No anonymous path is to be “preserved” merely because a grant exists. It must be separately approved.

### Q-9 — EC-ISO-10 and existing SB-P-1.11 functions

**Classification: `REFINEMENT REQUIRED`**

The current nineteen Catalog functions already provide useful precedent: `SECURITY DEFINER`, dedicated `NOLOGIN` owners and `SET search_path = ''`.

However, the locked SB-P-1.12 EIS requires the Catalog functions to gain explicit requested-business input and move from the Owner-only resolver to the kernel. In PostgreSQL, adding an input argument creates a different function signature; `CREATE OR REPLACE` against the new signature does not silently replace the old callable signature.

Therefore M-13d must explicitly guarantee:

- exactly the intended nineteen public Catalog command/read identities remain after cut-over;
- new requested-business signatures are installed and verified;
- old signatures are revoked/dropped at the same family cut-over so no stale Owner-only overload remains callable;
- no temporary twentieth public command or hidden legacy bypass survives;
- `PUBLIC`/unapproved `anon` execution is revoked immediately;
- `authenticated` execution exists only for functions intended for direct authenticated RPC; server-boundary-only families remain non-client-executable;
- every definer function meets EIS-ISO-10 after the cut-over.

This is an implementation-plan refinement, not a redesign of the nineteen-command contract.

### Q-10 — Binding service-role handlers to the kernel decision

**Classification: `SUPPORTED`**

EIS-ISO-04 is sufficiently strong as the governing contract.

The implementation should:

1. resolve the verified principal from the caller-authenticated path;
2. obtain the kernel decision from the caller-scoped authorization context;
3. use a short-lived server-created decision record binding principal, business, action, object set and authority epochs;
4. carry the bound business/object predicates into every `service_role` query;
5. revalidate protected reads/writes where EIS-CNF-02 requires;
6. reject missing, stale, mismatched or already-invalid decision binding;
7. never infer principal from service-role possession and never trust request-provided actor/business as authority.

A source-complete inventory of every `supabaseAdmin` call site must prove that no privileged query is unbound. The current `client.server.ts` explicitly documents that this client bypasses RLS, making that proof load-bearing.

### Q-11 — Serialization and transaction pooling

**Classification: `SUPPORTED`**

The three-row-type protocol is compatible with Supabase transaction pooling **only if each protected operation performs lock acquisition, authorization evaluation and protected write inside one database transaction**, normally one RPC/function transaction.

The design is sound because:

- `FOR SHARE` and `FOR UPDATE` are transaction-scoped locks;
- every path uses the same type order: registry → person rows → business authority-state row;
- multiple person rows use deterministic ascending UUID order;
- authority changes take incompatible locks and increment epochs in the same transaction.

The implementation must not:

- acquire locks in one HTTP/RPC call and write in another;
- depend on session-level state surviving a transaction-pooler handoff;
- use connection-local state as authorization evidence.

Concurrency tests must cover command/authority-change races, transfer involving both Owner persons, lifecycle deletion, multi-person decisions and lock-order determinism.

### Q-12 — Delete guards versus Supabase-managed operations

**Classification: `SUPPORTED`**

There is no technical reason to exempt `service_role` from the application-level delete guard; `service_role` bypasses RLS, which is precisely why a database guard is needed.

Supabase's internal maintenance roles are not the application `service_role` principal. The candidate should not create a standing provider-maintenance bypass. If a future authorized provider/maintenance operation genuinely must alter retained business records, it requires an explicit operational path and evidence.

Provider Auth-user deletion is a separate G-7 question and remains gated by EIS-ESC-05.

### Q-13 — Neutral legal/dispute hold state and NP-35 fixtures

**Classification: `SUPPORTED`**

A neutral record-level hold state is technically safe in M-12 as locked by EIS-LEG-02 provided it stores technical state and references only, not invented legal meaning, universal retention periods or policy conclusions.

NP-35 fixtures should be:

- synthetic;
- created only in the authorized test environment;
- isolated under dedicated test business/person identifiers;
- labelled as legal/dispute-hold simulation;
- denied any production authority;
- cleaned or retained according to the test fixture policy;
- free of copied merchant personal/business data unless a separately approved data-handling plan explicitly permits it.

### Q-14 — Human context and clarify/preview schema needs

**Classification: `REFINEMENT REQUIRED`**

**EC-CNF-03:** use the generalized `confirmation_bindings` planned by M-08. Do not create another preview-token authority subsystem. The existing Catalog preview token is precedent, not a second future engine.

**EC-AUD-04:** existing correction and Catalog event structures are useful precedent but are not evidence that every consequential authority event can retain bounded human-context linkage. M-07 should define the minimum generic context/reference shape needed by `authority_events` and related event families. It should prefer bounded codes/references or separately governed context records, not unbounded provider errors or arbitrary payload dumping.

The package should make this allocation explicit before migration authoring so M-07 and M-08 do not overlap or create duplicate truth.

### Q-15 — Test ledger/data alignment and clean replay

**Classification: `BLOCKED — EVIDENCE REQUIRED`**

Current provider visibility does not expose `drravyyauixltoihzmwo`; this review therefore cannot establish its current health, ownership, migration ledger or grants.

Before M-01 can be applied in test, obtain read-only evidence of:

- positive test project ref/name/environment classification;
- remote migration version/name list against all 24 canonical migration files;
- any deliberate migration-repair entries and their historical authority;
- unexpected extra/pending versions;
- current schema objects and grants relevant to the package;
- data preconditions needed by M-04;
- target has no production identity ambiguity.

Run both:

1. a forward application against the correctly aligned isolated test ledger; and
2. a clean replay from zero through all canonical historical migrations plus the candidate package.

A clean replay is required when migration SQL, ordering or dependencies change. A documentation-only package revision with byte-identical migration SQL does not need a redundant replay solely because its report version changed.

### Q-16 — Production-shaped rehearsal environment

**Classification: `BLOCKED — EVIDENCE REQUIRED`**

A production-shaped non-production rehearsal is required for M-04, M-09 through M-11 and each M-13 family before production execution because those operations depend on real cardinality, FK shape, lock behavior and cut-over timing.

Preferred data posture:

- synthetic or anonymized production-shaped data;
- preserve scale, skew, relationship density and concurrency characteristics needed by the test;
- do not copy raw merchant data by default.

If production-derived data is proposed, a separate data-handling authorization must define purpose, minimization, access, environment controls, retention and disposal. This specialist review grants no such approval.

### Q-17 — Production backup and PITR evidence

**Classification: `BLOCKED — EVIDENCE REQUIRED`**

Before any production migration step, the migration mission must carry current evidence of:

- positively identified production project ref;
- backup capability/status applicable to the project;
- latest successful recoverable point;
- PITR enablement/status and applicable retention/recovery window;
- operator/account authority needed to initiate recovery;
- documented recovery path and escalation owner;
- evidence captured sufficiently close to the execution window to remain current.

Mission Control, the Founder or a specifically authorized infrastructure/provider operator should collect this evidence. Supabase Backend Architecture reviews the technical sufficiency; it does not infer or activate provider recovery controls.

No backup/PITR state was established by this review.

### Q-18 — Safe Supabase CLI path

**Classification: `SUPPORTED`**

For `SB-MIG-1.4`, forbid bare target-mutating Supabase CLI commands and require the tracked wrapper:

`node scripts/supabase-cli.mjs <test|production> ...`

The wrapper's safety properties are stronger than relying on `supabase/config.toml`, current link state or ambient environment variables:

- explicit named target;
- tracked ref map;
- target/ref printed before execution;
- production refused unless `CONFIRM_PRODUCTION=yes`.

Do not change the repository's default project ID merely as a safety substitute. Positive target identity verification remains required before mutation.

### Q-19 — Assurance substitute while Actions produces no runs

**Classification: `NOT IN SPECIALIST SCOPE`**

Choosing an assurance substitute that satisfies Source 18 is a Mission Control governance decision.

Technical minimum, if Mission Control separately authorizes a substitute:

- exact commit identity;
- same lint/type/build/test commands required by Fast Gate;
- all Full Assurance DB, isolation, negative-path and concurrency suites applicable to the checkpoint;
- authorized isolated test backend;
- machine-captured exit status/logs/artifacts;
- secret-safe evidence;
- immutable repository evidence;
- independent review of the evidence.

This specialist does **not** declare such a substitute equivalent and does not authorize Stage 15. MC-171's CI/assurance blocker remains.

### Q-20 — Type regeneration and delivery-repository drift

**Classification: `REFINEMENT REQUIRED`**

After an authorized migration group is applied and verified in the approved **test** Supabase project:

1. regenerate `src/integrations/supabase/types.ts` from that exact test project/schema;
2. record the project ref and migration head used for generation;
3. review the generated diff against the migration group's intended schema;
4. commit the canonical type change with the same implementation checkpoint that consumes it.

Do not generate SB-P-1.12 future-schema types from production before production has that schema.

The unreconciled `starter-supab-shell` type changes must not be hand-merged as a competing schema truth. Under the recommended canonical-builder model, canonical generated types remain authoritative and the delivery-repository drift is reconciled during the later authorized delivery-sync mission. Any unrelated delivery-only client/auth changes are reviewed separately before transfer.

Under a Lovable-frontend model, that drift becomes a pre-build blocker because Lovable's working tree and generated types would otherwise be based on a different schema snapshot.

### Q-21 — Technical safety of Lovable doing schema work

**Classification: `SUPPORTED`**

There is a concrete safety reason to keep Lovable away from SB-P-1.12 schema/migration work at this stage:

- the current Lovable project is bound to production Supabase;
- schema work is default-deny and requires an independent migration mission;
- historical Lovable/platform object creation has different default-privilege behavior from repository migrations;
- a preview against production cannot safely exercise un-applied SB-P-1.12 schema.

This is a technical safety recommendation, not a builder appointment. A future Lovable role could be reconsidered only after explicit non-production binding, delivery-drift reconciliation and Mission Control authorization.

### Q-22 — Specialist pre-merge review checkpoints

**Classification: `SUPPORTED`**

Stage 19 does not replace specialist pre-merge architecture review for this migration-heavy authority mission.

**Finding-scoped Supabase pre-merge review should be mandatory for:**

- M-04 backfill/reconciliation;
- M-06 kernel helpers and `SECURITY DEFINER` access path;
- M-08 confirmation/idempotency/import ledger;
- M-09 through M-12 ESC-1/history-integrity and lifecycle containment;
- every M-13 family cut-over, including the corresponding application/server boundary where it uses privileged Supabase access;
- M-17 grants/default-privilege reconciliation;
- M-18 `owner_id` uniqueness removal;
- M-19 identity-deletion foundation;
- M-20 storage/RLS scoping.

M-01 through M-03, M-05, M-07 and M-14 through M-16 may be reviewed as appropriately grouped additive packages if the migration mission keeps their dependencies and evidence explicit; they still require specialist review before merge when they create authority, audit, constraint or privileged-function surfaces.

The specialist review checks architecture and migration safety. Independent Stage 19 verification remains separate and mandatory.

## 5. Migration-group readiness matrix

| Group | Specialist readiness | Main reason |
|---|---|---|
| M-01 | CONDITIONAL | Test target/ledger evidence required before application |
| M-02 | CONDITIONAL | Follows M-01; authority-table RLS/grant physical contract must be explicit |
| M-03 | CONDITIONAL | Follows identity/membership foundations |
| M-04 | BLOCKED | Actor census, orphan reconciliation, production-shaped rehearsal |
| M-05 | CONDITIONAL | Additive; exact grants/default privileges must follow locked EIS |
| M-06 | REFINEMENT REQUIRED | Non-recursive helper-owner RLS/read path must be explicit |
| M-07 | REFINEMENT REQUIRED | Bounded human-context allocation needs specification |
| M-08 | REFINEMENT REQUIRED | Confirmation binding must be the one generalized preview authority |
| M-09 | BLOCKED | M-04 zero-orphan proof required |
| M-10 | BLOCKED | Source-complete FK/record-class inventory plus rollback boundary |
| M-11 | CONDITIONAL | Only after M-10 and rehearsed guard/grant transition |
| M-12 | CONDITIONAL | Neutral hold/lifecycle state acceptable; no runtime authority |
| M-13a | BLOCKED FOR PRODUCTION | Rehearsal/load/lock evidence; app cut-over must be atomic with family |
| M-13b | BLOCKED FOR PRODUCTION | Same; WS-F must already pass |
| M-13c | BLOCKED FOR PRODUCTION | Same |
| M-13d | REFINEMENT REQUIRED | Old/new Catalog function signature retirement must be explicit |
| M-13e | BLOCKED FOR PRODUCTION | Same family-cut-over evidence; privileged support state protected |
| M-14 | CONDITIONAL | Do not reverse once non-Owner provenance exists |
| M-15 | CONDITIONAL | Projection and function versions must move together |
| M-16 | CONDITIONAL | Requires WS-F/WS-D dependencies; additive authority state |
| M-17 | BLOCKED | G-6 effective ACL/default-privilege evidence absent |
| M-18 | CONDITIONAL | Only after all single-owner inference is removed and verified |
| M-19 | BLOCKED | Separate identity-deletion runtime authorization + G-7/legal gates |
| M-20 | BLOCKED | G-7 storage-policy evidence absent |

“Conditional” here is a readiness finding, not execution authorization.

## 6. Backfill and orphan-integrity acceptance contract

The future migration plan should make these acceptance conditions explicit before M-04/M-09:

- source-complete actor-column inventory;
- union of every referenced historical identity;
- no attribution rewrite;
- one stable `persons.id` per reconciled identity;
- exactly one Owner membership per existing business from current `owner_id`;
- no duplicate active Owner membership;
- no unresolved historical actor reference at FK validation;
- before/after counts by source and target;
- repeat run produces no duplicate backfill;
- M-09 `VALIDATE CONSTRAINT` does not begin until reconciliation is zero-orphan.

If any orphan cannot be resolved from authoritative evidence, stop. Do not manufacture an Auth user, assign the record to the Owner, use a system UUID, or relax the FK solely to complete the migration.

## 7. RLS, grants and SECURITY DEFINER readiness

The target architecture is supportable if the migration package preserves all of these together:

1. RLS remains enabled on every exposed business table.
2. Direct protected-table DML for `authenticated` is removed where commands become the write boundary.
3. Policy helpers have a deliberately non-recursive read path to authority tables.
4. `PUBLIC` and unapproved `anon` function/table privileges are neutralized before use.
5. Existing broad default privileges are never assumed safe.
6. Every new/replaced `SECURITY DEFINER` function:
   - has a hardened explicit `search_path`;
   - schema-qualifies references;
   - has a `NOLOGIN NOINHERIT` owner with the minimum object rights;
   - avoids user-controlled dynamic object identifiers;
   - has effective `EXECUTE` verified after migration.
7. Old overloads/signatures are inventoried and removed from the callable surface at family cut-over.
8. `service_role` remains server-only and every privileged operation is bound to a kernel decision plus business/object predicates.
9. Provider/admin roles are not silently repurposed as application authority.

## 8. Concurrency and pooling readiness

The locked serialization design is technically compatible with Supabase's transaction pooler if the operation is database-transaction bounded.

Required implementation/verification properties:

- no session-state authorization;
- no cross-request lock ownership assumption;
- one DB transaction from authority locks through kernel evaluation to protected write;
- universal lock order;
- ascending UUID order within person locks;
- authority mutations use `FOR UPDATE`, dependent protected work uses `FOR SHARE`;
- retries resolve through committed idempotency outcome rather than assuming connection continuity;
- concurrency tests prove no post-revocation commit and no lock-order deadlock under representative contention.

## 9. Environment and tooling readiness

### 9.1 Test

**Not ready for mutation under this review.**

Historical configuration names `drravyyauixltoihzmwo`, but the currently connected provider view does not expose it. A future migration mission must positively identify and inspect the target before any application.

### 9.2 Production

Production identity is currently observable as `gysgzasfcjvtrgaigfyn`. Its migration version ledger currently shows all 24 canonical-era versions. This does not authorize production or remove G-6/G-7.

Production still lacks, for this readiness decision:

- effective ACL/default-privilege evidence;
- backup/PITR readiness;
- production-shaped rehearsal evidence;
- storage/provider deletion evidence where applicable;
- migration execution authorization.

### 9.3 CLI

The guarded wrapper in `scripts/supabase-cli.mjs` should be mandatory for target-mutating migration operations. A bare CLI invocation must not be accepted as the SB-MIG-1.4 execution path.

## 10. Rollback and recovery expectations

A future `SB-MIG-1.4` execution package should separate:

- **pre-cut-over rollback:** remove unused additive objects/data where safe;
- **family logical rollback:** rehearsed revert/forward-correction for M-13 before later state depends on it;
- **no-backward boundary:** M-10/M-14 and similar history semantics after governed behavior/new provenance relies on them;
- **catastrophic recovery:** backup/PITR only under a separately verified restore decision.

Every destructive/high-risk group needs a stop condition and a proof that failure leaves either the old valid state or the new valid state, never a partially authoritative hybrid.

## 11. Specialist recommendation to Mission Control

### Migration-plan activation

**Do not activate `SB-MIG-1.4` for migration creation/execution yet.**

Mission Control may use this report to authorize a finding-scoped migration-plan refinement/evidence package. At minimum, close SUPA-RDY-01 through SUPA-RDY-06 before treating the migration manifest as implementation-ready. Production execution additionally requires SUPA-RDY-08 through SUPA-RDY-11.

### Application implementation authorization

**Do not authorize SB-P-1.12 application implementation yet.**

This specialist review independently confirms the already-recorded MC-171 blockers that are outside or broader than this specialist's migration analysis:

- required CI/assurance path unresolved;
- runtime-verification environment bound to approved test backend not evidenced;
- migration mission not separately authorized;
- final builder/workstream Implementation Authorization not recorded;
- Security specialist review still required/dispositioned separately.

### What is ready

The locked authority architecture, history-containment direction, per-family cut-over strategy, privileged-operation model, guarded CLI approach and high-level migration ordering are technically coherent foundations. The remaining work is evidence closure and physical-contract refinement, not Product Truth redesign.

## 12. Scope and non-mutation confirmation

During this review:

- no SQL was created or executed;
- no migration file was created or executed;
- no Supabase database state was mutated;
- no test, provider or production environment was mutated;
- no RLS policy, grant, default privilege, role or function was changed;
- no application code was implemented;
- no Lovable action occurred;
- no delivery repository was modified;
- no implementation or migration authorization was issued;
- no Product Truth, Blueprint, EIS, Engineering Contract, Build Prompt or Verification Checklist was modified.

Only authorized repository reads, current read-only Supabase provider inspection and the two MC-171-authorized report files are in scope.

## 13. Final specialist disposition

`SB-P-1.12 SUPABASE IMPLEMENTATION READINESS — REFINEMENT AND EVIDENCE REQUIRED BEFORE MIGRATION-PLAN ACTIVATION OR APPLICATION IMPLEMENTATION AUTHORIZATION`

This is an advisory specialist finding only. Mission Control owns disposition and any subsequent authority.

**SUPABASE IMPLEMENTATION READINESS REVIEW SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
