# SMART BUSINESS MISSION CONTROL

# SB-OPS-REPO-HOUSEKEEPING-1.5 — EOS Governance + Local Draft Decision Dossier Authorization

**Date:** 2026-10-04  
**Owner:** Mission Control  
**Parent mission:** SB-OPS-REPO-HOUSEKEEPING-1.0  
**Depends on:** accepted PRs #736, #740, #744  
**Execution actor:** Claude Code  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main`  
**Mode:** EVIDENCE / DECISION SUPPORT ONLY — NO EOS OR GOVERNANCE MUTATION

## 1. Purpose

Prepare a Founder decision dossier for the two unresolved EOS-related owner decisions that matter before the repository can reasonably reach a final “clean enough to preserve” disposition:

- **HK-017** — local-only `Engineering_Backup_and_Disaster_Recovery_v1.0.md` draft: recover into Git under a separately authorized mission, or consciously discard;
- **HK-016** — authority-order conflict among `AGENTS.md`, Source 17 and the EOS README.

This mission does not decide either item and does not modify the documents under review.

## 2. HK-017 — local B&DR draft assessment

Inspect the local untracked file, if present on the execution workstation:

`docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md`

Do NOT add, stage, edit, rename, delete or move it.

Prepare a content assessment that answers:

1. title, date/version/status claims and structure;
2. what operational model it proposes;
3. whether it conflicts with or predates the Founder-approved Track A continuity method;
4. whether it contains unique useful principles not already represented in current canonical continuity/governance records;
5. whether it contains stale assumptions, provider-specific assumptions or obsolete destinations;
6. whether it should be:
   - RECOVER AS HISTORICAL DRAFT,
   - RECOVER FOR GOVERNED REVISION,
   - DISCARD KNOWINGLY,
   - OWNER DECISION REQUIRES MORE EVIDENCE;
7. what would be lost if discarded;
8. what risk would be introduced if admitted unchanged.

Do not quote or reproduce secret values if any exist. If any secret-like material is present, describe only its category and stop before exposing it.

Compare the draft against current canonical continuity records, including the Founder-approved Track A method and the GitLab downstream/non-canonical posture.

## 3. HK-016 — authority-order conflict assessment

Compare exactly:

- `AGENTS.md` authority order;
- canonical Source 17 (`merge/active/17_AI_Operations_Manual.md` or its current canonical location);
- `docs/engineering/eos/README.md` authority order;
- any current canonical source/register that explicitly names the two actor-specific EOS workflow documents as mandatory intake.

Answer:

1. where the three precedence models differ;
2. what practical contradiction can occur today;
3. which EOS documents are actually operative versus dormant/non-governing/historical;
4. whether EOS should:
   - remain a precedence tier,
   - be reduced to actor-specific operational workflow status,
   - be treated as subordinate implementation guidance,
   - or require another model;
5. the smallest Founder decision that would eliminate ambiguity;
6. which files would require later governed edits depending on each option.

Do not rewrite authority in this mission.

## 4. Optional wider EOS context

Use HK-002 through HK-011 only as context where needed to explain the consequences of HK-016.

Do not reopen or execute the broader EOS cleanup package.

Specifically:

- active actor workflows may be described as drifted;
- stale platform docs may be identified;
- AC-02 deferred documents may be described;
- historical `v1.0/` and tag must remain historical/audit.

No archive, deletion, repair or status change is authorized.

## 5. Required Founder decision matrix

Produce a concise matrix with at least:

| Decision | Option | Consequence | Risk | Recommended path | Requires later governed mutation? |

Include:

### D-1 / HK-017
- recover as historical draft;
- recover for governed revision;
- discard knowingly.

### D-5 / HK-016
- EOS remains precedence tier;
- EOS reduced to operational workflow layer;
- another evidence-backed option if justified.

Do not mark a Founder decision as made.

## 6. “Clean enough to preserve” dependency

Answer explicitly:

> Must HK-017 and/or HK-016 be resolved before Mission Control can reasonably declare GitHub “clean enough to preserve” for first continuity seeding?

Distinguish:

- repository-content completeness risk;
- governance ambiguity risk;
- whether the issue must block the first seed versus may be resolved after the first seed.

Do not make the final global clean-enough decision.

## 7. Writable paths only

Claude Code may create only:

1. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.5/claude-code/01_eos_governance_and_local_draft_decision_dossier.md`
2. `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.5/claude-code/02_founder_decision_matrix.md`

No existing repository file may change.

## 8. Prohibited actions

Do NOT:

- add/stage/edit/delete/move the local B&DR draft;
- modify EOS files;
- modify `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`;
- modify Source 17 or any canonical source;
- archive/remove/consolidate EOS content;
- alter tags;
- delete/prune branches;
- change provider settings;
- start GitLab seed;
- change application code/tests/SQL/migrations;
- self-merge.

## 9. Validation

Before completion:

- verify canonical `main`;
- verify the local B&DR draft remained untouched/untracked if present;
- verify no secret values are reproduced;
- run Markdown quality in non-modifying mode;
- run `git diff --check`;
- confirm diff contains only the two authorized reports.

## 10. Completion return

Open one PR with only the two reports.

Return:

- canonical baseline SHA;
- mission branch;
- final head SHA;
- both report blob SHAs;
- PR number/URL;
- exact changed paths;
- HK-017 recommended disposition;
- HK-016 recommended Founder decision;
- whether either/both should block first continuity seed;
- validation results;
- confirmation no EOS/governance/local-draft/provider mutation occurred.

End the main report exactly:

**EOS DECISION DOSSIER SUBMITTED — NO EOS / GOVERNANCE / LOCAL-DRAFT / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION**
