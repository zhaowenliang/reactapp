import React from 'react';
import { View, Text, Button, Image, ToastAndroid } from 'react-native';

export default class Page1Screen extends React.Component {

  static navigationOptions = {
    title: 'Page1Screen',
  }

  render() {
    const { navigation } = this.props;

    return (
      <>
        <Text>This is Page1 Screen</Text>

        <View style={{ height: 10 }} />

        <Button
          title="to page2 screen"
          onPress={() => {
            navigation.navigate('Page2')
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
