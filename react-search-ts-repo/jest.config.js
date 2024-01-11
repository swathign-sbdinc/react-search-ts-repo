
// module.exports = {
//   testEnvironment: 'jest-environment-jsdom',
//   setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],

// };

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}