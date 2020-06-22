import React from 'react';
import { Platform, BackHandler, Alert } from 'react-native';
import { createAppContainer, createStackNavigator, Header } from 'react-navigation';
import StackViewStyleInterpolator from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";

import RouteTable from '~/study_navigation/router/RouteTable';
import RoutePage from '~/study_navigation/router/RouteConfig'


export default class NavigationApp extends React.Component {

  backAction = () => {
    // 通过ref获取NavigationContainer，其中包含导航索引，当为0时，代表为根页面。
    const navigationContainer = this.page;
    const navigationState = navigationContainer.state;
    const navigationNav = navigationState.nav;
    const navigationIndex = navigationNav.index;

    if (navigationIndex === 0) {
      Alert.alert(
        "请稍等",
        "确定退出吗？",
        [
          { text: "取消", onPress: () => null, style: "cancel" },
          { text: "确定", onPress: () => BackHandler.exitApp() }
        ],
        { cancelable: true }
      );

      return true;
    }

    return false;
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.backAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress");
  }

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
      }),

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
      <RootAppContainer
        ref={(page) => {
          this.page = page
        }}
      />
    );
  }

}
