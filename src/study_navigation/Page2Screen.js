import React from 'react';
import { Text, Button, ToastAndroid, View } from 'react-native';

import ToastExample from '~/native_modules/ToastExample';
import AppRCTImageView from '~/native_views/RCTImageView';


export default class Page2Screen extends React.Component {

  static navigationOptions = {
    header: null, // 默认隐藏标题栏
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
