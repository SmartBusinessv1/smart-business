# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-IMPL-1 — STAGE 3 VERIFICATION ADDENDUM

**Instruction ID:** instruction1.42  
**Mission:** SB-P-1.11-IMPL-1 — Initial Phase 1 Catalog Backend Implementation  
**Mission Type:** Narrow Non-Production Verification Addendum  
**Reporting Room:** Claude Code  
**Authorized By:** Mission Control  
**Status:** ACTIVE AFTER HUMAN MERGE  
**Production Authority:** NONE  
**Lovable Authority:** NONE

---

## 1. Purpose

Complete only the two missing non-production evidence items identified by:

- `communication/live/report1.42.md` — Supabase supporting review;
- `communication/live/report1.43.md` — Security lead review.

This instruction does not reopen the accepted architecture, Product Truth, eleven-table boundary, nineteen-command boundary, seven-role model, or any completed Stage 0–3 work.

The only authorized objectives are:

1. true two-session concurrency verification;
2. explicit expected-state fingerprint-drift rejection verification.

---

## 2. Binding Sources

Execute according to:

1. `communication/live/instruction1.40.md`;
2. `communication/live/instruction1.41.md`;
3. `communication/live/report1.37.md`;
4. `communication/live/report1.41.md`;
5. `communication/live/report1.42.md`;
6. `communication/live/report1.43.md`;
7. merged implementation commit `e6203b81af9994830fd7f557fa49702636dad9e5`;
8. merged review-record commit `58311216ded2a3edab8bb7524c59f96935cc905c`.

Where any earlier summary conflicts with the merged implementation or the post-merge reviews, the merged repository evidence governs.

---

## 3. Authorized Environment

Use only the dedicated non-production Supabase project:

- project ref: `drravyyauixltoihzmwo`;
- project name: `smart-business-test`;
- organization: `himkzepyuyaejqjieugk`;
- region: `ap-south-1`.

Before any test mutation, reconfirm all four identity fields and reconfirm that the target is not production:

- production ref: `gysgzasfcjvtrgaigfyn`.

No production mutation is authorized.

---

## 4. Scope A — True Two-Session Concurrency Verification

Use two genuinely independent database sessions or connections against the test project. Sequential calls, a single transaction, or simulated ordering inside one session do not satisfy this requirement.

### 4.1 Same-Key, Same-Payload Idempotency Contention

Run two concurrent calls to the same write command using:

- the same authenticated Owner;
- the same business;
- the same command;
- the same idempotency key;
- the same payload.

The chosen command should create an observable business row, preferably `create_catalog_category` or `create_catalog_product`.

Required proof:

- both calls terminate without deadlock;
- exactly one business mutation is committed;
- exactly one authoritative idempotency row exists;
- both callers receive the same terminal outcome and result reference;
- no duplicate audit or event record is created;
- no unexpected exception escapes.

### 4.2 Same-Key, Different-Payload Idempotency Contention

Run two concurrent calls using:

- the same authenticated Owner;
- the same business;
- the same command;
- the same idempotency key;
- different payloads.

Required proof:

- no deadlock;
- exactly one payload becomes authoritative;
- exactly one business mutation is committed;
- the losing call returns `IDEMPOTENCY_CONFLICT`;
- exactly one idempotency row exists for that operation/key/business tuple;
- no duplicate or mixed-result audit/event records exist.

### 4.3 D-068 Preview-versus-Confirm Lock Ordering

Create a valid open preview token, then use two genuinely independent sessions to exercise concurrent activity on the same product involving:

- one session executing `preview_catalog_inventory_link_change` for that product; and
- one session executing either `assign_or_replace_catalog_inventory_link` or `remove_catalog_inventory_link` using the existing valid preview token.

Structure the test so the operations overlap rather than complete sequentially. Use safe test-only coordination such as transaction barriers, controlled sleeps, or explicit lock timing where necessary.

Required proof:

- both sessions terminate;
- no deadlock is reported;
- product-before-token lock ordering is respected by observed behavior;
- at most one confirmation path commits against the valid token;
- any superseded, consumed, or no-longer-current path returns the approved public outcome, normally `STALE_STATE`;
- no duplicate link event or price event is created;
- product state remains internally consistent.

### 4.4 Evidence Requirements for Concurrency

Record:

- the two connection/session identifiers;
- start and finish timestamps;
- the exact SQL or scripts used;
- the deliberate overlap method;
- each session's result;
- row counts before and after;
- authoritative idempotency/event rows after completion;
- confirmation that no deadlock or timeout occurred.

Do not rely only on source-code inspection for this addendum.

---

## 5. Scope B — Explicit Expected-State Fingerprint-Drift Verification

Use the test project and an authenticated Owner fixture.

### 5.1 Assign-or-Replace Drift

1. Create or select a product and a valid target inventory item.
2. Call `preview_catalog_inventory_link_change` for `assign_or_replace` and capture the preview token.
3. After the preview is created, mutate at least one field included in the expected-state fingerprint using an approved command, not direct table DML. Suitable fields include:
   - current inventory link;
   - selling unit;
   - current selling price;
   - another fingerprint-bound product state field confirmed by the merged implementation.
4. Attempt to confirm the old preview token.

Required proof:

- confirmation returns `STALE_STATE`;
- no new `catalog_product_link_events` row is committed for the stale confirmation;
- no new `catalog_selling_price_events` row is committed for the stale confirmation;
- the product is not changed by the stale confirmation;
- the preview token is not converted into a successful consumed confirmation record;
- no internal stale-state reason is exposed publicly.

### 5.2 Remove Drift

Repeat the same pattern for a `remove` preview where practical:

1. begin with a linked product;
2. create a valid `remove` preview;
3. mutate a fingerprint-bound field after preview creation through an approved command;
4. attempt to execute the old remove token.

Required proof:

- `STALE_STATE`;
- no removal occurs;
- no new link event is created for the rejected confirmation;
- unit and price remain unchanged by the stale remove attempt;
- no internal reason is exposed.

If a safe approved command cannot produce a meaningful fingerprint drift for the remove path, document that limitation precisely and provide an alternative explicit drift case that still exercises the remove confirmation's fingerprint comparison. Do not use unauthorized direct DML merely to force the state.

---

## 6. Permitted Repository Changes

Claude Code may add only the minimum verification artifacts required for reproducibility, such as:

- `supabase/verification/sb-p-1-11-impl-1-concurrency-check.*`;
- `supabase/verification/sb-p-1-11-impl-1-fingerprint-drift-check.*`;
- helper scripts under an existing verification/test location;
- the completion report required by Section 9.

Do not modify the accepted Stage 1 or Stage 2 migrations unless the tests reveal a genuine defect.

If a genuine defect is found:

1. stop broad execution;
2. report the exact defect, impact, and reproduction evidence;
3. do not redesign the architecture;
4. do not apply a production fix;
5. make only the smallest test-project and repository correction necessary if it remains within the existing accepted contract;
6. obtain Mission Control disposition before expanding scope.

---

## 7. Explicit Exclusions

This addendum does not authorize:

- production migration or production mutation;
- Lovable frontend work;
- TanStack/Vite repair;
- dependency changes unrelated to verification tooling;
- a twentieth public function;
- a twelfth initial Phase 1 table;
- schema redesign;
- Product Truth changes;
- new permissions or employee access;
- scheduler or cleanup-worker implementation;
- publish or deployment;
- service-role exposure;
- self-approval or self-merge.

---

## 8. Stop Conditions

Stop and report immediately if:

- the project identity does not match Section 3;
- production becomes the active or linked target;
- true independent sessions cannot be established safely;
- testing requires a production credential or service-role credential to be exposed to client code;
- a deadlock, duplicate write, cross-tenant access, unauthorized disclosure, or over-permissive behavior is observed;
- the fingerprint-drift path commits a stale confirmation;
- completing the test requires architecture expansion;
- any migration change becomes necessary.

---

## 9. Required Completion Report

Create:

`communication/live/report1.44.md`

The report must include:

1. branch and commit evidence;
2. test-project identity confirmation;
3. changed-file inventory;
4. exact concurrency test methodology;
5. session/connection evidence;
6. same-key/same-payload result;
7. same-key/different-payload result;
8. D-068 concurrent preview/confirm result;
9. deadlock and timeout evidence;
10. explicit assign-or-replace fingerprint-drift result;
11. explicit remove fingerprint-drift result or documented approved alternative;
12. before/after row counts for products, idempotency rows, audit events, link events, and price events as relevant;
13. defects found and corrections made, if any;
14. final test-project state;
15. production-untouched confirmation;
16. excluded-scope confirmation;
17. final verdict using exactly one of:

- `VERIFICATION ADDENDUM PASSED — READY FOR SPECIALIST RECHECK`
- `VERIFICATION ADDENDUM FAILED — CORRECTIONS REQUIRED`
- `VERIFICATION ADDENDUM BLOCKED — HUMAN OR ENVIRONMENT ACTION REQUIRED`

---

## 10. Completion Boundary

After producing `report1.44.md`, stop.

Do not authorize production.

Do not authorize Lovable.

Do not publish, deploy, merge, or apply anything beyond the dedicated test project.

Human review and specialist recheck remain required.

---

## Next Logical Step

After this instruction is merged, Claude Code should synchronize `main`, execute only this narrow verification addendum against `drravyyauixltoihzmwo`, and return `communication/live/report1.44.md` for Supabase and Security recheck.