# SB-P-1.12 — MC-176 Assurance and Runtime Readiness Investigation Handover and STOP Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.39.md` (MC-176)
**Work package:** `SB-P-1.12-WP-ASSURANCE-AND-RUNTIME-READINESS-INVESTIGATION`
**Full report:** `communication/missions/SB-P-1.12/claude-code/39-stage13-assurance-runtime-readiness-investigation.md`
**Status:** `READ-ONLY INVESTIGATION SUBMITTED — EV-01 OPEN — EV-02 OPEN (MODEL RECOMMENDED, NOT ACTIVATED)`

## 1. Baseline

`main@fbbc34eb66162237e46e5942e5b8dc4d13b4d739` (PR #713 merge). MC-176 has closed EV-03, EV-04 and EV-05; they are not re-opened here. GitHub observations were completed by 2026-10-02T08:50:09Z using read endpoints only.

## 2. EV-01 — Key Findings

| Finding | Evidence (report Section 2.2) |
|---|---|
| Both assurance workflows are visible and `active`; Actions is enabled; all actions are allowed; the workflow token is read-only; the repository is neither disabled nor archived | D-01 to D-04 |
| **Zero dispatch is repository-wide and independent of event type.** The last `main` commit with `github-actions` check-suites is `ec0fc74d` (checks started 2026-09-30T11:28:16Z). Every later commit, from `d8077827` (2026-09-30T17:29:59Z) through `fbbc34eb`, and the PR #713 head, has 0 check-suites, 0 check-runs and status `pending`/0 | D-07, D-08, D-10 |
| **Previously existing run objects now return 404**: 8 historical run IDs, all inside the 90-day retention, from canonical records and surviving check-run and deployment links. Their check-suites, check-runs and deployment records still exist | D-06, D-09 |
| The repository and network event feeds return 0 events; repository PR search returns 0 (Incident B persists) | D-12, D-13 |
| Settings, permissions, workflow registration, path filters and environment dependency are ruled out as the cause | Section 2.3 |
| The most consistent explanation is a GitHub-side failure in event ingestion or dispatch, plus run-history retrieval, for this repository. The internal cause is not observable, and no common root cause with Incident B is proven | Section 2.3 |
| `smart-business-test` environment: exists, with no protection rules and exactly the three secret **names** the workflow uses (created 2026-09-14, never updated); 0 variables; no repository secrets. Full Assurance deployments succeeded through 2026-09-18 | Section 2.5 |
| **Unverified:** whether those secret values still bind to the test project after its pause and 2026-10-01 reactivation | Section 2.5 |
| Discussions #209242 and #209244: readable; open; **0 comments; no answer; no GitHub staff response** | Section 2.6 |
| Unavailable to this tooling: billing and minutes (no `user` scope), internal GitHub logs, the audit log, secret values, and the reason for the run 404s | Section 2.4 |

**EV-01 recovery path (Section 3):**

1. **Monitor** (read-only). Every new PR is a passive probe.
2. **Founder** adds the new evidence to #209242 and/or files a GitHub Support request.
3. **Founder** re-checks billing and minutes in the UI.
4. After a GitHub fix, verify check-suites and retrievable runs on an exact SHA.
5. **Mission Control** authorizes one Full Assurance run, which writes test state, to prove secret-value binding. The **Founder** rotates the secrets if it fails.
6. Fallback: a Mission Control-governed substitute or an alternative CI arrangement, not recommended or decided here.

No retrigger commits or workflow toggles are proposed; toggling was already tried under MC-155. **EV-01: OPEN.**

## 3. EV-02 — Recommendation

| Candidate | Exists now | Verdict |
|---|---|---|
| C-1 Local ephemeral runtime bound to `drravyyauixltoihzmwo` | No (code and tooling exist; no application binding) | **Recommended** |
| C-2 Existing non-production hosted preview | None evidenced (`f3e992ec` is production-bound; `64c2b9b1` is legacy, unpublished and excluded) | Not available |
| C-3 Other existing non-production target | CI environment, database console and parser Lambda only; no application UI | Not suitable |

**Configuration names only:**

- browser: `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`;
- server: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, and `SUPABASE_SERVICE_ROLE_KEY` (server-only, never `VITE_`-prefixed);
- parser flows, excluded unless separately authorized: the nine `PARSER_*` names;
- CI: `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY`, `SUPABASE_TEST_SERVICE_ROLE_KEY`.

**Two blockers inside C-1:**

1. **Use-change decision.** The tracked test templates and the `SB-MIG-1.2E-B` isolation record say the test project is "NOT the application's runtime backend", so binding the application to it needs a Mission Control decision.
2. **Unknown test Auth configuration.** The test project's site URL, redirect allowlist and providers are not durably evidenced.

**Activation sequence (later; Section 4.4):**

1. Mission Control use-change decision;
2. read-only capture of the test Auth configuration;
3. redirect-allowlist change if needed;
4. authorized synthetic fixtures;
5. a gitignored local environment file with test values on the verifier's machine;
6. a pre-start binding check (`drravyyauixltoihzmwo` present, `gysgzasfcjvtrgaigfyn` absent, no `VITE_` service role);
7. `npm run dev` with evidence recorded;
8. rollback: stop, delete the environment file, rotate keys if exposure is suspected, dispose of fixtures per policy.

**EV-02: OPEN.**

## 4. Later Actions Needing Separate Authority

The full list is in report Section 5:

- Founder: GitHub escalation or support, and the billing UI check;
- Mission Control: one Full Assurance run that writes test state;
- Founder/admin: secret rotation if needed;
- Mission Control: any CI substitute, the test-backend use-change, fixture creation, and naming the human verifier;
- Founder: test Auth configuration read and, if needed, change.

## 5. Migration Authoring

**Should remain blocked.** EV-01 and EV-02 stay OPEN, and the other blockers listed in MC-176 Section 9 are unchanged.

## 6. Branch, Paths and Actions

- **Branch:** `mission/SB-P-1.12-stage13-assurance-runtime-readiness`, created from `origin/main` at `fbbc34eb`.
- **Changed paths:** exactly the full report and this file.
- **GitHub Actions at the baseline:** 0 check-suites and 0 check-runs on `fbbc34eb`; repository runs `total_count: 0`.
- **Actions state on the PR head:** recorded in the PR handover comment. This PR is itself a passive dispatch probe.

## 7. Not Done

No implementation; no SQL or migration authoring or execution; no CI, settings, environment, secret or workflow mutation; no retrigger; no dispatch; no runtime creation or deployment; no provider, test or production mutation.

**ASSURANCE AND RUNTIME READINESS INVESTIGATION SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
