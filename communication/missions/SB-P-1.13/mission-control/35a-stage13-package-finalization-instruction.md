# SB-P-1.13 — Stage 13 Package Finalization Instruction

**Authority:** SB-P-1.13-MC-21  
**Target:** draft PR #808  
**Reviewed pre-finalization head:** `828a8dec8eab89c031e0dc2624c1839480d26520`  
**Status:** INACTIVE UNTIL MC-21 IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL ACTIVATION

After activation, Claude Code may add exactly one Stage 13 finalization commit to PR #808.

Writable paths are exactly:

1. `docs/implementation/SB-P-1.13/engineering-contract.md`
2. `docs/implementation/SB-P-1.13/lovable-build-prompt.md`
3. `docs/implementation/SB-P-1.13/verification-checklist.md`
4. `communication/missions/SB-P-1.13/mission-control/36-stage13-implementation-package-review-disposition.md`

For the three package documents, change metadata/status only:
- `DRAFT — MISSION CONTROL REVIEW REQUIRED` → `APPROVED — LOCKED`;
- version → `1.0` where applicable;
- next gate → implementation-authorization / conditional Stage 14 path;
- add Stage 13 lock change-log entry where the document has a change log.

Do not change obligations, mappings, workstreams, holds, NP checks, RS scenarios, evidence classes or substantive instructions.

Create record 36 with the MC-21 PQ dispositions and exact final package blob SHAs.

Rerun objective traceability, quality/pre-commit and secret-scan checks. GitHub Actions absence must remain reported as missing if unavailable.

Return:
- final #808 head;
- all four changed paths;
- final package blobs + record 36 blob;
- verification results;
- confirmation that the Stage 12 report and locked sources are unchanged.

Do not merge #808. Do not implement anything.

STOP for Mission Control final exact-head review and human merge.
