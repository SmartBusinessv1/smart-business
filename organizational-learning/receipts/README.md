# Receipts

Processing receipts written by `organizational-learning/scripts/harvest.mjs`,
validated against `organizational-learning/schemas/receipt.schema.ts`.

Path convention: `<mission_id>/<source_fingerprint>.json`.

No receipt is committed here yet. Stage 1 is explicitly not authorized to
process the recommended real proof target (`SB-OPS-CI-ARCHITECTURE-1.0`);
that begins in Stage 2. Stage 1's own tests exercise `harvest.mjs` against
temporary, isolated fixture repositories, not this directory.
