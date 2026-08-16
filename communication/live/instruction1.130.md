# SMART BUSINESS MISSION CONTROL

# SB-P-1.11 — STAGE 19 CLAUDE CODE INDEPENDENT VERIFICATION INSTRUCTION

**Instruction ID:** `instruction1.130`  
**Mission ID:** `SB-P-1.11`  
**Mission Name:** Product Catalog & Pricing  
**Lifecycle Stage:** `19 — Claude Code Independent Verification`  
**Sender:** Mission Control  
**Recipient:** Claude Code  
**Status:** ACTIVE AFTER HUMAN MERGE OF THIS INSTRUCTION PR  
**Date:** 2026-08-16  
**Required Reply:** `communication/live/report1.140.md`

---

## 1. Purpose

Execute the Source 18 Stage 19 independent post-build verification for the current canonical SB-P-1.11 implementation.

This is a verification mission only. It does not authorize implementation, correction, migration, deployment, publication, or acceptance.

---

## 2. Canonical Starting State

Repository:

`SmartBusinessv1/smart-business`

Base branch:

`main`

Verified canonical SHA before this instruction PR:

`01549969017a9952da90aabd572ce3b8dac72547`

Authorized Stage 19 branch:

`mission/SB-P-1.11-stage-19-independent-verification`

Approved Stage 19 commit message:

`SB-P-1.11: record Stage 19 independent verification`

Stage 19 authorization is already canonical through merged PR #298.

Stage 19 continuity intake is already canonical through merged PR #299.

After this instruction is human-merged, Claude Code must synchronize `main` and record the actual canonical starting SHA. If `main` contains any material change beyond this communication-only instruction, STOP and return the discrepancy to Mission Control before verification.

---

## 3. Mandatory Repository Intake

Before acting, read and comply with:

- `AGENTS.md`;
- `CLAUDE.md`;
- `communication/README.md`;
- `communication/AI_Communication_and_Handover_Protocol.md`;
- `communication/missions/SB-P-1.11/README.md`;
- `communication/missions/SB-P-1.11/handover-log.md`;
- `communication/missions/SB-P-1.11/decision-log.md`;
- `communication/missions/SB-P-1.11/mission-control/19-independent-verification-authorization.md`;
- `communication/missions/SB-P-1.11/mission-control/19-stage-handover.md`;
- every canonical governance source and locked SB-P-1.11 artifact named by the authorization and handover;
- Founder runtime evidence, Mission Control Stage 18 review, Builder Completion Report, GC-35 reconciliation evidence, GC-36 canonicalization evidence, current canonical code, schema/migrations, generated types, tests, and relevant environment evidence.

Chat history is not a substitute for repository intake.

---

## 4. Verification Scope

Independently verify the actual current canonical implementation, not the Lovable Builder Completion Report.

At minimum verify and classify:

1. exactly nineteen authorized public Catalog commands, with no twentieth public Catalog command;
2. command signatures and result behavior against the locked engineering contract and accepted corrections;
3. no direct client-reachable Catalog table mutation bypass;
4. business isolation and Owner-only Initial Phase 1 authorization;
5. RLS, grants, executor ownership, `SECURITY DEFINER` boundaries, and `service_role` neutrality;
6. idempotency, rejection persistence, retry/unknown-outcome reconciliation, and cross-business non-disclosure;
7. D-068 preview/confirmation lifecycle, stale-state handling, replay protection, and price-confirmation behavior;
8. Catalog versus Inventory truth separation, including no second stock ledger and no unauthorized quantity ownership;
9. category/product lifecycle behavior, archived visibility, deletion restrictions, and preserved history;
10. SKU/barcode/name normalization and business-scoped uniqueness behavior;
11. selling price, tax, business pricing mode, and Reference Cost confidentiality/authority;
12. `/catalog` routing, authentication guard, navigation, list/detail behavior, and key merchant workflows;
13. no unauthorized Manager/Employee activation;
14. no unauthorized Initial Phase 1 bulk-import implementation beyond the currently authorized/canonical state;
15. no unauthorized WhatsApp/voice/photo/channel execution or scheduler activation;
16. no unauthorized product-image infrastructure;
17. no dependency modernization or unrelated feature expansion introduced by the Initial Phase 1 build;
18. current Supabase project/environment identity used by the implementation and whether evidence is against the correct approved environment;
19. repository hygiene/security regressions relevant to the verified surface;
20. regression impact on authentication, Transactions, Inventory, dashboard shell, existing routes, and business isolation;
21. the locked Verification Checklist item by item using `PASS`, `FAIL`, `FOLLOW-UP`, or `NOT APPLICABLE`.

If an item cannot be executed because evidence or environment access is unavailable, classify it accurately. Do not simulate a pass.

---

## 5. Evidence Rules

Distinguish clearly between:

- direct repository evidence;
- executed test evidence;
- read-only database/environment evidence;
- Founder runtime evidence;
- builder self-report;
- inference.

The Builder Completion Report is builder-authored evidence only and is not independent proof.

Canonical code may contain later approved work beyond the Lovable snapshot. Verify the actual canonical behavior without rolling approved later work back.

---

## 6. Authorized Actions

Claude Code may:

- fetch and fast-forward `main` after verifying repository identity;
- create/use only the authorized Stage 19 branch;
- inspect repository history and canonical files;
- run non-destructive local/static/build/test checks;
- perform approved read-only Supabase/environment inspection when access and governance permit;
- inspect schema, grants, policies, functions, metadata, and relevant environment identity read-only;
- create the mission-scoped Stage 19 verification report required by the canonical handover;
- create the required live reply at `communication/live/report1.140.md` as the concise repository communication response to this instruction;
- update the mission README, handover log, and decision log only where factually necessary to record Stage 19 status/handover;
- stage only exact authorized paths;
- commit with the approved Stage 19 commit message;
- push only the authorized mission branch;
- open or update a protected pull request to `main`;
- stop for Mission Control review.

Primary detailed Stage 19 deliverable:

`communication/missions/SB-P-1.11/claude-code/19-independent-verification-report.md`

Required live response:

`communication/live/report1.140.md`

The live response must point to the detailed mission-scoped report and summarize the final Stage 19 disposition, material findings, exact branch/commit/PR, changed files, evidence limitations, and next required gate.

---

## 7. Prohibited Actions

Claude Code shall not:

- modify application code;
- modify SQL migrations, schema, RLS, grants, database functions, or production data;
- apply migrations;
- fix verification findings inside Stage 19;
- modify Lovable projects/workspaces;
- perform further canonical transfer;
- publish or deploy;
- change custom domains;
- change dependencies or lockfiles;
- redefine Product Truth, Blueprint, EIS, Founder decisions, or locked package behavior;
- create the Stage 21 Evidence Package;
- create the Stage 22 Formal Completion Report;
- declare Stage 23 acceptance;
- perform Stage 24 documentation closure;
- self-merge;
- expose credentials or secrets.

A material `FAIL` must be preserved and returned to Mission Control for separately authorized Stage 20 corrective work.

---

## 8. Required Stage 19 Report Content

The detailed Stage 19 report must include:

- exact canonical base SHA reviewed;
- exact branch and pull request;
- complete verification scope and methods;
- commands/checks actually executed and factual results;
- environment identities actually inspected;
- Verification Checklist disposition item by item;
- separate `PASS`, `FAIL`, `FOLLOW-UP`, and `NOT APPLICABLE` findings;
- security/business-isolation/RLS assessment;
- nineteen-command boundary confirmation;
- regression findings;
- unresolved limitations and evidence gaps;
- whether any material blocking failure exists;
- exact changed-file scope of the verification PR;
- explicit confirmation that no implementation, migration, deployment, publication, Lovable mutation, or production mutation occurred.

Do not create a formal Completion Report during Stage 19.

---

## 9. Stop Conditions

STOP and report to Mission Control if:

- repository, remote, base, branch, or current canonical SHA is materially inconsistent with the authorized state;
- required intake records are absent, contradictory, or materially changed;
- working-tree state contains unrelated changes that cannot be safely separated;
- verification would require implementation or mutation;
- environment identity is unclear in a way that prevents a reliable conclusion;
- Product Truth or locked artifact authority is ambiguous;
- a material security or business-isolation failure is found and correction would be required;
- Git operations cannot remain within the authorized branch and exact-file scope.

Do not broaden the mission to resolve a stop condition.

---

## 10. Required Final Disposition

If one or more material blocking failures exist:

`STAGE 19 INDEPENDENT VERIFICATION — FAIL — STAGE 20 CORRECTIVE MISSION AUTHORIZATION REQUIRED`

If no material blocking failure remains:

`STAGE 19 INDEPENDENT VERIFICATION — PASS — READY FOR MISSION CONTROL REVIEW`

A PASS does not authorize Stage 21, Stage 22, Stage 23, Stage 24, deployment, release, or mission closure.

---

## 11. Communication Requirement

Reply through the approved repository communication channel only.

Create:

`communication/live/report1.140.md`

Do not reply with a new instruction number or overwrite any existing communication file.

After pushing the authorized Stage 19 branch and opening the protected PR, stop and wait for Mission Control review.
