require(`module-alias/register`)

import ScaleNameType from "@/types/ScaleNameType"
import NoteType from "./NoteType"

interface InitOptionsType {
  key: NoteType
  steps: number
  scaleName: ScaleNameType
}

export default InitOptionsType
