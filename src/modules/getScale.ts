require(`module-alias/register`)

import scales from "@resources/scales"
import NoteType from "@/types/NoteType"
import ScaleType from "@/types/ScaleType"
import ScaleNameType from "@/types/ScaleNameType"

const getScale = (note: NoteType, scaleName: ScaleNameType): ScaleType => {
	return scales[`${note}_${scaleName}`]
}

export default getScale
