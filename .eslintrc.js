module.exports = {
  parser: "babel-eslint",
  env: {
    "browser": true,
    "node": true
  },
  globals: {
    "$": 1
  },
  rules: {
    "quotes": [1, "single"],
    "indent": [1, 2],
    "eol-last": 1,
    "prefer-template": 1,
    "comma-dangle": 1
  },
  parserOptions: {
    sourceType: "module"
  }
}
