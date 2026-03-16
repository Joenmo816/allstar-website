import fs from 'fs'

const pestFile = fs.readFileSync('./src/lib/pests.ts','utf8')

const slugMatches = [...pestFile.matchAll(/slug:\s*"(.*?)"/g)]
const slugs = slugMatches.map(m => m[1])

const imageFiles = fs.readdirSync('./public/images/pests')
  .filter(f => f.endsWith('.jpg'))
  .map(f => f.replace('.jpg',''))

const missingImages = slugs.filter(s => !imageFiles.includes(s))
const unusedImages = imageFiles.filter(i => !slugs.includes(i))

console.log("---- Missing Images ----")
missingImages.forEach(i => console.log(i + ".jpg"))

console.log("")
console.log("---- Unused Images ----")
unusedImages.forEach(i => console.log(i + ".jpg"))

console.log("")
console.log("Total pests:", slugs.length)
console.log("Total images:", imageFiles.length)
