# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-17 — SERVICE_ROLE PRIVILEGE-NEUTRALIZATION CORRECTION

**Instruction ID:** instruction1.113  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Correction Gate:** GC-17 — Final B1 service_role Privilege-Neutralization Correction  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission Objective

Correct exactly one remaining Supabase Backend Architecture blocker identified by:

`communication/live/report1.121.md`

The only authorized blocker is:

`SUPA-EIS-B1 — Step 4 does not explicitly revoke the inherited/default service_role ALL table privilege before granting back SELECT on parser_upload_leases.`

Required output:

`communication/live/report1.122.md`

This is a single-item specification correction only. Do not modify prior reports.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.113.md`
- `communication/live/report1.121.md`
- `communication/live/instruction1.112.md`
- `communication/live/report1.120.md`
- `communication/live/report1.119.md`
- `communication/live/report1.118.md`
- `communication/live/report1.117.md`
- `communication/live/report1.116.md`
- `communication/live/report1.110.md`
- `communication/live/report1.108.md`
- `communication/live/report1.115.md`

Use repository evidence only where needed to keep the correction compatible with the actual Supabase default-grant posture, including:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

---

## 3. Accepted Findings — Do Not Redesign

Keep closed and unchanged:

- B1 mutation-surface design — PASS;
- B1 transition-helper contract — PASS;
- B1 six-state database invariants — PASS;
- B1 authority-field immutability — PASS;
- B1 illegal-transition prevention — PASS;
- B1 bounded failure-code contract — PASS;
- B1 safety-case matrix — PASS;
- enforcement-before-use ordering — PASS;
- helper-activation ordering — PASS, subject only to this privilege correction;
- pre-cutover verification gate — PASS;
- atomicity / partial-failure / rollback — PASS;
- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity — PASS;
- Stage B data-minimization — PASS;
- all Infrastructure PASS findings.

Do not redesign the accepted six-state lifecycle, Option A physical-enforcement architecture, helper surface, browser-role exclusion, or seven-step activation sequence.

---

## 4. Exact Correction Required

Amend only Step 4 of the binding migration-activation-order contract.

The repository's default-grant posture may give newly created `public` tables broad `service_role` privileges. A later `GRANT SELECT` does not narrow an existing `ALL` grant because PostgreSQL grants are additive.

Therefore the architecture contract must explicitly require this privilege transition before application use:

1. **Neutralize the inherited/direct `service_role` table privilege on `public.parser_upload_leases`.**
   - explicitly remove/revoke the broader direct table privileges that include `INSERT`, `UPDATE`, and `DELETE`;
   - the accepted intent is that the direct table surface for `service_role` becomes no broader than read-only `SELECT`;
   - the exact future SQL syntax is an implementation detail, but the required resulting privilege state is binding.

2. **Grant back only the accepted direct read authority.**
   - after broader privilege neutralization, grant/retain only `SELECT` on `public.parser_upload_leases` for `service_role`;
   - no direct `INSERT`, `UPDATE`, or `DELETE` may remain on that table.

3. **Only then continue to the already-approved helper grant step.**
   - `service_role` receives `EXECUTE` only on the accepted creation/binding/lifecycle helper surface;
   - no broader/general-purpose mutation function is introduced;
   - helper grants must not be used as a substitute for removing direct table DML.

4. **Pre-cutover verification must prove the resulting privilege state.**
   - direct `service_role` `INSERT` denied;
   - direct `service_role` `UPDATE` denied;
   - direct `service_role` `DELETE` denied;
   - direct `service_role` `SELECT` remains available only if already accepted by the EIS;
   - intended helper `EXECUTE` grants exist;
   - no broader table/function grant survives;
   - if any of these checks fail, application cutover remains blocked.

This is a correction to the activation contract, not a redesign of B1 Option A.

---

## 5. Default-Privilege Compatibility Requirement

The correction must explicitly acknowledge the repository's actual default-grant posture:

- future public tables may inherit broad `service_role` table privileges from repository default privileges;
- therefore the parser lease migration cannot assume a clean privilege slate;
- it must neutralize that inherited/broader privilege before narrowing to the accepted direct read-only surface;
- `GRANT SELECT` by itself is insufficient evidence of narrowing;
- the migration/package review must inspect the resulting ACL/effective privileges, not only the presence of a `GRANT SELECT` statement.

Do not change the repository-wide default-grant policy in this mission. The correction is scoped only to ensuring `public.parser_upload_leases` reaches the accepted effective privilege state before activation.

---

## 6. Required Ordering After Correction

Preserve the accepted seven-step sequence, with Step 4 clarified as follows:

1. create approved support objects while application paths remain inactive;
2. install approved invariants, bounded failure-code validation, and accepted helpers;
3. neutralize inherited/default privileges for `PUBLIC`, `anon`, and `authenticated` as already specified;
4. **for `service_role`, explicitly revoke/neutralize the broader direct table privilege on `public.parser_upload_leases`, then grant back only accepted `SELECT`;**
5. grant `service_role` `EXECUTE` only on the accepted helper surface;
6. complete pre-cutover verification, including effective privilege checks;
7. only then activate Smart Business server/application usage.

The ordering is mandatory.

---

## 7. Fail-Closed Requirement

Lock that:

- if the broader `service_role` table privilege cannot be removed, the lifecycle must remain inactive;
- if `SELECT` is re-granted before broad privilege neutralization is proven, that does not count as successful narrowing;
- if verification shows any surviving direct `INSERT`, `UPDATE`, or `DELETE`, cutover is prohibited;
- rollback/retry must leave the application unable to use the lifecycle until the accepted privilege state is restored and verified;
- no partial privilege state may be treated as acceptable.

---

## 8. Required Later Acceptance Evidence

The correction report must require later implementation/package evidence proving:

1. the actual effective `service_role` ACL/privileges on `public.parser_upload_leases` after migration;
2. no direct `INSERT` privilege remains;
3. no direct `UPDATE` privilege remains;
4. no direct `DELETE` privilege remains;
5. accepted direct `SELECT` is present if required by the locked design;
6. intended narrow helper `EXECUTE` grants are present;
7. no broader helper/table privilege survives due to default privileges;
8. one attempted direct privileged mutation fails closed;
9. one legal helper transition succeeds;
10. application cutover occurs only after these checks pass.

This mission defines evidence requirements only. It does not execute them.

---

## 9. Frozen Product and Architecture Decisions

Preserve without modification:

- Owner-only Phase 1 import authority;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047 and D-068;
- BKR-1 through BKR-5;
- EC-2 and EC-3;
- accepted six-state lease lifecycle;
- accepted B1 Option A physical-enforcement architecture;
- accepted B1 helper surface and bounded failure-code contract;
- AWS Lambda narrow parser runtime;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- 10-second parser budget;
- finite reserved concurrency;
- transient private S3 parser-ingress;
- IAM Roles Anywhere;
- `ChecksumMode = ENABLED`;
- Papa Parse, ExcelJS, and `node:zlib`;
- all locked parser limits;
- 4,194,304-byte serialized-response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- Product Truth remains behind the existing Founder Workflow and exactly nineteen public Catalog commands.

---

## 10. Required Output

Create only:

`communication/live/report1.122.md`

The report must contain:

1. Mission and authority.
2. Exact merged `main` SHA reviewed.
3. Confirmation the scope was only `service_role` privilege neutralization.
4. Exact corrected Step 4 contract.
5. Default-privilege compatibility finding.
6. Effective privilege target for `public.parser_upload_leases`.
7. Ordering relative to helper grants and cutover.
8. Fail-closed partial/failed privilege-narrowing behavior.
9. Required later acceptance evidence.
10. Confirmation all prior B1 PASS findings remain unchanged.
11. Confirmation B2/B3/B4 remain closed PASS findings.
12. Confirmation Product Truth/frozen decisions remain unchanged.
13. Confirmation no implementation/database/environment mutation occurred.
14. Final disposition.
15. Any remaining blocker.

Allowed final dispositions only:

- `LAMBDA PARSER EIS SUPABASE B1 SERVICE_ROLE PRIVILEGE-NEUTRALIZATION CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`
- `LAMBDA PARSER EIS SUPABASE B1 SERVICE_ROLE PRIVILEGE-NEUTRALIZATION CORRECTION — STOPPED — UNRESOLVED BACKEND BLOCKER`

Do not claim Stage B PASS. Only Supabase Backend Architecture may issue that verdict in the later final confirmation.

---

## 11. Prohibited Scope

Do not:

- modify prior reports;
- create or execute SQL/migrations;
- mutate Supabase;
- create/modify live tables, functions, RPCs, triggers, constraints, RLS, grants, or default privileges;
- change repository-wide default-grant policy;
- implement application/parser code;
- modify AWS/S3/IAM architecture or resources;
- add/update dependencies;
- change Lovable;
- change Product Truth;
- change employee/manager permissions;
- add a twentieth Catalog command;
- weaken parser/input/runtime limits;
- reopen accepted B1 findings;
- reopen B2/B3/B4;
- reopen Infrastructure PASS findings;
- enter EIS lock, Build Lock, or Build Mode;
- deploy;
- publish;
- touch production;
- begin Stage C.

---

## 12. Repository Discipline

The executing room shall:

- verify current merged `main` before work;
- create only `communication/live/report1.122.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging only;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secret-like material;
- report exact reviewed `main` SHA, branch, commit SHA, and PR;
- not merge its own PR.

---

## 13. Gate After Correction

If `report1.122.md` is human-reviewed, merged, and returns:

`LAMBDA PARSER EIS SUPABASE B1 SERVICE_ROLE PRIVILEGE-NEUTRALIZATION CORRECTION — READY FOR FINAL BACKEND CONFIRMATION`

Mission Control shall authorize one separate final narrow Supabase Backend Architecture confirmation limited only to this `service_role` privilege-neutralization correction.

That confirmation must not reopen already-PASS B1 findings or B2/B3/B4 and must not begin Stage C.

Only a later human-reviewed and merged:

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

will clear Stage B.

---

## 14. Mission Control Decision

`SB-P-1.11-GC-17 — SERVICE_ROLE PRIVILEGE-NEUTRALIZATION CORRECTION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Claude Code / Engineering Architecture → communication/live/report1.122.md**
