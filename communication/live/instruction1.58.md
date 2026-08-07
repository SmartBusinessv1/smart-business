# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-LOV-SYNC-2B — CRLF Equivalence Remediation & Corrective One-Way Transfer

**Mission ID:** SB-P-1.11-LOV-SYNC-2B

**Mission Name:** CRLF Equivalence Remediation & Corrective One-Way Transfer

**Reporting Room:** Claude Engineering / Lovable Integration

**Mission Status:** AUTHORIZED — PENDING HUMAN MERGE

**Authorized By:** Mission Control

---

# 1. Mission Objective

Remediate the line-ending equivalence defect discovered during `SB-P-1.11-LOV-SYNC-2A` without broadening scope or weakening GitHub canonicality.

This mission authorizes a narrowly-scoped recovery sequence only:

1. freeze and re-use the same canonical source commit previously authorized for the transfer;
2. reconstruct the corrective transfer material directly from canonical Git blob bytes, bypassing checkout filters and `core.autocrlf`;
3. independently prove package bytes match canonical Git blob bytes before upload;
4. derive the smallest corrective file set required from the current Lovable state;
5. send exactly one corrective implementation-mode Lovable message;
6. immediately re-run byte-equivalence verification;
7. stop before install, build, tests, runtime verification, feature work, publish, or deploy.

This is a remediation mission only.

It does not authorize a new product implementation phase.

---

# 2. Governing Context

Execute according to the approved Smart Business governance foundation and the locked decisions already established for `SB-P-1.11`.

The following prior evidence is controlling for this remediation:

- `SB-P-1.11-LOV-SYNC-2` Plan Mode gate passed;
- `SB-P-1.11-LOV-SYNC-2A` executed one bounded source transfer;
- Lovable applied the supplied package faithfully;
- the transfer package itself contained unintended CRLF conversion caused upstream by local checkout/filter behavior;
- the defect was traced to `core.autocrlf=true` with no repository-level line-ending override protecting the artifact-generation path;
- equivalence was therefore not proven;
- a second corrective Lovable mutation was not authorized by the prior mission and must be separately authorized here.

Do not reinterpret the prior STOPPED verdict as a Lovable corruption finding.

The defect is an artifact-preparation defect unless new evidence proves otherwise.

---

# 3. Locked Identities

## Canonical repository

`SmartBusinessv1/smart-business`

## Remediation authorization baseline

`f0653663324bae1c02281da913d2322e6d5bd428`

## Frozen canonical source commit

`7684ea9f02a1a1e1a25f29845ebf831d63163a31`

This frozen source commit remains the source-of-truth snapshot for this remediation.

Do not silently advance the source snapshot to a newer commit.

## Target Lovable project

`f3e992ec-06df-4d49-b157-b92ec064c078`

## Approved runtime Supabase

`gysgzasfcjvtrgaigfyn`

## Test Supabase — must not become runtime

`drravyyauixltoihzmwo`

## Legacy Lovable Cloud backend — must remain absent

`wwgqnshcgbukqczqblsm`

---

# 4. Canonicality Rule

GitHub remains the sole canonical source.

For this mission, canonical file bytes mean the exact blob bytes stored in Git for the frozen commit.

Canonical bytes must be obtained from the Git object database directly.

Do not use a checked-out working-tree copy as the source of transfer material.

Do not trust line-ending-normalized filesystem copies.

Do not use `git archive` output if the local process or extraction path can apply text conversion before hashing or packaging.

Do not use editor-opened or rewritten copies.

The source-of-truth comparison must be against the actual blob object bytes.

---

# 5. Required Blob-Safe Extraction Method

The implementation may use an equivalent binary-safe method, but it must satisfy all of the following:

1. enumerate the authorized transfer paths from the prior transfer manifest / frozen source scope;
2. resolve each path to the blob object at the frozen commit;
3. read bytes directly from Git object storage using a binary-safe Git command such as `git cat-file blob <blob-sha>` or an equivalent object-database method;
4. write those bytes to a fresh remediation staging directory without text decoding or newline rewriting;
5. calculate SHA-256 from the canonical blob bytes;
6. calculate SHA-256 again from the staged file bytes;
7. require exact equality before the file is allowed into the corrective package.

A binary-safe script is preferred over shell pipelines that may decode text.

The script must treat all file contents as bytes.

Any mismatch between canonical blob hash and staged-file hash is an immediate STOP.

---

# 6. Local Line-Ending Protection Gate

Before generating remediation material, record:

- `git config --show-origin --get core.autocrlf`;
- `git config --show-origin --get core.eol` if present;
- relevant `.gitattributes` state at the frozen commit;
- the operating system / shell environment used for generation.

Do not rely on changing global Git configuration as the primary fix.

The remediation must be robust even if `core.autocrlf=true` remains configured.

The proof requirement is byte equality with Git blobs, not a configuration assumption.

A repository `.gitattributes` improvement may be recommended separately, but this mission does not authorize adding or modifying `.gitattributes` unless that file itself is already part of the frozen canonical snapshot and is being transferred unchanged.

---

# 7. Authorized Transfer Scope

The prior transfer contained 118 manifest files.

This mission must independently compare the current Lovable project against the true canonical blob bytes and derive the smallest correction set.

Expected prior finding:

- 116 of 118 transferred files differed only because LF bytes became CRLF upstream;
- values/content semantics were otherwise unchanged;
- Lovable faithfully applied the supplied CRLF-affected material.

Do not hard-code `116` as the remediation count without re-verification.

The correction set must be derived from evidence.

Only files that are currently byte-different from the frozen canonical blob and are proven to require correction may be included.

Do not re-transfer already equivalent files merely for convenience.

---

# 8. Generated-File Exception

`src/routeTree.gen.ts` was previously identified as a pre-approved TanStack Router generated-file exception.

Handle it according to the already-established exception rule.

Do not treat expected deterministic TanStack regeneration alone as unauthorized source drift.

However:

- document its canonical blob hash;
- document its current Lovable hash / generated state;
- document why it is excluded from strict byte identity if exclusion is still necessary;
- do not broaden this exception to other files.

If its current divergence cannot be fully explained by the previously approved generated-file behavior, STOP.

---

# 9. Phase A — Preflight

Before creating any new package, verify all of the following:

1. latest repository `main` contains the merged `SB-P-1.11-LOV-SYNC-2A` report;
2. the frozen canonical commit still resolves;
3. the prior 118-file transfer scope is recoverable from committed evidence;
4. the target Lovable project still exists;
5. the target Lovable project still uses Supabase ref `gysgzasfcjvtrgaigfyn`;
6. no Lovable Cloud backend has appeared;
7. no GitHub connection/repository binding has appeared on the target Lovable project;
8. no unauthorized product implementation has occurred since the STOPPED checkpoint;
9. production Supabase baseline remains unchanged from the prior verified state;
10. `SB-P-1.11-UI-1` remains on hold.

Any failed preflight condition requires STOP before artifact generation.

---

# 10. Phase B — Reconstruct Canonical Hash Baseline

Create a fresh remediation manifest from true Git blob bytes.

Recommended evidence path:

`communication/live/evidence/SB-P-1.11-LOV-SYNC-2B-canonical-manifest.csv`

For every authorized transfer path record at least:

- path;
- frozen commit;
- Git blob SHA;
- canonical byte length;
- canonical SHA-256;
- current Lovable SHA-256 where retrievable;
- remediation required: yes/no;
- reason;
- generated-file exception: yes/no.

The canonical SHA-256 must be calculated from the actual Git blob bytes.

Do not derive canonical hashes from the previous CRLF-affected package.

---

# 11. Phase C — Build Minimal Corrective Package

Create a fresh package containing only the proven correction set.

Recommended artifact naming:

`SB-P-1.11-LOV-SYNC-2B-corrective-bundle.zip`

Do not reuse the prior uploaded ZIP.

Do not modify file contents while packaging.

For each packaged file, verify:

`SHA256(staged file bytes) == SHA256(canonical Git blob bytes)`

Then verify the ZIP payload after creation by reopening the ZIP as raw bytes and hashing each member independently.

For each member require:

`SHA256(zip member bytes) == SHA256(canonical Git blob bytes)`

The package is not authorized for upload until every included member passes both checks.

---

# 12. Phase D — Pre-Upload Proof Gate

Before upload, produce a concise proof table with:

- number of original transfer paths;
- number already canonical-equivalent;
- number requiring correction;
- number excluded only under approved generated-file exception;
- number of package members;
- number of package-member hash mismatches.

Required pre-upload condition:

**package-member hash mismatches = 0**

If not zero, STOP.

Do not upload a partially verified package.

---

# 13. Phase E — Corrective Lovable Mutation Authorization

After the pre-upload proof gate passes, exactly one corrective implementation-mode Lovable message is authorized.

The message must state that:

- this is a byte-correction remediation only;
- GitHub canonical blob bytes are authoritative;
- only the attached proven correction-set files may be replaced;
- no other application source may be edited;
- no dependencies may be changed;
- no package versions may be modernized;
- no migrations may be created or applied;
- no database writes are authorized;
- no backend connection changes are authorized;
- Lovable Cloud must remain disabled/absent;
- no GitHub connection or repository creation is authorized;
- no feature implementation is authorized;
- no refactoring is authorized;
- no formatting cleanup is authorized;
- no generated improvements are authorized beyond the already-approved `src/routeTree.gen.ts` behavior if triggered unavoidably;
- no publish or deploy is authorized.

The corrective message must not invite Lovable to "fix", "improve", "clean up", or "modernize" the repository.

It must ask Lovable to apply the supplied bytes as narrowly as the platform permits.

---

# 14. Exactly-One-Mutation Rule

This mission authorizes one corrective implementation-mode message only.

If Lovable applies the correction imperfectly, do not send another correction message.

If a second mutation appears necessary, STOP and report.

Do not repair interactively.

Do not normalize unexplained divergence after the fact.

---

# 15. Phase F — Immediate Equivalence Verification

Immediately after the one corrective message completes, verify the target Lovable project independently.

Do not rely only on Lovable's self-report.

For every strict-equivalence file in the authorized transfer scope:

1. retrieve the resulting Lovable file bytes through the most direct available file/diff API;
2. calculate SHA-256;
3. compare against the canonical Git blob SHA-256 from Phase B.

Required result:

- all strict-equivalence files match canonical blob bytes exactly;
- zero unexpected missing files;
- zero unexpected extra application/config files caused by remediation;
- only previously documented Lovable-managed exception files remain outside the canonical scope;
- generated-file exception remains separately justified.

Any unexplained mismatch is a STOP/FAIL.

---

# 16. Backend Integrity Verification

After corrective transfer, re-confirm:

- Supabase project ref remains exactly `gysgzasfcjvtrgaigfyn`;
- no reference to `drravyyauixltoihzmwo` has become runtime configuration;
- no reference to `wwgqnshcgbukqczqblsm` has appeared;
- external Supabase connection remains preserved;
- no Lovable Cloud backend was provisioned;
- no database migration was created/applied;
- no production schema/data mutation occurred.

If backend identity cannot be proven, STOP.

---

# 17. Dependency Integrity Verification

Verify that the remediation did not modernize or rewrite dependency versions.

In particular, compare canonical frozen values for:

- `package.json`;
- `bun.lock`;
- Lovable/TanStack build tooling versions;
- Supabase client dependencies.

The prior transfer preserved `@lovable.dev/vite-tanstack-config` at the canonical version rather than Lovable's newer template version.

That preservation must remain intact.

No dependency install is authorized in this mission.

---

# 18. Production Integrity Verification

Use read-only checks only.

Confirm the previously established production baseline remains unchanged.

Do not create a test business.

Do not invoke write commands.

Do not run behavioral production tests.

Do not apply migrations.

Any unexpected production mutation requires FAIL and escalation.

---

# 19. GitHub Integrity Verification

Confirm:

- target Lovable project still has no GitHub connection that can create/push a repository;
- canonical `main` was not changed by Lovable;
- no new repository was created by this remediation;
- remediation evidence/report is the only repository-side change authorized by this mission.

The corrective transfer must remain one-way:

**GitHub canonical blob bytes → Lovable execution workspace**

Never Lovable → canonical GitHub.

---

# 20. Explicitly Not Authorized

This mission does not authorize:

- `SB-P-1.11-UI-1` frontend implementation;
- any new product feature;
- dependency install;
- build execution;
- test execution;
- runtime smoke verification;
- production behavioral testing;
- migrations;
- database writes;
- schema changes;
- Lovable Cloud;
- GitHub connection;
- new repository creation;
- original Lovable project modification;
- dependency modernization;
- refactoring;
- cleanup unrelated to CRLF equivalence;
- `.gitattributes` governance change;
- publish;
- deploy.

---

# 21. Stop Conditions

STOP immediately if any of the following occurs:

1. canonical blob extraction cannot be proven binary-safe;
2. staged bytes differ from Git blob bytes;
3. ZIP member bytes differ from Git blob bytes;
4. correction set cannot be derived deterministically;
5. current Lovable state contains unexplained drift beyond the known CRLF defect / approved exceptions;
6. target backend ref changes;
7. Lovable Cloud appears;
8. a GitHub connection/repository action is requested;
9. migration/database action is requested;
10. dependency changes are proposed;
11. Lovable edits files outside the corrective set except previously approved platform-managed exceptions;
12. a second corrective message would be required;
13. equivalence verification produces any unexplained mismatch;
14. production baseline changes unexpectedly;
15. publish/deploy is requested or triggered.

Do not improvise around a stop condition.

---

# 22. Required Evidence

Capture sufficient evidence to prove:

- exact frozen commit used;
- local Git line-ending configuration observed;
- direct Git blob extraction method;
- canonical blob SHA-256 manifest;
- current Lovable comparison results;
- minimal correction-set derivation;
- pre-upload staged-file hash equality;
- post-ZIP member hash equality;
- exact corrective Lovable message;
- Lovable edit/diff result;
- post-transfer per-file equivalence result;
- generated-file exception handling;
- backend integrity;
- dependency integrity;
- production integrity;
- GitHub integrity;
- absence of prohibited actions.

Do not include secrets in evidence.

Do not commit service-role keys or private tokens.

---

# 23. Required Completion Report

Create:

`communication/live/report1.61.md`

The report must state one final verdict:

## PASS

Use only if canonical byte equivalence is proven for every strict-equivalence file, all approved exceptions remain bounded and explained, backend integrity passes, dependency integrity passes, production is unchanged, GitHub remains canonical, and no prohibited action occurred.

## STOPPED

Use if execution correctly halts at a safety boundary before full equivalence can be proven.

## FAIL

Use if unauthorized mutation, unexplained drift, backend change, production mutation, or other material integrity failure occurs.

---

# 24. PASS Does Not Release UI-1

Even a PASS for this remediation does not itself authorize `SB-P-1.11-UI-1`.

A PASS only establishes that the one-way canonical source transfer has been repaired and equivalence proven at the source layer.

Further install/build/test/runtime verification remains separately gated.

`SB-P-1.11-UI-1` remains on hold until Mission Control explicitly releases it.

---

# 25. Repository Delivery Requirements

After execution:

1. create `communication/live/report1.61.md`;
2. add the canonical remediation manifest under `communication/live/evidence/` if appropriate and free of secrets;
3. run the Markdown Quality Gate;
4. run repository pre-commit validation applicable to documentation/evidence changes;
5. open a completion-report PR;
6. stop.

Do not self-merge.

Human review and merge remain required.

---

# 26. Founder Interaction Boundary

No Founder action should be requested unless Lovable presents a human-only confirmation that is unavoidable for the already-authorized single corrective transfer.

If such a screen appears, stop before confirmation and provide exact click-by-click instructions plus the full visible warning/confirmation text.

Do not ask the Founder to approve any migration, Cloud enablement, GitHub connection, repository creation, publish, or deploy action.

---

# 27. Mission Success Definition

This mission succeeds only when the following statement is evidence-backed:

> The target Lovable project now contains the authorized Smart Business canonical source bytes from frozen GitHub commit `7684ea9f02a1a1e1a25f29845ebf831d63163a31` for every strict-equivalence file in scope, with only previously approved bounded platform/generated exceptions; the approved external Supabase binding remains intact; production remains unchanged; GitHub remains the sole canonical source; and no prohibited action occurred.

Anything less is not a PASS.

---

# Next logical step

After this instruction is human-reviewed and merged, execute the blob-safe regeneration and pre-upload proof gate first. Only after zero package-member hash mismatches are proven may the single corrective Lovable transfer be sent. Immediately verify equivalence and stop before install/build/tests/runtime work.
