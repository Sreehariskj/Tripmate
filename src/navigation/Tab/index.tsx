import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../screens/Home';
import {hp, ms, wp} from '../../helper/responsive';
import {FONT_SIZE, SPACING} from '../../constants/sizes';
import {useTheme} from '../../theme/ThemeContext';
import {DummyComponent} from '../../components/DummyComponent';

export const RootTabNavigator = () => {
  // Create a bottom tab navigator
  const Tab = createBottomTabNavigator();
  const {themeColors} = useTheme();
  const iconSize = ms(32);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: hp(12),
          left: 0,
          right: 0,
          backgroundColor: 'transparent', // make tab bar transparent
          elevation: 0, // remove shadow on Android
          marginHorizontal: ms(SPACING.SM),
          height: hp(50),
          borderRadius: ms(SPACING.XL),
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              color={themeColors.text}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Time"
        component={DummyComponent}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'clock-time-three' : 'clock-time-three-outline'}
              color={themeColors.text}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={DummyComponent}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'heart' : 'heart-outline'}
              color={themeColors.text}
              size={iconSize}
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={DummyComponent}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              color={themeColors.text}
              size={iconSize}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
