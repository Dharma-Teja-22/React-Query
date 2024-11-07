// import js from '@eslint/js'
// import globals from 'globals'
// import reactHooks from 'eslint-plugin-react-hooks'
// import reactRefresh from 'eslint-plugin-react-refresh'
// import tseslint from 'typescript-eslint'

// export default tseslint.config(
//   { ignores: ['dist'] },
//   {
//     extends: [js.configs.recommended, ...tseslint.configs.recommended],
//     files: ['**/*.{ts,tsx}'],
//     languageOptions: {
//       ecmaVersion: 2020,
//       globals: globals.browser,
//     },
//     plugins: {
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//     },
//     rules: {
//       ...reactHooks.configs.recommended.rules,
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   },
// )


import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tanstackQuery from '@tanstack/eslint-plugin-query';

export default {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: tseslint.parser,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: ['./tsconfig.json'], // Ensures correct TypeScript config is used
  },
  overrides: [
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'], // Targets TS and TSX files in 'src' folder
      extends: [
        js.configs.recommended,
        ...tseslint.configs.recommended,
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'plugin:@tanstack/query/recommended',
      ],
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
        '@tanstack/query': tanstackQuery,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
      globals: globals.browser,
    },
  ],
};
