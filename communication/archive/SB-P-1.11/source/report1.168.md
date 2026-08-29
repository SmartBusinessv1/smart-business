# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — PHASE C C4+C5 EXECUTION REPORT

**Report ID:** `report1.168`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.168.md`
**Date:** 2026-08-25

---

## 1. Exact Canonical Commit SHA Reviewed

`f3924e27c84aea2a417fa3894f3111f56a54b5cc` (`origin/main` tip at execution time), which includes `instruction1.168.md` (PR #369), `instruction1.169.md` (PR #370), and `report1.167.md` (PR #371, Cloudflare C1 onboarding evidence).

## 2. Provider/Runtime Target Identity

- **Cloudflare account:** `Team LIPS - Smart Business` (`8db4d16fc03fd4290d6a7acf75eaf73e`) — confirmed via authenticated `wrangler whoami`, matching `report1.167.md`'s recorded account ID exactly.
- **Worker:** `smart-business-parser-nonprod`
- **Runtime URL:** `https://smart-business-parser-nonprod.team-lips-smart-business.workers.dev`
- **Deployment source:** local build (this review), uploaded via `wrangler deploy` — not connected to a GitHub repository integration.

## 3. C4 — Deployment / Runtime Activation: COMPLETED

### 3.1 Minimum correct deployment method determined

The canonical app already builds a Cloudflare-Workers-compatible server via `@lovable.dev/vite-tanstack-config`, which configures Nitro with the `cloudflare` preset by default (`vite.config.ts` comment: "nitro (build-only using cloudflare as a default target)"). `npm run build` produces `.output/server/` (a `env.fetch` Worker entry, matching `src/server.ts`'s handler shape) plus an auto-generated `.output/server/wrangler.json`. The minimum correct deployment is therefore:

```
npm run build
npx wrangler deploy --config .output/server/wrangler.json --name smart-business-parser-nonprod --keep-vars
```

No new source file, dependency, or repository change was required to determine or execute this — it uses tooling and build output the canonical repository already produces.

### 3.2 Binding-preservation strategy verified before any live deploy

Before deploying, this review confirmed via Cloudflare's own documentation and `wrangler deploy --help`:

- **Secrets** (`PARSER_WORKLOAD_CERTIFICATE_PEM`, `PARSER_WORKLOAD_PRIVATE_KEY_PEM`) are never deleted by a deploy under any circumstance — only an explicit `wrangler secret delete <key>` removes them (confirmed verbatim in Wrangler's own `--keep-vars` help text: *"Note that secrets are never deleted by deployments"*).
- **Plaintext vars** (the six non-secret AWS configuration values) are, by default, replaced wholesale by whatever `[vars]` a deploy's config declares — since the generated `wrangler.json` declares none, a plain deploy would have deleted them. The `--keep-vars` flag (`keep_vars` in config; confirmed top-level Wrangler setting) instructs Wrangler to leave dashboard-configured vars untouched instead. This was used on every deploy in this review.
- A `--dry-run` deploy (no credentials required, purely local bundling/validation) was run first and confirmed the bundle only adds one new binding, `env.ASSETS` (Cloudflare's own static-asset binding, unrelated to AWS/secrets) — nothing else.

### 3.3 Deployment authentication

This environment had no Cloudflare credentials (`wrangler whoami` initially reported unauthenticated; no `CLOUDFLARE_API_TOKEN` was present). Per the Founder's explicit choice, `npx wrangler login` was run to start an OAuth flow; the Founder completed the browser consent themselves. No API token or credential value was pasted into or handled by this session at any point — only a standard OAuth authorization-code exchange local to Wrangler's own CLI, matching the account and email already on file (`sbtools@teamlips.com`, account `Team LIPS - Smart Business`).

### 3.4 Deployment executed twice; final state is the second deploy

1. **First deploy** (Version ID `1ec00603-d528-453e-9e24-665937699333`): build run with no `VITE_SUPABASE_URL`/`VITE_SUPABASE_PUBLISHABLE_KEY` set locally (no `.env` exists in this environment; only `.env.example` templates and the isolated `.env.test.local` for the separate CI test org were present). Homepage rendered correctly (HTTP 200, real Smart Business marketing page, not the prior "Hello World" placeholder), confirming the Worker boots and serves SSR content, but any Supabase-Auth-dependent path would have been non-functional in this build.
2. **Second (current) deploy** (Version ID `6974f0f4-771d-4e75-9d54-c5325b922d65`): rebuilt after the Founder created a git-ignored `.env.test` (repo-root, following the repository's own pre-existing `.env.test.example` convention) containing the **isolated, non-production** `smart-business-test` Supabase project's URL and anon/publishable key (project ref `drravyyauixltoihzmwo` — a separate Supabase organization, not the Team LIPS production project, per `docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md`). These values were exported as `VITE_SUPABASE_URL`/`SUPABASE_URL`/`VITE_SUPABASE_PUBLISHABLE_KEY`/`SUPABASE_PUBLISHABLE_KEY` for this build only, then redeployed with the same `--keep-vars` command. **Neither value is secret** (a Supabase URL and anon/publishable key are designed to be client-exposed) and neither was printed in full in any log this report draws from beyond confirming the project-ref substring is present in the built client bundle.

**The Worker currently serving `smart-business-parser-nonprod` is this second build**, wired to the isolated test Supabase project, not the Team LIPS production project. This was intentional and Founder-directed, specifically to keep the (ultimately unreached) C5 authentication step off production data. Mission Control should treat this as a diagnostic-stage artifact, not a final "production-equivalent" state — a follow-up rebuild pointed at the production Supabase project (with no local `.env` needed beyond what the canonical deployment process would normally use) is a reasonable candidate for bundling into the next authorized step, alongside the entry-point work identified in §4.

### 3.5 Post-deploy verification performed

- `wrangler secret list --name smart-business-parser-nonprod` (both before and after each deploy): returned exactly `PARSER_WORKLOAD_CERTIFICATE_PEM` and `PARSER_WORKLOAD_PRIVATE_KEY_PEM` by name and type (`secret_text`) only — no value ever returned by this command (Cloudflare's API does not expose secret values), and both survived both deploys unchanged, as expected.
- The six non-secret vars were not independently enumerable via a non-mutating CLI command (Wrangler has no "list vars" command distinct from a deploy); their preservation rests on the documented `--keep-vars` guarantee in §3.2, which is unconditional and does not depend on this review knowing their values.
- `curl` against the deployed root URL: `HTTP/1.1 200 OK`, real page title (`Smart Business — Your AI Business Manager on WhatsApp`), correct security-relevant response headers (Cloudflare-managed `Report-To`/`Nel`), no crash.
- The full homepage HTML body was scanned for `-----BEGIN ... PRIVATE KEY-----`, an AWS access-key-ID pattern, the two `PARSER_WORKLOAD_*` variable names, and AWS SigV4 header names (`aws_secret_access_key`, `x-amz-security-token`): zero matches.
- `Worker Startup Time` reported by Wrangler on both deploys: 6–7 ms, indicating no startup-time exception in the Worker's module-evaluation path.

## 4. C5 — Direct Runtime Verification: BLOCKED before any AWS call

### 4.1 Root cause

`src/server-functions/parser-lease.ts` (the module implementing `parserLeasePreview` and `parserLeaseConfirmAndDispatch` — the only code path that calls `createRolesAnywhereSession`/`invokeParserLambda`) is not imported by any route, component, or test anywhere else in the repository:

```
grep -rln "parser-lease\|parserLeasePreview\|parserLeaseConfirmAndDispatch" src/ --include="*.ts" --include="*.tsx"
  → only src/server-functions/parser-lease.ts itself
```

This matches the module's own header comment: *"This module is additive and standalone... a later, separately authorized frontend integration can route parsed rows into the existing validate/classify/persist pipeline unchanged."* TanStack Start's server-function compiler only registers functions reachable from the built route tree; an unreferenced module is not included in the deployed bundle. This was confirmed directly: neither `parserLeasePreview` nor any fragment of `parser-lease.ts` appears anywhere in `.output/server/` after a full build (`grep -rln "parserLeasePreview" .output/server/*.mjs` → no matches).

**Consequence:** there is currently no HTTP-reachable entry point into the deployed Worker that exercises `createRolesAnywhereSession` or `invokeParserLambda` at all. This is a structural/scope gap, not an authentication, binding, or AWS-side problem — the Roles Anywhere `CreateSession` call was never attempted, and neither was the Lambda Function URL invocation, because the code that would make those calls is not present in the running Worker.

### 4.2 Why this was not resolved unilaterally

Closing this gap requires adding a new invocation entry point (route, page, or equivalent) that calls the existing server functions — a genuine code change requiring its own review under this repository's governance model (dedicated branch, human-reviewed PR), and arguably adjacent to the "later, separately authorized frontend integration" the module's own comment explicitly defers to a future mission. `instruction1.168.md` §6 lists as a stop condition: *"a change outside the already approved GC-38R runtime/integration scope is required."* Given the ambiguity over whether a minimal diagnostic-only entry point falls inside or outside that boundary, this was raised to the Founder rather than assumed. The Founder's explicit direction was to stop and report `BLOCKED` rather than add the entry point under this instruction.

### 4.3 What was and was not exercised

| C5 step | Status | Note |
|---|---|---|
| 1. Server runtime starts with required configuration present | Partially observed | Worker boots and serves SSR content (§3.5); the six AWS non-secret vars' actual presence/correctness inside the runtime was not directly exercised, since no code path reads them without going through the blocked entry point |
| 2. No parser credentials visible client-side/in responses | PASS for what was reachable | Homepage HTML scanned clean (§3.5); no other page/route was reachable to test, since none calls the parser path |
| 3. Roles Anywhere `CreateSession` succeeds | NOT ATTEMPTED | No reachable code path; zero AWS API calls made by this review |
| 4. Temporary credentials short-lived, not logged | NOT ATTEMPTED | N/A — no session was ever created |
| 5. Downstream request signing succeeds | NOT ATTEMPTED | N/A |
| 6. Lambda Function URL accepts `AWS_IAM` invocation | NOT ATTEMPTED | N/A |
| 7. Lambda returns valid bounded response for synthetic CSV | NOT ATTEMPTED | N/A — no fixture was submitted anywhere |
| 8. Synthetic XLSX fixture (if supported without new work) | NOT ATTEMPTED | N/A |
| 9. Error handling sanitized | NOT ATTEMPTED | N/A |
| 10. No production Supabase/Lambda/AWS role/Cloudflare/Lovable/merchant data touched | CONFIRMED | See §5 |

No synthetic or real merchant/test user, business, or session was created in **any** Supabase project (production or the isolated `smart-business-test` project) during this review — the blocker was identified before that step was reached.

## 5. Security and Scope Boundary Confirmation

- No AWS API call of any kind was made by this review (no `CreateSession`, no Lambda invocation, no IAM/S3/Roles-Anywhere read or write).
- No IAM, deploy-policy, RuntimeBoundary, OIDC, GitHub Environment, Roles Anywhere Trust Anchor/Profile/workload-role, or Lambda Function URL auth-mode change occurred.
- No CA private key or CA passphrase was used, requested, or referenced.
- The workload certificate/private key secret bindings were never read, printed, or reproduced by this session — only their **names** were retrieved via `wrangler secret list`, which cannot return values.
- The two non-secret Supabase values used for the diagnostic rebuild (test-project URL and anon/publishable key) are, by Supabase's own design, safe for client exposure, and belong to a project explicitly documented (`docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md`) as isolated from and unconnected to the Team LIPS production project.
- No production AWS resource, production Supabase project/migration, production Cloudflare target, or Lovable publication was touched. The only Cloudflare target touched was the authorized non-production Worker `smart-business-parser-nonprod`.
- No merchant data, real or synthetic, was created, read, or modified anywhere.
- No repository code was changed by this review; no commit other than this report exists on this branch.

## 6. Final Disposition

`GC-38R PHASE C NON-PRODUCTION RUNTIME VERIFICATION — BLOCKED`

**Blocker:** `src/server-functions/parser-lease.ts` has no reachable invocation entry point in the canonical route tree, so it is excluded from the deployed build; C5's Roles Anywhere/Lambda verification steps cannot be attempted against the real deployed runtime until a minimal, explicitly authorized invocation path (diagnostic route or equivalent) is added and reviewed. C4 (deployment/runtime activation) is complete and independently verified clean; the eight required bindings are confirmed preserved on the live Worker. No security boundary was weakened, and no AWS or production action was taken while investigating or reporting this blocker.

**Suggested next step for Mission Control:** authorize a narrowly-scoped follow-up instruction to add the minimal diagnostic invocation path for `parserLeasePreview` (synthetic-fixture-only, behind existing merchant auth, no auth bypass), through the normal branch/PR review process, after which C5 can be re-attempted against a fresh deploy — at that time also deciding whether that deploy should point at the production or the isolated test Supabase project for the auth/business layer.
