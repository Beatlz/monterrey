require(`module-alias/register`)

import getChord from "@modules/getChord"
import chordInversion from "@modules/chordInversion"

test(`Test to change a chord's voicing`, () => {
	const chord = getChord(`C`, `maj7`)

	expect(chordInversion(chord, 1)).toStrictEqual([`E`, `G`, `B`, `C`])
	expect(chordInversion(chord, 2)).toStrictEqual([`G`, `B`, `C`, `E`])
	expect(chordInversion(chord, 3)).toStrictEqual([`B`, `C`, `E`, `G`])
})