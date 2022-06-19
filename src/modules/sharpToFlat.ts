require(`module-alias/register`)

import notes from "@resources/notes"
import NoteType from "@/types/NoteType"

const { flat, sharp } = notes

const sharpToFlat = (note: NoteType): NoteType => {
	return note.includes(`#`) ? flat[sharp.indexOf(note)] : note
}

export default sharpToFlat
