# SMART BUSINESS MISSION CONTROL

## SB-P-1.11 — ENGINEERING CONTRACT REFINEMENT AUTHORIZATION

**Mission ID:** SB-P-1.11

**Stage:** 12A — Engineering Contract Refinement

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

# Mission Objective

Refine only the SB-P-1.11 Engineering Contract and its Stage 12A completion report to correct Mission Control findings MC-EC-001 through MC-EC-006.

This is a narrowly scoped refinement mission.

This mission does not reopen accepted Engineering Contract content.

This mission does not authorize the Lovable Build Prompt, Verification Checklist, Founder Lovable Brief, implementation package completion, or implementation.

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

3. Current Engineering Contract draft

```text
docs/implementation/SB-P-1.11/engineering-contract.md
```

4. Stage 12A authorization

```text
communication/live/instruction1.18.md
```

5. Stage 12A completion report

```text
communication/live/report1.18.md
```

6. Mission Control review findings MC-EC-001 through MC-EC-006 recorded in the authorizing conversation.

The locked Product Blueprint and locked EIS remain read-only and authoritative.

---

# Authorized Files

Modify only:

```text
docs/implementation/SB-P-1.11/engineering-contract.md
communication/live/report1.18.md
```

Create only:

```text
communication/live/report1.19.md
```

No other file may be created, modified, renamed, moved, or deleted.

---

# Required Refinements

## MC-EC-001 — Completion Report Traceability

Correct `communication/live/report1.18.md` so that it records the actual execution evidence rather than placeholders.

It shall include, at minimum:

- the original branch commit SHA, if recoverable;
- the merged `main` commit SHA:

```text
a2785175eb5a2213c701be7f2e084d7a5176c661
```

- Pull Request number:

```text
#71
```

- Pull Request URL:

```text
https://github.com/SmartBusinessv1/smart-business/pull/71
```

Clearly distinguish the branch commit from the squash-merge commit where both are recorded.

Do not alter the substantive mission findings in `report1.18.md` except where required to make the evidence accurate.

## MC-EC-002 — Permission-Engine Sequencing

Refine the Engineering Contract so that the sequencing is explicit and non-contradictory.

The contract shall state:

### Phase 1

- runtime access remains Owner-only;
- command signatures, authorization boundaries, data structures, and UI gating must remain compatible with the future shared permission engine;
- no temporary, local, duplicated, or mission-specific substitute permission engine may be invented;
- Manager and Employee runtime enforcement must not be activated before the shared permission engine is separately authorized, implemented, verified, and available.

### Phase 2a

- action-specific Manager and Employee enforcement may be activated only through the approved shared permission engine;
- all eight EIS-defined permission flags and the additional inventory-view dependency shall then be enforced as locked.

Do not weaken employee default denial of owner financial intelligence.

## MC-EC-003 — Acceptance Wording and Conditional Dependencies

Refine the acceptance wording so that it does not imply every obligation is immediately executable.

The contract shall state that it must be precise enough for a builder to execute each separately authorized phase without reopening Product Truth or engineering design.

Any obligation marked:

- `[ENVIRONMENT VERIFICATION]`;
- `[SHARED-SYSTEM DEPENDENCY]`; or
- `[APPROVAL GATE]`

must not be implemented until its stated condition has been resolved, verified where required, and separately authorized.

## MC-EC-004 — Complete Privilege Verification Scope

Expand the acceptance and verification requirements to cover the complete execution-identity model.

Require exact privilege inspection for:

- all eight command-group-scoped Layer 2 `NOLOGIN` function-owner roles;
- `catalog_channel_executor`;
- `catalog_scheduler_executor`;
- `catalog_channel_service`;
- `catalog_scheduler_service`;
- every explicit `EXECUTE` grant;
- every table-level privilege;
- `PUBLIC` execute revocation;
- absence of direct protected-table DML for the two service identities.

The contract shall require verification of exact privilege scope, not merely role existence.

## MC-EC-005 — Parameter-Disposition Classification

Correct the internal inconsistency in the current open-parameter section.

Rename the section to:

```text
Preserved EIS Parameter Dispositions
```

or create equivalent clear subsections separating:

- open items requiring specialist review, environment verification, or Mission Control sequencing; and
- resolved items preserved as accepted.

The inventory-link-removal selling-unit/price treatment remains:

```text
RESOLVED — ACCEPTED AS WRITTEN
```

It must not be described as open and must not be reopened.

## MC-EC-006 — Authorized External-System Wording

Correct the architecture wording so that it does not prohibit the EIS-authorized external-worker boundary.

Use wording equivalent to:

> No component may introduce an external system or architectural pattern other than the service identities, external worker boundary, and integration mechanisms explicitly authorized by the locked EIS.

Do not expand the authorized external architecture.

---

# Accepted Content That Must Not Be Reopened

Preserve without substantive change:

- document authority and draft lifecycle status;
- Build Now scope;
- Build Later, Add-on, Separate Product, and Reject classifications;
- catalog and inventory separation;
- price, tax, and reference-cost integrity;
- D-047 tenure-bounded interpretation;
- D-068 server-authoritative preview, confirmation, and atomic commit safeguard;
- command-only protected writes;
- business isolation and server-derived scope;
- three-layer execution identity model;
- action-specific permissions;
- standardized audit provenance;
- idempotency and outcome reconciliation;
- same-actor-only confirmation;
- mandatory clean file scanning;
- Pattern A fixed-candidate external-worker scheduler;
- AI Assistant, Not AI Judge;
- employee default denial of owner financial intelligence;
- standard POS bridge only and rejection of custom core POS modification;
- all MC-VRF-001 through MC-VRF-010 resolutions;
- Founder Decisions D-001 through D-068;
- Product Truth;
- locked Blueprint and EIS content.

Do not introduce new Product Truth, Founder decisions, scope, architecture, permissions, dependencies, or engineering behaviour.

---

# Required Document Status

The refined Engineering Contract shall remain:

```text
DRAFT — MISSION CONTROL REVIEW REQUIRED
```

It is not approved.

It is not locked.

It carries no implementation authority.

---

# Mandatory Exclusions

Do not create or modify:

- `lovable-build-prompt.md`;
- `verification-checklist.md`;
- Founder Lovable Brief;
- implementation authorization;
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
- prompts for live AI or WhatsApp systems;
- Lovable project changes;
- tests or test fixtures;
- infrastructure;
- deployment configuration;
- production data;
- Product Blueprint;
- EIS;
- Founder Decision Record;
- governance sources.

Do not begin implementation.

---

# Repository and Git Requirements

1. Start from current `main`.
2. Fetch and fast-forward synchronize before work.
3. Use a dedicated branch.
4. Modify only the three authorized paths.
5. Run the repository Markdown quality gate on every changed file.
6. Run whitespace and secret-pattern checks.
7. Confirm the locked Blueprint and locked EIS remain unchanged.
8. Open a pull request for Mission Control review.
9. Do not approve your own pull request.
10. Do not merge your own pull request.

---

# Completion Report

Create:

```text
communication/live/report1.19.md
```

The report shall include:

- branch name;
- base `main` commit;
- final branch commit SHA;
- pull-request number and URL;
- exact changed files;
- quality-gate results;
- finding-by-finding correction summary for MC-EC-001 through MC-EC-006;
- confirmation that no accepted content was reopened;
- confirmation that the locked Blueprint and EIS were unchanged;
- confirmation that no implementation artifact was created;
- Product Truth change status;
- Founder decision requirement;
- implementation-authority status;
- unresolved questions, if any.

Required final disposition:

```text
ENGINEERING CONTRACT REFINEMENT COMPLETE — MISSION CONTROL RE-REVIEW REQUIRED
```

---

# Lifecycle Boundary

After this mission:

- the Engineering Contract remains a draft;
- Mission Control must re-review MC-EC-001 through MC-EC-006 only;
- previously accepted contract content remains accepted in substance and must not be reopened without a new verified conflict;
- the Lovable Build Prompt remains unauthorized;
- the Verification Checklist remains unauthorized;
- the Stage 12 Initial Implementation Package remains incomplete;
- implementation remains unauthorized.

Only after Mission Control accepts the refined Engineering Contract may a separate instruction authorize preparation of the Lovable Build Prompt.
