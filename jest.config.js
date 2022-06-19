module.exports = {
	preset: `ts-jest`,
	testEnvironment: `node`,
	moduleNameMapper: {
		'^@/(.*)$': `<rootDir>/src/$1`,
		'^@modules/(.*)$': `<rootDir>/src/modules/$1`,
		'^@resources/(.*)$': `<rootDir>/src/resources/$1`,
		'^@tests/(.*)$': `<rootDir>/src/tests/$1`,
	},
}