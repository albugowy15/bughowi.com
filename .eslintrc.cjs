module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['@typescript-eslint', 'astro'],
  extends: [
    'plugin:astro/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
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
  ],
};
