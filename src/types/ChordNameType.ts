require(`module-alias/register`)

import chordTemplates from "@resources/chordTemplates"

type ChordNameType = keyof typeof chordTemplates

export default ChordNameType