# SMART BUSINESS — SUPABASE B1 SERVICE_ROLE PRIVILEGE-NEUTRALIZATION CORRECTION ADDENDUM

## SB-P-1.11-GC-17 — service_role Privilege-Neutralization Correction

**Report ID:** report1.122
**Mission:** SB-P-1.11-GC-17 — service_role Privilege-Neutralization Correction
**Authorized By:** `communication/live/instruction1.113.md`
**Executing Room:** Claude Code / Engineering Architecture
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION
**Implementation Authority:** NONE
**Database Migration Authority:** NONE
**Production Mutation Authority:** NONE
**Stage C Authority:** NONE

---

## 1. Mission and Authority

This report is a self-contained **`service_role` Privilege-Neutralization Correction Addendum**. It corrects exactly the single remaining Supabase Backend Architecture blocker identified in `communication/live/report1.121.md` (final migration-activation-order confirmation, `LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`): `SUPA-EIS-B1 — Step 4 does not explicitly revoke the inherited/default service_role ALL table privilege before granting back SELECT on parser_upload_leases.`

It does not overwrite, rewrite, or reopen `report1.108.md`, `report1.110.md`, `report1.116.md`, `report1.117.md`, `report1.118.md`, `report1.119.md`, `report1.120.md`, or `report1.121.md`, all of which remain unmodified, immutable evidence. This addendum becomes binding **together with** `report1.108.md`, `report1.116.md`, `report1.118.md`, and `report1.120.md` only after a later final narrow Supabase Backend Architecture confirmation and Mission Control acceptance — it does not itself claim Stage B PASS. No SQL, migration, or Supabase mutation is created or executed by this mission.

---

## 2. Exact Merged `main` SHA Reviewed

Latest merged GitHub `main` at mission start:

`ab13fa09301e337f3251041e024e318e54a1aa46`

Confirmed via `git rev-parse HEAD` immediately after fast-forward synchronization, matching Mission Control's cited authoritative HEAD exactly.

Files read in full for this correction: `communication/live/instruction1.113.md`, `communication/live/report1.121.md`, `communication/live/instruction1.112.md`, `communication/live/report1.120.md`, `communication/live/report1.119.md`, `communication/live/report1.118.md`, `communication/live/report1.117.md`, `communication/live/report1.116.md`, `communication/live/report1.110.md`, `communication/live/report1.108.md`, `communication/live/report1.115.md`; `supabase/migrations/20260727000000_reconcile_default_grants.sql`, `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`, and `src/integrations/supabase/client.server.ts` (all already fully read and cited across this mission chain, re-confirmed unchanged this mission).

---

## 3. Confirmation — Scope Was `service_role` Privilege Neutralization Only

This correction amends exactly **Step 4** of the seven-step migration-activation sequence `report1.120.md` §4 locked. Every other accepted item is treated as a closed input, not reopened:

- B1 mutation-surface design, transition-helper contract, six-state database invariants, authority-field immutability, illegal-transition prevention, bounded failure-code contract, and safety-case matrix (all `PASS`, `report1.119.md` §2–§9);
- enforcement-before-use ordering and the pre-cutover verification gate (`PASS`, `report1.121.md` §4, §7);
- atomicity / partial-failure / rollback (`PASS`, `report1.121.md` §8);
- `SUPA-EIS-B2`, `SUPA-EIS-B3`, `SUPA-EIS-B4` (all `PASS`, not reopened);
- cross-blocker dispatch/idempotency/failure integrity, Stage B data-minimization, and every Infrastructure `PASS` finding.

This mission is table-specific to `public.parser_upload_leases` and does not alter the already-accepted `parser_preview_guards` privilege contract (§10).

---

## 4. Exact Corrected Step 4 Contract

### 4.1 The defect, confirmed

`report1.121.md` §5 identified precisely: `report1.120.md` §4 Step 4 specified only `GRANT SELECT ON public.parser_upload_leases TO service_role;` and asserted this produces a `SELECT`-only effective privilege. That assertion is false under the repository's actual default-grant posture. `supabase/migrations/20260727000000_reconcile_default_grants.sql` establishes:

```sql
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT ALL ON TABLES TO anon, authenticated, service_role;
```

Because every migration in this repository runs as `postgres` (confirmed in that migration's own comment, independently re-confirmed by `report1.116.md` §6.1 for the identical `anon`/`authenticated` case), `service_role` receives table `ALL` on `public.parser_upload_leases` **automatically, at `CREATE TABLE` time in Step 1 — before any explicit `GRANT`/`REVOKE` statement in the migration ever executes.** PostgreSQL grants are additive: a subsequent `GRANT SELECT` adds nothing new (`SELECT` is already included in the previously-inherited `ALL`) and removes nothing — `INSERT`, `UPDATE`, and `DELETE` remain held by `service_role` exactly as before. `report1.120.md` §6's claim that "there is no point in this sequence... at which `service_role` holds a broader grant on it than `SELECT`" is therefore corrected by this addendum: that claim overlooked the automatic default-privilege inheritance that already applies at the moment of table creation, before Step 4 (or any other explicit step) runs at all.

This is the same class of gap `report1.116.md`/`report1.118.md`/`report1.120.md` already correctly closed for `PUBLIC`, `anon`, and `authenticated` (each explicitly `REVOKE ALL ... FROM PUBLIC, anon, authenticated` before any narrower grant) — Step 4 simply never applied the identical, already-proven pattern to `service_role`'s own inherited privilege.

### 4.2 Corrected Step 4 — three-part binding sequence

**Step 4 is amended to require, in this exact order, for `public.parser_upload_leases` only:**

1. **Neutralize the inherited `service_role` `ALL` table privilege.** Explicitly remove/revoke the broader direct table privilege `service_role` holds on `public.parser_upload_leases` as a consequence of the repository's default-grant posture — architecturally, the equivalent effect of removing direct `INSERT`, direct `UPDATE`, and direct `DELETE` authority, and neutralizing any broader `ALL`-style effective grant, regardless of the exact future SQL syntax used to achieve it (illustrative only: `REVOKE ALL ON public.parser_upload_leases FROM service_role;`, or an equivalent statement folded into the same neutralization step already used for `PUBLIC`/`anon`/`authenticated`).
2. **Only after** step 1 is complete, grant back exactly the accepted direct privilege: `SELECT`. Illustrative only: `GRANT SELECT ON public.parser_upload_leases TO service_role;`. This grant is now narrowing-*correct* because it is applied to a privilege set that has already been reduced to nothing, not to a still-broad inherited `ALL`.
3. **Only after** the resulting direct-table privilege state for `service_role` is exactly `{ SELECT }` does the migration proceed to the already-approved helper-grant step (`report1.120.md` §4 Step 5, unchanged).

**Explicit, binding statement:** `GRANT SELECT` alone is additive and must not be treated as privilege narrowing. Narrowing is achieved only by the revoke in sub-step 1; the grant in sub-step 2 restores exactly the one privilege the accepted design intends `service_role` to retain directly. A migration that issues sub-step 2 without first completing sub-step 1 has not satisfied this contract, regardless of the presence of a `GRANT SELECT` statement in its text.

### 4.3 Effective privilege target

After the corrected Step 4, the effective direct table privilege set for `service_role` on `public.parser_upload_leases` is exactly:

`{ SELECT }`

No `INSERT`, no `UPDATE`, no `DELETE`, and no residual `TRUNCATE`/`REFERENCES`/`TRIGGER`/`MAINTAIN` or any other table-level privilege the inherited `ALL` grant would otherwise have conferred. This is the identical effective end state `report1.118.md` §3.2/§8.1 and `report1.120.md` §4 Step 4 already intended — this correction changes only how that end state is reached (revoke-then-grant, not grant-alone), not what the end state is.

---

## 5. Default-Privilege Compatibility Finding

Explicitly acknowledged, per `instruction1.113.md` §5: future `public` tables created by this repository's migration process inherit broad `service_role` table privileges from the repository's own default-privilege posture — the parser lease migration cannot assume a clean privilege slate for `service_role` any more than it could for `anon`/`authenticated` (`report1.116.md` §6.1 already established this for those two roles; this correction extends the identical acknowledgment to `service_role`). `GRANT SELECT` by itself is not evidence of narrowing and must not be accepted as such by any later reviewer. A migration/package review verifying this contract must inspect the resulting effective ACL/privileges on `public.parser_upload_leases` (for example, via `information_schema.role_table_grants` or an equivalent privilege-inspection query scoped to `service_role`), not merely confirm that a `GRANT SELECT` statement is present in the migration text.

This correction does not change, and does not authorize changing, the repository-wide default-grant policy (`supabase/migrations/20260727000000_reconcile_default_grants.sql` itself) — it is scoped only to ensuring `public.parser_upload_leases` reaches the already-accepted effective privilege state despite that policy's existence, exactly as `instruction1.113.md` §5 requires.

---

## 6. Ordering Relative to Helper Grants and Cutover

The corrected seven-step sequence (`report1.120.md` §4, amended only at Step 4):

1. create approved support objects — application paths remain inactive;
2. install approved invariants, bounded failure-code validation, and the accepted helper surface — lifecycle remains inactive;
3. neutralize inherited/default privileges for `PUBLIC`, `anon`, and `authenticated` (unchanged);
4. **for `service_role`: neutralize the inherited `ALL` table privilege on `public.parser_upload_leases`, then grant back only `SELECT` (§4.2 above — this is the sole amendment);**
5. grant `service_role` `EXECUTE` only on the accepted nine-function helper surface (unchanged) — this step must not begin until Step 4's revoke-then-grant sequence has fully completed, so that helper execution is never granted while `service_role` still holds a broader direct table privilege than intended;
6. complete pre-cutover verification, including the effective-privilege checks in §9 below (unchanged in structure, extended in content);
7. only then activate Smart Business application/server usage (unchanged).

Helper grants (Step 5) are not, and must not be treated as, a substitute for removing direct table DML (Step 4) — per `instruction1.113.md` §4 item 3, narrowing the table surface and granting the helper surface are two independent controls, and completing one does not excuse an incomplete other.

---

## 7. Fail-Closed Requirement

Locked, per `instruction1.113.md` §7:

- if the inherited `service_role` `ALL` table privilege cannot be removed, the lifecycle must remain inactive — Step 5–7 do not proceed;
- if `SELECT` is granted back before the broader privilege is proven neutralized, that does not count as successful narrowing, regardless of migration text content;
- if pre-cutover verification (§9) shows any surviving direct `service_role` `INSERT`, `UPDATE`, or `DELETE` on `public.parser_upload_leases`, application cutover is prohibited outright;
- rollback or retry must leave the application unable to use the lease lifecycle until the full accepted privilege state (`{ SELECT }` only, direct; `EXECUTE` only on the nine approved helpers) is restored and independently re-verified;
- no partial privilege state — for example, `SELECT` granted back but the inherited `ALL` not yet confirmed revoked — may be treated as acceptable for any purpose, including a staged or incremental rollout.

---

## 8. Required Later Acceptance Evidence

A later implementation/package review must provide, as a precondition for any activation decision:

1. the actual effective `service_role` ACL/privileges on `public.parser_upload_leases`, inspected directly (not inferred from migration source text) after the corrected Step 4 executes;
2. confirmation no direct `INSERT` privilege remains for `service_role` on this table;
3. confirmation no direct `UPDATE` privilege remains;
4. confirmation no direct `DELETE` privilege remains;
5. confirmation the accepted direct `SELECT` privilege is present (`report1.118.md` §3.2's locked design);
6. confirmation the intended narrow `EXECUTE` grants exist for exactly the nine accepted helper functions;
7. confirmation no broader table or function privilege survived due to the repository's default-privilege posture, for `service_role` specifically as well as for `PUBLIC`/`anon`/`authenticated`;
8. one attempted direct privileged mutation (for example a direct `INSERT` or `UPDATE` issued as `service_role` against `public.parser_upload_leases`, bypassing every helper) fails closed with a permission-denied result;
9. one legal lifecycle transition, issued through the approved helper surface, succeeds with the exact effects `report1.118.md` §6 specifies;
10. application cutover (`report1.120.md` §4 Step 7) occurs only after items 1–9 above have all passed.

This mission defines these requirements; it does not run them, and no evidence above is claimed as already collected.

---

## 9. Confirmation — All Prior B1 `PASS` Findings Remain Unchanged

`report1.119.md` §2–§9's `PASS` findings (mutation-surface design; transition-helper contract; six-state database invariants; authority-field immutability; illegal-transition prevention; failure-code contract; safety-case matrix) and `report1.121.md` §4, §7, §8's `PASS` findings (enforcement-before-use; pre-cutover verification gate structure; atomicity/partial-failure/rollback) are not altered, re-derived, or re-justified by this correction. This addendum changes only the internal content of one sub-step (Step 4) within the already-accepted seven-step sequence; it does not touch the sequence's overall shape, the helper set, the `CHECK` constraint, or the failure-code contract.

---

## 10. Confirmation — `SUPA-EIS-B2`/`B3`/`B4` Remain Closed `PASS`; `parser_preview_guards` Untouched

Not reopened, re-reviewed, or altered:

- **B2** — the one-winner `claim_parser_upload_lease` dispatch gate is unaffected; this correction changes only the direct-table-privilege state of `service_role`, not any helper function's predicate or the dispatch-authorization logic.
- **B3** — `public.parser_preview_guards`' own privilege contract is explicitly **not** amended by this mission. `report1.118.md` §8.1 already confirmed that table's grant contract (`GRANT ALL ... TO service_role`, unchanged from `report1.116.md` §6.2) was not reopened by the B1 Option A correction, and this mission's authorized scope — `public.parser_upload_leases` only, per `instruction1.113.md`'s explicit table-specific framing — does not extend to it either. `parser_preview_guards` retains its own already-accepted plain-DML-via-`supabaseAdmin` model, unchanged.
- **B4** — the `PUBLIC`/`anon`/`authenticated` exclusion (Step 3) is unchanged by this correction; this addendum only extends the *same already-proven revoke-before-grant pattern* to `service_role`'s own privilege on one additional table, which is consistent with, not a departure from, B4's own logic.

---

## 11. Confirmation — Product Truth and Frozen Decisions Remain Unchanged

Every decision listed in `instruction1.113.md` §9 is preserved without modification: Owner-only Phase 1 import authority; exactly nineteen public Catalog commands — no twentieth command; Catalog / Inventory truth separation; D-047 and D-068; BKR-1 through BKR-5; EC-2 and EC-3; the accepted six-state lease lifecycle; the accepted B1 Option A physical-enforcement architecture; the accepted B1 helper surface and bounded failure-code contract; AWS Lambda narrow parser runtime; `nodejs24.x`; `ap-south-1`; 2,048 MB starting memory; 15-second Lambda timeout; 10-second parser budget; finite reserved concurrency; transient private S3 parser-ingress; IAM Roles Anywhere; `ChecksumMode = ENABLED`; Papa Parse, ExcelJS, and `node:zlib`; all locked parser input/shape limits; the 4,194,304-byte serialized-response ceiling; deterministic pre-stream `RESPONSE_TOO_LARGE`.

Product Truth remains governed exclusively by the existing Founder Workflow and the nineteen public Catalog commands; nothing in this correction reads or writes any Catalog or Inventory table. No AWS architecture is touched. The repository-wide default-grant policy itself (`supabase/migrations/20260727000000_reconcile_default_grants.sql`) is not redesigned — this correction only ensures one table's migration explicitly counteracts that policy's effect on one role, exactly as `instruction1.113.md` §5 requires.

---

## 12. No-Implementation / No-Mutation Confirmation

During this mission:

- prior reports modified: **NO**
- SQL or migrations created or executed: **NO**
- Supabase test or production mutated: **NO**
- live tables, functions, RPCs, triggers, constraints, RLS, grants, or default privileges created or modified: **NO**
- repository-wide default-grant policy changed: **NO**
- `parser_preview_guards` privilege contract changed: **NO**
- application or parser code implemented or modified: **NO**
- AWS or S3 or IAM architecture or resources changed: **NO**
- dependencies added or updated: **NO**
- Lovable changed: **NO**
- Product Truth changed: **NO**
- employee/manager permissions changed: **NO**
- a twentieth Catalog command added: **NO**
- parser/input/runtime limits weakened: **NO**
- any accepted B1 finding, `B2`, `B3`, or `B4` reopened: **NO**
- Infrastructure `PASS` findings reopened: **NO**
- EIS lock, Build Lock, or Build Mode entered: **NO**
- deployment or publication performed: **NO**
- production touched: **NO**
- Stage C begun: **NO**

The only repository change under this mission is this report: `communication/live/report1.122.md`.

---

## 13. Final Disposition

`LAMBDA PARSER EIS SUPABASE B1 SERVICE_ROLE PRIVILEGE-NEUTRALIZATION CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`

The sole remaining `SUPA-EIS-B1` defect identified in `report1.121.md` §5 — Step 4's failure to explicitly revoke the inherited `service_role` `ALL` table privilege on `public.parser_upload_leases` before granting back `SELECT` — is closed by the three-part binding sub-sequence in §4.2 (neutralize inherited `ALL` → grant back `SELECT` only → proceed to helper grants), the explicit "`GRANT SELECT` alone is not narrowing" statement, the effective-privilege target in §4.3, and the extended acceptance-evidence contract in §8 requiring inspection of actual resulting ACLs rather than migration-text presence. No already-accepted B1 finding, and no `B2`/`B3`/`B4` finding, was redesigned or reopened. `parser_preview_guards` is explicitly confirmed untouched.

This disposition is not a Stage B `PASS` — only Supabase Backend Architecture may issue that verdict, in the separate final narrow confirmation `instruction1.113.md` §13 authorizes next. This report grants no implementation, migration, EIS lock, Build Lock, Build Mode, deployment, Stage C, or production authority.

---

## 14. Remaining Blocker

**None.** This correction resolves the sole authorized blocker (`service_role` privilege neutralization on `public.parser_upload_leases`) with a specification precise enough — exact revoke-then-grant sequence, exact effective-privilege target, exact fail-closed and acceptance-evidence contract — for a final Supabase Backend Architecture reviewer to determine `PASS`/`FAIL` without inventing missing semantics.
