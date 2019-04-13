module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es6: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    'space-before-function-paren': 'off',
    'semi': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  }
}
