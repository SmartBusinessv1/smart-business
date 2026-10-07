# SB-P-1.13 — Stage 10 Security & Permissions EIS Specialist Instruction

**Specialist ID:** S10-SP-1  
**Exact EIS head:** `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`  
**Mode:** independent read-only findings

Read fresh canonical:
- locked SB-P-1.13 Blueprint and FCTM;
- draft `SB-P-1.13-EIS.md` at the exact head above;
- S7-SP-1 Security report;
- S7-SP-2 / S7-SP-3 where relevant;
- locked SB-P-1.12 Blueprint and EIS, especially EIS-KER, EIS-ISO, EIS-CNF and §19.5;
- current repository architecture.

Review at minimum:
1. server-derived principal/active business and no parallel authority;
2. authorization-before-retrieval and Employee denial before model exposure;
3. typed tools cannot create authority;
4. confirmation binding, revalidation, concurrency and idempotency;
5. `EIS13-CMD-02` command-only transaction boundary and the draft `SECURITY INVOKER` choice against SB-P-1.12 EIS-ISO-02/EIS-ISO-10/effective grants;
6. all 17 DTX holds and all 252 D12 holds;
7. direct client DML removal and structured UI convergence;
8. service-role and executor-role boundaries;
9. audit/provenance and denial durability;
10. `EIS13-CNF-03`: delegated capability must not become delegated confirmation;
11. business/cross-business isolation, cache/context isolation and attachment boundaries;
12. migration design for least privilege, rollback/rehearsal and no execution;
13. verification requirements sufficient to prove the security properties.

For each finding provide:
- ID `SEC-EIS10-xx`;
- severity;
- EIS requirement/section;
- affected FCTM rows where applicable;
- locked-source evidence;
- exact issue;
- merchant/security consequence;
- required refinement;
- T2/T3/T6/T7/T8 screen;
- whether it blocks Stage 10 acceptance.

Do not edit any repository artifact.

Close with:
**INDEPENDENT STAGE 10 SECURITY EIS REVIEW SUBMITTED — FINDINGS ONLY; AWAITING MISSION CONTROL DISPOSITION; EIS LOCK / IMPLEMENTATION / MIGRATION / PROVIDER / PRODUCTION NOT AUTHORIZED.**
