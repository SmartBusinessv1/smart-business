# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-FWR-7 — SECURITY & PERMISSIONS ARCHITECTURE REVIEW

**Mission ID:** SB-P-1.11-FWR-7  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Workstream:** Founder Workflow Reconciliation  
**Specialist Room:** Security & Permissions Architecture  
**Authorized By:** Mission Control  
**Status:** ACTIVE AFTER HUMAN MERGE  
**Mode:** REVIEW MODE — SECURITY & PERMISSIONS ONLY  
**Implementation Authority:** NONE  
**Database Migration Authority:** NONE  
**Production Mutation Authority:** NONE

---

## 1. Mission Objective

Perform a bounded Security & Permissions Architecture review of the full corrected Founder workflow architecture for SB-P-1.11.

Determine whether the reconciled Catalog + Inventory/Opening Stock onboarding architecture is safe to advance from the security-and-permissions perspective, without redefining Product Truth or backend architecture.

This review begins only after this instruction is human-reviewed and merged into `main`.

---

## 2. Authoritative Review Baseline

Review the merged repository state and use these documents together:

### Primary workflow architecture

- `communication/live/report1.96.md`

### Corrected backend architecture baseline

- `communication/live/report1.98.md`
- `communication/live/report1.100.md`
- `communication/live/report1.101.md`

Interpretation rule:

- `report1.98.md` is the corrected backend architecture contract for BKR-1 through BKR-5.
- `report1.100.md` supersedes only the Inventory-side composite-FK clauses identified in BKR-3.
- `report1.101.md` confirms that the BKR-3 FK-order correction passes final Supabase review.
- Historical incorrect wording remains audit history and must not be treated as current architecture.

Use repository evidence when validating assumptions. Do not rely on conversation memory where repository evidence exists.

---

## 3. Governing Security Principles

The review must protect:

- deny-by-default access;
- business/merchant isolation at the authoritative data boundary;
- Owner-only Phase 1 execution where Manager permission infrastructure is not yet approved;
- employee and staff exclusion from owner financial intelligence by default;
- least privilege;
- caller identity preservation;
- authenticated caller-JWT authority for Product Truth reads and mutations;
- narrow server-only privileged bookkeeping where explicitly required;
- no service-role expansion into Catalog or Inventory Product Truth authority;
- safe idempotency and replay handling;
- auditability and correction traceability;
- no silent duplicate creation or silent linking;
- confirmation for consequential linking or stale-state-sensitive operations;
- no cross-business reference possibility through foreign keys, support tables, RPCs, or import orchestration;
- secure failure handling that does not expose secrets, credentials, internal SQL, stack traces, raw merchant files, or infrastructure internals.

Frontend visibility must never be treated as authorization.

---

## 4. Required Review Areas

Review the corrected architecture across all of the following areas.

### SEC-1 — Actor and role authority

Verify that:

- Phase 1 bulk Catalog and Inventory/Opening Stock onboarding remains Owner-only unless approved permission infrastructure exists;
- Manager remains fail-closed today rather than inheriting authority from future D-058 intent;
- Employee remains unauthorized;
- no workflow creates implicit role escalation;
- future channels must inherit the same authoritative permission checks rather than implement channel-specific authority.

### SEC-2 — Business isolation and tenant binding

Verify that:

- every support/import record is bound to a server-derived business identity;
- composite tenant foreign keys prevent cross-business references;
- the corrected Inventory FK order preserves same-business enforcement;
- Catalog-side and Inventory-side relationships cannot cross merchant boundaries;
- no client-supplied `business_id` can become authoritative merely because it is present in a request.

### SEC-3 — Product Truth mutation authority

Verify that:

- Product Truth mutations remain behind the approved Catalog command surface and approved Inventory operations;
- support/import tables do not become an alternate Product Truth write path;
- server-only bookkeeping authority cannot create, change, link, archive, reactivate, delete, or price Product Truth directly;
- no twentieth Catalog command is introduced or implied;
- Inventory creation through the proposed idempotent RPC preserves the caller's authenticated authority rather than elevating it.

### SEC-4 — RLS, grants, and privileged bookkeeping

Review the proposed support-table access model and confirm whether it is safe:

- authenticated users receive only the explicitly required read access;
- Owner scoping is enforced server-side/RLS;
- Manager and Employee remain denied unless separately authorized later;
- `anon` has no access;
- privileged server bookkeeping is limited to lifecycle/support state only;
- any specialist executor access required by BKR-4 is narrowly scoped and cannot expose unrelated merchant data;
- default privileges cannot accidentally broaden access.

Identify every required RLS/grant invariant that Build Mode must preserve.

### SEC-5 — Idempotency, replay, and unknown-outcome safety

Review:

- durable `create_inventory_item` idempotency architecture from BKR-1;
- row and step idempotency derivation;
- preview-generation-scoped link-confirm idempotency from BKR-2;
- retries after process/runtime failure;
- replay after committed-but-unacknowledged operations;
- collision/conflict behavior;
- whether an attacker or accidental retry can cause duplicate Catalog products, duplicate Inventory items, duplicate Opening Stock movements, duplicate links, or cross-row replay.

### SEC-6 — D-068 stale-state and confirmation protection

Verify that:

- Inventory link changes continue to use the existing preview/confirm model;
- stale or expired preview state fails closed;
- re-preview produces a distinct confirmation generation;
- an old confirmation token/key cannot authorize a new state;
- no import orchestration bypasses D-068 to create a silent price reinterpretation or silent link replacement.

### SEC-7 — Import lifecycle and partial-failure safety

Review the exact `inventory_import_batches` / `inventory_import_rows` contract for:

- safe lifecycle transitions;
- terminal-state integrity;
- valid-row/invalid-row isolation;
- correction-queue privacy;
- prevention of partial Product Truth mutation from rows that have not passed required validation/confirmation;
- no false batch `committed` state while required row work remains incomplete;
- safe recovery after interruption.

### SEC-8 — Duplicate and match handling

Verify that:

- exact/authorized match handling cannot silently merge records;
- fuzzy or uncertain matches cannot auto-create, auto-link, or overwrite;
- existing Inventory with stock history cannot be silently retro-linked;
- Catalog identity uniqueness cannot be bypassed through bulk import or SKU auto-generation;
- generated SKU behavior does not leak sensitive information or create predictable cross-business identifiers.

### SEC-9 — Opening Stock and financial/operational integrity

Verify that:

- Inventory bulk onboarding records Opening Stock only through the approved inventory movement operation;
- current quantity is never directly written as an import shortcut;
- one-opening-movement and idempotency controls cannot be bypassed;
- the required order Catalog → Inventory → governed link → Opening Stock preserves authorization and auditability;
- rollback/retry behavior does not create stock duplication.

### SEC-10 — Data minimization, logs, errors, and merchant privacy

Verify that:

- support/import tables store only data needed for the workflow;
- raw uploaded file contents are not retained in these tables unless separately authorized;
- error/correction fields cannot become a place for secrets, JWTs, raw SQL, stack traces, environment values, or excessive merchant data;
- user-facing failures remain clear but opaque to sensitive infrastructure detail;
- audit records remain useful without exposing credentials or cross-business information.

### SEC-11 — Parser/runtime gate interaction

The parser/runtime isolation issue is an independent unresolved gate.

Do not redesign the parser in this mission.

Confirm only whether the corrected Founder workflow architecture introduces any new security dependency on that unresolved parser gate, and clearly separate:

- workflow/security findings that can be decided now; from
- parser-runtime security findings that remain governed by the existing separate parser gate.

Do not treat a pending parser decision as permission to weaken import security.

### SEC-12 — Abuse-case review

Consider at minimum:

- forged business IDs;
- replayed import rows;
- replayed preview/link confirmation tokens;
- duplicated browser submissions;
- malicious spreadsheet values reaching support fields;
- attempts to reference another merchant's Catalog or Inventory UUID;
- attempts by Manager/Employee to invoke Owner-only workflows;
- retries after unknown server outcome;
- attempts to force terminal batch state prematurely;
- attempts to bypass duplicate review by changing whitespace/case/normalization;
- attempts to exploit generated SKU collisions.

State whether each class is prevented by architecture, requires a Build Mode invariant/test, or remains a blocker.

---

## 5. Explicit Non-Scope

Do not:

- implement application code;
- modify dependencies;
- create or edit SQL or migrations;
- mutate Supabase test or production projects;
- change RLS or grants;
- expand service-role or privileged authority;
- change Lovable;
- publish or deploy;
- redesign the parser or choose a new parser runtime;
- introduce Cloudflare R2;
- change Product Truth;
- change D-001 through D-068;
- change the 19-command Catalog public surface;
- add a twentieth Catalog command;
- expand Manager or Employee permissions;
- authorize Build Lock or Build Mode;
- accept SB-P-1.11;
- authorize production use.

If a security correction would require any of those actions, identify it as a finding and return it to Mission Control rather than implementing it.

---

## 6. Required Output

Create only:

`communication/live/report1.102.md`

The report must contain:

1. Mission identity and exact merged `main` SHA reviewed.
2. Sources and repository evidence inspected.
3. Security threat model summary.
4. Findings for SEC-1 through SEC-12.
5. RLS/grant and privileged-authority assessment.
6. Tenant-isolation assessment.
7. Idempotency/replay/unknown-outcome assessment.
8. D-068 confirmation/stale-state assessment.
9. Import lifecycle and partial-failure assessment.
10. Opening Stock integrity assessment.
11. Data minimization/error/privacy assessment.
12. Parser-gate interaction statement.
13. Abuse-case matrix.
14. Blocking findings, if any, with stable IDs such as `SEC-FWR-1`, `SEC-FWR-2`, etc.
15. Build Mode security invariants and mandatory tests that must later be carried into the EIS/implementation contract.
16. Explicit scope-integrity statement.
17. Final verdict.

---

## 7. Allowed Verdicts

Use exactly one:

- `SECURITY & PERMISSIONS ARCHITECTURE REVIEW — PASS`
- `SECURITY & PERMISSIONS ARCHITECTURE REVIEW — CHANGES REQUIRED`
- `SECURITY & PERMISSIONS ARCHITECTURE REVIEW — STOPPED — AUTHORITY OR EVIDENCE GAP`

A PASS means the corrected Founder workflow architecture is sufficiently defined from the Security & Permissions Architecture perspective to proceed to the next Mission Control gate.

A PASS does **not** mean:

- Build Lock;
- implementation authorization;
- parser gate closure;
- runtime verification;
- production readiness;
- SB-P-1.11 acceptance.

---

## 8. Evidence Standard

Do not approve assumptions merely because they appear reasonable.

For material claims, distinguish:

- repository-confirmed current behavior;
- architecture explicitly locked in the reviewed reports;
- Build Mode invariant still requiring implementation/test evidence;
- unresolved external or runtime dependency.

Where repository evidence contradicts a report, repository evidence prevails and the conflict must be reported.

---

## 9. Completion Gate

The mission is complete only when:

- `report1.102.md` is produced;
- every SEC-1 through SEC-12 review area is addressed;
- blockers are explicit;
- no unauthorized implementation occurs;
- the report is committed through a protected mission branch;
- a pull request is opened for human review and merge.

Mission Control decides the next action after the merged report is reviewed.

---

# FINAL MISSION CONTROL BOUNDARY

This mission reviews security and permissions architecture only.

Protect merchant isolation, least privilege, human authority, auditability, and financial/operational integrity.

Do not convert review capability into implementation authority.

**Next authorized artifact:** `communication/live/report1.102.md`
