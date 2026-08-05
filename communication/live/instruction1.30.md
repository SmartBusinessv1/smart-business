# SMART BUSINESS MISSION CONTROL

# SB-P-1.11 — Database Specialist Resolution Refinement Authorization

**Instruction ID:** `instruction1.30.md`

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Phase 1 Database Constraint Resolution — Narrow Refinement

**Authorized By:** Mission Control

**Executing Room:** Claude Code acting in the Database Specialist role

**Status:** ACTIVE AFTER HUMAN MERGE

---

## 1. Purpose

Authorize a documentation-only refinement of the database-specialist resolution recorded in `communication/live/report1.29.md`.

This refinement is limited to correcting Mission Control findings DBR-001 through DBR-005.

This instruction does not authorize implementation.

---

## 2. Authorized Repository Changes

Modify only:

- `communication/live/report1.29.md`

Create only:

- `communication/live/report1.30.md`

No other existing file may be modified.

No other file may be created.

---

## 3. Required Corrections

### 3.1 DBR-001 — Use One Exact Normalized-Uniqueness Mechanism

For all four normalized identity rules, adopt one mechanism only:

```text
Stored normalized comparison column
+
Named composite UNIQUE constraint
```

Use these exact normalized-column names:

- `catalog_products.name_normalized`
- `catalog_products.sku_normalized`
- `catalog_products.barcode_normalized`
- `catalog_categories.name_normalized`

Do not retain expression-index or interchangeable-mechanism alternatives.

Document the exact conceptual constraint names and column pairs.

No executable SQL may be written.

### 3.2 DBR-002 — Narrow SKU and Barcode Normalization

For SKU and barcode, record exactly:

- trim leading and trailing whitespace;
- apply case-insensitive comparison where letters exist;
- preserve internal spacing exactly;
- preserve punctuation exactly;
- convert blank-after-trim to `NULL`;
- permit multiple `NULL` values;
- enforce uniqueness only for non-`NULL` normalized values;
- preserve Malayalam and Manglish without transliteration, fuzzy matching, phonetic matching, or AI normalization.

Remove repeated-internal-whitespace collapse from SKU and barcode.

Do not describe this as an open Founder decision.

### 3.3 DBR-003 — Fix Archived-Row Uniqueness

For product name, SKU, barcode, and category name, record:

```text
Archived rows remain inside the uniqueness domain.
Archived identities remain reserved.
No active-row-only partial unique index is permitted.
```

Treat this as a fixed Mission Control implementation-integrity disposition.

Do not present an alternative partial-index design.

### 3.4 DBR-004 — Resolve Link-Preview Token Security Lifecycle

Refine the `catalog_link_preview_tokens` resolution so it separately defines:

1. token uniqueness;
2. token single-use enforcement;
3. token expiry;
4. same-actor confirmation binding;
5. business binding;
6. preview-state binding;
7. replay behavior;
8. retained audit evidence.

The corrected design must not treat token uniqueness alone as single-use enforcement.

Use a retained-row lifecycle rather than deletion-on-consumption unless a locked source directly requires deletion.

Document a conceptual retained-state model using clearly named fields or equivalent concepts, including at minimum:

- opaque token identifier;
- `business_id` binding;
- initiating actor binding;
- preview-state or expected-state binding;
- expiry timestamp;
- consumption timestamp or consumed state;
- consuming actor binding;
- invalid, expired, already-consumed, wrong-actor, wrong-business, and stale-state rejection behavior.

Preserve D-068 and the locked same-actor confirmation requirement.

Do not create executable SQL, a migration, or a new command.

If a field name is specialist-proposed rather than directly named by a locked source, label it as conceptual specialist notation.

The final item disposition must honestly reflect whether the security lifecycle is fully established.

### 3.5 DBR-005 — Limit `business_tax_settings` to Constraint Resolution

Retain only:

- `business_id` is `NOT NULL`;
- one row maximum per business;
- named `UNIQUE (business_id)` constraint;
- row persists for the business lifecycle unless later authority states otherwise.

Remove any invented `ON CONFLICT ... DO UPDATE`, upsert algorithm, or command-execution behavior.

State that the authorized command owns create-or-update behavior according to the locked command contract.

---

## 4. Required Corrected Definitions

The refined report must use these conceptual comparison rules:

### Product and category names

```text
trim leading/trailing whitespace
collapse repeated internal whitespace to one space
case-fold for deterministic comparison
preserve punctuation
preserve Malayalam and Manglish
```

### SKU and barcode

```text
trim leading/trailing whitespace
case-fold where letters exist
preserve internal spacing exactly
preserve punctuation exactly
blank-after-trim becomes NULL
multiple NULL values allowed
uniqueness applies only to non-NULL normalized values
```

### Required uniqueness scope

```text
catalog_products:
UNIQUE (business_id, name_normalized)
UNIQUE (business_id, sku_normalized)
UNIQUE (business_id, barcode_normalized)

catalog_categories:
UNIQUE (business_id, name_normalized)

business_tax_settings:
UNIQUE (business_id)
```

All merchant-facing identity uniqueness remains business-scoped, never global.

---

## 5. Required Report Structure

`report1.30.md` must include:

1. mission identity and authorization;
2. synchronized base `main` SHA;
3. branch name;
4. substantive commit SHA;
5. pull-request number and URL;
6. exact files changed;
7. correction status for DBR-001 through DBR-005;
8. final six-row corrected constraint matrix;
9. confirmation that no alternative normalized-uniqueness mechanism remains;
10. confirmation that SKU and barcode internal spacing is preserved;
11. confirmation that archived rows remain in uniqueness scope;
12. link-preview-token security-lifecycle matrix;
13. confirmation that invented tax-settings upsert behavior was removed;
14. confirmation that no locked source was modified;
15. confirmation that no executable artifact was created;
16. Lovable Plan Mode and Build Mode usage status;
17. Product Truth and Founder Decision status;
18. implementation-authority status;
19. final readiness conclusion.

The corrected six-row matrix must use exactly:

| Table | Constraint / Index Name | Exact Columns or Conceptual Expression | Mechanism | Null Behavior | Normalization Rule | Business Scope | Archived / Deleted Behavior | Locked-Source Traceability | Specialist Disposition |

The token-security lifecycle matrix must use exactly:

| Security Property | Conceptual Mechanism | Required Binding or State | Rejection Condition | Locked-Source Basis | Specialist Status |

---

## 6. Allowed Final Dispositions

For normalized identity and tax-settings items, use only:

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

For the token item, use exactly one:

```text
RESOLVED — TOKEN SECURITY LIFECYCLE DEFINITION ESTABLISHED

PARTIALLY RESOLVED — NAMED TOKEN SECURITY DETAIL REQUIRES FURTHER AUTHORITY

BLOCKED — LOCKED-SOURCE CONFLICT FOUND
```

The final report conclusion must be exactly one:

```text
DATABASE SPECIALIST RESOLUTION COMPLETE — PHASE 1 READINESS MAY PROCEED

DATABASE SPECIALIST RESOLUTION PARTIALLY COMPLETE — NAMED TOKEN SECURITY DETAIL REMAINS

DATABASE SPECIALIST RESOLUTION BLOCKED — LOCKED-SOURCE CONFLICT FOUND
```

Do not overstate resolution.

---

## 7. Preserved Decisions and Boundaries

Do not reopen or alter:

- Product Blueprint;
- Founder Product Decision Record D-001 through D-068;
- EIS Version 2.2;
- Engineering Contract Version 1.1;
- Lovable Build Prompt Version 1.1;
- Verification Checklist Version 1.1;
- `system_errors` deferral;
- deterministic exact and normalized matching for initial Phase 1;
- `pg_trgm` and similarity-suggestion deferral;
- Owner-only initial Phase 1;
- shared permission-engine gate;
- shared conversational-engine gate;
- scheduler exclusion;
- merchant-facing scheduling exclusion;
- Phase 2b and Phase 3 gates;
- fixed 28-command future surface;
- D-068;
- command-only writes;
- business isolation;
- no global merchant-identity uniqueness.

---

## 8. Prohibited Work

Do not create or modify:

- SQL;
- migrations;
- schemas;
- tables;
- columns;
- generated columns;
- constraints;
- indexes;
- RLS policies;
- RPCs;
- functions;
- triggers;
- roles;
- grants;
- application code;
- tests;
- Edge Functions;
- scheduler workers;
- Founder Lovable Brief;
- implementation authorization;
- Product Truth;
- Founder Decisions;
- governance sources.

Do not use Lovable Plan Mode.

Do not use Lovable Build Mode.

Do not publish or deploy.

---

## 9. Repository Process

Claude Code must:

1. synchronize from the merged latest `origin/main`;
2. create a new protected mission branch;
3. modify only `communication/live/report1.29.md`;
4. create only `communication/live/report1.30.md`;
5. run Markdown quality gates on both files;
6. open a pull request to `main`;
7. not approve or merge its own pull request;
8. report exact evidence.

Human review and merge are mandatory.

---

## 10. Authority Status

```text
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE PLAN MODE: PROHIBITED
LOVABLE BUILD MODE: PROHIBITED
IMPLEMENTATION AUTHORITY: NONE
```

This instruction authorizes documentation refinement only.
