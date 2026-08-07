# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-LOV-SYNC-2A — Phase 6 Bounded Canonical Source Transfer & Immediate Equivalence Verification

**Mission ID:** SB-P-1.11-LOV-SYNC-2A

**Mission Name:** Phase 6 Bounded Canonical Source Transfer & Immediate Equivalence Verification

**Parent Mission:** SB-P-1.11-LOV-SYNC-2 — Controlled One-Way Canonical Bundle Transfer & Equivalence Verification

**Mission Status:** ACTIVE UPON MERGE

**Authorized By:** Mission Control

---

# 1. Objective

Authorize only the first bounded source-transfer mutation into the already verified external-Supabase-first Lovable project, followed immediately by source-equivalence verification.

This mission does **not** authorize continuation into later runtime, dependency, backend, production, publish, deploy, or frontend-implementation phases.

The purpose is to prove that the frozen canonical GitHub snapshot can be applied into the target Lovable project without uncontrolled rewriting and that the transferred application source remains equivalent to the authorized canonical bundle.

---

# 2. Authority Chain

Execute according to the approved Smart Business governance foundation and the already merged parent mission artifacts, including:

- `communication/live/instruction1.56.md`
- the merged Phase 0–5 checkpoint for `SB-P-1.11-LOV-SYNC-2`
- `communication/live/evidence/SB-P-1.11-LOV-SYNC-2-manifest.csv`
- the frozen transfer package created from the canonical snapshot

If any conflict is found, the narrower authorization in this instruction governs this phase.

---

# 3. Locked Baselines

## 3.1 Canonical repository

`SmartBusinessv1/smart-business`

## 3.2 Authorization baseline

`18fdc225b79437eaf9db2d6c6a091ae3e29e1f01`

## 3.3 Frozen canonical source snapshot

`7684ea9f02a1a1e1a25f29845ebf831d63163a31`

The source-transfer mutation must use the exact already-prepared bundle derived from this frozen commit.

Do not rebuild the transfer bundle from a newer `main` commit during this mission.

## 3.4 Transfer manifest

`communication/live/evidence/SB-P-1.11-LOV-SYNC-2-manifest.csv`

The manifest contains the expected canonical transfer file inventory and SHA-256 hashes.

## 3.5 Target Lovable project

`f3e992ec-06df-4d49-b157-b92ec064c078`

## 3.6 Approved runtime Supabase

`gysgzasfcjvtrgaigfyn`

## 3.7 Prohibited runtime backends

Test backend:

`drravyyauixltoihzmwo`

Legacy Lovable Cloud backend:

`wwgqnshcgbukqczqblsm`

---

# 4. Precondition — Plan Mode Gate Already Passed

The merged Phase 0–5 checkpoint records that the mandatory Lovable Plan Mode gate passed.

The approved Plan Mode outcome confirmed all of the following before mutation:

- canonical supplied source is authoritative;
- transfer is one-way into Lovable;
- no GitHub connection or repository creation;
- no Lovable Cloud enablement;
- no Supabase project switch;
- no migration execution;
- no dependency modernization;
- no feature implementation;
- no publish or deploy;
- unavoidable Lovable-managed exceptions were identified before mutation.

The Plan Mode write to `.lovable/plan.md` was separately verified as a platform-side planning artifact and not an application-source mutation.

Do not repeat or broaden the Plan Mode scope unless an unexpected condition appears.

---

# 5. Authorization Boundary

This instruction authorizes exactly two operational steps:

1. **Phase 6 — one bounded canonical source-transfer mutation** using the already prepared frozen canonical package; and
2. **immediate file-equivalence verification** against the frozen manifest before any further action.

No other implementation step is authorized.

---

# 6. Phase 6 — First Bounded Canonical Source-Transfer Mutation

## 6.1 Reconfirm target immediately before mutation

Before sending the implementation-mode Lovable message, reconfirm read-only:

- target project ID is exactly `f3e992ec-06df-4d49-b157-b92ec064c078`;
- external Supabase ref still resolves to `gysgzasfcjvtrgaigfyn`;
- no Lovable Cloud backend has appeared;
- the prepared transfer package and manifest still correspond to frozen commit `7684ea9f02a1a1e1a25f29845ebf831d63163a31`.

If any item differs, STOP before mutation.

## 6.2 Implementation-mode instruction must remain bounded

Send one implementation-mode message to the target Lovable project using the already uploaded canonical transfer package.

The message must instruct Lovable to:

- apply the supplied canonical package as authoritative application source;
- replace starter-shell application/config source only where represented by the supplied canonical package;
- preserve the approved external Supabase binding;
- preserve the explicitly documented Lovable-managed exception set;
- make no changes outside the supplied canonical transfer scope except unavoidable platform metadata already disclosed during Plan Mode;
- not improve, refactor, regenerate, modernize, rename, optimize, reinterpret, or restyle the supplied source;
- not create or modify migrations;
- not execute database writes;
- not connect GitHub;
- not create a repository;
- not enable Lovable Cloud;
- not change backend project identity;
- not install or upgrade dependencies beyond what is strictly necessary for Lovable to place the supplied files;
- not implement SB-P-1.11-UI-1 or any product feature;
- not publish or deploy.

## 6.3 Mutation count

Authorize only one Lovable implementation message for this phase.

Do not send a second correction message before equivalence verification.

If Lovable's first implementation response indicates it could not complete the transfer exactly, STOP and document the discrepancy rather than attempting an immediate repair.

---

# 7. Mandatory Immediate Equivalence Verification

After the implementation message completes, perform verification before any build, install, test, runtime, backend, or further implementation action.

## 7.1 Capture the resulting Lovable commit/edit identity

Record:

- Lovable message ID;
- resulting commit/edit SHA if provided;
- exact implementation response;
- exact diff summary.

## 7.2 Inventory verification

List all files in the target Lovable project after transfer.

Compare the transferred canonical scope against the manifest.

For every manifest entry, verify:

- expected path exists;
- file can be read;
- size is consistent where determinable;
- SHA-256 of the resulting file matches the expected manifest SHA-256.

## 7.3 Critical-file byte-equivalence verification

At minimum, directly verify exact content equivalence for critical files represented in the transfer package, including where applicable:

- `package.json`
- `bun.lock`
- `supabase/config.toml`
- Supabase client files under `src/integrations/supabase/`
- authentication and protected-route source
- application route definitions
- core application entry files
- Vite/TanStack build configuration
- TypeScript configuration
- environment-template/config files included in the package

A successful build is **not** a substitute for equivalence.

## 7.4 Extra-file classification

Any file present in Lovable but not in the canonical transfer manifest must be classified as one of:

- pre-existing Lovable platform metadata;
- previously documented Plan Mode artifact;
- unavoidable platform-generated metadata already identified at the Plan Mode gate;
- unexpected divergence.

Unexpected application/config files are a STOP condition.

## 7.5 Diff verification

Use Lovable's diff/read capabilities to determine whether the transfer introduced any changes beyond:

- canonical package application; and
- approved platform exception files.

Any unexplained agent-authored source change is a STOP condition.

---

# 8. Equivalence Verdict

## PASS — PHASE 6 TRANSFER EQUIVALENCE VERIFIED

A phase-level PASS requires all of the following:

- exactly one bounded implementation message was sent;
- canonical transfer package from frozen commit `7684ea9f02a1a1e1a25f29845ebf831d63163a31` was used;
- every canonical manifest file exists in Lovable;
- every canonical manifest file matches its expected SHA-256;
- no unexplained application/config source divergence exists;
- only the previously approved Lovable-managed exception set remains outside canonical equivalence;
- backend binding remains `gysgzasfcjvtrgaigfyn` at the immediate post-transfer read-only check;
- no GitHub connection/repository creation occurred;
- no Lovable Cloud was introduced;
- no migration or production data write was executed;
- no publish/deploy occurred;
- no SB-P-1.11-UI-1 implementation occurred.

A PASS under this instruction authorizes **nothing further by itself**.

Mission Control must separately authorize continuation into later verification phases.

## STOPPED — EQUIVALENCE NOT PROVEN

Use STOPPED if the transfer completed but exact equivalence cannot be established without another mutation or without broader authorization.

Do not repair automatically.

## FAIL — UNAUTHORIZED DIVERGENCE OR MUTATION

Use FAIL if any prohibited action occurred, including:

- backend switch;
- Lovable Cloud introduction;
- database migration/write;
- GitHub repository creation/connection;
- publish/deploy;
- material source rewriting outside the canonical package;
- dependency modernization;
- feature implementation.

---

# 9. Mandatory Stop Conditions

STOP immediately if any of the following occurs:

- Lovable requests another implementation message to finish the transfer;
- the supplied bundle is no longer available or no longer tied to the frozen commit;
- any manifest file is missing;
- any manifest hash differs;
- Lovable rewrites canonical application source;
- Lovable changes `package.json` or `bun.lock` away from the canonical supplied content;
- Supabase ref differs from `gysgzasfcjvtrgaigfyn`;
- `drravyyauixltoihzmwo` appears as runtime;
- `wwgqnshcgbukqczqblsm` appears;
- a migration/database action is proposed or executed;
- a GitHub connect/create-repository action is proposed or executed;
- publish/deploy is proposed or executed;
- a correction requires another source mutation.

Do not cross a stop condition to gather more evidence.

---

# 10. Explicitly Not Authorized

This mission does **not** authorize:

- frozen dependency install;
- application build;
- test execution;
- runtime preview verification;
- authentication verification;
- production behavioral testing;
- migration application;
- production writes;
- dependency repair or modernization;
- source cleanup;
- Lovable template normalization;
- GitHub connection;
- repository creation;
- Lovable Cloud;
- original Lovable project changes;
- `SB-P-1.11-UI-1` implementation;
- publish;
- deploy.

Those remain outside this phase.

---

# 11. Evidence Requirements

Create a phase completion report at:

`communication/live/report1.60.md`

The report must include:

- authorization baseline;
- frozen canonical commit;
- target Lovable project ID;
- implementation message ID and resulting edit/commit identity;
- proof that exactly one implementation message was sent;
- manifest file count;
- matched-file count;
- mismatched-file count;
- missing-file count;
- unexpected-extra-file count;
- documented platform exception files;
- critical-file verification results;
- post-transfer backend identity check;
- explicit confirmation that no GitHub connection, Cloud, migration, production write, frontend implementation, publish, or deploy occurred;
- final phase verdict: PASS / STOPPED / FAIL;
- exact next logical step.

If useful, add machine-readable equivalence evidence under:

`communication/live/evidence/`

Do not include secrets, service-role keys, database passwords, or raw sensitive credentials in repository evidence.

---

# 12. Repository Handling

The completion report and any non-sensitive evidence must be committed on a dedicated mission branch and opened as a pull request for human review.

Do not self-merge.

Do not modify unrelated files.

---

# 13. Release Gate

`SB-P-1.11-UI-1` remains **ON HOLD** after this phase even if the Phase 6 equivalence verdict is PASS.

A separate Mission Control authorization is required for the remaining verification chain before frontend work may resume.

---

# 14. Next Logical Step

If and only if this phase returns **PASS — PHASE 6 TRANSFER EQUIVALENCE VERIFIED**, Mission Control may authorize the next bounded verification stage covering frozen dependency install, build, existing tests, runtime smoke verification, and final backend/production integrity confirmation.
