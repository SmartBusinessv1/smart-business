# SMART BUSINESS MISSION CONTROL

# Report 1.12 — Security and Permissions Refinement Verification

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Verification Stage:** EIS Refinement Verification

**From:** Security & Permissions Architecture

**To:** Mission Control

**Status:** VERIFICATION COMPLETE — REFINEMENT REQUIRED

**Date:** 2026-08-04

---

# Mission Identification

This report performs the Security and Permissions verification authorized by:

`communication/live/instruction1.12.md`

The verification is limited to the refined Engineering Implementation Specification:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

This report records specialist verification findings only. It does not modify, approve, accept, or lock the EIS and does not authorize implementation or any later lifecycle transition.

# Authority and Inputs Reviewed

Repository:

`SmartBusinessv1/smart-business`

Synchronized verification base:

`935ccaffe8394467444c20b369755e14bb67fccc`

Base commit message:

`Authorize SB-P-1.11 EIS refinement verification (#54)`

Refined EIS commit:

`0e16a7de5d51a1e49a0d78fe5a010ae617220a61`

Inputs reviewed:

- `communication/live/instruction1.12.md`
- `communication/live/report1.10.md`
- `communication/live/report1.10-security-permissions.md`
- `communication/live/report1.11.md`
- `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11.md`
- `docs/phase-1-mission-blueprint/active/SB-P-1.11-Founder-Product-Decision-Record.md`
- relevant SB-P-1.10 repository precedent cited by the refined EIS

The locked Product Blueprint and Founder Decisions D-001 through D-068 were treated as immutable.

# Scope Verified

The verification covered:

- action-specific Manager permissions;
- ordinary product maintenance versus lifecycle authority;
- Employee default denial of owner financial intelligence;
- command-only protected writes;
- authenticated direct-DML denial;
- executor identities, ownership, grants, and safe search paths;
- current permission re-verification;
- business-derived authority;
- cost and margin response omission;
- cross-business isolation;
- dashboard, import, scheduler, and conversational execution;
- D-068 preview and confirmation integrity;
- idempotency ordering and `UNKNOWN_OUTCOME` handling;
- D-047 enforceability and interpretation;
- business-bound file references;
- import formula-injection and resource-abuse controls;
- audit provenance;
- temporary Owner-only sequencing.

# Verification Summary

The refined EIS materially improves the original design and fully resolves most accepted security findings. In particular, it restores action-specific Manager permissions, explicitly denies authenticated direct DML, introduces server-authoritative D-068 preview and compare-and-commit, corrects idempotency ordering, defines a tenure-aware D-047 predicate, binds file references to business-scoped metadata, hardens imports, protects cost reads, and preserves Owner-only temporary sequencing.

The EIS is not yet ready for lock from the Security and Permissions domain. Four residual design contradictions remain:

1. The three executor identities are described as both `NOLOGIN` roles and credential-authenticated identities. A `NOLOGIN` PostgreSQL role cannot authenticate using its own credential. The EIS must define the actual login/service principal and controlled `SET ROLE` or equivalent execution chain.
2. `catalog_command_executor` receives full DML across every Section 5 table, which is broader than the narrow-function least-privilege objective and makes compromise of any owned function materially higher impact.
3. The standardized event-provenance schema does not actually include the permission/authority basis and outcome fields that Section 18 claims are standardized across all protected events.
4. The read-only idempotency outcome contract still shows a caller-supplied `p_business_id`, despite the governing rule that business scope is always derived server-side and never trusted from the caller.

A smaller storage inconsistency also remains: product images and import files are stated to require safety scanning, but the linking command accepts `safety_scan_status = 'not_required'` as well as `clean`.

# Security Finding Verification Matrix

| Original finding | Severity | Refined EIS section and subject | Exact correction found | Verification result | Remaining risk | Product Truth impact | Required next action |
|---|---|---|---|---|---|---|---|
| `SEC-PERM-001` | `BLOCKING` | §8 permission capabilities; §16 command table | Replaced broad `catalog_manage` with `catalog_product_manage` and separate `catalog_lifecycle_manage`; price, tax, cost, inventory-link and view permissions remain independent; import follows product-management authority. | `RESOLVED` | None identified in the EIS contract. | None. Restores D-033 and D-034. | Preserve the matrix in implementation tests, including Manager detail edit without lifecycle authority. |
| `SEC-PERM-002` | `BLOCKING` | §6 command-only writes; §7 execution identities | Explicitly denies `INSERT`, `UPDATE`, and `DELETE` to `authenticated` on every protected table; requires `SECURITY DEFINER`, revoked public execute, explicit grants, qualified objects, and fixed search paths. | `PARTIALLY RESOLVED` | `catalog_command_executor` is granted full DML on every Section 5 table, rather than the minimum table privileges needed by each command family. The role is also described as `NOLOGIN` while being treated as an executable identity. | None. | Refine the execution chain and privilege matrix. Prefer separate function-owner roles or demonstrably minimal table privileges by command family. Define which login principal invokes each `NOLOGIN` owner and how controlled role assumption occurs. |
| `SEC-PERM-003` | `BLOCKING` | §7 channel executor; §15 channel-authority contract | Adds verified sender and canonical identity resolution, current permission checks at pending-action creation and confirmation, expiry, replay controls, durable previews, and no service-role merchant authority. | `PARTIALLY RESOLVED` | `catalog_channel_executor` is described as a credentialed `NOLOGIN` role. The contract accepts server-resolved `business_id` and `actor_user_id` parameters and revalidates them, but the actual trusted login principal and role-assumption boundary are unspecified. | None. | Define the concrete service principal, credential location, allowed database connection, `SET ROLE` or equivalent mechanism, and denial of all other function/table access. Keep business and membership re-derivation inside the authoritative function. |
| `SEC-PERM-004` | `BLOCKING` | §5.3 scheduled-price model; §12 scheduler | Replaces the volatile-time index and mutable event contradiction with one stable pending-state row, immutable transition history, and one immutable effective-price event per activation. | `RESOLVED` | No security contradiction remains in the design-level model. | None. | Verify with concurrent create/replace/cancel/activate tests and immutable-history tests during implementation. |
| `SEC-PERM-005` | `HIGH` | §11 corrected command sequencing and unknown outcomes | Resolves actor/business and current permission, then checks and claims idempotency before mutable-state checks; matching retries return original results; conflicting payloads fail; ambiguous transport results use same-key retry or read-only lookup. | `PARTIALLY RESOLVED` | `get_catalog_command_outcome(p_business_id, ...)` exposes a caller-supplied business parameter in the normative contract, conflicting with §3 and §7 rules that business scope must be server-derived. | None. | Remove caller-supplied business scope from the public contract or explicitly mark it non-authoritative and require internal derivation from the current actor and original idempotency record. |
| `SEC-PERM-006` | `HIGH` | §9 D-047 predicate and lock order | Defines a current-link-tenure predicate using immutable link events and inventory movements; locks product and inventory items in deterministic order; fails closed when future sale-history integration is ambiguous. | `RESOLVED` | The exact stock-event scope required explicit interpretation, addressed below. | None. | Preserve the predicate and concurrency tests; record Mission Control’s interpretation disposition before EIS Lock. |
| `SEC-PERM-007` | `HIGH` | §5.1, §5.11, §5.12 file metadata | Replaces unconstrained text paths with composite business-bound file-reference FKs and validates ownership, upload completion, purpose, content type, byte size, and scan state. | `PARTIALLY RESOLVED` | The EIS says product images and imports always require scanning, but file-link acceptance permits `safety_scan_status IN ('clean','not_required')`. This could bypass the declared scan requirement if `not_required` is incorrectly assigned. | None. | Require `clean` for `product_image` and `import_source`, or define a closed purpose/status matrix that makes `not_required` impossible for those purposes. |
| `SEC-PERM-008` | `HIGH` | §14 import hardening | Adds compressed/uncompressed limits, sheet/row/column/cell limits, active-job/rate limits, literal parsing, macro/external-link rejection, formula neutralization for exports, quarantine, retention, cleanup, revalidation, idempotency, and resumability. | `RESOLVED` | Exact operational values remain configuration parameters, which is acceptable if enforced before parsing and validated under realistic load. | None. | Confirm implementation limits and abuse tests before acceptance. |
| `SEC-PERM-009` | `HIGH` | §7 scheduler executor; §12 scheduler least privilege | Removes service-role use, limits callable function, applies revoked public execution, bounded batches, `SKIP LOCKED`, per-row isolation, missed-run recovery, and user/system provenance. | `PARTIALLY RESOLVED` | The scheduler role is again described as credentialed and `NOLOGIN`. It also receives `UPDATE` on pending schedules although the stated schedule lifecycle uses select, delete, and inserts; the need for update privilege is not explained. | None. | Define the actual pg_cron execution principal and controlled role assumption. Remove unexplained privileges or state precisely why each privilege is required. |
| `SEC-PERM-010` | `HIGH` | §7 function hardening; §17 permission-aware reads | Requires dedicated owners, revoked public execute, safe search paths, qualified objects, server-derived actor/business, current permission checks, and two response shapes that physically omit cost fields. | `PARTIALLY RESOLVED` | The read owners inherit the unresolved `NOLOGIN`/invocation ambiguity and the outcome-lookup contract still exposes caller-supplied business scope. The cost response contract itself is sound. | None. | Resolve the executor invocation chain and remove any authoritative caller-supplied business scope from all read contracts. |
| `SEC-PERM-011` | `MEDIUM` | §5.0 provenance block; §18 audit and observability | Standardizes authorizing user, actor type, system run, channel, request, and recorded time across dedicated event tables; distinguishes merchant authorization from scheduler execution. | `PARTIALLY RESOLVED` | §18 claims every protected event records the action/permission authority exercised and outcome, but §5.0’s normative column block does not include either a permission/authority-basis field or an outcome field. This leaves the schema and audit claim inconsistent. | None. | Add explicit normalized provenance fields for authority basis and result/outcome, or define a mandatory linked immutable command-outcome record and reference it from every event. |

# Mandatory Cross-Domain Verification

## Command-Only Authority

**Result:** `PARTIALLY RESOLVED`

The absence of direct authenticated DML and the function-hardening requirements are clearly specified. The remaining executor login/ownership contradiction and overly broad command-owner DML must be corrected before lock.

## D-068 Preview and Confirmation Integrity

**Result:** `RESOLVED`

The preview is server-authoritative and non-mutating with respect to product, link, unit, and price state. It binds actor, business, product, target, current state, proposed state, D-047 eligibility, fingerprint, and expiry. The commit rechecks permissions, locks authoritative rows, recomputes the fingerprint, rejects drift, requires confirmed price where applicable, and atomically records link and price history.

Cancellation, incomplete confirmation, validation failure, stale state, and save failure preserve the protected product/link/unit/price state. A stale or rejected token requires a fresh preview.

## Idempotency and `UNKNOWN_OUTCOME`

**Result:** `PARTIALLY RESOLVED`

The sequencing, same-key replay, conflict behavior, concurrent first-use handling, status-check UI, and prohibition on claiming “nothing changed” before a definitive result are resolved. The remaining issue is the public outcome-lookup signature accepting `p_business_id` despite the server-derived-scope rule.

## Cross-Business Isolation

**Result:** `PARTIALLY RESOLVED`

Rows and file references are business-bound through composite keys, direct authenticated DML is denied, permission-aware reads derive scope server-side, and channel confirmation rechecks membership. Full verification depends on resolving the executor login/role-assumption chain so that no credential has broader authority than the functions explicitly assigned to it.

## Employee Default Denial of Owner Financial Intelligence

**Result:** `RESOLVED`

Employees receive only `sale_use` reads for active sale-ready products, selling price, and effective tax. Reference cost, margin, protected histories, management actions, and inventory stock remain unavailable without their separate permissions. Cost fields are physically omitted rather than returned as nullable values.

## Safe Temporary Owner-Only Sequencing

**Result:** `RESOLVED`, conditional on the command-only refinement.

Manager and Employee surfaces remain unavailable until the shared permission engine exists. Every interim permission check resolves to Owner-only. This is safe once the remaining executor-role ambiguity is removed and direct DML denial is implemented as specified.

## Import and Storage Safety

**Result:** `PARTIALLY RESOLVED`

The import controls are materially complete. The file-scan status matrix must be closed so that `not_required` cannot be used for product images or import files that the EIS declares always scan-required.

## Audit Provenance

**Result:** `PARTIALLY RESOLVED`

Human authorizer, system executor, channel, request, run, and time are present. The actual standardized data model still omits the permission/authority basis and outcome fields claimed in §18.

# D-047 Interpretive Disposition

**Exact subject, paraphrased:** Whether “linked stock-event history” in D-047 means every inventory movement recorded during the current product-to-inventory link tenure, or only movements explicitly associated with a future sale or purchase event.

Applicable locked decisions:

- D-001 — catalog and inventory remain separate, with Inventory as stock authority;
- D-047 — assignment, removal, or replacement is allowed only before sale or linked stock-event history exists;
- D-068 — permitted assignment or replacement that changes unit requires protected price confirmation.

**Disposition:**

```text
RESOLVED — ENGINEERING INTERPRETATION CONFIRMED
```

D-047 does not narrow “linked stock-event history” to sale- or purchase-originated movements. The conservative tenure-based predicate—any authoritative inventory movement occurring for the linked inventory item during the product’s current link tenure—faithfully implements the plain locked boundary and protects historical identity without changing merchant-visible Product Truth.

Movements predating the link tenure do not count because they are not linked history of that product relationship. If a future Founder decision intentionally narrows the boundary, that would be a Product Truth change; the current EIS must not assume such a narrowing.

This interpretation is not a blocker to EIS Lock once the remaining security refinements are completed.

# New Verification Findings

## Finding VER-SEC-001

**Severity:** `BLOCKING`

**Subject:** Executor roles are simultaneously specified as `NOLOGIN` and credential-authenticated identities.

**Description:** PostgreSQL `NOLOGIN` roles cannot authenticate using their own credentials. The EIS states that the channel backend and pg_cron authenticate as credentialed `NOLOGIN` roles, while merchant-facing functions execute as a `NOLOGIN` owner. The merchant-facing owner model is valid because authenticated callers invoke `SECURITY DEFINER` functions. The channel and scheduler models require a separate login principal with narrowly controlled role membership or another explicitly defined invocation mechanism.

**Risk:** The implementation team may create login-enabled broad roles, misuse service-role credentials, or improvise an authority path that bypasses the intended least-privilege boundary.

**Required refinement:** Define, for channel and scheduler execution, the login/service principal, credential scope, role membership, permitted `SET ROLE` path, connection restrictions, revocation, and auditing. Keep the function-owner roles `NOLOGIN` if desired, but do not describe them as directly credential-authenticated.

**Product Truth impact:** None.

## Finding VER-SEC-002

**Severity:** `HIGH`

**Subject:** `catalog_command_executor` has full DML across all protected catalog tables.

**Description:** A single owner role for every merchant-facing read/write command receives full DML over every Section 5 table. This is substantially broader than the action-specific command model and increases blast radius if any owned function contains a defect or unsafe dynamic SQL.

**Required refinement:** Use separate owner roles by command domain or provide an explicit minimal privilege matrix proving why each table privilege is required by the shared owner. Dynamic SQL must be prohibited unless strictly parameterized and independently reviewed.

**Product Truth impact:** None.

## Finding VER-SEC-003

**Severity:** `HIGH`

**Subject:** Audit provenance schema does not match the stated audit contract.

**Description:** Section 18 promises permission/authority basis and outcome on every protected event, but Section 5.0’s mandatory provenance block contains neither field.

**Required refinement:** Add the missing normalized fields or a mandatory immutable linked command-outcome reference.

**Product Truth impact:** None.

## Finding VER-SEC-004

**Severity:** `MEDIUM`

**Subject:** File-scan acceptance permits `not_required` for scan-required purposes.

**Required refinement:** Enforce a closed purpose/status matrix requiring `clean` for product images and import sources.

**Product Truth impact:** None.

# Unresolved Risks

- The shared permission engine remains a separately governed dependency. Manager and Employee capability must remain disabled until its schema, grants, revocation behavior, session-refresh behavior, and tests are approved and implemented.
- The shared conversational engine remains a separately governed dependency. No channel execution is safe until the concrete service principal and role-assumption model are approved and verified.
- SB-P-1.10’s existing direct authenticated DML pattern remains outside this mission. The refined SB-P-1.11 EIS correctly does not copy it, but future cross-domain integration must ensure that inventory-side write authority cannot undermine D-047 locking assumptions.
- Exact rate limits, retention durations, scheduler batch values, and preview expiry remain implementation parameters and require evidence-based validation. They are not Product Truth decisions.

# Product Truth Impact

```text
PRODUCT TRUTH CHANGED: NO
FOUNDER DECISION CREATED: NO
FOUNDER DECISIONS D-001–D-068 MODIFIED: NO
BUILD CLASSIFICATION CHANGED: NO
```

The remaining findings are engineering authority and least-privilege refinements. They do not change approved merchant behavior.

# Scope and Boundary Confirmation

- Refined EIS modified: **NO**
- Product Blueprint modified: **NO**
- Founder Product Decision Record modified: **NO**
- Prior reports modified: **NO**
- Application code or tests modified: **NO**
- SQL, migrations, RLS, RPCs, functions, or database state modified: **NO**
- Supabase, infrastructure, deployment, or production modified: **NO**
- Governance sources modified: **NO**
- EIS approved or locked: **NO**
- Implementation documents created: **NO**
- Self-approval or self-merge performed: **NO**

Authorized changed path:

`communication/live/report1.12-security-permissions.md`

# Repository and Pull-Request Evidence

- Repository: `SmartBusinessv1/smart-business`
- Synchronized base commit: `935ccaffe8394467444c20b369755e14bb67fccc`
- Branch: `mission/SB-P-1.11-security-permissions-verification`
- Exact changed file: `communication/live/report1.12-security-permissions.md`
- Commit SHA: recorded by GitHub publication and pull-request evidence
- Pull-request number and state: recorded after pull-request creation
- Self-approval: not performed
- Self-merge: not performed

# Validation Status

- Exact changed-file scope: pending pull-request verification.
- Secret and credential inspection: PASS — no credential or secret value is included.
- Markdown and whitespace validation: repository workflow required.
- Local pre-commit gate: unavailable through the connector-only write path; the repository pull-request workflow will provide independent validation evidence.

# Final Specialist Disposition

```text
PARTIALLY VERIFIED — REFINEMENT REQUIRED
```

The refined EIS should not proceed to Founder EIS Review or EIS Lock until the executor identity contradiction and the remaining high-severity authorization and audit gaps are resolved and independently reverified.
