require(`module-alias/register`)

import NoteType from "@/types/NoteType"
import ScaleType from "@/types/ScaleType"
import notes from "@resources/notes"

const { flat, sharp } = notes

const buildScale = (note: NoteType, template: number[]): ScaleType => {
	note = note.includes(`#`) ? flat[sharp.indexOf(note)] : note
  
	const root = flat.indexOf(note)
	const scale: ScaleType = []

	template.map(step => step + root > 11 ? flat[step - 12] : flat[step])

	return scale
}

export default buildScale
