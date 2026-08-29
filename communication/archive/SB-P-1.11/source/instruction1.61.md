# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-RR-1 — RELEASE-READINESS SPECIALIST VERIFICATION

**Mission ID:** SB-P-1.11-RR-1  
**Mission Name:** Release-Readiness Specialist Verification  
**Mission Status:** ACTIVE AFTER MERGE  
**Authorized By:** Mission Control  
**Publish / Production Deployment:** NOT AUTHORIZED

---

## 1. Mission Objective

Perform the final targeted specialist verification required after the merged `SB-P-1.11-UI-1R` frontend implementation and before any preview, publish, deployment, or domain cutover may be authorized.

This is a release-readiness verification mission.

It is not a feature-expansion mission.
It is not a backend redesign mission.
It is not a production-write mission.

The purpose is to independently verify the new Catalog frontend, independently verify its security and permission behavior, and restore the authorized Lovable execution project to canonical dependency/source alignment before release planning.

---

## 2. Locked Baseline

Canonical repository:

`SmartBusinessv1/smart-business`

Authorization baseline:

`0352496ed2e04cc4f68c3c66e781f25a2751439a`

Merged implementation:

`SB-P-1.11-UI-1R`

Primary completion evidence:

- `communication/live/report1.63.md`
- `docs/verification/SB-P-1.11-catalog-frontend-verification.md`

Authorized Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Production Supabase:

`gysgzasfcjvtrgaigfyn`

Dedicated test Supabase:

`drravyyauixltoihzmwo`

Legacy Lovable Cloud backend that must remain absent:

`wwgqnshcgbukqczqblsm`

Original Lovable project must remain untouched:

`64c2b9b1-2461-4045-9acc-19e2658b8ca2`

GitHub remains the sole canonical source of truth.

---

## 3. Required Workstreams

This mission contains three bounded specialist workstreams.

All three must PASS before Mission Control may consider preview/publish authorization.

### Workstream A — Frontend Specialist Verification

Independently verify the implemented Catalog experience from a merchant-facing and runtime perspective.

Required checks include:

1. authenticated Owner access to the Catalog workspace;
2. protected-route behavior;
3. catalog search, archived filtering, pagination/continuation, product detail read;
4. create-product flow with no selling price field;
5. separate identity and unit editing;
6. category creation and archive confirmation;
7. archive/reactivate/permanent-delete distinction;
8. separate selling price, product tax, business tax settings, and reference-cost controls;
9. reference cost absent from list/search surfaces;
10. complete D-068 assign/replace/remove preview-confirm flow;
11. 15-minute preview-expiry UX;
12. `STALE_STATE` handling;
13. duplicate-submit prevention;
14. unknown-outcome recovery behavior;
15. responsive behavior on representative mobile and desktop widths;
16. keyboard navigation, focus management, labels, destructive-action confirmation, readable error states;
17. existing dashboard/navigation behavior remains intact.

Do not accept the implementation report as proof by itself. Verify independently.

Do not create consequential production data for testing.

Use the approved non-production path where behavioral write verification is required.

If no safe non-production path can exercise a required consequential workflow, report the exact evidence gap rather than using production.

Required report:

`communication/live/report1.64.md`

Allowed verdicts:

- `PASS`
- `PASS WITH NON-BLOCKING FINDINGS`
- `STOPPED`
- `FAIL`

---

### Workstream B — Security & Permissions Verification

Perform a focused independent security review of the new browser-facing Catalog implementation.

Do not reopen already-accepted backend architecture unless new evidence shows a defect.

Required checks include:

1. Catalog surface is Owner-only as authorized;
2. unauthenticated users cannot access protected Catalog intelligence;
3. employee/staff access is not accidentally introduced;
4. business isolation remains enforced for all direct reads and RPC calls;
5. direct reads of `catalog_categories` remain read-only and business-scoped by RLS;
6. direct reads of `inventory_items` remain read-only and business-scoped;
7. no direct client write exists for catalog tables;
8. no service-role secret or service-role client is present in browser code;
9. all consequential mutations go through the accepted RPC contract;
10. reference cost is not exposed in search/list responses or unauthorized surfaces;
11. idempotency recovery cannot silently issue a fresh consequential command after an unknown result;
12. D-068 cannot be bypassed through client-only confirmation state;
13. stale/expired preview tokens are not reused;
14. public rejection messages do not expose restricted internal reasons;
15. no Lovable Cloud dependency, legacy backend reference, or unauthorized backend endpoint is present;
16. no new unauthorized route, permission path, or browser privilege escalation exists.

Where useful, perform adversarial read-only inspection of browser-callable paths and code behavior. Do not perform destructive production testing.

Required report:

`communication/live/report1.65.md`

Allowed verdicts:

- `PASS`
- `PASS WITH NON-BLOCKING FINDINGS`
- `STOPPED`
- `FAIL`

---

### Workstream C — Lovable Canonical Re-Alignment

The authorized Lovable project currently contains one known platform-side dependency drift:

`@lovable.dev/vite-tanstack-config` is `2.9.1` in Lovable while canonical GitHub remains pinned to `2.7.7`.

This workstream authorizes only the smallest controlled correction necessary to restore the Lovable execution project to the canonical dependency/source state represented by merged GitHub `main`.

Required controls:

1. verify current Lovable source/dependency state before mutation;
2. confirm the backend binding remains `gysgzasfcjvtrgaigfyn`;
3. confirm Lovable Cloud remains absent;
4. derive the correction from canonical GitHub, not from prose regeneration;
5. correct only the proven drift and any directly necessary canonical-equivalence difference;
6. do not modernize or upgrade dependencies;
7. do not introduce feature changes;
8. do not connect Lovable to GitHub or create a new repository;
9. do not create/apply migrations;
10. do not publish or deploy;
11. after correction, prove relevant source/dependency equivalence against canonical GitHub;
12. run the minimum frozen install/build/test verification necessary to prove the corrected Lovable state remains viable without broad rework.

If the drift cannot be corrected without broader dependency or source mutation, STOP and report rather than expanding scope.

Required report:

`communication/live/report1.66.md`

Allowed verdicts:

- `PASS`
- `STOPPED`
- `FAIL`

---

## 4. Business Tax Settings Read Limitation

The merged implementation correctly disclosed that `business_tax_settings` currently has an accepted write command but no accepted Owner-facing read path under the locked contract.

This mission does not authorize adding a twentieth public command, changing RLS, or modifying backend architecture.

Frontend and Security reviewers must instead assess whether the current write-only UI is acceptable for release.

Each reviewer must record one of:

- `ACCEPT FOR PHASE 1` — current UX is sufficiently clear and safe for initial release; or
- `REQUIRES FOLLOW-UP BEFORE RELEASE` — a separate narrow backend/read-path mission is required before public release.

Mission Control will make the release decision after both specialist reports are merged.

---

## 5. Explicitly Not Authorized

Do not:

- add features;
- redesign the Catalog;
- create a twentieth public command;
- change catalog accounting/business rules;
- create or modify database tables, migrations, functions, roles, triggers, or policies;
- perform production behavioral writes for testing;
- change the production Supabase project;
- make the test Supabase project the runtime backend;
- enable Lovable Cloud;
- connect Lovable to GitHub;
- create another Lovable project;
- modify the original Lovable project;
- modernize dependencies;
- broadly refactor application architecture;
- publish;
- deploy;
- move `smartbusiness.teamlips.com`;
- self-approve or self-merge.

---

## 6. Evidence Standard

All reports must distinguish:

- source review evidence;
- runtime evidence;
- backend/read-only evidence;
- assumptions that could not be directly tested.

Do not claim a workflow is behaviorally verified solely because static code appears correct.

Do not claim security PASS solely because the implementation report said the code is safe.

Do not use production write activity merely to obtain stronger-looking evidence.

---

## 7. Release Gate

Preview/publish remains on HOLD until all of the following are true:

1. `report1.64.md` is merged with an acceptable Frontend Specialist verdict;
2. `report1.65.md` is merged with an acceptable Security & Permissions verdict;
3. `report1.66.md` is merged with Lovable canonical re-alignment `PASS`;
4. Mission Control records the business-tax-settings release decision;
5. no unresolved blocker affects safe preview/publish.

A PASS under this mission does not itself authorize publish, deploy, or domain cutover.

---

## 8. Execution Efficiency

Keep this mission narrow.

Do not repeat the full SB-P-1.11 backend review.
Do not repeat the Lovable environment discovery chain already completed.
Do not spend Lovable credits on repository archaeology, governance analysis, or backend research that can be done through GitHub/Supabase read-only tools.

Use Lovable only where runtime/frontend/canonical-workspace evidence genuinely requires it.

---

## 9. Completion

Each workstream must open its own reviewable completion PR or contribute its report through a clearly reviewable mission branch.

Human review and merge are required.

Do not self-merge.

---

## 10. Next Logical Step

After all three specialist reports are merged, Mission Control shall review their combined findings, make the `business_tax_settings` release decision, and only then decide whether to authorize a controlled preview/publish-readiness mission.