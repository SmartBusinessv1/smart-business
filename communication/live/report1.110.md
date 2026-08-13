# SMART BUSINESS — SUPABASE BACKEND ARCHITECTURE REVIEW

## SB-P-1.11-GC-6 — Stage B Supabase Backend Architecture Review

**Report ID:** report1.110  
**Authorized By:** `communication/live/instruction1.102.md`  
**Executing Room:** Supabase Backend Architecture  
**Mode:** REVIEW ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Exact Baseline and Final Verdict

Latest merged `main` reviewed:

`d039703208d30eadf83df8f187a08ae777c511e9`

Stage A prerequisite is satisfied by merged `communication/live/report1.115.md`:

`LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — PASS`

**Final verdict:**

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`

The Lambda + transient private S3 architecture remains compatible with the locked Founder Workflow, Owner-only Phase 1 authority, Catalog/Inventory truth separation, D-047, D-068, BKR-1 through BKR-5, EC-2, EC-3, and exactly nineteen public Catalog commands. Four bounded Supabase support-state blockers remain. Stage C must not begin.

---

## 2. Evidence Reviewed

Primary and governing evidence:

- `communication/live/instruction1.102.md`
- `communication/live/instruction1.101.md`
- `communication/live/report1.108.md`

Infrastructure chain:

- `communication/live/report1.109.md`
- `communication/live/report1.112.md`
- `communication/live/report1.113.md`
- `communication/live/report1.114.md`
- `communication/live/report1.115.md`

Architecture/security chain:

- `communication/live/report1.103.md`
- `communication/live/report1.104.md`
- `communication/live/report1.105.md`
- `communication/live/report1.106.md`
- `communication/live/report1.107.md`

Founder Workflow baseline:

- `communication/live/report1.96.md`
- `communication/live/report1.98.md`
- `communication/live/report1.100.md`
- `communication/live/report1.101.md`
- `communication/live/report1.102.md`

Repository backend evidence:

- `supabase/migrations/20260727000000_reconcile_default_grants.sql`
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`
- `src/integrations/supabase/client.server.ts`

Infrastructure corrections confirmed by `report1.115.md` remain closed. No direct Supabase incompatibility was found with the 4,194,304-byte response ceiling, `ChecksumMode = ENABLED`, deterministic `RESPONSE_TOO_LARGE`, or the corrected B1 acceptance matrix.

---

## 3. Parser Upload Lease Physical Contract

**Result: CHANGES REQUIRED — SUPA-EIS-B1.**

The lease is correctly classified as narrow transport/security support state rather than Product Truth. Server-derived `business_id`, server-generated lease/object identities, expected byte length, expected SHA-256, actor audit identity, expiry, state, failure code, and lifecycle timestamps are appropriate. No merchant-controlled authority field is trusted.

The blocking defect is the physical lifecycle. `report1.108.md` declares `CONSUMED` terminal, but illustrates dispatch claim as:

```sql
UPDATE parser_upload_leases
   SET state = 'CONSUMED', terminal_at = now()
 WHERE id = :leaseId
   AND business_id = :businessId
   AND state = 'UPLOADED'
RETURNING id;
```

The same EIS says the claimed lease should be finalized to `CONSUMED` only after successful Lambda output validation or to `FAILED` on failure. A row cannot already be terminal `CONSUMED` with `terminal_at` set and still be a pending dispatch that may later become `FAILED`.

Before Build Lock, the EIS must lock one coherent non-terminal claim representation or equivalent explicit claim marker, with terminal outcome written only after the Lambda outcome is resolved.

`ISSUED → UPLOADED` must also be an atomic transition conditioned on authoritative lease/business identity, `state = 'ISSUED'`, and non-expiry. Dispatch claim must atomically enforce non-expiry too; application-side prechecks alone are insufficient.

Because service-role bookkeeping bypasses RLS, the final physical contract also needs database-level coherence for state, `confirmed_at`, `terminal_at`, `failure_reason`, expiry, and immutable lease authority fields.

Lease purpose/Product Truth separation itself: **PASS**.

---

## 4. Atomic One-Use Claim and Failure Recovery

**Result: CHANGES REQUIRED — SUPA-EIS-B1 / SUPA-EIS-B2.**

A conditional single-row update with `RETURNING` is an appropriate Postgres one-winner primitive. The defect is the represented state and retry semantics.

`report1.108.md` says that if Lambda completes but Smart Business loses the response, the lease remains in the claimed state and a client retry re-enters at Lambda invocation. That can create a second Lambda dispatch while the first invocation may still be running or may already have completed.

**SUPA-EIS-B2:** an unknown post-dispatch outcome must fail closed for that lease. The same lease must not create a second parse authority. Recovery may allow guard release/expiry and a separately authorized fresh merchant attempt, but cannot re-dispatch Lambda from the already-claimed lease.

Terminal `CONSUMED`, `FAILED`, and `EXPIRED` states must remain one-way and unreopenable. Duplicate confirmation, duplicate dispatch, stale lease, expired lease, and terminal replay must resolve without another Lambda call.

---

## 5. EC-2 Durable Shared Guard

**Result: CHANGES REQUIRED — SUPA-EIS-B3.**

The selected Postgres primitive is sound in principle: one durable row per `business_id`, atomic conditional acquisition, shared across application instances, acquired before lease/upload capability issuance, and self-recovering by expiry. Lambda reserved concurrency remains defense-in-depth only.

The physical guard/lease association is incomplete. The guard shape contains `lease_id`, and release is specified as:

```sql
UPDATE parser_preview_guards
   SET expires_at = now()
 WHERE business_id = :businessId
   AND lease_id = :leaseId;
```

But guard acquisition occurs before the lease exists and does not populate `lease_id`; no later atomic binding step is specified. Normal terminal release can therefore update zero rows and leave the business blocked until guard expiry.

The EIS must specify one race-safe guard-to-lease association mechanism while keeping EC-2 logically separate from Parser Upload Lease state.

The EIS also calls the attempt rule a "rolling 10-minute window" but specifies a single window start plus counter reset, which is a fixed-window mechanism. The wording and intended abuse-control semantics must match the selected Postgres mechanism. This review does not change the threshold or choose a new rate algorithm.

---

## 6. RLS, Grants, and Service-Role Boundary

**Result: CHANGES REQUIRED — SUPA-EIS-B4.**

The intended authority boundary is correct:

- browser/client: no direct lease or guard table authority;
- Manager/Employee: no new access;
- Smart Business server: authoritative business derivation;
- service role: fixed support-state bookkeeping only;
- Lambda: no Supabase/Product Truth authority;
- Product Truth: remains behind existing governed Catalog/Inventory paths.

However, the repository's `20260727000000_reconcile_default_grants.sql` grants broad forward privileges on future `public` objects, including EXECUTE on future functions to `anon`, `authenticated`, and `service_role`.

The EIS proposes `SECURITY DEFINER` helpers:

- `acquire_parser_preview_guard(p_business_id uuid)`
- `release_parser_preview_guard(p_business_id uuid, p_lease_id uuid)`

Without explicit privilege neutralization, browser roles can inherit EXECUTE on these state-mutating functions. This is a cross-tenant/denial-of-service boundary.

The future migration contract must explicitly revoke inherited/default table access and helper-function EXECUTE from `PUBLIC`, `anon`, and `authenticated`, then grant only the intended narrow server authority. No broad `USING (true)` or `WITH CHECK (true)` policy is acceptable.

No RLS, grant, or function is changed by this review.

---

## 7. Migration and Dependency Ordering

**Result: CHANGES REQUIRED pending B1/B3/B4.**

A future migration is viable after the physical contracts above are corrected. No conflict was found with BKR-1 through BKR-5, D-047, D-068, Catalog dependent-history protection, Inventory import history, Founder Workflow idempotency, or the nineteen-command boundary.

No parser-support FK needs to reference `inventory_items`, so the previously rejected Inventory FK-order mistake is not reintroduced. Existing Inventory binding remains:

```text
(inventory_item_id, business_id)
→ inventory_items(id, business_id)
```

where relevant to existing contracts.

Safe future migration ordering must ensure final constraints/lifecycle invariants exist before support operations are exposed, inherited privileges are neutralized before use, and `SECURITY DEFINER` EXECUTE is narrowed before any endpoint depends on the helpers.

No SQL or migration is created by this review.

---

## 8. Idempotency / Failure Integrity

**Result: CHANGES REQUIRED pending B1/B2.**

Preserved outcomes remain correct:

- parser failure creates zero Catalog Product Truth;
- parser failure creates zero Inventory Product Truth;
- parser success alone creates zero Product Truth;
- import-support writes begin only after successful parser consumption plus Smart Business validation/classification;
- downstream Product Truth remains governed by existing Founder Workflow and Catalog/Inventory contracts;
- BKR-1 through BKR-5 remain untouched.

Duplicate requests, replay, retry, timeout, server crash, duplicate upload confirmation, duplicate dispatch, stale lease, expired lease, and terminal replay become safe only after B1/B2 are corrected. A post-dispatch unknown outcome must never create a second Lambda invocation authority from the same lease.

---

## 9. Data Minimization / Retention

**Result: PASS, with non-blocking retention precision.**

Supabase support state is limited to metadata needed for tenant/request binding, checksum/size integrity, abuse control, one-use/replay prevention, lifecycle, expiry/recovery, and auditability.

It does **not** store raw merchant files, workbook contents, CSV rows, product cell values, raw AWS provider errors, AWS credentials, X.509 private keys, or IAM private-key material. `failure_reason` is correctly bounded to sanitized internal codes.

Non-blocking precision: before Build Lock, the EIS should state the operational retention principle for terminal lease metadata and stale guard metadata after their rate-window/audit value expires. This is support-state cleanup only and must never affect Product Truth.

---

## 10. Stage B Matrix

| Review area | Result | Blocking? |
|---|---|---|
| Parser Upload Lease purpose / Product Truth separation | PASS | No |
| Parser Upload Lease physical lifecycle | CHANGES REQUIRED — B1 | Yes |
| Atomic one-use claim | CHANGES REQUIRED — B1/B2 | Yes |
| Unknown-outcome/retry safety | CHANGES REQUIRED — B2 | Yes |
| EC-2 durable/shared persistence | PASS IN PRINCIPLE | No |
| EC-2 guard↔lease binding / rate semantics | CHANGES REQUIRED — B3 | Yes |
| RLS/grant/service-role boundary | CHANGES REQUIRED — B4 | Yes |
| Migration/dependency ordering | CHANGES REQUIRED pending B1/B3/B4 | Yes |
| BKR-1 through BKR-5 compatibility | PASS | No |
| Idempotency/failure integrity | CHANGES REQUIRED pending B1/B2 | Yes |
| Data minimization | PASS | No |
| Supabase metadata retention precision | NON-BLOCKING PRECISION | No |

---

## 11. Exact Required Corrections

**SUPA-EIS-B1:** Lock a coherent lease transition model with a non-terminal dispatch claim representation and exact atomic predicates for confirmation, claim, expiry, success/failure finalization, and terminal replay.

**SUPA-EIS-B2:** Remove same-lease Lambda re-dispatch after lost/ambiguous post-dispatch outcome.

**SUPA-EIS-B3:** Lock race-safe guard-to-lease binding/release and align rate-window wording with the selected Postgres mechanism.

**SUPA-EIS-B4:** Explicitly neutralize inherited/default browser-role table and function privileges, especially EXECUTE on new `SECURITY DEFINER` helpers, before granting only narrow server authority.

No unrelated architecture redesign is requested.

---

## 12. Locked Decisions Preserved

This review does not reopen Owner-only Phase 1, exactly nineteen public Catalog commands, Catalog/Inventory truth separation, D-047, D-068, BKR-1 through BKR-5, EC-2, EC-3, AWS Lambda default compute, `nodejs24.x`, `ap-south-1`, 2,048 MB memory, 15-second timeout, 10-second parser budget, finite reserved concurrency, transient private S3, IAM Roles Anywhere, Parser Upload Lease concept, `ChecksumMode = ENABLED`, Papa Parse, ExcelJS, `node:zlib`, the locked input/decompression/row/column/cell limits, 4,194,304-byte response ceiling, deterministic `RESPONSE_TOO_LARGE`, or the final corrected B1 acceptance matrix.

Infrastructure findings confirmed by `report1.115.md` remain closed.

---

## 13. No-Implementation / No-Mutation Confirmation

During this review:

- SQL executed: **NO**
- migration created or modified: **NO**
- Supabase test or production mutated: **NO**
- table/function/RPC created or modified: **NO**
- RLS or grants changed: **NO**
- application/parser code implemented or modified: **NO**
- AWS/S3/IAM resource changed: **NO**
- dependency installed or modified: **NO**
- Lovable changed: **NO**
- Product Truth changed: **NO**
- permissions expanded: **NO**
- Catalog command added or modified: **NO**
- Build Lock or Build Mode entered: **NO**
- deployment/publish action performed: **NO**
- production touched: **NO**
- Stage C begun: **NO**

The only repository artifact authorized for creation is `communication/live/report1.110.md`.

---

## 14. Remaining Blockers and Next Gate

Remaining blockers are exactly `SUPA-EIS-B1`, `SUPA-EIS-B2`, `SUPA-EIS-B3`, and `SUPA-EIS-B4` above.

Stage C remains blocked. Mission Control should resolve these bounded EIS backend corrections and require a narrow Stage B confirmation before Stage C.

---

## 15. Final Verdict

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`

Stage B has remaining Supabase Backend Architecture blockers.

This verdict does not authorize implementation, SQL, migrations, Supabase mutation, AWS/S3/IAM change, Lovable change, Product Truth change, permission change, Catalog command change, Build Lock, Build Mode, deployment, production action, or Stage C.
