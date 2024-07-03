import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import Detail from '../../../../Tripmate/src/screens/Home/Detail';
import {RootStackNavigator} from '../../../../Tripmate/src/navigation/Stack';

export const RootDrawer = (): React.JSX.Element => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={RootStackNavigator} />
      <Drawer.Screen name="Detail" component={Detail} />

      {/* Add more screens as needed */}
    </Drawer.Navigator>
  );
};
