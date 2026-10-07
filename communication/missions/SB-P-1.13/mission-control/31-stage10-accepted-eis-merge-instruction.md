# SB-P-1.13 — Stage 10 Accepted EIS Merge Instruction

**Authority:** SB-P-1.13-MC-18  
**Target:** PR #793  
**Exact accepted head:** `90311eb7d7ea2a4a4d1619e5a969e69790fe3295`  
**Accepted EIS blob:** `821badea37ba349f6aa83ed7d5a83b405c3038bd`  
**Status:** INACTIVE UNTIL MC-18 IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL ACTIVATION

After activation:

1. Reverify PR #793 is OPEN and UNMERGED.
2. Reverify exact head and EIS blob above.
3. If PR #793 remains Draft, mark it Ready for review.
4. Run/confirm normal repository checks.
5. Human-merge PR #793.
6. Do not modify the EIS or any other PR #793 file before merge.
7. Do not self-merge through automation or a builder.
8. Return the merge commit and resulting protected `main` identity to Mission Control.

If head/blob differs, STOP and return to Mission Control.

No Stage 11, implementation, SQL/schema/migration, provider or production work follows automatically from the merge.

STOP after human merge for Mission Control post-merge verification.
