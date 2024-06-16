import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import {Drawer} from '../Drawer';
import {RootTabNavigator} from '../Tab';

export const RootStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Drawer} />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      {/* <Stack.Screen name="Home" component={Home} /> */}
    </Stack.Navigator>
  );
};
