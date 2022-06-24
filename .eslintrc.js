module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    camelcase: 'error',
    'spaced-comment': 'error',
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'react/jsx-props-no-spreading': 0,
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'no-restricted-exports': ['off', { restrictedNamedExports: ['default'] }],
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/button-has-type': 'off',
  },
}
