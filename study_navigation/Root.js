import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile}/>
      <Stack.Screen name="Settings" component={Settingsss}/>
    </Stack.Navigator>
  );
}
