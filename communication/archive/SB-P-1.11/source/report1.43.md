# SMART BUSINESS — SECURITY LEAD REVIEW

## SB-P-1.11-IMPL-1 — POST-MERGE IMPLEMENTATION REVIEW

**Report ID:** report1.43  
**Reviewing Room:** Security & Permissions Architecture  
**Reviewed Commit:** `e6203b81af9994830fd7f557fa49702636dad9e5`  
**Supporting Review:** `communication/live/report1.42.md`  
**Status:** COMPLETE

---

## Review Scope

Security review covered:

- owner-only authorization through `businesses.owner_id`;
- seven narrow executor roles;
- `SECURITY DEFINER` function boundaries;
- RLS and direct-grant exposure;
- service-role separation;
- tenant isolation;
- reference-cost confidentiality;
- idempotency integrity;
- D-068 same-actor and stale-state behavior;
- repository service-role handling;
- Stage 3 evidence and admitted limitations.

This review does not authorize production migration, Lovable work, publishing, or deployment.

## Security Controls Confirmed

The merged implementation and Stage 3 evidence support the following:

- executor roles are `NOLOGIN` and do not hold `BYPASSRLS`;
- no executor belongs to `service_role`;
- all 19 public RPCs use `SECURITY DEFINER` with an empty `search_path`;
- actor and business are server-derived rather than caller-supplied;
- `PUBLIC` and `anon` cannot execute the 19 RPCs;
- `authenticated` execution is limited to the approved 19 RPCs;
- direct authenticated catalog access is restricted to the approved category columns;
- direct authenticated catalog writes are denied;
- cross-business product read and search were denied in behavioral tests;
- reference cost is structurally absent from general product summaries and direct cost-history reads are denied;
- D-068 wrong-actor, consumed-token, and expired/invalid paths collapse to `STALE_STATE`;
- service-role usage in the repository is confined to a server-only client that reads `SUPABASE_SERVICE_ROLE_KEY` from server environment variables and explicitly warns against client exposure;
- no service-role secret value was identified in the reviewed implementation files.

## Required Security Findings

### SR-SEC-1 — Concurrency guarantees remain unproven at runtime

The implementation relies on transaction-scoped advisory locks and deterministic row-lock ordering. The report explicitly acknowledges that true concurrent-session testing was not performed.

This is a security and integrity requirement, not merely a performance test. Without simultaneous-session evidence, the review cannot conclusively validate:

- single terminal outcome under same-key contention;
- absence of duplicate business mutation;
- conflict handling under same-key/different-payload contention;
- absence of D-068 deadlock or inconsistent closure under preview/confirm contention.

Required evidence is exactly the concurrency matrix stated in `report1.42.md` SR-SUP-1.

### SR-SEC-2 — Expected-state fingerprint protection lacks an explicit negative test

A stale preview must be proven incapable of changing link state after a fingerprint-bound product field changes. The current report describes this as implicit rather than demonstrating the negative path.

Required evidence is exactly the drift test stated in `report1.42.md` SR-SUP-2.

### SR-SEC-3 — Service-role boundary must be rechecked at frontend integration time

The current repository pattern is server-only and no secret value was found in the reviewed implementation scope. However, Lovable frontend work could accidentally import a server client, expose an environment variable, or bypass user-scoped RPC access.

Therefore any future Lovable mission must explicitly prohibit:

- importing `client.server.ts` or any admin client into browser code;
- using a service-role or secret key in Lovable/frontend environment variables;
- direct table writes that bypass the 19 RPCs;
- using service-role-backed server routes as a substitute for Owner-context RPC calls.

The Lovable review checklist must verify bundle boundaries and network calls before publish.

### SR-SEC-4 — Production authorization requires a separate security preflight

Before production migration, Security must review:

- exact production project identity;
- current production migration drift;
- effective default privileges;
- existing policies on `businesses`, `inventory_items`, and `inventory_movements`;
- final grants after migration;
- advisor delta;
- rollback/forward-fix plan;
- proof that production keys and credentials are not exposed to Claude, Codex, Lovable, or repository logs.

## Verdict

**SECURITY LEAD REVIEW PASSED WITH REQUIRED VERIFICATION COMPLETION — PRODUCTION AND LOVABLE AUTHORIZATION HELD**

No over-permissive runtime defect was identified in the reviewed Stage 3 findings; the discovered defects failed closed. The accepted Owner-only, tenant-isolated, cost-protected design remains intact.

However, the missing concurrency and explicit fingerprint-drift evidence are material integrity gaps. Production migration and Lovable frontend authorization remain held until SR-SEC-1 and SR-SEC-2 are completed, reviewed, and accepted.

After those pass, Lovable may be considered before production migration only under a separate frontend mission that uses the test project and the 19 RPC contract, with no publishing or production connection. Production remains a later, separately authorized action.

## Next Logical Step

Create a repository-backed verification addendum for the two missing non-production tests, execute it against `drravyyauixltoihzmwo`, and return the evidence for final Security acceptance.