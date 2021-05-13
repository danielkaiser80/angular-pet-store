const {pathsToModuleNameMapper} = require('ts-jest/utils');
// load all settings from the TypeScript configuration
const {compilerOptions} = require('./tsconfig.app.json');

module.exports = {
  preset: 'jest-preset-angular', // load the adapter
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
    },
  },
  roots: ['./src/'], // start searching for files from root
  testMatch: ['**/+(*.)+(spec).+(ts|js)'], // test file extensions
  setupFilesAfterEnv: ['./src/window-mock.ts'], // setup env file
  collectCoverage: true, // code coverage
  coverageReporters: ['html'], // generate the report in HTML
  coverageDirectory: 'coverage/my-ng-app', // folder for coverage
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions && compilerOptions.paths || {}, {prefix: '/'})
};
