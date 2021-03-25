module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  rules: {
    'prefer-template': 'error',
    // only a warning since it's not auto-fixable and not a major problem
    'import/extensions': [
      'warn',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    /* 
      not auto-fixable yet:
      'react/sort-prop-types': ['error', { callbacksLast: true, shorthandFirst: true, reservedFirst: true }],
    */
    'react/jsx-sort-props': ['error', { callbacksLast: true, shorthandFirst: true, reservedFirst: true }],
    // skipUndeclared: optional boolean to only error on components that have a propTypes block declared.
    // should be true for now, maybe remove later
    'react/prop-types': ['error', { skipUndeclared: true }],
    'object-shorthand': ['error'],
    'react/destructuring-assignment': ['warn', 'always'],
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
