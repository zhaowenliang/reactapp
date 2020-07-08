import { Platform, StatusBar } from 'react-native';

/**
 * 状态栏高度
 * StatusBar.currentHeight只能获取android平台的状态栏高度，
 * ios平台状态栏高度需要从原生端获取。
 */
export const statusBarHeight = Platform.select({
  ios: 0,
  android: StatusBar.currentHeight,
});
