# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-28 — STAGE 14 FOUNDER LOVABLE BRIEF RECONCILIATION

**Instruction ID:** instruction1.124  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Gate:** GC-28 — Stage 14 Founder Lovable Brief Reconciliation  
**Authorized By:** Founder / Mission Control  
**Executing Room:** Claude Code / Engineering  
**Mode:** DOCUMENT RECONCILIATION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Build Lock / Build Mode Authority:** NONE  
**Paste-Into-Lovable Authority:** NONE  
**Production Authority:** NONE

---

## 1. Mission Objective

Reconcile the existing SB-P-1.11 Founder Lovable Brief with the current approved and locked implementation package, current Founder decision record, and current Git state so that it can later undergo Mission Control Stage 14 review and authorization for Founder use.

This mission does not authorize use of the brief, pasting into Lovable, Lovable Plan Mode, Lovable Build Mode, implementation, deployment, or production.

Required completion report:

`communication/live/report1.133.md`

---

## 2. Entry Gate

Before any edit, synchronize to current merged `main` and verify:

- PR #282 is merged;
- current `main` contains merge commit `c97a65103797cd40a457e9d2454ad1ff1ac922dc` or a later commit containing it;
- `communication/live/report1.132.md` exists with final disposition `SB-P-1.11 D-023 FOUNDER DECISION-RECORD AMENDMENT — COMPLETE — MISSION CONTROL VERIFICATION REQUIRED`;
- the Founder Product Decision Record now contains the amended D-023 generated-SKU rule and D-024 consistency alignment;
- the three Stage 12 Version 1.2 package documents are `LOCKED — MISSION CONTROL ACCEPTED`;
- `communication/live/report1.126.md` records `LAMBDA PARSER EIS — APPROVED — LOCKED`;
- no later accepted Mission Control decision supersedes the package, SKU rule, command taxonomy, or Stage 14 prerequisites.

If any entry condition is absent, contradicted, or superseded, STOP and report the evidence gap.

---

## 3. Stage 14 Lifecycle Basis

Execute according to the approved SB-P Mission Lifecycle and Delivery Framework Stage 14:

- **Owner:** Claude Code;
- **Inputs:** approved package and actual Git state;
- **Output:** Founder Brief containing the exact Lovable instruction, prompt path, branch/pull requirements, expected output, Builder Completion Report path, and only necessary PowerShell commands;
- **Approval:** Mission Control authorizes use;
- **Handover:** Founder receives the exact approved instruction and files.

This GC-28 mission prepares the corrected Stage 14 document for review. It does not grant Stage 14 approval or use authority.

---

## 4. Authorized Files

Modify only:

`docs/implementation/SB-P-1.11/founder-lovable-brief.md`

Create only:

`communication/live/report1.133.md`

No other file may be created, modified, renamed, moved, or deleted.

---

## 5. Required Document Lifecycle State

The existing Founder Lovable Brief Version 1.0 was historically accepted and locked against the older package state.

GC-28 must preserve that history but create a new reconciled revision.

Required revised state:

- **Version:** 1.1;
- **Status:** `DRAFT — MISSION CONTROL REVIEW REQUIRED`;
- **Mission Control Acceptance:** `PENDING`;
- **Document Lock:** `NOT ACTIVE`;
- **Paste-Into-Lovable Authority:** `NONE`;
- **Lovable Plan Mode Authority:** `NONE`;
- **Lovable Build Mode Authority:** `NONE`;
- **Implementation Authority:** `NONE`;
- **Publishing / Deployment Authority:** `NONE`.

Do not carry Version 1.0 lock authority forward automatically.

Add an append-only change-history entry describing this Version 1.1 reconciliation and preserving the Version 1.0 historical lock.

---

## 6. Required Authority-Hierarchy Reconciliation

Update the Founder Brief so its live authority hierarchy reflects current repository truth.

At minimum:

1. Founder Product Decision Record must reference the GC-27-amended D-023/D-024 state.
2. Engineering Contract must reference **Version 1.2 — LOCKED — MISSION CONTROL ACCEPTED**.
3. Lovable Build Prompt must reference **Version 1.2 — LOCKED — MISSION CONTROL ACCEPTED**.
4. Verification Checklist must reference **Version 1.2 — LOCKED — MISSION CONTROL ACCEPTED**.
5. Canonical Lambda Parser EIS must be represented as the controlling parser-runtime/import-support architecture for CSV/XLSX parsing where applicable.
6. Later accepted corrections govern over earlier stale wording.

Do not reopen or reinterpret Product Truth.

---

## 7. Required Command-Taxonomy Correction

Remove the stale combined-command framing from the Founder Lovable Brief.

The current brief contains historical statements such as:

- `19 of the 28 locked commands`;
- `28-command surface`;
- any equivalent language that treats the broader function/RPC inventory as one locked Catalog-command total.

Replace that taxonomy with the current locked rule:

- **exactly 19 public Catalog commands; no twentieth public Catalog command**;
- scheduled-price functions, channel/pending-action functions, scheduler functions, parser-support helpers, and other broader phase-scoped functions/RPCs must remain separately classified;
- do not create a new combined numeric total and do not call those separate groups part of the 19-command Catalog boundary.

If the Founder Brief keeps an Initial Phase 1 section, describe the 19-command boundary accurately without saying `19 of 21` or `19 of 28` commands.

---

## 8. Preserve Phase Sequencing — Do Not Collapse Build Now Into Initial Phase 1

The locked package contains Build Now Product Truth that is implemented in governed phases.

Do not move later-phase work into the Initial Phase 1 Founder handoff merely because it is Build Now product scope.

Preserve the locked package's phase sequencing, including where applicable:

- initial Phase 1 owner-only dashboard Catalog foundation;
- later scheduled-price capability according to the locked package;
- Phase 2a permission-engine dependency before Manager/Employee expansion;
- Phase 2b CSV/XLSX import and external parser runtime/import-support architecture;
- Phase 3 governed conversational channels.

Where the current Founder Brief says a capability is not in the **initial Phase 1 implementation**, that may remain true if consistent with the Version 1.2 package. Do not rewrite such sequencing as a rejection of Build Now Product Truth.

---

## 9. Required Founder Workflow Reconciliation Coverage

The reconciled Founder Brief must accurately reflect the locked Founder Workflow obligations without prematurely moving them into the wrong build phase.

Ensure the brief clearly preserves, at the correct phase/gate:

- Inventory/Opening Stock CSV/XLSX bulk onboarding;
- downloadable Catalog and Inventory/Opening Stock templates;
- generated business-scoped SKU when merchant SKU is absent;
- one canonical SKU rule across manual, bulk, text, voice, photo, and future governed creation channels;
- Inventory-first orchestration: resolve/create Catalog → create Inventory entity → governed link → Opening Stock movement only after the link;
- D-047 and D-068 safeguards;
- Phase 1 Owner-only import posture until later permission expansion is separately authorized.

Do not invent implementation detail beyond the locked package.

---

## 10. Required Lambda Parser Boundary

For CSV/XLSX import references, preserve the locked parser architecture exactly:

- AWS Lambda is the narrow external parser runtime;
- private transient S3 ingress;
- IAM Roles Anywhere credential path;
- AWS_IAM Lambda Function URL;
- parser support state is not Product Truth;
- Product Truth remains behind the existing 19 public Catalog commands;
- no twentieth Catalog command;
- no direct parser-to-Product-Truth mutation;
- Supabase lease/helper privilege boundaries remain subordinate to the canonical locked Lambda Parser EIS.

The Founder Brief should explain only what the Founder needs for a correct handoff. Do not duplicate the entire EIS.

---

## 11. Exact Founder Handoff Content Required

The Version 1.1 draft must contain, clearly and unambiguously:

1. the exact Lovable instruction the Founder will later use;
2. the exact locked Lovable Build Prompt path;
3. the required implementation branch / PR workflow;
4. the expected builder output and changed-file reporting;
5. the Builder Completion Report path expected after implementation;
6. only the necessary PowerShell commands the Founder may need;
7. explicit stop conditions for any mismatch in branch, package version, authority, or scope;
8. explicit statement that the current draft itself is **not authorized for use** until Mission Control separately approves Stage 14.

Do not authorize implementation inside this document.

---

## 12. Repository Hygiene Boundary

Repository hygiene remains incomplete and mandatory before implementation authorization / Build.

The Founder Brief may state this prerequisite, but GC-28 must not perform hygiene remediation.

Do not modify `.gitignore`, `.env`, `.env.test`, `.claude/`, `gitleaks-report.json`, tracked secret-history artifacts, or any hygiene-related file.

Do not claim repository hygiene is complete.

---

## 13. Blueprint Lifecycle Path

The locked Blueprint remaining under the `active/` path is non-blocking housekeeping only.

Do not move or modify the Blueprint in this mission.

Do not misclassify this path issue as a Build blocker.

---

## 14. Mandatory Exclusions

Do not:

- modify the three locked Version 1.2 package documents;
- modify the Founder Product Decision Record;
- modify the Founder Workflow Reconciliation Record;
- modify the Product Blueprint or EIS;
- modify canonical Lambda Parser EIS records;
- implement application code;
- create or execute SQL/migrations;
- mutate Supabase, RLS, grants, AWS, S3, IAM, Lovable, dependencies, infrastructure, deployment, or production state;
- perform repository hygiene remediation;
- move the Blueprint lifecycle path;
- grant paste-into-Lovable authority;
- grant Lovable Plan Mode or Build Mode authority;
- grant implementation authorization;
- publish or deploy.

---

## 15. Repository Discipline

1. Start from current merged `main`.
2. Fetch and fast-forward synchronize before work.
3. Use a new protected mission branch.
4. Modify/create only the two authorized paths.
5. Do not use `git add .`.
6. Preserve unrelated local modifications and untracked files.
7. Run the repository Markdown quality gate on both files.
8. Run whitespace and secret-pattern checks.
9. Confirm all locked package, Founder decision, Blueprint/EIS, code, SQL, infrastructure, and hygiene scopes remain unchanged.
10. Open a PR for Mission Control verification.
11. Do not approve or merge your own PR.

---

## 16. Required Completion Report

Create:

`communication/live/report1.133.md`

Include:

- exact starting merged `main` SHA;
- branch name;
- PR number and URL;
- final branch commit SHA reported externally if self-hash cannot be embedded;
- exact files changed;
- Version 1.0 → Version 1.1 lifecycle/status changes;
- exact stale 28/21 command references removed or reclassified;
- confirmation of the exact 19 public Catalog-command boundary and no combined numeric total;
- confirmation current Version 1.2 package references are correct;
- confirmation D-023/D-024 current Founder decision state is represented correctly;
- confirmation Founder Workflow obligations are preserved at the correct phase/gate;
- confirmation Lambda Parser boundary is represented correctly without Product Truth mutation expansion;
- confirmation required Stage 14 Founder handoff fields are present;
- confirmation repository hygiene remains unresolved and was not touched;
- confirmation Blueprint path issue remains non-blocking and was not touched;
- confirmation no implementation/use authority was granted;
- quality-gate, secret-scan, and whitespace results.

Required final disposition:

`SB-P-1.11 FOUNDER LOVABLE BRIEF VERSION 1.1 RECONCILIATION — READY FOR MISSION CONTROL STAGE 14 REVIEW`

---

## 17. Next Gate

After human review and merge of the GC-28 reconciliation PR, Mission Control must perform a separate Stage 14 review of the Founder Lovable Brief.

A positive Stage 14 review may make the brief eligible for a separate authorization-for-use action.

Repository hygiene must still be completed and verified before any implementation authorization / Build.

No implementation, paste-into-Lovable, Lovable Plan Mode, Lovable Build Mode, publishing, deployment, or production authority is implied by GC-28.

---

## 18. Mission Control Decision

`SB-P-1.11-GC-28 — STAGE 14 FOUNDER LOVABLE BRIEF RECONCILIATION AUTHORIZED`
