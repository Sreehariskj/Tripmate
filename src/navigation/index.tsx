import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootDrawer} from './Drawer';

export const RootNavigator = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <RootDrawer />
    </NavigationContainer>
  );
};
