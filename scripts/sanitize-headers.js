const fs = require("fs");
const path = require("path");

const exts = new Set([".ts",".tsx",".js",".jsx",".css",".md",".json"]);
const headerRE = /^[A-Za-z]:\\[^\r\n]*(\r?\n)?/;

function stagedFiles() {
  const out = require("child_process").execSync('git diff --cached --name-only', {encoding:"utf8"});
  return out.split(/\r?\n/).filter(Boolean);
}

let cleaned = 0;
for (const f of stagedFiles()) {
  const ext = path.extname(f).toLowerCase();
  if (!exts.has(ext)) continue;
  if (!fs.existsSync(f)) continue;
  let txt = fs.readFileSync(f, "utf8");
  if (headerRE.test(txt)) {
    txt = txt.replace(headerRE, "");
    fs.writeFileSync(f, txt, "utf8");
    require("child_process").execSync(`git add ${JSON.stringify(f)}`);
    cleaned++;
    console.log("sanitized:", f);
  }
}
if (cleaned) console.log(`✅ sanitized ${cleaned} file(s)`);
