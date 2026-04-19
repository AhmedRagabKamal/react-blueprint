import js from '@eslint/js';
import turboPlugin from 'eslint-plugin-turbo';
import tseslint from 'typescript-eslint';
import onlyWarn from 'eslint-plugin-only-warn';

export const config = [
  js.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      turbo: turboPlugin,
      onlyWarn, // Included per your request, but consider removing for strictness
    },
    rules: {
      // Missing env vars crash builds. Make this an error.
      'turbo/no-undeclared-env-vars': 'error',
    },
  },
  {
    ignores: ['dist/**', 'node_modules/**'],
  },
];
