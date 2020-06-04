import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import styles from './styles/study_styles';

import ToastExample from '../native_modules/ToastExample';

export default function DetailsScreen({ navigation, route }) {
  // 从route中取出参数
  const { itemId, otherParams } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        console.log('DetailsScreen lost Focus!');
      };
    }),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Text style={styles.text}>itemId: {JSON.stringify(itemId)}</Text>
      <Text style={styles.text}>otherParams: {JSON.stringify(otherParams)}</Text>

      <View style={styles.button}>
        <Button
          title="Go to Details... again"
          onPress={() => navigation.navigate('Details')}/>
      </View>

      <View style={styles.button}>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}/>
      </View>

      <View style={styles.button}>
        <Button
          title="Go back"
          onPress={() => navigation.goBack()}/>
      </View>

      <View style={styles.button}>
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}/>
      </View>

      <View style={styles.button}>
        <Button
          title="ToastExample"
          onPress={() => ToastExample.showShort('这是原生提供的方法')}/>
      </View>
    </View>
  );
}
