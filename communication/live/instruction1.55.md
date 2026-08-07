# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-LOV-SYNC-1 — Canonical-Source Synchronization into Verified Lovable Project

**Mission ID:** SB-P-1.11-LOV-SYNC-1  
**Mission Name:** Canonical-Source Synchronization into Verified Lovable Project  
**Mission Status:** ACTIVE AFTER HUMAN MERGE  
**Authorized By:** Mission Control  
**Execution Environment:** Claude Code + Lovable, with Founder interaction where Lovable UI requires it

---

# 1. Mission Objective

Synchronize the approved Smart Business GitHub canonical source into the newly created and verified external-Supabase-first Lovable project, then verify that the resulting Lovable workspace is canonical and safe before `SB-P-1.11-UI-1` may resume.

This mission exists to replace the fresh Lovable starter shell with the approved repository state without allowing the fresh shell, Lovable platform defaults, or any automatic backend behavior to overwrite canonical GitHub source or mutate production.

This mission is not frontend feature implementation.

---

# 2. Canonical Authorities and Locked Identities

Canonical repository:

`SmartBusinessv1/smart-business`

Canonical source baseline at mission authorization:

`e6a3372ad0adaef1256b369658f6954b8c66f2c3`

Target Lovable project:

- Project ID: `f3e992ec-06df-4d49-b157-b92ec064c078`
- Current display/project origin: `Business Shell Foundation`
- This is the new external-Supabase-first project created and verified in `report1.56.md`.

Approved runtime Supabase backend:

`gysgzasfcjvtrgaigfyn`

Dedicated test Supabase project:

`drravyyauixltoihzmwo`

The test project must not become the runtime backend.

Legacy/original Lovable project must remain untouched.

Legacy Lovable Cloud backend must remain non-authoritative and must not be introduced into the new project:

`wwgqnshcgbukqczqblsm`

---

# 3. Locked Source-of-Truth Rule

GitHub `main` is the canonical source.

The initial synchronization direction must be:

**GitHub canonical source → new Lovable project**

The fresh Lovable shell is not authoritative.

Do not permit any initial sync mechanism that can first push, merge, replace, or reconcile the fresh Lovable starter shell into canonical GitHub `main`.

No Lovable-generated starter file may overwrite canonical repository content merely because it is newer in the new workspace.

---

# 4. Mandatory Phase 0 — Fresh Preflight

Before any synchronization action:

1. Pull/fetch latest GitHub `main` and record the exact SHA.
2. Confirm `report1.56.md` is present and records PASS for the external-Supabase-first project.
3. Confirm the target Lovable project ID exactly matches `f3e992ec-06df-4d49-b157-b92ec064c078`.
4. Confirm its backend still resolves to `gysgzasfcjvtrgaigfyn` using evidence stronger than the visible project label.
5. Confirm no Lovable Cloud backend is active in the new project.
6. Confirm the original Lovable project remains separate and untouched.
7. Capture a read-only production baseline sufficient to detect accidental backend mutation.
8. Record the new Lovable project’s current source/dependency state before synchronization.

If any identity or backend check fails, STOP.

---

# 5. Mandatory Phase 1 — Synchronization-Path Safety Gate

Before connecting GitHub or transferring canonical source, determine the exact synchronization mechanism available for this Lovable project.

A synchronization path is authorized only if it can be proven to satisfy all of the following before execution:

- canonical GitHub source is the initial authority;
- the fresh Lovable shell cannot overwrite or push into `main` during initial binding;
- no automatic merge of fresh starter files into canonical source occurs;
- no new GitHub repository is substituted for `SmartBusinessv1/smart-business`;
- no production database migration/schema/data operation is coupled to source synchronization;
- no Lovable Cloud provisioning is coupled to source synchronization;
- rollback or stop is possible before any canonical GitHub mutation if an unexpected reconciliation prompt appears.

Preferred safe mechanisms, in order:

1. a documented/import flow that explicitly imports or pulls the existing canonical repository into the new Lovable project;
2. a controlled existing-repository connection flow with explicit source-direction evidence proving GitHub → Lovable initial synchronization;
3. another deterministic source-transfer mechanism that preserves the canonical repository byte-for-byte and does not create a second source of truth.

Do not assume a generic “Connect GitHub” action is safe.

If the available Lovable flow only offers creating a new repository, pushing the current Lovable shell first, bidirectional reconciliation with unclear precedence, or any other ambiguous initial-sync behavior, STOP and document the blocker. Do not experiment against canonical `main` to discover precedence.

---

# 6. Founder Interaction Boundary

If Lovable requires a human UI action to authorize GitHub or select a repository, Claude Code must stop immediately before that action and provide the Founder with exact ordered click instructions.

The Founder may proceed only when the preceding safety gate has passed.

If any screen displays unexpected wording involving:

- create repository;
- overwrite;
- replace;
- merge;
- sync changes;
- push current project;
- import database;
- migrate database;
- enable Lovable Cloud;
- publish;
- deploy;

STOP and capture the exact screen before proceeding.

---

# 7. Authorized Synchronization

Only after Phase 1 passes, synchronize the latest approved GitHub `main` into the target Lovable project.

The synchronized source must correspond to the exact GitHub `main` SHA recorded immediately before execution, not merely the authorization-time SHA if `main` has advanced through approved merges.

The synchronization must not intentionally change canonical application behavior.

Do not perform cleanup, dependency modernization, formatting churn, refactors, feature implementation, or architecture changes during synchronization.

---

# 8. Mandatory Post-Synchronization Verification

After source synchronization and before any new Lovable prompt or frontend work, verify all of the following.

## 8.1 Canonical source integrity

- Lovable source corresponds to the synchronized GitHub `main` baseline.
- Tracked application files expected from canonical source are present.
- No fresh starter-shell file has replaced canonical content.
- No unauthorized commit was pushed to GitHub `main`.
- If Lovable creates a repository binding or sync metadata, document it separately from application source.

## 8.2 Runtime backend identity

Prove again that the target Lovable project still uses:

`gysgzasfcjvtrgaigfyn`

Verify through at least two independent project-level signals where available, such as runtime env/config and Supabase project configuration.

The following are failures:

- `wwgqnshcgbukqczqblsm` appears as runtime backend;
- `drravyyauixltoihzmwo` becomes runtime;
- a third backend is created or selected;
- Lovable Cloud becomes active/provisioned.

## 8.3 Production integrity

Compare production against the Phase 0 read-only baseline.

Synchronization must cause no unauthorized migration, schema change, table/function change, or data write.

## 8.4 Dependency and environment integrity

Compare at minimum:

- `.env` / applicable runtime environment configuration;
- `package.json`;
- `bun.lock`;
- `supabase/config.toml`;
- relevant Supabase client configuration;
- Lovable platform-managed dependency state.

Canonical GitHub versions remain authoritative for tracked source.

If Lovable automatically rewrites dependencies, lockfiles, env files, or toolchain configuration after source import, do not repair or accept the drift silently. Record the exact divergence and STOP unless the divergence is proven non-persistent and the workspace can be restored to canonical without backend/source risk.

## 8.5 Existing project preservation

Confirm the original Lovable project has not been altered by this mission.

---

# 9. Build Gate for SB-P-1.11-UI-1

`SB-P-1.11-UI-1` remains HOLD throughout this mission.

It may resume only if the final mission verdict is PASS and the completion report explicitly proves:

1. safe canonical-source synchronization completed;
2. target Lovable workspace is aligned with approved GitHub source;
3. approved external Supabase backend remains intact;
4. Lovable Cloud was not introduced;
5. production was not mutated;
6. no unresolved dependency/environment drift remains that could invalidate implementation verification.

A PASS does not itself authorize publish or deploy.

---

# 10. Explicitly Prohibited

This mission does not authorize:

- catalog frontend implementation;
- any `SB-P-1.11-UI-1` coding;
- feature additions;
- dependency upgrades or modernization;
- backend schema changes;
- production data writes;
- migration execution;
- creation of another Supabase project;
- changing runtime to the test project;
- enabling Lovable Cloud;
- deleting or modifying the original Lovable project;
- publish or deploy;
- domain changes;
- self-merging any GitHub PR.

---

# 11. Required Completion Report

Create:

`communication/live/report1.57.md`

The report must include:

- exact starting and ending GitHub `main` SHAs relevant to synchronization;
- target Lovable project identity;
- preflight results;
- exact synchronization mechanism used or blocker encountered;
- evidence that initial synchronization direction was canonical GitHub → Lovable;
- before/after source integrity findings;
- backend identity evidence;
- Lovable Cloud status;
- production before/after integrity comparison;
- dependency/environment comparison;
- original Lovable project preservation result;
- any human UI actions performed;
- any unexpected prompts/screens and how they were handled;
- explicit statement that no frontend implementation/publish/deploy occurred;
- final verdict.

Allowed final verdicts:

- **PASS — CANONICAL SOURCE SYNCHRONIZED AND VERIFIED; SB-P-1.11-UI-1 MAY RESUME UNDER ITS EXISTING AUTHORIZATION.**
- **STOPPED — SAFE SYNCHRONIZATION PATH NOT PROVEN.**
- **FAIL — SYNCHRONIZATION OR VERIFICATION INTEGRITY FAILURE.**

If STOPPED or FAIL, `SB-P-1.11-UI-1` remains on hold.

---

# 12. Quality and Repository Procedure

Run the approved Markdown Quality Gate and repository pre-commit validation before opening the completion-report PR.

Open a human-review PR for `report1.57.md` and stop.

Do not self-merge.

---

# Next Logical Step

After this instruction is human-reviewed and merged, execute Phase 0 and Phase 1 first. Do not connect GitHub or synchronize source until the initial source-direction and overwrite-prevention safety gate is proven.