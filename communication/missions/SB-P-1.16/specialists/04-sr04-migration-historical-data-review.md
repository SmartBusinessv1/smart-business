# SB-P-1.16 — Stage 7 SR-04 Migration and Historical Data Transition Specialist Review

**Assignment:** SR-04 — Migration and Historical Data Transition, under MC-183  
**Authority:** Source 18 v1.2 Stage 7 and §4.8; MC-183  
**Reviewer:** Claude subagent (general-purpose agent), model family Claude (Anthropic), fresh context, spawned and briefed by Claude Code (the Stage 2–4, 6 and 7 author) on 2026-10-17  
**Independence:** NOT INDEPENDENT — same provider and model family as the Stage 7 author, and briefed by that author. Separately attributable only. No prior SB-P-1.16 authorship in this context.  
**Baseline:** `main@abd5e0d547aabc315513e8901edecfd327edaaf9`  
**Status:** DRAFT SPECIALIST REPORT — READ-ONLY — FINDINGS ARE INPUTS, NOT AUTHORITY  
**Implementation Authorization:** WITHHELD — IMPLEMENTATION NOT AUTHORIZED.

## 1. Reviewer provenance and limits

- This review was produced by a fresh-context Claude subagent spawned and briefed by Claude Code, which authored the Stage 2–4, 6 and 7 records under review. The shared provider, model family and briefing are a material correlation. The report is separately attributable, not independent assurance.
- The review is documentary. No Supabase project, CLI, database connection, dashboard, provider, credential or production record was accessed. No SQL, migration, rehearsal or profile was executed. `.env*` files were not read.
- Scope is limited to migration and historical-data transition: Stage 7 draft §20.4.1, §20.4.3, §20.4.5, §20.7.1, §20.7.2, §20.7.3, §20.7.6, §20.7.7, Stage 6 findings SB16-B6-01, -06 and -07, and OQ-05. Balance algebra (SR-01), RLS policy design (SR-02), lock mechanics (SR-03), providers (SR-05) and legal retention periods (SR-06) are out of scope and are touched only where a migration consequence depends on them.
- Could not verify: the production and test-project migration ledgers; effective grants and default ACLs on either project; the current row count, size, write rate and shape of `transactions` and `transaction_correction_events` in production; whether historical credit-method sales or repayments recorded as `sale` exist; backup, PITR and restore readiness; the test project's current state (paused per Truth Pack Δ-06). All of these remain `UNVERIFIED — ACCESS REQUIRED`.
- Repository records about production data volume (for example SB-MIG-1.1 and SB-INC-2026-001) are point-in-time observations from before the current live period and are not treated as the current state.

## 2. Evidence inspected

| Path | Blob |
|---|---|
| `communication/missions/SB-P-1.16/claude-code/18-stage7-blueprint-sections-20-21-draft.md` | `1064ab18` |
| `communication/missions/SB-P-1.16/claude-code/19-stage7-engineering-review-report.md` | `a3b644f0` |
| `communication/missions/SB-P-1.16/claude-code/17-stage6-builder-review.md` | `c9a93566` |
| `communication/missions/SB-P-1.16/claude-code/02-stage2-populated-fctm.md` | `5ff7742f` |
| `communication/missions/SB-P-1.16/claude-code/04-stage2-mission-truth-pack.md` | `4a7bfe4f` |
| `communication/missions/SB-P-1.16/claude-code/09-stage3-founder-product-decision-record-draft.md` | `30b19a80` |
| `docs/phase-1-mission-blueprint/active/SB-P-1.16.md` | `8e79636f` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.12-EIS.md` | `c444f750` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.14-EIS.md` | `899a0fe1` |
| `docs/phase-1-mission-blueprint/implementation/SB-P-1.15-EIS.md` | `75dcf385` |
| `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md` | `0945bda6` |
| `docs/migration/README.md` | `810038e4` |
| `docs/migration/SB-MIG-1.1/01-infrastructure-audit-report.md` | `3ef43448` |
| `docs/migration/SB-MIG-1.1/02-database-comparison-report.md` | `703e7101` |
| `docs/migration/SB-MIG-1.1/03-migration-risk-register.md` | `324fa31d` |
| `docs/migration/SB-MIG-1.2/01-high-risk-resolution-report.md` | `03d4c529` |
| `docs/migration/SB-MIG-1.2A/08-production-data-mapping-plan.md` | `1cf95387` |
| `docs/incidents/SB-INC-2026-001-production-schema-loss.md` | `a10f2a17` |
| `communication/missions/SB-P-1.15/specialists/05-stage7-migration-data-transition-review.md` | `65611102` |
| `supabase/migrations/20260719102137_55a1dac6-b26a-47e6-aed3-305b9b20636b.sql` (file 2) | `b79ad8e7` |
| `supabase/migrations/20260719140000_f24b4d69-127e-4547-9fff-8ed9f31cc8fe.sql` (file 3) | `3cbdcde6` |
| `supabase/migrations/20260720142204_3786b8a1-e72a-4ae4-88b3-837b76ce1bf9.sql` (file 4) | `62f250f4` |
| `supabase/migrations/20260720142248_97de5be2-ef9f-4283-9318-9eb9f9a6cca1.sql` (file 5) | `56e097c1` |
| `supabase/migrations/20260723200622_c91f9e51-70ba-4b7c-b952-9e2ac9b4b0a8.sql` (file 7) | `ac8527f4` |
| `supabase/migrations/20260727000000_reconcile_default_grants.sql` (file 12) | `4e2d3fa1` |
| `supabase/migrations/20260830120000_sb_rel_1_10_1_11_gate2a_c1_inventory_anon_privilege_hardening.sql` (file 21) | `027c482a` |
| `supabase/migrations/20260902140000_sb_ops_prod_sync_1_0_instr1_7_mango_milma_milk_repair.sql` (file 23) | `dd6b2078` |
| Remaining 17 files in `supabase/migrations/` (grant and naming survey only) | per `git ls-tree` at baseline |
| `supabase/verification/sb-p-1-11-impl-1-stage1-privilege-check.sql` | `cd09cfe5` |
| `supabase/verification/sb-p-1-11-impl-1-concurrency-check.sql` | `31ee15c2` |
| `supabase/verification/sb-p-1-11-impl-1-fingerprint-drift-check.sql` | `09f3bb5b` |
| `src/integrations/supabase/types.ts` | `ac1d0a42` |
| `src/integrations/supabase/transactions.ts` | `fe12c702` |
| `.github/workflows/full-assurance.yml` | `464b3e9c` |

## 3. Method

- Read the Stage 7 draft sections in scope and the Stage 6 findings SB16-B6-01, -06 and -07, and compared each proposed migration class (M16-0 to M16-5) with the locked upstream migration requirements: SB-P-1.14 `EIS14-MIG-01` to `-06`, `EIS14-LDG-04`, `EIS14-CMD-02`, `-03`; SB-P-1.12 `EIS-ISO-03` and `EIS-ESC-08`; SB-P-1.15 `EIS15-TZ-01`, `-07` and `EIS15-MIG-01` to `-07`.
- Surveyed all 24 files in `supabase/migrations/` for naming, version order, grant and revoke handling, default-privilege statements, data-mutating statements and foreign-key delete actions on the transactions family.
- Read `docs/migration/README.md` and the SB-MIG-1.1, SB-MIG-1.2 and SB-MIG-1.2A records for known ledger drift, cross-platform data import and environment differences, and SB-INC-2026-001 for operator-safety lessons.
- Compared the generated `transactions` types and the `correct_transaction` signature in `types.ts` with the hand-written `TransactionType` and `PaymentMethod` unions in `transactions.ts`.
- Assessed the three historical-data risks named in the assignment from repository text and Founder decision `16:FPDR-2` only. No data was accessed.
- Checked every cited FCTM row ID against the canonical FCTM.

## 4. Findings

### SR04-01 — The target migration ledger and creator-role ACL baseline for the transactions family are not reconciled, so M16 rehearsal cannot yet be representative

- **Severity:** HIGH
- **Evidence:** `docs/migration/README.md` (`810038e4`) line 59 (file 11 production status `UNKNOWN`) and line 60 (file 21 production status `UNVERIFIED`); `docs/migration/SB-MIG-1.1/01-infrastructure-audit-report.md` (`3ef43448`) line 68, Finding INF-1: file 3 re-creates `public.transactions` with no guard and was never applied; `docs/migration/SB-MIG-1.2/01-high-risk-resolution-report.md` (`03d4c529`) line 25: file 3 deliberately excluded when the transactions domain was applied to the Team LIPS project; `docs/migration/README.md` lines 84–88: the test project's ledger was repaired for the production-specific file 23; `20260727000000_reconcile_default_grants.sql` (`4e2d3fa1`) lines 1–17: production objects were created through platform tooling with `supabase_admin` default ACLs while migrations run as `postgres`, whose defaults differ; SB-P-1.14 EIS (`899a0fe1`) lines 359–360: live effective access and the target `schema_migrations` ledger are `UNVERIFIED — ACCESS REQUIRED`.
- **Affected FCTM IDs:** `14-§5-1`, `14-§5-2`, `BP-§10.5-W1`, `BP-§6.2-1`
- **Affected Stage 7 draft sections:** §20.7.1, §20.7.2 (M16-0, M16-1), §20.5 (RLS and database privileges row)
- **Related Stage 6 findings:** SB16-B6-01, SB16-B6-08, SB16-B6-26
- **Engineering implication:** The transactions family is the one table family where repository history is known not to replay verbatim (file 3), and where the production and test projects may differ in ledger content and in the creator role of the existing objects. A rehearsal on the test project that "asserts ACL, RLS and the effective-access baseline" (§20.7.2 M16-1) would assert the test project's baseline, not production's. An additive change to `transactions` can then pass rehearsal and still behave differently on production (for example, inherited `supabase_admin` default grants on a new object).
- **Required correction or evidence obligation:** §20.7.1 and §20.7.2 should add, as an explicit M16-0 prerequisite, a separately authorized read-only verification of both projects' migration ledgers, the owner and creator role of every transactions-family object, and the default ACLs of every real creator role (`EIS-ISO-03`; SB-P-1.12 `EIS-ENV-01`). Rehearsal evidence must state which creator role ran the rehearsal and must compare its ACL result with the verified production baseline, not only with the test project. File 3 must be named as excluded from any replay-based rehearsal.
- **Uncertainty:** The SB-P-1.14 M14-1 mission may resolve the ledger and ACL questions before M16-1 is considered. If its evidence is recorded and still current, this obligation reduces to citing it.
- **Trigger screen:** none. This is an engineering evidence gap, not a Product Truth conflict.

### SR04-02 — The stated revocation scope ("DML") is narrower than the privileges the repository actually grants, and new columns on an existing table have no "creating migration"

- **Severity:** HIGH
- **Evidence:** Draft §20.5 line 186: "Revoke `anon`, `PUBLIC` and direct `authenticated` DML in the same migration that creates each object". `20260727000000_reconcile_default_grants.sql` lines 13–17 (the `postgres` defaults already include `TRUNCATE`, `REFERENCES`, `TRIGGER` and `MAINTAIN` for `anon`, `authenticated` and `service_role`), lines 35–41 (`GRANT ALL` on `transactions` and `transaction_correction_events` to `anon`, `authenticated`, `service_role`), lines 51–55 (default `GRANT ALL ON TABLES`); `20260830120000_…_inventory_anon_privilege_hardening.sql` (`027c482a`) lines 113–131: the later correction removes only the `anon` defaults, and `authenticated` defaults are "unchanged". SB-P-1.12 EIS (`c444f750`) line 227 (`EIS-ISO-03`); SB-P-1.14 EIS line 147 (`EIS14-CMD-03`); Stage 6 E-04 to E-06.
- **Affected FCTM IDs:** `BP-§6.2-1`, `14-§17-1`, `14-§22-11`, `14-§20-10`
- **Affected Stage 7 draft sections:** §20.5, §20.4.11, §20.7.2 (M16-1 to M16-4)
- **Related Stage 6 findings:** SB16-B6-07, SB16-B6-08
- **Engineering implication:** `TRUNCATE` is not governed by row-level security, and `REFERENCES` and `TRIGGER` are not DML. A revocation limited to DML leaves those privileges on every new SB-P-1.16 table through `authenticated` defaults. Separately, M16-1 adds columns to an existing table: there is no "migration that creates the object", and new columns inherit whatever table-level `INSERT` and `UPDATE` grants and Owner `UPDATE` policy are then in force. If M16-1 ran before `EIS14-CMD-03` closure were complete and verified, the participant reference and `due_on` would be directly writable by an Owner client with no correction event, which is the SB16-B6-07 bypass applied to the new credit fields.
- **Required correction or evidence obligation:** §20.5 should state the revocation as "all privileges" (including `TRUNCATE`, `REFERENCES`, `TRIGGER` and `MAINTAIN` where the server version has it) for `PUBLIC`, `anon` and `authenticated` on every new object, followed by narrow grants, consistent with `EIS15-SEC-01`. M16-1 should carry a fail-closed precondition, checked in the same migration, that `anon` and `authenticated` hold no table-level `INSERT`, `UPDATE`, `DELETE` or `TRUNCATE` on `transactions` and no write privilege on `transaction_correction_events`, and that no Owner `UPDATE` policy remains. The effective-access inventory needs a transactions-family script; the existing `supabase/verification/` precedent (`cd09cfe5`) covers catalog tables only and is written for the test project.
- **Uncertainty:** SR-02 owns RLS and grant design; the precise privilege list belongs to the EIS. The finding concerns the migration-time ordering and completeness, which belong here.
- **Trigger screen:** none.

### SR04-03 — M16-1 is labelled "Additive" but contains live-table operations with different locking and transaction semantics, and unattributed history can still be erased by existing cascades

- **Severity:** MEDIUM
- **Evidence:** Draft §20.7.2 line 250 (M16-1: "Additive; pre-data rollback by drop"); §20.4.1 lines 75–82. SB-P-1.14 EIS line 271 (`EIS14-MIG-04`: live-safe index builds, non-transactional DDL, invalid-index recovery, lock window from real size) and line 369 (table sizes and lock window `UNVERIFIED`); SB-P-1.12 EIS line 404 (`EIS-ESC-08`: new foreign keys `NOT VALID` then validated; old cascading keys dropped). `20260719102137_…sql` (`b79ad8e7`) lines 3–4: `transactions.business_id` and `creator_id` are `ON DELETE CASCADE` (the latter to `auth.users`); `20260720142204_…sql` (`62f250f4`) lines 25–26: correction events cascade from `transactions`.
- **Affected FCTM IDs:** `14-§5-1`, `BP-§10.5-W1`, `3-§9-12`, `14-§5-13`
- **Affected Stage 7 draft sections:** §20.4.1, §20.4.5, §20.7.2 (M16-0, M16-1)
- **Related Stage 6 findings:** SB16-B6-01, SB16-B6-06
- **Engineering implication:** Adding a nullable column without a default is cheap, but the composite reference also needs a foreign key to the SB-P-1.12 participant record, an index for balance reads, and probably a check that restricts the reference and `due_on` to credit-bearing rows. Each takes locks on a live, written table; a concurrent index build cannot run inside the same transaction as the in-migration revocation and precondition checks of SR04-02. The draft does not say what happens to a credit row when its participant is deleted or tombstoned; a cascading or nulling delete action would silently change balances or history. Until `EIS-ESC-08` removes the existing cascades, deleting an auth user or a business still deletes historical sales and their correction events, including unattributed credit that `16:FPDR-2` requires to stay visible.
- **Required correction or evidence obligation:** §20.7.2 should split M16-1 into ordered steps with stated transaction boundaries (column additions and hardening; foreign key added `NOT VALID` then validated; index built under `EIS14-MIG-04`; checks added `NOT VALID` then validated), and cite `EIS14-MIG-04` and `EIS14-MIG-05` explicitly. §20.4.1 should state a non-destructive delete action for the participant reference (restrict, with tombstoning handled by SB-P-1.12). M16-0 should list SB-P-1.12 `EIS-ESC-08` cascade containment as a prerequisite. If the separate link-table form offered in §20.4.1 is preferred, the EIS should record that it avoids altering the live `transactions` table; this review does not choose between the forms.
- **Uncertainty:** The participant record's key shape and deletion model are SB-P-1.12's; the EIS may already resolve them. Lock duration depends on table size, which is unknown.
- **Trigger screen:** none.

### SR04-04 — A second widening of the governed transaction commands after M14-1 is not tied to the function-identity, type-synchronization and compatibility obligations

- **Severity:** MEDIUM
- **Evidence:** Draft §20.7.2 line 250 (M16-1 widens create, correct, attribute, set due date and record allocated repayment). SB-P-1.14 EIS line 147 (`EIS14-CMD-03`: superseded signatures and overloads dropped or revoked; verification inspects exact signatures), line 268 (`EIS14-MIG-01` already widens the create and correction commands), line 273 (`EIS14-MIG-06`: recorded type-generation procedure; hand-written unions, callers and UI updated together; old-app/new-schema compatibility). `types.ts` (`ac1d0a42`) lines 1166–1206: `payment_method` and `transaction_type` are typed `string`; lines 1310–1321: the legacy `correct_transaction` signature. `transactions.ts` (`fe12c702`) lines 7 and 9: the hand-written `TransactionType` and `PaymentMethod` unions are the only typed constraint in the application.
- **Affected FCTM IDs:** `BP-§6.2-1`, `14-§20-10`, `14-§17-1`
- **Affected Stage 7 draft sections:** §20.7.2 (M16-1, rollback column), §20.7.6
- **Related Stage 6 findings:** SB16-B6-07
- **Engineering implication:** M16-1 replaces command identities that M14-1 will have just created. Each widening that adds parameters creates a new function identity; any identity left with `EXECUTE` is an alternate write path that `EIS14-CMD-03` forbids. Because the generated types carry no `CHECK` information, a change in allowed values (for example which payment methods a `repayment` row may carry) is invisible to the type generator and is caught only by the hand-written union. "Pre-data rollback by drop" is ambiguous for commands: dropping the M16 command versions must restore the M14-1 identities and grants, never the legacy `correct_transaction`.
- **Required correction or evidence obligation:** M16-1 should carry forward `EIS14-CMD-03` (exact-signature and overload inventory after the migration) and `EIS14-MIG-06` (recorded generation procedure; `PaymentMethod` and `TransactionType` unions and callers updated with the schema; old-app/new-schema compatibility window). The rollback column should define "pre-data" for M16-1 as "before any non-null participant reference or `due_on` value and before any M16 command has committed", and should state that command rollback restores the M14-1 identities.
- **Uncertainty:** If the EIS merges the M16 command changes into M14-1's command set before M14-1 executes, the second widening disappears; that is a cross-mission coordination choice for Mission Control.
- **Trigger screen:** none.

### SR04-05 — Historical repayments recorded as `sale` have no stated treatment once historical credit sales are attributed

- **Severity:** HIGH
- **Evidence:** Draft §20.4.5 lines 108–113 (profile only); `16:FPDR-2` (`30b19a80`) lines 61–80: after attribution the credit sale "may contribute to the correct customer's authoritative outstanding balance, accounting for all supported repayments, corrections and reversals", and "missing or uncertain financial facts must remain clearly disclosed rather than fabricated"; Stage 6 SB16-B6-06 (`c9a93566`) lines 108–114 ("Such rows would be double revenue"); SB-P-1.14 EIS line 134 (`EIS14-LDG-04`), line 137 (`EIS14-TOT-01`: `sale` rows count as sales), line 146 (`EIS14-CMD-02` does not say whether a correction may change a `sale` into a `repayment`).
- **Affected FCTM IDs:** `14-§22-1`, `3-§9-12`, `14-§5-2`, `BP-§10.5-W2`
- **Affected Stage 7 draft sections:** §20.4.5, §20.4.4 (balance consequence only), §20.7.2 (M16-5)
- **Related Stage 6 findings:** SB16-B6-06
- **Engineering implication:** Before a `repayment` type existed, a merchant who received money against an earlier credit sale could only record it as a new `sale` (usually cash or UPI). After the Owner attributes the original credit sale, the balance shows it as fully outstanding, while the money already received stays counted as sales revenue. The result is an overstated customer balance, a possible false overdue state or threshold warning, and inflated sales totals. Recording a new `repayment` now would correct the balance but leave the duplicate revenue. Nothing in the draft, `EIS14-CMD-02` or `16:FPDR-2` says whether an Owner may correct such a historical `sale` into a linked `repayment`. Automatic detection is ruled out (`EIS14-LDG-04`; `16:FPDR-2`).
- **Required correction or evidence obligation:** §20.4.5 should (a) require the attribution preview to disclose that repayments made before repayment recording existed may not be reflected, consistent with the `16:FPDR-2` disclosure clause; (b) state whether an Owner-initiated, audited correction from a historical `sale` to a `repayment` linked to an attributed target is within the approved behaviour, and if that is not clearly covered, route the question to Mission Control rather than design it; (c) keep any such correction strictly per row, Owner-confirmed and never suggested by matching.
- **Uncertainty:** The population may be zero. SB-INC-2026-001 (`a10f2a17`) line 19 records production holding zero rows during the pre-launch period; current volume after go-live is unknown (OQ-05).
- **Trigger screen:** possible T3 for Mission Control screening. An Owner path that converts a historical `sale` into a `repayment` would be behaviour not stated in `16:FPDR-2` or the SB-P-1.14 EIS. This review does not fire the trigger; it asks Mission Control to screen it. Rows `14-§22-1`, `BP-§10.5-W2`.

### SR04-06 — Historical correction history is not reliable audit evidence, and its JSON snapshots predate the new fields

- **Severity:** MEDIUM
- **Evidence:** `20260720142204_…sql` lines 4–13 (Owner `UPDATE` policy on `transactions`), lines 22–35 (`original_values` and `updated_values` as JSON; `notification_status` default `pending`), lines 25–26 (cascade from `transactions`); `20260720142248_…sql` (`56e097c1`) lines 3–12 (client-insertable correction events); `docs/migration/SB-MIG-1.2A/08-production-data-mapping-plan.md` (`1cf95387`) lines 68–70 (JSON audit columns preserved verbatim while `edited_by` was remapped to new user IDs during the cross-platform import); SB-P-1.15 specialist report (`65611102`) line 72 (legacy `pending` is not a replay selector).
- **Affected FCTM IDs:** `14-§5-13`, `14-§22-11`, `14-§17-1`, `15-§10-5`
- **Affected Stage 7 draft sections:** §20.4.5, §20.4.11, §20.7.2 (M16-1, M16-5)
- **Related Stage 6 findings:** SB16-B6-07
- **Engineering implication:** Until `EIS14-CMD-03` closure, a correction event may describe no real change and a row may have been changed with no event. Snapshot JSON from before M16-1 has no participant or `due_on` keys, and imported snapshots may carry pre-remap identifiers. A reader that treats a missing key as "null was set", derives attribution from event JSON, or treats legacy `pending` as unsent could misstate history or trigger a customer message about an old correction.
- **Required correction or evidence obligation:** The EIS should mark correction events written before the closure point as legacy, with unverified provenance; require readers to treat a missing key as "not recorded"; forbid deriving balances, attribution or due dates from event JSON; and state that no SB-P-1.16 communication path selects legacy `pending` events. M16-5's "no backfill" should explicitly include correction events: none is rewritten, normalized or re-keyed.
- **Uncertainty:** The number of legacy events may be very small; the risk is in reader logic, not volume.
- **Trigger screen:** none.

### SR04-07 — The `due_on` lifecycle under correction and its migration-time constraint are not defined

- **Severity:** MEDIUM
- **Evidence:** Draft §20.4.3 lines 91–96 (optional `due_on` on credit-bearing targets; no default); §20.4.4 line 103 (a correction can move a sale away from `credit`); SB-P-1.15 EIS (`75dcf385`) line 217 (`EIS15-TZ-01`: no default, no `NOT NULL`, no backfill) and line 223 (`EIS15-TZ-07`: Ledger dates never reinterpreted).
- **Affected FCTM IDs:** `14-§5-6`, `BP-§10.5-A1`
- **Affected Stage 7 draft sections:** §20.4.3, §20.7.2 (M16-1)
- **Related Stage 6 findings:** SB16-B6-03
- **Engineering implication:** If M16-1 enforces "`due_on` only on credit-bearing rows" as a table check, a governed correction from `credit` to `cash` fails unless the same command clears `due_on`; if it is not enforced, a non-credit row can carry a stale due date that some reader later treats as meaningful. Historical rows will all have a null `due_on` and therefore never show as overdue, which is consistent with `16:FPDR-5` but should be stated so that rehearsal can assert it.
- **Required correction or evidence obligation:** §20.4.3 should state what a correction does to `due_on` when a target stops being credit-bearing (cleared in the same audited correction, with the prior value in the event) and whether the restriction is a table check (added `NOT VALID` then validated) or a command rule. M16 rehearsal should assert that no historical row acquires a `due_on` and that no historical row becomes overdue.
- **Uncertainty:** The predicate and timezone edges are SR-01 and SR-03 matters; only the column lifecycle is assessed here.
- **Trigger screen:** none.

### SR04-08 — M16-4's "parity test against the previous reader output" cannot serve as its acceptance or rollback oracle

- **Severity:** MEDIUM
- **Evidence:** Draft §20.7.2 line 253 (M16-4: replace in place with parity test); §20.4.4 lines 98–106 (unattributed credit reported separately; new measures); SB-P-1.15 EIS line 379 (`EIS15-MIG-02`: SB-P-1.15 owns its M7 read-only roles, views and aggregation functions), line 516 (`EIS15-NG-02`: authoritative customer balances are SB-P-1.16's); Stage 6 E-13 (`getDailyTotals` sums every `sale`).
- **Affected FCTM IDs:** `3-§9-12`, `14-§22-1`
- **Affected Stage 7 draft sections:** §20.7.2 (M16-4), §20.7.3
- **Related Stage 6 findings:** SB16-B6-04, SB16-B6-21, SB16-B6-22
- **Engineering implication:** No customer-balance reader exists today, and the new definition is meant to differ from any earlier reader output (unattributed credit separated; collected money distinguished from credit sales). A parity test would either fail by design or be weakened until it passes. M16-4 also replaces objects that SB-P-1.15's migration group M7 creates, so ownership of the replaced objects and of their rollback is cross-mission.
- **Required correction or evidence obligation:** Replace "parity" with an expected-difference oracle: fixed fixtures whose correct outputs under the new definition are stated in advance, plus an assertion that existing sales and purchase totals under `EIS14-TOT-01` are unchanged. State which mission owns the replaced SB-P-1.15 objects and how rollback re-points readers.
- **Uncertainty:** SB-P-1.15 may ship no credit reader before M16-4, in which case the "previous output" is empty and the issue reduces to wording.
- **Trigger screen:** none.

### SR04-09 — Rehearsal and rollback omit backup and PITR readiness, the historical-totals invariant and version-order discipline

- **Severity:** MEDIUM
- **Evidence:** SB-P-1.14 EIS line 272 (`EIS14-MIG-05`: rehearsal asserts historical sale and purchase classifications and totals unchanged, zero duplicate-credit creation and backup/PITR/restore readiness) and line 362 (backup readiness `UNVERIFIED`); SB-P-1.15 EIS line 384 (`EIS15-MIG-07`) and line 406 (`EIS15-VER-09`: PITR restore then resume). `supabase/migrations/`: files 1–11 use generated UUID names, and files 12–24 use descriptive mission-scoped names; files 7 and 23 mutate data. SB-P-1.14 EIS line 264 and SB-P-1.15 EIS line 378 fix an upstream order that file version order must respect.
- **Affected FCTM IDs:** `14-§22-1`, `14-§22-11`, `BP-§10.5-W1`
- **Affected Stage 7 draft sections:** §20.7.2 (all rows), §20.7.3, §20.7.6
- **Related Stage 6 findings:** SB16-B6-01, SB16-B6-26
- **Engineering implication:** The draft's rehearsal column cites the `EIS14-MIG-05` pattern only for ACL and RLS. Forward-fix after data exists depends on a restorable backup, which is unverified. Supabase applies files in version order, so if SB-P-1.16 files are authored while upstream files are still pending, a version earlier than an upstream file would apply out of dependency order. The repository precedent of data-mutating and environment-specific migrations (files 7 and 23) shows that "no historical mutation" has to be checked, not assumed.
- **Required correction or evidence obligation:** Each M16 class should cite the full `EIS14-MIG-05` assertion set, including unchanged historical totals, zero duplicate credit, no historical mutation and verified backup/PITR/restore readiness before any production consideration. §20.7.2 should require descriptive mission-scoped file names (the files 12–24 convention), versions later than every upstream dependency file at the time of authorization, and a check that no M16 file contains data-mutating statements against existing rows.
- **Uncertainty:** These may be intended to come in through "the `EIS14-MIG-05` pattern"; the draft does not say so.
- **Trigger screen:** none.

### SR04-10 — The OQ-05 profile is unplanned, overlaps an existing SB-P-1.14 evidence gap, and its recommended timing is not justified

- **Severity:** MEDIUM
- **Evidence:** Draft §21.2 line 741 (OQ-05: "Recommend authorizing it before the migration specialist review concludes"); §20.4.5 line 113; §20.6 SB16-B6-06 row (verification "MIG rehearsal"); SB-P-1.14 EIS line 361 (production transaction-type distribution and the credit-method sale population are `UNVERIFIED — ACCESS REQUIRED` for `EIS14-MIG-05`); `docs/migration/README.md` lines 59–60 (pending, separately authorized read-only ledger and grant verification); SB-INC-2026-001 lines 19 and 35 (destructive SQL ran in a production dashboard tab left open from read-only audit queries).
- **Affected FCTM IDs:** `14-§22-1`, `3-§9-12`, `BP-§10.5-W1`
- **Affected Stage 7 draft sections:** §20.4.5, §20.6, §20.7.1, §21.2, §21.3
- **Related Stage 6 findings:** SB16-B6-06
- **Engineering implication:** Three separate needs call for read-only production evidence (OQ-05; SB-P-1.14 `EIS14-MIG-05` data population; the README ledger and grant verification). Planned separately, they mean three production sessions, each with the operator risk shown in SB-INC-2026-001. The profile informs the EIS design of §20.4.5 and the M16-1 lock plan; it does not have to precede this documentary review. M16-5 contains no migration, so "MIG rehearsal" cannot verify SB16-B6-06.
- **Required correction or evidence obligation:** Replace the OQ-05 recommendation with "authorize before the EIS fixes §20.4.5 and the M16-1 lock plan". Adopt a written plan (Section 6A proposes one) and offer Mission Control the option of a single authorized read-only session that also covers the SB-P-1.14 data-population item, without widening scope beyond aggregates. Change the SB16-B6-06 verification entry to "OQ-05 profile evidence; FA attribution tests; specialist review".
- **Uncertainty:** Mission Control may prefer separate sessions for clearer authority; bundling is offered as an option, not recommended as a decision.
- **Trigger screen:** none.

### SR04-11 — No production-shaped rehearsal environment is identified

- **Severity:** LOW
- **Evidence:** Draft §20.7.1 lines 234–241 (local, paused test project, production with no access, no provider sandbox); SB-P-1.14 EIS line 271 (`EIS14-MIG-04`: index strategy chosen from real size and activity) and line 369; `docs/migration/README.md` lines 84–88 (the test project intentionally lacks production data and identities).
- **Affected FCTM IDs:** `BP-§10.5-W1`
- **Affected Stage 7 draft sections:** §20.7.1, §20.7.5 (MIG tier)
- **Related Stage 6 findings:** SB16-B6-26
- **Engineering implication:** The test project can rehearse structure and privileges but not lock duration, validation time or data-shape effects on the live `transactions` table.
- **Required correction or evidence obligation:** §20.7.1 should record the need for either production size and activity metrics (from the OQ-05-style read-only session) or a restored, isolated snapshot for timing rehearsal, each separately authorized, and state that neither is assumed to exist.
- **Uncertainty:** If production volume is small, the test project may be adequate; that cannot be known without data.
- **Trigger screen:** none.

## 5. Dissent from the Stage 7 draft

- **OQ-05 timing (§21.2).** The draft recommends authorizing the profile "before the migration specialist review concludes". This review dissents: a documentary specialist review should not wait for production data access, and tying them together creates pressure to access production early. The profile should be authorized before the EIS fixes §20.4.5 and the M16-1 lock plan (SR04-10).
- **M16-1 classification (§20.7.2).** "Additive" understates the live-table locking, validation and index-build work and the command-identity replacement in that class (SR04-03, SR04-04).
- **SB16-B6-06 verification approach (§20.6).** "MIG rehearsal" cannot verify a finding whose migration class (M16-5) is intentionally empty (SR04-10).
- **§21.5 "No T3 trigger fired".** No dissent on the T7 and T8 screens or the "held is not T8" treatment within this domain. On T3, this review asks Mission Control to screen one possible behaviour gap (SR04-05: correcting a historical `sale` into a `repayment`). This review does not fire the trigger.
- **§20.7.2 M16-5 (no backfill, no reinterpretation, no bulk attribution).** Agreed. It matches `EIS14-LDG-04` and `16:FPDR-2`.

## 6. Infeasible, unsafe, omitted, narrowed or reassigned rows

None found. No `IN SCOPE` row reviewed in this domain is infeasible or unsafe on the evidence available, and none is omitted, narrowed or reassigned. SR04-05 is a possible T3 behaviour gap for Mission Control screening, not an infeasibility.

## 6A. Proposed read-only data-access plan for OQ-05 (proposal only — not executed)

**Status: NOT AUTHORIZED.** This is a proposal for Mission Control. It authorizes nothing, contains no executable query, and must not be acted on without a new explicit authorization.

### 6A.1 Purpose

Establish, with aggregates only, whether historical credit-method sales, possible repayments recorded as `sale`, and legacy correction history exist in production at a scale that changes the EIS design of §20.4.5 (attribution and disclosure), SR04-05 (historical repayment treatment) and the M16-1 lock plan. The profile is evidence for design. It never selects, flags, attributes or changes any row.

### 6A.2 Questions to answer (aggregate measures, described in prose)

1. Total `transactions` rows; counts by `transaction_type`; earliest and latest `transaction_date` and `created_at`, reported to month precision.
2. Number of `sale` rows whose current `payment_method` is `credit`, and their share of all `sale` rows.
3. Distribution of businesses by their count of credit-method sales, in bands (none, 1–5, 6–20, 21–100, more than 100), reported as the number of businesses per band.
4. Month or quarter histogram of credit-method sale dates, across all businesses combined.
5. Amount distribution of credit-method sales as a banded histogram across all businesses combined. No per-business sums, no exact totals.
6. Distribution of the number of distinct normalized `party_name` values among credit-method sales per business, in bands, to estimate the Owner attribution workload. No names leave the database.
7. Share of `sale` rows, split by credit and non-credit payment method, whose `description` or `notes` contains any term from a fixed term list approved in the authorization (English, Malayalam and Manglish repayment wording). Also, the number of businesses with at least one such row, in bands. The list is fixed before execution and is not tuned on the results. The measure is recorded as low precision and is never used to identify rows.
8. Number of non-credit `sale` rows whose normalized `party_name` equals the `party_name` of an earlier credit-method sale in the same business, as a total and as a share. This is indicative only.
9. Correction history: total `transaction_correction_events`; number linked to credit-method sales; number where `payment_method` changed to or from `credit`, or `transaction_type` changed; number whose `edited_by` differs from the business's current Owner; number with `notification_status` `pending`.
10. Audit-bypass indicator: number of `transactions` rows whose `updated_at` is later than both `created_at` and the latest correction event for that row. This counts possible direct updates without an event (SB16-B6-07). It is a count only.
11. Lock-planning metrics for `transactions` and `transaction_correction_events`: row count, table and index size, and an average daily insert rate over the last 90 days.

### 6A.3 Data minimization

- Only aggregate results leave the database. No row, party name, description, note, business identifier, user identifier or exact amount is exported, copied or displayed.
- Any count below a suppression threshold (for example fewer than 5 businesses or fewer than 10 rows) is reported only as "fewer than threshold". Bands are chosen so that no single business can be identified.
- Text matching (questions 6–8) runs inside the database. The term list, not the matched text, is the only text that appears in the output.
- No per-business output is produced. Bands are counts of businesses, not lists.

### 6A.4 Environment

- **Preferred:** a point-in-time restore of production into a separate, isolated, non-public project with no application, no Auth redirect configuration and no inbound application traffic. The project has a name that cannot be confused with production and is deleted after use. This preference rests on three reasons: no session connects to the live production primary; the results have a fixed as-of instant; and the SB-INC-2026-001 failure mode (a production tab left open) is avoided.
- **Fallback:** a read replica of production, accessed through a dedicated role that is read-only at the database level. The fallback carries live-infrastructure exposure and result drift.
- **Not acceptable:** an interactive SQL editor session on the production primary.
- **Assumptions avoided:** this plan does not assume that PITR, restore capacity, a replica or the required plan tier exists. Each is `UNVERIFIED — ACCESS REQUIRED`, and the authorization must establish them. A restore creates a full copy of merchant data. Its privacy treatment needs the legal and privacy review (SR-06 domain) before use.

### 6A.5 Who executes

A human operator, or a separately authorized actor, named in the authorization. The Stage 7 author (Claude Code) must not execute it alone. A second named person reviews the aggregate output for suppression and identifiability before it is released to any record. The executing role has no write, DDL or `service_role` capability. Its read-only status is confirmed and recorded before the first query.

### 6A.6 Approvals required

- A new, explicit Mission Control instruction, with Founder consent because merchant financial data is read. By analogy with the `docs/migration/README.md` default-deny rule, the instruction names:
  - the exact question list in 6A.2;
  - the target environment and project identity;
  - the actor and the reviewer;
  - credential handling;
  - verified prerequisites (restore or replica availability; a read-only role);
  - output location, suppression and review;
  - retention and deletion;
  - the execution window;
  - the reporting workflow.
- Source 18 §9.1: a Product Mission plans and never executes production or migration acts. The profile therefore runs outside SB-P-1.16 stage authority, under its own instruction, like the separately authorized read-only verifications named in `docs/migration/README.md` lines 59–60.
- Any missing element, contradictory evidence or unclear target leads to a stop report, not to execution.

### 6A.7 Output handling

- The repository is **public**. No merchant name, business identifier, user identifier, party name, exact amount or small-cell count may be committed.
- The repository already contains store names and partial business identifiers in `docs/migration/SB-MIG-1.2A/08-production-data-mapping-plan.md`; that precedent must not be repeated.
- Full aggregate results go to a restricted, non-public Mission Control record named in the authorization.
- The public mission record may carry only a banded, suppressed summary, for example "credit-method sales: fewer than threshold" or "band 21–100". Mission Control approves that summary before publication.

### 6A.8 Retention and deletion

- No row-level extract is created. If an intermediate artifact is created despite this, it is deleted in the same session, and the deletion is recorded.
- The restored project is deleted within a period that the authorization sets. Deletion evidence (project identity and deletion time) goes into the restricted record.
- Temporary credentials and roles are revoked at the end of the session.
- The retention of the restricted aggregate record follows the U-08 outcome; this plan sets no legal period.

### 6A.9 Stop conditions

Stop and report to Mission Control without continuing if any of these occurs:

- the target project identity cannot be confirmed by more than one independent indicator;
- the session role shows any write, DDL or elevated capability;
- the environment is, or may be, the production primary;
- the as-of instant cannot be recorded;
- the schema differs from the repository's transactions family (for example file 3 drift);
- a question can be answered only with row-level output;
- a result falls below the suppression threshold in a way that would identify a merchant;
- personal data appears in any output;
- the restored copy cannot be deleted;
- anyone proposes acting on the results by attributing, flagging, correcting or reinterpreting rows;
- the work would go beyond the 6A.2 list.

## 7. Summary

| Finding ID | Severity | Short title | Correction required |
|---|---|---|---|
| SR04-01 | HIGH | Unreconciled target ledger and creator-role ACL baseline for the transactions family | yes |
| SR04-02 | HIGH | Revocation scope narrower than the grants; new columns inherit table-level privileges | yes |
| SR04-03 | MEDIUM | M16-1 live-table operations, delete actions and existing cascades | yes |
| SR04-04 | MEDIUM | Second command widening without identity, type-sync and compatibility obligations | yes |
| SR04-05 | HIGH | No treatment for historical repayments recorded as `sale` (possible T3 for screening) | yes |
| SR04-06 | MEDIUM | Legacy correction history is unreliable, and its snapshots lack the new fields | yes |
| SR04-07 | MEDIUM | `due_on` lifecycle under correction and its constraint form undefined | yes |
| SR04-08 | MEDIUM | M16-4 parity oracle unusable; cross-mission ownership of reader objects | yes |
| SR04-09 | MEDIUM | Backup and PITR, historical-totals invariant and version-order discipline omitted | yes |
| SR04-10 | MEDIUM | OQ-05 timing, overlap with the SB-P-1.14 evidence gap, and verification mapping | yes |
| SR04-11 | LOW | No production-shaped rehearsal environment identified | yes |

**STOP FOR MISSION CONTROL SPECIALIST FINDINGS REVIEW.**

**Implementation Authorization: WITHHELD — IMPLEMENTATION NOT AUTHORIZED.**
