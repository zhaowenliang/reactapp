import HomeScreen from '@StudyNavigation/HomeScreen'
import Page1Screen from '@StudyNavigation/Page1Screen'

/**
 * 路由表
 */
const RouteTable = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: '首页',
    }
  },
  Page1: {
    screen: Page1Screen,
    navigationOptions: {
      title: 'Page1',
    }
  }
};

export default RouteTable;
