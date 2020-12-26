module.exports = {
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  env: {
    node: true,
    browser: true
  },
  rules: {
    'vue/arrow-spacing': 'error',
    'vue/require-default-prop': 'off',
    'vue/require-prop-types': 'off',
    "indent": ["error", 2, { "SwitchCase": 1 }],
    'no-unused-vars': 'warn', // не используеммые переменные,
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxEOF: 1
      }
    ],
    'no-multi-spaces': ['error'],
    'key-spacing': [
      'error',
      {
        mode: 'strict'
      }
    ],
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'key-spacing': ['error', { beforeColon: false }],
    // 'no-console': ["error", { allow: ["warn", "error"] }],
    "semi": ["error", "never"],
    "comma-dangle": ["error"]
  },

  parserOptions: {
    parser: 'babel-eslint',
  }
}
