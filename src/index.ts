require(`module-alias/register`)

import getChord from "@modules/getChord"
import sharpToFlat from "@modules/sharpToFlat"
import buildScale from "@modules/buildScale"
// import getScale from "@modules/getScale"
import scaleTemplates from "@resources/scaleTemplates"

const chord = getChord(`C`, `sus4`)
const flat = sharpToFlat(`A#`) 
const scale = buildScale(`A`, scaleTemplates[`harmonicMinor`])

console.log(chord)
console.log(flat)
console.log(scale)
