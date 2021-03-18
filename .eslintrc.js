module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-jsx', 'standard-react', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    // TODO:
    // prefer-template
    // import/extensions (js,jsx: nein, rest ja)
    // no-console: never
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    // react/prop-types: error
    // object-shorthand: always
    // react/destructuring-assignment: always
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 120,
        semi: false,
        singleQuote: true,
      },
    ],
  },
}
