const { getESLintConfig } = require('@iceworks/spec');

module.exports = getESLintConfig('react-ts', {
  extends: [
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@iceworks/best-practices/recommend-functional-component': 'off',
    'no-return-assign': 'warn',
    'no-nested-ternary': 'warn',
    'no-case-declarations': 'warn',
    'no-fallthrough': 'warn',
  },
});
