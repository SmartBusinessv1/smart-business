# SMART BUSINESS MISSION CONTROL — MC-160

# GitHub Platform Incidents — Community Escalation Record

**Date:** 2026-10-01  
**Repository:** `SmartBusinessv1/smart-business`  
**Repository ID:** `1287523579`  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main`

## 1. Purpose

Record the two GitHub platform incidents affecting Smart Business governance work and the Founder-side escalation already completed through GitHub Community.

This record does not alter Product Truth, EIS, Blueprint, FCTM, implementation authority, branch protection, workflows, billing, provider state or production state.

## 2. Incident A — GitHub Actions dispatch failure

Observed repository state:

- GitHub Actions previously ran normally, including PR #689.
- Beginning around PR #690, expected workflow dispatch stopped.
- The failure has affected pull-request and push events across multiple workflows.
- GitHub creates no workflow run/check suite/check run/commit status for affected candidate SHAs.
- Current canonical `main` at time of this record: `1d0307c941c54e16b149ae7210c8131c58401666`.
- Current `main` workflow-run count observed through the connected GitHub source: 0.
- Current `main` commit-status count observed through the connected GitHub source: 0.

Founder-side inspection established:

- Actions General: **Allow all actions and reusable workflows**.
- No repository/account Actions-disabled banner was visible.
- Workflow permissions are read-only, consistent with the current validation workflows.
- Actions Policies: no policies configured.
- Policy Insights is unavailable on the current GitHub Free plan.
- Billing & Licensing showed GitHub Free, no payment/account-lock warning, and 0 of 2,000 included Actions minutes used for the current period.

Mission Control technical classification:

**LOCAL REPOSITORY SETTINGS CLEARED / ORDINARY ACTIONS MINUTE EXHAUSTION CLEARED / GITHUB BACKEND OR REPOSITORY ACTIONS DISPATCH-REGISTRATION INCIDENT SUSPECTED.**

GitHub Community escalation:

- Discussion #209242
- `https://github.com/orgs/community/discussions/209242`

## 3. Incident B — Pull Request / Issues search-read-model inconsistency

Direct repository state currently reports:

- PR #687: OPEN
- DRAFT
- UNMERGED
- exact head: `022aefbd49f483b8bca1ad469fd8980718670f67`

At the same time, repository-scoped GitHub search for open pull requests currently returns zero results.

Founder screenshots also showed the normal Pull Requests / Issues list pages returning no matching records while navigation badges and direct URLs continued to expose repository activity.

Mission Control technical classification:

**SERVER-SIDE ISSUES/PULL-REQUEST SEARCH / INDEX / READ-MODEL INCONSISTENCY — REINDEX REQUEST JUSTIFIED.**

GitHub Community escalation:

- Discussion #209244
- `https://github.com/orgs/community/discussions/209244`

## 4. Relationship between incidents

No common root cause is established.

Treat as:

**TWO INDEPENDENT GITHUB PLATFORM INCIDENTS UNTIL GITHUB STAFF ESTABLISHES OTHERWISE.**

Cross-reference the two discussions if GitHub staff requests correlation.

## 5. Operating rules while incidents remain open

1. Do not recreate PRs/issues merely to repair UI indexing.
2. Do not generate empty commits merely to trigger Actions.
3. Do not fabricate CI/check success.
4. Direct PR REST/state remains the interim source of truth for PR existence/state when search/list UI conflicts.
5. Missing Actions evidence must be recorded as missing, not inferred as pass.
6. Manual/local equivalence may be used only when risk-appropriate and explicitly governed; documentation-only exceptions do not automatically extend to application/security/migration/release work.
7. The Markdown Quality Gate remains advisory/on-demand and is not restored as a required merge blocker solely because Actions is repaired.
8. Application assurance remains conceptually required where runtime code is authoritative; its future placement between `smart-business` and `starter-supab-shell` is a separate governed CI-architecture decision.

## 6. Product mission impact

SB-P-1.12 Stage 10 may continue through exact-SHA, repository-native governance while the GitHub incidents are investigated.

These incidents do not authorize:

- EIS acceptance or lock;
- implementation package creation;
- application implementation;
- schema/SQL/migrations;
- provider mutation;
- production action;
- weakening of security, permission, migration or release assurance.

## 7. Next owner / next action

**GitHub platform recovery:** Founder monitors Discussions #209242 and #209244 for GitHub staff/community response and returns any substantive response to Mission Control.

**SB-P-1.12:** continue the already-authorized independent Security delta re-review under `communication/live/instruction1.27.md`.

**STOP for human merge of this record.**
