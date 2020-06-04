import * as React from 'react';
import { Button, Image, Text, View } from 'react-native';
import styles from './styles/study_styles';

import AppRoute from '../native_modules/AppRoute';

export default function HomeScreen({ navigation, route }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation, count]);

  React.useEffect(() => {
    if (route.params?.post) {
      // to do something
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../image/ic_vip.png')} />
      <Image
        source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        style={[styles.image, { width: 40, height: 40 }]} />

      <Text style={styles.text}>Home Screen</Text>

      <View style={styles.button}>
        <Button
          title="AppRoute"
          onPress={() => AppRoute.navigation("1111111111", { id: 1 })}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Go to Detail"
          // 带参数导航
          onPress={() => navigation.navigate('Details', {
            itemId: 86,
            otherParams: 'anything you want here',
          })} />
      </View>

      <View style={styles.button}>
        <Button
          title="Create Post"
          onPress={() => navigation.navigate('CreatePost', { name: '创建' })} />

        <Text style={styles.text}>Post: {route.params?.post}</Text>
      </View>

      <Text style={styles.text}>count: {count}</Text>
    </View>
  );
}

