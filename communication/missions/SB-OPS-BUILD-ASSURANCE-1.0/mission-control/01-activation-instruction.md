# SMART BUSINESS MISSION CONTROL

## SB-OPS-BUILD-ASSURANCE-1.0 — Build Assurance & Automation Foundation

**Sender:** Mission Control  
**Recipient after activation merge:** Claude Code  
**Mission type:** Non-Product operational / engineering-assurance mission  
**Status:** Founder authorized — repository activation pending  
**Date:** 2026-09-14

## Objective

Create the smallest useful automated application-build assurance baseline for the canonical Smart Business repository before the next Product Mission begins.

This mission strengthens verification only. It does not change Product Truth, product behaviour, merchant UX, production data, infrastructure, providers, or the future `SB-P-*` sequence.

## Build Now

After this activation package is merged, Claude Code shall:

1. verify the latest canonical `main` and repository toolchain;
2. inspect existing package scripts and GitHub Actions workflows;
3. identify which dependency-install, lint, typecheck, build, and automated-test commands are genuinely supported now;
4. create one minimal application-assurance workflow that executes only real supported checks;
5. create one assurance-baseline document that states what each check proves and does not prove;
6. record exact validation results and unresolved gaps;
7. return a repository stage report for Mission Control review.

## Authorized Stage 1 paths

Claude Code may change only:

- the mission-owned application-assurance workflow under `.github/workflows/`;
- `docs/engineering/assurance/` for the assurance baseline document;
- `communication/missions/SB-OPS-BUILD-ASSURANCE-1.0/claude-code/` for reports/evidence;
- mission README / handover / decision metadata only where required by the communication protocol;
- `communication/live/report.md` for the current specialist response.

No other path is authorized without a written Mission Control correction.

## Explicit prohibitions

Do not:

- modify application source code;
- modify dependencies, versions, `package.json`, or lockfiles merely to make CI pass;
- modify Product Truth, governance, roadmap, feature contracts, routes, permissions, pricing, or UX;
- start `SB-P-1.12`;
- mutate Supabase, schema, RLS, grants, RPCs, production data, Lovable, AWS/Lambda, Cloudflare, Meta/WhatsApp, OpenAI, deployment, or runtime state;
- change branch protection;
- suppress failures or create placeholder success;
- self-approve or self-merge.

If an assurance check exposes a pre-existing application defect, report it as `FAIL` or `FOLLOW-UP`. This mission does not automatically authorize repair.

## Assurance rules

- **Real checks only:** every workflow command must correspond to a real current repository capability.
- **Fail closed:** a failed check must fail the job; do not hide failures.
- **Bounded evidence:** green CI proves only the checks it actually runs.
- **No product repair:** assurance does not silently become implementation.
- **Low ceremony:** prefer one clear workflow and one evidence contract.
- **Reproducible:** record exact commands and material tool/runtime versions.
- **Secret-safe:** ordinary build assurance must not depend on production secrets.

## Expected deliverables

Return:

- exact workflow path;
- `docs/engineering/assurance/Build_Assurance_Baseline.md` (or one equivalently clear assurance document);
- Claude Code stage report;
- exact check inventory and classification;
- validation results;
- branch, commit and PR evidence;
- unresolved gaps;
- explicit confirmation that prohibited product/runtime/provider mutation did not occur.

## Independent review

Claude Code stops after its Stage 1 report. Mission Control will separately activate Codex for independent review. Claude Code does not activate the reviewer itself.

## Stop conditions

Stop and report if:

- current `main` materially conflicts with this instruction;
- unrelated working-tree changes exist;
- the authorized paths are insufficient;
- application/dependency changes appear necessary;
- an assurance check exposes a product defect requiring repair;
- repository, branch, authentication, or target state is unclear;
- Product Truth, security, database, production, or Founder judgement is required.

Do not broaden the mission to solve a stop condition.
