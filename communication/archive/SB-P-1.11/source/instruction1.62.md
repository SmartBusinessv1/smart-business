# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-RR-2 — RELEASE-READINESS DEFECT REMEDIATION & TARGETED RE-VERIFICATION

**Mission ID:** SB-P-1.11-RR-2  
**Mission Name:** Release-Readiness Defect Remediation & Targeted Re-Verification  
**Mission Status:** ACTIVE AFTER MERGE  
**Authorized By:** Mission Control  
**Preview / Publish / Production Deployment / Domain Cutover:** NOT AUTHORIZED

---

## 1. Mission Objective

Correct only the four blocking defects confirmed by `SB-P-1.11-RR-1` Workstream A, then perform targeted re-verification of the failed frontend release-readiness checks.

This is a narrow defect-remediation mission.

It is not a catalog redesign mission.
It is not a feature-expansion mission.
It is not a new-command mission.
It is not authorization to publish, deploy, or move `smartbusiness.teamlips.com`.

The purpose is to restore the already-approved SB-P-1.11 Phase 1 behavior to the intended locked contract with the smallest auditable changes.

---

## 2. Locked Baseline

Canonical repository:

`SmartBusinessv1/smart-business`

Authorization baseline:

`9eab19e851d81ad744dc6dfbc2ebc5f5a6b714ce`

Primary defect evidence:

- `communication/live/report1.64.md`
- `communication/live/report1.65.md`
- `communication/live/report1.66.md`

Authorized Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Production Supabase:

`gysgzasfcjvtrgaigfyn`

Dedicated test Supabase:

`drravyyauixltoihzmwo`

Legacy Lovable Cloud backend must remain absent:

`wwgqnshcgbukqczqblsm`

Original Lovable project must remain untouched:

`64c2b9b1-2461-4045-9acc-19e2658b8ca2`

GitHub remains the sole canonical source of truth.

---

## 3. Authorized Defect Set — Exactly Four

No fifth defect may be folded into this mission without separate authorization.

### Defect 1 — Category Archive Confirmation Idempotency

Confirmed behavior:

- first `archive_catalog_category` call without confirmation correctly returns `CONFIRMATION_REQUIRED`;
- the current frontend resubmits the same idempotency key with `p_confirm_uncategorize = true`;
- backend fingerprinting correctly treats that changed payload under the same key as `IDEMPOTENCY_CONFLICT`;
- a fresh idempotency key on the explicit confirmation step succeeds.

Authorized correction:

- change the frontend category-archive confirmation flow so the initial attempt and the explicit confirmed attempt use different idempotency keys;
- the confirmed attempt must mint exactly one fresh key when the merchant explicitly confirms uncategorization;
- duplicate-submit protection must remain intact;
- unknown-outcome handling must remain safe;
- do not change backend idempotency semantics or fingerprint rules.

This is a frontend correction only.

### Defect 2 — Product Tax Executor Missing UPDATE Privilege

Confirmed production defect:

`catalog_tax_executor` can read `catalog_products` but lacks the `UPDATE` privilege required by `record_catalog_tax_change`.

Authorized backend correction:

- grant only the minimum required table privilege for the existing accepted command to function;
- specifically, add the required `UPDATE` privilege on the existing `public.catalog_products` table to the existing `catalog_tax_executor` role;
- do not broaden grants beyond what the accepted command body requires;
- do not change the function signature, owner, public command count, tax rules, or RLS model.

### Defect 3 — Lifecycle Executor Missing History-Read Privileges for Permanent Delete

Confirmed production defect:

`delete_catalog_product` checks dependent history but `catalog_lifecycle_executor` lacks the required read privileges on the existing history tables.

Authorized backend correction:

Grant only the minimum read privileges required by the existing function body on:

- `public.catalog_selling_price_events`
- `public.catalog_tax_events`
- `public.catalog_reference_cost_events`
- `public.catalog_product_link_events`

to the existing `catalog_lifecycle_executor` role.

Do not grant write privileges on those event tables.
Do not change lifecycle rules or delete eligibility semantics.

### Defect 4 — Production Category Direct-Read Privilege Missing

Confirmed production defect:

The existing business-scoped RLS SELECT policy on `public.catalog_categories` is present, but production lacks the underlying table-level `SELECT` privilege for `authenticated`, so the approved direct read cannot execute.

Authorized backend correction:

- grant `SELECT` on `public.catalog_categories` to `authenticated`;
- preserve the existing RLS policy and business isolation;
- do not disable or bypass RLS;
- do not grant mutation privileges to `authenticated` on `catalog_categories`.

---

## 4. Database Change Discipline

The three backend corrections above must be delivered as the smallest reviewable migration patch consistent with the repository's existing Supabase migration practice.

Requirements:

1. derive all changes from the confirmed defect evidence and current production state;
2. inspect existing grants before writing the migration so already-correct privileges are not unnecessarily broadened;
3. migration must contain only the required GRANT statements and any narrowly necessary comments/evidence — no unrelated schema change;
4. do not create tables, functions, triggers, roles, policies, extensions, or a twentieth public command;
5. do not change function ownership;
6. do not change RLS policy definitions unless new evidence proves the confirmed fix cannot work with the existing policy; if that occurs, STOP rather than expanding scope;
7. apply and behaviorally verify the migration in the dedicated test project first;
8. production application requires a fresh read-only preflight immediately before execution;
9. production execution is authorized only for these exact GRANT changes after test verification passes;
10. no production merchant/business/product test data may be created for verification.

Production verification after migration must be read-only, except for the migration itself. Use privilege inspection and metadata evidence to confirm grants on production. Functional write behavior must be proven in the dedicated test project.

---

## 5. Frontend Correction Discipline

For Defect 1:

- make the smallest source change necessary in canonical GitHub;
- use the existing component and command wrapper architecture;
- do not redesign the category flow;
- do not change any unrelated Catalog interaction;
- do not modernize dependencies;
- do not accept platform-generated dependency drift.

If Lovable is used to apply or visually verify the frontend correction, use only the authorized verified Lovable project and preserve its canonical dependency/source alignment.

Lovable must not be connected to GitHub and must not become canonical.

Any source change produced in Lovable must be independently read back and returned to a dedicated GitHub mission branch before acceptance.

---

## 6. Required Targeted Re-Verification

After remediation, re-run only the failed and directly adjacent checks necessary to establish release-readiness.

### 6.1 Category archive confirmation

Prove in the dedicated test project:

1. category containing products returns `CONFIRMATION_REQUIRED` on first attempt;
2. explicit merchant confirmation uses a fresh idempotency key;
3. confirmed call completes;
4. affected products become uncategorized as defined by the locked backend contract;
5. duplicate clicking cannot issue parallel confirmed commands;
6. unknown-outcome recovery remains safe.

### 6.2 Product tax change

Prove in the dedicated test project:

- `record_catalog_tax_change` completes for valid supported tax-treatment cases;
- invalid input still returns the accepted structured rejection;
- no direct client table write is introduced;
- event/audit behavior remains intact.

Production verification must confirm only the corrected privilege state, read-only.

### 6.3 Permanent product delete

Prove in the dedicated test project:

- eligible zero-history product can be permanently deleted;
- product with dependent history receives the accepted lifecycle/dependent-history rejection rather than a raw database permission error;
- no lifecycle rule is weakened.

Production verification must confirm only the corrected privilege state, read-only.

### 6.4 Category list / picker

Prove:

- `authenticated` has `SELECT` on `public.catalog_categories` in the test project after remediation;
- RLS still limits reads to the caller's own business;
- an authenticated owner can list their categories;
- cross-business categories remain invisible;
- production metadata confirms `authenticated` SELECT is present and RLS remains enabled/policy intact.

---

## 7. Security Regression Checks

Because three fixes alter database privileges, run a focused security regression after test remediation and after production migration metadata verification.

Confirm:

- no `anon` privilege was added;
- no new table mutation privilege was granted to `authenticated`;
- `catalog_tax_executor` received only the required `catalog_products` UPDATE capability;
- `catalog_lifecycle_executor` received only the required SELECT access on the four history tables;
- `authenticated` category SELECT remains constrained by RLS;
- business isolation remains intact;
- reference-cost confidentiality is unchanged;
- service-role exposure is unchanged;
- accepted public function count remains exactly nineteen;
- no Lovable Cloud or legacy backend reference appears.

---

## 8. Build / Test / Source Integrity Gate

After the frontend correction and migration are represented in the mission branch:

- `bun install --frozen-lockfile` must produce no dependency mutation;
- canonical build must pass;
- `tsc --noEmit` must pass;
- existing automated tests must pass;
- add only narrowly-scoped automated regression coverage where practical for Defect 1; do not create a broad new test framework;
- verify no unrelated source/config/dependency drift;
- if Lovable was touched, re-prove relevant Lovable source/dependency alignment to canonical GitHub.

---

## 9. Required Reports

Create:

`communication/live/report1.67.md`

— defect remediation and migration execution report, covering all four corrections, test-project evidence, production migration evidence, changed-file inventory, privilege before/after evidence, build/test evidence, and explicit confirmation that no additional defect was folded into scope.

Create:

`communication/live/report1.68.md`

— targeted release-readiness re-verification report, covering only the four failed workflows plus focused security regression.

Allowed final verdicts:

- `PASS`
- `STOPPED`
- `FAIL`

A PASS must demonstrate all four blocking defects are corrected and independently re-verified.

---

## 10. Business Tax Settings Limitation

This mission does not resolve or modify the previously disclosed `business_tax_settings` read limitation.

Do not add a twentieth public command or new read path under this authorization.

The separate release decision on business-tax-settings must remain exactly as recorded by the specialist reviews until Mission Control explicitly acts on it.

---

## 11. Explicitly Not Authorized

Do not:

- add any fifth remediation item;
- redesign Catalog;
- create a twentieth public command;
- modify catalog business/accounting rules;
- change tax semantics;
- weaken delete eligibility rules;
- change idempotency fingerprint rules;
- add production test business/product/category data;
- use production behavioral writes for verification;
- change production Supabase project;
- make the test Supabase project the runtime backend;
- enable Lovable Cloud;
- connect Lovable to GitHub;
- create another Lovable project;
- modify the original Lovable project;
- modernize dependencies;
- broadly refactor the application;
- publish;
- deploy;
- move `smartbusiness.teamlips.com`;
- self-approve or self-merge.

---

## 12. Stop Conditions

STOP and report if:

- any confirmed defect requires broader architecture change than authorized here;
- correcting a GRANT requires changing RLS definitions or function ownership beyond the identified gaps;
- the test project behaves materially differently from the intended production privilege model after applying the same migration;
- production preflight reveals the target state has changed materially since `report1.64.md`;
- the frontend correction requires broader Catalog redesign;
- Lovable introduces new source/dependency drift that cannot be isolated without a second unplanned repair;
- any new blocker outside these four defects is discovered and would require implementation to proceed.

New findings may be documented, but not silently repaired under this mission.

---

## 13. Release Gate After This Mission

Even a `PASS` does not itself authorize preview, publish, deployment, or domain cutover.

After a merged PASS, Mission Control must:

1. review `report1.67.md` and `report1.68.md`;
2. confirm the four defects are closed;
3. revisit the already-recorded business-tax-settings release decision from `report1.64.md` and `report1.65.md`;
4. only then decide whether to authorize controlled preview/release-readiness acceptance.

---

## 14. Next Logical Step

After human review and merge of this instruction, execute the remediation in this order:

1. verify the four defect root causes against current canonical/prod/test state;
2. implement the frontend idempotency correction and minimal backend GRANT migration on a dedicated mission branch;
3. apply and behaviorally verify the backend patch in the dedicated test project;
4. perform fresh production preflight;
5. apply only the exact approved GRANT migration to production;
6. perform read-only production post-checks;
7. execute the targeted four-defect re-verification and focused security regression;
8. create `report1.67.md` and `report1.68.md`;
9. open the completion PR;
10. stop for human review.
