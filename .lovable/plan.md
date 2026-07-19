
# SB-P-1.8E — Phase 4 Runtime Security Verification (Finalized Plan)

Read-only runtime verification of the deployed app, plus two authorized transaction creations through the normal UI. No schema, policy, type, migration, or app-code changes. No SQL. No "Try to fix." No request tampering. Phase 5 is not attempted.

## Confirmed by Mission Control

- Report path: `.lovable/phase-4-runtime-security-verification.md` (new file).
- `.lovable/plan.md` (Phase 3C Evidence Appendix) is preserved unchanged.
- Authorized to create exactly the two prescribed transactions via the UI; not to delete or modify them afterward.

## Environment

- App under test: `https://smartbusiness.teamlips.com`
- Backend (identity confirmed in a prior phase): Lovable Cloud, project ref `wwgqnshcgbukqczqblsm`.
- Executor: headless Chromium driven by Playwright from the sandbox.

## Owner sessions

- Owner A: restore the injected Lovable-managed Supabase session (localStorage key + `@supabase/ssr` cookies) before navigating to any authenticated route. No credentials handled.
- Owner B: not attempted. Report Test 2 as `NOT EXECUTED` with the mission-prescribed reason: "A second authenticated owner and business are not currently available for runtime verification." No account or business will be created.

## Test sequence

Each test writes numbered screenshots to `/tmp/browser/phase4/screenshots/` and a plain-text observation log line (URL, visible business name, transaction count, any console errors observed as data).

1. **Test 1 — Business Isolation (Owner A).** Session restore → `/dashboard` → `/transactions`. Record business identity and the full visible transaction list. Confirm no rows appear that are not attributable to the displayed business.
2. **Test 2 — Cross-Business Isolation.** `NOT EXECUTED` (see above). No fabrication.
3. **Test 3 — Anonymous Protection.** Clear cookies + localStorage in a fresh context. Direct-navigate to `/dashboard` then `/transactions`. Confirm redirect to `/auth` (per `_authenticated/route.tsx`) and that no transaction data renders before redirect.
4. **Test 4 — Authorized Transaction Creation.** Restore Owner A session. Create through UI only:
   - Sale — Party `Phase 4 Test Customer`, Description `Phase 4 Runtime Verification Sale`, Amount `101`, Payment `Cash`.
   - Purchase — Party `Phase 4 Test Supplier`, Description `Phase 4 Runtime Verification Purchase`, Amount `51`, Payment `Cash`.
   Verify each appears in the timeline with correct type/date/party/description/amount/payment method and that dashboard totals reflect them. Records are not deleted or edited.
5. **Test 5 — Append-Only Behaviour.** Inspect rendered timeline rows and any detail view for visible edit/delete affordances. Report only what is visible. No devtools, no request manipulation.
6. **Test 6 — Navigation Regression.** Hard-refresh on `/dashboard` and `/transactions` (session persistence). Sign out via UI, retry `/dashboard` (expect redirect to `/auth`), sign back in via session restore, confirm workspace reload.

## Stop-condition handling

If any observation meets a listed stop condition (cross-tenant leak, anonymous data exposure, wrong ownership on new rows, edit/delete UI, auth or protected-route regression), execution halts immediately. No corrective action is taken. Report is submitted as `PHASE 4 STOPPED — SECURITY OR RUNTIME ISSUE DETECTED` with reproduction steps, observed vs expected, evidence references, and a severity assessment.

## Deliverable — `.lovable/phase-4-runtime-security-verification.md`

Nine required sections, populated strictly from observations:

1. Mission Summary — runtime verification only; no implementation.
2. Environment — URL, backend ref, execution date/time (UTC), executor description.
3. Test Results — per test: outcome (`PASS` / `FAIL` / `LIMITED` / `NOT EXECUTED`), steps performed, observed behaviour, expected behaviour, evidence reference, limitations.
4. Evidence Register — evidence ID, description, associated test, account state, application route, artifact path.
5. Runtime Security Assessment — owner isolation, anonymous protection, transaction creation, append-only behaviour, authentication, navigation, session persistence. Cross-business isolation will NOT be claimed since Test 2 was not executed.
6. Regressions — either `No regressions observed.` or an itemized list.
7. Limitations — explicit note that Owner B / a second business are unavailable, Test 2 not executed; any evidence gaps.
8. Overall Assessment — one of the four permitted statuses, chosen only from observation. Expected outcome (subject to observation) is `PHASE 4 PASSED WITH DOCUMENTED LIMITATIONS` due to Test 2 being `NOT EXECUTED`.
9. Recommendation — one of: proceed to Phase 5; Mission Control review the documented limitation; authorize separate corrective mission.

Screenshot artifacts remain under `/tmp/browser/phase4/screenshots/` and are referenced by evidence ID in section 4. They can be copied into `/mnt/documents/phase4/` if a durable location outside the sandbox is desired — request if wanted.

## Explicit non-actions

- No schema/RLS/policy/migration/types/app-code changes.
- No SQL reads (`supabase--read_query` / `psql`) — mission verifies runtime, not DB state.
- No creation of a second owner/business.
- No deletion or modification of the two authorized transactions.
- No devtools request manipulation or forced-browser testing.
- No Phase 5 activity after the report.

Awaiting approval to switch to Build mode and execute.
