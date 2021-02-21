module.exports = {
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  }
}
