# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-DEP-2 — CANONICAL `bun.lock` INTEGRITY REMEDIATION

**Mission ID:** SB-P-1.11-DEP-2

**Mission Name:** Canonical `bun.lock` Integrity Remediation

**Reporting Room:** 02_Claude_Engineering

**Mission Status:** AUTHORIZED AFTER HUMAN MERGE

**Authorized By:** Mission Control

---

# Mission Objective

Apply the narrow dependency-integrity correction established by `communication/live/report1.50.md`.

This mission authorizes one repository correction only:

> Regenerate `bun.lock` from the current canonical `package.json` so the stale root dependency entry for `@lovable.dev/cloud-auth-js@^1.1.2` is removed and frozen-lockfile installation becomes reproducible again.

No application feature work is authorized.

No frontend catalog implementation is authorized.

No Supabase, environment, deployment, or production change is authorized.

---

# Governing Evidence

Execute according to:

- `communication/live/instruction1.47.md`
- `communication/live/report1.50.md`
- current canonical `main`
- existing repository quality gates and pre-commit controls

`report1.50.md` established that:

- `@lovable.dev/cloud-auth-js` was deliberately removed from `package.json` during the accepted `SB-MIG-1.2F` cutover;
- its sole source consumer was also removed;
- `bun.lock` alone retained stale root-dependency metadata;
- a clean isolated regeneration produced an exact three-line removal in `bun.lock` only;
- after that correction, frozen install succeeded;
- normal development startup succeeded;
- production build succeeded;
- the full test suite passed;
- the previously suspected Zod `.prefault()` issue did not reproduce and requires no change.

---

# Authorized Change

Exactly one tracked file may change:

```text
bun.lock
```

The intended correction is the minimal lockfile reconciliation identified in `report1.50.md`.

Expected semantic effect:

- remove stale root dependency declaration for `@lovable.dev/cloud-auth-js@^1.1.2`;
- remove its corresponding stale package-resolution entry;
- preserve every other resolved package and version.

The expected diff from the investigation is exactly three removed lines.

If regeneration produces any additional dependency movement, version change, package addition, or unrelated lockfile change, STOP and report before committing.

---

# Required Execution Procedure

## 1. Start from current canonical `main`

Pull the latest `main` after this authorization PR is human-merged.

Confirm:

- clean working tree;
- this instruction is present on `main`;
- `communication/live/report1.50.md` is present on `main`;
- `.env` remains bound to the approved Smart Business runtime backend;
- `supabase/config.toml` remains unchanged.

## 2. Create a dedicated mission branch

Create a new branch for this remediation.

Do not work directly on `main`.

## 3. Regenerate `bun.lock`

Use the repository's current canonical `package.json` as-is.

Run the minimal Bun lockfile reconciliation required to regenerate `bun.lock`.

Do not edit `package.json`.

Do not add or remove dependencies manually.

Do not upgrade packages.

## 4. Inspect the diff before verification

The tracked diff must be limited to:

```text
bun.lock
```

The resulting `bun.lock` diff must match the narrow correction established by `report1.50.md`.

Expected:

- exactly three removed lines;
- no added lines;
- no package-version movement;
- no unrelated resolution changes.

If the diff differs materially from this expectation, STOP.

---

# Mandatory Verification

After the lockfile correction, complete all checks below before commit.

## A. Frozen-lockfile reproducibility

Run:

```text
bun install --frozen-lockfile
```

Required result:

- exit code 0;
- no lockfile changes;
- no manifest changes.

## B. Development startup

Run the normal development startup sufficiently to verify the application reaches its ready state without dependency or Zod/`prefault` failure.

Do not modify source to make it pass.

## C. Production build

Run the normal production build.

Required result:

- exit code 0;
- client/SSR/server build completes according to the current repository configuration;
- no Zod/`prefault` failure.

## D. Test suite

Run the repository test suite using the approved isolated test environment only.

Do not use production credentials for tests.

Required result:

- all currently expected test files pass;
- all currently expected tests pass.

If local test-only credentials are required and already provisioned through the approved ignored local mechanism, they may be used without exposing or committing them.

## E. Scope integrity

Confirm before commit:

- `git diff --name-only` shows only `bun.lock` for the remediation patch;
- `.env` is unchanged;
- `package.json` is unchanged;
- `package-lock.json` is unchanged;
- `supabase/config.toml` is unchanged;
- no `src/**` file changed;
- no `supabase/migrations/**` file changed;
- no Lovable project binding changed;
- no database operation occurred.

---

# Explicitly Prohibited

Do not:

- restore `@lovable.dev/cloud-auth-js` to `package.json`;
- change Zod versions;
- change TanStack versions;
- change `@lovable.dev/vite-tanstack-config`;
- broadly update dependencies;
- regenerate or modify `package-lock.json`;
- modify `.env`;
- modify Supabase URLs, keys, project refs, or bindings;
- modify `supabase/config.toml`;
- modify application source;
- modify any database schema;
- run production database writes;
- begin `SB-P-1.11-UI-1` frontend implementation;
- publish or deploy through Lovable;
- self-approve or self-merge the completion PR.

---

# Stop Conditions

STOP before commit if any of the following occurs:

- any file other than `bun.lock` changes as part of the remediation patch;
- the `bun.lock` diff is broader than the narrow correction established in `report1.50.md`;
- any package version moves unexpectedly;
- frozen install still fails;
- dev startup fails because of a dependency issue;
- production build fails;
- Zod/`prefault` failure reproduces;
- test failures indicate a dependency regression;
- Supabase/environment configuration differs from canonical state;
- any additional remediation appears necessary.

Do not expand scope automatically.

---

# Completion Deliverable

Create:

```text
communication/live/report1.51.md
```

The report must include:

1. starting `main` commit;
2. mission branch name;
3. exact `bun.lock` diff summary;
4. confirmation that only `bun.lock` changed in the remediation patch;
5. frozen-lockfile install result;
6. dev startup result;
7. production build result;
8. test-suite result;
9. explicit Zod/`prefault` result;
10. confirmation that `.env`, `package.json`, `package-lock.json`, `supabase/config.toml`, application source, and migrations were unchanged;
11. any warning or anomaly;
12. final verdict: `PASSED` or `STOPPED`.

Commit the remediation patch and `report1.51.md` on the mission branch, push the branch, open a completion PR, and stop.

Do not self-merge.

---

# Success Condition

This mission is successful only when the repository has a canonical `package.json` / `bun.lock` pair that supports frozen installation without changing product behavior or dependency versions.

A successful mission removes the dependency-integrity blocker only.

It does not by itself authorize the Catalog Frontend Implementation mission or Lovable publish/deploy.

---

# Next Logical Step

After the completion PR is human-reviewed and merged, perform a fresh Lovable clean-environment verification from the corrected canonical `main`.

Only if that verification passes should Mission Control decide whether to restart `SB-P-1.11-UI-1`.
