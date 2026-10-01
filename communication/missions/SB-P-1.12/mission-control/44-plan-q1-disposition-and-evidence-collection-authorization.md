# SMART BUSINESS MISSION CONTROL — MC-174

# SB-P-1.12 — PLAN-Q-1 Disposition and Read-Only Evidence Collection Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-01  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Canonical refined plan:** PR #708  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Canonical refined-plan verification

Mission Control verified PR #708 human-merged to canonical:

`main@ff8372da45ba4ee20b7db844a18135cb136d5148`

Canonical refinement artifacts:

- `communication/missions/SB-P-1.12/claude-code/38-stage13-migration-plan-refinement-and-evidence-closure.md`
  - blob `29f45b436697c13e481c4b8509cef3cabd4a214a`
- `communication/live/report1.36.md`
  - blob `3966b81330219699004c90b7f880eff0a64c757e`

The refined plan is accepted as the current planning baseline. It remains non-executable.

## 2. PLAN-Q-1 — Mission Control decision

**DECISION: OPTION B — PRESERVE THE LOCKED EIS ORDER**

Mission Control does not combine M-13d and M-15 into an ordering exception.

The locked EIS order remains controlling.

Binding rule:

> From the M-13d Catalog-family cut-over until M-15 installs the approved field-level Reference Cost / margin projection boundary, no non-Owner principal may hold, receive, be granted, or exercise any Catalog capability.

During that interval:

- Catalog registry/default state remains effectively Owner-only;
- no Manager or Employee Catalog capability is activated;
- no non-Owner Catalog read path becomes reachable;
- `catalog_product_read` therefore cannot disclose Reference Cost to a non-Owner before M-15;
- M-15 remains responsible for `EC-PPM-02`, `EC-PPM-03` and `EC-PPM-04`;
- Founder Decision Record 09 remains unchanged;
- no Product Truth or EIS change is required.

**EV-27: CLOSED by MC-174.**

## 3. Refined planning baseline accepted

Mission Control accepts the following planning refinements from PR #708 as the current candidate `SB-MIG-1.4` baseline:

- corrected WS-F-before-WS-D sequence;
- deterministic M-07 ownership of `EC-AUD-04`;
- deterministic M-08 ownership of `EC-CNF-03`;
- M-05 epoch-row / M-08 lock-protocol split for `EC-CNF-02`;
- M-14 positioned with WS-E before non-Owner Catalog write can exist;
- explicit M-10 no-safe-reversal boundary;
- M-13 per-family atomic-authority-path rule;
- M-13d 19-new-signature / 19-old-signature retirement rule;
- guarded remote CLI rule proposal;
- repository inventories for definer functions, privileged service-role call sites, FKs/cascades and actor columns;
- specialist pre-merge checkpoint map.

Acceptance here means **planning baseline accepted**, not migration-package activation and not specialist approval of future exact DDL.

## 4. Evidence status after MC-174

### Closed

- EV-24 — production migration-ledger presence only;
- EV-27 — PLAN-Q-1 decision.

### Planning facts accepted but execution/evidence gates remain open or partial

- EV-06 clean replay: repository exceptions identified; replay not executed;
- EV-07 actor census: repository inventory/zero-unresolved threshold defined; live census absent;
- EV-09 cascade inventory: repository inventory exists; unresolved record classes remain;
- EV-10 definer inventory: repository inventory exists; live effective state not verified;
- EV-11 privileged handler inventory: repository-complete at current baseline; must be refreshed at each affected checkpoint;
- EV-12 M-06 physical read contract: candidate accepted for future specialist review; runtime/recursion/performance proof absent;
- EV-13 M-13d signature retirement: candidate accepted for future specialist review; execution proof absent;
- EV-14 M-07/M-08 allocation: Mission Control accepts deterministic ownership in principle; exact future schema/DDL still requires specialist review;
- EV-23 guarded CLI rule: Mission Control adopts the rule for all future `SB-MIG-1.4` remote target-mutating operations, but the migration mission itself remains inactive.

All environment/provider/runtime blockers remain open unless this record expressly states otherwise.

## 5. Remote-targeting rule — binding now for future work

For every future `SB-MIG-1.4` remote state-changing Supabase operation:

- use `scripts/supabase-cli.mjs` with an explicit named target;
- bare remote target-mutating Supabase CLI is prohibited;
- production additionally requires `CONFIRM_PRODUCTION=yes` **and** separate current Mission Control production execution authority;
- repository `supabase/config.toml` or ambient link state never creates target authority.

This rule creates no current execution permission.

## 6. Read-only evidence collection work package

Work package:

`SB-P-1.12-WP-READ-ONLY-EVIDENCE-COLLECTION-1`

Recipient: Supabase Backend Architecture specialist.

Purpose: collect only the currently missing provider/database facts that can be established without mutation and without migration/application implementation.

### 6.1 Authorized evidence targets

Collect, where provider access actually permits:

**EV-03 — test target identity/accessibility**
- determine whether historical test project `drravyyauixltoihzmwo` is presently accessible;
- if not visible, record the exact limitation without inferring deletion or ownership change.

**EV-04 — test migration-ledger alignment**
- only if the test project is positively identified and accessible;
- compare its remote migration version list with the 24 canonical migration files and recorded historical repair exceptions.

**EV-05 — test schema/grant baseline**
- only if the test target is positively identified;
- collect read-only object/policy/grant/function state relevant to SB-P-1.12.

**EV-07 — actor-reference census**
- production read-only census of the 18 repository-identified actor columns;
- distinct referenced identities per source;
- union of referenced identities;
- unresolved-reference count;
- no attribution modification.

**EV-09 — live FK/cascade inventory**
- compare the repository inventory with current production catalog state;
- do not decide unresolved record-class semantics that require Product Truth/legal input.

**EV-10 — live definer/function state**
- owner;
- security mode;
- search path;
- effective execute grants;
- signatures/overloads;
- compare to the repository inventory.

**EV-17 — G-6 effective-access evidence**
- table/view/sequence grants;
- RLS state/policies;
- function owner/security mode/search path/effective EXECUTE;
- schema privileges;
- relevant role membership;
- default privileges for visible creator roles including `postgres` and `supabase_admin` where available;
- no mutation.

**EV-18 — backup/PITR observation**
- read-only provider state only, if the provider surface exposes it;
- status, retention/recovery window and latest recoverable point if visible;
- do not test restore or change settings.

**EV-21 — G-7 provider/storage evidence**
- read-only storage bucket/object policy state;
- documented/provider-observable Auth-deletion interaction where accessible;
- do not delete users, objects or records.

### 6.2 Not authorized in this package

- application implementation;
- SQL/migration authoring;
- migration file creation;
- migration execution;
- schema/RLS/grant/function mutation;
- data repair/backfill;
- test or production mutation;
- backup/restore execution;
- Auth-user deletion;
- storage mutation;
- runtime identity deletion;
- Lovable action;
- production deployment.

### 6.3 Read-only query boundary

Read-only catalog/provider inspection is authorized only where needed for the evidence targets above.

Queries must:

- be read-only;
- have no DDL or DML;
- create no temporary/permanent object;
- invoke no mutating RPC/function;
- change no configuration, role, grant, policy, session authorization, link, migration state or provider setting;
- be recorded sufficiently to reproduce the observation;
- stop immediately if target identity is ambiguous.

## 7. Required output

Write only:

1. `communication/missions/SB-P-1.12/specialists/09-stage13-read-only-evidence-collection-1.md`
2. `communication/live/report1.37.md`

For each EV item report:

- evidence collected;
- exact source/target identity;
- observation time;
- method;
- result;
- limitation;
- proposed status: `CLOSED`, `PARTIALLY EVIDENCED` or `OPEN`.

The specialist proposes evidence status. Mission Control closes gates.

## 8. Git authority

**Repository:** `SmartBusinessv1/smart-business`  
**Branch:** `mission/SB-P-1.12-stage13-read-only-evidence-collection-1`  
**Authorized base:** canonical `main` after this MC-174 PR is human-merged and verified  
**Writable paths:** exactly the two report paths in Section 7  
**Commit:** mission-scoped descriptive message with required `Co-Authored-By` trailer  
**Permitted Git:** fetch, create branch, inspect, write exact two reports, stage, commit, push, open one PR to `main`, report head/blobs  
**Prohibited Git:** force push, direct `main`, self-approval, self-merge

Authorization expires when the evidence PR is opened and reported, or 2026-10-03T23:59:59+05:30, whichever occurs first.

## 9. Gates intentionally not addressed by this work package

The following remain outside this read-only collection package:

- EV-01 CI / Stage 15 assurance;
- EV-02 test-bound runtime-verification environment;
- EV-06 clean replay execution;
- EV-08 orphan disposition if actual orphans remain;
- EV-12 runtime recursion/performance proof;
- EV-13 execution proof;
- EV-15 production-shaped rehearsal;
- EV-16 lock/contention measurements;
- EV-19 provider/admin delete-guard behavior under test execution;
- EV-20 pooling/concurrency runtime proof;
- EV-22 identity-deletion runtime authorization;
- EV-25 delivery-repository reconciliation;
- EV-28 builder appointment / final Implementation Authorization.

## 10. Preserved authority boundary

- `SB-MIG-1.4`: NON-EXECUTABLE.
- Implementation Authorization: WITHHELD.
- Application implementation: NOT AUTHORIZED.
- SQL/migration authoring: NOT AUTHORIZED.
- Migration execution: NOT AUTHORIZED.
- Production mutation: NOT AUTHORIZED.
- Identity-deletion runtime: NOT AUTHORIZED.
- ESC-1: OPEN T8.
- `22-§20-2`: BLOCKED / IN SCOPE.
- G-6/T4: UNVERIFIED until Mission Control accepts evidence.
