import React, { useState } from 'react';
import { Button, Image, Text, View } from 'react-native';

function Cat(props) {
  const [isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>Hello, I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!</Text>

      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disable={!isHungry}
        title={isHungry ? 'Pour me some milk, please!' : 'Thank you!'}
      />
    </View>
  );
}

export default function Cafe() {
  return (
    <>
      <Text>Welcome!</Text>
      <Cat name="Maru"/>
      <Cat name="Spot"/>

      <Image
        source={{ uri: 'http://e.hiphotos.baidu.com/zhidao/pic/item/d62a6059252dd42a1c362a29033b5bb5c9eab870.jpg' }}
        style={{ width: 360, height: 360, marginTop: 20 }}
      />
    </>
  );
}
