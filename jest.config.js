module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // your path aliases
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js', // ignore CSS imports
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
