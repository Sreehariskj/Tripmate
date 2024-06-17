import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MenuCard from './MenuCard';
import {ms} from '../../helper/responsive';
import {useNavigation} from '@react-navigation/native';
import {useTheme} from '../../theme/ThemeContext';

export const MenuList = () => {
  const navigation = useNavigation();
  const {themeColors} = useTheme;
  const menuData = [
    {
      name: 'Home',
      iconName: 'home',
      onPress: () => navigation.navigate('Home'),
    },
    {
      name: 'Favorite',
      iconName: 'heart',
      onPress: () => navigation.navigate('Home'),
    },
    {
      name: 'Profile',
      iconName: 'account',
      onPress: () => navigation.navigate('Home'),
    },
    {
      name: 'Feedbacks',
      iconName: 'comment',
      onPress: () => navigation.navigate('Home'),
    },
    {
      name: 'Settings',
      iconName: 'cog',
      onPress: () => navigation.navigate('Home'),
    },
  ];

  return (
    <FlatList
      data={menuData}
      renderItem={({item}) => <MenuCard item={item} />}
      keyExtractor={item => item.name}
      style={{marginTop: ms(15)}}
    />
  );
};

const styles = StyleSheet.create({});
