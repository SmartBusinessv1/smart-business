# SMART BUSINESS — REPOSITORY COMMUNICATION

# SB-P-1.11 — CLOUDFLARE ACCOUNT + NON-PRODUCTION WORKERS ONBOARDING AUTHORIZATION

**Instruction ID:** `instruction1.169`
**Mission:** `SB-P-1.11 — Product Catalog & Pricing`
**Workstream:** `GC-38R — Lambda Parser Non-Production Deployment`
**Sender:** Mission Control
**Recipient:** Infrastructure Operations
**Date:** 2026-08-25
**Status:** AUTHORIZATION PENDING FOUNDER HUMAN MERGE

---

## 1. Objective

Establish only the minimum Cloudflare foundation required to unblock `instruction1.168.md` Phase C C1 runtime-target identification.

Authorized outcome:

1. create the official Team LIPS / Smart Business Cloudflare account;
2. establish one non-production Cloudflare Workers server runtime suitable for the canonical Smart Business TanStack Start / Nitro server code;
3. confirm support for server-only secret bindings;
4. return exact non-secret runtime identity evidence so Mission Control can resume Phase C immediately.

This is a blocker-removal mission, not a general Cloudflare architecture program.

---

## 2. Governance Execution Principle

Execute under the approved Smart Business governance foundation and Mission Control doctrine.

Governance must reduce execution risk without becoming the dominant source of execution delay.

For this mission:

- keep security boundaries strict;
- keep process boundaries flexible;
- prefer the fastest reversible compliant path;
- do not create serial review gates without a material risk reason;
- do not pause for ceremonial approvals where this instruction already grants authority;
- if blocked, immediately identify practical compliant workarounds rather than waiting passively;
- escalate to the Founder only for human account ownership, legal acceptance, MFA, payment/cost approval, irreversible provider choices, or genuine authority decisions;
- do not broaden scope in the name of future-proofing.

Maximum clarity. Minimum necessary ceremony.

---

## 3. Organizational Identity

Use organizational identity consistent with:

- **Parent Organization:** Lighthouse Information Publishing Service — LIPS
- **Technology Unit:** Team LIPS
- **Product:** Smart Business

Founder retains ownership of account credentials.

Do not request, record, or place into repository/chat/report:

- password;
- OTP;
- recovery codes;
- MFA secrets;
- payment-card information.

Enable appropriate MFA during onboarding when available.

---

## 4. Authorized Cloudflare Scope

Infrastructure Operations may guide and execute the minimum setup required for:

### A. Cloudflare Account

Create the official organizational Cloudflare account required for Smart Business non-production infrastructure.

Use a free plan where sufficient for this mission.

Skip optional products and paid features unless technically necessary. If a paid commitment is unavoidable, stop only for Founder cost approval.

### B. Non-Production Workers Runtime

Create exactly one minimum non-production Cloudflare Workers/server runtime needed for Phase C.

Requirements:

- non-production only;
- capable of running server-side code;
- capable of holding server-only secret bindings;
- suitable for canonical Smart Business TanStack Start / Nitro execution;
- no public production release;
- no production-domain migration;
- no unrelated Worker/service creation.

### C. Runtime Identity Evidence

Return exact non-secret evidence for:

- Cloudflare account name/identity;
- Cloudflare account ID where operationally relevant;
- exact Worker/project/service name;
- environment name;
- runtime type;
- deployment source;
- repository/branch/commit if connected;
- confirmation that server-only secret bindings are supported;
- confirmation that server-only values are not exposed to browser/client bundles;
- runtime URL if created;
- deployment status.

Do not expose secret values.

---

## 5. Explicit Non-Authorization

This instruction does **not** authorize:

- Cloudflare R2 creation or migration;
- DNS migration or nameserver changes;
- moving `smartbusiness.teamlips.com`;
- production routing changes;
- public Smart Business deployment;
- parser certificate/private-key provisioning;
- AWS IAM, Roles Anywhere, Trust Anchor, Profile, Lambda, or S3 changes;
- production Supabase changes or migrations;
- Lovable publication;
- unrelated Cloudflare products or infrastructure.

The GC-38R parser ingress storage remains AWS S3.

Do not provision the Phase C parser credentials yet:

- `PARSER_WORKLOAD_CERTIFICATE_PEM`
- `PARSER_WORKLOAD_PRIVATE_KEY_PEM`

Those remain governed by the already-active `instruction1.168.md` and may proceed only after Mission Control verifies C1 against the runtime created here.

The CA private key and CA passphrase remain entirely outside this mission.

---

## 6. Execution Style

Proceed efficiently.

When the Founder must personally:

- create/own the account;
- enter organization/contact details;
- accept Cloudflare legal terms;
- configure MFA;
- approve a cost;

provide step-by-step guidance.

For routine reversible infrastructure choices already inside this authorization, Infrastructure Operations should proceed without unnecessary governance delay.

Do not stop because of optional settings. Use sensible reversible defaults and continue.

---

## 7. Required Completion Report

Return a concise repository communication report to Mission Control containing:

1. Cloudflare account created — PASS / FAIL;
2. MFA enabled — PASS / FAIL;
3. non-production Workers runtime created — PASS / FAIL;
4. exact Worker/project/service identity;
5. environment name;
6. server-side secret support confirmed — PASS / FAIL;
7. client-exposure boundary confirmed — PASS / FAIL;
8. deployment source/repository/branch/commit;
9. runtime URL if applicable;
10. any blocker requiring Mission Control or Founder decision.

Final disposition must be exactly one of:

- `CLOUDFLARE NON-PRODUCTION WORKERS ONBOARDING — PASS`
- `CLOUDFLARE NON-PRODUCTION WORKERS ONBOARDING — BLOCKED`
- `CLOUDFLARE NON-PRODUCTION WORKERS ONBOARDING — FAIL`

If PASS, include:

`GC-38R PHASE C C1 — READY FOR MISSION CONTROL RUNTIME TARGET VERIFICATION`

Any repository report must be delivered on a dedicated branch and human-reviewed PR. No self-merge.
