import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import RouteTable from '@/study_navigation/router/RouteTable';

export default class NavigationApp extends React.Component {

  render() {

    let initialPageName = this.props.pageName;
    let initialRouteParams = this.props.pageParams;
    console.log('NavigationApp -> initialPageName: ' + initialPageName);
    console.log('NavigationApp -> initialRouteParams: ' + JSON.stringify(initialRouteParams));

    if (initialPageName === undefined) {
      initialPageName = 'Home';
    }

    const routerConfig = {
      initialPageName: initialPageName,
      initialRouteParams: initialRouteParams,
      mode: Platform.select({
        ios: 'card',
        android: 'card',
      }),
    };

    const RootNavigator = createStackNavigator(RouteTable, routerConfig);
    const RootAppContainer = createAppContainer(RootNavigator);

    return (
      <RootAppContainer/>
    );
  }

}
