import {
  // StyleSheet,
  Platform,
} from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     ...Platform.select({
//       ios: {
//         backgroundColor: 'red',
//       },
//       android: {
//         backgroundColor: 'blue',
//       },
//     }),
//   },
// });

// const Component = Platform.select({
//   ios: () => import('ComponentIOS'),
//   android: () => import('ComponentAndroid'),
// });
//
// <Component />

if (Platform.OS === 'ios') {
  const majorVersionIOS = parseInt(Platform.Version, 10);
  if (majorVersionIOS <= 9) {
    console.log('Work around a change in behavior');
  }
} else if (Platform.OS === 'android') {
  if (Platform.Version === 25) {
    console.log('Running on Nougat!');
  }
}

