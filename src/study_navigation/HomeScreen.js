import React from 'react';
import { StatusBar, Text, View } from 'react-native';


export default class HomeScreen extends React.Component {

  render() {
    return (
      <>
        <StatusBar backgroundColor={'green'} barStyle={'light-content'} />

        <Text>This is HomeScreen</Text>

        <View style={{ height: 10 }} />
      </>
    );
  }

}
