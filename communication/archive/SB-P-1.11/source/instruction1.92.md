# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-3 — BACKEND ARCHITECTURE CORRECTION

**Mission ID:** SB-P-1.11-FWR-3  
**Mission Name:** Backend Architecture Correction  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Founder Workflow Reconciliation  
**Authorized By:** Mission Control  
**Executing Room:** Claude Code / Engineering Architecture  
**Mode:** PLAN MODE / ARCHITECTURE CORRECTION ONLY  
**Mission Status:** ACTIVE  
**Build Mode Authority:** NONE  
**Database Migration Authority:** NONE  
**Supabase Mutation Authority:** NONE  
**Lovable Mutation Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Correct the bounded backend architecture issues identified by the merged Supabase Backend Architecture review in:

`communication/live/report1.97.md`

This mission is limited to BKR-1 through BKR-5.

The objective is to produce a revised, standalone Founder Workflow architecture contract that is precise enough for a short Supabase confirmation review and, only after that confirmation passes, Security & Permissions Architecture review.

Do not implement code.

Do not create migrations.

Do not mutate Supabase.

Do not modify Product Truth.

Do not expand permissions.

---

## 2. Required Inputs

Read and reconcile at minimum:

- `communication/live/instruction1.90.md`;
- `communication/live/report1.96.md`;
- `communication/live/instruction1.91.md`;
- `communication/live/report1.97.md`;
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`;
- current SB-P-1.10 Inventory schema/function migrations and Inventory integration code;
- current SB-P-1.11 Catalog schema/function migrations and Catalog integration code;
- current Catalog import support-table architecture and implementation;
- current Catalog idempotency infrastructure;
- current Catalog ↔ Inventory link preview/confirm functions;
- current Inventory movement idempotency implementation;
- current `delete_catalog_product` implementation and dependent-history checks;
- current authentication/RLS/service-role boundaries relevant to import bookkeeping.

Repository evidence takes precedence over assumptions in prior reports.

Start from the latest merged `main` and record the exact SHA reviewed.

---

## 3. Founder Workflow Decisions That Must Remain Preserved

The correction must preserve the already merged Founder Workflow Reconciliation decisions:

- FWR-001 — Inventory / Opening Stock CSV/XLSX onboarding is Build Now;
- FWR-002 — downloadable Catalog and Inventory templates are Build Now;
- FWR-003 — merchant SKU optional, Smart Business generates a business-scoped unique SKU when absent;
- FWR-004 — the same SKU domain rule applies across all governed product-creation channels;
- FWR-005 — every newly created Inventory item must have a corresponding separate Catalog product and governed link before Opening Stock is created.

Also preserve:

- Catalog and Inventory as separate truth models;
- D-047;
- D-068;
- append-only Inventory quantity truth;
- Owner-only Phase 1 import authority;
- fail-closed Manager and Employee access;
- exactly nineteen public Catalog commands;
- no direct current-stock writes;
- no silent duplicate creation, merge, link, overwrite, or price reinterpretation.

---

## 4. BKR-1 — Durable Inventory-Item Creation Idempotency

### Problem to Correct

The current Inventory-item creation path is a direct authenticated `INSERT` under RLS and does not provide a durable unknown-outcome-safe operation record.

A committed Inventory insert followed by server timeout/crash before support-row bookkeeping may leave a retry unable to distinguish:

- the Inventory item created by this import attempt; from
- an independently created concurrent Inventory item with the same business identity.

A support-row boolean or uniqueness constraint alone is not sufficient.

### Required Correction

Lock one durable replay-safe Inventory-item creation contract.

Preferred direction from the Supabase review:

A narrow Inventory-domain creation operation, using caller identity, with:

- a stable idempotency key;
- item name;
- base unit;
- server/database-derived actor and business authority;
- operation-scoped payload fingerprint;
- durable authoritative terminal outcome;
- deterministic replay of the same outcome for the same key/payload;
- conflict outcome for same key/different payload;
- concurrency safety;
- no permission expansion;
- no service-role business-truth write;
- no Catalog public-command expansion.

If proposing an alternative such as preallocated stable Inventory item IDs, prove that it provides equivalent unknown-outcome safety and conflict detection.

The report must choose one architecture rather than listing unresolved alternatives.

### Required Decision

State:

1. exact logical operation name/purpose;
2. public/internal exposure classification;
3. caller identity model;
4. idempotency tuple;
5. payload fingerprint inputs;
6. durable outcome structure;
7. same-key/same-payload replay behaviour;
8. same-key/different-payload conflict behaviour;
9. concurrency behaviour;
10. how existing direct Inventory creation remains affected or unaffected outside this import workflow.

Do not implement the function or table.

---

## 5. BKR-2 — Preview-Generation-Scoped Link-Confirm Idempotency

### Problem to Correct

`assign_or_replace_catalog_inventory_link` includes the preview token in its idempotency payload.

If a preview returns or later becomes `STALE_STATE`, a fresh preview generates a different token.

Reusing one fixed link-confirm idempotency key across preview generations would correctly produce `IDEMPOTENCY_CONFLICT` because the payload changed.

### Required Correction

Define a deterministic idempotency-key derivation model where:

- the row has one stable root identity;
- each logical downstream operation derives its own operation identity;
- link confirmation additionally scopes its idempotency identity to the specific preview generation/token;
- retry of the same preview confirmation reuses the same derived key;
- re-preview creates a new derived confirmation key;
- stale preview attempts remain durable historical outcomes and are not overwritten;
- no infinite preview/retry loop is possible;
- merchant confirmation requirements are preserved.

The report must specify exact derivation inputs conceptually, including the root row idempotency identity and operation label/generation component.

Do not expose preview tokens as authority outside the existing governed D-068 flow.

---

## 6. BKR-3 — Exact Inventory Import Persistence Contract

### Problem to Correct

`report1.96.md` proposed separate Inventory import support tables but did not lock a sufficiently exact physical persistence contract.

### Required Correction

Lock the minimum implementation contract for:

- `inventory_import_batches`;
- `inventory_import_rows`.

The correction must preserve the Supabase review direction, including:

### Batch requirements

At minimum resolve:

- stable UUID identity;
- `business_id`;
- `initiated_by`;
- original filename;
- file kind limited to CSV/XLSX;
- row count;
- lifecycle state;
- created/committed timestamps;
- business-scoped composite uniqueness required for tenant FKs;
- terminal-state/timestamp coherence;
- history/read index;
- no ordinary destructive delete path.

### Row requirements

At minimum resolve:

- stable UUID identity;
- tenant-bound batch reference;
- row number;
- separate classification state and execution state;
- allowlisted parsed snapshot only;
- closed correction reason vocabulary;
- matched/resolved Catalog Product references;
- matched/resolved Inventory Item references;
- Opening Stock movement reference where applicable;
- stable row root idempotency key;
- durable per-step execution/attempt state;
- bounded attempt metadata;
- resolver identity/timestamps where applicable;
- created/updated timestamps;
- row-number uniqueness per batch;
- root-idempotency uniqueness within business;
- tenant-bound composite FKs;
- `ON DELETE RESTRICT` / `NO ACTION`, not cascade, for audit-adjacent evidence.

### RLS / grants

Preserve:

- `anon`: no access;
- `authenticated`: SELECT only;
- Owner-only SELECT RLS;
- no Manager/Employee policy expansion;
- no authenticated INSERT/UPDATE/DELETE;
- server-only privileged bookkeeping writes only after caller JWT validation and Owner/business re-derivation;
- no service-role Product Truth mutation.

The report does not need executable SQL, but it must be precise enough that a migration author would not need to invent lifecycle, tenancy, authority, or relationship semantics.

---

## 7. BKR-4 — Catalog Hard-Delete Dependency Reconciliation

### Problem to Correct

If Inventory import rows persist matched/resolved Catalog Product foreign keys using fail-closed `RESTRICT` / `NO ACTION`, those references become a new dependency for Catalog hard deletion.

Without internal reconciliation, the current `delete_catalog_product` governed pre-check could miss this dependency and allow a raw FK violation to escape instead of the governed public outcome.

### Required Correction

Define the internal amendment required so that future Inventory-import Product references participate in the existing dependent-history check.

Preserve:

- the existing public `delete_catalog_product` signature;
- the existing nineteen-command surface;
- governed `DEPENDENT_HISTORY_CONFLICT` behaviour where applicable;
- no raw SQL/FK error exposed to the merchant;
- archived identities remaining reserved according to current rules;
- tenant isolation.

The report must identify exactly which future Inventory-import reference columns count as dependent history and which, if any, may safely be absent from the hard-delete block.

Default posture is fail-closed: if an import row preserves a Product reference as durable workflow/audit evidence, hard deletion must not silently invalidate that evidence.

---

## 8. BKR-5 — Batch Terminal-State Rule

### Problem to Correct

The import batch must never become `committed` while any required row workflow remains incomplete.

### Required Correction

Lock the exact batch aggregation and terminal-state semantics.

At minimum define:

- when a batch may move `previewed → committing`;
- when a batch may become `committed`;
- what row states block commit;
- whether rows classified `SKIPPED` or merchant-excluded candidates are considered terminal and under what conditions;
- how `NEEDS_CORRECTION` / unresolved `POSSIBLE_MATCH` rows affect commit;
- how execution `FAILED` rows affect the batch;
- whether partial success is represented at batch level or only through row states;
- how retries move rows back into active execution without losing prior attempt evidence;
- how a crash during batch aggregation is safely resumed;
- what timestamp/state invariants must hold.

Default safety rule:

A batch may be terminal `committed` only when every included row has reached its required terminal business outcome and no required Catalog creation, Inventory creation, link confirmation, D-068 confirmation, or Opening Stock operation remains unresolved.

Do not introduce silent partial completion.

---

## 9. Corrected Inventory-First Orchestration

Produce one corrected canonical sequence for a row.

At minimum cover:

1. parse and validate before Product Truth mutation;
2. exact candidate resolution;
3. merchant confirmation where required;
4. Catalog creation or reuse;
5. durable Inventory-item creation using the corrected BKR-1 contract;
6. fresh D-068/link preview;
7. preview-generation-scoped governed link confirmation;
8. re-read/verify current link truth;
9. Opening Stock movement using existing Inventory movement idempotency;
10. support-row completion and batch aggregation.

For every mutating step specify:

- authoritative operation identity;
- durable outcome source;
- safe retry behaviour;
- partial-failure behaviour;
- whether compensation is prohibited, allowed, or required.

Preserve the Supabase review direction that successful Catalog or Inventory truth should not be silently destructively rolled back merely to make an import row appear atomic. Incomplete workflows must instead remain explicit, durable, retryable, and non-terminal.

---

## 10. Independent Parser Gate

The existing Catalog import parser/runtime security gate remains unresolved and independent.

This mission must not:

- claim the Lovable/Cloudflare CPU evidence issue is solved;
- redesign the parser runtime;
- choose an external parser deployment architecture;
- implement or redesign the pre-parse concurrency/rate guard;
- introduce R2 as a parser workaround.

Inventory import remains dependent on whatever parser/security architecture is eventually approved for bulk import.

Architecture correction of BKR-1 through BKR-5 does not close that independent gate.

---

## 11. Permission Boundary

Build Now remains:

- Owner: authorized for Inventory bulk onboarding;
- Manager: fail-closed until separately approved permission infrastructure exists;
- Employee: denied;
- service role: bookkeeping only, never business-truth authority.

No permission expansion is authorized in this mission.

---

## 12. Public Command Boundary

The locked Catalog public command count remains exactly nineteen.

BKR-1 may introduce a future Inventory-domain operation if required by the chosen architecture, but it must not be represented as a twentieth Catalog command.

If correction unexpectedly requires changing the Catalog public command surface, STOP and report the conflict.

---

## 13. Required Output

Create:

`communication/live/report1.98.md`

The report must be standalone and include:

1. exact latest `main` SHA reviewed;
2. source and repository evidence reviewed;
3. BKR-1 correction;
4. BKR-2 correction;
5. BKR-3 exact persistence contract;
6. BKR-4 delete-dependency amendment;
7. BKR-5 batch terminal-state contract;
8. corrected end-to-end row orchestration;
9. idempotency/key derivation map for every mutating step;
10. partial-failure and retry matrix;
11. Supabase impact map — existing/reused, amended, new;
12. Security impact map for the later Security review;
13. Build Now / Build Later / Add-on / Separate Product / Reject classification;
14. unresolved assumptions or conflicts;
15. one final verdict.

Allowed final verdicts:

- `BACKEND ARCHITECTURE CORRECTIONS READY FOR SUPABASE CONFIRMATION REVIEW`
- `BACKEND ARCHITECTURE CORRECTIONS CHANGES REQUIRED`
- `BACKEND ARCHITECTURE CORRECTIONS STOPPED — AUTHORITY OR EVIDENCE GAP`

---

## 14. Mandatory Classification

### Build Now

Preserve only already approved Build Now scope required by the Founder Workflow Reconciliation, including the minimum backend mechanisms required to implement it safely.

### Build Later

Do not pull forward:

- merchant-configurable SKU formatting;
- label printing;
- batch/lot/expiry expansion;
- unit conversions;
- historical unlinked Inventory reconciliation tooling unless separately authorized.

### Add-on

None unless already approved elsewhere; do not invent external services.

### Separate Product

None.

### Reject

Continue to reject:

- merged Catalog/Inventory truth;
- direct current-stock writes;
- silent duplicate creation/merge/linking;
- silent post-history linking contrary to D-047;
- silent D-068 price reinterpretation;
- support-row flags used as a substitute for durable operation idempotency;
- fixed link-confirm idempotency key reused across different preview tokens;
- service-role Product Truth mutation;
- Manager/Employee permission expansion for convenience;
- cascade deletion of import audit-adjacent evidence;
- twentieth public Catalog command without explicit reopening;
- parser-gate bypass.

---

## 15. Stop Rules

STOP and report rather than inventing authority if:

- BKR-1 cannot be solved without changing approved Inventory permission authority;
- the correction requires a twentieth public Catalog command;
- D-047 cannot be preserved;
- D-068 cannot be preserved;
- tenant isolation cannot be expressed with fail-closed constraints/RLS;
- a new external service becomes mandatory;
- Product Truth would need to change;
- the parser/runtime gate would need to be bypassed;
- repository evidence materially contradicts the merged Supabase review in a way that changes Founder-facing behaviour.

---

## 16. Explicitly Not Authorized

This mission does not authorize:

- application implementation;
- dependency changes;
- database migrations;
- Supabase DDL/DML;
- test-project mutation;
- production mutation;
- RLS/grant mutation;
- service-role expansion;
- Lovable mutation/publish/deploy;
- domain cutover;
- Product Truth mutation;
- D-023 canonical amendment activation;
- permission expansion;
- parser runtime redesign;
- R2 implementation;
- external parser deployment;
- twentieth Catalog command;
- Build Lock;
- Build Mode;
- production migration.

Human review and merge remain mandatory.

---

## 17. Required Next Gate

A positive `report1.98.md` does not authorize implementation.

Mission Control must first obtain a short Supabase Backend Architecture confirmation review focused only on whether BKR-1 through BKR-5 are fully resolved.

Only after that confirmation returns a positive merged verdict may Mission Control issue the Security & Permissions Architecture review.

Security review must therefore evaluate the corrected backend contract, not superseded `report1.96.md` assumptions.

No Build Mode may be considered until both specialist gates are positive and merged, and the independent parser/runtime security gate remains separately satisfied or explicitly resolved through its own authorized path.

---

## Next logical step

Claude Code / Engineering Architecture executes this Plan Mode correction mission and returns `communication/live/report1.98.md` through the protected branch and human-review pull-request flow.