# SMART BUSINESS MISSION CONTROL — MC-177

# SB-P-1.12 — Assurance Incident and Runtime Model Disposition

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Evidence source:** PR #714 / Stage 13 Assurance and Runtime Readiness Investigation  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Canonical verification

Mission Control verified PR #714 human-merged to:

`main@566b833b4dc25dd925fe638f4fde525624c32f64`

Canonical artifacts:

- `communication/missions/SB-P-1.12/claude-code/39-stage13-assurance-runtime-readiness-investigation.md`
  - blob `3e0a72cd61055e210e437da92449202181756237`
- `communication/live/report1.39.md`
  - blob `f229f9d516a74f1161c00b9782b7e0ca3398f9a0`

## 2. EV-01 disposition — GitHub Actions assurance incident

**EV-01 remains OPEN.**

Mission Control accepts the following current-state findings:

- both assurance workflows are present and active;
- repository Actions is enabled and allows actions;
- the credential-free Fast Gate is also affected;
- no GitHub Actions check-suite is created on affected PR/push heads after the observed boundary;
- historical Actions run IDs recorded in canonical evidence now return 404 while related check-suite/deployment records remain;
- repository event feed and PR search/read-model anomalies also persist;
- the most consistent explanation is a GitHub-side repository/platform failure, but a shared internal cause between incidents is not proven;
- the `smart-business-test` GitHub environment and three expected secret names are structurally evidenced, while the current secret values remain unverified.

Missing Actions evidence remains missing and is never a pass.

### 2.1 Routine incident check — binding operating rule

At every Mission Control checkpoint while EV-01 is OPEN, perform a read-only incident check covering:

1. exact current PR/main head workflow/check/status state;
2. repository workflow visibility/state;
3. GitHub Community Discussion #209242;
4. GitHub Community Discussion #209244;
5. any Founder-supplied GitHub Support response;
6. whether repository PR search/read-model behavior has recovered.

If discussion content cannot be read by current tooling, record that limitation rather than infer a response.

### 2.2 Founder escalation action

Founder is asked to:

- add the PR #714 evidence to GitHub Community Discussion #209242;
- cross-reference #209244;
- open a GitHub Support request if available for the account;
- re-check Actions minutes, spending limit and any account/repository Actions banner in the GitHub UI.

Key evidence to include:

- repository id `1287523579`;
- last observed working check-suite boundary at `ec0fc74d`;
- no check-suite creation from `d8077827` onward in the investigated history;
- 8 canonical historical run IDs returning 404 while older check/deployment records remain;
- empty repository event feed despite continuing merges;
- PR search returning zero while direct REST PR state remains available;
- both assurance workflows active and repository Actions enabled.

This is external escalation, not repository mutation.

### 2.3 EV-01 closure rule

EV-01 closes only when either:

A. on an exact checkpoint SHA, GitHub produces retrievable run objects and the full Fast Gate passes, followed by one separately authorized Full Assurance execution against `smart-business-test`; or

B. Mission Control separately authorizes and validates a governed substitute that meets the required technical assurance contract.

No substitute is authorized by MC-177.

## 3. EV-02 disposition — runtime model

**EV-02 remains OPEN.**

Mission Control selects **C-1 — local ephemeral application runtime bound only to `drravyyauixltoihzmwo / smart-business-test`** as the approved planning model for Stage 17 preparation.

This is a **use-change decision** from the earlier CI-only test-environment description:

> The approved isolated test project may also serve as the non-production application backend for SB-P-1.12 Stage 17 runtime verification, subject to the activation gates below.

This decision does not authorize application implementation, migration execution, or production use.

### 3.1 Required activation properties

Any later runtime activation must:

- use an exact canonical SHA;
- bind browser runtime only through `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`;
- bind server runtime through `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`;
- keep `SUPABASE_SERVICE_ROLE_KEY`, if a separately authorized server path requires it, server-side only and never under a `VITE_` name;
- exclude parser flows unless separately authorized;
- positively assert target ref `drravyyauixltoihzmwo`;
- reject any production ref/value containing `gysgzasfcjvtrgaigfyn`;
- use synthetic test identities/data only;
- remain local/ephemeral unless a future hosted-preview mission is separately approved.

## 4. Next authorized work package — runtime activation evidence only

Work package:

`SB-P-1.12-WP-LOCAL-RUNTIME-ACTIVATION-EVIDENCE`

Recipient: Supabase Backend Architecture specialist.

Purpose: determine whether the selected local runtime model can be safely activated, without activating it yet.

### 4.1 Authorized read-only evidence

For `drravyyauixltoihzmwo / smart-business-test`, collect where tooling permits:

- Auth site URL;
- allowed redirect URLs / redirect allowlist;
- enabled sign-in providers;
- email confirmation behavior/configuration visible to the provider;
- SMTP/custom-mail configuration presence as metadata only, with no secret values;
- any provider setting that would block password-based local verification;
- publishable-key availability state by metadata only, never expose key values in the report;
- whether a localhost redirect already exists.

Repository-side, confirm:

- exact application environment variable names;
- exact browser/server boundary;
- whether startup itself performs any database write;
- which Stage 17 flows can run without parser configuration;
- minimal synthetic fixture roles/data required for the locked runtime scenarios;
- a fixture cleanup/disposition plan consistent with test-only use.

### 4.2 Not authorized

- change Auth configuration;
- add redirect URLs;
- create users or fixtures;
- write test data;
- create local environment files containing values;
- start the application against the test backend;
- run Stage 17 scenarios;
- expose or copy secret values into Git/reports;
- deploy/host anything;
- mutate Lovable;
- mutate production;
- author/execute SQL or migrations.

If provider metadata cannot expose a required Auth field, report the gap and exact human/provider action needed.

## 5. Required output

Write only:

1. `communication/missions/SB-P-1.12/specialists/11-stage13-local-runtime-activation-evidence.md`
2. `communication/live/report1.40.md`

Report:

- exact provider target/status;
- Auth configuration facts observed;
- unavailable facts;
- whether localhost redirect mutation will be required;
- browser/server variable boundary;
- startup-write assessment;
- parser-exclusion assessment;
- minimal fixture matrix;
- fixture cleanup/disposition proposal;
- proposed EV-02 status;
- exact later mutations that would require authorization;
- PR/head/blobs and Actions state.

## 6. Git authority

**Repository:** `SmartBusinessv1/smart-business`  
**Branch:** `mission/SB-P-1.12-stage13-local-runtime-activation-evidence`  
**Authorized base:** canonical `main` after this MC-177 PR is human-merged and verified  
**Writable paths:** exactly the two report paths in Section 5  
**Permitted Git:** fetch, create branch, inspect, write exact two reports, commit, push, open one PR to `main`, report exact head/blobs  
**Prohibited Git:** force push, direct `main`, self-approval, self-merge

Authorization expires when the evidence PR is opened and reported, or 2026-10-04T23:59:59+05:30, whichever occurs first.

## 7. Migration / implementation boundary

Unchanged:

- EV-01 OPEN;
- EV-02 OPEN;
- EV-06 partial;
- EV-09 partial with 8 unresolved record classes;
- EV-18 OPEN;
- EV-21 partial;
- EV-22 identity deletion NOT AUTHORIZED;
- EV-28 final builder / Implementation Authorization OPEN;
- `SB-MIG-1.4` NON-EXECUTABLE;
- SQL/migration authoring NOT AUTHORIZED;
- application implementation NOT AUTHORIZED;
- production mutation NOT AUTHORIZED.
