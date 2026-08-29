# SMART BUSINESS MISSION CONTROL

## SB-P-1.11 — ENGINEERING CONTRACT PREPARATION AUTHORIZATION

**Mission ID:** SB-P-1.11

**Stage:** 12A — Engineering Contract Preparation

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

# Mission Objective

Prepare **only** the SB-P-1.11 Engineering Contract as the first document of the Stage 12 Initial Implementation Package.

This mission translates the locked Product Blueprint and locked Engineering Implementation Specification into a precise implementation contract for later builders.

This mission does not authorize implementation.

This mission does not authorize preparation of the Lovable Build Prompt or Verification Checklist.

---

# Governing Lifecycle Basis

Execute according to Source 18 — SB-P Mission Lifecycle and Delivery Framework.

Source 18 Stage 12 establishes:

- Owner: Claude Code
- Inputs: Locked Product Blueprint and locked EIS
- Package outputs: `engineering-contract.md`, `lovable-build-prompt.md`, and `verification-checklist.md`
- Required status: `DRAFT — MISSION CONTROL REVIEW REQUIRED`
- Approval authority: Mission Control

Mission Control is intentionally authorizing the three package documents sequentially. This instruction authorizes the Engineering Contract only.

---

# Authoritative Inputs

Claude Code shall use both locked authorities:

1. Locked Product Blueprint

```text
docs/phase-1-mission-blueprint/active/SB-P-1.11.md
```

2. Locked Engineering Implementation Specification Version 2.2

```text
docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md
```

The Product Blueprint remains authoritative for Product Truth, Founder Decisions D-001 through D-068, merchant behaviour, scope, exclusions, and approved sequencing.

The locked EIS v2.2 remains authoritative for engineering architecture, technical contracts, data integrity, permissions, security, scheduler design, interfaces, testing obligations, and implementation constraints.

Neither locked source may be modified, reinterpreted, weakened, expanded, or contradicted.

---

# Authorized Output

Create only:

```text
docs/implementation/SB-P-1.11/engineering-contract.md
```

Create only the mission completion report:

```text
communication/live/report1.18.md
```

No other file may be created, modified, renamed, moved, or deleted.

---

# Required Document Status

The Engineering Contract shall be marked exactly:

```text
DRAFT — MISSION CONTROL REVIEW REQUIRED
```

It is not approved.

It is not locked.

It carries no implementation authority.

---

# Engineering Contract Purpose

The Engineering Contract shall define the binding implementation obligations that all later implementation work must obey.

It shall convert the two locked authorities into an implementation-ready agreement without introducing new Product Truth, new Founder decisions, new scope, or new engineering behaviour.

The document must be sufficiently precise for later preparation of the Lovable Build Prompt and Verification Checklist.

---

# Mandatory Contract Content

The Engineering Contract shall define, where applicable:

1. Document authority and precedence
2. Mission objective
3. Authorized Build Now scope
4. Explicit exclusions and prohibited work
5. Implementation principles
6. Architecture obligations
7. Data-model obligations
8. Catalog and inventory separation
9. Price, tax, and cost integrity obligations
10. D-047 tenure-bounded inventory-history enforcement
11. D-068 preview, confirmation, and atomic commit safeguard
12. Command-only write boundaries
13. Business isolation and server-derived scope
14. Authentication, execution identities, and least privilege
15. Permission-engine obligations and temporary sequencing
16. Audit, provenance, idempotency, and outcome-reconciliation obligations
17. Scheduled-price worker and transaction obligations
18. File upload, scanning, import, and storage obligations
19. WhatsApp, text, voice, and photo channel boundaries
20. AI Assistant, Not AI Judge boundaries
21. Frontend and Lovable responsibilities
22. Backend, Supabase, and service responsibilities
23. Dependency and implementation sequencing
24. Failure handling and merchant-safe outcomes
25. Testing and verification obligations
26. Acceptance conditions
27. Traceability to Blueprint sections, Founder Decisions, and EIS sections
28. Open implementation parameters already preserved by the locked EIS
29. Explicit implementation prohibitions

The contract shall distinguish clearly between:

- mandatory implementation obligations;
- environment verification required during implementation;
- dependencies on shared systems;
- items outside SB-P-1.11 scope;
- later Mission Control approval gates.

---

# Preservation Requirements

The Engineering Contract must preserve without reopening:

- the locked Product Blueprint;
- EIS Version 2.2;
- Founder Decisions D-001 through D-068;
- the D-047 tenure-bounded interpretation;
- all verified MC-VRF-001 through MC-VRF-010 resolutions;
- command-only writes;
- action-specific permissions;
- same-actor-only confirmation;
- mandatory clean file scanning;
- server-derived business scope;
- Pattern A external-worker scheduler architecture;
- human decision ownership;
- Ask CFO as a clarity feature, not authority;
- employee permission boundaries;
- standard POS bridge only, with custom core POS modification rejected.

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
4. Modify only the two authorized paths.
5. Run the repository Markdown quality gate on both files.
6. Run whitespace and secret-pattern checks.
7. Confirm the locked Blueprint and locked EIS remain unchanged.
8. Open a pull request for Mission Control review.
9. Do not approve your own pull request.
10. Do not merge your own pull request.

---

# Completion Report Requirements

Create:

```text
communication/live/report1.18.md
```

The report shall include:

- branch name;
- base `main` commit;
- final commit SHA;
- pull-request number and URL;
- exact changed files;
- quality-gate results;
- confirmation that only authorized files changed;
- confirmation that the locked Blueprint was not modified;
- confirmation that the locked EIS was not modified;
- confirmation that no implementation artifacts were created;
- concise Engineering Contract summary;
- traceability approach used;
- assumptions made, if any;
- unresolved questions, if any;
- Product Truth change status;
- Founder decision requirement;
- implementation-authority status.

Required final disposition:

```text
ENGINEERING CONTRACT DRAFT COMPLETE — MISSION CONTROL REVIEW REQUIRED
```

---

# Lifecycle Boundary

After this mission:

- the Engineering Contract remains a draft;
- Mission Control must review it;
- refinement may be required;
- the Lovable Build Prompt remains unauthorized;
- the Verification Checklist remains unauthorized;
- the implementation package is not yet complete;
- implementation remains unauthorized.

Only after Mission Control accepts the Engineering Contract may a separate instruction authorize preparation of the Lovable Build Prompt.
