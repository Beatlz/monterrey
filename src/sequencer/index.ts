require(`module-alias/register`)

// import getChord from "@modules/getChord"
// import sharpToFlat from "@modules/sharpToFlat"
// import buildScale from "@modules/buildScale"
// import getScale from "@modules/getScale"
// import scaleTemplates from "@resources/scaleTemplates"
// import buildChord from "@modules/buildChord"
// import chordTemplates from "@resources/chordTemplates"
import ScaleType from "@/types/ScaleType"
// import SequenceType from "@/types/SequenceType"
// import NoteType from "@/types/NoteType"
// import ScaleNameType from "@/types/ScaleNameType"
import getScale from "@modules/getScale"
import SequenceOptionsType from "@/types/SequenceOptionsType"

class Sequencer {
	sequenceOptions: SequenceOptionsType

	sequence = [[false]]

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

		this.sequence = sequence
	}

	changeVoicing(): ScaleType {
		return [`A`]
	}
}

export default Sequencer


