# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-37 — Stage 19 Independent Post-Build Verification Authorization

**Mission:** `SB-P-1.11 — Product Catalog & Pricing`  
**Stage:** `19 — Claude Code Independent Verification`  
**Status:** `AUTHORIZATION PENDING HUMAN MERGE`  
**Authorized By:** Mission Control, subject to protected-branch human merge  
**Stage Owner:** Claude Code  
**Implementation Authority:** NONE  
**Lovable Build Authority:** NONE  
**Canonical Transfer Authority:** NONE  
**Deployment / Publication Authority:** NONE  
**Evidence Package Authority:** NONE — remains Stage 21  
**Formal Completion Report Authority:** NONE — remains Stage 22  
**Mission Acceptance Authority:** NONE

---

## 1. Purpose

Authorize the Source 18 Stage 19 independent post-build verification gate for the completed and canonically reported SB-P-1.11 Initial Phase 1 Catalog Foundation implementation.

This stage exists to determine independently whether the implemented/canonical state satisfies the locked Product Blueprint, locked EIS, locked implementation package, Founder runtime findings, and approved verification checklist.

The Builder Completion Report is builder-authored evidence only and must not be treated as proof.

---

## 2. Source 18 Lifecycle Basis

Under Source 18:

- Stage 16 produces the Lovable Builder Completion Report with status `IMPLEMENTATION REPORTED — VERIFICATION PENDING`;
- Stage 17 records Founder runtime findings;
- Stage 18 is Mission Control runtime review;
- Stage 19 belongs to Claude Code and requires independent verification;
- Stage 21 Evidence Package and Stage 22 Formal Completion Report are prohibited until Stage 19 has completed and Mission Control has reviewed the result;
- Claude Code cannot approve its own verification or mark formal acceptance.

The mandatory non-bypassable order remains active.

---

## 3. Entry-Gate Evidence

The following state is established before this authorization:

1. Founder runtime verification was completed with no material runtime blocker reported.
2. Mission Control Stage 18 runtime review passed.
3. Canonical-transfer reconciliation determined application code was a no-op because canonical `main` already contained identical or later approved/superseding Catalog implementation.
4. The Builder Completion Report was mechanically canonicalized without content drift.
5. PR #297 merged that canonicalization into `main`.
6. Canonical `main` entry SHA for this Stage 19 authorization is:

`31a3b9d767973afe65906e738a31d68fa04d06fb`

---

## 4. Mandatory Inputs for Claude Code

Claude Code must synchronize and read the complete current canonical state, including at minimum:

### Governance and lifecycle

- `merge/active/README.md`
- `merge/active/00_Lighthouse_Constitution.md`
- `merge/active/01_Smart_Business_Master_System_Manifesto.md`
- `merge/active/02_Supabase_Architecture_Framework.md`
- `merge/active/03_Lovable_Build_Framework.md`
- `merge/active/11_Smart_Business_Product_Truth_Map.md`
- `merge/active/12_Product_Execution_and_Release_Framework.md`
- `merge/active/17_AI_Operations_Manual.md`
- `merge/active/18_SB-P_Mission_Lifecycle_and_Delivery_Framework.md`
- `merge/active/P00_Operational_Profiles.md`

### Locked SB-P-1.11 authorities

- locked Product Blueprint for `SB-P-1.11`;
- locked EIS for `SB-P-1.11`;
- `docs/implementation/SB-P-1.11/engineering-contract.md`;
- `docs/implementation/SB-P-1.11/lovable-build-prompt.md`;
- `docs/implementation/SB-P-1.11/verification-checklist.md`;
- `docs/implementation/SB-P-1.11/founder-lovable-brief.md`;
- Founder Product Decision Record and later accepted amendments/corrections applicable to Initial Phase 1.

### Post-build evidence

- `docs/implementation/SB-P-1.11/lovable-build-completion-report.md`;
- `communication/missions/SB-P-1.11/mission-control/18-runtime-review.md`;
- `communication/live/report1.138.md` — canonical-transfer conflict reconciliation;
- `communication/live/report1.139.md` — Builder Completion Report canonicalization;
- current canonical application code, schema/migrations, generated types, tests, repository history, and accessible environment evidence relevant to Initial Phase 1.

If a named path has moved under an approved lifecycle action, Claude Code must identify the current canonical path from repository evidence rather than guessing.

---

## 5. Verification Scope

Claude Code shall independently verify the current canonical implementation against the locked Initial Phase 1 scope.

At minimum, verify and classify:

1. exactly nineteen authorized public Catalog commands, with no twentieth public Catalog command;
2. command signatures and result behavior against the locked engineering contract and accepted specialist corrections;
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
14. no CSV/XLSX bulk-import implementation in Initial Phase 1;
15. no WhatsApp/voice/photo/channel execution or scheduler activation in Initial Phase 1;
16. no product-image upload infrastructure beyond the approved locked boundary;
17. no dependency modernization or unrelated feature expansion introduced by the authorized Initial Phase 1 build;
18. current Supabase project/environment identity used by the implementation and whether verification evidence is against the correct approved environment;
19. repository hygiene/security regressions relevant to the changed/verified surface;
20. regression impact on authentication, Transactions, Inventory, dashboard shell, existing routes, and business isolation;
21. the locked Verification Checklist, item by item, using `PASS`, `FAIL`, `FOLLOW-UP`, or `NOT APPLICABLE`.

Where a checklist item cannot be executed because the required environment/evidence is unavailable, classify it accurately; do not simulate a pass.

---

## 6. Evidence Rules

Claude Code must distinguish:

- direct repository evidence;
- executed test evidence;
- read-only database/environment evidence;
- Founder runtime evidence;
- builder self-report;
- inference.

Do not treat Lovable's Builder Completion Report as independent proof.

Do not treat the fact that canonical application code is newer than the Lovable snapshot as automatic proof of compliance. Verify the actual canonical behavior and implementation state.

If canonical code contains later approved work, verify Initial Phase 1 obligations without rolling that later work back and explicitly identify any later-scope behavior that materially affects the Stage 19 conclusion.

---

## 7. Allowed Actions

Claude Code may:

- inspect repository history and current canonical files;
- run non-destructive local/static/build/test checks;
- use approved read-only inspection against relevant environments when credentials/access already exist and governance permits it;
- inspect Supabase schema, grants, policies, functions, and metadata read-only;
- create exactly the Stage 19 verification report and supporting stage-report metadata required by Source 18;
- open a protected mission-branch pull request containing only authorized verification artifacts.

Claude Code must use least privilege and must not expose credential values.

---

## 8. Prohibited Actions

Claude Code shall not:

- modify application code as part of verification;
- modify SQL migrations, schema, RLS, grants, database functions, or production data;
- apply migrations;
- fix findings inside the Stage 19 verification mission;
- modify Lovable projects/workspaces;
- perform further canonical transfer;
- publish or deploy;
- change custom domains;
- change dependencies or lockfiles;
- redefine Product Truth, Blueprint, EIS, Founder decisions, or locked package behavior;
- create the Stage 21 Evidence Package;
- create the Stage 22 Formal Completion Report;
- declare Stage 23 acceptance;
- self-merge.

A material `FAIL` must be returned to Mission Control for a separately authorized Stage 20 corrective mission.

---

## 9. Required Output

Primary Stage 19 deliverable:

`communication/missions/SB-P-1.11/claude-code/19-independent-verification-report.md`

The report must include:

- exact canonical base SHA reviewed;
- exact branch and PR;
- complete verification scope and methods;
- executed commands/checks and their factual results;
- environment identities actually inspected;
- verification-checklist disposition item by item;
- separate `PASS`, `FAIL`, `FOLLOW-UP`, `NOT APPLICABLE` findings;
- security/business-isolation/RLS assessment;
- nineteen-command boundary confirmation;
- regression findings;
- unresolved limitations and evidence gaps;
- whether any material blocking failure exists;
- exact changed-file scope of the verification PR;
- explicit statement that no implementation, migration, deployment, publication, or production mutation occurred.

Do not create a formal Completion Report during Stage 19.

---

## 10. Completion and Handover

Stage 19 does not end because tests run or a report exists.

Claude Code shall stop after submitting the independent verification report for Mission Control review.

If one or more material `FAIL` findings exist:

`NEXT GATE: STAGE 20 CORRECTIVE MISSION — MISSION CONTROL AUTHORIZATION REQUIRED`

If no material blocking failure remains:

`NEXT GATE: MISSION CONTROL REVIEW OF STAGE 19 — STAGE 21/22 AUTHORITY NOT YET GRANTED`

No Evidence Package, Formal Completion Report, acceptance, documentation closure, deployment, or release authority is created by this authorization.

---

## 11. Mission Control Disposition

Upon human merge of the protected authorization PR containing this file:

`SB-P-1.11 STAGE 19 CLAUDE CODE INDEPENDENT POST-BUILD VERIFICATION — AUTHORIZED`

Until that merge:

`STAGE 19 EXECUTION — NOT YET AUTHORIZED`
