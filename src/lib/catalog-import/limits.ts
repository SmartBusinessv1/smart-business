// SB-P-1.11-GC-1 — Locked hard limits (EIS §45.3). Server-enforced, not
// UI-only guidance. Exceeding any limit rejects the file before any row
// reaches preview.

export const IMPORT_LIMITS = {
  /** Compressed upload size, bytes. */
  maxCompressedBytes: 5 * 1024 * 1024,
  /** Decompressed processing size (XLSX only), bytes. */
  maxDecompressedBytes: 25 * 1024 * 1024,
  /** Data rows. */
  maxRows: 2000,
  /** Columns. */
  maxColumns: 40,
  /** Characters per cell. */
  maxCellLength: 2000,
  /** Server parse wall-clock time, ms. */
  maxParseMs: 10_000,
} as const;

export type ImportLimitErrorCode =
  | "FILE_TOO_LARGE"
  | "DECOMPRESSED_TOO_LARGE"
  | "TOO_MANY_ROWS"
  | "TOO_MANY_COLUMNS"
  | "CELL_TOO_LONG"
  | "PARSE_TIMEOUT"
  | "UNSUPPORTED_FILE_TYPE"
  | "MALFORMED_FILE"
  | "ENCRYPTED_OR_MACRO_FILE";

export class ImportLimitError extends Error {
  readonly code: ImportLimitErrorCode;
  constructor(code: ImportLimitErrorCode, message: string) {
    super(message);
    this.name = "ImportLimitError";
    this.code = code;
  }
}
