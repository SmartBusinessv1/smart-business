// EIS §32 items 1-2, 8-9; §45.2-§45.3. CSV/XLSX parsing happy paths and
// hard-limit enforcement.
import { describe, it, expect } from "vitest";
import ExcelJS from "exceljs";
import { parseCsv, parseXlsx } from "@/lib/catalog-import/parse";
import { ImportLimitError, IMPORT_LIMITS } from "@/lib/catalog-import/limits";

describe("parseCsv", () => {
  it("parses a happy-path file and maps recognized headers", async () => {
    const csv = "Product Name,SKU,Selling Price\nRice 1kg,SKU-1,120\nSugar 1kg,SKU-2,55\n";
    const result = await parseCsv(Buffer.from(csv, "utf-8"));
    expect(result.rows).toHaveLength(2);
    expect(result.rows[0].fields.name).toBe("Rice 1kg");
    expect(result.rows[0].fields.sku).toBe("SKU-1");
    expect(result.rows[0].fields.selling_price).toBe("120");
    expect(result.unrecognizedColumnNames).toEqual([]);
  });

  it("reports unrecognized columns by name, without storing their values", async () => {
    const csv = "Product Name,Supplier\nRice,ACME Traders\n";
    const result = await parseCsv(Buffer.from(csv, "utf-8"));
    expect(result.unrecognizedColumnNames).toEqual(["Supplier"]);
    expect(JSON.stringify(result.rows[0].fields)).not.toContain("ACME");
  });

  it("treats a leading =, +, -, or @ cell value as literal text (never evaluated)", async () => {
    const csv = 'Product Name,Description\n"=1+1","+cmd|calc"\n';
    const result = await parseCsv(Buffer.from(csv, "utf-8"));
    expect(result.rows[0].fields.name).toBe("=1+1");
    expect(result.rows[0].fields.description).toBe("+cmd|calc");
  });

  it("rejects a file with more data rows than the limit", async () => {
    const header = "Product Name\n";
    const rows = Array.from({ length: IMPORT_LIMITS.maxRows + 1 }, (_, i) => `Item ${i}\n`).join("");
    await expect(parseCsv(Buffer.from(header + rows, "utf-8"))).rejects.toThrow(ImportLimitError);
  });

  it("rejects a file with more columns than the limit", async () => {
    const header = Array.from({ length: IMPORT_LIMITS.maxColumns + 1 }, (_, i) => `Col${i}`).join(",");
    await expect(parseCsv(Buffer.from(`${header}\n`, "utf-8"))).rejects.toThrow(ImportLimitError);
  });

  it("rejects a cell longer than the max cell length", async () => {
    const longValue = "x".repeat(IMPORT_LIMITS.maxCellLength + 1);
    const csv = `Product Name\n${longValue}\n`;
    await expect(parseCsv(Buffer.from(csv, "utf-8"))).rejects.toThrow(ImportLimitError);
  });

  it("rejects a completely empty file as malformed (no header row at all)", async () => {
    await expect(parseCsv(Buffer.from("", "utf-8"))).rejects.toThrow(ImportLimitError);
  });

  it("returns no rows for a header-only file", async () => {
    const result = await parseCsv(Buffer.from("Product Name,SKU\n", "utf-8"));
    expect(result.rows).toEqual([]);
  });
});

describe("parseXlsx", () => {
  async function buildWorkbookBuffer(): Promise<Buffer> {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Products");
    sheet.addRow(["Product Name", "SKU", "Selling Price"]);
    sheet.addRow(["Rice 1kg", "SKU-1", 120]);
    sheet.addRow(["Sugar 1kg", "SKU-2", 55]);
    const arrayBuffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(arrayBuffer);
  }

  it("parses a real workbook's first worksheet", async () => {
    const buffer = await buildWorkbookBuffer();
    const result = await parseXlsx(buffer);
    expect(result.rows).toHaveLength(2);
    expect(result.rows[0].fields.name).toBe("Rice 1kg");
    expect(result.rows[0].fields.selling_price).toBe("120");
    expect(result.additionalWorksheetsIgnored).toBe(false);
  });

  it("reads only the first worksheet and reports additional ones", async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet1 = workbook.addWorksheet("Products");
    sheet1.addRow(["Product Name"]);
    sheet1.addRow(["Rice"]);
    workbook.addWorksheet("Notes").addRow(["ignore me"]);
    const buffer = Buffer.from(await workbook.xlsx.writeBuffer());
    const result = await parseXlsx(buffer);
    expect(result.rows).toHaveLength(1);
    expect(result.additionalWorksheetsIgnored).toBe(true);
  });

  it("reads a formula cell as its cached result, never re-evaluating it", async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Products");
    sheet.addRow(["Product Name", "Description"]);
    const row = sheet.addRow(["Rice", null]);
    row.getCell(2).value = { formula: "1+1", result: 2 } as ExcelJS.CellFormulaValue;
    const buffer = Buffer.from(await workbook.xlsx.writeBuffer());
    const result = await parseXlsx(buffer);
    expect(result.rows[0].fields.description).toBe("2");
  });
});
