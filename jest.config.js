module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  coverageReporters: ['text', 'lcov'],
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx}',
    'src/utils.js',
  ],
};
