// SB-P-1.11-GC-1 — Structural content-type verification (EIS §45.2, SEC-1:
// "extension alone is not trusted"). Runs before either parser is invoked.
import { inflateRawSync } from "node:zlib";
// Explicit .ts extension: part of parse-worker.ts's worker-thread-loaded
// dependency closure (see that file's own comment).
import { ImportLimitError } from "./limits.ts";

const ZIP_LOCAL_HEADER_SIG = 0x04034b50;
const ZIP_CENTRAL_HEADER_SIG = 0x02014b50;
const ZIP_EOCD_SIG = 0x06054b50;

/**
 * CSV structural check: the payload must be plain UTF-8 text (no binary or
 * ZIP-magic-byte prefix). CSV has no formula/macro concept — parsing never
 * evaluates content — so this check exists only to reject a mislabeled
 * binary/spreadsheet file being submitted as ".csv".
 */
export function verifyCsvStructure(buffer: Buffer): void {
  if (buffer.length >= 4 && buffer.readUInt32LE(0) === ZIP_LOCAL_HEADER_SIG) {
    throw new ImportLimitError(
      "UNSUPPORTED_FILE_TYPE",
      "This file looks like a spreadsheet workbook, not a CSV file.",
    );
  }
  // A UTF-8 decode with the fatal flag catches invalid byte sequences,
  // which is characteristic of arbitrary binary content mislabeled as CSV.
  try {
    new TextDecoder("utf-8", { fatal: true }).decode(buffer);
  } catch {
    throw new ImportLimitError(
      "MALFORMED_FILE",
      "This file isn't valid UTF-8 text, so it can't be read as a CSV file.",
    );
  }
}

interface ZipEntry {
  filename: string;
  compressionMethod: number;
  compressedSize: number;
  uncompressedSize: number;
  localHeaderOffset: number;
}

function findEndOfCentralDirectory(buffer: Buffer): number {
  const maxCommentLength = 65535;
  const searchStart = Math.max(0, buffer.length - 22 - maxCommentLength);
  for (let i = buffer.length - 22; i >= searchStart; i--) {
    if (buffer.readUInt32LE(i) === ZIP_EOCD_SIG) return i;
  }
  return -1;
}

function readCentralDirectory(buffer: Buffer): ZipEntry[] {
  const eocdOffset = findEndOfCentralDirectory(buffer);
  if (eocdOffset === -1) {
    throw new ImportLimitError(
      "MALFORMED_FILE",
      "This file isn't a valid spreadsheet workbook (not a well-formed ZIP container).",
    );
  }
  const totalEntries = buffer.readUInt16LE(eocdOffset + 10);
  const centralDirOffset = buffer.readUInt32LE(eocdOffset + 16);

  const entries: ZipEntry[] = [];
  let offset = centralDirOffset;
  for (let i = 0; i < totalEntries; i++) {
    if (offset + 46 > buffer.length || buffer.readUInt32LE(offset) !== ZIP_CENTRAL_HEADER_SIG) {
      throw new ImportLimitError(
        "MALFORMED_FILE",
        "This file isn't a valid spreadsheet workbook (corrupt central directory).",
      );
    }
    const compressionMethod = buffer.readUInt16LE(offset + 10);
    const compressedSize = buffer.readUInt32LE(offset + 20);
    const uncompressedSize = buffer.readUInt32LE(offset + 24);
    const filenameLength = buffer.readUInt16LE(offset + 28);
    const extraLength = buffer.readUInt16LE(offset + 30);
    const commentLength = buffer.readUInt16LE(offset + 32);
    const localHeaderOffset = buffer.readUInt32LE(offset + 42);
    const filename = buffer.subarray(offset + 46, offset + 46 + filenameLength).toString("utf-8");
    entries.push({
      filename,
      compressionMethod,
      compressedSize,
      uncompressedSize,
      localHeaderOffset,
    });
    offset += 46 + filenameLength + extraLength + commentLength;
  }
  return entries;
}

/**
 * Reads and decompresses one ZIP entry. `maxOutputLength`, when given, is
 * passed straight to Node's own `zlib.inflateRawSync` -- this is a hard
 * cap enforced by zlib *during* decompression (it allocates the output
 * incrementally and aborts once the cap would be exceeded), not a
 * post-hoc check on an already-fully-materialized buffer. This is what
 * makes SEC-IMP-2's "actual produced bytes, not declared metadata"
 * containment real: a malicious entry that understates its own declared
 * uncompressedSize cannot produce more than `maxOutputLength` bytes no
 * matter what its header claims, because zlib itself refuses to keep
 * inflating past that point.
 */
function readZipEntryData(buffer: Buffer, entry: ZipEntry, maxOutputLength?: number): Buffer {
  const offset = entry.localHeaderOffset;
  if (offset + 30 > buffer.length || buffer.readUInt32LE(offset) !== ZIP_LOCAL_HEADER_SIG) {
    throw new ImportLimitError("MALFORMED_FILE", "This file isn't a valid spreadsheet workbook.");
  }
  const filenameLength = buffer.readUInt16LE(offset + 26);
  const extraLength = buffer.readUInt16LE(offset + 28);
  const dataStart = offset + 30 + filenameLength + extraLength;
  const compressed = buffer.subarray(dataStart, dataStart + entry.compressedSize);
  if (entry.compressionMethod === 0) {
    if (maxOutputLength !== undefined && compressed.length > maxOutputLength) {
      throw new ImportLimitError(
        "DECOMPRESSED_TOO_LARGE",
        "This spreadsheet workbook is too large to process.",
      );
    }
    return Buffer.from(compressed);
  }
  if (entry.compressionMethod === 8) {
    try {
      return maxOutputLength !== undefined
        ? inflateRawSync(compressed, { maxOutputLength })
        : inflateRawSync(compressed);
    } catch (err) {
      if (
        err instanceof RangeError ||
        (err as NodeJS.ErrnoException)?.code === "ERR_BUFFER_TOO_LARGE"
      ) {
        throw new ImportLimitError(
          "DECOMPRESSED_TOO_LARGE",
          "This spreadsheet workbook is too large to process.",
        );
      }
      throw err;
    }
  }
  throw new ImportLimitError(
    "UNSUPPORTED_FILE_TYPE",
    "This spreadsheet workbook uses an unsupported compression method.",
  );
}

/**
 * SEC-IMP-2 fix: decompresses every entry in the archive for real, with a
 * shrinking per-entry `maxOutputLength` budget derived from actual bytes
 * already produced -- never from any entry's declared uncompressedSize.
 * A ZIP whose central directory understates its true expansion (a
 * decompression-bomb fixture) is rejected here, before exceljs ever sees
 * the buffer, because the real inflate call itself refuses to exceed the
 * remaining budget. This is the sole authority for the decompressed-size
 * ceiling; nothing upstream of this function may rely on declared sizes.
 */
function enforceRealDecompressedSize(
  buffer: Buffer,
  entries: readonly ZipEntry[],
  maxTotalBytes: number,
): void {
  let consumed = 0;
  for (const entry of entries) {
    const remaining = maxTotalBytes - consumed;
    if (remaining <= 0) {
      throw new ImportLimitError(
        "DECOMPRESSED_TOO_LARGE",
        "This spreadsheet workbook is too large to process.",
      );
    }
    const data = readZipEntryData(buffer, entry, remaining);
    consumed += data.length;
  }
}

const PLAIN_WORKBOOK_CONTENT_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml";
const MACRO_WORKBOOK_CONTENT_TYPE = "application/vnd.ms-excel.sheet.macroEnabled.main+xml";

/**
 * XLSX structural check (EIS §45.2, corrected for SEC-IMP-2): confirms a
 * valid ZIP container whose [Content_Types].xml declares exactly the
 * plain OOXML spreadsheet content type, AND that the archive's true,
 * actually-produced decompressed size (never its declared metadata) stays
 * within the approved ceiling. A macro-enabled workbook declares a
 * different content type and is rejected regardless of extension. An
 * encrypted/password-protected workbook (OLE-compound container, not a
 * plain ZIP) fails at the ZIP central-directory read above, before this
 * check even runs. A ZIP whose declared uncompressedSize fields
 * understate actual expansion (a decompression-bomb fixture) is rejected
 * by `enforceRealDecompressedSize` before exceljs ever receives the
 * buffer -- see that function's own documentation for the mechanism.
 */
export function verifyXlsxStructure(buffer: Buffer, maxDecompressedBytes: number): void {
  const entries = readCentralDirectory(buffer);

  enforceRealDecompressedSize(buffer, entries, maxDecompressedBytes);

  const contentTypesEntry = entries.find((e) => e.filename === "[Content_Types].xml");
  if (!contentTypesEntry) {
    throw new ImportLimitError(
      "MALFORMED_FILE",
      "This file isn't a valid spreadsheet workbook (missing content-type manifest).",
    );
  }
  const contentTypesXml = readZipEntryData(
    buffer,
    contentTypesEntry,
    maxDecompressedBytes,
  ).toString("utf-8");

  if (contentTypesXml.includes(MACRO_WORKBOOK_CONTENT_TYPE)) {
    throw new ImportLimitError(
      "ENCRYPTED_OR_MACRO_FILE",
      "Macro-enabled workbooks aren't supported. Please save as a plain .xlsx file.",
    );
  }
  if (!contentTypesXml.includes(PLAIN_WORKBOOK_CONTENT_TYPE)) {
    throw new ImportLimitError("MALFORMED_FILE", "This file isn't a plain spreadsheet workbook.");
  }
}
