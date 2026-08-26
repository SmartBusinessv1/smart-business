# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PHASE C C5 VERIFICATION REPORT

**Report ID:** `report1.169`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.170.md`
**Date:** 2026-08-26

---

## 1. Canonical Commit Reviewed

`09ade5c` (`origin/main`, merge commit for PR #374 — the diagnostic entry point implementation authorized by `instruction1.170.md`).

## 2. Implementation PR/Commit Identity

- PR [#374](https://github.com/SmartBusinessv1/smart-business/pull/374), commit `95f2f79` — `feat(GC38R): add non-production-only C5 diagnostic entry point`. Human-reviewed and merged before this verification began.

## 3. Exact Diagnostic Entry-Point Design and Non-Production Guard

- `src/server-functions/gc38r-c5-diagnostic.ts`: `gc38rC5DiagnosticEnabled` — auth-gated status check reporting only `{enabled: boolean}`, true only when `process.env.GC38R_C5_DIAGNOSTIC_ENABLED === "true"`.
- `src/routes/_authenticated/gc38r-c5-diagnostic.tsx`: nested under the existing `_authenticated` layout; `beforeLoad` calls the status check and throws `notFound()` (404) unless enabled. Its button calls the existing, unmodified `parserLeasePreview` and `parserLeaseConfirmAndDispatch` with one fixed synthetic CSV fixture, uploads to the returned presigned S3 URL, and renders a sanitized per-step summary.
- `GC38R_C5_DIAGNOSTIC_ENABLED` was set only on `smart-business-parser-nonprod` via `wrangler deploy --var`, for this verification only. Production has never had this var set and never will under this instruction.

## 4. Authentication Path Used

The real, unmodified merchant authentication path — no bypass:

1. A throwaway test user + owned `businesses` row was provisioned in the isolated `smart-business-test` project using this repository's own existing, already-reviewed test-fixture helper pattern (`tests/setup/test-clients.ts`'s `createTestOwner`, replicated by a local, non-committed script using `SUPABASE_TEST_SERVICE_ROLE_KEY` from the git-ignored `.env.test.local` — the same mechanism the existing 162-test suite already uses against this same isolated project).
2. Verification then signed in through the deployed Worker's real `/auth` page (`supabase.auth.signInWithPassword`) using a headless browser (Playwright/Chromium) — a genuine sign-in, not a token injected around the auth form.
3. From the resulting real browser session, the diagnostic page was loaded and its button clicked, exercising the app's existing global `attachSupabaseAuth` middleware (`src/start.ts`) to attach the real session's bearer token to every server-function call automatically — identical to how every other server function in this app is called.

No authentication bypass, no service-role substitution for merchant authentication: `requireSupabaseAuth` (on both the new status check and the reused, unmodified `parserLeasePreview`/`parserLeaseConfirmAndDispatch`) independently validated the real session JWT exactly as it does for any other caller.

## 5. Test Supabase Project Confirmation

- Project: `smart-business-test`
- Project ref: `drravyyauixltoihzmwo` (`https://drravyyauixltoihzmwo.supabase.co`)
- Confirmed via `.env.test` (Founder-provided, git-ignored, matching the repo's own pre-existing `.env.test.example` convention).
- The Team LIPS production Supabase project was not accessed, referenced, or pointed at by any part of this verification.
- The throwaway test user + business were created only in this isolated project and are not yet deleted — see §12.

## 6. Cloudflare Deployment Identity/Version

- Worker: `smart-business-parser-nonprod`, account `Team LIPS - Smart Business` (`8db4d16fc03fd4290d6a7acf75eaf73e`).
- Deployment sequence this session:
  1. Rebuilt (`npm run build`) with `VITE_SUPABASE_URL`/`SUPABASE_URL`/`VITE_SUPABASE_PUBLISHABLE_KEY`/`SUPABASE_PUBLISHABLE_KEY` set to the `smart-business-test` project's values for this build only (client-bundle build-time injection, per Vite convention) — confirmed present in built assets.
  2. Deployed with `wrangler deploy --config .output/server/wrangler.json --name smart-business-parser-nonprod --keep-vars --var GC38R_C5_DIAGNOSTIC_ENABLED:true` → Version `27ff31cd-c550-4c6c-921b-2df75c5c7493`.
  3. Discovered (see §8) that `requireSupabaseAuth`'s server-side `process.env.SUPABASE_URL`/`SUPABASE_PUBLISHABLE_KEY` reads resolve from genuine Cloudflare Worker runtime bindings (via Nitro's `cloudflare_module` `process.env` proxy — the same mechanism the six pre-existing `PARSER_*` vars already rely on), not from the client build's Vite-time substitution. Redeployed adding these as real Worker vars: `--var GC38R_C5_DIAGNOSTIC_ENABLED:true --var "SUPABASE_URL:<test-project-url>" --var "SUPABASE_PUBLISHABLE_KEY:<test-project-anon-key>"` → Version `7864f44b-6383-4cc2-9842-f54b297768a3`.
  4. `parserLeasePreview`/`parserLeaseConfirmAndDispatch` additionally require `SUPABASE_SERVICE_ROLE_KEY` (for their existing, unmodified privileged RPC calls via `supabaseAdmin`) — set as a genuine Cloudflare **secret** (`wrangler secret put`, value piped directly from `.env.test.local`, never echoed to any log or this report) → this automatically created Version `c038bd0c-7c24-4fbd-bbe9-c1ad04bb39ee`, the **current live version**.
- Runtime URL: `https://smart-business-parser-nonprod.team-lips-smart-business.workers.dev`

## 7. Confirmation — All Existing Bindings Preserved, New Ones Fully Disclosed

- The two original secrets, `PARSER_WORKLOAD_CERTIFICATE_PEM` and `PARSER_WORKLOAD_PRIVATE_KEY_PEM`, were confirmed present by name (never by value) via `wrangler secret list` before and after every deploy in this session — unchanged throughout.
- The six original non-secret `PARSER_*` vars were preserved via `--keep-vars` on every deploy (Wrangler's documented, unconditional guarantee for dashboard-configured vars not declared in a given deploy's config) — consistent with `report1.168.md`'s already-verified mechanism.
- **New bindings added this session** (fully disclosed, none of which existed before, all scoped to `smart-business-parser-nonprod` only, all using `smart-business-test`-project values):
  - `GC38R_C5_DIAGNOSTIC_ENABLED` (var, `"true"`) — the diagnostic gate itself.
  - `SUPABASE_URL` (var, the test project's URL — non-secret).
  - `SUPABASE_PUBLISHABLE_KEY` (var, the test project's anon/publishable key — non-secret by Supabase's own design).
  - `SUPABASE_SERVICE_ROLE_KEY` (secret, the test project's service-role key — genuine secret material, scoped only to the isolated test organization, stored as a Cloudflare secret and never displayed).
- These four additions were necessary for **any** authenticated flow to function on this deployment at all (not specific to the diagnostic) — `requireSupabaseAuth` and the existing `supabaseAdmin` client require them unconditionally, and they were simply never previously provisioned on this Worker because no code path had ever exercised authentication before this verification.

## 8. Sanitized Roles Anywhere Result

**Not reached.** See §11 for the exact blocking cause. `createRolesAnywhereSession`/`obtainWorkloadCredentials` were never invoked during this verification — execution failed inside `parserLeasePreview`, before that call, at the guard-acquisition step.

## 9. Temporary Credential Lifetime Confirmation

**N/A.** No AWS Roles Anywhere session was ever created, so no temporary credential of any kind was issued, printed, or logged during this verification.

## 10. Sanitized Lambda AWS_IAM Invocation Result / Synthetic CSV Result / XLSX Result

**Not reached** for all three. Execution never proceeded past `parserLeasePreview`'s guard-acquisition step (§11), so the S3 upload, `parserLeaseConfirmAndDispatch`, and the Lambda `AWS_IAM` invocation were never attempted. No fixture (CSV or XLSX) was ever uploaded or parsed.

## 11. Root Cause: Pre-Existing Database Defect, Unrelated to This Instruction's Scope

The diagnostic page's auth, non-production gate, and service-role configuration all worked correctly (§3–§7 confirm the entry-point mechanism itself is sound). Clicking "Run diagnostic" reached `parserLeasePreview`'s handler, which calls `loadOwnedBusinessId` (succeeded — the test business was found) and then `supabaseAdmin.rpc("acquire_parser_preview_guard", ...)`, which failed. The app's existing sanitized-logging discipline correctly suppressed the raw error from the client response (`"We couldn't complete this action. Please try again."`), and `wrangler tail` showed only the existing sanitized log line:

```
[parser-lease] { event: 'acquire_guard_failed', businessId: '<test-business-id>' }
```

To identify the underlying cause (never exposed to the diagnostic page or its caller), this review called the same RPC function directly against the `smart-business-test` project using the already-held service-role key (a read of the function's own error response, not of any secret) and observed:

```json
{
  "code": "42702",
  "message": "column reference \"business_id\" is ambiguous",
  "details": "It could refer to either a PL/pgSQL variable or a table column."
}
```

This is a genuine, pre-existing SQL defect in `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`, predating this session entirely. `acquire_parser_preview_guard` is declared `RETURNS TABLE (business_id uuid, guard_token uuid)`, which implicitly declares `business_id` as a PL/pgSQL output variable inside the function body — colliding with the `parser_preview_guards.business_id` table column referenced, unqualifiable, in the function's `INSERT ... ON CONFLICT (business_id) DO UPDATE ...` clause (a conflict target cannot be table-aliased). This is a well-known PL/pgSQL pitfall (an output-parameter name shadowing a table column in a context that cannot be qualified), not something introduced by the diagnostic entry point, the redeploy, or any other change made under this instruction.

**This review did not inspect every other guard/lease RPC function in the same migration for the identical pattern**, and did not modify the migration file or any database object. Per this repository's own governance (`CLAUDE.md`: *"No migration document or `supabase/migrations/**` SQL file is self-authorizing; execution requires a new explicit mission, and ambiguity requires a stop report"*), a fix requires a new, explicitly scoped migration-correction mission — not something this instruction authorizes, and squarely matching `instruction1.170.md` §8's stop condition *"a change outside this bounded diagnostic correction."*

Because this defect blocks `acquire_parser_preview_guard` for **any** caller in **any** environment where this migration has been applied — not something specific to the diagnostic entry point — it would have blocked the first real production usage of this feature just as completely as it blocked this diagnostic. Surfacing it now, before any merchant-facing integration exists, is the practical value of this otherwise-blocked verification attempt.

## 12. Credential/Client/Log Exposure Checks

For everything that **was** exercised in this session:

- The deployed homepage HTML was scanned for private-key markers, AWS access-key-ID patterns, and the two `PARSER_WORKLOAD_*` variable names followed by a PEM body: no matches.
- All page/API responses observed during the Playwright-driven session (auth, dashboard, diagnostic page, the diagnostic's own server-function calls) were scanned the same way via a response-interception hook: no matches.
- The one sanitized log line captured via `wrangler tail` (§11) contains only an event name and the test business's UUID — no credential, token, or key material.
- No `--var` or `wrangler secret put` value was ever printed to this session's own output; secret values were piped directly from the git-ignored `.env.test.local` file into `wrangler secret put`'s stdin.
- The CA private key and workload private key were not read, referenced, or requested at any point in this session.

## 13. Cleanup / Removal Status of the Diagnostic Entry Point

**Not removed.** Per `instruction1.170.md` §7, removal is required *"after evidence is captured"* — C5 evidence (Roles Anywhere, Lambda, synthetic-fixture results) was not captured, blocked by the unrelated defect in §11. The diagnostic entry point's own mechanism is now proven correct end-to-end up to the point of the blocker, and will very likely be needed again for a C5 retry once the guard-function defect is separately fixed. `GC38R_C5_DIAGNOSTIC_ENABLED` and the three Supabase test-project bindings remain set on `smart-business-parser-nonprod` only; production is unaffected. Mission Control should decide whether to leave this in place pending a fix-and-retry, or to have it torn down now and re-provisioned later — no unilateral decision was made here to avoid discarding a working, already-verified setup that a retry would otherwise need to reconstruct.

## 14. Boundary Confirmation

- No production Supabase project, production migration, production Cloudflare Worker, production AWS resource, Lovable publication, DNS, R2, or custom-domain change occurred.
- No CA private key or CA passphrase was used, transferred, disclosed, or requested.
- No workload private key appeared in any repository file, chat, log, screenshot, build output, or client-visible variable.
- No IAM, RuntimeBoundary, OIDC, Roles Anywhere Trust Anchor/Profile, workload-role, or deploy-policy change occurred.
- `AWS_IAM` Function URL authentication was not weakened (it was never reached).
- No real merchant data was touched; only the one throwaway test user/business in the isolated test project was used.
- No migration file was modified.

## 15. Final Disposition

`GC-38R PHASE C C5 — BLOCKED`

**Blocker:** a pre-existing SQL defect in `acquire_parser_preview_guard` (migration `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`) — an ambiguous `business_id` reference between the function's `RETURNS TABLE` output parameter and the `parser_preview_guards` table column, inside an unqualifiable `ON CONFLICT (business_id)` clause — prevents the guard-acquisition step that every call to `parserLeasePreview` depends on, in every environment where this migration is applied. This is unrelated to the diagnostic entry point, the redeploy, or any change made under `instruction1.170.md`, and fixing it is outside this instruction's authorized scope per this repository's migration-governance rule.

**Suggested next step for Mission Control:** authorize a narrowly-scoped migration-correction mission for `acquire_parser_preview_guard` (and a review of the sibling guard/lease functions in the same migration for the identical output-parameter-shadowing pattern), after which this same diagnostic entry point — left in place and still gated to `smart-business-parser-nonprod` only — can be used to reattempt C5 without further implementation work.
