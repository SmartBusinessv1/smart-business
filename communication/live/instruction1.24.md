# SMART BUSINESS MISSION CONTROL

# Instruction 1.24 — SB-P-1.11 Stage 12C Verification Checklist Preparation

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Stage 12C — Verification Checklist Preparation

**Authorized By:** Mission Control

**Executing Room:** Claude Code

**Mission Status:** ACTIVE

---

## 1. Mission Objective

Prepare only the SB-P-1.11 Verification Checklist as the third document of the Initial Implementation Package.

The checklist must translate the four locked authorities into a precise, phase-scoped, evidence-driven verification document that can later be used to verify an authorized implementation without reopening Product Truth or engineering design.

This mission is documentation preparation only.

It does not authorize implementation, pasting into Lovable, a Founder Lovable Brief, deployment, or production activity.

---

## 2. Locked Authorities

Read and preserve the following as read-only authority:

1. `docs/phase-1-mission-blueprint/active/SB-P-1.11.md` — Product Blueprint, Sections 1–21, LOCKED.
2. `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md` — Engineering Implementation Specification Version 2.2, LOCKED.
3. `docs/implementation/SB-P-1.11/engineering-contract.md` — Engineering Contract Version 1.1, LOCKED — MISSION CONTROL ACCEPTED.
4. `docs/implementation/SB-P-1.11/lovable-build-prompt.md` — Lovable Build Prompt Version 1.1, LOCKED — MISSION CONTROL ACCEPTED.

The checklist must remain subordinate to all four authorities.

If any apparent conflict is found, stop and report it. Do not resolve it by assumption, reinterpretation, or new design.

---

## 3. Authorized Output

Create only:

- `docs/implementation/SB-P-1.11/verification-checklist.md`
- `communication/live/report1.24.md`

No other file may be created, modified, renamed, moved, or deleted.

---

## 4. Required Document Status

The Verification Checklist must be marked exactly:

```text
DRAFT — MISSION CONTROL REVIEW REQUIRED
```

It must also state:

```text
APPROVAL: NOT GRANTED
LOCK: NOT AUTHORIZED
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
IMPLEMENTATION AUTHORITY: NONE
```

The checklist must not be used for live verification until it is separately reviewed, accepted, and locked by Mission Control.

---

## 5. Verification Design Principles

The checklist must:

- verify implementation against the four locked authorities;
- be phase-scoped rather than assuming all phases are implemented together;
- separate required evidence from optional commentary;
- distinguish documentary evidence, repository evidence, database evidence, runtime evidence, security evidence, and production-domain evidence;
- define clear PASS, FAIL, NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED, NOT APPLICABLE, and BLOCKED — CLARIFICATION REQUIRED outcomes;
- require evidence sufficient for an independent reviewer to reproduce or validate the result;
- reject self-attestation without supporting evidence where objective evidence is available;
- preserve human review and decision ownership;
- verify merchant dignity, clarity, safety, and AI Assistant, Not AI Judge boundaries;
- avoid inventing implementation mechanisms not present in the locked sources.

---

## 6. Mandatory Checklist Structure

The checklist must include, at minimum:

1. Document authority and lifecycle status.
2. Verification scope and named implementation phase.
3. Preconditions and required authorization evidence.
4. Repository synchronization and branch verification.
5. Exact changed-file and changed-component inventory.
6. Locked-source integrity verification.
7. Build Now and exclusion-boundary verification.
8. Phase 1 Owner-only runtime verification.
9. Phase 2a shared permission-engine gate verification.
10. Phase 2b import-scope verification.
11. Phase 3 conversational-engine gate verification.
12. Environment-gated scheduler verification.
13. Frontend route, navigation, component, and UX verification.
14. Backend schema, function, role, grant, and execution-boundary verification.
15. Command-only write verification.
16. Business isolation and server-derived scope verification.
17. Catalog and inventory separation verification.
18. Price, tax, reference-cost, D-047, and D-068 integrity verification.
19. Idempotency, audit, provenance, stale-state, rejection, and unknown-outcome verification.
20. Same-actor confirmation verification.
21. File scanning and import-safety verification.
22. Employee financial-intelligence restriction verification.
23. AI Assistant, Not AI Judge verification.
24. English, Malayalam, and Manglish UX verification.
25. Standard POS bridge and rejected custom-POS boundary verification.
26. Merchant-safe error and rejection-message verification.
27. Test execution and quality-gate verification.
28. Lovable implementation and publication verification, only when separately authorized.
29. Supabase migration, RLS, RPC, role, privilege, and environment verification.
30. Production-domain verification at `smartbusiness.teamlips.com`, only when separately authorized.
31. Phase-scoped deferred-obligation register.
32. Defect and deviation register.
33. Evidence index.
34. Final disposition and recommended next action.
35. Traceability to all four locked authorities.
36. Document change log.

---

## 7. Phase-Scoped Verification Requirement

The checklist must require the verifier to name the exact phase or gated component under review before any checks begin.

Use these groups exactly:

- Phase 1 — Owner-only core catalog implementation.
- Phase 2a — shared permission-engine activation on applicable commands and UI paths.
- Phase 2b — CSV/Excel import and correction queue.
- Phase 3 — guided WhatsApp, voice, and photo catalog intent handling.
- Environment-gated scheduler — candidate listing and scheduled-price activation worker.

The checklist must not require evidence for a later phase or gated component that was not authorized.

Every deferred obligation must be recorded exactly as:

```text
NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED
```

A deferred obligation must not be treated as a defect unless the authorization explicitly included it.

---

## 8. Command-Surface Verification

Preserve the locked 28-command surface and verify it by phase:

### Phase 1

- `create_catalog_product`
- `update_catalog_product_identity`
- `update_catalog_product_unit`
- `create_catalog_category`
- `archive_catalog_category`
- `archive_catalog_product`
- `reactivate_catalog_product`
- `delete_catalog_product`
- `record_catalog_selling_price_change`
- `schedule_catalog_selling_price`
- `cancel_scheduled_catalog_selling_price`
- `record_catalog_tax_change`
- `update_business_tax_settings`
- `record_catalog_reference_cost_change`
- `preview_catalog_inventory_link_change`
- `assign_or_replace_catalog_inventory_link`
- `remove_catalog_inventory_link`
- `get_catalog_command_outcome`
- `catalog_products_search`
- `catalog_product_read`
- `catalog_products_list_batch`

### Phase 2a

No new command names. Verify activation of the approved shared permission-engine checks on applicable existing commands only after the shared engine is separately authorized, implemented, verified, and available.

### Phase 2b

- `create_catalog_import_job`
- `stage_catalog_import_rows`
- `apply_catalog_import_valid_rows`

### Phase 3

- `create_catalog_pending_action`
- `confirm_catalog_pending_action`

### Environment-Gated Scheduler

- `list_due_catalog_price_schedule_candidates`
- `activate_catalog_price_schedule`

The checklist must verify that commands outside the authorized phase were not implemented, scaffolded, exposed, granted, deployed, or partially activated.

No alternate command name, substitute RPC, additional write command, or direct table-write path is permitted.

---

## 9. Security and Privilege Verification

For roles, identities, functions, and tables used by the authorized phase, require objective privilege inspection covering:

- Layer 1 login-capable identities used by that phase;
- Layer 2 `NOLOGIN` function-owner roles used by that phase;
- exact `EXECUTE` grants;
- exact table privileges against the locked EIS grant table;
- `PUBLIC` execute revocation for every implemented command function;
- fixed search path and schema-qualified references;
- zero direct protected-table DML for client-reachable and service identities;
- no unauthorized `SET ROLE` mechanism;
- server-derived actor and business scope;
- no cross-business information disclosure through reads, validation, imports, duplicate checks, outcomes, or error messages.

Full-package verification of all ten Layer 2 roles and both service identities is required only when all applicable phases and gated components are authorized and implemented.

---

## 10. Phase 1 Permission Verification

For Phase 1, verify that:

- every command independently verifies authenticated ownership through `businesses.owner_id`;
- no future permission flag is queried, required, simulated, hard-coded, or locally recreated;
- no temporary, duplicated, or mission-specific permission engine exists;
- Manager and Employee catalog access is not activated;
- command signatures, authorization interfaces, data structures, and UI gating remain compatible with later shared-engine activation;
- employee financial-intelligence restrictions remain preserved.

For Phase 2a, verify the eight action-specific flags and `inventory_view` dependency only after the shared permission engine is separately authorized and available.

---

## 11. Data and Integrity Verification

Require evidence for the authorized phase covering:

- business-owned catalog records and business-scoped uniqueness;
- catalog and inventory as separate records linked only through the governed link;
- no second stock ledger or catalog-owned quantity truth;
- derived stock-tracked status;
- one-to-one business-scoped product–inventory link;
- price, tax, and reference-cost histories as immutable event records;
- D-047 tenure-bounded inventory-history enforcement;
- D-068 server-authoritative preview, confirmation, stale-state comparison, and atomic commit;
- idempotency ordering before mutable-state checks;
- durable completed and rejected outcomes;
- unknown-outcome reconciliation;
- same-actor-only confirmation;
- complete audit and provenance fields;
- sale-time evidence preservation;
- archive and deletion rules;
- sale-readiness rules.

---

## 12. File, Import, and Scheduler Verification

For Phase 2b, require verification that:

- `product_image` and `import_source` require server-recorded `clean` scan status;
- `not_required` is rejected for scan-required purposes;
- scan status and purpose are rechecked at point of use;
- invalid rows are quarantined and do not create live products;
- existing records are never auto-overwritten;
- correction decisions remain explicit human actions;
- structural limits and formula-injection controls follow the locked authorities.

For the environment-gated scheduler, require verification that:

- the Pattern A external-worker design is used;
- no in-database multi-commit procedure exists;
- candidate listing occurs once per run and remains bounded and ordered;
- activation is attempted once per candidate;
- claiming is transaction-scoped only;
- no durable scheduler-claim field exists;
- the required Supabase Scheduled Edge Function or `pg_cron` plus `pg_net` capability is objectively verified;
- `catalog_scheduler_service` is properly credentialed and holds no direct protected-table DML.

If the scheduler was not authorized, mark its checks `NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED`.

---

## 13. UX and Human-Safety Verification

Require verification that:

- English, Malayalam, Manglish, and mixed-language merchant wording is preserved;
- normalization supports uniqueness without rewriting display text;
- uncertain multilingual relationships are suggestions only;
- AI never invents missing prices, legal tax treatment, permissions, or consequential decisions;
- consequential changes require clear human confirmation;
- merchant-safe messages distinguish rejection, stale state, pre-command failure, unknown outcome, and confirmed success;
- unknown outcome is never described as “nothing changed” before reconciliation;
- raw database errors, stack traces, and constraint names are not exposed to merchants;
- employee views do not expose reference cost, margin-adjacent data, protected histories, or owner controls;
- custom POS changes inside the Smart Business core are absent.

---

## 14. Evidence Requirements

For each verification item, require:

- checklist identifier;
- applicable phase or component;
- locked-source reference;
- expected result;
- verification method;
- evidence location or attachment reference;
- actual result;
- outcome status;
- verifier notes;
- defect reference when failed.

Evidence may include, where relevant:

- Git commit and pull-request references;
- exact changed-file lists;
- repository diffs;
- migration files;
- SQL privilege-inspection output;
- RLS policy inspection;
- function signatures and definitions;
- database test output;
- automated test results;
- browser runtime screenshots;
- authenticated and unauthorized access results;
- Lovable publish evidence;
- production-domain verification;
- Builder Completion Report references.

Do not accept screenshots alone when database or repository evidence is required.

---

## 15. Outcome Vocabulary

Use only these checklist outcomes:

```text
PASS
FAIL
NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED
NOT APPLICABLE
BLOCKED — CLARIFICATION REQUIRED
```

Define each outcome clearly.

A `FAIL` must identify the violated locked requirement and required correction.

A `BLOCKED — CLARIFICATION REQUIRED` outcome must stop further verification of the affected dependency without authorizing the verifier to invent a resolution.

---

## 16. Traceability Requirement

Include a consolidated traceability table mapping each checklist section to:

- Product Blueprint section or Founder Decision;
- EIS v2.2 section;
- Engineering Contract v1.1 section;
- Lovable Build Prompt v1.1 section.

Do not claim a traceability relationship that the locked sources do not support.

---

## 17. Open and Resolved EIS Dispositions

Preserve the distinction between:

- the six genuinely open dispositions in Engineering Contract §29.1; and
- the separately resolved and preserved disposition in §29.2 concerning selling-unit and price treatment upon inventory-link removal.

The §29.2 disposition remains:

```text
RESOLVED — ACCEPTED AS WRITTEN
```

It must not be treated as an open dependency, defect, or stop condition.

---

## 18. Explicit Prohibitions

Do not:

- modify any of the four locked authorities;
- modify the Founder Product Decision Record;
- create or modify a Founder Lovable Brief;
- create implementation authorization;
- paste the Lovable Build Prompt into Lovable;
- begin implementation;
- create code, frontend components, backend code, SQL, migrations, schemas, RLS policies, RPC implementations, Edge Functions, scheduler workers, tests, fixtures, or runtime prompts;
- change Lovable project state;
- change infrastructure, deployment configuration, or production data;
- create Product Truth, Founder Decision, EIS, Engineering Contract, or governance changes;
- create verification evidence for an implementation that does not exist;
- mark an item PASS without evidence;
- convert a deferred obligation into a defect;
- reopen accepted MC-VRF, MC-EC, or MC-LBP findings.

---

## 19. Completion Report Requirements

Create `communication/live/report1.24.md` containing:

- branch name;
- synchronized base `main` SHA;
- final branch commit SHA;
- pull-request number and URL;
- exact files changed;
- quality-gate results;
- concise checklist structure summary;
- phase-scoping approach;
- evidence model;
- outcome vocabulary;
- traceability approach;
- confirmation that all four locked authorities remain unchanged;
- confirmation that the §29.1 and §29.2 distinction is preserved;
- confirmation that no implementation artifacts were created;
- Product Truth change status;
- Founder decision requirement;
- Founder Lovable Brief status;
- paste-into-Lovable authority status;
- implementation-authority status;
- final disposition.

The report must distinguish the mission-branch commit from any later squash-merge commit.

---

## 20. Required Final State

At completion:

```text
PRODUCT BLUEPRINT: LOCKED — UNCHANGED
EIS VERSION 2.2: LOCKED — UNCHANGED
ENGINEERING CONTRACT VERSION 1.1: LOCKED — UNCHANGED
LOVABLE BUILD PROMPT VERSION 1.1: LOCKED — UNCHANGED
VERIFICATION CHECKLIST: DRAFT — MISSION CONTROL REVIEW REQUIRED
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
IMPLEMENTATION PACKAGE: NOT YET LOCKED AS A COMPLETE PACKAGE
IMPLEMENTATION: NOT AUTHORIZED
```

---

## 21. Branch and Review Requirements

- Pull and fast-forward synchronize the latest `origin/main` before work begins.
- Use a new protected mission branch.
- Submit the work through a pull request.
- Do not approve or merge your own pull request.
- Human review and merge are required.

---

## 22. Final Mission Boundary

This instruction authorizes preparation of the Verification Checklist only.

It does not authorize checklist acceptance, checklist lock, complete-package lock, Founder Lovable Brief preparation, paste into Lovable, implementation, deployment, or production verification.
