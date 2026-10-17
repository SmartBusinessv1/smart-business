# SB-P-1.16 — Stage 7 SR-02 Security, RLS, Grants and Authority Specialist Review

**Assignment:** SR-02 — Security, RLS, Grants and Authority specialist review, under MC-183  
**Authority:** Source 18 v1.2 Stage 7 and §4.8; MC-183  
**Reviewer:** Claude subagent (general-purpose agent), model family Claude (Anthropic), fresh context, spawned and briefed by Claude Code (the Stage 2–4, 6 and 7 author) on 2026-10-17  
**Independence:** NOT INDEPENDENT — same provider and model family as the Stage 7 author, and briefed by that author. Separately attributable only. No prior SB-P-1.16 authorship in this context.  
**Baseline:** `main@abd5e0d547aabc315513e8901edecfd327edaaf9`  
**Status:** DRAFT SPECIALIST REPORT — READ-ONLY — FINDINGS ARE INPUTS, NOT AUTHORITY  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Reviewer provenance and limits

- This review was produced by a Claude subagent with a fresh context, spawned and briefed by Claude Code, the author of the Stage 7 draft under review. It shares provider, model family and briefing with that author. It is separately attributable, not independent assurance.
- Scope is security, RLS, grants and authority only: Stage 7 draft §20.5, §20.4.8 (provider-account binding and the proposed `EIS-AUT-01` principal route, G-W1), §20.4.11 (direct-mutation closure), the SEC tier in §20.7.5, and Stage 6 findings SB16-B6-07, -08, -09, -17, -18, -19 and -24. Balance algebra, lock mechanics, migration sequencing, adapter shape beyond authentication, and retention belong to SR-01, SR-03, SR-04, SR-05 and SR-06.
- The review is documentary. No database, Supabase project, provider, CLI or network resource was accessed. No SQL was executed. Nothing was built or tested.
- Every statement about privileges and policies is a reading of repository migration text in order. It is not a statement about live state. Live grants, RLS policies, default ACLs, role memberships and function ownership on the test and production projects remain `UNVERIFIED — ACCESS REQUIRED`. Production may differ from replayed repository text (for example through objects created outside migrations).
- Not verifiable here: whether the Supabase data API can issue every privilege type held by `anon` or `authenticated`; whether `public.transactions` is created once or twice on a fresh replay (two migrations contain the same `CREATE TABLE`; see SR02-02 uncertainty; sequencing is SR-04's domain); the SB-P-1.12 owner's interpretation of `EIS-AUT-01` (G-W1).
- Findings are inputs to Mission Control. They do not change Product Truth, FCTM dispositions, Founder decisions, open questions OQ-01 to OQ-05 or G-W1.

## 2. Evidence inspected

| Path | Blob |
|---|---|
| `communication/missions/SB-P-1.16/claude-code/18-stage7-blueprint-sections-20-21-draft.md` | `1064ab18` |
| `communication/missions/SB-P-1.16/claude-code/19-stage7-engineering-review-report.md` | `a3b644f0` |
| `communication/missions/SB-P-1.16/claude-code/17-stage6-builder-review.md` | `c9a93566` |
| `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `5ff7742f` |
| `communication/missions/SB-P-1.16/claude-code/09-stage3-founder-product-decision-record-draft.md` | `30b19a80` |
| `docs/phase-1-mission-blueprint/smart-business-features/14_Smart_Credit_Awareness.md` | `16914a83` |
| `docs/phase-1-mission-blueprint/smart-business-features/15_Payment_Verification_and_Bank_Reconciliation.md` | `632f3402` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f750` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` | `899a0fe1` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.15-EIS.md` | `75dcf385` |
| `supabase/migrations/20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql` | `b79ad8e7` |
| `supabase/migrations/20260719140000_f24b4d69-127e-4547-9fff-8ed9f31cc8fe.sql` | `3cbdcde6` |
| `supabase/migrations/20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql` | `62f250f4` |
| `supabase/migrations/20260720142248_97de5be2-ef9f-4283-9318-9eb9f9a6cca1.sql` | `56e097c1` |
| `supabase/migrations/20260727000000_reconcile_default_grants.sql` | `4e2d3fa1` |
| `supabase/migrations/20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | `f875f923` |
| `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` | `029443cf` |
| `supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql` | `027c482a` |
| `supabase/verification/sb-p-1-11-impl-1-stage1-privilege-check.sql` | `cd09cfe5` |
| `src/integrations/supabase/client.server.ts` | `f63eeb84` |
| `src/integrations/supabase/auth-middleware.ts` | `4ee311cf` |
| `src/integrations/supabase/transactions.ts` | `fe12c702` |
| `src/server-functions/catalog-import.ts` | `b7a70314` |
| `src/server-functions/parser-lease.ts` | `3fbea897` |
| `src/server.ts` | `20500c7f` |
| `communication/missions/SB-P-1.15/specialists/01-stage7-security-rls-grants-isolation-review.md` (precedent SEC15-S7-01, -02) | `43b3b7a7` |

## 3. Method

1. Read Stage 7 draft §20.3 (lines 34–42), §20.4.8 (lines 135–154), §20.4.11 (lines 172–176), §20.5 (lines 178–191), §20.6 (lines 203–230), §20.7.5 (lines 269–279), §20.7.8, §21.1 to §21.6, and the §20.8 register rows for C-AUTH and C-PRIV.
2. Replayed, by reading in timestamp order, every migration that touches `public.transactions` or `public.transaction_correction_events` (found with a repository search for both names), plus the default-privilege statements in the July reconciliation migration and the August anon-hardening migration. From this I derived, per role, which privileges and policies the repository text leaves on those two tables (SR02-02).
3. Read `client.server.ts`, `auth-middleware.ts`, `server.ts` and both server-function modules to establish how authority and the service-role client are used today, and whether any unauthenticated inbound route exists (none does).
4. Read the locked SB-P-1.12 EIS entries `EIS-ID-03`, `EIS-ID-05`, `EIS-AUT-01`, `EIS-KER-02` to `-09`, `EIS-ISO-01` to `-04`, `EIS-AUD-02`, `EIS-CNF-01` to `-06`, Section 8.1 (principal table) and Section 9.3 (grant target state). Read the SB-P-1.15 EIS entries that already consume `EIS-AUT-01` and `EIS-ISO-04` (`EIS15-SEC-01`, `-02`, `-05`, `EIS15-PRIV-01`, `EIS15-RUL-01`, `-02`) and SB-P-1.14 `EIS14-LDG-06`, `EIS14-CMD-02`, `EIS14-CMD-03`.
5. Compared the §20.5 capability list word by word with `16:FPDR-7` §§1–3, `16:FPDR-4` and `16:FPDR-8` §2, and with Contract 14 §14 and Contract 15 §17 and §22.
6. Screened both Stage 7 files for material that should not be published (project references, keys, secrets, URLs, exploit steps). None was found; the only environment names present are the three `SUPABASE_TEST_*` variable names, which are not secrets.
7. Verified every cited FCTM row ID against the canonical FCTM by exact row-prefix search.

## 4. Findings

### SR02-01 — The closure and revoke rules are worded as "DML" and miss privileges that RLS does not govern

- **Severity:** HIGH
- **Evidence:** `supabase/migrations/20260727000000_reconcile_default_grants.sql` (`4e2d3fa1`) lines 35–42 grant `ALL` on `transactions` and `transaction_correction_events` to `anon`, `authenticated` and `service_role`. A table-level `ALL` includes privileges that row-level security does not filter (notably `TRUNCATE`, and also `REFERENCES` and `TRIGGER`). The August hardening migration (`027c482a`) lines 37–41 and 129–136 state that `businesses`, `transactions` and `transaction_correction_events` were deliberately left untouched, and its lines 123–127 change only the `postgres` creator default for `anon`. No later migration in the repository revokes anything on these two tables. Draft §20.4.11 line 175 defines the closure as "no direct client `INSERT`, `UPDATE` or `DELETE`"; §20.5 line 186 says "Revoke `anon`, `PUBLIC` and direct `authenticated` DML". SB-P-1.14 `EIS14-CMD-03` (`899a0fe1` line 147) and SB-P-1.12 Section 9.3 (`c444f750` line 216: "no direct DML on protected tables") use the same narrower wording. By contrast, SB-P-1.15 `EIS15-SEC-01` (`75dcf385` line 122) already requires `REVOKE ALL` from `PUBLIC` and `anon` at object birth.
- **Affected FCTM IDs:** `14-§22-11`, `14-§17-1`, `14-§20-10`, `14-§19-1`, `14-§19-3`, `15-§22-3`, `15-§22-4`, `15-§13-2`
- **Affected Stage 7 draft sections:** §20.4.11, §20.5 (RLS and database privileges row), §20.6 (SB16-B6-07, -08), §20.7.5 SEC tier
- **Related Stage 6 findings:** SB16-B6-07, SB16-B6-08
- **Engineering implication:** A closure that only removes `INSERT`, `UPDATE` and `DELETE` could be declared complete while a role still holds a table privilege that acts on every business's rows at once and is not subject to RLS. The precondition that protects all SB-P-1.16 writes would then pass on a definition that leaves the Ledger's audit history exposed to whole-table loss. Whether any client-reachable path can exercise those privileges today is not established from repository text (see Uncertainty), but the precondition must not depend on that.
- **Required correction or evidence obligation:** (1) Restate the §20.4.11 precondition and the §20.5 privilege row as "`PUBLIC` and `anon` hold no privilege of any type on protected tables, views, sequences and functions; `authenticated` holds only the separately approved `SELECT` (through kernel RLS) and `EXECUTE` grants; every other privilege type is revoked", and say this applies to the existing `transactions`, `transaction_correction_events` and `businesses` tables, not only to new objects. (2) Consume `EIS15-SEC-01` (atomic birth-safe creation: `REVOKE ALL`, RLS and policies before any grant, no usable window) and `EIS15-SEC-02` (effective-access proof, not statements) instead of restating a narrower rule. (3) Make the SEC tier check every privilege type per role, including the non-DML types, sequences and function overloads. (4) Record for the SB-P-1.14 owner that the `EIS14-CMD-03` verification ("inspects actual table privileges") must include the non-DML types and `anon`; this is a clarification of evidence, not a new requirement.
- **Uncertainty:** Live grants may already differ from repository text. The Supabase data API may not expose every privilege type, so present-day reachability may be low; this review does not test or describe reachability. The SB-P-1.12 owner may read "no direct DML" in Section 9.3 as already covering all privilege types together with `EIS-ISO-03`.
- **Trigger screen:** none. The correction tightens an engineering definition; it changes no row, disposition or product behaviour.

### SR02-02 — The current-state description of grants and write paths is imprecise; repository text supports a more exact statement

- **Severity:** MEDIUM
- **Evidence:** Draft §20.3 lines 38–40 ("Broad default grants to `anon` and `authenticated`"; one service-role client "used by catalog import"). Reading the migrations in order gives the following end state for the two Ledger tables, from repository text only:
  - `transactions`, `anon`: table privilege `ALL` (`4e2d3fa1` lines 35–42). RLS is enabled (`3cbdcde6` line 36) and every policy targets `authenticated` only, so `anon` reaches no rows through `SELECT`, `INSERT`, `UPDATE` or `DELETE`. The non-RLS privileges in SR02-01 remain.
  - `transactions`, `authenticated`: `ALL`. `SELECT` and `INSERT` are limited to the Owner's own business, and `INSERT` requires `creator_id` to equal the caller (`3cbdcde6` lines 38–51); other columns, including `id`, `created_at` and `payment_method = 'credit'`, are caller-chosen within the `CHECK` constraints. `UPDATE` is allowed on any own-business row and any column, with no correction event and no column restriction (`62f250f4` lines 5–14). There is no `DELETE` policy, so `DELETE` affects no rows. `correct_transaction` is `SECURITY INVOKER` (`56e097c1` line 28), so it grants nothing beyond direct `UPDATE` plus direct event `INSERT`.
  - `transaction_correction_events`, `anon`: `ALL`; no policy for `anon`, so no rows. Non-RLS privileges remain.
  - `transaction_correction_events`, `authenticated`: `ALL`. `SELECT` is limited to own business (`62f250f4` lines 48–54). `INSERT` requires only `edited_by` equal to the caller and an own `business_id` (`56e097c1` lines 3–10): `original_values`, `updated_values`, `notification_status` and `notification_sent_at` are caller-chosen, and the policy does not require `transaction_id` to belong to the same business. There is no `UPDATE` or `DELETE` policy, so those affect no rows.
  - Functions: `EXECUTE` on every `public` function for `anon` and `authenticated` (`4e2d3fa1` line 44); `correct_transaction` rejects a call without an authenticated subject.
  - Creator defaults: `postgres` defaults still grant `ALL` on new tables and `EXECUTE` on new functions to `authenticated` (`4e2d3fa1` lines 51–55); the `anon` part was revoked for `postgres` only (`027c482a` lines 123–127); a `supabase_admin` default baseline is a disclosed residual (`027c482a` lines 43–53).
  - Service role: used by both `src/server-functions/catalog-import.ts` (`b7a70314`, lines 282 and 494) and `src/server-functions/parser-lease.ts` (`3fbea897`, header lines 16–23), not only catalog import.
- **Affected FCTM IDs:** `14-§22-11`, `14-§17-1`, `14-§20-10`, `15-§13-2`, `14-§10-2`, `14-§22-10`
- **Affected Stage 7 draft sections:** §20.3, §20.4.11, §20.5, §20.6 (SB16-B6-07, -19, -24)
- **Related Stage 6 findings:** SB16-B6-07, SB16-B6-08, SB16-B6-19, SB16-B6-24
- **Engineering implication:** Three consequences matter for SB-P-1.16. First, the closure must also remove caller control over identity and timing columns (`creator_id`, `created_at`, `id`), not only the audit bypass. Second, a client-settable `notification_status` already exists on correction events, so a "sent"-like marker can be written today without any channel; SB16-B6-19's "no `sent` state" control must cover this legacy column, not only new draft tables. Third, the same imprecision ("broad default grants to `anon`") was corrected for SB-P-1.15 in SEC15-S7-01; repeating it here weakens the evidence chain.
- **Required correction or evidence obligation:** Replace the §20.3 "Grants" and "Service role" bullets with a per-role statement equivalent to the list above, labelled "repository text; live state unverified". Add to the §20.4.11 precondition that, after closure, no client can set `creator_id`, `created_at`, `id`, `notification_status` or `notification_sent_at` on the Ledger family, and that the legacy notification fields are either retired or written only by an approved, channel-bound path (`16:FPDR-8` §3).
- **Uncertainty:** `transactions` is created by two migrations with the same table text (`b79ad8e7` and `3cbdcde6`); which one is applied on a fresh replay is a sequencing question for SR-04. The privilege reading above holds either way, because both grant only `SELECT, INSERT` and the July migration later grants `ALL`.
- **Trigger screen:** none.

### SR02-03 — "All keys composite with `business_id`" has an unstated prerequisite on the Ledger table

- **Severity:** MEDIUM
- **Evidence:** Draft §20.5 line 190 ("All keys composite with `business_id`"). `transactions` has only a single-column primary key and no `(business_id, id)` unique key (`3cbdcde6` lines 1–20). `transaction_correction_events.transaction_id` references `transactions(id)` alone (`62f250f4` line 25), and its insert policy does not tie `transaction_id` to the inserted `business_id` (`56e097c1` lines 3–10). Foreign-key checks are not filtered by RLS. The inventory precedent added a composite unique key before composite references (`f875f923` header lines 25–30). SB-P-1.12 `EIS-ID-05` (`c444f750` line 149) requires composite `(business_id, id)` keys for integration references.
- **Affected FCTM IDs:** `15-§22-3`, `15-§25-11`, `14-§22-10`, `15-§6-1`, `14-§21-6`
- **Affected Stage 7 draft sections:** §20.4.1, §20.4.2, §20.4.9, §20.5 (Tenant isolation row), §20.7.2 (M16-1, M16-3)
- **Related Stage 6 findings:** SB16-B6-07, SB16-B6-24
- **Engineering implication:** SB-P-1.16 adds repayment-to-target links, allocations, evidence-to-target links and participant references. If any of them references `transactions(id)` alone, a row in Business A can point at a Ledger row in Business B, and isolation then depends entirely on every command's code path. The legacy correction-event table already shows this pattern.
- **Required correction or evidence obligation:** State in §20.5 that every SB-P-1.16 reference to a Ledger row, participant, evidence item or binding is a composite `(business_id, id)` foreign key, and that this needs a composite unique key on `transactions`, added in the SB-P-1.14 M14-1 / `DTX` path (owner: SB-P-1.14; SR-04 to confirm sequencing). Add to the FA or SEC tier a constraint-level cross-business test: a link, allocation or evidence row that names another business's target is rejected by the schema, not only by a command check. Record the legacy `transaction_correction_events.transaction_id` reference for the `EIS14-CMD-03` closure.
- **Uncertainty:** SB-P-1.14 M14-1 may already plan the composite key; I found no statement of it in `EIS14-LDG-*` or `EIS14-CMD-*`, but did not read the full SB-P-1.14 migration section.
- **Trigger screen:** none.

### SR02-04 — G-W1: reading of `EIS-AUT-01` for provider events, and a second gap in the execution path

- **Severity:** HIGH
- **Evidence:** Draft §20.4.8 line 153; §21.2 G-W1 row. SB-P-1.12 `EIS-AUT-01` (`c444f750` line 151): rules "reference the grantor membership, capability, target and limits"; "Runs are server-only trusted invocations"; the principal is "never from caller-supplied actor data and never from `service_role` itself"; each run re-checks "exact target, action and limits". `EIS-KER-02` (line 191) allows exactly four principal types. `EIS-KER-06` (line 195) lists `integration` as a channel. `EIS-CNF-04` (line 265) applies idempotency to "every command and external event intake". `EIS-CNF-06` (line 267) says "integration extension points consume the kernel". Section 8.1 (line 180): kernel helpers are "callable by `authenticated` only". `EIS-ISO-04` (line 228): the server function "calls the kernel through the caller's client". SB-P-1.15 `EIS15-RUL-01`, `-02` (`75dcf385` lines 275–276) and `EIS15-PRIV-01` (line 206) already implement `EIS-AUT-01` as a stored, versioned rule with `trigger_conditions`, `target` and `trigger_ref`, whose run "resolves the verified principal (human or rule grantor) … before using elevated credentials".
- **Affected FCTM IDs:** `15-§5-1`, `15-§6-1`, `15-§22-1`, `15-§25-2`, `22-§17-3`, `BP-§10.5-W5`
- **Affected Stage 7 draft sections:** §20.4.8, §20.5 (Server-derived authority, Service-role use rows), §21.1 EQ-05, §21.2 G-W1, §21.3
- **Related Stage 6 findings:** SB16-B6-09, SB16-B6-24
- **Engineering implication:** My reading, for Mission Control and the SB-P-1.12 owner (not a decision):
  - **Principal (leaning admissible).** SB-P-1.12 itself anticipates external event intake (`EIS-CNF-04`) and integration extension points that consume the kernel (`EIS-CNF-06`), and SB-P-1.15 already reads `EIS-AUT-01` as admitting rule runs started by a trigger. A provider event can therefore plausibly run as an automation principal if: the inbound request is treated only as a trigger and never as actor data; the binding is authenticated by signature before any rule is selected; the rule's target is the provider-account binding (an object), with the action and limits fixed in the rule; and ingestion and any automatic linking of a strong unique match are separate actions with separate grantor capabilities.
  - **Main uncertainty in that reading.** `EIS-AUT-01` requires an "exact target". A provider event concerns payments not known when the rule is created. If the SB-P-1.12 owner reads "exact target" as the individual Ledger or evidence object rather than the binding, automatic linking cannot run under `EIS-AUT-01` without amendment, although evidence ingestion into a binding might still fit. "Server-only trusted invocation" can also be read as server-initiated only (scheduler), which would exclude an externally triggered run.
  - **Second gap the draft does not name.** Even with an admissible principal, an inbound webhook carries no user JWT, so `EIS-ISO-04`'s "calls the kernel through the caller's client" cannot be met, and the kernel helpers are "callable by `authenticated` only". SB-P-1.15 resolved the same problem for scheduled runs by resolving the grantor's authority before using elevated credentials (`EIS15-PRIV-01`). SB-P-1.16 should consume that interpretation explicitly rather than leave it implicit.
  - **Grantor loss.** If the Owner who enabled the rule loses authority (transfer, removal), `EIS15-RUL-02` pauses the rule; provider events will keep arriving. Their handling (fail narrowly, keep the raw event for later governed re-ingestion, never authoritative) must be stated; retention of those events is SR-06's question.
- **Required correction or evidence obligation:** In §20.4.8 and §21.2: (1) record both dimensions of G-W1 (principal admissibility and the no-JWT execution path); (2) propose reuse of the SB-P-1.15 standing-rule tables and `EIS15-PRIV-01` rather than a parallel "integration rule"; (3) define the rule's target as the binding and split "ingest evidence" from "auto-link a strong unique match" as distinct rule actions and capabilities; (4) state the behaviour when the grantor's authority ends; (5) ask the SB-P-1.12 owner specifically about "exact target" and "server-only trusted invocation". Keep G-W1 open until that interpretation is recorded.
- **Uncertainty:** Moderate. The reading depends on SB-P-1.12 owner interpretation, and on whether SB-P-1.15's reading of `EIS-AUT-01` was itself reviewed by that owner. I did not read the SB-P-1.15 Stage 7 security review's disposition of `EIS15-PRIV-01` in full.
- **Trigger screen:** none for T3, T7 or T8. If the SB-P-1.12 owner rules that `EIS-AUT-01` cannot admit provider events, the consequence is an upstream engineering-specification amendment (governance), consistent with the draft's treatment. It would become T8 only if no compliant principal could exist at all, which this review does not find.

### SR02-05 — The ingestion path must be server-boundary-only, and per-binding secrets need a defined home

- **Severity:** HIGH
- **Evidence:** Draft §20.5 lines 188–189 (signature verification "with the binding's secret"; "Endpoint secrets in server environment or secret storage"). `src/server.ts` (`20500c7f`) line 47 exposes only a `fetch` handler; there is no webhook route today. `src/integrations/supabase/auth-middleware.ts` (`4ee311cf`) lines 34–105 accept only a Bearer user JWT, so a provider request cannot use it. Repository-text creator defaults still grant `EXECUTE` on new `public` functions to `authenticated` (`4e2d3fa1` lines 54–55; not reversed for `authenticated` by `027c482a`). SB-P-1.12 `EIS-AUD-02` (`c444f750` line 276) defines "server-boundary-only" command families with no `EXECUTE` for `authenticated`. `client.server.ts` (`f63eeb84`) lines 63–66 warn that a top-level import in route files ships to the client bundle.
- **Affected FCTM IDs:** `15-§22-1`, `15-§22-2`, `15-§22-6`, `15-§24-6`, `15-§5-1`, `22-§17-3`
- **Affected Stage 7 draft sections:** §20.4.8, §20.5 (Provider webhook validation, Service-role use rows), §20.7.2 (M16-3), §20.7.5 SEC tier
- **Related Stage 6 findings:** SB16-B6-08, SB16-B6-09, SB16-B6-24
- **Engineering implication:** Signature verification will run in the application server, not in the database. If the database function that records provider evidence is executable by `authenticated` (the repository default for new functions), any signed-in user of any business could call it directly and skip the signature check, producing records labelled `provider_authenticated`. Separately, merchants' per-binding webhook secrets and API credentials cannot live in server environment variables (one per merchant); they need governed storage that no client role can read back.
- **Required correction or evidence obligation:** Add to §20.5: (1) the evidence-ingestion, binding-secret-read and provider-status-update functions are server-boundary-only under `EIS-AUD-02`: no `EXECUTE` for `PUBLIC`, `anon` or `authenticated`; reachable only from the authenticated server route after signature verification; (2) the `source_authentication = provider_authenticated` value can be written only by that path, never by any client-executable command; (3) per-binding secrets and credentials are stored encrypted (`15-§22-2`), outside any client-exposed schema or with no client grant, are write-only from the Owner's setup flow, are never returned to any client after creation, and rotation and revocation are governed commands under `recon.manage_provider_binding`; (4) the webhook handler reads the raw body before parsing, compares signatures in constant time, and loads the service-role client only inside the handler. Add SEC tests: direct authenticated RPC to each ingestion function is denied; no client path returns a stored secret; a client-bundle check finds no service-role or provider secret material.
- **Uncertainty:** The EIS may choose a non-`public` schema or a dedicated `NOLOGIN` executor role instead of service role for ingestion; either satisfies this finding if `authenticated` has no `EXECUTE`. Secret storage technology is provider-dependent and is SR-05's adapter question; only the access rule is in scope here.
- **Trigger screen:** none.

### SR02-06 — Storing failed-verification events as `unauthenticated` evidence conflicts with "business from the binding only"

- **Severity:** MEDIUM
- **Evidence:** Draft §20.5 line 188 ("business from the binding only; failures stored as `unauthenticated` and never authoritative"); §20.4.7 line 126 (`unauthenticated` as a source-authentication value of an evidence item); §20.4.8 line 151 ("The business for an inbound event is resolved only from the verified binding"). Contract 15 §22 (`632f3402` lines 312–317).
- **Affected FCTM IDs:** `15-§22-6`, `15-§24-6`, `15-§22-1`, `15-§22-3`, `15-§9-1`
- **Affected Stage 7 draft sections:** §20.4.7, §20.4.8, §20.5 (Provider webhook validation row)
- **Related Stage 6 findings:** SB16-B6-09, SB16-B6-12
- **Engineering implication:** A request that fails verification has no verified binding, so it has no verified business. If it is still stored as an evidence item in that business's evidence store, any party who knows or guesses a binding endpoint can place content in a merchant's evidence records and review queue, consume storage, and create review noise. The draft's two statements cannot both hold for failed requests.
- **Required correction or evidence obligation:** State that a failed-verification request is never an evidence item: it is recorded, if at all, in a bounded security log keyed by the claimed binding, holding minimal fields, with volume limits, never visible in the merchant's evidence list or review queue, never a matching input, and never counted in any coverage or verification measure. The `unauthenticated` value in §20.4.7 then applies only to items that reached a tenant by another governed path, if any. Add a SEC test: a forged or stale request creates no evidence row, no review item and no link.
- **Uncertainty:** Mission Control may want failed attempts visible to the Owner as a security signal; that is compatible if it is a separate security notice, not evidence. Retention of the log is SR-06's question.
- **Trigger screen:** none.

### SR02-07 — The capability list matches `16:FPDR-7` §§1–2, but Owner-reserved wording is weaker than the decision and several designed actions have no capability

- **Severity:** MEDIUM
- **Evidence:** Draft §20.5 lines 182–183. `16:FPDR-7` (`30b19a80`, Section 2.7): §1 lists five separately delegable capabilities; §2 a separate match-resolution capability; §3 says threshold configuration, overrides, grant or refusal of additional credit, grace "and other consequential credit or financial-policy approvals remain with the Owner". `16:FPDR-8` §2 allows approval by "another human only where … valid, scoped delegation expressly authorize[s]". SB-P-1.12 `EIS-KER-04` (`c444f750` line 193): grants are created only by an actor holding "the capability and the right to delegate it". Draft actions without a named capability: set or change due date (§20.4.3), governed correction of credit facts (§20.4.11), the allocation command (§20.4.2), submitting merchant evidence and linking it "after human review" (§20.4.7), the Owner correction after a reversal flag (§20.4.10), exports of balances (§20.4.4 readers), and the automation rule actions in SR02-04.
- **Affected FCTM IDs:** `14-§14-1`, `14-§14-2`, `15-§17-1`, `15-§17-2`, `14-§22-5`, `14-§22-6`, `14-§19-2`, `15-§22-4`
- **Affected Stage 7 draft sections:** §20.5 (Owner-reserved decisions, Scoped Manager delegation rows), §20.7.8 Scenario A and B permission checks
- **Related Stage 6 findings:** SB16-B6-17
- **Engineering implication:** The match is exact for `16:FPDR-7` §1 (`credit.view_assigned_balances`, `credit.propose_repayment`, `credit.record_repayment`, `recon.review_assigned_evidence`, `recon.view_assigned_cases`) and §2 (`recon.resolve_assigned_match`, separate). However, "never delegable through role defaults" leaves open delegation by explicit grant, which `16:FPDR-7` §3 does not allow. Unnamed actions will be assigned a capability at EIS time by default reasoning, which is where Manager or Employee access can expand without anyone deciding it (`16:FPDR-4`, `16:FPDR-7` §5).
- **Required correction or evidence obligation:** (1) Reword the Owner-reserved row to "Owner-only; not delegable by role default or by explicit grant; registered as non-delegable in the capability registry so that `EIS-KER-04` cannot create a grant". (2) Note that making `credit.approve_communication` Owner-only is consistent with `16:FPDR-8` §2 only because no Product Truth currently authorizes delegation; record it as the current state, not a permanent narrowing. (3) Classify each unnamed action above as Owner-reserved, one of the six `16:FPDR-7` capabilities (for example, the allocation command under `credit.record_repayment`; linking merchant evidence after review under `recon.resolve_assigned_match`), or Owner-only pending a decision, with no new delegable capability invented. (4) Record that "record authorized repayments" in `16:FPDR-7` §1 may mean either "permitted to record" or "record repayments the Owner authorized"; the EIS should not resolve this silently.
- **Uncertainty:** Mission Control may consider the unnamed actions covered implicitly by `EIS14-LDG-06` Ledger capabilities; if so, the draft should say which ones and confirm Manager defaults do not include them.
- **Trigger screen:** none. Classifying unnamed actions as Owner-only keeps access unchanged. If Mission Control wanted any of them delegable beyond the six `16:FPDR-7` capabilities, that would be a T3 product question.

### SR02-08 — Employee boundary: "explicitly allowed" is not the same as the existing create capability, and command responses can leak balances

- **Severity:** MEDIUM
- **Evidence:** Draft §20.5 line 184 (Employee "May record a permitted credit sale through the existing create capability (`EIS14-LDG-06`)"). Contract 14 §14 (`16914a83` lines 212–214): Employee "May record permitted credit transactions or repayments if explicitly allowed". Contract 15 §17 (`632f3402` lines 248–250): Employee "May record permitted operational payment information". `EIS14-LDG-06` (`899a0fe1` line 136): Ledger create has Employee defaults. Draft §20.6 line 224 (SB16-B6-20: "Credit warning in the sale-entry flow"); §20.4.2 line 88 (allocation must not exceed a target's outstanding amount); §20.4.1 line 79 (ambiguous names return a clarification); §21.2 OQ-03 row (interim: no Employee visibility; Owner-routed awareness).
- **Affected FCTM IDs:** `14-§14-3`, `14-§22-7`, `14-§12-6`, `14-§19-2`, `15-§17-3`, `14-§23-3`, `14-§9-1`
- **Affected Stage 7 draft sections:** §20.4.1, §20.4.2, §20.5 (Employee row), §20.6 (SB16-B6-18, -20), §20.7.8 Scenario A, §21.2 OQ-03
- **Related Stage 6 findings:** SB16-B6-18, SB16-B6-17
- **Engineering implication:** If credit-method recording rides on the general Ledger create default, every Employee with create can record credit without the explicit allowance Contract 14 requires. The OQ-03 interim control is consistent with `16:FPDR-4` ("Manager and Employee access must not expand") only if no Employee-facing response reveals balance facts. Three response paths could: the sale-entry warning if shown to whoever records the sale; allocation-limit errors that state a target's outstanding amount; and identity clarifications if candidate lists carry balances. The same applies to a Manager holding `credit.record_repayment` without `credit.view_assigned_balances` (`16:FPDR-7` §1: capabilities "remain independently controlled").
- **Required correction or evidence obligation:** (1) State that recording a credit-method sale or a repayment by an Employee requires an explicit, separately granted allowance (a scope constraint on create or a distinct capability), never the role default; leave Employee repayment recording and operational payment information visibly addressed rather than omitted. (2) State that every command response, warning, error and clarification is filtered by the actor's current read capabilities: an actor without balance visibility receives no outstanding amount, no threshold state and no "warning raised" signal that differs observably by balance. (3) Restrict the SB16-B6-20 sale-entry warning to actors holding balance visibility, consistent with OQ-03. (4) Add FA negative tests for each response path for an Employee and for a Manager without `credit.view_assigned_balances`.
- **Uncertainty:** The Owner-routed warning must still reach the Owner usefully (`14-§23-3`); in-app Owner awareness may satisfy it without notifications, which is outside this review. Whether a uniform "recorded" response hides threshold state completely depends on UI design.
- **Trigger screen:** none. The corrections keep the interim control at "no expansion". Any Employee-visible balance remains T3-W3 / OQ-03 for the Founder.

### SR02-09 — The service-role row lacks the handler inventory, negative tests and privilege narrowing that the precedents already require

- **Severity:** MEDIUM
- **Evidence:** Draft §20.5 line 189 ("Only inside `EIS-ISO-04` privileged operations … never for ordinary reads; never as the source of a principal"); §20.7.5 line 276 ("service-role confinement review"). Today's pattern: business resolved by an `owner_id` lookup through the caller's client, then service-role writes (`b7a70314` lines 96–100, 224–225, 282–288). `parser-lease.ts` (`3fbea897` lines 20–23) and its migration narrow the service role to `SELECT` on its table and route writes through definer functions. SB-P-1.15 SEC15-S7-02 (`43b3b7a7`, Section 5) lists seven obligations and eight negative tests; `EIS-ISO-04` requires a source-complete handler inventory.
- **Affected FCTM IDs:** `15-§22-3`, `15-§22-4`, `15-§25-11`, `14-§22-10`, `15-§17-4`
- **Affected Stage 7 draft sections:** §20.5 (Service-role use row), §20.7.5 SEC tier
- **Related Stage 6 findings:** SB16-B6-24
- **Engineering implication:** A review alone cannot show that no unbound service-role path exists, and the existing `owner_id` lookup pattern will be wrong once memberships exist. Ingestion, matching and scheduled ageing jobs are the likeliest new service-role users.
- **Required correction or evidence obligation:** In §20.5 and the SEC tier: (1) require the `EIS-ISO-04` source-complete handler inventory for every SB-P-1.16 service-role or executor path; (2) adopt the SEC15-S7-02 negative tests (no bound decision; forged business ID; Business A authority on Business B; object outside the bound set; revocation between preview and commit; grantor loss before a later run; retry scope escape); (3) prefer narrowed service-role table privileges with writes through definer commands, on the `parser_upload_leases` precedent; (4) state that the `owner_id` lookup pattern is not reused for SB-P-1.16.
- **Uncertainty:** The EIS may avoid service role for SB-P-1.16 entirely by using executor roles; the inventory obligation still applies.
- **Trigger screen:** none.

### SR02-10 — No platform or support boundary row in §20.5

- **Severity:** LOW
- **Evidence:** Draft §20.5 lines 180–191 have rows for Owner, Manager, Employee and Customer only; §20.7.3 line 261 names `D19` for the support-access boundary. Contract 15 §17 (`632f3402` lines 252–254): "No routine access to merchant banking/financial evidence". SB-P-1.12 `EIS-SUP-01` (`c444f750` line 152).
- **Affected FCTM IDs:** `15-§17-4`, `15-§22-4`, `15-§22-5`
- **Affected Stage 7 draft sections:** §20.5
- **Related Stage 6 findings:** SB16-B6-24
- **Engineering implication:** Raw provider payloads, settlement files and merchant uploads are the most sensitive data this mission adds. Without a stated boundary, operational tooling or service-role diagnostics could become routine access by default.
- **Required correction or evidence obligation:** Add a "Platform and support" row: no standing access to evidence, raw payloads, binding secrets or balances; access only through `EIS-SUP-01` grants (`D19`); logs and error capture hold references, not payload contents or secrets.
- **Uncertainty:** Low; this restates existing upstream rules for this mission's new data.
- **Trigger screen:** none.

## 5. Dissent from the Stage 7 draft

- **§20.3 current-state grants.** I disagree with "Broad default grants to `anon` and `authenticated`" as written; see SR02-02 for a repository-text statement that separates existing-table grants, `postgres` defaults and the `supabase_admin` residual.
- **§20.4.11 and §20.5 closure wording.** I disagree that "no direct `INSERT`, `UPDATE` or `DELETE`" is a sufficient precondition definition (SR02-01).
- **§20.6 SB16-B6-09 as "DESIGNED / ROUTED".** I agree with the classification but consider the design incomplete until the no-JWT execution path is addressed (SR02-04).
- **§21.5 "held is not T8".** No dissent for the security rows: none of the C-AUTH or C-PRIV rows I examined is infeasible, and their holds are recorded dependencies (`D12`, `D14`, `D19`, `DPAY`). One low-weight observation: `15-§22-6` is `PROVIDER-HELD` (following its FCTM dependency `DPAY`), but its control also applies to the merchant-upload path, which does not wait for a provider; its negative test can run once the upload path exists.
- **G-W1 classification.** No dissent: it is an upstream engineering-specification question, not a Product Truth conflict, on the evidence available.
- **Public-repository disclosure.** Nothing in either Stage 7 file should be withheld from publication: no project reference, key, secret, URL or exploit procedure appears. This report states privilege facts that are derivable from public migration text and describes no procedure for exercising them; Mission Control may still choose to treat SR02-01 under its security-disclosure practice before publication.

## 6. Infeasible, unsafe, omitted, narrowed or reassigned rows

None found.

## 7. Summary

| Finding | Severity | Short title | Correction required |
|---|---|---|---|
| SR02-01 | HIGH | Closure worded as "DML" misses non-RLS privileges and `anon` on existing tables | yes |
| SR02-02 | MEDIUM | Imprecise current-state grants and write-path description | yes |
| SR02-03 | MEDIUM | Composite keys need a `(business_id, id)` key on `transactions` | yes |
| SR02-04 | HIGH | G-W1 reading; no-JWT execution path not addressed | yes |
| SR02-05 | HIGH | Ingestion must be server-boundary-only; secret storage undefined | yes |
| SR02-06 | MEDIUM | Failed-verification events must not become tenant evidence | yes |
| SR02-07 | MEDIUM | Owner-reserved wording weaker than `16:FPDR-7` §3; unnamed actions | yes |
| SR02-08 | MEDIUM | Employee "explicitly allowed"; capability-filtered responses | yes |
| SR02-09 | MEDIUM | Service-role inventory, negative tests and narrowing | yes |
| SR02-10 | LOW | No platform or support boundary row | yes |

**STOP FOR MISSION CONTROL SPECIALIST FINDINGS REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
