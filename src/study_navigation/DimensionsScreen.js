import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

export default class DimissionsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'hahah',
      dimensions: { window, screen },
    };
  }

  onChange = ({ window, screen }) => {
    this.setState({ dimensions: { window, screen } });
  };

  componentDidMount() {
    Dimensions.addEventListener('change', this.onChange);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onChange);
  }

  render() {
    const { dimensions } = this.state;

    return (
      <View style={styles.container}>
        <Text>{`Window Dimensions: height - ${dimensions.window.height}, width - ${dimensions.window.width}`}</Text>
        <Text>{`Screen Dimensions: height - ${dimensions.screen.height}, width - ${dimensions.screen.width}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
