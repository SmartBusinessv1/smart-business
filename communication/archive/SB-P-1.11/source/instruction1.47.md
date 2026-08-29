# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-DEP-1 — CANONICAL DEPENDENCY INTEGRITY INVESTIGATION

**Mission ID:** SB-P-1.11-DEP-1

**Mission Name:** Canonical Dependency Integrity Investigation

**Reporting Room:** 02_Claude_Engineering

**Mission Status:** ACTIVE AFTER HUMAN MERGE

**Authorized By:** Founder / Mission Control

**Repository:** `SmartBusinessv1/smart-business`

**Canonical Basis:** current merged `main`, including `a19ee8b887600cebfd7718df28a685b6987ade6a`

---

## 1. Mission Objective

Investigate and explain the canonical dependency-integrity defect currently blocking reproducible Lovable/frontend execution for SB-P-1.11.

This mission is investigation and proposed-remediation work only.

It does not authorize a dependency patch, frontend implementation, production change, Supabase binding change, Lovable publish, or deployment.

---

## 2. Confirmed Trigger

Repository evidence has established that the canonical dependency manifest and lockfile are inconsistent.

At the accepted canonical state:

- `package.json` does not declare `@lovable.dev/cloud-auth-js`;
- `bun.lock` records `@lovable.dev/cloud-auth-js@^1.1.2` as a root dependency;
- `bun install --frozen-lockfile` therefore refuses to install because the lockfile would need to change.

The Lovable clean-environment verification stopped correctly when this condition was encountered.

A separate compatibility question also remains around the previously observed Zod `prefault` failure.

Do not assume that the lockfile defect and the Zod issue have the same root cause.

---

## 3. Canonical Architecture Boundary

The approved Smart Business runtime backend remains:

- Supabase project ref: `gysgzasfcjvtrgaigfyn`
- project name: `smart-business`
- organization: Team LIPS

The Lovable Cloud database is non-authoritative and must not be migrated or used as the canonical backend.

The dedicated test project `drravyyauixltoihzmwo` remains automated-test-only.

No action in this mission may change those boundaries.

---

## 4. Task A — Establish Dependency Provenance

Search repository history deeply and determine:

1. when `@lovable.dev/cloud-auth-js` entered the dependency graph;
2. when and why it was removed from `package.json`;
3. whether `bun.lock` should have been regenerated during that change;
4. whether any current source file still imports or requires `@lovable.dev/cloud-auth-js`;
5. whether the package is currently required at runtime, build time, test time, or not at all;
6. whether the mismatch originated from a previous Lovable platform change, migration work, or another repository operation.

Do not infer provenance from the current files alone when Git history can establish it.

---

## 5. Task B — Determine the Correct Canonical Relationship

Determine the technically correct minimal resolution.

Evaluate at least:

### Option A

Restore `@lovable.dev/cloud-auth-js` to `package.json`.

### Option B

Remove the stale root dependency from `bun.lock` through a legitimate lockfile regeneration based on the current canonical manifest.

### Option C

Another narrowly justified correction if repository evidence requires it.

Do not choose an option simply because it makes Lovable start.

The decision must reflect current source usage, intended architecture, and repository truth.

Prefer removing stale generated dependency metadata over adding an unused dependency merely to satisfy an old lockfile, if evidence supports that conclusion.

---

## 6. Task C — Investigate Zod Compatibility Separately

The canonical manifest declares `zod: ^3.24.2`.

A prior environment reported a failure involving `prefault is not a function`.

Investigate without changing Zod.

Determine:

1. the exact Zod version resolved by the canonical dependency graph;
2. the exact Zod requirements of relevant TanStack and Lovable tooling;
3. where `.prefault()` is called or expected;
4. whether canonical tooling at `@lovable.dev/vite-tanstack-config` `2.7.7` is compatible with the resolved Zod graph;
5. whether the prior error was caused instead by the unauthorized Lovable `2.9.0` tooling state;
6. whether any dependency correction beyond the lockfile integrity repair is actually necessary.

Do not upgrade Zod or any TanStack/Lovable package under this mission.

---

## 7. Task D — Isolated Reproducibility Investigation

Use an isolated clean checkout or worktree.

Do not rely on the Lovable project's existing `node_modules` tree.

Using only committed canonical repository files:

1. reproduce the frozen-lockfile failure;
2. determine the smallest change that restores manifest/lockfile consistency;
3. test that proposed corrected state with frozen/immutable lockfile behavior;
4. determine whether normal development startup can proceed;
5. determine whether the production build can proceed;
6. record the test-suite status;
7. record whether the Zod `prefault` failure reproduces.

This investigation may create temporary uncommitted files inside the isolated worktree as needed for analysis, but no proposed repository patch may be committed under this mission.

Do not use production credentials for isolated dependency testing.

---

## 8. Required Proposed Patch

Return a proposed minimal patch before any implementation authorization is considered.

The proposal must state:

- exact file or files that would change;
- exact dependency relationship being corrected;
- whether `package.json` changes;
- whether `bun.lock` changes;
- whether any source file changes;
- whether Zod changes;
- why each change is necessary;
- why no broader dependency update is required.

If the technically correct solution requires a broader architecture decision, recommend STOP FOR ARCHITECTURE DECISION instead of forcing a patch.

---

## 9. Required Verification Plan

For the proposed corrected state, define exact verification for:

- `bun install --frozen-lockfile` or equivalent immutable install succeeds;
- `package.json` and `bun.lock` agree;
- normal development startup succeeds;
- production build succeeds;
- test-suite status is recorded;
- Zod / `prefault` behavior is recorded;
- `.env` remains unchanged;
- runtime Supabase binding remains `gysgzasfcjvtrgaigfyn`;
- `supabase/config.toml` remains unchanged;
- no database migration occurs;
- no application behavior changes unexpectedly.

---

## 10. Explicit Prohibitions

This mission does not authorize:

- committing the proposed dependency correction;
- editing `.env`;
- changing any Supabase URL, key, project ref, or binding;
- changing `supabase/config.toml`;
- modifying production or test database schema;
- broad dependency upgrades;
- accepting Lovable-generated dependency upgrades as canonical;
- changing Zod without a separate authorization;
- changing TanStack versions without a separate authorization;
- changing Lovable tooling versions without a separate authorization;
- beginning SB-P-1.11 Catalog Frontend Implementation;
- Lovable publish or deployment;
- self-approval or self-merge.

---

## 11. Required Completion Report

Create:

`communication/live/report1.50.md`

The report must include:

1. root cause;
2. repository-history evidence;
3. whether `@lovable.dev/cloud-auth-js` is currently required;
4. exact Zod compatibility findings;
5. isolated reproducibility evidence;
6. minimal proposed correction;
7. exact files that would change;
8. verification procedure;
9. risks;
10. recommendation: `APPLY PATCH` or `STOP FOR ARCHITECTURE DECISION`;
11. next logical step.

Open the completion report as a pull request and stop.

Do not self-merge.

---

## 12. Current Mission State

```text
Production catalog backend: LIVE AND VERIFIED
Canonical backend binding: gysgzasfcjvtrgaigfyn
Lovable Cloud database: NON-AUTHORITATIVE
Lovable clean-base restoration: PASSED
Canonical dependency reproducibility: FAILED
SB-P-1.11 frontend implementation: HOLD
Lovable publish/deploy: PROHIBITED
```

---

## 13. Next Logical Step

Human-review and merge this instruction PR.

After merge, Claude Code shall pull the latest `main`, read `communication/live/instruction1.47.md`, execute only `SB-P-1.11-DEP-1`, create `communication/live/report1.50.md`, open the completion-report PR, and stop without committing any dependency remediation patch.