import { AppRegistry } from 'react-native';
// import App from './App';

import NavigationApp from './src/study_navigation/NavigationApp';

import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => NavigationApp);
