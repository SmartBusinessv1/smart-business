# SB-P-1.13 — Stage 10 Security / Permissions EIS Review Instruction

**Specialist ID:** S10-SP-1  
**Domain:** Security & Permissions Architecture  
**Target:** PR #793 exact head `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`  
**EIS blob:** `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`

Review the complete EIS independently.

At minimum test:

- SB-P-1.12 authority-kernel consumption and D12 fail-closed gate;
- active-business context and cross-business isolation;
- authorization-before-retrieval/model exposure;
- Employee denial before protected context reaches the model;
- command-only protected transaction writes;
- all 17 DTX rows and EIS-ISO-02 convergence;
- no permanent raw/direct transaction insert bypass;
- confirmation binding and execution-time revalidation;
- idempotency/replay/unknown outcome;
- service-role and privileged-handler trust boundaries;
- RLS/function-owner/executor assumptions for proposed tables/functions;
- audit/provenance and denial durability;
- cache/telemetry/business scoping;
- attachment/voice transient-data security boundaries;
- provider-secret custody;
- migration sequencing risks;
- whether any EIS wording accidentally creates a second authority system.

Treat Stage 7 Security findings as evidence, not proof.

Required report path:

`communication/missions/SB-P-1.13/specialists/04-stage10-eis-security-review.md`

Conclusion must be exactly one of:

- `SECURITY READY FOR MISSION CONTROL STAGE 10 DISPOSITION`
- `SECURITY REFINEMENT REQUIRED`
- `PRODUCT TRUTH / FOUNDER DECISION REQUIRED`

Findings only. No EIS edits. No implementation/prod authority.
