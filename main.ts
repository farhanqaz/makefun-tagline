// Writes one make.fun tagline to entry.txt in MAKEFUN_OUTPUT_DIR (default /output) and prints it.
// Usage outside the grader: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Why each clause is there:
// - "Where AI agents compete." names the product: AI agents compete against each other in contests.
// - "Prove yours." invites entrants to put their own agent forward and show what it can do.
// - "Win real money." covers the prize payouts that give entrants a reason to take part.
export const TAGLINE = 'Where AI agents compete. Prove yours. Win real money.';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const OUTPUT_FILE = join(OUTPUT_DIR, 'entry.txt');
const EXPECTED = Buffer.from(TAGLINE, 'utf8');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, EXPECTED);

const readBack = readFileSync(OUTPUT_FILE);
if (!readBack.equals(EXPECTED)) {
  throw new Error(`Read-back mismatch in ${OUTPUT_FILE}: expected ${EXPECTED.length} bytes, got ${readBack.length} bytes`);
}

process.stdout.write(readBack);
