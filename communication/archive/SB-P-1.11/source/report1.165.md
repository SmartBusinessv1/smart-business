# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — WORKLOAD CSR HANDOFF ARTIFACT CORRECTION REPORT

**Report ID:** `report1.165`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Claude Engineering
**Recipient:** Mission Control
**In Reply To:** `communication/live/instruction1.164.md`
**Date:** 2026-08-22

---

## 1. Exact Canonical `main` SHA Reviewed

`141e08d` (`origin/main`, merge commit for PR #363 — `instruction1.164.md` itself).

Confirmed via `git fetch origin` followed by branching `fix/SB-P-1.11-GC-38R-handoff-dir-rename` from `origin/main` at this exact commit. `git log origin/main --oneline` confirms this is the tip of `main` at review time, immediately following PR #362 (Phase B non-production rerun #8 authorization, whose run produced the triggering `upload-artifact` warning cited in `instruction1.164.md` §1).

## 2. Exact Workflow References Changed

File: `.github/workflows/aws-gc38r-parser-deploy.yml`

`git diff --stat`: 1 file changed, 5 insertions(+), 5 deletions(-), across 3 hunks — every changed line is exactly `.parser-pki-handoff` → `parser-pki-handoff`, nothing else:

1. **Workload CSR generation step** (`id: workload_csr`) — directory creation and both copy destinations:
   ```diff
   -          mkdir -p "${GITHUB_WORKSPACE}/.parser-pki-handoff"
   -          cp workload.csr "${GITHUB_WORKSPACE}/.parser-pki-handoff/workload-certificate-signing-request.csr"
   -          cp workload.pkcs8.pem "${GITHUB_WORKSPACE}/.parser-pki-handoff/workload-private-key.pem"
   +          mkdir -p "${GITHUB_WORKSPACE}/parser-pki-handoff"
   +          cp workload.csr "${GITHUB_WORKSPACE}/parser-pki-handoff/workload-certificate-signing-request.csr"
   +          cp workload.pkcs8.pem "${GITHUB_WORKSPACE}/parser-pki-handoff/workload-private-key.pem"
   ```
2. **`Upload workload CSR/private key for out-of-band handoff` step** — the `actions/upload-artifact` `path:` input:
   ```diff
   -          path: .parser-pki-handoff/
   +          path: parser-pki-handoff/
   ```
3. **`Remove local PKI handoff copy from the runner workspace` step** — the cleanup path:
   ```diff
   -        run: rm -rf "${GITHUB_WORKSPACE}/.parser-pki-handoff" /tmp/parser-pki
   +        run: rm -rf "${GITHUB_WORKSPACE}/parser-pki-handoff" /tmp/parser-pki
   ```

A repository-wide grep for `\.parser-pki-handoff` after this change returns exactly one remaining match: `communication/live/instruction1.164.md` itself, which is the historical instruction record and correctly left unmodified.

## 3. Static/Synthetic Verification Evidence

No AWS API call, workflow dispatch, or provider mutation was performed (none is authorized by this instruction). Verification was performed entirely locally:

1. **YAML parses cleanly:** `js-yaml` load succeeds; 18 steps (unchanged count); `workflow_dispatch` trigger, `environment: aws-nonprod-parser`, and `if: github.ref == 'refs/heads/main'` branch gate all unchanged; the `Upload workload CSR/private key for out-of-band handoff` step's `with:` block parses to exactly `{"name":"gc38r-workload-csr-handoff","path":"parser-pki-handoff/","retention-days":1}` — artifact name and retention unchanged, and `include-hidden-files` remains absent from the step (i.e. still the action's documented default `false`, not newly set to `true`).
2. **Shell syntax parses cleanly:** the `workload_csr` step and the `Remove local PKI handoff copy from the runner workspace` step were each extracted via the same `js-yaml`-based method used in prior GC-38R reviews and checked with `bash -n`; both clean.
3. **CSR filename unchanged:** `workload-certificate-signing-request.csr` — present, byte-identical, only its parent directory's name changed.
4. **Workload private-key filename unchanged:** `workload-private-key.pem` — present, byte-identical, only its parent directory's name changed.
5. **Artifact name unchanged:** `gc38r-workload-csr-handoff` — confirmed via the parsed YAML in item 1 and via `git diff`, which shows no change to that line.
6. **Retention unchanged:** `retention-days: 1` — confirmed via the parsed YAML in item 1 and via `git diff`, which shows no change to that line.
7. **`include-hidden-files` unchanged:** the key is not present in the step before or after this change; `actions/upload-artifact@v4` documents its default as `false` when omitted, so behavior is unchanged — this correction relies on the directory no longer being hidden, not on relaxing that setting, per `instruction1.164.md` §2's explicit preference.
8. **No private key, CSR, certificate payload, AWS credential, or secret is logged:** confirmed by inspecting every line touched by this diff — each is a `mkdir`/`cp`/`rm -rf` path argument or a static YAML `path:` value; none prints file contents. The unrelated `Workload CSR handoff notice` step (unchanged by this diff) continues to reference file *names* only, never contents, exactly as before.
9. **Cleanup still removes the local handoff directory and `/tmp/parser-pki`:** confirmed in item 3 of §2 above — the `rm -rf` step still targets both paths, only the handoff directory name changed to match the rename.
10. **CA private-key custody untouched:** repository-wide grep for `PARSER_TRUST_ANCHOR_CA_PRIVATE_KEY|ca\.key|ca-private-key|openssl genrsa -out ca|openssl req -x509` against the corrected file returns zero matches, identical to its pre-correction state. This correction touches only the already-existing workload-keypair/CSR staging and handoff path, never the CA.
11. **All unrelated deployment steps remain unchanged:** confirmed via the full `git diff`, which contains exactly the 3 hunks described in §2 and nothing else — Trust Anchor/Profile reuse, Lambda create/update, the reserved-concurrency compatibility logic added by `report1.164.md`/PR #361, Function URL handling, the non-secret deployment summary, and every other step are byte-for-byte untouched.
12. **`git diff --check` (whitespace):** clean, exit 0.
13. **Staged-diff secret-pattern scan:** one incidental match on the literal substring `private-key` inside the pre-existing, unchanged filename `workload-private-key.pem` (present in both the removed and added diff lines, since only its parent directory changed) — this is a filename, not key material, and was already present in the file before this correction. No other pattern (`BEGIN ... PRIVATE KEY`, AWS access key ID, Supabase service-role/secret key patterns) matched.

### Local synthetic path test (per `instruction1.164.md` §3)

Using a throwaway local directory standing in for `GITHUB_WORKSPACE` (no real workflow run, no AWS/GitHub interaction), the exact corrected staging and path logic was reproduced:

- Created `parser-pki-handoff/` (no leading dot) containing exactly two synthetic files named `workload-certificate-signing-request.csr` and `workload-private-key.pem`.
- Confirmed the directory name itself has no leading-dot path segment, which is the specific condition `actions/upload-artifact`'s documented default `include-hidden-files: false` behavior excludes — the prior `.parser-pki-handoff/` directory was excluded by exactly this rule, producing the `No files were found` warning in `instruction1.164.md` §1's triggering evidence.
- A glob against `parser-pki-handoff/*` (matching the corrected `path: parser-pki-handoff/` upload-artifact input) matched exactly the two intended files, with unchanged filenames, confirming `actions/upload-artifact` would now target the intended non-hidden directory containing exactly those two files.
- Ran the corrected cleanup command against the same synthetic tree; the directory was fully removed.

## 4. Confirmation — Artifact Name, Filenames, Retention, Cleanup, and Secret-Handling Boundaries Unchanged

- Artifact name: `gc38r-workload-csr-handoff` — unchanged (§3 items 1, 5).
- CSR filename: `workload-certificate-signing-request.csr` — unchanged (§3 item 3).
- Workload private-key filename: `workload-private-key.pem` — unchanged (§3 item 4).
- Retention: `1` day — unchanged (§3 items 1, 6).
- `include-hidden-files`: still absent/default `false` — unchanged (§3 item 7); this correction was implemented via the preferred non-hidden-directory rename, not by relaxing this setting, per `instruction1.164.md` §2.
- Cleanup: still removes both `${GITHUB_WORKSPACE}/parser-pki-handoff` (renamed) and `/tmp/parser-pki` — unchanged in scope, only the first path's literal name updated to match the rename (§3 item 9).
- Secret handling: no private key, CSR, certificate payload, AWS credential, or secret is newly logged or exposed by this change (§3 item 8); the CA private key remains entirely outside this workflow's custody (§3 item 10).
- No IAM, deploy-policy, RuntimeBoundary, OIDC, GitHub Environment, Roles Anywhere resource, Lambda/S3 infrastructure, or workload-certificate-signing change occurred — confirmed by the full `git diff` containing only the 3 hunks in §2 (§3 item 11).
- The successful run #8 infrastructure state (Trust Anchor reuse, Profile, Lambda, non-secret summary) is preserved; this correction does not touch any of those steps.

## 5. Confirmation — No AWS Call or Workflow Run Occurred

Confirmed. This review consisted entirely of: reading `instruction1.164.md` and the current workflow file at the cited canonical SHA; editing three path references; static YAML/shell verification; and a local synthetic directory/glob/cleanup test using throwaway placeholder files (never real CSR, private-key, or certificate material, and never touching `/tmp/parser-pki` or any real AWS resource). No `aws` CLI command was run. No AWS resource was created, deleted, modified, or queried. The `aws-gc38r-parser-deploy.yml` workflow was not triggered or dispatched. No Phase B rerun occurred, and none is authorized by this report.

## 6. Final Disposition

`GC-38R WORKLOAD CSR HANDOFF ARTIFACT CORRECTION — READY`

Per `instruction1.164.md` §4 and §7, this correction does not authorize a workflow run, AWS API call, IAM/security/production change, or Phase C/Stage 21+ progression. The preferred non-hidden-directory-rename approach was technically straightforward and fully implemented; the fallback of enabling `include-hidden-files: true` globally was not needed and was not used.
