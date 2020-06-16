// babel-plugin-root-import 导包路径别名
const rootImportOpts = {
  root: __dirname,
  rootPathPrefix: '@',
  rootPathSuffix: 'src',
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [["babel-plugin-root-import", rootImportOpts]]
};
