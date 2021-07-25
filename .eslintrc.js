module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ["@typescript-eslint", "react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "react/prop-types": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-ignore": "off",
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["warn"],
    "@typescript-eslint/no-var-requires": "off",
    "react/display-name": ["off", { 'ignoreTranspilerName': false }],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn"],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
};