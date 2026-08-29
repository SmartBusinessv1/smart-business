# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-RR-3 — TARGETED RLS REMEDIATION FOR DEFECTS 2 AND 3

**Mission ID:** SB-P-1.11-RR-3  
**Mission Name:** Targeted RLS Remediation for Product Tax Change and Permanent Product Delete  
**Mission Status:** ACTIVE AFTER MERGE  
**Authorized By:** Mission Control  
**Publish / Production Deployment:** NOT AUTHORIZED

---

## 1. Mission Objective

Correct only the two remaining confirmed SB-P-1.11 release blockers documented in `communication/live/report1.67.md`.

- Defect 2: `record_catalog_tax_change` cannot persist the product change because `catalog_tax_executor` lacks the required product-update privilege plus a matching Owner-scoped RLS UPDATE policy.
- Defect 3: `delete_catalog_product` cannot safely evaluate dependent history or delete an eligible product because `catalog_lifecycle_executor` lacks the required history-table read privileges/policies and product-delete privilege/policy.

This is a narrow security-preserving remediation mission. Preview, publish, deployment, and domain cutover remain on HOLD.

---

## 2. Locked Baseline

Canonical repository: `SmartBusinessv1/smart-business`

Authorization baseline: `0b87826d24e3ab5140e9729dcae04f53540c3e25`

Primary evidence:
- `communication/live/report1.64.md`
- `communication/live/report1.67.md`
- `communication/live/report1.68.md` if present

Production Supabase: `gysgzasfcjvtrgaigfyn`

Dedicated test Supabase: `drravyyauixltoihzmwo`

Authorized Lovable project: `f3e992ec-06df-4d49-b157-b92ec064c078`

GitHub remains the sole canonical source of truth.

---

## 3. Exact Authorized Remediation

### 3.1 Defect 2 — Product Tax Change

Authorize only:

1. the missing UPDATE table privilege for the existing `catalog_tax_executor` on `public.catalog_products`; and
2. one new RLS UPDATE policy for `catalog_tax_executor` on `public.catalog_products`.

The policy must mirror the existing accepted Owner/business-scoped executor pattern already present on `catalog_products`. Use the repository/production's existing authoritative business-resolution expression, equivalent to:

`business_id = catalog_internal.resolve_owner_business(catalog_internal.current_actor_uid())`

Apply the same Owner/business constraint for both the row-selection and resulting-row checks of the UPDATE policy.

Do not grant any broader privilege to `catalog_tax_executor` and do not change function ownership or function body.

### 3.2 Defect 3 — Permanent Product Delete

Authorize only:

1. the missing SELECT table privileges for `catalog_lifecycle_executor` on the four history tables already used by `delete_catalog_product`:
   - `public.catalog_selling_price_events`
   - `public.catalog_tax_events`
   - `public.catalog_reference_cost_events`
   - `public.catalog_product_link_events`
2. one Owner/business-scoped RLS SELECT policy for `catalog_lifecycle_executor` on each of those four tables, mirroring the accepted read-executor pattern already present on each table;
3. the missing DELETE table privilege for `catalog_lifecycle_executor` on `public.catalog_products`; and
4. one Owner/business-scoped RLS DELETE policy for `catalog_lifecycle_executor` on `public.catalog_products`, using the same accepted Owner/business resolution pattern already used elsewhere.

The existing `delete_catalog_product` function remains responsible for dependent-history eligibility. The new policies must make those existing checks truthful; they must not bypass, replace, or weaken them.

Do not grant direct DELETE authority to `authenticated` or `anon`.

---

## 4. Migration Discipline

Create the smallest reviewable migration containing only the exact privilege and RLS-policy additions authorized above.

Before writing it:

1. inspect exact existing policy names/predicates on production read-only;
2. derive the new policies from those accepted patterns;
3. choose non-colliding names consistent with repository conventions;
4. confirm no equivalent policy already exists;
5. confirm Defects 2 and 3 remain present.

Do not rewrite existing policies if adding the narrow missing policies is sufficient.

Do not change table schema, columns, function signatures, function owners, triggers, enums, or business rules.

---

## 5. Mandatory Test-Project-First Gate

Apply the complete proposed migration to `drravyyauixltoihzmwo` first.

Production application is prohibited until all required test verification passes.

### 5.1 Defect 2 behavioral verification

Using a genuine authenticated Owner context and the same RPC call shape as the frontend:

- perform a valid product-tax change;
- confirm the command reports `completed`;
- read the product back and prove the tax fields actually changed;
- confirm the expected tax-history event exists exactly once;
- confirm same-key/same-payload replay remains idempotent;
- confirm same-key/different-payload remains `IDEMPOTENCY_CONFLICT`;
- confirm another business cannot modify or read the target product through the accepted surfaces.

A `completed` result without the product row actually changing is FAIL.

### 5.2 Defect 3 behavioral verification

Using isolated test fixtures:

For an eligible zero-history product, prove permanent delete completes and the product is no longer readable through the accepted read surface while expected deletion/audit evidence remains correct.

For a separate product with legitimate dependent history created through accepted test-project commands, prove permanent delete is rejected with the accepted dependent-history category and the product remains present.

Also prove a different business cannot use delete or history-read authority to affect or infer another business's product/history.

### 5.3 Security regression on test

Before production, prove:

- RLS remains enabled on every affected table;
- `catalog_tax_executor` gains only the required Owner-scoped product UPDATE capability;
- `catalog_lifecycle_executor` gains only the required Owner-scoped history reads and eligible product DELETE capability;
- no cross-business visibility/mutation appears;
- `authenticated` and `anon` gain no direct UPDATE/DELETE privileges on `catalog_products`;
- browser/catalog writes remain RPC-only;
- accepted public function count remains exactly 19;
- function ownership remains unchanged;
- Defect 1 frontend correction remains intact;
- Defect 4 category-select remediation remains intact.

If security regression occurs, STOP and revert test-only changes before proceeding.

---

## 6. Production Preflight Gate

After test PASS, perform a fresh read-only production preflight immediately before application.

Confirm:

- production is still `gysgzasfcjvtrgaigfyn`;
- expected prior migrations are present;
- the exact missing privileges/policies remain absent as expected;
- no materially conflicting policy/grant has appeared since `report1.67.md`;
- RLS is enabled on all affected tables;
- accepted public function count remains 19;
- no production merchant/test data will be created by this mission.

If production differs materially from these assumptions, STOP.

---

## 7. Production Application Authorization

Only after the test-project gate and fresh production preflight PASS, production application is authorized for the exact reviewed migration.

No production behavioral write testing is authorized.

Apply the migration once through the existing controlled production migration path. Do not manually patch production outside the tracked migration.

---

## 8. Production Post-Verification — Read Only

Immediately afterward verify read-only:

- exact new privileges are present;
- exact new RLS policies are present;
- policy predicates match the approved Owner/business-scoped pattern;
- no unintended grants exist;
- `authenticated`/`anon` direct mutation rights remain absent;
- RLS remains enabled;
- policy-count changes are exactly predicted;
- function ownership/signatures remain unchanged;
- accepted public function count remains 19;
- migration inventory contains exactly the expected new migration;
- no production data rows were created or modified by verification;
- Defect 4's category SELECT grant remains intact.

---

## 9. Targeted Re-Verification

After production migration, re-run Defects 2 and 3 behaviorally against the dedicated test project only, using the final canonical migration state.

Also re-confirm Defects 1 and 4 remain resolved through focused source/read-only checks and safe non-production behavior where appropriate.

Required result:

- Defect 1 — RESOLVED
- Defect 2 — RESOLVED
- Defect 3 — RESOLVED
- Defect 4 — RESOLVED

Anything else is not a release-readiness PASS.

---

## 10. Canonical Verification

Run frozen install, production build, `tsc --noEmit`, the existing automated test suite, focused non-production behavioral verification for Defects 2 and 3, and source/migration integrity checks.

Do not modernize dependencies or repair unrelated warnings.

---

## 11. Required Deliverables

Create:

`communication/live/report1.69.md`

for test-first evidence, migration execution, production preflight/application, and read-only post-verification.

Create:

`communication/live/report1.70.md`

for targeted re-verification of all four original blockers and focused security regression.

Clearly distinguish test-project behavioral evidence from production read-only evidence.

---

## 12. Stop Conditions

STOP if:

- Defect 2 requires anything beyond the exact product UPDATE privilege plus one narrow Owner-scoped UPDATE policy;
- Defect 3 requires anything beyond the exact four history SELECT privileges/policies plus product DELETE privilege/policy;
- a policy cannot use the existing accepted Owner/business-isolation pattern;
- function-body or ownership modification appears necessary;
- test behavior remains incorrect after the authorized migration;
- cross-business visibility/mutation appears;
- direct browser mutation privilege would be required;
- production differs materially from preflight assumptions;
- a fifth defect must be fixed to obtain PASS.

Document new evidence but do not expand scope.

---

## 13. Explicitly Not Authorized

Do not create a twentieth public command, change Catalog business rules, broaden Owner authority, grant browser roles direct catalog mutation privileges, weaken/disable RLS, change function ownership, change production Supabase, perform production behavioral write tests, create production merchant/test data, enable Lovable Cloud, connect Lovable to GitHub, create another Lovable project, modify the original Lovable project, modernize dependencies, add unrelated fixes, publish, deploy, move `smartbusiness.teamlips.com`, self-approve, or self-merge.

---

## 14. Release Gate

Even a PASS does not itself authorize preview, publish, deployment, or domain cutover.

After merged PASS reports, Mission Control must review all four RR-1 blockers, both specialist positions on the `business_tax_settings` write-only limitation, whether a separate read-path mission is required before public release, and final preview/publish readiness.

---

## 15. Next Logical Step

After human merge of this authorization, execute the test-project-first remediation. Only if the complete migration passes behavioral and security verification in the dedicated test project may execution proceed through fresh production preflight, exact migration application, read-only production post-verification, and targeted re-verification. Open a completion PR containing `report1.69.md`, `report1.70.md`, and the exact reviewed migration, then stop for Mission Control review.