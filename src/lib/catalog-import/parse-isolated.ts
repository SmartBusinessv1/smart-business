// SB-P-1.11-GC-1 — SEC-IMP-3 correction: the 10-second parser limit
// becomes a real, enforced execution budget instead of a post-hoc
// elapsed-time check. Parsing runs on a dedicated node:worker_threads
// Worker; if it has not produced a result within `timeoutMs`, the worker
// is terminated outright (`worker.terminate()`), which stops its
// execution immediately rather than letting it keep consuming CPU in the
// background after the caller has already moved on.
//
// Path resolution is CWD-relative (`process.cwd()` + the source path),
// verified correct for this mission's actual verification target (a real
// `vite dev` server against the dedicated test Supabase project -- see
// communication/live/report1.86.md §9 for the disclosed scope of this
// mechanism, including its known Cloudflare Workers incompatibility,
// which is out of scope for this test-project-only mission to resolve).
import { Worker } from "node:worker_threads";
import path from "node:path";
import { ImportLimitError, type ImportLimitErrorCode } from "./limits.ts";
import type { ParseOutcome } from "./types";
import type { ParseWorkerRequest, ParseWorkerResponse } from "./parse-worker";

const WORKER_PATH = path.resolve(process.cwd(), "src/lib/catalog-import/parse-worker.ts");

export async function parseInIsolatedWorker(
  buffer: Buffer,
  fileKind: "csv" | "xlsx",
  timeoutMs: number,
): Promise<ParseOutcome & { additionalWorksheetsIgnored?: boolean }> {
  return new Promise((resolve, reject) => {
    const arrayBuffer = buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength,
    ) as ArrayBuffer;
    const request: ParseWorkerRequest = { fileKind, buffer: arrayBuffer };

    let worker: Worker;
    try {
      worker = new Worker(WORKER_PATH, { workerData: request, transferList: [arrayBuffer] });
    } catch {
      reject(new ImportLimitError("MALFORMED_FILE", "This file couldn't be processed."));
      return;
    }

    let settled = false;
    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      fn();
      void worker.terminate();
    };

    const timer = setTimeout(() => {
      finish(() =>
        reject(new ImportLimitError("PARSE_TIMEOUT", "This file took too long to process.")),
      );
    }, timeoutMs);

    worker.once("message", (msg: ParseWorkerResponse) => {
      finish(() => {
        if (msg.ok) resolve(msg.outcome);
        else reject(new ImportLimitError(msg.code as ImportLimitErrorCode, msg.message));
      });
    });

    worker.once("error", () => {
      finish(() =>
        reject(new ImportLimitError("MALFORMED_FILE", "This file couldn't be processed.")),
      );
    });

    worker.once("exit", (code) => {
      if (code !== 0) {
        finish(() =>
          reject(new ImportLimitError("MALFORMED_FILE", "This file couldn't be processed.")),
        );
      }
    });
  });
}
