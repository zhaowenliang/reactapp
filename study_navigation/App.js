import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen';
import CreatePostScreen from './CreatePostScreen';
import LogoTitle from './LogoTitle';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation, route }) => ({
            headerTitle: props => <LogoTitle {...props}/>,
          })}
          // options={{
          //   // headerTitle: props => <LogoTitle {...props} />,
          //   headerRight: () => (
          //     <Button
          //       title="info"
          //       color='#0F0'
          //       onPress={() => alert('this is a button!')}/>
          //   ),
          // }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ itemId: 42 }}/>

        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={({ route }) => ({ title: route.params?.name })}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
