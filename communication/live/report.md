# SMART BUSINESS — REPOSITORY COMMUNICATION

# Report

**Mission ID:** `SB-REL-1.10-1.11`

**Gate:** `Gate 2A-C3B-D2 — Business/Inventory HTTP 404 Read-Only Diagnosis`

**Parent Gate:** `Gate 2A-C3B — F23-01 Live Cross-Tenant Read-Isolation Verification`

**From:** `Claude Code — repository-capable read-only diagnostic/verifier`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction.md`

**Status:** `DIAGNOSIS HALTED BY INCIDENT — FOR MISSION CONTROL REVIEW`

**Date:** `2026-09-01`

---

## Incident Disclosure (read this first)

While preparing the H3 safe route probe, a **test-project** legacy `service_role` API key value (project `drravyyauixltoihzmwo`, `smart-business-test`) was inadvertently displayed in this session's own tool output, in full, while retrieving the project's publishable/anon key via `supabase projects api-keys`. Full detail, scope, and recommendation are in the "Incident Report" section near the end of this document. In summary:

- **No production secret was exposed.** The production publishable/anon key was retrieved and used for the H3 probes through a filtered pipe specifically designed to avoid this; no production secret value of any kind appears anywhere in this report, the PR, chat output, or any committed file.
- **No owner credential, token, or session was requested, received, or used**, on either project.
- **No mutation occurred** on either project.
- The exposed value is a **test-project** credential only, and this report recommends (without performing) rotating it.

This incident does not invalidate the H1–H5 diagnostic findings below, which are independently sound and are reported in full. It does change the gate's final disposition to `STOP`, per this instruction's own defined disposition options, rather than the `BLOCKED` or `PASS` the diagnostic findings alone would otherwise support.

---

## Preserved Prior State

The first human/operator F23-01 probe remains:

`BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE`

Gate 2A-C3B-D1 remains:

`BLOCKED — VERIFICATION-PATH DIAGNOSIS INCONCLUSIVE`

D1 independently ruled out missing fixtures, the inspected RLS/grant state, relation naming, and the previously proposed path-segment theory. The actual Business/Inventory HTTP 404 cause remains unresolved.

Catalog response semantics are not the subject of this gate except as preserved prior evidence.

## Diagnostic Boundary

This report may contain only the read-only HTTP/API-boundary diagnosis authorized by the current instruction.

No Owner A/B session replay, F23-01 retest, production mutation, repair, configuration change, or downstream gate progression is authorized.

## Evidence-Tier Legend

- **[INDEPENDENTLY VERIFIED]** — directly confirmed this session via a read-only production query, a live GET/HEAD/OPTIONS probe, or direct inspection of exact deployed source.
- **[HUMAN/OPERATOR-ATTESTED]** — carried forward from a prior gate's human/operator record, not independently re-provable here.
- **[INFERRED FROM DOCUMENTED/RUNTIME SEMANTICS]** — a conclusion drawn from documented PostgREST/Supabase contract behavior, not from directly re-running the exact original request.
- **[UNRESOLVED]** — the evidence available does not settle the point.

## Canonical Baseline

- Exact `main` SHA reviewed: **[INDEPENDENTLY VERIFIED]** `5365c60155fd8662b94f37b5159efbf58a835c25` (PR #446, "Authorize Gate 2A-C3B-D2 narrow HTTP 404 diagnosis"), confirmed identical to `origin/main` via `git rev-parse origin/main` before any evidence was gathered.
- Production project identity: **[INDEPENDENTLY VERIFIED]** re-listed fresh via `supabase projects list`: `gysgzasfcjvtrgaigfyn` / `smart-business` / `ap-south-1`.
- Production health: **[INDEPENDENTLY VERIFIED]** `status: ACTIVE_HEALTHY` at the time of this diagnosis (same `projects list` call).
- Drift assessment: **[INDEPENDENTLY VERIFIED]** the instruction's cited authorization baseline `c0cb506ffd9dbefbedf85fa995153f8bbe69f07b` is an ancestor of the reviewed `main` SHA, and the only commit between them (`5365c60`, PR #446) touches exclusively `communication/live/instruction.md` and `communication/live/report.md`. No other repository file changed; no material drift affecting this gate.

## Evidence Inspected

All evidence below was gathered without Owner A/Owner B credentials, without any INSERT/UPDATE/DELETE/DDL statement, and without any repair or configuration change:

1. The full prior Gate 2A-C3B, Gate 2A-C3B-D1 (as corrected via PR #445), and their source migrations/policies, for continuity of the fixture IDs and the already-settled RLS/grant/relation-identity facts (not re-queried here, per this instruction's §3 boundary against reopening settled questions absent contradicting evidence).
2. Current production project identity/health (`supabase projects list`).
3. The production project's publishable (anon) API key, retrieved via `supabase projects api-keys` and immediately filtered so that only the publishable key value was ever displayed or used — see the Incident Report for why this step is flagged despite the production key itself never being exposed.
4. Six live, read-only HTTP probes against the production REST API (`https://gysgzasfcjvtrgaigfyn.supabase.co`), each `GET` or `OPTIONS` only, using only the publishable/anon key (never an owner token, never a service-role key, never a real merchant identifier):
   - **A** — `GET /rest/v1/businesses?id=eq.8c3e977f-b6b0-43a0-8b13-a04381d7bf4c&select=id` (Business A fixture, the exact request shape D1 confirmed the human probe used).
   - **B** — `GET /rest/v1/inventory_items?id=eq.64c2e6d3-8e44-4be1-ab83-a83f3f83a62e&select=id` (Inventory Item A fixture, same shape).
   - **C** — `GET /rest/v1/zzz_route_probe_nonexistent_relation?id=eq.8c3e977f-b6b0-43a0-8b13-a04381d7bf4c&select=id` — a deliberately nonexistent relation name, used purely as a negative control to establish this project's genuine "route/schema-cache not found" response signature. No real or fixture table was affected; the name was chosen specifically to not collide with anything.
   - **D** — `OPTIONS /rest/v1/businesses`.
   - **E** — `OPTIONS /rest/v1/inventory_items`.
   - **F** — a planned sixth probe (`GET` to the Business A route with no `apikey` header at all, as a gateway-layer control) was attempted and denied by the Claude Code tool-permission auto mode classifier. Per this mission's established practice, no workaround was attempted; the probe was simply not performed. Its absence is noted in H4 and does not block the conclusions below, which do not depend on it.
5. Full response status, headers, and body were captured for A–E; none contained owner data, merchant data, or credentials (empty arrays, generic PostgREST error envelopes, or empty OPTIONS bodies only). All probe-response scratch files were deleted after review.

## H1 — Exact Prior HTTP Evidence

**[UNRESOLVED — not available to this diagnosis.]** No Supabase API/PostgREST log access tool was available through the authorized CLI wrapper (`scripts/supabase-cli.mjs`) or any connected MCP server in this session — the Supabase CLI's subcommand surface (`backups`, `db`, `inspect`, `postgres-config`, `projects`, etc.) has no logs/analytics query command, and the `supabase` MCP server was not connected/authenticated in this session. Consequently, the original human probe's exact request/response was not re-inspectable from logs. This diagnosis relies entirely on the human/operator's own recorded evidence (§ "Preserved Prior State" above, and D1/PR #445: request shape `?id=eq.<uuid>&select=id`, HTTP 404, no PostgREST error code or response body captured) plus the fresh comparative probes in H3.

## H2 — Route / Schema Exposure

Per this instruction's own required distinction (relation exists in PostgreSQL / relation is exposed through PostgREST / route is reachable / role is authorized to read rows), each is addressed separately:

- **Relation exists in PostgreSQL:** **[HUMAN/OPERATOR-ATTESTED, carried forward]** already independently verified in D1 (both tables exist as ordinary tables under their exact expected names) and not re-queried here per this instruction's §3 boundary.
- **Relation is exposed through PostgREST / route is reachable:** **[INDEPENDENTLY VERIFIED]**, newly, via H3 below — both `OPTIONS /rest/v1/businesses` and `OPTIONS /rest/v1/inventory_items` returned HTTP 200 with `Allow: GET, HEAD, POST, OPTIONS`, which PostgREST only returns for a relation actually present in its schema cache; a genuinely unexposed/unknown relation returns HTTP 404 with error code `PGRST205` instead (independently confirmed via the negative-control probe C). Both `businesses` and `inventory_items` are therefore currently exposed and reachable through the production PostgREST API.
- **Role is authorized to read rows:** **[INDEPENDENTLY VERIFIED]** for the `anon`/publishable role specifically (probe A: `businesses` → HTTP 200, RLS-denied-to-empty, i.e. authorized-route-but-no-matching-policy; probe B: `inventory_items` → HTTP 401/`42501` permission denied, i.e. no table grant at all for `anon`, matching the intentional Gate 2A-C1/C2 hardening). **[HUMAN/OPERATOR-ATTESTED, carried forward]** for the `authenticated` owner role specifically — D1 already independently verified full table grants and a permissive `SELECT` policy for the exact owner/row combination the human probe targeted; this diagnosis did not and could not re-test that role directly, since doing so would require Owner A/B credentials, which are explicitly not authorized.

These four facts are not the same fact, and none of them alone explains the original 404 — but the second and third are now independently confirmed for the first time in this diagnosis chain, narrowing where the remaining mystery can live (see H4).

## H3 — Safe Route Probe

Necessary and performed, since logs (H1) were unavailable. Five of six planned probes completed; the sixth was blocked by the tool-permission classifier (see Evidence Inspected, item 4F) and not retried by another method.

**[INDEPENDENTLY VERIFIED] Results** (publishable/anon key only, no owner session, no service-role key, no real merchant identifier):

| Probe | Request | Status | PostgREST error code | Body (summarized) |
|---|---|---|---|---|
| A | `GET businesses?id=eq.<Business A>&select=id` | 200 | none | `[]` |
| B | `GET inventory_items?id=eq.<Inventory Item A>&select=id` | 401 | `42501` (permission denied for table) | error envelope, no rows |
| C | `GET <deliberately nonexistent relation>?id=eq...&select=id` (negative control) | 404 | `PGRST205` (table not found in schema cache) | error envelope, no rows |
| D | `OPTIONS businesses` | 200 | none | empty, `Allow: GET, HEAD, POST, OPTIONS` |
| E | `OPTIONS inventory_items` | 200 | none | empty, `Allow: GET, HEAD, POST, OPTIONS` |
| F | `GET businesses?...` with no `apikey` header (gateway-layer control) | — | — | **not performed — denied by tool-permission classifier** |

None of these probes used Owner A/B credentials, replayed F23-01, or attempted to prove tenant isolation; A and B in particular reflect only the `anon` role's own authorization state, not owner-level RLS evidence.

## H4 — Root-Cause Classification

`UNRESOLVED — INSUFFICIENT READ-ONLY EVIDENCE`

**[INDEPENDENTLY VERIFIED] Two of the four candidate causes are now ruled out with direct, comparative evidence, not inference from HTTP status alone:**

- **`CONFIRMED — POSTGREST ROUTE/SCHEMA EXPOSURE` is ruled out.** Probe C independently establishes this project's actual "not exposed" signature (HTTP 404, `PGRST205`, "Could not find the table ... in the schema cache"). Neither `businesses` (probe A: 200) nor `inventory_items` (probe B: 401/`42501`) produces anything resembling that signature, and both OPTIONS probes (D, E) confirm both routes are registered in the schema cache right now. A relation missing from the schema cache would 404 identically regardless of which role queries it — the schema cache is not role-scoped — so if this were the cause, these anon-key probes would very likely show it too. They do not.
- **`CONFIRMED — API/REQUEST CONSTRUCTION OUTSIDE ID FILTER` is ruled out.** Probes A and B used the *exact* request shape D1 confirmed the human probe used (`?id=eq.<uuid>&select=id`), and neither produced a 404 or any request-construction error (PostgREST would report a malformed filter as HTTP 400, not 404, and neither table did).

**[UNRESOLVED] Neither of the remaining two candidate causes can be confirmed or ruled out from here:**

- `CONFIRMED — UPSTREAM/API GATEWAY BEHAVIOR` — plausible (the one variable this diagnosis could not hold constant against the original human probe is the identity/token used: owner JWT vs. publishable key), but unconfirmed: the one control that would have directly characterized gateway-layer behavior independent of PostgREST (probe F) was not performed.
- `CONFIRMED — OTHER EVIDENCED CAUSE` — no specific alternative cause is evidenced by anything gathered here.

This diagnosis substantially narrows, but does not close, D1's unresolved cause: route/schema exposure and request-shape are now independently excluded with direct comparative evidence (not merely inferred), leaving the mystery confined to something specific to the *authenticated owner request path* (token/JWT handling, or an upstream layer that treats authenticated and anonymous requests differently) — which this diagnosis's authorized, non-owner-credential toolset cannot directly test.

## H5 — Retest Readiness

**Not yet fully eligible, but with a concrete, evidence-supported instrumentation requirement that would make the next attempt self-diagnosing.**

**[INFERRED FROM DOCUMENTED/RUNTIME SEMANTICS]** Probes A–C demonstrate that this PostgREST instance returns materially different, informative signals for different failure classes: a bare HTTP status number (as the original human probe recorded) collapses these into indistinguishable "404"s, while the response body's PostgREST `code` field and the `Proxy-Status` response header immediately distinguish "route not found" (`PGRST205`) from "permission denied" (`42501`) from "authorized, zero rows" (`200`/`[]`).

**Required minimum change for a retest to be diagnostic, not just repeated:** the retest script must capture and record, for every non-2xx response, the full JSON response body (specifically the `code`, `message`, and `hint` fields) and the `Proxy-Status` response header — not merely the numeric HTTP status. This requires no schema, RLS, grant, function, or application change; it is a response-capture instrumentation change to the retest script only. With that instrumentation in place, a recurrence of the 404 would immediately reveal whether it carries `PGRST205` (route/schema — reopening H4's first ruled-out bucket would then need to be revisited) or some other/no PostgREST error code at all (consistent with an upstream/gateway-layer origin, per H4's leading remaining hypothesis).

No database/application repair is recommended or was performed.

## Security / Correction Classification

- **Material security defect proven:** No. RLS/grant behavior observed for `anon` on both tables (probes A, B) matches the intended, previously-verified design exactly (empty-result default-closed for `businesses`; permission-denied for the intentionally-hardened `inventory_items`). Nothing gathered here shows unauthorized data exposure.
- **Configuration or implementation correction indicated:** Not proven necessary. Route/schema-cache exposure is independently confirmed healthy for both tables; no evidence collected here points at a specific configuration or code defect requiring correction. The remaining unresolved hypothesis (upstream/gateway/authenticated-token handling) has no confirmed defect to correct — only an untested control (probe F) that could not be run.
- **F23-01 status remains:** `BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE`, unchanged, per §1/D1. Not retested, not reopened.

## Incident Report

**What happened:** While retrieving the production project's publishable/anon API key (needed for the H3 probes), this session first ran `supabase projects api-keys` against the **test** project (`drravyyauixltoihzmwo`, `smart-business-test`) to verify the command's output shape before using it against production. That test call, run without any filtering, displayed the full JSON response in this session's own tool output — which included the test project's **legacy `service_role` API key in full, unmasked**, alongside the (safe-by-design) legacy `anon` key and the newer publishable/secret key pair (whose new-style `sb_secret_...` value *was* correctly masked). The CLI's `--reveal` flag, per its own `--help` text, only concerns the newer `sb_secret_...`-style key; it does not mask the legacy JWT-style `service_role` key, which is displayed in full by default.

**Corrective action taken immediately:** No further unfiltered calls were made. For the actual production key retrieval, the same command was run against production but piped directly through a purpose-built filter (a small Node script) that parsed the JSON and printed *only* the `publishable`-type entry's key value — the raw response (which would have included production's own legacy `service_role` key in full) was never displayed or written to any file in this session. The filter script and the extracted key were both deleted from the scratchpad after use.

**Scope of exposure:**

- Affected: the **test** project's legacy `service_role` API key value, displayed once in this session's tool-call output (part of the conversation transcript).
- Not affected: production. No production secret of any kind was displayed, written to a file, or committed at any point.
- Not affected: Owner A/Owner B credentials, tokens, or sessions — none were requested, received, or used, on either project.
- Not affected: repository, report, or PR content — the exposed value does not appear anywhere in `communication/live/report.md`, this PR, or any commit.

**Recommendation (not performed — outside this gate's authorization):** rotate or invalidate the **test** project's legacy `service_role` API key, since its value has now appeared in a session transcript. This diagnosis did not attempt this itself: key rotation is a mutation, and even on the test project it is outside a read-only diagnostic gate's authorization. Mission Control/the Founder should decide and execute this separately.

## No-Mutation / No-Secret / No-Owner-Session Confirmation

- **No mutation occurred on production or test.** Every action this diagnosis performed was a read-only listing (`projects list`, `projects api-keys`), a read-only `GET`/`OPTIONS` HTTP probe, or local file cleanup. No `INSERT`/`UPDATE`/`DELETE`/`UPSERT`/`PATCH`/DDL/mutation RPC was issued. No fixture, RLS, grant, policy, role, function, trigger, schema, Auth, API, or application configuration was created, edited, or deleted.
- **No Owner A/Owner B session was replayed, and no owner credential or token was requested, received, or used.** All HTTP probes used only the publishable/anon key.
- **No production secret was exposed.** One test-project legacy `service_role` key value was inadvertently displayed in this session's own tool output — see Incident Report above. This is disclosed in full rather than omitted.
- **F23-01 itself was not retested, and no downstream gate (F23-02/F23-03/F23-04) was advanced.**

## Final Disposition

The H1–H5 diagnostic findings are sound and reported in full above: route/schema exposure and request-construction are now independently ruled out as causes of the Business/Inventory 404s (narrowing, though not closing, D1's unresolved finding), and a concrete, evidence-supported retest-instrumentation requirement is identified for H5. Absent the incident below, this evidence alone would support `BLOCKED — HTTP 404 DIAGNOSIS INCONCLUSIVE` (H4 did not reach a `CONFIRMED` bucket, so `PASS` is not yet supportable either).

However, an incident occurred during this diagnosis (see "Incident Report" above): a test-project legacy `service_role` API key value was inadvertently displayed in this session's tool output while preparing the H3 probes. No production secret was exposed and no owner session was used, but per this instruction's own defined disposition options, an incident during this diagnostic gate takes disposition precedence over the underlying diagnostic conclusion. Mission Control should review the incident, decide on test-project key rotation, and separately authorize whichever of a corrected retest, a further diagnostic step (specifically, a safely-executed gateway-layer control probe), or a Business/Inventory retest comes next.

`STOP — HTTP DIAGNOSTIC INCIDENT`
