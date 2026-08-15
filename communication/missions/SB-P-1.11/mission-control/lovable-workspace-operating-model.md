# SMART BUSINESS — LOVABLE WORKSPACE OPERATING MODEL

## SB-P-1.11 — Product Catalog & Pricing

**Record Type:** Mission Control operational decision  
**Decision Date:** 2026-08-16  
**Authority:** Founder / Mission Control  
**Scope:** Smart Business Lovable workspace identity, repository authority, and implementation handoff boundaries

---

## 1. Purpose

This record removes ambiguity between the two Smart Business Lovable projects and defines the operating model every participating AI, builder, reviewer, and operator must follow.

This is an operational clarification. It does not change Product Truth, the locked Product Blueprint, the locked EIS, the locked Stage 12 implementation package, permissions, database architecture, or release authority.

---

## 2. Current Lovable Builder Environment

The current Lovable builder environment is:

- **Display name:** `Smart Business Implementation Workspace`
- **Lovable project ID:** `f3e992ec-06df-4d49-b157-b92ec064c078`
- **Connected GitHub repository:** `SmartBusinessv1/starter-supab-shell`
- **Role:** current Lovable implementation workspace

All new Smart Business Lovable implementation must use this project unless Mission Control explicitly authorizes a different environment.

The connected `starter-supab-shell` repository is a derivative Lovable working/export repository. It is not the canonical Smart Business repository and does not gain Product Truth, governance, release, or repository authority through platform connection.

---

## 3. Legacy Lovable Workspace

The historical Lovable project is:

- **Display name:** `Smart Business Legacy Lovable Workspace`
- **Lovable project ID:** `64c2b9b1-2461-4045-9acc-19e2658b8ca2`
- **Role:** historical / previous Lovable workspace

It must be preserved for continuity and reference.

It must not be used for new implementation unless Mission Control separately authorizes a bounded maintenance, recovery, migration, or historical-verification action.

Do not disconnect, repoint, publish, deploy, or otherwise mutate the legacy workspace merely to simplify current development.

---

## 4. Canonical Repository Authority

The operational version-control authority and canonical Smart Business implementation repository remains:

`SmartBusinessv1/smart-business`

This rule is unchanged.

Neither of the following may replace or override it:

- `SmartBusinessv1/starter-supab-shell`;
- Lovable project state or chat history;
- the Legacy Lovable Workspace Git connection;
- platform-generated commits or project metadata.

GitHub canonical authority is determined by approved Smart Business governance and Mission Control, not by which repository a platform happens to be connected to.

---

## 5. Stage 15 Execution Bridge

For SB-P-1.11 Initial Phase 1, the operating sequence is:

1. Lovable implementation occurs only inside `Smart Business Implementation Workspace`.
2. Lovable may write only the scope authorized by the merged implementation-authorization record and locked package.
3. Lovable-generated implementation state may be recorded in the derivative `starter-supab-shell` repository because that is the workspace's connected Git repository.
4. That derivative repository remains implementation evidence / transfer source only. It is not accepted as canonical implementation merely because a Lovable build succeeds.
5. Before any implementation can become canonical, Mission Control must authorize a repository-transfer step that reproduces the verified implementation delta onto the exact authorized branch in `SmartBusinessv1/smart-business`.
6. The repository-transfer step must be mechanical and scope-preserving. It must not redesign, reinterpret, modernize dependencies, alter Product Truth, or add unrelated changes.
7. The actor performing the canonical transfer must not be allowed to approve the transfer as independent verification of its own work.
8. Claude Code independent verification remains a later lifecycle gate against the canonical `smart-business` repository after the transfer and required Founder runtime review.

Until the canonical-transfer step is separately authorized, Lovable may not claim that its implementation has become canonical in `smart-business`.

---

## 6. Deployment and Domain Boundary

This operating model does not grant:

- production deployment;
- Lovable publication;
- custom-domain reassignment;
- production database mutation;
- backend identity change;
- repository renaming;
- GitHub disconnection or reconnection;
- scope expansion.

All such authority remains separate and explicit.

---

## 7. AI and Platform Behaviour

Every participating AI or platform must use the following interpretation:

**Smart Business Implementation Workspace**  
= current Lovable builder environment.

**Smart Business Legacy Lovable Workspace**  
= historical / previous Lovable project; preserve, but do not use for new implementation.

**`SmartBusinessv1/smart-business`**  
= canonical implementation repository and operational version-control authority.

**`SmartBusinessv1/starter-supab-shell`**  
= derivative Lovable working/export repository; implementation evidence and transfer source only.

If any instruction, platform behavior, or remembered assumption conflicts with this model, STOP and return the conflict to Mission Control.

---

## 8. Mission Control Decision

`SB-P-1.11 LOVABLE WORKSPACE OPERATING MODEL — ACTIVE UPON HUMAN MERGE`

This record becomes the durable SB-P-1.11 operating reference after human review and merge to `main`.
