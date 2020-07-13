module.exports = {
  root: true,
  env: {
    node: true,
    es2020: true,
  },
  extends: ['@react-native-community', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {},
};
