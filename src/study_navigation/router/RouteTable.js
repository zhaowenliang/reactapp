import ScrollableApp from '~/study_scrollable_tab_view/ScrollableApp'
import HomeScreen from '~/study_navigation/HomeScreen'
import Page1Screen from '~/study_navigation/Page1Screen'
import Page2Screen from '~/study_navigation/Page2Screen'
import Page3Screen from '~/study_navigation/Page3Screen'
import Page4Screen from '~/study_navigation/Page4Screen'

import RoutePage from './RouteConfig'


/**
 * 路由表
 */
export default RouteTable = {
  [RoutePage.MAIN]: ScrollableApp,

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
  [RoutePage.PAGE4]: Page4Screen,
};
