# SB-P-1.13 — Stage 10 Security / Permissions EIS Review Instruction

**Specialist:** S10-SP-1 — Security & Permissions Architecture  
**Target:** PR #793 exact head `970128762d0cd039ee6eeaa45967b7ca7a6b02e5`  
**EIS blob:** `f8cbb35895887e9e3ef706b9743cb84d6ca489a7`  
**Mode:** Independent read-only findings review

First establish contribution separation. If not established, stop.

Review the complete EIS, not only Security-tagged requirements.

At minimum assess:

- EIS13-AUTH-01 through AUTH-05;
- EIS13-CTX-01 through CTX-03;
- EIS13-TOOL-01/02;
- EIS13-CNF-01 through CNF-03;
- EIS13-CMD-01 through CMD-03;
- EIS13-IDM-01/02;
- EIS13-AUD-01;
- EIS13-TEL-01/02;
- EIS13-WSP-04/05;
- EIS13-HOLD-01/02/03;
- EIS13-MIG-01/02;
- EIS13-VER-01;
- all 252 D12 mappings and all 17 DTX mappings.

Confirm or challenge:

- server-derived principal/business;
- no single-owner authority inference;
- authorization-before-retrieval;
- Employee denial before protected model context;
- service-role never equals merchant authority;
- command-only protected transaction boundary;
- no permanent direct-insert bypass;
- frozen confirmation binding;
- execution-time authorization revalidation;
- idempotency/replay/unknown outcome;
- business isolation in conversation/cache/telemetry/files;
- denial/audit/provenance;
- migration design and effective-access cut-over;
- negative-path verification sufficiency.

Report to:

`communication/missions/SB-P-1.13/specialists/04-stage10-independent-eis-security-review.md`

Conclude exactly one:

- `SECURITY READY FOR MISSION CONTROL STAGE 10 DISPOSITION`
- `SECURITY REFINEMENT REQUIRED`
- `PRODUCT TRUTH / FOUNDER DECISION REQUIRED`

Findings only. No EIS edit. No implementation authority.
