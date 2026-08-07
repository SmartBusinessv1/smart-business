# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-LOV-SYNC-2 — Controlled One-Way Canonical Bundle Transfer & Equivalence Verification

**Mission ID:** SB-P-1.11-LOV-SYNC-2  
**Mission Name:** Controlled One-Way Canonical Bundle Transfer & Equivalence Verification  
**Reporting Room:** 02_Claude_Engineering  
**Mission Status:** ACTIVE AFTER HUMAN MERGE  
**Authorized By:** Mission Control

---

# Mission Objective

Establish a safe, non-native synchronization path from the canonical Smart Business GitHub repository into the newly verified external-Supabase-first Lovable project without connecting Lovable's native Git integration.

The objective is to make the verified Lovable project an execution mirror of one exact authorized GitHub snapshot while preserving GitHub as the sole canonical source of application truth.

This mission exists because `SB-P-1.11-LOV-SYNC-1` established that Lovable's documented native Git flow cannot import an existing repository and instead creates a new repository. That path is rejected for Smart Business.

This mission therefore authorizes a controlled one-way source transfer using a deterministic canonical bundle, a manifest, and post-transfer equivalence verification.

---

# Governing Sources

Execute according to the currently approved Smart Business governance and implementation sources, including:

- Lighthouse Constitution;
- Smart Business Master System Manifesto;
- Supabase Architecture Framework;
- Lovable Build Framework;
- API / WhatsApp / OpenAI Framework where relevant;
- AI Behaviour and Model Training Framework;
- Product Execution and Release Framework;
- Smart Business Product Truth Map;
- Master Roadmap Command;
- AI Operations Manual;
- the locked SB-P-1.11 catalog architecture and already-approved engineering artifacts;
- `communication/live/report1.58.md`, the completion report for `SB-P-1.11-LOV-SYNC-1`;
- the current canonical GitHub `main` branch.

If any legacy wording conflicts with the current approved source files or repository state, use the current approved sources and record the discrepancy.

---

# Locked Identities

Canonical repository:

`SmartBusinessv1/smart-business`

Authorization baseline at mission issuance:

`510cfe8f8f888c7f6b3b085c7c9625553450f661`

Target Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Approved production/runtime Supabase project ref:

`gysgzasfcjvtrgaigfyn`

Dedicated test Supabase project ref:

`drravyyauixltoihzmwo`

Legacy/non-authoritative Lovable Cloud backend ref:

`wwgqnshcgbukqczqblsm`

The test project must not become runtime.

The legacy Lovable Cloud backend must not be introduced into the target project.

---

# Architectural Principle

GitHub remains canonical.

The Lovable project is an execution workspace only.

The synchronization direction is strictly:

```text
Approved GitHub snapshot
        ↓
Canonical transfer bundle
        ↓
Verified Lovable project
```

No reverse synchronization is authorized.

No Lovable-native Git connection is authorized.

No new repository is authorized.

No Lovable-generated source may become canonical merely because it builds or runs.

---

# Mission Classification

## Build Now

- freeze one exact GitHub source snapshot;
- create deterministic transfer material and manifest;
- perform a mandatory Lovable Plan Mode review;
- if and only if the Plan Mode safety gate passes, perform one bounded one-way source transfer;
- verify file/source equivalence;
- verify build/runtime integrity;
- verify backend and production integrity;
- document any unavoidable Lovable-only platform metadata exception set;
- produce the completion report.

## Build Later

- automate canonical bundle generation;
- automate manifest comparison;
- automate repeatable future Lovable refreshes;
- formalize any approved Lovable platform-metadata exception set.

## Add-on

None.

## Separate Product

None.

## Reject

- native Lovable Git connection;
- creation of another GitHub repository;
- bidirectional synchronization;
- Lovable-to-GitHub source precedence;
- manual ad-hoc file copying without a manifest;
- prose-only regeneration of the Smart Business app;
- dependency modernization during synchronization;
- Lovable Cloud enablement;
- test Supabase becoming runtime;
- production schema/data mutation;
- frontend feature implementation during this mission;
- publish or deploy.

---

# Critical Safety Rule — Plan Mode Gate

**This is a hard gate.**

No source-transfer mutation may occur until Lovable has first been given the transfer plan in **Plan Mode** and has responded with a plan that satisfies every condition below.

The Plan Mode interaction must be non-mutating.

The Plan Mode request must instruct Lovable to inspect the proposed transfer approach and explicitly confirm that it will:

1. use only the supplied canonical source material;
2. treat the supplied GitHub snapshot as authoritative;
3. not connect GitHub;
4. not create a repository;
5. not enable Lovable Cloud;
6. not create or apply database migrations;
7. not alter the external Supabase binding;
8. not modernize, upgrade, or substitute dependencies;
9. not rewrite supplied source for style, cleanup, optimization, or template conformity;
10. not publish or deploy;
11. not begin `SB-P-1.11-UI-1`;
12. stop if exact file preservation cannot be guaranteed.

If the Lovable Plan Mode response proposes regeneration, modernization, dependency replacement, migration creation, Cloud enablement, repository creation, GitHub connection, source reconciliation, or any other behavior that weakens exact-source preservation, the mission must stop.

**No implementation-mode message may be sent until this gate passes.**

---

# Phase 0 — Repository and Environment Preflight

Before creating transfer material:

1. Pull/fetch the latest canonical `main`.
2. Record the exact source commit SHA to be transferred.
3. Confirm the working tree is clean.
4. Confirm `communication/live/report1.58.md` is present and records the STOPPED verdict from `SB-P-1.11-LOV-SYNC-1`.
5. Reconfirm the target Lovable project identity.
6. Reconfirm the target Lovable project's backend is `gysgzasfcjvtrgaigfyn` using read-only evidence.
7. Confirm no Lovable Cloud footprint is present in the target project.
8. Confirm the original Lovable project remains untouched by this mission.
9. Capture the current production baseline using read-only checks.
10. Confirm no unexpected canonical repository changes have occurred since the mission was authorized.

If the repository or target-project state is materially different from the expected baseline, stop and report before transfer preparation.

---

# Phase 1 — Freeze Canonical Source Snapshot

Use one exact GitHub commit SHA as the source of truth for this synchronization run.

Do not use a moving `main` reference after the snapshot is frozen.

Record:

- source repository;
- exact commit SHA;
- commit timestamp;
- commit title/message summary;
- file count included in transfer;
- file count excluded from transfer;
- exclusion rules.

The snapshot must remain fixed throughout the mission.

If `main` advances during execution, do not silently update the snapshot. Complete or stop against the frozen SHA and record the newer `main` separately.

---

# Phase 2 — Build Deterministic Canonical Transfer Package

Create a deterministic transfer package from the frozen GitHub snapshot.

The package must contain the application source and all repository-controlled files necessary for Lovable to represent the canonical application source accurately.

At minimum, evaluate and include where present:

- `src/**`;
- `public/**`;
- `package.json`;
- `bun.lock`;
- `tsconfig*.json`;
- Vite / TanStack / build configuration;
- Tailwind / PostCSS configuration;
- route/auth configuration;
- Supabase client files;
- `supabase/config.toml`;
- repository-controlled non-secret environment/config templates needed to preserve runtime assumptions;
- relevant application assets;
- any additional source/config files required for frozen install and build.

Do not include:

- `.git/**`;
- local IDE state;
- OS metadata;
- caches;
- `node_modules`;
- local build output;
- secrets not already appropriate for the Lovable project;
- unrelated communication/history documents unless needed for execution.

Do not rewrite file contents merely to make them convenient for transfer.

---

# Phase 3 — Generate Transfer Manifest

Generate a machine-readable manifest for every transferred file.

For each file record at least:

- repository-relative path;
- byte size;
- SHA-256 digest;
- source commit SHA.

Also record the overall transfer-set file count.

The manifest is the verification authority for post-transfer equivalence.

The transfer package and manifest are temporary execution artifacts unless otherwise authorized. Do not add generated archives or bulky transfer artifacts to canonical Git history unless the mission explicitly requires a small textual evidence artifact.

---

# Phase 4 — Pre-Transfer Lovable Inventory

Before any mutation to the target Lovable project:

1. list all target-project files;
2. record the target project's current Lovable commit SHA if available;
3. record starter-shell files that are expected to be replaced;
4. record any platform-owned metadata files that appear outside the canonical transfer set;
5. re-read the target `.env`/Supabase configuration needed to prove backend identity;
6. capture evidence that the project remains external-Supabase-first and non-Cloud.

Do not repair or normalize divergence during this inventory phase.

---

# Phase 5 — Mandatory Lovable Plan Mode Gate

Upload/attach the canonical transfer material as required by the available Lovable file mechanism, but do not authorize implementation yet.

Then send a **Plan Mode** message to the target project.

The Plan Mode message must clearly state:

- this is a canonical-source synchronization mission, not feature development;
- GitHub is authoritative;
- the supplied frozen source snapshot must be preserved exactly wherever technically possible;
- the starter shell is disposable;
- no dependency modernization is authorized;
- no database, migration, Cloud, GitHub, publish, or deploy action is authorized;
- the agent must identify any file it cannot preserve exactly before mutation;
- the agent must identify any platform-generated file it believes must remain different;
- the agent must explain the exact planned file replacement behavior;
- the agent must confirm that no source-transfer write has yet occurred.

## Required Plan Mode PASS Conditions

The Plan Mode gate passes only if the response is consistent with all of the following:

- canonical source is treated as authoritative;
- the proposed action is one-way into the target Lovable project;
- no GitHub connection/repository creation is proposed;
- no Lovable Cloud enablement is proposed;
- no Supabase backend switch is proposed;
- no migrations or production writes are proposed;
- no dependency upgrades/substitutions are proposed;
- no feature implementation is proposed;
- the plan is bounded to source synchronization and verification;
- any unavoidable Lovable-managed exceptions are explicitly identified before mutation.

## Mandatory Stop Conditions

Stop immediately if Plan Mode indicates that Lovable must:

- regenerate files from prose rather than apply supplied source;
- rewrite application files automatically with no way to verify exactness;
- force a dependency/toolchain upgrade as a prerequisite;
- enable Lovable Cloud;
- change the Supabase project;
- apply migrations;
- create/connect a GitHub repository;
- publish or deploy;
- use the starter shell as source precedence;
- perform a broad "merge" or "reconciliation" with ambiguous precedence.

If stopped here, do not send an implementation-mode message.

---

# Phase 6 — Controlled One-Way Source Transfer

Execute this phase only after the Plan Mode gate has passed.

Perform exactly one bounded source-transfer operation into the target Lovable project.

The implementation instruction must require Lovable to:

1. replace the disposable starter-shell application source with the supplied canonical source snapshot;
2. preserve supplied file contents exactly wherever technically possible;
3. not invent application logic;
4. not modernize dependencies;
5. not create new migrations;
6. not change Supabase project identity;
7. not enable Lovable Cloud;
8. not connect GitHub;
9. not publish or deploy;
10. stop after the source-transfer edit completes.

Do not request bug fixing or feature implementation in the same message.

---

# Phase 7 — Post-Transfer File Equivalence Verification

After Lovable completes the bounded transfer, verify the resulting target-project file set against the manifest.

Perform exact comparison where technically available.

At minimum, verify byte-level or content-hash equivalence for critical files, including where present:

- `package.json`;
- `bun.lock`;
- `supabase/config.toml`;
- Supabase client files;
- auth files;
- route configuration;
- application entrypoints;
- build configuration;
- source files involved in the current product shell;
- SB-P-1.11-related source already present in canonical GitHub.

Classify every difference into exactly one of these categories:

### A — Exact Match

Canonical and Lovable file are equivalent.

### B — Approved Platform Metadata Exception

A Lovable-owned/platform-generated file that is outside the canonical application source and does not alter product/runtime truth.

### C — Unauthorized Drift

Any canonical application/config/dependency file whose content differs without prior explicit authorization.

A Category C difference causes mission failure unless the mission is explicitly stopped for human review before any correction.

Do not silently normalize or accept drift because the application builds.

---

# Phase 8 — Frozen Install, Build, and Existing Test Verification

Only after file-equivalence verification passes:

1. perform the canonical frozen install command appropriate to the repository;
2. run the canonical build;
3. run existing authorized automated tests;
4. run a non-mutating preview/runtime smoke check if available.

Do not alter dependencies to make the build pass.

If build failure is caused by a Lovable platform/toolchain mismatch, record the mismatch and stop. Dependency modernization requires separate authorization.

---

# Phase 9 — Backend and Production Integrity Recheck

After transfer/build verification, confirm read-only that:

- runtime backend remains `gysgzasfcjvtrgaigfyn`;
- `drravyyauixltoihzmwo` is not runtime;
- `wwgqnshcgbukqczqblsm` is absent from target runtime configuration;
- Lovable Cloud remains disabled/not provisioned for the target project;
- no new database migration was applied;
- production migration count is unchanged from the preflight baseline;
- production public table/function counts are unchanged unless independently authorized outside this mission;
- no production data rows were introduced by the synchronization activity;
- no new secrets or service-role exposure was introduced.

No production behavioral write test is authorized by this mission.

---

# Phase 10 — Canonical GitHub Integrity Recheck

Confirm that this Lovable synchronization did not mutate canonical application source.

Expected GitHub changes from this mission are limited to authorized mission documentation/evidence PRs created through the normal human-reviewed process.

Confirm:

- no Lovable Git connection exists;
- no Lovable-created repository exists for this target project;
- no Lovable-generated application commit was pushed to canonical `main`;
- no source PR was automatically created by Lovable;
- current canonical `main` is traceable and reviewable.

---

# Phase 11 — Lovable Platform Exception Set

If Lovable necessarily retains platform-managed files that are not part of canonical GitHub source, document them explicitly.

For each exception record:

- file/path or platform object;
- why it exists;
- whether it affects runtime behavior;
- whether it can alter dependencies;
- whether it can alter backend identity;
- whether it is safe to ignore during future source-equivalence checks.

The exception set must remain minimal.

Do not classify ordinary application-source drift as platform metadata.

---

# Phase 12 — Decision Gate for SB-P-1.11-UI-1

`SB-P-1.11-UI-1` may resume only if this mission receives a PASS.

## PASS Requirements

All of the following must be true:

1. one exact GitHub snapshot was frozen and identified;
2. deterministic transfer material and manifest were produced;
3. Plan Mode gate passed before mutation;
4. one-way transfer completed without GitHub connection;
5. canonical application source is equivalent in Lovable, subject only to explicitly documented harmless platform metadata exceptions;
6. dependency files remain canonical;
7. build/tests pass without unauthorized modernization;
8. runtime backend remains `gysgzasfcjvtrgaigfyn`;
9. Lovable Cloud remains absent;
10. production remains unchanged;
11. canonical GitHub source remains untouched by Lovable;
12. no publish/deploy occurred.

If any PASS condition is not met, `SB-P-1.11-UI-1` remains on hold.

---

# Explicit Non-Goals

This mission does not authorize:

- catalog frontend implementation;
- visual redesign;
- auth redesign;
- dependency upgrades;
- package-manager changes;
- migration creation;
- database writes;
- production testing that writes data;
- WhatsApp work;
- voice/photo work;
- employee permissions work;
- image upload work;
- scheduling;
- import tooling;
- POS work;
- publish/deploy;
- domain changes;
- deletion or modification of the original Lovable project.

---

# Evidence Requirements

The completion report must include sufficient evidence to independently review:

- source GitHub commit SHA;
- manifest file count;
- exclusion rules;
- target Lovable project ID;
- target Lovable pre-transfer commit SHA if available;
- Plan Mode request summary;
- Plan Mode response summary and PASS/STOP determination;
- implementation message summary if Plan Mode passed;
- post-transfer Lovable commit SHA if available;
- equivalence comparison results;
- all approved platform metadata exceptions;
- frozen install/build/test results;
- backend identity verification;
- production pre/post baseline comparison;
- GitHub integrity recheck;
- confirmation that no publish/deploy occurred.

Do not claim evidence that was not actually observed.

---

# Required Completion Report

Create:

`communication/live/report1.59.md`

Use `report1.59.md` because `report1.58.md` is already occupied by the completed `SB-P-1.11-LOV-SYNC-1` report.

The report must end with one of these verdicts:

### PASS

`PASS — CONTROLLED ONE-WAY CANONICAL SOURCE TRANSFER VERIFIED; SB-P-1.11-UI-1 MAY RESUME UNDER EXISTING AUTHORIZATION.`

### STOPPED

`STOPPED — PLAN MODE OR TRANSFER SAFETY GATE NOT SATISFIED; NO FURTHER LOVABLE SOURCE MUTATION AUTHORIZED.`

### FAIL

`FAIL — CANONICAL EQUIVALENCE OR ENVIRONMENT INTEGRITY NOT PRESERVED; SB-P-1.11-UI-1 REMAINS ON HOLD.`

---

# Repository Handling

Use normal repository-first engineering practice.

For the completion report:

1. create a mission branch from the then-current canonical `main`;
2. add only the required report/evidence documentation unless a separate authorized repository artifact is necessary;
3. run the Markdown Quality Gate;
4. run repository pre-commit validation;
5. open a PR;
6. stop for human review;
7. do not self-merge.

Generated transfer bundles, archives, and temporary manifests used only for execution should not be committed to Git unless a small textual manifest/evidence file is specifically justified and safe.

---

# Mandatory Stop Conditions

Stop the mission immediately if any of the following occurs:

- Plan Mode cannot guarantee a bounded one-way application of supplied source;
- Lovable proposes GitHub connection or repository creation;
- Lovable proposes Cloud enablement;
- Lovable proposes changing Supabase backend;
- Lovable proposes migrations or production writes;
- Lovable proposes dependency modernization;
- the transfer cannot preserve critical canonical files;
- backend identity becomes ambiguous;
- production baseline changes unexpectedly;
- Lovable writes to canonical GitHub source;
- an unexpected publish/deploy action is requested;
- the original Lovable project is affected;
- evidence is insufficient to prove equivalence.

Stopping is a successful safety behavior when a gate is not proven.

---

# Final Operating Rule

Do not treat a successful Lovable build as proof of synchronization.

Do not treat an agent statement such as "synced" or "updated" as proof of equivalence.

The authority chain is:

```text
Frozen GitHub commit
→ deterministic manifest
→ controlled one-way transfer
→ post-transfer file comparison
→ build/test verification
→ backend/production integrity verification
→ human-reviewed completion report
```

Only this evidence chain can release `SB-P-1.11-UI-1` from hold.

---

# Next Logical Step

After this instruction is human-reviewed and merged, execute Phase 0 through Phase 5 only first.

Do not perform the first source-transfer mutation until the mandatory Lovable Plan Mode gate has explicitly passed.
