import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './Stack';

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
