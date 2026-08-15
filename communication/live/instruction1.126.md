# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-30 — REPOSITORY HYGIENE REMEDIATION

**Instruction ID:** instruction1.126  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-30 — Repository Hygiene Remediation  
**Authorized By:** Founder / Mission Control  
**Executing Room:** Claude Code / Engineering  
**Mode:** REPOSITORY HYGIENE ONLY — NO PRODUCT IMPLEMENTATION  
**Implementation Authority:** NONE  
**Paste-Into-Lovable Authority:** NONE  
**Lovable Plan Mode Authority:** NONE  
**Lovable Build Mode Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Remove the remaining current-tree repository-hygiene blocker that prevents SB-P-1.11 implementation authorization, while preserving local developer configuration safely and without rewriting Git history or changing Product Truth, architecture, application behavior, or infrastructure.

This mission is limited to repository hygiene and evidence.

Required completion report:

`communication/live/report1.135.md`

---

## 2. Entry Gate

Before any change, synchronize to current merged `main` and verify:

- PR #286 is merged;
- current `main` contains merge commit `25e179bf5ebd3c0b882bdec27fbaa76a0305b4be` or a later commit containing it;
- `docs/implementation/SB-P-1.11/founder-lovable-brief.md` is Version 1.1 and `LOCKED — MISSION CONTROL ACCEPTED`;
- `Stage 14 Founder Handoff Authority` is `GRANTED`;
- Paste-Into-Lovable, Lovable Plan Mode, Lovable Build Mode, Implementation, and Publishing / Deployment authorities remain `NONE`;
- the three Stage 12 implementation-package documents remain Version 1.2 and `LOCKED — MISSION CONTROL ACCEPTED`;
- no later accepted Mission Control decision supersedes this hygiene requirement.

If any entry condition is missing, contradicted, or superseded, STOP and report the evidence gap.

---

## 3. Known Hygiene Findings to Reconcile

Prior repository review established the following current hygiene facts:

1. `.env` and `.env.test` are tracked and must stop being tracked.
2. Root ignore coverage must explicitly protect local environment/config artifacts.
3. `.claude/settings.local.json` may already be individually ignored, but the repository should ignore the local `.claude/` workspace directory as a whole.
4. `gitleaks-report.json` is a local scan artifact and must be ignored.
5. Earlier Gitleaks full-history review identified historical findings consisting of public/publishable Supabase-style values plus non-credential D-068 preview-token examples; it found no service-role secret, OpenAI/Anthropic secret, database password, or private key requiring rotation.
6. This mission must not rewrite repository history merely to erase already-reviewed historical findings.

Treat any materially different current evidence as a STOP condition and report it before proceeding.

---

## 4. Authorized Repository Changes

This mission may modify only the following repository paths:

- `.gitignore`
- `.env` — remove from Git tracking only; do not destroy the developer's usable local copy
- `.env.test` — remove from Git tracking only; do not destroy the developer's usable local copy
- `.env.example` — create or update as a sanitized example only if needed
- `.env.test.example` — create or update as a sanitized example only if needed
- `communication/live/report1.135.md` — create

No other repository path may be changed.

If an example file already exists, preserve useful sanitized structure and modify only what is necessary for this mission.

---

## 5. Local Environment Preservation Is Mandatory

Before untracking `.env` or `.env.test`:

1. Confirm each local file exists if currently used.
2. Make a safety backup **outside the repository working tree** or otherwise in a location that cannot be staged or committed.
3. Verify the backup exists before changing Git tracking.
4. Use an index-only untracking method such as `git rm --cached` so the working copy remains available locally.
5. After the Git operation, verify the usable local `.env` / `.env.test` content still exists in the working environment.
6. Never print, paste, commit, or include secret/local configuration values in the completion report, PR description, terminal transcript intended for sharing, or sanitized example files.

If local preservation cannot be proven, STOP. Do not risk deleting the Founder's working configuration.

---

## 6. Required `.gitignore` Coverage

Reconcile the root `.gitignore` so it clearly ignores:

```text
.env
.env.*
!.env.example
!.env.test.example
.claude/
gitleaks-report.json
```

Equivalent ordering is acceptable if behavior is identical.

Do not accidentally ignore the sanitized example files.

Preserve existing unrelated ignore rules.

---

## 7. Sanitized Example Files

If `.env.example` and/or `.env.test.example` are absent or inadequate for safe developer setup, create/update them with placeholder variable names only.

Requirements:

- no real keys, tokens, passwords, JWTs, URLs containing credentials, private endpoints, or personal/local values;
- preserve only variable names and clearly fake placeholders needed to communicate setup shape;
- do not invent application configuration that is not already used by the repository;
- if the tracked `.env` / `.env.test` contains a variable whose inclusion in an example would reveal sensitive operational detail, omit the value and use a neutral placeholder;
- no actual Supabase publishable/anon value is required in examples.

---

## 8. Secret / Hygiene Verification

After the repository changes, perform and report all of the following without exposing secret values:

1. `git ls-files` or equivalent proves `.env` and `.env.test` are no longer tracked.
2. `git check-ignore -v` or equivalent proves local `.env`, `.env.test`, `.claude/`, and `gitleaks-report.json` are ignored as intended.
3. Sanitized `.env.example` / `.env.test.example` remain trackable and contain no real secrets.
4. Run the repository's current-tree secret scan / Gitleaks scan and report the result.
5. Run the full-history Gitleaks scan separately.
6. Historical findings already reviewed may remain because history rewriting is not authorized. Classify them rather than falsely claiming historical zero findings.
7. Any newly discovered credential-grade secret — including service-role keys, private API keys, passwords, private keys, or equivalent — is a STOP condition. Do not continue toward implementation authorization; report the finding without reproducing the secret value.
8. Run `git diff --check` / whitespace verification.
9. Run the Markdown quality gate on `communication/live/report1.135.md` and any Markdown file changed by the mission.

Do not commit generated scan artifacts unless separately authorized. `gitleaks-report.json` remains ignored and local.

---

## 9. History-Rewrite Boundary

This mission does **not** authorize:

- `git filter-repo`;
- BFG history rewrite;
- force-pushing rewritten history;
- deleting historical commits;
- rotating credentials that prior evidence classified as public/publishable and non-secret;
- changing old reports solely to remove already-reviewed example strings.

If independent evidence shows a credential-grade secret exists in Git history, STOP and escalate. A separate security-response mission will decide rotation/history remediation.

---

## 10. Protected Product / Governance State

Do not modify:

- the locked Founder Lovable Brief;
- any of the three locked Version 1.2 implementation-package documents;
- Founder Product Decision Record;
- Founder Workflow Reconciliation Record;
- Product Blueprint;
- EIS or canonical Lambda Parser EIS;
- application source code;
- SQL/migrations/RLS/RPCs;
- Supabase configuration or data;
- AWS/S3/IAM resources;
- Lovable project state;
- dependencies;
- deployment or production state;
- Blueprint lifecycle path.

The exact 19-public-Catalog-command boundary and every approved Product/architecture decision remain untouched.

---

## 11. Repository Discipline

1. Start from current merged `main`.
2. Fetch and fast-forward synchronize before work.
3. Use a new protected mission branch.
4. Preserve unrelated local modifications and untracked files.
5. Do not use `git add .`.
6. Stage only the explicitly authorized hygiene files.
7. Verify the local environment backup before untracking.
8. Open a PR for Mission Control review.
9. Do not approve or merge your own PR.

---

## 12. Required Completion Report

Create:

`communication/live/report1.135.md`

Include:

- exact starting merged `main` SHA;
- branch name;
- PR number and URL;
- final branch commit SHA reported externally if self-hash cannot be embedded;
- exact files changed/created/deleted from Git tracking;
- confirmation local `.env` and `.env.test` were safely preserved before and after index-only untracking, without reproducing their contents;
- exact `.gitignore` rules added/reconciled;
- status of sanitized example files;
- proof `.env` / `.env.test` are no longer tracked;
- proof target local artifacts are ignored;
- current-tree secret-scan result;
- full-history Gitleaks result with findings classified, not hidden;
- explicit statement whether any credential rotation is required based on evidence;
- confirmation no history rewrite occurred;
- confirmation all protected Product/governance/package/code/infrastructure scopes are zero-diff;
- Markdown quality-gate and whitespace results;
- any residual hygiene issue that still blocks implementation authorization.

Do not reproduce any secret, token, key, password, or full credential-like value in the report.

Required final disposition if all checks pass:

`SB-P-1.11 REPOSITORY HYGIENE REMEDIATION — COMPLETE — INDEPENDENT VERIFICATION REQUIRED`

If a credential-grade secret or unresolved blocker is found, use:

`SB-P-1.11 REPOSITORY HYGIENE REMEDIATION — BLOCKED — SECURITY REVIEW REQUIRED`

---

## 13. Next Gate

Completion of this mission does not itself clear the implementation gate.

After the remediation PR is human-reviewed and merged, Mission Control must perform a separate independent repository-hygiene verification on current `main`.

Only after that independent verification passes may Mission Control consider creating the lifecycle-required implementation-authorization record at:

`communication/missions/SB-P-1.11/mission-control/implementation-authorization.md`

Stage 15 implementation remains unauthorized until that separate record exists for the specific phase.

---

## 14. Mission Control Decision

`SB-P-1.11-GC-30 — REPOSITORY HYGIENE REMEDIATION AUTHORIZED`
