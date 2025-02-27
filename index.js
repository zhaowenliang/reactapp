import { AppRegistry } from 'react-native';
// import App from './App';
import App from './src/study_navigation/NavigationApp';

import { name as appName } from './app.json';

// 0.63之前版本关闭经过方法
// import { YellowBox } from 'react-native';
// 关闭其中某些yellow警告
// YellowBox.ignoreWarnings(['ViewPager: Calling `getNode()` on the ref of an Animated component is no longer necessary.',]);
// 关闭全部yellow警告
// console.disableYellowBox = true

// 0.63版本关闭警告方法
import { LogBox } from 'react-native';

// LogBox.ignoreAllLogs();
LogBox.ignoreLogs([
  'ViewPager: Calling `getNode()` on the ref of an Animated component is no longer necessary.',
  'currentlyFocusedField is deprecated and will be removed in a future release.',
]);

AppRegistry.registerComponent(appName, () => App);
