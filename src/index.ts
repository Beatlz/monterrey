require(`module-alias/register`)

import Sequencer from "@sequencer/index"

const sequencer = new Sequencer({
	key: `C`,
	scaleName: `phrygian`,
	steps: 8,
})

console.log(sequencer.chordInversion([`C`,`E`,`G`,`B`], 1))
