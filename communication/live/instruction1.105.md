# SMART BUSINESS MISSION CONTROL

# SB-P-1.11-GC-9 — B1 ACCEPTANCE-CONTRACT CORRECTION

**Instruction ID:** instruction1.105  
**Parent Mission:** SB-P-1.11 — Product Catalog & Pricing  
**Correction Gate:** GC-9 — Final Infrastructure B1 Acceptance-Contract Correction  
**Executing Room:** Claude Code / Engineering Architecture  
**Authorized By:** Mission Control  
**Mode:** SPECIFICATION CORRECTION ONLY — NO IMPLEMENTATION  
**Implementation Authority:** NONE  
**Production Migration Authority:** NONE  
**Deployment Authority:** NONE

---

## 1. Mission Objective

Correct exactly one remaining Infrastructure Operations finding from:

`communication/live/report1.113.md`

The only open item is `INFRA-EIS-B1` acceptance-contract wording in the previously merged correction addendum:

`communication/live/report1.112.md`

Do not reopen `INFRA-EIS-B2`, `INFRA-EIS-N1`, the 4,194,304-byte hard serialized-response ceiling, or any other architecture decision.

Required output:

`communication/live/report1.114.md`

The output must be a self-contained **B1 Acceptance-Contract Correction Addendum** that becomes binding together with `report1.108.md` and `report1.112.md` if later confirmed by Infrastructure Operations and accepted by Mission Control.

Do not overwrite or rewrite prior reports. Preserve them as immutable evidence.

---

## 2. Canonical Inputs

Use current merged `main` as repository truth.

Read in full:

- `communication/live/instruction1.104.md`
- `communication/live/report1.113.md`
- `communication/live/instruction1.103.md`
- `communication/live/report1.112.md`
- `communication/live/report1.109.md`
- `communication/live/report1.108.md`

Read other prior architecture evidence only if required to understand the frozen B1 response contract.

---

## 3. Authorized Correction Scope — INFRA-EIS-B1 ONLY

`report1.113.md` accepted the following B1 mechanisms as sound and they are now frozen:

- exact hard serialized parser-response ceiling: **4,194,304 bytes**;
- enforcement before any success response byte is streamed;
- structural avoidance of the post-6-MiB throttled response path;
- deterministic fail-closed `RESPONSE_TOO_LARGE` behavior;
- no silent truncation;
- locked 15-second Lambda timeout;
- locked 10-second application parser budget.

The only correction is to remove the contradiction in the later-build maximum-bound fixture contract.

The correction addendum must lock this exact acceptance semantics:

1. **Largest legitimate CSV-shaped response fixture**
   - If its fully serialized allowlisted response is above **4,194,304 bytes**, the expected result is deterministic fail-closed rejection with `RESPONSE_TOO_LARGE`.
   - It must not be required to prove successful streaming above the hard ceiling.

2. **Largest legitimate XLSX-shaped response fixture**
   - If its fully serialized allowlisted response is above **4,194,304 bytes**, the expected result is deterministic fail-closed rejection with `RESPONSE_TOO_LARGE`.
   - It must not be required to prove successful streaming above the hard ceiling.

3. **Successful-streaming boundary fixtures**
   - A fixture whose serialized response is exactly at the hard ceiling, where exact construction is practical, or the closest deterministic fixture immediately below it, must prove successful response completion.
   - At least one clearly below-ceiling maximum-shape representative fixture must also prove successful response completion.

4. **Above-ceiling boundary fixture**
   - A fixture whose serialized response is the smallest deterministic value above **4,194,304 bytes** must prove fail-closed `RESPONSE_TOO_LARGE` behavior before success streaming begins.

5. **Timing and parser-budget evidence**
   - Successful at/below-ceiling fixtures must prove total Lambda invocation completion within the locked **15-second** timeout and application parser execution within the locked **10-second** budget.
   - Above-ceiling fixtures must prove deterministic rejection without requiring successful streaming of the oversized payload.

6. **Cold/warm execution**
   - Where applicable, both cold and warm Lambda execution evidence must be collected for the successful at/below-ceiling boundary case.

7. **Measured evidence remains a later gate**
   - This correction mission does not claim benchmark or implementation evidence already exists.
   - The fixture matrix is an implementation-verification/acceptance contract only.

8. **No reclassification of legitimate data**
   - Do not redefine the ~42–50 MiB maximum legitimate allowlisted response estimate merely to make it fit below 4 MiB.
   - Legitimate accepted parser input may still yield a response above the Phase 1 response ceiling; such cases are intentionally rejected at the response boundary with the already-frozen `RESPONSE_TOO_LARGE` outcome.

9. **No architecture expansion**
   - Do not add storage, queueing, pagination, chunking, alternate transport, asynchronous jobs, new backend services, or any other architecture to carry responses above 4 MiB.

10. **No change to merchant data semantics**
    - Do not truncate, silently drop, mutate, or rewrite merchant product values to fit the response ceiling.

If this exact correction cannot be expressed without reopening a frozen architecture decision, STOP and report the blocker.

---

## 4. Explicitly Frozen Decisions

Preserve without modification:

- `INFRA-EIS-B2` — PASS;
- `INFRA-EIS-N1` — PASS;
- exact response ceiling **4,194,304 bytes**;
- response-ceiling enforcement before streaming;
- `RESPONSE_TOO_LARGE` deterministic rejection;
- AWS Lambda as the narrow external parser runtime;
- standard Lambda default compute;
- `nodejs24.x`;
- `ap-south-1`;
- 2,048 MB starting memory;
- 15-second Lambda timeout;
- 10-second application parser budget;
- finite reserved concurrency as defense-in-depth only;
- no Lambda Managed Instances;
- transient private S3 parser-ingress;
- `ChecksumMode = ENABLED` HeadObject contract;
- IAM Roles Anywhere;
- Parser Upload Lease;
- EC-2;
- EC-3;
- Papa Parse;
- ExcelJS;
- `node:zlib`;
- maximum compressed input 5,242,880 bytes;
- maximum actual-produced XLSX decompressed bytes 25 × 1024 × 1024;
- maximum 2,000 rows;
- maximum 40 columns;
- maximum 2,000 characters per cell;
- Owner-only Phase 1 import authority;
- Catalog / Inventory truth separation;
- D-047 and D-068;
- BKR-1 through BKR-5;
- exactly nineteen public Catalog commands — no twentieth command.

---

## 5. Required Output Structure

`communication/live/report1.114.md` must contain at minimum:

1. Mission and authority.
2. Reviewed `main` SHA.
3. Exact remaining `INFRA-EIS-B1` contradiction from `report1.113.md`.
4. Corrected acceptance matrix distinguishing:
   - largest legitimate above-ceiling CSV/XLSX → deterministic rejection;
   - at/below-ceiling fixtures → successful streaming;
   - immediately-above-ceiling fixture → deterministic rejection.
5. Timing / parser-budget evidence contract.
6. Explicit confirmation that the 4,194,304-byte ceiling and all other frozen decisions are unchanged.
7. Confirmation that B2 and N1 are not reopened.
8. Confirmation that no implementation or resource/database change occurred.
9. Final disposition.

Allowed final dispositions:

- `LAMBDA PARSER EIS B1 ACCEPTANCE-CONTRACT CORRECTION — READY FOR INFRASTRUCTURE CONFIRMATION`
- `LAMBDA PARSER EIS B1 ACCEPTANCE-CONTRACT CORRECTION — STOPPED — UNRESOLVED INFRASTRUCTURE BLOCKER`

Do not claim Infrastructure PASS. Only Infrastructure Operations may issue that verdict.

---

## 6. Prohibited Scope

Do not:

- modify prior reports;
- reopen B2 or N1;
- change the 4 MiB response ceiling;
- implement application or parser code;
- add or update dependencies;
- create or modify AWS/S3/IAM resources;
- execute project AWS commands;
- create SQL or migrations;
- mutate Supabase;
- change RLS or grants;
- change Lovable;
- change Product Truth;
- change permissions;
- add a twentieth Catalog command;
- weaken parser/input/runtime limits;
- enter Build Lock or Build Mode;
- deploy;
- publish;
- touch production;
- begin Stage B.

---

## 7. Repository Discipline

The executing room shall:

- verify current merged `main` before work;
- create only `communication/live/report1.114.md`;
- use a protected mission branch and pull request;
- preserve unrelated local changes untouched;
- use exact-file staging;
- not use `git add .`;
- run the applicable Markdown Quality Gate;
- inspect staged content for secrets;
- report the exact commit SHA and PR;
- not merge its own PR.

---

## 8. Gate After Correction

If `report1.114.md` returns:

`LAMBDA PARSER EIS B1 ACCEPTANCE-CONTRACT CORRECTION — READY FOR INFRASTRUCTURE CONFIRMATION`

and is human-reviewed and merged, Mission Control shall return **only `INFRA-EIS-B1`** to Infrastructure Operations for one final short confirmation review.

`INFRA-EIS-B2` and `INFRA-EIS-N1` remain closed PASS items and must not be re-reviewed.

Stage B — Supabase Backend Architecture remains locked until Infrastructure Operations returns a merged:

`LAMBDA PARSER EIS INFRASTRUCTURE REVIEW — PASS`

---

## 9. Mission Control Decision

`SB-P-1.11-GC-9 — SINGLE-ITEM B1 ACCEPTANCE-CONTRACT CORRECTION AUTHORIZED`

Current authorized next action after human merge of this instruction:

**Claude Code / Engineering Architecture → `communication/live/report1.114.md`**
