# SB-P-1.12 — Provider Continuity Engineering Assessment

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation
**From:** Claude Code — Infrastructure Architecture, read-only assessor under MC-179
**To:** Smart Business Mission Control
**Work package:** `SB-P-1.12-WP-PROVIDER-CONTINUITY-ENGINEERING-ASSESSMENT`
**Instruction:** `communication/live/instruction1.42.md`; authority `mission-control/49-github-account-restriction-and-continuity-disposition.md`
**Status:** `READ-ONLY CONTINUITY DESIGN — RECOMMENDATIONS ONLY — NOTHING ACTIVATED`

```text
ACCOUNTS / MEMBERSHIPS / PROVIDER RESOURCES CREATED: NONE
GIT MIRRORS / REMOTES CREATED: NONE
CI PLATFORM INSTALLED: NONE
GITHUB SETTINGS / SUPABASE MEMBERSHIP CHANGED: NONE
FULL ASSURANCE RUN: NONE
SECRETS READ OR EXPOSED: NONE
APPLICATION CODE / SQL / MIGRATION AUTHORING OR EXECUTION: NONE
PRODUCTION MUTATION: NONE
IMPLEMENTATION AUTHORIZATION: WITHHELD
```

## 1. Baseline and Method

| Item | Observed | Result |
|---|---|---|
| Canonical `main` | `d25830543bc5bc2766f07ade5b17f86dc799cca5` (PR #718 merge, MC-179); tree `23377a38141abf8e6dabae768c5110db493642bd` | PASS — matches the instructed baseline |
| Governing authority | `mission-control/49-github-account-restriction-and-continuity-disposition.md`, read in full | Read |
| Prior evidence relied on | `claude-code/39-stage13-assurance-runtime-readiness-investigation.md` (EV-01 diagnostics); `mission-control/30-…-manual-equivalence-record.md` (MC-155 principle); `mission-control/47-…` (MC-177) and `48-…` (MC-178); `docs/engineering/assurance/Build_Assurance_Baseline.md`; `docs/migration/SB-MIG-1.2E/01-pro-upgrade-report.md` and `11-test-environment-isolation.md` | Canonical |
| Repository contracts read | `.github/workflows/build-assurance.yml`, `full-assurance.yml`, `markdown-quality-gate.yml`; `package.json`; `vitest.fast.config.ts`, `vitest.full.config.ts`, `vitest.shared.ts` | Read on `main` |
| GitHub access used | Read endpoints only, through the existing `gh` session (login `SmartBusinessv1`) | Observations completed by `2026-10-02T11:31:27Z` |
| Provider documentation | Supabase official documentation: Access Control, Multi-factor Authentication, and the account-email troubleshooting article (Section 6.1) | Read-only web fetch |

No secret value was read. Local gitignored environment files were checked for **existence and ignore status only**.

## 2. Current State at the Baseline

### 2.1 GitHub observations (read-only, 2026-10-02)

| ID | Probe | Observation |
|---|---|---|
| G-01 | Check-suites, check-runs and combined status on `d2583054` | `0`, `0`, `pending / 0` |
| G-02 | Repository `actions/runs` | `total_count: 0` |
| G-03 | Workflow states | All 6 workflows `active`, including both assurance workflows and the Markdown Quality Gate |
| G-04 | Repository | id `1287523579`; `public`; not archived; not disabled; reported size 13,086 KiB |
| G-05 | `main` branch protection | `enforce_admins: true`; `allow_force_pushes: false`; `allow_deletions: false`; `dismiss_stale_reviews: true`; `required_approving_review_count: 0`; `required_status_checks.strict: true` with **`contexts: []` and `checks: []`** (no required status check is currently configured); 0 repository rulesets |
| G-06 | Merge-commit provenance | `d2583054` has committer `GitHub <noreply@github.com>` and a `gpgsig` block (GitHub web-flow signature). Canonical merges therefore carry a provider signature that can be verified offline with GitHub's published web-flow public key |
| G-07 | Existing CLI token | The `gh` token on this machine still authenticates read endpoints for `SmartBusinessv1` despite the third-party-authorization flag. This is an observation, not a guaranteed continuing path |

G-05 is recorded as observed. It is consistent with the incident: while no check is created, a required check could never pass. This assessment does not infer when or by whom the required context was removed, and it does not propose changing branch protection.

### 2.2 Local repository facts (this machine)

| Fact | Value |
|---|---|
| Git | `2.55.0.windows.2` |
| Node / npm | `v24.18.0` / `11.16.0` |
| Packed object store | 14,668 objects, 13.16 MiB |
| `main` history | 1,127 commits reachable from `origin/main` |
| Remote branch heads | 651 |
| `core.autocrlf` | `true` (the CRLF hazard documented in `Build_Assurance_Baseline.md` Section 3 applies to any Windows-hosted run) |
| Local test credential files | `.env.test` and `.env.test.local` exist and are gitignored (`.gitignore` lines 3 and 23); values not read |

## 3. Current Single-Point-of-Failure Map

| # | Capability | Current sole dependency | Failure observed or possible | Independent path today | Severity |
|---|---|---|---|---|---|
| F-1 | Canonical source, history and governance records | GitHub repository under the **user account** `SmartBusinessv1` (not a GitHub organization) | Account restriction could escalate to repository unavailability; event feed and search already abnormal | Working clones only. Not a governed backup: no integrity record, no off-machine copy, refs limited to what was fetched | **High** |
| F-2 | Pull-request review and merge | GitHub UI, same account | Merges currently still work; would stop if the account were suspended | None | High |
| F-3 | Automated assurance (Fast Gate, Full Assurance, Markdown Quality Gate) | GitHub Actions | **Failed**: no check-suite since 2026-09-30 (EV-01 OPEN); historical run objects return 404 | None governed. MC-155 manual equivalence was Markdown-only and PR-specific | **High (active)** |
| F-4 | Merge gate enforcement | Branch protection | Required status checks currently empty (G-05); review count 0. The gate is human governance, not technical | Human merge discipline and Mission Control review | Medium |
| F-5 | Production Supabase administration (`gysgzasfcjvtrgaigfyn`, organization Team LIPS, Pro plan) | Founder Supabase account, **GitHub-OAuth-linked** | **Failed**: dashboard login blocked; password reset not available for a GitHub-linked account (MC-179 Section 1.2) | None evidenced | **Critical** |
| F-6 | Test Supabase administration (`drravyyauixltoihzmwo`, organization Smart Business Testing, Free plan) | Same Founder account | **Failed** (MC-178 capture blocked) | None evidenced | High |
| F-7 | Full Assurance credentials | GitHub environment `smart-business-test` (3 secrets; values unverified since 2026-09-14) and this machine's gitignored files | Secrets unreachable if GitHub is unavailable; value binding unverified | Local files on one machine only | Medium |
| F-8 | Account recovery for every provider | Founder mailbox `sbtools@teamlips.com` | Mailbox loss would block recovery everywhere | Not assessed (outside this mission) | Medium |
| F-9 | Lovable project synchronization | Possibly GitHub-linked | Not assessed; dependency unverified | Not assessed | Unknown |

The common failure domain is **one person, one external OAuth identity**. F-1, F-3 and F-5 are the three controls MC-179 Section 6 targets.

## 4. Source-Control Continuity

### 4.1 Options compared

- **S-1 — Local bare mirror plus offline bundle.** A bare mirror on the Founder's machine, refreshed from GitHub, plus a periodic single-file `git bundle` copied to an encrypted offline medium.
- **S-2 — Secondary remote on an independent provider.** For example GitLab.com, Bitbucket Cloud or Codeberg. It is a **private** repository, and its account authenticates with email, password and TOTP, **never with "Sign in with GitHub"**.
- **S-3 — Combined.** S-1 and S-2 together.

| Criterion | S-1 Local mirror plus offline bundle | S-2 Secondary remote | S-3 Combined |
|---|---|---|---|
| Recovery time | Minutes: `git clone` from the bare mirror or bundle. Only for someone with physical access | Minutes, from anywhere, for any authorized reader, including AI agents | Minutes; best available source chosen at restore |
| Integrity verification | `git fsck --full --strict`; `git bundle verify`; SHA-256 of the bundle; ref digest compared with GitHub `main` and with Mission Control-recorded SHAs; offline check of GitHub web-flow signatures (G-06) | Same ref-digest comparison against the GitHub-sourced fetch; the provider's protected-branch rules reject non-fast-forward updates | Cross-check of two independent copies; detects corruption or tampering in either |
| Ongoing synchronization | `git remote update --prune` on the mirror (prune is safe here: the bundle preserves earlier states). New bundle after each canonical merge, or daily | Push **from the local mirror only**, explicit refspecs `refs/heads/*` and `refs/tags/*`, **no `--force`, no `--prune`, no `--mirror`** (GitHub-only `refs/pull/*` excluded) | One step: refresh mirror, then bundle, then push to the secondary |
| Operational burden | Low: about 2 minutes per sync; manual; can become a scheduled task later | Low after setup; one more account to secure (MFA, recovery codes) | About 3 minutes per sync |
| Cost | $0 (existing disk; optional existing external drive) | $0 expected on free tiers for a repository of this size (13 MiB pack). Confirm limits at selection | $0 |
| Security | The repository is **public on GitHub**, so the mirror holds no confidential source. Secrets are excluded from Git by policy. Encryption protects against tampering and loss of a portable medium, not secrecy of code | A second credentialed surface. Private visibility avoids a second public "canonical-looking" copy. Push credential must be a scoped token held only on the sync host | Union of both; still no secret material in Git |
| Independence from GitHub | Full for **restore**. Refresh needs GitHub reachable; the last good copy survives | Full for **restore and hosting**, if the account is not GitHub-federated | Full |
| Restoration procedure | Section 4.3 | Section 4.3 | Section 4.3 |
| Divergence risk | Very low: read-only replica, never committed to | Medium if misused: a writable second host invites direct pushes and a competing history. Mitigated by the rules in Section 4.4 | As S-2, same mitigations |
| Survives loss of this machine | **No**, unless the offline bundle is stored on separate media | Yes | Yes |
| Requires new account or provider resource | No | **Yes** (Founder approval) | Yes |

### 4.2 Recommendation

**Adopt S-3, staged.** S-1 is the Build Now control; S-2 follows when the Founder approves an independent provider account.

- S-1 alone removes the GitHub dependency for recovery at zero cost and with no new account, so it can start without waiting for GitHub. It does not survive a single-site loss unless the bundle leaves the machine.
- S-2 adds off-site, multi-reader recovery, which matters for an AI-assisted workflow where agents need a fetchable remote.
- The smallest *reliable* model is S-1 with **two** bundle copies on separate media now, then S-2 as soon as authorized.

### 4.3 Exact procedures (for later authorization; not executed)

Paths are illustrative and must be fixed by the activation instruction. `<MIRROR>` is outside any working tree. `<OFFLINE>` is an encrypted removable medium.

**Initial mirror (S-1):**

```bash
git clone --mirror https://github.com/SmartBusinessv1/smart-business.git <MIRROR>/smart-business.git
git -C <MIRROR>/smart-business.git fsck --full --strict
```

**Each sync (S-1):**

```bash
git -C <MIRROR>/smart-business.git remote update --prune
git -C <MIRROR>/smart-business.git fsck --full --strict
MAIN=$(git -C <MIRROR>/smart-business.git rev-parse refs/heads/main)
STAMP=$(date -u +%Y%m%dT%H%M%SZ)
git -C <MIRROR>/smart-business.git bundle create <OFFLINE>/smart-business-$STAMP.bundle --branches --tags
git bundle verify <OFFLINE>/smart-business-$STAMP.bundle
git -C <MIRROR>/smart-business.git for-each-ref --format='%(objectname) %(refname)' refs/heads refs/tags > <OFFLINE>/smart-business-$STAMP.refs
sha256sum <OFFLINE>/smart-business-$STAMP.bundle <OFFLINE>/smart-business-$STAMP.refs > <OFFLINE>/smart-business-$STAMP.SHA256SUMS
echo "$STAMP main=$MAIN" >> <OFFLINE>/sync-ledger.txt
```

Then compare `$MAIN` with GitHub's `main` (`gh api repos/SmartBusinessv1/smart-business/commits/main --jq .sha`, when reachable) and with the latest Mission Control-recorded canonical SHA. Record a mismatch as an incident; do not resolve it silently.

**Push to secondary (S-2, after authorization):**

```bash
git -C <MIRROR>/smart-business.git push <SECONDARY_URL> 'refs/heads/*:refs/heads/*' 'refs/tags/*:refs/tags/*'
```

There is no `--force`, `--prune` or `--mirror`. A rejected non-fast-forward is an incident, not something to override.

**Restoration (either source):**

1. Choose the source: GitHub if healthy, otherwise the secondary remote, otherwise the newest verified bundle.
2. For a bundle: `sha256sum -c <file>.SHA256SUMS`, `git bundle verify <file>.bundle`, then `git clone <file>.bundle restored`.
3. In the restored clone, run `git fsck --full --strict` and compare `git rev-parse main` with the ledger and the last Mission Control-recorded SHA.
4. Optionally verify GitHub web-flow signatures on merge commits (`git log --show-signature` with GitHub's published web-flow key imported).
5. Record source, SHA, verification output and time in a governance record. A restore **does not** move canonical status (Section 7).

### 4.4 Divergence controls

1. GitHub `SmartBusinessv1/smart-business` `main` stays the **sole canonical** history while it accepts merges.
2. Mirrors and the secondary remote are **downstream, read-only replicas**. Nobody commits, merges or opens reviews on them.
3. The secondary's `main` is protected: no force push, no deletion, and writes only by the sync identity.
4. Data flows one way only: GitHub, then the local mirror, then the secondary. Never in reverse while GitHub is canonical.
5. A canonical-host change happens **only** by an explicit Mission Control record naming the new host and the exact SHA (Section 7.3).

## 5. Governed Assurance Substitute — Local Governed Assurance (LGA)

### 5.1 Principle and scope

LGA substitutes for the unavailable **transport**, not for the assurance (MC-155 Section 7). It runs the **exact existing commands** from the current workflows against an **exact SHA**, with machine-captured, checksum-bound evidence and independent review. It needs no new platform, service or dependency. It uses Git, Node 24, npm and the shell already present.

LGA is usable only when Mission Control records, for a named SHA, that GitHub Actions is unavailable, and authorizes an LGA run for it. Each LGA run has a unique ID `LGA-<sha12>-<UTC yyyymmddThhmmssZ>`.

### 5.2 Gate-equivalence table

| GitHub workflow and job | LGA step | Exact command | Credentials |
|---|---|---|---|
| `build-assurance.yml`, all jobs | Install | `npm ci` | None |
| `lint` | L | `npm run lint` | None |
| `typecheck` | T | `npx tsc --noEmit` | None |
| `test-fast` | F | `npm run test:fast` (28 files at `d2583054`: 8 under `tests/`, 20 under `organizational-learning/tests/`) | None |
| `build` | B | `npm run build` | None |
| `markdown-quality-gate.yml` | M | `python tools/markdown/quality_gate.py <file>` for each `.md`/`.markdown` file changed between base and head, with the same exclusion pattern as the workflow | None |
| `full-assurance.yml` `test-full` | FA (**separate Mission Control authorization only**) | `npm run test:full` | `SUPABASE_TEST_URL`, `SUPABASE_TEST_ANON_KEY`, `SUPABASE_TEST_SERVICE_ROLE_KEY` |

The Fast Gate tier is L, T, F and B, run in that order, with B last so build output cannot affect the earlier steps. **All four run even if one fails**, as the independent Actions jobs would.

**Disclosed deviations from GitHub Actions:**

1. One clean checkout and one `npm ci` serve all four steps, where Actions uses four fresh runners.
2. The host OS may differ from `ubuntu-latest`.
3. Node is pinned to an exact recorded `24.x` version, where Actions resolves the latest `24.x` at run time.

These deviations are recorded in every manifest. None reduces what each command checks.

### 5.3 Procedure

**Preconditions**

- A Mission Control authorization names the SHA, run type (Fast Gate, with or without FA), operator, host and reviewer.
- The host has Git, Node `24.x`, npm and Python 3 (for M).

**Step 0 — Run directory.** Create a new empty run directory outside every working tree, for example `<RUNS>/LGA-<sha12>-<stamp>/`, with `src/`, `logs/` and `meta/`.

**Step 1 — Exact-SHA clean checkout.**

```bash
git clone --no-checkout --config core.autocrlf=false --config core.eol=lf <SOURCE> src
git -C src checkout --detach <SHA>
test "$(git -C src rev-parse HEAD)" = "<SHA>"
test -z "$(git -C src status --porcelain --ignored)"
git -C src rev-parse HEAD^{tree} > meta/tree.txt
```

`<SOURCE>` is GitHub when reachable, otherwise the verified mirror (Section 4). The manifest records which. `core.autocrlf=false` removes the Windows CRLF artifact. A fresh clone contains no gitignored `.env*` files.

**Step 2 — Toolchain and environment record.**

- Record `node -v`, `npm -v`, `git --version`, `python --version`, OS name and version, and hostname.
- `node -v` must match `^v24\.`; anything else is an `INCOMPLETE` run.
- For the Fast Gate, assert that **no** variable named `SUPABASE_*`, `VITE_SUPABASE_*`, `PARSER_*` or `CONFIRM_PRODUCTION` is set, and that no `.env*` file exists in `src/`.
- Record **names only** of any such variable found, then stop.

**Step 3 — Execute with capture.** For each step:

1. Record the start time in UTC ISO-8601.
2. Run the command from `src/`, writing stdout and stderr together to `logs/<step>.log`.
3. Record the end time and the exit code.

Logs are written by the process, never transcribed by hand.

```bash
run_step () { # $1 = step id, rest = command
  local id=$1; shift
  local start; start=$(date -u +%Y-%m-%dT%H:%M:%SZ)
  ( cd src && "$@" ) > "logs/$id.log" 2>&1; local rc=$?
  local end; end=$(date -u +%Y-%m-%dT%H:%M:%SZ)
  printf '%s\t%s\t%s\t%s\t%s\n' "$id" "$start" "$end" "$rc" "$*" >> meta/steps.tsv
}
run_step install npm ci
run_step lint npm run lint
run_step typecheck npx tsc --noEmit
run_step test-fast npm run test:fast
run_step build npm run build
```

After `npm ci`, record `sha256sum src/package-lock.json` in `meta/`. An `npm ci` failure makes the run `INCOMPLETE`, and L, T, F and B are not attempted.

**Step 4 — Seal.**

1. Write `meta/manifest.json` (Section 5.5).
2. Then: `sha256sum logs/* meta/* > SHA256SUMS` and `sha256sum SHA256SUMS > SEAL`.
3. The `SEAL` value is the **evidence digest**.
4. Delete `src/` (including `node_modules/` and `.output/`) after sealing. The SHA reproduces it.

**Step 5 — Publish.** Commit the sealed evidence directory (logs, meta, `SHA256SUMS`, `SEAL`) on the authorized evidence branch, then reference the evidence digest in the governance report.

- Once merged, the Git object IDs make the evidence immutable and checksum-bound.
- If total logs exceed 1 MiB, commit `meta/`, `SHA256SUMS` and `SEAL`, and keep a compressed archive of `logs/` in both continuity stores (Section 4), with its own SHA-256 in the manifest.

### 5.4 Full Assurance (FA) under LGA

FA runs **only** under a separate Mission Control authorization naming the SHA, because `npm run test:full` writes real Auth users and database rows to `smart-business-test` by design.

Additional controls:

1. **Credential source.** The operator's gitignored local files outside `src/` are exported into the FA process only. Values are never placed in the run directory, logs, manifest, chat or Git.
2. **Pre-run binding assertion.**
   - `SUPABASE_TEST_URL` host contains `drravyyauixltoihzmwo`.
   - No credential value contains `gysgzasfcjvtrgaigfyn`.
   - All three names are set.
   - On failure: stop, `INCOMPLETE`.
3. **Secret-leak scan before sealing.** Search `logs/test-full.log` for each credential value. On a match: quarantine the run, do not publish it, and report to Mission Control and the Founder for rotation.
4. **Value-binding caveat.** The test project's dashboard is unreachable while F-6 persists. A failed authentication is recorded as `FAIL — CREDENTIAL BINDING`, not as a product failure. Rotation waits for restored access.
5. **Concurrency.** `fileParallelism: false` is preserved by the unchanged config. No other FA run may target the test project at the same time.

### 5.5 Evidence format

`meta/manifest.json` fields:

| Field | Content |
|---|---|
| `label` | Exactly `LOCAL GOVERNED ASSURANCE — NOT GITHUB ACTIONS` |
| `run_id` | `LGA-<sha12>-<stamp>` |
| `authorization` | Mission Control record path and SHA of `main` at authorization |
| `commit`, `tree` | Full 40-character commit SHA and tree SHA, verified in Step 1 |
| `source` | Clone URL or mirror path, plus that source's `main` SHA at clone time |
| `operator`, `host` | Named human or AI operator; hostname and OS |
| `toolchain` | Node, npm, Git and Python versions; `package-lock.json` SHA-256 |
| `env_assertions` | Fast Gate: "no SUPABASE/VITE/PARSER variables, no .env files". FA: binding-assertion result. Names only |
| `steps[]` | `id`, exact command, start UTC, end UTC, exit code, log filename, log SHA-256 |
| `summary` | Per step `PASS` / `FAIL` / `NOT RUN`; run status `PASS` / `FAIL` / `INCOMPLETE` |
| `deviations` | The three disclosed deviations in Section 5.2, plus any run-specific deviation |

**Run status rules:**

- `PASS` only if every authorized step exited `0`.
- `FAIL` if any step exited non-zero.
- `INCOMPLETE` for environment, toolchain or infrastructure faults. `INCOMPLETE` is never `PASS`.

### 5.6 Failure handling

- **No silent retries.** A re-run is a new run ID, and every run, including failed ones, is retained and reported.
- **Product failures.** A failure in L, T, F or B blocks the SHA exactly as a red Actions job would.
- **Infrastructure faults.** Registry outage, disk, or Node mismatch makes the run `INCOMPLETE`. It can be re-run after the cause is recorded.
- **Suspected flaky tests.** Require two consecutive new runs and a Mission Control disposition. A flake is never waived inside the run.

### 5.7 Independent review

A reviewer who is not the operator (Codex, another AI session, or a human) must:

1. recompute `sha256sum -c SHA256SUMS` and the `SEAL`;
2. confirm `commit` equals the PR head under review, and `tree` equals `git rev-parse <SHA>^{tree}`;
3. confirm each exit code from `steps.tsv` against the log tail, plus the test-file and test counts from the Vitest summary lines;
4. confirm the label, environment assertions and deviations are present;
5. for Fast Gate, optionally **reproduce** on a second host or session. The results must match on exit codes and test counts; byte-identical logs are not expected.

The review is recorded as a separate governance record that cites the evidence digest. LGA evidence without independent review is not substitute assurance.

### 5.8 Labeling rules

1. Every report, PR comment and record says **"Local Governed Assurance (LGA) — not GitHub Actions"**, with the run ID and evidence digest.
2. **No GitHub commit status, check-run or deployment is created from an LGA run.** In particular, none may use the workflow or job names (`Lint (ESLint + Prettier)`, `Fast Tests (vitest)`, `Markdown Quality Gate` and so on). A green mark in GitHub's UI would misrepresent provenance.
3. A missing Actions check stays "missing" in every report, never "PASS". LGA `PASS` is reported next to it, not instead of it.
4. EV-01 closure route B (MC-177 Section 2.3) requires Mission Control to validate LGA as a substitute. This design does not close EV-01.

### 5.9 Retention

- Sealed evidence merged to `main` is retained with repository history.
- Out-of-repository log archives are retained in both continuity stores until SB-P-1.12 closure plus 12 months, and are never deleted while a dependent decision is open.
- GitHub's 90-day Actions retention, already shown to be unreliable here (EV-01 D-06), is not the model.

## 6. Supabase Administration Resilience

### 6.1 Provider facts (official Supabase documentation)

| Fact | Source |
|---|---|
| Organization roles are Owner, Administrator, Developer and Read-Only. Administrator has full access **except** updating organization settings, transferring projects and **adding new Owners**. Developer has content access but cannot change project settings | Supabase docs, Platform → Access Control |
| The Read-Only role and project-scoped roles are **only on Team and Enterprise** plans | Same |
| Members are invited by email from organization team settings; **an invite is valid for 24 hours**. SAML SSO invites can only be accepted by SSO accounts from the same identity provider | Same |
| Account MFA is TOTP-only and enabled in account settings. **Supabase issues no recovery codes**; registering a second TOTP factor on a separate device is recommended | Supabase docs, Platform → Multi-factor Authentication |
| An Owner on **Pro, Team or Enterprise** can enforce MFA for all organization members | Same |
| GitHub-authenticated Supabase accounts manage email through GitHub; email-authenticated accounts manage it inside Supabase | Supabase troubleshooting: change email associated with Supabase account |

**Not found in official documentation:** a supported way to convert an existing GitHub-linked Supabase account to email-and-password login, or to add a second login method to it. This must be asked of Supabase Support and is not assumed.

**Repository facts:**

- Production organization **Team LIPS** is on **Pro** (`SB-MIG-1.2E/01`).
- Test organization **Smart Business Testing** is on **Free** (`SB-MIG-1.2E/11`).
- The Team plan was observed at "from $599/mo" (`SB-MIG-1.2E/01` Section 3).

### 6.2 Design (later; no membership or account action now)

| Control | Design |
|---|---|
| R-1 Independent second Owner path | A **second named Team LIPS human** gets an individual Supabase account authenticated by **email and password plus TOTP** (not GitHub, Vercel or another federated identity). They are invited as **Owner** of Team LIPS and of Smart Business Testing. Owner, not Administrator, is required, because only an Owner can add Owners or change organization settings, which is what recovery needs |
| R-1 alternative if no second person exists | A Founder-held **break-glass account** on a separate Team LIPS mailbox, email and password plus TOTP, invited as Owner, recorded by name in a Mission Control access register. It is used only for recovery. Before adoption, confirm it is consistent with Supabase's terms (unverified here). Not preferred, because it keeps one human as the single point of failure |
| R-2 Founder identity decoupling | Founder asks Supabase Support whether the existing GitHub-linked account can gain an independent login. If not, the Founder's day-to-day account may later move to an email-based account with Owner role, keeping the GitHub-linked account as a secondary member until retired |
| R-3 Least privilege | Owner is held by at most two individuals (Founder and the R-1 holder) and used only for administrative actions. Engineering operators get **Developer**. No Read-Only or project-scoped roles until a Team-plan decision |
| R-4 MFA | Every member enables TOTP with **two factors on separate devices** (no recovery codes exist). After R-1, the Founder enables **organization MFA enforcement** on Team LIPS (Pro supports it). Smart Business Testing (Free) cannot enforce it; per-account MFA is required by policy instead |
| R-5 Auditability | A Mission Control **access register** records each member, role, authentication type, MFA state, date added and the authorizing record. Every membership change is made only under a Mission Control record and evidenced by a member-list capture with no secrets. Supabase platform audit-log availability per plan is to be confirmed at activation, not assumed |
| R-6 Account recovery | Two Owners, each with an independent login and two TOTP factors. Mailboxes for both are protected by their own MFA. The procedure is recorded in the access register, with credentials never stored there |
| R-7 Secret and key ownership | **Project API keys** (publishable, secret, legacy anon and service-role) belong to the project, not a person, so they survive member changes. They are rotated only by an Owner or Administrator under authorization. **Personal access tokens** (CLI and Management API) belong to the individual and are never shared; they are revoked when a member leaves. Prefer individually revocable secret keys over the legacy service-role JWT. Never print keys to terminals or reports (known CLI pitfall: `projects api-keys` prints the legacy service-role key unmasked) |
| R-8 No shared credentials | Each human authenticates as themselves. No shared password, TOTP seed or personal access token. No account is created outside provider policy or to evade a restriction |

### 6.3 What must wait for restored dashboard access

Each of these requires an existing Owner to be signed in, so all wait for the Founder's access (or Supabase Support restoring it):

- sending any invite;
- assigning any role;
- enabling organization MFA enforcement;
- capturing the member list;
- rotating keys or reading Auth configuration (MC-178).

**Can proceed now (no mutation):**

1. Founder chooses the R-1 person, or decides on the break-glass alternative.
2. A dedicated Team LIPS mailbox with its own MFA is prepared, if that mailbox already exists in the Founder's control.
3. The Founder contacts Supabase Support through its official channel about (a) restoring dashboard access while GitHub OAuth is blocked and (b) R-2 decoupling. This is outward-facing and is a Founder action.

## 7. Coexistence with GitHub Recovery

### 7.1 Operating modes

| Mode | Condition | Source of truth | Assurance | Merge |
|---|---|---|---|---|
| Normal | GitHub healthy and Actions dispatching | GitHub `main` | GitHub Actions; LGA dormant | Human merge on GitHub |
| Degraded (current) | GitHub accepts merges; Actions not dispatching | GitHub `main` | LGA per SHA under Mission Control authorization; missing checks reported as missing | Human merge on GitHub |
| Impaired | GitHub inaccessible for days; account suspended | Last verified GitHub `main` SHA, held in mirror and secondary | LGA from mirror | **Frozen.** Mission branches may be pushed to the secondary as **non-canonical** work; no canonical merge |
| Lost | Mission Control records that GitHub will not return within a defined time | New host named by Mission Control at the exact last SHA | LGA, or a later CI decision | On the new host, by human merge |

### 7.2 Return to Normal

- When GitHub fully recovers, the mirror keeps syncing as a downstream backup.
- LGA returns to fallback-only. EV-01 closes by route A (MC-177 Section 2.3) independently of LGA.
- **Nothing produced in Degraded mode needs reconciliation.** LGA evidence was committed through GitHub PRs, and the mirrors only ever copied GitHub.

### 7.3 No competing Product Truth

- Governance records and Product Truth live only in the canonical repository.
- Continuity stores hold copies, never edits.
- Moving from Impaired to Lost needs an explicit Mission Control canonical-host record naming the exact SHA and the new host, plus Founder approval.
- Any non-canonical work pushed during Impaired mode re-enters through normal PRs once a canonical host accepts merges.

## 8. Build Now / Build Later / Reject

"Build Now" means it can be activated without waiting for GitHub, **under a separate Mission Control authorization**. Nothing is activated by this assessment.

### 8.1 Build Now

| ID | Control | Needs | New resource or cost | Secrets |
|---|---|---|---|---|
| BN-1 | S-1 local bare mirror, plus first verified bundle on **two** encrypted offline media, plus a sync ledger (Section 4.3) | Mission Control activation; Founder chooses storage location and media | None; $0 | None |
| BN-2 | LGA **Fast Gate** procedure (Section 5), run by hand with the existing commands; no new repository tooling | Mission Control authorization per SHA, naming operator and reviewer | None; $0 | None (credential-free tier) |
| BN-3 | Access-register template and R-1 person decision (Section 6.3, items 1 and 2) | Founder decision | None | None |
| BN-4 | Founder contacts Supabase Support about access restoration and decoupling (Section 6.3, item 3); keeps GitHub ticket `#4816157` as the single GitHub case | Founder (outward-facing) | None | None (no key or password in any ticket) |

### 8.2 Build Later

| ID | Control | Trigger or prerequisite | Needs | Cost |
|---|---|---|---|---|
| BL-1 | S-2 secondary private remote on an independent provider, with email, password and TOTP account; protected `main` | After BN-1 is proven | **Founder approval**; new account; push token handling | $0 expected (free tier; confirm) |
| BL-2 | R-1 second Owner, MFA for all members, organization MFA enforcement on Team LIPS, access register populated | **Restored Supabase dashboard access** | Founder approval; membership mutation authorization | Confirm whether Pro adds a per-member charge at activation |
| BL-3 | LGA **Full Assurance** runs | Per SHA; Mission Control authorization | Local test-credential handling (Section 5.4) | $0; writes test state |
| BL-4 | Small repository script automating LGA capture and seal (Node, no new dependency) | If manual LGA is used more than occasionally | Mission Control implementation authorization (repository tooling change) | $0 |
| BL-5 | Linux-parity LGA host (for example WSL2 Ubuntu on the Founder's machine) | If OS-specific differences appear | Founder approval of host software | $0 |
| BL-6 | Scheduled mirror sync and bundle rotation | After BL-1 is proven | Mission Control authorization | $0 |
| BL-7 | Transfer the repository from the user account to a GitHub organization with two Owners | After the account restriction is resolved | Founder approval; assess Lovable, Actions environment and URL-redirect effects first | $0 on GitHub Free organization |
| BL-8 | Formal recovery drill: restore from bundle and secondary, then run LGA Fast Gate on the restored SHA | Quarterly, after BN-1 and BL-1 | Mission Control | $0 |
| BL-9 | Hosted CI diversification | Only if LGA proves operationally insufficient | Mission Control and Founder | New provider; cost to be assessed then |

### 8.3 Reject

| Rejected | Reason |
|---|---|
| Installing a self-hosted CI platform (Jenkins, Gitea or Forgejo Actions, GitLab Runner) now | A second complex platform to secure and operate; LGA meets the contract with existing tools |
| Posting GitHub commit statuses or check-runs from local runs | Misrepresents provenance (Section 5.8) |
| Writable or co-equal secondary remote; `git push --mirror`, `--prune` or `--force` to the secondary | Creates divergence or propagates deletions and tampering |
| Committing secrets, `.env*` files or credential values into mirrors, bundles or evidence | Policy and security |
| Shared Supabase credentials, shared TOTP seeds or shared personal access tokens | No individual accountability |
| Creating a new GitHub account, or any identity, to get around the account flag | Evades a provider restriction; MC-179 Section 6 Reject |
| Moving off GitHub now | GitHub stays primary (MC-179 Section 3); coexistence design makes this unnecessary |
| Team plan purchase solely for Read-Only or project-scoped roles or SSO | $599/mo is out of proportion to the gap; Owner plus Developer meets least privilege at current scale |
| Treating a missing check as PASS, or weakening any gate because GitHub is impaired | MC-155, MC-177, MC-179 |

## 9. Cost and Resource Implications

| Item | Cost | New resource |
|---|---|---|
| BN-1 local mirror and bundles | $0; about 15 MiB per bundle generation (13.16 MiB packed today); existing or Founder-owned removable media | None |
| BN-2 LGA Fast Gate | $0; about 10–15 minutes of operator time per SHA, plus independent review | None |
| BL-1 secondary remote | $0 expected on free tiers | One provider account |
| BL-2 Supabase second Owner | Confirm at activation (no per-member price was stated in the documentation reviewed) | One Supabase account (the second person's) |
| BL-3 LGA Full Assurance | $0; test-project writes; Free-plan test project may pause | None |
| Team plan (rejected) | From $599/mo | — |

## 10. Actions Requiring Founder Approval or Provider Mutation

| Action | Approver | Provider mutation | Secret handling | Can start before GitHub recovery |
|---|---|---|---|---|
| Activate BN-1 (location and media) | Mission Control, Founder | No | No | **Yes** |
| Authorize LGA Fast Gate for a SHA (BN-2) | Mission Control | No | No | **Yes** |
| Choose R-1 person or break-glass alternative (BN-3) | Founder | No | No | **Yes** |
| Contact Supabase Support (BN-4) | Founder | No | No | **Yes** |
| Create secondary remote account and repository (BL-1) | Founder | **Yes** (new provider resource) | **Yes** (push token) | Yes, if approved |
| Invite second Owner; set roles; enforce MFA (BL-2) | Founder, Mission Control | **Yes** (Supabase membership) | Personal MFA only | **No**: needs restored dashboard access |
| LGA Full Assurance (BL-3) | Mission Control | Test-state writes | **Yes** (local test credentials) | Technically yes; value binding unverified (F-6) |
| Rotate test or production keys | Founder | **Yes** | **Yes** | **No**: needs dashboard |
| Repository transfer to a GitHub organization (BL-7) | Founder | **Yes** (GitHub) | No | **No** |
| Change branch protection | Founder | Yes (GitHub) | No | Not proposed |

## 11. Answers to the Specific Questions

| Question | Answer |
|---|---|
| What can be activated without waiting for GitHub? | BN-1 (local mirror and bundles), BN-2 (LGA Fast Gate per authorized SHA), BN-3 and BN-4 (decisions and support contact). BL-1 can also proceed before GitHub recovery once the Founder approves |
| What requires Founder approval? | Storage media for BN-1; R-1 person choice; Supabase Support contact; any new provider account (BL-1); every Supabase membership, MFA-enforcement or key action (BL-2); host software for BL-5; repository transfer (BL-7) |
| What requires new provider resources or cost? | BL-1 (new account, $0 expected); BL-2 (second Supabase account; cost to confirm). Team plan rejected |
| What requires secret handling? | BL-1 push token; BL-3 Full Assurance test credentials; any key rotation. BN-1 and BN-2 need none |
| What should remain blocked? | Supabase membership and Auth-setting changes until access is restored; Full Assurance without per-SHA authorization; any CI platform installation; any canonical-host change; branch-protection changes; implementation, SQL and migrations |
| Should migration authoring remain blocked? | **Yes.** EV-01 is OPEN, LGA is designed but not authorized or validated as a substitute, EV-02 is PARTIALLY EVIDENCED with Auth capture blocked, `SB-MIG-1.4` is NON-EXECUTABLE, and MC-179 Section 10 holds all other blockers unchanged. Continuity controls do not create migration authority |

## 12. Status

This is a read-only continuity design.

**Not done:**

- no account, membership, mirror, remote, CI platform or provider resource created;
- no GitHub or Supabase setting changed;
- no Full Assurance run;
- no secret read or exposed;
- no application code, SQL or migration authored or executed;
- no production action.

**Unchanged:**

- EV-01 OPEN;
- EV-02 PARTIALLY EVIDENCED (MC-178 capture blocked);
- Implementation Authorization WITHHELD;
- `SB-MIG-1.4` NON-EXECUTABLE;
- SQL and migration authoring NOT AUTHORIZED;
- production mutation NOT AUTHORIZED.
