module.exports = {
  preset: 'ts-jest',
  globals: {},
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'lcov', 'text'],
  collectCoverageFrom: ['packages/*/src/**/*.ts'],
  watchPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  moduleNameMapper: {},
  rootDir: __dirname,
  testMatch: ['<rootDir>/packages/**/__tests__/**/*spec.[jt]s?(x)']
};
