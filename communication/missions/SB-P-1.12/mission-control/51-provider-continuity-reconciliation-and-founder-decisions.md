# SMART BUSINESS MISSION CONTROL — MC-181

# SB-P-1.12 — Provider Continuity Reconciliation and Founder Decisions

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Primary assessment:** PR #719 / Claude Code Provider Continuity Engineering Assessment  
**Independent review:** PR #721 / Infrastructure Independent Continuity Review  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Canonical verification

Mission Control verified PR #721 human-merged to:

`main@c49a9064b54f14926ca540a3f14744e60d670841`

Canonical primary assessment:

- `communication/missions/SB-P-1.12/claude-code/40-provider-continuity-engineering-assessment.md`
- blob `cb9990bcabff381024e0b66647a9da05aded3889`

Canonical independent review:

- `communication/missions/SB-P-1.12/specialists/12-stage13-infrastructure-independent-continuity-review.md`
- blob `b6bfbe80eeaf1e72d20f3a87d3425b271890dfc8`
- live handover blob `19e94af4c3333ca45026ceb1ba256502c2bfa0e3`

## 2. Mission Control reconciliation principle

Mission Control accepts the primary architecture direction only where it survives independent review.

Where Infrastructure returned `ACCEPT WITH CORRECTION`, the corrected form below is binding.

No continuity control is activated merely because it appears under Build Now. Build Now means it is the next approved planning/authorization priority and may proceed only through a separately scoped implementation authority naming actor, target, evidence, rollback and writable surfaces.

## 3. Build Now — reconciled controls

### BN-C1 — Source continuity baseline

Adopt a three-layer recovery model:

1. local bare Git continuity mirror;
2. two encrypted, multi-generation `git bundle` recovery copies;
3. independent private secondary Git remote.

Binding corrections:

- the archival continuity mirror is **no-prune by default**;
- at least one encrypted bundle copy must be physically/site independent from the Founder machine and primary copy;
- at least one recovery copy is normally disconnected;
- retention must preserve multiple generations;
- hashes/ledgers must exist in a different failure domain from at least one bundle they authenticate;
- the first restore drill is part of initial activation proof, not deferred operations;
- secondary remote is **Build Now**, not Build Later;
- secondary remote remains downstream/non-canonical while GitHub is canonical;
- no force push, prune or mirror push to the secondary;
- any non-fast-forward or secondary-ahead state is an incident and stops synchronization;
- canonical-host promotion requires Founder authority, Mission Control record, exact trusted SHA and independent object/ref verification.

### BN-C2 — Local Governed Assurance route-B candidate

Retain LGA as the preferred minimal GitHub-independent assurance fallback, with binding corrections before route-B acceptance:

- four isolated Fast Gate workspaces;
- four independent `npm ci` install boundaries;
- Linux parity environment for route-B validation;
- exact Node patch, npm, Git, OS and relevant toolchain versions fixed/recorded per governed run;
- exact SHA/tree binding in every workspace;
- machine-captured timestamps, commands, exit codes and summaries;
- all Fast Gate jobs continue independently after a sibling job failure;
- compact manifest, summary, hashes and evidence digest in canonical Git;
- full sealed logs retained outside canonical Git in encrypted continuity storage;
- independent reviewer recomputes hashes and validates SHA/tree/results;
- no synthetic GitHub status/check-run;
- mandatory label: `LOCAL GOVERNED ASSURANCE — NOT GITHUB ACTIONS`;
- missing GitHub Actions evidence remains missing;
- Full Assurance remains separately gated and is not authorized by this record.

LGA is **not yet accepted as MC-177 route-B substitute assurance**. It requires one separately authorized validation run and independent review against an exact SHA after the corrected procedure is implemented.

### BN-C3 — Supabase administrative resilience preparation

Adopt:

- second **named human** Owner as the required independent recovery path;
- same second-human ownership objective for Team LIPS production and Smart Business Testing organizations, subject to provider-supported invitation/role behavior;
- no Founder-held break-glass account as a substitute for the independent human Owner;
- Owner accounts reserved for administration; engineering access should use Developer only where actually required;
- individual accounts only; no shared password, PAT, TOTP seed or provider credential;
- distinct backup MFA factors where provider supports them;
- expanded access register with organization, person, role, authentication method, MFA-presence, recovery mailbox, authority record, last review and evidence reference;
- Supabase Support contact now regarding dashboard recovery and supported decoupling of the Founder GitHub-linked login.

No membership, Auth, MFA-enforcement or key mutation is authorized yet.

### BN-C4 — Recovery dependency register

Create and verify continuity ownership for:

- Founder/team mailbox recovery;
- MFA-device loss;
- local credential loss/rotation;
- backup corruption;
- secondary-provider account lock;
- Supabase Free test-project pause;
- Lovable/project access;
- DNS/domain registrar administration;
- provider billing ownership/payment recovery;
- secrets recovery/escrow;
- offline availability of governance records and last trusted canonical SHA.

This is operational resilience scope only, not product feature work.

## 4. Build Later — reconciled controls

Build Later:

- automate LGA capture/sealing only after manual corrected LGA is proven;
- scheduled mirror/bundle synchronization only after manual sync, retention and restore procedure are proven;
- recurring quarterly restore drills after the first Build Now drill;
- GitHub user-account repository transfer to an organization with at least two Owners after account recovery and integration-impact review;
- hosted CI diversification only if corrected LGA is operationally insufficient;
- optional immutable/WORM evidence service if evidence scale later justifies it;
- any paid Supabase Team-plan upgrade only if future access-control needs justify it independently.

## 5. Reject — reconciled controls

Reject:

- committing full assurance logs to canonical Git by default;
- Founder-only break-glass Supabase account as the second-Owner substitute;
- co-equal/writable secondary canonical history while GitHub remains canonical;
- force/prune/mirror pushes to secondary continuity remote;
- synthetic GitHub statuses/check-runs for LGA;
- shared provider credentials, PATs or TOTP seeds;
- creating an identity to evade a provider restriction;
- self-hosted CI platform at current scale;
- immediate migration away from GitHub;
- Team-plan purchase solely for theoretical roles/SSO;
- treating missing Actions as PASS;
- weakening implementation/migration/release assurance because GitHub is impaired.

## 6. Branch-protection evidence status

Independently supported:

- `main` is protected;
- required status contexts/checks are currently empty;
- repository rulesets = 0.

Not independently verified by Mission Control or Infrastructure due connector/API limitations:

- `enforce_admins`;
- required approval count;
- force-push prevention;
- deletion prevention;
- stale-review dismissal.

Those remain primary-assessor evidence only until a readable provider/admin surface confirms them.

Current technical merge protection is not sufficient to substitute for Stage 15 assurance for implementation/migration/release work.

## 7. Founder decisions required before activation authority

Founder must decide:

### FD-C1 — site-independent continuity storage

Name the permitted storage model for the off-site/site-independent encrypted bundle copy.

The decision should identify the **failure domain**, not disclose a secret or exact sensitive physical address in Git. Examples: a separately secured office/site, trusted encrypted offline custody, or another explicitly controlled physical location.

### FD-C2 — independent secondary Git provider

Approve creation of one private continuity repository on an independent provider using an identity that does not federate through the affected GitHub account.

Requirements:

- email/password or provider-native independent authentication;
- MFA;
- private repository;
- downstream continuity role only;
- no GitHub OAuth for this account;
- scoped push credential;
- recovery path documented.

Provider selection remains a Founder decision.

### FD-C3 — Linux parity host

Approve the Build Now Linux parity environment for corrected LGA route-B validation.

Preferred low-complexity class: local WSL2/Ubuntu or another controlled Linux environment on existing Team LIPS hardware, rather than a new hosted CI platform.

### FD-C4 — second named human Supabase Owner candidate

Name the second legitimate Team LIPS human who may later receive Owner membership in both Supabase organizations after access is restored and the provider operation is separately authorized.

Do not put personal passwords, MFA seeds or secrets in the governance record.

### FD-C5 — Supabase Support escalation

Approve immediate outward-facing Supabase Support contact covering:

- inability to access dashboard because the current Supabase account is GitHub-linked and GitHub OAuth is blocked;
- supported recovery/access path;
- whether the existing GitHub-linked account can gain or migrate to an independent first-factor login;
- supported process to add the second named human Owner once access is restored.

### FD-C6 — secrets recovery mechanism

Select the approved organizational mechanism for recovering provider secrets/credentials without placing values in Git.

The implementation must support individual accountability, controlled recovery and rotation.

### FD-C7 — mailbox/domain recovery ownership

Confirm that Team LIPS email and domain/DNS administration have an independent recovery path beyond a single Founder device/account, or authorize a narrow follow-up evidence mission if current state is unknown.

## 8. Next implementation sequence after Founder decisions

After FD-C1 through FD-C7 are sufficiently resolved, Mission Control should authorize continuity implementation in this order:

1. source continuity baseline: mirror + bundles + site-independent copy;
2. secondary remote creation/seeding;
3. first restore drill;
4. corrected LGA procedure implementation/validation on Linux;
5. independent LGA review;
6. route-B decision for EV-01;
7. Supabase second-Owner/provider-access mutations only after dashboard/support recovery and separate authority.

These continuity steps do not themselves authorize Smart Business product implementation or migration authoring.

## 9. Current incident state

- GitHub Support ticket `#4816157`: OPEN unless a later Founder update changes it.
- Direct tickets dashboard: `https://help.github.com/support/tickets`.
- EV-01: OPEN.
- EV-02: PARTIALLY EVIDENCED / Auth dashboard capture blocked by GitHub-linked access restriction.
- GitHub account restriction remains a material correlated incident; common root cause with Actions/search anomalies is not asserted.

## 10. Preserved mission boundary

Unchanged:

- Implementation Authorization: WITHHELD;
- `SB-MIG-1.4`: NON-EXECUTABLE;
- SQL/migration authoring: NOT AUTHORIZED;
- migration execution: NOT AUTHORIZED;
- application implementation: NOT AUTHORIZED;
- runtime activation: NOT AUTHORIZED;
- test-fixture creation: NOT AUTHORIZED;
- production mutation: NOT AUTHORIZED.
