const { pathsToModuleNameMapper } = require("ts-jest");
const { paths } = require("./tsconfig.json").compilerOptions;
const { moduleMappings } = require('./create-d3-moduleMappings');

const moduleNameMapper = {
  ...pathsToModuleNameMapper(paths, { prefix: "<rootDir>" }),
  ...moduleMappings
};

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  moduleNameMapper,
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
  transformIgnorePatterns: ['node_modules/(?!@angular|@ngrx|@swimlane)'],

  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        allowSyntheticDefaultImports: true,
      },
    ],
    '^.+\\.js$': 'babel-jest',
  },
};
