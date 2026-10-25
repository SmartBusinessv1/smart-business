# SMART BUSINESS MISSION CONTROL — MC-167

# SB-P-1.12 — Stage 13 Package Refinement

**Recipient:** Claude Code  
**Target:** PR #700 only  
**Work package:** `SB-P-1.12-WP-STAGE13-PACKAGE-REFINEMENT`  
**Status:** EXECUTE ONLY AFTER THE MC-167 PR IS HUMAN-MERGED AND MISSION CONTROL VERIFIES THE CORRECTED LOCKED EIS

Read in full:

`communication/missions/SB-P-1.12/mission-control/39-stage13-package-review-and-refinement-authorization.md`

Use the existing PR #700 branch:

`mission/SB-P-1.12-stage12-initial-implementation-package`

Refine only these four files:

- `docs/implementation/SB-P-1.12/engineering-contract.md`
- `docs/implementation/SB-P-1.12/lovable-build-prompt.md`
- `docs/implementation/SB-P-1.12/verification-checklist.md`
- `communication/live/report1.30.md`

Required corrections:

1. cite corrected locked EIS blob `c444f7509477d0e8b997af538440d93bf2ca4d72` everywhere;
2. PQ-1: assign `EC-ISO-10` to WS-A3; keep `EC-DEP-01` as cross-cutting governance/consumer gate, explicitly not an implementation builder workstream;
3. PQ-2: classify `EC-LEG-02` as BUILD — AUTHORIZATION GATED and allocate its neutral technical hold-state implementation to WS-F; do not invent legal rules; keep NP-35 test/migration gated;
4. PQ-3:
   - `EC-DEL-01` through `EC-DEL-06`: BUILD — RUNTIME / AUTHORIZATION GATED;
   - `EC-DEL-07`: VERIFICATION — RUNTIME GATED;
   - `EC-LEG-01`: BUILD — LEGAL / RUNTIME GATED;
   - `EC-LEG-02`: BUILD — AUTHORIZATION GATED;
   - `EC-LEG-03`: EVIDENCE-ONLY / PROVIDER-LEGAL GATED;
   preserve all affected rows as IN SCOPE;
5. PQ-4: record migration mission + builder allocation as downstream prerequisites; implementation remains withheld;
6. mark PQ-7 resolved by MC-167.

Do not change FCTM row IDs, dispositions, build commitments, commercial classifications or mission assignments. Do not add Product Truth.

Re-run all traceability, Markdown, staged-file, secret and diff checks.

Update PR #700 only. No new PR. No force push. No self-merge.

Return exact refined head, four blobs, traceability counts and exact Actions state.

End:

**STAGE 13 PACKAGE REFINEMENT SUBMITTED — STOP FOR MISSION CONTROL REVIEW**

No implementation.
