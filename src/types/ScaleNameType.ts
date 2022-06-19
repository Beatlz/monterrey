require(`module-alias/register`)

import scaleTemplates from "@resources/scaleTemplates"

type ScaleNameType = keyof typeof scaleTemplates

export default ScaleNameType
