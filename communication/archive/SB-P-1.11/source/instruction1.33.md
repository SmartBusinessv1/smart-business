# SMART BUSINESS MISSION CONTROL

# Instruction 1.33 — SB-P-1.11 Founder Lovable Brief Preparation Authorization

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Founder Lovable Brief Preparation

**Authorized By:** Mission Control

**Mission Status:** ACTIVE UPON MERGE

**Authorization Type:** Documentation-only

---

## 1. Mission Objective

Prepare the **SB-P-1.11 Founder Lovable Brief** for the approved **initial Phase 1 scope of 19 commands**.

The brief must convert the locked Stage 12 package and the accepted pre-implementation readiness resolutions into one founder-readable, implementation-facing handoff document.

This mission authorizes documentation preparation only.

It does **not** authorize:

- pasting anything into Lovable;
- Lovable Plan Mode;
- Lovable Build Mode;
- implementation;
- SQL or migrations;
- schema changes;
- publishing or deployment.

---

## 2. Governing Sources and Authority Order

Execute according to the latest accepted versions on `main`, in this order:

1. Lighthouse Constitution.
2. Smart Business Master System Manifesto.
3. Smart Business Product Truth Map.
4. Founder Product Decisions D-001 through D-068.
5. SB-P-1.11 Product Blueprint — locked.
6. SB-P-1.11 EIS Version 2.2 — locked.
7. SB-P-1.11 Engineering Contract Version 1.1 — locked.
8. SB-P-1.11 Lovable Build Prompt Version 1.1 — locked.
9. SB-P-1.11 Verification Checklist Version 1.1 — locked.
10. Accepted readiness reports and Mission Control dispositions in `communication/live/report1.27.md` through `report1.32.md`.
11. This instruction.

When a prior report contains superseded wording, use the latest accepted Mission Control disposition.

Do not rewrite Product Truth, Founder Decisions, or locked architecture.

---

## 3. Authorized File Scope

Create only:

```text
docs/implementation/SB-P-1.11/founder-lovable-brief.md
communication/live/report1.33.md
```

Do not modify any existing file.

If either authorized path already exists on the synchronized base branch, stop and report the conflict. Do not overwrite it.

---

## 4. Approved Initial Phase 1 Scope

The Founder Lovable Brief must cover exactly the approved **19-command initial Phase 1 scope**.

The exact command names must be copied from the accepted SB-P-1.11 sources and readiness resolutions on `main`.

Do not infer, rename, combine, split, or invent command names.

The brief must include an exact command-scope table with:

| Command | Phase | Included in Initial Phase 1 | User or System Actor | Primary Purpose | Main Tables or Protected Resources | Verification Reference |
|---|---|---|---|---|---|---|

The table must contain exactly 19 included commands.

The complete locked 28-command future authority must remain preserved but must not be presented as initial implementation scope.

---

## 5. Mandatory Initial Phase 1 Boundaries

The brief must preserve all of the following:

### 5.1 Owner-only boundary

Initial Phase 1 is Owner-only.

Do not introduce employee access, staff roles, delegated catalogue authority, or permission-engine assumptions.

### 5.2 Command-only writes

All catalogue writes occur through authorized commands.

Do not authorize direct client table writes.

### 5.3 Business isolation

All relevant data and command execution remain business-scoped.

Cross-business existence, state, or error detail must not leak.

### 5.4 Deterministic matching only

Initial Phase 1 uses deterministic exact and normalized matching only.

Do not include:

- `pg_trgm`;
- GIN similarity indexes;
- fuzzy matching;
- phonetic matching;
- transliteration;
- AI normalization;
- uncertain-match automation.

### 5.5 Normalized uniqueness

Preserve the accepted normalized comparison-column design:

```text
catalog_products.name_normalized
catalog_products.sku_normalized
catalog_products.barcode_normalized
catalog_categories.name_normalized
```

Preserve the named business-scoped composite uniqueness model and archived identity reservation.

SKU and barcode must preserve internal spacing exactly.

### 5.6 `system_errors`

Do not create, reference, or substitute a catalogue-specific `system_errors` table in initial Phase 1.

Initial Phase 1 relies on:

- `catalog_write_idempotency_keys`;
- transaction rollback;
- structured database errors;
- existing repository logging.

The shared generic `system_errors` capability belongs to a separate future shared-infrastructure mission.

### 5.7 D-068 preview-token safeguard

Preserve:

- preview before confirmation;
- same-actor confirmation;
- business binding;
- expected-state binding;
- single-use enforcement;
- replay rejection;
- 15-minute fixed server-controlled validity;
- no renewal or extension;
- 90-day consumed-token full-metadata retention;
- 30-day expired-unconsumed full-metadata retention;
- immediate raw-token minimization on consumption;
- immediate logical unusability at expiry;
- future-authorized cleanup for physical expiry minimization and purge execution;
- durable audit-only minimization after the full-metadata period.

Do not claim that automated cleanup or purge currently exists.

### 5.8 Tax-settings singleton

Preserve:

```text
business_id NOT NULL
UNIQUE (business_id)
one row maximum per business
```

Do not invent an upsert algorithm.

---

## 6. Mandatory Exclusions From Initial Phase 1

The brief must clearly list and exclude all of the following.

### 6.1 Merchant-facing scheduling and scheduler runtime

Exclude:

```text
schedule_catalog_selling_price
cancel_scheduled_catalog_selling_price
list_due_catalog_price_schedule_candidates
activate_catalog_price_schedule
```

Also exclude:

- merchant-facing scheduling controls;
- scheduler worker;
- scheduler service identity;
- scheduled runtime activation;
- `pg_cron` activation;
- `pg_net` activation.

Scheduling remains approved future Product Truth but is not part of initial Phase 1.

### 6.2 Phase 2a

Do not include employee or delegated access until the shared permission engine exists and is separately authorized.

### 6.3 Phase 2b

Exclude bulk import, correction queues, import-specific commands, import tables, and import indexes.

### 6.4 Phase 3

Exclude conversational execution, conversational confirmation, channel pending actions, channel confirmation receipts, and all shared conversational-engine dependencies.

### 6.5 Performance indexes

Exclude discretionary performance indexes, similarity indexes, and runtime-evidence-dependent tuning not fixed by the accepted minimum integrity matrix.

### 6.6 Cleanup implementation

Do not design or authorize a cleanup worker, scheduler, cron job, Edge Function, RPC, SQL function, or equivalent token-purge mechanism.

---

## 7. Required Founder Lovable Brief Structure

The brief must contain these sections in this order:

1. Document identity and status.
2. Founder-facing purpose.
3. What this initial Phase 1 delivers for the merchant.
4. What this initial Phase 1 deliberately does not deliver.
5. Locked sources and authority hierarchy.
6. Exact 19-command scope table.
7. Merchant experience and human workflow.
8. Data model and integrity boundaries.
9. Authorization, RLS, and business-isolation boundaries.
10. Command-only write model and idempotency.
11. Search and normalization rules.
12. D-068 preview, confirmation, token, and audit lifecycle.
13. Error, rollback, and observability boundaries.
14. Phase gates and excluded future scope.
15. Lovable execution instructions for a future authorized implementation run.
16. Required verification evidence.
17. Stop conditions and escalation rules.
18. Authority status.

---

## 8. Founder-Readable Requirements

The brief must be understandable to the Founder without weakening technical precision.

For each major technical boundary, explain:

- what the merchant experiences;
- why the rule protects clarity, dignity, trust, or financial integrity;
- what Lovable must do;
- what Lovable must not do;
- what evidence must prove completion.

Use direct, operational language.

Do not turn the brief into a general product essay.

Do not repeat long source passages.

---

## 9. Future Lovable Execution Instructions

The brief may contain implementation-facing instructions for a **future separately authorized Lovable run**, but it must display all of these status statements prominently:

```text
FOUNDER LOVABLE BRIEF STATUS:
DRAFT — MISSION CONTROL REVIEW REQUIRED

PASTE-INTO-LOVABLE AUTHORITY:
NONE

LOVABLE PLAN MODE AUTHORITY:
NONE

LOVABLE BUILD MODE AUTHORITY:
NONE

IMPLEMENTATION AUTHORITY:
NONE

PUBLISHING OR DEPLOYMENT AUTHORITY:
NONE
```

The brief must not tell the Founder to paste it into Lovable now.

The brief must not contain language that silently activates Build Mode.

---

## 10. Verification Mapping

Every included command and every major boundary must map to the locked Verification Checklist Version 1.1 or to a named accepted readiness disposition.

The brief must include a verification matrix with:

| Scope Item | Required Evidence | Checklist or Report Reference | Pass Condition | Stop Condition |
|---|---|---|---|---|

Do not invent a new verification standard.

Do not claim live verification has occurred.

---

## 11. Stop Conditions

Stop and report instead of guessing if:

- the exact 19-command list cannot be established from accepted sources;
- two accepted sources conflict;
- a required exact field, constraint, command, or verification rule remains unsupported;
- an authorized output path already exists;
- preparing the brief would require changing a locked source;
- the brief would require a new Founder Product Decision;
- a database environment fact is required but unavailable;
- implementation authority would be needed to complete the requested documentation.

Record the exact conflict or missing authority in `report1.33.md`.

---

## 12. Prohibited Actions

Do not:

- modify any existing file;
- create any file other than the two authorized outputs;
- modify Product Truth or Founder Decisions;
- modify the Product Blueprint, EIS, Engineering Contract, Lovable Build Prompt, or Verification Checklist;
- create implementation authorization;
- create SQL, migrations, schemas, tables, columns, constraints, indexes, RLS, RPCs, functions, triggers, workers, roles, grants, code, or tests;
- use Lovable Plan Mode;
- use Lovable Build Mode;
- consume Lovable credits;
- paste content into Lovable;
- publish or deploy;
- approve or merge your own pull request.

---

## 13. Required Completion Report

Create `communication/live/report1.33.md` containing:

1. Mission identity and authorization.
2. Branch name.
3. Synchronized base `main` SHA.
4. Substantive commit SHA.
5. Pull-request number and URL.
6. Exact files changed.
7. Confirmation that the brief contains exactly 19 included commands.
8. The exact 19-command list.
9. Confirmation of all excluded commands and phases.
10. Confirmation of Owner-only scope.
11. Confirmation of command-only writes and business isolation.
12. Confirmation of normalized uniqueness and archived identity reservation.
13. Confirmation of `system_errors` deferral.
14. Confirmation of D-068 token parameters and future purge authority.
15. Confirmation that no existing file or locked source was modified.
16. Confirmation that no implementation artifact was created.
17. Confirmation that Lovable was not used.
18. Product Truth and Founder Decision status.
19. Founder Lovable Brief status.
20. Paste, Plan Mode, Build Mode, implementation, publishing, and deployment authority status.
21. Markdown quality-gate results.
22. Final conclusion and any stop condition encountered.

---

## 14. Final Required Status

If the brief is completed without unresolved conflict, conclude `report1.33.md` with:

```text
FOUNDER LOVABLE BRIEF:
PREPARED — MISSION CONTROL REVIEW REQUIRED

INITIAL PHASE 1 COMMAND SCOPE:
19 COMMANDS — DOCUMENTED

PASTE-INTO-LOVABLE AUTHORITY:
NONE

LOVABLE PLAN MODE AUTHORITY:
NONE

LOVABLE BUILD MODE AUTHORITY:
NONE

IMPLEMENTATION AUTHORITY:
NONE

PUBLISHING OR DEPLOYMENT AUTHORITY:
NONE
```

Do not mark the Founder Lovable Brief locked, approved, accepted, or implementation-authorized.

---

## 15. Branch, Pull Request, and Human Review

Use a new protected mission branch and pull request.

Run Markdown repair, lint, and validation gates on both authorized outputs.

The executing agent must not approve or merge its own pull request.

Human review and merge are mandatory.
