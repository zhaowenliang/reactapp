import React from 'react';
import { View, Text, Button } from 'react-native';

import { RoutePage } from '@/study_navigation/router/RouteTable'


export default class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <>
        <Text>This is HomeScreen</Text>

        <Button
          title="Go to Page1"
          onPress={() => navigate(RoutePage.PAGE1, { name: 'Devio' })}
        />

        <View style={{ height: 10 }} />

        <Button
          title="Go to Page3"
          onPress={() => navigate(RoutePage.PAGE3, { mode: 'edit' })}
        />
      </>
    );
  }

}
