require(`module-alias/register`)

import buildScale from "@modules/buildScale"
import buildChord from "@modules/buildChord"
import scaleTemplates from "@resources/scaleTemplates"
import chordTemplates from "@resources/chordTemplates"

test(`Build scales given a template and a root note`, () => {
	const A_harmonicMinor = scaleTemplates[`harmonicMinor`]
  
	expect(buildScale(`A`, A_harmonicMinor)).toBe([`A`, `B`, `C`, `D`, `E`, `F`, `Ab`])
	expect(buildScale(`C`, [2, 4, 5, 7, 9, 11])).toBe([`C`, `D`, `E`, `F`, `G`, `A`, `B`])
})

test(`Build chords given a template and a root note`, () => {
	const Abmaj9 = chordTemplates[`maj9`]
  
	expect(buildChord(`G#`, Abmaj9)).toBe([`Ab`, `Bb`, `C`, `Eb`, `G`])
	expect(buildChord(`C`, [4, 7])).toBe([`C`, `E`, `G`])
})
