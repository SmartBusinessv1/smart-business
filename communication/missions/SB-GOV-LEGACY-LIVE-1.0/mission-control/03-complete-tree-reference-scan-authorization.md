# Track B — Complete Tracked-Repository Reference Scan Authorization

**Status:** PROPOSED — effective only after Founder human merge and Mission Control verification on canonical main.  
**Workstream:** SB-GOV-LEGACY-LIVE-1.0; Communication Protocol v1.1 §§16–17; Source 18 and Phase 1 suspension boundaries remain controlling.  
**Date:** 2026-10-25 (Asia/Kolkata). **Baseline:** `main@462130f625c9366380ee37b87109d1831a5db49d`, PR #1072.  
**Purpose:** eliminate the sole scan-coverage blocker identified by MC-507DG/DH, not authorize removal.

## Evidence status
The GitHub recursive Git tree at baseline reports **2,856 entries, truncated=false**. This confirms enumerability of tracked paths, **not inspection of file contents**. In the current Mission Control tool environment a complete local checkout was unavailable. Prior GitHub indexed searches are limited/incomplete; hence no exhaustive scan has yet been demonstrated. Preservation PR #1070 remains verified: 90/90 identical historical snapshots. PR #1072 partial assessment retains all 90 numbered originals.

## Actor and explicit bounded Git grant
Mission Control proposes **Claude Code — Repository Scan Operator (Track B, distinct work package from SB-P-1.18 product-definition activity)** to perform a complete checkout scan. This appointment requires a separate actor instance from Track A; no work reassignment, branch sharing, or reuse of the active SB-P-1.18 live instruction/report pair.

**Founder/Mission Control authorizes Claude Code — Repository Scan Operator** for mission **SB-GOV-LEGACY-LIVE-1.0**, repository **SmartBusinessv1/smart-business**, on locked branch **`governance/legacy-live-full-scan-evidence`**, limited to:
- `communication/missions/SB-GOV-LEGACY-LIVE-1.0/manifest/complete-tree-reference-scan.md`
- `communication/missions/SB-GOV-LEGACY-LIVE-1.0/manifest/complete-tree-reference-hits.tsv`
- `communication/missions/SB-GOV-LEGACY-LIVE-1.0/manifest/complete-tree-scan-script.py`

Authorized operations after merge: fetch, fast-forward-only pull, checkout of a full tracked working tree from the immutable baseline, create/switch locked branch, read tracked file contents, stage exact authorized outputs, commit, push only that branch, and open one draft evidence PR. Descriptive commit subject prefix `docs(SB-GOV-LEGACY-LIVE-1.0):`; standard `Co-Authored-By` trailer **permitted**. End event is submission of first evidence PR or 2026-11-15 23:59 Asia/Kolkata, whichever earlier; revocation and Protocol §21 stops prevail. No direct main push, force push, self-merge, broad staging, or unrelated file changes.

## Required reproducible scan procedure
1. Verify checkout SHA `462130f625c9366380ee37b87109d1831a5db49d`; enumerate tracked paths with `git ls-files -z` (including content in tracked hidden files), and record count, exclusions and access failures. Git submodules, symlinks and binary files must be explicitly identified and their coverage limits reported, not silently skipped.
2. Build the exact 90-name inventory from `communication/live/`, including path and basename; compare source and preserved blob SHAs with PR #1070 manifest. Search **every tracked, text-readable file**, including Markdown, code, scripts, JSON, configs and docs, for **each exact live path, suitable relative-path variants and basename occurrences**. Include false-positive/suffix collision treatment. Do not depend on capped GitHub search.
3. For every hit, record referring tracked path, line, matched text, target suffix, full path vs basename, classification proposal (active dependency / historic reference / self-reference / ambiguous / false positive), proposed stable preserved destination and action needed; scripts and data must be deterministic and rerunnable from the captured SHA.
4. Independently inspect the 12 unmatched instruction cases and `report1.51.md` against durable mission files and PR evidence where necessary. Never infer execution/completion from filenames; mark evidence gaps OPEN. The scan operator may append findings in the evidence report but **may not amend** the existing 90-file clearance matrix under this grant.
5. Supply exact command, interpreter version, tracked-file count, text-scanned count, bytes/files excluded, scan results, output digest, unresolved references and CI. Zero hits must be evidenced by full coverage, not assumed.

## Independent verification gate
**Independent actor: Mission Control Repository Evidence Reviewer, not the scan operator and not a coauthor of its output.** Before accepting the evidence PR, reviewer validates SHA and complete tracked-tree coverage, reruns/spot-checks the deterministic scan using a separate accessible checkout or comparably complete tree, confirms referenced source lines and stable snapshot targets, inspects unresolved instruction cases, and reviews exact-head CI. If independent complete-tree access is unavailable, report **REVIEW BLOCKED**; do not declare exhaustive safety.

**No numbered-live removal authority** is granted. Any proposed live-path edit requires a separate explicit exact-file authorization and Founder human merge AFTER review. No editing `communication/live/`, no formal archive/Stage23/24 closure, no implementation, migrations, providers or production mutation. Track A SB-P-1.18 continues independently.

**STOP after one draft scan-evidence PR for Mission Control independent review.**
