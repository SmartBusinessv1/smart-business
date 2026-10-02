# SMART BUSINESS MISSION CONTROL — MC-179

# SB-P-1.12 — GitHub Account Restriction and Continuity Disposition

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. New incident evidence

Founder supplied two current screenshots.

### 1.1 GitHub account restriction

GitHub dashboard displayed:

> This account is flagged, and therefore cannot authorize a third party application.

Observed consequence:

- Supabase sign-in through GitHub OAuth cannot complete because GitHub refuses third-party authorization for the flagged account.

This is direct account-level evidence. It is not merely an inferred Actions failure.

### 1.2 Supabase account login dependency

A Supabase password-reset email for the Founder account states that the Supabase account is linked to GitHub and can only sign in using GitHub. It directs password-reset handling through GitHub rather than providing a Supabase password reset.

Observed consequence:

- the Founder cannot use a Supabase password reset as an independent recovery path;
- the currently evidenced Supabase dashboard access path is therefore blocked by the GitHub account restriction.

No secret, token, password or key value is recorded in this governance record.

## 2. Incident relationship

Mission Control does **not** claim that the account flag is proven to be the root cause of the existing GitHub Actions dispatch/run-history incident or the PR/search read-model incident.

However, the new evidence establishes an account-level GitHub restriction affecting third-party authorization at the same time as:

- EV-01 Actions/check-suite/run-history failure;
- repository event-feed anomalies;
- PR/search read-model inconsistency.

Therefore the account restriction is a **material correlated incident** and must be included in every EV-01 recovery checkpoint and GitHub escalation.

## 3. Reliability disposition

Mission Control does not classify GitHub globally as unreliable from this single repository/account incident.

Mission Control does classify the current Smart Business operating model as **over-coupled to one provider identity**.

Current concentration includes:

- canonical Git repository and PR workflow;
- application assurance through GitHub Actions;
- third-party OAuth authorization;
- Founder access to the Supabase dashboard through a GitHub-linked Supabase account;
- provider integrations that may depend on GitHub identity.

This creates a single-provider / single-identity failure domain inconsistent with Smart Business continuity needs.

**Continuity principle adopted:**

> GitHub may remain the primary development system, but Smart Business must not depend on GitHub account health as the sole path to source recovery, assurance execution, or critical provider administration.

This principle does not redesign Product Truth. It is an operational resilience control.

## 4. Immediate Founder recovery path

GitHub's published support model permits GitHub Free users to contact GitHub Support for account, security and abuse issues, even though most ordinary Free-plan support is through Community.

Founder should pursue the official account-review / appeal path and preserve one factual case thread.

Include:

- username: `SmartBusinessv1`;
- repository: `SmartBusinessv1/smart-business`;
- repository id: `1287523579`;
- exact banner: `This account is flagged, and therefore cannot authorize a third party application.`;
- Supabase GitHub OAuth is blocked;
- Supabase password-reset email confirms the account is GitHub-linked and cannot independently reset a Supabase password;
- Actions stopped creating check-suites/runs;
- recorded historical run IDs return 404 while check/deployment evidence remains;
- repository event feed and PR search are abnormal;
- Community Discussions #209242 and #209244;
- request: review/remove the account restriction and investigate repository Actions/run-history/search behavior.

Do not create multiple competing appeals unless GitHub asks for them. Preserve ticket/appeal identifiers when received.

## 5. MC-178 Auth capture status

The Founder read-only Supabase Auth dashboard capture authorized by MC-178 is now:

**BLOCKED — GITHUB ACCOUNT RESTRICTION PREVENTS THE EVIDENCED SUPABASE LOGIN PATH.**

This is not a Supabase Auth-setting finding.

EV-02 remains **PARTIALLY EVIDENCED**.

No Supabase setting change is authorized as a workaround.

## 6. Build Now continuity direction

Mission Control separates recovery from continuity.

### Build Now — continuity controls to design and activate under separate authority

1. **Provider-independent source recovery**
   - maintain a second recoverable Git copy outside GitHub;
   - exact mechanism to be selected after a bounded engineering assessment;
   - no silent fork of Product Truth or governance history.

2. **Provider-independent assurance execution**
   - define a governed substitute capable of running the exact existing Fast Gate and, where authorized, Full Assurance commands against exact SHAs;
   - evidence must be machine-captured, immutable or checksum-bound, reproducible and independently reviewable;
   - local/manual execution must not be represented as GitHub Actions success.

3. **Provider-administration access resilience**
   - once Supabase dashboard access is restored, establish a second legitimate administrative access path that does not depend on the same GitHub identity;
   - exact mechanism must follow Supabase-supported account/organization membership controls;
   - do not share credentials or create shadow accounts outside provider policy.

4. **Identity failure-domain separation**
   - future critical provider access should not rely on one external OAuth identity when the provider supports independent organization members or alternate authentication.

### Build Later

- hosted CI/provider diversification if local governed assurance becomes operationally insufficient;
- automated repository mirroring after the selected secondary target is proven;
- formal recovery drills.

### Reject

- abandoning canonical history;
- weakening verification because GitHub is impaired;
- copying secrets into Git;
- ungoverned shadow Supabase accounts;
- bypassing account restrictions with deceptive identities;
- treating a missing GitHub check as PASS.

## 7. Next authorized work package — continuity engineering assessment

Work package:

`SB-P-1.12-WP-PROVIDER-CONTINUITY-ENGINEERING-ASSESSMENT`

Recipient: Claude Code / Infrastructure Architecture.

Read-only design mission. No new provider account/resource, no mirror, no CI installation, no secret mutation.

Assess and produce an implementation-ready continuity plan for:

### 7.1 Source-control continuity

Compare at minimum:

- encrypted/local bare Git mirror;
- second remote on an independent provider authenticated independently from GitHub;
- combination of both.

For each: recovery time, integrity verification, ongoing synchronization, human burden, cost, security and GitHub-independence.

### 7.2 Assurance continuity

Design a governed substitute using existing repository commands:

- `npm ci`;
- Fast Gate commands represented by current workflow;
- Full Assurance commands only when separately authorized against `smart-business-test`.

Define:

- exact-SHA binding;
- clean checkout;
- Node/toolchain pinning;
- environment handling;
- machine-captured logs;
- checksums;
- evidence storage;
- independent review;
- failure handling;
- prohibition on reporting substitute results as GitHub Actions.

Prefer the smallest system that restores trustworthy execution without introducing a second complex platform unnecessarily.

### 7.3 Supabase administration resilience

Using only official/provider-supported patterns, define the later steps required to:

- add another authorized Team LIPS administrator/member or otherwise establish independent organization access;
- avoid sole dependence on GitHub OAuth;
- preserve least privilege;
- preserve auditability;
- avoid shared credentials.

Do not perform membership or account mutations.

### 7.4 GitHub recovery coexistence

The continuity design must work even while the GitHub appeal remains open, but must also coexist cleanly with GitHub if GitHub fully recovers.

## 8. Required outputs

Write only:

1. `communication/missions/SB-P-1.12/claude-code/40-provider-continuity-engineering-assessment.md`
2. `communication/live/report1.42.md`

Report:

- current single-point-of-failure map;
- source-recovery options and recommendation;
- exact local/governed assurance substitute design;
- evidence format and integrity controls;
- Supabase administration-resilience plan;
- implementation sequence split into Build Now / Build Later / Reject;
- cost/resource implications;
- every action requiring Founder approval or provider mutation;
- whether any continuity control can be activated without waiting for GitHub;
- whether migration authoring remains blocked;
- PR/head/blobs/Actions state.

## 9. Git authority

**Repository:** `SmartBusinessv1/smart-business`  
**Branch:** `mission/SB-P-1.12-provider-continuity-assessment`  
**Authorized base:** canonical `main` after MC-179 is human-merged and verified  
**Writable paths:** exactly the two report paths in Section 8  
**Permitted Git:** fetch, create branch, inspect, write exact two reports, commit, push, open one PR to `main`  
**Prohibited Git:** force push, direct `main`, self-approval, self-merge, provider/account/settings/secret mutation

## 10. Preserved mission boundary

Unchanged:

- EV-01 OPEN;
- EV-02 PARTIALLY EVIDENCED / Auth dashboard capture currently blocked;
- implementation authorization WITHHELD;
- `SB-MIG-1.4` NON-EXECUTABLE;
- SQL/migration authoring NOT AUTHORIZED;
- migration execution NOT AUTHORIZED;
- application implementation NOT AUTHORIZED;
- runtime activation NOT AUTHORIZED;
- test-fixture creation NOT AUTHORIZED;
- production mutation NOT AUTHORIZED.
## 11. GitHub support case and reusable support route

Founder successfully created a GitHub Support case after the flagged-account/SMS routing loop.

- Support ticket: `#4816157`
- Subject: `Account flagged — third-party OAuth and GitHub Actions blocked`
- Status observed at creation: `Open`
- Priority observed at creation: `Normal`
- Contact account: `SmartBusinessv1`
- Contact email: `sbtools@teamlips.com`

Reusable official support route:

- GitHub Support Portal: `https://support.github.com/`
- Direct Support Tickets dashboard: `https://help.github.com/support/tickets`
- Operational shortcut: open the Support Portal, select the `SmartBusinessv1` account, go to **Support tickets / My Tickets**, then use **Create ticket**.

GitHub's official documentation identifies the Support Portal as the location for viewing, updating, and creating support tickets. Preserve this route in future incident runbooks so Community is not treated as the only escalation path for account/security incidents.

The Founder supplied the direct Support Tickets dashboard URL above from the browser address bar. Preserve it as a convenience shortcut alongside the canonical Support Portal root.

