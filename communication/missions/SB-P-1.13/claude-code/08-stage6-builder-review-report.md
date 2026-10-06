# SB-P-1.13 — Stage 6 Builder Review Report

**Mission:** SB-P-1.13 — Native Conversation & AI Intelligence Foundation
**From:** Claude Code, Stage 6 Builder Review actor (also the Stage 2–4 Definition Actor)
**To:** Mission Control
**Status:** `DRAFT STAGE 6 OUTPUT — STAGE 6 AUTHORIZED; FINDINGS AND RECOMMENDATIONS ONLY; NOT CANONICAL UNTIL MISSION CONTROL REVIEW AND HUMAN MERGE`
**Authorization:** SB-P-1.13-MC-07, `mission-control/09-stage6-builder-review-authorization.md`, canonical at `main@b146cad8ff05d1c511e37ebfe2f4172857ff23b5` (PR #782)
**Date:** 2026-10-06

## 1. Scope and independence

This review checks whether the canonical Blueprint Sections 1–19 (`docs/phase-1-mission-blueprint/active/SB-P-1.13.md`, PR #781) can be built as written in the current repository. It covers practical merchant experience, buildability, dependency order, implementation risk, permission and privacy behaviour, provider boundaries, voice behaviour, and failure and recovery.

- **Inputs:** the Blueprint, the 974-row FCTM (blob `f3a912290e10a8b4bb49998206e48c2b8980aea1`), `FPDR-1` to `FPDR-4`, the Stage 2 Truth Pack and Delta, the locked SB-P-1.12 EIS (blob `c444f7509477d0e8b997af538440d93bf2ca4d72`), and read-only inspection of the current repository.
- **Read-only:** the Blueprint, FCTM, Founder Decision Record and Product Truth were not edited. No provider dashboard, production system or test project was accessed.
- **Not independent:** the same actor drafted Sections 1–19. This is not Stage 7 assurance, and no specialist is appointed here. Mission Control must appoint independent Security & Permissions Architecture, AI Behaviour / Model Orchestration Safety, and Voice / Provider Readiness reviewers (SB-P-1.13-MC-07 §7).

The Blueprint and FCTM at this base are byte-identical to the Stage 4 head that Mission Control reviewed (`dd718d88`).

## 2. Repository evidence baseline

| Area | Evidence (read-only) |
|---|---|
| Runtime | TanStack Start built by Nitro with a Cloudflare default target (`vite.config.ts` comment; `@lovable.dev/vite-tanstack-config`); Worker-style `fetch(request, env, ctx)` entry (`src/server.ts`); server functions in `src/server-functions/` |
| Server authentication | `requireSupabaseAuth` (`src/integrations/supabase/auth-middleware.ts:34`) verifies a Bearer JWT with `getClaims` and creates an RLS-bound client; a separate service-role client exists (`client.server.ts`) |
| Secrets pattern | Server secrets come from `process.env` in server functions (Supabase keys, `PARSER_*`); browser values use `VITE_*`. No AI or voice variable exists in `.env*.example` |
| Navigation | `src/components/authed-header.tsx` lists Dashboard, Transactions, Inventory and Catalog in separate desktop and mobile menus; `/_authenticated` guard runs client-side (`ssr: false`) |
| Business resolution | Every surface reads `from("businesses")…maybeSingle()` under owner-only RLS (`dashboard.tsx:51`, `transactions.tsx:104`, `inventory.index.tsx:86`, `catalog.index.tsx:102`, `catalog-import.ts:98`, `parser-lease.ts:54`); `businesses.owner_id` is `UNIQUE` |
| Transactions | `createTransaction` is a direct client insert (`transactions.ts`); `correct_transaction` is a `SECURITY INVOKER` RPC that checks `auth.uid()`; types `sale`/`purchase` only; `payment_method` includes `credit` |
| Governed command precedent | `create_inventory_movement` is `SECURITY INVOKER` with an `idempotency_key` and SHA-256 payload fingerprint (`20260724170000_…sql:33-131`); catalog has preview tokens and `get_catalog_command_outcome`. The production status of the `20260724170000` idempotency fix is `UNKNOWN` per `docs/migration/README.md` |
| AI, voice, FAQ | None in code, dependencies or configuration (Stage 2 Delta D-03, D-04, D-07) |
| Files and media | Catalog import only: `.csv`/`.xlsx` server function and the GC-38R transient S3 + AWS Lambda parser path; no Supabase storage bucket in migrations or app |
| Language rendering | `<html lang="en">` (`__root.tsx:130`); font stack Inter with system fallbacks (`styles.css:25`); no i18n library |
| CI | `build-assurance.yml` runs lint, typecheck, build and fast tests; no GitHub Actions runs since 2026-09-30 (account restriction) |
| Tests | Integration tests sign in against a dedicated test project (`tests/setup/test-clients.ts`); SB-P-1.12 EV-02 is partially evidenced |

## 3. Findings summary

| ID | Area | Severity | Stage 7 blocker | Trigger screen |
|---|---|---|---|---|
| B6-01 | SB-P-1.12 dependency reaches Owner-only paths and Scenario B | **High** | **Yes — pending Mission Control determination** | **T8 candidate** |
| B6-02 | "Credit" as a payment method versus `FPDR-2` blocked credit | **High** | No (needs determination before EIS) | **T3 candidate** |
| B6-03 | AI gateway runtime, secrets and admin access | Medium | No | None |
| B6-04 | Malayalam and Manglish rendering, input and evaluation | Medium | No | None |
| B6-05 | `FPDR-1` command shape and the remaining direct insert path | Medium | No | None |
| B6-06 | Provider-side retention versus `FPDR-3` transient audio | Medium | No | T3 candidate only if the chosen provider retains raw audio |
| B6-07 | `FPDR-4` needs a listening-context signal | Medium | No | Refinement for Mission Control; T3 screen low |
| B6-08 | Provider outage, unknown outcome and idempotency | Medium | No | None |
| B6-09 | FAQ corpus authorship and approval ownership | Medium | No | None |
| B6-10 | Provider data controls and voice-provider readiness | Medium | No (blocks implementation, not Stage 7) | None |
| B6-11 | Workspace placement in current navigation | Low | No | None |
| B6-12 | Typed tool registry and validation | Low | No | None |
| B6-13 | Attachment handoff before UDI exists | Low | No | None |
| B6-14 | WhatsApp-independence evidence | Low | No | None |
| B6-15 | Performance target with model and voice round trips | Low | No | None |
| B6-16 | AI usage telemetry sink and test/CI evidence | Low | No | None |

Counts: 2 High, 8 Medium, 6 Low. Areas with `NO FINDING` are listed in Section 5.

## 4. Findings

### B6-01 — SB-P-1.12 dependency reaches Owner-only paths and Scenario B

| Field | Detail |
|---|---|
| Severity | High |
| Blueprint section | §8.1, §8.10, §12.1, §15.1 (Scenario B row), §15.5 |
| FCTM rows | `BP-§10.2-SB`, `BP-§8.4-2`, `10-§14-1`, `10-§23-7`, `10-§4-1`, and the 139 `IN SCOPE` rows whose Dependency cell is `—` and which act on business-scoped data |
| Source / FPDR | Locked SB-P-1.12 EIS §19.5 (SEC-EIS10-11, EIS-DEP-01): "SB-P-1.13 must not create authority tables, resolve business from single ownership, or treat AI or tool capability as authority … must not introduce temporary parallel authorization while a family awaits cut-over"; SB-P-1.12 Blueprint §12 (active-business context, Stage 6 Founder Decision F-02); SB-P-1.12 MC-70 §7 |
| Repository evidence | The only business-resolution mechanism today is owner-only RLS with `maybeSingle()` on `businesses`, which depends on `owner_id UNIQUE`, at every surface listed in Section 2. No active-business context, membership or kernel exists |
| Finding | The Blueprint marks Scenario B "No external dependency beyond this mission's build" (§15.1), and 139 `IN SCOPE` rows carry no dependency code. Any conversational turn that reads or writes business data must resolve a principal and a business. Under the locked SB-P-1.12 EIS §19.5, SB-P-1.13 may not do that from single ownership and may not add a temporary path. So Owner-only flows and Scenario B also wait for SB-P-1.12 workstreams WS-A1/WS-A2 and the active-business context, not only the Manager/Employee rows. The Blueprint's dependency statement is narrower than the locked EIS allows. |
| Proposed consideration | Mission Control determines one of: (a) a narrow Blueprint §12/§15 refinement plus a surgical FCTM dependency-column reconciliation recording `D12` on business-scoped rows; or (b) a Mission Control or Founder determination that a specific interim Owner-only path is compatible with SB-P-1.12 EIS §19.5. Option (b) would itself touch a locked upstream artifact. The Builder does not choose. |
| Product-behaviour effect | No change to approved behaviour. It changes when Scenario B and the Owner flows can be built and demonstrated: not before SB-P-1.12 implementation resumes and is accepted. |
| Stage 7 blocker | Yes, pending Mission Control determination. Stage 7 feasibility findings depend on the true dependency order. |
| Trigger screen | **T8 candidate**: a conflict between a Blueprint statement (§15.1, Scenario B "no external dependency") and the locked SB-P-1.12 EIS §19.5. T2 no; T3 not unless option (b); T6 no; T7 not unless timing or ownership changes. **Dependent work stopped** per SB-P-1.13-MC-07 §6. |

### B6-02 — "Credit" as a payment method versus `FPDR-2` blocked credit

| Field | Detail |
|---|---|
| Severity | High |
| Blueprint section | §8.5, §8.7, §10.1 (`FPDR-1`, `FPDR-2`), §15.4 |
| FCTM rows | `12-§4-1`, `12-§7-6`, `12-§21-1`, `9-§9-4` (paid versus owed), `9-§17-1`, `10-§23-1`, `BP-§10.2-SA1` |
| Source / FPDR | `FPDR-1` ("transaction types that already exist"); `FPDR-2` ("credit/repayment-specific persistence and final acceptance depend on SB-P-1.14"); Contract 3 §4 and §5 (delegated); Contract 12 §7 |
| Repository evidence | `transactions.payment_method` allows `credit` (`20260719140000_…sql`), so "sold to Rahman on credit" can be stored today as a `sale` with payment method `credit`. There is no `repayment` type and no owed-balance concept |
| Finding | A merchant's "credit" sale is ambiguous between two readings. It may be an available capability (a sale whose payment method is credit) that `FPDR-1` lets SB-P-1.13 record. Or it may be the Contract 3 credit state that `FPDR-2` blocks on SB-P-1.14. The answer decides what a merchant can say by text or voice in this mission, how "credit vs repayment" clarification behaves before SB-P-1.14, and how `12-§21-1` is reported. |
| Proposed consideration | Mission Control determines, or asks the Founder, whether a credit-payment-method sale is an available capability under `FPDR-1` or part of the blocked credit portion under `FPDR-2`. Either way, repayment ("received ₹500 against his credit") has no storage today and stays blocked. |
| Product-behaviour effect | Yes: the merchant-visible set of recordable statements in SB-P-1.13. |
| Stage 7 blocker | No, but it must be settled before the EIS. |
| Trigger screen | **T3 candidate** (interpretation at the edge of a Founder decision). T2 no; T6 no; T7 only if the result moves work between missions; T8 no. Recorded and returned to Mission Control; not self-resolved. |

### B6-03 — AI gateway runtime, secrets and admin access

| Field | Detail |
|---|---|
| Severity | Medium |
| Blueprint section | §8.3, §12.2 (`DAI`), §13 |
| FCTM rows | `24-§28-1`, `24-§28-9`, `24-§25-8`, `24-§23-2`, `22-§17`, `24-§29-*` |
| Source / FPDR | Contract 24 §25 (credentials server-side), §28; Build Plan §5.4 |
| Repository evidence | Cloudflare-target Nitro build; server functions read secrets from `process.env`; `VITE_*` values reach the browser; the GC-38R parser shows the established server-secret pattern |
| Finding | The gateway is buildable as a server function behind `requireSupabaseAuth`. Worker limits on request duration, CPU time and body size affect long model calls and audio uploads, so streaming and explicit timeouts are needed. Provider keys must never use a `VITE_` name. Adding a provider secret needs Lovable Cloud environment access, which is impaired while Lovable recovery is pending (SB-P-1.12 MC-70 §3). |
| Proposed consideration | The EIS defines gateway placement, streaming, timeouts and the secret-provisioning path; Stage 7 confirms the runtime limits. |
| Product-behaviour effect | None. |
| Stage 7 blocker | No. Implementation prerequisite. |
| Trigger screen | None. Provider and admin state `UNVERIFIED — ACCESS REQUIRED`. |

### B6-04 — Malayalam and Manglish rendering, input and evaluation

| Field | Detail |
|---|---|
| Severity | Medium |
| Blueprint section | §8.2, §8.7, §9 |
| FCTM rows | `9-§6-*`, `9-§7-*`, `9-§3-*`, `9-§17-1`, `9-§17-2`, `9-§17-8`, `12-§21-7`, `20-§14-*` |
| Source / FPDR | Contract 9 §6, §7, §15, §17; Contract 24 §8 |
| Repository evidence | `<html lang="en">`; Inter (no Malayalam glyphs) with system fallbacks; no i18n library or message catalogue |
| Finding | Malayalam script will render through whatever system font the device has, which varies by platform. Understanding depends on model capability, which Smart Business cannot inspect today. Contract 9 §17 scenarios need a repeatable evaluation set to be demonstrable, not ad hoc trials. |
| Proposed consideration | The EIS adds a Malayalam-capable web font, `lang` attributes per message, and a governed English/Malayalam/Manglish evaluation corpus (equivalent intents, spelling variants, ambiguity cases) used for model routing and acceptance. |
| Product-behaviour effect | None; it is how the approved behaviour is proven. |
| Stage 7 blocker | No. |
| Trigger screen | None. If no provider meets the commitment, Stage 2 DC-13 applies. |

### B6-05 — `FPDR-1` command shape and the remaining direct insert path

| Field | Detail |
|---|---|
| Severity | Medium |
| Blueprint section | §8.5, §10.1 `FPDR-1`, §10.2 |
| FCTM rows | `BP-§6.2-1`, `BP-§6.2-2`, `10-§13-1`, `10-§13-2`, `24-§11-*`, `24-§31-13`, `10-§23-9` |
| Source / FPDR | `FPDR-1`; Build Plan §6.2 (path reusable from structured surfaces); Contract 3 §22 (delegated); SB-P-1.12 EIS-CNF-01, -04 |
| Repository evidence | `create_inventory_movement` shows an additive `SECURITY INVOKER` command with an idempotency key and payload fingerprint; `correct_transaction` shows an RPC on the transaction table; `authenticated` keeps `INSERT` on `transactions` and the `/transactions` page inserts directly. The production state of the idempotency fix migration is `UNKNOWN` |
| Finding | The `FPDR-1` command is buildable on these precedents. Its confirmation binding and idempotency must come from SB-P-1.12 (EIS-CNF-01/-04), so it shares B6-01's dependency. After it exists, two write paths for transactions remain: the governed command and the direct insert. That conflicts with the one-path intent of `BP-§6.2-2` unless the structured page later adopts the command. |
| Proposed consideration | The EIS states whether the structured transaction page moves onto the governed command, and when. `FPDR-1` says "additive" and "extends rather than destructively replaces", so any removal of the direct insert grant needs explicit authority. Re-verify the idempotency precedent's production state before relying on it. |
| Product-behaviour effect | None expected. |
| Stage 7 blocker | No. |
| Trigger screen | None. If removing the direct path were proposed, Mission Control would screen it under T7. |

### B6-06 — Provider-side retention versus `FPDR-3` transient audio

| Field | Detail |
|---|---|
| Severity | Medium |
| Blueprint section | §8.7 (`FPDR-3`), §8.3, §13 |
| FCTM rows | `12-§15-4`, `12-§16-8`, `24-§25-7`, `24-§31-14` |
| Source / FPDR | `FPDR-3`; Contract 25 §12 (delegated); Contract 24 §25 |
| Repository evidence | No storage bucket exists; the only object store (S3 parser ingress) is catalog-specific and transient. No voice provider is configured |
| Finding | `FPDR-3` controls Smart Business storage: no durable Smart Business audio. A transcription or AI provider may keep submitted audio under its own retention and abuse-monitoring terms unless configured otherwise. That is outside `FPDR-3`'s wording, and it is a privacy outcome a merchant would care about. |
| Proposed consideration | Provider selection and the data-control gate (Blueprint §8.3) verify the provider's retention and training settings for audio. The Stage 7 Voice/Provider reviewer confirms them. |
| Product-behaviour effect | Possible, if the chosen provider keeps audio. |
| Stage 7 blocker | No. |
| Trigger screen | T3 candidate only if the selected provider retains raw audio beyond transient processing; evidence `UNVERIFIED — ACCESS REQUIRED`. |

### B6-07 — `FPDR-4` needs a listening-context signal

| Field | Detail |
|---|---|
| Severity | Medium |
| Blueprint section | §8.7 (`FPDR-4`), §9 |
| FCTM rows | `12-§15-1`, `12-§15-2`, `12-§15-3`, `12-§21-12`, `10-§19-4` |
| Source / FPDR | `FPDR-4` ("when … Smart Business has sufficient context to determine that speaking … is inappropriate or unsafe"); Contract 12 §15 |
| Repository evidence | No device-mode, audio-output or user preference signal exists |
| Finding | `FPDR-4` applies only "with sufficient context", and nothing yet supplies that context. Without a signal, the fallback never fires. Possible signals are a user "text-only for sensitive answers" preference, a per-turn choice, or a sensitivity tag on Owner-intelligence capabilities from the SB-P-1.12 registry. A user-facing preference would be a new visible control. |
| Proposed consideration | Mission Control decides whether a user-visible preference is a narrow Blueprint refinement or stays an EIS design choice. Sensitivity tagging from the capability registry needs no product change. |
| Product-behaviour effect | Only if a user-facing control is added. |
| Stage 7 blocker | No. |
| Trigger screen | Proposed refinement; T3 screen low. Not self-applied. |

### B6-08 — Provider outage, unknown outcome and idempotency

| Field | Detail |
|---|---|
| Severity | Medium |
| Blueprint section | §8.10, §8.5 |
| FCTM rows | `24-§23-*`, `22-§19-*`, `10-§18-7`, `10-§18-8`, `10-§18-9`, `12-§17-8`, `24-§31-11`, `24-§31-13` |
| Source / FPDR | Contract 24 §23; Phase 1 guide §10 (unknown-outcome rule); SB-P-1.12 EIS-CNF-04 |
| Repository evidence | `get_catalog_command_outcome` shows an outcome-lookup precedent; no queue or job infrastructure exists (scheduler is SB-P-1.15) |
| Finding | A gateway timeout after a command has committed leaves the client unsure of the outcome. Without an outcome lookup keyed by the idempotency key, retry could produce a duplicate or a false failure. A replayed voice message needs the same key discipline. With no queue, "never auto-execute after recovery" is naturally met. |
| Proposed consideration | The EIS gives every consequential proposal a client-held idempotency key and an outcome-lookup path, modelled on `get_catalog_command_outcome` and SB-P-1.12 EIS-CNF-04. |
| Product-behaviour effect | None. |
| Stage 7 blocker | No. |
| Trigger screen | None. |

### B6-09 — FAQ corpus authorship and approval ownership

| Field | Detail |
|---|---|
| Severity | Medium |
| Blueprint section | §8.8 |
| FCTM rows | `8-§4-1`, `8-§6-1` to `8-§6-5`, `8-§16-1` to `8-§16-5` |
| Source / FPDR | Contract 8 §4, §6; Stage 2 DC-10 (as corrected) |
| Repository evidence | No FAQ content or store exists |
| Finding | Scenarios `8-§16-1` to `-5` need a trusted, versioned seed corpus in three languages with recorded provenance. That is content work, and no actor is assigned to author or approve it. |
| Proposed consideration | Mission Control names the content owner and approver (Team LIPS or the Founder) before the implementation package. |
| Product-behaviour effect | None. |
| Stage 7 blocker | No. |
| Trigger screen | None. |

### B6-10 — Provider data controls and voice-provider readiness

| Field | Detail |
|---|---|
| Severity | Medium |
| Blueprint section | §8.3, §8.7, §12.2, §13 |
| FCTM rows | `BP-§5.4-1`, `BP-§10.2-I1`, `24-§25-*`, `24-§31-14` |
| Source / FPDR | Build Plan §5.4, §10.2; Stage 2 DC-11, DC-13 |
| Repository evidence | No AI or voice provider configuration; Stage 2 Delta D-03, D-04, D-10 |
| Finding | Account existence, key custody, data controls, Malayalam/Manglish speech quality and cost are all `UNVERIFIED — ACCESS REQUIRED`. Provider purchase or activation needs Founder action and is not authorized. |
| Proposed consideration | The Stage 7 Voice/Provider reviewer receives an evidence request list; activation stays a separately authorized step. |
| Product-behaviour effect | None now. See DC-13 if no provider fits. |
| Stage 7 blocker | No. It blocks implementation, not Stage 7 analysis. |
| Trigger screen | None. |

### B6-11 — Workspace placement in current navigation

| Field | Detail |
|---|---|
| Severity | Low |
| Blueprint section | §8.1, §9 |
| FCTM rows | `17-§5-1`, `17-§5-2`, `17-§22-8`, `BP-§8.3-1` |
| Source / FPDR | Contract 17 §5; Contract 10 §26 |
| Repository evidence | Navigation duplicated in desktop and mobile menus; client-side auth guard; each page repeats its own business lookup |
| Finding | Adding a first-class Workspace needs entries in both menus and a new authenticated route. A shared business-context provider would avoid a seventh copy of the lookup, and it would be the natural place to consume SB-P-1.12 active-business context (B6-01). |
| Proposed consideration | EIS design. |
| Product-behaviour effect | None. |
| Stage 7 blocker | No. |
| Trigger screen | None. |

### B6-12 — Typed tool registry and validation

| Field | Detail |
|---|---|
| Severity | Low |
| Blueprint section | §8.5 |
| FCTM rows | `24-§11-1` to `24-§11-10`, `24-§20-*` |
| Source / FPDR | Contract 24 §11, §20 |
| Repository evidence | `zod` is already a dependency; RPCs are typed through `src/integrations/supabase/types.ts` |
| Finding | A registry of typed tools, each mapped to one existing RPC or the `FPDR-1` command with read/write separation, fits the codebase. Model output can be validated with existing schema tooling before any call. |
| Proposed consideration | EIS design. |
| Product-behaviour effect | None. |
| Stage 7 blocker | No. |
| Trigger screen | None. |

### B6-13 — Attachment handoff before UDI exists

| Field | Detail |
|---|---|
| Severity | Low |
| Blueprint section | §8.9 |
| FCTM rows | `10-§4-3` to `10-§4-8`, `10-§10-2`, `10-§10-6`, `10-§10-8`, `10-§23-3a` |
| Source / FPDR | Contract 10 §4, §10; Build Plan §16 ("uncontrolled binary-media concentration in Supabase" rejected); Stage 2 DC-08 |
| Repository evidence | No storage bucket; the parser ingress path is catalog-only and transient |
| Finding | Before SB-P-1.14 there is nothing to hand off to. Keeping files in Supabase storage would meet a Build Plan §16 rejection, so pre-UDI attachments must be handled transiently and acknowledged without consequential effect, consistent with DC-08. |
| Proposed consideration | The EIS states the transient handling and the merchant message. |
| Product-behaviour effect | None beyond DC-08 as already dispositioned. |
| Stage 7 blocker | No. |
| Trigger screen | None. |

### B6-14 — WhatsApp-independence evidence

| Field | Detail |
|---|---|
| Severity | Low |
| Blueprint section | §8.10, §15.1 Scenario B |
| FCTM rows | `BP-§10.2-SB`, `BP-§8.4-2`, `10-§23-7` |
| Source / FPDR | Build Plan §8.4, §10.2 Scenario B |
| Repository evidence | No Meta/WhatsApp code exists |
| Finding | Independence is structurally true today. Scenario B still needs positive evidence that no Meta call was required, for example outbound-request logging during the run. |
| Proposed consideration | The Verification Checklist names the evidence class. |
| Product-behaviour effect | None. |
| Stage 7 blocker | No (Scenario B timing is covered by B6-01). |
| Trigger screen | None. |

### B6-15 — Performance target with model and voice round trips

| Field | Detail |
|---|---|
| Severity | Low |
| Blueprint section | §8.1, §8.11, §9 |
| FCTM rows | `10-§20-1` to `10-§20-6`, `12-§18-1`, `22-§21` |
| Source / FPDR | Contract 10 §20 ("where technically reasonable"); Contract 12 §18 |
| Repository evidence | No AI path to measure |
| Finding | Voice capture, transcription, model reasoning and optional speech output will often exceed 3 seconds. The contract qualifies the target, and progress display is already required. |
| Proposed consideration | The EIS sets measured latency budgets per path and uses streaming. |
| Product-behaviour effect | None. |
| Stage 7 blocker | No. |
| Trigger screen | None. |

### B6-16 — AI usage telemetry sink and test/CI evidence

| Field | Detail |
|---|---|
| Severity | Low |
| Blueprint section | §8.3, §8.11 |
| FCTM rows | `24-§26-9`, `24-§28-10`, `22-§22-1` to `22-§22-6`, `22-§23-3`, `22-§23-7` |
| Source / FPDR | Contract 24 §26, §28; Contract 22 §22; Contract 19 §11 (delegated) |
| Repository evidence | No telemetry store; `/super-admin` is a placeholder; Actions runs unavailable since 2026-09-30; the test project is only partially evidenced (EV-02) |
| Finding | Aggregate, privacy-respecting usage and cost telemetry needs a home this mission creates, which SB-P-1.19 reads later. CI and test evidence for the mission depend on restoring Actions and the test project. |
| Proposed consideration | EIS design; the evidence plan names local-gate fallbacks. |
| Product-behaviour effect | None. |
| Stage 7 blocker | No. |
| Trigger screen | None. |

## 5. Areas reviewed with no further finding

| Mandatory area | Result |
|---|---|
| Permission-context propagation, cross-business isolation, Employee denial, execution-time revalidation | `NO FINDING` beyond B6-01. The Blueprint correctly places all four on the SB-P-1.12 kernel and claims none as working. Engineering note for the EIS: AI context reads must use the caller-JWT RLS client and never the service-role client. |
| `FPDR-2` Basic Voice / Ledger dependency | `NO FINDING` beyond B6-02. The dependency is shown honestly in §8.7, §12.2 and §15.4. |
| Typed proposals and governed deterministic path | Covered by B6-05 and B6-12; no product issue. |
| SB-P-1.12 implementation dependency | Covered by B6-01. |

## 6. Trigger screen (T2, T3, T6, T7, T8)

| Trigger | Result |
|---|---|
| T2 — conflict among approved sources | None found |
| T3 — new product decision | Candidates: B6-02 (credit payment method versus `FPDR-2`); B6-07 (user-visible `FPDR-4` preference, low); B6-06 only if the chosen provider retains raw audio |
| T6 — material derived constraint | None new |
| T7 — omission, deferral, pull-forward, simplification, reclassification | None proposed |
| T8 — Product Truth conflict or infeasibility | Candidate: B6-01 (Blueprint §15.1/§12 dependency statement versus the locked SB-P-1.12 EIS §19.5) |

Per SB-P-1.13-MC-07 §6, dependent work is stopped for B6-01 and B6-02 and both are returned to Mission Control. No product truth, FCTM row or Founder decision was changed.

## 7. Stage 7 blocker list

1. B6-01: dependency scope of Owner-only paths and Scenario B (Mission Control determination; T8 candidate).

B6-02 does not block Stage 7 but must be settled before the EIS.

## 8. Recommended dispositions (for Mission Control)

| Finding | Recommendation |
|---|---|
| B6-01 | Mission Control determination; likely a narrow Blueprint §12/§15 refinement with surgical FCTM dependency reconciliation |
| B6-02 | Mission Control or Founder determination |
| B6-03, B6-04, B6-05, B6-08, B6-11, B6-12, B6-13, B6-15, B6-16 | Accept as Stage 7 / EIS engineering inputs |
| B6-06, B6-10 | Route to the Stage 7 Voice/Provider and AI Behaviour reviewers |
| B6-07 | Mission Control decides refinement versus EIS design |
| B6-09 | Mission Control assigns FAQ content ownership |
| B6-14 | Verification Checklist input |

## 9. Verification

- All file and line references in Section 2 were read from the repository at `main@b146cad8`.
- The Blueprint and FCTM blobs are unchanged from the Stage 5-reviewed head.
- Markdown Quality Gate and the pre-commit gate: results in the pull-request handover.
