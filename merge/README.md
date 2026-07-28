# Governance Merge Workspace

## Purpose

The `merge/` directory is the controlled workspace for consolidating approved Smart Business source files.

This workspace exists to strengthen document structure, depth, clarity, and project stability without weakening governance authority, changing approved meaning, or overwriting original sources before Founder approval.

## Structure

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
