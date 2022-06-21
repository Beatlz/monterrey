require(`module-alias/register`)

import NoteType from "@/types/NoteType"
import ScaleType from "@/types/ScaleType"
import notes from "@resources/notes"
import sharpToFlat from "@modules/sharpToFlat"

const { flat } = notes

const buildScale = (note: NoteType, template: number[]): ScaleType => {
	note = sharpToFlat(note)
  
	const { length } = flat
	const root = flat.indexOf(note)
	const scale: ScaleType = template.map(step => {
		if (step > 13) throw new TypeError(`Steps must be between 1 and 13`)

		return step + root > (length - 1) ? flat[step - length + root] : flat[step + root]
	})

	console.log([note, ...scale])
	console.log(flat)

	return [note, ...scale]
}

export default buildScale
