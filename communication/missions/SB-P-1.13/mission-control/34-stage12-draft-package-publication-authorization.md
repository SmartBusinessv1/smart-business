# SB-P-1.13 — Stage 12 Draft Package Publication Authorization

**Mission Control decision ID:** SB-P-1.13-MC-20  
**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation  
**Source 18 stage:** 12 — Initial Implementation Package  
**Canonical baseline:** `main@654811df61fb59a0f0de35af7be2bc6614aae9ef`  
**Locked EIS blob:** `9a1e723d4874011b6870a680f2a2080154537c30`  
**Status:** DRAFT PUBLICATION AUTHORIZATION — EFFECTIVE ONLY AFTER HUMAN MERGE AND MISSION CONTROL POST-MERGE VERIFICATION

## 1. Purpose

Claude Code completed the authorized Stage 12 drafting work but correctly stopped before Git publication because MC-19 / record 33 authorized document preparation without naming a publication branch, writable paths or Git/PR authority.

MC-20 closes only that publication gap.

It does not approve the Stage 12 package and does not perform Source 18 Stage 13 package review.

## 2. Authorized publication target

After this authorization becomes canonical, Claude Code may publish the already-drafted Stage 12 package to:

**Branch:** `mission/SB-P-1.13-stage12-implementation-package`

**Draft PR title:** `docs(SB-P-1.13): Stage 12 initial implementation package (draft)`

**Base:** protected `main`

The PR must remain DRAFT until Mission Control Stage 13 review.

## 3. Exact writable paths

Claude Code may write exactly these four paths and no others:

1. `docs/implementation/SB-P-1.13/engineering-contract.md`
2. `docs/implementation/SB-P-1.13/lovable-build-prompt.md`
3. `docs/implementation/SB-P-1.13/verification-checklist.md`
4. `communication/missions/SB-P-1.13/claude-code/12-stage12-initial-package-report.md`

No README, decision log, handover log, live report, EIS, Blueprint, FCTM, FPDR, source code, SQL, schema, migration or configuration file is writable under MC-20.

## 4. Content identity and allowed work

Publish the current Stage 12 draft contents represented in the handoff.

Expected working-tree blob prefixes supplied by Claude Code:

- engineering contract: `55547f57`
- Lovable build prompt: `27bbb412`
- verification checklist: `0c1fb425`

The report was also already drafted but no working-tree blob was supplied in the handoff.

Before publication Claude Code may perform only non-substantive formatting required for repository quality gates. Any change that alters obligations, mappings, workstreams, holds, scenarios, evidence classes, package semantics or trigger disposition requires STOP and return to Mission Control.

All three package documents must remain:

`DRAFT — MISSION CONTROL REVIEW REQUIRED`

## 5. Required publication verification

Before opening the draft PR, Claude Code must verify:

- exactly four changed files;
- all 651 `IN SCOPE` FCTM rows remain represented;
- 1,486 row-to-obligation links remain equal to the locked EIS mapping;
- D12 remains on all 252 applicable rows;
- all 17 DTX rows retain the governed-command / DTX hold treatment;
- all required provider/runtime/other holds remain carried;
- no locked artifact changed;
- no implementation/code/SQL/schema/migration/provider/production file changed;
- repository quality gate passes;
- secret scan passes.

The handoff must return the final branch head, all four final blob SHAs, PR number, changed-file list and check results.

## 6. Stage 13 boundary

Publication of the draft package creates reviewable evidence for Source 18 Stage 13.

It does not imply:

- package acceptance;
- implementation authorization;
- builder authorization;
- SQL/schema/migration authority;
- Supabase mutation;
- provider selection or activation;
- production mutation;
- delivery.

PQ-1 through PQ-7 remain review inputs for Mission Control Stage 13.

**STOP after draft PR creation and handoff to Mission Control.**
