# SMART BUSINESS — REPOSITORY COMMUNICATION

# instruction2 — Lovable Tooling Compatibility Correction

**Mission ID:** `SB-OPS-PROD-SYNC-1.0`

**Stage:** `02 — Lovable tooling compatibility correction`

**From:** Smart Business Mission Control

**To:** Claude Code / Repository Synchronization Operator

**Status:** `AUTHORIZED — NARROW CORRECTION`

**Date:** `2026-09-02`

---

## 1. Reason for this instruction

Mission Control reviewed `report1` and target PR `SmartBusinessv1/starter-supab-shell#1`.

The runtime synchronization itself is accepted as disciplined and within the authorized application scope, but one target-specific platform compatibility issue must be corrected before the target PR is merged.

The synchronization replaced the production delivery repository's Lovable tooling dependency:

`@lovable.dev/vite-tanstack-config = 2.13.1`

with the canonical repository value:

`@lovable.dev/vite-tanstack-config = 2.7.7`.

The production delivery repository was intentionally created for Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078`. Its pre-synchronization Lovable tooling state is therefore target-specific production-delivery configuration and must not be downgraded merely for canonical file parity unless direct evidence proves the downgrade is required.

This correction fixes the synchronization instruction's overly broad `package.json`/`bun.lock` parity rule. It is not a redesign and does not reopen the completed runtime synchronization.

## 2. Authoritative repositories and refs

Canonical repository:

`SmartBusinessv1/smart-business`

Production delivery repository:

`SmartBusinessv1/starter-supab-shell`

Target PR:

`SmartBusinessv1/starter-supab-shell#1`

Authorized target branch:

`mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`

Current synchronization commit before correction:

`d82c9a4c74598408899315cf5f0ff7cbe35ad61e`

Pre-synchronization target baseline used as the authority for target-specific Lovable tooling:

`fd7c29c11882a164799e00584701a9db46e06cca`

Production Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Production Supabase project:

`gysgzasfcjvtrgaigfyn`

## 3. Narrow objective

Correct only the dependency/tooling state necessary to preserve the new production Lovable workspace's target-specific tooling compatibility while retaining all application/runtime dependencies required by the synchronized SB-P-1.10/SB-P-1.11 implementation.

Required outcome:

1. preserve `@lovable.dev/vite-tanstack-config` at the target baseline version `2.13.1` unless direct repository evidence proves that `2.13.1` cannot build the synchronized application;
2. retain the synchronized SB-P-1.11 application dependencies and scripts actually required by the runtime, including parser/AWS dependencies and `build:lambda`;
3. reconcile `bun.lock` narrowly so it represents the corrected `package.json` without importing the old `2.7.7` Lovable tooling dependency graph merely for canonical parity;
4. keep every synchronized application/runtime source file from stage 01 unchanged unless a direct compile dependency requires a narrowly documented correction.

## 4. Source of truth for this correction

For Smart Business application dependencies, use the synchronized stage-01 application requirements.

For the Lovable tooling package and its lockfile graph, use the pre-synchronization target baseline `fd7c29c11882a164799e00584701a9db46e06cca` as the target-specific authority.

Do not use the historical Lovable project `64c2b9b1-2461-4045-9acc-19e2658b8ca2` as a source.

Do not introduce Lovable Cloud project `wwgqnshcgbukqczqblsm` or test Supabase project `drravyyauixltoihzmwo`.

## 5. Authorized files

This correction is limited to:

- `package.json`
- `bun.lock`

A source-code file may be changed only if a direct build failure proves it is necessary for compatibility with the preserved target Lovable tooling version. Any such change must be minimal and explicitly documented in `report2`.

No other broad synchronization is authorized.

## 6. Required dependency reconciliation

Compare:

- target baseline `fd7c29c...:package.json` and `bun.lock`;
- current target PR branch state after `d82c9a4`;
- synchronized runtime imports/scripts.

Then construct the minimal corrected dependency state.

At minimum verify that the corrected `package.json`:

- restores `@lovable.dev/vite-tanstack-config` to `2.13.1`;
- retains `@aws-sdk/client-s3`;
- retains `aws4fetch`;
- retains `build:lambda`;
- retains any other dependency proven necessary by the synchronized runtime;
- does not remove `exceljs`, `papaparse`, or `@types/papaparse` if the synchronized runtime still imports or requires them;
- does not retain `2.7.7`-only Lovable plugin dependencies unless they are independently required by the corrected `2.13.1` dependency graph.

For `bun.lock`, prefer a deterministic minimal reconciliation based on the target baseline's `2.13.1` tooling graph plus the synchronized runtime's added dependencies.

Do not blindly copy either repository's entire lockfile if that reintroduces the known compatibility problem.

## 7. Verification

After reconciliation run, as available:

```bash
bun install --frozen-lockfile
bun run build
bun run lint
git diff --check
```

If `bun install --frozen-lockfile` still fails solely because a Lovable-internal registry URL is unreachable in the local environment, do not conceal or route around that limitation. Verify that the lockfile and `package.json` are internally consistent as far as the available tooling permits, run the build using a non-mutating/diagnostic install only if necessary, discard any unintended lockfile rewrite, and document the exact result.

The build must pass before this correction can be reported as ready.

Also verify:

- `supabase/config.toml` remains untouched and bound to `gysgzasfcjvtrgaigfyn`;
- `.lovable/**` remains untouched;
- `.env*` remains untouched;
- no forbidden backend ref is introduced;
- no source/runtime file outside this narrow correction changed without a documented direct build necessity.

## 8. Git authority

Founder/Mission Control authorizes **Claude Code** for mission **`SB-OPS-PROD-SYNC-1.0`** to operate on repository **`SmartBusinessv1/starter-supab-shell`**, using branch **`mission/SB-OPS-PROD-SYNC-1.0-runtime-sync`**, limited to **`package.json`, `bun.lock`, and only a directly proven minimal source compatibility correction if required by build evidence**, with commit message **`Preserve production Lovable tooling compatibility`**, and to fetch, pull fast-forward only, stage exact authorized files, commit, push the authorized mission branch, and update the existing pull request **`starter-supab-shell#1`**.

No direct push to `main`.

No force push.

No self-merge or self-approval.

## 9. Explicitly not authorized

- merge of target PR #1;
- Lovable publication;
- production domain cutover;
- Supabase migration/schema/RLS/grant/Auth/data mutation;
- AWS/Lambda deployment;
- historical Lovable reuse;
- broad dependency upgrades unrelated to the correction;
- application feature work, including Catalog dropdown wiring or Inventory bulk-upload UI.

## 10. Required reply — report2

After updating target PR #1, Claude Code shall create the durable reply:

`communication/missions/SB-OPS-PROD-SYNC-1.0/claude-code/02-lovable-tooling-compatibility-correction-report.md`

Document identity:

`report2`

The report must include:

1. target branch and pre/post correction commit SHAs;
2. exact files changed;
3. exact `package.json` dependency/tooling correction;
4. `bun.lock` reconciliation method;
5. frozen-install result;
6. build result;
7. lint result and whether any finding is newly introduced;
8. `git diff --check` result;
9. production Supabase preservation result;
10. `.lovable/**` and environment preservation result;
11. confirmation that target PR #1 was updated but not merged;
12. any remaining genuine blocker.

Claude Code shall also update the mission `README.md`, `handover-log.md`, and `decision-log.md` through a separate canonical communication branch/PR, following the active AI Communication and Handover Protocol.

End `report2` with exactly one:

`PASS — LOVABLE TOOLING COMPATIBILITY CORRECTION READY FOR REVIEW`

or

`BLOCKED — LOVABLE TOOLING COMPATIBILITY REQUIRES MISSION CONTROL DECISION`

or

`FAIL — LOVABLE TOOLING COMPATIBILITY CORRECTION FAILED`

## 11. Stop conditions

Stop and report if:

- restoring `2.13.1` causes a real build incompatibility that cannot be resolved without broader application/runtime redesign;
- the correction requires Supabase, Lovable publication, AWS, or domain mutation;
- a tracked secret is encountered;
- target branch contains unrelated new changes;
- a merge/rebase conflict occurs;
- exact dependency authority cannot be established from the target baseline and synchronized runtime.

Ordinary dependency reconciliation work is engineering work and should be completed within this instruction.

---

**Mission Control boundary:** preserve the intended new Lovable production workspace's tooling compatibility, retain the completed SB-P-1.10/SB-P-1.11 runtime synchronization, and keep this correction narrow.