# SMART BUSINESS MISSION CONTROL

# Instruction

**Mission ID:** `SB-REL-1.10-1.11`

**Gate:** `Gate 2A-C3B-D2 — Business/Inventory HTTP 404 Read-Only Diagnosis`

**Parent Gate:** `Gate 2A-C3B — F23-01 Live Cross-Tenant Read-Isolation Verification`

**From:** Mission Control

**To:** `Claude Code — repository-capable read-only diagnostic/verifier`

**Status:** `ACTIVE AFTER HUMAN MERGE — NARROW READ-ONLY HTTP-DIAGNOSTIC AUTHORIZATION`

**Date:** `2026-08-31`

---

## 1. Trigger

Gate 2A-C3B-D1 closed canonically through PR #445 with:

`BLOCKED — VERIFICATION-PATH DIAGNOSIS INCONCLUSIVE`

D1 independently established that:

- the production fixtures still exist and are correctly owned;
- the relevant `businesses` and `inventory_items` RLS policies and grants are intact;
- both relations exist under the expected names;
- the human probe used the correct PostgREST query-filter request shape: `?id=eq.<uuid>&select=id`;
- the recorded Business/Inventory own-scope and cross-tenant requests nevertheless returned HTTP 404;
- the exact cause of those 404 responses remains unresolved.

Catalog response semantics are sufficiently understood for a later retest, but Business and Inventory are not yet retest-eligible.

This instruction authorizes only the smallest additional read-only diagnosis necessary to identify, or sharply bound, the source of the Business/Inventory HTTP 404 behavior.

## 2. Canonical Baseline

Before diagnosis, verify canonical repository `SmartBusinessv1/smart-business`.

Expected authorization baseline:

`c0cb506ffd9dbefbedf85fa995153f8bbe69f07b`

Authorized production Supabase project:

- project ID: `gysgzasfcjvtrgaigfyn`;
- name: `smart-business`;
- region: `ap-south-1`.

STOP if current state has materially changed in a way that affects this gate.

## 3. Objective

Determine, without using Owner A or Owner B credentials and without changing production state, why the prior correctly-shaped requests to:

- `/rest/v1/businesses?id=eq.<uuid>&select=id`
- `/rest/v1/inventory_items?id=eq.<uuid>&select=id`

were recorded by the human probe as HTTP 404.

The diagnosis must focus on the HTTP/PostgREST/API boundary, not re-open already-settled fixture/RLS/grant questions unless new evidence contradicts D1.

## 4. Authorized Read-Only Evidence

Claude Code may use only the minimum necessary read-only sources:

1. canonical repository and prior Gate 2A-C3B/D1 evidence;
2. current production project identity and health;
3. non-secret Supabase API/PostgREST logs from the relevant time window, where available;
4. non-secret request metadata such as request path, method, status, PostgREST error code/class, response content type, and safe response body fields that do not expose merchant data or credentials;
5. current PostgREST/API schema-exposure or routing configuration through supported read-only project/config/metadata paths, if available;
6. narrowly scoped unauthenticated or publishable-key-only read-only route-existence probes against the two synthetic fixture IDs, only if needed to distinguish route/schema-cache behavior from authorization behavior.

Any diagnostic HTTP probe must be `GET`, `HEAD`, or `OPTIONS` only. It must use no Owner A/Owner B token, no service-role key, no database-owner simulation, and no real merchant identifier.

A publishable/anon-key route probe is not an F23-01 isolation retest and must not be interpreted as owner-level RLS evidence.

## 5. Required Questions

### H1 — Exact prior HTTP evidence

If logs preserve the original probe requests, determine for Business and Inventory:

- exact request method/path shape;
- HTTP status;
- PostgREST/Supabase error code or class, if any;
- safe response-body/error-message fields, if available;
- whether the 404 originated from PostgREST routing/schema cache, an upstream API layer, or another evidenced component.

Do not record authorization headers, JWTs, cookies, passwords, or keys.

### H2 — Route/schema exposure

Determine whether `public.businesses` and `public.inventory_items` are currently exposed through the production PostgREST API route expected by the application.

Distinguish between:

- relation exists in PostgreSQL;
- relation is exposed through PostgREST;
- route is reachable;
- role is authorized to read rows.

Do not treat these as the same fact.

### H3 — Safe route probe

If logs/config are insufficient, perform the smallest safe non-owner route-existence probe necessary.

The probe may confirm only route behavior and error class. It must not use Owner A/B credentials or attempt to prove tenant isolation.

### H4 — Root-cause classification

Classify the 404 cause as one of:

- `CONFIRMED — POSTGREST ROUTE/SCHEMA EXPOSURE`
- `CONFIRMED — API/REQUEST CONSTRUCTION OUTSIDE ID FILTER`
- `CONFIRMED — UPSTREAM/API GATEWAY BEHAVIOR`
- `CONFIRMED — OTHER EVIDENCED CAUSE`
- `UNRESOLVED — INSUFFICIENT READ-ONLY EVIDENCE`

Do not infer a cause solely from HTTP status.

### H5 — Retest readiness

State whether Business/Inventory can now be safely retested and, if yes, provide the exact smallest human probe adjustment required.

A recommendation may change request headers, safe response/error parsing, schema header, or endpoint construction only if directly supported by evidence.

No database/application repair is authorized.

## 6. Explicitly Not Authorized

This gate does not authorize:

- Owner A or Owner B authentication/session replay;
- requesting or receiving Owner credentials or tokens;
- service-role impersonation or privileged owner simulation;
- F23-01 retest;
- production `INSERT`, `UPDATE`, `DELETE`, `UPSERT`, `PATCH`, mutation RPC, or DDL;
- fixture creation/edit/cleanup;
- migration creation or execution;
- RLS, policy, grant, schema, role, function, trigger, Auth, OAuth, default-privilege, secret, or API configuration changes;
- application or Lovable changes;
- AWS/Lambda/parser/bulk-import changes;
- Cloudflare/DNS/domain changes;
- deployment, publication, release, or merchant exposure;
- F23-02/F23-03/F23-04 progression;
- Product Truth changes;
- reopening accepted Product Missions;
- self-merge.

If diagnosis reveals that a configuration or implementation change is required, record that fact and STOP. Do not perform the change.

## 7. Evidence Precision

Tag material claims as:

- `[INDEPENDENTLY VERIFIED]`
- `[HUMAN/OPERATOR-ATTESTED]`
- `[INFERRED FROM DOCUMENTED/RUNTIME SEMANTICS]`
- `[UNRESOLVED]`

Preserve the prior blocked F23-01 attempt and D1 result. Do not rewrite either as PASS.

## 8. Required Report

Update `communication/live/report.md` with:

1. canonical SHA reviewed;
2. production identity/health;
3. evidence inspected;
4. H1–H5 answers;
5. whether any material security defect is proven;
6. whether any configuration/implementation correction appears necessary;
7. exact retest recommendation, if eligible;
8. no-mutation/no-secret/no-owner-session confirmation;
9. final disposition.

End with exactly one of:

- `PASS — HTTP 404 CAUSE DIAGNOSED — BUSINESS/INVENTORY RETEST ELIGIBLE`
- `BLOCKED — HTTP 404 DIAGNOSIS INCONCLUSIVE`
- `FAIL — MATERIAL SECURITY OR API-BOUNDARY DEFECT IDENTIFIED`
- `STOP — HTTP DIAGNOSTIC INCIDENT`

Submit through a protected branch and PR. Do not self-merge.

## 9. Continuation Boundary

A PASS here does not retest or close F23-01.

It makes only a separately authorized human/operator F23-01 retest eligible for Mission Control consideration.

No downstream release-readiness authority is created.

---

**Mission Control boundary:** diagnose the Business/Inventory HTTP 404 mechanism using only non-owner read-only evidence; do not repair, replay owner sessions, retest F23-01, or advance release readiness.
