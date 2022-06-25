import SequenceType from "@/types/SequenceType"
import NoteType from "@/types/NoteType"
import ScaleNameType from "@/types/ScaleNameType"

interface SequenceOptionsType {
  key: NoteType
	scaleName: ScaleNameType
	steps: number
	tempo?: number
}

export default SequenceOptionsType
