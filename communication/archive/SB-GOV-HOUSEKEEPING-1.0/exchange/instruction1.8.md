# Mission Control Instruction — SB-GOV-HOUSEKEEPING-1.8

- **Mission ID:** `SB-GOV-HOUSEKEEPING-1.8`
- **Mission:** GitHub Branch Protection and Compensating-Control Retirement
- **Issued by:** Mission Control
- **Assigned actor:** Codex
- **Repository:** `SmartBusinessv1/smart-business`
- **Protected branch:** `main`
- **Starting commit:** `f9fbaba4cf85d81f4396b27b4182bd75efd5007e`
- **Status:** AUTHORIZED FOR EXECUTION
- **Scope class:** Narrow governance and repository infrastructure
- **Live response:** `communication/live/report1.8.md`
- **Communication closure:** NOT AUTHORIZED

---

## 1. Mission Objective

Replace the temporary Founder-approved Phase 1 compensating control with technical GitHub protection for `main`, prove that the protection operates as intended, and update the repository's governance evidence.

The compensating control shall remain fully active unless and until technical branch protection is both:

1. configured on GitHub; and
2. independently verified through settings evidence and a safe enforcement test.

Configuration alone is not retirement evidence. A claimed, inferred, partially configured, unavailable, or untested rule does not satisfy this mission.

---

## 2. Authority and Required Intake

Before acting, Codex shall read and apply:

1. `AGENTS.md`;
2. `communication/AI_Communication_and_Handover_Protocol.md`;
3. `communication/README.md`;
4. `communication/governance/branch-protection-verification.md`;
5. `communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md`;
6. the README, decision log, handover log, and final Codex evidence for prior housekeeping missions where relevant; and
7. current GitHub repository, branch, pull-request, workflow, ruleset, and protection state.

This instruction is the Mission Control authorization for Codex to inspect and, where its authenticated capability permits, configure only the GitHub branch/ruleset settings named below. It does not authorize product, application, database, Supabase, deployment, domain, secret, billing, collaborator, or unrelated repository-setting changes.

If GitHub plan limits, permissions, missing authentication, repository divergence, an unexpected branch, or unavailable independent verification prevents safe completion, Codex shall stop the affected operation, preserve the compensating control, and report the exact blocker.

---

## 3. Current Verified Baseline

At instruction issuance:

- repository: `SmartBusinessv1/smart-business`;
- default branch: `main`;
- remote head: `f9fbaba4cf85d81f4396b27b4182bd75efd5007e`;
- branches observed: `main` only;
- open pull requests observed: none;
- `communication/governance/branch-protection-verification.md` records branch protection as `NOT CONFIGURED`; and
- the temporary Founder-approved Phase 1 compensating control remains active.

Codex shall re-check this baseline immediately before any GitHub settings mutation. A changed head alone is not automatically a blocker, but Codex must identify and review the intervening repository change before continuing. Any material change to authority, scope, protection state, or repository identity requires a stop report.

---

## 4. Build Now Scope

### 4.1 Inspect and record current state

Record evidence for:

- repository identity and default branch;
- current `main` head SHA;
- existing classic branch protection and repository rulesets;
- direct-push restrictions;
- pull-request requirements;
- required approvals and conversation-resolution settings;
- status-check inventory and reliability;
- force-push and branch-deletion restrictions;
- administrator, bypass, and exception actors;
- merge methods relevant to enforcement; and
- current open branches and pull requests.

Do not infer protection from documentation. Use GitHub settings or API evidence.

### 4.2 Configure minimum protection for `main`

Configure a branch protection rule or repository ruleset targeting `main` that, at minimum:

- requires changes to reach `main` through a pull request;
- blocks force pushes;
- blocks branch deletion;
- requires pull-request conversations to be resolved before merge;
- does not permit an AI actor to approve or merge its own work;
- limits bypass to the smallest justified human-controlled set; and
- preserves Founder or authorized-human merge authority.

Require at least one approving review only if the repository has an independent eligible reviewer and the setting can be operated without creating a deadlock. If that condition is not met, record the gap and retain the compensating control for that risk.

Require status checks only when Codex verifies that the named checks already exist, run reliably on pull requests, and can be required without blocking all legitimate merges. Do not invent, rename, or require a future communication-governance validator or any check that has not been proven reliable.

Do not weaken repository visibility, security, authentication, collaborator permissions, Actions permissions, secret controls, or other existing safeguards.

### 4.3 Safe enforcement test

Use a narrowly named temporary test branch and pull request only if needed and supported. The test must demonstrate, without changing product behaviour, that:

- a direct or otherwise non-compliant update to `main` is rejected;
- the pull-request path remains available;
- unresolved conversations block merge when the selected GitHub rule supports a safe test;
- required reliable checks, if any, are enforced; and
- force-push and deletion restrictions are shown in settings/API evidence or tested without risking `main`.

Do not merge test-only content into `main`. Do not attempt a destructive force push or deletion against `main`. A non-destructive API/settings inspection is sufficient for those two controls.

Temporary test artifacts may be closed and the temporary branch deleted only after their evidence is recorded and only when deletion is safe. Never delete `main` or an unrelated branch.

### 4.4 Independent verification gate

Independent verification must be completed by the Founder, Mission Control, or an authorized reviewer who did not perform the configuration. Verification shall confirm:

- the rule targets `main`;
- required pull-request enforcement is active;
- direct push is blocked for the tested actor;
- force push is blocked;
- branch deletion is blocked;
- conversation resolution is required;
- every required status check is real and reliable;
- bypass/admin behaviour matches the approved design; and
- the evidence corresponds to the current repository state.

Codex may prepare evidence and exact verification steps, but Codex must not self-certify independent verification of a configuration it applied.

### 4.5 Governance record and retirement

Update `communication/governance/branch-protection-verification.md` with dated settings evidence, enforcement-test evidence, verifier identity or role, repository and branch, rule/ruleset identity, bypass behaviour, required-check decision, unresolved limitations, and relevant commit or pull-request references.

Only after the independent verification gate passes may Codex update applicable live governance wording to state that the temporary compensating control is retired.

If independent verification is pending, failed, partial, or unavailable:

- leave `Branch Protection` as not independently verified or verification pending;
- leave the temporary compensating control active;
- do not alter protocol or repository instructions to claim retirement; and
- report the exact next human action.

Retirement is a recorded governance outcome, not an assumption caused by creating a rule.

---

## 5. Mission Communication Package

Create:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.8/
```

Required records:

```text
communication/missions/SB-GOV-HOUSEKEEPING-1.8/README.md
communication/missions/SB-GOV-HOUSEKEEPING-1.8/decision-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.8/handover-log.md
communication/missions/SB-GOV-HOUSEKEEPING-1.8/codex/branch-protection-configuration-report.md
communication/missions/SB-GOV-HOUSEKEEPING-1.8/codex/enforcement-test-evidence.md
communication/missions/SB-GOV-HOUSEKEEPING-1.8/founder/founder-verification-brief.md
```

The package must distinguish:

- inspected state;
- configured state;
- independently verified state;
- compensating-control status; and
- any blocked or deferred control.

Do not place credentials, tokens, sensitive headers, or reusable authentication material in evidence. Redact screenshots or command output where required.

---

## 6. Required Live Report

Codex shall create:

```text
communication/live/report1.8.md
```

The report must state:

- starting and final repository head SHA;
- repository, default branch, and target branch;
- pre-change protection/ruleset state;
- exact rule or ruleset configured;
- pull-request, conversation-resolution, force-push, deletion, review, check, admin, and bypass settings;
- reliable status checks discovered and the decision for each;
- exact enforcement tests performed and results;
- test branch and pull-request references, if used;
- independent verifier identity or role and evidence status;
- exact files created or modified;
- GitHub settings changed;
- canonical-source changes: `NONE`;
- product/application/database/Supabase/deployment changes: `NONE`;
- Markdown and internal-link validation;
- `git diff --check` result;
- secret/credential inspection result;
- exact staged-scope result;
- commit, push, pull-request, and merge status;
- final remote file and commit verification;
- compensating-control status: `ACTIVE` or `RETIRED`;
- unresolved limitations and next authorized action; and
- communication closure status.

Use this successful status only after independent verification:

```text
TECHNICAL BRANCH PROTECTION CONFIGURED AND INDEPENDENTLY VERIFIED — COMPENSATING CONTROL RETIRED
```

Use this status whenever configuration or independent verification is incomplete:

```text
BRANCH PROTECTION RETIREMENT GATE NOT SATISFIED — COMPENSATING CONTROL REMAINS ACTIVE
```

---

## 7. Authorized Repository File Scope

Codex may create or modify only:

```text
communication/live/report1.8.md
communication/governance/branch-protection-verification.md
communication/missions/SB-GOV-HOUSEKEEPING-1.8/**
communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/mission-control-review-queue.md
communication/AI_Communication_and_Handover_Protocol.md
AGENTS.md
CLAUDE.md
CHATGPT.md
```

The last four governance/instruction files may be modified only after independent verification and only to replace stale statements about unconfigured protection or the active compensating control. No broader rewrite is authorized.

No canonical project source, source archive, product document, application code, SQL, migration, test, workflow, environment, deployment, or unrelated communication file may be changed.

---

## 8. Git and GitHub Authorization

For mission execution:

- **Authorized actor:** Codex
- **Repository:** `SmartBusinessv1/smart-business`
- **Base branch:** `main`
- **Mission branch:** `mission/SB-GOV-HOUSEKEEPING-1.8-branch-protection`
- **Push target:** the same mission branch on `origin`
- **Approved implementation commit message:** `Configure and verify main branch protection`
- **Pull-request target:** `main`
- **Authorized GitHub settings scope:** only branch protection or ruleset controls targeting `main` described in Section 4
- **Merge authority:** Founder or authorized human maintainer only

Codex may fetch, verify, create or use the named mission branch, stage exact authorized files, commit, push, and open or update the pull request. Codex may not approve or merge its own work.

Because the current protection gap is itself the mission subject, the temporary compensating control remains applicable throughout execution. Exact-file staging, remote and branch verification, quality checks, secret inspection, non-fast-forward stop conditions, and Mission Control review remain mandatory.

Do not push mission implementation directly to `main`. Do not force push, rewrite history, bypass a rule, dismiss blocking feedback, modify unrelated settings, or treat tool access as authority.

---

## 9. Validation and Stop Conditions

Before every commit:

```powershell
git status --short
git diff --name-status
git diff --check
git diff --cached --name-status
git diff --cached --check
```

Also run the repository Markdown quality gate, internal-link validation, exact authorized-path validation, and secret/credential inspection.

Stop and report without retirement when:

- the repository or target branch is not as authorized;
- unrelated local or remote changes create ambiguity;
- GitHub permissions or plan support are insufficient;
- the proposed rule would lock out all legitimate maintainers;
- a required check is absent or unreliable;
- enforcement testing fails;
- bypass behaviour cannot be established;
- independent verification is not complete;
- validation fails;
- a conflict or non-fast-forward condition occurs; or
- any evidence contradicts the claimed protected state.

---

## 10. Completion Principle

This mission succeeds only when technical enforcement replaces reliance on the temporary process control and an independent human authority verifies that enforcement.

Until then, the compensating control remains active without exception.
