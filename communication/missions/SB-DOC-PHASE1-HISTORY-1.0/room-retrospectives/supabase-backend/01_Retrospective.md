# Supabase Backend Architecture Institutional Retrospective

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Contributor:** Supabase Backend Architecture  
**Artifact Type:** Institutional Retrospective  
**Authority:** Founder / Smart Business Mission Control  
**Status:** `RETROSPECTIVE — DOCUMENTATION ONLY`  
**Review date:** 2026-09-13  
**Current repository baseline reviewed:** `SmartBusinessv1/smart-business` at `c76acc47f05ab82baeda54c8dbf0e3476e283ba7`  
**Implementation authority:** None  
**Database mutation authority:** None  
**Product Mission authority:** None

This retrospective preserves the backend/database judgement learned by Supabase Backend Architecture during Phase 1. It intentionally separates current provider observations, repository evidence, historical execution evidence, security architecture, and unresolved environment questions. It does not authorize any SQL, migration, repair, RLS/grant change, RPC/function deployment, Supabase configuration change, or `SB-P-1.12` work.

---

# 1. Lessons Learned

## 1.1 Environment identity must be positively established before mutation

`CURRENT — STILL VALID`

The strongest Supabase safety rule learned in Phase 1 is:

> **Never run SQL, migrations, RPC changes, policy changes, repair work, or privileged database operations against an environment that has not been positively identified.**

Before any future mutation, verify at minimum:

- Supabase project ref;
- project name;
- region;
- production/non-production classification;
- repository and branch/commit;
- remote migration state;
- intended actor;
- exact current authorization;
- rollback/backup expectations;
- any business/data preconditions.

Display names are insufficient because names can be duplicated, renamed, copied into documentation, or confused across organizations. Project ref and current provider evidence are materially stronger identifiers.

## 1.2 Current provider visibility is not complete historical topology proof

`CORRECTION / LESSON`

At this review point, the connected Supabase provider view exposes one project:

- name: `smart-business`;
- ref: `gysgzasfcjvtrgaigfyn`;
- region: `ap-south-1`;
- health: `ACTIVE_HEALTHY`;
- Postgres engine: 17;
- observed database version: `17.6.1.141`;
- current visible Supabase development branches: none.

Classification:

`CURRENT OBSERVATION — NOT COMPLETE HISTORICAL PROOF`

The connected provider view does not expose the historical isolated test project `drravyyauixltoihzmwo` today. That absence must not be rewritten into “the test project never existed.”

The durable rule is:

> **Current provider visibility is evidence of current visibility, not mathematical proof of all historical environments.**

## 1.3 The historical isolated test project definitely existed and was operationally useful

`CAPABILITY PROVEN`

Repository evidence establishes that project ref `drravyyauixltoihzmwo`, described historically as `smart-business-test`, definitely existed and was used as an isolated non-production environment.

Evidence shows it was used for, among other things:

- applying and verifying the initial Catalog schema and the exact nineteen Catalog command functions;
- discovering defects that static review did not detect;
- validating RLS, grants, executor-role behavior, tenant isolation, idempotency and D-068 behavior;
- Catalog import support validation;
- parser lease/guard regression testing;
- Inventory anonymous-privilege hardening rehearsal;
- product→inventory identity-integrity rehearsal;
- production-data-repair rehearsal before production execution;
- migration-history reconciliation for production-specific migrations that were intentionally not executable against test data.

Repository evidence also records repeated explicit checks that production `gysgzasfcjvtrgaigfyn` was not the linked/targeted project during test-only operations.

The historical project was therefore not merely a planning concept; it was a real isolated execution/rehearsal environment.

## 1.4 Present lifecycle of the historical test project is unresolved

`UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION`

Current provider visibility exposes only production. No current Supabase development branch is visible. Historical evidence proves `drravyyauixltoihzmwo` existed, but current evidence available to this review does **not** prove whether that project is now:

- deleted;
- paused;
- inaccessible to the currently connected account;
- owned by a different organization/account;
- retired;
- or still present but outside current provider visibility.

Do not claim either “there is definitely still a current test project” or “there was never a test project.”

Future work needing a non-production database must verify the environment at that time rather than inheriting a historical assumption.

## 1.5 Migration files are history and reproducibility inputs, not reusable permission

`CURRENT — STILL VALID`

`docs/migration/README.md` correctly locks a default-deny migration authority model:

> **Migration presence does not create execution authority.**

A migration file, runbook, old completion report, historical approval, or previously successful rehearsal does not authorize repetition.

A future migration execution requires a new, current, explicit mission naming the exact package, environment, actor, repository/branch, preconditions, validation, rollback and reporting workflow.

This rule became critical after Phase 1 accumulated migrations that were:

- historically applied;
- test-only rehearsed;
- production-applied;
- environment-specific;
- superseded;
- or deliberately non-executable pending separate authority.

## 1.6 Remote migration truth must be verified independently from repository file presence

`CORRECTION / LESSON`

Repository migrations and remote migration ledger are related but not identical truths.

At this review point, the production remote migration ledger visibly includes versions through:

- `20260819120000_sb_p_1_11_gc_38r_parser_support_schema`;
- `20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix`;
- `20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening`;
- `20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard`;
- `20260902140000_sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair`;
- `20260902150000_sb_ops_prod_sync_1_0_instr1_8_phase_b_inventory_item_uniqueness`.

That remote observation is stronger evidence of current applied migration state than merely seeing corresponding files under `supabase/migrations/`.

Future operators must compare repository and remote migration state before any consequential migration decision.

## 1.7 Environment-specific migrations require exact precondition discipline

`CORRECTION / LESSON`

Phase 1 demonstrated that a migration can be intentionally valid only for one exact production data state.

The production-specific Mango/Milma Milk repair established the pattern:

- exact production identities and data state can be legitimate preconditions;
- those preconditions should correctly fail in unrelated/test data;
- the migration must not be weakened merely to make it execute in test;
- rehearsal may require reproducing the relevant shape safely rather than changing the production migration;
- a test migration ledger may require a narrow bookkeeping reconciliation when a production-only migration is intentionally never executed there.

Migration-history repair is not a general license to mark arbitrary migrations applied without execution. It requires explicit authorization and proof that the target environment lacks the production identities/data state the migration was designed to affect.

## 1.8 Behavioral database testing found defects static review missed

`CAPABILITY PROVEN`

The initial Catalog backend implementation exposed a major lesson: schema/RPC review that looked coherent on paper still failed under a real authenticated caller until the migrations were applied to the isolated test project.

Live behavioral verification surfaced issues including:

- migration ordering around executor roles and schema grants;
- ownership-transfer permission requirements;
- Supabase/Postgres role-membership behavior;
- custom-role inability to rely on `auth.uid()` through the `auth` schema in the assumed way;
- missing executor access to `public.businesses`;
- missing access to `extensions.digest()`;
- missing Catalog link-executor access to Inventory tables.

These were not reasons to abandon narrow-role architecture. They were proof that privileged function architecture must be exercised with realistic caller identity and role context.

The durable rule is:

> **Static SQL review is necessary but insufficient for authorization-sensitive backend work.**

## 1.9 RLS is a first-class backend boundary; UI hiding is not authorization

`CURRENT — STILL VALID`

> **UI restrictions are not authorization.**

Phase 1 backend work repeatedly required explicit reasoning about:

- business isolation;
- authenticated identity;
- Owner/Manager/Employee authority;
- cross-business denial;
- SELECT/INSERT/UPDATE/DELETE policy behavior;
- RPC/function interaction with RLS;
- privileged-role bypass;
- denial-path verification.

At the current provider observation point, every visible public application/support table reports RLS enabled, including Catalog, Inventory, import-support and parser-support tables.

That observation does not prove every policy/grant is correct. RLS enabled is a necessary control, not a complete security verdict.

## 1.10 Service-role is a privileged bypass, not an ordinary application identity

`CURRENT — STILL VALID`

The server Supabase client explicitly uses the service-role key and bypasses RLS. Phase 1 repeatedly confirmed the implications:

- service-role credentials must remain backend-only;
- they must never become browser/client capability;
- privileged support-state bookkeeping must be intentionally narrow;
- tenant identity must be derived authoritatively rather than trusted from merchant-controlled input;
- service-role table grants matter because RLS does not protect against a bypass role;
- privileged operations require current mission authority even if the key is technically available.

The parser lease review made this concrete: because repository default privileges could grant broad direct table authority to `service_role`, the accepted design had to explicitly neutralize those privileges and restore only the required narrow direct read surface before helper execution/cutover.

## 1.11 Default privileges can silently undo least-privilege intent

`MISTAKE / FAILURE MODE`

The migration `20260727000000_reconcile_default_grants.sql` made a broad baseline explicit by granting future `public` tables/functions authority to `anon`, `authenticated`, and `service_role` through `ALTER DEFAULT PRIVILEGES`.

Later work repeatedly had to neutralize those inherited grants on security-sensitive objects.

Durable lesson:

> **Never assume a newly created table/function starts with a clean privilege slate. Inspect repository default privileges and resulting effective ACLs.**

This matters for:

- browser roles;
- service-role direct DML;
- RPC/function EXECUTE;
- parser support state;
- import-support state;
- future Product & Price Master migrations.

## 1.12 Anonymous/default grant concerns were real and only partially closed by domain-specific hardening

`CURRENT OBSERVATION — NOT COMPLETE HISTORICAL PROOF`

Historical review identified broad anonymous/default grants affecting application tables, including `businesses`, `transactions`, `transaction_correction_events`, and Inventory-domain objects.

The later Inventory hardening migration removed `anon` access for the three Inventory tables and Inventory functions in its authorized scope and changed the `postgres` default-privilege baseline for future Inventory-related safety. Its own evidence explicitly disclosed that equivalent concerns for `businesses`, `transactions`, `transaction_correction_events`, and some `supabase_admin`-origin defaults were outside that mission.

Current provider table listing confirms RLS is enabled, but this retrospective did not execute SQL to inspect current table grants or default ACLs. Therefore broad/default grant status outside the already-evidenced corrections remains a verification question, not something this room should silently mark resolved.

## 1.13 Security advisors are signals requiring architectural interpretation

`CURRENT OBSERVATION — NOT COMPLETE HISTORICAL PROOF`

Current Supabase security advisor output reports:

- `parser_preview_guards` and `parser_upload_leases` have RLS enabled with no RLS policies;
- nineteen Catalog `SECURITY DEFINER` functions are executable by `authenticated`.

These observations must not be auto-classified as defects without context.

The parser support tables were intentionally designed as server-only transport/security support state, with browser access removed and service-role/helper access controlling mutation. A no-policy RLS posture can therefore be consistent with a server-only model.

The nineteen Catalog functions correspond to the deliberately locked nineteen public Catalog commands. Their authenticated EXECUTE exposure is part of the Phase 1 command surface and must be evaluated together with their `SECURITY DEFINER` ownership, tenant/business checks, RLS/executor-role design and Product Truth rules.

The lesson is:

> **Provider advisor output is valuable evidence, but architecture-aware review decides whether an advisory is expected, risky, or incorrect.**

## 1.14 A privileged RPC is a trust boundary, not a convenience function

`CURRENT — STILL VALID`

> **A privileged RPC is a trust boundary, not merely a convenience function.**

Durable RPC/`SECURITY DEFINER` rules learned in Phase 1 include:

- pin a safe `search_path`;
- derive actor identity from trusted authenticated/session context;
- validate business ownership/isolation inside the privileged boundary;
- never trust caller-supplied business authority merely because the caller is authenticated;
- constrain function execution grants deliberately;
- distinguish `authenticated`, `anon`, service-role and narrow executor roles;
- make state changes deterministic and auditable;
- verify rejected/denied paths, not only happy-path results;
- treat function ownership and role membership as part of the security architecture.

## 1.15 Tenant binding should be structural where possible

`CAPABILITY PROVEN`

Phase 1 repeatedly strengthened business isolation with database-level structure rather than relying exclusively on application discipline.

Examples include:

- `business_id` on business-owned records;
- composite tenant foreign keys;
- business-scoped uniqueness;
- server-derived ownership resolution;
- cross-business denial testing;
- product→inventory one-to-one integrity;
- support-state bindings that keep business identity authoritative.

A notable correction was the composite-FK ordering issue: the existing Inventory uniqueness key is `(id, business_id)`, so references into Inventory must match that order rather than assuming `(business_id, id)`. Catalog’s own composite identity ordering can differ. Future EIS/migration authors must inspect the actual referenced unique key before designing a composite FK.

## 1.16 Product Truth authority and support-state authority must stay separate

`CURRENT — STILL VALID`

Catalog import bookkeeping and parser lease/guard tables are operational support state, not Product Truth.

The same distinction must remain true for future systems:

- support state can coordinate retries, leases, parsing, validation, progress and evidence;
- it cannot silently become an alternate Product Truth write path;
- parser success does not itself create Product Truth;
- import-support state does not authorize Catalog mutation;
- actual Product Truth changes remain behind the existing Founder Workflow and approved command boundaries until superseded by a separately authorized Product Mission.

## 1.17 Catalog / Inventory truth separation is a durable backend model

`CURRENT — STILL VALID`

Backend evolution established a useful separation:

- Product & Price Master / Catalog owns reusable commercial/item identity and price/tax/reference-cost history;
- Inventory owns quantity/state;
- Transactions are events;
- product→inventory links join identities without duplicating stock truth.

Historical bugs around product→inventory reuse proved why duplicate identity models are dangerous. Phase A server-side reuse guards and the later schema-level one-to-one constraint strengthened the intended separation.

Future `SB-P-1.12` work should preserve useful existing Catalog engineering while deliberately evolving it into the approved Product & Price Master direction. This retrospective does not authorize that implementation.

## 1.18 Database truth, repository truth and application truth are distinct

`CURRENT — STILL VALID`

- UI/application state can be stale or misleading.
- Repository SQL can differ from applied remote state.
- Migration files do not prove remote migration state.
- Database constraints can be stronger than application validation.
- A deployed function in source does not prove it is deployed remotely.
- A healthy provider project does not prove authorization correctness.

Production claims require both repository evidence and directly observed remote/runtime evidence appropriate to the claim.

---

# 2. Capabilities Acquired

## 2.1 Database architecture capability

`CAPABILITY PROVEN`

Team LIPS has demonstrated Supabase/Postgres capability in:

- relational schema design and review;
- versioned migration design;
- constraints and indexes;
- foreign keys and composite tenant binding;
- business-scoped uniqueness;
- append-only/audit event patterns;
- idempotency models;
- controlled data repair;
- support-state schema design;
- Product/Inventory identity integrity;
- migration-order analysis;
- remote migration-ledger verification.

## 2.2 Security and isolation capability

`CAPABILITY PROVEN`

Demonstrated capability includes:

- RLS policy design/review;
- business/tenant isolation analysis;
- cross-business denial testing;
- grants/default-privilege review;
- privileged RPC/`SECURITY DEFINER` analysis;
- service-role boundary review;
- narrow executor-role architecture;
- browser-role exclusion;
- explicit effective-ACL reasoning;
- denial-path verification.

## 2.3 Environment and migration capability

`CAPABILITY PROVEN`

The project has demonstrated:

- positive production/test project-ref verification;
- isolated migration rehearsal;
- migration-history comparison/reconciliation;
- environment-specific migration safety;
- production-only data-repair preconditions;
- safe test-ledger bookkeeping repair under explicit authority;
- linked CLI target verification;
- production untouched assertions backed by target checks;
- migration status classification through `docs/migration/README.md`.

## 2.4 Backend verification capability

`CAPABILITY PROVEN`

Proven verification practices include:

- provider project inspection;
- remote migration listing;
- public table/RLS inspection;
- Edge Function listing;
- Supabase security-advisor review;
- real authenticated RPC behavior testing in non-production;
- privilege/grant verification through authorized database inspection in historical missions;
- concurrency/idempotency tests;
- cross-business negative tests;
- post-migration structural and behavioral validation.

## 2.5 Governance-aware backend capability

`CAPABILITY PROVEN`

Supabase Backend Architecture learned to operate under explicit authority boundaries:

- no execution from file presence;
- stop on environment ambiguity;
- no production mutation under test authority;
- separate design review from implementation authority;
- preserve historical PASS evidence without reusing it as permission;
- use narrow branches/PRs/evidence packages;
- return durable backend findings to Mission Control;
- do not self-approve or self-merge.

## 2.6 Capability not yet claimed

`CURRENT — STILL VALID`

This retrospective does **not** claim that all future Product & Price Master, mature financial, HR, ordering, supplier, customer, reporting, analytics, WhatsApp, or AI backend capability is implemented merely because foundations exist.

Planned product functionality is not an acquired backend capability until implementation and verification evidence exists.

---

# 3. Tools We Have

## 3A. Tools / Infrastructure Actually Used or Proven by Supabase Backend Architecture

### Supabase platform

`CAPABILITY PROVEN`

Actual use/proof:

- production project operation;
- isolated historical test-project use;
- project/environment inspection;
- migrations;
- RLS;
- RPC/functions;
- provider advisors;
- migration ledger;
- project branches/provider topology inspection.

Boundary:

- provider visibility is account/organization-scoped;
- provider health does not prove application correctness or security;
- access does not create mutation authority.

### PostgreSQL

`CAPABILITY PROVEN`

Actual use/proof:

- constraints, FKs, indexes, roles, grants, default privileges, RLS, functions, transactions, advisory locks, triggers and migration semantics.

Boundary:

- privileged database behavior must be verified under realistic role/caller context;
- platform-specific role/ownership behavior can differ from naive local assumptions.

### Supabase CLI / guarded CLI workflows

`CAPABILITY PROVEN`

Actual use/proof:

- linking/target verification;
- migration listing;
- non-production `db push` rehearsal;
- controlled migration-history repair in a separately authorized historical mission.

Boundary:

- never rely on a stale linked target;
- use guarded wrappers/positive project-ref checks;
- a CLI command is not authorization.

### SQL Editor / direct database inspection

`CAPABILITY PROVEN — HISTORICAL`

Used historically for migration/security verification and evidence collection where explicitly authorized.

Boundary:

- manual SQL that changes state should not become an undocumented side channel;
- read-only inspection still requires correct environment identity and scope.

### Versioned migrations under `supabase/migrations/`

`CAPABILITY PROVEN`

Role:

- durable schema history;
- reproducibility;
- reviewable database change packages.

Boundary:

- presence is not execution authority;
- environment-specific migrations require special treatment.

### RLS/policy and RPC/function tooling

`CAPABILITY PROVEN`

Role:

- business isolation;
- narrow command boundaries;
- server-side invariants;
- privileged operation control.

Boundary:

- RLS enablement alone is not sufficient;
- privileged RPCs require caller/business validation and grant review.

### GitHub

`CURRENT — STILL VALID`

Role:

- canonical repository;
- protected-main workflow;
- migration history;
- evidence packages;
- institutional memory;
- PR/CI review.

Boundary:

- repository state does not prove remote database state;
- merged documentation does not authorize mutation.

### Supabase provider security advisor

`CAPABILITY PROVEN`

Role:

- current security signals around RLS/policy and `SECURITY DEFINER` exposure.

Boundary:

- advisories require architecture-aware interpretation;
- an advisor warning is not automatically a defect or authorization to “fix” it.

### Local automated/integration testing

`CAPABILITY PROVEN`

Role:

- migration/RPC regression tests;
- cross-business tests;
- concurrency/idempotency checks;
- parser lease/guard verification;
- Catalog/Inventory integrity tests.

Boundary:

- local success does not prove remote state;
- test credentials/data must remain isolated and purpose-limited.

## 3B. Approved / Planned Providers or Integrations

`CURRENT — STILL VALID`

AWS/Lambda parser, Cloudflare/runtime, OpenAI and Meta WhatsApp belong to broader Smart Business architecture, but they should not be misclassified as Supabase Backend tools merely because Supabase integrates or exchanges data with them.

For future retrospectives and build work, distinguish:

- provider exists;
- integration code exists;
- Supabase support state exists;
- runtime integration was exercised;
- production integration is current;
- future architecture is only planned.

Current Supabase provider inspection shows **no visible Supabase Edge Functions**. That is a current observation only; it does not erase historical server-side/Cloudflare/AWS runtime work.

---

# 4. Suggested Tools to Have

All items in this section are recommendations, not approved architecture commitments.

## 4.1 Automated environment identity verifier

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `BUILD/ADOPT NOW`

Purpose:

- print/verify project ref, name, region, linked target, repository commit and production/non-production classification before any migration/repair command.

Why:

- environment confusion is a demonstrated high-impact failure mode.

Risk:

- verifier output must itself come from trusted provider/CLI sources and must not silently choose a target.

## 4.2 Migration drift checker

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `BUILD/ADOPT NOW`

Purpose:

- compare repository migration versions with remote `schema_migrations` state and flag missing/extra/divergent versions before execution.

Why:

- repo files and remote history are distinct truths.

## 4.3 Grant/default-privilege scanner

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `BUILD/ADOPT NOW`

Purpose:

- inspect effective table/function privileges for `PUBLIC`, `anon`, `authenticated`, `service_role` and narrow executor roles;
- detect inherited/default privilege surprises.

Why:

- default privileges repeatedly created security review work.

## 4.4 RLS denial-path test harness

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `BUILD/ADOPT NOW`

Purpose:

- reusable fixtures for Owner/Manager/Employee/cross-business/anon denial cases;
- explicit SELECT/INSERT/UPDATE/DELETE/RPC negative tests.

Why:

- allowed-path tests alone do not prove isolation.

## 4.5 Privileged RPC scanner

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `BUILD/ADOPT LATER`

Purpose:

- inventory `SECURITY DEFINER` functions, owners, search paths, EXECUTE grants, caller-identity logic, touched tables and tenant checks.

Why:

- privileged RPCs are trust boundaries and provider advisor output is too generic to replace architecture-aware review.

## 4.6 Production-vs-test schema comparison

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `BUILD/ADOPT LATER`

Purpose:

- compare schema, constraints, policies, grants, functions and migration ledgers when a future non-production environment is provisioned.

Why:

- historical test/project drift required repeated manual reconciliation.

## 4.7 Migration dry-run automation

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `BUILD/ADOPT LATER`

Purpose:

- create reproducible non-production migration rehearsal with structural/behavioral verification and evidence packaging.

Boundary:

- dry-run tooling must never weaken environment-specific production migration guards.

## 4.8 Backup/restore verification

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `BUILD/ADOPT LATER`

Purpose:

- prove restore paths before high-risk production migrations rather than merely assuming backups exist.

## 4.9 Database observability / slow-query monitoring

`RECOMMENDATION — NOT YET ADOPTED`

Suggested classification: `OPTIONAL / BUILD LATER`

Purpose:

- operational insight into latency, lock contention, failed RPCs and query hotspots as merchant load grows.

---

# 5. Suggestions to Improve This Project

## 5.1 Make environment identity a machine-checkable precondition

Every consequential database runbook should begin with a standard identity block that fails closed if project ref, classification, repository commit or migration state does not match the mission.

## 5.2 Make migration preconditions explicit and reviewable

Production repair/data migrations should state the exact expected identities/data state and abort if reality differs.

## 5.3 Treat denial cases as acceptance criteria

For RLS, grants and RPCs, acceptance packages should prove:

- authorized access works;
- unauthorized access fails;
- cross-business access fails;
- direct bypass attempts fail where helper-only mutation is intended.

## 5.4 Periodically audit default grants and effective ACLs

Do not wait for a new subsystem to rediscover broad inherited privileges.

A scheduled or release-gate audit should compare expected and effective privileges for browser roles, service-role and privileged functions.

## 5.5 Maintain explicit privileged-RPC inventory

For every privileged function record:

- owner;
- security mode;
- search path;
- executable roles;
- caller identity source;
- business/tenant checks;
- Product Truth/support-state classification;
- idempotency/audit behavior.

## 5.6 Keep service-role usage narrow and server-side only

Every service-role call site should have a documented reason it cannot use caller-JWT/RLS-scoped access instead.

## 5.7 Preserve production/test migration ledgers independently

If a future test/staging environment exists, maintain explicit environment-specific migration state and never pretend production-only repairs executed there when they did not.

## 5.8 Record remote-state evidence after consequential changes

Completion reports should include post-change evidence of:

- migration version;
- constraints/policies/grants relevant to the mission;
- behavioral checks;
- target project ref;
- production/test classification.

## 5.9 Avoid undocumented manual SQL

Consequential SQL should be captured in version-controlled migrations or explicit audited repair packages unless a narrowly authorized incident procedure says otherwise.

## 5.10 Reduce Founder operational load without weakening authority

Backend tooling should make target identity, migration state, risk and evidence obvious so the Founder can approve consequential decisions without acting as the database operator or manual message bus.

---

# 6. What Future Rooms Must Know Before Touching This Area

1. **Production identity:** current visible production is `smart-business`, ref `gysgzasfcjvtrgaigfyn`, region `ap-south-1`, `ACTIVE_HEALTHY`, Postgres 17 / observed `17.6.1.141`.
2. **Current topology observation:** one visible Supabase project; no visible Supabase development branches.
3. **Historical test truth:** `drravyyauixltoihzmwo` definitely existed as an isolated test/rehearsal project; its present lifecycle is unresolved.
4. **Never mutate by display name alone.** Verify project ref and environment classification.
5. **Migration presence is not authority.** Read `docs/migration/README.md` before any migration action.
6. **Compare remote migration state to repository state** before execution.
7. **Do not replay production-specific data migrations in test** merely to align ledgers.
8. **RLS enabled is not a full security verdict.** Inspect policies, grants and denial paths.
9. **Default privileges matter.** A new object may inherit broad authority automatically.
10. **Service-role bypasses RLS.** Keep it server-side and least-privilege.
11. **Privileged RPCs are trust boundaries.** Validate caller identity, business ownership, search path and EXECUTE grants.
12. **Business isolation should be structural where possible.** Inspect actual FK/unique-key ordering before designing composite FKs.
13. **Catalog/Product identity and Inventory quantity/state remain separate truths.** Do not duplicate stock truth.
14. **Support state is not Product Truth.** Import/parser bookkeeping cannot become an alternate mutation authority.
15. **Exactly nineteen public Catalog commands remain part of the preserved Phase 1 architecture until a separately authorized Product Mission changes that direction.**
16. **Current security advisor warnings need architecture-aware interpretation, not automatic remediation.**
17. **Repository SQL does not prove remote state.** Use provider/runtime evidence for current claims.
18. **No `SB-P-1.12` work is authorized by this retrospective.**

---

# 7. Do-Not-Repeat Register

- Do not run SQL against an assumed project.
- Do not trust a project display name as sufficient identity.
- Do not infer remote migration state from files under `supabase/migrations/`.
- Do not replay a historical migration because its file exists.
- Do not treat a completed mission as reusable execution permission.
- Do not weaken production-specific migration preconditions to make test pass.
- Do not mark a migration applied without a narrow authorized reason and environment proof.
- Do not rely on UI hiding instead of RLS/backend authorization.
- Do not assume RLS enabled means grants/policies are safe.
- Do not grant broad `anon` privileges for convenience.
- Do not expose service-role credentials client-side.
- Do not assume service-role is protected by RLS.
- Do not use `SECURITY DEFINER` without safe search path, caller validation and business isolation.
- Do not assume `auth.uid()` or schema access behaves identically under custom roles without live verification.
- Do not design composite tenant FKs without checking referenced unique-key column order.
- Do not allow cross-business access for convenience or testing.
- Do not destructively rewrite financial/audit history.
- Do not duplicate Product and Inventory identity/quantity models.
- Do not allow parser/import support state to become Product Truth.
- Do not assume provider advisor output is a complete architecture verdict.
- Do not assume an Edge Function/source file exists remotely because code exists in Git.
- Do not mutate production under historical mission authority.
- Do not self-approve or self-merge backend/security work.
- Do not erase the historical test project merely because it is not visible now.
- Do not claim a current test/staging project exists without current provider evidence.

---

# 8. Current Truth vs Historical Truth

| Area | Historical state | Current truth | Capability to preserve | Assumption that must not return |
|---|---|---|---|---|
| Supabase topology | Production plus a real isolated `smart-business-test` project (`drravyyauixltoihzmwo`) were used during Phase 1 | Current provider view exposes only production `gysgzasfcjvtrgaigfyn`; no dev branches visible; historical test present lifecycle unresolved | Positive environment identification and isolated rehearsal | “Single visible project proves there was never a test project” |
| Migration authority | Individual missions authorized specific test/production migration actions | No migration is executable by default; `docs/migration/README.md` is default-deny | Versioned migrations + explicit mission authority | “File exists, therefore run it” |
| Migration truth | Repo files were often the preparation surface | Production remote migration ledger must be inspected directly | Repo/remote comparison | “Repo presence equals applied state” |
| Production repair | Narrow data fixes were sometimes required | Production-specific repair can be legitimate if preconditioned, audited and separately authorized | Exact preconditions + rehearsal + audit | “Make the SQL generic so it runs everywhere” |
| Test migration ledger | Production-only migration correctly absent from test execution | Narrow bookkeeping repair may reconcile history without running production data SQL, but only under explicit authority | Environment-specific ledger reconciliation | “Mark applied whenever db push is inconvenient” |
| Authorization model | UI/route assumptions sometimes carried too much weight | RLS/grants/RPC checks are first-class authorization boundaries | Denial-path verification | “Hidden UI means protected data” |
| Default grants | Broad baseline recreated Supabase-like grants automatically | Sensitive new objects must explicitly neutralize unwanted inherited privileges | Effective ACL inspection | “A GRANT SELECT narrows a previous ALL grant” |
| Service role | Used for server-side privileged bookkeeping | It bypasses RLS and must be narrow, backend-only and mission-authorized | Server-only privileged access | “Service-role is just another authenticated client” |
| Privileged RPCs | Initially treated mainly as implementation functions | They are trust boundaries requiring ownership/caller/search-path/grant review | Narrow command/RPC architecture | “SECURITY DEFINER is only a convenience” |
| Catalog backend | Phase 1 Catalog implemented exact nineteen-command architecture | Useful engineering should be preserved and deliberately evolved toward Product & Price Master under authorized `SB-P-1.12`; this retrospective does not implement it | Command, audit, idempotency and identity patterns | “Throw away Catalog and rebuild duplicate identity models” |
| Product→Inventory link | Application-level link behavior initially lacked a complete one-to-one guarantee | Reuse guard and schema-level uniqueness now form stronger identity integrity evidence | One-to-one identity discipline | “Two Catalog products can silently share one dedicated Inventory identity” |
| Parser support state | Parser lease/guard architecture evolved through multiple corrections | Current production tables exist, RLS enabled, and remain support state only; provider advisor observations require architectural interpretation | Lease/guard/idempotency/fail-closed patterns | “Parser success or lease state is Product Truth” |
| Edge/runtime | Historical server/runtime functions existed across multiple platforms | Current Supabase provider lists no Supabase Edge Functions; that does not erase Cloudflare/AWS/runtime history | Runtime-state verification | “Code present means deployed/current” |
| Provider health | Healthy project state was useful operational evidence | `ACTIVE_HEALTHY` proves provider health, not authorization correctness | Health inspection | “Green provider status means security complete” |

---

# 9. Evidence Pointers

Prefer merged durable evidence.

## 9.1 Current governance / migration authority

- `docs/migration/README.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `communication/AI_Communication_and_Handover_Protocol.md`
- `mission-control/mission_memory.md`

## 9.2 Current / historical Supabase schema evidence

- `supabase/migrations/`
- `supabase/verification/`
- `src/integrations/supabase/client.server.ts`
- `src/integrations/supabase/auth-middleware.ts`

## 9.3 Catalog / Product / Inventory backend evidence

- `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql`
- `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `supabase/migrations/20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql`
- `supabase/migrations/20260902140000_sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair.sql`
- `supabase/migrations/20260902150000_sb_ops_prod_sync_1_0_instr1_8_phase_b_inventory_item_uniqueness.sql`
- `communication/evidence/SB-OPS-PROD-SYNC-1.0-instr1-6/phase-b-design-and-proof.md`

## 9.4 Security / grants / parser support evidence

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`
- `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`
- `supabase/migrations/20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`
- `communication/live/report1.110.md` through `communication/live/report1.123.md` as historical review/correction evidence where needed
- Security & Permissions evidence packages under `communication/evidence/`

## 9.5 Environment / production-sync evidence

- `communication/missions/SB-OPS-PROD-SYNC-1.0/`
- `docs/migration/README.md`
- historical reports/commits for the isolated test project `drravyyauixltoihzmwo`
- production project ref `gysgzasfcjvtrgaigfyn`

## 9.6 Phase 1 institutional continuity inputs

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/00_Mission_Control_Institutional_Learning_Capture_Protocol.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/01_Mission_Control_Retrospective_Dispatch_Pack.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/founder-room/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/research-intelligence/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-engineering/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/infrastructure-operations/01_Retrospective.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md`

## 9.7 Current provider observations captured during this retrospective

At review time, non-mutating Supabase provider inspection observed:

- one visible project: `smart-business` / `gysgzasfcjvtrgaigfyn` / `ap-south-1` / `ACTIVE_HEALTHY`;
- Postgres 17 / observed version `17.6.1.141`;
- no visible Supabase development branches;
- production migration ledger through the September 2 identity-integrity migrations;
- visible public application/support tables reporting RLS enabled;
- no visible Supabase Edge Functions;
- security advisor findings including no-policy RLS notices for the two parser support tables and authenticated-executable `SECURITY DEFINER` notices for the nineteen Catalog command functions.

These are current observations, not complete historical proof and not automatic remediation authority.

---

# 10. Open Questions / Residual Risks

## 10.1 Historical test project present lifecycle

`UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION`

**Owner:** Infrastructure Operations / Supabase Backend Architecture / Mission Control

Project `drravyyauixltoihzmwo` definitely existed and was used. Current connected provider visibility does not show it. Its present lifecycle is not proven.

## 10.2 No currently proven staging/test environment

`CURRENT OBSERVATION — NOT COMPLETE HISTORICAL PROOF`

**Owner:** Mission Control / Infrastructure Operations / Supabase Backend Architecture

No current dev branches are visible and no separate test/staging project is visible through the connected provider. Future Product Missions needing safe rehearsal must positively verify or provision an authorized non-production target rather than reuse historical assumptions.

## 10.3 Current anonymous/default grant posture outside proven hardening scope

`UNRESOLVED`

**Owner:** Security & Permissions Architecture / Supabase Backend Architecture

Inventory anonymous-access hardening is historically evidenced, but current effective grants/default ACLs for all other application tables/functions were not directly queried during this no-SQL retrospective. The issue must not be marked globally resolved without current effective-ACL evidence.

## 10.4 Privileged RPC / `SECURITY DEFINER` review continuity

`CURRENT OBSERVATION — REQUIRES CONTEXTUAL SECURITY REVIEW`

**Owner:** Security & Permissions Architecture / Supabase Backend Architecture

Current provider advisor output flags nineteen authenticated-executable Catalog `SECURITY DEFINER` functions. Those correspond to the locked public Catalog command surface and may be intentional, but future security review must continue to validate owner role, search path, business isolation, caller identity and grants rather than dismiss or blindly remediate the advisory.

## 10.5 RLS denial-path coverage is uneven across the whole product

`UNRESOLVED`

**Owner:** Security & Permissions Architecture / Claude Engineering / Supabase Backend Architecture

Strong negative-path testing exists for several Catalog/Inventory/import/parser missions, but there is not yet one uniform reusable denial-path harness covering all business domains and future roles.

## 10.6 Service-role usage should remain reviewable

`UNRESOLVED`

**Owner:** Security & Permissions Architecture / Claude Engineering / Supabase Backend Architecture

The server client intentionally bypasses RLS. Future code should keep an explicit inventory of service-role call sites and prove why each privileged write cannot use narrower caller-scoped authority.

## 10.7 Migration/repository/runtime divergence remains a structural risk

`CURRENT — STILL VALID RISK`

**Owner:** Infrastructure Operations / Supabase Backend Architecture / Mission Control

The project has improved migration-state tracking, but any future environment can drift. Repository files, migration ledger, schema, grants/policies and deployed application expectations must be reconciled before consequential changes.

## 10.8 Product & Price Master rebase/evolution complexity

`UNRESOLVED — FUTURE AUTHORIZED PRODUCT MISSION`

**Owner:** Future authorized `SB-P-1.12` / Mission Control / Claude Engineering / Supabase Backend Architecture

Existing Catalog engineering contains valuable command, audit, idempotency, identity and import work. Future Product & Price Master implementation should evolve it deliberately rather than duplicate or destructively replace proven foundations. This retrospective grants no implementation authority.

## 10.9 Supabase Edge Function deployment-state ambiguity

`CURRENT OBSERVATION — NOT COMPLETE HISTORICAL PROOF`

**Owner:** Infrastructure Operations / Supabase Backend Architecture

The current provider lists no Supabase Edge Functions. Historical server/runtime capability also existed in Cloudflare/AWS/application server paths. Future operators must verify the platform actually responsible for a function before inferring deployment state from repository folders or old reports.

---

## Retrospective close

The durable Supabase Backend Architecture judgement from Phase 1 is not “be cautious with SQL” in the abstract. It is a concrete operating model:

> **Identify the exact environment. Verify authority. Compare repository and remote state. Rehearse consequential changes in an isolated environment when authorized. Treat RLS, grants, default privileges, service-role and privileged RPCs as security architecture. Preserve tenant isolation structurally. Prove denial paths. Keep support state separate from Product Truth. Record evidence durably. Never reuse historical permission.**

This document is institutional memory only. It creates no migration, security, product, runtime or production authority.