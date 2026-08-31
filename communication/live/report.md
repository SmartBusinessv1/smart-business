# SMART BUSINESS — REPOSITORY COMMUNICATION

# Report

**Mission ID:** `SB-REL-1.10-1.11`

**Gate:** `Gate 2A-C3B-D1 — F23-01 Verification-Path Read-Only Diagnosis`

**Parent Gate:** `Gate 2A-C3B — F23-01 Live Cross-Tenant Read-Isolation Verification`

**From:** `Claude Code — repository-capable read-only diagnostic/verifier`

**To:** `Mission Control`

**In Reply To:** `communication/live/instruction.md`

**Status:** `DIAGNOSIS COMPLETE — FOR MISSION CONTROL REVIEW`

**Date:** `2026-08-31`

---

## Evidence-Tier Legend

Every material claim below is tagged with exactly one of:

- **[INDEPENDENTLY VERIFIED]** — directly confirmed this session via a read-only production catalog query or direct inspection of the exact deployed function/policy definition.
- **[HUMAN/OPERATOR-ATTESTED]** — carried forward from the preceding Gate 2A-C3B human/operator record (§1), not independently re-provable by this diagnosis.
- **[INFERRED FROM DOCUMENTED/RUNTIME SEMANTICS]** — a conclusion drawn from well-documented PostgREST/Supabase request-response contract behavior, not from directly re-running the request.
- **[UNRESOLVED]** — the evidence available to this diagnosis does not settle the point.

---

## 1. Preserved Human/Operator Attempt

The first authorized Gate 2A-C3B human/operator probe is preserved as a blocked verification attempt and is not overwritten by this diagnosis.

### Production identity

- Project: `gysgzasfcjvtrgaigfyn`
- Name: `smart-business`
- Region: `ap-south-1`

### Owner A

Authenticated identity:

- expected: `2eaba621-7a06-497f-b878-2e68c0d0d8b7`
- actual: `2eaba621-7a06-497f-b878-2e68c0d0d8b7`

Own-scope results:

- Business A: `SAFE ERROR / DENIAL — HTTP 404`
- Inventory A: `SAFE ERROR / DENIAL — HTTP 404`
- Catalog A: `PRODUCT RETURNED: e3c3feb1-b307-4edc-80d8-bd0d51ff31c1`

Cross-tenant results:

- Business B: `SAFE ERROR / DENIAL — HTTP 404`
- Inventory B: `SAFE ERROR / DENIAL — HTTP 404`
- Catalog B: `RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED`

### Owner B

Authenticated identity:

- expected: `c520961e-f43f-4cba-9e22-b0e4f2256253`
- actual: `c520961e-f43f-4cba-9e22-b0e4f2256253`

Own-scope results:

- Business B: `SAFE ERROR / DENIAL — HTTP 404`
- Inventory B: `SAFE ERROR / DENIAL — HTTP 404`
- Catalog B: `PRODUCT RETURNED: 39e4b06e-de97-4121-97fd-da6d728750e0`

Cross-tenant results:

- Business A: `SAFE ERROR / DENIAL — HTTP 404`
- Inventory A: `SAFE ERROR / DENIAL — HTTP 404`
- Catalog A: `RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED`

Human/operator confirmation supplied to Mission Control:

- the authorized script completed only the read sequence shown above;
- no repair or additional test was performed after the script's stop boundary;
- no password/token/session value was supplied to Mission Control.

Mission Control classification:

`BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE`

Reason:

- Business and Inventory own-scope controls did not succeed, so their cross-tenant 404 outcomes are not interpretable as isolation proof;
- Catalog own-scope controls succeeded, but the cross-tenant RPC result shape was deliberately not printed, so Catalog cross-tenant non-disclosure was not proven;
- no protected cross-tenant disclosure was proven by the recorded evidence.

## 2. Diagnostic Boundary

This report may be completed only under the read-only diagnosis authorized by the current instruction.

No authenticated Owner A/Owner B probe replay, mutation, repair, migration, RLS/grant/function change, application change, infrastructure change, release action, or F23 retest is authorized.

## 3. Canonical Baseline

- Exact `main` SHA reviewed: **[INDEPENDENTLY VERIFIED]** `e9b8481da7692da4c1bd6f5d6a840599b3e0a97e` (PR #444, "Authorize Gate 2A-C3B-D1 read-only verification-path diagnosis"), confirmed identical to `origin/main` via `git rev-parse origin/main` before any evidence was gathered.
- Production project identity: **[INDEPENDENTLY VERIFIED]** re-listed fresh via `supabase projects list` at the start of this diagnosis: `gysgzasfcjvtrgaigfyn` / `smart-business` / `ap-south-1` / `status: ACTIVE_HEALTHY` (satisfies required item 8, production database health).
- Drift assessment: **[INDEPENDENTLY VERIFIED]** the instruction's cited authorization baseline `a6d5d37f61ad65e8b183270970e522fbb28b6225` is an ancestor of the reviewed `main` SHA, and the only commit between them (`e9b8481d`, PR #444) touches exclusively `communication/live/instruction.md` and `communication/live/report.md` — the two files this gate itself governs. No other repository file changed between the authorization baseline and the reviewed SHA, so no material drift affecting this gate exists.

## 4. Evidence Inspected

All evidence below was gathered read-only, without authenticating as Owner A, Owner B, or any other session, and without any `INSERT`/`UPDATE`/`DELETE`/DDL statement:

1. Production RLS-enabled state and policy counts for `businesses` (5) and `inventory_items` (4) — byte-identical to the Gate 2A-C2/H1 baseline.
2. Full policy definitions (role, command, `USING`/`WITH CHECK` expressions) for every policy on both tables.
3. Table-level privilege grants (`information_schema.role_table_grants`) for `anon`/`authenticated`/`service_role` on both tables.
4. Relation identity/kind (`pg_class`) confirming `public.businesses` and `public.inventory_items` are ordinary tables, and that no singular-named (`business`, `inventory_item`) relation exists anywhere in the database to shadow or be confused with them.
5. Exact-ID existence and ownership/business-linkage for all six F23-01 verification fixture rows (Business A/B, Inventory Item A/B, Catalog Product A/B).
6. The exact deployed definitions of `public.catalog_product_read`, `catalog_internal.current_actor_uid`, `catalog_internal.resolve_owner_business`, and `catalog_internal.build_product_detail_with_cost`, via `pg_get_functiondef`.
7. `EXECUTE` privilege on `catalog_product_read` for `anon`/`authenticated`/`service_role`/`postgres`.
8. Role-level PostgREST-relevant GUC overrides (`pg_db_role_setting`) on the `authenticator` and `postgres` roles.
9. Repository source: `src/integrations/supabase/inventory.ts` (the app's own supported read pattern), the Gate 2A-C1 hardening migration, the `businesses`/`inventory_items`/catalog schema and function migrations, and the prior Gate 2A-C3A-H1/Gate 2A-C3B instruction and report history for fixture-ID and evidence continuity.
10. The Gate 2A-C3B instruction's own "Approved Read Paths" section, confirming the intended request shape (PostgREST GET filtered by exact `id`; Catalog via the `catalog_product_read` RPC).

The human/operator's original probe script itself was not committed to the repository at any point and is not available for direct inspection; where a conclusion depends on its exact request code, that is marked **[UNRESOLVED]** below rather than asserted.

## 5. D1 — Business 404 Diagnosis

**[INDEPENDENTLY VERIFIED] Ruled out — RLS result behavior.** The live `SELECT` policy on `public.businesses` (`"Owners can view their business"`, `TO authenticated`, `USING (auth.uid() = owner_id)`) is unchanged from the schema migration and would permit exactly the row Owner A's own-scope request targeted. A policy that denies a row makes PostgREST's plain GET route return HTTP 200 with an empty array (`[]`), not HTTP 404 — RLS has no code path that produces 404. Since Owner A's *own* Business A request also returned 404, and RLS is provably permissive for that exact request, RLS cannot be the cause.

**[INDEPENDENTLY VERIFIED] Ruled out — table/role grant issue.** `authenticated` holds full table-level `SELECT` (and `INSERT`/`UPDATE`/`DELETE`) on `public.businesses`, unchanged from the original schema migration; no column-level `REVOKE` exists on this table in any migration.

**[INDEPENDENTLY VERIFIED] Ruled out — table name/relation does not exist / API contract absent server-side.** `public.businesses` exists as an ordinary table (`relkind = 'r'`); no singular-named `business` relation exists in any schema to be confused with it. The relation itself is present and correctly named in the database.

**[INDEPENDENTLY VERIFIED, narrowly] Inconclusive on schema-exposure config.** No `pgrst.db_schemas` (or related) GUC override was found on the `authenticator` role. This is consistent with default single-schema (`public`) exposure but is not, by itself, positive proof of the exact PostgREST-exposed-schema configuration, since Supabase's schema-exposure setting is primarily a Management-API/project-config value rather than a role-level GUC this diagnosis can read directly.

**[INFERRED FROM DOCUMENTED/RUNTIME SEMANTICS] Most evidence-supported cause: malformed request/path assumption or table-name/API-contract mismatch in the verification script itself, not a database-side defect.** PostgREST's REST convention is exact-ID filtering via a query parameter (`GET /rest/v1/businesses?id=eq.<uuid>`), never a path-segment resource ID (`GET /rest/v1/businesses/<uuid>`) — the latter is a common and easy assumption to carry over from typical path-based REST-API conventions, and PostgREST returns HTTP 404 ("relation/route not found in schema cache", PGRST205-class) when the requested route does not resolve to a known relation, as distinct from the 200/`[]` (denied-but-valid-route) or 406/PGRST116 (singular-representation zero-row) responses a correctly-shaped request would produce. This single explanation is also the only one of the candidate causes that uniformly accounts for **all four** Business outcomes recorded (Owner A own-scope, Owner A cross-tenant, Owner B own-scope, Owner B cross-tenant all returned identical 404s) without requiring RLS, grants, or schema state to differ between the own-scope and cross-tenant halves of the same authenticated session — which the evidence in §1 shows they do not.

**[UNRESOLVED]** The exact literal request the script issued cannot be confirmed: the script was not committed to the repository and its code was not available to this diagnosis. This diagnosis identifies the most evidence-supported *class* of cause (client-side request-shape/route mismatch) and independently rules out every database-side alternative Mission Control listed, but cannot cite the literal line of code responsible.

## 6. D2 — Inventory 404 Diagnosis

**[INDEPENDENTLY VERIFIED]** The same exclusions apply, on the same evidence pattern, to `public.inventory_items`: its live `SELECT` policy (`"Owners can view their inventory items"`, `USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()))`) is unchanged and would permit Owner A's own-scope Inventory Item A read; `authenticated` holds full table-level `SELECT`; the relation exists as an ordinary table under its exact expected name with no shadowing singular relation. All four Inventory outcomes (both owners, own-scope and cross-tenant) returned identical 404s, the same uniform pattern as Business.

**[INFERRED FROM DOCUMENTED/RUNTIME SEMANTICS] The cause is the same as Business, not a different, table-specific defect.** Both tables use the identical approved read path (PostgREST GET filtered by exact `id`), both show the identical all-four-combinations-404 pattern, and both have RLS/grant/relation-identity evidence that rules out a database-side explanation. There is no evidence distinguishing a Business-specific defect from an Inventory-specific one; the single most evidence-consistent explanation is one shared request-shape/route issue in the verification method that affected both tables identically.

## 7. D3 — Fixture Existence / Relationship Verification

**[INDEPENDENTLY VERIFIED]** All six fixture rows exist in production, by exact UUID, with the exact expected ownership/business relationships and unchanged names:

| Fixture | ID | Owning business / owner |
|---|---|---|
| Business A | `8c3e977f-b6b0-43a0-8b13-a04381d7bf4c` | owner `2eaba621-7a06-497f-b878-2e68c0d0d8b7` |
| Business B | `bed8bd00-dd1e-42f9-b155-c50d34427a2a` | owner `c520961e-f43f-4cba-9e22-b0e4f2256253` |
| Inventory Item A | `64c2e6d3-8e44-4be1-ab83-a83f3f83a62e` | business `8c3e977f-b6b0-43a0-8b13-a04381d7bf4c` (Business A) |
| Inventory Item B | `123132f5-d88d-4511-8f7d-792fe3e5b18b` | business `bed8bd00-dd1e-42f9-b155-c50d34427a2a` (Business B) |
| Catalog Product A | `e3c3feb1-b307-4edc-80d8-bd0d51ff31c1` | business `8c3e977f-b6b0-43a0-8b13-a04381d7bf4c` (Business A) |
| Catalog Product B | `39e4b06e-de97-4121-97fd-da6d728750e0` | business `bed8bd00-dd1e-42f9-b155-c50d34427a2a` (Business B) |

No cross-linkage exists: neither Inventory item nor Catalog product references the other business. No row was created, modified, or deleted by this query. The 404s recorded in the preceding gate are therefore not explained by a missing, deleted, or re-parented fixture — every targeted row was present and correctly owned at the time of this diagnosis.

## 8. D4 — Catalog Cross-Tenant Result Contract

**[INDEPENDENTLY VERIFIED]** The deployed `public.catalog_product_read(p_product_id uuid)` is byte-identical to its migration source (`20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`). Its logic:

1. Resolves the caller's identity via `catalog_internal.current_actor_uid()` (JWT-claim-derived; `NULL` if unauthenticated).
2. Resolves the caller's own business via `catalog_internal.resolve_owner_business()`.
3. Looks up the target product with `WHERE id = p_product_id AND business_id = v_business` — `v_business` is always the **caller's own** resolved business, never the target product's.
4. If no row matches, returns SQL `NULL` — with an explicit source comment: *"Unauthenticated caller and nonexistent/foreign product both produce the same NULL result — no existence-leaking branch."*
5. Only on a match does it return the full product-detail JSON (via `SECURITY DEFINER`, bypassing table RLS entirely by design, in favor of this explicit ownership predicate).

**[INDEPENDENTLY VERIFIED] Safe by construction, not merely by convention:** because step 3's predicate requires the *target* row's `business_id` to equal the *caller's own* resolved business, a cross-tenant call (Owner A resolving to Business A, requesting Product B, whose `business_id` is Business B) cannot match any row under any circumstance — the query returns zero rows purely from the `WHERE` clause, before any "is this mine?" check would even be needed. There is no code path in this function that can return another tenant's product fields.

**[INFERRED FROM DOCUMENTED/RUNTIME SEMANTICS]** A PostgREST RPC call to a function that returns a scalar `NULL` is serialized as HTTP 200 with a JSON response body containing the literal value `null` — this is a "result" in the sense that the HTTP call succeeds and returns a body, but it is the documented safe non-disclosure envelope, not disclosed product data.

**[UNRESOLVED]** This diagnosis has no access to the literal HTTP response body the human/operator's script received or how its own classification logic decided to print `RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED` (that determination was deliberately not captured, per the prior gate's own record). This diagnosis cannot and does not claim to know what that classification was checking. It establishes only that the function's own logic makes a `null` response — consistent with that label — both possible and, given the ownership predicate, the *only* possible outcome for a genuine cross-tenant call; it does not retroactively prove what the script's specific check evaluated.

## 9. D5 — Protected-Data Risk Classification

**[INDEPENDENTLY VERIFIED]** No evidence available to this diagnosis proves that protected cross-tenant data was disclosed. Specifically:

- Business/Inventory cross-tenant reads returned HTTP 404 (a safe denial/non-disclosure class of outcome, whatever its precise cause), not row data.
- The Catalog RPC's own deployed logic makes cross-tenant disclosure structurally impossible via the mechanism described in §8, independent of what the human script printed.

**No material security defect is identified by this diagnosis.** Every RLS policy, table grant, and function-execute grant inspected on `businesses`, `inventory_items`, and `catalog_product_read` is exactly as the schema migrations define it, with no drift from the Gate 2A-C2/H1 baseline. The most evidence-supported explanation for the prior gate's inconclusive result is a verification-method/request-shape issue in the human/operator's script, not a database-side access-control defect.

This is stated as an absence of proof of disclosure and an absence of an identified defect — not as an affirmative proof that no disclosure could ever occur under any circumstance. Ambiguity is not converted into a PASS of F23-01 itself: F23-01 remains `BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE` per Mission Control's own classification in §1, unchanged by this diagnosis.

## 10. D6 — Retest Eligibility / Smallest Safe Method

**Eligible.** The diagnosis is sufficient to recommend a retest-method correction confined to request shape and response parsing, with no fixture, schema, RLS, grant, function, or application change:

1. **Business/Inventory reads:** issue the request exactly as the application itself does (`src/integrations/supabase/inventory.ts`'s own pattern) — a PostgREST GET against `/rest/v1/businesses` or `/rest/v1/inventory_items` with the ID supplied as a query filter (`id=eq.<uuid>`), never as a URL path segment. Treat a zero-row response (`[]`, HTTP 200) as the "no access / not found" outcome, and treat any 404/406 with a PostgREST error `code` field (e.g. `PGRST205`, `PGRST116`) as a **request-shape defect in the probe itself**, to be corrected and re-run, not as an isolation result to interpret.
2. **Catalog RPC:** call `catalog_product_read` exactly as before, but explicitly parse and record whether the returned JSON body is the literal value `null` (safe non-disclosure — expected for both "not found" and "not yours") versus a populated object with product fields (would indicate disclosure and must STOP immediately). Do not classify a non-error HTTP response as ambiguous without first checking whether its body is `null`.

This recommendation requires none of: service-role impersonation, database-owner simulation of owner sessions, new fixtures, schema/RLS/grant/function changes, or application changes — it is a correction to the retest script's own request construction and response parsing only.

## 11. Evidence Classification

**Independently verified facts (this session, read-only production catalog queries or exact deployed-definition inspection):**

- Canonical `main` SHA and drift assessment (§3).
- RLS-enabled state, policy counts, and full policy text for `businesses`/`inventory_items` (§5, §6).
- Table-level grants for `anon`/`authenticated`/`service_role` on both tables (§5, §6).
- Relation identity/kind — both tables exist as ordinary tables under their exact expected names, with no shadowing singular relation (§5, §6).
- Existence and correct ownership/business-linkage of all six F23-01 fixture rows (§7).
- Exact deployed definition of `catalog_product_read` and its supporting functions, byte-identical to migration source, and its `EXECUTE` grants (§8).
- The structural (WHERE-clause-level) impossibility of the Catalog RPC returning another tenant's product data (§8, §9).
- Production project identity and health (`ACTIVE_HEALTHY`) (§3).

**Human/operator-attested facts (carried forward from §1, not re-verified here):**

- The exact sequence and literal outcomes the human/operator's script recorded (authenticated identity UUIDs, the 404s, the "RPC RETURNED A RESULT" labels).
- That the script performed only the read sequence shown, with no repair or additional testing, and that no credential/session secret was exposed to Mission Control.

**Inferred from documented/runtime semantics (not independently re-executed):**

- That PostgREST's own request-routing contract explains 404 for a path-segment-style ID request but not for a correctly-shaped, RLS-denied, or zero-row query filter request (§5, §6).
- That a scalar-`NULL`-returning RPC serializes as HTTP 200 with a literal `null` body under PostgREST's documented RPC contract (§8).

**Unresolved facts:**

- The literal request code / exact defect in the human/operator's probe script (not committed to the repository, not available for inspection) (§5, §6).
- What the script's own "RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED" classification logic actually checked, and what literal response body it received (§8).
- The exact PostgREST-exposed-schema configuration value (no positive read-only source was available beyond the absence of a role-level GUC override) (§5).

## 12. No-Mutation / No-Secret Confirmation

- **No mutation occurred.** Every query executed this diagnosis was a `SELECT` against `pg_catalog`/`information_schema`/`pg_policy`/`pg_proc`/application tables, or the CLI's own `projects list`. No `INSERT`, `UPDATE`, `DELETE`, `UPSERT`, `PATCH`, DDL, or mutation RPC was issued. No fixture was created, edited, or deleted. No RLS, grant, policy, role, function, trigger, schema, default-privilege, Auth, or application-code change was made.
- **No owner session was replayed.** Owner A and Owner B were not authenticated, impersonated, or simulated at any point; no `SET LOCAL ROLE authenticated` / JWT-claim-simulation technique was used in this diagnosis (unlike some prior gates in this mission, this diagnosis had no need for it, since every question was answerable from catalog metadata, exact-ID reads, and function-definition inspection alone).
- **No secret was requested, received, recorded, or exposed.** No password, access token, refresh token, session cookie, recovery link, or service-role key appears anywhere in this report, the evidence queries, or the accompanying PR.
- **F23-01 itself was not retested, and no downstream gate was advanced.**

## 13. Final Disposition

Every required post-creation/diagnostic question (D1–D6) has an evidence-grounded answer; no material security defect was identified; the fixture set is confirmed intact; a concrete, minimal, safe retest-method correction is identified requiring no fixture, schema, RLS, grant, function, or application change. The residual unresolved items (§11) concern only the literal contents of a script that was never committed to the repository, not any database-side fact within this diagnosis's authorized evidence sources — none of them prevent Mission Control from evaluating retest eligibility.

`PASS — VERIFICATION PATH DIAGNOSED — F23-01 RETEST ELIGIBLE`
