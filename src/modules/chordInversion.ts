import ScaleType from "@/types/ScaleType"

const chordInversion = (chord: ScaleType, inversion: number): ScaleType => {
	const invertedChord = [...chord.slice(inversion, chord.length), ...chord.slice(0, inversion)]

	return invertedChord
}

export default chordInversion
