# SB-P-1.14 — Stage 10 Security / Permissions / RLS & Grants Specialist Confirmation Instruction

**Appointment:** S10-SP-1  
**Mission:** SB-P-1.14 — Business Memory, Documents & Durable Media  
**Stage:** 10 — EIS Review  
**Canonical authorization baseline:** `main@ded86278675c16be6ca2586d709eb3ef71a14440` plus SB-P-1.14-MC-14 after its human merge  
**Draft EIS under review:** PR #831, head `254e40a723e4c74af69d425cb918bb03dc9817e2`, blob `20fd97177348ad9b02bbb8d1be9e53f05ad18bde`  
**Output:** `communication/missions/SB-P-1.14/specialists/06-stage10-eis-security-rls-grants-review.md`

## Independence

Before review, state whether the current actor/session authored or materially contributed to the Stage 9 EIS.

- If yes: STOP; independence cannot be established.
- If no: state prior Smart Business contribution and correlated-assumption risk, then proceed.

Prior authorship of the Stage 7 specialist report in this same domain is permitted and should be disclosed.

## Scope

Review authority-kernel consumption, active-business isolation, Owner/Manager/Employee capability boundaries, create/read/export separation, confirmation vs execution-time revalidation, service-role/privileged-handler binding, direct-DML elimination, function/RPC callable surface, RLS, grants, default privileges, views, functions, signed/revocable retrieval, audit/provenance and export authorization.

You MUST specifically determine whether EIS14-SEC-02 is technically correct for tables vs views vs functions and prescribe a precise born-hardened formulation if not.

Also review whether the EIS faithfully realizes the relevant Stage 7 specialist findings and holds without silently changing Product Truth.

## Mission Control preliminary finding to include where applicable

- MC10-PRE-01: object-type-specific hardening semantics in EIS14-SEC-02.
- MC10-PRE-02: truthful separation of sales/income and purchases/expenses in EIS14-TOT-01.

Review the applicable item; do not assume Mission Control's proposed refinement is correct.

## Required report

For every finding provide:

- finding ID;
- severity;
- exact EIS requirement(s);
- affected FCTM rows;
- evidence;
- required refinement or evidence hold;
- T2/T3/T6/T7/T8 screen;
- whether it blocks Stage 10 acceptance.

Mark unavailable live facts `UNVERIFIED — ACCESS REQUIRED`.

Do not edit the EIS, locked Blueprint, FCTM, Founder records, code, SQL, migrations, provider configuration or production.

**STOP FOR MISSION CONTROL DISPOSITION.**
