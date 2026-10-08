# SB-P-1.14 — Stage 10 Final Security / Permissions / RLS & Grants Delta Re-Confirmation

**Appointment:** Final Security delta re-confirmation under MC-19  
**Scope:** Former `SEC14-EIS-S10-03 / R10-SEC-03` residual only  
**PR:** #831  
**Exact reviewed head:** `7798c8ac03a4e8d3d833be6772a348dda53c6387`  
**Verified EIS blob:** `261ca7ac901f1dc6a9d6fcfb51616016a3a48bcf`  
**Verified Claude report 14 blob:** `6971d03e30ff029df0ccc4ed95d0ec1bcd797ae2`  
**Authorization:** `main@e1df99097f0ea762436116dc14010cf4eda27fb7`

## Residual disposition

**CLOSED — final correction satisfies the finding**

Corrected `EIS14-STO-03` fully removes the former privileged-handler ambiguity.

It now requires that:

- every service-role or other privileged handler accessing or mutating merchant-scoped data satisfies locked SB-P-1.12 `EIS-ISO-04`;
- execution originates from a verified interactive principal or an upstream-approved verified automation/system principal;
- the operation obtains **current kernel authorization** for the exact business, action and object set;
- the corresponding business/action/object predicates are carried into the privileged query or mutation;
- non-interactive maintenance can operate only through an already-approved upstream automation/system-principal path and remains subject to the same current authorization and scope binding;
- maintenance purpose, server location, scheduled-job context and possession of `service_role` are explicitly rejected as independent authority;
- `service_role` cannot create merchant membership, business authority or permission to inspect/mutate merchant content;
- the source-complete privileged-handler inventory and `EIS14-VER-01` effective-access verification must prove that **no unbound admin, service-role, maintenance or background-job path exists**.

This is aligned with the locked SB-P-1.12 `EIS-ISO-04` privileged-operation contract.

The prior defect—allowing a merely documented system-maintenance basis as an alternative authorization basis—is no longer present.

## Founder-approved restorative Security T7

**FULLY REALIZED for the Security findings covered by the Founder-approved restorative T7.**

The final correction completes the previously partial `R10-SEC-03` realization. The three restorative Security corrections are therefore documentary-complete:

- object-type-specific born-hardening;
- authority-event/durable-denial separation from domain provenance;
- effective-access/callable/privileged-handler verification, including bound privileged execution.

No additional Founder refinement is required for this Security T7.

## Delta T2 / T3 / T6 / T7 / T8 screen

| Trigger | Final Security delta disposition |
|---|---|
| **T2** | **NOT TRIGGERED.** No approved-source conflict introduced. |
| **T3** | **NOT TRIGGERED.** No new merchant-visible Product Truth or behaviour. |
| **T6** | **NOT TRIGGERED.** The correction restores an existing locked authorization constraint. |
| **T7** | **NO NEW T7 TRIGGER. Founder-approved restorative Security T7 is now fully realized.** No omission, deferral, narrowing, reclassification or reassignment remains in this reviewed residual. |
| **T8** | **NOT TRIGGERED.** The locked authority-binding rule is represented without an identified feasibility/security conflict. |

## Documentary closure versus evidence hold

`R10-SEC-03` is **CLOSED at the documentary EIS-design level**. The refined EIS completely specifies the required privileged-handler authority-binding contract.

This closure does **not** establish deployed/runtime proof.

`H-PRIV` remains an implementation/assurance evidence hold over its existing 26-row scope until the privileged-handler implementation and source-complete inventory are actually verified.

The live effective-access and privileged-handler state remains:

**`UNVERIFIED — ACCESS REQUIRED`**

That later evidence must prove that deployed privileged operations actually carry the authorized principal/business/action/object binding and that no effective unbound admin/service-role/background path exists.

The evidence hold does not reopen the documentary finding.

## Product / Founder boundary

**No new Product Truth is required.**

**No new Founder decision is required.**

This closure does not approve Stage 10, lock the EIS, authorize implementation, SQL/migrations, provider/runtime activation, production access, or merge.

**FINAL SECURITY DELTA DISPOSITION: CLOSED**

**STOP FOR MISSION CONTROL DISPOSITION.**
