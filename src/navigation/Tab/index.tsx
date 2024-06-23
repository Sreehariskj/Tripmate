import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BlurView} from '@react-native-community/blur';
import Home from '../../screens/Home';
import {hp, ms, useViewPort, wp} from '../../helper/responsive';
import {FONT_SIZE, FONT_WEIGHT, SPACING} from '../../constants/sizes';
import {useTheme} from '../../theme/ThemeContext';
import {DummyComponent} from '../../components/DummyComponent';
import {StyleSheet, View} from 'react-native';
import ProfileScreen from '../../screens/Profile';

// TAB SCREEN DATA
const TAB_SCREEN_DATA = [
  {name: 'Home', component: Home, iconName: 'home', iconFocus: 'home-outline'},
  {
    name: 'Time',
    component: DummyComponent,
    iconName: 'clock-time-three',
    iconFocus: 'clock-time-three-outline',
  },
  {
    name: 'Favorite',
    component: DummyComponent,
    iconName: 'heart',
    iconFocus: 'heart-outline',
  },
  {
    name: 'User',
    component: ProfileScreen,
    iconName: 'account',
    iconFocus: 'account-outline',
  },
];

// Blur View Component
const tabBarBackground = () => (
  <BlurView
    style={StyleSheet.absoluteFill}
    blurType="light"
    blurAmount={10}
    blurRadius={15}
    reducedTransparencyFallbackColor="white" // Fallback color for Android
  />
);

export const RootTabNavigator = () => {
  // Create a bottom tab navigator
  const Tab = createBottomTabNavigator();
  const {themeColors} = useTheme();
  const iconSize = ms(25);
  const {setVw, setVh} = useViewPort();
  return (
    <View
      style={{
        // fix: resolve tab bar pushing itself up when opening keyboard issue
        width: setVw(100),
        height: setVh(100),
      }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          // tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: hp(12),
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,.1)', // make tab bar transparent
            elevation: 0, // remove shadow on Android
            marginHorizontal: ms(SPACING.SM),
            height: hp(50),
            borderRadius: ms(SPACING.XXL),
            borderTopWidth: 0,
            overflow: 'hidden',
          },
          tabBarBackground: tabBarBackground,
        }}>
        {TAB_SCREEN_DATA.map(item => (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
            options={{
              tabBarIcon: ({color, size, focused}) => (
                <Icon
                  name={focused ? item.iconName : item.iconFocus}
                  color={themeColors.text}
                  size={iconSize}
                />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};
