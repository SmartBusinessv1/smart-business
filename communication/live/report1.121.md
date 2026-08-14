# SMART BUSINESS — SUPABASE BACKEND ARCHITECTURE

# SB-P-1.11-GC-16 — FINAL MIGRATION-ACTIVATION-ORDER BACKEND CONFIRMATION

**Report ID:** report1.121  
**Mission:** SB-P-1.11-GC-16 — Final Migration-Activation-Order Backend Confirmation  
**Authorized By:** `communication/live/instruction1.112.md`  
**Executing Room:** Supabase Backend Architecture  
**Mode:** SPECIALIST CONFIRMATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission and Authority

This report performs the final narrow Supabase Backend Architecture confirmation authorized by `communication/live/instruction1.112.md`.

The confirmation scope is limited strictly to the one remaining `SUPA-EIS-B1` item identified by `communication/live/report1.119.md` and corrected by `communication/live/report1.120.md`:

`SUPA-EIS-B1 — migration activation ordering.`

No already-PASS B1 finding, `SUPA-EIS-B2`, `SUPA-EIS-B3`, `SUPA-EIS-B4`, Infrastructure PASS finding, Product Truth decision, Founder Workflow decision, parser-runtime decision, AWS architecture decision, or permission model was reopened.

---

## 2. Exact Merged `main` SHA Reviewed

Latest merged `main` reviewed:

`72896846f60d23c946662ebbf3b002d5d03bfe0d`

Commit:

`Authorize GC-16 final migration activation order confirmation (#259)`

Primary reviewed inputs:

- `communication/live/instruction1.112.md`;
- `communication/live/instruction1.111.md`;
- `communication/live/report1.120.md`;
- `communication/live/report1.119.md`;
- `communication/live/report1.118.md`;
- `communication/live/report1.117.md`;
- `communication/live/report1.116.md`;
- `communication/live/report1.110.md`;
- `communication/live/report1.108.md`;
- `communication/live/report1.115.md`;
- `supabase/migrations/20260727000000_reconcile_default_grants.sql`;
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`;
- `src/integrations/supabase/client.server.ts`.

---

## 3. Confirmation Scope

**Result: migration-activation-order only.**

`report1.120.md` correctly converts the previously missing activation-order requirement into a binding seven-step enforcement-first sequence:

1. create approved support objects while application paths remain inactive;
2. install the approved six-state invariants, bounded failure-code validation, and accepted helper surface;
3. neutralize inherited/default privileges for `PUBLIC`, `anon`, and `authenticated`;
4. narrow direct `service_role` mutation on `parser_upload_leases` to the accepted read-only direct surface;
5. grant `service_role` `EXECUTE` only on the accepted helper surface;
6. complete a pre-cutover verification gate;
7. only then activate Smart Business application/server usage.

The sequence is stated as mandatory rather than advisory, and Step 7 is explicitly conditioned on Step 6 passing in full.

However, one load-bearing privilege-order defect remains inside Step 4 itself, described in Section 5 below.

---

## 4. Enforcement-Before-Use

**Result: PASS.**

`report1.120.md` explicitly prohibits lifecycle use before Steps 1–6 complete successfully.

Confirmed:

- no endpoint may depend on the lease lifecycle before cutover;
- no route may depend on it before cutover;
- no parser-dispatch path may depend on it before cutover;
- no import flow may depend on it before cutover;
- no background/server path may depend on it before cutover;
- verification failure blocks the entire cutover;
- a partial verification does not authorize partial lifecycle activation;
- application activation is all-or-nothing across the accepted helper surface.

The later acceptance package is required to prove actual migrated-database state rather than merely assert that installation statements were attempted.

**Enforcement-before-use: PASS.**

---

## 5. Privilege Ordering

**Result: CHANGES REQUIRED — one exact privilege-narrowing defect.**

The intended ordering is correct:

- browser-role privilege neutralization precedes application activation;
- helper grants occur only after invariants and privilege restrictions are intended to exist;
- direct `service_role` DML is intended to be removed before cutover;
- browser roles remain excluded before application use.

The blocker is the exact Step 4 specification.

The repository's canonical default-grant migration establishes:

- `ALTER DEFAULT PRIVILEGES ... GRANT ALL ON TABLES TO anon, authenticated, service_role`;
- future `public` tables created by `postgres` therefore receive table `ALL` for `service_role` automatically.

`report1.120.md` Step 4 then specifies only:

`GRANT SELECT ON public.parser_upload_leases TO service_role;`

and states that no `INSERT`, `UPDATE`, or `DELETE` grant remains.

That statement does not remove the inherited/default `ALL` grant. PostgreSQL `GRANT SELECT` is additive; it cannot narrow an already-held `ALL` privilege set. Unless the future migration explicitly revokes the broader `service_role` table privilege before granting back `SELECT`, direct `INSERT`, `UPDATE`, and `DELETE` remain available to `service_role`, contradicting the accepted B1 Option A mutation-surface design and causing the Step 6 direct-DML denial checks to fail.

### Exact remaining correction

The migration-order contract must explicitly require the equivalent of:

1. remove/revoke all direct `service_role` table privileges on `public.parser_upload_leases` inherited from the repository default-grant posture; then
2. grant back only the accepted `SELECT` privilege; then
3. proceed to narrow helper `EXECUTE` grants and pre-cutover verification.

The exact SQL syntax is a later implementation concern; the architecture requirement is that the inherited `service_role` `ALL` privilege be explicitly neutralized before `SELECT` is re-granted.

This is not a redesign of B1 Option A. It is the missing operation required to make the already-accepted direct-DML restriction physically true under the repository's actual default-privilege posture.

**Privilege ordering: CHANGES REQUIRED.**

---

## 6. Helper-Activation Order

**Result: PASS, contingent on Section 5 privilege correction.**

The helper-activation sequence is otherwise coherent:

- only the already-approved nine-function parser-support surface is named;
- no broader/general-purpose mutation helper is introduced;
- helper execution is granted only after physical invariants and browser-role privilege neutralization are installed;
- application use remains disabled until after verification;
- the accepted helper surface remains service-role-only.

Narrow helper grants do not themselves recreate arbitrary table mutation authority. The only remaining risk comes from the unremoved direct `service_role` table `ALL` grant described in Section 5.

**Helper-activation order: PASS subject to privilege correction.**

---

## 7. Pre-Cutover Verification Gate

**Result: PASS.**

The specification requires later implementation evidence proving the necessary backend state before cutover.

The required evidence includes:

- approved schema/helper objects exist;
- the six-state invariant check is active;
- bounded failure-code validation is active;
- `PUBLIC` exclusion is effective;
- `anon` exclusion is effective;
- `authenticated` exclusion is effective;
- direct `service_role` `INSERT` is denied;
- direct `service_role` `UPDATE` is denied;
- direct `service_role` `DELETE` is denied;
- intended helper `EXECUTE` grants exist;
- no broader grants remain;
- legal helper transition behavior succeeds as specified;
- illegal transition attempts fail closed;
- authority-field mutation attempts fail closed;
- same-lease second dispatch authority cannot be recreated;
- cutover occurs only after the required checks pass.

This gate is strong enough to detect the Step 4 privilege defect if implementation followed `report1.120.md` literally: the direct-DML denial checks would fail, correctly blocking cutover. That fail-closed verification behavior is a positive property, but it does not remove the need to correct the Step 4 specification itself.

**Pre-cutover verification: PASS.**

---

## 8. Atomicity / Partial Failure / Rollback

**Result: PASS.**

`report1.120.md` locks an enforcement-first failure model:

- Steps 1–5 are intended to execute inside one explicit PostgreSQL transaction where supported;
- Step 6 necessarily occurs after commit because it requires actual cross-role verification;
- if installation cannot complete atomically, the application path remains disabled and unreferenced;
- migration failure rolls back the installation transaction rather than exposing an under-enforced usable lifecycle;
- retry begins from a fail-closed state;
- Step 7 cannot occur until Step 6 passes;
- no new deployment, migration, queue, scheduler, feature-flag, or orchestration framework is introduced.

The remaining Step 4 privilege defect is deterministic and testable; it does not invalidate the ordering/rollback architecture itself.

**Atomicity / partial failure / rollback: PASS.**

---

## 9. Prior B1 PASS Findings Remained Closed

Confirmed closed and unchanged:

- mutation-surface architecture selection — PASS;
- transition-helper contract — PASS;
- six-state database invariants — PASS;
- authority-field immutability — PASS;
- illegal-transition prevention — PASS;
- bounded failure-code contract — PASS;
- B1 safety-case matrix — PASS.

This report does not re-review those mechanisms. The Section 5 finding is only that the new migration-order addendum does not yet contain the explicit privilege-revocation operation required to activate the already-PASS mutation-surface design correctly under the repository's default ACLs.

---

## 10. B2 / B3 / B4 Remained Closed PASS

Confirmed unchanged and not reopened:

- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity — PASS;
- Stage B data-minimization — PASS;
- all Infrastructure PASS findings.

The migration-order correction does not create a second same-lease Lambda dispatch authority and does not modify guard semantics or browser-role exclusion decisions.

---

## 11. Frozen Product Truth and Architecture Decisions

All frozen decisions remained unchanged, including:

- Owner-only Phase 1;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047;
- D-068;
- BKR-1 through BKR-5;
- EC-2;
- EC-3;
- accepted six-state lease lifecycle;
- accepted B1 Option A physical-enforcement architecture;
- accepted B1 helper surface;
- accepted bounded failure-code contract;
- AWS Lambda narrow parser runtime;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB memory baseline;
- 15-second Lambda timeout;
- 10-second parser budget;
- finite reserved concurrency;
- transient private S3 parser-ingress;
- IAM Roles Anywhere;
- `ChecksumMode = ENABLED`;
- Papa Parse;
- ExcelJS;
- `node:zlib`;
- all locked parser limits;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- Product Truth remains behind the existing Founder Workflow and exactly nineteen public Catalog commands.

---

## 12. No Implementation / No Mutation Confirmation

During this mission:

- prior reports modified: **NO**;
- SQL or migrations created or executed: **NO**;
- Supabase test or production mutated: **NO**;
- live tables/functions/RPCs/triggers/constraints/RLS/grants/default privileges created or modified: **NO**;
- application/parser code implemented or modified: **NO**;
- AWS/S3/IAM architecture or resources changed: **NO**;
- dependencies added or updated: **NO**;
- Lovable changed: **NO**;
- Product Truth changed: **NO**;
- employee/manager permissions changed: **NO**;
- Catalog command count changed: **NO**;
- parser/runtime limits weakened: **NO**;
- EIS lock entered: **NO**;
- Build Lock entered: **NO**;
- Build Mode entered: **NO**;
- deployment or publication performed: **NO**;
- production touched: **NO**;
- Stage C begun: **NO**.

The only repository file created by this mission is:

`communication/live/report1.121.md`

---

## 13. Final Verdict

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`

Exactly one Supabase Backend Architecture blocker remains in Stage B:

**`SUPA-EIS-B1 — Step 4 does not explicitly revoke the inherited/default service_role ALL table privilege before granting back SELECT on parser_upload_leases.`**

Until that operation is made binding in the migration-order contract, the specification does not physically guarantee denial of direct `service_role` `INSERT`/`UPDATE`/`DELETE` after installation.

No other B1, B2, B3, or B4 blocker remains.

Stage C must not begin.
