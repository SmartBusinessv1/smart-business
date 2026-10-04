# SB-OPS-REPO-HOUSEKEEPING-1.5 — EOS Governance and Local Draft Decision Dossier

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.5
**Parent:** SB-OPS-REPO-HOUSEKEEPING-1.0 (accepted PRs #736, #740, #744)
**Execution actor:** Claude Code
**Authority:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.5/mission-control/01_eos_governance_and_local_draft_decision_dossier_authorization.md`
**Handoff:** `communication/missions/SB-OPS-REPO-HOUSEKEEPING-1.5/claude-code/00_eos_decision_dossier_handoff.md`
**Date:** 2026-10-04
**Mode:** Evidence and decision support only. No Founder decision is made or implied here.
**Decision matrix:** [`02_founder_decision_matrix.md`](02_founder_decision_matrix.md)

## 1. Summary

| Item | Recommendation | Blocks first continuity seed? |
|---|---|---|
| **HK-017** local EOS Backup and Disaster Recovery draft | **DISCARD KNOWINGLY**, with this dossier as the provenance record. If the Founder prefers zero loss, the safe fallback is RECOVER AS HISTORICAL DRAFT into the EOS archive boundary. RECOVER FOR GOVERNED REVISION is not recommended | **No** |
| **HK-016** authority-order conflict | **Option B**: EOS is an operational-workflow layer, not a precedence tier. `merge/active/17_AI_Operations_Manual.md` (Source 17) is the single precedence model. This matches how every EOS document already describes itself; only `AGENTS.md` disagrees | **No** |

Neither issue must block the first seed. Both can be resolved by ordinary governed commits after it, and those commits reach GitLab through the normal downstream update path. The reasoning is in Section 5.

## 2. Baseline and Boundaries

| Check | Result |
|---|---|
| Canonical `main` | `552fd46d00ca69572df24a4af6339e488697a94a`, equal to the authorized baseline (merge of PR #745); unchanged at completion |
| Authorization and handoff | Present on `main`; read in full |
| Register context read | HK-016, HK-017 (decision items); HK-002 to HK-011 (context only) |
| Newer or conflicting authority | None; 0 open PRs |
| Mission branch | `mission/SB-OPS-REPO-HOUSEKEEPING-1.5-claude-code-eos-dossier` (Mission Control's authorization branch is `…-1.5-eos-decision-dossier`) |

**Local-draft custody.** `docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md` was read only.

| Property | Value |
|---|---|
| Git status | `??` (untracked), before and after |
| Size | 7,446 bytes |
| Modified | 2026-07-17 19:00 (local time) |
| SHA-256 | `473b01bde889aa991d11ab53cbbabde291ccf43a379488080295a75b1cae9ca0` |

The SHA-256 was recorded before reading and re-verified unchanged at completion. The file was not added, staged, edited, renamed, moved or deleted.

**Secret check (local draft).** Pattern scan for JWTs, AWS keys, private-key blocks, GitHub tokens, model-provider keys, Supabase keys, credentialed Postgres URLs, `password=`, `token|secret|api_key=` assignments and long hex strings: **0 matches in every category**. The draft contains no secret-like material.

## 3. HK-017 — Local EOS Backup and Disaster Recovery Draft

### 3.1 Identity and claims

| Field | As stated in the draft |
|---|---|
| Title | "Engineering Backup and Disaster Recovery v1.0" (under "Team LIPS Engineering Operating System") |
| Document type | Engineering Governance Standard |
| Version | v1.0 |
| Mission | `SB-INF-1.16` |
| Owner / approval authority | Infrastructure Operations / Mission Control |
| Status | **Draft**; Engineering Review, Mission Control Review and Founder Approval all **Pending** |
| Length | 321 lines |

Provenance: `SB-INF-1.16` appears **nowhere** in canonical history: 0 references on `main` and no commit message on any ref. The draft was never committed (the audit established this). Its "Related Engineering Artifacts" list names the SB-INF-1.9-generation EOS documents (Repository Governance, Change Management, Release Management, Security and Access Control, Integration Architecture, Quality Gate) and the v1.0 specification. It therefore belongs to the July 2026 EOS drafting wave that produced the AC-02 package.

### 3.2 Structure and proposed operational model

Sections: Purpose; Objectives; Engineering Principles; Scope; Engineering Assets; Backup Strategy; Backup Frequency; Recovery Priorities; Disaster Scenarios; Recovery Procedure (nine-step flow from incident detection to preventive improvement); Engineering Validation; Roles and Responsibilities; Recovery Evidence; Recovery Testing; Preventive Measures; Continuous Improvement; Human Authority; Related Engineering Artifacts; Revision History; Approval.

Model proposed:

- **Locations:** "multiple independent storage locations": GitHub (canonical source), a "Controlled Google Drive archive", the "Local engineering workstation", and an "Approved offline archive (when required)".
- **Frequency:** every committed change, approved revision or published version.
- **Recovery:** prioritized repository → governance → documentation → automation → supporting assets.
- **Roles:** Founder approves recovery; Infrastructure Operations executes; AI assistants give "documentation and analytical support only".
- **Validation:** includes the Markdown Quality Gate and GitHub Actions.
- **Testing:** periodic recovery testing.

### 3.3 Comparison with the current canonical continuity state

| Concern | Local draft | Canonical state (2026-10-04) | Assessment |
|---|---|---|---|
| Canonical source | GitHub | GitHub canonical (`mission-control/mission_memory.md`; MC-186) | Consistent |
| Google Drive archive | Recommended backup location | Retired as an active synchronization destination 2026-09-21 (PR #613; `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md`) | **Stale** |
| Local engineering workstation | Recommended backup location | Not an authorized baseline: Track A uses the encrypted bare-mirror / Git-bundle method, and a checked-out working-directory copy must not be used (HK-065; SB-OPS-REPO-HOUSEKEEPING-1.1 authorization §2) | **Conflicts** |
| Offline archive | Optional, "when required" | **Mandatory** Track A: verified encrypted local continuity mirror, encrypted multi-generation Git bundles, normally disconnected site-independent copy (FD-C1), first restore drill after artifacts exist (`communication/missions/SB-P-1.12/mission-control/55-founder-source-continuity-prerequisite-disposition.md`) | **Weaker than canonical** |
| Encryption | Not mentioned | Hardware-encrypted external storage; no unencrypted internal-disk exemption (SC-P1, §3 of record 55) | **Absent** |
| Unlock / key custody | Not mentioned | Human-only unlock; unlock material never in Git or repository communication (record 55 §3) | **Absent** |
| Physical separation | Not mentioned | Securely controlled off-site location physically separate from the Founder's primary work location (FD-C1, record 52) | **Absent** |
| Secondary provider | Not mentioned | Track B: private GitLab, downstream and non-canonical; ordinary heads and tags only; no mirror, force or prune (MC-186) | **Absent** |
| Secrets recovery | "Secure credential management" (generic) | FD-C6: 1Password Teams Starter Pack selected; activation separately gated | Generic only |
| Validation via GitHub Actions / Quality Gate | Required | Actions affected by the MC-160 provider incident; Markdown gate advisory | **Stale assumption** |
| Restore testing | "Periodic" | First restore drill required after governed artifacts exist (record 55) | Consistent in principle |
| Human authority | Humans approve restoration; automation never initiates recovery | Human-only unlock and Founder confirmation gates (record 55) | Consistent |

**GitLab target note.** The mission instruction names the blank target as `team-lips/smart-business/smart-business-continuity`. The canonical records name it `team-lips/smart-business-continuity`: group `team-lips`, project `smart-business-continuity` (`communication/live/instruction1.48.md` lines 38, 54 and 83; `communication/live/instruction1.49.md` target block). This dossier cannot observe GitLab and does not resolve the difference. Mission Control should confirm the actual path before any seed instruction.

### 3.4 Unique content, loss if discarded, risk if admitted

**Genuinely unique and still useful (low specificity):**

- A recovery-evidence field list: incident identifier, date and time, assets affected, actions, validation results, remaining issues, preventive recommendations.
- A disaster-scenario list that includes "GitHub account compromise" and "Credential loss". These are prescient given the later GitHub account-restriction incident (record 49).
- A recovery-priority order (repository → governance → documentation → automation).
- The maxim "A backup is valuable only when successful restoration has been demonstrated".

Each of these is generic engineering practice. The substantive equivalents (restore drill, human-only control, incident records) already exist in the canonical Track A records and the communication protocol.

**Lost if discarded:** the items above as one consolidated text, and the record that an EOS B&DR draft was attempted under an unrecorded mission ID. This dossier preserves the identity, structure, model, hash and content summary, so the provenance is not lost.

**Risk if admitted unchanged** (especially at the EOS root):

1. It would sit beside active EOS documents as an "Engineering Governance Standard" recommending Google Drive and workstation backups, contradicting the Founder-approved Track A and the HK-065 rule.
2. While HK-016 is unresolved, a literal reader of `AGENTS.md` could treat an EOS document as precedence tier 4, above `AGENTS.md` and mission instructions.
3. It would add a third continuity narrative alongside the SB-P-1.12 records (51–58) and the housekeeping records.

### 3.5 Disposition options

| Option | Fit | Notes |
|---|---|---|
| RECOVER AS HISTORICAL DRAFT | Acceptable fallback | Must follow `docs/engineering/eos/archive/README.md` rules: name the artifact so it is clearly historical, record why Git preservation is necessary, add a manifest entry, confirm no index treats it as current, and obtain explicit Mission Control authorization |
| RECOVER FOR GOVERNED REVISION | **Not recommended** | Revising it to match Track A would duplicate the SB-P-1.12 continuity records 51–58, which already govern continuity, and would deepen the EOS ambiguity |
| DISCARD KNOWINGLY | **Recommended** | Content is generic and superseded; the stale parts conflict with Founder-approved Track A; this dossier records its provenance. The Founder deletes or retains the local file outside Git; this mission does not act on it |
| OWNER DECISION REQUIRES MORE EVIDENCE | Not needed | The file is fully readable and secret-free; no missing evidence prevents a decision |

Urgency note, independent of seeding: Track A and Track B protect canonical Git content only. While undecided, this file exists on one workstation and is protected by neither. If the Founder wants it kept, admitting it as a historical draft is the only route that brings it under continuity protection.

## 4. HK-016 — Authority-Order Conflict

### 4.1 The models compared

| Rank | `AGENTS.md` "Authority Order" | Source 17 "Canonical Governance Authority and Precedence Table" | EOS README §3 |
|---:|---|---|---|
| 1 | Founder-approved governance | Founder | Founder-approved Lighthouse governance |
| 2 | Lighthouse Constitution | Lighthouse Constitution | Smart Business Mission Control |
| 3 | Smart Business Master System Manifesto | Phase 1 constitutional authority (Source 01 + Source 11) | Approved Engineering Operating System |
| 4 | **Engineering Operating System (EOS)** | Approved Governance Sources | Approved engineering governance documents |
| 5 | Repository instruction files (`AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`) | Mission Control | Mission-specific instructions |
| 6 | Mission-specific instructions | Authorized Specialist and Engineering Execution | Verified engineering evidence |
| 7 | User implementation requests | Repository, Platform, and Mission-Specific Instructions | — |

Supporting evidence of what each source claims about itself:

| Source | Self-description |
|---|---|
| `README.md` | "The canonical governance authority and precedence table is maintained in `merge/active/17_AI_Operations_Manual.md`" |
| `merge/active/README.md` line 13 | "EOS workflows support execution but are not counted among the 20 canonical project-source files" |
| `docs/governance/Smart_Business_Canonical_Project_Source_Set_v1.0.md` line 91 | Lists the two actor-specific EOS workflows under "Active GitHub Operational Sources for AI Participants", explicitly "not counted among the 20 canonical project-source files"; mandatory intake step 6 for Codex and Claude Code |
| Both actor workflows (line 33) | "**Governing References:** `AGENTS.md` and `communication/AI_Communication_and_Handover_Protocol.md`", i.e. they subordinate themselves to `AGENTS.md` |
| EOS v1.0 specification, "Authority" | Operates under the Lighthouse Constitution, Smart Business Constitution, approved governance frameworks, Founder decisions and Mission Control governance: "Nothing within the Engineering Operating System supersedes these governing authorities" |
| EOS README | Its own status is "Correction Candidate — **Non-Governing** Until Founder Approval", so its §3 order is itself non-governing |
| `CLAUDE.md` line 19 | "When instructions conflict, **AGENTS.md takes precedence**"; intake item 4 is "Relevant Engineering Operating System (EOS) documentation" |
| `AGENTS.md` lines 27 and 399 | "This file supplements the Engineering Operating System (EOS)"; "should not duplicate the Engineering Operating System" |

### 4.2 Exact differences

1. **Placement of EOS.** `AGENTS.md` makes EOS a named tier (4) above `AGENTS.md` itself. Source 17 does not name EOS. EOS is not an "Approved Governance Source" (tier 4), because it is outside the 20-source canonical set, so under Source 17 the actor workflows fall in tier 7 (repository/platform instructions). Every EOS document places itself below governance and Mission Control.
2. **Mission instructions vs repository files.** `AGENTS.md` ranks mission-specific instructions (6) **below** EOS (4) and repository files (5). Source 17 ranks Mission Control (5) **above** repository, platform and mission-specific instructions (7).
3. **Constitutional tier.** `AGENTS.md` names only the Manifesto (Source 01) at tier 3. Source 17 forms the Phase 1 constitutional authority from Source 01 **and** Source 11 (Product Truth), per `SB-GOV-1.2`.
4. **Founder.** Source 17 places the Founder as a person at tier 1. `AGENTS.md` and the EOS README use "Founder-approved governance".
5. **The EOS README order** puts Mission Control (2) above EOS (3), the inverse of `AGENTS.md`, but it is self-declared non-governing.

### 4.3 Practical contradiction possible today

Yes, concretely.

- The 2026-09-20 `AGENTS.md` amendment (SB-GOV-PRODUCT-EXEC-1.0, PR #606) allows the standard branch convention, mission-scoped descriptive commit messages, an attribution-trailer rule and work-package grants.
- The active Claude EOS workflow (`docs/engineering/eos/Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md`, line 332, last changed 2026-09-03) still requires an "approved commit message" and an identified branch, and has no trailer or work-package rule (HK-002; the same applies to ChatGPT, HK-003).
- Under the **literal `AGENTS.md` order**, EOS (tier 4) outranks `AGENTS.md` (tier 5) **and** any Mission Control instruction (tier 6). So the stale workflow text would prevail over the newer amendment and over a mission authorization using the standard convention.
- Under **Source 17**, Mission Control (5) outranks the workflow (7), and `AGENTS.md`'s amendment governs.
- The workflow's own "Governing References: `AGENTS.md`" line points the other way. A reader therefore gets a circular answer: `AGENTS.md` says EOS outranks `AGENTS.md`, while the EOS workflow says `AGENTS.md` governs it.

So far this has been absorbed in practice: Mission Control instructions have prevailed, and this mission's own instructions followed `AGENTS.md`. But it is the exact pattern by which stale EOS text could outrank newer rules on a literal reading.

### 4.4 Operative, dormant and historical EOS material

| Category | Documents | Basis |
|---|---|---|
| **Operative** (mandatory intake, drifted) | `Claude_GitHub_Engineering_Artifact_Workflow_v1.0.md`, `ChatGPT_GitHub_Engineering_Artifact_Workflow_v1.0.md` | Named in the Source Set register and the Protocol; status ACTIVE; drift recorded as HK-002 / HK-003 |
| **Operative reference** (describes implemented tooling) | `Engineering_Quality_Gate_v1.0.md` (HK-008) | Describes the implemented, now advisory, Markdown gate; not named as mandatory intake |
| **Factual inventory, governance status ambiguous** | `Engineering_Tooling_Register.md` (HK-010) | Header "Approved By: Founder"; refreshed factually by PR #740 without status change |
| **Dormant / non-governing** | EOS `README.md` (HK-004); the seven AC-02 documents (HK-005); `Engineering_Local_Workflow_v1.0.md`, `Engineering_Platform_Capability_Matrix_v1.0.md` (HK-006) | Self-declared or Mission Control-recorded non-governing; AC-02 deferred since 2026-08-03 |
| **Nominally approved but stale and unreferenced** | `Engineering_Platform_Inventory_v1.0.md`, `Engineering_Pipeline_Architecture_v1.0.md` (HK-007); `Engineering_Artifact_Workflow_v1.0.md` (HK-009) | "Approved Baseline" / "Approved" labels; no active inbound references; platform facts stale |
| **Residue** | `Quality_Gate_Verification_Sample.md` (HK-011) | Self-declared test file |
| **Historical / audit** (preserve) | `v1.0/` release package; tag `eos-v1.0`; `archive/README.md` boundary marker | Published release, continuity-manifest ref, archive policy |

Under the literal `AGENTS.md` order, the "nominally approved but stale" group is the most exposed: it carries "Approved" labels inside a tier that `AGENTS.md` ranks above itself.

### 4.5 Structural options

**Option A: EOS remains a precedence tier.**

- *What would need repair:*
  - Source 17 would need to name EOS, a canonical-source change under the Source Set change control, with Founder approval.
  - Every EOS document within the tier would have to be current and approved: the README register (HK-004), both actor workflows (HK-002 / 003), AC-02 resolution (HK-005), and either refresh or withdrawal of the stale "Approved" documents (HK-006 / 007 / 009).
  - The workflows' "Governing References: `AGENTS.md`" line, and the v1.0 specification's "nothing supersedes" clause, would contradict the tier and need rewording.
- *What must stay current:* any rule change in `AGENTS.md`, the Protocol or Source 18 would require a synchronized EOS edit, or the stale EOS text outranks it.
- *Governance burden:* high and recurring. It creates a second constitutional-adjacent layer, maintained by a function (Infrastructure Operations) whose documents have been dormant since July–August 2026.

**Option B: EOS reduced to an operational workflow layer (recommended).**

- *Meaning:*
  - The two actor workflows remain mandatory operational intake.
  - EOS is not an independent precedence tier.
  - Source 17 is the single precedence model, with `AGENTS.md`, `CLAUDE.md` and `CHATGPT.md` as tier-7 repository instructions under Mission Control.
  - On conflict, `AGENTS.md`, the Protocol and Mission Control instructions prevail over any EOS text.
  - Dormant EOS material cannot outrank current governance.
- *Advantages:*
  - matches how every EOS document already describes itself, so it is the smallest change to the system's actual intent;
  - eliminates the literal-reading inversion in Section 4.3;
  - removes the need to keep dormant EOS documents current merely to avoid outranking newer rules;
  - leaves EOS cleanup (HK-002 to HK-011) as ordinary hygiene rather than a governance prerequisite.
- *Risks:*
  - the actor workflows still drift unless repaired, though the drift becomes harmless because `AGENTS.md` wins;
  - perceived demotion of Infrastructure Operations' EOS programme; mitigated because the operative workflows keep their mandatory-intake role.
- *Files requiring later governed correction:*
  - `AGENTS.md` "Authority Order" (replace the list with Source 17's model or a pointer to it, and state that EOS workflows are operational instructions); the line 27 "supplements the EOS" wording; optionally the line 399 wording;
  - `docs/engineering/eos/README.md` §3 (with HK-004);
  - optionally `CLAUDE.md` and `CHATGPT.md` intake item 4 ("Relevant Engineering Operating System (EOS) documentation", line 30 in each), and `CHATGPT.md` line 91 ("Maintain consistency with the Engineering Operating System").
  - Source 17, Source 18 and the Source Set register need **no** change: they already treat EOS workflows as operational sources.
  - The HK-002 / HK-003 workflow repair becomes advisable but not urgent.

**Option C: conflict rule only (minimal text, considered and not preferred).**

- *Meaning:* keep `AGENTS.md`'s list as is, but add one sentence such as "Where this order differs from Source 17, Source 17 governs; EOS text never overrides `AGENTS.md`, the Protocol or a Mission Control instruction."
- *Justification from evidence:* `README.md` already names Source 17 as the canonical table, so a single sentence would make that explicit in the mandatory intake file.
- *Why not preferred:* it leaves a visibly contradictory list in `AGENTS.md`, which every AI reads first, and it relies on readers applying an override clause rather than reading one correct list.

### 4.6 Smallest Founder decision that removes the ambiguity

> **"Source 17 is the single authority and precedence model. EOS is an operational-workflow layer, not a precedence tier: the actor-specific EOS workflows remain mandatory operational intake, subordinate to `AGENTS.md`, the Communication Protocol and Mission Control instructions; other EOS documents are non-governing unless separately approved. Authorize a later governed edit of `AGENTS.md`'s Authority Order (and the EOS README §3) to match."**

This is Option B expressed as one decision. It requires no change to any canonical source (Sources 01–18, P00).

## 5. "Clean Enough to Preserve" Dependency

> Must HK-017 and/or HK-016 be resolved before Mission Control can reasonably declare GitHub "clean enough to preserve" for the first continuity seed?

| Issue | Repository-content completeness risk | Governance ambiguity risk | Must block first seed? | Safely resolvable after seed? |
|---|---|---|---|---|
| **HK-017** | **None for the seed.** The seed replicates canonical Git; the draft has never been part of canonical history, so the seed is complete with or without it. If the Founder later admits it, it travels to GitLab as an ordinary commit | Low: not in Git, so it cannot be read as authority | **No** | **Yes.** Caveat: the file has no continuity protection until it is either admitted or discarded, so the decision has its own urgency (workstation loss), independent of the seed |
| **HK-016** | **None.** The seed preserves canonical content and history exactly as they are, ambiguity included; resolving it later is an ordinary governed commit | **Real but latent:** a literal-reading inversion between `AGENTS.md` and Source 17; it affects how future work is governed, not the integrity or completeness of what is preserved | **No** | **Yes.** Recommended soon after, because every AI session reads `AGENTS.md` first, but nothing about seeding depends on it |

**Answer: neither HK-017 nor HK-016 needs to block the first continuity seed.** Both are owner decisions whose resolution produces ordinary commits that reach GitLab through the established downstream path. The global "clean enough to preserve" decision remains with Mission Control and the Founder.

## 6. Validation

| Check | Result |
|---|---|
| Canonical `main` at completion | `552fd46d00ca69572df24a4af6339e488697a94a` (unchanged) |
| Local draft | Still untracked (`??`); SHA-256 unchanged (`473b01bd…a75b1cae9ca0`); not staged |
| Secret values | None in the local draft; none reproduced in either report |
| Markdown quality (`tools/markdown/quality_gate.py`, non-modifying) | PASS, 0 issues, both files; re-run by the pre-commit hook |
| `git diff --check` | Clean |
| Changed paths | Only the two authorized report files |

## 7. Confirmation of No Mutation

- No EOS file, `AGENTS.md`, `CLAUDE.md`, `CHATGPT.md`, Source 17 or any canonical source was modified.
- The local B&DR draft was read only: not added, staged, edited, renamed, moved or deleted.
- No EOS content was archived, removed or consolidated; tag `eos-v1.0` untouched.
- No branch deleted or pruned; no PR closed or reopened; no GitHub or GitLab setting changed; no GitLab seed.
- No application code, tests, SQL or migrations changed.

EOS DECISION DOSSIER SUBMITTED — NO EOS / GOVERNANCE / LOCAL-DRAFT / PROVIDER MUTATION PERFORMED — STOP FOR MISSION CONTROL DISPOSITION
