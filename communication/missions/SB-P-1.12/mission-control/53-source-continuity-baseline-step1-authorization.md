# SMART BUSINESS MISSION CONTROL — MC-183

# SB-P-1.12 — Source Continuity Baseline Step-1 Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Pre-authorization baseline:** `main@5414b5ebf4ca10fe2f673d09208cc110c997825b`  
**Founder-decision authority:** MC-181 + `communication/live/report1.44.md` + MC-182  
**Work package:** `SB-P-1.12-WP-SOURCE-CONTINUITY-BASELINE-1`  
**Implementation Authorization:** WITHHELD for Smart Business product implementation; this record authorizes only the operational-resilience continuity work below  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Canonical precondition

Mission Control verified:

- PR #724 human-merged;
- canonical `main` = `5414b5ebf4ca10fe2f673d09208cc110c997825b`;
- `communication/live/report1.44.md` is canonical;
- `mission-control/52-founder-continuity-decision-disposition-and-canonicalization.md` is canonical;
- no `communication/live/instruction1.45.md` existed before this authorization was prepared.

This record is only preparatory until its own PR is human-merged and Mission Control verifies the resulting canonical `main`.

## 2. Authorized scope — MC-181 §8 step 1 only

After this authorization becomes effective, the appointed execution actor may implement the source continuity baseline consisting only of:

1. one local bare Git continuity mirror outside any working tree;
2. encrypted, timestamped, non-overwriting Git bundle recovery copies with retention designed to preserve multiple generations;
3. at least two recovery-copy instances, with at least one held on normally disconnected external storage under FD-C1 and physically/site independent from the Founder’s primary work location;
4. integrity evidence sufficient to bind the mirror and bundle generation to the exact canonical `main` SHA, including:
   - `git fsck --full --strict` result;
   - `git bundle verify` result;
   - deterministic branch/tag ref manifest;
   - SHA-256 digest for each bundle and its manifest;
   - a compact sync/evidence ledger whose integrity data exists in a different failure domain from at least one bundle it authenticates;
5. explicit stop/incident handling for mismatch, corruption, missing encryption, unexpected ref state or secret exposure.

The archival mirror is **no-prune by default**. Do not introduce `--prune`, force-update or destructive ref deletion into this baseline.

## 3. Exact execution baseline

The executor must not assume `5414b5ebf4ca10fe2f673d09208cc110c997825b` remains the execution baseline.

After the PR containing MC-183 and `instruction1.45.md` is human-merged:

1. verify the new canonical `main` SHA;
2. record that exact post-merge SHA as the continuity generation’s trusted baseline;
3. verify the mirror’s `refs/heads/main` resolves exactly to that SHA before creating the governed bundle generation;
4. stop and report if the values differ.

No mismatch may be silently repaired or normalized.

## 4. Encryption and secret boundary

Authorized backup material must be encrypted at rest.

This record does **not** authorize:

- writing encryption keys, passwords, recovery codes, MFA seeds, API keys or provider tokens to Git;
- recording exact sensitive physical storage addresses;
- inventing or exposing a new secret in repository communication;
- migrating credentials to 1Password under FD-C6;
- rotating any existing secret.

If suitable encrypted storage is unavailable, the executor must stop and report the blocker rather than create a plaintext recovery copy.

The implementation report may identify only the encryption/storage **class** used and whether it was verified; it must not include keys, recovery material, device serials or exact private locations.

## 5. Physical custody boundary

An AI execution actor may prepare and verify the machine-side backup artifacts only where its execution environment permits.

The site-independent control is not complete until the Founder or another explicitly authorized human confirms that the encrypted external recovery copy is:

- normally disconnected; and
- held in a securely controlled physical location separate from the Founder’s primary work location.

If the actor cannot independently verify the physical custody condition, it must report:

`FOUNDER PHYSICAL CUSTODY CONFIRMATION REQUIRED`

and must not claim MC-181 §8 step 1 complete.

## 6. Evidence and repository outputs

The execution actor may write only:

- `communication/missions/SB-P-1.12/claude-code/41-source-continuity-baseline-implementation-report.md`
- `communication/live/report1.45.md`

Repository evidence may contain canonical SHAs, bundle hashes, ref-manifest hashes, verification results, timestamps, storage/encryption class and non-sensitive stop-condition evidence.

Do not commit bundle files, mirror contents, full backup logs, secrets, exact storage paths/addresses or removable-media identifiers to canonical Git.

## 7. Explicitly not authorized

This package does **not** authorize:

- GitLab account or repository creation;
- GitLab remote configuration, seeding or synchronization;
- MC-181 §8 step 2;
- restore drill / MC-181 §8 step 3;
- WSL2/Ubuntu installation or LGA work;
- Supabase Support contact or provider mutation;
- second Supabase Owner invitation or role change;
- 1Password setup, credential migration or secret rotation;
- FD-C7 mailbox/domain evidence work;
- branch-protection changes;
- application code changes;
- SQL or migration authoring/execution;
- test-fixture creation;
- runtime activation;
- production mutation.

## 8. Stop conditions

Stop and return a blocked report if any of the following occurs:

- canonical post-merge SHA cannot be verified;
- mirror `main` differs from canonical `main`;
- `git fsck --full --strict` fails;
- `git bundle verify` fails;
- encrypted storage is unavailable;
- a requested operation would prune, force-update or destructively rewrite archival refs;
- any secret or sensitive exact physical address would need to enter Git;
- the physical site-independent custody requirement cannot be confirmed;
- the actor would need to exceed the writable surfaces or authorities above.

## 9. Next gate

After `report1.45.md` is returned and its implementation evidence is canonical, Mission Control must independently disposition MC-181 §8 step 1 before any step-2 secondary Git remote work is authorized.

All Smart Business implementation/migration/runtime/production holds remain unchanged.

**SOURCE CONTINUITY STEP-1 AUTHORIZATION PREPARED — STOP FOR HUMAN MERGE AND POST-MERGE VERIFICATION**
