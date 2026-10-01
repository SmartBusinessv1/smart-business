# SB-P-1.12 — Stage 13 Migration Plan Refinement and Evidence Closure

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — planning and read-only evidence preparer under MC-173
**To:** Smart Business Mission Control
**Work package:** `SB-P-1.12-WP-MIGRATION-PLAN-REFINEMENT-AND-EVIDENCE-CLOSURE`
**Instruction:** `communication/live/instruction1.36.md`; disposition `mission-control/43-combined-specialist-readiness-disposition.md`
**Status:** `CANDIDATE PLAN REFINEMENT — SB-MIG-1.4 NON-EXECUTABLE — IMPLEMENTATION AUTHORIZATION WITHHELD`

```text
SB-MIG-1.4: CANDIDATE, NON-EXECUTABLE
IMPLEMENTATION AUTHORIZATION: WITHHELD
SQL / MIGRATION CREATION OR EXECUTION: NOT AUTHORIZED — NONE CREATED
PROVIDER / TEST / PRODUCTION MUTATION: NOT AUTHORIZED — NONE PERFORMED
IDENTITY-DELETION RUNTIME: NOT AUTHORIZED
```

Every fact below comes from durable repository evidence or the two canonical specialist reviews, each cited. Live and provider facts that are not durably evidenced stay **UNKNOWN / UNVERIFIED**, and the evidence-closure matrix (Section 15) names who must close them. This plan proposes; Mission Control decides.

## 1. Baseline Verified

| Item | Observed on canonical `main` | Result |
|---|---|---|
| Canonical `main` | `96c15a9ac3607f2cb075fadbfbc24e8fef8f7362` (PR #707 merge, MC-173) | PASS |
| Locked Blueprint | `77d52096c020668311b039721a4de9248ddd460e` | PASS |
| Locked EIS | `c444f7509477d0e8b997af538440d93bf2ca4d72` | PASS |
| Locked Engineering Contract | `3c9b01d9df49d9bfff39f22ee2a866c6d40f316e` | PASS |
| Locked Build Prompt | `3993b77776b9576ac4000599e55a62479182b963` | PASS |
| Locked Verification Checklist | `453b598a5b79171ddf26903d2055fef1d3d19e5b` | PASS |
| Canonical FCTM | `1650ff95b2fbdd63e1b0f60d8135da14a7a9d259` | PASS |
| Supabase review | `specialists/07-stage13-supabase-implementation-readiness-review.md` (PR #705) | Read in full |
| Security review | `specialists/08-stage13-security-implementation-readiness-review.md` (PR #706) | Read in full |
| Implementation Authorization | `WITHHELD` | PASS |
| Repository code, schema, tests, CI | Unchanged since the EIS baseline `main@24730a68`; 24 migration files | PASS |

**Accepted current-state evidence (MC-173 Section 6):** production carries all 24 canonical-era migration versions through `20260902150000`. This is used only as ledger-presence evidence. It establishes nothing about byte equivalence, effective ACLs or default privileges, backup or PITR, test alignment, provider deletion or storage behaviour, or execution authority.

**Finding identifiers.** The Supabase review numbers its findings `SUPA-RDY-01` to `SUPA-RDY-11`. The Security review uses question numbers, cited here as `SEC-Q-n`.

## 2. Corrected Candidate Migration Order

The locked EIS Section 19.2 controls: `WS-0 → WS-A1 → WS-A2 and WS-E → WS-F → WS-D → WS-A3 per family → WS-B → WS-C → WS-G`, with WS-H throughout. The readiness report placed M-08 (WS-D) before M-09 to M-12 (WS-F). That is corrected below (MC-173 Section 3.1; `SEC-Q-1`).

| Step | Group | Workstream | Gate before the step may run (in addition to an authorized migration mission) |
|---|---|---|---|
| 0 | Evidence | WS-0 | Section 15 rows listed "before migration-plan activation" |
| 1 | M-01 persons | WS-A1 | Test target identity, ledger and baseline evidence (EV-03 to EV-06) |
| 2 | M-02 memberships | WS-A1 | M-01; M-06 read contract fixed (Section 4) because authority-table RLS is created here |
| 3 | M-03 participants and external references | WS-A1 | M-02 |
| 4 | M-04 backfill | WS-A1 | Actor census (Section 10) at zero unresolved; production-shaped rehearsal before any production run |
| 5 | M-05 authority registry, grants, entitlements, support, automation, epoch-bearing authority-state rows | WS-A2 | M-04 reconciled |
| 6 | M-06 kernel functions | WS-A2 | M-05; Section 4 contract; Supabase and Security pre-merge review |
| 7 | M-07 authority events, denial audit, bounded human-context reference (`EC-AUD-04`) | WS-E | M-01 |
| 8 | M-14 Catalog provenance widening (moved; see note 2) | WS-E | M-07 |
| 9 | M-09 persons foreign keys `NOT VALID`, then validate | WS-F | M-04 zero unresolved; Supabase and Security review |
| 10 | M-10 cascade removal and `RESTRICT` | WS-F | Section 9 inventory with zero UNRESOLVED edges; Section 5 boundary encoded; rehearsal; review |
| 11 | M-11 delete guards; revoke business `DELETE` | WS-F | M-10; review |
| 12 | M-12 lifecycle hook, tombstone state, neutral hold state (`EC-LEG-02`) | WS-F | M-11; review |
| 13 | M-08 confirmation bindings (including `EC-CNF-03`), shared idempotency, import ledger, serialization protocol (`EC-CNF-02`) | WS-D | WS-F complete (M-09 to M-12); review |
| 14 to 18 | M-13a to M-13e, one family per checkpoint | WS-A3 | WS-F and WS-D complete; authority-surface and definer inventories current; family rules (Section 6); review |
| 19 | M-20 storage scoping (`EC-ISO-05`) | WS-A3 | G-7 storage evidence (EV-21). It may lag in time but is not dropped |
| 20 | M-18 `owner_id` uniqueness removal | WS-A1 cleanup | All single-ownership inference removed and verified |
| 21 | M-17 effective-access reconciliation | WS-B | G-6 evidence (EV-17); approved anonymous-workflow list (EV-26) |
| 22 | M-15 Catalog capabilities and projection | WS-C | WS-B per EIS order; see PLAN-Q-1 on a disclosure interval |
| 23 | M-16 invitations, first run, removal, transfer | WS-G | WS-A2, WS-D, WS-F |
| 24 | M-19 identity-deletion foundation | Identity deletion | Separate runtime authorization; G-7 and legal gates |

**Allocation notes.**

1. **`EC-CNF-02` is split deterministically, preserving WS-F before WS-D.** M-05 creates the epoch-bearing serialization rows as part of `EC-KER-09` (WS-A2 revocation semantics, EIS Section 8.3). M-08 installs the lock-acquisition protocol used by consequential commands (`EC-CNF-02`, WS-D). No WS-D object is created before WS-F.
2. **M-14 moves forward into WS-E.** `EC-AUD-03` belongs to WS-E (EIS Section 19.1), and EIS Section 19.2 places WS-E with WS-A2. It must exist before any non-Owner Catalog write (M-13d), because the current provenance `CHECK` constraints pin the Owner authority basis. Before M-13d it is still reversible, because no non-Owner provenance row can exist yet.
3. **PLAN-Q-1 (Mission Control decision; not decided here).** The 19 Catalog functions resolve the business through `resolve_owner_business`, and `catalog_product_read` returns Reference Cost unconditionally (EIS Section 5). Under the EIS order, M-13d (WS-A3 Catalog family) precedes M-15 (WS-C projection). If a non-Owner principal could reach Catalog reads between those two steps, unconditional cost could be disclosed. That would breach `EC-PPM-03` and `EC-PPM-04` and Founder Decision Record 09. Two options:
   - **Option B (recommended):** keep the EIS order and require that, until M-15, no Catalog capability is held by or grantable to any non-Owner principal. Through M-13d the Catalog surface stays Owner-only by registry data.
   - **Option A:** treat M-13d and M-15 as one atomic Catalog checkpoint. This changes the locked order for that subset, so it needs a Mission Control disposition.
4. **`correct_transaction` (`SEC-Q-9`).** The repository's final definition is `SECURITY INVOKER` (Section 8); M-13b replaces it with the kernel-checked transaction command family regardless.

## 3. Deterministic Obligation-to-Group Allocation

The "+N if needed" branches in readiness report Appendix A are removed (`SUPA-RDY-06`; `SEC-Q-14`).

| Obligation | Group | Notes |
|---|---|---|
| `EC-ID-01` | M-01 | — |
| `EC-ID-02`, `EC-ISO-08` | M-02 | The `(person_id, business_id, status)` index is created with the table |
| `EC-ID-03`, `EC-ID-05`, `EC-ISO-07` | M-03 | Composite `(business_id, id)` keys on new reference tables |
| `EC-ID-04` | M-04 (backfill and mirror), M-18 (uniqueness removal) | — |
| `EC-ESC-08` | M-04, M-09 to M-11 | Order design only |
| `EC-KER-03`, `EC-KER-04`, `EC-KER-05`, `EC-KER-09` (epoch rows), `EC-AUT-01`, `EC-SUP-01`, `EC-EXT-01`, `EC-EXT-02` | M-05 | — |
| `EC-KER-01`, `EC-KER-02`, `EC-KER-06`, `EC-KER-07`, `EC-KER-08`, `EC-ISO-10` (binding on every definer it creates) | M-06 | — |
| `EC-AUD-01`, `EC-AUD-02`, **`EC-AUD-04`** | M-07 | Deterministic (Section 4.2) |
| `EC-AUD-03` | M-14 | Moved forward (Section 2 note 2) |
| `EC-ESC-02`, `EC-ESC-03`, `EC-ESC-05` | M-09, M-10 | — |
| `EC-ESC-04` | M-10, M-11 | — |
| `EC-ESC-01` | M-11 | — |
| `EC-ESC-06`, `EC-LEG-02` | M-12 | Neutral technical hold state only |
| `EC-CNF-01`, **`EC-CNF-03`**, `EC-CNF-04`, `EC-CNF-05`, `EC-CNF-02` (protocol) | M-08 | Deterministic (Section 4.3) |
| `EC-ISO-01`, `EC-ISO-02`, `EC-ISO-04`, `EC-ID-06` | M-13a to M-13e | Per family; `EC-ISO-10` replacement of non-compliant definers in the family (Section 8) |
| `EC-PPM-01` | M-13d | The 19 functions change resolver in the family cut-over (Section 7) |
| `EC-ISO-05` | M-20 | — |
| `EC-ISO-03` | M-17 | — |
| `EC-PPM-02`, `EC-PPM-03`, `EC-PPM-04` | M-15 | Subject to PLAN-Q-1 |
| `EC-FRL-01` to `EC-FRL-05` | M-16 | — |
| `EC-DEL-01` to `EC-DEL-06`, `EC-LEG-01` | M-19 | Separately runtime-authorized |
| All other obligations | No schema | Application, test, governance or evidence |

## 4. Refined Group Contracts — M-06, M-07, M-08

### 4.1 M-06 non-recursive authority-read contract (proposal for specialist pre-merge review; `SUPA-RDY-04`, `SEC-Q-7`)

| Element | Proposed physical contract |
|---|---|
| Reader role | One dedicated `NOLOGIN NOINHERIT` role (working name `authz_kernel_reader`) owns every read-only kernel helper and `authz.authorize`. It is never granted `BYPASSRLS`, never owns an authority table and holds no `INSERT`, `UPDATE` or `DELETE` |
| Table privileges | `SELECT` only, granted per table and, where practicable, per column, limited to what the helpers read: persons (status, binding), memberships, capability registry, role-default matrix, grants, entitlements, support grants, automation rules, participant bindings, authority-state rows |
| RLS on authority tables | RLS stays enabled. Each authority table carries one read policy `FOR SELECT TO authz_kernel_reader USING (true)`. Its role list must never include `PUBLIC`, `anon`, `authenticated` or `service_role`, so no client role receives a broad `USING (true)` policy |
| Non-recursion rule | No policy whose role list includes `authz_kernel_reader` may call any function. Client-facing policies on authority tables (for example, a person reading their own memberships) may call kernel helpers. Those helpers then read under the reader-role policy, which calls nothing, so recursion is impossible by construction |
| Writes | Authority writes go only through command functions owned by separate writer executor roles, each with its own narrow `FOR INSERT` or `FOR UPDATE` policy. The reader never writes. Decision-record writes, if any, use a separate writer-owned definer |
| Function hardening | Every helper and kernel function is `SECURITY DEFINER`, `STABLE` where read-only, `SET search_path = ''`, uses schema-qualified references only and no dynamic identifiers. `EXECUTE` is revoked from `PUBLIC` and `anon` in the creating migration before narrow grants (`EC-ISO-10`) |
| Ownership transfer | Use the SB-P-1.11 procedure (temporary membership and `CREATE` grant, `ALTER FUNCTION … OWNER TO`, immediate revoke) and record its disclosed Supabase residual: `postgres` keeps an automatic membership in roles it creates, which only `supabase_admin` can remove (`20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`, comment preceding `REVOKE … FROM postgres`). Live membership state is G-6 evidence |
| Verification | Recursion tests (each client policy evaluated with helpers called); `EXPLAIN` and timing on every list and search path before and after each family cut-over, with thresholds set from measured evidence; a proof that the reader holds no DML; a proof that policies call only approved helpers (`SEC-Q-7` checkpoint) |

### 4.2 M-07 (`EC-AUD-04` deterministic)

M-07 owns `authority_events`, `authz.record_denial` and **one** bounded human-context reference shape: a context reference held as codes and identifiers, with any separately governed context record. Authority events use it. The existing domain event stores (`transaction_correction_events` and the Catalog event tables) gain only additive, nullable references to that shape where `EC-AUD-04` requires. No parallel domain event log, no payload dumping and no unbounded provider error text is created.

### 4.3 M-08 (`EC-CNF-03` deterministic)

M-08 owns `confirmation_bindings` as **the one** preview and confirmation authority (`EC-CNF-01`). Clarify-and-preview for consequential writes and material imports (`EC-CNF-03`) issues and consumes these bindings; no second preview-token subsystem is created.

- `catalog_link_preview_tokens` stops issuing new tokens at the M-13d Catalog cut-over. It stays as read-only history, because `catalog_product_link_events.preview_token_id` references it.
- The shared idempotency pattern (`EC-CNF-04`) governs new commands. The guarded existing tables `catalog_write_idempotency_keys` and `inventory_movement_idempotency_keys` stay as history.
- The import ledger (`EC-CNF-05`) is proposed as an extension of `catalog_import_rows`, whose per-row state and `row_idempotency_key` it already holds, rather than a second ledger. The per-row ledger write must occur in the domain write's transaction. This is a proposal for the M-08 Supabase and Security pre-merge review.

## 5. M-10 No-Safe-Reversal Boundary (`SEC-Q-4`; Supabase Q-4)

**Reversal window.** M-10 may be logically reversed (old foreign-key definitions restored) only while all of the following hold. Each is checked by a rehearsed read-only precondition query that must return zero before any reversal:

1. no `persons` row has had its Auth binding governed-unlinked, and no linked Auth user has been deleted, since M-09;
2. no business has lifecycle status `deleted`, and no business row is tombstoned;
3. no record carries an active technical hold state (M-12);
4. the M-12 governed lifecycle command has not executed outside the test environment;
5. every actor value in every table whose foreign key would be restored still has a matching `auth.users` row, so the restored foreign key validates;
6. the reversal has been rehearsed in the test environment with integrity checks passing.

**Boundary.** The first occurrence of any event in items 1 to 4, or the first failure of item 5, closes the reversal window permanently for that environment. After that point:

- only forward correction is permitted;
- a catastrophic execution failure goes to the separately governed recovery plan;
- PITR is disaster recovery, not routine rollback, because it discards unrelated writes after the restore point.

The boundary is encoded as a migration-mission gate, not left to operator judgement. M-11 inherits the same boundary. Reversing M-10 returns ESC-1 to its pre-M-10 OPEN state; it never claims an improvement.

## 6. M-13 Per-Family Abort, Revert and Forward-Correction Rules (MC-173 Section 4 item 10)

| Phase | Rule |
|---|---|
| Before merge (test) | Any failing role-matrix, isolation, recursion, performance or negative-path check: abort; no merge |
| During production execution | Each family's DDL and policy swap runs in one transaction with measured `lock_timeout` and `statement_timeout` (values from rehearsal, never guessed). A timeout aborts the transaction, and an exactly-one-authority-path check confirms the old path is intact before any retry |
| After commit, before any non-Owner authority is exercised in the family | The rehearsed family revert migration is permitted, followed by reconciliation proving the old path is complete and the new path absent |
| After non-Owner authority is exercised in the family (a grant used, or non-Owner provenance or attribution written) | Forward correction only |
| Integrity failure (data loss or a hybrid authority state) | Stop; Mission Control escalation; restore only through a separately verified restore decision. PITR is never the default |
| Invariant after every step | Exactly one authority path is live on the family, either the old valid state or the new valid state, never a hybrid |

## 7. M-13d Old Catalog Signature Retirement (`SUPA-RDY-05`)

Adding the requested-business argument creates new PostgreSQL signatures. `CREATE OR REPLACE` cannot retire the old ones. In the same M-13d transaction:

1. install the 19 new requested-business signatures, each meeting `EC-ISO-10`, owned by the same executor role as today (the 19 Catalog rows of Section 8);
2. `DROP` each of the 19 exact old signatures listed in Section 8 (`DROP` is preferred to revoke-only, so no Owner-only overload survives);
3. assert, using the pattern of the SB-P-1.11 sanity assertion in `20260806130000` Section 21, that exactly 19 public Catalog command and read identities exist. Each must have its designated owner and the new argument list, with no twentieth function and no legacy overload;
4. verify that `PUBLIC` and `anon` hold no `EXECUTE`, and that `authenticated` holds `EXECUTE` only on functions intended for direct RPC (server-boundary-only families not executable by `authenticated`, `EC-AUD-02`);
5. change the application callers in the same checkpoint (`supabase.rpc` call sites and `src/integrations/supabase/catalog.ts`), and regenerate `types.ts` from the test schema.

## 8. Existing `SECURITY DEFINER` Inventory (source-complete for the repository; `SEC-Q-9`)

Method: every `CREATE [OR REPLACE] FUNCTION` in the 24 migrations was parsed, with later redefinitions, `ALTER FUNCTION … OWNER TO` and `DROP FUNCTION` applied in version order. The result was cross-checked against every `SECURITY DEFINER` and `SECURITY INVOKER` keyword in the migrations. **28 live definer functions** exist in the final repository state: 19 Catalog and 9 parser-support. No live function uses dynamic SQL.

| ID | Source (final definition) | Function and signature | Owner (repository evidence) | `search_path` | `EXECUTE` granted to | EC-ISO-10 status | Replacing or hardening group |
|---|---|---|---|---|---|---|---|
| D-01 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:452 | `public.archive_catalog_category(uuid,uuid,boolean)` | `catalog_identity_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-02 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:533 | `public.archive_catalog_product(uuid,uuid)` | `catalog_lifecycle_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-03 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:1721 | `public.catalog_product_read(uuid)` | `catalog_read_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-04 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:1756 | `public.catalog_products_list_batch(uuid[])` | `catalog_read_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-05 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:1537 | `public.catalog_products_search(text,boolean,uuid,integer,smallint,text,uuid)` | `catalog_read_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-06 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:377 | `public.create_catalog_category(uuid,text)` | `catalog_identity_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-07 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:60 | `public.create_catalog_product(uuid,text,text,uuid,text,text,text)` | `catalog_identity_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-08 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:1502 | `public.get_catalog_command_outcome(text,uuid)` | `catalog_read_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-09 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:605 | `public.reactivate_catalog_product(uuid,uuid)` | `catalog_lifecycle_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-10 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:988 | `public.record_catalog_reference_cost_change(uuid,uuid,numeric)` | `catalog_cost_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-11 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:756 | `public.record_catalog_selling_price_change(uuid,uuid,numeric)` | `catalog_pricing_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-12 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:830 | `public.record_catalog_tax_change(uuid,uuid,text,numeric)` | `catalog_tax_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-13 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:1372 | `public.remove_catalog_inventory_link(uuid,uuid)` | `catalog_link_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-14 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:912 | `public.update_business_tax_settings(uuid,text,numeric)` | `catalog_tax_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-15 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:172 | `public.update_catalog_product_identity(uuid,uuid,text,text,uuid,text,text)` | `catalog_identity_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-16 | `supabase/migrations/20260806130000_sb_p_1_11_impl_1_stage2_functions.sql`:288 | `public.update_catalog_product_unit(uuid,uuid,text)` | `catalog_identity_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-17 | `supabase/migrations/20260811090000_sb_p_1_11_gc_1_security_correction.sql`:121 | `public.delete_catalog_product(uuid,uuid)` | `catalog_lifecycle_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-18 | `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`:279 | `public.claim_parser_upload_lease(uuid,uuid)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-19 | `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`:324 | `public.complete_parser_upload_lease(uuid,uuid)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-20 | `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`:254 | `public.confirm_parser_upload_lease(uuid,uuid)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-21 | `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`:374 | `public.expire_parser_upload_lease(uuid,uuid)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-22 | `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`:348 | `public.fail_parser_upload_lease(uuid,uuid,text)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-23 | `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`:302 | `public.mark_parser_upload_lease_dispatched(uuid,uuid)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-24 | `supabase/migrations/20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql`:175 | `public.release_parser_preview_guard(uuid,uuid,uuid)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-25 | `supabase/migrations/20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`:50 | `public.acquire_parser_preview_guard(uuid)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-26 | `supabase/migrations/20260826120000_sb_p_1_11_gc_38r_parser_guard_ambiguity_fix.sql`:82 | `public.issue_parser_upload_lease(uuid,uuid,text,integer,text,text,uuid)` | Migration-applying role (`postgres`); no `ALTER FUNCTION … OWNER TO` in the repository | `''` | `service_role` only | **NON-COMPLIANT** with the EC-ISO-10 owner clause (owner is not a dedicated `NOLOGIN NOINHERIT` role). `search_path` empty; `PUBLIC`/`anon`/`authenticated` revoked | M-13e (import and parser-support family) |
| D-27 | `supabase/migrations/20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql`:208 | `public.assign_or_replace_catalog_inventory_link(uuid,uuid,numeric)` | `catalog_link_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |
| D-28 | `supabase/migrations/20260902120000_sb_ops_prod_sync_1_0_instr1_6_phase_a_link_reuse_guard.sql`:65 | `public.preview_catalog_inventory_link_change(uuid,text,uuid)` | `catalog_link_executor` (`NOLOGIN NOINHERIT`, created in `20260806120000`) | `''` | `authenticated` | Compliant in repository text (empty `search_path`; `NOLOGIN NOINHERIT` owner; `PUBLIC`/`anon` revoked before grant; no dynamic SQL). Live owner and `EXECUTE` UNVERIFIED (G-6) | M-13d (Catalog family); retire this exact signature (Section 7) |

**`correct_transaction` (named explicitly by MC-173 and `SEC-Q-9`).**

| Fact | Repository evidence |
|---|---|
| Signature | `public.correct_transaction(uuid, text, date, text, text, numeric, text, text, text)` |
| First definition | `20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql` line 62: `SECURITY DEFINER`, `SET search_path = public` |
| Final definition | `20260720142248_97de5be2-ef9f-4283-9318-9eb9f9a6cca1.sql` line 15 ("Switch correction function to SECURITY INVOKER"): **`SECURITY INVOKER`**, `SET search_path = public` |
| Corroboration | `docs/incidents/SB-INC-2026-001-production-schema-loss.md` Section 6: after the replay, "Functions using SECURITY DEFINER: 0 (all correctly SECURITY INVOKER)"; mission memory records the SB-P-1.9 "SECURITY INVOKER correction function" |
| `EXECUTE` | Granted to `authenticated` (`20260720142204` line 149); also to `anon` by `GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated, service_role` (`20260727000000` line 44). No later migration revokes `anon` (`20260830120000` explicitly leaves `transactions` untouched) |
| EC-ISO-10 status | Outside EC-ISO-10's definer scope in the final repository state, but **NON-CONFORMING** to the hardening intent (`search_path = public`; `anon` `EXECUTE`). Live security mode, `search_path` and grants are **UNVERIFIED** (G-6) |
| Target | **M-13b** (transactions and corrections family): replaced by the kernel-checked transaction and correction command family. Any retained definer form must meet `EC-ISO-10`, and `PUBLIC`/`anon` `EXECUTE` must be revoked |

The `SEC-Q-9` premise that `correct_transaction` is currently `SECURITY DEFINER` matches its first definition, not the repository's final one. That does not change the required action, and the live state is not inferred.

**Other non-definer functions** (`SECURITY INVOKER` or trigger functions; outside EC-ISO-10's definer scope): `catalog_internal` helpers including `resolve_owner_business` and `current_actor_uid`; the inventory functions (`create_inventory_movement`, `preview_inventory_movement`, `inventory_current_stock_batch`, `inventory_movement_remaining_compensable`); and the guard and trigger functions. Each is replaced or re-pointed in its family's M-13 checkpoint where it carries authority.

## 9. Foreign-Key and Cascade Inventory for M-10 (`SUPA-RDY-03`, `SEC-Q-3`)

Method: every inline and `ALTER TABLE … ADD … FOREIGN KEY` clause in the 24 migrations was parsed, with comments stripped. No migration drops or alters a foreign key's delete action, and the only `DROP CONSTRAINT` (`20260811090000`) removes a `CHECK`, not a foreign key. **Correction to earlier counts:** there are **17 distinct** `ON DELETE CASCADE` edges to `businesses(id)`. The "18" in EIS Section 5 and the readiness report is a text count that includes the byte-duplicate `transactions` definition in `20260719140000` (Section 11).

Classification follows only the locked EIS (Sections 14.1 and 14.3, and `EIS-ESC-04`, which names transactions, corrections, Catalog and Inventory events, audit and deletion records as retained) and repository guard evidence. No legal retention class is invented.

| ID | Table | Columns → target | Constraint | Current delete action | Source migration | Record-class source or evidence | Candidate classification |
|---|---|---|---|---|---|---|---|
| F-01 | `public.businesses` | `owner_id` → `auth.users(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260708210504_0a471e2c-a76c-4178-8aa2-79a3744e8bd2.sql` | ESC-1 manifestation (EIS Section 14.1) | EIS-decided: re-point to `persons(id)` `RESTRICT` (`EC-ESC-02`) in M-09/M-10 |
| F-02 | `public.transactions` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql` (also in `20260719140000`, byte-duplicate) | EIS-ESC-04 names transactions as retained | **RETAINED** → `RESTRICT` |
| F-03 | `public.transactions` | `creator_id` → `auth.users(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql` (also in `20260719140000`, byte-duplicate) | ESC-1 manifestation (EIS Section 14.1) | EIS-decided: re-point to `persons(id)` `RESTRICT` (`EC-ESC-03`) |
| F-04 | `public.transaction_correction_events` | `transaction_id` → `public.transactions(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql` | EIS Section 14.1 and EIS-ESC-04 | **RETAINED** → `RESTRICT` |
| F-05 | `public.transaction_correction_events` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql` | EIS-ESC-04 names corrections as retained | **RETAINED** → `RESTRICT` |
| F-06 | `public.inventory_items` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` | No record-class rule in repository; inventory master referenced `RESTRICT` by movements and products | **UNRESOLVED** (blocks M-10) |
| F-07 | `public.inventory_movements` | `item_id,business_id` → `public.inventory_items(id,business_id)` | `inventory_movements_item_business_fk` | `RESTRICT` | `20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-08 | `public.inventory_movements` | `correcting_of,business_id,item_id` → `public.inventory_movements(id,business_id,item_id)` | `inventory_movements_correcting_of_fk` | `RESTRICT` | `20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-09 | `public.inventory_movement_idempotency_keys` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` | No record-class rule; no delete guard; `movement_id` is `RESTRICT` | **UNRESOLVED** (blocks M-10) |
| F-10 | `public.inventory_movement_idempotency_keys` | `movement_id` → `public.inventory_movements(id)` | unnamed inline (PostgreSQL default name) | `RESTRICT` | `20260721205714_c3b38f2f-5f12-431d-80c2-9b14394cbc20.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-11 | `public.catalog_categories` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | No record-class rule; referenced `RESTRICT` by products | **UNRESOLVED** (blocks M-10) |
| F-12 | `public.catalog_products` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | No record-class rule; referenced `RESTRICT` by Catalog events | **UNRESOLVED** (blocks M-10) |
| F-13 | `public.catalog_products` | `business_id,category_id` → `public.catalog_categories(business_id,id)` | `catalog_products_category_fk` | `RESTRICT` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-14 | `public.catalog_products` | `inventory_item_id,business_id` → `public.inventory_items(id,business_id)` | `catalog_products_inventory_item_fk` | `RESTRICT` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-15 | `public.business_tax_settings` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | No record-class rule | **UNRESOLVED** (blocks M-10) |
| F-16 | `public.catalog_link_preview_tokens` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | EIS Section 14.3 names expired preview tokens as an operational example; tokens referenced by `catalog_product_link_events.preview_token_id` (`NO ACTION`) cannot be removed | **CANDIDATE EPHEMERAL** (conditional on the record-class rule; referenced tokens stay) |
| F-17 | `public.catalog_link_preview_tokens` | `business_id,product_id` → `public.catalog_products(business_id,id)` | `catalog_link_preview_tokens_product_fk` | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-18 | `public.catalog_selling_price_events` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | EIS-ESC-04 (Catalog events); `no_delete` guard in `20260806120000` | **RETAINED** → `RESTRICT` |
| F-19 | `public.catalog_selling_price_events` | `business_id,product_id` → `public.catalog_products(business_id,id)` | `catalog_selling_price_events_product_fk` | `RESTRICT` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-20 | `public.catalog_tax_events` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | EIS-ESC-04; `no_delete` guard | **RETAINED** → `RESTRICT` |
| F-21 | `public.catalog_tax_events` | `business_id,product_id` → `public.catalog_products(business_id,id)` | `catalog_tax_events_product_fk` | `RESTRICT` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-22 | `public.catalog_reference_cost_events` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | EIS-ESC-04; `no_delete` guard | **RETAINED** → `RESTRICT` |
| F-23 | `public.catalog_reference_cost_events` | `business_id,product_id` → `public.catalog_products(business_id,id)` | `catalog_reference_cost_events_product_fk` | `RESTRICT` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-24 | `public.catalog_product_link_events` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | EIS-ESC-04; `no_delete` guard | **RETAINED** → `RESTRICT` |
| F-25 | `public.catalog_product_link_events` | `resulting_price_event_id` → `public.catalog_selling_price_events(id)` | unnamed inline (PostgreSQL default name) | `NO ACTION (default)` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-26 | `public.catalog_product_link_events` | `preview_token_id` → `public.catalog_link_preview_tokens(id)` | unnamed inline (PostgreSQL default name) | `NO ACTION (default)` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-27 | `public.catalog_product_link_events` | `business_id,product_id` → `public.catalog_products(business_id,id)` | `catalog_product_link_events_product_fk` | `RESTRICT` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-28 | `public.catalog_audit_events` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | EIS-ESC-04 (audit); `no_delete` guard | **RETAINED** → `RESTRICT` |
| F-29 | `public.catalog_deletion_records` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | EIS-ESC-04 (deletion records); `no_delete` guard | **RETAINED** → `RESTRICT` |
| F-30 | `public.catalog_write_idempotency_keys` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260806120000_sb_p_1_11_impl_1_stage1_schema.sql` | No record-class rule; carries a `no_delete` guard (conflicting signal) | **UNRESOLVED** (blocks M-10) |
| F-31 | `public.catalog_import_batches` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` | No record-class rule; feeds `EC-CNF-05` import counts | **UNRESOLVED** (blocks M-10) |
| F-32 | `public.catalog_import_rows` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `CASCADE` | `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` | No record-class rule; feeds `EC-CNF-05` import counts | **UNRESOLVED** (blocks M-10) |
| F-33 | `public.catalog_import_rows` | `business_id,batch_id` → `public.catalog_import_batches(business_id,id)` | `catalog_import_rows_batch_fk` | `RESTRICT` | `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-34 | `public.catalog_import_rows` | `business_id,matched_product_id` → `public.catalog_products(business_id,id)` | `catalog_import_rows_matched_product_fk` | `NO ACTION (default)` | `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-35 | `public.catalog_import_rows` | `business_id,resolved_product_id` → `public.catalog_products(business_id,id)` | `catalog_import_rows_resolved_product_fk` | `NO ACTION (default)` | `20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql` | Intra-domain integrity edge | Unchanged by M-10 (already `RESTRICT` or `NO ACTION`) |
| F-36 | `public.parser_preview_guards` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `NO ACTION (default)` | `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql` | EIS Section 14.3 names parser leases as operational; currently `NO ACTION` | **CANDIDATE EPHEMERAL**; no M-10 change; the governed lifecycle hook (M-12) must remove explicitly |
| F-37 | `public.parser_upload_leases` | `business_id` → `public.businesses(id)` | unnamed inline (PostgreSQL default name) | `NO ACTION (default)` | `20260819120000_sb_p_1_11_gc_38r_parser_support_schema.sql` | EIS Section 14.3 names parser leases as operational; currently `NO ACTION` | **CANDIDATE EPHEMERAL**; no M-10 change; the governed lifecycle hook (M-12) must remove explicitly |

**Business-cascade summary (17 edges):** RETAINED → `RESTRICT`: 8. CANDIDATE EPHEMERAL: 1. **UNRESOLVED: 8** (`inventory_items`, `inventory_movement_idempotency_keys`, `catalog_categories`, `catalog_products`, `business_tax_settings`, `catalog_write_idempotency_keys`, `catalog_import_batches`, `catalog_import_rows`). Under both specialist reviews, an UNRESOLVED edge blocks M-10. The disposition source is the record-class registry rule (`EC-LEG-01`, rules as data, provisional under Founder Record 06 and MC-117). Mission Control owns obtaining it, with the Founder where a class is a product or legal question.

**Observation.** `inventory_movements` has no direct foreign key to `businesses`. Its composite `RESTRICT` to `inventory_items(id, business_id)` already blocks a business cascade wherever movements exist. This is evidence of the current shape, not of a record-class decision. The live foreign-key inventory (names, current actions) is UNVERIFIED until read-only evidence exists (EV-09).

## 10. Actor-Column Inventory for M-04 (`SUPA-RDY-02`)

Method: every `uuid` column of every table in the 24 migrations was listed and screened. Object references (`id`, `business_id`, item, product, link, batch and token IDs, `system_run_id`, `request_id`, `entity_id`) were excluded. **18 actor-bearing columns** remain.

| ID | Table.column | Identity reference (repository) | Nullable | M-04 dependency | M-09/M-10 target | Current authoritative reconciliation evidence |
|---|---|---|---|---|---|---|
| A-01 | `businesses.owner_id` | `auth.users(id)` `ON DELETE CASCADE`, `UNIQUE` | No | Source of one Owner membership per business; included in the `persons` union | `persons(id)` `RESTRICT` (`EC-ESC-02`); `UNIQUE` dropped at M-18 | None |
| A-02 | `transactions.creator_id` | `auth.users(id)` `ON DELETE CASCADE` | No | Included in the union | `persons(id)` `RESTRICT` (`EC-ESC-03`) | None |
| A-03 | `transaction_correction_events.edited_by` | Implicit Auth user ID; no foreign key | No | Included | `persons(id)` `RESTRICT` (`EC-ESC-03`) | None |
| A-04 | `inventory_items.created_by` | Implicit; no foreign key | No | Included | `EC-ESC-03` ("every other historical actor column") | None |
| A-05 | `inventory_movements.responsible_user_id` | Implicit; no foreign key | Yes | Included (non-null values) | `EC-ESC-03` (inventory actor columns) | None |
| A-06 | `catalog_categories.created_by` | Implicit; no foreign key | No | Included | `EC-ESC-03` | None |
| A-07 | `catalog_products.created_by` | Implicit; no foreign key | No | Included | `EC-ESC-03` | None |
| A-08 | `catalog_link_preview_tokens.initiating_actor_user_id` | Implicit; no foreign key | No | Included | `EC-ESC-03`; operational-table treatment depends on the record class (Section 9, `catalog_link_preview_tokens`) | None |
| A-09 | `catalog_link_preview_tokens.closed_by_actor_user_id` | Implicit; no foreign key | Yes | Included (non-null) | Same as A-08 | None |
| A-10 | `catalog_selling_price_events.authorized_by_user_id` | Implicit; no foreign key | No | Included | `EC-ESC-03` (named) | None |
| A-11 | `catalog_tax_events.authorized_by_user_id` | Implicit; no foreign key | No | Included | `EC-ESC-03` (named) | None |
| A-12 | `catalog_reference_cost_events.authorized_by_user_id` | Implicit; no foreign key | No | Included | `EC-ESC-03` (named) | None |
| A-13 | `catalog_product_link_events.authorized_by_user_id` | Implicit; no foreign key | No | Included | `EC-ESC-03` (named) | None |
| A-14 | `catalog_audit_events.authorized_by_user_id` | Implicit; no foreign key | No | Included | `EC-ESC-03` (named) | None |
| A-15 | `catalog_deletion_records.deleted_by_user_id` | Implicit; no foreign key | No | Included | `EC-ESC-03` (named) | None |
| A-16 | `catalog_import_batches.initiated_by` | Implicit; no foreign key | No | Included | `EC-ESC-03` | None |
| A-17 | `catalog_import_rows.resolved_by` | Implicit; no foreign key | Yes | Included (non-null) | `EC-ESC-03` | None |
| A-18 | `parser_upload_leases.created_by` | Implicit; no foreign key | No | Included | `EC-ESC-03`; operational-table treatment depends on the record class (Section 9, `parser_upload_leases`) | None |

**Not foreign-key-addressable (UNRESOLVED):** identity values embedded in JSON or text payloads (for example `catalog_import_rows.parsed_snapshot` and Catalog audit payloads). The census must state whether any exist and how they are treated; no attribution is rewritten.

**Reconciliation contract before M-09 (Supabase review Section 6, adopted unchanged):**

- census per source column (distinct count; union; Auth correspondence where provider access permits);
- one stable `persons.id` per identity, equal to the Auth user ID;
- exactly one Owner membership per business; no duplicate active Owner;
- before and after counts by source and target; an idempotent re-run with no duplicates;
- **zero unresolved actor references** before `VALIDATE CONSTRAINT`.

An orphan is never reassigned, given a manufactured Auth user, attributed to the Owner or a system UUID, or used as a reason to relax the foreign key. It stops M-09 until a separately authorized reconciliation rule exists (EV-08).

## 11. Clean-Replay Facts (for EV-06)

Clean replay from zero through the 24 canonical migrations is **not a plain `db push`**. The repository records four known exceptions:

| Version | Fact | Recorded treatment |
|---|---|---|
| `20260719140000` | Byte-for-byte duplicate of `20260719102137` (two `CREATE TABLE public.transactions`) | `migration repair --status applied` (`SB-INC-2026-001` Section 5) |
| `20260723200718`, `20260723200952` | `GRANT`/`REVOKE … sandbox_exec`, a role absent from both projects | `migration repair --status applied` (same record) |
| `20260902140000` | Production-data-specific repair; must never run on non-matching data | Test-ledger reconciliation; never executed outside its target (`docs/migration/README.md` "Environment-Specific Historical Migrations") |

A candidate-package clean replay must reproduce exactly these recorded treatments. Any other failure is a new finding.

## 12. Privileged `service_role` Handler Inventory (source-complete for the repository; `SEC-Q-10`)

Method: every use of `supabaseAdmin`, `client.server` and service-role keys in `src/**` and `lambda/**` was searched, along with every `createClient`. The only privileged client is `src/integrations/supabase/client.server.ts`. It documents "bypasses RLS" and is dynamically imported in two server-function files. `lambda/**` uses none. There are **23 privileged query sites** in 5 server-function handlers. Every handler resolves its principal through `requireSupabaseAuth` (the caller session) and its business through `loadOwnedBusinessId`, an Owner-only `maybeSingle()` lookup through the caller client.

| ID | Path:line | Handler | Operation | Business and object predicates in the query | Required kernel-decision binding (`EC-ISO-04`) | Target checkpoint |
|---|---|---|---|---|---|---|
| H-01 | `src/server-functions/catalog-import.ts:284` | `catalogImportPreview` | `insert catalog_import_batches` | Writes `business_id` from the resolved business; `initiated_by = userId` | Decision record (principal, requested business, `catalog.import`, batch) issued before insert; business from kernel resolution, not `loadOwnedBusinessId` | M-13e (with M-08 bindings) |
| H-02 | `catalog-import.ts:301` | `catalogImportPreview` | `insert catalog_import_rows` | Writes `business_id`, `batch_id` | Same decision record; preview binding per `EC-CNF-03` | M-13e |
| H-03 | `catalog-import.ts:401` | `summarizeBatch` (from commit) | `select catalog_import_rows` | `business_id`, `batch_id` | Bound to the commit decision record | M-13e |
| H-04 | `catalog-import.ts:499` | `catalogImportCommit` | `update catalog_import_batches` (claim) | `id`, `business_id`, `status` | Commit decision record, revalidated under `EC-CNF-02` | M-13e |
| H-05 | `catalog-import.ts:513` | `catalogImportCommit` | `select catalog_import_batches` | `id`, `business_id` | Commit decision record | M-13e |
| H-06 | `catalog-import.ts:529` | `catalogImportCommit` | `update catalog_import_rows` (skip) | `business_id`, `batch_id`, `row_number`, `status` | Commit decision record | M-13e |
| H-07 | `catalog-import.ts:542` | `catalogImportCommit` | `select catalog_import_rows` | `business_id`, `batch_id`, `status` | Commit decision record | M-13e |
| H-08 | `catalog-import.ts:567` | `catalogImportCommit` | `update catalog_import_rows` | **`id` only; no `business_id` predicate** | Add bound `business_id` and `batch_id` predicates (`EC-ISO-04`) | M-13e |
| H-09 | `catalog-import.ts:598` | `catalogImportCommit` | `update catalog_import_rows` | **`id` only** | Same as H-08 | M-13e |
| H-10 | `catalog-import.ts:607` | `catalogImportCommit` | `update catalog_import_rows` | **`id` only** | Same as H-08 | M-13e |
| H-11 | `catalog-import.ts:647` | `catalogImportCommit` | `update catalog_import_rows` (writes `resolved_by`) | **`id` only** | Same as H-08; per-row ledger write in the domain write's transaction (`EC-CNF-05`) | M-13e |
| H-12 | `catalog-import.ts:671` | `catalogImportCommit` | `update catalog_import_rows` | **`id` only** | Same as H-08 | M-13e |
| H-13 | `catalog-import.ts:681` | `catalogImportCommit` | `select count catalog_import_rows` | `business_id`, `batch_id`, `status` | Commit decision record | M-13e |
| H-14 | `catalog-import.ts:689` | `catalogImportCommit` | `update catalog_import_batches` (final status) | **`id` only** | Same as H-08 | M-13e |
| H-15 | `src/server-functions/parser-lease.ts:207` | `parserLeasePreview` | `rpc acquire_parser_preview_guard` (Section 8) | `p_business_id` from the resolved business | Decision record before the RPC; definer must re-verify the binding | M-13e |
| H-16 | `parser-lease.ts:224` | `parserLeasePreview` | `rpc issue_parser_upload_lease` | Business, guard token, object key | Same | M-13e |
| H-17 | `parser-lease.ts:315` | `parserLeaseConfirmAndDispatch` | `rpc confirm_parser_upload_lease` | Lease, business | Decision record, revalidated (`EC-CNF-02`) | M-13e |
| H-18 | `parser-lease.ts:330` | `parserLeaseConfirmAndDispatch` | `select parser_upload_leases` | `id`, `business_id` | Same | M-13e |
| H-19 | `parser-lease.ts:343` | `parserLeaseConfirmAndDispatch` | `rpc claim_parser_upload_lease` | Lease, business | Same | M-13e |
| H-20 | `parser-lease.ts:359` | `parserLeaseConfirmAndDispatch` | `rpc release_parser_preview_guard` | Business, guard token, lease | Same | M-13e |
| H-21 | `parser-lease.ts:366` | `parserLeaseConfirmAndDispatch` | `rpc complete_parser_upload_lease` | Lease, business | Same | M-13e |
| H-22 | `parser-lease.ts:373` | `parserLeaseConfirmAndDispatch` | `rpc fail_parser_upload_lease` | Lease, business | Same | M-13e |
| H-23 | `parser-lease.ts:391` | `parserLeaseConfirmAndDispatch` | `rpc mark_parser_upload_lease_dispatched` | Lease, business | Same | M-13e |

Domain writes inside the import commit (`create_catalog_product`, `catalog-import.ts:588`–`589`) go through the **caller** client, not service role. They change with the M-13d Catalog cut-over, so M-13e depends on M-13d. `catalogImportGetBatch` (`catalog-import.ts:728`) uses only the caller client. The inventory must be re-run at each family checkpoint (`SEC-Q-10`).

## 13. Remote-Targeting Rule (`SEC-Q-18`; Supabase Q-18)

For `SB-MIG-1.4` and all SB-P-1.12 work:

1. Every remote, target-mutating Supabase CLI operation (`db push`, `migration repair`, `link`, migration apply and equivalents) runs only through `node scripts/supabase-cli.mjs <test|production> …`, or `npm run supabase:test` / `npm run supabase:production`.
2. **Bare remote target-mutating `supabase` CLI invocations are prohibited.** `supabase/config.toml` `project_id` is the production ref `gysgzasfcjvtrgaigfyn`.
3. Production requires `CONFIRM_PRODUCTION=yes` plus a separate explicit authorization naming the command. Positive target identity verification is required before any mutation.
4. The repository default `project_id` is not changed as a substitute for these controls (Supabase Q-18). If Mission Control prefers neutralizing the default (`SEC-Q-18` alternative), that is a separate governed change.
5. Type regeneration (`types.ts`) uses the authorized test target only, through the guarded path, and records the target ref and migration head.

## 14. Combined Specialist Pre-Merge Checkpoint Map

Built from Supabase Q-22 and `SEC-Q-22`. These are advisory review gates. They do not replace Stage 19, and the reviewing rooms must stay review-only to preserve verifier eligibility.

| Group | Supabase review | Security review | Focus |
|---|---|---|---|
| M-01, M-02, M-03 | Grouped additive review, mandatory before merge (authority and constraint surfaces) | Required where they create authority surfaces (M-02 RLS and read contract) | Authority-table RLS and grants; `NOLOGIN` roles |
| M-04 | **Mandatory** | **Mandatory** (with M-09 to M-12) | Census, zero-unresolved contract, idempotent re-run |
| M-05, M-06 | Grouped (M-05); **mandatory** (M-06) | **Mandatory** | Serialization rows and epochs; verified principal; definer ownership and `search_path`; Section 4.1 contract |
| M-07, M-14 | Grouped additive | Required (audit-denial path; `SEC-Q-22` item 10) | Append-only guards; denial durability; bounded context; provenance widening |
| M-09, M-10, M-11, M-12 | **Mandatory** | **Mandatory**; exact DDL for M-10 and M-11 | Foreign-key re-pointing; Section 9 classification; Section 5 boundary; guards; tombstone; neutral hold |
| M-08 | **Mandatory** | **Mandatory** | Atomic consume; replay; lock order; import-revocation semantics; single preview authority |
| M-13a to M-13e (each) | **Mandatory**, including privileged server boundaries | **Mandatory** | Exact policies; direct-DML revocation; command boundary; handler binding (Section 12); family rules (Section 6); non-compliant definers (Section 8) |
| M-13d | **Mandatory** | **Mandatory** | Section 7 signature retirement; PLAN-Q-1 |
| M-20 | **Mandatory** | **Mandatory**, after G-7 | Storage RLS and scoping |
| M-18 | **Mandatory** | **Mandatory** | No remaining single-business inference; no authority dependency on `owner_id` |
| M-17 | **Mandatory** | **Mandatory**; exact grant and default-ACL delta | Only after G-6 |
| M-15 | Grouped | **Mandatory** | Reference Cost and margin projection on every path (Founder Decision Record 09) |
| M-16 | Grouped | Required where it creates authority surfaces | Invitations; transfer state machine; Owner invariant |
| M-19 | **Mandatory** | **Mandatory** | Only under a separate runtime authorization |
| Any other change to a definer function, executor grant, service-role handler, delete guard, serialization primitive or audit-denial path | Required | **Mandatory** (`SEC-Q-22` item 10) | — |

## 15. Evidence-Closure Matrix

Status vocabulary: OPEN, PARTIALLY EVIDENCED, CLOSED. Carried blockers are unchanged, because no new canonical evidence exists.

| ID | Blocker or finding | Exact evidence required | Evidence owner | Evidence source | Read-only provider access | Test or runtime environment | Exact closure condition | Status |
|---|---|---|---|---|---|---|---|---|
| EV-01 | CI and assurance (MC-171; `SUPA-RDY-07`; `SEC-Q-19`) — carried unchanged | Green Fast Gate and applicable Full Assurance on the exact checkpoint SHA, or a Mission Control record governing a substitute meeting the Supabase Q-19 technical minimum | Mission Control | GitHub Actions run records, or a Mission Control decision record | No | Yes (Full Assurance needs the test backend) | Mission Control records that Stage 15 checkpoint assurance is executable | OPEN |
| EV-02 | Test-bound runtime-verification environment — carried unchanged | An application environment bound to the approved test backend, with role fixtures, identified and accessible to the named human verifier | Mission Control or Founder | Environment record | Possibly (hosting) | Yes | Environment identity, binding and access recorded and accepted | OPEN |
| EV-03 | Test target identity and accessibility (`SUPA-RDY-01`) | Positive ref, name and environment classification of the test project; current provider visibility (the Supabase review found `drravyyauixltoihzmwo` not visible) | Mission Control or Founder | Provider console or API, read-only | Yes | — | Target positively identified, accessible and non-production | OPEN |
| EV-04 | Test migration-ledger alignment (`SUPA-RDY-01`; Supabase Q-15) | Remote version list compared with the 24 files; the recorded repairs (Section 11); no unexpected versions | Mission Control (collector authorized separately) | Guarded `migration list` against test | Yes | Test | Ledger equals the repository with only the recorded repairs | OPEN |
| EV-05 | Test schema and grant baseline | Objects, policies, grants and functions relevant to the package | Same | Read-only catalog queries on test | Yes | Test | Baseline recorded and compared with the repository | OPEN |
| EV-06 | Clean replay feasibility | A replay from zero reproducing exactly the Section 11 treatments | Builder under a migration mission | Test replay log | No (test only) | Test | Replay succeeds with only the recorded treatments | PARTIALLY EVIDENCED (exceptions identified from the repository; replay not run) |
| EV-07 | Actor census plan and threshold (`SUPA-RDY-02`) | Section 10 inventory plus a live census per column; threshold zero unresolved | Mission Control (collector) | Repository (this report) plus read-only queries | Yes (production census) | Production-shaped rehearsal | Census shows zero unresolved, or every orphan dispositioned under EV-08 | PARTIALLY EVIDENCED (repository inventory and threshold) |
| EV-08 | Orphan disposition rule | A separately authorized reconciliation rule consistent with the EIS (no reassignment or manufacture) | Mission Control, with Founder if Product Truth is touched | Decision record | No | — | Rule recorded, or census proves no orphans | OPEN |
| EV-09 | Cascade inventory and record classes (`SUPA-RDY-03`; `SEC-Q-3`) | Section 9 plus the live FK inventory; disposition of the 8 UNRESOLVED edges | Mission Control, with Founder for record classes | Repository; read-only catalog; record-class rule (`EC-LEG-01`) | Yes (live inventory) | — | Every edge RETAINED or EPHEMERAL with a cited source; zero UNRESOLVED | PARTIALLY EVIDENCED |
| EV-10 | Definer inventory and compliance (`SEC-Q-9`) | Section 8 plus live owner, security mode, `search_path` and `EXECUTE` per function, including `correct_transaction` | Mission Control (collector) | Repository; read-only catalog | Yes | — | Live state matches or is mapped to a replacing group | PARTIALLY EVIDENCED (repository complete) |
| EV-11 | Privileged handler inventory (`SEC-Q-10`) | Section 12; re-run at each family checkpoint | Builder at checkpoint; Mission Control acceptance | Repository | No | — | Mission Control accepts the inventory; zero unbound sites at each checkpoint | PARTIALLY EVIDENCED (repository complete) |
| EV-12 | M-06 physical read contract (`SUPA-RDY-04`) | Section 4.1 accepted at specialist pre-merge review | Supabase and Security rooms; Mission Control | Specialist record | No | Test (recursion and performance tests) | Contract accepted; tests specified | PARTIALLY EVIDENCED (proposal) |
| EV-13 | M-13d signature retirement (`SUPA-RDY-05`) | Section 7 accepted | Same | Specialist record | No | Test | Accepted | PARTIALLY EVIDENCED (proposal) |
| EV-14 | M-07 and M-08 allocation (`SUPA-RDY-06`; `SEC-Q-14`) | Sections 3, 4.2 and 4.3 accepted | Mission Control | Decision record | No | — | Accepted | PARTIALLY EVIDENCED (proposal) |
| EV-15 | Production-shaped rehearsal (`SUPA-RDY-08`; `SEC-Q-5`) | Rehearsal of M-04, M-09 to M-11 and every M-13 family on production-shaped, synthetic or anonymized data | Mission Control (environment); builder (execution) | Rehearsal record | Possibly | Rehearsal environment (does not exist; data-handling approval needed if production-derived) | Rehearsal passed for each group | OPEN |
| EV-16 | Lock and contention measurements; timeouts; abort criteria | Measured lock durations, chosen timeouts, maximum blocked window, abort rules | Builder in rehearsal | Rehearsal record | No | Rehearsal | Values recorded per family | OPEN |
| EV-17 | G-6 effective access (`SUPA-RDY-09`; `SEC-Q-8`) — carried unchanged | Effective grants, RLS, function `EXECUTE`, schema privileges, role memberships and `pg_default_acl` for every creator role | Mission Control or Founder | Read-only production catalog | Yes | — | Inventory recorded and diffed with the target | OPEN |
| EV-18 | Backup and PITR (`SUPA-RDY-10`; `SEC-Q-6`, `SEC-Q-17`) — carried unchanged | Status, retention, latest recovery point, restore method, operator, timestamp near the window | Mission Control, Founder or authorized provider operator | Provider console | Yes | — | Current evidence recorded for the execution window | OPEN |
| EV-19 | Provider and admin delete-guard interaction (`SEC-Q-12`) | Trigger and owner semantics tested across application `service_role`, lifecycle owner, migration owner and admin roles | Builder (test); Mission Control (provider facts) | Test record; provider documentation | Possibly | Test | All role paths behave as designed; no standing bypass | OPEN |
| EV-20 | Pooling and concurrency adequacy (`SEC-Q-11`) | Concurrency suites under the actual test pooling mode | Builder; verifier | Full Assurance records | No | Test | Suites pass with no post-revocation commit and no deadlock | OPEN |
| EV-21 | G-7 provider and storage (`SUPA-RDY-11`) — carried unchanged | Storage bucket and object policies; provider Auth-deletion behaviour against `RESTRICT` | Mission Control | Provider console | Yes | — | Evidence recorded before M-20 and any deletion runtime | OPEN |
| EV-22 | Identity-deletion runtime gate — carried unchanged | A separate runtime authorization plus EV-21 and legal inputs | Mission Control; Founder | Authorization record | — | — | Runtime authorization recorded | OPEN |
| EV-23 | Guarded CLI rule (`SEC-Q-18`) | Section 13 adopted into the `SB-MIG-1.4` mission rules | Mission Control | Migration mission record | No | — | Rule is binding in the activated mission | PARTIALLY EVIDENCED (rule recorded) |
| EV-24 | Production ledger presence | 24 versions through `20260902150000` (Supabase review Section 2) | — | Canonical specialist observation (MC-173 Section 6) | — | — | Accepted as ledger presence only | CLOSED (ledger presence only) |
| EV-25 | Delivery-repository drift (Q-20) | Review of the 2 Lovable commits in `starter-supab-shell` | Later delivery mission | Delivery repository | No | — | Reconciled in the delivery-sync mission; canonical types stay authoritative | OPEN (not a canonical-build blocker under the primary model) |
| EV-26 | Approved anonymous-workflow list (`SEC-Q-8`) | An explicit list of any approved anonymous workflow and its objects | Mission Control, Founder | Decision record | No | — | List recorded (possibly empty) | OPEN |
| EV-27 | PLAN-Q-1 Catalog disclosure interval | Mission Control choice of Option A or B (Section 2 note 3) | Mission Control | Decision record | No | — | Decision recorded | OPEN |
| EV-28 | Builder appointment and Implementation Authorization fields | Builders per workstream; paths; tests; environment; rollback; evidence | Mission Control | Implementation Authorization record | No | — | Recorded | OPEN |

**Before migration-plan activation (MC-173 Section 5.1):** EV-01 to EV-14, EV-23, EV-26 and EV-27. **Before production execution of affected groups (Section 5.2):** additionally EV-15 to EV-21. **M-19:** EV-22.

## 16. Status

Planning and read-only evidence only. No SQL, no migration file, no provider, test or production mutation, no implementation and no locked-artifact change. `SB-MIG-1.4` stays NON-EXECUTABLE; Implementation Authorization stays WITHHELD. Holds preserved: R-2 CLOSED / SATISFIED; ESC-1 OPEN T8; `22-§20-2` BLOCKED / IN SCOPE; G-6/T4 UNVERIFIED; professional legal, privacy and retention validation deferred; identity-deletion runtime NOT AUTHORIZED.
