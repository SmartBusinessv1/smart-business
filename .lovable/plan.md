# SB-P-1.8E — Phase 4A Founder-Assisted Runtime Verification (Plan)

Guide the Founder through authenticated runtime verification one test at a time. No code, schema, RLS, migration, route, or deployment changes. No credential handling. No "Try to fix." Report path: `.lovable/phase-4a-founder-assisted-runtime-verification.md` (new file; the Phase 4 progress report and Phase 3C appendix are preserved unchanged).

## Operating rules

- Founder drives the browser at `https://smartbusiness.teamlips.com`. I never see or request passwords, OTPs, tokens, cookies, or session storage.
- Proceed one test at a time. After each test the Founder pastes back: (a) PASS / FAIL / BLOCKED, (b) short observation, (c) screenshot(s) attached to chat.
- I transcribe each result verbatim into the report and only advance to the next test after the Founder confirms.
- Any FAIL, authenticated 404, creation failure, or isolation anomaly → STOP, no remediation, return a Deployment Routing Blocker Report (for the /transactions 404 case) or a Phase 4A Stop Report (other cases).

## Pre-flight (Founder actions I will request)

1. Open `https://smartbusiness.teamlips.com/auth` in a fresh window; sign in as Owner A via the normal UI.
2. Confirm `/dashboard` loads, the Owner A business workspace is restored, expected business identity is visible.
3. Send screenshot `E-A01` (dashboard, authenticated).

## Test sequence

Each test lists: Founder actions → what to observe → evidence ID → pass/fail criteria I will apply to the report.

- **Test 1 — Authenticated Transactions route.** Navigate to `/transactions`. Confirm Record Sale, Record Purchase, Transaction Timeline are present. Evidence `E-A02`. If 404 → STOP → Deployment Routing Blocker Report (deployment manifest likely stale vs. source; no code change authorized).
- **Test 2 — Owner A workspace observation.** Confirm displayed business = Owner A's; timeline rows visibly belong to that workspace; no foreign business identity visible. Evidence `E-A03`. Recorded as Owner-A-view only; no cross-owner isolation claim.
- **Test 3 — Authorized Sale.** Create: Party `SB-P-1.8E Verification Customer`, Description `SB-P-1.8E Verification Sale`, Amount `101`, Payment `Cash`. Verify success feedback, timeline row, two-decimal amount, type=Sale, dashboard activity updates. Evidence `E-A04a` (form), `E-A04b` (timeline), `E-A04c` (dashboard).
- **Test 4 — Authorized Purchase.** Create: Party `SB-P-1.8E Verification Supplier`, Description `SB-P-1.8E Verification Purchase`, Amount `51`, Payment `Cash`. Same verifications as Test 3, type=Purchase. Evidence `E-A05a/b/c`.
- **Test 5 — Append-only UI.** Inspect timeline row and any detail view for Edit / Delete / modification affordances (visual only — no devtools, no SQL). Evidence `E-A06`.
- **Test 6 — Auth & navigation regression.** (a) Navigate Dashboard ↔ Transactions. (b) Hard-refresh on `/transactions`, confirm session persists. (c) Sign out via UI. (d) Visit `/dashboard` signed out → expect redirect to `/auth`. (e) Visit `/transactions` signed out → record actual behaviour (redirect vs 404) without judgement. Evidence `E-A07a..e`.
- **Test 7 — Owner B availability.** Ask the Founder whether an approved Owner B fixture exists.
  - Yes → Founder signs out, signs in as Owner B, confirms Owner A's verification transactions are NOT visible and only Owner B data is present. Evidence `E-A08`.
  - No → record verbatim: `CROSS-BUSINESS RUNTIME TEST BLOCKED — SECOND OWNER FIXTURE NOT AVAILABLE`. No account creation.

## Deliverable — `.lovable/phase-4a-founder-assisted-runtime-verification.md`

Sections: (1) Mission summary, (2) Environment & session confirmation, (3) Per-test results (T1–T7) with steps / observed / expected / evidence ref / status, (4) Evidence register (ID, description, test, artifact — Founder-supplied screenshots stored under `/mnt/documents/phase4a/` when the Founder attaches them), (5) Runtime security assessment scoped to what was observed (no cross-owner claim unless Test 7 executed), (6) Regressions, (7) Limitations (explicit note if Owner B unavailable), (8) Overall assessment (one of: PHASE 4 PASSED, PHASE 4 PASSED WITH DOCUMENTED LIMITATIONS, PHASE 4 STOPPED — SECURITY/RUNTIME ISSUE, PHASE 4 STOPPED — DEPLOYMENT ROUTING BLOCKER), (9) Recommendation.

## Explicit non-actions

- No code, route, `routeTree.gen.ts`, migration, RLS, types, or config edits.
- No republish, redeploy, or "Try to fix."
- No SQL, admin client, or devtools request tampering.
- No creation of Owner B, second business, or test fixtures.
- No deletion/edit of the two verification transactions.
- No handling of Founder credentials or session material.

## Next step

On approval, I switch to Build mode only to (a) create the empty report file and append results turn-by-turn as the Founder reports back, and (b) save Founder-supplied screenshots into `/mnt/documents/phase4a/`. No other build actions.
