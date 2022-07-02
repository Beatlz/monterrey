require(`module-alias/register`)

import Sequencer from "@sequencer/index"
import SequenceOptionsType from "@/types/SequenceOptionsType"
import getScale from "@modules/getScale"

test(`Test the `, () => {
	const sequenceOptions: SequenceOptionsType = {
		key: `A`,
		scaleName: `harmonicMin`,
		steps: 16,
	}
	const sequencer = new Sequencer(sequenceOptions)
	const scale = getScale(sequenceOptions.key, sequenceOptions.scaleName)

	expect(sequencer.sequenceGrid.length).toBe(sequenceOptions.steps)
	expect(sequencer.sequenceGrid[0].length).toBe(scale.length * 3)
})
