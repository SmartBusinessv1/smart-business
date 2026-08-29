# SMART BUSINESS MISSION CONTROL

## SB-P-1.11-GC-1 — Lovable Drift Reconciliation & CPU Evidence Path

**Instruction ID:** instruction1.88  
**Authorized By:** Mission Control  
**Mission Status:** ACTIVE AFTER MERGE  
**Primary Executing Room:** Infrastructure Operations  
**Build Mode Authority:** NONE  
**Production Migration Authority:** NONE  
**Production Data Mutation Authority:** NONE  
**Lovable Public Publish Authority:** NONE

---

## 1. Mission Objective

Resolve the unexpected Lovable-generated source drift recorded in `communication/live/report1.94.md` before any further runtime-evidence work, then pursue the narrowest non-publish, non-production-mutating path to obtain authoritative project-specific evidence of the effective Cloudflare per-request CPU-time ceiling for the authorized Smart Business Lovable deployment.

This mission is intentionally two-stage and sequential.

**Stage B must not begin unless Stage A is verified clean.**

---

## 2. Canonical Starting State

GitHub `main` at authorization:

`373b6075a7d7d73aa55ee9fc09bf14729bb3c16d`

Authorized Lovable project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

Lovable state recorded by `report1.94.md`:

- previously expected synchronized commit: `1453be2b0d44b117ba6760ce47f200daf3285468`;
- unexpected current commit after read-only/plan-mode activity: `71c78b2e5fcb97f08265c762708be91f8e4613f5`;
- project unpublished;
- no custom-domain cutover;
- no production Supabase mutation.

Mission Control independently re-inspected the exact Lovable diff and confirmed the unexpected change is limited to `src/routeTree.gen.ts`, adding the following generated TanStack Start type-registration block after the existing route-tree export:

```ts
import type { getRouter } from './router.tsx'
import type { startInstance } from './start.ts'
declare module '@tanstack/react-start' {
  interface Register {
    ssr: true
    router: Awaited<ReturnType<typeof getRouter>>
    config: Awaited<ReturnType<typeof startInstance.getOptions>>
  }
}
```

No other file change is authorized as part of Stage A.

---

# STAGE A — LOVABLE SOURCE DRIFT RECONCILIATION

## 3. Stage A Objective

Restore the authorized Lovable project to the exact intended pre-drift source state without introducing any unrelated source change, publish, deployment, database action, dependency change, or product behavior change.

The remediation target is **source equivalence with the pre-drift state**, not merely visual equivalence.

---

## 4. Stage A Authorized Action

Infrastructure Operations may perform the minimum Lovable editor/source mutation required to remove only the unexpected generated block identified in §2 from `src/routeTree.gen.ts`.

Preferred outcome:

- `src/routeTree.gen.ts` becomes byte-equivalent to the corresponding file at Lovable commit `1453be2b0d44b117ba6760ce47f200daf3285468`;
- no other source file changes;
- project remains private/unpublished;
- no custom domain;
- no Supabase write or migration;
- no application feature change.

Because Lovable exposes no direct revert primitive through the connected tool surface, the executing room may use the minimum controlled Lovable edit necessary to restore the file, but must inspect the resulting diff immediately afterward.

If Lovable automatically mutates any additional file, STOP Stage A and report the new drift. Do not continue chasing generated edits recursively without new Mission Control authority.

---

## 5. Stage A Verification Gate

Before Stage B may begin, all of the following must be proven:

1. the unexpected added block is absent;
2. `src/routeTree.gen.ts` matches the authorized pre-drift content for the affected region;
3. no other application/source file changed as part of remediation;
4. Lovable remains `is_published: false`;
5. no custom domain is connected;
6. production Supabase migration state is unchanged;
7. production business/Catalog/customer/transaction data was not mutated;
8. GitHub `main` remains canonical and unchanged by the Lovable remediation.

If all eight pass, record:

`LOVABLE SOURCE DRIFT RECONCILED`

If any fail, STOP and do not begin Stage B.

---

# STAGE B — AUTHORITATIVE CPU-CEILING EVIDENCE PATH

## 6. Stage B Activation Condition

Stage B is authorized **only after Stage A has passed the verification gate**.

Stage B is evidence acquisition only.

No application implementation, public publish, production migration, production-data mutation, parser redesign, or architecture widening is authorized.

---

## 7. Narrowest Permitted Evidence Strategy

The preferred evidence path is a **platform-authoritative written confirmation tied to the exact Lovable project ID**, rather than another deployment or runtime probe.

Infrastructure Operations must pursue evidence in this order:

### Path 1 — Lovable platform/support confirmation

Obtain an authoritative Lovable/platform statement that explicitly identifies project:

`f3e992ec-06df-4d49-b157-b92ec064c078`

and states either:

- the effective Cloudflare Workers per-request CPU-time ceiling for that project's production deployment; or
- the exact Cloudflare account/usage model and any effective `limits.cpu_ms` override from which the ceiling is unambiguously determined.

The evidence must be attributable to Lovable/platform support or project control-plane metadata, not an AI inference or generic documentation statement.

### Path 2 — Exact deployed-worker control-plane evidence

If Path 1 is unavailable, obtain authoritative Cloudflare/Lovable control-plane/configuration evidence tied to the exact deployed Worker that would serve this project and exposing the effective CPU limit.

### Stop condition

If neither Path 1 nor Path 2 is accessible without public deployment, production mutation, credential escalation, or unsupported assumptions, STOP with an evidence gap.

Do not authorize a new public publish merely to discover the CPU ceiling under this instruction.

---

## 8. Evidence Rejection Rules

The following do **not** close EC-1:

- local `vite` results;
- local `wrangler dev` or Miniflare behavior;
- generic Cloudflare plan documentation alone;
- inference from SSR success;
- guessing Free vs Paid;
- project source lacking `limits.cpu_ms`;
- Lovable preview behavior;
- AI-generated explanations without platform attribution;
- screenshots that do not identify the exact project/deployed Worker and effective limit.

---

## 9. CPU Adequacy Classification

If authoritative evidence establishes an effective ceiling, compare it against the existing engineering estimates only as preliminary context:

- maximum-shape CSV local estimate: ~30 ms CPU;
- maximum-shape XLSX local estimate: ~1,172 ms CPU.

Do not treat these local estimates as production proof.

The evidence report must classify:

- `CEILING KNOWN — PRELIMINARILY ADEQUATE FOR CONTROLLED RUNTIME VERIFICATION`, or
- `CEILING KNOWN — INADEQUATE / ARCHITECTURE CHANGE REQUIRED`, or
- `CEILING UNKNOWN — EVIDENCE GAP`.

A positive preliminary adequacy classification still requires later controlled runtime verification after implementation.

---

## 10. Locked Architecture Contract Retained

Nothing in this mission changes the already-confirmed EC-2 / EC-3 requirements from `report1.94.md`:

- authenticated Owner/business re-derivation;
- one expensive preview in flight per server-derived business ID;
- bounded short-window preview attempt control;
- durable/shared lease semantics with expiry safe against involuntary runtime termination;
- no raw merchant/file/credential/parser payload in guard state;
- opaque merchant handling of platform/runtime failures;
- strict parse-before-write ordering;
- no Product Truth mutation during preview;
- exactly nineteen public Catalog commands;
- final Security re-review before Build Lock.

---

## 11. Locked Exclusions

This instruction does not authorize:

- Claude Code Build Mode;
- parser implementation;
- dependency changes;
- Supabase migration or DDL/DML;
- production business-data writes;
- Lovable public publish/deploy;
- domain cutover;
- R2 implementation;
- new queue/Workflow/Durable Object architecture;
- Product Truth changes;
- permission expansion;
- a twentieth Catalog command;
- unrelated generated-file cleanup.

---

## 12. Required Completion Report

Create:

`communication/live/report1.95.md`

The report must contain:

1. exact GitHub `main` SHA used;
2. exact Lovable pre-remediation and post-remediation commit SHAs;
3. Stage A diff evidence;
4. explicit confirmation of project unpublished/private state;
5. no-production-mutation evidence;
6. Stage A verdict;
7. if Stage A passed, the exact Stage B evidence path attempted;
8. full attributable CPU-ceiling evidence, if obtained;
9. CPU adequacy classification;
10. unresolved facts;
11. exact next gate.

Return exactly one final mission verdict:

- `LOVABLE DRIFT RECONCILED — CPU EVIDENCE READY FOR SECURITY RE-REVIEW`
- `LOVABLE DRIFT RECONCILED — CPU EVIDENCE STILL UNRESOLVED`
- `LOVABLE DRIFT RECONCILIATION STOPPED — NEW DRIFT OR AUTHORITY GAP`

Open one completion PR and stop.

Do not self-merge.

---

## 13. Gate After Completion

A positive CPU-evidence result does not authorize Build Mode.

Mission Control must review merged `report1.95.md` and then issue the already-required short bounded Security & Permissions Architecture re-review.

Only an explicit subsequent verdict:

`PARSER ISOLATION SECURITY ARCHITECTURE READY FOR BUILD LOCK`

may permit Mission Control to issue a separate Claude Code Build Mode instruction.

Production migration remains blocked throughout.
