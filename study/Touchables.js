import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

/**
 * TouchableHighlight：点击背景变化
 * TouchableOpacity：点击控件增加透明度
 * TouchableNativeFeedback：原生点击样式 android有水波纹
 * TouchableWithoutFeedback：点击没有任何反馈
 */
export default class Touchables extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!');
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>

        <TouchableNativeFeedback
          onPress={this._onPressButton}
          background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableWithoutFeedback
          onPress={this._onPressButton}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
