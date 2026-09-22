# SB-P-1.12 — Stage 2 Delta, Derived Constraints, and Open Decisions

Source 18 §6 Stage 2, Parts 2–4 of the Mission Truth Pack. Baseline: `main@dc5fe69f14843002b46af6ef4116935cc36b6c68`, 2026-09-22.

---

# Part 3 — Delta

Comparison of each baseline source against current canonical repository history, migrations **as files** (never as claimed executed state), CI configuration and actual runs, and governance versions. No live provider or tenant-specific system was probed; where live state matters, that is stated explicitly and left `UNVERIFIED — ACCESS REQUIRED`.

## 1. Authority/permission schema — current repository state confirms the GPCV's own summary

**Classification: `NO PRODUCT EFFECT`** (confirms, does not change, the already-recorded Global Product Completion View state for Contract 21: `FOUNDATION EXISTS — FEATURE WORKFLOW MISSING`).

- `git grep` for `business_members|user_roles|roles|permissions|staff|employees|managers|business_users` table definitions across `supabase/migrations/**`: **no match.** No role, membership, or staff table exists at this baseline.
- `businesses.owner_id` is `NOT NULL ... UNIQUE` (`supabase/migrations/20260708210504_...sql`): a strict 1:1 owner-to-business model. There is no schema concept of a second authorized user on a business today.
- `src/routes/_authenticated/route.tsx` (the entire application's authorization gate): checks only `supabase.auth.getUser()` — session authentication. No role, membership or permission check exists anywhere in the route tree.
- Every RLS policy inspected (`transactions`, `businesses`, and by the same pattern the other owner-scoped tables) is written as `owner_id = auth.uid()`. No policy scoped to any other role exists.
- **Conclusion:** Contract 21's Core Authority Model (§4), Permission Dimensions (§5), Employee Self-service (§10), Runtime Revalidation (§17) and the two Founder-reserved runtime scenarios are **entirely unimplemented**, not partially implemented. This directly supports the FCTM's `IN SCOPE — NOT YET IMPLEMENTED` disposition on nearly all of Contract 21's rows.

## 2. Product & Price Master (Catalog) — substantial existing schema, confirms `IMPLEMENTED BUT INCOMPLETE`

**Classification: `NO PRODUCT EFFECT`** (confirms Contract 22's GPCV state; informs WS-C's starting point, changes no approved requirement).

- SB-P-1.11 delivered an extensive Catalog schema: `catalog_products`, `catalog_categories`, `business_tax_settings`, `catalog_selling_price_events`, `catalog_tax_events`, `catalog_reference_cost_events`, `catalog_product_link_events`, `catalog_audit_events`, `catalog_deletion_records`, `catalog_write_idempotency_keys`, `catalog_import_batches`, `catalog_import_rows`, `catalog_link_preview_tokens` — all with RLS enabled.
- Per `docs/implementation/SB-P-1.10-SB-P-1.11-post-completion-continuity.md` §16 (already-canonical evidence, re-cited not re-derived): the Catalog↔Inventory link is system-managed, one-to-one, enforced at both application layer (reuse guard) and database layer (`UNIQUE(business_id, inventory_item_id)`); Inventory remains the sole stock-truth ledger; Catalog and Inventory remain separate records. This is the exact preservation baseline Build Plan §7's "do not make Inventory sole owner of commercial identity" and "preserve deep-link continuity" obligations (`BP-§7-3`, `BP-§10.1-13`) must not disturb.
- Frontend: `src/routes/_authenticated/catalog.tsx`, `catalog.index.tsx`, `catalog.$productId.tsx`, `catalog.import.tsx` exist as a standalone top-level route group — confirms Build Plan §7's "product-surface drift" finding (Catalog currently presents as an independent product surface, not yet contextually demoted per `BP-§10.1-12`).

## 3. Residual `anon` grant — critical, security-relevant finding; broader and more nuanced than previously recorded

**Classification: `PRODUCT-AFFECTING`** (directly affects the permission/denial behavior Contract 21 §6–§7 and Founder Scenario A require; this finding is why WS-B exists, and confirms rather than expands its scope).

Direct file-level reading of `supabase/migrations/20260727000000_reconcile_default_grants.sql` shows the actual grant is **broader** than Build Plan §5.1's three-table summary:

> `GRANT ALL ON TABLE public.businesses, public.inventory_items, public.inventory_movement_idempotency_keys, public.inventory_movements, public.transaction_correction_events, public.transactions TO anon, authenticated, service_role;` plus `GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated, service_role;` plus a forward-compatible `ALTER DEFAULT PRIVILEGES` clause that automatically extends the same grant to any future `postgres`-created table/function.

**Partial remediation already exists as a file**, `supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql`:
- `REVOKE ALL` from `anon` on the three Inventory tables (`inventory_items`, `inventory_movements`, `inventory_movement_idempotency_keys`) and `REVOKE EXECUTE` on their six domain functions (two of which were also reachable via a blanket `PUBLIC` grant, separately revoked).
- Corrects the `postgres`-role default-privilege baseline so future `postgres`-created objects no longer auto-grant `anon`.
- **Explicitly out of that migration's scope, by its own text:** `businesses`, `transactions`, `transaction_correction_events` — "share the same root-cause migration and the same underlying issue, but are explicitly out of this gate's authorized scope and are not touched here."
- **Disclosed but not corrected, by its own text:** the `supabase_admin`-role default-privilege baseline (objects created via Lovable's dashboard/Management API rather than a SQL migration) still auto-grants broad `anon` access — correcting it would require a role-membership change, explicitly prohibited by that migration's own authorization scope.
- The migration's own comments state this hardening was authorized only against the **isolated test project** (`drravyyauixltoihzmwo`); production (`gysgzasfcjvtrgaigfyn`) execution required a separate, later, explicit authorization.

**Production execution status: `UNVERIFIED`, per the repository's own authoritative migration index** (`docs/migration/README.md`, row for file 21, re-read at this baseline, not re-derived): "No primary application, authorization or raw ledger-output record was located... [two secondary, documentation-only reports] are not primary production-ledger confirmation... Current status needs a separately authorized read-only ledger and grant verification." I did not re-probe production and record the same status.

**A materially relevant nuance, also file-evidenced, not assumed:** the hardening migration's own comment records that Gate 2A's prior direct production read-only inspection found RLS already made anonymous row access on the three Inventory tables "functionally default-deny" even before the grant revocation — because RLS was enabled with no policy scoped to `anon`/`PUBLIC` on any of them, and Postgres RLS denies by default when no policy matches the requesting role. I independently confirmed the same RLS-enablement fact for all six tables named in the original broad grant (`ENABLE ROW LEVEL SECURITY` present for each; no `CREATE POLICY ... TO anon` or unscoped/`PUBLIC` policy found anywhere in `supabase/migrations/**` for any of the six). **This is file-level evidence that the SQL-level `GRANT ALL` on `businesses`/`transactions`/`transaction_correction_events` is very likely inert for row-level anonymous read/write today, not that it is safe to leave in place** — table-level grants are a real privilege surface (a future RLS policy authoring mistake, or any `SECURITY DEFINER` function bypassing RLS, would immediately become exploitable by `anon`) and the migration authority index's own `UNVERIFIED` status stands. **This remains a critical unverified security risk carried into WS-B; no remediation is assumed, proposed or executed here.**

## 4. CI branch-protection requirement — verified live, resolves Stage 1's open question

**Classification: `ENGINEERING ONLY`.**

`gh api repos/SmartBusinessv1/smart-business/branches/main/protection`, read live at this baseline: `required_status_checks.contexts = ["Markdown Quality Gate"]` only. `Team LIPS Application Build Assurance` is **not** a required check. This resolves, by direct verification rather than inference, the question Stage 1's Intake Pack (§10) flagged as needing fresh verification. `BP-§10.1-9` ("CI baseline maintained and extended... surface, not decide, whether Fast Gate becomes required") is noted `IN SCOPE` in the FCTM on that basis — SB-P-1.12 must keep both green and may surface this gap to Mission Control, not decide it unilaterally.

## 5. Governance and OLE source versions

**Classification: `NO PRODUCT EFFECT`.** Every blob SHA recorded at the Stage 1 intake baseline (Source 18, the four primary contracts, Contract 7, Build Plan, GPCV, Institutional Memory guide) was re-verified byte-identical against `origin/main` at this Stage 2 baseline. The OLE promotions directory is unchanged (18 files, same names). No governance or OLE addition occurred between Stage 1 and Stage 2.

## 6. Topology facts — still last-recorded, still not freshly probed

**Classification: not applicable (no probe performed).** Production Supabase (`gysgzasfcjvtrgaigfyn`), isolated test Supabase (`drravyyauixltoihzmwo`), the production delivery repository (`SmartBusinessv1/starter-supab-shell`) and the production Lovable project remain `UNVERIFIED — ACCESS REQUIRED` for any live state claim. Nothing in this Stage 2 preparation touched any of them; the residual-`anon`-grant finding above is drawn entirely from repository files and the repository's own prior authoritative evidence records, not from a new live probe.

---

# Part 2 — Derived Constraints

Technical/product implications inferred from combining approved sources with current repository state. **None of these is approved Product Truth; each is flagged for Mission Control's Stage 3 trigger T6 assessment** (a derived constraint materially affecting merchant-facing, permission, denial, data-integrity or experience behavior).

| Constraint | Source and reasoning | Materiality |
|---|---|---|
| DC-1 | Because `businesses.owner_id` is `UNIQUE`, today's schema structurally prevents a second Owner-equivalent account per business. Introducing Manager/Employee membership (Contract 21 §4) requires a new membership model (e.g. a `business_members` table), not merely new RLS policies on the existing `owner_id` column. | Material — this is a schema-design implication of the authority model this mission must build, not a behavior change, but it materially shapes WS-A's implementation approach. Flagged for Mission Control awareness, not a T6 trigger by itself (no approved behavior changes). |
| DC-2 | The residual `anon` grant's current apparent inertness (Part 3 §3) depends entirely on no table having an `anon`/`PUBLIC`-scoped RLS policy and no `SECURITY DEFINER` function bypassing RLS for these tables. WS-A's own Manager/Employee RLS policy authoring must not introduce either, or the currently-inert grant becomes live risk. | Material — a design constraint on how WS-A/WS-B must be implemented; does not change approved Product Truth, but Mission Control should carry this into Stage 4 EIS-adjacent planning. |
| DC-3 | Contract 20 §16 and Contract 17 §13/§14 (this mission's slice of otherwise-later-mission contracts) cannot be fully verified end-to-end by this mission alone, because their surrounding features (onboarding flow, dashboard content) are `SB-P-1.19`/`SB-P-1.17`'s own builds. This mission's acceptance evidence for those rows will necessarily be scoped to the permission-setup/enforcement mechanics, not the full onboarding/dashboard experience. | Material — affects how the eventual Verification Checklist and Experience Verification Matrix must scope those specific rows. Not a change to approved Product Truth. |

---

# Part 4 — Open Decisions and Conflicts

## 1. Stage 3 trigger screen (Source 18 §3, T1–T8)

| Trigger | Screened | Finding |
|---|---|---|
| T1 — unresolved product question no approved source answers | Screened against all 208 FCTM rows | None found. Every row's disposition cites an approved source. |
| T2 — conflict among approved sources | Screened across Build Plan §9/§10.1/§10.6/§10.8, the four primary contracts, Contract 7, and the GPCV | None found. The Contract 20/17/22 split-mission assignment (Part 4 §2 below) is a reading of *consistent* sources, not a conflict between them. |
| T3 — new product decision, or an approved-unresolved Build Plan/Phase 1-guide decision this mission needs | Screened against Build Plan §15's nine unresolved items and the Phase 1 guide §17 (same list) | Two touch this mission tangentially (trial policy, employee-KYC) — both explicitly `ASSIGNED TO LATER MISSION` (`SB-P-1.19`) in the FCTM and non-critical-path for SB-P-1.12, per Build Plan §15's own framing ("do not block unrelated Build Now work"). Not triggered. |
| T4 — a Delta item classified `PRODUCT-AFFECTING` | One Delta item is `PRODUCT-AFFECTING` (Part 3 §3, the residual `anon` grant) | **Reviewed and found not to trigger T4 as a Founder-escalation item**, because it is not a new finding requiring a Founder decision — it is the exact, already-approved WS-B remediation target named in Build Plan §5.1/§10.1. A `PRODUCT-AFFECTING` classification records materiality for Mission Control's attention; it escalates to the Founder only when it proposes a change to approved scope, which this does not. |
| T5 — a Founder request | None received during Stage 2 | Not triggered. |
| T6 — a derived constraint Mission Control judges materially affects product behavior | Three derived constraints recorded (Part 2) | Flagged for Mission Control's own T6 judgment; not self-determined as triggered by Claude Code, consistent with Source 18 §3's Stage 3 ownership (Founder-led dialogue is conducted by the actor Mission Control designates, never self-declared by the Definition Actor). |
| T7 — a proposed omission, deferral, pull-forward, simplification or reclassification of an approved requirement | Screened against all 208 rows | None found. Every `ASSIGNED TO LATER MISSION` row cites Build Plan §9's own multi-mission listing plus the citing mission's own required-work-area language — not a proposed change. No `BUILD NOW` row was moved to `BUILD LATER`; no `REJECT` row was revived. |
| T8 — a Product Truth conflict or infeasibility found at any stage, including a security finding | The `anon`-grant finding is a security finding | Same analysis as T4: confirms rather than conflicts with approved scope; not triggered. |

**Result: Stage 3 gate is `NOT TRIGGERED`.** Per Source 18 §3: "A `NOT TRIGGERED` record is permitted only if the FCTM has no `UNRESOLVED FOUNDER DECISION` row on this mission's critical path and no `ESCALATED` row" — confirmed true (FCTM §G disposition summary: 0 of each). A formal Gate Record is not separately filed under the authorized Stage 2 paths (Source 18 §6 Stage 3 is a Mission Control-owned stage, prepared only when triggered or when Mission Control separately instructs its preparation); this screening result is Claude Code's Stage 2 input to that determination, not the Gate Record itself.

## 2. Assignment-source reasoning for the Contract 20/17/22 split (not a T1–T8 trigger; recorded for transparency)

Build Plan §9's table lists Contract 20 against both `SB-P-1.12` and `SB-P-1.19`, Contract 17 against both `SB-P-1.12` and `SB-P-1.17`, and Contract 22 against `SB-P-1.12`, `SB-P-1.13` and `SB-P-1.14`. Unlike Contract 8's split (Build Plan §12, which names the split explicitly section-by-section), no Build Plan section spells out the Contract 20/17/22 split at that granularity. The FCTM's per-section assignment (Section C/D/B of `03-stage2-populated-fctm.md`) was derived by comparing each contract's own section content against Build Plan §10.1's required-work-areas list (SB-P-1.12) versus §10.6 (`SB-P-1.17`), §10.8 (`SB-P-1.19`) and §10.2/§10.3/§10.4 (`SB-P-1.13`/`1.14`/`1.15`)'s own required-work-areas lists, which is itself an approved source under Source 18 §3.2 item 4 ("Build Plan Section 9 to 12"). This is offered as a reasoned, source-grounded reading — not a Founder decision — and Mission Control should confirm it no later than Stage 5.

## 3. Two ambiguous-assignment flags, routed to Mission Control (not the Founder)

Two Contract 22 sections (§12 Notification Foundation, §16 Location Foundation — FCTM rows `22-§12`, `22-§16`) have no explicit Build Plan §9–12 naming source pinning them to a specific later mission, unlike every other split-assignment row. Per Source 18 §3.2 item 4, `ASSIGNED TO LATER MISSION` is unavailable without a naming source, so both stay `IN SCOPE` by the framework's own fail-closed default. This is **not** a T1–T8 trigger (no approved requirement is being omitted, deferred or reclassified — the opposite: the fail-closed default keeps them in scope) but is recorded here as an open item: Mission Control may confirm they belong with SB-P-1.12, or may identify a naming source this reading missed.

## 4. No `UNRESOLVED FOUNDER DECISION` or `ESCALATED` row

Confirmed by the FCTM's own disposition summary (`03-stage2-populated-fctm.md` §G): 0 of each, across all 208 rows.
