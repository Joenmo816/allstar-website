const fs = require("fs");
const cp = require("child_process");

process.chdir(cp.execSync("git rev-parse --show-toplevel").toString().trim());

const patterns = [
  /^[A-Za-z]:\\[^\r\n]*(\r?\n)?/m,                                    // stray absolute path
  /^\s*\/\/\s*File:\s*.*$/m,                                         // "// File: C:\..."
  /^\s*import\s+\*\s+as\s+entry\s+from\s+["'][^"']*\/src\/app\/[^"']*(?:page|layout|route)\.js["']\s*;?\s*$/m,
  /^\s*import\s+type\s+\{[^}]*\}\s+from\s+["']next\/dist\/lib\/metadata\/types\/metadata-interface\.js["']\s*;?\s*$/m,
  /^\s*type\s+TEntry\s*=\s*typeof\s+import\(\s*["'][^"']*\/src\/app\/[^"']*(?:page|layout|route)\.js["']\s*\)\s*;?\s*$/m,
  /^\s*check\w*Fields<[\s\S]*?>\(\)\s*;?\s*$/m
];

function staged() {
  return cp.execSync("git diff --cached --name-only", { encoding: "utf8" })
    .split(/\r?\n/).filter(Boolean)
    .filter(f => /^(src[\/\\]app).*\.(ts|tsx)$/.test(f));
}

let cleaned = 0;
for (const f of staged()) {
  if (!fs.existsSync(f)) continue;
  let txt = fs.readFileSync(f, "utf8");
  const orig = txt;
  for (const re of patterns) txt = txt.replace(re, "");
  if (txt !== orig) {
    fs.writeFileSync(f, txt, "utf8");
    cp.execSync(`git add ${JSON.stringify(f)}`);
    console.log("sanitized:", f);
    cleaned++;
  }
}
if (cleaned) console.log(`✅ sanitized ${cleaned} file(s)`);
