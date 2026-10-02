# SB-P-1.12 — MC-179 Provider Continuity Engineering Assessment Handover and STOP Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code
**To:** Smart Business Mission Control
**Paired instruction:** `communication/live/instruction1.42.md` (MC-179)
**Work package:** `SB-P-1.12-WP-PROVIDER-CONTINUITY-ENGINEERING-ASSESSMENT`
**Full report:** `communication/missions/SB-P-1.12/claude-code/40-provider-continuity-engineering-assessment.md`
**Status:** `READ-ONLY CONTINUITY DESIGN SUBMITTED — NOTHING ACTIVATED — EV-01 OPEN — EV-02 PARTIALLY EVIDENCED`

## 1. Baseline

`main@d25830543bc5bc2766f07ade5b17f86dc799cca5` (PR #718 merge, MC-179). GitHub observations used read endpoints only and were completed by `2026-10-02T11:31:27Z`.

Observed on the baseline:

- 0 check-suites;
- 0 check-runs;
- combined status `pending / 0`;
- repository runs `total_count: 0`;
- all 6 workflows `active`.

`main` protection currently has **no required status checks** (`contexts: []`, `checks: []`), 0 required approvals, `enforce_admins: true`, and force push and deletion disabled. This is recorded as observed; no change is proposed.

## 2. Single-Point-of-Failure Map (report Section 3)

| # | Capability | Sole dependency | State |
|---|---|---|---|
| F-1 | Canonical source and governance history | GitHub user account `SmartBusinessv1` | At risk; working clones only |
| F-2 | PR review and merge | Same account | Working |
| F-3 | Automated assurance | GitHub Actions | **Failed** (EV-01) |
| F-4 | Technical merge gate | Branch protection | No required checks (observed) |
| F-5 | Production Supabase administration (Team LIPS, Pro) | GitHub-linked Founder Supabase account | **Failed** |
| F-6 | Test Supabase administration (Smart Business Testing, Free) | Same account | **Failed** (MC-178 blocked) |
| F-7 | Full Assurance credentials | GitHub environment, plus one machine's gitignored files | Values unverified |
| F-8 | Provider account recovery | Founder mailbox | Not assessed |
| F-9 | Lovable synchronization | Possibly GitHub-linked | Not assessed |

## 3. Source Recovery (report Section 4)

**Recommendation: combined model, staged.**

1. **Now:** a local bare mirror with verified `git bundle` copies on **two** encrypted offline media, plus a SHA-256 ledger. $0, no new account.
2. **Later, after Founder approval:** a private secondary remote on an independent provider. Its account uses email, password and TOTP, never GitHub sign-in.

Divergence controls:

- GitHub `main` stays sole canonical.
- Replicas are downstream and read-only.
- The secondary receives pushes only from the mirror, with no `--force`, `--prune` or `--mirror`.
- A canonical-host change happens only by an explicit Mission Control record at an exact SHA.

Integrity checks: `git fsck --full --strict`, `git bundle verify`, SHA-256 sums, ref-digest comparison with Mission Control-recorded SHAs, and offline verification of the GitHub web-flow signatures that canonical merge commits carry.

## 4. Governed Assurance Substitute — LGA (report Section 5)

**Local Governed Assurance** runs the exact existing commands against an exact SHA, using existing tools only. It is used only per SHA under Mission Control authorization.

**Fast Gate sequence:**

1. Fresh clone with `core.autocrlf=false`.
2. Detached checkout of the SHA.
3. Verify HEAD and tree.
4. Assert no `SUPABASE_*`, `VITE_SUPABASE_*` or `PARSER_*` variables and no `.env*` files.
5. Run `npm ci`.
6. Run `npm run lint`, `npx tsc --noEmit`, `npm run test:fast` and `npm run build`. All four run even if one fails. Changed Markdown files go through `tools/markdown/quality_gate.py`.

Node must be `24.x`, with the exact version recorded.

**Full Assurance (`npm run test:full`)** runs only under separate Mission Control authorization, because it writes test state. It adds:

- a pre-run binding assertion: `drravyyauixltoihzmwo` present, `gysgzasfcjvtrgaigfyn` absent;
- credentials kept out of the run directory;
- a log leak scan before sealing.

**Evidence and integrity:**

- per-step machine-captured logs with UTC start and end times and exit codes;
- `manifest.json` (label, run ID, commit, tree, source, toolchain, lockfile hash, environment assertions, steps, deviations);
- `SHA256SUMS` and a `SEAL` digest;
- the sealed directory committed through a PR, which makes it Git-immutable.

**Labeling and review:**

- Every artifact is labeled `LOCAL GOVERNED ASSURANCE — NOT GITHUB ACTIONS`.
- **No GitHub status or check-run is ever posted from an LGA run.**
- Missing Actions checks stay "missing".
- Independent review recomputes checksums, binds commit and tree to the PR head, checks exit codes and test counts, and can reproduce on a second host.
- Run status is `PASS` / `FAIL` / `INCOMPLETE`. There are no silent retries, and `INCOMPLETE` is never `PASS`.

## 5. Supabase Administration Resilience (report Section 6)

**Verified from official Supabase documentation:**

- Roles are Owner, Administrator, Developer and Read-Only. Administrator cannot add Owners or change organization settings.
- Read-Only and project-scoped roles exist only on Team and Enterprise.
- Email invites expire after 24 hours.
- Account MFA is TOTP-only, with no recovery codes; a second factor is recommended.
- Organization MFA enforcement is available on Pro and above.
- No documented way was found to convert a GitHub-linked account to email login; this must be asked of Supabase Support.

**Design (later):**

- a second named Team LIPS human as **Owner** of both organizations, on an email-and-password plus TOTP account;
- a governed break-glass account only as a disclosed, non-preferred alternative;
- Developer role for engineering operators;
- two TOTP factors per member, then organization MFA enforcement on Team LIPS;
- a Mission Control access register;
- project keys are project-owned and rotated only under authorization;
- personal access tokens are individual and never shared;
- no shared credentials.

**Must wait for restored dashboard access:** every invite, role, MFA-enforcement, member-list or key action.

## 6. Build Now / Build Later / Reject (report Section 8)

- **Build Now** (each under separate Mission Control authorization; none activated):
  - BN-1: local mirror and offline bundles;
  - BN-2: LGA Fast Gate run by hand;
  - BN-3: access-register template and second-Owner decision;
  - BN-4: Founder contact with Supabase Support, with GitHub ticket `#4816157` kept as the single GitHub case.
- **Build Later:**
  - BL-1: secondary remote;
  - BL-2: Supabase second Owner and MFA enforcement, after access returns;
  - BL-3: LGA Full Assurance;
  - BL-4: an LGA automation script;
  - BL-5: a Linux-parity host;
  - BL-6: scheduled sync;
  - BL-7: repository transfer to a two-Owner GitHub organization;
  - BL-8: recovery drills;
  - BL-9: hosted CI diversification only if LGA is insufficient.
- **Reject:**
  - a self-hosted CI platform now;
  - synthetic GitHub statuses;
  - a writable or co-equal secondary, or mirror, prune or force pushes;
  - secrets in mirrors or evidence;
  - shared credentials;
  - new identities to evade the flag;
  - leaving GitHub now;
  - a Team-plan purchase ($599/mo) for roles alone;
  - treating a missing check as PASS.

## 7. Cost and Founder or Provider Actions (report Sections 9 and 10)

**Cost:**

- BN-1 to BN-4: **$0**, no new resource.
- BL-1: $0 expected, but needs a new provider account.
- BL-2: one Supabase account for the second person; per-member cost to confirm at activation.

**Founder approval needed for:**

- BN-1 media;
- the second-Owner choice;
- Supabase Support contact;
- the secondary-remote account;
- all Supabase membership, MFA and key actions;
- Linux host software;
- repository transfer.

**Secret handling needed for:** the BL-1 push token, BL-3 test credentials and any key rotation.

## 8. Direct Answers

| Question | Answer |
|---|---|
| Can any continuity control proceed before GitHub recovery? | **Yes:** BN-1, BN-2, BN-3 and BN-4, and BL-1 once the Founder approves. Supabase membership work cannot until dashboard access returns |
| Should remain blocked | Supabase membership and Auth changes until access returns; unauthorized Full Assurance; CI installation; canonical-host change; branch-protection change; implementation, SQL and migrations |
| Migration authoring | **Remains blocked.** EV-01 OPEN; LGA not yet authorized or validated; EV-02 PARTIALLY EVIDENCED; `SB-MIG-1.4` NON-EXECUTABLE |

## 9. Branch, Paths and Actions

- **Branch:** `mission/SB-P-1.12-provider-continuity-assessment`, created from `origin/main` at `d2583054`.
- **Changed paths:** exactly the full report and this file.
- **GitHub Actions at the baseline:** 0 check-suites, 0 check-runs, repository runs `total_count: 0`.
- **PR number, remote head, blobs and Actions state on the PR head:** recorded in the PR handover comment. This PR is itself a passive dispatch probe.

## 10. Not Done

Not done:

- no account, membership, mirror, remote, CI platform or provider resource created;
- no GitHub or Supabase setting changed;
- no Full Assurance run;
- no secret read or exposed;
- no application code;
- no SQL or migration authoring or execution;
- no production action.

**PROVIDER CONTINUITY ENGINEERING ASSESSMENT SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
