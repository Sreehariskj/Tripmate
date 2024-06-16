import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/Home';
import {DrawerContent} from './DrawerContent';
import {RootTabNavigator} from '../Tab';

export const Drawer = (): React.JSX.Element => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeTab" component={RootTabNavigator} />
      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
};
