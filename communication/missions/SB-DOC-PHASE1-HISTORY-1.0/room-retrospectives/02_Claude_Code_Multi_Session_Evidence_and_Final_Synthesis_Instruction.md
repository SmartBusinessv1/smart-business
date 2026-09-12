# SMART BUSINESS MISSION CONTROL

# Claude Code Multi-Session Evidence Capture and Final Retrospective Instruction

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`  
**Purpose:** Preserve institutional learning distributed across multiple materially important Claude Code chat sessions without creating competing final retrospectives.  
**Authority:** Founder / Smart Business Mission Control  
**Status:** `ACTIVE — SUPERSEDES SECTION 15 OF 01_Mission_Control_Retrospective_Dispatch_Pack.md`  
**Boundary:** Documentation and institutional-memory capture only. No Product Mission start. No product/runtime/schema/deployment changes.

---

## 1. Why Claude Code requires a different capture model

Smart Business work was performed across multiple Claude Code chat sessions.

A later Claude Code session can inspect repository history, but it does not necessarily possess the full conversational judgement, troubleshooting path, discarded assumptions, corrections, and local reasoning that existed in earlier sessions.

Using only the latest Claude Code session would therefore risk recreating the same continuity gap this historical mission exists to close.

At the same time, asking every Claude Code session to independently create the official ten-section retrospective would create:

- duplication;
- conflicting conclusions;
- repeated repository claims;
- merge conflicts;
- unnecessary Founder review load;
- multiple files competing for authority.

Therefore Claude Code uses a two-layer model:

> **Materially important Claude Code sessions contribute evidence. One designated final Claude Code session synthesizes the official Claude Code retrospective.**

---

## 2. Which Claude Code sessions must participate

Do not send the extraction instruction to every trivial or disposable Claude Code chat.

Include Claude Code sessions that materially contributed to one or more of:

- architecture;
- engineering implementation;
- database/schema/RLS/RPC work;
- security or IAM correction;
- testing or verification;
- production synchronization or deployment diagnosis;
- incident/debugging work;
- parser/import/Lambda work;
- mission planning or EIS work;
- independent build-plan review;
- Product Truth or UX anti-drift correction;
- important failure discovery;
- important engineering or operational judgement that may not be fully recoverable from Git history alone.

If two sessions are substantially duplicative, Mission Control may designate only the one containing unique evidence.

---

# PART A — INSTRUCTION FOR EACH MATERIALLY IMPORTANT PAST CLAUDE CODE SESSION

## 3. Purpose of a session-evidence contribution

Each earlier/material Claude Code session must review **its own Smart Business conversation history** and extract only the institutional knowledge genuinely supported by that session.

It is an evidence contributor, not the final retrospective author.

It must not attempt to reconcile all other Claude Code sessions or create the official Claude Code `01_Retrospective.md`.

---

## 4. Repository destination for session evidence

Each contributing session creates exactly one evidence file under:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-code/session-evidence/`

Use a descriptive filename based on the session's actual purpose, for example:

- `01_Early_Engineering_and_Architecture.md`
- `02_SB-P-1.10_1.11_Implementation.md`
- `03_Production_Sync_and_Runtime_Correction.md`
- `04_Security_or_Parser_Work.md`
- `05_Historical_Build_Plan_and_UX_Review.md`

These are examples only. Do not invent a misleading label merely to match the examples.

If Mission Control has assigned a filename, use that exact filename.

---

## 5. Ready-to-paste instruction for each past/material Claude Code session

Pull the latest merged `main` from `SmartBusinessv1/smart-business`.

Read first:

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/00_Mission_Control_Institutional_Learning_Capture_Protocol.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/02_Claude_Code_Multi_Session_Evidence_and_Final_Synthesis_Instruction.md`
- relevant repository evidence for the work performed in this Claude Code session.

Review the complete Smart Business conversation history available **inside this Claude Code session only**, from its beginning through its end/current point.

Create one session-evidence file at the Mission Control-assigned path under:

`communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-code/session-evidence/`

Do **not** create:

- `claude-code/01_Retrospective.md`
- `claude-code/02_Completion_Report.md`

Those belong only to the designated final Claude Code synthesis session.

Structure the session-evidence file with these sections:

### 1. Session Scope

State what this session actually worked on, including mission IDs, PRs, systems, repositories, environments, or incidents where known.

### 2. Unique Lessons Learned

Capture lessons that arose in this session, especially mistakes, false assumptions, edge cases, corrections, security/data-integrity issues, deployment/runtime discoveries, or engineering practices worth preserving.

### 3. Capabilities Proven or Acquired

Record only capabilities actually implemented, verified, or operationally demonstrated in this session. Clearly label whether each capability was:

- production;
- canonical repository only;
- non-production/prototype;
- documentation/governance/process capability.

Do not count plans or specifications as acquired capability.

### 4. Tools and Technical Patterns Used

Record tools, frameworks, APIs, scripts, database patterns, CI/testing mechanisms, debugging approaches, or engineering patterns materially used in this session.

### 5. Mistakes / Failure Modes / Do-Not-Repeat Items

Record shortcuts, stale assumptions, context failures, repository mistakes, environment confusion, security gaps, or operational failures future Claude Code sessions must avoid.

### 6. Corrections and Current Truth

Where this session contains an old assumption later corrected during the same session, record the correction.

If you know a statement from this session was superseded later but cannot prove the current state from available evidence, label it `HISTORICAL — REQUIRES FINAL SYNTHESIS RECONCILIATION` rather than guessing.

### 7. Evidence Pointers

Point to merged PRs, commits, migrations, repository paths, tests, reports, runtime evidence, project IDs, or other durable evidence generated or verified by this session.

### 8. What the Final Claude Code Synthesizer Must Not Miss

List the session's genuinely unique judgement or continuity information that might be lost if the final synthesis relied only on Git history.

### 9. Residual Risks / Unresolved Questions

Only items that were genuinely unresolved at the end of this session. Do not reopen decisions you know were later settled.

### 10. Session Evidence Boundary

Confirm:

- this is session-level evidence, not the official Claude Code retrospective;
- no Product Mission was started under this retrospective instruction;
- no runtime/product/schema/deployment implementation was performed under this retrospective instruction.

Follow protected-main workflow:

`pull latest main → branch → write → self-review → commit → push → PR → CI → stop`

Do not self-merge.

Return the PR number, branch, commit, CI status and evidence filename to Mission Control.

---

## 6. Session evidence review rule

Mission Control should review each Claude Code session-evidence PR before merge.

Check that:

- the file is genuinely session-specific;
- it does not pretend to know other sessions' private conversation history;
- capability claims are evidence-backed;
- plans are not mislabeled as implemented capability;
- old state is not presented as current truth without verification;
- it does not create a competing final retrospective;
- it contains unique institutional value worth carrying forward.

Once accepted, merge the session-evidence PR before starting the final Claude Code synthesis.

---

# PART B — INSTRUCTION FOR THE DESIGNATED FINAL CLAUDE CODE SYNTHESIS SESSION

## 7. Preconditions

Do not start the final Claude Code retrospective until:

1. all materially important Claude Code session-evidence files have been merged or explicitly dispositioned unavailable/non-material by Mission Control;
2. the final synthesis session has pulled the latest `main` containing those files;
3. Mission Control explicitly designates this Claude Code session as the final Claude Code retrospective author.

---

## 8. Ready-to-paste final Claude Code synthesis hydration instruction

Pull the latest merged `main` from `SmartBusinessv1/smart-business`.

You are the **designated final Claude Code synthesis session** for the Phase 1 Institutional Learning Capture.

Read first:

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/00_Mission_Control_Institutional_Learning_Capture_Protocol.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/02_Claude_Code_Multi_Session_Evidence_and_Final_Synthesis_Instruction.md`
- every merged file under `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-code/session-evidence/`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md`
- relevant completed mission records, current repository architecture, tests, migrations, CI, and current evidence necessary to reconcile old session claims.

Also review the complete Smart Business conversation history available in **this final Claude Code session**.

Now synthesize the single official Claude Code institutional retrospective required by the merged protocol.

Create:

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-code/01_Retrospective.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/claude-code/02_Completion_Report.md`

Use the exact ten mandatory sections from the Institutional Learning Capture Protocol.

The synthesis must reconcile, deduplicate and clearly distinguish:

- current truth;
- historical/superseded state;
- mistake/failure mode;
- correction/lesson;
- capability proven;
- recommendation not yet adopted;
- genuine unresolved risk or Founder/Mission Control decision.

In addition to the mandatory ten sections, explicitly cover:

- the value and limits of Claude Code as an independent repo-grounded engineering counterweight;
- cases where Claude Code correctly challenged Mission Control or earlier assumptions;
- cases where Claude Code's own earlier analysis later required correction;
- lessons from mission granularity, Source 18 interpretation and authority boundaries;
- schema/RPC/RLS/idempotency/audit patterns learned across sessions;
- CI/build/test/security gaps and improvements discovered;
- Catalog → Product & Price Master reconciliation and terminology lessons;
- native Conversation versus WhatsApp architectural separation;
- UX anti-drift review and Founder Runtime Experience Verification lessons;
- canonical repository versus delivery repository divergence and production-sync lessons;
- parser/import/Lambda lessons where represented in session evidence;
- how Claude Code should validate repository branch/base/head, runtime evidence and current architecture before acting;
- when Claude Code should challenge a plan, request evidence, stop, or defer to Founder/Mission Control authority;
- how future Claude Code sessions should use prior session evidence without treating old chat history as current authority.

Do not simply concatenate the session-evidence files.

Resolve contradictions using this authority/evidence order:

**current Founder direction / canonical Product Truth / merged current repository and verified runtime truth → accepted Mission Control decisions → current durable mission records → session evidence → historical inference**.

If two historical sessions conflict and current evidence cannot resolve the conflict, surface it explicitly instead of choosing silently.

The final `02_Completion_Report.md` must state:

1. all merged Claude Code session-evidence files reviewed;
2. current repository/evidence reviewed;
3. major cross-session contradictions resolved;
4. superseded assumptions identified;
5. residual risks/questions;
6. branch;
7. commit;
8. PR;
9. CI result;
10. confirmation that no Product Mission or implementation was performed under retrospective authority.

Follow protected-main workflow:

`pull latest main → branch → write → self-review → commit → push → PR → CI → stop`

Do not self-merge.

Return control to Mission Control after reporting the PR.

---

## 9. Authority rule

The final Claude Code retrospective is an institutional-memory synthesis, not a new engineering specification and not a governance source.

It may:

- surface mistakes;
- reconcile evidence;
- recommend improvements;
- preserve engineering judgement;
- identify risks.

It may not:

- silently change Product Truth;
- start `SB-P-1.12`;
- authorize migrations or implementation;
- reopen settled Founder decisions without new evidence;
- turn an old session's preferred implementation into current authority merely because it was technically sophisticated.

---

## Final Principle

> **Git preserves what changed. Session evidence preserves why we learned. The final Claude Code synthesis preserves the engineering judgement without letting old sessions become competing authority.**
