# SMART BUSINESS MISSION CONTROL

# SB-GOV-EIS-1 — STANDALONE EIS RULE AND SB-P-1.11 HISTORY RECOVERY

**Mission ID:** `SB-GOV-EIS-1`

**Mission Name:** Standalone EIS Rule and SB-P-1.11 History Recovery

**Mission Status:** AUTHORIZED AFTER HUMAN MERGE

**Authorized By:** Mission Control

**Implementation Authority:** NONE

---

## 1. Permanent Mission Rule

The following rule is adopted as a permanent Smart Business engineering-governance requirement:

> A locked Engineering Implementation Specification must contain every detail required to build its authorized scope, or it must explicitly include and verify every required dependency in the repository.

A document must not be locked as implementation-ready when it says material sections are "unchanged from" an earlier version unless that earlier version is:

1. present in the canonical repository;
2. immutable or otherwise permanently addressable;
3. explicitly linked by commit or durable path;
4. verified as complete and readable;
5. included in the implementation-readiness review.

A delta-only EIS must never be used as the sole authority for Build Mode.

Before any future Build Mode authorization, Mission Control must verify:

> Can a new engineer implement the authorized scope from the canonical repository alone, without relying on private chat history, local drafts, temporary branches, or an unstated earlier version?

If the answer is no, Build Mode must not be authorized.

---

## 2. Triggering Finding

During SB-P-1.11 controlled implementation preparation, Lovable correctly stopped because the locked EIS Version 2.2 referred repeatedly to content "Unchanged from Version 2.0," while the current repository path did not expose Version 2.0 as a separate canonical document.

A deeper Git-history review now confirms that Version 2.0 was not never-created. It existed in repository history.

Recovered evidence:

- Version 2.0 commit:
  `0e16a7de5d51a1e49a0d78fe5a010ae617220a61`
- Commit title:
  `Refine SB-P-1.11 EIS to resolve Stage 10 review findings (v2.0) (#53)`
- Historical file path:
  `docs/phase-1-mission-blueprint/implementation/SB-P-1.11-EIS.md`
- Historical file metadata explicitly identifies:
  `Document Version | 2.0`

The same path was later updated to Version 2.1 and Version 2.2 rather than preserving each version as a separately addressable canonical file.

The Version 2.0-to-Version 2.1 comparison records a substantial replacement of the EIS file:

- additions: 317
- deletions: 614

This supports the finding that later revisions converted the canonical file into a revision-dependent document while relying on prior-version content still available only through Git history.

This instruction does not assign personal blame. The verified failure is a document-lifecycle and implementation-readiness control failure.

---

## 3. Recovery Objective

Recover and preserve the complete SB-P-1.11 EIS lineage, determine exactly how implementation-required content became history-only, and prepare one standalone consolidated EIS after the current engineering contract is finalized.

The recovery must preserve the current locked Product Truth and must not alter the ongoing SB-P-1.11-SR2 Lovable Plan Mode contract-correction mission.

---

## 4. Authorized Repository Forensics

The executing room is authorized to perform read-only investigation across:

- commit history;
- merged pull requests;
- changed-file patches;
- branches still present;
- tags, if any;
- communication instructions and reports;
- all historical versions of `SB-P-1.11-EIS.md`;
- lock authorization and lock reports;
- Engineering Contract, Build Prompt, Verification Checklist, and Founder Brief references to the EIS.

The investigation must identify:

1. the first complete draft version;
2. the exact Version 2.0 content and commit;
3. the exact Version 2.1 changes and commit;
4. the exact Version 2.2 changes and lock commit;
5. which implementation-required sections were removed, shortened, or replaced with "Unchanged from Version 2.0" references;
6. whether any lock or review report verified standalone completeness;
7. whether any separate file, tag, branch, attachment, or report preserved the full Version 2.0 content;
8. the precise point at which the canonical path stopped being standalone;
9. whether later implementation documents copied, summarized, or omitted the lost detail;
10. the smallest safe recovery method.

---

## 5. Preliminary Verified History

Mission Control has already verified:

### Initial EIS draft

- commit: `15fb52672c7a63dde2986087cc69c035995c0477`
- PR: `#45`
- title: `Create SB-P-1.11 Engineering Implementation Specification (draft)`

### Version 2.0

- commit: `0e16a7de5d51a1e49a0d78fe5a010ae617220a61`
- PR: `#53`
- title: `Refine SB-P-1.11 EIS to resolve Stage 10 review findings (v2.0)`
- historical file metadata confirms Document Version 2.0

### Version 2.1

- commit: `3d99785fe8fb154248186569305ded6d5ba5e7b1`
- PR: `#61`
- title: `Refine SB-P-1.11 EIS to resolve MC-VRF-001 through MC-VRF-010 (v2.1)`

### Version 2.2 and lock

- correction commit: `adb4fcdc9825a7f7804fba01d4995ea5f3725ae7`
- lock authorization commit: `31b01f81ccb627bb40931abeadbe0253e062f4f7`
- lock commit: `58b7679402555d36edd0aeadcead8e7f48e1e058`
- lock PR: `#69`

The investigation must verify and expand this timeline rather than assuming it is complete.

---

## 6. Required Recovery Deliverables

Prepare one forensic report suitable for:

`communication/live/report1.38.md`

The report must contain:

1. executive finding;
2. complete EIS version timeline;
3. commit and PR evidence;
4. section-by-section comparison of Versions 2.0, 2.1, and 2.2;
5. identification of content that became history-only;
6. explanation of the exact document-lifecycle failure supported by evidence;
7. confirmation whether the missing document is recoverable;
8. canonical recovery recommendation;
9. standalone EIS consolidation plan;
10. prevention controls for future missions;
11. impact assessment on current SB-P-1.11 work;
12. confirmation that no implementation or Product Truth change occurred.

Conclude with exactly one:

`EIS HISTORY RECOVERED — STANDALONE CONSOLIDATION REQUIRED`

or

`EIS HISTORY INCOMPLETE — ADDITIONAL RECOVERY REQUIRED`

---

## 7. Standalone Consolidation Timing

Do not replace the locked EIS while the current SB-P-1.11-SR2 contract-correction and final specialist-acceptance mission is active.

After the current engineering contract is finalized and accepted, Mission Control must authorize a separate documentation-only consolidation mission to create one complete standalone SB-P-1.11 EIS.

The consolidated EIS must:

- preserve all locked Product Truth;
- preserve accepted engineering corrections;
- include every implementation-required table, type, function, permission, RLS, lifecycle, read, idempotency, provenance, and verification contract;
- remove dependency on unstated prior-version text;
- include a traceable version-history appendix;
- identify superseded historical commits without deleting history;
- undergo standalone implementation-readiness verification before lock.

---

## 8. Authority Boundary

This mission does not authorize:

- application changes;
- SQL or migrations;
- Supabase changes;
- Lovable changes;
- Build Mode;
- implementation;
- Product Truth changes;
- modification of the current locked EIS;
- publication or deployment;
- interruption of SB-P-1.11-SR2.

The forensic work is read-only until a separate protected-branch report is prepared for human review.
