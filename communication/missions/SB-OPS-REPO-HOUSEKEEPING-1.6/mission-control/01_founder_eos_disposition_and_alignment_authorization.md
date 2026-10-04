# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.6 — Founder EOS Disposition and Alignment Authorization

**Date:** 2026-10-04  
**Founder:** Riyas PK  
**Owner:** Mission Control  
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0  
**Depends on:** accepted and merged PR #746  
**Status:** DRAFT — FOUNDER DECISIONS BECOME CANONICAL WHEN THIS RECORD IS HUMAN-MERGED TO `main`

## 1. Founder decisions

The Founder has explicitly decided:

### FD-HK-1 — D-1 / HK-017

**Decision: DISCARD KNOWINGLY.**

The local-only file:

`docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md`

is not to be recovered into canonical Git history.

It is a non-canonical local draft that predates and conflicts in material respects with the Founder-approved continuity posture. Its identity, assessment, structure and provenance are preserved by the accepted SB-OPS-REPO-HOUSEKEEPING-1.5 dossier.

This decision authorizes a later controlled workstation cleanup action to delete that local untracked draft after this decision record is canonical.

It does **not** authorize adding, staging or committing the draft before deletion.

### FD-HK-2 — D-5 / HK-016

**Decision: OPTION B — EOS IS AN OPERATIONAL-WORKFLOW LAYER; SOURCE 17 IS THE SINGLE PRECEDENCE MODEL.**

Founder intent:

- Source 17 remains the single canonical authority and precedence model.
- EOS is not an independent precedence tier.
- The actor-specific EOS workflows may remain mandatory operational intake where current canonical records require them.
- EOS operational material is subordinate to canonical governance, Mission Control instructions, the Communication Protocol and applicable repository instructions.
- Dormant, stale, historical or non-governing EOS material cannot outrank current canonical governance.
- This decision does not itself approve or revive any deferred EOS document.

No canonical source amendment is required merely to establish this interpretation because Source 17 already holds the canonical precedence model.

## 2. Narrow alignment authorized after this record is merged

A follow-up Claude Code execution may make only the minimum repository changes necessary to remove the now-decided HK-016 ambiguity and close HK-017 locally.

### 2.1 Repository authority alignment

Allowed:

1. amend `AGENTS.md` so its authority section no longer places EOS as an independent precedence tier and instead points to Source 17 as the single canonical precedence model;
2. amend `docs/engineering/eos/README.md` §3 / authority wording so EOS is accurately described as an operational-workflow layer subordinate to the canonical precedence model;
3. preserve the two actor-specific EOS workflow documents as operational intake sources; do not rewrite them in this package;
4. preserve EOS historical/audit material and the `eos-v1.0` tag.

### 2.2 Local draft cleanup

Allowed only after verifying the local untracked file still matches the assessed identity from the accepted dossier:

`docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md`

If the file is present and its identity materially matches the assessed draft, delete it locally without staging or committing it.

If the file differs materially, STOP and report rather than deleting it.

The local deletion is workstation housekeeping, not a Git repository content mutation.

## 3. Explicitly out of scope

Do NOT in this package:

- modify Source 17;
- modify any canonical project source;
- edit the Claude or ChatGPT actor-specific EOS workflow documents;
- execute HK-002 / HK-003 workflow repair;
- execute HK-004 through HK-011 broader EOS cleanup;
- archive, remove or consolidate other EOS files;
- alter `eos-v1.0`;
- change application code/tests/SQL/migrations;
- delete/prune branches;
- change GitHub/GitLab settings;
- start the GitLab seed;
- self-merge.

## 4. Required execution report

Claude Code must create:

`communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.6/claude-code/01_eos_founder_disposition_alignment_report.md`

The report must state:

- canonical baseline SHA;
- exact `AGENTS.md` change;
- exact EOS README authority change;
- whether the local draft was present;
- whether its identity matched the previously assessed draft;
- whether it was deleted locally;
- confirmation it was never staged/committed;
- confirmation Source 17 was not changed;
- confirmation actor workflow files were not changed;
- Markdown quality result;
- `git diff --check` result;
- exact changed paths.

## 5. Writable repository paths for execution

Only:

1. `AGENTS.md`
2. `docs/engineering/eos/README.md`
3. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.6/claude-code/01_eos_founder_disposition_alignment_report.md`

The local untracked HK-017 draft may be deleted only under §2.2 and must never enter the Git diff.

## 6. Completion boundary

This decision closes the Founder-choice portion of HK-017 and HK-016.

The follow-up alignment execution is still required before those housekeeping items are operationally closed.

This record does not declare the repository globally “clean enough to preserve” and does not authorize the first GitLab seed.
