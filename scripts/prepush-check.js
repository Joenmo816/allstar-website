const fs = require("fs");
const path = require("path");

const root = process.cwd();
const exts = new Set([".ts", ".tsx", ".js", ".jsx", ".css", ".md", ".json"]);
const forbidden = [/C:\\\\Users\\\\kcwlf/i, /C:\\\\Windows\\\\system32/i];

function skip(p){
  return p.includes(path.sep+"node_modules"+path.sep) ||
         p.includes(path.sep+".git"+path.sep) ||
         p.includes(path.sep+".next"+path.sep) ||
         p.includes(path.sep+"dist"+path.sep);
}
function* walk(dir){
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    const full = path.join(dir, ent.name);
    if(skip(full)) continue;
    if(ent.isDirectory()) yield* walk(full);
    else if(exts.has(path.extname(full))) yield full;
  }
}

let bad = [];
for(const file of walk(root)){
  try{
    const text = fs.readFileSync(file,"utf8");
    const first = (text.split(/\r?\n/)[0]||"").trim();
    if(/^[A-Za-z]:\\/.test(first) && !first.startsWith("//")){
      bad.push({file, line:1, match:first}); continue;
    }
    for(const re of forbidden){
      if(re.test(text)){
        const lines = text.split(/\r?\n/);
        const idx = lines.findIndex(l=>re.test(l));
        bad.push({file, line: idx>=0? idx+1 : 0, match: (idx>=0? lines[idx]:"(match)")});
      }
    }
  }catch{}
}

if(bad.length){
  console.error("\n❌ Pre-push check failed. Remove these stray paths before pushing:\n");
  for(const b of bad){
    console.error("  " + path.relative(root,b.file) + ":" + b.line + "  ->  " + b.match);
  }
  console.error("\nTip: Select-String -Path .\\src\\**\\*.* -Pattern 'C:\\\\Users\\\\kcwlf|C:\\\\Windows\\\\system32' -AllMatches\n");
  process.exit(1);
}

console.log("✅ Pre-push check passed.");