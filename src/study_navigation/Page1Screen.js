import React from 'react';
import { View, Text, Button, Image } from 'react-native';

import RoutePage from '~/study_navigation/router/RouteConfig'


export default class Page1Screen extends React.Component {

  // 如果不在路由表中配置navigationOptions，则会默认使用此处配置。
  static navigationOptions = {
    title: 'Page1',
  }

  render() {
    const { navigation } = this.props;

    return (
      <>
        <Text>This is Page1 Screen</Text>

        <View style={{ height: 10 }} />

        <Button
          title="Go to Page1"
          onPress={() => navigation.navigate(RoutePage.PAGE1, { name: 'Devio' })}
        />

        <View style={{ height: 10 }} />

        <Button
          title="Go to Page2"
          onPress={() => {
            navigation.navigate(RoutePage.PAGE2)
            // navigation.navigate('Tab2')  // 在bottomTab中导航，需要导航到bottomTab配置的路由表中。
          }} />

        <View style={{ height: 10 }} />

        <Button
          title="Go to Page3"
          onPress={() => navigation.navigate(RoutePage.PAGE3, { title: 'Page3', mode: 'edit' })}
        />

        <View style={{ height: 10 }} />

        <Button
          title="Go to Page4"
          onPress={() => {
            navigation.navigate(RoutePage.PAGE4)
          }} />

        <View style={{ height: 10 }} />

        <Image
          source={require('../image/ic_vip.png')}
          style={{ alignSelf: "center", margin: 4 }} />

        <Image
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
          style={[{ alignSelf: "center", margin: 4 }, { width: 40, height: 40 }]} />
      </>
    );
  }

}
