import React from 'react';
import { View, TextInput, Text, Button, ToastAndroid } from 'react-native';

import storage from '~/utils/StorageUtils';

export default class StorageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      readText: '',
    };
  }

  render() {
    return (
      <>
        <TextInput
          placeholder="请输入内容"
          onChangeText={(text) => {
            this.setState({ inputText: text });
          }}
        />

        <View style={{ height: 10 }} />

        <Button
          title="写入"
          onPress={() => {
            storage.save({
              key: 'storageInputData',
              data: this.state.inputText,
            });
          }}
        />

        <View style={{ height: 10 }} />

        <Button
          title="读取"
          onPress={() => {
            storage
              .load({
                key: 'storageInputData',
              })
              .then((ret) => {
                this.setState({ readText: ret });
              })
              .catch((error) => {
                ToastAndroid.show(JSON.stringify(error), ToastAndroid.SHORT);
              });
          }}
        />

        <View style={{ height: 10 }} />

        <Text>{this.state.readText}</Text>
      </>
    );
  }
}
