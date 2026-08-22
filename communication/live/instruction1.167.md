# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11-GC-38R — CHAIN-OPTIONAL CONFIGURATION CORRECTION

**Instruction ID:** `instruction1.167`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Claude Engineering
**Date:** 2026-08-22
**Status:** AUTHORIZATION PENDING FOUNDER HUMAN MERGE

## Finding

Canonical `src/lib/parser-ingress/roles-anywhere.ts` permits the intermediate certificate chain to be empty, but `src/server-functions/parser-lease.ts` currently treats the empty chain as missing configuration. The current non-production workload certificate is directly signed by the registered Trust Anchor CA, so no intermediate chain exists.

## Authorization

Claude Engineering may make only the minimum correction required so the intermediate-chain configuration may be absent or empty while every other parser AWS configuration field remains required and fail-closed.

Preferred correction: preserve the existing empty-string fallback and exclude only `certificateChainPem` from the non-empty required-field validation.

Do not change IAM, Trust Anchor/Profile/role configuration, Lambda behavior, certificate identity, CA custody, Product Truth, public commands, or unrelated server logic.

## Verification

Prove that:

1. configuration loading succeeds when only the intermediate chain is absent;
2. all other required parser AWS configuration remains fail-closed when missing;
3. Roles Anywhere request construction continues to omit the chain header when no intermediate chain exists;
4. no sensitive values are logged, committed, or added to fixtures.

Required report: `communication/live/report1.166.md`.

Delivery must use a dedicated branch and human-reviewed PR. No self-merge and no runtime/provider action under this instruction.

## Follow-on

After this exact correction is merged and the Founder confirms the certificate verification checklist from `instruction1.166.md` is fully PASS, Mission Control may proceed with the already planned non-production server-side provisioning and Phase C runtime verification. Those operations are not authorized by this correction instruction itself.
