require(`module-alias/register`)

import buildScale from "@modules/buildScale"
import buildChord from "@modules/buildChord"
import scaleTemplates from "@resources/scaleTemplates"
import chordTemplates from "@resources/chordTemplates"

test(`Build scales given a root note and a template`, () => {
	const A_harmonicMinor = scaleTemplates[`harmonicMinor`]
	const scale = buildScale(`A`, A_harmonicMinor)
  
	expect(scale).toStrictEqual([`A`, `B`, `C`, `D`, `E`, `F`, `Ab`])
})

test(`Build chords given a root note and a template`, () => {
	const Abmaj9 = chordTemplates[`maj9`]
	const chord = buildChord(`Ab`, Abmaj9)
  
	expect(chord).toStrictEqual([`Ab`, `Bb`, `C`, `Eb`, `G`])
})
