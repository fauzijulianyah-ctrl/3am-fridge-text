// fridge-text: writes one 3am fridge text to /output/entry.txt.
// Deterministic: no network, no randomness, no clock reads.
// The text is exactly 127 characters, inside the gate of 1 to 140.
//
// Voice: a smart fridge that has watched every midnight snack and finally
// speaks — judgmental, shameless, and keeping receipts.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "It's 3am. I know about the midnight snack. I know about the second midnight snack. I'm a fridge, not a priest. I keep receipts.";

function main(): void {
  // Honour the harness output dir when set, else the standard /output.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
}

main();
