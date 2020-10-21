module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  plugins: ["prettier", "@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    "object-curly-spacing": ["warn", "always"],
    "no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
      },
    ],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "none",
      },
    ],
    "@typescript-eslint/no-explicit-any": [
      "error",
      {
        ignoreRestArgs: true,
      },
    ],
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "react/jsx-key": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.spec.js",
          "**/*.spec.jsx",
          "**/*.spec.ts",
          "**/*.mock.ts",
          "**/*.spec.tsx",
        ],
      },
    ],
    // note you must disable the base rule as it can report incorrect errors (from https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md#how-to-use)
    "no-use-before-define": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unused-vars": ["error", { args: "none" }],
    "@typescript-eslint/no-non-null-assertion": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "react/jsx-boolean-value": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-wrap-multilines": "off",
    "react/destructuring-assignment": "off",
    "array-type": "off",
    curly: "error",
    eofline: "off",
    "max-classes-per-file": "off",
    "new-parens": "error",
    "no-var": "error",
    "no-console": "error",
    "no-undef": "off",
    "object-literal-shorthand": "off",
    "object-literal-sort-keys": "off",
    "prefer-const": "error",
    radix: "error",
    semi: ["error", "always"],
    "default-case": "error",
    "use-isnan": "error",
    "object-curly-spacing": ["warn", "always"],
    "import/no-extraneous-dependencies": "off",
  },
}
