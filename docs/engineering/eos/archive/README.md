# EOS Historical Archive Boundary

**Status:** HISTORICAL EVIDENCE ONLY — EXCLUDED FROM CURRENT-DOCUMENT DISCOVERY

**Established:** 2026-08-03

## Purpose

This directory is the designated separation boundary for any EOS historical backup or superseded working copy that a future governed mission explicitly chooses to preserve in Git.

Nothing under `docs/engineering/eos/archive/` is current engineering authority, an approval candidate, an executable instruction, or part of the active EOS document set.

## Verified Baseline

At establishment, the current Git tree and repository history contained no tracked EOS filename matching backup, `.bak`, or copy patterns. There was therefore no backup artifact to move.

Generated Markdown-toolkit artifacts are already excluded repository-wide by `.gitignore`, including:

- `*_BACKUP_*.md`
- `*_REPAIR_REPORT.txt`

Those generated files are local safety artifacts and must not enter current-document discovery.

## Future Archive Rules

A future mission may place historical evidence here only when it:

- identifies the exact source and successor document;
- records why Git preservation is necessary;
- renames the artifact so it is clearly historical rather than a generated backup;
- adds a manifest entry within this archive;
- confirms that no active index or approval register treats it as current;
- receives explicit Mission Control authorization.

Until then, this README is the only tracked file authorized in this archive boundary.

