# SB-P-1.14 — Stage 10 Delta Confirmation — Security / Permissions / RLS & Grants

**Appointment:** S10-D1  
**Mode:** Read-only delta confirmation  
**PR:** #831  
**Reviewed head:** `e858a18e00719aed6464822d684c6580fce1f9bf`  
**Verified EIS blob:** `d97d23048f0dda76f3f60b0b03569a928d9e45d1`  
**Authorization:** `main@2a65d019f696eb941fbff490083ae2d98e124529`

## Independence note

This session did not author or edit the refined EIS. This room did perform the earlier Security specialist review, so correlated-context risk remains disclosed; the delta conclusions below were checked against the canonical Founder T7 approval, MC-16 refinement authorization, prior finding text and the exact refined EIS.

## 1. SEC14-EIS-S10-01 / R10-SEC-01 / MC10-PRE-01

**CLOSED — refinement satisfies the finding**

`EIS14-SEC-02` now correctly stops treating RLS as a uniform table/view/function property and establishes the required object-specific born-hardened model:

- **tables:** RLS enabled with kernel-based deny-by-default policies and explicit grants;
- **views:** explicitly states that RLS is not enabled “on a view”; exposed views require invoker-security semantics and explicit grants; owner-rights views are not caller-exposed;
- **functions/RPCs:** explicit `SECURITY INVOKER` versus `SECURITY DEFINER`, with definer functions subject to locked SB-P-1.12 `EIS-ISO-10`, including owner, `search_path`, `EXECUTE` and `PUBLIC` hardening;
- **sequences:** included in effective-access/default-privilege reconciliation;
- **default privileges:** every real creator role and relevant object class;
- **birth safety:** creation/replacement, policies, grants/revokes, view/function security attributes and default ACL reconciliation complete before the object becomes usable;
- **effective access:** explicitly handed to `EIS14-VER-01`.

`EIS14-MIG-02` now calls the document/object and domain-provenance schema “born hardened by object type”, and `EIS14-TOT-01` explicitly subjects a view/function implementation to `EIS14-SEC-02`.

The mapped scope for the relevant requirements was compared with the previously reviewed EIS and is unchanged, including `EIS14-SEC-02` at 60 rows and `EIS14-MIG-02` at 64 rows.

**Residual correction:** none for this finding.

## 2. SEC14-EIS-S10-02 / R10-SEC-02

**CLOSED — refinement satisfies the finding**

`EIS14-CAB-03` now explicitly establishes all required separations:

- SB-P-1.14 provenance is **domain provenance only**;
- it is **not a second authority ledger**;
- allow/deny authorization truth and security-relevant denial durability consume SB-P-1.12 `authority_events` and the durable-denial contract;
- domain provenance may reference kernel decision/principal/business/action/target identifiers without copying mutable authority truth;
- sensitive-retrieval audit records identifiers/security metadata rather than document contents;
- provider logs are supplemental operational evidence and never decide authorization.

`EIS14-SEC-01` reinforces that denials are recorded through the SB-P-1.12 durable-denial contract rather than SB-P-1.14 provenance.

The targeted FCTM mappings remain unchanged: `EIS14-CAB-03` retains its 15 rows and `EIS14-SEC-01` its 16 rows.

**Residual correction:** none.

## 3. SEC14-EIS-S10-03 / R10-SEC-03

**PARTIALLY CLOSED — exact residual correction required**

The principal verification defect is corrected. `EIS14-VER-01` now expressly requires the complete effective-access evidence set previously missing:

- object identity/type and owner;
- privileges for `PUBLIC`, `anon`, `authenticated`, `service_role`, executors and creator roles;
- table RLS state/policies;
- view owner and invoker/owner semantics;
- sequence privileges;
- exact function signatures and overloads;
- function owner, security mode, effective `search_path` and executable grants;
- creator-role default ACLs by object class;
- bypass-capable roles;
- retired legacy callable identities/overloads;
- source-complete privileged-handler inventory;
- direct-DML negatives;
- cross-business, Manager-not-Owner, Employee-no-Owner-intelligence, create≠read/export, revocation, `anon` and stale-link negatives.

`EIS14-CMD-03` also now expressly requires actual privilege/RLS/RPC/signature/overload inspection and proof that no alternate protected write path survives. `EIS14-MIG-05` carries the `EIS14-VER-01` effective-access inventory into rehearsal.

However, the refinement introduces one security ambiguity in `EIS14-STO-03`:

> service-role handlers may use a caller-derived `EIS-ISO-04` authority binding **“or a documented system-maintenance basis…”**

That alternative is not sufficient as written. A documented maintenance purpose is not itself authority. Locked SB-P-1.12 `EIS-ISO-04` requires privileged operations to be bound to an authorized principal/business/action/object set, with those predicates carried into privileged queries; `service_role` possession is explicitly not authority.

This also conflicts with the newly strengthened `EIS14-VER-01`, which requires the privileged-handler inventory to prove that **no unbound admin/service-role path exists**.

### Exact residual correction required

Narrow `EIS14-STO-03` so that **every service-role privileged handler satisfies the SB-P-1.12 authority-binding contract**.

For a non-interactive maintenance operation, the EIS may consume an already-approved upstream verified-principal/automation path where applicable, but it must still obtain current kernel authorization and bind the business, action and object set/predicates. A merely documented “system-maintenance basis”, maintenance purpose, server location or possession of `service_role` must not independently authorize merchant-data access or mutation.

No new Product Truth or Founder decision is needed for this correction; it restores the already-locked `EIS-ISO-04` rule.

The targeted row mappings themselves remain unchanged: `EIS14-STO-03` still maps 26 rows, `EIS14-CMD-03` 6 rows, `EIS14-VER-01` 7 rows, and `EIS14-MIG-05` 90 rows.

## 4. Founder-approved restorative T7 realization

**PARTIALLY CLOSED — exact residual correction required**

The Founder-approved restorative T7 is correctly realized for:

1. object-type-specific born-hardening — **restored**;
2. domain provenance versus authority-event/durable-denial truth — **restored**;
3. complete effective-access/callable-surface verification — **substantially restored**.

The affected requirement/FCTM mappings reviewed in this delta were preserved rather than narrowed or reassigned.

The restoration is not fully closed only because the new `EIS14-STO-03` “documented system-maintenance basis” alternative weakens the same privileged-handler contract that the Founder approved restoring.

Once that clause is narrowed as specified above, the restorative T7 Security realization is closed without changing Product Truth, FCTM disposition, build commitment, commercial classification, ownership or mission assignment.

# Delta-only T2 / T3 / T6 / T7 / T8 screen

| Trigger | Delta disposition |
|---|---|
| **T2 — conflict among approved sources** | **NOT TRIGGERED.** |
| **T3 — new Product Truth / merchant-visible behaviour** | **NOT TRIGGERED.** No new product decision is needed for the residual correction. |
| **T6 — new material derived constraint** | **NOT TRIGGERED.** Requiring privileged-handler authority binding is already locked by SB-P-1.12 `EIS-ISO-04`. |
| **T7 — omission / simplification / weakening** | **REMAINS PARTIALLY OPEN, finding-scoped.** The Founder-approved restoration successfully closes R10-SEC-01 and R10-SEC-02, but R10-SEC-03 is not fully restored while `EIS14-STO-03` permits a documented maintenance basis as an alternative to upstream authority binding. No additional Founder decision is required; this is corrective realization of the already-approved T7. |
| **T8 — infeasibility / material security conflict** | **NOT TRIGGERED.** The residual has a straightforward architecture-preserving correction. |

## Delta conclusion

- `SEC14-EIS-S10-01 / R10-SEC-01 / MC10-PRE-01` — **CLOSED**
- `SEC14-EIS-S10-02 / R10-SEC-02` — **CLOSED**
- `SEC14-EIS-S10-03 / R10-SEC-03` — **PARTIALLY CLOSED**
- Founder-approved restorative T7 realization — **PARTIALLY CLOSED**

No implementation/runtime/provider conclusion is made by this delta review. Live effective access remains **`UNVERIFIED — ACCESS REQUIRED`** as the refined EIS itself correctly records.

**STOP FOR MISSION CONTROL DISPOSITION.**
