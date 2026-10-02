# SMART BUSINESS MISSION CONTROL — MC-185

# SB-P-1.12 — Founder Source-Continuity Prerequisite Disposition

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Date:** 2026-10-02  
**Owner:** Mission Control  
**Status:** DRAFT — EFFECTIVE ONLY AFTER HUMAN MERGE TO CANONICAL `main` AND POST-MERGE VERIFICATION  
**Input:** `communication/live/report1.46.md`  
**Baseline:** `main@548b3330feecc4c9fcc3a78f8ec0e9189cc77ac8`  
**Implementation Authorization:** WITHHELD  
**Candidate migration mission:** `SB-MIG-1.4` — NON-EXECUTABLE

## 1. Purpose

MC-184 requested two Founder prerequisite decisions before source-continuity step 1 could be retried.

Both decisions are now resolved and preserved in `communication/live/report1.46.md`.

## 2. Mission Control disposition

### SC-P1 — encryption class

**Disposition: ACCEPT — DECISION SUFFICIENT.**

Approved class:

- hardware-encrypted external storage;
- unlock material remains controlled by the Founder or another explicitly authorized human custodian;
- unlock material must not be placed in Git or repository communication.

This selection does not itself create, configure or unlock any device.

### SC-P2 — external media availability

**Disposition: ACCEPT — PROCUREMENT BLOCKER CONFIRMED.**

The Founder states that two suitable external storage devices must first be obtained.

Therefore MC-181 §8 step 1 remains **BLOCKED** and may not be retried yet.

## 3. Binding controls carried forward

Unchanged:

- no unencrypted internal-disk exemption;
- the continuity mirror must reside on verified encrypted storage;
- any required PIN/passphrase/unlock secret is entered and retained by a human, never by an AI actor;
- no secret value, recovery material or exact private physical address enters Git;
- step 1 cannot be marked complete until the Founder confirms the site-independent copy is normally disconnected and held in the approved separate-location class.

## 4. Exact next action

The next action is a **Founder operational prerequisite**, not an AI implementation work package:

**obtain two suitable Founder-controlled hardware-encrypted external storage devices.**

One device will serve as the encrypted continuity working/recovery medium.

The second will serve as the encrypted recovery medium intended for normally disconnected, site-independent FD-C1 custody.

Mission Control does not prescribe a specific product or purchase through this record.

When the Founder confirms that the two suitable devices are available, Mission Control may issue the next sequential communication as `communication/live/instruction1.47.md` to verify availability and authorize a fresh step-1 retry under an exact then-current canonical SHA.

No `instruction1.47.md` is issued by this draft.

## 5. Explicitly not authorized

Still not authorized:

- mirror or bundle creation/retry;
- plaintext backup creation;
- AI-generated or AI-held secret material;
- 1Password activation or credential migration;
- GitLab account/repository/remote creation or seeding;
- restore drill;
- WSL2/LGA work;
- Supabase work or provider mutation;
- FD-C7 evidence work;
- application code changes;
- SQL/migration authoring or execution;
- test fixtures;
- runtime activation;
- production mutation.

## 6. Preserved mission boundary

Unchanged:

- Implementation Authorization: WITHHELD;
- `SB-MIG-1.4`: NON-EXECUTABLE;
- EV-01: OPEN;
- EV-02: PARTIALLY EVIDENCED;
- FD-C4 second-human Supabase Owner: OPEN / DEFERRED;
- SQL/migration authoring: NOT AUTHORIZED;
- migration execution: NOT AUTHORIZED;
- application implementation: NOT AUTHORIZED;
- runtime activation: NOT AUTHORIZED;
- test-fixture creation: NOT AUTHORIZED;
- production mutation: NOT AUTHORIZED.

**FOUNDER SOURCE-CONTINUITY PREREQUISITES DISPOSITIONED — STOP FOR HUMAN MERGE AND DEVICE PROCUREMENT**
