import { AppRegistry } from 'react-native';
// import App from './App';
import App from './src/study_navigation/NavigationApp';

import { name as appName } from './app.json';

import { YellowBox } from 'react-native';

// 关闭其中某些yellow警告
YellowBox.ignoreWarnings([
    'ViewPager: Calling `getNode()` on the ref of an Animated component is no longer necessary.'
]);

// 关闭全部yellow警告
// console.disableYellowBox = true

AppRegistry.registerComponent(appName, () => App);
