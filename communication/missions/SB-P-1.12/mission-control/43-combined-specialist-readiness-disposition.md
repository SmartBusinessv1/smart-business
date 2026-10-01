# SMART BUSINESS MISSION CONTROL — MC-173

# SB-P-1.12 — Combined Supabase / Security Readiness Disposition

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-01  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Supabase review:** PR #705 — canonical  
**Security review:** PR #706 — canonical  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Canonical specialist evidence

Mission Control verified both specialist reviews on canonical `main@7f1c9cc05e1f78ca22768acba63f454b501d6f20`.

Supabase review:
- `communication/missions/SB-P-1.12/specialists/07-stage13-supabase-implementation-readiness-review.md`
- blob `3cf60af8be2a9ec05aa0da622a4e8782ddcbecb9`

Security review:
- `communication/missions/SB-P-1.12/specialists/08-stage13-security-implementation-readiness-review.md`
- blob `fa3d0a70d662eac56318c525a41124ada07793c7`

Both reviews are advisory evidence. Neither creates implementation or migration authority.

## 2. Combined disposition

**REFINEMENT AND EVIDENCE CLOSURE REQUIRED BEFORE MIGRATION-PLAN ACTIVATION OR APPLICATION IMPLEMENTATION AUTHORIZATION**

No Product Truth, Blueprint, EIS or locked implementation-package reopening is required.

The remaining issues are implementation-readiness and evidence conditions inside the approved architecture.

## 3. Finding reconciliation

### 3.1 Migration order

The locked EIS controls.

The candidate order shall be corrected to preserve:

`WS-0 → WS-A1 → WS-A2 and WS-E → WS-F → WS-D → WS-A3 per family → WS-B → WS-C → WS-G`

Therefore the migration sequence shall place:

- M-05 / M-06;
- M-07;
- **M-09 → M-10 → M-11 → M-12**;
- **then M-08**;
- then M-13 family cut-overs.

This resolves the difference between the Supabase high-level-order finding and the Security exact-EIS-order finding without changing the EIS.

### 3.2 Kernel helper / RLS physical contract

The architecture is accepted, but before migration authoring the refined plan must explicitly state the non-recursive physical access pattern for the dedicated definer owner / executor path.

It must preserve:

- no broad client `USING (true)` policy;
- minimum read rights only;
- no recursive helper policy;
- hardened empty `search_path`;
- schema-qualified references;
- performance/plan verification on list/search paths.

### 3.3 Delete guards

The design decision remains: application `service_role` receives no standing delete bypass.

Before production reliance, evidence is still required for migration-owner/admin/provider interaction with the final guard/trigger arrangement.

This is an evidence gate, not permission to weaken the guard.

## 4. Required migration-plan refinements

Before `SB-MIG-1.4` may be considered for activation, the candidate plan must incorporate all of the following:

1. correct WS-F-before-WS-D / M-09…M-12-before-M-08 sequence;
2. source-complete actor-column inventory and zero-unresolved reconciliation contract before M-09;
3. source-complete business-FK/cascade inventory and record-class disposition before M-10;
4. explicit M-10 no-safe-reversal boundary;
5. explicit M-06 non-recursive definer-owner / authority-table read contract;
6. deterministic schema ownership:
   - `EC-AUD-04` → M-07;
   - `EC-CNF-03` → M-08 using the generalized confirmation-binding architecture;
   - no competing event or preview authority subsystem;
7. source-complete `SECURITY DEFINER` inventory and compliance mapping;
8. M-13d old Catalog signature/overload retirement in the same cut-over;
9. source-complete privileged `service_role` handler inventory and decision-binding requirement;
10. explicit per-family M-13 abort/revert/forward-correction decision rules;
11. guarded wrapper requirement for every remote target-mutating Supabase CLI operation; bare remote target-mutating CLI is prohibited;
12. finding-scoped Supabase and Security pre-merge checkpoints required by the two specialist reviews.

No SQL may be created under this refinement authorization.

## 5. Evidence blockers

### 5.1 Before migration-plan activation / migration authoring authority

The following must be positively established or explicitly carried as activation blockers:

- current approved test target identity and accessibility;
- test migration ledger alignment;
- test schema/grant baseline;
- clean replay feasibility from canonical history;
- actor/orphan census plan and acceptance threshold;
- cascade inventory / record-class evidence source;
- source-complete definer-function and privileged-handler inventories;
- executable assurance path for Stage 15;
- test-bound runtime-verification environment.

### 5.2 Before affected groups may execute in production

Additionally required:

- production-shaped rehearsal for M-04, M-09…M-11 and every M-13 family;
- lock/contention measurements and timeouts/abort criteria;
- G-6 effective grants/default privileges/function execution evidence before M-17;
- current production backup/PITR/recovery evidence;
- provider/admin delete-guard interaction evidence;
- G-7 storage/provider evidence before M-20 and identity-deletion runtime;
- separate runtime authorization for M-19 / identity deletion.

## 6. Accepted current-state correction

The canonical Supabase review records a current read-only observation that production carries all 24 canonical-era migration versions through `20260902150000`.

Mission Control accepts this as current **ledger-presence evidence only**.

It does not establish:

- migration-byte equivalence;
- effective grants/default privileges;
- backup/PITR;
- test-project alignment;
- provider/storage deletion behavior;
- production execution authority.

## 7. Builder and verification direction

The primary builder model remains a recommendation, not yet an appointment.

Current preferred direction, subject to evidence closure:

- Claude Code for canonical repository builder workstreams;
- Lovable excluded from schema/migration work;
- Stage 14 likely `NOT APPLICABLE — JUSTIFIED` under that model;
- Codex remains the intended Stage 19 verifier candidate;
- Claude Code cannot independently verify work it builds/corrects/transfers;
- Security/Supabase specialist pre-merge reviews remain advisory review gates, not final independent verification.

The final Source 18 Implementation Authorization remains WITHHELD until all required fields and blockers are dispositioned.

## 8. Next authorized work package

Work package:

`SB-P-1.12-WP-MIGRATION-PLAN-REFINEMENT-AND-EVIDENCE-CLOSURE`

Recipient: Claude Code.

Purpose:

Refine the candidate `SB-MIG-1.4` manifest and produce an evidence-closure matrix from canonical repository/provider facts already durably available.

This package is planning/read-only evidence work only.

Write only:

1. `communication/missions/SB-P-1.12/claude-code/38-stage13-migration-plan-refinement-and-evidence-closure.md`
2. `communication/live/report1.36.md`

Required outputs:

- corrected M-01…M-20 order;
- deterministic obligation-to-migration allocation;
- explicit M-10 reversal boundary;
- M-06 non-recursive authority-read physical contract proposal;
- source-complete repository inventory of existing `SECURITY DEFINER` functions;
- source-complete repository inventory of privileged `service_role` handlers;
- repository-derived FK/cascade inventory;
- repository-derived actor-column inventory;
- refined specialist pre-merge checkpoint map;
- evidence-closure matrix listing each unresolved blocker, evidence owner, evidence source, whether read-only provider access is needed, and the exact condition for closure;
- CI/assurance blocker carried unchanged unless new canonical evidence exists;
- runtime-verification-environment blocker carried unchanged unless new canonical evidence exists.

Do not invent live/provider facts not already durably evidenced.

Do not create SQL or migration files.

## 9. Git authorization

**Repository:** `SmartBusinessv1/smart-business`  
**Branch:** `mission/SB-P-1.12-stage13-migration-plan-refinement`  
**Authorized base:** canonical `main` after this MC-173 PR is human-merged and verified  
**Writable paths:** exactly the two report paths in Section 8  
**Commit:** mission-scoped descriptive message with required `Co-Authored-By` trailer  
**Permitted:** fetch, inspect, create authorized branch, write exact two reports, stage, commit, push, open one PR to `main`, report exact head/blobs  
**Prohibited:** force push, direct `main`, self-approval, self-merge, SQL creation, migration creation/execution, provider mutation, production mutation, application implementation

Authorization expires when the refinement PR is opened and reported, or 2026-10-03T23:59:59+05:30, whichever occurs first.

## 10. Preserved holds

- R-2 CLOSED / SATISFIED.
- ESC-1 OPEN T8.
- `22-§20-2` BLOCKED / IN SCOPE.
- G-6/T4 UNVERIFIED.
- Professional legal/privacy/retention validation deferred.
- Identity-deletion runtime NOT AUTHORIZED.
- Implementation Authorization WITHHELD.
- Application implementation NOT AUTHORIZED.
- SQL/migration creation or execution NOT AUTHORIZED.
- Provider/production mutation NOT AUTHORIZED.
