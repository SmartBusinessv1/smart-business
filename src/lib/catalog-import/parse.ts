// SB-P-1.11-GC-1 — CSV/XLSX parsing (EIS §45.2). papaparse for CSV,
// exceljs for XLSX (locked choices, justification in the EIS). Framework
// independent: takes a raw Buffer, returns plain data, no TanStack Start
// dependency.
import Papa from "papaparse";
import ExcelJS from "exceljs";
// Explicit .ts extensions: this module is part of parse-worker.ts's
// dependency closure, loaded directly by node:worker_threads (see that
// file's own comment for why Node's native resolution needs them here).
import { verifyCsvStructure, verifyXlsxStructure } from "./content-type.ts";
import { IMPORT_LIMITS, ImportLimitError } from "./limits.ts";
import { mapHeaders } from "./fields.ts";
import type { ParseOutcome, RawImportRow, RecognizedFieldKey } from "./types";

function checkCellLength(value: string, rowNumber: number): void {
  if (value.length > IMPORT_LIMITS.maxCellLength) {
    throw new ImportLimitError(
      "CELL_TOO_LONG",
      `Row ${rowNumber} has a value longer than ${IMPORT_LIMITS.maxCellLength} characters.`,
    );
  }
}

function buildRawRow(
  rowNumber: number,
  headerMap: ReturnType<typeof mapHeaders>,
  cellValues: string[],
): RawImportRow {
  const fields: Partial<Record<RecognizedFieldKey, string>> = {};
  let hasReferenceCostColumn = false;
  let referenceCostRaw: string | undefined;

  headerMap.forEach((h, colIndex) => {
    const value = (cellValues[colIndex] ?? "").trim();
    checkCellLength(value, rowNumber);
    if (h.isReferenceCost) {
      hasReferenceCostColumn = true;
      if (value) referenceCostRaw = value;
      return;
    }
    if (h.field && value) {
      fields[h.field] = value;
    }
  });

  return { rowNumber, fields, hasReferenceCostColumn, referenceCostRaw };
}

function finish(headerMap: ReturnType<typeof mapHeaders>, rows: RawImportRow[]): ParseOutcome {
  const unrecognizedColumnNames = headerMap
    .filter((h) => h.field === null && !h.isReferenceCost)
    .map((h) => h.original);
  return { rows, unrecognizedColumnNames };
}

export async function parseCsv(buffer: Buffer): Promise<ParseOutcome> {
  const startedAt = Date.now();
  verifyCsvStructure(buffer);
  const text = new TextDecoder("utf-8").decode(buffer);

  const result = Papa.parse<string[]>(text, {
    header: false,
    skipEmptyLines: true,
  });
  if (result.errors.some((e) => e.type === "Delimiter" || e.type === "Quotes")) {
    throw new ImportLimitError("MALFORMED_FILE", "This CSV file couldn't be read.");
  }

  const dataRows = result.data;
  if (dataRows.length === 0) {
    return { rows: [], unrecognizedColumnNames: [] };
  }
  const headerRow = dataRows[0];
  if (headerRow.length > IMPORT_LIMITS.maxColumns) {
    throw new ImportLimitError(
      "TOO_MANY_COLUMNS",
      `This file has more than ${IMPORT_LIMITS.maxColumns} columns.`,
    );
  }
  const body = dataRows.slice(1);
  if (body.length > IMPORT_LIMITS.maxRows) {
    throw new ImportLimitError(
      "TOO_MANY_ROWS",
      `This file has more than ${IMPORT_LIMITS.maxRows} data rows.`,
    );
  }

  const headerMap = mapHeaders(headerRow);
  const rows = body.map((cells, i) => buildRawRow(i + 1, headerMap, cells));

  if (Date.now() - startedAt > IMPORT_LIMITS.maxParseMs) {
    throw new ImportLimitError("PARSE_TIMEOUT", "This file took too long to process.");
  }
  return finish(headerMap, rows);
}

function cellToString(value: ExcelJS.CellValue): string {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") {
    // Formula cell: exceljs never evaluates -- read only the cached result.
    if ("result" in value) return cellToString((value as { result: ExcelJS.CellValue }).result);
    if ("richText" in value) {
      return (value as { richText: { text: string }[] }).richText.map((r) => r.text).join("");
    }
    if (value instanceof Date) return value.toISOString();
    if ("text" in value) return String((value as { text: unknown }).text);
    return "";
  }
  return String(value);
}

export async function parseXlsx(
  buffer: Buffer,
): Promise<ParseOutcome & { additionalWorksheetsIgnored: boolean }> {
  const startedAt = Date.now();
  verifyXlsxStructure(buffer, IMPORT_LIMITS.maxDecompressedBytes);

  const workbook = new ExcelJS.Workbook();
  try {
    await workbook.xlsx.load(buffer as unknown as ArrayBuffer);
  } catch {
    throw new ImportLimitError("MALFORMED_FILE", "This spreadsheet workbook couldn't be read.");
  }

  const worksheet = workbook.worksheets[0];
  if (!worksheet) {
    return { rows: [], unrecognizedColumnNames: [], additionalWorksheetsIgnored: false };
  }
  const additionalWorksheetsIgnored = workbook.worksheets.length > 1;

  const headerCells = worksheet.getRow(1).values as ExcelJS.CellValue[];
  // exceljs row.values is 1-indexed with index 0 unused/empty.
  const headerRow = headerCells.slice(1).map((v) => cellToString(v));
  if (headerRow.length > IMPORT_LIMITS.maxColumns) {
    throw new ImportLimitError(
      "TOO_MANY_COLUMNS",
      `This file has more than ${IMPORT_LIMITS.maxColumns} columns.`,
    );
  }
  const headerMap = mapHeaders(headerRow);

  const rows: RawImportRow[] = [];
  const totalDataRows = Math.max(0, worksheet.rowCount - 1);
  if (totalDataRows > IMPORT_LIMITS.maxRows) {
    throw new ImportLimitError(
      "TOO_MANY_ROWS",
      `This file has more than ${IMPORT_LIMITS.maxRows} data rows.`,
    );
  }

  for (let r = 2; r <= worksheet.rowCount; r++) {
    const row = worksheet.getRow(r);
    if (row.actualCellCount === 0) continue;
    const values = (row.values as ExcelJS.CellValue[]).slice(1).map((v) => cellToString(v));
    rows.push(buildRawRow(r - 1, headerMap, values));
  }

  if (Date.now() - startedAt > IMPORT_LIMITS.maxParseMs) {
    throw new ImportLimitError("PARSE_TIMEOUT", "This file took too long to process.");
  }
  return { ...finish(headerMap, rows), additionalWorksheetsIgnored };
}
