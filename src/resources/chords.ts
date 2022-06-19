require(`module-alias/register`)

import ScaleType from "@/types/ScaleType"

const chords: { [key: string]: ScaleType } = {
	A2: [ `A`, `B`, `Db`, `E` ],
	A5: [ `A`, `E` ],
	A6: [ `A`, `Db`, `E`, `Gb` ],
	A7: [ `A`, `Db`, `E`, `G` ],
	A9: [ `A`, `B`, `Db`, `E`, `G` ],
	A11: [ `A`, `B`, `Db`, `D`, `E`, `G` ],
	A13: [ `A`, `B`, `Db`, `D`, `E`, `Gb`, `G` ],
	Amaj: [ `A`, `Db`, `E` ],
	Am: [ `A`, `C`, `E` ],
	Am6: [ `A`, `C`, `E`, `Gb` ],
	Amaj7: [ `A`, `Db`, `E`, `Ab` ],
	Am7: [ `A`, `C`, `E`, `G` ],
	Am7b5: [ `A`, `C`, `Eb`, `G` ],
	Asus: [ `A`, `B`, `E` ],
	Asus4: [ `A`, `D`, `E` ],
	Amaj9: [ `A`, `B`, `Db`, `E`, `Ab` ],
	Am9: [ `A`, `B`, `C`, `E`, `G` ],
	Adim: [ `A`, `C`, `Eb` ],
	Aaug: [ `A`, `Db`, `F` ],
	Bb2: [ `Bb`, `C`, `D`, `F` ],
	Bb5: [ `Bb`, `F` ],
	Bb6: [ `Bb`, `D`, `F`, `G` ],
	Bb7: [ `Bb`, `D`, `F`, `Ab` ],
	Bb9: [ `Bb`, `C`, `D`, `F`, `Ab` ],
	Bb11: [ `Bb`, `C`, `D`, `Eb`, `F`, `Ab` ],
	Bb13: [ `Bb`, `C`, `D`, `Eb`, `F`, `G`, `Ab` ],
	Bbmaj: [ `Bb`, `D`, `F` ],
	Bbm: [ `Bb`, `Db`, `F` ],
	Bbm6: [ `Bb`, `Db`, `F`, `G` ],
	Bbmaj7: [ `Bb`, `D`, `F`, `A` ],
	Bbm7: [ `Bb`, `Db`, `F`, `Ab` ],
	Bbm7b5: [ `Bb`, `Db`, `E`, `Ab` ],
	Bbsus: [ `Bb`, `C`, `F` ],
	Bbsus4: [ `Bb`, `Eb`, `F` ],
	Bbmaj9: [ `Bb`, `C`, `D`, `F`, `A` ],
	Bbm9: [ `Bb`, `C`, `Db`, `F`, `Ab` ],
	Bbdim: [ `Bb`, `Db`, `E` ],
	Bbaug: [ `Bb`, `D`, `Gb` ],
	B2: [ `B`, `Db`, `Eb`, `Gb` ],
	B5: [ `B`, `Gb` ],
	B6: [ `B`, `Eb`, `Gb`, `Ab` ],
	B7: [ `B`, `Eb`, `Gb`, `A` ],
	B9: [ `B`, `Db`, `Eb`, `Gb`, `A` ],
	B11: [ `B`, `Db`, `Eb`, `E`, `Gb`, `A` ],
	B13: [ `B`, `Db`, `Eb`, `E`, `Gb`, `Ab`, `A` ],
	Bmaj: [ `B`, `Eb`, `Gb` ],
	Bm: [ `B`, `D`, `Gb` ],
	Bm6: [ `B`, `D`, `Gb`, `Ab` ],
	Bmaj7: [ `B`, `Eb`, `Gb`, `Bb` ],
	Bm7: [ `B`, `D`, `Gb`, `A` ],
	Bm7b5: [ `B`, `D`, `F`, `A` ],
	Bsus: [ `B`, `Db`, `Gb` ],
	Bsus4: [ `B`, `E`, `Gb` ],
	Bmaj9: [ `B`, `Db`, `Eb`, `Gb`, `Bb` ],
	Bm9: [ `B`, `Db`, `D`, `Gb`, `A` ],
	Bdim: [ `B`, `D`, `F` ],
	Baug: [ `B`, `Eb`, `G` ],
	C2: [ `C`, `D`, `E`, `G` ],
	C5: [ `C`, `G` ],
	C6: [ `C`, `E`, `G`, `A` ],
	C7: [ `C`, `E`, `G`, `Bb` ],
	C9: [ `C`, `D`, `E`, `G`, `Bb` ],
	C11: [ `C`, `D`, `E`, `F`, `G`, `Bb` ],
	C13: [ `C`, `D`, `E`, `F`, `G`, `A`, `Bb` ],
	Cmaj: [ `C`, `E`, `G` ],
	Cm: [ `C`, `Eb`, `G` ],
	Cm6: [ `C`, `Eb`, `G`, `A` ],
	Cmaj7: [ `C`, `E`, `G`, `B` ],
	Cm7: [ `C`, `Eb`, `G`, `Bb` ],
	Cm7b5: [ `C`, `Eb`, `Gb`, `Bb` ],
	Csus: [ `C`, `D`, `G` ],
	Csus4: [ `C`, `F`, `G` ],
	Cmaj9: [ `C`, `D`, `E`, `G`, `B` ],
	Cm9: [ `C`, `D`, `Eb`, `G`, `Bb` ],
	Cdim: [ `C`, `Eb`, `Gb` ],
	Caug: [ `C`, `E`, `Ab` ],
	Db2: [ `Db`, `Eb`, `F`, `Ab` ],
	Db5: [ `Db`, `Ab` ],
	Db6: [ `Db`, `F`, `Ab`, `Bb` ],
	Db7: [ `Db`, `F`, `Ab`, `B` ],
	Db9: [ `Db`, `Eb`, `F`, `Ab`, `B` ],
	Db11: [ `Db`, `Eb`, `F`, `Gb`, `Ab`, `B` ],
	Db13: [ `Db`, `Eb`, `F`, `Gb`, `Ab`, `Bb`, `B` ],
	Dbmaj: [ `Db`, `F`, `Ab` ],
	Dbm: [ `Db`, `E`, `Ab` ],
	Dbm6: [ `Db`, `E`, `Ab`, `Bb` ],
	Dbmaj7: [ `Db`, `F`, `Ab`, `C` ],
	Dbm7: [ `Db`, `E`, `Ab`, `B` ],
	Dbm7b5: [ `Db`, `E`, `G`, `B` ],
	Dbsus: [ `Db`, `Eb`, `Ab` ],
	Dbsus4: [ `Db`, `Gb`, `Ab` ],
	Dbmaj9: [ `Db`, `Eb`, `F`, `Ab`, `C` ],
	Dbm9: [ `Db`, `Eb`, `E`, `Ab`, `B` ],
	Dbdim: [ `Db`, `E`, `G` ],
	Dbaug: [ `Db`, `F`, `A` ],
	D2: [ `D`, `E`, `Gb`, `A` ],
	D5: [ `D`, `A` ],
	D6: [ `D`, `Gb`, `A`, `B` ],
	D7: [ `D`, `Gb`, `A`, `C` ],
	D9: [ `D`, `E`, `Gb`, `A`, `C` ],
	D11: [ `D`, `E`, `Gb`, `G`, `A`, `C` ],
	D13: [ `D`, `E`, `Gb`, `G`, `A`, `B`, `C` ],
	Dmaj: [ `D`, `Gb`, `A` ],
	Dm: [ `D`, `F`, `A` ],
	Dm6: [ `D`, `F`, `A`, `B` ],
	Dmaj7: [ `D`, `Gb`, `A`, `Db` ],
	Dm7: [ `D`, `F`, `A`, `C` ],
	Dm7b5: [ `D`, `F`, `Ab`, `C` ],
	Dsus: [ `D`, `E`, `A` ],
	Dsus4: [ `D`, `G`, `A` ],
	Dmaj9: [ `D`, `E`, `Gb`, `A`, `Db` ],
	Dm9: [ `D`, `E`, `F`, `A`, `C` ],
	Ddim: [ `D`, `F`, `Ab` ],
	Daug: [ `D`, `Gb`, `Bb` ],
	Eb2: [ `Eb`, `F`, `G`, `Bb` ],
	Eb5: [ `Eb`, `Bb` ],
	Eb6: [ `Eb`, `G`, `Bb`, `C` ],
	Eb7: [ `Eb`, `G`, `Bb`, `Db` ],
	Eb9: [ `Eb`, `F`, `G`, `Bb`, `Db` ],
	Eb11: [ `Eb`, `F`, `G`, `Ab`, `Bb`, `Db` ],
	Eb13: [ `Eb`, `F`, `G`, `Ab`, `Bb`, `C`, `Db` ],
	Ebmaj: [ `Eb`, `G`, `Bb` ],
	Ebm: [ `Eb`, `Gb`, `Bb` ],
	Ebm6: [ `Eb`, `Gb`, `Bb`, `C` ],
	Ebmaj7: [ `Eb`, `G`, `Bb`, `D` ],
	Ebm7: [ `Eb`, `Gb`, `Bb`, `Db` ],
	Ebm7b5: [ `Eb`, `Gb`, `A`, `Db` ],
	Ebsus: [ `Eb`, `F`, `Bb` ],
	Ebsus4: [ `Eb`, `Ab`, `Bb` ],
	Ebmaj9: [ `Eb`, `F`, `G`, `Bb`, `D` ],
	Ebm9: [ `Eb`, `F`, `Gb`, `Bb`, `Db` ],
	Ebdim: [ `Eb`, `Gb`, `A` ],
	Ebaug: [ `Eb`, `G`, `B` ],
	E2: [ `E`, `Gb`, `Ab`, `B` ],
	E5: [ `E`, `B` ],
	E6: [ `E`, `Ab`, `B`, `Db` ],
	E7: [ `E`, `Ab`, `B`, `D` ],
	E9: [ `E`, `Gb`, `Ab`, `B`, `D` ],
	E11: [ `E`, `Gb`, `Ab`, `A`, `B`, `D` ],
	E13: [ `E`, `Gb`, `Ab`, `A`, `B`, `Db`, `D` ],
	Emaj: [ `E`, `Ab`, `B` ],
	Em: [ `E`, `G`, `B` ],
	Em6: [ `E`, `G`, `B`, `Db` ],
	Emaj7: [ `E`, `Ab`, `B`, `Eb` ],
	Em7: [ `E`, `G`, `B`, `D` ],
	Em7b5: [ `E`, `G`, `Bb`, `D` ],
	Esus: [ `E`, `Gb`, `B` ],
	Esus4: [ `E`, `A`, `B` ],
	Emaj9: [ `E`, `Gb`, `Ab`, `B`, `Eb` ],
	Em9: [ `E`, `Gb`, `G`, `B`, `D` ],
	Edim: [ `E`, `G`, `Bb` ],
	Eaug: [ `E`, `Ab`, `C` ],
	F2: [ `F`, `G`, `A`, `C` ],
	F5: [ `F`, `C` ],
	F6: [ `F`, `A`, `C`, `D` ],
	F7: [ `F`, `A`, `C`, `Eb` ],
	F9: [ `F`, `G`, `A`, `C`, `Eb` ],
	F11: [ `F`, `G`, `A`, `Bb`, `C`, `Eb` ],
	F13: [ `F`, `G`, `A`, `Bb`, `C`, `D`, `Eb` ],
	Fmaj: [ `F`, `A`, `C` ],
	Fm: [ `F`, `Ab`, `C` ],
	Fm6: [ `F`, `Ab`, `C`, `D` ],
	Fmaj7: [ `F`, `A`, `C`, `E` ],
	Fm7: [ `F`, `Ab`, `C`, `Eb` ],
	Fm7b5: [ `F`, `Ab`, `B`, `Eb` ],
	Fsus: [ `F`, `G`, `C` ],
	Fsus4: [ `F`, `Bb`, `C` ],
	Fmaj9: [ `F`, `G`, `A`, `C`, `E` ],
	Fm9: [ `F`, `G`, `Ab`, `C`, `Eb` ],
	Fdim: [ `F`, `Ab`, `B` ],
	Faug: [ `F`, `A`, `Db` ],
	Gb2: [ `Gb`, `Ab`, `Bb`, `Db` ],
	Gb5: [ `Gb`, `Db` ],
	Gb6: [ `Gb`, `Bb`, `Db`, `Eb` ],
	Gb7: [ `Gb`, `Bb`, `Db`, `E` ],
	Gb9: [ `Gb`, `Ab`, `Bb`, `Db`, `E` ],
	Gb11: [ `Gb`, `Ab`, `Bb`, `B`, `Db`, `E` ],
	Gb13: [ `Gb`, `Ab`, `Bb`, `B`, `Db`, `Eb`, `E` ],
	Gbmaj: [ `Gb`, `Bb`, `Db` ],
	Gbm: [ `Gb`, `A`, `Db` ],
	Gbm6: [ `Gb`, `A`, `Db`, `Eb` ],
	Gbmaj7: [ `Gb`, `Bb`, `Db`, `F` ],
	Gbm7: [ `Gb`, `A`, `Db`, `E` ],
	Gbm7b5: [ `Gb`, `A`, `C`, `E` ],
	Gbsus: [ `Gb`, `Ab`, `Db` ],
	Gbsus4: [ `Gb`, `B`, `Db` ],
	Gbmaj9: [ `Gb`, `Ab`, `Bb`, `Db`, `F` ],
	Gbm9: [ `Gb`, `Ab`, `A`, `Db`, `E` ],
	Gbdim: [ `Gb`, `A`, `C` ],
	Gbaug: [ `Gb`, `Bb`, `D` ],
	G2: [ `G`, `A`, `B`, `D` ],
	G5: [ `G`, `D` ],
	G6: [ `G`, `B`, `D`, `E` ],
	G7: [ `G`, `B`, `D`, `F` ],
	G9: [ `G`, `A`, `B`, `D`, `F` ],
	G11: [ `G`, `A`, `B`, `C`, `D`, `F` ],
	G13: [ `G`, `A`, `B`, `C`, `D`, `E`, `F` ],
	Gmaj: [ `G`, `B`, `D` ],
	Gm: [ `G`, `Bb`, `D` ],
	Gm6: [ `G`, `Bb`, `D`, `E` ],
	Gmaj7: [ `G`, `B`, `D`, `Gb` ],
	Gm7: [ `G`, `Bb`, `D`, `F` ],
	Gm7b5: [ `G`, `Bb`, `Db`, `F` ],
	Gsus: [ `G`, `A`, `D` ],
	Gsus4: [ `G`, `C`, `D` ],
	Gmaj9: [ `G`, `A`, `B`, `D`, `Gb` ],
	Gm9: [ `G`, `A`, `Bb`, `D`, `F` ],
	Gdim: [ `G`, `Bb`, `Db` ],
	Gaug: [ `G`, `B`, `Eb` ],
	Ab2: [ `Ab`, `Bb`, `C`, `Eb` ],
	Ab5: [ `Ab`, `Eb` ],
	Ab6: [ `Ab`, `C`, `Eb`, `F` ],
	Ab7: [ `Ab`, `C`, `Eb`, `Gb` ],
	Ab9: [ `Ab`, `Bb`, `C`, `Eb`, `Gb` ],
	Ab11: [ `Ab`, `Bb`, `C`, `Db`, `Eb`, `Gb` ],
	Ab13: [ `Ab`, `Bb`, `C`, `Db`, `Eb`, `F`, `Gb` ],
	Abmaj: [ `Ab`, `C`, `Eb` ],
	Abm: [ `Ab`, `B`, `Eb` ],
	Abm6: [ `Ab`, `B`, `Eb`, `F` ],
	Abmaj7: [ `Ab`, `C`, `Eb`, `G` ],
	Abm7: [ `Ab`, `B`, `Eb`, `Gb` ],
	Abm7b5: [ `Ab`, `B`, `D`, `Gb` ],
	Absus: [ `Ab`, `Bb`, `Eb` ],
	Absus4: [ `Ab`, `Db`, `Eb` ],
	Abmaj9: [ `Ab`, `Bb`, `C`, `Eb`, `G` ],
	Abm9: [ `Ab`, `Bb`, `B`, `Eb`, `Gb` ],
	Abdim: [ `Ab`, `B`, `D` ],
	Abaug: [ `Ab`, `C`, `E` ],
}

export default chords
