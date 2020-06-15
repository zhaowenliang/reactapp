import React from 'react';
import { Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    return (
      <>
        <Text>This is HomeScreen</Text>
        <Button
          title="Go to Page1"
          onPress={() => navigate('Page1', { name: 'Devio' })}
        />
      </>
    );
  }

}
