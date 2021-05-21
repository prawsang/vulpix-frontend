module.exports = {
  coverageReporters: ['text'],
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/'],
  testRegex: ['.*\\.test\\.(js|jsx|ts|tsx)$'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules',
    '.+\\.(png|jpg|ttf|woff|woff2|svg)$': 'jest-transform-stub',
  },
  testPathIgnorePatterns: ['/.next/', '/node_modules/', '/coverage/'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/tests/**',
    '!**/coverage/**',
    '!jest.config.js',
  ],
}
