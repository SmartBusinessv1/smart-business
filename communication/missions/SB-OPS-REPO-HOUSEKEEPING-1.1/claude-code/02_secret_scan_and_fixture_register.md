# SB-OPS-REPO-HOUSEKEEPING-1.1 — Secret Scan and Fixture Register

**Mission:** SB-OPS-REPO-HOUSEKEEPING-1.1
**Execution actor:** Claude Code
**Canonical baseline:** `main` at `7007edae1e1dea61c47a40aa9c96a37df5a0fdd1`
**Date:** 2026-10-03
**Companion report:** [`01_preseed_controls_execution_report.md`](01_preseed_controls_execution_report.md)

**No secret value appears in this register.** Locations use the Gitleaks finding coordinates (commit, file, rule, line). Gitleaks ran with `--redact=100`, so its report file holds no secret values. Classification evidence used masked context, decoded JWT `role`/`iss` claims, key-type prefixes and value-shape tests only.

## 1. Scan Summary

| Item | Value |
|---|---|
| Primary scanner | Gitleaks 8.30.1 (WinGet package `Gitleaks.Gitleaks`), built-in default ruleset; no repository Gitleaks configuration exists |
| Command shape | `gitleaks git <bare-clone> --log-opts="--branches --tags" --redact=100 --no-banner --report-format json --report-path <scratch>/gl-history.json --exit-code 0` |
| Scan target | Transient bare clone of `https://github.com/SmartBusinessv1/smart-business.git` in the session scratchpad: exactly the MC-186 seed-source shape |
| Refs covered | 670 `refs/heads/*` (including `main` = `7007eda`), 1 `refs/tags/*` (`eos-v1.0`), 0 `refs/pull/*` |
| Ref manifest SHA-256 | `fcb8804de0709a20e917646c21e185503e33212e62ad644a2897d897485bca85` (sorted `for-each-ref` of heads and tags; method in report 03, Section 2) |
| Commits reachable | 2,776 (58 merges); Gitleaks scanned 2,674 commit patches (56.21 MB). The difference is merge commits and commits with empty diffs; the blob census below independently covers every reachable blob |
| Secondary method | Census of all 3,461 blobs reachable from heads and tags: JWT role decoding, `sb_secret_`/`sb_publishable_` prefixes, private-key blocks with a body, GitHub, Slack and `sk-` tokens, and variable classes in every historical `.env*` version |
| Local non-canonical objects | 37 unreachable blobs in the Founder workstation clone, pattern-checked: 0 findings. They are not canonical and not part of any seed |
| Total Gitleaks findings | 38 (`generic-api-key` 19, `jwt` 11, `aws-access-token` 6, `private-key` 2) |

### 1.1 Triage counts

| Classification | Findings |
|---|---:|
| Credible secret | **0** |
| Legitimate test fixture | 12 |
| Historical/public identifier | 22 |
| False positive | 4 |
| Unresolved | **0** |
| **Total** | **38** |

| Location | Findings |
|---|---:|
| Present in current tree at `main` | 18 |
| History only | 20 |

One owner-confirmation item (project attribution, FX-04 and FX-05) remains. It does not affect any classification.

### 1.2 Census results (all reachable blobs)

| Check | Result |
|---|---|
| JWTs by decoded `role` | `anon`: 7; no claims (synthetic test token): 1; **`service_role`: 0** |
| `sb_secret_` keys | **0** |
| `sb_publishable_` keys | 1 (historical `.env.test`) |
| Private-key blocks with a body | 1 (the throwaway test key, FX-01) |
| GitHub tokens / Slack tokens / `sk-` provider keys | 0 / 0 / 0 |
| Historical `.env` variables | `SUPABASE_URL`, `VITE_SUPABASE_URL` (URL); `SUPABASE_PROJECT_ID`, `VITE_SUPABASE_PROJECT_ID` (project identifier); `SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_PUBLISHABLE_KEY` (anon JWT) |
| Historical `.env.test` variables | `SUPABASE_TEST_URL` (URL); `SUPABASE_TEST_ANON_KEY` (anon JWT, later `sb_publishable_`) |
| `.env.test.local.example` `SUPABASE_TEST_SERVICE_ROLE_KEY` | Empty in every historical version |

## 2. Fixture and Identifier Groups (HK-062)

| Group | Path(s) | What it is | Actively used | Nature | Would changing it break something? | Blocks first GitLab seed? | Narrowest proposed handling |
|---|---|---|---|---|---|---|---|
| FX-01 | `tests/parser-lease/roles-anywhere-decimal-serial.test.ts:47` | PKCS#8 private key, documented in-file as "generated solely for this test, never used for anything else" | Yes: signs the paired throwaway certificate (line 141); included by `vitest.config.ts`, `vitest.fast.config.ts`, `vitest.full.config.ts` | Throwaway test fixture | Yes: the test asserts on that exact key/certificate pair | No (Section 3) | Documented acceptance now. Later mission: fingerprint-scoped ignore entries, or generate the key and certificate at test runtime |
| FX-02 | `organizational-learning/tests/screening.test.ts:17, 36, 44` | Synthetic JWT and synthetic AWS-key-shaped strings proving the OLE screener quarantines secret-shaped input | Yes: OLE screening tests (fast and full configs) | Synthetic test fixture (JWT has no claims; key IDs are patterned) | Yes: the tests exist to detect these shapes | No | Documented acceptance. Later mission: fingerprint-scoped ignore entries, or build the strings at runtime by concatenation |
| FX-03 | `organizational-learning/tests/harvest-cli.test.ts:184` | Synthetic `key=` AWS-key-shaped string fed to the harvester's secret guard | Yes: OLE harvester CLI tests | Synthetic test fixture | Yes | No | As FX-02 |
| FX-04 | `communication/archive/SB-P-1.11/report.md:16872`; history: `communication/live/report1.57.md:54` | Supabase anon-role JWT quoted in SB-P-1.11 evidence | No (evidence text) | Publishable client key (`role: anon`); immutable archive (Protocol §26) | Editing alters immutable evidence; removal from history needs a rewrite (prohibited) | No | Documented acceptance as a publishable identifier; no rotation required by the anon key model; owner confirms project attribution |
| FX-05 | History only: `.env:2`, `.env:5` (Lovable bot commits `b4bd3cf933`, `97dd7d2f08`); `.env.test:6`, `.env.test:9` (`a1f0804876`, `0ea91766b3`) | Committed `.env`/`.env.test` contents before SB-P-1.11-GC-30 removed them (PR #288) | No (files not in tree) | Anon JWTs, one `sb_publishable_` key, URLs and project identifiers; **no service-role or secret key in any version** | Only a history rewrite (prohibited) could remove them | No | Documented acceptance; no rotation required; owner confirms project attribution |
| FX-06 | History only: `communication/live/instruction.md:55, 63`; `communication/live/report.md:41, 48` | Supabase auth user UUIDs of named synthetic verification owners | No | Identifier, not a credential; generic rule matched the UUID shape | History only | No | Documented acceptance |
| FX-07 | `communication/archive/SB-P-1.11/report.md:14689`; history: `communication/live/report1.44.md:152` | `new_token=` UUID in a concurrency-test log: a single-use price-confirmation preview token in the isolated `smart-business-test` project | No | Transient application-domain identifier, not a credential | Editing alters immutable evidence | No | Documented acceptance |
| FX-08 | `communication/archive/SB-P-1.11/instruction.md:52945`; history: `communication/live/instruction1.181.md:116` | Prose sentence ("After this credential repair succeeds, …") | No | False positive: `generic-api-key` matched a filename-like word near "credential" | n/a | No | Documented acceptance |

**Project-attribution note (FX-04, FX-05).** The anon JWTs in reachable history carry two distinct Supabase project references, compared by equality only and not recorded here. Neither matches the current isolated test project. The current production `.env` is not on this workstation, so whether either reference is the current production project could not be checked locally. Every such key is `role: anon` (publishable, protected by RLS), so this changes neither the classification nor the rotation answer. It is listed for owner confirmation only.

## 3. Pre-Seed Scanner-Handling Plan

### 3.1 Will GitLab block the first seed?

Assessed as **no**, based on GitLab's documentation for secret push protection (docs.gitlab.com, "Secret push protection", consulted 2026-10-03):

1. Secret push protection is an **Ultimate**-tier feature that a maintainer must enable per project; it is not on by default.
2. Even when enabled, it skips a file "contained in the initial push that created the repository".
3. It is skipped when a push changes more than 3,150 paths or 350,000 lines; the first seed is far larger.
4. It scans only the diffs of pushed commits.
5. GitLab pipeline Secret Detection runs in CI, needs a `.gitlab-ci.yml` (none exists in this repository), and does not block pushes.

Precondition: the GitLab project is created **blank** (no README or initial commit), as current Infrastructure guidance already specifies, so that the seed is the repository-creating push.

### 3.2 Proposed handling (nothing is created in this mission)

| Step | Handling | Scope |
|---|---|---|
| H-1 | Accept this register as the documented disposition of all 38 findings and groups FX-01 to FX-08 | Mission Control acceptance |
| H-2 | Seed into a blank project with secret push protection at its default (off). No allowlist is required for the first seed | First seed |
| H-3 | If any GitLab-side secret block occurs anyway: **stop**. Do not use `secret_push_protection.skip_all` or `[skip secret push protection]`; return to Mission Control with the reported rule and path. Any bypass needs explicit Mission Control authorization | Seed contingency |
| H-4 | Before enabling GitHub push protection (HK-060) or any CI secret gate: add a `.gitleaksignore` (or provider equivalent) listing **only the exact Gitleaks fingerprints** of the 38 accepted findings (`commit:file:rule:line`). Fingerprint scope is narrower than path or rule allowlists: new secrets in the same files are still caught | Later mission |
| H-5 | Optional fixture redesign (FX-01 to FX-03): build secret-shaped test strings at runtime and generate the throwaway key/certificate pair in-test, so future scanners see no literal matches | Later mission; test changes |
| H-6 | No history rewrite for FX-04 to FX-08: every value is publishable or an identifier, and archives are immutable | Standing |

No finding requires security action, rotation or invalidation.

## 4. Finding Register (all 38 Gitleaks findings)

*Rotation?* records whether rotation or invalidation appears necessary. *Seed blocker?* records whether the finding can block the first GitLab seed.

| ID | Rule | File:line | Commit | Location | Classification | Group | Severity | Rotation? | Seed blocker? |
|---|---|---|---|---|---|---|---|---|---|
| SS-01 | jwt | `organizational-learning/tests/screening.test.ts:17` | `4247cebc9e` | Current tree | Test fixture | FX-02 | Low | No | No |
| SS-02 | aws-access-token | `organizational-learning/tests/screening.test.ts:36` | `4247cebc9e` | Current tree | Test fixture | FX-02 | Low | No | No |
| SS-03 | aws-access-token | `organizational-learning/tests/screening.test.ts:44` | `4247cebc9e` | Current tree | Test fixture | FX-02 | Low | No | No |
| SS-04 | generic-api-key | `organizational-learning/tests/harvest-cli.test.ts:184` | `4247cebc9e` | Current tree | Test fixture | FX-03 | Low | No | No |
| SS-05 | aws-access-token | `organizational-learning/tests/harvest-cli.test.ts:184` | `4247cebc9e` | Current tree | Test fixture | FX-03 | Low | No | No |
| SS-06 | generic-api-key | `organizational-learning/tests/harvest-cli.test.ts:184` | `7198ee6a68` | Current tree | Test fixture | FX-03 | Low | No | No |
| SS-07 | aws-access-token | `organizational-learning/tests/harvest-cli.test.ts:184` | `7198ee6a68` | Current tree | Test fixture | FX-03 | Low | No | No |
| SS-08 | jwt | `organizational-learning/tests/screening.test.ts:17` | `7198ee6a68` | Current tree | Test fixture | FX-02 | Low | No | No |
| SS-09 | aws-access-token | `organizational-learning/tests/screening.test.ts:36` | `7198ee6a68` | Current tree | Test fixture | FX-02 | Low | No | No |
| SS-10 | aws-access-token | `organizational-learning/tests/screening.test.ts:44` | `7198ee6a68` | Current tree | Test fixture | FX-02 | Low | No | No |
| SS-11 | generic-api-key | `communication/live/instruction.md:55` | `a6d5d37f61` | History only | Historical/public identifier (synthetic verification UUID) | FX-06 | Low | No | No |
| SS-12 | generic-api-key | `communication/live/instruction.md:63` | `a6d5d37f61` | History only | Historical/public identifier (synthetic verification UUID) | FX-06 | Low | No | No |
| SS-13 | generic-api-key | `communication/live/instruction.md:55` | `9be82dd7a8` | History only | Historical/public identifier (synthetic verification UUID) | FX-06 | Low | No | No |
| SS-14 | generic-api-key | `communication/live/instruction.md:63` | `9be82dd7a8` | History only | Historical/public identifier (synthetic verification UUID) | FX-06 | Low | No | No |
| SS-15 | generic-api-key | `communication/live/report.md:41` | `2815df6014` | History only | Historical/public identifier (synthetic verification UUID) | FX-06 | Low | No | No |
| SS-16 | generic-api-key | `communication/live/report.md:48` | `2815df6014` | History only | Historical/public identifier (synthetic verification UUID) | FX-06 | Low | No | No |
| SS-17 | generic-api-key | `communication/live/report.md:41` | `92c423589b` | History only | Historical/public identifier (synthetic verification UUID) | FX-06 | Low | No | No |
| SS-18 | generic-api-key | `communication/live/report.md:48` | `92c423589b` | History only | Historical/public identifier (synthetic verification UUID) | FX-06 | Low | No | No |
| SS-19 | generic-api-key | `communication/live/instruction1.181.md:116` | `a017dfb7c7` | History only | False positive (prose) | FX-08 | None | No | No |
| SS-20 | generic-api-key | `communication/live/instruction1.181.md:116` | `e2429912ba` | History only | False positive (prose) | FX-08 | None | No | No |
| SS-21 | private-key | `tests/parser-lease/roles-anywhere-decimal-serial.test.ts:47` | `a2dd4a10e3` | Current tree | Test fixture | FX-01 | Low | No | No |
| SS-22 | private-key | `tests/parser-lease/roles-anywhere-decimal-serial.test.ts:47` | `e869db35ab` | Current tree | Test fixture | FX-01 | Low | No | No |
| SS-23 | generic-api-key | `communication/archive/SB-P-1.11/instruction.md:52945` | `3d2d3a44e6` | Current tree | False positive (prose) | FX-08 | None | No | No |
| SS-24 | generic-api-key | `communication/archive/SB-P-1.11/instruction.md:52945` | `dcb55bc8cd` | Current tree | False positive (prose) | FX-08 | None | No | No |
| SS-25 | jwt | `communication/live/report1.57.md:54` | `e6a3372ad0` | History only | Historical/public identifier (anon/publishable key) | FX-04 | Low | No | No |
| SS-26 | jwt | `communication/live/report1.57.md:54` | `78ef77637e` | History only | Historical/public identifier (anon/publishable key) | FX-04 | Low | No | No |
| SS-27 | generic-api-key | `communication/live/report1.44.md:152` | `e0b0c57e97` | History only | Historical/public identifier (test preview-token UUID) | FX-07 | Low | No | No |
| SS-28 | generic-api-key | `communication/live/report1.44.md:152` | `dba15dff7f` | History only | Historical/public identifier (test preview-token UUID) | FX-07 | Low | No | No |
| SS-29 | generic-api-key | `.env.test:9` | `0ea91766b3` | History only | Historical/public identifier (anon/publishable key) | FX-05 | Low | No | No |
| SS-30 | jwt | `.env.test:6` | `a1f0804876` | History only | Historical/public identifier (anon/publishable key) | FX-05 | Low | No | No |
| SS-31 | jwt | `.env:2` | `97dd7d2f08` | History only | Historical/public identifier (anon/publishable key) | FX-05 | Low | No | No |
| SS-32 | jwt | `.env:5` | `97dd7d2f08` | History only | Historical/public identifier (anon/publishable key) | FX-05 | Low | No | No |
| SS-33 | jwt | `.env:2` | `b4bd3cf933` | History only | Historical/public identifier (anon/publishable key) | FX-05 | Low | No | No |
| SS-34 | jwt | `.env:5` | `b4bd3cf933` | History only | Historical/public identifier (anon/publishable key) | FX-05 | Low | No | No |
| SS-35 | generic-api-key | `communication/archive/SB-P-1.11/report.md:14689` | `3d2d3a44e6` | Current tree | Historical/public identifier (test preview-token UUID) | FX-07 | Low | No | No |
| SS-36 | jwt | `communication/archive/SB-P-1.11/report.md:16872` | `3d2d3a44e6` | Current tree | Historical/public identifier (anon/publishable key) | FX-04 | Low | No | No |
| SS-37 | jwt | `communication/archive/SB-P-1.11/report.md:16872` | `dcb55bc8cd` | Current tree | Historical/public identifier (anon/publishable key) | FX-04 | Low | No | No |
| SS-38 | generic-api-key | `communication/archive/SB-P-1.11/report.md:14689` | `dcb55bc8cd` | Current tree | Historical/public identifier (test preview-token UUID) | FX-07 | Low | No | No |
