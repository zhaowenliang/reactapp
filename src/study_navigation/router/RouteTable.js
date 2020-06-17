import HomeScreen from '~/study_navigation/HomeScreen'
import Page1Screen from '~/study_navigation/Page1Screen'
import Page2Screen from '~/study_navigation/Page2Screen'
import Page3Screen from '~/study_navigation/Page3Screen'

/**
 * 路由页面
 */
export const RoutePage = {
  HOME: 'Home',             // 首页

  PAGE1: 'Page1',           // page1

  PAGE2: 'Page2',           // page2
  
  PAGE3: 'Page3',           // page3
}

/**
 * 路由表
 */
export default RouteTable = {
  [RoutePage.HOME]: {
    screen: HomeScreen,
    navigationOptions: {
      title: '首页',
    }
  },

  // screen简写
  [RoutePage.PAGE1]: Page1Screen,
  [RoutePage.PAGE2]: Page2Screen,
  [RoutePage.PAGE3]: Page3Screen,
};
