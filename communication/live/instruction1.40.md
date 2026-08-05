# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-IMPL-1 — CONTROLLED INITIAL PHASE 1 IMPLEMENTATION AUTHORIZATION

**Mission ID:** `SB-P-1.11-IMPL-1`

**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`

**Mission Status:** `AUTHORIZED AFTER HUMAN MERGE`

**Authorized By:** Mission Control on Founder instruction

**Executing Rooms:** Lovable Builder / Claude Engineering, with Supabase Backend Architecture and Security & Permissions Architecture verification support

**Build Mode Authority:** LIMITED TO THIS INSTRUCTION

**Publishing Authority:** NONE

**Deployment Authority:** NONE

---

## 1. Mission Objective

Implement the approved Smart Business SB-P-1.11 Initial Phase 1 backend contract in a controlled repository-first build.

The mission is limited to:

- the approved initial Product Catalog & Pricing database foundation;
- exactly nineteen public catalog commands;
- exactly eleven initial Phase 1 catalog tables;
- Owner-only dashboard authority through `businesses.owner_id`;
- command-only writes;
- business isolation;
- least-privilege executor roles and RLS;
- deterministic reads, search, idempotency, auditability, and D-068 preview confirmation;
- migration and verification evidence.

This mission does not authorize frontend feature implementation, publication, deployment, or production data changes.

---

## 2. Binding Implementation Authority

Implementation must follow this combined authority without deviation:

1. the regenerated Plan Mode artifact titled:
   `SB-P-1.11 Initial Phase 1 — Regenerated Corrected Executable Engineering Contract`;
2. `communication/live/report1.37.md`, which overrides every conflicting or uncorrected implementation detail in that Plan Mode artifact;
3. the locked SB-P-1.11 Product Blueprint and accepted Product Truth;
4. the existing repository architecture and migration conventions.

Where the regenerated artifact conflicts with `report1.37.md`, `report1.37.md` controls.

The unamended Plan Mode artifact must not be implemented by itself.

No builder may reinterpret, reopen, or expand the accepted correction package.

---

## 3. Final Locked Initial Phase 1 Boundary

### 3.1 Public command surface

Implement exactly these nineteen public functions and no public overloads:

1. `create_catalog_product`
2. `update_catalog_product_identity`
3. `update_catalog_product_unit`
4. `create_catalog_category`
5. `archive_catalog_category`
6. `archive_catalog_product`
7. `reactivate_catalog_product`
8. `delete_catalog_product`
9. `record_catalog_selling_price_change`
10. `record_catalog_tax_change`
11. `update_business_tax_settings`
12. `record_catalog_reference_cost_change`
13. `preview_catalog_inventory_link_change`
14. `assign_or_replace_catalog_inventory_link`
15. `remove_catalog_inventory_link`
16. `get_catalog_command_outcome`
17. `catalog_products_search`
18. `catalog_product_read`
19. `catalog_products_list_batch`

Use the exact final signatures in `communication/live/report1.37.md` Section 5.

No twentieth command is authorized.

### 3.2 Initial table surface

Create exactly these eleven catalog tables:

1. `catalog_products`
2. `catalog_categories`
3. `catalog_selling_price_events`
4. `catalog_tax_events`
5. `business_tax_settings`
6. `catalog_reference_cost_events`
7. `catalog_link_preview_tokens`
8. `catalog_product_link_events`
9. `catalog_audit_events`
10. `catalog_deletion_records`
11. `catalog_write_idempotency_keys`

Do not create `catalog_file_references`.

Do not create `catalog_products.image_ref`.

Product images remain Build Later.

### 3.3 Executor roles

Create exactly seven `NOLOGIN` function-owner roles:

- `catalog_identity_executor`
- `catalog_lifecycle_executor`
- `catalog_pricing_executor`
- `catalog_tax_executor`
- `catalog_cost_executor`
- `catalog_link_executor`
- `catalog_read_executor`

Use the command ownership, grants, ownership, helper access, and prohibited privileges in `report1.37.md`.

---

## 4. Authorized Work

The builder may:

1. create one dedicated implementation branch from current `main` after this instruction is merged;
2. inspect the current repository and Supabase schema before writing;
3. create the minimum migration file or files required by repository convention;
4. create internal schemas, stored columns, types, helpers, triggers, indexes, roles, grants, RLS policies, and nineteen functions required by the accepted contract;
5. create repository-local verification SQL or automated tests where existing project conventions support them;
6. regenerate Supabase database types only when required by the implemented RPC surface;
7. update documentation only where necessary to identify the implemented migration and verification evidence;
8. prepare a completion report for specialist and Mission Control review.

All work must remain on the mission branch until human review and merge.

---

## 5. Explicitly Unauthorized Work

Do not:

- modify Product Truth;
- reopen Founder decisions;
- add Manager or Employee catalog runtime access;
- create or simulate a future permission engine;
- add scheduling, `pg_cron`, `pg_net`, or scheduler identities;
- add import tables or import commands;
- add WhatsApp, voice, photo, conversational confirmation, or channel execution;
- add file upload, storage bucket, scanner, file-reference table, or product image field;
- add token cleanup, purge worker, or retention scheduler;
- add `system_errors`;
- add fuzzy, trigram, phonetic, transliteration, similarity, or AI search;
- add discretionary indexes not required for correctness or accepted uniqueness;
- modify inventory truth through catalog commands;
- modify application routes or frontend catalog UI;
- repair the unrelated TanStack/Vite development-server defect;
- change `vite.config.ts`, `package.json`, `bun.lock`, or dependency versions for this mission;
- publish Lovable changes;
- deploy to `smartbusiness.teamlips.com`;
- apply changes directly to production.

---

## 6. Build Stages

### Stage 0 — Repository and environment verification

Before writing:

1. confirm the implementation branch starts from the merged commit containing `report1.37.md`;
2. record the starting commit SHA;
3. confirm the working tree is clean;
4. inspect existing migrations, schemas, ownership, RLS conventions, inventory composite keys, and Supabase project configuration;
5. verify that no catalog objects already exist under conflicting names;
6. verify the target Supabase environment before any migration action;
7. identify whether migration execution is local/test-only or linked remote.

If repository or database reality conflicts with the accepted contract, stop and report the exact blocker. Do not invent a workaround.

### Stage 1 — Schema and immutable foundations

Implement:

- internal schema and hardening helpers;
- seven executor roles;
- fixed result composites approved by `report1.37.md`;
- eleven tables;
- stored normalization columns and approved internal normalization functions;
- business-scoped constraints and foreign keys using consistent `(business_id, id)` ordering;
- immutable-event mutation rejection;
- closed audit JSON validation;
- one-directional event references;
- RLS enablement and role-targeted policies;
- exact grants and revocations.

Stop and verify Stage 1 before command functions.

### Stage 2 — Command functions

Implement exactly the nineteen functions with:

- `SECURITY DEFINER` hardening;
- closed search paths and schema-qualified references;
- Owner-only authorization through `businesses.owner_id = auth.uid()`;
- `authority_basis = 'owner_via_businesses.owner_id'`;
- server-derived actor and business;
- no caller-selected authority;
- advisory-lock idempotency serialization;
- committed expected rejections;
- deterministic public rejection mapping;
- D-068 same-actor and expected-state enforcement;
- JSONB product read with physical cost omission in the redacted shape;
- deterministic search and cursor validation;
- maximum batch size of 100.

Stop and verify Stage 2 before any application integration.

### Stage 3 — Database verification

Run the approved verification package against an authorized non-production target.

Verification must prove at minimum:

1. all eleven tables exist and RLS is enabled;
2. exactly nineteen public functions exist with exact signatures;
3. no public overload exists;
4. all seven executor roles are `NOLOGIN`;
5. executors do not own tables, bypass RLS, inherit service role, or hold login credentials;
6. PUBLIC and anon execution are revoked;
7. authenticated direct table access exists only for the approved category columns;
8. authenticated has zero direct catalog write policies;
9. Owner-business isolation succeeds and cross-business access fails;
10. normalization vectors pass for Malayalam, Manglish, case, punctuation, whitespace, blank SKU, and blank barcode;
11. archived identities remain reserved;
12. expected rejections commit idempotency evidence but no protected business write;
13. mismatched idempotency payload returns `IDEMPOTENCY_CONFLICT`;
14. concurrent identical requests converge on one terminal outcome;
15. preview-token invalid states collapse publicly to `STALE_STATE`;
16. open-preview uniqueness is `(business_id, product_id) WHERE closed_at IS NULL`;
17. same-actor confirmation is enforced;
18. reference cost is absent from redacted JSON and absent from general audit JSON;
19. cost executor has no audit-table privilege;
20. search ordering and complete cursor continuation do not skip or duplicate rows;
21. unknown and foreign identifiers are publicly indistinguishable where required;
22. no deferred table, field, command, role, worker, extension, or runtime path was introduced;
23. Supabase advisors show no new unresolved critical or high issue attributable to this mission.

### Stage 4 — Completion evidence only

After database verification:

- do not implement frontend integration;
- do not publish or deploy;
- prepare the required completion report and pull request;
- request Supabase Backend Architecture verification first;
- request Security & Permissions Architecture verification second;
- return the consolidated evidence to Mission Control.

---

## 7. Environment and Migration Safety

1. Production mutation is not authorized by this instruction.
2. Prefer local or authorized test/staging verification.
3. If the connected Supabase project is the only available target, stop before applying migrations and request explicit environment authorization.
4. Never use `service_role` from browser or client code.
5. Never expose internal helpers through the Data API.
6. Do not use destructive reset operations against a shared or production database.
7. Do not modify existing business, transaction, inventory, or authentication data except where a test fixture is created in an authorized isolated environment.
8. Keep migration files forward-only and repository-first.

---

## 8. Stop Conditions

Stop immediately and report if:

- any accepted signature cannot be implemented without changing behaviour;
- the existing inventory schema cannot support the accepted same-business references;
- executor-owned security-definer functions bypass RLS unexpectedly;
- the platform prevents creation or ownership transfer of the required roles;
- the current Supabase plan or permissions prevent required verification;
- a migration would require production mutation without explicit authorization;
- reference-cost physical omission cannot be proven;
- a command requires a twentieth public function;
- an unresolved conflict exists between repository reality and `report1.37.md`;
- the unrelated TanStack/Vite defect blocks only frontend runtime but is being treated as a database-contract blocker.

Do not broaden scope to resolve a stop condition.

---

## 9. Required Implementation Report

Prepare:

`communication/live/report1.40.md`

The report must include:

1. mission and branch identity;
2. starting and ending commit SHAs;
3. changed-file inventory;
4. migration inventory;
5. final eleven-table inventory;
6. final nineteen-function signature inventory;
7. role, ownership, grant, and RLS evidence;
8. normalization evidence;
9. idempotency evidence;
10. D-068 evidence;
11. search and cursor evidence;
12. cost-confidentiality evidence;
13. cross-business isolation evidence;
14. Supabase advisor results;
15. excluded-scope proof;
16. unresolved blockers, or `None`;
17. explicit confirmation that frontend, publishing, deployment, dependency repair, and production mutation did not occur.

Conclude with exactly one:

`CONTROLLED INITIAL PHASE 1 IMPLEMENTATION COMPLETE — READY FOR SPECIALIST VERIFICATION`

or

`CONTROLLED INITIAL PHASE 1 IMPLEMENTATION INCOMPLETE — BLOCKERS REQUIRE MISSION CONTROL`

---

## 10. Pull Request and Review Protocol

1. Implementation must occur on a new dedicated branch created after this instruction is merged.
2. The implementation PR must target `main`.
3. Human review and merge are mandatory.
4. The builder must not self-approve or self-merge.
5. Do not combine dependency repair, frontend work, publishing, deployment, or unrelated cleanup in the implementation PR.
6. Specialist verification reports must be preserved through the communication protocol.
7. Mission Control will separately decide whether frontend integration, publication, deployment, or production migration is authorized after implementation verification.

---

## 11. Final Authority Statement

After this instruction is human-reviewed and merged, Build Mode is authorized only for the controlled repository and database implementation described here.

This instruction does not authorize:

- frontend feature build;
- TanStack/Vite repair;
- Lovable publishing;
- production deployment;
- production migration execution;
- public release.

The implementation mission ends at verified backend completion evidence.
