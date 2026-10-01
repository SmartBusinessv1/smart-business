# SMART BUSINESS MISSION CONTROL — MC-171

# SB-P-1.12 — Package-Lock Metadata Reconciliation and Mandatory Specialist Readiness Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-01  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND MISSION CONTROL POST-MERGE VERIFICATION  
**Readiness evidence:** PR #703 / `communication/missions/SB-P-1.12/claude-code/37-stage13-implementation-readiness-report.md`  
**Implementation Authorization:** WITHHELD

## 1. Readiness disposition

Mission Control accepts the PR #703 readiness package as **planning evidence only**.

Accepted for specialist review, not as authority:

- Claude Code as the primary builder recommendation;
- candidate migration mission `SB-MIG-1.4` with groups M-01 through M-20;
- Codex as the intended Stage 19 verifier candidate;
- Stage 14 `NOT APPLICABLE — JUSTIFIED` under the Claude Code builder model.

None of those recommendations becomes an appointment, executable mission or implementation authority by this record.

## 2. Confirmed implementation blockers

Before implementation can begin:

1. application/security/migration CI must produce the Stage 15 required green Fast Gate and applicable Full Assurance evidence, or Mission Control must separately govern an assurance substitute that genuinely satisfies the same gate;
2. a runtime-verification environment bound to the approved test backend must be evidenced;
3. the required migration mission must be authorized separately;
4. builder allocation and the full Source 18 Implementation Authorization fields must be fixed;
5. targeted Supabase/Security readiness review must be completed and dispositioned.

Production ledger, effective grants/default privileges, backups/PITR and test-ledger alignment remain UNVERIFIED.

## 3. Locked-package metadata reconciliation

This PR corrects only lock/status/change-log presentation defects introduced by the MC-168 lock transition.

Previous canonical package blobs:

- Engineering Contract: `20228e17c2fc6c36cfad9ccc1d5114873b15df1a`;
- Lovable Build Prompt: `26060db019fdae3cfdb8f4c5547352bc165eedbc`;
- Verification Checklist: `82646e8d0e7e1e667ebfefbd3d64ee2fc1d2ebe8`.

Prepared reconciled package blobs:

- Engineering Contract: `3c9b01d9df49d9bfff39f22ee2a866c6d40f316e`;
- Lovable Build Prompt: `3993b77776b9576ac4000599e55a62479182b963`;
- Verification Checklist: `453b598a5b79171ddf26903d2055fef1d3d19e5b`.

Changes are limited to:

- removing the contradictory stale phrase “Not approved, not locked” from Engineering Contract §14;
- placing the MC-168 `1.0-L` lock rows inside the Engineering Contract and Build Prompt change-log tables;
- adding the missing MC-168 `1.0-L` lock row to the Verification Checklist;
- replacing the stale phrase “this draft” with “this locked checklist” in the Verification Checklist final-acceptance disclaimer.

No obligation, row, mapping, check, scenario, workstream, Product Truth, FCTM classification, hold or implementation authority changes.

After human merge and verification, the prepared blobs become the canonical locked package identities for Stage 13+ references.

## 4. Candidate migration plan under review

The candidate `SB-MIG-1.4 — SB-P-1.12 Authority, Identity and History-Integrity Schema` remains **NON-EXECUTABLE**.

The M-01…M-20 manifest is a specialist-review input only.

No SQL or migration file may be created or executed under this record.

## 5. Mandatory Supabase specialist review

Work package:

`SB-P-1.12-WP-SUPABASE-IMPLEMENTATION-READINESS-REVIEW`

Recipient: Supabase specialist.

Review the candidate migration and environment plan against the locked EIS/package and current repository/runtime facts.

Primary questions: Q-1 through Q-20 and Q-22 from the canonical readiness report. Q-21 may also be answered where the Supabase specialist has a technical safety view.

Required output:

`communication/missions/SB-P-1.12/specialists/07-stage13-supabase-implementation-readiness-review.md`

Live handover:

`communication/live/report1.34.md`

The specialist shall classify each question as:

- `SUPPORTED`;
- `REFINEMENT REQUIRED`;
- `BLOCKED — EVIDENCE REQUIRED`;
- `NOT IN SPECIALIST SCOPE`.

The specialist may recommend migration-plan changes but may not create SQL, authorize execution, redefine Product Truth, or approve implementation.

## 6. Mandatory Security readiness review

Work package:

`SB-P-1.12-WP-SECURITY-IMPLEMENTATION-READINESS-REVIEW`

Recipient: Security & Permissions Architecture specialist.

Review the security, RLS/grants, privilege, concurrency, destructive-cut-over, builder and assurance implications of the candidate plan.

Primary questions: Q-1, Q-3 through Q-14, and Q-17 through Q-22 from the canonical readiness report.

Required output:

`communication/missions/SB-P-1.12/specialists/08-stage13-security-implementation-readiness-review.md`

Live handover:

`communication/live/report1.35.md`

Use the same disposition vocabulary as Section 5.

The specialist may recommend finding-scoped plan changes but may not implement, create SQL, authorize migration/production action, redefine Product Truth or approve the mission.

## 7. Specialist Git authority

The two specialist reviews are separately scoped.

### Supabase review

**Branch:** `mission/SB-P-1.12-stage13-supabase-readiness-review`  
**Authorized base:** canonical `main` after this MC-171 PR is human-merged and verified  
**Writable paths only:**

1. `communication/missions/SB-P-1.12/specialists/07-stage13-supabase-implementation-readiness-review.md`
2. `communication/live/report1.34.md`

### Security review

**Branch:** `mission/SB-P-1.12-stage13-security-readiness-review`  
**Authorized base:** canonical `main` after this MC-171 PR is human-merged and verified  
**Writable paths only:**

1. `communication/missions/SB-P-1.12/specialists/08-stage13-security-implementation-readiness-review.md`
2. `communication/live/report1.35.md`

For each review:

- fetch canonical baseline;
- create the authorized branch;
- inspect read-only repository/runtime evidence available to that specialist;
- write only the two authorized report paths;
- stage exactly those paths;
- commit with a mission-scoped descriptive message and standard required `Co-Authored-By` trailer;
- push without force;
- open one PR to `main`;
- no direct `main` push;
- no self-approval or self-merge.

Authorization ends when that specialist PR is opened and its exact head/blobs are reported to Mission Control, or at 2026-10-03T23:59:59+05:30, whichever occurs first.

## 8. Mission Control decision boundary after specialist review

Mission Control will not activate `SB-MIG-1.4` or change Implementation Authorization from WITHHELD until both specialist reviews are canonical or otherwise durably reviewable and Mission Control has dispositioned all material findings.

Even after specialist review, production migration remains a separate authorization decision with the full `docs/migration/README.md` default-deny fields.

## 9. Preserved holds

- R-2 CLOSED / SATISFIED.
- ESC-1 OPEN T8.
- `22-§20-2` BLOCKED / IN SCOPE.
- G-6/T4 UNVERIFIED.
- Professional legal/privacy/retention validation deferred.
- Identity-deletion runtime NOT AUTHORIZED.
- Implementation NOT AUTHORIZED.
- SQL/migration creation or execution NOT AUTHORIZED.
- Provider/production mutation NOT AUTHORIZED.
