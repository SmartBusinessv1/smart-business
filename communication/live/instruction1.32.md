# SMART BUSINESS MISSION CONTROL

# Instruction 1.32 — SB-P-1.11 Token Retention Policy Lock-Step Correction

**Mission ID:** SB-P-1.11

**Mission Name:** Product Catalog & Pricing

**Lifecycle Activity:** Final Pre-Implementation Token-Lifecycle Documentation Correction

**Authorized By:** Mission Control

**Mission Status:** ACTIVE

---

## 1. Mission Objective

Apply one final, lock-step documentation correction to the token-lifecycle parameter resolution recorded in `communication/live/report1.31.md`.

This mission exists only to replace the rejected indefinite-retention position with the fixed Mission Control policy for:

1. consumed-token retention;
2. expired-unconsumed-token retention;
3. audit-only minimization;
4. purge eligibility;
5. future-authorized purge execution.

This is a documentation correction only.

It does not reopen the accepted 15-minute validity period or any previously resolved database, security, product, command-surface, phase-gate, or governance decision.

---

## 2. Authorized File Scope

Claude Code may modify only:

```text
communication/live/report1.31.md
```

Claude Code may create only:

```text
communication/live/report1.32.md
```

No other existing file may be modified.

No other file may be created.

---

## 3. Fixed Mission Control Retention Policy

The following policy is authoritative for this correction and must be reproduced accurately in `report1.31.md` and verified in `report1.32.md`.

```text
ACTIVE TOKEN:
Retained while usable, for a maximum of 15 minutes.

CONSUMED TOKEN ROW:
Retain full non-secret lifecycle metadata for 90 days after consumed_at.

EXPIRED-UNCONSUMED TOKEN ROW:
Retain full non-secret lifecycle metadata for 30 days after expires_at.

RAW TOKEN VALUE:
Minimize immediately on successful consumption.
Minimize after expiry through the first authorized interaction or the
future cleanup process, whichever occurs first.

AFTER FULL-METADATA RETENTION:
Remove the token row or irreversibly minimize it to durable audit-only
evidence.

DURABLE AUDIT-ONLY EVIDENCE:
Retain according to the general catalog audit-event policy, without
retaining the raw bearer value, expected-state payload contents, or
unnecessary personal data.

PURGE ELIGIBILITY:
Consumed row — consumed_at + 90 days.
Expired-unconsumed row — expires_at + 30 days.

PURGE EXECUTION:
Requires a separately authorized cleanup mechanism.
Until that mechanism exists, rows may remain physically stored but are
not usable, and no implementation may claim automated purge is active.
```

This policy supersedes only the indefinite-retention and no-purge-policy portions of `report1.31.md`.

---

## 4. Required Corrections to `report1.31.md`

Claude Code must:

1. Replace every statement that consumed-token metadata is retained indefinitely with the fixed 90-day period from `consumed_at`.
2. Replace every statement that expired-unconsumed-token metadata is retained indefinitely with the fixed 30-day period from `expires_at`.
3. Remove any statement that indefinite retention is the approved policy.
4. Remove any statement that absence of a current cleanup mechanism justifies permanent retention.
5. Distinguish purge eligibility from purge execution.
6. State that policy deadlines are fixed now even though no cleanup worker, cron job, Edge Function, RPC, function, or other purge mechanism is authorized.
7. Preserve immediate token unusability at consumption and at expiry.
8. Preserve immediate raw-token minimization in the successful-consumption transaction.
9. Correct expired-token minimization so that:
   - usability ends immediately at `expires_at` through the mandatory server-side check;
   - physical raw-token minimization occurs at the first authorized interaction after expiry or through a separately authorized future cleanup process, whichever occurs first;
   - expired-but-never-retried rows remain unusable even before physical minimization.
10. State that no implementation may claim automated purge exists until separately authorized and verified.
11. Define the post-retention outcome as either:
    - deletion of the transient token row; or
    - irreversible minimization to durable audit-only evidence.
12. State that durable audit-only evidence must not retain:
    - the raw bearer token;
    - complete expected-state payload contents;
    - unnecessary personal data.
13. Preserve sufficient durable evidence for audit and replay investigation, including, where applicable:
    - business identity;
    - stable token-record or correlation identity;
    - initiating actor;
    - consuming actor;
    - issue time;
    - expiry time;
    - consumption time;
    - lifecycle outcome;
    - stale-state or rejection reason;
    - command request or idempotency correlation;
    - a minimal expected-state digest or equivalent non-payload correlation value.
14. Update the parameter matrix and conceptual lifecycle timeline to reflect the fixed policy.
15. Preserve the accepted 15-minute validity rule unchanged.

---

## 5. Required `report1.32.md` Contents

`communication/live/report1.32.md` must include:

1. Mission identity and authorizing instruction.
2. Branch name.
3. Synchronized base `main` SHA.
4. Substantive branch commit SHA.
5. Pull-request number and URL.
6. Exact files changed.
7. Confirmation that only `report1.31.md` was modified and only `report1.32.md` was created.
8. Confirmation that the 15-minute token-validity parameter was not reopened or altered.
9. Confirmation that indefinite retention was removed everywhere from the operative policy.
10. Confirmation of:
    - 90-day consumed-row full-metadata retention;
    - 30-day expired-row full-metadata retention;
    - immediate consumption-time bearer minimization;
    - expiry-time unusability;
    - lazy-or-future-cleanup physical minimization after expiry;
    - consumed-row purge eligibility at `consumed_at + 90 days`;
    - expired-row purge eligibility at `expires_at + 30 days`;
    - future separate authority for purge execution.
11. Confirmation that durable audit-only evidence excludes the raw bearer value, complete expected-state payload, and unnecessary personal data.
12. Confirmation that no cleanup worker, scheduler, cron job, Edge Function, SQL function, RPC, or implementation artifact was created or authorized.
13. A final corrected policy matrix using exactly:

```text
| Policy Area | Exact Rule | Retention or Eligibility Point | Token Usability Effect | Audit Evidence Effect | Implementation Authority | Final Status |
```

14. A corrected lifecycle timeline using exactly these stages:

```text
ISSUED
ACTIVE
CONSUMED OR EXPIRED
FULL-METADATA RETENTION
PURGE-ELIGIBLE
PURGED OR AUDIT-ONLY MINIMIZED
```

15. Product Truth change status.
16. Founder Decision requirement.
17. Founder Lovable Brief status.
18. Paste-into-Lovable authority status.
19. Lovable Build Mode and Plan Mode usage status.
20. Implementation-authority status.
21. Final readiness conclusion.

---

## 6. Final Required Dispositions

`report1.31.md` and `report1.32.md` must conclude that:

```text
TOKEN VALIDITY:
RESOLVED — 15 MINUTES, FIXED, SERVER-CONTROLLED

CONSUMED-TOKEN FULL-METADATA RETENTION:
RESOLVED — 90 DAYS AFTER consumed_at

EXPIRED-UNCONSUMED FULL-METADATA RETENTION:
RESOLVED — 30 DAYS AFTER expires_at

RAW-TOKEN MINIMIZATION:
RESOLVED

PURGE ELIGIBILITY:
RESOLVED

PURGE EXECUTION:
SEPARATE FUTURE AUTHORITY REQUIRED

TOKEN-LIFECYCLE PARAMETER RESOLUTION:
COMPLETE
```

The final Phase 1 readiness conclusion must be one of:

```text
PHASE 1 PRE-IMPLEMENTATION READINESS COMPLETE — FOUNDER LOVABLE BRIEF MAY BE PREPARED
```

or, only if a newly discovered direct locked-source conflict exists:

```text
PHASE 1 PRE-IMPLEMENTATION READINESS BLOCKED — LOCKED-SOURCE CONFLICT IDENTIFIED
```

No other concluding status is permitted.

---

## 7. Preserved Closed Decisions

Do not reopen or alter:

- the 15-minute fixed server-controlled validity period;
- validity start at successful preview issuance;
- `now() < expires_at` validity boundary;
- renewal prohibition;
- fresh-preview requirement after expiry;
- token uniqueness;
- retained-row single-use enforcement;
- same-actor confirmation;
- initiating and consuming actor binding;
- business binding;
- expected-state binding;
- replay rejection;
- normalized comparison columns;
- named composite uniqueness constraints;
- SKU and barcode normalization rules;
- archived identity reservation;
- `business_tax_settings` singleton enforcement;
- `system_errors` deferral;
- Owner-only initial Phase 1;
- scheduler and merchant-facing scheduling exclusion;
- Phase 2a permission-engine gate;
- Phase 2b import scope;
- Phase 3 conversational-engine gate;
- complete locked 28-command future surface;
- Product Truth;
- Founder Decisions D-001 through D-068;
- locked Product Blueprint, EIS, Engineering Contract, Lovable Build Prompt, and Verification Checklist.

---

## 8. Prohibited Actions

Claude Code must not:

- modify any file other than `communication/live/report1.31.md`;
- create any file other than `communication/live/report1.32.md`;
- modify a locked source;
- create or modify Product Truth;
- create or modify a Founder Decision;
- create SQL;
- create a migration;
- create or alter a table, column, generated column, constraint, or index;
- create or alter RLS;
- create an RPC, function, trigger, worker, scheduler, cron job, or Edge Function;
- create roles or grants;
- create application code or tests;
- design or implement the future cleanup mechanism;
- create a Founder Lovable Brief;
- create implementation authorization;
- use Lovable Plan Mode;
- use Lovable Build Mode;
- consume Lovable credits;
- publish or deploy;
- perform production activity;
- approve or merge its own pull request.

---

## 9. Execution Procedure

Claude Code must:

1. Fetch and prune all remotes.
2. Fast-forward synchronize local `main` with `origin/main`.
3. Read this instruction, `report1.31.md`, `report1.29.md`, `report1.30.md`, and the locked D-068 sources.
4. Create a new protected mission branch.
5. Apply only the authorized corrections.
6. Run repository Markdown repair, lint, and validation quality gates on both changed reports.
7. Confirm the exact two-file scope.
8. Commit the documentation correction.
9. Open a pull request against `main`.
10. Report the real branch, commit, pull-request, and file-change evidence in `report1.32.md`.
11. Stop without approving or merging the pull request.

---

## 10. Authority Status

```text
FOUNDER LOVABLE BRIEF: NOT AUTHORIZED
PASTE-INTO-LOVABLE AUTHORITY: NONE
LOVABLE PLAN MODE: PROHIBITED
LOVABLE BUILD MODE: PROHIBITED
IMPLEMENTATION AUTHORITY: NONE
PUBLISHING OR DEPLOYMENT AUTHORITY: NONE
```

This instruction authorizes documentation correction only.
