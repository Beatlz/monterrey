import ScaleType from "@/types/ScaleType"

const chordInversion = (chord: ScaleType, inversion: number): ScaleType => {
	if (inversion > chord.length - 1) {
		throw new Error(`Inversion has to be less than ${chord.length - 1} (chord has ${chord.length} notes)`)
	}

	const invertedChord = [...chord.slice(inversion, chord.length), ...chord.slice(0, inversion)]

	return invertedChord
}

export default chordInversion
