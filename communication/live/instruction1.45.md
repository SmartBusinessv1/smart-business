# SMART BUSINESS MISSION CONTROL — MC-183
# SB-P-1.12 — Source Continuity Baseline Step 1

**Recipient:** Claude Code — continuity implementation actor  
**Work package:** `SB-P-1.12-WP-SOURCE-CONTINUITY-BASELINE-1`  
**Status:** EXECUTE ONLY AFTER THIS AUTHORIZATION PR IS HUMAN-MERGED AND MISSION CONTROL VERIFIES CANONICAL `main`

Read in full:

`communication/missions/SB-P-1.12/mission-control/53-source-continuity-baseline-step1-authorization.md`

Founder decisions are canonical in:

`communication/live/report1.44.md`

Execute **MC-181 §8 step 1 only**.

Required outcome:

1. verify the post-merge canonical `main` SHA and bind all continuity evidence to that exact SHA;
2. create one local bare Git continuity mirror outside every working tree;
3. preserve the mirror as **no-prune by default**;
4. run `git fsck --full --strict`;
5. create encrypted, timestamped, non-overwriting Git bundle recovery copies with retention designed for multiple generations;
6. maintain at least two recovery-copy instances;
7. ensure at least one copy is on normally disconnected encrypted external storage intended for the FD-C1 site-independent location;
8. generate deterministic branch/tag ref evidence, bundle verification, SHA-256 digests and a compact ledger;
9. keep integrity evidence in a different failure domain from at least one bundle it authenticates;
10. do not claim the site-independent control complete unless human physical-custody confirmation is available.

If physical custody cannot be verified, report exactly:

`FOUNDER PHYSICAL CUSTODY CONFIRMATION REQUIRED`

Do not place secrets, encryption keys, recovery codes, MFA seeds, API keys, exact private physical addresses, bundle files or mirror contents in Git.

Do not create or seed GitLab.  
Do not perform a restore drill.  
Do not install/configure LGA or WSL.  
Do not contact or mutate Supabase.  
Do not configure 1Password.  
Do not perform FD-C7 evidence work.  
Do not change application code, SQL, migrations, fixtures, runtime or production.

Write only:

- `communication/missions/SB-P-1.12/claude-code/41-source-continuity-baseline-implementation-report.md`
- `communication/live/report1.45.md`

Use a mission-scoped branch. No force push. No direct `main`. No self-merge.

The report must state:

- exact canonical baseline SHA;
- mirror verification result;
- bundle verification result;
- non-sensitive hash/ref evidence;
- encryption/storage class without secrets or exact location;
- whether human physical-custody confirmation exists;
- every stop/blocker encountered;
- exact branch/head/blobs/PR if publication succeeds;
- preserved holds.

End:

**SOURCE CONTINUITY STEP-1 REPORT SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
