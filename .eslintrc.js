module.exports = {
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
    'allowImportExportEverywhere': false,
    'codeFrame': false
  },
  'extends': 'airbnb-base',
  'env': {
    'browser': true,
    'node': true,
    'es6': true
  }
};