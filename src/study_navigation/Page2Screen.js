import React from 'react';
import { Text, Button, ToastAndroid, View } from 'react-native';

import ToastExample from '~/native_modules/ToastExample';
import AppRCTImageView from '~/native_views/RCTImageView';


export default class Page2Screen extends React.Component {

  // 如果不在路由表中配置navigationOptions，则会默认使用此处配置。
  static navigationOptions = {
    title: 'this page2',
  }

  render() {
    return (
      <>
        <Text style={{ alignContent: "center" }}>This is Page2 Screen</Text>

        <View style={{ height: 10 }} />

        <Button
          title="ToastAndroid"
          onPress={() => {
            ToastAndroid.show("ToastAndroid", ToastAndroid.SHORT)
          }} />

        <View style={{ height: 10 }} />

        <Button
          title="ToastExample"
          onPress={() => {
            ToastExample.show("ToastExample", ToastAndroid.SHORT)
          }} />

        <View style={{ height: 10 }} />

        <AppRCTImageView
          src={[{ uri: 'https://facebook.github.io/react/logo-og.png' }]}
          style={[{ alignSelf: "center", margin: 4 }, { width: 40, height: 40 }]} />
      </>
    );
  }

}
