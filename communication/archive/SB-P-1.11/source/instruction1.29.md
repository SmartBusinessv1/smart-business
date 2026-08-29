# SMART BUSINESS MISSION CONTROL

# SB-P-1.11 — DATABASE SPECIALIST RESOLUTION MISSION

**Instruction ID:** instruction1.29

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Phase 1 Database Constraint Resolution

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

## 1. Mission Objective

Resolve only the six exact database-constraint details that remain blocked in the Phase 1 readiness matrix recorded in:

- `communication/live/report1.27.md`
- `communication/live/report1.28.md`

This is a documentation-only specialist resolution mission.

It does not authorize implementation.

---

## 2. Authorized Output

Create only:

- `communication/live/report1.29.md`

Do not modify any existing file.

---

## 3. Six Authorized Resolution Items

Resolve only these six blocked entries:

1. `catalog_products` — business-scoped normalized product-name uniqueness
2. `catalog_products` — business-scoped normalized SKU uniqueness
3. `catalog_products` — business-scoped normalized barcode uniqueness
4. `catalog_categories` — business-scoped normalized category-name uniqueness
5. `catalog_link_preview_tokens` — exact single-use token uniqueness column and null behavior
6. `business_tax_settings` — exact singleton or uniqueness enforcement shape and null behavior

No seventh item may be added.

---

## 4. Required Resolution Fields

For each of the six items, provide:

- exact table name;
- exact proposed constraint or unique-index name;
- exact columns or SQL expression in conceptual notation only;
- whether the object is a table constraint, partial unique index, expression unique index, generated-column uniqueness rule, or another clearly named mechanism;
- exact null behavior;
- exact normalization rule;
- case handling;
- whitespace handling;
- empty-string handling;
- whether uniqueness is scoped by `business_id`;
- whether archived or soft-deleted rows remain in the uniqueness domain;
- conflict behavior expected from write commands;
- locked-source traceability;
- repository precedent relied upon;
- technical inference, clearly labeled;
- whether a Founder decision is required;
- final specialist disposition.

Do not provide executable SQL.

---

## 5. Normalization Resolution Requirements

For the four normalized-name or identifier items, explicitly resolve:

- leading and trailing whitespace;
- repeated internal whitespace;
- case folding;
- Unicode normalization, only if supported by locked sources or an identified existing repository pattern;
- Malayalam and Manglish preservation;
- punctuation handling;
- empty strings versus `NULL`;
- optional-field behavior for SKU and barcode;
- whether one or multiple `NULL` values are allowed;
- whether inactive, archived, or deleted records continue blocking reuse;
- how the rule avoids accidental cross-business uniqueness.

Do not introduce transliteration, fuzzy matching, `pg_trgm`, phonetic matching, or AI-based normalization.

---

## 6. Locked-Source and Repository-Evidence Rules

Use only:

1. Lighthouse Constitution
2. Smart Business Product Blueprint for SB-P-1.11
3. Founder Product Decision Record D-001 through D-068
4. EIS Version 2.2
5. Engineering Contract Version 1.1
6. Lovable Build Prompt Version 1.1
7. Verification Checklist Version 1.1
8. approved Supabase architecture sources
9. existing repository migrations and accepted implementation precedents
10. `communication/live/report1.27.md`
11. `communication/live/report1.28.md`

Locked sources are read-only.

If the sources do not determine an exact detail, distinguish:

- source-derived requirement;
- repository precedent;
- database-specialist recommendation;
- unresolved Product Truth requiring Founder decision.

Do not silently convert a specialist recommendation into locked Product Truth.

---

## 7. Required Constraint Matrix

Include one final six-row matrix with exactly these columns:

| Table | Constraint / Index Name | Exact Columns or Conceptual Expression | Mechanism | Null Behavior | Normalization Rule | Business Scope | Archived / Deleted Behavior | Locked-Source Traceability | Specialist Disposition |
|---|---|---|---|---|---|---|---|---|---|

Every row must be implementation-ready in meaning while remaining non-executable.

---

## 8. Allowed Final Dispositions

Each item must conclude with exactly one of:

```text
RESOLVED — EXACT DATABASE CONSTRAINT DEFINITION ESTABLISHED
```

```text
RESOLVED — EXISTING REPOSITORY PRECEDENT ADOPTED
```

```text
BLOCKED — FOUNDER PRODUCT DECISION REQUIRED
```

```text
BLOCKED — LOCKED-SOURCE CONFLICT FOUND
```

```text
BLOCKED — DATABASE ENVIRONMENT FACT REQUIRED
```

Do not use any other final disposition wording.

---

## 9. Review Standard

The report must verify that the recommended rules preserve:

- Owner-only initial Phase 1;
- business isolation;
- command-only writes;
- no direct client DML;
- exact and normalized matching only;
- no `pg_trgm` or uncertain-match behavior;
- Malayalam and Manglish data preservation;
- D-068 atomic integrity;
- no global cross-business uniqueness;
- no substitute permission engine;
- no scheduler or merchant-facing scheduling scope;
- no Phase 2b or Phase 3 implementation;
- the complete locked 28-command future surface unchanged.

---

## 10. Prohibited Work

Do not:

- modify `report1.27.md` or `report1.28.md`;
- modify any locked source;
- create SQL;
- create migrations;
- create or alter schemas, tables, columns, generated columns, constraints, or indexes;
- create RLS policies;
- create RPCs, functions, triggers, roles, or grants;
- create application code or tests;
- create a Founder Lovable Brief;
- create implementation authorization;
- use Lovable Plan Mode;
- use Lovable Build Mode;
- publish or deploy;
- modify production data;
- change Product Truth;
- create or modify Founder Decisions;
- broaden scope beyond the six named items.

---

## 11. Completion Report Requirements

`communication/live/report1.29.md` must include:

1. branch name;
2. synchronized base `main` SHA;
3. substantive branch commit SHA;
4. pull-request number and URL;
5. exact files changed;
6. quality-gate results;
7. source inventory consulted;
8. one detailed section for each of the six items;
9. the required six-row constraint matrix;
10. confirmation that no executable SQL appears;
11. confirmation that no existing file was modified;
12. confirmation that no implementation artifact was created;
13. confirmation that Lovable was not used;
14. Product Truth change status;
15. Founder decision requirement, item by item;
16. exact unresolved blockers, if any;
17. Founder Lovable Brief status;
18. paste-into-Lovable authority status;
19. implementation-authority status.

Conclude with exactly one:

```text
DATABASE SPECIALIST RESOLUTION COMPLETE — PHASE 1 AUTHORIZATION MAY BE PREPARED
```

```text
DATABASE SPECIALIST RESOLUTION PARTIALLY COMPLETE — NAMED FOUNDER OR ENVIRONMENT BLOCKERS REMAIN
```

```text
DATABASE SPECIALIST RESOLUTION BLOCKED — LOCKED-SOURCE CONFLICT FOUND
```

---

## 12. Authority Status

```text
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE PLAN MODE: PROHIBITED
LOVABLE BUILD MODE: PROHIBITED
IMPLEMENTATION AUTHORITY: NONE
```

---

## 13. Repository Workflow

Use a new protected mission branch and pull request.

Human review and merge are required.

The author must not approve or merge its own pull request.
