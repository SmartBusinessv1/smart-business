# SMART BUSINESS MISSION CONTROL

## SB-P-1.11 — LOVABLE BUILD PROMPT REFINEMENT AUTHORIZATION

**Mission ID:** SB-P-1.11

**Stage:** 12B — Lovable Build Prompt Refinement

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

# Mission Objective

Refine only the SB-P-1.11 Lovable Build Prompt and its Stage 12B completion report to correct Mission Control findings:

- MC-LBP-001
- MC-LBP-002
- MC-LBP-003
- MC-LBP-004

This is a narrow documentation-refinement mission only.

Do not reopen any prompt content already accepted in substance.

This mission does not authorize the Verification Checklist, Founder Lovable Brief, pasting into Lovable, or implementation.

---

# Authoritative Inputs

Execute according to:

1. Locked Product Blueprint

```text
docs/phase-1-mission-blueprint/active/SB-P-1.11.md
```

2. Locked Engineering Implementation Specification Version 2.2

```text
docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md
```

3. Locked Engineering Contract Version 1.1

```text
docs/implementation/SB-P-1.11/engineering-contract.md
```

4. Existing Lovable Build Prompt draft

```text
docs/implementation/SB-P-1.11/lovable-build-prompt.md
```

5. Existing Stage 12B report

```text
communication/live/report1.21.md
```

Neither locked authority may be modified, reinterpreted, weakened, expanded, or contradicted.

---

# Authorized Changes

Modify only:

```text
docs/implementation/SB-P-1.11/lovable-build-prompt.md
communication/live/report1.21.md
```

Create only:

```text
communication/live/report1.22.md
```

No other file may be created, modified, renamed, moved, or deleted.

---

# Required Document Status

The Lovable Build Prompt must remain marked exactly:

```text
DRAFT — MISSION CONTROL REVIEW REQUIRED
```

It remains:

- not approved;
- not locked;
- not authorized for pasting into Lovable;
- without implementation authority.

---

# Required Corrections

## MC-LBP-001 — Phase 1 Permission Behaviour

Correct the Phase 1 permission instruction so it does not require unavailable permission-flag runtime checks and does not imply creation of a substitute permission engine.

The revised prompt must state clearly:

```text
During Phase 1, every command independently verifies authenticated
ownership using the existing businesses.owner_id boundary.

Command signatures, authorization interfaces, data structures, and UI
gating remain compatible with the future shared permission engine.

Do not query, require, simulate, hard-code, or locally recreate the
future action-specific permission flags during Phase 1.

The eight action-specific permission flags and inventory_view dependency
are activated only in Phase 2a after the shared permission engine is
separately authorized, implemented, verified, available, and the phase
is explicitly authorized by Mission Control.
```

Preserve:

- Owner-only Phase 1 runtime;
- no temporary or mission-specific substitute permission engine;
- default denial of employee access to owner financial intelligence;
- forward compatibility with the shared permission engine.

Do not introduce any new temporary role, permission table, hard-coded Manager flag, or local authorization model.

---

## MC-LBP-002 — Phase-Scoped Command Surface

Correct the full command-surface wording so commands are grouped by the phase or gate in which they may be implemented.

The prompt must distinguish at minimum:

### Phase 1

Only the locked commands required for:

- Owner-only catalog and category operations;
- product identity and lifecycle;
- price, tax, and reference-cost operations;
- inventory-link preview, assignment/replacement, and removal;
- protected reads and command-outcome reconciliation;
- scheduler commands only when the environment gate is satisfied and that scheduler scope is included in the specific implementation authorization.

### Phase 2a

- Do not introduce new catalog command names unless already authorized by the locked EIS.
- Activate shared permission-engine enforcement on the applicable existing commands only after the dependency and phase are separately authorized.

### Phase 2b

```text
create_catalog_import_job
stage_catalog_import_rows
apply_catalog_import_valid_rows
```

Include only the locked import-related reads or supporting boundaries already defined by the EIS.

### Phase 3

```text
create_catalog_pending_action
confirm_catalog_pending_action
```

Include only the locked channel execution and outcome-reconciliation boundary already defined by the EIS.

### Environment-Gated Scheduler Commands

```text
list_due_catalog_price_schedule_candidates
activate_catalog_price_schedule
```

The revised prompt must state:

- commands outside the currently authorized phase must not be implemented;
- they must not be scaffolded, exposed, granted, deployed, or partially activated;
- the locked command names and signatures must not be changed;
- the complete command surface remains authoritative, but execution is phase-scoped.

Do not invent a new command, alternate command name, direct table write, or substitute RPC.

---

## MC-LBP-003 — Phase-Scoped Evidence Requirements

Correct the implementation-evidence section so evidence is required for the exact phase and components actually authorized and built.

The revised prompt must state:

```text
Evidence must be complete for the phase actually authorized and built.

Evidence for a later phase, shared-system dependency, service identity,
executor role, command, or environment-gated component is not required
until that phase or component is separately authorized.

Every deferred obligation must be listed in the Builder Completion Report
as:

NOT AUTHORIZED IN THIS PHASE — NOT IMPLEMENTED
```

Examples that must be made clear:

- Phase 1 does not need to provision or verify Phase 3 channel infrastructure.
- Phase 1 does not need to provision `catalog_channel_service` unless a separately authorized component genuinely requires it.
- A phase excluding the scheduler does not need scheduler-runtime evidence.
- Phase 2b does not need evidence for unrelated channel commands or services.
- Full-package verification may require the complete execution-identity and command surface only after all applicable phases are separately authorized and completed.

Preserve the existing evidence quality standard for every component that is actually in the authorized phase.

---

## MC-LBP-004 — Open and Resolved EIS Parameter Classification

Correct every statement in the Lovable Build Prompt and `report1.21.md` that inaccurately describes all seven original EIS disposition entries as open or places all seven inside Engineering Contract Section 29.1.

Use wording equivalent to:

```text
The open dispositions preserved in Engineering Contract §29.1,
together with the separately resolved and preserved disposition in §29.2.
```

The revised documents must:

- distinguish the genuinely open dispositions in §29.1;
- preserve the selling-unit/price treatment upon inventory-link removal as resolved in §29.2;
- never describe that resolved item as open;
- never reopen or reinterpret the resolved disposition;
- update `report1.21.md` wherever its unresolved-dependencies or prompt-summary wording repeats the inaccurate classification.

---

# Accepted Content That Must Not Be Reopened

Preserve all previously accepted Lovable Build Prompt content, including:

- exact draft status and no-paste boundary;
- locked authority hierarchy;
- exact Build Now scope;
- Build Later, Add-on, Separate Product, and Reject boundaries;
- repository-first discovery;
- reuse of accepted inventory, RLS, idempotency, routing, and navigation patterns;
- Owner-only Phase 1 principle;
- shared permission-engine and conversational-engine gates;
- frontend and backend responsibilities;
- command-only protected writes;
- business isolation and server-derived scope;
- catalog and inventory separation;
- price, tax, and reference-cost integrity;
- D-047 tenure-bounded interpretation;
- D-068 preview, confirmation, and atomic commit safeguard;
- same-actor-only confirmation;
- AI Assistant, Not AI Judge boundaries;
- mandatory clean-file scanning;
- Pattern A scheduler architecture and environment gate;
- employee financial-intelligence restrictions;
- standard POS bridge boundary and rejection of custom core POS modification;
- English, Malayalam, and Manglish UX requirements;
- merchant-safe rejection, stale-state, and unknown-outcome messaging;
- explicit no-go list;
- stop-and-report behaviour;
- traceability to the three locked authorities;
- evidence quality for components actually authorized and built;
- implementation remains unauthorized.

Do not rewrite accepted content for style, brevity, preference, or optimization unless a minimal wording adjustment is strictly necessary to correct MC-LBP-001 through MC-LBP-004.

---

# Mandatory Exclusions

Do not create or modify:

- `verification-checklist.md`;
- Founder Lovable Brief;
- implementation authorization;
- Product Blueprint;
- Engineering Implementation Specification;
- Engineering Contract;
- Founder Product Decision Record;
- application code;
- frontend components;
- backend code;
- SQL;
- migrations;
- schemas;
- RLS policies;
- RPC implementations;
- Edge Functions;
- scheduler workers;
- live AI or WhatsApp prompts;
- Lovable project state;
- tests or test fixtures;
- infrastructure;
- deployment configuration;
- production data;
- governance sources;
- prior instructions;
- prior reports other than the specifically authorized correction to `report1.21.md`.

Do not paste the prompt into Lovable.

Do not begin implementation.

---

# Repository and Git Requirements

1. Start from current `main`.
2. Fetch and fast-forward synchronize before work.
3. Use a new dedicated mission branch.
4. Modify only the three authorized paths.
5. Run the repository Markdown quality gate on all changed files.
6. Run whitespace and secret-pattern checks.
7. Confirm the locked Blueprint, EIS, and Engineering Contract remain unchanged.
8. Review the final diff and verify every substantive change maps to MC-LBP-001, MC-LBP-002, MC-LBP-003, or MC-LBP-004.
9. Open a pull request for Mission Control re-review.
10. Do not approve your own pull request.
11. Do not merge your own pull request.

---

# Refinement Report Requirements

Create:

```text
communication/live/report1.22.md
```

The report must include:

- branch name;
- base `main` SHA;
- final branch commit SHA;
- pull-request number and URL;
- exact files changed;
- quality-gate results;
- correction applied for each of MC-LBP-001 through MC-LBP-004;
- exact phase-scoped command grouping used;
- exact phase-scoped evidence rule used;
- confirmation that §29.1 open dispositions and §29.2 resolved disposition are correctly separated;
- confirmation that no accepted prompt content was reopened;
- confirmation that all three locked authorities remain unchanged;
- confirmation that no implementation artifact was created;
- Product Truth change status;
- Founder decision requirement;
- paste-into-Lovable authority status;
- implementation-authority status;
- assumptions, if any;
- unresolved dependencies preserved.

Required final disposition:

```text
LOVABLE BUILD PROMPT REFINEMENT COMPLETE — MISSION CONTROL RE-REVIEW REQUIRED
```

---

# Lifecycle Boundary

After this mission:

- the Lovable Build Prompt remains a draft;
- Mission Control must re-review it;
- refinement acceptance and lock are not automatic;
- the Verification Checklist remains unauthorized;
- the Founder Lovable Brief remains unauthorized;
- paste-into-Lovable authority remains absent;
- the implementation package remains incomplete;
- implementation remains unauthorized.

Only after Mission Control accepts and locks the refined Lovable Build Prompt may a separate instruction authorize preparation of the Verification Checklist.