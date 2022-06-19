require(`module-alias/register`)

import ScaleType from "@/types/ScaleType"

const flat: ScaleType = [ `A`, `Bb`, `B`, `C`, `Db`, `D`, `Eb`, `E`, `F`, `Gb`, `G`, `Ab` ]
const sharp: ScaleType = [ `A`, `A#`, `B`, `C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#` ]

const notes = {
	flat,
	sharp,
}

export default notes
