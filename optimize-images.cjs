const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const root = path.join(process.cwd(), "public");
const backupRoot = path.join(process.cwd(), "_image_backup");

const exts = new Set([".jpg", ".jpeg", ".png"]);

function walk(dir) {
  let files = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) files = files.concat(walk(full));
    else if (exts.has(path.extname(item.name).toLowerCase())) files.push(full);
  }
  return files;
}

async function run() {
  fs.mkdirSync(backupRoot, { recursive: true });

  const files = walk(root);

  for (const file of files) {
    const rel = path.relative(root, file);
    const backup = path.join(backupRoot, rel);
    fs.mkdirSync(path.dirname(backup), { recursive: true });

    if (!fs.existsSync(backup)) fs.copyFileSync(file, backup);

    const ext = path.extname(file).toLowerCase();
    const temp = file + ".tmp";

    const image = sharp(file).rotate();
    const meta = await image.metadata();

    const width = meta.width && meta.width > 1600 ? 1600 : meta.width;

    if (ext === ".png") {
      await image
        .resize({ width, withoutEnlargement: true })
        .png({ compressionLevel: 9, quality: 75, palette: true })
        .toFile(temp);
    } else {
      await image
        .resize({ width, withoutEnlargement: true })
        .jpeg({ quality: 72, mozjpeg: true })
        .toFile(temp);
    }

    const oldSize = fs.statSync(file).size;
    const newSize = fs.statSync(temp).size;

    if (newSize < oldSize) {
      fs.renameSync(temp, file);
      console.log(`Optimized ${rel}: ${(oldSize / 1048576).toFixed(2)}MB -> ${(newSize / 1048576).toFixed(2)}MB`);
    } else {
      fs.unlinkSync(temp);
      console.log(`Skipped ${rel}: already smaller`);
    }
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
