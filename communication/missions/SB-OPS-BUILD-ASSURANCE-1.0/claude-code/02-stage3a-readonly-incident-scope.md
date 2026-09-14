# Claude Code Stage 3A Report — Read-Only Incident Scoping

**Mission ID:** `SB-OPS-BUILD-ASSURANCE-1.0`
**Mission name:** Build Assurance & Automation Foundation
**Stage:** Stage 3A -- narrow read-only incident scoping (Founder Option B)
**Reporter:** Claude Code
**Status:** `STAGE 3A COMPLETE -- AWAITING MISSION CONTROL / FOUNDER`
**Date:** 2026-09-15

**Authority:** `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/founder/01-stage3-option-b-readonly-incident-scoping.md` (Founder Riyas PK, 2026-09-14, `OPTION B — READ-ONLY INCIDENT SCOPING REQUIRED BEFORE ACCEPTANCE`).

## 1. Objective

Determine, using local and repository evidence only, whether the historical Stage 1 `npm run test` target (the Supabase project designated by `SUPABASE_TEST_URL` during Claude Code's original local validation run, 2026-09-14) can be classified as clearly non-production/test-only, production/production-adjacent, or unresolved -- without contacting any provider, authenticating, querying/writing remote state, or handling secret values.

## 2. Evidence sources inspected

No sensitive values are reproduced anywhere in this report. Only non-secret identifiers (project references, hostnames, organization names/slugs) and file metadata are recorded.

1. `.gitignore` -- confirms `.env`, `.env.*` (except the two committed `*.example` templates) are untracked.
2. `git status --ignored` / `git ls-files` -- independently confirmed `.env.test`, `.env.test.local`, and `supabase/.temp/` are untracked, local-only, never committed.
3. Local filesystem listing (`ls -la`, PowerShell `Get-Item`) of `.env.test`, `.env.test.local`, `.env.test.example`, `.env.test.local.example` -- existence and full metadata (`CreationTime`, `LastWriteTime`, `LastAccessTime`, size). No file content beyond variable *names* and one safely-extracted hostname (Section 4) was read from the two real, gitignored files.
4. `.env.test` -- variable *names* only (`grep -oE "^[A-Z_]+="`), plus the `SUPABASE_TEST_URL` value's hostname extracted via `sed` (never the raw line, never the anon key).
5. `.env.test.local` -- variable *names* only. It defines only `SUPABASE_TEST_SERVICE_ROLE_KEY` (confirmed by name, not value); it does **not** redefine `SUPABASE_TEST_URL`, so `.env.test`'s URL is authoritative for the loaded environment.
6. `.env.test.example` and `.env.test.local.example` -- tracked, repository-committed, placeholder-only templates; read in full (safe by design).
7. `supabase/.temp/project-ref` and `supabase/.temp/linked-project.json` -- local Supabase CLI cache of the last `supabase link` target on this machine (non-secret project ref/name/org identifiers only).
8. `supabase/config.toml` -- tracked, contains only the repository's declared `project_id` (non-secret).
9. `docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md` -- tracked, `Status: ACCEPTED`, Mission-Control-reviewed (2026-07-26), commit `0ea9176` (confirmed an ancestor of `main`). Documents the dedicated test-project creation and isolation design.
10. `git log --oneline -- .env.test.example .env.test.local.example` and `git show` on the most recent touching commit (`759ad3d`, `SB-P-1.11-GC-30`) -- confirms the safe example templates' current, non-production-pointing content has not been reverted since the isolation mission.
11. Repository-wide `grep` for the production project reference (Section 5) under `tests/` and across the env-related config files -- independently re-verifies SB-MIG-1.2E-B's own "no remaining production reference under `tests/`" claim, as of today.
12. `tests/setup/test-clients.ts` and `tests/setup/load-env.ts` (already read in a prior stage) -- confirms both read `SUPABASE_TEST_URL`/`SUPABASE_TEST_ANON_KEY`/`SUPABASE_TEST_SERVICE_ROLE_KEY` purely from `process.env` with no hardcoded project reference or override.
13. `fsutil behavior query disablelastaccess` -- checked whether this machine's NTFS last-access-time tracking is reliable enough to weigh as evidence (Section 6).

No `npm run test`, no Supabase client call, no authentication, and no network request to any Supabase project was made at any point during this scoping (Section 9).

## 3. Does the local test-environment file exist now?

Yes. Both gitignored files exist on this machine:

- `.env.test` -- present, 131 bytes.
- `.env.test.local` -- present, 72 bytes.

## 4. Current non-sensitive Supabase hostname/project reference

`.env.test`'s `SUPABASE_TEST_URL` currently resolves to hostname:

```text
drravyyauixltoihzmwo.supabase.co
```

Project reference: `drravyyauixltoihzmwo`. This is a hostname/project-reference identifier only -- not a credential. No key value (anon or service-role) was read, printed, or recorded anywhere in this scoping.

## 5. Comparison with known project/environment references

| Reference | Value | Source |
|---|---|---|
| Current `.env.test` `SUPABASE_TEST_URL` hostname | `drravyyauixltoihzmwo.supabase.co` | Live local file, hostname-only extraction (Section 4) |
| Local Supabase CLI last-linked project | `drravyyauixltoihzmwo` / name `smart-business-test` / org `Smart Business Testing` (slug `himkzepyuyaejqjieugk`) | `supabase/.temp/linked-project.json` (local cache, untracked, `Aug 6` mtime) |
| Repository-declared canonical `project_id` | `gysgzasfcjvtrgaigfyn` | `supabase/config.toml` (tracked) |
| Documented production project reference | `gysgzasfcjvtrgaigfyn` | `docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md` Section 4 table and Section 7/10 |
| Documented dedicated test-project reference | `drravyyauixltoihzmwo` (org "Smart Business Testing", Free plan, region South Asia/Mumbai) | Same document, Section 4 |
| Safe template's setup instructions | "Get it from: Supabase dashboard -> project `drravyyauixltoihzmwo` ('smart-business-test', org 'Smart Business Testing')" | `.env.test.local.example` (tracked) |

The current `.env.test` hostname (`drravyyauixltoihzmwo`) matches the documented, dedicated, separate-organization test project exactly, and is a distinct string from the documented production reference (`gysgzasfcjvtrgaigfyn`). All independent sources -- the live local file, the local CLI's own cached link state, and the repository's committed isolation documentation -- agree with each other; none point to the production reference.

`docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md` (Mission `SB-MIG-1.2E-B`, `Status: ACCEPTED`, reviewed by Mission Control 2026-07-26) documents that, **before** that mission, `.env.test` did point at the production project (`gysgzasfcjvtrgaigfyn`) -- a real historical condition, since remediated. That mission created the dedicated `drravyyauixltoihzmwo` test project (distinct organization, distinct account boundary), repointed `.env.test`/`.env.test.local` to it, and confirmed via repository-wide search that no reference to the production project ref remained anywhere under `tests/`. This scoping independently re-ran that same class of search today (Section 2, item 11) and found no production reference under `tests/` or in the env-related config files.

## 6. Continuity evidence connecting the current value to the historical Stage 1 run

The current configuration is not automatically proof of what was loaded during Stage 1's actual local run on 2026-09-14. The following was assessed explicitly, not assumed:

| File | CreationTime | LastWriteTime | LastAccessTime |
|---|---|---|---|
| `.env.test` | 2026-08-25 23:30:55 | 2026-09-01 14:55:10 | 2026-09-14 20:25:42 |
| `.env.test.local` | 2026-07-24 16:42:00 | 2026-09-01 15:03:30 | 2026-09-14 20:25:42 |

- **Content stability (strong):** neither file's content was last modified after 2026-09-01 -- roughly two weeks before Stage 1's local run (2026-09-14) and continuously up to today (2026-09-15), with no write in between. The hostname extracted in Section 4 is therefore the same value that was on disk throughout Stage 1's execution window, provided nothing outside file-content modification altered what the test process actually loaded (see the shell-environment caveat below).
- **Access-time coincidence (suggestive, not conclusive):** both files show the identical `LastAccessTime`, `2026-09-14 20:25:42`, down to the second -- consistent with `tests/setup/load-env.ts`'s sequential `dotenv.config({path: ".env.test"})` then `config({path: ".env.test.local"})` calls being loaded together in a single process, at a time of day consistent with Stage 1's reported same-day local validation. This is corroborating, not dispositive: `fsutil behavior query disablelastaccess` on this machine reports `DisableLastAccess = 2 (System Managed, Last Access Time Updates ENABLED)`, but this scoping's own `cat`/`grep`/`Read` operations on the adjacent `.example` files (run minutes before this report was written) did **not** advance their `LastAccessTime` to today -- indicating access-time updates on this system are lazily deferred/batched in a way not fully understood from local inspection alone, so the matching Sep-14 timestamp is treated as circumstantial support, not proof.
- **Design continuity (strong, independent of this machine's file state):** the repository-committed, Mission-Control-accepted isolation design (Section 5) has designated `drravyyauixltoihzmwo` as the sole intended `SUPABASE_TEST_URL` target since 2026-07-26 -- roughly seven weeks before Stage 1 -- and nothing in the repository's tracked history since then reverts that design (Section 2, item 10).
- **Residual, irreducible gap:** file-content and metadata inspection cannot rule out a transient, session-scoped shell environment variable (e.g. an `export`/`$env:` override in a now-closed terminal) having overridden `SUPABASE_TEST_URL` for that one specific historical run without leaving any file-based trace. No artifact of such an override was found, and none is implied by any evidence gathered, but its absence cannot be proven from local file inspection alone -- this is stated as a limit, not a finding.

## 7. Classification

**CLEARLY NON-PRODUCTION / TEST-ONLY**

Basis: the current `SUPABASE_TEST_URL` hostname is a hostname/project-reference match to a dedicated, separate-organization test project that repository-committed, Mission-Control-accepted documentation independently describes as created specifically to be isolated from production, distinct from the documented production project reference; the local Supabase CLI's own independent cache agrees; the relevant files' content has not changed since roughly two weeks before Stage 1 and there is no evidence of any change since; and an independent repository-wide search today found no production reference anywhere in the test configuration or test source, corroborating the isolation mission's own prior finding.

## 8. Confidence and exact evidence limits

**Confidence: HIGH**, not absolute.

Supported by convergence of five independent, mutually corroborating, non-sensitive sources: (1) the live local file's hostname, (2) the local Supabase CLI's separately-cached link state, (3) the tracked, committed isolation-design documentation and its explicit project-reference table, (4) the tracked, committed setup-instruction template naming the same project, and (5) an independent, freshly-run repository-wide search confirming no production reference remains in test-related files today.

Explicit limits, none of which contradict the classification but which bound its certainty:

- This is a **local-evidence-only** scoping. No Supabase API, dashboard, or project-metadata call was made to independently confirm from the provider side that `drravyyauixltoihzmwo` is genuinely a distinct, isolated project (that confirmation exists only in this repository's own prior, accepted documentation, not re-verified against the provider here, per this stage's explicit no-contact boundary).
- LastAccessTime evidence is corroborating only (Section 6); this machine's access-time update behavior was not fully characterized.
- A transient, undocumented shell-level environment override during the specific historical run cannot be excluded by file inspection alone (Section 6).
- This scoping did not attempt to characterize the *complete* resulting remote state of the historical run (row counts, specific fixture rows written, etc.) -- that remains outside this stage's read-only, no-provider-contact authorization and is unchanged from the `INSUFFICIENT EVIDENCE` position already recorded in `docs/engineering/assurance/Build_Assurance_Baseline.md` Section 5, Finding 4, regarding the *complete effects* (as opposed to the *target identity*, which this report newly classifies).

## 9. Confirmation: no external provider call or mutation performed

No `npm run test` or other integration test was run. No Supabase client, admin API, or Auth call was made. No user was authenticated. No remote query, write, or cleanup was performed against any Supabase project. No credential value (anon key or service-role key) was read into this report, printed to any command output reviewed above, committed, or otherwise exposed -- every command used above was constructed to surface only variable names, one non-secret hostname, or already-safe, repository-committed placeholder/documentation content. No workflow, application code, test, dependency, CI configuration, branch protection, Product Truth, or governance file was modified. `SB-P-1.12` was not started. PR `#575` was not merged, approved, or self-approved.

## 10. Whether later cleanup/security follow-up appears necessary

No production-security incident follow-up appears necessary based on this classification: the historical writes landed in a purpose-built, isolated, non-production test project, not production.

One modest, non-urgent, ordinary test-hygiene item is worth Mission Control's attention (not performed here, and not a security action): the dedicated test project accumulates real fixture rows (synthetic Auth users, `businesses`, `inventory_items`, movements, catalog-import batches) across repeated local `npm run test` runs, as it has historically (see the prior cleanup precedents cited in `docs/migration/SB-MIG-1.2E/11-test-environment-isolation.md` Section 2, referencing `SB-MIG-1.2/03-test-data-cleanup-report.md`, `SB-MIG-1.2D/06-test-data-cleanup.md`, and `SB-MIG-1.2C/08-founder-actions.md` item #14, all predating and unrelated to this mission). Whether/when to periodically clean that dedicated test project's fixture data is a routine housekeeping question, not an incident, and is not addressed by this scoping.

## 11. Next authorized action

Mission Control reviews this classification and either proceeds to Stage 3 acceptance with the `CLEARLY NON-PRODUCTION / TEST-ONLY` finding recorded, or requests further Founder direction. Claude Code stops here. No merge, no further provider contact, and no `SB-P-1.12` activation is authorized by this report.
