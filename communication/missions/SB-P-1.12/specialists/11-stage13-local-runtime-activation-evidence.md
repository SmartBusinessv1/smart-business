# SB-P-1.12 — Stage 13 Local Runtime Activation Evidence

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Work package:** `SB-P-1.12-WP-LOCAL-RUNTIME-ACTIVATION-EVIDENCE`  
**Executing specialist:** Supabase Backend Architecture  
**Authorizing instruction:** `communication/live/instruction1.40.md`  
**Governing authority:** MC-177 — `communication/missions/SB-P-1.12/mission-control/47-assurance-incident-and-runtime-model-disposition.md`  
**Canonical baseline:** `main@b5d8c5953076906d920908f90f30922ef1d24903`  
**Planning model:** local ephemeral Smart Business application runtime bound only to `drravyyauixltoihzmwo / smart-business-test`  
**Runtime activation:** NOT AUTHORIZED  
**SB-MIG-1.4:** NON-EXECUTABLE  
**Implementation Authorization:** WITHHELD

## 1. Observation boundary

This work package collected read-only provider and repository evidence only.

Exact test target:

- project ref: `drravyyauixltoihzmwo`;
- name: `smart-business-test`;
- organization: `himkzepyuyaejqjieugk`;
- region: `ap-south-1`;
- classification: non-production test;
- observed provider status: `ACTIVE_HEALTHY`;
- PostgreSQL engine/version metadata: 17 / `17.6.1.147`.

Exact database observation timestamp:

`2026-10-02 09:33:09.519114+00`

No production provider state was read for runtime activation and no production mutation occurred.

## 2. Current provider facts observed

### 2.1 Project/API identity

The provider exposes the exact project API URL metadata for the test project.

Observed project API host identity corresponds to:

`drravyyauixltoihzmwo.supabase.co`

No secret is required to state the project host identity.

### 2.2 Publishable-key availability

Read-only provider metadata reports two enabled publishable client-key records:

1. one enabled legacy `anon` API key record;
2. one enabled modern publishable-key record.

No key value was copied, displayed, written to Git, or included in this report.

**Activation implication:** a browser-safe publishable key is available in provider metadata. A later authorized human/local activation step may retrieve the value directly into a gitignored local environment from the provider UI/authorized secret channel, but this mission does not retrieve or store it.

### 2.3 Auth database metadata visible from Postgres

Read-only catalog inspection shows:

- `auth.instances`: 0 rows;
- rows with non-empty `raw_base_config`: 0;
- `auth.custom_oauth_providers`: 0 rows;
- enabled custom OAuth-provider rows: 0.

This does **not** prove that hosted built-in providers such as email/password or Google are disabled. Hosted GoTrue/Auth project configuration is not represented by those tables in a way that exposes the required settings to this tooling.

## 3. Required Auth/provider facts that are unavailable

The available Supabase provider connector does not expose a read-only Auth settings endpoint for this project. The following exact project facts therefore remain unavailable:

| Required fact | Current evidence status | Why it matters | Later human/provider action required |
|---|---|---|---|
| Auth Site URL | unavailable | fallback redirect target and hosted Auth behavior | authorized human opens exact test project **Authentication → URL Configuration** and records Site URL |
| Redirect allowlist / allowed redirect URLs | unavailable | signup confirmation, password recovery and OAuth redirect targets must be allowlisted | authorized human records the exact Redirect URLs from **Authentication → URL Configuration** |
| Whether localhost is already allowed | unavailable | determines whether local signup/recovery/OAuth redirect can return to the local runtime | inspect Redirect URLs; if the chosen local origin is absent and those flows are needed, a later separately authorized provider mutation must add it |
| Enabled built-in sign-in providers | unavailable | repository currently offers email/password and Google UI paths | authorized human opens **Authentication → Providers** and records enabled/disabled state without secrets |
| Email/password provider enabled state | unavailable | `signInWithPassword` is the preferred low-dependency local verification path | same provider-page inspection |
| Email confirmation behavior | unavailable | determines whether synthetic fixture users must confirm mail before password sign-in | record hosted email-provider confirmation setting |
| SMTP/custom-mail configuration presence | unavailable | determines whether confirmation/recovery emails can be delivered reliably during a local verification window | record presence/absence only from Auth email/SMTP configuration; do not expose credentials |
| Google provider enabled state | unavailable | repository exposes a Google button but Stage 17 does not require OAuth if password fixtures are used | record provider state if OAuth is ever planned |
| Any provider-level password restrictions beyond ordinary Auth policy | unavailable | can block password fixture sign-in even when application wiring is correct | inspect exact Auth provider/password settings in dashboard |

Supabase current documentation confirms that hosted Auth provider and email-confirmation settings live in the hosted project Auth configuration and that explicit redirect URLs must be configured for custom redirect targets. Those documentation defaults are **not** substituted for exact project evidence.

### 3.1 Localhost redirect conclusion

**Whether a localhost redirect mutation will later be required: UNDETERMINED.**

Important distinction:

- plain `signInWithPassword({ email, password })` does not itself use a redirect URL;
- the repository's signup path sets `emailRedirectTo = window.location.origin + "/dashboard"`;
- password recovery sets `redirectTo = window.location.origin + "/reset-password"`;
- Google OAuth sets `redirectTo = window.location.origin + "/dashboard"`.

Therefore a later Stage 17 activation can minimize provider changes by using **pre-created, already-confirmed synthetic password users** and avoiding signup/recovery/OAuth during verification. If Stage 17 requires any of those redirect-bearing flows, the exact local origin must already be allowlisted or a separately authorized redirect-setting mutation will be required.

## 4. Repository environment-variable boundary

### 4.1 Browser-visible variables

`src/integrations/supabase/client.ts` reads:

- `VITE_SUPABASE_URL`;
- `VITE_SUPABASE_PUBLISHABLE_KEY`.

Vite's `VITE_` prefix means these values are intentionally browser-visible.

The same client falls back during SSR to:

- `SUPABASE_URL`;
- `SUPABASE_PUBLISHABLE_KEY`.

### 4.2 Authenticated server variables

`src/integrations/supabase/auth-middleware.ts` reads:

- `SUPABASE_URL`;
- `SUPABASE_PUBLISHABLE_KEY`.

Those are sufficient for caller-token validation and caller-scoped Supabase access.

### 4.3 Service-role boundary

`src/integrations/supabase/client.server.ts` reads:

- `SUPABASE_URL`;
- `SUPABASE_SERVICE_ROLE_KEY`.

The file explicitly describes the service-role client as server-only and RLS-bypassing.

**Binding rule for any future local activation:**

- `SUPABASE_SERVICE_ROLE_KEY` may exist only in server-side local process state if a separately authorized Stage 17 path actually requires it;
- no variable named `VITE_SUPABASE_SERVICE_ROLE_KEY` may exist;
- the service-role value must never be injected into the browser bundle, report, repository, screenshot, terminal evidence, or client-side error.

MC-177 additionally requires server runtime availability of `SUPABASE_PUBLISHABLE_KEY`, which the current auth middleware uses.

### 4.4 Existing test-only variable names are not application-runtime names

Tracked test templates use:

- `SUPABASE_TEST_URL`;
- `SUPABASE_TEST_ANON_KEY`;
- `SUPABASE_TEST_SERVICE_ROLE_KEY`.

Those belong to automated test clients and are **not** read by the normal application runtime.

A future local application activation therefore needs a separate gitignored local environment using the application variable names from Sections 4.1–4.3, populated only with the approved test-project values.

No local environment file was created in this mission.

## 5. Startup-write assessment

**Assessment: application startup itself does not perform a Supabase database write at the reviewed baseline.**

Evidence:

- `src/server.ts` only loads the TanStack server entry and normalizes catastrophic SSR errors;
- `src/router.tsx` creates an in-memory React Query client/router;
- `src/integrations/supabase/client.ts` lazily creates a Supabase client only when accessed;
- `src/routes/__root.tsx` subscribes to Auth state changes and invalidates local/router query state;
- `src/hooks/use-auth.tsx` subscribes to Auth state and calls `supabase.auth.getSession()`;
- the authenticated route guard calls `supabase.auth.getUser()`.

These startup/auth hydration operations are read/session operations, not application-table DML.

**Important distinction:** later user actions can write. For example, first-time business setup performs an explicit `businesses.insert(...)` only after form submission. The absence of startup DML does not make runtime scenarios read-only.

## 6. Parser-exclusion assessment

**Assessment: the local runtime can be activated later with AWS parser flows completely excluded at the reviewed baseline.**

Repository evidence:

- `src/server-functions/parser-lease.ts` is a standalone AWS/S3/Lambda parser boundary and explicitly states that it does not modify or integrate the existing merchant-facing Catalog import flow;
- it requires the `PARSER_*` server configuration only when its parser-lease functions are invoked;
- `src/routes/_authenticated/catalog.import.tsx` currently imports `catalogImportPreview`, `catalogImportCommit` and `catalogImportGetBatch` from `src/server-functions/catalog-import.ts`;
- `catalog-import.ts` uses the existing isolated local parsing path (`parseInIsolatedWorker`) rather than the AWS parser-lease module.

Therefore a future MC-authorized Stage 17 local runtime can omit every `PARSER_*` variable and avoid every parser-lease server function.

### 6.1 Stage 17 scenario compatibility without parser AWS configuration

The locked runtime scenarios RS-01 through RS-15 are authority, delegation, denial, active-business, bounded employee/manager, cross-business, support/participant harness, Catalog context and revocation scenarios. None requires the AWS Lambda parser transport as an authority primitive.

At the current baseline:

- RS-01–RS-04, RS-06–RS-15 can run without parser configuration;
- RS-05's Catalog-import behavior can use the current non-AWS `catalog-import.ts` path;
- RS-13 may navigate `/catalog/import` without invoking parser-lease infrastructure.

**Activation safeguard:** re-check the exact selected runtime SHA before Stage 17. If a later authorized implementation rewires `/catalog/import` to the AWS parser-lease path, RS-05 must be excluded until parser runtime use is separately authorized.

## 7. Minimal synthetic fixture matrix

No fixtures were created. The following is a **future proposal only**, designed to cover the locked runtime scenarios with the fewest synthetic identities and businesses.

### 7.1 Core identities and businesses

| Fixture | Minimum relationship | Why needed |
|---|---|---|
| Person U1 | Owner of Business A only | Owner-highest-authority, delegation, staff setup, protected Owner intelligence, negative access to Business B |
| Person U2 | Owner of Business B only | second authority root, Business B setup, negative access to Business A |
| Person U3 | Manager in Business A **and** Employee in Business B | minimum one-person/two-business identity for explicit active-business selection; same synthetic person exercises Manager and Employee bounded surfaces in different business contexts |
| Business A | owned by U1 | Manager/catalog/reference-cost/delegation scenarios |
| Business B | owned by U2 | Employee and cross-business isolation scenarios |

This three-person/two-business matrix is sufficient for:

- Owner / Manager / Employee role visibility;
- one identity with two business memberships;
- unrelated-business denial using U1→B and U2→A;
- same-person context switching using U3 between A and B.

### 7.2 Minimum capability/membership states

Future fixture procedure should be able to establish only the specific capability states required by scenarios:

- U3 / Business A / Manager:
  - contextual product view;
  - price view/change where scenario requires;
  - inventory view;
  - Reference Cost permission separately toggleable for RS-04;
  - import permission only if RS-05 is executed.
- U3 / Business B / Employee:
  - approved transaction-entry capability;
  - only the employee's own permitted records;
  - no Owner analytics/intelligence by default.
- U1/U2:
  - Owner baseline capabilities implied by locked Product Truth.

### 7.3 Minimum transient authority states

Where the future implementation supports them, scenarios require:

- one invitation lifecycle state for U3 before one membership is accepted, for RS-08/RS-09;
- one confirmation binding / preview-commit binding tied to a consequential action for RS-02;
- a revocable Manager capability associated with that binding so revocation between preview and commit can be observed;
- one import batch with multiple rows for RS-05, created by the runtime scenario rather than pre-seeded where practical;
- bounded support-grant and external-participant **harness records only** for RS-14/RS-15 if those labelled harness scenarios are included;
- no production-derived identities or business data.

### 7.4 Minimum domain fixtures

To exercise Catalog/inventory context without unnecessary data:

- Business A:
  - two Catalog products;
  - one linked Inventory item;
  - one unlinked product;
  - selling price on at least one product;
  - Reference Cost on at least one product;
  - one category.
- Business B:
  - one clearly distinguishable Catalog product and one transaction/employee-owned record sufficient for cross-business denial and Employee-bounded-surface checks.

Create only what a named verification scenario consumes.

## 8. Fixture cleanup/disposition proposal

No cleanup was executed. Proposed future rule:

1. Every synthetic Auth identity uses a clearly test-only email/name convention tied to a recorded verification run ID.
2. Every business/product/fixture record is synthetic and linked to a recorded run manifest.
3. Do not copy production merchant data.
4. During the evidence window, preserve records needed to inspect `authority_events`, denial evidence, confirmation bindings and runtime results.
5. After Mission Control accepts the evidence, run a separately authorized fixture-disposition operation.
6. Cleanup must use the implemented governed lifecycle/authorized test cleanup path; it must not bypass `RESTRICT`, append-only, audit, confirmation, authority or history-integrity controls.
7. If governed retention/history rules intentionally make physical deletion inappropriate, deactivate or quarantine the synthetic fixture set and retain the run manifest rather than force-delete.
8. Auth-user deletion is not part of this mission and would require separate authorization, especially while identity/history retention behavior remains gated.

## 9. Proposed EV-02 status

**Proposed EV-02: `PARTIALLY EVIDENCED` — activation model technically feasible, provider Auth configuration still unresolved.**

Evidence now supports:

- exact approved non-production target;
- healthy provider state;
- exact API host identity;
- enabled publishable-key availability;
- browser/server/service-role environment boundary;
- no startup database write;
- full parser-AWS exclusion at current baseline;
- minimal synthetic fixture plan;
- cleanup/disposition plan.

Activation remains blocked by unavailable exact hosted Auth facts:

- email/password provider enabled state;
- email confirmation mode;
- redirect allowlist / localhost presence;
- Site URL;
- SMTP presence;
- any exact provider setting that would block password fixture sign-in.

Mission Control owns formal EV-02 disposition.

## 10. Later actions requiring separate authorization

The following are **not authorized by MC-177** and require later explicit authority:

1. inspect the exact test Auth settings in the Supabase dashboard if a provider reader with that visibility is designated;
2. add/change Site URL or localhost redirect allowlist entries;
3. enable/disable email/password, Google or any other Auth provider;
4. change email-confirmation behavior;
5. configure/change SMTP or mail credentials;
6. retrieve provider key values for local use;
7. create a gitignored local environment file containing actual test values;
8. create synthetic Auth users;
9. create businesses, memberships, invitations, capability grants, confirmation bindings, Catalog/Inventory/transaction fixtures or harness records;
10. run fixture cleanup/disposition;
11. start `npm run dev` against `smart-business-test`;
12. execute any Stage 17 runtime scenario;
13. use the service-role credential in a local server process;
14. run any Full Assurance workflow/test that writes test state;
15. rotate keys or GitHub environment secret values;
16. enable any parser flow or configure `PARSER_*` values;
17. deploy or host a preview/runtime;
18. mutate Lovable;
19. author/execute SQL or migrations;
20. mutate production.

## 11. EV-01 routine incident checkpoint

### 11.1 Assurance workflow repository visibility

At canonical `main@b5d8c5953076906d920908f90f30922ef1d24903`, both assurance workflow files remain present:

- `.github/workflows/build-assurance.yml` — Team LIPS Application Build Assurance / Fast Gate;
- `.github/workflows/full-assurance.yml` — Team LIPS Full Assurance.

Their repository definitions remain active-trigger definitions:

- Fast Gate: push and pull request to `main`, no path filter;
- Full Assurance: path-filtered push/pull request to `main` plus `workflow_dispatch`.

The GitHub connector available in this room does not expose the repository's current `GET actions/workflows` state field, so this checkpoint can verify the workflow files and triggers but cannot independently refresh the previous canonical observation that all six workflows had `state: active`. No workflow-state change is inferred.

### 11.2 Community Discussions #209242 / #209244

Current tooling could not retrieve either GitHub Community discussion directly:

- #209242 direct public fetch: inaccessible/cache miss through the available web reader;
- #209244 direct public fetch: inaccessible/cache miss through the available web reader;
- available GitHub connector exposes no Community Discussion read action.

Therefore **current response state is UNAVAILABLE**. No new response is inferred.

The prior canonical Stage 13 investigation recorded 0 comments / no answer on both discussions as of 2026-10-02T08:50:09Z. That historical observation is not presented as a current re-check.

### 11.3 Exact PR-head Actions state

This field is captured after opening the mission PR and is reported in `communication/live/report1.40.md` plus the final Mission Control handover. The report commit that records PR metadata necessarily precedes the final immutable branch head; the final response reports the exact remote head and blob identities.

## 12. No-mutation confirmation

During this mission:

- no Auth setting changed;
- no redirect URL was added or removed;
- no provider was enabled/disabled;
- no SMTP setting changed;
- no Auth user was created/deleted;
- no business, membership, fixture or test record was written;
- no local environment file containing real values was created;
- the application was not started against `smart-business-test`;
- no Stage 17 scenario was executed;
- no parser flow was invoked;
- no deployment or hosting action occurred;
- Lovable was not mutated;
- production was not mutated;
- no SQL/migration artifact was authored;
- no migration was executed;
- no database DDL/DML was performed.

Only read-only provider/database/repository inspection and the two authorized repository report paths are in scope.

**LOCAL RUNTIME ACTIVATION EVIDENCE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
