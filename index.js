module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2018,
    "jsx": true,
    "sourceType": "module",
    "useJSXTextNode": true
  },
  "plugins": ["@typescript-eslint", "jest", "react", "prettier"],
  "rules": {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowTypedFunctionExpressions": true
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "react/prop-types": [0]
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
