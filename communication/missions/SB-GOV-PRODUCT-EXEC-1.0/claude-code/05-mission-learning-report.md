# SB-GOV-PRODUCT-EXEC-1.0 — Mission Learning Report

**Mission ID:** `SB-GOV-PRODUCT-EXEC-1.0`

**Record:** `claude-code/05` — mission learning report (Organizational Learning Engine, OLE, manual handoff)

**Status:** `PREPARED — PENDING MC DISPOSITION`. Candidate-only. `authority_effect: NONE`.

**Prepared by:** Claude Code, as author and preparer. Claude Code does not review or promote its own candidates, does not accept or close the mission, and made no Mission Control decision recorded here.

**Authority basis:** Mission Control's PR-2 grant, PR #610 comment `5750845076`, issued after the human merge of PR #610 at `main@9e98c4f364d9b7852eaa2b496b65b479d0328874`. The grant expires at draft-PR publication.

**Contract followed:** `communication/missions/SB-ORG-LEARNING-1.0/mission-control/03-final-reconciled-build-plan-and-acceptance.md`, Section 12, with the eight required sections in order.

**Pinned snapshot:** `9e98c4f364d9b7852eaa2b496b65b479d0328874`. Every citation below and in the candidates resolves at that commit.

**What this report is not:** an OLE promotion, a Mission Control OLE disposition, formal acceptance or closure of the mission, a communication archive or live-channel reset, or an activation of `SB-P-1.12`. Publishing candidates is not promoting them.

---

## 1. Mission identity and authoritative closure

- **Mission:** `SB-GOV-PRODUCT-EXEC-1.0`, the Product Mission execution-framework reconciliation.
- **Mission class:** `non-product-governance-execution-framework-reconciliation`. No application, runtime, database or production behaviour was changed or verified.
- **Closure envelope:** `communication/missions/SB-GOV-PRODUCT-EXEC-1.0/claude-code/04-ole-learning-handoff-closure-envelope.json`, `closure_revision` `05-postactivation-closure-readiness-and-ole-handoff`.
- **Interim disposition in the envelope:** `GOVERNANCE ACTIVATED (PR #608) — POST-ACTIVATION EVIDENCE RECONCILED (PR #609) — CLOSURE-READINESS BRIDGE COMMITTED (PR #610) — MANUAL OLE LEARNING HANDOFF IN PROGRESS — FORMAL CLOSURE PENDING`.

The pull requests keep their distinct roles. No commit stands in for another.

| PR | Role | Merge commit | Note |
|---|---|---|---|
| #606 | Publication of the amended governing text | `b3cd5f4` | Publication is not activation |
| #607 | Preparation | `86d9813` | Activated nothing |
| #608 | **Activation** | `abc458dff590accbc9454367728978553bd3a25b` | The human merge at GitHub `merged_at` `2026-09-20T11:34:43Z` is the single activation event |
| #609 | Mandatory post-merge evidence reconciliation | `63187bc6c2793323b087c68ea3a2050e0ef85b91` | Not a second activation event. Did not change the effective instant |
| #610 | Closure-readiness evidence bridge | `9e98c4f364d9b7852eaa2b496b65b479d0328874` | Human-merged at `2026-09-20T15:46:16Z`. Did not close the mission |

### Accepted versus proposed

| Kind | Content | Status |
|---|---|---|
| Accepted by Mission Control, as recorded | The activation of the five amended instruments at the PR #608 merge, and the factual reconciliation in PR #609 | Verified by Mission Control. Not re-decided here |
| Accepted by Mission Control, as recorded | The ChatGPT Project holds one Source 18 v1.2 upload, attested by PR #609 comment `5750647268` | Neutral observation. Scope is one file. Upload time and method are `NOT RECORDED`. Not a candidate |
| Proposed by this handoff | Five candidate learning items (Section 5) | `CANDIDATE`, `authority_effect: NONE`. Awaiting Mission Control's OLE disposition |
| Not decided | OLE disposition, formal acceptance and closure, archive and live reset, promotion of any candidate | Each needs its own separate authority |

## 2. Evidence / provenance manifest

### 2.1 Harvest

- **Command:** `node organizational-learning/scripts/harvest.mjs --envelope communication/missions/SB-GOV-PRODUCT-EXEC-1.0/claude-code/04-ole-learning-handoff-closure-envelope.json`. The harvester is the approved manually invoked tool. It was run once against the real receipts directory, after a dry run into a scratch directory so that a failure could not leave a stray receipt in the repository.
- **Receipt:** `organizational-learning/receipts/7fc704ee29b181231a7c8a80f87950012f2a8d9a14e72d7c9631d2ac2343b5c6/c6d70987bde237520227d7def58a49ae51ef682f2f394bf6c32b1842a418d8c2.json`. It was emitted by the tool and not edited. It records `processing_state: SCREENED` and screening `CLEAN` with no findings over 3 scanned paths. Its `receipt_id` is `SB-GOV-PRODUCT-EXEC-1.0:c6d70987bde237520227d7def58a49ae51ef682f2f394bf6c32b1842a418d8c2` and its `run_id` is `845a69d8-0d32-40c5-a75f-3cc3ee6fffab`.
- **Idempotency:** a second invocation on the same envelope printed `already processed` with the same fingerprint and wrote nothing.
- **Harvested manifest (3 files, from the envelope's `acceptance_refs` and `closure_refs`):**

| Path | Blob |
|---|---|
| `communication/missions/SB-GOV-PRODUCT-EXEC-1.0/README.md` | `579f32a35ec9a87d6da254e06d2e55f048b6e8ed` |
| `communication/missions/SB-GOV-PRODUCT-EXEC-1.0/mission-control/04_activation_decision_and_metadata_reconciliation.md` | `2c89af23a62b3ab78aae6619c18f439505f8712a` |
| `communication/missions/SB-GOV-PRODUCT-EXEC-1.0/mission-control/05-postactivation-closure-readiness-and-ole-handoff.md` | `b47399206100c9f915e935244af4556fc5a57602` |

The harvester read an envelope that was not yet committed and resolved its evidence at the committed snapshot. That is its designed behaviour, so no staged-sequence refinement was needed.

### 2.2 Candidate-level provenance

- **Sources cited by candidates:** only three committed files, all under the harvestable `communication/missions/**` and `communication/archive/**` roots: record 04, the PR #610 bridge, and one precedent archive file (`communication/archive/SB-GOV-IV-1.0/communication.md`, blob `1d9514d761d12ba5821373bdca4de3a3d37dafd0`).
- **Volume:** 5 candidates, 16 claims, 28 evidence references. Every reference names repository, `commit_sha`, path, `blob_sha`, a locator, actor class, dates, scope and relationship.
- **Checks run (repository's own code):** every candidate validates against the approved candidate schema. Every one of the 28 references resolves `VALID` through `validateProvenanceReference` against the real repository, and every one is pinned to the snapshot above. Every locator's quoted excerpt was checked to appear verbatim in the pinned blob. No reference is to `communication/live/**`, a GitHub comment, or an OLE-generated file. No candidate cites this report, the envelope, the receipt or another candidate.
- **Screening:** the harvester's heuristic scan returned `CLEAN` on all 3 cited blobs and on all 5 candidate files.

### 2.3 Limits of this provenance

- Records 04 and the bridge were prepared by Claude Code and accepted by Mission Control. The candidates are Claude Code's synthesis of them. The chain shows what the committed record says. It is not an independent check that the record's account is right, and it does not extend to anything the records attribute to a source that is not committed.
- The bridge transcribes GitHub comments. A GitHub comment is not direct harvester provenance, so no candidate cites one. Where a claim rests on a comment, it rests on the bridge's transcription and is marked attested.
- The independent verifiers' report text is not preserved in the repository or in GitHub, and no verifier identity is established. Candidates 03 and 04 rest on Mission Control's accepted findings and are qualified accordingly. The grant's alternative, obtaining the verbatim reports through the Founder, was not needed for the claims kept, because each was narrowed to what the committed material states.
- `generated_at` and `observation_date` in the candidates carry one declared generation time, `2026-09-20T16:30:00Z`, chosen by the preparer and not read from a clock. `evidence_date` is `2026-09-20T15:46:16Z`, the `merged_at` of PR #610, the commit that contains the cited bridge.

### 2.4 Screening against existing promotions, candidates and the institutional-memory guide

Compared against the 17 promotions and 18 unpromoted candidates under `organizational-learning/`, and against `docs/phase-1-mission-blueprint/00_Phase_1_Institutional_Memory_Lessons_Capabilities_and_Operational_Guardrails.md`, all read at the pinned snapshot.

| Overlap | Where | Treatment |
|---|---|---|
| Actor-flexible verifier without weakening the gate | Promotions `SB-GOV-IV-1.0/promotion-02`, `SB-ORG-LEARNING-1.1/promotion-04` | Not cloned. This mission's replacement verifier is corroboration only |
| Finding-scoped correction and re-verification | Promotions `SB-GOV-IV-1.0/promotion-05`, `SB-ORG-LEARNING-1.1/promotion-01` | Not cloned. Corroboration only |
| Manual OLE trigger dependency | Promotion `SB-ORG-LEARNING-1.1/promotion-08` | Not cloned. Recorded as a retained follow-up in the envelope |
| Closure records that cite exact runs, retain follow-ups and disclaim authority | Promotions `SB-OPS-CI-ARCHITECTURE-1.0/promotion-02`, `-03`, `-04` | Not cloned. The bridge and this handoff follow those already promoted practices |
| Governance activation sequencing | Unpromoted `SB-GOV-IV-1.0/candidate-06` | Related to candidate 01 but concerns sequencing before product acceleration. Candidate 01 concerns the publication, preparation and activation split. Kept separate |
| Guide Section 8: "verifier report is itself evidence subject to review"; "merge does not prove Mission Control acceptance" | Phase 1 guide | Adjacent to candidates 01 and 04. It does not say what to do with a report that is held outside GitHub or how a single posting account limits attribution, and it does not address activation as distinct from merge or acceptance. Candidate 04 says so in its `conditions` |
| Guide Section 14: "preserve old reports even when corrected; append or supersede rather than erase the correction trail"; "attribute work by artifact provenance/byline" | Phase 1 guide | Covers the append-only correction theme, so that theme was **not** made a candidate. It partly covers candidate 04's attribution point. Candidate 04 is limited to the added content and states the overlap |
| Guide Section 11: "never silently overwrite newer canonical work" | Phase 1 guide | Concerns code moving between repositories, not live-channel reports. No overlap with candidate 05 |
| No overlap found | Existing promotions, candidates and guide | Candidates 02, 03 and 05 |

The dual-intake rule for the Phase 1 guide and validated OLE learning is already embedded in active governance and is not treated as a new lesson.

## 3. What worked and why

- **A distinct activation event.** Separating publication (#606), preparation (#607) and activation (#608), with the record naming what is not the activation event, left one unambiguous effective instant. The record says the five instruments have been operative together from that instant (candidate 01).
- **Merge facts recorded afterwards, not guessed.** Reserving the merge commit and time as mandatory post-merge evidence let PR #609 record actual `merged_at` values without a second gate and without pre-writing them (candidate 02).
- **A durable committed bridge.** The harvester cannot use GitHub comments as evidence. PR #610 transcribed the comment index, the attributed verification sources and the live-file inventory into a committed record, and that is what made an evidence-backed handoff possible at all. Its comment index was checked against the GitHub API in both directions before it was committed (per the PR #610 description). That was an author check, not an independent one.
- **One bounded grant per step.** The closeout ran as a read-only reconciliation, then an evidence bridge, then this manual handoff, each under its own grant that expires at publication. No step wrote a decision Mission Control had not made.
- **Corroboration of already promoted practices.** Replacing an unavailable verifier, finding-scoped correction and recorded follow-ups all recurred and worked as the existing promotions describe. That recurrence is noted here and is not restated as new lessons.

## 4. What failed / near-misses / corrections

- **The activation mechanism was settled after the record was drafted.** PR #607's first correction fixed the mechanism in the subordinate record only. The replacement verifier's accepted findings showed that the higher-priority Source 18 header did not expressly permit the distinction. Two further correction rounds followed inside the same pull request (candidate 03).
- **A register hash changes with each edit.** Source 18's size changed through five values as its metadata evolved, ending at 100,512 bytes. A hash written earlier would have been wrong (candidate 02).
- **The live report was overwritten in place.** A placeholder, then two revisions in one pull request, then the final version. The squash merge left the two intermediate revisions only on a retained branch (candidate 05). The remedy belongs to the archive step, which has not occurred.
- **Independent verifier reports are not preserved.** They reached Mission Control outside GitHub and no verifier identity is established (candidate 04).
- **A malformed identifier in a cited source.** One Mission Control comment quotes PR #608's head with 32 hexadecimal characters. The bridge used the GitHub-verified 40-character head and documented the discrepancy (candidate 04).
- **Overstatements by the preparer during PR #610 drafting, corrected before that PR was published.** Three draft statements went beyond the evidence: that the author had "read each cited comment", that a later PR #607 verification round was by the "same verifier", and that the precedent "closed without" certain items. Each was narrowed to what was verified. They are recorded because they are the kind of drift the bridge's own source classes exist to catch.
- **Slips caught during this PR-2 preparation.** A candidate title of 204 characters failed the 200-character schema limit and was shortened. A local timestamp printed in IST was read as UTC and was corrected to GitHub's `merged_at` `2026-09-20T15:46:16Z` before any file was written.

## 5. Candidate lessons and anti-patterns

Five candidates are proposed under `organizational-learning/candidates/SB-GOV-PRODUCT-EXEC-1.0/`. Their number follows the evidence and the screening in Section 2.4, not a quota. All are `maturity: CANDIDATE`, `authority_effect: NONE`, `generated_by.actor_class: synthesis`, with `source_reference.source_fingerprint` equal to the receipt's fingerprint `c6d70987…d8c2`.

| # | File | Lesson | Strength | Confidence | Claims / refs | Principal limitation |
|---|---|---|---|---|---|---|
| 01 | `candidate-01-publication-preparation-activation-split.json` | Split a governance amendment into publication, preparation and activation. Activation is the human merge of one self-describing finalization pull request | DIRECT | MEDIUM | 3 / 6 | One mission. Adds review round trips, so it suits amendments that change operating authority |
| 02 | `candidate-02-mandatory-post-merge-evidence-not-a-second-gate.json` | A pull request cannot record its own merge facts. Reserve them as mandatory post-merge evidence that is not a second gate, and recompute any register hash after the final edit | DIRECT | MEDIUM | 3 / 6 | The Source 18 byte history rests on the bridge's transcription |
| 03 | `candidate-03-correct-the-governing-source-not-the-record.json` | A subordinate record cannot resolve an ambiguity in its governing source. Settle the mechanism in the governing source first | ATTESTED | MEDIUM | 3 / 6 | Verifier findings are known only as Mission Control accepted them |
| 04 | `candidate-04-conversation-held-verifier-reports-are-attributed-evidence.json` | Treat a verifier report held only in the project conversation as attributed, qualified evidence. State the limits and do not infer the verifier | ATTESTED | MEDIUM | 4 / 6 | Partly overlaps guide Sections 8 and 14. The reports themselves are unavailable |
| 05 | `candidate-05-live-report-overwritten-in-place-under-squash-merge.json` | Near-miss: overwriting the live report in place leaves earlier states only on a retained branch | DIRECT | MEDIUM | 3 / 4 | The remedy is decided at the archive step, which has not occurred, so this is a recorded near-miss and not a validated fix |

### 5.1 Anti-patterns the candidates name

- Treating the merge of an amendment's text as its activation, or a dated comment, an approval or a preparation merge as the effective instant.
- Writing a pull request's own merge commit or time into its own status record.
- Trusting a register hash that was computed before the file's last edit.
- Settling an ambiguity in a subordinate record while the higher-authority source stays ambiguous.
- Reconstructing verbatim verifier findings from a summary, or inferring who the verifier was.
- Assuming Git history keeps every earlier state of a file that a squash merge collapsed.

### 5.2 Themes proposed in the bridge and how each was handled

| Bridge theme | Outcome | Reason |
|---|---|---|
| 1 Publication, preparation, activation | Candidate 01 | Direct committed evidence, no duplicate |
| 2 Merge facts as post-merge evidence | Candidate 02 | Direct committed evidence, no duplicate |
| 10 Source 18 hash changes | Folded into candidate 02 | Same lesson |
| 3 Correct the governing source | Candidate 03 | Attested only |
| 4 Approval provenance and attribution | Candidate 04, narrowed | The append-only correction trail and retroactive-row marking duplicate guide Section 14, so they were left out |
| 5, 6, 7 Obligation-level traceability, Stage 19 independence, bounded Git authority | No candidate | Already embedded in Source 18, `AGENTS.md` and the Protocol, which the harvester cannot cite. Substantiating a meta-lesson would need the unpreserved verbatim verifier reports |
| 8, 9 Verifier replacement, finding-scoped correction | No candidate | Corroborate existing promotions. Grant forbids cloning them |
| 11 Fewer governance-documentation cycles | No candidate | Only PR and commit counts exist. It needs measurement first |
| 12 Live report overwritten in place | Candidate 05 | The bridge marked it not harvestable until archived. It is harvestable, because the bridge is a committed mission record and the precedent's archive supplies the qualifying claim |
| 13 ChatGPT Project Source 18 upload | **Not a candidate** | Neutral synchronization observation by Mission Control decision. Noted in Section 7 and in `06` only |

## 6. Unresolved risks / follow-ups

Owners are named as the authority that must decide, not as a commitment by Claude Code.

| Item | State | Owner |
|---|---|---|
| OLE disposition of this handoff, formal acceptance and closure, archive and live-channel reset | Not started. Each needs separate authority | Mission Control, then the Founder |
| Promotion of any candidate | Not decided. Publication is not promotion | Mission Control and the Founder |
| Independent provenance and process review of this PR | Requested as risk warrants | Mission Control |
| External Project HQ package | `UNVERIFIED — PENDING RECONCILIATION`. Needs its own evidence of the source commit and sync date | Mission Control and the Founder |
| Historical OLE backfill | `NOT VERIFIED COMPLETE`. Dual intake stays in force | Mission Control |
| OLE Stage 4B automation | Deferred, GitHub Issue #590. This handoff again needed a human-issued instruction | Founder |
| `SB-P-1.12` | `NOT ACTIVATED`. Needs its own activation after a clean closeout | Mission Control and the Founder |
| D-03 verified-code-only merge rule; D-10 branch-protection hardening | D-03 open as a proposal. D-10 deferred by the Founder. The 2026-09-19 gap was not re-verified | Founder |
| Migration files 11 and 21 | Production status uncertain, per `docs/migration/README.md`. No action authorized | Founder |
| Verifier source copies | Verbatim wording unavailable. Needed only to raise the strength of candidates 03 and 04 | Founder |
| `mission-control/mission_memory.md` | Last updated 2026-09-13. Does not mention this mission | Mission Control |

## 7. Tool / resource / capability observations

- **The harvester behaved as designed.** It processed an envelope that was not yet committed, pinned to a committed snapshot, resolved the evidence there, and was idempotent on a second run. No harvester, schema or test change was needed or made.
- **A dry run costs nothing.** Directing the first run to a scratch receipts directory avoided any risk of committing a failure receipt. The real run then emitted the receipt that is committed.
- **Authoring aids used.** The repository's own `validate.mjs`, `provenance-validator.ts`, `allowlist.ts` and `screening.ts` were used to check the files. A verbatim-excerpt check was added by the preparer, because the schema validates a locator's shape and not its truth.
- **A committed record must exist before OLE can use its content.** A GitHub comment cannot be cited as harvester evidence. Comment-held decisions had to be transcribed into a committed record first, which is why PR #610 preceded this PR.
- **Local test environment.** The OLE and repository fast test suite (`vitest.fast.config.ts`) shows 260 passing tests and 4 test files that fail to load with `SyntaxError: Invalid or unexpected token` on this Windows workstation: `context-pack.test.ts`, `harvest-cli.test.ts`, `reconcile.test.ts` and `validate-cli.test.ts`. The same 4 files fail identically on a pristine extract of `main@9e98c4f`, which lacks this handoff's files, so this PR did not cause them. The cause was not diagnosed here. GitHub CI is the authoritative result for this PR and is recorded in the PR description, not in this file, because it does not exist when this file is committed.
- **Not verified in this handoff:** the ChatGPT Project, the external Project HQ package, the contents of any external verifier report, branch-protection settings, and any application, runtime or production state.
- **Neutral observation on the ChatGPT Project.** The Smart Business ChatGPT Project holds one Source 18 v1.2 upload, attested by Mission Control in PR #609 comment `5750647268`. Time and method of upload and Project-side verification are `NOT RECORDED`. This is not a learning candidate, has `authority_effect: NONE`, and is not evidence about the external Project HQ package. It must be rechecked after any Source 18 change.

## 8. Confidence, evidence strength, maturity, freshness

| Aspect | Statement |
|---|---|
| Maturity | All five items are `CANDIDATE`. None is `PROMOTED`. `authority_effect: NONE` |
| Evidence strength | Candidates 01, 02 and 05 are `DIRECT`, in that the committed records state the facts. Candidates 03 and 04 are `ATTESTED`, because they rest on Mission Control's recorded dispositions and not on the unpreserved verifier reports |
| Confidence | `MEDIUM` for all five. Each rests on one mission, and the cited records were prepared by the same actor that synthesized the candidates. No item is `HIGH`, and none should be treated as one until an independent review and a second occurrence exist |
| Freshness | Evidence dates are `2026-09-20`. The snapshot is `main@9e98c4f`. The record for candidates 01 and 02 is the activation record, which was current at that commit. Later edits to Source 18 or the activation record would need a re-check |
| Independence | None of the evidence chain is independent of Claude Code's preparation. The grant requires independent provenance and process review as risk warrants before any disposition |
| No-material-learning statement | Not applicable. This handoff found material candidate learning, and Section 5.2 records the themes that were not carried forward and why |

This report does not promote, accept, close or archive anything. Mission Control's OLE disposition and any promotion decision are separate, and Claude Code does not review its own candidates.
