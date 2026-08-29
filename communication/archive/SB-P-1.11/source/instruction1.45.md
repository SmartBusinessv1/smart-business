# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-UI-1 — INITIAL PHASE 1 CATALOG FRONTEND IMPLEMENTATION

**Mission ID:** SB-P-1.11-UI-1  
**Mission Name:** Initial Phase 1 Catalog Frontend Implementation  
**Reporting Room:** Lovable Builder / Lovable Lab  
**Mission Status:** ACTIVE AFTER MERGE  
**Authorized By:** Mission Control under `communication/live/instruction1.43.md`  
**Publish / Production Deployment:** NOT AUTHORIZED

---

## 1. Mission Objective

Implement the bounded Owner-facing Initial Phase 1 catalog experience in the existing Smart Business dashboard using the accepted nineteen-command backend contract.

This is a frontend implementation mission only.

The experience must improve merchant clarity and usefulness without introducing authority expansion, hidden automation, workflow bloat, or unapproved scope.

---

## 2. Repository and Environment Preconditions

Before editing:

1. synchronize with the latest merged `main`;
2. inspect the current dashboard architecture and route structure;
3. inspect existing Supabase client patterns;
4. confirm the current build state before making changes;
5. confirm the frontend is connected only to the intended non-production or approved development environment for implementation verification;
6. do not assume the catalog migrations exist in production;
7. do not publish or deploy.

If the frontend cannot safely call the accepted RPCs in the available non-production environment, stop and report the exact blocker instead of creating mocks that could be mistaken for completed functionality.

---

## 3. Binding Backend Contract

Use only the exact nineteen accepted public functions:

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

No direct client write to catalog tables is permitted.

Do not add a twentieth public command, client-side database mutation path, service-role call, or custom POS behavior.

---

## 4. Authorized User and Route Scope

Authorized user:

- authenticated business Owner only.

Authorized surface:

- the existing protected dashboard/workspace.

The exact route placement must respect the repository's current navigation architecture. Do not introduce unauthorized public routes.

Employee or staff access is not part of this mission.

---

## 5. Required Experience

### 5.1 Catalog landing and product discovery

Provide a clear catalog workspace that supports:

- search using `catalog_products_search`;
- deterministic result rendering;
- archived products hidden by default;
- explicit archived filter/toggle when appropriate;
- batch or cursor continuation using the accepted read contract;
- loading, empty, error, and retry states;
- product selection and detail view using `catalog_product_read`.

### 5.2 Product creation

Provide a focused create-product flow for:

- name;
- description;
- category;
- SKU;
- barcode;
- selling unit.

Do not ask for a selling price during product creation.

Generate and retain an idempotency key per submitted command attempt. Do not generate a new key merely because the UI is waiting or retrying an unknown outcome.

### 5.3 Product identity and unit editing

Provide separate, understandable controls for:

- identity changes;
- selling-unit changes.

Do not combine unrelated consequential actions into an opaque save operation.

### 5.4 Categories

Support:

- category creation;
- category archive;
- confirmation when archiving a category that contains products;
- clear explanation that affected products become uncategorized as defined by the backend contract.

### 5.5 Lifecycle actions

Support:

- archive product;
- reactivate product;
- eligible permanent delete.

Permanent delete must be visually and verbally distinguished from archive and require explicit confirmation.

Expected backend rejection reasons must be shown as helpful, non-judgmental guidance.

### 5.6 Price, tax, and reference cost

Provide separate owner-controlled actions for:

- selling price change;
- product tax change;
- business tax settings;
- reference cost change.

Protect reference cost from appearing in list/search summaries. Display it only where the accepted detailed read contract returns it for the authorized Owner.

Do not present Ask CFO or any AI output as authority over these decisions.

### 5.7 Inventory link preview and confirmation

Implement the full D-068 sequence:

1. request preview;
2. show current and proposed inventory link state;
3. show proposed selling unit;
4. require confirmed price only when the backend says `price_confirmation_required = true`;
5. clearly indicate the 15-minute preview validity window;
6. confirm assign/replace using the preview token;
7. support removal through its own preview/confirm path;
8. handle `STALE_STATE` without exposing internal wrong-actor or token-reason distinctions;
9. refresh the product after completion or stale-state rejection.

Do not bypass preview by writing directly or by constructing a client-only confirmation state.

---

## 6. Idempotency and Unknown Outcome Behaviour

For every write command:

- create one UUID idempotency key for the user action;
- retain it across safe retry and network uncertainty;
- treat a returned terminal `completed` or `rejected` outcome as final;
- use `get_catalog_command_outcome` when the transport outcome is unknown;
- do not automatically repeat a consequential command with a new key;
- present clear human choices when outcome remains unknown;
- prevent duplicate submit while a command is in flight;
- preserve user-entered data after recoverable failure.

The UI must never imply success before the backend returns or confirms a terminal outcome.

---

## 7. Public Rejection Handling

Handle the accepted public rejection categories consistently, including:

- `INVALID_INPUT`;
- `PERMISSION_DENIED`;
- `NOT_FOUND`;
- `UNIQUENESS_CONFLICT`;
- `STALE_STATE`;
- `IDEMPOTENCY_CONFLICT`;
- `PRICE_CONFIRMATION_REQUIRED`;
- other accepted terminal categories defined by the locked implementation contract.

Use plain merchant-friendly language while preserving the exact technical reason in developer diagnostics where appropriate.

Do not blame the merchant or expose sensitive internal state.

---

## 8. Design and Interaction Principles

The interface must:

- respect existing Smart Business visual and navigation patterns;
- prioritize clarity over feature density;
- use progressive disclosure for advanced actions;
- make irreversible actions unmistakable;
- keep Owner decision ownership explicit;
- avoid artificial urgency, judgmental scoring, or manipulative prompts;
- work well on common merchant mobile and desktop screen sizes;
- preserve accessible labels, keyboard operation, focus states, and readable errors;
- avoid silent background financial changes.

---

## 9. Explicitly Excluded Scope

Do not implement:

- images or product file infrastructure;
- imports or bulk uploads;
- scheduling;
- WhatsApp, voice, or photo catalog input;
- employee/staff catalog permissions;
- a general permission engine;
- custom POS modification;
- inventory management beyond the accepted catalog link flow;
- customer or supplier functionality;
- analytics or AI recommendations;
- cleanup workers;
- `system_errors` work;
- new database tables, migrations, functions, triggers, policies, or roles;
- production migration;
- public route redesign;
- publish or deployment.

---

## 10. Build and Dependency Boundaries

- Do not change `vite.config.ts`, `package.json`, lockfiles, or core dependencies unless a concrete build blocker is found and separately reported.
- Do not perform broad refactors.
- Do not replace established application architecture.
- Reuse current components and patterns where safe.
- Any essential dependency or build repair requires a separate narrow authorization before implementation.

---

## 11. Verification Requirements

Verify at minimum:

- authentication and protected-route behavior remain intact;
- Owner can open the catalog workspace;
- search, list continuation, archived filtering, and product read work;
- every implemented write action calls the correct RPC;
- no direct client table write exists;
- no service-role secret or client is bundled into browser code;
- create product excludes selling price;
- category archive confirmation behaves correctly;
- archive/reactivate/delete are clearly distinguished;
- price/tax/reference-cost actions remain separate;
- reference cost is absent from list/search UI;
- D-068 preview, required-price branch, confirm, removal, expiry, and stale-state handling work;
- duplicate submission is prevented;
- idempotency keys persist across unknown-outcome recovery;
- responsive and accessible behavior is acceptable;
- existing dashboard functionality is not broken;
- build completes without unauthorized dependency or configuration change.

Use the dedicated non-production backend for end-to-end verification whenever available.

---

## 12. Required Deliverables

Create:

- implementation commits on a dedicated mission branch;
- `communication/live/report1.48.md` — Lovable implementation completion report;
- `docs/verification/SB-P-1.11-catalog-frontend-verification.md` — detailed verification evidence;
- screenshots or equivalent evidence covering major states, stored using the repository's approved evidence practice.

The completion report must include:

- branch and commit evidence;
- changed-file inventory;
- exact RPC-to-UI mapping;
- build/test results;
- screenshots/evidence inventory;
- defects found and corrections made;
- excluded-scope confirmation;
- unresolved blockers;
- publish status explicitly stated as `NOT PUBLISHED`.

---

## 13. Stop Conditions

Stop and report if:

- the backend contract differs from the nineteen accepted functions;
- required RPCs are unavailable in the non-production environment;
- a direct table write appears necessary;
- service-role access appears necessary in browser code;
- a dependency or Vite repair is required;
- the current dashboard architecture cannot support the mission without broad refactoring;
- product scope is ambiguous or conflicts with Product Truth;
- implementation would require any excluded capability.

---

## 14. Explicit Prohibitions

Do not:

- publish Lovable;
- deploy to `smartbusiness.teamlips.com`;
- apply production migrations;
- change database architecture;
- introduce unapproved routes or capabilities;
- self-approve or self-merge.

---

## 15. Next Logical Step

After implementation, repository review, specialist verification, and human merge, Mission Control may issue a separate controlled preview/publish verification mission. This instruction does not authorize publishing or production deployment.