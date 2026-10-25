# SMART BUSINESS MISSION CONTROL — MC-175

# SB-P-1.12 — Test Environment Reactivation and Baseline Evidence

**Recipient:** Supabase Backend Architecture specialist  
**Work package:** `SB-P-1.12-WP-TEST-ENVIRONMENT-REACTIVATION-AND-BASELINE-EVIDENCE`  
**Status:** EXECUTE ONLY AFTER MC-175 PR IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL `main`

Read in full:

`communication/missions/SB-P-1.12/mission-control/45-evidence-disposition-and-test-environment-reactivation-authorization.md`

Exact target authorized:

- project ref: `drravyyauixltoihzmwo`
- project name: `smart-business-test`
- organization: `himkzepyuyaejqjieugk`
- region: `ap-south-1`
- classification: non-production test
- currently observed status: `INACTIVE`

Mission:

1. Re-read the exact project identity.
2. If it is still `INACTIVE`, restore/reactivate **that exact existing project only**.
3. If any new purchase, plan upgrade, separate resource creation, unexpected billing confirmation, organization mismatch or target ambiguity is presented, STOP and return to Mission Control / Founder.
4. Do not create a replacement project or branch.
5. After the test project becomes accessible, collect only read-only EV-03, EV-04 and EV-05 evidence.

EV-03:
- accessible/healthy state;
- positive non-production identity.

EV-04:
- remote migration version list;
- compare to the 24 canonical migrations;
- explicitly account for the four recorded historical replay/repair exceptions;
- report all missing/extra/unexpected versions.

EV-05:
- current relevant objects;
- RLS/policies;
- grants/schema privileges;
- function signatures/owners/security modes/search paths/effective EXECUTE;
- relevant authority surfaces.

Do not repair any drift.

No DDL, DML, migration apply/repair/push, backfill, role/grant/RLS/function mutation, Auth/storage mutation, fixture writes, application deployment or production action.

Production project `gysgzasfcjvtrgaigfyn` is read-only/out of mutation scope.

Write only:

- `communication/missions/SB-P-1.12/specialists/10-stage13-test-environment-reactivation-and-baseline-evidence.md`
- `communication/live/report1.38.md`

Use the exact Git authority in MC-175. Open one PR to `main`. No self-merge.

End:

**TEST ENVIRONMENT REACTIVATION AND BASELINE EVIDENCE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**

No implementation. No migration authoring or execution. No production mutation.
