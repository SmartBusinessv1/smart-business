// EIS §45.2/SEC-1: structural content-type verification, before either
// parser runs. §32A items 25-27.
import { describe, it, expect } from "vitest";
import { verifyCsvStructure, verifyXlsxStructure } from "@/lib/catalog-import/content-type";
import { ImportLimitError } from "@/lib/catalog-import/limits";
import { buildZip, PLAIN_CONTENT_TYPES_XML, MACRO_CONTENT_TYPES_XML } from "./zip-fixture";

describe("verifyCsvStructure", () => {
  it("accepts plain UTF-8 text", () => {
    expect(() => verifyCsvStructure(Buffer.from("name,sku\nRice,SKU1\n", "utf-8"))).not.toThrow();
  });

  it("rejects a ZIP-magic-byte payload (a workbook mislabeled as .csv)", () => {
    const zip = buildZip([{ name: "[Content_Types].xml", content: PLAIN_CONTENT_TYPES_XML }]);
    expect(() => verifyCsvStructure(zip)).toThrow(ImportLimitError);
    try {
      verifyCsvStructure(zip);
    } catch (err) {
      expect((err as ImportLimitError).code).toBe("UNSUPPORTED_FILE_TYPE");
    }
  });

  it("rejects invalid UTF-8 byte sequences", () => {
    const invalid = Buffer.from([0xff, 0xfe, 0x00, 0xd8, 0x00, 0xff]);
    expect(() => verifyCsvStructure(invalid)).toThrow(ImportLimitError);
  });
});

describe("verifyXlsxStructure", () => {
  it("accepts a plain OOXML spreadsheet content-type manifest", () => {
    const zip = buildZip([{ name: "[Content_Types].xml", content: PLAIN_CONTENT_TYPES_XML }]);
    expect(() => verifyXlsxStructure(zip, 25 * 1024 * 1024)).not.toThrow();
  });

  it("rejects a macro-enabled workbook content-type regardless of extension", () => {
    const zip = buildZip([{ name: "[Content_Types].xml", content: MACRO_CONTENT_TYPES_XML }]);
    expect(() => verifyXlsxStructure(zip, 25 * 1024 * 1024)).toThrow(ImportLimitError);
    try {
      verifyXlsxStructure(zip, 25 * 1024 * 1024);
    } catch (err) {
      expect((err as ImportLimitError).code).toBe("ENCRYPTED_OR_MACRO_FILE");
    }
  });

  it("rejects a non-ZIP payload (not a valid central directory)", () => {
    const notAZip = Buffer.from("this is not a zip file at all");
    expect(() => verifyXlsxStructure(notAZip, 25 * 1024 * 1024)).toThrow(ImportLimitError);
  });

  it("rejects a ZIP missing the [Content_Types].xml manifest", () => {
    const zip = buildZip([{ name: "some-other-file.xml", content: "<x/>" }]);
    expect(() => verifyXlsxStructure(zip, 25 * 1024 * 1024)).toThrow(ImportLimitError);
  });

  it("rejects when the declared decompressed size exceeds the limit", () => {
    const bigContent = "x".repeat(2000);
    const zip = buildZip([{ name: "[Content_Types].xml", content: bigContent }]);
    expect(() => verifyXlsxStructure(zip, 1000)).toThrow(ImportLimitError);
    try {
      verifyXlsxStructure(zip, 1000);
    } catch (err) {
      expect((err as ImportLimitError).code).toBe("DECOMPRESSED_TOO_LARGE");
    }
  });
});
