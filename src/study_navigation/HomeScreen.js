import React from 'react';
import { StatusBar, Text, View, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState((state) => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={'green'} barStyle={'light-content'} />

        <WarningBanner warn={this.state.showWarning} />

        <Button onPress={this.handleToggleClick} title={this.state.showWarning ? 'Hide' : 'Show'} />

        <View style={{ height: 10 }} />
      </>
    );
  }
}

// custom view
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <View>
      <Text style={{ fontSize: 40, color: 'red', alignSelf: 'center' }}>Warning!</Text>
    </View>
  );
}
