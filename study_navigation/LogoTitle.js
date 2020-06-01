import * as React from 'react';
import { Image } from 'react-native';

export default function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 20 }}
      source={require('../image/ic_vip.png')}
    />
  );
}
