# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-CP-1 — CONTROLLED PREVIEW & FOUNDER ACCEPTANCE

**Mission ID:** SB-P-1.11-CP-1  
**Mission Name:** Controlled Preview & Founder Acceptance  
**Mission Status:** ACTIVE AFTER MERGE  
**Authorized By:** Mission Control  
**Public Publish / Production Deployment / Domain Cutover:** NOT AUTHORIZED

---

## 1. Mission Objective

Perform a controlled preview of the completed SB-P-1.11 Phase 1 Catalog experience in the verified Lovable execution project, capture runtime and responsive evidence, obtain Founder visual/interaction acceptance, and prepare the final evidence required for a separate publish/deployment authorization decision.

This mission does not authorize public release.

It is a preview and acceptance mission only.

---

## 2. Locked Baseline

Canonical repository:

`SmartBusinessv1/smart-business`

Mission baseline commit:

`ca9a3393aab3831ea927d170044901736a99d1d9`

Release-readiness decision:

`communication/live/instruction1.64.md`

Final blocker re-verification:

`communication/live/report1.70.md`

Authorized Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Production Supabase:

`gysgzasfcjvtrgaigfyn`

Legacy Lovable Cloud backend that must remain absent:

`wwgqnshcgbukqczqblsm`

Original Lovable project that must remain untouched:

`64c2b9b1-2461-4045-9acc-19e2658b8ca2`

GitHub remains the sole canonical source of truth.

Current release state:

`READY FOR CONTROLLED PREVIEW — NOT YET AUTHORIZED FOR PUBLIC PUBLISH`

---

## 3. Preconditions

Before preview begins, independently verify all of the following:

1. GitHub `main` is at the expected baseline or newer canonical Mission Control-approved state.
2. The authorized Lovable project is still `f3e992ec-06df-4d49-b157-b92ec064c078`.
3. Lovable backend binding is still production Supabase `gysgzasfcjvtrgaigfyn`.
4. Lovable Cloud remains absent.
5. No legacy backend reference `wwgqnshcgbukqczqblsm` exists in the execution project.
6. Lovable dependency/source state remains canonical with GitHub, including the previously corrected `@lovable.dev/vite-tanstack-config` version.
7. No unreviewed Lovable source drift exists.
8. The four original release blockers remain resolved in canonical source/evidence.

If any precondition fails, STOP and report before preview.

---

## 4. Controlled Preview Scope

The preview is limited to the Owner-facing Phase 1 Catalog experience already authorized and implemented.

Verify visually and interactively:

1. Catalog navigation from the authenticated dashboard.
2. Product search/list experience.
3. Archived filtering.
4. Product detail view.
5. Create-product dialog and absence of selling-price collection during creation.
6. Identity editing.
7. Selling-unit editing and linked-product restriction behavior.
8. Category creation.
9. Category list/filter/picker.
10. Category archive confirmation behavior.
11. Product archive/reactivate/delete distinction.
12. Selling-price change experience.
13. Product tax change experience.
14. Business tax settings panel and its accepted Phase 1 write-only limitation.
15. Reference-cost edit experience and absence of reference cost from list/search surfaces.
16. Inventory-link D-068 preview/confirm experience.
17. Preview-token countdown/expiry communication.
18. Error/rejection clarity.
19. Duplicate-submit prevention and disabled/loading states where observable.
20. Existing dashboard/navigation behavior remains intact.

Do not expand the product beyond this existing Phase 1 scope.

---

## 5. Business Tax Settings — Required UI Acceptance Check

Mission Control has accepted the current business-tax-settings read limitation for Phase 1 as non-blocking.

The controlled preview must verify that the merchant-facing UI remains truthful.

The UI must:

- clearly communicate that the current saved business-wide tax setting cannot yet be read back;
- not display a fabricated, inferred, cached, or assumed current value;
- clearly communicate that saving will set or replace the business-wide tax configuration;
- avoid presenting AI/system certainty where the underlying current value is not readable.

If the preview shows wording or interaction that could reasonably cause an owner to believe the currently saved value is being displayed when it is not, treat that as a release blocker and STOP.

No backend/read-path change is authorized under this mission.

---

## 6. Responsive & Visual Verification

Capture evidence at representative sizes covering at minimum:

- mobile phone width;
- tablet/narrow desktop width where practical;
- standard desktop width.

Verify:

- no clipped critical actions;
- no horizontal overflow that hides required controls;
- dialogs remain usable;
- destructive confirmations remain legible and deliberate;
- form labels and validation remain understandable;
- touch targets are usable on mobile;
- information hierarchy remains clear;
- reference cost is not accidentally exposed in list/search through responsive layout changes;
- Coming Soon or unrelated dashboard elements remain non-interactive where previously intended.

Do not redesign solely for aesthetic preference during this mission.

---

## 7. Accessibility Interaction Check

Perform a practical bounded accessibility check using the existing implementation.

Verify at minimum:

- keyboard reachability for primary Catalog actions;
- visible focus treatment;
- dialog focus behavior and closure;
- readable labels for form fields;
- destructive confirmations are not dependent only on color;
- error text is readable and associated with the relevant interaction where reasonably observable;
- buttons expose clear action meaning.

A dedicated external accessibility certification or new testing framework is not required here.

If a severe accessibility defect prevents basic operation, STOP and report.

---

## 8. Founder Acceptance

After technical preview verification passes, present the preview to the Founder for direct visual and interaction review.

Founder acceptance must cover at minimum:

- overall Catalog clarity;
- mobile usability;
- desktop usability;
- product creation/editing clarity;
- category behavior;
- price/tax/reference-cost clarity;
- lifecycle/destructive-action clarity;
- D-068 inventory-link clarity;
- business-tax-settings disclosure clarity;
- whether the experience feels consistent with Smart Business principles of simplicity, dignity, usefulness, and owner decision control.

Record the Founder result as exactly one of:

- `FOUNDER ACCEPTED`
- `FOUNDER ACCEPTED WITH NON-BLOCKING NOTES`
- `FOUNDER CHANGES REQUIRED BEFORE PUBLISH`

If changes are required, do not implement them automatically unless they are separately authorized.

---

## 9. Production Safety

This mission does not authorize creation of consequential production merchant/test data solely for verification.

Use existing safe runtime state and non-consequential navigation/read evidence where possible.

If a required flow cannot be safely demonstrated without creating consequential production data, record the evidence limitation rather than fabricating test evidence.

Do not alter production schema, functions, roles, grants, policies, or migrations.

---

## 10. Lovable Mutation Boundary

This mission is primarily observational.

Do not mutate Lovable source merely to improve the preview.

If a source/dependency mismatch is discovered, STOP and report it rather than correcting it under this mission.

Do not:

- enable Lovable Cloud;
- connect Lovable to GitHub;
- create a new repository;
- create another Lovable project;
- modify the original Lovable project;
- change backend binding;
- upgrade dependencies;
- regenerate the app from prose;
- publish or deploy.

---

## 11. Required Evidence

Create:

`communication/live/report1.71.md`

The report must include:

1. precondition results;
2. canonical Lovable/source/dependency verification;
3. controlled-preview runtime observations;
4. responsive/mobile/desktop observations;
5. bounded accessibility observations;
6. business-tax-settings disclosure verification;
7. any evidence gaps caused by the no-production-write boundary;
8. Founder acceptance result;
9. explicit confirmation that no public publish/deploy/domain cutover occurred;
10. final preview verdict.

Allowed final preview verdicts:

- `PASS — FOUNDER ACCEPTED`
- `PASS WITH NON-BLOCKING NOTES — FOUNDER ACCEPTED`
- `STOPPED`
- `FAIL`

---

## 12. Release Gate After This Mission

A PASS does not itself authorize public release.

After a successful controlled preview, Mission Control must separately authorize the final pre-publish/publish mission.

That later mission must include, at minimum:

- final canonical-source verification;
- confirmation of which Lovable project currently owns or will receive `smartbusiness.teamlips.com`;
- explicit domain-binding/cutover plan;
- publish/deploy authorization;
- post-publish smoke verification;
- rollback/stop conditions.

---

## 13. Explicitly Not Authorized

Do not:

- add features;
- redesign Catalog;
- change business rules;
- add a twentieth public command;
- add a business-tax-settings read workaround;
- modify backend schema/functions/roles/policies/migrations;
- create production merchant/test data for convenience;
- modernize dependencies;
- change Supabase binding;
- enable Lovable Cloud;
- connect Lovable to GitHub;
- create another Lovable project;
- modify the original Lovable project;
- publish;
- deploy;
- bind, move, or cut over `smartbusiness.teamlips.com`;
- self-approve or self-merge.

---

## 14. Completion

After completing the controlled preview:

1. create `communication/live/report1.71.md`;
2. include Founder acceptance result;
3. run Markdown/repository quality gates;
4. open one completion PR;
5. stop.

Do not self-merge.

---

## Next Logical Step

Execute this controlled preview in the verified Lovable execution project, obtain Founder acceptance, and return `report1.71.md` for Mission Control review before any public publish/deployment decision.