module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2020: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "airbnb/base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "no-console": "off",
  },
  plugins: ["jest"],
};
