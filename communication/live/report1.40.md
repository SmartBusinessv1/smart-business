# SMART BUSINESS MISSION CONTROL — LOCAL RUNTIME ACTIVATION EVIDENCE HANDOVER

**Mission:** SB-P-1.12 — Local Runtime Activation Evidence  
**Work package:** `SB-P-1.12-WP-LOCAL-RUNTIME-ACTIVATION-EVIDENCE`  
**Instruction:** `communication/live/instruction1.40.md`  
**Canonical baseline:** `main@b5d8c5953076906d920908f90f30922ef1d24903`  
**Detailed report:** `communication/missions/SB-P-1.12/specialists/11-stage13-local-runtime-activation-evidence.md`  
**Runtime activation:** NOT AUTHORIZED  
**SB-MIG-1.4:** NON-EXECUTABLE  
**Implementation Authorization:** WITHHELD

## Exact provider target/status

- ref: `drravyyauixltoihzmwo`
- name: `smart-business-test`
- organization: `himkzepyuyaejqjieugk`
- region: `ap-south-1`
- classification: non-production test
- observed status: `ACTIVE_HEALTHY`
- observed PostgreSQL metadata: 17 / `17.6.1.147`
- exact DB observation timestamp: `2026-10-02 09:33:09.519114+00`

## Auth/provider facts observed

Provider metadata confirms:

- the test project API host is the `drravyyauixltoihzmwo.supabase.co` project host;
- an enabled modern publishable-key record exists;
- an enabled legacy anon-key record also exists.

No key value was copied or exposed.

Database-side Auth metadata shows zero `auth.instances` rows and zero custom OAuth-provider rows. This does not expose or prove hosted built-in provider configuration.

## Auth/provider facts unavailable

Current provider tooling does not expose the exact hosted project settings for:

- Auth Site URL;
- Redirect URLs / redirect allowlist;
- localhost presence;
- enabled built-in providers;
- email/password enabled state;
- email-confirmation mode;
- SMTP/custom-mail presence;
- Google provider enabled state;
- any exact provider setting that could block password fixture sign-in.

Later authorized human/provider action:

- inspect the exact test project under Authentication → URL Configuration and Authentication → Providers / email configuration;
- record metadata only;
- if the chosen local origin is absent and redirect-bearing flows are needed, separately authorize adding that exact local origin.

### Localhost conclusion

**Whether redirect mutation will be required: UNDETERMINED.**

Plain password sign-in does not use a redirect. The repository's signup, recovery and Google OAuth paths do. Stage 17 can minimize provider changes by using pre-created already-confirmed synthetic password users if email/password sign-in is confirmed enabled.

## Browser/server variable boundary

Browser:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Authenticated server:

- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`

Privileged server only, if separately required:

- `SUPABASE_SERVICE_ROLE_KEY`

The service-role value must never appear under a `VITE_` variable or enter client-side output.

The existing `SUPABASE_TEST_*` variables belong to automated test tooling, not the application runtime.

## Startup-write assessment

**No Supabase database write is performed merely by application startup at the reviewed baseline.**

Startup/router/Auth hydration creates clients, subscribes to Auth state, and reads session/user state. Database writes occur only on later explicit user actions such as first-time business creation.

## Parser-exclusion assessment

**PASS for planning:** Stage 17 can be planned with AWS parser flows completely excluded.

- `parser-lease.ts` is standalone and not wired into the merchant-facing import route.
- current `/catalog/import` uses `catalog-import.ts` and `parseInIsolatedWorker`;
- no `PARSER_*` value is needed for the ordinary local runtime if parser-lease functions are not called.

At the reviewed SHA, RS-01–RS-15 can therefore be planned without AWS parser-lease configuration; exact wiring must be rechecked on the eventual authorized runtime SHA.

## Minimal synthetic fixture matrix

Proposed minimum only; no fixture was created:

- U1 — Owner of Business A only;
- U2 — Owner of Business B only;
- U3 — Manager in Business A and Employee in Business B;
- Business A and Business B.

This covers:

- Owner/Manager/Employee;
- one person with two businesses;
- explicit active-business selection;
- unrelated-business denial;
- bounded Manager and Employee views.

Minimum transient states where a named scenario requires them:

- one invitation lifecycle state;
- one revocable capability grant;
- one confirmation binding / preview-commit binding;
- one small multi-row import batch for RS-05;
- only labelled support/external-participant harness records for RS-14/RS-15.

Minimum business data:

- A: two products, one linked Inventory item, one unlinked product, one category, selling-price/reference-cost context;
- B: one distinguishable product and one employee-owned/transaction record sufficient for isolation checks.

## Fixture cleanup/disposition proposal

- synthetic-only identifiers tied to a verification run ID;
- no production-derived data;
- retain records needed for audit/evidence review until Mission Control disposition;
- later separately authorized cleanup must use governed lifecycle/test cleanup paths;
- never bypass RESTRICT, append-only, authority, confirmation or history-integrity rules;
- if physical deletion is intentionally blocked, deactivate/quarantine the fixture set instead;
- Auth-user deletion requires separate authority.

## Proposed EV-02 status

**`PARTIALLY EVIDENCED`**

Technically evidenced:

- exact healthy test target;
- API host;
- publishable-key availability;
- environment boundary;
- no startup DML;
- parser exclusion;
- minimum fixtures and disposal model.

Still blocking activation:

- exact hosted Auth provider/email/redirect/SMTP configuration.

## Later mutations requiring separate authorization

Separate authority is required before any:

- Auth setting or redirect change;
- provider enable/disable;
- SMTP/email-confirmation change;
- retrieval/use of actual provider key values in a local environment;
- synthetic Auth-user creation;
- business/membership/invitation/capability/confirmation/fixture writes;
- fixture cleanup;
- local application startup against test;
- Stage 17 runtime execution;
- service-role local use;
- Full Assurance execution;
- key/secret rotation;
- parser enablement/configuration;
- deployment/hosting;
- Lovable change;
- SQL/migration authoring or execution;
- production mutation.

## EV-01 routine checkpoint

Repository evidence at the canonical baseline confirms both assurance workflow files still exist with their intended triggers:

- `.github/workflows/build-assurance.yml`;
- `.github/workflows/full-assurance.yml`.

The current connector does not expose the repository workflow `state` field, so it cannot independently refresh the prior canonical `state: active` observation. No state change is inferred.

Community Discussions:

- #209242: current response state **UNAVAILABLE** through current tools;
- #209244: current response state **UNAVAILABLE** through current tools.

Direct public fetches failed and the GitHub connector has no Community Discussion read action. The prior canonical 0-comment observation is not treated as current evidence.

Exact PR-head Actions state and PR metadata are appended to this handover after the PR is opened.

## No-mutation confirmation

No runtime activation, test-data mutation, Auth-setting mutation, provider-setting mutation, key exposure, local environment creation, application startup, parser execution, implementation, SQL/migration authoring/execution, Lovable mutation, deployment, or production mutation occurred.

**LOCAL RUNTIME ACTIVATION EVIDENCE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
