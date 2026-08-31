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
11. Mission Control's review of the prior version of this report, which disclosed the literal request-filter form the human/operator's probe script used for Business/Inventory reads: `$SupabaseUrl/rest/v1/$Table?id=eq.$Id&select=id` — a standard PostgREST query-filter request, not a path-segment request.

The human/operator's original probe script itself was not committed to the repository at any point and remains otherwise unavailable for direct line-by-line inspection; item 11 above is the one exception (its literal request-filter form was disclosed to this diagnosis by Mission Control, not independently observed by this diagnosis, and is tagged **[HUMAN/OPERATOR-ATTESTED]** accordingly). Where a conclusion still depends on parts of the script this diagnosis cannot see, that is marked **[UNRESOLVED]** below rather than asserted.

## 5. D1 — Business 404 Diagnosis

**[INDEPENDENTLY VERIFIED] Ruled out — RLS result behavior.** The live `SELECT` policy on `public.businesses` (`"Owners can view their business"`, `TO authenticated`, `USING (auth.uid() = owner_id)`) is unchanged from the schema migration and would permit exactly the row Owner A's own-scope request targeted. A policy that denies a row makes PostgREST's plain GET route return HTTP 200 with an empty array (`[]`), not HTTP 404 — RLS has no code path that produces 404. Since Owner A's *own* Business A request also returned 404, and RLS is provably permissive for that exact request, RLS cannot be the cause.

**[INDEPENDENTLY VERIFIED] Ruled out — table/role grant issue.** `authenticated` holds full table-level `SELECT` (and `INSERT`/`UPDATE`/`DELETE`) on `public.businesses`, unchanged from the original schema migration; no column-level `REVOKE` exists on this table in any migration.

**[INDEPENDENTLY VERIFIED] Ruled out — table name/relation does not exist / API contract absent server-side.** `public.businesses` exists as an ordinary table (`relkind = 'r'`); no singular-named `business` relation exists in any schema to be confused with it. The relation itself is present and correctly named in the database.

**[INDEPENDENTLY VERIFIED, narrowly] Inconclusive on schema-exposure config.** No `pgrst.db_schemas` (or related) GUC override was found on the `authenticator` role. This is consistent with default single-schema (`public`) exposure but is not, by itself, positive proof of the exact PostgREST-exposed-schema configuration, since Supabase's schema-exposure setting is primarily a Management-API/project-config value rather than a role-level GUC this diagnosis can read directly.

**[HUMAN/OPERATOR-ATTESTED] Path-segment/route-mismatch theory withdrawn.** Mission Control has disclosed that the probe script's actual Business/Inventory requests used the standard PostgREST query-filter form (`$SupabaseUrl/rest/v1/$Table?id=eq.$Id&select=id`), not a path-segment resource ID. The request-shape theory in the prior version of this report was therefore factually incorrect and is withdrawn, not merely softened.

**[UNRESOLVED] Cause of the four HTTP 404s.** With RLS, grants, relation identity, and request shape all independently ruled out or confirmed correct, no evidence available to this diagnosis explains why a correctly-shaped, RLS-permissive, fully-granted own-scope request returned HTTP 404 rather than the expected row (or, for the cross-tenant half, why it returned 404 rather than the 200/`[]` an RLS-driven denial would normally produce). This diagnosis does not have — and this turn is not authorized to gather — the additional read-only evidence (e.g. the exact response headers/PostgREST error `code` the script received, or the request's `apikey`/`Authorization` headers) that would be needed to settle this. The cause remains genuinely unresolved, not merely unconfirmed.

## 6. D2 — Inventory 404 Diagnosis

**[INDEPENDENTLY VERIFIED]** The same exclusions apply, on the same evidence pattern, to `public.inventory_items`: its live `SELECT` policy (`"Owners can view their inventory items"`, `USING (business_id IN (SELECT id FROM businesses WHERE owner_id = auth.uid()))`) is unchanged and would permit Owner A's own-scope Inventory Item A read; `authenticated` holds full table-level `SELECT`; the relation exists as an ordinary table under its exact expected name with no shadowing singular relation. All four Inventory outcomes (both owners, own-scope and cross-tenant) returned identical 404s, the same uniform pattern as Business.

**[HUMAN/OPERATOR-ATTESTED]** Mission Control's disclosure of the actual request-filter form (§4 item 11) applies to Inventory identically to Business — both used the same `?id=eq.<Id>&select=id` query-filter shape. The path-segment theory is withdrawn here for the same reason as §5.

**[UNRESOLVED] Whether the cause is the same as Business.** Both tables use the identical approved read path, show the identical all-four-combinations-404 pattern, and have identical RLS/grant/relation-identity evidence ruling out a database-side explanation. That symmetry is consistent with one shared cause affecting both tables identically, but this diagnosis has no independent way to confirm they share a single root cause rather than two coincidentally-identical ones. The cause itself — shared or not — is unresolved, for the same reason given in §5.

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

**[INDEPENDENTLY VERIFIED] Safe by construction, not merely by convention, under the inspected deployed function/helper definitions and expected authenticated owner resolution:** because step 3's predicate requires the *target* row's `business_id` to equal the *caller's own* resolved business, a cross-tenant call (Owner A resolving to Business A, requesting Product B, whose `business_id` is Business B) cannot match any row under the `catalog_product_read` / `current_actor_uid` / `resolve_owner_business` logic as deployed and inspected here — the query returns zero rows purely from the `WHERE` clause, before any "is this mine?" check would even be needed. This claim is bounded to that inspected code path; it does not extend to any other route, helper, or future code change not inspected by this diagnosis.

**[INFERRED FROM DOCUMENTED/RUNTIME SEMANTICS]** A PostgREST RPC call to a function that returns a scalar `NULL` is serialized as HTTP 200 with a JSON response body containing the literal value `null` — this is a "result" in the sense that the HTTP call succeeds and returns a body, but it is the documented safe non-disclosure envelope, not disclosed product data.

**[UNRESOLVED]** This diagnosis has no access to the literal HTTP response body the human/operator's script received or how its own classification logic decided to print `RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED` (that determination was deliberately not captured, per the prior gate's own record). This diagnosis cannot and does not claim to know what that classification was checking. It establishes only that the function's own logic makes a `null` response — consistent with that label — both possible and, given the ownership predicate, the *only* possible outcome for a genuine cross-tenant call; it does not retroactively prove what the script's specific check evaluated.

## 9. D5 — Protected-Data Risk Classification

**[INDEPENDENTLY VERIFIED]** No evidence available to this diagnosis proves that protected cross-tenant data was disclosed. Specifically:

- Business/Inventory cross-tenant reads returned HTTP 404 (a safe denial/non-disclosure class of outcome, whatever its precise cause), not row data.
- The Catalog RPC's own deployed logic, under the inspected code path described in §8, makes cross-tenant disclosure structurally impossible, independent of what the human script printed.

**No material security defect is identified by this diagnosis.** Every RLS policy, table grant, and function-execute grant inspected on `businesses`, `inventory_items`, and `catalog_product_read` is exactly as the schema migrations define it, with no drift from the Gate 2A-C2/H1 baseline. For Catalog, the prior gate's inconclusive result is fully explained by the function's own safe-by-design `NULL` response (§8) — not a defect. For Business/Inventory, the cause of the four HTTP 404s is **[UNRESOLVED]** (§5, §6): the request-shape/route-mismatch theory previously proposed here has been withdrawn as factually incorrect (Mission Control disclosed the actual script used a standard, correctly-shaped query-filter request), and RLS/grants/relation-identity are independently ruled out, but no alternative cause is yet evidenced. This is an open diagnostic question, not a confirmed access-control defect — nothing inspected shows RLS or grants behaving other than as designed — but it is also not yet a closed, understood cause.

This is stated as an absence of proof of disclosure and an absence of an identified defect — not as an affirmative proof that no disclosure could ever occur under any circumstance. Ambiguity is not converted into a PASS of F23-01 itself: F23-01 remains `BLOCKED — F23-01 LIVE VERIFICATION INCONCLUSIVE` per Mission Control's own classification in §1, unchanged by this diagnosis.

## 10. D6 — Retest Eligibility / Smallest Safe Method

**Split by control.** The prior version of this section recommended a Business/Inventory query-filter-vs-path-segment correction; Mission Control has confirmed the script already used the correct query-filter form, so that recommendation was wrong and is withdrawn, not merely narrowed.

1. **Catalog RPC — retest-eligible now.** Call `catalog_product_read` exactly as before, but explicitly parse and record whether the returned JSON body is the literal value `null` (safe non-disclosure — expected for both "not found" and "not yours") versus a populated object with product fields (would indicate disclosure and must STOP immediately). Do not classify a non-error HTTP response as ambiguous without first checking whether its body is `null`. This requires no fixture, schema, RLS, grant, function, or application change — only a response-parsing correction to the retest script.
2. **Business/Inventory reads — not yet retest-eligible.** No evidence-supported method correction is currently known: the request the prior probe used was already correctly shaped, and every database-side explanation this diagnosis can check (RLS, grants, relation identity) is independently ruled out. Re-running the identical, already-correct request without understanding why it returned 404 would not distinguish a genuine isolation result from a still-unexplained failure mode. **A further narrow diagnostic step is required before retest eligibility for these two controls** — for example, read-only inspection of the exact HTTP response headers / PostgREST error `code` the original probe received (if captured), or another Mission-Control-directed read-only check — before Mission Control authorizes a Business/Inventory retest.

No new production query, owner-session replay, mutation, repair, or fixture change is recommended or was performed to reach this conclusion.

## 11. Evidence Classification

**Independently verified facts (this session, read-only production catalog queries or exact deployed-definition inspection):**

- Canonical `main` SHA and drift assessment (§3).
- RLS-enabled state, policy counts, and full policy text for `businesses`/`inventory_items` (§5, §6).
- Table-level grants for `anon`/`authenticated`/`service_role` on both tables (§5, §6).
- Relation identity/kind — both tables exist as ordinary tables under their exact expected names, with no shadowing singular relation (§5, §6).
- Existence and correct ownership/business-linkage of all six F23-01 fixture rows (§7).
- Exact deployed definition of `catalog_product_read` and its supporting functions, byte-identical to migration source, and its `EXECUTE` grants (§8).
- The structural (WHERE-clause-level) impossibility, under the inspected deployed code path, of the Catalog RPC returning another tenant's product data (§8, §9).
- Production project identity and health (`ACTIVE_HEALTHY`) (§3).

**Human/operator-attested facts (carried forward from §1, or disclosed by Mission Control in review, not independently re-verified here):**

- The exact sequence and literal outcomes the human/operator's script recorded (authenticated identity UUIDs, the 404s, the "RPC RETURNED A RESULT" labels).
- That the script performed only the read sequence shown, with no repair or additional testing, and that no credential/session secret was exposed to Mission Control.
- The literal Business/Inventory request-filter form Mission Control disclosed in review (`?id=eq.$Id&select=id`), confirming a correctly-shaped query-filter request, not a path-segment request (§4 item 11, §5, §6).

**Inferred from documented/runtime semantics (not independently re-executed):**

- That a scalar-`NULL`-returning RPC serializes as HTTP 200 with a literal `null` body under PostgREST's documented RPC contract (§8).

**Unresolved facts:**

- **The actual cause of the four Business/Inventory HTTP 404 responses (§5, §6).** The previously proposed request-shape/path-segment theory is withdrawn as factually incorrect. RLS, grants, and relation identity are independently ruled out. No alternative cause is evidenced by anything available to this diagnosis.
- What the script's own "RPC RETURNED A RESULT — MANUAL REVIEW REQUIRED" classification logic actually checked, and what literal response body it received (§8).
- The exact PostgREST-exposed-schema configuration value (no positive read-only source was available beyond the absence of a role-level GUC override) (§5).

## 12. No-Mutation / No-Secret Confirmation

- **No mutation occurred.** Every query executed this diagnosis was a `SELECT` against `pg_catalog`/`information_schema`/`pg_policy`/`pg_proc`/application tables, or the CLI's own `projects list`. No `INSERT`, `UPDATE`, `DELETE`, `UPSERT`, `PATCH`, DDL, or mutation RPC was issued. No fixture was created, edited, or deleted. No RLS, grant, policy, role, function, trigger, schema, default-privilege, Auth, or application-code change was made.
- **No owner session was replayed.** Owner A and Owner B were not authenticated, impersonated, or simulated at any point; no `SET LOCAL ROLE authenticated` / JWT-claim-simulation technique was used in this diagnosis (unlike some prior gates in this mission, this diagnosis had no need for it, since every question was answerable from catalog metadata, exact-ID reads, and function-definition inspection alone).
- **No secret was requested, received, recorded, or exposed.** No password, access token, refresh token, session cookie, recovery link, or service-role key appears anywhere in this report, the evidence queries, or the accompanying PR.
- **F23-01 itself was not retested, and no downstream gate was advanced.**

## 13. Final Disposition

D3, D4, and D5 are fully diagnosed: the fixture set is confirmed intact, the Catalog cross-tenant contract is independently verified safe-by-design under the inspected code path, and no material security defect was identified anywhere inspected. D1 and D2, however, no longer have an evidence-grounded cause: the request-shape theory this report previously relied on was factually incorrect (Mission Control disclosed the probe script already used a correctly-shaped query-filter request), and with RLS, grants, and relation identity independently ruled out, the cause of the four Business/Inventory HTTP 404s is genuinely unresolved rather than merely unconfirmed. Per §10, Business/Inventory is therefore not yet retest-eligible — re-running the same, already-correct request would not resolve anything — while Catalog alone is retest-ready with the noted response-parsing correction.

Because the diagnosis is inconclusive on two of the six required diagnostic questions (D1, D2), the overall gate disposition is revised from the prior `PASS` to:

`BLOCKED — VERIFICATION-PATH DIAGNOSIS INCONCLUSIVE`
