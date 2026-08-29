# SMART BUSINESS — SUPABASE BACKEND ARCHITECTURE

# SB-P-1.11-GC-14 — FINAL SUPABASE B1 BACKEND CONFIRMATION

**Report ID:** report1.119  
**Mission:** SB-P-1.11-GC-14 — Final Supabase B1 Backend Confirmation  
**Authorized By:** `communication/live/instruction1.110.md`  
**Executing Room:** Supabase Backend Architecture  
**Mode:** FINAL B1-ONLY SPECIALIST CONFIRMATION — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE  
**Stage C Authority:** NONE

---

## 1. Exact Merged `main` SHA Reviewed

`7f3c9406aba5918078bb0f4d42016fed44373188`

Commit: `Authorize GC-14 final B1 backend confirmation (#255)`.

Reviewed inputs:

- `communication/live/instruction1.110.md`;
- `communication/live/report1.118.md`;
- `communication/live/report1.117.md`;
- `communication/live/instruction1.109.md`;
- `communication/live/report1.116.md`;
- `communication/live/report1.110.md`;
- `communication/live/report1.108.md`;
- `communication/live/report1.115.md`;
- `supabase/migrations/20260727000000_reconcile_default_grants.sql`;
- `supabase/migrations/20260810120000_sb_p_1_11_gc_1_catalog_import_support_schema.sql`;
- `src/integrations/supabase/client.server.ts`.

Scope was limited strictly to `SUPA-EIS-B1` privileged database-level lifecycle/immutability enforcement. `SUPA-EIS-B2`, `SUPA-EIS-B3`, and `SUPA-EIS-B4` remained closed PASS findings.

---

## 2. Mutation-Surface Confirmation

**Result: PASS.**

`report1.118.md` closes the prior unrestricted privileged-DML gap by selecting the narrow transition-operation model:

- direct `service_role` table authority on `parser_upload_leases` is reduced to `SELECT` only;
- `service_role` has no direct `INSERT`, `UPDATE`, or `DELETE` grant on the lease table;
- initial lease creation remains inside the previously accepted `issue_parser_upload_lease` server-only `SECURITY DEFINER` path;
- lifecycle mutation is routed through narrow database-defined operations only;
- each new lifecycle helper revokes `EXECUTE` from `PUBLIC`, `anon`, and `authenticated` and grants it only to `service_role`;
- browser, Manager, Employee, and unrelated authenticated clients therefore gain no direct lease mutation authority;
- the corrected surface is compatible with the already-PASS B4 privilege boundary.

The normal RLS-bypassing privileged bookkeeping client can no longer perform arbitrary lease-table DML directly.

---

## 3. Transition-Helper Contract

**Result: PASS.**

The specified lifecycle operation set is sufficient:

1. `confirm_parser_upload_lease` — `ISSUED -> UPLOADED`;
2. `claim_parser_upload_lease` — `UPLOADED -> CLAIMED`;
3. `mark_parser_upload_lease_dispatched` — diagnostic `dispatched_at` write while remaining `CLAIMED`;
4. `complete_parser_upload_lease` — `CLAIMED -> CONSUMED`;
5. `fail_parser_upload_lease` — `CLAIMED -> FAILED` with bounded code;
6. `expire_parser_upload_lease` — `ISSUED|UPLOADED -> EXPIRED` when expired;
7. initial creation remains through `issue_parser_upload_lease`.

For each state-changing operation, the specification requires:

- exact lease identity;
- server-derived business identity;
- exact legal source state;
- exact target state;
- non-expiry where required for upload confirmation and dispatch claim;
- database-owned `now()` timestamp effects;
- zero-row transition as fail-closed;
- fixed `SET` clauses that do not modify authority-bearing fields.

The claim helper remains the sole one-use Lambda dispatch authorization gate.

---

## 4. Six-State Database Invariants

**Result: PASS.**

The six-state invariant contract is now explicit at database level:

| State | `confirmed_at` | `claimed_at` | `terminal_at` | `failure_reason` |
|---|---|---|---|---|
| `ISSUED` | NULL | NULL | NULL | NULL |
| `UPLOADED` | NOT NULL | NULL | NULL | NULL |
| `CLAIMED` | NOT NULL | NOT NULL | NULL | NULL |
| `CONSUMED` | NOT NULL | NOT NULL | NOT NULL | NULL |
| `FAILED` | NOT NULL | NOT NULL | NOT NULL | bounded allowed code |
| `EXPIRED` | NULL or NOT NULL | NULL | NOT NULL | NULL |

The static state `CHECK` constraint independently rejects incoherent combinations even if a transition helper were implemented incorrectly.

`dispatched_at` is retained only as diagnostic metadata. It can be written only by `mark_parser_upload_lease_dispatched`, whose predicate requires `state = 'CLAIMED'` and `dispatched_at IS NULL`. It is not consulted by any lifecycle or dispatch-authorization predicate and cannot create dispatch authority.

---

## 5. Authority-Field Immutability

**Result: PASS.**

Post-issuance immutability is structurally enforced for:

- `business_id`;
- `guard_token`;
- `object_key`;
- `expected_byte_length`;
- `expected_sha256_b64`;
- `created_by`;
- `issued_at`;
- `expires_at`.

These values are written only during the authorized initial lease-creation operation. None of the lifecycle helper `SET` clauses references them, and the normal privileged caller has no direct lease-table `UPDATE` grant.

Therefore application discipline is no longer the only protection: the normal service-role bookkeeping path has no database privilege surface capable of modifying those columns after issuance.

---

## 6. Illegal-Transition Prevention

**Result: PASS.**

The legal transition matrix is allowlisted by the available helper set and each helper's hardcoded source-state predicate. No direct privileged DML path exists to bypass it.

The contract rejects or makes unreachable:

- `ISSUED -> CLAIMED`;
- `ISSUED -> CONSUMED`;
- `UPLOADED -> CONSUMED`;
- `CLAIMED -> UPLOADED`;
- terminal -> non-terminal;
- terminal -> different terminal;
- any backward transition;
- `CLAIMED` without the one-use claim helper;
- terminal outcome without a legal source state;
- arbitrary direct privileged state mutation.

A mismatched source state yields a zero-row helper result and fails closed.

---

## 7. Failure-Code Contract

**Result: PASS.**

`report1.118.md` consolidates `failure_reason` into a finite, sanitized sixteen-code set enforced by the lease state invariant `CHECK` constraint.

The contract excludes:

- raw AWS/provider errors;
- stack traces;
- free-text provider output;
- merchant-controlled error strings.

`fail_parser_upload_lease` may additionally fail-fast on invalid input, but the database `CHECK` remains the enforcement backstop.

---

## 8. Migration-Order Contract

**Result: CHANGES REQUIRED — sole remaining B1 blocker.**

The physical enforcement design itself is sufficiently specified, but the required migration-order contract is not.

The governing GC-13 correction instruction explicitly required `report1.118.md` to lock:

> how migration ordering ensures enforcement exists before the support-state path becomes usable.

The current final confirmation instruction likewise requires verification of a future order equivalent to:

1. schema/support objects exist;
2. invariant constraints/helpers exist;
3. inherited/default grants are neutralized;
4. direct mutation restrictions are active;
5. narrow helper grants are applied;
6. only then may the application use the lifecycle.

`report1.118.md` specifies the objects, constraints, helper bodies, and final grant state, but it does not state this migration sequencing contract or otherwise bind activation/use to enforcement-first ordering.

Because this mission must confirm source-supported specification rather than invent missing migration semantics, that omission remains a B1 specification blocker.

### Exact narrow correction required

Add one bounded migration-order section to the EIS/addendum that requires, before any parser-support endpoint may use the lifecycle:

1. create the lease schema/support objects;
2. add the six-state invariant/failure-code constraints and all required helper functions;
3. immediately neutralize inherited/default privileges from `PUBLIC`, `anon`, and `authenticated`;
4. remove direct `service_role` lease-table DML, retaining only the explicitly selected read authority;
5. grant `service_role` EXECUTE only on the narrow creation/transition helpers;
6. verify browser roles cannot use the table/functions and verify direct service-role DML is denied;
7. only after those controls exist may application code be switched to the lifecycle helpers.

No migration or SQL execution is authorized by this finding.

---

## 9. Safety-Case Matrix

**Result: PASS for every specified lifecycle/immutability case; migration activation ordering remains the sole blocker.**

| Safety case | Confirmation |
|---|---|
| post-issuance `business_id` mutation | REJECTED — no direct privileged UPDATE and no helper writes it |
| `guard_token` mutation | REJECTED |
| `object_key` mutation | REJECTED |
| expected-size mutation | REJECTED |
| checksum mutation | REJECTED |
| `created_by` mutation | REJECTED |
| `issued_at` mutation | REJECTED |
| `expires_at` mutation | REJECTED |
| `ISSUED -> CLAIMED` | REJECTED |
| `ISSUED -> CONSUMED` | REJECTED |
| `UPLOADED -> CONSUMED` | REJECTED |
| `CLAIMED -> UPLOADED` | REJECTED |
| terminal reopening | REJECTED |
| terminal switching | REJECTED |
| `CLAIMED` without coherent `claimed_at` | REJECTED by helper + CHECK |
| `ISSUED` with `confirmed_at` populated | REJECTED by CHECK |
| terminal without `terminal_at` | REJECTED by CHECK |
| non-terminal with `terminal_at` | REJECTED by CHECK |
| invalid/free-text `failure_reason` | REJECTED by bounded CHECK |
| arbitrary direct privileged update bypass | REJECTED by grant surface |
| second same-lease Lambda dispatch authority | NOT CREATED — claim helper remains sole one-winner gate |

---

## 10. Closed Findings and Frozen Decisions

`SUPA-EIS-B2`, `SUPA-EIS-B3`, and `SUPA-EIS-B4` remained closed `PASS` findings. They were not re-reviewed or redesigned.

Also preserved without modification:

- cross-blocker dispatch/idempotency/failure-integrity PASS;
- Stage B data-minimization PASS;
- every Infrastructure PASS finding;
- Owner-only Phase 1;
- exactly nineteen public Catalog commands;
- Catalog / Inventory truth separation;
- D-047;
- D-068;
- BKR-1 through BKR-5;
- EC-2;
- EC-3;
- AWS Lambda narrow parser runtime;
- standard Lambda default compute;
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
- 4,194,304-byte response ceiling;
- deterministic pre-stream `RESPONSE_TOO_LARGE`;
- Product Truth remains governed by the existing Founder Workflow and nineteen-command boundary.

---

## 11. No Implementation / No Mutation Confirmation

During this mission:

- prior reports modified: **NO**;
- SQL or migrations created or executed: **NO**;
- Supabase mutated: **NO**;
- live tables/functions/RPCs/triggers/constraints/RLS/grants/default privileges changed: **NO**;
- application/parser implementation performed: **NO**;
- AWS/S3/IAM changed: **NO**;
- project AWS commands executed: **NO**;
- dependencies added or updated: **NO**;
- Lovable changed: **NO**;
- Product Truth changed: **NO**;
- employee/manager permissions changed: **NO**;
- twentieth Catalog command added: **NO**;
- parser/runtime limits weakened: **NO**;
- EIS lock entered: **NO**;
- Build Lock entered: **NO**;
- Build Mode entered: **NO**;
- deployment/publication performed: **NO**;
- production touched: **NO**;
- Stage C begun: **NO**.

The only repository file created by this mission is `communication/live/report1.119.md`.

---

## 12. Final Verdict

`LAMBDA PARSER EIS SUPABASE BACKEND REVIEW — CHANGES REQUIRED`

Exactly one Supabase Backend Architecture blocker remains in Stage B:

**`SUPA-EIS-B1 — migration activation ordering is not yet explicitly locked, so the specification does not prove that lifecycle enforcement is installed and privileges narrowed before the support-state path becomes usable.`**

The mutation surface, transition helpers, six-state invariants, authority-field immutability, illegal-transition prevention, bounded failure-code contract, and safety cases otherwise PASS.

Stage C remains locked. This verdict grants no EIS lock, Build Lock, Build Mode, implementation, migration, deployment, production, or Stage C authority.
