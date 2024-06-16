import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackNavigator} from './Stack';
import {Drawer} from './Drawer';
import {RootTabNavigator} from './Tab';

export const RootNavigator = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      {/* <Drawer /> */}
      {/* <RootTabNavigator /> */}
      <RootStackNavigator />
    </NavigationContainer>
  );
};
