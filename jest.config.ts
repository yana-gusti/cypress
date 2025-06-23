import type { Config } from '@jest/types';
import * as path from "node:path";
const helpers = path.resolve(__dirname, '../askui/helpers/askui-helper.ts');

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  sandboxInjectedGlobals: [
    'Math',
  ],
  // setupFilesAfterEnv: [helpers],
  testEnvironment: '@askui/jest-allure-circus',
  // testMatch: ['**/tests/*.test.ts'],
  testMatch: ['**/tests/xlsx.test.ts'],
};

// eslint-disable-next-line import/no-default-export
export default config;
