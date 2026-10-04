# Governance Merge Workspace

## Current Role

*Reconciled 2026-10-04 under `SB-OPS-REPO-HOUSEKEEPING-1.2` (HK-030).*

`merge/active/` is **not** a working folder of `<MERGE-ID>/` subfolders. It holds the flat **Smart Business Canonical Project Source Set v1.0**: the canonical governance sources (`00_` to `18_`, `16A_`, `P00_`, and the Phase 1 constitutional-authority interpretation), indexed by [`active/README.md`](active/README.md). The durable register is [`docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`](../docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md). Changes to those sources follow that register's change control, not the workspace workflow below.

The consolidations this workspace was created for were integrated directly as canonical sources in `merge/active/`. The successor mapping is recorded in [`Project Source File Archive/README.md`](../Project%20Source%20File%20Archive/README.md):

- the planned `M001_AI_Operations` consolidation became `17_AI_Operations_Manual.md` (Parts A–F);
- `12_Product_Execution_and_Release_Framework.md` consolidates the former Sources 12–14;
- `P00_Operational_Profiles.md` consolidates the former P01–P06 profiles.

`merge/merged/` contains only `.gitkeep`. No merged document has been stored there.

The sections from "Purpose" onward record the original workspace protocol (2026-07-28). They are retained as historical context. They do not describe the current contents of `merge/active/`.

## Purpose

The `merge/` directory is the controlled workspace for consolidating approved Smart Business source files.

This workspace exists to strengthen document structure, depth, clarity, and project stability without weakening governance authority, changing approved meaning, or overwriting original sources before Founder approval.

## Structure

Current layout:

```text
merge/
├── README.md
├── active/                  Canonical Project Source Set v1.0 (flat; see active/README.md)
└── merged/
    └── .gitkeep             No merged documents stored
```

Original planned layout (2026-07-28, not in use):

```text
merge/
├── README.md
├── active/
│   └── <MERGE-ID>/
│       └── source files selected for consolidation
└── merged/
    └── <MERGE-ID>_<MERGED-DOCUMENT-NAME>.md
```

## Merge Identification

Each consolidation exercise must receive a unique merge ID.

Recommended format:

```text
M001_AI_Operations
M002_Product_Execution
M003_Operational_Profiles
```

The merge ID must be used consistently in both `active/` and `merged/`.

## Workflow

1. Create `merge/active/<MERGE-ID>/`.
2. Copy only the Founder-approved source files into that folder.
3. Review every active file line by line, section by section, and context by context.
4. Preserve approved authority, meaning, terminology, scope, and operational depth.
5. Identify duplicated guidance, complementary guidance, contradictions, gaps, and structural improvement opportunities.
6. Do not silently resolve conflicts or invent missing governance. Escalate such matters for Founder or Mission Control decision.
7. Create one consolidated document in `merge/merged/` using the same merge ID.
8. Keep the original source files unchanged until the merged document is reviewed and approved.
9. After approval, integrate the merged document through a separately authorised repository change.
10. Clear or archive the active working set before beginning another merge under the same ID.

## Review Standard

A merged document must:

- strengthen structure and navigation;
- preserve or improve depth;
- reduce duplication without removing necessary meaning;
- maintain clear authority boundaries;
- remain usable by both humans and AI specialists;
- surface unresolved conflicts explicitly;
- avoid feature, governance, or documentation bloat;
- support long-term project continuity and stability.

## Prohibited Actions

The merge workspace must not be used to:

- redesign the Lighthouse Constitution or core philosophy without discussion;
- weaken approved governance;
- replace original sources before approval;
- merge unrelated responsibilities solely to reduce file count;
- conceal contradictions;
- introduce unsupported decisions;
- alter product scope or implementation authority.

## Initial Planned Merge

*Historical plan. The outcome is `merge/active/17_AI_Operations_Manual.md`, not a file in `merge/merged/` (see Current Role).*

```text
M001_AI_Operations
```

Expected consolidated document:

```text
merge/merged/M001_AI_Operations_Manual.md
```

Planned structure:

```text
Part A — AI Capability Governance
Part B — AI Development Rules
Part C — Repository Communication
Part D — Mission Handover
Part E — Continuity
Part F — Recovery
```
