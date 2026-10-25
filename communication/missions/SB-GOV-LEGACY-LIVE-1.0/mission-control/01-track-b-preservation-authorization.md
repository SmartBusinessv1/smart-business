# Track B — Legacy Live Communication Preservation Authorization

**Mission / governance workstream:** SB-GOV-LEGACY-LIVE-1.0 — Legacy Live Communication Reconciliation  
**Status:** PROPOSED — effective only after Founder human merge and Mission Control canonical-main verification.  
**Authority:** Founder Track B read-only inventory return; active Communication Protocol v1.1 §§16, 16.1, 26; `communication/README.md`; Source 18 and Phase 1 operating pattern (subordinate constraints).  
**Repository:** `SmartBusinessv1/smart-business`  
**Date:** 2026-10-25 (Asia/Kolkata).  
**Independence:** Mission Control verifies separately from the records-preparation actor; Founder human merge remains required.

## 1. Read-only disposition
Accept the reported 90 numbered files for preservation planning: 51 instructions, 39 reports, 39 same-suffix pairs and 12 instructions with no same-suffix report. Reported ownership: suffixes 1.1–1.50 SB-P-1.12; 1.51 SB-P-1.17. `report1.51.md` is a NOT EXECUTED placeholder, not a specialist completion. These counts/ownership claims must be independently rechecked against the exact canonical source bytes and Git history; no presence of a matched filename proves performance or acceptance. No same-blob duplicate elsewhere was reported; do not substitute Git history alone for durable mission-scoped preservation.

## 2. Explicit bounded Git authorization — effective only after merge of this record
**Mission Control authorizes the Founder Room — Communication Records Assessment Actor** for governance workstream **SB-GOV-LEGACY-LIVE-1.0** to operate on **SmartBusinessv1/smart-business**, using locked branch **`governance/legacy-live-clearance`**, limited strictly to:

- `communication/missions/SB-GOV-LEGACY-LIVE-1.0/manifest/legacy-live-90-file-manifest.md`
- `communication/missions/SB-GOV-LEGACY-LIVE-1.0/manifest/reference-impact-and-exceptions.md`
- `communication/missions/SB-P-1.12/communication-preservation/legacy-live-numbered/*.md` — filenames must correspond one-to-one to the original numbered `communication/live/` filename.
- `communication/missions/SB-P-1.17/communication-preservation/legacy-live-numbered/*.md` — same original filename requirement.

The actor may fetch, pull fast-forward only, create/switch the locked branch based on newly verified canonical `main`, stage **exact authorized files only**, commit, push only that branch, and open/update **one** preservation PR to `main`. Use **mission-scoped descriptive commit messages** prefixed `docs(SB-GOV-LEGACY-LIVE-1.0):`; standard `Co-Authored-By` attribution trailer **permitted**, not required. Do not use `git add .`, force-push, destructive reset or direct write to `main`.

**Expiry:** at the earlier of (a) submission of the first preservation PR for Mission Control review, (b) 2026-11-15 23:59 Asia/Kolkata, or (c) express revocation or a Protocol §21 stop event. Corrections to an already submitted PR require a new expressly bounded authorization.

## 3. Preservation obligations
Read the canonical `communication/live/` tree at the verified base. Produce **exactly 90 manifest rows** with filename, path, original blob SHA, byte size, mission attribution/evidence, paired counterpart or explicit unmatched state, historical actual status, existing durable evidence, source references and future disposition. Preserve **every numbered file** as an exact byte-identical snapshot under its evidenced owning mission unless pre-existing exact-byte mission-scoped preservation is independently demonstrated; retain manifest proof for every source. In particular do not promote `report1.51` placeholder to completed review.

Do not copy normalized Markdown or modify content; compare canonical Git blob SHA source-to-snapshot and record exact proof. Source files stay untouched. Index all current repository references to old live paths, with category (active vs historical), potential breakage, proposed stable destination and outstanding issues. Where attribution or integrity is ambiguous, mark **UNRESOLVED — RETAIN SOURCE IN LIVE**, do not guess.

## 4. Independent verification and clearance gates
**Independent verification actor:** Mission Control — repository-preservation verification function, acting separately from the Founder Room records preparer; it must disclose any direct authorship of the preservation payload and obtain a non-author reviewer if separation cannot be established.

Gate P1: exact 90-source manifest and all counterpart/owner/status exceptions recorded.  
Gate P2: independent source-vs-preservation SHA verification on the **same PR head**, without rewriting historical contents.  
Gate P3: historical reference-impact and active-link safety assessment.  
Gate P4: relevant Markdown and application CI green at accepted head; Mission Control review; Founder human merge; canonical `main` re-verification.  
Gate D (future and **not granted here**): a new separate, exact-file removal authorization only for individually proven preserved and reference-safe numbered copies.

**No numbered files may be deleted, renamed, moved or modified under this grant.** `communication/live/instruction.md` and `communication/live/report.md` for SB-P-1.18 are read-only and must not be changed. No `communication/archive/` formal closure transfer, Stage 23/24 closure, fabricated reports, implementation, SQL, migration, provider activation or production mutation.

## 5. Track A isolation and stop
SB-P-1.18 Stage 1 intake continues independently under its own actor, branch and approval gates. Any discovered active-communication conflict must be reported precisely; mere historical clutter is not a Stage 1 blocker. Stop after one preservation PR and manifest return for Mission Control review, **without self-merge or deleting anything**.
