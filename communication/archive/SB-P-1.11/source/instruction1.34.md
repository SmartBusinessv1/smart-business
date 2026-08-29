# SMART BUSINESS MISSION CONTROL

# Instruction 1.34 — SB-P-1.11 Founder Lovable Brief Narrow Refinement Authorization

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Founder Lovable Brief Narrow Refinement

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

## 1. Mission Objective

Apply only the four Mission Control findings FLB-001 through FLB-004 to the draft SB-P-1.11 Founder Lovable Brief.

This is a documentation-only refinement mission.

It does not reopen the approved initial Phase 1 scope of exactly 19 commands.

It does not authorize pasting content into Lovable, Lovable Plan Mode, Lovable Build Mode, implementation, publishing, or deployment.

---

## 2. Authorized File Scope

Modify only:

- `docs/implementation/SB-P-1.11/founder-lovable-brief.md`

Create only:

- `communication/live/report1.34.md`

No other file may be created, modified, renamed, moved, or deleted.

If either authorized path presents an unexpected repository-state conflict, stop and report the conflict. Do not broaden scope.

---

## 3. Closed Scope — Must Not Be Reopened

The following decisions are closed and must remain unchanged:

- initial Phase 1 contains exactly 19 commands;
- the exact 19 command names remain unchanged;
- the complete locked future command surface remains 28 commands;
- Owner-only initial Phase 1;
- command-only writes;
- business isolation;
- deterministic exact and normalized matching only;
- accepted normalized-column and uniqueness design;
- archived identities remain inside the uniqueness domain;
- `system_errors` remains deferred;
- `business_tax_settings` remains one row maximum per business through `UNIQUE (business_id)`;
- D-068 preview, confirmation, token, actor, business, expected-state, single-use, replay, validity, retention, minimization, and purge-eligibility rules;
- 15-minute fixed server-controlled token validity;
- 90-day consumed-token full-metadata retention;
- 30-day expired-unconsumed full-metadata retention;
- purge execution remains separate future authority;
- merchant-facing scheduling remains excluded;
- scheduler runtime and scheduler service identity remain excluded;
- Phase 2a employee/manager access remains gated;
- Phase 2b import remains gated;
- Phase 3 conversational scope remains gated;
- no `pg_trgm`, GIN similarity indexes, fuzzy matching, phonetic matching, transliteration, or AI normalization;
- no cleanup implementation;
- no Product Truth or Founder Decision change.

---

## 4. Required Correction — FLB-001

Correct every Founder-facing statement that overstates category capability.

The approved 19-command scope supports:

- create category;
- archive category.

It does not include commands for:

- edit category;
- reactivate category;
- permanently delete category.

Use Founder-facing wording equivalent to:

> Create and archive categories. Create, edit, archive, reactivate, and—where eligible—permanently delete products.

Search the entire brief for any sentence, table cell, workflow description, summary, verification row, or closing statement that implies unsupported category editing, reactivation, or permanent deletion, and correct it.

Do not add a new category command.

---

## 5. Required Correction — FLB-002

Correct the command-group explanation.

The authoritative grouping is:

- Phase 1 command group: 21 commands;
- initial Phase 1: 19 commands after excluding the two merchant-facing scheduling commands;
- scheduler command group: 2 separate commands, excluded with scheduler runtime under the scheduler gate.

The brief must not state or imply that the two scheduler commands were part of the original 21-command Phase 1 group.

Use wording equivalent to:

> The initial scope contains 19 of the 21 Phase 1 commands. The two merchant-facing scheduling commands are excluded from Phase 1. The two separate scheduler commands and their runtime remain excluded under the scheduler gate.

Apply the correction everywhere the inaccurate grouping appears.

The exact commands remain:

Excluded from the 21-command Phase 1 group:

- `schedule_catalog_selling_price`
- `cancel_scheduled_catalog_selling_price`

Separately excluded scheduler commands:

- `list_due_catalog_price_schedule_candidates`
- `activate_catalog_price_schedule`

---

## 6. Required Correction — FLB-003

Correct the Founder Lovable Brief so that inventory-link removal is explicitly governed by the accepted D-068 two-step preview-and-confirm safeguard.

The relevant flow is:

1. `preview_catalog_inventory_link_change`
2. `remove_catalog_inventory_link` using the valid preview token

For `remove_catalog_inventory_link`, the brief must clearly preserve:

- `catalog_link_preview_tokens` involvement;
- the same initiating and confirming actor;
- server-derived business binding;
- expected-state or preview-state binding;
- 15-minute fixed server-controlled validity;
- no renewal or extension;
- invalid, expired, consumed, replayed, wrong-actor, wrong-business, and stale-state rejection;
- atomic commit behavior;
- retained audit and idempotency evidence;
- applicable D-068 verification references.

Required areas to inspect and correct include:

- the exact 19-command scope table;
- merchant workflow explanation;
- D-068 section;
- verification matrix;
- resource/table references;
- any implementation-facing future instructions.

The brief must explain in Founder-readable language that unlinking is previewed and explicitly confirmed before the product-inventory relationship changes.

Do not rename, split, combine, or add a command.

---

## 7. Required Correction — FLB-004

Remove or qualify absolute statements such as:

> It invents nothing new.

Replace them with governance-safe wording equivalent to:

> This brief is intended to restate locked requirements and accepted Mission Control dispositions. It does not have authority to create new Product Truth or implementation requirements. Any inconsistency with a locked source must be resolved in favor of the locked source.

Apply this rule throughout the brief wherever absolute claims could imply that the synthesis document is itself authoritative over the locked sources.

The brief may summarize and organize, but it may not claim independent authority.

---

## 8. Required Status and Authority Notice

The following notice must remain prominent and unchanged in meaning:

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

The refined brief must not tell the Founder to paste it into Lovable.

The refined brief must not present itself as approved, locked, accepted, implementation-ready, or implementation-authorized.

---

## 9. Required `report1.34.md`

Create `communication/live/report1.34.md` containing:

1. mission identity and authorizing instruction;
2. synchronized base `main` SHA;
3. branch name;
4. substantive commit SHA;
5. pull-request number and URL;
6. exact two-file change record;
7. confirmation that the 19-command list and count were unchanged;
8. FLB-001 correction evidence;
9. FLB-002 correction evidence;
10. FLB-003 correction evidence, including the corrected removal flow;
11. FLB-004 correction evidence;
12. confirmation that all phase gates and exclusions remain unchanged;
13. confirmation that no existing file other than the brief was modified;
14. confirmation that no implementation artifact was created;
15. confirmation that Lovable was not used and no credits were consumed;
16. Product Truth and Founder Decision status;
17. Founder Lovable Brief draft status;
18. paste, Plan Mode, Build Mode, implementation, publishing, and deployment authority status;
19. Markdown quality-gate evidence;
20. final conclusion.

The final conclusion must not grant Lovable or implementation authority.

Use:

```text
FLB-001: CORRECTED
FLB-002: CORRECTED
FLB-003: CORRECTED
FLB-004: CORRECTED

FOUNDER LOVABLE BRIEF:
REFINED DRAFT — MISSION CONTROL REVIEW REQUIRED

PASTE-INTO-LOVABLE AUTHORITY:
NONE

LOVABLE PLAN MODE AUTHORITY:
NONE

LOVABLE BUILD MODE AUTHORITY:
NONE

IMPLEMENTATION AUTHORITY:
NONE
```

---

## 10. Prohibited Work

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
- scheduler or cleanup design;
- roles or grants;
- application code;
- tests;
- implementation authorization;
- Product Blueprint;
- Founder Product Decision Record;
- EIS;
- Engineering Contract;
- Lovable Build Prompt;
- Verification Checklist;
- any prior instruction or report;
- Product Truth;
- governance sources.

Do not use Lovable Plan Mode.

Do not use Lovable Build Mode.

Do not consume Lovable credits.

Do not publish or deploy.

---

## 11. Execution and Review Requirements

- Synchronize from the latest `origin/main` before editing.
- Use a new protected mission branch.
- Preserve the exact 19-command table count.
- Run Markdown repair, lint, and validation checks on both authorized files.
- Create a pull request for human review.
- Do not approve or merge your own pull request.

---

## 12. Authority Statement

This instruction authorizes documentation refinement only.

It does not authorize implementation.

It does not authorize Lovable use.

It does not authorize publishing or deployment.

Human review and a separate explicit Mission Control decision remain required after the refinement is merged.
