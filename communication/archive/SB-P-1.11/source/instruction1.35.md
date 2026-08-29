# SMART BUSINESS MISSION CONTROL

# Instruction 1.35 — SB-P-1.11 Founder Lovable Brief Acceptance and Lock Authorization

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Founder Lovable Brief Acceptance and Lock

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

## 1. Mission Objective

Accept and lock the refined SB-P-1.11 Founder Lovable Brief as the approved Founder-facing handoff document for the initial Phase 1 scope of exactly 19 commands.

This is a documentation-only acceptance-and-lock mission.

It does not authorize the brief to be pasted into Lovable.

It does not authorize Lovable Plan Mode.

It does not authorize Lovable Build Mode.

It does not authorize implementation, publishing, or deployment.

---

## 2. Accepted Document

The document eligible for acceptance and lock is:

`docs/implementation/SB-P-1.11/founder-lovable-brief.md`

Acceptance is based on the refined version merged through PR #103 and reviewed by Mission Control after correction of FLB-001 through FLB-004.

---

## 3. Authorized File Scope

Modify only:

`docs/implementation/SB-P-1.11/founder-lovable-brief.md`

Create only:

`communication/live/report1.35.md`

No other file may be created, modified, renamed, moved, or deleted.

If either authorized path presents an unexpected repository-state conflict, stop and report the conflict instead of widening scope.

---

## 4. Required Lock Metadata

Update the Founder Lovable Brief to show the following exact lifecycle state prominently near the beginning and in its final status section:

```text
FOUNDER LOVABLE BRIEF STATUS:
LOCKED — MISSION CONTROL ACCEPTED

MISSION CONTROL ACCEPTANCE:
GRANTED

DOCUMENT LOCK:
ACTIVE

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

The document must no longer describe itself as a draft or as awaiting Mission Control review.

Do not add language implying that lock status grants execution authority.

---

## 5. Meaning of the Lock

The lock means:

1. The Founder Lovable Brief is the approved Founder-facing restatement of the locked SB-P-1.11 package and accepted readiness dispositions.
2. Its approved initial Phase 1 scope is exactly 19 commands.
3. Its phase gates, exclusions, security boundaries, data-integrity boundaries, D-068 safeguards, and verification expectations are accepted as documented.
4. Future modification requires a new Mission Control authorization.
5. The brief remains subordinate to higher-authority locked sources. Any future discovered inconsistency must be resolved in favor of the higher-authority source through a separately authorized correction mission.

The lock does not mean:

- implementation authorization;
- paste authority;
- Plan Mode authority;
- Build Mode authority;
- permission to consume Lovable credits;
- permission to create SQL, migrations, schema objects, code, tests, workers, or integrations;
- permission to publish or deploy.

---

## 6. Scope That Must Remain Unchanged

Do not alter the exact 19-command list or count.

Do not add, remove, rename, combine, split, or infer any command.

The accepted initial Phase 1 remains Owner-only and includes exactly the currently documented 19 commands.

The following remain excluded:

- `schedule_catalog_selling_price`;
- `cancel_scheduled_catalog_selling_price`;
- `list_due_catalog_price_schedule_candidates`;
- `activate_catalog_price_schedule`;
- merchant-facing scheduling controls;
- scheduler worker and scheduler service identity;
- `pg_cron` and `pg_net` activation;
- Phase 2a employee/manager access;
- Phase 2b import scope;
- Phase 3 conversational scope;
- `pg_trgm`, similarity/GIN indexes, fuzzy matching, phonetic matching, transliteration, and AI normalization;
- discretionary performance indexes;
- token cleanup or purge implementation;
- the deferred shared `system_errors` capability.

---

## 7. Boundaries That Must Remain Unchanged

Preserve without reinterpretation:

- Owner-only initial Phase 1;
- command-only writes;
- business isolation;
- server-derived actor and business scope;
- deterministic exact and normalized matching only;
- normalized comparison columns and named business-scoped unique constraints;
- SKU and barcode internal-spacing preservation;
- archived identity reservation;
- `business_tax_settings UNIQUE (business_id)`;
- `system_errors` deferral;
- D-068 two-step preview-and-confirm flow for assignment, replacement, and removal;
- same-actor confirmation;
- business binding;
- expected-state binding;
- 15-minute fixed server-controlled validity;
- no renewal;
- invalid, expired, consumed, replayed, wrong-actor, wrong-business, and stale-state rejection;
- atomic commit and idempotency evidence;
- 90-day consumed-token full-metadata retention;
- 30-day expired-unconsumed full-metadata retention;
- immediate raw-token minimization on consumption;
- immediate logical unusability at expiry;
- future-authorized purge execution only;
- all verification and stop conditions currently documented.

---

## 8. Source-Precedence Statement

Retain or strengthen the following governance boundary without changing its meaning:

> This brief is intended to restate locked requirements and accepted Mission Control dispositions. It does not have authority to create new Product Truth or implementation requirements. Any inconsistency with a locked source must be resolved in favor of the locked source.

The locked brief is an approved handoff document, not a replacement for the Product Blueprint, Founder Product Decision Record, EIS, Engineering Contract, Lovable Build Prompt, or Verification Checklist.

---

## 9. Prohibited Changes

Do not change:

- merchant-facing functionality descriptions except where strictly necessary to replace draft lifecycle wording with lock lifecycle wording;
- the 19-command scope table;
- command purposes, actors, resources, or verification references;
- phase-group explanations;
- phase gates or exclusions;
- D-068 behavior;
- retention periods;
- database design;
- Product Truth;
- Founder Decisions;
- higher-authority locked sources;
- implementation instructions beyond lifecycle-status wording.

Do not introduce new architecture, policy, feature scope, UI behavior, data model, security rule, or verification requirement.

---

## 10. Report 1.35 Requirements

Create:

`communication/live/report1.35.md`

The report must include:

1. Mission identity and authorizing instruction.
2. Synchronized base `main` SHA.
3. Mission branch name.
4. Substantive commit SHA.
5. Pull-request number and URL.
6. Exact two-file change record.
7. Confirmation that the brief status changed from refined draft to locked and accepted.
8. Confirmation that the exact 19-command scope remained unchanged.
9. Confirmation that all phase gates and exclusions remained unchanged.
10. Confirmation that all D-068, security, retention, business-isolation, and database-integrity boundaries remained unchanged.
11. Confirmation that no implementation artifact was created.
12. Confirmation that Lovable was not used and no credits were consumed.
13. Product Truth and Founder Decision status.
14. Paste, Plan Mode, Build Mode, implementation, publishing, and deployment authority status.
15. Markdown repair, lint, and validation evidence.
16. Final lock conclusion.

The final conclusion must state exactly:

```text
FOUNDER LOVABLE BRIEF:
LOCKED — MISSION CONTROL ACCEPTED

MISSION CONTROL ACCEPTANCE:
GRANTED

DOCUMENT LOCK:
ACTIVE

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

---

## 11. Prohibited Artifacts and Actions

Do not create or modify:

- SQL;
- migrations;
- schemas;
- tables;
- columns;
- constraints;
- indexes;
- RLS policies;
- RPCs;
- functions;
- triggers;
- workers;
- scheduler or cleanup mechanisms;
- roles or grants;
- application code;
- tests;
- implementation authorization;
- paste authorization.

Do not use Lovable Plan Mode.

Do not use Lovable Build Mode.

Do not consume Lovable credits.

Do not paste the brief into Lovable.

Do not publish or deploy.

---

## 12. Repository Workflow

1. Pull, prune, and fast-forward synchronize the latest `origin/main`.
2. Create a new protected mission branch.
3. Modify only the authorized brief.
4. Create only `report1.35.md`.
5. Run Markdown repair, lint, and validation gates on both files.
6. Commit the documentation-only changes.
7. Open a pull request to `main`.
8. Do not approve or merge your own pull request.
9. Human review and merge are required.

---

## 13. Authority State During This Mission

```text
FOUNDER LOVABLE BRIEF:
ACCEPTANCE-AND-LOCK UPDATE AUTHORIZED

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

This instruction authorizes documentation lifecycle-state changes only.
