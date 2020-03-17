// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'indent':'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-multiple-empty-lines':'off',
    'key-spacing':'off',
    'spaced-comment':'off',
    'space-before-blocks':'off',
    'comma-spacing':'off',
    'space-before-function-paren':'off',
    'keyword-spacing':'off',
    'eslint-disable-next-line':'off',
    //引号类型 `` "" ''
    "quotes": [1, "single"],
    // 使用 "" 关闭
    "quotes": [0, "double"],
    'semi': 0,
    "eqeqeq": 'off'
  }
}
