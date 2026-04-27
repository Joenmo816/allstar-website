const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = process.cwd();
const publicDir = path.join(root, "public");
const backupDir = "C:\\allstar-backups\\webp_backup_" + new Date().toISOString().replace(/[:.]/g, "-");

const imageExts = [".png", ".jpg", ".jpeg"];
const codeExts = [".tsx", ".ts", ".jsx", ".js"];

function walk(dir, exts) {
  let out = [];
  if (!fs.existsSync(dir)) return out;

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);

    if (
      item.isDirectory() &&
      !full.includes("node_modules") &&
      !full.includes(".next") &&
      !full.includes("_backup")
    ) {
      out = out.concat(walk(full, exts));
    }

    if (item.isFile() && exts.includes(path.extname(item.name).toLowerCase())) {
      out.push(full);
    }
  }

  return out;
}

async function convertImages() {
  fs.mkdirSync(backupDir, { recursive: true });

  const images = walk(path.join(publicDir, "images"), imageExts);
  const webpMap = new Map();

  for (const file of images) {
    const relPublic = "/" + path.relative(publicDir, file).replace(/\\/g, "/");
    const parsed = path.parse(file);
    const webpFile = path.join(parsed.dir, parsed.name + ".webp");
    const webpPublic = "/" + path.relative(publicDir, webpFile).replace(/\\/g, "/");

    const backupFile = path.join(backupDir, path.relative(publicDir, file));
    fs.mkdirSync(path.dirname(backupFile), { recursive: true });
    fs.copyFileSync(file, backupFile);

    const meta = await sharp(file).metadata();
    const resizeWidth = meta.width && meta.width > 1600 ? 1600 : meta.width;

    await sharp(file)
      .rotate()
      .resize({ width: resizeWidth, withoutEnlargement: true })
      .webp({ quality: 72, effort: 6 })
      .toFile(webpFile);

    const oldSize = fs.statSync(file).size;
    const newSize = fs.statSync(webpFile).size;

    if (newSize < oldSize) {
      webpMap.set(relPublic, webpPublic);
      console.log(`WEBP ${relPublic}: ${(oldSize / 1048576).toFixed(2)}MB -> ${(newSize / 1048576).toFixed(2)}MB`);
    } else {
      fs.unlinkSync(webpFile);
      console.log(`SKIP ${relPublic}: webp was not smaller`);
    }
  }

  return webpMap;
}

function updateCode(webpMap) {
  const codeFiles = walk(path.join(root, "src"), codeExts);

  for (const file of codeFiles) {
    let c = fs.readFileSync(file, "utf8");
    let original = c;

    for (const [oldPath, newPath] of webpMap.entries()) {
      c = c.split(oldPath).join(newPath);
    }

    if (c !== original) {
      fs.writeFileSync(file, c, "utf8");
      console.log(`UPDATED ${path.relative(root, file)}`);
    }
  }
}

convertImages()
  .then((webpMap) => updateCode(webpMap))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
