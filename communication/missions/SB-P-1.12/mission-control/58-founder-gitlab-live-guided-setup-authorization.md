# SMART BUSINESS MISSION CONTROL — MC-188

# SB-P-1.12 — Founder GitLab Live Guided Setup Authorization

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-03  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Input:** MC-187 accepted Founder GitLab setup guide (`report1.48.md`)  
**Recipient:** Infrastructure / Provider Operations specialist room  
**Track:** B — Provider-independent source hosting

## 1. Purpose

MC-187 produced and canonicalized the authoritative setup guide.

The Founder now requests **live, step-by-step guidance from the Infrastructure / Provider Operations room** while the Founder personally performs the human-only GitLab actions.

This is not a request for Mission Control or the specialist to create the account autonomously.

The specialist must act as a guided setup facilitator.

## 2. Guided-interaction model

The Infrastructure room must:

1. guide exactly **one setup step at a time**;
2. explain what the Founder should see and click;
3. identify any secret-entry boundary before the Founder reaches it;
4. explicitly tell the Founder to enter secrets only into GitLab / the authenticator / the approved human-controlled recovery location;
5. wait for the Founder's confirmation before advancing;
6. adapt to the actual GitLab UI the Founder reports seeing;
7. use the canonical MC-187 guide as the controlling procedure;
8. stop immediately on any namespace conflict, unexpected UI state, connected GitHub sign-in dependency, or potentially destructive/initializing option.

The specialist must not dump the whole guide again unless the Founder asks.

## 3. Approved target structure

The setup target remains:

```text
Founder-controlled GitLab.com account
Business identity: Lighthouse Information Publishing Service

├── lighthouseips
├── team-lips
│   └── smart-business-continuity
└── lips-learners
```

All three top-level groups must be Private.

`team-lips/smart-business-continuity` must be:

- Private;
- blank;
- zero commits;
- no README;
- no license;
- no .gitignore;
- no CI/CD starter;
- no mirroring;
- downstream/non-canonical.

GitHub remains canonical.

## 4. Human-only secret boundary

The Founder performs all secret-bearing actions.

The specialist must never request, receive, transcribe, store, repeat or inspect:

- password;
- MFA/TOTP seed;
- QR-code secret;
- OTP code;
- recovery code;
- access token;
- SSH private key;
- private encryption key;
- recovery phrase;
- session cookie;
- email password;
- other credentials.

If a screenshot is needed, the specialist must first tell the Founder to ensure it contains no secret values, QR codes, tokens or recovery material.

## 5. Required conversation behavior

Start with **Step 1 only**.

For each step:

- state the official page/URL to open;
- tell the Founder exactly what to click or select;
- warn about any option that must not be chosen;
- state the expected non-secret result;
- end with a short confirmation request such as:
  - `Tell me when this step is complete and what non-secret screen/result you see.`

Do not advance until the Founder confirms.

If the Founder describes a UI different from the canonical guide, use current official GitLab documentation to reconcile the UI before continuing.

## 6. Sequence

Guide the Founder through:

1. open the official GitLab.com signup page;
2. create the Lighthouse-controlled human account without GitHub sign-in;
3. complete email verification / anti-abuse steps if presented;
4. configure 2FA;
5. store recovery codes under human custody;
6. test GitLab-native sign-in;
7. verify GitHub is not connected under Service sign-in / Connected Accounts;
8. create private top-level group `lighthouseips`;
9. create private top-level group `team-lips`;
10. create private top-level group `lips-learners`;
11. create private blank project `team-lips/smart-business-continuity`;
12. verify zero commits / no initialization;
13. verify no mirroring;
14. verify no GitLab CI setup;
15. collect only the approved non-secret completion facts for Mission Control.

## 7. Stop conditions

STOP and return to Mission Control if:

- any required exact namespace is unavailable;
- GitHub appears connected as a sign-in dependency;
- GitLab requires an action that conflicts with MC-187;
- creating the project would require an initial commit;
- any secret would need to be shared with the specialist;
- the Founder is uncertain whether a screen contains recovery/credential data;
- provider behavior materially conflicts with the accepted guide.

## 8. Completion

After all steps are completed, the specialist must prepare the next repository-native report only when Mission Control requests repository recording.

During the interactive setup session, prioritize safe Founder guidance and do not create repository commits merely for conversational progress.

**FOUNDER LIVE GITLAB GUIDANCE AUTHORIZATION PREPARED — STOP FOR HUMAN MERGE**
