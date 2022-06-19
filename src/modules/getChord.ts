require(`module-alias/register`)

import chords from "@resources/chords"
import NoteType from "@/types/NoteType"
import ScaleType from "@/types/ScaleType"
import ChordNameType from "@/types/ChordNameType"

const getChord = (note: NoteType, chordName: ChordNameType): ScaleType => {
	return chords[`${note}${chordName}`]
}

export default getChord
