# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-UI-1R — HOLD RELEASE & VERIFIED LOVABLE BUILD-MODE EXECUTION

**Mission ID:** SB-P-1.11-UI-1R  
**Mission Name:** Hold Release & Verified Lovable Build-Mode Execution  
**Parent Mission:** `SB-P-1.11-UI-1 — Initial Phase 1 Catalog Frontend Implementation`  
**Reporting Room:** Lovable Builder / Lovable Lab  
**Mission Status:** ACTIVE AFTER MERGE  
**Authorized By:** Mission Control  
**Publish / Production Deployment:** NOT AUTHORIZED

---

## 1. Purpose

Formally release the implementation hold on `SB-P-1.11-UI-1` after successful completion of the Lovable environment hardening, canonical-source synchronization, CRLF remediation, and final post-synchronization verification chain.

This instruction authorizes the actual bounded frontend implementation of the locked Smart Business Initial Phase 1 Catalog experience in Lovable Build Mode.

This is not a redesign mission.

This is not a backend mission.

This is not a deployment mission.

---

## 2. Authority and Relationship to Existing UI-1 Instruction

The functional product scope remains governed by:

`communication/live/instruction1.45.md`

This hold-release instruction does not broaden that scope.

It supersedes only the outdated environment and delivery assumptions in `instruction1.45.md` that were written before the production catalog migration and before the verified external-Supabase-first Lovable project existed.

All locked UI requirements, exclusions, nineteen-command contract, idempotency rules, D-068 behavior, reference-cost protection, Owner-only scope, accessibility expectations, and no-publish rule in `instruction1.45.md` remain binding unless explicitly clarified here.

---

## 3. Hold Release Basis

The hold is released because the following chain has completed and merged with PASS evidence:

1. production catalog backend migration and verification;
2. external-Supabase-first Lovable project creation and backend identity verification;
3. canonical GitHub source synchronization into that project;
4. CRLF byte-equivalence remediation;
5. frozen dependency install;
6. canonical production build;
7. existing automated test suite — 62/62 passed;
8. bounded Lovable runtime smoke verification;
9. read-only backend/production integrity verification;
10. post-verification source-drift check.

Final synchronization verification baseline:

`6f28a5a9dd6c56aee5f306751f77665bcc2b33bf`

---

## 4. Locked Execution Environment

### Canonical repository

`SmartBusinessv1/smart-business`

GitHub remains the sole canonical source of truth.

### Authorized Lovable project

`f3e992ec-06df-4d49-b157-b92ec064c078`

This is the only Lovable project authorized for `SB-P-1.11-UI-1` implementation.

The original Lovable Cloud-backed Smart Business project is legacy/reference only for this mission and must not be modified.

### Approved production Supabase

`gysgzasfcjvtrgaigfyn`

### Dedicated test Supabase

`drravyyauixltoihzmwo`

Test only. It must not become the runtime backend for the authorized Lovable project.

### Legacy Lovable Cloud backend

`wwgqnshcgbukqczqblsm`

Must remain absent from the authorized Lovable project.

---

## 5. Build Mode Authorization

Lovable Build / implementation mode is now authorized for the bounded frontend work defined by `instruction1.45.md`.

Build Mode may:

- create and edit frontend source files required for the catalog experience;
- reuse existing Smart Business dashboard components and patterns;
- add catalog routes/components only within the existing protected dashboard architecture;
- wire UI reads and commands to the exact accepted nineteen RPC functions;
- implement required loading, empty, error, retry, confirmation, stale-state, and unknown-outcome flows;
- implement responsive and accessible presentation;
- make source-level corrections that are directly necessary to satisfy the locked UI-1 specification, provided they stay inside authorized frontend scope.

Build Mode must not reinterpret or expand the product contract.

---

## 6. Exact Backend Contract

The frontend may use only these nineteen public functions:

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

No twentieth public command is authorized.

No direct client write to catalog tables is authorized.

No service-role browser access is authorized.

---

## 7. Production Safety During Frontend Build

The authorized Lovable project is intentionally bound to the real approved production Supabase project.

That binding must not be changed.

However, this frontend implementation mission does **not** authorize production behavioral writes for testing.

During Build Mode:

- read-only production checks are allowed where necessary;
- do not create test businesses, products, categories, pricing events, tax changes, inventory links, or other catalog data in production;
- do not invoke consequential write RPCs against production merely to prove the UI works;
- do not alter production schema, migrations, policies, roles, functions, or data;
- do not switch the Lovable project to the test Supabase project.

Behavioral write verification that requires data mutation must use an approved non-production verification path outside the production-bound Lovable runtime, or be deferred to a separately authorized verification mission.

If implementation cannot be completed without a production write, STOP and report the blocker.

---

## 8. Required Catalog Experience

Implement the complete bounded UI defined in `instruction1.45.md`, including:

### Product discovery

- catalog landing workspace;
- search;
- list/batch continuation;
- archived hidden by default;
- explicit archived view/filter;
- product detail read;
- loading, empty, error, retry states.

### Product creation

- name;
- description;
- category;
- SKU;
- barcode;
- selling unit;
- no selling price during creation.

### Product maintenance

- identity editing;
- selling-unit editing;
- archive;
- reactivate;
- eligible permanent delete with explicit confirmation.

### Categories

- create category;
- archive category;
- confirmation when products will become uncategorized.

### Financial controls

Separate Owner-controlled actions for:

- selling price;
- product tax;
- business tax settings;
- reference cost.

Reference cost must not appear in list/search summaries.

### Inventory link flow

Implement the complete D-068 preview/confirm model, including:

- preview first;
- current/proposed state;
- proposed unit;
- conditional price confirmation;
- 15-minute validity indication;
- assign/replace confirm;
- remove flow;
- public `STALE_STATE` handling;
- refresh after completion or stale rejection.

### Idempotency and unknown outcome

For every consequential command:

- one UUID per user action;
- retain across safe retry and uncertain transport outcome;
- prevent duplicate in-flight submission;
- use `get_catalog_command_outcome` for unknown outcomes;
- never imply success before terminal backend confirmation.

---

## 9. Lovable Credit Discipline

Use Lovable primarily for implementation, interaction design, runtime rendering, and visual validation.

Do not spend Build Mode turns on broad repository archaeology, governance reinterpretation, dependency modernization, backend redesign, or speculative refactoring.

Prefer one coherent implementation plan followed by bounded implementation passes rather than repeatedly regenerating the same interface.

Existing verified architecture must be reused rather than reconstructed.

---

## 10. Canonical Source Return Path

The authorized Lovable project is not authorized to create or connect a GitHub repository.

Do not use Lovable native GitHub connection.

After implementation:

1. capture the complete Lovable source diff and changed-file inventory;
2. independently verify that changes remain within authorized UI-1 scope;
3. transfer the approved source changes back into a dedicated GitHub mission branch using the established controlled source-return process;
4. preserve GitHub as canonical;
5. run canonical repository install/build/tests after the returned source is staged;
6. open a human-reviewable PR;
7. do not self-merge.

If an exact, reviewable source return cannot be proven, STOP before declaring implementation complete.

---

## 11. Dependency and Architecture Boundaries

Do not:

- change `package.json` unless separately authorized;
- change `bun.lock` unless separately authorized;
- modernize dependencies;
- replace the existing TanStack architecture;
- change Supabase client architecture;
- introduce Lovable Cloud;
- change `.env` to another backend;
- add backend objects;
- apply migrations;
- perform broad refactors unrelated to the catalog UI.

If a dependency or architecture blocker is encountered, STOP and report it for separate narrow authorization.

---

## 12. Explicitly Excluded Scope

Still excluded:

- product images or file infrastructure;
- imports or bulk upload;
- scheduling;
- WhatsApp catalog input;
- voice catalog input;
- photo catalog input;
- employee/staff catalog permissions;
- general permission engine;
- custom POS modification;
- inventory management beyond the accepted catalog-link flow;
- customers;
- suppliers;
- analytics;
- AI recommendations;
- cleanup workers;
- `system_errors` work;
- new backend tables/functions/triggers/policies/roles;
- public-route redesign;
- domain cutover;
- publish;
- production deployment.

---

## 13. Verification During Implementation

Before completion, verify at minimum:

- existing authentication remains intact;
- protected dashboard routing remains intact;
- catalog workspace renders in the authorized Lovable project;
- responsive behavior is acceptable;
- accessibility basics remain intact;
- search/list/read code maps to the correct read RPCs;
- every write UI maps to the correct command RPC;
- no direct catalog-table client write exists;
- no service-role secret is exposed;
- product create excludes selling price;
- category archive confirmation is present;
- archive/reactivate/delete are distinct;
- price/tax/reference-cost controls remain separate;
- reference cost is not exposed in list/search summaries;
- D-068 flow is implemented as preview then confirm;
- duplicate-submit protection exists;
- unknown-outcome recovery preserves the idempotency key;
- build completes from the canonical returned source;
- existing automated tests still pass;
- no unauthorized dependency/config/backend change occurred.

Production-write behavioral verification is not part of this mission.

---

## 14. Required Deliverables

Create a dedicated implementation completion report using the next available report number.

The report must include:

- authorized Lovable project ID;
- implementation start and completion state;
- Lovable changed-file inventory;
- GitHub returned-source branch and commit evidence;
- exact UI-to-RPC mapping for all implemented actions;
- source-diff verification;
- canonical build result;
- automated test result;
- visual evidence inventory;
- responsive/accessibility observations;
- defects found and corrections made;
- explicit confirmation of no production behavioral writes;
- explicit confirmation that legacy Lovable Cloud backend remains absent;
- explicit confirmation that the original Lovable project was untouched;
- excluded-scope confirmation;
- unresolved blockers;
- publish status: `NOT PUBLISHED`;
- deployment status: `NOT DEPLOYED`.

Also update or create the catalog frontend verification document required by `instruction1.45.md`.

---

## 15. Hard Stop Conditions

STOP and report if:

- Lovable proposes or performs a backend switch;
- Lovable Cloud appears;
- the legacy backend ref appears in the authorized project;
- GitHub connection/repository creation is proposed;
- a twentieth RPC or direct table write appears necessary;
- a service-role browser client appears necessary;
- production behavioral writes appear necessary;
- migrations/schema changes appear necessary;
- dependency modernization appears necessary;
- broad unrelated refactoring appears necessary;
- exact source return to GitHub cannot be proven;
- implementation scope conflicts with the locked Product Truth or `instruction1.45.md`.

Do not repair around these boundaries without separate authorization.

---

## 16. Publish / Domain Status

This instruction does **not** authorize:

- Lovable Publish;
- production deployment;
- custom-domain attachment or transfer;
- DNS changes;
- moving `smartbusiness.teamlips.com` from its current project;
- decommissioning the original Lovable project.

The custom-domain cutover will be a separate release mission after frontend implementation and verification are accepted.

---

## 17. Completion State

A PASS for this mission means:

- the bounded SB-P-1.11 Catalog frontend is implemented in the verified Lovable project;
- source changes are returned to canonical GitHub through a reviewable branch/PR;
- canonical build/tests pass;
- no backend, production-data, domain, publish, or deployment boundary was crossed.

A PASS does not itself publish or deploy Smart Business.

---

## 18. Next Logical Step

After implementation completion, source return, canonical verification, specialist review, and human merge, Mission Control may authorize a separate controlled release-readiness and domain/publish cutover mission.
