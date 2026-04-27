const pests = [
"acrobat-ant",
"american-cockroach",
"american-house-spider",
"argentine-ant",
"asian-beetle",
"assassin-bug",
"bald-faced-hornet",
"barn-spider",
"bat-bug",
"bed-bug",
"black-widow",
"blue-mud-dauber",
"boxelder-bug",
"brown-recluse",
"carpenter-ant",
"carpenter-bee",
"carpet-beetle",
"cave-cricket",
"cellar-spider",
"cicada",
"cicada-killer",
"clover-mite",
"deer-mouse",
"earwig",
"flea",
"german-cockroach",
"house-mouse",
"norway-rat",
"roof-rat",
"subterranean-termite",
"tick",
"wolf-spider",
"yellowjacket",
"velvet-ant",
"walking-stick",
"yellow-sac-spider"
]

pests.forEach(pest => {

  const name = pest.replace(/-/g, " ")

  const prompt = `Ultra realistic macro photograph of a ${name}, scientific entomology field guide style, single isolated subject, natural lighting, neutral background, sharp focus`

  console.log(pest + ".jpg")
  console.log(prompt)
  console.log("----------------------")

})

