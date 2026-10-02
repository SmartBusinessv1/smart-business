# SB-P-1.12 — MC-181 Founder Continuity Decisions Report

**Mission:** SB-P-1.12 — Authority, Identity & Product Surface Foundation  
**Founder:** Riyas PK  
**Paired instruction:** `communication/live/instruction1.44.md`  
**Date:** 2026-10-02  
**Status:** `FOUNDER CONTINUITY DECISIONS SUBMITTED — AWAITING MISSION CONTROL DISPOSITION`

## 1. Founder decisions

The following decisions are preserved faithfully from the Founder response to MC-181.

### FD-C1

Approved — keep one encrypted, multi-generation recovery copy on normally disconnected external storage in a securely controlled off-site location physically separate from the Founder’s primary work location. The exact physical address will not be recorded in Git.

### FD-C2

Approved — use GitLab.com as the independent secondary Git provider. The repository will remain private and downstream/non-canonical while GitHub remains canonical. Authentication and recovery for the GitLab continuity account must not depend on the affected GitHub identity.

### FD-C3

Approved — use WSL2 with Ubuntu on existing Team LIPS-controlled hardware as the Linux parity environment for governed local validation. This environment is for Linux build/test parity and does not replace the independent backup or secondary Git-provider controls.

### FD-C4

Not selected yet — a second human Supabase Owner candidate will be selected based on long-term organizational trust, independent account recovery capability, and willingness to maintain secure individual MFA. No Supabase Owner invitation or role change is authorized by this decision.

Founder timing qualification, preserved faithfully:

> we will seriously consider this once we start getting active subscribers after phase 1 build is complete

### FD-C5

Approved — contact Supabase Support now for authoritative guidance on dashboard/account recovery, reducing dependency on the affected GitHub-linked login path, and the supported process for establishing a second human Owner in the future. This decision authorizes support enquiry and evidence gathering only; it does not authorize membership, authentication, MFA, key, project, or production mutations.

### FD-C6

Approved — use 1Password Teams Starter Pack as the Team LIPS organizational password manager and secret-recovery mechanism. Organizational credentials and recovery material must not be stored in Git or repository communication. Founder recovery material will be kept securely and independently from normal working devices, without recording secrets or its exact storage location in Git. A second recovery-capable human owner will be established when FD-C4 is resolved. Selection of 1Password does not itself authorize credential migration, secret rotation, or other provider mutations; those require a later authorized work package.

### FD-C7

Authorize evidence check — verify whether Team LIPS business email and domain/DNS administration already have independent recovery paths that do not depend solely on the Founder’s normal device or the affected GitHub identity. This authorization is for read-only evidence gathering only and does not authorize credential changes, MFA changes, DNS changes, registrar changes, mailbox changes, or any other provider mutation.

## 2. Secret-handling boundary

No passwords, tokens, MFA seeds, recovery codes, API keys or exact sensitive physical addresses are recorded in this report.

## 3. Preserved mission holds

The Founder decisions above do not themselves authorize Smart Business implementation, migration authoring/execution, runtime activation, test-fixture creation or production mutation. Existing MC-181 holds remain until separately changed by a later effective Mission Control record.

**FOUNDER CONTINUITY DECISIONS SUBMITTED — STOP FOR MISSION CONTROL AUTHORIZATION**
