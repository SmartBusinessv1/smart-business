// Minimal ZIP writer for test fixtures only -- deliberately independent of
// exceljs/papaparse so it can construct structurally-valid-but-semantically-
// hostile workbooks (macro content-type, missing manifest) that a real
// spreadsheet library would never write, exercising src/lib/catalog-import/
// content-type.ts's own from-scratch ZIP central-directory reader against a
// from-scratch writer, not just against "whatever exceljs happens to emit."
import { deflateRawSync } from "node:zlib";

export interface ZipFixtureEntry {
  name: string;
  content: string;
  /**
   * When set, this value is written into the local/central header
   * uncompressedSize fields INSTEAD of the real `content` length -- while
   * the actual stored compressed bytes still decompress to the real, full
   * `content`. This builds a decompression-bomb fixture: declared
   * metadata understates true expansion, exactly the attack SEC-IMP-2's
   * containment must survive without trusting declared sizes at all.
   */
  declaredUncompressedSize?: number;
}

export function buildZip(entries: ZipFixtureEntry[]): Buffer {
  const localParts: Buffer[] = [];
  const centralParts: Buffer[] = [];
  let offset = 0;

  for (const entry of entries) {
    const nameBuf = Buffer.from(entry.name, "utf-8");
    const dataBuf = Buffer.from(entry.content, "utf-8");
    const compressed = deflateRawSync(dataBuf);
    const declaredSize = entry.declaredUncompressedSize ?? dataBuf.length;

    const localHeader = Buffer.alloc(30);
    localHeader.writeUInt32LE(0x04034b50, 0);
    localHeader.writeUInt16LE(20, 4); // version needed
    localHeader.writeUInt16LE(0, 6); // flags
    localHeader.writeUInt16LE(8, 8); // compression: deflate
    localHeader.writeUInt16LE(0, 10); // mod time
    localHeader.writeUInt16LE(0, 12); // mod date
    localHeader.writeUInt32LE(0, 14); // crc32 (unchecked by our reader)
    localHeader.writeUInt32LE(compressed.length, 18);
    localHeader.writeUInt32LE(declaredSize, 22);
    localHeader.writeUInt16LE(nameBuf.length, 26);
    localHeader.writeUInt16LE(0, 28); // extra length

    const localEntry = Buffer.concat([localHeader, nameBuf, compressed]);
    localParts.push(localEntry);

    const centralHeader = Buffer.alloc(46);
    centralHeader.writeUInt32LE(0x02014b50, 0);
    centralHeader.writeUInt16LE(20, 4); // version made by
    centralHeader.writeUInt16LE(20, 6); // version needed
    centralHeader.writeUInt16LE(0, 8); // flags
    centralHeader.writeUInt16LE(8, 10); // compression
    centralHeader.writeUInt16LE(0, 12); // mod time
    centralHeader.writeUInt16LE(0, 14); // mod date
    centralHeader.writeUInt32LE(0, 16); // crc32
    centralHeader.writeUInt32LE(compressed.length, 20);
    centralHeader.writeUInt32LE(declaredSize, 24);
    centralHeader.writeUInt16LE(nameBuf.length, 28);
    centralHeader.writeUInt16LE(0, 30); // extra length
    centralHeader.writeUInt16LE(0, 32); // comment length
    centralHeader.writeUInt16LE(0, 34); // disk number
    centralHeader.writeUInt16LE(0, 36); // internal attrs
    centralHeader.writeUInt32LE(0, 38); // external attrs
    centralHeader.writeUInt32LE(offset, 42); // local header offset

    centralParts.push(Buffer.concat([centralHeader, nameBuf]));
    offset += localEntry.length;
  }

  const localData = Buffer.concat(localParts);
  const centralData = Buffer.concat(centralParts);

  const eocd = Buffer.alloc(22);
  eocd.writeUInt32LE(0x06054b50, 0);
  eocd.writeUInt16LE(0, 4);
  eocd.writeUInt16LE(0, 6);
  eocd.writeUInt16LE(entries.length, 8);
  eocd.writeUInt16LE(entries.length, 10);
  eocd.writeUInt32LE(centralData.length, 12);
  eocd.writeUInt32LE(localData.length, 16);
  eocd.writeUInt16LE(0, 20);

  return Buffer.concat([localData, centralData, eocd]);
}

export const PLAIN_CONTENT_TYPES_XML =
  '<?xml version="1.0"?><Types><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/></Types>';

export const MACRO_CONTENT_TYPES_XML =
  '<?xml version="1.0"?><Types><Override PartName="/xl/workbook.xml" ContentType="application/vnd.ms-excel.sheet.macroEnabled.main+xml"/></Types>';
