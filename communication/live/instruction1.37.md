# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-SR2 — CONTRACT CORRECTION AND FINAL SPECIALIST ACCEPTANCE

**Mission ID:** `SB-P-1.11-SR2`

**Parent Mission:** `SB-P-1.11 — Product Catalog & Pricing`

**Mission Name:** Contract Correction and Final Specialist Acceptance

**Executing Environment:** Lovable Plan Mode

**Supporting Reviewing Room:** Supabase Backend Architecture

**Lead Reviewing Room:** Security & Permissions Architecture

**Mission Status:** ACTIVE AFTER HUMAN MERGE OF THIS AUTHORIZATION

**Authorized By:** Mission Control

**Implementation Authority:** NONE

---

## 1. Mission Objective

Apply only the exact engineering-contract corrections approved in:

```text
communication/live/report1.36.md
```

to the current Lovable Plan Mode artifact titled:

```text
SB-P-1.11 Initial Phase 1 — Corrected Executable Engineering Contract
```

Then return the fully corrected contract for one final joint specialist acceptance review.

This mission exists to close the remaining contract defects before any controlled Build Mode authorization is reconsidered.

This is not an implementation mission.

---

## 2. Mission Control Current-State Review

Mission Control reviewed the current state of GitHub, Lovable, and Supabase before issuing this instruction.

### 2.1 GitHub

Repository:

```text
SmartBusinessv1/smart-business
```

Current `main` commit at authorization preparation:

```text
7e2b5d17c45c7bb1916f353649ac64845e7d38ea
```

Commit title:

```text
Add SB-P-1.11-SR1 consolidated security and database review (#107)
```

Confirmed repository state:

- PR #106 merged the specialist-review authorization.
- PR #107 merged `communication/live/report1.36.md`.
- The latest specialist verdict is `SPECIALIST REVIEW FAILED — CORRECTIONS REQUIRED`.
- No SB-P-1.11 application code, SQL, migration, schema object, RLS policy, role, grant, function, deployment, or production change was introduced by PR #107.
- Build Mode is not authorized.

### 2.2 Lovable

Workspace:

```text
Smart Business
```

Project:

```text
Smart Business
```

Project ID:

```text
64c2b9b1-2461-4045-9acc-19e2658b8ca2
```

Confirmed Lovable state:

- Project status is completed and currently published from earlier approved work.
- The current SB-P-1.11 activity is held at database Build Order Stage 1.
- Lovable correctly stopped implementation when the locked schema and signatures were incomplete.
- Subsequent work occurred in Plan Mode only.
- The current Plan Mode artifact is `.lovable/plan.md` and contains the corrected engineering-contract proposal reviewed by the specialist rooms.
- No SB-P-1.11 implementation, migration, schema change, frontend change, publication, or deployment was completed.
- The current plan artifact still contains defects identified in `report1.36.md` and must not be approved for implementation.

### 2.3 Supabase

Project:

```text
smart-business
```

Project ID:

```text
gysgzasfcjvtrgaigfyn
```

Region:

```text
ap-south-1
```

Database state:

```text
ACTIVE_HEALTHY
PostgreSQL 17
```

Confirmed current public tables:

- `businesses`
- `transactions`
- `transaction_correction_events`
- `inventory_items`
- `inventory_movements`
- `inventory_movement_idempotency_keys`

All listed public tables currently have RLS enabled.

Confirmed SB-P-1.11 database state:

- no catalog tables exist;
- no catalog composite types exist;
- no catalog executor roles exist;
- no catalog RPC functions exist;
- no catalog RLS policies exist;
- no catalog migration has been applied;
- no SB-P-1.11 storage bucket or upload infrastructure exists;
- production data remains unchanged.

Mission Control therefore confirms that contract correction can proceed safely in Plan Mode without reconciling partial SB-P-1.11 implementation artifacts.

---

## 3. Governing Authority

Execute according to this precedence:

1. Approved Smart Business Governance Foundation
2. Locked Founder Decisions and Product Truth
3. Locked SB-P-1.11 Product Blueprint
4. Locked SB-P-1.11 EIS v2.2
5. Locked Engineering Contract v1.1
6. Locked Lovable Build Prompt v1.1
7. Locked Verification Checklist v1.1
8. Locked Founder Lovable Brief
9. Accepted database, readiness, D-068, token-lifecycle, and file-reference resolutions
10. `communication/live/report1.36.md`
11. The current Lovable Plan Mode engineering-contract proposal as correction input only

Where the current proposal conflicts with any higher source or with the exact replacement wording in `report1.36.md`, the higher source and `report1.36.md` correction control.

The Lovable proposal is not Product Truth and has no authority to override locked sources.

---

## 4. Authorized Stage A — Lovable Plan Mode Contract Correction

After this instruction is human-reviewed and merged, Mission Control may send the execution prompt in Section 10 to the existing Lovable project.

Lovable is authorized only to:

1. remain in Plan Mode;
2. read the current `.lovable/plan.md` contract artifact;
3. read `communication/live/report1.36.md` and the locked sources available in the connected repository;
4. replace the Plan Mode contract artifact with one fully corrected contract;
5. apply the exact replacement wording and conclusions from `report1.36.md`;
6. preserve the exact approved 19-command initial Phase 1 scope;
7. return the complete corrected contract in the Lovable conversation;
8. report every correction applied and any unresolved contradiction.

Lovable may modify only its Plan Mode planning artifact as required to present the corrected contract.

Lovable is not authorized to modify tracked application or repository implementation files.

---

## 5. Mandatory Contract Corrections

The corrected contract must incorporate all accepted and required clauses from `report1.36.md`, including the following.

### 5.1 Authenticated data access

- Remove every global assumption that `authenticated` receives direct business-scoped `SELECT` on catalog tables.
- Make authenticated table access opt-in and table-specific.
- No direct authenticated access to product rows, event tables, tax settings, reference-cost data, preview tokens, audit events, deletion records, file references, or idempotency records unless explicitly accepted below.
- Product, event, tax, link, cost, and outcome data must be returned through the approved function boundaries.
- Category retrieval may use narrowly business-scoped direct SELECT only because the approved 19-command surface contains no separate category-list function, subject to final specialist confirmation.
- `anon` receives no catalog table privilege and no catalog command execution privilege.

### 5.2 Reference-cost authority and confidentiality

Use this exact authority model:

- `catalog_products.current_reference_cost` is the authoritative current-state projection.
- `catalog_reference_cost_events` is the authoritative immutable history.
- `record_catalog_reference_cost_change` updates both atomically in one transaction.
- Neither store may be independently written through another path.
- Reference-cost values must be physically omitted from unauthorized function response shapes.
- No direct authenticated SELECT is allowed on reference-cost history or unrestricted product rows.
- General audit JSON must never contain reference-cost or derived reference-cost data.

### 5.3 General audit control

- `catalog_cost_executor` receives no privilege on `catalog_audit_events`.
- Replace cost-key blacklisting with a closed allowed-key set for every permitted `change_type`.
- Reject any unapproved top-level or nested key.
- Treat trigger rejection as an unexpected implementation defect that rolls back the command.
- Preserve command-specific payload construction and grants as the primary controls.

### 5.4 D-068 identifier and authority

- `p_preview_token_id uuid` is a non-secret internal row identifier.
- Possession of the UUID grants no authority.
- Confirmation requires live verification of server-derived business, current actor, same preview actor, permissions, lifecycle state, requested action, proposed target, and expected-state fingerprint.
- The locked signatures remain unchanged.

### 5.5 Public token rejection

- All unknown, foreign-business, invalid, expired, closed, replayed, wrong-actor, and expected-state-drift conditions return public `STALE_STATE`.
- Internal reason codes may be stored only in restricted preview-token or idempotency records.
- Internal reason codes must not appear in RPC output, direct reads, general audit JSON, application logs, browser telemetry, or merchant messages.
- Foreign-business and nonexistent identifiers must have indistinguishable public results.

### 5.6 Preview lifecycle and fresh-preview creation

Add and use:

```text
lifecycle_state text NOT NULL
closed_at timestamptz NULL
```

Allowed states:

- `issued`
- `consumed_completed`
- `consumed_rejected`
- `expired_unconsumed`
- `superseded`

Use the stable open-row uniqueness rule:

```text
UNIQUE (product_id) WHERE closed_at IS NULL
```

Do not use `now()` or another volatile expression in an index predicate.

When a fresh preview is requested:

- lock an existing open preview for that product;
- close an expired preview as `expired_unconsumed`;
- minimize display fields;
- set `closed_at`;
- permit the new preview in the same transaction;
- supersede an unexpired preview only through an explicit deterministic transition.

No cleanup worker is needed for fresh-preview availability.

### 5.7 Expiry, minimization, and retention

- Logical unusability begins exactly at `now() >= expires_at`.
- An expired preview never authorizes a catalog change.
- An attempted confirmation after expiry returns public `STALE_STATE` and records restricted reason `TOKEN_EXPIRED`.
- The expired row remains `expired_unconsumed`.
- It does not set `consumed_at` or a consuming actor.
- Its retention anchor remains `expires_at`.
- Its full non-secret metadata retention period is 30 days.
- A consumed preview retains full non-secret metadata for 90 days after `consumed_at`.
- After retention, rows are eligible for deletion or irreversible reduction to durable audit-only evidence.
- No cleanup execution, worker, cron, scheduler, or deletion job is authorized in this mission or initial Phase 1.

### 5.8 Expected-state fingerprint

- `expected_state_fingerprint` is non-secret integrity evidence.
- It remains stored for the approved metadata-retention period.
- Minimize merchant display snapshots and any actual secret material only.
- Retain the UUID, business, product, actors, action, proposed item, fingerprint, lifecycle timestamps, public category, restricted internal reason, and link-event identifier as applicable.
- Neither UUID nor fingerprint grants authority by possession.

### 5.9 Search cursor

`catalog_products_search` must use keyset pagination over the complete ordering tuple:

```text
match_rank ASC, name_normalized ASC, id ASC
```

Exact cursor parameters:

```text
p_cursor_match_rank smallint DEFAULT NULL
p_cursor_name text DEFAULT NULL
p_cursor_id uuid DEFAULT NULL
```

Rules:

- all three values supplied together or all null;
- a partial cursor returns `INVALID_INPUT`;
- continuation is strictly after the complete tuple;
- returned rows carry `cursor_match_rank`, `cursor_name_normalized`, and `cursor_id`;
- the cursor is valid only with the same query and filters;
- `catalog_products_list_batch` remains non-paginated and has no cursor semantics.

### 5.10 Product history within 19 commands

- Add no twentieth command.
- `catalog_product_read` is the sole Phase 1 product-history read boundary.
- `catalog_product_detail` carries:

```text
history jsonb NOT NULL
```

- The array contains objects matching the documented `catalog_history_entry` element contract.
- Ordering is `occurred_at DESC, event_id DESC`.
- Include selling-price, tax, reference-cost, and inventory-link history.
- Omit reference-cost entries entirely without cost visibility.
- Omit or redact inventory details requiring `inventory_view` when unavailable.
- Revoke direct authenticated reads on all event tables.

### 5.11 Provenance

Use only the locked EIS provenance vocabulary:

- `authorized_by_user_id`
- `executed_by_actor_type`
- `system_run_id`
- `channel`
- `request_id`
- `authority_basis`
- `recorded_at`

Rules:

- dedicated event rows represent completed changes only;
- no general `outcome` field on completed event rows;
- rejected attempts remain in idempotency/outcome records;
- initial Phase 1 requires a non-null authorizing user, user execution, null system-run identity, dashboard channel, and the exact Owner permission basis;
- Manager, Employee, import, scheduler, WhatsApp, voice, photo, or system execution remains inactive until separately authorized.

### 5.12 Executor roles, RLS, and helper functions

- Executor roles remain `NOLOGIN`.
- `postgres` remains table owner.
- No executor receives `BYPASSRLS`, table ownership, `service_role` membership, credentials, or broad inherited membership.
- Use exact table and column privileges per command group.
- Use column-level UPDATE wherever narrower than table-wide UPDATE.
- Grant only minimum SELECT columns needed for row lookup, locking, and RLS evaluation.
- Non-cost executors must not receive visibility of `current_reference_cost`.
- Executor-targeted RLS policies explicitly name the executor role and use `USING` and `WITH CHECK` where applicable.
- Function bodies independently verify allowed transitions.
- Use explicit column lists; no generic dynamic UPDATE from caller-supplied field names.
- Ownership helpers belong in a non-Data-API-exposed internal schema.
- Public functions and helpers use an empty or narrowly controlled search path with fully schema-qualified references.
- Digest calls must be extension-schema-qualified.
- Revoke unintended default table and function privileges from `PUBLIC`, `anon`, `authenticated`, and `service_role` as applicable without redefining platform administration.

### 5.13 Outcome lookup

For locked function:

```text
get_catalog_command_outcome(p_operation text, p_idempotency_key uuid)
```

- derive business and actor from the authenticated request;
- accept no business parameter;
- return byte-equivalent `not_found` for absent and foreign-business keys;
- never return restricted internal reason codes.

### 5.14 Normalized uniqueness

Preserve accepted rules:

- ordinary business-scoped uniqueness on `name_normalized`, `sku_normalized`, `barcode_normalized`, and category `name_normalized`;
- no active-only uniqueness;
- archived entered identities remain reserved;
- optional absent SKU/barcode values may repeat as NULL;
- name normalization trims, collapses internal whitespace, case-folds, and preserves punctuation and Malayalam/Manglish;
- SKU/barcode normalization trims outer whitespace, case-folds letters, preserves internal spacing and punctuation, and maps blank-after-trim to NULL.

### 5.15 Founder decisions

Preserve without reopening:

- archived products hidden by default with explicit Show archived control;
- product creation accepts no selling price;
- selling price is entered through the separate audited price command;
- category archive with assigned products requires explicit confirmation before uncategorizing;
- new businesses default to tax-exclusive pricing.

---

## 6. Exact Scope Preservation

The corrected contract must contain exactly these 19 commands and no others:

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

Preserve the two already locked signatures exactly.

Do not introduce a new function to list categories, fetch history, manage images, or perform cleanup.

---

## 7. Excluded Scope

The corrected contract must continue to exclude:

- scheduler commands and runtime;
- scheduled-price UI;
- scheduler identities;
- `pg_cron` and `pg_net`;
- Manager or Employee catalog access;
- shared permission-engine implementation;
- CSV or Excel import;
- import correction queues;
- WhatsApp actions;
- voice or photo actions;
- conversational confirmation;
- fuzzy, phonetic, similarity, transliteration, or AI normalization;
- `pg_trgm` and GIN similarity indexes;
- discretionary performance indexes;
- `system_errors`;
- token cleanup or purge execution;
- image upload, storage bucket, scan worker, or client image field;
- application implementation;
- publishing or deployment.

---

## 8. Required Lovable Output

Lovable must return one complete corrected contract titled:

```text
SB-P-1.11 Initial Phase 1 — Final Corrected Executable Engineering Contract
```

The output must include:

1. source precedence;
2. Founder decisions applied;
3. exact database contract;
4. exact normalized columns and uniqueness;
5. table-specific authenticated access matrix;
6. exact executor privilege and RLS matrix;
7. exact result types;
8. exact public rejection contract;
9. exact 19 function signatures;
10. exact read and pagination contracts;
11. embedded product-history contract;
12. exact D-068 lifecycle, fingerprint, expiry, minimization, and retention contract;
13. reference-cost authority and confidentiality contract;
14. exact locked provenance contract;
15. file-reference contract;
16. managed Supabase verification gates;
17. excluded-scope confirmation;
18. statement that no implementation occurred;
19. correction trace mapping each `report1.36.md` correction to its final section.

Conclude with exactly one:

```text
CONTRACT CORRECTION COMPLETE — READY FOR FINAL SPECIALIST ACCEPTANCE
```

or

```text
CONTRACT CORRECTION INCOMPLETE — SPECIFIC CONFLICT REMAINS
```

If a conflict remains, stop and report only the exact conflict and affected source clauses.

---

## 9. Authorized Stage B — Final Specialist Acceptance

After Lovable returns the complete corrected contract, Mission Control shall transmit it unchanged to both reviewing rooms.

### 9.1 Supporting review

Supabase Backend Architecture shall verify:

- PostgreSQL validity;
- Supabase compatibility;
- table definitions and constraints;
- function signatures and return carriers;
- grants and RLS mechanics;
- transaction and idempotency design;
- D-068 state transitions;
- pagination correctness;
- history delivery;
- migration-order and managed-platform verification gates.

### 9.2 Lead review

Security & Permissions Architecture shall verify:

- least privilege;
- command-only writes;
- direct-read boundaries;
- business isolation;
- cost confidentiality;
- token and replay resistance;
- internal reason-code confidentiality;
- audit JSON safety;
- function and helper hardening;
- future-phase exclusion;
- Founder and human-decision ownership preservation.

### 9.3 Required final report

The Lead Reviewing Room shall prepare one consolidated report at:

```text
communication/live/report1.37.md
```

The report must record:

- sources reviewed;
- whole-contract review confirmation;
- correction-by-correction verification;
- exact remaining findings, if any;
- 19-command scope confirmation;
- no-implementation confirmation;
- final acceptance verdict.

The final report must conclude with exactly one:

```text
FINAL SPECIALIST ACCEPTANCE PASSED — CONTRACT READY FOR MISSION CONTROL BUILD-AUTHORIZATION DECISION
```

or

```text
FINAL SPECIALIST ACCEPTANCE FAILED — CORRECTIONS STILL REQUIRED
```

Repository recording of `report1.37.md` requires a protected branch, pull request, human review, and human merge.

The author may not self-approve or self-merge.

---

## 10. Exact Lovable Plan Mode Execution Prompt

After this authorization is merged, Mission Control shall send the following prompt to the existing Smart Business Lovable project with `plan_mode = true`:

```text
SMART BUSINESS MISSION CONTROL

SB-P-1.11-SR2 — FINAL CONTRACT CORRECTION

Remain in Plan Mode.

Do not implement.
Do not modify application code.
Do not create or apply SQL or migrations.
Do not create database objects.
Do not modify Supabase.
Do not publish or deploy.
Do not switch to Build Mode.

Read:

- communication/live/instruction1.37.md
- communication/live/report1.36.md
- the current .lovable/plan.md contract artifact
- the locked SB-P-1.11 sources listed in instruction1.37.md

Execute only Authorized Stage A of instruction1.37.md.

Apply every mandatory correction in Sections 5 through 7 exactly.

Replace the current Plan Mode contract artifact with one complete document titled:

SB-P-1.11 Initial Phase 1 — Final Corrected Executable Engineering Contract

Preserve exactly the approved 19-command initial Phase 1 scope.
Preserve the two locked signatures unchanged.
Preserve Founder decisions without reopening them.
Preserve every excluded feature.

Return the complete corrected contract in this conversation.

Include a correction trace mapping every report1.36.md correction to the final contract section where it was applied.

Conclude with exactly one:

CONTRACT CORRECTION COMPLETE — READY FOR FINAL SPECIALIST ACCEPTANCE

or

CONTRACT CORRECTION INCOMPLETE — SPECIFIC CONFLICT REMAINS

No implementation authority is granted.
```

---

## 11. Prohibited Actions

No participant in this mission is authorized to:

- create or modify application code;
- create SQL or migrations;
- create or alter schemas, tables, columns, constraints, indexes, policies, roles, grants, functions, triggers, or types;
- apply any Supabase change;
- create a Supabase branch;
- modify production data;
- enable storage or upload infrastructure;
- use Lovable Build Mode;
- approve or implement the plan;
- publish or deploy;
- modify Product Truth or Founder Decisions;
- expand the command surface;
- issue implementation authority;
- self-approve or self-merge repository work.

---

## 12. Stop Conditions

Stop and report without improvisation if:

- `report1.36.md` conflicts with a higher locked source;
- applying a correction requires changing one of the two locked signatures;
- a twentieth command appears necessary;
- direct authenticated DML appears necessary;
- broad authenticated table reads appear necessary;
- a cleanup worker, scheduler, image upload path, or future-phase identity appears necessary;
- cost confidentiality cannot be preserved;
- business isolation cannot be expressed without weakening RLS or executor boundaries;
- the corrected contract cannot be represented through the approved 19 commands.

---

## 13. Completion Condition

This mission is complete only when:

1. the Lovable contract correction is returned;
2. Supabase Backend Architecture completes supporting review;
3. Security & Permissions Architecture completes lead review;
4. `communication/live/report1.37.md` is human-reviewed and merged;
5. Mission Control records the final disposition.

Until then:

```text
LOVABLE BUILD MODE: STOPPED
SUPABASE IMPLEMENTATION: PROHIBITED
GITHUB IMPLEMENTATION WORK: PROHIBITED
PUBLISHING OR DEPLOYMENT: PROHIBITED
IMPLEMENTATION AUTHORITY: NONE
```
