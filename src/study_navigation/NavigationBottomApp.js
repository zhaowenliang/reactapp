import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Page1Screen from './Page1Screen';
import Page2Screen from './Page2Screen';
import Page3Screen from './Page3Screen';

export default class NavigatioBottomApp extends React.Component {
  render() {
    const routerConfigMap = {
      Tab1: {
        screen: Page1Screen,
        naviagtionOptions: {
          tabBarLabel: 'Page1',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon name={focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{ color: tintColor }} />
          ),
        },
      },
      Tab2: {
        screen: Page2Screen,
        naviagtionOptions: {
          tabBarLabel: 'Page2',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon name={focused ? 'ios-person' : 'ios-person-outline'} size={26} style={{ color: tintColor }} />
          ),
        },
      },
      Tab3: {
        screen: Page3Screen,
        naviagtionOptions: {
          tabBarLabel: 'Page3',
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'} size={26} style={{ color: tintColor }} />
          ),
        },
      },
    };

    const drawConfig = {
      initialRouteName: 'Tab3',
      order: ['Tab1', 'Tab2', 'Tab3'],

      // tabBarComponent: TabBarComponent,
      tabBarOptions: {
        showIcon: true,
        showLabel: true,

        inactiveTintColor: '#a6a1aa',
        activeTintColor: '#e91e63',

        style: { backgroundColor: '#f5f4f9', height: 55 },
        labelStyle: { fontSize: 13 },
      },
    };

    const RootNavigator = createBottomTabNavigator(routerConfigMap, drawConfig);
    const RootAppContainer = createAppContainer(RootNavigator);

    return <RootAppContainer />;
  }
}
