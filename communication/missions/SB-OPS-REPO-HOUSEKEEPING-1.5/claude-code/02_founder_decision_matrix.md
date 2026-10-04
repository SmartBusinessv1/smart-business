# SB-OPS-REPO-HOUSEKEEPING-1.5 — Founder Decision Matrix

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.5
**Execution actor:** Claude Code
**Canonical baseline:** `main` at `552fd46d00ca69572df24a4af6339e488697a94a`
**Date:** 2026-10-04
**Evidence:** [`01_eos_governance_and_local_draft_decision_dossier.md`](01_eos_governance_and_local_draft_decision_dossier.md)

**No decision in this matrix has been made.** "Recommended path" is Claude Code's evidence-based recommendation for Founder and Mission Control consideration only. Every option that changes repository content requires a separately authorized, governed mission.

## D-1 / HK-017 — Local EOS Backup and Disaster Recovery Draft

Subject: `docs/engineering/eos/Engineering_Backup_and_Disaster_Recovery_v1.0.md`. It is local-only and untracked; 7,446 bytes; SHA-256 `473b01bd…a75b1cae9ca0`; status "Draft", all approvals pending; claimed mission `SB-INF-1.16`, which is not recorded anywhere in canonical history; no secret-like content.

| Decision | Option | Consequence | Risk | Recommended path | Requires later governed mutation? |
|---|---|---|---|---|---|
| D-1 | **Recover as historical draft** | File enters Git under `docs/engineering/eos/archive/`, renamed as clearly historical with a manifest entry (archive README rules); gains continuity protection | Low. Archive boundary keeps it non-current. Small risk a reader treats its stale model (Google Drive, workstation backups) as guidance | Acceptable **fallback** if the Founder wants zero loss | **Yes**: archive-admission mission (rename, manifest, Mission Control authorization) |
| D-1 | **Recover for governed revision** | File is rewritten to match Track A and Track B and approved as an EOS standard | **Medium.** Duplicates the SB-P-1.12 continuity records 51–58 that already govern continuity; adds a third continuity narrative; deepens HK-016 while EOS authority is unresolved | **Not recommended** | **Yes**: authoring, review and approval mission |
| D-1 | **Discard knowingly** | File stays out of Git. The Founder deletes or keeps it locally outside the repository; this dossier remains the provenance record (identity, structure, model, hash) | Low. Loses only generic principles that are already reflected substantively in canonical Track A and protocol records | **Recommended** | **No** repository mutation. A local workstation action by the Founder only; optionally one line in mission memory recording the disposition |

Timing: not a first-seed blocker. The decision has its own urgency, because the file is protected by neither Track A nor Track B while it stays local.

## D-5 / HK-016 — EOS Position in the Authority Order

Conflict: `AGENTS.md` ranks EOS (tier 4) above `AGENTS.md` (tier 5) and mission instructions (tier 6). Source 17, which `README.md` declares canonical, does not name EOS and places Mission Control (5) above repository and mission instructions (7). Every EOS document describes itself as subordinate to governance, Mission Control and `AGENTS.md`.

| Decision | Option | Consequence | Risk | Recommended path | Requires later governed mutation? |
|---|---|---|---|---|---|
| D-5 | **A — EOS remains a precedence tier** | Source 17 must name EOS. Every EOS document in the tier must be kept current and approved (README register, actor workflows, AC-02 resolution, stale "Approved" documents refreshed or withdrawn). Self-subordinating clauses in the workflows and the v1.0 specification must be reworded | **High and recurring.** Any change to `AGENTS.md`, the Protocol or Source 18 needs a synchronized EOS edit or stale EOS text outranks it. Burden falls on a dormant document set | Not recommended | **Yes, extensive**: Source 17 (canonical-source change control, Founder approval), `AGENTS.md`, EOS README, actor workflows, AC-02 and stale documents |
| D-5 | **B — EOS reduced to operational-workflow layer** | Source 17 becomes the single precedence model. The two actor workflows stay mandatory intake, subordinate to `AGENTS.md`, the Protocol and Mission Control. Other EOS documents are non-governing unless separately approved | **Low.** Workflow drift (HK-002 / 003) remains until repaired but cannot outrank current rules. Perceived demotion of the EOS programme | **Recommended**: the smallest decision that removes the ambiguity, and it matches how all EOS documents already describe themselves | **Yes, narrow**: `AGENTS.md` Authority Order and the line 27 wording; EOS README §3 (with HK-004); optionally `CLAUDE.md` / `CHATGPT.md` intake item 4. **No canonical-source change** |
| D-5 | **C — Conflict rule only** | `AGENTS.md` keeps its list and adds one sentence: Source 17 governs where the orders differ, and EOS text never overrides `AGENTS.md`, the Protocol or Mission Control | Low to medium. A contradictory list remains in the first file every AI reads; correctness depends on applying an override clause | Acceptable minimal alternative; not preferred | **Yes, one sentence** in `AGENTS.md` |

Suggested wording of the D-5 Option B decision, for Founder consideration only:

> Source 17 is the single authority and precedence model. EOS is an operational-workflow layer, not a precedence tier: the actor-specific EOS workflows remain mandatory operational intake, subordinate to `AGENTS.md`, the Communication Protocol and Mission Control instructions; other EOS documents are non-governing unless separately approved. Authorize a later governed edit of `AGENTS.md`'s Authority Order (and the EOS README §3) to match.

Timing: not a first-seed blocker. Recommended soon after, because `AGENTS.md` is read first in every AI session.

## Seed Dependency Summary

| Decision | Content-completeness risk to first seed | Governance-ambiguity risk | Blocks first seed? |
|---|---|---|---|
| D-1 / HK-017 | None (never part of canonical history) | Low (not in Git) | **No** |
| D-5 / HK-016 | None (seed preserves canonical content as-is) | Real but latent (literal-reading inversion) | **No** |

The global "clean enough to preserve" disposition remains with Mission Control and the Founder.

## Out of Scope (context only, not decided here)

HK-002 to HK-011 (actor-workflow drift, EOS README register, AC-02, stale, archive and consolidation candidates, quality-gate document, verification sample) are unaffected by this matrix. Under Option B they become ordinary EOS hygiene rather than governance prerequisites. EOS `v1.0/` and tag `eos-v1.0` remain historical and audit material in every option.
