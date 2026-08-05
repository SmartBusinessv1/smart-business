# SMART BUSINESS MISSION CONTROL

# SB-P-1.11 — Phase 1 Pre-Implementation Readiness Refinement Authorization

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Phase 1 Pre-Implementation Readiness Resolution — Narrow Refinement

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

## 1. Purpose

Authorize Claude Code to correct only the four specific deficiencies identified in Mission Control's review of `communication/live/report1.27.md`.

This is a documentation-only refinement mission.

It does not authorize implementation, live verification, Lovable Build Mode, or modification of any locked source.

---

## 2. Authorized Files

Claude Code may modify only:

- `communication/live/report1.27.md`

Claude Code may create only:

- `communication/live/report1.28.md`

No other file may be created, modified, renamed, moved, or deleted.

---

## 3. Authorized Corrections

Correct only the following matters.

### 3.1 Fixed `system_errors` Disposition

Replace any unresolved alternative or discretionary wording with the following Mission Control disposition:

```text
SYSTEM_ERRORS DISPOSITION:

DEFER FROM INITIAL PHASE 1.

Do not create system_errors under SB-P-1.11 initial Phase 1.
Do not invent a catalog-specific error table.
Do not reference a nonexistent system_errors table at runtime.

For initial Phase 1, use the locked catalog_write_idempotency_keys
outcome-of-record, standard transaction rollback, structured database
errors, and existing repository logging only.

The generic shared system_errors capability requires a separate
shared-infrastructure mission before cross-mission reuse.
```

Record Matter 1 exactly as:

```text
RESOLVED — SEPARATE PREREQUISITE MISSION REQUIRED FOR SHARED SYSTEM_ERRORS,
BUT NOT REQUIRED BEFORE INITIAL PHASE 1
```

The refinement must make clear that this does not block initial Phase 1.

Do not create a shared-infrastructure mission under this authorization.

### 3.2 Exact Minimum Phase 1 Index Matrix

Add a complete, object-by-object matrix for every table included in initial Phase 1.

The matrix must use these columns:

| Table | Constraint or Index Name | Exact Columns or Expression | UNIQUE or Non-Unique | Purpose | Locked-Source Basis | Initial Phase 1 or Deferred |
|---|---|---|---|---|---|---|

The matrix must:

- enumerate every integrity-enforcing unique constraint required for initial Phase 1;
- enumerate composite `UNIQUE (id, business_id)` constraints wherever required for cross-business foreign-key integrity;
- state exact normalized business-scoped uniqueness columns or expressions for product name, SKU, barcode, and category;
- distinguish table constraints from separately created indexes;
- exclude Phase 2b-only objects;
- exclude Phase 3-only objects;
- exclude scheduler-only objects and indexes;
- exclude `pg_trgm`, GIN, similarity, and uncertain-match indexes;
- defer discretionary query-performance indexes until database-specialist review or runtime evidence;
- rely only on locked-source and repository evidence;
- clearly label any inference;
- avoid inventing columns, expressions, or object names not supported by locked sources.

If the locked sources do not provide enough information to state an exact object, column, expression, or name, record that row as:

```text
BLOCKED — LOCKED SOURCE DOES NOT DEFINE THE EXACT IMPLEMENTATION DETAIL
```

Do not fill a source gap through assumption.

The final disposition for Matter 3 must be one of:

```text
RESOLVED — EXACT MINIMUM PHASE 1 INDEX MATRIX ESTABLISHED
```

or

```text
PARTIALLY RESOLVED — NAMED MATRIX DETAILS REQUIRE DATABASE SPECIALIST REVIEW
```

### 3.3 Merchant-Facing Scheduling Disablement

Clarify that the initial Phase 1 implementation authorization must exclude:

- merchant-facing scheduled-price creation controls;
- merchant-facing scheduled-price cancellation controls;
- `schedule_catalog_selling_price`;
- `cancel_scheduled_catalog_selling_price`;
- `list_due_catalog_price_schedule_candidates`;
- `activate_catalog_price_schedule`;
- scheduler worker;
- scheduler service identity;
- scheduled runtime activation;
- `pg_cron` and `pg_net` activation.

Until the scheduler is separately authorized and operational, the product must not allow a merchant to create a future-price schedule that appears capable of automatic activation.

Record the Matter 4 disposition exactly as:

```text
RESOLVED — EXCLUDE SCHEDULER AND MERCHANT-FACING SCHEDULING FROM INITIAL PHASE 1
```

Preserve the locked 28-command surface as the complete future authoritative surface. This refinement changes only which commands are authorized in the initial Phase 1 implementation.

### 3.4 Command-Name Typo

Replace every incorrect occurrence of:

```text
cancel_catalog_scheduled_selling_price
```

with the locked command name:

```text
cancel_scheduled_catalog_selling_price
```

Verify that no incorrect variant remains in `report1.27.md` or `report1.28.md`.

---

## 4. Accepted Findings That Must Not Be Reopened

Preserve the accepted conclusions for:

- Matter 2 — `pg_trgm` threshold is not required for initial Phase 1;
- initial Phase 1 uses deterministic exact and normalized matching only;
- similarity-assisted suggestions remain deferred pending specialist recommendation;
- Matter 5 — later Verification Checklist lock supersedes Lovable Build Prompt §26 lifecycle wording only;
- all other Lovable Build Prompt §26 controls remain effective;
- Stage 12 package is complete and locked;
- no Founder Lovable Brief exists yet;
- paste-into-Lovable authority remains separate;
- implementation authority remains none;
- Phase 2a remains gated by the shared permission engine;
- Phase 3 remains gated by the shared conversational engine;
- no Product Truth change is required;
- no Founder Decision change is required;
- Engineering Contract §29.2 remains `RESOLVED — ACCEPTED AS WRITTEN`.

Do not reopen the Product Blueprint, EIS, Engineering Contract, Lovable Build Prompt, Verification Checklist, Founder Product Decision Record, or prior accepted Mission Control findings.

---

## 5. Required Consolidated Readiness Matrix Update

Update the consolidated five-matter readiness matrix in `report1.27.md` so it reflects:

| Matter | Required Final State |
|---|---|
| `system_errors` | Separate shared-infrastructure mission required; not an initial Phase 1 blocker |
| `pg_trgm` threshold | Not required for initial Phase 1; uncertain-match suggestions disabled |
| Phase 1 index set | Exact minimum matrix established, or named unresolved details explicitly blocked |
| Scheduler | Scheduler and merchant-facing scheduling excluded from initial Phase 1 |
| Build Prompt §26 | Lifecycle wording superseded only |

The report must not state that all five matters are resolved unless the exact index matrix is fully supported.

---

## 6. Required `report1.28.md` Content

Create `communication/live/report1.28.md` containing:

1. Mission identity and authorizing instruction.
2. Branch name.
3. Synchronized base `main` SHA.
4. Substantive branch commit SHA.
5. Pull-request number and URL.
6. Exact files changed.
7. Quality-gate results.
8. Correction applied for fixed `system_errors` disposition.
9. Exact minimum Phase 1 index matrix summary and row count.
10. Any matrix row blocked because locked sources lacked exact detail.
11. Confirmation that `pg_trgm`/GIN and discretionary performance indexes remain deferred.
12. Confirmation that scheduler and merchant-facing scheduling are excluded from initial Phase 1.
13. Confirmation that the locked command name is `cancel_scheduled_catalog_selling_price` and the incorrect variant is absent.
14. Confirmation that accepted Matter 2 and Matter 5 conclusions were not reopened.
15. Confirmation that no existing file other than `report1.27.md` was modified.
16. Confirmation that no locked source was modified.
17. Confirmation that no implementation artifact was created.
18. Confirmation that Lovable Build Mode and Lovable Plan Mode were not used.
19. Product Truth change status.
20. Founder Decision requirement.
21. Founder Lovable Brief status.
22. Paste-into-Lovable authority status.
23. Implementation-authority status.
24. Final Phase 1 readiness conclusion.

The final conclusion must be exactly one of:

```text
PHASE 1 READINESS RESOLUTION COMPLETE — FOUNDER LOVABLE BRIEF MAY BE PREPARED
```

```text
PHASE 1 READINESS PARTIALLY RESOLVED — NAMED INDEX DETAILS REQUIRE SPECIALIST REVIEW
```

```text
PHASE 1 READINESS BLOCKED — LOCKED-SOURCE CONFLICT FOUND
```

---

## 7. Prohibitions

Do not:

- modify any locked document;
- modify any prior report other than `report1.27.md`;
- modify any prior instruction;
- create or modify the Founder Lovable Brief;
- create implementation authorization;
- create application code;
- create frontend components;
- create backend code;
- create SQL or migration files;
- create schemas, tables, constraints, indexes, roles, grants, RLS policies, RPCs, functions, triggers, or Edge Functions;
- create scheduler workers;
- change Lovable project state;
- use Lovable Build Mode;
- use Lovable Plan Mode;
- install or modify dependencies;
- alter infrastructure or configuration;
- publish or deploy;
- modify production data;
- change Product Truth;
- create or modify Founder Decisions;
- change governance sources;
- expand investigation beyond the four authorized corrections.

---

## 8. Git and Review Requirements

Claude Code must:

1. Fetch, prune, and fast-forward synchronize the latest `origin/main`.
2. Create a new protected mission branch.
3. Modify only `communication/live/report1.27.md`.
4. Create only `communication/live/report1.28.md`.
5. Run the repository Markdown quality gate on both files.
6. Verify the exact changed-file list.
7. Open a pull request against `main`.
8. Provide a completion report.
9. Not approve or merge its own pull request.

Human review and merge are required.

---

## 9. Authority Status

```text
PRODUCT TRUTH CHANGE: NONE
FOUNDER DECISION REQUIRED: NO
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE BUILD MODE: PROHIBITED
LOVABLE PLAN MODE: PROHIBITED
IMPLEMENTATION AUTHORITY: NONE
```

---

## 10. Completion Condition

This refinement mission is complete only when:

- `report1.27.md` contains the fixed Mission Control dispositions;
- the exact minimum Phase 1 index matrix is present or explicitly identifies unsupported exact details;
- merchant-facing scheduling is clearly excluded from initial Phase 1;
- the scheduler command-name typo is corrected everywhere;
- `report1.28.md` records evidence of compliance;
- exactly the two authorized files are changed;
- no locked or implementation artifact is modified or created;
- the pull request is ready for independent human review.
