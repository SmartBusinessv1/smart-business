# SMART BUSINESS MISSION CONTROL

# Instruction 1.13 — Narrow Second EIS Refinement

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Second EIS refinement

**Authorized By:** Mission Control

**Executing Actor:** Claude Code

**Status:** ACTIVE AFTER MERGE TO `main`

**Date:** 2026-08-05

---

## 1. Mission Objective

Refine the SB-P-1.11 Engineering Implementation Specification only to resolve the ten accepted engineering precision findings recorded in:

`communication/live/report1.12.md`

This is a narrow corrective refinement.

It is not a new architecture mission.

It does not reopen Product Truth, the locked Product Blueprint, Founder Decisions D-001–D-068, accepted sequencing, or findings already verified as resolved.

---

## 2. Preconditions

Before execution:

1. Pull and fast-forward synchronize the latest `origin/main`.
2. Confirm that this instruction exists on the synchronized `main` branch.
3. Confirm that `communication/live/report1.12.md` is present and unchanged.
4. Create a new protected mission branch from the synchronized `main` commit.
5. Record the synchronized base commit SHA in the completion report.

Do not execute this instruction from an unmerged authorization branch.

---

## 3. Governing Sources

Execute according to the approved authority order, including:

- Lighthouse Constitution;
- Smart Business Master System Manifesto;
- Smart Business Product Truth Map;
- Founder Product Decision Record for SB-P-1.11;
- locked SB-P-1.11 Product Blueprint, Sections 1–21;
- Founder Decisions D-001–D-068;
- approved mission sequencing;
- Supabase Architecture Framework;
- API, WhatsApp and OpenAI Framework;
- AI Behaviour and Model Training Framework;
- Product Execution and Release Framework;
- Mission Lifecycle and Delivery Framework;
- `communication/live/report1.10.md`;
- `communication/live/report1.11.md`;
- four specialist reports under `communication/live/report1.12-*.md`;
- `communication/live/report1.12.md`;
- this instruction.

Where wording appears inconsistent, preserve the higher-authority source and report the conflict. Do not create a new interpretation that changes Product Truth.

---

## 4. Authorized Files

Claude Code may modify only:

`docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`

Claude Code may create only:

`communication/live/report1.13.md`

No other file may be created, modified, renamed, moved, or deleted.

---

## 5. Protected Read-Only Sources

The following remain immutable:

- the locked Product Blueprint;
- the Founder Product Decision Record;
- Founder Decisions D-001–D-068;
- approved sequencing;
- all governance sources;
- all prior instructions and reports;
- application code;
- tests;
- SQL;
- migrations;
- RLS policies;
- RPC or database-function implementations;
- Supabase configuration;
- Lovable project files;
- prompts, webhooks and Edge Functions;
- infrastructure;
- deployment and production configuration.

---

## 6. Strict Refinement Scope

Resolve only MC-VRF-001 through MC-VRF-010 from `communication/live/report1.12.md`.

Previously verified findings must remain unchanged except for the smallest consistency edits directly required by one of these ten findings.

No additional feature, product capability, route, permission, role, workflow, integration, import type, conversational behavior, reporting feature, or automation may be introduced.

---

## 7. Required Refinement 1 — Executor Identity Model

Resolve `MC-VRF-001`.

The EIS must clearly distinguish:

- external runtime identity or service account;
- database login role, where required;
- `NOLOGIN` function-owner or privilege role;
- controlled function invocation or `SET ROLE` boundary, where applicable.

Required outcome:

- no `NOLOGIN` role is described as authenticating with credentials;
- credentials belong only to a valid login-capable runtime identity;
- privilege ownership and execution boundaries are explicit;
- service-role access does not become unrestricted merchant authority;
- all runtime authority remains business-bound and permission-checked.

---

## 8. Required Refinement 2 — Least-Privilege Command Authority

Resolve `MC-VRF-002`.

Replace any broad general-purpose catalog executor authority with the narrowest enforceable model.

The EIS must specify:

- command groups;
- exact table and operation authority required by each group;
- function ownership or execution grants;
- prohibition of unrestricted DML across protected catalog tables;
- safe `search_path` and function security requirements;
- revocation of unnecessary `PUBLIC` and authenticated execution rights;
- how temporary Owner-only sequencing remains protected.

Do not create a role that acts as universal merchant authority.

---

## 9. Required Refinement 3 — Implementable Scheduler Transactions

Resolve `MC-VRF-003`.

Choose and document one technically valid scheduler execution model.

The preferred safe model is:

- an external trusted worker claims a bounded set of due schedules;
- each schedule is executed through one command invocation and one database transaction;
- each row therefore succeeds or fails independently;
- claiming uses bounded locking and prevents duplicate processing;
- retries retain the same schedule identity and appropriate idempotency binding.

A different model may be used only when it truthfully supports the stated transaction semantics.

The EIS must define:

- claiming;
- lock ownership and expiry or recovery;
- batching;
- transaction boundary;
- retry behavior;
- partial failure;
- stale schedules;
- bounded lag;
- audit provenance;
- unknown outcome reconciliation.

Do not claim that an ordinary PostgreSQL function independently commits individual rows.

---

## 10. Required Refinement 4 — Rollback and Durable Evidence

Resolve `MC-VRF-004`.

The EIS must distinguish:

- business-state writes that roll back on command failure;
- successful idempotent outcome records committed atomically with successful business changes;
- definitive validation or authorization rejections returned to the caller;
- rejection evidence that is not durable unless stored through a separate technically valid mechanism;
- operational telemetry that may persist outside the business transaction;
- ambiguous post-invocation outcomes requiring same-key reconciliation.

Required outcome:

- no claim that a record survives the same transaction that fully rolled back;
- confirmation tokens are consumed only under technically coherent transaction rules;
- stale, rejected and successful outcomes are described truthfully;
- unknown outcomes remain distinct from confirmed failures.

---

## 11. Required Refinement 5 — Channel Deduplication to Command Idempotency

Resolve `MC-VRF-005`.

Define separate but linked identifiers for:

- inbound channel event deduplication;
- pending-action identity;
- preview or confirmation token;
- confirmation event identity;
- final protected-command idempotency key;
- correlation or request ID.

The final command must be cryptographically or deterministically bound to the exact pending action and confirmation event.

Duplicate delivery of the same inbound or confirmation event must:

- not create a new pending action;
- not create a new command attempt;
- not generate a fresh idempotency key;
- return or reconcile the previously recorded state safely.

---

## 12. Required Refinement 6 — Same-Actor Confirmation

Resolve `MC-VRF-006` using this mandatory safe default:

```text
Only the same verified actor who received and reviewed the pending-action
preview may confirm that action.
```

The EIS must require execution-time re-verification of:

- actor identity;
- business membership;
- action-specific permission;
- pending-action ownership;
- confirmation validity;
- current authoritative state.

A different actor must not confirm the action, even when otherwise authorized.

Delegated or alternate confirmation is outside this mission and requires separate Product Truth and permission authority.

---

## 13. Required Refinement 7 — Failure Classification

Resolve `MC-VRF-007`.

The EIS must define at least these stable categories:

### `PRE_COMMAND_PROCESSING_FAILED`

The protected command was not invoked. Examples include media download, transcription, OCR, model or interpretation failure before command submission.

Merchant-safe meaning:

`No catalog change was submitted.`

### `COMMAND_REJECTED`

The command returned a definitive terminal rejection such as validation, permission, stale state or idempotency conflict.

### `UNKNOWN_OUTCOME`

The command may have committed but its result was lost or could not be confirmed.

Required behavior:

- preserve the same idempotency key;
- retry the same command or use a read-only outcome lookup;
- do not claim that nothing changed before reconciliation.

### `CONFIRMED_SUCCESS`

The command completed and the authoritative result is known.

Only failures after protected-command invocation with ambiguous commit status may become `UNKNOWN_OUTCOME`.

---

## 14. Required Refinement 8 — Complete Audit Provenance

Resolve `MC-VRF-008`.

For each protected event or audit record, define where applicable:

- actor identity;
- actor type;
- business identity;
- channel;
- request or correlation ID;
- operation;
- permission or authority basis;
- pending-action or confirmation reference;
- idempotency reference;
- outcome;
- recorded time;
- effective time;
- system job or run identity for automated execution;
- source command or schedule identity.

The EIS must explicitly map each claimed audit property to a proposed field, linked record or durable source.

Do not claim evidence that the data model cannot store or derive reliably.

---

## 15. Required Refinement 9 — Server-Derived Outcome Scope

Resolve `MC-VRF-009`.

`get_catalog_command_outcome` or its equivalent must derive authoritative business scope server-side from:

- the authenticated dashboard identity; or
- the verified internal channel identity.

The caller may provide only the minimum lookup identifiers, such as operation and idempotency key.

The caller must not choose the authoritative business context.

Required security behavior:

- current membership and permission checks apply;
- cross-business guesses reveal no record existence;
- unauthorized, absent and cross-business results are indistinguishable where appropriate;
- financial or sensitive result fields remain permission-filtered.

---

## 16. Required Refinement 10 — Mandatory File Scanning

Resolve `MC-VRF-010`.

Define an explicit server-side file-purpose policy.

For catalog imports and every other scan-required purpose, linking, parsing, previewing or applying the file is allowed only when:

```text
scan_status = clean
```

`not_required` may be used only for an explicitly approved purpose where scanning is genuinely unnecessary.

The EIS must specify:

- purpose classification;
- allowed scan states by purpose;
- server-side enforcement point;
- quarantine and rejection behavior;
- rescan or replacement behavior;
- retention and cleanup;
- business binding;
- audit provenance.

Client-supplied purpose or scan status must never be treated as authoritative.

---

## 17. Findings That Must Not Be Reopened

Do not redesign or materially alter the already verified solutions for:

- scheduled-price state and immutable history;
- one-pending-schedule enforcement;
- authenticated direct-DML denial;
- action-specific Manager permissions;
- Employee default denial of owner financial intelligence;
- D-068 server-authoritative preview and compare-and-commit;
- stale-state re-preview and fresh confirmation;
- idempotency lookup before mutable-state checks;
- same-key unknown-outcome reconciliation;
- D-047 tenure interpretation;
- protected cost and margin reads;
- import formula-injection and resource limits;
- frontend duplicate submission and reconciliation;
- multilingual uncertainty;
- accessibility and stable selectors;
- route and navigation gating;
- tax pricing-mode command invariant;
- deletion eligibility;
- temporary Owner-only sequencing.

A narrow wording correction is permitted only when necessary to make one of MC-VRF-001 through MC-VRF-010 internally consistent.

---

## 18. D-047 Locked Engineering Interpretation

The following interpretation is now resolved and must be preserved:

```text
Any authoritative inventory movement recorded during the current
product–inventory link tenure counts as linked stock-event history.

Inventory movements recorded before the current link tenure do not count.
```

Do not reopen or escalate this interpretation.

---

## 19. Required Completion Report

Create:

`communication/live/report1.13.md`

The report must include:

1. synchronized base commit SHA;
2. branch name;
3. final commit SHA;
4. pull-request number;
5. exact changed files;
6. confirmation that only the two authorized paths changed;
7. a traceability table for MC-VRF-001 through MC-VRF-010;
8. exact EIS sections changed for each finding;
9. before-and-after contract summary for each finding;
10. confirmation that previously verified findings were not reopened;
11. confirmation that D-001–D-068 and Product Truth remain unchanged;
12. validation performed;
13. unresolved conflicts or risks;
14. final author disposition.

Required author disposition:

- `SECOND REFINEMENT COMPLETE — READY FOR FOCUSED VERIFICATION`; or
- `BLOCKED — MISSION CONTROL ACTION REQUIRED`.

The author may not declare the EIS accepted, approved or locked.

---

## 20. Validation Requirements

Before opening the pull request:

- run `git status`;
- run `git diff --check`;
- verify the exact changed-file scope;
- run the repository Markdown quality gate on both authorized files;
- inspect the staged diff for secrets or credentials;
- verify the Blueprint and Founder Decision Record are absent from `git status`;
- verify no code, SQL, migration, RLS, Supabase, Lovable or infrastructure path changed;
- verify every MC-VRF finding has explicit EIS traceability;
- verify no new Product Truth or Founder decision was introduced.

---

## 21. Pull Request Requirements

Open one protected pull request to `main`.

The pull-request description must state:

- this is the narrowly scoped second EIS refinement;
- only MC-VRF-001 through MC-VRF-010 were addressed;
- exact changed files;
- Product Truth remains unchanged;
- D-001–D-068 remain unchanged;
- D-047 remains resolved;
- EIS status remains draft and not locked;
- implementation authority remains none;
- focused independent verification is still required.

The author must not approve or merge its own pull request.

---

## 22. Explicit Prohibitions

This instruction does not authorize:

- changes outside the two authorized paths;
- Product Blueprint changes;
- Founder Product Decision Record changes;
- new Founder decisions;
- Product Truth changes;
- scope expansion;
- EIS acceptance, approval or lock;
- implementation package creation;
- application code or test changes;
- SQL, migrations, RLS or RPC implementation;
- Supabase changes;
- Lovable changes;
- prompts, webhooks or Edge Function implementation;
- infrastructure or deployment changes;
- production changes;
- governance changes;
- self-approval or self-merge.

---

## 23. Mission Completion State

Successful completion of this instruction means only:

```text
SECOND EIS REFINEMENT: COMPLETE
MC-VRF-001 THROUGH MC-VRF-010: ADDRESSED IN DRAFT EIS
PRODUCT TRUTH CHANGE: NONE
D-001–D-068: UNCHANGED
D-047 INTERPRETATION: PRESERVED
FOCUSED VERIFICATION: REQUIRED
FOUNDER EIS REVIEW: NOT YET AUTHORIZED
EIS LOCK: NOT AUTHORIZED
IMPLEMENTATION PACKAGE: NOT AUTHORIZED
IMPLEMENTATION: NOT AUTHORIZED
```
