# SMART BUSINESS — SUPABASE BACKEND ARCHITECTURE

# SB-P-1.11-GC-18 — FINAL SERVICE_ROLE PRIVILEGE-NEUTRALIZATION BACKEND CONFIRMATION

**Report ID:** report1.123  
**Mission:** SB-P-1.11-GC-18 — Final service_role Privilege-Neutralization Backend Confirmation  
**Authorized By:** `communication/live/instruction1.114.md`  
**Executing Room:** Supabase Backend Architecture  
**Mode:** SPECIALIST CONFIRMATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Mission and Authority

This report performs the final narrow Supabase Backend Architecture confirmation authorized by `communication/live/instruction1.114.md`.

The confirmation scope is limited strictly to:

`SUPA-EIS-B1 — service_role privilege neutralization on public.parser_upload_leases.`

No other B1 finding, `SUPA-EIS-B2`, `SUPA-EIS-B3`, `SUPA-EIS-B4`, Infrastructure PASS finding, Product Truth decision, Founder Workflow decision, parser-runtime decision, AWS architecture decision, or permission model was reopened.

---

## 2. Exact Merged `main` SHA Reviewed

Latest merged `main` reviewed:

`0bbd54ed2effee082158d771cc12e4a59b16ec9b`

Commit:

`Authorize GC-18 final service_role privilege confirmation (#263)`

Primary reviewed inputs:

- `communication/live/instruction1.114.md`;
- `communication/live/instruction1.113.md`;
- `communication/live/report1.122.md`;
- `communication/live/report1.121.md`;
- prior B1/Supabase chain named by Mission Control;
- `supabase/migrations/20260727000000_reconcile_default_grants.sql`;
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`;
- `src/integrations/supabase/client.server.ts`.

---

## 3. Confirmation Scope

**Result: service_role privilege neutralization only.**

`report1.122.md` corrects exactly the sole remaining Stage B backend blocker identified in `report1.121.md`: the prior Step 4 attempted to narrow `service_role` by issuing only `GRANT SELECT`, even though the repository default-grant posture gives future public tables broad `service_role` table privileges automatically.

The correction now locks the required effective-state transition:

1. explicitly neutralize/revoke the broader inherited `service_role` table privilege on `public.parser_upload_leases`;
2. confirm the broader direct privilege is gone;
3. only then restore exactly direct `SELECT`;
4. only after the effective direct-table state is exactly `{ SELECT }`, grant `service_role` `EXECUTE` on the already-approved narrow helper surface;
5. run the accepted pre-cutover verification;
6. only after verification passes may application/server paths use the lease lifecycle.

`GRANT SELECT` alone is explicitly rejected as privilege narrowing.

---

## 4. Effective Privilege-Neutralization Result

**Result: PASS.**

The correction explicitly accounts for the repository's actual default-grant posture:

- future `public` tables created by the repository migration role can inherit broad table privileges for `service_role`;
- the migration therefore cannot assume a clean privilege slate;
- the inherited/broader table privilege must be explicitly removed before restoring the accepted narrow privilege;
- a later `GRANT SELECT` without the preceding neutralization does not satisfy the architecture contract.

This matches the canonical default-grant migration, which establishes forward default `GRANT ALL ON TABLES TO anon, authenticated, service_role` for future `public` tables.

The correction is specification-level only; no live privilege was changed by this mission.

**Effective privilege neutralization: PASS.**

---

## 5. SELECT-Only Direct Table Surface Result

**Result: PASS.**

The intended final effective direct table privilege set for `service_role` on:

`public.parser_upload_leases`

is explicitly locked to:

`{ SELECT }`

The correction explicitly excludes residual direct:

- `INSERT`;
- `UPDATE`;
- `DELETE`;
- `TRUNCATE`;
- `REFERENCES`;
- `TRIGGER`;
- `MAINTAIN`;
- or any other unintended table-level privilege inherited through `ALL`.

The accepted B1 Option A mutation-surface design is therefore physically representable at specification level: direct lease-table mutation is unavailable to the normal RLS-bypassing service-role bookkeeping client, while narrow lifecycle mutation remains available only through the accepted database-defined helper surface.

**SELECT-only direct table surface: PASS.**

---

## 6. Helper-Grant Ordering Result

**Result: PASS.**

The corrected ordering makes the helper grant step depend on successful completion of privilege neutralization.

Confirmed:

- `service_role` helper `EXECUTE` is not granted until the direct lease-table privilege state is exactly `{ SELECT }`;
- only the already-approved parser-support helper surface receives `EXECUTE`;
- no broader/general-purpose mutation helper is introduced;
- helper grants do not recreate arbitrary direct table mutation authority;
- helper grants remain distinct from table privileges and are not treated as a substitute for direct-DML removal.

The already-approved helper predicates, lifecycle, and authority boundaries are unchanged.

**Helper-grant ordering: PASS.**

---

## 7. Effective-State Verification Result

**Result: PASS.**

The correction requires later implementation/package evidence based on actual resulting effective ACL/privilege state, not migration source text alone.

Required later evidence includes direct proof that:

- effective `service_role` privileges on `public.parser_upload_leases` are inspected after migration;
- direct `SELECT` succeeds;
- direct `INSERT` is denied;
- direct `UPDATE` is denied;
- direct `DELETE` is denied;
- no broader table privilege survives;
- intended helper `EXECUTE` grants exist for the accepted helper set;
- no broader function grant remains;
- a direct privileged mutation bypassing the helper surface fails closed;
- a legal lifecycle transition through the approved helper surface succeeds;
- application cutover remains blocked until all required checks pass.

This evidence requirement is strong enough to detect either an incomplete revoke or any unexpected effective privilege surviving from the repository default-grant posture.

**Effective-state verification: PASS.**

---

## 8. `parser_preview_guards` Scope-Isolation Result

**Result: PASS.**

The correction is explicitly table-specific to:

`public.parser_upload_leases`

Confirmed unchanged:

- `public.parser_preview_guards` privilege behavior is not modified;
- its already-accepted `service_role` support-state authority remains closed under `SUPA-EIS-B3`;
- the repository-wide default-grant policy is not redesigned or amended;
- no broader Supabase authorization model is changed.

This is a local override required to make one table satisfy the already-approved B1 Option A direct-mutation boundary under the repository's existing default-grant posture.

**Scope isolation: PASS.**

---

## 9. Fail-Closed Ordering Result

**Result: PASS.**

The corrected contract fails closed under incomplete privilege narrowing:

- if inherited `service_role` broad table privilege cannot be neutralized, helper grants do not proceed;
- `GRANT SELECT` issued before broader privilege neutralization does not satisfy the contract;
- any surviving direct `INSERT`, `UPDATE`, or `DELETE` blocks application cutover;
- helper execution is not accepted as compensation for a still-broad direct table privilege;
- rollback/retry leaves the lease lifecycle unusable until the exact accepted privilege state is restored and re-verified;
- no partial privilege state may be treated as sufficient for staged activation.

This remains compatible with the previously accepted transaction/partial-failure/rollback contract.

**Fail-closed ordering: PASS.**

---

## 10. Prior B1 PASS Findings Remained Closed

Confirmed unchanged and not reopened:

- B1 mutation-surface design — PASS;
- B1 transition-helper contract — PASS;
- B1 six-state database invariants — PASS;
- B1 authority-field immutability — PASS;
- B1 illegal-transition prevention — PASS;
- B1 bounded failure-code contract — PASS;
- B1 safety-case matrix — PASS;
- enforcement-before-use ordering — PASS;
- pre-cutover verification gate structure — PASS;
- atomicity / partial-failure / rollback — PASS.

The correction changes only the exact privilege-neutralization mechanics inside the accepted activation sequence.

---

## 11. B2 / B3 / B4 Remained Closed PASS

Confirmed unchanged and not reopened:

- `SUPA-EIS-B2 — PASS`;
- `SUPA-EIS-B3 — PASS`;
- `SUPA-EIS-B4 — PASS`;
- cross-blocker dispatch/idempotency/failure integrity — PASS;
- Stage B data-minimization — PASS;
- all Infrastructure PASS findings.

No same-lease dispatch authority, guard semantics, browser-role authority, or support-state/Product Truth boundary was changed.

---

## 12. Frozen Product Truth and Architecture Decisions

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
- accepted helper surface;
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

## 13. No Implementation / No Mutation Confirmation

During this mission:

- prior reports modified: **NO**;
- SQL or migrations created or executed: **NO**;
- Supabase test or production mutated: **NO**;
- live tables/functions/RPCs/triggers/constraints/RLS/grants/default privileges created or modified: **NO**;
- repository-wide default-grant policy changed: **NO**;
- `parser_preview_guards` privilege behavior changed: **NO**;
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

`communication/live/report1.123.md`

---

## 14. Final Verdict

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — PASS`

The `service_role` privilege-neutralization correction in `report1.122.md` fully closes the final authorized `SUPA-EIS-B1` blocker. The specification now requires revoke-before-grant privilege narrowing, an exact effective direct privilege target of `{ SELECT }`, helper grants only after that state exists, actual effective-ACL verification before cutover, table-specific scope isolation, and fail-closed behavior if any broader direct privilege survives.

**No Supabase Backend Architecture blocker remains in Stage B.**

This PASS does not authorize EIS lock, Build Lock, Build Mode, SQL/migration execution, Supabase mutation, implementation, AWS resource creation, deployment, publication, production use, or Stage C work.

---

## 15. Remaining Blocker

**None within Supabase Backend Architecture Stage B scope.**

Stage C remains unstarted and requires separate Mission Control sequencing after human review and merge of this report.
