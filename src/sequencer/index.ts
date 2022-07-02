require(`module-alias/register`)

import * as Tone from 'tone'
// import getChord from "@modules/getChord"
// import sharpToFlat from "@modules/sharpToFlat"
// import buildScale from "@modules/buildScale"
// import getScale from "@modules/getScale"
// import scaleTemplates from "@resources/scaleTemplates"
// import buildChord from "@modules/buildChord"
// import chordTemplates from "@resources/chordTemplates"
// import ScaleType from "@/types/ScaleType"
import SequenceType from "@/types/SequenceType"
// import NoteType from "@/types/NoteType"
// import ScaleNameType from "@/types/ScaleNameType"
import getScale from "@modules/getScale"
import SequenceOptionsType from "@/types/SequenceOptionsType"
import chordInversion from "@modules/chordInversion"
import ScaleType from "@/types/ScaleType"

class Sequencer {
	sequenceOptions: SequenceOptionsType

	sequenceGrid = [[false]]

	constructor(sequenceOptions: SequenceOptionsType) {
		this.sequenceOptions = sequenceOptions
		this.newSequence()
	}

	newSequence(): void {
		const { key, scaleName, steps } = this.sequenceOptions
		const scale = getScale(key, scaleName)
		const x = steps
		const y = scale.length * 3
		const sequence = new Array(x).fill(false).map(() => new Array(y).fill(false))

		this.sequenceGrid = sequence
	}

	playBar(): void {
		const synth = new Tone.Synth().toDestination()
		const now = Tone.now()
		// trigger the attack immediately
		synth.triggerAttack(`C4`, now)
		// wait one second before triggering the release
		synth.triggerRelease(now + 1)
	}

	// barToNote(bar: SequenceType): ScaleType {
	// 	const { key, scaleName } = this.sequenceOptions
	// 	const scale = getScale(key, scaleName)
	// 	const 
	// 	return []
	// }

	chordInversion(chord: ScaleType, inversion: number): ScaleType {
		return chordInversion(chord, inversion)
	}
}

export default Sequencer
