# MC-155 — GitHub Actions Dispatch Incident and PR #690 Manual-Equivalence Exception Record

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Record owner:** Smart Business Mission Control  
**Date:** 2026-09-30  
**Status:** DRAFT — PENDING CANONICAL HUMAN MERGE  
**Scope:** PR #690 only; documentation-only Stage 10 specialist review evidence  
**Authority boundary:** This record does not authorize implementation, schema, SQL, migration, provider mutation, deployment, production action, EIS lock, or merge by an AI.

## 1. Purpose

Record the verified GitHub Actions dispatch failure affecting PR #690, the manual-equivalence evidence obtained against the frozen candidate, and Mission Control's narrow exception recommendation.

The quality assurance remains required. GitHub Actions is the normal transport for that assurance, not the source of Product Truth, Mission Control authority, Founder authority, or release authority.

## 2. Frozen PR #690 identity

| Item | Exact identity |
|---|---|
| PR | #690 — docs(SB-P-1.12): add Stage 10 independent EIS security review |
| State at evidence capture | OPEN / ready for review / unmerged / mergeable |
| Base | `ec0fc74dbc9685eff6162c326ececb2cde1c3c77` |
| Frozen head | `3749f47780a56059fa138d3eb781f880ab1c9adc` |
| Tree | `2ac024130e8ab2d51b0113a4bf64ae1033bef6aa` |
| Changed files | 2 Markdown files |
| Specialist report blob | `ddaa405f6d3145249fbcc6e29d88c9aaa229285b` |
| Live handover blob | `49c4c582e978a25bd45fb1be8ec4237bdb71f6ab` |

Changed paths:

- `communication/missions/SB-P-1.12/specialists/04-stage10-independent-eis-security-review.md`
- `communication/live/report1.25.md`

The later CI-retrigger commits changed no files and preserved both substantive blobs.

## 3. Verified GitHub Actions failure

The repository Markdown workflow at the PR base is:

- `.github/workflows/markdown-quality-gate.yml`
- blob `5c92d6ac3d954a794815a708fe8a75003d568a4a`

Its `pull_request` trigger targets `main` and `develop` with no PR path filter.

For PR #690, GitHub produced no workflow run object, check suite, or commit status after all of the following materially relevant triggers:

- original PR open;
- PR reopen;
- first empty commit / `synchronize`;
- workflow disable then re-enable;
- second empty commit / `synchronize`.

Mission Control then performed an additional repository-native diagnostic without altering PR #690:

- temporary branch: `docs/pr690-manual-equivalence`
- parent/base: `ec0fc74dbc9685eff6162c326ececb2cde1c3c77`
- synthetic validation commit: `6735e164836a4069e7b225de3d79319e0c38edd6`
- commit tree: exact PR #690 tree `2ac024130e8ab2d51b0113a4bf64ae1033bef6aa`
- branch name matches the workflow's `docs/**` push trigger;
- the commit changes the same two Markdown files relative to the same base.

GitHub again reported:

- workflow runs: 0;
- check runs: 0;
- commit statuses: 0.

This materially strengthens the diagnosis from a PR-only trigger problem to a repository/GitHub Actions dispatch or execution-state problem.

## 4. Manual-equivalence validation

Mission Control evaluated the exact frozen PR #690 file contents against the repository's published Markdown repair, lint, and validation rules derived from:

- `tools/markdown/quality_gate.py`
- `tools/markdown/repair_markdown.py`
- `tools/markdown/lint_markdown.py`
- `tools/markdown/validate_markdown.py`
- `.markdown-gate.yml`

### 4.1 Specialist live handover

Path: `communication/live/report1.25.md`  
Blob: `49c4c582e978a25bd45fb1be8ec4237bdb71f6ab`

Results:

- repair-required content change: false;
- unresolved suspicious lines: 0;
- lint issues: 0;
- validation warnings: 0;
- validation failures: 0;
- headings found: 7;
- malformed table separators: 0;
- suspicious escaped Markdown: 0.

**Result: PASS.**

### 4.2 Independent Security review

Path: `communication/missions/SB-P-1.12/specialists/04-stage10-independent-eis-security-review.md`  
Blob: `ddaa405f6d3145249fbcc6e29d88c9aaa229285b`

Results:

- repair-required content change: false;
- unresolved suspicious lines: 0;
- lint issues: 0;
- validation warnings: 0;
- validation failures: 0;
- headings found: 25;
- malformed table separators: 0;
- suspicious escaped Markdown: 0.

**Result: PASS.**

### 4.3 Diff hygiene equivalence

The exact PR patch was independently scanned for the conditions normally surfaced by `git diff --check` that are material to this Markdown-only change:

- trailing whitespace on added lines: 0;
- merge-conflict markers on added lines: 0;
- space-before-tab defects on added lines: 0.

**Result: PASS.**

### 4.4 Execution limitation disclosed

The GitHub-hosted Python 3.12 workflow itself could not be observed because the Actions dispatcher did not create a run, including for the separate exact-tree `docs/**` push diagnostic.

Mission Control therefore records this as **manual rule-equivalence evidence**, not as a fabricated GitHub Actions success. No green status is manufactured and no missing run is represented as PASS.

For this documentation-only PR, the rule-equivalent validation, exact blob verification, existing independent Security review, Mission Control substantive review, and human merge requirement provide sufficient equivalent assurance for a narrow exception.

## 5. Risk classification

PR #690 contains only durable Stage 10 specialist review records. It contains no:

- application code;
- authentication or authorization implementation;
- database schema;
- SQL;
- migration;
- provider mutation;
- deployment configuration;
- production action.

The specialist documents explicitly preserve:

- EIS DRAFT / NOT LOCKED;
- implementation NOT AUTHORIZED;
- schema / SQL / migrations NOT AUTHORIZED;
- production action NOT AUTHORIZED;
- ESC-1 OPEN T8;
- `22-§20-2` BLOCKED / IN SCOPE;
- G-6/T4 UNVERIFIED.

Canonicalizing PR #690 records specialist findings. It does not create runtime or release authority.

## 6. Mission Control disposition

**TEMPORARY GITHUB ACTIONS DISPATCH / EXECUTION-STATE BLOCKER — MANUAL-EQUIVALENCE EXCEPTION PATH ACCEPTABLE FOR PR #690 ONLY.**

Mission Control recommends the following narrow human-controlled handling:

1. freeze PR #690 at `3749f47780a56059fa138d3eb781f880ab1c9adc`;
2. do not generate further retrigger commits;
3. preserve all branch protections except the single broken required context;
4. Founder or authorized human temporarily removes only the required `Markdown Quality Gate` context;
5. human-merge this evidence/exception record as the durable governance record;
6. human-merge PR #690 only if its head remains exactly `3749f47780a56059fa138d3eb781f880ab1c9adc` and the two blobs remain exact;
7. immediately restore the required `Markdown Quality Gate` context;
8. Mission Control verifies canonical main and both specialist blobs after merge;
9. PR #687 remains unmerged.

If GitHub's settings do not permit removal of only the single broken context, Founder must stop and return to Mission Control before weakening broader protection.

## 7. Non-precedent and long-term principle

This is a PR-specific exception caused by demonstrated infrastructure failure.

It does not authorize blind bypass for:

- application code;
- security/authentication/authorization work;
- schema or migrations;
- production configuration;
- deployment or release.

Long-term operating principle:

> Automated CI is Smart Business's default required assurance mechanism and remains merge-blocking when operational. If the automation platform or event-dispatch mechanism is demonstrably unavailable, an authorized risk-appropriate manual-equivalence process may substitute for the unavailable transport, but never for the assurance itself. The exception must be exact-SHA-bound, independently evidenced, human-authorized, auditable, time-limited, and must not weaken unrelated protections or create implementation, migration, deployment, or release authority. Where equivalent assurance cannot be established, the change remains blocked.

## 8. Carry-forward mission state

Unchanged:

- R-2 — CLOSED / SATISFIED;
- ESC-1 — OPEN T8;
- `22-§20-2` — BLOCKED / IN SCOPE;
- G-6/T4 — UNVERIFIED;
- professional legal/privacy/retention validation — deferred;
- EIS — DRAFT / NOT LOCKED;
- implementation package — NOT AUTHORIZED;
- implementation — NOT AUTHORIZED;
- schema / SQL / migrations — NOT AUTHORIZED;
- provider mutation / production action — NOT AUTHORIZED.

## 9. Next authorized action after canonicalization

After PR #690 becomes canonical and Mission Control verifies the exact specialist blobs on `main`, Mission Control may issue the finding-scoped Stage 10 EIS refinement instruction for `SEC-EIS10-01` through `SEC-EIS10-11`.

Until then, do not merge PR #687.

**STOP FOR FOUNDER HUMAN REVIEW / MERGE.**
