# SMART BUSINESS MISSION CONTROL — MC-187
# SB-P-1.12 — Infrastructure / Provider Operations: Founder GitLab Setup Guide

**Recipient:** Infrastructure / Provider Operations specialist room  
**Purpose:** Give the Founder the official GitLab.com URL(s) and a step-by-step guide to create the approved GitLab structure  
**Status:** EXECUTE ONLY AFTER THIS INSTRUCTION IS HUMAN-MERGED TO CANONICAL `main` AND MISSION CONTROL VERIFIES IT

Read first:

1. `communication/missions/SB-P-1.12/mission-control/57-founder-gitlab-structure-and-infrastructure-guidance-authorization.md`
2. `communication/live/report1.47.md`
3. `communication/missions/SB-P-1.12/mission-control/56-independent-gitlab-continuity-repository-authorization.md`
4. `docs/governance/GitHub_Operating_Model_and_Organization_Plan.md`

## Founder-approved target structure

The Founder is creating GitLab for the first time.

Guide the Founder to create:

```text
Founder-controlled GitLab.com account
Business identity: Lighthouse Information Publishing Service

├── lighthouseips
│   └── Parent-firm website / parent-firm repositories
│
├── team-lips
│   ├── smart-business-continuity
│   └── Future Team LIPS product/technology repositories
│
└── lips-learners
    └── LIPS Learners repositories
```

GitHub remains canonical for Smart Business.

`team-lips/smart-business-continuity` must be private, blank, downstream and non-canonical.

## Your task

Using **current official GitLab-owned documentation/pages only**, provide the Founder:

1. the official GitLab.com sign-up URL;
2. the official URLs/pages for account security, 2FA, recovery codes, sign-in/service connections, group creation and project creation;
3. a click-by-click, first-time-user guide to:
   - create the Lighthouse-controlled GitLab account without using GitHub sign-in;
   - enable 2FA;
   - store recovery codes under human custody;
   - verify GitHub is not a sign-in/recovery dependency;
   - create top-level group `lighthouseips`;
   - create top-level group `team-lips`;
   - create top-level group `lips-learners`;
   - create private blank project `team-lips/smart-business-continuity`;
   - make sure no README, license, .gitignore, CI/CD starter or mirroring is created;
   - verify the final group/project hierarchy;
4. any current GitLab.com Free-plan limits or namespace restrictions that could affect this exact three-group structure;
5. what non-secret values the Founder should send back to Mission Control after completion;
6. what secret values must never be sent to Mission Control or any AI.

If any exact namespace is unavailable, do not invent a replacement. Tell the Founder to stop and return the availability conflict to Mission Control.

## Required response structure

Return:

### Official GitLab URLs

### Before you start

### Step 1 — Create the Lighthouse-controlled GitLab account

### Step 2 — Secure the account with 2FA and recovery

### Step 3 — Verify GitHub-independent sign-in

### Step 4 — Create `lighthouseips`

### Step 5 — Create `team-lips`

### Step 6 — Create `lips-learners`

### Step 7 — Create `team-lips/smart-business-continuity` as private and blank

### Step 8 — Verify the final structure

### What to send back to Mission Control

### What must never be sent to Mission Control / AI

### Current GitLab limitations / caveats

### Exact authoritative GitLab source list

The guide must be explicit enough for someone who has never used GitLab before.

## Boundary

This is a guidance/research task only.

Do not:

- create the account;
- create groups/projects;
- request credentials;
- receive MFA/recovery secrets;
- seed GitLab;
- push repository refs;
- configure mirroring;
- enable CI;
- perform any other provider mutation.

Write the response to:

- `communication/live/report1.48.md`
- and, if the Infra room uses a durable specialist report path, its normal mission-scoped specialist report location.

No self-merge.

End with:

**GITLAB FOUNDER SETUP GUIDE SUBMITTED — STOP FOR MISSION CONTROL DISPOSITION**
