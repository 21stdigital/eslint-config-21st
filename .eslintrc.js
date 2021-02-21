module.exports = {
  parser: 'babel-eslint',
  extends: ['standard', 'standard-jsx', 'standard-react', 'plugin:prettier/recommended', 'prettier/react'],
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
