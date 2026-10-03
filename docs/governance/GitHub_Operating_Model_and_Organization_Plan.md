# GitHub Operating Model and Organization Plan

**Owner:** Founder / Team LIPS  
**Parent organization:** Lighthouse Information Publishing Service (LIPS)  
**Status:** Founder-approved intended operating model  
**Recorded:** 2026-10-03  
**Scope:** GitHub account usage, organization structure, repository placement, connected development services, and future migration intent

## 1. Purpose

This document records how Lighthouse Information Publishing Service, Team LIPS, Smart Business, and related units intend to use GitHub.

Its purpose is to prevent future human or AI actors from misinterpreting normal repository, organization, integration, API, and AI-assisted development activity as accidental or unauthorized structure.

This is an operating-model record. It does not by itself authorize repository transfers, provider mutations, credential changes, production changes, or other actions that require a separately governed work package.

## 2. Core GitHub role

GitHub is intended to serve as a primary software-development and engineering-governance platform for Team LIPS and related Lighthouse units.

Approved/intended uses include:

- application source-code hosting;
- technical and implementation documentation;
- architecture, security, product, governance, and operational records;
- branch-based development;
- narrowly scoped commits;
- pull-request review and human merge;
- repository history and traceability;
- release and version-control activity;
- GitHub Actions or equivalent CI/build/test workflows when available and permitted;
- API-driven and developer-tool-driven repository operations;
- AI-assisted software-development workflows under human governance.

High commit or pull-request frequency may be normal because Team LIPS intentionally prefers small, auditable, narrowly scoped changes over large uncontrolled changes.

AI tools may assist with preparation, analysis, documentation, branches, commits, pull requests, and code changes, but human decision ownership and applicable Mission Control authority remain controlling.

## 3. Smart Business development integrations

The current GitHub account is also part of the authentication/integration workflow for paid development services used by Smart Business.

### Lovable

Lovable is used as part of the Smart Business frontend development workflow.

GitHub repository connectivity may be used for synchronization between Lovable-managed frontend work and the governed repository.

Loss of GitHub authorization can therefore disrupt the Lovable repository connection.

### Supabase

Supabase is used as part of the Smart Business backend/data-platform workflow.

The current GitHub identity is used as part of account/login or connected development access for the paid Supabase environment.

GitHub account continuity therefore has operational importance beyond source-code hosting.

Nothing in this section authorizes Supabase membership, authentication, MFA, key, schema, migration, runtime, or production mutations outside separately approved authority.

## 4. Current organizational structure

### 4.1 Current Smart Business account/repository location

The active Smart Business repository currently resides under the existing GitHub identity/account:

`SmartBusinessv1/smart-business`

Until a separately authorized repository-transfer mission is completed and verified, this repository remains the canonical Smart Business repository.

Other repositories may also exist under the SmartBusinessv1 account. Their current location does not imply that SmartBusinessv1 is the intended permanent organizational home for every Team LIPS repository.

### 4.2 Lighthouse parent-firm organization

A GitHub organization has been created for Lighthouse Information Publishing Service under the organization handle:

`lighthouselips`

Its purpose is to contain repositories belonging directly to the parent firm.

The Lighthouse parent-firm website repository is intended to live in this organization.

This separation is deliberate: parent-firm repositories should not be mixed unnecessarily with product/unit repositories.

## 5. Planned organization structure

The Founder intends to establish additional GitHub organizations so repository ownership reflects the real organizational structure.

### 5.1 Team LIPS organization

A dedicated **Team LIPS** GitHub organization is planned for the technology and product-development unit.

Intended scope includes:

- Smart Business;
- future Team LIPS products;
- shared Team LIPS engineering assets;
- technology-unit documentation and repositories that properly belong to Team LIPS.

The exact GitHub organization handle is not fixed by this document unless separately recorded later.

### 5.2 LIPS Learners organization

A dedicated **LIPS Learners** GitHub organization is planned for the LIPS Learners unit.

Its repositories should remain organizationally separate from both the parent-firm website repositories and Team LIPS product-development repositories.

The exact GitHub organization handle is not fixed by this document unless separately recorded later.

## 6. Planned Smart Business repository migration

The Founder intends, at an appropriate later stage, to move the relevant repositories currently under `SmartBusinessv1` into the future Team LIPS GitHub organization.

This is a **planned organizational migration**, not an authorization to transfer repositories immediately.

Before any canonical Smart Business repository transfer:

1. a separate governed migration/work package must authorize the transfer;
2. exact source and destination repository identities must be recorded;
3. permissions, ownership, integrations, webhooks, CI, Lovable, Supabase, secrets/recovery dependencies, and branch protections must be assessed;
4. canonical history and exact trusted SHA must be verified before and after transfer;
5. connected services must be tested after the move;
6. continuity/recovery controls must remain valid;
7. rollback/recovery conditions must be documented;
8. Founder/human authorization must control the final transfer.

Until that process is completed, `SmartBusinessv1/smart-business` remains canonical.

## 7. Intended organizational mapping

The intended long-term mapping is:

| Business unit | GitHub organizational role |
|---|---|
| Lighthouse Information Publishing Service (LIPS) | Parent-firm repositories, including the Lighthouse corporate website |
| Team LIPS | Technology/product-development repositories, including Smart Business after separately authorized transfer |
| LIPS Learners | Repositories specifically belonging to the LIPS Learners unit |
| SmartBusinessv1 | Existing/current Smart Business account context; repositories may later be migrated to Team LIPS under separate authority |

This mapping is intended to improve ownership clarity, access control, continuity, and long-term maintainability.

## 8. Human and AI operating expectations

Future human and AI actors must understand the following:

- GitHub is being used for legitimate business software development and governance.
- API-driven activity and AI-assisted repository activity are expected parts of the workflow.
- High numbers of small commits or pull requests can be intentional.
- Important governed changes require human review/merge where the governing process requires it.
- Organization creation is intended to reflect real business-unit boundaries.
- A planned future repository transfer is not permission to perform that transfer now.
- Connected services such as Lovable and Supabase must be considered before repository/account changes.
- Provider restrictions, authentication failures, or integration failures must be treated as operational incidents and not bypassed through unsafe identity or credential workarounds.
- Secrets, passwords, MFA seeds, recovery codes, access tokens, and private recovery material must not be committed to Git.

## 9. Provider-compliance posture

Team LIPS intends to use GitHub in accordance with GitHub's applicable Terms of Service and platform policies.

The intended workflow does not include:

- spam or unsolicited messaging;
- artificial engagement;
- cryptocurrency mining;
- malware distribution;
- credential abuse;
- identity creation intended to evade provider restrictions;
- bypassing account or platform enforcement controls.

If GitHub identifies an activity pattern or integration that conflicts with its policies, Team LIPS should seek clarification and adjust the workflow rather than attempting to evade the restriction.

## 10. Continuity relationship

GitHub is currently the canonical Smart Business Git host.

Independent continuity controls may exist or be added, including a downstream/non-canonical secondary Git provider and offline encrypted recovery copies.

Those continuity mechanisms do not make another provider co-equal canonical unless Founder authority and Mission Control explicitly promote it through a governed transition.

## 11. Change control

This operating model may evolve as Lighthouse, Team LIPS, Smart Business, and LIPS Learners mature.

Changes that merely clarify organizational intent may update this document through normal governed documentation review.

Changes that affect canonical repository ownership, provider identity, authentication, secrets, production integrations, or repository transfer require separately scoped authority.

---

**Operating principle:** GitHub structure should reflect the real human organization, while preserving traceability, security, continuity, and human decision ownership.
