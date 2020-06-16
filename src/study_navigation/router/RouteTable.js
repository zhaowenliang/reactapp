import HomeScreen from '@/study_navigation/HomeScreen'
import Page1Screen from '@/study_navigation/Page1Screen'

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
