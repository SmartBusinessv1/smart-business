# SMART BUSINESS MISSION CONTROL — MC-187

# SB-P-1.12 — Founder GitLab Structure Decision and Infrastructure Guidance Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-03  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Input:** canonical MC-186 Track B partial report and Founder GitLab organizational direction  
**Implementation Authorization:** WITHHELD for Smart Business product implementation  
**Track:** B — Provider-independent source hosting

## 1. Context

MC-186 Track B stopped correctly at the human GitLab authentication boundary.

The Founder has now decided that GitLab should mirror the intended organizational structure already established for GitHub at the business-unit level, while using GitLab's supported group/project model.

This decision is organizational and continuity-oriented. It does not promote GitLab to canonical status and does not authorize application implementation or provider mutation outside the narrow GitLab setup described here.

## 2. Founder-approved GitLab structure

The intended GitLab account/group structure is:

1. a Founder-controlled GitLab.com account representing Lighthouse Information Publishing Service operationally;
2. three top-level GitLab groups:
   - `lighthouseips` — parent-firm websites and repositories;
   - `team-lips` — Team LIPS technology/product work, including Smart Business;
   - `lips-learners` — LIPS Learners work;
3. under `team-lips`, one private blank continuity project for Smart Business:
   - preferred path: `team-lips/smart-business-continuity`.

If an exact namespace is unavailable, the Infrastructure / Provider Operations specialist must stop and ask Mission Control/Founder for a naming decision rather than silently inventing a variant.

## 3. GitLab role

GitHub remains canonical for Smart Business.

GitLab remains:

- private;
- downstream;
- non-canonical;
- continuity-oriented.

The GitLab organizational structure may later support other legitimate Lighthouse/Team LIPS/LIPS Learners repositories, but this record does not authorize migration or creation of unrelated repositories.

## 4. Infrastructure / Provider Operations specialist task

The next sequential package is `communication/live/instruction1.48.md`.

The specialist must:

1. verify the current official GitLab.com account-creation URL using GitLab-owned documentation/pages only;
2. verify the current official GitLab.com URLs for:
   - account/profile;
   - password/security;
   - two-factor authentication;
   - recovery codes;
   - service sign-in / connected sign-in methods;
   - group creation;
   - project creation;
   - visibility settings;
3. produce a Founder-facing, step-by-step guide for creating the exact structure in §2;
4. distinguish every human secret-entry step from non-secret configuration;
5. explain how to verify that GitHub is not used as the GitLab sign-in/recovery dependency;
6. explain how to create the Smart Business continuity project as completely blank/private, with no README, license, .gitignore, CI/CD template or mirroring;
7. explain which values may safely be reported back to Mission Control after setup;
8. identify any current GitLab.com Free-plan or namespace/group limitations that materially affect the three-group plan;
9. use only current official GitLab sources for provider facts;
10. stop without performing provider mutations.

## 5. Required response format

The specialist response must include:

- **Official GitLab URLs**
- **Before you start**
- **Step 1 — Create the Lighthouse-controlled GitLab account**
- **Step 2 — Secure the account with 2FA and recovery**
- **Step 3 — Verify GitHub-independent sign-in**
- **Step 4 — Create `lighthouseips`**
- **Step 5 — Create `team-lips`**
- **Step 6 — Create `lips-learners`**
- **Step 7 — Create `team-lips/smart-business-continuity` as private and blank**
- **Step 8 — Verify final structure**
- **What to send back to Mission Control**
- **What must never be sent to Mission Control/AI**
- **Current GitLab limitations / caveats**
- **Exact authoritative GitLab source list**

The guide must be sufficiently explicit for a first-time GitLab user.

## 6. Human-only secret boundary

The specialist must never request or receive:

- password;
- MFA seed;
- one-time code;
- recovery code;
- access token;
- private key;
- recovery phrase;
- exact private storage location.

The guide may tell the Founder where to enter or store such material, but the values themselves must remain outside Git, chat and AI-visible communication.

## 7. Explicitly not authorized

This package does not authorize the Infrastructure specialist to:

- create the GitLab account;
- create the groups or project;
- enter credentials;
- enable MFA on the Founder's behalf;
- store recovery codes;
- seed or push any repository;
- configure mirroring;
- enable GitLab CI;
- promote GitLab to canonical;
- perform Track A, C or D work;
- modify GitHub organizations/repositories;
- modify Lovable or Supabase;
- change application code, SQL, migrations, runtime or production.

## 8. Preserved holds

Unchanged:

- GitHub remains canonical;
- Track A remains mandatory and hardware-blocked;
- Track C and Track D remain separately gated;
- Implementation Authorization remains WITHHELD;
- `SB-MIG-1.4` remains NON-EXECUTABLE;
- EV-01 OPEN;
- EV-02 PARTIALLY EVIDENCED;
- FD-C4 OPEN / DEFERRED;
- SQL/migration authoring and execution NOT AUTHORIZED;
- application implementation NOT AUTHORIZED;
- runtime activation NOT AUTHORIZED;
- test-fixture creation NOT AUTHORIZED;
- production mutation NOT AUTHORIZED.

**FOUNDER GITLAB STRUCTURE DECISION RECORDED — INFRASTRUCTURE GUIDANCE PACKAGE PREPARED — STOP FOR HUMAN MERGE**
