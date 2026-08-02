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

### SB-P-1.9 Phase 3C Deployment Evidence Acceptance

Mission Control accepted the `SB-P-1.9` Phase 3C deployment-verification record with observations on 2026-08-02. Repository and Postgres-catalog evidence confirmed the deployed correction-event schema, `SECURITY INVOKER` correction function, enabled RLS, authenticated owner-scoped policies, absence of anonymous policies, and published application surfaces.

The canonical decision record is `docs/implementation/SB-P-1.9/phase-3c-mission-control-acceptance.md`. The `/reset-password` hydration warning and future WhatsApp delivery dependency remain non-blocking, separately governed follow-ups.

### AC-04 Foundation Build Contract Disposition

Mission Control resolved AC-04 on 2026-08-02. The Application Access (SB-P1.5), Business Identity (SB-P1.6), and Business Workspace (SB-P1.7) Build Contracts are approved as closed, non-executable historical authorization records. Their implementations were previously completed and accepted; later governed missions supersede their historical stop conditions without retroactively expanding their authority.

The canonical decision record is `docs/implementation/AC-04_Foundation_Build_Contracts_Mission_Control_Disposition.md`. New work may not execute these contracts and requires a new explicit mission under the current lifecycle framework.

### Superseded Communication-Proposal Containment

Mission Control contained `SB-GOV-COMMS-1.0` and `SB-GOV-COMMS-1.1` on 2026-08-03 as historical, non-governing, non-executable proposals. All 12 proposal artifacts remain at their original paths to preserve repository history and link integrity. Package READMEs and the central containment index prevent their obsolete draft amendments from being mistaken for current work.

Current authority remains `communication/AI_Communication_and_Handover_Protocol.md` Version 1.0, current actor instructions, and the approved activation and closure evidence under `communication/archive/SB-GOV-COMMS-1.2/`. The canonical containment record is `communication/missions/SB-GOV-COMMS-SUPERSEDED-PROPOSALS.md`.

### EOS Backup Discovery Separation

Mission Control completed EOS backup separation on 2026-08-03. The current Git tree and EOS path history contain zero tracked backup, `.bak`, or copy-named EOS files. Markdown-toolkit backups and repair reports remain excluded by `.gitignore`, and `docs/engineering/eos/archive/` is now the explicit non-current historical-evidence boundary.

This satisfies the backup-separation prerequisite for AC-02 but does not approve the ten non-backup EOS architecture and governance documents. Their focused Founder and Mission Control review remains pending. The verification record is `communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/eos-backup-discovery-verification.md`.

### AC-02 EOS Focused Review

Mission Control completed the per-document AC-02 review on 2026-08-03. The ten-document package was not approved. Four documents may advance after targeted correction, four require material reconciliation with current governance and repository controls, and the local workflow plus platform capability matrix require replacement drafts because their tool assumptions are stale.

No reviewed EOS draft became authoritative or executable. AC-02 remains `CORRECTION REQUIRED — FOUNDER APPROVAL PENDING`. The controlling disposition is `communication/missions/SB-GOV-HOUSEKEEPING-1.0/codex/AC-02_EOS_Focused_Review_and_Disposition.md`.

---

# Next Recommended Mission

- Execute the bounded AC-02 EOS correction package, validate the corrected ten-document set, and return it for Mission Control review and explicit Founder approval.

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
