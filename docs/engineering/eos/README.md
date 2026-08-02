# Team LIPS Engineering Operating System

**Document ID:** SB-EOS-INDEX-001 **Version:** 1.1 **Status:** Mission Control Corrected — Founder Approval Pending
**Owner:** Team LIPS Engineering **Governance Authority:** Smart
Business Mission Control **Founder:** Riyas PK **Organization:**
Lighthouse Information Publishing Service **Technology Unit:** Team LIPS
**Product:** Smart Business **Last Reviewed:** 2026-08-03 **Next Review:**
After Founder decision or material EOS change

------------------------------------------------------------------------

## 1. Purpose

This directory is the entry point for the Team LIPS Engineering
Operating System (EOS).

It provides a governed navigation structure for all approved engineering
governance documents and explains how they relate to one another.

### Current-Document Discovery Boundary

Current EOS discovery includes the governing documents registered by this index and the published release package under `docs/engineering/eos/v1.0/`.

It excludes:

- `docs/engineering/eos/archive/`;
- generated files matching `*_BACKUP_*.md`;
- generated files matching `*_REPAIR_REPORT.txt`;
- local repair or test artifacts ignored by `.gitignore`.

The repository was verified on 2026-08-03 to contain zero tracked EOS backup, `.bak`, or copy-named files. The archive boundary exists to keep any future explicitly preserved historical evidence separate from current authority. Presence in the EOS directory alone never creates approval or execution authority.

The Engineering Operating System exists to ensure engineering work is:

-   governed;
-   evidence-based;
-   repeatable;
-   auditable;
-   secure;
-   simple;
-   aligned with Lighthouse principles.

------------------------------------------------------------------------

## 2. EOS Document Register

| Document or family | Current authority state | Purpose |
|---|---|---|
| ChatGPT GitHub Engineering Artifact Workflow | Active | Controlled ChatGPT/Codex preparation and Git workflow |
| Claude GitHub Engineering Artifact Workflow | Active | Controlled Claude engineering review and Git workflow |
| Engineering Artifact Workflow | Approved | Artifact lifecycle baseline |
| Engineering Platform Inventory | Approved Baseline | Verified platform inventory |
| Engineering Pipeline Architecture | Approved Baseline | Validation pipeline baseline |
| Engineering Quality Gate | Approved Baseline | Markdown validation standard |
| Engineering Tooling Register | Current register | Tool inventory and status |
| Engineering Audit and Continuous Improvement | Founder approval pending | Evidence, audit, and improvement governance |
| Engineering Automation Architecture | Founder approval pending | Implemented and planned automation boundaries |
| Engineering Change Management | Founder approval pending | Controlled engineering change governance |
| Engineering Integration Architecture | Founder approval pending | Platform responsibilities and integration boundaries |
| Engineering Local Workflow | Replacement candidate; Founder approval pending | Tool-neutral local and repository workflow |
| Engineering Release Management | Founder approval pending | Engineering-artifact release governance |
| Engineering Repository Governance | Founder approval pending | Repository and protected-branch controls |
| Engineering Security and Access Control | Founder approval pending | Access, secrets, and controlled-AI boundaries |
| Engineering Platform Capability Matrix | Replacement candidate; Founder approval pending | Evidence-based platform capabilities |
| `v1.0/` release package | Published historical release package | Package presence does not override current status |
| `archive/` | Non-current historical evidence | Excluded from current-document discovery |

------------------------------------------------------------------------

## 3. Authority

Engineering follows this order of authority:

1.  Founder-approved Lighthouse governance.
2.  Smart Business Mission Control.
3.  Approved Engineering Operating System.
4.  Approved engineering governance documents.
5.  Mission-specific instructions.
6.  Verified engineering evidence.

------------------------------------------------------------------------

## 4. Engineering Lifecycle

``` text
Mission Authorization
→ Planning
→ Artifact Preparation
→ Engineering Review
→ Repository Update
→ Technical Verification
→ Release Verification
→ Deployment
→ Runtime Verification
→ Evidence Collection
→ Audit
→ Continuous Improvement
```

------------------------------------------------------------------------

## 5. Tool Relationship

``` text
Mission Control
    ↓
ChatGPT / Claude
    ↓
Engineering Artifacts
    ↓
GitHub
    ↓
Lovable
    ↓
Supabase
    ↓
Verification Evidence
    ↓
Mission Control Review
```

------------------------------------------------------------------------

## 6. Locked Product Decisions

-   Product domain: `smartbusiness.teamlips.com`
-   Corporate domain: `teamlips.com`
-   WhatsApp-first experience.
-   Ask CFO is a clarity assistant.
-   Employee access is permission-scoped.
-   Standard POS bridges are allowed.
-   Custom POS modifications inside the core platform are not allowed.

------------------------------------------------------------------------

## 7. Evidence Requirements

Engineering evidence may include:

-   Markdown Quality Gate output
-   Test reports
-   Repository history
-   Runtime screenshots
-   Deployment verification
-   Security review
-   Recovery verification
-   Completion reports

Completion claims require supporting evidence.

------------------------------------------------------------------------

## 8. Quality Gate

Every Markdown document shall pass the Team LIPS Markdown Quality Gate
before publication.

The automatic watcher:

-   detects saved Markdown files;
-   runs the Quality Gate;
-   never edits files;
-   never commits changes;
-   never replaces human review.

------------------------------------------------------------------------

## 9. Interconnection Roadmap

Current sequence:

1.  EOS document inventory — complete.
2.  Markdown Quality Gate — active.
3.  Protected-main pull-request workflow — active and independently verified.
4.  ChatGPT/Codex and Claude GitHub workflows — active.
5.  AC-02 correction package — Mission Control corrected; Founder approval pending.
6.  Cross-document verification — required before approval.
7.  Optional or future integrations — separately authorized and evidence-gated.

------------------------------------------------------------------------

## 10. Approval Record

  Role                    Status
  ----------------------- ------------------
  Team LIPS Engineering   Prepared
  Mission Control         Correction Review Complete
  Founder                 Pending Approval

**Publication Status:** Correction Candidate — Non-Governing Until Founder Approval
