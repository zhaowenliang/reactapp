import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator, Header } from 'react-navigation';
import  StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";

import RouteTable from '~/study_navigation/router/RouteTable';
import RoutePage from '~/study_navigation/router/RouteConfig'


export default class NavigationApp extends React.Component {

  render() {

    let initialPageName = this.props.pageName;
    let initialPageParams = this.props.pageParams;

    if (initialPageName === undefined) {
      initialPageName = RoutePage.MAIN;
    }

    // 修改标题栏高度
    Header.HEIGHT = 50;

    const routerConfig = {
      initialRouteName: initialPageName,
      initialRouteParams: initialPageParams,
      mode: Platform.select({
        ios: 'card',
        android: 'card',
      }),

      transitionConfig: () => ({
          screenInterpolator: StackViewStyleInterpolator.forHorizontal,   // 页面切换动画
        }
      ),

      headerLayoutPreset: 'center',       // 标题居中

      defaultNavigationOptions: {
        headerStyle: {
          height: Header.HEIGHT,          // 标题栏高度
        },
      }
    };

    const RootNavigator = createStackNavigator(RouteTable, routerConfig);
    const RootAppContainer = createAppContainer(RootNavigator);

    return (
      <RootAppContainer />
    );
  }

}
