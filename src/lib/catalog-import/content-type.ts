// SB-P-1.11-GC-1 — Structural content-type verification (EIS §45.2, SEC-1:
// "extension alone is not trusted"). Runs before either parser is invoked.
import { inflateRawSync } from "node:zlib";
import { ImportLimitError } from "./limits";

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

function readZipEntryData(buffer: Buffer, entry: ZipEntry): Buffer {
  const offset = entry.localHeaderOffset;
  if (offset + 30 > buffer.length || buffer.readUInt32LE(offset) !== ZIP_LOCAL_HEADER_SIG) {
    throw new ImportLimitError("MALFORMED_FILE", "This file isn't a valid spreadsheet workbook.");
  }
  const filenameLength = buffer.readUInt16LE(offset + 26);
  const extraLength = buffer.readUInt16LE(offset + 28);
  const dataStart = offset + 30 + filenameLength + extraLength;
  const compressed = buffer.subarray(dataStart, dataStart + entry.compressedSize);
  if (entry.compressionMethod === 0) return Buffer.from(compressed);
  if (entry.compressionMethod === 8) return inflateRawSync(compressed);
  throw new ImportLimitError(
    "UNSUPPORTED_FILE_TYPE",
    "This spreadsheet workbook uses an unsupported compression method.",
  );
}

const PLAIN_WORKBOOK_CONTENT_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml";
const MACRO_WORKBOOK_CONTENT_TYPE = "application/vnd.ms-excel.sheet.macroEnabled.main+xml";

/**
 * XLSX structural check (EIS §45.2): confirms a valid ZIP container whose
 * [Content_Types].xml declares exactly the plain OOXML spreadsheet content
 * type. A macro-enabled workbook declares a different content type and is
 * rejected regardless of extension. An encrypted/password-protected
 * workbook (OLE-compound container, not a plain ZIP) fails at the ZIP
 * central-directory read above, before this check even runs.
 *
 * Also enforces the declared decompressed-size bound (§45.3) from the
 * central directory's own uncompressed-size fields, before the full
 * workbook is handed to exceljs for parsing -- a lightweight, early bound,
 * not a substitute for exceljs's own memory usage during full parse.
 */
export function verifyXlsxStructure(buffer: Buffer, maxDecompressedBytes: number): void {
  const entries = readCentralDirectory(buffer);

  const declaredUncompressedTotal = entries.reduce((sum, e) => sum + e.uncompressedSize, 0);
  if (declaredUncompressedTotal > maxDecompressedBytes) {
    throw new ImportLimitError(
      "DECOMPRESSED_TOO_LARGE",
      "This spreadsheet workbook is too large to process.",
    );
  }

  const contentTypesEntry = entries.find((e) => e.filename === "[Content_Types].xml");
  if (!contentTypesEntry) {
    throw new ImportLimitError(
      "MALFORMED_FILE",
      "This file isn't a valid spreadsheet workbook (missing content-type manifest).",
    );
  }
  const contentTypesXml = readZipEntryData(buffer, contentTypesEntry).toString("utf-8");

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
