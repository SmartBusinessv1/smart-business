# SB-OPS-REPO-HOUSEKEEPING-1.3 — Divergent Branch Register

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.3
**Execution actor:** Claude Code
**Canonical baseline:** `main` at `7055361d89fb000e543876672cc617c30a404d65`
**Date:** 2026-10-04
**Companion report:** [`01_divergent_branch_review.md`](01_divergent_branch_review.md)

Classification is not execution authority. No branch was merged, cherry-picked, deleted or pruned.

"Unique commits" means commits on the branch not reachable from `main`. Main Coverage terms:

- **identical**: same blob on `main`, or in the immutable SB-P-1.11 archive;
- **superseded**: a later merged PR or record covers the same purpose;
- **absent**: no counterpart on `main`.

## Register

| ID | Branch | Tip SHA | Unique Commits | Related PR(s) | Unique Files / Material | Main Coverage | Classification | Recommendation | Confidence |
|---|---|---|---:|---|---|---|---|---|---|
| DB-01 | `docs/SB-DOC-PHASE1-HISTORY-1.0-25-contract-implementation-baseline` | `c900f65f8f46` | 4 | #535 merged (tip moved after merge); #536 closed | Post-merge commits: ledger `08_Current_Source_Reconciliation_Ledger.md`; `c900f65` restructure of `00_Global_Product_Completion_View.md` (+118 / −222) | Ledger identical (landed via #537); `07_…Baseline_Refresh…` identical; the view restructure never landed, and main's view was later amended by the SB-GOV-PRODUCT-EXEC-1.0 redline (#606) | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery; recovering `c900f65` would conflict with the #606-governed view. Optional later navigation note: main's view does not link the 08 ledger | MEDIUM |
| DB-02 | `docs/SB-DOC-PHASE1-HISTORY-1.0-build-proposal-claude-handoff` | `e0975b888e19` | 4 | #541 merged (tip moved after merge) | `communication/live/instruction.1.md`, `instruction.2.md`; build-proposal revision | Both instructions byte-identical in `communication/archive/SB-DOC-PHASE1-HISTORY-1.0/live-handoffs/`; build proposal revised later on `main` (#546) | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-03 | `docs/sb-p-1-12-successor-mc-handover` | `45736ec4c142` | 1 | #619 closed | Earlier draft of `mission-control/SB-P-1.12_Successor_Mission_Control_Handover.md` | Replaced by a different, later handover merged in #620 (0% line overlap; same path) | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-04 | `mission/SB-DOC-PHASE1-HISTORY-1.0-groundzero-section5-q59-68` | `db1de367e467` | 3 | #525 closed | `Section_5_of_7_Continuation_Questions_59_68_…md`; README status edit | #524 (merged 12 min before #525 closed) landed `Section_5_of_7_Part_B_…md`, an extraction of the same Questions 59–68 from the same primary evidence; main README marks Section 5 complete | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery; alternative extraction of already-canonical material | HIGH |
| DB-05 | `mission/SB-DOC-PHASE1-HISTORY-1.0-planning-origin-part20-final` | `31114e593ea3` | 10 | #516 merged (tip moved after merge) | Post-merge: Founder guardrails record; checkpoint edit | Guardrails landed via #517 (reworded; all 11 section headings present); checkpoint identical; other differences are later evolution on `main` | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-06 | `mission/SB-ENG-BUILD-ASSURANCE-1.0-foundation` | `293ef736ac66` | 12 | None | 10 mission-scaffold files under `communication/missions/SB-ENG-BUILD-ASSURANCE-1.0/` (README, scope, decision log, handover log, activation, checklist, pointers, Founder note); 2 live pointer files | Same mission (same name, date and Founder approval) activated as `SB-OPS-BUILD-ASSURANCE-1.0` (#574) and `CLOSED — ACCEPTED`. Its Stage 1 report records that this branch "was not reused or merged". No Stage 1 report, workflow or code exists on the branch | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery (would create a duplicate, conflicting mission ID). See review §4.1 for four idea-level "separate mission" items | HIGH |
| DB-07 | `mission/SB-GOV-COMMS-1.3-closure-metadata` | `69b92bea7947` | 1 | #478 closed | Draft `communication/live/instruction1.1.md` (closure-metadata authorization) | Mission memory on `main` records "#478 closed unmerged as superseded"; #479 merged the final closure authorization | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-08 | `mission/SB-GOV-COMMS-1.3-memory-note` | `74ebe70d6a9e` | 1 | #456 closed | Mission-memory note scheduling SB-GOV-COMMS-1.3 enforcement as a deferred mission | SB-GOV-COMMS-1.3 then ran and is `COMPLETED — FORMALLY ACCEPTED` (2026-09-03); the follow-on daily-audit item is already in main's mission memory | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-09 | `mission/SB-ORG-LEARNING-1.1-stage1` | `6206630aeffc` | 5 | #587 closed | `03-stage1-claude-code-authorization.md`; live and README/log edits | Main has `03-stage1-authorization.md` and 45 Mission Control records; mission `COMPLETED — FORMALLY ACCEPTED` | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-10 | `mission/SB-P-1.11-FWR-5-bkr3-fk-order` | `27dfc1c0ecf2` | 1 | #221 closed | Draft `instruction1.94.md` (FWR-5 FK-order micro-correction) | Canonical `instruction1.94.md` (same correction) in `communication/archive/SB-P-1.11/source/` | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery; archive immutable | HIGH |
| DB-11 | `mission/SB-P-1.11-GC-1-production-equivalent-runtime-probe` | `7423a261a73a` | 2 | #195 merged (tip moved after merge); #196 closed | `instruction1.82.md`, `report1.89.md` | Both byte-identical in `communication/archive/SB-P-1.11/source/` | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-12 | `mission/SB-P-1.11-GC-1-runtime-compatibility` | `47873701e9b4` | 1 | #193 closed | Earlier `report1.88.md` (10.6 KB) | #194 merged a fuller `report1.88.md` (14.8 KB) with the same "not proven" verdict, now archived | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-13 | `mission/SB-P-1.11-GC-10-final-b1-infra-confirmation` | `47ec2c5bd4d3` | 2 | #246 merged (tip moved after merge) | `instruction1.106.md`, `report1.115.md` | Both byte-identical in `communication/archive/SB-P-1.11/source/` | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-14 | `mission/SB-P-1.11-GC-40-aws-execution-access-design-check` | `1c058dfdcf92` | 3 | None | `report1.144.md`; add-then-remove "temporary branch marker" commits | Report byte-identical in `communication/archive/SB-P-1.11/source/` | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-15 | `mission/SB-P-1.11-GC-42B-report` | `0712ff17c895` | 1 | None | `tmp-placeholder.txt` (4 bytes: `temp`), commit message "temp" | No material | ABANDONED / ERRONEOUS — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-16 | `mission/SB-P-1.12-esc1-founder-record-instruction` | `a4c261b45a5a` | 1 | #647 closed | Draft MC-59 `communication/live/instruction1.3.md` | MC-59 reissued and merged via #648; ESC-1 work continued in Claude Code records 27–31 | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-17 | `mission/SB-P-1.12-founder-decisions-blueprint-reconciliation-auth` | `4610ea4a907f` | 8 | #633 closed | Draft MC-25 authorization `12-founder-decision-and-blueprint-reconciliation-authorization.md`, snapshots, log/README edits | MC-25 canonical via #634 (decision log); reconciliation executed (Claude Code report 18); snapshot content 100% on `main` | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-18 | `mission/SB-P-1.12-founder-gitlab-setup-guide` | `d8b0ac132d8b` | 1 | #732 closed | Draft Founder GitLab guidance (`report1.48.md`, `specialists/13-…`) | Mission Control closing comment: "Superseded duplicate. PR #733 contains the Mission Control-reviewed MC-187 Infrastructure guidance"; #733 merged | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |
| DB-19 | `mission/SB-P-1.12-mission-control-handover` | `0decb1c33db1` | 1 | #723 closed | MC-182 draft "Mission Control Handover After Provider Continuity Reconciliation" | Overtaken: #724 merged MC-182 as the Founder continuity decision disposition, resolving FD-C1 to FD-C7. The handover's facts (Support ticket, community discussions, account flag) are on `main` (records 40, 49; live 1.39 to 1.42) | SUPERSEDED — SAFE FOR LATER PRUNE | No recovery | HIGH |

## Classification Count

| Classification | Count | IDs |
|---|---:|---|
| RECOVER INTO MAIN — CANDIDATE | 0 | — |
| SUPERSEDED — SAFE FOR LATER PRUNE | 18 | DB-01 to DB-14, DB-16 to DB-19 |
| HISTORICAL ONLY — KEEP / LATER PRUNE DECISION | 0 | — |
| ABANDONED / ERRONEOUS — SAFE FOR LATER PRUNE | 1 | DB-15 |
| OWNER DECISION REQUIRED | 0 | — |
| **Total** | **19** | |

## Preservation Note for Any Later Prune

Under D-3 / Option B (PR #738) all 19 refs are retained through the first GitLab seed, so their commits will exist in GitLab.

- **Closed or merged PR heads** (16 branches) are additionally preserved in GitHub `refs/pull/*`.
- **No PR** (DB-06, DB-14, DB-15): the branch itself, and after seeding its GitLab copy, is the only preservation. A later prune mission should note this before deleting them on GitHub.
