# SMART BUSINESS MISSION CONTROL

# SB-GOV-EIS-1A — MISSING-DOCUMENT DEEP SEARCH PROTOCOL

**Protocol ID:** `SB-GOV-EIS-1A`

**Parent Mission:** `SB-GOV-EIS-1`

**Status:** ACTIVE AFTER HUMAN MERGE

**Responsible Authority:** Mission Control

**Implementation Authority:** NONE

---

## 1. Permanent Responsibility

Mission Control owns the responsibility for verifying whether a required Smart Business document is genuinely missing.

No specialist room, builder, reviewer, or Mission Control response may confirm that a document is missing merely because it is absent from the current repository tree, current branch, expected folder, or current canonical path.

Before Mission Control states that a document is missing, unavailable, never created, or irrecoverable, Mission Control must complete the deep repository search defined in this protocol.

---

## 2. Mandatory Trigger

This protocol is mandatory whenever:

- a referenced document cannot be found at its expected current path;
- a specification refers to an earlier version that is not visible in the current tree;
- a room reports that a source, contract, report, instruction, attachment, or implementation artifact is missing;
- implementation is blocked because a required source appears absent;
- Mission Control is considering reconstructing content believed to be missing;
- any statement would characterize a document as never created, deleted, lost, absent, or irrecoverable.

The trigger applies to one document or any group of related documents.

---

## 3. Required Deep Repository Search

Mission Control must search, as applicable:

1. the current default branch and current canonical paths;
2. repository-wide file content and filename search;
3. commit history using titles, version numbers, mission IDs, document names, section text, and distinctive phrases;
4. historical versions of the expected file path at relevant commits;
5. merged, closed, and open pull requests;
6. pull-request changed-file lists, patches, descriptions, comments, and review threads;
7. active and historical branches still accessible;
8. tags and releases, when present;
9. renamed or moved files;
10. communication instructions, reports, completion evidence, and lock reports;
11. references copied into Engineering Contracts, Build Prompts, Verification Checklists, Founder Briefs, README files, or governance sources;
12. repository artifacts and workflow outputs when the repository indicates that a document may have been generated or attached there;
13. exact and approximate searches for earlier version labels, including draft, refined, accepted, locked, superseded, and archived variants.

Mission Control must distinguish between:

- absent from the current tree;
- absent from the expected path;
- recoverable from Git history;
- preserved in another repository location;
- preserved only in a pull request, branch, report, attachment, or artifact;
- created but later overwritten at the same path;
- genuinely not found after the mandatory search;
- found but incomplete or unusable.

---

## 4. Required Evidence Record

Before confirming that a document is missing, Mission Control must record:

- the document or document set searched for;
- known names, versions, mission IDs, and likely paths;
- search surfaces examined;
- queries or identifiers used;
- relevant commits, PRs, branches, paths, tags, reports, or artifacts found;
- whether the content is complete, partial, superseded, or merely referenced;
- the final evidence-based classification;
- the smallest safe next action.

A statement of “missing” without this evidence is not an accepted Mission Control finding.

---

## 5. Approved Finding Vocabulary

Mission Control must use precise language:

### Current-tree absence

> The document is not present in the current repository tree at the expected canonical path. Deep repository search is pending.

### History recovery

> The document is absent from the current tree but recoverable from repository history at the identified commit, PR, branch, or artifact.

### Partial recovery

> The document is partially recoverable, but required content remains unverified or unavailable.

### Confirmed missing after search

> Mission Control completed the mandatory deep repository search and did not find a complete recoverable copy in the inspected repository surfaces.

### Irrecoverable

Mission Control must not use the word `irrecoverable` unless the evidence supports more than repository absence and all authorized recovery locations have been checked.

---

## 6. Build and Reconstruction Control

If a required document appears missing:

- Build Mode remains stopped only when the missing material is genuinely required for safe implementation.
- Mission Control must search before authorizing reconstruction.
- Recoverable historical content must be examined before anyone recreates it from memory or inference.
- Historical recovery does not automatically make an old draft authoritative.
- Any recovered version must be reconciled with later accepted corrections and the current source hierarchy.
- Product Truth must not be reconstructed from engineering inference.

---

## 7. Accountability

Mission Control is accountable for initiating and completing this verification.

Specialist rooms may report an apparent absence, but Mission Control must validate the finding before treating it as confirmed.

Builders such as Lovable may stop and report that an implementation dependency is unavailable in the current accessible context. That report is a trigger for Mission Control investigation, not final proof that the source never existed.

---

## 8. Application to SB-P-1.11

The SB-P-1.11 EIS incident is the precedent for this protocol:

- Version 2.0 was absent from the current repository tree as a standalone document;
- an initial limited search led to the assumption that it was missing;
- a deeper commit-history search found Version 2.0 at commit `0e16a7de5d51a1e49a0d78fe5a010ae617220a61`, PR `#53`;
- the correct classification is therefore `absent from current tree but recoverable from Git history`.

Mission Control must use this corrected classification in all future references.

---

## 9. Authority Boundary

This protocol authorizes repository investigation and evidence recording only.

It does not authorize:

- changing Product Truth;
- changing a locked document;
- restoring or consolidating a document without a separate mission;
- implementation;
- SQL or migrations;
- Supabase changes;
- Lovable Build Mode;
- publishing or deployment.
