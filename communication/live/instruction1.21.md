# SMART BUSINESS MISSION CONTROL

## SB-P-1.11 — LOVABLE BUILD PROMPT PREPARATION AUTHORIZATION

**Mission ID:** SB-P-1.11

**Stage:** 12B — Lovable Build Prompt Preparation

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

# Mission Objective

Prepare **only** the SB-P-1.11 Lovable Build Prompt as the second document of the Stage 12 Initial Implementation Package.

The prompt shall translate the locked Product Blueprint, locked EIS Version 2.2, and locked Engineering Contract Version 1.1 into a precise, phased, implementation-ready instruction for Lovable.

This mission does not authorize implementation.

This mission does not authorize preparation of the Verification Checklist or Founder Lovable Brief.

---

# Authoritative Inputs

Use all three locked authorities:

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

The Product Blueprint governs Product Truth, Founder Decisions D-001 through D-068, merchant behaviour, scope, exclusions, and approved sequencing.

The locked EIS governs architecture, technical contracts, data integrity, permissions, security, scheduler design, interfaces, testing obligations, and implementation constraints.

The locked Engineering Contract governs binding builder obligations, phase boundaries, dependencies, prohibitions, and acceptance conditions.

None of the three locked authorities may be modified, reinterpreted, weakened, expanded, or contradicted.

---

# Authorized Output

Create only:

```text
docs/implementation/SB-P-1.11/lovable-build-prompt.md
```

Create only the mission completion report:

```text
communication/live/report1.21.md
```

No other file may be created, modified, renamed, moved, or deleted.

---

# Required Document Status

The Lovable Build Prompt shall be marked exactly:

```text
DRAFT — MISSION CONTROL REVIEW REQUIRED
```

It is not approved.

It is not locked.

It carries no implementation authority.

It must not be pasted into Lovable until separately reviewed, accepted, locked, and included in a separately authorized Founder Lovable Brief.

---

# Build Prompt Purpose

The Lovable Build Prompt shall provide a controlled builder instruction that:

- implements only the separately authorized phase or phases;
- preserves all locked Product Truth and engineering boundaries;
- clearly separates Lovable/frontend responsibilities from Supabase/backend responsibilities;
- prevents Lovable from inventing architecture, permissions, schema, or business rules;
- requires repository-first work and reuse of existing approved patterns;
- protects Owner-only Phase 1 sequencing until shared permission-engine availability;
- preserves all environment verification, shared-system dependency, and approval gates;
- requires explicit human confirmation for consequential actions;
- prevents implementation drift, feature bloat, and unauthorized scope expansion;
- produces evidence suitable for the later Verification Checklist.

---

# Mandatory Build Prompt Content

The draft shall define, where applicable:

1. Mission identity and document status
2. Locked authority hierarchy
3. Exact authorized Build Now scope
4. Explicit Build Later, Add-on, Separate Product, and Reject boundaries
5. Repository-first discovery requirements
6. Existing-component and accepted-pattern reuse requirements
7. Phased implementation sequence from the locked Engineering Contract
8. Phase 1 Owner-only runtime boundary
9. Shared permission-engine and conversational-engine dependency gates
10. Lovable/frontend responsibilities
11. Supabase/backend responsibilities that Lovable must not invent or bypass
12. Command-only write boundaries
13. Business isolation and server-derived scope
14. Catalog and inventory separation
15. Price, tax, cost, D-047, and D-068 integrity requirements
16. Same-actor confirmation and AI Assistant, Not AI Judge boundaries
17. Mandatory clean-file scanning and import safeguards
18. Pattern A scheduler boundary and environment-verification gate
19. Employee financial-intelligence restrictions
20. Standard POS bridge boundary and rejection of custom core POS modification
21. UX requirements for English, Malayalam, and Manglish use
22. Error, rejection, stale-state, unknown-outcome, and merchant-safe messaging behaviour
23. Explicit no-go list
24. Required implementation evidence and Builder Completion Report expectations
25. Stop conditions requiring Mission Control clarification
26. Reminder that the prompt itself does not authorize implementation
27. Traceability to the locked Blueprint, EIS, and Engineering Contract

---

# Prompt Design Requirements

The prompt must be:

- directly pasteable into Lovable after later approval;
- phased and implementation-ready;
- precise enough to prevent independent reinterpretation;
- explicit about what Lovable may and may not change;
- explicit about files, routes, components, database boundaries, and evidence where supported by the locked sources;
- free of fabricated file paths, schema details, dependencies, or runtime capabilities not supported by the locked sources or repository discovery;
- designed to stop and report rather than guess when an environment fact, dependency, or approval gate is unresolved.

The prompt must instruct Lovable to inspect the current repository before proposing changes and to preserve existing working authentication, routing, business workspace, and accepted prior mission behaviour.

---

# Mandatory Preservation Requirements

Preserve without reopening:

- locked Product Blueprint;
- locked EIS Version 2.2;
- locked Engineering Contract Version 1.1;
- Founder Decisions D-001 through D-068;
- MC-VRF-001 through MC-VRF-010;
- MC-EC-001 through MC-EC-006;
- D-047 tenure-bounded interpretation;
- D-068 preview, confirmation, and atomic commit safeguard;
- catalog and inventory separation;
- command-only writes;
- action-specific permissions;
- Phase 1 Owner-only runtime sequencing;
- no substitute permission engine;
- same-actor-only confirmation;
- mandatory clean file scanning;
- server-derived business scope;
- Pattern A external-worker scheduler;
- human decision ownership;
- AI Assistant, Not AI Judge;
- Ask CFO as clarity, not authority;
- employee permission boundaries;
- standard POS bridge only;
- rejection of custom POS modifications inside the Smart Business core platform;
- product domain `smartbusiness.teamlips.com`;
- `/survey` deprecation in favour of `/start`.

---

# Mandatory Exclusions

Do not create or modify:

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
- Engineering Contract;
- Founder Product Decision Record;
- governance sources;
- prior mission reports or instructions.

Do not begin implementation.

---

# Repository and Git Requirements

1. Start from current `main`.
2. Fetch and fast-forward synchronize before work.
3. Use a dedicated mission branch.
4. Modify only the two authorized paths.
5. Run the repository Markdown quality gate on both files.
6. Run whitespace and secret-pattern checks.
7. Confirm all three locked authorities remain unchanged.
8. Open a pull request for Mission Control review.
9. Do not approve your own pull request.
10. Do not merge your own pull request.

---

# Completion Report Requirements

Create:

```text
communication/live/report1.21.md
```

Include:

- branch name;
- base `main` SHA;
- final branch commit SHA;
- pull-request number and URL;
- exact changed files;
- quality-gate results;
- confirmation that only authorized files changed;
- confirmation that the locked Blueprint was not modified;
- confirmation that the locked EIS was not modified;
- confirmation that the locked Engineering Contract was not modified;
- concise Lovable Build Prompt summary;
- phased structure used;
- traceability approach;
- assumptions made, if any;
- unresolved dependencies or environment questions preserved;
- Product Truth change status;
- Founder decision requirement;
- implementation-authority status.

Required final disposition:

```text
LOVABLE BUILD PROMPT DRAFT COMPLETE — MISSION CONTROL REVIEW REQUIRED
```

---

# Lifecycle Boundary

After this mission:

- the Engineering Contract remains locked at Version 1.1;
- the Lovable Build Prompt remains a draft;
- Mission Control must review it;
- refinement may be required;
- the Verification Checklist remains unauthorized;
- the Founder Lovable Brief remains unauthorized;
- the Stage 12 Initial Implementation Package remains incomplete;
- implementation remains unauthorized.

Only after Mission Control accepts and locks the Lovable Build Prompt may a separate instruction authorize preparation of the Verification Checklist.