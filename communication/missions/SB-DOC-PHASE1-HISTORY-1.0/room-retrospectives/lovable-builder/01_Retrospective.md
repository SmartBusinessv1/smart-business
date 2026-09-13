# SMART BUSINESS — LOVABLE BUILDER INSTITUTIONAL RETROSPECTIVE

**Mission:** `SB-DOC-PHASE1-HISTORY-1.0 — Phase 1 Historical Continuity Reconstruction`
**Contributor:** Lovable Builder room (`lovable-builder`)
**Scope:** Documentation and institutional-memory capture only
**Implementation authority:** None
**Canonical repository reviewed:** `SmartBusinessv1/smart-business`
**Canonical baseline read:** `main @ efb993315b5ab35beb2ef952f31e40446e8bbd8f` (`2026-09-13T09:11:51Z`)
**Builder room project read:** Lovable project `f3e992ec-06df-4d49-b157-b92ec064c078`
**Date:** 2026-09-13

This retrospective preserves the operational judgement learned in the Lovable Builder room during
Phase 1. It is not implementation authority, not a Product Truth amendment, not acceptance of any
builder-reported work, and not permission to publish, deploy, promote builder code, rename a
project, or reactivate any retired path.

---

## 1. Lessons Learned

### 1.1 A builder room can prove that code runs; it cannot prove that a feature is complete

**CURRENT — STILL VALID**

The single most important lesson from this room is the distinction between five different states that
a builder room can easily blur into one:

1. code exists in the builder project;
2. the project typechecks and builds;
3. a route renders and returns HTTP 200 in the builder's development runtime;
4. the behaviour is verified in the **published** runtime;
5. Mission Control has independently accepted the capability as a mature feature.

The Lovable Builder room repeatedly reached states 1–3 quickly. States 4 and 5 required different
authority and different evidence. The room's own `SB-P-1.11` Catalog completion report was
deliberately filed as `IMPLEMENTATION REPORTED — VERIFICATION PENDING` for exactly this reason, and
that label must not be silently upgraded by a later reader.

**CORRECTION / LESSON**

Builder completion is an *input* to acceptance, never a substitute for it. A future room that reads
a builder completion report must treat every claim in it as builder-attested, not verified.

### 1.2 Preview/development runtime is not production runtime — proven the hard way

**MISTAKE / FAILURE MODE** → **CORRECTION / LESSON**

During the authorized runtime-probe work for `SB-P-1.11-GC-1`, the canonical Catalog-import
parse-worker path parsed a small CSV successfully in the builder's local development runtime in
roughly `473 ms`, and then **failed** in the published deployment with `PARSE_TIMEOUT` at a `10 s`
budget. Worker creation, worker termination, compression containment and secret-isolation checks
passed in both environments; only the parse path diverged.

This is the room's strongest evidence for a rule that had previously been stated only as principle:

> A visually working or locally passing builder result establishes nothing about the deployed
> serverless runtime. The deployed runtime has different CPU, isolate and bundling behaviour.

**CURRENT — STILL VALID**

Any claim of the form "the parser works" must name the runtime it was observed in. The local
observation and the published observation are separate facts.

### 1.3 Backend binding must be re-verified per mission, because the historical record contains a superseded ref

**CURRENT — STILL VALID**

The builder room's own historical artifact `.lovable/phase-4-runtime-security-verification.md`
records the backend as Lovable Cloud project reference `wwgqnshcgbukqczqblsm`. The current approved
external Smart Business backend is `gysgzasfcjvtrgaigfyn`, verified in this review as bound in both
`.env` and `supabase/config.toml` of the active builder project.

**HISTORICAL — SUPERSEDED**: `wwgqnshcgbukqczqblsm` as the Smart Business backend.
**CURRENT — STILL VALID**: `gysgzasfcjvtrgaigfyn`.

The failure mode this creates is real: a future room reading the older verification report in
isolation could run checks, or reason about data, against a backend that is no longer the product's
backend. Backend identity must be read from current configuration, not from a historical report.

### 1.4 Builder state drifts from canonical in *both* directions, and the drift is invisible without a file-level comparison

**MISTAKE / FAILURE MODE**

Compared at this review, canonical `main` and the active builder project differ in both directions:

- present in the builder project, **absent** from canonical `main`:
  `src/routes/_authenticated/inventory.opening-stock-import.tsx`,
  `src/server-functions/inventory-import.ts`, `src/lib/inventory-import/*`;
- present in canonical `main`, **absent** from the builder project:
  `src/lib/catalog-import/parse-worker.ts`.

The builder project's local head at review was an uncommitted-style `Work in progress` commit
(`0a51a33`) sitting on top of `205b3f7`, the delivery commit that production cutover actually
verified. So the builder room simultaneously held work that canonical has never accepted **and**
lacked work that canonical already contains.

**CORRECTION / LESSON**

"The builder project has it" and "canonical has it" are independent facts, and either can be ahead.
Whole-project synchronization in either direction is unsafe. Mission Control has already recorded
the durable disposition for the largest instance of this drift as
`RECONCILED — DO NOT PROMOTE AS-IS`, requiring a narrow rebase onto current canonical files rather
than a reverse sync.

### 1.5 Platform-generated files drift on their own and must be reconciled, not chased

**CORRECTION / LESSON**

`src/routeTree.gen.ts` regenerated itself and appended a framework registration block that no
authorized instruction had requested. The correct handling was a bounded, single-file reconciliation
against a named pre-drift commit with byte-equivalence verification — not a rewrite and not a
regeneration cascade.

Durable rule: for platform-generated files, define the expected byte state by commit reference,
verify with a byte comparison, and stop. Do not treat generated-file drift as a licence to touch
adjacent files.

### 1.6 Byte fidelity matters when transferring canonical source into a builder project

**MISTAKE / FAILURE MODE** → **CORRECTION / LESSON**

A canonical-source transfer into the builder project introduced CRLF line endings through a Windows
extraction step and required a separate 115-file corrective bundle plus per-file byte comparison to
restore fidelity. Files that were already correct — `public/favicon.ico`, `supabase/config.toml`,
`src/routeTree.gen.ts` — were deliberately excluded from the correction rather than rewritten.

Durable rule: a canonical transfer is only complete when every file has been byte-compared, and the
transfer method itself (archive tooling, extraction platform, line-ending handling) is part of the
evidence.

### 1.7 Platform dependency management can silently mutate pinned versions

**MISTAKE / FAILURE MODE**

An authorized dependency addition (`exceljs`, `papaparse`) also bumped the unrelated pinned
`@lovable.dev/vite-tanstack-config` from `2.7.7` to `2.9.1`. The bump was not requested and had to be
reverted to the canonical pin.

**CORRECTION / LESSON**

After any package operation in a builder room, re-read the full dependency diff — not only the
packages you asked for. Report the whole diff, including reverts.

### 1.8 Founder-assisted verification is powerful and expensive; it should be the last resort, not the first

**CAPABILITY PROVEN** and **CORRECTION / LESSON**

Automated runtime security verification (Phase 4) could not execute Tests 1, 2, 4 and 5 because no
authenticated owner session was available to the automated executor; only anonymous protection could
be proven. The gap was later closed by Phase 4A, where the Founder personally drove every
authenticated action through the normal UI while the builder room transcribed observations — Tests
1–7 `PASS`, including cross-business isolation between Salamath Store and Bhai Store.

Two lessons follow, and they pull in opposite directions:

1. Founder-assisted runtime verification is a genuine, proven capability that produced evidence no
   automated run could produce at the time. Founder-driven verification also confirmed the
   production domain healthy after the legacy project was unpublished.
2. It consumes the scarcest resource in the organization. Phase 4's failure was not a security
   finding; it was a **verification-tooling** gap. Designing seeded, non-production verification
   identities is the correct long-term fix, so that Founder attention is spent on judgement rather
   than on clicking through regression steps.

**RECOMMENDATION — NOT YET ADOPTED**: a governed non-production verification identity set.

### 1.9 Temporary diagnostic surfaces must be born with an expiry

**CAPABILITY PROVEN**

The `SB-P-1.11-GC-1` runtime probe was implemented as a hidden, non-navigation endpoint that
returned `404` to any request without a high-entropy token, stored only a SHA-256 verifier of that
token server-side, performed synthetic in-memory checks only, wrote nothing to the database, and was
deleted in a single-file cleanup once its question was answered.

That shape is the pattern to reuse. The residual risk is procedural, not technical: a temporary
public surface that outlives its mission becomes an unowned attack surface. Every future probe must
name its removal condition in the same instruction that authorizes it.

### 1.10 Scope discipline held, and it held because scope was enumerated rather than described

**CAPABILITY PROVEN**

Across `SB-P-1.11` the room stayed inside a Phase 1 Owner-only boundary: exactly the 19 authorized
public Catalog commands with no twentieth added, stubbed, proxied or wrapped; no client
`INSERT`/`UPDATE`/`DELETE` against any Catalog table; no migrations; no scheduled-price execution;
no permission expansion; no bulk-import entry point wired in that stage.

The reason discipline held is worth recording: the authorization **enumerated** the allowed command
surface and the prohibited later-phase work item by item. Enumerated boundaries are auditable — the
room could mechanically enumerate every RPC call site and compare. Prose boundaries are not.

### 1.11 Write-only UI is an acceptable honest outcome when no read surface is authorized

**CORRECTION / LESSON**

Business tax settings were implemented as a write-only panel because Phase 1 exposed no authorized
read surface for `business_tax_settings`. The room did not invent a read path, and did not fabricate
echoed values.

Durable rule: when the authorized surface is asymmetric, ship the asymmetry visibly and record it as
a limitation. Do not close a UX gap by inventing backend access.

---

## 2. Capabilities Acquired

### 2.1 Production capability

- A published Smart Business production runtime served through a verified chain:
  `SmartBusinessv1/smart-business` → `SmartBusinessv1/starter-supab-shell` → Lovable project
  `f3e992ec-06df-4d49-b157-b92ec064c078` → Supabase `gysgzasfcjvtrgaigfyn` →
  `https://smartbusiness.teamlips.com`, with `https://starter-supab-shell.lovable.app` as the
  published Lovable URL.
- Publish and custom-domain cutover as an executed, verified operation rather than a theory.
- Founder-verified authenticated runtime behaviour in the deployed environment: signed-out
  protection of `/dashboard`, sign-in and session persistence across refresh, public navigation,
  and Workspace / Transactions / Inventory / Catalog loading normally.
- Cross-business isolation observed in the deployed runtime between two real owner workspaces.

### 2.2 Canonical repository capability

- Catalog Foundation client surface over the authorized command model: 19 RPC wrappers with
  idempotency-key minting, unknown-outcome reconciliation, and merchant-safe mapping of backend
  rejection categories to human copy.
- A preview-then-confirm pattern for consequential linking, with token validity surfaced to the
  merchant as a live countdown and rejected/expired tokens discarded rather than reused.
- Route composition under an existing authentication guard without modifying the guard.

### 2.3 Non-production / builder-side capability only

- The Inventory Opening Stock bulk-import stack, and the Catalog identity-only import surface, as
  they exist in the builder project. Classification: **builder-side implementation evidence, not
  canonical completion**. Mission Control's disposition is `RECONCILED — DO NOT PROMOTE AS-IS`.
- Synthetic runtime probing of a serverless deployment (worker availability, worker termination,
  compression containment, secret isolation, absence of database/network writes).

### 2.4 Documentation / governance capability

- Builder completion reports that enumerate exact changed files, exact command surface, checks
  actually performed, known limitations, deviations, and explicit non-action confirmations.
- The habit of labelling a report's own status honestly, e.g.
  `IMPLEMENTATION REPORTED — VERIFICATION PENDING`.

### 2.5 Tooling / process capability

- Bounded byte-fidelity source transfer with per-file verification.
- Bounded generated-file drift reconciliation against a named pre-drift commit.
- Hidden, token-gated, self-removing diagnostic endpoints.

**Not acquired capability**: anything present only as a plan, a placeholder, a foundation UI, a
mockup, or a future mission. Specifically, the existence of Catalog and Inventory routes does not
constitute a mature Stock capability — the Global Product Completion Register records that family as
`IMPLEMENTED BUT INCOMPLETE` and `NOT YET ACCEPTED AS MATURE FEATURE`.

---

## 3. Tools We Have

| Tool | Role in this room | Critical boundary future operators must know |
|---|---|---|
| Lovable builder project `f3e992ec-06df-4d49-b157-b92ec064c078` | Active implementation environment | Its connected repository is a delivery/export repository, not canonical authority |
| Lovable development runtime | Fast iteration, route render checks, typechecks | Does **not** reproduce deployed serverless CPU/isolate limits — see §1.2 |
| Lovable publish / custom-domain cutover | Production delivery | Publishing is a separate authority from implementing; never bundled into a build task |
| Delivery repository `SmartBusinessv1/starter-supab-shell` | Production delivery path history | Never canonical; never reverse-synced wholesale into canonical |
| Canonical repository `SmartBusinessv1/smart-business` | Authoritative implementation and history | Read it before assuming builder state is current; drift runs both ways |
| External Supabase project `gysgzasfcjvtrgaigfyn` | Approved product backend | Verify from current `.env` + `supabase/config.toml`, never from a historical report |
| Authorized public RPC command surface | The only sanctioned write path from the client | Enumerated; a twentieth command is a governance event, not an implementation detail |
| TypeScript / build / route-render checks | Cheap regression signal | Green checks prove compilation, not behaviour and not security |
| Headless browser runtime verification | Anonymous-path and UI-state evidence | Cannot produce authenticated evidence without a governed verification identity |
| Founder-assisted manual verification | Highest-fidelity runtime evidence available in Phase 1 | Scarcest resource in the organization; reserve for judgement, not routine regression |
| Token-gated temporary probe pattern | Answering runtime questions safely | Must be authorized with an explicit removal condition |

---

## 4. Suggested Tools to Have

### 4.1 Governed non-production verification identities

- **Problem solved:** automated runtime verification could not execute four of six security tests
  because no authenticated session existed, forcing Founder-assisted execution.
- **Why current stack is insufficient:** the builder room is correctly forbidden from handling
  credentials or creating accounts, so today the only authenticated path is the Founder.
- **Disposition:** `BUILD/ADOPT LATER` — it must be designed under a security-owning mission, not a
  builder mission.
- **Risk:** a verification identity is a real principal. Wrongly scoped, it becomes a standing
  privilege and a cross-business exposure path. It must never exist in the production backend with
  production data.

### 4.2 Automated builder-versus-canonical drift report

- **Problem solved:** the two-directional drift in §1.4 was only discovered by an explicit
  file-level comparison during a documentation mission.
- **Why current stack is insufficient:** nothing currently alarms when the builder project diverges
  from canonical `main`, in either direction.
- **Disposition:** `BUILD/ADOPT NOW` — it is read-only and low-risk.
- **Risk:** low. It must report only; it must never auto-synchronize.

### 4.3 Deployed-runtime smoke check on the real serverless target

- **Problem solved:** the `PARSE_TIMEOUT` divergence in §1.2 was invisible to every local check.
- **Why current stack is insufficient:** local development runs on a different runtime than the
  deployed target.
- **Disposition:** `BUILD/ADOPT LATER`, and only through the governed public-route pattern with
  authentication and an explicit removal condition.
- **Risk:** any deployed diagnostic surface is an attack surface. See §1.9.

### 4.4 An automatic build/lint/test CI gate on the delivery path

- **Problem solved:** builder-reported checks are self-attested and unrepeatable.
- **Why current stack is insufficient:** verification currently depends on the room reporting
  honestly rather than on an independent gate.
- **Disposition:** `BUILD/ADOPT NOW` in principle — but note the Founder-approved build plan already
  assigns an automatic build/lint/test CI gate to `SB-P-1.12` as an engineering-quality gate. This
  room's role is to confirm the need from evidence, not to pre-empt that mission.
- **Risk:** green CI is not security acceptance and must never be presented as such.

*A recommendation here is not an approved architecture decision.*

---

## 5. Suggestions to Improve This Project

1. **Make backend identity a mandatory preamble.** Every builder mission should open by reading and
   restating the backend ref from current configuration. This removes the entire class of error
   created by the superseded `wwgqnshcgbukqczqblsm` reference.
2. **Enumerate boundaries instead of describing them.** The `SB-P-1.11` command-surface enumeration
   is the strongest scope-control artifact this room produced, precisely because compliance was
   mechanically auditable.
3. **Never bundle publish authority into a build instruction.** Keep "build it" and "publish it" as
   separate authorizations with separate evidence, as Phase 1 already practised.
4. **Require a runtime named in every capability claim.** Replace "works" with "works in the
   development runtime" or "verified in the published runtime at <URL> on <date>".
5. **Close builder state before every handover.** A `Work in progress` head above the last
   production-verified delivery commit is a silent drift generator; either commit and report it, or
   record deliberately that it is unpromoted.
6. **Give every temporary surface a removal condition at birth.**
7. **Reduce Founder verification load without reducing Founder authority** — seeded verification
   identities plus deployed smoke checks, so the Founder verifies judgement calls and merchant
   experience rather than repeating mechanical regression steps.
8. **Keep generated files under commit-reference control** rather than treating them as free-form.
9. **Re-read the whole dependency diff after any package operation.**
10. **Preserve the honest-asymmetry habit** — ship and label write-only or partial surfaces rather
    than inventing backend access to make a UI look symmetrical.

---

## 6. What Future Rooms Must Know Before Touching This Area

Verify all of the following before changing anything in a Lovable project:

1. **Which Lovable project is authoritative.** The current active project is
   `f3e992ec-06df-4d49-b157-b92ec064c078`. Confirm it from current project metadata and its bound
   configuration, not from a screenshot, a chat memory, or an old report.
2. **Which project is retired.** `64c2b9b1-2461-4045-9acc-19e2658b8ca2` is historical. It is
   preserved, renamed `Legacy Workspace-old`, and unpublished. Do not implement in it, publish it,
   rename it, disconnect it, or mutate it to simplify current work.
3. **Which repository is canonical.** `SmartBusinessv1/smart-business` is canonical.
   `SmartBusinessv1/starter-supab-shell` is the delivery/export path. A Lovable project's Git
   connection never confers canonical authority.
4. **Which backend is bound.** Read `.env` and `supabase/config.toml`; expect `gysgzasfcjvtrgaigfyn`.
   If anything else appears, stop and escalate.
5. **What the published state is.** At this review the active project reads `is_published: true`,
   visibility `public`. Publishing state is a fact to read, never a fact to assume, and changing it
   requires separate explicit authority.
6. **Whether builder state matches canonical.** Compare files in both directions before promoting or
   rebasing anything. Expect drift.
7. **What is already dispositioned.** The Opening Stock / inventory-import builder stack is
   `RECONCILED — DO NOT PROMOTE AS-IS`; promotion requires a narrow rebase onto current canonical
   files under a properly authorized mission, and must converge on the shared Universal Document
   Intelligence contract rather than canonize a second import architecture.
8. **Who owns the Catalog surface's future.** `/catalog` reclassification toward the shared
   **Product & Price Master** model, and the safe contextualization/demotion plan for `/catalog`,
   belong to `SB-P-1.12`. A builder room must not rename, demote, redirect, or remove `/catalog`, and
   must preserve existing product/pricing/inventory data and deep-link continuity until replacement
   access is proven.
9. **What "done" means.** Builder completion ≠ runtime verified ≠ independently verified ≠ Mission
   Control accepted.

---

## 7. Do-Not-Repeat Register

- Do not treat a working preview or a green local check as production truth. The `PARSE_TIMEOUT`
  divergence is the standing counter-example.
- Do not infer current Lovable project status from old screenshots, old reports, or chat memory.
- Do not implement in, publish, rename, or disconnect the legacy project
  `64c2b9b1-2461-4045-9acc-19e2658b8ca2`.
- Do not treat the delivery repository or a Lovable Git connection as canonical authority.
- Do not read backend identity from a historical verification report; `wwgqnshcgbukqczqblsm` is
  superseded.
- Do not reverse-sync a whole builder project into canonical, and do not whole-file promote builder
  snapshots.
- Do not add a command outside the enumerated authorized surface, and do not add client-side direct
  table writes as a shortcut around the command model.
- Do not leave a temporary public diagnostic endpoint deployed after its mission.
- Do not accept an unrequested dependency bump silently.
- Do not chase platform-generated file drift beyond the single file authorized for reconciliation.
- Do not upgrade a placeholder, foundation UI, or builder-reported implementation into a claim of
  completed capability.
- Do not describe a merged commit as "production updated" before the publish and runtime chain has
  been verified.
- Do not close a UI asymmetry by inventing a backend read path that was never authorized.
- Do not spend Founder verification time on work that a governed verification identity could do.

---

## 8. Current Truth vs Historical Truth

| Historical statement from this room | Current corrected state |
|---|---|
| Backend is Lovable Cloud project `wwgqnshcgbukqczqblsm` (`.lovable/phase-4-runtime-security-verification.md`) | **HISTORICAL — SUPERSEDED.** Current approved backend is external Supabase `gysgzasfcjvtrgaigfyn`, verified in `.env` and `supabase/config.toml`. |
| The legacy Lovable project is a live Smart Business runtime at `https://governed-growth-path.lovable.app` | **HISTORICAL — SUPERSEDED.** Renamed `Legacy Workspace-old`, `is_published: false`, excluded from production authority, deliberately unpublished rather than deleted. |
| Catalog client work is implemented, therefore Catalog is delivered | **CURRENT — STILL VALID CORRECTION.** The builder report stands at `IMPLEMENTATION REPORTED — VERIFICATION PENDING`; the Global Product Completion Register records the surrounding family as `IMPLEMENTED BUT INCOMPLETE` / `NOT YET ACCEPTED AS MATURE FEATURE`. |
| The Opening Stock bulk import exists, therefore the capability is complete | **HISTORICAL — SUPERSEDED as a completion claim.** Builder-side evidence only; `RECONCILED — DO NOT PROMOTE AS-IS`. |
| The canonical parse-worker path parses CSV successfully | **CORRECTED.** True in the local development runtime (~473 ms); `FAIL` with `PARSE_TIMEOUT` at a 10 s budget in the published runtime. |
| The builder project reflects canonical `main` | **CORRECTED.** Two-directional drift at this review; the builder head was a `Work in progress` commit above the production-verified delivery commit `205b3f7`. |
| `/catalog` is the durable product surface | **SUPERSEDED as a durable model.** `SB-P-1.12` owns Product & Price Master reclassification and the safe contextualization/demotion plan for `/catalog`. |
| The temporary runtime probe endpoint exists | **REMOVED.** Deleted under authorized cleanup; the project was unpublished at the time of cleanup and later re-published under separate authority. |

---

## 9. Evidence Pointers

**Governance and controlling documents**

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/00_Mission_Control_Institutional_Learning_Capture_Protocol.md`
- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/room-retrospectives/01_Mission_Control_Retrospective_Dispatch_Pack.md`
- `docs/phase-1-mission-blueprint/smart-business-features/00_Founder_Approved_MC_and_CC_Verified_Build_Plan.md` (§5.1 residual `anon` gate, §5.2 CI gate, §10.1 `SB-P-1.12` Product & Price Master reclassification and `/catalog` demotion plan)
- `docs/phase-1-mission-blueprint/smart-business-features/00_Global_Product_Completion_View.md` (contract 7: `IMPLEMENTED BUT INCOMPLETE`, `NOT YET ACCEPTED AS MATURE FEATURE`, "do not promote stale Lovable import unchanged")

**Peer retrospectives reviewed**

- `room-retrospectives/founder-room/01_Retrospective.md`
- `room-retrospectives/research-intelligence/01_Retrospective.md`
- `room-retrospectives/claude-engineering/01_Retrospective.md`
- `room-retrospectives/infrastructure-operations/01_Retrospective.md`
- `room-retrospectives/supabase-backend/01_Retrospective.md`
- `room-retrospectives/security-permissions/01_Retrospective.md`

**Production chain, publish and cutover**

- `communication/missions/SB-OPS-PROD-SYNC-1.0/mission-control/03-production-cutover-closure-report.md`
  — verified chain, active project `f3e992ec-06df-4d49-b157-b92ec064c078` (display name `Smart Business`),
  delivery commit `205b3f7ab486242ee91e843c61de784b0cb0d21d`, published URL
  `https://starter-supab-shell.lovable.app`, custom domain `https://smartbusiness.teamlips.com`,
  legacy project `64c2b9b1-2461-4045-9acc-19e2658b8ca2` renamed `Legacy Workspace-old` with
  `is_published: false`.
- `communication/missions/SB-OPS-PROD-SYNC-1.0/claude-code/01-runtime-synchronization-report.md`
- `communication/missions/SB-OPS-PROD-SYNC-1.0/claude-code/02-lovable-tooling-compatibility-correction-report.md`
- `communication/archive/SB-OPS-PROD-SYNC-1.0/` (instruction/report sequence)

**Runtime verification**

- `.lovable/phase-4-runtime-security-verification.md` — anonymous protection `PASS`; Tests 1, 2, 4, 5
  `NOT EXECUTED` for want of an authenticated session; documented `/transactions` 404 versus
  `/dashboard` redirect asymmetry under a non-SSR authenticated layout.
- `.lovable/phase-4a-founder-assisted-runtime-verification.md` — Founder-assisted authenticated
  verification, Tests 1–7 `PASS`, cross-business isolation between Salamath Store and Bhai Store.

**Builder-side drift and disposition**

- `communication/missions/SB-DOC-PHASE1-HISTORY-1.0/final-reconciliation/06_Canonical_Lovable_Opening_Stock_Inventory_Import_Reconciliation.md`
  — `RECONCILED — DO NOT PROMOTE AS-IS`; Blocker A confirmation binding, Blocker B UDI convergence,
  Blocker C stale surrounding snapshot; builder commits
  `656c2ec19f7a44528eee1fc2bb92dcac4164c2ed`, `87522ea5e22e8e3fd6371b4cc8ca6c0342222395`,
  `a92ee50784f16fe4641361530b09c7eb32519b79`.

**Builder-room implementation evidence (builder-attested, not accepted)**

- `docs/implementation/SB-P-1.11/lovable-build-completion-report.md` in the builder project —
  status `IMPLEMENTATION REPORTED — VERIFICATION PENDING`; 19 enumerated Catalog commands;
  pre-report builder commit `1bbe8cf2682a584240c1acfecee46228506abddf`.
- Builder probe cleanup commit `f172c34ced80a4473bfb8ac1047e3acd775db407` (temporary probe route
  deleted).
- Builder project files read at this review: `src/integrations/supabase/catalog.ts`,
  `src/routes/_authenticated/catalog.tsx`, `catalog.index.tsx`, `catalog.$productId.tsx`,
  `catalog.import.tsx`, `inventory.opening-stock-import.tsx`, `src/server-functions/inventory-import.ts`,
  `src/lib/inventory-import/*`, `.env`, `supabase/config.toml`.

**Live read at this review (read-only, no mutation)**

- Canonical `main` head: `efb993315b5ab35beb2ef952f31e40446e8bbd8f`.
- Active builder project publish state: `is_published: true`, visibility `public`.
- Builder project local head: `0a51a33` (`Work in progress`) above `205b3f7`.
- Builder backend binding: `gysgzasfcjvtrgaigfyn` in `.env` and `supabase/config.toml`.

---

## 10. Open Questions / Residual Risks

1. **`UNRESOLVED / NEEDS FOUNDER OR MISSION CONTROL DECISION` — deployed parse-worker timeout.**
   The `PARSE_TIMEOUT` failure in the published runtime is an open engineering finding. Its root
   cause has not been established, and the effective per-request CPU ceiling for this project's
   production deployment could not be obtained from any project-specific authoritative source
   available to this room. Mission Control must decide who owns the diagnosis and whether the
   platform limit must be obtained from the platform provider.
2. **`UNRESOLVED` — builder head above the production-verified commit.** The builder project's
   `Work in progress` head (`0a51a33`) above `205b3f7` is unpromoted, unaccepted state. Mission
   Control should direct whether it is promoted under a proper mission, or explicitly abandoned.
3. **`UNRESOLVED` — two-directional canonical/builder drift.** In particular the builder project
   lacks `src/lib/catalog-import/parse-worker.ts` that canonical `main` contains, while holding the
   inventory-import stack that canonical does not. No mission currently owns closing this.
4. **`UNRESOLVED` — project display-name reconciliation.** The cutover closure record states the
   active project was renamed `Smart Business`, while the builder room's current operating context
   refers to it as `Smart Business Implementation Workspace`. The project **ID**
   `f3e992ec-06df-4d49-b157-b92ec064c078` is unambiguous and should govern; the display-name
   discrepancy should be reconciled so the "only the active project carries the current product
   display name" rule stays enforceable.
5. **`RESIDUAL RISK` — published production with pending verification.** The active project reads
   `is_published: true` while builder-attested `SB-P-1.11` Catalog work remains
   `VERIFICATION PENDING`. This is not asserted here as a defect; it is a state Mission Control must
   hold consciously rather than discover later.
6. **`RESIDUAL RISK` — verification depends on the Founder.** Until a governed non-production
   verification identity exists, authenticated runtime verification cannot proceed without Founder
   time, which structurally slows every future security or regression gate.
7. **`RESIDUAL RISK` — protected-route behavioural asymmetry.** The documented `/transactions` 404
   versus `/dashboard` redirect difference was assessed as non-blocking with no data exposure. It
   remains an unresolved UX/consistency item, not a security finding.
8. **`RESIDUAL RISK` — legacy project revival.** The legacy project is preserved and unpublished
   rather than deleted. Preservation is correct for evidence, and it permanently leaves a path a
   careless future operator could revive. The mitigation is procedural: §6 and §7 of this document.

---

**Final note.** This retrospective records what the Lovable Builder room learned. It does not accept
its own work, does not advance any feature's completion status, and does not authorize any change to
product code, routes, authentication, backend, runtime configuration, repository bindings,
production, Product Truth, Catalog, or the future Product & Price Master surface.
