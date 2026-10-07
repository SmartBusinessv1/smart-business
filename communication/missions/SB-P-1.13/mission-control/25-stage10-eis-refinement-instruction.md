# SB-P-1.13 — Stage 10 EIS Refinement Instruction

**Authority:** SB-P-1.13-MC-16  
**Target:** PR #793 exact pre-refinement head `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`  
**Reviewed EIS blob:** `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`  
**Status:** INACTIVE UNTIL MC-16 IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL ACTIVATION

After activation, perform one narrow Stage 10 EIS refinement cycle.

## Required corrections

Implement exactly the seven consolidated correction packages defined by MC-16:

1. C1 — governed transaction command and coordinated cut-over;
2. C2 — new-object access contract and privileged-handler boundary;
3. C3 — revocation-safe conversation/history/cache reuse;
4. C4 — confirmation/delegation and spoken-confirmation safety;
5. C5 — tool authority exclusion and instruction/data separation;
6. C6 — transient attachment and raw-audio handling;
7. C7 — versioned provider/model configuration evidence and re-verification.

Do not introduce new Product Truth.

## Writable paths

Only the six existing Stage 9 PR #793 paths are writable:

- `docs/phase-1-mission-blueprint/implementation/SB-P-1.13-EIS.md`
- `communication/missions/SB-P-1.13/claude-code/11-stage9-eis-creation-report.md`
- `communication/missions/SB-P-1.13/README.md`
- `communication/missions/SB-P-1.13/decision-log.md`
- `communication/missions/SB-P-1.13/handover-log.md`
- `communication/live/report.md`

Use the smallest necessary subset.

## Prohibited

Do not edit:
- Product Truth;
- Blueprint;
- FCTM;
- FPDRs;
- specialist reports;
- source contracts;
- code/schema/SQL/migrations;
- provider configuration;
- production state.

Do not merge PR #793.

## Required validation

After corrections:
- rerun 651/651 FCTM coverage;
- rerun orphan and unknown-ID checks;
- verify D12 and all 17 DTX holds remain intact;
- verify locked artifacts are byte-unchanged;
- report the exact new PR #793 head and EIS blob;
- report every changed EIS requirement/section mapped to C1–C7 and originating specialist finding IDs;
- identify any T2/T3/T6/T7/T8 trigger discovered during correction.

If a Product Truth decision becomes necessary, STOP.

If PR #793 is not at the authorized pre-refinement head when work begins, STOP.

Return the corrected candidate to Mission Control for structural verification and specialist delta-review authorization.

**NO EIS ACCEPTANCE / LOCK / MERGE / IMPLEMENTATION AUTHORITY.**
