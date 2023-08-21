module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: [
    '@typescript-eslint',
    'jsx-a11y',
    'astro',
    'unused-imports',
    'prettier',
  ],
  extends: [
    'plugin:astro/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prettier/prettier': ['error'],
  },
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'astro/no-set-html-directive': 'warn',
        'astro/no-set-text-directive': 'warn',
        'astro/no-unused-css-selector': 'warn',
        'astro/prefer-class-list-directive': 'warn',
        'astro/jsx-a11y/alt-text': 'warn',
      },
    },
    {
      // Define the configuration for `.ts` and `.tsx` files.
      files: ['*.ts'],
      // Extend the following rules for TypeScript files.
      rules: {
        // disable @typescript-eslint/triple-slash-reference
        'no-unused-vars': 'off',
        'no-console': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/triple-slash-reference': 'off',
        //#region  //*=========== Unused Import ===========
        '@typescript-eslint/no-unused-vars': 'off',

        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        //#endregion  //*======== Unused Import ===========
      },
    },
  ],
};
