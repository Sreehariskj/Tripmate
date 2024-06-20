import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootTabNavigator} from '../Tab';

export const RootStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      // initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="RootTab" component={RootTabNavigator} />
    </Stack.Navigator>
  );
};
