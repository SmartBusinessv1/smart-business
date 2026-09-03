# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-DOC-1.10-1.11-CONTINUITY-1.0`

**Mission Name:** `Post-Completion Documentation & Evidence Reconciliation`

**From:** Smart Business Mission Control

**To:** `Claude Code / Documentation Reconciliation Operator`

**Status:** `ACTIVE — DOCUMENTATION-ONLY RECONCILIATION`

**Date:** `2026-09-03`

---

## 1. Mission purpose

Reconcile the durable documentation for `SB-P-1.10 — Inventory Foundation` and `SB-P-1.11 — Product Catalog & Pricing` with the later implementation, correction, production-synchronization, publication, and operational evidence now present in the canonical repository.

The purpose is long-term institutional continuity.

A reader returning to Smart Business after a year must be able to determine from the repository itself:

- what SB-P-1.10 and SB-P-1.11 originally approved and implemented;
- what was historically true at each completion/acceptance point;
- what changed afterward;
- why each material change occurred;
- which mission or Founder decision authorized it;
- what implementation, migration, runtime, and production evidence proves it;
- which earlier statements remain historically correct but are no longer current operational state;
- what the current authoritative product/runtime state is now.

Do not rely on chat continuity or institutional memory to bridge missing documentation.

## 2. Canonical baseline and immediate predecessor

Canonical repository:

`SmartBusinessv1/smart-business`

Start only after this activation/archive-reset PR has been human-merged to `main`.

The immediately preceding operational mission is:

`SB-OPS-PROD-SYNC-1.0 — Production Runtime Synchronization & Lovable Recovery`

Its final closure is canonical through merged PR `#470` / merge commit:

`eca9e738d0233314264a5805b37cd18cedf16ca7`

Its live communication has been archived under:

`communication/archive/SB-OPS-PROD-SYNC-1.0/`

Do not reopen that operational mission. Use its records as evidence for this documentation reconciliation.

## 3. Core reconciliation rule — preserve history, clarify current truth

This mission must **not rewrite historical evidence to make old documents look as if they always knew later facts**.

Apply this distinction consistently:

### Historical snapshot

If a statement was true when a document was created, preserve it as historical evidence even if later work changed the operational state.

Examples include:

- SB-P-1.10 historical Lovable-managed runtime/backend references;
- SB-P-1.11 Stage 22 status before Stage 23 acceptance;
- Stage 24 statements that application publication or production-domain verification had not yet occurred at that moment.

### Current continuity

Where a historical document can now mislead a future reader about current state, add a clearly dated lifecycle/continuity/supersession note pointing to the later authoritative evidence.

Do not silently replace old facts with new facts.

### Product Truth change vs implementation correction

Do not invent Product Truth changes.

Where a later Founder-authorized decision genuinely refined an earlier product behavior, identify it explicitly as a later product refinement and cite the durable decision/evidence chain.

Where work merely corrected implementation to satisfy already-locked product truth, record it as an implementation/integrity correction, not as a new product decision.

## 4. Required audit scope

Audit the repository broadly enough to identify every material SB-P-1.10 / SB-P-1.11 document whose current presentation can create a false continuity assumption.

At minimum inspect:

### Phase 1 blueprint layer

- `docs/phase-1-mission-blueprint/README.md`
- `docs/phase-1-mission-blueprint/completed/SB-P-1.10.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Workflow-Reconciliation-Record.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Build-Now-Gap-Closure-EIS.md`

### EIS layer

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.10-EIS.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

### Implementation layer

- `docs/implementation/SB-P-1.10/**`
- `docs/implementation/SB-P-1.11/**`

Prioritize completion reports, verification indexes/checklists, evidence READMEs, engineering contracts, build records, and any document carrying lifecycle/deployment/runtime status.

### Operational / release / continuity evidence

Inspect relevant records under:

- `communication/missions/SB-P-1.11/**`
- `communication/archive/SB-P-1.11/**`
- `communication/archive/SB-REL-1.10-1.11/**`
- `communication/archive/SB-OPS-PROD-SYNC-1.0/**`
- `communication/missions/SB-OPS-PROD-SYNC-1.0/**`
- `communication/evidence/**` where directly relevant;
- `docs/operations/**` where directly relevant;
- `docs/verification/**` where directly relevant;
- `docs/migration/README.md` and the specific migrations/evidence needed to support later integrity corrections.

Do not modify large historical archives merely because they contain old state. They are evidence sources unless a real administrative error exists.

## 5. Known continuity problems to verify, not blindly assume

The prior Mission Control audit identified the following probable issues. Re-verify each against current `main` before editing:

1. `docs/phase-1-mission-blueprint/README.md` contains a stale folder example that still presents SB-P-1.10 under `active/`.
2. `SB-P-1.10-EIS.md` points to an `active/SB-P-1.10.md` path even though the blueprint is under `completed/`.
3. `completed/SB-P-1.10.md` contains lifecycle metadata such as `Mission Status: Approved` / `Blueprint Status: Active` that may need an explicit completion continuity note rather than historical rewriting.
4. SB-P-1.10 completion/runtime evidence records the historical Lovable Cloud backend topology; this must remain historical evidence but must no longer be easily mistaken for the current production topology.
5. SB-P-1.11 remains physically under `active/` despite later Stage 23 acceptance and Stage 24 formal documentation closure.
6. SB-P-1.11 Blueprint/EIS metadata still describes pre-implementation lifecycle gates. Preserve the locked historical state while clearly pointing to later implementation and acceptance.
7. `docs/implementation/SB-P-1.11/completion-report.md` is a Stage 22 artifact whose headline status predates Stage 23/24 closure; it requires a post-report lifecycle pointer, not falsification of its original Stage 22 status.
8. SB-P-1.11 Stage 24 correctly stated that application publication/production-domain verification had not yet occurred at that time; later `SB-OPS-PROD-SYNC-1.0` evidence now proves those later events and must be linked as post-closure operational evolution.
9. The original Catalog ↔ Inventory merchant linking model was later found operationally unsafe for ordinary products. The later Founder-authorized standard behavior is system-managed dedicated Inventory identity per ordinary stock-tracked Catalog product, while Catalog and Inventory remain separate truth models and Inventory remains sole stock authority.
10. Phase A server-side reuse protection, the controlled production repair, and Phase B `UNIQUE (business_id, inventory_item_id)` structural enforcement were subsequently completed and verified in production.
11. CSV/XLSX Opening Stock onboarding, Catalog inline Category/Selling Unit correction, parser-runtime compatibility correction, and associated practical Step-4 work were subsequently implemented and runtime verified.
12. The active production Lovable project was published, `smartbusiness.teamlips.com` cut over and verified healthy, the old workspace renamed `Legacy Workspace-old`, and the legacy deployment unpublished without deletion.

If current repository evidence contradicts any item above, report the contradiction and preserve the stronger evidence. Do not force the audit premise to be correct.

## 6. Required new continuity artifact

Create one durable cross-mission continuity document at:

`docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md`

The document must be understandable without chat history and must contain at minimum:

1. purpose and authority boundary;
2. original SB-P-1.10 completion state;
3. original SB-P-1.11 accepted/closed state;
4. chronological post-completion evolution;
5. Founder workflow/product refinements;
6. parser and bulk-import implementation/corrections;
7. Catalog ↔ Inventory identity defect discovery and root cause;
8. merchant-facing dedicated Inventory identity correction;
9. backend Phase A reuse guard;
10. controlled Mango/Milma Milk/AVT Tea Powder production repair and why the `+5` test movement was compensated rather than erased;
11. Phase B schema uniqueness deployment;
12. test migration-history reconciliation;
13. runtime synchronization into the intended production delivery repository;
14. Lovable publication and custom-domain cutover;
15. legacy workspace unpublication;
16. present production topology;
17. retained historical/non-blocking verification debt, clearly separated from blockers;
18. a source/evidence index with exact repository paths, PRs/commits where material, and explicit supersession relationships.

Do not turn this continuity artifact into a new Constitution, Product Blueprint, or replacement EIS. Its purpose is traceable chronology and current-state interpretation.

## 7. Product ↔ Inventory continuity requirement

This is the most important product-continuity item in the reconciliation.

The resulting documentation must make all of the following simultaneously clear:

- Catalog product identity and Inventory stock identity remain technically separate records.
- Inventory remains the sole stock quantity/movement truth.
- Build Now ordinary stock-tracked products use a system-managed one-to-one dedicated Inventory identity.
- Merchants are not expected to manually choose an arbitrary unrelated Inventory item for ordinary stock tracking.
- later advanced variants/packs/bundles/recipes/shared-raw-material relationships remain outside the ordinary Build Now model.
- D-047 historical-integrity protections remain relevant; the later correction did not erase audit history.
- the database now enforces `(business_id, inventory_item_id)` uniqueness for non-null links through the deployed Phase B constraint.

Classify whether each required text change is:

- a historical lifecycle annotation;
- a path/status correction;
- an already-authorized Founder product refinement record;
- an implementation/integrity correction record;
- or a new Product Truth change that is **not authorized** by this mission.

If a genuinely new Product Truth decision would be required, stop on that item and report it rather than inventing one.

## 8. SB-P-1.11 active → completed disposition

Re-evaluate the physical location of the SB-P-1.11 blueprint and its directly coupled Founder records.

If the canonical Stage 23/24 records prove the Product Mission is completed/formally accepted, move the appropriate mission-level blueprint record from `active/` to `completed/` and repair repository links accordingly.

Do not move implementation EIS artifacts simply because the Product Blueprint moves; preserve the repository's intended folder semantics.

Do not move unrelated active records without evidence.

## 9. Editing boundaries

### Build Now — authorized

- documentation audit and reconciliation;
- path/link repairs;
- lifecycle/status continuity annotations;
- cross-mission continuity document;
- moving an already-completed mission blueprint from `active/` to `completed/` where canonically justified;
- current-production topology annotation linked to later evidence;
- source/evidence indexes;
- explicit supersession notes based only on already-authorized decisions and completed evidence.

### Build Later / separate work

- redesigning Phase 1 product behavior beyond already-authorized decisions;
- changing runtime code because documentation exposes a product gap;
- new migrations or database cleanup;
- new permission model;
- new variants/bundles/recipe architecture;
- new release/pilot work.

### Reject under this mission

- rewriting historical evidence to hide prior states or defects;
- deleting evidence because it is old;
- changing Product Truth without Founder authority;
- changing application code, SQL, RLS, Auth, grants, infrastructure, DNS, Lovable, Supabase, AWS, or production data;
- treating `communication/archive/**` as current authority;
- broad formatting churn unrelated to continuity.

## 10. Git authorization

After this activation/reset PR is human-merged, Founder/Mission Control authorizes **Claude Code** for mission **`SB-DOC-1.10-1.11-CONTINUITY-1.0`** to operate on repository **`SmartBusinessv1/smart-business`**, using branch:

`mission/SB-DOC-1.10-1.11-CONTINUITY-1.0-reconciliation`

limited to documentation and communication paths directly required by Sections 4–9, with commit message:

`Reconcile SB-P-1.10 and SB-P-1.11 continuity evidence`

Claude Code may:

- fetch and fast-forward only;
- create the named mission branch from current canonical `main`;
- inspect repository history/evidence;
- modify only authorized documentation/communication paths;
- stage exact files;
- run Markdown/repository quality checks;
- commit and push the mission branch;
- open a pull request to `main`.

No direct push to `main`, self-merge, self-approval, force push, history rewrite, or unrelated staging.

## 11. Required verification before PR

At minimum verify:

- every changed path is documentation/communication only;
- no application/runtime/SQL/migration file changed;
- no historical evidence body was silently rewritten when a continuity annotation/link would suffice;
- all moved-file links resolve;
- all new claims have a durable repository evidence source;
- current production topology references are consistent with the final `SB-OPS-PROD-SYNC-1.0` closure;
- Product ↔ Inventory current-state wording matches the already-authorized Founder decision and deployed Phase A/repair/Phase B evidence;
- SB-P-1.10 and SB-P-1.11 lifecycle states are internally consistent across blueprint indexes, completion reports, and mission records;
- `git diff --check` passes;
- repository Markdown quality gate passes or any pre-existing unrelated limitation is reported precisely;
- no secret, credential, personal account data, or environment value is introduced.

## 12. Required reply

Write the initial specialist result to the fresh base reply file:

`communication/live/report.md`

Do not start with `report1.1.md`; this is a fresh communication cycle.

The report must include:

1. exact canonical baseline SHA;
2. complete audited file inventory classified as `UPDATE`, `MOVE`, `PRESERVE HISTORICAL`, `NO CHANGE`, or `FOLLOW-UP`;
3. contradictions found and how they were resolved;
4. exact files changed/moved/created;
5. summary of the new cross-mission continuity document;
6. SB-P-1.10 lifecycle reconciliation;
7. SB-P-1.11 lifecycle reconciliation;
8. Product ↔ Inventory continuity reconciliation;
9. historical runtime topology vs current production topology treatment;
10. evidence/PR/commit traceability added;
11. verification results;
12. anything intentionally left unchanged and why;
13. any item requiring a genuinely new Founder Product Truth decision;
14. PR number and head commit;
15. confirmation that no runtime/database/infrastructure/production mutation occurred.

End with exactly one:

`PASS — SB-P-1.10 / SB-P-1.11 CONTINUITY RECONCILIATION READY FOR MISSION CONTROL REVIEW`

or

`BLOCKED — SB-P-1.10 / SB-P-1.11 CONTINUITY RECONCILIATION REQUIRES FOUNDER/MISSION CONTROL DECISION`

or

`FAIL — SB-P-1.10 / SB-P-1.11 CONTINUITY RECONCILIATION FAILED`

## 13. Stop conditions

Stop only when:

- a proposed change would alter Product Truth without existing Founder authority;
- historical and later evidence genuinely conflict and authority cannot be determined;
- a required path move would break an external or governed dependency that cannot be repaired safely in documentation;
- a tracked secret or sensitive value is encountered;
- unrelated branch changes or merge conflicts prevent safe exact-file work.

Ordinary stale status text, broken links, lifecycle annotations, archive references, and evidence indexing are documentation work within this mission and should be reconciled rather than escalated.

---

**Mission Control boundary:** make the repository self-explanatory across time. Preserve what was true then, make clear what is true now, and connect every material change to durable evidence without redesigning Smart Business.