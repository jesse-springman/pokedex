// const { TestEnvironment } = require("jest-environment-jsdom");

module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/tests/setup-test.js'],

    moduleNameMapper: {
      '\\.(gif|ttf|eot|svg|png|jpg)$' : '<rootDir>/tests/mocks/file-Mocks.js',
      '\\.(css|less|sass|scss)$' : 'identity-obj-proxy',
    },

    // transform: {
    //   '^.+\\.jsx?$': 'babel-jest',
    // },
  };
  