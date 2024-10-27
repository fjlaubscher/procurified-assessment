const globals = require('globals');
const pluginJs = require('@eslint/js');
const recommendedPrettierEslintPlugin = require('eslint-plugin-prettier/recommended');

module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: { sourceType: 'commonjs' }
  },
  { languageOptions: { globals: globals.node } },
  {
    files: ['**/*.test.js'],
    plugins: {
      jest: require('eslint-plugin-jest')
    },
    languageOptions: { globals: globals.jest }
  },
  pluginJs.configs.recommended,
  recommendedPrettierEslintPlugin
];
