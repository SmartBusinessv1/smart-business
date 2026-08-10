// SB-P-1.11-GC-1 — SEC-IMP-3 worker-thread parse entry point.
//
// Runs entirely off the main server execution context: parsing happens on
// a real, separate OS thread (Node worker_threads), so a pathological
// input cannot block the request-handling event loop even before the
// caller's wall-clock budget expires, and `worker.terminate()` (see
// parse-isolated.ts) gives genuine preemptive cancellation -- the worker
// is killed outright, not merely abandoned while it keeps consuming CPU.
//
// Reuses the exact same parseCsv/parseXlsx logic as every other caller
// (including the unit tests) -- no parallel/duplicated parsing
// implementation. Only allowlisted, sanitized fields cross back over
// postMessage; a caught exception's raw object is never forwarded (SEC-IMP-7).
import { parentPort, workerData } from "node:worker_threads";
// Explicit .ts extensions below (unlike the rest of this codebase, which
// relies on Vite's bundler-mode resolution): this file is loaded directly
// by node:worker_threads, bypassing Vite entirely, so it needs Node's own
// native module resolution -- which, unlike Vite, requires an explicit
// extension on every relative specifier in this file's import chain.
import { parseCsv, parseXlsx } from "./parse.ts";
import { ImportLimitError } from "./limits.ts";
import type { ParseOutcome } from "./types";

export type ParseWorkerRequest = { fileKind: "csv" | "xlsx"; buffer: ArrayBuffer };
export type ParseWorkerResponse =
  | { ok: true; outcome: ParseOutcome & { additionalWorksheetsIgnored?: boolean } }
  | { ok: false; code: string; message: string };

async function run() {
  const { fileKind, buffer } = workerData as ParseWorkerRequest;
  try {
    const buf = Buffer.from(buffer);
    const outcome = fileKind === "csv" ? await parseCsv(buf) : await parseXlsx(buf);
    const response: ParseWorkerResponse = { ok: true, outcome };
    parentPort?.postMessage(response);
  } catch (err) {
    const response: ParseWorkerResponse =
      err instanceof ImportLimitError
        ? { ok: false, code: err.code, message: err.message }
        : { ok: false, code: "MALFORMED_FILE", message: "This file couldn't be processed." };
    parentPort?.postMessage(response);
  }
}

void run();
