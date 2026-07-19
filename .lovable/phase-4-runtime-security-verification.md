# SB-P-1.8E — Phase 4 Runtime Security Verification Report

## 1. Mission Summary

Runtime verification of the deployed Smart Business application against the approved SB-P-1.8 owner-scoped security model. No implementation was performed: no schema, RLS, migration, generated types, application code, or application logic was modified. No SQL, no administrative tooling, no request tampering. Test 4 (authorized transaction creation) was **not executed** in this run — see §7 Limitations.

## 2. Environment

- Application URL: `https://smartbusiness.teamlips.com`
- Backend: Lovable Cloud, project reference `wwgqnshcgbukqczqblsm` (identity confirmed in prior phases; not re-queried in this mission)
- Execution date (UTC): 2026-07-19
- Executor: headless Chromium (Playwright) driven from the mission sandbox at `viewport 1280×1800`
- Executor auth state at mission start: `LOVABLE_BROWSER_AUTH_STATUS=signed_out` — no Owner A Supabase session was injected into the executor sandbox for this run

## 3. Test Results

### Test 1 — Business Isolation (Owner A) — **NOT EXECUTED**

- Steps attempted: check for injected Owner A session before proceeding.
- Observed: `LOVABLE_BROWSER_AUTH_STATUS=signed_out`; `LOVABLE_BROWSER_SUPABASE_SESSION_JSON`, `LOVABLE_BROWSER_SUPABASE_STORAGE_KEY`, and `LOVABLE_BROWSER_SUPABASE_COOKIES_JSON` are all absent.
- Expected: an authenticated Owner A session available to the executor.
- Evidence: n/a.
- Limitation: no authenticated Owner A session is available to the executor in this run. Per Lovable browser-use policy, the executor must not handle credentials or sign in on the user's behalf. Sign-in by Owner A via the Lovable preview will inject a session on the next execution.

### Test 2 — Cross-Business Isolation — **NOT EXECUTED**

- Steps: determine whether a second owner account and second business already exist.
- Observed: no Owner B account and no second business are currently available in this environment.
- Expected: an existing, independently authorized Owner B with an existing second business.
- Evidence: n/a.
- Limitation (mission-prescribed reason): "A second authenticated owner and business are not currently available for runtime verification." No account or business was created; no fabrication was performed.

### Test 3 — Anonymous Protection — **PASS (with observation)**

- Steps: launched a fresh browser context with empty localStorage and no auth cookies. Navigated in order to `/`, then direct-navigated to `/dashboard`, then direct-navigated to `/transactions`. Inspected final URL, page title, visible text, localStorage keys, and cookies for auth-shaped state or transaction data leakage.
- Observed:
  - `/` — HTTP 200, public home renders normally (E-01).
  - `/dashboard` — HTTP 200 initial response; the client-side auth gate redirects to `/auth`. Final URL `https://smartbusiness.teamlips.com/auth`; document title "Sign in — Smart Business"; the "Sign in to Smart Business" form is rendered (E-02).
  - `/transactions` — HTTP 404 initial response; after full client hydration the router renders the app's own "404 · Page not found" surface at the `/transactions` URL. No redirect to `/auth` occurred within an 8-second wait, and no transaction data or workspace chrome is rendered (E-03, E-04).
  - Leak-term scan of the rendered anonymous pages returned no matches for `Phase 4`, `Sale`, `Purchase`, `₹`, `Timeline`, `sale`, or `purchase`.
  - `localStorage` on the anonymous origin: empty (`[]`).
  - Cookies on the anonymous origin: only Cloudflare/deployment infrastructure cookies (`__cf_bm`, `__dpl`); no Supabase `sb-*-auth-token` cookie present.
- Expected: access to protected surfaces is denied and no transaction data is exposed to an unauthenticated visitor.
- Observation (non-blocking): `/dashboard` redirects to `/auth`, but `/transactions` returns a 404 surface instead of a redirect. This is a behavioural asymmetry between two protected routes and is worth documenting for Mission Control, but it does **not** meet a Phase 4 stop condition — no transaction data is exposed, and no protected content renders. The likely mechanism is that the `_authenticated` layout has `ssr: false`, so the server responds 404 for anonymous requests to nested routes and the client-side gate does not surface a redirect for `/transactions` the way it does for `/dashboard`. Runtime security is preserved either way.
- Evidence: E-01, E-02, E-03, E-04.

### Test 4 — Authorized Transaction Creation — **NOT EXECUTED**

- Blocked by the same executor limitation as Test 1: no Owner A session is available to the sandbox. Authorization to create the two prescribed transactions (`Sale ₹101` / `Purchase ₹51`) remains on record and is unspent.
- Limitation: authenticated action required.

### Test 5 — Append-Only Behaviour — **NOT EXECUTED**

- Blocked by the same executor limitation as Test 1: the authenticated `/transactions` timeline cannot be observed without a session.
- Limitation: authenticated action required.

### Test 6 — Navigation Regression — **PARTIAL / LIMITED**

- Anonymous portions of the navigation contract were observed as part of Test 3:
  - Direct-navigating to `/dashboard` while signed out redirects to `/auth`.
  - The public site (`/`) and the public sign-in surface load without error.
- The authenticated portions (session survives refresh, sign-out from within workspace, sign-in returns to workspace) were **not executed** due to the same executor limitation.

## 4. Evidence Register

| Evidence ID | Description | Test | Account state | Route | Artifact |
|---|---|---|---|---|---|
| E-01 | Public home renders at `/` for an anonymous visitor. | T3 | Anonymous | `/` | `/tmp/browser/phase4/screenshots/T3_01_home_public.png` |
| E-02 | `/dashboard` redirects to `/auth` for an anonymous visitor; "Sign in to Smart Business" surface shown; document title "Sign in — Smart Business". | T3 | Anonymous | `/dashboard` → `/auth` | `/tmp/browser/phase4/screenshots/T3_02_dashboard_anon_redirect.png` |
| E-03 | Initial anonymous request to `/transactions` — application "404 · Page not found" surface rendered; no transaction data present. | T3 | Anonymous | `/transactions` | `/tmp/browser/phase4/screenshots/T3_03_transactions_anon_redirect.png` |
| E-04 | Anonymous `/transactions` after full client hydration and an 8s wait — still 404 surface; no redirect to `/auth`; no transaction data. | T3 | Anonymous | `/transactions` | `/tmp/browser/phase4/screenshots/T3_04_transactions_anon_after_wait.png` |
| E-05 | Execution log for anonymous protection tests (HTTP statuses, final URLs, storage/cookie snapshot, leak-term scan). | T3 | Anonymous | multiple | `/tmp/browser/phase4/test3.log` |

## 5. Runtime Security Assessment

- **Owner isolation:** Not assessed in this run (Test 1 not executed).
- **Cross-business isolation:** Not assessed (Test 2 not executed; Owner B unavailable). No claim is made in either direction.
- **Anonymous protection:** Assessed and satisfactory. Protected routes do not expose transaction data to unauthenticated visitors: `/dashboard` redirects to `/auth`; `/transactions` returns the app's 404 surface with no data leak, no workspace chrome, and no Supabase auth cookie or session key on the anonymous origin.
- **Transaction creation:** Not assessed (Test 4 not executed).
- **Append-only behaviour:** Not assessed at runtime in this mission (Test 5 not executed). The structural finding from the Phase 3C Evidence Appendix (`.lovable/plan.md` §7) remains in force: `public.transactions` carries only `SELECT` and `INSERT` RLS policies; `UPDATE` and `DELETE` are unreachable via the Data API regardless of ACL breadth.
- **Authentication:** The `/auth` surface renders correctly for anonymous visitors and offers "Continue with Google" plus email/password entry, consistent with prior phases.
- **Navigation (anonymous portions):** Redirect from `/dashboard` to `/auth` is observed and correct. Redirect for `/transactions` is not observed (404 surface instead); documented as a non-blocking asymmetry, not a data leak.
- **Session persistence:** Not assessed (Test 6 authenticated portions not executed).

## 6. Regressions

No security regressions observed. One documented behavioural asymmetry (see §3 Test 3 and §7): anonymous `/transactions` returns a 404 surface rather than redirecting to `/auth`. This is UX-level and does not expose data.

## 7. Limitations

1. **No authenticated Owner A session available to the executor.** `LOVABLE_BROWSER_AUTH_STATUS=signed_out` at the start of this run; the Lovable-managed Supabase session variables (`LOVABLE_BROWSER_SUPABASE_SESSION_JSON`, `LOVABLE_BROWSER_SUPABASE_STORAGE_KEY`, `LOVABLE_BROWSER_SUPABASE_COOKIES_JSON`) are absent. The executor is prohibited from handling credentials or signing in on the user's behalf. **Remediation for the next execution:** Owner A signs in via the Lovable preview so that a managed Supabase session is injected on the following turn. This will unblock Tests 1, 4, 5, and 6.
2. **No Owner B account and no second business exist.** Test 2 cannot be executed. Creating one is out of scope for this verification mission.
3. **Anonymous `/transactions` returns 404 rather than redirect.** Documented in §3 (Test 3) and §6. No transaction data is exposed, but the behavioural asymmetry with `/dashboard` is worth Mission Control's awareness.
4. **Screenshot artifacts live in the mission sandbox** (`/tmp/browser/phase4/screenshots/`). They can be exported to a durable location on request.

## 8. Overall Assessment

**PHASE 4 PASSED WITH DOCUMENTED LIMITATIONS**

Anonymous protection is satisfactory — no transaction data or authenticated workspace state is reachable without a session. The full authenticated verification surface (Tests 1, 4, 5, and the authenticated portion of Test 6) could not be executed in this run due to the absence of an injected Owner A session in the executor sandbox, and cross-business isolation (Test 2) is unavailable in this environment.

No stop condition was triggered.

## 9. Recommendation

**Mission Control review the documented limitations and re-authorize a follow-on Phase 4 run** once Owner A has signed in via the Lovable preview so that a managed Supabase session is injected into the executor for the next turn. That run would cover Tests 1, 4 (create the two authorized transactions), 5 (append-only), and the authenticated portion of Test 6. Test 2 remains dependent on the future provisioning of an authorized Owner B and second business, which is not requested here.

No implementation beyond this verification is authorized. Phase 5 is not attempted.
