# SMART BUSINESS MISSION CONTROL — MC-175

# SB-P-1.12 — Evidence Disposition and Test Environment Reactivation Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-01  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Evidence source:** PR #710 / Read-Only Evidence Collection 1  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Canonical evidence verification

Mission Control verified PR #710 human-merged to:

`main@20424e88840ed9edd739cbbe248048b1eb8add47`

Canonical evidence artifacts:

- `communication/missions/SB-P-1.12/specialists/09-stage13-read-only-evidence-collection-1.md`
  - blob `7ea2ad5aeb08c8ac3aa7a1ed5c41b9e80cf48179`
- `communication/live/report1.37.md`
  - blob `66b1bfc130285433cd34a9009c07202a04e1df47`

Mission Control also independently confirmed through the connected Supabase provider that:

- project ref: `drravyyauixltoihzmwo`;
- project name: `smart-business-test`;
- organization: `himkzepyuyaejqjieugk`;
- region: `ap-south-1`;
- current status: `INACTIVE`;
- PostgreSQL engine/version metadata: 17 / `17.6.1.147`.

This is read-only provider metadata.

## 2. Evidence dispositions

Mission Control records:

### Closed

- **EV-07 — actor-reference census:** CLOSED for the current production baseline. The exact 18 relational actor columns contain 3 distinct identities and 0 unresolved references. This removes the currently observed orphan blocker but does not waive M-04 rehearsal/backfill verification.
- **EV-10 — live function/definer inventory:** CLOSED for the current production baseline. The live state is sufficiently inventoried to drive future remediation mapping.
- **EV-24 — production ledger presence:** remains CLOSED for ledger presence only.
- **EV-27 — PLAN-Q-1:** CLOSED by MC-174.

### Current-state evidence complete, execution still blocked

- **EV-17 — G-6 current-state inventory:** Mission Control accepts the current production effective-access inventory as complete enough to define the required M-17 reconciliation target. Broad legacy `anon` privileges and broad `supabase_admin` default privileges are confirmed live.  
  **M-17 remains BLOCKED** until its exact target-diff and migration are authored under later migration authority and pass required specialist review. This acceptance does not mean current access is approved.

### Partial / open

- EV-03 — PARTIALLY EVIDENCED: exact test project exists and is non-production, but is inactive and not database-accessible;
- EV-04 — OPEN: current test migration ledger unavailable;
- EV-05 — OPEN: current test schema/grant/function baseline unavailable;
- EV-09 — PARTIALLY EVIDENCED: live FK/cascade shape confirmed; 8 record classes unresolved;
- EV-18 — OPEN: backup/PITR state unavailable through current provider surface;
- EV-21 — PARTIALLY EVIDENCED: current storage state observed; deletion/provider interaction remains unverified.

## 3. Test-environment reactivation decision

Mission Control authorizes reactivation of the **existing approved non-production test project only**:

`drravyyauixltoihzmwo / smart-business-test`

The sole purpose is to restore access to the previously approved isolated test backend so EV-03, EV-04 and EV-05 can be completed and later Full Assurance/runtime verification can have an eligible target.

This is a provider-state change limited to project availability. It does **not** authorize any schema, data, migration, Auth, storage, grant, policy, function or application mutation.

### 3.1 Exact provider action authorized

After this MC-175 PR is human-merged and Mission Control verifies canonical authority:

1. positively re-read the project and confirm exact ref/name/org:
   - ref `drravyyauixltoihzmwo`;
   - name `smart-business-test`;
   - organization `himkzepyuyaejqjieugk`;
   - non-production classification;
2. if still `INACTIVE`, invoke only the provider's project restore/reactivation operation for that exact project;
3. wait for the project to reach an accessible healthy state;
4. if the provider presents any new purchase, plan upgrade, separate resource creation, unexpected billing confirmation, target ambiguity, or organization mismatch, **STOP** and return to Mission Control / Founder before proceeding;
5. do not create a new project or development branch as a substitute.

Production project `gysgzasfcjvtrgaigfyn` is explicitly out of scope for mutation.

## 4. Post-reactivation evidence collection

Once the exact test project is accessible, collect read-only evidence only for:

### EV-03

- current project status;
- positive accessibility;
- non-production identity.

### EV-04

- exact remote migration version list;
- comparison with the 24 canonical repository migrations;
- explicit treatment of the four previously recorded replay/repair exceptions;
- unexpected, missing or extra versions.

### EV-05

Read-only current baseline of:

- schemas/objects relevant to SB-P-1.12;
- RLS enablement and policies;
- grants and schema privileges;
- function signatures/owners/security modes/search paths/effective EXECUTE;
- relevant authority surfaces.

No mutation to make the test state “match” is allowed in this work package.

## 5. No database mutation authority

Even after reactivation, this work package does **not** authorize:

- migration apply/push/repair;
- DDL or DML;
- schema changes;
- data backfill or cleanup;
- role/grant/default-privilege changes;
- RLS/policy changes;
- function creation/replacement/drop;
- Auth-user creation/deletion;
- storage mutation;
- secrets/configuration mutation;
- test fixture writes;
- application deployment;
- runtime test execution that writes product data.

If read-only evidence shows test drift, report it. Do not repair it.

## 6. Required output

Work package:

`SB-P-1.12-WP-TEST-ENVIRONMENT-REACTIVATION-AND-BASELINE-EVIDENCE`

Recipient: Supabase Backend Architecture specialist.

Write only:

1. `communication/missions/SB-P-1.12/specialists/10-stage13-test-environment-reactivation-and-baseline-evidence.md`
2. `communication/live/report1.38.md`

Report:

- exact pre-action project identity/status;
- exact provider reactivation action taken;
- whether any billing/purchase/upgrade prompt appeared;
- post-action project identity/status;
- EV-03/04/05 evidence;
- any drift or blocker;
- exact no-mutation confirmation;
- proposed EV statuses;
- PR/head/blobs;
- GitHub Actions state.

## 7. Git authority

**Repository:** `SmartBusinessv1/smart-business`  
**Branch:** `mission/SB-P-1.12-stage13-test-environment-reactivation-evidence`  
**Authorized base:** canonical `main` after this MC-175 PR is human-merged and verified  
**Writable paths:** exactly the two report paths in Section 6  
**Commit:** mission-scoped descriptive message with required `Co-Authored-By` trailer  
**Permitted Git:** fetch, create branch, inspect, write exact two reports, stage, commit, push, open one PR to `main`, report exact head/blobs  
**Prohibited Git:** force push, direct `main`, self-approval, self-merge

Authorization expires when the evidence PR is opened and reported, or 2026-10-03T23:59:59+05:30, whichever occurs first.

## 8. Remaining blockers not changed by this record

- EV-01 CI / Stage 15 assurance remains OPEN;
- EV-02 test-bound runtime-verification application environment remains OPEN;
- EV-06 clean replay remains PARTIAL / not executed;
- EV-08 orphan disposition remains unnecessary unless a future census finds an orphan;
- EV-09 unresolved record classes remain a blocker to M-10;
- EV-12/13 future exact implementation proof remains open;
- EV-15/16 rehearsal/load/locking evidence remains open;
- EV-18 backup/PITR remains open;
- EV-19/20 runtime guard/concurrency proof remains open;
- EV-21 G-7 remains partial;
- EV-22 identity-deletion runtime remains NOT AUTHORIZED;
- EV-28 builder appointment/final Implementation Authorization remains OPEN.

## 9. Preserved authority boundary

- `SB-MIG-1.4`: NON-EXECUTABLE.
- Implementation Authorization: WITHHELD.
- Application implementation: NOT AUTHORIZED.
- SQL/migration authoring: NOT AUTHORIZED.
- Migration execution: NOT AUTHORIZED.
- Production mutation: NOT AUTHORIZED.
- Identity-deletion runtime: NOT AUTHORIZED.
- ESC-1: OPEN T8.
- `22-§20-2`: BLOCKED / IN SCOPE.
