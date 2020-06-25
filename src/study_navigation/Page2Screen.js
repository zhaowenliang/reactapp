import React from 'react';
import { Text, Button, ToastAndroid, View, Alert, ActivityIndicator } from 'react-native';

import ToastExample from '~/native_modules/ToastExample';
import AppRCTImageView from '~/native_views/RCTImageView';


export default class Page2Screen extends React.Component {

  static navigationOptions = {
    header: null, // 默认隐藏标题栏
  }

  constructor(props) {
    super(props)

    this.onPressToastAndroid = this.onPressToastAndroid.bind(this)
    this.onPressToastExample = this.onPressToastExample.bind(this)
  }

  onPressToastAndroid() {
    ToastAndroid.show("ToastAndroid", ToastAndroid.SHORT)
  }

  onPressToastExample() {
    ToastExample.show("ToastExample", ToastAndroid.SHORT)
  }

  render() {
    return (
      <>
        <Text style={{ alignContent: "center" }}>This is Page2 Screen</Text>

        <View style={{ height: 10 }} />

        <Button
          title="ToastAndroid"
          onPress={this.onPressToastAndroid} />

        <View style={{ height: 10 }} />

        <Button
          title="ToastExample"
          onPress={this.onPressToastExample} />

        <View style={{ height: 10 }} />

        <Button
          title="Alert"
          onPress={() => {
            Alert.alert(
              "title",
              "message",
              [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
              ],
              { cancelable: true }
            )
          }} />

        <View style={{ height: 10 }} />

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
          <ActivityIndicator size="large" color="#0000ff" />
          <ActivityIndicator size="small" color="#00ff00" />
        </View>

        <View style={{ height: 10 }} />

        <AppRCTImageView
          src={[{ uri: 'https://facebook.github.io/react/logo-og.png' }]}
          style={[{ alignSelf: "center", margin: 4 }, { width: 40, height: 40 }]} />
      </>
    );
  }

}
