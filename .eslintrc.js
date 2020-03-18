module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    // 'plugin:prettier/recommended'
  ],
  plugins: ['vue','prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'prettier/prettier': 'error',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    // indent: ['warn', 2],
    'no-multiple-empty-lines': 2,
    'no-mixed-spaces-and-tabs': 1,
    'no-multi-spaces': 2,
    'space-infix-ops': 1,
    'no-new-func': 2,
    'no-redeclare': 2,
    'no-implied-eval': 2,
    'multiline-ternary': ['warn', 'always-multiline'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
