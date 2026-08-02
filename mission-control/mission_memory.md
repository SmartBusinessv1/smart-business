# SMART BUSINESS

# Mission Control Memory

> Living operational state maintained by Mission Control.
>
> This document records the current project state only.
> It is not a historical archive.
> Superseded information should be updated or removed so this file always reflects the latest approved Founder decisions.

---

# Current Project State

**Status**
- Production Live

**Last Accepted Mission**
- Mission ID: SB-MIG-1.2F-A
- Mission Name: Production OAuth Domain Alignment
- Status: COMPLETE AND ACCEPTED

---

# Active Mission

- None

---

# Current Deferred Missions

| Mission ID | Status | Reason | Resume Condition |
|------------|--------|--------|------------------|
| SB-INF-1.2 | POSTPONED BY FOUNDER | The current Privacy Policy and Terms of Service pages are placeholder content, and Lovable credits are temporarily exhausted. | Resume after production-ready Privacy Policy and Terms of Service pages are completed and published at `/privacy-policy` and `/terms-of-service`. |

---

# Pending Founder Decisions

- None

---

# Pending Follow-ups

- Complete the production Privacy Policy.
- Complete the production Terms of Service.
- Resume SB-INF-1.2 after both legal pages are published.

---

# Current Constraints

- Lovable credits are currently exhausted.
- Frontend content work requiring Lovable is postponed until credits are available.
- Placeholder legal pages must not be used for Google OAuth branding verification.
- Repository visibility remains PUBLIC while `SmartBusinessv1` uses GitHub Free so protected-branch controls remain available.

---

# Cross-Room Dependencies

| Depends On | Waiting For | Status |
|------------|-------------|--------|
| SB-INF-1.2 | Production Privacy Policy and Terms of Service | BLOCKED BY DEFERRED FRONTEND CONTENT WORK |

---

# Project Snapshot

## Production

- Authentication: Verified
- Deployment: Accepted
- Domain: https://smartbusiness.teamlips.com
- Repository: SmartBusinessv1/smart-business
- Database: Supabase production project operational

## Migration

- SB-MIG-1.2F — Production Application Cutover: COMPLETE
- SB-MIG-1.2F-A — Production OAuth Domain Alignment: COMPLETE
- Founder production runtime verification: PASSED
- Production deployment: ACCEPTED
- Current active migration mission: NONE
- Current executable migration package: NONE
- Migration authority index: `docs/migration/README.md`
- Future migration execution requires a new explicit Founder- or Mission Control-authorized mission with exact package, environment, actor, safeguards, execution window, and evidence controls

---

# Items to Resume Later

- SB-INF-1.2 — Google OAuth Branding Configuration
  - Resume after production-ready legal pages are published.
  - Reuse the findings preserved from SB-INF-1.1.

### Repository Visibility Decision

The Founder decided on 2026-08-02 that `SmartBusinessv1/smart-business` shall remain public while the account uses GitHub Free. This preserves the independently verified `main` branch-protection workflow.

After the core Smart Business build is complete, reconsider upgrading the `SmartBusinessv1` account to GitHub Pro and changing the repository to private. The visibility change may proceed only after confirming that private-repository branch protection, GitHub Actions allowance, and all required GitHub integrations will continue operating without disruption.

### Legacy Project Source Archive Decision

The original 25 project-source files have been formally superseded as active governance by 19 authoritative project-source and binding governance documents plus one canonical index and authority map, totaling 20 files.

They must not be deleted.

Their permanent role is:

**Non-governing historical and provenance archive.**

A Founder-authorized archive mission has now:

1. renamed `Project Source file/` to `Project Source File Archive/`;
2. created an archive `README.md`;
3. recorded the original commit, complete inventory, successor mapping, Founder decisions, and final comparison report;
4. clearly classified the directory as non-governing and non-authoritative;
5. prohibited silent deletion or reactivation without Founder-approved governance action.

Archive execution was completed through `SB-GOV-HOUSEKEEPING-1.3` on 2026-08-02. All 25 source files were preserved byte-for-byte. Current governance remains under `merge/active/`.

### Canonical Project Source Set Formalization

The current `merge/active/` package is formally classified through `SB-GOV-HOUSEKEEPING-1.4` as the **Smart Business Canonical Project Source Set v1.0**: 19 authoritative project-source and binding governance documents plus one canonical index and authority map, totaling 20 files. Project HQ synchronization was accepted through `SB-GOV-HOUSEKEEPING-1.5`: 20 of 20 canonical files were verified with byte-for-byte identity. GitHub repository `SmartBusinessv1/smart-business` remains the version-controlled operational source of truth.

### Project HQ Synchronization Acceptance

Mission Control accepted `SB-GOV-HOUSEKEEPING-1.5` on 2026-08-02: the Project HQ canonical package contains 20 of 20 files with byte-for-byte identity, while GitHub remains the operational source of truth.

### Migration Authority Containment

`SB-GOV-HOUSEKEEPING-1.6` established a default-deny migration authority model on 2026-08-02. Production remains live, completed migration evidence remains preserved, no migration mission or executable package is active, `SB-MIG-1.3` materials remain non-executable proposals, and any future migration execution requires a new explicit mission.

### SB-P-1.8 Mission Control Acceptance

Mission Control accepted and closed `SB-P-1.8` on 2026-08-02 after independent re-review. The four earlier blocking findings were corrected, current generated Supabase types include the live `transactions` schema, and Founder-assisted deployed-runtime Tests 1–7 passed, including two-owner isolation, authenticated route protection, session persistence, sign-out, authorized sale and purchase creation, dashboard totals, decimal precision, and append-only behavior.

The canonical decision record is `docs/implementation/SB-P-1.8_Mission_Control_Acceptance.md`. Non-blocking observations remain future-scope candidates and do not reopen the accepted mission.

---

# Next Recommended Mission

- Review and disposition `SB-P-1.9` phase-3C deployment evidence.

---

# Maintenance Rules

Mission Control may update this document only after:

- Founder decisions
- Mission acceptance
- Mission completion
- Mission postponement
- Major project-state changes

Mission Control may record:

- Founder decisions
- Accepted missions
- Postponed missions
- Completed milestones
- Pending follow-ups
- Cross-room dependencies
- Known constraints
- Project state snapshots
- Items to resume later

Mission Control shall not record:

- Engineering implementation notes
- SQL
- Source code
- Design discussions
- Historical logs
- Temporary reasoning

Historical records belong in mission reports and repository history.

This document must always represent the latest operational state.
