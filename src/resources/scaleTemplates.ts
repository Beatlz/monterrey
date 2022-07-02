require(`module-alias/register`)

const scaleTemplates = {
	chromatic: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
	blues: [ 3, 5, 6, 7, 10 ],
	maj : [ 2, 4, 5, 7, 9, 11 ],
	m: [ 2, 3, 5, 7, 8, 10 ],
	harmonicMaj: [ 2, 4, 5, 7, 8, 11 ],
	harmonicMin: [ 2, 3, 5, 7, 8, 11 ],
	melodicMin: [ 2, 3, 5, 7, 9, 11 ],
	pentatonicMaj: [ 2, 4, 5, 9 ],
	pentatonicMin: [ 3, 5, 7, 10 ],
	ionian: [ 2, 4, 5, 7, 9, 11 ],
	dorian: [ 2, 3, 5, 7, 9, 10 ],
	phrygian: [ 1, 3, 5, 7, 8, 10 ],
	lydian: [ 2, 4, 6, 7, 9, 11 ],
	mixolydian: [ 2, 4, 5, 7, 9, 10 ],
	aeolian: [ 2, 3, 5, 7, 8, 10 ],
	locrian: [ 1, 3, 5, 6, 8, 10 ],
}

export default scaleTemplates
