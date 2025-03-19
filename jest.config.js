module.exports = {
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',
      '^.+\\.(js|jsx)$': 'babel-jest', 
    },
    transformIgnorePatterns: [
      '/node_modules/(?!@tsparticles)/', 
    ],
    testEnvironment: 'jsdom', 
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy', 
      '^@/(.*)$': '<rootDir>/src/$1',  
    },
    setupFilesAfterEnv: ['@testing-library/jest-dom'], 
    testPathIgnorePatterns: ['/node_modules/', '/.next/'], 
  };
  