# SB-OPS-REPO-HOUSEKEEPING-1.6 — EOS Founder Disposition Alignment Report

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.6
**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0
**Execution actor:** Claude Code
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.6/mission-control/01_founder_eos_disposition_and_alignment_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.6/claude-code/00_eos_founder_disposition_alignment_handoff.md`
**Founder decisions implemented:** FD-HK-1 (D-1 / HK-017: DISCARD KNOWINGLY); FD-HK-2 (D-5 / HK-016: OPTION B)
**Date:** 2026-10-04

## 1. Baseline

| Check | Result |
|---|---|
| Canonical `main` | `0f8f91fea58a8b47a560672367e78dbd95b53cb8`, equal to the authorized baseline (merge of PR #747); unchanged at completion |
| Authorization and handoff | Present on `main`; read in full. Founder decisions canonical by the human merge of #747 |
| Inputs read | SB-OPS-REPO-HOUSEKEEPING-1.5 dossier `01_…` and decision matrix `02_…` (PR #746) |
| Newer or conflicting authority | None; 0 open PRs |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.6-claude-code-eos-alignment` (Mission Control's authorization branch is `…-1.6-eos-founder-disposition`) |

## 2. Exact Changed Paths

| Path | Change |
|---|---|
| `AGENTS.md` | Modified: Authority Order section and one Purpose sentence |
| `docs/engineering/eos/README.md` | Modified: Section 3 "Authority" only |
| `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.6/claude-code/01_eos_founder_disposition_alignment_report.md` | Added (this report) |

The HK-017 local deletion is a workstation action. It does not appear in the Git diff (Section 5).

## 3. `AGENTS.md` Authority Change (exact)

**Authority Order section**, removed:

```text
When instructions conflict, follow this order of precedence:

1. Founder-approved governance
2. Lighthouse Constitution
3. Smart Business Master System Manifesto
4. Engineering Operating System (EOS)
5. Repository instruction files (`AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`)
6. Mission-specific instructions
7. User implementation requests
```

Added, with the existing closing line "No lower-level instruction may override a higher-level authority." retained:

```text
The single canonical authority and precedence model is the **Canonical Governance Authority and
Precedence Table** in Source 17, [`merge/active/17_AI_Operations_Manual.md`](...). When instructions
conflict, follow that table. This file does not restate or vary it.

The Engineering Operating System (EOS) is an operational-workflow layer, not a precedence tier
(Founder decision FD-HK-2, [`communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.6/mission-control/
01_founder_eos_disposition_and_alignment_authorization.md`](...)):

- The actor-specific EOS workflows remain operational intake where the canonical source set requires them.
- EOS operational guidance is subordinate to canonical governance, Mission Control instructions,
  the Communication Protocol, and the repository instruction files (`AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`).
- Dormant, stale, historical, or non-governing EOS material cannot override current canonical governance.
```

The list is replaced by a pointer, not a restated table. A second copy of the precedence order is what drifted and created HK-016.

**Purpose sentence (line 27)**, because it implied EOS sits above `AGENTS.md`:

- Before: "This file supplements the Engineering Operating System (EOS). It does not replace or modify approved governance."
- After: "This file works alongside the actor-specific Engineering Operating System (EOS) workflows, which are operational guidance subordinate to canonical governance (see Authority Order). It does not replace or modify approved governance."

No other `AGENTS.md` text changed. Line 399 ("…should not duplicate the Engineering Operating System") is a style note, not an authority statement, and was left unchanged.

## 4. EOS README Authority Change (exact)

Section 3 "Authority": the six-item order ("Founder-approved Lighthouse governance; Smart Business Mission Control; Approved Engineering Operating System; Approved engineering governance documents; Mission-specific instructions; Verified engineering evidence") was replaced with:

- a dated alignment note citing FD-HK-2;
- "EOS is an **operational-workflow layer, not an independent authority or precedence tier**";
- Source 17's table is the single canonical precedence model, which EOS does not restate or vary;
- EOS guidance is subordinate to canonical governance, Mission Control instructions, the Communication Protocol and the repository instruction files;
- the two actor-specific workflows remain operational intake where the canonical source set requires them;
- every other EOS document keeps its Section 2 status; non-governing material cannot outrank current governance; the alignment approves or revives no deferred document.

Unchanged in the EOS README: the header and status ("Correction Candidate — Non-Governing Until Founder Approval"), Section 2 register, roadmap, approval record and all other sections. That remains HK-004 work.

## 5. HK-017 — Local Draft Cleanup

| Check | Result |
|---|---|
| Present before cleanup | **Yes**: `docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md`, 7,446 bytes |
| Tracked / in any commit on any ref | **No** / **0 commits** |
| Staged | **No** (0 staged paths) |
| Git status | `??` (untracked) |
| Assessed identity (from the merged PR #746 dossier) | SHA-256 `473b01bde889aa991d11ab53cbbabde291ccf43a379488080295a75b1cae9ca0` |
| Current SHA-256 before deletion | `473b01bde889aa991d11ab53cbbabde291ccf43a379488080295a75b1cae9ca0`, **identical match** |
| Action | **Deleted locally** with `rm` (not `git rm`), only after the identity match |
| After deletion | File absent; `git status --porcelain` empty; index unaffected |
| Ever staged or committed | **Never** |

The draft's identity, structure, operational model and assessment remain preserved in the accepted SB-OPS-REPO-HOUSEKEEPING-1.5 dossier, as FD-HK-1 intends.

## 6. Protected Files Unchanged

Blob IDs at the baseline were compared with the mission branch head.

| Path | Baseline blob | Head blob | Result |
|---|---|---|---|
| `merge/active/17_AI_Operations_Manual.md` (Source 17) | `942f206eb0d9d60b7280f38be89eb764fcad83dc` | identical | **Unchanged** |
| `docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md` | `2f67abbd99f5f820a524168a82664132450fdbe8` | identical | **Unchanged** |
| `docs/engineering/eos/ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md` | `78f87043e69601afd14ffda33da7c653f5d30072` | identical | **Unchanged** |
| Tag `eos-v1.0` | `b2a88174f08e37f83790660a6c15f3e97c04be72` | identical | **Unchanged** |

No canonical project source (`merge/active/**`) changed.

## 7. Validation

| Check | Result |
|---|---|
| Markdown quality (`tools/markdown/quality_gate.py`, non-modifying) | PASS, 0 issues: `AGENTS.md`, `docs/engineering/eos/README.md`, this report; re-run by the pre-commit hook |
| Links and paths referenced by the changes | All resolve (Source 17, Protocol, both actor workflows, FD-HK record) |
| `git diff --check` | Clean |
| Changed paths | Exactly the three authorized paths |
| Provider / seed | No GitHub or GitLab setting changed; no GitLab seed |

## 8. Closure Status

| Item | Status |
|---|---|
| **HK-016** authority-order conflict | **Operationally closed**: `AGENTS.md` and the EOS README now name Source 17 as the single precedence model and place EOS as a subordinate operational-workflow layer; no literal reading lets EOS outrank `AGENTS.md`, the Protocol or Mission Control |
| **HK-017** local B&DR draft | **Operationally closed**: identity verified, deleted locally, never staged or committed; provenance preserved in the 1.5 dossier |

## 9. Residual EOS Housekeeping (open, not executed here)

| Item | Note |
|---|---|
| HK-002 / HK-003 actor-workflow drift | Line 332 "approved commit message" and missing trailer and work-package rules remain. Now **non-blocking**: under the aligned order `AGENTS.md` prevails on conflict. Repair remains advisable |
| HK-004 EOS README register and status | Register, roadmap, approval record and "Non-Governing Until Founder Approval" status unchanged |
| HK-005 AC-02 deferred documents | Unchanged; still non-governing |
| HK-006 / HK-007 / HK-009 stale, archive and consolidation candidates | Unchanged |
| HK-008 Quality Gate standard | Unchanged |
| HK-010 Tooling Register status ambiguity | Unchanged (factual refresh only, PR #740) |
| HK-011 verification sample | Unchanged |
| `CLAUDE.md` / `CHATGPT.md` intake item 4 ("Relevant Engineering Operating System (EOS) documentation"), `CHATGPT.md` line 91 | Not authority statements; consistent with Option B as intake guidance. Optional future wording alignment, outside this package's writable paths |

EOS FOUNDER DISPOSITION ALIGNMENT SUBMITTED — SOURCE 17 UNCHANGED — NO PROVIDER / SEED MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
